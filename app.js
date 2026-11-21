/* Maple English — 纯前端英语学习：单词间隔复习 / 听写 / 口语跟读 */
(() => {
"use strict";

// ---------- 存储（按用户名分开；网页版另存云端） ----------
const KEY_OLD = "maple-en-v1";              // 第一版（无用户名）的存储键
const USERS_KEY = "maple-en-users", LAST_KEY = "maple-en-last";
const inArtifact = !!(window.claude && window.claude.use);
const DEFAULT = {
  updatedAt: 0,
  settings: { voice: "", rate: 0.95, newPerDay: 15, dictGoal: 10, speakGoal: 10, recLang: "en-CA" },
  cards: {},          // 单词复习状态 key -> {ef, iv, reps, due, lapses}
  custom: [],         // 自己添加的生词
  days: {},           // 'YYYY-MM-DD' -> {nw, rv, dict, speak}
  dictIdx: { 1: 0, 2: 0, 3: 0 },
  dictStats: { n: 0, sum: 0 },
  speakStats: { n: 0, sum: 0 },
  sceneDone: {},      // 情景 id -> 最近练习日期
};
let S = structuredClone(DEFAULT);
let USER = null; // {name, slug}
const lsGet = k => { try { return localStorage.getItem(k); } catch { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); return true; } catch { return false; } };
const userKey = slug => KEY_OLD + ":u:" + slug;
// 名字转成存储路径可用的字符（中文等转成 +4e2d 形式）
const slugOf = name => name.trim().toLowerCase().replace(/\s+/g, "-")
  .replace(/[^a-z0-9_\-~:@]/g, c => "+" + c.codePointAt(0).toString(16)).slice(0, 180) || "user";
function parseState(raw) {
  try {
    const o = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (o && o.settings) return deepMerge(structuredClone(DEFAULT), o);
  } catch { /* ignore */ }
  return null;
}
function knownLocalUsers() { try { return JSON.parse(lsGet(USERS_KEY) || "[]"); } catch { return []; } }
const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej({ code: "timeout" }), ms))]);

// 云端：claude.ai 账号下的私有空间 data/users/<id>/<用户名>
const cloud = { db: null, uid: null };
cloud.ready = (async () => {
  if (!inArtifact) return false;
  try {
    const [db, user] = await Promise.all([claude.use("db"), claude.use("user")]);
    if (!db || !user) return false;
    const uid = await user.id();
    if (!uid) return false;
    cloud.db = db; cloud.uid = uid; return true;
  } catch { return false; }
})();
const profileRef = slug => cloud.db.collection("data/users/" + cloud.uid).doc(slug);
async function pack(obj) {
  const json = JSON.stringify(obj);
  if (typeof CompressionStream === "undefined") return { fmt: "json", body: json };
  const stream = new Blob([json]).stream().pipeThrough(new CompressionStream("gzip"));
  const buf = new Uint8Array(await new Response(stream).arrayBuffer());
  let bin = "";
  for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode.apply(null, buf.subarray(i, i + 0x8000));
  return { fmt: "gz64", body: btoa(bin) };
}
async function unpack(d) {
  if (!d) return null;
  if (d.fmt === "json") return parseState(d.body);
  const buf = Uint8Array.from(atob(d.body), c => c.charCodeAt(0));
  const stream = new Blob([buf]).stream().pipeThrough(new DecompressionStream("gzip"));
  return parseState(await new Response(stream).text());
}
let cloudTimer = null, cloudBusy = false, cloudDirty = false;
function cloudSave() {
  if (!cloud.db || !USER) return;
  clearTimeout(cloudTimer); setSync("saving");
  cloudTimer = setTimeout(cloudFlush, 2500);
}
async function cloudFlush() {
  clearTimeout(cloudTimer);
  if (!cloud.db || !USER) return;
  if (cloudBusy) { cloudDirty = true; return; }
  cloudBusy = true;
  try {
    const p = await pack(S);
    await profileRef(USER.slug).set({ name: USER.name, updatedAt: S.updatedAt, ...p });
    setSync("synced");
  } catch (e) {
    setSync(e && e.code === "quota_exceeded" ? "full" : "error");
  } finally {
    cloudBusy = false;
    if (cloudDirty) { cloudDirty = false; cloudFlush(); }
  }
}
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden" && cloudTimer) cloudFlush(); });
function setSync(state) {
  const el = document.getElementById("syncBadge"); if (!el) return;
  const m = { synced: ["☁️ 已同步", "进度已保存到你的 claude.ai 账号，换设备也能继续"], saving: ["☁️ 保存中…", ""],
    local: ["💾 本机保存", "进度保存在这个浏览器里"], error: ["⚠️ 云端未保存", "云端保存失败，进度已存在本机，稍后会再试"],
    full: ["⚠️ 云端已满", "云端空间已满，进度只保存在本机"] }[state] || ["", ""];
  el.textContent = m[0]; el.title = m[1];
}
function deepMerge(a, b) {
  for (const k in b) {
    if (b[k] && typeof b[k] === "object" && !Array.isArray(b[k]) && a[k] && typeof a[k] === "object" && !Array.isArray(a[k])) deepMerge(a[k], b[k]);
    else a[k] = b[k];
  }
  return a;
}
function save() {
  S.updatedAt = Date.now();
  if (!USER) return;
  lsSet(userKey(USER.slug), JSON.stringify(S));
  cloudSave();
}

// ---------- 工具 ----------
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const DAY = 86400000;
function dateKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function startOfToday() { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); }
function today() { return S.days[dateKey()] ||= { nw: 0, rv: 0, dict: 0, speak: 0 }; }
let toastT;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200);
}

// ---------- 朗读 TTS ----------
const synth = window.speechSynthesis;
let voices = [], voiceName = "";
// 苹果设备自带的特效声音（沙哑、机器人、唱歌等），不适合学英语
const NOVELTY = /^(albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|jester|junior|kathy|organ|pipe organ|princess|ralph|superstar|trinoids|whisper|wobble|zarvox|fred|grandma|grandpa|rocko|sandy|shelley|eddy|flo|reed)\b/i;
// 质量较好的标准声音
const GOOD = /^(samantha|ava|allison|susan|tom|alex|nicky|evan|zoe|joelle|nathan|noelle|daniel|karen|moira|tessa|serena|kate|oliver|aaron|martha|arthur|catherine|gordon|google|microsoft)\b/i;
const VOICE_KEY = "maple-en-voice"; // 声音是每台设备自己的设置，不随进度同步
function voiceScore(v) {
  return (/natural|neural|online|enhanced|premium/i.test(v.name) ? 20 : 0) + (GOOD.test(v.name) ? 8 : 0)
    + (/en[-_]CA/i.test(v.lang) ? 5 : /en[-_]US/i.test(v.lang) ? 4 : /en[-_](GB|AU)/i.test(v.lang) ? 2 : 0)
    + (v.localService === false ? 1 : 0);
}
// 男声 / 女声：浏览器不提供性别信息，按各平台常见的声音名字判断
const GENDER_KEY = "maple-en-gender";
let gender = lsGet(GENDER_KEY) === "male" ? "male" : "female";
const FEMALE = /\b(samantha|ava|allison|susan|zoe|nicky|joelle|noelle|karen|moira|tessa|serena|kate|martha|catherine|victoria|fiona|veena|zira|aria|jenny|michelle|clara|libby|sonia|natasha|emma|ana|linda|heather|hazel|hayley|isla|sara|amber|ashley|cora|elizabeth|jane|nancy|monica|maisie|female)\b/i;
const MALE = /\b(alex|tom|daniel|evan|nathan|aaron|oliver|arthur|gordon|rishi|lee|david|mark|guy|ryan|liam|christopher|eric|roger|steffan|brian|andrew|thomas|george|richard|william|davis|tony|jason|james|male)\b/i;
function genderOf(v) {
  const n = v.name;
  if (/google us english$/i.test(n)) return "female";
  if (FEMALE.test(n)) return "female";
  if (MALE.test(n)) return "male";
  return "";
}
function loadVoices() {
  if (!synth) return;
  const all = synth.getVoices().filter(v => /^en[-_]/i.test(v.lang) && !NOVELTY.test(v.name));
  all.sort((a, b) => voiceScore(b) - voiceScore(a) || a.name.localeCompare(b.name));
  const mine = all.filter(v => genderOf(v) === gender);
  voices = mine.length ? mine : all;
  $$("#setGender button").forEach(b => b.classList.toggle("active", b.dataset.g === gender));
  $("#genderNote").textContent = all.length && !mine.length
    ? `这台设备上没有找到${gender === "male" ? "男" : "女"}声，下面列出了全部英文声音。` : "";
  const saved = lsGet(VOICE_KEY);
  voiceName = voices.some(v => v.name === saved) ? saved : (voices[0] ? voices[0].name : "");
  const sel = $("#setVoice");
  sel.innerHTML = voices.map(v => `<option value="${esc(v.name)}">${esc(v.name)} (${v.lang})</option>`).join("") || `<option>未找到英文声音</option>`;
  if (voiceName) sel.value = voiceName;
}
if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }
// 网页版的后备朗读：浏览器没有英文声音时改用 Claude 的朗读
let ttsCap = null;
if (inArtifact) claude.use("tts").then(t => { ttsCap = t; }).catch(() => {});
function speak(text, rateMul = 1) {
  if ((!synth || !voices.length) && ttsCap) {
    if (synth) synth.cancel();
    const rate = Math.max(0.7, Math.min(1.5, S.settings.rate * rateMul));
    return ttsCap.speak(text, { rate, language: "en" }).catch(() => {});
  }
  return new Promise(res => {
    if (!synth) { toast("此浏览器不支持朗读"); return res(); }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = voices.find(v => v.name === voiceName);
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-CA";
    u.rate = Math.max(0.4, Math.min(2, S.settings.rate * rateMul));
    u.onend = u.onerror = () => res();
    synth.speak(u);
  });
}

// ---------- 语音识别 ----------
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let activeRec = null;
// 网页版用 Claude 的语音听写（浏览器自带识别在网页版里拿不到麦克风）
let dict = null, dictLang = null;
if (inArtifact) claude.use("dictation").then(d => { dict = d; if (curTab === "speak") renderSpeak(); }).catch(() => {});
const canRecognize = () => !!(dict || (SR && !inArtifact));
function recognizeDict() {
  return new Promise((resolve, reject) => {
    let text = "", done = false, idle = null;
    const lang = dictLang || S.settings.recLang;
    const finish = fn => { if (done) return; done = true; clearTimeout(idle); offF(); offP(); offS(); activeRec = null; fn(); };
    const fail = code => {
      if (code === "unavailable" && lang !== "en") { dictLang = "en"; code = "retry_lang"; }
      finish(() => reject(new Error(code)));
    };
    const armIdle = () => { clearTimeout(idle); idle = setTimeout(() => dict.stop(), 1800); }; // 停顿约 2 秒自动结束
    const offF = dict.onFinal(e => { text += e.text; armIdle(); });
    const offP = dict.onPartial(e => { if (e.text) armIdle(); });
    const offS = dict.onState(e => {
      if (e.state !== "idle" || !e.reason) return;
      if (!text && ["not_granted", "unavailable", "rate_limited", "upstream_error", "dismissed"].includes(e.reason)) fail(e.reason);
      else finish(() => resolve(text.trim() ? [text.trim()] : []));
    });
    activeRec = { stop: () => dict.stop() };
    dict.start({ language: lang }).catch(err => fail(err.code));
  });
}
let srLang = null; // 设定的口音不被支持时，改用美式英语
function recognize() {
  if (dict) return recognizeDict();
  return new Promise((resolve, reject) => {
    if (!SR || inArtifact) return reject(new Error("unsupported"));
    if (synth) synth.cancel();
    const lang = srLang || S.settings.recLang;
    const r = new SR();
    r.lang = lang; r.interimResults = false; r.continuous = false; r.maxAlternatives = 5;
    const alts = []; let done = false;
    r.onresult = e => { for (const res of e.results) for (const a of res) alts.push(a.transcript); };
    r.onerror = e => {
      if (done) return;
      done = true; activeRec = null;
      let code = e.error || "unknown";
      if (code === "language-not-supported" && lang !== "en-US") { srLang = "en-US"; code = "retry_lang"; }
      // 有些浏览器出错后仍给出了识别结果，有结果就照常打分
      if (alts.length && code !== "retry_lang") resolve(alts); else reject(new Error(code));
    };
    r.onend = () => { activeRec = null; if (!done) { done = true; resolve(alts); } };
    activeRec = r;
    try { r.start(); } catch (err) { done = true; activeRec = null; reject(new Error("start_failed")); }
  });
}
function recErrMsg(err) {
  const m = { "not-allowed": "麦克风权限被拒绝，请在地址栏左侧允许麦克风", "no-speech": "没有听到声音，再试一次", "network": "语音识别需要联网", "audio-capture": "找不到麦克风", "unsupported": "此浏览器不支持语音识别，请用电脑上的 Chrome 或 Edge 打开",
    "not_granted": "麦克风没有授权。可以在页面的权限菜单里打开", "dismissed": "授权提示被关掉了，再点一次 🎤 即可", "retry_lang": "已切换识别语言，请再点一次 🎤",
    "rate_limited": "语音识别忙，稍等几秒再试", "upstream_error": "麦克风或语音服务出错，再试一次", "unavailable": "这个账号或浏览器暂时不能用语音识别", "stopped": "已停止", "no_gesture": "请直接点击 🎤 按钮开始",
    "service-not-allowed": "设备不允许网页使用语音识别。iPad 请检查：①「设置 → 通用 → 键盘」打开“启用听写”；②「设置 → Safari → 麦克风」选“询问”或“允许”；③ 用 Safari 打开，不要用 Chrome",
    "aborted": "录音被打断了，再点一次试试", "language-not-supported": "不支持这个识别语言，请在设置里把“语音识别口音”改成美国英语",
    "start_failed": "录音没能开始，稍等一下再点一次", "bad-grammar": "识别出错，再试一次" };
  return m[err.message] || "识别出错（" + err.message + "），再试一次，或改用键盘听写";
}

// ---------- 句子比对 ----------
const ONES = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const TENS = ",,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety".split(",");
function numWords(n) {
  if (n < 20) return ONES[n];
  if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? " " + ONES[n % 10] : "");
  if (n < 1000) return ONES[Math.floor(n / 100)] + " hundred" + (n % 100 ? " " + numWords(n % 100) : "");
  if (n < 10000) return numWords(Math.floor(n / 1000)) + " thousand" + (n % 1000 ? " " + numWords(n % 1000) : "");
  return String(n);
}
const PAIRS = { "i am": "im", "you are": "youre", "they are": "theyre", "it is": "its", "that is": "thats", "there is": "theres", "what is": "whats", "do not": "dont", "does not": "doesnt", "did not": "didnt", "is not": "isnt", "are not": "arent", "can not": "cant", "will not": "wont", "i will": "ill", "you will": "youll", "i would": "id", "i have": "ive", "let us": "lets", "we have": "weve", "it will": "itll", "that will": "thatll" };
const SINGLE = { cannot: "cant", okay: "ok", "o.k.": "ok", mister: "mr", doctor: "dr" };
// 返回 [{raw, norm}]，norm 可能是合并后的缩写形式
function tokenize(text) {
  const raw = String(text).replace(/[’‘]/g, "'").replace(/%/g, " percent").replace(/\$/g, "")
    .split(/\s+/).flatMap(w => w.split(/(?<=-)(?=[A-Za-z])/)).filter(Boolean);
  let toks = [];
  for (const r of raw) {
    let n = r.toLowerCase().replace(/[^a-z0-9'.]/g, "").replace(/\.(?=\s|$)/g, "").replace(/\.$/, "");
    if (/^\d+$/.test(n)) { numWords(+n).split(" ").forEach((p, i) => toks.push({ raw: i ? "" : r, norm: p })); continue; }
    n = n.replace(/[.']/g, "");
    if (SINGLE[n]) n = SINGLE[n];
    if (n) toks.push({ raw: r, norm: n });
  }
  // 合并 "do not" -> "dont" 等，让缩写与完整形式都算对
  const out = [];
  for (let i = 0; i < toks.length; i++) {
    const pair = toks[i + 1] && PAIRS[toks[i].norm + " " + toks[i + 1].norm];
    if (pair) { out.push({ raw: toks[i].raw + " " + toks[i + 1].raw, norm: pair }); i++; }
    else out.push(toks[i]);
  }
  return out;
}
function compare(target, said) {
  const T = tokenize(target), U = tokenize(said);
  const m = T.length, n = U.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--)
    dp[i][j] = T[i].norm === U[j].norm ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const tOk = new Array(m).fill(false), uOk = new Array(n).fill(false);
  for (let i = 0, j = 0; i < m && j < n;) {
    if (T[i].norm === U[j].norm) { tOk[i] = uOk[j] = true; i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
  }
  const hit = tOk.filter(Boolean).length;
  return { T, U, tOk, uOk, score: m ? Math.round(hit / m * 100) : 0, missed: T.filter((t, i) => !tOk[i]).map(t => t.raw) };
}
function diffHTML(c, showUser = true) {
  const tgt = c.T.filter(t => t.raw).map((t, i) => `<span class="w ${c.tOk[c.T.indexOf(t)] ? "ok" : "miss"}">${esc(t.raw)}</span>`).join(" ");
  let html = `<div class="diff">${tgt}</div>`;
  if (showUser && c.U.length) {
    const u = c.U.map((t, i) => `<span class="w ${c.uOk[i] ? "" : "extra"}">${esc(t.raw || t.norm)}</span>`).join(" ");
    html += `<div class="small muted">你的：${u}</div>`;
  }
  return html;
}
function scoreHTML(s) {
  const cls = s >= 90 ? "good" : s >= 60 ? "mid" : "low";
  const word = s >= 90 ? "太棒了！" : s >= 60 ? "不错，再来一次会更好" : "多听几遍示范再试";
  return `<span class="score ${cls}">${s}</span> <span class="muted">分 · ${word}</span>`;
}
function bestOf(target, alts) {
  let best = null;
  for (const a of alts) { const c = compare(target, a); if (!best || c.score > best.score) best = c; }
  return best;
}

// ---------- 标签页 ----------
let curTab = "home";
function showTab(t) {
  curTab = t;
  document.body.dataset.tab = t;
  $$("#tabs button").forEach(b => b.classList.toggle("active", b.dataset.tab === t));
  $$(".page").forEach(p => p.classList.toggle("active", p.id === t));
  if (synth) synth.cancel();
  if (t === "home") renderHome();
  if (t === "vocab") { renderFlash(); renderDeck(); }
  if (t === "listen") renderDict();
  if (t === "speak") renderSpeak();
  history.replaceState(null, "", "#" + t);
}
$("#tabs").addEventListener("click", e => { const b = e.target.closest("button"); if (b) showTab(b.dataset.tab); });

// ---------- 首页 ----------
const TIPS = [
  "听不懂的时候，大胆说：<b>Sorry, could you say that again?</b> 加拿大人非常习惯这句话。",
  "CBC 新闻的开头一句就是摘要，先抓住它：<b>谁、发生了什么、在哪里</b>。",
  "跟读时模仿的是<b>语调和节奏</b>，不只是单词。把自己的录音和原音对比，进步最快。",
  "每天 30 分钟，比周末一次 3 小时有效得多。关键是连续天数。",
  "听力差往往不是单词不认识，而是<b>连读</b>没听出来，比如 \"want to\" 会读成 \"wanna\"。听写最能暴露这个问题。",
  "在超市、Tim Hortons 主动多说一句，比如 <b>How's your day going?</b> 就是免费的口语课。",
  "新闻里听到的生词，直接在「单词」页点「添加生词」，把原句粘贴进去当例句。",
  "<b>eh</b> 是加拿大口头禅，放在句尾表示 \"对吧？\"：<i>Nice day, eh?</i>",
];
function streak() {
  const active = k => { const d = S.days[k]; return d && (d.nw + d.rv + d.dict + d.speak) > 0; };
  let n = 0, d = new Date();
  if (!active(dateKey(d))) d.setDate(d.getDate() - 1);
  while (active(dateKey(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function renderHome() {
  const t = today(), st = S.settings;
  const due = dueCards().length;
  const vocabDone = t.nw >= st.newPerDay && due === 0;
  const goals = [
    { tab: "vocab", title: "📖 单词", num: `${t.nw}/${st.newPerDay}`, sub: `新词 · 已复习 ${t.rv} · 待复习 ${due}`, p: Math.min(1, t.nw / st.newPerDay) * (due ? 0.9 : 1), done: vocabDone },
    { tab: "listen", title: "🎧 听写", num: `${t.dict}/${st.dictGoal}`, sub: "句", p: Math.min(1, t.dict / st.dictGoal), done: t.dict >= st.dictGoal },
    { tab: "speak", title: "🎤 口语", num: `${t.speak}/${st.speakGoal}`, sub: "句跟读", p: Math.min(1, t.speak / st.speakGoal), done: t.speak >= st.speakGoal },
  ];
  $("#goals").innerHTML = goals.map(g => `
    <div class="card goal ${g.done ? "done" : ""}" data-go="${g.tab}">
      <h4>${g.title} ${g.done ? "✅" : ""}</h4>
      <div><span class="num">${g.num}</span> <span class="muted small">${g.sub}</span></div>
      <div class="bar"><i style="width:${Math.round(g.p * 100)}%"></i></div>
    </div>`).join("");
  $("#streakNum").textContent = streak();
  const cards = Object.values(S.cards);
  const avg = s => s.n ? Math.round(s.sum / s.n) : "–";
  $("#stats").innerHTML = [
    ["已学单词", cards.length], ["已掌握（间隔≥21天）", cards.filter(c => c.iv >= 21).length],
    ["听写总句数", S.dictStats.n], ["听写平均分", avg(S.dictStats)],
    ["口语总句数", S.speakStats.n], ["口语平均分", avg(S.speakStats)],
  ].map(([k, v]) => `<div class="stat"><b>${v}</b><span class="muted small">${k}</span></div>`).join("");
  const dayNum = Math.floor(startOfToday() / DAY);
  $("#dailyTip").innerHTML = "💡 " + TIPS[dayNum % TIPS.length];
}
$("#goals").addEventListener("click", e => { const g = e.target.closest("[data-go]"); if (g) showTab(g.dataset.go); });

// ---------- 单词：间隔重复（SM-2 简化版） ----------
const keyOf = w => w.w.toLowerCase();
// 词库：去重后排定学习顺序——基础词在前，其余四类按比例均匀穿插，核心词用固定种子打乱
const BASE = (() => {
  const seen = new Set();
  const initial = [], rest = [];
  VOCAB.forEach((w, i) => {
    const k = keyOf(w); if (seen.has(k)) return; seen.add(k);
    (i < VOCAB_INITIAL ? initial : rest).push(w);
  });
  const groups = {};
  rest.forEach(w => (groups[w.tag] ||= []).push(w));
  if (groups.core) { // 固定种子洗牌，保证每次打开顺序一致
    let seed = 20261121;
    const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
    const a = groups.core;
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  }
  const spread = Object.values(groups).flatMap(g => g.map((w, i) => ({ w, pos: (i + 0.5) / g.length })));
  spread.sort((a, b) => a.pos - b.pos);
  return [...initial, ...spread.map(x => x.w)];
})();
const deck = () => S.custom.length ? [...BASE, ...S.custom] : BASE;
const TAGS = { news: "新闻", life: "生活", phrasal: "短语/口语", core: "核心词", mine: "我的生词" };
function dueCards() {
  const now = Date.now();
  return deck().filter(w => { const c = S.cards[keyOf(w)]; return c && c.due <= now; })
    .sort((a, b) => S.cards[keyOf(a)].due - S.cards[keyOf(b)].due);
}
function nextState(c, q) {
  c = c ? { ...c } : { ef: 2.5, iv: 0, reps: 0, lapses: 0 };
  if (q === 0) { c.reps = 0; c.iv = 0; c.lapses++; c.ef = Math.max(1.3, c.ef - 0.2); }
  else if (q === 1) { c.iv = c.reps === 0 ? 1 : Math.max(1, Math.round(c.iv * 1.2)); c.ef = Math.max(1.3, c.ef - 0.15); c.reps++; }
  else if (q === 2) { c.iv = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.iv * c.ef); c.reps++; }
  else { c.iv = c.reps === 0 ? 4 : Math.round(Math.max(c.iv, 1) * c.ef * 1.3); c.ef += 0.15; c.reps++; }
  c.due = q === 0 ? Date.now() + 60000 : startOfToday() + c.iv * DAY + 4 * 3600000;
  return c;
}
const ivLabel = c => c.iv === 0 ? "1分钟" : c.iv < 30 ? `${c.iv}天` : `${Math.round(c.iv / 30)}个月`;

let queue = [], qPos = 0, revealed = false, vocabMode = "read";
function buildQueue() {
  const due = dueCards();
  const left = Math.max(0, S.settings.newPerDay - today().nw);
  const fresh = deck().filter(w => !S.cards[keyOf(w)]).slice(0, left);
  // 复习词和新词交替，避免一口气全是新词
  queue = []; let i = 0, j = 0;
  while (i < due.length || j < fresh.length) {
    if (i < due.length) queue.push(due[i++]);
    if (i < due.length) queue.push(due[i++]);
    if (j < fresh.length) queue.push(fresh[j++]);
  }
  qPos = 0; revealed = false;
}
function renderFlash() {
  if (qPos >= queue.length) buildQueue();
  const el = $("#flash");
  const nNew = queue.slice(qPos).filter(w => !S.cards[keyOf(w)]).length;
  $("#vocabQueueInfo").textContent = queue.length > qPos ? `剩余 ${queue.length - qPos} 张（新词 ${nNew}）` : "";
  const dock = $("#vocabDock");
  if (qPos >= queue.length) {
    el.innerHTML = `<div style="font-size:48px">🎉</div><h2>今天的单词完成了！</h2>
      <p class="muted">明天再来复习。也可以去练听写和口语，或者添加新闻里听到的生词。</p>`;
    dock.innerHTML = `<button class="primary" id="moreNew">再学 5 个新词</button>`;
    $("#moreNew").onclick = () => extraNew(5);
    return;
  }
  const w = queue[qPos], c = S.cards[keyOf(w)];
  const tagName = TAGS[w.tag] || w.tag;
  const isNew = !c;
  let html = `<span class="tagpill">${isNew ? "🆕 新词 · " : "🔁 复习 · "}${tagName}</span>`;
  if (vocabMode === "listen" && !revealed) {
    html += `<div class="word">🎧</div><p class="muted">先听，在心里想它的意思和拼写，再点「显示答案」。</p>`;
  } else {
    html += `<div class="word">${esc(w.w)}</div>`;
  }
  // 主要按钮放在 dock 里（右手/左手布局时固定在屏幕边上，方便大拇指点）
  let dockHtml = `<button id="fPlay">🔊 发音</button>`;
  if (revealed) {
    html += `<div class="zh">${esc(w.zh || "（未填写释义）")}</div>`;
    if (w.ex) html += `<div class="ex" id="fEx" title="点击朗读例句">🔈 ${esc(w.ex)}</div>`;
    const opts = [0, 1, 2, 3].map(q => ivLabel(nextState(c, q)));
    dockHtml += `
      <button class="rate-btn r3" data-q="3">简单<small>${opts[3]}</small></button>
      <button class="rate-btn r2" data-q="2">记得<small>${opts[2]}</small></button>
      <button class="rate-btn r1" data-q="1">模糊<small>${opts[1]}</small></button>
      <button class="rate-btn r0" data-q="0">忘了<small>${opts[0]}</small></button>`;
  } else {
    dockHtml += `<button class="primary big" id="fReveal">显示答案</button>`;
  }
  el.innerHTML = html;
  dock.innerHTML = dockHtml;
  $("#fPlay").onclick = () => speak(w.w, 0.9);
  if ($("#fReveal")) $("#fReveal").onclick = reveal;
  if ($("#fEx")) $("#fEx").onclick = () => speak(w.ex);
  $$(".rate-btn", dock).forEach(b => b.onclick = () => rate(+b.dataset.q));
  if (!revealed) speak(w.w, 0.9);
}
function extraNew(n) {
  const fresh = deck().filter(w => !S.cards[keyOf(w)]).slice(0, n);
  if (!fresh.length) return toast("词库里的词都学过了，添加些生词吧");
  queue = fresh; qPos = 0; revealed = false; renderFlash();
}
function reveal() {
  revealed = true; renderFlash();
  const w = queue[qPos]; if (w && w.ex) speak(w.ex);
}
function rate(q) {
  const w = queue[qPos], k = keyOf(w), wasNew = !S.cards[k];
  S.cards[k] = nextState(S.cards[k], q);
  const t = today(); wasNew ? t.nw++ : t.rv++;
  save();
  if (q === 0) queue.splice(Math.min(queue.length, qPos + 4), 0, w); // 忘了的词几张之后再出现
  qPos++; revealed = false; renderFlash(); renderDeck();
}
$("#vocabMode").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  vocabMode = b.dataset.mode;
  $$("#vocabMode button").forEach(x => x.classList.toggle("active", x === b));
  revealed = false; renderFlash();
});
document.addEventListener("keydown", e => {
  if (curTab !== "vocab" || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || $("#addDlg").open) return;
  if (e.code === "Space") { e.preventDefault(); if (!revealed && qPos < queue.length) reveal(); }
  if (revealed && ["1", "2", "3", "4"].includes(e.key)) rate(+e.key - 1);
});

// 词库列表
let deckFilter = "all";
function renderDeck() {
  const tags = [["all", "全部"], ...Object.entries(TAGS)];
  $("#deckFilters").innerHTML = tags.map(([k, n]) => `<button data-f="${k}" class="${k === deckFilter ? "active" : ""}">${n}</button>`).join("");
  const q = $("#deckSearch").value.trim().toLowerCase();
  const all = deck().filter(w => (deckFilter === "all" || w.tag === deckFilter) && (!q || w.w.toLowerCase().includes(q) || (w.zh || "").includes(q)));
  const list = all.slice(0, 200);
  $("#deckCount").textContent = deck().length;
  $("#deckShown").textContent = all.length > list.length ? `共 ${all.length} 个，显示前 ${list.length} 个，可用搜索查找` : `共 ${all.length} 个`;
  const now = Date.now();
  $("#deckList").innerHTML = list.map(w => {
    const c = S.cards[keyOf(w)];
    const st = !c ? `<span class="muted">未学</span>` : c.iv >= 21 ? `<span style="color:var(--ok)">已掌握</span>` :
      c.due <= now ? `<span style="color:var(--accent)">待复习</span>` : `<span class="muted">${new Date(c.due).toLocaleDateString()} 复习</span>`;
    const del = w.tag === "mine" ? `<button class="del" data-del="${esc(w.w)}" title="删除">✕</button>` : "";
    return `<div class="deckitem"><b data-say="${esc(w.w)}">${esc(w.w)}</b><span class="muted">${esc(w.zh)}</span><span class="st">${st}</span>${del}</div>`;
  }).join("") || `<p class="muted">还没有内容</p>`;
}
$("#deckFilters").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { deckFilter = b.dataset.f; renderDeck(); } });
$("#deckSearch").addEventListener("input", () => renderDeck());
$("#deckList").addEventListener("click", async e => {
  const s = e.target.closest("[data-say]"); if (s) speak(s.dataset.say, 0.9);
  const d = e.target.closest("[data-del]");
  if (d && await askConfirm(`删除生词 "${d.dataset.del}"？`)) {
    S.custom = S.custom.filter(w => w.w !== d.dataset.del);
    delete S.cards[d.dataset.del.toLowerCase()]; save(); buildQueue(); renderFlash(); renderDeck();
  }
});
function addWord(w, zh, ex) {
  w = w.trim(); if (!w) return false;
  if (deck().some(x => keyOf(x) === w.toLowerCase())) { toast(`"${w}" 已在词库中`); return false; }
  S.custom.push({ w, zh: zh.trim(), ex: ex.trim(), tag: "mine" }); save(); return true;
}
$("#btnAddWord").onclick = () => { $("#addW").value = $("#addZh").value = $("#addEx").value = ""; $("#addDlg").showModal(); };
$("#addDlg").addEventListener("close", () => {
  if ($("#addDlg").returnValue !== "ok") return;
  if (addWord($("#addW").value, $("#addZh").value, $("#addEx").value)) {
    toast("已添加，会作为新词出现"); buildQueue(); renderFlash(); renderDeck();
  }
});

// ---------- 听写 ----------
let dictLv = 1, dictPlays = 0, dictChecked = false;
const dictList = () => DICTATION.filter(d => d.lv === dictLv);
const curDict = () => { const l = dictList(); return l[S.dictIdx[dictLv] % l.length]; };
function renderDict() {
  const l = dictList();
  $("#dictProgress").textContent = `第 ${(S.dictIdx[dictLv] % l.length) + 1} / ${l.length} 句 · 今日 ${today().dict} 句`;
  $("#dictPlays").textContent = `已听 ${dictPlays} 次`;
}
function dictPlay(mul) {
  dictPlays++; renderDict(); speak(curDict().en, mul);
  if (!isTouch) $("#dictInput").focus(); // 触屏设备不自动弹出键盘，等用户自己点输入框
}
$("#dictPlay").onclick = () => dictPlay(1);
$("#dictSlow").onclick = () => dictPlay(0.7);
$("#dictLevel").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  dictLv = +b.dataset.lv; $$("#dictLevel button").forEach(x => x.classList.toggle("active", x === b));
  resetDict();
});
function resetDict() { dictPlays = 0; dictChecked = false; $("#dictInput").value = ""; $("#dictResult").innerHTML = ""; renderDict(); }
function showDictResult(c, counted) {
  const d = curDict();
  $("#dictResult").innerHTML = `<div class="result-box">
    ${c ? scoreHTML(c.score) : `<span class="muted">答案：</span>`}
    ${c ? diffHTML(c) : `<div class="diff">${esc(d.en)}</div>`}
    <div class="muted">${esc(d.zh)}</div>
    <div class="row" style="margin-top:12px">
      <button id="dRe">🔊 再听</button><button id="dReSlow">🐢 慢速</button>
      <button id="dShadow" class="rec">🎤 跟读这句</button>
      ${c && c.missed.length ? `<button class="ghost" id="dAddMiss">＋ 错词加入生词本</button>` : ""}
    </div>
    <div id="dShadowRes"></div></div>`;
  $("#dRe").onclick = () => speak(d.en);
  $("#dReSlow").onclick = () => speak(d.en, 0.7);
  bindShadow($("#dShadow"), d.en, $("#dShadowRes"));
  if ($("#dAddMiss")) $("#dAddMiss").onclick = () => {
    const words = [...new Set(c.missed.join(" ").split(/\s+/).map(w => w.replace(/[^A-Za-z'-]/g, "")).filter(w => w.length > 2))];
    const added = words.filter(w => addWord(w, "", d.en));
    toast(added.length ? `已加入：${added.join(", ")}` : "这些词已在词库中");
  };
}
$("#dictCheck").onclick = () => {
  const val = $("#dictInput").value.trim();
  if (!val) return toast("先把听到的内容打出来");
  const c = compare(curDict().en, val);
  if (!dictChecked) { today().dict++; S.dictStats.n++; S.dictStats.sum += c.score; save(); dictChecked = true; }
  showDictResult(c); renderDict();
};
$("#dictReveal").onclick = () => showDictResult(null);
$("#dictNext").onclick = () => { S.dictIdx[dictLv]++; save(); resetDict(); dictPlay(1); };
$("#dictInput").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#dictCheck").click(); } });

// 跟读按钮（听写和口语共用）
function recordSpeak(c) { today().speak++; S.speakStats.n++; S.speakStats.sum += c.score; save(); }
// 不能直接录音时（如 iPad）：用系统键盘自带的听写（键盘上的 🎤）把读的句子转成文字，再打分
function showTypedShadow(target, out, onScore) {
  out.innerHTML = `<div class="result-box typed-shadow">
    <p class="small muted">这里不能直接录音。点下面的框，再点<b>键盘上的 🎤</b>读出这句，说完点「打分」。<br>键盘要先切到英文（按 🌐 键），否则会识别成中文。</p>
    <textarea rows="2" class="ts-input" placeholder="点这里，然后按键盘上的 🎤 说话"></textarea>
    <div class="row ts-row"><button class="primary ts-score">✓ 打分</button><button class="ghost ts-clear">清空重来</button></div>
    <div class="ts-res"></div></div>`;
  const ta = $(".ts-input", out);
  ta.focus(); // 直接弹出键盘，下一步就是按键盘上的 🎤，省去点输入框这一步
  $(".ts-clear", out).onclick = () => { ta.value = ""; $(".ts-res", out).innerHTML = ""; };
  $(".ts-score", out).onclick = () => {
    const said = ta.value.trim();
    if (!said) return toast("还没有内容：点输入框，再按键盘上的 🎤 说话");
    ta.blur(); // 收起键盘，方便看结果
    const c = compare(target, said);
    recordSpeak(c);
    $(".ts-res", out).innerHTML = `${scoreHTML(c.score)}${diffHTML(c, false)}`;
    onScore && onScore(c);
  };
}
function bindShadow(btn, target, out, onScore) {
  btn.onclick = async () => {
    if (!canRecognize()) return showTypedShadow(target, out, onScore);
    if (activeRec) { activeRec.stop(); return; }
    const label = btn.textContent;
    btn.classList.add("on"); btn.textContent = "■ 说完点这里";
    out.innerHTML = `<div class="heard">🎙️ 正在听……请读出句子</div>`;
    try {
      const alts = await recognize();
      if (!alts.length) { out.innerHTML = `<div class="heard">没有识别到内容，再试一次</div>`; return; }
      const c = bestOf(target, alts);
      recordSpeak(c);
      out.innerHTML = `<div class="result-box">${scoreHTML(c.score)}${diffHTML(c, false)}<div class="heard">识别到：${esc(alts[0])}</div></div>`;
      onScore && onScore(c);
    } catch (err) {
      const soft = ["no-speech", "aborted", "retry_lang", "stopped", "dismissed"].includes(err.message);
      out.innerHTML = `<div class="heard err-msg" style="color:var(--bad)">${esc(recErrMsg(err))}</div>
        ${soft ? "" : `<div class="row ts-row"><button class="ghost use-typed">⌨️ 改用键盘听写</button></div>`}`;
      const alt = $(".use-typed", out);
      if (alt) alt.onclick = () => showTypedShadow(target, out, onScore);
    } finally { btn.classList.remove("on"); btn.textContent = label; }
  };
}

// ---------- 口语情景 ----------
// 今日推荐：一个没练过的新情景 + 一个 3 天以上没练的旧情景
function todayScenes() {
  const fresh = SCENARIOS.find(s => !S.sceneDone[s.id]);
  const limit = dateKey(new Date(Date.now() - 3 * DAY));
  const old = SCENARIOS.filter(s => S.sceneDone[s.id] && S.sceneDone[s.id] <= limit)
    .sort((a, b) => S.sceneDone[a.id].localeCompare(S.sceneDone[b.id]))[0];
  return { fresh, old };
}
let sceneId = null, sceneCat = "all", hideEn = false, playingAll = false;
function renderSpeak() {
  const { fresh, old } = todayScenes();
  if (!sceneId || !SCENARIOS.some(s => s.id === sceneId)) sceneId = (fresh || old || SCENARIOS[0]).id;
  const doneN = SCENARIOS.filter(s => S.sceneDone[s.id]).length;
  const pick = (s, label) => s ? `<button class="scene ${s.id === sceneId ? "active" : ""}" data-s="${s.id}"><small>${label}</small><span class="ic">${s.icon}</span> ${esc(s.title)}</button>` : "";
  const cats = [["all", "全部"], ...SCENE_CATS].map(([k, n]) => `<button data-c="${k}" class="${k === sceneCat ? "active" : ""}">${n}</button>`).join("");
  const list = SCENARIOS.filter(s => sceneCat === "all" || s.cat === sceneCat);
  $("#scenes").innerHTML = `
    <div class="today-scenes">${pick(fresh, "🆕 今日新情景")}${pick(old, "🔁 今日复习")}
      <div class="muted small">已练 ${doneN} / ${SCENARIOS.length} 个情景</div></div>
    <div class="filters">${cats}</div>
    <div class="scene-grid">${list.map(s => `<button class="scene ${s.id === sceneId ? "active" : ""}" data-s="${s.id}">
      <span class="ic">${s.icon}</span> ${esc(s.title)}${S.sceneDone[s.id] ? " ✅" : ""}<small>${s.lines.filter(l => l.who === "you").length} 句要说</small></button>`).join("")}</div>`;
  const sc = SCENARIOS.find(s => s.id === sceneId);
  const warn = canRecognize() ? "" : `<div class="tipbox">💡 这台设备不能直接录音。点 🎤 后会出现输入框：点输入框，再按<b>键盘上的 🎤</b>读出句子，就能打分。</div>`;
  $("#dialog").innerHTML = `${warn}
    <div class="row" style="justify-content:space-between;margin-bottom:8px">
      <h3 style="margin:0">${sc.icon} ${esc(sc.title)}</h3>
      <div class="row">
        <label class="small"><input type="checkbox" id="hideEn" ${hideEn ? "checked" : ""} style="width:auto"> 隐藏英文（挑战模式）</label>
        <button id="playAll">${playingAll ? "■ 停止" : "▶ 整段播放"}</button>
      </div>
    </div>
    <p class="muted small">🧑 是对方（练听力），🙋 是你（先听示范，再点 🎤 说出来）。挑战模式下只看中文，试着自己说出英文。</p>
    ${sc.lines.map((l, i) => `
      <div class="line ${l.who}" data-i="${i}">
        <div class="who">${l.who === "you" ? "🙋" : "🧑"}</div>
        <div class="body">
          <div class="en ${hideEn ? "hidden" : ""}" title="${hideEn ? "点击显示" : ""}">${esc(l.en)}</div>
          <div class="zhline">${esc(l.zh)}</div>
          <div class="out"></div>
        </div>
        <div class="acts">
          ${l.who === "you" ? `<button class="rec" data-rec="${i}">🎤 我来说</button>` : ""}
          <button data-play="${i}">🔊 ${l.who === "you" ? "示范" : "听"}</button>
          <button data-slow="${i}">🐢 慢速</button>
        </div>
      </div>`).join("")}`;
  const lines = sc.lines;
  $$("#dialog [data-play]").forEach(b => b.onclick = () => speak(lines[+b.dataset.play].en));
  $$("#dialog [data-slow]").forEach(b => b.onclick = () => speak(lines[+b.dataset.slow].en, 0.7));
  $$("#dialog [data-rec]").forEach(b => {
    const i = +b.dataset.rec, box = $(".body", b.closest(".line"));
    bindShadow(b, lines[i].en, $(".out", box), () => {
      $(".en", box).classList.remove("hidden");
      S.sceneDone[sc.id] = dateKey(); save();
    });
  });
  $$("#dialog .en.hidden").forEach(el => el.onclick = () => el.classList.remove("hidden"));
  $("#hideEn").onchange = e => { hideEn = e.target.checked; renderSpeak(); };
  $("#playAll").onclick = async () => {
    if (playingAll) { playingAll = false; synth && synth.cancel(); renderSpeak(); return; }
    playingAll = true; renderSpeak();
    for (let i = 0; i < lines.length && playingAll; i++) {
      $$("#dialog .line").forEach(el => el.style.outline = el.dataset.i == i ? "2px solid var(--accent)" : "");
      await speak(lines[i].en);
      await new Promise(r => setTimeout(r, 500));
    }
    playingAll = false; renderSpeak();
  };
}
$("#scenes").addEventListener("click", e => {
  const c = e.target.closest("[data-c]");
  if (c) { sceneCat = c.dataset.c; renderSpeak(); return; }
  const b = e.target.closest("[data-s]"); if (!b) return;
  playingAll = false; synth && synth.cancel(); sceneId = b.dataset.s; renderSpeak();
  $("#dialog").scrollIntoView({ behavior: "smooth", block: "start" });
});

// ---------- 按钮布局：右手 / 左手 / 顶部（每台设备自己记住） ----------
const LAYOUT_KEY = "maple-en-layout";
const isTouch = (window.matchMedia && matchMedia("(any-pointer: coarse)").matches) || navigator.maxTouchPoints > 1;
let layout = lsGet(LAYOUT_KEY) || "right"; // 所有设备默认右手布局，电脑和 iPad 横屏界面一致
function applyLayout() {
  document.body.classList.remove("layout-right", "layout-left", "layout-top");
  document.body.classList.add("layout-" + layout);
  $$("#setLayout button").forEach(b => b.classList.toggle("active", b.dataset.l === layout));
}
applyLayout();
$("#setLayout").addEventListener("click", e => {
  const b = e.target.closest("[data-l]"); if (!b) return;
  layout = b.dataset.l; lsSet(LAYOUT_KEY, layout); applyLayout();
});
// iPad 弹出键盘时，把固定在底部的按钮抬到键盘上方
if (window.visualViewport) {
  const updKb = () => {
    const kb = Math.max(0, window.innerHeight - visualViewport.height - visualViewport.offsetTop);
    document.documentElement.style.setProperty("--kb", (kb > 80 ? kb : 0) + "px");
  };
  visualViewport.addEventListener("resize", updKb);
  visualViewport.addEventListener("scroll", updKb);
}

// ---------- 设置 ----------
function bindSettings() {
  const st = S.settings;
  $("#setRate").value = st.rate; $("#rateVal").textContent = st.rate + "x";
  $("#setNewPerDay").value = st.newPerDay; $("#setDictGoal").value = st.dictGoal; $("#setSpeakGoal").value = st.speakGoal;
  $("#setRecLang").value = st.recLang;
}
$("#setGender").addEventListener("click", e => {
  const b = e.target.closest("[data-g]"); if (!b) return;
  gender = b.dataset.g; lsSet(GENDER_KEY, gender); loadVoices();
  speak("Hi, I'm your English teacher. Let's practise together.");
});
$("#setVoice").onchange = e => { voiceName = e.target.value; lsSet(VOICE_KEY, voiceName); speak("Hello! Welcome to Canada."); };
$("#setRate").oninput = e => { S.settings.rate = +e.target.value; $("#rateVal").textContent = S.settings.rate + "x"; save(); };
const numSet = (id, k) => $(id).onchange = e => { const v = Math.max(1, Math.min(50, parseInt(e.target.value) || DEFAULT.settings[k])); S.settings[k] = v; e.target.value = v; save(); };
numSet("#setNewPerDay", "newPerDay"); numSet("#setDictGoal", "dictGoal"); numSet("#setSpeakGoal", "speakGoal");
$("#setRecLang").onchange = e => { S.settings.recLang = e.target.value; save(); };
$("#btnTestVoice").onclick = () => speak("Good evening. Here's a look at the top stories from across the country tonight.");
$("#btnExport").onclick = async () => {
  const filename = `maple-english-${USER ? USER.slug : "backup"}-${dateKey()}.json`, json = JSON.stringify(S, null, 1);
  const dl = inArtifact ? await claude.use("downloads").catch(() => null) : null;
  if (dl) { try { await dl.save({ filename, data: json }); toast("已导出"); } catch { toast("没有导出"); } return; }
  if (inArtifact) return toast("这里不能导出文件");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([json], { type: "application/json" }));
  a.download = filename; a.click();
};
$("#btnImport").onclick = () => $("#importFile").click();
$("#importFile").onchange = async e => {
  const f = e.target.files[0]; if (!f) return;
  try {
    const data = JSON.parse(await f.text());
    if (!data.cards || !data.settings) throw new Error("bad");
    S = deepMerge(structuredClone(DEFAULT), data); save(); bindSettings(); loadVoices(); buildQueue(); toast("导入成功"); showTab("home");
  } catch { toast("文件格式不正确"); }
  e.target.value = "";
};
$("#btnReset").onclick = async () => {
  if (!await askConfirm(`确定清空「${USER ? USER.name : ""}」的所有学习进度？此操作不能撤销（建议先导出备份）。`)) return;
  const keep = S.settings; S = structuredClone(DEFAULT); S.settings = keep; save(); buildQueue(); toast("已清空"); showTab("home");
};

// ---------- 页面内确认框（网页版不支持 confirm 弹窗） ----------
function askConfirm(msg) {
  return new Promise(res => {
    const dlg = $("#confirmDlg");
    $("#confirmMsg").textContent = msg;
    dlg.onclose = () => res(dlg.returnValue === "ok");
    dlg.returnValue = ""; dlg.showModal();
  });
}

// ---------- 用户名登录 ----------
async function knownProfiles() {
  const names = new Map();
  knownLocalUsers().forEach(n => names.set(slugOf(n), n));
  if (await cloud.ready) {
    try {
      const snap = await withTimeout(cloud.db.collection("data/users/" + cloud.uid).get(), 8000);
      snap.docs.forEach(d => { const n = d.data() && d.data().name; if (n) names.set(d.id, n); });
    } catch { /* 云端读不到就只显示本机的 */ }
  }
  return [...names.values()];
}
async function showLogin() {
  $("#login").hidden = false;
  $("#loginName").value = USER ? "" : (lsGet(LAST_KEY) || "");
  if (!isTouch) $("#loginName").focus();
  $("#loginNote").textContent = inArtifact ? "进度会保存到你的 claude.ai 账号里，电脑和手机打开都能接着学。" : "进度保存在这个浏览器里。";
  const box = $("#knownUsers");
  box.innerHTML = "";
  const names = await knownProfiles();
  box.innerHTML = names.length ? `<span class="muted small">之前用过：</span>` + names.map(n => `<button type="button" class="ghost" data-user="${esc(n)}">👤 ${esc(n)}</button>`).join("") : "";
}
$("#knownUsers").addEventListener("click", e => { const b = e.target.closest("[data-user]"); if (b) login(b.dataset.user); });
$("#loginForm").addEventListener("submit", e => { e.preventDefault(); login($("#loginName").value); });
$("#btnSwitchUser").onclick = async () => { if (cloudTimer) await cloudFlush(); showLogin(); };
async function login(name) {
  name = String(name || "").trim().slice(0, 30);
  if (!name) return toast("请输入名字");
  const slug = slugOf(name);
  const btn = $("#loginForm button"); btn.disabled = true; btn.textContent = "载入中…";
  let local = parseState(lsGet(userKey(slug)));
  if (!local && !knownLocalUsers().length) local = parseState(lsGet(KEY_OLD)); // 第一版留下的进度交给第一个用户
  let remote = null;
  if (await cloud.ready) {
    try { const snap = await withTimeout(profileRef(slug).get(), 10000); if (snap.exists) remote = await unpack(snap.data()); } catch { /* 读不到云端就用本机的 */ }
  }
  USER = { name, slug };
  S = remote && (!local || remote.updatedAt >= local.updatedAt) ? remote : (local || structuredClone(DEFAULT));
  const users = knownLocalUsers().filter(n => slugOf(n) !== slug); users.unshift(name);
  lsSet(USERS_KEY, JSON.stringify(users.slice(0, 20))); lsSet(LAST_KEY, name);
  lsSet(userKey(slug), JSON.stringify(S));
  if (cloud.db) { if (S !== remote) cloudFlush(); else setSync("synced"); } else setSync("local");
  $("#userName").textContent = name;
  btn.disabled = false; btn.textContent = "开始";
  $("#login").hidden = true;
  bindSettings(); loadVoices(); buildQueue();
  const initTab = location.hash.slice(1);
  showTab($$(".page").some(p => p.id === initTab) && initTab !== "settings" ? initTab : "home");
  toast(`你好，${name}！`);
}

// ---------- 启动 ----------
const last = lsGet(LAST_KEY);
if (last) login(last); else showLogin();
})();

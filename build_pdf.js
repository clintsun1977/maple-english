// 生成词库 / 俗语的可打印 HTML，再用 Chrome 无头模式转 PDF
// 用法：node build_pdf.js sample   （5 词 + 5 俗语样本）
//       node build_pdf.js full     （全部）
const fs = require("fs"), vm = require("vm"), path = require("path");
const { execFileSync } = require("child_process");
const mode = process.argv[2] || "sample";

const html = fs.readFileSync("index.html", "utf8");
const scripts = [...html.matchAll(/<script src="(data[^"?]*)/g)].map(m => m[1]);
const ctx = {}; vm.createContext(ctx);
vm.runInContext(scripts.map(f => fs.readFileSync(f, "utf8")).join("\n;\n") +
  ";this.OUT={VOCAB,IDIOMS,EXTRA,IDIOM_CATS}", ctx);
const { VOCAB, IDIOMS, EXTRA, IDIOM_CATS } = ctx.OUT;

const TAGS = { news: "新闻", life: "生活", phrasal: "短语/口语", core: "核心词" };
const esc = s => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;");
const uniq = (list) => { const s = new Set(); return list.filter(w => { const k = w.w.toLowerCase(); if (s.has(k)) return false; s.add(k); return true; }); };

let words = uniq(VOCAB), idioms = uniq(IDIOMS);
if (mode === "sample") {
  const rich = words.filter(w => EXTRA[w.w.toLowerCase()]);
  const nth = (tag, k) => rich.filter(w => w.tag === tag)[k];
  words = [nth("news", 0), nth("news", 5), nth("life", 0), nth("core", 3), nth("phrasal", 2)].filter(Boolean);
  idioms = ["daily", "people", "work", "food", "body"].map(c => idioms.find(w => w.tag === c));
}

function group(list, cats) {
  const g = {};
  for (const w of list) (g[w.tag] ||= []).push(w);
  return Object.keys(cats).filter(k => g[k]).map(k => [cats[k], g[k]]);
}

const wordRow = (w, i) => {
  const x = EXTRA[w.w.toLowerCase()] || {};
  return `<div class="e"><div class="h"><span class="n">${i}</span><b>${esc(w.w)}</b>${x.ipa ? `<span class="ipa">${esc(x.ipa)}</span>` : ""}<span class="zh">${esc(w.zh)}</span></div>
${x.en ? `<div class="en"><i>EN</i>${esc(x.en)}</div>` : ""}
<div class="ex">${esc(w.ex)}</div>${x.exZh ? `<div class="exzh">${esc(x.exZh)}</div>` : ""}</div>`;
};
const idiomRow = (w, i) => `<div class="e"><div class="h"><span class="n">${i}</span><b>${esc(w.w)}</b><span class="zh">${esc(w.zh)}</span></div>
<div class="en"><i>EN</i>${esc(w.en)}</div><div class="ex">${esc(w.ex)}</div><div class="exzh">${esc(w.exZh)}</div></div>`;

function section(title, groups, row) {
  let n = 0, out = `<h1>${title}</h1>`;
  for (const [cat, list] of groups) {
    out += `<h2>${esc(cat)} <small>${list.length}</small></h2><div class="cols">`;
    out += list.map(w => row(w, ++n)).join("") + `</div>`;
  }
  return out;
}

const page = `<!doctype html><html lang="zh"><head><meta charset="utf-8"><title>Maple English 词库与俗语</title><style>
@page { size: A4 landscape; margin: 12mm 14mm 14mm;
  @bottom-center { content: counter(page) " / " counter(pages); font: 9px sans-serif; color: #888; } }
body { font-family: "Segoe UI", "Microsoft YaHei", sans-serif; color: #222; font-size: 12px; line-height: 1.45; margin: 0; }
.cover { text-align: center; padding: 45mm 0 10mm; }
.cover h1 { font-size: 30px; color: #c8102e; border: 0; margin: 0 0 6px; }
.cover p { color: #666; margin: 2px; }
h1 { font-size: 20px; color: #c8102e; border-bottom: 2px solid #c8102e; padding-bottom: 4px; margin: 0 0 8px; break-before: page; }
h2 { font-size: 13px; background: #f6e9eb; color: #8a0f22; padding: 3px 8px; border-radius: 4px; margin: 10px 0 6px; break-after: avoid; }
h2 small { color: #a77; font-weight: normal; }
.cols { column-count: 3; column-gap: 7mm; column-rule: 1px solid #eee; }
.e { break-inside: avoid; padding: 4px 0 5px; border-bottom: 1px dotted #ccc; }
.h { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0 6px; }
.n { color: #aaa; font-size: 8.5px; min-width: 18px; }
.h b { font-size: 14px; color: #111; }
.ipa { color: #777; font-family: "Segoe UI", "Lucida Sans Unicode", sans-serif; }
.zh { color: #c8102e; font-weight: 600; }
.en, .ex, .exzh { padding-left: 24px; }
.en { color: #444; } .en i { font-style: normal; font-size: 8px; background: #eee; border-radius: 3px; padding: 0 3px; margin-right: 4px; color: #777; }
.ex { color: #1a4f8b; font-style: italic; }
.exzh { color: #777; }
</style></head><body>
<div class="cover"><h1>🍁 Maple English</h1><p style="font-size:16px">词库与俗语${mode === "sample" ? "（样本）" : ""}</p>
<p>单词 ${words.length} 个 · 俗语 ${idioms.length} 条</p></div>
${section("📖 单词", group(words, TAGS), wordRow)}
${section("💬 俗语", group(idioms, IDIOM_CATS), idiomRow)}
</body></html>`;

const name = mode === "sample" ? "MapleEnglish-样本-横屏" : "MapleEnglish-词库与俗语-横屏";
const htmlPath = path.resolve(`${name}.html`), pdfPath = path.resolve(`${name}.pdf`);
fs.writeFileSync(htmlPath, page);
const chrome = ["C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find(p => fs.existsSync(p));
execFileSync(chrome, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer",
  `--print-to-pdf=${pdfPath}`, "file:///" + htmlPath.replace(/\\/g, "/")], { stdio: "ignore", timeout: 300000 });
fs.unlinkSync(htmlPath);
console.log(pdfPath, words.length, idioms.length, fs.statSync(pdfPath).size);

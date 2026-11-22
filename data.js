// 学习内容数据：全部为原创例句，按"加拿大生活 + CBC 新闻"场景编写
// tag: news=新闻高频词  life=加拿大生活  phrasal=口语常用短语动词

const VOCAB = [
  // ===== 新闻：政治与政府 =====
  { w: "federal", zh: "联邦的", ex: "The federal government announced new funding for housing.", tag: "news" },
  { w: "provincial", zh: "省的", ex: "Provincial leaders will meet in Ottawa next week.", tag: "news" },
  { w: "premier", zh: "省长", ex: "The premier says the province will hire more nurses.", tag: "news" },
  { w: "minister", zh: "部长", ex: "The health minister spoke to reporters on Tuesday.", tag: "news" },
  { w: "opposition", zh: "反对党", ex: "The opposition is calling for an investigation.", tag: "news" },
  { w: "legislation", zh: "法律；立法", ex: "The new legislation will take effect in January.", tag: "news" },
  { w: "election", zh: "选举", ex: "Voters will head to the polls in a federal election this spring.", tag: "news" },
  { w: "riding", zh: "（加拿大）选区", ex: "She won the riding by fewer than two hundred votes.", tag: "news" },
  { w: "candidate", zh: "候选人", ex: "Three candidates are running in the local riding.", tag: "news" },
  { w: "poll", zh: "民意调查；投票", ex: "A new poll suggests the race is very close.", tag: "news" },
  { w: "announce", zh: "宣布", ex: "The city announced that the bridge will close for repairs.", tag: "news" },
  { w: "spokesperson", zh: "发言人", ex: "A spokesperson for the company declined to comment.", tag: "news" },
  { w: "statement", zh: "声明", ex: "Police released a statement late Sunday night.", tag: "news" },
  { w: "according to", zh: "根据……", ex: "According to Statistics Canada, prices rose again last month.", tag: "news" },
  { w: "allegation", zh: "指控（未证实）", ex: "The mayor denies the allegations against him.", tag: "news" },
  { w: "investigate", zh: "调查", ex: "Officials are investigating the cause of the fire.", tag: "news" },
  { w: "charged with", zh: "被控犯有……罪", ex: "A man has been charged with dangerous driving.", tag: "news" },
  { w: "ruling", zh: "（法院）裁决", ex: "The Supreme Court's ruling surprised many experts.", tag: "news" },
  { w: "Indigenous", zh: "原住民的", ex: "Indigenous leaders met with the prime minister.", tag: "news" },
  { w: "reconciliation", zh: "和解（与原住民）", ex: "The report includes ninety-four calls to action on reconciliation.", tag: "news" },

  // ===== 新闻：经济 =====
  { w: "economy", zh: "经济", ex: "Experts say the economy is slowing down.", tag: "news" },
  { w: "inflation", zh: "通货膨胀", ex: "Inflation has made groceries much more expensive.", tag: "news" },
  { w: "interest rate", zh: "利率", ex: "The Bank of Canada kept its key interest rate unchanged.", tag: "news" },
  { w: "mortgage", zh: "房贷", ex: "Many families are struggling to renew their mortgage.", tag: "news" },
  { w: "affordability", zh: "可负担性", ex: "Housing affordability is a top concern for young Canadians.", tag: "news" },
  { w: "cost of living", zh: "生活成本", ex: "The rising cost of living is putting pressure on seniors.", tag: "news" },
  { w: "budget", zh: "预算", ex: "The federal budget includes billions for defence.", tag: "news" },
  { w: "deficit", zh: "赤字", ex: "The province is projecting a smaller deficit this year.", tag: "news" },
  { w: "tariff", zh: "关税", ex: "New tariffs on steel could hurt Canadian workers.", tag: "news" },
  { w: "trade", zh: "贸易", ex: "The United States is Canada's largest trading partner.", tag: "news" },
  { w: "recession", zh: "经济衰退", ex: "Some economists warn of a possible recession.", tag: "news" },
  { w: "unemployment rate", zh: "失业率", ex: "The unemployment rate rose slightly in October.", tag: "news" },
  { w: "layoff", zh: "裁员", ex: "The plant announced layoffs affecting three hundred workers.", tag: "news" },
  { w: "minimum wage", zh: "最低工资", ex: "The minimum wage will go up on April first.", tag: "news" },
  { w: "strike", zh: "罢工", ex: "Teachers could go on strike as early as Monday.", tag: "news" },
  { w: "union", zh: "工会", ex: "The union says talks have broken down.", tag: "news" },
  { w: "negotiation", zh: "谈判", ex: "Negotiations between the two sides will resume tomorrow.", tag: "news" },
  { w: "surge", zh: "激增", ex: "There has been a surge in demand for food banks.", tag: "news" },
  { w: "decline", zh: "下降", ex: "Home sales declined for the third month in a row.", tag: "news" },
  { w: "record high", zh: "历史新高", ex: "Rent prices reached a record high in Toronto.", tag: "news" },
  { w: "funding", zh: "资金；拨款", ex: "The program will receive new funding next year.", tag: "news" },
  { w: "invest", zh: "投资", ex: "Ottawa plans to invest in public transit.", tag: "news" },
  { w: "shortage", zh: "短缺", ex: "Rural areas face a shortage of family doctors.", tag: "news" },

  // ===== 新闻：社会、健康、天气 =====
  { w: "immigration", zh: "移民", ex: "The government is cutting immigration targets.", tag: "news" },
  { w: "permanent resident", zh: "永久居民", ex: "She became a permanent resident after five years.", tag: "news" },
  { w: "citizenship", zh: "公民身份", ex: "He took his citizenship oath last month.", tag: "news" },
  { w: "health care", zh: "医疗保健", ex: "Health care is the biggest issue in this election.", tag: "news" },
  { w: "emergency room", zh: "急诊室", ex: "Some emergency rooms have closed overnight due to staff shortages.", tag: "news" },
  { w: "wait time", zh: "等待时间", ex: "Wait times for surgery are getting longer.", tag: "news" },
  { w: "outbreak", zh: "（疾病）爆发", ex: "Health officials have declared an outbreak at the school.", tag: "news" },
  { w: "vaccine", zh: "疫苗", ex: "Flu vaccines are now available at pharmacies.", tag: "news" },
  { w: "recall", zh: "召回", ex: "The product has been recalled because of safety concerns.", tag: "news" },
  { w: "infrastructure", zh: "基础设施", ex: "The city needs to repair aging infrastructure.", tag: "news" },
  { w: "transit", zh: "公共交通", ex: "Transit riders faced delays this morning.", tag: "news" },
  { w: "wildfire", zh: "山火", ex: "Wildfires have forced thousands of people from their homes.", tag: "news" },
  { w: "evacuation order", zh: "疏散令", ex: "An evacuation order is in effect for the area.", tag: "news" },
  { w: "forecast", zh: "天气预报；预测", ex: "The forecast calls for heavy snow overnight.", tag: "news" },
  { w: "warning", zh: "警告；预警", ex: "Environment Canada has issued a winter storm warning.", tag: "news" },
  { w: "power outage", zh: "停电", ex: "Thousands of homes are without power after the storm.", tag: "news" },
  { w: "flooding", zh: "洪水；淹水", ex: "Heavy rain caused flooding in several neighbourhoods.", tag: "news" },
  { w: "emissions", zh: "排放", ex: "Canada wants to cut emissions by forty percent.", tag: "news" },
  { w: "crash", zh: "撞车事故", ex: "The highway is closed after a serious crash.", tag: "news" },
  { w: "suspect", zh: "嫌疑人", ex: "Police are looking for a suspect in the robbery.", tag: "news" },
  { w: "survey", zh: "调查（问卷）", ex: "A new survey found that most Canadians feel stressed about money.", tag: "news" },
  { w: "community", zh: "社区", ex: "The community came together to help the family.", tag: "news" },

  // ===== 加拿大生活 =====
  { w: "appointment", zh: "预约", ex: "I'd like to book an appointment with my family doctor.", tag: "life" },
  { w: "walk-in clinic", zh: "免预约诊所", ex: "If you don't have a doctor, you can go to a walk-in clinic.", tag: "life" },
  { w: "prescription", zh: "处方", ex: "Can I get a refill on my prescription?", tag: "life" },
  { w: "pharmacist", zh: "药剂师", ex: "Ask the pharmacist if this medicine makes you sleepy.", tag: "life" },
  { w: "health card", zh: "医保卡", ex: "Please show me your health card.", tag: "life" },
  { w: "symptom", zh: "症状", ex: "How long have you had these symptoms?", tag: "life" },
  { w: "landlord", zh: "房东", ex: "I called the landlord about the broken heater.", tag: "life" },
  { w: "tenant", zh: "租客", ex: "Tenants have the right to a safe home.", tag: "life" },
  { w: "lease", zh: "租约", ex: "Our lease ends at the end of June.", tag: "life" },
  { w: "utilities", zh: "水电煤等费用", ex: "Is the rent including utilities?", tag: "life" },
  { w: "hydro", zh: "（加拿大）电；电费", ex: "Our hydro bill was really high this winter.", tag: "life" },
  { w: "deposit", zh: "押金；存款", ex: "You need to pay a deposit before moving in.", tag: "life" },
  { w: "chequing account", zh: "支票账户（活期）", ex: "I'd like to open a chequing account.", tag: "life" },
  { w: "e-transfer", zh: "电子转账", ex: "Can I pay you by e-transfer?", tag: "life" },
  { w: "receipt", zh: "收据；小票", ex: "Do you want your receipt in the bag?", tag: "life" },
  { w: "refund", zh: "退款", ex: "Can I get a refund if I keep the receipt?", tag: "life" },
  { w: "exchange", zh: "换货；交换", ex: "I'd like to exchange this for a smaller size.", tag: "life" },
  { w: "tip", zh: "小费", ex: "People usually tip about fifteen percent at restaurants.", tag: "life" },
  { w: "the bill", zh: "账单（餐厅结账）", ex: "Could we get the bill, please?", tag: "life" },
  { w: "take-out", zh: "外带", ex: "Is that for here or take-out?", tag: "life" },
  { w: "double-double", zh: "双份奶双份糖咖啡（Tim Hortons）", ex: "Can I get a medium double-double?", tag: "life" },
  { w: "loonie / toonie", zh: "一元 / 两元加币硬币", ex: "Do you have a toonie for the parking meter?", tag: "life" },
  { w: "toque", zh: "（加拿大）毛线帽", ex: "Don't forget your toque, it's freezing outside.", tag: "life" },
  { w: "washroom", zh: "洗手间", ex: "Excuse me, where's the washroom?", tag: "life" },
  { w: "line-up", zh: "排队的队伍", ex: "The line-up at the grocery store was really long.", tag: "life" },
  { w: "rush hour", zh: "高峰时间", ex: "The bus is always packed during rush hour.", tag: "life" },
  { w: "detour", zh: "绕行", ex: "There's a detour because of construction.", tag: "life" },
  { w: "slippery", zh: "滑的", ex: "Be careful, the sidewalk is slippery.", tag: "life" },
  { w: "garbage day", zh: "收垃圾日", ex: "Garbage day is Thursday on our street.", tag: "life" },
  { w: "postal code", zh: "邮政编码", ex: "What's your postal code?", tag: "life" },
  { w: "tax return", zh: "报税", ex: "You need to file your tax return by April thirtieth.", tag: "life" },
  { w: "benefit", zh: "福利；补助", ex: "You may be eligible for the child benefit.", tag: "life" },
  { w: "eligible", zh: "有资格的", ex: "Am I eligible for this program?", tag: "life" },
  { w: "apply for", zh: "申请", ex: "I want to apply for a library card.", tag: "life" },
  { w: "fill out", zh: "填写（表格）", ex: "Please fill out this form and sign at the bottom.", tag: "life" },
  { w: "available", zh: "有空的；可用的", ex: "Is Dr. Smith available on Friday?", tag: "life" },
  { w: "neighbourhood", zh: "街区；社区", ex: "It's a quiet neighbourhood with a lot of parks.", tag: "life" },
  { w: "snowstorm", zh: "暴风雪", ex: "School buses were cancelled because of the snowstorm.", tag: "life" },
  { w: "windchill", zh: "体感温度（风寒）", ex: "With the windchill, it feels like minus thirty.", tag: "life" },

  // ===== 口语常用短语动词 =====
  { w: "figure out", zh: "弄明白；想出", ex: "I can't figure out how to use this machine.", tag: "phrasal" },
  { w: "run out of", zh: "用完", ex: "We ran out of milk again.", tag: "phrasal" },
  { w: "pick up", zh: "接（人）；取（东西）", ex: "I'll pick up the kids after school.", tag: "phrasal" },
  { w: "drop off", zh: "放下；送到", ex: "Can you drop me off at the station?", tag: "phrasal" },
  { w: "look into", zh: "调查；研究一下", ex: "I'll look into it and call you back.", tag: "phrasal" },
  { w: "sign up", zh: "报名；注册", ex: "I signed up for a free English class.", tag: "phrasal" },
  { w: "show up", zh: "出现；到场", ex: "The repair guy didn't show up today.", tag: "phrasal" },
  { w: "deal with", zh: "处理；应对", ex: "I have to deal with a lot of paperwork.", tag: "phrasal" },
  { w: "end up", zh: "最终（成了）", ex: "We ended up staying home because of the weather.", tag: "phrasal" },
  { w: "check out", zh: "看看；结账", ex: "You should check out the farmers' market.", tag: "phrasal" },
  { w: "set up", zh: "设立；安排", ex: "Can we set up a meeting for next week?", tag: "phrasal" },
  { w: "get by", zh: "勉强应付", ex: "My English is enough to get by, but I want to improve.", tag: "phrasal" },
  { w: "hang on", zh: "稍等", ex: "Hang on a second, let me check.", tag: "phrasal" },
  { w: "sort out", zh: "解决；整理", ex: "Don't worry, we'll sort it out.", tag: "phrasal" },
  { w: "catch up", zh: "叙旧；赶上", ex: "Let's grab a coffee and catch up.", tag: "phrasal" },
  { w: "put off", zh: "推迟", ex: "Don't put off your tax return until the last minute.", tag: "phrasal" },
  { w: "come up with", zh: "想出（主意）", ex: "We need to come up with a better plan.", tag: "phrasal" },
  { w: "turn down", zh: "拒绝；调小", ex: "She turned down the job offer.", tag: "phrasal" },
  { w: "go over", zh: "仔细检查；复习", ex: "Let's go over the details one more time.", tag: "phrasal" },
  { w: "fill in", zh: "替班；告知详情", ex: "Can you fill me in on what happened?", tag: "phrasal" },
];

// 听写句子：L1 日常生活  L2 新闻短句  L3 新闻长句
const DICTATION = [
  // L1
  { lv: 1, en: "Can I get a medium coffee with milk, please?", zh: "请给我一杯中杯加奶咖啡。" },
  { lv: 1, en: "Sorry, could you say that again a little slower?", zh: "抱歉，你能再慢一点说一遍吗？" },
  { lv: 1, en: "It's really cold today, isn't it?", zh: "今天真冷啊，是吧？" },
  { lv: 1, en: "Is this the right bus for downtown?", zh: "这是去市中心的车吗？" },
  { lv: 1, en: "I'd like to make an appointment for next week.", zh: "我想预约下周。" },
  { lv: 1, en: "Do you have this in a bigger size?", zh: "这个有大一号的吗？" },
  { lv: 1, en: "What time does the library close on Sunday?", zh: "图书馆周日几点关门？" },
  { lv: 1, en: "I've been living here for about two years.", zh: "我在这里住了大约两年了。" },
  { lv: 1, en: "Can you tell me how to get to the hospital?", zh: "你能告诉我去医院怎么走吗？" },
  { lv: 1, en: "I'm not sure, let me check and get back to you.", zh: "我不确定，我查一下再回复你。" },
  { lv: 1, en: "Would you like a bag for that?", zh: "你需要袋子吗？" },
  { lv: 1, en: "My son started grade three this year.", zh: "我儿子今年上三年级了。" },
  { lv: 1, en: "Have a good one, see you next time.", zh: "祝你愉快，下次见。" },
  { lv: 1, en: "The heater in my apartment isn't working.", zh: "我公寓的暖气坏了。" },
  { lv: 1, en: "Do you take debit or credit?", zh: "你们收借记卡还是信用卡？" },
  // L2
  { lv: 2, en: "Environment Canada has issued a snowfall warning for the region.", zh: "加拿大环境部已对该地区发布降雪预警。" },
  { lv: 2, en: "The Bank of Canada has cut its key interest rate.", zh: "加拿大央行下调了关键利率。" },
  { lv: 2, en: "Police are asking the public for help finding a missing teenager.", zh: "警方请求公众帮助寻找一名失踪少年。" },
  { lv: 2, en: "The highway is closed in both directions after a crash.", zh: "一起车祸后，高速公路双向封闭。" },
  { lv: 2, en: "Grocery prices continue to rise across the country.", zh: "全国杂货价格持续上涨。" },
  { lv: 2, en: "The premier says the province will build more homes.", zh: "省长表示该省将建造更多住房。" },
  { lv: 2, en: "Thousands of people are without power this morning.", zh: "今天早上数千人断电。" },
  { lv: 2, en: "The union says its members are ready to go on strike.", zh: "工会表示其成员已准备好罢工。" },
  { lv: 2, en: "Health officials are urging people to get their flu shot.", zh: "卫生官员敦促人们接种流感疫苗。" },
  { lv: 2, en: "The city council voted to raise property taxes.", zh: "市议会投票决定提高房产税。" },
  { lv: 2, en: "A new report says rent is becoming harder to afford.", zh: "一份新报告称房租越来越难以负担。" },
  { lv: 2, en: "Firefighters are still battling the wildfire tonight.", zh: "消防员今晚仍在扑救山火。" },
  { lv: 2, en: "The prime minister is expected to make an announcement today.", zh: "预计总理今天将发布声明。" },
  { lv: 2, en: "Schools are closed today because of the storm.", zh: "由于暴风雪，学校今天停课。" },
  { lv: 2, en: "The company says it will cut hundreds of jobs.", zh: "该公司表示将裁减数百个职位。" },
  // L3
  { lv: 3, en: "Statistics Canada says the annual inflation rate rose last month, driven mainly by higher gas prices.", zh: "加拿大统计局称，上月年通胀率上升，主要原因是油价上涨。" },
  { lv: 3, en: "Residents in the area have been told to be ready to leave their homes on short notice.", zh: "该地区居民被告知要做好随时撤离家园的准备。" },
  { lv: 3, en: "Doctors say emergency rooms are under pressure as respiratory illnesses spread across the province.", zh: "医生表示，随着呼吸道疾病在全省蔓延，急诊室压力很大。" },
  { lv: 3, en: "The federal government is facing criticism over its decision to reduce the number of new immigrants.", zh: "联邦政府因减少新移民人数的决定而受到批评。" },
  { lv: 3, en: "Officials say it could take several days before power is fully restored to all customers.", zh: "官员表示，可能需要数天时间才能为所有用户完全恢复供电。" },
  { lv: 3, en: "Many first-time home buyers say they have given up on owning a house in the city.", zh: "许多首次购房者表示，他们已经放弃了在这座城市拥有一套房子。" },
  { lv: 3, en: "Negotiations between the two sides broke down late last night, and no new talks are scheduled.", zh: "双方谈判昨晚破裂，目前没有安排新的会谈。" },
  { lv: 3, en: "Experts warn that new tariffs on Canadian goods could lead to job losses in manufacturing.", zh: "专家警告，对加拿大商品征收新关税可能导致制造业失业。" },
  { lv: 3, en: "The investigation is ongoing, and police are asking anyone with information to contact them.", zh: "调查仍在进行中，警方请任何知情者与他们联系。" },
  { lv: 3, en: "Temperatures are expected to drop sharply overnight, with the windchill making it feel like minus thirty.", zh: "预计夜间气温将骤降，加上风寒，体感温度将达零下三十度。" },
  { lv: 3, en: "The minister says the new program will help families who are struggling with the cost of child care.", zh: "部长表示，新计划将帮助那些为育儿费用发愁的家庭。" },
  { lv: 3, en: "Transit users in the city are being warned to expect delays because of ongoing construction.", zh: "该市公共交通乘客被提醒，由于施工仍在进行，可能会出现延误。" },
];

// 口语情景对话：them=对方（听力） you=你（跟读/口语）
const SCENARIOS = [
  {
    id: "coffee", cat: "shop", title: "咖啡店点单", icon: "☕",
    lines: [
      { who: "them", en: "Hi there! What can I get for you today?", zh: "你好！今天想要点什么？" },
      { who: "you", en: "Hi, can I get a medium double-double, please?", zh: "你好，请给我一杯中杯双奶双糖。" },
      { who: "them", en: "Sure. Anything else? Maybe something to eat?", zh: "好的。还要别的吗？吃点什么？" },
      { who: "you", en: "Yes, I'll have a toasted bagel with cream cheese.", zh: "要的，我要一个烤贝果加奶油芝士。" },
      { who: "them", en: "Is that for here or to go?", zh: "在这儿吃还是带走？" },
      { who: "you", en: "To go, please.", zh: "带走，谢谢。" },
      { who: "them", en: "That'll be six fifty. You can tap whenever you're ready.", zh: "一共六块五。准备好了就刷卡。" },
      { who: "you", en: "Thanks. Have a good day.", zh: "谢谢，祝你今天愉快。" },
    ],
  },
  {
    id: "smalltalk", cat: "social", title: "和邻居闲聊", icon: "🏡",
    lines: [
      { who: "them", en: "Morning! Crazy weather we're having, eh?", zh: "早！这天气真疯狂，是吧？" },
      { who: "you", en: "I know, I can't believe how much snow we got last night.", zh: "是啊，真不敢相信昨晚下了这么多雪。" },
      { who: "them", en: "Did you get your driveway cleared already?", zh: "你家车道的雪已经铲完了？" },
      { who: "you", en: "Yeah, it took me almost an hour this morning.", zh: "是的，今天早上花了我将近一个小时。" },
      { who: "them", en: "You should think about getting a snowblower. It's a lifesaver.", zh: "你应该考虑买个吹雪机，太救命了。" },
      { who: "you", en: "That's a good idea. Where did you get yours?", zh: "好主意。你的是在哪儿买的？" },
      { who: "them", en: "Canadian Tire. They usually have a sale in the fall.", zh: "Canadian Tire。他们秋天一般会打折。" },
      { who: "you", en: "Great, I'll check it out. Thanks for the tip!", zh: "太好了，我去看看。谢谢你的建议！" },
    ],
  },
  {
    id: "doctor", cat: "health", title: "预约看医生", icon: "🩺",
    lines: [
      { who: "them", en: "Good morning, Maple Medical Clinic. How can I help you?", zh: "早上好，枫叶诊所。有什么可以帮您？" },
      { who: "you", en: "Hi, I'd like to book an appointment with Doctor Chen.", zh: "你好，我想预约陈医生。" },
      { who: "them", en: "Sure. Can I have your name and date of birth?", zh: "好的。请告诉我您的姓名和出生日期。" },
      { who: "you", en: "My name is Li Wei, and my birthday is March fifth, nineteen eighty.", zh: "我叫李伟，生日是1980年3月5日。" },
      { who: "them", en: "Thank you. And what's the reason for your visit?", zh: "谢谢。您来看病的原因是什么？" },
      { who: "you", en: "I've had a bad cough and a sore throat for about a week.", zh: "我咳嗽很厉害、喉咙痛大概一周了。" },
      { who: "them", en: "The earliest I have is Thursday at two thirty. Does that work for you?", zh: "最早是周四两点半，您可以吗？" },
      { who: "you", en: "Yes, that works. Should I bring anything?", zh: "可以。我需要带什么吗？" },
      { who: "them", en: "Just your health card. Please arrive ten minutes early.", zh: "带上医保卡就行。请提前十分钟到。" },
    ],
  },
  {
    id: "landlord", cat: "home", title: "给房东打电话报修", icon: "🔧",
    lines: [
      { who: "you", en: "Hi, this is Wei from unit two oh four. Do you have a minute?", zh: "你好，我是204单元的伟。你有空吗？" },
      { who: "them", en: "Sure, what's going on?", zh: "当然，怎么了？" },
      { who: "you", en: "The heater in the bedroom stopped working last night.", zh: "卧室的暖气昨晚坏了。" },
      { who: "them", en: "Oh no. Is it making any noise, or is it just not turning on?", zh: "哎呀。它有异响吗，还是就是打不开？" },
      { who: "you", en: "It's not turning on at all, and the room is really cold.", zh: "完全打不开，房间特别冷。" },
      { who: "them", en: "Okay, I'll send someone over tomorrow morning. Will you be home?", zh: "好的，我明早派人过去。你在家吗？" },
      { who: "you", en: "I work in the morning. Could they come after three?", zh: "我上午要上班。他们能三点以后来吗？" },
      { who: "them", en: "Let me check and text you back in a few minutes.", zh: "我查一下，几分钟后给你发短信。" },
      { who: "you", en: "Perfect. Thank you so much for your help.", zh: "太好了，非常感谢你的帮忙。" },
    ],
  },
  {
    id: "bank", cat: "gov", title: "银行办业务", icon: "🏦",
    lines: [
      { who: "them", en: "Hi, how can I help you today?", zh: "你好，今天要办什么业务？" },
      { who: "you", en: "Hi, I'd like to ask about your savings accounts.", zh: "你好，我想咨询一下储蓄账户。" },
      { who: "them", en: "Of course. Are you looking for something with a higher interest rate?", zh: "当然。您是想找利率高一点的吗？" },
      { who: "you", en: "Yes, and I don't want to pay any monthly fees.", zh: "是的，而且我不想付月费。" },
      { who: "them", en: "We have a high-interest savings account with no monthly fee.", zh: "我们有一个高息储蓄账户，没有月费。" },
      { who: "you", en: "That sounds good. Is there a minimum balance?", zh: "听起来不错。有最低余额要求吗？" },
      { who: "them", en: "No minimum balance. I can set it up for you right now if you'd like.", zh: "没有最低余额。如果您愿意，我现在就可以帮您开。" },
      { who: "you", en: "Yes, please. Do you need my ID?", zh: "好的，请帮我开。需要我的身份证件吗？" },
    ],
  },
  {
    id: "work", cat: "work", title: "工作中沟通", icon: "💼",
    lines: [
      { who: "them", en: "Hey, do you have a few minutes to go over the schedule?", zh: "嘿，你有几分钟一起过一下日程吗？" },
      { who: "you", en: "Sure, I'm free now. What's up?", zh: "当然，我现在有空。怎么了？" },
      { who: "them", en: "We need someone to cover the Saturday shift next week.", zh: "下周六的班需要有人顶一下。" },
      { who: "you", en: "I might be able to do it. What time does it start?", zh: "我也许可以。几点开始？" },
      { who: "them", en: "Nine to five. I know it's short notice.", zh: "九点到五点。我知道通知得有点急。" },
      { who: "you", en: "No problem. Can I take Monday off instead?", zh: "没问题。那我能周一休息吗？" },
      { who: "them", en: "That should be fine. I'll update the schedule.", zh: "应该可以。我会更新排班表。" },
      { who: "you", en: "Sounds good. Just let me know if anything changes.", zh: "好的。有任何变化告诉我一声。" },
    ],
  },
  {
    id: "phone", cat: "help", title: "听不懂时的救命句", icon: "🆘",
    lines: [
      { who: "you", en: "Sorry, could you repeat that, please?", zh: "抱歉，能再说一遍吗？" },
      { who: "you", en: "Could you speak a little more slowly?", zh: "你能说慢一点吗？" },
      { who: "you", en: "Sorry, I didn't catch that last part.", zh: "抱歉，最后那部分我没听清。" },
      { who: "you", en: "What do you mean by that?", zh: "你这么说是什么意思？" },
      { who: "you", en: "Just to make sure I understand, you mean I should come back tomorrow?", zh: "我确认一下，你的意思是我明天再来？" },
      { who: "you", en: "Could you write that down for me?", zh: "你能帮我写下来吗？" },
      { who: "you", en: "English is my second language, so please bear with me.", zh: "英语是我的第二语言，请多包涵。" },
      { who: "you", en: "How do you spell that?", zh: "那个怎么拼写？" },
    ],
  },
];

const VOCAB_INITIAL = VOCAB.length; // 第一版的基础词，最先学习

// ===== 扩充数据的加载函数（data/ 目录下各文件调用） =====
// 每行格式：单词|中文|例句
function addVocab(tag, text) {
  for (const line of text.split("\n")) {
    const [w, zh, ex] = line.split("|").map(s => (s || "").trim());
    if (w) VOCAB.push({ w, zh, ex, tag });
  }
}
// 每行格式：英文|中文
function addDict(lv, text) {
  for (const line of text.split("\n")) {
    const [en, zh] = line.split("|").map(s => (s || "").trim());
    if (en) DICTATION.push({ lv, en, zh });
  }
}
// 每行格式：T 对方英文|中文   或   Y 你的英文|中文
function addScene(id, cat, title, icon, text) {
  const lines = [];
  for (const line of text.split("\n")) {
    const m = line.trim().match(/^([TY])\s+(.+?)\|(.*)$/);
    if (m) lines.push({ who: m[1] === "Y" ? "you" : "them", en: m[2].trim(), zh: m[3].trim() });
  }
  SCENARIOS.push({ id, cat, title, icon, lines });
}
const SCENE_CATS = [
  ["shop", "购物餐饮"], ["health", "医疗健康"], ["home", "住房生活"], ["gov", "银行与政府"],
  ["transport", "交通出行"], ["work", "工作职场"], ["school", "学校与孩子"], ["social", "社交闲聊"],
  ["help", "求助与电话"], ["leisure", "休闲活动"],
];

// 单词补充信息：音标、英文释义（英译英）、例句中文。每行：单词|音标|英文释义|例句中文
const EXTRA = {};
function addExtra(text) {
  for (const line of text.split("\n")) {
    const [w, ipa, en, exZh] = line.split("|").map(s => (s || "").trim());
    if (w) EXTRA[w.toLowerCase()] = { ipa, en, exZh };
  }
}

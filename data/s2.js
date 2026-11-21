// 情景对话：住房生活、银行与政府
addScene("viewing", "home", "打电话约看房", "🏠", `
Y Hi, I'm calling about the two-bedroom apartment on King Street. Is it still available?|你好，我打电话问一下 King 街的两居室公寓，还在吗？
T Yes, it is. Would you like to come see it?|还在。你想来看看吗？
Y Yes, please. How much is the rent?|想的。房租多少？
T It's two thousand two hundred a month, plus hydro.|每月两千二，电费另付。
Y Is heat included?|含暖气吗？
T Yes, heat and water are included.|含，暖气和水都包括。
Y Can I come see it on Saturday morning?|我周六上午能去看吗？
T Sure, how about ten o'clock?|可以，十点怎么样？
Y Ten works. See you then.|十点可以，到时见。
`);
addScene("tour", "home", "看房提问", "🔑", `
T So this is the living room. As you can see, it gets a lot of light.|这是客厅。你可以看到，采光很好。
Y It's nice. How old is the building?|很不错。这栋楼多少年了？
T It was built in the eighties, but the kitchen was renovated last year.|八十年代建的，但厨房去年翻新过。
Y Is there laundry in the building?|楼里有洗衣设施吗？
T Yes, there's a laundry room on every floor.|有，每层都有洗衣房。
Y And are pets allowed? We have a small cat.|可以养宠物吗？我们有一只小猫。
T Cats are fine. We just ask for a pet deposit.|猫可以，只需要交一笔宠物押金。
Y What do you need for the application?|申请需要什么材料？
T A credit check, proof of income, and two references.|信用查询、收入证明和两位推荐人。
`);
addScene("noise", "home", "跟邻居说噪音", "🔊", `
Y Hi, sorry to bother you. I live in the unit below you.|你好，抱歉打扰。我住在你楼下。
T Oh, hi. Is everything okay?|哦，你好。怎么了？
Y It's just that the music has been pretty loud late at night.|就是深夜的音乐声有点大。
T Oh, I'm sorry. I didn't realize you could hear it.|哦，对不起，我没意识到你能听到。
Y It's okay. My kids go to bed at eight, and they keep waking up.|没关系。我孩子八点睡觉，他们总被吵醒。
T I totally understand. I'll keep it down after nine.|完全理解。九点以后我会小声点。
Y Thank you so much, I really appreciate it.|非常感谢，真的很感激。
`);
addScene("snowhelp", "home", "邻居帮忙铲雪", "❄️", `
T Hey, need a hand with that? That's a lot of snow.|嘿，需要帮忙吗？雪好多啊。
Y Oh, that would be great, thanks. I didn't expect so much.|哦，那太好了，谢谢。没想到下这么多。
T First big storm of the year. You'll get used to it.|今年第一场大雪，你会习惯的。
Y Do I have to clear the sidewalk too?|我也要铲人行道吗？
T Yeah, the city gives you twenty-four hours after the snow stops.|是的，雪停后市政府给你二十四小时。
Y Good to know. I'll buy a better shovel this week.|知道了。我这周去买个好点的铲子。
T Put some salt down too, so nobody slips.|再撒点盐，免得有人滑倒。
Y Thanks again. Let me buy you a coffee sometime.|再次感谢。改天请你喝咖啡。
`);
addScene("internet", "home", "开通网络", "📶", `
T Thanks for calling. How can I help you today?|感谢来电，有什么可以帮您？
Y Hi, I just moved and I'd like to set up internet at my new place.|你好，我刚搬家，想在新家开通网络。
T Sure. What's the address?|好的，地址是？
Y It's eighty-eight Pine Avenue, unit twelve.|松树大道八十八号，十二单元。
T Great, that address is covered. Our basic plan is sixty dollars a month.|好的，该地址在覆盖范围内。我们的基础套餐每月六十加元。
Y Is there a contract?|有合约吗？
T You can go month-to-month, or sign a two-year contract and save ten dollars a month.|可以按月付，或者签两年合约，每月省十加元。
Y I'll go month-to-month. When can you install it?|我选按月付。什么时候能安装？
T A technician can come on Thursday between eight and noon.|技术员可以周四八点到十二点之间上门。
`);
addScene("movingout", "home", "退租通知", "📦", `
Y Hi, I wanted to let you know that we're planning to move out at the end of March.|你好，我想告诉你，我们打算三月底搬走。
T Okay, thanks for letting me know. Have you given written notice?|好的，谢谢告知。你提交书面通知了吗？
Y Not yet. How much notice do you need?|还没有。需要提前多久通知？
T Sixty days, in writing. You can email it to me.|提前六十天，书面形式。你可以发邮件给我。
Y Okay, I'll send it today. What about our deposit?|好的，我今天发。押金怎么办？
T I'll do a walk-through after you move out, and if everything is fine, you'll get it back.|你搬走后我会检查一遍，如果一切正常就退还押金。
Y Sounds good. We'll make sure it's clean.|好的，我们会打扫干净的。
`);
addScene("plumber", "home", "约水管工", "🚿", `
T Hello, City Plumbing.|你好，城市水管公司。
Y Hi, my kitchen sink is leaking, and there's water all over the floor.|你好，我厨房水槽漏水，地上全是水。
T Okay. Have you turned off the water under the sink?|好的。你把水槽下面的水阀关了吗？
Y No, how do I do that?|没有，怎么关？
T There should be a small valve under the sink. Turn it to the right until it stops.|水槽下面应该有个小阀门，往右拧到底。
Y Okay, I did it. The water stopped.|好了，我关了，水停了。
T Great. Someone can come by this afternoon around three. Will you be home?|好的。今天下午三点左右可以派人过去，你在家吗？
Y Yes, I'll be here. How much will it cost?|在家。要多少钱？
T There's an eighty-dollar service call fee, and then it depends on the repair.|上门费八十加元，然后看维修情况。
`);
addScene("garbage", "home", "问垃圾分类", "♻️", `
Y Hi, I'm new to the neighbourhood. Can I ask you about garbage day?|你好，我刚搬来，能问一下收垃圾的事吗？
T Sure. Garbage and recycling get picked up every Tuesday.|当然。垃圾和回收每周二收。
Y What goes in the blue bin?|蓝桶里放什么？
T Bottles, cans, plastic containers, and paper. Just rinse them first.|瓶子、罐子、塑料容器和纸。先冲洗一下就行。
Y And food scraps?|食物残渣呢？
T Those go in the green bin, along with coffee grounds and paper towels.|放绿桶里，咖啡渣和厨房纸也放绿桶。
Y What about old furniture?|旧家具呢？
T You need to call the city to book a bulky item pickup. It's free.|你需要打电话给市政府预约大件垃圾收运，免费的。
`);
addScene("lockedout", "home", "被锁在门外", "🚪", `
Y Hi, I'm so sorry to call so late, but I locked myself out of my apartment.|你好，很抱歉这么晚打电话，我把自己锁在公寓外面了。
T Oh no. Which unit are you in?|哎呀。你住几号？
Y Unit three oh five.|三〇五单元。
T Okay, I can come let you in, but I'm about twenty minutes away.|好的，我可以来给你开门，但我大概要二十分钟才能到。
Y That's fine. I'll wait in the lobby.|没关系，我在大厅等。
T Just so you know, there's a fifty-dollar fee for after-hours lockouts.|提醒一下，下班时间开锁要收五十加元。
Y I understand. Thank you so much.|我明白，非常感谢。
`);
addScene("bankaccount", "gov", "开银行账户", "🏦", `
T Hi, welcome. How can I help you today?|你好，欢迎。今天要办什么？
Y I'd like to open a chequing account.|我想开一个支票账户。
T Great. Are you new to Canada?|好的。你是新来加拿大的吗？
Y Yes, I arrived two months ago.|是的，两个月前到的。
T We have a newcomer package with no monthly fees for the first year.|我们有新移民套餐，第一年免月费。
Y That sounds good. What do I need?|听起来不错。需要什么？
T Just your passport and your PR card or study permit.|只需要护照和枫叶卡或学习许可。
Y Can I also get a credit card?|我也能办信用卡吗？
T Yes, we can give you a starter card to help you build your credit history.|可以，我们可以给你一张入门卡，帮你建立信用记录。
`);
addScene("fraudcall", "gov", "银行卡被盗刷", "🚨", `
T Thank you for calling. How can I help?|感谢来电，有什么可以帮您？
Y Hi, I just saw some charges on my credit card that I didn't make.|你好，我刚看到我信用卡上有几笔不是我消费的。
T I'm sorry to hear that. Can you verify your name and date of birth?|很抱歉。请核实一下您的姓名和出生日期。
Y Chen Li, January third, nineteen eighty-two.|陈立，1982年1月3日。
T Thank you. Which charges don't you recognize?|谢谢。哪几笔您不认识？
Y There are three online purchases from yesterday, about four hundred dollars in total.|昨天有三笔网购，一共大约四百加元。
T I've blocked your card, and we'll send you a new one in five to seven business days.|我已冻结您的卡，新卡将在五到七个工作日内寄出。
Y Will I get my money back?|钱能退回来吗？
T Yes, you won't be responsible for fraudulent charges. We'll open an investigation.|能，您不需要为欺诈消费负责。我们会展开调查。
`);
addScene("sin", "gov", "申请社会保险号", "🆔", `
T Next, please. How can I help you?|下一位。有什么可以帮您？
Y Hi, I need to apply for a Social Insurance Number.|你好，我需要申请社会保险号。
T Sure. Can I see your documents?|好的，能看一下你的证件吗？
Y Here's my passport and my confirmation of permanent residence.|这是我的护照和永久居民确认函。
T Thank you. What's your current address in Canada?|谢谢。你目前在加拿大的地址是？
Y It's two fifty Elm Street, Calgary.|卡尔加里榆树街二五〇号。
T Okay, here's your SIN. Keep it private and don't carry the paper in your wallet.|好的，这是你的社会保险号。注意保密，不要把这张纸放在钱包里。
Y Thank you. Who should I give it to?|谢谢。我应该给谁？
T Only your employer, your bank, and the government. Don't give it to anyone else.|只给你的雇主、银行和政府。不要给其他任何人。
`);
addScene("taxhelp", "gov", "免费报税咨询", "🧮", `
Y Hi, I heard you help people file their taxes for free?|你好，听说你们免费帮人报税？
T Yes, we do, for people with a modest income. Is this your first time filing in Canada?|是的，为收入不高的人提供。这是你第一次在加拿大报税吗？
Y Yes, I came here last year.|是的，我去年来的。
T Okay. Do you have your T4 slips from work?|好的。你有工作的T4税单吗？
Y I have one from my job, and I also got some EI payments.|我有一张工作的，我还领过一些失业金。
T Then you'll have a T4E slip too. Bring both, along with your rent receipts.|那你还会有一张T4E税单。两张都带来，还有你的房租收据。
Y Why do you need my rent receipts?|为什么需要房租收据？
T In some provinces, you can get a tax credit for rent.|在一些省份，房租可以获得税收抵免。
Y Great. When can I come in?|太好了。我什么时候可以来？
`);
addScene("citizenship", "gov", "入籍面试", "🍁", `
T Good morning. Please have a seat. Can I see your ID?|早上好，请坐。能看一下你的证件吗？
Y Good morning. Here's my PR card and passport.|早上好。这是我的枫叶卡和护照。
T Thank you. How long have you lived in Canada?|谢谢。你在加拿大住了多久？
Y I've lived here for five years.|我在这里住了五年。
T Have you travelled outside of Canada in the last five years?|过去五年你出过加拿大吗？
Y Yes, I went back to China twice to visit my parents.|出过，我回中国看了父母两次。
T Okay. Congratulations, you passed the test. You'll get an invitation to the ceremony soon.|好的。恭喜，你通过了考试。你很快会收到入籍仪式的邀请。
Y Thank you so much! I'm really excited.|太感谢了！我真的很激动。
`);
addScene("library", "gov", "办借书证", "📚", `
Y Hi, I'd like to get a library card.|你好，我想办一张借书证。
T Sure. Do you live in the city?|好的。你住在本市吗？
Y Yes, I just moved here last month.|是的，我上个月刚搬来。
T Great. I just need a piece of ID with your address on it.|好的。我只需要一张有你地址的证件。
Y Will my driver's licence work?|我的驾照可以吗？
T Perfect. Your card is free, and you can borrow up to fifty items at a time.|可以。借书证是免费的，一次最多可以借五十件。
Y Do you have English classes here?|你们这里有英语课吗？
T Yes, we have free conversation circles every Tuesday and Thursday evening.|有的，每周二和周四晚上有免费的英语角。
`);
addScene("postoffice", "gov", "邮局寄包裹", "📮", `
Y Hi, I'd like to send this package to China.|你好，我想把这个包裹寄到中国。
T Okay, let me weigh it. It's about two kilograms.|好的，我称一下，大约两公斤。
Y How long will it take?|要多久？
T By regular mail, about four to six weeks. Express is about one week.|普通邮件大约四到六周，快递大约一周。
Y How much is express?|快递多少钱？
T It's ninety-five dollars. Regular is forty-two.|九十五加元，普通的四十二。
Y I'll go with regular. It's not urgent.|我选普通的，不急。
T Okay. Please fill out this customs form and list what's inside.|好的。请填写这张海关单，列出里面的物品。
`);
addScene("ei", "gov", "申请失业金", "📝", `
T Service Canada, how can I help you?|加拿大服务局，有什么可以帮您？
Y Hi, I was laid off last week and I'd like to apply for EI.|你好，我上周被裁员了，想申请失业金。
T I'm sorry to hear that. You can apply online. Do you have your record of employment?|很遗憾听到这个消息。你可以在网上申请。你有离职记录吗？
Y My employer said they would send it electronically.|我的雇主说他们会以电子方式发送。
T That's fine. You should apply within four weeks of your last day of work.|可以。你应该在最后工作日后四周内申请。
Y How much will I get?|我能领多少？
T Usually about fifty-five percent of your average weekly earnings, up to a maximum.|通常是你平均周薪的百分之五十五左右，有上限。
Y And how long does it take to get the first payment?|拿到第一笔钱要多久？
T About twenty-eight days after we receive your complete application.|我们收到完整申请后大约二十八天。
`);
addScene("parkingticket", "gov", "对罚单提出异议", "🅿️", `
Y Hi, I got a parking ticket, but I think it's a mistake.|你好，我收到一张停车罚单，但我觉得是搞错了。
T Okay. Can I see the ticket?|好的，能看一下罚单吗？
Y Here it is. I paid for parking until four, but the ticket says three forty-five.|在这儿。我付停车费到四点，但罚单上写的是三点四十五。
T Do you have your parking receipt?|你有停车收据吗？
Y Yes, I have it on my phone.|有，在我手机上。
T Okay. You can request a review online and upload your receipt.|好的。你可以在网上申请复审，上传你的收据。
Y How long does the review take?|复审要多久？
T Usually a few weeks. You don't need to pay the ticket while it's being reviewed.|通常几周。复审期间你不需要缴纳罚款。
`);

// 情景对话：购物餐饮、医疗健康
addScene("grocery", "shop", "超市找东西", "🛒", `
Y Excuse me, could you tell me where the rice is?|打扰一下，请问大米在哪里？
T Sure, it's in aisle seven, next to the pasta.|在七号通道，意大利面旁边。
Y Thanks. Do you also have soy sauce?|谢谢。你们也有酱油吗？
T Yes, that's in the international foods section, aisle nine.|有的，在国际食品区，九号通道。
Y And is the chicken on sale this week?|这周鸡肉打折吗？
T It is. The family packs are two for fifteen dollars.|打折的。家庭装两盒十五加元。
Y Great, I'll grab a couple. Thanks for your help.|太好了，我拿两盒。谢谢帮忙。
T No problem. Have a good one.|不客气，祝你愉快。
`);
addScene("checkout", "shop", "超市结账", "🧾", `
T Hi there, did you find everything you were looking for?|你好，要找的东西都找到了吗？
Y Yes, I did, thanks.|找到了，谢谢。
T Do you have a points card?|你有积分卡吗？
Y No, I don't. How do I get one?|没有。怎么办一张？
T You can sign up on the app. It's free, and you get points on everything.|在应用上注册就行，免费的，买什么都有积分。
Y Okay, I'll do that next time.|好的，我下次办。
T Would you like a bag? They're twenty-five cents each.|要袋子吗？每个两毛五。
Y No thanks, I brought my own.|不用了，我自己带了。
T Your total is fifty-three twenty. Go ahead and tap when you're ready.|一共五十三块二。准备好了就刷卡。
`);
addScene("return", "shop", "退换货", "🔄", `
Y Hi, I'd like to return this jacket, please.|你好，我想退这件夹克。
T Sure. Is there something wrong with it?|好的。有什么问题吗？
Y It's too small, and I don't think it will fit my son.|太小了，我觉得我儿子穿不了。
T Do you have your receipt?|你有收据吗？
Y Yes, here it is. I bought it last week.|有，在这儿。我上周买的。
T Would you like a refund, or would you like to exchange it for another size?|你想退款，还是换一个尺码？
Y Do you have it in a large?|有大号的吗？
T Let me check. Yes, we have one left in black.|我查一下。有，还剩一件黑色的。
Y Perfect, I'll exchange it then.|太好了，那我换吧。
`);
addScene("restaurant", "shop", "餐厅点餐", "🍽️", `
T Hi, welcome in. How many people?|你好，欢迎光临。几位？
Y Just two, please.|两位。
T Right this way. Here are your menus. Can I start you off with something to drink?|这边请，这是菜单。先来点喝的吗？
Y Just water for now, thanks.|先来点水，谢谢。
T Are you ready to order, or do you need a few more minutes?|可以点餐了吗，还是再看看？
Y I think we're ready. I'll have the salmon with a side salad.|我们可以点了。我要三文鱼配沙拉。
T Great choice. And for you?|好选择。您呢？
Y She'll have the chicken burger, but with no onions, please.|她要鸡肉汉堡，但不要洋葱。
T Got it. I'll put that in for you right away.|好的，我马上帮你们下单。
`);
addScene("paybill", "shop", "餐厅结账付小费", "💳", `
Y Excuse me, could we get the bill, please?|打扰一下，可以结账吗？
T Of course. Will that be together or separate?|当然。一起付还是分开付？
Y Together, please.|一起付。
T Here's the machine. You can choose the tip on the screen.|这是刷卡机，你可以在屏幕上选择小费。
Y How much do people usually tip here?|这里一般给多少小费？
T Most people tip between fifteen and twenty percent.|大多数人给百分之十五到二十。
Y Okay. Everything was great, thank you.|好的。一切都很好，谢谢。
T Thanks so much. Have a great night.|非常感谢，祝你们晚上愉快。
`);
addScene("pharmacy", "health", "药房取药", "💊", `
Y Hi, I'm here to pick up a prescription.|你好，我来取处方药。
T Sure. What's your last name and date of birth?|好的。你姓什么，出生日期是？
Y Wang, W-A-N-G. My birthday is June tenth, nineteen seventy-eight.|王，W-A-N-G。生日是1978年6月10日。
T Thank you. It'll be ready in about fifteen minutes.|谢谢。大约十五分钟后好。
Y Okay. Is this medicine covered by my insurance?|好的。这个药我的保险报销吗？
T Let me check. Yes, you'll just pay the dispensing fee.|我查一下。报销的，你只需要付配药费。
Y Do I need to take it with food?|需要随餐吃吗？
T Yes, take one tablet twice a day with meals. It might make you a little sleepy.|是的，每天两次，每次一片，随餐服用。可能会让你有点困。
`);
addScene("walkin", "health", "免预约诊所", "🏥", `
Y Hi, do I need an appointment to see a doctor today?|你好，今天看医生需要预约吗？
T No, this is a walk-in clinic. Can I see your health card?|不用，这是免预约诊所。能看一下你的医保卡吗？
Y Here you go.|给你。
T What brings you in today?|你今天来是因为什么？
Y I've had a bad earache since yesterday.|我从昨天开始耳朵很痛。
T Okay. The wait is about an hour and a half. Please have a seat.|好的。大概要等一个半小时，请坐。
Y Can I leave and come back later?|我可以先走，晚点再回来吗？
T Sure, just leave your phone number and we'll text you when it's almost your turn.|可以，留下你的电话，快到你的时候我们发短信给你。
`);
addScene("symptoms", "health", "向医生描述症状", "🤒", `
T So, what seems to be the problem?|那么，哪里不舒服？
Y I've had a fever and a really sore throat for three days.|我发烧、喉咙很痛三天了。
T Any coughing or trouble breathing?|有咳嗽或呼吸困难吗？
Y I have a little cough, but I can breathe fine.|有一点咳嗽，但呼吸没问题。
T Let me take a look. Open your mouth and say "ah."|我看看。张开嘴说"啊"。
Y Is it serious?|严重吗？
T It looks like strep throat. I'll do a quick test to be sure.|看起来像链球菌性咽炎。我做个快速检测确认一下。
Y Will I need antibiotics?|我需要吃抗生素吗？
T If the test is positive, yes. You should feel better in a couple of days.|如果检测阳性，需要。过几天就会好转。
`);
addScene("dentist", "health", "看牙医", "🦷", `
T Hi, how have your teeth been feeling?|你好，你的牙齿最近感觉怎么样？
Y One of my back teeth hurts when I drink something cold.|喝冷的东西时，后面一颗牙会痛。
T Let's take a look. It might be a small cavity.|我们看看，可能是个小蛀牙。
Y Will I need a filling?|我需要补牙吗？
T Probably. We can do it today if you have time.|可能需要。如果你有时间，今天就可以做。
Y How much will it cost?|要多少钱？
T It depends on your insurance. Our front desk can check your coverage for you.|这取决于你的保险。前台可以帮你查一下保险范围。
Y Okay, let's do it today.|好的，今天就做吧。
`);
addScene("eyes", "health", "配眼镜", "👓", `
Y Hi, I'd like to get my eyes checked. I think I need new glasses.|你好，我想检查一下眼睛，我觉得需要配新眼镜了。
T Sure. When was your last eye exam?|好的。你上次做眼科检查是什么时候？
Y About three years ago, back in China.|大概三年前，在中国。
T Okay. We have an opening tomorrow at four. Does that work?|好的。明天四点有空位，可以吗？
Y Yes. How much is the exam?|可以。检查多少钱？
T It's one hundred and ten dollars. Some work benefit plans cover it.|一百一十加元。有些公司福利计划可以报销。
Y I'll check with my work. Thank you.|我问问我单位。谢谢。
`);
addScene("mental", "health", "和医生谈压力", "🧠", `
T How have you been feeling lately?|你最近感觉怎么样？
Y Honestly, not great. I've been really stressed and I can't sleep.|说实话，不太好。我压力很大，睡不着觉。
T I'm sorry to hear that. How long has this been going on?|很抱歉听到这些。这种情况持续多久了？
Y A few months, since I lost my job.|几个月了，从我失业开始。
T That's a big change. Have you talked to anyone about it?|那是很大的变化。你和别人聊过吗？
Y Not really. I don't want to worry my family.|没怎么聊过。我不想让家人担心。
T There are free counselling services I can refer you to. Talking can really help.|我可以把你转介到免费的心理咨询服务。说出来真的会有帮助。
Y Thank you. I think I'd like to try that.|谢谢，我想试试。
`);
addScene("emergency", "health", "急诊分诊", "🚑", `
T Hi, what brings you to emergency today?|你好，你今天来急诊是因为什么？
Y My husband fell on the ice and hurt his wrist. I think it might be broken.|我丈夫在冰上摔倒伤了手腕，我觉得可能骨折了。
T On a scale of one to ten, how bad is the pain?|从一到十分，疼痛有多严重？
Y He says it's about an eight.|他说大概八分。
T Can he move his fingers?|他能动手指吗？
Y A little, but it's very swollen.|能动一点，但肿得很厉害。
T We'll get him an X-ray. Please have a seat, and let us know if the pain gets worse.|我们会给他拍X光。请坐，如果疼痛加剧请告诉我们。
`);
addScene("insurance", "health", "办理医保卡", "🪪", `
Y Hi, I just arrived in the province and I'd like to apply for a health card.|你好，我刚到这个省，想申请医保卡。
T Welcome. Do you have your PR card or work permit with you?|欢迎。你带了枫叶卡或工作许可吗？
Y Yes, I have my PR card and my passport.|带了，我有枫叶卡和护照。
T Great. We'll also need proof that you live here, like a lease or a bank statement.|好的。我们还需要你在这里居住的证明，比如租约或银行对账单。
Y I have my lease. Is that okay?|我有租约，可以吗？
T Perfect. Your card will arrive by mail in about four weeks.|可以。你的卡大约四周后会邮寄到。
Y Can I see a doctor before then?|在那之前我能看医生吗？
T Yes, we'll give you a temporary paper copy today.|可以，我们今天会给你一份临时纸质凭证。
`);
addScene("bakery", "shop", "面包店", "🥐", `
T Good morning! What can I get for you?|早上好！要点什么？
Y Good morning. What kind of bread do you have today?|早上好。你们今天有什么面包？
T We have sourdough, whole wheat, and a fresh rye that just came out of the oven.|有酸面包、全麦面包，还有刚出炉的黑麦面包。
Y I'll take a loaf of whole wheat, sliced, please.|我要一条全麦的，切片。
T Anything else? The cinnamon buns are really good today.|还要别的吗？今天的肉桂卷特别好。
Y Sure, I'll have two of those as well.|好啊，我也要两个。
T That comes to eleven fifty.|一共十一块五。
`);
addScene("phoneorder", "shop", "电话订外卖", "📞", `
T Hi, thanks for calling Golden Dragon. Is this for pickup or delivery?|你好，感谢致电金龙餐厅。自取还是外送？
Y Delivery, please.|外送。
T What's your address?|你的地址是？
Y It's one twenty-five Oak Street, apartment four.|橡树街一二五号，四号公寓。
T And what would you like to order?|你想点什么？
Y One beef with broccoli, one sweet and sour chicken, and two orders of fried rice.|一份西兰花牛肉，一份糖醋鸡，两份炒饭。
T Okay, that's forty-two dollars before tax. It'll be about forty-five minutes.|好的，税前四十二加元，大约四十五分钟送到。
Y Great. Can I pay by card at the door?|好的。可以到门口刷卡付吗？
T Yes, the driver will bring a machine.|可以，司机会带刷卡机。
`);
addScene("clothing", "shop", "买冬装", "🧥", `
T Hi, are you looking for anything in particular?|你好，有什么特别想找的吗？
Y Yes, I need a warm winter coat. It's my first winter here.|是的，我需要一件暖和的冬季外套。这是我在这里的第一个冬天。
T Welcome to Canada! How cold does it need to handle?|欢迎来加拿大！需要能抗多冷？
Y I'm not sure. I take the bus, so I wait outside a lot.|我不确定。我坐公交，所以经常在外面等车。
T Then I'd recommend this parka. It's rated to minus thirty.|那我推荐这件派克大衣，能抗零下三十度。
Y Can I try it on?|我能试穿一下吗？
T Of course. The fitting room is right over there.|当然，试衣间就在那边。
Y It fits well, and it's really warm. I'll take it.|很合身，也很暖和。我买了。
`);
addScene("farmers", "shop", "农贸市场", "🍓", `
Y Hi, how much are the strawberries?|你好，草莓怎么卖？
T Six dollars a basket, or two for ten.|一篮六加元，两篮十加元。
Y Are they grown around here?|是本地种的吗？
T Yep, picked fresh this morning on our farm, about twenty minutes north of the city.|是的，今早在我们农场刚摘的，在城北二十分钟车程的地方。
Y They look delicious. I'll take two baskets.|看起来很好吃。我要两篮。
T Great. Would you like to try some of our honey too?|好的。要不要也尝尝我们的蜂蜜？
Y Sure, why not.|好啊，为什么不呢。
`);

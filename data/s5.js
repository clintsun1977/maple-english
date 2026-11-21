// 情景对话：求助与电话、休闲活动
addScene("call911", "help", "拨打 911", "🆘", `
T 911, what's your emergency?|这里是911，有什么紧急情况？
Y There's a car accident on the highway. Someone is hurt.|高速公路上发生了车祸，有人受伤。
T Where exactly are you?|你的具体位置在哪里？
Y On Highway 401, heading east, just past the Yonge Street exit.|在401高速公路，往东方向，刚过 Yonge 街出口。
T Is the injured person conscious and breathing?|伤者有意识、有呼吸吗？
Y Yes, he's awake, but his leg is bleeding.|有，他醒着，但腿在流血。
T Help is on the way. Can you press something clean on the wound?|救援正在路上。你能用干净的东西按住伤口吗？
Y Okay, I'm using my scarf.|好的，我用我的围巾。
T Good. Stay on the line with me until the paramedics arrive.|很好。保持通话，直到急救人员到达。
`);
addScene("lostwallet", "help", "报失钱包", "👛", `
Y Hi, I think I left my wallet on the bus this morning.|你好，我想我今天早上把钱包落在公交车上了。
T Okay. Which bus route were you on, and around what time?|好的。你坐的哪条线路，大概几点？
Y Route fifty-two, around eight fifteen.|五十二路，大约八点十五分。
T Can you describe the wallet?|你能描述一下钱包吗？
Y It's black leather, and it has my driver's licence and a bank card inside.|黑色皮质的，里面有我的驾照和一张银行卡。
T Let me check the lost and found. Yes, we have one that matches. What's your name?|我查一下失物招领。有，有一个对得上。你叫什么名字？
Y Liu Yang.|刘洋。
T That's it. You can pick it up at the main station. Bring another piece of ID.|就是它。你可以到总站去取，带上另一个身份证件。
`);
addScene("scamcall", "help", "识破诈骗电话", "☎️", `
T Hello, this is the Canada Revenue Agency. You owe back taxes, and there is a warrant for your arrest.|你好，这里是加拿大税务局。你欠税，有一张针对你的逮捕令。
Y What? I don't owe any taxes.|什么？我没有欠税。
T If you don't pay today with gift cards, the police will come to your house.|如果你今天不用礼品卡付款，警察会到你家。
Y The CRA doesn't ask for gift cards. This is a scam.|税务局不会要礼品卡，这是诈骗。
T Ma'am, this is very serious. Don't hang up.|女士，这非常严重。别挂电话。
Y I'm hanging up and calling the CRA myself.|我要挂了，我会自己打电话给税务局。
`);
addScene("serviceCall", "help", "打客服电话", "🎧", `
T Thank you for calling. My name is Jessica. Can I have your account number?|感谢来电，我是杰西卡。能告诉我你的账号吗？
Y Sure. It's four five seven, two two eight, nine one.|好的。四五七、二二八、九一。
T Thank you. How can I help you today?|谢谢。今天有什么可以帮你？
Y My internet has been very slow for the past three days.|过去三天我的网速特别慢。
T I'm sorry about that. Have you tried restarting your modem?|很抱歉。你试过重启调制解调器吗？
Y Yes, I've restarted it twice.|试过，我重启了两次。
T Okay, I see there's an outage in your area. It should be fixed by tonight.|好的，我看到你所在区域有故障，今晚应该能修好。
Y Will I get a credit on my bill?|我的账单会有减免吗？
T Yes, I'll add a credit of ten dollars to your next bill.|会的，我会在你下期账单上减免十加元。
`);
addScene("repeatplease", "help", "电话里听不清", "📱", `
T Hi, this is Dr. Patel's office calling to confirm your appointment for Thursday.|你好，这里是帕特尔医生诊所，打电话确认你周四的预约。
Y Sorry, the connection is bad. Could you say that again?|抱歉，信号不好。能再说一遍吗？
T Of course. I'm calling to confirm your appointment on Thursday at ten fifteen.|当然。我打电话确认你周四十点十五分的预约。
Y Did you say ten fifteen or ten fifty?|你说的是十点十五还是十点五十？
T Ten fifteen. One, five.|十点十五，一、五。
Y Got it, thank you. I'll be there.|明白了，谢谢，我会到的。
T Great. Please bring your health card.|好的，请带上你的医保卡。
`);
addScene("askdirections", "help", "问路", "🧭", `
Y Excuse me, sorry to bother you. Do you know where the community centre is?|打扰一下，不好意思。你知道社区中心在哪里吗？
T Sure. Go straight down this street for two blocks.|知道。沿这条街直走两个街区。
Y Two blocks, okay.|两个街区，好的。
T Then turn right at the lights. It's the big brick building on your left.|然后在红绿灯右转，左手边那栋砖砌大楼就是。
Y Is it far to walk?|走路远吗？
T No, about five minutes.|不远，大约五分钟。
Y Thank you so much!|太感谢了！
T You're welcome. Have a good day.|不客气，祝你愉快。
`);
addScene("poweroutage", "help", "停电报修", "🔌", `
T Thank you for calling Hydro. How can I help?|感谢致电电力公司，有什么可以帮您？
Y Hi, the power is out on our whole street.|你好，我们整条街都停电了。
T I'm sorry. Can I get your address?|很抱歉。能告诉我你的地址吗？
Y It's forty-five Birch Road.|桦树路四十五号。
T Thank you. We're aware of the outage in your area. A tree fell on the power lines.|谢谢。我们知道你所在区域停电了，有一棵树倒在了电线上。
Y When do you think it will be back on?|你觉得什么时候能来电？
T Our crews are working on it now. We expect power to be restored by about six p.m.|我们的抢修人员正在处理，预计下午六点左右恢复供电。
Y Okay. Is it safe to use a generator?|好的。用发电机安全吗？
T Yes, but only outside, never in your garage or house.|安全，但只能在室外用，绝不能在车库或房子里用。
`);
addScene("carstuck", "help", "车陷在雪里", "🚙", `
Y Excuse me, could you help me? My car is stuck in the snow.|打扰一下，你能帮帮我吗？我的车陷在雪里了。
T Sure. Let's see. Your wheels are just spinning.|当然。我看看。你的轮子在空转。
Y I don't know what to do. This is my first winter driving.|我不知道该怎么办，这是我第一个冬天开车。
T Don't press the gas too hard. Rock the car back and forth gently.|别猛踩油门，轻轻地前后晃动车子。
Y Okay, I'll try that.|好的，我试试。
T I'll push from the back. Ready? One, two, three!|我从后面推。准备好了吗？一、二、三！
Y It worked! Thank you so much.|成功了！太感谢了。
T No problem. Keep a shovel and some sand in your trunk for next time.|不客气。下次在后备箱里放把铲子和一些沙子。
`);
addScene("appointmentchange", "help", "打电话改预约", "📅", `
T Good afternoon, Smile Dental. How can I help you?|下午好，微笑牙科。有什么可以帮您？
Y Hi, I have an appointment next Monday, but I need to change it.|你好，我下周一有个预约，但需要改一下。
T No problem. What's your name?|没问题。你叫什么名字？
Y Zhou Min. The appointment is at two o'clock.|周敏，预约是两点。
T I see it. When would you like to come in instead?|找到了。你想改到什么时候？
Y Do you have anything later in the week, maybe Thursday?|这周晚些时候有空吗，比如周四？
T Thursday at nine thirty or three forty-five.|周四九点半或三点四十五。
Y Three forty-five, please.|三点四十五吧。
T Done. We'll send you a reminder the day before.|好了。我们会在前一天给你发提醒。
`);
addScene("neighbourhelp", "help", "向邻居求助", "🙋", `
Y Hi, sorry to bother you. Do you have a minute?|你好，抱歉打扰。你有空吗？
T Sure, what's up?|当然，怎么了？
Y I got this letter from the city, and I'm not sure what it means.|我收到了一封市政府的信，不太明白是什么意思。
T Let me take a look. Oh, they're going to replace the water pipes on our street.|我看看。哦，他们要更换我们街上的水管。
Y Will we lose water?|我们会停水吗？
T Just for one day, next Wednesday from nine to five.|就一天，下周三九点到五点。
Y Okay, I'll fill some bottles the night before. Thanks so much.|好的，我前一天晚上接些水。非常感谢。
T Anytime. Just knock if you have any questions.|随时。有问题就来敲门。
`);
addScene("hiking", "leisure", "徒步问路线", "🥾", `
Y Hi, we're thinking about doing a hike today. Which trail do you recommend?|你好，我们今天想去徒步。你推荐哪条路线？
T How experienced are you, and how much time do you have?|你们经验怎么样，有多少时间？
Y We're beginners, and we have about three hours.|我们是新手，大概有三个小时。
T Then I'd suggest the Lakeside Trail. It's about six kilometres and pretty flat.|那我建议走湖畔步道，大约六公里，比较平坦。
Y Are there any bears around here?|这附近有熊吗？
T There have been a few sightings. Make noise as you walk and carry bear spray.|有人看到过几次。走路时弄出点声音，带上防熊喷雾。
Y Where can we buy bear spray?|在哪里能买到防熊喷雾？
T We sell it right here at the visitor centre.|我们游客中心就有卖。
`);
addScene("camping", "leisure", "预订露营地", "⛺", `
T Provincial Parks reservations, how can I help?|省立公园预订处，有什么可以帮您？
Y Hi, I'd like to book a campsite for the long weekend in August.|你好，我想预订八月长周末的露营位。
T Which park are you interested in?|你想去哪个公园？
Y Algonquin, if possible.|如果可以的话，阿岗昆。
T Let me check. We have a few sites left, but none near the water.|我查一下。还剩几个位置，但都不靠水。
Y That's okay. Do the sites have electricity?|没关系。营地有电吗？
T Some do. Electric sites are twelve dollars more per night.|有些有，有电的营地每晚贵十二加元。
Y We don't need electricity. We'll take a regular site for three nights.|我们不需要电，要一个普通营地，三晚。
`);
addScene("skirental", "leisure", "租滑雪装备", "⛷️", `
Y Hi, I'd like to rent skis for the day. It's my first time.|你好，我想租一天滑雪板。这是我第一次滑。
T Welcome! Have you thought about taking a lesson?|欢迎！你有没有考虑上一节课？
Y Yes, I think I should. How much is a lesson?|有，我觉得应该上。一节课多少钱？
T A two-hour group lesson is sixty dollars, and it includes the rental.|两小时小组课六十加元，包括租装备。
Y That sounds perfect. What size boots do I need?|太好了。我需要多大号的靴子？
T What's your shoe size?|你穿几号鞋？
Y I'm usually a size nine.|我一般穿九号。
T Okay, try these on. They should feel snug but not painful.|好的，试试这双。应该感觉贴合但不疼。
`);
addScene("gym", "leisure", "办健身卡", "🏋️", `
Y Hi, I'm interested in joining the gym. What kind of memberships do you have?|你好，我想办健身卡。你们有哪些会员类型？
T We have monthly and yearly memberships. Monthly is forty-five dollars.|我们有月卡和年卡。月卡四十五加元。
Y Is there a contract?|有合约吗？
T Not for monthly. You can cancel anytime with thirty days' notice.|月卡没有。提前三十天通知就可以随时取消。
Y Do you have classes, like yoga?|你们有课程吗，比如瑜伽？
T Yes, classes are included. There's a schedule on our website.|有，课程是包含在内的，课表在我们网站上。
Y Can I try it out first?|我可以先试一下吗？
T Sure, here's a free one-week pass.|当然，这是一张一周免费体验卡。
`);
addScene("movies", "leisure", "看电影买票", "🎬", `
Y Hi, two tickets for the seven thirty showing, please.|你好，两张七点半场的票。
T Sure. Would you like regular seats or recliners?|好的。普通座还是躺椅座？
Y What's the difference in price?|价格差多少？
T Recliners are four dollars more per ticket.|躺椅座每张贵四加元。
Y We'll go with the recliners.|我们要躺椅座。
T Great. Where would you like to sit?|好的。你们想坐哪里？
Y Somewhere in the middle, please.|中间的位置。
T Here you go. Theatre six, on your right. Enjoy the movie!|给你。六号厅，在你右手边。观影愉快！
`);
addScene("hockeygame", "leisure", "看冰球比赛", "🏟️", `
T Hey, these are great seats! You can see everything from here.|嘿，这座位真好！从这里什么都能看到。
Y I know. I've never been to a live game before.|是啊。我以前从没看过现场比赛。
T You're going to love it. The atmosphere is amazing.|你会爱上的，气氛太棒了。
Y Why is everyone standing up and singing?|为什么大家都站起来唱歌？
T That's the national anthem. The game is about to start.|那是国歌，比赛要开始了。
Y How long is a game?|一场比赛多长时间？
T Three periods of twenty minutes, but with breaks it's about two and a half hours.|三节，每节二十分钟，但加上休息大约两个半小时。
Y Great. Let's get some snacks before it starts.|好的。开始前我们去买点零食吧。
`);
addScene("museum", "leisure", "参观博物馆", "🏛️", `
Y Hi, how much is admission?|你好，门票多少钱？
T It's twenty-five dollars for adults, and kids under twelve are free.|成人二十五加元，十二岁以下儿童免费。
Y Two adults and two kids, please.|两个大人两个孩子。
T That's fifty dollars. Here's a map. The dinosaur exhibit is on the second floor.|一共五十加元。这是地图，恐龙展在二楼。
Y Great, my kids will love that. Is there a coat check?|太好了，我孩子会很喜欢的。有衣帽寄存处吗？
T Yes, it's just past the gift shop on the left.|有，就在礼品店过去的左边。
Y Is there a place to eat inside?|里面有吃饭的地方吗？
T There's a café on the main floor, open until four.|一楼有个咖啡馆，营业到四点。
`);
addScene("volunteer", "leisure", "报名做志愿者", "🙌", `
Y Hi, I'd like to volunteer here. Do you need any help?|你好，我想在这里做志愿者。你们需要帮忙吗？
T We'd love your help! Have you volunteered at a food bank before?|非常欢迎！你以前在食物银行做过志愿者吗？
Y No, this would be my first time.|没有，这是第一次。
T That's fine. We have a short training session on Saturday mornings.|没关系，我们周六上午有个简短的培训。
Y What kind of work would I be doing?|我会做什么样的工作？
T Mostly sorting donations and packing food boxes for families.|主要是整理捐赠品，为家庭装食品箱。
Y Sounds good. How many hours a week do you need?|听起来不错。你们每周需要几个小时？
T Even three hours a week makes a big difference.|即使每周三个小时也很有帮助。
Y Great, sign me up. It will help me practise my English too.|太好了，给我报名吧。这也能帮我练英语。
`);
addScene("bookclub", "leisure", "参加读书会", "📖", `
T Welcome to the book club! Is this your first time?|欢迎来到读书会！你是第一次来吗？
Y Yes, I saw the poster at the library.|是的，我在图书馆看到了海报。
T Great. We're reading a novel by a Canadian author this month. Have you started it?|太好了。这个月我们读一位加拿大作家的小说，你开始读了吗？
Y I'm about halfway through. It's a little hard for me, but I'm enjoying it.|我读了一半左右，对我来说有点难，但我很喜欢。
T That's okay, lots of people here are learning English.|没关系，这里很多人都在学英语。
Y What did you think of the main character?|你觉得主人公怎么样？
T I found her really interesting. Let's talk about it when everyone gets here.|我觉得她很有意思。等大家都到了我们一起聊。
`);
addScene("roadtrip", "leisure", "计划自驾游", "🗺️", `
T So where should we go for the long weekend?|长周末我们去哪儿？
Y How about a road trip to Quebec City? I've always wanted to see it.|自驾去魁北克城怎么样？我一直想去看看。
T Good idea. It's about eight hours from here.|好主意，从这里过去大约八小时。
Y We could stop in Montreal on the way and stay one night.|我们可以在途中蒙特利尔停一下，住一晚。
T I like that. Should we book a hotel or an Airbnb?|不错。我们订酒店还是民宿？
Y Let's look at both and compare prices tonight.|今晚我们两个都看看，比比价格。
T Don't forget, we should brush up on our French a little.|别忘了，我们得稍微复习一下法语。
Y Bonjour and merci. That's all I know.|"你好"和"谢谢"，我就会这两个。
`);
addScene("haircut", "shop", "理发", "💇", `
T Hi, come on in. What are we doing today?|你好，请进。今天想怎么剪？
Y Just a trim, please. Not too short.|修一下就好，别太短。
T Sure. About an inch off the top?|好的。顶部剪掉一英寸左右？
Y Yes, and a little shorter on the sides.|是的，两边再短一点。
T Do you want me to use the clippers on the sides, or scissors?|两边用推子还是剪刀？
Y Clippers are fine. Number three, please.|推子就行，三号。
T No problem. How does that look?|没问题。你看怎么样？
Y Perfect, thank you. How much is it?|很好，谢谢。多少钱？
T It's twenty-eight dollars.|二十八加元。
`);

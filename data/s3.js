// 情景对话：交通出行、工作职场
addScene("busride", "transport", "坐公交问路", "🚌", `
Y Excuse me, does this bus go to the general hospital?|打扰一下，这辆车到总医院吗？
T Yes, it does. It's about eight stops from here.|到的，离这里大约八站。
Y How much is the fare?|车费多少？
T Three thirty. You can tap your card or pay with exact change.|三块三。可以刷卡，或者付正好的零钱。
Y Could you tell me when we get there?|到了能告诉我一声吗？
T Sure, I'll call it out. It's the stop right after the shopping centre.|好的，我会报站。就在购物中心后面那一站。
Y Thank you so much.|非常感谢。
`);
addScene("taxi", "transport", "坐出租车", "🚕", `
T Hi, where to?|你好，去哪儿？
Y To the airport, please. Terminal one.|去机场，一号航站楼。
T Sure thing. What time is your flight?|好的。你的航班几点？
Y It's at eleven thirty. Will we make it?|十一点半。来得及吗？
T No problem. Traffic is light this morning. It should take about thirty minutes.|没问题，今早交通不堵，大约三十分钟。
Y Great. Can I pay by credit card?|太好了。可以刷信用卡吗？
T Yes, of course. The machine is right there in front of you.|当然可以，刷卡机就在你前面。
Y Thanks. Keep the change, have a good day.|谢谢。不用找了，祝你愉快。
`);
addScene("gasstation", "transport", "加油站", "⛽", `
Y Hi, I'm on pump number four. I'd like to pay for gas.|你好，我在四号油泵，我要付油钱。
T Sure, that's sixty-two dollars and fifteen cents.|好的，六十二块一毛五。
Y Can I also get a car wash?|我还能洗个车吗？
T Yes. The basic wash is ten dollars, and the deluxe is fifteen.|可以。基础洗车十加元，豪华洗车十五。
Y I'll take the basic one.|我要基础的。
T Here's your code. Just enter it at the car wash.|这是你的密码，在洗车机那里输入就行。
Y Thanks. Do you sell windshield washer fluid?|谢谢。你们卖玻璃水吗？
T Yes, it's right by the door. Make sure you get the winter kind.|卖，就在门边。一定要买冬季用的。
`);
addScene("mechanic", "transport", "修车", "🔧", `
T Hi, what can we do for you today?|你好，今天需要什么服务？
Y My car is making a strange noise when I brake.|我刹车的时候车子有怪声。
T It's probably the brake pads. When were they last changed?|可能是刹车片。上次什么时候换的？
Y I'm not sure. I bought the car used last year.|我不确定，我去年买的二手车。
T Okay, we'll take a look. Can you leave it with us for a couple of hours?|好的，我们看看。你能把车留在这里几个小时吗？
Y Sure. Can you give me an estimate first?|可以。能先给我个估价吗？
T Of course. We'll call you before we do any work.|当然，我们动工之前会给你打电话。
Y And while it's here, could you also put on my winter tires?|车在这儿的时候，能顺便帮我换上雪地胎吗？
T No problem. That's an extra sixty dollars.|没问题，另加六十加元。
`);
addScene("pulledover", "transport", "被警察拦下", "🚓", `
T Good evening. Do you know why I pulled you over?|晚上好。你知道我为什么拦你吗？
Y No, I'm sorry, officer. Was I going too fast?|不知道，抱歉，警官。我开太快了吗？
T You were going seventy in a fifty zone. Can I see your licence, registration and insurance?|你在限速五十的地方开到了七十。能出示驾照、车辆登记和保险吗？
Y Yes, here they are. The registration is in the glove box.|好的，在这儿。车辆登记在手套箱里。
T Thank you. Please wait in your vehicle.|谢谢。请在车里等着。
T I'm giving you a ticket for speeding. You can pay it online or dispute it in court.|我要给你开一张超速罚单。你可以在网上缴纳，或者去法庭申诉。
Y I understand. I'll be more careful.|我明白了，我会更小心的。
T Thanks. Drive safe, the roads are slippery tonight.|谢谢。开车注意安全，今晚路很滑。
`);
addScene("carrental", "transport", "租车", "🚗", `
T Hi, do you have a reservation?|你好，你有预订吗？
Y Yes, under the name Zhang.|有，用张的名字订的。
T Here it is. A compact car for three days. Can I see your driver's licence and a credit card?|找到了。紧凑型车，三天。能看一下你的驾照和信用卡吗？
Y Here you go.|给你。
T Would you like to add insurance? It's twenty-five dollars a day.|要加保险吗？每天二十五加元。
Y My credit card covers rental cars, so I'll skip it.|我的信用卡包含租车保险，所以不用了。
T Okay. Please return it with a full tank of gas.|好的。还车时请加满油。
Y What happens if I return it late?|如果晚还会怎样？
T There's a one-hour grace period. After that, we charge an extra day.|有一小时宽限期，超过的话我们收一天的费用。
`);
addScene("airportcheckin", "transport", "机场值机", "✈️", `
T Good morning. Where are you flying today?|早上好，今天飞哪里？
Y To Vancouver.|温哥华。
T Can I see your passport or photo ID?|能看一下护照或带照片的证件吗？
Y Here you go.|给你。
T Are you checking any bags today?|今天要托运行李吗？
Y Just this one suitcase.|就这一个行李箱。
T Please put it on the scale. Did you pack it yourself?|请放到秤上。是你自己打包的吗？
Y Yes, I did.|是的。
T Here's your boarding pass. You're at gate twenty-two, and boarding starts at nine fifteen.|这是你的登机牌。二十二号登机口，九点十五分开始登机。
`);
addScene("delayedflight", "transport", "航班延误", "⏰", `
Y Excuse me, my flight to Montreal was just cancelled. What should I do?|打扰一下，我去蒙特利尔的航班刚取消了，我该怎么办？
T I'm sorry about that. Let me see what I can do. Can I see your boarding pass?|很抱歉。我看看能做什么。能看一下你的登机牌吗？
Y Here it is.|在这儿。
T The next available flight is tomorrow morning at seven.|下一个可用的航班是明早七点。
Y Is there anything tonight?|今晚没有吗？
T Unfortunately, everything tonight is full. We can give you a hotel voucher and a meal voucher.|很遗憾，今晚的都满了。我们可以给你酒店券和餐券。
Y Okay. Can I get compensation for the cancellation?|好吧。航班取消我能得到赔偿吗？
T Yes, you can submit a claim on our website within one year.|可以，你可以在一年内到我们网站上提交索赔。
`);
addScene("border", "transport", "过美加边境", "🛂", `
T Good afternoon. Passports, please. Where are you headed?|下午好，请出示护照。去哪里？
Y We're going to Seattle for the weekend.|我们周末去西雅图。
T What's the purpose of your trip?|旅行目的是什么？
Y Just shopping and visiting a friend.|就是购物和看望一位朋友。
T How long will you be staying?|你们待多久？
Y Two nights. We're coming back on Sunday.|两晚，周日回来。
T Are you bringing any fruit, meat, or more than ten thousand dollars in cash?|你们带了水果、肉类或超过一万美元的现金吗？
Y No, nothing like that.|没有，都没有。
T Okay, enjoy your trip.|好的，旅途愉快。
`);
addScene("jobinterview", "work", "工作面试", "🤝", `
T Thanks for coming in today. Can you tell me a little about yourself?|谢谢你今天来。能介绍一下你自己吗？
Y Sure. I have ten years of experience in accounting, and I moved to Canada two years ago.|当然。我有十年会计经验，两年前搬到加拿大。
T What made you interested in this position?|你为什么对这个职位感兴趣？
Y I like that your company works with small businesses, and I enjoy helping clients directly.|我喜欢贵公司与小企业合作，我也喜欢直接帮助客户。
T What would you say is your biggest strength?|你认为你最大的优点是什么？
Y I'm very detail-oriented, and I always meet my deadlines.|我非常注重细节，而且总是按时完成任务。
T And what about a weakness?|那缺点呢？
Y My English is still improving, so I'm taking evening classes to work on it.|我的英语还在提高中，所以我在上夜校学习。
T That's great. Do you have any questions for us?|很好。你有什么问题要问我们吗？
`);
addScene("firstday", "work", "上班第一天", "👋", `
T Hi, you must be Wei. Welcome to the team!|你好，你一定是伟吧。欢迎加入团队！
Y Thank you. I'm happy to be here.|谢谢，很高兴来到这里。
T Let me show you around. This is your desk, and the kitchen is just down the hall.|我带你转转。这是你的桌子，厨房就在走廊那头。
Y Great. What time do people usually take lunch?|好的。大家一般几点吃午饭？
T Most people go around noon. Some of us go out together on Fridays.|大多数人中午左右去。周五我们有些人会一起出去吃。
Y That sounds fun. Who should I ask if I have questions?|听起来不错。有问题我应该问谁？
T You can always ask me, or your manager, Sarah. Don't be shy.|随时可以问我，或者你的经理莎拉。别不好意思。
Y Thanks, I really appreciate it.|谢谢，真的很感激。
`);
addScene("sickcall", "work", "打电话请病假", "🤧", `
T Hello, this is Mike.|你好，我是迈克。
Y Hi Mike, it's Lin. I'm sorry, but I'm not feeling well today. I don't think I can come in.|嗨，迈克，我是琳。抱歉，我今天不舒服，恐怕来不了了。
T Oh no, what's wrong?|哎呀，怎么了？
Y I have a fever and a bad cough.|我发烧，咳嗽得厉害。
T Okay, don't worry about it. Just rest and feel better.|好的，别担心。好好休息，早日康复。
Y Thanks. I'll let you know about tomorrow.|谢谢。明天能不能来我再告诉你。
T Sounds good. If you're off for more than three days, we'll need a doctor's note.|好的。如果请假超过三天，我们需要医生证明。
Y Understood. Thanks for understanding.|明白了，谢谢理解。
`);
addScene("askraise", "work", "申请加薪", "💰", `
Y Hi, do you have a few minutes to talk?|你好，你有几分钟可以聊聊吗？
T Sure, come on in. What's on your mind?|当然，进来吧。有什么事？
Y I've been here for over a year now, and I'd like to talk about my salary.|我来这里一年多了，想谈谈我的薪水。
T Okay, I'm listening.|好的，你说。
Y I've taken on more responsibilities, like training new staff and handling the bigger clients.|我承担了更多责任，比如培训新员工和处理大客户。
T That's true, you've done a great job.|没错，你做得很好。
Y I was hoping we could discuss a raise to match my new role.|我希望我们能讨论一下加薪，以匹配我的新角色。
T That's fair. Let me talk to HR, and we'll set up a time to discuss it next week.|很合理。我和人事部谈谈，下周我们约个时间讨论。
`);
addScene("meeting", "work", "开会发言", "📊", `
T Okay, let's get started. Wei, can you give us an update on the project?|好，我们开始吧。伟，你能更新一下项目进展吗？
Y Sure. We finished the first phase last week, and we're on track for the deadline.|好的。我们上周完成了第一阶段，按计划能赶上截止日期。
T Great. Any problems we should know about?|很好。有什么问题需要我们知道吗？
Y One supplier is late with their delivery, so we might need an extra week for phase two.|有一家供应商交货晚了，所以第二阶段可能需要多一周。
T Can we find another supplier?|我们能找别的供应商吗？
Y I'm looking into it. I'll have an answer by Friday.|我在调查，周五前给答复。
T Sounds good. Thanks, Wei.|好的，谢谢你，伟。
`);
addScene("coverShift", "work", "请同事换班", "🔁", `
Y Hey, can I ask you a favour?|嘿，能请你帮个忙吗？
T Sure, what's up?|当然，什么事？
Y My son has a doctor's appointment on Thursday afternoon. Could you switch shifts with me?|我儿子周四下午有医生预约。你能和我换个班吗？
T Hmm, which shift do you have?|嗯，你是哪个班？
Y I'm working twelve to eight on Thursday. I could take your Saturday morning shift.|我周四十二点到八点。我可以替你周六上午的班。
T Actually, that works out great for me. Let's do it.|其实这对我来说正好，就这么定吧。
Y Thanks so much! I'll let the manager know.|太感谢了！我去告诉经理。
`);
addScene("mistake", "work", "工作出错道歉", "😓", `
Y I'm really sorry, I made a mistake on the order for the client.|真的很抱歉，我把客户的订单弄错了。
T Okay, what happened?|好的，怎么回事？
Y I sent fifty boxes instead of fifteen. I misheard the number on the phone.|我发了五十箱而不是十五箱，我在电话里听错了数字。
T Ah, that happens. Fifteen and fifty sound very similar.|啊，这种事常有，fifteen 和 fifty 听起来很像。
Y I've already called the client and arranged to pick up the extra boxes.|我已经打电话给客户，安排把多余的箱子取回来。
T Good, thanks for handling it quickly. Next time, maybe confirm big orders by email.|很好，谢谢你迅速处理。下次大订单最好用邮件确认一下。
Y That's a good idea. I'll do that from now on.|好主意，从现在起我会这么做。
`);
addScene("smalltalkwork", "work", "茶水间闲聊", "☕", `
T Morning! How was your weekend?|早！周末过得怎么样？
Y Pretty good, thanks. We went to the farmers' market and then took the kids to the park.|挺好的，谢谢。我们去了农贸市场，然后带孩子去公园。
T Nice. The weather was perfect on Saturday.|不错。周六天气好极了。
Y It was. How about you? Did you do anything fun?|是啊。你呢？有做什么好玩的吗？
T I finally watched the hockey game. What a finish!|我终于看了冰球比赛，结局太精彩了！
Y I heard about it. I'm still learning the rules, to be honest.|我听说了。说实话，我还在学规则。
T I'll explain it to you sometime. It's easier than it looks.|改天我给你讲讲，比看起来简单。
`);
addScene("resignation", "work", "提出辞职", "📄", `
Y Do you have a minute? I have some news I need to share.|你有空吗？我有件事要跟你说。
T Of course. Is everything okay?|当然。一切都好吗？
Y Yes, everything is fine. I've accepted a position at another company.|是的，都好。我接受了另一家公司的职位。
T Oh, wow. Congratulations, although we'll be sad to see you go.|哦，哇。恭喜你，不过你走了我们会很难过。
Y Thank you. I've really enjoyed working here. My last day will be two weeks from Friday.|谢谢。我真的很喜欢在这里工作。我最后一天上班是两周后的周五。
T Okay. Could you help train someone before you leave?|好的。你走之前能帮忙培训一个人吗？
Y Absolutely. I'll make sure everything is ready.|当然，我会确保一切都准备好。
`);

// 情景对话：学校与孩子、社交闲聊
addScene("registerschool", "school", "给孩子注册入学", "🏫", `
Y Hi, I'd like to register my son for school. We just moved to the area.|你好，我想给我儿子注册入学，我们刚搬到这一带。
T Welcome! How old is he, and what grade will he be in?|欢迎！他几岁，要上几年级？
Y He's nine, so he'll be going into grade four.|他九岁，所以要上四年级。
T Okay. I'll need his birth certificate, immunization records, and proof of your address.|好的。我需要他的出生证明、疫苗接种记录和你的地址证明。
Y I have everything here. He doesn't speak much English yet.|都在这儿。他还不太会说英语。
T That's okay. We have an ESL teacher who will help him.|没关系，我们有ESL老师会帮助他。
Y That's great. When can he start?|太好了。他什么时候可以开始上学？
T He can start on Monday. Classes begin at eight forty-five.|周一就可以开始，八点四十五上课。
`);
addScene("ptinterview", "school", "家长会", "👨‍🏫", `
T Thanks for coming in. Your daughter is doing really well this term.|谢谢你来。你女儿这学期表现很好。
Y That's good to hear. How is she doing in math?|很高兴听到。她数学怎么样？
T Math is one of her strengths. She could work a bit more on reading, though.|数学是她的强项之一，不过阅读还可以再加强一点。
Y What can we do at home to help?|我们在家能怎么帮她？
T Reading together for twenty minutes every night would make a big difference.|每晚一起读二十分钟书会有很大帮助。
Y Okay. Does she participate in class?|好的。她上课积极发言吗？
T She's a bit quiet, but she's starting to put up her hand more often.|她有点安静，但开始越来越常举手了。
Y Thank you for all your help.|谢谢你的帮助。
`);
addScene("sickchild", "school", "打电话给学校请假", "🤒", `
T Good morning, Maple Leaf Public School.|早上好，枫叶公立学校。
Y Hi, I'm calling because my son is sick and won't be in school today.|你好，我打电话是因为我儿子病了，今天不能去上学。
T Okay. What's his name and which class is he in?|好的。他叫什么名字，在哪个班？
Y His name is Leo Zhang, and he's in Mrs. Brown's grade two class.|他叫张里奥，在布朗老师的二年级班。
T Thank you. Is he staying home for just today?|谢谢。他只请今天一天吗？
Y Probably today and tomorrow. He has a fever.|可能今天和明天，他发烧了。
T No problem. I'll let his teacher know. I hope he feels better soon.|没问题，我会告诉他老师。希望他早日康复。
`);
addScene("daycare", "school", "咨询日托", "🧸", `
Y Hi, I'm looking for a daycare spot for my two-year-old.|你好，我在给我两岁的孩子找日托名额。
T Okay. We currently have a waiting list. When would you need care to start?|好的。我们目前有候补名单。你需要什么时候开始？
Y In September, when I go back to work.|九月，我回去上班的时候。
T I can put your name on the list. It's usually six to twelve months.|我可以把你列入名单，通常要等六到十二个月。
Y Wow, that's long. How much does it cost per month?|哇，好久。每月多少钱？
T With the government program, it's about two hundred and fifty dollars a month.|有政府补贴项目的话，大约每月两百五十加元。
Y That's very reasonable. Please add us to the list.|很合理。请把我们加入名单。
`);
addScene("bullying", "school", "向老师反映孩子被欺负", "😢", `
Y Hi, thanks for meeting with me. I'm worried about my son.|你好，谢谢你见我。我很担心我儿子。
T Of course. What's going on?|当然。发生什么事了？
Y He says some kids are making fun of him because of his accent.|他说有些孩子因为他的口音取笑他。
T I'm really sorry to hear that. We take bullying very seriously.|很抱歉听到这件事。我们非常重视霸凌问题。
Y He doesn't want to go to school anymore.|他都不想去上学了。
T I'll talk to the students involved and keep a close eye on things during recess.|我会和相关学生谈话，并在课间密切关注。
Y Thank you. Please let me know what happens.|谢谢。请告诉我处理结果。
T I will. I'll call you by the end of the week.|好的，我会在周末前给你打电话。
`);
addScene("playdate", "school", "约孩子一起玩", "🎈", `
Y Hi, are you Emma's mom? My daughter Lily talks about her all the time.|你好，你是艾玛的妈妈吗？我女儿莉莉总是提起她。
T Yes, I am! Emma loves Lily too.|是的！艾玛也很喜欢莉莉。
Y Would Emma like to come over to play on Saturday afternoon?|艾玛周六下午想来我家玩吗？
T I'm sure she'd love that. What time works for you?|她肯定很想去。你几点方便？
Y How about from two to five? I can pick her up if you like.|两点到五点怎么样？如果你愿意我可以去接她。
T That would be great. Does Lily have any food allergies I should know about?|那太好了。莉莉有什么食物过敏需要我知道的吗？
Y No allergies. I'll text you my address.|没有过敏。我把地址发短信给你。
`);
addScene("swimlessons", "school", "报名游泳课", "🏊", `
Y Hi, I'd like to sign my kids up for swimming lessons.|你好，我想给孩子们报名游泳课。
T Great. How old are they, and have they taken lessons before?|好的。他们几岁，以前上过课吗？
Y They're six and eight, and neither of them can swim yet.|一个六岁一个八岁，都还不会游泳。
T Okay, they'll start in the beginner level. Classes are on Saturday mornings.|好的，他们从初级开始，周六上午上课。
Y How long is the session?|一期多长时间？
T It's ten weeks, and each class is forty-five minutes.|十周，每节课四十五分钟。
Y And how much does it cost?|多少钱？
T It's ninety dollars per child. There's a discount for families with low income.|每个孩子九十加元。低收入家庭有折扣。
`);
addScene("homeworkhelp", "school", "辅导孩子作业", "✏️", `
T Dad, can you help me with my homework?|爸爸，你能帮我做作业吗？
Y Sure. What subject is it?|当然，什么科目？
T It's English. I have to write a paragraph about my favourite season.|英语。我要写一段关于我最喜欢的季节的话。
Y Okay. Which season do you like best?|好的。你最喜欢哪个季节？
T Winter, because I can play hockey and build snowmen.|冬天，因为我可以打冰球和堆雪人。
Y That's a great start. Can you write three reasons why?|开头很好。你能写出三个理由吗？
T Okay. Can you check my spelling when I'm done?|好的。我写完你能帮我检查拼写吗？
Y Of course. Actually, you're probably better at spelling than me now.|当然。其实你现在拼写可能比我还好。
`);
addScene("college", "school", "咨询成人教育课程", "🎓", `
Y Hi, I'm interested in taking some courses to get my accounting certificate.|你好，我想上一些课程拿会计证书。
T Great. Do you have any previous education in accounting?|好的。你以前学过会计吗？
Y Yes, I have a degree from China, but it isn't recognized here.|学过，我有中国的学位，但这里不认可。
T You might be able to get credit for some courses. You'd need to send us your transcripts.|你也许能抵免一些课程学分，需要把你的成绩单寄给我们。
Y Do you have evening or online classes? I work during the day.|你们有晚上或网上的课吗？我白天上班。
T Yes, most of our courses are offered online or in the evening.|有的，我们大部分课程都在网上或晚上开设。
Y Is there any financial help available?|有经济资助吗？
T You may qualify for a provincial grant. Our financial aid office can tell you more.|你可能有资格获得省政府补助，我们的助学金办公室可以告诉你更多。
`);
addScene("newneighbour", "social", "认识新邻居", "🏘️", `
T Hi there! I saw the moving truck. Are you the new neighbours?|你好！我看到搬家车了，你们是新邻居吗？
Y Yes, we just moved in yesterday. I'm Wei.|是的，我们昨天刚搬进来。我叫伟。
T Nice to meet you, Wei. I'm Karen. Welcome to the street!|很高兴认识你，伟。我是凯伦，欢迎来到这条街！
Y Thank you. It seems like a really nice neighbourhood.|谢谢。这个社区看起来真不错。
T It is. Very quiet, and lots of families with kids.|是的，很安静，有很多带孩子的家庭。
Y That's great, we have two kids.|太好了，我们有两个孩子。
T If you need anything at all, just knock on our door.|如果需要任何帮助，尽管来敲我们的门。
Y That's very kind. We'll have you over for dinner once we're settled.|你真好。等我们安顿好了请你们来吃饭。
`);
addScene("weather", "social", "聊天气", "🌦️", `
T Can you believe this weather? It was sunny an hour ago.|你能相信这天气吗？一小时前还是晴天。
Y I know! I didn't bring an umbrella.|是啊！我没带伞。
T That's Canada for you. If you don't like the weather, just wait five minutes.|这就是加拿大。不喜欢这天气，等五分钟就变了。
Y I'm still getting used to it. Is it always like this in spring?|我还在适应。春天总是这样吗？
T Pretty much. But wait until summer, it's beautiful.|差不多。但等到夏天，可漂亮了。
Y I'm looking forward to it. This winter felt so long.|我很期待。这个冬天感觉好漫长。
T You survived your first winter, that's the hardest part.|你熬过了第一个冬天，那是最难的部分。
`);
addScene("dinnerinvite", "social", "到朋友家吃饭", "🍷", `
T Come on in! Let me take your coats.|请进！我来帮你们拿外套。
Y Thanks for having us. We brought some wine and dessert.|谢谢邀请我们。我们带了些酒和甜点。
T Oh, you didn't have to do that. Thank you!|哦，你们不用带的，谢谢！
Y Should we take our shoes off?|我们需要脱鞋吗？
T Yes, if you don't mind. Make yourselves at home.|是的，如果你们不介意的话。别客气，当自己家。
Y Something smells amazing. What are you making?|好香啊。你在做什么？
T Roast chicken with potatoes. I hope you're hungry!|烤鸡配土豆。希望你们饿了！
Y Definitely. We skipped lunch for this.|当然。为了这顿我们中午都没吃。
`);
addScene("hobbies", "social", "聊兴趣爱好", "🎨", `
T So, what do you like to do in your free time?|那么，你空闲时间喜欢做什么？
Y I like hiking, and I've recently started learning to cook Canadian food.|我喜欢徒步，最近开始学做加拿大菜。
T That's cool. What have you made so far?|真酷。到目前为止你做过什么？
Y I made butter tarts last weekend. They were a little too sweet, though.|上周末我做了黄油挞，不过有点太甜了。
T Ha, they're supposed to be sweet! Have you tried curling yet?|哈，它就应该是甜的！你试过冰壶吗？
Y Curling? No, I don't really understand it.|冰壶？没有，我不太懂。
T You should come with me sometime. Our club has a beginners' night on Wednesdays.|你应该哪天跟我去。我们俱乐部周三晚上有新手之夜。
Y Sure, that sounds like fun.|好啊，听起来很有意思。
`);
addScene("bbq", "social", "烧烤聚会", "🍔", `
T Hey, glad you could make it! Grab a drink from the cooler.|嘿，很高兴你能来！从冰箱里拿瓶饮料吧。
Y Thanks. This is a great backyard.|谢谢。这个后院真棒。
T Thanks! The burgers will be ready in about ten minutes.|谢谢！汉堡大约十分钟就好。
Y Can I help with anything?|需要我帮忙吗？
T Sure, could you bring out the salads from the kitchen?|好啊，你能把厨房里的沙拉拿出来吗？
Y No problem. Who are all these people?|没问题。这些人都是谁？
T Mostly neighbours and a few friends from work. Let me introduce you.|大部分是邻居，还有几个同事。我来给你介绍一下。
`);
addScene("compliment", "social", "称赞与回应", "👍", `
T I love your scarf. Where did you get it?|我好喜欢你的围巾，在哪儿买的？
Y Thank you! My mom made it for me.|谢谢！是我妈妈给我织的。
T Wow, she's really talented.|哇，她真能干。
Y She is. She knits all the time.|是的，她一直在织东西。
T By the way, your English has improved so much since we first met.|对了，自从我们第一次见面，你的英语进步太大了。
Y Really? Thank you, that means a lot. I've been practising every day.|真的吗？谢谢，这对我意义重大。我每天都在练习。
T It shows. Keep it up!|看得出来。继续加油！
`);
addScene("decline", "social", "礼貌地拒绝邀请", "🙅", `
T Hey, a few of us are going to the pub after work. Do you want to come?|嘿，我们几个下班后去酒吧，你想来吗？
Y Thanks for asking, but I can't tonight. I have to pick up my kids.|谢谢邀请，但今晚不行，我得去接孩子。
T No worries. Maybe next time?|没关系。下次吧？
Y Definitely. Do you guys go every Friday?|一定。你们每周五都去吗？
T Most Fridays, yeah.|大部分周五都去。
Y Great. I'll try to arrange a babysitter next week.|太好了。下周我试着安排个保姆。
T Sounds good. Have a good weekend!|好的，周末愉快！
`);
addScene("hockeytalk", "social", "聊冰球", "🏒", `
T Did you catch the game last night?|你看昨晚的比赛了吗？
Y I watched the last period. What a game!|我看了最后一节。太精彩了！
T That overtime goal was unbelievable.|那个加时赛进球太不可思议了。
Y I still don't understand offside, to be honest.|说实话，我还是不懂越位。
T It's simple. A player can't go into the other team's zone before the puck does.|很简单。球员不能在球之前进入对方区域。
Y Oh, that makes sense now. Thanks.|哦，现在明白了，谢谢。
T Want to come watch the next game at my place? It's on Saturday.|下场比赛要来我家看吗？周六。
Y I'd love to. I'll bring some snacks.|我很乐意，我带些零食。
`);
addScene("condolence", "social", "表达慰问", "🕊️", `
Y I heard about your father. I'm so sorry for your loss.|我听说你父亲的事了，节哀顺变。
T Thank you. It's been a hard week.|谢谢。这一周很难熬。
Y If there's anything I can do, please let me know.|如果有什么我能做的，请告诉我。
T I appreciate that. Everyone has been so kind.|谢谢你。大家都很好。
Y I made some soup for you and your family. I'll leave it on the porch.|我给你和家人做了些汤，我放在门廊上。
T That's really thoughtful. Thank you.|你真体贴，谢谢。
Y Take care of yourself.|照顾好自己。
`);
addScene("datingtalk", "social", "和朋友聊近况", "💬", `
T Hey, long time no see! How have you been?|嘿，好久不见！最近怎么样？
Y I've been good, just busy with work and the kids. How about you?|挺好的，就是忙工作和孩子。你呢？
T Same here. Did you ever find a new place to live?|我也一样。你找到新住处了吗？
Y Yes, we moved into a townhouse last month. It's much bigger.|找到了，我们上个月搬进了一套联排别墅，大多了。
T That's great news! Is it far from here?|太好了！离这里远吗？
Y About fifteen minutes by car. You should come visit.|开车大约十五分钟。你应该来坐坐。
T I'd love to. Let's set something up soon.|我很乐意。我们尽快约个时间。
`);

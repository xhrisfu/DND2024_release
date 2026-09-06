const h=1,e={id:"wdh",title:"深水城：龙金劫",version:"1.0.0",sourceBook:{title:"深水城：龙金劫 Waterdeep: Dragon Heist",edition:"2018",totalPages:0},recommendedLevels:[1,5],startingLocationId:"loc_040",startingSceneId:"scn_040",chapters:[{id:"049",title:"患难中的朋友",questIds:["qst_main_dragonheist"],completionCondition:{type:"always"}},{id:"094",title:"巨魔颅骨巷",questIds:[],completionCondition:{type:"always"}},{id:"0ca",title:"火球术",questIds:[],completionCondition:{type:"always"}},{id:"123",title:"龙之季节",questIds:[],completionCondition:{type:"always"}},{id:"25c",title:"春季疯狂",questIds:[],completionCondition:{type:"always"}},{id:"2d5",title:"地狱般的夏天",questIds:[],completionCondition:{type:"always"}},{id:"350",title:"大师的陨落",questIds:[],completionCondition:{type:"always"}},{id:"3cc",title:"冬日魔法",questIds:[],completionCondition:{type:"always"}}],styleBible:"",_meta:{needsReview:!0,extractorNotes:"manifest stub（提取期占位，待 R6b 补 endings/styleBible 等）｜开局点：overrides.json 指定开局（startingLocationId=loc_040，已排除 external 哨兵）"}},n=[{id:"loc_040",name:"哈欠传送门",aliases:["The Yawning Portal"],chapterId:"049",connections:[{toLocationId:"loc_077",kind:"passage"},{toLocationId:"loc_049",kind:"road"}],sceneIds:["scn_040","scn_04a"],defaultSceneId:"scn_040",_meta:{sourcePages:[20],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_049",name:"患难中的朋友",aliases:["A Friend in Need"],chapterId:"049",connections:[{toLocationId:"loc_040",kind:"road"},{toLocationId:"loc_063",kind:"road"},{toLocationId:"loc_077",kind:"road"},{toLocationId:"loc_094",kind:"road"}],sceneIds:["scn_049"],defaultSceneId:"scn_049",_meta:{sourcePages:[21],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_063",name:"散塔林会 藏身之地",aliases:["Zhentarim Hideout"],chapterId:"049",connections:[{toLocationId:"loc_049",kind:"road"}],sceneIds:["scn_063","scn_064","scn_068","scn_06b","scn_06d","scn_06e","scn_0d2","scn_071"],defaultSceneId:"scn_063",_meta:{sourcePages:[24],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_077",name:"Xanathar 公会藏身地",aliases:["Xanathar Guild Hideout"],chapterId:"049",connections:[{toLocationId:"loc_269",kind:"passage"},{toLocationId:"loc_040",kind:"passage"},{toLocationId:"loc_049",kind:"road"}],sceneIds:["scn_077","scn_078","scn_07b","scn_07d","scn_07e","scn_07f","scn_080","scn_081","scn_085","scn_086","scn_088","scn_089","scn_08c","scn_08e"],defaultSceneId:"scn_077",_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_094",name:"巨魔颅骨巷",aliases:["Trollskull Alley"],chapterId:"094",connections:[{toLocationId:"loc_095",kind:"road"},{toLocationId:"loc_0ca",kind:"road"},{toLocationId:"loc_049",kind:"road"}],sceneIds:["scn_094"],defaultSceneId:"scn_094",_meta:{sourcePages:[31],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_095",name:"巷内区域",aliases:["Areas in the Alley"],chapterId:"094",connections:[{toLocationId:"loc_269",kind:"passage"},{toLocationId:"loc_094",kind:"road"},{toLocationId:"loc_0ca",kind:"passage"},{toLocationId:"loc_205",kind:"passage"}],sceneIds:["scn_095","scn_096","scn_09b","scn_09d","scn_09f","scn_0a1","scn_0a3","scn_0a5","scn_0a6","scn_26b","scn_26e","scn_0ad","scn_26c","scn_26d","scn_255","scn_26f","scn_0bb"],defaultSceneId:"scn_095",_meta:{sourcePages:[31],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_0ca",name:"火球术",aliases:["Fireball"],chapterId:"0ca",connections:[{toLocationId:"loc_095",kind:"passage"},{toLocationId:"loc_0ef",kind:"road"},{toLocationId:"loc_123",kind:"road"},{toLocationId:"loc_094",kind:"road"}],sceneIds:["scn_0ca","scn_0cc","scn_0d0","scn_0d1","scn_0db","scn_0ed"],defaultSceneId:"scn_0ca",_meta:{sourcePages:[43],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_0ef",name:"格拉伦德别墅",aliases:["Gralhund Villa"],chapterId:"0ca",connections:[{toLocationId:"loc_0ca",kind:"road"}],sceneIds:["scn_0ef","scn_0f5","scn_0f6","scn_0f9","scn_0fb","scn_0fc","scn_0fd","scn_100","scn_102","scn_105","scn_107","scn_108","scn_10a","scn_10d","scn_110","scn_111","scn_113","scn_116","scn_117","scn_119","scn_11a","scn_11b","scn_122"],defaultSceneId:"scn_0ef",_meta:{sourcePages:[50],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_123",name:"龙之季节",aliases:["Dragon Season"],chapterId:"123",connections:[{toLocationId:"loc_157",kind:"passage"},{toLocationId:"loc_176",kind:"passage"},{toLocationId:"loc_205",kind:"passage"},{toLocationId:"loc_1e0",kind:"passage"},{toLocationId:"loc_1a8",kind:"passage"},{toLocationId:"loc_13e",kind:"passage"},{toLocationId:"loc_18f",kind:"passage"},{toLocationId:"loc_1c6",kind:"passage"},{toLocationId:"loc_236",kind:"road"},{toLocationId:"loc_25c",kind:"road"},{toLocationId:"loc_2d5",kind:"road"},{toLocationId:"loc_350",kind:"road"},{toLocationId:"loc_3cc",kind:"road"},{toLocationId:"loc_0ca",kind:"road"}],sceneIds:["scn_123","scn_124","scn_129"],defaultSceneId:"scn_123",_meta:{sourcePages:[57],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_13e",name:"遭遇1：小巷",aliases:["Encounter 1: Alley"],chapterId:"123",connections:[{toLocationId:"loc_123",kind:"passage"}],sceneIds:["scn_13e","scn_140","scn_141"],defaultSceneId:"scn_13e",_meta:{sourcePages:[61],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_157",name:"遭遇2: 雾岸",aliases:["Encounter 2: Mistshore"],chapterId:"123",connections:[{toLocationId:"loc_123",kind:"passage"}],sceneIds:["scn_157","scn_159","scn_15a","scn_15c","scn_16c"],defaultSceneId:"scn_157",_meta:{sourcePages:[65],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_176",name:"遭遇4：陵墓",aliases:["Encounter 4: Mausoleum"],chapterId:"123",connections:[{toLocationId:"loc_123",kind:"passage"}],sceneIds:["scn_176","scn_178","scn_179","scn_188"],defaultSceneId:"scn_176",_meta:{sourcePages:[69],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_18f",name:"遭遇6：剧院",aliases:["Encounter 6: Theater"],chapterId:"123",connections:[{toLocationId:"loc_123",kind:"passage"}],sceneIds:["scn_18f","scn_191","scn_192","scn_193","scn_195","scn_196","scn_197","scn_198","scn_199"],defaultSceneId:"scn_18f",_meta:{sourcePages:[73],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_1a8",name:"遭遇7: 旧塔",aliases:["Encounter 7: Old Tower"],chapterId:"123",connections:[{toLocationId:"loc_123",kind:"passage"}],sceneIds:["scn_1a8","scn_1aa","scn_1ab","scn_1ac","scn_1b0","scn_1b2"],defaultSceneId:"scn_1a8",_meta:{sourcePages:[76],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_1c6",name:"遭遇8: 法院",aliases:["Encounter 8: Courthouse"],chapterId:"123",connections:[{toLocationId:"loc_123",kind:"passage"}],sceneIds:["scn_1c6","scn_1c8","scn_1ca","scn_1cb","scn_1cc","scn_1cd","scn_1ce","scn_1cf","scn_1d0","scn_1d2"],defaultSceneId:"scn_1c6",_meta:{sourcePages:[80],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_1e0",name:"遭遇9：地窖群",aliases:["Encounter 9: Cellar Complex"],chapterId:"123",connections:[{toLocationId:"loc_123",kind:"passage"}],sceneIds:["scn_1e0","scn_1e2","scn_1e3","scn_1e4","scn_1e5","scn_1e6","scn_1e7","scn_1e8","scn_1ea","scn_1ed","scn_1f0","scn_1f2"],defaultSceneId:"scn_1e0",_meta:{sourcePages:[83],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_205",name:"遭遇10: 改造的风车",aliases:["Encounter 10: Converted Windmill"],chapterId:"123",connections:[{toLocationId:"loc_3d2",kind:"passage"},{toLocationId:"loc_40f",kind:"passage"},{toLocationId:"loc_095",kind:"passage"},{toLocationId:"loc_2e4",kind:"passage"},{toLocationId:"loc_123",kind:"passage"}],sceneIds:["scn_205","scn_207","scn_208","scn_209","scn_20a","scn_20b","scn_20c","scn_20d","scn_20e","scn_222"],defaultSceneId:"scn_205",_meta:{sourcePages:[86],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_236",name:"龙之金库",aliases:["Vault of Dragons"],chapterId:"123",connections:[{toLocationId:"loc_123",kind:"road"}],sceneIds:["scn_236","scn_239","scn_23a","scn_23d","scn_23f","scn_242","scn_244","scn_247","scn_249","scn_24b","scn_257"],defaultSceneId:"scn_236",_meta:{sourcePages:[94],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_25c",name:"春季疯狂",aliases:["Spring Madness"],chapterId:"25c",connections:[{toLocationId:"loc_269",kind:"passage"},{toLocationId:"loc_123",kind:"road"}],sceneIds:["scn_25c","scn_25d","scn_25e"],defaultSceneId:"scn_25c",_meta:{sourcePages:[99],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_269",name:"沙纳萨的巢穴",aliases:["Xanathar's Lair"],chapterId:"25c",connections:[{toLocationId:"loc_077",kind:"passage"},{toLocationId:"loc_095",kind:"passage"},{toLocationId:"loc_25c",kind:"passage"}],sceneIds:["scn_269","scn_271","scn_273","scn_277","scn_278","scn_279","scn_27a","scn_27e","scn_27f","scn_283","scn_285","scn_288","scn_28b","scn_28d","scn_290","scn_291","scn_292","scn_297","scn_29a","scn_29c","scn_2a2","scn_2a4","scn_2a5","scn_2a6","scn_2ab","scn_2af","scn_2b1","scn_2b2","scn_2b5","scn_2b9","scn_2ba","scn_2bc","scn_2be","scn_2bf","scn_2c4","scn_2c7","scn_2cb"],defaultSceneId:"scn_269",_meta:{sourcePages:[100],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_2d5",name:"地狱般的夏天",aliases:["Hell of a Summer"],chapterId:"2d5",connections:[{toLocationId:"loc_2e4",kind:"passage"},{toLocationId:"loc_332",kind:"passage"},{toLocationId:"loc_123",kind:"road"}],sceneIds:["scn_2d5","scn_2d6","scn_2e1"],defaultSceneId:"scn_2d5",_meta:{sourcePages:[115],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_2e4",name:"卡萨兰特别墅",aliases:["Cassalanter Villa"],chapterId:"2d5",connections:[{toLocationId:"loc_332",kind:"passage"},{toLocationId:"loc_205",kind:"passage"},{toLocationId:"loc_2d5",kind:"passage"}],sceneIds:["scn_2e4","scn_2ee","scn_2f0","scn_2f2","scn_2f6","scn_2f8","scn_2fa","scn_2fe","scn_2ff","scn_300","scn_303","scn_305","scn_308","scn_30a","scn_30d","scn_30f","scn_311","scn_316","scn_317","scn_31a","scn_31b","scn_31d","scn_31f","scn_324","scn_325","scn_328","scn_32b","scn_32c","scn_32e","scn_330"],defaultSceneId:"scn_2e4",_meta:{sourcePages:[117],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_332",name:"阿斯蒙蒂斯神庙",aliases:["Temple of Asmodeus"],chapterId:"2d5",connections:[{toLocationId:"loc_2d5",kind:"passage"},{toLocationId:"loc_2e4",kind:"passage"}],sceneIds:["scn_332","scn_335","scn_338","scn_33a","scn_33d","scn_341","scn_343","scn_345","scn_34a","scn_34c"],defaultSceneId:"scn_332",_meta:{sourcePages:[125],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_350",name:"大师的陨落",aliases:["Maestro's Fall"],chapterId:"350",connections:[{toLocationId:"loc_3a3",kind:"passage"},{toLocationId:"loc_123",kind:"road"}],sceneIds:["scn_350","scn_351","scn_355"],defaultSceneId:"scn_350",_meta:{sourcePages:[131],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_3a3",name:"绯红马佩诺斯",aliases:["Scarlet Marpenoth"],chapterId:"350",connections:[{toLocationId:"loc_350",kind:"passage"}],sceneIds:["scn_3a3","scn_3a8","scn_3a9","scn_3ab","scn_3ae","scn_3b2","scn_3b4","scn_3b5","scn_3b8","scn_3ba","scn_3bb","scn_3bc","scn_3bd","scn_3be"],defaultSceneId:"scn_3a3",_meta:{sourcePages:[141],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_3cc",name:"冬日魔法",aliases:["Winter Wizardry"],chapterId:"3cc",connections:[{toLocationId:"loc_3d2",kind:"passage"},{toLocationId:"loc_40f",kind:"passage"},{toLocationId:"loc_123",kind:"road"}],sceneIds:["scn_3cc","scn_3cd"],defaultSceneId:"scn_3cc",_meta:{sourcePages:[147],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_3d2",name:"科拉特塔",aliases:["Kolat Towers"],chapterId:"3cc",connections:[{toLocationId:"loc_40f",kind:"passage"},{toLocationId:"loc_205",kind:"passage"},{toLocationId:"loc_3cc",kind:"passage"}],sceneIds:["scn_3d2","scn_3da","scn_3db","scn_3de","scn_3e1","scn_3e5","scn_3e6","scn_3ea","scn_3ed","scn_3ef","scn_3f0","scn_3f3","scn_3f4","scn_3f6","scn_3fa","scn_3fc","scn_3fd","scn_400","scn_403","scn_406","scn_408","scn_409","scn_40b"],defaultSceneId:"scn_3d2",_meta:{sourcePages:[148],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}},{id:"loc_40f",name:"超维度圣所",aliases:["Extradimensional Sanctum"],chapterId:"3cc",connections:[{toLocationId:"loc_205",kind:"passage"},{toLocationId:"loc_3cc",kind:"passage"},{toLocationId:"loc_3d2",kind:"passage"}],sceneIds:["scn_40f","scn_413","scn_417","scn_41b","scn_41c","scn_41d","scn_41f","scn_420","scn_425","scn_428","scn_42a","scn_42c","scn_42e","scn_430","scn_435"],defaultSceneId:"scn_40f",_meta:{sourcePages:[157],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：kind=passage/road 为缺省猜测；travelHours 原文未给不臆造"}}],t=[{id:"scn_040",locationId:"loc_040",name:"哈欠传送门",activation:{condition:{type:"always"},priority:0},skeleton:["打哈欠的门户是位于深水城城堡区的一家著名客栈和酒馆。","冒险者们可以在这里遇见各种丰富多彩的人物。","这个地方是一座石砌建筑，屋顶由石板铺设，并带有多个烟囱。","一楼大部分区域被酒馆的公共休息室占据，其中包含一个直径为40英尺的敞口井（实际上是一座沉没石塔的外壳），这口井向下延伸140英尺，通向幽暗地狱的第一层，这是位于深水城下方的广阔地下城。","一个绳索和滑轮装置用于将冒险者降入井中并将他们拉上来。"],flesh:`打哈欠的门户是位于深水城城堡区的一家著名客栈和酒馆。冒险者们可以在这里遇见各种丰富多彩的人物。

这个地方是一座石砌建筑，屋顶由石板铺设，并带有多个烟囱。一楼大部分区域被酒馆的公共休息室占据，其中包含一个直径为40英尺的敞口井（实际上是一座沉没石塔的外壳），这口井向下延伸140英尺，通向幽暗地狱的第一层，这是位于深水城下方的广阔地下城。一个绳索和滑轮装置用于将冒险者降入井中并将他们拉上来。关于这个幽暗地狱入口的更多信息可以在深水城: 疯法师的地城中找到。

Yawning Portal 的上层包含为客人准备的舒适、装饰精美的房间。

杜尔南，这位店主，对食物、饮料和住宿收取标准价格。

给玩家附录C中的《打哈欠的门户 熟悉的面孔》传单，并允许每位玩家选择一个NPC作为友好的熟人——即玩家角色所认识和信任的人。多个玩家可以选择同一个NPC。以下信息应保留，直到他们的角色了解到为止。

N 男 伊利斯坎人类旅店老板

打哈欠门户的老板是一位退休的冒险者，也是一个话不多的人。杜尔南（见附录 B）直截了当地警告那些等级低于5级的冒险者，进入Undermountain"不是个好主意"。他在吧台后面藏了一把魔法巨剑，以防有怪物从入口井爬出来。

一个伪装成Tethyrian人类女招待的变形怪

这个伪装成友好酒吧女招待的变形怪是一群五个变形怪的头目，这群变形怪一年多前来到深水城。为了帮助团伙维持生计，她为 杜尔南 工作，担任酒吧女招待。Mattrim Mereg（见下文）知道她的秘密。

LG 男性伊利斯坎人类吟游诗人

这位社交上有些笨拙的吟游诗人（见附录 B）在打哈欠的门户表演，并且他比他假装的要擅长音乐。他被称为"三弦"，因为他演奏的琵琶只剩下三根弦。他的秘密是他是一个竖琴手间谍，他远比他表现出来的要更雄辩和沉着。他住在客栈里，在那里他花费下午和晚上的时间监视散塔林会代理人并收集其他潜在麻烦制造者的信息。他最近与邦妮成为了朋友，并希望帮助她的变形怪帮派在城市中安顿下来。

LG 男性 乔达坦人 人类 战士

加莱斯特·银鬃（见 附录 B）是诸领主联盟的代理人，直接向 莱拉·银手 报告。深水城的开放领主要求他监视那些通过他们的行为可能帮助或危及城市及其市民的冒险者。由于 Yawning Portal 吸引了各种冒险者，Jalester 在这里度过了很多时间，通常独自坐在安静的角落。杜尔南 知道 Jalester 为 Laeral 工作，所以不打扰这个年轻人。

Jalester经常被对Faerrel Dunblade的思念分散注意力，他男朋友去年在一场街头斗殴中被杀。当不忙于联盟事务时，Jalester感到孤独并寻找爱情。

NE 男性 Chondathan 人类冒险家，受噬脑怪控制

麦伦·战龙（见 附录 B）给人的印象是一个快乐、乐观、热心肠的人，渴望与他视为朋友的人并肩作战。Yawning Portal 的员工和许多常客都知道 Meloon 是一位与 Force Grey 有联系的熟练战士。

几个月前，与姗娜萨有勾结的噬脑怪吃掉了米隆的大脑。现在在怪物的控制下，米隆积极劝阻冒险者探索下山，并敦促他们专注于城市中的冲突。他还追捕并杀死散塔林会的特工，为他的秘密眼魔主人服务。他盯上了达维尔·星歌（见附录 B），但不会在目击者众目睽睽之下杀死这个精灵。

NG 女 楚尔坦人类瓦金女神的女祭司

Obaya，一位牧师，从 楚尔特 旅行到此，赞助进入 Undermountain 的探险，目标是将其魔法宝藏带回给她的雇主，南扎路港 的商人王子 瓦康嘎 O'tamu。她劝阻低等级的冒险者探索 Undermountain，但乐于用她的魔法帮助他们，直到他们获得足够的经验对她有用为止。

如果你计划在这次冒险之后进行 深水城: 疯法师的地城，奥巴娅可以担任更重要的角色，作为顾问和任务来源。

N 女性 半兽人 雇佣打手

Yagra觉得这份工作很无聊，喜欢通过挑战冒险者进行扳手腕来打发时间。（使用竞争的力量检查来解决这类比赛。）如果角色们表达了他们对Xanathar公会的反对，Yagra可能会敦促他们与Davil谈谈，加入散塔林会的力量，以摧毁穴居人犯罪领主。

雅格拉是一个半兽人暴徒。当她的生命值降至0点时，她的生命值会改为1点（但在完成长休之前不能再这样做）。她拥有60尺范围内的黑暗视觉。她会说通用语和兽人语。`,spotlightRefs:[],presentNpcIds:["npc_4b1","npc_4b7","npc_4ba","npc_4be","npc_4e2"],availableInfoIds:["info_040_g1","info_040_g2","info_040_g3","info_04a_g5"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[20],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:`Yagra是黑网雇佣兵，受雇保护一位名叫达维尔·星歌的Zhent谈判代表（有关他的更多信息，请参见附录 B）。
全战役第一小时都在这间酒馆里：斗殴（散塔林会五人 vs 半兽人打手雅格拉）→ 第三轮时巨魔带蚊蝠从中央井口爬出、杜尔南拔剑参战 → 收拾完怪物后沃洛逆着人流上前提出委托。常客中埋着数条长线暗桩（麦伦·战龙、「三弦」梅雷格、加莱斯特·银鬃），未被角色查明前不得公开。`,mapGeometry:{imageRef:"adventure/WDH/The-Yawning-Portal.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_049",locationId:"loc_049",name:"患难中的朋友",activation:{condition:{type:"always"},priority:0},skeleton:["在 Yawning Portal 发生的一场酒吧斗殴证明了 散塔林会 和 Xanathar 公会之间的帮派战争无处不在，没有地方是安全的。","在这种危险的氛围中，Volothamp Geddarm 向角色们提供了一个任务。","Volo 承诺如果他们能够救出他失踪的朋友，福卢恩·布拉格玛，他将给予奖励，他担心 Floon 已经卷入了这场冲突。","Volo 的任务是向 深水城 街道的直接介绍，为角色们提供了探索城市的借口。","在寻找沃洛的朋友的过程中，角色们可能会结交盟友和敌人，这些人可能会在整个冒险中重新出现。"],flesh:`在 Yawning Portal 发生的一场酒吧斗殴证明了 散塔林会 和 Xanathar 公会之间的帮派战争无处不在，没有地方是安全的。在这种危险的氛围中，Volothamp Geddarm 向角色们提供了一个任务。Volo 承诺如果他们能够救出他失踪的朋友，福卢恩·布拉格玛，他将给予奖励，他担心 Floon 已经卷入了这场冲突。Volo 的任务是向 深水城 街道的直接介绍，为角色们提供了探索城市的借口。

在寻找沃洛的朋友的过程中，角色们可能会结交盟友和敌人，这些人可能会在整个冒险中重新出现。完成沃洛的任务后，角色们在深水城北城区的巨魔颅骨巷获得了一个带有地址的基地。从他们的新基地出发，角色们可以规划自己的路线，无论是与深水城的人民互动，加入城市众多派系之一，还是简单地寻找危险。

角色们找到雷纳尔不久后，一位名叫海斯特斯·斯泰格特（Hyustus Staget，守序善良男性伊利斯坎人类老兵）的城市警卫队长带领一打老兵来到仓库。接到可疑活动的报告后，他们冲进来并试图阻止任何人离开。仍然活着并且在现场的天狗被拘留，城市警卫很快得出结论，死者是散塔林会和克萨瑟斯行会的成员，因为两个派系之间暴力冲突正变得越来越频繁。在他的警官搜查仓库的同时，斯泰格特队长询问角色们。

Staget 队长是一个拘谨的人，他帮助维护 Dock Ward 的和平。Dock Ward 的每个店主、公会成员、旅店老板和酒馆老板都认识他，尽管他们对城市守卫的总体看法各不相同，但大多数人都尊重他。Staget 不相信谣言或八卦，他不喝酒，也不让愤怒控制自己。他的工作是遏制 Dock Ward 的暴力行为，但他一直在拖延。毕竟，他推理说，如果 Xanathar 公会和 散塔林会 想要互相摧毁，为什么不让他们这样做呢？

Staget曾经监视过这个仓库，但后来决定撤回细节以加强Dock Ward全区的巡逻——一个他现在后悔的决定。那次监视是试图捕获一个已知的Zhent煽动者，名叫厄斯图尔·弗洛克辛的"大鱼"，据传他要对最近许多冲突负责。Staget不会与陌生人分享这些信息。

斯泰格特和雷纳尔彼此认识，尽管他们并不熟络。一位尼维尔梅尔贵族的牵涉促使队长表现得最为得体。只要雷纳尔和角色们在一起，他就准备忽视角色们所犯的任何罪行，但他给了他们一张折起来的羊皮纸，上面写着《法律法典》，并鼓励他们阅读。（如果还没有这样做，请给玩家们附录C中的《法律法典》传单的副本。）

如果他们似乎决心进一步卷入 散塔林会 和 Xanathar 公会之间的冲突，Staget 在让他们离开之前会提供一些免费的建议：

"最好不要插手犯罪事务。把这种肮脏的生意留给城市警卫。"

"并非所有的城市守卫官员都像我这样好说话。"

"别让血迹弄脏街道，好吗？"（这是城市警卫官员中常见的说法，他们更关心城市上方发生的事情，而不是下水道下面发生的事情。）

在码头区惹麻烦的角色很可能会再次遇到斯泰格特队长。尽管他暗自高兴有冒险者为他分担一些工作，但他不能让他们盖过自己维护和平的努力，否则就有从上级那里受到斥责的风险。

如果您使用里程碑式等级提升而不是跟踪经验点，当角色们在探索了Xanathar公会藏身之处后返回沃洛那里时，他们将从1级提升到2级。`,spotlightRefs:[],presentNpcIds:["npc_4b2","npc_4d9"],availableInfoIds:["info_049_g1","info_049_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[21],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:`如果角色们请求守卫帮助寻找 Floon，Staget 明确表示他不会派遣一支队伍进入下水道寻找一个很可能是 Zhent 或 Xanathar 公会间谍的人。
本章去向：哈欠传送门的酒馆斗殴与井中巨魔开场 → 沃洛委托寻找失踪的弗伦·布拉格玛（每人预付 10 金币）→ 码头区查访（老 Xoblob 商店、串烧龙）→ 蜡烛巷门画黑色翼蛇的散塔林会仓库，在储藏室找到躲藏的瑞纳尔·奈沃兰波、从天狗口中问出「跟着下水道里的黄色标志走」→ 掀开后巷的金属井盖循黄色粉笔标记深入下水道 → 克萨瑟斯行会藏身处 Q7 救出弗伦。把弗伦带回沃洛身边即本章收束：沃洛以北城区巨魔颅骨巷的巨颅庄园地契抵酬（另需 25 金币过户税），角色由此拿到据点，直接衔接第2章「巨魔头骨巷」；若用里程碑升级，返回沃洛处时由 1 级升 2 级。雷纳尔、沃洛、弗伦三人此后作为友方人脉长期可用。`,mapGeometry:{imageRef:"adventure/WDH/ChapterOne.webp"}},{id:"scn_04a",locationId:"loc_040",name:"从哪里开始",activation:{condition:{type:"always"},priority:0},skeleton:["这次冒险假定角色们已经组成了一个队伍，并且目前正在打哈欠门户中，也许正在喝着一杯Shadowdark啤酒，狼吞虎咽地吃着一盘食人鱼和薯条。","或者，你可以从角色们第一次进入喧闹的酒馆开始这次冒险，或者让他们在Volo交给他们最初的任务时第一次见面。","请阅读以下内容以设定场景：","你坐在一张坚固的木桌旁，桌上点着明亮燃烧的蜡烛，散落着已经清空食物的盘子和半空的酒杯。","赌徒的叫喊声和醉酒冒险者唱着粗俗歌曲的声音几乎淹没了三张桌子外一个年轻吟游诗人走调的弹奏声。"],flesh:`这次冒险假定角色们已经组成了一个队伍，并且目前正在打哈欠门户中，也许正在喝着一杯Shadowdark啤酒，狼吞虎咽地吃着一盘食人鱼和薯条。或者，你可以从角色们第一次进入喧闹的酒馆开始这次冒险，或者让他们在Volo交给他们最初的任务时第一次见面。

请阅读以下内容以设定场景：

人类战斗者是散塔林会的五名成员（守序邪恶人类匪徒们）。头顶光头刺有眼形纹身的是他们的首领克伦兹。他们的对手亚格拉·铁拳，是受雇于散塔林会的半兽人（见附录C中的「打瞌睡的酒馆友好面孔」）。亚格拉为自己的荣誉而战。

但当他们挤过喧闹的观众时，战斗几乎已经结束了。Krentz 只剩下3点生命值，试图从 Yagra 身下逃脱，但另外四名 Xanathar 公会成员准备抓住她。

将Yagra从Krentz身边拉开需要一次成功的力量检查，与Yagra的力量检查相竞争。

记住角色在这场戏中如何处理 Krentz。如果他幸存下来，角色们可能会在 Xanathar 公会的下水道藏身之处再次遇见他（见 Q5，第28页）。

杜尔南，懒散酒馆的老板，指向门口。"出去！"他咆哮道，散塔林会的成员们带着克伦兹昏迷的身体逃了出去。

在打哈欠门户酒吧的第三轮混战中，麻烦从酒吧中间敞开的井中出现了：

这个巨魔，目前有44点生命值，从Undermountain的第一层爬上来，以美味的类人生物的肉为食，它带来了九只蚊蝠们。一旦进入酒吧，巨魔站起身来，高达9尺，并进行先攻。Stirges也进行先攻，但只有飞在巨魔上方的三只构成威胁。其余的stirges因为吸取了巨魔大量的血液而膨胀，它们飞回井道去消化它们的食物。随着巨魔的再生，它失血的影响变得不那么明显。

大多数酒馆的顾客和员工在看到巨魔时都会逃跑或寻找掩护。蚂蟥攻击最近的角色，而杜尔南（见附录 B）拔出他的双手剑，跳过吧台，亲自面对怪物。当他攻击时，他呼吁角色们集中精力杀死蚂蟥，然后在巨魔倒下时用灯油浇它并点燃它。如果雅格拉还清醒，她会加入战斗。对于任何帮助击败巨魔的角色，杜尔南实事求是地说："你们打得很好。"

如果在战斗中有任何角色的生命值降至0，Yawning Portal 的员工会上前稳定他们的状态。

一旦巨魔和蚊蝠们被处理掉，Volo就会逆着避开怪物的顾客潮流，向角色们打招呼，对他们的勇气大加赞扬（无论是否合理）："你们是冒险者，对吧？我可能需要你们的帮助。我们找张桌子谈谈，好吗？"

瓦罗赞普·格达姆在大多数水深城人中以自吹自擂和臭名昭著的事实夸张者而闻名。尽管他有所有这些缺点，沃洛却是一个心地善良的人，他最关心的莫过于他的朋友。目前，他对其中一位朋友的福祉深感忧虑。他以魅力和神秘的气氛开始他的请求，但很快就变成了泪流满面的真诚。

沃罗为每位接受了任务的角色提供一个小袋子，里面装有10金币。想要了解他意图的角色必须进行一次DC 10的感知（洞察）检定。成功的角色会察觉到沃罗是诚实的，但可能夸大了他能支付的金额。（目前现金紧缺的沃罗正在等待他《沃罗的怪物指南》（瓦罗怪物指南）的版税收入。为了赚更多的钱，他开始着手写一本新书，沃洛的鬼魂与幽灵指南。事实上，他对"精神"的了解大多与酒精有关，写作进展并不顺利。）如果被逼问，沃罗会敦促角色们相信他，并承诺一旦弗伦活着归还给他，他将准备好发放剩余的奖励，每位角色100金币。

沃洛描述弗伦为一个三十多岁、英俊的红发男子，拥有波浪般的红金色头发。沃洛上次见到他时，他穿着王子般的华服。在弗伦消失前两晚，他和沃洛在码头区的"串烧龙"——一家昏暗、粗俗的酒馆——喝酒作乐。沃洛建议角色们从那里开始他们的搜索。

Volo感到尴尬，承认他可能让他的朋友Floon陷入了麻烦，他拒绝提供Floon消失那晚发生的事情的所有细节。

由于写作障碍，沃洛两天前在 Skewered Dragon 与 福卢恩·布拉格玛 见面喝酒。他们喝了几个小时的酒，还赌博，然后沃洛离开了。那是他最后一次见到 Floon。

伏罗并不知道，在他离开后不久，醉酒的弗龙在酒馆里遇到了另一位熟人，瑞纳尔·奈沃兰波。两人一起离开，雷尼尔提出送弗龙回家。为厄斯图尔·弗洛克辛（见附录 B）效力的五名散塔林会暴徒袭击了弗龙和雷尼尔。他们被带到码头区的一个仓库，以便审问雷尼尔——达格特·奈维尔莫勋爵的儿子——关于戈洛尔石的下落和他父亲隐藏的龙之宝库。审讯还未开始，泽涅塔会仓库的守卫就被桑纳塔公会成员伏击并杀死。新来的袭击者误以为弗龙是雷尼尔，将弗龙打至昏迷并拖走，而雷尼尔则躲藏起来逃过了他们的注意。

弗伦被带到了一个位于下水道中的Xanathar公会藏身之处。一小群天狗留在了散塔林会的仓库里，目的是杀死任何可能出现在仓库的其他Zhents成员。天狗的存在阻止了雷纳尔试图离开仓库。

沃洛最后一次见到 Floon 是在 Skewered Dragon 外面，这是一个位于 Dock Ward 的 Net Street 和 Fillet Lane 之间的可疑（并且是 散塔林会 拥有的）酒馆。接下来的遭遇启动了角色们的调查。

在前往酒馆的路上，"血染街头"是一个让角色们看到城市守卫行动的机会。一旦他们到达目的地，"串烧龙"是一个让角色们从顾客那里获取信息的机会，这将引导他们前往"蜡烛巷"，他们的任务在那里继续。

这里发生的小规模战斗与弗伦的失踪无关，但代表了散塔林会和克萨瑟斯行会之间冲突的升级。城市警卫的一打警卫们逮捕了三名匪徒们，并在等待马车来运送罪犯和尸体的同时询问目击者。小规模战斗的生还者被剥夺了武器，被迫跪下，手放在头上。所有三人，都是忠诚的散塔林会特工（由厄斯图尔·弗洛克辛雇佣；他们冷漠地注视着每一个经过的人，但城市警卫不会让角色们靠近囚犯。

码头区不安全。你可以通过向玩家阅读以下内容来营造氛围：

在扎斯特罗街和菲莱特巷的拐角处有一家商店，橱窗展示非常奇特：

如果他们没有，他们会在没有进一步事件的情况下找到酒馆；见下面的'The Skewered Dragon'。

这家商店是以橱窗里的填充眼魔命名的——这个装置实际上是一个魔法传感器，姗娜萨可以随时通过它窥视。

店主是一个老练的地底侏儒，为克萨瑟斯行会做间谍。几年前，他在下山的一次气体孢子爆炸中幸存下来，并继承了一些零散的眼魔记忆。出于雕刻自己领地的冲动，这个侏儒在深水城定居，从前任店主那里买下了老Xoblob商店，并试图以自己的名字重新命名它，但每个人都继续叫它老Xoblob商店。因此，他恢复了旧名字，并将名字改为Xoblob。"和橱窗里挂着的眼魔暴君没有关系！"他说。

地精出售各种小玩意儿。Xoblob以1d6金币的价格出售任何小饰品。

这个地精不知道Floon的名字，但他认出了他的描述。他不愿分享信息，但给他一个新的紫色物品或在DC 13魅力（恐吓或说服）检定中成功可以让他开口。他说Floon和一个穿着考究、外表和举止相似的人（瑞纳尔·奈沃兰波，尽管地精不知道他的名字，也没有认出他）在店外被穿着黑色皮甲的粗鲁男子袭击了。Xoblob认为有五名袭击者，但他们都不熟悉。其中一个人的脖子上有一个带翅膀的蛇的黑色纹身。

串烧龙面向一个位于Dock Ward的Net Street和Fillet Lane之间的巷子，离Old Xoblob Shop不远。

弗隆自从失踪的那个晚上之后就没有再来过"串烧龙"，这家破旧酒吧的码头工人顾客们不愿意与陌生人交谈。一贿赂或一次成功的 DC 13 魅力（威吓或说服）检定可以让他们开口。

一些常客记得几天前看到沃洛和弗伦一起喝酒。沃洛离开后，弗伦留下来足够长的时间会见另一个朋友：瑞纳尔·奈沃兰波，深水城前开放领主达古尔特·尼维尔梅尔的儿子。"真是一个模子刻出来的！"一个顾客嘲笑道。"又一个被宠坏的富贵族，喜欢在我们面前炫耀！"另一个人说。

他们两个喝酒并玩了几轮三龙牌局，然后在午夜前后离开。五个人跟着他们出去，酒馆里没有人知道之后发生了什么。在Floon和Renaer离开后不久离开的那些人还没有回到酒馆，但他们被知道经常光顾Candle Lane上的一个仓库。"在门上寻找蛇的标记，"一个酒馆常客说。

蜡烛巷两旁的建筑物如此高大、如此紧密地挤在一起，以至于阳光只有在正午时分才能照到街道上。

闪烁的灯光来自于烛光巷上唯一完好无损的路灯，被一个不灭明焰法术保持点亮。路灯的正对面是一个仓库，灯光照亮的门把手上方画着一条黑色的翼蛇（散塔林会的象征）。与散塔林会有关联的角色会认出这个符号，而其他角色可以通过一个成功的DC 10智力检定回想起其意义。`,spotlightRefs:[],presentNpcIds:["npc_4b1","npc_4b2","npc_4d2","npc_4d9","npc_4e2"],availableInfoIds:["info_04a_g1","info_04a_g2","info_04a_g3","info_04a_g4","info_04a_g5"],encounterIds:["enc_04a"],treasureSlotIds:["trs_04a_0"],eventIds:["evt_04a_e1"],tone:"tension",_meta:{sourcePages:[21],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},readAloud:`你坐在一张坚固的木桌旁，桌上点着明亮燃烧的蜡烛，散落着已经清空食物的盘子和半空的酒杯。赌徒的叫喊声和醉酒冒险者唱着粗俗歌曲的声音几乎淹没了三张桌子外一个年轻吟游诗人走调的弹奏声。
然后所有的噪音都被一声大喊所掩盖："你这头猪！是不是想杀了我的同伴？"然后一个七尺高的半兽人被一个剃光头、头上布满眼睛形状纹身的男性的一记狂野挥拳击中。他身后站着四个人类，准备加入混战。半兽人咔咔作响地捏响指关节，咆哮着，向纹身的人扑去——但在你能看到是否流血之前，一群围观者聚集在斗殴周围。你该怎么办？

突然间，随着一个巨大的生物从酒吧中央的竖井爬出来，惊叫声响起——这是一个怪物，有着疣状的绿色皮肤、一团乱蓬蓬的黑色头发、一个长而胡萝卜形状的鼻子和充血的眼睛。当它露出黄色的牙齿并嚎叫时，你可以看到有六个蝙蝠样的生物附着在它的身体上，还有三个像苍蝇一样在它上方盘旋。酒吧里的每个人都感到恐惧，除了酒吧老板 杜尔南，他大喊：'巨魔！'

接近你们的人物抚摸着他的胡子，调整他的软帽，拉紧他的围巾。"Volothamp Geddarm，编年史家，法师，名人，为您服务。我相信你们已经注意到了我们美丽城市在过去几天里的暴力事件。自从我上次访问博德之门以来，我还没有见过这么多血迹！但现在我担心我在这可憎的恶行中迷失了一个朋友。 "我的朋友名叫 福卢恩·布拉格玛。他美过智，我担心几天前晚上他选错了回家的路，被绑架了——或者更糟。如果你们同意尽快追踪他，我现在可以给你们每人十条龙（金币），当你们找到 Floon 时，我还可以给每人十倍于此的报酬。在我需要帮助的时候，你们能帮我吗？"

当你转过一个街角，发现自己来到了一条被城市守卫封锁的街道。躺在鹅卵石上的是半打尸体，显然是某种可怕小规模战斗的受害者。守卫官员已经解除了三个血迹斑斑的人的武装并将其逮捕，目前正在询问目击者。其中一位官员看到了你。"走吧，"她说。"这里没什么好看的。"

高大、密集的公寓楼使得大部分社区在地面层都处于阴影中。大多数路灯的玻璃都被砸碎，蜡烛也被偷走了，当你经过一排排破旧的建筑物时，盐空气和粪便的气味依然弥漫。

附近的一家商店与其他店铺截然不同。它有一个深紫色的立面，在窗户里挂着一个填充的巨眼怪。门上方挂着一个招牌，上面用繁复的字母拼出"老Xoblob商店"。

当你窥视店内时，一阵薰衣草香气的紫色烟雾从店门飘出。每面墙都被漆成紫色，架子上每件落满灰尘的小饰品都被染成深紫罗兰色。那位盘腿坐在柜台上的无毛老地精穿着梅子色的长袍，脸颊上画着九只紫色的眼睛图案。 侏儒放下烟斗，呼出一团薰衣草色的烟雾，然后举起手。"欢迎光临！来浏览世界上最奇特的古董店的货架吧！"

被串刺的龙看起来像是一座废墟。它的两个面向前方的窗户都被砸碎了，一个船锚卡在屋顶上。透过窗户，你可以看到一群疲惫的顾客在喝着巨大的酒杯。

黑暗笼罩着一条狭窄的巷子，它像地牢一样黑暗——而且气味也像。几乎所有的路灯都被砸碎了。唯一穿透黑暗的光线是远处小巷传来的微弱闪烁，就像远处的蜡烛。`,dmGuidance:`当角色们在打哈欠门户的酒吧放松时，一场斗殴爆发了。
如果角色选择加入混战，请每个人进行先攻骰。
如果角色们帮助了她，Yagra会感谢他们，但会对他们干涉战斗感到失望。
如果角色们没有介入这场斗殴，雅格拉将克伦兹打得不省人事，但随后被他的同伴们打得昏迷。
如果角色们决定四处看看，"搜索码头区"让他们对周围环境有所感受，他们可能会发现一个奇怪的地方，"老Xoblob商店"，值得进一步探索。
当角色们穿越 Dock Ward 时，他们遇到了 Xanathar 公会和 散塔林会 之间血腥冲突的后果：
见附录 B），很可能会被控以谋杀罪。
如果角色们去查看商店，请继续阅读'Old Xoblob Shop'。
当角色们进入时，他们很快感受到了这个地方的奇异之处：
当角色们在货架上搜寻时，请参考玩家手册第五章中的饰品表进行掷骰，以确定吸引他们目光的物品。
当角色们接近它时，阅读：`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_063",locationId:"loc_063",name:"散塔林会 藏身之地",activation:{condition:{type:"always"},priority:0},skeleton:["城堡巷的藏身之处（见地图1.1）是一个破旧的两层仓库。","黑网在深水城像这样的破败建筑中还有其他避难所（这意味着这个地方的平面图可以重复用于其他渣尔塔姆藏身点）。","仓库位于一个高墙后面的外院后方。","围墙上的门没有上锁。","建筑物的三个入口——一扇前门、一扇大型仓库装卸门和一扇被油漆覆盖的窗户——都被锁上了。"],flesh:`城堡巷的藏身之处（见地图1.1）是一个破旧的两层仓库。黑网在深水城像这样的破败建筑中还有其他避难所（这意味着这个地方的平面图可以重复用于其他渣尔塔姆藏身点）。

仓库位于一个高墙后面的外院后方。围墙上的门没有上锁。建筑物的三个入口——一扇前门、一扇大型仓库装卸门和一扇被油漆覆盖的窗户——都被锁上了。前门上有一个可以从内部打开的滑动窥视孔。任何一扇门或窗户都可以通过使用盗贼工具成功进行DC 12敏捷检定来解锁，或者通过成功进行DC 10力量（运动）检定来强行打开。

敲门或窗户会提醒里面一群天狗有人来了。这些天狗赶紧躲在翻倒的家具后面，发出的喧闹声任何被动感知（感知）得分为16或更高的角色都能听到。这些天狗是Xanathar公会力量的残余，他们在五个散塔林会暴徒捕获瑞纳尔·奈沃兰波和福卢恩·布拉格玛并将他们带到这里之后，几乎杀害了仓库里的所有人。Floon被带走了，但Renaer设法通过隐藏而存活下来。现在，这位年轻的贵族正在试图找出如何溜过这些天狗，它们正在懒洋洋地在仓库里搜寻战利品，同时等待看是否有更多的Zhents出现。`,spotlightRefs:[],presentNpcIds:["npc_4d2","npc_4b2"],availableInfoIds:["info_04a_g4","info_063_g1","info_068_g1","info_068_g2","info_049_g1","info_049_g2","info_071_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_063_e1","evt_049_e1"],tone:"tension",_meta:{sourcePages:[24],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Hideout.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_064",locationId:"loc_063",name:"Z1. 主房间",activation:{condition:{type:"always"},priority:0},skeleton:["黑网的主要业务是招募、训练和装备雇佣兵。","装满武器、口粮、靴子、黑色制服和其他装备的板条箱填满了仓库。","悄悄进入的角色可以尝试让肯库措手不及。","桌子和椅子被随意地扔在地板上。","一打人的尸体躺在墙边，他们的刺剑和匕首散落在附近。"],flesh:`黑网的主要业务是招募、训练和装备雇佣兵。装满武器、口粮、靴子、黑色制服和其他装备的板条箱填满了仓库。

一名拥有盗贼工具的角色可以通过成功的 DC 10 敏捷检定撬开门锁或窗户。悄悄进入的角色可以尝试让肯库措手不及。

如果天狗没有隐藏，添加：

尸体属于五名人类散塔林会雇佣兵（也就是绑架弗伦和雷纳尔的人）和七名人类克萨瑟斯行会暴徒，他们全都穿着皮甲。每个散塔林会成员的脖子或前臂上都有一个黑色有翼蛇的纹身，其中一名克萨瑟斯行会成员的右手掌上有一个黑色的纹身，看起来像一个圆圈，圆周上有十个辐射状的轮辐（克萨瑟斯姗娜萨的标志）。

肯库会战斗直到其中两个被失能或被杀死，幸存的肯库会试图逃跑。一次成功的DC 10魅力（威吓）检定可以迫使被俘的肯库透露他们知道的信息。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_064_0","info_064_g1","info_06b_g1"],encounterIds:["enc_064"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[24],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:`桌子和椅子被随意地扔在地板上。一打人的尸体躺在墙边，他们的刺剑和匕首散落在附近。在区域的北侧，楼梯通向上方一个开放的楼层。

四只短小的禽类生物，有着长喙和黑色羽毛，从仓库中央的位置惊讶地看过来。每个都穿着带兜帽的斗篷，手持短剑。`,dmGuidance:`当角色们试图进入时，在阅读方框文本之前，确定里面的四个 天狗 是否意识到了他们的存在。
如果角色在进入前敲门或以其他方式宣布他们的到来，肯库会像上面描述的那样躲藏起来。`},{id:"scn_068",locationId:"loc_063",name:"Z2. 储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["这个后室的门松松地挂在断裂的铰链上。","狭窄的房间散发出浓重的酸鱼和醋味。","房间里堆满了废弃的绳索、帆布防水布和从破碎的木桶上裂开的木片。","瑞纳尔·奈沃兰波（见附录 B）就藏在这里，他已经从绳索的束缚中溜了出来。","角色们可以听到他在房间北端的防水布下传来的急促呼吸声。"],flesh:`这个后室的门松松地挂在断裂的铰链上。狭窄的房间散发出浓重的酸鱼和醋味。房间里堆满了废弃的绳索、帆布防水布和从破碎的木桶上裂开的木片。瑞纳尔·奈沃兰波（见附录 B）就藏在这里，他已经从绳索的束缚中溜了出来。角色们可以听到他在房间北端的防水布下传来的急促呼吸声。

雷纳尔没有携带武器。他身上沾满污垢，还残留着变质的腌鲱鱼的刺鼻气味，但他说话时仍然优雅而清晰，这与他贵族的教养相符。他的信任很容易获得，但一旦破裂就无法恢复。

在绑架的那个晚上，Renaer 担心 Floon 喝得太多，无法自己找到回家的路，于是提出护送他。当他们离开 Fillet Lane 向北走 Zastrow Street 时，被五个暴徒袭击了。

Renaer对于Floon被抓感到内疚，因为他相信（正确地）他们误将Floon当成了他。

如果一个角色问 Renaer 为什么 Zhents 绑架了他，他给出了以下真实的回答：`,spotlightRefs:[],presentNpcIds:["npc_4d2"],availableInfoIds:["info_068_g1","info_068_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[25],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:'"散塔林会认为我父亲在担任开放领主期间挪用了一大笔黄金，并且他把龙藏在了城市的某个地方。他们认为他们可以通过使用一个叫做Golorr之石的神器来找到它，这个神器直到最近还在Xanathar公会的手中。显然，有人偷走了它。Zhents认为我知道这一切的一些事情，但我并不知道。我和我父亲已经多年没有交谈了。"',dmGuidance:"如果角色们请求Renaer加入他们寻找Floon的行动，他同意这样做，并从仓库中死去的Zhents那里搜寻到一把匕首和一把刺剑来武装自己。",offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_06b",locationId:"loc_063",name:"Z3. 密室",activation:{condition:{type:"info_revealed",infoId:"info_06b_g1"},priority:10},skeleton:["当秘密门被打开时，角色们可以听到上方办公室里微弱的钟声 (Z5)。","渣尔塔姆在这里藏了两个木制板条箱。","第一个是从码头偷来的，里面装有四幅用皮革包裹的木框画。","这些画描绘了路斯坎、无冬城、银月城和博德之门的城市，每幅价值75金币。","第二个箱子是从高路上的商队那里偷来的，里面装有十五根重10磅的银条，虽然因腐蚀而变黑，但每根仍然价值50金币。"],flesh:`这个房间隐藏在一扇秘密门后，可以通过成功的 DC 15 感知（观察）检定发现。当秘密门被打开时，角色们可以听到上方办公室里微弱的钟声 (Z5)。

渣尔塔姆在这里藏了两个木制板条箱。第一个是从码头偷来的，里面装有四幅用皮革包裹的木框画。这些画描绘了路斯坎、无冬城、银月城和博德之门的城市，每幅价值75金币。

第二个箱子是从高路上的商队那里偷来的，里面装有十五根重10磅的银条，虽然因腐蚀而变黑，但每根仍然价值50金币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_06b_g1"],encounterIds:[],treasureSlotIds:["trs_06b_0"],eventIds:["evt_06b_e1"],tone:"exploration",_meta:{sourcePages:[26],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"}},{id:"scn_06d",locationId:"loc_063",name:"Z4. 阳台",activation:{condition:{type:"always"},priority:0},skeleton:["开阔的二楼堆满了板条箱，俯瞰着主仓库。","搜查箱子的角色会发现各种垃圾，包括被虫蛀的布匹、变质的橄榄油瓶，以及数百双木底凉鞋——这些去年夏天风靡一时，如今却已过时。","这些垃圾都没有价值。"],flesh:"开阔的二楼堆满了板条箱，俯瞰着主仓库。搜查箱子的角色会发现各种垃圾，包括被虫蛀的布匹、变质的橄榄油瓶，以及数百双木底凉鞋——这些去年夏天风靡一时，如今却已过时。这些垃圾都没有价值。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[26],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Zhent-Warehouse-Upper-Players.webp"}},{id:"scn_06e",locationId:"loc_063",name:"Z5. 办公室",activation:{condition:{type:"always"},priority:0},skeleton:["上层包含一套 Zhents 很少使用的办公室。","房间里有桌子、椅子和布满灰尘、挂满蛛网的空架子。","无害的老鼠在四处奔跑。","每个办公室门上方都安装着一个钢制报警铃。","这些铃铛通过电线与在Z3的秘密门相连，当那扇门被打开时，它们会大声响起。"],flesh:`上层包含一套 Zhents 很少使用的办公室。房间里有桌子、椅子和布满灰尘、挂满蛛网的空架子。无害的老鼠在四处奔跑。

每个办公室门上方都安装着一个钢制报警铃。这些铃铛通过电线与在Z3的秘密门相连，当那扇门被打开时，它们会大声响起。

一个搜索办公室的角色发现了一个未使用的 纸鸢（见 附录A）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_06e_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[26],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_0d2",locationId:"loc_063",name:"守卫到来",activation:{condition:{type:"always"},priority:0},skeleton:["爆炸发生20分钟后，一名名叫萨斯·克姆利的城市守卫军士（见附录 B）护送一名来自警觉法师和保护者秩序的成员，名叫巴尼布斯·阵风（见附录 B）前往犯罪现场。","从那时起，巴纳比斯默默地接管了调查工作，而军士克罗姆利指挥着一支由20名警察（老兵）组成的队伍，敲门询问当地居民。","在允许将尸体移走并送往当地神庙之前，巴纳比斯仔细检查了现场，并得出了以下结论，他更愿意保留这些信息，但可能会与警觉秩序的其他成员分享：","这个侏儒正在从三个武装追击者那里逃跑。","追赶侏儒的第三个人不在死者之中。"],flesh:`爆炸发生20分钟后，一名名叫萨斯·克姆利的城市守卫军士（见附录 B）护送一名来自警觉法师和保护者秩序的成员，名叫巴尼布斯·阵风（见附录 B）前往犯罪现场。从那时起，巴纳比斯默默地接管了调查工作，而军士克罗姆利指挥着一支由20名警察（老兵）组成的队伍，敲门询问当地居民。

在允许将尸体移走并送往当地神庙之前，巴纳比斯仔细检查了现场，并得出了以下结论，他更愿意保留这些信息，但可能会与警觉秩序的其他成员分享：

这个侏儒正在从三个武装追击者那里逃跑。追赶侏儒的第三个人不在死者之中。

这个侏儒和他的追击者正朝着巨魔头颅巷的酒馆移动（巴纳比斯很快就会意识到这是角色们的财产）。

侏儒和他的追击者都没有预见到爆炸的发生。

鉴于这些发现，巴纳比斯决定询问酒馆的所有者和居住者，军士克罗姆利作为见证人和保镖在他身边。具体来说，巴纳比斯想要弄清楚侏儒的身份以及是否有人认识他。角色们从未见过达拉卡尔，除非他们决定撒谎，否则他们提供的信息很少。

巴纳比斯和军士克罗姆利都不会急于下结论。他们俩都更倾向于在采取任何逮捕行动之前，拥有确凿的证据和可靠证人的证词。尽管由于角色们靠近犯罪现场而成为嫌疑人，但他们在光天化日之下如此接近自己的营业场所释放破坏性魔法，似乎也不太可能。因此，巴纳比斯并不打算占用他们太多时间。

巴尼巴斯和军士克朗利拒绝了角色们加入调查的请求。"那会给已经复杂的局势引入太多新变数，"巴尼巴斯皱着眉头回答。"相信守卫队，"克朗利不屑地补充道。那些看起来诚实可信的角色可以通过进行一次DC 15魅力（说服）检定来逼迫巴尼巴斯透露更多信息。成功时，他们会促使巴尼巴斯揭示他已经发现的信息，如上所述。`,spotlightRefs:[],presentNpcIds:["npc_4d4","npc_49b"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[44],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},mapGeometry:{imageRef:"adventure/WDH/Watch.webp"}},{id:"scn_071",locationId:"loc_063",name:"追踪弗伦",activation:{condition:{type:"always"},priority:0},skeleton:["此时，角色们很可能已经知道弗伦被误认为是 瑞纳尔·奈沃兰波 而被散塔林会成员绑架，并被带到了下水道的一个藏身处。","盖子很容易被抬起，露出一段通往下水道的梯子。","下水道没有自然光。","没有黑暗视觉的角色需要光源才能看见。","一股恶臭的水流沿着这条下水道隧道流动，它通向两个方向。"],flesh:`此时，角色们很可能已经知道弗伦被误认为是 瑞纳尔·奈沃兰波 而被散塔林会成员绑架，并被带到了下水道的一个藏身处。一次成功的 DC 15 智力（调查）检定或 5 金币的贿赂可以让角色们追踪绑架者的路径，通过后巷来到一个嵌入路面的圆形金属盖。盖子很容易被抬起，露出一段通往下水道的梯子。

下水道没有自然光。没有黑暗视觉的角色需要光源才能看见。

绑架Floon的Xanathar公会行动人员的藏身之处位于城市错综复杂的下水道深处。这些符号每几天就会被Xanathar公会或清洁工公会的成员擦除，但这些标记还没有被移除。

在到达 Xanathar 公会的藏身之处之前，角色们在下水道中遇到了：

一只敌对的 凝视者眼魔（见 附录 B），与当地 Xanathar 公会的老板 格鲁姆沙 有勾结，守卫着这个交叉路口。一旦角色们击败它，他们可以继续前进，沿着标记有粉笔符号的走廊走；在沿着正确的隧道走 5 分钟后，他们到达了藏身之处。

角色们爬上梯子并推开金属盖子，发现自己位于码头区的酒馆——喷鱼的地窖中。`,spotlightRefs:[],presentNpcIds:["npc_4d2","npc_4b4"],availableInfoIds:["info_071_g1","info_071_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[27],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},readAloud:`一股恶臭的水流沿着这条下水道隧道流动，它通向两个方向。在一个方向上，你看到墙上用黄色粉笔画着一个小小的符号：一个手掌大小的圆，圆周上有十个等距的辐条向外辐射。

在隧道中跟随标志一个小时后，你来到了一个三岔路口，那里有一个梯子通向一个顶部被圆形金属盖子封闭的石质通道。附近墙上标有一个熟悉的粉笔符号，符号附近浮动着一个球形的、葡萄柚大小的生物，它有一个凸起的中央眼睛和四条短粗的眼柄。它向你露出了牙齿。`,dmGuidance:`如果角色们没有从肯库那里得知弗伦被带往何处，向当地人询问可能会发现许多人看到他被拖走。
在角色们必须做出选择走哪个方向的每个地点，用黄色粉笔潦草地画着一个符号——一个姗娜萨的风格化表示——标记在正确的方向旁边的隧道上。`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_077",locationId:"loc_077",name:"Xanathar 公会藏身地",activation:{condition:{type:"always"},priority:0},skeleton:["Xanathar公会在深水城的下水道中设有多个藏身之处。","这个地方的平面图（见地图1.2）可以用于其他藏身之处。","这个藏身之处的头目是一个名叫格鲁姆沙的半兽人。","他展示折磨技巧的目的是为了给他的另一位客人留下深刻印象：一个名叫尼希卢尔的灵吸怪鲼（见附录 B）。","藏身之处的所有门都是未上锁的。"],flesh:`Xanathar公会在深水城的下水道中设有多个藏身之处。这个地方的平面图（见地图1.2）可以用于其他藏身之处。

这个藏身之处的头目是一个名叫格鲁姆沙的半兽人。他展示折磨技巧的目的是为了给他的另一位客人留下深刻印象：一个名叫尼希卢尔的灵吸怪鲼（见附录 B）。

藏身之处的所有门都是未上锁的。格鲁姆沙 假设只有那些有公会事务的人才能找得到这里。`,spotlightRefs:[],presentNpcIds:["npc_4b2","npc_4c4"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"当角色们到达时，格鲁姆沙正在Q7审问福卢恩·布拉格玛。"},{id:"scn_078",locationId:"loc_077",name:"Q1. 中央枢纽",activation:{condition:{type:"always"},priority:0},skeleton:["角色们从东边接近这个区域，艰难地穿过深达1尺的水和污水。","主要的下水道隧道扩展成一个圆形的枢纽，在其外墙上刻有一对箭缝，它们直接相对。","向北和向南各有两条通道继续延伸。","一扇石门嵌在西侧的石架的后墙上。","箭缝为哥布林提供了3。"],flesh:`角色们从东边接近这个区域，艰难地穿过深达1尺的水和污水。

箭缝为哥布林提供了3。

在隧道南墙的一扇暗门可以通过成功的 DC 15 感知（察觉）检定被发现。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_078_e1"],tone:"exploration",_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:"主要的下水道隧道扩展成一个圆形的枢纽，在其外墙上刻有一对箭缝，它们直接相对。向北和向南各有两条通道继续延伸。一扇石门嵌在西侧的石架的后墙上。",dmGuidance:"如果角色在这里大声说话或以其他方式发出很大声响，区域 Q2a 和 Q2b 的哥布林哨兵会醒来，并通过箭缝向他们射击。"},{id:"scn_07b",locationId:"loc_077",name:"Q2. 观察哨",activation:{condition:{type:"always"},priority:0},skeleton:["这里有两只 地精，分别位于 Q2a 和 Q2b。","它们是塞纳瑟公会的盟友，从地底城来到这里。","地精依赖黑暗视觉观察周围，并本应监视 Q1，但它俩都睡着了。","每个地精在一个小袋子里携带1d6铜币。"],flesh:`这里有两只 地精，分别位于 Q2a 和 Q2b。它们是塞纳瑟公会的盟友，从地底城来到这里。地精依赖黑暗视觉观察周围，并本应监视 Q1，但它俩都睡着了。成功通过一次 DC 9 敏捷（隐匿）检定的角色可以从这些睡着的地精身边悄悄溜过而不惊动它们。

每个地精在一个小袋子里携带1d6铜币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_07b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_07d",locationId:"loc_077",name:"Q3. 凌乱的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域的地板上散落着生锈的武器和破旧的衣物，这里充当着衣帽间和军械库的角色。","这里没有任何有价值的东西。"],flesh:"这个区域的地板上散落着生锈的武器和破旧的衣物，这里充当着衣帽间和军械库的角色。这里没有任何有价值的东西。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_07e",locationId:"loc_077",name:"Q4. 空置的睡眠区",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有六张破烂的、填充着稻草的床垫，没有价值。","如果 Q5 的居住者还没有被处理，角色们可以通过这两个房间之间的薄木门听到那个房间里的活动声。"],flesh:"这个房间有六张破烂的、填充着稻草的床垫，没有价值。如果 Q5 的居住者还没有被处理，角色们可以通过这两个房间之间的薄木门听到那个房间里的活动声。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_07f",locationId:"loc_077",name:"Q5. 睡眠区",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有六张破烂的、填充着稻草的床垫，还有一位 Xanathar 公会的敌对成员，一个名为 Zemk 的 灰矮人。","如果 Krentz（CE 人类 匪徒）在冒险开始的酒馆斗殴后从 Yawning Portal 逃脱了，他也在这里。","如果克伦茨在这里，他正试图解释泽姆克的方法行不通，并告诉他用毯子堵住门底部的缝隙。","除非闯入者制造很多噪音，否则他们都不会立即注意到入侵者。","一旦战斗开始，泽姆克会战斗到死。"],flesh:`这个房间有六张破烂的、填充着稻草的床垫，还有一位 Xanathar 公会的敌对成员，一个名为 Zemk 的 灰矮人。如果 Krentz（CE 人类 匪徒）在冒险开始的酒馆斗殴后从 Yawning Portal 逃脱了，他也在这里。

如果克伦茨在这里，他正试图解释泽姆克的方法行不通，并告诉他用毯子堵住门底部的缝隙。除非闯入者制造很多噪音，否则他们都不会立即注意到入侵者。

一旦战斗开始，泽姆克会战斗到死。克伦茨对冒险者的反应取决于他们之前如何对待他。如果他们帮助过他，他会给他们一个和平离开的机会，但如果他们拒绝撤退，他会和泽姆克并肩作战。如果灰矮人被杀，克伦茨会尽可能逃跑，或者在必要时投降。

Zemk 和 Krentz 都没有携带任何财宝。他们两个都向 格鲁姆沙（见 Q7）汇报。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_07f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"当角色们到达时，泽姆克正在用家具堵住通往Q6的门。"},{id:"scn_080",locationId:"loc_077",name:"Q6. 厕所",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的地板上有一个洞，通向一个粪坑。","一个灰泥怪从坑中出现并杀死了两个被派进房间处理它的地精。","地精的骨头在软泥怪的黏稠形态中漂浮，他们坑坑洼洼的武器散落在附近的地板上。","所有的装备都无法回收利用。"],flesh:"这个房间的地板上有一个洞，通向一个粪坑。一个灰泥怪从坑中出现并杀死了两个被派进房间处理它的地精。地精的骨头在软泥怪的黏稠形态中漂浮，他们坑坑洼洼的武器散落在附近的地板上。所有的装备都无法回收利用。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_081",locationId:"loc_077",name:"Q7. 老大战斗",activation:{condition:{type:"always"},priority:0},skeleton:["破旧的窗帘挂在长廊东墙上，一个肌肉发达的半兽人穿着脏兮兮的长袍，一只脚站在一个有着波浪状红金色头发的男性人类胸膛上。","火焰在兽人的紧握的拳头周围燃烧，他的受害者在他身下无助地哭泣和扭动。","坐在南方的高台上的是一个噩梦般的人物，穿着黑色长袍。","它有着巨大的白色眼睛和橡胶般的紫色皮肤，四只触手环绕着它非人类的嘴巴。","它怀抱着并轻轻抚摸着看起来像是一个有脚的离体大脑。"],flesh:`这个有触手的生物是尼希卢尔（见附录 B），一个正在抚摸一个噬脑怪的夺心魔。当看到冒险者时，尼希卢尔从石椅上站起来，放下它的宠物，并滑行穿过房间，打算通过西墙上的双扇门离开。这个灵吸怪期望格鲁姆沙和智力吞噬者掩护其逃跑。

尼希卢尔 携带着一个直径3英寸的石头球体，雕刻成类似眼魔眼柄末端可能看到的眼球形状。这个石头眼睛是激活 Q11 中魔法传送门的关键。灵吸怪使用它返回到 姗娜萨 的巢穴。它使用 支配怪物 来控制挡路的人，并将这些人转为对抗他们的盟友。

这个半兽人是格鲁姆沙，克萨瑟斯行会的一个低级老板。当他的手下把他们认为是瑞纳尔·奈沃兰波的人带回来时，这个半兽人请求尼希卢尔让他见证对俘虏的审讯，直到事后他才意识到他认错了囚犯的身份。格鲁姆沙为了挽回自己的名声而攻击角色们。他是一个学徒法师（见附录 B），有以下变化：

格鲁姆沙 是混乱邪恶。

他拥有以下种族特性：当生命值降至0点时，他的生命值反而降至1点（但在完成一次长休之前不能再这样做）。他具有60尺范围内的黑暗视觉。他说通用语和兽人语。

由于格鲁姆沙的折磨，福卢恩·布拉格玛（见附录 B）只剩下1点生命值。如果他被角色们治愈，他会永远感激，并以拥抱他们的方式来表达他的感激之情。他紧贴在他们身边，相信他们有能力保护他。如果雷纳尔与队伍在一起，他可以承担起保护弗伦的责任。

在一个小包里，格鲁姆沙携带着他的咒语书，其中包含以下咒语：燃烧之手、易容术、虚假生命、护盾术、隐形仆役和巫术箭。

在石椅后面藏着一个小巧的未上锁木箱，内含两瓶治疗药水，16金币，82银币，以及250铜币。`,spotlightRefs:[],presentNpcIds:["npc_4c4","npc_4e2","npc_4d2","npc_497","npc_4b2"],availableInfoIds:[],encounterIds:["enc_081"],treasureSlotIds:["trs_081_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:"破旧的窗帘挂在长廊东墙上，一个肌肉发达的半兽人穿着脏兮兮的长袍，一只脚站在一个有着波浪状红金色头发的男性人类胸膛上。火焰在兽人的紧握的拳头周围燃烧，他的受害者在他身下无助地哭泣和扭动。 坐在南方的高台上的是一个噩梦般的人物，穿着黑色长袍。它有着巨大的白色眼睛和橡胶般的紫色皮肤，四只触手环绕着它非人类的嘴巴。它怀抱着并轻轻抚摸着看起来像是一个有脚的离体大脑。"},{id:"scn_085",locationId:"loc_077",name:"Q8. 逃跑通道",activation:{condition:{type:"always"},priority:0},skeleton:["这个低矮的隧道向北通向了 Q9。"],flesh:"这个房间看起来是空的，但经过彻底的搜查，并结合一次成功的 DC 10 感知（察觉）检定，可以发现一块松动的石板下隐藏着一个粗凿的隧道。这个低矮的隧道向北通向了 Q9。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_085_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_086",locationId:"loc_077",name:"Q9. 私人酒窖",activation:{condition:{type:"info_revealed",infoId:"info_085_g1"},priority:10},skeleton:["一个无辜的半身人家庭，皮博迪一家，在Dock Ward的Fishgut Alley他们家的下面这个酒窖里酿造啤酒。","他们的酒窖里有酿造用品和许多无价值的杂物。","半身人们还没有注意到通往克萨瑟斯行会藏身之处的秘密隧道；","它隐藏在一块需要10点或更高力量值才能举起的大石板下。","得知秘密活板门的事情后，他们发誓要再次封住它，但如果有必要，他们允许角色们使用它。"],flesh:`一个无辜的半身人家庭，皮博迪一家，在Dock Ward的Fishgut Alley他们家的下面这个酒窖里酿造啤酒。他们的酒窖里有酿造用品和许多无价值的杂物。

半身人们还没有注意到通往克萨瑟斯行会藏身之处的秘密隧道；它隐藏在一块需要10点或更高力量值才能举起的大石板下。

得知秘密活板门的事情后，他们发誓要再次封住它，但如果有必要，他们允许角色们使用它。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"},dmGuidance:"如果角色们从酒窖出来并进入皮博迪家的小房子，这些半身人一开始会感到惊慌，但可以很容易地平静下来。"},{id:"scn_088",locationId:"loc_077",name:"Q10. 睡眠区",activation:{condition:{type:"always"},priority:0},skeleton:["地板上铺着稻草垫，墙上固定着生锈的镣铐。"],flesh:"地板上铺着稻草垫，墙上固定着生锈的镣铐。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_089",locationId:"loc_077",name:"Q11. 后门",activation:{condition:{type:"always"},priority:0},skeleton:["这个藏身之处包含一条通往姗娜萨的巢穴的秘密路线。","在这个本应空无一物的房间中央，有一根石柱，上面雕刻着一个小符号：一个完美的圆圈，有十个等距的辐条从其周长向外辐射。","在这个圆圈的中间是一个较小的圆形凹陷，它与无盖眼睛有几分相似。","如果将尼希卢尔拥有的石眼按入圆形凹槽，南墙上就会神奇地打开一扇不透明的黑色门。","这个开口高8尺，宽4尺。"],flesh:`这个藏身之处包含一条通往姗娜萨的巢穴的秘密路线。

如果将尼希卢尔拥有的石眼按入圆形凹槽，南墙上就会神奇地打开一扇不透明的黑色门。这个开口高8尺，宽4尺。任何通过它的生物都会出现X22在姗娜萨的巢穴中。这扇门是单向传送门，石眼从柱子上移开1分钟后门会再次关闭。

这扇秘密门对于从东边接近的任何人都是清晰可见的。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4c4"],availableInfoIds:["info_089_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_089_e1"],tone:"exploration",_meta:{sourcePages:[29],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:"在这个本应空无一物的房间中央，有一根石柱，上面雕刻着一个小符号：一个完美的圆圈，有十个等距的辐条从其周长向外辐射。在这个圆圈的中间是一个较小的圆形凹陷，它与无盖眼睛有几分相似。"},{id:"scn_08c",locationId:"loc_077",name:"Q12. 旅店地窖",activation:{condition:{type:"always"},priority:0},skeleton:["一条狭窄的通道通向位于Dock Ward香料街上一个半身人拥有的旅店的地窖。","中等体型的角色必须挤过去才能从隧道到达这个区域。",'这家旅店被"碎片回避者"（Shard Shunners）用作基地，这是一群半身人狼人组成的帮派。',"他们知道Xanathar公会的藏身之处，这两个帮派是不稳定的盟友。","Roscoe Underbough，一个处于混合形态的碎片回避者，守卫着地窖。"],flesh:`一条狭窄的通道通向位于Dock Ward香料街上一个半身人拥有的旅店的地窖。中等体型的角色必须挤过去才能从隧道到达这个区域。这家旅店被"碎片回避者"（Shard Shunners）用作基地，这是一群半身人狼人组成的帮派。他们知道Xanathar公会的藏身之处，这两个帮派是不稳定的盟友。

Roscoe Underbough，一个处于混合形态的碎片回避者，守卫着地窖。他藏在西北储藏室里，随时准备跳出来吓跑任何朝楼梯走去的人。Roscoe并不想犯下谋杀，他允许撤退的角色逃回下水道。他是一只鼠人，有以下变化：

Roscoe 体型小，有 27 (6d6 + 6) 点生命值。

他具有以下种族特征：他可以通过一个中等大小或更大的生物的空间移动。他在对抗恐慌的豁免检定中具有优势。他会说通用语和半身人语，并且他知道盗贼的暗号。

由于目前没有其他Shard Shunners在场，角色们会受到员工和顾客的热情欢迎，他们会指引角色们前往最近的澡堂。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_08c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[30],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果角色们击败了Roscoe或者悄悄地溜过他，他们可以进入旅店，这家旅店主要服务于半身人客户。"},{id:"scn_08e",locationId:"loc_077",name:"完成沃洛的请求",activation:{condition:{type:"encounter_cleared",encounterId:"enc_081"},priority:10},skeleton:["带着福卢恩·布拉格玛返回打哈欠门户标志着这个入门任务的结束。","剩下的就是让角色们领取他们的奖励。","沃洛独自在张口的门户里喝酒，焦急地等待弗伦命运的消息。","他一看到角色们和他的朋友，就立刻跳起来跑过去拥抱他们。",'"我承认，我手头的硬币不多。'],flesh:`带着福卢恩·布拉格玛返回打哈欠门户标志着这个入门任务的结束。剩下的就是让角色们领取他们的奖励。

沃洛独自在张口的门户里喝酒，焦急地等待弗伦命运的消息。他一看到角色们和他的朋友，就立刻跳起来跑过去拥抱他们。

这根管子里装着一份地契，是北区一栋历史建筑——巨颅庄园的所有权证书，角色们可以将其作为据点。这份地契经过了公证，看起来合法有效（因为它确实如此）。沃洛最近买下了这处房产，因为据说这里闹鬼，他希望调查此事能为他的下一本书《沃洛的鬼魂与幽灵指南》提供一个章节的素材。

简短的会议在Castle Ward的一个法院举行，时间是正午。Silmerhelve法官见证了契约的转移，使得新的所有权正式生效，她表现出对更重要事务的关注。她还会收取25金币的房产转让税，这通常由新业主支付。

沃洛、弗隆和雷纳尔都通过友情表达了他们的感激之情。弗隆对角色们的帮助有限，但与沃洛和雷纳尔的友谊有其好处。

沃洛知道最好的吃饭和寻找欢乐的地方。他还可以给角色们提供一次深水城之旅。

尽管Renaer与他富有且有权势的父亲关系疏远，但他仍然在高层有朋友，包括可以为角色提供帮助的竖琴手。`,spotlightRefs:[],presentNpcIds:["npc_4d2","npc_4c0","npc_4d1"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_08e_e1"],tone:"exploration",_meta:{sourcePages:[30],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；overlay覆写:activation"},readAloud:'"我承认，我手头的硬币不多。但永远不要说沃洛违背了诺言。请允许我提供一些更有价值的东西。" 他递出一个卷轴筒。"这是一份在深水城的非凡地产的契约！我们需要一位法官来见证所有权的转移。在你检查了房产并认为满意之后，我会安排与法官的会面。"',dmGuidance:`如果角色们让Volo与Floon团聚，Volo给了他们一个相当尴尬的表情，同时他解释他们的奖励：
如果角色们接受了他们的奖励，Volo安排了一个名为Kylinne Silmerhelve的提夫林法官的会面。
如果角色们负担不起这笔费用或者不想支付，并且他们已经和瑞纳尔·奈沃兰波成为朋友，他会确保Volo有一个装满硬币的小袋来支付这笔费用。
如果角色们需要偶尔请他们的新朋友帮忙，他们中的任何一个都乐意效劳。
如果角色们接受了他的提议，请与玩家分享第9章《沃洛的深水城手册》中的信息。
如果角色们希望与深水城的有影响力的人物见面，Renaer可以安排与米尔特、蕾米莉亚·港树（见附录 B中关于两者的信息）或几乎任何其他沃特德维安贵族的会面，只要他认为角色们会表现得体。`},{id:"scn_094",locationId:"loc_094",name:"巨魔颅骨巷",activation:{condition:{type:"always"},priority:0},skeleton:["屠龙巷充满了能够影响角色们在深水城日常生活中的人。","在冒险过程中，角色们很可能会多次回到屠龙巷，并随着时间的推移逐渐了解他们的邻居。","下面描述的地点在屠龙巷的地图上有标注。","地图上没有特别标识的建筑是排屋，它们作为私人住宅，供能够负担得起管家、园丁和保姆的上层中产阶级沃特迪普居民使用。","在这个冒险部分中，角色们应该通过参与派系任务、处理埃梅克·弗伦，或参与自我指导的活动来提升到3级。"],flesh:`屠龙巷充满了能够影响角色们在深水城日常生活中的人。在冒险过程中，角色们很可能会多次回到屠龙巷，并随着时间的推移逐渐了解他们的邻居。

下面描述的地点在屠龙巷的地图上有标注。地图上没有特别标识的建筑是排屋，它们作为私人住宅，供能够负担得起管家、园丁和保姆的上层中产阶级沃特迪普居民使用。

在这个冒险部分中，角色们应该通过参与派系任务、处理埃梅克·弗伦，或参与自我指导的活动来提升到3级。这段时间是角色们在巨魔头颅巷——乃至整个深水城——结交朋友和获得声誉（好或坏）的机会，然后第三章的事件将他们卷入一个更大的阴谋中。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_0a6_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_0a6_e1","evt_0a6_e2"],tone:"exploration",_meta:{sourcePages:[31],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：补章推进指引（本章目标=3级+据点+邻里关系，出口=第三章火球）。；overlay覆写:dmGuidanceAppend/_meta"},mapGeometry:{imageRef:"adventure/WDH/ChapterTwo.webp"},dmGuidance:"【本章去向】巨魔颅骨巷是角色的日常据点：与巷内七处邻居（T1 骷髅头庄园／T2 弯曲的钉子／T3 蒸汽与钢铁／T4 科瑞隆的王冠／T5 虎眼石／T6 书虫的宝藏／T7 污水管道入口）建立关系，安抚或摧毁客栈里的作祟幽灵利夫，接派系任务，并应对商业竞争对手埃梅克·弗伦的破坏。角色应在本章通过派系任务、处理埃梅克或自我指导的活动升到 3 级。巷内地点自由探索、不设先后序；唯一有前置的是「营业中？」——须角色着手翻修并以重新对公众开放为目标后才启用。当角色把这里当成家、邻里关系铺开之后，再让第三章的火球在巷子里炸响，把他们卷进更大的阴谋。"},{id:"scn_095",locationId:"loc_095",name:"巷内区域",activation:{condition:{type:"always"},priority:0},skeleton:["此处是「巷内区域」。"],flesh:"",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[31],confidence:"low",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_096",locationId:"loc_095",name:"T1. 骷髅头庄园",activation:{condition:{type:"always"},priority:0},skeleton:["参考《附录C》的传单，展示这座建筑的平面图。","这座废弃的建筑高四层，拥有阳台、塔楼和五个烟囱，是Trollskull Alley中最宏伟的建筑之一。","角色们可以重新装修、重建、重新命名，并以其他方式根据他们的喜好个性化他们的新要塞。","客栈的其他房间都是空的，除了蜘蛛网、灰尘和无害的老鼠。","这家前客栈被前酒吧老板的作祟幽灵（恶灵）所困扰，这位酒吧老板是一个名叫利夫的半精灵。"],flesh:`参考《附录C》的传单，展示这座建筑的平面图。

这座废弃的建筑高四层，拥有阳台、塔楼和五个烟囱，是Trollskull Alley中最宏伟的建筑之一。角色们可以重新装修、重建、重新命名，并以其他方式根据他们的喜好个性化他们的新要塞。

客栈的其他房间都是空的，除了蜘蛛网、灰尘和无害的老鼠。

这家前客栈被前酒吧老板的作祟幽灵（恶灵）所困扰，这位酒吧老板是一个名叫利夫的半精灵。维护这家客栈是他一生的工作，即使死后他也无法放弃这个地方。

这个作祟幽灵能理解通用语和精灵语，但它不能说话。它无形中以新主人为代价制造麻烦，比如打碎盘子、破坏啤酒桶等。"和"最后一杯！"）。为了真正将客栈据为己有，角色们必须要么安抚这个作祟幽灵，要么摧毁它。

一旦生意开始运营，利夫还可以执行其他有用的功能，比如锁门、扫地等。

如果利夫的作祟幽灵的生命值降至0，它就会被摧毁。如果遭到攻击，当它的生命值降至一半时，它会逃到塔楼的最高层。从那里它将战斗到底。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_096_g1","info_096_g2","info_0a6_g2"],encounterIds:["enc_096"],treasureSlotIds:[],eventIds:["evt_096_e1","evt_096_e2"],tone:"tension",_meta:{sourcePages:[31],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`当玩家的角色开始探索Trollskull Manor时，将这份传单的副本交给你的玩家。
当角色们第一次到达时，客栈的酒吧间里满是破损的家具、褪色的银器、已经变成醋的酒桶，以及无价值的杂物。
如果角色们没有领会到暗示，它会在布满灰尘的地板和油腻的窗户上写下不太微妙的警告（比如"打烊时间！
如果角色们致力于修复和翻新客栈，目标是再次向公众开放，作祟幽灵开始接受他们作为新的所有者，并逐渐变得非常乐于助人：当角色想要坐下时拉出一把椅子，倒一杯啤酒并递给角色，当人们从雨中进来时接过外套，等等。`},{id:"scn_09b",locationId:"loc_095",name:"T2. 弯曲的钉子",activation:{condition:{type:"always"},priority:0},skeleton:["这家商店的正门上方挂着一块小木牌，除了一根大弯曲的钉子伸出来外，别无他物。","前厅展示着华丽的木制家具，还有一系列弓和弩。","柜台后面的墙上排列着一排精美的木制手杖、长棍和盾牌。",'塔利索瓦纳 "塔莉" 费尔布兰奇，弯曲的钉子的主人和首席工匠，是一位男性半精灵木匠和木雕师。',"他是一个平民，有以下变化："],flesh:`这家商店的正门上方挂着一块小木牌，除了一根大弯曲的钉子伸出来外，别无他物。前厅展示着华丽的木制家具，还有一系列弓和弩。柜台后面的墙上排列着一排精美的木制手杖、长棍和盾牌。

塔利索瓦纳 "塔莉" 费尔布兰奇，弯曲的钉子的主人和首席工匠，是一位男性半精灵木匠和木雕师。他是一个平民，有以下变化：

塔利是混乱善良。

他具有以下种族特征：他在对抗魅惑的豁免检定中有优势，魔法不能让他入睡。他具有60尺范围内的黑暗视觉。他会说通用语和精灵语。

塔利以正常价格出售木制武器和盾牌。他还制作并出售家具和木雕。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[32],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_09d",locationId:"loc_095",name:"T3. 蒸汽与钢铁",activation:{condition:{type:"always"},priority:0},skeleton:["在白天，这家室内锻造厂的许多窗户中冒出烟雾和蒸汽，这里制造金属武器、盔甲和工具。","锻造厂由一对夫妇拥有和经营：一个名叫恩布里克的火元素裔和一个名叫阿维的水元素裔。","他们都是谨慎技能铁匠和金属锻造师最谨慎秩序的成员。","作为盔甲制造者，阿维还属于华丽盔甲制造者、锁匠和精细金属工艺师秩序。","恩布里克 负责锻造工作，是一位专业的武器制造师。"],flesh:`在白天，这家室内锻造厂的许多窗户中冒出烟雾和蒸汽，这里制造金属武器、盔甲和工具。锻造厂由一对夫妇拥有和经营：一个名叫恩布里克的火元素裔和一个名叫阿维的水元素裔。他们都是谨慎技能铁匠和金属锻造师最谨慎秩序的成员。作为盔甲制造者，阿维还属于华丽盔甲制造者、锁匠和精细金属工艺师秩序。

恩布里克 负责锻造工作，是一位专业的武器制造师。他自称是来自卡利姆沙的伊夫里特的后裔，并且情绪波动极端。他的具体数值与匪徒首领相同，但有以下变化：

恩布里克 是中立善良。

他拥有以下种族特质：他可以随意施放燃火术。（体质是他的施法属性，且他在法术攻击上拥有+4的命中加值。）他拥有60尺范围的黑暗视觉和火焰伤害抗性。他会说通用语和原初语。

阿维 崇拜和平之神Eldath，并使用他的魔法来淬炼炽热的钢铁。他是一位专业的盔甲制造师。阿维 性格随和，说话直白。他的具体数值与祭司相同，但有以下变化：

阿维 是中立善良。

他具有以下种族特征：他可以随意控制5尺立方体内水流的方向和形状，或者使水冻结长达1小时。他有30尺的游泳速度，并且可以呼吸空气和水。他对强酸伤害有抗性。他会说通用语和原始语。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[32],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"这对元素裔夫妻以正常价格出售列在玩家手册第5章中的所有金属武器、护甲和盾牌。"},{id:"scn_09f",locationId:"loc_095",name:"T4. 科瑞隆的王冠",activation:{condition:{type:"always"},priority:0},skeleton:["法拉·勒法利尔，一位草药师，药剂师和医师公会的成员，在这个庄严的三层城市住宅中经营，其三楼已经改造成了一个温室。","其半透明的玻璃墙让街上的任何人都可以看到里面盛开的花朵的彩虹。","法拉·勒法利尔 是一位外向的木精灵，有着长长的辫子头发。","和精灵神Corellon Larethian一样，Fala既不是男性也不是女性。",'如果被称为"他"或"她"，Fala会温柔地请求用名字或"他们"来称呼。'],flesh:`法拉·勒法利尔，一位草药师，药剂师和医师公会的成员，在这个庄严的三层城市住宅中经营，其三楼已经改造成了一个温室。其半透明的玻璃墙让街上的任何人都可以看到里面盛开的花朵的彩虹。

法拉·勒法利尔 是一位外向的木精灵，有着长长的辫子头发。和精灵神Corellon Larethian一样，Fala既不是男性也不是女性。如果被称为"他"或"她"，Fala会温柔地请求用名字或"他们"来称呼。Fala与一个名叫Ziraj的散塔林会成员是朋友，Ziraj曾经救过Fala的命。他不时地拜访Fala，Fala在二楼为他预留了一个房间。

法拉 是一位德鲁伊，有以下变化：

Fala是混乱善良。

Fala具有以下种族特征：Fala在对抗魅惑的豁免检定中有优势，魔法不能让Fala入睡。Fala的步行速度为35尺，并且具有60尺范围内的黑暗视觉。Fala会说通用语、德鲁伊语和精灵语。

除了非魔法草药疗法，法拉还出售法拉药水表中列出的药水类型。法拉在商店柜台后面的锁柜里，每种药水都存放了1d6瓶。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_09f_g1","info_0a6_g5"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[32],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_0a1",locationId:"loc_095",name:"T5. 虎眼石",activation:{condition:{type:"always"},priority:0},skeleton:["这家私人侦探的办公室外表毫不起眼，唯一的标志是一个橙黑色招牌，上面画着猫的眼睛。","里面是一个由闪烁的油灯昏暗照明的豪华公寓。","门是锁着的，访客必须敲门或按门铃才能被允许进入。","他们被文森特·特伦奇接待，他是一位人类侦探，也是虎眼石的主人。","他说话简洁，穿着一套笔挺的西装，抽着一根细长的烟斗。"],flesh:`这家私人侦探的办公室外表毫不起眼，唯一的标志是一个橙黑色招牌，上面画着猫的眼睛。里面是一个由闪烁的油灯昏暗照明的豪华公寓。门是锁着的，访客必须敲门或按门铃才能被允许进入。

他们被文森特·特伦奇接待，他是一位人类侦探，也是虎眼石的主人。他说话简洁，穿着一套笔挺的西装，抽着一根细长的烟斗。实际上，Vincent是一个名叫Valantajar的罗刹，总是在见访客之前对自己施放易容术。这个罗刹在深水城生活了多年，根据需要频繁更换身份，以隐藏其真实本性。它已经习惯了与凡人共处，并且，令它自己惊讶的是，它相当喜欢深水城及其市民。

Trench可以发现深水城的任何秘密，只需付费。在定价其服务时请使用您的判断力；50金币对于大多数调查来说已经足够，但如果角色们想要了解与本次冒险的主要反派相关的机密，这个罗刹可能需要以服务作为支付，例如杀死正在追捕它的敌人，在他们的客栈为其业务张贴广告，或者监视Vincent被雇佣来监视的人。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_0a1_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[32],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_0a3",locationId:"loc_095",name:"T6. 书虫的宝藏",activation:{condition:{type:"always"},priority:0},skeleton:["这家书店的正面装饰着一个迷人的招牌，上面画着一条金色的龙围绕着一堆宝藏——书籍和卷轴。","书店内部装饰着美丽的硬木，旧书的泥土气息弥漫在空气中。","这家图书馆占据了这座三层建筑的两层，而且它似乎包含了比建筑本身能够容纳的更多的书架。","这家商店由一位拥有金龙血统的矮小龙裔瑞莎尔 the Page-Turner管理，他住在三楼。","Rishaal是警惕法师和保护者秩序的成员，他是一位魔法师，有以下变化："],flesh:`这家书店的正面装饰着一个迷人的招牌，上面画着一条金色的龙围绕着一堆宝藏——书籍和卷轴。书店内部装饰着美丽的硬木，旧书的泥土气息弥漫在空气中。这家图书馆占据了这座三层建筑的两层，而且它似乎包含了比建筑本身能够容纳的更多的书架。

这家商店由一位拥有金龙血统的矮小龙裔瑞莎尔 the Page-Turner管理，他住在三楼。Rishaal是警惕法师和保护者秩序的成员，他是一位魔法师，有以下变化：

Rishaal是中立的。

他拥有以下种族特性：他可以使用他的动作呼出一股15英尺的火焰锥形（但在完成一次短休或长休之前无法再次使用）；锥形范围内的每个生物必须进行一次DC 10敏捷豁免检定，若豁免失败则受到2d6火焰伤害，若豁免成功则只受到一半伤害。他对火焰伤害具有抗性。他会说通用语、龙语、矮人语和精灵语。

这家商店包含各种书籍。此外，瑞莎尔拥有一小批咒语书，并允许法师们以"出售咒语表"中列出的价格从这些书中抄写咒语。他可以为这些咒语抄写任何卷轴，但这项服务的费用是列出价格的两倍。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[33],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_0a5",locationId:"loc_095",name:"T7. 污水管道入口",activation:{condition:{type:"always"},priority:0},skeleton:["在屠龙巷的东端，有一个可移动的金属栅栏覆盖着一个开口。","栅栏下面，一个梯子下降20尺进入深水城的下水道系统。"],flesh:"在屠龙巷的东端，有一个可移动的金属栅栏覆盖着一个开口。栅栏下面，一个梯子下降20尺进入深水城的下水道系统。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_0a5_e1"],tone:"exploration",_meta:{sourcePages:[33],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_0a6",locationId:"loc_095",name:"加入派系",activation:{condition:{type:"chapter_active",chapterId:"094"},priority:5},skeleton:["深水城开始流传着一群冒险家帮助了沃洛瑟姆·盖德姆并救出了瑞纳尔·奈沃兰波的消息。","几天之内，各个派系的代表开始接触这些角色并试图招募他们。","本书的引言描述了各个派系以及他们在招募成员时寻找的特质。","角色们不必都加入同一个派系，有些人可能根本不想加入任何派系。","一个属于派系的角色在从2级到5级每升一级时，都会获得一个任务。"],flesh:`深水城开始流传着一群冒险家帮助了沃洛瑟姆·盖德姆并救出了瑞纳尔·奈沃兰波的消息。几天之内，各个派系的代表开始接触这些角色并试图招募他们。本书的引言描述了各个派系以及他们在招募成员时寻找的特质。角色们不必都加入同一个派系，有些人可能根本不想加入任何派系。

一个属于派系的角色在从2级到5级每升一级时，都会获得一个任务。完成任务会增加该成员在派系中的声望。不属于该派系的其他角色也可以协助完成任务。属于除了领主联盟之外的其他派系的角色可以拒绝任务而不会产生后果。

每个派系都有一个代表，作为其主要联系人。这个NPC提供任务简报，并分发完成任务的有形奖励。声望的提升会迅速跟进。任务以及完成它们的方式在本节的表格中有所描述。您可以使用这些表格中的任务，或者用您自己创建的任务替换其中的任何一个。

如果任务失败，角色们可以在24小时后再次尝试，除非失败造成了无法再次尝试的情况。

如果有一个或多个角色是卓尔，贾拉索·班瑞会派他的三名副官——黑暗精灵枪手跟踪这些潜在的新成员，同时保持安全距离。菲尔莱科特·拉菲恩和克雷比格·马斯奇尔在夜间监视这些角色，而Soluun Xibrindas则在白天监视他们（并尽量避免暴露在阳光下）。有关这些副官的详细信息，请参阅附录 B。

被动感知（Perception）值为18或更高的角色在几天内会瞥见卓尔间谍，并且可以通过成功的DC 15 感知（Insight）检定，确认这些间谍特别关注卓尔一员的行动。

另一方面，如果角色们试图面对黑暗精灵间谍，他们会避免接触，但会留下一个黑色眼罩作为名片。第二天，贾拉索·班瑞（见附录 B）出现在聚会的总部，使用他的易容帽变成一个名叫J.B. Nevercott的服装商。在这个伪装下，他请求私下与他认为可能成为适合Bregan D'aerthe招募的黑暗精灵角色交谈。只有黑暗精灵会被认真考虑，但Jarlaxle不在乎他们是男性还是女性。作为测试，他为他们提供第一个任务。

贾拉克斯利是一个高超的演员，他从不放松警惕。即使角色们识破了他的真实身份，他也从不承认自己是除了他假装的身份之外的任何人。

翡翠联盟对那些寻求维护深水城平衡的角色（特别是自然的牧师、德鲁伊和游侠）感兴趣。任何这样的角色都会被一只白猫拜访，它以悦耳的男性声音传达以下信息：

这只猫是一只普通的动物，它被施加了动物信使法术。它在传递完邀请后迅速离开。

角色们在翡翠联盟的主要联系人是梅兰诺·费尔布兰奇，他是位于Kolat Towers南边一个街区的Phaulkonmere的友好但缺乏幽默感的园丁。Phaulkonmere由Tarm和Phaulkon贵族家族拥有。梅兰诺通过动物信使法术传递任务，并且喜欢使用猫和鸽子作为信使。他很快为新成员分配了第一个任务。

梅兰诺尔 是一位半精灵德鲁伊，有以下变化：

梅兰诺是混乱善良。

他具有以下种族特征：他在对抗魅惑的豁免检定中有优势，魔法不能让他入睡。他具有60尺范围内的黑暗视觉。他会说通用语和精灵语。

杰里斯是家族中目前唯一居住在福康米尔的成员，她以无实体的女性声音显现，别墅花园中的任何人都能听到她的声音。她提供了加入这个阵营的机会，并赋予每位新成员一个复原护咒。杰里斯还提供福康米尔作为阵营成员及其朋友的安全避难所。

在她的非实体状态下，杰瑞丝无法受到伤害。如果需要，杰瑞丝可以施展class=德鲁伊法术列表中的任何法术。她使用这些法术来保护她的庄园及其美丽的花园。翡翠结界的一名成员可以向杰瑞丝请求施展一个法术，如果该角色在结界中的声望等于或超过法术的等级，她很乐意这样做。

"竖琴手组织接触那些表现出作为间谍潜力的善良阵营的角色。其中一位角色收到了以下信息，写在一只纸鸢上（见附录A）："

随信附上整个团队观看提亚马特的陨落的门票，这是一部以巨人语演唱的歌剧，描述了恶龙女王在龙井的败北。

如果任何角色加入竖琴手组织，米尔特（见附录 B）将成为他们在整个冒险过程中的主要竖琴手联系人。

光歌剧院是一家位于城堡区的高端场所。接受邀请的角色将收到一枚带有新月内竖琴图案的银质徽章，以及他们的第一个任务（见竖琴手任务表）。米尔特还告诉他们，如果他们需要直接与他交谈，欢迎他们访问他在海区的庄园。

将城市和王国的安全置于个人利益之上的角色被邀请加入这个派系。潜在的新成员必须是深水城的居民。

角色们的主要联系人是加莱斯特·银鬃（见附录 B），他是一名向开放领主莱拉·银手汇报的现场特工。Jalester大部分时间都在打哈欠之门和其他冒险者常去的酒馆里。

Jalester为符合条件的人提供加入领主联盟的会员资格。成员们被期望以及时、专业的方式完成分配给他们的任何任务。拒绝接受或完成任务可能导致暂停或解雇。被暂停的联盟成员在暂停期结束之前不会收到任何联盟任务，而从联盟中被解雇则意味着失去会员资格以及在派系中的所有名望。

"护手骑士团寻找那些寻求以各种形式对抗邪恶的成员。信仰赫尔姆、托姆或提尔的冒险家特别受欢迎。"

宣誓仪式包括背诵一个誓言，誓言要找到并摧毁所有形式的邪恶。每个候选人在宣誓时都会佩戴一只银色护手（骑士团的象征）。仪式结束后，Savra会给新招募的人员分配他们的首个任务。

"贝拉布兰塔家族是沃特迪普的一个贵族家族，他们为狮鹫骑兵饲养狮鹫。Savra正试图通过服务于提尔来恢复她的荣誉，从而弥补她作为一个名为'嚎叫仇恨'的邪恶元素教派成员时所犯下的恶行。Savra的罪行与这次冒险无关，但你可以在《毁灭亲王》中了解更多关于她的过去。每当她有任务给角色们时，她都会亲自传达给他们。"

末日掠夺者试图联系邪恶倾向或道德模糊的角色。一条身上绑着羊皮纸的飞蛇在深夜拜访了一个角色。信息内容如下：

达维尔·星歌（见附录 B）是角色们在黑网中的主要联系人，至少最初是这样。在喝酒时，他分享了以下信息：

达维尔是一位退休的冒险家。他和他的冒险伙伴几年前加入了散塔林会。他们帮助有需要的人。（更具体地说，他们提供贷款、雇佣兵和其他服务。）

另一个黑网帮派最近潜入了这座城市，并试图接管Xanathar公会。他们失败了，引发了街头的战争。达维尔和他的同事们想要结束暴力并恢复和平。

达维尔向感兴趣的角色提供加入派系的会员资格，然后指派他们第一个任务（见散塔林会任务表）。随后的任务简报写在卷轴上，由飞蛇送达。

角色们继续接收任务，但任务来自塔什琳·雅菲拉（见附录 B）。角色们首次意识到这一变化是在他们收到下一个任务简报时，因为它是用不同的手写的。

到角色们见到她的时候，塔什琳已经了解到以下信息：

传言中叛变的扎哈塔姆派系的领袖是厄斯图尔·弗洛克辛，一个已知的黑网刺客。

已对乌尔斯特发出逮捕令，但他的当前下落不明。即使是魔法窥视也未能揭示他的位置。

对瑞纳尔·奈沃兰波的绑架失败不会让乌尔斯特感到满意。他可能会再次尝试。（塔什琳实际上并不相信这一点，但她知道雷纳尔与竖琴手有联系，并且可能会与角色们分享一些有趣的信息。）

在他被捕数周后，一旦深水城领主确信他和他的同伙对最近的暴力事件不负责任，达维尔就被释放了。`,spotlightRefs:[],presentNpcIds:["npc_4d2","npc_4b9","npc_4aa","npc_4c0","npc_4b7","npc_4ba","npc_4d9"],availableInfoIds:["info_0a6_g1","info_0a6_g2","info_0a6_g3","info_0a6_g4","info_0a6_g5"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[34],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文『深水城开始流传着一群冒险家帮助了沃洛瑟姆·盖德姆并救出了瑞纳尔·奈沃兰波的消息。几天之内，各个派系的代表开始接触这些角色』——派系招募是第二章开幕后的事，按 chapter_active 挂门；救出瑞纳尔（第一章）无对应 pack 条件形态，不发明。；overlay覆写:activation/_meta"},readAloud:`"对加入翡翠联盟感兴趣吗？来南城区的Phaulkonmere见我们。"

"Renaer告诉我们你是个不错的选择。他在海区的光歌剧院为你买了今晚的歌剧票。如果你感兴趣，请在中场休息时与米尔特会面。私人包厢C。入场需要正式着装。"

"想成为伟大事业的一部分吗？去Yawning Portal找达维尔·星歌谈谈。"`,dmGuidance:`如果队伍向城市守卫报告了黑暗精灵，贾拉克斯利将结束监视，并暂时切断与角色们的所有联系。
当角色们第一次到达福康米尔时，梅兰诺尔将他们介绍给了庄园的女主人：一位从贵族转变为半神、并被梅丽凯选中的杰里斯·福康。
如果角色们在歌剧中场休息时在私人包厢与米尔特会面，他会描述竖琴手组织并邀请符合条件的角色加入。
如果角色们确实去访问米尔特的庄园，有90会发现米尔特不在家，且无人应门。
如果队伍中有一或多个可能的招募对象，Savra Belabranta（NG女性Tethyrian人类骑士）会拜访角色们的住处，并邀请他们前往正义大厅，即提尔神庙（位于城堡区市场以西），在那里他们可以宣誓加入骑士团。
如果角色们寻找Davil，雅格拉·石拳（见"熟悉的面孔"），她会迎接他们并带领感兴趣的人到Yawning Portal酒吧中心的一张桌子，她的老板正手持饮料在那里等待。
当角色们为达维尔完成两个任务后，他被城市守卫逮捕，并在深水城城堡中等待深水城领主就黑网在城市的行动进行询问。
如果角色们想直接与塔什琳交谈，雅格拉可以安排在死者之城或其它安静的地方会面。`},{id:"scn_26b",locationId:"loc_095",name:"布雷甘·达特",activation:{condition:{type:"always"},priority:0},skeleton:["Jarlaxle在Xanathar公会中有一名间谍：顾问纳尔·泽布林达斯，他使用短讯术法术将情报传送给他的黑暗精灵同胞。","Bregan D'aerthe知道到达眼魔巢穴最安全的路线是Castle Ward下水道中的秘密楼梯。","任何属于这个派系的角色都可以从Jarlaxle或另一个来源获得这个信息。","他们的名字是Arannis Nur'zekk、Beldar Tlabbath、Rylvar Tlabbath和Draknafein Uriss。","他们的任务是帮助角色完成他们的任务，不惜一切代价。"],flesh:`Jarlaxle在Xanathar公会中有一名间谍：顾问纳尔·泽布林达斯，他使用短讯术法术将情报传送给他的黑暗精灵同胞。Bregan D'aerthe知道到达眼魔巢穴最安全的路线是Castle Ward下水道中的秘密楼梯。任何属于这个派系的角色都可以从Jarlaxle或另一个来源获得这个信息。

他们的名字是Arannis Nur'zekk、Beldar Tlabbath、Rylvar Tlabbath和Draknafein Uriss。他们的任务是帮助角色完成他们的任务，不惜一切代价。这些drow还有秘密命令，如果纳尔·泽布林达斯还活着，就杀死他，并取回Jarlaxle的持有袋（见X35）。如果您正在跟踪经验值，每个drow在冒险队伍中时将获得相等的经验值份额。`,spotlightRefs:[],presentNpcIds:["npc_4c2"],availableInfoIds:["info_26b_g1","info_26b_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[101],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:"如果队伍中至少有一名Bregan D'aerthe成员在派系中的声望达到4或以上，四名男性卓尔在楼梯顶部等待队伍。"},{id:"scn_26e",locationId:"loc_095",name:"翠绿闲庭",activation:{condition:{type:"always"},priority:0},skeleton:["翡翠联盟的成员可以通过与Phaulkonmere的Jeryth Phaulkon交谈得知姗娜萨的巢穴位置。","Jeryth告诉他们，她一直在派遣觉醒的老鼠进入下水道寻找眼魔的巢穴，并且他们最近在城堡区下水道发现了一条通往巢穴的秘密楼梯(X1)。","她让其中一只觉醒老鼠带领他们去那里。","这只老鼠的智力得分是10，并且能说通用语。"],flesh:"翡翠联盟的成员可以通过与Phaulkonmere的Jeryth Phaulkon交谈得知姗娜萨的巢穴位置。Jeryth告诉他们，她一直在派遣觉醒的老鼠进入下水道寻找眼魔的巢穴，并且他们最近在城堡区下水道发现了一条通往巢穴的秘密楼梯(X1)。她让其中一只觉醒老鼠带领他们去那里。这只老鼠的智力得分是10，并且能说通用语。",spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:["info_26e_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[102],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"}},{id:"scn_0ad",locationId:"loc_095",name:"Force Grey (灰手)",activation:{condition:{type:"always"},priority:0},skeleton:["黑杖，瓦婕拉·莎法尔（见附录 B），是瑞纳尔·奈沃兰波的朋友，他获救的消息很快就传到了她的耳朵。","她使用了一个短讯术法术，向其中一名角色传递了以下简短的信息：",'"我是瓦婕拉·莎法尔，黑杖。',"立刻来城堡区的黑杖塔。","带上你的朋友们。"],flesh:`黑杖，瓦婕拉·莎法尔（见附录 B），是瑞纳尔·奈沃兰波的朋友，他获救的消息很快就传到了她的耳朵。她使用了一个短讯术法术，向其中一名角色传递了以下简短的信息：

尽管Vajra的语气很坚持，但如果角色拒绝了她的邀请，她不会生气。一天后，她再次施放另一个短讯术法术，并联系队伍中的另一个成员。如果第二次还被拒绝，她将不会再联系这个队伍，直到角色们升级。

黑杖塔既是一座堡垒，也是一座法师培训学校。在这里，瓦婕拉·莎法尔守望着这座城市，并以黑杖的身份自居。短讯术法术是她与她的特工沟通的首选方式。

Vajra为角色们提供了加入灰手的会员资格，灰手是她指挥下的私人保安力量。她分发的任务旨在考验角色们的资源并测试他们对深水城的忠诚。完成这些任务的角色们将不会获得足够的声望加入Force Grey，但他们将获得一些有价值的东西：黑杖的赞助。Vajra继续对他们的冒险事业感兴趣，并在可能的情况下提供帮助。`,spotlightRefs:[],presentNpcIds:["npc_4db","npc_4d2"],availableInfoIds:["info_0ad_g1","info_0ad_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[36],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},readAloud:'"我是瓦婕拉·莎法尔，黑杖。立刻来城堡区的黑杖塔。带上你的朋友们。"'},{id:"scn_26c",locationId:"loc_095",name:"竖琴手",activation:{condition:{type:"always"},priority:0},skeleton:["属于竖琴手的角色可以接近米尔特（见附录 B），他知道姗娜萨的巢穴位置。","（作为深水城的领主之一，他曾多次与眼魔打交道。","米尔特 带领角色们来到城堡区下水道中的秘密楼梯(X1)。","他还告诉角色们姗娜萨有一条宠物鱼，并且对它保护得非常疯狂。","米尔特不会陪同冒险者，但他知道一个可能有帮助的秘密：索文·双须，姗娜萨的首席工程师，是一个竖琴手的情报员。"],flesh:`属于竖琴手的角色可以接近米尔特（见附录 B），他知道姗娜萨的巢穴位置。（作为深水城的领主之一，他曾多次与眼魔打交道。）

米尔特 带领角色们来到城堡区下水道中的秘密楼梯(X1)。他还告诉角色们姗娜萨有一条宠物鱼，并且对它保护得非常疯狂。

米尔特不会陪同冒险者，但他知道一个可能有帮助的秘密：索文·双须，姗娜萨的首席工程师，是一个竖琴手的情报员。米尔特与任何在竖琴手派系中声望达到4级或以上的角色分享这个秘密。`,spotlightRefs:[],presentNpcIds:["npc_4c0","npc_4e2","npc_4d7"],availableInfoIds:["info_26c_g1","info_26c_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[101],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:"当角色们准备下楼梯时，米尔特告诉他们姗娜萨与类人生物相处得不好，不会理所当然地信任他们，并且倾向于在不存在的地方想象阴谋。"},{id:"scn_26d",locationId:"loc_095",name:"领主联盟",activation:{condition:{type:"always"},priority:0},skeleton:["属于领主联盟的角色可以联系加莱斯特·银鬃（见附录 B）。","Jalester不知道姗娜萨的巢穴位置，但他可以从莱拉·银手那里获取详细信息。","掌握了信息之后，Jalester带领队伍来到城堡区下水道中的秘密楼梯(X1)。","如果一个或多个角色在领主联盟中的声望达到4级或以上，Jalester愿意加入队伍，一同进入姗娜萨的巢穴执行任务。","如果你在记录经验点数，Jalester作为冒险队伍成员时将获得等额的经验点数份额。"],flesh:`属于领主联盟的角色可以联系加莱斯特·银鬃（见附录 B）。Jalester不知道姗娜萨的巢穴位置，但他可以从莱拉·银手那里获取详细信息。

掌握了信息之后，Jalester带领队伍来到城堡区下水道中的秘密楼梯(X1)。

如果一个或多个角色在领主联盟中的声望达到4级或以上，Jalester愿意加入队伍，一同进入姗娜萨的巢穴执行任务。如果你在记录经验点数，Jalester作为冒险队伍成员时将获得等额的经验点数份额。`,spotlightRefs:[],presentNpcIds:["npc_4b7","npc_4e2","npc_4ba"],availableInfoIds:["info_26d_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[101],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:"当角色们准备下楼梯时，Jalester警告他们避免与偏执且不可预测的眼魔对抗。"},{id:"scn_255",locationId:"loc_095",name:"臂铠教团",activation:{condition:{type:"always"},priority:0},skeleton:["胡拉姆（见附录 B）到达并尽他所能地帮助角色们。","他和奥瑞纳克斯多年前就相识了，并且他们相处得很融洽。","奥瑞纳克斯喜欢这位僧侣，当角色们在胡拉姆面前与龙进行谈判时，他们在魅力（说服）检定上获得优势。"],flesh:"胡拉姆（见附录 B）到达并尽他所能地帮助角色们。他和奥瑞纳克斯多年前就相识了，并且他们相处得很融洽。奥瑞纳克斯喜欢这位僧侣，当角色们在胡拉姆面前与龙进行谈判时，他们在魅力（说服）检定上获得优势。",spotlightRefs:[],presentNpcIds:["npc_4b5","npc_498"],availableInfoIds:["info_255_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[98],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"}},{id:"scn_26f",locationId:"loc_095",name:"散塔林会",activation:{condition:{type:"always"},priority:0},skeleton:['属于散塔林会的成员可以联系位于张开门户（Yawning Portal）的雅格拉·石拳（见"熟悉的面孔"）。','她最近从一个醉酒多嘴且与Xanathar公会有联系的人那里得知了通往眼魔巢穴的"后门"。',"Yagra愿意带领他们前往Castle Ward下水道下的秘密楼梯（X1）。",'"相信我，"她说，"这比通过Undermountain和Skullport的路线更安全。',"否则，她祝愿他们好运并返回到张开门户。"],flesh:`属于散塔林会的成员可以联系位于张开门户（Yawning Portal）的雅格拉·石拳（见"熟悉的面孔"）。她最近从一个醉酒多嘴且与Xanathar公会有联系的人那里得知了通往眼魔巢穴的"后门"。Yagra愿意带领他们前往Castle Ward下水道下的秘密楼梯（X1）。"相信我，"她说，"这比通过Undermountain和Skullport的路线更安全。"

否则，她祝愿他们好运并返回到张开门户。如果你在记录经验点数，Yagra作为冒险队伍成员时将获得等额的经验点数份额。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_26f_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:"如果角色们承诺至少支付给她1000金币，Yagra将加入他们的下降之旅。"},{id:"scn_0bb",locationId:"loc_095",name:"营业中？",activation:{condition:{type:"event_fired",eventId:"evt_096_e2"},priority:10},skeleton:["墙壁和屋顶的修复需要得到木匠、屋顶工和抹灰工行会的批准和监督。","地窖和管道的翻新工作最好由地窖工和管道工行会来处理。","清洁的床单由洗衣工行会提供。","酒馆周围的街道由扫街工会和街头劳动者忠诚秩序维护。","肉类必须来自屠夫行会；"],flesh:`墙壁和屋顶的修复需要得到木匠、屋顶工和抹灰工行会的批准和监督。地窖和管道的翻新工作最好由地窖工和管道工行会来处理。清洁的床单由洗衣工行会提供。酒馆周围的街道由扫街工会和街头劳动者忠诚秩序维护。肉类必须来自屠夫行会；啤酒和葡萄酒来自酿酒师、蒸馏师和酿酒工行会；面包和糕点来自面包师行会。名单还在继续。

"酒馆经营开支"侧边栏列出了角色们必须支付的费用，以使他们的场所准备好营业，以及酒馆营业期间他们必须满足的持续义务。

一旦城市中众所周知，位于巨魔头颅巷的酒馆计划重新向公众开放，冒险家们就会收到对酒馆福祉感兴趣的行会代表的访问。这一节描述了其中一些代表。

旅馆老板协会

布罗克斯利（LG 男性强壮心半身人 平民）是一个悠闲守法的半身人，留着羊排胡和浓密的眉毛。在北城区，客栈和酒馆很少见，所以他经常来角色们的地方看看情况，并提供他的良好祝愿。客栈老板联盟的会费已包含在"酒馆经营费用"侧边栏中概述的常规费用里。

布罗克斯利一直相信这家酒馆闹鬼，很高兴再次看到活生生的灵魂在里面。虽然他哀叹作为九个孩子的父亲所承受的重担，但他很快指出，角色们持续遵守行会的规则和规章使他相当艰难的生活"稍微容易一些"。

酿酒师、蒸馏师和啤酒酿造师公会

哈蒙德（N男性Illuskan人类平民）不喜欢冒险家，但他喜欢他们的金币。这个矫揉造作、衣着考究的男人总是和一个年轻的抄写员，金妮（NG女性提夫林平民）在一起，金妮戴着眼镜，默默地在一本小本子上记录着哈蒙德说话时的笔记和对话。

哈蒙德喜欢在月中时顺便来告知角色们行会新推出的烈酒，并给他们一个清单，告诉他们哪些应该大力推广。为了测试他们合作意愿的程度，他批评他们目前的饮料选择，即使他之前卖给他们的就是那些商品。

屠夫公会

眼神空洞、下巴松弛的贾斯汀（NE 男性伊利斯坎人类 暴徒）在菲尔德区最艰苦的社区长大，身上的伤疤足以证明这一切。行会给他的工资不足以让他负担得起北城区的住所，去那个城市的部分让他心中充满了怨恨。他每月都会来到角色们的门前，为酒馆的储藏室送来一车切好的肉。尽管送货费用由行会的月费支付，贾斯汀总是要求一些额外的硬币作为他的服务费。"他让这个威胁悬在空中，然后离开。

警觉的法师与保护者秩序

乌尔科里亚（NG女性盾矮人大法师）用她的魔法保卫深水城的次数多到她自己都记不清。她被称为"石像鬼"，因为她的脸上总是带着一种让成人和孩子都感到害怕的怒容。没有人知道她住在哪里，但人们相信她住在地下，可能是城市最古老庄园之一下面的地窖或地牢。她使用传送术法术进出她的家，而且总是有她的构装盾卫在她身边。

鲜为人知的事实是，乌尔科里亚曾经拥有过巨魔头颅巷的酒馆。她把它卖给了一个盾矮人家庭，这个家庭后来遭遇了困难，又把它卖给了一个把酒馆变成了孤儿院的女人。"结果证明那是个巫婆，她煮孩子还吃他们，"乌尔科里亚回忆道。在随后的岁月里，这个房产又经过了几次转手。乌尔科里亚希望新的所有者能好好利用它。

无论何时乌尔科里亚穿过北城区，她都会在酒馆停下来喝一杯，并检查这个地方，而她的盾牌守卫则在外面等候。如果她不喜欢角色们对这个地方的打理，她会保留自己的批评。角色们可以雇佣她在这个场所施展守卫刻文，她每个收费300金币。

埃梅克·弗伦，一个粗鲁的北方人（NE 男性伊利斯坎 平民），最近试图购买巨魔头颅巷的酒馆，但被沃洛瑟姆·盖达姆出价更高而败北。由于这次失利，他在同一条巷子里买了一个更小、不那么引人注目的建筑，并将其改造成了一个酒吧，他称之为弗伦的酿造。如果你决定将埃梅克介绍为商业竞争对手，选择地图2.1上一个未标记的建筑作为酒吧。

埃梅克的家族在1451 DR年霍特诺火山爆发摧毁了他们在无冬城的财产后迁往深水城。家族通过在商贸区鞣制皮革勉强维持生计。埃梅克的父母去世后，他的姐妹们接管了生意并将他买断了。他本来就不喜欢这项工作，尤其是讨厌与剥皮工和鞣革工联盟打交道。

Emmek的财务状况不稳定，因为他已经将大部分财富投入到了最新的事业中。他还与两个公会产生了麻烦。首先，他试图通过自己修理屋顶来节省金钱，这违背了木工、屋顶工和灰泥工公会的规定。然后，他通过将一个矮人的胡须比作船上的藤壶，冒犯了酒窖和管道工公会的一名成员。

埃梅克希望他的酒吧成为北城区最成功的酒馆，并希望角色们的生意彻底失败。

埃梅克在某些类型的开支上非常吝啬，而在其他方面则挥霍无度。他倾向于在大型显眼的物品上花费很多，在小便利设施上则偷工减料。由于他现在没有太多钱可以挥霍，他破坏角色们生意的计划始于借款。

埃梅克从伊思崔德·霍恩（见附录 B）那里获得了150金币的贷款。他花费50金币雇佣了碎石逃避者，这是一群他过去曾有过不正当交易的半身人鼠人帮派。他付钱给这些半身人以阻碍角色们的努力，而他则疯狂地管理自己的生意。

四名帮派成员被指派与埃梅克合作：两个男性分别名为凯尔索·菲德尔维克和达舍·斯诺比德尔，以及两个女性分别名为达尼卡·菲德尔威克（Kelso的妹妹）和布琳·希尔托普尔。这些半身人是鼠人，有以下变化：

每只鼠人都是小型生物，拥有 27 (6d6 + 6) 点生命值。

它具有以下种族特性：它可以穿过中型或更大生物的空间。它在豁免检定中对抗恐慌时具有优势。它会说通用语和半身人语，并且它懂得盗贼密语。

埃梅克破坏竞争对手的策略以及实施该策略的后果在下面的表格中进行了总结。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_0bb_g1"],encounterIds:["enc_0bb"],treasureSlotIds:[],eventIds:["evt_0bb_e1","evt_0bb_e2"],tone:"tension",_meta:{sourcePages:[41],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：activation 前置有书面依据（重开酒馆的意图触发行会代表来访与竞争对手线）。；overlay覆写:activation/dmGuidanceAppend/_meta"},dmGuidance:`如果角色们打算修缮并重新开放位于巨魔头颅巷的酒馆，他们可以预期需要与各种行会打交道，没有这些行会的支持，生意很可能会失败。
如果角色们中没有人是行会成员，他强烈敦促他们加入"以避免进一步的骚扰"。
如果角色们不给他至少3金币的小费，他就会说："也许下次肉就会是你们认识的人。
【酒馆经营费用】这个侧边栏总结了与经营Trollskull Alley中的酒馆相关的一次性支付和持续费用，同时提供了规则以确定该业务赚取或损失多少硬币。
1000金币用于在12天内翻新酒馆
250金币用于行会执照和合同（预付）
每10天50金币用于维护和雇佣劳工的工资
每10天10金币用于所有其他行会费用
在每个十天的结束时，掷一次d100 + 10并参考城主指南第6章中的"经营业务"表格来确定酒馆是亏损还是盈利。如果角色在这十天内花费金币来推广业务，每花费1 gp，掷骰结果加1。如果角色有未支付的费用，每欠1 gp，掷骰结果减1。
【前置】本幕只有在角色着手修缮并打算重新开放酒馆之后才启用（evt_096_e2）：原文『如果角色们打算修缮并重新开放位于巨魔头颅巷的酒馆，他们可以预期需要与各种行会打交道』『一旦城市中众所周知，位于巨魔头颅巷的酒馆计划重新向公众开放，冒险家们就会收到对酒馆福祉感兴趣的行会代表的访问』。角色若始终不打算经营，行会代表与埃梅克的破坏线整条不发生。`},{id:"scn_0ca",locationId:"loc_0ca",name:"火球术",activation:{condition:{type:"always"},priority:0},skeleton:["Trollskull Alley的居民被一声巨响、窗户的震动和市民的尖叫声所震惊。","一个en=Fireball法术刚刚在街上爆炸，整个社区陷入了混乱。","当城市守卫、城市守卫队和魔法师与保护者警觉秩序的成员们冲向现场时，角色们有机会评估损失并进一步调查。","这一事件启动了主要情节，并使角色们与那些想要找到并认领Neverember勋爵隐藏的黄金的人发生了冲突。","火球在清晨早些时候爆炸，那时所有角色都在巨魔头颅庄园内。"],flesh:`Trollskull Alley的居民被一声巨响、窗户的震动和市民的尖叫声所震惊。一个en=Fireball法术刚刚在街上爆炸，整个社区陷入了混乱。当城市守卫、城市守卫队和魔法师与保护者警觉秩序的成员们冲向现场时，角色们有机会评估损失并进一步调查。这一事件启动了主要情节，并使角色们与那些想要找到并认领Neverember勋爵隐藏的黄金的人发生了冲突。

火球在清晨早些时候爆炸，那时所有角色都在巨魔头颅庄园内。请大声朗读以下文本以设定场景：

让玩家告诉你他们的角色在此时正在做什么，以及他们如何应对这次爆炸。那些想要猜测爆炸性质的人，可以通过一个成功的 DC 13 智力（奥术）检定，得出结论：有人刚刚在外面施放了一个 en=Fireball 法术。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_0ca_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[43],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},readAloud:"随着一声爆炸的巨响震动了巨魔头颅巷，窗户嘎嘎作响。烧焦的尸体和痛苦的尖叫声在空中飞过。从爆炸中冒出的浓密刺鼻的烟雾向外翻滚，爆炸似乎就发生在你的门外。",mapGeometry:{imageRef:"adventure/WDH/ChapterThree.webp"},dmGuidance:"本章从清晨的爆炸起步：先让每位玩家说明角色当时在做什么、如何反应，再把线索按三条路铺开——犯罪现场的尸体与三名目击者（scn_0d0 / scn_0d1）、屋顶上那个「没有线的木偶」通向海区的贡德神庙灵感之手之家（scn_0db）、以及瑞纳尔·奈沃兰波与竖琴手的关系网（scn_0ed）。三条路最终都指向北城区赛尔顿街的格拉尔洪德别墅（scn_0ef）。调查若卡住，可让私家侦探文森特·特伦奇（第2章 T5）或竖琴手一类友好派系有偿搭把手。格洛尔之石在本章不会落到角色手上：角色闯入别墅期间，格拉尔洪德夫人的秘偶已携石与一张目的地地图逃走，直接接上第4章的追踪。若角色自行破了火球案并影响了别墅事件的结局，本章结束时由 3 级升到 4 级。"},{id:"scn_0cc",locationId:"loc_0ca",name:"这里发生了什么？",activation:{condition:{type:"always"},priority:0},skeleton:["达拉卡尔，一个为达格特·尼维莫伯勋爵工作的岩石侏儒间谍，在前往拜访角色们的途中遭遇了火球爆炸，导致他和其他十人丧生。","这个侏儒很重要，因为他携带着格洛尔之石（见附录A）——找到尼维莫伯勋爵隐藏的金币储藏处的关键。","由于受到散塔林会代理、Xanathar公会和Bregan D'aerthe的追捕，达拉卡尔无法带着这件神器逃离深水城，所以他计划暂时将其托付给角色们，因为他相信那些曾经救出尼维莫伯勋爵儿子的人肯定能在他无法做到的地方保护好它。","到了这一章的事件发展到尾声时，格洛尔之石已经几次易手，角色们也对大局有了更多的了解——尽管他们仍然面临着漫长的追逐。","黑网的三名成员，包括扎哈塔姆刺客厄斯图尔·弗洛克辛（见附录 B），在即将抓住达拉卡尔时被爆炸波及。"],flesh:`达拉卡尔，一个为达格特·尼维莫伯勋爵工作的岩石侏儒间谍，在前往拜访角色们的途中遭遇了火球爆炸，导致他和其他十人丧生。这个侏儒很重要，因为他携带着格洛尔之石（见附录A）——找到尼维莫伯勋爵隐藏的金币储藏处的关键。由于受到散塔林会代理、Xanathar公会和Bregan D'aerthe的追捕，达拉卡尔无法带着这件神器逃离深水城，所以他计划暂时将其托付给角色们，因为他相信那些曾经救出尼维莫伯勋爵儿子的人肯定能在他无法做到的地方保护好它。

到了这一章的事件发展到尾声时，格洛尔之石已经几次易手，角色们也对大局有了更多的了解——尽管他们仍然面临着漫长的追逐。

黑网的三名成员，包括扎哈塔姆刺客厄斯图尔·弗洛克辛（见附录 B），在即将抓住达拉卡尔时被爆炸波及。三人中，只有乌尔斯特幸存。尽管他受伤了，但他还是能够在逃离现场之前从达拉卡尔的口袋里取出格洛尔之石。当其他生还者开始恢复意识时，乌尔斯特跌跌撞撞地穿过烟雾，最终回到了不远处的格拉尔洪德别墅。

格拉尔洪德贵族家族的首领，奥伦德和她的丈夫，雅拉·格劳洪德，正在为乌尔斯特和他的扎哈塔姆同伙提供金钱和庇护，作为交换，他们承诺将获得隐藏的金币储藏中的公平份额。但是格拉尔洪德家族并不愿意完全信任黑网；他们派出了自己的特工去跟踪扎哈塔姆成员，消除达拉卡尔，并代表他们获得格洛尔之石。雅拉给这位本该成为刺客的人一条火球项链，并指示了如何以及何时使用它。当达拉卡尔似乎可能会从厄斯图尔·弗洛克辛手中溜走时，这位特工投掷了项链上的一颗珠子来阻止侏儒的行动。

格拉尔洪德家族的刺客是一个秘偶（见附录 B），它一个月前从位于海港区的冈德神庙——启迪之手逃脱。这个构装生物搭了格拉尔洪德家族马车的便车。雅拉·格劳洪德与它成为朋友，为它提供庇护，并将其作为仆人使用，直到她和她的丈夫为它找到了一个更加阴险的用途。

火球事件已经使格拉尔洪德家族和黑网之间的联盟关系变得紧张。厄斯图尔·弗洛克辛拒绝交出格洛尔之石，直到他与他的秘密主人曼松交谈。与此同时，格拉尔洪德家族正在权衡背叛和在自己的家中谋杀乌尔斯特的风险。

在他们的调查中，角色们应该了解到是谁或者是什么施放了火球术法术（一个秘偶），为什么发起这次袭击（为了偷取格洛尔之石），以及这块石头被带到了哪里（Gralhund Villa）。如果调查陷入僵局，友好的NPC可能会主动提供帮助，以换取报酬。其中一位这样的人物是文森特·特伦奇，这位私家侦探，住在Trollskull Alley。角色们也可以咨询像竖琴手组织这样的友好派系。`,spotlightRefs:[],presentNpcIds:["npc_4d9","npc_4cb","npc_4e4","npc_4c6","npc_4bb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[43],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:"如果角色们的调查进展顺利，他们将在本章结束之前无意中闯入这个蛇窝。"},{id:"scn_0d0",locationId:"loc_0ca",name:"犯罪现场",activation:{condition:{type:"always"},priority:0},skeleton:["爆炸之后，人们从他们的房屋和商店中走出来，查看破坏情况。","火球没有点燃任何建筑物，但它造成了11人死亡：","一位出去散步的老年女性（没有人认出她）","两个披着斗篷的男性人类（散塔林会雇佣兵），穿着皮甲，腰间佩着长剑","两名女性人类和一个男性半精灵，穿着普通衣服（北城区富裕家庭的仆人，在跑腿时被杀）"],flesh:`爆炸之后，人们从他们的房屋和商店中走出来，查看破坏情况。火球没有点燃任何建筑物，但它造成了11人死亡：

一位出去散步的老年女性（没有人认出她）

两个披着斗篷的男性人类（散塔林会雇佣兵），穿着皮甲，腰间佩着长剑

两名女性人类和一个男性半精灵，穿着普通衣服（北城区富裕家庭的仆人，在跑腿时被杀）

一个男性侏儒（达拉卡尔），身穿烧焦的斗篷，紧握着一把匕首

两个正在演奏长笛和小提琴的女性半身人，以及两个正在跳舞的男性半身人

在城市卫队到达之前，角色们只有几分钟的时间来搜查犯罪现场。之后，他们不允许靠近尸体，尽管隐形和类似隐藏的角色可以进一步搜查犯罪现场。伴随成功的DC 15 感知 (观察) 检定搜查尸体会发现以下内容：

其中一个死去的男性人类右前臂上有一个黑色的、有翅膀的蛇（黑网的标志）纹身。

死去的侏儒的靴子和斗篷上沾有干燥的废物，这表明他最近曾在下水道中待过。他的身上还有一个袋子，里面装有五颗价值100金币的宝石。

一个角色可以尝试在不被NPC旁观者发现的情况下抢夺Dalakhar的袋子，这需要通过一个成功的DC 13敏捷（巧手）检定。如果检定失败，角色仍然能获得袋子，但有人会观察到这一偷窃行为并在城市守卫出现时报告给他们（见下文"守卫到来"）。这名偷窃的目击者可以通过贿赂50金币或更多来使其保持沉默。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_0d0_g1","info_0d0_g2","info_0d1_g4"],encounterIds:[],treasureSlotIds:["trs_0d0_0"],eventIds:["evt_0d0_e1"],tone:"exploration",_meta:{sourcePages:[44],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；overlay覆写:dmGuidanceAppend"},dmGuidance:"城市卫队到达前只有几分钟搜查时间；之后除隐形或以类似方式隐蔽的角色外，任何人不得靠近尸体。搜查尸体的关键发现走 DC 15 感知（察觉）。在旁观者眼皮底下摸走达拉卡尔的袋子需 DC 13 敏捷（巧手）；失败仍能拿到袋子，但会被人看见并在城市守卫到场时指认，这名目击者收 50 金币以上即闭嘴。十一名死者中另有一位无人认领的老妇、三名北城区富户的仆役和四名半身人乐手舞者。",offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_0d1",locationId:"loc_0ca",name:"爆炸之后",activation:{condition:{type:"always"},priority:0},skeleton:["在城市守卫到达并封锁巨魔头颅巷，每个入口处部署六名警卫们之前，角色们有几分钟时间检查犯罪现场。","守卫们不允许任何人进出，除非得到上级军官的许可。","火球爆炸后残留的烟雾还吸引了一名狮鹫骑兵骑手（见附录 B）。","当它的狮鹫坐骑在附近盘旋时，骑兵监视着街道和小巷中可疑的人物。","许多其他人目击了火球爆炸，但没有被爆炸波及。"],flesh:`在城市守卫到达并封锁巨魔头颅巷，每个入口处部署六名警卫们之前，角色们有几分钟时间检查犯罪现场。守卫们不允许任何人进出，除非得到上级军官的许可。另外六名警卫们，包括一名有18生命值的军士，前往犯罪现场，并守护尸体直到城市守卫到达。火球爆炸后残留的烟雾还吸引了一名狮鹫骑兵骑手（见附录 B）。当它的狮鹫坐骑在附近盘旋时，骑兵监视着街道和小巷中可疑的人物。

许多其他人目击了火球爆炸，但没有被爆炸波及。其中三人有重要信息要分享。任何至少花1分钟与他们交谈的角色都会了解到那个人看到或听到的事情。（不需要进行属性检定，因为目击者们急于交谈。）

法拉，Corellon's Crown的所有者，提供了以下信息：

Fala看到厄斯图尔·弗洛克辛带着格洛尔之石逃离现场。他在离开Trollskull Alley时绕过了Bent Nail。

一个生于富裕和特权家庭的水深人，Jezrynne 刚从虎眼（见第二章，T5）出来，她刚雇佣了文森特·特伦奇来监视她不忠的丈夫，这时她目睹了以下情况：

Jezrynne不知道是什么"木偶"投掷了火球。在混乱中，她失去了对那个东西的注意，不知道它去了哪里。

这个12岁的男孩目睹了他的半身人朋友在火焰中丧生。他没有看到更多，但在爆炸发生后，他找到了一些重要的东西：

Martem拿出了一条只剩下两个珠子并且扣环断裂的火球项链。当秘偶在屋顶上逃跑时，它不小心拽到了这条项链，项链脱落，掉到屋顶上，滑到边缘，最后落入了Martem旁边的雨水桶里。

他不知道该如何处理这个物品，但打算保留它。角色可以强行夺走它，或通过一次成功的 DC 8 魅力（威吓或说服）检定说服 Martem 放弃它。

角色如果隐瞒项链及其知识，不让城市守卫知道，在深水城是犯罪行为。妨碍司法公正通过隐藏证据可能导致高达200金币的罚款和长达十天的强制劳动。

死者被送往北城区的城市守卫站，并存放在地下室太平间。当地寺庙的牧师被请来对尸体施放遗体防腐法术，以在调查进行时保存它们。任何在Force Grey（灰手）、竖琴手、领主联盟、战旗秩序或散塔林会中拥有1点或更高名望的角色都可以请求他们派系的代表雇佣一位牧师对一个或多个死者施放死者交谈法术。

角色们可以通过向牧师的神庙捐赠至少25金币来雇佣一名牧师进行法术施放。他们还必须提供一份他们想要得到答案的问题清单。

如果提问得当，一个死者交谈法术可以从Dalakhar的尸体中探知以下部分或全部信息：

Dalakhar从一个被称为姗娜萨的眼魔的巢穴中偷走了一件名为格洛尔之石的神器，那个巢穴位于城市下方的深洞中。

Dalakhar为深水城的开放领主工作。（在这里他指的是Lord Dagult Neverember，他认为是合法的开放领主，而不是莱拉·银手。）

格洛尔之石是找到隐藏在城市中的龙类宝藏的关键。

Dalakhar听说了一群冒险家从散塔林会手中救出了Neverember勋爵的儿子，并认为格洛尔之石暂时在他们手中会是安全的。他正打算把它交给他们，并计划在摆脱追踪者后回来取回它。然后火球爆炸了。

通过对一名或两名死去的散塔林会雇佣兵施放死者交谈法术，可以得知以下信息：

他们的名字是Bashekk Ortallis和Wern Malkrave。他们为厄斯图尔·弗洛克辛工作，并居住在Gralhund Villa。

他们的工作是帮助抓捕一个名叫Dalakhar的侏儒。

Dalakhar拥有某种神器，根据厄斯图尔·弗洛克辛的说法，这将使他们变得像国王一样富有。`,spotlightRefs:[],presentNpcIds:["npc_4d9","npc_4c6","npc_4e2","npc_4ba"],availableInfoIds:["info_0d1_g1","info_0d1_g2","info_0d1_g3","info_0d1_g4","info_0d1_g5","info_0d1_g6","info_0d1_g7","info_0db_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[44],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；overlay覆写:dmGuidanceAppend"},readAloud:`"我在我店二楼的温室里给植物浇水时，爆炸震碎了一些窗户。幸运的是我没有受伤！透过烟雾，我看到一个披着斗篷的男人从一个死去的侏儒身上拿走了什么东西，然后开始一瘸一拐地离开。他严重烧伤，还不时回头看，好像担心有人跟踪他。他朝弯曲的钉子方向去了。"

"我告诉你，那不是人。更像是一个人形的木偶。一个没有线的木偶。它在屋顶上。它向下面的人群投掷了一些东西，引起了爆炸。我看见那些半身人活活烧死！我看见了！"

"爆炸刚发生后，我躲在一个雨水桶后面。然后我听到一声'扑通'，然后在桶里发现了这个。"`,dmGuidance:"封锁线为每个巷口六名警卫，另有六名警卫（含一名 18 生命值的军士）看守尸体，一名狮鹫骑兵在空中巡视——他们是执法方而非敌人，除非角色主动犯事，不要按遭遇处理。三名目击者急于开口，只要与其中任一人谈满 1 分钟即可获知其所见，无须任何属性检定。向城市守卫隐匿火球项链在深水城属妨碍司法，罚金可达 200 金币并强制劳动十天。",offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_0db",locationId:"loc_0ca",name:"尼姆的秘密",activation:{condition:{type:"always"},priority:0},skeleton:['询问Jezrynne Hornraven（见上文的"目击者"）的角色可以得到引发火球的生物的描述。',"它与奇迹日游行中有时会出现的自动机有着惊人的相似之处，任何在秋季生活在深水城的人都知道这一点。","因为奇迹日游行是由当地贡德神庙赞助的，角色们可能想要去神庙调查可能的联系。","灵感之手之家，深水城的贡德神庙，位于海防街和鲨鱼街的拐角处，在海区。","灵感之手之家看起来像是神庙和车间的结合体。"],flesh:`询问Jezrynne Hornraven（见上文的"目击者"）的角色可以得到引发火球的生物的描述。它与奇迹日游行中有时会出现的自动机有着惊人的相似之处，任何在秋季生活在深水城的人都知道这一点。因为奇迹日游行是由当地贡德神庙赞助的，角色们可能想要去神庙调查可能的联系。

灵感之手之家，深水城的贡德神庙，位于海防街和鲨鱼街的拐角处，在海区。

神庙顶上的生物是尼姆，一个秘偶（见附录 B）。尼姆是一位来访的拉塔尼巫师赠送给神庙的礼物，并且一直在偷偷地创造自己的发明。其中一个发明就是在巨魔头骨巷引爆火球的灵巧构装体。另一个不那么危险的发明，一只机械麻雀，正意外地与队伍发生碰撞。

让角色们掷先攻。尼姆的机械鸟在先攻值10时行动，拥有60尺的飞行速度，并起始于距离角色们60尺处。它拥有AC 15、1点生命值，且免疫毒素和心灵伤害。在它的回合中，它会随机飞向一名队伍成员并对其发动一次近战武器攻击（+0命中）。命中时，这只鸟会造成2（1d3）点穿刺伤害，因为它以惊人的力场撞击该角色。失手时，它会坠毁。无论哪种情况，它都会在撞击时被摧毁。

袭击之后，尼姆通过屋顶的一个秘密舱口退入神庙的阁楼，并保持低调，希望角色们不要将事件报告给神庙的侍僧。

贡德神庙在白天开放，活动繁忙，从日落到日出关闭。晚上，侍僧们退回到他们的私人房间，忙于自己的小项目。

神庙的主厅摆放着两打大理石基座。每一个基座上都展示着获奖的发明或某些其他非凡创造的微型模型。在这些展品中，有几个特别引人注目：

一个4尺高的钟楼工作模型，每小时顶部都会敲响。它由木头、铁、青铜和玻璃制成，配有黄铜钟和由纯金制成的精致指针。

一架木制飞行器，当它升空时翅膀会拍打。

一个机械龙龟的微型模型，其基座上固定着一块铜牌，上面写着：'大喷气。1363年奇迹日，在深水港沉没。'

一个功能性的"唤醒头盔"，配备有小型、可动的金属臂和手，如果佩戴者打瞌睡，它们会轻轻地拍打佩戴者。

一个红色潜艇的微型模型，形状像魔鬼鱼，底座上固定着一个黄铜牌，上面写着："赤红的马彭诺斯"。拉塔尼潜水艇。于1489 DR下水的。"

角色们遇到了瓦莱塔，一位青铜龙血统的龙裔祭司，具有以下变化：

瓦莱塔 是中立的。

她拥有这些种族特性：她可以使用她的动作呼出一道5英尺宽、30英尺长的闪电线（但在完成一次短休或长休前无法再次使用）；线上的每个生物必须进行一次DC 11敏捷豁免，豁免失败则受到2d6点闪电伤害，豁免成功则受到一半伤害。她对闪电伤害有抗性。她会说通用语和龙语。

如果他们描述了涉及机械鸟的事件，瓦莱塔 会叹口气，并带领他们走上螺旋楼梯，来到尼姆用作巢穴的阁楼——却发现阁楼的门安装了一把新锁。瓦莱塔 不认识这把锁，也没有钥匙来打开它，但一个使用盗贼工具的角色可以通过成功的DC 20敏捷检定撬开锁。敲击术法术或类似的魔法也可以打开这扇门。瓦莱塔 不会允许角色们强行破门，但她允许他们通过门与尼姆交谈。一个角色可以通过成功的DC 17魅力（说服）检定说服尼姆打开门。瓦莱塔 会通过强烈敦促尼姆配合，为该检定提供优势。

尼姆能理解通用语但不能说话。它发展了一种简单的手语，瓦莱塔 和神庙其他工作人员能理解。鸟的事件之后，尼姆藏在巢穴的杂物中，但如果角色们找到进入的方法或说服它开门，它会出来。但随后尼姆的创造物在一个月前因困惑和恐惧而逃走，尼姆自此就再也没有看到它。鉴于这一发现，瓦莱塔 愤怒地命令侍僧从阁楼中移走尼姆的工具和未完成的发明，同时她强迫尼姆观看。

搜索尼姆的阁楼或在清理时观察该区域的角色可以发现一个1英尺长的铜制装置，一端有一个类似伞状的金属突起。侦测魔法法术会揭示其周围有预言魔法的光环。如果被问及此事，尼姆会告诉秘偶，它建造这个设备是为了寻找走失的瓦莱塔并试图找到它，结果却发现尼姆无法离开寺庙的地面。一旦尼姆解释了敏捷构造体探测器的工作原理，瓦莱塔便允许角色们带走它。要启动敏捷构造体探测器，角色必须按住它的触发器。当激活的设备进入距离非尼姆的敏捷构造体500英尺范围内时，伞状物开始旋转、嗡嗡作响并发出咔嗒声。随着与目标距离的减小，旋转、嗡嗡声和咔嗒声会加速，当非尼姆的敏捷构造体在设备30英尺范围内时达到最大速度和音量。

如果他们带着摧毁的证据回来，瓦莱塔会确保他们收到承诺的奖励，并且还提供给他们每人以下非魔法发明中的一个：

高跷穿脱需要1分钟。它们可以使任何穿着它们的类人生物的身高增加2到5尺。每个高跷重8磅，完全折叠时长1尺。

穿戴这件装备的人形生物可以在坠落时作为反应动作部署降落伞，或者在其他时候作为动作部署。降落伞需要至少一个10尺的立方体空间来部署，并且它打开的速度不足以减缓少于60尺的坠落。如果它有足够的时间和空间正确部署，降落伞可以让它穿戴者安全着陆，不承受坠落伤害。一旦使用过，降落伞需要10分钟重新打包。

这个金属立方体，每边6英寸，顶部有一个曲柄。使用动作来上发条可以激活箱子8小时。在激活状态下，只要箱子和振动源接触相同的地面或物质，它就会在检测到15尺内的振动时吠叫。箱子一侧的开关可以设置设备发出小狗的吠叫或大狗的吠叫。

这个精美的木制烟斗的烟斗部分内置了一个由打火石制成的打火装置。通过几次轻敲这个装置，烟斗就能自行点燃。

配备有秘偶探测器，角色们可以搜索Nim逃跑的创造物。逐区搜索是最好的方法，但让玩家告诉你他们的角色如何进行搜索。根据他们去的地方，搜索可能需要几天时间。

一个骑乘狮鹫的角色可以在几个小时内完成全城范围的搜索。要确保使用狮鹫，角色必须是与萨夫拉·贝拉布兰塔关系良好的铁手套骑士团成员，或者是与加莱斯特·银鬃关系良好的领主联盟成员。碰巧，一只名叫碎骨者的年轻狮鹫正在接受训练，以作为狮鹫骑兵的坐骑。如果萨夫拉或贾莱斯特倾向于帮助队伍，角色们可以在第二天黎明后不久在河门外安排与狮鹫及其训练师见面。（狮鹫及其训练师通常居住在深水山山顶的峰顶鹰巢，但大多数平民不被允许进入那里。）要赢得碎骨者的信任，角色必须成功通过一个DC 16感知（动物驯养）检定。狮鹫不会允许任何检定失败的角色骑乘它。

尼姆的走失秘偶在北城区Saerdoun街上的Gralhund Villa里。然而，它并不是唯一一个在灵感之手之家外被发现的敏捷工匠。

扎尔多斯·佐德，海洋少女嘉年华的所有者，已经将他的三艘船带到了深水城。其中两艘大帆船，心碎者和地狱使者，已经停靠在码头。佐德的旗舰，抢眼人物，则停泊在深水港。这三艘船每艘都至少有一名灵巧构造体船员。

码头白天繁忙而混乱，冬天除外。夜晚，黑暗为角色提供了足够的掩护，使他们能够接近停泊的船只而不被发现。如果一个或多个角色在船上被抓，船员会试图将他们逼入绝境，直到船长能与他们对话。据说，那些灵活的自动偶只是"吸引人的摆设罢了"。

接受佐德邀请的角色们会通过小艇被送到他的旗舰上，由被魔法伪装成迷人人类的卓尔船员（见第七章以获取更多信息）欢迎上船，并被带到船长的餐厅舱（J10）：

这个风度翩翩的人物正是贾拉索·班瑞（见附录 B），他被魔法伪装成了扎多兹·佐德。

角色们激起了贾拉克西的好奇心。他目前对他们了解不多，并且想要判断他们是否构成威胁（他们不构成威胁）。为了赢得他们的好感，他在晚餐和品酒时分享了以下信息：

海妖集市由佐德拥有并运营，是一个以卢斯坎为基地，沿着剑海岸旅行的海上嘉年华。它以精彩的街头游行形式提供良好、健康的娱乐。

心碎者和地狱使者用于运输艺人、四轮货车和游行花车。抢眼人物是佐德的指挥舰和私人游艇。这三艘船都兼具舒适性与速度。

佐德大约每年访问一次遥远的兰塔尼斯岛。在他上次访问期间，他从一个兰塔尼斯法师那里购买了四个敏捷工匠。他在自己的旗舰上保留了两个，在其他两艘船上各保留了一个。

当他们不参加游行时，佐德的敏捷工匠们会留在他的船上。"他们完全无害，"他证实道，随即一个手持酒瓶的秘偶进入餐厅舱，静静地为每个人重新斟满酒杯。

他还假装对深水城的政治不感兴趣，说道："我想每个城市都有自己的问题。作为一名艺人，我的工作是让人们暂时忘记政治。" 对佐德有疑心的角色可以进行一次 DC 24 感知（洞察）检定。任何成功通过检定的角色都会察觉到，他绝非表面看起来那么简单。

贾拉克西拥有一顶易容帽，但在他登上他的任何一艘船时，他不需要它来隐藏他的真实形态。他的伪装（以及他的卓尔下属的伪装）只能通过摧毁船的船首像（见第七章）来解除。

晚餐结束后，Zord向角色们道别，并确保他们被安全护送回码头。

如果冒险团队中包括一个或多个黑暗精灵角色，Zord船长会密切关注他们的言行，但不会与对待其他团队成员有所不同。`,spotlightRefs:[],presentNpcIds:["npc_4c6","npc_4b7","npc_4b9"],availableInfoIds:["info_0db_g1","info_0db_g2","info_0db_g3","info_0db_g4","info_0db_g5","info_0db_g6"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_0db_e1"],tone:"tension",_meta:{sourcePages:[46],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},readAloud:`灵感之手之家看起来像是神庙和车间的结合体。贡德的标志，一个带有四个辐条的齿轮，被醒目地展示出来。你看到一个人形轮廓栖息在屋顶上。它伸出一只手臂，向天空释放了一只小型金属麻雀。这只鸟在空中做了几个圈，然后向右向你飞来。

餐厅舱装饰着金色的金银丝细工，紫色的窗帘上挂着丝质流苏，木制镶板散发着香水的味道。一场盛大的宴会摆放在精美的桃花心木桌上，上面铺满了金色的托盘。即使是桌布也是值得一看的艺术品。站在这一切后面，手持酒杯的是一个身材健美、衣着暴露的男子，他的猩红色服装设计用来突出他匀称的身材和浓密的胸毛。一把花哨的刺剑挂在他时髦的腰带上。 "欢迎登上抢眼者，"他露出洁白的牙齿说道。"扎多兹·佐德，为您效劳。"`,dmGuidance:`如果角色们访问神庙，他们会看到以下情景：
如果角色们提到在神殿屋顶上看到的身影，瓦莱塔 会认出那是尼姆（Nim），一个由拉坦酒巫师赠送神殿的秘偶。
如果角色们询问另一个敏捷工匠的情况，尼姆通过手势向瓦莱塔 承认，它建造了另一个敏捷工匠以减轻它的孤独感。
如果角色们想要自己追踪那个走失的秘偶，瓦莱塔表示灵感之手之家会支付他们500金币来摧毁它。
如果角色们决定搜索码头区，当敏捷工匠探测器进入港口一些船只的范围时，它开始嗡嗡作响。
如果角色要求与船队的主人交谈，会使用短讯术法术联系佐德，他邀请角色们与他一起在抢眼人物上共进晚餐。
如果角色们提到 格洛尔之石，佐德会耸耸肩，表示他不知道他们在说什么。
如果角色们以某种方式识破他的真实形态，贾拉克西会向队伍慢慢地点头，干巴巴地说"Bravo!"，然后让他们采取下一步行动。`,mapGeometry:{imageRef:"adventure/WDH/Nimblewright-Detector.webp"}},{id:"scn_0ed",locationId:"loc_0ca",name:"雷纳尔知道的事",activation:{condition:{type:"always"},priority:0},skeleton:['"当深水城的领主们驱逐了我的父亲，我以为他那漫长而黑暗的阴影终于永远消失了。',"事实是，我不想和他有任何瓜葛。","但他的间谍一直纠缠着我。","其中一个，一个名叫Dalakhar的侏儒，已经监视我好几个月了。","然后，大约二十天前，那个间谍突然消失了。"],flesh:"",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_0ed_0","info_0ed_g1","info_0ed_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[49],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},readAloud:'"当深水城的领主们驱逐了我的父亲，我以为他那漫长而黑暗的阴影终于永远消失了。事实是，我不想和他有任何瓜葛。但他的间谍一直纠缠着我。其中一个，一个名叫Dalakhar的侏儒，已经监视我好几个月了。然后，大约二十天前，那个间谍突然消失了。我父亲没有信任多少人，但他信任那个侏儒。" "我与达拉卡尔的几个朋友谈过。显然，他正在进行一个特殊任务来取回格洛尔之石，并且担心散塔林会和Xanathar公会快要抓到他了。当他听说我被绑架时，他想要更多关于救出我的冒险者的信息。我认为达拉卡尔计划付钱给你们，让你们把格洛尔之石交给我在无冬城的父亲。"',offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_0ef",locationId:"loc_0ef",name:"格拉伦德别墅",activation:{condition:{type:"or",clauses:[{type:"info_revealed",infoId:"info_0d1_g7"},{type:"info_revealed",infoId:"info_0ed_g2"},{type:"info_revealed",infoId:"info_0db_g5"}]},priority:10},skeleton:["在带着格洛尔之石逃离巨颅巷后，散塔林会刺客厄斯图尔·弗洛克辛返回格拉尔hund别墅，质问雅拉·格劳洪德为何派秘偶干涉他的任务。","格拉尔hund女士决定不再容忍厄斯图尔，并趁其受伤之际用剑逼他交出格洛尔之石，命令卫兵将其关押直至她决定如何处置。","您选择的主要反派决定了格拉尔洪德夫人的动机，这是她和她忠诚的半兽人保镖哈巴兹所保守的秘密：","如果姗娜萨是主要反派，雅拉·格劳洪德暗中与眼魔犯罪领主达成协议，承诺如果眼魔帮助她在蒙面领主议会中制造空缺，她将把格洛尔之石归还给它。","如果卡萨兰特家族是主要反派，雅拉是他们崇拜阿斯蒙蒂斯的邪教的媚俗成员，并打算将格洛尔之石交给他们，作为她忠诚和友谊的证明。"],flesh:`在带着格洛尔之石逃离巨颅巷后，散塔林会刺客厄斯图尔·弗洛克辛返回格拉尔hund别墅，质问雅拉·格劳洪德为何派秘偶干涉他的任务。格拉尔hund女士决定不再容忍厄斯图尔，并趁其受伤之际用剑逼他交出格洛尔之石，命令卫兵将其关押直至她决定如何处置。

您选择的主要反派决定了格拉尔洪德夫人的动机，这是她和她忠诚的半兽人保镖哈巴兹所保守的秘密：

如果姗娜萨是主要反派，雅拉·格劳洪德暗中与眼魔犯罪领主达成协议，承诺如果眼魔帮助她在蒙面领主议会中制造空缺，她将把格洛尔之石归还给它。

如果卡萨兰特家族是主要反派，雅拉是他们崇拜阿斯蒙蒂斯的邪教的媚俗成员，并打算将格洛尔之石交给他们，作为她忠诚和友谊的证明。

如果贾拉克西是主要反派，他和雅拉是秘密恋人。他承诺在利用内弗梅伯勋爵失去的宝藏购买卢斯坎进入领主联盟的途径后，帮助她在权力上崛起。

如果曼松是主要反派，他承诺如果Yalah允许将她的别墅用作他秘密计划的集结地，他就不会摧毁Yalah的家庭。相信厄斯图尔·弗洛克辛是为了自己的黄金，Yalah计划将Urstul排除在交易之外，亲自将格洛尔之石交给曼松。

乌尔斯图曾经严重误判并低估了格拉尔洪德夫人，他不会再犯同样的错误。尽管受伤，他还是设法杀死了两个疏忽的格拉尔洪德守卫，并提醒庄园里的其他Zhents，他们开始处理其他的守卫和仆人。乌尔斯图的目标是俘虏格拉尔洪德勋爵或夫人，迫使他们交出格洛尔之石，并将其交给他在科拉特塔（见第八章描述）的主人曼松。

Urstul的计划在他不知情的情况下落空了，当Gralhund女士命令她的秘偶将格洛尔之石带到别处。在混乱中，敏捷工匠逃离了庄园。

角色们必须谨慎行事，因为他们没有直接牵涉Gralhunds家族在Trollskull Alley袭击中的证据。他们两个基本的选择是与城市守卫分享他们所知道的，或者亲自去Gralhund别墅。

角色们可以去北城区的任何城市守卫站，向那里的警察报告他们所了解到的情况。不久之后，角色们收到了巴尼布斯·阵风和萨斯·克姆利（见附录 B）的访问，他们没有理由怀疑角色们在说谎。他们自己的调查证实了角色们所说的大部分内容。Barnibus以相当粗鲁的方式结束了会议，说：'感谢你们提供的信息。'Cromley补充说：'放心，我们很快就会解决这个案子。'

一位地方官给城市守卫提供了搜查格拉尔洪德别墅的许可。之后不久，克罗姆利独自拜访了角色们，并出于礼貌，告诉了他们发生了什么：

官员们到达现场，发现Gralhund勋爵处于昏迷状态，Gralhund女士处于震惊之中，而他们的半兽人保镖虽然浑身是血但仍然不屈不挠。

显然，格拉尔洪德一家被黑网的代理人扣为人质已经超过十天。在格拉尔洪德勋爵本人领导的一场血腥反抗中，大多数Zhents被杀。

Zhent领袖，厄斯图尔·弗洛克辛，是逃脱的人之一。他仍然在逃。守卫计划加强对他的搜捕。

至于敏捷工匠，没有发现任何迹象。据格拉尔洪德家族所说，这个构装生物几周前就被送到了格拉尔洪德别墅。家族收留了它，并没有意识到它是一个散塔林会间谍。格拉尔洪德夫人报告说，它偷走了她的火球项链。

Cromley对事件的总结是基于Gralhunds提供给城市守卫的信息，并且充满了谎言。人质情况、Gralhund勋爵的英雄行为以及Gralhund女士的火球项链被盗事件从未发生过。敏捷工匠与散塔林会的关系也是一个谎言。Gralhunds的叙述也没有解释为什么秘偶会使用火球项链对Zhents造成伤害，如果它与他们合作的话。

在未被邻居和路人发现或听到的情况下潜入或逃离别墅，每个角色都需要成功通过一次 DC 15 敏捷（潜行）检定。拥有潜行技能熟练项的角色可以选择在检定中承受劣势，以让另一名队友的检定获得优势（本质上是为了弥补一位不太擅长潜行的同伴）。

然而，如果他们开始提出太多问题，她的态度就会变得冷淡。她坚决否认她的家族与黑网有关，并声称Zhents家族扣押了她的人质（这是一个也被她的丈夫、保镖、孩子和工作人员重复的虚假声明）。

Gralhund别墅位于北城区一个上层阶级住宅区的中心。以下是一些需要记住的一般事实：

别墅周围的街道上，无论何时都有行人和马车在行驶，尽管白天的交通更为繁忙。

庄园被12英尺高的石墙包围，在没有攀爬装备或魔法的帮助下，需要通过一次成功的 DC 15 力量（运动）检定才能翻越。

邻居和旁观者如果听到从庄园传来的响亮且令人不安的噪音（例如 雷鸣波 法术）或者看到任何可疑情况，会通知城市警卫。警卫会派出一名 魔法师 和六名 老兵（一名 军士 和五名警员）进行调查，这股力量到达需要 1d6 + 4 分钟。

这座宅邸内所有的天花板高度为20尺。

以下遭遇地点，对应地图3.1，描述了当角色们首次到达时格拉尔洪德庄园的情况。Zhents已经占领了宅邸的楼下层；格拉尔洪德家族正在努力保卫楼上。`,spotlightRefs:[],presentNpcIds:["npc_4d9","npc_4e4","npc_4c6","npc_4b6","npc_4e2","npc_4bb","npc_49b","npc_4d4"],availableInfoIds:["info_0ef_g1","info_0ef_g2"],encounterIds:["enc_0ef"],treasureSlotIds:[],eventIds:["evt_0ef_e1"],tone:"tension",_meta:{sourcePages:[50],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation/dmGuidanceAppend"},dmGuidance:`如果角色提出这个问题，Cromley思考了一会儿，然后猜测敏捷工匠低估了项链的爆炸力。
如果角色们小心地将暴力行为归咎于Zhents，或者在城市守卫出现逮捕所有人之前能够不被发现地进入和离开，他们就可以无罪地闯入Gralhund别墅并质问其居民。
如果角色们在冲突中站在Gralhunds家族一边，Gralhund女士倾向于对他们的非法入侵视而不见。
如果角色们袭击任何家庭成员或挥舞武器试图恐吓，Gralhunds家族将向城市守卫报告该队伍的罪行。
在角色们入侵格拉尔洪德别墅期间，秘偶携带着格洛尔之石逃离了庄园（有关其目的地的更多信息，请参阅第四章）。
如果角色们正在使用尼姆的敏捷工匠探测器来追踪敏捷工匠，该设备会让他们知道敏捷工匠已经逃离了现场，但并未显示它逃走的方向。
角色手上没有任何直接指证格拉尔洪德家族的证据，两条基本走法都成立：把所知交给城市守卫（随后由萨斯·克姆利回访通报一套满是谎言的官方结论），或者自己进庄园。潜入与脱身各需一次 DC 15 敏捷（隐匿）检定才不被邻居与路人发现；有隐匿熟练的角色可自领劣势，换一名同伴的检定获得优势。邻居若听到雷鸣波一类巨响或看到可疑情况就会报官，1d6+4 分钟后到一名魔法师和六名警员（其中一名军士）——enc_0ef 就是这支响应部队，未惊动前不要投放。Zhents 已占据楼下，格拉尔洪德家丁在楼上死守。`},{id:"scn_0f5",locationId:"loc_0ef",name:"G1. 锁住的大门",activation:{condition:{type:"always"},priority:0},skeleton:["穿过一套华丽的铁门，角色们可以看到一个院子，院子里有几棵大树，还有两条小径，一条通往一座两层的砖砌别墅，另一条向东通往一个独立的马车房。","大门上施加了一道 秘法锁 法术。","该法术不会阻止格拉伦特家族的成员、他们的员工、他们的守卫或格拉伦特夫人的 秘偶 打开大门。"],flesh:`穿过一套华丽的铁门，角色们可以看到一个院子，院子里有几棵大树，还有两条小径，一条通往一座两层的砖砌别墅，另一条向东通往一个独立的马车房。

大门上施加了一道 秘法锁 法术。强行打开它们需要通过一次 DC 25 力量（运动）检定，而撬锁则需要使用盗贼工具并通过一次 DC 20 敏捷检定。该法术不会阻止格拉伦特家族的成员、他们的员工、他们的守卫或格拉伦特夫人的 秘偶 打开大门。`,spotlightRefs:[],presentNpcIds:["npc_4c6"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[52],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:"华丽铁门上有一道秘法锁：强行推开需 DC 25 力量（运动），撬锁需盗贼工具并过 DC 20 敏捷检定。该法术不阻挡格拉尔洪德家族成员、其雇员、其守卫，也不阻挡夫人的秘偶。庄园四周是 12 尺石墙，无攀爬装备或魔法时翻越需 DC 15 力量（运动）。"},{id:"scn_0f6",locationId:"loc_0ef",name:"G2. 院子",activation:{condition:{type:"always"},priority:0},skeleton:["这个庄园维护得很好。","在春季和夏季，大树提供了阴凉。","树木在秋天开始落叶。","到了冬天，它们的树枝变得光秃秃的。","穿过树林，角色们可以看到大别墅正门上方的一个大型阳台（G17），被铁栏杆围住。"],flesh:`这个庄园维护得很好。在春季和夏季，大树提供了阴凉。树木在秋天开始落叶。到了冬天，它们的树枝变得光秃秃的。

穿过树林，角色们可以看到大别墅正门上方的一个大型阳台（G17），被铁栏杆围住。阳台距离地面20英尺，在没有攀爬装备或魔法帮助的情况下，要攀爬别墅的砖墙到达这里，需要通过一个成功的DC 15力量（运动）检定。

这个院子由一个名叫赫夫·塔尔德里德（LE男性伊路斯坎人 邪教狂信者）的威胁性看管人照看，还有他的两只安静 獒犬。格拉伦德家族雇用了一名死灵法师对赫夫和他的獒犬进行了一个仪式。日落后，这些生物的实体形态会消失，变成三个 幽影，直到黎明。成功通过 DC 13敏捷（潜行）检定的人物可以穿越院子而不被察觉。否则，无论白天还是夜晚，赫夫和他的猎犬都会察觉到人物并发动攻击。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_0f6"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[52],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:"看管人赫夫·塔尔德里德（守序邪恶男性伊路斯坎人，用邪教狂信者数值）与两只獒犬受过死灵法师的仪式：日落到黎明之间，三者的实体形态消失，改按三只幽影行动，黎明复原——enc_0f6 列的是白昼形态，夜间请以幽影数值替换同样三个单位，不要两套同时投放。DC 13 敏捷（隐匿）可无声穿过院子；否则无论昼夜都会被发现并遭到攻击。穿过树木可以看到正门上方 20 尺处的阳台（G17），徒手攀爬砖墙需 DC 15 力量（运动）。"},{id:"scn_0f9",locationId:"loc_0ef",name:"G3. 马车房",activation:{condition:{type:"always"},priority:0},skeleton:["这座石制建筑内有一辆保养精美的马车和干净的马厩，马厩中养着四匹矮种马以及葛拉洪德夫人的纯黑色乘用马，名为马拉达。","一扇滑动木门将街道隔开，门外有一把挂锁将门锁住。","马厩北边的大房间存放着每匹马的马具和挽具，还有成捆的干草和园艺工具。","西北角的小房间有两张简易床：一张是给白天睡觉的园丁赫尔夫（见G2）的，另一张是给名叫艾克（平民）的马夫的，他晚上在这里睡觉。","Gralhund女士的马装备了加速马蹄铁（加速马蹄铁），并且有两个马鞍袋，每个袋子里装有四块重5磅、价值250金币的金条。"],flesh:`这座石制建筑内有一辆保养精美的马车和干净的马厩，马厩中养着四匹矮种马以及葛拉洪德夫人的纯黑色乘用马，名为马拉达。一扇滑动木门将街道隔开，门外有一把挂锁将门锁住。使用盗贼工具进行一次成功的DC 20敏捷检定即可撬开锁具。

马厩北边的大房间存放着每匹马的马具和挽具，还有成捆的干草和园艺工具。西北角的小房间有两张简易床：一张是给白天睡觉的园丁赫尔夫（见G2）的，另一张是给名叫艾克（平民）的马夫的，他晚上在这里睡觉。

Gralhund女士的马装备了加速马蹄铁（加速马蹄铁），并且有两个马鞍袋，每个袋子里装有四块重5磅、价值250金币的金条。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_0f9_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[52],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果角色们在白天到达，艾克不在这里（可能去为马匹取食物或与朋友外出喝酒）。"},{id:"scn_0fb",locationId:"loc_0ef",name:"G4. 警卫营房",activation:{condition:{type:"always"},priority:0},skeleton:["这座与大厦相连的单层石制建筑是二十名家丁的宿舍。","主房间有十张上下铺。","每张床都配有一个脚锁箱，里面装有折叠衣服和无价值的个人物品。","位于西北角的房间内有木质模特和架子，这些架子设计用来放置盔甲和武器。","由于没有警卫在场，模特和架子都是空的。"],flesh:`这座与大厦相连的单层石制建筑是二十名家丁的宿舍。主房间有十张上下铺。每张床都配有一个脚锁箱，里面装有折叠衣服和无价值的个人物品。

位于西北角的房间内有木质模特和架子，这些架子设计用来放置盔甲和武器。由于没有警卫在场，模特和架子都是空的。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[52],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_0fc",locationId:"loc_0ef",name:"G5. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["一扇未上锁的木门从院子通向宅邸的厨房，厨房里存放着烹饪用具和餐具。","一个大型壁炉用于烹饪餐食。"],flesh:"一扇未上锁的木门从院子通向宅邸的厨房，厨房里存放着烹饪用具和餐具。一个大型壁炉用于烹饪餐食。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[52],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_0fd",locationId:"loc_0ef",name:"G6. 食品储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["这个食品储藏室的架子上摆满了干食品、香料、折叠的桌布和果酱罐。","这里还存放着新鲜水、麦芽酒和葡萄酒的木桶。","一扇后门通向街道。","这扇坚固的木门从内部被闩上了。","Zhents杀害了两名仆人，一个年长的男性人类（首席管家）和一个年轻的男性半身人（厨师），并将他们的尸体留在了地板上。"],flesh:`这个食品储藏室的架子上摆满了干食品、香料、折叠的桌布和果酱罐。这里还存放着新鲜水、麦芽酒和葡萄酒的木桶。

一扇后门通向街道。这扇坚固的木门从内部被闩上了。从外部强行打开需要成功进行一次 DC 20 力量（运动）检定，并且会发出很大的噪音。

Zhents杀害了两名仆人，一个年长的男性人类（首席管家）和一个年轻的男性半身人（厨师），并将他们的尸体留在了地板上。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_0fd_e1"],tone:"exploration",_meta:{sourcePages:[52],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:"通往街道的后门从内侧闩住，自外强行撞开需 DC 20 力量（运动），并且动静极大。地板上的两具尸体是被 Zhents 杀死的仆役：年长的男性人类首席管家与年轻的男性半身人厨师。"},{id:"scn_100",locationId:"loc_0ef",name:"G7. 洗衣房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间是仆人们洗衣服的地方。","里面有擦洗桶、洗涤盆、肥皂、拖把和便壶。","Zhents杀害了一名仆人，一位中年女性人类（首席女仆），并将她的尸体留在通往仆人宿舍（G19）的楼梯上。","女仆的腰带上有一个钥匙圈，可以打开大厦内所有锁着的门以及G8中的橱柜。"],flesh:`这个房间是仆人们洗衣服的地方。里面有擦洗桶、洗涤盆、肥皂、拖把和便壶。

Zhents杀害了一名仆人，一位中年女性人类（首席女仆），并将她的尸体留在通往仆人宿舍（G19）的楼梯上。女仆的腰带上有一个钥匙圈，可以打开大厦内所有锁着的门以及G8中的橱柜。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[52],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:"死在通往仆人区楼梯上的中年女性人类是首席女仆，她腰带上挂着一串钥匙，可打开宅邸内所有上锁的门以及大厅（G8）里的木柜。"},{id:"scn_102",locationId:"loc_0ef",name:"G8. 大厅",activation:{condition:{type:"always"},priority:0},skeleton:["首次进入这个大厅的角色会注意到以下情况：","地板上散落着尸体。","两个手持血迹斑斑的连枷的暴徒站在他们上方。","从西北角的一座宽阔楼梯顶部传来打斗声（见G13）。","两个铁制吊灯悬挂在由红冷杉木制成的长餐桌上方的深红色桃花心木天花板上。"],flesh:`首次进入这个大厅的角色会注意到以下情况：

地板上散落着尸体。两个手持血迹斑斑的连枷的暴徒站在他们上方。

从西北角的一座宽阔楼梯顶部传来打斗声（见G13）。

两个铁制吊灯悬挂在由红冷杉木制成的长餐桌上方的深红色桃花心木天花板上。椅子围绕着桌子，两端各有一把特别高大且精致的椅子。

木镶板墙壁上挂着挂毯和锁着的木柜，里面存放着精美的餐具、银器和烛台。

壁炉上方有一个黑色大理石壁炉架，上面挂着一幅装裱的家庭肖像画。（这幅肖像画描绘了Gralhund勋爵和夫人，他们的三个年幼的孩子，以及三年前去世的家庭狗。）

大厅里躺着八名身穿血迹斑斑、破烂不堪的格拉尔洪德家族制服，覆盖在锁子甲上的守卫尸体，以及两名身穿黑色皮甲的死去的Zhents。他们都是人类。

手持连枷的两个身影是穿着黑色皮甲的Zhents。他们的任务是守住这个房间。他们一见到陌生人，包括城市守卫的成员，就会攻击。他们身上没有携带任何财宝。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_102"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[53],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_105",locationId:"loc_0ef",name:"G9. 客厅",activation:{condition:{type:"always"},priority:0},skeleton:["厄斯图尔·弗洛克辛回到别墅后被关押在这里，但不久之后他杀死了守卫并逃脱了。","这个房间布置得很舒适，里面有精致的椅子、一张躺椅、一个酒柜，以及Gralhund家族已故成员的各种装裱画作。","两名卫兵的尸体躺在浸满鲜血的地毯上。","卫兵们身穿链甲衫和格拉尔hund家族的制服。"],flesh:`厄斯图尔·弗洛克辛回到别墅后被关押在这里，但不久之后他杀死了守卫并逃脱了。这个房间布置得很舒适，里面有精致的椅子、一张躺椅、一个酒柜，以及Gralhund家族已故成员的各种装裱画作。

两名卫兵的尸体躺在浸满鲜血的地毯上。卫兵们身穿链甲衫和格拉尔hund家族的制服。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[53],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_107",locationId:"loc_0ef",name:"G10. 休息室和战利品室",activation:{condition:{type:"always"},priority:0},skeleton:["Gralhund勋爵的书房墙上挂着各种野兽的头颅，角落里摆放着闪亮的盔甲，仿佛在行礼。","熊皮地毯和填充过多的椅子填满了整个房间。","格拉尔洪德勋爵最近把养鹰作为一项爱好。","在房间中央的桌子上，放着一个笼子，里面关着一只戴头罩的隼（使用隼的具体数值）。"],flesh:`Gralhund勋爵的书房墙上挂着各种野兽的头颅，角落里摆放着闪亮的盔甲，仿佛在行礼。熊皮地毯和填充过多的椅子填满了整个房间。

格拉尔洪德勋爵最近把养鹰作为一项爱好。在房间中央的桌子上，放着一个笼子，里面关着一只戴头罩的隼（使用隼的具体数值）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[53],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_108",locationId:"loc_0ef",name:"G11. 奥伦德的书房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门上了锁。","房间具有以下特征：","房间中央的地面上铺着一个10尺见方的帆布摔跤垫。","天鹅绒扶手椅、底座上裸体男子的小雕像，以及高高的桃花心木书架整齐地摆放在房间周围。","一个角落中的桃花心木办公桌看起来并不常使用。"],flesh:`这个房间的门上了锁。角色可以使用盗贼工具并通过DC 15的敏捷检定来解锁。房间具有以下特征：

房间中央的地面上铺着一个10尺见方的帆布摔跤垫。

天鹅绒扶手椅、底座上裸体男子的小雕像，以及高高的桃花心木书架整齐地摆放在房间周围。

一个角落中的桃花心木办公桌看起来并不常使用。

大多数书籍是纸板制成的假书盒，上面涂有油漆。少数书籍内藏有猥亵的图画和淫秽的诗歌。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[53],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_10a",locationId:"loc_0ef",name:"G12. 家庭图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["这个木镶板的图书室包括以下特点：","高大的书架上摆满了书籍。","滑动的木制梯子安装在轨道上，方便取阅上层的书架。","在一个角落里，有一个铁制的讲台，上面放着一个闭合的、上锁的、皮革装帧的大书。","两张垫子椅子面对着一个大型壁炉。"],flesh:`这个木镶板的图书室包括以下特点：

高大的书架上摆满了书籍。滑动的木制梯子安装在轨道上，方便取阅上层的书架。

在一个角落里，有一个铁制的讲台，上面放着一个闭合的、上锁的、皮革装帧的大书。

两张垫子椅子面对着一个大型壁炉。其中一个上面搭着一张狼皮。

这些书籍中的许多是Gralhund女士的父母传给她的，它们保存得很好。包括历史文献、剧本、小说和诗集。

尽管看起来可能是一本魔法书，但讲台上的大书实际上是记录Gralhund家族成就的编年史，经过修饰或重铸，以最有利的方式描绘这个家族。一个侦测魔法法术揭示了从大书中发出的防护魔法的气息。

这本典籍需要使用格拉伦德女士挂在脖子上的钥匙来解锁。角色可以使用盗贼工具成功通过DC 15的敏捷检定来开锁，或者使用敲击术法术或类似的魔法来打开它。任何不使用正确钥匙打开书籍的方式都会导致三只恶灵出现在书籍10英尺范围内，并攻击打开它的人。束缚这些幽灵的魔法已经随着时间的推移而减弱；它们只能在物质位面存在1分钟，之后它们会被放逐到以太位面（除非在此之前被消灭）。这些幽灵显现为手指细长的幽灵形态的提夫林。

Gralhund家族的徽章出现在书的标题页上。书中其余部分用通用语写成，描述了从1239 DR年，流血之剑年，到1422 DR年，阴影前进年之间的出生、死亡和其他家族事件。特别值得注意的是，书中鲜为人知的事实是Gralhunds家族在过去与恶魔缔结了契约，由此产生了一种提夫林血统。所有这样的家族成员都被送往远在北方的Yartar的Gralhund庄园生活（或者书的尾声中是这样声称的），并且书中还顺便提到了一些水源家族成员出生时带有尾巴。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_10a_g1"],encounterIds:["enc_10a"],treasureSlotIds:[],eventIds:["evt_10a_e1"],tone:"tension",_meta:{sourcePages:[53],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Urstul.webp"}},{id:"scn_10d",locationId:"loc_0ef",name:"G13. 二楼门厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个优雅的门厅里发生了许多事情：","Zhents和家丁之间的战斗激烈进行，地板上散落着尸体。","主卧室的门（G16）敞开着。","（如果格拉尔洪德夫人在主卧室，她会喊：'城市守卫正在路上！","通往G15a区域的门是半开的。"],flesh:`这个优雅的门厅里发生了许多事情：

Zhents和家丁之间的战斗激烈进行，地板上散落着尸体。

主卧室的门（G16）敞开着。（如果格拉尔洪德夫人在主卧室，她会喊：'城市守卫正在路上！'）

通往G15a区域的门是半开的。在门的另一边，角色们可以听到有人正在踢另一扇门。

地板上躺着六名身穿格拉尔洪德家族制服、锁子甲的守卫的尸体和武器，以及两名身穿黑色皮甲的Zhents。

Gralhund家族的四名老兵（每名剩余30生命值）正在抵御Zhents的攻击，攻击方由三名暴徒组成（每名剩余20生命值）。Zhents试图到达G16，但守卫们正在阻挡他们。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_10d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[53],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:`如果角色们没有采取任何行动来影响这场战斗的结果，假设战斗以三名Gralhund家族的老兵存活和所有Zhents死亡结束。
门厅里的混战由四名格拉尔洪德家丁（老兵，各剩 30 生命值）对三名 Zhent 暴徒（各剩 20 生命值）：老兵是守方，不是角色的敌人，enc_10d 只列敌对的三名暴徒。若角色不介入，默认结局是三名老兵存活、Zhents 全灭。若格拉尔洪德夫人在主卧室，她会隔门大喊「城市守卫正在路上！」；通往 G15a 的门半开着，门后传来有人踢门的声音。`},{id:"scn_110",locationId:"loc_0ef",name:"G14. 舞厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门是锁着的。","舞厅是空的，并包含以下特征：","镀金的镜子、饰有流苏的挂毯和彩色玻璃灯具装饰着墙壁。","壁炉上方挂着一只由吹制玻璃制成的鹿头。","大理石地板上的纹理清晰可见，抛光得像镜子一样光亮。"],flesh:`这个房间的门是锁着的。使用盗贼工具的角色可以通过一个成功的 DC 15 敏捷检定来开锁。舞厅是空的，并包含以下特征：

镀金的镜子、饰有流苏的挂毯和彩色玻璃灯具装饰着墙壁。壁炉上方挂着一只由吹制玻璃制成的鹿头。

大理石地板上的纹理清晰可见，抛光得像镜子一样光亮。

俗气的水晶吊灯悬挂在天花板上，天花板上画着一幅描绘狂欢的壁画。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[54],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_111",locationId:"loc_0ef",name:"G15. 客房套房",activation:{condition:{type:"always"},priority:0},skeleton:["直到最近，这套房间是为厄斯图尔·弗洛克辛保留的。","格拉尔亨德领主已将自己封锁在G15b区域，用沉重的家具堵住了门。","角色们在G15a区域遇到了厄斯图尔·弗洛克辛（见附录 B）。","他正试图踢开G15b区域的门，拼命地想要抓住Gralhund勋爵，用他来交换格洛尔之石。","如果他在到达Gralhund勋爵之前被拦截，Urstul会试图逃离别墅，并利用其他幸存的Zhents来掩护他的逃跑。"],flesh:`直到最近，这套房间是为厄斯图尔·弗洛克辛保留的。格拉尔亨德领主已将自己封锁在G15b区域，用沉重的家具堵住了门。强行打开需要进行一次成功的DC 18力量（运动）检定。

角色们在G15a区域遇到了厄斯图尔·弗洛克辛（见附录 B）。Urstul受伤了，剩余50生命值，并且他的武器上没有涂毒，这降低了他的挑战等级到3（700 XP）。他正试图踢开G15b区域的门，拼命地想要抓住Gralhund勋爵，用他来交换格洛尔之石。如果他在到达Gralhund勋爵之前被拦截，Urstul会试图逃离别墅，并利用其他幸存的Zhents来掩护他的逃跑。他知道与Gralhund勋爵相同的信息（见下面的"奥隆德·格劳洪德"），除非他被魔法强迫，否则他不会透露这些信息或他的主人曼松的名字。

区域G15a是一个浴室。东侧的帘子已经被拉到一边，露出了一个爪足浴缸。

区域G15b是一个镶有木板的卧室，桌上有一个鸟笼，地板上刻有一个永久的传送圈。鸟笼里装有三只飞蛇，Urstul用它们在城市中传递信息给他的间谍。这个圈由曼松使用，以秘密会见厄斯图尔·弗洛克辛，并传送Zhents往返于Kolat Tower。

用衣柜、书桌和一张塞得满满的椅子堵住卧室门之后，奥隆德·格劳洪德（见附录 B）蜷缩在G15b区域西南角的床后面。尽管他手持一把刺剑，但奥隆德向第一个突破他设置的路障的人求饶。

任何能够控制格拉伦德勋爵的角色，可以通过一次成功的 DC 10 魅力（恐吓）检定从他那里撬出以下信息，但如果格拉伦德勋爵有理由相信他的妻子能看见或偷听到对话，则检定时带有劣势。

"格洛尔之石 是某种古老的生物转变而成的神器。它知道隐藏在深水城的一个金库的位置，里面藏有五十万龙币。"

"格拉尔洪德家族一直在资助深水城的黑网行动，包括策划绑架瑞纳尔·奈沃兰波以及从他父亲的侏儒间谍达拉卡尔那里窃取格洛尔之石的计划。"

"我妻子对Zhents及其无法确保神器安全感到沮丧。她给了她的机械仆人一个火球项链，并派它出去帮助取回石头。这是疏忽的，不小心用火球术击中了Zhents。"`,spotlightRefs:[],presentNpcIds:["npc_4d9","npc_4cb","npc_4bb","npc_4d2"],availableInfoIds:["info_111_g2","info_111_g3","info_111_g4"],encounterIds:["enc_111"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[54],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:`有关圈的运作方式的更多信息，请参阅玩家手册中的传送法阵法术描述。
厄斯图尔·弗洛克辛在 G15a 与角色照面：他受了伤，只剩 50 生命值，武器上没有涂毒，挑战等级因此降到 3（700 XP）。他正踹 G15b 的门，想抓住格拉尔洪德勋爵去换格洛尔之石；一旦被拦下，他会带着其余幸存的 Zhents 掩护自己撤离别墅。他知道的情报与勋爵相同，但除非受魔法强迫，绝不吐露，也绝不说出主人曼松的名字。G15b 地板上刻着一个永久传送法阵——曼松用它秘密会见弗洛克辛，也用它让 Zhents 在科拉特塔与别墅之间往返；桌上鸟笼里的三只飞蛇是乌尔斯图在城中传信的信使，不是战斗单位。勋爵用衣柜、书桌和一张塞满的椅子堵住了卧室门，强行推开需 DC 18 力量（运动）。`},{id:"scn_113",locationId:"loc_0ef",name:"G16. 主卧室",activation:{condition:{type:"always"},priority:0},skeleton:["这间房间的门已经被推开。","房间里包含以下居住者和特点：","雅拉·格劳洪德，穿着胸甲，手持一把细剑，站在她打扮得体的半兽人保镖哈巴兹旁边（他们的状态见附录 B）。","一个锁着的木制箱子位于西南角一个大床的床脚处。","一个爪足浴缸位于西北角的凹室里，靠近一个独立式镜子和一个屏风。"],flesh:`这间房间的门已经被推开。房间里包含以下居住者和特点：

雅拉·格劳洪德，穿着胸甲，手持一把细剑，站在她打扮得体的半兽人保镖哈巴兹旁边（他们的状态见附录 B）。

一个锁着的木制箱子位于西南角一个大床的床脚处。

一个爪足浴缸位于西北角的凹室里，靠近一个独立式镜子和一个屏风。

在东南角壁炉上方挂着一面盾牌，上面刻有格拉伦德家族的纹章。木柴整齐地堆放在炉边。

一个高大的桃花心木衣柜里塞满了昂贵的礼服和正装，它位于一对通往阳台的开放式玻璃门旁边。

格拉尔洪德夫人将格洛尔之石和一张目的地地图交给了她的秘偶仆人，当角色们到达这个房间时，这个敏捷工匠已经离开了别墅。它的逃跑至关重要，因为这触发了第四章中的事件。

Lady Gralhund 和 哈巴兹 是唯一知道敏捷灵去了哪里的人，但当被问及此事时，他们装作一无所知。

雅拉 携带一串能打开宅邸内所有上锁门的钥匙环，以及床尾上锁的木箱。如果她的处境变得危急，而哈巴兹无法保护她，Yalah会打开通向G18的门，冲进去，并在她的下一个动作中用钥匙锁上门。她在那里做最后的抵抗，她的孩子在她身后畏缩。

这个箱子的锁可以用盗贼工具打开，并且需要进行一次成功的DC 15敏捷检定。箱子里面似乎装着折叠好的衣服和鞋子。箱底有一个隐秘的隔间，如果有检查箱子外部的人并且进行了一次成功的DC 15感知（察觉）检定，就可以发现这个隔间。隔间里装着两个阿斯蒙蒂斯的神圣象征和两件红金色的长袍。

Gralhund勋爵和夫人都是阿斯蒙蒂斯崇拜者的秘密成员，这个邪教在深水城的某些贵族中很受欢迎。该邪教由勋爵维克托罗·卡萨兰特领导（见附录 B），尽管Gralhunds不会自愿透露这些信息。`,spotlightRefs:[],presentNpcIds:["npc_4e4","npc_4b6","npc_4c6","npc_4dc"],availableInfoIds:["info_0ef_g2","info_113_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[55],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:"角色到达主卧室时，秘偶已携格洛尔之石与一张目的地地图离开别墅——它的脱身是第4章的引信，不要让它在此被拦下。格拉尔洪德夫人与半兽人保镖哈巴兹是仅有的两个知道它去向的人，被问及时一律装作一无所知。夫人身上有一串能打开宅内所有上锁房门与床尾木箱的钥匙，颈上另挂一把开家族编年史（G12）的小钥匙。若局势危急而哈巴兹护不住她，她会冲进儿童房（G18）并在下一个动作用钥匙反锁，在两个孩子面前做最后抵抗。木箱本身的锁用盗贼工具过 DC 15 敏捷检定可开。"},{id:"scn_116",locationId:"loc_0ef",name:"G17. 阳台",activation:{condition:{type:"always"},priority:0},skeleton:["这个宽敞的阳台被一个精美的铸铁栏杆围住，上面整齐地摆放着躺椅。","地面在20尺以下，开放式的玻璃门通向主卧室（G16）。"],flesh:"这个宽敞的阳台被一个精美的铸铁栏杆围住，上面整齐地摆放着躺椅。地面在20尺以下，开放式的玻璃门通向主卧室（G16）。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[55],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_117",locationId:"loc_0ef",name:"G18. 儿童房",activation:{condition:{type:"always"},priority:0},skeleton:["通往这个房间的门被锁上了。","三张床沿着南墙排列，一个空的摇篮靠在东墙上。","其他的家具包括矮衣柜、游戏地毯和儿童书桌。","格拉尔洪德家族的两个最年幼的孩子，一个名叫扎坦的13岁男孩和一个名叫格雷斯的10岁男孩，被关在这里以确保他们的安全。","他们两个都是非战斗人员。"],flesh:`通往这个房间的门被锁上了。使用盗贼工具进行一次成功的 DC 15 敏捷检定可以撬开锁。

三张床沿着南墙排列，一个空的摇篮靠在东墙上。其他的家具包括矮衣柜、游戏地毯和儿童书桌。

格拉尔洪德家族的两个最年幼的孩子，一个名叫扎坦的13岁男孩和一个名叫格雷斯的10岁男孩，被关在这里以确保他们的安全。他们两个都是非战斗人员。他们18岁的姐姐托马辛正在雅塔访问一个提夫林表亲。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[55],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_119",locationId:"loc_0ef",name:"G19. 仆人区",activation:{condition:{type:"always"},priority:0},skeleton:["上层东南区域的三个房间是仆人们夜间睡觉的地方。","首席管家和首席女仆有自己的房间，但这些地方目前无人居住。","三个房间中最大的一个是公共休息室，里面有六张上下铺供初级员工使用。","总共有九名女仆、厨师和贴身男仆（平民）躲藏在这里，等待有人来救援他们。","他们手持临时武器（擀面杖、拖把、扫帚等），这些武器被视为棍棒。"],flesh:"上层东南区域的三个房间是仆人们夜间睡觉的地方。首席管家和首席女仆有自己的房间，但这些地方目前无人居住。三个房间中最大的一个是公共休息室，里面有六张上下铺供初级员工使用。总共有九名女仆、厨师和贴身男仆（平民）躲藏在这里，等待有人来救援他们。他们手持临时武器（擀面杖、拖把、扫帚等），这些武器被视为棍棒。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[55],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_11a",locationId:"loc_0ef",name:"后续",activation:{condition:{type:"event_fired",eventId:"evt_0ef_e1"},priority:5},skeleton:["带着格洛尔之石逃离格拉伦德别墅后，格拉伦德夫人的秘偶将神器藏在了深水城的一个秘密地点，为第4章的情节埋下伏笔。","即使格拉伦德别墅内的血腥冲突在庄园墙外未被注意到，屠杀也不能长时间对城市守卫隐瞒。","有太多被谋杀的仆人和守卫，任何人都无法隐瞒所发生的事情。","城市守卫的到来预示着巴尼布斯·阵风和萨斯·克姆利（见附录 B）的回归，他们不久后带着二十名警官（老兵）和两名狮鹫骑兵（见附录 B）骑着狮鹫到达。","狮鹫和它们的骑手保持在空中，提供空中支援和侦察。"],flesh:`带着格洛尔之石逃离格拉伦德别墅后，格拉伦德夫人的秘偶将神器藏在了深水城的一个秘密地点，为第4章的情节埋下伏笔。

即使格拉伦德别墅内的血腥冲突在庄园墙外未被注意到，屠杀也不能长时间对城市守卫隐瞒。有太多被谋杀的仆人和守卫，任何人都无法隐瞒所发生的事情。城市守卫的到来预示着巴尼布斯·阵风和萨斯·克姆利（见附录 B）的回归，他们不久后带着二十名警官（老兵）和两名狮鹫骑兵（见附录 B）骑着狮鹫到达。狮鹫和它们的骑手保持在空中，提供空中支援和侦察。

Barnibus彻底调查了Gralhund别墅的犯罪现场，并询问了邻居和旁观者。被看到离开现场的角色会成为嫌疑人。`,spotlightRefs:[],presentNpcIds:["npc_4c6","npc_49b","npc_4d4"],availableInfoIds:[],encounterIds:["enc_11a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[55],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；overlay覆写:activation/dmGuidanceAppend"},dmGuidance:`如果角色们杀害了Gralhund家族的任何成员，并留下了行为的证人或证据，Barnibus指示军士 Cromley以谋杀贵族的罪名逮捕他们，如果被判有罪，这将被判处死刑。
别墅里死了太多仆役与守卫，屠杀瞒不了城市守卫多久。巴尼布斯·阵风与萨斯·克姆利带二十名警员（老兵）和两名骑狮鹫的狮鹫骑兵返回，狮鹫与骑手留在空中提供侦察与支援。巴尼布斯会盘问邻居与旁观者，被看到离开现场的角色即成为嫌疑人；若角色杀了格拉尔洪德家任何成员并留下证人或证据，他会指示军士克罗姆利以谋杀贵族的罪名逮捕他们，一旦定罪即是死刑。`},{id:"scn_11b",locationId:"loc_0ef",name:"未了事宜",activation:{condition:{type:"event_fired",eventId:"evt_0ef_e1"},priority:0},skeleton:["您可以使用以下可选事件来处理散塔林会在余波中发生了什么。",'在被当地报纸称为"Gralhund别墅大屠杀"的事件发生几天后，城市守卫对黑网展开了打击。',"即使是没有已知犯罪联系的散塔林会成员也遭到围捕和审讯，包括达维尔·星歌（见附录 B）。","只要保持低调，该派系的成员暂时是安全的。","否则，他们也会在几天内被围捕和审问，直到深水城的领主们确定他们在Gralhund别墅的暴力事件中的参与程度。"],flesh:`您可以使用以下可选事件来处理散塔林会在余波中发生了什么。

在被当地报纸称为"Gralhund别墅大屠杀"的事件发生几天后，城市守卫对黑网展开了打击。即使是没有已知犯罪联系的散塔林会成员也遭到围捕和审讯，包括达维尔·星歌（见附录 B）。只要保持低调，该派系的成员暂时是安全的。否则，他们也会在几天内被围捕和审问，直到深水城的领主们确定他们在Gralhund别墅的暴力事件中的参与程度。报纸也跟风，以最不光彩的方式描绘黑网，从而对派系本已可疑的声誉造成了致命打击。

在达维尔·星歌被带去审问之后，伊思崔德·霍恩（见附录 B）通过一只飞蛇向角色们发送了一条消息。这条用通用语写成的消息内容如下：

如果天气晴朗，角色们可以看到墓园中散步的行人、野餐的人以及嬉戏的孩子们。很明显，伊斯特丽德选择了一个安全的公共场所进行会面。成功通过DC 15感知（洞察）检定的角色可以判断出她是独自前来。

Istrid担心被城市守卫逮捕。尽管她没有参与与格拉伦德别墅有关的事务，但她担心在调查过程中，守卫会发现她非法放贷的生意。她向角色们提供10pp，仅仅是为了与她见面，并承诺如果角色们同意帮助她低调十天，她会再支付40pp——一半在达成协议时支付，另一半在她逗留结束时支付。如果他们拒绝她的提议，并且队伍中有一或多名散塔林会成员，她威胁说如果她被逮捕并被控告犯罪，她将揭露他们的隶属关系，并让他们与她一同倒台。

如果被要求这么做，她愿意在安顿下来后在酒馆里帮忙做一些杂务。最终，没有人来找她，但她躲藏的时间越长，她变得越容易生气和要求越多。

那些在Istrid需要帮助时收留她的散塔林会成员角色将获得额外的好处：他们在派系中的声望增加了2。

另一方面，如果角色们把她赶出去或向城市守卫告发她，Istrid就会成为他们的死敌，并试图在每一个机会中破坏他们。

作为防止被出卖的预防措施，Istrid至少与Doom Raiders的另一名成员（见附录 B）分享了她关于角色们的计划。深水城的法律阻止他们公开攻击角色们，但他们可以通过吓跑客户来破坏团队的生意，如果角色们敢于离开城市的界限，他们可能会发现自己成为了更严重的目标。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[56],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；overlay覆写:activation/dmGuidanceAppend"},readAloud:`我想知道更多关于Gralhund别墅发生的事情。如果你能抽出时间，明天正午在死者之城的Ahghairon雕像处与我见面。你将因为你的时间和麻烦得到慷慨的报酬。
-伊思崔德·霍恩

Ahghairon的雕像是城市公园墓地中一个著名的地标：一座高大的大理石雕塑，描绘的是一位长着胡须、穿着长袍的法师站在同心台阶上，面朝西方，朝向深水城的天际线，双手伸展，面带宽慰的微笑。在雕像的底部站着一位穿着板甲的女矮人。`,dmGuidance:`如果角色直接参与了格拉伦德别墅发生的事件，这次遭遇才会发生。
如果角色们参加会面，请使用以下框起来的文字来帮助设定场景，并根据季节进行修饰：
如果角色们决定让Istrid在他们的酒馆里躲藏，她会使用伪装工具将自己化妆成一个名叫Jorn的男性矮人。
如果角色们容忍Istrid的不良行为，她将在十天结束时如约离开，并支付角色们她所欠的余额。
如果角色们背叛或伤害了Istrid，她以前的冒险伙伴会利用他们所能利用的一切资源来毁掉角色们。
本节全部为可选后续，且仅在角色直接卷入格拉尔洪德别墅事件时才发生。伊思崔德·霍恩的会面定在次日正午、死者之城的阿格海隆雕像下；DC 15 感知（洞悉）可判断她确实单身赴约。她付 10 铂币换见面，另许 40 铂币换十天窝藏（一半成交时付、一半结束时付）；被拒且队中有散塔林会成员时，她会威胁一同曝光。收留她十天并容忍其脾气的散塔林会成员角色，派系名望 +2；把她赶走或告发则结下死仇，背叛或伤害她会招来末日劫掠者其余成员的报复。`},{id:"scn_122",locationId:"loc_0ef",name:"等级提升",activation:{condition:{type:"event_fired",eventId:"evt_0ef_e1"},priority:0},skeleton:["如果您是通过故事里程碑而不是追踪经验值来提升角色等级，如果角色们自行调查火球事件并影响了格拉伦德别墅事件的结果，他们将从3级提升到4级。","否则，在第4章开始时，他们仍然是3级。"],flesh:"如果您是通过故事里程碑而不是追踪经验值来提升角色等级，如果角色们自行调查火球事件并影响了格拉伦德别墅事件的结果，他们将从3级提升到4级。否则，在第4章开始时，他们仍然是3级。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[56],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；overlay覆写:activation/dmGuidanceAppend"},dmGuidance:"按里程碑升级时：角色若自行调查了火球事件并影响了格拉尔洪德别墅事件的结果，本章结束时由 3 级升到 4 级；否则第4章开始时仍为 3 级。"},{id:"scn_123",locationId:"loc_123",name:"龙之季节",activation:{condition:{type:"always"},priority:0},skeleton:["金钱使人做出奇怪的事情，而Lord Neverember隐藏的龙族宝藏正待争夺。","格洛尔之石知道宝藏库的位置以及如何进入，这一章的大部分内容集中在角色寻找这个神器的过程上。","他们面临的挑战取决于你选择的反派（或反派们）。","无论季节如何，反派的目标都很简单：获得石头，找到龙族的金库，并夺取其中的宝藏。"],flesh:"金钱使人做出奇怪的事情，而Lord Neverember隐藏的龙族宝藏正待争夺。格洛尔之石知道宝藏库的位置以及如何进入，这一章的大部分内容集中在角色寻找这个神器的过程上。他们面临的挑战取决于你选择的反派（或反派们）。无论季节如何，反派的目标都很简单：获得石头，找到龙族的金库，并夺取其中的宝藏。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_123_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[57],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},mapGeometry:{imageRef:"adventure/WDH/ChapterFour.webp"},dmGuidance:`【季节四选一 · 开章第一件事】本章开场必须先在四条反派线中选定一条，其余三条只作素材库，不要同时上演：春=姗娜萨（眼魔暴君要回石头）／夏=卡萨兰特家族（阿斯蒙蒂斯邪教，避开当局）／秋=贾拉索·班瑞（诱骗角色替他干活）／冬=曼松（散塔林会鲁莽妄为）。选定后本章其余分支只在角色主动打听时作为背景传闻出现。
【遭遇链顺序（按季节）】春：2雾岸→4陵墓→10风车→9地窖群→3街道追逐→7旧塔→1小巷→6剧院。夏：4陵墓→10风车→5屋顶追逐→1小巷→3街道追逐→9地窖群→8法院→7旧塔。秋：1小巷→9地窖群→6剧院→8法院→7旧塔→5屋顶追逐→2雾岸→10风车。冬：10风车→1小巷→5屋顶追逐→6剧院→3街道追逐→2雾岸→7旧塔→4陵墓。顺序可改、可删、可加新遭遇——链条是骨架不是铁轨。
【全章天气挂钩】春：中午到午夜大雨（听/视感知劣势、扑灭明火、能见度60尺），午夜到中午浓雾（视觉感知劣势、能见度30尺）。夏：热浪（无饮用水者每条遭遇链结束时 DC10 体质豁免，失败得1级力竭；中重甲劣势）。秋：秋风（远程攻击与听觉感知劣势，扑灭小于火炬的明火）。冬：暴风雪（听/视感知劣势、能见度60尺、积雪困难地形）+极度寒冷（每次遭遇结束 DC10 体质豁免，失败得1级力竭）。
【角色偏离主线时的两条回正手段】①友好派系把石头下落的情报送上门；②反派的不忠下属开价出卖石头位置。
【本章去向 · 衔接下一章】本章的终点恒定：角色拿到并与格洛尔之石共鸣，得知龙之金库的位置、开门所需的三把钥匙、以及金库中金龙守卫的名字与它法杖的力量——随后转入「金库钥匙」与「龙之金库」。若反派先拿到石头，他需 2d6 天找到金库与钥匙，再 2d6 天派兵取金；这段窗口期就是角色潜入反派巢穴（第5~8章）偷石头或偷金的时间。
本章去向：玩家沿季节专属的遭遇链追着格洛尔之石跑（法院 → 地窖群 → 改造风车等，每场结尾原文都点名『下一场遭遇』），拿到石头后与之共鸣即得知龙之金库的位置、开门所需的三把钥匙、以及守库的成年金龙奥瑞纳克斯；集齐钥匙打开宝库门，穿过矮人金库（V1-V8 的壁画魅惑、火眼陷阱、说出秘密才开的陷阱门）抵达主金库 V9 与巨龙交涉或交战。离开金库时主要反派的伏兵在门外等候——黄金的去向决定「冒险结局」怎么收，队伍此时应达 5 级，故事随后转向安德山（《深水城：疯法师的地城》）。`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_124",locationId:"loc_123",name:"设置舞台",activation:{condition:{type:"always"},priority:0},skeleton:["在第3章中，Gralhund女士的秘偶带着格洛尔之石逃跑了。","敏捷工匠将这件神器送到一个地点，并将其留在那里供主要反派或反派们取回：","如果姗娜萨是反派，那么这块石头会被送到一个名叫格林达·加洛斯的法师那里。","她拥有一个夸力许装置，并居住在Mistshore，这是一个位于Dock Ward的码头上建造的、不光彩的社区。","如果Cassalanters是反派，那么这块石头被留在了深水城墓地，即死者之城的他们家族的墓穴中。"],flesh:`在第3章中，Gralhund女士的秘偶带着格洛尔之石逃跑了。敏捷工匠将这件神器送到一个地点，并将其留在那里供主要反派或反派们取回：

如果姗娜萨是反派，那么这块石头会被送到一个名叫格林达·加洛斯的法师那里。她拥有一个夸力许装置，并居住在Mistshore，这是一个位于Dock Ward的码头上建造的、不光彩的社区。

如果Cassalanters是反派，那么这块石头被留在了深水城墓地，即死者之城的他们家族的墓穴中。一个半身人死灵法师在Cassalanters或角色们之前得到了它。

如果Jarlaxle是反派，那么石头被送到了Fenerus Stormcastle那里，他在商贸区是一名点灯人。Fenerus有犯罪记录，目前正与法律有麻烦。

如果曼松是反派，那么这块石头会被带到萨卡斯那里，他是一个位于田野区(Field Ward)的龙裔屠夫，为散塔林会分解尸体。

之后，装备了尼姆的灵巧生物探测器，角色们可以搜查整个城市。但当他们找到灵巧生物时，它已经将格洛尔之石送到了预定的目的地。

当最终找到时，秘偶（见附录 B）穿着一件偷来的斗篷，躲在一条小巷里一堆未被清理的垃圾下面。角色们在何时何地偶然发现它，由你来决定。无处可逃且没有其他目的，它会一直战斗直到被摧毁。无论这一事件发生在何时何地，六名城市守卫(老兵)会在战斗结束时到达。由于骚动而被吸引过来，守卫对敏捷工匠毫不在意，并且会相信角色们告诉他们的任何合理的故事。（作为一个构装生物，它没有说话的权利。）这些官员们快要结束他们的轮班，急于继续前进；他们敦促角色们回家，不要再制造麻烦。

Gralhund女士给了她的秘偶一张地图，上面标明了要把格洛尔之石送到哪里，但她忘了告诉它一旦石头送达就要销毁地图。搜索敏捷工匠的遗骸的角色们发现了这张折叠起来的地图，地图上描绘了深水城的一个区域。地图上写有一个X和一个名字。这张地图指引角色们他们需要去的地方，触发了一系列的遭遇（见下面的"遭遇链"）。主要反派决定地图描绘了哪个区域以及上面写了什么名字：

如果姗娜萨是反派，那么在Dock Ward的地图上，'X'的位置会写上'格林达·加洛斯'。（'X'标记着Mistshore的码头社区，Grinda就住在那里。）

如果Cassalanters是反派，那么在死亡之城的地图上，'X'的位置会写上'Cassalanter'。（'X'标记着Cassalanter家族陵墓的位置。）

如果Jarlaxle是反派，地图上的商贸区标记了一个X，并写有"Fenerus Stormcastle"。（商贸区的居民知道Fenerus。他是一个点灯人，住在一个巷子里。X标记的就是那个巷子。）

如果曼松是反派，地图上的田野区标记了一个X，并写有"萨卡斯"。（X标记的是萨卡斯的肉店和住所的位置。）`,spotlightRefs:[],presentNpcIds:["npc_4c6","npc_4e2","npc_4bb"],availableInfoIds:["info_123_g1","info_124_g1"],encounterIds:["enc_124"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[57],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；overlay覆写:dmGuidanceAppend"},dmGuidance:`如果角色们在秘偶带着格洛尔之石逃跑后无法追踪到线索，他们可能会转向城市警卫、城市守卫或友好派系寻求帮助，这将在1d4天内得到回应。
如果角色们没有想到这一点，一个NPC建议队伍去拜访启迪之手之家，看看贡德的祭司是否知道找到它的方法（见"尼姆的秘密"）。
【获取Golorr之石】格洛尔之石拥有一个智能的、异域的智力，并且具有足够的预知能力，意识到角色们注定会找到它。不过，这块石头并不想被太容易地找到。
如果角色们比预期更早地获得了这块石头，它会变得不合作，并尽可能快地试图从队伍中分离出来，同时拒绝与角色分享任何知识。石头试图控制任何与其共鸣的人，引发冲突（见城主指南第7章中的"有感知的魔法物品"）。如果石头未能控制住，直到下一个黎明之前，它不能再对那个角色尝试控制。如果石头成功控制了它的拥有者，它会命令那个角色将它送到启动本章讨论的一系列遭遇的地点（见"遭遇链"）。一旦石头摆脱了当前的拥有者，它就试图从那个角色的记忆中抹去所有关于自己的知识（见附录A中物品的描述）。任何被迫忘记石头的角色都承担着扮演记忆丧失的负担。你可以给予那个角色灵感，作为对玩家出色角色扮演的认可。
随着第4章的展开，你决定什么时候让角色们有机会获得Golorr之石。尽量让他们尽可能晚地得到它，以最大化悬念。
一旦角色们获得了格洛尔之石，它就不再试图控制他们。一个角色可以与它共鸣，并了解到以下信息：
龙之金库的位置（见"龙之金库"）
解锁金库门所需的三把钥匙（见"金库钥匙"）
金库的金龙守护者的名字，以及它手中法杖的力量（见附录A中阿盖尔伦的龙杖的描述）
【石头去向按反派分流】春（姗娜萨）：石头送到码头区雾岸的法师格林达·加洛斯手上。夏（卡萨兰特）：石头留在死者之城的卡萨兰特家族陵墓，一名半身人死灵法师抢先取走。秋（贾拉索）：石头送到商贸区的点灯人费内鲁斯·斯托姆卡斯尔那里，他有案底且正被通缉。冬（曼松）：石头带到田野区的龙裔屠夫萨卡斯那里。
【找不到秘偶时的兜底】角色向城市警卫、城市守卫或友好派系求助，1d4 天内有回音；若角色想不到，由 NPC 建议去启迪之手之家找贡德祭司借尼姆的秘偶探测器。无论何时找到秘偶，它都已经把石头送到目的地了——它无路可逃、战斗至毁，战斗结束时六名城市守卫（老兵）赶到，对构装毫不在意，会相信角色的任何合理说辞并催他们回家。
【石头节奏】尽量让角色晚一点拿到石头以拉满悬念；过早到手时石头会不合作、试图控制持有者并抹除其相关记忆（DMG 第7章有感知魔法物品；控制失败则到下一个黎明前不得再试）。`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_129",locationId:"loc_123",name:"遭遇链",activation:{condition:{type:"always"},priority:0},skeleton:["八个遭遇构成了角色们寻找格洛尔之石和龙之金库的旅程。","它们形成了一个链条，其顺序由你选择的反派和季节决定。","对面页上的图表展示了每个链条中遭遇的顺序。",'例如，如果姗娜萨是反派，那么链条从遭遇2开始，"Mistshore"，并以遭遇6结束，"Theater"。',"不要被遭遇链所束缚。"],flesh:`八个遭遇构成了角色们寻找格洛尔之石和龙之金库的旅程。它们形成了一个链条，其顺序由你选择的反派和季节决定。对面页上的图表展示了每个链条中遭遇的顺序。例如，如果姗娜萨是反派，那么链条从遭遇2开始，"Mistshore"，并以遭遇6结束，"Theater"。

不要被遭遇链所束缚。让角色的决定和行动推动故事发展。你可以改变遭遇发生的顺序，移除不需要的遭遇，或者创造新的遭遇。你也可以根据你的喜好修改遭遇。

你有几个简单的方式来引导他们回到正轨：

一个友好的派系如果掌握了有关格洛尔之石下落的信息，可以将这些知识带给角色们。

反派的一个不忠的下属为了一定的价格揭示了格洛尔之石的位置。

啊，春天——当眼魔的眼睛梗盛开的时候。Golorr之石最初是从姗娜萨那里夺走的，这位眼睛暴君想要它回来。它派遣怪物和小兵来做它的脏活。

这块石头被送到了过去曾为姗娜萨工作的法师格林达·加洛斯手中。当她拒绝交出石头时，Xanathar公会的成员试图用武力夺取（遭遇2，'Mistshore'）。从这一点开始，角色们被一个凝视者跟踪（见附录 B），通过它的眼睛姗娜萨可以看到。如果这个凝视者被杀死，姗娜萨不会派出另一个来替代它。

洛瑟·米尔克拉夫，一个半身人死灵法师，在角色们到达（遭遇4，"陵墓"）前不久袭击了Garloth陵墓并带走了石头。当他们从陵墓中出来时，Xanathar公会的成员攻击了他们，因为他们认为他们拥有那块石头。在陵墓中留下的线索引导角色们前往南方区的一个旧风车和一对盗墓者（遭遇10，"改造风车"）。盗墓者担心被捕，指引他们前往商贸区下的一个地窖建筑群（遭遇9，"地窖建筑群"）。在Trolltide之前或期间的街道追逐（遭遇3，"街道追逐"）结束时，天狗害怕被捕，躲进了一座旧塔（遭遇7，"旧塔"）。如果他们被抓住并面对，肯库会交出石头。

Xanathar公会最后尝试一次来重新夺回石头（遭遇1，'小巷'）。任何与石头产生共鸣的角色都会得知龙之金库位于城堡区一个剧院下方（遭遇6，'剧院'）。

在遭遇链完成之前，以下天气效果正在发挥作用。

从中午到午夜下着大雨。在雨中的生物在依赖听觉或视觉的感知（洞察）检定时具有劣势。雨水还会扑灭明火。能见度降低至60尺。

从午夜到中午，城市被浓雾笼罩。在雾中的生物在依赖视力的感知（感知）检定上具有劣势。能见度降低到30尺。

当Waterdeep市民在酷热中挣扎时，Cassalanter家族派遣他们崇拜阿斯蒙蒂斯的邪教信徒去夺取Golorr之石，同时巧妙地避免与当地当局发生纠葛。

一个被留下等死的生还者透露，这些邪教徒被他们自己人中的两个背叛了。角色们前往南方区的一个旧风车，那里是邪教狂信者实践他们恶魔信仰的地方（遭遇10，'改造风车'）。棘魔突然降临，抢走了石头，并逃跑，引发了一场屋顶追逐（遭遇5，'屋顶追逐'）。

棘魔将石头交给了一辆停在小巷里的出租马车（遭遇1，'小巷'）。马车内是维克托罗·卡萨兰特的贴身男仆Willifort Crowelle，一个以提夫林形态出现的变形怪。当出租马车逃跑时，一场街道追逐随之发生（遭遇3，'街道追逐'）。当人群切断了他的逃跑路线时，Willifort跳出马车，试图混入人群中。在混乱中，街头顽童抢走了石头。角色们在他们的地下室藏身之处追上了这些孩子（遭遇9，'地下室综合区'）。

拥有格洛尔之石的角色们从小黑屋综合区出来时，发现自己被城市守卫的成员包围了。他们因一项或多项罪行被捕，并被带到码头区的法院，由地方法官宣判（遭遇8，'法院'）。与此同时，变形怪试图夺回石头。

任何与格洛尔之石共鸣的角色都会得知龙之金库隐藏在海港区的一座旧塔下（遭遇7，'旧塔'）。当他们到达塔楼时，他们遇到了新主人，他正在与各个地方行会成员讨论翻新事宜。

在遭遇链完成之前，以下天气效果正在发挥作用。

在白天，没有可饮用水的角色必须在每次遭遇链结束时成功通过一个 DC 10 的体质豁免检定，否则获得一级 力竭。对火焰有抗性或免疫的角色自动通过该豁免检定。

欺骗和误导是Jarlaxle的专长，他喜欢诱使对手为他工作。他引导角色们走向格洛尔之石，并让他们认为他们总是领先一步。作为Bregan D'aerthe成员的卓尔玩家角色可能会发现他们对队伍的忠诚度受到考验。

角色们拜访了Fenerus Stormcastle的住所，他是一位点灯人和退休的强盗，向Bregan D'aerthe提供情报。他们到达时发现这个地方被洗劫了（遭遇1，'小巷'）。洗劫住所的灰矮人是Xanathar公会的成员，而Bregan D'aerthe的间谍已经追踪他们到了南方区的一个地下室综合区。Jarlaxle伪装成莱拉·银手，引导角色们朝那个方向前进（遭遇9，'地下室综合区'）。在地下室综合区的搜索中，他们发现了一个假石头，但不是真正的格洛尔之石。没有其他线索，角色们可以与'Laeral'在码头区的剧院跟进（遭遇6，'剧院'）。Jarlaxle给角色们提出了一个他们无法拒绝的提议，如果他们敢于这样做，他会派他的代理人对付他们。

一旦Jarlaxle意识到Xanathar公会没有那块石头，他就要求角色们审问Fenerus以找出他藏在哪里。Jarlaxle得知Fenerus正在城堡区的一个法院（遭遇8，"法院"）等待审判。Fenerus希望他过去所有的罪行都能得到豁免。角色们无法实现他的愿望，但他们可以威胁他、说服他或使用魔法来迷惑他。如果他被迫透露石头的位置，Fenerus会指引角色们去码头区的一座旧塔（遭遇7，"旧塔"）。

Jarlaxle的副官们首先到达石头所在地，并在码头区的屋顶上逃离角色们（遭遇5，'屋顶追逐'）。他们躲藏在Mistshore（遭遇2，'Mistshore'）。一旦角色们从这些卓尔精灵手中夺回石头，他们就可以用它来引导他们前往海港区一位著名画家的家（遭遇10，'改造风车'），那里有一条通往龙之金库的隧道。

在遭遇链完成之前，以下天气效果正在发挥作用。

街上呼啸的风对远程武器攻击骰和依赖听力的感知（洞察）检定造成了劣势。风还会扑灭小于火炬火焰的开放火焰。

现在正是深水城不满的冬季。为曼松服务的Zhents认为他们的主人是无所不能的，这使他们变得鲁莽。在寒冷的背景下，他们愿意对当地当局不屑一顾，并在追求格洛尔之石的过程中冒险死亡。

这块石头被送到了萨卡斯那里，他是田野区（遭遇10，'改造风车'）的一个龙裔屠夫。萨卡斯把石头藏在了他的一次肉类送货中。角色们跟随送货车来到贸易区的一条小巷，那里有Zhents秘密会面（遭遇1，'小巷'）。她把石头交给了Agorn Fuoco，一个正在附近剧院看戏的吟游诗人（遭遇6，'剧院'），然后带领她的追踪者在覆盖着雪的街道上进行了一场愉快的追逐（遭遇3，'街道追逐'）。角色们得知石头已经被租用马车带到了Mistshore。角色们可以在那里追上Agorn（遭遇2，'Mistshore'）。

如果Agorn被捕并受到审问，他会透露在前往Mistshore的路上他停了一次。他送下了一位女士朋友，一位与散塔林会结盟的Bane的女祭司，并把石头留给了她和她的门徒保管。角色们可以在城堡区的一座旧塔中找到他们（遭遇7，'旧塔'）。在他们离开那个地方之前，角色们被曼松的幻影所挑战，它通过传送圈到达这里来收集石头。一旦幻影被击败，角色们可以使用石头得知龙之金库的入口隐藏在死亡之城的一个陵墓下（遭遇4，'陵墓'）。

在遭遇链完成之前，以下天气效果正在发挥作用。

尖啸的风声和飘落的雪花会使依赖听觉或视觉的感知（感知）检定处于劣势。风也会熄灭比火把火焰小的明火。能见度降低至60英尺。地面上的积雪在未被大量踩踏的区域会形成3。

暴露在寒冷中的角色必须在每次遭遇结束时进行一次DC 10的体质豁免检定，若失败则获得一层力竭。对寒冷具有抗性或免疫力的角色自动通过该豁免检定，穿着寒冷天气装备（如厚外套、手套、帽子等）的角色亦是如此。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4dc","npc_4ba","npc_4bb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[58],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`如果角色们偏离了主线，他们可能会发现自己不知道接下来该做什么。
【如果反派得到了石头】如果主要反派获得了格洛尔之石，他需要2d6天的时间来找到龙之金库及其钥匙。在这段时间里，角色们有机会从反派的巢穴中偷走石头。如果角色们没有及时偷走石头，反派会派遣部队进入金库击败奥瑞纳克斯并回收黄金，这又需要另外2d6天的时间。一旦黄金被回收，反派就会按照引言中详细描述的计划行事。如果角色们仍然活着，他们可以通过从反派的巢穴中偷走黄金来反对反派。
在角色们击败这些攻击者后，他们得知Grinda告诉她的老鼠使魔将石头藏在死亡之城的家族墓穴中。
当角色们到达时，他们发现Losser被敌人包围，Xanathar公会工作的肯库正带着石头逃走。
当角色们到达Cassalanter家族的陵墓时，发现里面有几个死去的邪教徒（遭遇4，'陵墓'）。
如果角色穿着中等或重型护甲，则豁免检定具有劣势。
在角色们能够接触到石头之前，一个名叫Vevette Blackwater的Zhent抓住它逃跑了，引发了一场在结冰屋顶上的追逐（遭遇5，'屋顶追逐'）。
【修改遭遇】你可以通过增加或减少怪物来调整战斗遭遇的难度。如果你需要增加已经开始的遭遇的难度，可以让敌方增援在战斗中到达。如果你发现某个遭遇过于致命，可以减少反派的生命值，让NPC来帮助角色们，或者让坏人减少损失并逃跑。`,mapGeometry:{imageRef:"adventure/WDH/EncounterChains.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_13e",locationId:"loc_13e",name:"遭遇1：小巷",activation:{condition:{type:"always"},priority:0},skeleton:["请使用地图4.1进行这次遭遇。","除非你有其他决定，否则与小巷相邻的建筑物高度为30尺（三层楼）。","由于这次遭遇发生在户外，请留意任何正在发挥作用的天气效果。","以下地点对应地图4.1。","当这次遭遇开始时，要么角色们手中握有格洛尔之石，这样的话他们在穿过塔附近的小巷时会被伏击——或者它被姗娜萨的凝视者间谍夺走了，在这种情况下他们会在小巷中追上凝视者，在这些生物能够下到下水道之前。"],flesh:`请使用地图4.1进行这次遭遇。除非你有其他决定，否则与小巷相邻的建筑物高度为30尺（三层楼）。由于这次遭遇发生在户外，请留意任何正在发挥作用的天气效果。

以下地点对应地图4.1。

当这次遭遇开始时，要么角色们手中握有格洛尔之石，这样的话他们在穿过塔附近的小巷时会被伏击——或者它被姗娜萨的凝视者间谍夺走了，在这种情况下他们会在小巷中追上凝视者，在这些生物能够下到下水道之前。

在地图上选择五个方格。这些方格包含着泥泞水坑。每个水坑里隐藏着一个弹簧式的熊陷阱。具有13或更高被动感知分数的生物在不小心踩进去之前能发现陷阱。

任何生物若踏入陷阱所在的方格，必须进行一次 DC 10 的敏捷豁免。若豁免失败，该生物会受到 3（1d6）点挥砍伤害，因为陷阱迅速夹住其脚踝，并且该生物会处于 束缚 状态，直至陷阱被移除。作为一个动作，生物可以尝试撬开陷阱，需进行一次成功的 DC 12 力量（运动）检定。

角色们进入巷子，后面跟着八名伪装成戴着巨魔面具的孩子的 狗头人。一名叫做摩加 熊地精 的巨熊人和一只 噬脑怪 心灵吞噬者藏在巷子中段的一个门道里，成功通过 DC 16 感知（观察）检定可以发现它们。

噬脑怪保持隐藏并试图控制一个角色。如果有机会，Morga试图将一个角色推入最近的陷阱。如果这些生物获得了石头，它们会将它带到姗娜萨的巢穴中。

如果一个角色与格洛尔之石共鸣，它将揭示龙之金库的位置，位于城堡区名为粉红呋噜的剧院下方，以及进入其中所需的三把钥匙。

角色们从俯瞰小巷的屋顶开始这次遭遇。如果任何角色在屋顶追逐中落到地面，让他们从小巷的一端开始。

停在小巷中间的是一辆由两匹矮种马拉动的出租马车。车夫，春原春（LG男性高仓人族平民），戴着一顶带羽毛的帽子和配套的服装。

卡萨兰特勋爵的变形怪管家，伪装成名叫Willifort Crowelle的年迈提夫林，坐在提供3的乘客车厢内。站在马车旁的是一个伪装成披着斗篷的人类保镖的须魔，戴着宽边帽，而马车上则栖息着三只隐形的小魔鬼。在之前的遭遇中幸存下来的任何棘魔也在场，他们刚刚将格洛尔之石交给了Willifort。

当Willifort看到角色们时，他命令小恶魔和棘魔发起攻击。长胡子的恶魔留在Willifort身边，并与任何试图接近雇佣马车的角色交战。

雇佣马车具有14的护甲等级，45点生命值，并对毒素和心灵伤害免疫。

如果随着遭遇的进行，角色们有可能获得格洛尔之石，Willifort就命令驾驶员尽快将雇佣马车开出小巷。如果驾驶员被失能或杀死，长胡子的恶魔会爬到马车后部的驾驶座上并驾驶车辆。如果长胡子的恶魔无法替代驾驶员，变形怪将接管缰绳。如果雇佣马车被摧毁或其马无法移动，Willifort将步行逃跑。

如果Willifort逃跑并且角色们追赶他，请继续进行遭遇3，"街道追逐"。

角色们寻找格洛尔之石的冒险首先带领他们来到Fenerus Stormcastle，一个点灯人，他在贸易区租了一间小屋（L1）。

角色们从巷子的任一端进入。

站在苹果车路径上的角色必须成功通过一次 DC 10 敏捷豁免，否则将被击中并受到 5（2d4）点钝击伤害，并被击倒 倒地。角色可以选择放弃敏捷豁免，并尝试用身体阻止车辆，这需要成功通过一次 DC 15 力量豁免。若豁免失败，角色将被车辆击中并在车继续滚动时倒地 倒地。在撞穿队伍后，车辆侧翻，苹果滚落在小巷中。提夫林男孩被抛出车外，但没有受到严重伤害。

这个男孩是三个街头顽童中的一个，他们联手从一个附近的街角偷走了苹果车。另外两个孩子在能够跳上车之前，在小巷的顶端失去了对车的控制。他们在撞车后追上他们的朋友，确保他没事，然后向任何受伤的人深表歉意。这些顽童，无害的麻烦制造者，在侧边栏"三个小淘气"中有详细描述。

如果有人问起Fenerus，孩子们知道他是谁。他们形容他是一个留着灰白头发的大个子，根据他脸上的"伤疤"，看起来好像参与过很多打斗。他们对他一无所知，只知道他独居。

菲纳鲁斯家的门敞开着，屋内已被洗劫一空。厨房的墙上用血迹画着一个圆圈，从圆周向外辐射出十条等距的直线：这是姗娜萨的标志。在厨房的地板上，通过一次成功的DC 12感知（观察）检定，可以发现几处小血迹。成功的检定还确认了地板和墙上的血液都是新鲜的。

费内鲁斯·斯托姆卡斯是血鹰帮派的创始人，这是一个骑马强盗团伙，直到今天还在骚扰前往安普海尔的旅行者。当他在一次失败的袭击后被帮派驱逐时，费内鲁斯"退休"到深水城，并加入了灯笼和烛台公会。

直到最近，费内鲁斯通过为卢斯坎城做间谍并提供他在深水城政治气候以及他在贸易区夜间巡逻时听到的有趣新闻信息来补充他的收入，他完全不知道他的联系人是布雷甘·达特家族的黑暗精灵成员，因为他们穿着斗篷，总是隐藏在阴影中。

最近，领主联盟的特工将费内鲁斯标记为通缉的强盗，并将此通知了深水城的领主们，他们派遣城市卫队去逮捕他。费内鲁斯明智地将格洛尔之石藏在别处，并希望利用它作为筹码，以换取自由以及对过去罪行的宽恕。

费内鲁斯被捕后不久，布雷甘·达特的黑暗精灵特工出现来收集石头，却被隐藏在小巷中的隐形的灰矮人伏击了。这些灰矮人是被纳尔·泽布林达斯（见附录 B）派遣来的，属于Xanathar公会的成员，目的是取回石头。他们在搜查了费内鲁斯的家并一无所获后，正等着费内鲁斯回来时，黑暗精灵出现了。黑暗精灵勉强逃过一劫。

"莱拉尔"告诉角色们，费内鲁斯拥有一件名为格洛尔之石的有感知魔法物品，它知道由前开放领主从城市贪污的大量黄金的藏匿地点。她请求角色们为了深水城的利益取回这块石头，并将其送到码头区的七面具剧院交给她。"莱拉尔"提供的报酬除了深水城开放领主的感激之情外，没有其他。

贾拉克西怀疑纳尔·泽布林达斯，他在Xanathar公会的间谍，已经背叛了他，现在正在利用布雷甘·达特的资源帮助巨眼怪取回石头。贾拉克西还知道Xanathar公会在南区下面有一个相当近的避难所，位于一个地窖群中。"莱拉尔"建议角色们在那里寻找石头。（贾拉克西不想让纳尔知道他已经注意到他了，这就是为什么他宁愿派遣一小群冒险者而不是召集布雷甘·达特的攻击力量。）

对莱拉尔的意图持怀疑态度的角色可以通过成功的感知（洞察）检定与贾拉克西的魅力（欺骗）检定进行对抗，以确定她在隐瞒一些事情。他诚实地向他们保证，他计划将黄金还给深水城以换取一些政治上的好感。

角色们对格洛尔之石的搜索引导他们来到贸易区一个被雪覆盖的小巷，那里有一个没有窗户的散塔林会安全屋（L1）和一个叫做Cuttle's Meat Pies的肉店（L2）。

角色们从小巷的两端接近。雪地中的蹄印和车辙证明贾斯汀·拉斯克的送货车在肉店外短暂停留后，最近通过了这条小巷。一个角色如果检查这些痕迹并在DC 10 感知（生存）检定中成功，可以判断出送货人既去了商店也去了小巷的住所。

在北城区下方L1和L2区域南端的死胡同尽头，有一个铁栅栏覆盖着通往下水道的开口。五个熊地精已经悄悄地从栅栏下爬了上来，并在小巷中隐蔽起来。它们突然冲出来攻击角色，希望在暴风雪中获得突袭的优势。拥有16或更高被动感知得分的角色不会被突袭。

地精是被姗娜萨派来从Zhent安全屋中取回一名囚犯的，但他们太渴望鲜血，不愿错过谋杀一群站在他们路上的冒险家的机会。风和雪使城市守卫对危险毫无察觉。

与肉店老板交谈的角色会了解到，店主是一位名叫索拉·卡特尔（LG女性Illuskan人类平民）的丰满中年妇女，她收到了来自屠夫公会的贾斯汀·拉斯克的一个意外送货。考虑到冬天鲜肉供应短缺，索拉几乎无法拒绝。她对萨卡斯的恶心行径一无所知，并承诺将此事提请屠夫公会和当地地方官注意。在此之前，她不会使用任何萨卡斯的肉来做她著名的肉馅饼。

索拉对她在L1的两位邻居心存疑虑。她们总在奇怪的时间进出，有时夜归时皮甲上还带着血迹。其中一位是二十多岁的苍白瘦削女子，留着深色乱发；另一位则是年长得多的黑皮肤光头男子，缺了半只耳朵，蓄着短短的白胡子。

这座没有窗户的房子被两个忠于曼松的Zhents占据——就是索拉描述的那两个人。他们的名字是Avareen Windrivver（LE女性Illuskan人类间谍）和Zorbog Jyarkoth（NE男性Turami人类暴徒）。

Zorbog在壁炉旁添火，同时静静观察交易。拿到石头后，Vevette爬上屋顶，留下Avareen和Zorbog来对付角色和熊地精之间冲突的生还者。

在房子的后室里，一个被绑在椅子上并塞住嘴巴的Xanathar公会知名成员——一个戴着缝有假巨眼怪眼柄的皮制头巾的盾矮人。这个矮人，奥特·钢趾（见附录 B），在码头区市场购买鱼食时被捕。经过Zhents审问奥特后，他们意识到姗娜萨会想要他回去。他被扣留，直到支付赎金，但姗娜萨已经知道他被关在哪里。任何在初次攻击中幸存下来的地精都会试图营救奥特，而Avareen和Zorbog则尽力击退他们。如果奥特被释放，他会跑回他疯狂的巨眼怪主人等待的眼柄那里。跟随他的角色将直接被引到姗娜萨的巢穴。

任何位于散塔林会前门10英尺范围内的角色可以进行一次DC 14 感知（感知）检定。检定成功的角色在呼啸的风声中听到一声嘲弄的笑声，并瞥见附近屋顶上有一个披着斗篷的身影，在暴风雪中迅速离去。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4c2","npc_4b9","npc_4ba","npc_4bb","npc_4d6","npc_4cf"],availableInfoIds:["info_13e_g1","info_13e_g2","info_13e_g3","info_13e_g4","info_13e_g5","info_13e_g6","info_13e_g7"],encounterIds:["enc_13e"],treasureSlotIds:[],eventIds:["evt_13e_e1","evt_13e_e2"],tone:"tension",_meta:{sourcePages:[61],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:`一辆满载苹果的马车从对面方向朝你冲来，沿着山坡滚下。一个戴着眼罩的提夫林男孩坐在马车上，用尽全身力气尖叫着。"小心！"他大喊道。

一位高大、优雅的女士穿着翠绿色斗篷向你们走来，她长长的银发从兜帽下飘逸而出。"如果你们是来找费内鲁斯·斯托姆卡斯的，恐怕你们来晚了，"她说。"看来姗娜萨已经先一步找到他了。费内鲁斯拥有我想要的东西。也许你们可以帮助我取回它。"`,dmGuidance:`当角色们到达Morga的藏身之处时，地精和狗头人发起了攻击。
当角色们准备好前往该地点时，请继续进行遭遇6，'剧院'。
确定他们的行进顺序，然后当他们到达巷子的中点时阅读以下文本：
如果角色们没有吓跑他们，孩子们会在小巷周围闲逛，吃苹果，翻找垃圾堆。
【三个小淘气】本章的几个场景中出现了三个街头小淘气，具体描述如下：自然 是一个瘦长、10岁的聋哑Illuskan女孩，她有一把木制玩具剑。她是这群孩子的领袖，使用她自己发明并教给朋友的手语进行交流。詹克斯 是一个9岁的Turami男孩，身材圆润，有一件斗篷、一根玩具魔杖和一只填充的枭熊"伙伴"。他在陌生人面前很害羞，但在帮助朋友时却很勇敢。斯奎迪利 是一个瘦小的9岁提夫林男孩，戴着眼罩，有一张小弓和一箭筒玩具箭。他很少在说话或行动前思考。
在角色们离开小巷之前，贾拉索·班瑞（见附录 B）使用他的易容帽以莱拉·银手的身份接近他们，莱拉尔是深水城的开放领主：
如果角色们设法看穿了贾拉克西的伪装，他会微笑并提出如果他们立即将石头送到七面具剧院给他，就给他们10,000金币。
如果角色们入侵了Xanathar公会的避难所，请继续进行遭遇9，'地窖群'。
在角色们能够进一步调查之前，他们遭到了赞塔会成员的袭击。
如果角色们觉得合适，告诉她这些肉来自被切碎的人形生物，索拉会感到恶心。
如果角色们好心警告索拉关于肉食的事，她会愉快地分享对这些顽劣邻居的担忧，并描述她们的外貌。
当角色们首次进入小巷时，Avareen站在房子的前门口，将格洛尔之石交给一个名叫Vevette Blackwater（CE女性Tethyrian人类剑客；
见附录 B）的高级Zhent。
如果角色追赶这个身影，继续进行遭遇5，"屋顶追逐"。`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_140",locationId:"loc_13e",name:"L1. 小巷住宅",activation:{condition:{type:"always"},priority:0},skeleton:["这座古老的单层无窗石屋，带有板岩屋顶，隐藏在巷子中间，周围是更高的建筑。","它的门由坚固的木材制成，外门可以从内部闩上。","室内被划分为两个房间，一个带有壁炉的厨房和一个简朴装饰的卧室。"],flesh:`这座古老的单层无窗石屋，带有板岩屋顶，隐藏在巷子中间，周围是更高的建筑。它的门由坚固的木材制成，外门可以从内部闩上。要强行打开被闩上的门，需要通过一个 DC 18 力量（运动）检定。

室内被划分为两个房间，一个带有壁炉的厨房和一个简朴装饰的卧室。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_13e_g2","info_13e_g6"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[61],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_141",locationId:"loc_13e",name:"L2. 商店",activation:{condition:{type:"always"},priority:0},skeleton:["这座石头建筑是一家商店。","如果遭遇没有指定这里出售的商品，请掷一个d20并参考商店商品表来确定这家店卖什么。","一个小房间用作衣帽间，访客可以在这里挂上他们较重的外衣。","衣帽间过去是商店的主体部分，商品陈列其中。","北边的房间是储藏室或工作间。"],flesh:`这座石头建筑是一家商店。如果遭遇没有指定这里出售的商品，请掷一个d20并参考商店商品表来确定这家店卖什么。

一个小房间用作衣帽间，访客可以在这里挂上他们较重的外衣。衣帽间过去是商店的主体部分，商品陈列其中。北边的房间是储藏室或工作间。店主（平民）拥有所有门的钥匙。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_13e_g5"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[61],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},randomTableIds:["tbl_141_0"]},{id:"scn_157",locationId:"loc_157",name:"遭遇2: 雾岸",activation:{condition:{type:"always"},priority:0},skeleton:["Mistshore是一个破败的码头区社区，散发着鱼腥味和烧焦木材的气味。","一年多前，一场火灾席卷了这个地区，现在大多数建筑物都已成为烧毁的外壳，顶多用帆布作为屋顶。","码头上排列着钓鱼竿和渔网，冬季时，15尺深的水被一层厚厚的冰覆盖。","迷雾海岸是由旧船木料搭建的破旧房屋的杂乱无章的集合，居住着贫困的沃特迪普市民。","去年的火灾将几座建筑物烧成了灰烬。"],flesh:`Mistshore是一个破败的码头区社区，散发着鱼腥味和烧焦木材的气味。一年多前，一场火灾席卷了这个地区，现在大多数建筑物都已成为烧毁的外壳，顶多用帆布作为屋顶。码头上排列着钓鱼竿和渔网，冬季时，15尺深的水被一层厚厚的冰覆盖。

迷雾海岸是由旧船木料搭建的破旧房屋的杂乱无章的集合，居住着贫困的沃特迪普市民。去年的火灾将几座建筑物烧成了灰烬。尽管有些建筑被重建了，但其他一些则被毁得无法修复，现在被无家可归的儿童和老鼠用作无屋顶的巢穴。

以下地点标记于地图 4.2。

姗娜萨 已经派遣部队从格林达·加洛斯那里收集格洛尔之石，格林达·加洛斯是码头上众所周知的古怪法师，她拥有一个潜水装置，用来在深水港底部寻找宝藏。角色们很容易就能找到前往她位于迷雾海岸的住所（D2）的路线。

四个Xanathar公会的成员（CE男性人类匪徒们）在名叫诺思卡·厄格雷（见附录 B）的矮人执法者的指挥下试图破门而入。一个迈罗人鱼也在诺斯卡的指挥下在码头下游动。

两轮之后，另外八名匪徒们从克拉肯的愚行（D1）跳下来加入混战。这些流氓被支付了每人1金币来保护Noska的后方。角色们可以通过提供更高的贿赂（至少每人5金币）来让他们反对Noska。

剩下的Xanathar公会成员会掩护他的逃跑。战斗结束后，格林达会从她的住所出来感谢角色们。

格林达承认她过去曾与Xanathar公会有过生意往来。她的命令是保护这块石头，直到诺斯卡来认领它，但她改变了主意，决定自己保留这块石头。她现在意识到这个决定是个错误。

格林达告诉角色们，她把石头给了她的老鼠宠物，并告诉这个生物把它藏在死者之城的家族陵墓里。这位法师给了角色们前往那里的指引和陵墓的钥匙。（他们不需要钥匙，因为他们到达时陵墓是开着的。）

姗娜萨用它来监视角色们。感知被动分数为15或更高的角色可以在队伍进入死者之城后不久发现瞪眼怪。如果遭到攻击，瞪眼怪会进行自卫。

掌握了前往加洛斯家族陵墓的方向，角色们可以前往死者之城。春季遭遇链继续进行遭遇4，"陵墓"。

在追捕的最后，角色们在Mistshore的角落围堵了菲尔莱科特·拉菲恩和克雷比格·马斯奇尔。这两个黑暗精灵枪手（见附录 B）潜伏在克拉肯的愚行（D1）后面等待救援。如果任何一个黑暗精灵倒下，另一个会把石头扔进海港，以防止它落入敌人手中。一个角色可以通过使用一个侦测魔法法术来帮助确定其位置，从而回收沉没的石头。

一个被称为大喷气的机械龙龟，几乎一个世纪前沉没在深水港。为贾拉克西工作的Lantanese侏儒设法修复了这个构装生物。

在它浮出水面后的那一轮，机制会向码头喷出一团30英尺立方的蒸汽，然后以20英尺的游泳速度开始移动。任何在蒸汽云中的生物必须进行一次DC 14敏捷豁免，若失败则受到22点（4d10）火焰伤害，若成功则受到一半伤害。大贝奇只能喷一次蒸汽。在之后的每一轮，它会向贾拉克斯的旗舰抢眼人物游泳总计40英尺，该旗舰停泊在1英里外的港口中央。

大贝奇拥有 AC 18，75 点生命值，并对毒素和心灵伤害免疫。如果它的生命值降至 0，它将再次沉入深水港的底部。如果它在下沉时黑暗精灵仍在它的背上，他们将游完剩下的路程前往 抢眼人物，但由于冷水和劳累，他们将获得两级 力竭。

如果黑暗精灵在大喷气的背上被击败，格洛尔之石会从机械龙龟的壳上滚落，掉入深水港。如果水足够深，角色们可能需要借用格林达·加洛斯的夸力许装置来回收它。

如果一个角色与格洛尔之石产生共鸣，它会揭示位于海洋区一座旧石头风车下的龙之金库的位置，以及进入所需的三把钥匙。

角色们前往迷雾海岸寻找他们认为拥有格洛尔之石的人。在前往目的地的途中，那名男子让他雇佣的马车在城堡区短暂停留，让他的女性朋友下车。她现在拥有那块石头——角色们可以通过询问那名男子，一个名叫Agorn Fuoco的吟游诗人，来发现这一事实。

Agorn给曼松留下了深刻的印象，以至于他在组织的等级中迅速提升，但他的生活除此之外充满了失望。他没有获得他渴望的名声，也没有得到他认为应得的财富。他采纳了散塔林会的信条，认为权力属于那些值得拥有它的人，并且开始将黑网视为某种新的家庭。Agorn来到迷雾海岸拜访他真正的家庭成员——他病重且生活在极度贫困中的母亲。

在邻近地区的边缘，等待着载Agorn Fuoco穿过暴风雪到迷雾海岸的雇佣马车。两匹矮种马在雪地中不耐烦地跺着蹄子。车夫Rowan Evenwood（LG女性Chondathan人类平民），为了等待Agorn返回而额外支付了费用。他匆忙离开，她不知道要等多久，但她的耐心是有限的。

一场暴风雪正在迷雾海岸肆虐，将其破旧的公寓变成了被飞雪掩盖的黑暗、隐约的轮廓。码头周围的水已经完全结冰，而穿着破烂衣物的贫困平民聚集在闪烁的篝火周围取暖。这些人对任何他们不认识的人都持怀疑态度，并且远非热情，即使对那些向他们施舍的人也是如此。只要有机会，这些人甚至会从角色们的背后抢走衣服。

在码头下面的冰上玩耍的是三个穿着磨损斗篷和手套的街头小淘气。他们在视线中穿梭，互相投掷雪球，当暴风雪袭击他们上方的建筑物时，他们欢笑着（见"三个小淘气"）。

当子嗣们第一次看到角色时，他们的兴趣被激起了。这些子嗣自诩为某种冒险者，并且他们很快就开始崇拜并模仿现实中的冒险者。斯奎迪利甚至胆敢向其中一人猛投雪球（命中加值+0）。子嗣们知道阿贡·福科是谁，因为他过去曾在雾滨居住并演奏音乐。他们提出要带角色去他母亲的住所。

在地图4.2上选择一个未标记的建筑作为Fuoco的住所。Agorn Fuoco（NE男性Turami吟游诗人；Agorn正在切断他与旧家庭的联系，拥抱他的新家庭：散塔林会。角色们可以通过在他母亲窒息之前将他从母亲身边拉开来阻止他犯下弑母罪。

Agorn是被他在剧院看到的戏剧以及他的女性朋友Amath Sercent所感动，才决定实施这一行为的，他将格洛尔之石交给了Amath。他不会轻易放弃她的位置，尽管可以使用魔法从他口中撬出信息。角色们也可以与雇佣马车司机Rowan Evenwood交谈，她在将Agorn的女性朋友放下后，将Agorn运送到了迷雾海岸。Amath住在城堡区一个叫做Yellowspire的旧塔里。

这些暴徒战斗至死，而Agorn则试图逃跑。如果他逃脱了，角色们可能会在第8章再次遇到他。

当Zhents发动攻击而Agorn试图逃跑时，角色们听到一个孩子的尖叫声从相反的方向传来。透过飘舞的雪花，他们可以看到其中一个流浪儿，詹克斯，掉入了薄冰层中，面临沉入港口底部的危险。他的两个朋友正试图将他从冰洞中拉出来，但他太重了。孩子们大约在30英尺外。一个距离詹克斯伸手可及的角色可以使用一个动作尝试将男孩从冷水中拉出来，这样做需要进行一次成功的DC 11力量（运动）检定。如果在他掉入冰洞后1分钟内没有成人前来救援詹克斯，他将沉入水面下，并因冰冷的海水而开始溺水。

由蕾米莉亚·港树（见附录 B）派出的两名Harper间谍们出现在现场。他们的名字是Salazar Lorrance（CG男性Tethyrian人类）和Mavia Oxlander（NG女性Chondathan人类）。如果战斗没有很快转向队伍有利的方向，格林达·加洛斯（见D2）出现并使用她的魔法来帮助他们。

根据Agorn Fuoco或他的马车夫提供的信息，角色们可能觉得有必要去城堡区的Yellowspire塔楼拜访。请继续进行遭遇7，'旧塔楼'。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4c9","npc_4b4","npc_4aa","npc_4bb","npc_49a","npc_4d1"],availableInfoIds:["info_157_g1","info_157_g2","info_157_g3"],encounterIds:["enc_157"],treasureSlotIds:[],eventIds:["evt_157_e1"],tone:"tension",_meta:{sourcePages:[65],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`当角色们到达她的家时，格林达正躲在里面，用家具堵住了门。
当角色们到达时，它浮出水面进行攻击。
如果角色们前来帮助格林达，Noska命令他的暴徒们攻击他们，同时他用他的弩向角色们射击。
如果角色们让流氓们反对诺斯卡，或者将矮人的生命力减少到一半或更少，诺斯卡会逃跑。
当角色们离开迷雾海岸时，一只凝视者眼魔（见附录 B）开始跟随他们，保持至少60尺的距离。
当角色们面对他们时，Fel'rekt和Krebbyg拖延时间，直到他们的逃生车辆到达。
在角色们将Fel'rekt和Krebbyg逼入角落后的两个回合，大喷气在主动性计数5时浮出水面，靠近码头，足够近，以至于在他们的下一个回合，黑暗精灵可以跳到它覆盖着藤壶的背上。
当角色们准备好访问该地点时，请继续进行遭遇10，'改造风车'。
见附录 B）在里面，试图用他母亲用作枕套的袋子闷死他卧床不起的母亲Marta（N女性Turami人类平民，有1点生命值），他的脸上流下了既喜悦又悲伤的泪水。
当角色们带着或不带Agorn作为俘虏离开Fuoco住所时，他们被九名散塔林会暴徒包围。
如果角色们发现自己在与Zhents的战斗中处于劣势，会有两方面的帮助到来。`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_159",locationId:"loc_157",name:"D1. 克拉肯的愚行",activation:{condition:{type:"always"},priority:0},skeleton:['"克拉肯的愚行"是一艘搁浅的海盗船，米斯特岸的一些居民将其用作公寓。',"任何时候，都有4d6名匪徒们在甲板上闲逛，希望有人需要肌肉力量会提供给他们工作。","这些恶棍住在下面满是老鼠的船舱里。","他们愿意以价格来帮助任何请求他们的人。","每个人都要求1金币来参与战斗或为雇主制造干扰。"],flesh:'"克拉肯的愚行"是一艘搁浅的海盗船，米斯特岸的一些居民将其用作公寓。任何时候，都有4d6名匪徒们在甲板上闲逛，希望有人需要肌肉力量会提供给他们工作。这些恶棍住在下面满是老鼠的船舱里。他们愿意以价格来帮助任何请求他们的人。每个人都要求1金币来参与战斗或为雇主制造干扰。',spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[65],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_15a",locationId:"loc_157",name:"D2. 格林达的住所",activation:{condition:{type:"always"},priority:0},skeleton:["一个名叫格林达·加洛斯（CN女性Illuskan人类魔法师，会说通用语、矮人语、半身人语和地底通用语）的疯狂寻宝者住在这里。","她破旧的家中有一张未整理的床、一个炼金术实验室、一个小炉子、一个衣架、一张桌子、一把凳子、一把状况不佳的填充椅、一个洗脸盆，以及一个上了锁的木制海箱，上面施加了守卫刻文法术。","格林达拿着钥匙，如果除了格林达之外的任何人打开箱子的盖子，符文就会触发爆炸符文效果。",'格林达的箱子里有一个沉重的铁钥匙，用来锁住和打开位于死者之城的加洛斯家族陵墓（见下文的"迷雾海岸：春季"）。'],flesh:`一个名叫格林达·加洛斯（CN女性Illuskan人类魔法师，会说通用语、矮人语、半身人语和地底通用语）的疯狂寻宝者住在这里。她破旧的家中有一张未整理的床、一个炼金术实验室、一个小炉子、一个衣架、一张桌子、一把凳子、一把状况不佳的填充椅、一个洗脸盆，以及一个上了锁的木制海箱，上面施加了守卫刻文法术。格林达拿着钥匙，如果除了格林达之外的任何人打开箱子的盖子，符文就会触发爆炸符文效果。

格林达的箱子里有一个沉重的铁钥匙，用来锁住和打开位于死者之城的加洛斯家族陵墓（见下文的"迷雾海岸：春季"）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_157_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_15a_e1"],tone:"tension",_meta:{sourcePages:[65],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_15c",locationId:"loc_157",name:"D3. 格林达的装置",activation:{condition:{type:"always"},priority:0},skeleton:["当格林达·加洛斯没有使用夸力许装置在深水港搜寻宝藏时，她会将它存放在这里。","当装置在此处时，它会漂浮在一个封闭的船坞中。","通往港口的水下金属门由内侧的一根铁条保持关闭。","装置可以自动抬起铁条；","格林达允许角色借用她的夸力许装置，条件是他们首先使用这个设备在深水港底部搜寻宝藏，并且给她找到的任何东西的一半。"],flesh:`当格林达·加洛斯没有使用夸力许装置在深水港搜寻宝藏时，她会将它存放在这里。当装置在此处时，它会漂浮在一个封闭的船坞中。通往港口的水下金属门由内侧的一根铁条保持关闭。装置可以自动抬起铁条；位于船坞内的生物可以通过一次成功的DC 20力量（运动）检定来抬起它。

格林达允许角色借用她的夸力许装置，条件是他们首先使用这个设备在深水港底部搜寻宝藏，并且给她找到的任何东西的一半。为了满足法师的要求，角色们必须花一天时间搜索港口。在一天结束时，驾驶员进行一次智力（调查）检定。将检定的总分乘以10，以确定找到的任何宝藏的金币价值。格林达出售这些战利品，并将一半给角色们。

如果掷出偶数，则一只名为奥布里特罗斯的觉醒鲨鱼会攻击他们。格林达最近与这只鲨鱼有过多次近距离的遭遇，但由于担心吓跑角色们，她没有提及此事。奥布里特罗斯是一只巨鲨，具有以下变化：

这只鲨鱼的阵营是混乱邪恶。

它的智力得分是10（+0），并且能够说和理解水族语。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_15c"],treasureSlotIds:["trs_15c_0"],eventIds:["evt_15c_e1"],tone:"tension",_meta:{sourcePages:[66],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"当角色们在港口搜寻宝藏时，掷任意骰子。",mapGeometry:{imageRef:"adventure/WDH/Grinda.webp"}},{id:"scn_16c",locationId:"loc_157",name:"遭遇3：街道追逐",activation:{condition:{type:"always"},priority:0},skeleton:['这次追逐将展开为一种"心灵剧院"体验。',"因此，你不需要地图来运行这次遭遇。","追逐发生在户外，所以请留意任何正在生效的天气效果。","一名与Xanathar公会勾结的天狗拿着格洛尔之石在街道上奔跑。","追逐开始时，天狗距离角色们60尺远。"],flesh:`这次追逐将展开为一种"心灵剧院"体验。因此，你不需要地图来运行这次遭遇。追逐发生在户外，所以请留意任何正在生效的天气效果。

一名与Xanathar公会勾结的天狗拿着格洛尔之石在街道上奔跑。追逐开始时，天狗距离角色们60尺远。

如果任何时候天狗处于失能状态，另一个之前被雨或雾隐藏的天狗会加入追逐，按照主动性计数的下一个行动。它突然出现，抓起石头，然后带着它逃跑。

请继续进行遭遇7，'旧塔楼'。

角色们正在追逐卡萨拉特领主的变形怪仆人Willifort，他乘坐雇佣马车或步行逃跑。追逐发生在拥挤的街道上，吸引了众多惊讶的旁观者。

如果你还没有追踪变形怪和角色之间的距离，假设在追逐开始时，如果Willifort乘坐雇佣马车，角色们距离他们的目标120尺远，或者如果变形怪步行，则是60尺远。雇佣马车的主动性调整值为+0，Willifort随它移动。在雇佣马车内的生物在自己的回合不需要在城市追逐复杂性表格上进行滚动。

如果Willifort乘坐雇佣马车逃跑，在追逐的第三轮时，他会被一大群人挡住道路，迫使马车停下来。（如果追逐发生在创始人日，人群是节日庆祝活动的一部分。）变形怪在下一回合跳出马车，并步行穿过人群。

人群中的任何生物都有3，任何因为掩护而未击中该生物的攻击将击中一个无辜的平民。

如果Willifort处于失能状态，一只乌鸦突然俯冲下来，在主动性计数中下一个行动。它抓起石头并带着它逃跑。这只乌鸦是一只变形的小魔鬼，为卡萨拉特女士工作。

追逐在三个街头小淘气（见"三个小淘气"）偷走石头时结束，无论是通过从变形怪身上扒窃还是通过向乌鸦射玩具箭使其掉落石头。一旦他们拿到石头，街头小淘气就会迅速在人群中消失。如果变形怪Willifort还在附近，他会试图溜走，以为自己仍然拥有石头。如果小恶魔在场，它会变为隐形并在人群上空盘旋，徒劳地试图找到石头。

一个角色可以使用一个动作在拥挤的街道上进行搜索，进行一次 DC 17 感知（察觉）检定。如果检定成功，角色会注意到街道上一个没有正确关闭的铁栅栏。揭开它后，会发现一个铁梯子向下延伸10英尺，通往一个地下下水道隧道。角色们如果下到隧道里，可以听到远处的水花声和孩子们的声音，并可能决定跟随他们。（这些孩子们在黑暗中手拉着手，由 斯奎迪利 引导，它拥有黑暗视觉。）

离开剧院后，角色们继续追击难以捉摸的Zhent间谍，Vevette Blackwater（CE女性Tethyrian人类剑客；她带领他们穿过雪地街道，直到她最终被抓住，或者角色们放弃追逐。她从角色们30尺远的地方开始。如果因为追逐复杂性而被迫进行属性检定或豁免检定，她在掷骰时有优势。此外，她可以在追逐中使用冲刺动作，而无需进行体质检定以避免力竭。

如果她被抓住，Vevette会投降。她指望法律保护她免受严重伤害，她知道自己没有做什么值得逮捕的事情。Vevette不再拥有格洛尔之石，在剧院里就已经把它交出去了。她不会自愿透露谁拥有那块石头，尽管角色们可以使用魅惑类人法术或类似的魔法来逼问信息。

其中一个是名叫Agorn Fuoco的吟游诗人，另一个是海文特里女士不认识的女性。

雷马利亚和Vevette都知道Agorn常在危险的码头社区迷雾海岸附近消磨时间。

继续进行遭遇2，'雾岸。'`,spotlightRefs:[],presentNpcIds:["npc_4d6","npc_4d1"],availableInfoIds:["info_16c_g1"],encounterIds:["enc_16c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[68],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`对于这次遭遇，请使用第8章中表格的追逐规则和城市追逐复杂情况城主指南。
当角色们接近抓住天狗时，或者当你想要追逐结束时，这个生物躲进了一座旧塔楼。
如果角色们跟随街头小淘气进入下水道，请继续进行遭遇9，'地窖群'。
见附录 B）。
如果角色们返回剧院，蕾米莉亚·港树（见附录 B）会向他们挥手并告诉他们，她看到两个人在他们离开剧院后不久就离开了剧院，然后很快就一起乘坐了雇佣马车离开。`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_176",locationId:"loc_176",name:"遭遇4：陵墓",activation:{condition:{type:"always"},priority:0},skeleton:["死者之城是一个点缀着陵墓的公园。","此地夜间关闭，每个入口大门都有两名城市卫兵（警卫们）站岗。","在黄昏时分，成百上千的漂流球从城市居住区出发，汇聚到死者之城。","它们在这里过夜，然后在黎明时分分散并返回到苏醒的城市——出于某种无人知晓的原因。","Sir Ambrose Everdawn (LG男性人类Tethyrian 骑士), 是Kelemvor（死者之神）的一位年迈仆人，从日落到日出巡逻墓地，驱赶盗墓贼，确保死者安息。"],flesh:`死者之城是一个点缀着陵墓的公园。此地夜间关闭，每个入口大门都有两名城市卫兵（警卫们）站岗。角色若通过一次成功的 DC 15 敏捷（潜行）检定，可以不被发现地翻墙进入。

在黄昏时分，成百上千的漂流球从城市居住区出发，汇聚到死者之城。它们在这里过夜，然后在黎明时分分散并返回到苏醒的城市——出于某种无人知晓的原因。

Sir Ambrose Everdawn (LG男性人类Tethyrian 骑士), 是Kelemvor（死者之神）的一位年迈仆人，从日落到日出巡逻墓地，驱赶盗墓贼，确保死者安息。在黑暗中潜行于墓地的角色有30遇到他。如果发生了这种情况，他会护送他们离开，并在他们拒绝离开时通知城市警卫。

陵墓内的房间天花板高度为8尺，有6尺高的通道和门道连接它们。

以下地点对应地图4.3。

他们到达时，陵墓的双扇门是敞开的。

早些时候，格林达·加洛斯的老鼠宠物到达这里，发现陵墓的门敞开着，里面有盗墓者。他们杀死了老鼠，拿走了石头，并带着Grinda祖先的骸骨逃跑了。搜索被洗劫的墓穴的角色们既没有找到老鼠也没有找到石头，但他们确实发现了一个盗墓者留下的线索（见下文的"墓穴线索"）。

搜索地下墓穴的角色们可以在地板上的灰尘中找到一把闪亮的钢钥匙。其中一个盗墓者在盗墓时掉落了它。

角色们可以将钥匙带到'金属奇迹之屋'，即位于码头区的辉煌铠甲工匠、锁匠与精工师公会的大厅，或是带到任何当地锁匠那里。无论在哪一处，都会有人认出这把钥匙是由贸易区一位名叫艾拉斯普拉·乌尔玛尔的矮人锁匠所打造的。艾拉斯普拉不会轻易透露客户的名字或住址，但她对竖琴手组织怀有极大的敬意；

否则，角色们必须使用魔法强迫埃拉斯帕释放信息，或者他们必须偷看她的记录，这些记录她放在一个可以用敲击术法术或类似魔法打开的保险箱中。要打开保险箱上的密码锁，角色必须连续成功进行三次DC 20敏捷（调查）检定。每次尝试开锁都需要一个动作。

从Elaspra或她的记录中，角色们得知她把钥匙卖给了一个名叫Volkarr Kibbens的男人，他的地址是南城区的一个旧风车。这把钥匙可以打开他公寓的门，他和一个叫Urlaster Ghann的另一个男人共享这个公寓。

领袖Gorath用矮人语质问角色们，要求交出格洛尔之石，并且不相信他们没有这块石头。如果石头没有立即交给他们，这些灰矮人会变大并发动攻击。姗娜萨通过一个凝视者的视角观察战斗的发展（见附录 B），凝视者不参与战斗并试图保持隐蔽。

如果这次遭遇发生在夜晚，有 50 安布罗斯·永昼会听到动静并前来调查，战斗中有两名灰矮人倒下后他才会到达。角色们可以通过一次成功的 DC 15 魅力（说服）检定来说服他他们并非盗墓者。如果他们表现得有礼貌，安布罗斯会护送他们离开死者之城，并警告他们不要再擅闯。否则，他会试图制服他们并将他们交给城市守卫。

一旦他们追踪到钥匙的主人，角色们可以前往南城区寻找Volkarr Kibbens。春季遭遇链继续进行遭遇10，"改造风车"。

角色们前往死者之城，该城从黎明到黄昏对公众开放。一座维护良好的陵墓入口上方刻有卡萨兰特的名字。一次成功的 DC 20 智力（调查）检定会发现门最近被打开过，门上的污渍证明了这一点。角色可以尝试使用盗贼工具开锁，这需要进行一次成功的 DC 15 敏捷检定。一个 敲击术 法术或类似的魔法也可以打开这扇门。

人类足迹在上层的灰尘中交错。对地下墓穴的搜索揭示了三具人类尸体——两名男性和一名女性，都穿着带兜帽的长袍。进一步检查发现这名女性仍在呼吸（昏迷，生命值为0）。

这三名邪教徒是维克托罗·卡萨兰特的阿斯蒙蒂斯邪教中的低级成员。他们被两个按照卡萨兰特勋爵命令行事的邪教狂信者出卖了，卡萨兰特勋爵不仅想要格洛尔之石，而且作为安全预防措施，还打算消灭知道太多关于它的邪教成员。这三名邪教徒被匕首和致伤术法术击倒。

生还者是Vaelle Lurval（LE女性Tethyrian人类邪教徒），一位30岁的Waterdavian花商。她是由她的男朋友Holiver Tornrudder引入邪教的，他死在附近。另一个死去的邪教徒叫Kaeth Warloon。

如果Vaelle得到治疗，她会恢复意识。她透露说，邪教狂信者Arn Xalrondar和Seffia Naelryke很可能已经把石头带到了南城区的一个旧风车里，他们在那里举行自己的仪式来崇拜阿斯蒙蒂斯。Vaelle可以提供方向，或者如果她完全康复，她可以带领角色们去那里，以报复她被谋杀的情人。

Vaelle认为邪教狂信者是自行行动的，而不是按照卡萨兰特勋爵的命令。她不会透露卡萨兰特家族是邪教的领袖，除非被魔法强迫这样做。

继续进行遭遇10，'改造风车。'

格洛尔之石 揭示了龙之金库位于死城中Brandath家族的陵墓之下。角色们不太可能知道，但Brandath家族是一个古老的家族。Lord Dagult Neverember为了财富而与该家族联姻，Lady Brandath生下了他的儿子Renaer。Neverember将他贪污的黄金位置托付给他已故妻子的家族，这是一种黑暗的讽刺。瑞纳尔·奈沃兰波如果得知真相，会感到震惊但不会太惊讶。

墓地被雪覆盖，尽管一些游客即使在冬天也被其风景如画的美丽所吸引，但暴风雪使大多数人远离。破败的陵墓密封得严严实实，其入口上方刻有BRANDATH的名字。大榆树和桦树围绕着这座建筑生长，尽管它们光秃秃的枝条，但仍尽其所能地为它提供庇护。

生长在入口前方的最大的树是一只树人。当一个或多个生物接近入口时，它就会苏醒并咆哮："只有Brandath血统的人在这里受欢迎！离开！" 这只treant特别易怒，毕竟是冬天。

如果Brandath后裔以外的人试图打开陵墓，树精会活化两棵附近的树，然后发动攻击。树精及其活化的盟友体型太大，无法进入陵墓。

角色们可以杀死树人，尝试悄悄绕过它，或者撤退直到他们了解更多关于布兰德森家族的信息。经过一天的研究并通过一个成功的 DC 10 智力（调查）检定，角色们发现他们认识这样一个人：瑞纳尔·奈沃兰波。如果他们请求雷纳尔允许他们进入布兰德森家族的地下墓穴，他会同意。因为树人能感知到雷纳尔体内流淌着布兰德森家族的血脉，它允许他以及他称之为朋友的人不受干扰地进入，并对雷纳尔随口说道："你的母亲是个可爱的人。"

在通往地下层的第一级台阶上已经施放了一个 守卫刻文 法术，当一个人形生物通过台阶时，刻文会被触发。除非通过 造风术 或其他方式清除地板上的灰尘，否则无法发现这个刻文。一旦灰尘被扫除，通过一个成功的 DC 15 智力（调查）检定，角色可以发现这个刻文。

如果这个符文被触发，它会在20英尺半径的球形区域内爆发出魔法火焰。火焰会绕过角落。区域内的每个生物必须进行一次DC 15敏捷豁免，豁免失败则受到22（5d8）点火焰伤害，豁免成功则受到一半伤害。符文在触发后消失。

一个侦测魔法法术揭示了来自地下层一个石棺的变形光环。这个墓室包含着Uld Brandath的碎骨，Uld Brandath是一个在几十年前因一场离奇事故去世的Waterdavian magister（暂译为：魔法大师）。（一只石像鬼从政府大楼的一角脱落并落在Uld身上，把他压碎了。）守护他遗体的是六个由被Uld判处死刑的谋杀犯的手制成的蠕行之爪们。当棺盖被举起或推到一边时，这些不死生物之手会弹出并攻击。

在骨头之中躺着Uld的智力头带，一旦解决了爬行爪，角色们就可以取回它。

地下层东端的坍塌实际上是一个幻象，它掩盖了一个完好无损的、10尺宽的斜坡通道。角色们可以直接穿过这个没有实体的幻象，一个解除魔法法术可以将其破坏。隧道向下蜿蜒数百尺，逐渐加宽至20尺，最终到达龙之金库的门前。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4dc","npc_4d2"],availableInfoIds:["info_157_g2","info_176_g1","info_176_g2","info_176_g3","info_176_g4","info_176_g5"],encounterIds:["enc_176"],treasureSlotIds:[],eventIds:["evt_176_e1","evt_176_e2"],tone:"tension",_meta:{sourcePages:[69],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`当角色们来到Garloth陵墓寻找格洛尔之石时，这个遭遇开始了。
当角色们离开时，Xanathar公会的成员攻击他们，试图夺回石头。
如果角色们访问艾拉斯普拉的店铺，可以从她那里得知，她曾为一位购买了她精品锁具的客户打造过一把钥匙，甚至为他安装了锁具。
如果角色属于这个组织并出示竖琴手徽章作为证明，可以通过一次成功的 DC 13 魅力（说服）检定从她那里获取信息。
如果角色伪装成竖琴手成员，也可以通过一次成功的 DC 16 魅力（欺骗）检定骗取她的信任。
当角色们离开陵墓时，他们被四名灰矮人伏击，这些是Xanathar公会的成员，他们利用隐形能力悄悄溜过了墓地守卫。
当角色们抵达寻找 格洛尔之石 时，外面的门是锁着的。
【反派巢穴】第5章到第8章描述了主要反派的巢穴。角色们可能出于各种原因想要探索这些巢穴，包括以下几点：
干扰反派的行动
与反派见面（可能是为了缔结和平或联盟）
为派系完成一个特殊任务（见"加入派系"）
调查作为另一个反派策划的阴谋的一部分而给他们的假线索
如果反派拥有格洛尔之石，则窃取它；或者当线索中断时，寻找其下落的线索`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_178",locationId:"loc_176",name:"M1. 地面层",activation:{condition:{type:"always"},priority:0},skeleton:["除非遭遇的文本另有说明，否则通往陵墓的石制双门是锁着的。","里面，在四个显眼的大理石棺材之间的地面上，有一个家族徽章被醒目地展示着。","这些棺材上刻有安息者的名字，里面除了灰尘和骨头之外空无一物。"],flesh:`除非遭遇的文本另有说明，否则通往陵墓的石制双门是锁着的。角色可以使用盗贼工具并通过一次成功的DC 15敏捷检定来撬开锁，或者通过一次成功的DC 25力量（运动）检定强行打开门。

里面，在四个显眼的大理石棺材之间的地面上，有一个家族徽章被醒目地展示着。这些棺材上刻有安息者的名字，里面除了灰尘和骨头之外空无一物。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[69],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_179",locationId:"loc_176",name:"M2. 地下墓穴",activation:{condition:{type:"always"},priority:0},skeleton:["空荡的壁灯装饰着墙壁。","蛛网和灰尘表明这个地方已经很长时间没有人照料了。","壁龛中的石棺里只有灰尘和骨头。"],flesh:"空荡的壁灯装饰着墙壁。蛛网和灰尘表明这个地方已经很长时间没有人照料了。壁龛中的石棺里只有灰尘和骨头。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_176_g1","info_176_g3","info_176_g5"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[69],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_188",locationId:"loc_176",name:"遭遇5: 屋顶追逐",activation:{condition:{type:"always"},priority:0},skeleton:["同时使用了屋顶追逐并发症表，该表仅适用于徒步穿越屋顶的生物。","飞行生物无需在该表上掷骰。","角色们正试图追上三个在屋顶上方低飞的棘魔，以免被深水城的狮鹫骑兵发现。","追逐开始时，恶魔们距离角色们100尺远。","如果携带格洛尔之石的恶魔变得失能，另一个恶魔会夺走石头并带着它逃跑。"],flesh:`同时使用了屋顶追逐并发症表，该表仅适用于徒步穿越屋顶的生物。飞行生物无需在该表上掷骰。

角色们正试图追上三个在屋顶上方低飞的棘魔，以免被深水城的狮鹫骑兵发现。追逐开始时，恶魔们距离角色们100尺远。

如果携带格洛尔之石的恶魔变得失能，另一个恶魔会夺走石头并带着它逃跑。

继续进行遭遇1，"小巷"。

角色们正在追逐两个黑暗精灵枪手（见附录 B），穿过码头区的风大屋顶。黑暗精灵在逃跑时保持在一起，但每一个都按照自己的主动性计数行动。

菲尔莱科特·拉菲恩和克雷比格·马斯奇尔在追逐者前方40尺处开始。他们在自己的回合中只进行移动，尽可能地拉开自己和角色之间的距离。Fel'rekt在追逐开始时拥有格洛尔之石，但只要两个黑暗精灵彼此之间距离不超过10尺，一个黑暗精灵枪手就可以作为反应将石头传给另一个。

黑暗精灵一直穿越屋顶，直到他们到达被称为雾岸的破旧码头区。继续追踪的角色可以跟随他们一直到那里。如果所有角色都丢失了目标，他们可以询问地面上看到黑暗精灵朝雾岸方向去的城市居民。无论哪种情况，请继续进行遭遇2，'雾岸。'

一个名叫Vevette Blackwater（CE女性Tethyrian人类剑客；打算追捕她的角色在追逐开始时距离她的目标60尺远，也必须走上屋顶，否则就会失去她的踪迹。

Vevette在加入散塔林会并成为曼松的得力副手之前，是一个残暴的海盗。她在危险面前疯狂地大笑，并且喜欢精彩的追逐。她非常熟悉深水城的街道、小巷和屋顶。如果因为追逐中的复杂情况而被迫进行属性检定或豁免检定，她在掷骰时有优势。此外，她在追逐中可以采取冲刺行动，而无需进行体质检定以避免力竭状态。

追逐不会超过5轮，在追逐结束后，Vevette降落到地面并躲进一个剧院。失去她视线的角色可以请求她经过路径上的人们帮助他们。继续进行遭遇6，'剧院'。`,spotlightRefs:[],presentNpcIds:["npc_4aa","npc_4d6","npc_4bb"],availableInfoIds:[],encounterIds:["enc_188"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[72],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`本次遭遇使用了城主指南第8章中的追逐规则。
当角色们接近获得石头时，或者当你想结束追逐时，所有剩余的棘魔会躲进一条小巷。
如果角色们失去了目标，他们可以询问地面上的市民，了解恶魔们去了哪里。
见附录 B）的Zhent成员夺走了格洛尔之石，并在暴风雪中尽可能快地穿越结冰的屋顶逃跑。`,randomTableIds:["tbl_188_0"],mapGeometry:{imageRef:"adventure/WDH/Rooftop.webp"}},{id:"scn_18f",locationId:"loc_18f",name:"遭遇6：剧院",activation:{condition:{type:"always"},priority:0},skeleton:["无论剧院是否对外营业或已关闭，它都有以下特点：","房间的天花板高度为10尺，除了P5，那里有一个20尺高的椽子天花板。","连接这些房间的是8尺高的通道和7尺高的门道。","剧院由施加了不灭明焰法术的灯笼照亮。","在剧院内说出一个命令词会导致剧院和后台的灯光变暗；"],flesh:`无论剧院是否对外营业或已关闭，它都有以下特点：

房间的天花板高度为10尺，除了P5，那里有一个20尺高的椽子天花板。连接这些房间的是8尺高的通道和7尺高的门道。

剧院由施加了不灭明焰法术的灯笼照亮。在剧院内说出一个命令词会导致剧院和后台的灯光变暗；在剧院内说出另一个命令词会将它们恢复到全亮。所有的舞台经理都知道命令词。

以下地点对应地图 4.4。

粉红浮虏剧院的名称显示在建筑立面的标牌上。外墙上的海报宣传着最新的演出，遇见好莓果和拉迷亚之吻。前者是一部喜剧，窥视了一个从事非法犯罪活动的大型半身人家庭的艰辛生活。后者是一部悲剧，讲述了一位被放逐到沙漠的邪恶穆霍尔兰迪王子，他被拉弥亚魅惑，并带着强大的魔法物品返回，以她的名义征服他的故乡。

在清晨的早些时候，后台区域充满了忙碌的半身人演员，他们穿戴服装、假发和化妆，为下午的演出做准备。当那场演出结束时，晚上悲剧剧目的演员和音乐家们到来。扮演邪恶王子的演员是一位名叫Yaliek Iltizmar（中立女性拉什米人吟游诗人；她密切注意那些在后台探头探脑的角色，然后尽早与蕾米莉亚·港树（见附录 B）分享任何有趣的发现。如果Remallia得知了龙之金库的位置，她会通过传达给米尔特以确保信息传达到深水城领主们那里。

粉红呋噜剧院的所有者，Iokaste Daliano（中立女性Tethyrian 平民），是一个自私的中年寡妇，对剧院并无太大热爱。粉红呋噜剧院是她丈夫的激情所在；对Iokaste来说，它严格意义上是一种手段，通过它她可以与城市精英交往。她要求导演选择剧本和雇佣演员，而她则在"工作"时招待重要客人，并向他们承诺最精彩的娱乐。她对待她的演员和员工就像半被遗忘的孩子，而且她会拒绝那些来到剧院寻找龙之金库的角色，除非这对她有利。对她的贪婪提出诉求会适得其反，因为Iokaste想要所有的财宝都归自己所有。

其中一个更衣室（P8）的地板上有一个没人知道的秘密活板门。通过一次成功的DC 20感知（察觉）检定可以发现它。这块石门被施放了秘法锁法术，需要通过一次成功的DC 30力量（运动）检定才能拉开。敲击术或类似魔法也能打开它。

活板门下方是一个深30尺的竖井，里面装有一架木梯。角色们如果沿着梯子下降，会发现自己位于一条20尺宽的石质通道的一端，这个通道逐渐向下倾斜100尺，最终到达龙之金库的入口。

Iokaste的已故丈夫Algondar Daliano有一只名为Wishes的紫色妖精龙伙伴。这只妖精龙讨厌Iokaste，但仍然留在工资单上，不情愿地使用它的魔法来提升表演，以此来保留Algondar的遗产。它更愿意保持隐形状态，否则不被人所见。Iokaste轻蔑地称它为"飞行的蛇"。

当他们前往龙之金库的路上，它则不可见地跟随他们。一旦得知金库中的黄金，妖精龙对自己施放了镜影术法术，变得可见，并以心灵感应的方式与角色们对话。它要求分得一部分宝藏（至少5000金币），如果角色们拒绝，就威胁要向城市警卫告密，并在角色们不分享财富时兑现其威胁。妖精龙没有自己的宝藏，因为它将自己的收入给予不幸的深水城居民，通过在夜晚不可见地在城市中飞行，在门阶、窗台、床头柜和枕头上留下硬币。

在上次遭遇结束时，角色们仍未找到格洛尔之石。贾拉索正在码头区的七面纱剧院等待着他们。该剧院主要面向底层顾客，船长和水手可免费入场。剧院老板是一位健壮开朗的梳辫子胡子兽人，名叫荣权·密斯特——这也是贾拉索众多伪装身份之一。当贾拉索离开时，他会委托舞台经理照看事务。

那些通过后门溜进来的角色会看到演员和舞台工作人员忙碌着，导演正在和剧作家争论，而舞台经理无助地看着。在舞台上，演员们在几乎空无一人的剧院里排练，走过他们的场面，念出他们的台词。坐在前排观看排练的同时抽着烟斗的是贾拉索·班瑞（见附录 B），他伪装成了荣泉。在各个角落的阴影中隐藏着四名卓尔精英武者，准备在Jarlaxle的身边战斗。

这部名为Sapphiria的战利品的戏剧是一部浪漫喜剧，讲述了一位名叫蓝宝石的蓝发夫人，她在宴会大厅经营着盗贼公会。当一位迷人的船长带着来自遥远土地的满满一船舱战利品抵达时，蓝宝石决定将其据为己有。然而，当她爱上了比她年轻一半的大副，而船长却又爱上了她时，一切变得滑稽起来。舞台的一侧是类似船甲板的背景；另一侧则装饰得像妓院中的夫人客厅，配有华丽的水晶吊灯和一张奢华的躺椅。

Westra Moltimmur（CG女性Illuskan人类平民，洞察力+2和表演+6），是该剧的女主角，也是深水城的宝贵财富，剧组和工作人员对她非常保护。现在她已经七十多岁，已经结过不少于七次婚，她有一种活泼的幽默感和对生活的热情。她也有足够洞察力意识到'Rongquan Mystere'并不是他表面上的样子。她见过守护Rongquan的黑暗精灵，并观察到他使用微妙的手势（卓尔手语）与他们交流。

Jarlaxle指示舞台经理将所有访客带到他那里。他伪装成荣泉，声称自己是直接向莱拉·银手汇报的Lords' Alliance的成员。他似乎还知道有关角色与Laeral会面的所有事情（见遭遇1，"小巷"），并表示他可以代表她发言。他询问有关格洛尔之石的情况，如果角色们没有它，他会失望。如果他们提供了在遭遇9，"地窖复合体"中回收的假石头，荣泉会立即意识到它是假的。

Jarlaxle本可以亲自与Fenerus交谈，但他不确定法院是否被魔法防护。他不能冒暴露的风险，所以他派角色们去。

在黑暗精灵离开后，一阵冷风穿过小巷，唤醒了处于昏迷状态的角色们。

'

当这次遭遇开始时，角色们跟随一个逃跑的Zhent剑客进入位于贸易区的名为Brizzenbright的剧院。这个剧院以已故的所有者Malkolm Brizzenbright的名字命名，近年来经营困难。为了自身的生存，剧院在冬天也保持开放，但在每年的这个时候，剧院里非常寒冷。

Malkolm Brizzenbright，一个幽魂，在门厅（P1）迎接所有访客。他穿着西装，头发凌乱，大部分时间都在明处漂浮，挥手致意和问候。当地人习惯了他的幽灵形态和他标准的介绍："不要让这副匆忙的面容减少你们的风采，先生们女士们，因为我不过是你们友好的主人。我们今天为你们创造了什么精彩的艺术？买票吧，看看吧！你不会失望的！"

这个鬼魂可以进行轻松的对话。它被束缚在剧院里，因为Malkolm Brizzenbright的灵魂不忍心离开这个地方。如果剧院关闭，鬼魂仍会出没在那里，随着时间的推移可能变得更加疯狂。只有将剧院夷为平地或烧毁，才能迫使他的灵魂永远离开。

故事中，一位年轻女子被一位伯爵带到城堡，却爱上了伯爵那虔诚的弟弟。她的背叛令嫉妒的伯爵日渐消沉。伯爵在弟弟婚礼当天杀害了他，并追逐新娘，新娘在绝望中从城堡城墙上跳下。伯爵被众神诅咒，变成了一只黑暗生物，注定生活在城堡中并以鲜血为食。一位女性大提琴手和两位男性小提琴手为演出提供音乐伴奏。

战栗的观众中包括三十名平民。还有一位名叫Agorn Fuoco的散塔林会间谍（NE男性Turami 吟游诗人；Agorn被戏剧深深吸引，强忍着泪水，而Amath轻轻地拍着他的胳膊。Vevette坐在他们后面，并偷偷地将格洛尔之石递给Agorn。在后排观看的是蕾米莉亚·港树（见附录 B），她是竖琴手组织的成员，怀疑Agorn是一个高级Zhent。她已经观察他有一段时间了，希望识别出深水城的其他散塔林会领导者。尽管Remallia看起来独自一人，但那两个小提琴手（LG男性Illuskan人类间谍们，表演+5）是受她指挥的竖琴手。Agorn和Amath不知道他们正在被监视。

角色们在进入主剧场之前需要购买门票。如果他们不这么做，剧院经理会追赶他们，并威胁要召唤城市守卫。

一个成功通过 DC 14 感知（观察）检定的角色会在昏暗的剧院中发现维维特。当这种情况发生时，维维特会从她的椅子上跳起，逃向最近的门，计划带领角色们进行另一场欢快的追逐。雷玛利亚和她的哈珀同伴们饶有兴趣地观看着，但除非他们的生命或无辜者的生命受到威胁，否则不会介入。

一旦Vevette的追踪者消失在视线之外，Agorn Fuoco和Amath Sercent利用这个机会悄悄溜走，通过主门离开并拦下一辆雇佣马车。`,spotlightRefs:[],presentNpcIds:["npc_49a","npc_4d1","npc_4c0","npc_4b9","npc_4ba","npc_4d6"],availableInfoIds:["info_18f_g1"],encounterIds:["enc_18f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[73],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:"我的朋友们，不要气馁。风正朝我们的方向吹来！我得知Fenerus Stormcastle因盗窃被城市警卫逮捕，并被带到城堡区的法院面对一位地方官的审判。毫无疑问，他在被捕前藏起了那块石头。你们必须立刻和他说话。你们需要设计某种诡计接近Fenerus。我敦促你们反对暴力，否则你们可能会发现自己被关在他旁边。",dmGuidance:`见附录 B）的女性，她也是竖琴手组织的成员。
如果角色们威胁到它或危及剧院，Wishes会使用它的魔法来迷惑和中立化他们。
当角色们首次到达时，除了通往后台的门之外，所有的门都被锁上了。
如果角色们不确定接下来该做什么，Jarlaxle 提供了以下信息：
如果角色们问为什么莱拉·银手不亲自质问Fenerus或者保释他出狱，Jarlaxle笑了并说，对于Open Lord来说，被看到与一个对城市犯下严重罪行的人进行谈判，在政治上是不明智的。
如果角色们拒绝为Rongquan工作，他耸耸宽阔的肩膀，让他们不受干扰地离开，认为他们无论如何都会尝试与Fenerus交谈。
如果角色们攻击他，Jarlaxle微笑，吹口哨召唤他的黑暗精灵保镖，并对角色们发起攻击。
如果角色们在战斗中倒下，Jarlaxle和他的保镖会在把他们拖到一个雪地小巷并留在那里与他们的装备一起之前，先稳定濒死队伍成员的状态。
如果角色们决定与Fenerus交谈，请继续进行遭遇8，'法院。
在经过一场惊险的屋顶追逐后，维维特·黑水（CE女性泰希尔人类剑客，参见附录 B）买了一张票，趁着演出《血色婚礼时溜进了剧院——这是一部关于爱情、嫉妒和死亡的话剧。
见附录 B）和他的伙伴，Amath Sercent（LE女性Mulan 祭司 of Bane）。
如果角色们上钩，请继续进行遭遇3，"街头追逐"。`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_191",locationId:"loc_18f",name:"P1. 门厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个豪华的大厅以红地毯和华丽的壁纸装饰。","这里展示着几个穿着花哨服装的彩绘木制人体模型，每个模型都代表着一个来自著名戏剧的角色。"],flesh:"这个豪华的大厅以红地毯和华丽的壁纸装饰。这里展示着几个穿着花哨服装的彩绘木制人体模型，每个模型都代表着一个来自著名戏剧的角色。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[73],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_192",locationId:"loc_18f",name:"P2. 售票亭",activation:{condition:{type:"always"},priority:0},skeleton:["每个小亭子的西侧门都是锁着的。","售票员和舞台经理持有这些门的钥匙。","一堆撕毁的票卷放在一个柜台下的架子上，位于售票亭内。","在演出前，每个亭子里都有一个售票员（平民）。","进入剧院的票价是每人1便士。"],flesh:`每个小亭子的西侧门都是锁着的。一个角色可以通过使用盗贼工具进行一次 DC 15 的敏捷检定来撬开锁，或者通过一次成功的 DC 13 力量（运动）检定强行打开门。售票员和舞台经理持有这些门的钥匙。

一堆撕毁的票卷放在一个柜台下的架子上，位于售票亭内。在演出前，每个亭子里都有一个售票员（平民）。进入剧院的票价是每人1便士。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[73],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_193",locationId:"loc_18f",name:"P3. 售票处",activation:{condition:{type:"always"},priority:0},skeleton:["这些房间中靠近远处墙壁的桌子各有一本笔记本、文件和一只锁盒。","房屋管理者持有每个保险箱的钥匙。","在演出期间，每个保险箱里装有 10d10 银币。","演出结束后，两个箱子都是空的。"],flesh:`这些房间中靠近远处墙壁的桌子各有一本笔记本、文件和一只锁盒。

房屋管理者持有每个保险箱的钥匙。一个锁可以通过成功进行一个 DC 12 的敏捷检定并用盗贼工具撬开，或者一个保险箱可以通过成功进行一个 DC 15 的力量（运动）检定强行打开。在演出期间，每个保险箱里装有 10d10 银币。演出结束后，两个箱子都是空的。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[73],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_195",locationId:"loc_18f",name:"P4. 观众厅",activation:{condition:{type:"always"},priority:0},skeleton:["观众厅有以下特点：","有垫子的座位被安排成七排台阶式的座位，面向一个5尺高的木制舞台。","每一排有二十个座位。","在升起的红色幕布后面是为当前制作准备的彩绘背景和舞台道具。","在表演期间，一位舞台经理（平民）从座位区的后方观察。"],flesh:`观众厅有以下特点：

有垫子的座位被安排成七排台阶式的座位，面向一个5尺高的木制舞台。每一排有二十个座位。

在升起的红色幕布后面是为当前制作准备的彩绘背景和舞台道具。

在表演期间，一位舞台经理（平民）从座位区的后方观察。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[74],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_196",locationId:"loc_18f",name:"P5. 翼楼",activation:{condition:{type:"always"},priority:0},skeleton:["这个小型的后台区域被漆成黑色，有一张桌子上摆放着假匕首、剑和其他道具。","道具武器可以在战斗中使用，但命中时只造成1点钝击伤害。"],flesh:"这个小型的后台区域被漆成黑色，有一张桌子上摆放着假匕首、剑和其他道具。道具武器可以在战斗中使用，但命中时只造成1点钝击伤害。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_197",locationId:"loc_18f",name:"P6. 舞台经理办公室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间内有一张堆满文件的桌子。","舞台经理（平民）在演出间隙时待在这里。"],flesh:"这个房间内有一张堆满文件的桌子。舞台经理（平民）在演出间隙时待在这里。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[74],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_198",locationId:"loc_18f",name:"P7. 绿色房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的主要特点是三个不搭配的沙发和一张有污渍的米色地毯，墙壁上涂着浅绿色油漆。","这是演员们不在舞台上或在化妆室时聚集的地方。"],flesh:"这个房间的主要特点是三个不搭配的沙发和一张有污渍的米色地毯，墙壁上涂着浅绿色油漆。这是演员们不在舞台上或在化妆室时聚集的地方。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_199",locationId:"loc_18f",name:"P8. 化妆室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有衣架、摆满化妆品的桌子，以及长墙镜。","在表演中或表演前，每个化妆间有1d3个演员（平民）。"],flesh:"这个房间有衣架、摆满化妆品的桌子，以及长墙镜。在表演中或表演前，每个化妆间有1d3个演员（平民）。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_18f_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[74],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_1a8",locationId:"loc_1a8",name:"遭遇7: 旧塔",activation:{condition:{type:"always"},priority:0},skeleton:["角色们面对的敌人位于一座破败的塔楼，这座塔楼是由几百年前某个半被遗忘的瓦特达维安法师建造的。","它具有以下特点：","除了标有O5的门是锁着的之外，其他所有门都是未上锁的。","这些房间有15尺高的天花板，由7尺高的门道连接。","这座塔由施加在壁灯上的不灭明焰法术照亮。"],flesh:`角色们面对的敌人位于一座破败的塔楼，这座塔楼是由几百年前某个半被遗忘的瓦特达维安法师建造的。它具有以下特点：

除了标有O5的门是锁着的之外，其他所有门都是未上锁的。

这些房间有15尺高的天花板，由7尺高的门道连接。

这座塔由施加在壁灯上的不灭明焰法术照亮。

以下地点对应地图4.5。

派对的难以捉摸的目标，一个天狗，已经躲进了一座旧塔楼。

就在天狗到达之前，三个孩子因为一个挑战而进入了这座废弃的塔楼。如果这次遭遇发生在或接近巨魔潮（Trolltide）期间，孩子们戴着巨魔面具。这些非战斗人员分别叫做自然、詹克斯和斯奎迪利（见'三个小淘气'）。

天狗族绑架了斯奎迪利，并把他带到楼上（O3）。角色们在O2遇到了自然和詹克斯；他们恳求角色们救出他们年轻的提夫林朋友。

肯库用一只爪子紧握着格洛尔之石，另一只爪子抓着提夫林斯奎迪利。当被逼入绝境时，这只生物会模仿尖叫的孩子的声——这是他的威胁方式，暗示如果不立即离开，就会伤害那个男孩。肯库不会回应口头威胁或劝说尝试，但可以用硬币、宝石或闪亮的小玩意贿赂他。他会为了价值100金币的宝藏放弃石头和男孩。

这个行为引发了战斗，因为天狗拔出了它的剑。

如果他有一条通往楼梯的清晰路径，斯奎迪利会跑下楼梯，重新加入他的朋友们。三个孩子一起逃离塔楼，消失在附近的小巷中。

它们试图使持有石头的角色丧失行动能力，并利用它们的心灵遥控射线夺取石头。如果成功，眼魔们会将石头带到附近的小巷。

无论格洛尔之石是留在角色们手中还是被凝视者占有，都请继续进行遭遇1，"小巷。"

这座旧塔，曾属于一位法师，最近被一位年轻的贵族女性Esvele Rosznar买下，她有一个迷人的另一个身份（见附录B中的'黑毒蛇'）。

埃斯维莱带着四名警卫们来到塔楼。他们穿着罗兹纳家族的制服，在O1站岗。

通过她的间谍网络，Esvele了解到了Lord Neverember与塔的前主人之间的友谊。不久之后，她找到了塔下的龙之金库的入口。不幸的是，她不知道需要什么钥匙才能进入，也不知道里面有什么。

塞姆布拉·瓦希尔（LN女性卡利什人），木工、屋顶工和灰泥工协会的成员

Pynt Oomtrowl（CG女性岩石地侏儒），来自地窖工和管道工公会

贾博肯·霜胡（LG 男性盾矮人），石匠、泥瓦匠、陶工和瓦工公会的成员

这次会议是一种形式。作为新业主，埃斯维莱依法必须使建筑达到规范。她正在从涉及的公会收集成本估算，但无意进行维修。角色们的到来为她提供了一个受欢迎的分心。

角色们很难说服Esvele相信他们来这里除了闯入龙之金库之外还有任何其他原因。Esvele愿意让他们成为商业伙伴，允许他们进入金库（最好是在没有公会代表在场的时候），以换取金库中可能包含的宝藏的平等份额。她和角色们彼此都处于僵局。她不能在不暴露金库并让当局查封塔楼的情况下将他们以入室盗窃罪逮捕。而他们也不能拒绝这位贵族女性的要求，否则她可能会为了奖励而向当局泄露金库的位置。

埃斯维莱提出帮助角色们获得打开龙之宝库所需的钥匙，并坚持在他们第一次进入宝库时陪同他们，一直声称她有能力照顾自己。然而，与队伍的事务如何展开，她都尽力尽可能长时间地向角色们隐藏她的秘密身份。

Esvele 不是用钥匙来锁和解锁通往 O5 的门。她用的是盗贼工具。

金库的入口隐藏在O5北墙的一扇密门后面。这扇密门由技艺精湛的矮人工程师打造，需要通过一次DC 20的感知（察觉）检定才能发现。埃斯维尔已经解除了门上的魔法陷阱，使其可以安全地打开。门后是一条布满灰尘的楼梯，向下延伸90英尺，通往一条20英尺宽的走廊。大厅再延伸90英尺便是金库的大门。在金库大门的一侧，墙上的一个天然裂缝曾作为一只格利克的巢穴，但埃斯维尔已杀死了这只格利克，并将其尸体留在了地上。

角色们来到码头区这座破败的塔楼寻找格洛尔之石。Bregan D'aerthe的成员们无形地跟随他们。迷信的当地人认为这座塔楼闹鬼，所以他们避开它。

塔楼内部永久受到一个反魔法场法术的影响。因此，塔楼内没有任何魔法能够生效。这个效果是由塔楼的前一位居住者留下的，他是一个涉足"野性魔法"并且无法再控制它的隐士法师。由于反魔法领域的存在，通常照亮塔楼的魔法灯光被抑制了。只有通过祈愿术法术或类似的魔法才能结束这个反魔法效果。

塔楼各处地板上散落着六把长剑，它们没有锈迹或血迹。这些剑刃是被抗魔场使失去活性的凌空剑。如果一把飞行剑被带出塔楼，它就会活化并发动攻击。

Fenerus把格洛尔之石藏在挂在上层壁炉上的大锅里面（O3）。但现在它不在那里了。

当他们在塔楼内部时，他们的隐形术法术被反魔法领域抵消了。其中一名黑暗精灵很快就找到了石头，并在角色们出现之前将其拿走。

除非他们在冒险的早些时候被击败，否则这些卓尔是贾拉索的副手：菲尔莱科特·拉菲恩、克雷比格·马斯奇尔 和 Soluun Xibrindas。替换任何在冒险早些时候被杀的卓尔火枪手，并为每个卓尔投掷先攻。索伦（或他的替代者）无法抵挡一场好斗，攻击角色们，为其他卓尔争取逃跑时间。一旦他们离开塔楼，逃走的卓尔在跳到附近的屋顶时再次变得 隐形，但药剂在他们的下一回合结束时失效，使得角色们可以追赶他们。

"

角色们已经得知格洛尔之石在班恩的祭司阿玛斯·塞尔森特那里，她与曼松结盟。她和她的侍僧们居住在黄塔，这是城堡区的一座塔楼，因其砖石带有淡黄色调而得名。阿玛斯正在将塔楼改造为班恩的神殿。地下室中的传送法阵可以快速往返科拉特高塔和曼松的异次元圣所。

Amath Sercent（LE女性Mulan 祭司）和她的四名追随者（LE男性和女性不同种族的侍僧）在塔外时穿着普通服装。在塔内，他们穿着毛皮衬里的长袍以保持温暖。他们将这座塔称为暴政之屋，并且他们右手的黑色手印，手指和拇指并拢，覆盖了每一个内部表面。这些手印模仿了Bane的象征。

阿玛斯和她的追随者在这里集合进行礼拜，但睡在别处。三只黑色的飞蛇在梁上筑巢，并会加入此处的任何战斗。在这次仪式上，阿玛斯和她的侍从手持蜡烛，围成一个圈，圈中是被堵住嘴并蒙上眼睛的报纸发行人单建（N男性寿族人类平民）。这位傲慢的中年男子被铐在地板上，而阿玛斯持有锁铐的钥匙。锁铐可以被一个试图用动作成功进行DC 20力量（运动）检查的生物破坏。撬开锁铐需要盗贼工具和一个成功的DC 15敏捷检查。

班恩信徒的仪式旨在摧毁山（Shan）的意志，使其屈服于班恩。阿玛斯（Amath）一直利用这一仪式来"转化"传单出版商，作为控制城市信息流的大规模阴谋的一部分——这是曼松接管计划的关键环节。山在前一晚返回位于贸易区（Trades Ward）家中的路上被阿玛斯的信徒绑架。他出版传单塔吉，该传单对包括政治在内的各种本地话题发表尖锐抨击。

Amath口袋里有格洛尔之石。她正期待着曼松或他的副本不久后到达并取回它。

塔楼被覆盖着冰雪的木制脚手架所环绕。尽管看起来摇摇欲坠，但脚手架确实稳固安全，可以行走，使生物能够无需进行能力检定即可攀爬塔楼的外部。然而，脚手架会发出嘎吱声和震动声，任何在其上移动的生物必须成功通过一个 DC 16 敏捷（潜行）检定，否则会被塔楼内的居民听到。

角色们必须与阿玛斯及其追随者战斗以获取格洛尔之石。拟像会不知疲倦地追捕石头，逃离的角色最好不要在雪地上留下踪迹。

如果一个角色与格洛尔之石产生共鸣，它会揭示位于死者之城布兰达斯家族陵墓下的龙之金库的位置，以及进入所需的三把钥匙。"`,spotlightRefs:[],presentNpcIds:["npc_4b4","npc_49c","npc_4aa","npc_4bb"],availableInfoIds:["info_1a8_g1","info_1a8_g2"],encounterIds:["enc_1a8"],treasureSlotIds:["trs_1a8_0"],eventIds:["evt_1a8_e1"],tone:"tension",_meta:{sourcePages:[76],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`当角色们到达塔楼的入口时，天狗已经劫持了一个人质并逃到了上层。
如果角色们和天狗（kenku）陷入僵局，斯奎迪利会踢天狗的小腿，导致它放开他，并躲到一些旧家具下面。
当角色最终获得 格洛尔之石 时，三只 凝视者眼魔（见 附录 B）通过箭缝进入 O3 并发起攻击。
当角色们到达时，Esvele在O2，正在与以下三位公会代表（平民）会面：
在角色们到达O3之前，三名黑暗精灵枪手（见附录 B）受到隐形药水的影响，使用他们的浮空术法术爬上塔楼的外墙，并通过箭缝爬进来。
如果角色们追赶逃跑的黑暗精灵，继续进行遭遇5，"屋顶追逐。
当角色们初次到达时，所有人都在塔的上层（O3）聚集祈祷。
当他们最终获得它时，命运给了他们不友好的打击，因为曼松的拟像（参见附录B中的"曼松"）通过O5的传送法阵到达。
如果角色们有机会和先见之明在获得石头之前摧毁传送法阵，拟像将不得不徒步前往黄尖塔，为角色们提供充足的时间在他们获得石头后1小时内离开。
当角色们准备好参观陵墓时，请继续进行遭遇4，"陵墓。`,randomTableIds:["tbl_1a8_0"],offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_1aa",locationId:"loc_1a8",name:"O1. 前厅",activation:{condition:{type:"always"},priority:0},skeleton:["外门上有一个带内侧关闭的铁百叶窗的小窥视孔。","腐烂的挂毯装饰着墙壁，泥巴和污垢在地板上积累。"],flesh:"外门上有一个带内侧关闭的铁百叶窗的小窥视孔。腐烂的挂毯装饰着墙壁，泥巴和污垢在地板上积累。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[77],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1ab",locationId:"loc_1a8",name:"O2. 地面层",activation:{condition:{type:"always"},priority:0},skeleton:["螺旋形的石阶蜿蜒向上进入塔楼，向下则通往地窖。","西墙内嵌有一个因烟熏而变黑的壁炉。","壁炉附近有一堆曾经是带垫子的皮椅的烧焦残骸。"],flesh:"螺旋形的石阶蜿蜒向上进入塔楼，向下则通往地窖。西墙内嵌有一个因烟熏而变黑的壁炉。壁炉附近有一堆曾经是带垫子的皮椅的烧焦残骸。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_1a8_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[77],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1ac",locationId:"loc_1a8",name:"O3. 上层",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间，曾经是一个法师的实验室，包含以下特点：","一个被烟熏黑的壁炉上挂着一个没有盖子的铁锅，铁锅挂在壁炉上的铁钩上，壁炉上方的壁炉架上挂着一幅法师的画像。","地板上散落着碎玻璃片、烧焦的纸片、扭曲的金属片和鸟粪。","其他的家具包括一个摇椅、一个棚架桌，以及一个书架烧焦的残骸，所有这些都被厚厚的蛛网覆盖。","墙上有箭缝，鸽子在椽子上筑巢。"],flesh:`这个房间，曾经是一个法师的实验室，包含以下特点：

一个被烟熏黑的壁炉上挂着一个没有盖子的铁锅，铁锅挂在壁炉上的铁钩上，壁炉上方的壁炉架上挂着一幅法师的画像。

地板上散落着碎玻璃片、烧焦的纸片、扭曲的金属片和鸟粪。

其他的家具包括一个摇椅、一个棚架桌，以及一个书架烧焦的残骸，所有这些都被厚厚的蛛网覆盖。

墙上有箭缝，鸽子在椽子上筑巢。

每个箭缝高4尺，宽1尺，足够一个小体型角色或一个苗条的中等体型角色挤过去。

对房间的彻底搜查会得到一件随机的宝藏，通过掷一个 d4 并参照旧塔宝藏表来确定。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[77],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1b0",locationId:"loc_1a8",name:"O4. 地窖",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","一张小圆形木桌周围有四个由空桶制成的凳子。","桌上散落着一副标记过的扑克牌，还有一些零散的牌掉在地板上。","三个板条箱堆放在南墙上。","每个箱子里装有足够二十天食用的口粮。"],flesh:`这个房间包含以下特点：

一张小圆形木桌周围有四个由空桶制成的凳子。桌上散落着一副标记过的扑克牌，还有一些零散的牌掉在地板上。

三个板条箱堆放在南墙上。每个箱子里装有足够二十天食用的口粮。

北墙上嵌着一扇坚固的橡木门，配有铁制配件和内置锁。

通往 O5 的门是锁上的。使用盗贼工具并成功通过 DC 20 敏捷检定的角色可以撬开锁。也可以通过成功进行 DC 25 力量（运动）检定强行打开门。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[77],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1b2",locationId:"loc_1a8",name:"O5. 传送圈",activation:{condition:{type:"always"},priority:0},skeleton:["奥秘符文被刻在这间空荡房间地面上的一个圆圈中。","这个圆圈是一个永久的传送法阵。"],flesh:"奥秘符文被刻在这间空荡房间地面上的一个圆圈中。这个圆圈是一个永久的传送法阵。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_1a8_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[78],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_1c6",locationId:"loc_1c6",name:"遭遇8: 法院",activation:{condition:{type:"always"},priority:0},skeleton:["被城市守卫逮捕的人被带到法院，并在那里被拘留，直到地方法官能够对他们进行审判。","每个法院都有以下特点：","在所有时间里，每扇前门和后门（通向区域H1和H6）外都站着两名警卫们。","房间有10尺高的天花板，连接它们的通道和门道高度分别为8尺和7尺。","门是由铁箍橡木制成的，并且是未上锁的。"],flesh:`被城市守卫逮捕的人被带到法院，并在那里被拘留，直到地方法官能够对他们进行审判。每个法院都有以下特点：

在所有时间里，每扇前门和后门（通向区域H1和H6）外都站着两名警卫们。

房间有10尺高的天花板，连接它们的通道和门道高度分别为8尺和7尺。

窗户上装有铁条，需要进行一次成功的 DC 30 力量（运动）检定才能弯曲。

门是由铁箍橡木制成的，并且是未上锁的。

所有区域都由施加在壁灯上的不灭明焰法术照亮。

屋顶上的水箱收集雨水，雨水通过管道被引导到淋浴区（H7）。

以下地点对应地图4.6。

在获得格洛尔之石之后，角色们很快就在从下水道出来后被城市警卫逮捕。

逮捕队伍由十二名老兵，一名守卫军士和十一个巡警组成。他们要求角色们交出武器并乖乖合作。关于如何处理角色逮捕的指导，请参阅"违法"。

角色们因扰乱公共秩序被控告，这是一种轻微的罪行，会被罚款并导致颁布法令。这项指控源于他们在遭遇3，"街道追逐"中的行为。根据他们在之前的遭遇中的行为，角色们可能会被控告对城市或其市民犯有其他罪行，可能包括无故展示武器、抢劫、攻击市民或谋杀。如果他们抗拒逮捕，他们会被控告妨碍司法。请参阅附录C中的《法律法典》手册，了解与此类罪行相关的处罚。

未经抵抗就交出可见武器的角色不会被搜查，但那些给守卫添麻烦的角色会被搜查隐藏武器（并被剥夺任何可能造成伤害的物品）。角色可以通过一次成功的DC 12敏捷（手上功夫）检定来向守卫隐蔽一个微型物品。如果在搜查过程中发现格洛尔之石，守卫的军士会检查它，认为它无关紧要，并将其归还给其主人。

被捕的角色被带到码头区的法院，并被关押在牢房（H8）直到他们的审判。在他们被捕期间被拿走的任何物品都被交给前台接待员（H1）保管，等待审判结果。一个角色可以在被监禁时进行短休，并利用这段时间来调整对格洛尔之石的感应。在1d6小时后，消息传来，法官准备听取角色们的证词，随后H8的守卫打开角色们的牢房，护送他们到法庭（H5），法官在那里等待。

如果卡萨兰特勋爵的变形怪男仆仍然逍遥法外，它会杀死一名守卫队长并利用受害者的制服冒充角色们之前见过的另一名守卫队长。然后，以休斯图斯·斯塔格特（见"守卫到来"）的身份，变形怪赤手空拳杀死了H8的守卫，并使用他们的钥匙打开角色们的牢房。"休斯图斯"警告他们，地方法官是腐败的，并建议他们在被判处死刑之前逃离这座城市。"休斯图斯"提出在他们逃跑时代表他们传递信息或重要物品。变形怪希望角色们会将格洛尔之石托付给它保管。如果不行，它希望在越狱的混乱中从他们那里夺取石头。

这些增援没有理由不相信斯塔格特队长就是他表面上的那个人，他们在任何冲突中都会支持他。

如果变形怪获得了格洛尔之石，它会立即将其交给维克托罗·卡萨兰特。

主持法官是翁贝罗·扎斯特罗，一位三十多岁、英俊、雄辩、公正的半精灵。他以敏锐的诗意正义感和执行非传统惩罚而闻名。

大师翁贝罗·扎斯特罗具有贵族的属性，并有以下变化：

他是守序中立的。

他没有武装，没有护甲（AC 11），并且价值0经验值。

他具有以下种族特征：他在对抗魅惑的豁免检定中有优势，魔法不能让他入睡。他具有60尺范围内的黑暗视觉。他会说通用语和精灵语。

地方法官已经听取了逮捕官员的证词，以及任何目击者的证词。角色们有一个小时的时间来为他们的情况辩护，而他会提出问题。试图欺骗扎斯特罗的角色必须进行一次魅力（欺骗）检定，与地方法官的感知（洞察）检定相对抗。输掉这场对抗的角色将被认定为妨碍司法公正，被监禁十天，并被罚款200金币，除此之外，还会因为他们对城市及其市民犯下的罪行而受到其他惩罚。那些无法或不愿支付罚款的人将被判处在Amendsfarm（一个城市警卫运营的劳改营，位于Undercliff的农场中）进行一年的艰苦劳动。

对于不涉及死刑或流放的罪行，如果角色请求宽大处理并成功通过一次DC 14魅力（说服）检定，则可以获得替代惩罚。对于较轻罪行的替代惩罚包括以下几种：

角色必须在警卫的监督下，在当地孤儿院铺床并清洗床单，为期十天。

角色必须向莫拉娜·胡达尔克报告，她是水手公会的矮人成员，并在她的严密监督下，在为期十天的时间里刮除码头上的藤壶。

角色必须在下个月为驻守在城墙顶部的守卫运送30磅重的饮用水桶。

在接下来的十天里，角色必须每天下午从正午到黄昏站在特定的街角，像一个叫卖者一样大声喊出自己被判定有罪的罪行，同时接受市民的责骂和口头鞭挞。

被欺骗按照变形怪的愿望行事的角色可以被原谅在越狱期间犯下的罪行，但前提是变形怪被逮捕或杀死。（它在死亡时会变回其真实形态。）可以在变形怪杀死的牢房区守卫身上施展死者交谈法术，以获得证明角色们没有谋杀守卫的证词。

如果一个角色与格洛尔之石（戈洛尔之石）产生共鸣，它将揭示位于海防区一座古老塔楼下方的龙之金库的位置，以及进入金库所需的三把钥匙。

角色们得知费内鲁斯·斯托姆卡斯尔被城市守卫拘留在城堡区的法院。如果他们试图与他交谈，他们会在前台遇到一位职员，职员告诉他们必须先与地方法官安排会面，因为访问者需要她的书面许可才能见他。职员说与地方法官的会面最早只能在第二天的正午进行，但可以通过支付10金币或更多的贿赂来提前时间。

在哈珀组织中至少拥有4点声望的角色可以说服米尔特（见附录 B）利用他作为深水城领主的权威来确保Fenerus的释放。米尔特个人曾因血鹰帮而损失金钱，所以帮助Fenerus从监狱逃脱对他来说是一种深深的刺痛。

至少在领主联盟中有4点名望的角色可以安排在皮尔盖隆的宫殿与莱拉·银手（见附录 B）会面，并说服她给予费内鲁斯他想要的东西，以换取关于石头下落的信息。对她来说，安全返回尼维尔伯的龙藏比一个强盗的命运更重要。

角色们可以故意让自己在城堡区被捕。即使是小罪也可能导致短暂的监禁，直到大法师有时间作出判决。与此同时，角色们可以尝试与Fenerus交谈。

角色们可以尝试使用普通的伪装或魔法潜入法院。冒充官员或使用魔法影响官员是犯罪行为（见附录C中的《法律法典》手册），所以他们必须小心谨慎或擅长欺骗。

法院官员是赫丝特·巴奇（赫丝特·巴奇）（守序善良的图拉米人类女性侍僧，洞察+4），一个七十多岁的小个子女性。巴奇法官不易动怒，喜欢分享冗长的教育轶事和寓言。除了她最亲密的助手外，没有人知道法官天生具有心灵能力，可以在无需姿势或材料成分的情况下施展侦测思想法术。使用一次后，法官必须完成一次短休或长休才能再次施展该法术。智慧是她的施法能力（法术豁免DC 12）。

大法师不愿意同意任何与Fenerus私下会面的请求，理由是他是一个可疑的、不知悔改的人，且有逃跑的风险。她将允许会面的条件如下：

在竖琴手或领主联盟中拥有至少3点声望的角色，或属于深水城贵族家族的角色，提出有力论点并成功通过一项DC 15魅力（说服）检定。

一个冒充贵族或官员的角色进行了有力的辩论，并成功通过了一个 DC 15 的魅力（欺瞒）检定。如果检定失败，Magister Barch 会识破这个诡计，并使用她的 侦测思想 法术来确认该角色实际上是伪装成贵族或官员——这一罪行将带来鞭刑的惩罚，随后是最多十天的监禁，以及最高500金币的罚款。

一个角色向地方法官透露了隐藏的龙类藏品以及费内鲁斯在找到它的过程中的角色。

费内鲁斯·斯托姆卡斯尔（N男性Tethyrian 匪徒首领）被关押在H8的牢房里，等待审判。他被控多次盗窃（公路匪徒）和攻击瓦特达文市民。费内鲁斯知道迟早会有人向城市守卫告密；他怀疑血鹰团伙的另一名成员出卖了他。对他来说，时机很不巧，因为他原本计划通过将格洛尔之石交给他的卢斯坎联系人来赚取一小笔财富。现在，他计划利用这块石头逃脱监禁，并清除他的犯罪记录。

他知道主持审判的大法师或深水城的领主有权力给他他想要的。

巴奇法官唯一会考虑屈服于费内鲁斯的要求的条件是，角色们说服她这样的决定对深水城有利。为了达到这一点，他们要么必须使用魔法来迷惑她（这是犯罪行为，一旦效果消失很可能导致施法者的逮捕），要么他们必须告诉她关于龙之金库和被盗的黄金。无论是哪种情况，她都坚持在让他脱钩前尝试一些东西：在进行一次短休后，她让费内鲁斯被带到她的法庭，并就石头的问题对他进行询问。她偷偷使用她的侦测思想法术扫描他的表面思想，试图确定石头的位置。鉴于石头在费内鲁斯的脑海中是最重要的，法官巴奇得知了它的隐藏位置，与角色们分享了信息，并将费内鲁斯送回他的牢房。

费内鲁斯将格洛尔之石藏在了码头区一座古老塔楼的顶层——一座对所有形式的魔法都有防护的塔楼。如果他被释放，他愿意带领角色们前往那座塔楼，或者提供方向让他们自己找到它。`,spotlightRefs:[],presentNpcIds:["npc_4dc","npc_4c0","npc_4ba"],availableInfoIds:["info_1c6_g1"],encounterIds:["enc_1c6"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[80],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`如果角色们拒绝合作，变形怪会惊恐地大喊，引来法院卫戍部队的全部力量（十名警卫们和两名老兵），"休斯图斯"指控他们打死了牢房区的守卫。
如果角色们能够摆脱他们所处的困境，他们可以从卡萨兰特别墅（见第6章）取回石头。
如果角色犯下了一项或多项罪行，他们将被判有罪并受到相应的惩罚（见附录 C 中的《法典》文件）。
如果角色在某个受人尊敬的派系中享有声望，例如灰手团（Gray Hands）、翡翠结社、竖琴手、领主联盟或铁拳团，则此检定具有优势。
当角色们准备去往该地点时，请继续进行遭遇7，'Old Tower'（古老塔楼）。
如果角色在政治上有影响力的派系中拥有足够的声望，或者擅长欺骗，那么与大法师交谈还有替代方案：
如果角色们能够接近到足以与他交谈，Fenerus拒绝透露石头的位置，直到他被释放并被免除过去罪行的责任。
如果角色们得知Fenerus藏石头的地点并去追寻它，请继续进行遭遇7，'Old Tower'（古老塔楼）。`,mapGeometry:{imageRef:"adventure/WDH/The-Code-Legal.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_1c8",locationId:"loc_1c6",name:"H1. 楼上等候室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有以下特点：","两名警卫们全天候站在档案室（H2）门外。","桌子后面坐着一位书记员（平民）。","墙边摆放着不舒适的木制长椅。",'每张长椅上方挂着一块铜牌，上面用通用语写着："请就座，稍后会有人来为您服务。'],flesh:`这个房间有以下特点：

两名警卫们全天候站在档案室（H2）门外。桌子后面坐着一位书记员（平民）。墙边摆放着不舒适的木制长椅。每张长椅上方挂着一块铜牌，上面用通用语写着："请就座，稍后会有人来为您服务。"

两个厕所位于入口处的角落。

职员询问访客他们的来意，并指引他们前往法院的相应区域或指示他们等待。职员持有记录室（H2）的钥匙。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[80],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1ca",locationId:"loc_1c6",name:"H2. 记录室",activation:{condition:{type:"always"},priority:0},skeleton:["这些房间的门是锁着的。","里面，每一寸可用的墙面上都排列着架子，架子上放着按月和年份标记的纸盒。","这些纸张是法庭程序和证词的记录。"],flesh:"这些房间的门是锁着的。里面，每一寸可用的墙面上都排列着架子，架子上放着按月和年份标记的纸盒。这些纸张是法庭程序和证词的记录。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[80],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1cb",locationId:"loc_1c6",name:"H3. 职员办公室",activation:{condition:{type:"always"},priority:0},skeleton:["房间中央并排放置的两张桌子上摆放着羽毛笔、墨水和纸张。","两名法院职员（平民）在这里工作，协助值班的地方法官。","每位职员都持有记录室（H2）的一把钥匙。"],flesh:"房间中央并排放置的两张桌子上摆放着羽毛笔、墨水和纸张。两名法院职员（平民）在这里工作，协助值班的地方法官。每位职员都持有记录室（H2）的一把钥匙。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[81],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1cc",locationId:"loc_1c6",name:"H4. 地方法官办公室",activation:{condition:{type:"always"},priority:0},skeleton:["这间宏伟的办公室内摆放着几把豪华扶手椅和一张大型胡桃木办公桌。","深水城的徽章铭刻在木地板上。","当不在监督审判时，值班的地方法官在法院这里审查案件并举行会议。","如果地方法官在这里，那么作为保镖的骑士也会在这里。"],flesh:`这间宏伟的办公室内摆放着几把豪华扶手椅和一张大型胡桃木办公桌。深水城的徽章铭刻在木地板上。

当不在监督审判时，值班的地方法官在法院这里审查案件并举行会议。如果地方法官在这里，那么作为保镖的骑士也会在这里。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[81],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1cd",locationId:"loc_1c6",name:"H5. 法庭",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有以下特点：","这里始终有两名警卫们驻守。","如果法庭正在开庭，地方法官会和保镖一起在这里（见H4），以及任何与正在审理的案件相关的人。","一个覆盖着布的地方法官的桌子面对着被告席和三排长椅。","西墙上挂着饰有流苏的旗帜，上面描绘着深水城、深水城城市守卫、深水城守卫的纹章，以及深水城领主的徽章和正义之神提尔的象征。"],flesh:`这个房间有以下特点：

这里始终有两名警卫们驻守。

如果法庭正在开庭，地方法官会和保镖一起在这里（见H4），以及任何与正在审理的案件相关的人。

一个覆盖着布的地方法官的桌子面对着被告席和三排长椅。

西墙上挂着饰有流苏的旗帜，上面描绘着深水城、深水城城市守卫、深水城守卫的纹章，以及深水城领主的徽章和正义之神提尔的象征。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1cd"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[81],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1ce",locationId:"loc_1c6",name:"H6. 楼下等候室",activation:{condition:{type:"always"},priority:0},skeleton:["预定在法庭作证的贵族和那些等待探访囚犯的人都在这里等候。","这个房间包含以下特点：","这个房间里始终有两名警卫们值班。","不配套的沙发靠墙摆放。","旧报纸随意堆放在茶几上。"],flesh:`预定在法庭作证的贵族和那些等待探访囚犯的人都在这里等候。这个房间包含以下特点：

这个房间里始终有两名警卫们值班。

不配套的沙发靠墙摆放。

旧报纸随意堆放在茶几上。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[81],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1cf",locationId:"loc_1c6",name:"H7. 淋浴室",activation:{condition:{type:"always"},priority:0},skeleton:["囚犯在被关进牢房之前，会在这里脱去衣物并被清洗。","墙上突出的铁喷嘴在门边的链条拉动时会喷出冷水。","石砖地板上的排水口防止了房间积水。"],flesh:"囚犯在被关进牢房之前，会在这里脱去衣物并被清洗。墙上突出的铁喷嘴在门边的链条拉动时会喷出冷水。石砖地板上的排水口防止了房间积水。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[81],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1d0",locationId:"loc_1c6",name:"H8. 牢房区",activation:{condition:{type:"always"},priority:0},skeleton:["这个走廊里始终有两名警卫们驻守。","五个牢房沿着这条走廊隔开。","每个牢房的门都是从外面锁上的，驻守在这里的守卫持有钥匙。","牢房内的门锁无法被撬开。"],flesh:`这个走廊里始终有两名警卫们驻守。

五个牢房沿着这条走廊隔开。每个牢房的门都是从外面锁上的，驻守在这里的守卫持有钥匙。牢房内的门锁无法被撬开。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1d0"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[81],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1d2",locationId:"loc_1c6",name:"H9. 守卫马车",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","这里始终有两名老兵，城市守卫的成员。","一辆装甲马车位于一对由铁棒固定的钢门后面。","需要两匹马来拉动这辆马车，它一次最多可以容纳八名中等体型的囚犯。","马车后门用链条和两个挂锁固定。"],flesh:`这个房间包含以下特点：

这里始终有两名老兵，城市守卫的成员。

一辆装甲马车位于一对由铁棒固定的钢门后面。

需要两匹马来拉动这辆马车，它一次最多可以容纳八名中等体型的囚犯。马车后门用链条和两个挂锁固定。每名值班的老兵都有一把能打开其中一个挂锁的钥匙。

需要两个人才能抬起挡住通往外面的大门的横杆。成功的 DC 21 力量（运动）检定允许一个人独自完成。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_1d2_g1"],encounterIds:["enc_1d2"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[81],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1e0",locationId:"loc_1e0",name:"遭遇9：地窖群",activation:{condition:{type:"always"},priority:0},skeleton:["地窖和下水道隧道在深水城下交错形成了小型地牢。","这些复合体具有以下特点：","天花板和门道高度为7尺。","以下地点对应地图4.7。","这个复合体有三个不同的部分：下水道隧道（区域B1-B3），南部地窖（区域B4-B9）和北部地窖（区域B10-B11）。"],flesh:`地窖和下水道隧道在深水城下交错形成了小型地牢。这些复合体具有以下特点：

天花板和门道高度为7尺。

没有光源。

以下地点对应地图4.7。这个复合体有三个不同的部分：下水道隧道（区域B1-B3），南部地窖（区域B4-B9）和北部地窖（区域B10-B11）。

角色们得知一个名叫洛瑟·米尔克拉夫的半身人死灵法师拿走了格洛尔之石。他住在贸易区一家假发店下方的地窖建筑群中。这家名为丹迪摩普斯的店铺已关闭，并用铁门锁住。一个角色若成功使用盗贼工具进行DC 15敏捷检定，或成功进行DC 25力量（运动）检定，即可撬开锁或强行打开门。由于店铺位于显眼位置，闯入的尝试有75%的几率被注意到，相关人士会通知城市守卫。两名老兵城市守卫会在1d10分钟内抵达调查店铺并与目击者交谈。

姗娜萨的凝视者眼魔（见附录 B）不会跟随角色进入商店。它留在外部，等待Xanathar公会的力量到来。

B1是假发店的地下室，也是角色们进入地窖综合体的入口点。

来自外界的浓雾在下水道中沉降，区域B2、B3和B4处于2状态。

洛瑟·米尔克拉夫 是一个轻足半身人魔法师，有以下变化：

他是混乱邪恶的，拥有31点（9d6）生命值。

他拥有以下种族特性：他是小型生物，行走速度为25尺。他可以穿过中型或更大生物的空间。他在对恐慌状态的豁免检定上有优势。他说通用语和半身人语。

他准备了活化死尸和枯萎术法术，而不是法术反制和高等隐形术。他所有的法术位目前都已用尽。

洛瑟携带着一本用缝制的肉体装订的法术书，其中包含了他所有准备好的法术。他还有一把开锁的钥匙，用于B8的挂锁门，以及一个由精灵皮肤制成的袋子里装有4d10金币，袋子用由编织的矮人头发制成的绳子扎紧。

洛瑟对复合体进行了许多改动：

B6包含三张床铺——两张适合Losser的人类学徒的大小，还有一张更小的床铺适合他。

b10 包含十二个骷髅们，它们会攻击除了洛瑟和他的学徒之外的任何人。

B11包含了从死者之城偷来的人类骨骼堆。洛瑟还没有来得及将它们活化。

角色们发现Losser蜷缩在B7的一个角落里。两个骷髅们站在他和三个天狗之间。天狗打算杀死这个半身人。在他们周围的地板上躺着四只死去的天狗和两个被摧毁（并且之前被复活）的骷髅的残骸。

在B8，角色们看到一只天狗站在洛瑟被谋杀的人类学徒Retchyn和Kreela的尸体上。这只天狗被姗娜萨的凝视者眼魔（见附录 B）加入。天狗和凝视者试图尽可能长时间地拖延角色，为第二个天狗带着Golorr之石逃跑争取时间。

一旦角色们在地窖中击败了姗娜萨的部队，他们可以追赶逃走的天狗，它紧抓着格洛尔之石。继续进行遭遇3，"Street Chase"（街头追逐）。

角色们紧追着三个街头顽童，孩子们逃进了Dock Ward下面的下水道。

夏天的高温使下水道的气味比平时更糟，角色们如果不用香水手帕捂住鼻子，就会变得中毒。这种效果持续到他们离开下水道。街头顽童和其他生活在下水道的生物已经习惯了这种气味，不会以这种方式变得中毒。

角色们从东边接近地窖综合体，最终在下水道隧道的一侧发现了一扇铁门（B4）。

街头小乞丐们把格洛尔之石带到了B7（作为他们的俱乐部），通过一个秘密门(B3)进入房间。最年长的孩子，自然，与石头产生了共鸣，但是与鱼人的接触如此恐怖，以至于她丢下了它，尖叫着逃跑了。其他男孩被她的反应吓到了，也逃跑了，把石头留在了B7。

通过其他孩子传达，自然告诉角色们她把石头丢在了哪里，并警告他们它'活着'。她和男孩们都不想再见到它。

如果街头顽童在场，其中一个会问："那把摇椅是从哪里来的？"

摇椅是来自B9b的拟身怪。它听到了顽童们的尖叫声并进行了调查，希望捕捉到一顿容易的餐食。它会攻击任何伤害它或伸手去拿石头的人。

一旦角色们获得了格洛尔之石，他们就可以离开地窖复合体。继续进行遭遇8，"Courthouse"（法院）。

角色们被鼓励去探索位于南区的Xanathar公会藏身之地。他们通过B1进入该地点。Xanathar公会名册表提供了整个建筑群中驻扎力量的概要。接下来的部分描述了藏身地的一些特点。

一个为奇迹日游行而建造的机械眼魔侧卧在B7。姗娜萨希望这个机械版本的自己能在人群上空盘旋，提醒深水城的领主们眼魔的优越性，但没人知道如何让它飞起来。角色可以用一个动作尝试激活这个机器，成功通过DC 10智力检定即可激活。被激活的眼魔会从它的眼柄中射出炫目的光芒，持续1分钟，然后停止工作。

如果在地窖综合体中爆发战斗，索文·双须会逃向B8的楼梯，并使用一把钥匙打开通往外面的门。他对这里驻扎的其他生物没有忠诚度。

科格斯特罗·乌克斯古姆，这位灰矮人领袖，拥有他认为是格洛尔之石的东西。他在搜查贸易区费内鲁斯的房子时发现了它。这块石头是一个巧妙的仿制品。它是灰色的卵形，带有黑色的条纹，但没有魔法力量。科格斯特罗一直无法与它协调，他认为自己不配拥有它，而不是认为这块石头是假的。

Korgstrod计划在适当的时候将石头交给姗娜萨，在那之前他不会自愿放弃它。他使用鞭子抽打他的狗头人手下，以保持他们的纪律。如果Korgstrod受到攻击，这些胆怯的狗头人会逃入下水道，否则他们会在他的面前畏缩。

在B11b后面的一个古老且上锁的箱子，可以通过成功进行DC 13的敏捷检定使用盗贼工具打开。箱子里有277铜币、135银币、一个带有小宝石眼睛的球形金质观察者吊坠（价值250金币）和一张法术卷轴的黑暗视觉。

无论他们是否找到了假石头，角色们几乎没有其他选择，只能咨询Dock Ward的Seven Masks Theater中的"Laeral"。如果他们去那里，请继续进行遭遇6，"Theater."`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4b4","npc_4d7"],availableInfoIds:[],encounterIds:["enc_1e0"],treasureSlotIds:["trs_1e0_0","trs_1e0_1"],eventIds:[],tone:"tension",_meta:{sourcePages:[83],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:`如果角色们在早期遭遇中摧毁了gazer，另一个gazer会随着Xanathar公会的力量到来。
在角色们到达Losser之前，Xanathar公会的天狗成员通过B8破门而入，进入地窖复合体，并面对死灵法师。
如果角色们要求得到格洛尔之石，洛瑟会告诉他们真相：他已经把它交给了天狗，其中两个带着它向南逃走了。
如果角色们追踪石头并留下洛瑟的性命，他最终会悄悄溜走并撤退到B11。
如果角色们打开了B4的门，他们会惊吓到另一边的孩子们，导致他们用最大的声音尖叫。
如果角色们前往B7，他们会看到格洛尔之石在一把木制摇椅下面。
秋季分支两点须记：索文·双须在地窖群一爆发战斗就会逃向 B8 的楼梯，用自己的钥匙打开通往外面的门，他对这里驻扎的其他生物没有忠诚；科格斯特罗·乌克斯古姆手上那枚灰底黑纹的卵石是巧妙的仿制品，没有魔法力量，不要让它推进主线（原文：无论他们是否找到假石头，角色几乎只能去七面具剧院找『莱拉』，转遭遇6）。`},{id:"scn_1e2",locationId:"loc_1e0",name:"B1. 污水管道入口",activation:{condition:{type:"always"},priority:0},skeleton:['这个房间有石台阶和一扇锁着的、铁箍木门，门上挂着一个标牌，用通用语写着："下水道入口：仅限授权的城市官员进入。','" 通向 B2 的门是锁着的。',"城邦护卫队长持有与其负责区域对应的下水道入口钥匙。"],flesh:'这个房间有石台阶和一扇锁着的、铁箍木门，门上挂着一个标牌，用通用语写着："下水道入口：仅限授权的城市官员进入。" 通向 B2 的门是锁着的。角色可以通过成功进行一次 DC 17 的敏捷（盗贼工具）检定来撬开锁，也可以通过成功进行一次 DC 20 的力量（运动）检定强行打开门。城邦护卫队长持有与其负责区域对应的下水道入口钥匙。',spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_1e2_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_1e2_e1"],tone:"exploration",_meta:{sourcePages:[83],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1e3",locationId:"loc_1e0",name:"B2. 污水管道",activation:{condition:{type:"always"},priority:0},skeleton:["新鲜的污水沿着一条与石砌步道平行的水槽流动。","污水深达3英尺。","隧道分岔处，一座石桥横跨着从东边动脉流出的污水。","通往B3和B4区域的这条动脉通道中没有人行道。"],flesh:`新鲜的污水沿着一条与石砌步道平行的水槽流动。污水深达3英尺。任何在其中浸泡1分钟的生物必须成功通过一次DC 11体质豁免检定，否则会感染下水道瘟疫。

隧道分岔处，一座石桥横跨着从东边动脉流出的污水。通往B3和B4区域的这条动脉通道中没有人行道。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_1e4_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1e4",locationId:"loc_1e0",name:"B3. 秘密门",activation:{condition:{type:"always"},priority:0},skeleton:["这污水隧道的两侧，暗门与周围的石工完美融合。","一道门通向B7，另一道门通向b10。","拥有被动感知值15或更高的角色在路过时会发现这两道暗门。","暗门设置得足够高，打开它们不会让污水流入相邻区域。"],flesh:"这污水隧道的两侧，暗门与周围的石工完美融合。一道门通向B7，另一道门通向b10。拥有被动感知值15或更高的角色在路过时会发现这两道暗门。否则，找到暗门需要搜索墙壁并通过DC 15感知（洞察）检定。暗门设置得足够高，打开它们不会让污水流入相邻区域。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_1e4_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[84],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1e5",locationId:"loc_1e0",name:"B4. 生锈的铁门",activation:{condition:{type:"always"},priority:0},skeleton:["一扇生锈的铁门嵌在墙上，上方是一个干燥的、1尺宽的石板架。","门的锁早已腐蚀，打开时门在生锈的铰链上发出刺耳的响声。"],flesh:"一扇生锈的铁门嵌在墙上，上方是一个干燥的、1尺宽的石板架。门的锁早已腐蚀，打开时门在生锈的铰链上发出刺耳的响声。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[84],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1e6",locationId:"loc_1e0",name:"B5. 箭缝",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间在某个时候增加了一堵带有箭缝的砖墙。","这些箭缝设计用来让弓箭手射击从门进入的入侵者，参考区域B4。"],flesh:"这个房间在某个时候增加了一堵带有箭缝的砖墙。这些箭缝设计用来让弓箭手射击从门进入的入侵者，参考区域B4。箭缝提供了3。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[84],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1e7",locationId:"loc_1e0",name:"B6. 储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["一扇未上锁的木门关闭着这个空房间。"],flesh:"一扇未上锁的木门关闭着这个空房间。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[84],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1e8",locationId:"loc_1e0",name:"B7. 填满碎石的地窖",activation:{condition:{type:"always"},priority:0},skeleton:["一面墙倒塌了，将两个较小的房间合并成一个较大的空间。","空气中弥漫着灰尘，地板上散落着碎石、垃圾和老鼠粪便。","从这边很容易发现到B3的秘密门（不需要检查）。"],flesh:`一面墙倒塌了，将两个较小的房间合并成一个较大的空间。空气中弥漫着灰尘，地板上散落着碎石、垃圾和老鼠粪便。

从这边很容易发现到B3的秘密门（不需要检查）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_1e0_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[84],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_1ea",locationId:"loc_1e0",name:"B8. 下沉地窖",activation:{condition:{type:"always"},priority:0},skeleton:["这个下沉的地窖有以下特点：","一扇未上锁的铁门安装在东墙上。","南墙上有一段破旧的石阶，通向一个平台，平台上有一扇木门，用链子和挂锁固定住。","门打开后是一个小而空的储藏室，天花板上挂着钩子。","它通向一栋已被木板封住的公寓后面的小巷。"],flesh:`这个下沉的地窖有以下特点：

一扇未上锁的铁门安装在东墙上。

南墙上有一段破旧的石阶，通向一个平台，平台上有一扇木门，用链子和挂锁固定住。

门打开后是一个小而空的储藏室，天花板上挂着钩子。

这把锁可以通过使用盗贼工具进行一次成功的DC 15敏捷检定来撬开，或者可以通过进行一次成功的DC 20力量（运动）检定来强行打开。它通向一栋已被木板封住的公寓后面的小巷。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_1e0_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[84],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_1ed",locationId:"loc_1e0",name:"B9. 老鼠泛滥的地窖",activation:{condition:{type:"always"},priority:0},skeleton:["这些房间位于一个旅馆（75)或孤儿院（25）的下方。","无害的老鼠在四处爬行，自顾自地忙碌着。","石阶上升10尺到达一扇木门，木门通向街道或小巷。","楼梯底部堆放的板条箱和木桶里装有可食用的食物，但没有其他有价值的东西。","一扇普通的木门通向一个存放着尘封家具的房间。"],flesh:`这些房间位于一个旅馆（75)或孤儿院（25）的下方。无害的老鼠在四处爬行，自顾自地忙碌着。

石阶上升10尺到达一扇木门，木门通向街道或小巷。楼梯底部堆放的板条箱和木桶里装有可食用的食物，但没有其他有价值的东西。

一扇普通的木门通向一个存放着尘封家具的房间。家具包括一张有划痕的木桌、几把摇晃的椅子、一个衣帽架、两张小桌子和一个空的木箱。有25其中一件家具（随机确定）是一个拟身怪，它通常以老鼠为食，但绝不会错过更大的食物。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1ed"],treasureSlotIds:[],eventIds:["evt_1ed_e1"],tone:"tension",_meta:{sourcePages:[84],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},randomTableIds:["tbl_1ed_0"]},{id:"scn_1f0",locationId:"loc_1e0",name:"B10. 旧酒馆地窖",activation:{condition:{type:"always"},priority:0},skeleton:["这个宽敞的空地窖有以下特点：","石柱和拱门支撑着天花板。","半倒塌墙壁两侧不匹配的石工表明，这个区域曾经是两个独立的房间。","石阶通往一个被砖砌封堵的门道。","（这扇门曾经通向一个老酒馆后面的小巷。"],flesh:`这个宽敞的空地窖有以下特点：

石柱和拱门支撑着天花板。

半倒塌墙壁两侧不匹配的石工表明，这个区域曾经是两个独立的房间。

石阶通往一个被砖砌封堵的门道。（这扇门曾经通向一个老酒馆后面的小巷。）

从这边很容易发现到B3的秘密门（不需要检查）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[85],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_1f2",locationId:"loc_1e0",name:"B11. 后地窖",activation:{condition:{type:"always"},priority:0},skeleton:["这些房间是b10的延伸。","这个房间过去是个酒窖。","墙壁上排列着腐烂的木头堆（储存架）和破碎的瓶子。","这个曾经用作冷藏室和根菜储藏室的空房间，现在充满了灰尘和蛛网。"],flesh:`这些房间是b10的延伸。

这个房间过去是个酒窖。墙壁上排列着腐烂的木头堆（储存架）和破碎的瓶子。

这个曾经用作冷藏室和根菜储藏室的空房间，现在充满了灰尘和蛛网。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[85],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_205",locationId:"loc_205",name:"遭遇10: 改造的风车",activation:{condition:{type:"always"},priority:0},skeleton:["这座破旧的两层石头建筑早在城市围绕它建立之前就曾是一个风车。","除非某个区域描述或遭遇有其他说明，否则以下特点适用：","房间的天花板高15尺，有10尺高的通道和7尺高的门道连接它们。","门是木制的，关闭且未上锁。","墙壁上满是涂鸦，石板地面上散落着垃圾和残骸。"],flesh:`这座破旧的两层石头建筑早在城市围绕它建立之前就曾是一个风车。除非某个区域描述或遭遇有其他说明，否则以下特点适用：

房间的天花板高15尺，有10尺高的通道和7尺高的门道连接它们。

门是木制的，关闭且未上锁。

墙壁上满是涂鸦，石板地面上散落着垃圾和残骸。窗户是空的铅制框架，没有玻璃。

没有光源。

以下地点对应于地图4.8上的关键点。

角色们在陵墓中发现的钥匙引导他们来到南城区的一个旧风车。沃尔卡·基本斯和乌拉斯特尔·甘恩（NE男性伊卢斯坎人类平民）藏在上层的一个安全公寓里（W7）。在战斗中，他们使用铁锹作为棍棒造成伤害。每个人身上都携带着3d6金币的袋子。

Volkarr和Urlaster最近被半身人死灵法师洛瑟·米尔克拉夫雇佣，帮助他闯入死亡之城的陵墓。他们接受这份工作是因为报酬丰厚，但他们对死灵法师没有任何忠诚。

洛瑟·米尔克拉夫和他的两名人类学徒，雷钦和克里拉，住在贸易区下方的地窖综合体中。通往他们巢穴的路是通过雷钦的假发店，这家店叫做Dandymops。

Losser正在从死者之城偷取骨头，以创建一支动画骷髅军队。（Volkarr和Urlaster都不知道为什么。）

在加洛斯陵墓中，洛瑟杀死了一只老鼠并拿走了它携带的小石头。老鼠死后消失了，洛瑟认为那块石头是魔法的。

一旦角色们开始寻找半精灵死灵法师，请继续进行遭遇9，'地窖复合体'。

角色们前往位于城南区的一座破旧的建筑，那里曾经是一个风车。他们预计会在那里找到两个名为Arn Xalrondar（LE男性Tethyrian人类）和Seffia Naelryke（LE女性Tethyrian人类）的奸诈邪教狂信者手中的格洛尔之石。

Arn和Seffia在W7等候，他们将其用作公寓。他们总是将公寓的门锁上。他们已经清理了W8的碎片，并在地板上用血画了一个五角星。在五角星的每个角上，有五个黑色的蜡块——这是燃烧过的蜡烛的残余。

卡萨拉特领主派遣阿恩和塞菲亚执行任务，从他家的陵墓中取回格洛尔之石。他还秘密命令他们除掉另外三名他不信任的邪教成员，以防他们泄露关于石头的秘密。如果阿恩和塞菲亚知道他们在如此简单的任务中失败了，他们会感到非常震惊；他们试图通过杀死瓦埃勒·卢瓦尔（如果她在队伍中，见"陵墓：夏季"）来纠正他们的错误。

恶魔们飞到塔楼，敲了敲公寓的窗户，Seffia让他们进来，然后Arn给了他们其中一人格洛尔之石。邪教狂信者尽他们所能地帮助恶魔逃脱。

继续进行遭遇5，"屋顶追逐。"

这座古老的石制风车在一个多世纪前被改造成了住宅，并已年久失修。一位古怪的瓦特达维安艺术家住在这里，自从她的真爱抛弃了她之后，她就不再是从前的她了。住宅里没有擅自占地者。

外部门总是锁着的。一个使用盗贼工具的角色可以通过成功的 DC 15 敏捷检定来撬开锁，或者通过成功的 DC 15 力量（运动）检定将门砸开。任何试图闯入塔楼的行为都有75%的几率被卡莱恩的邻居看到或听到。十分钟后，八名老兵城市守卫会赶到现场调查入侵事件。

卡莱恩，一位著名的深水城画家，在1475 DR年被委托为当时深水城的开放领主Lord Dagult Neverember画一幅肖像。她与Neverember的会面标志着一段持续了一年多的热烈爱情故事的开始。他慷慨赠送给她的众多礼物之一是位于海港区的一处房产。

随着Dagult对无冬城的访问变得更加频繁和延长，他们的关系开始动摇。他向卡莱恩做出了他未能兑现的承诺，当她提出忠诚承诺的话题时，他对她不好，因为他的真爱是无冬城。在Dagult的拒绝之后，卡莱恩变得愤怒，并开始画在她心目中代表他的怪物。她利用编织（Weave）的力量附着在她的作品上，赋予她按命令将这些怪物带到生活中的能力。

最终，Neverember利用他的影响力毁灭了卡莱恩，并使她与深水城的高社会离婚。她被允许保留她的家，但她的作品和声誉被慢慢而有系统地摧毁。卡莱恩的精神崩溃，导致疯狂开始。现在她把自己锁起来，满足于让时间侵蚀她最后的良知。她总是把Dagult和深水城视为一体，现在他们都是她的死敌。

卡莱恩无法在陌生人面前表现得礼貌，因为她认为他们都是Dagult Neverember派来谋杀她的刺客。她唯一礼貌对待的人是Vhaspar Holmdreg（LG男性Illuskan人类祭司），他在住宅的西翼租了一个房间，并在北区的St. Laupsenn救济院，即苦难之神Ilmater的神庙工作。Vhaspar是一个七十多岁的老人，因白内障而半盲，他每周给她送两次食物，冬天每周送三次柴火，每隔几个月送一次绘画用品。Vhaspar有一把钥匙可以打开卡莱恩住宅的外门。

除了W5房间外，每个房间都展示了一幅卡莱恩的画作。要确定任何一幅画作的主题，掷一个d12并参考画作主题表。一个主题可能多次出现。这个住所也充满了老鼠。如果卡莱恩遭到攻击，这些害虫会形成六个老鼠群来保护她。

卡莱恩大部分时间都在W5，这里作为她的画室。里面有发霉的食物残渣、沾满颜料的空罐子、丢弃的画笔，以及她位于北墙一个大的铅框窗户前的画架。画架上放着一幅新鲜的移位兽的画。

卡莱恩 是一个半精灵吟游诗人（见附录 B），有以下变化：

她是混乱邪恶的。

她有这些种族特性：她在对抵抗魅惑的豁免检定上有优势，魔法不能让她入睡。她具有60尺范围内的黑暗视觉。她说通用语和精灵语。

她拥有的是艺术模仿生活行动选项，而不是安息之歌特性。

卡莱恩触摸她的一幅画作，使其主题跳出画布，变成那种生物，前提是其挑战等级(CR)为3或更低。生物出现在画作5尺范围内的未占据空间内，画作随即变为空白。生物对卡莱恩友好，对所有其他人敌对。它掷骰子以确定其行动时机。生物在1分钟后消失，当它的生命值降至0点，或当卡莱恩死亡或进入昏迷状态时也会消失。

在区域 W4a 的地板上，一扇沉重的石质活板门可以通过彻底搜索房间并成功通过 DC 12 感知（察觉）检定找到。拉开这扇门会露出一条向下的石阶楼梯，向下延伸 120 英尺，通向一条 20 英尺宽的走廊，这条走廊再延伸 60 英尺，最后止于通往龙之金库的门前。卡莱恩 和 Vhaspar 对这座金库或通往它的活板门一无所知。

一个名叫萨卡斯的邪恶龙裔将菲尔德区一座老旧、被火烧过的风车改造成了一家屠宰店。作为屠夫公会的成员，萨卡斯拥有一项利润丰厚的副业。忠于曼松的Zhents支付萨卡斯来切碎他们杀害的人，然后他秘密地出售这些肉。随着死冬日的临近，这种肉的需求很高。尸体通常在深夜被送到他那里，大多数是由Sidra Romeir用一匹挽马拉着的带篷车送来的。

一块红色的木制招牌，雕刻得像屠夫的切肉刀，悬挂在萨卡斯的屠宰场的门上方，屠宰场位于西翼最西边的房间。冬天这里冰冷刺骨，充满了肉和血的气味。一个血迹斑斑的砧板占据了房间的主要位置，墙壁上排列着架子，上面摆放着用血迹斑斑的羊皮纸包裹的切割好的肉。地板上血迹斑斑，覆盖着一些血肉残渣。

萨卡斯 在晚上锁门。开锁需要使用盗贼工具通过一次 DC 15 的敏捷检定。门也可以通过成功 DC 18 的力量（运动）检定强行打开。

屠宰场旁边的房间已改造成储藏室，门上始终挂着挂锁。上锁的门与屠宰场的门（见上文）在其他方面是相同的。和屠宰场一样，储藏室在冬天也是寒冷的，并且散发着肉和血的气味。六个半冻僵的人形生物尸体堆放在西墙附近的一个10尺见方的帆布防水油布下。萨卡斯还没有来得及把它们切开。

龙裔允许流浪者在他的家中居住。那些能够做一些琐碎工作的人被宽恕并获得熟肉残渣；其余的人则会被处决。这些无家可归的人因为对萨卡斯的恐慌而不敢说他坏话，而城市守卫似乎对在野区发生的罪行漠不关心。

屠夫没有时间容忍傻瓜，而角色们插手他的生意就是愚蠢的。萨卡斯大部分时间都在屠宰场。黄昏时，他回到自己的公寓，一直待到黎明，或者直到有人敲门要求处理尸体。萨卡斯携带着屠宰场、储藏室和他公寓（W7）的钥匙。

萨卡斯 是一个红龙血统的龙裔狂战士，有以下变化：

他是混乱邪恶的。

他拥有这些种族特性：他可以使用他的动作吐出一道15英尺的锥形火焰（但在完成短休或长休之前不能再次使用）；锥形范围内的每个生物必须进行一次DC 13敏捷豁免，豁免失败则受到2d6火焰伤害，豁免成功则受到一半伤害。他对火焰伤害具有抗性。他会说通用语和龙语。

萨卡斯将格洛尔之石藏在了最近一批送往商贸区一条小巷的肉类运输中。萨卡斯不记录他的非法交易，所以角色们必须审问他或者居住在他的住所中的某一个普通人。

萨卡斯具有挑衅性，并不急于放弃他的Zhent朋友。需要使用魅惑类人法术或类似的魔法来强迫他说话。他的擅自占地者是另一个问题；一旦龙裔屠夫不再是他们福祉的因素，他们会很快出卖萨卡斯以保全自己。无论哪种方法都能得到以下信息：

萨卡斯 最后一批肉被送到了贸易区一个叫做Cuttle's Meat Pies的商店。它位于一个巷子里。

这些肉是由名为Justyn Rassk的屠夫公会成员运送的。萨卡斯额外支付了一些金币，以确保肉被"迅速且安静地"送达。

Rassk有一辆血迹斑斑的马车，他用它在菲尔德区外进行送货。

角色们可能通过他们自己与屠夫公会的交易（见"样品公会代表"）认识Justyn Rassk。

"`,spotlightRefs:[],presentNpcIds:["npc_49a","npc_4bb"],availableInfoIds:["info_205_g1","info_205_g3"],encounterIds:["enc_205"],treasureSlotIds:["trs_205_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[86],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`如果角色们面对他们，Volkarr和Urlaster会攻击，但如果被压倒性地击败，他们会迅速投降，并分享以下信息以换取他们的生命和自由：
当角色们试图闯入邪教狂信者的公寓时，三个棘魔到达了。
当角色们进入时，他们看到恶魔们带着石头飞走了。
如果角色们处理了邪教狂信者，他们可以通过在屋顶上奔跑来追赶逃跑的棘魔。
如果角色们面对她，卡莱恩会指控他们是刺客，让貘兽活过来，并命令它攻击他们。
如果角色们追踪肉品送货的踪迹，请继续进行遭遇1，"小巷。`,randomTableIds:["tbl_205_0"],offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_207",locationId:"loc_205",name:"W1. 石质楼梯",activation:{condition:{type:"always"},priority:0},skeleton:["一组弯曲的石阶上升20尺到达上层。","这些台阶上覆盖着鸟粪、破碎的屋顶瓦片、泥土和霉菌。"],flesh:"一组弯曲的石阶上升20尺到达上层。这些台阶上覆盖着鸟粪、破碎的屋顶瓦片、泥土和霉菌。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[86],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_208",locationId:"loc_205",name:"W2. 擅自占地者",activation:{condition:{type:"always"},priority:0},skeleton:["在春季、夏季和冬季，这些房间中的每一个都是1d6 + 1名擅自占用者（平民）的家，他们用旧家具和从垃圾堆中捡来的东西为自己建造了巢穴。","这些擅自占用者并不寻求麻烦。","为了食物或硬币，一个占房者可以引导或带领角色们前往上层被锁的公寓（W7），并描述公寓的居住者。"],flesh:`在春季、夏季和冬季，这些房间中的每一个都是1d6 + 1名擅自占用者（平民）的家，他们用旧家具和从垃圾堆中捡来的东西为自己建造了巢穴。这些擅自占用者并不寻求麻烦。

为了食物或硬币，一个占房者可以引导或带领角色们前往上层被锁的公寓（W7），并描述公寓的居住者。角色也可以通过一次成功的DC 10魅力（威吓）检定来确保占房者的合作。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_208_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[86],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_209",locationId:"loc_205",name:"W3. 厕所",activation:{condition:{type:"always"},priority:0},skeleton:["门后不过是地板上的一个洞，从洞中升起一股可怕的恶臭。"],flesh:"门后不过是地板上的一个洞，从洞中升起一股可怕的恶臭。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[87],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_20a",locationId:"loc_205",name:"W4. 脆弱的天花板/地板",activation:{condition:{type:"always"},priority:0},skeleton:["区域W4a直接位于区域W4b的正下方。","上层房间的地板会在第一个小型或更大生物走过时因重量而坍塌。","拥有石工天赋或熟练使用石匠工具的角色可以判断地板不安全，不能行走。","当区域W4b的地板坍塌时，站在该区域的任何生物会坠落20英尺，落在区域W4a中。"],flesh:`区域W4a直接位于区域W4b的正下方。上层房间的地板会在第一个小型或更大生物走过时因重量而坍塌。拥有石工天赋或熟练使用石匠工具的角色可以判断地板不安全，不能行走。

当区域W4b的地板坍塌时，站在该区域的任何生物会坠落20英尺，落在区域W4a中。当区域W4a的天花板坍塌时，该区域内的任何生物必须进行一次DC 11敏捷豁免，失败则受到4点（1d8）钝击伤害，成功则承受一半伤害。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_20a_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_20a_e1"],tone:"exploration",_meta:{sourcePages:[87],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_20b",locationId:"loc_205",name:"W5. 古老的磨石",activation:{condition:{type:"always"},priority:0},skeleton:["一块古老的磨石躺在包括机械和倒塌屋顶碎片的杂物堆下。","灰尘和蛛网覆盖了一切。"],flesh:"一块古老的磨石躺在包括机械和倒塌屋顶碎片的杂物堆下。灰尘和蛛网覆盖了一切。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[87],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_20c",locationId:"loc_205",name:"W6. 鸽子栖息地",activation:{condition:{type:"always"},priority:0},skeleton:["这些房间的大部分屋顶已经坍塌，留下了鸟和降水可以进入的洞。","地板上散落着破碎的瓦片、鸟粪、损坏的家具和其他碎片，成群的鸽子栖息在发霉的椽子上。"],flesh:"这些房间的大部分屋顶已经坍塌，留下了鸟和降水可以进入的洞。地板上散落着破碎的瓦片、鸟粪、损坏的家具和其他碎片，成群的鸽子栖息在发霉的椽子上。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[87],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_20d",locationId:"loc_205",name:"W7. 安全公寓",activation:{condition:{type:"always"},priority:0},skeleton:["这间公寓维护良好，包含以下特点：","一张带有干净床垫的木制大号床靠在一面墙上。","（床边，西墙上一扇未上锁的门通向W8。","这扇窗户最近被修理过，可以在涂油的铁铰链上安静地打开。","在窗户对面，靠墙处，放着一个木制衣柜。"],flesh:`这个房间的北门安装了一把闪亮的新锁，可以通过使用盗贼工具并成功通过 DC 15 敏捷检定来撬开。这扇门也可以从房间内部解锁，或者通过成功进行 DC 20 力量（运动）检定强行打开。

这间公寓维护良好，包含以下特点：

一张带有干净床垫的木制大号床靠在一面墙上。（床边，西墙上一扇未上锁的门通向W8。）

这扇窗户最近被修理过，可以在涂油的铁铰链上安静地打开。

在窗户对面，靠墙处，放着一个木制衣柜。

衣柜里有四套干净的衣服，两件灰色斗篷，一把重型十字弓，以及一个装有二十支十字弓弩箭的木盒。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_205_g1","info_205_g2","info_205_g3"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[87],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_20e",locationId:"loc_205",name:"W8. 后室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间正上方的圆锥形屋顶部分大部分已经坍塌，房间里充满了碎石。","门刚好有足够的空间可以打开。"],flesh:"这个房间正上方的圆锥形屋顶部分大部分已经坍塌，房间里充满了碎石。门刚好有足够的空间可以打开。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[87],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_222",locationId:"loc_205",name:"金库钥匙",activation:{condition:{type:"always"},priority:0},skeleton:["在一连串遭遇的末尾，一个与格洛尔之石共鸣的角色可以得知龙之金库的位置以及打开它的门所需的三把钥匙。","这件神器还揭示了一个名叫奥瑞纳克斯的成年金龙守护着金库。","打开金库所需的三把钥匙由您选择或通过在金库钥匙表上掷骰子随机确定。","虚幻版本的钥匙无法打开门。","每把钥匙都能在深水城找到或获得。"],flesh:`在一连串遭遇的末尾，一个与格洛尔之石共鸣的角色可以得知龙之金库的位置以及打开它的门所需的三把钥匙。这件神器还揭示了一个名叫奥瑞纳克斯的成年金龙守护着金库。

打开金库所需的三把钥匙由您选择或通过在金库钥匙表上掷骰子随机确定。虚幻版本的钥匙无法打开门。

每把钥匙都能在深水城找到或获得。为此，角色必须花费1天时间和5金币研究钥匙的位置。在这天结束时，角色进行一次DC 15智力（调查）检定，成功则得知钥匙的位置。如果检定失败且差值达到5或更多，主要反派会得知此次搜索，并派遣手下攻击角色，并尽可能从他们手中夺走格洛瑞之石：

姗娜萨派出了五个装扮成戴着Trolltide面具的孩子的地精和一个熊地精（有70的几率），或者四个以人类形态出现的鼠人（有30的几率）。

卡萨尔特派（Cassalanters）派出两只以乌鸦形态出现的小魔鬼，三名人类邪教徒们，以及一名人类邪教狂信者（有70的几率），或者四只棘魔（有30的几率）。

贾拉索·班瑞 派遣了 菲尔莱科特·拉菲恩 和 克雷比格·马斯奇尔，或者其他两位布雷甘·达厄斯的黑暗精灵枪手（见附录 B），以及六名卓尔。

有50这些散塔林会成员由曼松的副手之一领导，要么是维维特·布莱克沃特，要么是阿戈恩·富奥科，如果他们仍然存活的话。

金库钥匙表中列出的钥匙在下方以字母顺序进一步描述。

角色们可以购买一根10磅重的精金条，价格为1000金币。

任何构造物类型的生物都可以作为这把钥匙，只要这个生物没有被摧毁或变得无法操作。通过活化物件法术被活化的物体也符合这把钥匙的资格。

大多数女性矮人没有胡须，因此符合条件。男性矮人NPC可以被说服剃掉胡须，这可能是由于输掉赌注或在收到某种补偿后的结果。角色们也可以给一个他们捕获的男性矮人剃须，或者在他们拥有某种影响力的情况下剃须。

眼梗不必来自一个真正的、活着的眼魔。它可以从填充的眼魔（见"Old Xoblob Shop"）上拔下来，或者从一个较低级的眼魔种类，如凝视者或观察者眼魔那里获得。眼梗也不必是分离的。姗娜萨（见附录 B）如果这样能保证得到它的那份财宝，很乐意陪伴角色们去金库。无论它与角色们达成什么协议，"它的份额"等同于所有的财宝。换句话说，一旦金库被解锁，姗娜萨就会对队伍翻脸，除非有一个强大的NPC（如莱拉·银手或瓦婕拉·莎法尔）在场来控制这个疯狂的眼魔。

泽利法恩，一只年轻的青铜龙，已经在深水港安家。许多水手和码头工人都见过这条龙，而格林达·加洛斯（参见"遭遇2：迷雾海岸"）拥有一台卡维什的装置，角色们可以使用它来寻找这条龙。寻找泽利法恩的角色们会在水下120英尺处的一艘沉船中发现他潜伏其中。（他还没在沉船中搜完宝物。）他只会出于自卫而造成伤害。成功的DC 15魅力（说服）检定或提供至少价值1000金币的宝物可以说服这条龙与角色们交谈，并赠予他们一片他的鳞片。

在深水城的任何市场上，一桶矮人麦酒可以轻易以5金币的价格买到。有20角色们会买到一种并非由矮人制造的仿冒品牌。任何矮人角色只需品尝一下，就能辨别出真正的矮人麦酒与假货的区别。

任何因饮用酒精而中毒的精灵都符合这把钥匙的条件。

只要它们的总价值达到1000金币或更多，一颗或多颗宝石就可以作为这把钥匙。这样的宝石可以在冒险中找到，或在深水城的市场购买。

深水城公开领主莱拉·银手，曾是名为斯托南特的古代王国的女王。角色们可以通过成功的DC 20智力（历史）检定回忆起这一事实，或者通过信息收集得知。他们可以通过加莱斯特·银鬃或米尔特请求与Laeral会面。如果他们承诺将失窃的黄金归还深水城的金库，Laeral会赠送他们一件礼物——由大法师埃尔明斯特本人赠送给她的一支羽毛笔。

任何受到隐形术法术影响的生物都算作这把钥匙，自然隐形的生物也是如此。

每天角色在搜索艺术品商店时，都可能发现一幅标价为 5d10 金币的矮人矿工画像。熟练使用画家工具的角色可以创作出符合这个关键的画作。完成这幅画需要 3d6 小时。

Xanathar公会雇佣了熊地精，角色们可以割下它们的耳朵。一只活的熊地精怪也被视为这把钥匙。

矮人的情歌《你的胡子脸》是由风笛手演奏的二重唱。角色可以轻松花费1金币获得这首乐曲，并雇佣两位表演者，每人10金币来演奏。熟练使用风笛的角色可以演奏这首歌曲，但需要通过一次 DC 10 魅力（表演）检定，使用风笛成功演奏才能使表演被视为这个关键。在卡萨兰特别墅的一个玻璃罐子在被打开时会播放这首歌曲。

这个可怕的钥匙可以从Bregan D'aerthe的成员或其他黑暗精灵那里强行获得。

任何具有变形者亚种的生物，如变形怪或鼠人，都可以作为这把钥匙。邦妮这个变形怪（见"熟悉的面孔"）如果对其中一个或多个角色友好，可以被说服陪同角色们。角色们也可以联系当地的半身人狼人鼠帮派，即Shard Shunners。作为预付款500金币，狼人鼠们很乐意帮忙。

角色们可以购买一把镀银战锤，价格为115金币，或者他们可以给恩布里克和阿维一块银条，并让这两位元素裔铁匠打造一把。

由于金库位于地下深处，自然阳光很难获得。聪明的人物可以购买二十面钢镜（每面5金币），并将它们放置在适当的地方（并以正确的角度）排列，以便将外界的阳光反射到地下并照射在金库入口上。无论参与的角色数量，设置这些镜子并调整它们的正确对齐需要2d4 + 2小时。

尽管召唤一只真正的独角兽可能超出了角色们的能力范围，但他们可以请求莱拉·银手或瓦婕拉·莎法尔施展咒唤圣光法术。角色们可以通过瑞纳尔·奈沃兰波或另一个关系网广泛的NPC与莱拉尔或瓦吉拉会面。独角兽不需要是一只真正的独角兽才能作为这把钥匙。海之少女博览会在其游行中使用了一个独角兽彩车，而在卡萨兰特别墅可以找到一个填充独角兽。`,spotlightRefs:[],presentNpcIds:["npc_498","npc_4e2","npc_4b9","npc_4aa","npc_4bb","npc_4bd","npc_4c6","npc_4ba","npc_4db","npc_4b7","npc_4c0","npc_4d2"],availableInfoIds:["info_222_g1","info_222_g2","info_222_g3"],encounterIds:["enc_222"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[90],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`如果角色还不知道某把钥匙的位置，他们可以收集相关信息。
曼松派遣了四名散塔林会的武术高手（参见附录 B）。
如果角色们想要询问，那么位于第2章T3中的元素裔铁匠恩布里克和阿维能够获得一根。
如果角色们与瓦莱塔，Gond的龙裔牧师（见第3章）建立了友谊，她会很高兴地将Nim the 秘偶释放到他们的监护下，直到他们不再需要它。
当角色们接近沉船时，泽利法恩会出来并试图吓走他们。
如果角色们提到龙之金库的内容，泽利法恩会要求他们答应分给他10%的黄金，然后才会给他们所需之物。
如果角色们还没有遇到过任何黑暗精灵，他们可能会听说姗娜萨雇佣了一个黑暗精灵顾问。
如果角色们告诉莱拉尔或瓦吉拉关于龙之宝库的真相，并承诺将黄金交给当局，他们中的任何一个都同意陪同角色们前往宝库并施展法术。`,randomTableIds:["tbl_222_0"],mapGeometry:{imageRef:"adventure/WDH/Vault-Door.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_236",locationId:"loc_236",name:"龙之金库",activation:{condition:{type:"item_owned",itemRef:"格洛尔之石"},priority:5},skeleton:["一旦角色们获得了格洛尔之石，他们就可以使用它来确定龙之宝库的位置以及进入所需的钥匙。","宝库的所有区域都有以下特点：","任何试图联系宝库内生物的法术都会失败，同样，任何试图探查宝库内部或其中任何生物的法术也会失败。","从外部通过传送进入宝库是不可能的。","墙壁由砌筑的石头构成。"],flesh:`一旦角色们获得了格洛尔之石，他们就可以使用它来确定龙之宝库的位置以及进入所需的钥匙。

宝库的所有区域都有以下特点：

任何试图联系宝库内生物的法术都会失败，同样，任何试图探查宝库内部或其中任何生物的法术也会失败。从外部通过传送进入宝库是不可能的。

墙壁由砌筑的石头构成。门是实心石板制成，带有石制的把手和铰链。

除了在V9，没有光源。

以下位置对应于地图4.9上的关键点。

如果金库门被留开，角色们将在V2遇到这些对手；否则，他们就潜伏在金库外，等待角色们出现：

如果姗娜萨是主要反派，诺思卡·厄格雷（见附录 B）将带着六只熊地精和一只凝视者眼魔（见附录 B）到达。如果Noska已死或因其他原因无法行动，眼魔将他替换为纳尔·泽布林达斯（见附录 B）和他的触须怪保镖。

如果卡萨兰特家族是反派，他们派出了三名邪教狂信者和三名邪教徒们。Victoro的变形怪男仆，Willifort Crowelle，以他的提夫林伪装领导着这个小组，除非角色们在本章或第6章早些时候已经杀死了他或以其他方式处理了他。

如果贾拉索·班瑞（见附录 B）是反派，他将带着三名黑暗精灵枪手（见附录 B）到来。如果他们活着并且自由，将无名的黑暗精灵枪手替换为菲尔莱科特·拉菲恩、克雷比格·马斯奇尔和Soluun Xibrindas。

如果曼松是主要反派，他将派出他的仿真体（见附录 B）以及Agorn Fuoco（NE男性Turami人类吟游诗人；如果在本章或第8章早些时候Agorn和Vevette被杀或以其他方式处理，将他们中的每一个替换为一个额外的暴徒。

由姗娜萨、卡萨兰特家族和曼松派出的部队一见到角色就会发动攻击。另一方面，Jarlaxle祝贺角色们解开了龙之金库的锁，并允许他们空手离开，条件是他们必须离开。他打算看到黄金安全地返回深水城，但同时也要求得到阿盖尔伦的龙杖作为他所费心力的报酬。

如果奥瑞纳克斯还活着，角色们可以诱使敌人去攻击龙。奥瑞纳克斯会攻击任何攻击他或试图偷走他的法杖或黄金的生物。如果他与角色们达成了协议，他也会保护角色们。

如果贾拉索·班瑞（见附录 B）不是主要反派，他将带着他的副手菲尔莱科特·拉菲恩、克雷比格·马斯奇尔和Soluun Xibrindas，或者另外三名黑暗精灵枪手（见附录 B）到达。Jarlaxle提出帮助角色们，如果他们同意帮助他确保黄金安全运抵深水城，并且将阿盖尔伦的龙杖留给他自己。

米尔特（见附录 B）带着两名女性人类海盗（见附录 B）到达。如果他仍然活着并且还没有加入角色们，瑞纳尔·奈沃兰波（见附录 B）将取代其中一名swashbuckler。

杰里斯·泡肯派出三群老鼠群来协助角色们。一旦角色们不再处于危险之中，这些老鼠就会散布在整个金库中。

瓦婕拉·莎法尔 派遣麦伦·战龙（见附录 B）来帮助角色们确保金库的安全，但她不知道Meloon已经受到姗娜萨的影响。如果姗娜萨是主要反派，Meloon将帮助眼魔的部队击败角色们。

开放领主莱拉·银手（见附录 B）带着加莱斯特·银鬃（见附录 B）和六名城市警卫老兵到达，帮助角色们确保黄金的安全。Laeral的到来迫使Jarlaxle表现得最好。在向Laeral保证他的好意之后，Jarlaxle减少损失并和平撤退。如果她能够与奥瑞纳克斯交谈，Laeral说服龙将黄金交给她的监管。

末日突袭者（见附录 B）到达帮助确保金库的安全，不包括已经被逮捕或杀死的成员。如果曼松是主要反派，斯齐莫·奇瓶背叛了他的末日突袭者同伴，与曼松的仿真体并肩作战。如果他们和角色们取得胜利，幸存的末日突袭者提议与角色们平均分配收益。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4c9","npc_4b4","npc_4b9","npc_4aa","npc_4bb","npc_49a","npc_4d6","npc_498","npc_4c0","npc_4d2","npc_4db","npc_4be","npc_4ba","npc_4b7"],availableInfoIds:["info_222_g1"],encounterIds:["enc_236"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[94],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"},dmGuidance:`当角色们离开金库，无论是否携带黄金，他们都会遭遇由主要反派或反派们派出的敌对力量。
见附录 B）、Vevette Blackwater（CE女性Tethyrian人类剑客；
见附录 B）和三名Zhent暴徒。
如果角色们加入了深水城的一个或多个派系，并且一直向他们通报进展情况，你可以安排增援部队到达，帮助对抗反派或为情况引入新元素。
如果角色们拒绝这个提议，并且末日突袭者的人数超过他们，Zhents会反对他们，这让散塔林会的成员角色们陷入困境。`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_239",locationId:"loc_236",name:"V1. 宝库门",activation:{condition:{type:"always"},priority:0},skeleton:["一条20尺高、20尺宽的石质走廊在一扇由坚钢制成的双门前结束。","这扇门既没有把手也没有铰链。",'门上的铭文写着："三把钥匙。',"当三把正确的钥匙被带到距离门5尺范围内时，门会分开，滑回墙内。",'它们会保持开启状态，直到奥瑞纳克斯或其他人说出关闭它们的命令词("Azaam")。'],flesh:`一条20尺高、20尺宽的石质走廊在一扇由坚钢制成的双门前结束。这扇门既没有把手也没有铰链。门上的铭文写着："三把钥匙。把它们带来。"

当三把正确的钥匙被带到距离门5尺范围内时，门会分开，滑回墙内。它们会保持开启状态，直到奥瑞纳克斯或其他人说出关闭它们的命令词("Azaam")。这些钥匙可以从任一侧打开门。门不能被强行打开或以任何方式损坏，而且使用魔法绕过它们的尝试会自动失败。`,spotlightRefs:[],presentNpcIds:["npc_498"],availableInfoIds:["info_239_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_239_e1"],tone:"exploration",_meta:{sourcePages:[94],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_23a",locationId:"loc_236",name:"V2. 入口门厅",activation:{condition:{type:"event_fired",eventId:"evt_239_e1"},priority:10},skeleton:["三根经年累月的柱子支撑着上方60尺处破败的石桥，而天花板在石桥上方再升高20尺。","在壁龛中设有十二套铁制的双门。","每扇门宽10尺，高10尺，上面镶嵌着穿着板甲的矮人战士的图像。","桥梁连接了 V4 到精金门，这些门封住了区域 V6、V7 和 V8。","北部桥梁的东半部和南部桥梁的西半部都不稳固。"],flesh:`三根经年累月的柱子支撑着上方60尺处破败的石桥，而天花板在石桥上方再升高20尺。

在壁龛中设有十二套铁制的双门。每扇门宽10尺，高10尺，上面镶嵌着穿着板甲的矮人战士的图像。

桥梁连接了 V4 到精金门，这些门封住了区域 V6、V7 和 V8。北部桥梁的东半部和南部桥梁的西半部都不稳固。如果任一座桥梁承受超过 150 磅的重量，它就会坍塌。当桥梁坍塌时，站在桥梁某部分的生物必须成功通过一次 DC 15 敏捷豁免检定，否则会坠落 60 英尺到下面的地面。

中间桥梁有一个 15 英尺宽的缺口。角色可以通过助跑跳跃越过这个缺口——但桥梁的一部分会在角色着陆时在脚下断裂，迫使角色成功通过一次 DC 15 敏捷豁免检定，否则会跌落到下方的地板上。

十套双门是假门，无法移动。西墙北端的两套门推开后会显露出V3。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[94],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"}},{id:"scn_23d",locationId:"loc_236",name:"V3. 楼梯和壁画",activation:{condition:{type:"always"},priority:0},skeleton:["这个大厅有以下特点：","在这个房间的南端，由专家雕刻的楼梯向上攀升70尺到达V4。","北墙上面有一幅20尺见方的壁画，描绘了矮人与地精战斗的场景。","一个 侦测魔法 法术会揭示壁画上附魔魔法的光环。","当以这种方式被 魅惑 时，生物无法自愿离开壁画的视线范围，并会誓死保护它。"],flesh:`这个大厅有以下特点：

在这个房间的南端，由专家雕刻的楼梯向上攀升70尺到达V4。

北墙上面有一幅20尺见方的壁画，描绘了矮人与地精战斗的场景。

一个 侦测魔法 法术会揭示壁画上附魔魔法的光环。任何在壁画30英尺内并能看见它的生物必须成功通过一个 DC 12 的感知豁免检定，否则将被 魅惑 24小时。当以这种方式被 魅惑 时，生物无法自愿离开壁画的视线范围，并会誓死保护它。如果被强行移离壁画，生物会试图找到回去的路。在这种效果下，生物无法休息。24小时后，生物获得一级 力竭，并且如果它仍能看见壁画，可以重复进行豁免检定，成功时效果终止。成功进行豁免检定的生物在24小时内对该壁画的效果免疫。摧毁至少一个10英尺见方的壁画部分会终止对所有生物的效果。每个10英尺见方的部分具有AC 17，25点生命值，并对毒素和心灵伤害免疫。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_23d_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_23d_e1"],tone:"exploration",_meta:{sourcePages:[95],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_23f",locationId:"loc_236",name:"V4. 摩拉丁大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个20尺高的大厅有以下特点：","大厅里纵向排列的三根柱子被雕刻成战锤的形状，它们的方形头部紧贴在地板上。","西墙上有一幅破裂的马赛克，描绘了一个矮人铁匠在锻造炉前，用黑色的金属和钻石锻造矮人。","（在墙的南端有一扇秘密门。","东墙上的三个拱门通向横跨入口门厅（V2）的破败桥梁，并在通往V6、V7和V8区域的精金门前结束。"],flesh:`这个20尺高的大厅有以下特点：

大厅里纵向排列的三根柱子被雕刻成战锤的形状，它们的方形头部紧贴在地板上。

西墙上有一幅破裂的马赛克，描绘了一个矮人铁匠在锻造炉前，用黑色的金属和钻石锻造矮人。（在墙的南端有一扇秘密门。）

东墙上的三个拱门通向横跨入口门厅（V2）的破败桥梁，并在通往V6、V7和V8区域的精金门前结束。

在大厅的稍过一半处，西边壁画的一部分已经脱落，在地板上形成了一堆破碎的瓦片。墙上的一条裂缝隐藏着一个黑布丁，它会涌出来攻击检查损坏的角色。

一个在厅内搜索密门并成功通过 DC 17 感知（观察）检定的角色会注意到一扇通往 V5 的密门的轮廓。当一名矮人（或被 变身术 或其他类似法术转变为矮人的生物）触碰到门时，门会自动打开；否则，需要一个成功的 DC 17 力量（运动）检定来推开这扇厚重的门。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_23f_g1"],encounterIds:["enc_23f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[95],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_242",locationId:"loc_236",name:"V5. 秘密房间",activation:{condition:{type:"info_revealed",infoId:"info_23f_g1"},priority:10},skeleton:["这个充满灰尘的房间自Delzoun矮人时代以来就未被触动过。","平台上的绿色铜质瓮中溢出了硬币、宝石和更多的东西。","这个房间有五个铜瓮（每个价值25金币）。","瓮1装有五颗电气石（每颗价值100金币），与200铜币混合在一起。","瓮2装有一枚温暖戒指，与十个普通金戒指（每个价值25金币）和650银币混合在一起。"],flesh:`这个充满灰尘的房间自Delzoun矮人时代以来就未被触动过。平台上的绿色铜质瓮中溢出了硬币、宝石和更多的东西。

这个房间有五个铜瓮（每个价值25金币）。瓮1装有五颗电气石（每颗价值100金币），与200铜币混合在一起。瓮2装有一枚温暖戒指，与十个普通金戒指（每个价值25金币）和650银币混合在一起。瓮3堆满了250金币。瓮4装有33颗蓝色石英宝石（每颗价值10金币）。瓮5装有一个9英寸高的银制矮人牧师摩拉丁雕像，眼睛是紫水晶制成的（价值250金币，重10磅）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[96],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"}},{id:"scn_244",locationId:"loc_236",name:"V6. 锤子与铁砧",activation:{condition:{type:"always"},priority:0},skeleton:["通往这个房间的精金门上被施放了秘法锁法术，但当矮人或变成矮人的生物触碰它时，门会自行打开。","敲击术法术或类似的魔法也能将其打开。","门通过坚固的精金铰链向内旋转打开。","这个20尺高的房间的北面、东面和南面的墙壁上装饰着覆盖着灰尘的壁画，描绘了矮人铁匠在他们的锻造炉中工作的情景。","一个铁砧位于地板中央的一个隆起的石块上。"],flesh:`通往这个房间的精金门上被施放了秘法锁法术，但当矮人或变成矮人的生物触碰它时，门会自行打开。其他生物可以通过一次成功的DC 21力量（运动）检定强行打开它。敲击术法术或类似的魔法也能将其打开。门通过坚固的精金铰链向内旋转打开。

这个20尺高的房间的北面、东面和南面的墙壁上装饰着覆盖着灰尘的壁画，描绘了矮人铁匠在他们的锻造炉中工作的情景。

一个铁砧位于地板中央的一个隆起的石块上。两者都被蜘蛛网覆盖。

一个角色若检查壁画并在进行一次 DC 10 感知（感知）检定中成功，会注意到南墙壁画中铁匠所持的石锤可以从其原位取下。当取下后，墙上会留下一个锤形的凹痕。在锤子面向墙壁的那一侧刻有如下矮人符文铭文："愿心灵振奋，战斗得胜。" 必须将锤子从凹痕中取出，才能看到这段铭文。

用矮人符文写成，内容如下：'让锤子落下，铁砧响起。'

如果铁砧被从墙上取下的石锤击中，房间中每个能听到铁砧响声的生物将获得持续24小时的10点临时生命值。一旦铁砧赋予了这份礼物，它在接下来的24小时内就不能再这样做了。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_244_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[96],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果角色们清除掉蜘蛛网，他们会在石块的正面看到一段铭文。"},{id:"scn_247",locationId:"loc_236",name:"V7. 杜马索因的秘密",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间被一扇与V6中的相似的精金门封闭。","房间里包含以下特点：","四套没有头盔、锈迹斑斑的板甲，尺寸适合矮人，摆放在这个20尺高的房间的四个角落。","每套盔甲上都覆盖着蜘蛛网。","矮人符文被雕刻在远墙上。"],flesh:`这个房间被一扇与V6中的相似的精金门封闭。房间里包含以下特点：

四套没有头盔、锈迹斑斑的板甲，尺寸适合矮人，摆放在这个20尺高的房间的四个角落。每套盔甲上都覆盖着蜘蛛网。

矮人符文被雕刻在远墙上。铭文内容为："一个从未被讲述的秘密将揭开杜马索因的嘴唇。"

成功的 DC 14 智力（宗教）检定可识别出杜马松是矮人的秘密之神。任何矮人角色自动知晓这一点。

墙上的雕刻是一个线索，表明这个房间隐藏着一个秘密，具体来说是一个如此隐蔽的陷阱门，以至于无法通过使用魔法或搜索来找到。但是，当房间中的任何生物大声说出一个秘密时，陷阱门就会翻转打开，露出一个螺旋形的石质楼梯，向下延伸120尺至V9。所说的告白必须是真实的，并且是角色之前未曾透露过的。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_247_g1","info_247_g2"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_247_e1"],tone:"exploration",_meta:{sourcePages:[96],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_249",locationId:"loc_236",name:"V8. 老火眼",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有以下特点：","一个20尺高的房间的后部，矗立着一尊10尺高的彩绘雕像，雕像是一个身穿盔甲的男性矮人，手持战斧，戴着面具。","在雕像前，嵌入地板的是一个带有一侧拉环的精金陷阱门。","雕像与地板无缝融合，无法被推倒。","它似乎也对伤害免疫。"],flesh:`这个房间有以下特点：

一个20尺高的房间的后部，矗立着一尊10尺高的彩绘雕像，雕像是一个身穿盔甲的男性矮人，手持战斧，戴着面具。

在雕像前，嵌入地板的是一个带有一侧拉环的精金陷阱门。

成功的 DC 17 智力（宗教）检定使角色能够认出雕像为戈姆·古尔辛的描绘，即矮人的警戒之神，也被称为火眼。雕像与地板无缝融合，无法被推倒。它似乎也对伤害免疫。一个 侦测魔法 法术揭示了雕像上散发出的咒法魔法光环。

这个活板门是虚假的，无法被抬起。任何触碰活板门或其拉环的人必须成功通过一个 DC 18 的敏捷豁免检定，否则会被雕像眼中射出的魔法火焰射线击中，造成 22 点（4d10）火焰伤害。如果目标有 3，陷阱不会触发。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_249_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_249_e1"],tone:"exploration",_meta:{sourcePages:[96],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Aurinax.webp"}},{id:"scn_24b",locationId:"loc_236",name:"V9. 主金库",activation:{condition:{type:"event_fired",eventId:"evt_247_e1"},priority:10},skeleton:["尽管位于地下深处，这个金库被从天花板倾泻而下的日光流照亮，这些光线在它们明亮的光池中捕捉到了尘埃颗粒。","装饰华丽的柱子支撑着一个三十尺高的拱形天花板，天花板上装饰着矮人沐浴在他们神明面前的雕刻。","深深的壁龛排列在墙壁上，其中一个壁龛里堆满了巨大的金色宝藏。","从满是灰尘的昏暗中走来一个年迈的矮人，他紧握着一根雕刻并漆成一对缠绕的龙形的手杖——一条红色，一条金色。","尽管这个矮人年纪已大，但他的眼神坚定而明亮。"],flesh:`这位自称巴洛克·克拉汉默的矮人，实际上是伪装的成年金龙奥瑞纳克斯（见附录 B）。他守护着达加尔特·内维尔领主的黄金，并持有阿盖尔伦的龙杖（见附录A）作为其服务的交换。与金龙打交道对角色们来说是一项不寻常的挑战，和平解决比暴力对抗更可能对他们有利。

奥瑞纳克斯 耐心、智慧、仁慈且警觉。他一直保持人形，直到战斗爆发，因为在龙形态下他不容易携带阿盖尔伦的龙杖。龙只在自卫、保护法杖或黄金时才会攻击。在奥瑞纳克斯的看守下，唯一被授权移走黄金的人是达格特·内弗梅伯和他的指定封臣，而目前他们都不在深水城。

角色们可以尝试说服奥瑞纳克斯，他们是代表Neverember而来。由于他以前从未见过他们，也从未听Neverember提及过他们的名字，奥瑞纳克斯对他们的故事持怀疑态度。欺骗这条龙需要在他视线范围内的每个角色成功进行一次魅力（欺骗）检定，与龙的感知（洞察）检定相对抗。即使只有一个角色在对抗中失败，奥瑞纳克斯也会感觉到这个团队在对他撒谎。如果瑞纳尔·奈沃兰波与队伍在一起，这些检定将获得优势，因为龙记得他小时候曾经见过Renaer，并且可以轻易想象Dagult Neverember可能使用他的儿子作为他的臣民的情况。（龙对Renaer和他父亲之间的敌意一无所知。）

角色们可以尝试说服高贵的巨龙，认为Neverember勋爵贪污了深水城人民的黄金，并且将金币安全归还给其合法所有者是公平和公正的。内心深处，奥瑞纳克斯知道这些黄金的来源，但巨龙让贪婪和他与Neverember勋爵的协议模糊了他的道德判断。通过一次成功的DC 18魅力（说服）检定，一个角色可以说服巨龙允许将黄金归还给其合法主人。

任何试图影响奥瑞纳克斯的魅力（恐吓）检定都会自动失败。在第一次这样的尝试之后，该队伍未来所有试图影响奥瑞纳克斯的魅力检定都将处于劣势。

奥瑞纳克斯 使用传奇抗性来避免被魅惑。如果一个角色试图用法术魅惑他并且失败了，那么该队伍未来所有试图影响奥瑞纳克斯的魅力检定都将处于劣势。

在金库中选择两个壁龛。一个壁龛里堆放着500,000金币，总重量为10,000磅。第二个壁龛的地板上散落着六十五颗价值100金币的宝石——这是奥瑞纳克斯当前食物供应所剩下的全部。

奥瑞纳克斯 不会自愿放弃他的宝石或阿盖尔伦的龙杖，因为它们是他守护黄金的报酬。然而，如果必要，龙愿意为了更多的宝石而使用法杖的力量来代表这座城市。`,spotlightRefs:[],presentNpcIds:["npc_498","npc_4c0","npc_4db"],availableInfoIds:[],encounterIds:["enc_24b"],treasureSlotIds:["trs_24b_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[96],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation/dmGuidanceAppend"},readAloud:'尽管位于地下深处，这个金库被从天花板倾泻而下的日光流照亮，这些光线在它们明亮的光池中捕捉到了尘埃颗粒。装饰华丽的柱子支撑着一个三十尺高的拱形天花板，天花板上装饰着矮人沐浴在他们神明面前的雕刻。深深的壁龛排列在墙壁上，其中一个壁龛里堆满了巨大的金色宝藏。 从满是灰尘的昏暗中走来一个年迈的矮人，他紧握着一根雕刻并漆成一对缠绕的龙形的手杖——一条红色，一条金色。尽管这个矮人年纪已大，但他的眼神坚定而明亮。"我没想到会有人来，"他直截了当地说。"正如你所见，这里一团糟。也许你们应该在我稍微整理一下之后再回来。"',dmGuidance:`当角色们第一次到达这里时，请阅读：
如果角色们带来了一位显赫的城市官员，比如米尔特或瓦婕拉·莎法尔，或者其中一个角色自称是巴哈姆特的崇拜者，则该检定将获得优势。
先给足交涉空间再考虑开战：欺骗要求视线内每个角色都在对抗检定中胜过龙的洞悉，只要一人失败龙就察觉全队在撒谎；说服归还黄金是 DC 18 魅力（游说）；任何威吓尝试自动失败，且此后全队对奥瑞纳克斯的魅力检定一律劣势。瑞纳尔·奈沃兰波在场给欺骗优势，带来米尔特/瓦婕拉·莎法尔或自称巴哈姆特信徒给说服优势。`},{id:"scn_257",locationId:"loc_236",name:"冒险结局",activation:{condition:{type:"quest_completed",questId:"qst_main_dragonheist"},priority:20},skeleton:["冒险可能会以几种不同的方式展开，这取决于谁得到了金币，以及这些财宝被如何处理。","尽管他们在过程中屈服了，但他们成功地阻止了黄金落入反派之手——这确实是一场苦乐参半的胜利。","竖琴手的使者、领主联盟和战锤秩序来到角色们面前，要求将黄金归还给深水城。","深水城的领主们指控他们犯有对城市公民的盗窃罪。","角色们面临高达一个月的苦役，外加相当于被盗货币价值加上500金币的赔偿。"],flesh:`冒险可能会以几种不同的方式展开，这取决于谁得到了金币，以及这些财宝被如何处理。

尽管他们在过程中屈服了，但他们成功地阻止了黄金落入反派之手——这确实是一场苦乐参半的胜利。

竖琴手的使者、领主联盟和战锤秩序来到角色们面前，要求将黄金归还给深水城。深水城的领主们指控他们犯有对城市公民的盗窃罪。角色们面临高达一个月的苦役，外加相当于被盗货币价值加上500金币的赔偿。如果他们试图逃离这座城市，城市警卫会逮捕并监禁他们。如果他们设法逃避地方当局，竖琴手和领主联盟的代理人将不懈地追捕他们。

莱拉·银手 准备让角色们自己保留宝藏的十分之一（50,000金币）。即使这么多的钱币也吸引了不想要的注意，表现为几个人向他们乞求贷款或捐款：

埃梅克·弗伦（见"商业竞争对手：埃梅克·弗伦"）需要1500金币来连本带利偿还一笔贷款。如果他在十天内不偿还这笔钱，伊思崔德·霍恩（见附录 B）会派散塔林会的暴徒来威胁，如果不伤害他的话。Emmekt带着帽子来到角色们面前，利用他们的慷慨，同时否认自己有任何过错。

达维尔·星歌（见附录 B）请求角色们捐赠5000金币，以维持他在深水城的散塔林会分支。最近发生的争执和法律问题耗尽了末日突袭者的金库。

福卢恩·布拉格玛（见附录 B）要求角色们给他500金币以偿还巨额赌债。

瓦罗赞普·格达姆（见附录 B）向角色们请求5000金币来资助一次探险，他希望这次探险能启发他未来的一本书，并在该书中特别提及他们。

杰伦·乌姆布鲁斯克，一位欠曼松债务的蒙面领主，请求一笔10,000金币的无息贷款，并承诺在一年内偿还。作为交换，她承诺将利用她"在深水城领主中的巨大影响力"在未来帮助他们。如果他们拒绝，他们将与这位秘密的蒙面领主为敌。

寺庙、慈善机构、行会以及时运不济的陌生人时不时地来敲门。他们所要求的并不多——这里一点金子，那里一点金子——但累积起来也是一笔不小的数目。

角色们在这次冒险结束时应该达到5级。在随后的几周里，他们的事迹传遍了深水城的每一个角落。最后，他们收到了一封写着如下内容的便条：`,spotlightRefs:[],presentNpcIds:["npc_4ba","npc_4bb","npc_4b2","npc_4dd"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[98],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；overlay覆写:activation"},readAloud:"地底之下的安德山在召唤。在张开的门户见。",dmGuidance:`如果角色们在龙之金库中死去，并且持有格洛尔之石，而主要反派不知道金库的位置，那么金库的秘密将随他们一同死去。
如果角色们找回了内弗梅伯的宝藏并自己保留，最终消息会传出去。
如果角色们拒绝放弃，他们将被剥夺在这些派系中可能持有的任何成员资格，并很快发现自己陷入了政治困境。
如果角色们拒绝，末日突袭者将被迫离开这座城市，将深水城散塔林会的控制权让给曼松（如果他还活着）。
如果角色们拒绝给弗伦金子，他会在1d10天后无影无踪地消失。
如果角色们似乎犹豫不决，Volo提醒他们，如果不是他最初引导他们开始这次冒险，他们一开始就不会有这些黄金。
如果角色们答应，她将履行承诺偿还债务，并给予他们一个特殊的恩惠（参见城主指南第7章中的"声望标记"）。
如果角色们想要探索Undermountain，你可以使用书籍《深水城: 疯法师的地城》继续这个战役，直到20级。`},{id:"scn_25c",locationId:"loc_25c",name:"春季疯狂",activation:{condition:{type:"always"},priority:0},skeleton:["姗娜萨的偏执情绪已经占据了上风，这个眼魔不再信任任何人。","当它正在促成一项将Xanathar公会和散塔林会合并为单一犯罪组织的交易时，格洛尔之石从它的巢穴中消失了。","尽管Zhents并没有偷走格洛尔之石，但姗娜萨却认为他们偷了。","曾经满足于仅仅拥有这块石头的眼魔，不再对金库中黄金的安全性感到自信。","姗娜萨认为在它的警惕目光下，黄金会更安全，但没有了格洛尔之石，它记不得黄金藏在哪里了。"],flesh:`姗娜萨的偏执情绪已经占据了上风，这个眼魔不再信任任何人。当它正在促成一项将Xanathar公会和散塔林会合并为单一犯罪组织的交易时，格洛尔之石从它的巢穴中消失了。尽管Zhents并没有偷走格洛尔之石，但姗娜萨却认为他们偷了。曾经满足于仅仅拥有这块石头的眼魔，不再对金库中黄金的安全性感到自信。姗娜萨认为在它的警惕目光下，黄金会更安全，但没有了格洛尔之石，它记不得黄金藏在哪里了。

在其巢穴内，姗娜萨可以使用巢穴行动，角色们也可能会遇到眼魔的区域效果。

在本冒险中没有前往姗娜萨巢穴的角色，可能会在深水城: 疯法师的地城中有理由前往。在那个冒险中，角色最有可能从骷髅港接近眼魔的巢穴（详情见X4）。

这个符号是姗娜萨的个人符文，也是用来代表Xanathar公会的符号。

巨眼魔每当需要一点暴力来提亮它的一天时，就会举行角斗士锦标赛。锦标赛的获胜者会收到奖杯，而且会有秘密的赌注。

一个锦标赛有十二名战士，包括三场战斗，中间有短休。不遵守以下规则将导致战士被取消资格：

所有锦标赛战士必须在X7等待，直到他们被叫到X6去战斗。

在战斗事件中，没有战士可以离开竞技场或攻击任何不是该事件战士的人。

诺思卡·厄格雷 将十二名战士组织成四支队伍，每队三人。为了保持战斗的趣味性，Noska尽量让各队实力均衡。一支队伍可能全部由玩家角色组成，全部由NPC组成，或者两者的组合。

第一场战斗是队伍1对抗队伍2。第二场战斗是队伍3对抗队伍4。第三场，也是最后一场战斗，是前两场战斗中获胜的队伍相互对抗。当一队的所有战士都处于失能状态、被杀或被取消资格时，战斗结束。

在第三场战斗中存活下来的每个获胜队伍的成员都会收到一个填充的姗娜萨玩偶，玩偶的嘴里有一个口袋，里面装着一颗价值100金币的宝石，以及一个雕刻成被手抚摸的笑脸巨眼魔的黑曜石奖杯（价值25金币）。

观众喜欢在他们最喜欢的队伍上下注。最大赌注为10金币。在赢得锦标赛的队伍上下注的角色将获得相当于赌注五倍的赢利。

巨魔潮对于大多数深水城居民来说是一个有趣的春季节日，包括姗娜萨，但这个巨眼魔今年为节日计划了一个残酷的转折。

Xanathar公会最近在Undermountain捕获了一些巨魔。这些巨魔被戴上没有眼睛的头盔，并在脚踝上戴上带有铁球和链条的脚镣。然后在Trolltide节日期间，它们被释放到城市的不同区域。

白发男子是一位名叫布洛马斯·萨尔特卢的水深城贵族，他没有真正的成就。当他看到角色们时，他会大喊："有巨魔！快做点什么！"如果角色们介入，两名城市守卫老兵会与他们并肩作战。这些警官在同一先攻值上行动。在他们的每轮先攻值上，有20非累积地出现另一名老兵老兵加入战斗。

这个巨魔戴着没有眼睛的头盔时处于目盲状态，脚踝上的铁球和链条脚镣使其行走速度降低到20尺。在这种状态下，它的挑战等级是4（1,100 XP）。

布罗玛斯·苏特卢会祝贺他们，并在接下来的十天里向朋友和家人讲述战斗的每一个细节。角色们英勇的故事传播开来，他们在酒馆赢得了许多新的赞助人。在接下来的六个十天里，当确定酒馆的盈利能力时，在"经营业务"表上掷骰子时加上20（见"酒馆维护费用"）。此后，为了代表深水城对"颅骨巨魔巷的巨魔杀手"的持续喜爱，在此类掷骰子上加上10。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4c9"],availableInfoIds:[],encounterIds:["enc_25c"],treasureSlotIds:["trs_25c_1"],eventIds:[],tone:"tension",_meta:{sourcePages:[99],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},readAloud:"戴着巨魔面具的孩子们在雾蒙蒙的细雨中奔跑，敲响门扉，在街道上拦住成年人。那些不给糖果苹果、咸肉条和其他零食的人会遭受各种恶作剧。一个脾气暴躁的老妇人脸上被扔了一只老鼠。一个健壮的矮人被偷走了他的烟斗。 一小群围观者聚集在一个十尺高的巨魔柳条雕像周围，他们跺着脚，因为两个年轻人正努力用闪烁的火把点燃这个雕像。 突然一个白发男子惊恐地冲向人群，脸上写满恐惧。他身后蹒跚跟随着一个拖着铁球锁链的绿色巨怪，锁链在鹅卵石街道上刮出刺耳声响。巨怪双目被盲盔遮蔽，但那张血盆大口布满獠牙。它暴躁地挥舞双臂劈砍周围雾气，发出令人胆寒的挫败嚎叫。目睹此景的人群在雨雾中四散奔逃。此刻两名城市守卫正潜行至盲眼巨怪背后，企图给予致命一击。",dmGuidance:`在进行这一章节之前，请先回顾《怪物图鉴》中的"Beholders"（眼魔）部分，特别是标题为"A Beholder's Lair"（眼魔的巢穴）的部分。
当角色们探索姗娜萨的巢穴时，他们会看到一个反复出现的符号，看起来像一个圆，从它的周长辐射出十个等距的辐条。
当角色们穿过姗娜萨的巢穴，或者试图阻止姗娜萨在深水城的代理人时，你可以使用以下一个或两个特殊事件。
当角色们偶然遇到这样的场景时，请阅读：
当角色们与巨魔战斗时，戴着巨魔面具的孩子们勇敢地用糖果苹果投掷这个生物。
如果角色们帮助击败了巨魔，城市守卫会非常感激。
【本章去向与衔接】角色手里若有格洛尔之石，最直接的一条路是拿它和姗娜萨谈（见「面对Xanathar」）——眼魔会要求他们随行去龙之金库、帮它打掉金库的龙类守卫，并派管家阿莫戈全程盯梢；不谈也能破坏它的运作：绑架或杀死宠物鱼斯尔嘉并阻止鱼塘管理员奥特·钢趾补上一条、砸毁 X20 的梦境消除器、清掉 X30 里给它做饭的狗头人厨师（三者都会让眼魔暴怒并随机处决手下）；或者从指挥链下手——杀死阿莫戈或诺思卡·厄格雷会让公会日常瘫痪十天，逼纳尔·泽布林达斯交出他配好的致盲毒药，或让眼魔相信有人要害它或斯尔嘉，它会亲手解体自己的亲信。最彻底的一条是用 X36 的二十桶发烟粉炸塌索文·双须点出的七处结构弱点（X2 秘密门门槛、X6 石拱顶、X17 任意三根柱子基座、X20 靠后墙、X22 柱子之间、X30 厨房内任意处、X33 墓穴内任意处；每处至少两桶）：巢穴将在 1 小时内坍塌，姗娜萨用解离射线挖出逃生隧道带轻伤逃走，来不及走的手下死在崩塌里，其余人可经 X4 的隧道逃往颅骨港。无论走哪条路，本章的收束都指回龙之金库的争夺（qst_main_dragonheist）。`,mapGeometry:{imageRef:"adventure/WDH/ChapterFive.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_25d",locationId:"loc_25c",name:"面对Xanathar",activation:{condition:{type:"always"},priority:0},skeleton:["作为交换，生还者必须同意帮助眼魔找到格洛尔之石。","如果他们拒绝，眼魔会再消灭一个角色，并重复提议。","这个过程会一直持续，直到角色们遵守或者无一幸存。","那些同意眼魔条件的人将被允许带着他们的生命离开。","姗娜萨并不完全信任角色们会履行他们的交易部分，因此它带上了它的管家阿莫戈来监视他们。"],flesh:`作为交换，生还者必须同意帮助眼魔找到格洛尔之石。如果他们拒绝，眼魔会再消灭一个角色，并重复提议。这个过程会一直持续，直到角色们遵守或者无一幸存。那些同意眼魔条件的人将被允许带着他们的生命离开。

姗娜萨并不完全信任角色们会履行他们的交易部分，因此它带上了它的管家阿莫戈来监视他们。

如果姗娜萨的生命值降至其最大值的一半，或者如果它认为自己的生命处于致命危险之中，它会激活它的隐身戒指并嚎叫着让阿莫戈"将篡位者撕成碎片"。在隐形状态下，姗娜萨会沿着最安全的路线飞往它的圣所（X19）。

姗娜萨的最大弱点，是它对其宠物鱼 斯尔嘉的疯狂喜爱。角色可以利用这条鱼作为筹码，进行一次 DC 16 魅力（威吓）检定。若成功，这个可怕的眼魔会变成一个哭泣的软蛋，并几乎同意角色提出的任何要求。若失败，姗娜萨会要求角色立即释放 斯尔嘉，否则将被解离（并且它会兑现这一威胁）。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_495"],availableInfoIds:["info_29c_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[99],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`当角色们到达时，掷百分骰来确定眼魔的位置，并查看姗娜萨的位置表。
如果角色们攻击眼魔，它会消灭一个角色，并试图征服其余的人。
如果角色们给姗娜萨那块石头，它会要求他们陪同它前往龙之金库，并帮助它击败金库的龙类守卫。`,randomTableIds:["tbl_25d_0"]},{id:"scn_25e",locationId:"loc_25c",name:"破坏沙纳萨的行动",activation:{condition:{type:"always"},priority:0},skeleton:["杀死眼魔可能超出了角色们的能力范围，但他们可以通过几种方式破坏其运作，无论是直接影响眼魔本身还是影响Xanathar公会的顺利运作。","他们甚至可能能够集结足够的资源（包括足够的炸药）来摧毁姗娜萨的巢穴。","姗娜萨的精神状况很不稳定。","每当它暴怒时，这个眼魔往往会随机杀死手下。","杀死或偷走姗娜萨的宠物鱼，并阻止鱼塘管理员奥特·钢趾替换它，会导致姗娜萨变得愤怒。"],flesh:`杀死眼魔可能超出了角色们的能力范围，但他们可以通过几种方式破坏其运作，无论是直接影响眼魔本身还是影响Xanathar公会的顺利运作。他们甚至可能能够集结足够的资源（包括足够的炸药）来摧毁姗娜萨的巢穴。

姗娜萨的精神状况很不稳定。每当它暴怒时，这个眼魔往往会随机杀死手下。

杀死或偷走姗娜萨的宠物鱼，并阻止鱼塘管理员奥特·钢趾替换它，会导致姗娜萨变得愤怒。

姗娜萨在X20的"梦境中和器"让它心情平静，并帮助它睡眠。破坏这个装置会让这个巨眼魔不快乐。

姗娜萨 吃由在 X30 的 狗头人 厨师准备的餐食。杀死这些 狗头人 或以其他方式阻止他们准备餐食会让 姗娜萨 变得狂怒。

尽管眼魔是Xanathar公会的最高领袖，但其副手们管理着公会的日常运作。可以通过以下任何方式来破坏指挥链。

杀死姗娜萨最信任的手下之一，比如阿莫戈或诺思卡·厄格雷，会让公会的日常运作在十天内陷入混乱。

纳尔·泽布林达斯（见附录 B）配制了一种毒药，可以使姗娜萨失明，并将公会陷入混乱。

如果眼魔被骗相信存在一个阴谋要杀害它或斯尔嘉，它会将被怀疑的阴谋家解体，从而在指挥链中留下巨大的空缺。

纳尔·泽布林达斯 走私了烟粉进入巢穴（见 X36），并且在 索文·双须 的帮助下，确定了结构不稳定的区域。如果这些区域都遭受了灾难性的损害，巢穴将在1小时内坍塌。角色可以通过在 X13 与 Thorvin 对话来了解这些信息。不稳定的区域如下：

X2，在秘密门的门槛上

X6，在石拱顶上

X17，在任意三根柱子的基座

X20，靠后墙

X22，在柱子之间

X30，在厨房内的任何地方

X33，在墓穴的任何地方

当它的巢穴倒塌时，姗娜萨 使用其解离射线挖掘一条逃生隧道，并带着轻伤逃到安全地带。如果它在范围内，它会使用其心灵射线将其宠物鱼斯尔嘉传送走。手下们可以和眼魔一起逃跑，或者通过隧道逃到颅港(X4)。那些无法做到这两件事的人在崩塌中丧生。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4cf","npc_495","npc_4c9","npc_4c2","npc_4d7"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[100],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`【重要下属】姗娜萨 依赖手下提供建议、信息以及对 Xanathar 公会日常运作的监督。附录 B 中描述了以下重要的手下：
阿莫戈，矮人管家
纳尔·泽布林达斯, 黑暗精灵顾问
尼希卢尔, 夺心魔
诺思卡·厄格雷, 矮人执行者
奥特·钢趾，矮人鱼塘管理员
索文·双须, 矮人工程师`,mapGeometry:{imageRef:"adventure/WDH/Xanathar-Lair.webp"}},{id:"scn_269",locationId:"loc_269",name:"沙纳萨的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["姗娜萨的巢穴是一个古老的地牢复合体，最初由Netherese法师建造，并随着时间的推移被眼魔扩展。","它通过一条长隧道(X4)与地下城镇Skullport相连。","一个秘密楼梯(X1)可以进入深水城的下水道。","这个巢穴有以下特点，文本中注明了例外情况：","除非另有说明，房间高度为20尺，走廊高度为15尺。"],flesh:`姗娜萨的巢穴是一个古老的地牢复合体，最初由Netherese法师建造，并随着时间的推移被眼魔扩展。它通过一条长隧道(X4)与地下城镇Skullport相连。一个秘密楼梯(X1)可以进入深水城的下水道。

这个巢穴有以下特点，文本中注明了例外情况：

除非另有说明，房间高度为20尺，走廊高度为15尺。

房间和走廊通过施放在壁灯上的不灭明焰法术明亮地照亮。

大多数门是单一的圆形石板，直径8尺，厚6英寸，一侧有石制铰链。双开门是宽16尺、高8尺的半圆形，中间分开。门把手嵌入到形状像姗娜萨的标志的石制固定装置中。(姗娜萨可以使用它的念力射线打开或关闭一个未上锁的门，或者用它的解离射线摧毁一个上锁的门。)

Xanathar公会的极少数成员能够进入眼魔的秘密巢穴。

以下区域对应于地图5.1上的标签。这个巢穴有两个通过楼梯和秘密门连接的层次。`,spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[100],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`如果角色们想要到达那里，以下派系知道它的位置并且可以帮助他们找到它。
【替换灵吸怪】尼希卢尔 这个灵吸怪在姗娜萨的巢穴（X23至X26区域）内开辟了自己的巢穴。如果尼希卢尔在冒险早期被杀死，用一个名叫Qrr'zarq的灵吸怪来替换它。
Qrr'zarq来自Undermountain的一个灵吸怪群体，该群体想要将一个灵吸怪蝌蚪植入姗娜萨体内，并通过一种叫做脑虫化（ceremorphosis）的魔法过程，将眼魔变成一个奴隶。Qrr'zarq正在等待一个机会，在姗娜萨独自睡觉时植入蝌蚪。这个灵吸怪不想让冒险者干扰或破坏它的宏伟计划，它自己保守着这个计划。它愿意帮助那些同意不伤害它或眼魔的角色。`,mapGeometry:{imageRef:"adventure/WDH/Panopticus.webp"}},{id:"scn_271",locationId:"loc_269",name:"X1. 眼睛楼梯",activation:{condition:{type:"always"},priority:0},skeleton:["角色们最有可能通过这种方式进入姗娜萨的巢穴：从城堡区的下水道可进入的螺旋楼梯，隐藏在一扇密门后面。","这条楼梯绕过了通过幽暗地域和颅骨港的更加困难的路线，后者在深水城: 疯法师的地城中有描述。","这个狭窄、螺旋形的楼梯墙壁上雕刻着睁开的眼睛，这些眼睛发出微弱的魔法光芒。","角色们下楼梯时感觉好像被监视，而且一旦他们进入眼魔的巢穴，这种感觉并没有消失。","昏暗的楼梯向下延伸数百尺，最终通向一个圆形的石门，这扇门向内打开进入X2。"],flesh:`角色们最有可能通过这种方式进入姗娜萨的巢穴：从城堡区的下水道可进入的螺旋楼梯，隐藏在一扇密门后面。这条楼梯绕过了通过幽暗地域和颅骨港的更加困难的路线，后者在深水城: 疯法师的地城中有描述。

角色们下楼梯时感觉好像被监视，而且一旦他们进入眼魔的巢穴，这种感觉并没有消失。昏暗的楼梯向下延伸数百尺，最终通向一个圆形的石门，这扇门向内打开进入X2。`,spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:"这个狭窄、螺旋形的楼梯墙壁上雕刻着睁开的眼睛，这些眼睛发出微弱的魔法光芒。",dmGuidance:"当角色们找到楼梯时，请阅读：",offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_273",locationId:"loc_269",name:"X2. 被监视的大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个魔法照明的大厅有以下特点：","墙壁上雕刻着各种形状和大小的眼睛。","许多眼球有石头眼睑，它们不规律地开合。","一个秘密门隐藏在西墙中。","这些闪烁的眼睛雕刻有点令人不安，但无害。"],flesh:`这个魔法照明的大厅有以下特点：

墙壁上雕刻着各种形状和大小的眼睛。许多眼球有石头眼睑，它们不规律地开合。

成功通过一个 DC 14 感知（ Perception）检定的角色会注意到一个幽灵般的眼梗（侦查传感器）从正南方向的双扇门前的天花板伸出。

一个秘密门隐藏在西墙中。

这些闪烁的眼睛雕刻有点令人不安，但无害。

幽灵般的眼梗是一种魔法传感器，让 X16 中的一名学徒法师能够监视这个大厅。眼梗的功能类似于一个额外的眼睛，具有60英尺范围内的黑暗视觉。角色可以通过一次成功的 DC 10 智力（奥秘）检定来确定眼梗的功能，但无法确定谁在通过它窥视，或从何处窥视。眼梗不能被损坏，但会被 解除魔法 法术摧毁。该传感器在反魔法力场的区域内被抑制。

秘密门可以通过一个成功的DC 15感知（观察）检定找到。要打开它，必须按下附近一个形似眼睛的墙雕。当这样做时，秘密门向内摆动，露出后面一条弯曲的走廊（X8）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_273_g1","info_273_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_277",locationId:"loc_269",name:"X3. 眼魔僵尸守卫",activation:{condition:{type:"always"},priority:0},skeleton:["一个眼魔丧尸守卫着这个被魔法照亮的房间。","围绕在它周围的是四个气孢菌，它们乍一看像是未成熟的眼魔。","所有五个生物都漂浮在房间中央。","这个眼魔僵尸是一只从幽暗地域升起挑战姗娜萨霸权的眼魔所剩下的全部。","在击败了它的对手后，姗娜萨让尸体活化并转变成了巢穴的守卫。"],flesh:`一个眼魔丧尸守卫着这个被魔法照亮的房间。围绕在它周围的是四个气孢菌，它们乍一看像是未成熟的眼魔。所有五个生物都漂浮在房间中央。

这个眼魔僵尸是一只从幽暗地域升起挑战姗娜萨霸权的眼魔所剩下的全部。在击败了它的对手后，姗娜萨让尸体活化并转变成了巢穴的守卫。气体孢子是后来添加的。

这个眼魔僵尸允许挥舞姗娜萨标志的生物不受干扰地通过。否则，它会攻击。气体孢子不会攻击，但如果它们受到任何伤害就会爆炸。眼魔僵尸对它们的死亡爆发特性免疫。`,spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:[],encounterIds:["enc_277"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[102],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_278",locationId:"loc_269",name:"X4. 通往斯卡尔波特的隧道",activation:{condition:{type:"always"},priority:0},skeleton:["这条魔法照亮的隧道向东延伸300英尺，超出了地图范围。",'它终止于一段楼梯，爬升20英尺即可到达位于地底城镇斯卡尔波特（Skullport）的"肠子与吊带"旅馆（Guts & Garters Inn），该城镇处于姗娜萨的控制之下。',"有关旅馆和斯卡尔波特的更多信息，请参见深水城: 疯法师的地城。"],flesh:'这条魔法照亮的隧道向东延伸300英尺，超出了地图范围。它终止于一段楼梯，爬升20英尺即可到达位于地底城镇斯卡尔波特（Skullport）的"肠子与吊带"旅馆（Guts & Garters Inn），该城镇处于姗娜萨的控制之下。有关旅馆和斯卡尔波特的更多信息，请参见深水城: 疯法师的地城。',spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_279",locationId:"loc_269",name:"X5. 恐怖的壁龛",activation:{condition:{type:"always"},priority:0},skeleton:["一套活化盔甲，其胸甲上浮雕着姗娜萨的标志，站在这个壁龛里，乍一看似乎是一套华丽的但无生命的展示盔甲。","它保持静止直到受到伤害或被姗娜萨召唤到X6。","（眼魔用它来防止竞技场中的观众过于喧闹。"],flesh:"一套活化盔甲，其胸甲上浮雕着姗娜萨的标志，站在这个壁龛里，乍一看似乎是一套华丽的但无生命的展示盔甲。它保持静止直到受到伤害或被姗娜萨召唤到X6。（眼魔用它来防止竞技场中的观众过于喧闹。）",spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_27a",locationId:"loc_269",name:"X6. 血与财富之坑",activation:{condition:{type:"always"},priority:0},skeleton:["姗娜萨 将这个房间改造成了角斗场。","它还利用这个地点以它认为娱乐性的方式处理不再信任的下属。","这个区域有以下特点：","一个被魔法照亮的圆形大厅，地板上覆盖着一层浸透鲜血的沙子，石质支柱支撑着其40尺高的圆顶天花板。","十尺高的石制看台环绕着房间的西北半部。"],flesh:`姗娜萨 将这个房间改造成了角斗场。它还利用这个地点以它认为娱乐性的方式处理不再信任的下属。

这个区域有以下特点：

一个被魔法照亮的圆形大厅，地板上覆盖着一层浸透鲜血的沙子，石质支柱支撑着其40尺高的圆顶天花板。

十尺高的石制看台环绕着房间的西北半部。楼梯从看台通往巢穴的其他区域，看台下的一条隧道向西通往怪物牢房区（X7）。

东南墙上有一个半圆形的凹室，有台阶通向其上方。它的地面比竞技场地面高出5尺，凹室装饰有地下暗河真菌的石瓶花束和带有姗娜萨标志的紫色挂毯。从凹室的弯曲屋顶突出的是一个幽灵眼柄（侦查传感器）。

一个秘密门隐藏在南墙中。

如果姗娜萨在其他地方，竞技场是空的，但处于监视之下（见下文的"侦查传感器"）。

如果姗娜萨在场，它会悬浮在东南壁龛中，并使用它的隐身戒指保持不可见状态。站在壁龛台阶上的是两个矮人：姗娜萨的管家阿莫戈（见附录 B），他主持格斗锦标赛，以及姗娜萨的首席执法者诺思卡·厄格雷（见附录 B），他从X7释放竞技场战士。十个人类匪徒们和五个熊地精（所有都是Xanathar公会的成员）在看台上畅饮啤酒并嘲讽战斗者，而两个地精则提供咸味老鼠肠和血蝇肉馅派。

这位半身人不想在一场毫无意义的战斗中死去，因此大声呼救。

举办锦标赛的规则将在本章末尾进行描述（参见"血与财富"）。如果某个角色参加了锦标赛并获胜，或者击败了其手下，姗娜萨将深受触动，同意接见队伍，并在会面中试图征服他们（参见"面对Xanathar"）。

幽灵眼柄是一个魔法传感器，它允许在X16的学徒法师监视这个房间。有关更多信息，请见X2。

南墙上的暗门可以通过一次成功的 DC 15 感知（察觉）检定发现。推开后可以看到外面的 X33。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_495","npc_4c9"],availableInfoIds:["info_273_g1","info_27a_g1"],encounterIds:["enc_27a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[102],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`如果角色们在锦标赛期间进入，他们会看到一只牛头人正在与一名伤痕累累的女性半身人萨马拉·强骨（见X7）战斗。
如果角色们干预，竞技场的观众会变得暴力并攻击他们。
如果角色们让战斗继续下去，诺斯卡会护送胜利者回到X7，而阿莫戈则会怂恿角色们加入锦标赛。
如果角色们不愿意参加锦标赛，阿莫戈会让人将他们打到昏迷并关押起来，而姗娜萨则在一旁默默观看。`},{id:"scn_27e",locationId:"loc_269",name:"X7. 牢房区",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域包含四个由铁栏分隔的牢房。","矩形铁门上装有门锁，而 诺思卡·厄格雷 拿着钥匙。","囚犯信息表列出了该区域的犯人。"],flesh:"这个区域包含四个由铁栏分隔的牢房。矩形铁门上装有门锁，而 诺思卡·厄格雷 拿着钥匙。开锁需要成功通过 DC 15 的敏捷检定并使用盗贼工具。强行破门需要成功通过 DC 25 的力量（运动）检定。囚犯信息表列出了该区域的犯人。",spotlightRefs:[],presentNpcIds:["npc_4c9"],availableInfoIds:["info_27e_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[104],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_27f",locationId:"loc_269",name:"X8. 雕像大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个20尺宽的魔法照明走廊连接着由Xanathar公会控制的各个区域。","走廊上点缀着栩栩如生的类人雕像。","穿着花哨的地底侏儒，Flutterfoot Zipswiggle，作为小丑为姗娜萨服务。","他携带着一个包含无踪粉的小包。","Flutterfoot不知道，那个巨眼魔已经厌倦了这个侏儒，并计划在下次见面时将他变成石头。"],flesh:`这个20尺宽的魔法照明走廊连接着由Xanathar公会控制的各个区域。它有以下特点：

走廊上点缀着栩栩如生的类人雕像。

穿着花哨的地底侏儒，Flutterfoot Zipswiggle，作为小丑为姗娜萨服务。他携带着一个包含无踪粉的小包。Flutterfoot不知道，那个巨眼魔已经厌倦了这个侏儒，并计划在下次见面时将他变成石头。

Flutterfoot知道姗娜萨的巢穴的特点和布局，以及眼魔当前的位置和秘密门的位置，除了那些通向X36的门。

我带着微笑而来；

在屠杀中，我休息；

我可能会传染

但我的药是最好的。

我是什么？

Flutterfoot的谜语答案是"笑声"。

这些雕像是被姗娜萨变成石头的入侵者和Xanathar公会成员的石化遗骸。总共有12座雕像：四个人类，三个地精，两个黑暗精灵，一个矮人，一个半身人和一个提夫林。

通往X2的秘密门从这边看非常明显。它可以通过转动旁边墙上的石把手来打开。`,spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:["info_273_g2","info_27f_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_27f_e1"],tone:"exploration",_meta:{sourcePages:[104],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`当角色第一次探索大厅时，一个穿着小丑服装的地底侏儒在大厅里，在雕像之间跳舞和翻跟斗。
如果角色正确回答以下谜语，它会高兴地提供作为向导的服务：
如果角色们给出了错误的答案，侏儒会用无踪粉撒在自己身上，变得隐形，并逃跑。`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_283",locationId:"loc_269",name:"X9. 公会兵营",activation:{condition:{type:"always"},priority:0},skeleton:["这个被魔法照亮的房间有以下特点：","墙壁上涂满了用通用语、矮人语、地精语和地底共同语写的淫秽涂鸦。","房间的前方有一张破旧的木桌，周围是空桶和木桶，它们被当作凳子使用。","喝空的酒杯散落在桌面和地板上。","房间里的后部排列着两排共十二张发霉的双层床。"],flesh:`这个被魔法照亮的房间有以下特点：

墙壁上涂满了用通用语、矮人语、地精语和地底共同语写的淫秽涂鸦。

房间的前方有一张破旧的木桌，周围是空桶和木桶，它们被当作凳子使用。喝空的酒杯散落在桌面和地板上。

房间里的后部排列着两排共十二张发霉的双层床。

当他们不在竞技场（X6）观看锦标赛或在听众大厅（X18）听姗娜萨演讲时，十名人类匪徒们，Xanathar公会的成员，在这里睡觉。他们醉得如此厉害，以至于在接下来的几个小时里，除非受到伤害，否则他们不会醒来。此外，只要他们保持醉酒状态，他们就会处于中毒状态。`,spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:[],encounterIds:["enc_283"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[104],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_285",locationId:"loc_269",name:"X10. 诺斯卡的住处",activation:{condition:{type:"always"},priority:0},skeleton:["姗娜萨的执行者，诺思卡·厄格雷（见附录 B），当他不在竞技场（X6）时，就居住在这个被魔法照亮的房间里。","房间包含以下特点：","一个带爪脚的大理石浴缸位于房间中央，旁边是一个装有锈蚀怪的大木笼。","墙壁旁堆放着破碎和生锈的头盔、盾牌和武器。","挂在后墙上的钩子上有三个由稻草和帆布制成的人体模型，上面插满了众多的弩箭。"],flesh:`姗娜萨的执行者，诺思卡·厄格雷（见附录 B），当他不在竞技场（X6）时，就居住在这个被魔法照亮的房间里。房间包含以下特点：

一个带爪脚的大理石浴缸位于房间中央，旁边是一个装有锈蚀怪的大木笼。墙壁旁堆放着破碎和生锈的头盔、盾牌和武器。

挂在后墙上的钩子上有三个由稻草和帆布制成的人体模型，上面插满了众多的弩箭。

Noska将锈蚀怪物当作宠物饲养，并用成堆的废弃头盔、盾牌和武器喂它。他用人体模型进行靶子练习。他将浴缸改造成了床，里面垫着稻草和破旧的毛皮。

一个简单的门闩将笼子门保持关闭状态。锈蚀怪物在被囚禁在里面时无法伤害任何人。

隐藏在一堆生锈武器下面的是一个木制箱子，里面装有Noska的个人宝藏：37金币，151银币，360铜币，以及四颗血石（每颗价值50金币）。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4c9"],availableInfoIds:[],encounterIds:["enc_285"],treasureSlotIds:["trs_285_1"],eventIds:["evt_285_e1"],tone:"tension",_meta:{sourcePages:[105],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_288",locationId:"loc_269",name:"X11. Ahmaergo的收藏",activation:{condition:{type:"always"},priority:0},skeleton:["姗娜萨的管家迷恋着牛头人，因此相应地装饰了这个被魔法照亮的房间：","一只填充过的、怒视着的牛头人站在房间的北端。","一把大斧头靠在它前面的木架上。","房间中央是一块10英尺长、5英尺宽、3英尺高的矩形石板，其上雕刻着手工制作的微型石制迷宫模型。","一个 侦测魔法 法术会揭示模型迷宫周围的咒法系魔法光环。"],flesh:`姗娜萨的管家迷恋着牛头人，因此相应地装饰了这个被魔法照亮的房间：

一只填充过的、怒视着的牛头人站在房间的北端。一把大斧头靠在它前面的木架上。

房间中央是一块10英尺长、5英尺宽、3英尺高的矩形石板，其上雕刻着手工制作的微型石制迷宫模型。

一个 侦测魔法 法术会揭示模型迷宫周围的咒法系魔法光环。触碰迷宫的生物会成为 迷宫术 法术的目标（豁免 DC 15）。一旦效果触发，直到下一次黎明前都无法再次触发。

当除了阿莫戈之外的人打开南门时，填充的牛头人的骨架会从皮肤中爆发出来，变成一个活动的骷髅牛头人，并用大斧武装自己。它攻击所有入侵者，追击任何逃入X8或X12的人。牛头人骨架服从阿莫戈的命令。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_495"],availableInfoIds:[],encounterIds:["enc_288"],treasureSlotIds:[],eventIds:["evt_288_e1","evt_288_e2"],tone:"tension",_meta:{sourcePages:[105],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_28b",locationId:"loc_269",name:"X12. 阿玛尔戈的住处",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的魔法灯光已经被驱散，使室内变得黑暗。","拥有光源或黑暗视觉的角色可以辨认出以下特点：","这个房间已经被改造成了一个迷宫，墙壁由堆叠的板条箱和木板钉在一起构成。","墙壁一直延伸到20尺高的天花板。","人形生物的骨头散落在地板上。"],flesh:`这个房间的魔法灯光已经被驱散，使室内变得黑暗。拥有光源或黑暗视觉的角色可以辨认出以下特点：

这个房间已经被改造成了一个迷宫，墙壁由堆叠的板条箱和木板钉在一起构成。墙壁一直延伸到20尺高的天花板。

人形生物的骨头散落在地板上。（阿莫戈从下界之山收集了这些骨头，并把它们放在这里作为可怕的装饰。）

迷宫占据了整个房间，除了西南角一个10尺见方的区域，那里阿莫戈放置了一个木制箱子和一张由牛头人的头骨、骨头、皮和毛制成的床。

穿过迷宫需要时间但并不困难，只是阿莫戈在迷宫的中途设下了一道绊线。在队伍前导的角色如果正在搜索陷阱，可以通过成功的DC 12感知（察觉）检定发现绊线。一旦发现，它就可以轻易避开或解除。如果陷阱被触发，迷宫的墙壁会崩塌下来。每个在崩塌迷宫中的生物都会被碎片击中，必须进行DC 12敏捷豁免，失败则受到10点（3d6）钝击伤害，成功则只受一半伤害。

阿莫戈的箱子里包含121金币，装在一个由缝合的肉制成的袋子里，一个雕刻成牛头人形状的孔雀石雕像（价值250金币），以及一瓶治疗药水。`,spotlightRefs:[],presentNpcIds:["npc_495"],availableInfoIds:["info_28b_g1"],encounterIds:[],treasureSlotIds:["trs_28b_0"],eventIds:["evt_28b_e1"],tone:"exploration",_meta:{sourcePages:[105],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_28d",locationId:"loc_269",name:"X13. 索尔文的工作室",activation:{condition:{type:"always"},priority:0},skeleton:["双扇门向内打开，进入一个被魔法照亮的房间，包含以下内容：","索文·双须（见附录 B），姗娜萨的工程师，正在房间中央建造一个大型装置。","附近漂浮着一个白化凝视者眼魔（见附录 B）。","整个房间的石头桌子上摆满了工具。","（这里有足够多的工具来组装两套石匠工具，一套铁匠工具和两套修补匠工具。"],flesh:`双扇门向内打开，进入一个被魔法照亮的房间，包含以下内容：

索文·双须（见附录 B），姗娜萨的工程师，正在房间中央建造一个大型装置。附近漂浮着一个白化凝视者眼魔（见附录 B）。

整个房间的石头桌子上摆满了工具。（这里有足够多的工具来组装两套石匠工具，一套铁匠工具和两套修补匠工具。）

其他的家具包括一张简易床和一堆装满Wyrmwizz Ale（一种颅骨港酿造的啤酒）的木桶。

姗娜萨 梦见了这只凝视者并将其送到托文身边进行监视，因为这个眼魔开始怀疑托文的忠诚。这只凝视者本身也并不忠诚。一名法师角色可以通过成功的 DC 11 魅力（说服）检定与其成为朋友，并通过 寻获魔宠 仪式将其转化为自己的魔宠。当凝视者成为魔宠时，它的阵营会变更为与其新主人一致。

当Thorvin的装置完成后，它将使姗娜萨能够将被石化的生物粉碎，变成细粉，这些细粉可以用来制作石膏。粉碎机主要由一个高高的石制容器组成，底部有研磨齿轮，还有一个漏斗，粉末状的石头从那里倒出。

粉碎机是Thorvin的个人项目，它允许他待在姗娜萨的巢穴附近并收集信息，这些信息他将其卖给了竖琴手。（Thorvin把他从派系那里赚来的钱存入银行，远离了巨眼魔的窥探之眼。）如果有一或多个角色接近他并声称自己是竖琴手，Thorvin会因为他们冒险暴露他是间谍而感到不安，他指向那个白化凝视者。他从未见过阿莫戈的房间（X11和X12区域），但对巢穴的其他部分非常熟悉。

Thorvin还告诉他们在哪里放置发烟粉以造成最大的破坏（见"摧毁巢穴"）。`,spotlightRefs:[],presentNpcIds:["npc_4d7","npc_4e2","npc_4b4","npc_495","npc_4c2"],availableInfoIds:["info_28d_g1","info_28d_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[105],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`如果角色们与凝视者成为朋友并承诺离开，Thorvin会如实回答多达三个问题。
如果角色们在寻找干扰姗娜萨运作的方法，Thorvin建议他们强迫纳尔·泽布林达斯，巨眼魔的顾问（见X18），给他们提供他走私进地牢的大量发烟粉。`},{id:"scn_290",locationId:"loc_269",name:"X14. 秘密走廊",activation:{condition:{type:"info_revealed",infoId:"info_290_g1"},priority:10},skeleton:["这个被魔法照亮的大厅隐藏在暗门后面。","它绕过了觐见室（X18）并缓缓向东倾斜。"],flesh:"这个被魔法照亮的大厅隐藏在暗门后面。它绕过了觐见室（X18）并缓缓向东倾斜。找到任一暗门都需要成功通过一次 DC 15 感知（察觉）检定。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_290_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[106],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"}},{id:"scn_291",locationId:"loc_269",name:"X15. 迷宫楼梯",activation:{condition:{type:"always"},priority:0},skeleton:["站在这些被魔法照亮的楼梯顶部的角色可以听到下面传来的响亮的音乐声和喧闹的笑声。","楼梯向下延伸20尺到达X28。"],flesh:"站在这些被魔法照亮的楼梯顶部的角色可以听到下面传来的响亮的音乐声和喧闹的笑声。楼梯向下延伸20尺到达X28。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[106],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_292",locationId:"loc_269",name:"X16. Panopticus警卫站",activation:{condition:{type:"info_revealed",infoId:"info_297_g1"},priority:10},skeleton:["这个房间包含以下特点：","五个秃头的盾矮人，他们的头上覆盖着紫色的眼睛纹身，坐在地板上一个发光圆圈的边缘。","他们的眼睛紧闭，但他们对周围环境是有意识的。",'从天花板上突出，在圆圈正上方的是一个大的，向外张开的青铜"钟"，形状类似于长号的喇叭口。',"嵌入到凹进去墙壁的背面是一个秘密门，它通向X17。"],flesh:`这个房间包含以下特点：

五个秃头的盾矮人，他们的头上覆盖着紫色的眼睛纹身，坐在地板上一个发光圆圈的边缘。他们的眼睛紧闭，但他们对周围环境是有意识的。

从天花板上突出，在圆圈正上方的是一个大的，向外张开的青铜"钟"，形状类似于长号的喇叭口。

嵌入到凹进去墙壁的背面是一个秘密门，它通向X17。

这五个纹身的纹身矮人操作姗娜萨的"全视之眼"魔法监控系统。他们只在自卫时战斗。他们是学徒法师（见附录 B），有以下变化：

他们是中立的。

他们有这些种族特性：他们的行走速度是25尺。他们在对毒素的豁免检定上有优势，并且对毒素伤害有抗性。他们具有60尺范围内的黑暗视觉。他们说通用语和矮人语。

尼希卢尔这个灵吸怪在精神上和外科手术上改变了矮人们，使他们能够一只眼睛睡觉，任何时候都有一半大脑处于睡眠状态。

这个铜钟连接着一个管道，管道穿过石头，通向附近的观众室（X18）。钟下的声音被放大，并将这些声音传送到观众室。

一个侦测魔法法术会显示出这个圈子周围的预言魔法光环，矮人们利用这个圈子来窥探地下城中其他各个地点：入口大厅（X2）、竞技场（X6）、疯狂的前厅（X23）、娱乐大厅（X28）以及楼下大厅（X32）。每个地点都有一个矮人监视，并通过青铜铃铛传达所看到的内容。这个窥探圈子对其他人无效。它在反魔法场中被抑制，并且可以被解除（DC 17）。当该圈子消失时，上述地点的幽灵眼柄传感器也会随之消失。

成功的 DC 15 感知（察觉）检定可以发现这扇秘门。地板上的一个隐藏踏板，被踩下时会导致门向内摆动。`,spotlightRefs:[],presentNpcIds:["npc_497","npc_4c4"],availableInfoIds:["info_297_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[106],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"}},{id:"scn_297",locationId:"loc_269",name:"X17. 长廊",activation:{condition:{type:"always"},priority:0},skeleton:["雕刻着眼睛的柱子沿着大厅的弯曲排列，这些眼睛似乎在跟踪经过的生物。","这不是魔法效果，而是一种光学错觉。","如果他没有和姗娜萨在竞技场（X6）里，阿莫戈（见附录 B）正在进行地牢的例行检查。","角色们可以听到矮人的脚步声回荡着向他们的位置靠近。","如果他看到入侵者并且人数不足，阿莫戈会撤退到X22，下楼到X28召集援军，并带领搜索队去捕捉闯入者。"],flesh:`雕刻着眼睛的柱子沿着大厅的弯曲排列，这些眼睛似乎在跟踪经过的生物。这不是魔法效果，而是一种光学错觉。

如果他没有和姗娜萨在竞技场（X6）里，阿莫戈（见附录 B）正在进行地牢的例行检查。角色们可以听到矮人的脚步声回荡着向他们的位置靠近。如果他看到入侵者并且人数不足，阿莫戈会撤退到X22，下楼到X28召集援军，并带领搜索队去捕捉闯入者。如果他只看到一个入侵者，他会拔出斧头进行攻击。

这个走廊的最北端展示了一幅无叶树的壁画，树枝上嵌着没有眼皮的眼睛。按下特定的眼睛会导致墙壁上的一部分像门一样打开，通往 X16。角色可以通过一次成功的 DC 15 感知（感知）检定找到这扇秘密门和开关。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_495"],availableInfoIds:["info_297_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[107],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_29a",locationId:"loc_269",name:"X18. 听众大厅",activation:{condition:{type:"always"},priority:0},skeleton:["姗娜萨在这个40尺高的圆顶大厅中迎接访客并向其手下发表演讲。","在地牢复合体的任何地方被侦查传感器看到的角色不能在这里出其不意地攻击生物。","这个被魔法照亮的房间包含以下特点：","圆形地板铺着黑色大理石，并装饰有姗娜萨标志的金色马赛克。","从天花板上突出的是一个青铜制的钟形凸起。"],flesh:`姗娜萨在这个40尺高的圆顶大厅中迎接访客并向其手下发表演讲。在地牢复合体的任何地方被侦查传感器看到的角色不能在这里出其不意地攻击生物。这个被魔法照亮的房间包含以下特点：

圆形地板铺着黑色大理石，并装饰有姗娜萨标志的金色马赛克。

从天花板上突出的是一个青铜制的钟形凸起。（这个装置是位于X16中描述的声音放大器的另一端。）

沿着弯曲的墙壁展示着一打栩栩如生的雕像（那些反抗巨眼魔的人类、黑暗精灵、矮人、地精类和狗头人的残骸）。

地板内隐藏着一个秘密陷阱门。

在这个房间内，姗娜萨使用它的隐身戒指保持隐形，并且可以使用一个附赠动作来激活或关闭一场迷幻的魔法光效，每一个光点都有人类眼球大小。这些光点填充了房间中央的一个10英尺立方体，眼魔可以投射它的声音，使其似乎从同一区域传出。任何成功通过DC 13感知（洞察）检定的角色可以辨别出这个光效并非声音的来源。

如果眼魔在这里，它正在使用迷幻的灯光展示向一群阿谀奉承的下属发表一篇语无伦次、自我吹嘘的演讲，这些下属由十个人类匪徒们和两个灰矮人组成，他们从未见过姗娜萨的真正形态。这些手下紧握着Wyrmwizz Ale（一种便宜的Skullport酿造）的酒杯，每当眼魔称赞自己时，他们就向姗娜萨敬酒。姗娜萨的阴险卓尔魔法师顾问，纳尔·泽布林达斯（见附录 B），站在通往X19的敞开的门前，微弱地为演讲鼓掌。在Nar'l旁边漂浮着他的触须怪保镖。如果姗娜萨已经被警告角色们接近了，它会结束演讲，并给予他们一个接见；有关更多信息，请看"面对姗娜萨"。

如果姗娜萨在其他地方，这个房间只包含Nar'l和触须怪。Nar'l试图诱使冒险家与巨眼魔决斗。如果他受伤，他会通过地板上的陷阱门逃跑，并撤退到X35，而触须怪掩护他的逃跑。

这一背叛行为被格里尔眼魔目睹，导致该生物转而攻击他。

成功通过一次 DC 15 感知（观察）检定可以发现地板上的一个隐蔽活板门。成功通过一次 DC 12 力量（运动）检定可以将其掀开，露出一架通向 X29 的木梯。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4c2"],availableInfoIds:["info_290_g1","info_29a_g1","info_29a_g2"],encounterIds:["enc_29a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[107],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果队伍中包含布雷根·达尔特成员且纳尔认出他们身份，他会将其拥有的眼挠交给队伍用以致盲姗娜萨。",offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_29c",locationId:"loc_269",name:"X19. Xanathar的圣所",activation:{condition:{type:"always"},priority:0},skeleton:["这个被魔法照亮的房间有一个平坦的、30尺高的天花板，并包含几个特点：","发光的紫色颗粒像薄雾一样在空气中飘荡。","一个直径20尺的鱼缸占据了房间的主导地位。","里面装满了水，还包括一个小珊瑚礁、一个微型沉船和一个沉没的宝箱。","一个直径3尺的较小鱼缸坐落在较大鱼缸旁边的基座上。"],flesh:`这个被魔法照亮的房间有一个平坦的、30尺高的天花板，并包含几个特点：

发光的紫色颗粒像薄雾一样在空气中飘荡。成功的 DC 12 智力（自然）检定会揭示这些是幽暗地域的孢子。

一个直径20尺的鱼缸占据了房间的主导地位。里面装满了水，还包括一个小珊瑚礁、一个微型沉船和一个沉没的宝箱。

一个直径3尺的较小鱼缸坐落在较大鱼缸旁边的基座上。一个戴着装饰有眼柄的头骨帽的矮人正在给一条在较小鱼缸中绕圈游动的鳟鱼大小的鱼喂食。

一个直径10尺的银色镜子嵌入在西墙中。镜子的框架上刻有文字。

东部隧道起始于离地面10尺处，并且缓缓向上倾斜至X21。(姗娜萨使用这个通道作为逃跑路线。)

如果姗娜萨（见附录 B）在这里，它是隐形状态，并且在亲切地对鱼说话，而矮人奥特·钢趾正在喂鱼。

奥特·钢趾（见附录 B）是姗娜萨的鱼饲养员。如果他看到入侵者并且巨眼魔不在场，Ott会拔出他的匕首并结巴地说："你们不应该在这里！后退，否则我会叫老板！"Ott不能与姗娜萨进行心灵交流，但他认为自己可以。他闭上眼睛并急切地请求姗娜萨返回其圣所并消灭入侵者。

姗娜萨的宠物鱼，斯尔嘉，是巨眼魔唯一像爱自己一样爱的生物。实际上，多年来已经有很多个Sylgars，但Ott擅长在姗娜萨意识到它心爱的宠物死亡之前获得一个替代品。

斯尔嘉的大鱼缸重约6000磅，底部的宝箱是真实的（见下文的"宝藏"）。小鱼缸重60磅，主要用于喂食。姗娜萨使用它的念力射线将斯尔嘉从一个鱼缸转移到另一个鱼缸。

镜子的框架上刻着"Xoblob"这个词。一个侦测魔法法术揭示了镜子周围的占卜魔法光环。在镜子10尺范围内说出"Xobblob"这个词，会使它的反射表面变成一个侦查传感器，显示出老Xoblob商店和商店前面的街道，就像通过商店展示窗中挂着的填充巨眼魔的眼睛所看到的那样（见"老Xoblob商店"）。

这些紫色孢子渗入了费尔兹瑞斯，一种在幽暗地域中发现的神奇辐射。任何在这个房间内结束其回合的生物必须成功通过一个DC 13 的体质豁免检定，否则将遭受一种随机形式的短期疯狂，这种疯狂通过在第8章的短期疯狂表中掷骰决定。生物不需要吸入孢子就会受到它们的影响。一旦疯狂结束，该生物将对这个房间中的孢子免疫。

宝箱没有上锁，内含三十颗每颗价值100金币的宝石。如果姗娜萨已经取回格洛尔之石，这件神器也在这里。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4cf"],availableInfoIds:["info_29c_g1","info_29c_g2","info_29c_g3"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[107],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:"【宝藏】大鱼缸底部的宝箱没有上锁，内含三十颗每颗价值 100 金币的宝石；如果姗娜萨此时已经取回格洛尔之石，这件神器也在这里。（提取缺口：本 pack 未为该宝箱生成 trs_ 槽位，需 DM 手工发放。）"},{id:"scn_2a2",locationId:"loc_269",name:"X20. 梦境消除器",activation:{condition:{type:"always"},priority:0},skeleton:["这个侧室包含以下特点：","一个直径6尺的由水晶格子制成的碗在离地面10尺处悬浮，随着它发出多彩的光芒而脉动。","一个破旧的稻草垫子位于碗下面的地面上。","（鱼饲养员，奥特·钢趾，使用这个垫子作为床。","姗娜萨聘请了一位法师建造了一个装置，以防止它不小心梦到另一个巨眼魔的存在。"],flesh:`这个侧室包含以下特点：

一个直径6尺的由水晶格子制成的碗在离地面10尺处悬浮，随着它发出多彩的光芒而脉动。

一个破旧的稻草垫子位于碗下面的地面上。（鱼饲养员，奥特·钢趾，使用这个垫子作为床。）

姗娜萨聘请了一位法师建造了一个装置，以防止它不小心梦到另一个巨眼魔的存在。碗状的"梦境消除器"会在姗娜萨开始梦到其他巨眼魔时神奇地唤醒它。如果碗被反魔法场或被解除魔法法术或类似效果瞄准，它会坠落到地面并碎成百万片。`,spotlightRefs:[],presentNpcIds:["npc_4cf","npc_4e2"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[110],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2a4",locationId:"loc_269",name:"X21. 巨眼怪逃生路线",activation:{condition:{type:"always"},priority:0},skeleton:["位于隧道北端，缓缓向下倾斜至X19的地板上，有一个圆形的石塞，它可以打开下方走廊的天花板。","姗娜萨可以用它的心灵感应射线举起石塞，制造一个刚好够它飘过的开口。"],flesh:"位于隧道北端，缓缓向下倾斜至X19的地板上，有一个圆形的石塞，它可以打开下方走廊的天花板。姗娜萨可以用它的心灵感应射线举起石塞，制造一个刚好够它飘过的开口。一个角色可以通过成功的DC 19力量（运动）检定来举起石塞。",spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[110],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2a5",locationId:"loc_269",name:"X22. 到达点",activation:{condition:{type:"always"},priority:0},skeleton:["任何持有正确钥匙的生物，通过Xanathar公会藏身之地的Q11中的魔法传送门，会出现在这里，位于岩柱之间。","西南角的一个螺旋楼梯下降20尺到达X32。"],flesh:`任何持有正确钥匙的生物，通过Xanathar公会藏身之地的Q11中的魔法传送门，会出现在这里，位于岩柱之间。

西南角的一个螺旋楼梯下降20尺到达X32。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[110],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2a6",locationId:"loc_269",name:"X23. 疯狂的前厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个大厅有以下特点：","一只寇涛驱策者和六只寇涛守卫着大厅。","它们聚集在东南角的铁栅栏前，从最近被杀的矮人骨头上撕下肉块。","一个幽灵般的眼柄从大厅中央的天花板突出。","地板上散落着骨头，覆盖着一层薄薄的粘稠、半透明的粘液。"],flesh:`这个大厅有以下特点：

一只寇涛驱策者和六只寇涛守卫着大厅。它们聚集在东南角的铁栅栏前，从最近被杀的矮人骨头上撕下肉块。

一个幽灵般的眼柄从大厅中央的天花板突出。

地板上散落着骨头，覆盖着一层薄薄的粘稠、半透明的粘液。

这些疯狂的生物受到X24中灵吸怪的控制，尽其所能地服从其心灵感应命令。当它们探测到入侵者时，会发出"呜呜！呜呜！"的叫声来警告它们的灵吸怪主人，然后冲进战斗。

这个区域与 X24 之间的吊闸可以通过一次成功的 DC 22 力量（运动）检定、或使用 敲击术 法术或类似魔法来升起。升起吊闸的杠杆位于 X24。

这个幽灵般的眼柄是一个魔法传感器，允许X16中的一位学徒法师监视这个房间。更多信息请参阅X2。

覆盖着黏液的区域对于所有生物来说都是3，除了寇涛鱼人、具有滑溜特性的其他生物以及会飞的生物。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_273_g1"],encounterIds:["enc_2a6"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[110],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2ab",locationId:"loc_269",name:"X24. 提取室",activation:{condition:{type:"always"},priority:0},skeleton:["一道铁栅门将这个房间与X23隔开，控制升降的杠杆安装在北墙上。","角色们通过铁栅门的栅栏窥视可以看到房间的内容：","在房间中央，一把沾满血迹的雕刻石椅立在一块10尺见方、1尺高的石板上。","铁制手铐固定在椅子的扶手上。","被困在椅子上的是一个处于震慑状态且没有武器的男性卓尔，穿着锁子甲。"],flesh:`一道铁栅门将这个房间与X23隔开，控制升降的杠杆安装在北墙上。角色们通过铁栅门的栅栏窥视可以看到房间的内容：

在房间中央，一把沾满血迹的雕刻石椅立在一块10尺见方、1尺高的石板上。铁制手铐固定在椅子的扶手上。

被困在椅子上的是一个处于震慑状态且没有武器的男性卓尔，穿着锁子甲。他试图挣脱束缚，但没有任何进展。

这个黑暗精灵，Zaibon Kyszalt，在颅港被捕并被带到这里接受审讯。他的上级，Raelyn Auvryndar，也被俘虏并被关押在X7。Zaibon想要解救她并逃到Undermountain，在Auvryndar家族有前哨站的地方。

尼希卢尔 拥有一把能解锁椅子镣铐的钥匙。一个角色可以使用盗贼工具进行一次成功的 DC 15 敏捷检定来解锁每个镣铐，而被束缚在椅子上的生物可以通过一次成功的 DC 25 敏捷（巧手）检定挣脱这些束缚。

灵吸怪通过心灵感应审问了Zaibon，了解到了Auvryndar家族征服Skullport的计划，以及Auvryndar和Freth两个黑暗精灵家族之间日益紧张的关系。灵吸怪正准备在Zaibon的头骨中植入一个噬脑怪，然后利用他来破坏黑暗精灵的计划，并在黑暗精灵家族之间煽动战争。（如果Zaibon不那么有用，灵吸怪会提取他的大脑，将其变成一个噬脑怪。）Zaibon对他即将到来的命运一无所知。

如果Zaibon已经从椅子上解脱，他会尽可能远离灵吸怪及其"宠物"。尼希卢尔不会追击任何逃跑的人，相信他们逃不远。`,spotlightRefs:[],presentNpcIds:["npc_4c4"],availableInfoIds:["info_2ab_g1"],encounterIds:["enc_2ab"],treasureSlotIds:[],eventIds:["evt_2ab_e1"],tone:"tension",_meta:{sourcePages:[110],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果角色们还没有处理尼希卢尔，当他们与Zaibon互动时，灵吸怪会中断他们的行动，从X26进入，手里拿着一个噬脑怪。"},{id:"scn_2af",locationId:"loc_269",name:"X25. 思考的食物",activation:{condition:{type:"always"},priority:0},skeleton:["这个被魔法照亮的房间包含以下特点：","这个房间充满了死亡和屠杀的恶臭。","房间中央，三张木桌角对角摆放，形成一个三角形。","桌子周围的地板上沾满了血迹。","两张桌子上，用皮带固定着两个打扮成无家可归者的人类（平民）。"],flesh:`这个被魔法照亮的房间包含以下特点：

这个房间充满了死亡和屠杀的恶臭。

房间中央，三张木桌角对角摆放，形成一个三角形。桌子周围的地板上沾满了血迹。

两张桌子上，用皮带固定着两个打扮成无家可归者的人类（平民）。一个看起来已经死了，另一个则像疯子一样胡言乱语。第三张桌子上除了一端有一块粘血的区域外，其他部分都是空的。

Xanathar公会捕捉无家可归的Waterdavian市民并将他们带到这里供尼希卢尔食用。灵吸怪吞食他们的大脑后，将他们的尸体交给他的寇涛鱼人奴隶食用。

这两个人，一个名叫Skarn Zarphoul的锁匠和一个名叫Holvan Ebberek的传令员，最近听到了一个矮人的大脑被吸出的声音。Skarn因震惊而处于震慑和精神错乱状态，而Holvan则变成了一个语无伦次的疯子。一个高等复原术法术或类似的魔法可以恢复这两个人的理智。这些人被分别蒙上眼睛带到这里，所以他们对地牢的布局或居住者（除了灵吸怪之外）一无所知。如果他们的理智得到恢复，他们渴望回到深水城的家人身边。`,spotlightRefs:[],presentNpcIds:["npc_4c4"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[111],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2b1",locationId:"loc_269",name:"X26. 吞噬者孵化池",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有以下特点：","在区域中央是一个直径10尺、深2尺的圆形水池，里面充满了发光的绿色盐水。","盐水中游动着四只噬脑怪。","如果尼希卢尔这个夺心魔（见附录 B）在其他地方没有被遇到并击败，它将站在水池中与智力吞噬者一起。","生锈的手铐固定在墙上。"],flesh:`这个房间有以下特点：

在区域中央是一个直径10尺、深2尺的圆形水池，里面充满了发光的绿色盐水。盐水中游动着四只噬脑怪。如果尼希卢尔这个夺心魔（见附录 B）在其他地方没有被遇到并击败，它将站在水池中与智力吞噬者一起。

生锈的手铐固定在墙上。（噬脑怪的宿主被锁链锁在这些位置。）

盐水是一种魔法物质，在侦测魔法法术的检查下会散发出变化魔法的光环。尼希卢尔用它将类人生物的大脑转化为噬脑怪。这个过程远非完美。浸泡在盐水中的大脑中有整整90%会腐烂死亡，而剩下的10%在浸泡1d4 + 1天后会发生转变。

尼希卢尔和噬脑怪在这里进行抵抗。`,spotlightRefs:[],presentNpcIds:["npc_4c4"],availableInfoIds:[],encounterIds:["enc_2b1"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[111],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果角色们逃跑，灵吸怪会派遣噬脑怪追赶他们，而自己留在后面。"},{id:"scn_2b2",locationId:"loc_269",name:"X27. 监狱",activation:{condition:{type:"always"},priority:0},skeleton:["尼希卢尔这个灵吸怪使用这个监狱来关押他的噬脑怪后代的潜在宿主。","被捕获的角色可能会发现自己被关押在这里，直到他们可以被变成宿主。","这个区域包含以下特点：","八扇锁着的铁门通向牢房，其中一些牢房之间有用铁栅栏隔开。","三名寇涛驱策者在这里站岗，攻击任何进入的生物，除了尼希卢尔，包括其他的寇涛鱼人。"],flesh:`尼希卢尔这个灵吸怪使用这个监狱来关押他的噬脑怪后代的潜在宿主。被捕获的角色可能会发现自己被关押在这里，直到他们可以被变成宿主。这个区域包含以下特点：

八扇锁着的铁门通向牢房，其中一些牢房之间有用铁栅栏隔开。

三名寇涛驱策者在这里站岗，攻击任何进入的生物，除了尼希卢尔，包括其他的寇涛鱼人。其中一名鞭持有牢房门钥匙，钥匙挂在一个环上。

一个1尺高的异世界生物雕像坐落在东墙边，两个牢房门之间，覆盖着粘液的雪花石膏基座上。

一个在牢房外的角色可以通过使用盗贼工具进行一次成功的DC 20敏捷检定来撬锁。每个牢房内都有一个散发恶臭的便壶，没有其他家具。

被关押在北墙最西端牢房的是Hyustus Staget，他是城市警卫队的队长，角色们已经见过他（见"警卫到达"）。他在休假时被绑架，没有穿戴盔甲和武器。如果Hyustus因任何原因死亡，请用一位名叫Cressa Galavarco的女性人类警卫官员（守序善良女性Tethyrian 老兵，没有盔甲或武器）来替换他。无论是谁在这里，都注定要成为噬脑怪的对象。

基座上的雕像是用粘土粗略制成的。它有一个锤头鲨的头部，上躯干是一个赤裸上身的男性，肩膀上长着龙翼，本应是腿部的位置有章鱼的触手。寇涛鱼人根据他们想象中的神Garshoogah塑造了它。`,spotlightRefs:[],presentNpcIds:["npc_4c4"],availableInfoIds:[],encounterIds:["enc_2b2"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[111],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2b5",locationId:"loc_269",name:"X28. 公会娱乐大厅",activation:{condition:{type:"always"},priority:0},skeleton:["震耳欲聋的音乐和聊天声充满了这个被魔法照亮的房间，房间装饰得像一家酒馆：","十名人类匪徒们（Xanathar公会的成员）围坐在两张藤桌旁，喝着Wyrmwizz啤酒，抽着烟斗，拍手，跺脚，同时两个地精戴着便桶作为帽子在第三张桌子上跳舞唱歌。","如果他不是和姗娜萨在竞技场(X6)，诺思卡·厄格雷（见附录 B）就在这里，和其他一起喝酒。","东墙边的木架上放着五个大啤酒桶，桶上装有龙头。","从桶上方的天花板突出的是一个幽灵般的眼柄（窥视传感器）。"],flesh:`震耳欲聋的音乐和聊天声充满了这个被魔法照亮的房间，房间装饰得像一家酒馆：

十名人类匪徒们（Xanathar公会的成员）围坐在两张藤桌旁，喝着Wyrmwizz啤酒，抽着烟斗，拍手，跺脚，同时两个地精戴着便桶作为帽子在第三张桌子上跳舞唱歌。

如果他不是和姗娜萨在竞技场(X6)，诺思卡·厄格雷（见附录 B）就在这里，和其他一起喝酒。

东墙边的木架上放着五个大啤酒桶，桶上装有龙头。从桶上方的天花板突出的是一个幽灵般的眼柄（窥视传感器）。

这些恶棍正在庆祝捉到了一名休假中的城邦护卫队长（见X27）。偷听他们谈话的角色会听到一个公会成员说，"我们抓到了一个警卫队长！阿莫戈说老板比粉色的呋噜还要高兴，不管那是什么。今天，免费啤酒！明天，金和荣耀！"这个宣言之后是响亮的欢呼声。

地精Lulz和Vellix是服务员，他们让自己沉浸在这种狂欢中。如果发生战斗，他们会躲在桌子下面，如果角色们获胜，他们会向队伍求饶。

这个幽灵般的眼柄是一个魔法传感器，允许X16中的一位学徒法师监视这个房间。更多信息请参阅X2。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4c9","npc_495"],availableInfoIds:["info_273_g1"],encounterIds:["enc_2b5"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[111],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2b9",locationId:"loc_269",name:"X29. 活板门",activation:{condition:{type:"always"},priority:0},skeleton:["活板门通向上面的 X18。"],flesh:"楼梯顶部是一个平台，上面有一个梯子通向一块石制活板门，需要成功通过一个 DC 12 力量（运动）检定才能将其抬起。活板门通向上面的 X18。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_29a_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[112],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2ba",locationId:"loc_269",name:"X30. Xanathar的美食厨房",activation:{condition:{type:"always"},priority:0},skeleton:["从这个厨房飘来一股令人愉悦的香气，混合着稀有香料、美味肉类和新鲜香草的香味。","房间包含以下特点：","七个戴着白色厨师帽的狗头人在结实的餐桌间穿梭，疯狂地为姗娜萨准备餐点，并将食物摆放在银盘子上。","两只由姗娜萨梦境创造的凝视者眼魔（见附录 B）监督着狗头人，并使用它们的念力射线举起并传递食物托盘。","两个铁炉子靠在东墙上，它们之间放着一个细长的调料架。"],flesh:`从这个厨房飘来一股令人愉悦的香气，混合着稀有香料、美味肉类和新鲜香草的香味。房间包含以下特点：

七个戴着白色厨师帽的狗头人在结实的餐桌间穿梭，疯狂地为姗娜萨准备餐点，并将食物摆放在银盘子上。

两只由姗娜萨梦境创造的凝视者眼魔（见附录 B）监督着狗头人，并使用它们的念力射线举起并传递食物托盘。

两个铁炉子靠在东墙上，它们之间放着一个细长的调料架。

在饮食方面，姗娜萨更喜欢最优质的剑海岸美食，包括丰富的蘑菇饮食，而不是生肉。这里准备的所有餐点都是仅供姗娜萨独自享用的。

凝视兽在看到入侵者时会发起攻击，而狗头人则会寻找最简便的路线逃跑。

这个架子上放着三十瓶珍贵的香料，每瓶价值10金币。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4b4"],availableInfoIds:[],encounterIds:["enc_2ba"],treasureSlotIds:["trs_2ba_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[112],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2bc",locationId:"loc_269",name:"X31. 另一个厨房",activation:{condition:{type:"always"},priority:0},skeleton:["黑色的烟雾伴随着烧焦的肉和面包的恶臭沿着走廊蔓延。","这个通过魔法照明的厨房有以下特点：","一个面容憔悴的男性半身人正疯狂地试图同时烹饪肉品、揉面团、炖酱和混合香料。","一个铁炉子靠在南墙上，烹饪用具挂在半身人够不着的挂钩上。","当这个半身人注意到角色们时，他的脸上露出了宽慰的微笑。"],flesh:`黑色的烟雾伴随着烧焦的肉和面包的恶臭沿着走廊蔓延。这个通过魔法照明的厨房有以下特点：

一个面容憔悴的男性半身人正疯狂地试图同时烹饪肉品、揉面团、炖酱和混合香料。

一个铁炉子靠在南墙上，烹饪用具挂在半身人够不着的挂钩上。

当这个半身人注意到角色们时，他的脸上露出了宽慰的微笑。"终于！"他兴奋地说。"我已经有半十天没有休息了。确保你们每五分钟搅拌一次酱汁。"然后他把围裙递给角色们，误以为他们是真正的厨房员工。

贝皮斯·蜜酿师 是一名蜂蜜商人，一个月前从贸易区的家中被绑架。散塔林会曾试图将其赎回，但显然他的亲属要么无力支付，要么决定放弃。（事实上，他那恶毒的姻亲撕毁了赎金信，并告诉贝皮斯的妻儿他与其他家族私奔了。）阿莫戈 让他担任厨师工作，但时常威胁要把他交给夺心魔尼希卢尔。

Bepis是一个勇敢的半身人普通人，有以下变化：

Bepis是守序善良。

他是小型生物，拥有 3 (1d6) 点生命值。

他有以下种族特性：他的步行速度是每小时25尺。他可以通过中等大小或更大的生物的空间移动。他在对抗恐慌状态的豁免检定中具有优势。他能说通用语和半身人语。`,spotlightRefs:[],presentNpcIds:["npc_495","npc_4c4"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[112],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2be",locationId:"loc_269",name:"X32. 楼梯和侦视感应器",activation:{condition:{type:"always"},priority:0},skeleton:["一段螺旋楼梯通向X22，一个幽灵般的眼柄从走廊天花板上长出。","这个眼柄是一个魔法感应器，允许X16中的一名学徒法师监视这个走廊（更多信息见X2）。"],flesh:"一段螺旋楼梯通向X22，一个幽灵般的眼柄从走廊天花板上长出。这个眼柄是一个魔法感应器，允许X16中的一名学徒法师监视这个走廊（更多信息见X2）。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_273_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[112],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2bf",locationId:"loc_269",name:"X33. Xanathar先辈的墓穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","四个死去的眼魔被悬挂在从地板到天花板的水晶圆柱中，保存在防腐液里。","魔法灯光从圆柱内部照亮它们。","九个浅凹处的墙上绘有眼魔的壁画。","每个凹处都有一个铜瓮，形状像眼魔，放在绿色大理石基座上。"],flesh:`这个房间包含以下特点：

四个死去的眼魔被悬挂在从地板到天花板的水晶圆柱中，保存在防腐液里。魔法灯光从圆柱内部照亮它们。

九个浅凹处的墙上绘有眼魔的壁画。每个凹处都有一个铜瓮，形状像眼魔，放在绿色大理石基座上。每个瓮的盖子上都铸有十个眼柄。（在北墙最西端凹处的后面有一扇秘密门。）

西墙雕刻着一个怒视的巨眼魔，两侧各有一个戴着兜帽的法师。在每个法师的兜帽下，可以看到一只瞪视的眼睛。

姗娜萨（见附录 B），如果它在场，正凝重地凝视着过去Xanathar的坟墓。

这些铜制骨灰盒内装有解体后的巨眼魔的灰烬。如果将骨灰盒中的灰烬倒出，它会在几秒钟内凝聚成模糊的漂浮巨眼魔形状，发出咆哮声，然后失去凝聚力，落到地面上。

每个水晶柱子的AC为10，有15点生命值，对挥砍和穿刺伤害有抗性，对钝击伤害有弱点。如果柱子被砸碎，里面的液体会随着死亡的巨眼触手怪落地时发出湿哒哒的声音而流到地板上，同时释放出1d4个幼年气孢菌，这些孢子在30天内长到成年大小。任何被这些瓦斯孢子感染的角色在疾病治愈之前都会获得以下缺陷：'我讨厌其他巨眼触手怪。如果我看到一个巨眼触手怪，我必须尝试摧毁它。'

通过成功的 DC 15 感知（察觉）检定可以发现这个密门。拉开后可以看到后面的 X6。

任何研究西墙雕刻并通过 DC 12 感知（感知）检定的角色会注意到每个法师的眼睛都是一个可以按下的按钮。如果射线击中，角色看起来像是被瓦解，但实际上被传送到 X34a 或 X34b，具体取决于按下的是哪个按钮。一旦按钮被按下，它会锁定1小时，在此期间无法再次按下。角色可以通过成功的 DC 20 敏捷检定使用盗贼工具强行重置按钮。`,spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:["info_27a_g1","info_2bf_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_2bf_e1"],tone:"tension",_meta:{sourcePages:[112],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果角色按下任一按钮，或使用物品或法术来按下按钮，墙上的眼魔雕刻会释放一道绿色射线，角色可以通过成功的 DC 16 敏捷豁免来躲避。"},{id:"scn_2c4",locationId:"loc_269",name:"X34. 法师墓穴",activation:{condition:{type:"event_fired",eventId:"evt_2bf_e1"},priority:10},skeleton:["这些墓穴是为了安放两位法师的遗骸而建造的，这两位法师在姗娜萨接管这个地下城之前就已经生活在这里了。","然而，这里只安葬了一位法师。","另一位法师的命运未知。","两个墓室都被坚固的石头所包围，并且由施放在墙壁壁灯上的不灭明焰法术照亮。","这个墓室中央安放着一个黄金大理石制成的石棺，其盖子上雕刻着一位长发人类法师的形象，他身穿一件装饰有闭眼图案的长袍。"],flesh:`这些墓穴是为了安放两位法师的遗骸而建造的，这两位法师在姗娜萨接管这个地下城之前就已经生活在这里了。然而，这里只安葬了一位法师。另一位法师的命运未知。两个墓室都被坚固的石头所包围，并且由施放在墙壁壁灯上的不灭明焰法术照亮。

这个墓室中央安放着一个黄金大理石制成的石棺，其盖子上雕刻着一位长发人类法师的形象，他身穿一件装饰有闭眼图案的长袍。石棺无法撬开或损坏，但如果在墓室内施放法术，长袍上的眼睛会同时睁开——这是一个诡异但无害的效果——盖子缓缓升空，露出石棺的内容：一个干瘪的、无生命的木乃伊，戴着魅惑镜片。1分钟后，盖子上的眼睛闭合，盖子缓缓下沉，重新封闭石棺，直到墓室内再次施放法术。

一个角色戴上 魅惑镜片 后，可以通过其蓝色镜片看到西墙上有一个形状像四角星的蓝色金属瓦片。该瓦片在其他情况下是看不见的，但可以通过触觉搜索和一次成功的 DC 17 感知检定找到。当一个生物触摸到瓦片时，墓穴中的所有生物会立即被传送到竞技场 (X6)。

这个墓室除了西墙上的一个不可见的蓝色金属瓦片外，是空的。它的功能与X34a中的瓦片完全相同。`,spotlightRefs:[],presentNpcIds:["npc_4e2"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_2c4_e1"],tone:"exploration",_meta:{sourcePages:[113],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"}},{id:"scn_2c7",locationId:"loc_269",name:"X35. 纳尔·希布林达斯的办公室",activation:{condition:{type:"always"},priority:0},skeleton:["曾经照亮这个房间的不灭明焰法术已经被解除。","角色需要光源或暗视能力才能在这里看清东西。","房间包含以下特征：","两个打开的箱子靠在北墙上。","西南角的一张石制书桌上没有任何纸张。"],flesh:`曾经照亮这个房间的不灭明焰法术已经被解除。角色需要光源或暗视能力才能在这里看清东西。房间包含以下特征：

两个打开的箱子靠在北墙上。

西南角的一张石制书桌上没有任何纸张。后面的椅子上雕刻有蜘蛛图案。

东墙上立着空荡荡的石制书架。

一个箱子里装有五十个填充的巨眼魔玩偶。另一个箱子里装有三十个黑曜石奖杯（每个价值25金币），上面雕刻着一个被手抚摸的笑脸巨眼魔。这些玩偶和奖杯是姗娜萨的格斗锦标赛获胜者获得的奖品之一。

办公桌后的椅子在左侧扶手下方有一个秘密隔间，可以通过一个成功的 DC 15 感知（察觉）检定找到并打开。这个小小的隔间里有一把黑色小钥匙，可以打开办公桌的两个抽屉。角色可以通过一次成功的 DC 17 敏捷检定使用盗贼工具来开锁。

第一个抽屉里放着纳尔的法术书，一本结实的黑皮书，用蛛网包裹着。它包含了纳尔准备的所有法术，还有短讯术法术。

第二个抽屉里有一个属于贾拉索·班瑞的次元袋。纳尔借用了这个魔法物品，并用它将桶装的发烟粉偷运进姗娜萨的巢穴（见X36）。

这个房间东南角的一个石制书架旋转进入墙壁，露出了一条向北弯曲的秘密通道。角色可以通过一次成功的 DC 15 感知（觉察）检定发现这扇秘密门，或者直接推动书架也可以。

弯曲走廊尽头的第二个秘密门无需属性检定就可以找到；拉开它，就会揭示一个黑暗且布满灰尘的房间（X36）。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4b9"],availableInfoIds:["info_2c7_g1","info_2c7_g2","info_2cb_g1"],encounterIds:[],treasureSlotIds:["trs_2c7_0","trs_2c7_1"],eventIds:[],tone:"exploration",_meta:{sourcePages:[113],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2cb",locationId:"loc_269",name:"X36. 秘密房间",activation:{condition:{type:"info_revealed",infoId:"info_2c7_g2"},priority:10},skeleton:["这个房间有以下特点：","这个房间没有照明，充满了灰尘和蜘蛛网。","二十桶烟雾粉整齐地堆放在房间中央。",'每个桶上都有一个纸标签，上面用通用语和精灵语写着"{@b 烟雾粉！',"姗娜萨及其忠诚的下属都不知道这个房间的存在。"],flesh:`这个房间有以下特点：

这个房间没有照明，充满了灰尘和蜘蛛网。

二十桶烟雾粉整齐地堆放在房间中央。每个桶上都有一个纸标签，上面用通用语和精灵语写着"{@b 烟雾粉！不要打开！}"。

姗娜萨及其忠诚的下属都不知道这个房间的存在。当纳尔发现它时，他请求将相邻的房间（X35）变成他的办公室，以便他能保守这个房间的秘密。唯一知道这个房间的另一个人是索文·双须，姗娜萨的首席工程师，但他并不想告诉巨眼魔这件事。

每个桶都配有一根导火线，并且装有5磅的发烟粉（见附录A）。要摧毁姗娜萨的巢穴，至少需要在每个弱点放置两个桶（见"摧毁巢穴"）。`,spotlightRefs:[],presentNpcIds:["npc_4e2","npc_4d7"],availableInfoIds:["info_2cb_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[113],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"},mapGeometry:{imageRef:"adventure/WDH/Smokepowder.webp"}},{id:"scn_2d5",locationId:"loc_2d5",name:"地狱般的夏天",activation:{condition:{type:"always"},priority:0},skeleton:["维克托罗和阿玛利亚·卡萨兰特与九层地狱之王阿斯蒙蒂斯达成了一笔交易。","三年前，他们为了逃避财务破产，将自己的孩子们的灵魂交易了出去。","他们的长子奥斯瓦尔多的灵魂立即被带走。","留下的部分被转变成了一个锁链恶魔，卡萨兰特家族将其囚禁在他们的阁楼里。","他们的两个最小的孩子，特伦齐奥和埃尔泽丽娜，在创立者节后的仅仅十天，也就是庆祝深水城建立的仲夏节日时，他们九岁生日时注定要失去他们的灵魂。"],flesh:`维克托罗和阿玛利亚·卡萨兰特与九层地狱之王阿斯蒙蒂斯达成了一笔交易。三年前，他们为了逃避财务破产，将自己的孩子们的灵魂交易了出去。他们的长子奥斯瓦尔多的灵魂立即被带走。留下的部分被转变成了一个锁链恶魔，卡萨兰特家族将其囚禁在他们的阁楼里。他们的两个最小的孩子，特伦齐奥和埃尔泽丽娜，在创立者节后的仅仅十天，也就是庆祝深水城建立的仲夏节日时，他们九岁生日时注定要失去他们的灵魂。

交易达成后，卡萨兰特家族奇迹般地东山再起。他们的银行和放贷业务蓬勃发展，而他们的竞争对手却遭受了损失。他们长子（也是继承人）的失踪为他们赢得了同情。他们的慈善事业为他们赢得了合法性和新朋友。他们很快成为了水深贵族羡慕的对象。看似受到祝福的卡萨兰特家族吸引了新信徒加入他们崇拜恶魔的邪教，这正是阿斯蒙蒂斯一直以来的计划。

违背与阿斯蒙蒂斯的契约是凡人无法承担的奢侈，但卡萨兰特勋爵和夫人有办法拯救特伦齐奥和埃尔泽丽娜的灵魂。契约中有一个条款允许他们通过支付"不足一百万金币，以及不足一百个不幸灵魂的牺牲"来保留他们剩余的（和未来的）孩子的生命。卡萨兰特家族已经拥有他们所需的大部分金币，但他们需要来自龙之金库的黄金来购买他们孩子的救赎，而不会让自己破产。

维克托罗负责定位龙之金库并确保其中的黄金。阿姆玛利亚则计划在创立者节举办一场宴会，通过提供中毒食物一举牺牲九十九个灵魂。这些灵魂和黄金必须同时支付给阿斯蒙蒂斯。破坏这两个计划中的任何一个都意味着卡萨兰特家族的阴谋和他们最小的孩子的厄运。

如果卡萨兰特家族未能获得格洛尔之石，以下事件就不会发生。因此，特伦齐奥和埃尔泽里娜在创始人节后十天，他们的灵魂被没收，变成了劣魔们。维克托和阿玛利亚·卡萨兰特因失败和失去亲人而心碎，发誓要摧毁那些阻挠他们的人。

这个事件只能在创始人节或更早的时间发生。

这个事件只能在创始人节或更早的时间发生。持有格洛尔之石和解锁龙之金库的钥匙，维克托罗·卡萨兰特进入金库，使用一个en=Disguise Self法术将自己伪装成达格特·奈弗伯爵，并欺骗奥瑞纳克斯这条金龙放弃金子。一打卡萨兰特家族的警卫们伪装成城市守卫的成员，将金子塞进麻袋，而另外一打则将麻袋运送到两辆等待的马车上，安全地运回卡萨兰特别墅。每个麻袋装有1,000金币，每辆马车一次可以装载五十个麻袋（50,000金币）。从龙之金库将金子运送到卡萨兰特别墅需要十次往返（每辆马车五次），并且需要大半天的时间。每辆马车由三个隐形的小魔鬼陪同，由戴着帽子和高领斗篷以掩盖其真实身份的须魔驾驶。到达卡萨兰特别墅后，每辆马车都由一打穿着卡萨兰特家族制服的警卫们迎接，他们卸载金子的麻袋并将它们放置在C29。

这个事件只有在卡萨兰特家族从龙之金库获得金子时才会发生。

阿玛利亚·卡萨兰特在创始人节举办了一场盛大的派对，从午后开始，一直持续到午夜。富有的宾客在下午晚些时候开始抵达，聚集在别墅内，远离阳光和炎热，而来自深水城最贫穷的一百名居民——大多数是从田野区带来的——聚集在草坪上搭建的帐篷下。雇佣的演员装扮成深水城的创始人游行，吟游诗人演奏活泼的旋律。没有人怀疑帐篷里的食物被掺入了午夜之泪——一种毒药，将在午夜钟声敲响时杀死贫穷的宾客。Ammalia对毒药免疫，因此可以自由地享用美味的食物。留在卡萨兰特别墅内的富有宾客在单独的桌子上吃喝，避免了悲惨的结局。

在午夜前一个小时，表演者们散去，因为Ammalia开始向她的富有宾客敬酒，通过他们的存在将他们变成不知情的共犯，从而确保他们的沉默。与此同时，家卫阻止任何暴民离开，强行拘留任何试图逃跑的人。除非角色们阻止穷人吃下被污染的食物，否则那些与会者会摄入毒药，并在午夜钟声敲响时丧生。

当Ammalia担任主人时，Victoro指示他的邪教徒从卡萨兰特家族的金库(C29)中移走金袋，并将它们投入祭祀碗中(A7)。他们在午夜前不久完成。随着午夜钟声的敲响，毒药开始发挥作用，Ammalia监视着她的富有宾客，并命令Tessina Khyret通知Victoro事情已经完成。站在神庙中阿斯蒙蒂斯的雕像前，Victoro召唤了一个猬魔，并告知它已全额支付。恶魔（用地狱语）宣布支付是"令人满意"的，并告知Victoro特伦齐奥和埃尔泽里娜的灵魂不会被带到九层地狱。然后它消失在它来的地方，留下卡萨兰特家族沉浸在他们的成功中。

派对结束后，在凌晨的黑暗时刻，死者的尸体被投入A7的火盆中，没有留下任何犯罪的痕迹。在随后的几天和几个月里，Victoro和Ammalia利用恶魔报复的威胁来封口证人，并利用他们的政治影响力来压制刑事调查。`,spotlightRefs:[],presentNpcIds:["npc_496","npc_4dc","npc_498"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[115],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},mapGeometry:{imageRef:"adventure/WDH/ChapterSix.webp"},dmGuidance:"本章两条阴谋线并行推进：维克托罗负责定位龙之金库并把黄金搬回别墅（每袋1000金币、两辆马车各载50袋、十趟往返耗去大半天，卸在 C29 秘密金库 scn_330）；阿玛利亚负责在创始人日宴会上用「午夜之泪」毒死草坪帐篷下的九十九名贫民。两笔账必须同时付给阿斯蒙蒂斯，破坏其中任何一笔，整个阴谋与双胞胎的性命就一起完蛋。角色通常是在追查格洛尔之石或龙之金库的过程中摸到卡萨兰特别墅（scn_2e4），从入口大厅（scn_2ee）进屋后自由探索各房间；线索链的骨架是：维克托的办公室与阅览室（scn_2fa / scn_2f6 的日记）→ 酒窖南墙密门（scn_32e）→ 秘密金库（scn_330）→ 楼梯下到阿斯蒙蒂斯神庙（scn_332 / scn_335 / scn_345）。三条书面的干扰路径：破坏或偷走 C22（scn_31f）的午夜之泪、用瓦解之锤（藏于 A4a 卡拉多恩石棺）砸毁 A7（scn_345）的阿斯蒙蒂斯雕像、阻止他们拿到奈瓦瑞伯爵的黄金。切忌把正面开战当默认解法：直接对抗卡萨兰特夫妇多半以角色失败、或以袭击贵族被捕收场，夫妇二人也并不想杀死角色，只想制服他们。本章的黄金去向把线索交回主线 qst_main_dragonheist。"},{id:"scn_2d6",locationId:"loc_2d5",name:"阿斯蒙蒂斯教派",activation:{condition:{type:"always"},priority:0},skeleton:["Cassalanter勋爵和夫人是阿斯蒙蒂斯隐秘崇拜团的首领。","这个崇拜团每十天的午夜在Cassalanter别墅下的阿斯蒙蒂斯神庙举行集会。","在崇拜仪式中，包括Cassalanter勋爵和夫人在内的崇拜团成员，穿着深红色的长袍，戴着金色的面具，手持金色的祭祀匕首。","单是黄金，面具和匕首每个就值75金币。","卡萨兰特家族的每个成员在房子的不同部分放松，并对发现角色闯入他们家中的行为作出不同的反应。"],flesh:`Cassalanter勋爵和夫人是阿斯蒙蒂斯隐秘崇拜团的首领。这个崇拜团每十天的午夜在Cassalanter别墅下的阿斯蒙蒂斯神庙举行集会。在崇拜仪式中，包括Cassalanter勋爵和夫人在内的崇拜团成员，穿着深红色的长袍，戴着金色的面具，手持金色的祭祀匕首。单是黄金，面具和匕首每个就值75金币。

卡萨兰特家族的每个成员在房子的不同部分放松，并对发现角色闯入他们家中的行为作出不同的反应。卡萨兰特勋爵和夫人经常因业务外出，尤其是随着创立者节的临近；他们在晚餐前一小时回家。

Cassalanter夫人对不速之客的出现感到惊讶，但她很快用一个热情的微笑掩饰了自己的感情。她试图通过假装相信他们是Victoro的客人，并表示她只是没有被告知他们的到来，来赢得入侵者的信任。一旦建立了这个假设，她就试图了解角色们真正的意图，必要时利用5环法术位施展魅惑类人法术（影响30尺内多达五个生物）。以这种方式使用魔法是违法的，但Ammalia在深水城有很多良好的社会关系——足以赢得一位地方法官的青睐。

在阿米莉亚在家且醒着的时候，她在别墅中的位置可以通过随机方式确定：

维克托罗·卡萨兰特对不请自来的客人的出现反应激烈，充满愤怒。他要求知道他们的名字，并叫管家Willifort Crowelle送他们出去。如果他有机会，他会巧妙地对其中一个角色施放支配类人法术，使用8级的法术位（将其持续时间延长至8小时）在他们的队伍中安插一个间谍。一旦入侵者离开，他就回到自己的办公室（C6），并使用他的行动完全控制被支配的角色。被支配的角色向城市守卫报告说，这个队伍闯入了卡萨兰特别墅，必须因他们的罪行被逮捕。

在维克托罗在家且醒着的时候，他在别墅中的位置可以通过随机方式确定：

卡萨兰特家的双胞胎并不是他们父母邪教组织的成员，而且他们没有其他朋友，因为他们接受的是家庭教育，很少被允许离开庄园。在陌生人面前，特伦齐奥变得多疑和胆怯，而埃尔泽丽娜则显得鲁莽和外向。两个孩子都非常兴奋地遇到友好的陌生人，并带他们的"新朋友"参观房子。他们帮助角色们在别墅中潜行，因为孩子们知道他们不应该有客人。

在孩子们醒着的时候，他们在别墅中的位置可以通过随机方式确定：

特伦齐奥和埃尔泽丽娜在房子里有父母禁止他们去的地方——现在有了朋友的陪伴，他们很兴奋地想要探索这些地方。这些地点如下：

他们父亲的办公室（C6）

阁楼（C24）

酒窖区域（C28）

如果被问及他们的父母，特伦齐奥和埃尔泽丽娜会报告说他们的父母正在寻找一些失踪的龙。（他们的父母打算用一群可怕、有翅膀的爬行动物做什么，这对他们来说是难以理解的，特伦齐奥和埃尔泽丽娜也太害怕而不敢问。）如果成为了朋友，他们会透露他们的父亲在他的办公室（C6）里放着一本日记。

如果被问及他们的哥哥奥斯瓦尔多，特伦齐奥和埃尔泽丽娜会重复父母告诉他们的话：他在一个遥远的城市上学（他们不记得是哪一个）。两人都不知道奥斯瓦尔多遭遇了怎样残酷的命运（见C24），也不怀疑类似的命运正等待着他们。

卡萨兰特别墅的主要仆人是邪教组织的成员。这四位仆人的描述如下。他们看起来都是提夫林人，尽管其中一位并不是。

这些提夫林人是守序邪恶的。

他们具有以下种族特征：他们知道戏法系的魔法，魅力是他们施放这个法术的能力。他们对火焰伤害有抗性。他们具有60尺范围内的黑暗视觉。他们说通用语和地狱语。

Willifort穿着一套锋利的黑色西装，戴着细框眼镜。他是一个变形怪，通常以一个年长的男性提夫林的形象出现，并在入口大厅（C1）迎接所有客人。

作为卡萨兰特家族的首席管家和维克托勋爵的个人侍从，Willifort Crowelle特别注重了解别墅内发生的每一件事情。如果卡萨兰特家族有客人，他会在客人整个访问期间陪同他们，必要时使用隐秘手段。他会把好奇的客人从可能将卡萨兰特家族与崇拜阿斯蒙蒂斯的邪教联系起来的区域或物品引导开。

Madame Khyret是阿玛利亚·卡萨兰特的个人侍从，也是这个家庭的首席女仆。

Khyret夫人穿着一件长长的黑色礼服，戴着带有黑色流苏的头饰。她是一位年迈的提夫灵邪教狂信者，她大部分时间都待在主人的客厅(C19)。

莱巴·罗斯，更广为人知的名字是'娜娜'，是特伦齐奥和埃尔泽丽娜的看护人和私人教师，她尽自己最大的努力来跟踪他们的每一个行动。即便如此，这两个孩子经常从她的警惕目光中溜走。

娜娜穿着飘逸的红色长袍。她是一位女性提夫灵邪教狂信者，当她不和孩子们在一起时，她会在双胞胎的游乐室(C17)中放松。

作为卡萨兰特别墅的主厨，詹达尔决定每天的菜单并监督厨房里的所有活动。

詹达尔是一位男性提夫灵邪教狂信者。他经常在厨房(C10)。`,spotlightRefs:[],presentNpcIds:["npc_4dc","npc_496"],availableInfoIds:["info_2d6_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[115],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`【卡萨兰特家族传说】进行一次成功的 DC 15 智力（历史）检定将揭示以下关于卡萨兰特庄园及其居民的信息：
几年前，卡萨兰特家族遭遇了困难时期，但从那时起他们扭转了命运，恢复了他们有利可图的银行和放贷业务。
维克托罗和阿米莉亚的长子在三年前家族濒临破产时消失了。他们还有两个存活下来的孩子，是一对名叫特伦齐奥和埃尔泽丽娜的年幼双胞胎。
勋爵维克托罗·卡萨兰特是已故卡拉多恩·卡萨兰特唯一的在世继承人，卡拉多恩曾是蒙面领主，也是北方的英雄。
多年来，卡萨兰特家族创立了多个慈善社团，并向致力于善良阵营神祇的神庙慷慨捐赠。他们以崇拜Siamorphe而闻名，Siamorphe是一位半神，其理念是贵族统治的权利和责任。
以下更改适用于提夫林人的统计数据块：`,randomTableIds:["tbl_2d6_0","tbl_2d6_1","tbl_2d6_2"],mapGeometry:{imageRef:"adventure/WDH/Cassalanters.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_2e1",locationId:"loc_2d5",name:"面对卡萨兰特家族",activation:{condition:{type:"always"},priority:0},skeleton:["卡萨兰特勋爵和夫人是强大的施法者，并且彼此深爱。","如果其中一人在卡萨兰特别墅内受到攻击，另一人会尽可能快地赶到。","与卡萨兰特家族的直接对抗很可能会导致角色们的失败，或者——如果角色们和卡萨兰特家族都能幸存下来——因为攻击贵族而被逮捕。","卡萨兰特家族并不想杀死角色们，即使是出于自卫。","他们非常小心地使用魔法来分散和制服队伍，同时不造成严重伤害。"],flesh:`卡萨兰特勋爵和夫人是强大的施法者，并且彼此深爱。如果其中一人在卡萨兰特别墅内受到攻击，另一人会尽可能快地赶到。

与卡萨兰特家族的直接对抗很可能会导致角色们的失败，或者——如果角色们和卡萨兰特家族都能幸存下来——因为攻击贵族而被逮捕。卡萨兰特家族并不想杀死角色们，即使是出于自卫。他们非常小心地使用魔法来分散和制服队伍，同时不造成严重伤害。

如果维克托或阿玛莉亚的命中点数减少到30点或更少，而另一位卡萨兰特不在场，他们会尝试与攻击者谈判或贿赂。

卡萨兰特家族并不害怕被逮捕，因为他们相信他们的财富、声誉和人脉可以让他们免于入狱。他们真正害怕的是创始日的倒计时。他们恳求角色们允许他们执行他们的计划，哪怕只是为了救特伦齐奥和埃尔泽丽娜的命。

杀害或伤害卡萨兰特家族成员将带来严重的法律后果，但角色们可以通过破坏或偷走阿玛莉亚存放的午夜之泪毒药(C22)，破坏神庙中的阿斯蒙蒂斯雕像(A7)，或者阻止他们得到洛德·纳弗莫伯爵的黄金来阻碍卡萨兰特家族。

如果卡萨兰特家族是主要反派，角色们可能会在寻找格洛尔之石或龙之金库的过程中来到他们的别墅。维克托罗·卡萨兰特将与他自己寻找石头和龙之金库相关的信息保存在他的办公室(C6)。`,spotlightRefs:[],presentNpcIds:["npc_4dc"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[117],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:"如果角色们将阿玛莉亚的命中点数减少到30点或更少，而维克托在她身边，他会在继续战斗的同时，将她传送到安全的地方短暂躲避。"},{id:"scn_2e4",locationId:"loc_2e4",name:"卡萨兰特别墅",activation:{condition:{type:"always"},priority:100},skeleton:["卡萨兰特别墅的洁白墙壁和闪耀的深红色屋顶及塔楼，即使在海防区其他豪华庄园中也格外显眼。","一栋三层的豪宅坐落在风景如画的绿色花园中，花园里点缀着树篱和水景。","庄园被一堵高高的白色砖墙所环绕，唯一的入口是一座锻铁大门。","卡萨兰特家族的徽章——一个绿色的Y字重叠在一只被喂食的鹅的图案上——被镶嵌在大门上，两旁站着全副武装的守卫。","卡萨兰特别墅是一座奢华的豪宅，拥有数十个豪华的房间供房屋的主人和他们的客人使用——但它的辉煌掩盖了它所持有的可怕秘密。"],flesh:`卡萨兰特别墅是一座奢华的豪宅，拥有数十个豪华的房间供房屋的主人和他们的客人使用——但它的辉煌掩盖了它所持有的可怕秘密。曾经位于庄园下方的希亚莫菲神庙已经被维克托和阿玛莉亚的恶魔崇拜所亵渎。现在，这座宏伟的礼拜堂奉献给了九层地狱之主。

卡萨兰特家族的庄园由雇佣的警卫们巡逻。其中两个站在庄园大门外，另外两个站在房子的前门外，任何时候都有六名守卫在庄园内巡逻。这些守卫是人类，他们穿着带有卡萨兰特家族徽章的制服。

房子周围是一片精心修剪的草坪。一条鹅卵石小径从庄园的外门通向正门入口(C1)和马车房入口(area CH1)。别墅的场地上有许多落叶树和精心照料的花园。

试图潜入卡萨兰特别墅的角色更有可能被逮捕而不是被杀死。卡萨兰特别墅周围的安保细节旨在发出警报并阻止小贼，而不是阻止决心冒险的探险者。如果守卫发现入侵者，他们会做明智的事情：呼叫当局。

城市警卫在海防区的几乎每个街角都设有小型单人"观察箱"，包括卡萨兰特别墅大门外的十字路口。如果守卫发出警报，值班的警卫成员会召集一支由四十名城市警卫老兵组成的队伍来封锁该物业。

如果城市守卫介入，卡萨兰特勋爵和夫人会担心有人识破了他们的阴谋。巡逻庭院的守卫数量会翻倍，而维克托罗会将屋内所有人类守卫撤换。每当在室内区域提到守卫时，那名守卫现在是一个伪装成人类的须魔。伪装的魔鬼看起来像是一个穿着家徽制服的肌肉发达的胡须男子。如果一个生物近距离观察它，并通过一次成功的DC 15 感知（察觉）检定，可以注意到它的"胡须"在蠕动。

卡萨兰特别墅除了卡萨兰特勋爵和夫人、他们的孩子、私人侍从和守卫外，没有其他人居住。所有在别墅工作的其他仆人住在码头区或田野区阴暗的家中，并在清晨穿越城市，以便在卡萨兰特家族醒来之前到达。

除了他们的私人侍从外，卡萨兰特家族定期补充他们的仆人。大多数仆人会转到其他工作，但偶尔有仆人会发现秘密金库(C29)，访问禁止的阁楼(C24)，或以其他方式了解到太多。这样的人们注定要成为阿斯蒙蒂斯的祭品。

别墅内发现以下特点：

房间的天花板高25尺，走廊和连接它们的门道高7尺。

门由异域硬木制成。如果门被锁上，可以使用盗贼工具并通过敏捷鉴定成功（DC 15）的角色来开锁，或者通过力量（运动）鉴定成功（DC 20）的角色来强行打开。维克托罗、阿玛莉亚和管家威利福特持有这栋房子里每个房间的钥匙。

地板由木材制成，并铺有柔软的羊毛地毯。在铺有地毯的房间里行走的生物在敏捷（隐匿）检定上有优势。

所有区域都由油灯、灯笼或吊灯提供良好的照明。

卡萨兰特家族在他们的房子里不存放任何银器（硬币除外），因为银对恶魔是有害的。

以下区域对应于地图6.1上的标签。别墅通过一个秘密门在C28与阿斯蒙蒂斯神庙相连。

如果创始人日派对期间某个地点的居住者或特征发生变化，文本中将包含一个"创始人日"部分，描述这些变化。

卡萨兰特家族在这座庄严的客房中招待客人。

卡萨兰特家族拥有三辆马车——一辆用于他们的银行业务，一辆用于公共场合露面，一辆用于私人使用。他们还拥有六匹马：四匹矮种马用来拉马车，两匹乘用马。这些马被养在马厩里，每天黎明前都会被打扫干净。马具、马勒、饲料以及其他马匹必需品也存放在马车房里。

这个房间里存放着被黑色亚麻布覆盖的废弃家具：椅子、衣帽架、独立式镜子、服装模特等。这些被覆盖的物品在昏暗中显得阴森，但实际上是无害的。

这个阳台俯瞰着卡萨兰特庄园的地面，甚至可以看到海墙外的剑海。

如果阿玛利亚·卡萨兰特（见附录 B）在这里，她正在吸烟，要么忧郁地凝视着海洋，要么看着下面的花园中她的孩子（C25）。`,spotlightRefs:[],presentNpcIds:["npc_496"],availableInfoIds:["info_2d6_g1","info_2e4_g1"],encounterIds:["enc_2e4"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[117],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"},readAloud:"卡萨兰特别墅的洁白墙壁和闪耀的深红色屋顶及塔楼，即使在海防区其他豪华庄园中也格外显眼。一栋三层的豪宅坐落在风景如画的绿色花园中，花园里点缀着树篱和水景。庄园被一堵高高的白色砖墙所环绕，唯一的入口是一座锻铁大门。卡萨兰特家族的徽章——一个绿色的Y字重叠在一只被喂食的鹅的图案上——被镶嵌在大门上，两旁站着全副武装的守卫。",dmGuidance:"当角色们第一次接近卡萨兰特别墅的大门时，请阅读或转述以下内容：",mapGeometry:{imageRef:"adventure/WDH/Osvaldo.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_2ee",locationId:"loc_2e4",name:"C1. 入口大厅",activation:{condition:{type:"always"},priority:90},skeleton:["这个大厅有以下特点：","大厅里放着一架宏伟的羽管键琴。","一条深红色的地毯沿着大厅延伸至通往门厅的敞开的门。","水晶吊灯的光芒反射在墙上架子上摆放的三十多个希亚莫菲的圣徽上，每个圣徽都是一个银色的圣杯，上面刻有一个金色的太阳。","他允许他们在等待时探索房子，但是会坚持不懈地跟随他们。"],flesh:`这个大厅有以下特点：

大厅里放着一架宏伟的羽管键琴。

一条深红色的地毯沿着大厅延伸至通往门厅的敞开的门。

水晶吊灯的光芒反射在墙上架子上摆放的三十多个希亚莫菲的圣徽上，每个圣徽都是一个银色的圣杯，上面刻有一个金色的太阳。

他允许他们在等待时探索房子，但是会坚持不懈地跟随他们。

大厅里满是手持起泡酒的健谈客人。其中一人正在弹奏羽管键琴。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_30a_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[118],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"},dmGuidance:'如果角色是预期中的客人，Willifort Crowelle（见"首席仆人"）会在这里等候他们，并引导他们前往吸烟室（C12），与Cassalanter勋爵会面。'},{id:"scn_2f0",locationId:"loc_2e4",name:"C2. 花园泥房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有以下特点：","一名穿着卡萨兰特家族制服的守卫无所事事地坐在一个板条箱上，监视着外门。","地板上沾满了泥巴。","几排泥泞的靴子和园艺手套散落在地板上。","埃斯维莱·罗兹纳尔，黑毒蛇（见附录 B），正藏在一个凹室里，戴上她的黑毒蛇面具和兜帽。"],flesh:`这个房间有以下特点：

一名穿着卡萨兰特家族制服的守卫无所事事地坐在一个板条箱上，监视着外门。

地板上沾满了泥巴。几排泥泞的靴子和园艺手套散落在地板上。

埃斯维莱·罗兹纳尔，黑毒蛇（见附录 B），正藏在一个凹室里，戴上她的黑毒蛇面具和兜帽。她穿着一件光滑的黑色皮衣，一件褶皱的舞会礼服放在她的脚边。埃斯维莱已经从她专横的父母，罗特米和阿扎莉亚·罗兹纳尔那里溜走，正在准备悄悄穿过别墅，把卡萨兰特家族洗劫一空。

角色们可以通过成功进行一次 DC 14 魅力（威吓或说服）检定，说服 黑毒蛇 在他们搜查卡萨兰特别墅时帮助他们。如果埃斯维勒决定帮助角色们，她会与他们并肩作战，并自动发现宝藏和秘密门。`,spotlightRefs:[],presentNpcIds:["npc_49c"],availableInfoIds:["info_2f0_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[118],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2f2",locationId:"loc_2e4",name:"C3. 图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["这是卡萨兰特家族的私人图书馆。","它包含以下特点：","旧羊皮纸的气息在空气中弥漫着浓重的气味。","墙壁上排列着高大的书架，书架上摆满了色彩缤纷的皮革装订书籍。","每个书架都配有一个可滚动轨道的梯子，以便人们能够取到最高层的书籍。"],flesh:`这是卡萨兰特家族的私人图书馆。它包含以下特点：

旧羊皮纸的气息在空气中弥漫着浓重的气味。

墙壁上排列着高大的书架，书架上摆满了色彩缤纷的皮革装订书籍。每个书架都配有一个可滚动轨道的梯子，以便人们能够取到最高层的书籍。

占据整个西南墙的架子上没有书籍，而是摆放着八十个宽口玻璃瓶，里面装满了旋转的雾气，并用软木塞密封。

在两个书架之间的北墙上挂着一幅7尺高的肖像画，画中的卡萨兰特勋爵和夫人抱着两个婴儿站在他们十几岁的儿子奥斯瓦尔多旁边。（这幅肖像画隐藏着一个秘密门。）

如果特伦齐奥和埃尔泽丽娜在这里，他们就在滑梯上玩耍。

这些书都不是魔法书。

西南架上的玻璃瓶中装有魔法捕捉的声音，包括歌曲、歌剧和录制的讲座。拔掉瓶塞会暂时将瓶中的声音释放到图书馆中，之后声音会返回到瓶子里。打破瓶子会释放声音，但声音播放一次后就会消散。所有的瓶子都有标签。样本内容包含以下：

《阿格拉隆的龙卫》，由凯尔本·阿伦森讲述的关于保护深水城的龙卫的讲座（见《阿格拉隆的龙卫》）。

"银杯颂歌,"一首献给半神西亚摩菲的赞美诗。沃夫加与水晶碎片,一部史诗歌剧,详细描述了一位野蛮人、一位矮人和一位卓尔在冰风谷的冒险经历。

"Your Beardy Face"，一首在月海地区流行的传统矮人情歌。

卡萨兰特家族的肖像画隐藏着一扇秘密门。将画作倾斜会使门在隐藏的铰链上向外摆动，露出后面的储藏室（C11）。角色可以通过一次成功的DC 18 感知（知觉）检定注意到秘密门下方的一条细微缝隙。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_2d6_g2","info_2f2_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[120],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2f6",locationId:"loc_2e4",name:"C4. 阅览室",activation:{condition:{type:"always"},priority:0},skeleton:["这个阅读角落有以下特点：","四扇高大的凸窗将光线引入这个房间，窗外是蝴蝶花园的景色(C25)。","家具包括一个豪华的扶手椅和一个小边桌，上面放着一个空酒杯，酒杯放在一本小书的上面。","北墙上的门上有一个蝴蝶形状的彩色玻璃窥视孔。","如果维克托罗·卡萨兰特（见附录 B）在这里，他正在阅读一本名为地狱门要塞的兴衰的历史文献，并在他的日记本上做笔记。"],flesh:`这个阅读角落有以下特点：

四扇高大的凸窗将光线引入这个房间，窗外是蝴蝶花园的景色(C25)。

家具包括一个豪华的扶手椅和一个小边桌，上面放着一个空酒杯，酒杯放在一本小书的上面。

北墙上的门上有一个蝴蝶形状的彩色玻璃窥视孔。

如果维克托罗·卡萨兰特（见附录 B）在这里，他正在阅读一本名为地狱门要塞的兴衰的历史文献，并在他的日记本上做笔记。

侧边桌上的小册子是 维克托罗·卡萨兰特 阅读时用来做笔记的日记本。里面大多是对费伦地图集和历史书籍的枯燥观察。一个角色如果翻看日记本，并在 DC 15 智力（调查）检定中成功，可以发现维克托罗记录的几则与阅读无关的笔记：

"Neverember的龙是我们祈祷的回应。"

"卡萨兰特家族的陵墓。通知Y.G.（首字母缩写指的是雅拉·格劳洪德女士。）"

"Golorr 是一个阿波罗斯。现在一切都说得通了。"

（如果Cassalanters拥有这块石头，当它不使用时，它被藏在C6。）`,spotlightRefs:[],presentNpcIds:["npc_4dc","npc_4e4"],availableInfoIds:["info_2f6_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[120],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果角色们在第4章仍在寻找格洛尔之石，你可以在这本日志中包含一个关于石头位置的线索。",offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_2f8",locationId:"loc_2e4",name:"C5. 门厅",activation:{condition:{type:"always"},priority:0},skeleton:["两名穿着卡萨兰特家族制服的警卫们在这个大理石地板的门厅里全天候站岗。","这里有七个出口：","通往入口大厅的门(C1)","一个通往宽敞餐厅（C9）的开放式拱门","东墙上的三扇无标记门（通向C6、C7和C8区域）"],flesh:`两名穿着卡萨兰特家族制服的警卫们在这个大理石地板的门厅里全天候站岗。这里有七个出口：

通往入口大厅的门(C1)

一个通往宽敞餐厅（C9）的开放式拱门

东墙上的三扇无标记门（通向C6、C7和C8区域）

一座宏伟的楼梯，通往二楼（C13）

楼梯下的一扇不起眼的门，通向地窖（C26）

门厅里摆放着豪华的花束，插在陶瓷地面花瓶中，富有的客人们大声聊天，喝着起泡酒，而楼上传来的弦乐四重奏的柔和音乐在空中飘荡。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_2e4_g1"],encounterIds:["enc_2f8"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[120],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2fa",locationId:"loc_2e4",name:"C6. 维克托的办公室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门是锁着的。","房间里包含以下特点：","高高的法律书籍和财务账本堆放在坚固的桃花心木桌子上。","一具独立的青铜盔甲（包括头盔、手套和大剑）就立在门内。","如果维克托罗·卡萨兰特（见附录 B）在这里，他会坐在桌子后面，手指交叉，深陷沉思。"],flesh:`这个房间的门是锁着的。房间里包含以下特点：

高高的法律书籍和财务账本堆放在坚固的桃花心木桌子上。

一具独立的青铜盔甲（包括头盔、手套和大剑）就立在门内。

如果维克托罗·卡萨兰特（见附录 B）在这里，他会坐在桌子后面，手指交叉，深陷沉思。

门边的盔甲是一具恐怖铠甲。它服从维克托的命令。当维克托不在场时，它会攻击任何没有钥匙就开门的人，或者任何不是卡萨兰特家族血统的人打开维克托的书桌。卡萨兰特的孩子们知道这个构造物，并会向友好的角色提醒它。

维克托罗的桌子被锁上了，可以使用维克托罗的金钥匙打开。角色可以使用盗贼工具进行DC 18的敏捷检定来撬开锁。桌子抽屉里有十三个密封的卷轴筒，每个卷轴筒内有一份已签署的合同。这些合同详细列出了维克托罗向各种贵族、商人和公会提供的贷款条款。抽屉中还有一个暗格，角色可以通过成功的DC 18感知（Wisdom）检定发现。暗格里有一个由纯金制成的阿斯蒙蒂斯符号（价值250金币）。

如果卡萨兰特家族拥有这个神器并且没有使用它，它也会被藏在书桌的秘密隔间里。`,spotlightRefs:[],presentNpcIds:["npc_4dc"],availableInfoIds:["info_2fa_g1"],encounterIds:["enc_2fa"],treasureSlotIds:[],eventIds:["evt_2fa_e1"],tone:"tension",_meta:{sourcePages:[120],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_2fe",locationId:"loc_2e4",name:"C7. 斗篷室",activation:{condition:{type:"always"},priority:0},skeleton:["这个步入式衣帽间存放着卡萨兰特家族昂贵的外套和斗篷，同时也有足够的空间容纳多达一百位客人的衣物。"],flesh:"这个步入式衣帽间存放着卡萨兰特家族昂贵的外套和斗篷，同时也有足够的空间容纳多达一百位客人的衣物。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[121],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_2ff",locationId:"loc_2e4",name:"C8. 有盖门廊",activation:{condition:{type:"always"},priority:0},skeleton:["这个有顶的门廊通常是卡萨兰特家族的仆人们使用的入口。","有十名仆人（人类平民）在用餐时间在这里吃饭。"],flesh:"这个有顶的门廊通常是卡萨兰特家族的仆人们使用的入口。有十名仆人（人类平民）在用餐时间在这里吃饭。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[121],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_300",locationId:"loc_2e4",name:"C9. 家庭餐厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下值得注意的特点：","一打椅子围绕着房间中央一个雕刻精美的餐桌摆放。","餐桌上摆放着金色的盘子、餐具、高脚杯和烛台。","丝绸餐巾增添了装饰效果。","卡萨兰特家族在这里一起用餐，有时会邀请一两位客人加入他们。"],flesh:`这个房间包含以下值得注意的特点：

一打椅子围绕着房间中央一个雕刻精美的餐桌摆放。

餐桌上摆放着金色的盘子、餐具、高脚杯和烛台。丝绸餐巾增添了装饰效果。

卡萨兰特家族在这里一起用餐，有时会邀请一两位客人加入他们。

在聚会上，餐桌被临时改造成了牌桌。十位富有的贵族正在玩一场高赌注的《三龙赌局》。角色可以通过下注5金币并进行一次DC 15的智力检定来参与一局，如果角色熟练使用游戏工具则可以在检定中加上熟练加值。检定成功时，角色赢得10金币。如果检定失败，角色将输掉下注。

这些金制餐具和烛台总共价值2500金币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[121],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_303",locationId:"loc_2e4",name:"C10. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["从日出到日落后的一个小时，这个厨房是一片繁忙的景象：","六位厨师来回忙碌，调味肉类，搅拌面糊，以及准备各种令人印象深刻的食物。","一个身材圆润、面色红润的男子戴着一顶高高的白色帽子，一边发号施令，一边挥舞着一把锋利的刀子。","这个房间内的楼梯通往二楼的宴会厨房(C14)。",'主厨，詹达尔·切尔戈巴（见"主要仆人"），监督着六位厨师（人类平民）。'],flesh:`从日出到日落后的一个小时，这个厨房是一片繁忙的景象：

六位厨师来回忙碌，调味肉类，搅拌面糊，以及准备各种令人印象深刻的食物。

一个身材圆润、面色红润的男子戴着一顶高高的白色帽子，一边发号施令，一边挥舞着一把锋利的刀子。

这个房间内的楼梯通往二楼的宴会厨房(C14)。

主厨，詹达尔·切尔戈巴（见"主要仆人"），监督着六位厨师（人类平民）。如果Jandar认为角色们是威胁，他会喊出'For'zaal'，使得十把刀从柜台上神奇地升起并攻击。这些刀是凌空剑，在击中时造成4（1d6 + 1）点穿刺伤害。

詹达尔 不在这里。相反，他正在庄园广阔的草坪上的一个烹饪亭里准备阿玛莉亚的中毒盛宴。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_303"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[121],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_305",locationId:"loc_2e4",name:"C11. 食品储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","啤酒桶、淡水和食用油堆积在房间中央。","食物和食材的架子沿着墙壁排列。","食品储藏室的后墙是一个大型的葡萄酒架，里面存放着各种精美的瓶装葡萄酒。","（这个葡萄酒架隐藏着一个秘密门。"],flesh:`这个房间包含以下特点：

啤酒桶、淡水和食用油堆积在房间中央。

食物和食材的架子沿着墙壁排列。

食品储藏室的后墙是一个大型的葡萄酒架，里面存放着各种精美的瓶装葡萄酒。（这个葡萄酒架隐藏着一个秘密门。）

詹达尔·切尔戈巴，这位主厨，将他的金色祭祀匕首、金色面具和深红色长袍（见"阿斯蒙蒂斯的教团"）藏在一袋土豆下方的铁制锁箱中。这个箱子可以用詹达尔的金色钥匙打开，或者通过一个角色使用盗贼工具成功通过一个 DC 15 的敏捷检定来解锁。一个角色也可以通过一个成功的 DC 25 的力量（运动）检定来撬开它。

通往图书馆的密门（C3）可以由成功通过 DC 18 感知（察觉）检定的角色发现。角色会发现从架子上拿起一瓶博德之门黑皮诺红酒可以解锁门并允许它被推开。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_305_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_305_e1"],tone:"exploration",_meta:{sourcePages:[121],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_308",locationId:"loc_2e4",name:"C12. 吸烟室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","一名穿着卡萨兰特家族制服的警卫站在这里，心不在焉地检视着装饰墙壁的王室肖像画，这些肖像画摆放在各个地方的精美画架上。","房间里摆放着精致的扶手椅，散发着微弱的烟斗草气味；","这股气味几乎被熏香和淡雅的香水味所掩盖。","如果卡萨兰特勋爵因任何原因邀请角色们到他家，他会在这里与他们会面。"],flesh:`这个房间包含以下特点：

一名穿着卡萨兰特家族制服的警卫站在这里，心不在焉地检视着装饰墙壁的王室肖像画，这些肖像画摆放在各个地方的精美画架上。

房间里摆放着精致的扶手椅，散发着微弱的烟斗草气味；这股气味几乎被熏香和淡雅的香水味所掩盖。

如果卡萨兰特勋爵因任何原因邀请角色们到他家，他会在这里与他们会面。如果谈话转向商业，他会吩咐威利福特为他的客人带来上等白兰地和装满烟斗草的烟斗。

墙上的肖像画描绘了卡萨兰特家族的几个世代。画架上最近绘制的包括以下几位：

一位忧郁的年轻维克托与他笑容满面的父亲

一幅婚礼肖像，展示了维克托和阿玛莉亚面带微笑、无忧无虑的样子

十二岁的奥斯瓦尔多手持一把仪式用剑

阿玛莉亚坐着，怀里抱着婴儿特伦齐奥和埃尔泽丽娜，而维克托正在给他们读童话故事`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_2e4_g1"],encounterIds:["enc_308"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[121],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_30a",locationId:"loc_2e4",name:"C13. 舞厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个优雅的舞厅包含以下值得注意的特点：","在中心位置矗立着一个令人毛骨悚然的、真人大小的木制布偶，它的面部被涂上了颜料。","它穿着打扮像是一个舞厅舞者。","抛光的大理石地板是一幅令人眼花缭乱的马赛克，描绘了一个外部刻有金色太阳图案的银色圣杯。","镀金的镜子和精美的挂毯装饰着墙壁。"],flesh:`这个优雅的舞厅包含以下值得注意的特点：

在中心位置矗立着一个令人毛骨悚然的、真人大小的木制布偶，它的面部被涂上了颜料。它穿着打扮像是一个舞厅舞者。

抛光的大理石地板是一幅令人眼花缭乱的马赛克，描绘了一个外部刻有金色太阳图案的银色圣杯。成功通过 DC 10 智力（宗教）检定的角色会认出这是贵族半神西摩菲的神圣象征。

镀金的镜子和精美的挂毯装饰着墙壁。沿着西墙，带有深红色帘子的窗户从地板延伸到天花板。

尽管这个舞厅宏伟壮观，但如果没有人在其中跳舞，它看起来异常阴郁。楼梯向下通往门厅（C5），向上通往C17和C19区域外的走廊。

穿着打扮的"人体模特"是一个魔法构装生物，充当舞伴。它具有秘偶（见附录 B）的具体数值，但没有有效的攻击，并且价值为0 XP。当一个类人生物在构装生物前鞠躬或行屈膝礼时，它会做出另一个手势，同时一个魔嘴术法术播放用Common语录制的信息："你想跳哪种舞蹈？加利亚尔德？帕凡？华尔兹？"构装生物跟随其伙伴的引导，直到舞蹈结束，然后再次静止不动。

在派对上，数十位富有的戴面具的客人在弦乐四重奏演奏的活泼华尔兹音乐中跳舞。`,spotlightRefs:[],presentNpcIds:["npc_4c6"],availableInfoIds:["info_30a_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[121],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Villa-Two-Players.webp"}},{id:"scn_30d",locationId:"loc_2e4",name:"C14. 宴会厨房",activation:{condition:{type:"always"},priority:0},skeleton:["宴会厨房是社交活动时与主厨房一起使用的额外烹饪空间。","它通常为空，并且门是锁着的。","厨房里活动繁忙，四位厨师（人类平民)正在为贵族客人准备一系列馅饼。"],flesh:`宴会厨房是社交活动时与主厨房一起使用的额外烹饪空间。它通常为空，并且门是锁着的。

厨房里活动繁忙，四位厨师（人类平民)正在为贵族客人准备一系列馅饼。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[122],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_30f",locationId:"loc_2e4",name:"C15. 宴会厅",activation:{condition:{type:"always"},priority:0},skeleton:["这间宽敞的大厅中唯一的家具是一张长长的木制餐桌，它实际上是一只巨大的拟身怪伪装而成。","它具有普通拟怪的属性，但有以下变化：","作为一个动作，它可以进行三次攻击：两次使用它的伪足，一次使用它的咬击。","它的挑战等级为3（700经验值）。","拟身怪受到卡萨兰特家族的良好对待，不会伤害家中任何成员。"],flesh:`这间宽敞的大厅中唯一的家具是一张长长的木制餐桌，它实际上是一只巨大的拟身怪伪装而成。它具有普通拟怪的属性，但有以下变化：

这个拟身怪体型庞大，拥有75点生命值（10d10 + 20）。

作为一个动作，它可以进行三次攻击：两次使用它的伪足，一次使用它的咬击。

它的挑战等级为3（700经验值）。

拟身怪受到卡萨兰特家族的良好对待，不会伤害家中任何成员。它只服从卡萨兰特勋爵和夫人。

房间里摆放着几十把椅子，桌子上摆满了食物。任何时候都有两打派对客人在这里大吃特吃。来自打哈欠之门的四个变形怪潜入派对，伪装成贵族。他们的领袖，邦妮（见"熟悉的面孔"），伪装成一位名叫Lymeria Lhaurilstar的小贵族女士；她原本希望在派对上度过一个愉快的夜晚，但如果角色们需要帮助，她也愿意提供援助。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_30f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[122],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_311",locationId:"loc_2e4",name:"C16. 钢琴室",activation:{condition:{type:"always"},priority:0},skeleton:["这间布满灰尘的房间里，一架闪亮的三角钢琴靠墙摆放。","钢琴后面有几个未标记的壁橱。","除非正在举行社交活动，或者罗丝奶奶正在给卡萨兰特家的孩子们上钢琴课，否则这个房间通常是空的。","富有的客人在这里聊天，并使用化妆间（C16b）。","这个壁橱里装满了装有冬季毛毯、拖把和其他家庭必需品的板条箱。"],flesh:`这间布满灰尘的房间里，一架闪亮的三角钢琴靠墙摆放。钢琴后面有几个未标记的壁橱。

除非正在举行社交活动，或者罗丝奶奶正在给卡萨兰特家的孩子们上钢琴课，否则这个房间通常是空的。

富有的客人在这里聊天，并使用化妆间（C16b）。

这个壁橱里装满了装有冬季毛毯、拖把和其他家庭必需品的板条箱。

这些房间是锁着的。它们里面有镜子，除了社交活动时使用外，大部分时间都闲置着。

时髦的贵族们正在排队整理仪容。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[122],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_316",locationId:"loc_2e4",name:"C17. 游戏室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","地板上散布着巨大的填充玩具、小丑盒、洋娃娃，以及一个形状像战马的摇摇马。","一只蝴蝶形状的大型旋转挂饰悬挂在天花板上，无力地转动着。",'如果她没有在别处被处理，双胞胎的保姆，莱巴·罗斯（见"主要仆人"），会坐在这里为孩子们编织洋娃娃。'],flesh:`这个房间包含以下特点：

地板上散布着巨大的填充玩具、小丑盒、洋娃娃，以及一个形状像战马的摇摇马。

一只蝴蝶形状的大型旋转挂饰悬挂在天花板上，无力地转动着。

如果她没有在别处被处理，双胞胎的保姆，莱巴·罗斯（见"主要仆人"），会坐在这里为孩子们编织洋娃娃。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[122],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Villa-Three-Players.webp"}},{id:"scn_317",locationId:"loc_2e4",name:"C18. 双胞胎的卧室",activation:{condition:{type:"always"},priority:0},skeleton:["双胞胎的卧室包含以下特点：","这个房间的主体是两张四柱床。","晚上，房间里堆满了几十件玩具。","早上，玩具会被一名女仆放回玩具箱中。","一个真人大小的填充独角兽站在房间的一个角落。"],flesh:`双胞胎的卧室包含以下特点：

这个房间的主体是两张四柱床。

晚上，房间里堆满了几十件玩具。早上，玩具会被一名女仆放回玩具箱中。

一个真人大小的填充独角兽站在房间的一个角落。

如果特伦齐奥和埃尔泽里娜在这里。特伦齐奥穿着一件简陋的龙装，被他的妹妹追着在房间里跑，妹妹戴着骑士头盔，挥舞着木剑。

这个无生命的物体在打开龙之宝库（见"宝库钥匙"）的目的上被视为一头真正的独角兽。

这些壁橱里装满了填充动物玩具和备用毯子。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_2d6_g2"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[122],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_31a",locationId:"loc_2e4",name:"C19. 主人休息室",activation:{condition:{type:"always"},priority:0},skeleton:['卡萨兰特夫人的侍从，Tissina Khyret（见"主要仆人"），当她不陪伴她的女主人时，大部分时间都在这里度过。',"这个房间布置得很舒适，包括有填充过多的椅子、躺椅和酒吧。"],flesh:'卡萨兰特夫人的侍从，Tissina Khyret（见"主要仆人"），当她不陪伴她的女主人时，大部分时间都在这里度过。这个房间布置得很舒适，包括有填充过多的椅子、躺椅和酒吧。',spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[122],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_31b",locationId:"loc_2e4",name:"C20. 亚麻壁橱",activation:{condition:{type:"always"},priority:0},skeleton:["这个壁橱里塞满了折叠好的床单和其他各种亚麻布。","这个房间里堆放的两个羽绒被是害虫裹尸布，它们会攻击任何不是卡萨兰特家族成员或其仆人的人。","这个房间里的任何战斗都会吸引莱巴·罗斯（C17）和Tissina Khyret（C19）的注意。",'Willifort Crowelle和Tissina Khyret将他们的邪教服饰（见"阿斯蒙蒂斯邪教"）藏在一个装饰着金色花纹的锁箱中，锁箱隐藏在一堆描绘飞翔魔鬼图案的被子下面。'],flesh:`这个壁橱里塞满了折叠好的床单和其他各种亚麻布。这个房间里堆放的两个羽绒被是害虫裹尸布，它们会攻击任何不是卡萨兰特家族成员或其仆人的人。这个房间里的任何战斗都会吸引莱巴·罗斯（C17）和Tissina Khyret（C19）的注意。

Willifort Crowelle和Tissina Khyret将他们的邪教服饰（见"阿斯蒙蒂斯邪教"）藏在一个装饰着金色花纹的锁箱中，锁箱隐藏在一堆描绘飞翔魔鬼图案的被子下面。箱子可以用威利福特或蒂西娜的金钥匙打开，或者由成功通过DC 14敏捷检定使用盗贼工具的角色打开。也可以通过成功进行DC 16力量（运动）检定将其撬开。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_31b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[122],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_31d",locationId:"loc_2e4",name:"C21. 主卧室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门是锁着的。","房间里包含以下值得注意的特点：","墙壁上装饰着九个浮雕，每个浮雕描绘了九层地狱中的一层。","一张挂着深红色窗帘并饰有金色尖顶的四柱床，位于一扇由深色硬木雕刻而成并配有金色门闩的精美门前。","（这扇门是锁着的，通向C22。"],flesh:`这个房间的门是锁着的。房间里包含以下值得注意的特点：

墙壁上装饰着九个浮雕，每个浮雕描绘了九层地狱中的一层。

一张挂着深红色窗帘并饰有金色尖顶的四柱床，位于一扇由深色硬木雕刻而成并配有金色门闩的精美门前。（这扇门是锁着的，通向C22。）

搜查这个房间会发现床下藏着一个金色的锁盒。

维克托罗和阿玛利亚都将他们的邪教法衣（见"阿斯蒙蒂斯教派"）藏在他们床下的一个坚固金锁盒中（价值750金币）。盒子可以使用维克托罗或阿玛利亚的金钥匙打开，或者通过一个成功进行 DC 14 敏捷检定并使用盗贼工具的玩家打开。也可以通过成功进行 DC 16 力量（运动）检定来撬开。

如果箱子被除金钥匙以外的任何方式打开，毒气会从盖子底部的孔中喷出，填充以箱子为中心的15英尺半径的球形区域。此陷阱无法被解除。区域内的任何生物必须进行一次DC 13体质豁免检定，若豁免失败则受到22（4d10）点毒素伤害，若成功则伤害减半。毒气会迅速消散。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_31d_0"],eventIds:["evt_31d_e1"],tone:"exploration",_meta:{sourcePages:[123],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_31f",locationId:"loc_2e4",name:"C22. Ammalia的私人书房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门是锁着的。","房间里包含以下特点：","墙壁上排列着摆满了厚重书籍的书架。","一本带有红色皮革封面的魔法书放在由深色橡木雕刻而成的桌子上。","一架梯子通向天花板上的一个活板门。"],flesh:`这个房间的门是锁着的。房间里包含以下特点：

墙壁上排列着摆满了厚重书籍的书架。

一本带有红色皮革封面的魔法书放在由深色橡木雕刻而成的桌子上。

一架梯子通向天花板上的一个活板门。

书架上的书籍包括小说和非小说作品。

除了法术书（如下所述），桌子上还有一个华丽的黄金烛台（价值125金币）、一个黄金墨水瓶（价值25金币）和一支羽毛笔（价值15金币）。桌子的抽屉里有一个印有卡萨兰特家族徽章的火漆印章、阿玛利亚·卡萨兰特的法术书（里面包含了她准备的所有法术），以及十瓶被称为"午夜之泪"的深黑色毒药。阿玛莉亚计划用这种毒药污染奠基日宴会（参见"特殊事件"）。

桌子上的这本书，用深红色皮革装订，详细描述了Ammalia和Victoro首次与大恶魔阿斯蒙蒂斯接触时进行的恶魔仪式。打开它，除了空白页和几滴干血之外，什么也没有。如果任何一页上滴上一滴类人生物的血，那一页上的地狱文字就会变得清晰可读，并且会一直保持这样，直到书被合上。即使文字消失，血迹也会保留下来。

任何具有仪式施法特性（或仪式施法者特长）的角色，如果花费24小时阅读这本书，便可以掌握书中描述的仪式。仪式需要11分钟来施放，并需要焚香和一瓶圣水（在进行仪式时消耗）。仪式结束时，一个阿斯蒙蒂斯的代理会出现，并授予召唤者一个通神术法术的好处。代理由焚香烟雾形成，看起来像一个深狱炼魔。一个角色必须在再次进行仪式前完成一次长休。

天花板上的活板门是通往阁楼的入口。`,spotlightRefs:[],presentNpcIds:["npc_496"],availableInfoIds:["info_31f_g1","info_31f_g2"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_31f_e1"],tone:"exploration",_meta:{sourcePages:[123],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_324",locationId:"loc_2e4",name:"C23. 阁楼平台",activation:{condition:{type:"always"},priority:0},skeleton:["阁楼里弥漫着浓重的硫磺气味。","唯一的照明是一束透过房间西端带百叶窗的窗户微弱照射进来的光线。","只要不打开门，这个阁楼就是隔音的。","只有在阁楼与C22之间的活板门和阁楼与C24之间的门同时打开时，才能在外面听到奥斯瓦尔多的嚎叫。","此外，除非门是打开的，否则具有心灵感应能力的生物无法与阁楼外的生物进行心灵感应交流。"],flesh:`阁楼里弥漫着浓重的硫磺气味。唯一的照明是一束透过房间西端带百叶窗的窗户微弱照射进来的光线。

只要不打开门，这个阁楼就是隔音的。只有在阁楼与C22之间的活板门和阁楼与C24之间的门同时打开时，才能在外面听到奥斯瓦尔多的嚎叫。此外，除非门是打开的，否则具有心灵感应能力的生物无法与阁楼外的生物进行心灵感应交流。

Terenzio和Elzerina在他们的一生中曾两三次听到阁楼传来的嚎叫声，并对那里潜伏的东西感到好奇。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[124],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Villa-Garret-Players.webp"}},{id:"scn_325",locationId:"loc_2e4",name:"C24. 奥斯瓦尔多的监狱",activation:{condition:{type:"always"},priority:0},skeleton:["如果阿玛利亚·卡萨兰特或维克托罗·卡萨兰特（见附录 B）或两者都在场，这个房间的门是开着但未上锁的。","否则，门是锁着的，Victoro和Ammalia持有唯一的钥匙。","你被一阵不连贯的嚎叫声所迎接，就好像打开门打破了一直阻挡着一个疯子尖叫的大坝。","奥斯瓦多·卡萨兰特（见附录 B）在白天的任何时候都会尖叫和呻吟。","他绝望地试图让某人听到他的声音并来救他。"],flesh:`如果阿玛利亚·卡萨兰特或维克托罗·卡萨兰特（见附录 B）或两者都在场，这个房间的门是开着但未上锁的。否则，门是锁着的，Victoro和Ammalia持有唯一的钥匙。

奥斯瓦多·卡萨兰特（见附录 B）在白天的任何时候都会尖叫和呻吟。他绝望地试图让某人听到他的声音并来救他。如果他的一个或两个父母在这里，他会在他们面前哭泣时向他们吐出诅咒。

守卫这个房间的是两只以蜘蛛形态出现的小魔鬼。它们听从卡萨兰特勋爵的命令，任务是杀死飞进阁楼的鸟类、老鼠和其他害虫。它们会攻击任何试图释放奥斯瓦尔多或威胁在场其他家庭成员的人。

卡萨兰特家族的法定继承人因为父母的无思贪婪变成了一个没有灵魂的怪物。他那空洞的身体已经被转化成了一个链魔，他的父母用他自己的锁链将他囚禁起来。在他周围的地板上烧制了一个直径10尺的五角星。一个侦测魔法法术揭示了从这个符号发出的强大防护魔法光环。

Osvaldo的链条缠绕在构成房间框架的梁和木梁上。他无法破坏房子，也无法挣断自己的链条。他只能无力地对加诸于他的痛苦嗥叫。他完全疯了，无法与之理论。

一次成功的 DC 15 智力（奥秘）检定揭示出五角星阻止了奥斯瓦尔操纵他的锁链，并且如果有另一个生物进入五角星所包围的区域，效果将终止。五角星的魔法也可以被解除（DC 15）。如果奥斯瓦尔被释放，他将重新控制他的锁链并无差别地攻击。如果他的生命值被降低到0，链魔在融化成令人作呕的黑色脓液之前会呼喊他的母亲。`,spotlightRefs:[],presentNpcIds:["npc_496","npc_4dc","npc_4cd"],availableInfoIds:["info_325_g1"],encounterIds:["enc_325"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[124],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:"你被一阵不连贯的嚎叫声所迎接，就好像打开门打破了一直阻挡着一个疯子尖叫的大坝。",dmGuidance:"当角色第一次打开门时，请阅读："},{id:"scn_328",locationId:"loc_2e4",name:"C25. 蝴蝶花园",activation:{condition:{type:"always"},priority:0},skeleton:["春天时，阿玛利亚·卡萨兰特的花园吸引了毛毛虫，到了夏天它们就会变成蝴蝶。","卡萨兰特夫人的蝴蝶花园让她的同行羡慕不已。","从种植箱和玫瑰花丛中飘来花香和草本植物的甜美香气。","如果Terenzio和Elzerina在这里，他们会在花园里嬉戏。","如果阿玛利亚·卡萨兰特（见附录 B）在这里，她会看着孩子们或照料她的花园。"],flesh:`春天时，阿玛利亚·卡萨兰特的花园吸引了毛毛虫，到了夏天它们就会变成蝴蝶。卡萨兰特夫人的蝴蝶花园让她的同行羡慕不已。从种植箱和玫瑰花丛中飘来花香和草本植物的甜美香气。

如果Terenzio和Elzerina在这里，他们会在花园里嬉戏。如果阿玛利亚·卡萨兰特（见附录 B）在这里，她会看着孩子们或照料她的花园。六只以乌鸦形态出现的小魔鬼在蝴蝶花园周围徘徊，偶尔在主人不注意的时候捕食Ammalia的珍贵宠物。尽管它们傲慢无礼，Ammalia还是将这些小恶魔用作间谍。她派它们在城市中执行任务。它们还会警告Ammalia有入侵者，并攻击任何威胁她家庭成员的人。

在派对期间，两位年轻热血的贵族无意中冒犯了对方。他们换上了决斗服装，用剑来解决他们的分歧，而旁观者则喝着酒为他们加油鼓劲。`,spotlightRefs:[],presentNpcIds:["npc_496"],availableInfoIds:["info_2d6_g2"],encounterIds:["enc_328"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[125],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_32b",locationId:"loc_2e4",name:"C26. 地下室",activation:{condition:{type:"always"},priority:0},skeleton:["这个地下室由仆人们保持干净，没有灰尘和蛛网。","无论一年中的什么时候，这里都异常寒冷。","它包含了备用家具、洗衣盆和装满旧衣服的箱子。"],flesh:"这个地下室由仆人们保持干净，没有灰尘和蛛网。无论一年中的什么时候，这里都异常寒冷。它包含了备用家具、洗衣盆和装满旧衣服的箱子。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[125],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Villa-Cellar-Players.webp"}},{id:"scn_32c",locationId:"loc_2e4",name:"C27. 假金库",activation:{condition:{type:"always"},priority:0},skeleton:["这个金库的门由实心铁制成，并配备了三把不同的锁。","维克托罗和阿玛利亚各自拥有一套钥匙。","如果任何一次检定失败，所有三把锁都会重置。",'如果生物在进入金库前没有先说出"黄金是我的盾牌"，一阵强烈的魔法寒冷将充斥整个房间。',"一个侦测魔法法术揭示了禁用陷阱的秘密：在天花板中央刻有一个微小魔法符文。"],flesh:`这个金库的门由实心铁制成，并配备了三把不同的锁。维克托罗和阿玛利亚各自拥有一套钥匙。如果没有钥匙，角色需要连续三次成功通过 DC 20 的敏捷检定，使用盗贼工具来打开门。如果任何一次检定失败，所有三把锁都会重置。这扇门的 AC 为 19，伤害阈值为 10，生命值为 90，并且对毒素和心灵伤害免疫。一个生物可以通过一次成功的 DC 27 力量（运动）检定将其击破。

金库是空的。

如果生物在进入金库前没有先说出"黄金是我的盾牌"，一阵强烈的魔法寒冷将充斥整个房间。当时在金库内的所有生物必须进行一次DC 16体质豁免检定，若失败则受到36点（8d8）寒冷伤害，若成功则只受到一半的伤害。

一个侦测魔法法术揭示了禁用陷阱的秘密：在天花板中央刻有一个微小魔法符文。如果通过成功施放解除魔法（DC 16）来驱散此符文，陷阱将停止运作。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_32c_e1"],tone:"exploration",_meta:{sourcePages:[125],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_32e",locationId:"loc_2e4",name:"C28. 酒窖",activation:{condition:{type:"always"},priority:0},skeleton:["这个地下室包含以下特点：","东墙排列着近三十桶葡萄酒。","从酒窖南端传来一阵微弱的气流。","这股气流泄露了一扇秘密门的位置。","仆人们很少在这里花太多时间，因为地下室没有照明并且很冷。"],flesh:`这个地下室包含以下特点：

东墙排列着近三十桶葡萄酒。

从酒窖南端传来一阵微弱的气流。这股气流泄露了一扇秘密门的位置。

仆人们很少在这里花太多时间，因为地下室没有照明并且很冷。角色们在这里感到一种奇怪的不祥预感。

南墙上绘有一个褪色的神圣符号，代表着西莫菲，一个银色的圣杯上带着金色的太阳符号。如果按下太阳符号，墙壁便会移动打开，显露出后面的C29区域。一个搜索墙壁的角色会自动发现这扇秘密门，并且可以通过一次成功的DC 10智慧（感知）检定来弄清楚如何打开它。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_32e_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_32e_e1"],tone:"exploration",_meta:{sourcePages:[125],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_330",locationId:"loc_2e4",name:"C29. 秘密金库",activation:{condition:{type:"event_fired",eventId:"evt_32e_e1"},priority:0},skeleton:["卡萨兰特家族的大部分财富都投资在投资上，但家族在这里存放了一堆二十个5磅重的银贸易条（每个价值25金币）以备紧急情况。","金库的后部是一个黑暗的楼梯，向下延伸30尺到达阿斯蒙蒂斯的神庙（A1）。","除了上述的财宝外，金库中还有五百个袋子，每个袋子里有1000金币（家族资产的变现）。","如果卡萨兰特家族成功洗劫了龙之金库，金库中将额外增加五百个袋子（从金库中取出的财宝总和），总共为1000000金币。",'这些金币会一直存放在这里，直到被送到神庙（见"特殊事件"）。'],flesh:`卡萨兰特家族的大部分财富都投资在投资上，但家族在这里存放了一堆二十个5磅重的银贸易条（每个价值25金币）以备紧急情况。金库的后部是一个黑暗的楼梯，向下延伸30尺到达阿斯蒙蒂斯的神庙（A1）。

除了上述的财宝外，金库中还有五百个袋子，每个袋子里有1000金币（家族资产的变现）。如果卡萨兰特家族成功洗劫了龙之金库，金库中将额外增加五百个袋子（从金库中取出的财宝总和），总共为1000000金币。这些金币会一直存放在这里，直到被送到神庙（见"特殊事件"）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_330_0","trs_330_1","trs_330_2"],eventIds:[],tone:"exploration",_meta:{sourcePages:[125],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_332",locationId:"loc_332",name:"阿斯蒙蒂斯神庙",activation:{condition:{type:"always"},priority:0},skeleton:["卡萨兰特别墅下面隐藏着一座秘密神庙，Victoro在那里领导着一个崇拜阿斯蒙蒂斯的邪教。","邪教成员包括心怀恶意的贵族以及被财富和地位前景所诱骗的愚蠢平民。","每个月的第一天午夜，整个邪教会在神庙聚集进行黑暗弥撒。","在这些仪式中，他们向九层地狱之王宣誓效忠，呼喊他们敌人的名字，并恳求阿斯蒙蒂斯给他们的敌人带来毁灭。","他们还喝葡萄酒，分享八卦，并偶尔献上祭品。"],flesh:`卡萨兰特别墅下面隐藏着一座秘密神庙，Victoro在那里领导着一个崇拜阿斯蒙蒂斯的邪教。邪教成员包括心怀恶意的贵族以及被财富和地位前景所诱骗的愚蠢平民。每个月的第一天午夜，整个邪教会在神庙聚集进行黑暗弥撒。在这些仪式中，他们向九层地狱之王宣誓效忠，呼喊他们敌人的名字，并恳求阿斯蒙蒂斯给他们的敌人带来毁灭。他们还喝葡萄酒，分享八卦，并偶尔献上祭品。对卡萨兰特家族来说，这些活动是炫耀他们权力和对下层人士施加意志的机会。

以下一般特点适用于神庙：

房间由放置在高大、细长、锻铁烛台上的闪烁蜡烛微弱照明。

除非另有说明，房间天花板高度为10英尺。通道高度为8英尺，门道高度为7英尺。

门是由铁箍加固的木头制成的。

不是贵族成员的邪教徒穿着廉价的红色长袍，戴着恶魔面具，佩戴着刻有阿斯蒙蒂斯标志的木制护身符。

以下区域对应于地图6.2上的标签。神庙通过一个楼梯与A1连接，与卡萨兰特别墅相连。此外，一条地下河流（A9）从神庙的下层流走，最终流向深水城西北的泥滩。

在"邪教集会"部分中注明了邪教集会期间神庙发生的变化。

一口布满灰尘的石棺占据着这座墓穴，石膏棺盖上雕刻着一位英俊、干净利落贵族的肖像，他紧握一只刻有太阳符号的圣杯。该肖像类似于卡拉丁·卡萨兰特（见上文）的幽灵形象。

Caladorn的骨头已经化为尘土，但他的+1 板甲依然存在。同样躺在灰尘中的还有一把瓦解之锤。如果当一个或两个魔法物品从石棺中移走时Caladorn的鬼魂在场，它会问："你们发誓要使用这些物品来打败黑暗势力吗？" 肯定的回答足以使鬼魂安息。在永远消失之前，它说："使用钉头锤摧毁邪恶化身的雕像。结束腐败以恢复我家族的荣誉。" ("雕像"是A7中的阿斯蒙蒂斯雕像。)

这个墓穴除了灰尘和蛛网之外什么也没有。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[125],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_335",locationId:"loc_332",name:"A1. 被诅咒者的大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个大厅的特点非常明显：","大厅中央，一个螺旋楼梯向下延伸20尺到达下层（A3）。","从西北方向的走廊传来微弱的吟唱声。","在南方有三个带有铁箍木门的牢房。","每个门上都有一个小的带栅栏的窗户，高度与人眼平齐。"],flesh:`这个大厅的特点非常明显：

大厅中央，一个螺旋楼梯向下延伸20尺到达下层（A3）。

从西北方向的走廊传来微弱的吟唱声。

在南方有三个带有铁箍木门的牢房。每个门上都有一个小的带栅栏的窗户，高度与人眼平齐。牢房门面向一个石柱。一个钥匙圈挂在柱子上的钩子上。

当卡萨兰特家族决定在仪式中牺牲人类时，他们会引诱无家可归的水手到他们的庄园，并将他们关在这些牢房中。解锁门的钥匙挂在石柱上。一个角色可以通过使用盗贼工具成功通过DC 15敏捷检定来撬开锁。目前，所有三个牢房都是空的。

这个声音是邪教徒在A7中对阿斯蒙蒂斯的祈祷。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[128],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_338",locationId:"loc_332",name:"A2. 阳台",activation:{condition:{type:"always"},priority:0},skeleton:["两个摇摇欲坠的阳台，带有石栏杆，俯瞰着神庙的仪式大厅（A7）。","到下面地板的距离是20尺。","阳台的地板因年代久远而变得脆弱。","如果豁免失败，该生物将跌落20英尺并倒地在下方的地板上（A7），周围是石头碎片。","如果豁免成功，该生物可以通过跳到相邻的无人空间来避免跌落。"],flesh:`两个摇摇欲坠的阳台，带有石栏杆，俯瞰着神庙的仪式大厅（A7）。到下面地板的距离是20尺。

阳台的地板因年代久远而变得脆弱。任何中型或更大的生物踏上地图上标记为C的5英尺方格时，必须进行一次DC 15敏捷豁免，因为地板会碎裂并塌陷，留下一个巨大的洞。如果豁免失败，该生物将跌落20英尺并倒地在下方的地板上（A7），周围是石头碎片。如果豁免成功，该生物可以通过跳到相邻的无人空间来避免跌落。地板塌陷的声音在整个寺庙中都能听到。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_338_e1"],tone:"exploration",_meta:{sourcePages:[128],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_33a",locationId:"loc_332",name:"A3. 前厅",activation:{condition:{type:"always"},priority:0},skeleton:["从A1的螺旋楼梯通向这个房间。","在北侧壁龛的后墙上挂着一幅18英尺高、9英尺宽的镀金框肖像画。","画中是一位英俊非凡、衣着考究的留须男子，额头上突出着小小的角。","他手持着一根镶有红宝石的手杖。","在邪教集会期间，每个通往A7的门前都有一只须魔守卫。"],flesh:`从A1的螺旋楼梯通向这个房间。

在北侧壁龛的后墙上挂着一幅18英尺高、9英尺宽的镀金框肖像画。画中是一位英俊非凡、衣着考究的留须男子，额头上突出着小小的角。他手持着一根镶有红宝石的手杖。任何成功通过DC 10智力（宗教）检定的角色都能认出这位人物是阿斯蒙蒂斯。

在邪教集会期间，每个通往A7的门前都有一只须魔守卫。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_33a_g1"],encounterIds:["enc_33a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[128],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_33d",locationId:"loc_332",name:"A4. 家族墓穴",activation:{condition:{type:"always"},priority:0},skeleton:["十二个石棺被紧密地放置在墙壁深处的凹槽中。","每个棺材的石膏盖子上都雕刻着一位贵族的肖像，他们紧握着一个带有太阳标志的圣杯。","这些棺材里除了尘土和骨头之外，什么也没有。","卡萨兰特家族几位已故成员的灵魂被困在这座墓穴中。","他们以三团黑暗的雾气状恶灵和一个看起来像身穿板甲、骑士风范的英俊剃须男子虚幻形象的幽魂显现。"],flesh:`十二个石棺被紧密地放置在墙壁深处的凹槽中。每个棺材的石膏盖子上都雕刻着一位贵族的肖像，他们紧握着一个带有太阳标志的圣杯。这些棺材里除了尘土和骨头之外，什么也没有。

卡萨兰特家族几位已故成员的灵魂被困在这座墓穴中。他们以三团黑暗的雾气状恶灵和一个看起来像身穿板甲、骑士风范的英俊剃须男子虚幻形象的幽魂显现。这些不死生物会攻击任何活物，但无法离开墓穴或接近任何佩戴阿斯蒙蒂斯圣徽生物5英尺范围内。

这个鬼魂是Caladorn Cassalanter的唯一遗留之物，他是前蒙面领主，也是深水城的英雄。在展示了这样一个圣徽之后，鬼魂会引导角色前往其私人的墓穴（A4a）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_33d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[128],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果角色佩戴或展示Siamorphe的圣徽，鬼魂会停止攻击并撤销幽灵。"},{id:"scn_341",locationId:"loc_332",name:"A5. 邪教徒的密室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有以下特点：","六张木制床铺靠在南北墙上。","西墙上刻有四个深狱炼魔的浮雕。","疲倦的邪教徒在仪式后在这里睡觉，特别是如果他们喝了太多酒。","推动雕塑会导致秘密门向 A6 方向打开。"],flesh:`这个房间有以下特点：

六张木制床铺靠在南北墙上。

西墙上刻有四个深狱炼魔的浮雕。

疲倦的邪教徒在仪式后在这里睡觉，特别是如果他们喝了太多酒。

在其中一块浅浮雕后面有一扇秘密门，成功通过 DC 13 感知（察觉）检定即可发现。推动雕塑会导致秘密门向 A6 方向打开。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_341_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[128],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_343",locationId:"loc_332",name:"A6. 秘密圣器室",activation:{condition:{type:"or",clauses:[{type:"info_revealed",infoId:"info_341_g1"},{type:"info_revealed",infoId:"info_345_g1"}]},priority:0},skeleton:["这个房间被两扇秘密门隐藏起来，门内没有伪装，每扇门上的石制把手可以轻松地拉开。","房间包含以下特点：","靠南墙放着两个黑色的衣橱，门上雕刻着九角星。","一对高挑、苗条的镜子挂在西墙上，它们的石框上雕刻着蛇。","房间中央堆放着六桶用于邪教庆祝活动的葡萄酒。"],flesh:`这个房间被两扇秘密门隐藏起来，门内没有伪装，每扇门上的石制把手可以轻松地拉开。房间包含以下特点：

靠南墙放着两个黑色的衣橱，门上雕刻着九角星。

一对高挑、苗条的镜子挂在西墙上，它们的石框上雕刻着蛇。

房间中央堆放着六桶用于邪教庆祝活动的葡萄酒。

每个衣橱里都装有五套成人尺寸的邪教仪式服装：红色长袍、恶魔面具和刻有阿斯蒙蒂斯象征的木制护身符。

在邪教集会前一个小时，五名人类邪教徒在这里穿戴他们的仪式服装。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[129],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"}},{id:"scn_345",locationId:"loc_332",name:"A7. 仪式大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个大厅有一个30尺高的拱形天花板和一对20尺高的阳台（见A2）。","它的其他特点如下：","大厅西端有一座30尺高的石雕，石雕描绘了一个微笑的、长着小角和分蹄的恶魔倾向的长胡子男人。","在雕像底座上，一只从地板上伸出的石爪紧握着一个3尺深、9尺直径的石碗，里面充满了噼啪作响的火焰。","沿着铁烛台上闪烁的蜡烛排成的路径通向这座雕像。"],flesh:`这个大厅有一个30尺高的拱形天花板和一对20尺高的阳台（见A2）。它的其他特点如下：

大厅西端有一座30尺高的石雕，石雕描绘了一个微笑的、长着小角和分蹄的恶魔倾向的长胡子男人。在雕像底座上，一只从地板上伸出的石爪紧握着一个3尺深、9尺直径的石碗，里面充满了噼啪作响的火焰。沿着铁烛台上闪烁的蜡烛排成的路径通向这座雕像。

三名身穿红色长袍、戴着魔鬼面具、手持阿斯蒙蒂斯木质圣徽的人类邪教徒们跪在雕像前，狂热地吟唱着地狱颂歌。（在邪教集会期间，在场的邪教徒数量会大幅增加。）

雕像周围的墙壁上挂着大型挂毯，上面描绘着人类放荡的场景。（北面挂毯后面是一条粗糙的通道，通向A9。）

卡萨兰特人的仪式，为了拯救特伦齐奥和埃尔泽里娜，就在这里进行（见"特殊事件"）。

大约一半的邪教徒是贵族成员；其余的是被引入邪教以填补队伍的深水城平民。站在周围的是Willifort Crowelle、Tissina Khyret、莱巴·罗斯和詹达尔·切尔戈巴（参见"主要仆从"）。卡萨兰特夫人的六只小魔鬼（参见C25）隐形地栖息在雕像上。

这座雕像曾经描绘了 Siamorphe，但 Cassalanters 使用了 塑石术 法术将其重塑为他们畏惧的领主 阿斯蒙蒂斯 的形象。雕像脚下的巨大碗也是用 塑石术 法术制成的；当它被施以 侦测魔法 法术或类似的魔法时，会散发出强烈的咒法魔法气息。只要碗保持完整，魔法火焰就会从碗中喷发出来。任何进入火焰或在其内开始回合的生物都会受到 4d10 点火焰伤害。任何因这种伤害而降至 0 点生命值的生物都会变成灰烬。投入火焰的非魔法物品会被摧毁。

如果雕像被瓦解之锤击中，它会裂开并碎成碎片，同时坠落时打碎了碗。任何目击雕像被摧毁的邪教成员会受到11（2d10）点心灵伤害。

通过一次成功的 DC 13 感知（察觉）检定可以发现通往 A6 的密门。推动该部分墙壁会使其摆动打开。

雕像后面流淌着一条小溪，它通过1尺高、2尺宽的拱形涵洞进入和离开。`,spotlightRefs:[],presentNpcIds:["npc_496"],availableInfoIds:["info_345_g1"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_345_e1"],tone:"exploration",_meta:{sourcePages:[129],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`如果邪教在此声势浩大，三十名人类邪教徒们在雕像前排成整齐的队列，手持木杯向阿斯蒙蒂斯吟唱，而他们的领袖维克托罗·卡萨兰特（参见附录 B）将供品投入碗中。
他们的任务是确保其他邪教徒在阿玛利亚·卡萨兰特（参见附录 B）优雅地穿过人群时保持秩序，她手持金色酒壶，仪式性地将酒倒入邪教徒的杯中，为九狱之主干杯。`},{id:"scn_34a",locationId:"loc_332",name:"A8. 储物间",activation:{condition:{type:"always"},priority:0},skeleton:["在这个壁橱的后墙边，有一个未上锁的柜子，柜子前铺着一块黑色地毯。","柜子里有一个金质酒壶（价值125金币）和架子上摆放着木制酒杯。","这个柜子是空的，因为那个玻璃瓶和高脚杯正在A7被使用。"],flesh:`在这个壁橱的后墙边，有一个未上锁的柜子，柜子前铺着一块黑色地毯。柜子里有一个金质酒壶（价值125金币）和架子上摆放着木制酒杯。

这个柜子是空的，因为那个玻璃瓶和高脚杯正在A7被使用。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_34a_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[130],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_34c",locationId:"loc_332",name:"A9. 小溪与池塘",activation:{condition:{type:"always"},priority:0},skeleton:["一条地下小溪流经寺庙的西侧，然后流入这里的一个5尺深的池塘，之后蜿蜒向西北方向流去，并在泥沼地露出。"],flesh:"一条地下小溪流经寺庙的西侧，然后流入这里的一个5尺深的池塘，之后蜿蜒向西北方向流去，并在泥沼地露出。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[130],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_350",locationId:"loc_350",name:"大师的陨落",activation:{condition:{type:"always"},priority:0},skeleton:["贾拉克斯，布雷甘·达特的领袖，将加入领主联盟视为超越卢斯坎的权力之路。","作为一个名声不佳的城市的秘密领主，他在与其他北方城市就贸易和地区防御进行谈判时一直难以获得一席之地。","因此，他计划利用被盗的金子与莱拉·银手讨价还价，以求加入联盟，并将无冬城及其领主达格特·奈弗伯爵——贾拉克斯最激烈的政治对手——从集团中驱逐出去。","在前方的水中，一个巨大的身形向你快速游来。","随着它的接近，你认出它是一只有着青铜色鳞片的龙。"],flesh:`贾拉克斯，布雷甘·达特的领袖，将加入领主联盟视为超越卢斯坎的权力之路。作为一个名声不佳的城市的秘密领主，他在与其他北方城市就贸易和地区防御进行谈判时一直难以获得一席之地。因此，他计划利用被盗的金子与莱拉·银手讨价还价，以求加入联盟，并将无冬城及其领主达格特·奈弗伯爵——贾拉克斯最激烈的政治对手——从集团中驱逐出去。

泽利法恩（Zelifarn），一只青年青铜龙，最近搬进了深水港。他在过去的几个月里一直在港口底部搜寻沉船的宝藏，并将珍贵的饰品藏在一个隐蔽的水下洞穴中。最近，他注意到在抢眼人物的底部安装了一艘奇怪的船只。他试图与船员交涉，但未获成功，不过他对此非常好奇，想要了解更多。由于角色们似乎正前往与抢眼人物的会合地点，泽利法恩希望他们能在不引起怀疑的情况下尽可能地了解这艘水下船只。龙承诺在任务完成后再次与他们见面。作为信息的交换，他答应给队伍一个他最近找到的覆盖着藤壶的箱子。他还没有打开它，所以里面的内容对他来说还是未知的，但他能闻到里面有黄金的味道。

如果他们告诉他更多关于潜艇内容的信息，并且他相信他们说的是实话，他会给予他们承诺的奖励：一个带有生锈锁的旧箱子，可以通过一次成功的 DC 13 力量（运动）检定来砸开或撬开。箱子里有300枚银币，以及一个形如章鱼、镶嵌紫水晶眼睛的金色护身符(价值250金币)。

成功通过一次 DC 11 感知（察觉）检定可以发现箱盖上的一个秘密隔间。里面装有一个带塞的木制卷轴筒，里面放有一张 法术卷轴 的 en=Revivify。

这些模糊的身影是三位黑暗精灵枪手：菲尔莱科特·拉菲恩、克雷比格·马斯奇尔和Soluun Xibrindas（见附录 B）。如果这些地精中的任何一个已经死亡或因其他原因无法行动，请用地精精英战士替换他们。地精们利用雾的掩护，乘坐吸引眼球的的一艘划艇上岸。小艇系在码头的末端，位于心碎者和地狱使者之间。

这些布雷根·达尔特间谍正前往与莱拉·银手的秘密会面（见附录 B）。这位公开领主正在码头区的一个小巷里等待他们，身上披着en=Invisibility的效果。她在整个会面期间都保持隐形状态。

卢斯坎的哈珀间谍最近警告拉埃拉尔，贾拉克西尔可能在深水城。她用了一个en=Sending法术与他联系，安排这次会议，希望了解他的计划。角色们可以跟踪地精间谍到达会合点。如果地精意识到被跟踪，他们不会努力摆脱追踪者。如果他们遭到攻击，他们会分散并试图完成他们的任务，然后再返回抢眼人物。

如果战斗爆发且逃脱似乎不可能，黑暗精灵会战斗到死。一支由六名老兵组成的城市守卫巡逻队将在1d4分钟后到达进行逮捕。

其中一名布雷甘·达特的间谍携带着一封给拉瑞尔的信。信上盖有路斯坎的蜡封，是用贾拉克西尔优雅的手笔，用精灵语书写的。信的内容如下：

拉瑞尔并不惊讶贾拉克西尔缺乏亲自见她的勇气。她感谢暗精灵信使送来信件，提醒他们注意城市警卫和城市守卫，并返回深水城宫殿。暗精灵间谍返回他们来时的地方。

如果拉埃拉尔意识到角色们的存在，她会出现在他们面前，并询问他们与布雷甘·达尔特有什么业务。独自一人，远离政治漩涡，她的行为更像是一个冒险家而不是一个城市官员。

在她看来，路斯坎是一个贪婪的海盗国家，在任何情况下都不可信。作为交换，她承诺给他们5000金币的奖励和深水城的感激之情。

奇迹日是秋季最盛大的游行，贾拉克西尔希望海之女展会能成为其中的一部分。以扎多兹·佐德的身份，他在节日前一天访问了灵感之手之家，即深水城的贡德神庙，与负责组织游行的祭司们协调。他提出了一个详细的计划，将海之女展会的景点与神庙的奇异发明相结合——这个计划受到了热烈欢迎。

在奇迹日的前夕，工人们在码头上开始组装海洋少女嘉年华的马车和花车。第二天一大早，码头便热闹非凡，表演者们练习着他们的节目，笼中的生物被一只只卸下。在这个清爽多风的秋日高阳前的一个小时，海洋少女嘉年华前往灵感之手之家与贡德的崇拜者们及其精巧装置汇合。从那里，游行队伍正式出发，穿过深水城的街道，受到当地居民的欢呼。扎多兹·佐德担任大元帅，骑着一只用他的戴翠玛召唤羽饰召唤的彩虹羽毛的不飞鸟引领游行（见附录A）。对于贾拉索来说，这次游行是一个炫耀和受到欢呼的机会；他参与此活动并无其他隐秘动机。

当海之少女节游行穿过深水城时，角色们可以悄悄登上贾拉克西尔的一艘或多艘船。如果船上发生暴力事件，其船长会使用一个en=Sending法术联系贾拉克西尔。贾拉克西尔极其自信他的船员能够克服任何威胁，所以他不会在麻烦的第一个迹象时就匆忙去防御。只有当角色们造成相当大的损害时，他才会将他们的攻击视为一个挫折。

尽管在那个时候杀死角色们会很容易，但贾拉克西尔更愿意让他们为他工作。他监视着他们，但在奖励明显超过风险之前，他不会挑起敌意。

海之少女节游行在它开始的地方——码头结束了。当景点被重新装载到他们的船上时，游行的白熊逃脱了，在它的驯兽员能够围住它之前逃进了码头区。逃跑的熊的消息迅速传播开来，目击事件频繁发生。他希望在城市警卫发现并杀死熊之前将其找回，提供250金币或一瓶水下呼吸药水作为奖励。

角色们可以通过成功的 DC 16 智力（调查）或感知（生存）检定来追踪并围堵北极熊。无论检定成功或失败，每次尝试都代表1小时的搜索时间。随后，船长会兑现承诺的奖励。`,spotlightRefs:[],presentNpcIds:["npc_4ba","npc_4aa"],availableInfoIds:["info_350_g1"],encounterIds:[],treasureSlotIds:["trs_350_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[131],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},readAloud:`在前方的水中，一个巨大的身形向你快速游来。随着它的接近，你认出它是一只有着青铜色鳞片的龙。它突然停下，露出一个满是牙齿的微笑，然后抬起一只爪子轻轻挥动。"幸会！"它尖声说道。

一场浓雾意外地沿着水面升起，吞没了船只和码头。随着灰色的瘴气越来越浓，船只移动时发出的吱吱声变得越来越令人毛骨悚然。突然，你看到三个影子在雾中滑行，就像精灵穿过森林一样。它们从哪里来，要到哪里去，你并不知道。

致她永恒的陛下，莱拉·银手，斯托南特的女巫女王，北方女士，七姐妹之一，神秘女神的选择者，以及深水城的开放领主： 你的间谍值得称赞！放心，我在你们美丽的城市的存在纯属娱乐 - 尽管如果幸运眷顾我，这次访问可能会让我们双方都受益。 你的前任让辉煌之城陷入了一个可悲的状态，但在你短暂的任期内，你已经奇迹般地提振了市民的精神。我知道政治让你感到不快，所以请原谅我借此机会指出显而易见的事实。我们可以使我们的两个城市变得更强大，并且反击那个剥夺了沃特迪普人财富和尊严的人。我当然指的是那个肮脏的老鼠袋，达格特·奈弗梅伯。这是你昨天对来自米拉巴的使者描述他的话，不是吗？显然，我的间谍们也值得称赞！ 为何让尼弗伯尔逃脱他对路斯坎和深水城的罪行？我们能否成为盟友，如果不是朋友的话？这些问题困扰着我的梦境，正如我肯定困扰着你的梦境一样。 真诚地，J`,dmGuidance:`如果角色对海之女展会感兴趣，您可以使用以下一个或多个事件。
当角色们离开 抢眼人物 时，泽利法恩再次接近他们。
如果角色们监视海之女展会的船只，在他们监视的第一个晚上，他们会注意到码头上奇怪的活动：
如果角色们之前没有见过开放领主，她可能会以她的坦率方式和缺乏矫揉造作给他们留下深刻印象。
如果角色们询问关于信件的事情，她会展示给他们看，并询问他们对路斯坎加入领主联盟的看法。
如果角色们有类似的感觉，她足够信任他们，请求他们帮助寻找并确保尼弗伯尔勋爵隐藏的龙之宝藏。
如果角色们在船上逃脱了对抗，但留下了可以识别他们的目击者，布雷甘·达尔特需要几天时间才能追踪到他们（假设贾拉克西尔还没有见过他们）。
如果角色们给其中一个暗精灵船长留下了深刻印象，他会通过一个en=Sending法术联系他们并请求帮助。
如果角色们在4小时内找到北极熊，可以使用食物或成功的 DC 14 感知（动物驯养）检定将其引诱回"海之女郎节"。
如果角色们没有找到北极熊，城市守卫的成员会先找到并杀死它。
【本章去向】本章的落点是绯红马佩诺斯。常规推进：码头区的心碎者与地狱使者可直接走坡道登船（J1），旗舰抢眼人物锚在一英里外的港中，需借船、游泳（每人 DC 10 敏捷（隐匿））或水下载具（驾驶者 DC 12 敏捷（隐匿））接近；从抢眼人物 J30 扎多兹·佐德舱室地板下的秘密活板门（DC 15 感知（察觉），秘法锁敲三下压制1分钟或 DC 25 力量（运动））下潜艇 U1。三条侧线（友好的龙泽利法恩／雾夜密会与贾拉克西尔的信／奇迹之日游行与逃脱的白熊）都只在角色对海之女集市产生兴趣后按需取用。【衔接】贾拉索被拆穿后有两条出口：谈成（找回格洛尔之石与龙之金库，5000+5000 金币）或翻脸（击昏、剥装备，非魔法物品进 J16 军械库、魔法物品进潜艇 U4 的木箱暗格）；无论哪条，线索都收回莱拉·银手与奈弗伯尔的龙之宝藏这条主线（qst_main_dragonheist），接续下一章「冬日魔法」。`,mapGeometry:{imageRef:"adventure/WDH/ChapterSeven.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_351",locationId:"loc_350",name:"面对贾拉克斯莱",activation:{condition:{type:"always"},priority:0},skeleton:["当贾拉克斯得知角色们在他的一艘船上时，他安排以扎多兹·佐德的身份与他们见面。","如果他们拒绝，贾拉克斯命令他的船员将角色们扔到船外——或者如果必须的话，他会亲自处理这个工作。","如果他认为冒险家们值得信赖，贾拉克斯提议他们加入他对龙之金库的搜索。","他打算将金子还给莱拉·银手，扣除5000金币作为角色们帮助的报酬。","他还提供另外5000金币作为他们帮助找回阿盖尔伦的龙杖的报酬。"],flesh:`当贾拉克斯得知角色们在他的一艘船上时，他安排以扎多兹·佐德的身份与他们见面。如果他们拒绝，贾拉克斯命令他的船员将角色们扔到船外——或者如果必须的话，他会亲自处理这个工作。

如果他认为冒险家们值得信赖，贾拉克斯提议他们加入他对龙之金库的搜索。他打算将金子还给莱拉·银手，扣除5000金币作为角色们帮助的报酬。他还提供另外5000金币作为他们帮助找回阿盖尔伦的龙杖的报酬。一旦金子安全，他会给角色们他们的份额。

他会将他们的装备存放在抢眼人物上的J16，除了任何魔法物品。那些他会藏在绯红马佩诺斯上的U4，这是他的秘密潜艇。

在贾拉克斯被杀这种不太可能发生的事件中，布雷甘·达特会在十天内将他复活。一旦他恢复行动，他会尝试追回任何被偷走的装备。

角色们可以通过以下两个小节中描述的方式阻碍贾拉克斯。

贾拉克斯船只上的船首像(J8)会在卓尔船员周围制造幻象，使他们看起来像人类。如果船首像被摧毁，那艘船上的卓尔会留在甲板下，以确保他们不会引起不必要的注意。

在船只沉没的情况下，这种任意的破坏也可能涉及城市守卫，特别是如果这种行为导致人员溺水。`,spotlightRefs:[],presentNpcIds:["npc_4ba"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[131],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`当角色们调查海之女集市时，他们可能会遇到贾拉克斯，特别是如果他们采取破门而入的方式，冲进旅行嘉年华的船只。
如果角色们接受，贾拉克斯会履行他协议的承诺。
如果角色们不同意贾拉索的条款，或者如果他们袭击他，他会尝试将他们击昏迷，并将他们赤身裸体、失去装备地丢在码头区的沟渠中。
如果角色们击沉或偷走了他的帆船或绯红马佩诺斯，贾拉克斯会指派他的船员找出问题所在。`},{id:"scn_355",locationId:"loc_350",name:"海之少女集市",activation:{condition:{type:"always"},priority:0},skeleton:["贾拉索·班瑞的海上嘉年华由三艘船只在剑海岸上下航行。","抢眼人物是贾拉克斯的旗舰，非常显眼。","在其下方装备的是绯红马佩诺斯，一艘兰坦尼斯设计的潜水艇。","第二艘船，心碎者，主要用于运输表演者、奇异生物和四轮货车。","第三艘船，地狱使者，用于运输音乐家和装饰性的彩车。"],flesh:`贾拉索·班瑞的海上嘉年华由三艘船只在剑海岸上下航行。抢眼人物是贾拉克斯的旗舰，非常显眼。在其下方装备的是绯红马佩诺斯，一艘兰坦尼斯设计的潜水艇。第二艘船，心碎者，主要用于运输表演者、奇异生物和四轮货车。第三艘船，地狱使者，用于运输音乐家和装饰性的彩车。心碎者和地狱使者目前停泊在码头，而抢眼人物则锚定在港口。

这三艘船都由卓尔族组成，他们通过魔法伪装成人类。尽管他们伪装了，卓尔族仍然具有日光敏感特性。

心碎者和地狱使者停泊在码头区同一个码头的对面。角色们只需从码头走上坡道到达任一船只的J1区域。码头非常繁忙，以至于没有人注意到角色们，直到他们登上一艘船只。

贾拉克斯的旗舰停泊在深水港，距离他的其他船只一英里远。要到达抢眼人物，角色们必须使用另一艘船只、游泳或飞行来前往。

角色们可以通过审问船员和嘉年华表演者来获取有价值的信息。

尽管扎多兹·佐德（贾拉索·班瑞）指挥着整个舰队，但每艘船都有自己的船长：一个伪装成身材苗条、穿着考究的人类的布雷甘·达特卓尔魔法师。这些船长知道贾拉克斯的计划。他们通过短讯术法术相互沟通以及与贾拉克斯沟通，他们会准备这个法术而不是飞行术。

Velgos Ephezzrin以人类身份Fergus Crabwater的伪装担任地狱使者的船长。他非常喜欢葡萄酒，角色们在用餐时与他互动的魅力检定中有优势。

Tylan Ilueph以人类身份Klarr Besham的伪装担任心碎者的船长。他是一个没有幽默感的严厉监工，他的狼蛛魔宠总是在他的肩膀上。

Llorath Pharn以人类身份Tarwind Arryhook的伪装担任抢眼人物的船长。他喜欢赌博游戏，无法抗拒一个好的赌注。

一个成功的 DC 15 魅力（欺瞒或说服）检定，并提到札杜斯·札德的名字，足以获得与船长的会面机会。

"海之女集市及其所有船只都在卢斯坎的扎多兹·佐德船长的指挥下。"（除非被魔法强迫，否则船只船长不会透露佐德的真实身份。）

"佐德在抢眼人物上有一间小屋，他经常和玛戈·维丽达和卡菲塔·穆赞，两位集市的明星表演者，在那里度过很多时间。"

"一年前，海之女集市访问了岛国兰坦，在那里佐德获得了一艘名为绯红马佩诺斯的潜水艇。潜水艇装备在{@i 引人注目。}下方。" "佐德有特工正在寻找一个叫做格洛尔之石的神器，它指向一个叫做龙之金库的地方。"（出于安全考虑，船长们没有被告知任务的进展。）

"佐德在深水城有卓尔间谍——菲尔莱科特·拉菲恩、克雷比格·马斯奇尔和Soluun Xibrindas。他们都携带兰坦尼斯火器。"

"我们的伪装是由固定在每艘船船首的魔法船首像所驱动的。"

抢眼人物、心碎者和地狱使者每艘船上都有二十名水手：三名卓尔精英武者（大副）和十七名卓尔，当他们在船上时，他们都通过魔法伪装成苗条的人类。他们都是布雷甘·达特的忠诚成员，并且都知道扎多兹·佐德是伪装的贾拉索·班瑞。他们对绯红马佩诺斯或贾拉克斯的计划一无所知。

船员们接到命令不得与陌生人或客人交往。提出问题的角色可以了解到以下信息：

"扎多兹·佐德是海之女集市的主人。如果你想见他，就去找一位船只船长谈谈。"（除非被魔法强迫，否则水手不会透露佐德的真实身份。）

"海之女集市以卢斯坎为基地。"

大多数嘉年华的表演者和工作人员都是经过训练以执行一些任务或特技的 平民。（表演者擅长表演技能。）他们对大多数事情一无所知，但并非完全无知。通过一次成功的 DC 10 魅力检定，角色可以哄骗或诱使一名嘉年华工作人员透露以下一条信息：

"扎多兹·佐德使用魔法从抢眼人物到其他船只。我从未见过他乘坐小艇。"

"水手们使用奇怪的手势相互交流。"（布雷甘·达特的成员使用卓尔手语。）

"所有的水手都不喜欢阳光。"

"你有没有注意到水手们有一丝精灵口音？"

"所有的船员都是男性。非常奇怪。"

任何花费1小时观察船只船员的角色可以进行一次DC 15感知（感知）检定。检定成功后，角色会注意到大多数船员在说话时带有精灵口音，并在他们认为没人注意时交换手势。卓尔角色会认出这些手势是卓尔手语。

船只船首像的魔法变化（见J8）无法经受住物理检查，这意味着与船员互动的角色有机会注意到这个幻象。例如，一个抓住水手耳朵的角色会很快通过触摸意识到耳朵是尖的，而不是看起来的圆形。此外，任何登上这些船只的卓尔角色会立即因为船首像的魔法而变成相同性别、身高和体重的人类的幻象形态。

如果入侵者被发现或在其中一艘船上发生战斗，整个船员（一名卓尔魔法师船长，三名卓尔精英武者和十七名卓尔）会动员起来对抗威胁。卓尔族更愿意俘虏敌人或使敌人昏迷，而不是杀死他们。俘虏被扔进禁闭室(J15)，直到贾拉克斯决定如何处理他们，他们的装备被存放在军械库(J16)。

船舱、货舱和通道的天花板高度为8尺，连接它们的门高度为6尺。

除非特别说明，门通常由木头制成。角色可以通过使用盗贼工具成功通过一项DC 15敏捷检定来撬开门锁，或者通过成功通过一项DC 15力量（运动）检定来强行打开门。船长拥有船上所有上锁门的钥匙。

每艘船都配备了一个可以通过扳动杆来升降的电梯平台，以方便装卸货物。当不使用时，这个平台会停留在每艘船的最底层货舱中。更多信息请参见货舱的描述。

甲板下的区域由悬挂的灯笼提供明亮的照明。

无需属性检定即可攀爬索具。

抢眼人物、心碎者和地狱使者具有相同的一般配置和居住者，对应于地图7.1。例外情况在区域描述和地图上注明。

三名水手({卓尔})和一名大副({卓尔精英武者})始终在甲板上。

四艘划艇在这个甲板上堆叠在一起。使用绳索和滑轮将这些小船吊入水中或吊出水面。

这个杂乱的小屋充满了柏油的气味，包含以下特点：

右舷墙边固定着用网固定的沥青桶，工具安装在上方。

左舷墙边，紧卷的白色帆布堆叠在一起，并用绳子固定。

这间小屋有以下特点：

两个吊床彼此垂直悬挂。两个休息中的高级战士（卓尔精英武者）在吊床上放松。

三个胡桃木箱放在吊床下。箱子是未上锁的。

每个箱子里装有两套普通服装，一个装满酒的水袋，以及一个袋子，里面装有3d6金币和4d10银币。

这些舱室每个都装有四个吊床。每个舱室中都有一个休息中的水手（卓尔）在休息。

这个狭小的舱室充满了热气和诱人的香味，包含以下特点：

一个忙碌的厨师（平民）一只手拿着煎锅，另一只手在小炉子上搅拌着锅。

脏碗碟堆在洗手盆里。

一张桌子上摆放着各种准备阶段的食物。

厨师太忙了，没有时间与角色交谈，如果遭到攻击，他会迅速大声呼救，引起船员的注意。

固定在墙上的是烹饪原料架，包括装有香料的罐子、面粉袋和猪油桶。

船员们整天在这里用餐。在任何给定时间，舱室包含以下内容：

六名水手（卓尔）正在享用一餐。

在心碎者或地狱使者上，水手们加入了1d4名狂欢者（平民）。设施包括一张桌子、十张小凳子和两个橡木橱柜，里面装有盘子、酒杯和餐具。

前甲板位于主甲板上的水手们（J1）、后甲板下层甲板（J9）和后甲板上层甲板（J11）的视线范围内。

一个镀金的女性精灵木制船首像从船头伸出，双手向前伸展，长发飘逸。由于船首像未上色，无法辨别它描绘的是一个卓尔精灵，但仔细观察船首像并通过DC 13感知（观察）检定的角色会注意到其额头上有一个微小的浮雕蜘蛛。

一个侦测魔法法术或类似的魔法可以揭示船首像周围的幻象魔法光环——这种效果使得船上的所有黑暗精灵看起来像人类。黑暗精灵的性别、身高和体重保持不变；幻象只影响外观，不影响声音或举止。对伪装的黑暗精灵施放解除魔法法术会使周围的幻象暂时消失。一个反魔法场法术可以抑制船首像在领域内的魔法。摧毁船首像将在整个船上结束这种效果。船首像的AC为15，有50点生命值，并对毒素和心灵伤害免疫。

这层甲板有以下特点：

这里始终有两名水手（卓尔）在场。

左舷和右舷的楼梯通向后甲板上层甲板（J11）和船长的舵轮。

船锚可以通过这层甲板操作。一只生物可以在10轮（1分钟）内升起或降下它，两只生物可以在5轮内，三只生物可以在3轮内，四只生物可以在1轮内完成。

无论角色们在哪艘船上，这个豪华的舱室包含以下特点：

时尚的紫色窗帘覆盖着可以俯瞰海港的大窗户。

在中央柱子的一侧是一张舒适的床，它的橡木床头板雕刻成类似克拉肯的形状。中央柱子的对面放着一张橡木餐桌，周围环绕着六把高背椅。

其他的家具包括一个带有玻璃门的橱柜，里面摆放着书架上的书籍，一个用挂锁封闭的木制箱子，以及一张小写字台。

每艘船的船长（卓尔魔法师）通常可以在这里找到，同时会有一名秘偶（见附录 B）充当侍从和保镖。

船长很乐意与要求会见他的角色见面，主要是为了判断他们是否构成威胁。

每位船长的腰带上都系着一个钥匙环，上面挂着许多钥匙。其中一把钥匙可以打开这间舱室的箱子；其他钥匙可以打开船长船上的任何锁着的门。

每位船长都收藏了一些普通的书籍。每位船长都将自己的法术书藏在底架下的一个秘密空间中，只有通过一次成功的 DC 14 感知（察觉）检定才能找到。法术书中包含以下法术：寒冰锥, 操控水体, 法术反制, 侦测魔法, 火球术, 飞行术, 高等隐形术, 冰风暴, 法师护甲, 魔法飞弹, 迷踪步, 拉瑞心灵联结, 短讯术, 护盾术, 暗示术, 雷鸣波, 水下呼吸, 和 蛛网术。

一个角色使用盗贼工具进行成功的DC 20敏捷检定可以打开挂锁，或者可以用成功的DC 20力量（运动）检定将其撬开。箱子里有折叠的衣服，一个装有250金币的袋子，一个丝质小袋中的1d6颗珍珠（每颗价值100金币），一瓶水下呼吸药水，以及一瓶优质葡萄酒（价值25金币），酒瓶上有一个眼罩形状的标签和通用语中的名字"独眼杰克斯"。

这艘船最高的甲板位于前甲板（J8）、主甲板（J1）和后甲板下层甲板（J9）的视线范围内。它有以下特点：

船舵位于甲板的顶部。

这里始终有两名水手（卓尔）驻守。

如果船只配备完整的船员出航，一个擅长水上交通工具的角色可以站在舵轮处并驾驶船只。

这个货舱包含以下特点：

天花板上的大格栅门打开，允许货物通过货物电梯进出这个货舱。15尺乘10尺的地面部分打开，露出下层货舱（在抢眼人物或地狱使者上是J17；在心碎者上是J19）。堆到天花板的板条箱和桶被固定，确保它们不会移动。这些容器装有船员和随行人员的食物和水。

要激活电梯平台，一个生物必须站在平台上，并使用动作拉杆上下移动。平台不能升得比主甲板（J1）更高，也不能降得比船的最低货舱更深。

当地板上的活板门在货物电梯升起时打开。如果平台升到J1，活板门会保持打开状态，直到电梯平台返回该区域或J17（在心碎者上为J19）。

狭小的船头充满了尿味。厕所——每个都不过是一张带有通向下面水体的洞的长凳座位——是这个房间唯一的特点。

八个狭窄的舱室配备了吊床，每张吊床上都有一个休息中的嘉年华表演者或工作人员（平民）。当随行人员遇到入侵者时，他们会呼救，并且只有在自卫时才会战斗。

一扇由交错铁条制成并配有坚固锁具的门封住了这间小屋，屋内唯一的设施是一个便桶。船长持有这扇门的钥匙。使用盗贼工具的角色可以尝试解锁，需要成功通过一个 DC 17 的敏捷检定（在牢房内进行此检定会受到劣势影响）。成功通过一个 DC 23 的力量（运动）检定可以强行打开这扇门。该门拥有 AC 19，伤害阈值为 10，27 点生命值，并且对毒素和心灵伤害免疫。

在争吵中打了一个同伴后，有25一名水手（卓尔）被关在囚笼里。

黑暗精灵在船上航行时将他们的武器和盔甲存放在这里。这个舱室有以下特点：

空的武器架和盔甲挂钩排列在墙上。

楼梯通向船的腹部。

在抢眼人物号上的军械库中，还有一个750磅重的铸铁保险箱，配备了密码锁。贾拉索和他的副官们（菲尔莱科特·拉菲恩、克雷比格·马斯奇尔和Soluun Xibrindas）知道密码：1-20-59。一个角色可以通过一次成功的DC 25敏捷（调查）检定使用盗贼工具来撬开锁。每次尝试耗时1分钟。一个敲击术法术或类似的魔法也可以打开保险箱，里面有三把手枪、十二包皮革包裹的烟雾粉末、三个皮革小袋，每个袋子装有二十颗子弹，以及一个装有250金币的袋子。

楼梯通向抢眼人物或地狱使者上的J17，或者通向心碎者上的J20。

仅限吸引眼球者和地狱使者

海之少女嘉年华的奇幻花车被拆解并保存在地狱火号的底层货舱中，而抢眼人物号则存放着破损和实验性质的花车部件。（关于心碎者号底层货舱的描述，请参见J19。）

如果货梯平台在降到这个区域时，有生物位于平台降落的15英尺乘10英尺空间内，每个这些生物必须成功通过一次 DC 10 敏捷豁免，否则将受到11 (2d10) 点钝击伤害，并被击倒 倒地 和 束缚，直到平台升起。成功通过豁免的生物可以移动到一个它选择的与电梯平台相邻的空间，且不会引发借机攻击。

在安排游行的日子，地狱使者的货舱大部分被清空，除了空的储物箱。在其他日子里，它包含以下物品：

装满音乐家、舞者、杂技演员和小丑服装的各种箱子

装有五彩纸屑、闪粉和人体彩绘颜料的桶

成捆的木制高跷（4尺和8尺高）

纸制巨眼怪物模型安装在10尺高的杆子上

一个顶部装饰着真人大小的机械独角兽的彩车，由一个挥舞两把弯刀的机械黑暗精灵游侠驾驶（当彩车下面的杠杆被拉动时，独角兽会放屁形成一个15尺的五彩纸屑锥形区域，它可以这样做两次，之后需要重新装填）

一个顶部装饰有两个机械地精的彩车，当它们被上发条时会反复互相打拳

一个装饰有机械装甲骑士与机械深狱炼魔战斗的彩车（当它被上发条时，骑士挥舞着剑劈砍，而恶魔则拍打着翅膀）

放气的黑色、蓝色、绿色、红色和白色龙形气球（当它们充满空气时会神奇地漂浮，充气时的大小为巨型）

一个巨大的泰拉斯奎木偶，供五名木偶操纵者操作

装饰有流苏和彩绘有彩色图案及生物的货车篷布

装饰鲜艳的马和牛的挽具

Eyecatcher的货舱后部由四只被涂上鲜艳颜色的巨大蜘蛛守护。这些蜘蛛自孵化以来就由Jarlaxle训练，它们可以通过保持完全静止来伪装成无生命的彩车装饰，直到它们发动攻击。它们对黑暗精灵没有敌意，尽管船上有幻象魔法，它们仍能感知到黑暗精灵的真实本性。感知（Wisdom）被动检定达到17或更高的角色会在这些生物攻击前意识到蜘蛛是威胁。

这里存放了各种损坏和未完成的景点，包括以下内容：

一些损坏的发条怪物

半成品或损坏的货车篷布和木偶

一个放气的超大型呋噜气球，上面有一个小裂口（一个修复戏法可以修复损伤）

一个未装饰的彩车，顶部是一个未上漆的机械金龙，由帆布覆盖在木制框架上

这个机械金龙装置有一个装有易燃气体的玻璃罐，设计上是当拉动杠杆时会喷火。拉动杠杆会使罐子破裂并使龙着火。如果火势在这里爆发并且没有及时扑灭，1分钟后它会蔓延到货舱的其他部分。船上其他部分的船员5分钟后会察觉到烟雾，到那时货舱已经成为一个猛烈的火海。船员们会先专注于拯救潜艇（如果它还连接着），然后才会弃船。

仅限吸引眼球者和地狱使者

这些舱室中的每一个都包含用于装饰彩车的材料：

闪光粉、羽毛、布料、纸张、剪刀、缝纫针、彩色线卷以及胶水瓶散落在小桌子上。

游行彩车的图纸被钉在墙上，旁边摆放着各种工具。

仅限Heartbreaker

心碎者的货舱充满了野兽的气味，当角色们接近生物围栏（J20）时，气味变得更加强烈。在游行日，货舱基本上是空的。在其他日子里，它包含用于拉着异国情调生物穿过拥挤街道的拆卸式货车（轴、轮子和笼子）。组装和修理货车所需的工具挂在墙上的挂钩上。

如果货梯平台在降到这个区域时，有生物位于平台降落的15英尺乘10英尺空间内，每个这些生物必须成功通过一次 DC 10 敏捷豁免，否则将受到11 (2d10) 点钝击伤害，并被击倒 倒地 和 束缚，直到平台升起。成功通过豁免的生物可以移动到一个它选择的与电梯平台相邻的空间，且不会引发借机攻击。

仅限Heartbreaker

这个货舱部分充满了动物的麝香和废物的气味。当它们不乘坐笼式货车在城市街道上游行时，海之少女节的怪物景点在封闭的围栏中咆哮、咯咯笑、跺脚、喷鼻息和吼叫。两名驯兽员（擅长动物驯养的平民）手提食物桶，轻声对这些生物说话，从一间围栏走到另一间。

每个围栏实际上是一个配有滑动门的牢房，可以从外部双重锁定。在J19组装的马车可以倒车到任何围栏。当围栏门打开时，一个成功的DC 15智慧（动物驯养）检定可以诱使笼中的生物进入马车的后部。如果给生物提供食物，这个检定将具有优势。如果检定失败且差值达到5或更多，生物将逃脱、恐慌，并开始无差别地攻击，试图赢得自由。任何这样的骚乱都会提醒附近的动物驯养师或其他船员。

以下生物被关在十二个围栏里：

死亡犬和巨型秃鹫是邪恶的，巨型秃鹫能理解通用语（尽管它不会说）。它们抓住任何逃脱的机会，并在其他生物的痛苦中找到乐趣。

仅限Heartbreaker

这个小屋为在J20工作的两名驯兽师提供了吊床。如果这些生物被带去游行，驯兽师们会在吊床上睡觉。

仅限Heartbreaker

为J20中的生物储备的物资和食物存放在这里：

挂在天花板上的大块肉使这个小屋散发出一种令人作呕的甜味。

铁锹、绳索、锁链、水桶、一捆捆干草以及几个大箱子被推到了墙边。

这些箱子里装着各种地衣、苔藓和真菌，用于喂食草食性生物。成功的 DC 20 智力（自然）检定可以识别这些植物为幽暗地域的原生物种，而动物肉块则是深地洛斯兽——一种由幽暗地域的卓尔饲养的类似牛的生物，主要用来提供肉食。

只有Heartbreaker和Hellraiser

没有船长的许可，任何人都不允许进入这里，守卫们接到命令，发现入侵者立即格杀勿论。这个区域包含以下特点：

两名黑暗精灵枪手（见附录 B）在J27外站岗。

货舱里堆满了装有麦芽酒和淡水的木桶。这些木桶被固定在地板上的货物网固定住。

黑暗精灵利用分隔这个区域的墙壁作为掩护进行射击。他们誓死战斗，以阻止入侵者接近J27。

这些柜子里放着拖把、刷子、水桶和用于擦洗甲板的肥皂。

只有Heartbreaker和Hellraiser

这两个舱室是J23中黑暗精灵枪手的住处。每个舱室包含以下特点：

门对面的墙上挂着一个吊床。

一个木制人体模型和一个胡桃木箱子靠在门边的墙上。

人体模型兼作盔甲架，尽管目前没有盔甲装饰它们。

每个箱子里装有两套普通服装，一个装满酒的水袋，以及一个袋子，里面装有3d6金币和4d10银币。

只有Heartbreaker和Hellraiser

沿着这条走廊排列着八个储物柜，由海洋少女集市的工人和表演者用作储物柜。里面挂着旅行服装和外套，以及靴子和鞋子。

只有Heartbreaker和Hellraiser

这扇通向前舱的门被锁上了，门外侧钉着一个木牌，上面用通用语和精灵语写着"限制区域。禁止入内。"这个房间包含以下特点：

二十个木桶被绳索固定在墙上。每个桶上都有一个纸标签，上面用通用语和精灵语写着"火药！易爆！"。

桶上方的架子上排列着木盒。

架子上的十个木盒子，每个盒子里都装有一百发手枪子弹。

每个桶装有五磅的发烟粉（见附录A）。当一个桶爆炸时，所有在影响区域内的其他桶也会随之爆炸。如果一半的桶同时爆炸，爆炸会在船头吹出一个足够大的洞，使船沉没。如果二十个桶同时爆炸，爆炸会将船的一半炸成碎片，震碎码头区的所有窗户，并且声音可以传到远处的田野区。

仅限吸引眼球者

这些储物柜的门从外面被锁上了。

这个衣橱与贾拉克斯的舱室（J30）相邻，里面存放着为每个季节和场合量身定制的服装和斗篷，以及毛巾。靠后墙立着一个戴眼罩的木制人体模特。沿着一面墙的秘密门可以通过一次成功的 DC 15 感知（察觉）检定发现。

这个橱柜紧邻客舱（J29），里面挂着六件礼服和两件柔软的毛皮斗篷，钩子上挂着几顶女帽，架子上放着精美的毛巾和鞋子。如果能成功通过 DC 15 感知（观察）检定，可以发现一面墙上的秘密门。

仅限吸引眼球者

这个装饰豪华的舱室是为特别嘉宾准备的。它包含一张大床、一个木制箱子、一个独立式镜子和一个上面放着里拉琴的梳妆台。空酒瓶随着船的移动在地板上滚来滚去。床上躺着三个咯咯笑的身影：

贾拉索·班瑞（见附录 B），化身为扎多兹·佐德（如果他在组织奇迹日游行；见"特别事件"）。

Margo Verida，一位女性阿姆尼亚人类吟游诗人（见附录 B）

Khafeyta Murzan，一位女性穆尔霍兰迪人类剑客（见附录 B）

Margo和Khafeyta在过去一年里都加入了海洋少女集市——Margo作为抒情诗人，Khafeyta作为杂技演员。贾拉克塞尔对这两位女性都产生了浪漫兴趣，而这两人也彼此相爱。

Margo和Khafeyta很有礼貌但言辞简洁。两人都是中立善良。如果遭到攻击，她们会拿起武器和其他物品，并通过一个秘密门逃跑（见下文）。

如果与Jarlaxle分开并被迫透露有关他们主人的信息，Margo和Khafeyta会透露以下一些或全部事实：

扎多兹·佐德是一个伪装成贾拉克塞尔的黑暗精灵。

海洋少女集市的每艘船都由黑暗精灵组成船员。船的船首像对黑暗精灵施加幻术，使他们看起来像人类。

贾拉克塞尔希望贵族联盟承认他的城市，路斯坎，为新成员，并希望将无冬城驱逐出联盟。

一年前，海洋少女集市访问了岛屿国家兰坦，在那里贾拉克塞尔获得了一艘兰坦潜艇和几个发条仆人。

通过一次成功的 DC 15 感知（察觉）检定，可以发现一扇通往步入式衣橱的密门（J28）。

Margo的里拉琴价值30金币。床脚的未上锁箱子里装有四套服装和一只珠宝盒，珠宝盒内含有六个金手镯（每个价值25金币）、两个钻戒（每个价值250金币）以及一条珍珠项链（价值500金币）。

仅限吸引眼球者

这间舱室的门被锁上了。如果除了贾拉克塞尔之外的任何人转动任一扇门的把手，一个魔嘴术法术就会被激活并大声喊道：'以罗丝的牙齿为誓，你们没有礼貌吗？'声音足够大，足以让贾拉克塞尔（如果他在J29）听到，他会过来调查。

这个房间包含以下特点：

薰衣草的甜美香味弥漫整个舱室。（这种香味是由魔法创造的，可以被驱散。）

一个秘偶（见附录 B）站在国际象棋桌旁的一个小壁龛里。桌上的一个空酒瓶用通用语标着"独眼杰克"。

在紫色帘子后面，床被柔软的蓝色毯子和相配的枕头覆盖着。床边有一个有爪形脚的木制箱子。

这个秘偶作为仆人服侍贾拉克塞尔，它会毫无疑问地服从主人的命令。如果没有命令，它会攻击任何发现地板上的陷阱门的人（见下文）。

任何搜查小屋并在 DC 15感知检定中成功的角色都会发现一扇通往步入式衣橱的秘密门（J28）以及地板上的一个秘密活板门。

活板门上被施放了秘法锁法术，但敲击它三次可以压制该法术1分钟。另外，通过一次成功的DC 25力量（运动）检定也可以强行打开活板门。

陷阱门下方，一个金属梯子向下延伸至一个10尺长、3尺直径的钢制管道底部，管道底部有一个圆形金属舱口。舱口可以通过转动其阀门轮打开，这将通往绯红马佩诺斯上的U1区域。如果潜艇没有靠岸，这个区域会被魔法加压以防止水进入船内。

这个国际象棋套装采用翡翠制成，棋子形状像黑暗精灵，价值2500金币。

仅限吸引眼球者

贾拉克塞尔经常在这里训练。这个空间包含以下特点：

绳子像蜘蛛网一样遍布整个区域。

四把刺剑挂在桅杆上的木制架子上。

房间里散布着五个由木头、稻草和帆布制成的破旧人体模型。每个模型都拿着一把木剑和一面木盾。

飞镖靶安装在一面墙上，上面插着一把闪闪发光的匕首。

作为附赠动作，贾拉克斯可以命令五个魔法模特活化并攻击他选择的单一目标。每个模特拥有活化盔甲的具体数值。受到损伤的模特将变得无生命，直到贾拉克斯使用另一个附赠动作来重新活化它们。被修复术法术咒语目标的模特恢复1点生命值。

飞镖靶上的匕首是一把+1 匕首。

绳索使得该区域的所有部分变为3。作为其移动的一部分，生物可以通过成功的DC 15敏捷（杂技）检定绕过绳索，从而在该生物回合结束前消除绳索对其的影响。

仅限吸引眼球者

这扇门被一个外部的钩锁锁住。当门被打开时，蒸汽的云雾从门外的区域涌出。这些蒸汽是通过魔法产生的，可以通过成功施放解除魔法（DC 14）来驱散。房间里只有一张木制长凳。

蒸汽在第一小时内不会产生不良影响。在这房间内每多待一小时，生物必须成功通过一次 DC 11 体质豁免检定，否则会获得一级 力竭。对火焰伤害免疫的生物自动通过此检定。`,spotlightRefs:[],presentNpcIds:["npc_4b9","npc_4c6","npc_4aa","npc_49a","npc_4d6"],availableInfoIds:["info_355_g1","info_355_g2","info_355_g3","info_355_g4","info_355_g5","info_355_g6","info_355_g7","info_355_g8","info_355_g9","info_355_g10","info_355_g11","info_355_g12"],encounterIds:["enc_355"],treasureSlotIds:["trs_355_0","trs_355_1","trs_355_2","trs_355_5","trs_355_6"],eventIds:["evt_355_e1","evt_355_e2","evt_355_e3","evt_355_e4","evt_355_e5"],tone:"tension",_meta:{sourcePages:[132],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`如果角色们乘坐船员熟知的船只接近，例如来自贾拉克斯其他船只的小艇，角色们在甲板上被看到之前不会引起怀疑。
如果角色们乘坐未知的船只接近，抢眼人物的船员会立即通知贾拉克斯。
如果角色们使用水下交通工具接近 抢眼人物，例如 格林达·加洛斯 的 夸力许装置（见第4章），驾驶的角色必须成功通过一次 DC 12 敏捷（隐匿）检定，以避免被 绯红马佩诺斯 的船员发现。
如果角色们通过游泳接近，他们每个人都必须成功通过一次 DC 10 敏捷（隐匿）检定，以避免被 抢眼人物 的船员发现。
如果角色们捕获了一名船长并成功通过一个 DC 15 魅力（恐吓）检定，他们通过提出正确的问题将了解到以下信息：
每艘船都具有帆船（参见城主指南第5章的空载和水载载具表）的统计数据，以及与以下小节中描述的特性。
如果角色们登上船只并要求与船长交谈，大副会先询问他们的来意，然后才考虑是否打扰他。
如果角色们表现得礼貌，船长会邀请他们与他共进一餐。
如果角色们变得烦人或具有威胁性，他会命令他们立即离开船只，如果他们拒绝，他会发出警报。
如果角色们被捕并且被剥夺了装备，他们的非魔法物品也会被存放在这里。`,randomTableIds:["tbl_355_0"],mapGeometry:{imageRef:"adventure/WDH/Eyecatcher.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_3a3",locationId:"loc_3a3",name:"绯红马佩诺斯",activation:{condition:{type:"always"},priority:0},skeleton:["贾拉克塞尔的潜艇，绯红马佩诺斯，安装在抢眼人物下方，只能被水下的生物看到。","如果抢眼人物遭到攻击，贾拉克塞尔会撤退到这里。","隐藏贾拉克塞尔船上黑暗精灵真实面貌的魔法并不适用于绯红马佩诺斯。","如果黑暗精灵没有得到他们想要的答案，他们会发起攻击。","任何附近的黑暗精灵如果听到打斗声将会进行调查，并联手击退登船者。"],flesh:`贾拉克塞尔的潜艇，绯红马佩诺斯，安装在抢眼人物下方，只能被水下的生物看到。如果抢眼人物遭到攻击，贾拉克塞尔会撤退到这里。

隐藏贾拉克塞尔船上黑暗精灵真实面貌的魔法并不适用于绯红马佩诺斯。如果黑暗精灵没有得到他们想要的答案，他们会发起攻击。任何附近的黑暗精灵如果听到打斗声将会进行调查，并联手击退登船者。

岩石侏儒工程师负责维护和操作绯红马佩诺斯。这些侏儒是学徒法师（见附录 B），有以下变化：

这些侏儒是中立善良的。

它们体型为小型，每个有7点生命值（2d6）。

他们具有以下种族特性：他们在对抗魔法的所有感知、感知和魅力豁免检定上具有优势。他们的步行速度是25尺。他们具有60尺范围内的暗视能力。他们说通用语和侏儒语。

侏儒们对潜艇了解甚深，但对其他事物知之甚少。他们受到了贾拉索的良好对待，但一次成功的DC 15魅力（威吓）检定或100金币及以上的贿赂可以说服一个侏儒交出他的主钥匙，破坏引擎，或按照角色的指示驾驶潜艇。

绯红马佩诺斯的护甲等级为20，有300点生命值，伤害阈值为15，并对毒素和心灵伤害免疫。当潜艇的生命值降至0点时，其结构完整性会失效，随后潜艇会进水并沉没。如果保持完好，潜艇的价值为15000金币，操作它至少需要一名驾驶员和一名工程师。它的最大速度为每小时2英里，可以搭载多达10名乘客以及2吨货物。

这艘潜艇具有以下一般特点：

内部空间没有照明。（黑暗精灵和侏儒依靠暗视来观察。）

所有的家具和设施都已固定。

各个舱室高度为8尺，由6尺高的通道和门道相连。

空气通过一个复杂的通风系统和小金属格栅魔法循环，这些格栅嵌入在地板中。

门由钢铁制成，具有 AC 19、27 点生命值、10 点伤害阈值，并且对毒素和心灵伤害免疫。门的锁可以被使用盗贼工具并成功通过 DC 18 敏捷检定的人物撬开。门可以被成功通过 DC 25 力量（运动）检定的人物强行打开。贾拉索和 绯红马佩诺斯 号上的侏儒拥有所有上锁门的钥匙。所有门在关闭时都是气密的。

以下位置对应于地图7.2上的关键点。`,spotlightRefs:[],presentNpcIds:["npc_497"],availableInfoIds:["info_3a3_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[141],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},dmGuidance:`当角色在潜艇周围潜行时遇到黑暗精灵，他们会遭到质问。
【敌我口径】潜艇上的岩石侏儒工程师（引擎室的布丽娜·巴弗斯通，指挥中心的洛雷拉·米登泵、特瓦拉温·瓦格托普、安弗斯·莱弗里，以及 U8 四名下班的）是中立善良的非战斗人员，不作为敌意遭遇发起战斗——DC 15 魅力（威吓）或 100 金币以上的贿赂即可让一个侏儒交出主钥匙、破坏引擎或按角色指示驾驶潜艇。真正会动手的是卓尔：U7b 指挥中心的两名卓尔精英武者（卡拉巴尔·伦兹、马罗·卡扎特），以及尚未在别处被解决掉的三名卓尔火枪手（U3 索卢恩、U5 菲尔莱科特、U6 克雷比格）——后三者在骨架里没有对应遭遇条目，需临场组装。船首像的幻象不覆盖潜艇，这里的卓尔以真面目示人；巡逻的卓尔会先盘问，答不上来就动手，附近听到打斗声的卓尔会赶来合击。`,mapGeometry:{imageRef:"adventure/WDH/Scarlet-Marpenoth.webp"}},{id:"scn_3a8",locationId:"loc_3a3",name:"U1. 入口舱口",activation:{condition:{type:"or",clauses:[{type:"info_revealed",infoId:"info_355_g8"},{type:"event_fired",eventId:"evt_355_e1"}]},priority:10},skeleton:["从扎多兹·佐德在抢眼人物(J30)上的舱室下来的角色会到达这个房间。","从这一侧，圆形金属舱口可以通过转动其阀门轮打开。","这个区域被魔法加压，以防止水进入绯红马佩诺斯，如果潜艇没有停靠在抢眼人物上就打开舱口。","但如果在水下同时打开外舱口和内门，潜艇将会进水。"],flesh:"从扎多兹·佐德在抢眼人物(J30)上的舱室下来的角色会到达这个房间。从这一侧，圆形金属舱口可以通过转动其阀门轮打开。这个区域被魔法加压，以防止水进入绯红马佩诺斯，如果潜艇没有停靠在抢眼人物上就打开舱口。但如果在水下同时打开外舱口和内门，潜艇将会进水。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[142],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"}},{id:"scn_3a9",locationId:"loc_3a3",name:"U2. 引擎室",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域的门被锁上了。",'门上的牌子用通用语和侏儒语写着"引擎室"。',"房间有以下特点：","引擎室内充斥着不断发出嘶嘶声、嗡嗡声和咔嗒声的机器。","一个名叫布丽娜·巴夫尔斯通的岩地侏儒始终监视着这些机械。"],flesh:`这个区域的门被锁上了。门上的牌子用通用语和侏儒语写着"引擎室"。房间有以下特点：

引擎室内充斥着不断发出嘶嘶声、嗡嗡声和咔嗒声的机器。一个名叫布丽娜·巴夫尔斯通的岩地侏儒始终监视着这些机械。附近有一个铜制的传声管，使她能够与控制室指挥中心（U7b）进行通信。

墙壁内的抽屉里存放着螺丝刀、扳手和其他工具。

在左右舷，3尺高，2½尺宽的通道通向机械的深处。中等体型的生物必须挤过这些通道。

引擎是一种类似魔法的机器，它控制着潜艇的推进和深度，并为控制方向的鳍和舵提供动力。一个侦测魔法法术或类似的魔法揭示了整个区域的变形魔法气息。

一个熟练使用修补匠工具的角色可以使用这些工具，通过成功的 DC 15 智力检定来禁用引擎。同样的检定可以重新启动被禁用的引擎。无论成功与否，每次检定代表10分钟的工作时间。引擎也可以被摧毁。它具有 AC 16、50 点生命值，并且对毒素和精神伤害免疫。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_3a9_e1"],tone:"exploration",_meta:{sourcePages:[142],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3ab",locationId:"loc_3a3",name:"U3. 索卢恩的客舱",activation:{condition:{type:"always"},priority:0},skeleton:["如果之前没有在其他地方遇到并处理掉他，一个名叫卓尔火枪手（见附录 B）的Soluun Xibrindas会在这里，在洛丝的神龛前祈祷。","他的豪华舱室具有以下特点：","左侧凹室里有一个网状吊床和一个钢制储物箱。","一个黑色的洛斯神龛，上面覆盖着细小的蜘蛛小雕像，靠在一面墙上。","在它的顶部是恶魔女神的雕塑，头部和上半身是女性暗精灵，下半身是蜘蛛。"],flesh:`如果之前没有在其他地方遇到并处理掉他，一个名叫卓尔火枪手（见附录 B）的Soluun Xibrindas会在这里，在洛丝的神龛前祈祷。他的豪华舱室具有以下特点：

左侧凹室里有一个网状吊床和一个钢制储物箱。

一个黑色的洛斯神龛，上面覆盖着细小的蜘蛛小雕像，靠在一面墙上。在它的顶部是恶魔女神的雕塑，头部和上半身是女性暗精灵，下半身是蜘蛛。

一件兰坦尼斯潜水服挂在南边的壁橱里。

这个实验装置包括一套耐压的垫料服装，由帆布制成，配有铁制配件和铁手套。一个鱼缸头盔连接在服装的领口上，功能为一个水下呼吸帽。

神龛重50磅，作为艺术品价值125金币。储物箱内有一个袋子，装有50金币，以及一瓶治疗药水（治疗药水）。药水的水晶瓶，形状像蜘蛛，价值25金币。`,spotlightRefs:[],presentNpcIds:["npc_4aa"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_3ab_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[143],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3ae",locationId:"loc_3a3",name:"U4. 贾拉克西尔的客舱",activation:{condition:{type:"always"},priority:0},skeleton:["这个整洁的小舱室的门是锁着的。","舱室包含以下特点：","薰衣草的香味神奇地弥漫整个小屋。","（这种香味是由魔法创造的，可以被驱散。","一个吊床悬挂在右侧凹室。"],flesh:`这个整洁的小舱室的门是锁着的。舱室包含以下特点：

薰衣草的香味神奇地弥漫整个小屋。（这种香味是由魔法创造的，可以被驱散。）

一个吊床悬挂在右侧凹室。一个侦测魔法法术或类似的魔法揭示了吊床后的墙壁散发出变形魔法的气息。

其他的家具包括一把高大的竖琴，旁边有一个凳子，一架大键琴配有相应的长凳，一个独立的镜子，以及一个大木箱。

位于舱室后面的上锁的壁橱内有一个木架，上面摆放着六十瓶葡萄酒。每一瓶都是价值25金币的稀有陈年佳酿。

触摸吊床后面的墙壁会使墙壁从这一侧变得透明，再次触摸则会使这个"窗户"消失。当墙壁透明时，舱室内的生物可以看到外面，但潜艇外的生物则看不到里面。

箱子没有上锁。抬起盖子会使得前面和侧面的面板打开，释放出一个机械蜘蛛群机械蜘蛛群，它会攻击除了贾拉克西尔以外的任何人。这个群集具有虫群（蜘蛛）的具体数值，并且有以下变化：

这群生物由小型构装生物组成。

它不需要空气、食物、饮水或睡眠。

这个群体对闪电伤害易受伤害，对力竭免疫，且不能被魅惑、恐慌、麻痹、石化、击倒倒地或中毒。

箱子底部有一个秘密隔间，可以通过成功的 DC 13 感知（察觉）检定检测并打开。如果贾拉索拥有 格洛尔之石，他会将其保存在秘密隔间中，连同他可能从角色那里获得的任何魔法物品。否则，隔间是空的。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_3ae_g1"],encounterIds:["enc_3ae"],treasureSlotIds:[],eventIds:["evt_3ae_e1"],tone:"tension",_meta:{sourcePages:[143],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_3b2",locationId:"loc_3a3",name:"U5. 费尔雷克特的客舱",activation:{condition:{type:"always"},priority:0},skeleton:["如果尚未在其他地方遭遇并击败他，此处会有一名名叫卓尔火枪手（见附录 B）的菲尔莱科特·拉菲恩，正在擦拭他的手枪。","他的舱室内有一张网状吊床和一个钢制脚柜。","费尔雷克特的行李箱里有一个包含65金币的小袋，一把由龙骨雕刻的梳子（价值5金币），以及一对黑曜石骰子（价值25金币）。"],flesh:`如果尚未在其他地方遭遇并击败他，此处会有一名名叫卓尔火枪手（见附录 B）的菲尔莱科特·拉菲恩，正在擦拭他的手枪。他的舱室内有一张网状吊床和一个钢制脚柜。

费尔雷克特的行李箱里有一个包含65金币的小袋，一把由龙骨雕刻的梳子（价值5金币），以及一对黑曜石骰子（价值25金币）。`,spotlightRefs:[],presentNpcIds:["npc_4aa"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[143],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3b4",locationId:"loc_3a3",name:"U6. 克雷比格的客舱",activation:{condition:{type:"always"},priority:0},skeleton:["如果他没有在其他地方遇到并被击败，一个名为克雷比格·马斯奇尔的卓尔火枪手（见附录 B）在这里，正在磨利他的剑。","他的客舱里有一个网状吊床，除此之外别无他物。"],flesh:"如果他没有在其他地方遇到并被击败，一个名为克雷比格·马斯奇尔的卓尔火枪手（见附录 B）在这里，正在磨利他的剑。他的客舱里有一个网状吊床，除此之外别无他物。",spotlightRefs:[],presentNpcIds:["npc_4aa"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[143],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3b5",locationId:"loc_3a3",name:"U7. 控制室",activation:{condition:{type:"always"},priority:0},skeleton:["控制室有两层：一个观察甲板（U7a）和一个指挥中心（U7b），两层之间有两架梯子相连。","两个圆形隔音窗户嵌入在左舷和右舷的舱壁中。","窗户的玻璃是由glassteel制成的，这是一种经过魔法处理变得透明的弹性金属。","居住在深水港的好奇的人鱼不时地调查这艘潜艇，有时可能会看到他们通过窗户窥视。","观察甲板是一个抬高的10英尺高的金属平台，地面有格栅，由两根金属柱支撑。"],flesh:`控制室有两层：一个观察甲板（U7a）和一个指挥中心（U7b），两层之间有两架梯子相连。两个圆形隔音窗户嵌入在左舷和右舷的舱壁中。窗户的玻璃是由glassteel制成的，这是一种经过魔法处理变得透明的弹性金属。居住在深水港的好奇的人鱼不时地调查这艘潜艇，有时可能会看到他们通过窗户窥视。

观察甲板是一个抬高的10英尺高的金属平台，地面有格栅，由两根金属柱支撑。甲板上固定了两把带衬垫的旋转椅，由薄钢栏杆围住。每把椅子的高度可以调节，以适应小型或中型生物。两把椅子之间是一个青铜潜望镜，当潜艇与抢眼人物分离时，可以升高或降低。

三名岩石地精工程师，名为洛雷拉·米登泵(Lorella Middenpump)、特瓦拉文·瓦格托普(Tervaround Waggletop)和安弗斯·莱弗里(Anverth Leffery)，以及两名卓尔精英武者，名为卡拉巴尔·伦兹(Karabal L'enz)和马罗·卡扎特(Marro Qaz'arrt)，在这里值班。地精们负责控制室的运作，而地精则负责监督地精们的工作。

洛瑞拉坐在飞行员的旋转椅子上，这把椅子固定在地板上，可以降低或升高以适应小型或中型生物。椅子位于一排仪表、操纵杆和按钮前。特瓦拉德和安弗斯站在后墙旁边，监控仪表并进行系统检查。一个铜制传声管使他们能够与引擎室（U2）中的布里娜·巴弗斯通沟通。

侏儒们可以在不需要进行检定的情况下操控绯红马佩诺斯。任何其他生物必须通过一次DC 20的智力检定才能弄清楚操控方式。通过控制面板，驾驶员可以将潜艇从抢眼人物上分离，并控制其速度、方向和深度。驾驶员可以使外部船体通电1分钟，之后系统需要1小时来重新充能。任何与通电的外部船体接触或在接触外部船体时开始其回合的生物，必须进行一次DC 15的敏捷检定，检定失败时受到22点（4d10）闪电伤害，成功时则受到一半伤害。穿戴金属盔甲的生物在此豁免检定中具有劣势。`,spotlightRefs:[],presentNpcIds:["npc_4b9"],availableInfoIds:["info_3a3_g1","info_3b5_g1"],encounterIds:["enc_3b5"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[143],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果贾拉索·班瑞（参见附录 B）被迫撤退到潜艇中，他会在角色初次到达时在此处。"},{id:"scn_3b8",locationId:"loc_3a3",name:"U8. 工程师的客舱",activation:{condition:{type:"always"},priority:0},skeleton:["这四个舱室中每个都包含一个下班休息的岩石地精工程师，他睡在一个小吊床上，吊床下面有两个钢制储物箱。","这四个岩石地精的名字叫科卡比·法普尔斯坦普，艾利维克·菲德尔芬，格尔博·里斯，以及扎夫拉布·霍克斯普鲁斯。","每个行李箱都属于一个特定的地精工程师，他们驻扎在绯红马佩诺斯上。","它们都包含了适合地精尺寸的折叠衣物。","其中一个还装有一套沾满油污的工作服和一套属于睡在铺位上的地精的修补工具。"],flesh:`这四个舱室中每个都包含一个下班休息的岩石地精工程师，他睡在一个小吊床上，吊床下面有两个钢制储物箱。这四个岩石地精的名字叫科卡比·法普尔斯坦普，艾利维克·菲德尔芬，格尔博·里斯，以及扎夫拉布·霍克斯普鲁斯。

每个行李箱都属于一个特定的地精工程师，他们驻扎在绯红马佩诺斯上。它们都包含了适合地精尺寸的折叠衣物。其中一个还装有一套沾满油污的工作服和一套属于睡在铺位上的地精的修补工具。有一个25，一个行李箱还包含一个发条玩具、一个点火器或一个音乐盒。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_3a3_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[144],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Scarlet-Marpenoth-Lower-Deck.webp"}},{id:"scn_3ba",locationId:"loc_3a3",name:"U9. 餐厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有以下特点：","一张胡桃木餐桌周围有八把带垫子的旋转椅子。","每把椅子的高度都可以调节，以适应小型或中型生物。","柔和的环境音乐充满整个房间，这是由魔法创造的。"],flesh:`这个房间有以下特点：

一张胡桃木餐桌周围有八把带垫子的旋转椅子。每把椅子的高度都可以调节，以适应小型或中型生物。

柔和的环境音乐充满整个房间，这是由魔法创造的。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[144],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3bb",locationId:"loc_3a3",name:"U10. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有以下特点：","一个铁炉子放在房间的一个角落里。","在对面的角落里，有一张钢制食品准备台，上面悬挂着一些用具。","桌子内置有一个带盖的钢制盒子，下面的地板上连接着一个踏板。","当踩下踏板时，水和移动的刷子会清洗放入盒子里的盘子和用具。"],flesh:`这个房间有以下特点：

一个铁炉子放在房间的一个角落里。

在对面的角落里，有一张钢制食品准备台，上面悬挂着一些用具。桌子内置有一个带盖的钢制盒子，下面的地板上连接着一个踏板。当踩下踏板时，水和移动的刷子会清洗放入盒子里的盘子和用具。

一辆手推车装有餐具和碟子。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[144],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3bc",locationId:"loc_3a3",name:"U11. 食品储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["墙壁上的金属架子上摆放着新鲜的水果、蔬菜、酒桶和肉类。","两个钢桶（一个装着麦芽酒，另一个装着饮用水）放在架子下面。"],flesh:"墙壁上的金属架子上摆放着新鲜的水果、蔬菜、酒桶和肉类。两个钢桶（一个装着麦芽酒，另一个装着饮用水）放在架子下面。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[144],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3bd",locationId:"loc_3a3",name:"U12. 厕所",activation:{condition:{type:"always"},priority:0},skeleton:["这个私室有一个马桶和一个洗手盆，两者都连接着管道。","洗手盆上方是一个带铰链的镜子，镜子后面是一个隔间，里面放着肥皂和毛巾。"],flesh:"这个私室有一个马桶和一个洗手盆，两者都连接着管道。洗手盆上方是一个带铰链的镜子，镜子后面是一个隔间，里面放着肥皂和毛巾。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[145],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3be",locationId:"loc_3a3",name:"U13. 空气系统",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域的门被锁上了。",'门上的牌子用通用语和侏儒语写着"空气系统"。',"房间有以下特点：","这个区域充满了不断发出嘶嘶声、嗡嗡声和咔嗒声的机器。","墙壁内的抽屉里存放着螺丝刀、扳手和其他工具。"],flesh:`这个区域的门被锁上了。门上的牌子用通用语和侏儒语写着"空气系统"。房间有以下特点：

这个区域充满了不断发出嘶嘶声、嗡嗡声和咔嗒声的机器。

墙壁内的抽屉里存放着螺丝刀、扳手和其他工具。

在左舷和右舷，3尺高，2½尺宽的通道深入到机器内部。体型为中等或更大的生物必须挤压才能通过这些通道。

这个区域的类似魔法的机械产生并在整个潜艇中循环新鲜空气。一个侦测魔法法术或类似的魔法揭示了整个区域的咒语魔法气息。

一个熟练使用修补工具的角色可以利用它们来禁用机械设备，成功通过一次 DC 15 智力检定即可。同样的检定可以重新启动被禁用的机械。无论成功与否，每次检定都代表 10 分钟的工作时间。机械设备也可以被摧毁。它拥有 AC 16，50 点生命值，并且对毒性和心灵伤害免疫。

当这套机械装置停工时，空气将停止在船内循环。除非空气系统被重新激活，否则被困在潜艇中需要氧气呼吸的生物将在两天后开始窒息。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_3be_e1"],tone:"exploration",_meta:{sourcePages:[145],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3cc",locationId:"loc_3cc",name:"冬日魔法",activation:{condition:{type:"always"},priority:0},skeleton:["曼松渴望作为暴君统治深水城，掌控散塔林会，并利用这两个权力位置来掠夺和控制剑湾。","他需要龙巢中的黄金来收买那些在时机成熟时推翻莱拉·银手作为开放领主的蒙面领主和散塔林会领袖。","曼松有一长串强大的敌人，其中包括竖琴手联盟、阴影谷的伊尔明斯特、幽暗地域的哈拉斯特·黑斗篷以及深水城的黑杖。","这些敌人如果得知曼松潜藏在深水城，将立即采取行动对付他。","为了实现他的邪恶计划，曼松目前必须隐藏在暗处。"],flesh:"曼松渴望作为暴君统治深水城，掌控散塔林会，并利用这两个权力位置来掠夺和控制剑湾。他需要龙巢中的黄金来收买那些在时机成熟时推翻莱拉·银手作为开放领主的蒙面领主和散塔林会领袖。曼松有一长串强大的敌人，其中包括竖琴手联盟、阴影谷的伊尔明斯特、幽暗地域的哈拉斯特·黑斗篷以及深水城的黑杖。这些敌人如果得知曼松潜藏在深水城，将立即采取行动对付他。为了实现他的邪恶计划，曼松目前必须隐藏在暗处。",spotlightRefs:[],presentNpcIds:["npc_4bb","npc_4ba"],availableInfoIds:["info_3d2_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[147],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:dmGuidanceAppend"},mapGeometry:{imageRef:"adventure/WDH/ChapterEight.webp"},dmGuidance:"本章去向：科拉特塔在南城区，整座建筑被一道无形力场封死（源头是 K18 的奥术符文，摧毁符文力场即消失；解离术、成功的 DC 19 解除魔法可在力场上开一个持续 1 分钟的 10 尺见方开口；力场只向地下延伸 1 尺，用铲子挖 1 小时可以钻过去）。曼松的人靠 K22 的传送圈进出，超维度圣所（E 区）只有戴着传送戒指才能抵达。角色打乱曼松行动的三条现成路子：在 K15 放出恶猿魔、偷走 E13 的法术书、把 E13 的账簿或被擒副官的口供交给莱拉·银手、瓦婕拉·莎法尔、米尔特、竖琴手联盟或城市守卫——确认了行踪，城市警卫就会封锁并包围科拉特塔。正面硬撼曼松几乎不会有好结果；他更愿意做交易：放角色回城，代价是替他去猎杀姗娜萨（第5章的赞纳塔巢穴），这条线直接把队伍推向下一章。",offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_3cd",locationId:"loc_3cc",name:"面对曼修恩",activation:{condition:{type:"always"},priority:0},skeleton:["与曼松正面交锋对角色们来说不太可能有好结果。","话虽如此，这位法师的最大弱点是他有强大的敌人在深水城。","暴露的风险使他隐藏起来，角色们可以通过向他的敌人提供证据，证明他活着（以某种方式）并在深水城活动，来挫败他。",'当涉及到曼松克隆体时，选择"让城市处理它"是一个明智的行动方针。',"作为帮助他获得黄金的交换，他承诺给角色们宝藏的10%（50000金币）。"],flesh:`与曼松正面交锋对角色们来说不太可能有好结果。话虽如此，这位法师的最大弱点是他有强大的敌人在深水城。暴露的风险使他隐藏起来，角色们可以通过向他的敌人提供证据，证明他活着（以某种方式）并在深水城活动，来挫败他。当涉及到曼松克隆体时，选择"让城市处理它"是一个明智的行动方针。

作为帮助他获得黄金的交换，他承诺给角色们宝藏的10%（50000金币）。曼松无意履行这一协议，但这可以帮助角色们争取一些时间。

相反，角色们的行动将被庆祝。莱拉·银手以开放领主的身份，召唤他们到深水城宫殿正式感谢他们。过了一段时间，瓦婕拉·莎法尔邀请他们到黑杖塔感谢他们的服务，并邀请他们加入Force Grey团队。

角色可以通过以下方式阻碍曼松。

向莱拉·银手、米尔特、竖琴手同盟、灰军、黑杖、领主联盟、圣拳之誓、城市守卫或法师与守护者警戒团提供曼松藏身于深水城的证据，将引发一场旨在将其驱逐出城的广泛行动。这些证据可以从曼松的任何副官处获得，他们可以被捕获并交予审讯。这些副官包括西德拉·罗迈尔（K2）、哈维亚·快刀（K3）、Mookie Plush（E5）、维维特·黑水和阿贡·弗科（E8）以及马纳弗雷特·切里波特和厄斯图尔·弗洛克辛（E10）。

位于E13的账簿中还包含了曼松渎职的证据。将其交给莱拉·银手、瓦婕拉·莎法尔、米尔特或一名治安官，将为他们提供足够的证据来采取行动。

一旦确定了曼松的行踪，城市警卫就会封锁并包围科拉特塔楼。黑杖和警戒秩序会根据需要提供协助。如果力场仍然存在，警戒秩序可以将其停用。

当一切都说完了，曼松被迫退回到他的超维避难所。从那里，他继续寻找龙之金库，同时抵御攻击者。

从E13偷走法术书会导致曼松在寻找龙之金库的同时放慢速度，因为他要么试图替换它，要么派出一个模拟像（见附录 B）和其他力量来取回它。`,spotlightRefs:[],presentNpcIds:["npc_4bb","npc_4ba","npc_4db","npc_4c0","npc_4d9"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[147],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`如果角色们发现自己处于邪恶法师的怜悯之下，曼松将非常乐意用他们的可怜生命交换格洛尔之石以及打开龙之金库的钥匙。
如果角色们设法杀死曼松，并且当地当局得知了这一行为，不会有谋杀指控被提起。
如果角色们在 K15 释放了巴洛戈魔并允许它在科拉特塔内游荡，曼松 的许多追随者将在这场恶魔的暴行中丧生。
如果角色们停用了力场，围攻将是短暂的，曼松的势力将被击溃。`},{id:"scn_3d2",locationId:"loc_3d2",name:"科拉特塔",activation:{condition:{type:"always"},priority:0},skeleton:["这座破败不堪的双塔建筑矗立在南城区。","它的邻居们知道有魔法力场包围着它，他们可以看到来自不灭明焰法术的光线从窗户中溢出。","尽管有这些持续的魔法效果，大多数人认为这座建筑被废弃了。","其他人认为它被科拉特兄弟的鬼魂所困扰。","当然，他们错了。"],flesh:`这座破败不堪的双塔建筑矗立在南城区。它的邻居们知道有魔法力场包围着它，他们可以看到来自不灭明焰法术的光线从窗户中溢出。尽管有这些持续的魔法效果，大多数人认为这座建筑被废弃了。其他人认为它被科拉特兄弟的鬼魂所困扰。当然，他们错了。

曼松在科拉特塔楼外没有设置可见的守卫，因为他希望其他人相信这个地方被废弃了。这位邪恶的法师和他的下属使用塔内的传送圈进出。

一个看不见的魔法力场环绕并覆盖了科拉特塔楼。这个力场薄如纸，位于庄园外墙的外侧，向上延伸以完全包含建筑物。任何东西都不能穿过这个屏障，包括空气、雾、雨和雪。那些没有意识到力场存在的生物会反弹回来，特别是鸟类更容易撞上它。力场外的地面经常散落着因撞击而折断脖子的小鸟的尸体，街头清洁工每天早上都会来清扫它们。

力场没有开口，且向地下延伸1英尺。一名角色用铲子挖掘一个足够中型生物挤过的洞需要1小时，从而从力场下方穿过，进入高塔外墙的另一侧。由于科拉特塔周围有其他建筑物，挖掘有75吸引2d6名城市守卫（老兵）前来制止。

角色可以使用诸如任意门或迷踪步这样的法术来从力场的一侧传送到另一侧。解离术法术或在力场上成功施放的解除魔法（DC 19）会创造一个持续1分钟的10英尺见方的开口。

在K18的魔法符文产生力场。摧毁那个符文将结束这个效果。

以下一般特点适用于科拉特塔：

科拉特塔是一座多层结构，每层比下面的一层高出20尺。它的房间有15尺高的天花板，7尺高的门道连接着它们。

在没有装备的情况下攀爬外墙需要进行一次成功的 DC 15 力量（运动）检定。

塔楼中的每一扇门，以及外墙上的门，都是由铁皮包裹的橡木制成，具有AC 16，27点生命值，并且对毒素和心灵伤害免疫。如果一扇门被锁上，角色可以通过使用盗贼工具成功通过DC 15敏捷检定来撬开它，或者通过成功进行DC 20力量（运动）检定来强行打开。曼松、马纳弗雷特·切里波特和哈维亚·快刀持有被锁门的钥匙。

窗户装有铅制框架和肮脏的玻璃窗格。它们从内部闩上，并在铁铰链上向内摆动。成功使用盗贼工具进行一个 DC 11 的敏捷检定可以从外部打开一扇窗户。

除非另有说明，所有区域都由施放在壁灯上的不灭明焰法术明亮地照亮。

科拉特塔中的一些楼梯是隐形的。它们可以通过识破隐形法术或类似的魔法显现出来。一个看不见楼梯的生物可以在梯级上以半速移动而没有任何问题。一个移动速度快于半速的生物必须成功进行一次DC 10敏捷（杂技）检定，否则会滑倒，从楼梯上滚下来，并在底部倒地。

以下遭遇地点对应于地图8.1。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:["info_3d2_g1"],encounterIds:["enc_3d2"],treasureSlotIds:[],eventIds:["evt_3d2_e1"],tone:"tension",_meta:{sourcePages:[148],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`【科拉特塔楼传说】当角色成功通过一次 DC 15 智力（历史）检定，可以回忆起以下关于科拉特之塔的信息。熟悉深水城历史的 NPC，例如 米尔特 或沃罗，也可以提供这些信息。
科拉特塔曾经属于两位古怪的兄弟，杜尔克和阿尔塞多·科拉特。他们都是法师。
随着时间的推移，兄弟俩发现了利用魔法的新方法，但杜尔哈克变得偏执，担心其他人可能会窃取他们的秘密。他用魔法力场将科拉特塔楼包裹起来。
杜尔克的偏执不断增长，直到他怀疑阿尔塞多出卖了他们的秘密。阿尔塞多离开了塔楼，从此杳无音信，而杜尔克成为了一个隐居者，最终在自己的堡垒中去世。`,mapGeometry:{imageRef:"adventure/WDH/Kolat-Towers.webp"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_3da",locationId:"loc_3d2",name:"K1. 储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["外门从内部锁上，房间内既没有暖气也没有光源。","房间周围堆放的板条箱装满了肉，上面印有盐商、打包工和联工团的印章。"],flesh:"外门从内部锁上，房间内既没有暖气也没有光源。房间周围堆放的板条箱装满了肉，上面印有盐商、打包工和联工团的印章。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[149],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3db",locationId:"loc_3d2",name:"K2. 餐厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","三名穿着黑色盔甲的赞特人围坐在一张石制餐桌旁，玩着三龙前奏（一种纸牌游戏）。","餐桌上摆放着银器。","八面被虫蛀的横幅悬挂在墙上。","每个横幅上都有一个代表八种不同魔法学派的神秘符号。"],flesh:`这个房间包含以下特点：

三名穿着黑色盔甲的赞特人围坐在一张石制餐桌旁，玩着三龙前奏（一种纸牌游戏）。餐桌上摆放着银器。

八面被虫蛀的横幅悬挂在墙上。每个横幅上都有一个代表八种不同魔法学派的神秘符号。

玩牌的人是Sidra Romeir（LE女性卡利什人类老兵）和两个下属（LE男性特提里安人类暴徒）。由于科拉特塔周围的力场阻挡了闲杂人等，Sidra认为角色们是曼松的秘密会议的客人。如果很明显角色们不属于塔楼，Sidra和她的暴徒们会发起攻击。这个区域的战斗会引起K3中马纳弗雷特·切里波特的注意，他会来调查。

Sidra佩戴着一枚传送戒指（见"传送戒指"）。

桌上的银器价值100金币。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:["enc_3db"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[149],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果角色们没有给她理由让她相信不是这样，她和她的暴徒们会护送他们去他们想去的任何地方。",offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_3de",locationId:"loc_3d2",name:"K3. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间充满了令人垂涎的香气，包含以下特点：","如果他还没有被吸引到其他地方，一个胖乎乎的半身人站在凳子上，在铁炉上烹饪。","一只绿色的幽灵手漂浮在格子桌上方，握着一把刀切着胡萝卜和芹菜。","一段楼梯沿着一面墙盘旋而上，通向K7。","这位半身人，马纳弗雷特·切里波特，是曼松的副手之一。"],flesh:`这个房间充满了令人垂涎的香气，包含以下特点：

如果他还没有被吸引到其他地方，一个胖乎乎的半身人站在凳子上，在铁炉上烹饪。

一只绿色的幽灵手漂浮在格子桌上方，握着一把刀切着胡萝卜和芹菜。

一段楼梯沿着一面墙盘旋而上，通向K7。

这位半身人，马纳弗雷特·切里波特，是曼松的副手之一。他热爱烹饪，并使用法师之手戏法来切菜。他会认为角色们是入侵者，除非被说服相信其他情况。由于马纳弗雷特知道曼松会在有客人来访时通知他，任何试图说服他的能力检定都将带有劣势。如果法师怀疑角色们是入侵者，他会偷偷将一瓶刺客之血（需通过DC 10体质豁免，失败则受到3d6点毒素伤害并被中毒24小时，成功则伤害减半且不被中毒）倒入炖菜中，然后请他们品尝并给出诚实的评价。之后，他会向K2的守卫大喊并发起攻击。该区域的战斗会引起K2区和K7区的泽恩特成员的注意，他们会前来调查。

玛纳弗雷特 是一个光足半精灵魔法师，有以下变化：

曼纳弗雷特是中立邪恶，拥有31（9d6）点生命值。

他拥有以下种族特性：他是小型生物，行走速度为25尺。他可以穿过中型或更大生物的空间。他在对恐慌状态的豁免检定上有优势。他说通用语和半身人语。

曼纳弗雷特佩戴着一枚传送戒指（见"传送戒指"）。

一个橱柜里放着一打草药和香料罐。其中有一个标有"刺客之血"的瓶子，里面装有六剂毒药。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:["enc_3de"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[149],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_3e1",locationId:"loc_3d2",name:"K4. 霉味图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["这个发霉的房间位于主塔的底部，并且在1层没有门。","它包含以下特点：","一套凹陷的板甲站在房间中央。","书籍被塞进内置的石制书架里，每个书架上方都有一个高高的凹室，里面放着一个石像鬼。","（这些雕塑中有两只活生生的石像鬼。"],flesh:`这个发霉的房间位于主塔的底部，并且在1层没有门。它包含以下特点：

一套凹陷的板甲站在房间中央。

书籍被塞进内置的石制书架里，每个书架上方都有一个高高的凹室，里面放着一个石像鬼。（这些雕塑中有两只活生生的石像鬼。）一场正在进行的龙棋游戏摆放在阅读角的大理石桌子上。

一段石制楼梯螺旋上升至K6。

这两只真正的石像鬼与高凹室内的无生命石像鬼雕像无法区分。当入侵者开始在房间里四处窥探时，石像鬼会俯冲下来并发动攻击。

任何花费一小时搜索书架的角色会发现一本厚重的书，标题为呋噜交配仪式，封面上有两只浮空怪的浮雕图案，它们的触须交织在一起。封面是一个假封面，包裹着一本用龙皮装订的书——一本伪装的魔法书，其中包含以下法师法术：秘法锁、燃烧之手、通晓语言、法术反制、黑暗视觉、任意门、寻获魔宠、浮空术、短讯术和隐形仆役。（你可以用同等级的法术替换其中任何一个。）

这副龙棋套装由手工雕刻的象牙制成，价值500金币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_3e1"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3e5",locationId:"loc_3d2",name:"K5. 垃圾填满的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间位于最外层塔楼的1层，但不能从那一层进入。","它散发着垃圾的恶臭，并且有以下特点：","房间里积满了齐踝深的垃圾。","黑色的烧焦痕迹沿着墙壁和通往K10的楼梯从地板延伸到天花板。","曼松的仆人们把垃圾扔到这里。"],flesh:`这个房间位于最外层塔楼的1层，但不能从那一层进入。它散发着垃圾的恶臭，并且有以下特点：

房间里积满了齐踝深的垃圾。

黑色的烧焦痕迹沿着墙壁和通往K10的楼梯从地板延伸到天花板。

曼松的仆人们把垃圾扔到这里。科拉特兄弟在这个房间里制造了一些魔法物品，一次实验出错导致了烧焦的痕迹。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3e6",locationId:"loc_3d2",name:"K6. 主塔平台和壁架",activation:{condition:{type:"always"},priority:0},skeleton:["主塔的第二层有以下特点：","一个没有栏杆的石质平台有一个通往K7的门，以及一个螺旋石梯，向下通往K4。",'一个看不见的楼梯没有栏杆（见"科拉特塔楼特点"），它紧贴着墙壁，从平台攀升至K11。',"在平台对面，一个宽阔的石壁架从东北墙的窗户下方突出。","一对相同的木制箱子位于壁架上方。"],flesh:`主塔的第二层有以下特点：

一个没有栏杆的石质平台有一个通往K7的门，以及一个螺旋石梯，向下通往K4。一个看不见的楼梯没有栏杆（见"科拉特塔楼特点"），它紧贴着墙壁，从平台攀升至K11。

在平台对面，一个宽阔的石壁架从东北墙的窗户下方突出。一对相同的木制箱子位于壁架上方。（其中一个箱子是真的。另一个是一个拟身怪。）

没有简单的方法可以到达那个岩架，它距离平台8尺远，且在同一高度。角色可以尝试跳上岩架，或者他们可以将绳索钩在上层的栏杆上（K11），然后荡过空隙。他们也可以使用魔法来穿越。任何从平台或岩架上掉下来的人都会落在K4，下方20尺处。

触摸拟身怪的角色会被粘附在它上面。如果受到干扰，或者当角色检查它旁边的真实箱子时，拟身怪会发起攻击。

真正的箱子没有上锁，包含十三个物品，每个都可以用作奥术法器：两块水晶（每块价值10金币），一个球体（价值20金币），四根魔杖（每根价值10金币），以及六根法杖（每根价值10金币）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_3e6"],treasureSlotIds:["trs_3e6_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Kolat-Towers-L2.webp"}},{id:"scn_3ea",locationId:"loc_3d2",name:"K7. 阅览室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","一个魁梧的半兽人穿着黑色皮甲，坐在房间最北角的一张填充过度的椅子上，正在阅读一本书。","墙上挂着城市和风景的大型框架画，地板上铺着一条磨损且血迹斑斑的地毯。","其他的家具包括一对摇椅、一张沙发和一个脚凳。","令人垂涎的香气从通往厨房（K3）的螺旋楼梯上升起。"],flesh:`这个房间包含以下特点：

一个魁梧的半兽人穿着黑色皮甲，坐在房间最北角的一张填充过度的椅子上，正在阅读一本书。

墙上挂着城市和风景的大型框架画，地板上铺着一条磨损且血迹斑斑的地毯。其他的家具包括一对摇椅、一张沙发和一个脚凳。

令人垂涎的香气从通往厨房（K3）的螺旋楼梯上升起。

约恩 恐惧正在阅读一本瓦罗怪物指南，标题页上有作者的亲笔签名，并附有一句用通用语写的注释："致约恩。希望你能从兽人章节中有所启发！"

约恩 是一个半兽人暴徒，有以下变化：

约恩 是中立邪恶。

他拥有以下种族特性：当生命值降至0点时，他的生命值反而降至1点（但在完成一次长休之前不能再这样做）。他具有60尺范围内的黑暗视觉。他说通用语和兽人语。

约恩最看重自己的福祉。他最初对入侵者漠不关心。如果约恩认为角色们不构成威胁，他很乐意与他们谈论科拉特塔楼的居民和布局。他从未参观过曼松的跨维度圣所，但他确实知道K22中的传送圈是到达那里的方式。

这个区域的战斗引起了K3中马纳弗雷特·切里波特的注意，他会进行调查。

约恩 携带着36枚铜币，20枚银币，12枚金币，8枚塔尔（taols），以及一个镶有宝石的象牙牙签（价值25金币）在一个小袋中。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:["info_3ea_g1"],encounterIds:["enc_3ea"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3ed",locationId:"loc_3d2",name:"K8. 学徒卧室",activation:{condition:{type:"always"},priority:0},skeleton:["这个狭窄的房间包含以下特点：","三张单人床紧挨在一起，距离不到一个手臂的长度，位于一个通往K12的楼梯下方。","每张床的床脚都有一个木制的箱子。","科拉特兄弟曾经收过学徒，他们在这里睡觉。","曼松现在允许他自己的学徒——埃雷德·帕伊诺、哈维·特莫克和萨瓦拉·火棘——也这样做。"],flesh:`这个狭窄的房间包含以下特点：

三张单人床紧挨在一起，距离不到一个手臂的长度，位于一个通往K12的楼梯下方。

每张床的床脚都有一个木制的箱子。

科拉特兄弟曾经收过学徒，他们在这里睡觉。曼松现在允许他自己的学徒——埃雷德·帕伊诺、哈维·特莫克和萨瓦拉·火棘——也这样做。这三个人都可以在K15找到。

每个箱子里都有一套普通服装，一个备用的法术材料包，蜡烛，墨水，笔，纸张，以及3d6金币。每个箱子还装有一本法术书，包含其所有者准备的所有法术。此外，Ered的法术书中包含燃烧之手，敲击术，和闪电束；Havi的法术书中包含魅惑类人，侦测思想，和高等幻影；Savara的法术书中包含通晓语言，魅影之力，和魅影驹。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_3ed_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3ef",locationId:"loc_3d2",name:"K9. 桥和步行道",activation:{condition:{type:"always"},priority:0},skeleton:["一座木桥将两座塔连接起来，距离地面20尺，桥上连接的步行道环绕着外塔的外围。","桥和塔的步行道没有栏杆。","脚下的木板和石头会发出吱吱嘎嘎的声音，但走起来是安全的。"],flesh:"一座木桥将两座塔连接起来，距离地面20尺，桥上连接的步行道环绕着外塔的外围。桥和塔的步行道没有栏杆。脚下的木板和石头会发出吱吱嘎嘎的声音，但走起来是安全的。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[152],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3f0",locationId:"loc_3d2",name:"K10. 法师雕像",activation:{condition:{type:"always"},priority:0},skeleton:["外塔的这一层由一个平台和一条狭窄的壁架组成，具有以下特点：","这个平台面积为10尺见方，由两条楼梯连接。","一条向下20尺通向K5，另一条向上20尺通向K20。","东南墙上建造的狭窄壁架上有一个真人大小的长胡子人类法师雕像站在上面。","这位法师看起来很生气，正用石制魔杖指向K9的门。"],flesh:`外塔的这一层由一个平台和一条狭窄的壁架组成，具有以下特点：

这个平台面积为10尺见方，由两条楼梯连接。一条向下20尺通向K5，另一条向上20尺通向K20。

东南墙上建造的狭窄壁架上有一个真人大小的长胡子人类法师雕像站在上面。这位法师看起来很生气，正用石制魔杖指向K9的门。

这尊雕像描绘的是杜尔克·科拉特，而一个侦测魔法法术或类似的魔法揭示了它周围的变形魔法光环。

这个威胁是空洞的，但雕像继续悬浮1分钟后才沉回落到壁架上。魔法在1小时后重置。在它悬浮的时候，雕像可以被轻易地推或拉移动。

在雕像漂浮时对其施放解除魔法会导致其坠落，从边缘翻落，并在下方的K5区域摔碎。雕像坠落时在该区域的任何人必须成功通过一个DC 10敏捷豁免检定，否则将受到22（4d10）点钝击伤害。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[152],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:'"我是杜尔克·科拉特，这座塔的伟大法师和主人！你们怎敢侵入我的家园！立即离开，否则将被你们无法理解的魔法摧毁！"',dmGuidance:"当角色第一次踏上平台时，雕像会悬浮在壁架上方1尺处，并用通用语发出以下警告："},{id:"scn_3f3",locationId:"loc_3d2",name:"K11. 实验室",activation:{condition:{type:"always"},priority:0},skeleton:['这个房间由一个岩架构成，通过不可见的楼梯与上下层相连（见"科拉特塔特点"）。',"一条楼梯向下延伸20尺至K6，另一条楼梯向上爬升20尺至K15。","该区域包含以下特点：","破碎的玻璃覆盖了地板，一个大木制格子架桌子被撞倒了。","一个大型空柜子占据了后墙的主要位置。"],flesh:`这个房间由一个岩架构成，通过不可见的楼梯与上下层相连（见"科拉特塔特点"）。一条楼梯向下延伸20尺至K6，另一条楼梯向上爬升20尺至K15。该区域包含以下特点：

破碎的玻璃覆盖了地板，一个大木制格子架桌子被撞倒了。

一个大型空柜子占据了后墙的主要位置。

这个实验室已经被曼松彻底搜刮干净，里面没有任何有价值的东西。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[152],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Kolat-Towers-L3.webp"}},{id:"scn_3f4",locationId:"loc_3d2",name:"K12. 法杖展示区",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","在楼梯顶部的墙上自豪地挂着半打不同风格的法杖。","一条楼梯向下通往K8。","每根法杖在构造和风格上都各不相同：一根扭曲的桦树枝，一根坚固的橡木棍，一根闪闪发光的石制柄，一根雕刻有蓝色符文的钢杆，一根顶部带有铜制新月的铜质手杖，以及一根顶部镶有黑色大理石球的吹制玻璃手杖。","所有六个法杖在没有曼松或他的一个副手陪同的情况下，会活化并攻击进入该区域的入侵者。"],flesh:`这个房间包含以下特点：

在楼梯顶部的墙上自豪地挂着半打不同风格的法杖。

一条楼梯向下通往K8。

每根法杖在构造和风格上都各不相同：一根扭曲的桦树枝，一根坚固的橡木棍，一根闪闪发光的石制柄，一根雕刻有蓝色符文的钢杆，一根顶部带有铜制新月的铜质手杖，以及一根顶部镶有黑色大理石球的吹制玻璃手杖。

所有六个法杖在没有曼松或他的一个副手陪同的情况下，会活化并攻击进入该区域的入侵者。这些法杖的具体数值与凌空剑相同，只是在命中时造成钝击伤害。如果这个区域发生战斗，K14中的生物会过来调查。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:["enc_3f4"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[152],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3f6",locationId:"loc_3d2",name:"K13. 拘留室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门上有一个狭窄的带栅栏的窗户。","门被锁上了并且设有陷阱（见下文）。","一个刺耳的声音从门的另一边传来。",'"如果你们是好人，让我们清除这些塔楼中的邪恶气息。',"如果你们是邪恶的，打开门让我们战斗，这样我的永恒无聊就可以结束了。"],flesh:`这个房间的门上有一个狭窄的带栅栏的窗户。门被锁上了并且设有陷阱（见下文）。

一道守卫刻文已经被施加在门上，设置会在被曼松之外的任何人打开时触发。这个符文类似于一个华丽的字母M，可以通过成功的DC 18智力（调查）检定找到。符文会以目盲术/耳聋术法术（豁免DC 18）为目标打开门的生物。

杜尔卡·科拉特很久以前在这个牢房里困住了一个魔法实验：一个被赋予了提尔（正义之神）的人类骑士个性的石像鬼，名叫冈达弗蕾女士。这个石像鬼拥有10的智力得分和守序善良的阵营。它说通用语，它的脸看起来更像人类而不是石像鬼。曼松对这生物感到好笑，所以他让它活着但锁在牢房里。

然而，她会迅速反对任何表现出残忍或非法行为的角色。她可以提供有关Kolat Towers的有用信息，她熟悉塔楼的布局以及当前居住在那里的人。她知道曼松居住在一个可以通过他的副手使用特殊戒指激活的传送阵进入的位面圣所。这个石像鬼不知道传送阵的位置，也不知道为什么Duhlark将她的意识转移到了她现在的形式。

这个石像鬼保留了冈达弗蕾女士生活的片段记忆，她是一个本地的瓦特达维安人，曾在城市警卫队服役。在1379 DR年，也就是失落要塞年，她将杜尔卡·科拉特认定为几起当地失踪案的嫌疑人，并因此出现在他的家门口。杜尔卡因这次侵犯他的隐私而恼怒，并且他当时并不清醒，于是他捕获了冈达弗蕾女士，使用了一个法术将她的身体与石像鬼融合，并把她囚禁起来。

如果石像鬼随队伍同行，在每天黎明时掷一个d10。如果掷出1，冈达弗蕾女士的阵营在接下来的24小时内变为混乱邪恶，因为石像鬼的天性开始显现。在这种状态下，这个生物试图策划角色们的死亡，甚至攻击单独的角色。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:["info_3f6_g1","info_3f6_g2"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_3f6_e1"],tone:"tension",_meta:{sourcePages:[152],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},readAloud:'一个刺耳的声音从门的另一边传来。"如果你们是好人，让我们清除这些塔楼中的邪恶气息。如果你们是邪恶的，打开门让我们战斗，这样我的永恒无聊就可以结束了。"在门的带栅栏的窗户之外，一个石像鬼潜伏在石制牢房中，用低沉的咆哮向你们发出挑战。"那就来吧！"',dmGuidance:`当角色们接近门时，阅读：
如果角色们释放了冈达弗蕾女士，她会提出与他们并肩作战；`},{id:"scn_3fa",locationId:"loc_3d2",name:"K14. 仆人区",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","家具包括四张床、一张小桌子和四把椅子，以及破旧的窗帘。","四名赞特暴徒在这里放松——一个试图休息，另外两个在打牌，第四个坐在床边，重新给一把重型十字弓装弦。","这些暴徒为 曼松 工作，并会攻击任何他们不认为是自己人的目标。","在桌子上以小堆和整齐的堆叠休息着74枚铜币，52枚银币，19枚金币和4枚白金币。"],flesh:`这个房间包含以下特点：

家具包括四张床、一张小桌子和四把椅子，以及破旧的窗帘。

四名赞特暴徒在这里放松——一个试图休息，另外两个在打牌，第四个坐在床边，重新给一把重型十字弓装弦。

这些暴徒为 曼松 工作，并会攻击任何他们不认为是自己人的目标。成功的 DC 17 魅力（欺瞒）检定可以说服这些赞塔帮成员，认为角色是他们的盟友。

在桌子上以小堆和整齐的堆叠休息着74枚铜币，52枚银币，19枚金币和4枚白金币。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:["enc_3fa"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[153],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_3fc",locationId:"loc_3d2",name:"K15. 召唤室",activation:{condition:{type:"always"},priority:0},skeleton:['这个房间通过隐形楼梯与上面的楼层和下面的楼层连接（见"科拉特塔楼特点"），一个向下20尺到达K11，另一个向上20尺到达K16。',"这个区域包含以下特点：","一个直径10尺的符文圈已经用现在已经干燥的血画在地板上。","烟雾从围绕圆圈放置的四个铁火盆中滚滚而出。","三名学徒法师（见附录 B）站在圈外，念诵着咒语。"],flesh:`这个房间通过隐形楼梯与上面的楼层和下面的楼层连接（见"科拉特塔楼特点"），一个向下20尺到达K11，另一个向上20尺到达K16。这个区域包含以下特点：

一个直径10尺的符文圈已经用现在已经干燥的血画在地板上。烟雾从围绕圆圈放置的四个铁火盆中滚滚而出。

三名学徒法师（见附录 B）站在圈外，念诵着咒语。一只恶猿魔在圈内无动于衷地倒着。

这里的三位巫师是曼松的学徒——艾瑞德·派诺（LE男性大马拉人人类）、哈维·特尔莫克（CE女性琼达珊人人类）和萨瓦拉·火刺（NE女性泰希安人人类）。每个人都戴着传送戒指（见"传送戒指"）。三位巫师正在吟唱的魔法咒语已经压制了巴古拉恶魔并使其昏迷。如果他们中的任何一位停止吟唱，恶魔就会醒来并变得愤怒，尽管它仍然被束缚在法阵中。每当它受到伤害时，巴古拉恶魔可以尝试进行一次DC 10魅力检定。如果检定成功，它将挣脱法阵并攻击任何它能触及的生物。

释放恶猿魔会干扰曼松的行动，迫使这位法师花费时间和资源击败这个恶魔并替换被杀死的手下。`,spotlightRefs:[],presentNpcIds:["npc_497","npc_4bb"],availableInfoIds:[],encounterIds:["enc_3fc"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[153],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Kolat-Towers-L4.webp"}},{id:"scn_3fd",locationId:"loc_3d2",name:"K16. 构造物工坊",activation:{condition:{type:"always"},priority:0},skeleton:["来自K15的隐形楼梯在一扇关闭的门前结束。","这扇门没有上锁，打开后通向房间，房间内包含以下内容：","地板上散落着粘土、石头、骨头和金属碎片，房间中央的木桌上也覆盖着这些材料。","地板在踩踏时会吱吱作响并轻微倾斜，可以看到它与墙壁分离。","房间两侧各有一个超大号的铁夹子固定着地板。"],flesh:`来自K15的隐形楼梯在一扇关闭的门前结束。这扇门没有上锁，打开后通向房间，房间内包含以下内容：

地板上散落着粘土、石头、骨头和金属碎片，房间中央的木桌上也覆盖着这些材料。

地板在踩踏时会吱吱作响并轻微倾斜，可以看到它与墙壁分离。房间两侧各有一个超大号的铁夹子固定着地板。每个生锈的机械装置都连接着一个铁杆。

曾经有一座木制楼梯爬上20尺到达下一层，但它已经部分坍塌。

科拉特兄弟曾在这个工坊中制造构造物。魔法夹紧的地板是作为一种预防措施建造的，以防其中一个实验失控。

当一个不为曼松的散塔林会工作的生物未经护送进入这个房间时，地板上的金属碎片会飞到一起，形成一个活化盔甲并进行攻击。当盔甲的生命值降至10点或更少时，它会在下一个回合尝试拉动其中一个杆。

拉动杠杆是一个动作，会导致两个夹子释放地板，然后地板会被魔法驱动向上撞向天花板。站在地板上的生物会被击倒 倒地，并且必须在撞击天花板时进行一次 DC 20 的敏捷豁免检定，失败则受到 22 (4d10) 点钝击伤害，成功则只受到一半伤害。地板随后会停留在天花板下方几英尺处，切断通往 K15 的楼梯通道，但允许角色攀爬坍塌的楼梯前往 K17。（这个魔法地板的设计是为了防止狂暴的魔像进入塔楼的下层区域，甚至可能进入城市，而 Kolat 兄弟则负责处理它。）10 分钟后，地板会降回原位，夹子会再次将其锁定。

生物可以成功通过一次 DC 10 敏捷（特技）检定来攀爬楼梯前往 K17。如果检定失败，该生物会坠落10英尺。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:["enc_3fd"],treasureSlotIds:[],eventIds:["evt_3fd_e1"],tone:"tension",_meta:{sourcePages:[153],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Kolat-Towers-L5.webp"}},{id:"scn_400",locationId:"loc_3d2",name:"K17. 血肉魔像",activation:{condition:{type:"always"},priority:0},skeleton:["这个未点亮的走廊包含以下特点：","一个血肉魔像站在通往K18的门前。","一扇单向秘密门嵌入在最内侧的墙壁中。","这个血肉魔像是由杜拉克·科拉特创造的。","曼松选择将其留在这里，并指示他的副手不要打扰它。"],flesh:`这个未点亮的走廊包含以下特点：

任何检查大厅陷阱并成功通过 DC 17 感知（察觉）检定的角色，会注意到墙壁踝部高度有直径1英寸的孔洞，这些孔洞沿通道长度方向以等距间隔排列。

一个血肉魔像站在通往K18的门前。

一扇单向秘密门嵌入在最内侧的墙壁中。

这个血肉魔像是由杜拉克·科拉特创造的。曼松选择将其留在这里，并指示他的副手不要打扰它。它会攻击任何靠近它10英尺范围内、除杜拉克以外的其他人。一个伪装成杜拉克的角色（使用K10中的雕像作为模型）可以通过一次成功的DC 10魅力（欺瞒）检定来欺骗这个魔像。

魔像站在一个压力板上。当它离开压力板去攻击一个它够不到的敌人时，压力板上的重量被移除，导致墙壁上的孔洞喷出毒气。当陷阱触发时，大厅中的每个生物必须进行一次 DC 12 体质豁免检定，若失败则受到 10（3d6）点毒素伤害，若成功则受到一半伤害。毒气会持续 1 分钟，除非被 造风术 法术或类似的魔法驱散。当毒气存在时，大厅中的生物在每回合开始时必须重复进行豁免检定。魔像对毒气免疫。

一个角色如果成功通过了 DC 15 的感知（察觉）检定，会注意到通往 K19 的密门。这扇门通常只能从 K19 内部正常打开，只有 敲击术 法术或类似的魔法才能从这一侧强行打开它。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:["info_400_g1","info_400_g2"],encounterIds:["enc_400"],treasureSlotIds:[],eventIds:["evt_400_e1"],tone:"tension",_meta:{sourcePages:[153],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Kolat-Towers-L6.webp"}},{id:"scn_403",locationId:"loc_3d2",name:"K18. 奥术符文",activation:{condition:{type:"always"},priority:0},skeleton:["这个未点亮的走廊里满是灰尘和蜘蛛网。","它包含以下特点：","在大厅最南端的后墙上刻有一个复杂的符文。","（从通往K17的门道看不到这个符文。","一扇秘密门嵌入在最内侧的墙壁中。"],flesh:`这个未点亮的走廊里满是灰尘和蜘蛛网。它包含以下特点：

在大厅最南端的后墙上刻有一个复杂的符文。（从通往K17的门道看不到这个符文。）

一扇秘密门嵌入在最内侧的墙壁中。

一个侦测魔法法术或类似的魔法会揭示符文周围强大的咒法魔法灵光。成功的DC 15智力（奥秘）检定确认此符文维持着科拉特塔周围的力场，并且符文可以被破坏。它的AC为10，22点生命值，并且对毒素和心灵伤害免疫。符文无法被正常解除，但每次成功对其施放的DC 19解除魔法会对它造成16点（3d10）力场伤害。

当符文第一次受到伤害时，一个史拉红蟾会通过魔法从其中跳出，并攻击走廊里的所有生物。

当符文被摧毁时，围绕科拉特塔楼的力场消失了。

一个成功通过 DC 15 感知（察觉）检定的人物会注意到通往 K19 的密门。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_403_g1","info_403_g2"],encounterIds:["enc_403"],treasureSlotIds:[],eventIds:["evt_403_e1","evt_403_e2"],tone:"tension",_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_406",locationId:"loc_3d2",name:"K19. 杜拉克的卧室",activation:{condition:{type:"or",clauses:[{type:"info_revealed",infoId:"info_400_g2"},{type:"info_revealed",infoId:"info_403_g2"}]},priority:10},skeleton:["这个房间可以通过通往K17和K18区域的任意一扇秘密门进入。","它包含以下特点：","一个燃焰之颅在房间中央浮动，房间里满是灰尘和蜘蛛网。","一张椭圆形的天篷床被蜘蛛网覆盖着，它位于两个狭窄书架的对面。","这个房间闻起来像坟墓。"],flesh:`这个房间可以通过通往K17和K18区域的任意一扇秘密门进入。它包含以下特点：

一个燃焰之颅在房间中央浮动，房间里满是灰尘和蜘蛛网。

一张椭圆形的天篷床被蜘蛛网覆盖着，它位于两个狭窄书架的对面。

这个房间闻起来像坟墓。

曼松在床中发现了杜拉克·科拉特的骷髅遗骸，并将他的头骨变成了一个燃焰之颅。他没有动其余的骨头，将它们隐藏在蜘蛛网后面。燃焰之颅会攻击任何面对它的人，除了曼松，它在施法和发射火焰射线之间会大喊："滚出我的房子！"

曼松从卧室中移走了所有有价值的书籍，留下了书架上在各种深奥主题的普通书籍之间的明显空隙。

在一排书架上有一本假书，名为来自达马拉的男人——一个涂成书本形状的木块，与书架底部的秘密隔间相连。角色可以通过一次成功的DC 15感知（察觉）检定发现该书架并辨别如何打开它。拉动这本书会使隔间弹开，露出藏在其中的杜尔拉克的定身魔杖。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:["info_406_g1"],encounterIds:["enc_406"],treasureSlotIds:["trs_406_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"}},{id:"scn_408",locationId:"loc_3d2",name:"K20. 阿尔塞多的私人图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有以下特点：","一个高大的橡木书架上散落着几本书籍（都是普通且无价值的），但大部分是空的。",'书架上方挂着一个精美制作的标牌，用通用语写着"阿尔塞多"。',"一段楼梯向下延伸20尺至K10。"],flesh:`这个房间有以下特点：

一个高大的橡木书架上散落着几本书籍（都是普通且无价值的），但大部分是空的。书架上方挂着一个精美制作的标牌，用通用语写着"阿尔塞多"。

一段楼梯向下延伸20尺至K10。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Kolat-Towers-Outer.webp"}},{id:"scn_409",locationId:"loc_3d2",name:"K21. 杜拉克的私人图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有以下特点：","一个高大的橡木书架上摆放着几十本书籍。",'书架上方挂着一个精美制作的标牌，用通用语写着"杜拉克"。',"一段楼梯向上延伸20尺至K22。","书架上总共有三十本书。"],flesh:`这个房间有以下特点：

一个高大的橡木书架上摆放着几十本书籍。书架上方挂着一个精美制作的标牌，用通用语写着"杜拉克"。

一段楼梯向上延伸20尺至K22。

书架上总共有三十本书。如果任何一本书被扰动，它们会从书架上飞出，形成一个群体攻击房间里的所有生物。书籍收藏的具体数值与蝙蝠群相同，有以下变化：

这些书没有回声定位和敏锐听力的特性。

将群体的咬击攻击选项替换为撞击攻击选项，造成相同量的伤害。

如果在其回合没有生物可以攻击，书籍群会返回到书架上。这些书本身是非魔法的，并且涵盖了广泛的主题。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_409"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_40b",locationId:"loc_3d2",name:"K22. 传送圈",activation:{condition:{type:"always"},priority:0},skeleton:["从K21升起的楼梯通向这座外塔的最高房间。","它包含以下特点：","一个观察者眼魔在房间中央漂浮，四条飞蛇在椽子上方盘旋。","地板上刻着符文，形成了一个微弱发光的大圆圈。","五个带有坚固挂锁的木制宝箱靠墙放置。"],flesh:`从K21升起的楼梯通向这座外塔的最高房间。它包含以下特点：

一个观察者眼魔在房间中央漂浮，四条飞蛇在椽子上方盘旋。

地板上刻着符文，形成了一个微弱发光的大圆圈。

五个带有坚固挂锁的木制宝箱靠墙放置。

观察者眼魔守护着宝箱，并攻击未经曼松或其副手护送的入侵者。飞行蛇加入战斗，作为观察者眼魔的盟友作战。

此外，佩戴传送戒指（见"传送戒指"）的生物可以使用此法阵进入曼松圣所（E1）中的传送法阵。当传送戒指被带到法阵5英尺范围内时，会开始发出柔和的嗡鸣声。

箱子上的挂锁是幻术，但摸起来感觉真实。使用侦测魔法法术或类似魔法可以揭示每个箱子上环绕着幻术魔法的灵光。试图撬开或破坏锁会失败，但使用敲击术或类似魔法会使锁打开。1号箱的盖子上雕刻有铁砧的图案，里面有一套锻造工具（价值20 gp）。箱子 2有铁箍，里面有一套画家的工具（价值10 gp），以及三小罐彩色颜料（蓝色、红色和黄色）。3号箱有小爪子般的脚，里面有六本空白法术书，封皮为皮革制成（每本价值50 gp）。4号箱的平盖子上绘有城市场景，里面有一个学者背包（价值40 gp）和一本矮人语短语书。不会说矮人语的角色可以使用这本书与友好的矮人进行基本交流。5号箱镶嵌有银饰，顶部有一个银色的小雕像，描绘了一只站立起来的狮鹫（价值25 gp）。里面有一个木架，上面放着八个玻璃瓶——六瓶装有治疗药水，两瓶装有单独的乙醚精剂量。通过成功的DC 13智力（自然）检定可以识别毒药。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:["info_40b_g1","info_40b_g2"],encounterIds:["enc_40b"],treasureSlotIds:["trs_40b_0","trs_40b_1"],eventIds:[],tone:"tension",_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"传送法阵的功能与玩家手册中描述的同名法术相同。"},{id:"scn_40f",locationId:"loc_40f",name:"超维度圣所",activation:{condition:{type:"item_owned",itemRef:"传送戒指"},priority:10},skeleton:["曼松的超维避难所存在于一个有限的半位面中。","它由原始的曼松创造，为法师的克隆体所知，目前作为本冒险中描述的克隆体的巢穴。","在曼松的圣所外，这个半位面是一个充满旋转紫色雾气的广阔虚空。","在这个超维度空间中没有基本方向；","指南针在没有北、南、东、西的情况下徒劳地旋转。"],flesh:`曼松的超维避难所存在于一个有限的半位面中。它由原始的曼松创造，为法师的克隆体所知，目前作为本冒险中描述的克隆体的巢穴。

在曼松的圣所外，这个半位面是一个充满旋转紫色雾气的广阔虚空。任何进入这片雾气的生物都会被传送到 E1，并且必须进行一次 DC 18 体质豁免检定，若失败则受到 22 (4d10) 点力场伤害，若成功则受到一半的伤害。

在这个超维度空间中没有基本方向；指南针在没有北、南、东、西的情况下徒劳地旋转。

这些特点适用于超维避难所的所有区域：

房间有10尺高的天花板，连接它们的通道和门道高度分别为8尺和7尺。整个避难所的墙壁、地板和天花板都是由无缝的雪花石膏制成。

门由铁制成，拥有AC 19、27点生命值，并且对毒素和心灵伤害免疫。被锁上的门可以由使用盗贼工具并成功通过DC 17敏捷检定的人撬开，或者通过成功通过DC 25力量（运动）检定强行打开。作为一个动作，曼松或他的拟像可以通过触碰来锁定或解锁圣域内的任何门。

除非另有说明，避难所的区域由施放在壁灯上的不灭明焰法术明亮照明。

要进入曼松的位面圣所，需使用一枚传送戒指：这是一枚刻有风格化字母M的黄铜印章戒指，当受到侦测魔法法术或类似魔法作用时，会散发出咒法魔法的灵光。曼松将这些戒指交予他最信任的仆从。

作为一个动作，佩戴传送戒指的生物可以激活K22或E1中的传送圈，将自己和多达六名其他愿意的生物从一个圈传送到另一个圈。

以下位置对应于地图8.2上的关键点。

曼松在E12等待他们。

被曼松的守卫将生命值降至0的角色会进入昏迷状态。如果整个队伍被击败，昏迷的角色将被剥夺他们的法术书和魔法物品（包括他们在科拉特塔楼中获得的任何传送戒指）。然后他们会在深水城的一条后巷中醒来，每个人只剩下1点生命值。

这些面具属于曼松，并且他过去曾经佩戴过。一个侦测魔法法术或类似的魔法可以揭示每个面具周围的咒语魔法光环。任何戴上面具的生物都会受到9点（2d8）闪电伤害。一旦这个效果被触发，面具就会变成非魔法的，并且变得无害。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[157],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"},dmGuidance:`如果角色们设法战胜了所有这些敌人，他们就可以自由地探索避难所。
如果角色们返回科拉特塔楼，他们会发现那里已经被清空，并且K22中的传送圈被永久性地解除了。`},{id:"scn_413",locationId:"loc_40f",name:"E1. 到达点",activation:{condition:{type:"item_owned",itemRef:"传送戒指"},priority:10},skeleton:["这个房间是超维避难所与物质界的锚点，人们可以从物质界的其他地方传送到这个房间。","这个房间有以下特点：","这个雪花石膏地板上刻有一个传送圈。","从K22传送到这个区域的角色会出现在圈内。","天花板和三面墙壁由6英寸厚的透明玻璃板制成，透过这些玻璃可以看到充满半位面的旋转紫雾。"],flesh:`这个房间是超维避难所与物质界的锚点，人们可以从物质界的其他地方传送到这个房间。这个房间有以下特点：

这个雪花石膏地板上刻有一个传送圈。从K22传送到这个区域的角色会出现在圈内。

天花板和三面墙壁由6英寸厚的透明玻璃板制成，透过这些玻璃可以看到充满半位面的旋转紫雾。第四面墙壁由雪花石膏制成，上面有一扇上锁的铁门（通向E2）。

一个穿着黑袍的人类女性，有着光头和有疤痕的头部，通过另一个房间（E3）墙壁上的一个玻璃窗户监视着这个房间。

窗外注视的人影是凯夫贾洞穴（参见E3），她能够轻松透过两间房间之间的紫色雾气看到情况。一旦角色到达，她会使用短讯术联系曼松。拟像需要1分钟的时间到达（从E7出发），在这期间，卡芙嘉会再次使用短讯术告知随机角色："尊贵的主人正在赶来，他期待着与您见面。"

当副本到达时，它将自己冒充为曼松，并以它的身份欢迎角色们来到其超维避难所。它提供了一次导游服务，示意角色们在它之前进入E2。如果他们遵从，它就会触发E2的警报并发起攻击。

每5尺长的玻璃墙部分具有AC 13，30点生命值，并对酸性、毒素和心灵伤害免疫。即使玻璃被打破，充满半位面的紫色雾气也不会进入这个区域。

此外，佩戴传送戒指（见"传送戒指"）的生物可以使用这个圈访问科拉特塔楼中的传送圈（K22）。如果将传送戒指带到圈的5尺范围内，它将开始柔和地嗡嗡作响。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:["info_40b_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[157],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；overlay覆写:activation"},dmGuidance:`曼松会派他的拟像（参见附录 B）去解锁E2的门并迎接新来者。
传送圈的功能与玩家手册中同名法术的同名法术描述相同。`},{id:"scn_417",locationId:"loc_40f",name:"E2. 门厅",activation:{condition:{type:"always"},priority:0},skeleton:["通往E1的门是锁着的。","从这个门厅通向其他房间的门都是开着的。","这个门厅有以下特点：","雪花石膏地板上镶嵌着一个由黑色大理石制成的大型符号，描绘了一条带翼的蛇在咬一枚硬币。","角色们认出这是散塔林会（黑暗兄弟会）的标志。"],flesh:`通往E1的门是锁着的。从这个门厅通向其他房间的门都是开着的。这个门厅有以下特点：

雪花石膏地板上镶嵌着一个由黑色大理石制成的大型符号，描绘了一条带翼的蛇在咬一枚硬币。角色们认出这是散塔林会（黑暗兄弟会）的标志。（这枚硬币隐藏了一个警报机制。）

墙上挂着十二个金属面具，上面刻有人脸的面容。

直径一英尺的盘形瓷砖，作为散塔林会标志的硬币，实际上是一个压力板。当被按下或踩踏时，它会敲响一个在整个圣所都能听到的魔法锣。警报可以通过成功进行DC 20敏捷检定并使用盗贼工具来解除，但如果检定失败超过5点或更多，警报将意外触发。警报会召唤以下守卫者，他们攻击房间内的所有入侵者：

凯夫贾洞穴（见E3）

曼松的拟像（见E7）

Vevette Blackwater 和 Agorn Fuoco（见 E8）

哈维亚·快刀 和 Mookie Plush（见E10）`,spotlightRefs:[],presentNpcIds:["npc_4bc"],availableInfoIds:["info_417_g1"],encounterIds:["enc_417"],treasureSlotIds:[],eventIds:["evt_417_e1"],tone:"tension",_meta:{sourcePages:[157],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_41b",locationId:"loc_40f",name:"E3. 守卫站",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域有一个5尺见方的窗户，朝向 E1。","除非她被引到别处，凯夫贾洞穴 站在窗户前守望。","Kaevja曾是泰伊的红袍法师，直到她看到了在曼松下学习魔法的机会。","在他接受她之前，曼松强迫她移除了她那独特的泰伊头部纹身，并将她的红袍法师长袍换成了黑色的。","凯夫贾洞穴 是一位女性 Mulan 人类 魔法师，有以下变更："],flesh:`这个区域有一个5尺见方的窗户，朝向 E1。除非她被引到别处，凯夫贾洞穴 站在窗户前守望。

Kaevja曾是泰伊的红袍法师，直到她看到了在曼松下学习魔法的机会。在他接受她之前，曼松强迫她移除了她那独特的泰伊头部纹身，并将她的红袍法师长袍换成了黑色的。

凯夫贾洞穴 是一位女性 Mulan 人类 魔法师，有以下变更：

Kaevja 是守序邪恶。她懂得通用语、龙语、矮人语和精灵语。

她准备好了 短讯术 法术，而不是 飞行术 法术，并且携带了一颗黄色的 元素宝石。

在战斗中，Kaevja 打破 元素宝石，召唤一个 土元素 并命令它攻击她的敌人。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:["enc_41b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[158],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_41c",locationId:"loc_40f",name:"E4. 食品储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","从地板到天花板的架子上堆满了面包、奶酪、干肉、坚果，以及一些装有新鲜农产品的篮子。",'两个标有"WATER"的桶和两个标有"ALE"的桶被塞在角落里。'],flesh:`这个房间包含以下特点：

从地板到天花板的架子上堆满了面包、奶酪、干肉、坚果，以及一些装有新鲜农产品的篮子。

两个标有"WATER"的桶和两个标有"ALE"的桶被塞在角落里。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[158],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_41d",locationId:"loc_40f",name:"E5. 实验室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","烧杯、瓶子和试管摆放在这个房间中央的大理石桌上，旁边是一个水盆。","一条楼梯向下延伸10尺到 E2，另一条向上延伸10尺到 E6。","如果他在之前的遭遇中幸存下来，厄斯图尔·弗洛克辛（见附录 B）会站在桌旁，阴沉地擦洗实验室设备。","他因为让格洛尔之石从手中溜走而受到惩罚。"],flesh:`这个房间包含以下特点：

烧杯、瓶子和试管摆放在这个房间中央的大理石桌上，旁边是一个水盆。

一条楼梯向下延伸10尺到 E2，另一条向上延伸10尺到 E6。

如果他在之前的遭遇中幸存下来，厄斯图尔·弗洛克辛（见附录 B）会站在桌旁，阴沉地擦洗实验室设备。他因为让格洛尔之石从手中溜走而受到惩罚。尽管如此，他仍然忠于曼松。如果他被质问，Urstul会假装对法师发怒，并主动提出帮助角色们击败他，但这种诡计可以被成功通过DC 14感知（洞察）检定的人识破。如果有机会，Urstul会将角色们带到曼松面前，然后攻击他们，以在主上面前证明他的坚定忠诚。`,spotlightRefs:[],presentNpcIds:["npc_4d9","npc_4bb"],availableInfoIds:["info_41d_g1"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:"如果角色们被Urstul的诡计所欺骗，但仍然要求他交出武器以便陪同他们，这位 Zhent 刺客会嘲笑他们并攻击。",offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_41f",locationId:"loc_40f",name:"E6. 绑定室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的雪花石膏地板上刻有一个符文环绕的圆圈。","当被 侦测魔法 法术或类似魔法瞄准时，它散发出防护魔法的气息。","曼松 使用这个法阵来束缚跨位面生物。","当天界生物、元素生物、精类生物或恶魔被召唤到法阵内时，它无法自愿离开该区域，除非召唤者用一个动作来压制法阵的魔法1分钟。"],flesh:`这个房间的雪花石膏地板上刻有一个符文环绕的圆圈。当被 侦测魔法 法术或类似魔法瞄准时，它散发出防护魔法的气息。

曼松 使用这个法阵来束缚跨位面生物。当天界生物、元素生物、精类生物或恶魔被召唤到法阵内时，它无法自愿离开该区域，除非召唤者用一个动作来压制法阵的魔法1分钟。如果法阵的任何部分位于 反魔法场 范围内，或者 解除魔法 (DC 17) 成功对其施放，法阵的魔法也会被压制。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_420",locationId:"loc_40f",name:"E7. Manshoon的模拟像",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间极其寒冷，包含以下特点：","寒冷的空气通过地板上的小通风口吹进房间。","房间中央是一个由冰雕刻而成的开放式石棺，里面装着一个由雪制成的人形生物。","后墙由5英寸厚的弯曲玻璃制成。","霜覆盖在玻璃上，部分遮挡了另一边半位面上旋转的紫色雾气。"],flesh:`这个房间极其寒冷，包含以下特点：

寒冷的空气通过地板上的小通风口吹进房间。房间中央是一个由冰雕刻而成的开放式石棺，里面装着一个由雪制成的人形生物。

后墙由5英寸厚的弯曲玻璃制成。霜覆盖在玻璃上，部分遮挡了另一边半位面上旋转的紫色雾气。

如果它没有被召唤到其他地方，曼松的模拟像（见 附录 B）背对着门站在玻璃墙前。模拟像看起来像是一个穿着长袍的法师，有着长长的黑发、苍白的皮肤，以及一个可动的金属左手和前臂。它的脸被一个带着微笑表情的钢制面具遮住。模拟像会攻击它不认识的任何人。

该房间适用极度寒冷规则。

每段5尺的玻璃墙具有AC 13，30生命值，并对酸性、毒素和心灵伤害免疫。即使玻璃被打碎，填充半位面的紫色雾气也不会进入这个房间。

这个由冰雕成的容器重1000磅，如果被带出房间就会开始融化。石棺中的雪人是 拟像术 法术的一个材料成分。如果当前的模拟像被摧毁，曼松 可以使用它来创造一个新的模拟像。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_425",locationId:"loc_40f",name:"E8. 阅读室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","从八个带垫子的椅子环绕的绿色火焰火盆中散发出令人愉悦的温暖。","除非他们被引到其他地方，曼松的两位副手在这里：Vevette Blackwater（CE 女性 Tethyrian 人类 剑客；","见 附录 B）和 Agorn Fuoco（NE 男性 Turami 人类 吟游诗人；","见 附录 B）。"],flesh:`这个房间包含以下特点：

从八个带垫子的椅子环绕的绿色火焰火盆中散发出令人愉悦的温暖。

除非他们被引到其他地方，曼松的两位副手在这里：Vevette Blackwater（CE 女性 Tethyrian 人类 剑客；见 附录 B）和 Agorn Fuoco（NE 男性 Turami 人类 吟游诗人；见 附录 B）。Vevette 正坐在椅子上休息，而 Agorn 正在弹奏里拉琴。

一段雪花石膏制成的楼梯上升10尺至E9。

Vevette 和 Agorn 是 曼松 最信任的追随者之二。Vevette 指挥法师的部队对抗 Xanathar 公会，而 Agorn 指挥那些反对不属于 曼松 忠诚的 Zhent 的人。目前，他们正在圣所中休息，同时等待来自 曼松 的命令。

一个 侦测魔法 法术或类似的魔法会显示出一个环绕着祭坛的塑能魔法灵光。每当房间内的生物大声说出 "绿色火焰" 这个词时，祭坛会在自身中心施放一个 火球术 法术（豁免 DC 15）。一旦祭坛施放过这个法术，它在接下来的24小时内无法再次施放。阿戈恩知道祭坛的这个特性，并在情况危急时用于战斗中。`,spotlightRefs:[],presentNpcIds:["npc_4bb","npc_4d6","npc_49a"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_425_e1"],tone:"exploration",_meta:{sourcePages:[159],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_428",locationId:"loc_40f",name:"E9. 图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["雪花石膏制成的书架沿着每面墙排列，并延伸到房间中央，上面摆满了对法师感兴趣的书籍。","曼松 积累了相当大的藏书量，包括他从 Duhlark Kolat 的收藏中移除的十本稀有卷册。","每本稀有书籍价值50金币，整个收藏的价值为5000金币。"],flesh:`雪花石膏制成的书架沿着每面墙排列，并延伸到房间中央，上面摆满了对法师感兴趣的书籍。曼松 积累了相当大的藏书量，包括他从 Duhlark Kolat 的收藏中移除的十本稀有卷册。

每本稀有书籍价值50金币，整个收藏的价值为5000金币。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_42a",locationId:"loc_40f",name:"E10. 接见室",activation:{condition:{type:"always"},priority:0},skeleton:["希望与 曼松 会面的高级 Zhent 人员会来到这里。","这个房间包含以下特点：","这个区域被分为两个层次，雪花石膏台阶上升3尺到达一个较小的升高平台，俯瞰着更大的区域。","平台除了后墙上挂着的三面金色旗帜外，别无他物，每面旗帜上都展示着 散塔林会 的标志——一条黑色的、有翼的蛇在咬着一枚硬币。","房间的下半部分包含一张黑色大理石桌，周围是高背木椅。"],flesh:`希望与 曼松 会面的高级 Zhent 人员会来到这里。这个房间包含以下特点：

这个区域被分为两个层次，雪花石膏台阶上升3尺到达一个较小的升高平台，俯瞰着更大的区域。平台除了后墙上挂着的三面金色旗帜外，别无他物，每面旗帜上都展示着 散塔林会 的标志——一条黑色的、有翼的蛇在咬着一枚硬币。

房间的下半部分包含一张黑色大理石桌，周围是高背木椅。这张桌子与雪花石膏的墙壁和地板形成鲜明对比。

如果他们没有被引到其他地方，曼松的两名追随者正在桌子上进行格斗和模拟拳击。

两位女性轻足半身人——哈维亚·快刀和Mookie Plush——认为曼松是散塔林会的合法领袖。她们无畏地为他服务，并会为他的计划能够成功实施而牺牲自己。她们是武术高手（见附录 B），并有以下变化：

Havia 和 Mookie 是守序邪恶。

它们每个有49点（11d6 + 11）生命值。

他们具有以下种族特征：体型为小型，步行速度为25尺。他们可以通过中型或更大型生物的空间。他们在豁免检定中对被恐慌有优势。他们说通用语和半身人语。

Havia 和 Mookie 每人都佩戴着一个 传送戒指（见"传送戒指"）。`,spotlightRefs:[],presentNpcIds:["npc_4bb","npc_4bd"],availableInfoIds:[],encounterIds:["enc_42a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[159],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_42c",locationId:"loc_40f",name:"E11. Zhent 宿舍",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含以下特点：","这个房间的墙壁上紧挨着五张木床（三张适合人类，两张适合半身人）。","每张床旁边都有一个木制箱子。","一个雪花石膏楼梯向下通往 E12。","凯夫贾洞穴、Vevette Blackwater、Agorn Fuoco、哈维亚·快刀 和 Mookie Plush 都在这里睡觉。"],flesh:`这个房间包含以下特点：

这个房间的墙壁上紧挨着五张木床（三张适合人类，两张适合半身人）。

每张床旁边都有一个木制箱子。

一个雪花石膏楼梯向下通往 E12。

凯夫贾洞穴、Vevette Blackwater、Agorn Fuoco、哈维亚·快刀 和 Mookie Plush 都在这里睡觉。

除了叠好的衣服和无价值的个人物品外，每个箱子里都装有宝藏。

卡耶嘉的宝箱中有一枚镶有红色水晶符文（价值250金币）的金质护身符。成功的DC 15智力（奥秘）检定可以揭示出这枚符文是召唤术的象征，尽管护身符本身没有魔法效果。

Vevette的箱子里有三瓶治疗药水。

Agorn的箱子里装有来自一个名叫Tamzyn的人的一束情书。在一个信封里隐藏着一条优雅的白金项链（价值250金币），上面有一个小巧的浮雕，内含一位美丽的Turami女性的素描肖像。

Havia的箱子里有一把金色的梳子，形状像一条风格化的龙，眼睛上镶嵌着细小的红宝石（价值250金币）。

Mookie的箱子里有一个小巧的半身人玩偶。玩偶里面塞着一个小袋，装有五颗价值100金币的珍珠。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_42c_g1"],encounterIds:[],treasureSlotIds:["trs_42c_0","trs_42c_1","trs_42c_2","trs_42c_3"],eventIds:[],tone:"tension",_meta:{sourcePages:[160],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"}},{id:"scn_42e",locationId:"loc_40f",name:"E12. Manshoon的住处",activation:{condition:{type:"always"},priority:0},skeleton:["除了曼松之外，没有人被允许进入这里。","通往这个房间的雪花石膏楼梯再向下延伸10尺到达E13。","这个房间包含以下特点：","楼梯对面是一张大床，铺着紫色床单。","坐在床边的是一位英俊的年轻男性人类，穿着优雅的长袍。"],flesh:`除了曼松之外，没有人被允许进入这里。通往这个房间的雪花石膏楼梯再向下延伸10尺到达E13。

这个房间包含以下特点：

楼梯对面是一张大床，铺着紫色床单。坐在床边的是一位英俊的年轻男性人类，穿着优雅的长袍。他长长的黑发部分遮住了他那天使般的面孔，因为他正在给他左臂枯萎的残肢安装一个金属附件。

房间里唯一的另一件家具是一张桌子，桌腿雕刻成有翼的蛇形。桌上展示着一个金属面具，面具上有一个令人生畏、暴君般的面容。

这位英俊的年轻人是 曼松（见 附录 B），他的实际年龄远比看起来要大。

这个版本的 曼松 并不寻求战斗。他对角色们能够到达这里表示赞赏，并且对他们击败的 Zhents 毫不关心，因为他认为所有的追随者都是可以牺牲的。

角色们生存的最佳机会是说服 曼松 他们可以被吓倒或被贿赂为他工作。厌倦了与 Xanathar 公会的冲突，曼松 建议角色们通过追捕并杀死其巢穴中的 姗娜萨来证明他们对他的用处。曼松 还要求他们暂时保守他在深水城的存在的秘密，说他会为他们的谨慎在"时机成熟时"给予奖励。作为交换，他允许角色们返回深水城，并承诺一旦确认了 姗娜萨 的死亡，他将在组织中给予他们权力地位。他无意兑现这一承诺，但拒绝为他工作会让角色们陷入困境，因为这位邪恶的大法师不能冒险曝光。

如果发生战斗，曼松 会抓起他的 威力法杖（他藏在床下）并坚守阵地。有关如何扮演 曼松 的更多信息，请参见本章开头的"面对 曼松"。

桌上的面具是非魔法的，但 曼松 喜欢在会见他的追随者之前戴上它。`,spotlightRefs:[],presentNpcIds:["npc_4bb","npc_4e2"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_42e_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[160],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},mapGeometry:{imageRef:"adventure/WDH/Manshoon.webp"}},{id:"scn_430",locationId:"loc_40f",name:"E13. Manshoon的书房",activation:{condition:{type:"always"},priority:0},skeleton:["雪花石膏楼梯在这里结束。","这个房间包含以下特点：","一块柔软的淡紫色地毯覆盖着地板。","在房间的一个远角，一张低矮的桌子摆放在两张紫色沙发之间。","这张桌子内置有一个薄抽屉。"],flesh:`雪花石膏楼梯在这里结束。这个房间包含以下特点：

一块柔软的淡紫色地毯覆盖着地板。

在房间的一个远角，一张低矮的桌子摆放在两张紫色沙发之间。这张桌子内置有一个薄抽屉。

在房间的另一个远角，曼松的咒语书放在一个由一个隐形的恐怖铠甲保护的黑色大理石讲台上。这个构装生物会攻击任何除了曼松之外扰乱书籍的人（在这样做的时候变得可见）。如果曼松在场，它会服从他的命令，并战斗直到被摧毁。

桌子的抽屉上被施放了秘法锁法术。该法术可以通过使用盗贼工具成功通过DC 25敏捷检定的人，或使用敲击术法术或类似魔法来绕过。抽屉也可以通过成功通过DC 21力量（运动）检定强行打开。里面是一本皮革装订的账本，提供了纸面线索，将曼松与两个勒索计划联系起来。花一个小时研究账本可以揭示以下信息：

Corylus Thann，一个种族主义的沃特迪普贵族，正在向 散塔林会 支付费用，以防止他们透露他雇佣 Zhent 暴徒袭击非人类。

Jelenn Urmbrusk，一位沃特迪普贵族，定期从 散塔林会 那里收到款项，以弥补他在不良投资中的损失。

账簿没有透露 Corylus Thann 和 Jelenn Urmbrusk 是蒙面领主，也没有透露 曼松 对他们的勒索还迫使他们利用他们的影响力来掩盖或驳回由 曼松 的部队在深水城犯下的罪行。如果当局获得账簿，他们将围捕任何涉嫌与 曼松 或 散塔林会 有联系的人，这会破坏法师的行动（见"破坏 曼松 的行动"）。令人惊讶的是，Corylus 和 Jelenn 既没有被逮捕，甚至没有被审问。

在账簿中夹着一张纸，上面有一份名字列表，是 曼松 的手写。曼松 保留这份他知道身份的蒙面领主名单，用勾号表示那些他正在勒索的人：

这本咒语书重20磅，封面是巨眼怪的皮。它包含了所有曼松准备的咒语（见附录 B）以及以下咒语：警报术、变身术、活化死尸、反魔法场、秘法锁、枯萎术、解除魔法、支配怪物、托梦术、以太化、艾伐黑触手、羽落术、火球术、飞行术、气化形体、指使术、遗体防腐、守卫刻文、定身怪物、高等幻影、群体暗示术、魅影驹、防护善恶、探知术、徽记术、心灵遥控、传送术、传送法阵、谭森浮碟术、巧言术、真知术、吸血鬼之触、火墙术 和 祈愿术。偷窃或摧毁这本咒语书会破坏曼松的行动（见"破坏曼松的行动"），因为他必须投入时间和资源来取回或替换它。

如果莱拉·银手有机会交换曼松的咒语书，她会为它提供给角色们一艘帆船和一套射手护腕。瓦婕拉·莎法尔为这本书提供给角色们加入Force Grey的会员资格、一件江湖骗子披风和一根闪电束魔杖。

如果曼松拥有格洛尔之石，他会将它和账簿一起放在桌子的抽屉里。`,spotlightRefs:[],presentNpcIds:["npc_4bb","npc_4ba","npc_4db"],availableInfoIds:["info_430_g1","info_430_g2"],encounterIds:["enc_430"],treasureSlotIds:["trs_430_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[160],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判"},dmGuidance:`【表格】米尔特
Corylus Thann √
Thardouk Starbuckler
Jelenn Urmbrusk √
Dorgar Adarbrent`,offerableQuestIds:["qst_main_dragonheist"]},{id:"scn_435",locationId:"loc_40f",name:"特殊事件",activation:{condition:{type:"always"},priority:0},skeleton:["Thann和Umbrusk家族在海港区拥有围墙的庄园。","Thann家族是深水城最著名的葡萄酒商，在这座城市有着深厚的根基。","Corylus（LE 男性 Tethyrian 人类 贵族）乐于让他家族的其他成员管理葡萄酒业务，而他则专注于作为蒙面领主的职责。","不幸的是，他缺乏原则和健全的判断力，这些曾使Thann家族在过去取得成功。","他还把人类的福祉置于非人类之上。"],flesh:`Thann和Umbrusk家族在海港区拥有围墙的庄园。

Thann家族是深水城最著名的葡萄酒商，在这座城市有着深厚的根基。Corylus（LE 男性 Tethyrian 人类 贵族）乐于让他家族的其他成员管理葡萄酒业务，而他则专注于作为蒙面领主的职责。不幸的是，他缺乏原则和健全的判断力，这些曾使Thann家族在过去取得成功。他还把人类的福祉置于非人类之上。过去，他曾利用散塔林会暴徒对寻求城市政治权力的非人类造成伤害。现在，Zhents正在勒索Corylus，威胁要揭露他的偏执，除非他利用作为蒙面领主的影响力来掩盖他们的非法活动。

角色们最有可能在Corylus乘坐马车穿城而过时遇到他，他身边有六名人类警卫们保护他的后背并驱散人群。Corylus拒绝与队伍交谈。Corylus拒绝欠任何人人情，所以角色们任何试图讨好他的尝试都会遭到怀疑，如果不是公然敌意的话。即使他们除掉了曼松，Corylus也拒绝承认他欠他们任何东西。

Jelenn（N 女性 Tethyrian 人类 贵族）是一位五十多岁的骄傲女性，她迫切想要摆脱债务。几笔糟糕的投资破坏了她的放贷业务，而且她的大多数可靠客户已经转而求助于其他供应商，如Cassalanters家族。Jelenn本可以向城市中的许多贵族借钱，或者出售她家族在深水城拥有的一些财产，但这样做会将她私人的财务困境变成当地的八卦。对曝光的恐惧导致她选择从散塔林会那里借钱——一个她后来开始后悔的决定。为曼松工作的Zhents承诺会保守他们的关系秘密，条件是她必须尽一切努力在深水城推进该组织的利益。

当Jelenn不在处理她那些令人讨厌的债权人时，她忙于蒙面领主的事务。她没有时间与任何她不认识的人进行面对面的会面。角色们可以在她进出别墅时面对她，但她从不单独旅行，总有十六名警卫们围绕她形成一个保护墙。Jelenn的威胁大多是虚张声势，因为她并不想树立敌人。

欣喜之下，她会给予他们一项特殊恩惠。另一方面，如果他们威胁要拿着曼松的账本去媒体曝光，试图勒索或抹黑她，她会假装顺从他们，同时秘密利用她作为蒙面领主的权势来给他们制造麻烦。

客栈老板联盟——与面包师公会、屠夫公会以及酿酒师、蒸馏师和啤酒制造商公会联合——决定为Trollskull巷的居民举办一个寒冬日盛宴。Broxley Fairkettle（见"样本公会代表"），询问角色们是否愿意在他们的酒馆举办盛宴。他认为鉴于该地区最近发生的死亡事件，这一举动会受到邻居们的欢迎。

节日的前三天，酒馆里充满了活动和兴奋的气氛。在盛宴当天，有数百人出现参加——不仅有Trollskull巷的居民，还有来自邻近街道的人们。食物充足，但酒馆几乎在人群的重压下吱吱作响，还在外边增设了额外的桌子来处理超额的人流。即使开始下起了大雪，人们似乎也不介意。城市守卫的成员在场确保每个人都表现良好。

在寒冬日盛宴期间没有发生任何暴力事件，但由于人群的原因，酒馆遭受了损坏。木匠、屋顶工和石膏匠公会提出免费进行维修，但角色们必须关闭酒馆十天以便进行工作。然而，关闭对长期业务没有影响，因为盛宴培养了如此良好的意愿，以至于当酒馆重新开业时，客户们会大量回归。

盛宴是角色们与邻居、公会成员和城市守卫警官交往的绝佳机会，同时也是收集有关当地事件信息的好时机。

如果某位玩家在某次游戏会议中缺席，并且情况允许，曼松会在队伍忙于其他事务时将该角色作为替换目标。你不需要扮演角色的捕获过程；只需假设它发生了。为了创造角色的模拟像，曼松需要一些头发、指甲剪下的小片或角色身体的其他部分。一旦他从被捕获的角色那里获得了所需的组件，他就会创造模拟像，并指示它去监视小组并从内部破坏它。

如果曼松在队伍中嵌入了一个模拟像，私下与被替换角色的玩家交谈。然后让那个玩家操作模拟像，直到它被摧毁或者被它替换的角色重新引入。模拟像拥有与角色相同的具体数值，但它只有角色最大生命值的一半，并且不能升级。`,spotlightRefs:[],presentNpcIds:["npc_4bb"],availableInfoIds:[],encounterIds:["enc_435"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[161],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核"},dmGuidance:`在角色探索科拉特塔楼和曼松的超维度圣所之前或之后，您可以使用以下一个或多个特殊事件。
如果角色们从E13获得账簿，并利用其中的信息来面对Corylus Thann或Jelenn Urmbrusk，询问他们与曼松可疑交易的情况，本节描述的事件可能会发生。
如果角色们变得讨厌，他会让八名腐败的城市警卫（人类老兵）对他们进行打压，然后利用他作为蒙面领主的地位清除对这些警卫成员的任何指控。
如果角色们厚颜无耻地提到曼松或散塔林会的名字，Jelenn要求他们不要打扰她，否则将面临严重后果。
如果角色们通过击败曼松使杰琳挣脱了黑网的枷锁，她的债务实际上就被取消了。
如果角色们提供他们的酒馆来举办盛宴，公会代表会来储备物资并为活动装饰酒馆。
如果角色们与曼松成为敌人，他会试图捕获其中一人，并使用拟像术法术创造一个魔法复制品来替换那个角色。`,mapGeometry:{imageRef:"adventure/WDH/Winter-Scene.webp"}}],o=[{id:"npc_495",name:"阿莫戈",aliases:["Ahmaergo"],role:"深水城人物",plotCritical:!1,initialAttitude:-2,personality:"姗娜萨的管家，表面上彬彬有礼、举止周到，骨子里却像最坏的恶魔一样狡诈而腐败。他对眼魔主人忠心不二，凡事先替主子盘算，在公会里说话极有分量——除眼魔之外没人比他更有影响力。他对牛头人有种近乎着迷的兴趣。",voice:"低沉平缓的矮人腔，客套话说得滴水不漏，越是动怒语速反而越慢。",skeleton:["阿莫戈，姗娜萨的管家，对牛头人很感兴趣。","尽管表面上彬彬有礼，这位盾矮人和最坏的恶魔一样狡猾和腐败，但同时也对他的巨眼怪主人忠心耿耿。","在巨眼怪之后，阿莫戈 是克兰萨瑟公会中影响力最大的成员。"],flesh:"",appearance:{tags:["盾矮人","壮实","阔斧不离手","彬彬有礼"],description:"壮实的盾矮人，举手投足透着管家式的周到，随身一柄大阔斧与一把重弩，说话时始终盯着对方看。"},knownInfoIds:["info_28b_g1"],recruitable:!1,_meta:{sourcePages:[193],confidence:"medium",needsReview:!0,extractorNotes:"personality/态度据 p193 原文（外表彬彬有礼、狡诈腐败、忠于眼魔主人、公会二号人物）；race 取附录怪物档 humanoid(dwarf)＋原文「盾矮人」。voice 与 appearance 细节为按性格/武装推导，待复核。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"阿莫戈|WDH",factions:["珊娜萨工会"],race:"盾矮人"},{id:"npc_496",name:"阿玛利亚·卡萨兰特",aliases:["Ammalia Cassalanter"],role:"深水城人物",plotCritical:!0,initialAttitude:1,personality:"卡萨兰特家族的女主人，精通奥术，举止优雅、学识渊博、见多识广，而且格外精明。她以谈判时寸步不让的强硬立场闻名，虚荣心也从不掩饰。她痴迷蝴蝶学，自家庄园里养着全城最美的蝴蝶园，只有在监督最年幼的一对孩子在园中玩耍时才真正松弛下来。",voice:"上流社会的圆润措辞，语速不紧不慢，谈到价码时会突然收住笑意。",skeleton:["虚荣的 卡萨兰特家族的女士 是卡萨兰特家族的女主人，她精通奥术。","和她丈夫维克托一样，她崇拜阿斯蒙蒂斯。","年轻时，阿玛莉亚和维克托与大恶魔签订了一份契约，用他们孩子们的灵魂换取力量、健康和长寿。","他们的长子奥斯瓦尔多的灵魂被立即取走，他被变成了一个锁链恶魔。","而年幼的双胞胎，特伦齐奥和埃尔泽丽娜的灵魂将在他们九岁时被取走。","合同中的一项条款允许卡萨兰特家族用金钱赎回自己，但这样做需要巨额的金钱和大量不幸之人的牺牲。","维克托在寻找达格特·诺瓦姆贝尔遗失的黄金宝藏时，阿玛莉亚计划在创始者日举办一场使参与者被 中毒 的盛宴庆祝。","阿玛莉亚举止优雅，学识渊博，见多识广，并且格外精明。"],flesh:"",appearance:{tags:["贵妇仪态","华服考究","蝴蝶纹样"],description:"衣饰考究、妆容一丝不苟的贵妇，接待来客时多半选在自家的蝴蝶园里。"},knownInfoIds:["info_31f_g1","info_31f_g2"],recruitable:!1,_meta:{sourcePages:[193],confidence:"medium",needsReview:!1,extractorNotes:"personality/voice 据 p193 原文（虚荣、优雅、学识渊博、格外精明、谈判强硬、蝴蝶学爱好）；race 取附录怪物档 humanoid(human)。契约相关内情属 skeleton，公开字段只写待客口径。initialAttitude 取 +1 而非敌对档：原文中她以女主人身份设宴款待来客，初见并不与冒险者为敌，敌意由剧情揭示后再走关系推进。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"阿玛利亚·卡萨兰特|WDH",factions:["卡萨兰特家族"],race:"人类"},{id:"npc_497",name:"学徒法师",aliases:["Apprentice Wizard"],role:"深水城人物",plotCritical:!1,initialAttitude:1,personality:"新手奥术施法者，或替更有经验的法师打下手，或还在学堂里念书。他们做饭、打扫、跑腿，用杂役换取学习魔法的机会，因此对上位者格外恭顺，也总盼着有人肯多教两手。多数人急着把刚学会的把戏演给别人看。",voice:"语速偏快、容易紧张，一说到自己会的法术就滔滔不绝。",skeleton:["学徒法师是新手奥术施法者，他们为更有经验的法师服务或上学。","他们做诸如烹饪和清洁等杂务，以换取学习魔法的方式。"],flesh:"",appearance:{tags:["素净长袍","墨渍手指","书本不离身"],description:"穿着素净长袍的年轻施法者，手上常沾着墨水，怀里不是抄本就是扫帚。"},knownInfoIds:["info_273_g1","info_297_g1"],recruitable:!1,_meta:{sourcePages:[194],confidence:"medium",needsReview:!0,extractorNotes:"p194 原文只给了「新手施法者、以杂务换学习机会」两句；voice/appearance/态度均为按角色原型推导。race 省略：原型条目不限种族。；overlay覆写:personality/voice/initialAttitude/appearance/_meta"}},{id:"npc_498",name:"奥瑞纳克斯",aliases:["Aurinax"],role:"深水城人物",plotCritical:!0,initialAttitude:0,personality:"一位守誓的金龙。当年开放领主达格特·诺维姆贝尔与他立约：阿盖尔伦的龙杖归他，他替城市守着地下的金库，等宝藏被取走便可带着龙杖回龙塔。约定至今无人来解，他就一直守在金库里，忠实得近乎固执。他把承诺看得比自由更重，也绝不轻易相信自称有资格取走宝藏的人。",voice:"洪亮而庄重的嗓音，字句缓慢，像在逐条宣读一份契约。",skeleton:['奥瑞纳克斯 是一只雄性的 成年金龙，他可以自由地无视 阿格海尔的龙卫（见"阿格拉隆的龙咒"），并居住在城市中。',"Maaril，最后一位挥舞着 阿盖尔伦的龙杖 的大法师，是 奥瑞纳克斯 的朋友，并邀请这条龙与他一起居住在城市中的龙之塔。","在魔法瘟疫前不久，Maaril 疯狂地离开了深水城，并将 阿盖尔伦的龙杖 交给了 奥瑞纳克斯。","（见 附录A 了解有关龙杖的信息。","）","当达格特·诺维姆贝尔成为深水城的开放领主时，他与龙达成了一项协议。","根据协议的条款，奥瑞纳克斯可以保留阿盖尔伦的龙杖，以换取守卫城市下方的一个金库。","当诺维姆贝尔最终将宝藏从金库中移走时，奥瑞纳克斯和龙杖可以返回龙塔。"],flesh:"",appearance:{tags:["通体金鳞","庞然巨躯","龙杖不离身"],description:"一头通体金鳞的成年巨龙，盘踞在深水城地下的金库中，阿盖尔伦的龙杖始终放在触手可及处。"},knownInfoIds:["info_239_g1"],recruitable:!1,_meta:{sourcePages:[194],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p194 原文（与马瑞尔的友谊、与诺维姆贝尔的协议、无人来取宝藏故长守金库）。appearance/race 取「金库中所见」口径；原文另载他常以年迈金矮人巴洛克·钟锤的样子在城中走动、以龙杖作手杖——该形象归 skeleton/identities，公开字段未写。voice 为推导。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"奥瑞纳克斯|WDH",race:"金龙"},{id:"npc_49a",name:"吟游诗人",aliases:["Bard"],role:"深水城人物",plotCritical:!1,initialAttitude:2,personality:"有天赋的诗人、说书人兼表演者，四处漂泊，哪儿有酒馆哪儿就是他们的舞台。他们靠讨好听众吃饭，见人先递笑脸，最爱打听新鲜事，好把它编进下一支曲子。欢闹的冒险队伍、粗豪的雇佣兵或阔绰的赞助人在场时，他们绝不缺席。",voice:"咬字清亮、抑扬顿挫，随口就能把一句闲话唱成半段谣曲。",skeleton:["吟游诗人 是有天赋的诗人、讲故事者和表演者，他们四处旅行，通常可以在酒馆中发现他们在表演，或者与欢乐的冒险者团体、粗犷的雇佣兵，或富有的赞助人相伴。"],flesh:"",appearance:{tags:["乐器随身","花哨衣饰","伶俐做派"],description:"衣着比钱包更体面的表演者，鲁特琴或长笛从不离手，进门先扫一眼哪一桌肯掏钱。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[195],confidence:"medium",needsReview:!0,extractorNotes:"p195 原文仅一句原型描述（诗人/说书人/表演者，出没酒馆，伴随冒险队、雇佣兵或赞助人）；voice/appearance/态度为推导。race 省略：原型条目不限种族。；overlay覆写:personality/voice/initialAttitude/appearance/_meta"}},{id:"npc_49b",name:"巴尼布斯·阵风",aliases:["Barnibus Blastwind"],role:"深水城人物",plotCritical:!1,initialAttitude:1,personality:"为守望法师与保护者秩序办案，专查涉及魔法的罪案。他给人易怒又神秘的印象，只对退休军士萨斯·克姆利敞开心扉。他用法术从嫌犯脑中掏秘密、找失踪的人，却对暴力极度反感——哪怕有人伤了他，他也绝不用魔法伤人。不办案时，他窝在海港区那处继承自祖母的小屋，或者泡在图书馆里读书写书。",voice:"简短生硬的问句一个接一个，被打断时语气立刻发冲。",skeleton:["巴尼布斯 为守望法师与保护者秩序工作，调查涉及使用魔法的犯罪。","他给人的印象是易怒和神秘，只向 萨斯·克姆利 吐露心声，Saeth Cromley 是一位退休的 军士，他是城市警卫的一员，协助他进行许多调查。","Barnibus是一个终身未婚者，在海港区有一处从祖母那里继承来的小巧整洁的房产。","当他不服务于警惕秩序时，他会在图书馆里阅读和写作书籍。","Barnibus 使用法术帮助他调查犯罪，从嫌疑人的脑海中探查秘密，并定位失踪人员。","他发现暴力令人震惊，绝不会使用他的魔法对他人造成伤害——即使是那些伤害他的人。"],flesh:"",appearance:{tags:["法师装束","独来独往","神情戒备"],description:"衣着整洁朴素的独身法师，进门先把在场每个人打量一遍，手边常压着案卷。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[195],confidence:"medium",needsReview:!1,extractorNotes:"personality/voice 据 p195 原文（易怒神秘、只信任萨斯·克姆利、用法术查案、厌恶暴力从不伤人、终身未婚、海港区祖屋、图书馆读写）；race 取附录怪物档 humanoid(human)。appearance 为按性格推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"巴尼布斯·阵风|WDH",factions:["守望法师与保护者秩序"],race:"人类"},{id:"npc_49c",name:"黑毒蛇",aliases:["The Black Viper"],role:"深水城人物",plotCritical:!1,initialAttitude:-2,personality:"顶着一个世纪前那位大盗名号行事的蒙面劫匪，专挑深水城的贵族下手。这人刻意经营着黑毒蛇的传说：斗篷一掀，多数目标扔下钱包就跑；吓不住的才见匕首。撬锁、从腰带上摸钥匙、翻墙、贴着守卫溜过去都是看家本事，遇上硬茬也不怯战。行事鲁莽而享受其中，却清楚自己在玩一场危险的游戏。",voice:"压低的沙哑嗓音，短句、带笑意，得手后总要撂下一句挖苦。",skeleton:["黑毒蛇 是一个声名狼藉的窃贼、扒手、劫匪和刺客，一个世纪前结束了他漫长而邪恶的职业生涯。","Esvele Rosznar，一个鲁莽的年轻贵族，最近采纳了 黑毒蛇 的身份来领导一个秘密的犯罪生活。","像许多其他贵族一样，Esvele 八卦关于 黑毒蛇 的冒险故事，以此来增加这个恶棍的神秘感。","Rosznar 家族因从事奴隶贸易——在深水城是高度非法的——而在一百多年前被定罪并放逐，但此后已经返回。","Rosznar 家族无法重新获得他们认为应得的尊重，这让他们感到痛苦。","奴隶贸易在 Amn 和其他地方仍在继续，而且并不是其他贵族家庭没有自己的阴暗面。","但仅仅因为一次小小的家族纷争被公之于众，Rosznar 这个名字一个世纪以来一直被人带着轻蔑提及。","作为家族不断努力证明这种看法错误并赢得他人尊重的一部分，Esvele 被培养成了尽可能完美的贵族，参与礼仪、舞蹈和仪态课程，这些正符合她的身份。"],flesh:"",appearance:{tags:["兜帽面罩","拼凑的实用衣装","匕首在腰"],description:"一身耐磨的实用衣装，面孔藏在兜帽与面罩之后，腰间别着匕首，动作轻得几乎没有声音。"},knownInfoIds:["info_2f0_g1"],recruitable:!1,_meta:{sourcePages:[196],confidence:"medium",needsReview:!0,extractorNotes:"personality/appearance 据 p196 原文中「黑毒蛇」这一面示人的口径（兜帽面罩、拼凑衣装、掀斗篷吓退目标、撬锁攀墙、会打）；名号背后的来历归 skeleton。race 取附录怪物档 humanoid(human)。voice 为推导。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"黑毒蛇|WDH",race:"人类"},{id:"npc_49d",name:"城市守卫",aliases:["City Guard"],role:"深水城人物",plotCritical:!1,initialAttitude:0,personality:"深水城的军队，负责守卫城墙、城门、政府建筑、港口与官员，也巡逻通往安菲尔、金野与匕首谷的大路。列兵与军士出身行伍，讲等级、认号令，对陌生的持械者天然警惕，但认得徽记也认得公文。骑乘狮鹫的狮鹫骑兵是其中的精锐分支。",voice:"军中口令式的短句，一板一眼，动辄搬出条令压人。",skeleton:["城市警卫是深水城的军队，负责保护城市的城墙和大门、政府建筑、港口和官员。","城市警卫还巡逻通往Amphail、Goldenfields和Daggerford的道路。","城市警卫成员有等级之分。","从低到高，它们是：","列兵","军士（军士）","中尉（巡城官）","队长（高级民政官）"],flesh:"",appearance:{tags:["制式装备","成队行动","军旅做派"],description:"整队行动的士兵，甲械与徽记齐整，值勤时目光扫过每一个过路人。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[197],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p197 原文（职责范围、巡逻路线、军衔序列、狮鹫骑兵分支、列兵与军士为警卫、少尉以上为老兵）；voice/appearance/态度为推导。race 省略：条目不限种族。；overlay覆写:factions/personality/voice/initialAttitude/appearance/_meta"},factions:["城市警卫"]},{id:"npc_4a0",name:"城市守卫",aliases:["City Watch"],role:"深水城人物",plotCritical:!1,initialAttitude:0,personality:"深水城的警察力量，维持治安、缉拿罪犯，四到十二人一队在街上巡逻。他们被称为「官员」，讲规矩、看凭证；预料到麻烦时会向神庙借一位牧师，或请守望法师与保护者秩序派人随队。值勤时人人戴盔、带短棒，遇上街头斗殴的第一反应是先把人拉开，再问是谁先动的手。",voice:"公事公办的盘问口吻，语速平稳，报出头衔与条例来压场面。",skeleton:["城市守卫是深水城的警察力量，负责维护和平和逮捕罪犯。","城市守卫的巡逻队通常由四到十二人组成。","预计会遇到麻烦的巡逻队可能还会有来自当地某个寺庙的牧师（借用）或来自守望法师与保护者秩序的法师作为增援。","城市守卫的成员被称为官员。","他们的等级从低到高是：","警长","军士（军士）","中尉（巡城官）"],flesh:"",appearance:{tags:["值勤头盔","腰挂短棒","巡逻小队"],description:"戴着头盔、腰间挂短棒的巡逻队，队形松散但眼睛不闲着。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[198],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p198 原文（职责、四到十二人巡逻队、可加派牧师或法师、官员军衔序列、值勤戴盔携短棒、多为老兵）；voice/appearance/态度为推导。race 省略：条目不限种族。；overlay覆写:factions/personality/voice/initialAttitude/appearance/_meta"},factions:["城市守卫"]},{id:"npc_4a3",name:"末日劫掠者",aliases:["The Doom Raiders"],role:"深水城人物",plotCritical:!1,initialAttitude:0,personality:"五个不择手段的前冒险者，靠洗劫巫妖巢穴挣下名声，三年前来到深水城，如今是黑网分部的头面人物。他们分工分明：机会与谈判大师专挑有赚头的买卖、也最会交朋友；贸易与货币大师在码头区仓库放贷，收不回来就派打手；魔法大师在贸易区开着一家窄小铺子卖药水；武器与雇佣兵大师负责甲械与训练；还有一位半兽人猎人只在朋友开口时才出手。这些年他们四处结盟也四处结仇，一边还得防着竖琴手的眼线。",voice:"开口先谈生意，语气随和体面，条件却一分不让。",skeleton:['末日突袭者是五个不择手段的冒险者，他们喜欢掠夺巫妖的巢穴（有些人称之为"末日"）。',"他们放弃了冒险，加入了黑网，并在三年前来到深水城，计划在这座城市建立一个散塔林会的据点。","在那段时间里，他们与各种贵族和行会结成了联盟，同时得罪了其他人，并且一直在抵御哈珀间谍。","在深水城黑网分部中，达维尔被授予机会与谈判大师的头衔，因为他擅长发现有利可图的商业交易，并且他很容易结交朋友。","像许多太阳精灵一样，Davil对魔法有着天然的亲和力，并且他拥有与长寿相伴随的耐心。","与大多数精灵不同，他一点也不矫揉造作或高傲。","他在打哈欠的门户（Yawning Portal）保留了一个房间，并在该机构的酒吧里处理所有的业务。","即使在醉酒状态下，他也能优雅而从容地进行交易谈判，并使用精灵鲁特琴作为施法焦点。"],flesh:"",appearance:{tags:["五人各具排场","衣着体面","黑网做派"],description:"五个人各有各的门面：有人抱着精灵鲁特琴在酒馆吧台上谈买卖，有人守着码头仓库清账，也有人一身皮甲、背着一张超大长弓。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[198],confidence:"medium",needsReview:!0,extractorNotes:"群体条目（p198-201）：五名成员各自的性格散在原文（达维尔不高傲、伊思崔德喜欢让人欠债、斯齐莫两头拿钱、塔什琳易怒好斗、兹拉吉沉默寡言）。此处只给群体口径，逐人条目须另建。voice/appearance/态度为推导；race 省略（五人种族不一）。；overlay覆写:factions/personality/voice/initialAttitude/appearance/_meta"},factions:["散塔林会"]},{id:"npc_4aa",name:"卓尔火枪手",aliases:["Drow Gunslinger"],role:"深水城人物",plotCritical:!1,initialAttitude:-1,personality:"布雷根·达厄特里配备兰坦手枪的枪械专家，用枪的本事就像最好的弓手用弓。他们多半是被家族剥夺权势后投奔这支队伍的男性卓尔，对团伙和它的首领的忠诚远高于对旧日故乡的忠诚。同伴之间常拿敌人开玩笑，出手却毫不含糊；有人急于自证而抢着接任务，有人年轻鲁莽，也有人残忍成性。",voice:"带幽暗地域口音的通用语，语速快，句尾爱挑衅地上扬。",skeleton:["枪械在北方并不普遍，但Bregan D'aerthe的一些成员配备了Lantanese手枪、子弹和烟雾火药包。","这些黑暗精灵枪手是手枪专家，他们使用枪械的技巧就像最好的弓箭手使用弓箭一样熟练。","Fel'rekt是一位出生时为女性的男性黑暗精灵。","由于不满社会中对男性的待遇，他请求加入Bregan D'aerthe。","Jarlaxle几乎立刻就对Fel'rekt产生了好感，这位年轻的黑暗精灵从此成为了Jarlaxle最忠诚的副手之一。","渴望证明自己的Fel'rekt总是急于自愿接受任务，并以极大的热情投身于战斗之中。","Fel'rekt和克雷比格·马斯奇尔是亲密的朋友，他们作为团队一起工作，以敌人为乐互相开玩笑。","Fel'rekt没有大多数黑暗精灵常见的残忍，除非别无选择，否则他不会杀死对手。"],flesh:"",appearance:{tags:["深色皮肤白发","手枪与弹袋","发烟粉","利落黑衣"],description:"黑皮肤白发的卓尔，腰间挂着兰坦手枪、二十发子弹的小袋与四包发烟粉，动作干脆利落。"},knownInfoIds:["info_0a6_g1","info_350_g1","info_355_g7","info_355_g10"],recruitable:!1,_meta:{sourcePages:[201],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p201 原文（枪械专家、三名代表人物菲尔莱科特/克雷比格/索鲁恩的性格）；race 取附录怪物档 humanoid(drow elf)。voice/appearance/态度为推导；三人各自的具体倾向（含索鲁恩对地表精灵的仇恨）宜另建逐人条目。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"卓尔火枪手|WDH",factions:["布雷甘·达特"],race:"卓尔精灵"},{id:"npc_4b1",name:"杜尔南",aliases:["Durnan"],role:"哈欠传送门店主",plotCritical:!0,initialAttitude:1,personality:"打哈欠传送门的老板兼所有者，能一句话说清的事绝不说两句。他从不谈自己的过去，也绝口不提当年的冒险生涯；若说还有在世的亲人，他从未提起过。他有种冷幽默，对下地下山脉的人向来不留情面。真动起手来，他更爱用拳头，或者一只扔得极准的大酒杯。",voice:"低哑简短的答话，几乎不带语气，冷笑话总在你以为他不会开口时冒出来。",skeleton:["杜尔南是打哈欠门户（Yawning Portal）的老板和所有者。","尽管他看起来像是一个最好的日子已经过去的中年人，但杜尔南拥有敏锐的头脑，并且在必要时仍然能够挥舞剑。","他不喜欢谈论自己的过去，也不会透露任何关于他作为冒险家的时间。","如果杜尔南有任何在世的家庭成员，他从不提及他们。","他很少说两句话，当一句话就足够时。","他有一种黑暗的幽默感，对于那些冒险进入下层山脉（Undermountain）的人，他毫不留情。","他把格里姆瓦尔特（Grimvault），他的魔法巨剑，放在吧台下方随手可得的地方，如果他愿意，可以用它将桌子一劈为二。","他还可以随时拿出一把双管弩（一种射程较短但能同时向同一目标发射两支弩箭的重型弩）。"],flesh:"",appearance:{tags:["中年壮硕","吧台后","眼神锐利"],description:"看着像是好日子已经过去的中年人，站在吧台后擦着杯子，眼神却比谁都清醒；吧台下随手可及处压着他的魔法巨剑和一把双管弩。"},knownInfoIds:["info_040_g3"],recruitable:!1,_meta:{sourcePages:[202],confidence:"medium",needsReview:!1,extractorNotes:"personality/voice/appearance 全据 p202 原文（老板身份、不谈过去、话极少、黑色幽默、拳头与大酒杯、吧台下的格里姆瓦尔特与双管弩、貌似过气的中年人）；race 取附录怪物档 humanoid(human)。态度按店主口径取 +1（原文性格冷硬故不更高）。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"杜尔南|WDH",race:"人类"},{id:"npc_4b2",name:"福卢恩·布拉格玛",aliases:["Floon Blagmaar"],role:"深水城人物",plotCritical:!0,initialAttitude:2,personality:"三十出头的本地人，长得俊、脑子不太灵光。他曾在节庆大厅当伴游，眼下失业，靠一笔按月送来的封口钱过活。全城都是他的朋友，日子多半泡在酒和狂欢里；他吃的是这张脸的饭，对靠做工谋生兴趣寥寥，也说不清自己想要什么。",voice:"热络自来熟的醉腔，话头跳来跳去，三句里两句拐回自己身上。",skeleton:["福卢恩，一位三十出头的本地深水城人，是个英俊的家伙，但不太聪明。","他过去在节庆大厅担任伴游，但目前失业。","几个月前，他撞见一位已婚贵族正在进行一些不检点的行为，现在靠对方为让他保持沉默而支付的丰厚贿赂生活。","Floon在全城都有朋友，他大部分时间都在喝酒和狂欢中度过。","他依靠自己的外表度日，对生活没有明确的目标，并且对靠工作谋生表现出很少的兴趣。","Floon是一位混乱善良的Illuskan人类平民，智力为7（-2），魅力为13（+1）。","他说通用语。"],flesh:"",appearance:{tags:["三十出头","英俊","衣着招摇","总带酒气"],description:"三十出头的英俊男子，衣服比钱包体面，笑容来得又快又轻易。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[202],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p202 原文（英俊但不聪明、前节庆大厅伴游、靠贿赂度日、朋友遍城、终日饮酒、无人生目标、智力7/魅力13）；race 取原文「Illuskan人类」。voice/appearance 细节为推导。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"福卢恩·布拉格玛|WDH",race:"人类"},{id:"npc_4b4",name:"凝视者眼魔",aliases:["Gazer"],role:"深水城人物",plotCritical:!1,initialAttitude:-2,personality:"眼魔梦境里蹦出来的巴掌大小怪物，只有四根眼柄。造出它的眼魔能借它的眼睛看东西，用它盯着敌人，也盯着自己的其他手下。它不会真正说话，却会用尖利刻薄的调门复读人的字句，跟着人在自己的地盘里绕，烦到对方离开为止。落单时它躲着中型以上的生物走，成群时才敢招惹大猎物；打不过就跑。",voice:"尖细刺耳的复读，把别人刚说的话学得走了调，听着像在挖苦。",skeleton:["凝视者眼魔是眼魔梦境的微小体现。","它与创造它的眼魔相似，但其身体仅有8英寸宽，并且只有四只眼梗。","眼魔可以通过gazer的眼睛看到，并使用它来监视敌人以及它的其他手下。","A gazer不能说话，但可以以一种尖锐、讽刺的方式模仿单词和句子。","一只孤独的gazer会避免与中型或更大的生物战斗，但一群gazer可能会攻击更大的猎物。","一只gazer可能会在其领地内跟随类人生物，大声模仿他们的语言，通常很烦人，直到他们离开该区域，但如果遇到它无法杀死的东西，它会逃跑。"],flesh:"",appearance:{tags:["八英寸小球体","四根眼柄","浮空盘旋"],description:"只有八英寸宽的小小球状怪物，四根眼柄不停乱转，贴着屋梁飘来飘去。"},knownInfoIds:["info_28d_g1"],recruitable:!1,_meta:{sourcePages:[203],confidence:"medium",needsReview:!1,extractorNotes:"personality/voice/appearance 全据 p203 原文（眼魔梦境的微小体现、8英寸宽、四根眼柄、被眼魔用作耳目、以尖锐讽刺的方式模仿字句、避战与逃跑习性）。态度按其骚扰/监视习性取 -2。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},race:"凝视者眼魔"},{id:"npc_4b5",name:"胡拉姆",aliases:["Hlam"],role:"深水城人物",plotCritical:!1,initialAttitude:1,personality:"住在深水城山半山腰洞穴里的武僧，公正之手秩序的宗师——那是一个奉泰尔为神的小僧团。他把神圣之拳之道传给上门求艺的人，只是来者多半带着一身淤青和满头困惑回城，而且不愿再来第二次。大难当头时可以求他出手：有时他递出一颗感悟之珠，有时他直接下山，用拳头把事情解决。角色若需要指点或训练，随时可以上他的洞里去。",voice:"话极少，一句顶十句，语调平得像在陈述天气。",skeleton:["这位受人尊敬的人类武僧居住在深水城山半山腰的一个洞穴中。","胡拉姆是公正之手秩序的宗师，这是一个致力于Tyr的小僧侣团体。","有志之士定期拜访他，学习神圣之拳之道，它结合了牧师魔法和武僧训练。","他们通常带着困惑、瘀伤返回城市，并且不再愿意再次拜访。","在巨大危险的时刻，可以召唤胡拉姆来帮助。","有时他会提供感知的珍珠，有时他会从洞穴中下来，用拳头解决问题。","他可以在故事的任何时刻作为有益的人物出现，如果角色需要指导或训练，他们可以在他的洞穴中拜访他。","Gauntlet秩序认为他是一个坚定的盟友。"],flesh:"",appearance:{tags:["苦行僧装束","赤手空拳","不见老态"],description:"隐居在半山洞穴里的武僧，衣着极简，虽有年岁却看不出衰弱。"},knownInfoIds:["info_0ad_g1","info_255_g1"],recruitable:!1,_meta:{sourcePages:[204],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p204 原文（人类武僧、公正之手宗师、奉泰尔、教神圣之拳、求艺者带伤而归、危难时可召来相助、免疫疾病不需饮食、老而不衰）；race 取原文「人类武僧」＋附录 humanoid(human)。voice/appearance/态度为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"胡拉姆|WDH",factions:["公正之手秩序"],race:"人类"},{id:"npc_4b6",name:"哈巴兹",aliases:["Hrabbaz"],role:"深水城人物",plotCritical:!1,initialAttitude:-1,personality:"格拉尔洪德家族领主与夫人的保镖，举止优雅、衣着无可挑剔——这副迷人的门面底下是一颗残忍的心。他对雅拉夫人极为敬重，对她那位情绪化的丈夫就没什么好脸色；看见奥隆德被人压一压，他心里还挺舒坦。",voice:"低沉简短的应答，礼貌得体，越是要动手语气反而越轻。",skeleton:["哈巴兹是一位肌肉发达的半兽人，有腭裂，担任格拉尔洪德家族领主和夫人的保镖。","他举止优雅，衣着无可挑剔——这种迷人的外表掩盖了他残忍的内心。","尽管他对雅拉·格劳洪德夫人非常尊敬，但他对她情绪化的丈夫不太喜欢，如果看到奥隆德被打压一两次，他也不会感到难过。"],flesh:"",appearance:{tags:["肌肉发达的半兽人","腭裂","衣着无可挑剔"],description:"身形壮硕的半兽人，唇上有腭裂的痕迹，一身裁剪讲究的衣装，站姿像随时会出手。"},knownInfoIds:["info_0ef_g2"],recruitable:!1,_meta:{sourcePages:[205],confidence:"medium",needsReview:!0,extractorNotes:"personality/appearance 据 p205 原文（肌肉发达半兽人、腭裂、举止优雅衣着无可挑剔、内心残忍、敬重雅拉、不喜奥隆德）；race 取附录怪物档 humanoid(half-orc)。voice/态度为推导。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"哈巴兹|WDH",race:"半兽人"},{id:"npc_4b7",name:"加莱斯特·银鬃",aliases:["Jalester Silvermane"],role:"深水城人物",plotCritical:!1,initialAttitude:2,personality:"二十多岁中段的认真男子，来自遥远的科米尔，早年在「钢铁阴影」雇佣兵团挣得资历。如今他是开放领主在深水城与领主联盟的外勤特工，办起事来一板一眼。他与挚友兼爱人费雷尔一同揭发过一桩推翻政府的阴谋，费雷尔却在收网时丧命；此后他再没有与人相恋，心里却盼着再爱一次。",voice:"认真而克制的语调，谈公务条理分明，提到旧事时会先停顿一下。",skeleton:["贾莱斯特是一位二十多岁中期的认真男子，他来自遥远的科米尔（Cormyr）土地，在那里他为一家名为钢铁阴影（Steel Shadows）的雇佣兵公司工作，赢得了他的马刺。","几年前，Jalester离开了谷地（Dales），与公司的其他几名成员一起前往深水城，其中之一——Faerrel Dunblade——将成为他最好的朋友和情人。","法师Elminster与这两位年轻人交了朋友，并将他们介绍给了莱拉·银手，后者让他们担任副手和间谍。","Jalester和Faerrel帮助开放领主揭露了一起推翻政府的阴谋，但在帮助将肇事者绳之以法时，Faerrel被杀。","此后，Jalester留在了深水城，成为了Laeral在深水城和领主联盟服务中的一名外勤特工。","自从Faerrel去世以来，他一直没有恋爱关系，但他渴望再次拥有爱情。","Jalester携带一枚警卫徽章（如果不使用盾牌，可获得+2的护甲等级加成）。","如果徽章丢失或被夺走，它将返回到莱拉·银手那里。"],flesh:"",appearance:{tags:["二十多岁","精悍","佩剑","警卫徽章"],description:"神色认真的年轻男子，身形精干，身上带着一枚会自行飞回主人手中的警卫徽章。"},knownInfoIds:["info_26d_g1"],recruitable:!1,_meta:{sourcePages:[205],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p205 原文（二十多岁中期、来自科米尔、钢铁阴影雇佣兵团、经艾尔明斯特引荐为莱拉的副手与间谍、费雷尔之死、至今未再恋爱但渴望爱情、携警卫徽章）；race 取附录怪物档 humanoid(human)。voice/appearance 为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"加莱斯特·银鬃|WDH",factions:["领主联盟"],race:"人类"},{id:"npc_4b9",name:"贾拉索·班瑞",aliases:["Jarlaxle Baenre"],role:"深水城人物",plotCritical:!0,initialAttitude:1,personality:"华丽而大胆的异端，领着布雷根·达厄特——一支由被剥夺权势的男性卓尔组成的叛逆派系。他脑子极快、爱说笑、剑术了得，随身魔法物件多得数不清，最擅长织一张错综复杂的阴谋网把敌人绕晕。他曾潜入路斯坎、给那座无法无天的城市带来某种秩序，并自称它的秘密领主；眼下他一心要把路斯坎塞进领主联盟，为此不惜得罪其他成员。他的忠诚首先给自己，其次才给布雷根·达厄特。",voice:"抑扬夸张的表演腔，笑声先于结论，越危险的话说得越轻快。",skeleton:["贾拉索是一个华丽、大胆的黑暗精灵异教徒。","他领导着一个名为Bregan D'aerthe的叛逆黑暗精灵派系，由被剥夺权利的男性黑暗精灵组成，他们大多数来自被摧毁或蒙羞的家族。","Jarlaxle拥有敏锐的头脑、幽默感、强大的剑术技能和大量有用的魔法物品，他潜入了路斯坎城，给这座无法无天的城市带来了某种秩序，并自称为它的秘密领主。","Jarlaxle喜欢编织一个错综复杂的阴谋网，让他的敌人感到困惑——最新的计划是让路斯坎成为领主联盟的成员，以此来合法化它。","这座城市的不良声誉阻碍了之前的所有努力，领主联盟的现任领导人已经表达了他们对路斯坎加入的反对。","一些人明确宣布这座城市永远不会在联盟中受欢迎。","尽管如此，Jarlaxle仍打算说服深水城的开放领主莱拉·银手，支持路斯坎的事业——即使这意味着在这个过程中失去其他联盟成员。","将路斯坎的命运与深水城联系起来将增加Jarlaxle在剑海岸的政治和经济实力。"],flesh:"",appearance:{tags:["华丽招摇","宽檐羽饰帽","满身魔法物件","佩剑"],description:"一身浮夸行头、招摇过市的身影，佩剑与各式魔法小玩意从不离身，进门先让所有人看见他。"},knownInfoIds:["info_0a6_g2","info_26b_g1","info_26b_g2","info_13e_g3","info_13e_g4","info_355_g10","info_3ae_g1"],recruitable:!1,_meta:{sourcePages:[206],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p206 原文（华丽大胆、领导布雷根·达厄特、敏锐幽默剑术强、爱织阴谋网、推动路斯坎入盟、忠诚先给自己）。race 有意省略：附录怪物档记 humanoid(elf)，而原文载他在深水城公开以「海上少女博览会」主人佐多兹·佐德船长的名义活动、该口径为伊路斯坎人类；两说抵触，故 race 留空、appearance 取不指认种族的行头口径，待人工拍板。；overlay覆写:factions/personality/voice/initialAttitude/appearance/_meta"},combatRef:"贾拉索·班瑞|WDH",factions:["布雷甘·达特"]},{id:"npc_4ba",name:"莱拉·银手",aliases:["Laeral Silverhand"],role:"深水城人物",plotCritical:!1,initialAttitude:2,personality:"深水城的开放领主，生于斗篷年，七姐妹之一。当年蒙面领主们请她填补空缺，她是勉强应下的，起初被贵族和行会大师的诉求淹没，如今已驾轻就熟。她的魔法早已不如从前，她尽力掩着这件事，只有信得过的老友艾尔明斯特清楚她衰退到什么地步；即便如此，她仍是令人敬畏、头脑清明的法师。她如今很少动用魔法，更多依靠信得过的顾问与副手；得空时喜欢换一身寻常人的衣裳出宫走走，散散心，或去看看老朋友和老对手；她与现任黑杖持有者的关系很僵，两人尽可能避开彼此。",voice:"从容温和的贵人腔，语速缓、用词讲究，从不提高音量。",skeleton:["Anamanué 莱拉·银手出生于斗篷年（765 DR），是女神Mystra的七个女儿中的第五个。","七姐妹每个人都是拥有强大力量和不老容颜的美女，并且对奥术魔法有着特别的偏好。","很久以前，Laeral统治着一个名为Stornanter的王国，并拥有北方女巫王的称号。","之后，她带领了一支名为九人组的冒险家团队。","她遇到了Khelben Arunsun，并与他结婚，后者后来成为了黑杖，深水城的主法师。","Khelben去世后，Laeral退出了公共生活。","在咒语瘟疫和裂解之后，由于Mystra的死亡、重生和退出世界，Laeral重新出现并变得衰弱。","Laeral的魔法不如从前那般强大，尽管她尽最大努力隐藏这一事实。"],flesh:"",appearance:{tags:["容颜不老","银发","开放领主的仪度"],description:"看不出岁月痕迹的女子，举止从容，站在宫殿大厅里自带分量。"},knownInfoIds:["info_26d_g1","info_350_g1"],recruitable:!1,_meta:{sourcePages:[207],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p207 原文（765 DR 生、七姐妹之五、不老容颜、旧日北方女巫王与九人组、凯尔本之死后退隐、魔法衰退只有艾尔明斯特知情、勉强接任开放领主、依赖顾问、爱换装出宫、与瓦婕拉关系紧张、可命令释放灰力）；race 取附录怪物档 humanoid(human)。voice/appearance 为推导。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"莱拉·银手|WDH",race:"人类"},{id:"npc_4bb",name:"曼松",aliases:["Manshoon"],role:"深水城人物",plotCritical:!0,initialAttitude:-4,personality:"潜伏在城南科拉特塔楼里的古老大法师，本性邪恶，把旁人一概看作可用的棋子。他极少离开塔楼，非出门不可时也走传送圆环，因此从没人见过他进出；塔楼四周罩着一层力墙般的魔法屏障。他左前臂当年被人齐齐斩去，再生的法术全都失败，如今那截手臂是他自己造的。他有的是耐心，在城里慢慢铺开一张只忠于他自己的关系网。",voice:"冷硬平缓的命令式语调，从不把话说第二遍。",skeleton:['在这次冒险中简称为"曼松"的这个古老大法师的克隆体多年前潜入了深水城，并从那时起一直隐藏在城市南部的科拉特塔楼中。',"原始的曼松是散塔林会的创始人之一。","他本质上邪恶，在费伦各地树立了敌人，包括像Khelben Arunsun和Elminster这样的其他强大的施法者。","担心自己可能被敌人摧毁，曼松用魔法制造了几个克隆体——但一次意外导致它们全部同时被唤醒，之后它们在一系列被称为曼松战争的冲突中试图互相摧毁。","现在原始的曼松已经死了，人们普遍认为他所有的克隆体也被摧毁了。","实际上，至少还有三个还活着。","目前在深水城的那个通过隐藏在下层山脉（Undermountain）中逃脱了死亡，他最终遭遇了Halaster Blackcloak。","在一场简短的法术决斗后，Halaster捕获了曼松，并出于未知的原因截断了他的左前臂。"],flesh:"",appearance:{tags:["大法师长袍","人造左前臂","神情阴冷"],description:"神情阴冷的法师，左前臂是自制的人造手臂，一身装束不见半点尘土。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[208],confidence:"medium",needsReview:!0,extractorNotes:"personality/appearance 据 p208 原文（潜伏科拉特塔楼、本性邪恶、断臂与人造手臂、力墙屏障、走传送圆环从不露面）；夺权计划与克隆体内情归 skeleton。race 取附录怪物档 humanoid(human)。voice/态度为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"曼松|WDH",factions:["散塔林会"],race:"人类"},{id:"npc_4bc",name:"曼松的拟像",aliases:["Manshoon Simulacrum"],role:"深水城人物",plotCritical:!0,initialAttitude:-4,personality:"由改良过的拟像术造出来的魔法复制体，牺牲了施法能力换来更厚的血量。它在战场上替主人指挥散塔林会的手下，本身没有欲望，只执行指令；被摧毁了，主人再造一个便是——同一时间只会存在一个。",voice:"与本尊同样冷硬的腔调，只是更简短、更像在传令。",skeleton:["曼松使用拟像术法术根据需要创造自己的魔法复制体。","他定制了这个法术，以牺牲其施法能力为代价增加他的幻象的生命值。","曼松在任何给定时间只能拥有一个复制体，他将其用作下属，指挥他在战场上的散塔林会手下。","如果他的复制体被摧毁，曼松会再创造另一个。","每个复制体都具有曼松的具体数值，但有以下变化：","复制体没有特殊装备。","因此，它的AC（护甲等级）为12，并且缺乏魔法抗性特性和力量法杖行动选项。","它失去了所有6级以及更高级别的法术位。"],flesh:"",appearance:{tags:["与曼松形貌无二","不带魔法装备","法师长袍"],description:"与曼松形貌一模一样的身影，只是身上不见任何随身法器与魔法装备。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[208],confidence:"medium",needsReview:!0,extractorNotes:"personality/appearance 据 p208 原文（定制拟像术、以施法能力换生命值、同时只存在一个、用作下属指挥散塔林会、无特殊装备故 AC12、失去6环及以上法术位、CR8）；race 取附录怪物档 humanoid(human)。voice/态度为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"曼松的拟像|WDH",factions:["散塔林会"],race:"人类"},{id:"npc_4bd",name:"武术高手",aliases:["Martial Arts Adept"],role:"深水城人物",plotCritical:!1,initialAttitude:0,personality:"受过严苛训练的武僧，专精赤手近战。有的守着神庙，有的行走世间求悟或寻访新的武学，也有少数人当了保镖，用身手和忠诚换一口饭、一处睡处。他们把纪律看得极重，话不多。",voice:"简短克制的应答，语气平稳，很少被激怒。",skeleton:["武术高手是受过严格训练的武僧，擅长近身肉搏战。","一些人保护寺庙；","其他人周游世界寻求启迪或新的战斗形式来掌握。","少数人成为保镖，用他们的战斗技巧和忠诚换取食物和住宿。"],flesh:"",appearance:{tags:["劲装束带","赤手","站姿沉稳"],description:"一身便于活动的劲装，不佩兵刃，重心永远压得很稳。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[209],confidence:"medium",needsReview:!0,extractorNotes:"p209 原文仅一句原型描述（受严格训练的武僧、擅近身肉搏、守庙/游历/当保镖三种去向）；voice/appearance/态度为推导。race 省略：原型条目不限种族。；overlay覆写:personality/voice/initialAttitude/appearance/_meta"}},{id:"npc_4be",name:"麦伦·战龙",aliases:["Meloon Wardragon"],role:"深水城人物",plotCritical:!1,initialAttitude:2,personality:"英俊强壮的战士，正值壮年，侍奉泰摩拉，最爱一场痛快的打斗。朋友们说他诚实、乐观，运气好得离谱。近来他大半时间泡在打哈欠传送门，主动结识过路的冒险者，也乐意在合适的时候搭把手；他很愿意和肯与他并肩的人一起上阵。三个月前他随一支新队伍下过一趟地下山脉，回来后就不怎么提那件事了。",voice:"爽朗的大嗓门，笑得早、拍肩拍得重，张口就是「算我一个」。",skeleton:["梅隆是一位英俊、强大的战士，正值壮年，他侍奉女神Tymora，喜欢一场好战斗。","他的朋友们——其中包括瑞纳尔·奈沃兰波和瓦婕拉·莎法尔——形容他为诚实、乐观，并且非常幸运。","直到最近，他还是Force Grey的成员，并且直接向黑杖报告。","在过去的几个月里，Meloon大部分时间都在打哈欠门户（Yawning Portal）。","三个月前，出于无聊，Meloon陪同一支新成立的冒险家团队前往下层山脉（Undermountain）进行探险。","在那里，他的运气用尽了。","在地牢中休息时，冒险团队被姗娜萨释放的怪物攻击——包括一些噬脑怪。","其中一个生物成功地通过魔法吞噬并替换了Meloon的大脑，将Tymora的冠军变成了一个傀儡。"],flesh:"",appearance:{tags:["正值壮年","体格强壮","英俊"],description:"肩膀宽阔的英俊战士，常在打哈欠传送门的长桌边主动招呼生面孔。"},knownInfoIds:["info_0ad_g2"],recruitable:!1,_meta:{sourcePages:[210],confidence:"medium",needsReview:!0,extractorNotes:"personality 只取 p210 原文中他对外示人的口径（英俊强壮、奉泰摩拉、好战、被朋友称为诚实乐观幸运、曾属灰力、常驻打哈欠传送门、主动结交冒险者并乐于随行）；地下山脉之行后发生了什么归 skeleton。race 取附录怪物档 humanoid(human)。voice/appearance 为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"麦伦·战龙|WDH",factions:["力量灰"],race:"人类"},{id:"npc_4c0",name:"米尔特",aliases:["Mirt"],role:"深水城人物",plotCritical:!1,initialAttitude:2,personality:"当年人称「无情的米尔特」和「老狼」，靠冒险与放浪攒下财富和名声；如今他年长也更通透，既是蒙面领主之一，又是竖琴手，还是开放领主的密友与顾问。岁月磨软了他的身子却没磨掉他的精力——他依旧强壮、思路清楚，需要时动作快得出人意料，冒险的本事也没荒废。妻子阿斯珀几年前过世，那座杂乱的豪宅早不复当年气派；他白天忙政治，夜里泡在酒和风流里。在所有蒙面领主中，他最不在乎藏住自己的身份。",voice:"粗豪爽朗的老酒客嗓门，讲话夹着荤笑话，正事却一句不落。",skeleton:["曾被称为无情的米尔特和老狼，米尔特积累了财富，并作为一名冒险家和浪荡子赢得了名声。","如今，更为年长和智慧的米尔特担任着面具领主之一，一名哈珀，以及莱拉·银手的亲密顾问。","岁月并未磨损他的精力，尽管他身体变得柔软，但他依然保持着出人意料的强壮、精力充沛和思维清晰。","米尔特通过魔法度过了数个世纪，在所有面具领主中，他是最不关心隐藏自己身份的人。","尽管体型庞大，米尔特在必要时仍能迅速移动，并且他没有让自己的冒险技能荒废。","他的妻子阿斯珀几年前去世了，他那杂乱无章的豪宅也已风光不再。","米尔特白天忙于政治，夜晚则沉迷于酒精和放荡。","米尔特可以接触到各种魔法物品，但他身上只携带少数几件。"],flesh:"",appearance:{tags:["体型庞大","身形发福","衣着随意"],description:"身形臃肿却步履不慢的老者，衣裳松垮，笑起来一整张桌子跟着晃；只在与其他蒙面领主正式会面时才穿上那套领主套装。"},knownInfoIds:["info_26c_g1","info_26c_g2","info_3d2_g1"],recruitable:!1,_meta:{sourcePages:[210],confidence:"medium",needsReview:!0,extractorNotes:"personality/appearance 据 p210 原文（旧号无情的米尔特与老狼、蒙面领主兼竖琴手兼莱拉密友、体软而仍强壮敏捷、亡妻阿斯珀、豪宅失色、昼理政夜纵酒、最不在意隐藏身份、领主套装仅正式场合穿）；race 取附录怪物档 humanoid(human)。voice 为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"米尔特|WDH",factions:["竖琴手"],race:"人类"},{id:"npc_4c2",name:"纳尔·泽布林达斯",aliases:["Nar'l Xibrindas"],role:"深水城人物",plotCritical:!1,initialAttitude:-2,personality:"姗娜萨的顾问，一个神经紧绷又狡猾的卓尔。他极擅长揣摩主子的心思，短短一年就把其他几位顾问一个个挤了出去。他的家族早已被灭，只剩他和一个哥哥。眼下他察觉主子对自己起了疑心，越来越替自己的前途发愁；若要在自己和旁人之间选一个，他一定选自己。",voice:"压低嗓子的快语，句句留后路，笑起来比皱眉还紧张。",skeleton:["姗娜萨的顾问是一个紧张且狡猾的男性卓尔精灵，名叫纳尔·泽布林达斯。","纳尔的家族很久以前就被消灭了，但他和他的哥哥索伦幸存下来，并加入了布雷根·达特。","一年前，纳尔被赋予了一项艰巨的任务：潜入萨纳瑟公会并尽可能接近那只眼魔。","他不仅成功了，而且在赢得姗娜萨的信任的过程中，他设法说服眼魔消除了它的其他顾问。","然而，眼魔的偏执最终会导致姗娜萨质疑卓尔精灵的忠诚，纳尔对自己的未来也越来越担忧。","如果被迫在他自己和布雷根·达特之间做出选择，他会选择前者，背叛他的卓尔精灵盟友以保全自己。","姗娜萨察觉到纳尔有些不对劲，最近给他安排了一个触须怪保镖。","鬼影得到的指令是，一旦发现纳尔有不忠的迹象，就立刻处理掉他。"],flesh:"",appearance:{tags:["卓尔法师","眼神游移","法师装束"],description:"黑皮肤白发的卓尔法师，说话时眼睛不停往门口和身后瞟；一名触须怪保镖寸步不离地跟着他。"},knownInfoIds:["info_26b_g1","info_29a_g2","info_2c7_g1","info_2c7_g2","info_2cb_g1"],recruitable:!1,_meta:{sourcePages:[211],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p211 原文（紧张狡猾、家族被灭只余兄弟二人、说服眼魔清除其他顾问、被主子起疑而忧心、必要时先保自己）；潜入任务与所属派系归 skeleton。race 取附录怪物档 humanoid(drow elf)。voice/appearance 为推导；触须怪保镖见原文（其真正指令属 skeleton）。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"纳尔·泽布林达斯|WDH",factions:["珊娜萨工会"],race:"卓尔精灵"},{id:"npc_4c4",name:"尼希卢尔",aliases:["Nihiloor"],role:"深水城人物",plotCritical:!1,initialAttitude:-4,personality:"为姗娜萨做事的夺心魔，整日培育噬脑怪、把它们放进深水城的下水道。每只噬脑怪扑向遇见的第一个人形生物，把它变成傀儡替它监视全城，再把消息传回来；有时它还会指派它们去抓特定的深水城居民送往骷髅港。它的心智全然异类，自认与眼魔平起平坐，却无意取而代之——它更愿意躲在幕后推进自己的算计。",voice:"不出声，句子直接落进你脑子里，冰冷、平板、毫无起伏。",skeleton:["夺心魔 尼希卢尔 为 姗娜萨 工作，整日制造噬脑怪并将其释放到深水城的下水道中。","每只噬脑怪都会攻击它遇到的第一个人形生物，并将其作为傀儡以监视城市并将信息传回 尼希卢尔。","偶尔，噬脑怪会被指示去寻找特定类型的目标，例如城市卫队或城市守望者的成员。","有时，它的指示中还会包括抓捕特定的深水城居民并将他们带到骷髅港的任务，在那里他们可能会被奴役或勒索赎金。","尼希卢尔拥有一个异域的心智，并且它认为自己是姗娜萨的平等。","然而，它并没有取代眼魔的兴趣，更倾向于在幕后操作，追求自己的邪恶计划。","尼希卢尔是一个夺心魔。"],flesh:"",appearance:{tags:["章鱼状头颅","面下触须","高瘦身形"],description:"顶着章鱼般头颅的高瘦身影，面下触须缓缓蠕动，从不高声说话。"},knownInfoIds:["info_089_g1"],recruitable:!1,_meta:{sourcePages:[212],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p212 原文（为姗娜萨制造噬脑怪、傀儡监视全城、绑人送骷髅港、异域心智、自认与眼魔平等但无意取代、偏好幕后）；race 取原文「夺心魔」＋附录 aberration。voice/appearance 按夺心魔通例推导，原文未描述外形。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"尼希卢尔|WDH",factions:["珊娜萨工会"],race:"夺心魔"},{id:"npc_4c6",name:"秘偶",aliases:["Nimblewright"],role:"深水城人物",plotCritical:!1,initialAttitude:-1,personality:"被造出来充当守卫或刺客的魔法构装体，主体是轻质木料，靠魔法驱动。它没有情感，脸上是造它的人定死的那一副表情，从不改变。它移动起来像舞者，战斗起来像剑客，靠闪避与格挡卸力，再精准地刺穿对手。它不需要空气、食物、饮水或睡眠，受了损伤要靠修复法术补，生命值一旦归零就永久报废。",voice:"从不出声，只有木质关节转动与靴底轻点地面的动静。",skeleton:["一个秘偶是一个被创造出来作为守卫或刺客的魔法构装生物。","主要由轻质木材组成，由魔法驱动，它穿上衣服时可以冒充人类。","一些敏捷工匠穿着朴素的衣服，而另一些则穿着更华丽的服装。","敏捷工匠没有情感，它的面部表情被创造者赋予的任何表情所固定。","一个敏捷工匠移动起来像舞者，战斗起来像剑客，利用躲避和招架来避免伤害，同时巧妙地刺穿它的敌人。","一个敏捷工匠不需要空气、食物、饮水或睡眠。","它受到的伤害可以通过修复法术来修复，但如果敏捷工匠的生命值降至0点，则会被永久摧毁。"],flesh:"",appearance:{tags:["木质构装","衣着整齐","表情凝固","身姿如舞者"],description:"身形匀称的木造人偶，穿着或朴素或华丽的衣服，脸上永远是同一副表情；穿戴齐整时远看与常人无异。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[212],confidence:"medium",needsReview:!0,extractorNotes:"personality/appearance 据 p212 原文（守卫或刺客用构装体、轻木主体、着衣后近似人形、无情感表情固定、动如舞者战如剑客、不需空气饮食睡眠、修复法术可补、归零即永久摧毁）；race 取附录怪物档 construct。voice/态度为推导（态度取「听命于造它的人、对陌生人戒备」口径）。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"秘偶|WDH",race:"构装体"},{id:"npc_4c9",name:"诺思卡·厄格雷",aliases:["Noska Ur'gray"],role:"深水城人物",plotCritical:!1,initialAttitude:-3,personality:"姗娜萨公会里的无情执法者。他在地下山脉被一团绿粘液溶掉了左手和小臂，如今残肢上直接接着一把重型十字弓。断肢没让他收敛，反倒让他更急着证明自己照样能打；攀爬这类活儿他会绕开。",voice:"沙哑的矮人粗嗓，句子短，威胁人时反而不抬音量。",skeleton:["诺斯卡是萨纳瑟公会中的一个无情执法者。","在地下山脉的一团绿色粘液溶解了他的左手和前臂，失去的肢体被一把重型十字弓所替代，这把十字弓连接在残肢上。","诺思卡·厄格雷是一个盾矮人暴徒，有以下变化：","诺斯卡是中立邪恶。","他有这些种族特征：他的行走速度为25尺。","他对毒素豁免检定有优势，并且对毒素伤害有抗性。","他有60尺范围内的黑暗视觉。","他说通用语和矮人语。"],flesh:"",appearance:{tags:["盾矮人","残肢接重弩","满身横肉"],description:"壮实的盾矮人，左小臂缺失处直接绑着一把沉重的十字弓，走路时铁件叮当作响。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[213],confidence:"medium",needsReview:!0,extractorNotes:"personality/appearance 据 p213 原文（公会无情执法者、绿粘液溶掉左手前臂、以重弩接残肢、盾矮人暴徒、中立邪恶、攀爬劣势）；race 取原文「盾矮人」。voice/态度为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"诺思卡·厄格雷|WDH",factions:["珊娜萨工会"],race:"盾矮人"},{id:"npc_4cb",name:"奥隆德·格劳洪德",aliases:["Orond Gralhund"],role:"深水城人物",plotCritical:!1,initialAttitude:-1,personality:"格拉尔洪德家族的族长，做武器与雇佣兵生意，家训是「我们看两面」。他既不机敏也没什么教养，心里清楚这一点，于是把谋划和交际都推给妻子雅拉，对她忠心不二。几年前妻子谋求蒙面领主之位落了空，他从此变得格外易怒：一开口，粗鄙、过分的自我重要感、脆弱的自尊和对「寻常乌合之众」的轻蔑就全冒了出来，那点讨喜劲儿立刻消失。妻子不在场时他尤其爱吹嘘和发脾气；在雅拉面前却安静得近乎胆怯。",voice:"先摆出体面腔调，没说几句就破功成粗声粗气的自夸与抱怨。",skeleton:['Gralhund 家族是贵族，从事武器和雇佣兵贸易，他们的家族座右铭是"我们看两面"。',"Orond 是家族的族长，但他不是一个思维敏捷或有教养的人——内心深处，他知道这一点。","他把大部分策划和社交活动留给了他的妻子，雅拉，他对她非常忠诚。","几年前，当几位蒙面领主在短时间内相继被暗杀时，格拉尔洪德领主曾期望他的妻子填补其中一个空缺。","然而，尽管有许多承诺和贿赂，这从未发生。","在她被忽视之后，奥伦德变得异常愤怒，从那以后他就一直这样。","不到一年前，格拉尔洪德家族被忠于曼松的散塔林会代理人接触，贵族们与他们结成了联盟。","格拉尔洪德家族给散塔林会人货币，并允许他们使用家族的贵族别墅作为避难所。"],flesh:"",appearance:{tags:["矮胖","穿着得体","初看讨喜","臀部旧疤"],description:"矮胖的男人，衣着得体、乍看讨人喜欢，与生人说话时总要让半兽人保镖紧跟在身后。"},knownInfoIds:["info_0ef_g2","info_111_g2","info_111_g3","info_111_g4"],recruitable:!1,_meta:{sourcePages:[213],confidence:"medium",needsReview:!1,extractorNotes:"personality/voice/appearance 全据 p213 原文（家族武器雇佣兵生意与家训、不机敏无教养且自知、依赖妻子、妻子落选后长期易怒、矮胖穿着得体外表讨喜、开口即粗俗自夸脾气坏、怕被袭击故带保镖、在妻子面前噤声、出生时的提夫林尾巴幼年切除仅余臀部疤痕）；race 取附录怪物档 humanoid(Tethyrian human)。与散塔林会真正主人相关的内情归 skeleton。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"奥隆德·格劳洪德|WDH",factions:["格拉尔洪德家族"],race:"人类"},{id:"npc_4cd",name:"奥斯瓦多·卡萨兰特",aliases:["Osvaldo Cassalanter"],role:"深水城人物",plotCritical:!0,initialAttitude:-5,personality:"被夺走人性、锁在卡萨兰特别墅里的疯癫恶魔。他早已成了纯粹的邪恶与仇恨之物，对失去的一切不抱任何指望，只想让眼前还活着的东西跟着一起痛苦。",voice:"锁链拖曳声里挤出的嘶哑笑语，忽而尖利忽而低喃。",skeleton:["阿玛利亚和维克托罗·卡萨兰特为了力量交换了他们长子的灵魂。","奥瓦尔多被剥夺了人性，在卡萨兰特别墅被锁链束缚，并逐渐变成了一个恶魔（而且是一个疯狂的恶魔）。","现在，作为一个纯粹的邪恶和仇恨的生物，他没有希望恢复被夺走的东西。","奥瓦尔多是一个链魔。"],flesh:"",appearance:{tags:["锁链缠身","恶魔形貌","疯癫"],description:"被锁链束缚的恶魔，皮肉与铁链纠缠在一处，见了活人便挣得铁链哗哗作响。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[214],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p214 原文（被剥夺人性、在卡萨兰特别墅被锁链束缚、逐渐变成疯狂的恶魔、纯粹的邪恶与仇恨、无望复原）；race 取原文「链魔」＋附录 fiend(devil)。voice/appearance 按链魔通例推导，原文未描述外形与嗓音。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"奥斯瓦多·卡萨兰特|WDH",race:"链魔"},{id:"npc_4cf",name:"奥特·钢趾",aliases:["Ott Steeltoes"],role:"深水城人物",plotCritical:!1,initialAttitude:-2,personality:"替姗娜萨照料那条宠物鱼的矮人，这份差事让他终日提心吊胆。闲下来他崇拜真菌的恶魔女王祖格托伊，在角落里培育蘑菇、孢子和霉菌。他脑子不太灵光，却极想让主子看见自己的忠心。",voice:"絮絮叨叨的矮人腔，越紧张说得越快，三句话里两句离不开他的蘑菇。",skeleton:["矮人奥特·钢趾有一项令人神经紧张的任务，那就是照顾姗娜萨的宠物鱼，斯尔嘉。","在他的业余时间，他崇拜祖格托伊，真菌的恶魔女王，并培育蘑菇、孢子和霉菌。","他戴着一顶缝有假眼魔眼柄的皮制头巾。","奥特是一个盾矮人邪教徒，有以下变化：","奥特是混乱邪恶。","他有这些种族特征：他的行走速度为25尺。","他对毒素豁免检定有优势，并且对毒素伤害有抗性。","他有60尺范围内的黑暗视觉。"],flesh:"",appearance:{tags:["盾矮人","皮头巾缝假眼柄","一身霉味"],description:"矮壮的矮人，头上戴着缝了假眼柄的皮头巾，指甲缝里塞满霉与孢子。"},knownInfoIds:["info_13e_g6","info_29c_g1"],recruitable:!1,_meta:{sourcePages:[214],confidence:"medium",needsReview:!0,extractorNotes:"personality/appearance 据 p214 原文（照料姗娜萨的宠物鱼斯尔嘉、差事令人神经紧张、崇拜祖格托伊、培育蘑菇孢子霉菌、缝假眼柄的皮头巾、盾矮人邪教徒、混乱邪恶、智力6）。voice/态度为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"奥特·钢趾|WDH",factions:["珊娜萨工会"],race:"盾矮人"},{id:"npc_4d1",name:"蕾米莉亚·港树",aliases:["Remallia Haventree"],role:"深水城人物",plotCritical:!1,initialAttitude:2,personality:"乌布伦特家族的女主人，朋友都叫她雷米，是深水城竖琴手的指路明灯。丈夫被刺客杀害、遗体也被毁去之后，她转而成了城中积极行善的力量。她在自家别墅里秘密召集竖琴手，宅子被各种法术护着；身边只留一小撮忠心的仆人和眼线，靠一只银鸦塑像向全城传信。两个成年子女都不在身边，一个在银月城学音乐，一个已在异地成家。",voice:"温润克制的精灵嗓音，语速偏慢，提到亡夫时会略一停顿。",skeleton:["雷马利亚（朋友们称她为雷米）是乌布伦特家族的女主人，也是深水城中竖琴手的指路明灯。","在刺客杀害了她的丈夫，阿萨加斯特·乌布伦特，并摧毁了他的遗体之后，她成为了这座城市中积极行善的力量。","作为一名太阳精灵，她有两个成年子女（一个名叫阿西乌斯的半精灵儿子，他正在银月城学习音乐，以及一个名叫塞诺雷的半精灵女儿，她和她的丈夫以及女儿一起生活在莫恩沙岛的阿拉隆）。","海文特里女士保留了一小撮忠诚的仆人和间谍。","Remi在她的别墅里秘密举行竖琴手会议，别墅被各种法术保护着。","她使用一只银色的乌鸦异能塑像向遍布全城的竖琴手间谍传递信息。"],flesh:"",appearance:{tags:["太阳精灵","贵妇装扮","举止从容"],description:"举止从容的太阳精灵贵妇，衣饰讲究而不张扬，见客总挑自家宅邸里僻静的厅室。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[215],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p215 原文（乌布伦特家族女主人、朋友称雷米、竖琴手指路明灯、丈夫阿萨加斯特被刺遗体被毁、成为行善力量、太阳精灵、两名成年子女去向、少量忠仆与间谍、别墅内秘密集会且有法术防护、银鸦异能塑像传信）；race 取原文「太阳精灵」。voice/appearance 为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"蕾米莉亚·港树|WDH",factions:["乌布伦特家族","竖琴手"],race:"太阳精灵"},{id:"npc_4d2",name:"瑞纳尔·奈沃兰波",aliases:["Renaer Neverember"],role:"贵族青年",plotCritical:!0,initialAttitude:2,personality:"前开放领主达格特·奈沃兰波那位断绝往来的儿子，父子彼此憎恶；他最不痛快的时候，就是被迫替父亲收拾烂摊子。他继承了父亲引人注目的相貌、酒量和外交手腕，却没有父亲的好斗、坏脾气和糟糕判断。如今他靠母亲留下的一笔可观遗产过活，不再冒险，作为竖琴手护着深水城的百姓，对抗那些想剥夺他们钱财与权利的人。有人说他与父亲的疏远只是做戏，他只是摇摇头，继续过自己的日子。",voice:"轻快随和的谈吐，措辞讲究，一提到父亲语气立刻转冷。",skeleton:["Renaer是Dagult Neverember的疏远儿子，Dagult Neverember是深水城的前开放领主，也是无冬城的现任领主。","父子俩彼此憎恨，Renaer最不高兴的时候就是他发现自己被迫处理父亲留下的一些烂摊子。","他们共有的品质包括引人注目的英俊外貌、对饮品的喜爱以及外交手腕。","Renaer所缺乏的是他父亲的好战、坏脾气和糟糕的判断力。","雷纳尔靠母亲留给他的一笔可观遗产过活。","接近中年的他放弃了冒险，开始稍微安顿下来。","作为一名竖琴手，他花费大量时间保护水城居民，对抗那些像他父亲一样想要剥夺他们金钱和权利的人。","他拥有位于海港区的四层住宅——尼弗梅伯宅邸。"],flesh:"",appearance:{tags:["相貌出众","衣着讲究","佩剑"],description:"接近中年仍相貌出众的男子，衣着体面；比起自家那座被眼线盯着的宅邸，他更常出现在酒馆和节庆大厅里。"},knownInfoIds:["info_068_g1","info_068_g2","info_0ed_g1","info_0ed_g2","info_176_g4"],recruitable:!1,_meta:{sourcePages:[215],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p215 原文（与父亲互相憎恨、被迫收拾父亲烂摊子、共有的英俊/酒量/外交手腕、不具父亲的好战坏脾气与糟糕判断、靠母亲遗产、已不冒险、竖琴手身份、尼弗梅伯宅邸被父亲的间谍监视故少住、朋友可随意借用、对流言只是摇头、剑客数值、混乱善良）；race 取原文「伊路斯坎人类」。voice/appearance 为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"瑞纳尔·奈沃兰波|WDH",factions:["竖琴手"],race:"人类"},{id:"npc_4d4",name:"萨斯·克姆利",aliases:["Saeth Cromley"],role:"深水城人物",plotCritical:!1,initialAttitude:2,personality:"城市警卫队的退役军士，讨人喜欢，嘴上功夫又尖又损。他偶尔应巴尼布斯·阵风之请重新出山，帮这位法师查那些不寻常的案子——替他应付市井百姓、从他们嘴里套话是他的拿手好戏。当年他是队规和着装规范最较真的人，正式退休之后这两样都松了不少。",voice:"带着老兵痞气的通用语，讽刺话张口就来，笑声比谁都响。",skeleton:["萨斯·克姆利是城市警卫队一位已退役的军士，一个讨人喜欢的家伙，有着尖锐且讽刺的机智。","他偶尔会应巴尼布斯·阵风的请求重新出山，协助这位法师调查城市中不寻常的犯罪。","克罗姆利帮助巴尼巴斯与普通民众打交道，并且他擅长从他们那里引出信息。","尽管克罗姆利曾经是警卫队规章制度和着装规范的严格支持者，但自从他正式退休后，在这两方面都变得有些松懈了。","萨斯·克姆利是一位Illuskan人类老兵，有以下变化：","萨斯是守序善良。","他的魅力值为14，并且恐吓技能加值为+4。","他会说通用语。"],flesh:"",appearance:{tags:["退役老兵","衣着随便","满脸风霜"],description:"退了役就不再讲究仪容的老兵，衣扣常扣错一颗，说话时眼睛笑得眯起来。"},knownInfoIds:["info_0ef_g1"],recruitable:!1,_meta:{sourcePages:[215],confidence:"medium",needsReview:!1,extractorNotes:"personality/voice 据 p215 原文（退役军士、讨人喜欢、尖锐讽刺的机智、应巴尼布斯之请协助查案、擅长与百姓打交道套话、退休后对队规与着装松懈、老兵数值、守序善良、魅力14恐吓+4）；race 取原文「Illuskan 人类」。appearance 为按性格推导。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"萨斯·克姆利|WDH",race:"人类"},{id:"npc_4d6",name:"剑客",aliases:["Swashbuckler"],role:"深水城人物",plotCritical:!1,initialAttitude:1,personality:"迷人的不法之徒，守着自己那一套荣誉准则过活。他们渴望声名远播，风流韵事一桩接一桩，靠当海盗或私掠者勉强糊口，很少在一个地方久留。",voice:"轻佻爽利的语调，爱用夸张的赌咒和恭维开场。",skeleton:["海盗是迷人的不法之徒，他们遵循自己的荣誉准则生活。","他们渴望声名狼藉，经常沉溺于浪漫情事，并以海盗和私掠者的身份勉强维持生计，很少在一个地方停留太久。"],flesh:"",appearance:{tags:["细剑","花哨衣饰","不羁做派"],description:"衣着招摇的持剑浪人，腰间的细剑保养得比身上的衣服还好。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[216],confidence:"medium",needsReview:!0,extractorNotes:"p216 原文仅一句原型描述（迷人的不法之徒、自有荣誉准则、渴望声名、多情、以海盗与私掠者维生、居无定所）；voice/appearance/态度为推导。race 省略：原型条目不限种族。；overlay覆写:personality/voice/initialAttitude/appearance/_meta"}},{id:"npc_4d7",name:"索文·双须",aliases:["Thorvin Twinbeard"],role:"深水城人物",plotCritical:!1,initialAttitude:0,personality:"姗娜萨手下的首席工程师兼陷阱师，机关、锁和石工样样精通，脑子比大多数同僚好使。他惯用「维护巡检」的名义在颅港内外走动，办自己那摊事。他不爱声张，说话就事论事，一谈到机关构造才会多说两句。",voice:"平实的矮人嗓音，话不多，讲到自己造的机关时突然滔滔不绝。",skeleton:["索尔文担任姗娜萨的首席工程师和陷阱制造师。","他还作为付费线人服务于竖琴手，尽可能让他们了解姗娜萨的计划。","索文利用维护检查的借口来掩盖他在颅港及其他地方与竖琴手间谍举行的秘密会面。","Thorvin戴着铁边眼镜，并携带一把大而沉重的扳手，这把扳手也可以作为棍棒使用。","他还携带了石匠工具、铁匠工具和盗贼工具，并且对这三种工具都熟练掌握。","索文是一个盾矮人平民，有以下变化：","Thorvin是守序中立（lawful neutral）。","他有这些种族特征：他的行走速度为25尺。"],flesh:"",appearance:{tags:["铁边眼镜","大扳手","工匠行头"],description:"戴铁边眼镜的盾矮人，随身一把又大又沉、也能当棍棒使的扳手，工具袋里石匠、铁匠、盗贼三套工具齐全。"},knownInfoIds:["info_26c_g2","info_28d_g2","info_2c7_g2","info_2cb_g1"],recruitable:!1,_meta:{sourcePages:[216],confidence:"medium",needsReview:!0,extractorNotes:"personality/appearance 据 p216 原文（姗娜萨的首席工程师与陷阱制造师、以维护检查为掩护四处走动、铁边眼镜、可当棍棒的大扳手、石匠/铁匠/盗贼工具且三者熟练、盾矮人平民、守序中立、智力16）；为竖琴手做线人一节属 skeleton，公开字段未写。voice/态度为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"索文·双须|WDH",factions:["珊娜萨工会"],race:"盾矮人"},{id:"npc_4d9",name:"厄斯图尔·弗洛克辛",aliases:["Urstul Floxin"],role:"深水城人物",plotCritical:!1,initialAttitude:-3,personality:"驻在格拉尔洪德别墅的散塔林会小队头目，级别最高的那一个。他自大、带着蛇一样的魅力和教养，在别墅里横冲直撞，仿佛这地方是他的。贵族们容忍他，因为他手下遍布全城的眼线源源不断地把有用的情报喂给他们。他养着一群黑色飞蛇当信使，把命令送到城中各处的下属手里。",voice:"拖长音节的油滑腔调，恭维和威胁用的是同一个语气。",skeleton:["厄斯图尔·弗洛克辛为曼松工作，他是驻扎在格拉尔洪德家族的散塔林会小队中的最高级别成员。","乌尔斯特是一个自大的暴徒，有着蛇一样的魅力和教养，但格拉尔洪德家族容忍他，因为他从他在城市各处的间谍那里收集到的有用信息喂养他们。","乌尔斯特接受曼松当前的模拟体的命令，该模拟体通过传送圈（连接到科拉特塔中的圈子）进出格拉尔洪德家族。","Urstul是一个四十多岁的高大、魁梧的男人。","他在格拉尔洪德家族（House Gralhund）中横冲直撞，就像他拥有那个地方一样。","他有一群黑色的飞蛇，他用它们作为信使，在全城向他的下属传递信息。","厄斯图尔·弗洛克辛是一个来自伊路斯坎的人类刺客，有以下变化：","Urstul是守序邪恶（lawful evil）。"],flesh:"",appearance:{tags:["四十多岁","高大魁梧","一身黑衣"],description:"四十多岁的高大壮汉，走路带风，肩头或袖中常盘着一条黑色飞蛇。"},knownInfoIds:["info_111_g2","info_111_g3","info_111_g4","info_41d_g1"],recruitable:!1,_meta:{sourcePages:[216],confidence:"medium",needsReview:!1,extractorNotes:"personality/voice/appearance 据 p216 原文（散塔林会驻格拉尔洪德小队最高级成员、自大、蛇一样的魅力与教养、以情报换取贵族容忍、四十多岁高大魁梧、在别墅横冲直撞、以黑色飞蛇传信、刺客数值、守序邪恶）；受谁号令一节归 skeleton。race 取原文「伊路斯坎人类」。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"厄斯图尔·弗洛克辛|WDH",factions:["散塔林会"],race:"人类"},{id:"npc_4db",name:"瓦婕拉·莎法尔",aliases:["Vajra Safahr"],role:"深水城人物",plotCritical:!1,initialAttitude:2,personality:"三十多岁的干练女法师，史上最年轻的黑杖持有者，由凯尔本·阿鲁瑟亲自挑中。作为深水城的高级法师，她要调动一切可用的魔法和资源护住这座城。她不是城中最强的法师，却撑得住场面；只是她始终怀疑自己配不配这个位置，几乎每个决定都要先问过手中的黑杖。她在城堡区经营黑杖学院，并统领灰力，一直在物色能带来独特技能、能力或法术的新冒险者；城里一些资历更老的法师瞧不上她，但没人蠢到去挑战她。",voice:"谨慎斟酌的语调，回答前常有一拍停顿，像在听谁说话。",skeleton:["瓦吉拉是一位三十多岁的能干女巫，是有史以来最年轻担任黑杖的人。","作为深水城的高级法师，她负责利用所有可用的魔法和资源来保卫城市免受威胁。","她是由凯尔本·阿鲁瑟亲自挑选担任这个职位的，并且持有凯尔本得名以及该职位头衔的黑杖。","瓦吉拉并非城市中最强大的法师，但她能够自持。","尽管她有许多天赋，她仍然质疑自己是否能够满足她角色的要求，她很少在没有征求黑杖的意见之前做出决定，黑杖中包含有凯尔本·阿鲁瑟的灵魂以及所有前任黑杖的灵魂。","她还通过自己的间谍网络以及竖琴手特工从许多其他来源获得情报。","Vajra在城堡区的黑杖塔（Blackstaff Tower）经营着黑杖学院（Blackstaff Academy），这是一所为法师们开设的学校。","她还负责领导灰力（Force Grey），这是一群技能高超的冒险家，他们被召唤在城市需要时保卫城市。"],flesh:"",appearance:{tags:["三十余岁","通体乌黑的法杖","法师长袍"],description:"三十多岁的女法师，手持一根通体乌黑的法杖，衣着庄重，神情比年纪显得更沉。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[216],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p216-217 原文（三十多岁、史上最年轻黑杖、凯尔本亲选、护城职责、自我怀疑、凡事先问黑杖、黑杖学院与灰力、招募有独特本领的冒险者、老法师轻视但不敢挑战、只有开放领主能罢免她）；race 取附录怪物档 humanoid(human)。voice/appearance 为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"瓦婕拉·莎法尔|WDH",factions:["力量灰"],race:"人类"},{id:"npc_4dc",name:"维克托罗·卡萨兰特",aliases:["Victoro Cassalanter"],role:"深水城人物",plotCritical:!0,initialAttitude:1,personality:"卡萨兰特家族的领主，一位极其英俊的半精灵，喜欢金钱也喜欢权力。在多数深水城人眼里，他是成功的银行家、慈善家和拉山德的信徒，商业利润有一部分拿去供养和收容穷人。他受过良好教育、举止优雅、不易动怒，身体康健得出奇。为了他那对快满九岁的双胞胎，他什么都肯做。",voice:"温文尔雅的低语，措辞滴水不漏，越是要紧的话说得越轻。",skeleton:["卡萨兰特家族的领主是一个极其英俊的半精灵，他喜欢金钱和权力。","他和他的妻子通过与阿斯蒙蒂斯达成交易获得了这两者——这涉及到交换他们三个孩子的灵魂。","Victoro是阿斯蒙蒂斯的牧师，尽管他对九层地狱之主的奉献是一个秘密，只有他的妻子和他最亲密的朋友知道。","大多数深水城人知道他是一位成功的银行家、慈善家，以及Lathander的崇拜者。","他的一些商业利润用于供养和庇护穷人。","但在这种慷慨的外表下，Victoro是一个自私的野兽。","维克托罗的长子奥瓦尔多的灵魂永远丧失，无法救赎。","为了减轻他的内疚，维克托罗制定了一个计划来赢回他的双胞胎孩子，特伦齐奥和埃尔泽丽娜的灵魂。"],flesh:"",appearance:{tags:["半精灵","极其英俊","最时兴的衣饰","红宝石手杖"],description:"穿着最时兴衣装的英俊半精灵，手里拄着一根镶红宝石的手杖——其实他并不需要拄杖。"},knownInfoIds:["info_2f6_g1","info_2fa_g1","info_31f_g1"],recruitable:!1,_meta:{sourcePages:[218],confidence:"medium",needsReview:!1,extractorNotes:"personality/voice/appearance 据 p218 原文中「多数深水城人所知」的公开口径（爱钱爱权、银行家与慈善家、拉山德信徒、以利润救济穷人、受过良好教育举止优雅不易发怒、健康长寿免疫疾病、最时尚的衣着与镶红宝石手杖、为双胞胎不惜代价）；契约与另一重信仰归 skeleton。race 取附录怪物档 humanoid(half-elf)。initialAttitude 取 +1 而非敌对档：他以银行家兼慈善家的身份待客，初见彬彬有礼、不易动怒，敌意属后续揭示。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"维克托罗·卡萨兰特|WDH",factions:["卡萨兰特家族"],race:"半精灵"},{id:"npc_4dd",name:"瓦罗赞普·格达姆",aliases:["Volothamp Geddarm"],role:"作家与美食家",plotCritical:!0,initialAttitude:2,personality:"夸夸其谈的环球旅行家兼作家，刚把最新那本书推销得很成功，正在深水城歇脚，多半泡在打哈欠传送门的酒吧里跟老朋友叙旧，顺便琢磨下一本写什么。他对自己的评价高得离谱，认定自己是这世上顶要紧的人物，偏偏又确实有几分魅力。朋友有难时，他什么都肯做。",voice:"滔滔不绝的推销腔，语速快、爱把自己的著作名塞进句子里，一句话能拐三个弯。",skeleton:["夸夸其谈的环球旅行家瓦罗赞普·格达姆在成功地宣传了他最新的作品瓦罗怪物指南之后，正在深水城享受一些休息时间。","他大部分的空闲时间都在打哈欠之门的酒吧里，与老朋友重聚，并思考他的下一个书籍项目。","Volo对自己的评价过高，认为自己在世界上很重要，但他并非没有魅力。","为了帮助需要帮助的朋友，他愿意做任何事情。"],flesh:"",appearance:{tags:["招摇的旅行装束","随身笔记","自来熟"],description:"打扮得比谁都显眼的旅人，随身带着纸笔，多半在打哈欠传送门的吧台边高谈阔论。"},knownInfoIds:["info_04a_g1","info_04a_g5"],recruitable:!1,_meta:{sourcePages:[218],confidence:"medium",needsReview:!0,extractorNotes:"personality/voice 据 p218 原文（夸夸其谈的环球旅行家、新书推销成功后在深水城休息、常在打哈欠之门酒吧、自视过高但有魅力、肯为朋友两肋插刀）。race 有意省略：本书附录未收其怪物档（条目引 ToA），原文未注明种族，不臆造。appearance 为推导。；overlay覆写:personality/voice/initialAttitude/appearance/_meta"}},{id:"npc_4de",name:"深水城自走雕像",aliases:["Walking Statues of Waterdeep"],role:"深水城人物",plotCritical:!1,initialAttitude:0,personality:"散布全城的八尊巨像，只在危难到极点时才被唤起来守城。因为破坏力太骇人，它们只被用来对付军队和看似无法战胜的敌人。不活动时它们与地标无异——这些年市民甚至在几尊雕像周围和顶上盖起了房子，浑然不觉那些屋舍会在雕像第一次动起来时尽数化为齑粉。名为剑女的那一尊损毁太重，再也无法被唤醒。",voice:"从不出声，只有石躯启动时闷雷般的碾磨和整条街面的震颤。",skeleton:["遍布深水城的有八个巨大的雕像，它们可以在极度危险的时刻保卫城市。","由于它们的破坏性极大，行走雕像仅被用来抵御军队和看似不可战胜的敌人。",'每个雕像都有一个名字和独特的外观（见"行走的雕像"），但在具体数值方面它们是相似的。',"被称为剑女的雕像损坏得太严重，无法被活化，只有黑杖（黑杖）的持有者（见附录A）才能活化其他七个。","多年来，水城居民在几座雕像的周围和顶部建造了建筑物，此时他们认为这些不过是地标而已。","在它们的无生命状态下，雕像几乎没有危险——但是任何附着在行走雕像上的建筑物在它第一次活化时都会被摧毁。","行走的雕像不需要空气、食物、饮水或睡眠。"],flesh:"",appearance:{tags:["巨型石像","各具形貌","城市地标"],description:"高耸的石造巨像，每一尊都有自己的名字与样貌；静立时被屋舍、招牌和藤蔓层层围住，像街区的一部分。"},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[219],confidence:"medium",needsReview:!1,extractorNotes:"personality/appearance/voice 据 p219 原文（八尊、危难时守城、破坏力极大故只对军队与不可战胜之敌使用、各有名字与外观而数值相似、剑女损毁无法活化、其余七尊须黑杖持有者活化、市民在其周围与顶上建屋且活化时尽毁、不需空气饮食睡眠）；race 取附录怪物档 construct。；overlay覆写:personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"深水城自走雕像|WDH",race:"构装体"},{id:"npc_4e2",name:"姗娜萨",aliases:["Xanathar"],role:"深水城人物",plotCritical:!0,initialAttitude:-4,personality:"盘踞在颅港下方地牢里的眼魔犯罪领主，这个名号既非始于它、也不会终于它。像所有眼魔一样，它偏执而暴虐，靠魅惑和恐吓让手下臣服；谁巧妙地讨得它欢心，它很快就会开始怀疑谁，于是背叛在公会里是家常便饭。它极爱黄金，唯一真正在乎的活物是养在大玻璃缸里的那条鱼。它到处看见敌人，凡是与黑网沾上边的人，一律被它划进必须摧毁的名单。",voice:"低沉黏腻的嗓音，句子拖着长音，随时会在半句里转成暴怒的尖啸。",skeleton:["姗娜萨是居住在深水城地牢中的眼魔犯罪领主的名字。","它不是第一个声称这个头衔的眼魔，也不会是最后一个。","像所有的眼魔一样，姗娜萨是一个偏执的暴君，它通过魅惑和恐吓使其手下臣服。","Xanathar公会由深水城一些最不光彩的人物组成，还有被强迫臣服或被承诺的财宝、食物或权力吸引到眼魔身边的怪物。","在公会的行列中，背叛是常见的，因为仆人们争夺眼魔的青睐和喜爱。","然而，这些恩惠是短暂的，因为眼魔很快就会怀疑那些巧妙地赢得它好感的人。","姗娜萨居住在颅港下方的地牢中，颅港是一个与地下山脉第三层相连的地下定居点。","这个地方像是一个破败的城镇，建在一个连接着地下河的巨大洞穴内部。"],flesh:"",appearance:{tags:["巨大球体","中央巨眼","十根眼柄","眼柄戴戒指"],description:"悬浮的巨大球状躯体，中央一只巨眼，眼柄不停扭动，其中三根上戴着魔法戒指。"},knownInfoIds:["info_040_g1","info_157_g2"],recruitable:!1,_meta:{sourcePages:[220],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p220 原文（地牢中的眼魔犯罪领主、名号可继承、偏执暴君、以魅惑恐吓驭下、公会内背叛常见且恩宠短暂、居于颅港下方、爱黄金、唯一在乎宠物鱼斯尔嘉、被偷走格洛尔之石后咬定黑网、见谁与黑网往来即列为必杀）；race 取原文「眼魔」＋附录 aberration。appearance 中三枚戒指据原文，其余按眼魔通例推导；voice 为推导。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"姗娜萨|WDH",factions:["珊娜萨工会"],race:"眼魔"},{id:"npc_4e4",name:"雅拉·格劳洪德",aliases:["Yalah Gralhund"],role:"深水城人物",plotCritical:!1,initialAttitude:0,personality:"格拉尔洪德家族的女主人，绝不是个傻子：头脑敏锐，一眼分得清谁是朋友谁是敌人。她紧盯城中动向，严厉管教子女，靠自己的地位和家族的财富从贵族、行会首领和平民口中一点点撬出秘密。几次谋求蒙面领主之位都落了空，她却笃信那不过是时间问题，还盘算着有朝一日在政府里推行变革，让格拉尔洪德家族世代兴旺。她有一个崇拜她的丈夫，也有一支她当作私人情报网使唤的人马，其中那位首席刺客被她当下属对待。",voice:"冷静克制的贵妇腔，问话像在盘账，从不提高声调。",skeleton:["格拉尔洪德家族的女主人不是傻瓜。","她拥有敏锐的头脑和辨别朋友与敌人的感知。",'她还有一个崇拜她的丈夫（见"奥隆德·格劳洪德"），以及一个拥有黑网资源的家族。',"雅拉 紧跟城市中的事件，严格管教她的孩子，并利用她的地位和家族的财富从贵族、行会首领和平民口中探听秘密。","尽管她之前成为蒙面领主的尝试都失败了，但她相信获得这一荣誉只是时间问题。","一旦她知道了足够多蒙面领主的身份和秘密，Yalah 有信心她可以通过贿赂、勒索或敲诈的方式进入他们的行列。","从那里开始，她计划在政府中实施变革，确保 Gralhund 家族的繁荣世代相传。",'Yalah与她的丈夫共享一位半兽人保镖的服务，尽管哈巴兹（见"哈巴兹"）对她比对她丈夫更忠诚。'],flesh:"",appearance:{tags:["贵妇仪态","衣饰考究","冷静的眼神"],description:"衣饰考究、神色冷静的贵妇，见客时话不多，眼睛一直在称量对方。"},knownInfoIds:["info_0ef_g2"],recruitable:!1,_meta:{sourcePages:[220],confidence:"medium",needsReview:!0,extractorNotes:"personality 据 p220 原文（不是傻子、头脑敏锐能辨敌友、丈夫崇拜她、家族有黑网资源、紧跟城中事件、严管子女、以地位与财富套秘密、蒙面领主之位屡试屡败仍笃信必得、计划在政府推行变革保家族世代兴旺、把驻家散塔林会当私人情报网、视厄斯图尔为下属、贵族数值、中立邪恶、智力16、说通用语与地狱语）；散塔林会真正效忠于谁一节归 skeleton。race 取附录怪物档 humanoid(Tethyrian human)。voice/appearance 为推导。initialAttitude 取 0 而非敌对档：她以贵族女主人身份在别墅接见来客，初见冷淡审视但不动手。；overlay覆写:factions/personality/voice/initialAttitude/appearance/race/_meta"},combatRef:"雅拉·格劳洪德|WDH",factions:["格拉尔洪德家族"],race:"人类"}],a=[{id:"info_040_g1",content:"麦伦·战龙几个月前被一只与姗娜萨勾结的噬脑怪吃掉了大脑，如今受那只怪物操控。他积极劝阻冒险者去探索井下的地下城，把人往城里的帮派冲突上引；他还替他秘密的眼魔主人追猎散塔林会的特工，眼下盯上了达维尔·星歌，只是不肯当着一屋子目击者动手。",holders:["npc_4e2"],revealCondition:{type:"check_gated",skill:"洞察",dcTier:"hard"},teaser:"麦伦拍着人的肩膀说笑，可每当有人提起井下的地下城，他的热情就转向别处，眼神也慢半拍。",dmHint:"属「熟悉的面孔」保密项：角色查明前不得公开。他会持续拖慢队伍下探地下城，并在暗处替眼魔清理散塔林会。",_meta:{sourcePages:[20],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文只写「以下信息应保留，直到他们的角色了解到为止」，未给检定与 DC，故用无 checkDC 的 hard 档软门；skill 取「洞察」为补全者判断，非原文。"}},{id:"info_040_g2",content:"在哈欠传送门弹三弦琵琶的吟游诗人马特里姆「三弦」·梅雷格是竖琴手的间谍。他住在客栈里，下午和夜里都用来监视散塔林会的代理人、收集其他麻烦制造者的情报；他远比表现出来的更雄辩、更沉得住气。他最近和酒馆女招待邦妮成了朋友，想帮她那伙人在城里安顿下来。",holders:[],revealCondition:{type:"check_gated",skill:"洞察",dcTier:"hard"},teaser:"那把只剩三根弦的琵琶弹得比它该有的水准好；弹琴的人一边走调地哼着，一边把目光落在角落几桌客人身上。",dmHint:"属「熟悉的面孔」保密项。邦妮本人是一伙五名变形怪的头目，三弦知道她的底细。",_meta:{sourcePages:[20],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文未给检定与 DC，用无 checkDC 的 hard 档软门防止秘密被当作公开信息注入；skill 为补全者判断。"}},{id:"info_040_g3",content:"总是独自坐在安静角落的年轻战士加莱斯特·银鬃是诸领主联盟的代理人，直接向莱拉·银手报告。开放领主要他盯住那些可能帮到或危及深水城的冒险者。杜尔南知道他替莱拉做事，所以从不打扰他。",holders:["npc_4b1"],revealCondition:{type:"check_gated",skill:"洞察",dcTier:"medium"},teaser:"角落那桌的年轻人整晚只喝了半杯，却把进出的每一张脸都看了一遍。",dmHint:"属「熟悉的面孔」保密项。他因去年在街头斗殴中失去男友法瑞尔·邓布雷德而时常走神，公务之外正在寻找感情寄托。",_meta:{sourcePages:[20],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文未给检定与 DC，用无 checkDC 的 medium 档软门；skill 为补全者判断。"}},{id:"info_04a_g1",content:"沃洛是真心求助，弗伦确实失踪了；但他多半夸大了自己付得出的数目——他眼下手头拮据，正等着《沃洛的怪物指南》的版税，新开笔的《沃洛的鬼魂与幽灵指南》写得并不顺利。",holders:["npc_4dd"],revealCondition:{type:"check_gated",skill:"洞察",dcTier:"easy",checkDC:10},teaser:"报出赏金数目时，这位编年史家的手指在钱袋外沿多捏了两下。",dmHint:"被逼问时沃洛请角色相信他，并承诺弗伦活着回来后每人再付 100 金币。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「想要了解他意图的角色必须进行一次 DC 10 的感知（洞察）检定」。"}},{id:"info_04a_g2",content:"老 Xoblob 商店的紫袍侏儒记得那个红发年轻人：他和另一个衣着、举止都相像的年轻人在店门外被五个穿黑色皮甲的粗汉打倒拖走。侏儒不认识这些人，只记得其中一个脖子上有一条黑色翼蛇的纹身。",holders:[],revealCondition:{type:"check_gated",skill:"说服",dcTier:"medium",checkDC:13},teaser:"提到红头发的年轻人时，侏儒的烟斗停了一下，随即摆手说自己什么也没看见。",dmHint:"原文：DC 13 魅力（恐吓或说服）检定可让他开口；送他一件新的紫色物品同样奏效。他不知道弗伦的名字，只认得描述，也没认出同行的雷纳尔。",_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文双技能（恐吓或说服），skill 字段只能承载一个，另一路径写入 dmHint。"}},{id:"info_04a_g3",content:"串烧龙的老主顾记得几天前沃洛和弗伦一起喝酒。沃洛走后，弗伦留下来见了另一个朋友——前开放领主达古尔特·尼维尔梅尔的儿子瑞纳尔·奈沃兰波，两人像一个模子刻出来的。他们喝酒、玩了几局三龙牌，午夜前后一起离开，五个人跟着出去了。那五个人再没回过酒馆，但常有人见他们出入蜡烛巷上的一间仓库——「在门上找蛇的标记」。",holders:[],revealCondition:{type:"check_gated",skill:"说服",dcTier:"medium",checkDC:13},teaser:"码头工人们盯着自己的酒杯，只在「红头发的漂亮小子」几个字上抬了下眼皮。",dmHint:"原文：一次贿赂或 DC 13 魅力（威吓或说服）检定可让他们开口。弗伦失踪那晚之后没再来过这家酒馆。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文双技能（威吓或说服）+ 贿赂替代路径，skill 只承载一个，其余入 dmHint。"}},{id:"info_04a_g4",content:"门把手上方那条黑色的带翼长蛇是散塔林会的象征——这栋仓库是黑网的地方。",holders:[],revealCondition:{type:"check_gated",skill:"智力",dcTier:"easy",checkDC:10},teaser:"蜡烛巷唯一没被砸碎的路灯被不灭明焰照着，正对面那扇门的把手上方画着一条黑色的带翼长蛇。",dmHint:"与散塔林会有关联的角色直接认出该符号，无需检定。",_meta:{sourcePages:[24],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文为「成功的 DC 10 智力检定」——纯属性检定不带技能，skill 字段无技能可填，暂填「智力」待人工确认口径。"}},{id:"info_04a_g5",content:"弗伦·布拉格玛三十多岁，相貌英俊，一头波浪状的红金色头发，最后一次露面时穿着王子般的华服。他失踪前两晚和沃洛在码头区一家昏暗粗俗的酒馆「串烧龙」喝酒作乐；沃洛建议从那里开始找。",holders:["npc_4dd"],revealCondition:{type:"free"},teaser:"沃洛把软帽往后一推，开始描述他那位「美过智」的朋友。",dmHint:"沃洛尴尬地承认自己可能连累了弗伦，拒绝交代那晚的全部细节；他只记得两人喝了几个小时、还赌了几把，然后他先走了。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[22,23],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：沃洛主动交付的委托信息，故 free；是开局调查链的起点。"}},{id:"info_063_g1",content:"叩过门或窗之后，仓库里传来一阵慌乱的挪动声——有几个东西正躲到翻倒的家具后面去。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:16},teaser:"叩门声之后，屋里安静得过分。",dmHint:"原文为被动感知（察觉）16 及以上自动听见，此处以 DC 16 察觉表达；出声者即等于放弃突袭，里面的四只天狗会先藏好。",_meta:{sourcePages:[24],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文是被动感知阈值 16，check_gated 只能表达主动检定，口径待人工确认。"}},{id:"info_049_g1",content:"海斯特斯·斯泰格特队长曾经派人盯过蜡烛巷这间仓库，为的是抓一个叫厄斯图尔·弗洛克辛的散塔林会煽动者——传闻最近这许多流血都是这条「大鱼」挑起的。后来他撤了盯梢去加强全区巡逻，如今很后悔。",holders:[],revealCondition:{type:"check_gated",skill:"说服",dcTier:"hard"},teaser:"队长在仓库里绕了一圈，盯着门口的位置皱了皱眉，像是认得这个地方。",dmHint:"原文只写「斯泰格特不会与陌生人分享这些信息」，未给检定与 DC；雷纳尔在场会让队长态度好转，但不等于他会松口。",_meta:{sourcePages:[27],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：无 checkDC 的 hard 档软门，skill 取「说服」为补全者判断，非原文数值。"}},{id:"info_049_g2",content:"斯泰格特队长不会为了找一个「多半是散塔林会或克萨瑟斯行会间谍」的人，派一队人下水道。放行前他递来一张折叠的羊皮纸《法律法典》，外加几句奉送的忠告：最好别插手犯罪的事，把这种脏生意留给城市守卫；不是每个守卫官都像他这么好说话；还有——别让血弄脏街道。",holders:[],revealCondition:{type:"free"},teaser:"队长把那张羊皮纸折了又折，才递过来。",dmHint:"只要雷纳尔和角色在一起，队长愿意无视他们在此犯下的罪行；在码头区继续惹事的角色多半还会再遇到他。",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：队长主动交付的态度与忠告，无门槛，故 free。"}},{id:"info_064_0",content:`当天狗（kenku）说话时，它们模仿它们以前听过的声音和嗓音。在审问下，它们重复以下短语：
用带有兽人口音的低沉声音说："姗娜萨 向你致意。"
用尖细的鼻音说道："把那个漂亮男孩绑在后屋里！"和"跟着下水道里的黄色标志走。"（这句话指的是下水道中标记有姗娜萨符号的隧道，它们通向赞纳塔公会藏身处。）
用沙哑的声音说："没时间搜刮这个地方。只需把他带到老板那里。"`,holders:[],revealCondition:{type:"free"},dmHint:"天狗所知道的（Z1. 主房间）",_meta:{sourcePages:[24],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：gated 语义判不出，降级 free；holders 按同幕在场近似"}},{id:"info_064_g1",content:"墙边那一打尸体分属两伙人：五名散塔林会雇佣兵，脖子或前臂上刺着黑色翼蛇；七名克萨瑟斯行会暴徒，其中一人右掌心有个黑色圆圈、圆周上十根辐条——那是姗娜萨的标志。两伙人在这间仓库里火并过。",holders:[],revealCondition:{type:"check_gated",skill:"调查",dcTier:"easy"},teaser:"尸体的领口和袖口下露出墨色的边角，散落的刺剑和匕首还没人收。",dmHint:"五名散塔林会雇佣兵正是绑走弗伦和雷纳尔的那伙人。",_meta:{sourcePages:[24,25],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文把纹身写成尸体的客观特征、未给检定，此处用无 checkDC 的 easy 档表达「须查验尸体才看得到」。"}},{id:"info_06b_g1",content:"仓库下层北侧有一段墙其实是一扇暗门，门后是一间用来藏赃物的密室。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"这一段墙板上的灰比两侧薄，接缝也直得不像是砌出来的。",dmHint:"门一开，楼上办公室的报警铃就会齐响（见 evt_06b_e1）。",_meta:{sourcePages:[26],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「可以通过成功的 DC 15 感知（观察）检定发现」。"}},{id:"info_068_g1",content:"散塔林会认为达古尔特·尼维尔梅尔在担任开放领主期间挪走了一大笔黄金，藏在城中某处的宝库里；他们相信可以靠一件叫「戈洛尔石」的神器找到它，那东西直到最近还在克萨瑟斯行会手上，显然被人偷走了。他们以为雷纳尔知情，可他和父亲已经多年不说话。",holders:["npc_4d2"],revealCondition:{type:"free"},teaser:"被从防水布底下拉出来的年轻贵族抹了把脸，说他大概知道那些人为什么抓他。",dmHint:"角色开口问，雷纳尔就照实说——这是整条主线（挪用的五十万金龙、戈洛尔石、龙之宝库）的入口。他的信任容易获得，一旦被辜负就再也回不来。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[25,26],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文为雷纳尔的朗读框答话，无检定门槛，故 free。"}},{id:"info_068_g2",content:"那晚雷纳尔怕弗伦醉得回不了家，提出送他一程。两人离开菲莱特巷、往北走扎斯特罗街时被五个暴徒袭击，一并押到蜡烛巷的仓库。审问还没开始，克萨瑟斯行会的人就伏击杀光了看守，他们把弗伦当成了雷纳尔，打晕拖走；雷纳尔靠躲进储藏室逃过一劫。",holders:["npc_4d2"],revealCondition:{type:"free"},teaser:"那个满身污垢、带着腌鲱鱼味的年轻人反复念叨同一句：他们要抓的人是我。",dmHint:"雷纳尔为此内疚。角色若请他同行寻找弗伦，他会答应，并从死去的黑网成员身上取一把匕首和一把刺剑武装自己。",_meta:{sourcePages:[23,25],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：绑架真相由雷纳尔当面交代，无检定门槛。"}},{id:"info_06e_g1",content:"楼上每间办公室的门楣上都装着一只钢制报警铃，铃全都用细线连到楼下密室的暗门上——那扇门一被拉开，铃就会一起大响。",holders:[],revealCondition:{type:"check_gated",skill:"调查",dcTier:"easy"},teaser:"门楣上方钉着一只落满灰的钢铃，铃舌上拴着一根细线，消失在墙里。",_meta:{sourcePages:[26],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文直述铃与暗门以电线相连，未给检定；此处用无 checkDC 的 easy 档表达「须查看才发现连线」。"}},{id:"info_071_g1",content:"顺着后巷能把绑架者的路线追出来：痕迹止于一块嵌在路面里的圆形金属盖，盖子很轻，一掀开，底下是通往下水道的梯子。",holders:[],revealCondition:{type:"check_gated",skill:"调查",dcTier:"medium",checkDC:15},teaser:"巷口的泥地上有一道被拖拽过的痕迹，几个街坊的目光跟着它飘向巷子深处。",dmHint:"原文：DC 15 智力（调查）检定，或付 5 金币贿赂当地人同样奏效；不少人看见弗伦被拖走。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：贿赂替代路径写入 dmHint（revealCondition 无法并列两路）。"}},{id:"info_071_g2",content:"下水道里每一个要选方向的路口，正确那条隧道旁的墙上都用黄色粉笔画着一个手掌大的圆圈，圆周上十根等距的辐条。这些记号每隔几天会被克萨瑟斯行会或清道夫公会的人抹掉，眼下还在。",holders:[],revealCondition:{type:"free"},teaser:"污水的臭气里，墙上那点黄色的粉笔灰显得格外新。",dmHint:"循标记走约一小时会撞上守路口的凝视者眼魔，击败它后再沿标记走 5 分钟即到藏身处。",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：朗读框直接把符号摆在角色面前，故 free。"}},{id:"info_085_g1",content:"这间看着空无一物的屋子地上有一块石板是松的，掀开底下是一条粗凿的矮隧道，向北通出去。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"easy",checkDC:10},teaser:"屋里一无所有，只是靠北的地面踩上去有一块会轻轻晃动。",dmHint:"原文：须彻底搜查并通过 DC 10 感知（察觉）检定；隧道另一端是半身人皮博迪一家的私人酒窖，那块大石板需要力量值 10 以上才抬得动。",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「经过彻底的搜查，并结合一次成功的 DC 10 感知（察觉）检定」。"}},{id:"info_089_g1",content:"石柱上那个十辐圆圈的圆心是个浅浅的圆形凹坑，正好容得下尼希卢尔随身那枚三寸的石球——一颗雕成眼球模样的石头。把石眼按进凹坑，南墙上会开出一扇八尺高、四尺宽的不透明黑门，穿过去的人会出现在姗娜萨的巢穴里。门是单向的，石眼从柱子上取下一分钟后重新关上。",holders:["npc_4c4"],revealCondition:{type:"item_used",itemRef:"石眼",targetRef:"石柱凹槽"},teaser:"空屋正中立着一根石柱，柱上刻着一个十辐圆圈，圆心的凹坑边缘被摩挲得发亮。",dmHint:"石眼在尼希卢尔身上（Q7）；灵吸怪自己就靠它逃回姗娜萨的巢穴。这扇门在东侧看得一清二楚，算不上什么秘密门。",_meta:{sourcePages:[29,30],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：门的机制由原文直述；石眼本身在 pack 中无 trs_/物品实体，itemRef 走物品库命名空间。"}},{id:"info_096_g1",content:"屠龙巷那家废弃客栈里有东西没走：盘子会在无人碰触时摔碎，酒桶塞子自己弹开，积灰的地板和油腻的窗玻璃上会浮出歪斜的字迹——「打烊时间！」「最后一杯！」它听得懂通用语和精灵语，却发不出一点声音。",holders:[],revealCondition:{type:"free"},dmHint:"作祟幽灵（恶灵）无形中以新主人为代价制造麻烦：打碎盘子、破坏啤酒桶等；若角色迟迟不领会暗示，它就把不太微妙的警告写在地板和窗上。要真正把客栈据为己有，角色必须安抚它或摧毁它。",_meta:{sourcePages:[31],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：环境线索层（幽灵的存在与它的表达方式），身份真相见 inf_096_g2。"}},{id:"info_096_g2",content:"在客栈作祟的幽魂是前任酒吧老板——一个名叫利夫的半精灵。经营这家客栈是他一生的工作，即使死了他也放不下这个地方。",holders:[],revealCondition:{type:"check_gated",skill:"调查",dcTier:"medium"},teaser:"那些字迹的笔锋熟练得像写了几十年酒单，措辞也全是干这行的人才会脱口而出的话。",dmHint:"安抚：若角色致力于修复翻新、目标是再次向公众开放，利夫会逐渐接受他们作为新主人并变得极其乐于助人（拉椅子、倒酒递到手边、雨天接外套；开始营业后还能锁门、扫地）。摧毁：若遭到攻击，它在生命值降至一半时逃往塔楼最高层，从那里战斗到底，降至 0 即被摧毁。",_meta:{sourcePages:[31],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文未给『查明幽灵身份』的检定或 DC，check_gated（调查/medium，无 checkDC）为占位门，存疑待复核。"}},{id:"info_09f_g1",content:"草药师法拉·勒法利尔与一名叫兹拉吉的散塔林会成员是朋友——兹拉吉曾经救过法拉一命。他不时来访，法拉在科瑞隆的王冠二楼常年为他留着一个房间。",holders:[],revealCondition:{type:"free"},dmHint:"这条关系是领主联盟 4 级任务的落点：被通缉的刺客兹拉吉正是在这栋楼三楼的温室里被围堵（见 inf_0a6_g5）。原文未说明法拉是否对外人公开这段交情，此处按公开处理。",_meta:{sourcePages:[32],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文『Fala与一个名叫Ziraj的散塔林会成员是朋友，Ziraj曾经救过Fala的命…Fala在二楼为他预留了一个房间』。是否 gated 无书面依据，取 free，存疑。"}},{id:"info_0a1_g1",content:"虎眼石的主人「文森特·特伦奇」并不是人类侦探。它真名瓦兰塔加尔，是一只罗刹——在深水城生活了多年，按需要频繁更换身份，每次会客之前都先对自己施放易容术。",holders:[],revealCondition:{type:"check_gated",skill:"洞悉",dcTier:"hard"},teaser:"特伦奇问得比你说得多，回答却总差半寸；油灯的光落进他眼里时，反光的角度不太像人的眼睛。",dmHint:"它已经习惯了与凡人共处，并且——连它自己都意外——它相当喜欢深水城及其市民，不会主动与角色为敌。原文未给识破检定与 DC，洞悉/hard 为占位门。",_meta:{sourcePages:[32],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：真身=罗刹瓦兰塔加尔，原文明载；揭示门无书面依据，check_gated（洞悉/hard，无 checkDC）为占位，存疑。teaser 只写反常观感，不泄罗刹/易容术。"}},{id:"info_0a6_g1",content:"在巷子附近保持距离盯梢的是布雷甘·达特的三名副官：菲尔莱科特·拉菲恩与克雷比格·马斯奇尔在夜里监视，Soluun Xibrindas 在白天监视（并尽量躲开阳光）。他们真正盯的，是队伍里的那名卓尔。",holders:["npc_4aa"],revealCondition:{type:"check_gated",skill:"洞悉",dcTier:"medium",checkDC:15},teaser:"有那么几次，你在街角的阴影里瞥见一张苍白的脸；等你再看过去，那里只剩风。",dmHint:"被动感知（察觉）18 或更高的角色会在几天内瞥见这些卓尔间谍；确认他们特别关注队伍里的卓尔需 DC15 感知（洞悉）检定。只有队伍中有一名或多名卓尔时贾拉索才会派出这三名副官。",_meta:{sourcePages:[34],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文『被动感知值为18或更高的角色在几天内会瞥见卓尔间谍，并且可以通过成功的{@dc 15}感知（Insight）检定，确认这些间谍特别关注卓尔一员的行动』。holders 用通用条目 npc_4aa（卓尔火枪手）；三名副官本身无独立 npc 实体。"}},{id:"info_0a6_g2",content:"被直面时，那些卓尔间谍不会接触，只在门口留下一枚黑色眼罩当名片。第二天，一个自称 J.B. Nevercott 的服装商登门，请求与队伍里的卓尔单独谈谈——那张脸是贾拉索·班瑞用易容帽换来的。",holders:["npc_4b9"],revealCondition:{type:"event_fired",eventId:"evt_0a6_e1"},teaser:"门槛上留着一枚黑色的眼罩，像一张不写字的名片。",dmHint:"贾拉索只认真考虑卓尔角色（不在意男女），并当场给出第一个任务作为测试。他是高超的演员，从不放松警惕：即使被识破真实身份，也绝不承认自己是伪装以外的任何人。若队伍改为向城市守卫报告黑暗精灵，他会结束监视并暂时切断与角色的一切联系（evt_0a6_e2）。",_meta:{sourcePages:[35],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文『如果角色们试图面对黑暗精灵间谍，他们会避免接触，但会留下一个黑色眼罩作为名片。第二天，贾拉索·班瑞出现在聚会的总部，使用他的易容帽变成一个名叫J.B. Nevercott的服装商』。"}},{id:"info_0a6_g3",content:"会说话的驮马玛克辛记得：两天前她载过一位日精灵和他的半兽人保镖，从某个她记不清的十字路口上车，在「打瞌睡的门」下车。路上两人谈到要雇密探查出城里散塔林会的藏身处。她描述的那两位，正与达维尔·星歌和雅格拉·石拳的模样相符。",holders:[],revealCondition:{type:"check_gated",skill:"游说",dcTier:"medium",checkDC:13},teaser:"码头一带的车夫都爱说，城里有一匹会说话的母马，什么话都往她耳朵里灌。",dmHint:"竖琴手 2 级任务：先用 DC13 智力（调查）找到玛克辛（智力 10 的驮用马，会说通用语）；她只对说服她相信自己是竖琴手的人开口——DC13 魅力（游说）。",_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文两段检定（DC13调查找马、DC13说服开口）＋证词内容与达维尔/雅格拉的外貌对应，逐条照抄。skill 用权威名『游说』（原文『说服』为别名）。"}},{id:"info_0a6_g4",content:"《深水城瓦祖》的出版人加克斯利·鲁德巴斯特私下怀疑：戴面具的窃贼「黑毒蛇」是阿玛利亚·卡萨兰特的秘密邪恶双胞胎姐妹，戴面具是为了遮住毁容。",holders:[],revealCondition:{type:"check_gated",skill:"威吓",dcTier:"easy",checkDC:12},teaser:"小报出版人笑得意味深长，说关于那个戴面具的贼，他知道的比登出来的多得多。",dmHint:"臂铠教团 3 级任务：DC12 魅力（威吓或游说），或至少 50 金币贿赂，即可撬开加克斯利的嘴。这条猜测是假的——登门卡萨兰特家采访，或花一天调查并通过 DC15 智力（调查），都会揭示根本不存在这么一位姐妹。",_meta:{sourcePages:[39],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 DC12 魅力（威吓或说服）／50金币贿赂二选一，check_gated 只能承载一条技能，取『威吓』，替代路径（游说/贿赂/证伪的DC15调查）记 dmHint。content 存的是加克斯利的怀疑本身（一条假线索），不是既定事实。"}},{id:"info_0a6_g5",content:"被通缉的散塔林会刺客兹拉吉就藏在屠龙巷——科瑞隆的王冠三楼那间玻璃温室里。他会毫不反抗地向城市守卫投降，笃信同僚会把他捞出来。",holders:[],revealCondition:{type:"check_gated",skill:"调查",dcTier:"hard",checkDC:18},teaser:"追查绕了一大圈，线索又指回巷子本身：某个邻居的屋檐下住着一个不该在那儿的人。",dmHint:"领主联盟 4 级任务：领头追查的角色须在累计三次失败前通过三次 DC18 智力（调查）检定，每次代表 8 小时；其他角色可协助给予优势。上级要求活捉不杀，以免进一步激化暴力。",_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文『必须成功通过三次{@dc 18}智力（调查）检定…将在托尔克斯库尔巷（T4|09f）的科瑞隆王冠温室内围堵刺客猎人兹拉吉』。同时部署到 scn_09f（藏身处所在幕）。"}},{id:"info_26b_g1",content:"布雷甘·达特知道通往眼魔巢穴最安全的一条路：城堡区下水道里的一段秘密楼梯。贾拉索在姗娜萨公会内部还安插着一名间谍——顾问纳尔·泽布林达斯，用短讯术把情报送给同族。",holders:["npc_4b9","npc_4c2"],revealCondition:{type:"free"},dmHint:"任何属于布雷甘·达特的角色都可以从贾拉索或另一个来源拿到这条路线（楼梯落点 X1）。",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：派系身份不在 Condition 白名单内，取 free 并把『仅派系成员可得』记 dmHint，不发明条件形态。"}},{id:"info_26b_g2",content:"楼梯顶上会有四名卓尔等着：Arannis Nur'zekk、Beldar Tlabbath、Rylvar Tlabbath 和 Draknafein Uriss。他们奉命不惜一切代价帮角色完成任务。",holders:["npc_4b9"],revealCondition:{type:"reputation_at",scope:"faction",id:"bregan_daerthe",atLeast:4},teaser:"贾拉索说，你们不会是一个人下去的。",dmHint:"队伍中至少一名布雷甘·达特成员声望达 4 或以上才出现。这四人另有密令：若纳尔·泽布林达斯还活着就杀掉他，并取回贾拉索的持有袋（X35）。若记经验值，每名卓尔在队期间分等额经验。",_meta:{sourcePages:[101],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：声望阈值 4 出自原文；派系 id 'bregan_daerthe' 为本 overlay 约定串（reputation_at.id 不参与 pack 实体校验），待与全书声望口径统一。密令属 DM 侧，不入 content。；勾稽0806:reputation_at为合法Condition且声望工具已落地,但faction id未与全书声望口径统一,入库时核"}},{id:"info_26e_g1",content:"杰瑞斯·波康一直在派启蒙鼠钻进下水道寻找眼魔的巢穴，它们最近在城堡区下水道里发现了一条通往巢穴的秘密楼梯。她可以让其中一只带路——那只老鼠智力 10，会说通用语。",holders:[],revealCondition:{type:"free"},dmHint:"对翡翠联盟成员开放，需前往 Phaulkonmere 与杰瑞斯·波康交谈；楼梯落点 X1。杰瑞斯以无实体的女性声音显现，庄园花园里的人都能听见。",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：杰瑞斯·波康无独立 npc 实体，holders 留空。"}},{id:"info_0ad_g1",content:"住在深水城山洞穴里的僧侣胡拉姆，愿意对肯好好说话的人留下一句话：「邪恶的双胞胎暂时隐藏了它的面目。预计在冬末之前情况会有所变化。」",holders:["npc_4b5"],revealCondition:{type:"check_gated",skill:"游说",dcTier:"easy",checkDC:12},teaser:"山坡上的洞里住着个不爱见客的僧侣；据说他偶尔会对访客吐出一句没头没尾的话。",dmHint:"灰手 2 级任务：攀山者须先过 DC12 体质豁免，否则抵达时带 1d4 层力竭；让胡拉姆分享消息需 DC12 魅力（游说），且不宜惹恼他或久留。这句话是对曼松（npc_4bb）的隐晦提及。下山安全。",_meta:{sourcePages:[36],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：引语逐字照抄原文；『暗指曼松』属 DM 侧解读，只入 dmHint 不入 content。"}},{id:"info_0ad_g2",content:"每天黎明，灰手的麦伦·战龙都要在他「打瞌睡的门」的房间里与自己那把魔法斧「蔚蓝之锋」较一场心智的劲，然后才肯出门。斧子想换一个新持有者，梅伦不肯放手。",holders:["npc_4be"],revealCondition:{type:"check_gated",skill:"洞悉",dcTier:"medium",checkDC:15},teaser:"近来梅伦那副没心没肺的性子变得阴沉，他比平时更常泡在「打瞌睡的门」。",dmHint:"灰手 4 级任务：观察十天；看懂黎明那场较劲需 DC15 感知（洞悉）检定。梅伦颅内寄居着一只噬脑怪——若角色能清除它，瓦婕拉会给队伍一支探秘魔杖。",_meta:{sourcePages:[37],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：DC15 智慧（洞悉）出自原文；『颅中噬脑怪』出自奖励条款的条件句，属 DM 侧真相，入 dmHint。"}},{id:"info_26c_g1",content:"米尔特知道姗娜萨的巢穴在哪儿——身为深水城的领主之一，他与那只眼魔打过不止一次交道。他会把角色带到城堡区下水道里的秘密楼梯，并在他们下去之前提醒：姗娜萨与类人生物处不来，不会平白信任谁，还爱在没有阴谋的地方臆想出阴谋；它养着一条宠物鱼，护得发疯。他本人不会同行。",holders:["npc_4c0"],revealCondition:{type:"free"},dmHint:"对竖琴手成员开放；楼梯落点 X1。",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：派系身份无对应 Condition，取 free 并记 dmHint。"}},{id:"info_26c_g2",content:"姗娜萨的首席工程师索文·双须其实是竖琴手的情报员。",holders:["npc_4c0","npc_4d7"],revealCondition:{type:"reputation_at",scope:"faction",id:"harpers",atLeast:4},teaser:"米尔特说，巢穴里未必人人都向着那只眼魔——但这句话他只对够格的人往下说。",dmHint:"米尔特只把这个秘密告诉在竖琴手声望达 4 或以上的角色。",_meta:{sourcePages:[101],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：声望阈值 4 出自原文；派系 id 'harpers' 为本 overlay 约定串，待与全书声望口径统一。；勾稽0806:reputation_at为合法Condition且声望工具已落地,但faction id未与全书声望口径统一,入库时核"}},{id:"info_26d_g1",content:"加莱斯特·银鬃本人不知道姗娜萨的巢穴在哪儿，但他能从莱拉·银手那里拿到详情，然后把队伍带到城堡区下水道里的秘密楼梯，并告诫他们避免与这只偏执又难以预测的眼魔正面冲突。",holders:["npc_4b7","npc_4ba"],revealCondition:{type:"free"},dmHint:"对领主联盟成员开放。若有角色在领主联盟声望达 4 或以上，加莱斯特愿意随队一同进入巢穴执行任务（若记经验值，他分等额经验）。",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：派系身份无对应 Condition，取 free；声望4随队条款记 dmHint。"}},{id:"info_255_g1",content:"僧侣胡拉姆与奥瑞纳克斯多年前就相识，而且处得相当好——那条龙喜欢他。",holders:["npc_4b5"],revealCondition:{type:"free"},dmHint:"臂铠教团的援助：胡拉姆会赶到并尽他所能相助；当角色当着胡拉姆的面与奥瑞纳克斯谈判时，魅力（游说）检定具有优势。",_meta:{sourcePages:[98],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：机械后果（检定优势）留 dmHint，不入 content。"}},{id:"info_26f_g1",content:"雅格拉·石拳最近从一个喝多了嘴松、又与姗娜萨公会有牵连的人嘴里，问出了通往眼魔巢穴的「后门」：城堡区下水道底下的秘密楼梯。「相信我，」她说，「这比走幽暗地城和骷髅港那条路安全。」",holders:[],revealCondition:{type:"free"},dmHint:"对散塔林会成员开放，在「打瞌睡的门」找雅格拉。若角色承诺至少付她 1000 金币，她会随队下去；否则她祝他们好运并回酒馆。若记经验值，她在队期间分等额经验。",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：雅格拉·石拳无独立 npc 实体，holders 留空。"}},{id:"info_0bb_g1",content:"鲜为人知：警觉的法师与保护者秩序的乌尔科里亚·斯通马罗曾经拥有巨魔头颅巷的这家酒馆。她把它卖给了一户盾矮人，那家人后来落难，又转卖给一个把这里改成孤儿院的女人——「结果证明那是个巫婆，她煮孩子还吃他们。」此后房产又几经易手。乌尔科里亚希望新主人能好好用它。",holders:[],revealCondition:{type:"event_fired",eventId:"evt_0bb_e1"},teaser:"那位被称作「石像鬼」的盾矮人法师推门进来喝一杯，眼睛却把每一面墙、每一道梁都扫了一遍，像在认旧识。",dmHint:"乌尔科里亚每次穿过北城区都会在酒馆停下喝一杯并检视这地方，构装盾卫在外面等候；她若不满意角色的打理，会把批评咽回去。角色可以雇她在场所内施展守卫刻文，每道 300 金币。没人知道她住哪儿，传言她住在地下，靠传送术进出。",_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文『鲜为人知的事实是，乌尔科里亚曾经拥有过巨魔头颅巷的酒馆…』整段。揭示门挂 evt_0bb_e1（她登门巡视）而非发明 DC。"}},{id:"info_0ca_g1",content:"刚才在巨魔头颅巷炸开的是一个火球术法术：爆炸的规模、那团滚出来的浓密刺鼻烟雾，以及焦痕的分布方式都对得上——有人就在门外放了火球。",holders:[],revealCondition:{type:"check_gated",skill:"奥秘",dcTier:"medium",checkDC:13},teaser:"空气里那股刺鼻的焦味不太对劲，懂法术的人闻着会觉得似曾相识。",_meta:{sourcePages:[43],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「成功的 DC 13 智力（奥术）检定」逐字对齐。"}},{id:"info_0d0_g1",content:"两具披斗篷的男性人类尸体穿着一样的皮甲、佩一样的长剑；其中一个的右前臂上纹着一条黑色的有翼之蛇——黑网的标志。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"那两个披斗篷的死者装束一模一样，怎么看都不像碰巧路过的行人。",dmHint:"这是把爆炸与散塔林会挂钩的第一枚证物，也是让瑞纳尔·奈沃兰波开口的引子。",_meta:{sourcePages:[44],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「成功的 DC 15 感知（观察）检定搜查尸体」。"}},{id:"info_0d0_g2",content:"死去的男性侏儒靴子与斗篷上结着干涸的污物，说明他最近待过下水道；他身上还挂着一个袋子，里面装着五颗各值 100 金币的宝石。他至死攥着一把匕首。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"那个攥着匕首的侏儒身上有股下水道的味道，衣袍下似乎还鼓着什么。",dmHint:"侏儒即达拉卡尔；格洛尔之石已被乌尔斯图从他口袋里取走，不在尸体上。",_meta:{sourcePages:[44],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：与 trs_0d0_0（袋中五颗宝石）同源。"}},{id:"info_0d1_g1",content:"花店「科瑞隆之冠」的主人法拉·勒法利尔当时正在二楼温室浇花：透过烟雾，她看见一个披斗篷的男人从死去的侏儒身上拿走了什么，然后一瘸一拐地走开；那人烧伤严重，还不时回头，像是怕被人跟踪。他朝「弯曲的钉子」方向去了。",holders:[],revealCondition:{type:"free"},dmHint:"法拉看到的是带着格洛尔之石逃走的厄斯图尔·弗洛克辛，他绕过弯曲的钉子（第2章 T2）离开了巨魔头颅巷。目击者急于开口，谈满 1 分钟即可，无须检定。",_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「不需要进行属性检定，因为目击者们急于交谈」，故 free。"}},{id:"info_0d1_g2",content:"刚从虎眼侦探社出来的水深人杰兹琳·霍恩瑞文咬定那不是人：「更像一个人形的木偶。一个没有线的木偶。它在屋顶上。它向下面的人群投掷了一些东西，引起了爆炸。」她在混乱中跟丢了那东西，不知道它去了哪里。",holders:[],revealCondition:{type:"free"},_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：目击者证词，原文明示无须检定。"}},{id:"info_0d1_g3",content:"十二岁的马特姆·特雷克在爆炸后躲到雨水桶后面，听见「扑通」一声，从桶里捞出了一条火球项链——扣环已断，只剩两颗珠子。爆炸不是有人现场施法，而是有人扔出了项链上的一颗火珠。",holders:[],revealCondition:{type:"check_gated",skill:"游说",dcTier:"easy",checkDC:8},teaser:"那个躲在雨水桶后头的男孩攥着什么东西不肯松手，一边说他的半身人朋友被活活烧死，一边往后缩。",dmHint:"威吓或游说均可（DC 8），也可强行夺走；项链是秘偶在屋顶逃跑时勾断掉落的。向城市守卫隐匿这件证物在深水城属妨碍司法，罚金可达 200 金币并强制劳动十天。",_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「一次成功的 DC 8 魅力（威吓或说服）检定」，skill 取游说，威吓等价路径写入 dmHint。"}},{id:"info_0d1_g4",content:"死者被运往北城区城市守卫站的地下太平间，当地神庙的牧师已对尸体施放遗体防腐以在调查期间保存它们。向牧师所属神庙捐赠至少 25 金币可以雇一位牧师施放死者交谈，提问方须事先备好问题清单；在灰手、竖琴手、领主联盟、战旗秩序或散塔林会中有 1 点以上名望的角色，也可以请本派系的代表出面安排。",holders:[],revealCondition:{type:"free"},dmHint:"这是让尸体开口的唯一渠道，也是 inf_0d1_g5 / g6 / g7 三条供词的前置。",_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：Condition 白名单无「捐赠/名望换服务」形态，故本条 free、三条供词改挂 info_revealed 链式前置。"}},{id:"info_0d1_g5",content:"达拉卡尔的尸体答道：他从城市下方深洞里那只名叫姗娜萨的眼魔的巢穴中偷走了一件名为格洛尔之石的神器；这块石头是找到藏在深水城中的巨龙宝藏的钥匙。",holders:[],revealCondition:{type:"info_revealed",infoId:"info_0d1_g4"},teaser:"那具侏儒的尸体保存得很完整，看得出他至死都攥着什么秘密。",_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：死者交谈可问出的四条中的前三条按主题拆为 g5/g6。"}},{id:"info_0d1_g6",content:"达拉卡尔的尸体还答道：他为深水城的开放领主达格特·尼维莫伯做事（他至今认定尼维莫伯才是合法的开放领主，而不是莱拉·银手）。他听说有一群冒险者从散塔林会手里救回了尼维莫伯的儿子，正打算把格洛尔之石暂时托付给他们，等甩掉追踪者再回来取——然后火球炸了。",holders:[],revealCondition:{type:"info_revealed",infoId:"info_0d1_g4"},teaser:"侏儒倒下的方向，正朝着巨魔头颅庄园。",dmHint:"这条把角色本人钉进了案子的中心：他们是达拉卡尔原定的托付对象。",_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全。"}},{id:"info_0d1_g7",content:"两名死去的散塔林会雇佣兵报出姓名：巴谢克·奥塔利斯与温·马尔克拉夫。他们为厄斯图尔·弗洛克辛做事，住在格拉尔洪德别墅；这趟的任务是帮忙抓住一个叫达拉卡尔的侏儒。据弗洛克辛说，侏儒身上的神器能让他们富可敌国。",holders:[],revealCondition:{type:"info_revealed",infoId:"info_0d1_g4"},teaser:"两具披斗篷的死者显然是一伙的，连黑皮甲的裁法都一样。",dmHint:"这是通往格拉尔洪德别墅（scn_0ef）的三条钥匙线索之一。",_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文对雇佣兵尸体施死者交谈的三条并为一条。"}},{id:"info_0db_g1",content:"杰兹琳描述的那个「没有线的木偶」，和奇迹日游行上出现的自动机像得出奇——任何在深水城过过秋天的人都知道这一点，而那场游行由当地的贡德神庙赞助。",holders:[],revealCondition:{type:"info_revealed",infoId:"info_0d1_g2"},teaser:"「人形木偶」这四个字，在深水城过过奇迹日的人听着都会耳熟。",dmHint:"顺着这条线，角色会去海防街与鲨鱼街拐角的灵感之手之家（海区）查贡德神庙的关联。",_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「询问 Jezrynne 的角色可以得到引发火球的生物的描述」，故挂 info_revealed(inf_0d1_g2)。"}},{id:"info_0db_g2",content:"青铜龙血脉的龙裔祭司瓦莱塔认出神庙屋顶上的身影是尼姆——一个由到访的拉塔尼巫师赠给灵感之手之家的秘偶。",holders:[],revealCondition:{type:"free"},dmHint:"瓦莱塔是中立的；提到屋顶身影她就会认人，若再提机械鸟撞人的事，她会叹口气带角色上螺旋楼梯去尼姆的阁楼——门上却换了一把她不认识、也没有钥匙的新锁。",_meta:{sourcePages:[46,47],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全。"}},{id:"info_0db_g3",content:"尼姆用它自创的手语向瓦莱塔承认：为了排遣孤独，它亲手造了第二个秘偶；那个造物一个月前因困惑与恐惧逃走，此后它再没见过它。",holders:[],revealCondition:{type:"check_gated",skill:"游说",dcTier:"hard",checkDC:17},teaser:"阁楼门上换了一把新锁，门后有窸窣的金属声——里面的东西不想让人进来。",dmHint:"瓦莱塔会强烈敦促尼姆配合，为该检定提供优势；也可用盗贼工具过 DC 20 敏捷检定撬锁或用敲击术开门，但瓦莱塔不允许角色破门。听完这番话，她会怒令侍僧当着尼姆的面把它的工具与未完成的发明全部搬走。",_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「成功的 DC 17 魅力（说服）检定说服尼姆打开门」。"}},{id:"info_0db_g4",content:"尼姆造过一个一尺长的铜制装置，一端有伞状金属突起，周身笼罩着预言系魔法的光环。按住扳机启动后，只要五百尺内出现尼姆以外的秘偶，伞状物就开始旋转、嗡鸣、咔嗒作响；距离越近转得越快、响得越大，目标进到三十尺内时达到最大。尼姆造它是为了找回自己走失的造物，却发现自己离不开神庙的地界。",holders:[],revealCondition:{type:"free"},dmHint:"在尼姆的阁楼搜索、或旁观侍僧清理阁楼即可发现；侦测魔法会显出预言系光环。尼姆解释用途后，瓦莱塔允许角色把它带走。",_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文未给发现检定（「搜索…或在清理时观察该区域的角色可以发现」），故 free。"}},{id:"info_0db_g5",content:"带着秘偶探测器逐区搜索，最终把尼姆走失的那个秘偶定位到北城区赛尔顿街上的格拉尔洪德别墅。",holders:[],revealCondition:{type:"item_owned",itemRef:"秘偶探测器"},teaser:"伞状物在北城区某几条街上莫名地转快了，咔嗒声一路收紧。",dmHint:"逐区搜索按角色的路线可能要花上几天；骑狮鹫可在数小时内完成全城搜索——需要与萨夫拉·贝拉布兰塔关系良好的铁手套骑士团成员身份，或与加莱斯特·银鬃关系良好的领主联盟成员身份，并以 DC 16 感知（驯兽）检定赢得幼年狮鹫「碎骨者」的信任，检定失败者不得骑乘。这是通往格拉尔洪德别墅（scn_0ef）的三条钥匙线索之一。",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：以 item_owned(秘偶探测器) 表达「配备探测器后逐区搜索」的前置。"}},{id:"info_0db_g6",content:"在码头区，探测器也会响：海妖集市的老板扎多兹·佐德把三艘船开进了深水城——两艘大帆船「心碎者」与「地狱使者」停在码头，旗舰「抢眼人物」停泊在深水港——每艘船上都至少有一名秘偶船员。佐德每年去一趟遥远的兰塔尼斯岛，上次从一位兰塔尼斯法师那里买了四个秘偶，旗舰留两个、另两艘船各一个；不参加游行时它们都待在船上。",holders:[],revealCondition:{type:"item_owned",itemRef:"秘偶探测器"},teaser:"探测器在码头一带响个不停——可这里离北城区差得远。",dmHint:"这是一条会吃掉整晚的岔路。码头白日繁忙混乱，夜里黑暗足以掩护接近停泊船只；角色在船上被抓，船员会把他们逼住等船长发话。若角色要求见船队主人，佐德会用短讯术邀他们上「抢眼人物」共进晚餐——他其实是伪装的贾拉索·班瑞。对他起疑的角色可掷 DC 24 感知（洞悉），成功只能察觉他绝非表面那么简单，不给出身份；伪装只有摧毁船首像才能解除。",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：码头区干扰与佐德晚宴要点并为一条；DC 24 洞悉的结果只写进 dmHint，不作独立 info（避免泄漏贾拉索身份）。"}},{id:"info_0ed_0",content:`在他们的调查过程中，角色们可能想要就火球事件与瑞纳尔·奈沃兰波交谈，考虑到他最近与散塔林会的冲突。相反，他也可能决定去他们所在的酒馆拜访他们。如果他被告知一个侏儒和两个Zhents在爆炸中被杀，Renaer就会抛出一个重磅消息：
任何试图跟进Dalakhar朋友的努力都证明是徒劳的，因为在这位侏儒突然死亡之后，他们已经躲藏起来了。
如果角色们告诉Renaer法拉·勒法利尔看到一个男子逃离Trollskull Alley（见"目击者"），Renaer会向他在竖琴手的朋友求助。一天后，他带着以下信息回来：
Fala看到的男子与厄斯图尔·弗洛克辛的描述相符，他是被怀疑为黑网成员的个体。
另一位北城区的居民声称他在火球事件发生后不久看到乌尔斯图进入了北城区的格拉尔洪德别墅。该居民因为乌尔斯图看起来可疑而向城市守卫报告了他。
两位城市守卫的警官与格拉尔洪德勋爵进行了交谈。他向他们保证没有人闯入庄园，一切都很好。警官们没有理由获得搜查令，因此他们没有继续追究这件事。`,holders:[],revealCondition:{type:"free"},dmHint:"雷纳尔知道的事（雷纳尔知道的事）",_meta:{sourcePages:[49],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：gated 语义判不出，降级 free；holders 按同幕在场近似"}},{id:"info_0ed_g1",content:"瑞纳尔·奈沃兰波抛出一个重磅消息：那个叫达拉卡尔的侏儒是他父亲的间谍，盯了他好几个月，二十天前突然消失——他父亲信任的人不多，却信任这个侏儒。他从达拉卡尔的几个朋友那里听说，侏儒正在执行一项取回格洛尔之石的特殊任务，而且怕散塔林会与赞纳塔公会快追上他；瑞纳尔认为达拉卡尔本打算付钱请角色们把石头送到无冬城他父亲手上。",holders:["npc_4d2"],revealCondition:{type:"info_revealed",infoId:"info_0d0_g1"},teaser:"一听说爆炸里死了个侏儒和两个黑网的人，瑞纳尔的脸色就变了。",dmHint:"达拉卡尔的朋友在侏儒暴毙后都躲了起来，顺这条线追下去是死路。瑞纳尔也可能主动到角色的酒馆来找他们。",_meta:{sourcePages:[49],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文触发是「被告知一个侏儒和两个 Zhents 在爆炸中被杀」，此处以 info_revealed(黑网纹身) 近似该前置，待人工核。"}},{id:"info_0ed_g2",content:"瑞纳尔托竖琴手的朋友查了一天，带回三件事：法拉描述的那个人符合厄斯图尔·弗洛克辛的相貌，此人被怀疑是黑网成员；另一名北城区居民称爆炸后不久看见乌尔斯图走进了北城区的格拉尔洪德别墅，并因其形迹可疑向城市守卫报了案；两名城市守卫的警官找格拉尔洪德勋爵谈过，勋爵保证无人闯入、一切都好，警官拿不到搜查令，也就没再追下去。",holders:["npc_4d2"],revealCondition:{type:"info_revealed",infoId:"info_0d1_g1"},teaser:"瑞纳尔说给他一天时间，他去问问竖琴手里的朋友。",dmHint:"这是通往格拉尔洪德别墅（scn_0ef）的三条钥匙线索之一，需先把法拉的目击告诉瑞纳尔，情报隔一天才回来。",_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「如果角色们告诉 Renaer 法拉看到一个男子逃离…一天后，他带着以下信息回来」。"}},{id:"info_0ef_g1",content:"萨斯·克姆利出于礼节独自来通报搜查结果：官员进门时发现格拉尔洪德勋爵昏迷、夫人惊魂未定、他们的半兽人保镖浑身是血却毫不退让。据说格拉尔洪德一家被黑网的人扣为人质已超过十天，是勋爵亲自带头反抗才杀掉了大部分 Zhents；Zhent 头目厄斯图尔·弗洛克辛是逃脱者之一，仍在逃，守卫会加强搜捕。至于那具秘偶，一无所获——格拉尔洪德家说它几周前被送到别墅，他们收留了它却不知它是散塔林会的间谍，夫人还报称是它偷走了她的火球项链。",holders:["npc_4d4"],revealCondition:{type:"free"},dmHint:"仅在角色选择把所知交给城市守卫这条分支时给出：先是巴尼布斯·阵风与萨斯·克姆利上门问话（他们自己的调查已印证角色所说的大部分内容），随后地方官批了搜查令。这份总结完全建立在格拉尔洪德家提供的说法上，句句是谎——人质、勋爵的英勇、夫人的项链失窃都没发生过，秘偶与散塔林会的关系也是假的。若角色追问「既然秘偶跟 Zhents 是一伙的，为什么要用火球炸 Zhents」，克罗姆利想了想只会猜「大概是它低估了火珠的威力」。",_meta:{sourcePages:[50],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：分支产物，Condition 白名单无「向守卫报案」形态，降级 free 并在 dmHint 写明前置。"}},{id:"info_0ef_g2",content:"格拉尔洪德夫人一口咬定家族与黑网毫无瓜葛，是 Zhents 把他们全家扣为人质——她的丈夫、保镖、孩子和全体仆役都会重复同一套说法。",holders:["npc_4e4","npc_4cb","npc_4b6"],revealCondition:{type:"free"},dmHint:"角色若在冲突里站在格拉尔洪德一边，夫人乐得对非法闯入睁一只眼闭一只眼；问题问得太多，她的态度就转冷。一旦角色袭击家族成员或挥舞武器恫吓，格拉尔洪德家就会把队伍的罪行报给城市守卫。",_meta:{sourcePages:[50],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全。"}},{id:"info_10a_g1",content:"讲台上那本上锁的皮面大书并不是法术书，而是格拉尔洪德家族的编年史，经过修饰与重铸，把这个家族写得尽可能体面。扉页印着格拉尔洪德家的徽章，正文用通用语记述从 1239 DR 流血之剑年到 1422 DR 阴影前进年之间的出生、死亡与家族事件。其中鲜为人知的一条：格拉尔洪德家过去曾与恶魔缔约，由此生出一支提夫林血脉；所有这样的家族成员都被送往远在北方雅塔的格拉尔洪德庄园生活——至少书的尾声是这么写的——书中还顺带提到，有几位深水城的家族成员出生时带着尾巴。",holders:[],revealCondition:{type:"check_gated",skill:"盗贼工具（敏捷）",dcTier:"medium",checkDC:15},teaser:"铁制讲台上那本合着的皮面大书上着锁，侦测魔法能看出它散着防护魔法的气息。",dmHint:"正确的钥匙挂在格拉尔洪德夫人脖子上；敲击术一类魔法也能打开。任何不用正确钥匙的开法都会召出三只恶灵（见 evt_10a_e1）。格拉尔洪德家的两个孩子还有一位十八岁的姐姐托马辛，此刻正在雅塔探访提夫林表亲——与本条呼应。",_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：DC 15 取自原文「使用盗贼工具成功通过 DC 15 的敏捷检定来开锁」。"}},{id:"info_111_g2",content:"格拉尔洪德勋爵招供：「格洛尔之石是某种古老的生物转变而成的神器。它知道隐藏在深水城的一个金库的位置，里面藏有五十万龙币。」",holders:["npc_4cb","npc_4d9"],revealCondition:{type:"check_gated",skill:"威吓",dcTier:"easy",checkDC:10},teaser:"堵门的家具后面传来讨饶声——这位勋爵手里握着刺剑，却抖得握不稳。",dmHint:"若勋爵有理由相信妻子看得见或偷听得到这段对话，检定带劣势。厄斯图尔·弗洛克辛知道同样的三条，但除非受魔法强迫绝不吐露。",_meta:{sourcePages:[54],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「成功的 DC 10 魅力（恐吓）检定」，三条引语拆为 g2/g3/g4。"}},{id:"info_111_g3",content:"格拉尔洪德勋爵招供：「格拉尔洪德家族一直在资助深水城的黑网行动，包括策划绑架瑞纳尔·奈沃兰波，以及从他父亲的侏儒间谍达拉卡尔那里窃取格洛尔之石的计划。」",holders:["npc_4cb","npc_4d9"],revealCondition:{type:"check_gated",skill:"威吓",dcTier:"easy",checkDC:10},teaser:"问到黑网两个字时，堵门后面的声音明显卡了一下。",dmHint:"这条直接推翻克罗姆利转述的「格拉尔洪德一家被扣为人质」的官方说法。",_meta:{sourcePages:[54],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全。"}},{id:"info_111_g4",content:"格拉尔洪德勋爵招供：「我妻子对 Zhents 及其无法确保神器安全感到沮丧。她给了她的机械仆人一条火球项链，并派它出去帮着取回石头。这是疏忽的，不小心用火球术击中了 Zhents。」",holders:["npc_4cb","npc_4d9"],revealCondition:{type:"check_gated",skill:"威吓",dcTier:"easy",checkDC:10},teaser:"问到那场爆炸是谁干的，勋爵先看了一眼通往主卧室的方向。",dmHint:"这是火球案的答案：投弹者是雅拉的秘偶仆人，火源是雅拉给它的火球项链，与马特姆捡到的断扣项链对得上。",_meta:{sourcePages:[54],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全。"}},{id:"info_113_g1",content:"床尾那口木箱的箱底有个暗格，里面放着两枚阿斯蒙蒂斯的圣徽和两件红金色长袍——格拉尔洪德勋爵与夫人都是这个在深水城部分贵族中颇为流行的阿斯蒙蒂斯崇拜团体的秘密成员。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"箱子里只是叠好的衣物和鞋子，可从外面量，它比里面深了一截。",dmHint:"该邪教由维克托罗·卡萨兰特勋爵（npc_4dc）领导，格拉尔洪德夫妇绝不会主动透露。箱锁本身用盗贼工具过 DC 15 敏捷检定可开；本条的检定是检查箱子外部发现暗格。",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「检查箱子外部并且进行了一次成功的 DC 15 感知（察觉）检定，就可以发现这个隔间」。"}},{id:"info_123_g1",content:"与格洛尔之石共鸣的人，会在一片冰冷的、不属于人类的注视里得到三样东西：龙之金库的确切所在；开启金库大门所需的三把钥匙是什么、在谁手里；以及守在金库深处那条金龙的名字，和它手中那根法杖能做什么。",holders:[],revealCondition:{type:"item_owned",itemRef:"格洛尔之石"},teaser:"这块石头贴着掌心的时候是温的，像有什么在里面翻了个身。",dmHint:"共鸣是本章的终点开关。金库位置随季节线不同：春=城堡区「粉红呋噜」剧院下（遭遇6）；夏=海港区一座旧塔下（遭遇7）；秋=海洋区一座旧石头风车下（遭遇10）；冬=死者之城布兰达斯家族陵墓下（遭遇4）。共鸣后转入「金库钥匙」与「龙之金库」。石头过早到手时会不合作、试图控制持有者（DMG第7章有感知魔法物品），控制失败则到下一个黎明前不得再试；脱手时它会抹去前任持有者关于自己的全部记忆，被抹除的玩家扮演失忆可给灵感。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[57,58],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：revealCondition 取 item_owned 而非 check_gated——原文的门槛是「拥有并与之共鸣」，不是任何检定。"}},{id:"info_124_g1",content:"秘偶的残骸裹在一件偷来的斗篷里，斗篷内衬夹着一张折了四折的羊皮纸。摊开是深水城某一个城区的街图，图上用炭笔重重画了一个 X，X 旁边潦草地写着一个名字。",holders:[],revealCondition:{type:"free"},dmHint:"格劳洪德女士给了秘偶这张地图，却忘了交代送到后销毁。地图内容按你选定的反派决定，这也是整条遭遇链的起点：春（姗娜萨）=码头区图，X 在雾岸，名字写「格林达·加洛斯」；夏（卡萨兰特）=死者之城图，X 在卡萨兰特家族陵墓，名字写「Cassalanter」；秋（贾拉索）=商贸区图，X 是一条小巷，名字写「Fenerus Stormcastle」（当地居民都认得这个点灯人）；冬（曼松）=田野区图，X 是萨卡斯的肉店兼住所，名字写「萨卡斯」。搜索残骸即得，无需检定。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[57,58],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：content 只写玩家看得到的地图本体，四条季节分流放 dmHint，避免一条 info 同时剧透四条线。"}},{id:"info_13e_g1",content:"巷子中段那个凹进去的门道里蹲着两个东西：一头叫摩加的巨大熊地精，和一只把触须收在兜帽下的噬脑怪。前面那群戴巨魔面具的「孩子」是诱饵——它们是狗头人。",holders:[],revealCondition:{type:"check_gated",skill:"感知",dcTier:"medium",checkDC:16},teaser:"巷子中段那个门道黑得不太对劲——不是空屋子的那种黑。",dmHint:"春季线。角色走到摩加藏身处时熊地精与八名狗头人同时发难；噬脑怪保持隐藏，试图控制一名角色；摩加有机会就把角色推进最近的熊陷阱。若这些生物拿到石头，会把它送去姗娜萨的巢穴（第5章）。",_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：DC16 感知（观察）为原文明写。"}},{id:"info_13e_g2",content:"厨房地板上散着几处很小的血点，墙上那个圆环加十条放射直线的记号也是血画的——两处的血都还是新的，事情就发生在几个钟头以内。那个记号是姗娜萨的标志。",holders:[],revealCondition:{type:"check_gated",skill:"感知",dcTier:"easy",checkDC:12},teaser:"厨房地板的颜色不太均匀，靠近灶台的地方尤其如此。",dmHint:"秋季线，费内鲁斯的住所（L1）。门敞着、屋内被翻得底朝天。墙上的姗娜萨记号不用检定就看得见；DC12 感知（观察）额外找出地板上的小血点并确认血迹新鲜。真相见「费内鲁斯的故事」：布雷甘·达特的卓尔特工来取石头，被纳尔·泽布林达斯派来的隐形灰矮人伏击，卓尔勉强脱身。",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：DC12 感知（观察）为原文明写。"}},{id:"info_13e_g3",content:"这位翠绿斗篷、银发及腰的高个女士不是莱拉·银手。斗篷底下是贾拉索·班瑞，靠一顶易容帽顶着开放领主的脸；他要石头是为了自己的盘算，不是为了深水城。",holders:["npc_4b9"],revealCondition:{type:"check_gated",skill:"洞察",dcTier:"hard"},teaser:"她的措辞太熨帖了，每一句都落在你最想听的地方——像排练过。",dmHint:"秋季线。原文是对抗检定：角色的感知（洞察） vs 贾拉索的魅力（欺骗），无固定 DC，此处以 dcTier:'hard' 承载、不写 checkDC。看穿之后贾拉索会笑，改口开价一万金币要角色把石头即刻送到码头区七面具剧院，并诚实表示他打算把金子还给深水城换政治人情。",_meta:{sourcePages:[63,64],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文为对抗检定而非固定 DC，check_gated 只能表达单侧门槛，故省略 checkDC 并标 needsReview。"}},{id:"info_13e_g4",content:"「莱拉」说：费内鲁斯手上有一件叫格洛尔之石的有感知魔法物品，它知道前任开放领主从这座城里贪走的那笔巨款藏在哪儿。她请你们为深水城把石头取回来，送到码头区的七面具剧院交给她。报酬只有开放领主的一句谢谢。她还提了一句：姗娜萨公会在南区地底有个不远的地窖群据点，石头也许就在那里。",holders:["npc_4b9"],revealCondition:{type:"free"},dmHint:"秋季线。这是贾拉索的一石二鸟：他怀疑自己安在姗娜萨公会里的间谍纳尔·泽布林达斯已经反水、正在用布雷甘·达特的资源替眼魔办事，所以宁可派一小队冒险者去探，也不动用布雷甘·达特的攻击力量惊动纳尔。角色若照办，接遭遇9「地窖群」。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[63,64],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：free——「莱拉」主动上前搭话并托付，无门槛。"}},{id:"info_13e_g7",content:"在呼啸的风雪里，你听见一声短促的、带着嘲弄的笑，紧接着瞥见附近屋顶上一个披斗篷的身影，转身就没入了飞雪。",holders:[],revealCondition:{type:"check_gated",skill:"感知",dcTier:"medium",checkDC:14},teaser:"风声里似乎混进了一点别的什么，从上面来的。",dmHint:"冬季线。检定只对站在散塔林会安全屋前门10尺内的角色开放。那是刚从 Avareen 手里接过格洛尔之石、爬上屋顶的高级散塔林会成员 Vevette Blackwater（CE女性Tethyrian人类剑客）。角色追出去即接遭遇5「屋顶追逐」。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[64,65],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：DC14 感知（感知）与10尺范围限制均为原文明写。"}},{id:"info_13e_g6",content:"无窗石屋的后室里，一个盾矮人被绑在椅子上、嘴里塞着布。他戴着一顶皮制头巾，上面缝着一根假的巨眼怪眼柄。他叫奥特·钢趾，是姗娜萨公会的知名成员，在码头区市场买鱼食时被抓，现在被扣着等赎金。",holders:["npc_4cf"],revealCondition:{type:"free"},dmHint:"冬季线。散塔林会审问过奥特之后意识到姗娜萨会想把他要回去——而姗娜萨已经知道他被关在哪儿，那五名熊地精正是为此而来，初击幸存者会试图救他，Avareen 与 Zorbog 则拼命拦。奥特一旦获释就会跑回他那位疯眼魔主子的眼柄旁：跟着他走的角色会被直接带进姗娜萨的巢穴（第5章）。",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：free——进入后室即见，无门槛。"}},{id:"info_13e_g5",content:"肉店老板索拉·卡特尔对巷子里那栋无窗石屋的两个住客一直不放心：他们总在奇怪的时辰进出，有时半夜回来，皮甲上还沾着血。一个是二十来岁、脸色苍白、留着一头深色乱发的瘦女人；另一个是年纪大得多的黑皮肤光头男人，缺了半只耳朵，蓄着短短的白胡子。",holders:[],revealCondition:{type:"free"},dmHint:"冬季线。索拉（LG女性Illuskan人类平民）刚收到屠夫公会贾斯汀·拉斯克一批意外送来的鲜肉，冬天缺肉她没能拒绝。角色若告诉她这些肉来自被分解的人形生物，她会作呕、承诺上报屠夫公会与地方官、在此之前不用这批肉做她招牌的肉馅饼——并且会乐意把对邻居的担忧和外貌描述都倒给角色。她描述的正是散塔林会安全屋（L1）里的 Avareen Windrivver（LE女性Illuskan人类间谍）与 Zorbog Jyarkoth（NE男性Turami人类暴徒）。",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：free——原文的门槛是「角色好心提醒她肉的来源」这一善意行为，不是检定。"}},{id:"info_157_g2",content:"一只独眼的飞行小怪一直吊在你们后面，始终不肯靠近到六十尺以内。它不是在觅食——它在看。",holders:["npc_4e2"],revealCondition:{type:"check_gated",skill:"感知",dcTier:"medium",checkDC:15},teaser:"总有种被人从背后盯着的凉意，可回头只有雾。",dmHint:"春季线。角色离开雾岸时凝视者眼魔开始跟梢，姗娜萨借它的眼睛观看。原文门槛是被动感知15，此处折成 checkDC 15；队伍进入死者之城后不久即可察觉。被攻击时它会自卫；若被杀，姗娜萨不会再派第二只。它也是遭遇4灰矮人伏击时的旁观者，不参战、尽量保持隐蔽。",_meta:{sourcePages:[67,70],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文写的是被动感知15，check_gated 无被动形态，折成 checkDC 15 的感知检定。"}},{id:"info_157_g3",content:"阿贡·福科在来雾岸的路上让马车停过一次，放下了一位女性朋友——石头现在在她手上。她叫阿玛斯·塞尔森特，住在城堡区一座因砖石泛淡黄而得名的旧塔「黄塔」里。",holders:[],revealCondition:{type:"free"},dmHint:"冬季线。两条独立取得路径：①从 Agorn 本人嘴里撬——他不会轻易说出她的位置，但魔法可以逼出来；②直接问雇佣马车车夫 Rowan Evenwood（LG女性Chondathan人类平民），是她把那位女士放下、再把 Agorn 送到雾岸的。Agorn 正在用枕套闷杀他卧病的母亲 Marta（1点生命值），角色可以在她窒息前把他拉开阻止弑母。这条把队伍推向遭遇7「旧塔」。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[67,68],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：free——车夫路径无任何门槛；Agorn 路径原文只说「不会轻易放弃她的位置，尽管可以使用魔法撬出」，未给检定，故不擅自设门槛。"}},{id:"info_157_g1",content:"格林达承认她过去和姗娜萨公会有过生意往来，这次的差事是替他们看住那块石头等诺思卡来取——她中途改了主意想自己留着，现在知道错了。石头她已经交给她的老鼠使魔，让它藏进死者之城里加洛斯家族的陵墓。她给了你们去那儿的路线，还有陵墓的铁钥匙。",holders:[],revealCondition:{type:"free"},dmHint:"春季线，战斗结束后格林达自己从屋里出来道谢并全盘托出。钥匙其实用不上——角色赶到时陵墓的双扇门是敞开的（盗墓者已先到，杀了老鼠、卷走石头和加洛斯家的骸骨）。这条把队伍推向遭遇4「陵墓」。铁钥匙原本锁在 D2 那只施了守卫刻文的木制海箱里。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：free——格林达主动交代，无门槛。holders 空是因为格林达·加洛斯在 npcs.json 中无对应条目（43条内查无此人）。"}},{id:"info_16c_g1",content:"在人潮里搜寻的你注意到街面上有一块铁栅没有正确合拢。掀开它，下面是一道向下延伸十尺的铁梯，通进一条地下的下水道隧道；隧道深处有远远的水花声，还有孩子的说话声。",holders:[],revealCondition:{type:"check_gated",skill:"感知",dcTier:"hard",checkDC:17},teaser:"人群的脚步声里，有一处的回响是空的。",dmHint:"夏季线，街道追逐的收尾。三个街头小淘气（自然、詹克斯、斯奎迪利）从变形怪身上扒走石头、或用玩具箭射落乌鸦叼着的石头之后，迅速没入人群。搜索需消耗一个动作。孩子们在黑暗里手拉着手，由有黑暗视觉的斯奎迪利带路。角色跟下去即接遭遇9「地窖群」。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[68,69],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：DC17 感知（察觉）与「消耗一个动作」均为原文明写。"}},{id:"info_176_g2",content:"艾拉斯普拉承认这把钥匙出自她手：她给一位买了她精品锁的客人打过这把钥匙，还替他把锁装上了。客人叫沃卡尔·基本斯，地址是南城区的一座旧风车；钥匙开的是他的公寓门，他和另一个叫厄拉斯特·甘恩的男人合住。",holders:[],revealCondition:{type:"check_gated",skill:"说服",dcTier:"medium",checkDC:13},teaser:"锁匠翻名册的手在某一页上停了一下，然后合上了本子。",dmHint:"春季线。艾拉斯普拉不轻易透露客户姓名住址，但她极敬重竖琴手：①身属竖琴手并出示徽章者，DC13 魅力（说服）可问出；②伪装成竖琴手成员者，DC16 魅力（欺瞒）可骗到；③用魔法强迫；④偷看她的记录——记录锁在保险箱里，敲击术或类似魔法可开，硬撬则需连续三次成功的 DC20 敏捷（调查），每次尝试消耗一个动作。本条只落①，其余三路见此注。这条把队伍推向遭遇10「改造的风车」。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[69,70],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：四条取得路径原文均明写，revealCondition 只能承载一条（取门槛最低的说服路），其余三路落 dmHint。"}},{id:"info_176_g4",content:"布兰达斯是个古老的家族，如今这条血脉里还活着的人你们认识——瑞纳尔·奈沃兰波。达古特·奈沃兰波当年为财富娶了布兰达斯家的女儿，她生下了瑞纳尔。树人认得布兰达斯的血，也放行血亲称作朋友的人。",holders:["npc_4d2"],revealCondition:{type:"check_gated",skill:"调查",dcTier:"easy",checkDC:10},teaser:"刻在陵墓门楣上的 BRANDATH，这个姓氏你好像在哪里听过。",dmHint:"冬季线。原文门槛是「经过一天的研究并通过一个成功的 DC10 智力（调查）检定」——请把一天的资料查阅作为前置消耗。角色请瑞纳尔同行，他会答应；树人感知到他体内的布兰达斯血脉后放行他与他称作朋友的人，还会对他随口说一句「你的母亲是个可爱的人」。另两条路是杀掉树人或悄悄绕过去。附带的黑色讽刺：奈沃兰波把他贪来的黄金托付给了亡妻的家族，瑞纳尔若得知真相会震惊但不算太意外。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[70,71],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：DC10 智力（调查）+一天研究为原文明写。"}},{id:"info_176_g1",content:"地下墓穴的地板灰尘里躺着一把闪亮的钢钥匙——崭新，和这个积了几十年灰的地方格格不入。是某个盗墓者作案时掉的。",holders:[],revealCondition:{type:"free"},dmHint:"春季线，搜索被洗劫的地下墓穴即得，无需检定。老鼠和石头都不在了。这把钥匙是整条春季链的转轴：拿去码头区的「金属奇迹之屋」（辉煌铠甲工匠、锁匠与精工师公会大厅）或任何当地锁匠，都会有人认出这是贸易区矮人锁匠艾拉斯普拉·乌尔玛尔的手艺。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：free——原文只写「搜索地下墓穴的角色们可以在地板上的灰尘中找到」，未给检定。"}},{id:"info_176_g3",content:"那个还有气的女人叫 Vaelle Lurval，一个三十岁的深水城花商。她说：这三个人是被自己人出卖的——两名邪教狂信者 Arn Xalrondar 和 Seffia Naelryke 动的手，石头多半已经被他们带去南城区的一座旧风车，他们在那里举行自己崇拜阿斯蒙蒂斯的仪式。她可以给你们指路，身体好些的话甚至可以亲自带路。",holders:[],revealCondition:{type:"free"},dmHint:"夏季线。地下墓穴里三具穿兜帽长袍的尸体（两男一女），进一步检查发现女性还在呼吸（昏迷，0生命值）；她被治疗后才会恢复意识开口。三人是维克托罗·卡萨兰特的阿斯蒙蒂斯邪教低级成员，被匕首与致伤术放倒，卡萨兰特勋爵既要石头也要清理知情太多的教众。她的男友 Holiver Tornrudder 死在旁边，另一名死者叫 Kaeth Warloon，她带路的动机是为爱人复仇。要点：Vaelle 认定狂信者是自作主张，不会指认卡萨兰特家族是邪教首脑——除非被魔法强迫。这条把队伍推向遭遇10「改造的风车」。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：free——原文门槛是「如果 Vaelle 得到治疗，她会恢复意识」这一具体行动，不是检定。她不会指认卡萨兰特这一层未单列 info：原文只允许魔法强迫，Condition 白名单无对应形态，写成任何检定门槛都是臆造，故落 dmHint。"}},{id:"info_176_g5",content:"地下层东端那片坍塌是假的——它是幻象，人可以径直走过去。后面是一条完好的、十尺宽的下行斜坡通道，向下蜿蜒数百尺，逐渐加宽到二十尺，尽头就是龙之金库的大门。",holders:[],revealCondition:{type:"free"},dmHint:"冬季线，布兰达斯陵墓地下层。解除魔法可以直接破掉这层幻象。原文未给发现幻象的检定门槛，故此条按 free 落，DM 可让主动触碰或走入的角色自然识破。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[71],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文只说「角色们可以直接穿过这个没有实体的幻象」，未给识破 DC，故不臆造门槛、按 free 落并标 needsReview。"}},{id:"info_18f_g1",content:"其中一间化妆室的地板下藏着一扇秘密活板门，剧院里没有一个人知道它的存在。石制的门板上有一道秘法锁，硬拉需要极大的力气才拉得开。门下是一口三十尺深的竖井，井壁装着木梯；下到底是一条二十尺宽的石砌通道的一端，通道向下缓缓倾斜一百尺，尽头是龙之金库的入口。",holders:[],revealCondition:{type:"check_gated",skill:"感知",dcTier:"hard",checkDC:20},teaser:"这间化妆室的地板，靠镜子那一侧踩上去的回声空得不对。",dmHint:"春季线的终点，粉红呋噜剧院 P8 化妆室。DC20 感知（察觉）发现活板门；秘法锁下 DC30 力量（运动）才拉得开，敲击术或类似魔法可开。剧院老板 Iokaste Daliano 会拒绝任何来找金库的角色，除非对她有利——但别打贪婪牌，她要的是全部宝藏归自己。紫色妖精龙 Wishes 会隐形跟着角色下去，得知金库有金子后现身索要至少5000金币的分成，被拒就真的去向城市警卫告密。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：DC20 感知（察觉）与 DC30 力量（运动）均为原文明写。"}},{id:"info_1a8_g2",content:"塔内被一个永久的反魔法场笼罩着：进了门，任何魔法都不再生效，连平时照亮塔楼的魔法灯火都熄了。地板上散落着六把长剑，既没锈也没血——它们是被反魔法场压死的凌空剑，只要被带出塔外就会活过来动手。",holders:[],revealCondition:{type:"free"},dmHint:"秋季线。反魔法场是前住户——一个涉足野性魔法又控制不住它的隐士法师——留下的，只有祈愿术或同级魔法能终结它。这层场也是费内鲁斯把石头藏在这里的理由（他向审讯者形容这是「一座对所有形式的魔法都有防护的塔」）。三名喝了隐形药水、以浮空术爬外墙、从箭缝钻入的卓尔火枪手在角色抵达 O3 前已取走石头——他们的隐形术一进塔就被反魔法场抵消。",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：free——踏进塔内魔法立即失效，是无门槛的即时体感。"}},{id:"info_1a8_g1",content:"传送圈那间空房的北墙上有一扇密门，出自技艺精湛的矮人工程师之手，接缝几乎看不出来。门后是一道积满灰尘的楼梯，向下延伸九十尺接进一条二十尺宽的走廊；走廊再走九十尺，就是龙之金库的大门。",holders:[],revealCondition:{type:"check_gated",skill:"感知",dcTier:"hard",checkDC:20},teaser:"这间空屋的北墙比其他三面都干净，像是常有人贴着它站。",dmHint:"夏季线，旧塔 O5。DC20 感知（察觉）发现密门；门上原有的魔法陷阱已被 Esvele Rosznar 解除，可以安全开启。金库大门一侧墙上的天然裂缝曾是格利克的巢，Esvele 已经杀了它、尸体还留在地上。Esvele（贵族身份下另有「黑毒蛇」的另一面）通过间谍网得知奈沃兰波与旧塔前主人的交情，从而找到入口，但不知道需要哪三把钥匙、里面有什么；她愿意与角色做分赃伙伴、并坚持第一次进金库时同行。通往 O5 的门她不用钥匙、用盗贼工具。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[78,79],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：DC20 感知（察觉）为原文明写。"}},{id:"info_1c6_g1",content:"石头被藏在码头区一座古老塔楼的顶层——那座塔对一切形式的魔法都有防护。若费内鲁斯被释放，他愿意亲自带路，或者把方向说清楚让你们自己去找。",holders:[],revealCondition:{type:"check_gated",skill:"说服",dcTier:"medium",checkDC:15},teaser:"费内鲁斯每一次讨价还价都绕着「一座塔」打转，却始终不肯说出是哪一座。",dmHint:"秋季线，遭遇8 法院。取得链条较长：①先见到人——前台职员称探视须地方法官书面许可，最早次日正午，10金币以上贿赂可提前；或竖琴手/领主联盟声望≥3、或深水城贵族身份，提出有力论点并过 DC15 魅力（说服）；或冒充贵族官员并过 DC15 魅力（欺瞒）（失败则巴奇法官用她天生的侦测思想戳穿，罪名是鞭刑+最多十天监禁+最高500金币罚款）；或干脆故意在城堡区犯个小罪把自己关进去；或伪装/魔法潜入（冒充官员与魔法影响官员本身即犯罪）。②费内鲁斯本人不肯说，除非被释放并赦免过往罪行——这是他手里唯一的筹码。③巴奇法官只有在角色说服她「这么做对深水城有利」时才会松口：手段要么是魔法迷惑她（犯罪，法术一失效多半会导致施法者被捕），要么是把龙之金库与被贪走的黄金和盘托出。她坚持先试一手：短休后把费内鲁斯带上法庭当面盘问，暗中用侦测思想扫他的表层思绪，石头位置正压在他心头，于是她读到了、告诉角色，然后把人送回牢房。另有两条声望路：竖琴手声望≥4 可说服米尔特动用领主权威放人（他本人曾栽在血鹰帮手里，帮费内鲁斯出狱对他是极深的刺）；领主联盟声望≥4 可在皮尔盖隆的宫殿见到莱拉·银手，她认为把奈沃兰波的龙藏安全取回比一个强盗的下场重要。这条把队伍推向遭遇7「旧塔」。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[82,83],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文的取得链条是多段多路（见面权→费内鲁斯开价→法官妥协或侦测思想），revealCondition 只能落一个门槛，取「DC15 魅力（说服）」这一原文明写的主路，全链条落 dmHint，故标 needsReview。"}},{id:"info_1d2_g1",content:"守卫马车的后门用链条和两个挂锁固定，每名值班的老兵各持一把只能打开其中一个挂锁的钥匙；马车需要两匹马来拉，一次最多容纳八名中等体型的囚犯。挡住通往外面那道大门的横杆需要两个人才抬得起来，一个人独自完成需要成功的 DC 21 力量（运动）检定。",holders:[],revealCondition:{type:"free"},dmHint:"越狱或劫囚线的机械底盘：钥匙必须凑齐两名老兵身上的两把，外门横杆是撤离的硬瓶颈。",_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自 H9 守卫马车『装甲马车』『带栅栏的外门』两小节。"}},{id:"info_1e2_g1",content:"污水管道入口那扇锁着的铁箍木门上挂着通用语标牌：「下水道入口：仅限授权的城市官员进入。」可以用盗贼工具通过一次 DC 17 敏捷检定撬开，或用一次 DC 20 力量（运动）检定强行撞开。城邦护卫队长持有与其负责区域对应的下水道入口钥匙。",holders:[],revealCondition:{type:"free"},dmHint:"第三条路是走官方渠道向护卫队长要钥匙——比撬锁更慢但不留痕。",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自 B1 污水管道入口。"}},{id:"info_1e4_g1",content:"污水隧道的两侧各嵌着一道与周围石工完美融合的暗门：一道通往 B7，另一道通往 B10。拥有被动感知 15 或更高的角色路过时就会发现这两道门。暗门设置得足够高，打开它们不会让污水流进相邻区域；从 B7 和 B10 那一侧则不需要任何检查就能一眼看到。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"走道这一段的石缝走向变得规整得反常，像是被人反复描过同一条线。",_meta:{sourcePages:[84,85],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文写作「DC 15 感知（洞察）检定」，判为 Wisdom (Perception) 误译（同书 V4 写作『感知（观察）』、W4a 写作『感知（察觉）』），按引擎正名归一为『察觉』——若确认原文取的是 Insight 需回改为『洞悉』。"}},{id:"info_1e0_g1",content:"洛瑟·米尔克拉夫承认格洛尔之石已经不在他手上：他把石头交给了闯进来的天狗，其中两只带着它往南逃走了。",holders:[],revealCondition:{type:"free"},linkedQuestId:"qst_main_dragonheist",dmHint:"春季分支。原文：如果角色们要求得到格洛尔之石，洛瑟会告诉他们真相——不需要任何检定。留他一命，他最终会悄悄溜走退到 B11。",_meta:{sourcePages:[85],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自遭遇9 春季「石头在哪里？」。洛瑟不在 npcs.json 43 条内，holders 留空。"}},{id:"info_1e0_g2",content:"科格斯特罗·乌克斯古姆手上那枚灰底黑纹的卵形石头是一个巧妙的仿制品，没有任何魔法力量。他是在搜查贸易区费内鲁斯的房子时发现它的，一直无法与它协调，却认定是自己不配拥有，而不是这块石头有假。他打算在适当的时候把它交给姗娜萨，在那之前不会自愿放弃。",holders:[],revealCondition:{type:"check_gated",skill:"奥秘",dcTier:"medium"},teaser:"灰矮人首领时不时把那枚灰卵石掏出来攥在掌心，越攥眉头皱得越紧。",linkedQuestId:"qst_main_dragonheist",dmHint:"秋季分支。这枚假石头绝不能推进主线：无论角色是否拿到它，原文都把他们推向遭遇6「剧院」去找那位『莱拉』。",_meta:{sourcePages:[86],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：假石头的事实逐字有据，但原文未给识破的技能与 DC（只写玩家会误以为是真品），check_gated 的技能与档位为补全，需终审拍板。"}},{id:"info_208_g1",content:"住在风车下层的占房者知道上层那间上锁公寓（W7）怎么走，也说得出住在里面的人是什么样子；给食物或硬币，他们就会带路或引路。",holders:[],revealCondition:{type:"check_gated",skill:"威吓",dcTier:"easy",checkDC:10},teaser:"巢穴里的人缩着脖子打量你，目光在你的钱袋和头顶的楼板之间来回游移。",dmHint:"占房者并不寻求麻烦；给食物或硬币是免检定的正路，DC 10 威吓只是逼迫路径。",_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自 W2 擅自占地者。"}},{id:"info_20a_g1",content:"W4a 的地板上嵌着一扇沉重的石质活板门。拉开它，下面是一道向下延伸 120 尺的石阶，接上一条 20 尺宽的走廊；走廊再走 60 尺就到龙之金库的大门前。卡莱恩和瓦斯帕对这座金库和这扇活板门一无所知。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"easy",checkDC:12},teaser:"这间屋子的地面有一块石板颜色偏冷，边沿的灰尘薄得不像话。",linkedQuestId:"qst_main_dragonheist",dmHint:"原文要求彻底搜索房间才允许这次检定。秋季分支通往龙之金库的唯一书面路径。",_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自改造风车 秋季「通往金库的路」。"}},{id:"info_205_g1",content:"洛瑟·米尔克拉夫和他的两名人类学徒雷钦、克里拉住在贸易区下方的地窖综合体里；通往他们巢穴的路要穿过雷钦开的那家假发店，店名叫丹迪摩普斯。",holders:[],revealCondition:{type:"encounter_cleared",encounterId:"enc_205"},teaser:"两个盗墓贼交换了一个眼神——他们显然清楚雇主住在城里的哪一块。",linkedQuestId:"qst_main_dragonheist",dmHint:"春季分支。沃尔卡·基本斯与乌拉斯特尔·甘恩被压倒性击败后会迅速投降，用这三条情报换命与自由；他们对死灵法师没有任何忠诚。",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自改造风车 春季。以 encounter_cleared(enc_205) 表达『被击败后投降供出』。"}},{id:"info_205_g2",content:"在加洛斯家的陵墓里，洛瑟杀了一只老鼠，拿走了它身上带着的小石头。老鼠死后就消失了，洛瑟因此认定那块石头是魔法的。另外，洛瑟一直在从死者之城偷取骨头，好组建一支活化骷髅的军队——沃尔卡和乌拉斯特尔都不知道为什么。",holders:[],revealCondition:{type:"encounter_cleared",encounterId:"enc_205"},teaser:"一提到陵墓里的那趟差事，两人的脸色明显变了一下。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自改造风车 春季的三条供词后两条。"}},{id:"info_205_g3",content:"萨卡斯最后一批肉送到了贸易区一条巷子里、名叫卡特尔肉派的店。送货的是屠夫公会成员贾斯汀·拉斯克，他有一辆血迹斑斑的马车，专跑菲尔德区以外的送货；萨卡斯额外付了金币，要求这批肉「迅速且安静地」送到。",holders:[],revealCondition:{type:"encounter_cleared",encounterId:"enc_205"},teaser:"屠夫的占房者们一直盯着门口，像是在等他彻底不再是他们死活的变数。",linkedQuestId:"qst_main_dragonheist",dmHint:"冬季分支。萨卡斯本人具挑衅性、不会出卖散塔林会的朋友，需要魅惑类人或类似魔法才肯开口；他的占房者则一旦确认他不再能决定自己的死活就会很快出卖他。",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自改造风车 冬季「石头在哪里？」。"}},{id:"info_222_g1",content:"与格洛尔之石共鸣的角色能得知龙之金库的所在，以及打开金库大门所需的三把钥匙；这件神器还揭示金库由一条名叫奥瑞纳克斯的成年金龙守护。虚幻版本的钥匙打不开门。",holders:[],revealCondition:{type:"item_owned",itemRef:"格洛尔之石"},teaser:"石头贴上额头的那一瞬间，脑子里浮起一扇没有把手的钢门，和门后某种缓慢的呼吸。",linkedQuestId:"qst_main_dragonheist",linkedHookId:"hook_222_h1",dmHint:"三把钥匙由 DM 选定或掷 tbl_222_0 随机确定；这是全章从『追石头』转向『开金库』的枢纽情报。",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自「金库钥匙」开篇与「龙之金库」开篇。"}},{id:"info_222_g2",content:"每把钥匙都能在深水城找到或获得。若角色还不知道某把钥匙在哪，可以去收集情报：花费 1 天时间和 5 金币研究，当天结束时进行一次 DC 15 智力（调查）检定，成功即得知那把钥匙的位置。检定失败且差值达到 5 或更多，主要反派会得知这次搜寻，并派手下前来攻击角色、尽可能从他们手中夺走格洛尔之石。",holders:[],revealCondition:{type:"check_gated",skill:"调查",dcTier:"medium",checkDC:15},teaser:"深水城的门路总能问出东西来——只是问的人自己也会被记住。",linkedQuestId:"qst_main_dragonheist",linkedHookId:"hook_222_h1",dmHint:"失败差值≥5 的反派响应队伍已归入 enc_222；按当前主要反派选取对应那一行。",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自「金库钥匙」的情报收集规则。"}},{id:"info_222_g3",content:"年轻的青铜龙泽利法恩在深水港安了家，潜伏在水下 120 尺处的一艘沉船里；许多水手和码头工人都见过它，而格林达·加洛斯拥有一台卡维什的装置，可以用来找到这条龙。角色接近沉船时它会出来试图吓走他们，只在自卫时才造成伤害。一次成功的 DC 15 魅力（游说）检定，或提供至少价值 1000 金币的宝物，可以说服它交谈并赠出一片鳞片；如果角色提到龙之金库的内容，泽利法恩会要求先答应分给他十分之一的黄金。",holders:[],revealCondition:{type:"info_revealed",infoId:"info_222_g2"},teaser:"码头上的老水手都赌咒说，港外那片沉船区里住着什么长鳞片的东西。",linkedQuestId:"qst_main_dragonheist",dmHint:"「青铜龙鳞片」是金库钥匙表第二把钥匙的一个选项；此条以『钥匙位置研究成功』作为解锁门。原文写『魅力（说服）』，按引擎正名归一为『游说』。",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自「钥匙描述·青铜龙鳞片」。"}},{id:"info_239_g1",content:"龙之金库的钢制双门既没有把手也没有铰链，门上的铭文写着：「三把钥匙。把它们带来。」当三把正确的钥匙被带到距门 5 尺范围内时，门会分开滑进两侧墙内，并一直保持开启，直到有人说出关闭它们的命令词。钥匙从门的任意一侧都能开门；门不能被强行打开或以任何方式损坏，用魔法绕过它们的尝试自动失败。",holders:["npc_498"],revealCondition:{type:"free"},dmHint:"关门的命令词是「Azaam」，奥瑞纳克斯知道它。门若被留在开启状态，离开金库时反派伏兵会在 V2 入口门厅迎面撞上角色，而不是等在金库外。",_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自 V1 宝库门；命令词收进 dmHint 不入玩家侧 content。"}},{id:"info_23d_g1",content:"V3 北墙那幅 20 尺见方、描绘矮人与地精厮杀的壁画带着附魔光环：任何在壁画 30 尺内并能看见它的生物必须成功通过一次 DC 12 感知豁免，否则被魅惑 24 小时。被这样魅惑时，生物无法自愿离开壁画的视线范围、会誓死保护它、也无法休息；被强行移离会试图找回去。24 小时后获得一级力竭，若仍能看见壁画可重复豁免，成功即结束效果。摧毁至少一个 10 尺见方的壁画部分（每部分 AC 17、25 生命值，免疫毒素与心灵伤害）会终止对所有生物的效果。",holders:[],revealCondition:{type:"check_gated",skill:"奥秘",dcTier:"medium"},teaser:"壁画上那场厮杀的颜色在昏暗里依旧鲜活，看久了眼睛竟有点挪不开。",dmHint:"免检定的替代路径：一个侦测魔法法术直接揭示壁画上的附魔魔法光环。",_meta:{sourcePages:[95],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：机制数值逐字有据，但原文只给了『侦测魔法可揭示光环』一条路径，未给技能检定与 DC；check_gated 的技能与档位为补全，需终审拍板。"}},{id:"info_23f_g1",content:"摩拉丁大厅西墙的南端有一扇暗门通往 V5。当一名矮人（或被变身术之类法术转变为矮人的生物）触碰到门时，门会自动打开；否则需要一次成功的 DC 17 力量（运动）检定才能推开这扇厚重的门。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"hard",checkDC:17},teaser:"西墙那幅破裂的马赛克在南端收得不太自然，接缝比别处深。",dmHint:"原文要求角色在厅内搜索密门才允许这次检定。门后 V5 是自 Delzoun 矮人时代起从未被触动的宝库。",_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自 V4「暗门」。原文写『感知（观察）』，按引擎正名归一为『察觉』。"}},{id:"info_244_g1",content:"V6 南墙壁画里铁匠握着的那把石锤可以从原位取下来，取下后墙上会留下一个锤形凹痕；只有把锤子从凹痕中取出，才能看到锤子朝墙那一面刻着的矮人符文：「愿心灵振奋，战斗得胜。」清掉蛛网后，房间中央那块石头的正面另有一句矮人符文：「让锤子落下，铁砧响起。」如果用取下的石锤击中铁砧，房间中每个能听到铁砧响声的生物获得 10 点临时生命值，持续 24 小时；铁砧赐予这份礼物后，接下来的 24 小时内不会再赐第二次。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"easy",checkDC:10},teaser:"南墙壁画上那把铁匠的石锤，边缘的阴影比画上去的要实一些。",dmHint:"两句矮人符文是配套的谜面；进 V6 的精金门被秘法锁封住——矮人或变成矮人的生物触碰会自开，其他生物需 DC 21 力量（运动）或敲击术之类的魔法。",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自 V6「壁画」「铁砧」两小节。原文写『感知（感知）』，按引擎正名归一为『察觉』。"}},{id:"info_247_g1",content:"杜马索因是矮人的秘密之神。任何矮人角色自动知晓这一点。",holders:[],revealCondition:{type:"check_gated",skill:"宗教",dcTier:"medium",checkDC:14},teaser:"远墙的矮人符文刻着：「一个从未被讲述的秘密将揭开杜马索因的嘴唇。」这个名字听着有些耳熟。",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自 V7 杜马索因的秘密。"}},{id:"info_247_g2",content:"这个房间藏着一扇隐蔽到无法用魔法或搜索找到的陷阱门。当房间中的任何生物大声说出一个秘密时，陷阱门就会翻转打开，露出一道螺旋形的石质楼梯，向下延伸 120 尺直达主金库。所说的告白必须是真实的，并且是那个角色之前未曾透露过的。",holders:[],revealCondition:{type:"info_revealed",infoId:"info_247_g1"},teaser:"四角的锈甲空着，房间里摸不出任何机关——那句铭文却明明白白在提一桩交易。",linkedQuestId:"qst_main_dragonheist",dmHint:"这是通往 V9 主金库的书面路径。不要接受敷衍的『秘密』：必须真实且此前未透露过。",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自 V7「秘密楼梯」。以 info_revealed(inf_247_g1) 表达『先读懂铭文里的神名，再意识到房间要的是什么』。"}},{id:"info_249_g1",content:"V8 后部那尊 10 尺高的彩绘矮人雕像是戈姆·古尔辛的形象——矮人的警戒之神，也被称为火眼。雕像与地板无缝融合，无法被推倒，似乎也对伤害免疫；一个侦测魔法法术会揭示雕像上散发的咒法魔法光环。雕像前嵌入地板的那扇带拉环的精金活板门是虚假的，无法被抬起：任何触碰活板门或它的拉环的人必须成功通过一次 DC 18 敏捷豁免，否则会被雕像眼中射出的魔法火焰射线击中，造成 22 点（4d10）火焰伤害。如果目标拥有全身掩护，陷阱不会触发。",holders:[],revealCondition:{type:"check_gated",skill:"宗教",dcTier:"hard",checkDC:17},teaser:"戴面具的矮人雕像手持战斧俯视着地上那扇带拉环的活板门，姿势像在看守什么。",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：逐字来自 V8「陷阱」。"}},{id:"info_273_g1",content:"从通往正南双扇门前的天花板上垂下来的那根幽灵般的眼梗，是一个魔法传感器：它像一只额外的眼睛，在六十尺内看得见黑暗中的东西，把所看到的一切送到别处某个人的眼前。你无法从它身上分辨出是谁在窥视，也分辨不出对方在哪里。它砍不坏、砸不烂，但一道解除魔法就能把它抹掉，进入反魔法力场的范围它也会被压住。",holders:["npc_497"],revealCondition:{type:"check_gated",skill:"奥秘",dcTier:"easy",checkDC:10},teaser:"天花板下垂着一根半透明的眼梗，瞳孔随着队伍的移动慢慢转过来，却没有任何攻击的意思。",dmHint:"先要注意到它：DC 14 感知（察觉）。判明功能：DC 10 智力（奥秘）。窥视者是 X16（scn_292）里的一名全视之眼学徒法师。X6、X23、X28、X32 的同款眼柄同理。",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X2「侦测感应器」段原文，DC 10 智力（奥秘）逐字取自原文。"}},{id:"info_273_g2",content:"西墙的雕刻中藏着一扇密门。要打开它，得按下旁边那个形似眼睛的墙雕——密门会向内摆开，露出后面一条弯曲的走廊，通向雕像大厅（X8）。从 X8 那一侧看，这扇门明显得很，转动旁边墙上的石把手就能打开。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"西墙上那一排石头眼睑开合的节奏，和别处不太一样——有几只眼睛之间的石缝笔直得过分。",dmHint:"DC 15 感知（察觉）找到密门；开门动作是按下附近的眼形墙雕，不需要额外检定。X2↔X8 双向连通。",_meta:{sourcePages:[102,104],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：合并 X2「暗门」段与 X8「暗门」段（同一扇门的两侧）。"}},{id:"info_27a_g1",content:"竞技场的南墙里藏着一扇密门，推开之后是姗娜萨历代先辈的墓穴（X33）。从墓穴那一侧同样能找到并拉开它——这是绕开长廊和听众大厅、直接摸进竞技场的路。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"南墙上挂着姗娜萨标志的紫色挂毯，挂毯后面透出的一线凉风不像是从看台方向来的。",dmHint:"两侧各 DC 15 感知（察觉）：X6 南墙一侧、X33 一侧（在北墙最西端凹处后面）。X6↔X33 双向连通。",_meta:{sourcePages:[102,112],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：合并 X6「暗门」段与 X33「暗门」段（同一扇门的两侧）。"}},{id:"info_27e_g1",content:"四间铁栏隔开的牢房里各有人：A 间关着半食人魔格罗兹、牛头人乌姆波克和女性魔兽人查沃尔；B 间是被绑架的深水城市民——吟游诗人夏·顺、贵族克劳迪奥·本兹雷克、浪人阿尔特赖特·格雷法尔孔；C 间是女性黑暗精灵瑞琳·奥弗林达，她最近和她的伴侣兼下属才被分开；D 间是女性轻盈半身人萨马拉·强骨，浑身伤痕，被拖去竞技场里打。",holders:[],revealCondition:{type:"free"},dmHint:"牢门钥匙在诺思卡·厄格雷身上；盗贼工具 DC 15 敏捷检定开锁，硬砸 DC 25 力量（运动）。萨马拉·强骨的真实身份是与曼松结盟的散塔林会间谍（混乱邪恶），这一层不要主动交底。瑞琳的伴侣扎伊邦·基萨尔特被绑在 X24 的提取椅上。所有锦标赛战士必须在这里等候，直到被叫去 X6 出场。",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X7「牢房居民」表逐行；间谍身份留在 dmHint，不随 content 一起下发。"}},{id:"info_27f_g1",content:"穿花哨小丑服的地底侏儒名叫扑翼足·齐普斯威格，他给姗娜萨当小丑。他记得这座巢穴的全部布局与特点、眼魔此刻在哪一间房，以及各处密门的位置——只有通往那间藏东西的秘密房间的门他不知道。他愿意当向导带路。",holders:[],revealCondition:{type:"event_fired",eventId:"evt_27f_e1"},teaser:"小丑倒立着从两尊雕像之间翻过来，铃铛哗啦作响：「答对我的谜语，我就告诉你们这地方所有的门。」",dmHint:"谜面：「我带着微笑而来；在屠杀中，我休息；我可能会传染，但我的药是最好的。我是什么？」答案＝笑声。答错则他把无踪粉撒在自己身上隐形逃走（见 evt_27f_e1）。他不知道通往 X36 的密门。他也不知道姗娜萨已经厌倦了他，打算下次见面就把他变成石头。",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X8「侏儒小丑」段；谜语门槛不是属性检定，故走 event_fired 挂接 evt_27f_e1 的密语装置。"}},{id:"info_28b_g1",content:"板条箱与木板钉成的迷宫走到中途，一根绊线横在过道上——阿莫戈亲手布的。一旦被绊到，整段迷宫的墙会朝里塌下来。找到之后要么绕开要么拆掉，都不难。",holders:["npc_495"],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"easy",checkDC:12},teaser:"板条箱之间的通道到中段忽然窄了一截，地上的骨头被人为地扫开过一小片。",dmHint:"只有走在队伍最前、且明确在搜索陷阱的角色才能检定：DC 12 感知（察觉）。触发后果见 evt_28b_e1（DC 12 敏捷豁免，失败 3d6 钝击，成功减半）。房间的魔法照明已被驱散，无光源或黑暗视觉者看不清任何细节。",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X12 绊线段，DC 12 与 3d6 均为原文数值。"}},{id:"info_28d_g1",content:"那只漂在工作台附近的白化凝视者，是姗娜萨梦出来派给托尔文当监视的——可它自己对眼魔也没有半点忠心。肯花心思跟它套近乎的施法者能把它拉过来，甚至用寻获魔宠的仪式把它变成自己的魔宠；一旦成了魔宠，它的阵营就跟着新主人走。",holders:["npc_4b4"],revealCondition:{type:"check_gated",skill:"说服",dcTier:"easy",checkDC:11},teaser:"那只白化凝视者的独眼一直朝着矮人转，可它悬停的姿态更像在提防谁，而不像在看守谁。",dmHint:"DC 11 魅力（说服），且原文限定为「一名法师角色」才能与之交朋友。这是打开 inf_28d_g2（托尔文开口）的前置：只有角色与凝视者交上朋友并承诺离开，托尔文才肯如实回答最多三个问题。",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X13「白化凝视者」段，DC 11 魅力（说服）逐字取自原文。"}},{id:"info_28d_g2",content:"托尔文·双须一边给眼魔当工程师，一边把巢穴里的消息卖给竖琴手，赚的钱存在巨眼魔的眼睛够不着的地方。他量过这座地牢：有七处结构一垮，整个巢穴会在一小时内塌掉——X2 秘密门的门槛、X6 的石拱顶、X17 任意三根柱子的基座、X20 靠后墙处、X22 的柱子之间、X30 厨房里的任何地方、X33 墓穴里的任何地方。至于炸药，那位黑暗精灵顾问纳尔·泽布林达斯往地牢里偷运过一大批发烟粉，逼他交出来就是了。",holders:["npc_4d7"],revealCondition:{type:"info_revealed",infoId:"info_28d_g1"},teaser:"矮人工程师放下手里的活，压低嗓门：「你们要是打算在这儿做点大事，先把那只白眼睛的东西弄走。」",dmHint:"前置：角色自称竖琴手会让托尔文紧张（他会拿眼神指那只白化凝视者）；与凝视者交上朋友并承诺离开后，他如实回答最多三个问题。他从没进过阿莫戈的房间（X11、X12），对巢穴其余部分了如指掌。每处弱点至少要放两桶发烟粉。",_meta:{sourcePages:[100,105],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：合并 X13「索文·双须」段与「摧毁巢穴」段的七处弱点清单。"}},{id:"info_290_g1",content:"这条缓缓向东倾斜的走廊两端都封在密门后面，走它可以整段绕开姗娜萨的听众大厅。任一端的门都得先摸出来才能开。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"这一段墙面的壁灯间距忽然拉长了一倍，像是有一块墙被人当成门用了很久。",dmHint:"两端各 DC 15 感知（察觉）。找不到门就进不了 X14，因此 scn_290 的 activation 挂在本条 info 上。",_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X14 全段，DC 15 逐字取自原文。"}},{id:"info_297_g1",content:"长廊最北端画着一棵无叶的树，枝上嵌满没有眼皮的眼睛。按下其中特定的一只，一整段墙会像门一样转开，通向全视之眼的警卫站（X16）。那一侧的门缩在凹墙背面，另有一块踩下去就开门的地板踏板。",holders:["npc_497"],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"壁画上那棵枯树的眼睛都嵌得平齐，唯独有一只被摸得发亮。",dmHint:"两侧各 DC 15 感知（察觉）：X17 一侧找门与开关（按下特定的眼睛），X16 一侧找门与地板隐藏踏板。这是进入 X16 的唯一路径，故 scn_292 的 activation 挂在本条 info 上。",_meta:{sourcePages:[106,107],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：合并 X17「暗门」段与 X16「暗门」段（同一扇门的两侧）。"}},{id:"info_29a_g1",content:"大厅中央那团人眼大小的光点只是个幌子：声音并不是从光里发出来的。真正在说话的东西隐着形，在房间的别处。",holders:[],revealCondition:{type:"check_gated",skill:"洞察",dcTier:"medium",checkDC:13},teaser:"光点随着每一句自夸忽明忽暗，可有那么半拍，光与声音对不上。",dmHint:"DC 13 感知（洞察）。姗娜萨在这里用隐身戒指保持隐形，用一个附赠动作开关这团迷幻光效，并把自己的声音投射得像是从那个 10 尺立方体里传出来。另：凡在地牢任何地方被侦查传感器看到过的角色，在这里无法对生物发动突袭。",_meta:{sourcePages:[107],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X18 幻光段，DC 13 感知（洞察）逐字取自原文。"}},{id:"info_29a_g2",content:"黑色大理石地板里嵌着一道隐蔽的活板门。掀开它，下面是一架通往楼下小平台（X29）的木梯——纳尔·泽布林达斯受伤时就是走这条路溜到自己的办公室去的。",holders:["npc_4c2"],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"金色马赛克拼出的姗娜萨标志在靠边的一处断了线，像是被反复掀动磨掉了几粒石子。",dmHint:"DC 15 感知（察觉）发现；DC 12 力量（运动）掀开。X29 一侧的石制活板门同样需要 DC 12 力量（运动）才顶得起来。",_meta:{sourcePages:[107,112],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：合并 X18「秘密陷阱门」段与 X29 全段（同一道门的两侧，DC 15/DC 12 皆为原文数值）。"}},{id:"info_29c_g1",content:"姗娜萨对那条鳟鱼大小的宠物鱼斯尔嘉的爱，超过它对世上任何生物的感情——除了它自己。它会趴在小鱼缸边上亲昵地跟鱼说话，用念力射线把鱼从一个缸挪到另一个缸；喂鱼的矮人奥特·钢趾一天到晚守在旁边。",holders:["npc_4cf"],revealCondition:{type:"free"},dmHint:"这是姗娜萨最大的弱点。角色可以拿鱼当筹码作一次 DC 16 魅力（威吓）检定：成功，这个可怕的眼魔会变成一个哭泣的软蛋，几乎答应角色提出的任何要求；失败，它要求角色立刻放了斯尔嘉，否则将其解离——它会兑现。另一层秘密（奥特的活计）：多年来斯尔嘉已经换过很多条，奥特总能在眼魔发现之前弄到替代品；杀鱼或偷鱼并同时阻止奥特补货，会让眼魔陷入暴怒并随机处决手下。大鱼缸重约 6000 磅，小鱼缸重 60 磅。",_meta:{sourcePages:[100,107,110],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：合并 X19「鱼缸」段、25d 结尾段（DC 16 魅力（威吓））与 25e「绑架或杀死Sylgar」段。眼魔溺爱本身在场即可见，故 revealCondition=free，机制与暗层留在 dmHint。"}},{id:"info_29c_g2",content:"嵌在西墙里的那面十尺银镜，框上刻着一个词：「Xoblob」。镜子周围有占卜系的魔法气息。站在镜子十尺之内把这个词念出来，镜面就会变成一个侦查传感器，映出老 Xoblob 商店和店门前的街道——视角来自店里橱窗中挂着的那只填充巨眼魔的眼睛。",holders:[],revealCondition:{type:"free"},dmHint:"镜框刻字肉眼可读，侦测魔法可确认占卜光环；念词生效见 evt_29c_e1。这是通往第 2 章「老Xoblob商店」的双向情报口子。",_meta:{sourcePages:[107],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X19「镜子」段。原文中刻字直接可见，故不设检定门槛。"}},{id:"info_29c_g3",content:"空气里飘的那些发光紫色颗粒是幽暗地域的孢子，浸透了一种叫费尔兹瑞斯的神奇辐射。不用吸进去也照样中招：在这个房间里待久了，脑子会出岔子。一旦熬过一次，往后这间房的孢子就再也影响不到你。",holders:[],revealCondition:{type:"check_gated",skill:"自然",dcTier:"easy",checkDC:12},teaser:"紫色的颗粒像薄雾一样悬在灯光里，每吸一口气都觉得太阳穴发紧。",dmHint:"DC 12 智力（自然）辨明。机制：任何在此房间内结束其回合的生物须过 DC 13 体质豁免，否则按《城主指南》第 8 章短期疯狂表掷一种随机短期疯狂；疯狂结束后该生物对本房间的孢子免疫。生物无须吸入即受影响。",_meta:{sourcePages:[107],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X19「孢子」段，DC 12/DC 13 皆为原文数值。"}},{id:"info_2ab_g1",content:"被铐在提取椅上的黑暗精灵叫扎伊邦·基萨尔特，在颅骨港被抓来受审。灵吸怪已经用心灵感应把他掏空了：奥弗林达家族图谋吞下整个斯卡尔波特，而奥弗林达与弗雷斯两个黑暗精灵家族之间的关系正在绷紧。他的上级瑞琳·奥弗林达同样被俘，关在牢房区（X7）的 C 间。扎伊邦想救出她，然后逃进幽暗地域深处奥弗林达家族设有前哨的地界。",holders:[],revealCondition:{type:"event_fired",eventId:"evt_2ab_e1"},teaser:"椅子上的黑暗精灵一遍遍地扯着腕上的铁铐，抬头时嘴唇动了动，像是在权衡要不要开口。",dmHint:"扎伊邦本人对自己接下来的下场一无所知：尼希卢尔正准备在他颅骨里种一只噬脑怪，再用他去搅黄黑暗精灵的计划、挑起两大家族的战争（若他不够有用，就直接提取大脑变成噬脑怪）。钥匙在尼希卢尔手上；镣铐每副可用盗贼工具 DC 15 敏捷检定开启，被缚者自行挣脱需 DC 25 敏捷（巧手）。",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X24「黑暗精灵俘虏」段；开口门槛按原文的解铐路径走 event_fired（evt_2ab_e1），非属性检定直挂。"}},{id:"info_2bf_g1",content:"西墙上那尊怒视的巨眼魔浮雕，两侧各站着一个戴兜帽的法师；兜帽底下露出的那只眼睛其实是一颗能按下去的按钮。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"easy",checkDC:12},teaser:"两个戴兜帽的法师被凿得比中间那只巨眼魔潦草得多，唯有兜帽下的眼睛磨得发亮。",dmHint:"DC 12 感知（察觉）。按下任一按钮（用手、用物件或用法术都算）的后果见 evt_2bf_e1：绿色射线，DC 16 敏捷豁免躲开，被击中者看似被瓦解、实为传送到 X34a 或 X34b（按下哪颗决定去哪间）。按钮触发后锁定 1 小时，期间无法再按；可用盗贼工具 DC 20 敏捷检定强行重置。",_meta:{sourcePages:[112,113],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X33「墙雕」段，DC 12/16/20 皆为原文数值。"}},{id:"info_2c7_g1",content:"书桌后那把刻着蜘蛛图案的椅子，左侧扶手下面有一个小小的秘密隔间，里面躺着一把黑色小钥匙——正好开书桌那两个上锁的抽屉。",holders:["npc_4c2"],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"椅子左侧扶手的蜘蛛纹被磨得比右侧浅，木头在那一小块上泛着手汗的光。",dmHint:"DC 15 感知（察觉）找到并打开隔间。不走钥匙也行：盗贼工具 DC 17 敏捷检定直接撬抽屉锁。抽屉内容见 trs_2c7_1（纳尔的法术书、贾拉索·班瑞的次元袋）。",_meta:{sourcePages:[113],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X35「书桌」段，DC 15/17 皆为原文数值。"}},{id:"info_2c7_g2",content:"办公室东南角有一座石制书架，推一下就会整个转进墙里，露出一条向北弯的秘密通道。通道尽头还有第二扇密门，不用费任何工夫就能看出来；拉开它，里面是一间黑暗、积满灰尘的房间。",holders:["npc_4c2","npc_4d7"],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"东南角那座石书架是空的，地上却有一道浅浅的弧形划痕，像是它被推开过很多次。",dmHint:"DC 15 感知（察觉）发现，或者干脆直接推动书架（无需检定）。尽头第二扇门无需属性检定即可找到。这是进入 X36 的唯一路径，故 scn_2cb 的 activation 挂在本条 info 上。",_meta:{sourcePages:[113],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X35「暗门」段，DC 15 逐字取自原文。"}},{id:"info_2cb_g1",content:"那间落满灰尘蛛网的暗房里，二十只小桶整齐地码在正中，每桶各配一根导火线，装着五磅发烟粉，桶上贴着通用语和精灵语写的纸标签：「烟雾粉！不要打开！」姗娜萨和它所有忠心的手下都不知道这间房存在——纳尔发现它之后，专门请求把隔壁改成自己的办公室，就为了替它保守秘密。另一个知情者是首席工程师托尔文·双须，而他也无意告诉巨眼魔。",holders:["npc_4c2","npc_4d7"],revealCondition:{type:"info_revealed",infoId:"info_28d_g2"},teaser:"书架转开后的通道里一股陈灰味，脚下的浮尘上没有任何近期的脚印。",dmHint:"要炸塌巢穴，每处结构弱点至少放两桶（七处弱点清单见 inf_28d_g2）。全部弱点遭灾难性损害后，巢穴在 1 小时内坍塌。",_meta:{sourcePages:[113],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X36 全段；知情链按原文（托尔文指路→逼纳尔交货）挂 info_revealed 前置。"}},{id:"info_2d6_g1",content:"卡萨兰特家族几年前遭遇过困难时期，此后扭转了命运，恢复了他们有利可图的银行与放贷业务。维克托罗和阿玛利亚的长子在三年前家族濒临破产时消失了；他们还有一对存活的年幼双胞胎，名叫特伦齐奥和埃尔泽丽娜。维克托罗勋爵是已故卡拉多恩·卡萨兰特唯一的在世继承人——卡拉多恩曾是蒙面领主，也是北方的英雄。多年来卡萨兰特家族创立了多个慈善社团，向善良阵营神祇的神庙慷慨捐赠，并以崇拜半神西亚摩菲闻名，那位半神的理念是贵族统治的权利与责任。",holders:[],revealCondition:{type:"check_gated",skill:"历史",dcTier:"medium",checkDC:15},teaser:"卡萨兰特这个姓氏在深水城的酒桌闲谈里出现得很频繁——有人提起他们的银行，也有人压低声音提起他们几年前那段难捱的日子。",_meta:{sourcePages:[115],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「进行一次成功的 DC 15 智力（历史）检定将揭示以下关于卡萨兰特庄园及其居民的信息」下的四条。holders 空=公共传闻/知识类环境线索。"}},{id:"info_2e4_g1",content:"这名守卫其实是一只伪装成人类的须魔：凑近了看，能注意到它的「胡须」在蠕动。城市守卫一旦介入，维克托罗就会把屋内所有人类守卫换成这样的伪装魔鬼，庭院里巡逻的守卫数量也会翻倍。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"这一班守卫比先前那批沉默得多，制服底下的身板结实，络腮胡浓密得有些过分。",dmHint:"只在「援军」条件成立后（守卫发出警报、城市守卫介入）才适用；此前屋内守卫是普通人类雇佣守卫。",_meta:{sourcePages:[117],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「如果一个生物近距离观察它，并通过一次成功的 DC 15 感知（察觉）检定，可以注意到它的『胡须』在蠕动」。"}},{id:"info_2f0_g1",content:"躲在凹室里的是埃斯维莱·罗兹纳尔——黑毒蛇。她刚从专横的父母罗特米和阿扎莉亚·罗兹纳尔身边溜走，正戴上面具与兜帽，准备悄悄穿过别墅把卡萨兰特家族洗劫一空。她可以被说动，在角色搜查卡萨兰特别墅时与他们并肩作战，并自动发现宝藏和秘密门。",holders:["npc_49c"],revealCondition:{type:"check_gated",skill:"游说",dcTier:"medium",checkDC:14},teaser:"泥房角落的凹室里传来窸窣的布料声，一件褶皱的舞会礼服堆在地上，旁边是一双还沾着草屑的舞鞋。",dmHint:"原文为魅力（威吓或说服）检定，两种取向同为 DC 14；仅在创始人日派对期间她才在这里。",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「角色们可以通过成功进行一次 DC 14 魅力（威吓或说服）检定，说服黑毒蛇在他们搜查卡萨兰特别墅时帮助他们」。skill 取引擎技能名「游说」，威吓路径记于 dmHint。"}},{id:"info_2d6_g2",content:"特伦齐奥和埃尔泽丽娜说，他们的父母正在寻找一些失踪的龙——父母打算拿一群可怕的有翅膀的爬行动物做什么，两个孩子想不明白，也太害怕而不敢问。他们还说父亲的办公室里放着一本日记。被问及哥哥奥斯瓦尔多时，他们重复父母告诉他们的话：他在一个遥远的城市上学，具体是哪一个他们不记得了。房子里有三处是父母禁止他们去的：父亲的办公室、阁楼，还有酒窖区域——现在有朋友作伴，他们非常想去看看。",holders:[],revealCondition:{type:"check_gated",skill:"游说",dcTier:"easy"},teaser:"两个孩子绕着来客打转，兴奋得压着嗓门说话——他们不该有客人的，可他们显然憋着一肚子话想说。",dmHint:"双胞胎不是邪教成员，也不知道奥斯瓦尔多的真实下场（见 C24 / scn_325），更不怀疑同样的命运正等着他们。他们会主动带「新朋友」参观房子，并帮角色在别墅里避开耳目；他们也知道 C6 里那具恐怖铠甲，会提醒友好的角色。",_meta:{sourcePages:[115],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文只写「如果成为了朋友，他们会透露……」，未给检定与 DC；dcTier easy 是为可运行而做的近似（原文强调孩子非常兴奋地结交友好陌生人），需复核。双胞胎未在 pack/npcs.json 立档，故 holders 留空。"}},{id:"info_2f2_g1",content:"卡萨兰特家族的肖像画背后隐藏着一扇秘密门。将画作倾斜，门便会在隐藏的铰链上向外摆开，露出后面的食品储藏室。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"hard",checkDC:18},teaser:"两个书架之间挂着一幅七尺高的家族肖像，画框下缘与墙面之间似乎并不完全贴合。",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「角色可以通过一次成功的 DC 18 感知（知觉）检定注意到秘密门下方的一条细微缝隙」，通向 C11（scn_305）。"}},{id:"info_2f6_g1",content:"维克托罗的日记里大多是对费伦地图集和历史书籍的枯燥观察，但夹着几则与阅读无关的笔记：「Neverember的龙是我们祈祷的回应。」「卡萨兰特家族的陵墓。通知Y.G.」（首字母指的是雅拉·格劳洪德女士。）「Golorr 是一个阿波罗斯。现在一切都说得通了。」",holders:["npc_4dc"],revealCondition:{type:"check_gated",skill:"调查",dcTier:"medium",checkDC:15},teaser:"边桌上的空酒杯压着一本小册子，页边写满了对地图集和历史书的琐碎批注——只是有那么几页，字迹忽然变得急促起来。",dmHint:"如果角色到第四章仍在找格洛尔之石，可在这本日记里补一条关于石头位置的线索；若卡萨兰特家族已经拿到石头且未在使用，它藏在 C6（scn_2fa）书桌的暗格中。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「一个角色如果翻看日记本，并在 DC 15 智力（调查）检定中成功，可以发现维克托罗记录的几则与阅读无关的笔记」。"}},{id:"info_2fa_g1",content:"维克托罗书桌的抽屉里另有一个暗格，里面放着一枚纯金打造的阿斯蒙蒂斯符号（价值250金币）。如果卡萨兰特家族拥有格洛尔之石而暂未使用，它也藏在这个暗格中。",holders:["npc_4dc"],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"hard",checkDC:18},teaser:"抽屉里十三个密封的卷轴筒排得整整齐齐，可这抽屉的内深看上去比它外面那一截要短。",dmHint:"书桌本身用维克托罗的金钥匙开启，或以盗贼工具通过 DC 18 敏捷检定撬开；门边那具恐怖铠甲会攻击非卡萨兰特血统却打开书桌的人（见 evt_2fa_e1）。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「抽屉中还有一个暗格，角色可以通过成功的 DC 18 感知（Wisdom）检定发现。暗格里有一个由纯金制成的阿斯蒙蒂斯符号（价值250金币）」＋「格洛尔之石……也会被藏在书桌的秘密隔间里」。"}},{id:"info_305_g1",content:"食品储藏室后墙的葡萄酒架隐藏着一扇通往图书馆的秘密门。从架上取下一瓶博德之门黑皮诺红酒即可解锁它，随后门可以被推开。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"hard",checkDC:18},teaser:"整面后墙都是酒架，可其中一瓶酒的瓶颈上没有落灰，像是常被人握着。",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「通往图书馆的密门可以由成功通过 DC 18 感知（察觉）检定的角色发现。角色会发现从架子上拿起一瓶博德之门黑皮诺红酒可以解锁门并允许它被推开」。"}},{id:"info_30a_g1",content:"地板马赛克上那只外部刻有金色太阳图案的银色圣杯，是贵族半神西亚摩菲的神圣象征。",holders:[],revealCondition:{type:"check_gated",skill:"宗教",dcTier:"easy",checkDC:10},teaser:"抛光大理石地面的马赛克图案看着不像单纯的装饰，倒像某种纹章或圣徽。",dmHint:"入口大厅（scn_2ee）墙架上陈列着三十多个同样式样的西亚摩菲圣徽——银色圣杯刻金色太阳。在 A4 家族墓穴（scn_33d）佩戴或展示这样一枚圣徽，会让卡拉多恩的幽魂停手并撤走恶灵。",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「成功通过 DC 10 智力（宗教）检定的角色会认出这是贵族半神西摩菲的神圣象征」。"}},{id:"info_31f_g1",content:"这本深红皮革装订的书详细记述了阿玛利亚与维克托罗首次接触大恶魔阿斯蒙蒂斯时进行的恶魔仪式。任何具有仪式施法特性（或仪式施法者专长）的角色，花24小时读完它便可掌握书中描述的仪式：施放需要11分钟，并需焚香与一瓶圣水（施法时消耗）。仪式结束时，一位由焚香烟雾构成、形如深狱炼魔的阿斯蒙蒂斯代理会现身，授予召唤者一次通神术法术的好处。角色必须完成一次长休，才能再次进行这个仪式。",holders:["npc_496","npc_4dc"],revealCondition:{type:"event_fired",eventId:"evt_31f_e1"},teaser:"翻开桌上那本深红色皮革的书，里面除了空白页和几滴干涸的血迹之外，什么也没有。",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「如果任何一页上滴上一滴类人生物的血，那一页上的地狱文字就会变得清晰可读，并且会一直保持这样，直到书被合上」——故 revealCondition 挂滴血事件 evt_31f_e1，而非检定。"}},{id:"info_31f_g2",content:"书桌的抽屉里有一枚印着卡萨兰特家族徽章的火漆印章、阿玛利亚·卡萨兰特的法术书（里面包含了她准备的所有法术），以及十瓶被称为「午夜之泪」的深黑色毒药。",holders:["npc_496"],revealCondition:{type:"free"},dmHint:"阿玛利亚打算用这些毒药污染创始人日宴会的食物，在午夜钟声敲响时一举夺走九十九条人命（见「特殊事件」）。破坏或偷走午夜之泪，是原文列出的三条阻挠路径之一。她本人对这种毒药免疫。",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：C22 的门是锁着的，进屋后翻抽屉即见，故 revealCondition free；毒药的用途属 DM 侧知识，收在 dmHint 不入 content。"}},{id:"info_325_g1",content:"地板上烧制的五角星阻止奥斯瓦尔多操纵他的锁链；如果另一个生物进入五角星所围的区域，这个效果就会终止。五角星的魔法也可以被解除（DC 15）。一旦奥斯瓦尔多被释放，他会重新控制自己的锁链并无差别地攻击。",holders:[],revealCondition:{type:"check_gated",skill:"奥秘",dcTier:"medium",checkDC:15},teaser:"锁链在靠近地板上那圈烧灼出的图案时，会以不自然的角度绷住；侦测魔法会照出一圈强大的防护光环。",dmHint:"链魔就是卡萨兰特家族的法定继承人奥斯瓦尔多，被父母用他自己的锁链困在梁柱之间；他完全疯了，无法与之理论。若其生命值降至0，他会在融化成黑色脓液前呼喊他的母亲。",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「一次成功的 DC 15 智力（奥秘）检定揭示出五角星阻止奥斯瓦尔操纵他的锁链……五角星的魔法也可以被解除（DC 15）」。"}},{id:"info_32e_g1",content:"酒窖南墙上绘着一个褪色的西亚摩菲圣徽——银色圣杯配金色太阳。按下那个太阳符号，墙壁便会移开，显露出后面的秘密金库。搜索这面墙的角色会自动发现这扇秘密门，只是要弄清楚怎么打开它还需要一点眼力。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"easy",checkDC:10},teaser:"酒窖南端渗出一股微弱的气流，吹得烛火固执地偏向一侧；仆人们很少在这里久留。",_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「一个搜索墙壁的角色会自动发现这扇秘密门，并且可以通过一次成功的 DC 10 智慧（感知）检定来弄清楚如何打开它」——DC 10 门槛落在「怎么开」这一层。别墅正是经此与阿斯蒙蒂斯神庙相连。"}},{id:"info_33a_g1",content:"北侧壁龛后墙上那幅十八尺高、九尺宽的镀金框肖像画中的人物，是九层地狱之主阿斯蒙蒂斯。",holders:[],revealCondition:{type:"check_gated",skill:"宗教",dcTier:"easy",checkDC:10},teaser:"画中那位衣着考究、留着胡须的男子英俊得不像凡人，额头上突出着两只小角，手里握着一根镶红宝石的手杖。",_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「任何成功通过 DC 10 智力（宗教）检定的角色都能认出这位人物是阿斯蒙蒂斯」。"}},{id:"info_341_g1",content:"西墙那四个深狱炼魔浮雕中的一个背后藏着一扇秘密门。推动那尊雕塑，秘密门便会朝秘密圣器室的方向打开。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:13},teaser:"西墙上四个深狱炼魔浮雕并不完全一致，其中一个的边缘被磨得比另外三个亮。",_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「在其中一块浅浮雕后面有一扇秘密门，成功通过 DC 13 感知（察觉）检定即可发现。推动雕塑会导致秘密门向 A6 方向打开」。"}},{id:"info_345_g1",content:"仪式大厅里有一扇通往秘密圣器室的密门；推动那一段墙壁，它就会摆开。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:13},teaser:"雕像四周挂着描绘人类放荡场景的大型挂毯，其中一段墙面的接缝比别处深得多。",_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「通过一次成功的 DC 13 感知（察觉）检定可以发现通往 A6 的密门。推动该部分墙壁会使其摆动打开」。另注：北面挂毯后面是一条通向 A9（scn_34c）的粗糙通道。"}},{id:"info_350_g1",content:"雾里滑过的三个身影是布雷甘·达特的卓尔火枪手。他们要去码头区一条小巷，见一个裹在隐形术里的女人——深水城的开放领主莱拉·银手。是她用短讯术约的这场会面，她想弄清楚贾拉克西尔在这座城里到底想干什么。",holders:["npc_4ba","npc_4aa"],revealCondition:{type:"check_gated",skill:"隐匿",dcTier:"medium"},teaser:"三个影子在雾里滑行，像精灵穿过森林；从哪儿来、往哪儿去，都看不真切。",dmHint:"「难忘的一夜」（3c4）：监视集市船只的第一晚起雾，三名卓尔火枪手乘划艇上岸（艇系在心碎者与地狱使者之间的码头末端）。角色可以跟踪；卓尔即使察觉被跟也不会甩开追踪者，遭到攻击则分散并先完成任务。若打起来且逃脱无望，卓尔会战斗至死，六名老兵组成的城市守卫巡逻队在 1d4 分钟后赶到实施逮捕。原文未给跟踪的检定门槛，dcTier 为估计。",_meta:{sourcePages:[145,146],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C 档补全：3c4「难忘的一夜」原文；跟踪 DC 原文未给，skill/dcTier 为估计。"}},{id:"info_355_g1",content:"海之女集市和它的三艘船——抢眼人物、心碎者、地狱使者——都听命于一个人：来自卢斯坎的扎多兹·佐德船长。集市以卢斯坎为母港。想见佐德本人，得先跟一位船长搭上话。",holders:[],revealCondition:{type:"free"},teaser:"问哪个水手都是同一句回话：「去找船长谈。」",dmHint:"水手与船长都不会主动说破佐德的真实身份（除非被魔法强迫）。水手接到命令不得与陌生人或客人交往，但这两条属于随口就能问出的公开口径。",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：来自 359「水手们」两条问答口径，原文未设检定门槛，故 free。"}},{id:"info_355_g2",content:"嘉年华的杂工一边卸货一边打开了话匣子：这些水手用奇怪的手势彼此交谈，一个个都受不了阳光，说话还带着一丝精灵口音——而且清一色全是男的，怪得很。至于佐德，他从不坐小艇，总是用魔法在船与船之间来去。",holders:[],revealCondition:{type:"check_gated",skill:"游说",dcTier:"easy",checkDC:10},teaser:"一个搬箱子的杂工朝甲板上瞟了一眼，压低嗓子嘟囔了半句「这船上的人……」，又把话咽了回去。",dmHint:"35a「嘉年华工作人员」：DC 10 魅力检定（哄骗或诱使）可让一名平民杂工透露其中一条；这些手势是卓尔手语。原文为裸魅力检定，此处以「游说」承载，欺瞒/威吓同样可行。",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：原文为裸魅力检定 DC 10，skill 取「游说」承载。"}},{id:"info_355_g3",content:"盯了这些船员整整一个钟头之后，事情对上了号：他们说话都带着精灵口音，而且在自认无人注意时飞快地交换手势——那是卓尔手语。这一船人根本不是人类。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"船舷边两名水手的手指忽然动了几下，随即同时停住，像是被谁看了一眼。",dmHint:"35b「发现黑暗精灵」：观察船员满 1 小时后 DC 15 感知（察觉）。卓尔角色能直接认出是卓尔手语。幻象经不起物理检查——抓住水手的耳朵就会摸到尖耳；登船的卓尔角色会被船首像的魔法立刻变成同性别、同身高体重的人类幻象形态。",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：35b 原文。"}},{id:"info_355_g4",content:"船头那尊镀金的女精灵船首像双手前伸、长发飘散，额头上刻着一枚极小的浮雕蜘蛛。魔法的气息一圈圈从它身上荡开——全船水手那张「人类」的脸，都是它变出来的。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:13},teaser:"未上色的船首像迎风前伸双手，额头上似乎有个很小的东西，得凑近才看得清。",dmHint:"J8（36e）：DC 13 感知（观察）看见额上蜘蛛浮雕；侦测魔法显示幻象光环。船首像 AC 15、50 点生命值，免疫毒素与心灵伤害。对单个伪装卓尔施解除魔法可令其幻象暂时消失；反魔法场可压制领域内效果；摧毁船首像则全船幻象终结——此后该船卓尔会留在甲板下以免招眼（见 evt_355_e2）。",_meta:{sourcePages:[134],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：J8 船首像原文；数值与法术互动归 dmHint。"}},{id:"info_355_g5",content:"「一年前，集市去了岛国兰坦。佐德在那儿弄到了一艘潜水艇——绯红马佩诺斯。它就挂在抢眼人物的船腹底下。」",holders:[],revealCondition:{type:"check_gated",skill:"威吓",dcTier:"medium",checkDC:15},teaser:"被逼到墙角的船长下意识地瞥了一眼脚下的甲板缝隙，才把视线挪开。",dmHint:"358「船只船长」：制住一名船长后 DC 15 魅力（恐吓/威吓）+ 提对问题即可问出这一条。船长知道贾拉克斯的计划，但不会说破佐德的真身（除非被魔法强迫）。",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：358 审讯清单第三条拆条。"}},{id:"info_355_g6",content:"「佐德派了人在外面找一件叫格洛尔之石的神器。那东西指向一个地方——他们管它叫龙之金库。找到哪一步了？没人告诉我们，保密。」",holders:[],revealCondition:{type:"check_gated",skill:"威吓",dcTier:"medium",checkDC:15},linkedQuestId:"qst_main_dragonheist",teaser:"提到「金库」两个字时，船长的呼吸乱了一拍。",dmHint:"358「船只船长」审讯清单：出于安全考虑，船长们没有被告知任务进展。这条直接接主线 qst_main_dragonheist。",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：358 审讯清单第四条拆条，挂主线任务。"}},{id:"info_355_g7",content:"「佐德在深水城里安着三个卓尔间谍——菲尔莱科特·拉菲恩、克雷比格·马斯奇尔、索卢恩·希布林达斯。三个都带着兰坦造的火器。」",holders:["npc_4aa"],revealCondition:{type:"check_gated",skill:"威吓",dcTier:"medium",checkDC:15},teaser:"船上有人低声提过「三位大人」，说他们难得在船上待着。",dmHint:"358「船只船长」审讯清单第五条。这三人若未在别处被解决，会分别出现在潜艇 U3（索卢恩）、U5（菲尔莱科特）、U6（克雷比格）；雾夜密会（「难忘的一夜」）里上岸的也是他们。holders 用 npc_4aa（卓尔火枪手，pack 内三人的合并档）。",_meta:{sourcePages:[132],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C 档补全：holders 只能挂到 npc_4aa「卓尔火枪手」这条合并档，pack 内暂无菲尔莱科特/克雷比格/索卢恩三人的独立 npc 条目，待 NPC 侧补齐后改挂。"}},{id:"info_355_g8",content:"佐德舱室的墙上藏着一扇通往步入式衣橱的暗门；更要紧的是地板——薰衣草味最浓的那一块下面是一扇活板门。掀开它，一段钢管里垂下金属梯，梯子尽头是一扇圆形舱口，转动阀门轮就能打开。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"舱室地板上有一小块的木纹走向和别处不一样。",dmHint:"J30（39b）：搜查舱室 DC 15 感知（察觉）同时发现墙上暗门与地板活板门。活板门上有秘法锁，敲击三下压制该法术 1 分钟，或 DC 25 力量（运动）强行掀开。管道长 10 尺、直径 3 尺，底部舱口通往绯红马佩诺斯的 U1 入口舱口（scn_3a8）——这是本章进潜艇的书面路径，scn_3a8 的 activation 挂在本条 info 上。J28 两间步入式衣橱与 J29 客房之间另有暗门，同为 DC 15 感知（察觉）。舱内秘偶在无命令时会攻击任何发现活板门的人。",_meta:{sourcePages:[140,141],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：J30 39b 暗门/活板门原文，合并 J28 衣橱暗门（394/395）与 J29 397。"}},{id:"info_355_g9",content:"船长舱那只带玻璃门的书柜里全是些平淡无奇的普通书籍，底架却比其余几层浅了一指——夹层里压着船长自己的法术书。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:14},teaser:"书柜底架的木板缝隙里积不进灰，像是常被人抽动。",dmHint:"J10（373）：DC 14 感知（察觉）发现底架下的秘密空间。法术书含：寒冰锥、操控水体、法术反制、侦测魔法、火球术、飞行术、高等隐形术、冰风暴、法师护甲、魔法飞弹、迷踪步、拉瑞心灵联结、短讯术、护盾术、暗示术、雷鸣波、水下呼吸、蛛网术。船长会准备短讯术而非飞行术。",_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：J10 373 原文。"}},{id:"info_355_g10",content:"抢眼人物号军械库角落里那具七百五十磅重的铸铁保险箱，用的是密码锁。密码是 1-20-59。",holders:["npc_4b9","npc_4aa"],revealCondition:{type:"check_gated",skill:"威吓",dcTier:"hard"},teaser:"保险箱的密码盘被摩挲得发亮，显然常有人开它。",dmHint:"J16（37e）：只有贾拉索和他的三名副官（菲尔莱科特、克雷比格、索卢恩）知道密码。不问出密码也可用盗贼工具 DC 25 敏捷（调查）撬锁（每次尝试 1 分钟）或敲击术打开。箱内见 trs_355_2。",_meta:{sourcePages:[136],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C 档补全：密码 1-20-59 与知情人四人为原文；但原文未给「从这四人嘴里套出密码」的检定门槛，dcTier 取 hard 为估计、故不写 checkDC，待人工拍板。"}},{id:"info_355_g11",content:"玛戈·维丽达和卡菲塔·穆赞一旦离开贾拉索、被逼开口，会说出这些：扎多兹·佐德是个伪装起来的卓尔；集市每艘船的船员都是卓尔，是船首像的幻术让他们看起来像人类；他想让贵族联盟接纳他的城市卢斯坎，同时把无冬城踢出去；一年前集市去过兰坦，他在那里弄到一艘潜艇和几个发条仆从。",holders:[],revealCondition:{type:"check_gated",skill:"游说",dcTier:"medium"},teaser:"两位明星表演者礼貌而简短，谈到「佐德船长」时对视了一眼。",dmHint:"J29（396）：玛戈（阿姆尼亚人类吟游诗人）与卡菲塔（穆尔霍兰迪人类剑客）都是中立善良，彼此相爱，受贾拉索追求。原文只写「与贾拉克塞尔分开并被迫透露」，未给检定门槛——dcTier 为估计。遭到攻击时她们会取走武器与随身物品，从暗门逃走。",_meta:{sourcePages:[140,141],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C 档补全：holders 留空——pack 内 npc_49a「吟游诗人」/npc_4d6「剑客」是通用数据档而非玛戈/卡菲塔个人档，挂上去会让全城同名 NPC 都知道这些秘密。原文未给套话 DC，dcTier 为估计。"}},{id:"info_355_g12",content:"抢眼人物号货舱后部那几件「彩车装饰」颜色鲜得反常，摆放的角度也不像随手堆着的道具——那是四只被涂成鲜艳颜色的巨大蜘蛛，一动不动地趴在那儿。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"hard",checkDC:17},teaser:"货舱深处的漆色新得刺眼，靠近时空气里有股不属于颜料的味道。",dmHint:"J17（383）：被动感知 17 及以上的角色在蜘蛛发动攻击前认出威胁。四只蜘蛛自孵化起由贾拉索训练，能隔着幻象辨认卓尔的真身，对卓尔没有敌意。同一货舱里那具未上漆的机械金龙彩车装有易燃气体罐，拉杆即起火（见 evt_355_e3）。",_meta:{sourcePages:[137],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：383 原文；被动感知 17 以 check_gated 察觉 checkDC 17 承载。"}},{id:"info_3a3_g1",content:"维护绯红马佩诺斯的岩石侏儒工程师对这艘船了如指掌，对别的事一问三不知。贾拉索待他们不薄，可他们终究不是布雷甘·达特的人——吓一吓，或者一百金币往上的价钱，主钥匙、引擎、甚至舵，都好商量。",holders:[],revealCondition:{type:"check_gated",skill:"威吓",dcTier:"medium",checkDC:15},teaser:"侏儒工程师说起潜艇滔滔不绝，一被问到船上的人就闭了嘴。",dmHint:"3a5「侏儒工程师」：DC 15 魅力（威吓）或 100 金币以上的贿赂，可说服一个侏儒交出他的主钥匙、破坏引擎，或按角色指示驾驶潜艇。侏儒是中立善良的学徒法师变体（小型、7 点生命值、对抗魔法的感知/智慧/魅力豁免有优势、速度 25 尺、暗视 60 尺、说通用语与侏儒语）。贾拉索与侏儒们持有艇上所有锁门的钥匙。",_meta:{sourcePages:[141],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：3a5 原文；检定与数值归 dmHint。"}},{id:"info_3ae_g1",content:"贾拉克西尔客舱里那口没上锁的木箱有个假底：从外面量，它比里面深了一截。夹层里放着他不肯示人的东西——若格洛尔之石在他手上，就在这儿，连同他从别人身上收缴来的魔法物品。",holders:["npc_4b9"],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:13},linkedQuestId:"qst_main_dragonheist",teaser:"箱子看上去空得过分，敲上去的回声却是闷的。",dmHint:"U4（3b1）：DC 13 感知（察觉）发现并打开箱底暗格。注意顺序——掀开箱盖会先放出机械蜘蛛群（evt_3ae_e1）。若贾拉索未持有格洛尔之石，暗格是空的；角色若被他击昏剥装备，魔法物品都藏在这里（非魔法物品在抢眼人物 J16 军械库）。",_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：3b1 原文 + 351「面对贾拉克斯莱」没收装备去向。"}},{id:"info_3b5_g1",content:"指挥中心的飞行员座椅正对着一排仪表、操纵杆和按钮。从这儿可以把潜艇从抢眼人物的船腹上脱开，控制航速、方向和深度，还能给外壳通上一层电流。侏儒们闭着眼都能操作；换个外人来看，刻度全是侏儒语，杆子的排布毫无章法。",holders:[],revealCondition:{type:"check_gated",skill:"调查",dcTier:"hard",checkDC:20},teaser:"仪表盘上的刻度不是通用语，操纵杆的排布也看不出规律。",dmHint:"U7b（3b7）：侏儒操艇无需检定，其他生物需 DC 20 智力检定才弄懂操控（原文为裸智力检定，此处以「调查」承载）。外壳通电持续 1 分钟，之后需 1 小时重新充能；接触通电外壳或在接触状态下开始回合的生物需 DC 15 敏捷检定，失败受 22（4d10）闪电伤害、成功减半，着金属甲者劣势。铜制传声管连通引擎室（U2）。",_meta:{sourcePages:[143],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C 档补全：3b7 原文；原文是裸智力检定 DC 20，skill 以「调查」承载，待人工确认口径。"}},{id:"info_3d2_g1",content:"科拉特塔曾属于两位古怪的法师兄弟——杜尔克与阿尔塞多·科拉特。兄弟俩不断摸索出驾驭魔法的新法门，但杜尔克日渐偏执，怕别人窃走他们的秘密，于是用一道魔法力场把整座塔包裹起来。他的疑心最后转向自己的兄弟，认定阿尔塞多出卖了他们的秘密；阿尔塞多离塔而去，从此杳无音信，杜尔克则成了隐居者，最终死在自己的堡垒里。",holders:["npc_4c0"],revealCondition:{type:"check_gated",skill:"历史",dcTier:"medium",checkDC:15},teaser:"南城区那对破败的双塔，街坊提起来总要压低声音——有人说早废弃了，有人说科拉特兄弟的鬼魂还在里面。",dmHint:"熟悉深水城历史的 NPC（米尔特、沃罗）也可以直接讲出这三条。",_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「科拉特塔楼传说」inset，DC 15 智力（历史），三条要点逐条照录。"}},{id:"info_3ea_g1",content:"约恩乐意跟不构成威胁的人聊科拉特塔的住户和布局。他自己从没去过曼松的跨维度圣所，但他知道 K22 里的传送圈就是到那儿去的路。",holders:[],revealCondition:{type:"check_gated",skill:"游说",dcTier:"easy"},teaser:"角落椅子里那个读书的半兽人只抬了下眼皮，看上去更在意自己的下场，而不是你们是谁。",dmHint:"约恩最看重自己的福祉，最初对入侵者漠不关心。K7 一旦开打，K3 的马纳弗雷特·切里波特会前来查看。",_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文只写「如果约恩认为角色们不构成威胁，他很乐意与他们谈论…」，未给检定与DC。此处按低门槛社交处理（easy，不填 checkDC），门槛待人工拍板。pack 的 npcs.json 无约恩条目，holders 留空。"}},{id:"info_3f6_g1",content:"牢门上被施了一道守卫刻文，设定为除曼松以外的任何人开门即触发。符文形似一个华丽的字母 M；触发时会对开门的生物施放目盲术／耳聋术（豁免 DC 18）。",holders:[],revealCondition:{type:"check_gated",skill:"调查",dcTier:"hard",checkDC:18},teaser:"门锁着，门板的木纹里似乎压着一道不属于木头的花纹。",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 K13「陷阱门」段，DC 18 智力（调查）找到符文。"}},{id:"info_3f6_g2",content:"冈达弗蕾女士熟悉科拉特塔的布局，也认得眼下住在里面的每一个人。她知道曼松住在一处位面圣所里，进去的路是一座传送阵，要由他的副手用特殊的戒指才能激活。她不知道那座传送阵在哪里，也不知道杜尔卡当年为什么把她的意识挪进现在这具躯壳。",holders:[],revealCondition:{type:"event_fired",eventId:"evt_3f6_e1"},teaser:"栅窗后那只石像鬼说起话来像个骑士，而且它显然在这座塔里待了太久太久。",dmHint:"她被释放后会提出并肩作战，但会迅速反对任何残忍或非法的行为。随队时每天黎明掷 1d10，掷出 1 则她的阵营在接下来 24 小时变为混乱邪恶，会图谋角色的性命甚至袭击落单者。",_meta:{sourcePages:[152,153],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 K13「冈达弗蕾女士」段。释放＝打开牢门，故以 evt_3f6_e1 触发为门。pack 的 npcs.json 无冈达弗蕾条目，holders 留空。"}},{id:"info_400_g1",content:"K17 走廊两侧墙壁的踝部高度，沿通道方向等距排着一圈直径 1 英寸的小孔——这是毒气陷阱的喷口。血肉魔像正站在一块压力板上；当它离开压力板去追击够不到的敌人时，板上的重量一撤，孔洞就会喷出毒气：走廊里每个生物必须进行 DC 12 体质豁免，失败受 10（3d6）点毒素伤害，成功减半。毒气持续 1 分钟，其间走廊内的生物每回合开始时要重复豁免，除非以造风术之类的魔法把它驱散。魔像本身对毒气免疫。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"hard",checkDC:17},teaser:"这条没点灯的走廊安静得反常，墙根一带似乎有什么规律排列的凹痕。",_meta:{sourcePages:[153],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 K17 首条要点 DC 17 感知（察觉）发现孔洞，机制数值取自「魔像陷阱」段。"}},{id:"info_400_g2",content:"K17 最内侧的墙里嵌着一扇通往 K19 的单向秘密门。它平常只能从 K19 一侧正常打开；从 K17 这一侧，只有敲击术之类的魔法才能强行开启它。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"走廊尽头的墙面接缝在灯下投出一道过于笔直的影子。",_meta:{sourcePages:[153],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 K17「单向暗门」段，DC 15 感知（察觉）。"}},{id:"info_403_g1",content:"墙上这道复杂符文正是维持环绕科拉特塔那道力场的源头，而且它可以被摧毁。符文的 AC 为 10，22 点生命值，对毒素和心灵伤害免疫；它无法被正常解除，但每次对其成功施放解除魔法（DC 19）会造成 16（3d10）点力场伤害。符文被摧毁的那一刻，围绕科拉特塔的力场就消失了。",holders:[],revealCondition:{type:"check_gated",skill:"奥秘",dcTier:"medium",checkDC:15},teaser:"走廊最南端的后墙上刻着一道繁复的符文，手还没伸到跟前，指尖就发麻——侦测魔法下它泛着强烈的咒法灵光。",dmHint:"符文第一次受到伤害时会有一只史拉红蟾从中跳出攻击走廊里的所有生物（evt_403_e1）。从通往 K17 的门道看不到这道符文。",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 K18「奥术符文」段落，DC 15 智力（奥秘）确认符文维持力场且可被破坏。"}},{id:"info_403_g2",content:"K18 走廊最内侧的墙里嵌着一扇通往杜拉克卧室（K19）的秘密门。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"这条未点亮的走廊满是灰尘和蜘蛛网，只有最内侧那面墙上，灰尘的落法和别处不太一样。",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 K18「暗门」段落，DC 15 感知（察觉）。"}},{id:"info_406_g1",content:"书架上有一本假书，书名《来自达马拉的男人》——其实是一块漆成书本形状的木块，连着书架底部的秘密隔间。拉动这本书，隔间就会弹开，里面藏着杜拉克的定身魔杖。",holders:[],revealCondition:{type:"check_gated",skill:"察觉",dcTier:"medium",checkDC:15},teaser:"两排窄书架上，深奥主题的杂书之间留着一道道明显的空档——曼松搬走了所有值钱的书；但有一本书的位置像是从没被人动过。",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 K19「书架」段，DC 15 感知（察觉）发现书架并辨别如何打开。"}},{id:"info_40b_g1",content:"佩戴传送戒指的生物可以用一个动作激活 K22 或 E1 的传送圈，把自己和至多六名自愿的生物从一个圈送到另一个圈。戒指被带到圈的 5 尺范围内时，圈会开始柔和地嗡鸣。这些戒指是刻着风格化字母 M 的黄铜印章戒指，在侦测魔法下泛着咒法灵光——曼松只把它们交给最信任的仆从。",holders:[],revealCondition:{type:"item_owned",itemRef:"传送戒指"},teaser:"地板上那圈符文微微发亮，像是在等一把钥匙。",dmHint:"持戒者：西德拉·罗迈尔（K2）、马纳弗雷特·切里波特（K3）、K15 的三名学徒、哈维亚·快刀与 Mookie Plush（E10）。",_meta:{sourcePages:[156,157],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「传送戒指」段 + K22「传送法阵」段；以 item_owned 传送戒指 为门，未臆造检定。"}},{id:"info_40b_g2",content:"第 5 号箱木架上那八个玻璃瓶并不都是治疗药水：其中两瓶装的是单剂量的乙醚精，一种毒药。",holders:[],revealCondition:{type:"check_gated",skill:"自然",dcTier:"easy",checkDC:13},teaser:"木架上的八个瓶子看着一模一样，只是有两瓶里的液体晃起来沉得不对。",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 K22「宝箱」段，DC 13 智力（自然）识别毒药。"}},{id:"info_417_g1",content:"地板上散塔林会纹章里那枚直径一英尺的圆盘瓷砖「硬币」是一块压力板。被按下或踩到时，它会敲响整座圣所都听得见的魔法锣，把凯夫贾（E3）、曼松的拟像（E7）、维维特·黑水与阿贡·弗科（E8）、哈维亚·快刀与 Mookie Plush（E10）统统召到门厅，攻击房内所有入侵者。用盗贼工具进行一次 DC 20 敏捷检定可以解除警报，但若检定失败 5 点或更多，警报会意外触发。",holders:[],revealCondition:{type:"check_gated",skill:"调查",dcTier:"medium"},teaser:"雪花石膏地面上镶着黑色大理石的翼蛇咬币纹章，那枚「硬币」四周的接缝比别处细得反常。",_meta:{sourcePages:[157,158],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文只写「（这枚硬币隐藏了一个警报机制。）」并给出解除的 DC 20 敏捷（盗贼工具），未给发现检定的 DC；此处 dcTier=medium 且不填 checkDC，门槛待人工拍板。"}},{id:"info_41d_g1",content:"厄斯图尔·弗洛克辛对曼松的「愤怒」是装的。他确实因为让格洛尔之石从手里溜走而受了罚，但他仍然忠于曼松；他主动提出帮你们击败法师，只是为了一有机会就把你们带到曼松面前再动手，好在主上面前证明自己的忠诚。",holders:["npc_4d9"],revealCondition:{type:"check_gated",skill:"洞察",dcTier:"medium",checkDC:14},teaser:"他一边阴沉地擦洗实验器皿，一边说自己受够了那位法师——语气热切得有点过头。",dmHint:"若角色被骗但仍要求他交出武器再随行，这位赞特刺客会嘲笑他们并当场发难。",_meta:{sourcePages:[159],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 E5「厄斯图尔·弗洛克辛」段，DC 14 感知（洞察）识破诡计。"}},{id:"info_42c_g1",content:"卡耶嘉箱中那枚金护身符上镶的红色水晶符文是召唤术的象征，不过护身符本身没有任何魔法效果。",holders:[],revealCondition:{type:"check_gated",skill:"奥秘",dcTier:"medium",checkDC:15},teaser:"护身符正中的红水晶里刻着一道纹路，看久了会觉得那不是装饰。",_meta:{sourcePages:[160],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 E11「宝藏」段，DC 15 智力（奥秘）。"}},{id:"info_430_g1",content:"账簿里有把曼松和两桩勒索拴在一起的纸面证据：科里勒斯·坦恩，一名种族主义的深水城贵族，一直在向散塔林会付钱，好让他们别抖出他雇赞特暴徒袭击非人类的事；杰伦·乌姆布鲁斯克，另一名深水城贵族，则定期从散塔林会收钱，弥补她在坏投资上的亏空。",holders:[],revealCondition:{type:"item_owned",itemRef:"账簿"},teaser:"两张紫色沙发之间那张低矮桌子内嵌着一个薄抽屉，抽屉上压着一道秘法锁——曼松把什么锁在自己书房里，这件事本身就有分量。",dmHint:"原文：花一个小时研究账簿才能读出以上内容。账簿不会揭示这两人是蒙面领主，也不会揭示勒索还逼他们动用影响力替曼松的手下掩盖或驳回罪行。抽屉可用盗贼工具 DC 25 敏捷、DC 21 力量（运动）或敲击术打开。若当局拿到账簿，他们会围捕一切涉嫌与曼松或散塔林会有牵连的人。",linkedQuestId:"qst_main_dragonheist",_meta:{sourcePages:[160],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 E13「桌子」段。原文的门是「拿到账簿并研究一小时」，故用 item_owned 而非臆造检定。"}},{id:"info_430_g2",content:"账簿里夹着一张纸，上面是曼松亲笔写的名单——他已经查明身份的蒙面领主，打勾的是他正在勒索的那几个：米尔特；科里勒斯·坦恩 √；萨杜克·星扣；杰伦·乌姆布鲁斯克 √；多加尔·阿达布伦特。",holders:[],revealCondition:{type:"item_owned",itemRef:"账簿"},teaser:"账簿书页之间露出一角手写的纸边，字迹和账簿正文不是同一只手。",dmHint:"令人意外的是，科里勒斯与杰伦既没被逮捕，甚至没被问过话。角色若拿着这份名单去找他们，走「特殊事件·被勒索的领主」。",_meta:{sourcePages:[160,161],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文 E13「桌子」段末的名单，五个名字逐条照录。"}}],s=[{id:"enc_04a",name:"从哪里开始遭遇",sceneId:"scn_04a",prelocked:!1,enemies:[{ref:"巨魔",count:1},{ref:"蚊蝠",count:3}],battlefield:{family:"generic"},_meta:{sourcePages:[21],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_064",name:"主房间遭遇",sceneId:"scn_064",prelocked:!1,enemies:[{ref:"天狗",count:4}],battlefield:{family:"generic"},_meta:{sourcePages:[24],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_07b",name:"观察哨遭遇",sceneId:"scn_07b",prelocked:!1,enemies:[{ref:"地精",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_07f",name:"睡眠区遭遇",sceneId:"scn_07f",prelocked:!1,enemies:[{ref:"灰矮人",count:1},{ref:"匪徒",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_081",name:"老大战斗遭遇",sceneId:"scn_081",prelocked:!1,enemies:[{ref:"噬脑怪",count:1},{ref:"夺心魔",count:1},{ref:"学徒法师|VGM",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_08c",name:"旅店地窖遭遇",sceneId:"scn_08c",prelocked:!1,enemies:[{ref:"鼠人",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[30],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/surpriseHint"},surpriseHint:"enemies_hidden"},{id:"enc_096",name:"作祟幽灵利夫",sceneId:"scn_096",prelocked:!1,enemies:[{ref:"恶灵",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[31],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：敌意成立但非默认——利夫只在被攻击时还手（原文『如果遭到攻击…』），另一条路是安抚它（致力翻修重开）。enemies 的『恶灵』ref 与数量 1 与原文相符，未动。补 moraleHints（半血逃塔顶、在那里战斗到底）。；overlay覆写:name/surpriseHint/moraleHints/_meta"},surpriseHint:"none",moraleHints:[{threshold:"hp_below",value:50,behavior:"生命值降至一半时，利夫逃往塔楼最高层；在那里它战斗到底，生命值降至 0 即被摧毁。"}]},{id:"enc_0bb",name:"碎片回避者的骚扰",sceneId:"scn_0bb",prelocked:!1,enemies:[{ref:"碎片回避者|WDH",count:4}],battlefield:{family:"generic"},_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原枚举把行会代表（平民=布罗克斯利/哈蒙德、暴徒=贾斯汀、大法师=乌尔科里亚及其构装盾卫）全当成敌人——这些人是友方来客，整批剔除；真正的敌对方是埃梅克花 50 金币雇来的四名碎片回避者（凯尔索·菲德尔维克、达舍·斯诺比德尔、达尼卡·菲德尔威克、布琳·希尔托普尔，鼠人变体：小型、27(6d6+6) hp、可穿越中型以上生物空间、对恐慌豁免优势）。ref 字符串保持原样，仅改数量 4。surpriseHint=enemies_hidden 依据原文『在夜间以混合形态和老鼠形态在角色们的酒馆周围潜行』『在半身人形态下侦查角色们的酒馆』。；overlay覆写:name/enemies/surpriseHint/_meta"},surpriseHint:"enemies_hidden"},{id:"enc_0ef",name:"格拉伦德别墅遭遇",sceneId:"scn_0ef",prelocked:!1,enemies:[{ref:"魔法师",count:1},{ref:"军士|WDH",count:1},{ref:"老兵",count:5}],battlefield:{family:"generic"},_meta:{sourcePages:[50],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_0f6",name:"院子遭遇",sceneId:"scn_0f6",prelocked:!1,enemies:[{ref:"邪教狂信者",count:1},{ref:"獒犬",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[52],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_102",name:"大厅遭遇",sceneId:"scn_102",prelocked:!1,enemies:[{ref:"暴徒",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[53],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_10a",name:"家庭图书馆遭遇",sceneId:"scn_10a",prelocked:!1,enemies:[{ref:"恶灵",count:3}],battlefield:{family:"generic"},_meta:{sourcePages:[53],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/surpriseHint"},surpriseHint:"enemies_hidden"},{id:"enc_10d",name:"二楼门厅遭遇",sceneId:"scn_10d",prelocked:!1,enemies:[{ref:"暴徒",count:3}],battlefield:{family:"generic"},_meta:{sourcePages:[53],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_111",name:"客房套房遭遇",sceneId:"scn_111",prelocked:!1,enemies:[{ref:"厄斯图尔·弗洛克辛|WDH",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[54],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_11a",name:"后续遭遇",sceneId:"scn_11a",prelocked:!1,enemies:[{ref:"老兵",count:20},{ref:"军士|WDH",count:1},{ref:"狮鹫骑兵骑手|WDH",count:2},{ref:"狮鹫",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[55],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_124",name:"设置舞台遭遇",sceneId:"scn_124",prelocked:!1,enemies:[{ref:"秘偶",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文此处唯一的战斗对象是被逼到墙角的秘偶（无路可逃、战斗至被摧毁）；脚本抓到的「老兵」是战斗结束后赶到的六名城市守卫，对构装毫不在意且会相信角色说辞——非敌方，已剔除。；overlay覆写:enemies/surpriseHint/_meta"},surpriseHint:"none"},{id:"enc_13e",name:"遭遇1：小巷遭遇",sceneId:"scn_13e",prelocked:!1,enemies:[{ref:"狗头人",count:8},{ref:"熊地精",count:5},{ref:"噬脑怪",count:1},{ref:"变形怪",count:1},{ref:"须魔",count:1},{ref:"小魔鬼",count:3},{ref:"棘魔",count:3},{ref:"间谍",count:1},{ref:"暴徒",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[61,62,63,64],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：本条是四季合并池，实跑只取当季那一组。春=8狗头人+熊地精摩加1+噬脑怪1（后二者藏门道，DC16感知发现）。夏=变形怪Willifort 1+须魔1+隐形小魔鬼3+上场幸存棘魔3。秋=小巷内无战斗（住宅已被洗劫，只有三个小淘气与伪装成莱拉的贾拉索）。冬=5熊地精（藏身伏击）+间谍Avareen 1+暴徒Zorbog 1。数量修正：狗头人1→8、小魔鬼1→3、棘魔1→3。剔除误报：驮用马（拉出租马车的矮种马，非敌）、平民（车夫春原春 LG、肉店老板索拉 LG，均非敌）。surpriseHint 依据：冬季熊地精「已经悄悄爬上来并在小巷中隐蔽……突然冲出来攻击，希望获得突袭优势，被动感知16及以上者不被突袭」；春季摩加与噬脑怪藏在门道里。；overlay覆写:enemies/surpriseHint/_meta"},surpriseHint:"enemies_hidden"},{id:"enc_157",name:"遭遇2: 雾岸遭遇",sceneId:"scn_157",prelocked:!1,enemies:[{ref:"匪徒",count:12},{ref:"Merrow",count:1},{ref:"暴徒",count:9}],battlefield:{family:"generic"},_meta:{sourcePages:[65,66,67,68],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：春=4匪徒（诺思卡·厄格雷 npc_4c9 指挥）+迈罗人鱼1，两轮后再从克拉肯的愚行跳下8匪徒（合计12）；这批流氓每人1金币受雇，角色出价每人≥5金币可反水。冬=9名散塔林会暴徒，战斗至死。剔除误报：老鼠（废墟里筑巢的鼠群，非遭遇）、驮用马（等候的雇佣马车牲口）、平民（车夫Rowan Evenwood LG、篝火边的贫民、Agorn 卧病的母亲Marta）、间谍（蕾米莉亚派来的两名竖琴手 Salazar/Mavia 是援军，友方）。未入表但在场的关键敌方：诺思卡·厄格雷（矮人执法者，血量降至一半或流氓反水即逃跑）、Agorn Fuoco（NE吟游诗人）——二者有专属档案，靠 npc 侧承载。；overlay覆写:enemies/_meta"}},{id:"enc_15c",name:"格林达的装置遭遇",sceneId:"scn_15c",prelocked:!1,enemies:[{ref:"巨鲨",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[66],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：这条不是常驻遭遇。仅当角色替格林达下深水港底搜宝（花一天，结束时驾驶员掷智力（调查），总分×10 即找到宝藏的金币价值，格林达售出后分角色一半）时，掷任意骰为偶数才遭遇觉醒鲨鱼奥布里特罗斯——巨鲨，但阵营混乱邪恶、智力10（+0）、能说与听懂水族语。触发挂在 evt_15c_e1。；overlay覆写:_meta"}},{id:"enc_16c",name:"遭遇3：街道追逐遭遇",sceneId:"scn_16c",prelocked:!1,enemies:[{ref:"天狗",count:2},{ref:"小魔鬼",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[68,69],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：本遭遇是 DMG 追逐规则的「心灵剧院」，不需要地图。春=天狗1（若失能，另一只此前被雨雾遮蔽的天狗在下一个先攻抢走石头继续逃，故计2）。夏=变形怪Willifort（乘雇佣马车或步行）+若他失能则一只变形为乌鸦的小魔鬼俯冲夺石。冬=剑客Vevette Blackwater。剔除误报：平民（拥挤街道上的旁观人群，提供半身掩护；因掩护而未命中的攻击会误伤他们，是复杂化而非敌方）。；overlay覆写:enemies/_meta"}},{id:"enc_176",name:"遭遇4：陵墓遭遇",sceneId:"scn_176",prelocked:!1,enemies:[{ref:"灰矮人",count:4},{ref:"树人",count:1},{ref:"蠕行之爪",count:6}],battlefield:{family:"generic"},_meta:{sourcePages:[69,70,71],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：春=角色离开陵墓时被4名灰矮人伏击（他们用隐形能力溜过墓地守卫，领袖Gorath用矮人语索要石头，不交即变大开打）。冬=入口前的树人守卫（会活化两棵邻树；三者体型太大进不了陵墓）+ Uld 石棺被掀开时弹出的6只蠕行之爪（原文明确「六个由被Uld判处死刑的谋杀犯的手制成的蠕行之爪」，脚本抓成1）。剔除误报：警卫（墓地大门的两名城市卫兵，非敌）、骑士（Kelemvor的年迈仆人 Sir Ambrose Everdawn，夜巡驱赶盗墓贼，可用DC15魅力说服说清误会）、邪教徒（夏季线的三名卡萨兰特邪教徒是尸体，其中Vaelle Lurval 0生命值昏迷待救，是情报源不是敌人）。surpriseHint 依据：灰矮人隐形潜入并伏击。；overlay覆写:enemies/surpriseHint/_meta"},surpriseHint:"enemies_hidden"},{id:"enc_188",name:"遭遇5: 屋顶追逐遭遇",sceneId:"scn_188",prelocked:!1,enemies:[{ref:"棘魔",count:3}],battlefield:{family:"generic"},_meta:{sourcePages:[72,73],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：夏=三只棘魔贴着屋顶低飞（起手距离100尺，携石者失能则另一只夺石续逃），数量1→3。秋=两名卓尔火枪手 Fel'rekt 与 Krebbyg（起手40尺，仅移动；相距10尺内可用反应传递石头）。冬=剑客Vevette Blackwater（起手60尺，追逐复杂化的检定/豁免有优势，可冲刺不掷体质；追逐不超过5轮）。秋冬两组敌方靠 npc 侧档案承载，未并入本表以免污染夏季配置。；overlay覆写:enemies/_meta"}},{id:"enc_18f",name:"遭遇6：剧院遭遇",sceneId:"scn_18f",prelocked:!1,enemies:[{ref:"Drow Elite Warrior",count:4}],battlefield:{family:"generic"},_meta:{sourcePages:[73,74,75,76],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：剧院默认不是战斗场，唯一成建制的敌方是秋季线藏在各角落阴影中的四名卓尔精英武者——只有角色攻击伪装成「荣泉·密斯特」的贾拉索时才出手，且战后贾拉索会稳定濒死者、把人拖到雪巷留下装备而非杀死。剔除误报：平民（三十名观众、演员、舞台工作人员、剧院老板 Iokaste Daliano）、妖精龙(紫)（Wishes，中立，只在剧院或它自己受威胁时用魔法迷惑并中立化角色，事后是索要至少5000金币分成的谈判方）、幽魂（冬季线的 Malkolm Brizzenbright 是门厅里迎宾的友好鬼魂，能闲聊）、祭司（Amath Sercent 冬季只是坐在观众席里的观众）、间谍（两名小提琴手是蕾米莉亚麾下的竖琴手，非其生命或无辜者受威胁不介入）。；overlay覆写:enemies/_meta"}},{id:"enc_1a8",name:"遭遇7: 旧塔遭遇",sceneId:"scn_1a8",prelocked:!1,enemies:[{ref:"天狗",count:1},{ref:"凌空剑",count:6},{ref:"祭司",count:1},{ref:"侍僧",count:4},{ref:"飞蛇",count:3}],battlefield:{family:"generic"},_meta:{sourcePages:[76,77,78,79,80],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：四季合并池，实跑只取当季。春=天狗1（挟持提夫林孩子斯奎迪利，可用价值100金币的宝藏贿赂换石头与人质）+角色拿到石头时从箭缝钻入的三只凝视者眼魔。秋=六把凌空剑（原文「散落着六把长剑……被反魔法场使失去活性」，数量1→6；只有被带出塔外才活化攻击）+三名卓尔火枪手。冬=祭司 Amath Sercent 1+四名侍僧+梁上筑巢的三只飞蛇（数量1→4/1→3）。剔除误报：警卫（夏季线 Esvele Rosznar 带来的四名罗兹纳家族守卫，站岗而非敌对；Esvele 更倾向与角色做分赃伙伴）、平民（夏季线三位公会代表 Sembra/Pynt/Jaborken，来谈修缮报价）。缺口：春季3只凝视者眼魔与秋季3名卓尔火枪手未并入 enemies——二者均有 npc 专属档案（npc_4b4/npc_4aa），裸名 ref 是否可解析未核，故不擅自新增 ref。；overlay覆写:enemies/_meta"}},{id:"enc_1c6",name:"遭遇8: 法院遭遇",sceneId:"scn_1c6",prelocked:!1,enemies:[{ref:"变形怪",count:1},{ref:"警卫",count:10},{ref:"老兵",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[80,81,82,83],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：法院默认不是战斗场。夏季线唯一的真敌是卡萨兰特勋爵的变形怪男仆——它杀掉一名守卫队长冒充「休斯图斯·斯塔格特」、赤手打死牢房区守卫、放角色出笼并诱其交出石头；角色若拒绝配合，它会惊呼诬告，引来法院卫戍全部力量（十名警卫+两名老兵），这批援军没有理由不信队长，会在冲突中站他那边——故 警卫10/老兵2 是「被骗后转敌」而非天然敌对。剔除误报：老兵12（逮捕队，执法而非敌意，交械配合即不搜身）、军士|WDH（守卫军士，搜出石头会认为无关紧要并归还；ref 还带书源后缀）、贵族（地方法官翁贝罗·扎斯特罗，LN，公正）、侍僧（大法官赫丝特·巴奇，LG，情报关键人）、匪徒首领（费内鲁斯·斯托姆卡斯尔，是关在 H8 的囚犯兼交易对象）。；overlay覆写:enemies/_meta"}},{id:"enc_1cd",name:"法庭遭遇",sceneId:"scn_1cd",prelocked:!1,enemies:[{ref:"警卫",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[81],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_1d0",name:"牢房区遭遇",sceneId:"scn_1d0",prelocked:!1,enemies:[{ref:"警卫",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[81],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_1d2",name:"守卫马车遭遇",sceneId:"scn_1d2",prelocked:!1,enemies:[{ref:"老兵",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[81],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_1e0",name:"遭遇9：地窖群遭遇",sceneId:"scn_1e0",prelocked:!1,enemies:[{ref:"骷髅",count:12},{ref:"天狗",count:3}],battlefield:{family:"generic"},_meta:{sourcePages:[83],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_1ed",name:"老鼠泛滥的地窖遭遇",sceneId:"scn_1ed",prelocked:!1,enemies:[{ref:"拟身怪",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[84],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_205",name:"遭遇10: 改造的风车遭遇",sceneId:"scn_205",prelocked:!1,enemies:[{ref:"平民",count:2},{ref:"邪教狂信者",count:2},{ref:"棘魔",count:3},{ref:"老兵",count:8},{ref:"Swarm of Rats",count:6},{ref:"移位兽",count:1},{ref:"狂战士",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[86],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_222",name:"金库钥匙遭遇",sceneId:"scn_222",prelocked:!1,enemies:[{ref:"地精",count:5},{ref:"熊地精",count:1},{ref:"鼠人",count:4},{ref:"小魔鬼",count:2},{ref:"邪教徒",count:3},{ref:"邪教狂信者",count:1},{ref:"棘魔",count:4},{ref:"卓尔",count:6}],battlefield:{family:"generic"},_meta:{sourcePages:[90],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_236",name:"龙之金库遭遇",sceneId:"scn_236",prelocked:!1,enemies:[{ref:"熊地精",count:6},{ref:"邪教狂信者",count:3},{ref:"邪教徒",count:3},{ref:"暴徒",count:3}],battlefield:{family:"generic"},_meta:{sourcePages:[94],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/surpriseHint"},surpriseHint:"enemies_hidden"},{id:"enc_23f",name:"摩拉丁大厅遭遇",sceneId:"scn_23f",prelocked:!1,enemies:[{ref:"黑布丁",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[95],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:surpriseHint"},surpriseHint:"enemies_hidden"},{id:"enc_24b",name:"主金库遭遇",sceneId:"scn_24b",prelocked:!1,enemies:[{ref:"成年金龙",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[96],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:trigger"},trigger:{type:"item_owned",itemRef:"阿盖尔伦的龙杖"}},{id:"enc_25c",name:"春季疯狂遭遇",sceneId:"scn_25c",prelocked:!1,enemies:[{ref:"巨魔",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[99],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：脚本把两名城市守卫（老兵）当成了敌人——原文「如果角色们介入，两名城市守卫老兵会与他们并肩作战」，属友方，已从敌方名单剔除。唯一敌人是巨魔潮上放出的那只巨魔：戴无眼头盔处于目盲状态、脚镣使速度降至 20 尺、该状态下 CR 4（1,100 XP）。两名守卫在同一先攻值行动，且每轮有 20% 非累积几率再来一名老兵增援（友方增援，不入敌方名单）。；overlay覆写:enemies/_meta"}},{id:"enc_277",name:"眼魔僵尸守卫遭遇",sceneId:"scn_277",prelocked:!1,enemies:[{ref:"眼魔丧尸",count:1},{ref:"毒气孢子",count:4}],battlefield:{family:"generic"},_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：名单与原文一致（眼魔丧尸 1 + 气孢菌 4）。补充口径：眼魔僵尸放行任何挥舞姗娜萨标志的生物，否则才攻击；气孢菌不主动攻击，受到任何伤害即爆炸，眼魔僵尸免疫其死亡爆发。；overlay覆写:_meta"}},{id:"enc_27a",name:"血与财富之坑遭遇",sceneId:"scn_27a",prelocked:!1,enemies:[{ref:"牛头人",count:1},{ref:"匪徒",count:10},{ref:"熊地精",count:5},{ref:"地精",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[102],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档核对：匪徒数量修正 1→10（原文「十个人类匪徒和五个熊地精在看台上」）。牛头人是竞技场战士，正在与半身人萨马拉·强骨对打，只有在角色干预时观众才「变得暴力并攻击他们」——整场遭遇是干预触发，非入场即战。存疑：两名地精是端咸味老鼠肠和血蝇肉馅派的侍从，是否参战原文未明写，暂留在名单内。阿莫戈与诺思卡·厄格雷在场（壁龛台阶上）但走 NPC 通道，未加进敌方 ref。；overlay覆写:enemies/_meta"}},{id:"enc_283",name:"公会兵营遭遇",sceneId:"scn_283",prelocked:!1,enemies:[{ref:"匪徒",count:10}],battlefield:{family:"generic"},_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：地精为误报——原文只提到墙上有用通用语、矮人语、地精语和地底共同语写的涂鸦，房里没有地精。匪徒 1→10（十名人类匪徒在此睡觉）。他们醉得接下来几个小时不会醒来（除非受到伤害），且只要保持醉酒就处于中毒状态。；overlay覆写:enemies/surpriseHint/_meta"},surpriseHint:"none"},{id:"enc_285",name:"诺斯卡的住处遭遇",sceneId:"scn_285",prelocked:!1,enemies:[{ref:"锈蚀怪",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：锈蚀怪是诺斯卡养在大木笼里的宠物，原文「锈蚀怪物在被囚禁在里面时无法伤害任何人」——不开笼不成战。已改为由 evt_285_e1（拨开笼门门闩）触发。；overlay覆写:trigger/_meta"},trigger:{type:"event_fired",eventId:"evt_285_e1"}},{id:"enc_288",name:"Ahmaergo的收藏遭遇",sceneId:"scn_288",prelocked:!1,enemies:[{ref:"骷髅牛头人",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：骷髅牛头人不是站在房里的守卫，而是藏在填充牛头人标本里——「当除了阿莫戈之外的人打开南门时，填充的牛头人的骨架会从皮肤中爆发出来」。已改为 evt_288_e2 触发并标 enemies_hidden。它会追击逃入 X8 或 X12 的人，并服从阿莫戈的命令。；overlay覆写:trigger/surpriseHint/_meta"},trigger:{type:"event_fired",eventId:"evt_288_e2"},surpriseHint:"enemies_hidden"},{id:"enc_29a",name:"听众大厅遭遇",sceneId:"scn_29a",prelocked:!1,enemies:[{ref:"卓尔魔法师",count:1},{ref:"触须怪",count:1},{ref:"匪徒",count:10,condition:{type:"npc_present",npcId:"npc_4e2"}},{ref:"灰矮人",count:2,condition:{type:"npc_present",npcId:"npc_4e2"}}],battlefield:{family:"generic"},_meta:{sourcePages:[107],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：匪徒 1→10；十名匪徒与两名灰矮人是来听布道的听众，原文「如果姗娜萨在其他地方，这个房间只包含Nar'l和触须怪」——已按 npc_present(姗娜萨) 条件分组。卓尔魔法师=纳尔·泽布林达斯，受伤后会从地板陷阱门逃往 X35，触须怪掩护他撤退。；overlay覆写:enemies/_meta"}},{id:"enc_2a6",name:"疯狂的前厅遭遇",sceneId:"scn_2a6",prelocked:!1,enemies:[{ref:"寇涛驱策者",count:1},{ref:"寇涛",count:6}],battlefield:{family:"generic"},_meta:{sourcePages:[110],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_2ab",name:"提取室遭遇",sceneId:"scn_2ab",prelocked:!1,enemies:[{ref:"夺心魔",count:1,condition:{type:"not",clause:{type:"encounter_cleared",encounterId:"enc_2b1"}}},{ref:"噬脑怪",count:1,condition:{type:"not",clause:{type:"encounter_cleared",encounterId:"enc_2b1"}}}],battlefield:{family:"generic"},_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：卓尔（Zaibon Kyszalt）是被铐在石椅上的俘虏，不是敌人——敌意误报，已剔除。真正的敌人是尼希卢尔：原文「如果角色们还没有处理尼希卢尔，当他们与Zaibon互动时，灵吸怪会中断他们的行动，从X26进入，手里拿着一个噬脑怪」，故加 夺心魔 1 并按「enc_2b1 未清」条件挂载。；overlay覆写:enemies/_meta"}},{id:"enc_2b1",name:"吞噬者孵化池遭遇",sceneId:"scn_2b1",prelocked:!1,enemies:[{ref:"噬脑怪",count:4},{ref:"夺心魔",count:1,condition:{type:"not",clause:{type:"encounter_cleared",encounterId:"enc_2ab"}}}],battlefield:{family:"generic"},_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：数量与原文一致（池中四只噬脑怪）。夺心魔加条件——原文「如果尼希卢尔在其他地方没有被遇到并击败，它将站在水池中」。尼希卢尔与噬脑怪在此死战；角色逃跑时它派噬脑怪追击，自己留守。；overlay覆写:enemies/_meta"}},{id:"enc_2b2",name:"监狱遭遇",sceneId:"scn_2b2",prelocked:!1,enemies:[{ref:"寇涛驱策者",count:3}],battlefield:{family:"generic"},_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：老兵为敌意误报——那是被关在最西端牢房、休假时被绑架、没有盔甲和武器的城市警卫队长海乌斯图斯·斯塔杰特（若他已死则替换为女性人类警卫官员 Cressa Galavarco），属待救 NPC。三名寇涛驱策者攻击除尼希卢尔外任何进入者（包括其他寇涛鱼人），其中一名持牢门钥匙挂在环上。；overlay覆写:enemies/_meta"}},{id:"enc_2b5",name:"公会娱乐大厅遭遇",sceneId:"scn_2b5",prelocked:!1,enemies:[{ref:"匪徒",count:10}],battlefield:{family:"generic"},_meta:{sourcePages:[111],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档核对：匪徒 1→10。两名地精（Lulz 与 Vellix）是侍者，原文「如果发生战斗，他们会躲在桌子下面，如果角色们获胜，他们会向队伍求饶」——敌意误报，已剔除。存疑：若诺思卡·厄格雷不在竞技场，他就在这里同饮，应作为额外敌人加入，但其 ref 未在本 pack 的怪物名单内，故未写进 enemies。；overlay覆写:enemies/_meta"}},{id:"enc_2ba",name:"Xanathar的美食厨房遭遇",sceneId:"scn_2ba",prelocked:!1,enemies:[{ref:"凝视者眼魔",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[112],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：狗头人为敌意误报——原文「凝视兽在看到入侵者时会发起攻击，而狗头人则会寻找最简便的路线逃跑」。真正的敌人是两只由姗娜萨梦境创造的凝视者眼魔（监督狗头人、用念力射线端托盘）。七名戴白色厨师帽的狗头人厨师仍在场，作非战斗单位演出。；overlay覆写:enemies/_meta"}},{id:"enc_2e4",name:"卡萨兰特别墅遭遇",sceneId:"scn_2e4",prelocked:!1,enemies:[{ref:"警卫",count:6}],battlefield:{family:"generic"},_meta:{sourcePages:[117],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原文「任何时候都有六名守卫在庄园内巡逻」（另有外门2名、前门2名，同一批雇佣守卫）。删除脚本误报的驮用马/乘用马（马车房里的坐骑，非敌对）；四十名城市守卫老兵是守卫报警后封锁物业的升级层，不属本遭遇。；overlay覆写:enemies/_meta"}},{id:"enc_2f8",name:"门厅遭遇",sceneId:"scn_2f8",prelocked:!1,enemies:[{ref:"警卫",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原文「两名穿着卡萨兰特家族制服的警卫在这个大理石地板的门厅里全天候站岗」，数量 1→2。；overlay覆写:enemies/_meta"}},{id:"enc_2fa",name:"维克托的办公室遭遇",sceneId:"scn_2fa",prelocked:!1,enemies:[{ref:"Animated Armor",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：铠甲只在维克托不在场、且有人无钥匙开门或非卡萨兰特血统者打开书桌时才动手，故挂 evt_2fa_e1 触发；数量正确不动。；overlay覆写:enemies/trigger/_meta"},trigger:{type:"event_fired",eventId:"evt_2fa_e1"}},{id:"enc_303",name:"厨房遭遇",sceneId:"scn_303",prelocked:!1,enemies:[{ref:"凌空剑",count:10},{ref:"邪教狂信者",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原文「十把刀从柜台上神奇地升起并攻击。这些刀是凌空剑」，数量补足为 10；主厨詹达尔·切尔戈巴是提夫林邪教狂信者，喊出 For'zaal 后参战。删除六位厨师（人类平民，非敌对旁观者）。ref「邪教狂信者」沿用脚本在本章既有写法。；overlay覆写:enemies/_meta"}},{id:"enc_308",name:"吸烟室遭遇",sceneId:"scn_308",prelocked:!1,enemies:[{ref:"警卫",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[121],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_30f",name:"宴会厅遭遇",sceneId:"scn_30f",prelocked:!1,enemies:[{ref:"餐桌拟身怪|WDH",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原文只有一只——「唯一的家具是一张长长的木制餐桌，它实际上是一只巨大的拟身怪伪装而成」；脚本把「餐桌拟身怪」与其基底「拟身怪」拆成两只，属重复计数。伪装成长桌 → surpriseHint enemies_hidden。；overlay覆写:enemies/surpriseHint/_meta"},surpriseHint:"enemies_hidden"},{id:"enc_31b",name:"亚麻壁橱遭遇",sceneId:"scn_31b",prelocked:!1,enemies:[{ref:"闷人毯",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原文「这个房间里堆放的两个羽绒被是闷人毯」，数量 1→2；伪装成折叠亚麻堆中的羽绒被 → surpriseHint enemies_hidden。它们只攻击非卡萨兰特家族成员及其仆人；此处任何战斗会引来 C17 的娜娜与 C19 的蒂西娜。；overlay覆写:enemies/surpriseHint/_meta"},surpriseHint:"enemies_hidden"},{id:"enc_325",name:"奥斯瓦尔多的监狱遭遇",sceneId:"scn_325",prelocked:!1,enemies:[{ref:"小魔鬼",count:2},{ref:"链魔",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原文「守卫这个房间的是两只以蜘蛛形态出现的小魔鬼」，数量 1→2；删除「老鼠」——那是小魔鬼奉命捕杀的害虫，不是敌人。链魔（奥斯瓦尔多）被锁链与五角星困住，只在有人试图释放他、或威胁在场家族成员时才参战；一旦五角星失效他会无差别攻击。；overlay覆写:enemies/_meta"}},{id:"enc_328",name:"蝴蝶花园遭遇",sceneId:"scn_328",prelocked:!1,enemies:[{ref:"小魔鬼",count:6}],battlefield:{family:"generic"},_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原文「六只以乌鸦形态出现的小魔鬼在蝴蝶花园周围徘徊」，数量 1→6。它们会警告阿玛利亚有入侵者，并攻击任何威胁她家人的人。；overlay覆写:enemies/_meta"}},{id:"enc_33a",name:"前厅遭遇",sceneId:"scn_33a",prelocked:!1,enemies:[{ref:"须魔",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[128],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档核对：原文「在邪教集会期间，每个通往 A7 的门前都有一只须魔守卫」——平时前厅无敌人。集会时点原文为每十天/每月第一天的午夜，故门挂 time_of_day midnight；门数未在原文给出，数量维持 1 待复核。；overlay覆写:trigger/_meta"},trigger:{type:"time_of_day",slot:"midnight"}},{id:"enc_33d",name:"家族墓穴遭遇",sceneId:"scn_33d",prelocked:!1,enemies:[{ref:"恶灵",count:3},{ref:"幽魂",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原文「三团黑暗的雾气状恶灵和一个……幽魂」，数量补足。这些不死生物无法离开墓穴，也无法接近佩戴阿斯蒙蒂斯圣徽者5尺内；若角色佩戴或展示西亚摩菲的圣徽，幽魂（卡拉多恩）会停止攻击并撤走恶灵。；overlay覆写:enemies/_meta"}},{id:"enc_355",name:"海之少女集市遭遇",sceneId:"scn_355",prelocked:!1,enemies:[{ref:"卓尔魔法师",count:1},{ref:"Drow Elite Warrior",count:3},{ref:"卓尔",count:17}],battlefield:{family:"generic"},_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档核对：按 35d「警报」原文校正为全船员编制（1 卓尔魔法师船长 + 3 卓尔精英武者 + 17 卓尔）。删「平民」（厨师/随行表演者/驯兽师，原文明示只在自卫时才战斗、遇入侵者只会呼救）与「活化盔甲」（那是 J31 训练区贾拉索用附赠动作激活的五个人体模型，非船员警报编制）。卓尔倾向俘虏而非杀死，俘虏关进 J15 囚笼、装备存入 J16 军械库。；overlay覆写:enemies/_meta"}},{id:"enc_3ae",name:"贾拉克西尔的客舱遭遇",sceneId:"scn_3ae",prelocked:!0,enemies:[{ref:"机械蜘蛛群|WDH",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档核对：原文只有一个群集——「机械蜘蛛群」用「蜘蛛群」的数据（含变更），脚本把数据基底当成了第二队敌人，删。改 prelocked=true：它只在掀开木箱盖时释放，由 evt_3ae_e1 的 spawn_encounter 拉起，不应在进场时自动开打。；overlay覆写:enemies/prelocked/_meta"}},{id:"enc_3b5",name:"控制室遭遇",sceneId:"scn_3b5",prelocked:!1,enemies:[{ref:"Drow Elite Warrior",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档核对：删「人鱼」（原文是深水港里好奇的人鱼隔着玻璃钢舷窗往里看，非敌）与「工程师|WDH」（三名岩石侏儒是中立善良的操舵/仪表人员，非战斗人员）。真正的敌人是监工的两名卓尔精英武者卡拉巴尔·伦兹与马罗·卡扎特。；overlay覆写:enemies/_meta"}},{id:"enc_3d2",name:"科拉特塔遭遇",sceneId:"scn_3d2",prelocked:!1,enemies:[{ref:"老兵",count:7}],battlefield:{family:"generic"},_meta:{sourcePages:[148],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/trigger"},trigger:{type:"event_fired",eventId:"evt_3d2_e1"}},{id:"enc_3db",name:"餐厅遭遇",sceneId:"scn_3db",prelocked:!1,enemies:[{ref:"老兵",count:1},{ref:"暴徒",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[149],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_3de",name:"厨房遭遇",sceneId:"scn_3de",prelocked:!1,enemies:[{ref:"魔法师",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[149],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_3e1",name:"霉味图书馆遭遇",sceneId:"scn_3e1",prelocked:!1,enemies:[{ref:"石像鬼",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/surpriseHint"},surpriseHint:"enemies_hidden"},{id:"enc_3e6",name:"主塔平台和壁架遭遇",sceneId:"scn_3e6",prelocked:!1,enemies:[{ref:"拟身怪",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:surpriseHint"},surpriseHint:"enemies_hidden"},{id:"enc_3ea",name:"阅览室遭遇",sceneId:"scn_3ea",prelocked:!1,enemies:[{ref:"暴徒",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_3f4",name:"法杖展示区遭遇",sceneId:"scn_3f4",prelocked:!1,enemies:[{ref:"飞杖|WDH",count:6}],battlefield:{family:"generic"},_meta:{sourcePages:[152],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/surpriseHint"},surpriseHint:"enemies_hidden"},{id:"enc_3fa",name:"仆人区遭遇",sceneId:"scn_3fa",prelocked:!1,enemies:[{ref:"暴徒",count:4}],battlefield:{family:"generic"},_meta:{sourcePages:[153],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_3fc",name:"召唤室遭遇",sceneId:"scn_3fc",prelocked:!1,enemies:[{ref:"学徒法师|VGM",count:3},{ref:"恶猿魔",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[153],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_3fd",name:"构造物工坊遭遇",sceneId:"scn_3fd",prelocked:!1,enemies:[{ref:"活化盔甲",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[153],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:surpriseHint"},surpriseHint:"enemies_hidden"},{id:"enc_400",name:"血肉魔像遭遇",sceneId:"scn_400",prelocked:!1,enemies:[{ref:"血肉魔像",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[153],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_403",name:"奥术符文遭遇",sceneId:"scn_403",prelocked:!1,enemies:[{ref:"史拉红蟾",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:trigger"},trigger:{type:"event_fired",eventId:"evt_403_e1"}},{id:"enc_406",name:"杜拉克的卧室遭遇",sceneId:"scn_406",prelocked:!1,enemies:[{ref:"燃焰之颅",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_409",name:"杜拉克的私人图书馆遭遇",sceneId:"scn_409",prelocked:!1,enemies:[{ref:"书群|WDH",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/surpriseHint"},surpriseHint:"enemies_hidden"},{id:"enc_40b",name:"传送圈遭遇",sceneId:"scn_40b",prelocked:!1,enemies:[{ref:"观察者眼魔",count:1},{ref:"飞蛇",count:4}],battlefield:{family:"generic"},_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_417",name:"门厅遭遇",sceneId:"scn_417",prelocked:!1,enemies:[{ref:"赞特武术专家|WDH",count:2},{ref:"魔法师",count:1},{ref:"剑客|VGM",count:1},{ref:"吟游诗人|VGM",count:1},{ref:"曼松的拟像|WDH",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[157],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/trigger"},trigger:{type:"event_fired",eventId:"evt_417_e1"}},{id:"enc_41b",name:"守卫站遭遇",sceneId:"scn_41b",prelocked:!1,enemies:[{ref:"魔法师",count:1},{ref:"土元素",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[158],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"}},{id:"enc_42a",name:"接见室遭遇",sceneId:"scn_42a",prelocked:!1,enemies:[{ref:"赞特武术专家|WDH",count:2}],battlefield:{family:"generic"},_meta:{sourcePages:[159],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}},{id:"enc_430",name:"Manshoon的书房遭遇",sceneId:"scn_430",prelocked:!1,enemies:[{ref:"Animated Armor",count:1}],battlefield:{family:"generic"},_meta:{sourcePages:[160],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:surpriseHint"},surpriseHint:"enemies_hidden"},{id:"enc_435",name:"特殊事件遭遇",sceneId:"scn_435",prelocked:!1,enemies:[{ref:"贵族",count:1},{ref:"警卫",count:6},{ref:"老兵",count:8}],battlefield:{family:"generic"},_meta:{sourcePages:[161],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies"}}],i=[{id:"qst_main_dragonheist",title:"龙金劫：五十万金龙的下落",chapterId:"049",stages:[{id:"stage_main_1",title:"龙金劫：五十万金龙的下落",objectives:[{id:"obj_main_0",type:"narrative",description:"第1章：需要帮助的朋友：Volo给冒险者们一个任务，并以一块地产作为他们的奖励。"},{id:"obj_main_1",type:"narrative",description:"第2章：巨魔头骨巷：冒险者们安顿进他们的新庄园，并与邻居们见面。"},{id:"obj_main_2",type:"narrative",description:"第3章：火球：巨魔头骨巷中发生了火球爆炸，引发了一项调查。"},{id:"obj_main_3",type:"narrative",description:"第4章：龙之季节：冒险者们加入寻找并打开龙之宝库的竞赛。"},{id:"obj_main_4",type:"narrative",description:"挪用黄金：Lord Dagult Neverember挪用了五十万金币，并将它们藏在龙之宝库中。"},{id:"obj_main_5",type:"narrative",description:"石雕工艺：Dagult Neverember雇佣了一位法师来创造Golorr之石，然后将这件神器藏在深水城宫殿中。"},{id:"obj_main_6",type:"narrative",description:"Dagult被罢免：达格特离开深水城去重建无冬城，并被赶下深水城开放领主的位置。"},{id:"obj_main_7",type:"narrative",description:"石头被盗：Golorr之石从深水城宫殿被盗，最终落入Xanathar的手中。"},{id:"obj_main_8",type:"narrative",description:"石头再次被盗：当忠于Manshoon的Zhents试图与Xanathar结盟时，Golorr之石被盗。"},{id:"obj_main_9",type:"narrative",description:"联盟结束：当Xanathar指责Zhents偷走了高洛石，而他们并没有这么做时，战争爆发了。"},{id:"obj_main_10",type:"narrative",description:"Dalakhar逃离：Dalakhar，一个为Dagult工作的侏儒小偷，试图将Golorr之石偷运出深水城。"},{id:"obj_main_11",type:"narrative",description:"达拉卡尔去世：Dalakhar被火球法术杀死。Urstul Floxin从Dalakhar的尸体上偷走了Golorr之石。"},{id:"obj_main_12",type:"narrative",description:"第5章：春日疯狂：冒险者们侵入城市下方Xanathar的地牢，并在其巢穴中面对那个眼魔。"},{id:"obj_main_13",type:"narrative",description:"第6章：炎热的夏天：冒险者们突袭卡萨兰特庄园并做出了一个恶魔般的发现。"},{id:"obj_main_14",type:"narrative",description:"第7章：大师的陨落：冒险者们登上了Jarlaxle的船只，并了解到Sea Maidens Faire的阴险秘密。"},{id:"obj_main_15",type:"narrative",description:"第8章：冬季魔法：冒险者们在Kolat Towers寻找Manshoon的克隆体，并找到了他的跨维度藏身之处。"}]}],_meta:{sourcePages:[10],confidence:"medium",needsReview:!0,extractorNotes:"主线：取自冒险故事结构流程图（config.mainQuest）"}}],c=[{id:"evt_04a_e1",sceneId:"scn_04a",trigger:{type:"encounter_cleared",encounterId:"enc_04a"},once:!0,effects:[{kind:"reveal_info",infoId:"info_04a_g5"}],narrationHint:"怪物一倒下，一个戴软帽、系围巾的男人就逆着往门口挤的客人走过来，对角色的胆识大加称赞，然后请他们找张桌子坐下谈谈；他先摆出几分神秘，说着说着眼眶就红了。",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「一旦巨魔和蚊蝠被处理掉，Volo 就会……向角色们打招呼」。"}},{id:"evt_063_e1",sceneId:"scn_063",trigger:{type:"player_action",verbClass:"other"},once:!0,effects:[{kind:"reveal_info",infoId:"info_063_g1"}],narrationHint:"叩门声的回音还没落，门后就传来家具被慌忙拖动的窸窣声，接着是刻意的安静。",_meta:{sourcePages:[24],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文「敲门或窗户会提醒里面一群天狗有人来了」，天狗随即躲到翻倒的家具后（等于放弃角色的突袭）。verbClass 无「敲门」值，取 other + targetRef 表达，待人工确认。；targetRef自由文本「仓库前门」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_049_e1",sceneId:"scn_063",trigger:{type:"npc_present",npcId:"npc_4d2"},once:!0,effects:[{kind:"reveal_info",infoId:"info_049_g2"}],narrationHint:"仓库门被推开，一位队长带着一打佩章的老兵鱼贯而入，抬手示意所有人原地不动；他的人开始翻检现场，他自己走向角色。",_meta:{sourcePages:[27],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文「角色们找到雷纳尔不久后，一位名叫海斯特斯·斯泰格特的城市警卫队长带领一打老兵来到仓库」。以「雷纳尔在场」近似「已找到雷纳尔」，待人工确认。守卫非敌意，故未产遭遇。"}},{id:"evt_06b_e1",sceneId:"scn_06b",trigger:{type:"player_action",verbClass:"open"},once:!1,effects:[{kind:"reveal_info",infoId:"info_06e_g1"}],narrationHint:"暗门刚被拉开，楼上就炸开一片钢铃的乱响，声音顺着楼梯滚下来，在空仓库里来回撞。",_meta:{sourcePages:[26],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：原文 Z3「当秘密门被打开时，角色们可以听到上方办公室里微弱的钟声」+ Z5「这些铃铛通过电线与 Z3 的秘密门相连，当那扇门被打开时，它们会大声响起」。可重复触发故 once=false。；targetRef自由文本「密室暗门」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_078_e1",sceneId:"scn_078",trigger:{type:"player_action",verbClass:"speak"},once:!0,effects:[{kind:"spawn_encounter",encounterId:"enc_07b"}],narrationHint:"话音在圆形的枢纽里荡开，两道相对的箭缝后先是一阵摸索声，接着是弩弦的脆响。",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「如果角色在这里大声说话或以其他方式发出很大声响，Q2a 和 Q2b 的哥布林哨兵会醒来，并通过箭缝向他们射击」；箭缝给地精四分之三掩护。"}},{id:"evt_089_e1",sceneId:"scn_089",trigger:{type:"item_used",itemRef:"石眼",targetRef:"石柱凹槽"},once:!1,effects:[{kind:"unlock_passage",locationId:"loc_077",toLocationId:"loc_269"}],narrationHint:"石球嵌进凹坑的一瞬，南墙无声地裂开一扇齐人高的黑门，门里既没有光，也照不出对面。",_meta:{sourcePages:[29,30],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：单向传送门，石眼取下 1 分钟后关闭（schema 无「限时关闭」表达，写入 inf_089_g1 与本 narrationHint 上下文）。目的地 X22（scn_2a5）位于 loc_269 沙纳萨的巢穴。"}},{id:"evt_08e_e1",sceneId:"scn_08e",trigger:{type:"npc_present",npcId:"npc_4b2"},once:!0,effects:[{kind:"grant_item",itemRef:"巨颅庄园地契"}],narrationHint:"独自坐着喝闷酒的沃洛一看见门口的人影就跳起来，把弗伦连人带斗篷抱了个满怀；随后他有点窘迫地掏出一只卷轴筒，说硬币不多，但绝不食言。",_meta:{sourcePages:[30],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文「带着福卢恩·布拉格玛返回打哈欠门户标志着这个入门任务的结束」。以「弗伦出现在本幕」近似「把弗伦带回沃洛面前」，待人工确认。地契过户另需 25 金币税、由提夫林法官 Kylinne Silmerhelve 见证；里程碑升级 1→2 无对应 WorldEffect kind，未落账。"}},{id:"evt_0a6_e1",sceneId:"scn_094",trigger:{type:"player_action",verbClass:"speak"},once:!0,effects:[{kind:"reveal_info",infoId:"info_0a6_g2"}],narrationHint:"你朝阴影里那个身影走过去开口——它既没回话也没拔刀，只是退进更深的黑里。第二天早上，门槛上放着一枚黑色的眼罩。",_meta:{sourcePages:[35],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文『如果角色们试图面对黑暗精灵间谍，他们会避免接触，但会留下一个黑色眼罩作为名片』。verbClass 取 speak（上前搭话）承载『试图面对』，存疑；未挂 targetRef 以免触发器永不命中。"}},{id:"evt_0a6_e2",sceneId:"scn_094",trigger:{type:"player_action",verbClass:"speak",targetRef:"npc_49d"},once:!0,effects:[{kind:"pc_flag_set",flag:"bregan_surveillance_reported",pcScope:"all"}],narrationHint:"城市守卫记下了你们的描述，加派了几趟巡逻。那之后，阴影里的窥视一夜之间干净了，也再没有人来敲门。",_meta:{sourcePages:[35],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文『如果队伍向城市守卫报告了黑暗精灵，贾拉克斯利将结束监视，并暂时切断与角色们的所有联系』。后果只落 pc_flag（未用 set_npc_state 把贾拉索设 departed——他在后续章节仍要登场，全局改状态风险大）。targetRef=npc_49d（城市守卫）用于与 evt_0a6_e1 区分同 verbClass，若运行时不以 npc id 上报动作目标则本事件不触发，存疑待核。"}},{id:"evt_096_e1",sceneId:"scn_096",trigger:{type:"player_action",verbClass:"rest"},once:!1,effects:[{kind:"reveal_info",infoId:"info_096_g1"}],narrationHint:"没人碰的盘子从架上滑下来摔成碎片，酒桶塞子啵地弹开，穿堂风把灰扬得满屋都是。等尘土落定，积灰的地板上多出几个歪斜的大字：打烊时间！",_meta:{sourcePages:[31],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文只说作祟幽灵『无形中以新主人为代价制造麻烦』『如果角色们没有领会到暗示，它会在布满灰尘的地板和油腻的窗户上写下警告』，未给具体触发动作；verbClass 取 rest（角色在庄园安顿/过夜时最易撞上），存疑。未挂 targetRef（targetRef 精确相等匹配，挂场景/实体 id 会永不命中）。"}},{id:"evt_096_e2",sceneId:"scn_096",trigger:{type:"player_action",verbClass:"trade"},once:!0,effects:[{kind:"pc_flag_set",flag:"trollskull_tavern_reopening",pcScope:"all"}],narrationHint:"第一批木料抬进门那天，锤子声第一次盖过了摔碎的盘子。此后再没有一样东西被打翻：你要坐下时椅子自己被拉开，雨天进门有人接过你的外套，酒也已经倒好递到手边。",_meta:{sourcePages:[31,41],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文条件=角色致力于修复翻新、目标是再次向公众开放（一次性 1000 金币/12 天翻新 + 250 金币行会执照与合同），后果=利夫逐渐接受他们作为新主人并变得乐于助人。VerbClass 无『翻修/雇工』语义，取 trade（付钱雇工与采买）承载主支，存疑。本事件是 scn_0bb 的 activation 前置。"}},{id:"evt_0a5_e1",sceneId:"scn_0a5",trigger:{type:"player_action",verbClass:"open"},once:!1,effects:[{kind:"unlock_passage",locationId:"loc_095"}],narrationHint:"巷子东头那块金属栅栏能整块抬起来；底下一架铁梯直落二十尺，接进深水城的下水道。",_meta:{sourcePages:[33],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文『可移动的金属栅栏覆盖着一个开口。栅栏下面，一个梯子下降20尺进入深水城的下水道系统』。unlock_passage 只给 locationId=loc_095（pack 内暂无下水道 location 实体，toLocationId 留空不发明）。"}},{id:"evt_0bb_e1",sceneId:"scn_0bb",trigger:{type:"time_elapsed",duration:"10 days"},once:!1,effects:[{kind:"reveal_info",infoId:"info_0bb_g1"}],narrationHint:"那位被称作「石像鬼」的盾矮人法师推门进来要了一杯酒，构装盾卫留在门外等候。她一边喝，一边把梁、墙、地板挨个看过去，看完什么也没说。",_meta:{sourcePages:[41,42],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文『无论何时乌尔科里亚穿过北城区，她都会在酒馆停下来喝一杯，并检查这个地方』——未给周期，按酒馆经营的十日结算周期挂 time_elapsed 10 days，存疑。同一入口也是布罗克斯利/哈蒙德/贾斯汀等行会代表登门的时机。"}},{id:"evt_0bb_e2",sceneId:"scn_0bb",trigger:{type:"time_elapsed",duration:"10 days"},once:!1,effects:[{kind:"table_row_fire",tableId:"tbl_0bb_0"}],narrationHint:"夜里墙根传来指甲刮木头的声音；天亮后，外墙下多了几个新钻的小洞和撒开的食物碎屑，隔壁的门板上被刻了一张老鼠脸。城里开始有人说，你们那家店闹老鼠。",_meta:{sourcePages:[42],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：「埃梅克的计划」表（tbl_0bb_0）是按顺序推进的事件/动作清单而非随机表，table_row_fire 未指定 rowId 表示『按序推进下一步』，运行时语义存疑（也可能需要改用 rowId 逐条挂事件）。谣言的机械后果（接下来三次经营检定 -10）留在表行内，不入 narrationHint。"}},{id:"evt_0d0_e1",sceneId:"scn_0d0",trigger:{type:"player_action",verbClass:"take"},once:!0,effects:[{kind:"pc_flag_set",flag:"wdh_crime_scene_theft_witnessed",pcScope:"triggering"}],narrationHint:"袋子从烧焦的斗篷下滑出来的那一瞬，人群缝隙里有一双眼睛正好盯着这只手。",_meta:{sourcePages:[44],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：DC 13 敏捷（巧手）与 50 金币封口价写在 scn_0d0 的 dmGuidanceAppend，事件只落「被目击」这一世界状态。；targetRef自由文本「达拉卡尔的袋子」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_0db_e1",sceneId:"scn_0db",trigger:{type:"always"},once:!0,effects:[{kind:"deal_damage",dice:"1d3",damageType:"穿刺"}],narrationHint:"屋顶上的身影抬臂放出一只小小的金属麻雀。它在空中绕了几圈，忽然直直朝队伍中的一人扎下来，撞上之后连同齿轮一起碎了一地；那身影随即从屋顶的暗门缩了回去。",_meta:{sourcePages:[46],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文是掷先攻、机械鸟在先攻 10 行动（AC 15、1 生命值、飞行 60 尺、起始 60 尺外、+0 命中、命中造成 1d3 穿刺、命中或落空后均毁坏），此处压成一次即时伤害，机制近似待人工核。"}},{id:"evt_0ef_e1",sceneId:"scn_0ef",trigger:{type:"always"},once:!0,effects:[{kind:"set_npc_state",npcId:"npc_4c6",state:"departed"}],narrationHint:"庄园里刀兵正紧的时候，那具机械仆人揣着石头和一张画好去处的地图翻过院墙，消失在北城区的屋脊之间。",_meta:{sourcePages:[50,55],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「在角色们入侵格拉尔洪德别墅期间，秘偶携带着格洛尔之石逃离了庄园」，其逃脱是第4章的引信；若角色用探测器追踪，装置只会告诉他们目标已离开，不显示方向。本事件同时是 scn_11a / scn_11b / scn_122 的 activation 前置。"}},{id:"evt_0fd_e1",sceneId:"scn_0fd",trigger:{type:"player_action",verbClass:"break"},once:!0,effects:[{kind:"spawn_encounter",encounterId:"enc_0ef"}],narrationHint:"厚重的木门在门闩崩断时炸出一声闷响，半条街都听得见。几分钟后，街口传来一队人整齐的靴声。",_meta:{sourcePages:[52,50],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：原文强开需 DC 20 力量（运动）且「会发出很大的噪音」，与庄园概述的「邻居听到巨响会通知城市警卫，1d6+4 分钟到一名魔法师和六名警员」接上；enc_0ef 即该响应部队。；targetRef自由文本「食品储藏室闩住的后门」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_10a_e1",sceneId:"scn_10a",trigger:{type:"player_action",verbClass:"open"},once:!0,effects:[{kind:"spawn_encounter",encounterId:"enc_10a"}],narrationHint:"封皮掀开的刹那，三个手指细长的提夫林幽影从书页间渗出来，无声地扑向开锁的人。缚住它们的魔法早已朽坏，撑不过一分钟就会被放逐回以太位面。",_meta:{sourcePages:[53],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：仅在不用正确钥匙（夫人颈上）开书时触发；恶灵在书 10 尺内出现，只能在物质位面存在 1 分钟。；targetRef自由文本「讲台上上锁的皮面大书」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_13e_e1",sceneId:"scn_13e",trigger:{type:"player_action",verbClass:"move"},once:!1,effects:[{kind:"deal_damage",dice:"1d6",damageType:"挥砍",saveAbility:"敏捷",saveHalves:!1},{kind:"hazard",mechanic:"泥泞水坑下的弹簧式熊陷阱（地图上任选五格）。被动感知13或更高的生物在踩进去之前就能发现。踏入陷阱格的生物须进行 DC10 敏捷豁免，失败受 3（1d6）点挥砍伤害并被束缚，直到陷阱被移除；用一个动作、以一次成功的 DC12 力量（运动）检定可撬开陷阱。"}],narrationHint:"靴底踩进泥水的一瞬，水面下传来一声金属的咬合，铁齿猛地合拢在脚踝上。",_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：春季小巷。摩加会主动把角色推进最近的陷阱格。deal_damage 与 hazard 并列——前者供引擎落账，后者承载束缚与脱困的完整机制。"}},{id:"evt_13e_e2",sceneId:"scn_13e",trigger:{type:"player_action",verbClass:"move"},once:!0,effects:[{kind:"deal_damage",dice:"2d4",damageType:"钝击",saveAbility:"敏捷",saveHalves:!1},{kind:"hazard",mechanic:"失控的苹果车顺坡冲下。站在车道上的角色须过 DC10 敏捷豁免，失败受 5（2d4）点钝击伤害并倒地；角色也可以放弃敏捷豁免、改用身体拦车，须过 DC15 力量豁免，失败则被撞倒地而车继续滚。撞穿队伍后车侧翻，苹果散落满巷，戴眼罩的提夫林男孩被抛出车外但没有重伤。"}],narrationHint:"一整车苹果顺着坡道直冲过来，车顶上一个戴眼罩的提夫林男孩扯着嗓子尖叫：「小心——！」",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：秋季小巷，角色走到巷子中点时触发（原文给了朗读框）。男孩是三个小淘气之一斯奎迪利；另两个孩子随后赶到确认他没事，并向被撞伤的人诚恳道歉。"}},{id:"evt_157_e1",sceneId:"scn_157",trigger:{type:"player_action",verbClass:"attack"},once:!0,effects:[{kind:"hazard",mechanic:"街头顽童詹克斯跌穿薄冰，落点约在30尺外，两个同伴拽不动他。伸手可及的角色可用一个动作、以一次成功的 DC11 力量（运动）检定把他从冰水里拉出来。若他落水后1分钟内没有成年人施救，他会沉入水面以下并因冰冷海水开始溺水。"}],narrationHint:"风雪的另一头传来一声孩子的尖叫。透过飘雪，冰面上裂开一个黑洞，两只小手正扒着洞沿一点点往下滑。",_meta:{sourcePages:[68],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：冬季雾岸，与九名散塔林会暴徒的包围同时发生，是刻意设计的道德压力（打完还是救人）。触发时机原文写的是「当 Zhents 发动攻击而 Agorn 试图逃跑时」，Trigger 白名单无「遭遇开打」形态，折成 player_action/attack，故标 needsReview。若战况对队伍不利，会有两波援手：蕾米莉亚·港树派来的两名竖琴手间谍 Salazar Lorrance 与 Mavia Oxlander；仍不利则格林达·加洛斯现身用魔法帮忙。"}},{id:"evt_15a_e1",sceneId:"scn_15a",trigger:{type:"player_action",verbClass:"open"},once:!0,effects:[{kind:"hazard",mechanic:"海箱上施有守卫刻文。除格林达·加洛斯本人外，任何生物掀开箱盖都会触发爆炸符文效果，按《玩家手册》守卫刻文法术的爆炸符文描述结算。钥匙在格林达身上。"}],narrationHint:"箱盖刚抬起半寸，箱沿一整圈符文同时亮成刺眼的白。",_meta:{sourcePages:[65],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：箱内是死者之城加洛斯家族陵墓的沉重铁钥匙。伤害骰与类型由守卫刻文法术描述决定，原文未复述，故不写 deal_damage 以免编造数值。；targetRef自由文本「上锁的木制海箱」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_15c_e1",sceneId:"scn_15c",trigger:{type:"player_action",verbClass:"scavenge"},once:!1,chance:.5,effects:[{kind:"spawn_encounter",encounterId:"enc_15c"}],narrationHint:"港底的浑浊光线被一道灰影切断。它绕了半圈，估了一下你的大小，然后直冲过来。",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：格林达出借夸力许装置的条件是角色先花一天替她在深水港底搜宝、所得分她一半。原文「掷任意骰子，掷出偶数则觉醒鲨鱼奥布里特罗斯攻击」＝50%，落成 chance:0.5。搜宝结算：一天结束时驾驶员掷一次智力（调查），总分×10 即所获宝藏的金币价值。格林达因为怕吓跑角色，不会主动提这条鲨鱼。"}},{id:"evt_176_e1",sceneId:"scn_176",trigger:{type:"player_action",verbClass:"move"},once:!0,effects:[{kind:"deal_damage",dice:"5d8",damageType:"火焰",saveAbility:"敏捷",saveHalves:!0},{kind:"hazard",mechanic:"通往地下层的第一级台阶上施有守卫刻文，人形生物通过即触发：20尺半径的球形魔法火焰爆开，火焰会绕过拐角。区域内每个生物进行 DC15 敏捷豁免，失败受 22（5d8）点火焰伤害，成功减半。触发后刻文消失。除非先清除台阶上的积灰（造风术或其他手段），否则无法发现刻文；灰尘扫净后可经一次成功的 DC15 智力（调查）检定发现它。"}],narrationHint:"灰尘底下的刻痕骤然亮起，一团无声的火从台阶炸开，贴着墙面拐过弯追了上来。",_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：冬季线，布兰达斯陵墓。全部数值（DC15敏捷豁免/22（5d8）火焰/20尺半径/DC15智力调查）均为原文明写。"}},{id:"evt_176_e2",sceneId:"scn_176",trigger:{type:"player_action",verbClass:"open"},once:!0,effects:[{kind:"spawn_encounter",encounterId:"enc_176"}],narrationHint:"棺盖刚被撬开一指宽，六只干枯的断手就从缝里弹出来，指甲抓着石沿翻了出来。",_meta:{sourcePages:[71],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：冬季线。侦测魔法会揭示这具石棺散发变形光环。棺内是深水城魔法大师 Uld Brandath 的碎骨（几十年前被政府大楼掉落的石像鬼砸死），守护者是六只用被他判处死刑的谋杀犯之手制成的蠕行之爪，棺盖被举起或推开时弹出攻击；解决后可取回骨堆里 Uld 的智力头带。spawn_encounter 指向 enc_176（本 overlay 已把蠕行之爪修正为6），但该遭遇同时承载春季灰矮人伏击与冬季树人，实跑时需按季节裁剪，故标 needsReview。；targetRef自由文本「Uld Brandath 的石棺」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_1a8_e1",sceneId:"scn_1a8",trigger:{type:"item_owned",itemRef:"格洛尔之石"},once:!0,effects:[{kind:"hazard",mechanic:"曼松的拟像经 O5 的传送法阵抵达黄塔，前来收取格洛尔之石。若角色在拿到石头之前就有机会与远见毁掉传送法阵，拟像只能徒步赶来，角色因此获得得手后约1小时的撤离窗口。拟像会不知疲倦地追踪石头——雪地上的脚印会出卖逃跑路线。"}],narrationHint:"地窖方向传来一声闷响，空气里泛起一层霜。楼梯口站着一个和曼松一模一样的东西，皮肤白得像雪，一动不动地看着你手里的石头。",_meta:{sourcePages:[79],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：冬季线，黄塔（旧塔）。原文表述为「当他们最终获得石头时……曼松的拟像通过 O5 的传送法阵到达」，故 trigger 取 item_owned。拟像本体有 npc_4bc 档案但无对应 enc_，WorldEffect 侧无法用 spawn_encounter/spawn_pursuer 精确指代，只落 hazard 承载完整机制，故标 needsReview。拟像被击败后，角色可用石头得知龙之金库入口藏在死者之城布兰达斯家族陵墓之下（转遭遇4）。"}},{id:"evt_1e2_e1",sceneId:"scn_1e2",trigger:{type:"player_action",verbClass:"break",targetRef:"scn_1e2"},once:!0,chance:75,effects:[{kind:"hazard",mechanic:"1d10 分钟后，两名老兵城市守卫抵达假发店调查并与目击者交谈"}],narrationHint:"店面在显眼位置，撬门的动静落进了路人眼里；有人快步朝街角的岗哨去了。",_meta:{sourcePages:[85],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：春季分支闯入丹迪摩普斯假发店有 75% 几率被注意。响应的两名老兵城市守卫在 pack 中没有对应 encounter 实体，暂以 hazard 文本承载，待补 encounter 后改 spawn_encounter。"}},{id:"evt_1ed_e1",sceneId:"scn_1ed",trigger:{type:"player_action",verbClass:"scavenge",targetRef:"scn_1ed"},once:!0,effects:[{kind:"table_roll",tableId:"tbl_1ed_0"}],narrationHint:"落满灰的家具挤在墙边：一张有划痕的木桌、几把摇晃的椅子、一个衣帽架、两张小桌和一只空木箱。",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：B9b 原文给 25% 几率其中一件家具（随机确定）是拟身怪，并附 d100 表 tbl_1ed_0。"}},{id:"evt_20a_e1",sceneId:"scn_20a",trigger:{type:"player_action",verbClass:"move",targetRef:"scn_20a"},once:!0,effects:[{kind:"hazard",mechanic:"W4b 的地板在第一个小型或更大生物走过时坍塌：站在该区域的生物坠落 20 尺落入 W4a"},{kind:"deal_damage",dice:"1d8",damageType:"钝击",saveAbility:"敏捷",saveHalves:!0}],narrationHint:"第一只脚踩实的瞬间，脚下的楼板发出一声闷响，然后整片塌了下去。",_meta:{sourcePages:[87],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：deal_damage 覆盖的是 W4a 侧被落顶砸中的生物（DC 11 敏捷豁免，失败 1d8 钝击、成功半伤）；W4b 侧的 20 尺坠落由 hazard 文本承载——WorldEffect 无坠落 kind，且 deal_damage 无 saveDC 槽，DC 11 只能写进 hazard，属 schema 缺口。拥有石工天赋或熟练石匠工具的角色可提前判断地板不安全。"}},{id:"evt_239_e1",sceneId:"scn_239",trigger:{type:"player_action",verbClass:"use",targetRef:"scn_239"},once:!0,effects:[{kind:"unlock_passage",toLocationId:"loc_236"}],narrationHint:"钢门上那行铭文亮了一瞬，两扇门无声地分开，滑进两侧的墙里。",deviceSpec:{deviceId:"dev_239_vault_door",states:["closed","open"],initial:"closed",transitions:[{from:"closed",action:"把三把正确的钥匙带到门 5 尺范围内",to:"open",effects:[{kind:"unlock_passage",toLocationId:"loc_236"}]},{from:"open",action:"说出关闭双门的命令词",to:"closed",inputs:{kind:"password",value:"Azaam"},effects:[]}]},_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：V1 宝库门。虚幻版本的钥匙打不开门；门无法强开或损坏，用魔法绕过自动失败——故只保留钥匙与命令词两条状态转移。"}},{id:"evt_23d_e1",sceneId:"scn_23d",trigger:{type:"player_action",verbClass:"move",targetRef:"scn_23d"},once:!1,effects:[{kind:"hazard",mechanic:"壁画 30 尺内且能看见它的每个生物须成功通过 DC 12 感知豁免，否则被魅惑 24 小时：无法自愿离开壁画视线、誓死保护它、无法休息；24 小时后获得一级力竭并可重复豁免，成功即结束；豁免成功者 24 小时内免疫该壁画"}],narrationHint:"北墙那幅矮人斩杀地精的壁画在昏暗里颜色仍旧鲜活，看着看着，脚就不太想挪开了。",_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：V3「迷人的壁画」。once:false —— 原文按生物逐个豁免，进入视线范围就要判。"}},{id:"evt_247_e1",sceneId:"scn_247",trigger:{type:"player_action",verbClass:"speak",targetRef:"scn_247"},once:!0,effects:[{kind:"unlock_passage",locationId:"loc_236"},{kind:"reveal_info",infoId:"info_247_g2"}],narrationHint:"话音落地，地板中央一块石板毫无征兆地翻转过来，露出一道向下旋去的石阶。",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：V7「秘密楼梯」——只在有生物大声说出一个真实且此前未曾透露过的秘密时触发；该陷阱门无法用魔法或搜索找到。"}},{id:"evt_249_e1",sceneId:"scn_249",trigger:{type:"player_action",verbClass:"touch",targetRef:"scn_249"},once:!1,effects:[{kind:"hazard",mechanic:"触碰虚假活板门或其拉环者须成功通过 DC 18 敏捷豁免；成功则不受伤害。目标拥有全身掩护时陷阱不触发"},{kind:"deal_damage",dice:"4d10",damageType:"火焰",saveAbility:"敏捷",saveHalves:!1}],narrationHint:"手指刚碰上那只拉环，戴面具的矮人雕像双眼就亮了起来。",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：V8「陷阱」。DC 18 与全身掩护豁免例外只能写进 hazard——deal_damage 无 saveDC 槽，属 schema 缺口。"}},{id:"evt_27f_e1",sceneId:"scn_27f",trigger:{type:"player_action",verbClass:"speak"},once:!0,effects:[],narrationHint:"小丑在两尊石化的雕像之间倒立着念完谜面，铃铛随着他的话音一停：「我带着微笑而来；在屠杀中，我休息；我可能会传染，但我的药是最好的。我是什么？」答对了，他会翻个跟头落地，笑得前仰后合，痛快地领路；答错了，他把小包里的粉末往自己身上一撒，人就没了，只剩下远处铃铛越跑越远的声音。",deviceSpec:{deviceId:"dev_27f_riddle",states:["unanswered","answered","fled"],initial:"unanswered",transitions:[{from:"unanswered",action:"answer_correct",to:"answered",inputs:{kind:"password",value:"笑声"},effects:[{kind:"reveal_info",infoId:"info_27f_g1"}]},{from:"unanswered",action:"answer_wrong",to:"fled",effects:[]}]},_meta:{sourcePages:[104],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：X8「侏儒小丑」段。答案「笑声」为原文给定；答错＝他用无踪粉隐形逃走（无属性检定）。他不知道通往 X36 的密门。；targetRef自由文本「扑翼足·齐普斯威格的谜语」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_285_e1",sceneId:"scn_285",trigger:{type:"player_action",verbClass:"open"},once:!0,effects:[{kind:"spawn_encounter",encounterId:"enc_285"}],narrationHint:"门闩一拨开，笼里那只长着羽毛触须的东西立刻挤了出来，触须朝着队伍身上每一块金属的方向乱扫，尾巴在生锈的头盔堆上刮出刺耳的响声。",_meta:{sourcePages:[105],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：X10「木制笼子」段——「一个简单的门闩将笼子门保持关闭状态。锈蚀怪物在被囚禁在里面时无法伤害任何人。」不开笼不成战，故把 enc_285 改挂本事件。；targetRef自由文本「关着锈蚀怪的大木笼」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_288_e1",sceneId:"scn_288",trigger:{type:"player_action",verbClass:"touch"},once:!1,effects:[{kind:"hazard",mechanic:{spell:"迷宫术",saveDC:15,detect:"侦测魔法可见咒法系光环",cooldown:"触发后到下一次黎明前不再触发"}},{kind:"device_state_set",deviceId:"dev_288_maze",state:"spent"}],narrationHint:"指尖刚碰上那座手工凿出的石迷宫，模型的沟槽里就渗出一层灰白的光，四周的房间像被人抽走一样折叠起来——再睁眼时，人已经站在一条不属于这座地牢的走道里。",deviceSpec:{deviceId:"dev_288_maze",states:["armed","spent"],initial:"armed",transitions:[{from:"armed",action:"touch",to:"spent",check:{checkDC:15,checkSkill:"感知"},effects:[{kind:"hazard",mechanic:{spell:"迷宫术",saveDC:15}}]},{from:"spent",action:"dawn_reset",to:"armed",effects:[]}]},_meta:{sourcePages:[105],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：X11「石质迷宫」段——触碰者成为迷宫术法术的目标（豁免 DC 15），一旦触发到下一次黎明前不再触发。存疑：原文只给「豁免 DC 15」未指明属性，故 check 只落 DC 不落属性；deviceSpec.check 的 checkSkill 仅作占位。；targetRef自由文本「石板上的微型石制迷宫模型」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_288_e2",sceneId:"scn_288",trigger:{type:"player_action",verbClass:"open"},once:!0,effects:[{kind:"spawn_encounter",encounterId:"enc_288"}],narrationHint:"南门刚推开一条缝，房间北端那只怒视的填充牛头人猛地一抖，骨架从皮里炸了出来，抬手就从木架上抄起那把大斧。",_meta:{sourcePages:[105],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：X11「填充牛头人」段——只有阿莫戈本人开南门不会触发。骨架追击逃入 X8 或 X12 的人，并服从阿莫戈的命令。；targetRef自由文本「X11 的南门」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_28b_e1",sceneId:"scn_28b",trigger:{type:"player_action",verbClass:"move"},once:!0,effects:[{kind:"hazard",mechanic:{trap:"板条箱迷宫塌落",detectDC:12,detectSkill:"察觉",saveDC:12,saveAbility:"敏捷"}},{kind:"deal_damage",dice:"3d6",damageType:"钝击",saveAbility:"敏捷",saveHalves:!0}],narrationHint:"脚踝挂上一根绷紧的细线，头顶传来木料互相挤压的呻吟——整段板条箱墙一层压一层地塌了下来，黑暗里全是碎木和滚落的人骨。",_meta:{sourcePages:[105],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：X12 绊线段——DC 12 感知（察觉）发现（限队伍前导且正在搜索陷阱者），触发后每个在崩塌迷宫中的生物 DC 12 敏捷豁免，失败 10（3d6）钝击，成功减半。DC 无字段可落，写进 hazard.mechanic。；targetRef自由文本「阿莫戈迷宫中途的绊线」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_2ab_e1",sceneId:"scn_2ab",trigger:{type:"player_action",verbClass:"use"},once:!0,effects:[{kind:"reveal_info",infoId:"info_2ab_g1"}],narrationHint:"最后一副铁铐弹开的瞬间，椅子上的黑暗精灵整个人往前一栽，攥着自己的手腕喘了好几口气，才抬起头开始说话。",deviceSpec:{deviceId:"dev_2ab_manacles",states:["locked","unlocked"],initial:"locked",transitions:[{from:"locked",action:"pick_lock",to:"unlocked",check:{checkDC:15,checkSkill:"敏捷（盗贼工具）"},effects:[{kind:"reveal_info",infoId:"info_2ab_g1"}]},{from:"locked",action:"slip_free",to:"unlocked",check:{checkDC:25,checkSkill:"敏捷（巧手）"},effects:[{kind:"reveal_info",infoId:"info_2ab_g1"}]}]},_meta:{sourcePages:[110],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：X24 解铐段——每副镣铐可用盗贼工具 DC 15 敏捷检定开启，被缚者自行挣脱 DC 25 敏捷（巧手）；尼希卢尔另有一把能解锁的钥匙。DC 15/25 皆为原文数值。；targetRef自由文本「石椅扶手上的铁制手铐」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_2bf_e1",sceneId:"scn_2bf",trigger:{type:"player_action",verbClass:"touch"},once:!1,effects:[{kind:"hazard",mechanic:{effect:"绿色射线：命中者看似被瓦解，实为传送至 X34a 或 X34b（按下哪一颗按钮决定去向）",saveDC:16,saveAbility:"敏捷",note:"按钮触发后锁定 1 小时；盗贼工具 DC 20 敏捷检定可强行重置"}},{kind:"device_state_set",deviceId:"dev_2bf_button",state:"locked"}],narrationHint:"兜帽底下的那只石眼被按进墙里，中间那尊巨眼魔浮雕的主眼骤然亮起，一道绿光横扫过来——被扫中的人连一声都没来得及出，原地只剩下一圈慢慢散开的尘。",deviceSpec:{deviceId:"dev_2bf_button",states:["ready","locked"],initial:"ready",transitions:[{from:"ready",action:"press",to:"locked",effects:[]},{from:"locked",action:"force_reset",to:"ready",check:{checkDC:20,checkSkill:"敏捷（盗贼工具）"},effects:[]}]},_meta:{sourcePages:[113],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：X33「墙雕」段。按下按钮（手、物件或法术皆可）→ DC 16 敏捷豁免躲开绿色射线，未躲开者被传送进 X34a/X34b。WorldEffect 无「传送」kind，落在 hazard.mechanic。scn_2c4 的 activation 挂本事件。；targetRef自由文本「西墙浮雕上兜帽法师的眼睛按钮」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_2c4_e1",sceneId:"scn_2c4",trigger:{type:"player_action",verbClass:"touch"},once:!1,effects:[{kind:"hazard",mechanic:{effect:"墓室中所有生物立即被传送到竞技场（X6）",detect:"戴上魅惑镜片可透过蓝色镜片看见该瓦片；否则须以触觉搜索并通过 DC 17 感知检定找到"}}],narrationHint:"指尖压上那块冰凉的四角星瓦片，密封的石室连同灯光一起消失——脚下换成了浸透鲜血的沙子，头顶是四十尺高的圆顶，看台上的喧哗霎时静了半拍。",_meta:{sourcePages:[113],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：X34a/X34b 蓝瓦片段——两间墓室的瓦片功能完全相同，是被绿色射线传送进这两间封死石室后唯一的出路（出口直通竞技场 X6）。DC 17 感知为原文数值。X34a 另有石棺：室内施放任何法术会让棺盖上的眼睛睁开、棺盖升起 1 分钟，露出戴着魅惑镜片的干瘪木乃伊。；targetRef自由文本「西墙上形状像四角星的蓝色金属瓦片」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_2fa_e1",sceneId:"scn_2fa",trigger:{type:"player_action",verbClass:"open"},once:!0,effects:[{kind:"spawn_encounter",encounterId:"enc_2fa"}],narrationHint:"门内那具青铜盔甲的关节咔哒作响，头盔缓缓转向门口，戴着手套的双手握紧了那柄大剑。",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「当维克托不在场时，它会攻击任何没有钥匙就开门的人，或者任何不是卡萨兰特家族血统的人打开维克托的书桌」。触发限定（无钥匙／非血统／维克托不在场）无对应 schema 字段，记于此。卡萨兰特家的孩子知道这个构造物，会向友好的角色示警。"}},{id:"evt_305_e1",sceneId:"scn_305",trigger:{type:"player_action",verbClass:"take"},once:!0,effects:[{kind:"unlock_passage",locationId:"scn_305",toLocationId:"scn_2f2"}],narrationHint:"那瓶博德之门黑皮诺刚被从架上取下，酒架深处就传来一声闷响——整面墙已经可以推开了。",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「角色会发现从架子上拿起一瓶博德之门黑皮诺红酒可以解锁门并允许它被推开」。另一侧（图书馆 C3）的开法是倾斜家族肖像，见 inf_2f2_g1。"}},{id:"evt_31d_e1",sceneId:"scn_31d",trigger:{type:"player_action",verbClass:"open"},once:!0,effects:[{kind:"deal_damage",dice:"4d10",damageType:"毒素",saveAbility:"体质",saveHalves:!0}],narrationHint:"盖子底缘的一圈小孔嘶嘶地喷出黄绿色的浓气，转眼间就填满了床边十五尺方圆的空间。",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「如果箱子被除金钥匙以外的任何方式打开，毒气会从盖子底部的孔中喷出，填充以箱子为中心的15英尺半径的球形区域……必须进行一次 DC 13 体质豁免检定，若豁免失败则受到22（4d10）点毒素伤害，若成功则伤害减半。此陷阱无法被解除。」豁免 DC 13 无对应字段承载，记于此。"}},{id:"evt_31f_e1",sceneId:"scn_31f",trigger:{type:"player_action",verbClass:"pour"},once:!0,effects:[{kind:"reveal_info",infoId:"info_31f_g1"}],narrationHint:"一滴血落在空白页上，纸面浮出深红色的地狱文字，清晰得像是刚刚写下；血迹渗进纸里，再也擦不掉了。",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「如果任何一页上滴上一滴类人生物的血，那一页上的地狱文字就会变得清晰可读，并且会一直保持这样，直到书被合上。即使文字消失，血迹也会保留下来」。"}},{id:"evt_32c_e1",sceneId:"scn_32c",trigger:{type:"player_action",verbClass:"move"},once:!1,effects:[{kind:"deal_damage",dice:"8d8",damageType:"寒冷",saveAbility:"体质",saveHalves:!0}],narrationHint:"刺骨的魔法寒气瞬间灌满整间金库，霜花顺着铁门与墙面炸开，呼出的白气在半空就结成了冰屑。",deviceSpec:{deviceId:"dev_32c_frost",states:["armed","disarmed"],initial:"armed",transitions:[{from:"armed",action:"进入金库前说出口令「黄金是我的盾牌」",to:"disarmed",inputs:{kind:"password",value:"黄金是我的盾牌"},effects:[]},{from:"armed",action:"以解除魔法驱散天花板中央刻着的微小魔法符文",to:"disarmed",check:{checkDC:16},effects:[]}]},_meta:{sourcePages:[125],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文「如果生物在进入金库前没有先说出『黄金是我的盾牌』，一阵强烈的魔法寒冷将充斥整个房间……DC 16 体质豁免，失败36（8d8）寒冷伤害，成功减半」＋「侦测魔法揭示了禁用陷阱的秘密：天花板中央刻有一个微小魔法符文。如果通过成功施放解除魔法（DC 16）来驱散此符文，陷阱将停止运作」。豁免 DC 16 无字段承载；第二条 transition 的 check 只写 checkDC（原文是解除魔法法术检定，非技能检定，故不填 checkSkill）。金库本身是空的，寒冷陷阱是假金库唯一的「内容」。待复核：deviceSpec 与 trigger 的执行先后。"}},{id:"evt_32e_e1",sceneId:"scn_32e",trigger:{type:"player_action",verbClass:"touch"},once:!0,effects:[{kind:"unlock_passage",locationId:"scn_32e",toLocationId:"scn_330"}],narrationHint:"太阳符号在指下陷进石头，整面南墙无声地向内滑开，露出后面一段沉沉的黑暗。",_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「如果按下太阳符号，墙壁便会移动打开，显露出后面的 C29 区域」。这是别墅通往阿斯蒙蒂斯神庙的唯一书面通路（C29 后部有黑暗楼梯下行30尺到 A1）。"}},{id:"evt_338_e1",sceneId:"scn_338",trigger:{type:"player_action",verbClass:"move"},once:!0,effects:[{kind:"hazard",mechanic:"任何中型或更大的生物踏上阳台上标记为 C 的5尺方格时，须进行 DC 15 敏捷豁免：失败则地板碎裂塌陷，该生物跌落20尺至仪式大厅（A7）并陷入倒地，周围散落石块；成功则可跳到相邻的无人空间避免跌落。地板塌陷的声音在整座神庙都能听到。"}],narrationHint:"脚下的石板发出一声干裂的爆响，整块楼板连同栏杆的碎屑一起塌向下方的大厅。",_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文未给坠落伤害骰，故不写 deal_damage，全部机制留在 hazard.mechanic 内，避免臆造数值。"}},{id:"evt_345_e1",sceneId:"scn_345",trigger:{type:"player_action",verbClass:"attack"},once:!0,effects:[{kind:"deal_damage",dice:"2d10",damageType:"心灵"},{kind:"hazard",mechanic:"雕像裂开并碎成碎片，坠落时打碎了脚下那只九尺直径的祭祀碗；碗一旦不再完整，其中喷发的魔法火焰随之熄灭（此前任何进入火焰或在其中开始回合的生物受 4d10 火焰伤害，被降至0生命值者化为灰烬）。"}],narrationHint:"钉头锤落下的一瞬间，三十尺高的石像自胸口裂开，连同它掌中的石碗一起砸成满地碎块，火焰在碎石间迅速黯下去。",_meta:{sourcePages:[129],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文「如果雕像被瓦解之锤击中，它会裂开并碎成碎片，同时坠落时打碎了碗。任何目击雕像被摧毁的邪教成员会受到11（2d10）点心灵伤害」。待复核：deal_damage 无「仅作用于目击的邪教成员」这一目标限定字段，也无「仅瓦解之锤可致此」的武器限定字段，两条限制目前只能靠 _meta 与 hazard 文本承载。摧毁这尊雕像是原文列出的三条阻挠卡萨兰特家族的路径之一。；targetRef自由文本「阿斯蒙蒂斯雕像」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_355_e1",sceneId:"scn_355",trigger:{type:"player_action",verbClass:"open"},once:!1,effects:[{kind:"pc_flag_set",flag:"zardoz_cabin_alarm",pcScope:"triggering"}],narrationHint:"门把手刚一转动，门上就炸开一声怒喝：「以罗丝的牙齿为誓，你们没有礼貌吗？」喊声顺着走道传得很远。",_meta:{sourcePages:[141],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C 档补全：J30（399）门上的魔嘴术——除贾拉克西尔外任何人转动任一扇门的把手即触发；声音大到让在 J29 的贾拉克西尔听见，他会过来查看。WorldEffect 词表无「惊动 NPC」语义（set_npc_state 的 state 封闭六值不含 alerted），故落 pc_flag_set 标记触发者，NPC 反应由 DM 承接。"}},{id:"evt_355_e2",sceneId:"scn_355",trigger:{type:"player_action",verbClass:"break"},once:!0,effects:[{kind:"reveal_info",infoId:"info_355_g3"}],narrationHint:"船首像在最后一击下从中裂开，镀金的木屑四散落进海里——甲板上每一张人类面孔在同一瞬间褪去，露出底下的深色皮肤和白发。",_meta:{sourcePages:[131,134],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：353「摧毁船首像」+ J8（36e）——摧毁船首像（AC 15、50 点生命值、免疫毒素与心灵伤害）即终结全船幻象，该船卓尔此后留在甲板下以免引人注意。"}},{id:"evt_355_e3",sceneId:"scn_355",trigger:{type:"player_action",verbClass:"use"},once:!0,effects:[{kind:"hazard",mechanic:"拉动机械金龙的杠杆使装有易燃气体的玻璃罐破裂，彩车当场起火。若 1 分钟内未扑灭，火势蔓延到下层货舱其余部分；5 分钟后船上其他部位的船员察觉浓烟，届时货舱已是一片火海。船员会先抢救潜艇（若仍连接），之后才弃船。"}],narrationHint:"杠杆一拉到底，龙口里的玻璃罐炸开，蓝白的火舌顺着帆布蒙皮爬上木架，帆布卷边、发黑，然后整个烧起来。",_meta:{sourcePages:[137],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：J17（383）抢眼人物货舱的未上漆机械金龙彩车。"}},{id:"evt_355_e4",sceneId:"scn_355",trigger:{type:"player_action",verbClass:"burn"},once:!0,effects:[{kind:"hazard",mechanic:"J27 烟雾粉储藏室内二十个木桶各装五磅发烟粉。一桶爆炸会连带引爆影响区域内的其他桶：半数木桶同时爆炸即在船头炸出足以使船沉没的大洞；二十桶同时爆炸会把整条船炸掉一半，震碎码头区所有窗户，声音一直传到田野区。"}],narrationHint:"第一声闷响之后是一连串更响的——固定木桶的绳索绷断，桶一个接一个地炸开，热浪把舱门整个掀了出去。",_meta:{sourcePages:[140],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：J27（392）小桶。该舱门上锁并钉有通用语与精灵语木牌「限制区域。禁止入内。」，门外由 J23 两名卓尔火枪手死守。"}},{id:"evt_355_e5",sceneId:"scn_355",trigger:{type:"player_action",verbClass:"open"},once:!1,effects:[{kind:"hazard",mechanic:"J20 生物围栏的滑动门打开时，以 DC 15 智慧（动物驯养）诱使笼中生物进入马车后部（提供食物则该检定有优势）。检定失败且差值达 5 或更多时，该生物挣脱、陷入恐慌，开始无差别攻击以求脱身；任何这样的骚乱都会惊动附近的驯兽员与其他船员。围栏内共十二格：两只猿、四只巨火甲虫、一头犀牛、一只骏鹰、一只老虎、一只斧嘴鸟、一只异特龙、两只亡命恶犬、两只黑豹、一只巨秃鹫、一只枭熊、一只白熊；亡命恶犬与巨秃鹫是邪恶的，会抓住任何逃脱的机会。"}],narrationHint:"滑门刚拉开一条缝，笼里的东西就把肩膀撞了上来，铁栅在手里跳了一下；隔壁几格同时炸开一片吼叫和跺脚声。",_meta:{sourcePages:[137],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：J20（387）——仅心碎者上有。原文明示围栏可从外部双重锁定，钥匙在船长处。"}},{id:"evt_3a9_e1",sceneId:"scn_3a9",trigger:{type:"player_action",verbClass:"use"},once:!1,effects:[{kind:"hazard",mechanic:"熟练使用修补匠工具的角色以 DC 15 智力检定可禁用引擎，同样的检定可重新启动；无论成败每次检定代表 10 分钟工作。引擎也可直接摧毁：AC 16、50 点生命值、免疫毒素与心灵伤害。引擎停摆后潜艇失去推进与深度控制，操纵方向的鳍和舵一并失效。"}],narrationHint:"机器的嘶嘶声一节节退下去，脚下的甲板先是一沉，随后彻底不动了；铜制传声管里立刻传来一串急促的侏儒语。",_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：U2（3aa）机械。侦测魔法显示整个区域的变形魔法气息；布丽娜·巴弗斯通始终在此监视机械，并可经传声管与 U7b 通话。"}},{id:"evt_3ae_e1",sceneId:"scn_3ae",trigger:{type:"player_action",verbClass:"open"},once:!0,effects:[{kind:"spawn_encounter",encounterId:"enc_3ae"}],narrationHint:"掀起箱盖的一瞬，前板和侧板一起向外翻落，成群的金属蜘蛛从箱底涌出来，顺着地板扑向最近的活物。",_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：U4（3b1）木制行李箱——抬起盖子释放机械蜘蛛群（除贾拉克西尔外见人就攻击）。群集用蜘蛛群数据，改为小型构装、不需空气食水睡眠、易伤闪电、免疫力竭、不可被魅惑/恐慌/麻痹/石化/击倒/中毒。"}},{id:"evt_3be_e1",sceneId:"scn_3be",trigger:{type:"player_action",verbClass:"use"},once:!1,effects:[{kind:"hazard",mechanic:"熟练使用修补匠工具的角色以 DC 15 智力检定可禁用空气机械，同样的检定可重新启动；无论成败每次检定代表 10 分钟工作。机械也可直接摧毁：AC 16、50 点生命值、免疫毒素与心灵伤害。停机后艇内空气不再循环——除非重新激活，被困艇内、需要呼吸的生物在两天后开始窒息。"}],narrationHint:"嗡鸣停了。格栅里最后一股凉风扫过脚踝，之后舱内的空气就一动不动地悬在那里。",_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：U13（3bf）机械。该区域门上锁，门牌用通用语与侏儒语写着「空气系统」。"}},{id:"evt_3d2_e1",sceneId:"scn_3d2",trigger:{type:"player_action",verbClass:"other"},once:!1,chance:.75,effects:[{kind:"spawn_encounter",encounterId:"enc_3d2"}],narrationHint:"力场没有开口，只向地下延伸 1 英尺，用铲子挖一个够中型生物挤过去的洞要整整 1 小时。可科拉特塔四周都是别家的房子——铲子响了没多久，巷口就转出提着灯的城市守卫，要你们把这活儿停下来。",_meta:{sourcePages:[148],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：原文「在力场下挖掘」——75% 概率引来 2d6 名城市守卫（老兵）；enc_3d2 的 enemies 已按 2d6 均值改为老兵×7，trigger 改挂本事件。；targetRef自由文本「力场下方的地面（挖洞）」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_3f6_e1",sceneId:"scn_3f6",trigger:{type:"player_action",verbClass:"open"},once:!0,effects:[{kind:"hazard",mechanic:"门上的守卫刻文（设定为除曼松外任何人开门即触发）以目盲术／耳聋术为目标开门的生物，豁免 DC 18。"},{kind:"reveal_info",infoId:"info_3f6_g2"}],narrationHint:"门闩一动，木纹里那个华丽的 M 亮了一下；随后牢里的石像鬼站起身来，用一个骑士的口气道谢。",_meta:{sourcePages:[152,153],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：原文 K13「陷阱门」＋「冈达弗蕾女士」。开门＝同时吃符文和放出石像鬼骑士，故一并落在同一事件。；targetRef自由文本「K13 拘留室的门」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_3fd_e1",sceneId:"scn_3fd",trigger:{type:"player_action",verbClass:"use"},once:!1,effects:[{kind:"deal_damage",dice:"4d10",damageType:"钝击",saveAbility:"敏捷",saveHalves:!0},{kind:"hazard",mechanic:"拉杆是一个动作：两侧铁夹松开，整块地板被魔法驱动向上撞向天花板。板上的生物先被击倒（倒地），撞顶时进行 DC 20 敏捷豁免，失败受 22（4d10）点钝击伤害，成功减半。地板随后停在天花板下方几英尺，切断通往 K15 的楼梯，但仍可攀爬坍塌的楼梯前往 K17；10 分钟后地板降回原位并重新被夹住。"}],narrationHint:"生锈的机括一声闷响，脚下的地板整个弹了起来，像一张被人从下面掀翻的桌子直冲天花板。",_meta:{sourcePages:[153],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：原文 K16「地板夹具」。活化盔甲在生命值降至 10 点或更少时也会在下个回合尝试去拉杆。；targetRef自由文本「K16 地板夹具的铁杆」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_400_e1",sceneId:"scn_400",trigger:{type:"player_action",verbClass:"attack"},once:!1,effects:[{kind:"deal_damage",dice:"3d6",damageType:"毒素",saveAbility:"体质",saveHalves:!0},{kind:"hazard",mechanic:"毒气持续 1 分钟，其间走廊内的生物每回合开始时重复 DC 12 体质豁免（失败 10［3d6］点毒素伤害，成功减半），除非以造风术之类的魔法驱散。血肉魔像对毒气免疫。"}],narrationHint:"魔像离开脚下那块石板去够远处的人，板上的重量一撤，两侧墙根的小孔同时嘶地喷出黄绿色的气。",_meta:{sourcePages:[153],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文的触发主体是魔像本身（它离开压力板去攻击够不到的敌人），Trigger 白名单里没有「NPC 行动」形态，此处以玩家远程挑衅魔像近似，待人工核。；targetRef自由文本「K17 的血肉魔像（把它引离压力板）」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_403_e1",sceneId:"scn_403",trigger:{type:"player_action",verbClass:"attack"},once:!0,effects:[{kind:"spawn_encounter",encounterId:"enc_403"}],narrationHint:"符文第一次挨到实打实的一下时，刻痕里鼓起一团腥红——一只史拉红蟾直接从符文里跳了出来，落地就扑向走廊里的所有人。",_meta:{sourcePages:[156],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：原文「当符文第一次受到伤害时，一个史拉红蟾会通过魔法从其中跳出，并攻击走廊里的所有生物」。；targetRef自由文本「K18 的奥术符文」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_403_e2",sceneId:"scn_403",trigger:{type:"player_action",verbClass:"break"},once:!0,effects:[{kind:"unlock_passage",locationId:"loc_3d2"}],narrationHint:"最后一道刻痕碎开，整座塔外那层看不见的皮忽然不在了——风重新贴上墙面，雪片落到窗台上，屋檐外传来鸟扑棱翅膀掠过的声音。",_meta:{sourcePages:[149,156],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：原文「当符文被摧毁时，围绕科拉特塔楼的力场消失了」「摧毁那个符文将结束这个效果」。unlock_passage 指向本章塔楼地点 loc_3d2。；targetRef自由文本「K18 的奥术符文（摧毁）」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_417_e1",sceneId:"scn_417",trigger:{type:"player_action",verbClass:"move"},once:!0,effects:[{kind:"spawn_encounter",encounterId:"enc_417"}],narrationHint:"脚下的圆盘瓷砖沉下去半寸，一声魔法锣响透过雪花石膏的墙一路荡开——整座圣所都听见了，四面八方的门开始响。",_meta:{sourcePages:[157,158],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C档补全：原文 E2「警报机制」。解除需盗贼工具 DC 20 敏捷，失败 5 点或更多同样意外触发（此路径也走本事件）。enc_417 的 enemies 已按原文警报响应者名单补全，trigger 改挂本事件。；targetRef自由文本「E2 门厅地面纹章上的硬币压力板」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_425_e1",sceneId:"scn_425",trigger:{type:"player_action",verbClass:"speak"},once:!0,effects:[{kind:"deal_damage",dice:"8d6",damageType:"火焰",saveAbility:"敏捷",saveHalves:!0}],narrationHint:"那两个字刚出口，火盆里的绿焰猛地缩成一点，随即以自身为中心炸开成一团火球。",_meta:{sourcePages:[159],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：原文「每当房间内的生物大声说出『绿色火焰』这个词时，祭坛会在自身中心施放一个火球术（豁免 DC 15）；施放后 24 小时内无法再次施放」。once:true 是对 24 小时冷却的近似（schema 无冷却字段）；8d6 取火球术标准伤害，原文只写「施放火球术」。阿戈恩知道此特性并会在危急时利用它。；targetRef自由文本「在 E8 阅读室里说出「绿色火焰」」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}}],r=[],d=[{id:"trs_04a_0",sceneId:"scn_04a",container:"袋子",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[21],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「沃罗为每位接受了任务的角色提供一个小袋子，里面装有10金币。…」；coins.dice「10」归一为引擎骰式10d1"},coins:{dice:"10d1"}},{id:"trs_06b_0",sceneId:"scn_06b",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"皮革包裹的木框城市画（路斯坎/无冬城/银月城/博德之门，每幅价值75金币）",count:4},{kind:"fixed",itemRef:"10磅银条（因腐蚀发黑，每根价值50金币）",count:15}],once:!0,_meta:{sourcePages:[26],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「第二个箱子是从高路上的商队那里偷来的，里面装有十五根重10磅的银条，虽然因腐蚀而变黑，但每根仍然价值50金币。…」；overlay覆写:contents/coins；coins.dice「0」归一为引擎骰式（不可解析已删）"}},{id:"trs_081_0",sceneId:"scn_081",container:"藏着",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"easy"},contents:[{kind:"fixed",itemRef:"治疗药水",count:2},{kind:"fixed",itemRef:"格鲁姆沙的法术书（燃烧之手、易容术、虚假生命、护盾术、隐形仆役、巫术箭）",count:1}],once:!0,_meta:{sourcePages:[28],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「在石椅后面藏着一个小巧的未上锁木箱，内含两瓶治疗药水，16金币，82银币，以及250铜币。…」；overlay覆写:contents/discovery；coins.dice「16」归一为引擎骰式16d1"},coins:{dice:"16d1"}},{id:"trs_0d0_0",sceneId:"scn_0d0",container:"袋子",discovery:{mode:"hidden",checkSkill:"察觉",dcTier:"medium",checkDC:15},contents:[{kind:"fixed",itemRef:"宝石（价值100金币）",count:5}],once:!0,_meta:{sourcePages:[44],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「他的身上还有一个袋子，里面装有五颗价值100金币的宝石。…」；overlay覆写:discovery/contents/coins；coins.dice「0」归一为引擎骰式（不可解析已删）"}},{id:"trs_0f9_0",sceneId:"scn_0f9",container:"袋子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"加速马蹄铁",count:1},{kind:"fixed",itemRef:"金条（5磅，价值250金币）",count:8}],once:!0,_meta:{sourcePages:[52],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「Gralhund女士的马装备了加速马蹄铁（加速马蹄铁），并且有两个马鞍袋，每个袋子里装有四块重5磅、价值250金币的金条…」；overlay覆写:discovery/contents/coins；coins.dice「0」归一为引擎骰式（不可解析已删）"}},{id:"trs_15c_0",sceneId:"scn_15c",container:"D3 封闭船坞中漂浮的夸力许装置（潜水器）",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"夸力许装置"}],once:!0,_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：不是可搜出的隐藏宝藏——装置就明摆在船坞里，取用靠交涉：格林达同意出借，条件是角色先用它替她在深水港底搜一天宝，并把所得的一半给她。通往港口的水下金属门由内侧铁条闭锁，装置可自动抬起铁条，船坞内的生物则需 DC20 力量（运动）检定抬起。；overlay覆写:container/discovery/_meta"}},{id:"trs_1a8_0",sceneId:"scn_1a8",container:"O3 上层被烟熏黑的壁炉上、挂在铁钩上的无盖大铁锅",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"格洛尔之石"}],once:!0,_meta:{sourcePages:[76,79],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档补全：仅秋季线成立——费内鲁斯把格洛尔之石藏在 O3 壁炉上悬挂的大锅里。锅是明摆的，往里看即见，无需检定，故 hidden/调查/medium 改 visible。但原文同时写明：在角色抵达 O3 之前，三名喝下隐形药水、以浮空术攀外墙、从箭缝钻入的卓尔火枪手已经把石头取走了——即此槽在标准跑法下是空的，DM 按遭遇链先后决定是否有货。；overlay覆写:container/discovery/_meta"}},{id:"trs_1e0_0",sceneId:"scn_1e0",container:"袋子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[],once:!0,_meta:{sourcePages:[83],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「他还有一把开锁的钥匙，用于B8的挂锁门，以及一个由精灵皮肤制成的袋子里装有4d10金币，袋子用由编织的矮人头发制成的绳子…」；overlay覆写:coins"},coins:{dice:"4d10"}},{id:"trs_1e0_1",sceneId:"scn_1e0",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"法术卷轴"},{kind:"fixed",itemRef:"球形金质眼魔吊坠"}],once:!0,_meta:{sourcePages:[83],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「箱子里有277铜币、135银币、一个带有小宝石眼睛的球形金质观察者吊坠（价值250金币）和一张法术卷轴的黑暗视觉。…」；overlay覆写:contents；coins.dice「250」归一为引擎骰式250d1"},coins:{dice:"250d1"}},{id:"trs_205_0",sceneId:"scn_205",container:"袋子",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[86],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「每个人身上都携带着3d6金币的袋子。…」；overlay覆写:coins"},coins:{dice:"3d6"}},{id:"trs_24b_0",sceneId:"scn_24b",container:"放着",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"宝石",count:65}],once:!0,_meta:{sourcePages:[96],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「一个壁龛里堆放着500,000金币，总重量为10,000磅。…」；overlay覆写:coins/contents；coins.dice「500000」归一为引擎骰式500000d1"},coins:{dice:"500000d1"}},{id:"trs_25c_1",sceneId:"scn_25c",container:"锦标赛奖品",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"宝石",count:1},{kind:"fixed",itemRef:"黑曜石奖杯",count:1},{kind:"fixed",itemRef:"姗娜萨填充玩偶",count:1}],once:!0,_meta:{sourcePages:[99],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：不是钱堆而是锦标赛奖品——第三场战斗中存活的每名获胜队伍成员各得一个填充的姗娜萨玩偶（嘴里的口袋中装一颗价值 100 金币的宝石）以及一个雕刻成被手抚摸的笑脸巨眼魔的黑曜石奖杯（价值 25 金币）。原 coins 100 是把宝石面值误读成金币，已归零。另：观众可下注，单注上限 10 金币，押中冠军队伍赔五倍。；overlay覆写:container/discovery/contents/coins/_meta；coins.dice「0」归一为引擎骰式（不可解析已删）"}},{id:"trs_285_1",sceneId:"scn_285",container:"生锈武器堆下的木制箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"血石",count:4}],once:!0,_meta:{sourcePages:[105],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档核对：诺斯卡的个人宝藏＝37 金币、151 银币、360 铜币，外加四颗血石（每颗 50 金币）。coins 字段只有一个骰式槽，仅承载 37 金币；151 银币与 360 铜币无处安放（schema 缺口），发放时需 DM 手工补。原文未给发现检定的 DC，沿用脚本的 medium 档。；overlay覆写:container/discovery/contents/coins/_meta；coins.dice「37」归一为引擎骰式37d1"},coins:{dice:"37d1"}},{id:"trs_28b_0",sceneId:"scn_28b",container:"阿莫戈的木制箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"治疗药水",count:1},{kind:"fixed",itemRef:"孔雀石牛头人雕像",count:1}],once:!0,_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：补齐漏项——箱内含 121 金币（装在缝合的肉制成的袋子里）、一个雕刻成牛头人形状的孔雀石雕像（价值 250 金币）、一瓶治疗药水。；overlay覆写:container/contents/coins/_meta；coins.dice「121」归一为引擎骰式121d1"},coins:{dice:"121d1"}},{id:"trs_2ba_0",sceneId:"scn_2ba",container:"两个铁炉子之间的细长调料架",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"珍贵香料瓶",count:30}],once:!0,_meta:{sourcePages:[112],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原 coins 10 是把「每瓶价值 10 金币」误读成金币堆。实为三十瓶珍贵香料，单瓶 10 金币（合计 300 金币等值货物）。；overlay覆写:container/contents/coins/_meta；coins.dice「0」归一为引擎骰式（不可解析已删）"}},{id:"trs_2c7_0",sceneId:"scn_2c7",container:"靠北墙的两个打开的板条箱",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"黑曜石奖杯",count:30},{kind:"fixed",itemRef:"姗娜萨填充玩偶",count:50}],once:!0,_meta:{sourcePages:[113],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原 coins 25 是把奖杯单价误读成金币。实为一箱五十个填充巨眼魔玩偶、一箱三十个黑曜石奖杯（每个 25 金币），都是格斗锦标赛的备用奖品。；overlay覆写:container/contents/coins/_meta；coins.dice「0」归一为引擎骰式（不可解析已删）"}},{id:"trs_2c7_1",sceneId:"scn_2c7",container:"石制书桌的两个上锁抽屉",discovery:{mode:"hidden",checkSkill:"察觉",dcTier:"medium",checkDC:15,alternatives:[{condition:{type:"info_revealed",infoId:"info_2c7_g1"},note:"已找到椅子左侧扶手下的秘密隔间并取得黑色小钥匙，无需再作检定即可打开两个抽屉。"}]},contents:[{kind:"fixed",itemRef:"次元袋",count:1},{kind:"fixed",itemRef:"纳尔的法术书",count:1}],once:!0,_meta:{sourcePages:[113],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：补齐第一个抽屉——纳尔的法术书，一本用蛛网包裹的结实黑皮书，含他准备的所有法术以及短讯术。第二个抽屉是属于贾拉索·班瑞的次元袋（纳尔借来偷运发烟粉进巢穴）。开锁路径：椅子左侧扶手下秘密隔间 DC 15 感知（察觉）→ 取黑色小钥匙；或盗贼工具 DC 17 敏捷检定直接撬锁。；overlay覆写:container/discovery/contents/_meta"}},{id:"trs_31d_0",sceneId:"scn_31d",container:"主卧床下的坚固金锁盒（盒子本身价值750金币）",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"easy"},contents:[{kind:"fixed",itemRef:"金色祭祀匕首",count:2},{kind:"fixed",itemRef:"金色面具",count:2},{kind:"fixed",itemRef:"深红色长袍",count:2}],once:!0,_meta:{sourcePages:[123],confidence:"medium",needsReview:!0,extractorNotes:"0806 opus C档核对：盒内是维克托罗与阿玛利亚的邪教法衣（金面具、金祭祀匕首各值75金币，深红长袍）；750金币记的是金盒本身的价值。原文「搜查这个房间会发现床下藏着一个金色的锁盒」未给 DC，dcTier easy 为可运行近似（需复核）。锁：金钥匙 / 盗贼工具 DC 14 敏捷 / DC 16 力量（运动）撬开；非金钥匙开启会触发毒气陷阱（见 evt_31d_e1，无法解除）。；overlay覆写:container/discovery/contents/coins/_meta；coins.dice「750」归一为引擎骰式750d1"},coins:{dice:"750d1"}},{id:"trs_330_0",sceneId:"scn_330",container:"秘密金库中码放的二十根5磅重银贸易条（每根价值25金币）",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：脚本把「每个价值25金币」当成了总额；二十根 × 25 = 500金币。；overlay覆写:container/coins/_meta；coins.dice「500」归一为引擎骰式500d1"},coins:{dice:"500d1"}},{id:"trs_330_1",sceneId:"scn_330",container:"秘密金库中的五百个钱袋（家族资产变现，每袋1000金币）",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：脚本把「每个袋子里有1000金币」当成了总额；五百袋 × 1000 = 500000金币。仅创始人日前后存在（家族资产变现），随后会被邪教徒搬去 A7 投入祭祀碗。；overlay覆写:container/discovery/coins/_meta；coins.dice「500000」归一为引擎骰式500000d1"},coins:{dice:"500000d1"}},{id:"trs_330_2",sceneId:"scn_330",container:"洗劫龙之金库后额外运抵的五百个钱袋（每袋1000金币）",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：原文「总共为1000000金币」是与 trs_330_1 相加后的总数，脚本把总数写进了这一条，造成双计。本条应只记额外增加的五百袋 = 500000金币；且仅在卡萨兰特家族成功洗劫龙之金库后才存在。；overlay覆写:container/discovery/coins/_meta；coins.dice「500000」归一为引擎骰式500000d1"},coins:{dice:"500000d1"}},{id:"trs_34a_0",sceneId:"scn_34a",container:"A8 储物间后墙那个未上锁的柜子（黑色地毯铺在柜前）",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档核对：125金币即金质酒壶的价值（另有架上的木制酒杯，无价值）。邪教集会期间柜子是空的——酒壶与酒杯正在 A7 使用。；overlay覆写:container/_meta；coins.dice「125」归一为引擎骰式125d1"},coins:{dice:"125d1"}},{id:"trs_350_0",sceneId:"scn_350",container:"覆满藤壶的旧箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"金色章鱼护身符"},{kind:"fixed",itemRef:"法术卷轴（回生术）"}],once:!0,_meta:{sourcePages:[131],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C 档核对：泽利法恩（青年青铜龙）交换情报的报酬。原文=300 枚银币 + 章鱼形镶紫水晶眼的金色护身符（价值250金币）；coins 只有单骰式字段，按 10 银=1 金折算记 30（原值 250 是脚本把护身符估价当成了钱币）。生锈的锁需 DC 13 力量（运动）砸开或撬开；箱盖上另有暗格，DC 11 感知（察觉）发现，内有带塞木制卷轴筒装的回生术法术卷轴——本 schema 一个 slot 无法分两层发现，暗格内容并入 contents，DM 请按两步给。；overlay覆写:container/discovery/contents/coins/_meta；coins.dice「30」归一为引擎骰式30d1"},coins:{dice:"30d1"}},{id:"trs_355_0",sceneId:"scn_355",container:"胡桃木箱（J3 船员舱，每箱）",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"普通服装"},{kind:"fixed",itemRef:"水袋"}],once:!0,_meta:{sourcePages:[132],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C 档核对：原文「3d6 金币和 4d10 银币」，脚本把 3d6 读成了 6。coins 只能承载一条骰式，故记 3d6 金币；另有 4d10 银币未落字段，DM 请一并发。箱子未上锁，J3 舱内有两名休息中的卓尔精英武者。；overlay覆写:container/coins/_meta"},coins:{dice:"3d6"}},{id:"trs_355_1",sceneId:"scn_355",container:"船长舱的挂锁木箱（J10）",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"水下呼吸药水"},{kind:"fixed",itemRef:"珍珠"},{kind:"fixed",itemRef:"优质葡萄酒"}],once:!0,_meta:{sourcePages:[132],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C 档核对：补齐原文遗漏内容——丝质小袋内 1d6 颗珍珠（每颗价值 100 金币，随机数量未落 count）、一瓶价值 25 金币的优质葡萄酒（酒瓶贴眼罩形标签，通用语名「独眼杰克斯」，与 J30 空酒瓶呼应）。箱子由挂锁封住：盗贼工具 DC 20 敏捷开锁或 DC 20 力量（运动）撬开，船长腰带钥匙环上有钥匙。；overlay覆写:container/contents/coins/_meta；coins.dice「250」归一为引擎骰式250d1"},coins:{dice:"250d1"}},{id:"trs_355_2",sceneId:"scn_355",container:"铸铁密码保险箱（J16 军械库，仅抢眼人物）",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"手枪",count:3},{kind:"fixed",itemRef:"发烟粉",count:12},{kind:"fixed",itemRef:"子弹",count:60}],once:!0,_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档核对：补齐内容——三把手枪、十二包皮革包裹的发烟粉、三个各装二十颗子弹的皮袋（合 60 发）、一袋 250 金币。750 磅铸铁保险箱配密码锁，密码 1-20-59（贾拉索与三名副官知道，见 inf_355_g10）；亦可盗贼工具 DC 25 敏捷（调查）撬锁（每次尝试 1 分钟）或敲击术打开。；overlay覆写:container/contents/coins/_meta；coins.dice「250」归一为引擎骰式250d1"},coins:{dice:"250d1"}},{id:"trs_355_5",sceneId:"scn_355",container:"胡桃木箱（J25 枪手舱，每箱）",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"普通服装"},{kind:"fixed",itemRef:"水袋"}],once:!0,_meta:{sourcePages:[132],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C 档核对：同 trs_355_0，原文「3d6 金币和 4d10 银币」；coins 记 3d6 金币，4d10 银币未落字段。J25 仅心碎者与地狱使者上有。；overlay覆写:container/coins/_meta"},coins:{dice:"3d6"}},{id:"trs_355_6",sceneId:"scn_355",container:"床脚的未上锁木箱与珠宝盒（J29 客房）",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"金手镯",count:6},{kind:"fixed",itemRef:"钻戒",count:2},{kind:"fixed",itemRef:"珍珠项链"}],once:!0,_meta:{sourcePages:[132],confidence:"high",needsReview:!0,extractorNotes:"0806 opus C 档核对：原文箱子未上锁、就在床脚，脚本却标成 hidden+调查检定，改回 visible。内容为四套服装与一只珠宝盒（六个金手镯各 25 金币、两枚钻戒各 250 金币、一条珍珠项链 500 金币），全无钱币，coins 从 25 归零（schema 无删除通道，故写 0）。玛戈放在梳妆台上的里拉琴（价值 30 金币）不在箱内，未计入。；overlay覆写:container/discovery/contents/coins/_meta；coins.dice「0」归一为引擎骰式（不可解析已删）"}},{id:"trs_3ab_0",sceneId:"scn_3ab",container:"袋子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"治疗药水"}],once:!0,_meta:{sourcePages:[143],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「储物箱内有一个袋子，装有50金币，以及一瓶治疗药水（治疗药水）。…」；coins.dice「50」归一为引擎骰式50d1"},coins:{dice:"50d1"}},{id:"trs_3e6_0",sceneId:"scn_3e6",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"水晶（奥术法器，10金币）",count:2},{kind:"fixed",itemRef:"宝珠（奥术法器，20金币）",count:1},{kind:"fixed",itemRef:"魔杖（奥术法器，10金币）",count:4},{kind:"fixed",itemRef:"法杖（奥术法器，10金币）",count:6}],once:!0,_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「真正的箱子没有上锁，包含十三个物品，每个都可以用作奥术法器：两块水晶（每块价值10金币），一个球体（价值20金币），四根…」；overlay覆写:discovery/contents/coins；coins.dice「0」归一为引擎骰式（不可解析已删）"}},{id:"trs_3ed_0",sceneId:"scn_3ed",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"普通服装"},{kind:"fixed",itemRef:"材料包"},{kind:"fixed",itemRef:"蜡烛"},{kind:"fixed",itemRef:"纸(每张)"},{kind:"fixed",itemRef:"墨水"},{kind:"fixed",itemRef:"笔"},{kind:"fixed",itemRef:"学徒法术书（记载其主人准备的全部法术）"}],once:!0,_meta:{sourcePages:[150],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「每个箱子里都有一套普通服装，一个备用的法术材料包，蜡烛，墨水，笔，纸张，以及3d6金币。…」；overlay覆写:contents/coins"},coins:{dice:"3d6"}},{id:"trs_406_0",sceneId:"scn_406",container:"藏在",discovery:{mode:"hidden",checkSkill:"察觉",dcTier:"medium",checkDC:15},contents:[{kind:"fixed",itemRef:"定身魔杖"}],once:!0,_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「拉动这本书会使隔间弹开，露出藏在其中的杜尔拉克的定身魔杖。…」；overlay覆写:discovery"}},{id:"trs_40b_0",sceneId:"scn_40b",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"锻造工具（20金币）",count:1},{kind:"fixed",itemRef:"画家工具（10金币）",count:1},{kind:"fixed",itemRef:"彩色颜料小罐（蓝/红/黄）",count:3},{kind:"fixed",itemRef:"空白法术书（皮面，50金币）",count:6},{kind:"fixed",itemRef:"学者背包（40金币）",count:1},{kind:"fixed",itemRef:"矮人语短语书",count:1}],once:!0,_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「箱子 2有铁箍，里面有一套画家的工具（价值10 gp），以及三小罐彩色颜料（蓝色、红色和黄色）。…」；overlay覆写:contents/coins；coins.dice「0」归一为引擎骰式（不可解析已删）"}},{id:"trs_40b_1",sceneId:"scn_40b",container:"放着",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"治疗药水",count:6},{kind:"fixed",itemRef:"乙醚精",count:2},{kind:"fixed",itemRef:"银制狮鹫小雕像（25金币）",count:1}],once:!0,_meta:{sourcePages:[156],confidence:"medium",needsReview:!0,extractorNotes:'脚本提取自句子：「里面有一个木架，上面放着八个玻璃瓶——六瓶装有治疗药水，两瓶装有单独的乙醚精剂量（见《城主指南》第8章"毒药"）。…」；overlay覆写:contents'}},{id:"trs_42c_0",sceneId:"scn_42c",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"治疗药水",count:3}],once:!0,_meta:{sourcePages:[160],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「Vevette的箱子里有三瓶治疗药水。…」；overlay覆写:contents"}},{id:"trs_42c_1",sceneId:"scn_42c",container:"藏着",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[],once:!0,_meta:{sourcePages:[160],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「在一个信封里隐藏着一条优雅的白金项链（价值250金币），上面有一个小巧的浮雕，内含一位美丽的Turami女性的素描肖像。…」；coins.dice「250」归一为引擎骰式250d1"},coins:{dice:"250d1"}},{id:"trs_42c_2",sceneId:"scn_42c",container:"箱子",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[160],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「Havia的箱子里有一把金色的梳子，形状像一条风格化的龙，眼睛上镶嵌着细小的红宝石（价值250金币）。…」；coins.dice「250」归一为引擎骰式250d1"},coins:{dice:"250d1"}},{id:"trs_42c_3",sceneId:"scn_42c",container:"塞着",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[160],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「玩偶里面塞着一个小袋，装有五颗价值100金币的珍珠。…」；overlay覆写:coins；coins.dice「500」归一为引擎骰式500d1"},coins:{dice:"500d1"}},{id:"trs_42e_0",sceneId:"scn_42e",container:"藏在",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"威力法杖"}],once:!0,_meta:{sourcePages:[160],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「如果发生战斗，曼松 会抓起他的 威力法杖（他藏在床下）并坚守阵地。…」"}},{id:"trs_430_0",sceneId:"scn_430",container:"抽屉",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"皮面账簿（曼松勒索两名蒙面领主的纸面证据）",count:1},{kind:"fixed",itemRef:"曼松手写的蒙面领主名单",count:1},{kind:"fixed",itemRef:"格洛尔之石"}],once:!0,_meta:{sourcePages:[160],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取自句子：「如果曼松拥有格洛尔之石，他会将它和账簿一起放在桌子的抽屉里。…」；overlay覆写:contents"}}],l=[{id:"lore_005",title:"简介",keywords:["简介",'瓦罗赞普\\"瓦罗\\"格达姆'],content:`欢迎来到北地之冠——深水城，这里将展开一段奇妙的都市冒险。我们的故事从冒险者们聚集在"打呵欠的传送门"酒馆和旅店开始。著名的探险家兼故事大王瓦罗赞普·格达姆为他们准备了一项任务——这项任务将使角色们陷入两个邪恶组织之间的激烈冲突。如果冒险者们完成了他的任务，沃罗将慷慨地奖励他们。然而，还有一个更大的奖赏隐藏在这座辉煌之城的某个角落，等待着被发掘。深水城：龙劫是一款为起始等级为1级角色设计的《龙与地下城》冒险。在故事结束时，角色们将至少达到5级。如果你打算以玩家身份参与这次冒险，请立即停止阅读！

如果你在寻找更高等级的在深水城设置的冒险内容，一个名为深水城: 疯法师的地城的配套产品探索了深水城下被称为地脉迷城的广阔地牢，并设计为适合角色等级一直提升到第20级的冒险。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_006_0",title:"故事梗概·故事梗概",keywords:["故事梗概","姗娜萨","奥瑞纳克斯","曼松","福卢恩·布拉格玛","瑞纳尔·奈沃兰波"],content:`《深水城：龙之宝藏》是一场在都市背景下进行的寻宝游戏。这个冒险的情节可以概括如下：

五十万金币被藏在深水城的某个地方。许多人知道这个藏宝地点，并且正在寻找它。冒险者可以加入这场搜寻，并阻止宝藏落入邪恶之手。

城市正受到两个权力集团之间不断升级的紧张局势威胁，这种紧张局势即将爆发成暴力冲突。散塔林会，一个由雇佣兵组成的神秘网络，以及姗娜萨，深水城的眼魔犯罪领主，两者之间存在分歧，当他们发生冲突时，角色们被卷入了这场纷争。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_006_1",title:"故事梗概·龙之宝藏",keywords:["故事梗概","龙之宝藏","姗娜萨","奥瑞纳克斯","曼松","福卢恩·布拉格玛","瑞纳尔·奈沃兰波"],content:`在深水城，金币被称为龙币。在他被赶下深水城开放领主的位置之前，达格特·诺瓦梅伯侵吞了五十万龙币，并把它们藏在了一个秘密金库中。作为安全措施，他安排将金库的位置和防御措施的所有知识从他和他的下属的记忆中魔法抹除。执行这个程序的法师将这些知识困在了一个叫做格洛尔之石的神器中。法师不久后消失了，达格特将这块石头藏在了深水城宫殿里。

当其他深水城的领主投票罢免达格特的职位时，他正在重建无冬城。他立即计划取回格洛尔之石并将他的龙类宝藏走私出深水城。他的间谍从宫殿中盗走了宝石，但在试图离开城市时被杀。这块宝石像普通珠宝一样被偷来偷去，直到落入姗娜萨的手中。

格洛尔之石实际上是一个被魔法转化的底栖魔鱼。在这种无生命的状态下，底栖魔鱼可以读取任何与石头调谐的生物的思想，并修改该生物的记忆。与石头调谐的生物也可以从底栖魔鱼那里提取信息，包括关于奈维姆宝库的知识。

很久以前由矮人建造的金库，被施加了防止所有形式的魔法侦测和入侵的保护。它现在的守护者是一条成年金龙，名为奥瑞纳克斯，它同时也是阿盖尔伦的龙杖的当前持有者和守护者，这根法杖拥有阻止其他龙进入城市的力量。作为交换法杖的条件，奥瑞纳克斯承诺将守护这些金子，直到诺瓦梅伯或他指定的封臣将其移走。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_006_2",title:"故事梗概·使用海报地图",keywords:["故事梗概","使用海报地图","姗娜萨","奥瑞纳克斯","曼松","福卢恩·布拉格玛","瑞纳尔·奈沃兰波"],content:"这本书后面的地图展示了深水城的两侧。一面可以展示给玩家看。另一面是为地下城主准备的，包括标记冒险中重要地点的标签。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_006_3",title:"故事梗概·街头战争",keywords:["故事梗概","街头战争","姗娜萨","奥瑞纳克斯","曼松","福卢恩·布拉格玛","瑞纳尔·奈沃兰波"],content:`在城市街道之下潜伏着一个罪犯的阴暗世界，其领导者是一个名为姗娜萨的眼魔。希望在深水城中获得政治基础的散塔林会（也被称为黑网）的代理人最近试图将其组织与克萨纳萨公会结盟。这次尝试的策划者是巫师曼松的一个克隆体，他是黑网的创始人，长期以来被认为已经死亡。

当双方在姗娜萨的巢穴中进行谈判时，格洛尔之石突然从姗娜萨藏匿它的地方消失了。这个多疑的夺心魔指责黑网偷走了它，并杀死了在场的散塔林会使者。当散塔林会通过袭击赞纳塔行会的据点进行报复时，姗娜萨将他们的行为视为黑网邪恶意图的确认。如今，散塔林会与姗娜萨之间的仇恨已经开始蔓延到街头，威胁着整个城市的和平。

到底是谁偷走了格洛尔之石？答案是：一个名叫达拉哈尔的岩石侏儒。在Neverember领主使用魔法确定了宝石的位置后，他派出一系列的间谍潜入姗娜萨的巢穴并取得它。达拉哈尔在他之前的许多人失败的地方成功了，但他的成功最终证明是短暂的。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_006_4",title:"故事梗概·沃洛的任务",keywords:["故事梗概","沃洛的任务","姗娜萨","奥瑞纳克斯","曼松","福卢恩·布拉格玛","瑞纳尔·奈沃兰波"],content:`打瞌睡的酒馆是本次故事的默认起始地点。冒险者们在那里最先遇到的人之一是沃洛塔姆·葛达姆。他刚刚完成了推广新书瓦罗怪物指南的巡回宣传活动，并有一个任务要交给玩家们。

沃罗的一个朋友，一个名叫福卢恩·布拉格玛的英俊傻瓜失踪了，似乎被绑架了。寻找弗伦的行动揭示了他被卷入了身份错误的情况下，实际上角色们正在寻找两名受害者。真正的目标是洛斯诺布勋爵疏远的儿子瑞纳尔·奈沃兰波。散塔林会的特工拦截了他，因为他们想知道雷纳尔所掌握的关于龙之宝藏的一切。（对他们来说不幸的是，雷纳尔对宝藏及其所在位置一无所知）。如果角色们救了他，雷纳尔将证明自己是那些希望在深水城扬名立万的冒险者们值得信赖的盟友。

作为救援弗伦的奖励，沃洛给冒险者们提供了位于北城区的一栋建筑的产权，这栋建筑俯瞰着一个被旧住宅和商店包围的宽阔死胡同。该物业过去曾是一家酒馆，上面几层是住宅。酒馆已经关闭多年，而住宅被一个作祟幽灵闹鬼，角色们可以让它安息。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_006_5",title:"故事梗概·阿格海尔的龙卫",keywords:["故事梗概","阿格海尔的龙卫","姗娜萨","奥瑞纳克斯","曼松","福卢恩·布拉格玛","瑞纳尔·奈沃兰波"],content:`深水城被一种不可解除的魔法效应所覆盖，称为阿格海尔的龙卫。这种效应源自城堡区阿加隆塔下的某处，并且是永久性的。只要龙之结界存在，龙类以及所有其他龙类生物都无法物理上进入城市（或其下水道）。这种效应并不会延伸到港口或地底山脉。

被阿盖尔伦的龙杖（见附录A）触碰的龙类生物可以无视阿格海尔的龙卫，并在城市中自由移动。该效果持续到生物再次被龙杖触碰，或与龙杖调谐者指定的时间结束为止。

龙杖目前由一只名为奥瑞纳克斯的成年金龙持有（见附录 B），他守护着城市地下的一个隐秘金库。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_006_6",title:"故事梗概·火球术！",keywords:["故事梗概","火球术！","姗娜萨","奥瑞纳克斯","曼松","福卢恩·布拉格玛","瑞纳尔·奈沃兰波"],content:`随着时间的推移，角色们吸引了当地派系的注意，这些派系希望在他们定居城市时招募他们。最终，这些相对和平的时光被一颗火球在他们新居附近爆炸所打破。角色们被卷入了这一可怕事件的余波中，并可以尝试查明真相。是谁施放了火球术法术？为什么？目标是谁？他们可以代表某个公会或派系调查这一事件，或者出于自己的原因参与其中。

火球的一名受害者实际上是其预定目标：尼弗梅伯领主的间谍，达拉卡尔。无论是谁杀死了这个侏儒，现在都拥有了格洛尔之石，这是找到龙类遗失宝藏的关键。无论如何，根据他们在城市中建立的联盟——以及他们所树的敌，角色们卷入了对这块石头及其所保护的财宝的追逐之中。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_00f_0",title:"选择你的反派·选择你的反派",keywords:["选择你的反派","贾拉索·班瑞","姗娜萨","莱拉·银手","阿玛利亚·卡萨兰特","曼松"],content:`当你进行这个冒险时，你需要在开始时选择主要的反派角色。你的选择决定了故事发生的一年中的季节，以及第4章中一些遭遇的对手。你选择的反派角色会与玩家角色作对，而你没有选择的反派角色则成为背景的一部分，他们可能会帮助角色或阻碍他们。

作为这次冒险的一个不寻常特点，反派角色并不是为了被杀死，他们也不打算杀死玩家角色。反派角色在追寻一批宝藏，而冒险者的最终目标是阻止宝藏落入他们的手中。

你可以随时将一个反派替换为另一个。例如，如果你在冒险中途决定，由于故事的发展，贾拉索·班瑞会比姗娜萨更适合作为反派，你可以立即进行这种调整，并相应地安排后续的遭遇战。

每个反派角色在附录B中有详细描述，并在下文进行了总结。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_00f_1",title:"选择你的反派·姗娜萨",keywords:["选择你的反派","姗娜萨","贾拉索·班瑞","莱拉·银手","阿玛利亚·卡萨兰特","曼松"],content:`姗娜萨 是一个多疑、狂妄自大的眼魔犯罪领主，其目标是消灭所有它认为是散塔林会行动人员或同情者的人，夺回格洛尔之石，并确保龙族的宝藏。它的基地是位于Skullport下的地牢，Skullport是深水城下面的一个地下定居点。这个巢穴在第5章中有描述。

姗娜萨对莱拉·银手有着深深的忌惮，往往会放过她的下属，以避免与深水城公开领主发生冲突。招致眼魔之怒的冒险者可以利用它对莱拉尔的恐惧来逃过一劫。

如果你选择姗娜萨作为反派，冒险将在春天展开。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_00f_2",title:"选择你的反派·卡萨兰特家族",keywords:["选择你的反派","卡萨兰特家族","贾拉索·班瑞","姗娜萨","莱拉·银手","阿玛利亚·卡萨兰特","曼松"],content:`Victoro和阿玛利亚·卡萨兰特是Waterdeep的贵族，也是秘密崇拜恶魔的人。卡萨兰特家族计划使用龙族的宝藏来赎回他们孩子的魂魄，他们曾将孩子们的魂魄交易给阿斯蒙蒂斯以换取力量。他们的庄园，卡萨兰特别墅，下面隐藏着一个阿斯蒙蒂斯的神庙，如第6章所述。

卡萨兰特家族试图误导和诋毁角色们，而不是杀害他们。维克托和阿玛莉亚依靠他们的贵族地位来保护自己，他们最不想看到的就是城市守卫出现在他们的家门口。

如果你选择卡萨兰特家族作为反派，冒险故事发生在夏天。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_00f_3",title:"选择你的反派·贾拉索·班瑞",keywords:["选择你的反派","贾拉索·班瑞","姗娜萨","莱拉·银手","阿玛利亚·卡萨兰特","曼松"],content:`贾拉索·班瑞 是一个黑暗精灵冒险家，也是帆之城Luskan的秘密领主。Jarlaxle计划使用龙族的宝藏来购买进入领主联盟的方式，领主联盟是一个城市和小镇的联盟，他们联合起来对抗共同的威胁。Jarlaxle还想要阿盖尔伦的龙杖作为他在谈判中的筹码。以一个名叫Zardoz Zord的人类船长的魔法伪装下，Jarlaxle经营着一个名为Sea Maidens Faire的旅行嘉年华，并在深水城港口的一艘船上设有巢穴，这艘船下面有一艘潜水艇（绯红马佩诺斯），如第7章所述。

贾拉克斯喜欢挫败他的敌人，喜欢冒险者试图干预他的事务时出现的复杂情况，并且喜欢看当他最终占上风时他们脸上的表情。然而，他不会容忍威胁他的傻瓜。如果被迫进行暴力对抗，他会迅速而残酷地杀掉某人以示警告，然后走开。

如果您选择Jarlaxle作为反派，冒险发生在秋天。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_00f_4",title:"选择你的反派·曼松",keywords:["选择你的反派","曼松","贾拉索·班瑞","姗娜萨","莱拉·银手","阿玛利亚·卡萨兰特"],content:`法师曼松的克隆体，是散塔林会的创始人之一，正隐藏在深水城。他想要通过声称拥有龙族的宝藏，并利用这笔财富贿赂蒙面领主们，使他成为新的开放领主，从而统治这座城市。他还想要重新控制黑网。曼松潜伏在Kolat Towers，这是位于贸易区的一对法师塔。这个住所在第8章中有描述。

曼松 使用 拟像术 法术创造自己的复制品，并极力隐藏自己的身份，因为他的成功依赖于不引起那些可能在他计划完成前试图阻止他的人的注意。曼松 尽量避免与冒险者发生不必要的冲突；只有那些进入他的异次元圣所的人才可能激怒他。

如果您选择曼松作为反派，冒险发生在冬天。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_014_0",title:"季节·季节",keywords:["季节"],content:"冒险故事根据你在开始时选择的反派角色在特定的季节展开。如果你在冒险中途切换到一个新的反派角色，除非角色们有足够的休息时间让季节自然更替，否则不要改变季节以匹配。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[7],confidence:"medium",needsReview:!1}},{id:"lore_014_1",title:"季节·春",keywords:["季节","春"],content:"在深水城，初春通常寒冷潮湿。雾雨连绵数日。夜晚常有雾气降临，并且持续到白天。随着天气的改善，城市吸引了更多的访客，随着夏天的临近，街道变得越来越拥挤。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[7],confidence:"medium",needsReview:!1}},{id:"lore_014_2",title:"季节·夏",keywords:["季节","夏"],content:"深水城的夏天相当宜人，是市民和游客聚集在户外的好时机。市场比一年中任何其他时间都要繁忙。然而，有时从南方吹来的暖空气会上升到城市北部和东部的山谷中并停滞。这股空气被困住，形成了可能持续数天或数周的热浪。由于深水城居民不习惯这样的高温，城市的活动会减缓到爬行速度。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[7],confidence:"medium",needsReview:!1}},{id:"lore_014_3",title:"季节·秋",keywords:["季节","秋"],content:"整个秋天，满载食物的马车从周边农场抵达深水城。没有这些丰收，城市居民在冬天会挨饿。寒冷、呼啸的海风提醒深水城人冬天即将来临。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[7],confidence:"medium",needsReview:!1}},{id:"lore_014_4",title:"季节·冬",keywords:["季节","冬"],content:"Waterdeep的冬天非常严酷。当雪堆积在城市周围，冰填满港口，贸易就会陷入停滞，城市封闭其城门。愿意忍受寒冷的市民仍然聚集在本地酒馆和节日大厅，但很少有人冒险走出城墙。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[7],confidence:"medium",needsReview:!1}},{id:"lore_022_0",title:"深水城的生活·深水城的生活",keywords:["深水城的生活","莱拉·银手"],content:`以城市为背景的冒险活动可能很难进行，特别是如果您的玩家角色倾向于闲逛。要让角色们留在深水城，即行动发生的地方，需要让他们感到宾至如归。为此，这里有一些要点需要记住：

在深水城几乎可以买到或出售任何东西。冒险者们没有必要去其他地方购物。

深水城的居民通常对冒险者非常尊敬，因为许多城市中最受尊敬的市民都是前冒险者，而且多年来城市多次被冒险者拯救。

对城市有投入的冒险者们不太可能想要离开它。当您的玩家们完善他们角色的背景时，鼓励他们在深水城建立根基。这次冒险通过在城市中奖励他们地产，并给予他们加入当地派系和公会的机会，进一步增加了角色们的投入。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[10],confidence:"medium",needsReview:!1}},{id:"lore_022_1",title:"深水城的生活·违反法律",keywords:["深水城的生活","违反法律","莱拉·银手"],content:`深水城是一个法律严明、司法迅速的城市。那些决心屠杀和掠夺的冒险者在壮丽之城不会过得好。无论是出于何种原因，对攻击、纵火、盗窃和谋杀的惩罚都是严厉的。

如果角色们表示对了解深水城的犯罪和惩罚感兴趣，可以给他们附录C中的《法律法典》手册。

公开从事犯罪行为的角色很快就会被城市守卫的成员围捕并逮捕。被指控犯罪的人将被带到地方法官面前接受审判。如果角色与有影响力的NPC和派系结盟，辩护人可能会代表他们进行干预。例如，成为领主联盟代理人的角色，如果深水城的开放领主莱拉·银手有理由让他们脱钩，更有可能被免除罪责。

鉴于深水城的法律执行得非常严格，冒险活动有可能以一个或多个角色被流放、被判处多年苦役、监禁或被处死而告终。如果他们的冒险以这种方式结束，那就顺其自然。希望你们的下一个团队会有更好运气。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[10],confidence:"medium",needsReview:!1}},{id:"lore_022_2",title:"深水城的生活·逮捕角色",keywords:["深水城的生活","逮捕角色","莱拉·银手"],content:`当当局出现要逮捕一个或多个违反法律的玩家角色时，您可以用两种方式之一来处理这次逮捕。

第一种方法是通过角色扮演与城市守卫的逮捕官员相遇。这种方法的好处是角色可以选择平静地去或抵抗。缺点是这次遭遇可能会演变成战斗或逃跑的情况，导致一个或多个角色成为逃犯。如果团队中包括一个或多个不守法的角色，这样的结果很可能发生。为了减轻这个缺点，你可以允许逃犯角色与能够帮助澄清他们名誉的NPC建立联盟。

如果逮捕的威胁变得单调乏味，您可以转而采用第二种方法，那就是仅仅通知玩家一个或多个角色已被逮捕。您可以描述逮捕过程、随后的拘留以及导致审判的事件。这种方法的缺点是玩家角色对局势没有控制权。（这种无助感具有现实性的优点，尽管可能并不有趣。）为了减轻这种缺点，您可能允许角色进行属性检定以影响结果；例如，成功的 Charisma (Persuasion) 检定可能使角色能够贿赂官员，或者在法官心中种下足够的怀疑，从而使案件被驳回。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[10],confidence:"medium",needsReview:!1}},{id:"lore_037_0",title:"深水城的派系·深水城的派系",keywords:["深水城的派系","莱拉·银手","贾拉索·班瑞","卓尔火枪手","菲尔莱科特·拉菲恩","克雷比格·马斯奇尔"],content:`不同的派系在深水城有根基，任何具有派系代理人背景的角色（在《剑海岸冒险者指南》中描述）都可以选择加入下面描述的派系之一，前提是角色满足派系的先决条件。

如果你使用的是城主指南第1章中描述的可选声望规则，允许拥有派系代理人背景的玩家掷一个d4，以在冒险开始时确定该角色的声望。更多信息请参阅"追踪声望"侧边栏。

其他背景的角色在冒险后期将有机会加入派系。任何这样的角色必须满足派系的先决条件才有资格加入，并且角色的起始声望为0。

在派系中声望大于0的角色可以在需要时通过联系该派系中有影响力的NPC成员来获得其支持。随着角色声望的提高，所获得的支持质量也会提高。派系也可能帮助那些推动其利益的非成员。下面对派系的描述包括了派系支持可能表现的方式的建议。

你根据每个派系对冒险者重要性或价值的看法来决定派系将在多大程度上协助冒险者。例如，如果角色们赢得了莱拉·银手的信任，并且她对他们的支持成为众所周知的事实，布雷根·达特的成员可能会帮助角色们，以便贾拉索·班瑞能够赢得深水城开放领主的青睐。`,alwaysOn:!1,category:"faction",_meta:{sourcePages:[14],confidence:"medium",needsReview:!1}},{id:"lore_037_1",title:"深水城的派系·布雷甘·达特",keywords:["深水城的派系","布雷甘·达特","莱拉·银手","贾拉索·班瑞","卓尔火枪手","菲尔莱科特·拉菲恩","克雷比格·马斯奇尔"],content:`要加入这个派系，角色必须是卓尔精灵，最好是男性。

布雷根·达特是由被摧毁的卓尔家族中被嘲笑和不光彩的流亡者组成的雇佣兵公司。这个组织的领袖贾拉索·班瑞总是在寻找新成员来填补队伍，对他来说，忠诚是最重要的。

几乎所有布雷甘·达尔特的成员都是男性，因为女性黑暗精灵很少屈尊接受男性的命令。一个女性黑暗精灵可以通过谴责黑暗精灵的母权制，并说服贾拉克斯利她将成为兄弟会的资产，从而在派系中获得一席之地。贾拉克斯利也雇佣非黑暗精灵的特工，但这些人都不知道他们是在为他工作；这样的人不被视为派系的成员。

布雷根·达尔特正在利用贾拉索的一个合法商业企业——海洋少女游艺团——作为在深水城的掩护。海洋少女游艺团由三艘狂欢船组成（分别是抢眼人物、心碎者和地狱使者），船员由伪装的地底卓尔和一大批非卓尔表演者（如音乐家、杂技演员、演员等）组成。船只的货物主要包括可以迅速组装并在城市中游行的马车和花车。卓尔利用这些游行来转移人们对他们非法活动的注意力。

以一位名叫扎尔多斯·佐德的浮夸伊利斯坎船长的魔法伪装，贾拉索从 抢眼人物，他的旗舰，以及其下方的潜水艇 绯红马佩诺斯 上监督一切。他依靠三名 黑暗精灵枪手——菲尔莱科特·拉菲恩、克雷比格·马斯奇尔 和 Soluun Xibrindas——在城中完成大部分肮脏的工作。有关贾拉索及其副手的更多信息，请参见 附录 B。

布雷甘·达特擅长渗透犯罪组织。姗娜萨的卓尔顾问，纳尔·泽布林达斯（见附录 B），实际上是布雷甘·达特的间谍。布雷甘·达特的支持以以下方式提供：

冒险者从匿名来源收到装有硬币的小而无标记的黑色袋子。

冒险者收到了扎多兹·佐德的邀请，邀请他们在他的旗舰上与他共进晚餐，在晚餐期间，贾拉克西勒对他们进行了评估，并在他们给他留下深刻印象时提供帮助。

布雷甘·达特的成员会买通或悄无声息地处理掉威胁冒险者的个人（通常不经询问）。`,alwaysOn:!1,category:"faction",_meta:{sourcePages:[14],confidence:"medium",needsReview:!1}},{id:"lore_037_2",title:"深水城的派系·翠绿闲庭",keywords:["深水城的派系","翠绿闲庭","莱拉·银手","贾拉索·班瑞","卓尔火枪手","菲尔莱科特·拉菲恩","克雷比格·马斯奇尔"],content:`一个角色必须表现出对保护自然或自然秩序的兴趣才能加入翡翠联盟。德鲁伊和游侠尤其受欢迎。

深水城港藏有一些派系成员，他们致力于促进自然与文明之间的和谐。居住在深水城的成员帮助保护城市免受非自然威胁，包括异怪和不死生物。他们还守护着死者之城（深水城的公共墓地）和城市的公园。

翡翠联盟的成员可以在Phaulkonmere找到，这是位于南城区的一座贵族别墅，也可以在Undercliff的Snobedle果园和酿酒厂找到。Phaulkonmere的墙壁环绕着美丽的花园，建筑物上覆盖着苔藓和常春藤。这个地方由两个富裕家族的后代拥有——Tarms家族（长期的Waterdavians）和Phaulkons家族（科米尔血统）。他们大部分时间都在国外旅行，并将庄园委托给一位名叫梅兰诺·费尔布兰奇的半精灵园丁。他由Jeryth Phaulkon加入，她是一位贵族女性转变成的半神，为森林女神梅丽凯服务。

斯诺比德尔果园和蜜酒厂由半身人斯诺比德尔家族经营，其中有一位名叫布洛瑟姆·斯诺比德尔的老德鲁伊。布洛瑟姆的小儿子，达舍尔，大约六个月前在深水城失踪了。他被感染了鼠人病，现在是一个名为碎片回避者的鼠狼帮派的成员。

翡翠联盟的支持以以下方式提供：

联盟成员分享他们从城市中与动物进行的魔法对话中收集到的信息。

梅兰诺·费尔布兰奇（见"翡翠联盟"）在Phaulkonmere为冒险者的动物提供免费食物和照料。

一位冒险者获得了由杰里斯·福尔康（参见"翡翠庇护所"）赐予的超自然魅力。`,alwaysOn:!1,category:"faction",_meta:{sourcePages:[14],confidence:"medium",needsReview:!1}},{id:"lore_037_3",title:"深水城的派系·力量灰",keywords:["深水城的派系","力量灰","莱拉·银手","贾拉索·班瑞","卓尔火枪手","菲尔莱科特·拉菲恩","克雷比格·马斯奇尔"],content:`要加入Force Grey，首先必须成为灰手成员。曾在城市警卫队或城市守卫中服役的个人有资格加入，愿意发誓用生命保卫深水城、其市民和法律的角色也有资格。有前途的冒险者可能会被邀请加入由黑杖，瓦婕拉·莎法尔监督的灰手派系。灰手成员完成由Vajra指派的任务。

力量灰是一群来自灰手组织的精英冒险家团队，他们的战斗技巧与对城市的忠诚度相匹配。力量灰吸引着最优秀的人才。角色们在冒险生涯的开始并不是力量灰的成员，但他们可以通过努力达到那个地位。

每当深水城遇到外交官或城市其他武装力量无法解决的问题时，开放领主可以选择动员力量灰。这样的行动通常是作为最后的手段，因为该组织的一些过去的成员表现出倾向于无节制的暴力，他们造成的破坏与他们表面上阻止的破坏一样多。

尽管开放领主在每次激活单位时都会设定任务目标和参数，但需要完成任何特定任务的Force Grey团队由黑杖亲自挑选的个人组成。

如果力量灰（在某些情况下，灰手组织）的成员因犯罪被捕，开放领主或黑杖法师通常会代表他们进行干预，并协助他们获释。

Force Grey的支持以以下方式提供：

被逮捕的冒险者在瓦婕拉·莎法尔（见附录 B）的宽松监督下被释放。

冒险者们收到了一个有用的稀有或罕见魔法物品，他们被允许使用一段时间（直到它神秘地消失）。

麦伦·战龙（见附录 B）或力量灰的其他受尊敬的成员帮助冒险者们摆脱困境。`,alwaysOn:!1,category:"faction",_meta:{sourcePages:[14],confidence:"medium",needsReview:!1}},{id:"lore_037_4",title:"深水城的派系·竖琴手",keywords:["深水城的派系","竖琴手","莱拉·银手","贾拉索·班瑞","卓尔火枪手","菲尔莱科特·拉菲恩","克雷比格·马斯奇尔"],content:`任何聪明且非邪恶的角色都可以加入深水城的竖琴手。吟游诗人和法师尤其受欢迎。

竖琴手是幕后工作的利他主义者，他们致力于防止邪恶暴君掌握权力。在当前情况下，他们很快就怀疑到散塔林会完全或部分对深水城暴力事件的升级负有责任。竖琴手间谍可能会利用冒险者作为工具来揭露真相。城市中各种贵族和行会首领是竖琴手的同情者。

竖琴手在深水城有几个秘密聚集地，其中包括Ulbrinter别墅，这是一座位于北城区Delzorin街，介于Vhezoar街和Brondar's Way之间，就在Trollskull Alley南边的庄园。家中的精灵女士，蕾米莉亚·港树（朋友们称她为"Remi"），是Lord Arthagast Ulbrinter的寡妇，是派系中的高级成员。其他关键成员包括瑞纳尔·奈沃兰波，Lord Dagult Neverember的疏远儿子，以及米尔特，开放领主莱拉·银手的顾问。有关这些NPC的更多信息，请参见附录 B。

竖琴手更喜欢在繁忙的客栈和酒馆，如打哈欠的门户，或者在如死者之城这样的安静地点进行他们的事务。

竖琴手的支持以以下方式提供：

竖琴手根据情况，向冒险者提供普通和不常见的药水和卷轴，价格可以降低或延期支付。

蕾米莉亚·港树（见附录 B）向冒险者提供有用的信息片段，并且也可能为他们提供临时住所。

如果冒险者们遭到围攻并被压倒，一个或更多的哈珀成员会来援救他们。哈珀救援队通常由一个吟游诗人（见附录 B）或一个魔法师，加上1d4 + 3个间谍们或老兵组成。`,alwaysOn:!1,category:"faction",_meta:{sourcePages:[14],confidence:"medium",needsReview:!1}},{id:"lore_037_5",title:"深水城的派系·领主联盟",keywords:["深水城的派系","领主联盟","莱拉·银手","贾拉索·班瑞","卓尔火枪手","菲尔莱科特·拉菲恩","克雷比格·马斯奇尔"],content:`要成为深水城领主联盟派系的成员，一个角色必须是深水城的公民。那些有犯罪记录的人也可以加入，只要他们表现出对城市的忠诚。

领主联盟是剑海岸和整个北方的一系列城市和小镇的联盟，包括（但不限于）博德之门、米拉巴、秘银厅、无冬城和银月城。联盟成员在需要时必须互相帮助，该组织使用外勤人员（外交官、间谍和刺客）来保护其利益。

深水城是领主联盟中最有影响力和投入的成员之一。深水城的开放领主，莱拉·银手，使用间谍来监视城市中的冒险者，奖励那些将深水城的利益置于自身之上的人。莱拉尔雇佣冒险者作为领主联盟的代理人，其中包括加莱斯特·银鬃。有关这些NPC的更多信息，请参见附录 B。

莱拉尔大部分时间都在深水城宫殿度过。宫殿步行距离内，有维护良好的政府住宅，这些住宅是为其他领主联盟城市和小镇的代表预留使用的。

领主联盟的支持以以下方式提供：

城市警卫官员被告知这些角色正在为领主联盟执行"官方事务"，并被指示在可能的情况下提供支持。

米尔特（见附录 B），一位戴面具的领主，担任莱拉·银手的顾问，以晚宴为借口邀请冒险者到他破旧的宅邸，分享谣言并传授感知的珍珠。

角色们获得了与莱拉·银手（见附录 B）简短会面的许可。`,alwaysOn:!1,category:"faction",_meta:{sourcePages:[14],confidence:"medium",needsReview:!1}},{id:"lore_037_6",title:"深水城的派系·臂铠教团",keywords:["深水城的派系","臂铠教团","莱拉·银手","贾拉索·班瑞","卓尔火枪手","菲尔莱科特·拉菲恩","克雷比格·马斯奇尔"],content:`任何非邪恶角色都可以加入深水城的护手骑士团。牧师、和尚和圣武士特别受欢迎，尤其是那些崇拜海尔姆、托姆或提尔的。

该组织的使命是在邪恶站稳脚跟之前寻找并摧毁它。深水城的暴力浪潮促使该组织的成员寻找能够帮助恢复城市和平的冒险者。

个人可以是派系的成员，同时也可以是神职人员或向特定神或寺庙宣誓的骑士。该秩序的成员单独行动或以小组形式行动。有些是水深城本地人；其他人来自遥远的地方，因寺庙事务来到这座城市。

护手骑士团的支持方式包括：

如果冒险者需要治疗或其他魔法，骑士团的成员可以帮助安排与崇拜非邪恶神祇的当地牧师会面。

如果冒险者遇到法律问题，该组织的一名成员会为他们说好话，并在他们被监禁时照顾他们的事务。

胡拉姆（见附录 B）可能会出现并帮助角色们在即将到来的战斗中。`,alwaysOn:!1,category:"faction",_meta:{sourcePages:[14],confidence:"medium",needsReview:!1}},{id:"lore_037_7",title:"深水城的派系·珊娜萨工会",keywords:["深水城的派系","珊娜萨工会","莱拉·银手","贾拉索·班瑞","卓尔火枪手","菲尔莱科特·拉菲恩","克雷比格·马斯奇尔"],content:`任何人都可以加入Xanathar公会，尽管它的名字如此，但在深水城并没有官方公会地位。然而，在授予会员资格之前，申请人必须通过一项测试，测试总是涉及犯下一项严重罪行。可能性包括谋杀一个以某种方式让姗娜萨失望的公会成员，绑架一个深水城公民，收取赎金，抢劫一辆雇佣马车，或洗劫一个仓库。

在低级行会成员中，关于姗娜萨的真实性质，人们议论纷纷。很少有人知道他们的老板是一个眼魔，更少有人见过或与这个眼魔暴君说过话。

鉴于该派系本质上是邪恶的，晋升基于个人的狡诈或除掉对手的能力。组织内部的竞争非常激烈，通常还带有致命性。邪恶角色可以在这种环境中茁壮成长，但风险很少值得回报。

Xanathar 公会的支持方式包括：

任何被分配任务的成员可能会收到一个怪物保镖或助手（例如一个熊地精，一个天狗，或一个鼠人），他们有秘密指令，如果成员未能按命令完成任务，就杀死该公会成员。

行会允许进入深水城下面的秘道和安全屋（隐藏的地下室）。

姗娜萨 可能会派遣一个 凝视者眼魔（见 附录 B）来帮助（并监视）一个崭露头角的公会成员。`,alwaysOn:!1,category:"faction",_meta:{sourcePages:[14],confidence:"medium",needsReview:!1}},{id:"lore_037_8",title:"深水城的派系·散塔林会",keywords:["深水城的派系","散塔林会","莱拉·银手","贾拉索·班瑞","卓尔火枪手","菲尔莱科特·拉菲恩","克雷比格·马斯奇尔"],content:`黑网有一个开放的招募政策。任何人都可以加入。坚韧和忠诚是新成员中非常重视（但不是必需的）特质。

散塔林会是一个以利润为目的交易雇佣兵和商品（包括武器）的神秘组织。它长期以来一直在寻求在深水城获得政治影响力，但是该城市蒙面领主、贵族和专业公会的力量使得这很困难。

深水城的 散塔林会 是一个分裂的组织。支持 曼松 的人想要摧毁 姗娜萨 并夺取城市的政权和经济控制权。反对 曼松 的人想要在他们自己被当地当局逮捕或赶出城市之前揭露并摧毁他。

冒险者不能加入曼松的事业，但他们可以加入并从反对他的渣尔塔姆那里获得帮助。这个黑网分支的领导者是已经成为商业企业家的退休冒险者。他们的冒险团队被称为厄运突袭者，因为他们的专长是掠夺巫妖巢穴（被称为"厄运"）。他们正拼命地在深水城获得合法的经济立足点，这需要与当地行会和贵族建立联盟。曼松对克萨瑟斯行会的战争使他们的计划陷入混乱。

末日突袭者（在附录B中描述）自认为是深水城真正的散塔林会。该组织的领导者包括达维尔·星歌（机会与谈判大师），伊思崔德·霍恩（贸易与硬币大师），斯齐莫·奇瓶（魔法大师），塔什琳·雅菲拉（武器与雇佣兵大师），以及猎人兹拉吉（暗杀大师）。

散塔林会 的支持方式包括：

Davil 可以安排与有影响力的贵族和城市公会成员的会面。

冒险者可以从Skeemo的商店，位于贸易区的Weirdbottle's Concoctions，以折扣价购买药水和毒药。

塔什林提供价格合理的雇佣兵，其中暴徒每人每天2银币，或者老兵每人每天2金币。

Istrid 提供高达 2,500 gp 的贷款，每十天的利率为 10%。

冒险者可以雇佣 齐拉吉 暗杀某人，作为回报，将来需要履行一些未公开的人情。`,alwaysOn:!1,category:"faction",_meta:{sourcePages:[14],confidence:"medium",needsReview:!1}},{id:"lore_43b",title:"沃洛的深水城手册",keywords:["沃洛的深水城手册","莱拉·银手"],content:"欢迎，旅行者！您手中的这本是关于这座城市最前沿、最新的指南——由我们的开放领主，女士 莱拉·银手 亲自微笑推荐。这本小册子将会很好地为您服务，直到我关于这个主题的开创性作品，《沃洛的深水城指南》——遗憾的是已经绝版很久了，但现在已成为收藏家们珍视的巨著——能够更新并重新印刷。问问任何报纸销售商、旅馆老板、店主、酒馆老板或书商，他们是否很快就会有新版出售的副本！",alwaysOn:!1,category:"setting",_meta:{sourcePages:[163],confidence:"medium",needsReview:!1}},{id:"lore_43c_0",title:"进入深水城·进入深水城",keywords:["进入深水城"],content:`你可能已经抵达深水城，并亲眼目睹了它的许多奇迹。但是，如果这本小册子是因为某些深爱你的朋友或家人的值得称赞的努力，在你的访问之前就落入了你尊贵的眼睛，我将简要解释入境的情况。

在你看到深水城的城墙之前，你已经穿越了水深城领主们声称并控制的土地。如果你从南方沿着贸易之路来，你会在Zundbridge的哨所遇到城市守卫。如果你从北方沿着长路来，你会在Rassalantar镇经过他们警觉的目光。无论你是走陆路还是海路，你很可能也已经被狮鹫骑兵发现——即使你没有发现他们。

不必担心。深水城是一个热情好客的城市，除非你领导着一支暴走的兽人军队，一群鬣狗人群落，或类似的情况，否则你无需担心这些守护者。他们甚至不需要支付通行费。（如果遇到要求通行费的城市守卫，请小心，并在方便的时候尽快向深水城的一位法官报告此事。）

如果你乘坐大型商队或乘船旅行，你需要在到达的城门处向法官登记，或向港口法官登记。法官们很容易通过他们穿的黑色长袍辨认（事实上，他们通常被称为"黑袍"，因此得名），以及总是伴随他们的城市守卫力量。请注意，法官可以在没有审判的情况下作出判决。你应该以适当的尊重对待他们。

如果你以小队或单独的方式陆路旅行，除非你的停留时间超过十天，否则不需要向法官登记。到那时，你必须在港口、城门或城市法院向法官登记。如果你被发现没有这么做，可能会被罚款或强迫劳动。当然，登记会让你受到每月的征税。但正如达尔斯的一个好斗的老熟人曾经告诉我的，'羊要么给牧羊人它的羊毛，要么晚餐就有羊肉吃。'也就是说，法官们无论如何都会找到你，所以你最好一开始就登记。

话虽如此，许多精明的访客，如果业务需要一个月或一个季节，常常会选择住在城市东侧宜人的农田Undercliff的旅馆里。不那么富裕的人经常在Field Ward找到住处。因为这两个地区都不是城市的官方区域，所以它们不受征税。不过，请注意，由于这两个地区还没有被正式接受为城市的区域，它们不享受公会法的安全保障或守望者的保护。如果你选择走这条路，要提高警惕。愚者冲进审计师不敢踏足的地方。

不论你以何种规模的队伍到达，或通过什么方式，在夜晚或冬季到达时，都请准备登记。在冬季和夜间，城门是关闭的。船只在夜间或在即将到来的季节首次霜降之后，通常不会预期到达，而且经常在靠岸时由法官或一队守卫接待，他们会将旅行者留在船上，直到法官到来。

这些规则都不适用于城市最少使用的城门——西门。这个较小的城门通向泥滩——一个泥泞的海滩，被挖蛤人、岸边捕鱼者以及那些勇敢到在冰冷的海浪中洗澡的人使用。那些通过网或陷阱捕鱼为生的人也使用这个城门，他们把小船停在海滩上以避免停泊费。当地人在进出时向守卫登记。没有法官驻守在这个城门，但这里不接受任何新到达深水城的人。

如果你通过空中接近，预计会遭到狮鹫骑兵的积极追击和对抗。只有特别许可的个人和坐骑才能飞越深水城。最好在城市外围着陆，然后步行进入。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[164],confidence:"medium",needsReview:!1}},{id:"lore_43c_1",title:"进入深水城·你抵达城市",keywords:["进入深水城","你抵达城市"],content:"在深水城等待你的辉煌是传奇的。这座城市的每个区域都在这部作品中详细描述，告诉你根据你所在的地点可以期待什么，以及你可能看到和做的激动人心的事情。然而，在此之前，还有一些小事情需要了解，比如了解你访问的地方的历史，以及理解如何在剑海岸最宏伟的大都市中表现自己。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[164],confidence:"medium",needsReview:!1}},{id:"lore_43e",title:"悠久的历史（简述）·悠久的历史（简述）",keywords:["悠久的历史（简述）","巨魔","莱拉·银手"],content:`将会有一个时刻，我们的城市和它的深水湾将在许多领域和世界中声名远扬，财富增长。人们将会知道深水城，我们辉煌的城市，并歌颂它的荣耀。我已如此预见，我努力使之成真。

人类历史记载之前，深水城所在的高原就已经有人居住。但正如北方危险地带的常态，深水城山脚下的文明在巨大的浪潮中起伏不定。精灵学者向我保证，这里曾经是艾林塔拉尔，伊勒凡古老帝国的首都。因此，当一个名叫梅拉尔的矮人勘探者在山下发现了秘银时，这里已经是一个辉煌的地方。与伊勒凡人达成协议后，梅拉尔召集了他的族人和亲属在山下和高原上采矿，因此梅拉尔克林家族开始在地下统治，就像伊勒凡人在地面上统治一样。

但这个富有成效的联盟持续的时间还不到一个矮人的一生，因为精灵的皇帝——他们称之为'coronal'——命令所有人在撤退中离开，在精灵从费伦到他们神秘的永聚岛岛的大迁徙中。并非所有的精灵都同意这个法令，许多人决心留下来。嗯，哪个皇帝愿意心甘情愿地让别人坐在他的宝座上呢？coronal用魔法将艾林塔拉尔全部夷为平地，剩下的精灵分裂成独立的王国。当然，梅拉尔克林家族将这视为他们协议的破裂，从此他们再也没有与精灵打交道。相反，他们在山下挖掘得越来越深，从此再也没有人听到他们的消息。

于是，来到深水港的人类发现它空无一人，非常适合他们自己的目的。在超过一千年的时间里，人们在将成为深水城的地方生活和交易，但他们的身份仍然是个谜——有一个奇怪的例外。我们知道，在这段时期的某个时候，法师哈拉斯特·黑袍在深水城山脚下建造了他的塔，并开始统治周围的土地——直到他，像梅拉尔克林家族一样，在山下消失了。

后来的几位军阀都声称拥有高原上的港口，但其中最被铭记的是一位名为尼莫尔的人。《深水城历史：第一纪元，军阀的崛起》记录了尼莫尔如何建立了一座木制栅栏以保护港口周围的定居点，并宣称统治这个当时被称为"尼莫尔的据点，深水之城"的城镇。北方更远地区的兽人与精灵之间的战争驱使巨魔群南下攻击这座新兴城市，而在这种危险中，尼莫尔因年老去世。当地民众与巨魔之间发生了许多血腥冲突，直到一位名为阿盖隆的年轻人用魔法扭转了战局，对抗"永恒者"，最终将其摧毁或驱散。随着岁月的流逝，阿盖隆的技艺和力量逐渐增强，直到他成为了一位伟大的法师。据说他发现了长生药水的来源，或学会了制作这种药水的艺术，因为他一直活了下来，身体依然处于巅峰状态，几十年如一日。《深水城的历史：第二纪元》，领主的统治开始，记录了在DR 1032年，阿盖隆（当时已经度过了112个冬天）与当时担任深水城军阀的劳尔洛发生了争执。劳尔洛想利用深水城积累的财富和军力建立一个北方帝国。阿盖隆在所有人面前违抗了他，劳尔洛下令将这位法师锁起来。但当阿盖隆用魔法使所有试图抓住他的人退却时，劳尔洛亲自挥剑攻击法师。阿盖隆随后升入空中，正好超出了攻击范围，并用魔法将劳尔洛的剑变成了一条嘶嘶作响的蛇。当蛇攻击劳尔洛时，他在惊愕的追随者面前死亡。

然后阿格海尔召集了深水城军队的领袖和有权势的家族。当信使试图将他们带到城堡时，火焰在阿格海尔的命令下，在空荡荡的军阀宝座上咆哮和噼啪作响，以至于没有人能坐在那里。然后，当聚集的显要人物在接见室会面时，法师坐在了火焰宝座上。火焰立即熄灭，宝座和阿格海尔都毫发无损。

从这个座位——也就是开放领主至今仍然坐着的那个座位——阿格海尔宣布了城市将如何治理。虽然他会公开坐着作为领主，但其他几乎拥有同等权力的领主组成的议会将与他一起统治。但那些其他领主的身份甚至对彼此都是隐藏的，从而防止他们中的任何一个被贿赂或威胁所接近和影响。因此，阿格海尔建立了深水城的治理体系。

阿格海尔在建立深水城的许多其他机构中发挥了重要作用，例如其穿黑袍的法官、狮鹫骑兵以及城市的许多公会。第一位开放领主明智地统治了两个多世纪，直到维持他健康的魔法失效。他现在被安葬在他的塔中，你仍然可以看到它矗立在深水城宫殿的庭院里。不过，请注意不要靠得太近，以免你不慎走进围绕塔楼的无形屏障——我听说是一个"力场牢笼"。

在那个屏障内还有额外的保护咒语，正如试图挑战它们的最后一个人的漂浮骨头所展示的。这个可怜人的名字已经随着时间而遗失，但这个罪犯很可能是一个法师，他试图偷走与他们前主人一起被埋葬的魔法宝藏。现在，他们悬挂在无形力场牢笼之外的空中，大致保持着他们自然的位置，偶尔被强风或恶作剧的孩子们用长棍暂时移位。

阿格海尔明智的统治在Eleasis的第一天被庆祝，这一天已经被称为阿格海尔日。关于这一天的更多信息，请参见"城市庆典"。

在深水城的历史上，许多重大事件脱颖而出。但没有哪个事件对日常生活的影响能超过被称为动荡时期、魔法瘟疫和分裂的三个末日时期——最后一个（希望是最后的）最近。在所有这些场合，神祇之间的战争行为导致了世界上魔法的丧失或扭曲。在动荡时期，深水城站在事件的中心。但更近期危机的影响至今仍可在城市中看到，尽管它们发生在远离深水城的地方。

在动荡时期，众神行走在凡人之间，他们被神秘的至高神奥（Ao）在1358年DR（龙历）降下到这个世界。在那之前，除了众神之外，没有人知道奥的存在，从那时起，我们对此了解得也不多。众所周知，这场危机始于卑鄙而野心勃勃的神祇贝恩（Bane）和米尔库尔（Myrkul），后来巴哈尔（Bhaal）也加入了他们的行列，偷走了命运石板。这些神秘的神器据说决定了众神的力量范围，并规定了他们如何使用这种力量。作为对这一冒犯的惩罚，奥将众神（或至少是人类所崇拜的那些神）降下，并随后要求他们将石板归还给他。

但奥似乎并非全知全能，也不是特别明智。众神没有去寻找石板，因此只能由凡人英雄来解决这个烂摊子。他们做到了，他们的努力最终在深水城达到高潮。正是在深水城山的斜坡上，奥最后一次被看到，当时他赋予了人类英雄凯勒莫（Kelemvor）、午夜（成为了神秘女士Mystra）和赛瑞克（Cyric）神性。

因此，深水城自那以后吸引了源源不断的朝圣者，他们在神秘女士的神庙中崇拜午夜（Mystra），并在死者之城向凯勒莫（Kelemvor）表示敬意，这并不令人惊讶。然而，你可能会感到惊讶的是，深水城人曾短暂地热衷于崇拜奥（Ao）。Cynosure——那个位于市场边缘的巨大大理石柱结构，现在被租用为私人和公共活动——原本是作为奥的神庙建造的。但当他所有的祈祷都得不到回应，人们意识到他们对他所代表的或他是谁一无所知时，对他的崇拜便失宠了。你可以参观Cynosure，看到动荡时期所有主要参与者和事件的雕塑和绘画。在没有安排任何活动（例如公会会议、贵族成年舞会等）的任何一天，公众可以免费入场。

在蓝火之年（1385 DR），魔瘟症席卷了世界。当时无人知晓，但事后得知，希瑞克对密斯拉的长期仇恨终于爆发，导致他谋杀了魔法女神。我当时不在这个世界上——被一股禁锢术的力量所困扰。埃鲁曼斯特后来向我解释了这些事件，但我必须承认，他所说的大部分内容都难以理解。那是一次冗长的讲座，涉及星星、"晶壁系"和"半位面现实镜"等。简而言之，我们世界的部分区域与另一个世界的部分区域互换了，魔法再次受到了干扰。

在这个时期，保护并影响深水城的强大魔法领域变得不稳定。这导致在一次地震期间，深水城大多数惊人的行走雕像灾难性地被激活。在那些年之前，行走雕像经常被隐藏在以太位面，只有在极大危险时才会被召唤出来。城市中的许多人怀疑这些巨大的、有智慧的构造物是否真实存在，更不用说它们是否无形地守护着城市了。然而，魔法瘟疫证实了它们的存在，让所有人都能看到，每个雕像在被停止之前都在深水城中开辟了一条毁灭之路。现在，行走雕像以各种准备或混乱的状态矗立在城市中——这是深水城所谓的辉煌之一。

魔法瘟疫之后是分裂。精灵学者坚持称之为第二次分裂，他们坚称数千年前永聚岛的创造是一个类似的事件。不管你给它什么名字，从1482年DR开始展开的事件是另一个世界——被称为Abeir，我被告知——再次进入我们自己的世界的结果。众神再次被投入凡人领域，这一次体现在被称为被选者（Chosen）的凡人之中。那个老麻烦制造者奥似乎是这一切的原因，尽管他为什么要将众神降下，即使在他们与我们在一起的时候，也是那些实体之间的争议问题。

显然，这一切都被深水城的传奇巫师凯尔本·阿鲁恩森所预见到，正是通过他的智慧以及艾尔明斯特、莱拉·银手——现任深水城的开放领主——以及少数其他人的努力，世界得以拯救。据艾尔明斯特所说，奥因此重铸了命运之碑，恢复了神圣秩序并将艾伯尔与托瑞尔分离。但随你如何理解。据那个狡黠的长须老头所说，他几乎每隔一个月就会在不为人知的情况下拯救一次世界。`,alwaysOn:!1,category:"history",_meta:{sourcePages:[164],confidence:"medium",needsReview:!1}},{id:"lore_43f_0",title:"在城市中生存·在城市中生存",keywords:["在城市中生存","杜尔南"],content:"总的来说，深水城是剑海岸上最文明的城市。然而，文明并不意味着安全，也不意味着容易导航。深水城生活中许多日常元素，居民们视为理所当然，对新来的人来说，是一系列在千里之内任何其他定居点都看不到的奇观和危险。以下是你在城市中度过最初几个小时所需要知道的。请经常参考这一部分！",alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_1",title:"在城市中生存·法律法典",keywords:["在城市中生存","法律法典","杜尔南"],content:`深水城不是一个由僵化等级制度领导的村庄，也不是一个由军阀的一时兴起统治的小封地。这是一座由提尔正义精神塑造的法律之城。通常，你可以信任城市守卫会勤勉地履行他们的职责，你可以期待城市的法官会是公正的。如果你有理由出现在蒙面领主或开放领主本人面前，请放心，如果你的理由是正当的，正义将会实现。然而，如果你发现自己做错了，要知道，尽管可能需要时间在提尔的天平上衡量那个错误，他的锤子将会落下——它将由深水城以复仇的方式挥舞。

与未开化的定居点不同，深水城的犯罪惩罚通常不作为公共娱乐。预定的处决在深水城城堡的高墙内进行，而鞭刑则在最接近判决地点的岗哨执行。守卫尽一切努力安静地将个人拘留，以免扰乱其他市民。那些旁观者通常会回报这种好意，通过远离罪犯和守卫之间的冲突。

深水城拥有一个复杂的法律和习俗体系，由先例设定，其主体可以在《法典》中阅读。这份文件在深水城宫殿有多种语言版本，并且（用通用语）由城门和港口的法师们应要求提供。请注意，《法典》仅提供了各种罪行典型刑罚的大纲，法师们在施以正义时有广泛的自由裁量权。任何戴面具的领主都可以推翻法师的裁决，但当你需要一个戴面具的领主时，他们很少在场。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_2",title:"在城市中生存·武器、盔甲和战斗",keywords:["在城市中生存","武器、盔甲和战斗","杜尔南"],content:`习惯了北方大部分地区粗犷生活的人们通常会对深水城人不携带武器和不穿戴盔甲的事实感到惊讶。然而，深水城并没有法律禁止携带武器或盔甲。相反，它有一种文明的文化，使得这种行为变得不必要。

在深水城，决斗长期以来一直是非法的，任何涉及攻击行为的行为也是如此。被守卫抓到斗殴的个人都将被逮捕并接受审判，不管谁挑起了争端，或者为什么。（通常在饮酒过量的影响下爆发的酒吧斗殴通常会被守卫忽视，只要店主不要求赔偿损失，没有人受到严重伤害。）拳击或摔跤等运动性格斗只有在城市为此目的注册的地点进行时才是合法的。此外，任何超过一尺长的刀片在销售时都要额外征税，这有助于解释为什么深水城居民更倾向于携带刀具和指节铜套进行自卫。

商业机构和个人确实会雇佣武装警卫，但除了贵族或外国使节外，很少有人在城市中带着这种保护四处走动。因此，看到穿着武装和盔甲的个人在街头行走，而且他们并不属于城市的制服或某个贵族家族，大多数深水城人会感到警惕。人们会假设，你不会自找麻烦携带这样的装备，除非你打算使用暴力，或者预计很快会有暴力降临在你身上。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_3",title:"在城市中生存·城市守卫",keywords:["在城市中生存","城市守卫","杜尔南"],content:`你在为城市服务时首先看到的士兵将是城市警卫队的成员，他们巡逻通往深水城的道路，监视城墙，守卫市政建筑，并保护地方法官。然而，深水城的街道是由一个完全不同的力量来维护治安的：城市警卫队。他们的名字相似经常让新来的人感到困惑，所以我提供这个方便的助记方法：'警卫守护城墙，而警卫队监视一切。'

你可以通过制服识别城市守卫的任何成员：一件绿色和金盏花色的紧身上衣和一顶高钢盔。每个守卫通常携带一根长警棍、一把匕首和一个小盾牌。因为深水城的大多数市民不携带武器，这些装备足以有效阻止犯罪活动。守卫成员通常不携带弩或其他远程攻击武器，但是逃离守卫——尽管这可能是当地不良分子的悠久传统——对于新来乍到的人来说很少能成功。我保证所有守卫成员都比你要熟悉他们巡逻的街道和那个区域的居民，即使你在深水城待上十季。

城市守卫在整个城市设有守望站。这些站点通常不在主干道上，而是藏在小的庭院或十字路口旁。守望站可以通过外面挂着的绿色和金色灯笼来识别，即使白天也会通过不灭明焰法术保持点亮。守望站作为组织的总部和军械库。若在其他地方找不到守卫警官，想报告犯罪的人可以在守望站进行报案。守望站通常设有几间拘留室，关押被捕的罪犯，直到他们被押送到法院监狱等待审判。

小队从警卫哨所出发，每天和每晚巡逻城市街道，或者执行涉及保护或调查的特殊任务。仅有的一对警卫队成员可能会在城堡区谨慎巡逻；相比之下，八人小队在码头区巡逻，晚上增加到多达十二人。如果警卫队成员发现他们无法处理的麻烦，他们会吹响尖锐的锡哨子召唤更多成员——这种行为也会提醒附近的市民。

城市守卫成员遵循严格的行为准则，这使他们成为除了由圣武士巡逻的Elturgard之外最受信任的警察力量之一。只要你不从事非法行为，你可以期待不会被守卫所打扰。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_4",title:"在城市中生存·警惕的法师与保护者秩序",keywords:["在城市中生存","警惕的法师与保护者秩序","杜尔南"],content:`在城门处或在向法官注册时，预计会被询问关于你施放奥术魔法的能力。打算在深水城停留一段时间的法师、术士和其他奥术施法者需要向城市注册，并且将被强烈鼓励加入由黑杖领导的警惕的法师与保护者秩序。

当被召唤时，警觉秩序的成员预计要为城市提供服务，担任城市守卫或城市警卫的临时成员。他们的专业知识经常帮助调查人员确定是否使用魔法在城市中犯罪。成员还可以预期在火灾期间及之后、造成多人伤亡的自然事件或其它非魔法灾害中被要求提供援助。

警惕的秩序成员在城市中形成了一个或多或少社交的协会，他们共同工作，监视那些选择不加入他们公会的施法者。任何在深水城由施法者引起的混乱都有可能引起水深城领主的愤怒——因此，警惕的秩序有必要监视其所有成员。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_5",title:"在城市中生存·币制",keywords:["在城市中生存","币制","杜尔南"],content:`正如任何有地位的城市所预期的那样，深水城铸造自己的货币。所有的税收、罚款和行会费用必须用深水城货币或领主联盟任何成员定居点的货币支付。虽然没有法律要求您必须用深水城货币支付商品或服务，但称量外币和检查其纯度的繁琐促使许多零售商和快速兑换业务的经营者——包括货车和出租马车——不接受除深水城铸造的硬币以外的任何货币。

尽管你可以与任何愿意的人交换你的货币为深水城的货币，但在深水城宫殿的兑换处进行兑换不会产生任何相关费用。那里的队伍可能会相当长，需要你预约——通常需要提前一天或更久。为了更快的交易，我推荐任何受信任的锡镴器和铸币公会的成员，或珠宝公会的成员。两者都有最可靠的秤，并遵守公会的汇率。

确保在离开城市前兑换掉塔尔斯和港湾月币，因为它们在其他地方的价值会大幅降低！`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_6",title:"在城市中生存·税费",keywords:["在城市中生存","税费","杜尔南"],content:`正如前一位开放领主达格特·内弗梅伯统治的第一年所确定的，深水城向所有居住在其官方区域内的人每月征收一次税。税款是每人一枚碎片币，年龄超过十岁的人需要缴纳，由城市守卫的巡逻队在每个月的最后一天挨家挨户收取。

有此意愿的个人可以支付一枚龙币作为税费，并获得一份免税令，有效期为十二个月，但每月守卫召唤时必须出示这份免税令，否则需要重新支付。如果守卫敲门而无人应答，一份附有税费估算的留置权通知将被贴在门上。债务必须在下个月结束前处理，款项需支付给任何一位法师。

即使没有固定住所的人，如果他们在任何建筑物内，无论是旅馆还是小屋，被拦截，仍然可以被征税。所以如果你在月底的最后一天外出，你无疑会经历"征税交通堵塞"，因为街道上挤满了试图躲避收税员的人群。

深水城还通过收取其他费用来增加收入，例如以下费用：市场摊位租赁每天收费1个笔尖，无论是否被法师定罪，每人每次定罪额外收费1片碎片，离开城市的车辆每次收费1 条龙，无论空载还是满载，停靠在深水城码头的每艘船收费5条龙（城市船只和外交船只除外），由船长支付，覆盖最多十四天的停留时间（在那段时间内离开港口并返回的船只在重新进入时需支付税费）。

在困难时期，还可以直接征收税款：火灾税（通常每户1龙币），每当火灾摧毁城市大部分地区时征收；城墙税或港口税（通常每户1龙币），用于直接支付所需的维修或扩建费用；长矛税用于在城市需要时为雇佣的雇佣兵提供工资（通常每户每十天1碎片币，直到领主废除该税）。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_7",title:"在城市中生存·出行",keywords:["在城市中生存","出行","杜尔南"],content:"步行是体验这座城市及其所有辉煌的更佳方式。但如果你自带交通工具，天气恶劣，或者有其他原因促使你使用道路，以下是你需要知道的事实。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_8",title:"在城市中生存·交通与旅行",keywords:["在城市中生存","交通与旅行","杜尔南"],content:`深水城是一个拥有宽阔大道的城市，车辆川流不息。从早到晚，甚至深夜，马车上、手推车、骑马者、马车、轻便马车、出租马车以及深水城标志性的高耸拖车（将在下文中进一步讨论）在其主要干道上涌动。幸运的是，大多数道路两旁都有铺砌的人行道，为行人提供了充足的空间，而最宽的道路上还设有抬高的分隔带，使行人过街时可以有一个安全的空间，避开车流并等待车辆通过。

这座城市的古老布局决定了今天的交通模式。深水城位于一个高原上，紧邻一座长长的山脉，这座山脉从海上保护了它的大部分。在城市的南部三分之一，土地从港口向上倾斜，高地路（High Road）和龙之道（Way of the Dragon）是两条主要的南北向道路。这两条路在南门附近的Waymoot汇合，也在贸易区（Trades Ward）中心汇合，那里是城市最狭窄的地方——被建在山的突出部分上的深水城城堡（Castle Waterdeep）和死者之城（City of the Dead）的墙壁所界定。然后，联合大道向北分成高地路，向西则分成一条名为深水城大道（Waterdeep Way）的林荫大道，通往深水城宫殿（Palace of Waterdeep），（不要与它经过的深水城城堡混淆）。在城市的中部，六条林荫大道从深水城大道向北延伸，在那里它们与环绕市场的路相汇合。在市场的另一边，五条林荫大道继续向北延伸。

前述的林荫大道，以及海港区的歌唱海豚街，是这座城市的主要交通干道。出租马车和货车最常出现在这些街道上，交通也最为繁忙。城市中大多数其他道路都是东西向的，但无论它们的方向如何，其他地方的交通通常不那么繁忙，因此过马路相对更安全。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_9",title:"在城市中生存·街道标志",keywords:["在城市中生存","街道标志","杜尔南"],content:"得益于文书、抄写员和职员公会，深水城有一个非凡的习俗，即对其街道进行标记，甚至包括许多小巷和庭院。标识方法因区域和社区而异（包括黄铜牌、石刻和模板喷涂的木牌），但街道名称通常显示在建筑物的角落处的交叉口，大约离地面一打尺高。你正在走的路的名称将在最近的墙上，而交叉路的名称将在拐角处。真是巧妙极了！",alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_10",title:"在城市中生存·地标",keywords:["在城市中生存","地标","杜尔南"],content:`自豪的深水山是一般定位的有用地标。它矗立在西边的天际线上，其远处的山坡一直延伸到海中。山脉的一条支脉向内陆延伸，在这条支脉的最东端矗立着深水城城堡。如果你能看到这些地标，那么相对容易确定自己的位置。山峰高耸在城市南部靠近港口的三分之一地区上空。死者之城位于深水山北脊的对面，北脊向下延伸至胜利之地，即这座城市的大型竞技场。

深水城的一个巨大的行走雕像，现在已经不能移动，提供了另一种在地方尺度上定位自己的方法。荣誉骑士雕像高达九层，是附近任何建筑物高度的两倍，在蜗牛街（Snail Street）和龙之路（Way of the Dragon）之间的建筑群中站岗。由于它几乎位于四个区域的交汇处，你可以用它来判断你的位置。如果在你的位置南面和西面，你就在贸易区（Trades Ward）。北面和西面？那是南部区（Southern Ward）。南面和东面？城堡区（Castle Ward）。北面和东面？你在码头区（Dock Ward）。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_11",title:"在城市中生存·交通管理员",keywords:["在城市中生存","交通管理员","杜尔南"],content:"在交通特别繁忙和拥堵的地区，比如围绕市场的巨大椭圆形道路上，你可能会看到城市守卫的成员担任交通管理员。交通管理员用小蓝手旗示意交通继续，用黄旗示意交通停止。交通管理员经常可以听到吹哨子。当你听到哨声时，看向管理员，看看是否在向你发信号。未能注意可能不仅会导致事故，还可能导致被捕。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_12",title:"在城市中生存·鼠窝",keywords:["在城市中生存","鼠窝","杜尔南"],content:`我相信这些高耸的车辆是深水城独有的。在上个世纪，由来自Lantan的流亡者发明，一辆dray是一种长长的、有玻璃窗的马车，内部设有长凳座位，并在其顶部提供额外的露天长凳座位。驾驶员位于屋顶座位的水平位置，提供了一个视角，可以俯瞰其他交通并与其他dray驾驶员进行眼神交流。当它停下来或减慢速度足以让登上后台阶安全时，你可以从后面进入这个装置。

一个收费员站在下层座位区的后面收取你的硬币（通常是2到4个尼布）。你可以选择坐在车内，或者爬上后面的螺旋楼梯，坐在车辆顶部。大多数货车沿着主要的南北向林荫大道行驶，但有些环绕市场，还有一些在较贫穷地区的较小东西向道路上行驶。请注意，当货车需求高时——在雨中或雪中，或者去往或离开胜利之地的活动时——条件会变得拥挤，非常适合扒手。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_13",title:"在城市中生存·出租马车",keywords:["在城市中生存","出租马车","杜尔南"],content:"如果你希望旅行时相对舒适，并且能够自主决定目的地，只需向任何没有乘客的出租马车司机挥手并大声喊叫。这些漂亮的双轮黑色马车舒适地容纳两名旅客（如果你非常苗条且非常熟悉，可能是四个），他们面对前方的道路骑行。出租马车的司机坐在马车后方较高位置，通过长缰绳和短鞭（安装在杆上）操纵马匹。车费必须在旅程开始前商定并支付，但费用很少超过半打碎片币。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_14",title:"在城市中生存·马车",keywords:["在城市中生存","马车","杜尔南"],content:"经济宽裕的人——或者那些希望在外出时享受豪华体验的人——可以租用一辆完整的马车，其中许多马车的装饰与贵族拥有的马车一样精致。多达八人可以享受这种丝绸般的舒适乘坐体验。价格和服务各不相同，但通常你会同意租用马车、司机的服务以及任何随从仆人或警卫的全天服务。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_15",title:"在城市中生存·冬季旅行",keywords:["在城市中生存","冬季旅行","杜尔南"],content:"深水城的人们在寒冷的月份通常会待在室内，特别是下雨或下雪时。冬季进入城市的贸易和旅行者减少到涓涓细流，因此交通量减少，运货车和出租马车变得更加稀少。幸运的是，卡特和马车夫团与车轮制造者公会以及四轮马车制造商和马车制造商公会合作，将那些仍在运营的运货车和出租马车改造成雪橇，以便即使在最恶劣的天气中也有一些可用。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_16",title:"在城市中生存·发现贵族",keywords:["在城市中生存","发现贵族","杜尔南"],content:`深水城的贵族被赋予了携带武器的权利。在城市的法律中，这不仅仅意味着携带武器的能力，还包括保留多达70名装备齐全的士兵的权利。这些士兵总是穿着家族的颜色和家族的"恩典武器"——一个纹章装置，通常刻在盾牌上，作为斗篷别针佩戴，或者固定在头盔上。城市中的其他人，甚至是外国政要，只被允许保留最多16名武装战士，而且有法律禁止冒充贵族雇员，这意味着其他雇佣兵和保镖通常穿着朴素，以免被误认为是贵族的随从。因此，你可能与贵族在一起的第一个线索是看到大量武装和穿着制服的士兵。

许多贵族，特别是寻求娱乐的年轻贵族，会不带随从或仅与其他贵族一起旅行。在这种情况下，你会因为别人对他们的尊重而知道你在贵族面前。效仿他们，你应该会没事。

首先，要有礼貌。总是用"大人"或"夫人"来称呼已知的贵族。每次见面和分别时，简短的鞠躬或点头是习惯性的礼节。过分谄媚和卑躬屈膝是所有深水城人所鄙视的，但你也应该避免在任何贵族面前表现得过于熟络、自夸或不尊重。虽然这种行为不构成犯罪，并且有关决斗的法律禁止贵族发起直接的武装对抗，但深水城的贵族家族在城市中拥有巨大的权力，往往在意想不到的领域。许多人在像卡利姆沙和科米尔这样遥远的国家都有影响力。可以肯定的是，对贵族的任何冒犯都不会被忘记，也不会容易被原谅。

如果你不确定某人是否是贵族，可以称呼男士为'Saer'或女士为'Goodwoman'。这两种称呼都不会冒犯人，通常贵族会礼貌地纠正你的称呼，告诉你他们实际的头衔。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_17",title:"在城市中生存·贵族与赞助",keywords:["在城市中生存","贵族与赞助","杜尔南"],content:`深水城的贵族是城市内外各种商业的赞助人和投资者，也是艺术的多种表现形式的投资者。他们花费金钱资助庆典、胜利之地的比赛、城市神殿和神龛的维护、市政项目、行会活动，以及慈善行为，如为无名死者提供葬礼。他们的动机多种多样，但无论出于何种原因，他们的行为都为他们赢得了那些从他们的慷慨中受益的人的忠诚和高度尊重。

在没有被介绍的情况下寻求贵族的赞助被认为是一种侮辱，所以你必须首先与贵族的雇员或影响圈中的某人建立友谊。即便如此，也不能保证最终成功；你可能在试图讨好一个最终证明是不择手段或由于其他原因帮助不大的贵族熟人时，浪费大量时间和金钱。我的建议是，无论你的职业是什么，做一些值得关注的事情，深水城的贵族家族最终会表现出兴趣。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_18",title:"在城市中生存·了解贵族的生意",keywords:["在城市中生存","了解贵族的生意","杜尔南"],content:'用我那位来自戴尔斯的好争论的朋友的话说，"在你到鸡群中炫耀之前，先了解其他的公鸡。" 这句生动的格言非常适合贵族的事务，因为当你与贵族互动时，你同时也在与一个人的整个家族——以及一个商业伙伴和盟友的网络打交道。如果你不了解贵族的联系，这种情况可能会让你陷入困境。',alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_43f_19",title:"在城市中生存·公会和公会法",keywords:["在城市中生存","公会和公会法","杜尔南"],content:`深水城生活中的任何方面都至少受到其四十多个行会中一个的影响。几乎所有的职业都有相应的行会，而且几乎没有一个城市居民不属于一个或多个行会，或者不为属于行会的人工作。作为深水城的访客，你需要知道这一点，以免触犯"行会法"。行会法技术上不在深水城的法律条文中，但行会在最古老的现存法律文件中被提及——由Ahghairon本人撰写——而且行会法的规则受到明智市民的尊重。

公会对他们的法律非常重视，城市守卫和法官也是如此。如果你蔑视一个公会的传统，你不仅可以预期会受到公众的鄙视，还会受到法律执行者的访问。此外，许多公会都有自己的指控、审判和惩罚的规则，例如：

面包师公会的成员如果出售烘烤成错误形状的面包，将会被水淋湿并裹上自己的面粉。

嘲笑小丑公会的成员将导致冒犯者在四天内被不少于四名公会成员公开嘲笑。

任何未按规定观察或在水手行会的帮助下卸载货物的船只，其货物将被没收或扔进海港。

许多公会的规则相互交织，这使得外人面临的情况变得更加复杂。在无冬城，如果你想建造一栋建筑，你只需购买土地并雇佣工人来建造它。在深水城，必须首先咨询测量员、地图和图表制作者公会，以确定土地的划分，然后让他们来绘制或批准施工计划。随后，地窖管理员和管道工公会必须清理和准备场地，之后你才能雇佣木匠、屋顶工和石膏工公会的成员来建造结构。

此外，只有当细木工艺师行会和石雕工、泥瓦匠、陶工和瓷砖制造商行会的成员设计并制作了任何木制、石制或陶瓷的装饰元素，并且在最细心的技能铁匠和金属锻造师行会制造并安装了所有门铰链之后，这项工作才算完成。如果建筑物需要连接到下水道或城市供水系统，那么地窖管理员和管道工行会必须再次被召集来完成这项工作。想要安装上釉窗户吗？为此，你需要雇佣玻璃吹制工、玻璃安装工和眼镜制造商行会的成员。

如果你在城市中做生意，身份不仅仅是购买商品和服务的顾客，我强烈建议你寻找一位当地的律师并支付费用，以便他们引导你完成整个过程。没有律师公会存在，所以请确保你的选择是由你信任的人高度推荐的。要了解任何公会规则的特殊性，可以咨询公会总部值班的人员或询问资深公会成员。

话虽如此，从事与行会相关的职业而没有成为该行会成员并不是非法的。行会成员没有法律依据去干涉选择不加入该组织的人的生意。但是，如果你从事某个行业或经营某个业务而没有成为相应行会的成员，消息会传开，你会发现你的货币无法用来购买任何行会成员的商品或服务。由于这个群体包括几乎所有出售生活必需品或收费提供住宿的人，加入行会的好处对于那些在这方面拖延的人很快就会变得显而易见。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[167],confidence:"medium",needsReview:!1}},{id:"lore_458_0",title:"深水城各大区·深水城各大区",keywords:["深水城各大区","莱拉·银手","米尔特","杜尔南"],content:`新来深水城的人常常对深水城居民给予区域的重要性感到困惑。在其他城市，如博德之门和无冬城，区域是由河流或墙壁界定的。但在深水城，一个人可以通过穿过一条街道从一个区域走到另一个区域——这一事实为出租马车的司机提供了一些娱乐，当一个无知的游客请求乘车去相邻的区域时。

每个街区都有自己基于过去居住者、著名或臭名昭著的事件以及持续发生的离奇事物的历史、传说和传统。例如，孩子们（甚至一些成年人）在穿过城堡街区的阿斯玛格小巷时会单脚跳跃。为什么？嗯，阿斯玛格是一位药剂师，他中毒了许多病人，然后在夜间将他们直立埋葬在小巷下。他被发现了，有人说随后从小巷宽石板下的洞中挖出了多达八十具尸体。尽管这发生在一个多世纪以前，但经过小巷的孩子们仍然唱着一首歌："为空洞跳跃，为死者跳跃，在石板上跳跃，在他们的头上跳跃。"当你漫步在战士之路或银街时，听听孩子们欣喜的尖叫声，不妨也去试试。

这些共享的故事和传统赋予每个区域不同的文化，就像阶级和财富的区别一样。然而，没有什么比节日和运动更能促使居民认同他们所在的区域。城市中几乎所有的种族和游行都以区域间的竞争作为庆祝活动的一部分。在这样的日子里，家庭和企业都会展示他们所在区域的颜色，展示他们的吉祥物，并唱起振奋人心的歌曲来庆祝他们居住的地方。如果你在城市里待上哪怕一个月，你肯定会看到这种公民精神展示的某种版本。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_1",title:"深水城各大区·海区",keywords:["深水城各大区","海区","莱拉·银手","米尔特","杜尔南"],content:`海港区自豪地坐落在深水城山日落阴影的高地上。富人和有权势的人（或者那些希望你这样认为的人，并且能付得起租金的人）在这里居住或经营他们的业务。当早期深水城的军阀和海盗获得足够的金币时，他们在曾经被海风吹拂的草地上建造了堡垒。你仍然可以看到一些那些古老城堡的遗迹被纳入居住在海港区的贵族家族的豪华住宅中。要想获得被花园墙环绕的闪闪发光的房屋的最佳全景，可以去钻石街和德尔佐林街交汇处，靠近神秘女士的奇迹之屋，然后简单地转一圈。

蓝色和金色是海港区在竞赛中的颜色，该区的吉祥物是海狮——一种鱼和猫的奇特组合。有一个持续存在但明显是错误的传说，认为著名的位于胜利之地的狮子门是一只海狮张开的大嘴。然而，大门的建筑设计证明这是虚假的，这些设计可以在地图之屋——城堡区测量员、地图和图表制作者行会的行会大厅中看到。

海港区必看的地点当然首先是凯旋场，但就在街对面同样引人注目的是英雄之家——城市中最大的神庙。它奉献给Tempus，其许多宏伟的大厅庆祝城市在战斗和运动中的英雄。区域竞赛的获胜者在胜利后会在这里游行，经常被扛在肩上或在人群头上传递。这是你不应该错过的景象。

你也应该参观奇迹之屋。这无疑是世界上供奉魔法之神——当然，以神秘女士Mystra为首——的最壮观的神殿。尽管你的目光会被其华丽的塔楼、灿烂的马赛克和魔法展示所吸引，也要注意那些在奢华中生长的紫罗兰。这些精致的花儿是Ahghairon最喜欢的，它们被种植在神殿周围以纪念他。

该区域内还有两座同样令人印象深刻的神庙，但它们的特色各不相同。美丽的月亮之屋拥有城市中最高的塔，高约75尺，其顶部的祭司们在四季中沐浴在月亮的光辉之下。而奉献给Gond的启发之手之屋则提供了一种完全不同的体验。在这里，城市中所有伟大的创新思想家都在发明和实验，尝试创造从飞行机器到更坚固的门铰链等各种东西。但不要期望在这里找到像在博德之门那样充满奇迹的博物馆。在这个场所，正如寺庙里的任何人都可能告诉你的那样，'崇拜就是工作'。

如果你在寻找好运，你当然应该去拜访幸运之塔，这是一个专门献给提莫拉的寺庙建筑群。所谓的"塔"实际上是一个有许多柱子的中庭，巧妙地用玻璃封顶。在屋顶下，一个铜制的小提莫拉雕塑，被描绘成一个大笑的年轻女孩，似乎正从一个惊人的喷泉顶部跳跃。为了表示敬意并许愿，你来到一个步道上的喷泉边，把你的硬币扔给提莫拉。如果能够成功地落在她伸出的手中，那肯定是她青睐的明确迹象。

如果您在旅行中需要恢复精力，或者在重要会议或外出前想要打扮一下，请拜访位于美丽神庙的苏恩的信徒们。它的大理石公共浴室和镜子沙龙从黎明前一直开放到黄昏后。这些服务，以及寺庙里许多愉快的服务员的建议和帮助，都是免费的，但鼓励捐款。

海港区的两个公园也许值得你花时间去参观。自然之神神殿，距离幸运之塔仅一个街区之遥，是壮丽的花园，专门献给像梅丽凯和西尔瓦努斯这样的自然神。这个公园对海港区居民之外的所有人关闭。然而，从围绕它的铁栅栏之外，你可以一窥内部的精美神殿、雕像和喷泉。英雄花园是城市中除了死者之城外唯一对公众开放的绿地，但它位于海港区北端，因此很少有游客——这是很遗憾的，因为这座郁郁葱葱的花园中精美的雕塑描绘了对城市历史有重要意义的许多人物。

我犹豫是否要提及海港区的最后一个地点，并且我不会透露在哪里找到它，原因很快就会变得明显。海港区有一座没有窗户或门的房子。你从街上看不见它，住在它附近的人也不会与他人谈论它。当你看到街道和墙壁上铺着蓝色瓷砖，通向穿过周围建筑物的小巷时，你就会知道你靠近了。在夜晚，这些瓷砖会微弱地闪烁着蓝绿色的荧光。进入这个被称为蓝巷的地方有不止一条路线，但出来的路却非常少。大多数进入的人都不会回来。如果你看到蓝色瓷砖，趁还来得及转身离开。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_2",title:"深水城各大区·北部区",keywords:["深水城各大区","北部区","莱拉·银手","米尔特","杜尔南"],content:`要在北城区获得最佳体验，就在黎明前去那里，买一份报纸，然后在一家有街道景观的咖啡馆安顿下来。观察周围社区在你周围悄然苏醒。起初，这里会非常安静，以至于你能听到街道对面开窗透气并清嗓子的居民。然后，鸟鸣声会开始，不久之后，你会听到并看到运货车带着仆人到来。这些不是贵族家庭使用的住家员工，而是被雇来工作一天的人。他们大多来自城市不太富裕的地区，带着他们的工具并穿着他们习惯的服装：洗衣工和厨师穿白色，烟囱清洁工和清洁工穿黑色，贴身男仆和保姆穿灰色，园丁穿绿色，家庭教师穿蓝色。

当这些仆人分散开来敲门并开始他们的工作时，这个区域的居民也纷纷出门，亲切地与配偶和孩子告别，他们的脚步沿着人行道踏行或带他们进入嘎嘎作响的出租马车。在短短的一个小时之内，北城区变得喧闹起来，然后又恢复了宁静，直到一天晚些时候这一过程逆转，居民们从工作地返回，仆人们离开。

这个区域最热闹，也许也是最可爱的地方是Cliffwatch。在这里，深水城所坐落的高原有如此陡峭和高大的悬崖，以至于城墙在它们两侧都中断了。深水城一些最豪华的住宅以及最奢侈的酒馆和旅馆就坐落在这个空间，拥有露台和阳台，让人可以欣赏到东边乡村的美丽景色。然而，你无需支付他们高昂的价格，因为沿着悬崖边的公共步行道为行人提供了充足的欣赏景色的机会。

北城区的颜色是绿色和橙色，它的吉祥物是展翅飞翔的温柔白鸽。许多北城区的房屋屋顶上都有鸽子窝，而在黎明和黄昏时分，成群的鸽子在城市上空盘旋，是一幅令人愉悦的景象。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_3",title:"深水城各大区·城堡区",keywords:["深水城各大区","城堡区","莱拉·银手","米尔特","杜尔南"],content:`城堡区是深水城的心脏和思想中心，如果不是它的灵魂的话。它设有城市的军事力量、法院、政府和市场——北方任何城市中最大的市场广场。它包括城市海军在大港口的码头和整个深水山，是六个行走雕像、众多寺庙以及许多其他地标的所在地。

深水城矗立于城市上方一处从山脉延伸出的巨大陡崖上，其塔楼高耸入云达数百英尺。许多人惊讶地发现这里既非深水城统治者的居所，也非城市管理中枢。这座城堡过去与现在都是城市遇袭时的最后防线，而一个多世纪以来，深水城的统治者始终坐镇于深水宫——也被称为皮尔盖伦宫，长寿市民（包括许多精灵）至今仍沿用这个旧称。

尽管宫殿的规模不如城堡那么大，但它要舒适得多，装饰也更为奢华，许多大厅被政府官员、行会大师和贵族用于会议和法庭程序。如果你有理由被邀请（希望不是被迫！）与深水城的蒙面领主或开放领主会面，那么很可能会在宫殿的接见厅进行。在那里，你可以见证阿格拉隆很久以前首次坐下的古老而谦卑的宝座。

该区域内的许多其他建筑都用于城市业务，包括几个地方法官的法院和城市警卫队的兵营。该区的许多建筑是企业主、律师、出版商等的办公室和会议厅，以至于城堡区的居民人口是所有区中最少的。

除了这本小册子后面会讨论的六个行走雕像之外，这个区还有许多有趣的地标。你几乎不可能在一天之内看完它们所有，但以下是强烈推荐的。

黑杖塔是这个原本美丽的区域内一个矮胖的黑色污点。尽管这座建筑可能看起来不起眼，但注视它太久会让你感到不适，并有一种被监视的感觉——就好像塔本身已经转过一个看不见的、愤怒的目光注视着你。也许你认为这是异想天开。好吧，你自己去试试看！

在山的另一端，靠近海军港，矗立着米尔特的豪宅。它曾经是一座类似堡垒且阴沉的塔楼，自从它长期缺席的主人回来后，已经升级为更精致的建筑风格。

米尔特 与 杜尔南，即打哈欠之门（Yawning Portal）的老板，有着相当悠久的历史。他们一起下到了'井'中，'井'是古代对下山之路（Undermountain）入口的称呼。深水城（Waterdeep）过去常常把罪犯扔进井里，让他们在下山之路的地牢中悲惨地死去。杜尔南 和 米尔特 自愿进入了地牢——不仅如此，他们还带着宝藏返回了。两人都使用魔法延长了生命，但最终分道扬镳。米尔特 继续过着冒险的生活，而 杜尔南 在井上建造了名为打哈欠之门的酒馆，现在，几乎两个世纪后，他收取金币让人下到井里。这不是一个从傻瓜那里拿走钱财的好方法！

光辉的晨曦尖塔，献给拉瑟德尔，是深水城最美丽的神殿之一。但它在这片区域中与塞尔达林神庙相媲美，塞尔达林神庙是献给所有精灵神的。通过梅洛迪山路，这是一条穿过深水城山的隧道，前往新奥兰的音乐和其他艺术学院，是一次奇妙的日间远足。市场提供了一个狂野的景象、气味和声音的组合，人们可能会在这里迷失十天。知识之泉是奥格玛的神庙，是的，但也是这座城市最大的公共图书馆。这里可以浏览到历代的著作——在神庙祭司的警惕目光下。简而言之（如果我可以声称这部分手册是这样的话），城堡区提供了太多辉煌，无法在这里一一列举。

城堡区的颜色是蓝色和紫色，其吉祥物是金色描绘的狮鹫。这些颜色借鉴了城市旗帜的颜色，并且当然指的是狮鹫骑兵。该区的冠军通常来自警卫队、海军或骑兵的行列。尽管这样的竞争者在比赛和竞赛中经常拥有优势，但他们狂热欢呼的粉丝群体自然比其他区要小得多。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_4",title:"深水城各大区·商业区",keywords:["深水城各大区","商业区","莱拉·银手","米尔特","杜尔南"],content:`购物，购物，购物多多！或者吃饭，吃饭，吃饭！或者喝酒，喝酒，喝酒！或者豪华住宿，或者精美艺术，或者传奇派对！城堡区的市场是城市中最大的市场广场，但商人区本身就像一个市场城镇——而且面积至少是市场的三倍。

这个区域无论白天还是夜晚都熙熙攘攘，活动频繁，不仅在街上，还在贯穿整个街区的阳台步道上，这些步道有时高达五层。商店招牌似乎从建筑物中跳出来，建筑物的侧面贴满了争夺眼球注意力的广告。手套店、鞋店、珠宝店、香水店、花店、蛋糕店、酒馆、咖啡馆、茶馆、旅馆、联排别墅、寄宿学校、办公室、舞蹈学院、杂货店、陶器店、盔甲商——只要不违法，你在商人区都能找到。但如果你在寻找违法的东西，商人区很可能也是得到那些的地方。不过，不要过于张扬。城市守卫在这个区域有强大的存在，包括公开巡逻和便衣工作的官员。

作为一个商业如此繁荣的地方，许多行会在这里设有他们的大厅。特别值得一提的是光明之屋，即蜡烛商和路灯工人行会的大厅。在这座建筑外面，有一个货车大小的蜡堆，上面有数百个灯芯，日夜点燃，同时不断增加粘附的蜡烛。里面，行会的最佳作品展出并出售，包括不仅仅是各种颜色的蜡烛、灯具和吊灯，还有精致的蜡制构造，它们描绘了各种主题，从著名人物到龙，再到复杂和抽象的格子图案——全部以奇幻蜡烛的形式呈现。

在白牛广场，魔法使用者应该小心谨慎。很久以前，这个广场是一个放牧区，包括一只在这里出生的白化小牛。小牛的主人建造了白牛旅馆，旅馆在这个地方繁荣了多年，并给了这个地区它的名字。不过，现在你找不到旅馆了。它消失了，在强大的法师Thongalar和邪恶法师Shile Rauretilar及其学徒之间的一场臭名昭著的法术战斗中被彻底摧毁。在这里降临的魔法风暴中，Shile和他的学徒都丧生了，魔法网的结构被撕裂，以至于法师之神Azuth不得不出现并纠正事情。据说他将现实和魔法网重新缝合，但布料上留下了一个褶皱。直到今天，在白牛广场使用的魔法有时会出错，该区域禁止使用魔法物品和咒语。

商人区使用绿色和紫色作为其颜色，其吉祥物是拟身怪。这个传统据说起源于当吉祥物首次被选择时，商人区选择了一个装满金币的箱子作为自己的代表——并因此被其他区的市民嘲笑，因为他们没有选择一个生物。现在，每四年，该区会揭示一个新的物品作为其吉祥物，宣称它是拟身怪。这个物品的本质在揭晓之前会引发许多猜测和谣言。之后的几个月里，这个物品成为深水城恶作剧的来源。地精侏儒和法师会让真实的物品版本上出现幻觉的嘴巴猛扑出来，工匠们会用蛋糕或纸张制作出美丽的赝品，这些赝品在被误认为是真品时很容易被压碎，等等。截至这本手册编写时，当前的拟身怪是一只酒杯。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_5",title:"深水城各大区·南部区",keywords:["深水城各大区","南部区","莱拉·银手","米尔特","杜尔南"],content:`它被称为南部区，而不是南区。沃特达维安人对此很特别，如果你坚持将其称为南区，那么期待被纠正或被认为是个傻瓜。这个名字不仅源于它在城市中的南部位置，还源于随着城市发展而在此区域定居的南方人。今天，这个区仍然招待着大多数访问城市的旅行商人，并且由许多飞地、街区和街道组成，这些地方主要由追溯其祖先来自其他领域的公民占据。

在这里，你可以尽情享受最美味的半身人食物，欣赏卡利希特音乐的最佳歌手，以及检视最令人惊叹的矮人工艺作品——但第一个挑战是找到这些美食和艺术作品的所在。南部区长期以来一直是为旅行者服务的劳动者区域，因此，这里的人们采用了在马厩上方或围绕客栈院落建造房屋和商业设施的建筑习惯，靠近马车队的停放地点。

南部区的居民以他们作为陆路旅行者和勤劳人民的传统为荣，因此，该区的吉祥物是骡子也就不足为奇了。在他们的比赛旗帜上，一只好斗的骡子以狂暴的姿态站在红白相间的背景上——据说这些颜色代表了南部区人民在劳动中流下的血和泪。

月亮球并不是一个地标，但它肯定是一个必看的景象。这不是一个建筑物，而是一个发生在每个月圆之夜的事件，当一个发光的蓝色光球出现在被称为舞蹈广场的广场上时。任何进入球体的生物都会发现，他们只需有意愿就能在其中飞翔。几个世纪以来，深水城人利用这些超自然事件发展出了一种独特的飞行舞蹈风格——但业余爱好者并不受欢迎，除非在满月的某些白天出现。

即使满月没有出现，跳舞广场也值得一游，因为旁边有一家节日大厅——玉舞者。在月亮球体出现期间，人们有时会大胆地从这家三层的酒馆、舞厅和旅馆的阳台跳入魔法领域跳舞。但节日大厅的名字来自于它内部的一个特殊舞者，而不是外面广场上的舞者。'玉舞者'是一个八尺高的玉制女性雕像，它神奇地活化并为顾客跳舞——偶尔还充当保镖。Elminster告诉我，尽管它动作灵活，看起来脆弱美丽，但玉舞者的力量就像石头魔像一样强大。所以享受表演，但不要太喧闹。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_6",title:"深水城各大区·码头区",keywords:["深水城各大区","码头区","莱拉·银手","米尔特","杜尔南"],content:`码头区长期以来被认为是城市中最危险的区域，但田野区后来接过了这个头衔。我毫不怀疑码头区的居民对此感到高兴，因为在某些方面，这个区域从未真正配得上它的坏名声。

是的，除了田野区之外，这里是深水城大部分贫困人口居住的地区。是的，这里是城市中最不识字的人的家园。是的，它的大多数酒馆里都有习惯性饮酒者，而且太多的旅馆按小时收费。但所有人都必须承认这一点：码头区的居民通常在最艰苦的条件下工作最为努力。

仓库、贫民窟和出租公寓占据了这个区域的大部分。街道到处都很陡峭，而且很少有空间供行人通行。没有向导的话，在该区漫游可能是一次令人困惑的旅程。除了码头附近的地区外，商店招牌和任何形式的广告都很少见，仓库和其他商业场所通常根本没有标志。你要么知道自己要去哪里并且有理由去那里——要么你就迷路了，很可能成为扒手或更糟的目标。

在码头区，路灯的状况并不好。它们的蜡烛、油和玻璃太容易被偷或被砸碎。蜡烛商和路灯工人行会在每个季节开始时会半心半意地尝试修复路灯，但在一年的大部分时间里，当地人在夜间行走在这些街道时被迫携带自己的光源。

码头区的颜色是酒红色和橙色，它的吉祥物是一种剑鱼，出于某种已经遗失的原因，它总是被描绘成绿色。码头区的人们非常重视竞争，他们经常从来到城市的粗犷水手中选拔他们的冠军。（有人说他们选拔的是海盗，但那完全是诽谤。）经常有人抱怨，这些男人和女人更像是海洋的公民，而不是码头区本身的居民。但如果他们向地方官注册并纳税，他们就和深水城的任何长期居民一样受欢迎参加比赛。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_7",title:"深水城各大区·亡者之城",keywords:["深水城各大区","亡者之城","莱拉·银手","米尔特","杜尔南"],content:`我可以为死者之城写一本书。这是一个如此迷人的地方，充满了如此多的历史和故事。但可惜，对于《沃洛的死者之城指南》来说，买家会很少，因为它主要对沃特达维安人感兴趣——而这个话题是他们已经非常熟悉的。

死者之城并非一个单调乏味的墓地。它是一个宏伟的公园，有着草地覆盖的山丘、精心打理的花坛、巧妙布置的树木和灌木丛、美丽的雕塑、令人惊叹的建筑以及蜿蜒曲折的砾石小径。很久以前，沃特达维安人基本上放弃了埋葬死者的做法，而是将他们安葬在陵墓中。几个世纪以来，这里的主要陵墓都与一个额外维度的空间相连，死者被带到那里，接受哀悼和安葬。

那些负担得起的人会用雕塑来纪念逝者，使得死者之城成为一个露天博物馆，展出了一些最令人惊叹、令人难忘、悲伤以及彻头彻尾诡异的大理石或青铜雕像。贵族和富有的商人竞相为他们已故的亲人树立最宏伟的纪念物，导致由技艺高超的艺术家创造出了各种风格和概念。

墓地最令人印象深刻的景点之一是战士纪念碑。这座错综复杂、高达六十尺的雕塑描绘了一个由男女组成的圆圈，他们正在击倒巨魔、兽人、大地精、熊地精和野蛮人，这些敌人都在战士周围向后向外倒下。在他们所有人之上，一位飞翔的狮鹫骑士用矛刺穿了一个骷髅骑士，其胸甲上刻有死者之神米尔库尔的象征。但这座雕像同时也是一个喷泉，这些战斗者身上的伤口喷涌着水！不要试图想象它——亲自去看看吧。像沃特达维安人那样去观赏：准备一个中午的盛宴，举行一次野餐，然后漫步于这个地方的美丽之中。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_8",title:"深水城各大区·城外",keywords:["深水城各大区","城外","莱拉·银手","米尔特","杜尔南"],content:"深水城这座城市不仅仅只有城墙内的各个区域。如果你需要访问城市的周边地区，以下是你需要了解的信息。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_9",title:"深水城各大区·野地区",keywords:["深水城各大区","野地区","莱拉·银手","米尔特","杜尔南"],content:`这个区域曾经是深水城最北端两堵墙之间的商队庭院，在战争时期作为杀戮场地而未被开发。由于各种灾难的难民在不被允许进入城市富裕的北部社区后定居在那里，该地区已经发展成为自己的无法无天的城镇。

尽管田野区并非城市的官方区域，但它通常被称为一个区域。然而，守卫并不巡逻这个区域，许多犯罪行为未被调查。城卫队从周围的城墙上监督田野区，但其成员只有在进入或离开城市的人民受到威胁时才会介入。

这个区域是一个泥泞的混乱之地，居住着最贫穷的人和那些利用这些人绝望的人。这里没有下水道系统，也不由清洁工行会提供服务——如果你敢冒险来到这里，你的鼻子会非常清楚地告诉你这一点。我建议你不要在这里花费超过从一个城门到另一个城门所需的时间。

屠夫行会在该区域经营着几家屠宰场、熏肉房和皮革制造设施——这些令人不快的操作已经被赶出了城市中心。给聪明人的忠告：与一个擅长使用刀子的健壮家伙友好相处，是您在田野区最好的防御之一。另一个可能寻求帮助的地方是Endshift Tavern，这是城市守卫下班成员的热门聚集地，位于Endshift Street和Breezeway的拐角处。尽管守卫可能不太愿意提供帮助，但作为访问深水城的游客，从技术上讲，他们有义务帮助您安全到达城市中心。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_10",title:"深水城各大区·副崖",keywords:["深水城各大区","副崖","莱拉·银手","米尔特","杜尔南"],content:`这个城市东侧的这片起伏的草原和小型林地是一个以农业和畜牧业为主的乡村社区，并为旅行者提供服务。它还是城市警卫的一个大型且保护良好的训练营地，以及由城市警卫队（称为补偿农场）运营的监狱农场，那些犯有轻微罪行的人在这里为城市工作以偿还他们的债务。许多侏儒和半身人居住在这个地区，大多数建筑物都是根据他们的体型建造的。

两个贵族家族在地底崖拥有庄园。Amcathra家族的庄园用于安置和最终训练在Amphail镇饲养的马匹，其中许多马匹被出售给城市守卫。Hothemer贵族家族拥有一个庄园，其成员在那里进行陆路贸易业务——远离深水城审计员的触及。

如果您访问这个区域，我推荐斯诺比多果园和酿酒厂，由斯诺比多半身人拥有并经营。他们有一个令人愉快的饮酒大厅和一个为更大的顾客设计的商店，您可以在旺季时自己采摘水果。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_458_11",title:"深水城各大区·地脉迷城",keywords:["深水城各大区","地脉迷城","莱拉·银手","米尔特","杜尔南"],content:`关于深水城下方这个传奇地牢的故事，城里许多人都讲得很好，但我会在这里为你提供一些基本的事实。

在深水城高原之下，坐落着世界上最大的、最深的地牢。它在城市下方蔓延，据说深入地下多达二十层。梅拉金矮人最初挖掘了这些将成为下山的隧道，而德洛矮人据说从下方挖掘了自己的隧道。所有这些都被疯狂的法师哈拉斯特和他的学徒们声称、改变和扩建——他们被认为至今仍然居住在地牢中。是什么驱使他们深入地下仍然是个谜，但下山的诱惑就像海妖的歌声，仍然吸引着许多人。如果你想看到冒险家们深入地下，或者可能一睹一些带着奇妙宝藏返回的人，可以访问城堡区的打哈欠之门。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[174],confidence:"medium",needsReview:!1}},{id:"lore_466_0",title:"城市的辉煌·城市的辉煌",keywords:["城市的辉煌","狼","枭熊","食人魔"],content:"描述让深水城被称为壮丽之城的每一个特色，将需要图书馆那么多的纸张。这本小册子不可能包含它们全部，无论作者的羽毛笔技艺有多高超。然而，我将尽力向您介绍一些之前未提及的景点，并扩展一些之前已经覆盖的内容。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_1",title:"城市的辉煌·便利设施",keywords:["城市的辉煌","便利设施","狼","枭熊","食人魔"],content:`你在剑海岸或整个北方找不到一个像深水城这样文明的城市。这不仅仅是因为这片土地上的法律，还因为这里的生活所提供的舒适。

在大多数其他城镇，你会在清晨摇摇晃晃地走下楼梯，手里提着夜间的粪便去外面倒掉。但在深水城，许多建筑直接连接到下水道。在市场和凯旋广场周围以及最大的城市广场附近，可以找到供外出人士使用的公共设施。在没有现成下水道或公共厕所的地方，清洁工行会的成员每天会多次巡视，分别收集尿液和粪便——分别用于工业和农业。放心，在深水城，你总能找到地方解决个人问题。

还会注意到街道保持得多么干净。这种维护在很大程度上归功于清洁工行会的辛勤工作。在一天中的每个小时，甚至在天黑后的几个小时里，都能看到清洁工在全城各地挥舞着扫帚和推着手推车工作，清除的不仅仅是动物粪便，还有其他垃圾。这项服务对所有人免费，由城市征收的税款支付——尽管如果留下的垃圾量特别巨大，确实会导致行会另外开具账单。

访客很快会欣赏到深水城的另一个便利设施是其水系统。城市中遍布公共喷泉和水井，干净的水源非常充足。许多建筑都有自己的水泵从当地供应中抽取水，有些甚至拥有只需转动旋钮就能出水的水龙头。这种便利性得益于贡达尔人的发明才能，地窖管理员和管道工行会的勤奋工作，以及深水城从伊勒法尼精灵那里继承的魔法。

深水城也是一个光明之城。在城市较富裕的地区，不灭明焰法术照亮了许多标志和路灯。在其他地方，蜡烛和点灯工会保持街道的照明（不包括田野区和码头区最危险的区域）。不仅如此，每天晚上成百上千的漂流球在死者之城上空飘动，每天早晨出发漂浮在城市的其他地方。我向你保证，这不是driftglobes的典型行为！

最后，世界上没有哪个城市像深水城那样文化普及。来自知识之泉的奥格玛祭司提供免费的阅读指导给所有有愿望学习的人，城市中除了小册子印刷商和书籍出版商之外，还有超过三十家印刷传单的出版商。大型纸质广告被贴在巷子的墙上，小型的则由商家雇佣的人分发，以宣传他们的服务。大多数餐饮店的窗户上都贴有印刷的菜单，并且会提供给在店内用餐的人。诚然，在码头区和田野区你会看到较少的阅读材料，但这一事实之所以值得注意，只是因为在其他地方阅读材料的丰富。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_2",title:"城市的辉煌·狮鹫骑兵队",keywords:["城市的辉煌","狮鹫骑兵队","狼","枭熊","食人魔"],content:`深水城没有传说中的哈鲁阿飞行船，但它确实部署了一支空中防御力量。勇敢的城市守卫战士从深水城山顶的顶峰巢穴出发，骑着为这个目的而培育和训练的可怕狮鹫。每位骑士都配备了一枚羽落戒指——不仅为了防止意外死亡，还允许他们表演令人惊叹的空中特技。

在武术表演以及对抗诸如蝎尾狮、鹰身女妖和非法法师等飞行威胁的真正战斗中，狮鹫骑士实际上会从他们的坐骑上跳入开阔的空中！在令人屏息的瞬间，他们像石头一样坠落，以惊人的速度接近目标。他们的对手很少看到致命一击，因为他们被其他骑着狮鹫的骑士分散了注意力。当他们飞越危险时，自由落体的骑士们突然在空中停下，像羽毛一样飘荡，直到他们的狮鹫伙伴俯冲过来，他们重新坐上马鞍。狮鹫骑兵的成员以这种方式协同工作，可以迅速消除对城市的任何威胁——甚至在罪犯的尸体击中下面的屋顶之前抓住它。

狮鹫骑兵队的骑士们被训练要待在屋顶上方飞行，并不是因为他们担心撞上塔楼和风向标，而是因为下方街道上那么多马肉的气味有时会使他们的狮鹫陷入狂暴状态。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_3",title:"城市的辉煌·行走的雕像",keywords:["城市的辉煌","行走的雕像","狼","枭熊","食人魔"],content:`一个多世纪前，在深水城山北麓被称为海鸥跳跃的峭壁上，只有这八个巨像中的一个明显可见。它高90尺，看起来像一个秃顶的人凝视着大海。后来的事件（下面讨论）导致它被改造成今天众所周知的鲨华鱼人谦卑雕像。

当法术疫病在1385 DR年侵袭深水城时，城市中突然出现了六个行走的雕像，它们四处游荡制造混乱，而鲨华鱼人谦卑则保持静止不动。深水城的当局和市民成功阻止了其中三个新雕像，打破了剑女和鹰人，并将捕神者沉入街道直到其腰部。然后，所有雕像神秘地停止了它们的暴行，就像它们开始时一样迅速。当时的黑杖法师查拉·查德伦无法命令它们返回到以太界的原藏身之处。因此，城市自我修复并在它们周围重建。更晚些，在1479 DR年，第八个雕像——狮鹫——从以太界出现，保卫阿格拉隆之塔免受侵入。它在那里栖息了一段时间，然后飞到它目前在深水城山顶顶峰巢穴附近的当前位置。再一次，这一活动似乎超出了黑杖法师的控制。幸运的是，所有行走的雕像现在已经休眠了十多年，仅仅作为深水城力量的美丽、独眼巨人般的提醒。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_4",title:"城市的辉煌·捕神者",keywords:["城市的辉煌","捕神者","狼","枭熊","食人魔"],content:`这或许是城市中最有名的行走雕像，得益于它戏剧性的姿态、它靠近市场的位置，以及它存在本身的不言自明的魔法。这座雕像是一个肌肉发达但面无表情的男性人类，它的左腿陷在街道中直到臀部，这是在它暴走时由当时的黑杖法师施放的法术的结果。它的左手和右脚压在地上，好像它正试图将自己拉出来。它的右臂向天空举起，在它张开的手掌上方浮动着一个石球。它的目光望向石球，眼睛周围的鸟粪图案让它看起来像是在哭泣。

在雕像的四周，爬上它的胸部、膝盖和肩膀，是一栋被命名为"捕神者"的公寓。公寓的房东是安德拉·布莱克克洛，一个很少在城市中露面的孤僻女巫，除非她从漂浮的球体中雕刻的门出来，这个球体是她的家。在她偶尔想要与城市居民见面时（通常是购买魔法用途的奇特物质），她会在天黑后不告而来出现在阳台或屋顶上。她的行为很有礼貌，而且她支付公平的金币。她从不向任何人吐露心声或谈论自己的行为——如果除了她之外还有人曾经见过她球形家的内部，他们也没有公开谈论过。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_5",title:"城市的辉煌·狮鹫",keywords:["城市的辉煌","狮鹫","狼","枭熊","食人魔"],content:"被称为狮鹫的行走雕像形态与它被命名的生物相似。尽管它四肢站立，但它的背部离地面有整整二十尺，使它成为适合风暴巨人的坐骑。尽管它显示出能够飞行的能力，花岗岩制成的翅膀羽毛像鸟的翅膀一样展开，但狮鹫现在只是站在深水城山顶顶峰巢穴附近的高贵姿态中，向东南方向俯瞰着码头区。新来者有时会认为它是深水城狮鹫骑兵队的纪念碑，但深水城人更了解真相。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_6",title:"城市的辉煌·鲨华鱼人谦卑",keywords:["城市的辉煌","鲨华鱼人谦卑","狼","枭熊","食人魔"],content:'多年来，深水城唯一可见的行走雕像简单地被称为"行走雕像"。它位于深水城山脚下，靠近朱斯通街的起点。然后，在1370 DR年它在保卫城市免受鲨华鱼人入侵中发挥了关键作用后，凯尔本·黑杖将雕像重塑成了一个鲨华鱼人的形象。现在它向英雄之家低姿态鞠躬——这是对城市的一种敬意，也是对在那场战争中为城市而战的所有人牺牲的认可。',alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_7",title:"城市的辉煌·醉汉",keywords:["城市的辉煌","醉汉","狼","枭熊","食人魔"],content:`这座行走的雕像在接近市场时停止了它的暴走，然后向后倒下，坐在一栋建筑物上。当它稳定下来时，它的手臂松散地垂在身体两侧，头部向前倾斜到胸前，给人一种它已经睡着的印象。雕像的巨大的石制战斧仍然立在附近，它的柄竖直向上，刀刃一半埋在鹅卵石中。被压碎的建筑物的瓦砾早已重建成了一段宽阔的石阶（带有栏杆和斜坡，常有人把醉汉从上面滚下来），从鹅卵石路面一直通向雕像的膝盖。现在，雕像的膝盖上建有一个两层的酒馆，也是用那些瓦砾建成的，叫做Gralkyn's Tankard。雕像的昏迷姿势和它膝盖上的酒馆使得"醉汉"这个名字自然而然地贴切。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_8",title:"城市的辉煌·梦想女神",keywords:["城市的辉煌","梦想女神","狼","枭熊","食人魔"],content:"这位美丽的女士在她活跃的时候引起了许多混乱。这座雕像看起来像是一位女性精灵，她的头发和衣服在魔法瘟疫期间穿城而过时似乎自然地流动。当行走的雕像停下来时，这一座倾斜倒下，呈现出一位高贵女士在她花园中沉睡的巨大雕塑的外观。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_9",title:"城市的辉煌·荣誉骑士",keywords:["城市的辉煌","荣誉骑士","狼","枭熊","食人魔"],content:'光荣骑士是一座身穿板甲、手持盾牌和长剑的男性战士雕像。当这些行走的雕像停下时，它会向对手鞠躬，然后挺直身躯，收起长剑并卸下盾牌，将其尖端朝下竖立在身旁。随后它保持这个姿势静止不动，面朝西南方向的港口，仿佛一位城堡守卫在轻松站岗。它的这一姿态使它得名"光荣骑士"，并受到南部城区市民的尊敬。',alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_10",title:"城市的辉煌·鹰人",keywords:["城市的辉煌","鹰人","狼","枭熊","食人魔"],content:`这座雕像看起来像是一个有翅膀、鹰头的生物，因此当地人称其为鸟羽人。我可以透露，实际上它与鸟羽人非常相似，鸟羽人是据说居住在高森林星山脉中的鸟人之一。雕像的翅膀紧贴在它的背部，从未展开，留下了它的飞行能力不确定。在它穿越城市的暴走中被制服，现在由于失去了右脚——很久以前被砸碎用于建筑材料，以及右臂，它明显地向东北倾斜。它的左臂向北方伸出，掌心向前，好像在做一个手势说：'停。'

这座雕像的身体已经被挖空，变成了一个由几位富有的租户共享的塔楼，它的官方名称是斯帕朗特塔，以它的所有者命名。雕像的左手伸向北方的一个庭院，庭院里有一个通过手臂雕刻的隧道入口。访客和居民可以在庭院里按铃，随后门卫会确认按铃者，并为租户和预期的客人放下绳梯（或者为身体不便或携带重物的客人拉上绳椅）。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_11",title:"城市的辉煌·剑舞者",keywords:["城市的辉煌","剑舞者","狼","枭熊","食人魔"],content:`这座雕像看起来几乎与荣誉骑士完全相同，除了它是女性形象并且戴着一个开放式头盔。它在法术疫病期间被击倒，之前造成了巨大的混乱和屠杀。深水城北城区的居民将他们对雕像暴走的沮丧和惊愕反应大部分转化为拆除雕像，雕像的某些部分现在可以在北城区各处找到，要么被纳入建筑物中，要么作为独立的雕塑存在。

剑女的头部坐落在北城区由哈桑提尔街、塔萨尔街、瓦尔贡德路和乌斯西布兰街围成的街区中心的一片高大树木中。它的下巴和嘴巴的中心已经被一扇门所取代，这扇门通向一家名为索特的发现的商店。昂德维尔·索特是一位老练的前冒险家，他依靠一根手杖（一些当地人坚称这不仅仅是一根手杖）。他住在这家小巧的商店里，商店里有许多层次、楼梯和平台，填满了头部内部的空洞，里面摆满了由冒险家和其他旅行者出售给索特的各种小玩意儿。这些物品上挂着索特美丽流畅的手写小牌子，上面标明了它们的身份（或者至少提供了关于它们的起源和用途的猜测）。贵族和富有的商人经常为了主题性聚会租借索特的一些商品作为装饰——而且许多学者、炼金术士和法师也会定期拜访他，寻找可能有用的物品。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_12",title:"城市的辉煌·城市庆典",keywords:["城市的辉煌","城市庆典","狼","枭熊","食人魔"],content:"在一年中的许多时候，在深水城几乎每十天就会有一次仪式、比赛或激动人心的公民自豪感庆典。在这里，我简要概述了从锤子节的第一天到夜幕节的最后一天日历上最广泛庆祝的事件。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_13",title:"城市的辉煌·锤子节1: 冬盾节",keywords:["城市的辉煌","锤子节1: 冬盾节","狼","枭熊","食人魔"],content:`作为新年开始的标志，这个庆祝活动是一个广泛认可的休息日，人们会品尝温热的苹果酒和肉汤（通常加入草药以促进健康并带来幻觉），并待在室内。他们会讲述过去一年中引起他们兴趣或重要的事情，并讨论他们打算做或应该处理的事情——或者每个人"都应该保持鹰一样锐利的警觉"——在来年的事情。

这样的谈话很自然地会导致对政治、战争和统治者意图的讨论。通常会查阅地图，人们普遍认为在冬盾节拥有和检查地图是幸运的。在这一节日前的十天里，地图销量很好。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_14",title:"城市的辉煌·深流月14日：盛大狂欢节",keywords:["城市的辉煌","深流月14日：盛大狂欢节","狼","枭熊","食人魔"],content:'盛大狂欢节是由太阳女神苏妮、沙瑞丝和莉拉的神职人员引领的，这是一个跳舞、音乐和享用各种甜食的日子，从巧克力到红色火焰薄荷糖。尽管有些舞蹈是为了表演而放荡的，但所有年龄段都喜欢在街上进行的大型圆圈舞也非常受欢迎。所有的舞蹈在黄昏时结束，之后吟游诗人和歌手为家庭举办"爱情盛宴"。情侣们——或者那些渴望成为情侣的人——会一起溜走，亲吻、交换承诺，并交换小小的爱意象征（通常是被神职人员用忠诚祈祷祝福过的戒指）。即使你没有情人，也请在这个美好的传统中稍微放纵一下舞蹈和美食。夜晚可能很冷，但你的心会被温暖。',alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_15",title:"城市的辉煌·日冠月1日：瑞斯特潮节",keywords:["城市的辉煌","日冠月1日：瑞斯特潮节","狼","枭熊","食人魔"],content:"这个节日以拉瑟德尔的首位先知瑞斯特的名字命名，他是一个年轻的盲童，在七百多年前的今天，被黎明之光治愈了失明。那个神圣的事件发生在银月城附近，但拉瑟德尔在深水城拥有一个更大的神庙，并且有着相匹配的追随者。每一位信徒都会穿上日出色彩的鲜亮服装，并且为了纪念瑞斯特，遮盖一只眼睛直到下一个黎明。如果你想感受当地的氛围，就和你所看到的任何庆祝者对视并眨眼。许多美好的友谊都是从更小的事情开始的。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_16",title:"城市的辉煌·Ches 19: 精类日",keywords:["城市的辉煌","Ches 19: 精类日","狼","枭熊","食人魔"],content:"在这一天，人们认为这个世界与妖精荒野的精类王国之间的面纱被认为很薄弱。尽管这种现象在农村地区引起谨慎（人们避免进入林地，在门口放置食物作为供品等），但在深水城，这是一个大量饮酒、唱歌和跳舞的场合。富人举办精心制作的化妆舞会，而较贫穷的人则穿上自制的服装，挨家挨户地去，通过表演一首歌或短剧来获得短暂的庆祝活动入场。所有人都装扮成精类和精类王国所谓的统治者，如女王泰坦尼亚、奥伯伦和赫萨姆，愚人王子。那些倾向于在这种轻浮面前保持阴沉的人最好待在家里，因为庆祝者会尽最大努力从他们遇到的人那里引发微笑。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_17",title:"城市的辉煌·切斯月21–30日：舰队觉醒节",keywords:["城市的辉煌","切斯月21–30日：舰队觉醒节","狼","枭熊","食人魔"],content:`这个节日庆祝海洋、海上贸易以及掌管海洋、导航和天气的神祇。它贯穿了日冠月的最后十天，并包括一系列划船比赛、造船师之屋举行的造船师舞会，以及铜杯节日大厅举行的行会赞助的晚会。根据习俗，各项比赛的获胜者不会保留他们的奖杯和收入，而是在节日结束时将它们送到海滩上位于大港口东入口的女王塔，乌姆贝尔莱的神庙的祭司那里。

舰队觉醒节的最后两天是公海节庆祝活动的时间。在这段时间里，人们大量享用海鲜，海港里撒满了花瓣，城市守卫会从一家酒馆到另一家酒馆为乌姆贝尔莱收集供品。在大型节日集会上也会出现收集箱。在节日最后一天的日落时分，收集到的钱币被放入箱子中，然后倾倒在海港最深处。

这个节日自两千多年前第一次贸易集会在此举行以来，就以多种形式存在，无数的财富仍然沉没在长久以来被称为乌姆贝尔莱的藏宝处的水域。该区域由人鱼守卫严密监视，他们的固定命令是杀死任何试图扰乱它的人。有关宝箱拥有魔法保护的传言满天飞；有一个故事讲述了一些盗贼在几年前偷走了部分收藏，并试图以虚假借口离开城市，但他们的船只刚离开港口，就突然起了风暴。一个巨大的手形波浪将盗贼扫入海中，但放过了船只和其船员。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_18",title:"城市的辉煌·塔萨克月1-10日：沃金节",keywords:["城市的辉煌","塔萨克月1-10日：沃金节","狼","枭熊","食人魔"],content:"这个节日长久以来汇集了许多古老的假日于一个名称之下，将这些庆祝活动延伸成持续十天的假日季。在向财富和贸易女神致敬的仪式中有这些：商队（塔萨克 1号。这个赠送礼物的节日纪念了季节中第一批商队抵达城市的传统。许多父母在家中为他们的子女藏礼物，告诉孩子们这些礼物是由老卡瓦斯留下的——一个随第一批抵达深水城的商队而来的神话般的小贩，他的马车载满了供孩子们享受的玩具。Goldenight（塔萨克5号。这个节日庆祝硬币和金，许多商家整夜营业，提供午夜销售和其他促销活动。一些庆祝者和顾客用金粉装饰自己，将硬币作为首饰佩戴。公会会议（塔萨克 7）。在这个假日，公会成员聚集在他们的大厅里，宣布新政策并庆祝一年结束的业务。这些聚会以由几个公会赞助的盛大节日和舞会达到高潮，从黄昏持续到黎明，并占据了市场、焦点、胜利场以及两者之间的所有区域。Leiruin (塔萨克 10]。在很久以前，瓦肯抓住了试图在交易中欺骗她的莱拉，幻象和欺骗女神，并把她埋在熔化的金山下作为惩罚。作为那个事件的纪念，Leiurin是公会成员支付年度会费的日子，也是公会大师与深水城领主会面并更新他们一年宪章的日子。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_19",title:"城市的辉煌·米尔图6日-9日：耕耘与奔跑",keywords:["城市的辉煌","米尔图6日-9日：耕耘与奔跑","狼","枭熊","食人魔"],content:'城市周围的农村地区以传统的方式庆祝这个节日，共同进行耕田和移动（或"奔跑"）牲畜的活动。但在城市内，这个节日则是通过一系列比赛来庆祝的。每个区域都会举行赛跑、赛马和战车比赛，每个区域的获胜者在凯旋广场进行比赛。如果你想看到各个区域活跃起来，这就是时候了。选择你最喜欢的区域，穿上它的颜色，并与其居民一起欢呼。更好的是，如果你有冒险精神，就在你偏爱的区域报名参加比赛吧！谁知道呢？你的名字或形象可能很快就会在英雄之家里占有一席之地。',alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_20",title:"城市的辉煌·Kythorn 1: 巨魔潮",keywords:["城市的辉煌","Kythorn 1: 巨魔潮","狼","枭熊","食人魔"],content:"在这一天，纪念深水城在第二次巨魔战争中的胜利，孩子们在城市中奔跑，模仿巨魔，敲门和咆哮，从正午到黄昏。家庭和商店主人应该给孩子们糖果、水果或小物品。那些不给糖果的人可以期待在日落时分成为恶作剧的目标。这种恶作剧通常以'巨魔抓痕'的形式出现在门窗上。那些怀有更恶意的人在凌晨尖叫，并把生鸡蛋扔向窗户、招牌以及试图阻止他们的人的头上。手头准备一些糖果或甜点，你住的地方一切都会平静。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_21",title:"城市的辉煌·Kythorn 14: 公会大厅日",keywords:["城市的辉煌","Kythorn 14: 公会大厅日","狼","枭熊","食人魔"],content:"这一天是贸易集市的时间。大多数商店都关闭了，除了步行食品小贩外，街头销售都被暂停。公会大厅日庆祝每个人的劳动成果，通过展示新产品、创新、时尚和宣传公会成员服务和商品的范围与质量的标志来揭示。这些展示通常以闪闪发光的形式出现，但公会有时也会赞助短暂的戏剧或其他雇佣的娱乐活动（杂技演员、歌手、由业余法师和专业讲故事者进行的魔术表演），在这些活动中分发奖品或免费样品。许多公会在这段时间尝试招募新成员。公会大厅日是浏览城市商品的绝佳时机——即使你买不起你看到的东西也没关系，因为那天你反正也买不到。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_22",title:"城市的辉煌·Kythorn 20: 龙降日",keywords:["城市的辉煌","Kythorn 20: 龙降日","狼","枭熊","食人魔"],content:`Kythorn的这一天，人们通过篝火和仪式来'驯服'或'驱赶'龙。在深水城，庆祝活动以围绕用木头和布制成的、里面填充稻草的雕像的游行形式进行。每个雕像都有名字并有传统的描绘，因为它代表了这座城市在其历史上面对过的少数几条龙之一。在雕像被游行到龙被击败或被赶走的广场附近后，这个巨大的雕像被焚烧。

庆祝活动的高潮是在深水山的斜坡上焚烧红色Kistarianth的肖像。然后，一个龙巫妖版本的Kistarianth也被抬上斜坡并被焚烧。这些活动象征着Kistarianth首先被圣武士Athar击败，几十年后又被他的儿子Piergeiron击败。传统规定，在耕种和赛跑期间赢得比赛的人扮演屠龙者的角色，战车赛的冠军代表Athar，马赛的冠军扮演Piergeiron。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_23",title:"城市的辉煌·Flamerule 1: 创始者日",keywords:["城市的辉煌","Flamerule 1: 创始者日","狼","枭熊","食人魔"],content:`这一天纪念城市的诞生。胜利之场是展示深水城历史的幻影展示的地点，以及卫兵和其他杰出人物的武术表演。许多节日大厅赞助创始者日服装比赛，奖品颁发给那些穿着最佳历史人物服装再现的人。

曾经因为被认为是轻佻和分散注意力而被禁止的将深水城城堡用幻象覆盖的做法已经恢复。几位法师联手产生这种效果，这似乎将城堡变成了尼莫亚的古老木制堡垒。这种幻象通常从中午持续到日落（除非有人有胆量和魔法力量来驱散它），并且被视为令人惊叹的魔法艺术作品。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_24",title:"城市的辉煌·焰拳月3-5日：索尔宁",keywords:["城市的辉煌","焰拳月3-5日：索尔宁","狼","枭熊","食人魔"],content:'索恩恩节是瓦肯和拉瑟德尔的节日，用于规划商业、签订条约和协议，以及接待来自未知土地和传统敌人的使者。在这三天的场合中，人们会喝很多酒，正如俗话说的，"我的敌人就像我的家人一样。"如果您是这座城市的新来者，这是与新的商业伙伴接触或为某些事业获得财务支持的绝佳机会。多年前，在一个温暖的索恩恩节晚上，我签署了撰写《沃洛的深水城指南》的协议，所以谁知道你自己的主动性会带你去哪里呢？',alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_25",title:"城市的辉煌·Flamerule 7: 莉拉之夜",keywords:["城市的辉煌","Flamerule 7: 莉拉之夜","狼","枭熊","食人魔"],content:"最初只在深水城举行的庆祝活动，这个节日自那以后已经沿着剑海岸上下传播。它最近因为博德之门开始的燃放庆祝烟火的习俗而人气大增——所有烟火都购买自该城市的费洛吉尔烟火店，并且当然只有城市警卫队使用。这个通宵的节日以舞蹈和舞会的形式在整个城市庆祝欢乐女士。从健康的果汁到致命的烈性酒精饮料，粉色饮品被尽情享用。烟粉爆炸的轰鸣和噼啪声整夜不断，所以你不妨和当地人一起熬夜，享受这场表演。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_26",title:"城市的辉煌·Eleasis 1: 阿格拉隆日",keywords:["城市的辉煌","Eleasis 1: 阿格拉隆日","狼","枭熊","食人魔"],content:"在这一天，举行许多小型仪式，以纪念第一位开放领主。深水城的领主们向阿格拉隆和守望秩序举杯，公会大师以阿格拉隆的名义向领主们举杯。平民在阿格拉隆塔周围、死亡之城的他的雕像上，以及奇迹之家的祭坛上留下紫罗兰（阿格拉隆最喜欢的花）。吟游诗人在全城演唱纪念这位法师的歌曲。开放领主访问深水城的酒馆和旅馆，向人们致以良好的祝愿——发表简短的演讲，向阿格拉隆的记忆举杯，购买一轮饮料，或支付餐费或住宿费。不用说，这类场所在全天通常都是客满的。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_27",title:"城市的辉煌·Eleint 21: 明亮剑日",keywords:["城市的辉煌","Eleint 21: 明亮剑日","狼","枭熊","食人魔"],content:"在这一天，城市警卫队、城市海军和城市守卫队——全都穿着闪亮的制服——举行游行，展示武术技能，并举行模拟战斗。那些希望加入他们行列的人有机会展示他们的能力，通常是用木制练习武器与经验丰富的士兵进行比赛。制作和销售武器的商人在市场公开销售他们的商品，能够投掷或耍弄武器的专家展示他们的技能，各个区域在摔跤和拳击比赛中竞争。这一天最令人期待的部分是，当胜利之场和周围街道上的马被清空，以便狮鹫骑兵可以在体育场上空的人群进行空中表演。守望秩序的成员向骑兵展示了虚幻的敌人，让狮鹫骑士在人们观看时进行激动人心的战斗。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_28",title:"城市的辉煌·Marpenoth 3: 奇迹日",keywords:["城市的辉煌","Marpenoth 3: 奇迹日","狼","枭熊","食人魔"],content:"贡达尔人的富有想象力的发明在这一天被展示出来，并在城市中游行。这些装置从新的橱柜铰链这样简单的东西到可以行走或滚动的巨大机械构造都有。然而，失败是发明的情人，这意味着很少有一年庆祝活动没有一些显著的中断。马尔切尔的飞行椅就是这样一个最近的奇特装置——一个在上升过程中表现得非常出色的装置，但却无法下降。马尔切尔被狮鹫骑兵救出，但他的飞行椅漂走了，从此再也没有人见过。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_29",title:"城市的辉煌·Marpenoth 7: 石刃日",keywords:["城市的辉煌","Marpenoth 7: 石刃日","狼","枭熊","食人魔"],content:`石刃日是一个所有信仰的节日，在这一天人们努力不让自己闲下来。即使是玩耍中的孩子们也被鼓励去挖洞、建造沙堡或制作粗糙的模型。

水深港居民认为石刃日是一年中开始建筑建设的最佳日子，无论是挖掘地下室还是铺设地基。普遍的感知是，在石刃日开始新项目的人们可以期待在来年的工程上得到祝福，而那些在这一天没有做任何建设性事情的个人可以期待在来年遭遇各种不幸。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_30",title:"城市的辉煌·Marpenoth 10: 混乱统治日",keywords:["城市的辉煌","Marpenoth 10: 混乱统治日","狼","枭熊","食人魔"],content:"紧随石刃日之后的是混乱统治日。这一天向不幸女神贝沙巴致敬。城市居民被期望打破信任、违背誓言，并违背常规秩序——只要实际上没有违反法律，也没有造成后来无法弥补的裂痕。在混乱统治日期间，贵族为他们仆人服务餐食，孩子们接管学校，牧师向他们神的敌人献祭，任何希望参加的人都可以参与公会的贸易。恶作剧由许多人上演，从简单的把戏到需要精心策划的。日落标志着庆祝活动的结束，大多数人花费晚上的大部分时间清洁和重新整理第二天的事情。许多访客拒绝参与，但这样做往往会带来不幸，而不是避免它。出于对怀疑论者带来坏运气的恐惧，市民尽力避免与任何已知没有参与的人交谈，或以任何方式与他们打交道，直到诸神之日。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_31",title:"城市的辉煌·Marpenoth 15: 诸神之日",keywords:["城市的辉煌","Marpenoth 15: 诸神之日","狼","枭熊","食人魔"],content:`这个节日纪念1358 DR年神战结束的周年，当时费伦的众神回到了天堂。私人神龛被摆放到户外，许多人佩戴他们所崇拜神祇的圣徽。在深水城，诸神之日的传统严格限制了魔法的使用，以纪念动荡时期产生的野性魔法。虽然不是完全禁止，但施法只有在自卫或极端需要的情况下才被允许。

在夜晚，这个节日变得庄重而严肃，许多深水城居民为他们在神明庇护下的生活向神明祈祷表示感谢。狮鹫骑兵在深水城山顶上点燃了巨大的篝火，以纪念陨落和升起的神祇米尔库尔、赛瑞克、克勒姆沃尔、密斯特拉、海尔姆和奥。为了感谢他们在米尔库尔入侵期间以及随后在南方、码头和城堡区域肆虐的火灾中的保卫，诸神之日也是深水城半官方的"对警卫和守卫友好日"。你可以自由参与，通过分发小礼物和亲切的话语，但请注意，任何价值超过几个小硬币的礼物都可能被解释为贿赂。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_32",title:"城市的辉煌·Marpenoth 30: 说谎者之夜",keywords:["城市的辉煌","Marpenoth 30: 说谎者之夜","狼","枭熊","食人魔"],content:`这个神圣的日子向莱拉和面具致敬。为了安抚这些神祇并避免引起他们的注意，各行各业的人们戴上面具和服装（无论是魔法的还是普通的），伪装自己，扮演与自己不同的身份。常见的面具风格包括面具的黑色面具象征和莱拉神职人员的镜面脸。但是你的伪装没有界限，越精致和离奇，佩戴者就越受庆祝。

庆祝活动从傍晚开始，人们将蜡烛放在挖空的葫芦或雕刻有面孔的南瓜里。每个南瓜代表一个戴面具的人，而里面的光代表灵魂的真相。只要蜡烛保持点燃，说出的谎言和尴尬的事情不会玷污一个人的声誉，因此庆祝活动经常会短暂地陷入无政府主义的享乐主义。

据说，任何在庆祝后返回发现自己的南瓜灯未点亮的人都会遭遇不幸，因此购买一支优质蜡烛，并确保你的葫芦远离风。故意吹灭别人的蜡烛或砸碎别人的南瓜是禁忌的，这可能会招致两位神祇的愤怒——然而这样的事确实会发生。

在这个夜晚，各种恶作剧和诡计都是常见的，人们预料到会有谎言和愚蠢行为。这一天小偷非常多，所以很少有人携带很多钱币，而是在前一天晚上将其藏匿在某个地方。相反，人们会在他们的口袋和腰带袋子里装满糖果。传统上，扒手应该拿走糖果并留下一个信物作为回报（一个小玩具，一张折成形状的彩色纸，或类似的东西），但这些年来这已经演变成成年人之间互相交换糖果，并且只是简单地给索要糖果的孩子们糖果。

按照习俗，说谎者之夜不进行交易也不签订合同，因为没有人相信各方会遵守它们。幻术师和舞台魔术师（无论是通过魔法还是实际能力）四处走动，为私人派对提供娱乐（已在前一天提前支付），或者在公共场合表演，希望一场精彩的表演能为他们赢得一餐，也许还能在未来获得参加私人派对的机会。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_33",title:"城市的辉煌·Uktar: 塞尔菲之夜",keywords:["城市的辉煌","Uktar: 塞尔菲之夜","狼","枭熊","食人魔"],content:`在Uktar月最圆的任何夜晚，深水城居民庆祝塞尔菲之夜。这位女神当然是整个满月阶段的崇拜焦点，但在这个夜晚的主要仪式是游行，崇拜者们在月亮升起时离开月之屋前往港口，在那里大祭司挥舞着四月亮法杖为所有航海者祝福。这个神圣的遗物据说是塞尔菲在对抗沙尔的第一场战斗中使用的权杖，以及在动荡时期与她妹妹战斗时再次使用。它在神战之后奇迹般地出现在深水城，并自此成为许多神迹的焦点。你可以在一年中其他时间在月之屋从严密守卫的距离观看它，但只能在远处。

如果你幸运的话，你可能会看到四月亮法杖流泪。据说塞尔菲的眼泪偶尔会在权杖上显现成水滴，被神职人员收集用于制作药剂，这些药剂可以治疗伤口、治愈狼人病，并作为圣水使用。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_34",title:"城市的辉煌·Uktar 20: 最后一捆",keywords:["城市的辉煌","Uktar 20: 最后一捆","狼","枭熊","食人魔"],content:'有时被称为"小盛宴"，这一天的居民宴会是为了庆祝一年收成的丰富。邻居们互赠小礼物（传统上是手工桶装的啤酒、果酱罐或烟熏鱼和肉类），并且"最后一封信"被收集起来由船长和商队商人通过船只运送——之所以这样称呼是因为它们是在旅行变得困难之前最后一批离开城市的人。在深水城的众多庆祝活动中，这个节日或许是最轻松和令人放松的。计划多花一点钱购买美食，并与最亲近的人一起享用一餐，无论是最亲爱的人还是旅馆走廊对面的人。',alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_35",title:"城市的辉煌·Nightal 11: 嚎哭日",keywords:["城市的辉煌","Nightal 11: 嚎哭日","狼","枭熊","食人魔"],content:`为了纪念马拉，城市卫队的成员们在这一天分组离开城市，追捕已知对农民和旅行者构成威胁的目标，包括强盗、狼、枭熊们、食人魔们和出没在道路与荒野的巨魔。这些狩猎通常不会超过十天。在同一段时间内，城市守卫在城墙内展开对罪犯的严密追捕。如果你有任何理由怀疑自己在法律眼中的地位，在豪尔登之后的至少十天内，请避开深水城。

深水城的孩子们没有真正的狩猎活动，他们在嚎哭日这天参与模拟狩猎，成年人会装扮成怪物，孩子们则模仿捕杀这些捕食者的游戏。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_466_36",title:"城市的辉煌·Nightal 20: 辛里尔",keywords:["城市的辉煌","Nightal 20: 辛里尔","狼","枭熊","食人魔"],content:"在这一天的黄昏时分，人们会外出寻找对他们祖先有利的特定星星，或者与他们自己出生相关的星星。然后他们尝试整夜保持清醒，在外面用篝火、歌声和热饮庆祝。多云的夜晚往往比晴朗的夜晚吸引更多的人群，因为通过薄雾瞥见你的星星被认为是Tymora的祝福。在建筑物内，服务人员保持熊熊燃烧的火堆，并忙于制作食物，以确保庆祝者在整个漫长的夜晚以及第二天早晨都能得到食物。如果你没有你自己特别的星星，你会发现许多愿意出售星图的商贩，他们可以根据你的出生地和出生日期来占卜哪颗星星是你的——并为你指明正确的方向，换取一两片碎片。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[180],confidence:"medium",needsReview:!1}},{id:"lore_492",title:"结束语·结束语",keywords:["结束语"],content:"好了，亲爱的读者们，你们已经读到我手册的结尾。如果你们还没有到达这座城市，它的辉煌等着你们。如果你们正在城墙之内阅读这段文字，请放下这本小册子去体验这座城市。你们甚至可能会看到一个非常英俊的作者在辛勤地评审深水城的一家饮酒场所。如果你们这样做了，我提前向你们致意：'幸会！签名要七枚小硬币。'",alwaysOn:!1,category:"setting",_meta:{sourcePages:[188],confidence:"medium",needsReview:!1}}],_=[{id:"hook_040_h1",goalRef:"qst_main_dragonheist",priority:95,clues:[{id:"clue_040_h1_c1",channel:"npc",content:"一个抚着胡子、戴软帽围围巾的男人逆着人流挤过来自我介绍：编年史家、法师、名人沃洛赞普·格达姆。他说自己有位朋友在这几天的血案里失了踪，愿意当场先付每人十枚金龙，找到人再付十倍。",deployableSceneIds:["scn_040","scn_04a"]},{id:"clue_040_h1_c2",channel:"environment",content:"码头区的一个街口被城市守卫封了：半打尸体躺在鹅卵石上，三个血迹斑斑的人被缴械跪在地上，官员正在盘问目击者。「走吧，」其中一位说，「这里没什么好看的。」",deployableSceneIds:["scn_04a"]}],_meta:{sourcePages:[21,22,23],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：本章启动钩子。原文该阶段只给了这两条线索（沃洛的当面委托 + 街头火并的氛围铺垫），按红线不补造第三条。"}},{id:"hook_04a_h1",goalRef:"scn_063",priority:90,clues:[{id:"clue_04a_h1_c1",channel:"rumor",content:"串烧龙的老主顾（要么收钱，要么被问急了）会说：那晚跟着弗伦和那位贵族公子出门的五个人再没回来过，但他们常出入蜡烛巷上的一间仓库——「在门上找蛇的标记」。",deployableSceneIds:["scn_04a"]},{id:"clue_04a_h1_c2",channel:"npc",content:"老 Xoblob 商店的紫袍侏儒记得那个红发年轻人在店门外被五个黑皮甲的粗汉打倒拖走，其中一人脖子上刺着一条黑色翼蛇。",deployableSceneIds:["scn_04a"]},{id:"clue_04a_h1_c3",channel:"environment",content:"蜡烛巷里唯一没被砸碎的路灯被不灭明焰照着，正对面是一栋两层的破仓库；被灯光照亮的门把手上方，画着一条黑色的带翼长蛇。",deployableSceneIds:["scn_04a","scn_063"]}],_meta:{sourcePages:[23,24],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：把「码头区查访」三条线索汇到蜡烛巷仓库这一个去向上。"}},{id:"hook_071_h1",goalRef:"scn_077",priority:80,clues:[{id:"clue_071_h1_c1",channel:"npc",content:"被制住的天狗用一把尖细的鼻音重复着别人的话：「把那个漂亮男孩绑在后屋里！」「跟着下水道里的黄色标志走。」",deployableSceneIds:["scn_064"]},{id:"clue_071_h1_c2",channel:"environment",content:"后巷的泥地上有一道被拖拽过的痕迹，一直通到一块嵌在路面里的圆形金属盖；盖子轻轻一掀，下面是通往下水道的梯子。",deployableSceneIds:["scn_063","scn_071"]},{id:"clue_071_h1_c3",channel:"environment",content:"下水道的岔路口墙上，用黄色粉笔画着一个手掌大的圆圈，圆周上十根等距的辐条向外张开。",deployableSceneIds:["scn_071"]}],_meta:{sourcePages:[25,27],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：仓库→下水道→克萨瑟斯行会藏身处的接续线索链。"}},{id:"hook_096_h1",goalRef:"scn_096",priority:8,clues:[{id:"clue_096_h1_c1",channel:"document",content:"一叠转到你们名下的房契和一张手绘平面图：四层高的空客栈，带阳台、塔楼和五个烟囱，是这条巷子里最气派的房子之一。",deployableSceneIds:["scn_094"]},{id:"clue_096_h1_c2",channel:"rumor",content:"邻居们压低声音说，那家老客栈闹鬼——上一任老板死了以后，没有一个买主待得住。",deployableSceneIds:["scn_094","scn_0bb"]},{id:"clue_096_h1_c3",channel:"environment",content:"酒吧间满是断腿的家具、发黑的银器和变成醋的酒桶；积灰的地板上，有人用手指写下了「打烊时间！」",deployableSceneIds:["scn_096"]}],_meta:{sourcePages:[31,41],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：本章第一条主线钩子——把角色推向接管并整顿骷髅头庄园。三条线索分别来自地产交接、布罗克斯利『一直相信这家酒馆闹鬼』、以及利夫写在地板上的警告。"}},{id:"hook_0a6_h1",goalRef:"scn_0a6",priority:7,clues:[{id:"clue_0a6_h1_c1",channel:"rumor",content:"深水城开始流传：有一群冒险者帮了沃洛瑟姆·盖德姆，还把瑞纳尔·奈沃兰波救了出来。几天之内，各路人马都开始打听他们住在哪儿。",deployableSceneIds:["scn_094"]},{id:"clue_0a6_h1_c2",channel:"npc",content:"一只白猫跳上窗台，用悦耳的男声开口：「对加入翡翠联盟感兴趣吗？来南城区的 Phaulkonmere 见我们。」说完便迅速离开。",deployableSceneIds:["scn_094","scn_096"]},{id:"clue_0a6_h1_c3",channel:"document",content:"一只纸鸢送来短笺与整队人的歌剧票：瑞纳尔说你们是不错的人选，今晚海区光歌剧院，中场休息时到私人包厢 C 见米尔特，入场需要正式着装。",deployableSceneIds:["scn_096"]},{id:"clue_0a6_h1_c4",channel:"item",content:"深夜一条飞蛇落在窗框上，身上绑着一卷羊皮纸：「想成为伟大事业的一部分吗？去 Yawning Portal 找达维尔·星歌谈谈。」",deployableSceneIds:["scn_096"]}],_meta:{sourcePages:[34,35,37,39],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：派系招募钩子——四条线索分别是翡翠联盟的白猫（动物信使）、竖琴手的纸鸢歌剧票、散塔林会的飞蛇口信、以及全城传开的救人事迹。臂铠教团（萨芙拉登门）与灰手（瓦婕拉短讯术）也在同一入口，DM 可按队伍阵营取舍。"}},{id:"hook_0bb_h1",goalRef:"scn_0bb",priority:6,clues:[{id:"clue_0bb_h1_c1",channel:"rumor",content:"北城区开始有人讲：你们那家店闹老鼠——而且据说这正是埃梅克·弗伦当初没把它买下来的原因。",deployableSceneIds:["scn_094","scn_0bb"]},{id:"clue_0bb_h1_c2",channel:"environment",content:"外墙根新钻了几个小洞，墙脚撒着食物碎屑，招来成群的老鼠；夜里能听见指甲刮木头的声音。",deployableSceneIds:["scn_096"]},{id:"clue_0bb_h1_c3",channel:"environment",content:"隔壁几户人家的门板上被人刻了一张老鼠脸。",deployableSceneIds:["scn_094"]},{id:"clue_0bb_h1_c4",channel:"npc",content:"同一条巷子里新开了一家小酒吧「弗伦的酿造」，粗声粗气的北方老板逢人便打听你们店里的生意。",deployableSceneIds:["scn_094"]}],_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：商业竞争对手钩子——线索全部取自「埃梅克的计划」表（钻洞引鼠、散布鼠患谣言、门上刻鼠脸）与埃梅克的背景段。"}},{id:"hook_0cc_h1",goalRef:"qst_main_dragonheist",priority:90,clues:[{id:"clue_0cc_h1_1",channel:"environment",content:"十一名死者里，有一个紧攥匕首、靴子沾着下水道污物的侏儒，和两个前臂纹着黑色翼蛇的披斗篷男人——他们死在同一处，谁都不像碰巧路过的行人。",deployableSceneIds:["scn_0d0"]},{id:"clue_0cc_h1_2",channel:"npc",content:"花店主人法拉说，一个烧伤的斗篷男从那个侏儒身上拿走了什么，一瘸一拐地朝弯曲的钉子方向走了，一路还不停回头。",deployableSceneIds:["scn_0d1"]},{id:"clue_0cc_h1_3",channel:"rumor",content:"北城区城市守卫站的太平间里，尸体还能开口：向神庙捐上二十五金币就能请一位牧师施放死者交谈，前提是先把问题列清楚。",deployableSceneIds:["scn_0d1","scn_0ed"]}],_meta:{sourcePages:[43,44,45,46],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：本章主钩——把角色推向「谁抢走了格洛尔之石、它去了哪里」。"}},{id:"hook_0d1_h2",goalRef:"scn_0db",priority:80,clues:[{id:"clue_0d1_h2_1",channel:"npc",content:"杰兹琳·霍恩瑞文咬定屋顶上那东西不是人：「一个没有线的木偶」，是它把什么扔进了人群。",deployableSceneIds:["scn_0d1"]},{id:"clue_0d1_h2_2",channel:"item",content:"雨水桶里捞出的火球项链只剩两颗珠子、扣环崩断——爆炸来自被扔出的火珠，而不是有人当街施法。",deployableSceneIds:["scn_0d1"]},{id:"clue_0d1_h2_3",channel:"rumor",content:"在深水城过过秋天的人都会说，那种人形自动机是奇迹日游行上的东西，而游行是海区的贡德神庙赞助的。",deployableSceneIds:["scn_0d0","scn_0d1"]}],_meta:{sourcePages:[45,46],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：把「投弹者是什么」这条线导向灵感之手之家。"}},{id:"hook_0db_h3",goalRef:"scn_0ef",priority:60,clues:[{id:"clue_0db_h3_1",channel:"npc",content:"瓦莱塔说，灵感之手之家愿意出五百金币买尼姆那个走失造物的毁灭；带回证据的人还能各挑一件神庙的非魔法发明。",deployableSceneIds:["scn_0db"]},{id:"clue_0db_h3_2",channel:"item",content:"尼姆的铜制探测器一按扳机就开始工作：五百尺内只要有尼姆以外的秘偶，伞状物便旋转嗡鸣，越近越急。",deployableSceneIds:["scn_0db"]},{id:"clue_0db_h3_3",channel:"rumor",content:"北城区有居民向城市守卫报告过：爆炸后不久，一个形迹可疑、像是受了伤的人走进了格拉尔洪德别墅。",deployableSceneIds:["scn_0ed","scn_0d1"]}],_meta:{sourcePages:[47,48,49],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：悬赏 + 探测器 + 目击报案三线合流到别墅。"}},{id:"hook_124_h1",goalRef:"qst_main_dragonheist",priority:90,clues:[{id:"hook_124_h1_c1",channel:"document",content:"秘偶残骸的斗篷内衬里夹着一张折了四折的深水城城区街图，图上一个炭笔画的 X，X 旁潦草写着一个名字。",deployableSceneIds:["scn_124"]},{id:"hook_124_h1_c2",channel:"npc",content:"一个对你们有好感的派系派人捎来口信：他们掌握了格洛尔之石下落的线索，愿意分享。",deployableSceneIds:["scn_123","scn_124","scn_129"]},{id:"hook_124_h1_c3",channel:"rumor",content:"有个自称在「上头那位」手下办事的人放出话来：只要价钱合适，他知道那块石头现在在谁手上。",deployableSceneIds:["scn_129","scn_123"]}],_meta:{sourcePages:[57,58],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：本章主钩。c2/c3 即原文「如果角色们偏离了主线」给出的两条引导手段，c1 是遭遇链的书面起点（格劳洪德女士的地图）。"}},{id:"hook_13e_h1",goalRef:"qst_main_dragonheist",priority:70,clues:[{id:"hook_13e_h1_c1",channel:"npc",content:"一位高大优雅、翠绿斗篷下淌出长长银发的女士在你们离开小巷前迎上来：「如果你们是来找费内鲁斯·斯托姆卡斯尔的，恐怕来晚了。费内鲁斯手上有我想要的东西——也许你们能替我取回来。」",deployableSceneIds:["scn_13e"]},{id:"hook_13e_h1_c2",channel:"environment",content:"被洗劫一空的屋子里，厨房墙上用血画着一个圆环，圆周向外辐射出十条等距的直线。",deployableSceneIds:["scn_140","scn_13e"]},{id:"hook_13e_h1_c3",channel:"rumor",content:"在巷子里啃苹果的三个孩子认得费内鲁斯：一个灰白头发的大个子，脸上带疤，看着像打过很多架，独来独往。",deployableSceneIds:["scn_13e"]}],_meta:{sourcePages:[63,64],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：秋季线开章钩。c1 是伪装成莱拉·银手的贾拉索·班瑞（npc_4b9），委托终点是码头区七面具剧院；c2 的血画记号是姗娜萨的标志。"}},{id:"hook_176_h1",goalRef:"qst_main_dragonheist",priority:65,clues:[{id:"hook_176_h1_c1",channel:"item",content:"被洗劫过的地下墓穴地板上，几十年的积灰里躺着一把崭新的钢钥匙。",deployableSceneIds:["scn_179"]},{id:"hook_176_h1_c2",channel:"npc",content:"码头区「金属奇迹之屋」的师傅一眼认出这把钥匙的活儿：贸易区一位叫艾拉斯普拉·乌尔玛尔的矮人锁匠打的。",deployableSceneIds:["scn_176"]},{id:"hook_176_h1_c3",channel:"environment",content:"石棺被撬开又胡乱推回，尘土上拖着一道被拽走骸骨的痕迹——有人赶在你们前面到过这里，而且走得很急。",deployableSceneIds:["scn_179","scn_178"]}],_meta:{sourcePages:[69,70],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：春季线陵墓→风车的转轴钩，终点是南城区旧风车的两名盗墓者沃卡尔·基本斯与厄拉斯特·甘恩。"}},{id:"hook_20a_h1",goalRef:"scn_239",priority:85,clues:[{id:"clue_20a_h1_a",channel:"environment",content:"风车下层那间屋子的地面上有一块石板颜色偏冷，边沿的灰尘薄得不像话，像是被反复掀开过。",deployableSceneIds:["scn_20a"]},{id:"clue_20a_h1_b",channel:"npc",content:"住在这座风车里的画家，和每周来给她送食物柴火的老祭司，都说不出这栋房子底下有什么。",deployableSceneIds:["scn_205","scn_20b"]},{id:"clue_20a_h1_c",channel:"environment",content:"掀开石板后，一道石阶笔直向下延伸一百二十尺，尽头接上一条二十尺宽的走廊。",deployableSceneIds:["scn_20a","scn_239"]}],_meta:{sourcePages:[88,89],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：秋季分支从改造风车通往龙之金库大门的线索链，全部来自「通往金库的路」与「访问住宅」。"}},{id:"hook_205_h1",goalRef:"scn_1e0",priority:70,clues:[{id:"clue_205_h1_a",channel:"npc",content:"两个盗墓贼供出雇主是个半身人死灵法师，住在贸易区一家假发店底下。",deployableSceneIds:["scn_20d","scn_205"]},{id:"clue_205_h1_b",channel:"rumor",content:"贸易区那家叫丹迪摩普斯的假发店早就关了门，铁门上着锁——店主雷钦也不见了人影。",deployableSceneIds:["scn_1e2"]},{id:"clue_205_h1_c",channel:"document",content:"死者之城近来不断丢失骸骨，被人成批地从陵墓里搬走。",deployableSceneIds:["scn_205","scn_20d"]}],_meta:{sourcePages:[85,88],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：春季分支从改造风车推向遭遇9 地窖群的线索链（原文『下一场遭遇』明写转遭遇9）。"}},{id:"hook_222_h1",goalRef:"qst_main_dragonheist",priority:95,clues:[{id:"clue_222_h1_a",channel:"item",content:"与格洛尔之石共鸣的那一刻，脑海里浮出一扇没有把手的钢门，和门上那行字：「三把钥匙。把它们带来。」",deployableSceneIds:["scn_222","scn_236"]},{id:"clue_222_h1_b",channel:"rumor",content:"在深水城花上一天和五枚金币打听，就能问出其中一把钥匙眼下落在谁手里——只是打听的人自己也会被记住。",deployableSceneIds:["scn_222"]},{id:"clue_222_h1_c",channel:"npc",content:"码头上的水手都说，港外沉船里住着一条年轻的青铜龙；格林达·加洛斯有一台卡维什的装置，能把它找出来。",deployableSceneIds:["scn_222"]}],_meta:{sourcePages:[90,91],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：把「金库钥匙」一节的三条获取路径（共鸣得知需求 / 花钱调查 / 具体钥匙的持有者）串成推进主线的线索链。"}},{id:"hook_25d_h1",goalRef:"qst_main_dragonheist",priority:80,clues:[{id:"clue_25d_c1",channel:"rumor",content:"城堡区的下水道底下有一段狭窄的螺旋楼梯，墙上雕满睁着的眼睛，藏在一扇密门后面；顺着它一路往下走几百尺，尽头是一扇向内开的圆形石门——那后面就是巨眼魔坐镇的地方。能进去的公会成员一只手数得过来。",deployableSceneIds:["scn_25c","scn_271"]},{id:"clue_25d_c2",channel:"npc",content:"巨眼魔把那块会说话的石头弄丢了，如今它谁也不信。谁能把石头送到它眼前，谁就能站着走出那座巢穴——它甚至肯带上你们一起去开金库，前提是你们帮它对付里面的龙。",deployableSceneIds:["scn_25c","scn_29a"]},{id:"clue_25d_c3",channel:"environment",content:"同一个符号在这里反复出现：一个圆，周长上辐射出十道等距的辐条——门把手、挂毯、地板的金色马赛克，全是它。",deployableSceneIds:["scn_271","scn_273","scn_27f"]}],_meta:{sourcePages:[99,100,102],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：把「找到巢穴入口→面对姗娜萨→用格洛尔之石换取活着离开并被带往龙之金库」串成主线钩子。线索取自 25c 开篇、25d「面对Xanathar」、269「到达巢穴」、271 与 269 的符号段。"}},{id:"hook_28d_h1",goalRef:"scn_2cb",priority:50,clues:[{id:"clue_28d_c1",channel:"npc",content:"矮人工程师放下手里的活，朝门口的方向努了努嘴：「那个黑暗精灵顾问往地牢里运进来过整整一批桶。你们要是想让这地方安静下来，得先从他手里把桶要出来——我还能告诉你们该往哪儿摆。」",deployableSceneIds:["scn_28d"]},{id:"clue_28d_c2",channel:"document",content:"每只小桶上都贴着一张纸标签，用通用语和精灵语写着同一句话：「烟雾粉！不要打开！」",deployableSceneIds:["scn_2cb","scn_2c7"]},{id:"clue_28d_c3",channel:"environment",content:"有几处石工比别处更吃力：拱顶的合缝、柱子的基座、靠后墙的那一段——细看能发现有人用炭条在上面悄悄描过记号。",deployableSceneIds:["scn_27a","scn_297","scn_2a2","scn_2a5"]}],_meta:{sourcePages:[100,105,113],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：「摧毁巢穴」路线钩子。线索链＝托尔文指路（X13）→逼纳尔交发烟粉→X36 二十桶；结构弱点的现场记号线索按 25e 的七处清单铺在对应场景。"}},{id:"hook_2b5_h1",goalRef:"scn_2b2",priority:60,clues:[{id:"clue_2b5_c1",channel:"rumor",content:"娱乐大厅里一个喝高了的匪徒把杯子往桌上一顿：「我们抓到了一个警卫队长！阿莫戈说老板比粉色的呋噜还要高兴，不管那是什么。今天，免费啤酒！明天，金子和荣耀！」满屋子跟着起哄。",deployableSceneIds:["scn_2b5"]},{id:"clue_2b5_c2",channel:"environment",content:"牢门后面传来一个没穿甲的男人的声音，他报出自己的名字和城市守卫里的军职，问外面还有没有讲王法的人。",deployableSceneIds:["scn_2b2","scn_2a6"]}],_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：X28 偷听到的吹嘘直指 X27 关着的城市守卫队长海乌斯图斯·斯塔杰特（角色此前在「警卫到达」见过他）。原文引语逐字保留。"}},{id:"hook_2d5_h2",goalRef:"qst_main_dragonheist",priority:80,clues:[{id:"clue_2d5_h2_c1",channel:"rumor",content:"三年前卡萨兰特家族一度濒临破产，此后却奇迹般地东山再起：银行与放贷生意蒸蒸日上，竞争对手却接连亏损；长子的失踪替他们赢得了同情，慈善事业替他们赢得了新朋友。",deployableSceneIds:["scn_2e4","scn_2d6"]},{id:"clue_2d5_h2_c2",channel:"npc",content:"卡萨兰特家的双胞胎压低声音说，爸爸妈妈最近一直在找几条失踪的龙——他们实在想不明白，父母要拿一群可怕的、长翅膀的爬行动物做什么。",deployableSceneIds:["scn_328","scn_317"]},{id:"clue_2d5_h2_c3",channel:"item",content:"秘密金库里码着二十根五磅重的银贸易条，旁边是成堆待运的钱袋；靠里的地面上有明显被反复拖拽过的痕迹，一直延伸到通往下方的黑暗楼梯。",deployableSceneIds:["scn_330"]}],_meta:{sourcePages:[115,117,125],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：黄金线——把卡萨兰特家族与龙之金库、格洛尔之石的主线目标挂钩（qst_main_dragonheist）。"}},{id:"hook_2f6_h1",goalRef:"scn_345",priority:90,clues:[{id:"clue_2f6_h1_c1",channel:"document",content:"维克托罗阅读时随手记的日记里，夹着几则与书本无关的短句：「Neverember的龙是我们祈祷的回应。」「卡萨兰特家族的陵墓。通知Y.G.」「Golorr 是一个阿波罗斯。现在一切都说得通了。」",deployableSceneIds:["scn_2f6","scn_2fa"]},{id:"clue_2f6_h1_c2",channel:"environment",content:"酒窖南端渗出一股不该有的气流，南墙上绘着一个褪色的西亚摩菲圣徽——银色圣杯配金色太阳；仆人们从不在这里久留，说地下室阴冷得让人心里发毛。",deployableSceneIds:["scn_32e","scn_32b"]},{id:"clue_2f6_h1_c3",channel:"npc",content:"家族墓穴里那位身披板甲的骑士幽魂在安息前留下一句话：「使用钉头锤摧毁邪恶化身的雕像。结束腐败以恢复我家族的荣誉。」",deployableSceneIds:["scn_33d"]}],_meta:{sourcePages:[115,117,120,125,128],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：把玩家从别墅上层推向地下神庙仪式大厅（A7）的线索链。第三条线索出自 A4a 卡拉多恩鬼魂原话（雕像即 A7 的阿斯蒙蒂斯像，锤子即石棺中的瓦解之锤）。"}},{id:"hook_325_h3",goalRef:"scn_325",priority:60,clues:[{id:"clue_325_h3_c1",channel:"environment",content:"阁楼里弥漫着浓重的硫磺味；只有当书房天花板的活板门和阁楼尽头那扇门同时打开时，外面才听得到那阵嚎叫。",deployableSceneIds:["scn_324","scn_31f"]},{id:"clue_325_h3_c2",channel:"npc",content:"特伦齐奥和埃尔泽丽娜说，他们这辈子有两三次听见阁楼里传来嚎叫声，一直好奇上面藏着什么——那是父母明令禁止他们靠近的地方之一。",deployableSceneIds:["scn_317","scn_2f2"]},{id:"clue_325_h3_c3",channel:"document",content:"吸烟室的画架上摆着一幅十二岁的奥斯瓦尔多手持仪式用剑的肖像；再往后的画架上，就只剩下阿玛利亚抱着两个婴儿、维克托为他们读童话的那一幅了。",deployableSceneIds:["scn_308"]}],_meta:{sourcePages:[115,121,123,124],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：奥斯瓦尔多线——把玩家引向 C24（scn_325），揭穿「长子在远方城市上学」的谎言。"}},{id:"hook_350_h1",goalRef:"scn_355",priority:80,clues:[{id:"clue_350_h1_a",channel:"rumor",content:"码头区这几天最热闹的话题是海之女集市：三艘船，从卢斯坎来的，班主叫扎多兹·佐德。",deployableSceneIds:["scn_350"]},{id:"clue_350_h1_b",channel:"environment",content:"心碎者与地狱使者并排系在同一座码头的两侧，坡道就搭在那里，人来人往到没人会多看你一眼；旗舰抢眼人物远远锚在港中，隔着足足一英里的水面。",deployableSceneIds:["scn_350"]},{id:"clue_350_h1_c",channel:"npc",content:"「想见佐德船长？先跟船长谈。」——甲板上的水手只肯说这一句，然后就转过身去干活。",deployableSceneIds:["scn_350","scn_355"]}],_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：356「接近船只」+ 359「水手们」，把玩家推向登船调查（scn_355）。"}},{id:"hook_350_h2",goalRef:"qst_main_dragonheist",priority:70,clues:[{id:"clue_350_h2_a",channel:"environment",content:"一场浓雾意外地沿水面升起，吞没了船只和码头；灰色的瘴气越浓，船身的吱嘎声越渗人。三个影子从雾里滑过，像精灵穿过森林。",deployableSceneIds:["scn_350"]},{id:"clue_350_h2_b",channel:"document",content:"一名卓尔身上带着一封信：卢斯坎的蜡封，精灵语，字迹优雅。收信人是开放领主莱拉·银手，落款只有一个字母——「J」。信里说他在这座城里纯属娱乐，又说两座城市本可以联手，去对付那个「肮脏的老鼠袋」达格特·奈弗伯尔。",deployableSceneIds:["scn_350"]},{id:"clue_350_h2_c",channel:"npc",content:"隐形术褪去，小巷里站出一个女人：她自称莱拉·银手，问你们和布雷甘·达特有什么往来。谈得投机的话，她会请你们找出并保住奈弗伯尔勋爵藏起来的龙之宝藏——五千金币，外加深水城的谢意。",deployableSceneIds:["scn_350"]}],_meta:{sourcePages:[145,146],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：3c4/3c6/3c8「难忘的一夜」「贾拉克西尔的信」「与拉埃拉尔的对话」，把玩家接回主线 qst_main_dragonheist。"}},{id:"hook_350_h3",goalRef:"scn_3a3",priority:60,clues:[{id:"clue_350_h3_a",channel:"npc",content:"水里一个巨大的身形朝你们游来，青铜色的鳞片。它猛地停住，露出满口牙齿的笑，抬起一只爪子轻轻挥了挥：「幸会！」——它自称泽利法恩，最近搬进了深水港。",deployableSceneIds:["scn_350"]},{id:"clue_350_h3_b",channel:"rumor",content:"泽利法恩说，他注意到抢眼人物的船底挂着一艘奇怪的船。他找那些船员搭过话，被顶了回来，可他实在好奇：既然你们正要去赴那场会合，能不能替他打听打听——别惊动人。",deployableSceneIds:["scn_350","scn_355"]},{id:"clue_350_h3_c",channel:"item",content:"龙提到他最近从港底捞上来一只覆满藤壶的旧箱子，还没打开过，但他闻得出里面有金子。消息换箱子——等你们从那艘船上回来，他就在这片水里等着。",deployableSceneIds:["scn_350"]}],_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C 档补全：3c1「友好的龙」+ 3c3「宝藏」（报酬箱见 trs_350_0），goalRef 指向潜艇场景 scn_3a3。"}},{id:"hook_3d2_h1",goalRef:"scn_403",priority:70,clues:[{id:"clue_3d2_h1_1",channel:"rumor",content:"南城区那对破败的双塔，邻居们都知道有魔法力场罩着它，还看得见不灭明焰的光从窗户里漏出来。大多数人认定那地方早废弃了，也有人说是科拉特兄弟的鬼魂在闹。",deployableSceneIds:["scn_3cc","scn_3d2"]},{id:"clue_3d2_h1_2",channel:"environment",content:"塔外的地面上常散落着撞断了脖子的小鸟尸体——鸟看不见那道薄如纸的屏障。街头清洁工每天早上来扫一趟。",deployableSceneIds:["scn_3d2"]},{id:"clue_3d2_h1_3",channel:"npc",content:"熟悉深水城历史的人会讲起：偏执的杜尔克·科拉特当年用一道魔法力场把自家塔楼整个包了起来，而力场总得有个源头留在塔里。",deployableSceneIds:["scn_3cc","scn_3d2","scn_3f6"]}],_meta:{sourcePages:[148,149,156],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：把「进不去科拉特塔」这条线推向 K18 的符文（scn_403）——原文明写摧毁那个符文即结束力场。"}},{id:"hook_40b_h1",goalRef:"scn_413",priority:65,clues:[{id:"clue_40b_h1_1",channel:"npc",content:"塔里的人说漏了嘴：曼松本人不住这儿，他住在别处，进出全靠最高那间屋子里的传送圈。",deployableSceneIds:["scn_3ea","scn_3f6"]},{id:"clue_40b_h1_2",channel:"item",content:"曼松的副官人人手上一枚黄铜印章戒指，刻着风格化的字母 M，在侦测魔法下泛着咒法灵光。",deployableSceneIds:["scn_3db","scn_3de","scn_3fc","scn_42a"]},{id:"clue_40b_h1_3",channel:"environment",content:"外塔顶层地板上刻着一圈微微发光的符文；带着那种黄铜戒指走到离它 5 尺以内，圈就开始柔和地嗡鸣。",deployableSceneIds:["scn_40b"]}],_meta:{sourcePages:[150,156,157],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：戒指＋K22 传送圈＝抵达超维度圣所 E1（scn_413）的唯一书面路径。"}},{id:"hook_3cd_h1",goalRef:"qst_main_dragonheist",priority:80,clues:[{id:"clue_3cd_h1_1",channel:"document",content:"曼松书房里的皮面账簿把他和两桩针对深水城贵族的勒索拴在了一起——这是他人在城中、而且在做事的白纸黑字。",deployableSceneIds:["scn_430"]},{id:"clue_3cd_h1_2",channel:"npc",content:"曼松的副官都知道主上藏在哪儿。抓活的、交出去审，供词就是证据。",deployableSceneIds:["scn_3db","scn_3de","scn_41d","scn_425","scn_42a"]},{id:"clue_3cd_h1_3",channel:"rumor",content:"竖琴手联盟、阴影谷的伊尔明斯特、黑杖、领主联盟——曼松的仇家排得很长，只要坐实他还活着并且就在深水城，这些人立刻就会动手。",deployableSceneIds:["scn_3cc","scn_3d2"]}],_meta:{sourcePages:[147,148,160],confidence:"high",needsReview:!1,extractorNotes:"0806 opus C档补全：原文「打乱曼休恩的行动·举报曼休恩」——证据交给莱拉·银手/米尔特/竖琴手/黑杖/城市守卫等会引发驱逐行动。goalRef 指主线任务。"}}],f=[],u=[{id:"tbl_09f_0",name:"Fala的药水",purpose:"reference",rows:[{id:"row_09f_0_0",kind:"text",text:"化兽为友药水｜125 gp"},{id:"row_09f_0_1",kind:"text",text:"攀爬药水｜50 gp"},{id:"row_09f_0_2",kind:"text",text:"高等治疗药水｜250 gp"},{id:"row_09f_0_3",kind:"text",text:"治疗药水｜50 gp"},{id:"row_09f_0_4",kind:"text",text:"水下呼吸药水｜250 gp"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_0a3_0",name:"出售法术服务",purpose:"reference",rows:[{id:"row_0a3_0_0",kind:"text",text:"通晓语言, 侦测魔法, 羽落术, 寻获魔宠, 法师护甲, 魔法飞弹, 护盾术, 隐形仆役｜25 gp"},{id:"row_0a3_0_1",kind:"text",text:"秘法锁, 不灭明焰, 黑暗视觉, 隐形术, 魔化武器, 迷踪步, 魔绳术, 暗示术｜75 gp"},{id:"row_0a3_0_2",kind:"text",text:"鹰眼术, 法术反制, 解除魔法, 火球术, 飞行术, 回避侦测, 水下呼吸｜150 gp"},{id:"row_0a3_0_3",kind:"text",text:"秘法眼, 鬼斧神工, 高等隐形术, 冰风暴, 生物定位术, 变形术｜300 gp"},{id:"row_0a3_0_4",kind:"text",text:"毕格比之手, 寒冰锥, 篡改记忆｜750 gp"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_0a6_0",name:"贾拉索·班瑞",purpose:"reference",rows:[{id:"row_0a6_0_0",kind:"text",text:'2nd｜"我想让你们从一个瓦特达维安贵族那里偷一条丝质手帕，然后把它交给一个住在网街和码头街拐角处货箱里的提夫林女孩。"｜找到一位贵族并不难，但要在不被察觉的情况下夺走他的手帕，需要进行一次成功的 DC 12 敏捷（巧手）检定。也可以通过一次成功的 DC 12 魅力（欺瞒、威吓或说服）检定，说服贵族交出手帕。箱子里的提夫林女孩为手帕向角色们道谢。奖励： 每个布雷根·达特成员角色获得 1 点声望。',attrs:{任务要求和奖励:"找到一位贵族并不难，但要在不被察觉的情况下夺走他的手帕，需要进行一次成功的 DC 12 敏捷（巧手）检定。也可以通过一次成功的 DC 12 魅力（欺瞒、威吓或说服）检定，说服贵族交出手帕。箱子里的提夫林女孩为手帕向角色们道谢。奖励： 每个布雷根·达特成员角色获得 1 点声望。"}},{id:"row_0a6_0_1",kind:"text",text:'3rd｜"这个任务太简单了，就连一帮街头小混混都能完成。我要你把一篇揭露文章交给Gaxly Rudderbust，他是当地一份名为深水城瓦祖的报纸的出版商，但不能让他知道是谁写的或者它来自哪里。你会在北区的伊玛街和种马街的拐角处找到他的办公室。把文章放在他的桌子上。"｜贾拉索撰写了一篇揭露未具名的深水城贵族家族中魔鬼崇拜的报道。故事中提到了一些关起门来进行的狂欢和秘密交易。（贾拉索从不错过任何动摇贵族和政治动荡的机会。）一个角色可以在加克斯利的办公室关闭时闯入，要么在午餐时间，要么在营业时间后。进出而不被发现需要进行两次成功的 DC 15 敏捷（潜行）检定，通过一扇锁上的门需要使用盗贼工具进行一次成功的 DC 10 敏捷检定（或者使用 敲击术 咒语或类似魔法）。奖励：每个布勒根·达尔特成员获得 1 点声望。',attrs:{任务要求和奖励:"贾拉索撰写了一篇揭露未具名的深水城贵族家族中魔鬼崇拜的报道。故事中提到了一些关起门来进行的狂欢和秘密交易。（贾拉索从不错过任何动摇贵族和政治动荡的机会。）一个角色可以在加克斯利的办公室关闭时闯入，要么在午餐时间，要么在营业时间后。进出而不被发现需要进行两次成功的 DC 15 敏捷（潜行）检定，通过一扇锁上的门需要使用盗贼工具进行一次成功的 DC 10 敏捷检定（或者使用 敲击术 咒语或类似魔法）。奖励：每个布勒根·达尔特成员获得 1 点声望。"}},{id:"row_0a6_0_2",kind:"text",text:`4th｜"我们已经捕获了一名Xanathar公会的成员，我希望你为他守卫三个晚上，直到我或其他Bregan D'aerthe成员来认领他。你会发现他被困在你的地下室里。"｜在巨魔之颅巷酒馆的地下室中搜寻的角色们（见下文）会发现被比拉罗的铁索束缚的奥特·钢趾（见附录 B）。他是怎么到那里的，谁也说不准；甚至连他自己也不知道。在第一个晚上，姗娜萨派出了六名熊地精组成的团伙袭击酒馆并试图解救奥特。如果角色们已经把奥特转移到了其他地方，熊地精们仍然会攻击酒馆。在第二个晚上，四名来自粪扫行者公会的成员（平民），他们的头颅中寄居着噬脑怪，会造访酒馆。他们点了饮料并侦察酒馆的情况，如果发现了奥特，他们会发动攻击；如果没有发现，他们会离开。在第三个晚上，一只眼魔丧尸会发动攻击。在第三次袭击之后，奥特就像他神秘到来一样神秘失踪，比拉罗的铁索也随之消失。奖励：每个布雷根·达厄特成员获得 2 点声望。`,attrs:{任务要求和奖励:"在巨魔之颅巷酒馆的地下室中搜寻的角色们（见下文）会发现被比拉罗的铁索束缚的奥特·钢趾（见附录 B）。他是怎么到那里的，谁也说不准；甚至连他自己也不知道。在第一个晚上，姗娜萨派出了六名熊地精组成的团伙袭击酒馆并试图解救奥特。如果角色们已经把奥特转移到了其他地方，熊地精们仍然会攻击酒馆。在第二个晚上，四名来自粪扫行者公会的成员（平民），他们的头颅中寄居着噬脑怪，会造访酒馆。他们点了饮料并侦察酒馆的情况，如果发现了奥特，他们会发动攻击；如果没有发现，他们会离开。在第三个晚上，一只眼魔丧尸会发动攻击。在第三次袭击之后，奥特就像他神秘到来一样神秘失踪，比拉罗的铁索也随之消失。奖励：每个布雷根·达厄特成员获得 2 点声望。"}},{id:"row_0a6_0_3",kind:"text",text:'5th｜"我们在姗娜萨的组织内部有一名间谍，但我担心他已经被暴露了。让我心痛的是，我派你们去消除他。请迅速且无痛苦地完成，看在Lolth的份上，要保持谨慎。"｜贾拉索确认叛徒是一名叫做纳尔·泽布林达斯的卓尔法师（参见附录 B），并为角色们提供了一条经过地下通道通往姗娜萨巢穴的路线。（姗娜萨的巢穴在第五章中有描述。遵循贾拉索路线的角色将抵达X1。）奖励：每个布雷根·达尔特成员获得2点声望。每个为任务做出贡献的队员将获得一个带有贾拉索金色小雕像的战利品（价值250金币）。',attrs:{任务要求和奖励:"贾拉索确认叛徒是一名叫做纳尔·泽布林达斯的卓尔法师（参见附录 B），并为角色们提供了一条经过地下通道通往姗娜萨巢穴的路线。（姗娜萨的巢穴在第五章中有描述。遵循贾拉索路线的角色将抵达X1。）奖励：每个布雷根·达尔特成员获得2点声望。每个为任务做出贡献的队员将获得一个带有贾拉索金色小雕像的战利品（价值250金币）。"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_0a6_1",name:"杰瑞斯·波康",purpose:"reference",rows:[{id:"row_0a6_1_0",kind:"text",text:'2nd｜"郊外的农场正遭受一个活过来的稻草人的恐吓。它已经屠杀了牲畜，追逐马匹，吓坏了农民。到目前为止还没有人被杀，所以城市警卫队还在拖延。必须采取行动！"｜不是一只而是三只稻草人正在恐吓下崖。一只戴着麻袋头罩，另一只有着腐烂的南瓜头，第三只则覆盖着一张破旧的毯子。在田野里露营超过大半天或夜晚的角色有10遇到其中一只稻草人。袭击将持续到所有三只稻草人被摧毁。奖励：每个翡翠结社的角色因结束威胁而获得1点声望。',attrs:{任务要求和奖励:"不是一只而是三只稻草人正在恐吓下崖。一只戴着麻袋头罩，另一只有着腐烂的南瓜头，第三只则覆盖着一张破旧的毯子。在田野里露营超过大半天或夜晚的角色有10遇到其中一只稻草人。袭击将持续到所有三只稻草人被摧毁。奖励：每个翡翠结社的角色因结束威胁而获得1点声望。"}},{id:"row_0a6_1_1",kind:"text",text:'3rd｜"Sir Ambrose Everdawn，一位经验丰富的Kelemvor老冠军，提出帮助城市警卫捉拿一个从死者之城偷骨头并将其制成骷髅的死灵法师。如果你不太忙的话，Sir Ambrose可以利用你的帮助。"｜说服安布罗斯·永晨（守序善良男性人类 Tethyrian 骑士）相信队伍确实打算提供帮助，需要通过一次成功的 DC 13 魅力（说服）检定。如果检定成功，安布罗斯爵士会要求队伍连续十个晚上巡逻墓地的南半部分，而他则负责北半部分。角色们每晚有累积的 10 遇到六具 骷髅们，但没有发现驱使它们的死灵法师的踪迹。一旦骷髅被消灭，便不会再遇到更多敌人。十天后，安布罗斯爵士会解除角色的任务。 奖励：每个翠绿闲庭的角色获得 1 声望。每晚都巡逻墓地的每个队伍成员将获得 100 金币。',attrs:{任务要求和奖励:"说服安布罗斯·永晨（守序善良男性人类 Tethyrian 骑士）相信队伍确实打算提供帮助，需要通过一次成功的 DC 13 魅力（说服）检定。如果检定成功，安布罗斯爵士会要求队伍连续十个晚上巡逻墓地的南半部分，而他则负责北半部分。角色们每晚有累积的 10 遇到六具 骷髅们，但没有发现驱使它们的死灵法师的踪迹。一旦骷髅被消灭，便不会再遇到更多敌人。十天后，安布罗斯爵士会解除角色的任务。 奖励：每个翠绿闲庭的角色获得 1 声望。每晚都巡逻墓地的每个队伍成员将获得 100 金币。"}},{id:"row_0a6_1_2",kind:"text",text:'4th｜"变形怪威胁着深水城的权力平衡。有传言说一群变形怪藏在打哈欠的门户里。如果你能的话，把它们挖出来，把城市从它们手中清除。"｜角色们需要面对 邦妮 这个 变形怪，并通过一次成功的 DC 15 魅力（恐吓或说服）检定，说服她离开深水城并带走她的帮派。奖励：每个翡翠结社角色的声望增加2。',attrs:{任务要求和奖励:"角色们需要面对 邦妮 这个 变形怪，并通过一次成功的 DC 15 魅力（恐吓或说服）检定，说服她离开深水城并带走她的帮派。奖励：每个翡翠结社角色的声望增加2。"}},{id:"row_0a6_1_3",kind:"text",text:'5th｜"Xanathar公会正在释放怪物以分散城市警卫和城市警卫队的注意力，而其成员在其他地方制造麻烦。当局在捕捉和杀死一种名为触须怪的飞行恐怖生物方面遇到了麻烦。这种异怪最后一次被看到是在码头区抓走了一位老妇人。除非我们介入，否则她不会是最后一个。"｜定位格雷尔需要成功的 DC 18 智力（调查）检定，随后是成功的 DC 18 智慧（生存）检定。无论是否成功，每次检定都代表了1小时的信息收集或追踪踪迹。实际上，有两只 触须怪。如果其中一只格雷尔被杀死，另一只会试图逃跑。奖励：每个翡翠庭院的角色获得2点声望。杰里斯会将英雄魅力（见《城主指南》第7章的"超自然礼物"）赐予每个参与击杀格雷尔的队伍成员。',attrs:{任务要求和奖励:'定位格雷尔需要成功的 DC 18 智力（调查）检定，随后是成功的 DC 18 智慧（生存）检定。无论是否成功，每次检定都代表了1小时的信息收集或追踪踪迹。实际上，有两只 触须怪。如果其中一只格雷尔被杀死，另一只会试图逃跑。奖励：每个翡翠庭院的角色获得2点声望。杰里斯会将英雄魅力（见《城主指南》第7章的"超自然礼物"）赐予每个参与击杀格雷尔的队伍成员。'}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_0a6_2",name:"米尔特",purpose:"reference",rows:[{id:"row_0a6_2_0",kind:"text",text:'2nd｜"城市中工作的一辆马车由一匹会说话的母马驾驶，名叫玛克辛。找到她，找出她是否已经了解到任何Zhentil Keep特工的身份，如果是的话，确定他们的位置。"｜角色们可以通过一次成功的 DC 13 智力（调查）检定找到 玛克辛，一匹智力值为 10 的 驮用马。玛克辛 会说通用语，角色们必须通过一次 DC 13 魅力（说服）检定来尝试说服她他们是哈珀组织的成员。如果检定成功，这匹马会回忆起两天前曾载过一位日精灵和他的半兽人保镖；她在某个十字路口（她不记得是哪个）接上他们，并在"打瞌睡的门"酒馆将他们放下。他们谈论过雇佣密探来找出城市中散塔林会的藏身处。玛克辛 对乘客的描述与 达维尔·星歌 和 雅格拉·石拳 的外貌相符。奖励：每个哈珀角色获得 1 点声望。',attrs:{任务要求和奖励:'角色们可以通过一次成功的 DC 13 智力（调查）检定找到 玛克辛，一匹智力值为 10 的 驮用马。玛克辛 会说通用语，角色们必须通过一次 DC 13 魅力（说服）检定来尝试说服她他们是哈珀组织的成员。如果检定成功，这匹马会回忆起两天前曾载过一位日精灵和他的半兽人保镖；她在某个十字路口（她不记得是哪个）接上他们，并在"打瞌睡的门"酒馆将他们放下。他们谈论过雇佣密探来找出城市中散塔林会的藏身处。玛克辛 对乘客的描述与 达维尔·星歌 和 雅格拉·石拳 的外貌相符。奖励：每个哈珀角色获得 1 点声望。'}},{id:"row_0a6_2_1",kind:"text",text:`3rd｜"Uza Solizeph是一位老妇人，她在贸易区Sorn街上一座狭窄的三层建筑里卖书。她声称在她的书店里困住了一个怪物，担心她的书和她的猫的安全。鉴于Uza喜欢讲夸张的故事，城市守卫不太可能提供帮助，但竖琴手组织欠她一个人情。你会在Felzoun's Folly找到她哭泣，那是Sorn街和Salabar街拐角处的一家酒馆。快点行动！"｜Uza（LG女性人类Mulan 平民）描述威胁为一个"多眼的怪物球体"，它追赶她的猫Fillipa进入书店。实际上，这个怪物是一只凝视者眼魔（见附录 B）。如果角色们在第一章遇到了gazer，他们就会知道他们面临的是什么。Uza借给他们书店前后门的钥匙。角色们发现内部一片狼藉，并听到三楼有猫在喵喵叫。声音来自正在追捕Fillipa的gazer。到目前为止，这只猫已经成功躲避了这个讨厌的小捕食者。奖励：如果击败了gazer，每个竖琴手角色获得1点名望。Uza还送给队伍一本用过的魔法书，其中包含四个class=法师和三个class=法师的法师法术。`,attrs:{任务要求和奖励:'Uza（LG女性人类Mulan 平民）描述威胁为一个"多眼的怪物球体"，它追赶她的猫Fillipa进入书店。实际上，这个怪物是一只凝视者眼魔（见附录 B）。如果角色们在第一章遇到了gazer，他们就会知道他们面临的是什么。Uza借给他们书店前后门的钥匙。角色们发现内部一片狼藉，并听到三楼有猫在喵喵叫。声音来自正在追捕Fillipa的gazer。到目前为止，这只猫已经成功躲避了这个讨厌的小捕食者。奖励：如果击败了gazer，每个竖琴手角色获得1点名望。Uza还送给队伍一本用过的魔法书，其中包含四个class=法师和三个class=法师的法师法术。'}},{id:"row_0a6_2_2",kind:"text",text:'4th｜"我们的一名成员，Mattrim Mereg，已经与一群变形怪结盟，并认为竖琴手组织应该招募他们。我们需要一个公正的意见。追踪并与每个变形怪交谈，评估他们的可信度。"｜角色们必须与五个变形怪交谈，从他们的领袖"邦妮"开始，她在打哈欠之门工作。她需要几天时间来召集其他化身怪，他们同意以人类的外表在酒馆碰面。角色们必须分别采访每个化身怪，并通过一个DC 16的感知（洞察）检定来确定其可信度。只有"邦妮"是可信的。奖励：每个哈珀的角色获得2点声望。每个参与的队员获得50金币。',attrs:{任务要求和奖励:'角色们必须与五个变形怪交谈，从他们的领袖"邦妮"开始，她在打哈欠之门工作。她需要几天时间来召集其他化身怪，他们同意以人类的外表在酒馆碰面。角色们必须分别采访每个化身怪，并通过一个DC 16的感知（洞察）检定来确定其可信度。只有"邦妮"是可信的。奖励：每个哈珀的角色获得2点声望。每个参与的队员获得50金币。'}},{id:"row_0a6_2_3",kind:"text",text:`5th｜"Lady 蕾米莉亚·港树正在北城区Delzorin街的她的别墅House Ulbrinter举办派对，地点位于Vhezoar街和Brondar's Way之间。我们有理由怀疑黑暗精灵间谍已经渗透到宾客名单中。参加派对并揭露伪装的黑暗精灵。穿着要得体。"｜蕾米莉亚·港树（参见附录 B）知道这个任务，但角色们并不知道她是哈珀的一员。在场的一名卓尔间谍是贾拉索·班瑞（参见附录 B）。他使用易容帽变身为一名来自路斯坎的年轻演员，名为埃里斯蒂安·德马涅。需要成功的DC 24 感知（洞察）检定才能揭穿贾拉索。他对这些敏锐的冒险者印象颇深，感谢哈文特里夫人提供了一个愉快的夜晚并迅速离开，但在离开前他会向揭穿他的角色或角色们脱帽致意。奖励：每个哈珀角色获得2点声望。每位参加派对的队伍成员将获得200金币。`,attrs:{任务要求和奖励:"蕾米莉亚·港树（参见附录 B）知道这个任务，但角色们并不知道她是哈珀的一员。在场的一名卓尔间谍是贾拉索·班瑞（参见附录 B）。他使用易容帽变身为一名来自路斯坎的年轻演员，名为埃里斯蒂安·德马涅。需要成功的DC 24 感知（洞察）检定才能揭穿贾拉索。他对这些敏锐的冒险者印象颇深，感谢哈文特里夫人提供了一个愉快的夜晚并迅速离开，但在离开前他会向揭穿他的角色或角色们脱帽致意。奖励：每个哈珀角色获得2点声望。每位参加派对的队伍成员将获得200金币。"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_0a6_3",name:"加莱斯特·银鬃",purpose:"reference",rows:[{id:"row_0a6_3_0",kind:"text",text:'2nd｜"一场帮派战争正在整个城市引起不安。我们已经向清洁工公会的成员提供保护，你被指派去保护他们中的一群人。在Dock Ward的Ship Street上的Muleskull Tavern与他们见面，在六点钟的钟声敲响时开始，并在他们工作时保护他们。连续十天每天都这样做。"｜每天早晨，角色们与一队四名粪便清扫工（平民）会面，然后前往贸易区，清扫工们在这里花一整天时间清理街道上的垃圾。这是件无聊的工作。在第九天，大约正午时分，一只食腐虫从附近的小巷中窜出，被两名城市警卫（警卫们）追赶。角色们可以帮助杀死这只从下水道里爬出来的食腐兽。奖励：每位领主联盟的角色获得1点声望。',attrs:{任务要求和奖励:"每天早晨，角色们与一队四名粪便清扫工（平民）会面，然后前往贸易区，清扫工们在这里花一整天时间清理街道上的垃圾。这是件无聊的工作。在第九天，大约正午时分，一只食腐虫从附近的小巷中窜出，被两名城市警卫（警卫们）追赶。角色们可以帮助杀死这只从下水道里爬出来的食腐兽。奖励：每位领主联盟的角色获得1点声望。"}},{id:"row_0a6_3_1",kind:"text",text:'3rd｜"哈尔科·斯温霍尔德，一个三年前因试图贿赂城市法官而被流放的邪恶冒险家，非法返回了深水城。我们认为萨纳萨斯公会正在利用他煽动暴力。他最后一次被看到是在码头区招募天狗。找到他，然后悄悄地将他处决。"｜负责搜寻的角色必须成功通过三次 DC 14 智力（调查）检定，且在获得三次失败前完成，每次检定代表8小时的调查。其他角色可以协助，为检定提供优势。哈科（匪徒首领）有两名 天狗同伴与他并肩作战。奖励：每位领主联盟的角色获得1点声望。',attrs:{任务要求和奖励:"负责搜寻的角色必须成功通过三次 DC 14 智力（调查）检定，且在获得三次失败前完成，每次检定代表8小时的调查。其他角色可以协助，为检定提供优势。哈科（匪徒首领）有两名 天狗同伴与他并肩作战。奖励：每位领主联盟的角色获得1点声望。"}},{id:"row_0a6_3_2",kind:"text",text:'4th｜"Zhent家族正在拉拢一个名叫Esloon Bezant的红袍法师，试图将他的暴徒团伙纳入他们的行列。我们所知道的关于他的信息是，他几年前逃离了自己的家乡，并且非常聪明，没有被抓到做任何违法的事情。他和他的恶霸团伙在码头区游荡。破坏这笔交易，并且要快！"｜角色们可以通过散播背叛的谣言在散塔林会和艾斯伦的帮派之间制造裂痕。他们必须花费25金币进行贿赂，并成功通过一个DC 16魅力（欺瞒或说服）检定。相反地，他们也可以直接面对艾斯伦·贝赞特（守序邪恶男性Thayan人类魔法师）和他的五名暴徒手下，要么击败他们，要么用至少500金币贿赂他们。奖励：每个领主联盟的角色获得2点声望。角色们还可以剥夺艾斯伦的法术书，其中包含他所准备的所有法术。',attrs:{任务要求和奖励:"角色们可以通过散播背叛的谣言在散塔林会和艾斯伦的帮派之间制造裂痕。他们必须花费25金币进行贿赂，并成功通过一个DC 16魅力（欺瞒或说服）检定。相反地，他们也可以直接面对艾斯伦·贝赞特（守序邪恶男性Thayan人类魔法师）和他的五名暴徒手下，要么击败他们，要么用至少500金币贿赂他们。奖励：每个领主联盟的角色获得2点声望。角色们还可以剥夺艾斯伦的法术书，其中包含他所准备的所有法术。"}},{id:"row_0a6_3_3",kind:"text",text:'5th｜"城市守卫因最近暴力事件激增而应接不暇，需要我们的帮助。我们收到报告称有一名刺客在屋顶上徘徊，用箭射杀目标，引起市民恐慌。我的线人说他藏身于Trollskull Alley附近的某个地方。找到他，向城市守卫通报他的位置，并尽可能帮助逮捕他。不要杀死他，因为那样做可能会进一步加剧暴力。"｜无论由哪位角色领导此次追捕，都必须成功通过三次 DC 18 智力（调查）检定，且在获得三次失败前完成，每次检定代表8小时的调查。其他角色可以进行协助，为检定提供优势。如果搜索成功，角色们将在托尔克斯库尔巷（T4）的科瑞隆王冠温室内围堵刺客 猎人兹拉吉（参见 附录 B）。齐拉吉会毫不反抗地向城市守卫投降，他相信他的同僚赞特成员会设法将他解救出来。奖励：每个领主联盟的角色获得2点声望。所有协助抓捕齐拉吉的角色将获得50金币。',attrs:{任务要求和奖励:"无论由哪位角色领导此次追捕，都必须成功通过三次 DC 18 智力（调查）检定，且在获得三次失败前完成，每次检定代表8小时的调查。其他角色可以进行协助，为检定提供优势。如果搜索成功，角色们将在托尔克斯库尔巷（T4）的科瑞隆王冠温室内围堵刺客 猎人兹拉吉（参见 附录 B）。齐拉吉会毫不反抗地向城市守卫投降，他相信他的同僚赞特成员会设法将他解救出来。奖励：每个领主联盟的角色获得2点声望。所有协助抓捕齐拉吉的角色将获得50金币。"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_0a6_4",name:"萨芙拉·贝拉布兰塔",purpose:"reference",rows:[{id:"row_0a6_4_0",kind:"text",text:'2nd｜"我们听说Zhents正在支付Field Ward的帮派去攻击疑似Xanathar公会成员。该区每天都在发生打斗。在打斗发生前阻止一场。我们需要向这些暴徒传达一个信息，即进一步的冲突将不会被容忍。"｜角色们必须前往田野区，当一场战斗即将爆发时，在失败三次前成功进行三次 DC 12 魅力（威吓）检定，或者击败四名 暴徒（最好不杀死他们）以驱散潜在的斗殴者。奖励：每个铁手套骑士团的角色获得1点声望。',attrs:{任务要求和奖励:"角色们必须前往田野区，当一场战斗即将爆发时，在失败三次前成功进行三次 DC 12 魅力（威吓）检定，或者击败四名 暴徒（最好不杀死他们）以驱散潜在的斗殴者。奖励：每个铁手套骑士团的角色获得1点声望。"}},{id:"row_0a6_4_1",kind:"text",text:'3rd｜"一个臭名昭著的小偷，被称为黑毒蛇，长久以来都认为她已经死了，显然已经回到了深水城。她已经至少抢劫了十几个贵族庄园。没有人知道她的身份，因为她戴着面具，但《深水城瓦祖报》报道称她是一个贵族。找出该小报的出版人还知道关于她的什么，并向我汇报。"｜角色们可以会见《深水城小报》的出版者加克斯利·鲁德巴斯特（N男性，伊路斯坎人类，平民），并且通过一个DC 12的魅力（威吓或说服）检定，或者用至少50金币贿赂他。如果他们这样做，加克斯利会分享他的怀疑，认为黑毒蛇是阿玛利亚·卡萨兰特（见附录 B）的秘密邪恶双胞胎姐妹，并且她戴着面具以隐藏她的毁容。在卡萨兰特家的别墅采访他们（见第6章），或者进行一天的调查并通过一个DC 15的智力（调查）检定，会揭示没有这样的人存在。奖励：每个铁手套团的角色报告加克斯利的话后获得1点声望。',attrs:{任务要求和奖励:"角色们可以会见《深水城小报》的出版者加克斯利·鲁德巴斯特（N男性，伊路斯坎人类，平民），并且通过一个DC 12的魅力（威吓或说服）检定，或者用至少50金币贿赂他。如果他们这样做，加克斯利会分享他的怀疑，认为黑毒蛇是阿玛利亚·卡萨兰特（见附录 B）的秘密邪恶双胞胎姐妹，并且她戴着面具以隐藏她的毁容。在卡萨兰特家的别墅采访他们（见第6章），或者进行一天的调查并通过一个DC 15的智力（调查）检定，会揭示没有这样的人存在。奖励：每个铁手套团的角色报告加克斯利的话后获得1点声望。"}},{id:"row_0a6_4_2",kind:"text",text:'4th｜"位于田野区Endshift街的Endshift酒馆的守卫每晚都遭到抢劫，店主说他看到巨大的老鼠在后巷徘徊。听起来很无聊，但这是我们不能忽视的求助。"｜这家旅馆正受到"碎片回避者"的骚扰，这是一个由半身人狼人组成的帮派，因为旅馆老板的守卫曾威胁过一名帮派成员。为了结束这种骚扰，角色们必须击败三只鼠人或通过一次成功的DC 17魅力（恐吓）检定吓跑他们。奖励：每个"铁手套"组织的角色获得2点声望，并收到一瓶治疗药水。',attrs:{任务要求和奖励:'这家旅馆正受到"碎片回避者"的骚扰，这是一个由半身人狼人组成的帮派，因为旅馆老板的守卫曾威胁过一名帮派成员。为了结束这种骚扰，角色们必须击败三只鼠人或通过一次成功的DC 17魅力（恐吓）检定吓跑他们。奖励：每个"铁手套"组织的角色获得2点声望，并收到一瓶治疗药水。'}},{id:"row_0a6_4_3",kind:"text",text:'5th｜"我刚收到一份报告，说棘魔在田野区的十二狗法院恐吓市民。来，让我们一起杀死它们，找出那个邪恶的召唤者！"｜角色们必须帮助Savra击败五个棘魔，它们使当地居民被困在附近的建筑物中。紧接着，Gysheer Omfreys (LE女性Tethyrian人类邪教狂信者)从一条小巷中出现并攻击Savra。Gysheer是由维克托罗·卡萨兰特（见附录 B）领导的崇拜恶魔的邪教的过于热心的成员。Savra试图制服并审问她，但只有魔法强制才能迫使她揭露Victoro。由于在深水城崇拜恶魔并不违法，Savra没有理由与Cassalanters制造麻烦，她也建议角色们不要这样做。奖励：每个战旗秩序角色获得2点名望。每个参与的角色都会收到一瓶高等治疗药水。',attrs:{任务要求和奖励:"角色们必须帮助Savra击败五个棘魔，它们使当地居民被困在附近的建筑物中。紧接着，Gysheer Omfreys (LE女性Tethyrian人类邪教狂信者)从一条小巷中出现并攻击Savra。Gysheer是由维克托罗·卡萨兰特（见附录 B）领导的崇拜恶魔的邪教的过于热心的成员。Savra试图制服并审问她，但只有魔法强制才能迫使她揭露Victoro。由于在深水城崇拜恶魔并不违法，Savra没有理由与Cassalanters制造麻烦，她也建议角色们不要这样做。奖励：每个战旗秩序角色获得2点名望。每个参与的角色都会收到一瓶高等治疗药水。"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_0a6_5",name:"塔什琳·雅菲拉",purpose:"reference",rows:[{id:"row_0a6_5_0",kind:"text",text:'2nd｜"有人在码头区杀害精灵和半精灵水手——到目前为止已经有三人死亡，每个人都是在深夜被刀片斩首的。调查一下，好吗？我认为城市守卫可能需要一些帮助。"｜连续三晚在码头附近闲逛的角色会发现一个醉醺醺的半精灵水手赫尔德（匪徒）离开骡颅酒馆（位于码头区的船舶街）。跟随赫尔德的角色可以从叛徒索伦·希布林达斯（Soluun Xibrindas），一个叛逃的黑暗精灵枪手（卓尔火枪手）手中救下他（见附录 B）。索伦藏在阴影中，拔出刀刃，等待半精灵跌跌撞撞地经过。在他发动攻击前发现他需要成功通过一次 DC 18 的感知（观察）检定。如果索伦的生命值降至一半或更低，他会逃跑。奖励：每个散塔林会角色获得1点声望。如果赫尔德在索伦的攻击中幸存下来，每个角色将获得50金币。',attrs:{任务要求和奖励:"连续三晚在码头附近闲逛的角色会发现一个醉醺醺的半精灵水手赫尔德（匪徒）离开骡颅酒馆（位于码头区的船舶街）。跟随赫尔德的角色可以从叛徒索伦·希布林达斯（Soluun Xibrindas），一个叛逃的黑暗精灵枪手（卓尔火枪手）手中救下他（见附录 B）。索伦藏在阴影中，拔出刀刃，等待半精灵跌跌撞撞地经过。在他发动攻击前发现他需要成功通过一次 DC 18 的感知（观察）检定。如果索伦的生命值降至一半或更低，他会逃跑。奖励：每个散塔林会角色获得1点声望。如果赫尔德在索伦的攻击中幸存下来，每个角色将获得50金币。"}},{id:"row_0a6_5_1",kind:"text",text:'3rd｜"在商贸区有一家叫做奇瓶的调和剂的商店。经营这家商店的侏儒是我们的朋友，名叫斯凯莫。他为一个客户制作了一些读心药水。去取药水，然后把它们送到城堡区的"捕神者"——那些巨大的雕像之一。把药水交给穿紫色斗篷的女士，并收下小费。"｜斯齐莫·奇瓶（见附录 B）在一个小的丝绸衬里的箱子里放了四瓶毒药。这些药水看起来、闻起来、尝起来都像是读心药水。在捕神者附近等待交付的是埃斯维莱·罗兹纳尔，黑蛇帮的黑毒蛇（见附录 B）。她穿着带兜帽的紫色斗篷，坐在一辆租来的马车里。她用箱子交换了一个黑色天鹅绒袋子，然后命令她的司机出发。马车将埃斯维莱送到她在海港区的庄园。奖励：每个散塔林会角色获得1点名声。埃斯维莱的袋子里有15枚铂金币，角色们可以保留。',attrs:{任务要求和奖励:"斯齐莫·奇瓶（见附录 B）在一个小的丝绸衬里的箱子里放了四瓶毒药。这些药水看起来、闻起来、尝起来都像是读心药水。在捕神者附近等待交付的是埃斯维莱·罗兹纳尔，黑蛇帮的黑毒蛇（见附录 B）。她穿着带兜帽的紫色斗篷，坐在一辆租来的马车里。她用箱子交换了一个黑色天鹅绒袋子，然后命令她的司机出发。马车将埃斯维莱送到她在海港区的庄园。奖励：每个散塔林会角色获得1点名声。埃斯维莱的袋子里有15枚铂金币，角色们可以保留。"}},{id:"row_0a6_5_2",kind:"text",text:'4th｜"深水城最富有的半身人家族，斯诺比德尔家族，正在提供500金币的信息，以确保一个名叫达舍·斯诺比德尔的失踪家庭成员安全归来。那些龙币在我们的金库中看起来肯定不错！调查一下，看看你能了解到什么，但不要惹上任何麻烦。城市守卫已经对我们有意见了。"｜任何角色只要在南部区或码头区花至少三天时间提问相关问题并追查线索，便可在该段时间结束时进行一个DC 18魅力（说服或威吓）检定。若成功，该角色将说服一些寡言的半身人安排与达舍的会面。会面安排在隔天正午的威穆特进行。达舍会出席听取角色要说的话，但他无意回家。他最近加入了一个名为"银屑回避者"的半身人狼鼠帮派（如此命名是因为他们憎恶银器），并因此自己变成了狼鼠。银屑回避者现在已是他的家人。奖励：每个散塔林角色获得2点声望。',attrs:{任务要求和奖励:'任何角色只要在南部区或码头区花至少三天时间提问相关问题并追查线索，便可在该段时间结束时进行一个DC 18魅力（说服或威吓）检定。若成功，该角色将说服一些寡言的半身人安排与达舍的会面。会面安排在隔天正午的威穆特进行。达舍会出席听取角色要说的话，但他无意回家。他最近加入了一个名为"银屑回避者"的半身人狼鼠帮派（如此命名是因为他们憎恶银器），并因此自己变成了狼鼠。银屑回避者现在已是他的家人。奖励：每个散塔林角色获得2点声望。'}},{id:"row_0a6_5_3",kind:"text",text:'5th｜"斯齐莫·奇瓶背叛了我们！这个小虫子一直在向我们的敌人提供信息。他必须被消灭。让它看起来像是一场意外。"｜斯齐莫·奇瓶（见附录 B）设法比角色们领先一步。当他们接近他的商店时，他们看到他和其他五名乘客以及一名司机（都是平民）一起乘坐货车离开。如果斯凯莫意识到自己被跟踪，他会施放飞行术并飞向空中。如果效果被解除或者角色们继续追击，他会对自己施放高等隐形术，并利用人群来掩护他的逃跑。如果角色们未能抓住他，他会在科拉特塔楼（见第8章）中寻求庇护。奖励：如果斯凯莫在不牵连黑网的情况下被消灭，每个散塔林会角色获得2点名声。此外，抓住斯凯莫的背包的角色会发现背包里有他的法术书（包含他准备的所有法术）、一瓶读心药水，以及一个丝绸钱袋里的150金币。',attrs:{任务要求和奖励:"斯齐莫·奇瓶（见附录 B）设法比角色们领先一步。当他们接近他的商店时，他们看到他和其他五名乘客以及一名司机（都是平民）一起乘坐货车离开。如果斯凯莫意识到自己被跟踪，他会施放飞行术并飞向空中。如果效果被解除或者角色们继续追击，他会对自己施放高等隐形术，并利用人群来掩护他的逃跑。如果角色们未能抓住他，他会在科拉特塔楼（见第8章）中寻求庇护。奖励：如果斯凯莫在不牵连黑网的情况下被消灭，每个散塔林会角色获得2点名声。此外，抓住斯凯莫的背包的角色会发现背包里有他的法术书（包含他准备的所有法术）、一瓶读心药水，以及一个丝绸钱袋里的150金币。"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_0ad_0",name:"瓦婕拉·莎法尔",purpose:"reference",rows:[{id:"row_0ad_0_0",kind:"text",text:'2nd｜"寻找胡拉姆，一位居住在深水城山山洞中的僧侣。询问他关于城市威胁的所闻，但尽量不要惹恼他或逗留太久。"｜那些攀登山坡到达洞穴的人必须成功进行一次 DC 12 体质豁免检定，否则将在抵达时带有 1d4 层 力竭。尝试让 胡拉姆（参见 附录 B）分享信息需要进行一次 DC 12 魅力（说服）检定。如果检定成功，他会告诉角色们："邪恶的双胞胎暂时隐藏了它的面目。预计在冬末之前情况会有所变化。"（这是对 曼松 的隐晦提及。）角色们可以安全地下山。奖励：每个灰手角色获得1点声望。',attrs:{任务要求和奖励:'那些攀登山坡到达洞穴的人必须成功进行一次 DC 12 体质豁免检定，否则将在抵达时带有 1d4 层 力竭。尝试让 胡拉姆（参见 附录 B）分享信息需要进行一次 DC 12 魅力（说服）检定。如果检定成功，他会告诉角色们："邪恶的双胞胎暂时隐藏了它的面目。预计在冬末之前情况会有所变化。"（这是对 曼松 的隐晦提及。）角色们可以安全地下山。奖励：每个灰手角色获得1点声望。'}},{id:"row_0ad_0_1",kind:"text",text:'3rd｜"一只年轻的青铜龙在深水港定居了。它最近吓坏了几个水手，但并没有伤害任何人。面对这条龙，了解它的意图。"｜瓦吉拉给每个角色一瓶水下呼吸药水来完成这项任务。他们在深港底部发现一条青年青铜龙——泽利法恩，在覆盖着藤壶的沉船周围游动。这只友好的龙试图从角色们身上哄骗尽可能多的财宝。与泽利法恩交谈的人可以尝试进行一次DC 13感知（洞察）检定。如果检定成功，角色会发现这条龙对深水城没有威胁。如果没有人通过检定，龙的真正意图就无法被察觉。奖励: 每个灰手成员获得1点声望。',attrs:{任务要求和奖励:"瓦吉拉给每个角色一瓶水下呼吸药水来完成这项任务。他们在深港底部发现一条青年青铜龙——泽利法恩，在覆盖着藤壶的沉船周围游动。这只友好的龙试图从角色们身上哄骗尽可能多的财宝。与泽利法恩交谈的人可以尝试进行一次DC 13感知（洞察）检定。如果检定成功，角色会发现这条龙对深水城没有威胁。如果没有人通过检定，龙的真正意图就无法被察觉。奖励: 每个灰手成员获得1点声望。"}},{id:"row_0ad_0_2",kind:"text",text:'4th｜"最近，灰手小队的一名成员表现得有些奇怪。他的名字是麦伦·战龙，他那无忧无虑的性格已经变得阴沉。他比平时更多地在打哈欠之门周围徘徊。观察他十天，然后向我汇报。"｜角色们可以与 麦伦·战龙（见 附录 B）建立友谊，或是远远地观察他。每天黎明时分，梅伦都会在他位于"打呵欠的入口"的房间里与他的魔法斧头 蔚蓝之锋（见 附录A）进行一场心灵意志的较量，然后才会离开房间。斧头想要寻找一个新的持有者，但梅伦拒绝放弃它。角色们如果在这场较量中观察梅伦，可以通过一个成功 DC 15 的智慧（洞察）检定来了解发生了什么事情。奖励：每个"灰手"角色的角色将获得 2 点声望。如果角色们能够清除梅伦头颅中的 噬脑怪，瓦杰拉将给予队伍一支 探秘魔杖。',attrs:{任务要求和奖励:'角色们可以与 麦伦·战龙（见 附录 B）建立友谊，或是远远地观察他。每天黎明时分，梅伦都会在他位于"打呵欠的入口"的房间里与他的魔法斧头 蔚蓝之锋（见 附录A）进行一场心灵意志的较量，然后才会离开房间。斧头想要寻找一个新的持有者，但梅伦拒绝放弃它。角色们如果在这场较量中观察梅伦，可以通过一个成功 DC 15 的智慧（洞察）检定来了解发生了什么事情。奖励：每个"灰手"角色的角色将获得 2 点声望。如果角色们能够清除梅伦头颅中的 噬脑怪，瓦杰拉将给予队伍一支 探秘魔杖。'}},{id:"row_0ad_0_3",kind:"text",text:'5th｜"姗娜萨 正在使用噬脑怪控制城市中关键位置的Waterdavians。我们必须立即解决这个问题。潜入姗娜萨的巢穴并摧毁负责创造这些生物的任何东西。"｜角色们必须剿灭夺心魔尼希卢尔（见附录 B）。他们可以蹲守一个珊娜萨公会藏身地（见第一章）并等待尼希卢尔在那里出现，或在姗娜萨的巢穴（见第五章）中对抗夺心魔。奖励：每位灰手角色获得2点声望。每位参与突袭的角色获得一瓶抗性药水。此外，瓦婕拉会支付任何用于复活死亡角色所需的死者复活法术的花费。',attrs:{任务要求和奖励:"角色们必须剿灭夺心魔尼希卢尔（见附录 B）。他们可以蹲守一个珊娜萨公会藏身地（见第一章）并等待尼希卢尔在那里出现，或在姗娜萨的巢穴（见第五章）中对抗夺心魔。奖励：每位灰手角色获得2点声望。每位参与突袭的角色获得一瓶抗性药水。此外，瓦婕拉会支付任何用于复活死亡角色所需的死者复活法术的花费。"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_0bb_0",name:"埃梅克的计划",purpose:"reference",rows:[{id:"row_0bb_0_0",kind:"text",text:"事件｜这些鼠人在半身人形态下侦查角色们的酒馆，并可能尝试在那里找工作。"},{id:"row_0bb_0_1",kind:"text",text:"事件｜狼鼠人在角色们的住处内部放置食物碎屑，并在外墙钻小洞以吸引老鼠，造成鼠患。"},{id:"row_0bb_0_2",kind:"text",text:'动作｜埃梅克散布谣言说角色们的酒馆有老鼠出没，这就是他没有购买它的原因。在接下来的三次商业运营检定时，对角色们在"运营酒馆"表格（见"酒馆经营费用"，第41页）上的掷骰结果施加-10的惩罚。'},{id:"row_0bb_0_3",kind:"text",text:"事件｜碎片回避者声称他们已经做得够多了，要求更多的金币。"},{id:"row_0bb_0_4",kind:"text",text:"动作｜埃梅克再付给鼠人50金币，让他们在夜间以混合形态和老鼠形态在角色们的酒馆周围潜行，在邻居的门上刻老鼠脸，并以其他方式吸引注意力。"},{id:"row_0bb_0_5",kind:"text",text:"动作｜埃姆梅克说服了几名当地居民签署他起草的一封信，然后将信发送给城市守卫。信中指控角色们为狼鼠人盗贼公会经营掩护，并敦促守卫关闭他们的据点。"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_141_0",name:"商店货物",purpose:"random",rows:[{id:"row_141_0_0",kind:"text",text:"艺术品",range:[1,1]},{id:"row_141_0_1",kind:"text",text:"书籍",range:[2,2]},{id:"row_141_0_2",kind:"text",text:"蜡烛",range:[3,3]},{id:"row_141_0_3",kind:"text",text:"车轮",range:[4,4]},{id:"row_141_0_4",kind:"text",text:"戏服",range:[5,5]},{id:"row_141_0_5",kind:"text",text:"玩偶",range:[6,6]},{id:"row_141_0_6",kind:"text",text:"新鲜的肉",range:[7,7]},{id:"row_141_0_7",kind:"text",text:"家具",range:[8,8]},{id:"row_141_0_8",kind:"text",text:"游戏",range:[9,9]},{id:"row_141_0_9",kind:"text",text:"玻璃",range:[10,10]},{id:"row_141_0_10",kind:"text",text:"帽子",range:[11,11]},{id:"row_141_0_11",kind:"text",text:"捕猎陷阱",range:[12,12]},{id:"row_141_0_12",kind:"text",text:"锁和钥匙",range:[13,13]},{id:"row_141_0_13",kind:"text",text:"乐器",range:[14,14]},{id:"row_141_0_14",kind:"text",text:"宠物",range:[15,15]},{id:"row_141_0_15",kind:"text",text:"锅",range:[16,16]},{id:"row_141_0_16",kind:"text",text:"口粮",range:[17,17]},{id:"row_141_0_17",kind:"text",text:"地毯",range:[18,18]},{id:"row_141_0_18",kind:"text",text:"伞",range:[19,19]},{id:"row_141_0_19",kind:"text",text:"红酒",range:[20,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_188_0",name:"屋顶追逐并发症",purpose:"random",rows:[{id:"row_188_0_0",kind:"text",text:"你来到两个屋顶之间一处10英尺宽的缺口。如果你的力量达到10或更高，你可以跳过这个缺口（每清除1英尺需要消耗1英尺的移动力），并且你必须成功通过一个 DC 10 敏捷（杂技）检定，否则你会在远处的屋顶上摔倒 倒地。或者你也可以使用一条10英尺长的绳索在两屋顶之间穿越这个缺口",range:[1,1]},{id:"row_188_0_1",kind:"text",text:"你来到一个比你当前所在屋顶高10英尺的屋顶。进行一次 DC 10 力量（运动）检定。如果检定失败，高度变化视为 3 的10英尺。",range:[2,2]},{id:"row_188_0_2",kind:"text",text:"你来到了一个比你所在位置低10英尺的屋顶。进行一次 DC 10 力量（运动）检定以安全跳下。如果检定失败，你会因坠落而受到伤害并 倒地。",range:[3,3]},{id:"row_188_0_3",kind:"text",text:"屋顶很滑。进行一次 DC 10 敏捷豁免检定。若检定失败，你将 倒地。",range:[4,4]},{id:"row_188_0_4",kind:"text",text:"你踩到了屋顶的腐朽部分，它在你脚下坍塌。进行一个 DC 15 敏捷豁免检定。如果检定失败，你部分掉入屋顶的洞中并被卡住。被卡住时，你处于 倒地 和 束缚 状态。你可以在你的回合使用一个动作进行一个 DC 10 力量（运动）或敏捷（体操）检定，成功则结束此效果。",range:[5,5]},{id:"row_188_0_5",kind:"text",text:"当你踩到屋顶的瓦片或瓦片时，它们会崩裂。进行一个 DC 15 敏捷豁免检定。如果检定失败，你 倒地 并向后滑行10英尺。",range:[6,6]},{id:"row_188_0_6",kind:"text",text:"一个屋顶的突出物，如烟囱或风向标，挡住了你的去路。进行一次 DC 10 敏捷（杂技）检定。如果检定失败，该障碍物视为 5 英尺的 3。",range:[7,7]},{id:"row_188_0_7",kind:"text",text:"你惊动了在屋顶筑巢的一群鸟，它们在你周围扑腾。进行一个 DC 10 敏捷豁免检定。如果检定失败，这些鸟会算作 10 英尺的 3。",range:[8,8]},{id:"row_188_0_8",kind:"text",text:"你触发了放置在屋顶上的守卫刻文法术以阻止盗贼。进行一次DC 13的感知豁免检定。若检定失败，你将成为塔莎狂笑术法术的目标，效果持续1分钟。",range:[9,9]},{id:"row_188_0_9",kind:"text",text:"地上有人向你投掷石块、雪球或类似的抛射物。进行一个 DC 10 敏捷豁免检定。若检定失败，攻击不会造成伤害但会分散你的注意力，并视为 5 英尺的 3。",range:[10,10]},{id:"row_188_0_10",kind:"text",text:"无意外。",range:[11,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_1a8_0",name:"旧塔宝藏表格",purpose:"random",rows:[{id:"row_1a8_0_0",kind:"text",text:"一根烧焦的魔法飞弹魔杖（每次消耗一次充能时，有50的几率什么也不会发生，充能被浪费）",range:[1,1]},{id:"row_1a8_0_1",kind:"text",text:"一个治疗药水与飞行药水混合的药水（如果喝下这种混合物，需要在《地下城主指南》第7章的药水混合表上掷骰以确定效果）",range:[2,2]},{id:"row_1a8_0_2",kind:"text",text:"一个有裂纹的漂浮之球，它发出闪烁的光，但除此之外功能正常",range:[3,3]},{id:"row_1a8_0_3",kind:"text",text:"一个烧焦的卷轴筒，里面装有两张空白纸张，实际上是纸鸟（见附录A）",range:[4,4]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d4"},{id:"tbl_1e0_0",name:"Xanathar 公会名册",purpose:"reference",rows:[{id:"row_1e0_0_0",kind:"text",text:"B5｜2个地精在箭缝后面"},{id:"row_1e0_0_1",kind:"text",text:"B6｜1个半食人魔在喝了六桶廉价葡萄酒后变得中毒"},{id:"row_1e0_0_2",kind:"text",text:'B7｜3名灰矮人和1名凝视者眼魔（见附录 B）站岗，而索文·双须（见附录 B）正在研究一个机械眼魔（见下文的"机械眼魔"）'},{id:"row_1e0_0_3",kind:"text",text:'B8｜Korgstrod Uxgulm，灰矮人首领（40生命值），坐在石椅上，由3个狗头人（见下文的"欺骗之石"）侍候'},{id:"row_1e0_0_4",kind:"text",text:"b10｜7个穴蜥人潜伏在阴影中"},{id:"row_1e0_0_5",kind:"text",text:'B11a｜1个呓语之口在B11b守护着一个宝箱（见下文的"宝箱"）'}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_1ed_0",name:"存在拟态生物",purpose:"random",rows:[{id:"row_1ed_0_0",kind:"text",text:"存在一个拟身怪",range:[1,25]},{id:"row_1ed_0_1",kind:"text",text:"这里什么也没有",range:[26,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_205_0",name:"卡莱恩的画作",purpose:"random",rows:[{id:"row_205_0_0",kind:"text",text:"一幅螳螂虫的画",range:[1,1]},{id:"row_205_0_1",kind:"text",text:"一幅食腐爬虫的画",range:[2,2]},{id:"row_205_0_2",kind:"text",text:"一幅移位兽的画作",range:[3,3]},{id:"row_205_0_3",kind:"text",text:"一幅伊特怪的画",range:[4,4]},{id:"row_205_0_4",kind:"text",text:"一幅石像鬼的画作",range:[5,5]},{id:"row_205_0_5",kind:"text",text:"一幅幽灵的画",range:[6,6]},{id:"row_205_0_6",kind:"text",text:"一幅呓语之口的画作",range:[7,7]},{id:"row_205_0_7",kind:"text",text:"一幅地狱猎犬的画",range:[8,8]},{id:"row_205_0_8",kind:"text",text:"一幅蝎尾狮的画作",range:[9,9]},{id:"row_205_0_9",kind:"text",text:"一幅牛头怪的画作",range:[10,10]},{id:"row_205_0_10",kind:"text",text:"一幅木乃伊的画",range:[11,11]},{id:"row_205_0_11",kind:"text",text:"一幅狼人的画",range:[12,12]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d12"},{id:"tbl_222_0",name:"金库钥匙",purpose:"random",rows:[{id:"row_222_0_0",kind:"text",text:"精金条",range:[1,1],attrs:{第二把钥匙:"活化构造",第三把钥匙:"没有胡须的矮人"}},{id:"row_222_0_1",kind:"text",text:"眼魔眼梗",range:[2,2],attrs:{第二把钥匙:"青铜龙鳞片",第三把钥匙:"矮人啤酒桶"}},{id:"row_222_0_2",kind:"text",text:"醉酒的精灵",range:[3,3],attrs:{第二把钥匙:"价值至少1,000 gp的宝石",第三把钥匙:"女王的礼物"}},{id:"row_222_0_3",kind:"text",text:"隐形生物",range:[4,4],attrs:{第二把钥匙:"一幅矮人矿工的画",第三把钥匙:"一对熊地精的耳朵"}},{id:"row_222_0_4",kind:"text",text:"《Your Beardy Face》表演",range:[5,5],attrs:{第二把钥匙:"切断的黑暗精灵手",第三把钥匙:"变形生物"}},{id:"row_222_0_5",kind:"text",text:"镀银战锤",range:[6,6],attrs:{第二把钥匙:"阳光",第三把钥匙:"独角兽"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"1d6"},{id:"tbl_25d_0",name:"Xanathar的位置",purpose:"random",rows:[{id:"row_25d_0_0",kind:"text",text:"姗娜萨 正在与它的宠物鱼斯尔嘉在X19交谈。",range:[1,50]},{id:"row_25d_0_1",kind:"text",text:"姗娜萨 正在听众室（X18）向在场的手下们发表一篇冗长的布道。",range:[51,75]},{id:"row_25d_0_2",kind:"text",text:"姗娜萨 正在血与命运之坑（X6）观看一场战斗。",range:[76,90]},{id:"row_25d_0_3",kind:"text",text:"姗娜萨 正在墓穴中沉思其不朽，周围是过去Xanathar的遗骸（X33）。",range:[91,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_27e_0",name:"牢房居民",purpose:"reference",rows:[{id:"row_27e_0_0",kind:"text",text:"A｜一个名叫Groz的男性半食人魔，一个名叫Umpok的牛头人，以及一个名叫Charworl的女性魔兽人"},{id:"row_27e_0_1",kind:"text",text:"B｜被绑架的沃特德文市民：夏·顺（NG女性寿族人类吟游诗人，见附录 B），克劳迪奥·本兹雷克（LN男性特提里安人类贵族），以及阿尔特赖特·格雷法尔孔（CN男性伊卢斯坎浪人，见附录 B）"},{id:"row_27e_0_2",kind:"text",text:"C｜一个名叫Raelyn Auvryndar的女性黑暗精灵，最近与她的伴侣和下属Zaibon Kyszalt分离（见X24）"},{id:"row_27e_0_3",kind:"text",text:"D｜萨马拉·强骨，一个女性轻盈半身人，是与曼松结盟的散塔林会间谍。她是混乱邪恶的，并且拥有以下种族特性：她体型小，步行速度为25尺。她可以通过任何中等体型或更大的生物的空间。她在对抗恐慌状态的豁免检定中具有优势。她会说通用语、半身人语和地底共同语。"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_2d6_0",name:"阿米莉亚的位置",purpose:"random",rows:[{id:"row_2d6_0_0",kind:"text",text:"她在照料她的蝴蝶花园（C25）。",range:[1,70]},{id:"row_2d6_0_1",kind:"text",text:"她在阳台上吸烟（C25a）。",range:[71,90]},{id:"row_2d6_0_2",kind:"text",text:"她在阁楼前向奥斯瓦尔多哭泣（C24）。",range:[91,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_2d6_1",name:"维克托罗的位置",purpose:"random",rows:[{id:"row_2d6_1_0",kind:"text",text:"他在办公室（C6）。",range:[1,70]},{id:"row_2d6_1_1",kind:"text",text:"他在阅览室（C4）。",range:[71,90]},{id:"row_2d6_1_2",kind:"text",text:"他和阿米莉亚在上述提到的三个地点之一。",range:[91,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_2d6_2",name:"特伦齐奥和埃尔泽丽娜的位置",purpose:"random",rows:[{id:"row_2d6_2_0",kind:"text",text:"他们在房间里玩耍（C18）。",range:[1,50]},{id:"row_2d6_2_1",kind:"text",text:"他们在图书馆（C3）。",range:[51,75]},{id:"row_2d6_2_2",kind:"text",text:"他们在花园里追逐蝴蝶（C25）。",range:[76,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_355_0",name:"囚笼中的囚犯",purpose:"random",rows:[{id:"row_355_0_0",kind:"text",text:"这里有一名水手",range:[1,25]},{id:"row_355_0_1",kind:"text",text:"囚笼是空的",range:[26,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_355_1",name:"J20. 生物围栏",purpose:"reference",rows:[{id:"row_355_1_0",kind:"text",text:"两只猿｜四只巨火甲虫"},{id:"row_355_1_1",kind:"text",text:"一头犀牛｜一只骏鹰"},{id:"row_355_1_2",kind:"text",text:"一只老虎｜一只斧嘴鸟"},{id:"row_355_1_3",kind:"text",text:"一只异特龙｜两只亡命恶犬"},{id:"row_355_1_4",kind:"text",text:"两只黑豹｜一只巨秃鹫"},{id:"row_355_1_5",kind:"text",text:"一只枭熊｜一只白熊"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}}],m=[],p=[],v=[],g=[],I={formatVersion:1,manifest:e,locations:n,scenes:t,npcs:o,infos:a,encounters:s,quests:i,events:c,achievements:r,treasures:d,lore:l,hooks:_,clocks:f,tables:u,secrets:m,afflictions:p,agendas:v,migrations:g};export{r as achievements,p as afflictions,v as agendas,f as clocks,I as default,s as encounters,c as events,h as formatVersion,_ as hooks,a as infos,n as locations,l as lore,e as manifest,g as migrations,o as npcs,i as quests,t as scenes,m as secrets,u as tables,d as treasures};

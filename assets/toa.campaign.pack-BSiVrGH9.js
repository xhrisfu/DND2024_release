const h=1,e={id:"toa",title:"湮灭之墓",version:"1.0.0",sourceBook:{title:"Tomb of Annihilation",edition:"2017",totalPages:256},recommendedLevels:[1,11],startingLocationId:"loc_02e",startingSceneId:"scn_02f",chapters:[{id:"02e",title:"南扎路港",questIds:["qst_main_toa"],completionCondition:{type:"quest_stage",questId:"qst_main_toa",stageId:"stage_toa_expedition",reached:!0},levelBand:[1,2],dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。丛林探索由玩家路线推进；向导、遗迹和神龛允许不同顺序。收集方块、进入陵墓、摧毁灵魂装置与解除死亡诅咒须分开核验。"}]},{id:"09c",title:"楚尔特之地",questIds:["qst_main_toa"],completionCondition:{type:"quest_stage",questId:"qst_main_toa",stageId:"stage_toa_omu",reached:!0},levelBand:[1,6],dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。丛林探索由玩家路线推进；向导、遗迹和神龛允许不同顺序。收集方块、进入陵墓、摧毁灵魂装置与解除死亡诅咒须分开核验。"}]},{id:"1d6",title:"禁城居民",questIds:["qst_main_toa"],completionCondition:{type:"quest_stage",questId:"qst_main_toa",stageId:"stage_toa_fane",reached:!0},levelBand:[5,8],dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。丛林探索由玩家路线推进；向导、遗迹和神龛允许不同顺序。收集方块、进入陵墓、摧毁灵魂装置与解除死亡诅咒须分开核验。"}]},{id:"298",title:"夜蛇圣所",questIds:["qst_main_toa"],completionCondition:{type:"quest_stage",questId:"qst_main_toa",stageId:"stage_toa_tomb",reached:!0},levelBand:[7,9],dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。丛林探索由玩家路线推进；向导、遗迹和神龛允许不同顺序。收集方块、进入陵墓、摧毁灵魂装置与解除死亡诅咒须分开核验。"}]},{id:"305",title:"九神之墓",questIds:["qst_main_toa"],completionCondition:{type:"quest_completed",questId:"qst_main_toa"},levelBand:[8,11],dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。丛林探索由玩家路线推进；向导、遗迹和神龛允许不同顺序。收集方块、进入陵墓、摧毁灵魂装置与解除死亡诅咒须分开核验。"}]}],styleBible:"从南扎路港补给并选择向导，在楚尔特六角格开放远征中管理饮水、食物、天气、疾病与死亡诅咒时限；线索最终指向奥姆。奥姆九座神龛可按任意顺序寻找拼图立方体，最后一枚由夜蛇圣所持有；进入九神之墓后收集五把骷髅钥匙、打开死亡之神育婴室并摧毁灵魂收割者。不得把丛林地点或九座神龛伪装成固定全清顺序。",endings:[{id:"toa-soulmonger-destroyed",condition:{type:"quest_completed",questId:"qst_main_toa"},epilogueSceneId:"scn_524",dmGuidance:"灵魂收割者被摧毁，死亡诅咒终止，被囚而尚未吞噬的灵魂获释；辛德拉若仍可复活，会按约支付报酬。"},{id:"toa-expedition-fails",epilogueSceneId:"scn_524",dmGuidance:"若队伍未摧毁灵魂收割者，死亡诅咒继续侵蚀已复活者；保留幸存人物与已获线索供后续队伍接续，不伪造成功结局。"}],_meta:{needsReview:!1,extractorNotes:"manifest 已由逐书 packMeta 复核｜开局点：overrides.json 指定开局（startingLocationId=loc_02e，已排除 external 哨兵）｜packMeta 已完成逐书复核"},outcomeMilestones:[]},n=[{id:"loc_02e",name:"南扎路港",aliases:["Port Nyanzaru"],chapterId:"02e",connections:[{toLocationId:"loc_065",kind:"passage"},{toLocationId:"loc_0cd",kind:"passage"},{toLocationId:"loc_0b5",kind:"passage"},{toLocationId:"loc_1a6",kind:"passage"},{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_02e","scn_02f","scn_031","scn_035","scn_036","scn_037","scn_039","scn_03a","scn_03b","scn_03c","scn_03d","scn_03e","scn_03f","scn_041","scn_042","scn_043","scn_044","scn_045","scn_046","scn_047","scn_049","scn_04b","scn_04c","scn_04d","scn_04e","scn_04f","scn_051","scn_053","scn_054"],defaultSceneId:"scn_02f",_meta:{sourcePages:[15],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}},{id:"loc_065",name:"商业王子别墅",aliases:["Merchant Prince's Villa"],chapterId:"02e",connections:[{toLocationId:"loc_10b",kind:"passage"},{toLocationId:"loc_02e",kind:"passage"}],sceneIds:["scn_065","scn_067","scn_068","scn_069","scn_06a","scn_06b","scn_06c","scn_06d","scn_06e","scn_06f","scn_071","scn_072","scn_073","scn_075","scn_076","scn_077","scn_078","scn_079","scn_083"],defaultSceneId:"scn_065",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_09c",name:"楚尔特之地",aliases:["The Land of Chult"],chapterId:"09c",connections:[{toLocationId:"loc_10b",kind:"passage"},{toLocationId:"loc_15a",kind:"passage"},{toLocationId:"loc_1d6",kind:"passage"},{toLocationId:"loc_0ac",kind:"road"},{toLocationId:"loc_0ad",kind:"road"},{toLocationId:"loc_0ae",kind:"road"},{toLocationId:"loc_0b4",kind:"road"},{toLocationId:"loc_0b5",kind:"road"},{toLocationId:"loc_0b7",kind:"road"},{toLocationId:"loc_0cd",kind:"road"},{toLocationId:"loc_0d7",kind:"road"},{toLocationId:"loc_0d8",kind:"road"},{toLocationId:"loc_0e6",kind:"road"},{toLocationId:"loc_0f2",kind:"road"},{toLocationId:"loc_115",kind:"road"},{toLocationId:"loc_116",kind:"road"},{toLocationId:"loc_12b",kind:"road"},{toLocationId:"loc_12e",kind:"road"},{toLocationId:"loc_130",kind:"road"},{toLocationId:"loc_13e",kind:"road"},{toLocationId:"loc_13f",kind:"road"},{toLocationId:"loc_156",kind:"road"},{toLocationId:"loc_157",kind:"road"},{toLocationId:"loc_158",kind:"road"},{toLocationId:"loc_163",kind:"road"},{toLocationId:"loc_165",kind:"road"},{toLocationId:"loc_166",kind:"road"},{toLocationId:"loc_188",kind:"road"},{toLocationId:"loc_18b",kind:"road"},{toLocationId:"loc_18d",kind:"road"},{toLocationId:"loc_195",kind:"road"},{toLocationId:"loc_197",kind:"road"},{toLocationId:"loc_198",kind:"road"},{toLocationId:"loc_199",kind:"road"},{toLocationId:"loc_19a",kind:"road"},{toLocationId:"loc_19b",kind:"road"},{toLocationId:"loc_19c",kind:"road"},{toLocationId:"loc_19d",kind:"road"},{toLocationId:"loc_19e",kind:"road"},{toLocationId:"loc_1a1",kind:"road"},{toLocationId:"loc_1a3",kind:"road"},{toLocationId:"loc_1a4",kind:"road"},{toLocationId:"loc_1a5",kind:"road"},{toLocationId:"loc_1a6",kind:"road"},{toLocationId:"loc_1a8",kind:"road"},{toLocationId:"loc_1aa",kind:"road"},{toLocationId:"loc_1af",kind:"road"},{toLocationId:"loc_1ce",kind:"road"},{toLocationId:"loc_02e",kind:"road"}],sceneIds:["scn_09c","scn_09d","scn_0aa"],defaultSceneId:"scn_09d",_meta:{sourcePages:[37],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}},{id:"loc_0ac",name:"阿尔达尼盆地",aliases:["Aldani Basin"],chapterId:"09c",connections:[{toLocationId:"loc_10b",kind:"passage"},{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_0ac"],defaultSceneId:"scn_0ac",_meta:{sourcePages:[41],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_0ad",name:"阿塔兹·卡哈克拉",aliases:["Ataaz Kahakla"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_0ad"],defaultSceneId:"scn_0ad",_meta:{sourcePages:[41],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_0ae",name:"阿塔兹·穆哈哈",aliases:["Ataaz Muhahah"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_0ae"],defaultSceneId:"scn_0ae",_meta:{sourcePages:[41],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_0b4",name:"阿塔兹·伊克瓦齐",aliases:["Ataaz Yklwazi"],chapterId:"09c",connections:[{toLocationId:"loc_1af",kind:"passage"},{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_0b4"],defaultSceneId:"scn_0b4",_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_0b5",name:"楚尔特湾",aliases:["Bay of Chult"],chapterId:"09c",connections:[{toLocationId:"loc_02e",kind:"passage"},{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_0b5"],defaultSceneId:"scn_0b5",_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_0b7",name:"正义营地",aliases:["Camp Righteous"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_0b7","scn_0b9","scn_0ba","scn_0bb","scn_0bd","scn_0be","scn_0c0","scn_0c5","scn_0c6","scn_0c7","scn_0c8","scn_0c9"],defaultSceneId:"scn_0b7",_meta:{sourcePages:[43],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_0cd",name:"复仇营地",aliases:["Camp Vengeance"],chapterId:"09c",connections:[{toLocationId:"loc_02e",kind:"passage"},{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_15a",kind:"passage"},{toLocationId:"loc_4d7",kind:"passage"}],sceneIds:["scn_0cd","scn_0cf","scn_0d0","scn_0d1","scn_0d2","scn_0d3","scn_0d4","scn_0d5","scn_0d6"],defaultSceneId:"scn_0cd",_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_0d7",name:"大锅",aliases:["The Cauldron"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_0d7"],defaultSceneId:"scn_0d7",_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_0d8",name:"登格隆格",aliases:["Dungrunglung"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_0d8","scn_0da","scn_0db","scn_0dd","scn_0de","scn_0e1","scn_0e2","scn_0e3"],defaultSceneId:"scn_0d8",_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_0e6",name:"火指",aliases:["Firefinger"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_0e6","scn_0e8","scn_0ea","scn_0ed","scn_0ef"],defaultSceneId:"scn_0e6",_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_0f2",name:"贝路利安堡",aliases:["Fort Beluarian"],chapterId:"09c",connections:[{toLocationId:"loc_130",kind:"passage"},{toLocationId:"loc_12b",kind:"passage"},{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_0f2","scn_0f4","scn_0f5","scn_0f6","scn_0f7","scn_0f8","scn_0f9","scn_0fa","scn_0fc","scn_0fd","scn_0fe","scn_0ff","scn_100","scn_101","scn_102","scn_103","scn_104","scn_105","scn_107","scn_108","scn_10a"],defaultSceneId:"scn_0f2",_meta:{sourcePages:[54],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_10b",name:"乌塔欧之心",aliases:["Heart of Ubtao"],chapterId:"09c",connections:[{toLocationId:"loc_065",kind:"passage"},{toLocationId:"loc_09c",kind:"passage"},{toLocationId:"loc_0ac",kind:"passage"}],sceneIds:["scn_10b","scn_10d","scn_10e","scn_10f","scn_110","scn_113","scn_114"],defaultSceneId:"scn_10b",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_115",name:"希萨里",aliases:["Hisari"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_1d6",kind:"passage"}],sceneIds:["scn_115"],defaultSceneId:"scn_115",_meta:{sourcePages:[60],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_116",name:"赫拉卡马尔",aliases:["Hrakhamar"],chapterId:"09c",connections:[{toLocationId:"loc_1aa",kind:"passage"},{toLocationId:"loc_1af",kind:"passage"},{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_15a",kind:"passage"}],sceneIds:["scn_116","scn_118","scn_11a","scn_11c","scn_11d","scn_11f","scn_120","scn_125","scn_127","scn_129","scn_12a"],defaultSceneId:"scn_116",_meta:{sourcePages:[60],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_12b",name:"瓦尔斯皮德",aliases:["Hvalspyd"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_0f2",kind:"passage"}],sceneIds:["scn_12b"],defaultSceneId:"scn_12b",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_12e",name:"伊肖",aliases:["Ishau"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_12e"],defaultSceneId:"scn_12e",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_130",name:"贾哈卡锚地",aliases:["Jahaka Anchorage"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_0f2",kind:"passage"}],sceneIds:["scn_130","scn_132","scn_133","scn_134","scn_135","scn_138","scn_139","scn_13a","scn_13b","scn_13c"],defaultSceneId:"scn_130",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_13e",name:"贾哈卡湾",aliases:["Jahaka Bay"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_13e"],defaultSceneId:"scn_13e",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_13f",name:"基尔·萨巴尔",aliases:["Kir Sabal"],chapterId:"09c",connections:[{toLocationId:"loc_166",kind:"passage"},{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_305",kind:"passage"},{toLocationId:"loc_480",kind:"passage"}],sceneIds:["scn_13f","scn_146","scn_14d","scn_150","scn_153","scn_154"],defaultSceneId:"scn_13f",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_156",name:"基彻尔湾",aliases:["Kitcher's Inlet"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_156"],defaultSceneId:"scn_156",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_157",name:"罗湖",aliases:["Lake Luo"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_157"],defaultSceneId:"scn_157",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_158",name:"灰烬与烟雾之地",aliases:["Land of Ash and Smoke"],chapterId:"09c",connections:[{toLocationId:"loc_1af",kind:"passage"},{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_158"],defaultSceneId:"scn_158",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_15a",name:"姆巴拉",aliases:["Mbala"],chapterId:"09c",connections:[{toLocationId:"loc_1aa",kind:"passage"},{toLocationId:"loc_0cd",kind:"passage"},{toLocationId:"loc_18d",kind:"passage"},{toLocationId:"loc_116",kind:"passage"},{toLocationId:"loc_09c",kind:"passage"}],sceneIds:["scn_15a"],defaultSceneId:"scn_15a",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_163",name:"梅兹罗",aliases:["Mezro"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_18d",kind:"passage"}],sceneIds:["scn_163"],defaultSceneId:"scn_163",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_165",name:"迷雾崖",aliases:["Mistcliff"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_165"],defaultSceneId:"scn_165",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_166",name:"南戈尔",aliases:["Nangalore"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_13f",kind:"passage"}],sceneIds:["scn_166","scn_167","scn_16a","scn_16d","scn_171","scn_177","scn_17d","scn_180","scn_182"],defaultSceneId:"scn_166",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_188",name:"针骨",aliases:["Needle's Bones"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_188"],defaultSceneId:"scn_188",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_18b",name:"恩西荒原",aliases:["Nsi Wastes"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_18b"],defaultSceneId:"scn_18b",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_18d",name:"奥罗伦加",aliases:["Orolunga"],chapterId:"09c",connections:[{toLocationId:"loc_163",kind:"passage"},{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_15a",kind:"passage"}],sceneIds:["scn_18d"],defaultSceneId:"scn_18d",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_195",name:"卡斯蒂利亚港",aliases:["Port Castigliar"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_195"],defaultSceneId:"scn_195",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_197",name:"避难湾",aliases:["Refuge Bay"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_197"],defaultSceneId:"scn_197",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_198",name:"奥伦河",aliases:["River Olung"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_198"],defaultSceneId:"scn_198",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_199",name:"索申斯塔河",aliases:["River Soshenstar"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_199"],defaultSceneId:"scn_199",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_19a",name:"塔斯河",aliases:["River Tath"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_19a"],defaultSceneId:"scn_19a",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_19b",name:"提尔基河",aliases:["River Tiryki"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_19b"],defaultSceneId:"scn_19b",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_19c",name:"希尔库",aliases:["Shilku"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_19c"],defaultSceneId:"scn_19c",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_19d",name:"希尔库湾",aliases:["Shilku Bay"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_19d"],defaultSceneId:"scn_19d",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_19e",name:"咬合龟湾",aliases:["Snapping Turtle Bay"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_19e"],defaultSceneId:"scn_19e",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1a1",name:"奥姆加的鼻子",aliases:["Snout of Omgar"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_1a1"],defaultSceneId:"scn_1a1",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1a3",name:"恐惧之谷",aliases:["Valley of Dread"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_1a3"],defaultSceneId:"scn_1a3",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1a4",name:"余烬谷",aliases:["Valley of Embers"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_1a4"],defaultSceneId:"scn_1a4",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1a5",name:"失落荣誉谷",aliases:["Valley of Lost Honor"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_1a5"],defaultSceneId:"scn_1a5",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1a6",name:"沃恩",aliases:["Vorn"],chapterId:"09c",connections:[{toLocationId:"loc_1ce",kind:"passage"},{toLocationId:"loc_02e",kind:"passage"},{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_1a6"],defaultSceneId:"scn_1a6",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1a8",name:"独角鲸号残骸",aliases:["Wreck of the Narwhal"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"}],sceneIds:["scn_1a8"],defaultSceneId:"scn_1a8",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1aa",name:"星辰女神号的残骸",aliases:["Wreck of the Star Goddess"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_116",kind:"passage"},{toLocationId:"loc_15a",kind:"passage"},{toLocationId:"loc_298",kind:"passage"}],sceneIds:["scn_1aa"],defaultSceneId:"scn_1aa",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1af",name:"龙心矿井",aliases:["Wyrmheart Mine"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_0b4",kind:"passage"},{toLocationId:"loc_116",kind:"passage"},{toLocationId:"loc_158",kind:"passage"}],sceneIds:["scn_1af","scn_1b0","scn_1b2","scn_1b4","scn_1b6","scn_1b7","scn_1b9","scn_1ba","scn_1bc","scn_1bd","scn_1bf","scn_1c2","scn_1c3","scn_1c5","scn_1c7","scn_1ca","scn_1cc"],defaultSceneId:"scn_1af",_meta:{sourcePages:[85],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1ce",name:"叶利亚克",aliases:["Yellyark"],chapterId:"09c",connections:[{toLocationId:"loc_09c",kind:"road"},{toLocationId:"loc_1a6",kind:"passage"}],sceneIds:["scn_1ce","scn_1cf","scn_1d0","scn_1d1","scn_1d3","scn_1d4","scn_1d5"],defaultSceneId:"scn_1ce",_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1d6",name:"禁城居民",aliases:["Dwellers of the Forbidden City"],chapterId:"1d6",connections:[{toLocationId:"loc_261",kind:"passage"},{toLocationId:"loc_1fa",kind:"passage"},{toLocationId:"loc_115",kind:"passage"},{toLocationId:"loc_280",kind:"passage"},{toLocationId:"loc_298",kind:"passage"},{toLocationId:"loc_277",kind:"passage"},{toLocationId:"loc_201",kind:"passage"},{toLocationId:"loc_23c",kind:"passage"},{toLocationId:"loc_22c",kind:"passage"},{toLocationId:"loc_52f",kind:"road"},{toLocationId:"loc_21d",kind:"road"},{toLocationId:"loc_09c",kind:"passage"}],sceneIds:["scn_1d6"],defaultSceneId:"scn_1d6",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}},{id:"loc_52f",name:"奥姆",aliases:["Omu"],chapterId:"1d6",connections:[{toLocationId:"loc_1d6",kind:"road"}],sceneIds:["scn_52f"],defaultSceneId:"scn_52f",_meta:{sourcePages:[190],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1fa",name:"城市中的地点",aliases:["Locations in the City"],chapterId:"1d6",connections:[{toLocationId:"loc_1d6",kind:"passage"}],sceneIds:["scn_1fa","scn_1fb"],defaultSceneId:"scn_1fa",_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_201",name:"围墙大院",aliases:["2. Walled Compound"],chapterId:"1d6",connections:[{toLocationId:"loc_277",kind:"passage"},{toLocationId:"loc_1d6",kind:"passage"},{toLocationId:"loc_21d",kind:"passage"}],sceneIds:["scn_201","scn_206","scn_208","scn_20a","scn_20b","scn_210","scn_212","scn_213","scn_218","scn_219","scn_21a"],defaultSceneId:"scn_201",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_21d",name:"摩亚的神殿",aliases:["6. Moa's Shrine"],chapterId:"1d6",connections:[{toLocationId:"loc_201",kind:"passage"},{toLocationId:"loc_1d6",kind:"road"}],sceneIds:["scn_21d","scn_21f","scn_221","scn_224","scn_227","scn_229"],defaultSceneId:"scn_21d",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_22c",name:"倒下的树",aliases:["7. Fallen Tree"],chapterId:"1d6",connections:[{toLocationId:"loc_41d",kind:"passage"},{toLocationId:"loc_1d6",kind:"passage"}],sceneIds:["scn_22c","scn_232","scn_234","scn_235","scn_237"],defaultSceneId:"scn_22c",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_23c",name:"冒险者营地",aliases:["9. Adventurers' Camp"],chapterId:"1d6",connections:[{toLocationId:"loc_305",kind:"passage"},{toLocationId:"loc_1d6",kind:"passage"}],sceneIds:["scn_23c","scn_23f","scn_241","scn_243","scn_247","scn_248","scn_24a","scn_24e","scn_252","scn_253","scn_257","scn_259"],defaultSceneId:"scn_23c",_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_261",name:"九神之墓",aliases:["14. Tomb of the Nine Gods"],chapterId:"1d6",connections:[{toLocationId:"loc_305",kind:"passage"},{toLocationId:"loc_37a",kind:"passage"},{toLocationId:"loc_1d6",kind:"passage"}],sceneIds:["scn_261","scn_262","scn_268","scn_26a","scn_26b","scn_26d","scn_272","scn_274"],defaultSceneId:"scn_261",_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_277",name:"娜浪的神殿",aliases:["18. Nangnang's Shrine"],chapterId:"1d6",connections:[{toLocationId:"loc_1d6",kind:"passage"},{toLocationId:"loc_201",kind:"passage"}],sceneIds:["scn_277","scn_279","scn_27b","scn_27e"],defaultSceneId:"scn_277",_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_280",name:"奥博娜卡的神殿",aliases:["19. Obo'laka's Shrine"],chapterId:"1d6",connections:[{toLocationId:"loc_298",kind:"passage"},{toLocationId:"loc_1d6",kind:"passage"}],sceneIds:["scn_280","scn_282","scn_283","scn_286","scn_288","scn_28b","scn_290","scn_292","scn_294","scn_296"],defaultSceneId:"scn_280",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_298",name:"夜蛇圣所",aliases:["Fane of the Night Serpent"],chapterId:"298",connections:[{toLocationId:"loc_1aa",kind:"passage"},{toLocationId:"loc_305",kind:"road"},{toLocationId:"loc_1d6",kind:"passage"},{toLocationId:"loc_280",kind:"passage"}],sceneIds:["scn_298","scn_299","scn_29d","scn_2a5","scn_2ad","scn_2b1","scn_2b5","scn_2b7","scn_2ba","scn_2be","scn_2c2","scn_2c6","scn_2ca","scn_2d5","scn_2da","scn_2e1","scn_2e7","scn_2eb","scn_2ef","scn_2f1","scn_2f3","scn_2f5","scn_2f7","scn_2fb","scn_2ff","scn_301","scn_303"],defaultSceneId:"scn_299",_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}},{id:"loc_305",name:"九神之墓",aliases:["Tomb of the Nine Gods"],chapterId:"305",connections:[{toLocationId:"loc_37a",kind:"passage"},{toLocationId:"loc_3b0",kind:"passage"},{toLocationId:"loc_480",kind:"passage"},{toLocationId:"loc_4d7",kind:"passage"},{toLocationId:"loc_41d",kind:"passage"},{toLocationId:"loc_13f",kind:"passage"},{toLocationId:"loc_23c",kind:"passage"},{toLocationId:"loc_261",kind:"passage"},{toLocationId:"loc_298",kind:"road"},{toLocationId:"loc_326",kind:"passage"}],sceneIds:["scn_305","scn_306","scn_309","scn_321"],defaultSceneId:"scn_306",_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}},{id:"loc_326",name:"第一层：腐烂大厅",aliases:["Level 1: Rotten Halls"],chapterId:"305",connections:[{toLocationId:"loc_4d7",kind:"passage"},{toLocationId:"loc_37a",kind:"passage"},{toLocationId:"loc_3b0",kind:"passage"},{toLocationId:"loc_41d",kind:"passage"},{toLocationId:"loc_305",kind:"passage"},{toLocationId:"loc_480",kind:"passage"}],sceneIds:["scn_326","scn_32a","scn_32f","scn_332","scn_334","scn_336","scn_339","scn_33d","scn_33f","scn_340","scn_341","scn_343","scn_345","scn_347","scn_349","scn_34b","scn_34d","scn_34f","scn_351","scn_356","scn_35e","scn_35f","scn_362","scn_364","scn_36d","scn_36f","scn_377"],defaultSceneId:"scn_32a",_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}},{id:"loc_37a",name:"第二层：欺骗之迷宫",aliases:["Level 2: Dungeon of Deception"],chapterId:"305",connections:[{toLocationId:"loc_3b0",kind:"passage"},{toLocationId:"loc_41d",kind:"passage"},{toLocationId:"loc_261",kind:"passage"},{toLocationId:"loc_305",kind:"passage"},{toLocationId:"loc_326",kind:"passage"},{toLocationId:"loc_480",kind:"passage"},{toLocationId:"loc_4d7",kind:"passage"}],sceneIds:["scn_37a","scn_37b","scn_37d","scn_383","scn_388","scn_38a","scn_393","scn_398","scn_39f","scn_3a3","scn_3a5","scn_3aa"],defaultSceneId:"scn_37b",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}},{id:"loc_3b0",name:"第三层：反思之库",aliases:["Level 3: Vault of Reflection"],chapterId:"305",connections:[{toLocationId:"loc_305",kind:"passage"},{toLocationId:"loc_326",kind:"passage"},{toLocationId:"loc_37a",kind:"passage"},{toLocationId:"loc_4d7",kind:"passage"}],sceneIds:["scn_3b0","scn_3b3","scn_3b8","scn_3ba","scn_3bf","scn_3c1","scn_3c2","scn_3c9","scn_3ce","scn_3d0","scn_3d1","scn_3d3","scn_3dd","scn_3de","scn_3e6","scn_3e7","scn_3eb","scn_3ed","scn_3f0","scn_3f7","scn_3f9","scn_3fc","scn_40d","scn_414","scn_415","scn_417"],defaultSceneId:"scn_3b3",_meta:{sourcePages:[146],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}},{id:"loc_41d",name:"第四层：恐怖之室",aliases:["Level 4: Chambers of Horror"],chapterId:"305",connections:[{toLocationId:"loc_480",kind:"passage"},{toLocationId:"loc_22c",kind:"passage"},{toLocationId:"loc_305",kind:"passage"},{toLocationId:"loc_326",kind:"passage"},{toLocationId:"loc_37a",kind:"passage"},{toLocationId:"loc_4d7",kind:"passage"}],sceneIds:["scn_41d","scn_41e","scn_423","scn_425","scn_426","scn_42b","scn_42f","scn_434","scn_438","scn_442","scn_443","scn_447","scn_449","scn_44c","scn_450","scn_452","scn_459","scn_460","scn_462","scn_463","scn_464","scn_465","scn_478","scn_47d"],defaultSceneId:"scn_41e",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}},{id:"loc_480",name:"第五层：仇恨之齿轮",aliases:["Level 5: Gears of Hate"],chapterId:"305",connections:[{toLocationId:"loc_37a",kind:"passage"},{toLocationId:"loc_13f",kind:"passage"},{toLocationId:"loc_4d7",kind:"passage"},{toLocationId:"loc_305",kind:"passage"},{toLocationId:"loc_326",kind:"passage"},{toLocationId:"loc_41d",kind:"passage"}],sceneIds:["scn_480","scn_484","scn_486","scn_488","scn_494","scn_49f","scn_4a0","scn_4a2","scn_4a6","scn_4a8","scn_4ac","scn_4af","scn_4b1","scn_4b4","scn_4bd","scn_4c6","scn_4c9","scn_4cf"],defaultSceneId:"scn_484",_meta:{sourcePages:[168],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}},{id:"loc_4d7",name:"第六层：死亡之神的摇篮",aliases:["Level 6: Cradle of the Death God"],chapterId:"305",connections:[{toLocationId:"loc_0cd",kind:"passage"},{toLocationId:"loc_41d",kind:"passage"},{toLocationId:"loc_37a",kind:"passage"},{toLocationId:"loc_3b0",kind:"passage"},{toLocationId:"loc_305",kind:"passage"},{toLocationId:"loc_326",kind:"passage"},{toLocationId:"loc_480",kind:"passage"}],sceneIds:["scn_4d7","scn_4d8","scn_4e6","scn_4e8","scn_4eb","scn_4f0","scn_4f5","scn_4fa","scn_50d","scn_512","scn_51c","scn_520","scn_524"],defaultSceneId:"scn_4d8",_meta:{sourcePages:[178],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:defaultSceneId；配置列入逐地点来源复核清单"}}],t=[{id:"scn_02e",locationId:"loc_02e",name:"南扎路港",activation:{condition:{type:"always"},priority:0},skeleton:["南扎路港依偎在Chult湾的南端海岸线上。","在Chult，除了南扎路港之外，没有其他城市，无论是沿海还是其他地方，除了废墟或被怪物占据的地方。","直到最近，南扎路港一直受到外国阿曼（Amn）的严格控制。","九年前，阿曼被迫将这座城市交给一个富有且强大的Chultan商人联盟，这个联盟得到了Ytepka协会（发音为yeh-TEP-kah）的支持，否则可能会发生一场血腥冲突，最终这座城市无论如何都会赢得独立。","自那以后，七位Chultan商人已经成长为有影响力的商人王子，他们用他们的商品吸引来自剑海岸上下的人们。"],flesh:`南扎路港依偎在Chult湾的南端海岸线上。在Chult，除了南扎路港之外，没有其他城市，无论是沿海还是其他地方，除了废墟或被怪物占据的地方。直到最近，南扎路港一直受到外国阿曼（Amn）的严格控制。九年前，阿曼被迫将这座城市交给一个富有且强大的Chultan商人联盟，这个联盟得到了Ytepka协会（发音为yeh-TEP-kah）的支持，否则可能会发生一场血腥冲突，最终这座城市无论如何都会赢得独立。自那以后，七位Chultan商人已经成长为有影响力的商人王子，他们用他们的商品吸引来自剑海岸上下的人们。

南扎路港是这个恐怖之地中的文明和商业堡垒。在这里进行的商业活动和通过其会计所流动的现金会让博德之门或深水城的任何商人都感到嫉妒。它本身也是一个色彩缤纷、音乐四溢、香气扑鼻、充满活力的城市。除了贸易，最大的吸引力是每周在街道上举行的恐龙赛跑。当地人和游客都在比赛结果上下了巨额赌注。这座城市还拥有宏伟的集市、辉煌的豪宅和寺庙、马戏团和角斗士比赛。

敌人从四面八方包围着南扎路港。丛林中充满了凶猛的爬行动物和杀人的不死生物，海盗在周围海域徘徊，而海湾的入口则是一只贪婪的龙龟的家园。

询问当地居民的角色可以了解到一些可能帮助他们在楚尔特生存下来的谣言。角色们可以在离开城市前确保装备和向导。辛德拉·席尔瓦因太虚弱了，无法陪同他们或提供任何额外的支持。

如果你在一个自制的D&D设定中进行这场冒险，你可以将南扎路港放置在你认为合适的地方，甚至可以更改它的名字。如果你使用另一个已发布的D&D设定，你可以完全不用南扎路港，而使用一个不同的沿海城市作为队伍丛林探险的起点。其他设定中的例子包括位于奥斯的阿米迪奥丛林边缘的萨瑟林城，靠近密斯塔拉的野蛮海岸的斯拉戈维奇城，以及艾伯伦的仙德瑞克大陆上的风暴之港城。

如图1.1所示，南扎路港是一个城墙内的城墙之城。日益增长的财富驱使这座城市最富有的居民提高防御措施，以抵御丛林的危险，也可能抵御他们从城市较贫穷区域感知到的危险，这些区域都位于主墙之外。这些城墙是由巨大的、精心拼接的石头构成的令人印象深刻的屏障。像南扎路港的其他建筑一样，它们装饰着几何图案、动物和神话人物的彩色绘画。

这座城市由四座陡峭的山丘定义。最西边的山丘被称为神殿山，因为它是Savras神庙的所在地，完全被从低地隔离开来。一座宽阔的石桥横跨拱形柱子，从神殿山通向宝座山，即金御座所在地。第二座桥连接宝座山到南部山坡，那里有几座商人王子的别墅。在港口东侧，金厅在城市最高的山丘，西巴斯山上闪闪发光，通过桥梁与邻近的Yklwazi Hill（发音为yick-ul-WAH-zee），即大竞技场所在地相连。陡峭的台阶街道和梯田围绕着每座山丘。

主城墙外有三个贫民区：西南边的旧城区，那里的许多建筑是较旧的金字塔式构造的遗迹；南边的马拉喉咙区（Malar's Throat），那里的建筑紧贴着由绳桥连接的郁郁葱葱的峡谷墙壁；以及东南边的提尔基锚地（Tiryki Anchorage），那里是探险者和河岸居民聚集的地方。

城市大约一半的人口挤在城墙外生活，他们总是暴露在肉食动物或不死生物的突然袭击之下。一支志愿者市民旅团负责监视逼近的危险。当外城区的居民听到警告号角的长鸣，无论是白天还是夜晚，他们会争先恐后地寻找市场区和商人区的安全，直到解除警报的声音响起。

三座古老、藤蔓覆盖的塔楼高耸在这个破败的区域之上。整个区域是古老和破败（但仍然有人居住）的石头建筑与简陋的新茅屋和长屋的并置，这些新建筑是用竹子和茅草搭建的。

旧城区由"乞丐王子"管理，这是对城市正式商人王子的讽刺性模仿。他们没有官方权威，但每个人都掌握着债务、人情、罪证信息和忠诚的肌肉力量的网络，使他们能够以一种效率完成事情，有时连商人王子都会羡慕。与商人王子不同，后者的地位是基于财富，这些财富在同一家族中代代相传，乞丐王子的身份甚至数量则不断变化。

旧城区有些破败，但它不是贫民窟，也不是小偷的藏身之地。大多数居民是低收入的劳动者或挣扎中的工匠，他们负担不起城墙内住宅的更高租金。

城市的西半部被称为商人区，因为它是大集市的所在地，也因为许多商人贵族的别墅都在那里。总的来说，这是城市的上层阶级区域。实际上，城市的大多数商人和小贩居住和工作在市场区。

南扎路港的港口可以容纳各种大小的船只。港口封闭的东部区域是为商人王子们保留使用的，但其余的码头可供任何船只使用。

这是一艘为速度而建造的60尺单桅帆船，有一个方主帆加上两个三角前帆，一个后帆和一个小顶帆。所有这些帆布在理想条件下能让她达到10英里/小时的最高速度。

铜皮天马由鸥尔忒梅·斯威夫特·达克（CG女性岩石侏儒匪帮队长，拥有达到60尺范围的黑暗视觉）指挥，她既聪明又冷静。大副是格里格·鲁德尔（N男性伊鲁斯坎人类老兵），一个高大的男人，他的脸几乎被灰色条纹的浓密胡须遮住。除了向船员喊命令和与奥蒂梅船长低声交谈外，鲁德尔几乎不说话。其余的船员由六名水手（N男性和女性不同种族的匪徒们）组成。

角色们可能会认为Ortimai的主要业务是走私——他们是对的。然而，她很乐意带冒险家去他们需要去的任何地方。她知道楚尔特湾有一只龙龟，并期望角色们提供必要的贡品。她也知道海盗在楚尔特周围的水域徘徊，尽管她的船很容易就能甩掉他们。

在铜皮天马的主甲板上没有永久性的遮蔽所或小屋。可以拉起一张防水帆布横跨船尾部分，以遮挡热带阳光。天气允许时，水手们在甲板上睡觉。下层甲板设有Ortimay船长的船舱和货舱，恶劣天气时，货舱也充当船员的烹饪、用餐和睡觉区域。

市场区是南扎路港大多数普通商店的所在地，也是其商人、贸易者和其他中产阶级居民生活和工作的地方。

这片城墙外的区域是南扎路港的贫民窟。两个陡峭、丛林覆盖的山脊夹着一个深邃的峡谷。破旧的建筑物紧贴在山脊的两侧，每个结构似乎都建在下面一个建筑物的屋顶上。在大雨期间，径流沿着峡谷倾泻而下，穿过乌博涛之颚（面向马拉之喉的城市墙上的大型城门），沿着铺砌的街道流向港口，经常会冲走无人看管的篮子、死动物，甚至笨拙或不幸的楚尔特人。

绳索和竹制的足桥悬挂在峡谷上方。有些桥长达200尺甚至更长，它们在地面上方100尺处摇摆，令胆小的人感到恐惧。有技巧的小偷被知道会从桥上放下细线上的钩子，直接从受害者的腰带上"钓鱼"般地取走钱包。

城市东侧的这个区域居住着动物训练师、河流居民、需要廉价住宿的探险家以及其他粗犷不羁的人。尽管码头工人和兽力起重机较少，无法协助装卸货物，但走私者更喜欢这个不受监管的锚地码头，而不是受到警察检查和审查的港口码头。

与马拉喉咙区（Malar's Throat）和旧城区不同，提尔基锚地（Tiryki Anchorage）没有设防的庙宇或古老的石制金字形神塔，居民们无法在其中躲避不死生物或食肉动物。当警报响起时，大多数人会冲向提尔基门（Tiryki Gate），希望在它被锁上之前通过。幸运的是，围栏里的动物对接近的敌人比人类更敏感，所以很少有生物能够未被发现地潜入该区域。`,spotlightRefs:[],presentNpcIds:["npc_syndra_silvane","npc_ortimay_swift_and_dark","npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[15],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`【解决问题】南扎路港有足够多的活动，你不需要依赖随机遭遇来保持事情的趣味性。话虽如此，如果玩家们显得焦躁不安，可以使用《附录 B》中的随机遭遇来为他们收集探险物资时增添一些趣味。任何时候，队伍可能会遇到沃洛桑普·盖德姆（见"城市居民"）。沃洛对南扎路港的熟悉使他成为有用信息的源泉。如果队伍还没有野外向导，他建议角色们在进入丛林前确保有一个。沃洛也可能建议角色们参加恐龙赛跑（见"要做的事情"）。
如果角色们拜访瓦康嘎·欧塔姆，他会将自己拥有的法师日志交给他们。如果队伍在遇到瓦康嘎时还没有找到向导，他建议角色们通过乔巴来安排一个。Volo可以协助介绍。有关向导及其费率的更多信息，请参见"寻找向导"。
如果角色们希望乘船旅行，他们可以预订铜皮天马，每天的费用为10金币（整队）。`,mapGeometry:{imageRef:"adventure/ToA/004-0201.webp"}},{id:"scn_02f",locationId:"loc_02e",name:"抵达",activation:{condition:{type:"always"},priority:0},skeleton:["辛德拉·席尔瓦因 将自己和角色们传送到南扎路港的海港区，离港务长办公室（区域13）不远。","你出现在一个热带城市中，阳光炙烤着大地。","熟悉的港口声音——绳索的吱吱声、拍打的海浪声、沉重的木桶在鹅卵石上滚动的声音——与用一种不熟悉的语言喊叫和咒骂的声音交织在一起，这种语言充满了咔哒声、吸气声和歌唱般的词汇，听起来几乎是音乐般的。","不熟悉的香料和热带水果的香气与码头上的鱼、焦油和帆布的气味混合在一起。","除此之外，南扎路港是一片色彩的盛宴。"],flesh:`辛德拉·席尔瓦因 将自己和角色们传送到南扎路港的海港区，离港务长办公室（区域13）不远。阅读：

辛德拉建议角色们在雷霆蜥蜴（如果他们想要一个喧闹的时光）或卡娅的休息之家（如果他们想要一个良好的夜间睡眠）为自己安排房间。两家旅馆都位于红集市附近（区域18）。与此同时，辛德拉前往商人王子瓦康嘎·欧塔姆的别墅。她打算在那里度过冒险的剩余时间。

在描述南扎路港的景象和声音时，要强调热度、湿度、异国情调的声音和气味，以及其他南扎路港的独特方面。以下是它的一些显著特点：

中型和大型恐龙被用作驮兽来拉两轮车，用起重机吊起重物，以及在运河中拖船。

恐龙在街道上进行每周的比赛。这些颜色鲜艳的赛跑恐龙速度快、凶猛，几乎不受骑手控制。

花朵、绿色植物和藤蔓到处生长，看起来就像是从建筑石块本身生长出来的。这些茂盛的绿色植物需要不断的照料，以防止根部和嫩芽破坏建筑物或瓦屋顶。

这座城市的防御墙和塔楼顶部装有色彩鲜艳的遮阳篷，用以保护守卫免受阳光和雨水的侵袭。

城墙内的所有街道都铺有鹅卵石或石板，并且它们有深达2尺的雨水沟。南扎路港的居民除了最猛烈的暴雨之外，几乎不会注意其他任何情况。

斑猫诗人在街道上游荡，为任何向他们投掷几枚硬币的人表演。

城墙将城市划分成不同的区域，街道上方的开放式拱门上绘有恐龙、山脉和神话英雄的壁画。

覆盖着藤蔓和苔藓的破败古建筑表明这座城市有着悠久的历史。

大多数建筑的底层由灰泥覆盖的石头建成，并且有很小的窗户以保持街道层的凉爽。上层则有竹制或茅草墙，配有巨大的窗户以让微风进入，在宽阔的茅草或瓦片屋檐下。所有建筑物都装饰着油漆、常春藤和鲜艳的花朵。有些建筑以直线和尖锐角度的对称几何图案进行绘画，而其他建筑则以楚尔特特有的风格化方式描绘动物、怪物、风景和英雄。在空间允许的情况下，建筑物传统上包括一个有围墙的庭院或花园。

这座城市的所有水源都来自雨水，因此每个建筑都有水箱或木桶来收集屋顶流下的水。每个公共广场都是围绕喷泉或雨水盆地建造的。由于有大量的水流下山，Chultans也非常好地利用了水力机械装置。许多建筑的水箱内都建有水轮。雨水通过喷口或渠道流过，转动轮子，将水抽入水池，转动磨石，驱动风箱或车床或锯床，或完成任何Chultan工程师能想到的节省劳力或有趣的任务。`,spotlightRefs:[],presentNpcIds:["npc_syndra_silvane","npc_wakanga_o_tamu","npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:["info_toa_death_curse"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[16],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`你出现在一个热带城市中，阳光炙烤着大地。熟悉的港口声音——绳索的吱吱声、拍打的海浪声、沉重的木桶在鹅卵石上滚动的声音——与用一种不熟悉的语言喊叫和咒骂的声音交织在一起，这种语言充满了咔哒声、吸气声和歌唱般的词汇，听起来几乎是音乐般的。不熟悉的香料和热带水果的香气与码头上的鱼、焦油和帆布的气味混合在一起。
除此之外，南扎路港是一片色彩的盛宴。建筑物被漆成鲜艳的蓝色、绿色、橙色和鲑鱼粉红色，或者墙壁上装饰着描绘巨型爬行动物和神话英雄的壁画。每栋建筑都挂着装满五颜六色花朵的篮子和陶罐，或者被覆盖着叶子茂盛、开满花朵的藤蔓。穿着鲜艳服装、装饰着羽毛和贝壳的吟游诗人在街角表演。多彩的旗帜和遮阳篷在城墙上飘扬。一群戴着羽毛帽子和披风的孩子们从你身边跑过，他们尖叫着，因为一个装扮成大牙蜥蜴的街头表演者在他们后面踩踏和吼叫，感到既兴奋又害怕。整个城市似乎都在忙碌、流汗、欢笑、咒骂和歌唱。`,dmGuidance:'如果角色们表示有兴趣陪同她，她非常乐意将他们介绍给瓦康加（见"商人王子"）。',offerableQuestIds:["qst_main_toa"]},{id:"scn_031",locationId:"loc_02e",name:"支线任务",activation:{condition:{type:"always"},priority:0},skeleton:["鉴于他们任务的紧迫性，角色们可能不愿意承担支线任务。","他们没有义务完成它们；","然而，完成支线任务可以带来意想不到的奖励和发现。","您可以随意介绍这些支线任务中的多少个。","触发它们的NPC可以在城市的任何地方遇到。"],flesh:`鉴于他们任务的紧迫性，角色们可能不愿意承担支线任务。他们没有义务完成它们；然而，完成支线任务可以带来意想不到的奖励和发现。

您可以随意介绍这些支线任务中的多少个。触发它们的NPC可以在城市的任何地方遇到。如果您无法决定选择哪个支线任务，请掷一个d10。

卡'拉胡（中立 女性 楚尔特人 人类 暴徒），一位在处刑者之径（见区域2）收受赌注的庄家，邀请冒险者随她一同去收债。报酬是收回500金币债务中的10%。这笔债的欠款者是一个叫塔班（中立 男性 楚尔特人 人类 角斗士）的男人。塔班在被击倒至20点或更少生命值前拒绝支付任何款项，之后他会交出一个装有十颗50金币宝石的袋子。因失败感到羞愧并渴望挽回颜面，塔班提出作为追随者加入队伍，在冒险期间不要求任何报酬。

罗卡（中立男性 楚尔特人 人类 间谍）为散塔林会工作。散提尔人相信海盗已与焰拳结盟。罗卡奉命潜入贝路利安堡寻找证据，以便散塔林会能要挟要塞指挥官。他请求冒险者护送他安全抵达要塞并制造骚乱，以便他能洗劫指挥官的住所。作为回报，罗卡愿意承担探索许可证的费用（50金币）——如果角色们想避免未来与焰拳的冲突，这几乎是必需品。罗卡还承诺将角色们引荐给两位荒野向导——名为河雾和酒瓶的斑猫人兄妹（参见"寻找向导"）——并支付向导费用。

银牙·安德里尔（守序善良 女性半兽人 祭司，信仰托姆，拥有黑暗视觉，范围60尺）是铁手套骑士团的代表，新近抵达南扎路港。她需要将自己和上级的一包急件送达复仇营地的指挥官奈尔斯·断骨处。安德里尔原以为可以在城里买匹马骑行至营地，但目睹地形和现状后，显然无法实现。她希望能加入任何沿索申斯塔河上游的远征队。安德里尔十分珍爱她的链甲衫，但若有人提出卸甲的好理由，她也会通情达理。

伊奈特（守序善良女性楚尔特人类，萨弗拉斯的侍僧）一直受到关于红袍法师在阿尔达尼盆地某处运作秘密基地的困扰幻象。她所在神殿的首领泽腾贝爷爷虽然事务繁忙，但已准许她展开调查。她会自备食物补给，并"捐赠"100金币作为探险经费。她坚持要先去萨弗拉斯神殿取行李，并极力劝说角色们同行。若应允，角色们将见到泽腾贝爷爷（参见区域7）。

一位名叫藏妲拉（见附录D）的半精灵接近玩家们，声称自己是阿图斯·辛贝尔的女儿。她假装担忧地请求玩家们帮助寻找父亲。阿图斯无法通过魔法被找到，但藏妲拉听说阿图斯与一名沉默寡言、气味古怪的爬行类男子一同离开了城市。最后有人看见他们前往丛林深处。藏妲拉真正想要的是阿图斯持有的凛冬戒指，但她并未向玩家们透露这点。夏日智者——藏妲拉的伪龙宠物认为寻找戒指的冒险过于危险，但已放弃劝说主人。善良阵营的玩家或许能让夏日智者背叛藏妲拉，或至少从其口中获取信息，用以挫败藏妲拉的计划或帮助阿图斯。

奥马拉（N男性楚尔坦人类平民）是染坊（区域23）的调色大师。他最近在黑市购买了一些跳舞猴果并用于制作和销售染料。不久后，他收到了来自耶特普卡协会的铁令牌——一个严厉的警告。他希望赎罪，并寻求控制水果合法销售的商人王子克薇欧泽的接见。由于担心生命安全，奥马拉请求冒险者陪同他前往黄金王座（参见区域4），他计划在那里乞求克薇欧泽的宽恕。他没钱给角色们作为报酬。克薇欧泽愿意原谅奥马拉的判断失误，前提是角色们同意在10天内杀死一个名叫鲨狗的人——不问任何问题——并且不向任何人提及此事。克薇欧泽告诉他们，鲨狗在贝路利安堡外担任向导。

莱雷克·达什林德（守序中立 男性 伊路斯坎人 间谍），领主联盟的特工，提出用一艘帆船交换一张精确的楚尔特地图，地图需标明珠冠城和奥罗隆加废墟的确切位置。莱雷克代表富有的深水城利益集团，这个提议是真实的。一旦他确信地图是真的，莱雷克会安排承诺的船只在10天后抵达。

港务长金达尔（参见区域13与附录D）是耶泰普卡协会的秘密成员。他知道有三名海盗船长正在袭击往返于琼达尔湾的商船。这些海盗船分别名为龙牙、翡翠之眼和蚊蝠。金达尔已获得商王们的授权，可为每艘被俘获并带入港口的海盗船提供2,000金币的赏金，每抓获一名海盗船长额外奖励500金币。

贝利姆（守序善良男性楚尔特人平民）因他的丈夫德拉扎（守序善良男性楚尔特人平民）因盗窃罪被判参加'刽子手逃亡'而心烦意乱。贝利姆坚称他的丈夫是被误认的受害者，且未经正当听证或审判就被判刑。他无法说服任何当权者相信德拉扎是无辜的。德拉扎即将被投入斗兽坑与一对迅猛龙搏斗，因此角色们必须迅速行动。当局和赌徒们对干预行为都持否定态度。

埃谢克（NG男性楚尔坦人类，萨弗拉斯的侍僧）在街上跌跌撞撞地走向角色们，低声说道："去和奥罗伦加的智者守护者谈谈，她在姆巴拉以东。她能指引你们找到所寻之物。"随后他便昏迷倒地。片刻后醒来时，埃谢克对过去12小时的记忆一片空白，只记得一股强烈的冲动要寻找符合角色们特征的人。他对刚刚发生的事和角色们一样困惑，但会尽力协助他们。至少通过与去过复仇营地的脚夫交谈，他知道姆巴拉的位置。`,spotlightRefs:[],presentNpcIds:["npc_river_mist","npc_flask_of_wine","npc_niles_breakbone","npc_grandfather_zitembe","npc_xandala","npc_artus_cimber","npc_shago","npc_zindar","npc_ekene_afa","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_zhanthi"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[16],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`当角色们探索南扎路港时，他们可能会遇到需要帮助的NPC。
如果角色们赢得安德里尔的尊重，当与断骨指挥官发生冲突时（如第二章所述，这很可能发生），她将极力为他们斡旋。
如果角色们正前往或途经该区域，伊奈特希望为安全起见能随队同行。
如果角色们未能完成此任务，克薇欧泽将判处奥马拉因罪行而参加刽子手之跑（参见区域2）。
如果角色们提供了这样的地图，莱雷克会让一位牧师施放en=Augury来确认地图真伪，然后再同意购买。
如果角色们能从旁协助让德拉扎在逃亡中存活，他会给予25枚银币（他的全部积蓄）。`},{id:"scn_035",locationId:"loc_02e",name:"1. 乞丐宫殿",activation:{condition:{type:"always"},priority:0},skeleton:["乞丐宫殿是旧城区两座最大的金字形神塔。","竹制的商店和住宅杂乱无章地挤满了神塔的露台。","上层比接近街道的楼层更干净、不那么拥挤。","一座狭窄的木桥连接着上层，远离街道的拥挤和噪音。"],flesh:"乞丐宫殿是旧城区两座最大的金字形神塔。竹制的商店和住宅杂乱无章地挤满了神塔的露台。上层比接近街道的楼层更干净、不那么拥挤。一座狭窄的木桥连接着上层，远离街道的拥挤和噪音。",spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[18],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_036",locationId:"loc_02e",name:"2. 刽子手之路",activation:{condition:{type:"always"},priority:0},skeleton:["穿过旧城的道路围绕着一个长方形、石砌的坑道分叉开来，这个坑道深15尺，宽50尺，长200尺。","原来的安姆居民将其建造为一种极具竞争性的球类运动的竞技场，它至今仍为当地人提供廉价的娱乐。","迅猛龙（见附录D）、黑豹或其他饥饿的野兽（一只幼年异特龙allosaurus肯定能取悦观众）被放入坑中，然后被定罪的罪犯被扔进一端。","任何能够活着通过食肉动物的围攻到达坑道另一端的罪犯都可以爬上打结的绳索，赢得自由，同时获得人群的欢呼。","观众沿着墙壁观看这些壮观的场面——包括来自南扎路港社会各个层面的代表，不仅仅是旧城的居民。"],flesh:`穿过旧城的道路围绕着一个长方形、石砌的坑道分叉开来，这个坑道深15尺，宽50尺，长200尺。原来的安姆居民将其建造为一种极具竞争性的球类运动的竞技场，它至今仍为当地人提供廉价的娱乐。迅猛龙（见附录D）、黑豹或其他饥饿的野兽（一只幼年异特龙allosaurus肯定能取悦观众）被放入坑中，然后被定罪的罪犯被扔进一端。任何能够活着通过食肉动物的围攻到达坑道另一端的罪犯都可以爬上打结的绳索，赢得自由，同时获得人群的欢呼。观众沿着墙壁观看这些壮观的场面——包括来自南扎路港社会各个层面的代表，不仅仅是旧城的居民。人们下注哪些罪犯会生存下来，哪些会死去，跑步者在被野兽击倒之前能跑多远，以及每只动物将累积多少击杀。

一些库尔坦人因为多次穿越刽子手之路而幸存下来，成为了名人。有人建议说，有些人继续犯罪的唯一原因是因为被定罪是唯一能够被扔进坑里的方式，而且赌注总是最重的押在重复犯罪者身上。

偶尔有动物设法跳出或爬出坑，在惊恐的人群中横冲直撞。这种高度危险的时刻为旁观者提供了成为城市英雄并从商人贵族那里赢得好感的绝佳机会。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:["enc_036"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[18],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_037",locationId:"loc_02e",name:"3. 垃圾坑",activation:{condition:{type:"always"},priority:0},skeleton:["一个巨大的天坑被用作城市的垃圾场。","各种类型的废弃物都被扔到这里，甚至包括尸体。","这是一个垃圾、臭水和害虫滋生的溃烂疤痕。","老鼠、昆虫和乌鸦随处可见。","有时可以看到食尸鬼们在坑中徘徊，寻找新鲜的尸体。"],flesh:`一个巨大的天坑被用作城市的垃圾场。各种类型的废弃物都被扔到这里，甚至包括尸体。这是一个垃圾、臭水和害虫滋生的溃烂疤痕。老鼠、昆虫和乌鸦随处可见。有时可以看到食尸鬼们在坑中徘徊，寻找新鲜的尸体。

尽管坑中的垃圾量时多时少，但坑从未满过。这要归功于坑底居住的未知数量的食腐兽，它们每天在坑中饱食。它们乐于待在这个物产丰富的坑中，但如果有人不小心或不幸滑倒在油腻的边缘并掉进去，它们会迅速扑向他们。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:["enc_037"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[20],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_039",locationId:"loc_02e",name:"4. 金王座",activation:{condition:{type:"always"},priority:0},skeleton:["这座宫殿是南扎路港商界王子们的会面之地，被认为是城市松散政府的所在地。","它是几十年前由一位阿姆尼亚商人建造的，是城市中最豪华的建筑之一，仅次于更宏伟的神庙和商界王子们的别墅。","八名楚尔特角斗士荣誉卫队始终在岗，白天驱赶闲逛者，夜晚防范小偷。","金座是与任何商人王子会面而无需预约的最佳地点。","他们很少与未经宣布就出现在他们家中的访客见面。"],flesh:`这座宫殿是南扎路港商界王子们的会面之地，被认为是城市松散政府的所在地。它是几十年前由一位阿姆尼亚商人建造的，是城市中最豪华的建筑之一，仅次于更宏伟的神庙和商界王子们的别墅。八名楚尔特角斗士荣誉卫队始终在岗，白天驱赶闲逛者，夜晚防范小偷。

金座是与任何商人王子会面而无需预约的最佳地点。他们很少与未经宣布就出现在他们家中的访客见面。在白天，每个商人王子有六分之一的机会在金座，伴随着助手和守卫的随行。角色必须等待1d3小时才能被接见。实际上，商人王子在管理南扎路港的日常事务中几乎没有责任，所以除非正在举行讨论城市事务的会议，否则这种延迟只是一种强调谁是负责人的策略。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[20],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色有有趣的消息，他们很可能会获得接见，并被给予他们需要的商人的时间。"},{id:"scn_03a",locationId:"loc_02e",name:"5. 商业王子别墅",activation:{condition:{type:"always"},priority:0},skeleton:["每位商人王子在城市中都有一座私人别墅。","这些住宅拥有装饰精美的灰泥墙壁，墙壁上装饰着鲜艳的壁画，露台和拱廊上挂着鲜花，开放天空的花园庭院，以及装备有水轮的巨大水箱，用来驱动喷泉、风扇和动态雕塑。","除非玩家角色做了一些值得关注的事情（例如赢得恐龙赛跑、阻止一只暴走的食肉动物，或完成一次有重大发现的探险），否则商人王子们不太可能在他们不请自来时会见他们。","例外的是瓦康嘎·欧塔姆，他欢迎任何与辛德拉·席尔瓦因同行的冒险家。",'有关示例别墅的详细信息，请见"商业王子别墅。'],flesh:`每位商人王子在城市中都有一座私人别墅。这些住宅拥有装饰精美的灰泥墙壁，墙壁上装饰着鲜艳的壁画，露台和拱廊上挂着鲜花，开放天空的花园庭院，以及装备有水轮的巨大水箱，用来驱动喷泉、风扇和动态雕塑。

除非玩家角色做了一些值得关注的事情（例如赢得恐龙赛跑、阻止一只暴走的食肉动物，或完成一次有重大发现的探险），否则商人王子们不太可能在他们不请自来时会见他们。例外的是瓦康嘎·欧塔姆，他欢迎任何与辛德拉·席尔瓦因同行的冒险家。

有关示例别墅的详细信息，请见"商业王子别墅。"`,spotlightRefs:[],presentNpcIds:["npc_wakanga_o_tamu","npc_syndra_silvane","npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[20],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_03b",locationId:"loc_02e",name:"6. 大市集",activation:{condition:{type:"always"},priority:0},skeleton:["大集市，或者市场，是南扎路港三个跳动的心脏之一——其他两个是珠宝市场和红市集。","正如其名，大集市是三者中最宏伟的。","来自剑海岸上下的商人来到这个市场购买木材、香料、由丛林植物配制的药物、恐龙头骨和爪子、铁、老虎皮、雕刻的象牙、巴提里和格龙手工制品、彩色羽毛、热带水果、猴子、蛇颈龙肉以及Chult的所有其他财富。","商业活动在太阳升起之前就开始了，交易直到城市笼罩在黑暗中很久之后才会停止。","这是一个喧闹、拥挤、香气四溢的马戏团。"],flesh:`大集市，或者市场，是南扎路港三个跳动的心脏之一——其他两个是珠宝市场和红市集。正如其名，大集市是三者中最宏伟的。

来自剑海岸上下的商人来到这个市场购买木材、香料、由丛林植物配制的药物、恐龙头骨和爪子、铁、老虎皮、雕刻的象牙、巴提里和格龙手工制品、彩色羽毛、热带水果、猴子、蛇颈龙肉以及Chult的所有其他财富。商业活动在太阳升起之前就开始了，交易直到城市笼罩在黑暗中很久之后才会停止。这是一个喧闹、拥挤、香气四溢的马戏团。警卫数量众多，但比流浪儿和小偷偷要少。街头表演者和斑猫诗人增加了喧嚣。色彩缤纷的遮阳篷保护市场免受阳光和雨水的侵袭，但也困住了热量和气味。

在第五章中列出的所有物品都可以在大集市购买到。稀有物品可能无法直接获得（例如，在楚尔特找不到大象），但只要有合适的价格，总可以找到商人定制并运送货物。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[20],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_03c",locationId:"loc_02e",name:"7. 萨弗拉斯神庙",activation:{condition:{type:"always"},priority:0},skeleton:["萨弗拉斯是法师、占卜者、预言者以及那些无论听众是否愿意听都始终如一地说出真相的人的神祇。","他的象征是一个怪物的眼睛，或者是一个装满眼睛的水晶球。","萨弗拉斯的神庙是这座城市中最古老、最宏伟的建筑之一。","它巨大的穹顶上的瓦片屋顶看起来像一个不眨眼睛，凝视着天空。","一个致力于揭示真相的神祇在商人之城可能看起来吸引力不大，但在法术瘟疫之前，萨夫拉斯在楚尔特被广泛崇拜。"],flesh:`萨弗拉斯是法师、占卜者、预言者以及那些无论听众是否愿意听都始终如一地说出真相的人的神祇。他的象征是一个怪物的眼睛，或者是一个装满眼睛的水晶球。萨弗拉斯的神庙是这座城市中最古老、最宏伟的建筑之一。它巨大的穹顶上的瓦片屋顶看起来像一个不眨眼睛，凝视着天空。

一个致力于揭示真相的神祇在商人之城可能看起来吸引力不大，但在法术瘟疫之前，萨夫拉斯在楚尔特被广泛崇拜。在那些年代，萨夫拉斯的神职人员因为他们能够监视难以捉摸的元提人的活动而受到重视。蛇人族在楚尔特人的想象中仍然是可怕的存在，但现在萨夫拉斯的神职人员更多地关注更世俗的事务：围绕商业事务的征兆，新生儿的前景，以及感情事务。

寺庙的主持是泽腾贝爷爷（LG男性楚尔特人类祭司）。散塔林会成员来到寺庙，看泽腾贝是否能够施展法术帮助他们的搜索。尽管刺客们提出以一枚500金币的红宝石作为报酬，但泽腾贝察觉到他们的邪恶意图并将他们赶走。刺客们似乎不愿未得到满足就离开，但角色们及时的到来改变了他们的主意，他们带着怒容离开了。角色们及时的到来使泽腾贝倾向于帮助他们。

如果有人为了寻找灵能者的援助或建议而接近泽腾贝，他的第一反应是表示怀疑死亡诅咒与楚尔特有任何关系。这个仪式需要24小时，在这期间，泽腾贝看到了"一个位于南方遥远地带的丛林城市，被悬崖环绕，到处都是蛇"和"一个被藤蔓覆盖的黑色方尖碑"的幻象。他不敢再深入探究，但他敦促角色们去寻找这座城市和方尖碑。`,spotlightRefs:[],presentNpcIds:["npc_grandfather_zitembe","npc_artus_cimber","npc_ekene_afa","npc_flask_of_wine","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:["info_toa_omu_vision"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_toa_zitembe_vision"],tone:"tension",_meta:{sourcePages:[20],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`当角色们第一次见到这位牧师时，他正与三名散塔林会成员（NE男性特提里安人类刺客）进行激烈的对话，他们正在寻找阿图斯·辛贝尔。
如果角色们给出了有说服力的论点，或者至少向教堂捐赠25金币，泽腾贝同意"咨询向导"。`,offerableQuestIds:["qst_main_toa"]},{id:"scn_03d",locationId:"loc_02e",name:"8. 贡德神庙",activation:{condition:{type:"always"},priority:0},skeleton:["贡德（Gond）的方形石庙矗立在皇家码头后面。","它在南扎路港的众多工匠、手艺人、铁匠、象牙雕刻师和水利工程师中非常受欢迎。","与大多数这样的神庙以锻造中心为特色不同，这座神庙以一个巨大的喷泉为特色，其水柱不断地变化，创造出令人惊叹的形状。","这一切都是通过凸轮上移动的喷嘴和阀门完成的，由城市丰富的水压驱动。"],flesh:"贡德（Gond）的方形石庙矗立在皇家码头后面。它在南扎路港的众多工匠、手艺人、铁匠、象牙雕刻师和水利工程师中非常受欢迎。与大多数这样的神庙以锻造中心为特色不同，这座神庙以一个巨大的喷泉为特色，其水柱不断地变化，创造出令人惊叹的形状。这一切都是通过凸轮上移动的喷嘴和阀门完成的，由城市丰富的水压驱动。",spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[21],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_03e",locationId:"loc_02e",name:"9. 苏恩神庙",activation:{condition:{type:"always"},priority:0},skeleton:["孤立在海中的岩石上，苏妮的神庙只能通过从神庙山的高架堤道或乘船到达。","陡峭的台阶从神庙的小港口蜿蜒而上。","从远处看，神庙的屋顶似乎悬浮在空中——这是由镜子排列在外墙所创造的幻觉。","在里面，苏妮的信徒和偶然的访客都可以享受公共浴室，接受化妆和打理发型的课程，并学习如何穿着适合个人身体、职业和气候的方式。","新来神庙的人必须进行魅力检定。"],flesh:"孤立在海中的岩石上，苏妮的神庙只能通过从神庙山的高架堤道或乘船到达。陡峭的台阶从神庙的小港口蜿蜒而上。从远处看，神庙的屋顶似乎悬浮在空中——这是由镜子排列在外墙所创造的幻觉。在里面，苏妮的信徒和偶然的访客都可以享受公共浴室，接受化妆和打理发型的课程，并学习如何穿着适合个人身体、职业和气候的方式。新来神庙的人必须进行魅力检定。得分15或以上的人被欢迎为苏妮的兄弟姐妹；得分10或以上的人会得到如何改善他们形象的友好建议；得分9或以下的人会得到悲伤、同情的目光，并被一群溺爱的信徒包围。",spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[21],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_03f",locationId:"loc_02e",name:"10. 珠宝市场",activation:{condition:{type:"always"},priority:0},skeleton:["宝石市场故意设计成大市集的缩小版，更加独家。","它的主要业务是买卖从Chult矿山挖掘出来的丰富宝石，但许多其他稀有奢侈品也在这里交易。","由于公开巡逻的（警卫）和秘密活动的（间谍们）私人雇佣的安全代理，这个市场在很大程度上免受小偷和窃贼的侵扰。","他们所有人都为商人王子绛则工作，他在南扎路港的珠宝贸易中拥有垄断地位。"],flesh:"宝石市场故意设计成大市集的缩小版，更加独家。它的主要业务是买卖从Chult矿山挖掘出来的丰富宝石，但许多其他稀有奢侈品也在这里交易。由于公开巡逻的（警卫）和秘密活动的（间谍们）私人雇佣的安全代理，这个市场在很大程度上免受小偷和窃贼的侵扰。他们所有人都为商人王子绛则工作，他在南扎路港的珠宝贸易中拥有垄断地位。",spotlightRefs:[],presentNpcIds:["npc_zhanthi","npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[21],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_041",locationId:"loc_02e",name:"11. 皇家码头",activation:{condition:{type:"always"},priority:0},skeleton:['"皇家"这个术语可以追溯到楚尔特由真正的国王和王后统治而不是商人的时代。',"现在这些码头被预留给商人王子们的独家使用，以及那些商人王子们想要用特权取悦或用宏伟印象影响的外交官、显要人物和有影响力的外国商人。"],flesh:'"皇家"这个术语可以追溯到楚尔特由真正的国王和王后统治而不是商人的时代。现在这些码头被预留给商人王子们的独家使用，以及那些商人王子们想要用特权取悦或用宏伟印象影响的外交官、显要人物和有影响力的外国商人。',spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_042",locationId:"loc_02e",name:"12. 雕像",activation:{condition:{type:"always"},priority:0},skeleton:["港口中心的雕像代表了一位古代楚尔特国王，他身着全套礼服，身着豹皮的腰布和用羽毛、贝壳以及暴龙牙齿装饰的头饰；","披着由海象皮和猴尾制成的披风；","手持楚尔特传统的椭圆形盾牌和yklwa。","居民们称其为Na N'buso，伟大的国王。","这座雕像远不如它所描绘的神话国王那样古老。"],flesh:`港口中心的雕像代表了一位古代楚尔特国王，他身着全套礼服，身着豹皮的腰布和用羽毛、贝壳以及暴龙牙齿装饰的头饰；披着由海象皮和猴尾制成的披风；手持楚尔特传统的椭圆形盾牌和yklwa。居民们称其为Na N'buso，伟大的国王。

这座雕像远不如它所描绘的神话国王那样古老。它是在五年前建造的，当时南扎路港正在展示其新兴的商业实力，向外国人传达楚尔特是一片拥有辉煌历史的独立土地。看到它的人很少会忽视这一信息。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_043",locationId:"loc_02e",name:"13. 港务长办公室",activation:{condition:{type:"always"},priority:0},skeleton:['在港口管理员办公室外有一个公告板，上面提供了几位荒野向导的名字和下落（见"寻找向导"）。',"港口管理员是一条半金龙，名叫金达尔（见附录D）。","然而，他很少在这个坚固通风的建筑物里；","他大部分时间都花在处理每天在繁忙的码头边出现的数百起纠纷、交通堵塞和其他小问题上。","金达尔发现，他那令人印象深刻的个人魅力能更快、更令自己满意地解决问题，而不是任何数量的下属所能完成的。"],flesh:'在港口管理员办公室外有一个公告板，上面提供了几位荒野向导的名字和下落（见"寻找向导"）。港口管理员是一条半金龙，名叫金达尔（见附录D）。然而，他很少在这个坚固通风的建筑物里；他大部分时间都花在处理每天在繁忙的码头边出现的数百起纠纷、交通堵塞和其他小问题上。金达尔发现，他那令人印象深刻的个人魅力能更快、更令自己满意地解决问题，而不是任何数量的下属所能完成的。办公室里的职员很少确切知道金达尔任何时候在哪里，但可以给他留言；他会在1d6小时内回复。',spotlightRefs:[],presentNpcIds:["npc_zindar","npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:'如果角色们自称为冒险家，金达尔会给他们提供一个任务（见"支线任务"）。'},{id:"scn_044",locationId:"loc_02e",name:"14. 灯塔",activation:{condition:{type:"always"},priority:0},skeleton:["灯塔上的火焰日夜燃烧，引导船只在黑暗、雾和雨中驶向港口。","可以向火中添加各种粉末，以产生从贝路利安堡和Chult湾沿岸矿区可见的浓密彩色烟柱。"],flesh:"灯塔上的火焰日夜燃烧，引导船只在黑暗、雾和雨中驶向港口。可以向火中添加各种粉末，以产生从贝路利安堡和Chult湾沿岸矿区可见的浓密彩色烟柱。",spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_045",locationId:"loc_02e",name:"15. 尼亚扎鲁堡垒",activation:{condition:{type:"always"},priority:0},skeleton:["堡垒内设有一个绞盘，用于升降连接堡垒和灯塔之间的巨大铁链。","当铁链升起时，没有船只能进入或离开港口。","几十年来铁链从未用来抵御攻击者，但偶尔会用来防止船只携带罪犯或违禁品悄悄离开港口。","堡垒还配备了两台弩炮，可以发射重型弩箭或炼金术士的火药罐。","它的守军由一位贵族（城堡主），四位老兵（官员）和四十名警卫组成，他们都忠于商人王子。"],flesh:"堡垒内设有一个绞盘，用于升降连接堡垒和灯塔之间的巨大铁链。当铁链升起时，没有船只能进入或离开港口。几十年来铁链从未用来抵御攻击者，但偶尔会用来防止船只携带罪犯或违禁品悄悄离开港口。堡垒还配备了两台弩炮，可以发射重型弩箭或炼金术士的火药罐。它的守军由一位贵族（城堡主），四位老兵（官员）和四十名警卫组成，他们都忠于商人王子。",spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_046",locationId:"loc_02e",name:"16. 仓库区",activation:{condition:{type:"always"},priority:0},skeleton:["进出南扎路港的各种货物都储存在这些仓库中。","在仓库排之间开凿了运河，允许船只被套上恐龙直接拖到所需的仓库，以便更容易地装载和卸载。","一艘大船很容易堵塞运河，因此需要良好的交通管理；","这是港口管理员的职责之一。","像任何仓库区一样，这个地方在夜晚大部分时间都是空荡荡的，这使得它成为秘密会面和其他恶作剧的好地方。"],flesh:`进出南扎路港的各种货物都储存在这些仓库中。在仓库排之间开凿了运河，允许船只被套上恐龙直接拖到所需的仓库，以便更容易地装载和卸载。一艘大船很容易堵塞运河，因此需要良好的交通管理；这是港口管理员的职责之一。

像任何仓库区一样，这个地方在夜晚大部分时间都是空荡荡的，这使得它成为秘密会面和其他恶作剧的好地方。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_047",locationId:"loc_02e",name:"17. 干船坞",activation:{condition:{type:"always"},priority:0},skeleton:['南扎路港并不以造船闻名，但许多来到这里的船只最终都需要修理船体——尤其是那些遭遇台风、海盗或龙龟阿雷玛格（见"楚尔特湾"）的船只。',"对于恐龙来说，将船只拖出水面送入干船坞是轻而易举的工作，以便修补洞孔和刮掉藤壶。"],flesh:'南扎路港并不以造船闻名，但许多来到这里的船只最终都需要修理船体——尤其是那些遭遇台风、海盗或龙龟阿雷玛格（见"楚尔特湾"）的船只。对于恐龙来说，将船只拖出水面送入干船坞是轻而易举的工作，以便修补洞孔和刮掉藤壶。',spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_049",locationId:"loc_02e",name:"18. 红市集",activation:{condition:{type:"always"},priority:0},skeleton:["没有人知道红市集这个名字是怎么来的。","一个说法是这个标签来自这里出售的巨大恐龙肉块以及由此产生的血桶，这些血迹染红了雨水冲洗的排水沟，这可能和任何其他解释一样合理。","南扎路港的居民在红市集购买他们的日常需求。","与主要交易耐用品和奢侈品的大市集不同，红市集交易的是日常必需品：当地生产的肉类、蔬菜、热带水果、特吉酒、轻便热带服装、驱虫剂、雨水收集器以及其他家庭用品。","红市集的买家和卖家主要是当地人。"],flesh:`没有人知道红市集这个名字是怎么来的。一个说法是这个标签来自这里出售的巨大恐龙肉块以及由此产生的血桶，这些血迹染红了雨水冲洗的排水沟，这可能和任何其他解释一样合理。

南扎路港的居民在红市集购买他们的日常需求。与主要交易耐用品和奢侈品的大市集不同，红市集交易的是日常必需品：当地生产的肉类、蔬菜、热带水果、特吉酒、轻便热带服装、驱虫剂、雨水收集器以及其他家庭用品。红市集的买家和卖家主要是当地人。

红色集市附近有两家值得注意的旅店。雷霆蜥蜴旅店迎合吵闹的顾客，一晚住宿费用为5银币。卡雅的安息之屋则安静得多，但一晚住宿费用为1金币。荒野向导们常光顾这两家旅店，寻找工作（详见"寻找向导"）。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[23],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_04b",locationId:"loc_02e",name:"19. 鱼市场",activation:{condition:{type:"always"},priority:0},skeleton:["海鲜是南扎路港的主食，这不仅是因为捕鱼比狩猎恐龙更容易和安全，而且嫩滑的鱼肉比坚韧的爬行动物肉更美味。","鱼市是购买当天餐食的好地方。","早上的价格更高，但那时的质量和选择也更好。"],flesh:"海鲜是南扎路港的主食，这不仅是因为捕鱼比狩猎恐龙更容易和安全，而且嫩滑的鱼肉比坚韧的爬行动物肉更美味。鱼市是购买当天餐食的好地方。早上的价格更高，但那时的质量和选择也更好。",spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[23],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_04c",locationId:"loc_02e",name:"20. 大竞技场",activation:{condition:{type:"always"},priority:0},skeleton:["这座石制竞技场是角斗士游戏（通常非致命，但意外会发生）、血腥的动物战斗和壮观马戏表演的场所。","最好的角斗士成为名人，赚取财富。","竞技场最伟大的冠军的雕像排列在大竞技场墙壁的顶部，包括该市现任商人王子之一。","(艾珂内-阿法作为角斗士赢得了名声和财富，然后退休成为商人和政治家。","大多数下午都会举行活动；"],flesh:`这座石制竞技场是角斗士游戏（通常非致命，但意外会发生）、血腥的动物战斗和壮观马戏表演的场所。最好的角斗士成为名人，赚取财富。竞技场最伟大的冠军的雕像排列在大竞技场墙壁的顶部，包括该市现任商人王子之一。(艾珂内-阿法作为角斗士赢得了名声和财富，然后退休成为商人和政治家。)

大多数下午都会举行活动；只有在日落后才会举行特别表演，因为斗兽场依赖自然光。在一周内，节目包括资格赛、安慰赛和其他小型活动。主要活动、锦标赛和特别盛会则在节日举行。假日表演可能包括"传说中的英雄"与"海盗"（均由角斗士扮演）之间的战斗，一场血腥的比赛，让迅猛龙对抗老虎，甚至是一场法师与被捕获的食尸鬼们、骷髅们或丧尸们的战斗比赛。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[23],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_04d",locationId:"loc_02e",name:"21. 黄金大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这座宏伟的建筑是瓦金女神的神庙，但居民们称它为黄金大厅，因为它闪亮的金色屋顶以及瓦金女神对贸易和财富的关注。","西巴斯山是城市中的最高点，当阳光照耀时，从神庙屋顶反射的光芒可以在海上数英里外看到。","一些城市居民发誓说屋顶覆盖着纯金，但它只是油漆。","一座宽阔的石桥连接着西巴斯山和位于伊克瓦兹山上的宏伟竞技场。","南扎路港的Waukeen主祭司是Siboneseni，繁荣之母（守序中立女性Chultan 祭司）。"],flesh:`这座宏伟的建筑是瓦金女神的神庙，但居民们称它为黄金大厅，因为它闪亮的金色屋顶以及瓦金女神对贸易和财富的关注。西巴斯山是城市中的最高点，当阳光照耀时，从神庙屋顶反射的光芒可以在海上数英里外看到。一些城市居民发誓说屋顶覆盖着纯金，但它只是油漆。一座宽阔的石桥连接着西巴斯山和位于伊克瓦兹山上的宏伟竞技场。

南扎路港的Waukeen主祭司是Siboneseni，繁荣之母（守序中立女性Chultan 祭司）。她是城市中仅次于商人王子的最有影响力的居民之一，并且由于寺庙的慈善工作和对城市改进的支持，她享有社会各阶层的巨大支持。实际上，寺庙也是城市中最富有的银行之一。当繁荣之母Siboneseni穿过街道时，她乘坐在优雅的轿子中，由鼓手、歌手、舞者和寺庙助手陪同，他们向穷人分发热心的铜币。不用说，这会引起交通堵塞，但城市里的人们非常爱她。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[23],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_04e",locationId:"loc_02e",name:"22. 公共浴场",activation:{condition:{type:"always"},priority:0},skeleton:["南扎路港 是一座非常干净的城市，多亏了清洁的雨水，其居民也非常注重卫生。","大多数人想到一天不洗澡都会感到厌恶。","城市中遍布着数十家小型浴场，它们像私人俱乐部一样运作，但公共浴场对所有人开放，由Sune的祭司管理（见 区域9）。","它既平等又优雅：富有的商人和码头工人在铺有瓷砖的浴室和大理石地面的更衣室里相互碰撞。","这里不收费，但要求沐浴者根据其社会地位向Sune的神庙留下适当的捐赠。"],flesh:"南扎路港 是一座非常干净的城市，多亏了清洁的雨水，其居民也非常注重卫生。大多数人想到一天不洗澡都会感到厌恶。城市中遍布着数十家小型浴场，它们像私人俱乐部一样运作，但公共浴场对所有人开放，由Sune的祭司管理（见 区域9）。它既平等又优雅：富有的商人和码头工人在铺有瓷砖的浴室和大理石地面的更衣室里相互碰撞。这里不收费，但要求沐浴者根据其社会地位向Sune的神庙留下适当的捐赠。因为Chultans人对这一设施感到自豪，即使是最穷的人也至少会尝试在入口处的巨大蛤壳里留下一枚铜币。许多独立的按摩师和按摩女在场，为疲惫的肌肉提供按摩服务；这些服务的费用是2d10 sp。",spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[23],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_04f",locationId:"loc_02e",name:"23. 染色工坊",activation:{condition:{type:"always"},priority:0},skeleton:["楚尔特人除了爱干净之外，还喜欢色彩鲜艳的服装。","纺织业并非楚尔特的本土产业，因为丛林不适合种植棉花或养羊。","然而，丛林和海洋提供了调配出彩虹般色彩的所有必需品。","商人进口轻便、素色的织物，在染色作坊中染上鲜艳的颜色和图案，然后在当地销售或出口回布料原产地。","当地的裁缝将这些织物制作成长衬衫、及膝裤、围裙和在南扎路港受欢迎的裙子。"],flesh:`楚尔特人除了爱干净之外，还喜欢色彩鲜艳的服装。纺织业并非楚尔特的本土产业，因为丛林不适合种植棉花或养羊。然而，丛林和海洋提供了调配出彩虹般色彩的所有必需品。商人进口轻便、素色的织物，在染色作坊中染上鲜艳的颜色和图案，然后在当地销售或出口回布料原产地。当地的裁缝将这些织物制作成长衬衫、及膝裤、围裙和在南扎路港受欢迎的裙子。

染色作坊下方的悬崖和周围的海水总是被染成鲜亮的橙色、蓝色、红色、绿色和黄色，这取决于那天从染缸中倾倒出的颜色。在染色作坊工作的人在街上很容易被认出，因为他们的手和脚也染上了同样鲜亮的颜色。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_051",locationId:"loc_02e",name:"24. 提莫拉神庙",activation:{condition:{type:"always"},priority:0},skeleton:["提莫拉的神庙建造得像一个坚固的重型石块房屋。","它不是一个优雅的建筑，但居民们依靠它作为一个安全的避难所，当洪水从马拉的喉咙倾泻而下，或者当警报号角吹响，没有时间在不死生物涌上山谷之前到达城市的安全地带。","生活在马拉的喉咙地区的人们并不认为自己特别幸运，但他们所拥有的一点点运气，他们归功于女士在他们中间的存在。"],flesh:"提莫拉的神庙建造得像一个坚固的重型石块房屋。它不是一个优雅的建筑，但居民们依靠它作为一个安全的避难所，当洪水从马拉的喉咙倾泻而下，或者当警报号角吹响，没有时间在不死生物涌上山谷之前到达城市的安全地带。生活在马拉的喉咙地区的人们并不认为自己特别幸运，但他们所拥有的一点点运气，他们归功于女士在他们中间的存在。",spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_053",locationId:"loc_02e",name:"25. 恐龙围栏",activation:{condition:{type:"always"},priority:0},skeleton:["这座城市的大多数驮兽都是在这里训练的，它们在夜间被关起来。","甲龙和三角龙在这个角色中最常见。","为街头赛跑训练的恐龙也在这里饲养。","大多数楚尔特驯兽师在驯兽技能检定时有+5的加值，并且他们日复一日地与相同的动物一起工作。"],flesh:"这座城市的大多数驮兽都是在这里训练的，它们在夜间被关起来。甲龙和三角龙在这个角色中最常见。为街头赛跑训练的恐龙也在这里饲养。大多数楚尔特驯兽师在驯兽技能检定时有+5的加值，并且他们日复一日地与相同的动物一起工作。",spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_flask_of_wine","npc_grandfather_zitembe","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_kwayoth","npc_ortimay_swift_and_dark","npc_syndra_silvane","npc_wakanga_o_tamu","npc_xandala","npc_zhanthi","npc_zindar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_054",locationId:"loc_02e",name:"城市居民",activation:{condition:{type:"always"},priority:0},skeleton:["楚尔特人占南扎路港人口的三分之二。","城市其余的居民是外国人，其中许多人是牟利者或寻求掠夺楚尔特财富的冒险家，或是帮助保护城市免受逼近的怪物侵害的人。","角色们可以在南扎路港的任何地方遇到沃洛。","这位传奇的世界旅行家来到南扎路港，是为了向商人贵族（其中一些人他很熟悉，还有一些他声称很熟悉）赠送他新书《瓦罗怪物指南》的签名副本，并推广他的最新作品。","角色们最有可能在城市的旅馆或酒馆中，或者在商人贵族的别墅里遇到沃洛。"],flesh:`楚尔特人占南扎路港人口的三分之二。城市其余的居民是外国人，其中许多人是牟利者或寻求掠夺楚尔特财富的冒险家，或是帮助保护城市免受逼近的怪物侵害的人。

角色们可以在南扎路港的任何地方遇到沃洛。

这位传奇的世界旅行家来到南扎路港，是为了向商人贵族（其中一些人他很熟悉，还有一些他声称很熟悉）赠送他新书《瓦罗怪物指南》的签名副本，并推广他的最新作品。角色们最有可能在城市的旅馆或酒馆中，或者在商人贵族的别墅里遇到沃洛。

沃洛是信息的源泉，但他所说的并不全是真实的，尽管他坚定地声称其准确性。他不会在任何情况下冒险离开南扎路港。

每当他们想要了解书中描述的特定怪物的背景知识时，可以给他们提供一些来自瓦罗怪物指南的有用信息。如果没有这本参考书，请使用附录D中的信息。

七位商界王子统治着南扎路港，每个人在国家事务上都有平等的投票权。他们都是楚尔特人。他们唯一的资格是他们是城市中最富有的七个人。他们的治理所在地是金座（Goldenthrone），一座俯瞰海湾的古老、威严的阿姆尼亚宫殿。退休的商界王子可以将他或她的职位传给家庭成员，或者是多数人同意的另一位极富有的人。

商人王子们周围围绕着忠诚的家人和下属，但他们也雇佣外国雇佣兵，既作为城市守卫也作为个人保镖。这些雇佣兵中大多数是Zhents（可能指特定组织或族群，未明确翻译），而在有散塔林会（可能指特定组织，未明确翻译）的地方，通常也能找到Harper间谍。

商人王子们对城市中出售的所有商品拥有特定的垄断权。需要装备或补给的角色必须直接与这些人打交道，或者通过他们的联合企业间接交易。唯一的替代方案是诉诸于马拉喉咙或提尔基锚地的黑市。

交易武器、盾牌、旅行装备、雨水收集器、马鞍、马车和独木舟

艾珂内-阿法（守序善良女性Chultan人类角斗士）在南扎路港的竞技场赢得了众多角斗士比赛，之后她将奖金投资于她的首次贸易交易。她是那些看着她战斗长大的普通百姓中的传奇人物。她的丈夫Kura是一位画家，他们有一对名叫Soshen和Tiryk的十几岁的双胞胎儿子。Soshen是一名城市守卫，而Tiryk是一位受欢迎的恐龙赛跑选手。两个孩子都是以Chultan河流命名的。

艾珂内-阿法出售各种非魔法武器和盾牌，但她的大部分库存由燧石匕首、带有木柄和黑曜石尖的yklwas（见"购买特殊物品"），以及由木框架和伸展在其上的爬行动物皮层制成的盾牌组成。艾珂内-阿法支付瓦康嘎·欧塔姆在这些物品中选择少数几个进行永久性附魔，她以魔法盾牌和武器出售表中列出的价格出售它们。

交易野兽和驯兽

伊方·塔若阿 (NE 男性 Chultan 人类 贵族) 是一个贪婪、狡猾的人，他得到了 散塔林会 中有影响力且危险的朋友的支持。他嫉妒 瓦康嘎·欧塔姆 的魔法力量和 艾珂内-阿法 在竞技场中的声誉。Talro'a 出售可以训练为坐骑或宠物的动物，包括恐龙和飞猴。Omu 的 yuan-ti 暗中支付 Talro'a，以警告他们是否有宝藏猎人朝南进入丛林深处。他使用飞蛇作为信使。Talro'a 并不确定这些信息是否确实发送给了 yuan-ti，但他强烈怀疑是。

Ifan没有家庭，也没有亲密的关系。他天生对每个人都不信任。

伊方·塔若阿在南扎路港雇佣了数十名商人，他们不仅充当他的眼线，还出售驯化的野兽，这些野兽可用作伙伴、坐骑或驮兽。被训练为信使的飞蛇深受散塔林会青睐，而塔尔罗阿只向他们出售这些生物。

出售野兽表格列出了在南扎路港可购买的生物。鸭嘴龙、迅猛龙和飞猴的数据出现在附录D。

从事植物、毒药和暗杀

婕萨敏（中立女性Chultan人类刺客，她的生命值上限降低至58）不常说话。然而，当议会在某个问题上意见分歧时，婕萨敏通常会投决定性的一票。她的身体大部分被宽松的长袍和紧紧包裹的黑色绷带隐藏起来。

婕萨敏从事植物、草药、毒药和合法暗杀的交易。谋杀在南扎路港是非法的，就像几乎在任何地方一样，但婕萨敏垄断了"制裁"——即允许通过指定方法（通常是毒药或刀刺）进行杀戮的许可令。对于额外费用，她的代理人将执行暗杀，结果有保证。毒药是她的专长，她拥有庞大的个人收藏。她以市场价格出售第第八章中毒药表中列出的所有毒药。

十二年前，婕萨敏与一位阿姆尼亚海员有过一段短暂而热烈的爱情。那段爱情'果实'是一个害羞的女儿，名叫伊梅兹拉。在婕萨敏的严密监视下，家庭教师正在教授伊梅兹拉将来接管家族生意所需的技能。

在她自己创业之前，婕萨敏曾为一位卡利什帕夏担任刺客。她在一次任务中死亡，但她的赞助人支付了一大笔钱让她从死里复活。由于多年前的不幸，婕萨敏现在正遭受灵魂收集者死亡诅咒的影响。她用围巾和绷带包裹着腐烂的肉体，她倾向于帮助任何积极尝试结束死亡诅咒的冒险家。

提供向导和雇佣兵服务

乔巴（NE 男性楚尔特人类 斥候）在作为野外向导时，因他所工作的团队发现了大量楚尔特黄金和珠宝而发了财。奇迹般地，只有乔巴在不死生物和恐龙攻击的围攻中幸存下来，他乘坐满载着宝藏的独木舟返回南扎路港。毫无疑问，他过着冒险的生活；他的身体因他的冒险而布满了许多伤痕。他的主要间谍、知己和情人是Aazon Talieri（NG 男性特提斯人类 间谍）。乔巴完全信任他，而Aazon的忠诚是无可指责的。

由于他与探险者的交易，乔巴 对楚尔特的地图有着浓厚的兴趣。如果他得知了地图的存在，他愿意为辛德拉·席尔瓦因的地图支付丰厚的报酬。如果他们拒绝出售，他将诉诸于盗窃，最终甚至诉诸于谋杀。

乔巴指派Aazon负责护送冒险者到他们感兴趣的向导那里。乔巴不需要预付款，因为根据法律，南扎路港的所有向导都必须向他支付他们收入的合理份额。

交易水果、葡萄酒、麦芽酒、特吉酒、油、香水和驱虫剂

克薇欧泽（NE女性楚尔特人祭司，佩戴着一枚火焰抗性戒指）以一种隐约带有威胁性的方式平静而深思。她崇拜火神寇索斯（发音为kaw-SOOTH），并且喜欢折磨他人，特别是如果涉及到火和热炭。克薇欧泽有两个情人——一个名叫Ixis的魅魔和一个名叫Indar的梦魔。这些恶魔化身为美丽的楚尔特人。

克薇欧泽在南扎路港的街头长大，贫穷且无依无靠。她鄙视贵族，并想要摧毁楚尔特王室家族的每一个最后的痕迹。她认为绛则是她的死敌，并且对于等待这位老贵族女性去世已经变得不耐烦。尽管她很好地隐藏了自己的蔑视，克薇欧泽仍在不断地干涉绛则的事务和家庭事务。如果绛则意识到克薇欧泽对她和她家人的敌意，她选择不表现出来。

克薇欧泽雇佣了商人自己制作特吉酒和驱虫剂。关于这些特殊物品的更多信息，请见"购买特殊物品"。

交易魔法与传说

瓦康嘎·欧塔姆（守序善良男性库尔坦人类魔法师）是商人王子中唯一的奥术施法者。他是辛德拉·席尔瓦因的长期朋友，也是一个相当注重外表的花花公子，容易被聪明的女人所吸引——或者这只是他精心构建的公众形象。他的同行们不知道的是，瓦康加对竖琴手同盟抱有同情，并允许他们使用他的别墅作为安全屋。

瓦康嘎 交易知识、信息、遗失的传说、药水和卷轴。他对死亡诅咒有所了解，但除此之外知之甚少。瓦康嘎 在 南扎路港对这些物品拥有垄断，所以角色们要么支付他的要价，要么就无法获得。尽管他很想帮忙，但他不太可能赊账；所有购买必须用硬币、宝石或珠宝支付。

在他的收藏中，瓦康嘎有一本破旧、水渍斑斑的探险家日志，这本日志是在15年前从丛林中带出来的。它描述了一位法师对楚尔特各地的探索，但并没有足够的细节来在地图上定位它们。然而，这位未具名的作者多次提到他唯一的旅行伴侣：一个名为沃尔恩的盾卫。日志中包含了沃尔恩控制护身符的图片，但没有提供护身符当前位置的线索。作为找到并取回构装生物及其控制护身符的奖励，瓦康嘎提供了一本包含十五个随机确定的法术的法术书（掷一个d6来确定每个法术的等级）。

交易宝石、珠宝、布料和盔甲

绛则（中立善良女性库尔坦人类贵族）血管中流淌着王室血统，很少有人敢质疑这位明智的老商人。她是伊特帕卡协会的秘密成员（见"派系及其代表"），并且她已经与散塔林会建立了联系，以便她可以监视该组织的活动。

绛则 交易宝石、珠宝、色彩缤纷的Chultan布料，以及非魔法的皮甲、铆钉皮甲和兽皮甲。她的儿子，鲨狗，是驻扎在贝路利安堡的向导。鲨狗定期向他的母亲报告堡垒发生的事情，但他不是她在Flaming Fist中最可靠的间谍。

绛则是极少数偶然发现了莉尔阿·波提尔与海盗的秘密安排的证据的人之一，但她暂时保留这些知识。金达尔，这位半龙港务长，正在寻找冒险家来处理海盗，而绛则正在提供悬赏金。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_wakanga_o_tamu","npc_ifan_talro_a","npc_jessamine","npc_jobal","npc_syndra_silvane","npc_kwayoth","npc_zhanthi","npc_shago","npc_liara_portyr","npc_zindar","npc_flask_of_wine","npc_grandfather_zitembe","npc_ortimay_swift_and_dark","npc_xandala"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`有关他的更多信息，请参见附录D。
如果角色们购买了一本沃罗的书（50金币一本耐用的精装版），他们可以加以利用。
不要透露游戏统计数据，因为这些信息在游戏世界中是不可获取的。
其他生物请参阅怪物图鉴。
如果角色们拜访乔巴寻找向导，他建议他们在南扎路港寻找他的一位或多位向导（见"寻找向导"）。
如果角色们遵循乔巴的建议并陪伴Aazon，当Aazon向队伍介绍城市中的各种向导时，给他们提供传单2、3、4、5、6和8的副本（见附录 E）。
如果角色们似乎决心要结束这个诅咒，他会尽他所能地帮助他们，包括向他们出售次要的魔法物品（见出售魔法物品表）。
如果角色们与瓦康嘎结为朋友，他会给他们这本日志，并在辛德拉的地图上展示它被发现的地方（他准确地指出了包含守护者的六边形；
见第2章中的"沃恩"以获取更多信息）。`,mapGeometry:{imageRef:"adventure/ToA/007-0203.webp"}},{id:"scn_065",locationId:"loc_065",name:"商业王子别墅",activation:{condition:{type:"always"},priority:0},skeleton:["每位商人王子都维护着一座豪华别墅，他们在这里生活并进行私人业务。","这些通风良好、富丽堂皇的宅邸包括为重要访客和贸易伙伴准备的客房，并且由忠诚、训练有素的警卫全天候巡逻。","地图1.2展示了一个样板平面图。","每座别墅既是奢華的热带住宅，也是一座堡垒。","外墙高8至12英尺，厚达2英尺，顶部布满食肉动物的牙齿、碎贝壳和碎玻璃，在阳光下闪闪发光，但也能吓阻入侵者。"],flesh:`每位商人王子都维护着一座豪华别墅，他们在这里生活并进行私人业务。这些通风良好、富丽堂皇的宅邸包括为重要访客和贸易伙伴准备的客房，并且由忠诚、训练有素的警卫全天候巡逻。

地图1.2展示了一个样板平面图。每座别墅既是奢華的热带住宅，也是一座堡垒。外墙高8至12英尺，厚达2英尺，顶部布满食肉动物的牙齿、碎贝壳和碎玻璃，在阳光下闪闪发光，但也能吓阻入侵者。任何试图翻越墙壁的角色必须成功进行一次DC 10敏捷豁免检定，否则会因为尖锐物体受到2点（1d4）的挥砍伤害。

您可以通过为每位商界王子分配以下装饰图案来定制别墅：

华丽的武器、盾牌和装裱的画作遍布艾珂内-阿法的别墅，同样还有在镀金笼子里的尖叫鹦鹉。

伊方·塔若阿 用从Chultan遗迹中掠夺来的文物和花瓶装饰他的别墅和花园，色彩斑斓的飞蛇在宽敞的走廊中俯冲和滑翔。

婕萨敏的别墅墙壁和柱子上绘有色彩斑斓的蛇，装饰性的石制喷泉和水池也采用了类似的蛇形图案。

乔巴别墅的墙壁上装饰着丝绸帷幔、挂毯和野兽的头部标本。

克薇欧泽的别墅充满了香水的气味，到处都可以找到盛满新鲜水果的碗。为了向Kossuth表示敬意，油灯和火盆一直保持点燃。

瓦康嘎的别墅被施有en=Continual Flame法术照亮，柔和的音乐（由魔法创造）在各处播放。通往私人房间的门上施有en=Arcane Lock法术，墙上安装着凌空剑，随时准备在瓦康嘎的命令下发动攻击。偶尔的地板地毯或挂毯可能是伪装的闷人毯。

绛则的别墅装饰着站立的镀金盔甲和大型盆栽植物，绛则祖先的珠宝骷髅安放在墙壁的壁龛中。

这个层次装饰着画作、雕像、壁画、湿壁画、挂毯和油灯，用以给客人留下深刻印象。

这一层的房间布置得非常舒适。艺术品和其他装饰反映了别墅所有者，商人王子的品味。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_ifan_talro_a","npc_jobal","npc_zhanthi","npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:["enc_065"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_067",locationId:"loc_065",name:"1. 入口",activation:{condition:{type:"always"},priority:0},skeleton:["这个宜人、通风、铺着瓷砖的庭院包括一个喷水的喷泉和绿色植物。","访客可以在入口左侧的洗手间里洗洗自己，然后才能见到别墅的居民。","入口门廊总是由1d4 + 1名角斗士守卫，这些角斗士是从商人王子的扩展家族中招募的，或者是因为他们的忠诚和战斗能力而被精心挑选出来的。","入口处的天花板高达两层楼。","在一些住宅中，它是露天的。"],flesh:`这个宜人、通风、铺着瓷砖的庭院包括一个喷水的喷泉和绿色植物。访客可以在入口左侧的洗手间里洗洗自己，然后才能见到别墅的居民。入口门廊总是由1d4 + 1名角斗士守卫，这些角斗士是从商人王子的扩展家族中招募的，或者是因为他们的忠诚和战斗能力而被精心挑选出来的。这些守卫总是警惕着试图进入他们主人家中的骗子和魔术师，因此他们在技能检定和豁免检定上对分散注意力、迷惑或魅惑的尝试具有优势。

入口处的天花板高达两层楼。在一些住宅中，它是露天的。在这些情况下，喷泉嵌入地面，兼作雨水的排水口。`,spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_068",locationId:"loc_065",name:"2. 休息区",activation:{condition:{type:"always"},priority:0},skeleton:["这是一个等候区，也是一个为那些别墅主人不熟悉的客人准备的会面区，因此他们可能不会被允许进入房子的内部房间。","装饰性的柱子支撑着从区域1的拱形门道。","地毯和舒适的枕头摆放在地板上。","狭窄的窗户可以望向花园，但如果访客并不像他们声称的那样友好，这些窗户也可以作为箭缝使用。"],flesh:"这是一个等候区，也是一个为那些别墅主人不熟悉的客人准备的会面区，因此他们可能不会被允许进入房子的内部房间。装饰性的柱子支撑着从区域1的拱形门道。地毯和舒适的枕头摆放在地板上。狭窄的窗户可以望向花园，但如果访客并不像他们声称的那样友好，这些窗户也可以作为箭缝使用。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_069",locationId:"loc_065",name:"3. 大厅",activation:{condition:{type:"always"},priority:0},skeleton:["一座宏伟的瓷砖地板两侧是两座通往上层的宏伟楼梯。","装饰与各个商人王子的品味和专长保持一致。"],flesh:"一座宏伟的瓷砖地板两侧是两座通往上层的宏伟楼梯。装饰与各个商人王子的品味和专长保持一致。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_06a",locationId:"loc_065",name:"4. 客房",activation:{condition:{type:"always"},priority:0},skeleton:["房子的右侧大部分是为客人准备的住宿设施。","三个带有独立浴室的私人卧室，加上两个休息室和通往花园的通道，使得这里的住宿比典型的旅馆要豪华得多。"],flesh:"房子的右侧大部分是为客人准备的住宿设施。三个带有独立浴室的私人卧室，加上两个休息室和通往花园的通道，使得这里的住宿比典型的旅馆要豪华得多。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_06b",locationId:"loc_065",name:"5. 花园",activation:{condition:{type:"always"},priority:0},skeleton:["蕨类植物、盆栽棕榈、兰花以及其他热带花卉在露天的花园里被培育。","在对园艺有兴趣的商人王子的花园中，如婕萨敏，可能会发现具有实用特性或用作毒药的库尔坦植物。","见《附录C》了解稀有植物的例子。"],flesh:"蕨类植物、盆栽棕榈、兰花以及其他热带花卉在露天的花园里被培育。在对园艺有兴趣的商人王子的花园中，如婕萨敏，可能会发现具有实用特性或用作毒药的库尔坦植物。见《附录C》了解稀有植物的例子。",spotlightRefs:[],presentNpcIds:["npc_jessamine","npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_06c",locationId:"loc_065",name:"6. 餐厅",activation:{condition:{type:"always"},priority:0},skeleton:["餐桌非常低，仅离地面几英寸。","用餐者在用餐时可以放松地坐在枕头上。"],flesh:"餐桌非常低，仅离地面几英寸。用餐者在用餐时可以放松地坐在枕头上。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_06d",locationId:"loc_065",name:"7. 桑拿",activation:{condition:{type:"always"},priority:0},skeleton:["除了日常沐浴之外，富裕的楚尔特人喜欢在桑拿中放松。","干燥的热量与楚尔特的高湿度相比是一种受欢迎的变化。","大多数家庭桑拿使用炭炉或热石头加热，但在商界王子的家中，一个被困住的火元素提供全天候的热量，总有仆人或奴隶随时准备按摩疲劳的肌肉。"],flesh:"除了日常沐浴之外，富裕的楚尔特人喜欢在桑拿中放松。干燥的热量与楚尔特的高湿度相比是一种受欢迎的变化。大多数家庭桑拿使用炭炉或热石头加热，但在商界王子的家中，一个被困住的火元素提供全天候的热量，总有仆人或奴隶随时准备按摩疲劳的肌肉。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_06e",locationId:"loc_065",name:"8. 浴室",activation:{condition:{type:"always"},priority:0},skeleton:["浴室是楚尔特式豪宅的基石，甚至比餐厅或家庭室更为重要。","家庭成员在私人时间里在这里放松，但商人王子在浴室与信任的顾问和亲密的商业伙伴举行会议也并无不寻常。","在楚尔特社会中，被邀请进入家庭浴室被视为一种荣誉，将其视为低于荣誉的待遇可能会冒犯发出邀请的人。"],flesh:"浴室是楚尔特式豪宅的基石，甚至比餐厅或家庭室更为重要。家庭成员在私人时间里在这里放松，但商人王子在浴室与信任的顾问和亲密的商业伙伴举行会议也并无不寻常。在楚尔特社会中，被邀请进入家庭浴室被视为一种荣誉，将其视为低于荣誉的待遇可能会冒犯发出邀请的人。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_06f",locationId:"loc_065",name:"9. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["厨房宽敞，天花板高，通风良好；","否则，烹饪火源产生的热量会让它变得难以忍受的热。","楼梯通往洗衣房（区域14）。"],flesh:"厨房宽敞，天花板高，通风良好；否则，烹饪火源产生的热量会让它变得难以忍受的热。楼梯通往洗衣房（区域14）。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_071",locationId:"loc_065",name:"10. 图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["Chultans喜爱神话般的浪漫故事，这座城市拥有一个活跃的文学社区和许多读书俱乐部。","利用这个机会回答玩家提出的具体问题。","图书馆不会揭示奥穆的位置，但一本传说书籍可能会提到这座城市，并描述其鼎盛时期的面貌。"],flesh:`Chultans喜爱神话般的浪漫故事，这座城市拥有一个活跃的文学社区和许多读书俱乐部。南扎路港最成功的小说家和剧作家编造了激动人心的故事，讲述传说中的英雄们在难以想象的危险中追求他们的爱人，并将他们从比死亡更糟糕的命运中拯救出来——这更有可能涉及被迫与不爱他们的人结婚，而不是被一只巨大得难以置信的暴龙吃掉，尽管这些故事中也经常出现怪物般的暴龙。

一个角色如果花费数小时筛选公式化的小说，并通过了一个 DC 15 智力（调查）检定，将会在浪漫小说中发现夹杂其中的有关却尔坦传说的有用书籍。利用这个机会回答玩家提出的具体问题。图书馆不会揭示奥穆的位置，但一本传说书籍可能会提到这座城市，并描述其鼎盛时期的面貌。`,spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_072",locationId:"loc_065",name:"11. 家庭房",activation:{condition:{type:"always"},priority:0},skeleton:["商人王子的孩子、配偶和其他近亲居住在这些公寓中。","这些公寓装饰华丽，配有枕头和虎皮地毯。"],flesh:"商人王子的孩子、配偶和其他近亲居住在这些公寓中。这些公寓装饰华丽，配有枕头和虎皮地毯。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_073",locationId:"loc_065",name:"12. 主卧",activation:{condition:{type:"always"},priority:0},skeleton:["商人王子的套房是宫殿中最豪华的房间。","宜人的微风通过大型覆盖着格子的窗户吹进来，使得盆栽植物轻轻摇摆。","主床的床头板雕刻精美，图案暗示着商人的生意。","相连的房间内有一个小型私人浴室和一个步入式衣橱，里面装满了昂贵的衣物、镜子、梳子等。"],flesh:`商人王子的套房是宫殿中最豪华的房间。宜人的微风通过大型覆盖着格子的窗户吹进来，使得盆栽植物轻轻摇摆。主床的床头板雕刻精美，图案暗示着商人的生意。相连的房间内有一个小型私人浴室和一个步入式衣橱，里面装满了昂贵的衣物、镜子、梳子等。

如果房间内有珠宝，则有50概率被锁在珠宝盒中，需要使用盗贼工具并通过一次DC 15敏捷检定才能打开。`,spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_073_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:'这套物品包含相当于在城主指南中库藏宝藏：挑战等级 0—4表格的"宝石或艺术品"栏掷骰两次所获得的个人物品。'},{id:"scn_075",locationId:"loc_065",name:"13. 警卫室",activation:{condition:{type:"always"},priority:0},skeleton:["这个警卫室故意设在家庭房间和主卧之间。","警卫们负责在家人最脆弱的时候，也就是睡觉或在自己房间里放松时，保护家人。","这个岗位总是由1d4 + 1名对商人王子极度忠诚并因其忠诚而得到丰厚回报的角斗士驻守。"],flesh:"这个警卫室故意设在家庭房间和主卧之间。警卫们负责在家人最脆弱的时候，也就是睡觉或在自己房间里放松时，保护家人。这个岗位总是由1d4 + 1名对商人王子极度忠诚并因其忠诚而得到丰厚回报的角斗士驻守。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_076",locationId:"loc_065",name:"14. 洗衣房",activation:{condition:{type:"always"},priority:0},skeleton:["楚尔特人对他们的服装和身体一样讲究——鉴于在南扎路港的气候下每个人都会出很多汗，这种过分讲究几乎是必需的。","这里每天洗衣服，然后花费数小时在晾衣绳上来回扇动，试图鼓励湿衣物在潮湿的空气中晾干。"],flesh:"楚尔特人对他们的服装和身体一样讲究——鉴于在南扎路港的气候下每个人都会出很多汗，这种过分讲究几乎是必需的。这里每天洗衣服，然后花费数小时在晾衣绳上来回扇动，试图鼓励湿衣物在潮湿的空气中晾干。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_077",locationId:"loc_065",name:"15. 仆人住处",activation:{condition:{type:"always"},priority:0},skeleton:["仆人住处与家庭卧室区域隔离开来，以确保安全。","它们并无特别之处。"],flesh:"仆人住处与家庭卧室区域隔离开来，以确保安全。它们并无特别之处。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_078",locationId:"loc_065",name:"16. 雨水收集器",activation:{condition:{type:"always"},priority:0},skeleton:["房子里的每个房间至少包含一个小水盆，自来水来自屋顶的水盆或由水车从桶里或地下蓄水池提升上来。"],flesh:"房子里的每个房间至少包含一个小水盆，自来水来自屋顶的水盆或由水车从桶里或地下蓄水池提升上来。",spotlightRefs:[],presentNpcIds:["npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_liara_portyr","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_079",locationId:"loc_065",name:"派系及其代表",activation:{condition:{type:"always"},priority:0},skeleton:["南扎路港是位于巨大半岛上的唯一的文明中心，这个半岛蕴藏着巨大的财富。","许多派系都希望利用这笔财富，他们都有代理人在城市中争夺影响力或在丛林中寻找机会。","其中一些可以帮助角色们，而其他一些则会试图阻碍他们。","翡翠联盟是一个广泛的野外生存主义者组织，他们通过根除不自然的威胁来维护自然秩序。","他们努力防止文明和荒野相互毁灭。"],flesh:`南扎路港是位于巨大半岛上的唯一的文明中心，这个半岛蕴藏着巨大的财富。许多派系都希望利用这笔财富，他们都有代理人在城市中争夺影响力或在丛林中寻找机会。其中一些可以帮助角色们，而其他一些则会试图阻碍他们。

翡翠联盟是一个广泛的野外生存主义者组织，他们通过根除不自然的威胁来维护自然秩序。他们努力防止文明和荒野相互毁灭。

在楚尔特，翡翠联盟主要关注于保护居民免受不死生物的威胁。南扎路港和贝路利安堡的一些向导公开与联盟有联系，还有一些是秘密成员或对其目标表示同情。该派系在丛林中维护着几个伪装得很好的前哨站。它们作为隐蔽的观察点，而不是前线战斗位置。

烈焰之拳是总部设在（并且极度忠诚于）博德之门的雇佣兵公司。烈焰之拳在楚尔特的贝路利安堡维持着一个永久性的要塞。从那里，烈焰之拳的巡逻队出击进入丛林"平定"领土并夺取失落的宝藏。烈焰之拳已经掠夺了梅兹罗的废墟。现在，这些雇佣兵和他们在博德之门的富有支持者最想做的就是对奥穆做同样的事，但他们在寻找这座失落的城市方面没有运气。烈焰之拳的研究者确信这座城市位于卢奥湖的南面，但在火焰之峰的东面，在恐惧之谷的西端。由于距离贝路利安堡很远，他们正在寻找冒险家来进行该地区的初步探索并定位他们认为将主要是被遗弃的废墟。

贝路利安堡的指挥官，也是楚尔特地区烈焰之拳组织中级别最高的成员是莉尔阿·波提尔（见附录D）。她拥有烈焰（少校）的军衔，在楚尔特拥有完全的自主权，只向博德之门的乌尔德·瑞文嘉德公爵汇报。波特会很高兴地指派她的一些雇佣兵陪同冒险者乘海路前往避难湾，甚至龟裂湾——这两个地方都是进入恐惧之谷西部地区的绝佳起点。

烈焰之拳内只认可六个等级：拳头（二等兵）、护手（下士）、操纵（中士）、火焰（中尉）、烈焰（少校）和元帅（将军）。

竖琴手是施法者和间谍，他们秘密地反对任何滥用权力的行为，无论是魔法还是其他形式。他们单独工作或组成小团体，在费伦各地收集信息，分析每个区域或王国的政治动态，并利用他们发现的信息在幕后帮助弱者、穷人和受压迫者。竖琴手只有在万不得已时才会公开行动。

阿图斯·辛贝尔，一位前竖琴手成员，正隐藏在楚尔特。他拥有一个叫做凛冬戒指的神器，其他竖琴手担心戒指落入邪恶之手。为了防止这种情况，一些竖琴手间谍正在南扎路港和楚尔特搜寻有关Artus下落的线索——表面上是为了保护戒指，但当他们找到它时会做什么则是一个未知数。定位Artus的魔法尝试是徒劳的，因为凛冬戒指能够保护自己及其佩戴者免受占卜法术和侦查传感器的探测。

一些城市和定居点联合起来形成了领主联盟（Lords' Alliance），这是一个积极致力于消除对他们共同安全和繁荣构成威胁的联盟。这个联盟是松散的——有些人甚至可能称之为不稳定。联盟的领导人将自己的利益置于其他城市同行之上，而特工们为了自己和他们自己的领主的荣誉和荣耀而工作，以牺牲较弱成员的利益为代价。

领主联盟中的关键人物是博德之门的大公爵乌尔德·瑞文嘉德，这座城市对楚尔特的事务有着既得利益。博德之门的旗帜飘扬在贝路利安堡的上空，该堡垒由拉文加德的臣属莉尔阿·波提尔指挥的烈焰之拳雇佣兵驻守。如果到了紧要关头，拉文加德会将博德之门的优先事项置于领主联盟之上。

像深水城和无冬城这样的其他领主联盟城市在南扎路港有行动人员，他们破坏非联盟势力如卡利姆杉、阿姆恩和特西尔扩大对楚尔特丰富资源控制的努力。这些代表大多数公开表明他们与领主联盟的关系，并自称为他们城市的大使，但他们也雇佣秘密特工来相互破坏对方的计划并执行不那么体面的任务。领主联盟资助进入半岛的测绘探险，目的是寻找更多它可以掠夺的宝藏或矿场。

Gauntlet之序的成员发誓要保护他人免受恶人的侵害。他们信任诸如Torm、Helm和Tyr等善良阵营的神祇，他们将信仰的力量、心灵和武器用于对抗邪恶。

该组织已经投入了大量资源来平息楚尔特的不死生物威胁。其前线基地，正义营地，在不死生物的冲击下被淹没。该组织毫不气馁，在丛林更深处建造了新的防御工事。被称为复仇营地，它已经陷入了艰难时期。其指挥官是一个名叫奈尔斯·断骨的不幸无能贵族。他的副官更有可能分享有用的信息或提供帮助，但前提是角色们能够以某种形式援助复仇营地作为回报。

战拳团契（Order of the Gauntlet）的所有成员都毫不畏惧，但许多探险队在面对使他们的训练陷入困境并与其心态相矛盾的条件时，表现不佳或遭遇彻底的灾难。

红袍法师在楚尔特的目的是寻找并窃取Soulmonger以献给萨扎斯坦。他们占领了乌塔欧之心并将其作为基地。他们的领袖是瓦琳朵拉·暗影斗篷。她留在乌塔欧之心，而她的Thayan手下则在Omu的废墟中搜寻Soulmonger下落的线索。有关Valindra的更多信息，请见"乌塔欧之心"。

Ytepka协会，也被称为三角龙协会，总部设在南扎路港，致力于防止任何个人或团体滥用权力和破坏自然的社会秩序。其成员主要是中立善良的Chultans。在许多方面，协会的目标与竖琴手（Harpers）相似。

伊特帕卡协会在解放南扎路港免受外国势力控制以及促进七位商人王子崛起方面发挥了重要作用。现在，其成员不懈地工作，以防止散塔林会和其他可疑派系接管政府或获得不当影响。伊特帕卡人还秘密地努力消除海盗的威胁，但他们一直未能找到海盗的基地或追踪到城市中的海盗间谍。那些能够确切地确定海盗基地或捕获他们的船只的人将获得丰厚的奖励。

目前Ytepka学会的活跃成员不足五十人。他们不公开宣传自己的成员身份，而是使用一个简单的手势来相互识别：左手举起，食指、中指和无名指伸出，代表三角龙的三只角。

当协会判断某人已经破坏了楚尔特的社会结构或即将犯下严重错误时，它会通过匿名发送一枚刻有三角龙图案的铁制令牌来发出警告。被标记的个人需要弄清楚令牌的含义，并采取措施纠正冒犯行为或弥补损失。如果该人忽视警告并继续冒犯协会，伊特帕卡人会从商人贵族那里获得执行惩罚的许可，他们将根据情况自行决定惩罚方式，包括但不限于采取制裁措施（见本章前面的"法律与惩罚"边栏）。

不幸的是，由于该社团的神秘性，没有多少人理解那些铁制令牌的含义，关于南扎路港的Ytepkas也存在很多误解。该社团也不回收其令牌，因此一些不择手段的人利用旧的（甚至是伪造的）令牌来吓走商业竞争对手。

散塔林会是一个不择手段的暗网组织，它试图在整个费伦（Faerûn）扩张其影响力和权力基础。其成员通过任何手段追求财富和权力，尽管该组织对公众的形象看起来要温和得多——散塔林会提供的是金钱能买到的最好的雇佣兵。

南扎路港的商人王子们雇佣了散塔林会守卫来保卫城墙，并雇佣散塔林会雇佣兵来保护丛林和山麓中的狩猎、伐木和采矿作业。黑网利用对城市的广泛访问权建立了自己的伐木营地和采矿作业。它还组织了寻宝远征队。此外，黑网间谍得知阿图斯·辛贝尔在楚尔特，他们已经组建了团队去寻找这位前竖琴手并从他手中夺取凛冬戒指。`,spotlightRefs:[],presentNpcIds:["npc_liara_portyr","npc_artus_cimber","npc_niles_breakbone","npc_valindra_shadowmantle","npc_eku","npc_faroul","npc_gondolo","npc_kupalu","npc_musharib","npc_qawasha","npc_river_mist","npc_salida","npc_shago"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`【法律与惩罚】商人王子们可以根据需要通过法令制定或修改法律，法官被期望自由但明智地解释法律。这样的制度似乎容易招致滥用和贿赂，但楚尔特法院出人意料地没有腐败。
奴隶制在南扎路港不是非法的，但是它被不赞成，商人王子们不会与奴隶贩子做生意，也不会给他们任何法律上的优待。
谋杀是非法的，但是可以从商人王子婕萨敏那里购买"授权"——合法许可去杀害某人或安排某人被杀。价格取决于预期受害者的知名度、授权的理由以及购买者的财富。最低价格是150金币；最高没有限制。授权的可用性并不意味着它们很常见——一年内卖出超过六个授权的情况很少。这与价格关系不大，而是因为如果传出谁购买了授权的消息，无法阻止受害者的朋友对最初的购买者进行授权。
尽管有着很高的野心，商人王子们的权力完全局限在城市之内。在其他地方，楚尔特遵循着牙齿和爪子的红色法则。一个人要么是捕食者，要么是猎物，而捕食者可能是一群不死生物，一只贪婪的异特龙，一个格朗狩猎队伍，Jahakan海盗，或者是Flaming Fist巡逻队。
如果角色们在荒野中遇到麻烦，翡翠联盟是一个可能的救援者。`},{id:"scn_083",locationId:"loc_065",name:"要做的事情",activation:{condition:{type:"always"},priority:0},skeleton:["南扎路港为游客提供了丰富的娱乐活动，但以下部分描述了角色们在出发探索楚尔特最黑暗的角落之前可能会参与的四项活动：","角色可以轻松在南扎路港的任何市场以标准价格购买到大多数普通物品。","在楚尔特，任何在丛林中生存所需的物品都被视为普通物品。","通过商人王子购买特殊物品的唯一替代方案是与黑市打交道，在南扎路港，黑市极为隐秘；","商人王子严厉打击竞争者。"],flesh:`南扎路港为游客提供了丰富的娱乐活动，但以下部分描述了角色们在出发探索楚尔特最黑暗的角落之前可能会参与的四项活动：

购买特殊物品

恐龙赛跑

寻找向导

收集信息

角色可以轻松在南扎路港的任何市场以标准价格购买到大多数普通物品。在楚尔特，任何在丛林中生存所需的物品都被视为普通物品。

通过商人王子购买特殊物品的唯一替代方案是与黑市打交道，在南扎路港，黑市极为隐秘；商人王子严厉打击竞争者。在旧城区、马拉尔的咽喉或提里奇锚地联系黑市商人需要半天时间，并且需要进行一次成功的 DC 15 魅力（欺瞒）检定，以便在正确的时间向正确的人提出正确的问题。要确定某件物品的黑市价格，请将该物品的正常价格乘以 1d4 + 2。如果需要异常大量的物品，则将价格乘数增加1。

Chultan市场中有以下特殊商品出售。

一艘独木舟可以在南扎路港以50金币的价格购买。它最多可容纳六个中型生物，最大速度为每小时2英里。除此之外，它与划艇相同。

南扎路港的独木舟销售由商人王子艾珂内-阿法控制。

驱虫剂可在南扎路港以两种形式购买：香块或油腻的药膏。商人王子克薇欧泽控制着这两种产品的销售。

一块香的售价为1银币。点燃后，它可以燃烧8小时，并在其为中心的20尺半径范围内驱赶普通昆虫。

一个葫芦或小瓶装的药膏，售价为1金币，包含20次使用的无臭油脂。一次使用可以保护使用者在24小时内免受普通昆虫的侵扰。这种药膏是防水的，所以即使下雨也不会被冲掉。

雨水收集器是一种简单的装置，由一个5尺见方的皮革防水布和带有腿的木制框架组成。当防水布拉伸在木制框架上时，它形成一个可以收集雨水的盆地，每英寸降雨量可以收集2加仑的饮用水，并最多可储存8加仑。防水布和木制框架可以折叠起来方便携带。一个雨水收集器的成本是1金币，重量为5磅。

商人王子艾珂内-阿法控制着南扎路港雨水收集器的销售。

蜜酒是一种由蜂蜜制成的琥珀色发酵饮料。它比啤酒或麦酒更常见，也更受欢迎。一杯蜜酒在南扎路港卖 4 cp，在贝路利安堡卖 6 cp。一桶蜜酒容量为 1 加仑，在南扎路港卖 2 sp，在贝路利安堡卖 3 sp。

特吉酒的销售由商人王子克薇欧泽控制。

伊克瓦（发音为YICK-ul-wah）是一种简单的近战武器，是楚尔坦战士的传统武器。伊克瓦由一根3尺长的木柄和一把长达18英寸的钢制或石制刀片组成。它的价格是1金币，击中时造成1d8穿刺伤害。尽管它具有投掷武器的特性，但伊克瓦并不是为投掷而设计得很好平衡（射程10/30尺）。

商人贵族艾珂内-阿法控制着南扎路港的yklwas销售。

这座城市以每周在街道上举行的恐龙赛跑而闻名。恐龙被绘有鲜艳的图案，它们的骑手试图引导它们沿着蜿蜒穿过港口和城市四座小山的赛道前进。观众很少受伤，但对恐龙和它们的骑手来说，这是一种危险的运动。

一个典型的比赛日有三场比赛：一场是四条腿的野兽比赛，一场是两条腿的野兽比赛，还有一场是无限制的"无链"比赛。参与的恐龙大多是幼体，因为完全长大的恐龙可能体型过大，骑手难以控制。除了无链比赛外，恐龙都戴着坚固的口套，它们的爪子和角都被磨钝了。

四足赛跑主要由年轻的甲龙和三角龙占据优势，但当与小型骑手配对时，二齿龙也表现出色。双足赛跑的大多数参赛者是鸭嘴龙和矮暴龙（同样与小型骑手配对）。无拘无束的赛跑中，选手们骑乘各种恐龙，包括年轻的异特龙和非常年轻的暴龙。

角色们可以对恐龙赛跑下注，以资助丛林探险或赚取一些额外的现金。赛跑者、可用赔率和获胜机会列在恐龙赛跑下注表中。下注范围可以从1铜币到500金币。下注后，为每个下注掷一个骰子。输掉的赌注将损失全部下注金额。赢得的赌注根据表格进行赔付。下注可以是为了恐龙赢得比赛、获得名次、表现突出，或者在比赛过程中做特定的事情（比如攻击另一个赛跑者或把骑手甩下来），因此许多赌注可以在单次比赛中获胜。

输家应该及时支付赌金。那些不支付的人将被债务收集者拜访，由楚尔坦的断腿者支持（1d4 + 1名暴徒或角斗士，取决于赌徒的等级和声誉）。南扎路港的赌注经纪人从不忘记债务；即使在丛林探险一年，也不足以抹去未付的赌博损失。

玩家角色可能会因为自己的兴趣爱好或被赛车队接触而参与恐龙赛跑。在这种情况下，你需要进行赛跑游戏。如果你让那些角色没有直接参与的玩家来控制至少一些NPC赛车手，这可能会非常有趣。鼓励大家全力以赴地比赛，即使为了小组的最佳利益，特定的恐龙应该获胜。

一场比赛的长度为300英尺；这是抽象的，因为实际上比赛会覆盖更多的地面。每轮比赛的骑手都需要进行一次感知（驯兽）检定；不同类型恐龙的DC值列在"赛跑恐龙"表格中。每次成功的驯兽检定，恐龙的速度列表中的第一个数字将被添加到它的"奔跑累计值"中。如果检定失败，恐龙的累计值在该轮中不会增加。当某位赛手的累计值等于或超过300时，那只恐龙将越过终点线。赛手可以通过猛烈鞭打动物来尝试以更高的速度移动；在这种情况下，驯兽检定将具有优势，但恐龙还必须在本轮结束时成功通过一次DC 10体质检定，否则其速度将在剩余的比赛中减半。

不涉及主动权。骑手可以按任何顺序进行他们的驯兽检定，或者同时进行。如果有两只或更多恐龙在同一轮次冲过终点线，那么得分最高的获胜。如果得分相同，则赛跑者打平。在平局的情况下，赛道旁的投注区域很可能会爆发斗殴。

在无链事件中，如果一轮结束时它们的得分相差不超过50，恐龙可以攻击其他恐龙。每只恐龙的相关战斗具体数值都列在恐龙赛跑表格上。如果一只恐龙的生命值降至起始生命值的一半或更少，骑手进行驯兽检定时会受到不利影响。

请注意，如果允许骑手攻击，这个活动更有可能变成一场直接的恐龙战斗，而不是任何类似比赛的东西。培养一只赛跑恐龙是困难且昂贵的。大多数拥有者不愿意在每周的血腥盛宴中失去一只——特别是一只快速的。

向导可以在南扎路港或贝路利安堡被雇佣。所有南扎路港的向导都必须注册并在乔巴的赞助下服务，他会从他们的收入和发现中抽取丰厚的分成。散塔林会在城市中也有一个黑市网络提供向导。乔巴知道这个网络的存在，并且明确表示，未在他那里注册的向导将会被殴打、目盲或斩首。

为乔巴工作的向导在旅馆和酒馆外的公告板上或南扎路港的海事办公室留下他们的联系信息。

本节描述了多位向导。否则，向导的收费标准是每天5金币，通常情况下需要预付30天的费用，即使预计探险时间短于此。成功的 DC 15 魅力（游说）检定可以将价格谈判到每天4金币，如果检定成功超过5点或更多，则可以降至每天3金币。或者，向导可能会放弃工资以换取等额的宝藏份额。

你可以进行角色扮演，与向导进行初步会议和对话，或者简单地向玩家描述所有可用的向导，并让他们选择。为了帮助团队选择一个向导，你可以给玩家提供附录 E中的手册2到10的副本。这些手册让玩家了解每个向导的性格。你可以一次性给玩家几个手册，或者只提供他们找到的向导的手册。

虎人（南扎路港）)

婀扎卡（NG 女性楚尔特人类 虎人) 在南扎路港工作。她尽可能长时间地向角色隐瞒她的狼人身份，并会免费为冒险家提供向导服务，如果他们同意帮助她从火指部落的翼手兽那里取回一个被盗的物品。如果被问及被盗物品，婀扎卡只回答说它是一件家传宝物：一个雕刻成老虎面孔的木制面具。实际上，它是一个野兽面具（见附录C）。

婀扎卡以虎的形态在丛林中漫无目的地漫游。她熟悉萨贾·恩巴扎，这位强大而睿智的守秘纳迦居住在奥罗伦加，如果角色们寻求指引，她很乐意带领他们去找纳迦。

婀扎卡身高6尺，体重大约150磅。她不会自愿传播她的狼人诅咒。她也害怕高处，不会自愿置身于有超过60尺坠落危险的情境中。婀扎卡的伤害免疫并不能保护她免受坠落伤害。

伪装的羽蛇（南扎路港）

依库 是一只变形为中年Chultan女性的 羽蛇。她是少数知道Omu位置的人之一，尽管她并不宣传这一事实。这只 羽蛇 正在寻找冒险家帮助清除侵染丛林的邪恶。她只愿与善良阵营的冒险家合作。

在人类形态时，依库身着浅蓝色长袍，手持一根雕刻成风格化羽蛇形象的拐杖。在这个形态中，依库身高5尺6英寸，体重110磅。她与Kir Sabal的鸟羽人族关系良好，并且曾多次前往Nangalore采集稀有花朵。依库还知道守护Omu的邪恶石像鬼，尽管她从未与它们战斗过，以及Orolunga的守秘纳迦，其预言能力是传奇的。

依库对姆巴拉的人民怀有极大的爱和尊重，他们被一个名叫普普奶奶的绿巫婆欺骗并吃掉了。依库认为这个巫婆是楚尔特最大的邪恶之一。

无能的寻宝者（南扎路港）

法鲁尔（NG 男性 Calishite 人类 斥候）和 冈多洛（CG 男性 lightfoot halfling 斥候，生命值为13）是在南扎路港运气不佳的两个花花公子。被宠坏且自大的 法鲁尔 被他恼怒的父母送到南扎路港，并告诉他在那里发财。带着满满的钱财和对冒险的渴望，法鲁尔 带来了他的饮酒伙伴 冈多洛。他们一起认为，他们很快将在遥远的海岸上过上奢侈的生活。在几个月内，他们在恐龙赛跑中挥霍了大部分法鲁尔的现金，并欠下了许多赌徒和几位商人王子的债务。他们几个月放纵的唯一收获是一只名叫Zongo的放屁赛跑三角龙。他们买来参加比赛，但它慢得无可救药；现在他们把Zongo当作驮兽使用。

在绝望中，冈多洛从一个发烧的探险家那里购买了一张藏宝图，这位探险家需要现金买票返回博德之门。奇迹般地，这张地图准确地指示了Needle's Bones的位置。这对不幸的搭档希望被冒险家雇佣，以平等股份的方式，这样他们就可以带领团队前往他们认为将轻易获得的龙穴宝藏。

法鲁尔身高5尺10英寸，体重175磅。他讲述自己战斗勇猛的壮丽故事，但他只在紧急情况下使用他的短剑。

冈多洛 高3尺6英寸，重80磅（松软状态下）。他自认为是个诗人、拳击手和哲学家，当他真正事实用尽时，会编造一些听起来很重要的事实。他有在危险边缘侥幸逃脱的本领，并且拥有一般半身人拥有的运气。

疯狂的矮人屠龙者（南扎路港）

三年前，休是一支试图重新开放巨龙之心矿井的矮人探险队的成员。这支探险队遇到了红龙火种。只有休一个人逃脱了，龙咬下了他的左臂。休想返回矿山并杀死巨龙，但他需要一群坚定的冒险家来帮助他。休嘴上说着他能带他们去任何他们想去的地方，但等到角色们正式雇用他作为向导之后，他就只会把他们带去巨龙之心矿井。

砍伐者 是一位盾矮人狂战士，有以下变化：

Hew 是混乱中立。

他有求生 +4。

他对毒素伤害具有抗性，并且在对被中毒的豁免检定上有优势。

他具有达到60尺范围的黑暗视觉。

他挥舞的是一把战斧而不是双手斧，每次命中造成7（1d8 + 3）点挥砍伤害。由于他失去了左臂，他不能双手握持武器。

白化侏儒（南扎路港）

穆沙瑞卜（守序善良男性白矮人精魂武者；通常情况下，他会将问题和答案直接指向队伍中的矮人，除非没有其他选择。

穆沙瑞卜 身高4尺5英寸，体重140磅。他携带着一把名为Skullbash的木槌。他的盔甲是用恐龙的铲状骨头制成的，上面布满了武器、爪子和牙齿造成的切口和疤痕。

楚尔坦德鲁伊和植物巨人（贝路利安堡）

卡瓦沙（NG男性Chultan 德鲁伊) 是翡翠联盟的成员，常驻于贝路利安堡。这位德鲁伊与一个名为Kupalué的孢子人伙伴同行，Kupalué是一个Chultan词汇，意思是"行走的杂草"。卡瓦沙通常简称他的伙伴为杂草。他们使用自己独特的手语进行沟通。查看附录D以获取vegepygmy的具体数值。

卡瓦沙 希望摆脱丛林中的不死生物威胁，因此他故意带领冒险家穿越充满不死生物的地区。当他穿越丛林时，卡瓦沙 会大声说出他周围不寻常的动植物的名字。这位德鲁伊还有在怯蕴阿灵（见附录D）居住的地方露营的诀窍，并且他有处理元素精灵的经验。

卡瓦沙亲眼目睹了Flaming Fist对没有适当文件就探险楚尔特的冒险家的虐待。

卡瓦沙 身高6尺2英寸，体重180磅。Weed 身高3尺，干燥时重约30磅（湿润时50磅）。

斑猫人兄妹（南扎路港）

河雾 和 酒瓶（CG 女性和男性 斑猫猎人；见 附录D）是兄妹，与 散塔林会 有联系。因此，他们不向任何商人王子支付费用或效忠；他们保持业务低调，只在 Malar's Throat 或 Tiryki Anchorage 的阴暗房屋中与潜在客户会面。他们互相称呼对方为 River 和 Flask。

River大约身高5尺5英寸，体重100磅。她穿着皮甲，戴着眼罩。（她小时候因为投石器的意外失去了右眼。）River在人群中表现得鬼鬼祟祟，感到不自在，更喜欢她真正感到自在的丛林。

Flask 很少说话，除非是同意 River 的观点，经常重复 River 话语的最后几个词（带有一点口齿不清），同时点头表示同意。尽管他天性不爱说话，但他喜欢和人在一起，对于一个塔巴西斑猫人来说，他甚至可能被认为是社交的。他身材高大瘦长（5尺8英寸，140磅）。

River和Flask可以引导角色前往Firefinger和Dungrunglung。他们还听说过在Mbala有一个老妇人的故事，她能够让死者活化，以这样的方式让僵尸保留他们在生命中所拥有的能力和记忆。

南扎路港的散塔林会代理人已指示河雾与酒壶留意阿图斯·辛贝尔。如果他们遭遇阿图斯，斑猫人会尽可能多地了解他。除非受到激励不这样做，否则下次他们返回南扎路港时，斑猫人会向他们的散塔林会主人报告所见所闻。

蛇发间谍（南扎路港）

萨莉达（NE 女性 Chultan 纯血原体蛇人，具有 求生 +5）在南扎路港伪装成人类向导，但她实际上为拉兹·纳斯工作。她让他了解任何前往南部寻找Omu的人的活动。他们通过短讯石进行交流。萨莉达将她的短讯石放在一个袋子里，并尝试作为向导、战士，甚至是卑微的搬运工或划桨手加入玩家角色的探险队。

萨莉达 身高5尺4英寸，体重120磅。她身材健美，完全符合一位经验丰富的探险家的形象。她的装束掩盖了透露她真实身份的鳞片斑块。萨莉达 擅长制造丰富多彩的侮辱言辞，并编造可信的谎言来掩盖她的真实背景。她的机智使她成为一个愉快的旅行伴侣——她充分利用这一特点加入角色们的远征。

楚尔坦角斗士（贝路利安堡）

鲨狗（混乱善良男性楚尔坦角斗士，拥有求生技能+7）是楚尔坦人，也是南扎路港商人王子之一绛则的唯一儿子。他在贝路利安堡工作，尽管他自称是独立行动者，但实际上与烈焰之拳佣兵团有勾结。鲨狗曾领导多次烈焰之拳的探险队进入丛林，清除不死生物，尽管他非常害怕被变成僵尸或食尸鬼。

尽管他有所恐惧，鲨狗知道必须击败不死生物。这就是他与烈焰之拳合作的原因；商界王子们对来自不死生物的威胁感到悲哀，但他们除了雇佣守卫来保卫南扎路港之外，不愿意支付采取有效行动的费用。他的母亲认为她"招募"了他来监视烈焰之拳，但他的同情心在雇佣兵这边，他很少向她提供任何秘密或有用的信息。

鲨狗 高6尺3英寸，体重220磅，肌肉线条分明，面带友好的微笑。他的主要目标是给莉尔阿·波提尔留下深刻印象，以在烈焰之拳中获得一席之地。当鲨狗作为他们的向导时，角色们在进行魅力检定时，影响烈焰之拳成员时获得优势。

对角色们来说，挑战不在于让人们告诉他们关于楚尔特的信息；而是从谣言、推测和神话的大山中筛选出真相。

最佳交谈对象是那些真正在丛林中工作或生活的人：猎人、向导和探险者。开始交谈不需要进行技能检定，但为了获取可靠的信息，角色们必须前往知情人士聚集的地方。每花一小时与知识渊博的旅行者交谈，角色可以进行一个DC 15感知（洞悉）检定。如果检定成功，投掷百分比骰并参考"查尔特谣言表"以确定角色获得的信息。`,spotlightRefs:[],presentNpcIds:["npc_ekene_afa","npc_jobal","npc_eku","npc_nanny_pu_pu","npc_faroul","npc_gondolo","npc_hew_hackinstone","npc_musharib","npc_qawasha","npc_river_mist","npc_flask_of_wine","npc_artus_cimber","npc_salida","npc_ras_nsi","npc_shago","npc_zhanthi","npc_liara_portyr","npc_kupalu"],availableInfoIds:["info_toa_death_curse"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[31],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`主要例外是重甲，在楚尔特很罕见，因此价格高昂：重甲的价格是玩家手册中价格的三倍，如果角色成功通过一个DC 15魅力（游说）检定来讨价还价，价格则为两倍。
无论是哪种驱虫剂都无法抵御巨型昆虫或附录A中描述的怪物图鉴中的邪恶昆虫群。
为了简化，骑手不能攻击或被攻击，但是有些残忍倾向的DM可能会想要放宽这个规则。
如果角色同意某些条件，有些向导会免费工作。
【向导作为队伍成员】被冒险家雇佣的向导成为NPC队伍成员，并得到等额的经验值(XP)份额。然而，向导不会像玩家角色那样获得等级。
您可以使用《地下城主指南》第4章中的可选忠诚规则第四章来追踪那些不效忠于秘密主人的向导的忠诚度。不忠诚的向导不会冒险去救玩家角色，甚至可能为了自保而完全抛弃队伍。本章中描述的向导有超越帮助角色生存的目标。帮助向导实现他们的个人目标可以增加他们的忠诚度。
一个特别忠诚的向导（忠诚度得分10或更高）会跟随角色进入像奥穆或九神之墓这样危险的地方。一个不太忠诚的向导（忠诚度得分1到9）可能会选择在地点外等待角色，而不是完全放弃队伍。
当角色们遇到婀扎卡时，给玩家们一份附录 E中的传单2副本。
当角色们遇到依库时，给玩家们一份附录E中手册3的副本，见附录 E。
如果角色们雇佣她作为向导但不确定去哪里，她建议去拜访守秘纳迦。
如果角色们在依库的陪同下前往姆巴拉附近任何地方，她会请求他们帮助她彻底摆脱普普奶奶。
当角色们遇到法鲁尔和冈多洛时，给玩家们一份附录E中手册4的副本，见附录 E。
当角色遇到休时，给玩家一份位于附录 E中的讲义5的副本。
当角色们遇到穆沙瑞卜时，给玩家们一份附录E中手册6的副本，见附录 E。
参见附录D）很乐意担任离开南扎路港的向导，但他暗中寻找具备适当技能和毅力的冒险者，以帮助他夺回赫拉卡玛尔——或者至少潜入其宝库，取回摩拉丁之握，这是一件矮人遗物。
如果玩家角色中有任何矮人，穆沙瑞卜会锁定他们，并诉诸他们对矮人族的热爱，请求他们帮助他夺回他氏族的祖传熔炉。
当角色们遇到卡瓦沙和Kupalu&eacute;时，给玩家们一份附录E中手册7的副本，见附录 E。
如果角色们雇佣了卡瓦沙，他建议他们在离开贝路利安堡之前也购买一份探险许可证。
当角色们遇到河雾和酒瓶时，给玩家们一份附录 E中的传单8副本。
当玩家遇到萨莉达时，给玩家一份附录 E中的讲义9的副本。
当角色们遇到鲨狗时，给玩家们一份来自附录 E的手册 10 的副本。`,randomTableIds:["tbl_083_2"],mapGeometry:{imageRef:"adventure/ToA/016-0211.webp"},offerableQuestIds:["qst_main_toa"]},{id:"scn_09c",locationId:"loc_09c",name:"楚尔特之地",activation:{condition:{type:"always"},priority:0},skeleton:["当冒险家们开始进入楚尔特的心脏地带时，他们可以选择从几个地点中的任何一个出发。","南扎路港是最明显的起点。","它提供了通过独木舟轻松到达两条主要河流——索申斯塔河和提尔基河的途径。","沿这些河流的旅程为探险者提供了极好的磨合探险，适合那些刚开始了解这片无情土地的探险者。","角色们也可以从贝路利安堡出发，或乘船前往沿海登陆点，如贾哈卡湾、基彻尔湾、避风港湾、希尔库湾和扑龟湾。"],flesh:`当冒险家们开始进入楚尔特的心脏地带时，他们可以选择从几个地点中的任何一个出发。南扎路港是最明显的起点。它提供了通过独木舟轻松到达两条主要河流——索申斯塔河和提尔基河的途径。沿这些河流的旅程为探险者提供了极好的磨合探险，适合那些刚开始了解这片无情土地的探险者。角色们也可以从贝路利安堡出发，或乘船前往沿海登陆点，如贾哈卡湾、基彻尔湾、避风港湾、希尔库湾和扑龟湾。

楚尔特是一片冒险之地，本章节旨在使角色的荒野之旅难忘。设计上，冒险地点并不针对特定等级的角色。如果冒险队伍相对较弱，玩家需要选择是逃跑而不是战斗，谈判而不是攻击，还是投降而不是死亡。你可以让一个NPC出现提供帮助。无意识的捕食者可能会被突然的火山爆发或地震吓跑。简而言之，总有办法将队伍的不幸转化为生存的机会。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[37],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`作为DM，你需要灵活应对，尽可能使故事向前推进。
如果冒险者遭遇不利，你可以让怪物突然撤退，要求队伍投降，或者造成非致命伤害。`,mapGeometry:{imageRef:"adventure/ToA/017-0301.webp"}},{id:"scn_09d",locationId:"loc_09c",name:"远征开始",activation:{condition:{type:"always"},priority:0},skeleton:["以下部分包含的信息将帮助您顺利进行这部分冒险。","对于队伍穿越荒野的每一天，请按照以下步骤进行：","使用海报地图，确定派对目前所在的六边形。","如果派对迷路了，不要与玩家分享这些信息；","否则，请通过指向楚尔特地图上适当的六边形来向玩家展示派对的位置。"],flesh:`以下部分包含的信息将帮助您顺利进行这部分冒险。对于队伍穿越荒野的每一天，请按照以下步骤进行：

使用海报地图，确定派对目前所在的六边形。如果派对迷路了，不要与玩家分享这些信息；否则，请通过指向楚尔特地图上适当的六边形来向玩家展示派对的位置。

让玩家决定队伍想要前往的方向，以及队伍计划以正常速度、快速还是慢速行进（见下文"旅行距离"）。

让玩家选择一个导航员，然后代表导航员进行一次感知（求生）检定，以确定派对是否会迷路（见下方"导航"）。

全天检查随机遭遇（见附录 B）。

在一天结束时，检查是否有任何队伍成员脱水（见下文"脱水"）。

在楚尔特的地图上，每个六边形的宽度为10英里。以正常速度移动的角色步行可以通过沿海、丛林、山地、沼泽或荒地地形每天移动1个六边形。如果他们乘独木舟在河流或湖泊上旅行，每天可以移动2个六边形。沿河流上下游的旅行速度是相同的；河流流速如此缓慢，以至于几乎感觉不到流动。如果没有独木舟，沿河流的旅行速度与周围地形相同。独木舟在沼泽中每天可以移动1个六边形。

如果掷出3或4，他们那天额外前进一个六边形。以快速步伐移动的角色对他们的被动感知（察觉）得分有-5的惩罚，这使他们更有可能错过线索并走进伏击。

如果是1或2，那天他们少前进一个六边形（换句话说，乘独木舟前进1个六边形或步行不前进）。如果是其他结果，他们的谨慎会得到回报，他们可以像正常速度移动的团队一样行进相同的距离。以慢速移动的角色可以悄无声息地移动。只要他们不在开阔地带，他们就可以尝试突袭或悄悄绕过他们遇到的其他生物。

你可以跟踪实际覆盖的距离而不是通过六边形来跟踪移动（以正常速度每天10英里，以快速每天15英里，或以慢速每天9英里），但如果团队每天改变速度，这可能会比它值得的更麻烦。

具有30尺飞行速度的角色可以每小时行进4英里。

让玩家指定一名队伍成员作为领航员。领航员可能是NPC，比如向导，队伍可以每天更换其领航员。

检定的结果决定了团队在当天是否会迷路。检定的DC基于当天最常见的地形：海岸和湖泊为 DC 10，丛林、山脉、河流、沼泽和荒地为 DC 15。如果团队当天以慢速度行进，则在检定上获得+5加值；如果以快速度行进，则施加-5减值。如果在河流上跟随支流而非主流，也有可能迷路。

如果检定成功，导航者能在整个白天准确地知道队伍在玩家的楚尔特地图上的位置。

如果检定失败，队伍就会迷路。地图上的每个六边形都被其他六个六边形包围；每当迷路的队伍移动1个六边形时，掷一个d6来随机确定队伍进入的邻近六边形，并且不要向玩家透露队伍的位置。在队伍迷路期间，玩家不能在他们的Chult地图上确定团队的位置。下一次导航者在进行感知（求生）检定以导航时成功，向玩家揭示队伍的实际位置。

探索楚尔特的角色需要大量的水来保持水分。河流和地面上的水不适合饮用，除非先煮沸。如果他们有雨水收集器（见"购买特殊物品"），角色可以使用它收集雨水，然后将水储存在便携容器中。

每天结束时，任何未饮用至少2加仑淡水的角色必须成功通过一项DC 15的体质豁免检定，否则将承受1级力竭。以快速步旅行而非正常或慢速步旅行的角色，在对抗脱水的豁免检定中受到–5的惩罚。

携带驮兽和其他动物的角色也必须确保它们有充足的食物和水。恐龙以及其他原生于楚尔特（Chult）的生物，只要处于它们的原生栖息地，就可以自行觅食和饮水。

以下疾病可能会影响到探索楚尔特丛林的巨人和类人生物。请记住，少效恢复和类似的魔法可以治愈疾病。

一种魔法雾气悄悄穿过楚尔特的丛林。接触这种稀薄、蓝色、无气味的雾气可以使巨人和类人生物感染蓝雾热。一个en=Dispel Magic法术可以在施法者选择的法术范围内的20尺平方区域内消灭雾气。通常，这种雾气的遭遇会覆盖1d6个这样的区域（400-2,400平方尺）。

接触到雾气的巨人或类人生物必须通过 DC 13 的体质豁免，否则将感染蓝雾热。受感染的生物在豁免失败后 1d6 小时内开始出现幻觉，看到上蹿下跳的蓝色猴子，这些幻觉持续到疾病结束。该生物每24小时可以重复进行一次豁免，成功则结束效应。

来自楚尔特丛林和沼泽的昆虫携带这种疾病，颤抖病。最简单的防护措施是在所有暴露的皮肤上涂抹一层驱虫药膏（关于驱虫剂的费用，请参见"购买特殊物品"）。

在遭遇战结束时，受到昆虫群袭或来自巨大蜈蚣、巨大蝎子或巨大黄蜂伤害的巨人或类人生物将暴露于疾病中。自从上次长休以来没有使用驱虫剂的人，在完成长休时将暴露于疾病中。

暴露在该疾病下的巨人或类人生物必须进行一次 DC 11 的体质豁免，豁免失败则被感染。具有天生护甲的生物在该豁免上具优势。受感染的生物在 2d6 小时后表现出症状，包括视力模糊、失去方向感、体温突然下降，无法控制的战栗和牙齿打颤。

一旦症状开始，受感染的生物在消耗生命骰时回血时，只能获得正常恢复的生命值的一半，并且无法从长休中恢复生命值。被感染的生物的属性检定和攻击检定具劣势。在长休结束后，受感染生物重骰该豁免，豁免成功则摆脱该疾病。

被称为咽喉水蛭的微小寄生虫会感染楚尔特丛林、沼泽和河流中的水源。任何喝下了受污染的水的巨人或类人生物必须进行一次 DC 12 的体质豁免，豁免失败则感染咽喉水蛭。症状立即发作，包括喉咙发炎和呼吸急促。1d6 小时后，受感染角色提升 1 级力竭，持续至该疾病被治愈为止（下列情况除外）。每次长休结束时，受感染生物必须重骰该豁免。豁免失败则该生物的力竭增加 1 级；豁免成功则该生物的力竭降低 1 级。如果一次成功的豁免使受感染生物的力竭降低至 0，则该生物从该疾病中恢复。

冒险者可以通过只喝雨水、或经过煮沸的水、或被魔法净化的水来避免感染咽喉水蛭。

楚尔特拥有种类繁多的植物、野兽、怪物和智慧生物。与当地野生动物的随机遭遇不可避免，并有助于使团队的探险成为一次难忘的经历。附录 B 包含了在荒野中生成随机遭遇的指南。

不死生物几乎将人类文明从半岛上挤出，除了几个孤立的前哨站，那里的楚尔坦人及其盟友在墙后避难。地图2.1显示了不死生物最密集的地方。角色通过标有黑色骷髅和交叉骨图标的领土时，很可能会有随机的不死生物遭遇战。在标有红色骷髅和交叉骨图标的领土，遭遇不死生物的可能性增加。大多数向导对这些领土非常熟悉。在涉及不死生物的问题上，通过河流旅行比通过陆地旅行更安全，因为不死生物最多是拙劣的游泳者，而且因为可以在独木舟上快速加速并穿越水域逃离，比在错综复杂的丛林中逃跑更容易。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[37],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色以快速步伐前进，处理他们进展的最简单方式是掷一个d4。
如果角色们保持缓慢的步伐，掷一个d4。
【阿图斯·辛贝尔在哪里？】阿图斯·辛贝尔和他的旅行伙伴龙饵是善良阵营的NPC，可以帮助角色实现他们的目标。两者都在附录D中描述。在冒险期间，Artus和龙饵要么在寻找Orolunga，要么在南扎路港收集物资和信息。他们可以在半岛上的任何地方被遇到。角色有很小的机会作为随机遭遇遇到Artus和龙饵（见附录 B）。
如果阿图斯和龙饵没有作为随机遭遇出现，以下是一些他们可能出现的地方：
正义营地（探索废墟）
乌塔欧之心（监视红袍法师）
贾哈卡锚地（试图解救被困在海盗地牢中的囚犯）
Kir Sabal（从鸟羽人或Princess 姆瓦克丝娜瑞收集信息）
奥罗隆加（与萨贾·恩巴扎商议）
几乎在丛林的任何地方，逃离一群尖叫的食尸鬼们，一群食人的部族武者，或者一只暴龙丧尸（见附录D）
阿图斯不太愿意透露他探索楚尔特的原因。在过多透露之前，他试图了解角色们的意图。一旦他确信他们都站在同一战线，他就会交换他所知道的信息（这取决于你想要告诉角色的信息量）以换取角色们所知道的信息。一旦阿图斯和龙饵意识到灵能者及其所带来的危险，他们非常乐意帮助队伍摧毁它。
任何包括阿图斯和龙饵的队伍将更容易克服冒险的挑战。然而，阿图斯正被邪恶势力追捕。霜巨人、散塔林会、藏妲拉（见附录D）、瓦琳朵拉·暗影斗篷（见本章后面的"乌塔欧之心"）和泰伊的红法师可以随时出现并试图捕获阿图斯。如果阿图斯认为他的存在正危及角色们，他将离开队伍并带走龙饵。
在每个新的旅行日开始时，DM 代表导航员进行一次感知（求生）检定。
如果角色穿着中甲、重甲或厚重的衣物，则此豁免检定带有劣势。
有关基于生物体型的基本需求，请参阅城主指南第五章中的"粮食与水"。
【治愈已死亡角色的方法】如果一个玩家角色在探索楚尔特荒野时死亡，一个NPC向导可能会建议派对将其死去的成员带到鬼魂村庄姆巴拉。据传闻，那里居住着一位强大的女巫。根据当地传说，这位女巫与骨骼之主，一位赋予她创造保留其原有个性的僵尸的神，签订了契约。有关这位所谓女巫的更多信息，请参见本章后面的"姆巴拉"。`,mapGeometry:{imageRef:"adventure/ToA/018-0302.webp"},offerableQuestIds:["qst_main_toa"]},{id:"scn_0aa",locationId:"loc_09c",name:"楚尔特的地点",activation:{condition:{type:"always"},priority:0},skeleton:["地图2.1描绘了楚尔坦半岛，并标出了关键地点。","相同的地图出现在海报地图的一侧。","本章其余部分描述了这些关键地点，它们按字母顺序排列，以便于参考。","如果您希望角色发现并探索特定的地点，您可以移动该地点，使其沿着他们的路径，并在必要时给它一个新的名称。","例如，地精村庄Yellyark不必位于地图上标记的位置。"],flesh:`地图2.1描绘了楚尔坦半岛，并标出了关键地点。相同的地图出现在海报地图的一侧。本章其余部分描述了这些关键地点，它们按字母顺序排列，以便于参考。

如果您希望角色发现并探索特定的地点，您可以移动该地点，使其沿着他们的路径，并在必要时给它一个新的名称。例如，地精村庄Yellyark不必位于地图上标记的位置。您可以将它放置在任何您想要的地方，或者创建另一个具有类似配置的地精村庄。本章描述的许多其他地点同样具有适应性。除了重新定位地点外，您还可以添加或移除怪物和陷阱，使其变得更难或更容易。

失落之城奥穆在第三章中有描述。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[41],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_0ac",locationId:"loc_0ac",name:"阿尔达尼盆地",activation:{condition:{type:"always"},priority:0},skeleton:["索申斯塔河和塔斯河从这片沼泽高地盆地流出，这里是恐龙和成群的咬人昆虫的热门觅食地。","高耸的高原和密集植被构成的墙壁环绕着这片沼泽。","许多楚尔特人还记得童年时关于那些生活在他们家乡河流和湖泊中的诡异龙虾人的传说。","几十年来，没有可靠的目击者报告过与阿尔达尼的遭遇，因此大多数楚尔特人认为阿尔达尼已经灭绝。","事实上，龙虾人已经撤退到这个盆地的隐秘湖泊中，在那里他们隐藏了整整一个世纪。"],flesh:`索申斯塔河和塔斯河从这片沼泽高地盆地流出，这里是恐龙和成群的咬人昆虫的热门觅食地。高耸的高原和密集植被构成的墙壁环绕着这片沼泽。

许多楚尔特人还记得童年时关于那些生活在他们家乡河流和湖泊中的诡异龙虾人的传说。几十年来，没有可靠的目击者报告过与阿尔达尼的遭遇，因此大多数楚尔特人认为阿尔达尼已经灭绝。事实上，龙虾人已经撤退到这个盆地的隐秘湖泊中，在那里他们隐藏了整整一个世纪。

当天空晴朗时，从远处50英里外也能看到乌塔欧之心漂浮在沼泽上（每天掷一个1d4来决定在雾气和热浪中能看到多少六边形的距离）。关于这个地点的更多信息，请参见"乌塔欧之心"。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[41],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"这个盆地以龙虾人种族阿尔达尼命名（参见附录D）。"},{id:"scn_0ad",locationId:"loc_0ad",name:"阿塔兹·卡哈克拉",activation:{condition:{type:"always"},priority:0},skeleton:['被称为Ataaz Kahakla（"死亡峡谷"）的河流峡谷在大多数看到它的人中激发了惊奇。',"悬崖壁从50到200尺不等，上面排列着一排排的珊瑚。","它们都已经死亡，但仍然保持着彩虹般的色彩，使得峡谷变成了一个令人叹为观止的伪水下海景。","在珊瑚之间，还夹杂着完整的蛇颈龙、巨型鲨鱼和其他海洋生物的骨骼。"],flesh:'被称为Ataaz Kahakla（"死亡峡谷"）的河流峡谷在大多数看到它的人中激发了惊奇。悬崖壁从50到200尺不等，上面排列着一排排的珊瑚。它们都已经死亡，但仍然保持着彩虹般的色彩，使得峡谷变成了一个令人叹为观止的伪水下海景。在珊瑚之间，还夹杂着完整的蛇颈龙、巨型鲨鱼和其他海洋生物的骨骼。',spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[41],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_0ae",locationId:"loc_0ae",name:"阿塔兹·穆哈哈",activation:{condition:{type:"always"},priority:0},skeleton:["如地图2.2所示，阿塔兹·穆哈哈（'笑谷'）是一个巨大的裂谷，被一座古老的石桥所跨越，这座桥被称为猴桥。","这座结构之所以得名，是因为有猴子栖息在其墙壁上，并从其底部悬挂着尾巴。","这些猴子是活生生的猴子和作为桥的一部分的古老雕刻的混合体。","大多数雕刻都已随时间被损坏，但精湛的艺术工艺仍然显而易见。","活着的猴子不断地喋喋不休和尖叫，峡谷中回荡着它们的叫声。"],flesh:`如地图2.2所示，阿塔兹·穆哈哈（'笑谷'）是一个巨大的裂谷，被一座古老的石桥所跨越，这座桥被称为猴桥。这座结构之所以得名，是因为有猴子栖息在其墙壁上，并从其底部悬挂着尾巴。这些猴子是活生生的猴子和作为桥的一部分的古老雕刻的混合体。大多数雕刻都已随时间被损坏，但精湛的艺术工艺仍然显而易见。

活着的猴子不断地喋喋不休和尖叫，峡谷中回荡着它们的叫声。偶尔，峡谷上下的回声以一种方式叠加，将喧闹声变成傲慢、幸灾乐祸的笑声。当这种情况发生时，惊恐的猴子会沉默几分钟，直到"笑声"消失，然后才继续它们的喋喋不休。

符号迷宫被醒目地雕刻在桥梁及其支撑结构上。任何楚尔坦人和大多数向导都能确认，迷宫符号和迷宫的解谜与对乌布托的古老崇拜有关。角色可以通过一个成功的DC 20智力（宗教）检定回忆起这一信息。

这座雕像实际上是用来防御古时入侵者而创造的石魔像。它会攻击任何亵渎它的人（包括试图移除它那纯粹装饰性且无价值的眼珠宝石的人）、破坏桥梁的人，或者经过神殿时未向乌布塔奥（Ubtao）做出恰当敬礼的人。必要的敬礼包括将指尖放在桥梁上一个迷宫状雕刻的中心，并沿着一条不间断的路径通过雕像。来自楚尔特（Chult）的本地向导会知道这一点。这些象征性的迷宫并不非常复杂；最大的困难来自于覆盖在上面的苔藓和地衣。如果事先用刀或其他工具清理这些附着物，那么只需通过一个成功的 DC 5智力检定，就可以正确地追踪迷宫路径。如果不先清理，难度等级（DC）将增加到10。如果用手直接刮擦清理，魔像会认为这是错误地追踪迷宫路径并发动攻击。用匕首或其他工具追踪迷宫路径则毫无意义；必须用手指来完成。

如果石像魔在战斗中有机会，它会将敌人推下桥。石像魔非常重，因此在力量（运动）检定上抵抗被推时具有优势。除非敌人在撤退后继续使用远程攻击或法术对其攻击，否则它不会追击敌人离开桥梁。

躺在雕像脚下的骷髅是被石像魔杀死的人类探险家留下的唯一遗骸。它早已被清理干净。

对于大多数角色来说，20英尺的缺口过宽，无法通过助跑跳跃跨越。然而，从高边缘跳到低边缘实际上只有15英尺，而从低边缘跳到高边缘实际上需要25英尺。破碎的城墙残骸将距离缩短了额外的5英尺，但成功降落在这些狭窄表面上需要通过一个 DC 13 敏捷 (特技) 检定；未通过检定的跳跃者会从石头上滑落，掉入深谷（100英尺的落差）。

桥下悬挂着数百条藤蔓。角色可以通过手拉手从一条藤蔓移动到另一条藤蔓并荡过峡谷的方式来穿越桥下的峡谷。这不会激活石头傀儡，但需要两次成功的能力检定：一次 DC 10 力量（运动）或敏捷（特技）检定以攀爬过藤蔓并荡过峡谷而不坠落，以及一次 DC 10 感知（驯兽）检定以确保通过时不惊扰将藤蔓视为家园的猴子。如果 驯兽 检定失败，角色将受到 1d4 只 狒狒 的攻击。这些动物会正常战斗，但挂在藤蔓上的角色在受到攻击时，每次攻击检定和能力检定都有劣势。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_0ae","enc_toa_ataaz_stone_golem"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[41],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`一座石头神殿位于桥的中点。它由一个庄重的Chultan战士雕像组成，他戴着战争面具，蹲伏着像一只准备扑击的豹子。像桥上其他地方的猴子一样，雕刻非常风格化。明亮的宝石在它的眼窝中闪烁。
一个人类骷髅蜷缩在雕像的脚边。它的几根骨头明显断裂，但无法确定这些伤害是在人活着时发生的，还是死后被食腐动物造成的。

桥的一部分已经坍塌，留下了一个20尺的缺口。两边的石头看起来松散且不安全。`,mapGeometry:{imageRef:"adventure/ToA/019-0303.webp"}},{id:"scn_0b4",locationId:"loc_0b4",name:"阿塔兹·伊克瓦齐",activation:{condition:{type:"always"},priority:0},skeleton:["黑色的玄武岩片从这个深邃的火山峡谷的地板上突起，形成了一种森林：这种森林可以轻易地从不小心触碰到这些黑色石堆的旅行者身上划出鲜血，这些石堆和它们被命名的剃刀边缘武器一样锋利。",'Ataaz Yklwazi（"刀刃峡谷"）从北方形成了通往失落荣誉谷的一种门户。',"这个谷地是火蜥蜴的领地。","它们通过巡逻峡谷并伏击任何他们认为足够强大可以击败的入侵者来保护它。","一个典型的巡逻队由四名火蝾螈武者组成，他们骑乘着阔步鸟（见附录D，了解这两种生物的具体数值）。"],flesh:`黑色的玄武岩片从这个深邃的火山峡谷的地板上突起，形成了一种森林：这种森林可以轻易地从不小心触碰到这些黑色石堆的旅行者身上划出鲜血，这些石堆和它们被命名的剃刀边缘武器一样锋利。

Ataaz Yklwazi（"刀刃峡谷"）从北方形成了通往失落荣誉谷的一种门户。这个谷地是火蜥蜴的领地。它们通过巡逻峡谷并伏击任何他们认为足够强大可以击败的入侵者来保护它。一个典型的巡逻队由四名火蝾螈武者组成，他们骑乘着阔步鸟（见附录D，了解这两种生物的具体数值）。

这座峡谷也是一条名为辛德洛尔的雌性青年红龙偏爱的猎场，那些曾见过她并幸存下来的人称她为"提恩德"。险峻的地形上散落着提恩德的受害者焦黑的骨架。有关提恩德的更多信息，请参阅"龙心矿井"。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_0b4"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"如果角色们在峡谷中进行了长休，他们会在休息结束时遭遇这条龙。"},{id:"scn_0b5",locationId:"loc_0b5",name:"楚尔特湾",activation:{condition:{type:"always"},priority:0},skeleton:["船只必须通过楚尔特湾，从南扎路港或贝路利安堡西边的海滩来来往往。","湾口由Aremag守护，它是一只左眼瞎了、乳白色的，并且缺少一块壳的龙龟。","Aremag要求船只把财宝扔进海湾以安抚它。","然后Aremag收集这些战利品，并将其藏在它的巢穴中，至今还没有人找到过。","前方的海面翻滚汹涌，海浪在你们船头破碎，被锯齿状的山丘从翻腾的泡沫中升起所推动。"],flesh:`船只必须通过楚尔特湾，从南扎路港或贝路利安堡西边的海滩来来往往。湾口由Aremag守护，它是一只左眼瞎了、乳白色的，并且缺少一块壳的龙龟。Aremag要求船只把财宝扔进海湾以安抚它。然后Aremag收集这些战利品，并将其藏在它的巢穴中，至今还没有人找到过。

Aremag首先用龙语说话；如果没有人能听懂地回答，它会改用水族语。

在谈判过程中，龙龟慢慢地绕着船转圈。起初，角色们必须不断地在甲板上转圈，以保持与这个生物面对面的接触，但最终它制造了一个漩涡，使得小船以与Aremag运动相匹配的速度旋转。对每个人来说，龙龟很容易就能击沉这艘船应该是显而易见的。

阿雷马格要求贡品以确保安全通过，但未指定具体数量。船上的人必须在阿雷马格的视线范围内将贵重物品扔进一个袋子，直到这只龙龟对贡品感到满意。阿雷马格会根据它怀疑船上货物有多少以及它此刻的贪婪程度，向每艘船勒索不同的金额。要确定阿雷马格会接受的最低金币价值，掷骰子 2d4 × 50 金币。每当新的贡品被展示并加入袋子时，龙龟会咆哮"再来！"，直到总价值达到或超过它的最低要求。海湾里充满了 礁鲨，任何在水里停留超过 3 轮的人都会被 1d4 只礁鲨攻击。

可以进行一些谈判。如果乘客们已经在袋子里放入了至少50 gp的财物，一个成功的DC 15魅力（游说）检定可以说服阿雷玛格（Aremag）这些乘客已经无物可给了。只有一名角色可以进行此检定；其他角色如果能为辩论贡献一个令人信服的可怜恳求，可以协助检定。如果袋子里的财物价值少于100 gp，检定将处于劣势；如果袋子里有150 gp或更多的财物，检定将处于优势。每次尝试此检定并失败时，阿雷玛格都会如上所述作出反应，就像角色们每次只添加了几枚金币一样。

当供品足够时，Aremag宣布"把它扔过来！"袋子可以扔到Aremag崎岖的背上，扔进他的嘴里，或者直接扔进水里。龙龟不再多说，潜入水中，使船剧烈地颠簸和翻滚，直到海面平静下来。角色们可以看到它那巨大的壳盘在海湾清澈的水中游动，直到它消失在无光的深处。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_0b5","enc_toa_bay_sharks"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"前方的海面翻滚汹涌，海浪在你们船头破碎，被锯齿状的山丘从翻腾的泡沫中升起所推动。水流从升起的峭壁上倾泻而下，就像山间河流的冲击。最后，这个浮现的岛屿停止了增长，尽管周围的海水仍然像飘动的羽毛一样摇晃着你们的船。然后，一股巨大的蒸汽从波涛中喷发出来，透过飘动的、彩虹交错的雾气，你看到一个巨大的喙和一只像酒桶一样大小的乳白色眼睛盲目地朝你的方向凝视。随着水面平静下来，你还看到一群或更多鲨鱼鳍在船周围盘旋。",dmGuidance:`如果角色们乘船进入或离开楚尔特湾，Aremag就会出现：
如果角色们在这件事上表现得很荒谬——例如，每次只添加一点点——阿雷马格会不耐烦地在船上方喷出一股蒸汽，并用尾巴拍打船体，导致所有不在甲板下的人必须成功进行一次 DC 15 力量或敏捷豁免，否则会跌入海中。`,mapGeometry:{imageRef:"adventure/ToA/020-0304.webp"}},{id:"scn_0b7",locationId:"loc_0b7",name:"正义营地",activation:{condition:{type:"always"},priority:0},skeleton:["你来到了一个废弃的河边营地，到处都是残骸。","帐篷发霉破烂，所有永久性建筑似乎都被烧成了平地。","两艘完好的划艇系在一个小码头上。","营地北面是一条山脊，上面建有一尊80尺高的石雕，雕刻成一个背上有鳄鱼的男人。","雕像的脚之间有一个石拱门，通往一个黑暗的隧道。"],flesh:`当战锤骑士团首次将其对抗不死生物的战争带到Chult时，其成员围绕一个古老的Chultan神殿（地图2.3）建立了这个基地营地，当地向导称其为鳄鱼之家。神殿并不是骑士团活动的焦点，但它是一个极度好奇的对象。尽管已经成为废墟，神殿的陷阱仍然活跃，它们克服了骑士团试图到达神殿核心的尝试。

过于自信的访客忽视了在营地周围建造防御措施，他们相信他们自己强大的臂膀就足以提供保护。几个月前，当数百个不死生物从丛林中涌出并淹没了营地时，他们悲剧性地错了。只有少数战士从那次屠杀中逃脱。营地里没有留下尸体；所有为保卫营地而死的人的遗体要么已经被第二波圣骑士（现在在复仇营地）埋葬，要么被丛林的食腐动物拖走了。

领导这个群体的是名叫Yokka的地精头目。地精们戴着木制面具，藏在营地北部的树叶中。他们认为神殿被诅咒了，所以他们避开它。然而，Yokka梦见了神殿里的财宝，这可以使他在部落中成为伟大的人物，所以他和他的追随者在过去的十天里一直在努力鼓起勇气去应对神殿的陷阱。从Yokka的角度来看，冒险者的到来是天大的好事。如果他们击败了神殿的陷阱，他就可以简单地在他们出现时从他们那里拿走财宝。如果他们没有，他们至少可能会削弱神殿的防御。

Yokka的乐队在不暴露自己存在的情况下困扰着派对，直到最后一刻。例如，如果没有守卫留下来看守派对的船只，地精就会偷走它们或在船底敲洞。如果所有派对成员进入神殿，地精就会在外面设置伏击。如果其他方法都失败了，地精会使用号角和动物叫声来吸引附近不死生物（1d8个丧尸们和1d8个骷髅们）或攻击性强的野兽（一只饥饿的异特龙和1d4 + 1个斧嘴鸟们）的注意。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_toa_camp_goblin_ambush","enc_toa_camp_undead_lure","enc_toa_camp_beast_lure"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[43],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"你来到了一个废弃的河边营地，到处都是残骸。帐篷发霉破烂，所有永久性建筑似乎都被烧成了平地。两艘完好的划艇系在一个小码头上。营地北面是一条山脊，上面建有一尊80尺高的石雕，雕刻成一个背上有鳄鱼的男人。雕像的脚之间有一个石拱门，通往一个黑暗的隧道。雕像左边是一个简陋的动物围栏，里面有一只小而惊慌的鸟在里面跑来跑去。没有其他生命迹象。",dmGuidance:"当角色们到达时，营地正被一群Batiri地精监视，每名玩家角色对应两名地精。"},{id:"scn_0b9",locationId:"loc_0b7",name:"1. 指挥帐篷",activation:{condition:{type:"always"},priority:0},skeleton:["来自战锤骑士团的圣骑士们在来检查这场灾难现场时，已经从这些帐篷中移走了所有有价值的东西。","一个在这些帐篷中四处搜寻的角色有1/6的几率惊扰到一条毒蛇。"],flesh:"来自战锤骑士团的圣骑士们在来检查这场灾难现场时，已经从这些帐篷中移走了所有有价值的东西。一个在这些帐篷中四处搜寻的角色有1/6的几率惊扰到一条毒蛇。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_0b9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[44],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0ba",locationId:"loc_0b7",name:"2. 士兵帐篷",activation:{condition:{type:"always"},priority:0},skeleton:["所有的帐篷都以某种方式被毁坏了。","大多数在战斗中被爪子或武器撕裂，所有的帆布都因霉变和丛林腐烂而处于解体的边缘。"],flesh:"所有的帐篷都以某种方式被毁坏了。大多数在战斗中被爪子或武器撕裂，所有的帆布都因霉变和丛林腐烂而处于解体的边缘。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0bb",locationId:"loc_0b7",name:"3. 烧毁的神龛",activation:{condition:{type:"always"},priority:0},skeleton:["在战斗中，翻倒的油灯在圣骑士们部分建成的神殿中引发了火灾，点燃了本应成为永久性营房的物资储备。","现在只剩下一片烧毁的废墟。","一个托姆的银色圣徽（价值25金币）仍然挂在神殿墙上的一个钉子上，用皮绳挂着，直到现在才被发现。"],flesh:`在战斗中，翻倒的油灯在圣骑士们部分建成的神殿中引发了火灾，点燃了本应成为永久性营房的物资储备。现在只剩下一片烧毁的废墟。

一个托姆的银色圣徽（价值25金币）仍然挂在神殿墙上的一个钉子上，用皮绳挂着，直到现在才被发现。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_0bb_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0bd",locationId:"loc_0b7",name:"4. 动物围栏",activation:{condition:{type:"always"},priority:0},skeleton:["圣骑士们在这个围栏里饲养猪作为食物。","如果他们攻击或骚扰这只鸟，它的尖叫声会吸引五只成年的斧嘴鸟们，在两轮后从丛林中冲出来，准备攻击它们遇到的任何东西。"],flesh:"圣骑士们在这个围栏里饲养猪作为食物。猪早已不见了，但一只幼小的斧嘴鸟，有6点生命值且没有有效的攻击（0经验值）被困在了围栏里。如果他们攻击或骚扰这只鸟，它的尖叫声会吸引五只成年的斧嘴鸟们，在两轮后从丛林中冲出来，准备攻击它们遇到的任何东西。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_0bd"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色们不打扰它或放它自由，它不会带来任何问题。"},{id:"scn_0be",locationId:"loc_0b7",name:"5. 厕所",activation:{condition:{type:"always"},priority:0},skeleton:["在对营地的攻击中，一名圣骑士的勇气失败了，他为了躲避不死生物而爬进了最南边的厕所。","他虽然在攻击中幸存下来，但无法独自爬出这个恶臭的坑，几天内因口渴而死亡。","搜索死去的圣骑士的角色会发现一套鳞甲（已毁），一把战锤，以及一个袋子，里面装有五颗各式各样的宝石（每颗价值10金币）。"],flesh:`在对营地的攻击中，一名圣骑士的勇气失败了，他为了躲避不死生物而爬进了最南边的厕所。他虽然在攻击中幸存下来，但无法独自爬出这个恶臭的坑，几天内因口渴而死亡。

搜索死去的圣骑士的角色会发现一套鳞甲（已毁），一把战锤，以及一个袋子，里面装有五颗各式各样的宝石（每颗价值10金币）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_0be_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0c0",locationId:"loc_0b7",name:"6. 人与鳄鱼之屋",activation:{condition:{type:"always"},priority:0},skeleton:["这个神殿是几个世纪前由Chultans建造的。","它被雕刻进一个石质山坡，入口位于一个80尺高的石雕的脚之间，这个石雕描绘了一个背上驮着鳄鱼的男人。","任何Chultan人都能认出这是来自当地神话的人物，并且可以为角色们回忆起这个故事。","在世界之初，人类站在河边，感到害怕。","鳄鱼从水中抬起头问道：'是什么困扰着你，表亲人类？"],flesh:`这个神殿是几个世纪前由Chultans建造的。它被雕刻进一个石质山坡，入口位于一个80尺高的石雕的脚之间，这个石雕描绘了一个背上驮着鳄鱼的男人。任何Chultan人都能认出这是来自当地神话的人物，并且可以为角色们回忆起这个故事。

这个故事是一个提示，可以帮助角色安全地通过神殿中的陷阱。

如果两个角色模仿人类与鳄鱼，其中一个骑在另一个的肩膀上，神殿中的陷阱都不会被触发。那些角色仍然可能因为其他人触发的陷阱而受伤；他们只是不会自己触发陷阱。然而，对于一个两人的驮载团队来说，导航神殿是困难的。他们不断面临着失去平衡或骑手掉下来的危险。任何时候，如果他们不互相驮载或骑行，他们就有像其他人一样触发陷阱的风险。如果骑手至少比驮载者小一个尺寸类别，驮载者在进行必要的力量和敏捷检定以及豁免检定时具有优势。

在一些地方，神殿的地面升高了7英尺，形成了一个岩架。单独攀爬岩架不需要进行检定，但岩架的高度使得很难看清前方的情况。一个骑手/载具组合可能足够高以看到岩架上方，但若要攀爬它，载具必须成功通过一个DC 15力量（运动）检定；骑手可以协助这个检定。如果检定失败且差值达到5或更多，他们双双摔落到较低的地面，并且在至少1轮内，他们只是两个独立的个体，不再是骑手和载具。如果检定失败但差值小于5，他们向前翻滚到上层平台，分开摔倒，并可能会触发该层级的任何陷阱。

除非另有说明，陷阱可以通过成功的 DC 13 感知（察觉）检定发现。最好只有一个角色进行此检定，无论尝试搜索多少次，只有第一次检定有效。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`在世界之初，人类站在河边，感到害怕。鳄鱼从水中抬起头问道：'是什么困扰着你，表亲人类？'
人类说：'我必须过这条河，但我害怕独自进入水中，因为里面充满了你们的同类。'
鳄鱼回答说：'确实，你不会安全。但如果你能承诺回报这个恩情，我会背着你安全地过河。' 人类同意了，鳄鱼安全地把他背过了水。
当他们到达对岸时，人类问道：'我该如何报答你？' 鳄鱼回答说：'我想看看人类的领域，但我害怕独自前往，因为那里充满了你们的同类。你必须背着我穿过你们的领域。' 人类被欺骗了，但承诺就是承诺，所以他背着鳄鱼安全地穿过了整个人类的领域，这次旅行持续了许多年。他还发誓，出于愤怒，人类和鳄鱼再也不会成为朋友，从那时起一直如此。`,dmGuidance:`如果角色们问一个Chultan人这尊雕像代表什么，请阅读：
如果玩家坚持让所有人都挤进来搜索陷阱，哥布林可能会偷走队伍的独木舟或设置他们自己的陷阱。`},{id:"scn_0c5",locationId:"loc_0b7",name:"6A. 隐藏的坑陷阱",activation:{condition:{type:"always"},priority:0},skeleton:["此处天花板高23英尺，悬挂着蛛网，石砖地面上覆盖着厚厚的泥浆、藤蔓和被风吹入的落叶，因此察觉此陷坑的尝试将承受劣势。","任何经过该地段的个体有50概率触发活板门，坠入20英尺深的陷坑，如常承受坠落伤害。","一旦陷坑打开，外边缘会留下一个狭窄的岩架。"],flesh:`此处天花板高23英尺，悬挂着蛛网，石砖地面上覆盖着厚厚的泥浆、藤蔓和被风吹入的落叶，因此察觉此陷坑的尝试将承受劣势。任何经过该地段的个体有50概率触发活板门，坠入20英尺深的陷坑，如常承受坠落伤害。

一旦陷坑打开，外边缘会留下一个狭窄的岩架。通过一个成功的 DC 10 敏捷（特技）检定，可以安全地穿越这个岩架，但如果角色肩上载有他人，则进行检定时会受到劣势影响。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0c6",locationId:"loc_0b7",name:"6B. 刀刃陷阱",activation:{condition:{type:"always"},priority:0},skeleton:["此处天花板高23英尺，布满蛛网。","每个经过走廊该区域的个体都有50概率触发从隐蔽壁龛扫出的镰刃。","每次成功检定可卡住一片镰刃，并使陷阱伤害减少1d8。"],flesh:"此处天花板高23英尺，布满蛛网。每个经过走廊该区域的个体都有50概率触发从隐蔽壁龛扫出的镰刃。处于两片刀刃之间10英尺方形区域内的生物必须进行DC 13敏捷豁免，失败将受到18（4d8）点挥砍伤害，成功则减半。陷阱被识别后，可通过向壁龛钉入尖刺或金属刃片并通过四次独立的DC 10力量检定（确保金属牢固嵌入）来卡住机关。每次成功检定可卡住一片镰刃，并使陷阱伤害减少1d8。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0c7",locationId:"loc_0b7",name:"6C. 谜题地板",activation:{condition:{type:"always"},priority:0},skeleton:['要到达大厅的这一部分，角色们必须攀爬一个7英尺高的壁架（见上文的"壁架"）。',"壁架北面的区域形成了一个16英尺高的平台，平台的地面由四乘四的方格图案组成。","壁架顶部刚好有足够的空间让一个人站立而不会踩到地砖，但除此之外，这个图案从墙到墙完全覆盖了地板，一直延伸到另一个7英尺高的壁架，这个壁架将大厅的这一部分与区域6D隔开。","区域6D的木门上雕刻着类似的四乘四图案。","站在别人肩膀上的角色可以看到整个图案，但身高正常的人无法看到门底部的一行图案——这很不幸，因为门上底部一行的一个方格会发出微弱的光芒（掷一个 d4 来决定是哪个方格）。"],flesh:`要到达大厅的这一部分，角色们必须攀爬一个7英尺高的壁架（见上文的"壁架"）。壁架北面的区域形成了一个16英尺高的平台，平台的地面由四乘四的方格图案组成。壁架顶部刚好有足够的空间让一个人站立而不会踩到地砖，但除此之外，这个图案从墙到墙完全覆盖了地板，一直延伸到另一个7英尺高的壁架，这个壁架将大厅的这一部分与区域6D隔开。区域6D的木门上雕刻着类似的四乘四图案。站在别人肩膀上的角色可以看到整个图案，但身高正常的人无法看到门底部的一行图案——这很不幸，因为门上底部一行的一个方格会发出微弱的光芒（掷一个 d4 来决定是哪个方格）。即使有人能看到门的那一区域，光芒也非常微弱，需要进行一次成功的 DC 13 感知（察觉）检定才能注意到它。

门上的图案与地板上的图案相对应，门底部的行与最接近角色们的地板行相匹配。如果任何人对除了与门上亮起方块相对应的方块之外的任何方块施加超过几磅的压力，魔法的火焰就会从墙壁中喷出。当火焰出现时，露台上的每个生物都必须进行一个 DC 13 的敏捷豁免检定，若豁免失败则受到 22（4d10）点火焰伤害，若成功则受到一半伤害。如果踩下或按压正确的方块，则不会触发火焰，并且门第二行的一个方块会亮起——再次非常微弱。随着角色们在地板方块上前进，壁架逐渐遮挡门上的图案，使得角色们难以看清哪个方块亮起，除非他们骑在同伴的肩膀上。

通过只踩在门上发光的方块，或者由两名角色组成的骑手/驮载者团队，可以安全地穿过地板上的图案。对任何其他方块施加压力都会触发火焰。这个触发器和陷阱是魔法的，所以它们不能通过机械方式被解除或卡住。对地板瓷砖施放en=Dispel Magic法术可以使陷阱在1小时内失效。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0c8",locationId:"loc_0b7",name:"6D. 谜题门",activation:{condition:{type:"always"},priority:0},skeleton:["要到达这扇门，角色们必须爬上另一个7英尺高的岩架，岩架上方天花板高9英尺。","岩架后部的一扇木门没有明显的门把手或门闩。",'要打开它，必须模仿"人与鳄鱼"的骑手/载具团队从下到上依次触摸四个亮起的方块。',"底部两个方块必须由载具触摸，顶部两个由骑手触摸。","如果方块被正确按下，门将向内摆动进入区域6E。"],flesh:'要到达这扇门，角色们必须爬上另一个7英尺高的岩架，岩架上方天花板高9英尺。岩架后部的一扇木门没有明显的门把手或门闩。要打开它，必须模仿"人与鳄鱼"的骑手/载具团队从下到上依次触摸四个亮起的方块。底部两个方块必须由载具触摸，顶部两个由骑手触摸。如果方块被正确按下，门将向内摆动进入区域6E。如果按错了方块、按方块的顺序错误，或由错误的人按下，门上的一个en=Glyph of Warding将触发一个en=Thunderwave法术。发现法阵需要对门进行彻底的搜索，并成功通过一个DC 13 智力（调查）检定。当法阵触发时，岩架上的每个生物都必须进行一个DC 13 体质豁免检定。如果豁免失败，生物将受到9点（2d8）雷鸣伤害，被推离门10英尺，并坠入区域6C，触发那里的陷阱。如果豁免成功，生物受到一半伤害且不会被推开。',spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0c9",locationId:"loc_0b7",name:"6E. 宝库",activation:{condition:{type:"always"},priority:0},skeleton:["这个布满灰尘的房间高40尺，宽20尺，地面上散落着恐龙骨头。","蛛网从墙壁延伸到一个30尺高的中央支柱，围绕着支柱的是一条狭窄的石质楼梯，台阶上覆盖着灰尘。","支柱上雕刻着一个背着鳄鱼的男人的浮雕。","这些浮雕沿着楼梯一直延伸到支柱顶部，那里放着一个大型的、美丽的陶瓷壶。","环绕柱子的螺旋楼梯宽2英尺，每级台阶比下一级高1英尺。"],flesh:`环绕柱子的螺旋楼梯宽2英尺，每级台阶比下一级高1英尺。每当携带另一个角色的角色在楼梯上开始其回合时，被携带者和携带者都必须进行一次DC 10敏捷（特技）检定。如果两者检定都失败，被携带者和携带者都会跌落。否则，团队保持平衡。

总共有三十级台阶。第3、10、17和23级台阶上各有一个en=Glyph of Warding法术，当踩踏台阶时会触发。模仿"人"与"鳄鱼"的生物不会触发刻文。每个触发的刻文会释放一个以台阶为中心的20尺半径的闪电球。区域内的每个生物必须进行一次DC 13敏捷豁免，豁免失败则受到22点（5d8）闪电伤害，豁免成功则只受一半伤害。模仿"人"与"鳄鱼"的生物在进行豁免时具有劣势。要发现刻文，必须先清除台阶上的灰尘，并且搜索台阶的角色必须通过一次DC 13智力（调查检定。

这个壶是一个炼金壶，很久以前被崇拜它作为乌伯托礼物的楚尔坦人放置在这里。唯一安全拿起炼金壶的方法是模仿人与鳄鱼的动作。在骑手/搬运者的团队中，任何一个成员都可以安全地拿起壶并将其带出房间。如果壶被其他人拿起，松动的砖块开始从天花板上掉下。区域6E中的每个生物都会被掉落的砖块击中，并且必须进行一个DC 13的敏捷豁免检定，若豁免失败则受到10点（3d6）钝击伤害，成功则受到一半伤害。在房间内开始其回合的生物需重复进行豁免检定。3轮后，砖块停止掉落。

一个骑手/驮载者团队在携带炼金壶（炼金术壶）尝试下楼梯时，进行敏捷（特技）检定会处于不利状态，除非该壶被放置在背包中，或者悬挂在袋子或其他无需手持的容器中。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_0c9_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个布满灰尘的房间高40尺，宽20尺，地面上散落着恐龙骨头。蛛网从墙壁延伸到一个30尺高的中央支柱，围绕着支柱的是一条狭窄的石质楼梯，台阶上覆盖着灰尘。支柱上雕刻着一个背着鳄鱼的男人的浮雕。这些浮雕沿着楼梯一直延伸到支柱顶部，那里放着一个大型的、美丽的陶瓷壶。"},{id:"scn_0cd",locationId:"loc_0cd",name:"复仇营地",activation:{condition:{type:"always"},priority:0},skeleton:["透过植被，你看到一个简陋的木制防御工事——一个有瞭望塔和帐篷的围墙围成的院子，周围是布满锋利木桩的壕沟。","一个大型的门楼面向河流，河边有一个木桩上系着四艘划艇。","要塞周围散落着烧焦的人类尸体堆和剥皮的动物尸体，上面爬满了苍蝇。","要塞周围的尸体（地图2.4）是攻击营地的野兽和不死生物的残骸。","营地居民从死去的恐龙和其他野兽身上取下肉来养活自己，剩下的则任其腐烂。"],flesh:`要塞周围的尸体（地图2.4）是攻击营地的野兽和不死生物的残骸。营地居民从死去的恐龙和其他野兽身上取下肉来养活自己，剩下的则任其腐烂。

少数战锤骑士团的战士通过向索申斯塔河上游撤退至阿尔达尼盆地，从而逃离了对正义营地的不死生物攻击。三天后，他们在这个地方结束了撤退。最终，他们将他们的情况传回了南扎路港，并且从此得到了增援。他们原本的小营地已经转变成了一个设防的基地，比正义营地更能抵御攻击。

这并不是说营地是一个健康的地方。来自仅几英里外南部的瘟疫之地阿尔达尼盆地的不健康蒸汽和昆虫云层笼罩着它。驻扎在这里的骑士们饱受疾病困扰，并且由于白天与巨大丛林食肉动物的持续战斗以及夜间与不死生物恐怖的战斗而筋疲力尽。

负责的圣骑士是一个虔诚崇拜提尔的信徒，名叫奈尔斯·断骨（守序善良男性Chondathan人类贵族），一个致力于战锤骑士团所代表的一切的人，但并不适合指挥像复仇营地这样的驻地。除了指挥官Breakbone之外，基地的标准守备部队由五十八人组成，但由于疾病，任何时候实际有效的战士人数通常较少。Breakbone手下有两个队长：Ord Firebeard（守序善良男性金矮人老兵）和Perne Salhana（守序善良女性Tethyrian人类老兵）。向他们汇报的是一支由八名老兵和二十四名警卫组成的战斗力量。此外，还有由Sister Cyas（守序善良女性Chondathan人类Helm的祭司）领导的六名侍僧组成的宗教团体。从技术上讲，宗教圣骑士是战斗力量的一部分，但实际上，他们大部分时间都在照料病人和伤员。最后，堡垒得到了由Chultan猎人和侦察兵组成的杂牌军的支持，包括由Lorsa Bilwatal（中立女性Chultan人类斥候）和奈尔斯·断骨的老朋友Wulf Rygor（混乱善良男性半精灵斥候）领导的十五名部族武者。`,spotlightRefs:[],presentNpcIds:["npc_niles_breakbone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`透过植被，你看到一个简陋的木制防御工事——一个有瞭望塔和帐篷的围墙围成的院子，周围是布满锋利木桩的壕沟。一个大型的门楼面向河流，河边有一个木桩上系着四艘划艇。
要塞周围散落着烧焦的人类尸体堆和剥皮的动物尸体，上面爬满了苍蝇。`},{id:"scn_0cf",locationId:"loc_0cd",name:"1. 船只",activation:{condition:{type:"always"},priority:0},skeleton:["尽管营地通过狩猎获得大部分食物，但它完全依赖于通过索申斯塔河上游的划艇和独木舟运送替换士兵、盔甲、武器、箭和弩箭、药品、帐篷、床铺、靴子、服装以及几乎所有其他物资。","在正义营地的灾难之后，Breakbone指挥官希望有足够的船只来运送大部分，如果不是全部的话，守军安全撤离，以防营地被淹没。","但这种情况很少出现。"],flesh:"尽管营地通过狩猎获得大部分食物，但它完全依赖于通过索申斯塔河上游的划艇和独木舟运送替换士兵、盔甲、武器、箭和弩箭、药品、帐篷、床铺、靴子、服装以及几乎所有其他物资。在正义营地的灾难之后，Breakbone指挥官希望有足够的船只来运送大部分，如果不是全部的话，守军安全撤离，以防营地被淹没。但这种情况很少出现。",spotlightRefs:[],presentNpcIds:["npc_niles_breakbone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0d0",locationId:"loc_0cd",name:"2. 门房",activation:{condition:{type:"always"},priority:0},skeleton:["营地被一个20尺深的沟渠环绕，沟渠内布满了锋利的木桩，后面是一堵坚固的、12尺高的原木栅栏。","由于沟渠里总是充满了泥水，所以沟渠的深度并不明显。","这些尖刺对于不死生物来说太大了，无法有效，但对大型和巨型野兽来说却很危险。","门房足够坚固，能够抵御一只冲锋的三角龙，而且没有营地前三名官员的明确命令，大门永远不会打开。","门楼由地面入口、作为军械库的上层（因为这里是少数保持干燥的地方之一，所以驻军的备用武器和盔甲都存放在这里）以及一个无顶的战斗平台组成，平台被木栅栏环绕，为来自地面的攻击提供了3。"],flesh:`营地被一个20尺深的沟渠环绕，沟渠内布满了锋利的木桩，后面是一堵坚固的、12尺高的原木栅栏。由于沟渠里总是充满了泥水，所以沟渠的深度并不明显。这些尖刺对于不死生物来说太大了，无法有效，但对大型和巨型野兽来说却很危险。门房足够坚固，能够抵御一只冲锋的三角龙，而且没有营地前三名官员的明确命令，大门永远不会打开。

门楼由地面入口、作为军械库的上层（因为这里是少数保持干燥的地方之一，所以驻军的备用武器和盔甲都存放在这里）以及一个无顶的战斗平台组成，平台被木栅栏环绕，为来自地面的攻击提供了3。两名警卫日夜驻守在门楼顶部。

栅栏下的护墙妨碍了营地的排水。整个院子到处都是水坑和没脚踝的泥浆，这成为蚊子和其他害虫的滋生地。`,spotlightRefs:[],presentNpcIds:["npc_niles_breakbone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0d1",locationId:"loc_0cd",name:"3. 瞭望塔",activation:{condition:{type:"always"},priority:0},skeleton:["每座瞭望塔都有一个防御性的顶层（提供3），耸立在营地栅栏之上。","较低的一层由一个离地数英尺高的木地板组成，并用薄木板和帆布围合，形成一个相对干燥的生活空间。","洛尔萨·比尔瓦塔尔、沃尔夫·莱戈以及他们的一群楚尔特侦察兵都驻扎在这些较低的瞭望塔营房中。","从理论上讲，每个瞭望塔都有两名警卫昼夜守卫，但由于人员短缺，有时这会减少到一名守卫，或者迫使骑士们轮流值班。"],flesh:`每座瞭望塔都有一个防御性的顶层（提供3），耸立在营地栅栏之上。较低的一层由一个离地数英尺高的木地板组成，并用薄木板和帆布围合，形成一个相对干燥的生活空间。洛尔萨·比尔瓦塔尔、沃尔夫·莱戈以及他们的一群楚尔特侦察兵都驻扎在这些较低的瞭望塔营房中。

从理论上讲，每个瞭望塔都有两名警卫昼夜守卫，但由于人员短缺，有时这会减少到一名守卫，或者迫使骑士们轮流值班。`,spotlightRefs:[],presentNpcIds:["npc_niles_breakbone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0d2",locationId:"loc_0cd",name:"4. 动物围栏",activation:{condition:{type:"always"},priority:0},skeleton:["骑士们为猪建造了这个围栏，但营地环境对它们来说太不健康，它们全都死了。","目前的牲畜包括四只病弱的山羊。"],flesh:"骑士们为猪建造了这个围栏，但营地环境对它们来说太不健康，它们全都死了。目前的牲畜包括四只病弱的山羊。",spotlightRefs:[],presentNpcIds:["npc_niles_breakbone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0d3",locationId:"loc_0cd",name:"5. 野战医院帐篷",activation:{condition:{type:"always"},priority:0},skeleton:["这些帐篷里充满了秩序的病弱和垂死的士兵。","任何时候，每个帐篷都有2d6名患者，他们遭受着各种疾病的困扰。","照顾病人的侍僧们自己也病得很重，精疲力尽，以至于他们无法有效地使用他们的魔法。","角色们提供的任何帮助都会受到极大的欢迎，特别是如果他们捐赠了治疗药水或其他魔法物品。"],flesh:"这些帐篷里充满了秩序的病弱和垂死的士兵。任何时候，每个帐篷都有2d6名患者，他们遭受着各种疾病的困扰。照顾病人的侍僧们自己也病得很重，精疲力尽，以至于他们无法有效地使用他们的魔法。角色们提供的任何帮助都会受到极大的欢迎，特别是如果他们捐赠了治疗药水或其他魔法物品。",spotlightRefs:[],presentNpcIds:["npc_niles_breakbone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色们提供了大量的医疗援助，Cyas修女会成为他们对抗Breakbone指挥官不合理要求的坚定捍卫者。"},{id:"scn_0d4",locationId:"loc_0cd",name:"6. 指挥帐篷",activation:{condition:{type:"always"},priority:0},skeleton:["Breakbone指挥官在涉及战斗线、飘扬的旗帜、号角和补给列车的战争中理解得相当透彻，但这种涉及伏击和悄悄穿过丛林的战争只会让他感到困惑和沮丧。","他大部分时间都待在他的指挥帐篷里，仔细研究不准确的地图并审查有关营地物资的报告。","他的两个直接下属，Ord Firebeard和Perne Salhana，在缺乏Breakbone有效领导的情况下，做得非常好，成功地管理着营地。","Breakbone指挥官有两个紧迫的问题。",'每名士兵都患有蓝雾热、颤抖病或咽喉水蛭（见"疾病"）。'],flesh:`Breakbone指挥官在涉及战斗线、飘扬的旗帜、号角和补给列车的战争中理解得相当透彻，但这种涉及伏击和悄悄穿过丛林的战争只会让他感到困惑和沮丧。他大部分时间都待在他的指挥帐篷里，仔细研究不准确的地图并审查有关营地物资的报告。他的两个直接下属，Ord Firebeard和Perne Salhana，在缺乏Breakbone有效领导的情况下，做得非常好，成功地管理着营地。

Breakbone指挥官有两个紧迫的问题。每名士兵都患有蓝雾热、颤抖病或咽喉水蛭（见"疾病"）。他们的命令是摧毁遇到的任何不死生物。如果任何请求被拒绝，Breakbone下令逮捕角色，并将他们分别捆绑在不同的守卫塔中，等待因在军事紧急情况下违抗命令而受审。如果他们被判有罪，惩罚是被剥夺所有装备，绑在森林中的树上，留给食肉动物或不死生物。

否则，他们需要以有说服力的论点赢得奥尔德和珀恩的支持，以避免断骨的审判。每个人都能通过一次成功的DC 15魅力（游说）检定被说服，但前提是进行检定的角色有充分的理由请求宽大处理。`,spotlightRefs:[],presentNpcIds:["npc_niles_breakbone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`如果角色乘船到达，他需要他们将消息和七名生病的士兵顺流带到南扎路港。
如果角色步行到达，Breakbone坚持要求他们带领他的士兵分遣队（由四名警卫和四名部族武者组成）进行为期两周的巡逻，返回他们来时的方向；
如果角色足够强大，他们确实有可能在与整个营地的战斗中获胜，但即使他们赢了，无论他们在楚尔特（以及可能在其他领域中）走到哪里，都会被铁手套骑士团标记为死亡目标。
如果角色护送昂德里尔·银牙到营地并获得她的尊重（见"支线任务"），她会为他们说情，并说服指挥官断骨让他们离开。`},{id:"scn_0d5",locationId:"loc_0cd",name:"7. 士兵帐篷",activation:{condition:{type:"always"},priority:0},skeleton:["每个帐篷旨在为四个人提供合理的舒适度。","它们有木制地板，使居住者远离泥泞，并且有装满芦苇的布质床垫供睡觉使用。","然而，所有的材料都不适合在Chult长期使用。","帆布上布满了霉菌和真菌，潮湿很快通过地板渗透上来，各种可以想象的害虫在床垫中繁衍生息。"],flesh:"每个帐篷旨在为四个人提供合理的舒适度。它们有木制地板，使居住者远离泥泞，并且有装满芦苇的布质床垫供睡觉使用。然而，所有的材料都不适合在Chult长期使用。帆布上布满了霉菌和真菌，潮湿很快通过地板渗透上来，各种可以想象的害虫在床垫中繁衍生息。",spotlightRefs:[],presentNpcIds:["npc_niles_breakbone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0d6",locationId:"loc_0cd",name:"8. 厕所",activation:{condition:{type:"always"},priority:0},skeleton:["在Chult之外的任何地方，这些厕所都会是极好的。","在这里，日常的雨水淹没了坑洞，将里面的内容冲刷到营地中。","如果这还不够糟糕，木制结构正下沉到坑洞周围的软地面中，随时都有可能彻底倒塌。","营地中的大多数士兵避开厕所，而是选择在丛林中（如果他们能自愿承担外部工作）或在栅栏墙的顶部解决个人需要。","无论哪种选择都比使用厕所更安全、更卫生。"],flesh:"在Chult之外的任何地方，这些厕所都会是极好的。在这里，日常的雨水淹没了坑洞，将里面的内容冲刷到营地中。如果这还不够糟糕，木制结构正下沉到坑洞周围的软地面中，随时都有可能彻底倒塌。营地中的大多数士兵避开厕所，而是选择在丛林中（如果他们能自愿承担外部工作）或在栅栏墙的顶部解决个人需要。无论哪种选择都比使用厕所更安全、更卫生。",spotlightRefs:[],presentNpcIds:["npc_niles_breakbone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0d7",locationId:"loc_0d7",name:"大锅",activation:{condition:{type:"always"},priority:0},skeleton:["附近火山喷涌而出的熔岩流入海中，导致这片海湾不断腾起巨大的蒸汽柱。","这些蒸汽与火山喷发的滚滚灰云和黑烟交织，赋予了海湾其名。","海湾中没有任何海洋生物存活——中毒的水体永远覆盖着一层漂浮的煤灰——沿岸植被也全部枯死，裹挟在灰烬之中。"],flesh:"附近火山喷涌而出的熔岩流入海中，导致这片海湾不断腾起巨大的蒸汽柱。这些蒸汽与火山喷发的滚滚灰云和黑烟交织，赋予了海湾其名。海湾中没有任何海洋生物存活——中毒的水体永远覆盖着一层漂浮的煤灰——沿岸植被也全部枯死，裹挟在灰烬之中。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_0d8",locationId:"loc_0d8",name:"登格隆格",activation:{condition:{type:"always"},priority:0},skeleton:["Dungrunglung（地图2.5）的grungs在暴君国王Groak的专制统治下劳作，Groak痴迷于召唤女神娜浪并与她交配。","为了取悦他们的国王，grungs建造了一个60尺高的泥质神殿，Groak计划在那里向女神求爱，而她反过来可以赐福于他，让他拥有一代代被神触摸的、皇家的Groak后代。","尽管grungs传统上是狡猾、贪婪的，通常与人交往不愉快，但Dungrunglung的grungs正经历着绝望的时期。","食尸鬼和僵尸威胁着他们的生存，而grung的毒药对不死生物无效。","因此，grungs有很强的动机利用外来者来解决他们的不死生物问题，而不是将他们变成奴隶或食物。"],flesh:`Dungrunglung（地图2.5）的grungs在暴君国王Groak的专制统治下劳作，Groak痴迷于召唤女神娜浪并与她交配。为了取悦他们的国王，grungs建造了一个60尺高的泥质神殿，Groak计划在那里向女神求爱，而她反过来可以赐福于他，让他拥有一代代被神触摸的、皇家的Groak后代。

尽管grungs传统上是狡猾、贪婪的，通常与人交往不愉快，但Dungrunglung的grungs正经历着绝望的时期。食尸鬼和僵尸威胁着他们的生存，而grung的毒药对不死生物无效。因此，grungs有很强的动机利用外来者来解决他们的不死生物问题，而不是将他们变成奴隶或食物。

国王Groak在Dungrunglung拥有绝对的控制权，他的臣民毫无质疑地遵循他的命令。然而，如果权力平衡坚定地转移到Krr'ook或Roark（见"Dungrunglung的Grungs"边栏），grungs们不会犹豫在一场净化的狂潮中将Groak撕成碎片。在冒险者在Dungrunglung的时间里，他们将在秘密中被Krr'ook接近。

在任何给定的时间，Dungrunglung是代表所有种姓和颜色的grungs的家园。只有一个金色grung（Groak）和一个红色grung（Krr'ook）。

grungs除了自己的语言外不说任何其他语言，这使得与他们的任何交易都变得复杂。他们对待冒险者的方式取决于他们看起来有多强大：

格朗会攻击并制服反抗的角色。他提供庇护，并谈论召唤娜浪的盛大仪式。一旦角色们休息好了，格罗克命令他们帮助克鲁克做好最后的准备。

格朗们欢迎他们来到登格隆隆，并请求角色们听听国王格洛克有什么要说的。格洛克恳求冒险者成为他神圣命运的一部分，并帮助克鲁克完成召唤娜浪的准备工作。他提供登格隆隆的热情款待以及关于楚尔特的信息，以换取他们的帮助。

冒犯Groak国王的角色将被扔进监狱坑（区域7）。在那里，Krr'ook会秘密接近他们，试图解释她的困境。那些被认为"没有用"的囚犯将要么被放在火上烤，要么在伟大的仪式中被献祭给娜浪。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`关于grung的统计数据块和更多关于grung种姓的信息，请参见附录D。
如果队伍看起来比较弱（人数少或需要帮助），他们一进入荆棘迷宫，就会被1d6 + 6个皮肤为绿色的格龙蛙人们（战士）包围，并迫使他们去见国王。
如果冒险者接受，他们会被带到迷宫中的神殿，那里由国王格罗克接待。
如果队伍看起来有能力进行一场精彩的战斗，当他们到达定居点时，会由1d6 + 6个绿色皮肤的格龙蛙人们（战士）欢迎他们。
如果队伍同意帮助她，Krr'ook将找到一种方法释放队伍成员以协助她的任务。
【Dungrunglung的Grungs】以下Grungs在Dungrunglung中扮演着关键角色。有关Grungs的具体数值，请参见附录D。
格罗克（一位戴着爆裂头饰的格龙蛙人精英战士）是痴情的国王，试图追求女神娜浪。他富有魅力但情绪不稳定，可能在几秒钟内从友善转变为杀人狂。因此，他的臣民甚至不敢低声说一句关于他的坏话。格罗克希望被视为一个有远见的浪漫主义者，喜欢听外界的故事。然而，他会威胁任何胆敢质疑他膨胀自我形象的人。只要冒险者能取悦他、大体上赞同他所说的一切，并愿意帮助他实现成为娜浪配偶的神圣命运，格罗克就会容忍他们。
Krr'ook（红色格龙蛙人蛮荒祭司）是一位grung牧师，她害怕国王的疯狂。为了保持国王的宠爱，她在国王耳边低语吉祥的征兆和预兆。秘密地，Krr'ook怀疑召唤娜浪的伟大仪式将会失败。因此，她为自己的命运感到担忧。她接近冒险者，想看看他们是否能在仪式之夜帮助她欺骗国王。如果Krr'ook感觉到任何不协调的迹象，或者仪式出了差错，她会将冒险者作为替罪羊，直接将他们送入国王幼稚的愤怒之中。
Roark（橙色格龙蛙人精英战士）是一位尽职尽责且危险的grung战士，他致力于效忠于他疯狂的国王。Roark认为所有这些召唤女神的胡言乱语都分散了对当前真正问题的注意力：保卫Dungrunglung免受不死生物的侵害。秘密地，Roark的忠诚首先是对部落的，其次是对Groak的，但Roark目前尽职地忍受着国王的执念。他对冒险者持怀疑态度，但愿意接受帮助以保卫他的村庄免受不死生物的侵害。`},{id:"scn_0da",locationId:"loc_0d8",name:"1. 荆棘迷宫",activation:{condition:{type:"always"},priority:0},skeleton:["Dungrunglung被20尺高的魔法缠绕藤蔓迷宫所包围。","外墙上布满了荆棘，僵尸在试图爬过时会毫无意识地将自己刺穿。","迷宫在北面有一个明显的入口，在周围的其他地方还有许多秘密入口。","迷宫的通道向天空敞开，并且每分钟左右会魔法般地改变配置，将通道变成死胡同，反之亦然。","每次成功或失败的检定代表在迷宫中搜索的1分钟。"],flesh:`Dungrunglung被20尺高的魔法缠绕藤蔓迷宫所包围。外墙上布满了荆棘，僵尸在试图爬过时会毫无意识地将自己刺穿。

迷宫在北面有一个明显的入口，在周围的其他地方还有许多秘密入口。秘密入口只是一个隐藏得很好的门口，需要通过一次成功的 DC 20 感知（察觉）检定才能发现。

迷宫的通道向天空敞开，并且每分钟左右会魔法般地改变配置，将通道变成死胡同，反之亦然。无论哪个角色在引领穿越迷宫，都必须成功进行六次 DC 15 感知（求生）检定，以找到定居点的入口（区域2）。每次成功或失败的检定代表在迷宫中搜索的1分钟。在每次检定之间，掷一个 d20 并参考荆棘迷宫遭遇表，以确定角色们会遇到什么，如果有的话。角色们可以通过飞越迷宫来完全避开它。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},randomTableIds:["tbl_0da_0"]},{id:"scn_0db",locationId:"loc_0d8",name:"2. 主入口",activation:{condition:{type:"always"},priority:0},skeleton:["通过迷宫墙上的一个开口，你看到一个被芦苇屋、蕨类植物和睡莲环绕的小湖。","在湖中央的平坦小岛上，矗立着一座60尺高的神殿，由彩绘泥砖建造，形状像一只巨大的青蛙。","从湖岸有楼梯通往雕刻在青蛙肥大肚子上的一个开放式门洞。","在神殿周围巡逻的是几个小的、像青蛙一样的类人生物，他们有着鲜亮的橙色皮肤和短弓。","四只绿皮肤的格龙蛙人们（战士）从附近的小屋中出现，以面对未经护送就接近神殿的陌生人。"],flesh:"四只绿皮肤的格龙蛙人们（战士）从附近的小屋中出现，以面对未经护送就接近神殿的陌生人。如果没人说出正确的格朗语口令（'Roook, roooook, erp'），他们就会攻击。如果发生战斗，十二只格龙蛙人们作为援军将在2回合内到达。同时，区域3区域的格朗开始射箭。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_0db"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[50],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"通过迷宫墙上的一个开口，你看到一个被芦苇屋、蕨类植物和睡莲环绕的小湖。在湖中央的平坦小岛上，矗立着一座60尺高的神殿，由彩绘泥砖建造，形状像一只巨大的青蛙。从湖岸有楼梯通往雕刻在青蛙肥大肚子上的一个开放式门洞。在神殿周围巡逻的是几个小的、像青蛙一样的类人生物，他们有着鲜亮的橙色皮肤和短弓。",dmGuidance:"如果角色们在这一点离开迷宫，请阅读："},{id:"scn_0dd",locationId:"loc_0d8",name:"3. 格罗克岛",activation:{condition:{type:"always"},priority:0},skeleton:["沼泽的岸边围绕着这座60尺高的神殿，它由雕刻的泥砖制成，用天然染料上色。","在其基座巡逻的是八名格龙蛙人精英战士，皮肤为橙色。","他们手持匕首和短弓，首先忠于Roark，其次是Groak国王。","未经格朗护送到达岛屿的陌生人将遭到攻击。"],flesh:"沼泽的岸边围绕着这座60尺高的神殿，它由雕刻的泥砖制成，用天然染料上色。在其基座巡逻的是八名格龙蛙人精英战士，皮肤为橙色。他们手持匕首和短弓，首先忠于Roark，其次是Groak国王。未经格朗护送到达岛屿的陌生人将遭到攻击。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_0dd"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[50],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0de",locationId:"loc_0d8",name:"4. 神龛",activation:{condition:{type:"always"},priority:0},skeleton:["神殿的内部是一个大型的空心房间。","入口处有一个清澈的水池，深度从2到5尺不等。","发光的真菌以柔和、梦幻的色彩照亮了水池。","不同颜色的短小、像青蛙一样的类人生物正在摆弄真菌，向水池中抛撒花瓣。","神殿的后部是一个高出10尺的半圆形水池。"],flesh:`神殿前部的浅水池是Krr'ook（一只红皮肤的格龙蛙人蛮荒祭司；见"Dungrunglung的格朗"侧边栏）和她的助手们（六只蓝皮肤的格龙蛙人们）为大仪式做准备的地方，他们照料着发光的真菌，并用精致的香水给水增添香味。根据Groak国王的命令，禁止从水池中移除真菌。

神殿后部的高水池由一个地下泉水供应。Groak国王（一只金色皮肤的格龙蛙人精英战士，戴着一个爆裂头饰；见"Dungrunglung的格朗"侧边栏）在白天从水池中发号施令，晚上在这里睡觉。这些天他很少离开神殿。他身边是Roark（橙色皮肤的格龙蛙人精英战士；见"Dungrunglung的格朗"侧边栏）。

Groak国王戴着一个爆裂头饰，他不怕用它来对付任何侮辱或违抗他的人。他的水池底部铺着33金币和一个拳头大小的绿色石英块（50金币）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_0de"],treasureSlotIds:["trs_0de_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`神殿的内部是一个大型的空心房间。入口处有一个清澈的水池，深度从2到5尺不等。发光的真菌以柔和、梦幻的色彩照亮了水池。不同颜色的短小、像青蛙一样的类人生物正在摆弄真菌，向水池中抛撒花瓣。
神殿的后部是一个高出10尺的半圆形水池。水池中躺着一只金色皮肤的格朗。它的额头上戴着一个金色的头环。一只橙色皮肤的格朗在附近蹲伏，短弓准备就绪。`},{id:"scn_0e1",locationId:"loc_0d8",name:"5. 格隆小屋",activation:{condition:{type:"always"},priority:0},skeleton:["湖边零星散布着几座低矮的茅屋，由沼泽苔藓和芦苇混着泥浆搭成。","这些茅屋直径约15到25英尺不等，每座都有个低矮的入口。","有些开着圆形小窗般的孔洞，还有几座立着粗短的泥砌烟囱。","每个小屋都足够大，可以容纳六名成年的格龙蛙人们加上2d6只格朗幼崽（非战斗者）。","一个特定小屋的所有居住者属于同一个种姓，因此拥有相同的肤色（除了幼崽，它们都是暗淡的灰绿色）。"],flesh:`湖边零星散布着几座低矮的茅屋，由沼泽苔藓和芦苇混着泥浆搭成。这些茅屋直径约15到25英尺不等，每座都有个低矮的入口。有些开着圆形小窗般的孔洞，还有几座立着粗短的泥砌烟囱。

每个小屋都足够大，可以容纳六名成年的格龙蛙人们加上2d6只格朗幼崽（非战斗者）。一个特定小屋的所有居住者属于同一个种姓，因此拥有相同的肤色（除了幼崽，它们都是暗淡的灰绿色）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0e2",locationId:"loc_0d8",name:"6. 格隆隆湖",activation:{condition:{type:"always"},priority:0},skeleton:["格朗格隆湖实际上只是一个大池塘，上面覆盖着睡莲和浮萍，行动缓慢的鲶鱼在水面上吞食空气。","厚厚的泥泞底部散落着格朗们的盛宴留下的骨头。"],flesh:"格朗格隆湖实际上只是一个大池塘，上面覆盖着睡莲和浮萍，行动缓慢的鲶鱼在水面上吞食空气。厚厚的泥泞底部散落着格朗们的盛宴留下的骨头。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0e3",locationId:"loc_0d8",name:"7. 监狱坑",activation:{condition:{type:"always"},priority:0},skeleton:["这个挖掘出的坑深5尺，被坚固的木条覆盖。","关押在这里的囚犯由两名绿皮肤的格龙蛙人们（战士）全天候看守，直到他们可以被煮熟并被吃掉。","从囚犯那里拿走的任何物品都交给了附近小屋里的紫皮肤格朗（见区域5）。","在检定进行之前，每个守卫都会对尝试检定的角色进行一次借机攻击。"],flesh:`这个挖掘出的坑深5尺，被坚固的木条覆盖。关押在这里的囚犯由两名绿皮肤的格龙蛙人们（战士）全天候看守，直到他们可以被煮熟并被吃掉。从囚犯那里拿走的任何物品都交给了附近小屋里的紫皮肤格朗（见区域5）。

坑中的角色可以通过一次成功的DC 20力量（运动）检定将监狱栏杆推开。在检定进行之前，每个守卫都会对尝试检定的角色进行一次借机攻击。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`【大仪式】一旦大仪式完成，Groak国王期望娜浪显现并说出爱、赞美和安慰的话。Krr'ook担心仪式会失败，已经制定了一个绝望的计划来欺骗国王，但需要冒险家们的帮助来实现。
为了欺骗Groak，角色们必须在某个表面上绘制娜浪的图像，或者制作她的其他表现形式，然后使用魔法（如果他们可以的话）赋予它生命的迹象。en=Animate Objects、en=Major Image、en=Minor Illusion以及类似的法术可以帮助增强这个幻象。像en=Color Spray和en=Prestidigitation这样的法术也可以用来迷惑观众，让他们足够长时间地分散注意力，以掩盖一个致命的错误。
无论谁扮演娜浪，都必须用甜言蜜语'销售'这个幻象，以说服格罗克国王，他已在娜浪心中赢得了一个特别的位置。最后，仪式必须以娜浪的离去结束，处理方式要让格罗克国王不会怀疑他被愚弄或被永远抛弃。如果娜浪或她的话显得不真实，格罗克国王会下令处死克鲁克和任何被认为帮助过她的人。
绘画或制作娜浪的象征物需要进行一次成功的DC 12智力检定。使用诺泽尔的惊奇颜料将使本次检定获得优势。
要令人信服地扮演娜浪，需要进行一次成功的 DC 12 魅力 (欺瞒) 检定。如果多个角色参与，让其中一名角色以优势进行检定。
要让格罗克相信娜浪的话是真心的，需要进行一次成功的 DC 15 魅力（欺瞒 或 表演）检定。如果这些话是用格罗克国王不懂的语言表达的，则检定带有劣势。（格罗克只会说格兰语。）
出售娜浪的祝福离境需要通过一次 DC 15 魅力（欺瞒, 威吓, 或 游说）检定。如果她的话是用格伦语以外的语言说出，则检定将带有劣势。`},{id:"scn_0e6",locationId:"loc_0e6",name:"火指",activation:{condition:{type:"always"},priority:0},skeleton:["高耸于丛林树冠之上的是一座300尺高的天然形成的岩石尖塔，顶部有一个火焰信号灯，烟雾从其中冒出。","尖塔的墙壁陡峭，点缀着一些小洞穴。","看起来脆弱的梯子悬挂在不同高度的狭窄壁架上。","被称为火焰之指（地图2.6）的岩石尖塔是古代楚尔坦信号塔。","在咒灾之前，许多这样的塔被用来在夜间通过彩色火焰或白天通过彩色烟雾在城市之间发送信息。"],flesh:`被称为火焰之指（地图2.6）的岩石尖塔是古代楚尔坦信号塔。在咒灾之前，许多这样的塔被用来在夜间通过彩色火焰或白天通过彩色烟雾在城市之间发送信息。火焰之指是少数仍然屹立不倒的塔之一，如果不是唯一的话。

Firefinger被一群翼手兽占领，它们在Tiryki河沿岸捕食猎人和探险者。这座塔是翼手兽的完美巢穴；在晴朗的天气里，从其300尺高的有利位置，它们可以发现任何在10英里以内的河流上移动的目标，而且它陡峭的墙壁和破旧的梯子使得任何没有翅膀的生物试图攀登都可能致命。

如果婀扎卡·风暴之牙（见第一章）与角色们在一起，她坚持要他们攻击尖塔。

在接近火指峰而不被翼手兽发现的最佳方法是保持在茂密的森林冠层下，并只在降雨或黑暗限制视线时穿越开阔区域。如果没有采取这些预防措施，让队伍进行一次 DC 12 集体敏捷（隐匿）检定。攻击力量为每位队伍成员配备两只 翼手兽（参见 附录D）。如果翼手兽数量被压制，生还者会逃回尖塔并警告其他同类（在这种情况下，角色已经失去了出其不意的优势）。

在尖塔的底部，角色们发现了一具躺在泥里的精灵尸体。他的大部分肢体都断了，胸腔被压碎，破碎的枝条和撕裂的树叶粘附在他残存的衣服上。这位不幸的探险家在河上被捕，被带到Firefinger，被剥夺了财物，然后被从塔顶扔下致死。在不远处，角色们发现了另一具尸体，然后是第三具，如此类推，当他们扫视塔底周围时。任何被翼手兽捕获的角色都将面临同样的命运。

安装在尖塔上的绳木梯古老且摇摇欲坠。每个角色从地面到第一层、从第一层到第二层（以此类推）攀爬梯子时，都必须进行一次DC 8敏捷（运动）检定。如果检定成功，角色安全到达下一层且不会损坏脆弱的梯子。如果检定失败，梯子的几级横档会损坏，后续攀爬者的DC会增加2。如果检定失败超过5点或更多，梯子会损坏，攀爬者会坠落——如果没有采取预防措施（例如用绳子将角色绑在一起），很可能会导致死亡。

翼手兽除了下雨时外，会不断地在尖塔周围滑翔。他们对尖塔本身并不太关注，因为他们傲慢地认为自己在堡垒中是安全的。角色们可能会采取精心设计的预防措施以避免被发现，但只要他们未被发现地到达尖塔，他们就会出人意料地安全。在雨天或夜晚，他们攀爬塔楼时没有被发现的机会。在晴朗的白天，盘旋的翼手兽需要成功通过一个 DC 20 的感知（察觉）检定才能发现攀爬者，除非角色们采取了其他预防措施。

火焰之指的洞穴是由侵蚀形成的，天花板高度在7到10尺之间。`,spotlightRefs:[],presentNpcIds:["npc_azaka_stormfang"],availableInfoIds:[],encounterIds:["enc_0e6"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"高耸于丛林树冠之上的是一座300尺高的天然形成的岩石尖塔，顶部有一个火焰信号灯，烟雾从其中冒出。尖塔的墙壁陡峭，点缀着一些小洞穴。看起来脆弱的梯子悬挂在不同高度的狭窄壁架上。",dmGuidance:`如果角色们没有人想到，她建议等到夜幕降临或下雨时再行动。
如果角色们拒绝攻击翼手兽，婀扎卡会因厌恶而离开他们的服务。
如果队伍检定失败，翼手兽会从上方发起攻击。`,mapGeometry:{imageRef:"adventure/ToA/027-0308.webp"}},{id:"scn_0e8",locationId:"loc_0e6",name:"第一层。废弃的洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["一架紧贴在尖塔南侧的梯子在这个层面结束，这个层面距离地面60尺。","翼手兽不使用这个洞穴，其最显著的特征是一个10英尺深的坑。","角色可以使用长跳跨越这个坑的最短距离是15英尺。","然而，第一个进入坑的角色会惊动在坑壁裂缝中筑巢的四只巨狼蛛。","只有被动感知（察觉）得分为17或更高的角色在蜘蛛攻击时不会被突袭。"],flesh:`一架紧贴在尖塔南侧的梯子在这个层面结束，这个层面距离地面60尺。

翼手兽不使用这个洞穴，其最显著的特征是一个10英尺深的坑。角色可以使用长跳跨越这个坑的最短距离是15英尺。爬进或爬出坑很容易，需要进行一个成功的DC 5力量（运动）检定。然而，第一个进入坑的角色会惊动在坑壁裂缝中筑巢的四只巨狼蛛。只有被动感知（察觉）得分为17或更高的角色在蜘蛛攻击时不会被突袭。

一处岩石烟囱通向第2层。这是一段90英尺的攀登，虽然有很多手抓点，但也有几处复杂曲折的地方；在没有攀爬装备或魔法辅助的情况下，要成功攀爬或下降需要一次成功的DC 8力量（运动）检定。`,spotlightRefs:[],presentNpcIds:["npc_azaka_stormfang"],availableInfoIds:[],encounterIds:["enc_0e8"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_0ea",locationId:"loc_0e6",name:"第二层。吸血蝙蝠洞",activation:{condition:{type:"always"},priority:0},skeleton:["一架紧贴尖塔南侧的梯子在此层结束，这一层距地面160尺。","翼手兽不使用这个洞穴。","然而，东北角的房间是九只蚊蝠们的巢穴，它们附着在10尺高的天花板上。","除非有多个角色进入它们的巢穴，或者有人带入火把或其他明火，否则它们不会作出反应，如果是这样，它们会攻击。","六个月前，一名被翼手兽俘虏的探险家设法逃脱并下降到这里，但在被吸血蝙蝠捕食之前。"],flesh:`一架紧贴尖塔南侧的梯子在此层结束，这一层距地面160尺。

翼手兽不使用这个洞穴。然而，东北角的房间是九只蚊蝠们的巢穴，它们附着在10尺高的天花板上。除非有多个角色进入它们的巢穴，或者有人带入火把或其他明火，否则它们不会作出反应，如果是这样，它们会攻击。

六个月前，一名被翼手兽俘虏的探险家设法逃脱并下降到这里，但在被吸血蝙蝠捕食之前。她的干尸靠在吸血蝙蝠巢穴的北墙上，透过破烂的衣物和腐烂的钱包可以看到金光闪闪的金子和宝石。

勇敢面对吸血蝙蝠并搜索死去探险家的角色可以回收15金币，一枚金和红玉髓戒指（60金币），以及两个代表怯蕴阿灵的黑玉雕像（每个50金币）。

在尖塔的西侧表面有一个突出的岩架，上方是一个通向第三层的梯子。每当一个角色穿过岩架时，掷一个d6。若掷出1，一阵突如其来的强风可能将角色吹下岩架。角色必须进行一个DC 9的敏捷豁免检定。若豁免失败，角色将坠落到尖塔的底部，除非他或她被绳索固定住。`,spotlightRefs:[],presentNpcIds:["npc_azaka_stormfang"],availableInfoIds:[],encounterIds:["enc_0ea"],treasureSlotIds:["trs_0ea_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"有关怯蕴阿灵的更多信息，请参见附录D。"},{id:"scn_0ed",locationId:"loc_0e6",name:"第三层。翼手兽的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这一层距地面240尺。","一架紧贴尖塔西面的梯子将这一层与下面的一层相连。","翼手兽的长者居住在这个区域。","他们建造了一个更受风和雨保护的传统巢穴。","他们大部分时间都在照料他们的火（这使得房间变得令人窒息地热和烟雾弥漫），并从敌人的骨头上雕刻出可怕的图腾。"],flesh:`这一层距地面240尺。一架紧贴尖塔西面的梯子将这一层与下面的一层相连。

翼手兽的长者居住在这个区域。他们建造了一个更受风和雨保护的传统巢穴。西南房间是四只长者翼手兽（翼手兽，每只有13点生命值；他们大部分时间都在照料他们的火（这使得房间变得令人窒息地热和烟雾弥漫），并从敌人的骨头上雕刻出可怕的图腾。

当翼手兽有俘虏时，他们被关押在这个洞穴的东侧。目前，有一个俘虏：一个名叫Nephyr的雄性鸟羽人。他来自Kir Sabal，在巡逻时被翼手兽伏击。他的手腕、脚踝和喙都被绳子捆绑着，他没有武器。他知道至少有八个翼手兽居住在火焰之指的顶峰，但他不知道现在那里有多少人。

在离开之前，他敦促角色们前往Kir Sabal并请求阿莎尔进行七风之舞。他说，这个舞蹈是一个魔法仪式的一部分，它赋予非飞行生物飞行的能力。一旦回到Kir Sabal，Nephyr会传播角色们的英雄事迹。从那时起，角色们在影响Kir Sabal的鸟羽人族时，在魅力检定上获得优势。

一根50英尺高的烟囱直通火指峰的顶端。烟囱上有许多手抓点，需要成功的DC 8力量（运动）检定才能在无装备或魔法的情况下攀爬。在这个高度，烟囱内任何显著的噪音都会惊动区域4的翼手兽，使其察觉到入侵者的存在。`,spotlightRefs:[],presentNpcIds:["npc_asharra","npc_azaka_stormfang"],availableInfoIds:[],encounterIds:["enc_0ed"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`见附录D）的家园。
如果角色们释放了他，Nephyr会非常感激。`},{id:"scn_0ef",locationId:"loc_0e6",name:"第四层。尖顶",activation:{condition:{type:"always"},priority:0},skeleton:["尖塔的尖顶是平坦的，大约40尺见方。","站在它们太近的地方是不安全的。","藤蔓和低矮的灌木丛茂盛生长。","来自数十种生物的骨头和肉片散落一地。","一座破败的石塔在平台的东北角上方又升起了30尺。"],flesh:`火焰之指的尖顶距地面300尺。当天空晴朗时，角色们可以看到塔周围超过20英里的地方。更重要的是，他们可以辨认出散布的高原、火焰之峰和其他环绕南部海岸的火山和山脉，以及标志着阿达尼盆地、罗湖和余烬谷的丛林天蓬的巨大缺口。

翼手兽在第三层和第四层之间从不使用烟囱，除了偶尔向囚犯投递食物。烟囱顶部被岩石和低矮的灌木丛包围，为三个中型生物提供了足够的隐蔽。躲避翼手兽需要进行一次成功的 DC 12 敏捷（隐匿）检定，在夜间或下雨时具有优势。

六只翼手兽（见附录D）在塔顶筑巢，包括这群翼手兽的领袖Nrak，它有40点生命值。Nrak是一个充满仇恨的生物，它的疤痕从头顶开始，沿着它的右脸和胸部一直延伸到右翼下方。

如果婀扎卡·风暴之牙（见第一章）与队伍在一起，考虑增加更多的翼手兽加入战斗；她极大地倾斜了战斗的天平，使之倾向于攻击者。额外的翼手兽在高空盘旋，可以随时加入战斗。翼手兽不会犹豫将那些愚蠢地站在塔边的角色推下去。他们可以从塔上跳下，在空中盘旋，利用俯冲攻击获得巨大优势。

火焰指的信标是一束魔法火焰，散发出巨大的热量。任何生物在火焰10英尺范围内开始其回合时，会受到10点（3d6）火焰伤害。任何生物进入火焰或在火焰中开始其回合时，会受到35点（10d6）火焰伤害。成功对火焰施放en=Dispel Magic（DC 17）可以驱散它。

塔内有简陋的巢穴和四个发霉的木箱。这些箱子没有上锁。总共，它们包含2000铜币，730银币，四颗宝石（每颗价值50金币），以及一张en=Commune with Nature的法术卷轴。其中一个箱子还装有一个布包裹的木制面具，它类似于一个风格化的老虎面孔。这是婀扎卡的野兽面具（见附录C）。如果她与角色们在一起，她会立即认领它。`,spotlightRefs:[],presentNpcIds:["npc_azaka_stormfang"],availableInfoIds:[],encounterIds:["enc_0ef"],treasureSlotIds:["trs_0ef_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`尖塔的尖顶是平坦的，大约40尺见方。边缘正在崩解；站在它们太近的地方是不安全的。藤蔓和低矮的灌木丛茂盛生长。来自数十种生物的骨头和肉片散落一地。
一座破败的石塔在平台的东北角上方又升起了30尺。一团熊熊的火焰在空中漂浮，悬停在塔的上方。塔周围的废墟堆积在它的基座周围。三只有着针状喙和皮革翅膀的人形生物正在塔底部的一个开放门口附近，从被咀嚼过的骨头上撕扯最后一点肉屑。`},{id:"scn_0f2",locationId:"loc_0f2",name:"贝路利安堡",activation:{condition:{type:"always"},priority:0},skeleton:["博德之门的旗帜飘扬在这个木制栅栏上。","整个结构坐落在一个10尺高的土丘上，土丘的侧面被垂直削平，使其陡峭且难以攀爬。","堡垒的主门朝向西方。","在栅栏的东侧，一座高大的塔楼俯瞰着周围的荒野。","贝路利安堡的高海拔和没有壕沟使得即使在大雨中，栅栏也能很好地排水。"],flesh:`贝路利安堡的高海拔和没有壕沟使得即使在大雨中，栅栏也能很好地排水。这座堡垒（地图2.7）由Flaming Fist雇佣兵驻守。巨大的财富流经贝路利安堡——足以让博德之门的贵族和商人富得流油，超出了贪婪的梦想。

贝路利安堡的指挥官是一位守序邪恶的烈焰之拳烈焰使者（重要人物），名叫莉尔阿·波提尔（见附录D），她直接向博德之门的大公爵乌尔德·瑞文嘉德汇报。Liara今年47岁，过去三年一直担任这个职位。对她来说，在楚尔特的职位感觉像是对她勇气的考验，但对她的许多下属来说，感觉像是流放。要塞由一位名叫Gruta Halsdottir（LN女性Illuskan人类骑士）的城堡主、三名下士（老兵）和五十四名士兵（警卫）组成。要塞分为三个八小时的轮班，每个轮班有一个下士（护手）和十八名私人的（拳头）值班。

莉尔阿与Jahaka锚地的海盗有勾结，她的上司并不知道这一点，她从海盗的掠夺中获得了可观的利润。莉尔阿在南扎路港的间谍为她提供了船只的清单和离港时间表，她通过一个短讯石将这些信息传递给海盗；海盗船长扎如姆·艾萨亚克持有匹配的石头（见"贾哈卡锚地"）。由于他们的安排，海盗同意了Portyr的要求，即永远不攻击悬挂博德之门旗帜的船只。莉尔阿从海盗的利润中分得一杯羹，其中一部分用于支付给她的守军奖金，以保持士兵们的快乐。

尽管莉尔阿·波提尔算是某种反派，但她没有理由成为角色们的敌人。她大部分时间都花在管理她的要塞安全、审查战地报告以及筛选来自南扎路港间谍的报告上。她钦佩冒险家，只要角色们没有做出挑衅她的行为，她可以为他们提供有用的建议和物质援助，以对抗潜伏在丛林中的无数威胁。

莉尔阿对她的巡逻队从南方带回的报告感到困惑。他们在丛林中发现了大型生物的踪迹，这些生物与已知生活在楚尔特的任何生物都不匹配。（她的巡逻队发现了霜巨人寻找阿图斯·辛贝尔的迹象。）

鉴于博德之门是领主联盟的成员，要塞中散布着一些联盟特工，这不足为奇。翡翠盟约也在这里设有专家向导。其中一位名叫卡瓦沙（见"寻找向导"）的德鲁伊非常受推崇。

冒险家们访问贝路利安堡的主要原因是购买"探险许可证"。博德之门声称拥有Mistcliff以东和Kitcher's Inlet以北的所有地区，并且由于Mezro已经被彻底搜刮一空，它现在正试图将其主张扩展到南部的Refuge Bay。没有人（包括南扎路港的商人王子们）在楚尔特拥有足够的力量来争议这一主张。因此，在它的领土内，Flaming Fist为所欲为，包括要求探险家购买许可证。许可证授予持有人探索楚尔特并掠夺其财富的许可，但探险队收益和发现的一半必须交给Flaming Fist。许可证的费用是50金币，被视为利润分成的首付。此外，购买许可证的人可以以每个tenday每人1金币的合理价格雇佣多达六名Flaming Fist雇佣兵（警卫）陪同他们。没有许可证也可以很容易地从南扎路港发起探险队。唯一的风险是，如果Flaming Fist的巡逻队遇到没有许可证的探险队，它将攻击探险队并没收其装备。

进出要塞的所有物资都要经过贝卢阿瑞安登陆点，这里不过是一段海滩，上面有几座木制建筑位于潮线之上。船只停泊在离岸半英里的地方，人们和物资通过划艇来回摆渡。六名烈焰之拳警卫保卫着这个站点；他们的主要任务是来回划船。遇到危险时，他们可以把自己封锁在最坚固的木制建筑内，或者划船出海，直到威胁他们的东西失去兴趣并离开。

从贝卢阿瑞安登陆点到要塞的徒步旅行是沿着一条标记清晰的小径进行的，全程14英里。这条小径没有巡逻。`,spotlightRefs:[],presentNpcIds:["npc_liara_portyr","npc_zaroum_al_saryak","npc_artus_cimber","npc_qawasha"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[54],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"博德之门的旗帜飘扬在这个木制栅栏上。整个结构坐落在一个10尺高的土丘上，土丘的侧面被垂直削平，使其陡峭且难以攀爬。堡垒的主门朝向西方。在栅栏的东侧，一座高大的塔楼俯瞰着周围的荒野。",dmGuidance:"如果角色们计划探索东海岸和提尔基河之间的区域，或者他们已经去过那里并看到了任何异常情况，她将对他们能提供的任何关于这个神秘现象的信息表示感谢。",mapGeometry:{imageRef:"adventure/ToA/028-0310.webp"}},{id:"scn_0f4",locationId:"loc_0f2",name:"1. 西门",activation:{condition:{type:"always"},priority:0},skeleton:["主入口由两扇巨大的木门和需要八个人才能推开的横杆关闭。","由于该区域有巡逻，并且要塞拥有极佳的全方位视线，大门在白天通常是敞开的，除非大雨限制了能见度并允许偷袭的可能性。","西门楼的墙壁高达20尺，六个警卫日夜在城墙上巡逻。","环绕营地其余部分的墙壁高12尺，但由于要塞的地势较高，从外面看它们看起来更高。"],flesh:"主入口由两扇巨大的木门和需要八个人才能推开的横杆关闭。由于该区域有巡逻，并且要塞拥有极佳的全方位视线，大门在白天通常是敞开的，除非大雨限制了能见度并允许偷袭的可能性。西门楼的墙壁高达20尺，六个警卫日夜在城墙上巡逻。环绕营地其余部分的墙壁高12尺，但由于要塞的地势较高，从外面看它们看起来更高。",spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0f5",locationId:"loc_0f2",name:"2. 矿石门",activation:{condition:{type:"always"},priority:0},skeleton:["尽管有这个名字，要塞南墙上的这个次要大门与矿石无关。","这是一个出击口，要塞的防御者可以用它来对攻击主门的敌人发起反击。","它大部分时间都是牢固关闭并上闩的。"],flesh:"尽管有这个名字，要塞南墙上的这个次要大门与矿石无关。这是一个出击口，要塞的防御者可以用它来对攻击主门的敌人发起反击。它大部分时间都是牢固关闭并上闩的。",spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0f6",locationId:"loc_0f2",name:"3. 盔甲匠/武器匠",activation:{condition:{type:"always"},priority:0},skeleton:["楚尔特的铁矿为守军提供了制造武器、盔甲和金属工具及器具所需的一切。","Korhie Donadrue（LG男性Chondathan人类间谍）是堡垒的首席铁匠。","他曾在成为一名铁匠之前多年作为冒险家，因此他喜欢有冒险家和探险者在他的工作区花时间，交换故事并分享世界新闻。","Donadrue本可以给他们更便宜的价格，但价格是由烈焰之拳设定的。"],flesh:`楚尔特的铁矿为守军提供了制造武器、盔甲和金属工具及器具所需的一切。Korhie Donadrue（LG男性Chondathan人类间谍）是堡垒的首席铁匠。他曾在成为一名铁匠之前多年作为冒险家，因此他喜欢有冒险家和探险者在他的工作区花时间，交换故事并分享世界新闻。

Donadrue本可以给他们更便宜的价格，但价格是由烈焰之拳设定的。`,spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"角色们可以在这里购买大部分类型的武器、弹药和盔甲，价格比《玩家手册》中列出的高出25%。"},{id:"scn_0f7",locationId:"loc_0f2",name:"4. 市集",activation:{condition:{type:"always"},priority:0},skeleton:["有十几个商人居住在堡垒内并管理着它的集市。","来自堡垒的士兵只是他们生意的一小部分。","他们的大部分贸易涉及向探险者出售装备和向矿工提供补给。","这些商人还买卖宝石、毛皮、动物部件（羽毛、牙齿等）以及小动物。"],flesh:"有十几个商人居住在堡垒内并管理着它的集市。来自堡垒的士兵只是他们生意的一小部分。他们的大部分贸易涉及向探险者出售装备和向矿工提供补给。这些商人还买卖宝石、毛皮、动物部件（羽毛、牙齿等）以及小动物。",spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"由于驻地的偏远，他们的价格比玩家手册中的价格高出50%。"},{id:"scn_0f8",locationId:"loc_0f2",name:"5. 海尔姆神庙",activation:{condition:{type:"always"},priority:0},skeleton:["要塞居民向海尔姆祈祷，以求得对抗这片土地上危险的保护。","Shilau M'wenye（LN男性楚尔坦人类祭司）负责管理神庙并接受捐赠。","他的父亲是一位楚尔坦牧师，母亲是一位驻扎在楚尔特的寿族雇佣兵。","他总是尽力看到别人最好的一面，而不对他们进行评判。"],flesh:"要塞居民向海尔姆祈祷，以求得对抗这片土地上危险的保护。Shilau M'wenye（LN男性楚尔坦人类祭司）负责管理神庙并接受捐赠。他的父亲是一位楚尔坦牧师，母亲是一位驻扎在楚尔特的寿族雇佣兵。他总是尽力看到别人最好的一面，而不对他们进行评判。",spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0f9",locationId:"loc_0f2",name:"6. 马厩",activation:{condition:{type:"always"},priority:0},skeleton:["马匹并非Chult的原生动物，而且这里的气候（以及众多害虫）对这些动物来说很严苛。","尽管如此，一些来自Tethyrian的Flaming Fist成员还是带着他们的马匹来到了贝路利安堡，现在它们已成为堡垒文化的一部分。","这些马匹很少离开堡垒附近的区域；","在丛林中它们几乎无用。","马厩有十几个马厩。"],flesh:`马匹并非Chult的原生动物，而且这里的气候（以及众多害虫）对这些动物来说很严苛。尽管如此，一些来自Tethyrian的Flaming Fist成员还是带着他们的马匹来到了贝路利安堡，现在它们已成为堡垒文化的一部分。这些马匹很少离开堡垒附近的区域；在丛林中它们几乎无用。

马厩有十几个马厩。现在只有七匹马在马厩里（两匹乘用马和五匹未装备盔甲的战马）。

马厩管理员是秃头Thaeven（N男性Tethyrian人类平民，具有驯兽 +4）。在这个气候下，他尽可能地照顾动物，同时不断地抱怨在这个气候下无法妥善照顾马匹。`,spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0fa",locationId:"loc_0f2",name:"7. 马上比武场",activation:{condition:{type:"always"},priority:0},skeleton:["在要塞养马的主要原因是为了比武。","每月举行一次锦标赛，当足够多的人有休息时间，或者当两名烈焰之拳成员之间有需要解决的问题时，也会举行较小规模的比赛。","驻扎在贝路利安堡的Tethyrian士兵带来了他们的骑士盔甲和仪式，但他们将其与丛林美学相结合，创造出了独特的东西。","通常涉及猎鹰、龙、太阳等象征的图案在楚尔特让位于豹皮斗篷、恐龙主题纹章、形状像咆哮的豹子或俯冲的翼手龙的头盔，以及装饰有暴龙牙齿和鹦鹉羽毛的盔甲。","来自南扎路港的富有商人有时会特意前来参加比武锦标赛。"],flesh:`在要塞养马的主要原因是为了比武。每月举行一次锦标赛，当足够多的人有休息时间，或者当两名烈焰之拳成员之间有需要解决的问题时，也会举行较小规模的比赛。

驻扎在贝路利安堡的Tethyrian士兵带来了他们的骑士盔甲和仪式，但他们将其与丛林美学相结合，创造出了独特的东西。通常涉及猎鹰、龙、太阳等象征的图案在楚尔特让位于豹皮斗篷、恐龙主题纹章、形状像咆哮的豹子或俯冲的翼手龙的头盔，以及装饰有暴龙牙齿和鹦鹉羽毛的盔甲。

来自南扎路港的富有商人有时会特意前来参加比武锦标赛。他们在要塞周围搭建色彩斑斓的帐篷，并在比赛结果上下重注。`,spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"【赤拳代理人】如果冒险家们在贝路利安堡逗留一天，莉尔阿·波提尔会注意到他们，并派遣一名守卫将他们带到大厅（区域10C）。拒绝召唤的冒险家将被驱逐出要塞。那些同意与Liara会面的冒险家将被要求为烈焰之拳服务。对于他们所执行的每项服务，角色们会收到奖励。拒绝为烈焰之拳服务的角色可以继续他们的事务，但从那时起，他们在贝路利安堡购买的任何东西的价格将是正常价格的五倍。"},{id:"scn_0fc",locationId:"loc_0f2",name:"8. 烈焰之拳供应站",activation:{condition:{type:"always"},priority:0},skeleton:["堡垒的供应官，或称为军需官，是一家专门服务于赤拳士兵的商店。",'它的品种不多，价格也不理想，但是一些守军成员欣赏它的"不允许平民进入"的政策。',"商店在白天销售基本必需品，并在晚上提供食物和饮料。","这家商店由一个名叫Jaro（NG男性Chultan人类平民）的尖刻老人经营。"],flesh:'堡垒的供应官，或称为军需官，是一家专门服务于赤拳士兵的商店。它的品种不多，价格也不理想，但是一些守军成员欣赏它的"不允许平民进入"的政策。商店在白天销售基本必需品，并在晚上提供食物和饮料。这家商店由一个名叫Jaro（NG男性Chultan人类平民）的尖刻老人经营。',spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0fd",locationId:"loc_0f2",name:"9. 烈焰拳团军营",activation:{condition:{type:"always"},priority:0},skeleton:["兵营是堡垒中征召守军的睡觉、吃饭以及一般避雨的空间。","在特别闷热的夜晚，许多士兵会离开兵营，在守望塔里吊起吊床。","城墙顶部的微风提供了一些凉爽和缓解昆虫骚扰的效果。"],flesh:`兵营是堡垒中征召守军的睡觉、吃饭以及一般避雨的空间。

在特别闷热的夜晚，许多士兵会离开兵营，在守望塔里吊起吊床。城墙顶部的微风提供了一些凉爽和缓解昆虫骚扰的效果。`,spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0fe",locationId:"loc_0f2",name:"10. 内堡",activation:{condition:{type:"always"},priority:0},skeleton:["这个堡垒是要塞内的堡垒。","在屋顶的顶峰，围场高达20尺，附加的栅栏高达16尺，因此整个结构可以从贝路利安堡外部看到。","除非要塞受到攻击或巡逻队报告附近有不寻常数量的不死生物，否则大门总是敞开的。","如果外墙被突破，主围场被攻占，驻军将撤退到这个防御工事进行最后的防御。"],flesh:"这个堡垒是要塞内的堡垒。在屋顶的顶峰，围场高达20尺，附加的栅栏高达16尺，因此整个结构可以从贝路利安堡外部看到。除非要塞受到攻击或巡逻队报告附近有不寻常数量的不死生物，否则大门总是敞开的。如果外墙被突破，主围场被攻占，驻军将撤退到这个防御工事进行最后的防御。",spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_0ff",locationId:"loc_0f2",name:"10A. 庭院",activation:{condition:{type:"always"},priority:0},skeleton:["城堡的中心庭院是露天的。","它可以用沉重的大门封闭，并且即使只有少数士兵也能坚固地防守。","庭院周围安装了木板人行道，这样下雨时人们就不必在泥泞中行走。","庭院中央矗立着一座木制雕像，雕像刻画的是一位身穿盔甲的男子。","这座雕像描绘的是博德之门的领袖，赤拳的领导者，大公爵乌尔德·瑞文嘉德。"],flesh:`城堡的中心庭院是露天的。它可以用沉重的大门封闭，并且即使只有少数士兵也能坚固地防守。庭院周围安装了木板人行道，这样下雨时人们就不必在泥泞中行走。

庭院中央矗立着一座木制雕像，雕像刻画的是一位身穿盔甲的男子。这座雕像描绘的是博德之门的领袖，赤拳的领导者，大公爵乌尔德·瑞文嘉德。`,spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_100",locationId:"loc_0f2",name:"10B. 猛禽笼",activation:{condition:{type:"always"},priority:0},skeleton:["六只鸭嘴龙和四只恐爪龙（见附录D，了解这两种生物的具体数值）被安置在受保护的马厩中。","鸭嘴龙用作小规模、快速移动的巡逻队伍的坐骑或作为较大规模、更长时间的巡逻队伍的驮兽。","恐爪龙用于狩猎——像狗一样，只是要凶猛得多。","这些动物受到要塞士兵的高度尊重。","堡垒爬行动物的首席训练师是Rahl Zuberi（CG男性人类Chultan 部族武者，具有驯兽 +4技能）。"],flesh:`六只鸭嘴龙和四只恐爪龙（见附录D，了解这两种生物的具体数值）被安置在受保护的马厩中。鸭嘴龙用作小规模、快速移动的巡逻队伍的坐骑或作为较大规模、更长时间的巡逻队伍的驮兽。恐爪龙用于狩猎——像狗一样，只是要凶猛得多。这些动物受到要塞士兵的高度尊重。

堡垒爬行动物的首席训练师是Rahl Zuberi（CG男性人类Chultan 部族武者，具有驯兽 +4技能）。他的脸部和手臂上布满了纹身和伤疤，并且他失去了右手的一半；疤痕组织中仍然清晰可见的齿痕。尽管Rahl外表凶猛，他实际上是个快乐的恶作剧者，大部分休息时间都在供应处或集市中的一个啤酒帐篷里讲述狂野的故事，以换取免费饮料。`,spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_101",locationId:"loc_0f2",name:"10C. 大厅",activation:{condition:{type:"always"},priority:0},skeleton:["围场的大厅是进行大部分军事事务的地方，也是莉尔阿·波提尔（见附录D）会见重要访客的地方。","它看起来像一个狩猎小屋，墙上挂着恐龙头和头骨，以及像挂毯一样挂着的异国动物的毛皮。","莉尔阿持有通向锁着的储藏室门（区域10G）和她住处的铁制保险箱（区域10I）的一串钥匙。"],flesh:`围场的大厅是进行大部分军事事务的地方，也是莉尔阿·波提尔（见附录D）会见重要访客的地方。它看起来像一个狩猎小屋，墙上挂着恐龙头和头骨，以及像挂毯一样挂着的异国动物的毛皮。

莉尔阿持有通向锁着的储藏室门（区域10G）和她住处的铁制保险箱（区域10I）的一串钥匙。`,spotlightRefs:[],presentNpcIds:["npc_liara_portyr","npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:'如果角色们与她会面，她会为他们提供一项或多项特殊任务（见"烈焰之拳的代理人"侧边栏）。'},{id:"scn_102",locationId:"loc_0f2",name:"10D. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["这个厨房为营地的军官和客人服务，并在节日期间准备特殊餐食。","列兵主要由小队自己负责准备自己的食物；","大部分工作在兵营区域进行。","Sigbeorn Dunebar（NG男性Illuskan人类老兵）在楚尔特度过的年头超过了任何其他活着的赤拳成员，并且他非常喜欢这里。","当他年纪太大，不再适合在丛林中战斗和巡逻时，他自愿转到了厨房。"],flesh:`这个厨房为营地的军官和客人服务，并在节日期间准备特殊餐食。列兵主要由小队自己负责准备自己的食物；大部分工作在兵营区域进行。

Sigbeorn Dunebar（NG男性Illuskan人类老兵）在楚尔特度过的年头超过了任何其他活着的赤拳成员，并且他非常喜欢这里。当他年纪太大，不再适合在丛林中战斗和巡逻时，他自愿转到了厨房。现在，他不仅是主厨，更重要的是，在指挥官的领导下，他负责确保堡垒始终有充足的食物供应。`,spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_103",locationId:"loc_0f2",name:"10E. 城堡指挥官",activation:{condition:{type:"always"},priority:0},skeleton:["贝路利安堡的城堡主是Gruta Halsdottir（LN女性Illuskan人类骑士）。","作为城堡主，她是莉尔阿·波提尔的第二指挥官，负责要塞日常运作的每一个细节。","如果士兵违反规定，Gruta决定惩罚。","如果巡逻队在丛林中迟迟未归，找出原因是她的职责。","当陌生人到达时，Gruta是迎接他们、了解他们来意并决定他们是否值得莉尔阿·波提尔时间的人。"],flesh:`贝路利安堡的城堡主是Gruta Halsdottir（LN女性Illuskan人类骑士）。作为城堡主，她是莉尔阿·波提尔的第二指挥官，负责要塞日常运作的每一个细节。如果士兵违反规定，Gruta决定惩罚。如果巡逻队在丛林中迟迟未归，找出原因是她的职责。当陌生人到达时，Gruta是迎接他们、了解他们来意并决定他们是否值得莉尔阿·波提尔时间的人。

这个房间是Gruta的办公室；她的卧室在楼上。她的职责让她在堡垒中到处跑，所以她白天通常不在这里。她持有一套钥匙，可以打开储藏室的门（区域10G）。`,spotlightRefs:[],presentNpcIds:["npc_liara_portyr","npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_104",locationId:"loc_0f2",name:"10F. 钟楼",activation:{condition:{type:"always"},priority:0},skeleton:["钟楼在围场的茅草屋顶上方又高出10尺，总体高度达到30尺。","在平常的一天中，钟会敲响十二次：每四小时敲响一次，以标志换岗，每次换岗前10分钟也会敲响，以信号即将换岗。","在换岗时，钟会根据岗次敲响相应次数：第一次岗开始时敲响一次，第二次岗开始时敲响两次，以此类推。",'在要塞所称的"唤醒时刻"，钟会敲响一次。',"如果营地范围内发生警报，警钟会连续敲响至少半分钟。"],flesh:`钟楼在围场的茅草屋顶上方又高出10尺，总体高度达到30尺。在平常的一天中，钟会敲响十二次：每四小时敲响一次，以标志换岗，每次换岗前10分钟也会敲响，以信号即将换岗。在换岗时，钟会根据岗次敲响相应次数：第一次岗开始时敲响一次，第二次岗开始时敲响两次，以此类推。在要塞所称的"唤醒时刻"，钟会敲响一次。

如果营地范围内发生警报，警钟会连续敲响至少半分钟。在开阔地带的生物可以听到2英里外的钟声，而在丛林中的生物则可以听到1英里外的钟声。`,spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_105",locationId:"loc_0f2",name:"10G. 仓库",activation:{condition:{type:"always"},priority:0},skeleton:["重要物资储备被锁在这两个房间内。","每个房间的门都上了锁，只有莉尔阿·波提尔和格鲁塔·哈尔斯多蒂尔持有钥匙。","这里存放的物资包括诸如纸张和墨水、锁具、衣物、靴子、绳索、灯笼、灯油和蜡烛等普通物品。","第二个房间包含四瓶治疗药水，四个法术卷轴（两个en=Lesser Restoration和两个en=Purify Food and Drink），一个箭袋中有五支+1 箭矢，以及一个命令水元素水钵（用于要塞的最后防线）。","波提尔和哈尔斯多蒂尔不会向冒险家透露这些宝藏，无论他们看起来多么可靠。"],flesh:`重要物资储备被锁在这两个房间内。每个房间的门都上了锁，只有莉尔阿·波提尔和格鲁塔·哈尔斯多蒂尔持有钥匙。每扇门由厚重的木材制成，并用铁条加固（AC 17，20点生命值，免疫毒素和心灵伤害），其锁可以通过盗贼工具和一次成功的DC 20敏捷检定撬开。

这里存放的物资包括诸如纸张和墨水、锁具、衣物、靴子、绳索、灯笼、灯油和蜡烛等普通物品。

第二个房间包含四瓶治疗药水，四个法术卷轴（两个en=Lesser Restoration和两个en=Purify Food and Drink），一个箭袋中有五支+1 箭矢，以及一个命令水元素水钵（用于要塞的最后防线）。波提尔和哈尔斯多蒂尔不会向冒险家透露这些宝藏，无论他们看起来多么可靠。`,spotlightRefs:[],presentNpcIds:["npc_liara_portyr","npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_105_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_107",locationId:"loc_0f2",name:"10H. 铁手套房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个待命室原本打算作为分配给城堡内定期守卫任务的小队士兵的住房，但它已被Sigbeorn Dunebar（见区域10D）和其他三名在赤拳守军中担任下士（手铐）的老兵接管作为他们的宿舍。"],flesh:"这个待命室原本打算作为分配给城堡内定期守卫任务的小队士兵的住房，但它已被Sigbeorn Dunebar（见区域10D）和其他三名在赤拳守军中担任下士（手铐）的老兵接管作为他们的宿舍。",spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_108",locationId:"loc_0f2",name:"10I. 指挥区",activation:{condition:{type:"always"},priority:0},skeleton:["莉尔阿·波提尔 睡在南边的房间里，而Gruta Halsdottir睡在更小的东南房间里。","两个房间都包含书籍、衣服和其他个人物品。","一个角色如果在莉尔阿·波提尔的床下搜寻，会发现一个上锁的铁制保险箱。","箱子里有220枚金币和一块短讯石，莉亚拉用它来与贾哈卡锚地的海盗们联系。"],flesh:`莉尔阿·波提尔 睡在南边的房间里，而Gruta Halsdottir睡在更小的东南房间里。两个房间都包含书籍、衣服和其他个人物品。

一个角色如果在莉尔阿·波提尔的床下搜寻，会发现一个上锁的铁制保险箱。使用盗贼工具并通过DC 18敏捷检定成功的角色可以将其撬开。箱子里有220枚金币和一块短讯石，莉亚拉用它来与贾哈卡锚地的海盗们联系。`,spotlightRefs:[],presentNpcIds:["npc_liara_portyr","npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_108_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_10a",locationId:"loc_0f2",name:"10J. 客房",activation:{condition:{type:"always"},priority:0},skeleton:["重要的客人有时会来到要塞：来自南扎路港的商人王子，烈焰之拳的高级军官，或博德之门的贵族。","这些人会被安排在这些房间中的一个或多个住宿。","例子包括将有价值的发现交给赤拳，领导反击攻击的不死生物，或者带来证据证明他们击退了霜巨人的入侵。"],flesh:`重要的客人有时会来到要塞：来自南扎路港的商人王子，烈焰之拳的高级军官，或博德之门的贵族。这些人会被安排在这些房间中的一个或多个住宿。

例子包括将有价值的发现交给赤拳，领导反击攻击的不死生物，或者带来证据证明他们击退了霜巨人的入侵。`,spotlightRefs:[],presentNpcIds:["npc_zaroum_al_saryak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色们做了一些事情来赢得这项特权，他们可能会被提供使用一个或多个这些房间。"},{id:"scn_10b",locationId:"loc_10b",name:"乌塔欧之心",activation:{condition:{type:"always"},priority:0},skeleton:["一大块从地面撕裂出来的泥土和岩石在沼泽森林上方漂浮，距离地面约两百尺。","一棵石化的树高耸在石头上方，其石化的树根从底部伸出。","岩石的形状和树枝的分叉，给人一种巨大的石心悬挂在天空中的印象。","树根滴下的红色液体使得这种印象更加阴森。",'你在缓慢旋转的"心脏"一侧看到了一个洞穴口，还有一条从洞穴蜿蜒至石化树所在的平坦顶部的楼梯。'],flesh:`乌塔欧之心（地图2.8）是一个土元素体——一大块被魔法悬浮在空中，无法被解除的土壤。它距离地面200尺，并缓慢地逆时针旋转，每小时完成一次旋转。Chultans称其为乌塔欧之心，因为土元素体形状模糊地像心脏，并且石化的树木增添了静脉和动脉的印象。滴下的红色液体是雨水，它通过岩石中的铁矿床过滤后被染色。

见过土元素体的Chultans相信它实际上是神乌博涛的石化心脏，并且他们认为它是神圣的。乌博涛的祭司们过去常常骑着飞行恐龙来到这里，在心脏内寻求异象，并恳求乌博涛回归。如果许多Chultans得知乌塔欧之心已经变成了一个不死生物的巢穴，他们会感到非常愤怒。

瓦琳朵拉·暗影斗篷为萨扎斯坦工作，萨扎斯坦是泰伊红袍法师中最强大的巫妖，尽管Valindra本人并不是红袍法师。她发现了这颗心脏并将其改造成了一个基地，供她的手下在寻找Soulmonger时使用。她从萨扎斯坦那里接到的命令是，如果可能的话，夺取Soulmonger的控制权，否则就将其摧毁。Valindra在心脏内部创建了一个en=Teleportation Circle，她用它来瞬间往返于泰伊（她的圣物被安全地存放在那里），向萨扎斯坦汇报并获取新指示。

探索乌塔欧之心的角色肯定会遇见瓦琳朵拉。她考虑过冒险者们的目标可能与她相同，所以她不一定对他们怀有敌意。她的任务是以任何方式拿下易魂装置；

瓦琳朵拉 是一位精灵巫妖，具有以下变化：

瓦琳朵拉是中立邪恶的。

她会说深渊语、通用语、龙语、矮人语、精灵语和地狱语。

准备她的法术时，瓦琳朵拉可以将她的已准备法术列表上的任何法术替换为同一环阶的另一个法师法术。

作为附赠行动，瓦琳朵拉可以掩饰她的干瘪肉体，看起来就像一位活着的精灵。这种魔法幻象持续至她使用附赠动作结束，或直到她使用她的传奇动作恐惧凝视。如果瓦琳朵拉的 HP 下降到 30 或更少，或者如果在她身上施放一个en=Dispel Magic，该效应也会结束。

她无法在乌塔欧之心中采取巢穴行动。

凭借她那和活着的精灵一样的外貌，瓦琳朵拉可以很容易地隐藏她的巫妖特征以及她与塞尔的联系。她自己表现地像是一位想要"封印"易魂装置的大法师；这样，她就可以在安全地与世界相隔离的同时研究其独特的魔力。她认为，摧毁它应该是最后的手段。

瓦琳朵拉相信Soulmonger隐藏在Omu遗迹的某个地方。即使她怀疑角色们将来可能会背叛她，她也会与他们分享这些信息，因为在这期间，他们可能会削弱Omu的一些防御。

过了一会儿，她用精灵语向他们打招呼，询问他们的名字、他们为何而来等等。如果这次对话进展顺利，她就会打开一个en=Arcane Gate（从卷轴中施放），并邀请玩家角色上来。如果他们有很多搬运工或非玩家角色战士，她要求只有"关键人物"上来，解释说她的家没有足够的空间容纳他们的整个探险队。瓦琳朵拉向角色们保证，他们的同伴在地面上将是安全的。

只要还有机会利用这些角色，巫妖对杀死他们没有兴趣。除非角色们挑起战斗（否则几乎没有理由发生战斗），瓦琳朵拉会让她不死的仆从去对付冒险家，然后通过她的en=Teleportation Circle悄悄回到Thay。目的地符文没有记录在心脏的任何地方，所以跟随她是不可能的。几天后，当事情平息下来时，她会回来。从那时起她将如何继续，留给你的想象。`,spotlightRefs:[],presentNpcIds:["npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`一大块从地面撕裂出来的泥土和岩石在沼泽森林上方漂浮，距离地面约两百尺。一棵石化的树高耸在石头上方，其石化的树根从底部伸出。岩石的形状和树枝的分叉，给人一种巨大的石心悬挂在天空中的印象。树根滴下的红色液体使得这种印象更加阴森。
你在缓慢旋转的"心脏"一侧看到了一个洞穴口，还有一条从洞穴蜿蜒至石化树所在的平坦顶部的楼梯。楼梯绝对不是自然形成的；它是用工具雕刻在岩石上的。`,dmGuidance:`如果冒险者可以帮助她实现这一目标，她会利用他们。
如果角色们在首次遇到地动时没有办法到达那里——或者至少，没有办法让每个人都到达——最终他们会看到一个精灵女性从楼梯上俯视着他们。`,mapGeometry:{imageRef:"adventure/ToA/031-0311.webp"}},{id:"scn_10d",locationId:"loc_10b",name:"1. 石化树",activation:{condition:{type:"always"},priority:0},skeleton:["一群蝙蝠群栖息在这个空心的石化树中。","每晚蝙蝠们会出来觅食，并攻击任何进入它们巢穴的温血生物。","在树底部有一个大洞，它通向区域4的天花板。"],flesh:"一群蝙蝠群栖息在这个空心的石化树中。每晚蝙蝠们会出来觅食，并攻击任何进入它们巢穴的温血生物。在树底部有一个大洞，它通向区域4的天花板。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_10d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_10e",locationId:"loc_10b",name:"2. 楼梯",activation:{condition:{type:"always"},priority:0},skeleton:["这些楼梯表面光滑，磨损迹象不多。","只有少数生物走过它们：瓦琳朵拉、她的几个仆人，以及前往心脏朝圣的乌博涛祭司。","除非角色做出愚蠢的事情，否则没有摔下去的风险，但高度令人眩晕。"],flesh:"这些楼梯表面光滑，磨损迹象不多。只有少数生物走过它们：瓦琳朵拉、她的几个仆人，以及前往心脏朝圣的乌博涛祭司。除非角色做出愚蠢的事情，否则没有摔下去的风险，但高度令人眩晕。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_10f",locationId:"loc_10b",name:"3. 洞穴入口",activation:{condition:{type:"always"},priority:0},skeleton:["这个入口的地面向心脏内部微微倾斜，因此水流不断地通过它流出。","这个洞穴口看起来是自然的，与它外面的阶梯不同。"],flesh:"这个入口的地面向心脏内部微微倾斜，因此水流不断地通过它流出。这个洞穴口看起来是自然的，与它外面的阶梯不同。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_110",locationId:"loc_10b",name:"4. 瓦琳朵拉的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴潮湿发霉，光线昏暗，日光透过上方20英尺处中空的石化树干照射下来。","一滩浑浊的雨水占据着地面中央20英尺的区域，位于由石化树根形成的天然石柱之间。","三个高大的书架靠在洞穴入口右侧的墙边。","一张桌子和几个木箱靠在左侧墙边。","入口对面是两个通往较小房间的敞开门口，中间是一个大铁笼。"],flesh:`瓦琳朵拉的不死生物巡逻队有时会捕获不幸的探险者并将他们带到此处。囚犯们被关在铁笼里，Valindra会审问他们，然后将其丢弃在沼泽中。

作为巫妖，瓦琳朵拉并不在意洞穴的潮湿和不舒适。如果提到这个话题，她会解释说，作为精灵，她不需要床或长时间的睡眠；她每天只需在她的桌子上冥想一会儿。她的其余时间都花在研究地图和历史记录上，寻找Soulmonger的可能藏身之处。

书架上摆满了书籍、卷轴、石板和地图，它们都以这样或那样的方式关于楚尔特。它们深入覆盖了历史、地理、文化和自然哲学，但所有这些资料都早于咒灾。如果瓦琳朵拉得知其存在，她会不惜杀人以获取辛德拉·席尔瓦因的地图。她的法术书并不在这里——它们安全地存放在泰伊——但书架上确实有两卷法术卷轴，上面记载着en=Arcane Gate。`,spotlightRefs:[],presentNpcIds:["npc_valindra_shadowmantle","npc_artus_cimber","npc_dragonbait","npc_syndra_silvane"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_110_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[60],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴潮湿发霉，光线昏暗，日光透过上方20英尺处中空的石化树干照射下来。一滩浑浊的雨水占据着地面中央20英尺的区域，位于由石化树根形成的天然石柱之间。三个高大的书架靠在洞穴入口右侧的墙边。一张桌子和几个木箱靠在左侧墙边。入口对面是两个通往较小房间的敞开门口，中间是一个大铁笼。",dmGuidance:"当角色们到达时，铁笼并未在使用中，除非你选择将阿图斯·辛贝尔和龙饵作为囚犯放置在这里。"},{id:"scn_113",locationId:"loc_10b",name:"5. 不死生物守卫",activation:{condition:{type:"always"},priority:0},skeleton:["这个壁橱里塞着六个Chultan 丧尸们和两个四臂猿怪丧尸（见附录D）。","它们在这里静止不动，直到被攻击，或者直到瓦琳朵拉召唤它们出来战斗或充当仆人。"],flesh:"这个壁橱里塞着六个Chultan 丧尸们和两个四臂猿怪丧尸（见附录D）。它们在这里静止不动，直到被攻击，或者直到瓦琳朵拉召唤它们出来战斗或充当仆人。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_113"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[60],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_114",locationId:"loc_10b",name:"6. 传送阵",activation:{condition:{type:"always"},priority:0},skeleton:["瓦琳朵拉的 en=Teleportation Circle 被刻在这个房间的地板上。","任何具有奥秘技能熟练度的人都能认出这个圆圈是什么，并且可以将其符号写下来或记住，以便将其作为另一个en=Teleportation Circle的目的地使用。","Valindra不会愚蠢到在这个巢穴的某处留下她泰伊传送门的符号，所以如果她选择逃跑，没有人可以跟随她。"],flesh:"瓦琳朵拉的 en=Teleportation Circle 被刻在这个房间的地板上。任何具有奥秘技能熟练度的人都能认出这个圆圈是什么，并且可以将其符号写下来或记住，以便将其作为另一个en=Teleportation Circle的目的地使用。Valindra不会愚蠢到在这个巢穴的某处留下她泰伊传送门的符号，所以如果她选择逃跑，没有人可以跟随她。",spotlightRefs:[],presentNpcIds:["npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[60],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_115",locationId:"loc_115",name:"希萨里",activation:{condition:{type:"always"},priority:0},skeleton:["这座被毁的yuan-ti城市位于Crown火山脚下的丛林中，Crown火山是Sky Lizard山脉西端的一个冒烟的火山。","一个类似于en=Antipathy/Sympathy法术的强大结界阻止了yuan-ti进入这座城市。","许多曾经居住在这里的蛇人已经迁移到了Omu。","大地吞噬了这座城市的一半，它位于一个从未被阳光温暖的庞大地下洞穴中。","Hisari的其余部分仍然位于地面之上，被藤蔓和攀缘植物所包围。"],flesh:`这座被毁的yuan-ti城市位于Crown火山脚下的丛林中，Crown火山是Sky Lizard山脉西端的一个冒烟的火山。一个类似于en=Antipathy/Sympathy法术的强大结界阻止了yuan-ti进入这座城市。许多曾经居住在这里的蛇人已经迁移到了Omu。

大地吞噬了这座城市的一半，它位于一个从未被阳光温暖的庞大地下洞穴中。Hisari的其余部分仍然位于地面之上，被藤蔓和攀缘植物所包围。每一块砖和柱子都覆盖着苔藓，裂缝累累的金色圆顶被根和灰烬构成的格子覆盖。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[60],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_116",locationId:"loc_116",name:"赫拉卡马尔",activation:{condition:{type:"always"},priority:0},skeleton:["附近的火山爆发迫使矮人们放弃了Hrakhamar（地图2.9）。","他们一直打算在认为安全的时候重新占领并重新激活锻造场，但那一天从未到来。","火蝾蜍搬进来并开始使用锻造炉为自己打造盔甲和武器。","一小群白化矮人潜伏在附近的丛林中，监视着锻造炉，但他们的人数太少，无法挑战火蝾蜍。","他们的发言人是直率的Sithi Vinecutter。"],flesh:`附近的火山爆发迫使矮人们放弃了Hrakhamar（地图2.9）。他们一直打算在认为安全的时候重新占领并重新激活锻造场，但那一天从未到来。

火蝾蜍搬进来并开始使用锻造炉为自己打造盔甲和武器。一小群白化矮人潜伏在附近的丛林中，监视着锻造炉，但他们的人数太少，无法挑战火蝾蜍。

他们的发言人是直率的Sithi Vinecutter。她明确地陈述了问题（"火蜥蜴占领了我们的祖传锻造场"）并提出了解决方案（"杀死它们"）。作为奖励，每个角色将被允许从锻造场拿走二十个1磅重的精炼金刚石锭，并且矮人们将带领他们前往一个来自遥远之地的坠毁的"飞艇"的位置（见"星辰女神号的残骸"）。

矮人们提出在角色们清除Hrakhamar的火蝾蜍时在外面守卫。她记得锻造炉的布局，但不知道里面有多少火蝾蜍，或者它们可能藏在哪里。

当矮人操作这座熔炉时，它通过贸易道路与希库湾和半岛上的其他地点相连。虽然这些道路已经荒废了一个世纪，但在熔炉附近，它们是由矮人建造的，即使一个世纪的失修也无法抹去矮人道路的痕迹。在荣誉失落谷，道路被埋在灰烬下，但在山脉高出灰烬平原的地方，道路可以轻松地被发现，并跟随它到达熔炉的入口。一个角色在检查道路时成功通过 DC 13 感知（求生）检定，会看到火蜥蜴或其他火焰生物使用的灼烧痕迹。

入口逐渐变窄，只有5尺宽，10尺高。隧道以这种方式延伸，向下倾斜得非常轻微，但偶尔有楼梯向下，延伸了四分之三英里后才到达锻造炉本身。墙壁和地板上布满了烧焦的痕迹。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[60],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"入口是一个10尺高的拱形门道，上方是一把交叉的锤子和钳子的巨大浮雕雕刻。原本安装了两扇铁门，但一扇躺在地上，已经完全锈蚀脱离了铰链，另一扇下垂得如此严重，看起来随时都可能倒塌。曾经有几座建筑物矗立在锻造场外，但它们已经减少到只剩下地基。",dmGuidance:`如果角色们在锻造场10英里（1六边形）范围内旅行，四名白化病矮人战士（见附录D）会发现并接近他们。
如果角色们看起来力量不足或需要向导，Sithi提出陪同他们。
当角色们到达Hrakhamar时，阅读：`},{id:"scn_118",locationId:"loc_116",name:"1. 岩浆裂缝",activation:{condition:{type:"always"},priority:0},skeleton:["矮人们利用了Hrakhamar中心的一处火山裂缝来冶炼铁和精金，他们将这些材料放入粘土坩埚中，然后下放到岩浆中。","一个充满熔岩的洞穴在你面前冒着气泡和火焰。","洞穴壁上排列着金属走道和起重机，支撑着装满烧焦粘土的巨大坩埚。","巨大的链条横跨洞穴，显然是用来在熔岩上运输多吨矿石的桶。","热量夺走了你的呼吸，让你的眼睛充满水汽，并烤焦了你的皮肤。"],flesh:`矮人们利用了Hrakhamar中心的一处火山裂缝来冶炼铁和精金，他们将这些材料放入粘土坩埚中，然后下放到岩浆中。

岩浆位于走道和轨道矿车桥架下方10尺处。两条巨大的链条横跨裂缝，允许矿石在桶中被吊起穿过。

成功通过DC 10力量（运动）检定，角色可以手把手地沿着其中一条链条传送带穿过。如果检定失败，角色会坠入岩浆。掉入岩浆或在其回合开始时位于岩浆中的生物会受到55（10d10）点火焰伤害。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个充满熔岩的洞穴在你面前冒着气泡和火焰。洞穴壁上排列着金属走道和起重机，支撑着装满烧焦粘土的巨大坩埚。巨大的链条横跨洞穴，显然是用来在熔岩上运输多吨矿石的桶。热量夺走了你的呼吸，让你的眼睛充满水汽，并烤焦了你的皮肤。从你站立的地方，唯一明显的过路方式是通过为矿车建造的狭窄石桥。有节奏的敲打声来自岩浆裂缝的某处。",dmGuidance:"如果角色通过两条轨道矿车栈桥中的一条穿过岩浆，就不会有坠落的危险。"},{id:"scn_11a",locationId:"loc_116",name:"2. 冶炼厂",activation:{condition:{type:"always"},priority:0},skeleton:["敲打声变得越来越响，但它不是来自前面的房间。","这个巨大、矩形的房间是一个工作的冶炼炉。","房间中心的一个矩形坑里充满了熔铁。","围绕坑边排列着六个矮人设计制造的装置，它们吸走液态金属并提炼出杂质。","东南角的一个较小的池子里似乎盛着熔化的银。"],flesh:`敲打声来自东方。

八名火蝾螈武者（见附录D）在这里工作。他们忙于自己的任务，没有预料到会有入侵者，而且这个房间很吵闹，所以除非角色公开移动或以其他方式引起注意，否则火蜥蜴战士们将处于突袭状态。

中心坑内含有熔铁。较小的池子里含有熔化的精金，不是银。任何生物掉入任一坑中或在其上方开始其回合都会受到55（10d10）点火焰伤害。

南侧的起重机（悬在区域1上方）用来将一个矿石坩埚降入熔岩河中，直到矿石熔化。熔化的矿石沿着轨道滚到区域2，然后被倒入适当的大锅中。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_11a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`敲打声变得越来越响，但它不是来自前面的房间。这个巨大、矩形的房间是一个工作的冶炼炉。房间中心的一个矩形坑里充满了熔铁。围绕坑边排列着六个矮人设计制造的装置，它们吸走液态金属并提炼出杂质。东南角的一个较小的池子里似乎盛着熔化的银。
看起来像是人类两栖动物和元素火混合体的生物正在照看机器。到目前为止，它们还没有注意到你。`},{id:"scn_11c",locationId:"loc_116",name:"3. 军械库",activation:{condition:{type:"always"},priority:0},skeleton:["矮人们的敌人觊觎Hrakhamar的财富。","为了保卫他们的宝藏，矮人们在这个房间里囤积了武器和盔甲。","火蝾蜍没有动用大部分的物资；","他们更喜欢自己的武器，而不是更重的矮人设计，而且矮人的盔甲也不适合他们。","这个房间包括六个战斧、双手斧、钉头锤、晨星、战镐、战锤和重型十字弓，另外还有两百支十字弓弩箭和四套矮人中型板甲。"],flesh:`矮人们的敌人觊觎Hrakhamar的财富。为了保卫他们的宝藏，矮人们在这个房间里囤积了武器和盔甲。火蝾蜍没有动用大部分的物资；他们更喜欢自己的武器，而不是更重的矮人设计，而且矮人的盔甲也不适合他们。

这个房间包括六个战斧、双手斧、钉头锤、晨星、战镐、战锤和重型十字弓，另外还有两百支十字弓弩箭和四套矮人中型板甲。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色们由Sithi Vinecutter带领到这里，她愿意让每个角色拿走一件武器。"},{id:"scn_11d",locationId:"loc_116",name:"4. 锻造车间",activation:{condition:{type:"always"},priority:0},skeleton:["来自区域2的熔铁和精金被吊到这两个房间中最北边的一个，在那里被铸造成锭。","一些金属在房间中的铁砧上被加工成工具和替换部件，但大部分铁被转移到了金库（区域6）。","精金锭被送往锻造炉南部，房间中心的巨大冲压锤在那里敲打出杂质。","锻造炉中听到的敲打声就是来自这个机械驱动的锤子。","火蜥蜴的具体数值见附录D。"],flesh:`来自区域2的熔铁和精金被吊到这两个房间中最北边的一个，在那里被铸造成锭。一些金属在房间中的铁砧上被加工成工具和替换部件，但大部分铁被转移到了金库（区域6）。精金锭被送往锻造炉南部，房间中心的巨大冲压锤在那里敲打出杂质。锻造炉中听到的敲打声就是来自这个机械驱动的锤子。

火蜥蜴的具体数值见附录D。

4号和6号区域之间的走廊除了一个嵌入北墙、距离4号区域门20尺的沉重铁杆外，没有其他特征。杆子处于放下位置，可以轻松提起。如果那里的陷阱导致它收回，这样做会延伸通往区域6的走道。在走道伸出时移动杆子会导致岩石深处的齿轮转动片刻，但除此之外没有其他效果。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_11d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色们到达时，有四名火蝾螈武者在北边的房间里，另外六名火蝾螈武者在南边的房间里工作，在一名熔螈·伊米希魔契师的监督下。"},{id:"scn_11f",locationId:"loc_116",name:"5. 仓库",activation:{condition:{type:"always"},priority:0},skeleton:["在这些房间里，矮人们储存了各种物资，从食物到皮革围裙，到防护眼镜，再到羊皮纸和墨水。","火蝾蜍洗劫了所有这些东西。",'现在这些房间的主要特点是"巢穴"，由古老的矮人服装、隔热手套和其他软垫材料组成，火蝾蜍轮班在此睡觉。',"这个区域的气味令人作呕，就像烧焦的头发混合着烧焦的橡胶。","任何在这些房间中的干扰都会唤醒并吸引仓库区域所有的火蝾蜍。"],flesh:`在这些房间里，矮人们储存了各种物资，从食物到皮革围裙，到防护眼镜，再到羊皮纸和墨水。火蝾蜍洗劫了所有这些东西。现在这些房间的主要特点是"巢穴"，由古老的矮人服装、隔热手套和其他软垫材料组成，火蝾蜍轮班在此睡觉。这个区域的气味令人作呕，就像烧焦的头发混合着烧焦的橡胶。任何在这些房间中的干扰都会唤醒并吸引仓库区域所有的火蝾蜍。

西北房间无人居住。在东北房间里，三名火蝾螈武者正在用矮人的指关节玩knucklebones游戏。四名火蝾螈武者在西南房间的中央堆成一堆睡觉。东南房间里有两名火蜥蜴魔契师，来自伊米西在小声争论是否要因对伊米克斯的异端而谴责在区域4的魔契师。有关火蝾蜍的具体数值，请见附录D。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_11f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_120",locationId:"loc_116",name:"国库",activation:{condition:{type:"always"},priority:0},skeleton:["两套矮人制造的半身板甲矗立在一扇秘银镶边的铁门两侧。","这些盔甲曾经精美绝伦，但如今已被武器划伤、火焰烧焦，并沾满污秽。","铁门上下各有一把锁。","矮人们在离开Hrakhamar之前封闭了他们的宝库，至今它仍然被封闭着。","尽管火蜥蜴们尽了最大努力，但仍然无法强行打开门或破坏锁。"],flesh:`矮人们在离开Hrakhamar之前封闭了他们的宝库，至今它仍然被封闭着。尽管火蜥蜴们尽了最大努力，但仍然无法强行打开门或破坏锁。

门的上部锁具嵌在一个精金框架中，框架呈现为风格化的矮人符文，意为"开端"。能阅读矮人语的角色可以正确解读该符文。下部锁具原本嵌在一个黄金框架中，形状为风格化的矮人符文"终结"，但火蜥蜴人刮走了黄金，用来装饰他们献给伊米克斯的神殿（区域7）。门上的刮痕暗示了原先的存在；能阅读矮人语并通过一次DC 15智力（调查）检定者可正确解读。每把锁都能用盗贼工具并通过一次DC 20敏捷检定来撬开。

下方的锁是带陷阱的。如果通过成功的 DC 13 感知 (察觉) 检定可以发现这个陷阱，但无法解除或绕过它。如果尝试撬开下方锁时失败并超过 5 点，使用错误的钥匙开锁，或在打开上方锁之前以任何方式打开它，陷阱会被触发。陷阱会使金库和熔炉之间的金属天桥 (区域4) 向西缩回，形成一个跨越岩浆的 40 英尺宽的缺口。只有在走廊中通过 区域4 处拉动手柄，才能重新延伸桥梁。对于岩浆河流金库一侧的人来说，手柄距离太远，无法通过 en=Mage Hand 操作。

通往金库的钥匙原本在火蝾蜍的掌握之中。然而，它们并没有认出这些钥匙的真正用途，而是将它们并入了他们在伊米克斯神龛（区域7）建造的一座雕像中。

打开这扇门的解决方案位于金库附近的一个看似空荡的侧室中。任何搜索这个房间的人都会找到一个被扔在角落里的奇特盒子。这个盒子由铁制成，看起来像一本书，它可以从两侧打开，就像书的前封面和后封面一样。一侧刻有矮人符文"开始"，另一侧刻有符文"结束"。打开任一侧会看到铁板上钥匙的印记。金库的原始钥匙就存放在这个盒子里。

利用哈拉卡玛的所有工具，一个熟练使用铁匠工具并通过DC 10智力检定的角色可以根据这些印记复制出两把钥匙。穆沙瑞卜（参见"寻找向导"）也具备必要的技能。若检定失败三次，盒子上的印记将被破坏，无法再用于铸造新钥匙。

金库中存放着Hrakhamar积累的财富。成千上万的铁锭和精金锭被整齐地分类、堆放和装箱。每块铁锭价值1金币，重10磅。每块精金锭价值10金币，重1磅。如果Sithi Vinecutter在场，她会允许角色们收集他们的奖励，尽管她会密切监视他们，确保没有人拿走超过二十块锭。

一个金制的、适合成年矮人佩戴的手套放在一个板条箱上。楚尔特的矮人称之为摩拉丁之手套，通常由Hrakhamar的监督者佩戴。它制作精良，价值2500金币，尽管一个富有的矮人愿意支付两倍的价格来购买它。`,spotlightRefs:[],presentNpcIds:["npc_musharib"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_120_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"两套矮人制造的半身板甲矗立在一扇秘银镶边的铁门两侧。这些盔甲曾经精美绝伦，但如今已被武器划伤、火焰烧焦，并沾满污秽。铁门上下各有一把锁。",dmGuidance:"如果队伍中没有这样的角色，西希·藤切拥有所需的技能。"},{id:"scn_125",locationId:"loc_116",name:"伊米西神殿",activation:{condition:{type:"always"},priority:0},skeleton:["不清楚矮人最初用这个区域做什么，但火蝾蜍将其改造成了一个神龛。","当隧道通向一个小型房间时，硫磺和烧焦的肉味冲击着你的鼻孔。","房间北端是一座五尺高的雕像，由铁、铜、金和银粗糙地锤打在一起，形成一个隐约类似人形但带有火焰特征的形状。","四只火蝾蜍在它面前朝拜。","这些朝拜者包括两名火蜥蜴魔契师，来自伊米西和两名火蝾螈武者（见附录D，了解火蝾蜍的具体数值）。"],flesh:`不清楚矮人最初用这个区域做什么，但火蝾蜍将其改造成了一个神龛。

这些朝拜者包括两名火蜥蜴魔契师，来自伊米西和两名火蝾螈武者（见附录D，了解火蝾蜍的具体数值）。他们战斗至死。

这座重150磅的雕像代表着伊米克斯，火蝾蜍军事化、神学化社会中心的邪恶火焰原始生物。雕像几乎没有艺术价值（火蝾蜍是尚可的铁匠，但艺术造诣很差）。如果将金子和银子从其他金属中分离出来，它们分别值20金币和400银币。一个白化矮人或一个熟练于铁匠工作的角色可以使用Hrakhamar的设备在几个小时内熔炼出有价值的金属。

当一个角色在检查（或熔炼）伊米克斯雕像时，成功通过了 DC 13 的感知（察觉）检定，会认出被锤入其火焰中的一个物体曾是钥匙的一部分。这是雕像上唯一的精金部分，正是精金的坚韧性使它没有被锤打得无法辨认。一旦精金碎片被取出，更仔细的搜索会发现另一块黄金碎片，它被锤打得如此彻底以至于几乎无法辨认。这些钥匙曾经打开了宝库的门（区域6），但现在已无法修复；剩下的部分太少，甚至连 en=Mending 也无法修复它们。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_125"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"当隧道通向一个小型房间时，硫磺和烧焦的肉味冲击着你的鼻孔。房间北端是一座五尺高的雕像，由铁、铜、金和银粗糙地锤打在一起，形成一个隐约类似人形但带有火焰特征的形状。四只火蝾蜍在它面前朝拜。"},{id:"scn_127",locationId:"loc_116",name:"烟雾弥漫的洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域的大小和形状无法确定。","滚滚烟云刺痛你的眼睛，当你呼吸时，飘散的余烬灼烧你的喉咙。","然而，你几乎可以辨认出在烟雾中更远的地方看起来像有一盏灯笼。","这些相连的洞穴是两个烟魔蝠的巢穴。","角色们感知到的昏暗灯笼实际上是其中一个魔蝠施放的en=Dancing Lights法术，用来引诱角色们深入到这个有毒的巢穴中。"],flesh:`这些相连的洞穴是两个烟魔蝠的巢穴。角色们感知到的昏暗灯笼实际上是其中一个魔蝠施放的en=Dancing Lights法术，用来引诱角色们深入到这个有毒的巢穴中。

区域8的所有区域都处于2状态。角色可以沿着墙壁用手摸索前进，每轮移动10英尺；移动速度超过此限会导致因头部和胫骨撞上石质突起而受到1点钝击伤害。在烟雾中停留2轮后，每个角色必须在其每回合开始时成功通过一次DC 10体质豁免，否则将获得一级力竭。屏住呼吸的角色在闭气期间不会获得力竭；用湿布捂住口鼻或采取类似预防措施的角色，在进行该豁免检定时具有优势，效果持续10轮，但之后布块会在哈拉卡玛的酷热中变干。

这些小精灵对直接攻击冒险者不感兴趣，但他们会欢快地掠夺那些在烟雾中倒下的人的尸体。如果被逼到绝境，他们会乞求怜悯。他们知道熔炉被火蜥蜴侵扰，火蜥蜴的巨型步行者坐骑就安置在那里，还有两名矮人囚犯被绑在小精灵巢穴正西的牢房里。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_127"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这个区域的大小和形状无法确定。滚滚烟云刺痛你的眼睛，当你呼吸时，飘散的余烬灼烧你的喉咙。然而，你几乎可以辨认出在烟雾中更远的地方看起来像有一盏灯笼。",dmGuidance:"如果角色成功通过一次DC 10魅力（威吓）检定，他们愿意用信息换取自己的性命。"},{id:"scn_129",locationId:"loc_116",name:"通往龙心矿井的牢房和通道",activation:{condition:{type:"always"},priority:0},skeleton:["火蝾蜍是臭名昭著的折磨者和人形生物肉体的食用者。","囚犯们被捆绑起来，塞住嘴巴，然后被扔到这里，直到火蝾蜍决定如何给他们带来最强烈和最持久的痛苦。","大多数囚犯在十天内死亡，但他们更希望能早点结束。","火蝾蜍对Hrakhamar的运作仍有许多不明白的地方。","被捕获的矮人被折磨以获取有关铸造厂工具和机器如何工作的信息。"],flesh:`火蝾蜍是臭名昭著的折磨者和人形生物肉体的食用者。囚犯们被捆绑起来，塞住嘴巴，然后被扔到这里，直到火蝾蜍决定如何给他们带来最强烈和最持久的痛苦。大多数囚犯在十天内死亡，但他们更希望能早点结束。

矮人是个例外。火蝾蜍对Hrakhamar的运作仍有许多不明白的地方。被捕获的矮人被折磨以获取有关铸造厂工具和机器如何工作的信息。他们的名字是Laz Drumthunder和Malkar Stonegrist。两人都受伤了，只剩下1点生命值。他们也在挨饿，脱水，并遭受5个等级的力竭。Laz在时间和照顾或魔法治疗下会正常恢复。Malkar已经疯了；如果他的塞口物被取下，他会不停地颤抖并不停地尖叫。需要en=Lesser Restoration法术或相当的魔法来恢复他的理智。如果Laz和Malkar被带到Sithi Vinecutter那里，她和她的同伴会照顾他们。

这条隧道向南蜿蜒40英里，直达被巨龙Tzindelor和她的一群狗头人仆从（见"龙心矿井"）占领的Wyrmheart Mine。隧道可以通行，轨道车的轨道全程完好无损，但必然会遭遇食腐虫和巨蜘蛛。白化矮人们知道隧道的去向，但他们很快就警告角色们关于占领Wyrmheart Mine的红龙的事情。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_129"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`当角色们到达时，这里绑着两个不幸的白化病矮人战士（见附录D）。
当角色们接近Wyrmheart Mine时，他们还可能会遇到狗头人小队。`},{id:"scn_12a",locationId:"loc_116",name:"矿车湾",activation:{condition:{type:"always"},priority:0},skeleton:["矮人们在不使用时会将他们的矿车和平板轨道车停放在这里。","每种还各有两辆，它们都处于最低限度的工作状态。","火蝾蜍将这个区域用作十二只阔步鸟（见附录D）的马厩。","巨型步行者被拴住了，但拴住它们只是为了不让它们越过轨道车最西边的线路并漫游穿过隧道。","一只愤怒或受到惊吓的步行者可以轻易挣脱，当这些凶猛的生物看到不是它们火蝾蜍主人的人形生物时，它们会变得既愤怒又受到惊吓。"],flesh:`矮人们在不使用时会将他们的矿车和平板轨道车停放在这里。每种还各有两辆，它们都处于最低限度的工作状态。

火蝾蜍将这个区域用作十二只阔步鸟（见附录D）的马厩。巨型步行者被拴住了，但拴住它们只是为了不让它们越过轨道车最西边的线路并漫游穿过隧道。一只愤怒或受到惊吓的步行者可以轻易挣脱，当这些凶猛的生物看到不是它们火蝾蜍主人的人形生物时，它们会变得既愤怒又受到惊吓。

一旦任何非火蜥蜴人进入区域10，巨型火蜥蜴会立即开始跺脚、低吼并试图挣脱束缚。从下一回合开始，每回合有1d3只巨型火蜥蜴挣脱并加入战斗。它们不会攻击火蜥蜴人，且火蜥蜴人可以跳上巨型火蜥蜴背部，根据骑乘战斗的标准规则将其作为坐骑使用。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_12a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_12b",locationId:"loc_12b",name:"瓦尔斯皮德",activation:{condition:{type:"always"},priority:0},skeleton:['瓦尔斯皮德（这个名字的意思是"鲸鱼矛"）是一艘为霜巨人量身定制的长船：长250尺，帆是由白龙的翅膀制成的。',"它停泊在楚尔特东北海岸的一个海滩上，距离Kitcher's Inlet北部70英里，巨人不可能隐藏这艘船；","任何沿着海岸航行的人都不可能错过它。","瓦尔斯皮德从移动冰海向南航行，船员由二十名霜巨人组成。","船上还剩下三名霜巨人——两名站岗守卫，而第三名休息。"],flesh:`瓦尔斯皮德（这个名字的意思是"鲸鱼矛"）是一艘为霜巨人量身定制的长船：长250尺，帆是由白龙的翅膀制成的。它停泊在楚尔特东北海岸的一个海滩上，距离Kitcher's Inlet北部70英里，巨人不可能隐藏这艘船；任何沿着海岸航行的人都不可能错过它。

瓦尔斯皮德从移动冰海向南航行，船员由二十名霜巨人组成。船上还剩下三名霜巨人——两名站岗守卫，而第三名休息。另外两名霜巨人从海滩上监视着海面。其他十五名巨人分成了五个由三名巨人组成的搜索队，正在丛林中搜寻阿图斯·辛贝尔和凛冬戒指。其中一名霜巨人猎人是瓦尔斯皮德的船长，德鲁菲（NE女性霜巨人）。

应她的主人，Jarl 斯托瓦尔德的要求，德鲁菲带领这次探险队来取回戒指。斯托瓦尔德出于冒险风暴君王之雷霆中解释的原因需要它。他相信有了凛冬戒指，他可以冻结世界，带来永久冰河时代的来临——这个美妙的梦想让德鲁菲专注于手头的任务。巨人们对阿瑟瑞克、Soulmonger或死亡诅咒一无所知。

霜巨人在热带丛林中感到不适应。他们认为这是可以想象的最糟糕的地狱。然而，他们无意失败，也不想让冬之环（凛冬戒指）从他们手中溜走。

德鲁菲的搜索队包括两名雄性霜巨人和一对冬狼。其他四支搜索队各由三名霜巨人和1d2只冬狼组成。霜巨人无法在不留下踪迹的情况下穿越丛林。楚尔特有许多巨型食肉动物，因此需要进行一次成功的DC 10感知（求生）检定来识别这些迹象是否与丛林环境不符；如果检定结果超过5点或更多，则可以识别出这些迹象来自霜巨人。楚尔特的向导在此检定上有优势，但不会联想到霜巨人。这个想法太牵强了。

到目前为止，巨人的搜索范围已经从海岸延伸到提尔基河，从卡斯蒂利亚尔废墟延伸到东北部的山脉。德鲁菲 从远处看到了贝路利安堡，从提尔基河口对面看到了南扎路港，但巨人避开了烈焰之拳的巡逻队。就他们而言，来自堡垒的雇佣兵和侦察兵在南部的丛林中看到了很多令人困惑的迹象，但他们还没有得出结论，他们正在与霜巨人打交道。巨人的下一步将是向南推进。在某个时刻（由你决定），他们将返回到瓦尔斯皮德，向南航行到避难湾，并从那里重新开始搜索。显然，这是搜索像楚尔特这样大而密集的地区的一种非常低效的方式，但德鲁菲没有更好的主意。

德鲁菲 没有任何理由攻击或杀害角色，如果他们相遇，除非角色攻击她或她怀疑他们比他们承认的更多有关凛冬戒指的信息。在采取任何行动之前，她会试图打探出角色对阿图斯·辛贝尔和这件神器的了解程度。德鲁菲试图掩饰她的兴趣，但她的方式如同一头冲撞的长毛象般毫无掩饰。任何成功通过一个 DC 10 感知（洞悉）检定的人物会迅速意识到 德鲁菲笨拙的问题其实是在询问关于辛伯所拥有的强大魔法物品的信息。

角色与巨人之间的任意遭遇如果在角色第一次遭遇阿图斯·辛贝尔之后发生会更加戏剧性。如果他们承认见过他但无法（或不愿）告诉德鲁菲他的下落，她就有充分理由抓捕角色并拷问出消息。

瓦尔斯皮德的储备已经基本耗尽，霜巨人在这次探险中也没有携带宝藏。`,spotlightRefs:[],presentNpcIds:["npc_artus_cimber","npc_drufi","npc_acererak"],availableInfoIds:[],encounterIds:["enc_12b","enc_toa_hvalspyd_search_party"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"如果角色遇到巨人，他们可能在实际会面前的数小时或数天就看到证据：踩踏的灌木、折断或被连根拔起的树木、巨大的靴印、刻在树上或巨石上的3英尺高的符文标记，以及冬狼的粪便。"},{id:"scn_12e",locationId:"loc_12e",name:"伊肖",activation:{condition:{type:"always"},priority:0},skeleton:["沿海定居点伊绍（Ishau）沉入了海底。","现在，这个村庄的石头建筑完全位于避难湾（Refuge Bay）的水下，距离海岸几英里。","猎人鲨和礁鲨在沉没的废墟中滑行，与蛇颈龙竞争顶级捕食者的地位——但所有这些生物都害怕并避开那些偶尔在废墟中搜寻人类残骸和浸水小饰品的恶毒海巫。"],flesh:"沿海定居点伊绍（Ishau）沉入了海底。现在，这个村庄的石头建筑完全位于避难湾（Refuge Bay）的水下，距离海岸几英里。猎人鲨和礁鲨在沉没的废墟中滑行，与蛇颈龙竞争顶级捕食者的地位——但所有这些生物都害怕并避开那些偶尔在废墟中搜寻人类残骸和浸水小饰品的恶毒海巫。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_130",locationId:"loc_130",name:"贾哈卡锚地",activation:{condition:{type:"always"},priority:0},skeleton:["三艘海盗船将贾哈卡锚地（地图2.10）作为避风港：龙牙、翡翠之眼和蚊蝠。","这三艘船都是帆船。",'关于每艘船的船长和船员信息，请参见"贾哈卡锚地的海盗"侧边栏。',"任何时候只有一艘海盗船停靠在锚地。","第二艘船在港口外一英里范围内抛锚，随时准备保卫锚地。"],flesh:`三艘海盗船将贾哈卡锚地（地图2.10）作为避风港：龙牙、翡翠之眼和蚊蝠。这三艘船都是帆船。关于每艘船的船长和船员信息，请参见"贾哈卡锚地的海盗"侧边栏。

任何时候只有一艘海盗船停靠在锚地。第二艘船在港口外一英里范围内抛锚，随时准备保卫锚地。第三艘船总是出海，通常在寻找猎物。你可以随机决定哪些船在哪里。停靠在锚地的船的船长从他的船上指挥锚地。

锚地位于一个海洞内部。这里潮湿且回声不断，但至少洞穴能够遮挡每日的雨水。海盗们用捡来的木板、旧桶、甲板栅栏、桅杆和其他任何他们能找到的东西搭建了一个码头和一个破旧的堡垒。它包括一个仓库，他们在那里存放被盗的赃物直到能够出售（区域4），一个囚禁俘虏直到他们被赎回或出售的牢房（区域5），以及一个海盗们狂欢的酒馆（区域6A-6C）。

三位海盗船长与贝路利安堡的莉尔阿·波提尔勾结，她向他们提供有关进出南扎路港的船只的信息，并帮助海盗销售他们偷来的货物。通常，悬挂博德之门旗帜的船只会被放过，这是Portyr合作的条件之一。Flaming Fist的指挥官会得到来自大陆国家即将进行的海军巡逻的信息，并她通过一个短讯石将这些信息传递给海盗。

比他们与莉尔阿·波提尔的交易更为重要的是，海盗们最重要的资产是这个隐蔽的基地，每个海盗都必须发誓用血誓来保护其秘密位置。任何驶入锚地视距内的船只都会受到攻击并在必要时被追击。铜皮天马（参见"海港区"）有很大的机会逃脱，因为它速度极快；其他船只则不太可能逃脱。

任何从丛林或海湾误入锚地的人，都不太可能被允许离开。他们会尽一切努力让陌生人放松警惕，然后杀死或俘虏他们。

洞穴的顶部平均高出水面60尺（这会随着潮汐略有变化）。它高出地面50尺，高出瞭望塔和起重机顶部20尺。两个天然的石柱横跨在入口处，它们之间只有25尺的间隙，因此船只必须由小船小心拖入洞穴，并在进入后用绳索操纵。

由于其隐蔽的位置和海湾中常年不散的雾气，除非知道具体位置，否则很难找到这个洞穴。当船只经过半英里内的海岸时，警觉的瞭望者会自动发现洞穴内的建筑和停泊的船只。在不超过2英里的距离内，需要进行一次成功的DC 15感知（察觉）检定。锚地的瞭望者会自动注意到2英里内的船只。

海盗的第一道防线是距离海岸四分之一英里的一圈水下岩石。试图航行的船长必须进行一次DC 10的智力检定。如果检定成功，船只安全通过岩石。如果失败但差值不超过4，船只会撞上岩石并出现一些漏水，但不会受到严重损坏，可以继续寻找通道。如果差值达到5或更多，岩石会造成重大损坏；船只严重倾斜，速度减半，直到船体修复。撞上第三块岩石会导致船只沉没。当然，海盗知道岩石的位置并会避开它们。

瞭望塔（区域6）和从塔到仓库（区域4）的整个高架走道都设有锯齿形护墙用于防御。这些护墙提供了3。

除了海盗船员外，贾哈卡锚地还有少数海盗听从酒馆老板博斯科·匕手（区域6A）的指挥——仅仅因为他是麦酒的主人。`,spotlightRefs:[],presentNpcIds:["npc_liara_portyr","npc_bosco_daggerhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们偶然进入贾哈卡锚地，海盗们会声称这是一个由烈焰之拳或商人联盟建立的贸易站或探险基地，并会为此提供令人信服的表面。
【贾哈卡锚地的海盗】三艘海盗船将 Jahaka 锚地作为基地，它们的船长与彼此以及贝路利安堡的莉尔阿·波提尔建立了脆弱的联盟。根据需要，可使用城主指南的附录C中的甲板平面图来表示每艘海盗船。每艘船的船员描述如下。
船长伊洛克·加哈望（NE 男性楚尔坦人类野猪人）没有耐心也没有幽默感。他曾是龙牙号的副船长，直到一年前，他发动了一场叛变，将前船长扔出了船。其他船长仍在适应这位粗鲁的新同伙，他似乎打算通过欺凌的方式自封为海盗之王。
伊洛克想要停止向贝路利安堡发送海盗利润的一部分，这将结束与莉尔阿·波提尔的联盟，并且可能会适得其反；海盗们可以保留更多的利润，但他们将获得更少的战利品并承担更大的风险。其他船长清楚地看到了这些缺点，但Jaharwon正在所有三支船员中的普通海盗中建立自己的追随者。
龙牙号的船员包括一个名叫疯狂卡利塔（Mad Kalita，LE 女性楚尔坦人类间谍）的副船长，十五名楚尔坦匪徒们，三名楚尔坦暴徒，以及一位名为深海之眼（Eye of the Deep，N 女性卡利希特人类德鲁伊）的"海巫"。
精明的船长扎如姆·艾萨亚克（LE男性卡利什特人类匪徒首领）对宝石情有独钟。他穿着一件缝有闪闪发光宝石的外套（750金币），并佩戴着一把剑柄上嵌有宝石的弯刀（1250金币）。他的船，翡翠之眼，船舱装饰得像卡利什特帕夏宫殿里的房间。Al-Saryak喜欢砍掉那些得罪他的人的头，并将其悬挂在他的船的美人鱼船首上。很久以前的一次伤害使他失去了左眼，并在他的脸上留下了一个大大的X形疤痕。毁坏的眼窝现在装有一颗魔法宝石，使Al-Saryak能够辨别通往宝藏的幽灵路径。这颗宝石对其他人不起作用。Al-Saryak持有与莉尔阿·波提尔匹配的短讯石（见"贝路利安堡"）。
翡翠之眼号的船员包括一个名叫沃尔坦（Voltan，CE 男性卡利希特人类狂战士）的副船长，十二名卡利希特匪徒们，两名卡利希特暴徒，以及五名楚尔坦部族武者。
船长拉斯基拉尔（NE 男性特西里安人类匪徒首领，穿着一件江湖骗子披风）是一个浮夸、不拘小节的海盗，他已经厌倦了追逐商船，听着船长们因为损失的收入和洒出的血而哀嚎和恳求。他更愿意寻找失落的宝藏和魔法物品，但不是通过挖掘遗迹和坟墓；相反，他乐于在丛林和海洋中追逐冒险者，偷走他认为他们辛苦赚来的战利品。他的船，Stirge，充满了流氓和刺客，渴望为他做脏活。拉斯基拉尔还与南扎路港和更远港口的一群富有赞助人保持联系，他们渴望为他最稀有的非法所得支付国王的赎金。
Stirge号的船员包括一个名叫Heel的大副（NE男性半兽人角斗士），十二名Chultan和Tethyrian的匪徒们，六名Chultan的暴徒，以及一个疯狂的海祭司Caldos Hellingskorn（CE男性Illuskan的Umberlee的祭司）。`,mapGeometry:{imageRef:"adventure/ToA/036-0314.webp"}},{id:"scn_132",locationId:"loc_130",name:"丛林之门",activation:{condition:{type:"always"},priority:0},skeleton:["悬崖和水之间的狭窄土地被一堵由厚实棕榈树干制成的15尺高的墙封闭，这些树干用结实的藤蔓捆绑在一起。","它们的底部埋入地面，整堵墙在内侧用更多的棕榈树干加固。","这堵墙的目的是防止不死生物和恐龙进入。","大门制作粗糙，但用铁带加固，并由两根沉重的木条支撑。","海盗们在没有当前负责锚地的船长批准的情况下，从不打开这些大门。"],flesh:"悬崖和水之间的狭窄土地被一堵由厚实棕榈树干制成的15尺高的墙封闭，这些树干用结实的藤蔓捆绑在一起。它们的底部埋入地面，整堵墙在内侧用更多的棕榈树干加固。这堵墙的目的是防止不死生物和恐龙进入。大门制作粗糙，但用铁带加固，并由两根沉重的木条支撑。海盗们在没有当前负责锚地的船长批准的情况下，从不打开这些大门。",spotlightRefs:[],presentNpcIds:["npc_bosco_daggerhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_133",locationId:"loc_130",name:"码头",activation:{condition:{type:"always"},priority:0},skeleton:["无论哪艘海盗船在港内，都会停靠在这个码头。","货物使用仓库的起重机卸载（区域4）。","码头上覆盖着滑腻的苔藓，并且永远需要维修。","这里停靠着两艘小船。","一艘是简单的小艇，主要用于向区域5的囚犯运送食物和水。"],flesh:`无论哪艘海盗船在港内，都会停靠在这个码头。货物使用仓库的起重机卸载（区域4）。码头上覆盖着滑腻的苔藓，并且永远需要维修。

这里停靠着两艘小船。一艘是简单的小艇，主要用于向区域5的囚犯运送食物和水。另一艘是一艘小型快艇，配有六支桨和一根单桅杆，用于拖船进出锚地。任何水手都知道，如果小艇被带出安全的港口，很快就会被波浪淹没，但在紧急情况下，快艇可以被划桨和航行在开阔的海上。它在帆下的最高速度为每小时5英里，划桨时则减半，并且可以容纳多达十个中等体型的乘客。

一个短码头可以通往鲨鱼饵岩。没有价值或拒绝提供信息的囚犯，或者严重违反海盗守则的海盗，可以被绑在岩石上。在那里，他们要么在高潮时淹死，要么被鲨鱼和其他捕食者啃食，直到他们的惩罚完成或他们的舌头足够松动。`,spotlightRefs:[],presentNpcIds:["npc_bosco_daggerhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_134",locationId:"loc_130",name:"岸上军官宿舍",activation:{condition:{type:"always"},priority:0},skeleton:["三位船长每人都有这样一个房间供私人使用。","实际上，船长们很少使用它们，更喜欢他们自己船上的舒适和安全。","相反，这些私人住处的使用作为对在最近航行中表现出色的船员的奖励，因此，它们往往很脏乱且有异味。"],flesh:"三位船长每人都有这样一个房间供私人使用。实际上，船长们很少使用它们，更喜欢他们自己船上的舒适和安全。相反，这些私人住处的使用作为对在最近航行中表现出色的船员的奖励，因此，它们往往很脏乱且有异味。",spotlightRefs:[],presentNpcIds:["npc_bosco_daggerhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_135",locationId:"loc_130",name:"4. 仓库",activation:{condition:{type:"always"},priority:0},skeleton:["三位船长都将他们的战利品储存在这个公共仓库中。","双扇门用一把铁挂锁密封，只有船长们有钥匙。","一个加固的栏杆俯瞰着南方的锚地。","木制平台延伸在桩上，平台上的起重机用于将货物吊到仓库。","在仓库粗糙的后墙上，插着许多锈迹斑斑的刀片——旧的长剑、短剑、刺剑、弯刀和匕首。"],flesh:`三位船长都将他们的战利品储存在这个公共仓库中。双扇门用一把铁挂锁密封，只有船长们有钥匙。可以使用盗贼工具并通过一次成功的DC 20敏捷检定来撬开。

在墙上插着的生锈刀片中有十把凌空剑，当房间里的宝藏（见下文的"宝藏"）被扰动时，它们会自行拔出并发动攻击。这些活化的剑不会攻击任何佩戴眼罩的生物，也不会在佩戴眼罩的生物扰动宝藏时活化。

仓库的宝藏存放在许多未上锁的箱子、袋子、密封的板条箱和木桶中。这个宝藏包括6400铜币，2500银币，300金币，60白金币，十个金手镯（每个25金币），一个锑制高脚杯（25金币），以及两个装在塞着软木塞的木管中的法术卷轴（en=Knock和en=Leomund's Tiny Hut）。`,spotlightRefs:[],presentNpcIds:["npc_bosco_daggerhand"],availableInfoIds:[],encounterIds:["enc_135"],treasureSlotIds:["trs_135_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个加固的栏杆俯瞰着南方的锚地。木制平台延伸在桩上，平台上的起重机用于将货物吊到仓库。在仓库粗糙的后墙上，插着许多锈迹斑斑的刀片——旧的长剑、短剑、刺剑、弯刀和匕首。"},{id:"scn_138",locationId:"loc_130",name:"笼子",activation:{condition:{type:"always"},priority:0},skeleton:["囚犯被关在这个大而肮脏的牢房里，直到他们被赎回或被卖为奴隶。","高浪有时会冲进室内，浸湿每个人并在地板上留下水坑。","棕榈木条构成了笼子前面的栅栏；","它们由坚固的销钉固定，必须先用力敲打出来，然后才能抬起木条，为小型或中型生物创造一个足够宽的缝隙。","逃跑有三个风险。"],flesh:`囚犯被关在这个大而肮脏的牢房里，直到他们被赎回或被卖为奴隶。高浪有时会冲进室内，浸湿每个人并在地板上留下水坑。棕榈木条构成了笼子前面的栅栏；它们由坚固的销钉固定，必须先用力敲打出来，然后才能抬起木条，为小型或中型生物创造一个足够宽的缝隙。逃跑有三个风险。首先，塔上（区域6）的海盗会监视笼子。其次，1d4 + 1只礁鲨栖息在笼子下方的水域。第三，逃跑者唯一能去的地方是丛林，丛林比海盗更残酷。

除了被俘的水手和商人，还可能有哈珀斯、詹特斯或冒险家。被囚禁在这里的冒险家可能是来自科米尔的坚定冒险家协会的成员，这个组织负责绘制未标地图的地方并寻找失落的神器。作为坚定冒险家协会的前成员，阿图斯会有动机帮助处于危险中的其他协会成员。`,spotlightRefs:[],presentNpcIds:["npc_artus_cimber","npc_dragonbait","npc_bosco_daggerhand"],availableInfoIds:[],encounterIds:["enc_138"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`当角色们到达贾哈卡锚地时，牢房里是否有囚犯由你决定，但这里很少空着。
如果角色们还没有遇到阿图斯·辛贝尔和龙饵，他们可能会发现他们藏在附近，计划释放囚犯。`},{id:"scn_139",locationId:"loc_130",name:"瞭望塔",activation:{condition:{type:"always"},priority:0},skeleton:['这座破旧的瞭望塔高30英尺，位于"干燥"的陆地之上。',"它被带有城垛的护墙所环绕，为防御者提供了3。","塔上还安装了一台弩炮。","它可以用于对付侵入锚地的船只，但主要是为了防御威胁丛林墙的大型爬行动物（区域1）。","塔顶总是有两名海盗（匪徒们）值班，如果铜质警报铃被敲响，更多的海盗会从博斯科的船舱（区域6A）涌出。"],flesh:'这座破旧的瞭望塔高30英尺，位于"干燥"的陆地之上。它被带有城垛的护墙所环绕，为防御者提供了3。塔上还安装了一台弩炮。它可以用于对付侵入锚地的船只，但主要是为了防御威胁丛林墙的大型爬行动物（区域1）。塔顶总是有两名海盗（匪徒们）值班，如果铜质警报铃被敲响，更多的海盗会从博斯科的船舱（区域6A）涌出。一个螺旋楼梯被雕刻在附近的岩石柱上，可以通往博斯科的船舱。',spotlightRefs:[],presentNpcIds:["npc_bosco_daggerhand"],availableInfoIds:[],encounterIds:["enc_139"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_13a",locationId:"loc_130",name:"博斯科的底舱",activation:{condition:{type:"always"},priority:0},skeleton:["这个建筑是用一艘被俘获的船只的船体建造的，这艘船速度太慢，无法用作海盗船，但它有一个优点：它不漏水。","海盗们把它从海湾拖出来，把它砍碎，然后倒过来形成一个类似建筑的东西。","现在它是博斯科的船底，一个为在贾哈卡锚地放松的下班海盗船员提供服务的仿制酒馆。","房间里有长凳、凳子和一些桌子，地板上铺着沙子。","它散发着溢出的啤酒、旧食物和陈旧烟草烟雾的气味。"],flesh:`这个建筑是用一艘被俘获的船只的船体建造的，这艘船速度太慢，无法用作海盗船，但它有一个优点：它不漏水。海盗们把它从海湾拖出来，把它砍碎，然后倒过来形成一个类似建筑的东西。现在它是博斯科的船底，一个为在贾哈卡锚地放松的下班海盗船员提供服务的仿制酒馆。房间里有长凳、凳子和一些桌子，地板上铺着沙子。它散发着溢出的啤酒、旧食物和陈旧烟草烟雾的气味。

店主是博斯科·匕手（NE 男性人类暴徒，戴着一个影响动物戒指），之所以这样称呼，是因为他从不在不威胁性地将另一只手放在腰带上的匕首上的情况下与任何人握手。他养了一只半驯服的恐爪龙（见附录D）作为守卫动物，他用他的魔法戒指来控制它。海盗们称这只猛禽为Knuckles——因为足够愚蠢让它咬一口的人将不会再有其他的手。

无论白天还是夜晚，2d6名海盗（匪徒们）在博斯科的船底酒吧里狂欢。另外还有1d6名海盗躺在桌子上或地板上不省人事。`,spotlightRefs:[],presentNpcIds:["npc_bosco_daggerhand"],availableInfoIds:[],encounterIds:["enc_13a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_13b",locationId:"loc_130",name:"厨房",activation:{condition:{type:"always"},priority:0},skeleton:["博斯科的顾客对食物不太感兴趣，但他提供的简单食物——煮鲨鱼、烤蛇和其他丛林美食——是在这里准备的。","当剩饭变得如此腐败，海盗们不愿意吃时，它们要么喂给恐龙鸡，要么送到笼子里的俘虏那里（区域5）。","厨房的门总是关着的，以防止克努克尔斯偷吃储藏室里的食物。"],flesh:"博斯科的顾客对食物不太感兴趣，但他提供的简单食物——煮鲨鱼、烤蛇和其他丛林美食——是在这里准备的。当剩饭变得如此腐败，海盗们不愿意吃时，它们要么喂给恐龙鸡，要么送到笼子里的俘虏那里（区域5）。厨房的门总是关着的，以防止克努克尔斯偷吃储藏室里的食物。",spotlightRefs:[],presentNpcIds:["npc_bosco_daggerhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_13c",locationId:"loc_130",name:"6C. 博斯科的铺位",activation:{condition:{type:"always"},priority:0},skeleton:["博斯科的私人房间里有一个吊床、一个塞满衣物和小饰品的上锁海箱、几本发霉的书籍，以及一堆给纳克尔斯睡觉用的芦苇。","隔间内装有 58 gp、140 sp、一瓶 水下呼吸药水 和三块黑色眼罩。","（海盗船长们在尝试从 区域4 移除宝藏前会戴上眼罩。"],flesh:`博斯科的私人房间里有一个吊床、一个塞满衣物和小饰品的上锁海箱、几本发霉的书籍，以及一堆给纳克尔斯睡觉用的芦苇。博斯科随身携带箱子的钥匙，或者可以使用盗贼工具并通过一次DC 15敏捷检定来撬开锁。

通过成功的 DC 12 感知（察觉）检定，可以在海箱中发现一个假底。隔间内装有 58 gp、140 sp、一瓶 水下呼吸药水 和三块黑色眼罩。（海盗船长们在尝试从 区域4 移除宝藏前会戴上眼罩。）`,spotlightRefs:[],presentNpcIds:["npc_bosco_daggerhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_13c_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_13e",locationId:"loc_13e",name:"贾哈卡湾",activation:{condition:{type:"always"},priority:0},skeleton:["海盗船只进出这个海湾，来往于贾哈卡锚地。","塔斯河在流入海湾之前，经过多个瀑布，因此雾气永远从河口飘出，弥漫在海湾上。","这种雾不是特别浓，但其效果随距离累积，因此在除了风最大的日子之外，它限制了能见度只有几英里。","从海湾的任何地方都可以看到沿海山脉的轮廓，但更精细的细节——例如船只或更小的物体——从超过2或3英里的距离就无法辨认了。","由于海湾宽约20英里，深40英里，它是海盗的绝佳藏身之处。"],flesh:"海盗船只进出这个海湾，来往于贾哈卡锚地。塔斯河在流入海湾之前，经过多个瀑布，因此雾气永远从河口飘出，弥漫在海湾上。这种雾不是特别浓，但其效果随距离累积，因此在除了风最大的日子之外，它限制了能见度只有几英里。从海湾的任何地方都可以看到沿海山脉的轮廓，但更精细的细节——例如船只或更小的物体——从超过2或3英里的距离就无法辨认了。由于海湾宽约20英里，深40英里，它是海盗的绝佳藏身之处。任何不知道精确位置就误入海湾的船只不太可能偶然发现贾哈卡锚地。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_13f",locationId:"loc_13f",name:"基尔·萨巴尔",activation:{condition:{type:"always"},priority:0},skeleton:["一座古老的修道院坐落在高高的高原悬崖上，俯瞰着丛林。","石阶和摇摇欲坠的走道连接着各个建筑，其中最低的建筑离地面有500尺。","主建筑的破败立面上雕刻着一个圆形迷宫般的符号。","每隔几分钟，鸟人族要么在修道院降落，要么从它的阳台上起飞，飞向天空。","基尔·萨巴尔（地图2.11）是一群鸟羽人的家园，也是一个和平的庇护所，英雄们可以在这里找到休息和安全——如果他们能够到达那里。"],flesh:`基尔·萨巴尔（地图2.11）是一群鸟羽人的家园，也是一个和平的庇护所，英雄们可以在这里找到休息和安全——如果他们能够到达那里。鸟羽人也在庇护奥穆王室血统的最后人类后裔。

最初，修道院的建筑可以通过一条结合了天然石坡、在悬崖面上凿出的台阶和建在悬崖上的木制走道的路径到达。坡道和台阶大多仍然完好，但许多地方的木制走道已经腐烂或完全缺失。鸟羽人族不需要它们，也没有理由去修复它们。

要从地面到达修道院，角色必须进行三次属性检定。每次检定失败时，角色必须选择要么承受10（3d6）点因跌落造成的钝击伤害，要么获得1级力竭状态（这意味着在后续的属性检定上会有劣势）。这三次属性检定如下：

一个 DC 15 力量 (运动) 检定来在走道的缝隙中攀爬。

进行一次DC 15 敏捷（特技）检定，通过在间隔怪异的支撑梁上跳跃来穿过木栈道上的宽大间隙。

进行一次 DC 15 感知（察觉）检定，以发现无法承重的腐烂木板。

攀登需要1小时，加上每次失败的属性检定额外的10分钟。除非角色以隐形的方式攀登，或在夜间或暴风雨期间，否则在鸟羽人族不知情的情况下到达修道院是不可能的。

五十六只鸟羽人居住在基尔·萨巴尔，分为十二个"巢穴"或大家庭群体。大约三分之一的鸟羽人人口是幼体；其余的是成年体，男女数量相等。他们主要通过在丛林中狩猎，在奥伦河沿岸捕鱼，以及在高原上耕作来维持生活，在那里他们远离了楚尔特大部分的捕食者。

这个社群的领袖是一只极其年长的鸟人，名叫阿莎尔。其他人称她为老师，并尊她为活圣人。阿莎尔聪明、野心勃勃，并且有些操纵欲，但从不残忍或冷漠。阿莎尔是一只鸟羽人，但有以下变化：

阿莎尔 是守序中立的。

她有31点（7d8）生命值。

她的感知是14，感知是17，并且拥有以下技能：历史 +4，洞悉 +5，察觉 +7。

她具备下面描述的施法特性。

她说气族语和通用语。

她的挑战等级为2（450经验值）。

阿莎尔 是一个5级施法者，使用感知作为她的施法属性（法术豁免 DC 13；法术攻击命中 +5）。她准备了以下德鲁伊法术：

基尔·萨巴尔的鸟羽人族过着仪式化的生活，遵循由传统和教师制定的严格行为规则。在很大程度上，这些规则和仪式已经独立于任何宗教仪式而形成了自己的生活。

即使作为客人，他们也预期每天要花几个小时帮忙做家务（主要是扫地和洗碗）。

为了完成仪式，她需要一朵黑兰花，这种花只能在南戈尔找到（本章后面有描述）。阿莎尔可以提供方向，但她不允许她的人民靠近废墟，因为那里有已知居住的邪恶、有智慧的鹤（魔王鹤）。

十七岁的公主姆瓦克丝娜瑞（见附录D）是奥穆王室现存最年长的后裔，也是这个陷落王国的主要继承人。她和她的六岁弟弟Na（一个非战斗人员，AC 10和3点生命值）是鸟羽人族的客人——尽管"受监护人"可能是更准确的描述。他们的曾祖母，纳帕卡，是奥穆的最后一位统治女王；他们的父亲，奥梅克，在一次跌落中去世，他们的母亲，拉赞，被翼手兽杀害。鸟羽人族的目标是保护年轻的王室成员（以及他们后代，如果必要的话），直到奥穆的邪恶被驱逐。鸟羽人族说他们这样做完全是出于楚特的未来，但阿莎尔秘密希望，如果楚特王国得以复兴，鸟羽人族将能在其中担任关键角色。

姆瓦克丝娜瑞自负、固执，并且急切地想要夺取她的王位。她不喜欢别人反驳，也不习惯在不居高临下的情况下与除了阿莎尔之外的任何人交谈。在她看来，她已经是楚尔特的女王了；世界其他地方没有承认这一点是他们的错。

不幸的是，公主的一生都在基尔萨巴尔受到庇护，因此她对寺院之外世界的理解非常狭隘，几乎到了可笑的地步。例如，她从不将其他国家称为王国，只称之为领地或侯国（"深水城的领地"，"安姆的侯国"）；她相信，如果费伦的其他统治者知道她需要帮助，他们会在几天内派出成千上万的士兵来援助她；她确信，南扎路港的商人王子们会欢迎她的归来，并乐意将城市的统治权交给他们合法的君主。她所理解的世界是渺小的，渴望她的领导。姆瓦克丝娜瑞并不是傻瓜；在很大程度上，这些都是由阿莎尔教给她的。

姆瓦克丝娜瑞相信，通过找回一个象征性重要但早已失传的宝藏——Ch'gakare的骷髅圣杯（见第五章），她能够获得广泛的支持来重新人口和重建奥穆。

尽管鸟羽人对她很好，姆瓦克丝娜瑞仍然感到孤独；基尔·萨巴尔唯一的另一个人类是她的兄弟。因此，公主可能会对其中一位冒险者产生强烈的依恋，视其为潜在的浪漫伴侣。这种依恋将是强烈、热烈且嫉妒的，而姆瓦克丝娜瑞习惯于得到她想要的一切。

违背了阿莎尔的意愿，公主与外层位面的古老生物风公爵Aaqa缔结了契约，成为了一名新手魔契师。她厌恶体力劳动，并且经常使用她的en=Mage Hand和en=Unseen Servant法术。通过她的契约，她还获得了心灵感应能力，她喜欢使用。

如果阿莎尔怀疑姆瓦克丝娜瑞可能从角色们那里了解到关于世界的令人不安或不便的真相，或者她对其中一人的热情可能导致悲剧，那么在阿莎尔眼中，他们就成了一个危险的存在——对于没有翅膀的生物来说，基尔·萨巴尔是一个危险的地方。

Na穿着他自己制作的鸟羽人族服装，假装是鸟人族之一。对于一个六岁的男孩来说，他异常勤奋好学，喜欢读书。他彬彬有礼，恭敬，说话轻声细语，却有着超越他微小年龄的感知。他唯一的户外活动兴趣是在高原顶部的花园中散步，在那里他研究植物和昆虫，以及从他房间的窗户放飞由木头和折纸制成的复杂飞行玩具，看着它们在丛林上空悠闲地滑翔。如果有人建议他会比姆瓦克丝娜瑞成为更好的君主，Na会笑，然后感到震惊。`,spotlightRefs:[],presentNpcIds:["npc_asharra","npc_mwaxanar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`一座古老的修道院坐落在高高的高原悬崖上，俯瞰着丛林。石阶和摇摇欲坠的走道连接着各个建筑，其中最低的建筑离地面有500尺。主建筑的破败立面上雕刻着一个圆形迷宫般的符号。
每隔几分钟，鸟人族要么在修道院降落，要么从它的阳台上起飞，飞向天空。`,dmGuidance:`如果角色们最终从邪恶的控制中解放奥穆，王室血统就可以恢复。
【施法】随意施放的戏法：en=Druidcraft，en=Mending，en=Produce Flame
1环（4个法术位）：en=Detect Magic（侦测魔法），en=Faerie Fire（仙女火），en=Thunderwave（雷鸣波）
2环（3个法术位）：en=Gust of Wind，en=Hold Person，en=Lesser Restoration
3环（2个法术位）：en=Call Lightning（召唤闪电），en=Wind Wall（风墙）
如果角色们和平地接近，只要他们不伤害任何人，不扰乱传统，不偷窃，不撒谎，他们就会在基尔·萨巴尔受到欢迎。
如果角色们告诉阿莎尔他们计划访问奥穆并摧毁Soulmonger，她会提出进行一个叫做七风之舞的仪式，赋予角色们魔法飞行能力（见"七风之舞"侧边栏）。
【七风之舞】阿莎尔 知道一种叫做七风之舞的仪式，该仪式能暂时赋予多达十只非飞行生物魔法飞行能力。这个仪式需要10分钟才能完成，只能由一个鸟羽人族长执行，并且需要一朵黑色兰花作为材料组件。
阿莎尔 必须将兰花磨成粉末，吸入它，并在仪式受益者的周围不间断地跳舞，同时其他七个鸟羽人向风公爵Aaqa念诵祈祷。当舞蹈结束时，阿莎尔 的翅膀会消失，她将失去飞行能力。仪式的受益者每人获得30尺的魔法飞行速度（使他们能够以每小时4英里的速度飞行）。这个好处持续3天，之后阿莎尔 的翅膀会重新出现，她将重新获得飞行能力。
如果角色声称他们要去奥穆，她敦促他们找到圣杯并将其归还给她"为了楚特的利益"。
如果角色要求更实质性的奖励，她提供给他们价值250金币的精选物品，来自她的私人财宝（见区域5）。
【当石像鬼攻击时】奥穆的石像鬼和基尔·萨巴尔的鸟羽人是死敌。鸟羽人侦察兵监视着远处的城市，他们厚颜无耻的入侵激怒了石像鬼。偶尔，石像鬼会跟踪巡逻队回到基尔·萨巴尔并攻击修道院。如果这发生在角色们访问基尔·萨巴尔期间，鸟羽人会感激队伍所能提供的帮助。攻击力量由十只石像鬼组成。如果杀死了六只或更多，其余的会飞回奥穆。`,mapGeometry:{imageRef:"adventure/ToA/039-0316.webp"}},{id:"scn_146",locationId:"loc_13f",name:"1. 修道院",activation:{condition:{type:"always"},priority:0},skeleton:["六只鸟羽人居住在修道院中，过着僧侣的生活。","在修道院时，它们戴着念珠项链，并在喙、手和脚上绘制迷宫般的图案。","这座建筑的表面画着一个大型的圆形迷宫符号，这是乌博塔的象征，但在基尔·萨巴尔的任何地方都看不到它；","只有在从空中或从下方地面看时才能看到。","修道院的入口大厅也是餐厅。"],flesh:`六只鸟羽人居住在修道院中，过着僧侣的生活。在修道院时，它们戴着念珠项链，并在喙、手和脚上绘制迷宫般的图案。

这座建筑的表面画着一个大型的圆形迷宫符号，这是乌博塔的象征，但在基尔·萨巴尔的任何地方都看不到它；只有在从空中或从下方地面看时才能看到。

修道院的入口大厅也是餐厅。鸟羽人僧侣们在这里吃所有的餐点，但这里也是举行会议的地方。鸟羽人使用无靠背的长凳和凳子作为座位，以适应他们的翅膀。这张桌子可以容纳二十人。

这是修道院的主厅，是一个令人印象深刻的景象。天花板的椽子距离地面整整60尺，而茅草屋顶的顶端又比椽子高出15尺。这个空间足够大，以至于鸟羽人可以在室内飞行，尽管为了礼仪，他们很少这样做。

乌博塔的圆形迷宫符号被铺设在直径25尺的地板马赛克上。鸟羽人僧侣们花费大部分时间在楼梯的上下平台上冥想，同时凝视迷宫。其他鸟羽人只有在特殊场合，如婚礼、葬礼和圣日时才会来到这里。

这些睡眠室由鸟羽人僧侣使用。每个房间内有一个双层床和一张小桌子，用于放置蜡烛和洗手盆。僧侣们没有任何个人财产；即使是他们的衣服和祈祷念珠也属于修道院。

在进入神殿之前，僧侣们在这个前厅准备自己，通过用香精油洗涤，阅读启发性的卷轴，并在他们的喙、手和脚上绘制迷宫图案。

一尊与真斑猫人贵族等高的木制雕像靠在对面的墙上，被鲜花和珠子装饰，并环绕着熏香的烟雾。与基尔萨巴尔的其他雕像不同，这座雕像保存完好，尽管它仍然非常古老。通过成功的 DC 15 智力（宗教）检定，可以认出这是乌塔奥以斑猫人形态的描绘。阿卡拉寇拉人并不认识这座雕像是乌塔奥；他们仅仅将它视为保护基尔萨巴尔的护符和冥想的焦点。

鸟羽人族僧侣们在这个大厅里进行冥想和武术的教学。这里除了编织的草席之外没有其他家具。`,spotlightRefs:[],presentNpcIds:["npc_asharra","npc_mwaxanar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_14d",locationId:"loc_13f",name:"净化室",activation:{condition:{type:"always"},priority:0},skeleton:["鸟羽人在访问修道院之前，会在这座建筑内进行仪式性的清洁。","这也是他们为教师和他们神秘的守护者形象（乌博塔作为斑猫人的雕像）留下供品的地方。","下层房间设有一个洗手盆，用于进行净身仪式，还有装有盐、粉末状粉笔和金粉（价值50金币）的较小容器，用于在访问修道院前撒在羽毛上。","上层房间内有一个木制的箱子，上面放着供修道院访客使用的蜡烛和头巾。","在房间的东端，有一个5尺高的木制雕像，雕像脚下放着鲜花和食物供品。"],flesh:`鸟羽人在访问修道院之前，会在这座建筑内进行仪式性的清洁。这也是他们为教师和他们神秘的守护者形象（乌博塔作为斑猫人的雕像）留下供品的地方。

下层房间设有一个洗手盆，用于进行净身仪式，还有装有盐、粉末状粉笔和金粉（价值50金币）的较小容器，用于在访问修道院前撒在羽毛上。

上层房间内有一个木制的箱子，上面放着供修道院访客使用的蜡烛和头巾。在房间的东端，有一个5尺高的木制雕像，雕像脚下放着鲜花和食物供品。这个雕像显然非常古老，成千上万只手的触摸使它几乎变得光滑，因此无法确定它最初描绘的是什么。这里留下的供品每天由阿莎尔的仆人收集，并放置在修道院或长老的房子里的雕像上。`,spotlightRefs:[],presentNpcIds:["npc_asharra","npc_mwaxanar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_150",locationId:"loc_13f",name:"长老的房屋",activation:{condition:{type:"always"},priority:0},skeleton:["阿莎尔和一位名叫英玛托娜（发音为ying-mah-TOE-nah）的年迈女性鸟羽人侍从居住在这座宏伟的建筑中。","其他翼族从未踏入过此地。","姆瓦克丝娜瑞偶尔会来访，只有Na可以随意进出。","除非受到邀请，否则角色不得进入这座建筑。","擅闯教师的家是对待客之道的严重违背。"],flesh:`阿莎尔和一位名叫英玛托娜（发音为ying-mah-TOE-nah）的年迈女性鸟羽人侍从居住在这座宏伟的建筑中。其他翼族从未踏入过此地。姆瓦克丝娜瑞偶尔会来访，只有Na可以随意进出。除非受到邀请，否则角色不得进入这座建筑。擅闯教师的家是对待客之道的严重违背。

房子的下层是一个单间房间。英玛托娜在楼梯下的床垫上睡觉。一尊与斑猫人相似的真人大小木雕像位于门的对面。雕像的脚下摆放着鲜花和供品。雕像明显非常古老，且以丘尔坦风格雕刻，因此需要通过一次成功的 DC 15 智力（宗教）检定才能认出这是乌布塔奥以斑猫人形象出现的描绘。如果有人在修道院中已经发现了这一点，那么这一认识将自动实现。

这个房间的墙壁上有着已经褪色的花卉图案壁画，以及——有些不协调地——数学符号。地板的一部分由于年久失修而塌陷。任何掉落的东西都会坠入下方数百尺的岩石上。

上层装饰有与下层相似的壁画。楼梯顶端的平台没有窗户，因为它建在悬崖内部，但由走廊两端各一支蜡烛微弱地照亮。

外间是一个图书馆，有一个书架，上面放着四十四本古老的书籍。Na 喜欢来这里阅读这些书籍，它们都不是魔法书。这些书籍涵盖了大部分知识领域：数学、自然哲学、地理、神话生物、神学等等。所有书籍都是在魔法瘟疫之前出版的，因此从它们中几乎无法获取有关楚尔特的有用信息。

内室是阿莎尔的私人房间。里面有一张舒适的床，一个床头柜，几本楚尔坦诗歌书籍，以及一个衣柜，里面装有日常和仪式服装。床下有一个小盒子，里面装有四瓶毒药药水，这些很容易被误认为是治疗药水。`,spotlightRefs:[],presentNpcIds:["npc_asharra","npc_mwaxanar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"如果角色们在基尔·萨巴尔的存在变得不便，阿莎尔可能会诉诸这些毒药水。"},{id:"scn_153",locationId:"loc_13f",name:"住宅",activation:{condition:{type:"always"},priority:0},skeleton:["基尔·萨巴尔的住所并不完全相同，但它们足够相似。","每个住所都住着2d4只鸟羽人。","一个标准的住所有两到三层，由梯子连接（内部太狭窄，无法飞行）。","基尔·萨巴尔的大多数鸟羽人除了由木头、羽毛、鳞片、贝壳和牙齿手工制作的图腾外，几乎没有什么贵重物品。"],flesh:"基尔·萨巴尔的住所并不完全相同，但它们足够相似。每个住所都住着2d4只鸟羽人。一个标准的住所有两到三层，由梯子连接（内部太狭窄，无法飞行）。基尔·萨巴尔的大多数鸟羽人除了由木头、羽毛、鳞片、贝壳和牙齿手工制作的图腾外，几乎没有什么贵重物品。",spotlightRefs:[],presentNpcIds:["npc_asharra","npc_mwaxanar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_154",locationId:"loc_13f",name:"5. 王宫",activation:{condition:{type:"always"},priority:0},skeleton:["位于修道院（区域1）和长者的房子（区域3）之间，是一个与区域4中描述的相似的住所。","然而，这个特定的房子是为人类准备的，属于姆瓦克丝娜瑞和Na。","它比其他的要精致得多，这符合他们的王室地位。","姆瓦克丝娜瑞拥有许多美丽的小饰品：银制的刷子和镜子、水晶香水瓶、由多色鹦鹉羽毛制成的书写笔、用来编入她头发的珠宝、镶有炽热的楚特猫眼石和琥珀的项链和戒指。","这些总共价值330金币，但在Kir Sabal被抓到偷取姆瓦克丝娜瑞的物品意味着死亡——而且由于Kir Sabal没有人偷窃，如果有任何东西消失，怀疑自然会落在角色们身上。"],flesh:`位于修道院（区域1）和长者的房子（区域3）之间，是一个与区域4中描述的相似的住所。然而，这个特定的房子是为人类准备的，属于姆瓦克丝娜瑞和Na。它比其他的要精致得多，这符合他们的王室地位。

姆瓦克丝娜瑞拥有许多美丽的小饰品：银制的刷子和镜子、水晶香水瓶、由多色鹦鹉羽毛制成的书写笔、用来编入她头发的珠宝、镶有炽热的楚特猫眼石和琥珀的项链和戒指。这些总共价值330金币，但在Kir Sabal被抓到偷取姆瓦克丝娜瑞的物品意味着死亡——而且由于Kir Sabal没有人偷窃，如果有任何东西消失，怀疑自然会落在角色们身上。`,spotlightRefs:[],presentNpcIds:["npc_asharra","npc_mwaxanar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_154_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_156",locationId:"loc_156",name:"基彻尔湾",activation:{condition:{type:"always"},priority:0},skeleton:["奥伦河倾泻进这个以伊莱伯·基彻命名的浅湾，他是一个自大的科米尔探险家，声称在几个世纪前发现了这个海湾。","当然，他没有做到这一点；","基彻错过了楚尔特湾（他是一个糟糕的航海家），在一场风暴把他吹回到陆地视线之前，他无意中沿着半岛的东海岸航行。","除了它提供了通往卡斯蒂利亚港和梅兹罗废墟的通道之外，这个海湾没有什么特别之处。"],flesh:"奥伦河倾泻进这个以伊莱伯·基彻命名的浅湾，他是一个自大的科米尔探险家，声称在几个世纪前发现了这个海湾。当然，他没有做到这一点；基彻错过了楚尔特湾（他是一个糟糕的航海家），在一场风暴把他吹回到陆地视线之前，他无意中沿着半岛的东海岸航行。除了它提供了通往卡斯蒂利亚港和梅兹罗废墟的通道之外，这个海湾没有什么特别之处。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_157",locationId:"loc_157",name:"罗湖",activation:{condition:{type:"always"},priority:0},skeleton:["这个湖泊位于一个巨大的地热沉降区上方，由火山喷气孔和从余烬谷流下的熔岩加热。","湖泊的部分地区实际上是沸腾的，释放出蒸汽云，这些蒸汽云可以被看到数英里远。","水太热且碱性太强，以至于鱼类或其他类型的水生生物无法在其中生存，湖泊周围的岸边是一片由灰烬和盐滩组成的死亡荒地。","除了泥魔蝠和蒸汽侏儒之外，很少有生物在该地区繁衍。","当水流向北沿着奥伦河流动时，水会冷却并失去大部分碱性。"],flesh:"这个湖泊位于一个巨大的地热沉降区上方，由火山喷气孔和从余烬谷流下的熔岩加热。湖泊的部分地区实际上是沸腾的，释放出蒸汽云，这些蒸汽云可以被看到数英里远。水太热且碱性太强，以至于鱼类或其他类型的水生生物无法在其中生存，湖泊周围的岸边是一片由灰烬和盐滩组成的死亡荒地。除了泥魔蝠和蒸汽侏儒之外，很少有生物在该地区繁衍。当水流向北沿着奥伦河流动时，水会冷却并失去大部分碱性。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_158",locationId:"loc_158",name:"灰烬与烟雾之地",activation:{condition:{type:"always"},priority:0},skeleton:["这片地狱般的、烟雾缭绕的黑色火山岩海被熔岩流所贯穿。",'灰烬与烟雾之地是火蜥蜴和年轻的红龙Tzindelor（见"龙心矿井"）的游乐场，他喜欢在熔岩流中沐浴。',"这个灰暗、贫瘠的山谷通常比楚尔特其他地方热20到40度。","它接收到的雨水只是半岛其他地方降雨量的一小部分，而且即使有雨水也会在酷热中迅速蒸发。","几次探险试图探索这个地区，但是关于它的大部分已知信息（以及在辛德拉·席尔瓦因的地图上显示的内容）都是基于从沿海山脉顶端进行的视觉观察。"],flesh:'这片地狱般的、烟雾缭绕的黑色火山岩海被熔岩流所贯穿。灰烬与烟雾之地是火蜥蜴和年轻的红龙Tzindelor（见"龙心矿井"）的游乐场，他喜欢在熔岩流中沐浴。这个灰暗、贫瘠的山谷通常比楚尔特其他地方热20到40度。它接收到的雨水只是半岛其他地方降雨量的一小部分，而且即使有雨水也会在酷热中迅速蒸发。几次探险试图探索这个地区，但是关于它的大部分已知信息（以及在辛德拉·席尔瓦因的地图上显示的内容）都是基于从沿海山脉顶端进行的视觉观察。',spotlightRefs:[],presentNpcIds:["npc_syndra_silvane"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_15a",locationId:"loc_15a",name:"姆巴拉",activation:{condition:{type:"always"},priority:0},skeleton:["一个高达1800尺的高原，其悬崖峭壁陡峭，上面堆满了像船一样大的巨石。","一条狭窄的小径被凿在悬崖面上，似乎一直通向顶部。","高原的陡峭悬崖可以攀爬，但需要攀爬工具包、熟练掌握运动技能，并且至少需要300尺的绳索。","这条路是通往顶部的更简单路线。","它从高原的北侧开始。"],flesh:`高原的陡峭悬崖可以攀爬，但需要攀爬工具包、熟练掌握运动技能，并且至少需要300尺的绳索。

这条路是通往顶部的更简单路线。它从高原的北侧开始。经过许多急转弯，它在悬崖面上蜿蜒3英里才到达顶部。小径的宽度不一，平均为5尺。滚落的巨石和纠结的树根在许多地方阻塞了道路，但只要角色们没有被任何东西追赶，他们可以安全地清除障碍。第一次攀登需要3小时；一旦道路被清理，攀登或下降的时间可以减半。

在东南方向，跨越阿尔达尼盆地，他们可以看到乌塔欧之心，而在西侧的丛林中，则坐落着奥罗伦加的阶梯金字塔。成功通过 DC 20 感知（察觉检定的角色还能在南方的台地之外的丛林中发现某种沉船的残骸（参见"星辰女神号的残骸"）。

在高原边缘下方约一百尺处，小径（此时正沿着悬崖向西延伸）突然转向一个自然的石缝。石阶被凿入这个15尺宽的裂缝中，墙壁上雕刻着以浅浮雕形式展现的丛林捕食者、飞行蜥蜴和喷发的火山，这些雕刻巧妙地利用了岩石的自然形状。

这些头骨是姆巴拉前居民的唯一遗物。居民们被一个伪装成巫医的女巫吞噬。所有的头骨都显示出被啃食的迹象。现在，这个女巫是姆巴拉唯一的活居民。

要离开台阶，角色们必须要么趟过一堆头骨，要么爬上楼梯的两侧，绕过大门。可以看到木制栅栏的痕迹，但它也几乎完全消失了或倒塌了。

姆巴拉曾经是一个小王国的中心。大部分建筑是木头和茅草建造的，现在它们只是被雨水、风和时间摧毁的破碎堆肥堆。一些石头地基和杂草丛生的坡道从废墟中突出，表明这里不仅仅是一个简单的村庄。

普普奶奶，一个绿鬼婆，扮演着一个古老巫婆的角色。她声称在过去许多年里，所有其他村民都被生活在高原南边的有翼生物杀害了。她是唯一的生还者——对于捕食者来说太瘦弱或者太狡猾。她靠花园里的根和在陷阱中捕获的少数鸟类和蜥蜴为生。如果有人问她的名字，她需要好一会儿才能记起村民叫她普普奶奶。

这个女巫想要从冒险者那里得到两样东西：让他们摧毁高原南边的翼手兽巢穴（见下文的"翼手兽巢穴"），然后成为她几个月的食物。她不太可能公开攻击他们。她更愿意趁他们不备，一个接一个地干掉他们，就像她对村民做的那样。

普普奶奶并不完全孤单。她吹一声口哨，就能召唤出2d6只飞猴（见附录D），它们生活在树上，而且她还有一个血肉魔像埋在她的小屋外的浅坟里。这个老巫婆用飞猴来收集食物和补给，但它们不会为她战斗。魔像会为她战斗；如果被命令攻击，它会作为附赠动作从地下爆发出来。

普普奶奶是骨头之主Myrkul的信徒，并且知道一种可以将死去的类人生物变成类似僵尸生物的变形仪式。将死去的同伴带到姆巴拉的角色可以请求普普奶奶将他们变成行尸走肉。然而，她不会免费做任何事情。清除翼手兽的巢穴是她为这个仪式考虑的最低代价。她还可能要求获得指挥官断骨的头发绺和几个他的指甲（见"复仇营地"）或Saja N'baza的一个彩虹鳞片（见"奥罗伦加"）。任何一个无疑都将被用于施展邪恶魔法。

普普奶奶 是楚尔特唯一能够执行偷来的生命仪式的生物。这个仪式需要1小时来完成，并且需要三样东西：一个大体完整的类人生物尸体，一个至少价值100金币的宝石，以及最令人不安的——另一个类人生物的牺牲。普普奶奶杀死牺牲品，将其灵魂捕获在宝石中，并通过魔法将宝石嵌入死者的额头。在普普奶奶向Myrkul祈祷之后，牺牲的灵魂获得了与其绑定的类人生物的知识和个性，实际上模仿了那个类人生物的灵魂。当仪式完成后，死去的类人生物仿佛从深度睡眠中醒来，尽管它并未真正复活。

通过这个仪式被转化为行尸走肉的角色恢复其所有生命值，并保留其具体数值，除非此处有特别说明：

这个角色被视为不死生物，而不是类人生物，并且会受到所有针对不死生物的效果的影响。这个角色不需要进食、饮水、睡眠或呼吸。

角色的生命值上限每天黎明时减少1d4，代表身体的生理衰退。没有任何法术或效果可以停止或抵消这种衰退。

一个角色如果被变成行尸走肉，并且在后来被复活或重生，将会失去作为不死生物的所有记忆，但在作为不死生物期间获得的等级或经验值不会丢失。

绿女巫在她的小屋中没有存放任何有价值的东西。她的宝藏隐藏在旧村庄的一个蓄水池里。任何穿过废墟的人都会发现蓄水池。蓄水池的开口直径为15尺，井道下降15尺到达污浊的黑色水面。蓄水池的边缘和墙壁都是砖砌的。

此处水深40尺且异常浑浊，导致水域处于2状态。除非角色拥有盲视能力，否则必须用手摸索前进。在水面下约20尺处，某面墙的砖块被拆除形成了一个洞口。角色通过成功通过DC 10敏捷检定即可用手摸到洞口。一条10尺长的狭窄隧道从洞口通向完全被水淹没的密闭舱室。舱室内有一个用人类皮肤缝制的扎口皮袋，内装：六颗缟玛瑙（每颗价值50金币）、一张法术卷轴（记载en=Comprehend Languages法术）、十块印有矮人符文的精金锭（每块价值10金币）。这些金锭与在赫拉卡玛尔发现的（参见"赫拉卡马尔"）完全一致。

从丢弃的砖块向上搜索会自动引导他们找到洞口。

一群二十只翼手兽在高原南部边缘下方的洞穴中筑巢。可以通过攀爬悬崖到达，但仔细侦察该区域并在 DC 13 感知（察觉）检定中成功的角色可以发现距离悬崖 70 英尺的岩石中有一条滑道。这条烟囱足够宽，可以让小型生物或穿着不超过轻甲的中型生物挤过去。在蜿蜒下潜 30 英尺后，它通向了翼手兽洞穴的后部，洞穴的平面大致呈三角形：入口宽 30 英尺，深 60 英尺，高 20 英尺。翼手兽并未意识到这条通往他们洞穴的后门存在。

翼手兽没有设置守卫，他们相信自己的悬崖避难所是坚不可摧的。潜行的角色可以不被注意地进入洞穴。在任何给定时间，洞穴中有2d6个翼手兽（见附录D）。其余的在外面狩猎，但他们会夜幕降临前返回。

在洞穴的后半部分有两具被部分啃食的探险家尸体。它们附近一个被丢弃的背包里有一个装有6 gp的小包、一把镀银匕首和一瓶高等治疗药水。`,spotlightRefs:[],presentNpcIds:["npc_nanny_pu_pu"],availableInfoIds:[],encounterIds:["enc_15a"],treasureSlotIds:["trs_15a_0","trs_15a_1"],eventIds:[],tone:"tension",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`一个高达1800尺的高原，其悬崖峭壁陡峭，上面堆满了像船一样大的巨石。一条狭窄的小径被凿在悬崖面上，似乎一直通向顶部。

石阶出现在高原顶部，位于曾经宏伟但现在破败的木制大门下方。封闭这个入口的大门已经腐烂消失；只剩下它们的锈迹斑斑的铁铰链和加固带。取而代之的是一堆人头骨。它们被剥离了所有的肉，被太阳晒得苍白，从道路上和高耸的土堆顶部对你露出笑容。

唯一保持完好的结构是一间孤独的小屋，位于大门西南方向约一千码处，紧邻一片巨石区。这间小屋由茅草和动物皮毛制成，覆盖在一个巨大爬行动物的胸腔上。动物头骨、风铃以及羽毛和贝壳制成的图腾在微风中叮当作响，小屋中飘出烟雾。
一个生物以动物般的姿势弯腰缓慢地绕着小屋移动。你意识到这是一个人类女性：难以置信的年老，因关节炎而残疾，因白内障而目盲。她黝黑的面孔和秃顶被黄色泥土勾勒出骷髅的形状——或者也许是她干瘪的肉体创造了这种错觉。`,dmGuidance:`当角色们不断攀升，越过林木线时，他们被周围荒野的壮丽景色所震撼。
当角色们到达石阶顶部时，请阅读：
如果角色们探索姆巴拉的废墟，请阅读：
如果角色们不愿意牺牲他们中的一个来拯救一个倒下的同伴，普普奶奶建议他们捕获一个地精、一个格隆或其他类人生物并带给她。
如果角色的生命值上限降至0，嵌入角色额头的宝石会碎裂，角色将再次变成尸体。
如果角色在沿着水池壁搜索时错过了墙上的洞，他们会在水池底部发现一堆砖块。`,mapGeometry:{imageRef:"adventure/ToA/042-0318.webp"}},{id:"scn_163",locationId:"loc_163",name:"梅兹罗",activation:{condition:{type:"always"},priority:0},skeleton:["这个楚尔特城市并非看上去那样。","据所有记载，梅兹罗被魔法瘟疫摧毁了，其废墟也表明了这一点。","实际上，这座城市的不朽守护者——巴拉伊——利用他们神赐的魔法将整个城市传送到了一个天堂（一个远离窥探之眼的魔法构造的半位面）。","留下的空荡荡的废墟给人留下了梅兹罗已被摧毁的印象。","目前尚不清楚梅兹罗人和他们的城市是否会回来。"],flesh:`这个楚尔特城市并非看上去那样。据所有记载，梅兹罗被魔法瘟疫摧毁了，其废墟也表明了这一点。实际上，这座城市的不朽守护者——巴拉伊——利用他们神赐的魔法将整个城市传送到了一个天堂（一个远离窥探之眼的魔法构造的半位面）。留下的空荡荡的废墟给人留下了梅兹罗已被摧毁的印象。目前尚不清楚梅兹罗人和他们的城市是否会回来。

巴拉之一，一个名叫阿莉桑德拉的人类圣武士，与阿图斯·辛贝尔结婚。一百多年前，当阿图斯帮助梅兹罗抵御邪恶的军阀拉兹·纳斯及其不死生物军团后，两人坠入了爱河。在允许自己随整个城市一同消失之前，阿莉桑德拉向阿图斯承诺，当城市不再处于危险之中时，她将返回楚尔特。

阿图斯不会通过透露他们城市的真实情况来危及梅兹罗人。尽管凛冬戒指使他不朽，但在过去几年中，他变得不耐烦，渴望阿莉桑达的归来。他不时地参观废墟，看看是否有任何变化。当他不在废墟时，他正在楚特的丛林中寻找奥罗隆加，这是另一个废墟城市，希望与那里居住的预知守秘纳迦进行咨询。

留下的废墟形成了一个圆形。四条主要的大街通往北、南、东、西，在中心广场交汇。整个废墟经过几个世纪的沉降，以至于奥伦河的水覆盖了古老的码头。摇摇欲坠、藤蔓覆盖的建筑物矗立在现在更像是运河而不是道路的被水淹没的街道上。这个地方异常安静。

废墟已经被焰拳团以博德之门的名义彻底洗劫，焰拳团的巡逻队仍然定期访问这个地方——部分是为了训练新兵，部分是为了确保没有遗漏任何东西。玩家角色在这里找不到任何财宝或线索。`,spotlightRefs:[],presentNpcIds:["npc_artus_cimber","npc_ras_nsi"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_165",locationId:"loc_165",name:"迷雾崖",activation:{condition:{type:"always"},priority:0},skeleton:["雾崖是一堵高达1000尺的火山岩壁，沿着楚尔特西海岸延伸200英里。","这里根本没有海滩，只有巨大的锯齿状岩石和汹涌的海浪。","如果这些还不足以让大多数人远离，那么悬崖上还居住着大型鸟羽人部落，以及翼手龙和羽蛇龙的巢穴。"],flesh:"雾崖是一堵高达1000尺的火山岩壁，沿着楚尔特西海岸延伸200英里。这里根本没有海滩，只有巨大的锯齿状岩石和汹涌的海浪。如果这些还不足以让大多数人远离，那么悬崖上还居住着大型鸟羽人部落，以及翼手龙和羽蛇龙的巢穴。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_166",locationId:"loc_166",name:"南戈尔",activation:{condition:{type:"always"},priority:0},skeleton:["这个宏伟的花园（地图2.12）是为了纪念自负的奥穆女王扎尔柯蕊而建造的。","建造者Thiru-taya是扎尔柯蕊的首席将军和配偶。","在他们的时代，这个花园被称为Ka-Nanji，即梦幻悬挂花园。","Ka-Nanji是逃离奥穆的阴谋和压力的宫殿式隐居地，这个美丽的分层花园被誉为对女王的恰当致敬。","不断的奉承和有毒的虚荣心在扎尔柯蕊的心中溃烂，直到她与一位罪魔交易，以永远保持她的青春和美丽。"],flesh:`这个宏伟的花园（地图2.12）是为了纪念自负的奥穆女王扎尔柯蕊而建造的。建造者Thiru-taya是扎尔柯蕊的首席将军和配偶。在他们的时代，这个花园被称为Ka-Nanji，即梦幻悬挂花园。Ka-Nanji是逃离奥穆的阴谋和压力的宫殿式隐居地，这个美丽的分层花园被誉为对女王的恰当致敬。

不断的奉承和有毒的虚荣心在扎尔柯蕊的心中溃烂，直到她与一位罪魔交易，以永远保持她的青春和美丽。罪魔通过将女王变成美杜莎来履行交易。当她邪恶交易的消息在王国中传播开来时，军队强迫扎尔柯蕊退位，并将她流放到卡南吉，这个地方从此被称为南加洛尔，失落梦境的花园。

扎尔柯蕊认为提鲁-塔亚是流放她的将军之一，因此在南加洛尔破坏了所有他的雕像和肖像。她直到他的骨灰被带到花园安葬，这是他临终的愿望，才得知他一生都忠于她，尽管在奥穆遭受了数十年的监禁和耻辱。扎尔柯蕊在花园里种植致幻植物，因为在它们的麻醉性、梦幻般的睡莲梦中，她才能召唤出她死去爱人的面容。

角色们可以通过解读花园中随处可见的雕刻来发现扎尔柯蕊的悲惨故事。如果这让他们对她产生了同情，那也无妨，但她的悲剧并没有使扎尔柯蕊变得高尚，也没有让她成为一个更好的人；它使她变成了一个怪物。

美杜莎在被诅咒的花园里并不孤单。魔王鹤族作为她的哨兵和间谍为她服务。五彩缤纷的鹦鹉和金丝雀成群结队地飞向花园中种类繁多的植物，其中一些对访客具有敌意。最后，勇敢的楚尔特人有时会寻找扎尔柯蕊，将她视为一种丛林神秘人物，要么学习她致幻植物的秘密，要么询问关于遥远过去的问题。

Nangalore位于Olung河半英里远的地方。由于几个世纪的淤积和侵蚀，河流的一个支流洪水直接涌到花园门口（区域1），使得这个地点乘船容易到达。步行前往Nangalore是一场噩梦，因为1英里内的土地无非是泥泞的沼泽地。

这个花园有多个层次。地图2.12使用高度标记来指示这些层次相对于地面的高度。一些关键位置包含多个层次；例如，区域4位于地面以上25尺处，有一个坍塌的10尺高的阳台（地面以上35尺）和一个20尺深的坑（地面以上5尺）。

整个南加洛尔都刻有古老的奥姆安文铭文。拥有与世隔绝的学者或智者背景的角色可以通过成功的DC 10智力（历史）检定来翻译古老的奥姆安铭文。拥有符文守护者之眼异能的魔契师则可以自动翻译。否则，需要使用en=Comprehend Languages法术或类似的魔法。`,spotlightRefs:[],presentNpcIds:["npc_na","npc_zalkor"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_167",locationId:"loc_166",name:"1. 入口",activation:{condition:{type:"always"},priority:0},skeleton:["一座宏伟的建筑从丛林中升起：一个悬挂的花园，充满了异国情调的美丽。","水流沿着两个巨大的雕刻大象之间的台阶流下。","在它们后面，一条宽阔的、被洪水淹没的大道笔直地延伸了一百多尺，最后到达一个暴龙头的雕刻。","水从暴龙的下巴倾泻而出，沿着大道流动，然后从你面前的台阶流下。","五尺高的梯田围绕着这条林荫大道。"],flesh:`四只鳄鱼生活在花园南部的洪水沼泽中。它们会忽略船上的角色，攻击在水中的任何人，并且不会爬上楼梯。

流经主大道的水只有1尺深，水流并不特别强。最初，主大道的六条侧支道都有屋顶覆盖，但其中两个屋顶已经坍塌，另外三个部分倒塌。隧道屋顶坍塌的地方堆满了碎片，阻塞了走道。仍然完好的屋顶上挂着藤蔓和树根。有盖的隧道只有4尺高，里面积有1尺深的水。

在步道之间的大街上，四尊石雕面孔凝视着对面，描绘了一位威严的女性（扎尔柯蕊），每尊面孔的表情都有细微的变化。每个面孔上方都刻有古奥穆语的短语。这些短语构成了一条信息。要按顺序获取信息，应该从南端的大道开始，沿着暴龙头形喷泉的方向，从左侧（西边）交替到右侧（东边）阅读。

面孔1（下方西侧）带着一种困惑的表情。它上方的信息写着："这个花园是为奥穆的女王、楚尔特的宝石扎尔柯蕊而奉献的。"

第二面（上西）带着一种轻蔑的表情。它上面的信息写道："被她的人民和爱她的提鲁-塔亚崇拜，但她被背叛了。"（"爱"这个词被凿掉了，在它上面的石头上刻着"背叛"。）

第三尊面孔（上东）表情严肃。其上方的信息写着："在她统治的第十年，愿她永远在辉煌中治理。"

面孔4（下方东侧）带着一种宁静的表情。它上方的信息写着："愿众神自己也对这谦卑的美丽倒影感到惊叹。"`,spotlightRefs:[],presentNpcIds:["npc_na","npc_zalkor"],availableInfoIds:[],encounterIds:["enc_167"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一座宏伟的建筑从丛林中升起：一个悬挂的花园，充满了异国情调的美丽。水流沿着两个巨大的雕刻大象之间的台阶流下。在它们后面，一条宽阔的、被洪水淹没的大道笔直地延伸了一百多尺，最后到达一个暴龙头的雕刻。水从暴龙的下巴倾泻而出，沿着大道流动，然后从你面前的台阶流下。五尺高的梯田围绕着这条林荫大道。低矮的拱门——每边三个——被建在梯田的墙壁中。这些拱门和它们后面的隧道都处于不同程度的倒塌状态。在拱门之间安装着雕刻精美的、超现实的巨大石雕面孔。
上层露台上生长着繁茂的野生植物群，五彩缤纷的鹦鹉和金丝雀在其中穿梭歌唱。在北部，一个破败的砖砌圆顶在暴龙头形的喷泉上方升起。在您的左右两侧，最高露台上矗立着更小的钟形圆顶。`},{id:"scn_16a",locationId:"loc_166",name:"2. 梯田",activation:{condition:{type:"always"},priority:0},skeleton:["野生的过度生长无法掩盖这个花园是外来植物的避难所，这些植物在周围的丛林中不会自然生长。","不熟悉的花朵、高耸的蕨类植物，甚至更奇怪的植物，像巨大的松果或睡莲叶，到处蔓延和纠缠。","明亮的金丝雀在它们之间飞舞，带有条纹喙的鹦鹉对你尖叫。","这些俯瞰主要通道的梯田是无数生物的家园，其中许多是危险的。","一只捕人草（见附录D）生长在东侧的梯田上，位于两个部分倒塌的隧道之间。"],flesh:`这些俯瞰主要通道的梯田是无数生物的家园，其中许多是危险的。

一只捕人草（见附录D）生长在东侧的梯田上，位于两个部分倒塌的隧道之间。当它感应到30尺内有移动时，捕人草会释放它的迷人花粉。

探索西部露台的角色会遇到六只黄迷香丧尸（见附录D），它们潜伏在树木和植物之间。僵尸与周围环境融为一体，任何被动感知（察觉）得分低于12的角色都会被它们自动突袭。在西部露台最北边的树上盘绕着一只黄迷香爬藤（见附录D），当一个或多个角色接近它30尺以内时，它会使用自己的麝香。

在花园的北端，两个拱形门通向西南和东南的花园区域（区域5）。东边的台阶仍然通往门口，但西边的台阶已经坍塌，掉落到下方的走道上。角色可以通过一个简单的跳跃并成功通过一个DC 10敏捷（特技）检定来抓住边缘，从而到达西边的门口。

一个角色若花费至少10分钟在花园露台中搜寻宝藏，必定会发现隐藏的生物或奇异植物，具体由投掷d20并查阅花园发现表决定。`,spotlightRefs:[],presentNpcIds:["npc_na","npc_zalkor"],availableInfoIds:[],encounterIds:["enc_16a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"野生的过度生长无法掩盖这个花园是外来植物的避难所，这些植物在周围的丛林中不会自然生长。不熟悉的花朵、高耸的蕨类植物，甚至更奇怪的植物，像巨大的松果或睡莲叶，到处蔓延和纠缠。明亮的金丝雀在它们之间飞舞，带有条纹喙的鹦鹉对你尖叫。",dmGuidance:"当队伍完成五次此类发现后，将无法再找到更多物品。",randomTableIds:["tbl_16a_0"]},{id:"scn_16d",locationId:"loc_166",name:"灵魂穹顶",activation:{condition:{type:"always"},priority:0},skeleton:["每个上层步道的末端都有一个由雕刻石料制成的钟形圆顶。","东边的圆顶因年久失修开始崩塌。","西边的圆顶被厚厚的蛛网包裹和覆盖。","这两个圆顶建筑是为了吸引自然精灵而建造的。","这个圆顶被一只少了一条腿的巨蜘蛛占据。"],flesh:`这两个圆顶建筑是为了吸引自然精灵而建造的。

这个圆顶被一只少了一条腿的巨蜘蛛占据。这只七腿的蜘蛛潜伏在它的蛛网中，攻击任何接近其家10尺以内的人。

三只怯蕴阿灵（见附录D）居住在这个穹顶中。他们从岩石中出壳来间谍路过的生物。一只怯蕴阿灵对高个子的人着迷，可能会赐予队伍中最高的成员一个复原护咒，如果它对队伍有好感的话。另外两只怯蕴阿灵害羞且对陌生人疑心。`,spotlightRefs:[],presentNpcIds:["npc_na","npc_zalkor"],availableInfoIds:[],encounterIds:["enc_16d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[77],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"每个上层步道的末端都有一个由雕刻石料制成的钟形圆顶。东边的圆顶因年久失修开始崩塌。西边的圆顶被厚厚的蛛网包裹和覆盖。",dmGuidance:"如果角色们杀死蜘蛛并搜索蛛网，他们会找到被包裹着的干枯的白化矮人和地精的尸体，但没有宝藏。"},{id:"scn_171",locationId:"loc_166",name:"4. 废墟宫殿",activation:{condition:{type:"always"},priority:0},skeleton:["这个圆顶上仍然有几处残留着金色石膏的痕迹，但在其他地方你看到的是老旧风化的砖块，其中不少已经掉落。","尽管时间的流逝和衰败使它们的辉煌有所褪色，但超大型的大象雕刻和优雅的高耸尖塔仍然是壮观的景象。","穹顶的顶部因时间流逝而变得脆弱，会在重达 200 磅或以上的生物的重量下坍塌。","任何在屋顶坍塌时站在或依附在屋顶上的生物都会坠落，正常受到伤害，并可能掉入蓄水池中。","圆顶西侧的铁门则完全从铰链上脱落。"],flesh:`角色可以通过成功进行 DC 10 力量（运动 检定来爬上穹顶的外部，并通过其中一个洞窥视内部。穹顶的顶部因时间流逝而变得脆弱，会在重达 200 磅或以上的生物的重量下坍塌。任何在屋顶坍塌时站在或依附在屋顶上的生物都会坠落，正常受到伤害，并可能掉入蓄水池中。

圆顶东侧的铁门生锈无法打开，只有通过成功的 DC 17 力量（运动）检定才能强行打开——但冲击会导致部分天花板坍塌。任何强行打开门的人必须进行一次 DC 15 敏捷豁免，豁免失败将受到 9（2d8）点钝击伤害，成功则只受到一半伤害。圆顶西侧的铁门则完全从铰链上脱落。

当它完好无损时，二楼实际上是一个环绕圆顶三面的夹层。战士雕像的头部、胸部和肩部高出了夹层的水平面。

这个20尺深的坑里积有1d4 + 2英寸的雨水，并且是两个毒蛇群的栖息地。这些蛇群满足于待在坑里，并且会攻击任何加入它们的生物，除了扎尔柯蕊，蛇群听从他的命令。没有装备或魔法的帮助，坑壁是爬不上去的。

雨水通过屋顶的洞口流入坑中，通过管道从主要通道（区域1）头部的暴龙头形喷口中排出。蛇也可以通过这些管道进出，这些管道宽6英寸。

圆顶内侧潦草写下的信息只有爬上夹层才能阅读，但楼梯和阳台的破旧状态使这一冒险变得危险。一个爬上台阶的角色必须成功进行一次 DC 10 敏捷（特技）检定，以在不震动地板的情况下移动；否则，台阶会坍塌，角色将因坠落受到 1d6 钝击伤害。小型角色在此检定中获得优势。若无台阶，爬上升内弯曲的墙壁需要攀爬工具和一次成功的 DC 15 力量（运动）检定。

这条信息用古奥穆语潦草地写着："真爱，忠诚的将军，在南加洛尔你将安息。只要我活着，就无人会打扰你。这是我的忏悔誓言，因为我的罪过，我不能死去。"

这座大型雕像描绘的是提鲁-塔亚。扎尔柯蕊出于感激和喜爱委托制作了它，但当她认为这位将军背叛了她时，她破坏了这座雕像。雕像的面部已经完全被毁。在雕像的背部用古奥穆语刻着"原谅我"这几个字。

较小的雕像实际上是一个名为高尔（守序善良男性楚尔坦人类 斥候）的石化冒险者。他为了寻找财富来到南加洛尔，并在伸手去拿骨灰坛时被扎尔柯蕊变成了石头。他旁边的地板上刻着以下古老的奥穆安文字："一次为贼，终身为奴！"

陶土瓮内装有提鲁-塔亚的骨灰。`,spotlightRefs:[],presentNpcIds:["npc_na","npc_zalkor"],availableInfoIds:[],encounterIds:["enc_171"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[77],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个圆顶上仍然有几处残留着金色石膏的痕迹，但在其他地方你看到的是老旧风化的砖块，其中不少已经掉落。尽管时间的流逝和衰败使它们的辉煌有所褪色，但超大型的大象雕刻和优雅的高耸尖塔仍然是壮观的景象。

一尊18尺高的石雕，雕刻着一个穿着夹板盔甲的楚尔特战士，头戴装饰着暴龙牙齿的头盔，手持豹皮盾牌，盾牌上有着复杂的图案，它高耸在大厅之上，俯瞰着一个宽阔的八边形蓄水池。大厅里回荡着雨水从天花板滴入大坑的声音。巨人战士雕像的面部被深深的划痕破坏了，但雕像的其余部分仍然完好。雕像的右手紧握着一支石制长矛，而在其下方的地面上放着一个陶土瓮。雕像的北边是一个开放的阳台，可以俯瞰一个被水淹没的花园。
站在这位巨人战士的一侧，是另一尊雕像，这尊雕像要小得多。它栩栩如生地描绘了一个伸手去拿骨灰瓮的男人，他的脸转向阳台。在他无生命的眼睛里，你看到了恐惧。
石阶沿着弯曲的墙壁上升至二楼，但二楼几乎完全坍塌了。然而，有人曾到过那里，因为某种信息被潦草地写在了圆顶天花板上。`,dmGuidance:"当角色们进入废弃的宫殿时，请阅读："},{id:"scn_177",locationId:"loc_166",name:"致幻植物",activation:{condition:{type:"always"},priority:0},skeleton:["扎尔柯蕊在这些四个遮蔽的花园里种植致幻植物。","她从这些植物中酿造一种麻醉药水，使她能够梦见提鲁-塔雅。","没有它，她无法回忆起他的面容。","这个封闭花园里的植物是你从未见过的。","它们的形状奇异，颜色如宝石在阳光下闪烁。"],flesh:`扎尔柯蕊在这些四个遮蔽的花园里种植致幻植物。她从这些植物中酿造一种麻醉药水，使她能够梦见提鲁-塔雅。没有它，她无法回忆起他的面容。

其中四座花园围绕宫殿（区域4）而建。任何类人生物在其中任何一座花园停留1分钟或更长时间，必须进行一次DC 10体质豁免。若豁免失败，该生物将陷入中毒状态。以此方式中毒时，该生物还会被纳加洛尔的每只其他生物魅惑。该生物可以在每小时结束时重复进行豁免，成功则结束此效果。如果在初始豁免之后的任何一次豁免失败且差值达到5或更多，该生物将陷入昏迷状态，并保持昏迷直到受到伤害或成功通过对抗此效果的豁免。

一个同时熟练于医药和自然的角色在2轮检查后能识别这些植物为催眠剂。一个仅熟练于其中一项skill，而非两项都熟练的角色，可以通过在被训练skill中成功进行DC 15的检定来识别这些植物。

一个单身角色如果在花园里花费30分钟，可以清除其致幻植物，在此过程中收集3磅叶子。婕萨敏（见第一章）愿意为每磅叶子支付20金币。

扎尔柯蕊和魔王鹤不会错过在角色们被下药时发动攻击的机会，或者如果他们没有做出任何冒犯行为，会向他们提供有毒的水果和酒（见区域8)。

花园南墙上的一个开放式拱门俯瞰着一个屋顶坍塌的被洪水淹没的隧道（见区域1）。在南墙上用古奥穆语写着"没有梦想，永恒是难以忍受的"。

这个花园里生长着三株三花株（见附录D）。任何穿过花园的角色都不可避免地会触碰到这些美丽但致命的植物。在南墙上用古奥穆语写着"伟大的乌博塔奥，释放我！"

通往上层步道的台阶被树根覆盖。在北墙上用古奥穆语写着"因为少数人的谎言，所有人都必须付出代价。"

这个花园已经被一个捕人草（见附录D）占据，它隐藏在其他植物下面。它攻击任何不是扎尔柯蕊或魔王鹤的生物。在东墙上用古奥穆语写着"梦想，跳舞"。`,spotlightRefs:[],presentNpcIds:["npc_jessamine","npc_na","npc_zalkor"],availableInfoIds:[],encounterIds:["enc_177"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`这个封闭花园里的植物是你从未见过的。它们的形状奇异，颜色如宝石在阳光下闪烁。被5尺高的墙壁环绕，这个异常美丽的花园传达出一种宁静的感觉。
一条信息深深地被划在墙上。`},{id:"scn_17d",locationId:"loc_166",name:"6. 宝塔",activation:{condition:{type:"always"},priority:0},skeleton:["这座破败的宝塔曾经一定非常美丽，它有着宽阔、优雅的拱门，邀请微风穿过，俯瞰下方静谧的水池。","但时间、衰败和某种野兽的存在赋予了它一种阴森的气氛。","它散发出恶臭，深色的污迹覆盖着地板，沿着白色的台阶渗透下来。","这座塔楼是扎尔柯蕊的六个魔王鹤（见附录D）的住所，它们作为她的哨兵和仆人。","内部非常脏乱，到处散落着被啃过的骨头，地板上覆盖着厚厚的粪便。"],flesh:`这座塔楼是扎尔柯蕊的六个魔王鹤（见附录D）的住所，它们作为她的哨兵和仆人。内部非常脏乱，到处散落着被啃过的骨头，地板上覆盖着厚厚的粪便。除非角色们以非凡的潜行技巧穿过花园，否则恶魔族会看到或听到他们的到来，在这种情况下，这个巢穴将会是空的。三个恶魔族会移动到扎尔柯蕊的巢穴（区域8），而其他的则会在树上、墙上或屋顶上占据位置。它们的工作不是一见到入侵者就攻击，而是警告扎尔柯蕊并准备支持她的任何行动。

角色们在搜寻垃圾时会发现魔王鹤藏起来的一些小玩意儿，包括一个包含七颗不同宝石的小袋（每颗10金币），一个形状像羽蛇的彩绘金手镯（50金币），以及一个雕刻有骷髅的木制卷轴筒，里面装有一份守护卷轴（不死生物）。`,spotlightRefs:[],presentNpcIds:["npc_na","npc_zalkor"],availableInfoIds:[],encounterIds:["enc_17d"],treasureSlotIds:["trs_17d_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座破败的宝塔曾经一定非常美丽，它有着宽阔、优雅的拱门，邀请微风穿过，俯瞰下方静谧的水池。但时间、衰败和某种野兽的存在赋予了它一种阴森的气氛。它散发出恶臭，深色的污迹覆盖着地板，沿着白色的台阶渗透下来。"},{id:"scn_180",locationId:"loc_166",name:"7. 洪水花园",activation:{condition:{type:"always"},priority:0},skeleton:["这个池塘的水异常清澈。","十几条大鱼、乌龟和蜥蜴在其中悠闲地游动，水鸟在水面上划水。","它们的涟漪使池塘底部的某些东西变得模糊，所以你无法完全看清楚，但底部似乎被奇特形状的石头覆盖。","一些破碎的石头碎片躺在从池中升起的方形基座上——这曾是一尊雕塑的证据，它曾经矗立在基座顶部。","雕塑的一部分位于基座西侧的水池中：一个巨大的石制面孔仰望着天空。"],flesh:`曾经有一个巨大的扎尔柯蕊石质半身像矗立在底座上的水池上方。它是花园中最美丽的雕塑。在扎尔柯蕊得知有关Thiru-taya的真相后，她出于自我厌恶的行为摧毁了自己的形象。

池中的石头是由鱼、龟、蜥蜴和水鸟形成的 2 英尺深的层，它们在水中游泳时被扎尔柯蕊石化。这些石头已经在池底堆积了几个世纪。这些石化的动物可以卖给南扎路港的收藏家，每个价值 1 金币。每个重 1 磅。在石化的动物下方是夸尼和沙巴拉两位冒险者的石化形态，他们是（混乱中立 女性 楚尔特人 斥候）在几十年前与扎尔柯蕊发生冲突时被石化。`,spotlightRefs:[],presentNpcIds:["npc_na","npc_zalkor"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个池塘的水异常清澈。十几条大鱼、乌龟和蜥蜴在其中悠闲地游动，水鸟在水面上划水。它们的涟漪使池塘底部的某些东西变得模糊，所以你无法完全看清楚，但底部似乎被奇特形状的石头覆盖。
一些破碎的石头碎片躺在从池中升起的方形基座上——这曾是一尊雕塑的证据，它曾经矗立在基座顶部。雕塑的一部分位于基座西侧的水池中：一个巨大的石制面孔仰望着天空。`},{id:"scn_182",locationId:"loc_166",name:"8. 扎尔柯蕊的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这座钟形圆顶看起来完好无损：屋顶没有明显的洞，而且青铜双扇门方正地悬挂在门框中。","门是关着的，但没有上锁。","除非角色们非常隐秘（或者扎尔柯蕊已经死了），否则女王正在等待他们。","圆顶内部的单一大房间显然是皇室公寓——或者几个世纪前是。","现在，明亮的花卉壁画变得暗淡无光，彩色玻璃碎片堆积在破裂的马赛克下面，珐琅木桌破裂且倾斜，所有的布料都磨损且有条纹。"],flesh:`这座钟形圆顶看起来完好无损：屋顶没有明显的洞，而且青铜双扇门方正地悬挂在门框中。门是关着的，但没有上锁。除非角色们非常隐秘（或者扎尔柯蕊已经死了），否则女王正在等待他们。

这个美杜莎并不完全疯狂，但由于她的植物提取物，她不断地产生幻觉，认为提鲁-塔亚站在她身边。扎尔柯蕊的大部分评论都涉及到他；尝试让这些提及对角色们来说尽可能令人困惑。她还相信自己仍然是奥穆的女王，同时记忆并理解她被流放到了这里。她可以关于自己和她过去做出矛盾的陈述，而没有任何明显的认知失调。

扰乱提鲁-塔亚的骨灰或破坏他的雕像是不可饶恕的。

第一次有人对提鲁-塔雅发表不敬的评论或提到他的"背叛"时，扎尔柯蕊会做出愤怒的反应，但她会重新镇定自己。如果这种情况第二次发生，一场战斗是肯定的。

如果有人夺走扎尔柯蕊的面纱，试图抢夺黑色兰花，或拿出镜子，他们的命运就注定了。如果有人问她为什么戴面纱，扎尔柯蕊回答说她不再愿意向除了她心爱的Thiru-taya之外的任何人展示她的面容。

只要会面保持友好，扎尔柯蕊可以透露很多关于奥穆的信息。她可以指引角色们到它的大致位置（"在火山峰和矮人的巨大铁矿之间"），并警告他们元提族垂涎这座城市。她对魂噬者或死亡诅咒一无所知。她听说至少有一个她的后代隐藏在基尔·萨巴尔的鸟人中，等待君主制的恢复。（这些例子说明了扎尔柯蕊同时认为自己仍然是奥穆的统治女王，就像几个世纪前一样，同时也意识到这座城市已经陷落，她处于流亡之中。这两种情况在她的幻觉现实中共存。）

寻找黑色兰花以用于阿莎尔的仪式的角色（见"基尔·萨巴尔"）可以在这里找到，但扎尔柯蕊不会放手，除非角色提供给她同样美丽的东西。作为交换，她要求一颗宝石、一件珠宝或一件价值至少500金币的艺术物品作为支付。（她不会接受同等价值但质量较低的商品。）扎尔柯蕊也对魅力为16或更高的角色感兴趣，并愿意接受这样的角色作为奴隶来换取花朵。扎尔柯蕊拥有的黑色兰花是在Nangalore能找到的唯一一朵。

如果扎尔柯蕊因冒犯决定杀死角色，但情况仍算得上友好，她会提供食物和饮料。她摇响一个银手铃，一个魔王鹤仆人（见附录D）端着一盘水果和葡萄酒出现。所有食物都被巧妙地下了药；只有具有医药熟练项且成功通过DC 13感知（医药）检定的人才能发现污染。扎尔柯蕊也会食用，但她对此类药物已产生了耐受性，因此这次剂量不会影响她。食用或饮用这些食物的角色必须成功通过DC 15体质豁免检定，否则将中毒1小时或直到饮用2夸脱水。

当扎尔柯蕊被减少到63点生命值或更少时，她会呼唤她已故的爱人来保护她。提鲁-塔亚的灵魂响应了这个呼唤，以一个几乎看不见的10尺高的楚尔坦战士的幻象出现，手持一根巨大的力量之矛。这个幻象对伤害和法术无动于衷，不能被驱散或控制。它高悬在扎尔柯蕊上方，直到她死亡或恢复所有生命值。每当一个生物在扎尔柯蕊15尺范围内伤害她时，提鲁-塔亚的幻象就会用它的矛无误地击中攻击者，对其造成15（2d8 + 6）点力场伤害。

在扎尔柯蕊的巢穴中，大部分遗留物都没有什么价值。她的羽毛礼服价值50金币，前提是它没有在战斗中被严重损坏（如果扎尔柯蕊受到的伤害超过一半是劈砍、酸或火焰伤害，或者她受到了en=Fireball或类似效果的影响，那么这件礼服就被毁了）。她的巢穴中还有2d6瓶她的梦境酊剂。每瓶酊剂含有一次剂量，可以在南扎路港以10金币的价格出售。任何饮用了一瓶酊剂的角色必须成功通过一次DC 15的体质豁免。对中毒状态免疫的角色自动成功豁免。如果豁免失败，该角色将开始体验到看似真实的幻觉景象、声音、气味和感觉。对角色施放en=Lesser Restoration或类似的魔法可以结束这种效果，否则效果将持续1d4 + 4小时。`,spotlightRefs:[],presentNpcIds:["npc_asharra","npc_na","npc_zalkor"],availableInfoIds:[],encounterIds:["enc_182"],treasureSlotIds:["trs_182_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`圆顶内部的单一大房间显然是皇室公寓——或者几个世纪前是。现在，明亮的花卉壁画变得暗淡无光，彩色玻璃碎片堆积在破裂的马赛克下面，珐琅木桌破裂且倾斜，所有的布料都磨损且有条纹。
在房间的中心，一张长沙发坐落在一个圆形的基座上。沙发上斜躺着一位穿着由鹦鹉羽毛制成的流动长袍的女子，颜色绚丽。尽管天气炎热，她的手臂、头部和脸部都覆盖着羽毛面纱。在她旁边，一朵黑色的兰花从一个大型陶罐中生长出来，位于沙发的头部。她用带有奇怪语调的声音对你们说："陌生人来到了南加洛尔，我的爱人。我们的臣民祈求什么恩惠？"`,dmGuidance:`如果角色遵守三个条件，他们可以与扎尔柯蕊有一个愉快且有些信息量的邂逅：
如果角色们做了其中任何一件事，那么一场生死战斗是不可避免的。`},{id:"scn_188",locationId:"loc_188",name:"针骨",activation:{condition:{type:"always"},priority:0},skeleton:["一个宽阔的天坑在你面前张开，周围的地面上散落着地精的骨头。","洞口宽90尺，大致呈圆形，石壁几乎垂直。","30尺深的地方，天坑里充满了浑浊的绿色水。","数百只青蛙从一个漂浮的植物跳到另一个。","一个龙的巨大肋骨架和精致的翼骨在泥泞中显现出来。"],flesh:`天坑的墙壁粗糙，挂着几十条结实的藤蔓，所以爬进或爬出这个洞穴是容易的，并且是自动成功的。

这些骨头是奥玛拉戈斯的遗骸，一只成年绿龙，在她的一生中更常被称为针刺。她将这个洞穴作为巢穴，但担心巴提里地精发现了它的位置，并准备袭击它。针刺正在将她的宝藏转移到其他地方时，地精发动了攻击。当龙外出时，地精们将装满食人鱼的篮子倒入了陷坑。当龙返回时，他们用藤蔓网将她困在陷坑中。当食人鱼从下方吞噬龙时，巴提里地精从上方用长矛雨攻击针刺，直到她最终死去。几乎整个地精部落也在战斗中灭亡了。

角色们对水的第一印象是正确的；水到处都深 3 到 4 英尺。在泥泞的底部搜索会发现数百个哥布林骨头和石头矛头，这极大地激怒了大量的青蛙，并招致了两群 食人鱼群 的攻击。如果有人检查龙骨并成功通过一个 DC 13 智力 (调查) 检定，他们会看到肋骨上覆盖的藤蔓有足够的规律性，从而得出结论：龙被一张网缠住了。要确认这些遗骸为绿龙，角色们必须将其头骨从水和淤泥中抬起；这需要一个成功的 DC 15 力量 (运动) 检定。

在洞穴西北墙上的一个 10 英尺宽、10 英尺高的密门隐藏着一个 15 英尺深的壁龛。密门由天然岩石雕刻而成，伪装成墙壁的一部分，周围的植物都已枯死。密门可以通过成功的 DC 17 感知（察觉）检定发现。检查门周围植物并成功通过 DC 15 智力（调查）或 DC 15 感知（医药）检定的角色可以辨别出植物是被毒药杀死的。针（Needle）通过向门喷吐毒气打开了密门；在门上涂抹或喷洒毒药也会使门打开。否则，需要使用 en=Knock 咒语或类似的魔法来打开它。

针刺在壁龛中藏有以下物品：一个由三角龙皮制成的钱包，一个由两个巧妙拼合在一起的伶盗龙头骨制成的小盒子，以及一根一端有蜡塞的空心恐龙骨头。钱包里有55金币，800银币和三个蓝色石英戒指（每个10金币）。头骨盒子价值12金币，内含一根恐惧魔杖（恐惧法杖）和两颗钻石（每颗500金币）。空心恐龙骨头内含五枚+1 投石索子弹。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_188"],treasureSlotIds:["trs_188_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`一个宽阔的天坑在你面前张开，周围的地面上散落着地精的骨头。洞口宽90尺，大致呈圆形，石壁几乎垂直。30尺深的地方，天坑里充满了浑浊的绿色水。数百只青蛙从一个漂浮的植物跳到另一个。
一个龙的巨大肋骨架和精致的翼骨在泥泞中显现出来。藤蔓、苔藓和地衣悬挂在骨骼上。从暴露出的骨架部分判断，水深最多也就三四尺。`},{id:"scn_18b",locationId:"loc_18b",name:"恩西荒原",activation:{condition:{type:"always"},priority:0},skeleton:["这片广阔的丛林很久以前被疫病摧毁，从未恢复。","这里的植物病态且有毒。","在这片荒地的中心是军阀拉兹·纳斯的废弃宫殿：一个曾经建立在一打巨型不死龟背上的崩塌的石制堡垒。","拉兹·纳斯的狂暴不死军团对其造成的破坏如此彻底，以至于这座曾经令人敬畏的建筑除了被压碎的龟壳和漂白的骨头，以及一堆堆如此混乱的石头之外，什么也没有留下，这些石头正在慢慢沉入泥沼中，连古老的墙壁轮廓都无法辨认。","在这个区域，随机遭遇的几率增加了一倍。"],flesh:"这片广阔的丛林很久以前被疫病摧毁，从未恢复。这里的植物病态且有毒。在这片荒地的中心是军阀拉兹·纳斯的废弃宫殿：一个曾经建立在一打巨型不死龟背上的崩塌的石制堡垒。拉兹·纳斯的狂暴不死军团对其造成的破坏如此彻底，以至于这座曾经令人敬畏的建筑除了被压碎的龟壳和漂白的骨头，以及一堆堆如此混乱的石头之外，什么也没有留下，这些石头正在慢慢沉入泥沼中，连古老的墙壁轮廓都无法辨认。在这个区域，随机遭遇的几率增加了一倍。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_18d",locationId:"loc_18d",name:"奥罗伦加",activation:{condition:{type:"always"},priority:0},skeleton:["奥罗隆加这座古老城市留下的唯一遗迹是一座破败的金字形神塔，由一位守秘纳迦守护。","这条纳迦有数千年的历史，是大量有用信息的源泉——可能是楚特地区最好的信息来源。","然而，她并不容易接触。","一座巨大的砖石结构的金字形神塔从丛林中升起。","两个楼梯呈对角线上升并横跨正面，一个从右侧开始，另一个从左侧开始，它们在你们头顶上方30尺高的第二层平台上相遇。"],flesh:`奥罗隆加这座古老城市留下的唯一遗迹是一座破败的金字形神塔，由一位守秘纳迦守护。这条纳迦有数千年的历史，是大量有用信息的源泉——可能是楚特地区最好的信息来源。然而，她并不容易接触。

这座金字塔形建筑被魔法包裹着，如果有人施放en=Detect Magic，这一点就会变得明显。这个保护壳阻止任何人通过除了爬楼梯以外的任何方式攀登金字塔。试图飞上去的角色会飞越树梢，但永远不会更接近金字塔，就好像他们正在飞向一个他们无法察觉的强大逆风。那些试图攀爬墙壁的人爬到一半时，会莫名其妙地失去抓握力，然后滑下来。一个为攀爬墙壁而建造的梯子永远达不到顶部，无论梯子有多长。扔上去勾住边缘的绳索和钩子总是够不着。施放en=Teleport或en=Misty Step会将施法者横向移动，而不是上升到下一个层次。以任何方式绕过这些考验都是不可能的。将整个情况想象成童话可能会有所帮助；它不需要讲得通，因为奥罗伦加的魔法处于神话般的规模，压倒了任何凡人的能力。

从地面到金字形神塔第一层的台阶长50尺，高30尺。台阶上覆盖着纠结的树根、藤蔓和攀缘植物。角色们可以将最初的10尺视为3来攀爬。超过10尺后，他们开始被荆棘挥砍。如果他们继续攀爬，每爬升一尺会遭受1点挥砍伤害。超过20尺后，这个伤害增加到每尺2点挥砍伤害。这些荆棘被砍断、烧毁或摧毁后会迅速重新生长，它们不能被魔法或能力分开。下台阶移动时不会受到伤害。

它大约一英尺高，它的面具类似于三角龙的头部。它还拿着一朵大型的橙色和紫色兰花。片刻之后，它冲上台阶；荆棘在它面前分开，并在它身后立即合拢。

为了爬上台阶，角色们必须找到更多的橙色和紫色兰花。每个爬楼梯的角色都需要自己有一朵兰花。

从第一层到第二层的台阶长33尺，升高20尺。石头因年久失修而崩裂。试图攀爬台阶的人发现，在走了最初的几步之后，石头在他们脚下崩解成砾石，因此他们无法再取得更多进展。无论角色们如何尝试攀爬和拆除台阶，台阶似乎永远不会变得更糟，砾石也永远不会堆积得更深。

它的面具类似变色龙的头部。它携带着一朵橙紫相间的兰花和一根红色鹦鹉羽毛，并以轻盈如羽毛般的姿态轻松地跑上易碎的台阶。

角色们可以在丛林中或在这一层搜索几分钟后在地上找到鹦鹉的羽毛。他们需要同时拥有羽毛和兰花才能爬上台阶。

从第二层到第三层（神殿层）的台阶长20尺，升高12尺。这些台阶状况极佳，但是毒蛇群在台阶上爬行。如果蛇被杀死，会有更多的蛇通过石头上的洞爬出来替换它们，因此这些蛇群永远无法被摧毁或甚至削弱。没有法术或能力可以阻止蛇攻击爬楼梯的人。

在检查楼梯片刻后，角色们注意到第三步台阶处站着一个怯蕴阿灵。它的面具形似獴的面部，手持一根红色鹦鹉羽毛和一朵橙紫相间的兰花。在台阶底部，怯蕴阿灵用兰花抽打一条蛇激怒它，然后用羽毛轻抚蛇的侧翼使其平静，接着面朝蛇躺下，随后这条爬行动物便从面具口中钻入怯蕴阿灵体内。接着怯蕴阿灵像蛇一样蜿蜒爬上台阶，完全不受其他毒蛇干扰。要安全攀爬台阶，角色们必须如法炮制，但这个等级并非自动完成。使用兰花和羽毛很容易，但角色吞下蛇后必须成功通过DC 10的体质豁免检定。邪恶阵营角色进行该豁免检定时具有劣势。若豁免成功，角色可安全蜿蜒爬上台阶。若豁免失败，则受到17（5d6）点心灵伤害并可重试，但DC提升至11。后续每次失败DC再增加1。

金字形神塔顶部的神殿是一个简单的砖制矩形结构。外墙装饰有乌博塔的迷宫符号。穿过敞开的门口是一个贫瘠、多尘的房间，但任何被动感知（察觉）得分为13或更高的角色都会注意到香味的气味。

没有携带兰花和羽毛的角色进入时，会发现神殿是空的。离开后再带着物品回来，情况并没有改变；已经太晚了。携带兰花和羽毛的角色进入时，会发现自己在同一个房间里，但那是几个世纪前的样子。他们只能进入纳迦的面前一次。如果有人离开后再回来，看到的只是空荡荡的房间。

对那些角色发现自己处于纳迦面前的玩家阅读以下内容：

Saja N'baza知道Mezro城发生了什么（见"梅兹罗"），并告诉Artus，只要拉兹·纳斯活着，它就不会回来。这给了Artus陪伴队伍前往奥穆的动力。

纳迦通过幻象知道拉兹·纳斯和他的元提追随者正密谋从他们在奥穆的巢穴中终结世界。她对死亡诅咒了解不多，但当角色们描述它时，她确认它与与奥穆相关的各种征兆相符。纳迦知道奥穆位于火焰峰和失落荣誉谷之间，她也知道它沉没在周围丛林的水平面之下，所以要从空中或最近的高地才能最好地发现它。

纳迦记得拉兹·纳斯的第一次起义，她敦促角色们杀死他，既是对他过去暴行的惩罚，也是为了防止任何复发的可能性。每个同意的角色都会收到一个超自然的魅力。根据角色在队伍中的角色分配适当的魅力。那些似乎犹豫不决的角色可能会被施加en=Geas法术。

角色们离开神殿后，他们所做的任何事情都无法让他们再次回到Saja N'baza面前。每次他们重新进入时，神殿都是一个荒凉的房间。无论他们进入时是什么时候，下一次天亮时就是第二天的黎明。他们可以毫无困难地沿着金字形神塔下降，无论是否带着兰花和羽毛；蛇已经不见了，台阶稳固，一条清晰的路径穿过植物和荆棘。当他们到达地面时，角色们会看到金字形神塔底部周围开满了蓝色的郁金香。这些郁金香虽然美丽，但没有魔法效果。`,spotlightRefs:[],presentNpcIds:["npc_artus_cimber","npc_dragonbait","npc_ras_nsi"],availableInfoIds:["info_toa_omu_vision"],encounterIds:["enc_18d"],treasureSlotIds:[],eventIds:["evt_toa_saja_location"],tone:"tension",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`一座巨大的砖石结构的金字形神塔从丛林中升起。两个楼梯呈对角线上升并横跨正面，一个从右侧开始，另一个从左侧开始，它们在你们头顶上方30尺高的第二层平台上相遇。这种布局在第二层和第三层重复出现，但每上一层的高度都比下面一层要矮。第四层位于丛林地面上方60尺处，是一个封闭的神殿或寺庙，其墙壁上装饰着迷宫符号。
丛林一直蔓延到这座古老建筑的边缘，甚至覆盖了它的部分结构。最初的几段台阶被藤蔓、树根和开花的藤本植物阻塞。很久以前，这里可能被城市所环绕，但丛林如此茂密，要找到埋藏的地基和倒塌的石头，需要花费数小时的搜索。

悬挂的灯具照亮了这个房间，而香炉则用异国情调的香气和缭绕的烟雾填满了它。垫子和芦苇垫覆盖着地板，开花的花盆排列在粉刷过的墙壁上，唱歌的鸟儿在植物间穿梭。
一条巨大的蛇，拥有彩虹般光泽的鳞片，躺在门口对面的一堆垫子上休息。它慢慢地升起到5尺高，当它移动时，直接凝视着你的眼睛。它的脸非常像人类，它的舌头在说话前快速地闪动。
"我是萨贾·恩巴扎。你们在这个古老之地寻找什么？说实话，因为我能听到你们的心声！"`,dmGuidance:`在角色们第一次尝试攀爬台阶后，他们注意到一个怯蕴阿灵（见附录D）站在它们中间。
如果队伍中有人精通自然技能，可以在丛林中30分钟内找到它们，否则需要60分钟。
在角色们第一次尝试攀爬后，他们注意到另一个怯蕴阿灵站在台阶底部的它们中间。
如果角色们还没有遇到阿图斯·辛贝尔和龙饵，当队伍到达时，他们可能会与守秘纳迦商议。`,offerableQuestIds:["qst_main_toa"]},{id:"scn_195",locationId:"loc_195",name:"卡斯蒂利亚港",activation:{condition:{type:"always"},priority:0},skeleton:["卡斯蒂利亚尔港（发音为kah-STEE-lee-ar）名义上是一个港口。","实际上，它不过是一个带有废弃补给站的海滩，由七个由竹子和茅草制成的破旧小屋，以及一个被亵渎的墓地组成。","不死生物很久以前就赶走了居民，食尸鬼挖开了坟墓。"],flesh:"卡斯蒂利亚尔港（发音为kah-STEE-lee-ar）名义上是一个港口。实际上，它不过是一个带有废弃补给站的海滩，由七个由竹子和茅草制成的破旧小屋，以及一个被亵渎的墓地组成。不死生物很久以前就赶走了居民，食尸鬼挖开了坟墓。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_197",locationId:"loc_197",name:"避难湾",activation:{condition:{type:"always"},priority:0},skeleton:["避风港以其相对安全的登陆点而闻名。","许多对楚尔特的探险都是从它那白色沙滩开始的，沙滩沿着海湾的整个海岸线延伸，一眼望不到边。","曾经有一个叫伊绍的楚尔坦城镇位于海湾的顶端，但在魔法瘟疫期间，它的地基沉入了海中。","城镇的建筑物仍然大体上完好无损，但它们现在位于远离陆地一英里多的地方，并且被鲨鱼、蛇颈龙和海巫巡游。"],flesh:"避风港以其相对安全的登陆点而闻名。许多对楚尔特的探险都是从它那白色沙滩开始的，沙滩沿着海湾的整个海岸线延伸，一眼望不到边。曾经有一个叫伊绍的楚尔坦城镇位于海湾的顶端，但在魔法瘟疫期间，它的地基沉入了海中。城镇的建筑物仍然大体上完好无损，但它们现在位于远离陆地一英里多的地方，并且被鲨鱼、蛇颈龙和海巫巡游。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_198",locationId:"loc_198",name:"奥伦河",activation:{condition:{type:"always"},priority:0},skeleton:["来自罗罗湖的滚烫热水在倾泻下急流和低瀑布时迅速冷却。","这条河流被向导和探险家认为是重要的分界线。",'东边是"普通"的丛林；',"西边是不死生物的领地。","仅此原因，一些探险队选择通过避难湾进入半岛。"],flesh:'来自罗罗湖的滚烫热水在倾泻下急流和低瀑布时迅速冷却。这条河流被向导和探险家认为是重要的分界线。东边是"普通"的丛林；西边是不死生物的领地。仅此原因，一些探险队选择通过避难湾进入半岛。',spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_199",locationId:"loc_199",name:"索申斯塔河",activation:{condition:{type:"always"},priority:0},skeleton:["索申斯塔河从阿尔达尼盆地向北流入楚尔特湾，每十到十五英里就有一个瀑布。"],flesh:"索申斯塔河从阿尔达尼盆地向北流入楚尔特湾，每十到十五英里就有一个瀑布。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_19a",locationId:"loc_19a",name:"塔斯河",activation:{condition:{type:"always"},priority:0},skeleton:["这条河流源自阿尔达尼盆地，向西蜿蜒流过，经过阿塔兹·卡哈克拉的峡谷和瀑布，最终流入贾哈卡湾。"],flesh:"这条河流源自阿尔达尼盆地，向西蜿蜒流过，经过阿塔兹·卡哈克拉的峡谷和瀑布，最终流入贾哈卡湾。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_19b",locationId:"loc_19b",name:"提尔基河",activation:{condition:{type:"always"},priority:0},skeleton:["提里基河从一条被雾气笼罩的峡谷后方涌出，向北流向楚尔特湾，每隔几英里就会飞泻过瀑布。","这使得乘独木舟逆流而上非常艰难——一切都必须辛苦地绕过瀑布搬运——顺流而下也很危险，以免独木舟被急流卷走，冲过瀑布或在激流中撞毁。","更糟糕的是，丛林捕食者和不死生物在两岸潜伏。","考虑到在Firefinger筑巢的翼手兽和生活在峡谷上方的格隆人，很容易理解为什么提里基河被认为是楚尔特最危险的河流。"],flesh:"提里基河从一条被雾气笼罩的峡谷后方涌出，向北流向楚尔特湾，每隔几英里就会飞泻过瀑布。这使得乘独木舟逆流而上非常艰难——一切都必须辛苦地绕过瀑布搬运——顺流而下也很危险，以免独木舟被急流卷走，冲过瀑布或在激流中撞毁。更糟糕的是，丛林捕食者和不死生物在两岸潜伏。考虑到在Firefinger筑巢的翼手兽和生活在峡谷上方的格隆人，很容易理解为什么提里基河被认为是楚尔特最危险的河流。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_19c",locationId:"loc_19c",name:"希尔库",activation:{condition:{type:"always"},priority:0},skeleton:["这个废弃的沿海村庄既被火山爆发摧毁，也被其保存。","寂静的街道被火山灰覆盖，港口被冷却的熔岩阻塞。",'由于梅兹罗现在大部分被"清理干净"，来自贝路利安堡的莉尔阿·波提尔受到她在博德之门的赞助人的压力，开始探索和挖掘希尔库，那里无疑埋藏着宝藏。',"这样的任务需要在西南海岸某处从头开始建造一个新的堡垒，而莱拉既没有人力也没有资金。","如果只是为了向她在博德之门不耐烦的上级保证正在取得进展，她可能会试图招募玩家角色进行一次航行，去侦察这样一个堡垒的可能位置。"],flesh:`这个废弃的沿海村庄既被火山爆发摧毁，也被其保存。寂静的街道被火山灰覆盖，港口被冷却的熔岩阻塞。由于梅兹罗现在大部分被"清理干净"，来自贝路利安堡的莉尔阿·波提尔受到她在博德之门的赞助人的压力，开始探索和挖掘希尔库，那里无疑埋藏着宝藏。这样的任务需要在西南海岸某处从头开始建造一个新的堡垒，而莱拉既没有人力也没有资金。如果只是为了向她在博德之门不耐烦的上级保证正在取得进展，她可能会试图招募玩家角色进行一次航行，去侦察这样一个堡垒的可能位置。

尽管没有人类居住，这座城市远非死寂。气体元素生物、火蝾螈、火蜥蜴以及其他喜热的生物在布满灰烬的小巷中潜行，并在长期被火山石封闭的地窖中挖掘隧道。`,spotlightRefs:[],presentNpcIds:["npc_liara_portyr"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_19d",locationId:"loc_19d",name:"希尔库湾",activation:{condition:{type:"always"},priority:0},skeleton:["熔岩仍然从摧毁了希尔库的火山爆发出来，并像一条发光的河流一样流入这个海湾。","硫磺水是有毒的，所以海湾的大部分海洋生物都已死亡，周围的海岸也是贫瘠的。","在西海岸的海滩上仍然可以找到安全的登陆点，但是一艘沿着希尔库附近的东海岸航行的帆船很可能会失去它的帆——甚至可能更多——因为那些偶尔从天而降的炽热石头，或者是那些在海湾里飘散数英里后才最终在恶臭、嘶嘶作响的水中熄灭的燃烧灰烬。"],flesh:"熔岩仍然从摧毁了希尔库的火山爆发出来，并像一条发光的河流一样流入这个海湾。硫磺水是有毒的，所以海湾的大部分海洋生物都已死亡，周围的海岸也是贫瘠的。在西海岸的海滩上仍然可以找到安全的登陆点，但是一艘沿着希尔库附近的东海岸航行的帆船很可能会失去它的帆——甚至可能更多——因为那些偶尔从天而降的炽热石头，或者是那些在海湾里飘散数英里后才最终在恶臭、嘶嘶作响的水中熄灭的燃烧灰烬。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_19e",locationId:"loc_19e",name:"咬合龟湾",activation:{condition:{type:"always"},priority:0},skeleton:["这个海湾的美丽无与伦比。","尽管天空被烟雾和灰烬的云层遮蔽，闪电划破天际，白色的沙滩、茂密的森林、鲜艳的珊瑚礁和多彩的野生动植物使这里成为逃离楚特恐怖的宁静避风港。","海岸并非没有危险，但即便危险也诱人且令人惊叹。","三花株、捕人草和幻色蛇是常见的植物，同样常见的还有凶猛好斗的巨型巨鳄龟，它们赋予了海湾它的名字。","独眼巨人在海岸上游荡，并在俯瞰海湾的山洞中筑巢。"],flesh:`这个海湾的美丽无与伦比。尽管天空被烟雾和灰烬的云层遮蔽，闪电划破天际，白色的沙滩、茂密的森林、鲜艳的珊瑚礁和多彩的野生动植物使这里成为逃离楚特恐怖的宁静避风港。海岸并非没有危险，但即便危险也诱人且令人惊叹。三花株、捕人草和幻色蛇是常见的植物，同样常见的还有凶猛好斗的巨型巨鳄龟，它们赋予了海湾它的名字。

独眼巨人在海岸上游荡，并在俯瞰海湾的山洞中筑巢。这些简单的生物天生并不具有敌意，但他们对新来者持怀疑和警惕的态度。任何来自陌生人的恶意表现足以使独眼巨人从谨慎变为敌对。他们是在龟裂湾生存危险的专家，这使他们成为有价值的盟友，如果角色们提供他们想要的东西。独眼巨人总是需要金属工具（短剑可以作为很好的匕首），他们对奇特的魔法小玩意感到高兴。对于慷慨的激励，独眼巨人甚至可以被雇佣作为向北进入火焰峰和小恐惧谷之间巨大丛林的探险队的搬运工、警卫或向导。

一只体型异常的巨鳄龟（见附录D）喜欢在白天在海滩上晒太阳。楚尔坦人将这个怪兽称为托巴王。来自魔法瘟疫的残余魔法使它的部分壳体结晶化。壳体的魔法赋予托巴王在对抗法术和其他魔法效果的豁免检定上获得优势。

如果这只强大的海龟被击败，可以从它的壳上敲下六十块水晶，每块可以卖10金币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_19e"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"有关这些生物的更多信息，请参见附录D。"},{id:"scn_1a1",locationId:"loc_1a1",name:"奥姆加的鼻子",activation:{condition:{type:"always"},priority:0},skeleton:["曾经的多山半岛，Omgar的鼻部在Spellplague的大动荡中被海水分割。","一条狭窄的海峡允许在大陆和现在是一个大型岛屿之间通行。","水手和制图师认为这个特征标志着楚特海岸和萨马拉奇海岸之间的边界。"],flesh:"曾经的多山半岛，Omgar的鼻部在Spellplague的大动荡中被海水分割。一条狭窄的海峡允许在大陆和现在是一个大型岛屿之间通行。水手和制图师认为这个特征标志着楚特海岸和萨马拉奇海岸之间的边界。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_1a3",locationId:"loc_1a3",name:"恐惧之谷",activation:{condition:{type:"always"},priority:0},skeleton:["从东部进入楚尔特的探险家们很可能会穿越这个通道，通道北面是风化的天蜥山脉，南面是参差不齐的桑拉奇山脉。","这个密集丛林的山谷名副其实；","它是各种恐龙的栖息地。","它还是由无情的蜥蜴王和女王统治的野蛮蜥蜴人王国的所在地。"],flesh:"从东部进入楚尔特的探险家们很可能会穿越这个通道，通道北面是风化的天蜥山脉，南面是参差不齐的桑拉奇山脉。这个密集丛林的山谷名副其实；它是各种恐龙的栖息地。它还是由无情的蜥蜴王和女王统治的野蛮蜥蜴人王国的所在地。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_1a4",locationId:"loc_1a4",name:"余烬谷",activation:{condition:{type:"always"},priority:0},skeleton:["这个烧毁的山谷围绕着罗乌湖。","湖的南部和东部沿岸的大部分植被已被火山碎屑流、熔岩河流和漂浮的灰烬所摧毁。","从火焰峰喷出的炽热余烬飘过天空，像雨一样落在一片烧焦的荒地上。","湖以北的沼泽地足够湿润得以幸存，但是灰烬在水面上的堆积已经变成了一片几乎无法通行的、深至膝盖的泥潭。","泥魔蝠和蒸汽魔在这里随处可见。"],flesh:"这个烧毁的山谷围绕着罗乌湖。湖的南部和东部沿岸的大部分植被已被火山碎屑流、熔岩河流和漂浮的灰烬所摧毁。从火焰峰喷出的炽热余烬飘过天空，像雨一样落在一片烧焦的荒地上。湖以北的沼泽地足够湿润得以幸存，但是灰烬在水面上的堆积已经变成了一片几乎无法通行的、深至膝盖的泥潭。泥魔蝠和蒸汽魔在这里随处可见。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_1a5",locationId:"loc_1a5",name:"失落荣誉谷",activation:{condition:{type:"always"},priority:0},skeleton:["拉兹·纳斯的不死军团在这个山谷中消灭了一个楚尔坦部落。","倒下的埃肖韦人的骨头已经消失了，和山谷中的其他一切一样——被从Hrakhamar西部的火山涌出的熔岩吞噬了。","火蝾螈已经占领了山中的那座古老的矮人锻造厂，它们的领土主张延伸至整个山谷。","骑在巨型步行者上的火蝾螈战士（见附录D）执行这一主张，使得山谷对入侵者非常危险。","栖息在龙心矿的年轻红龙Tzindelor是唯一一个火蝾螈勉强尊重的力量和权威的生物。"],flesh:"拉兹·纳斯的不死军团在这个山谷中消灭了一个楚尔坦部落。倒下的埃肖韦人的骨头已经消失了，和山谷中的其他一切一样——被从Hrakhamar西部的火山涌出的熔岩吞噬了。火蝾螈已经占领了山中的那座古老的矮人锻造厂，它们的领土主张延伸至整个山谷。骑在巨型步行者上的火蝾螈战士（见附录D）执行这一主张，使得山谷对入侵者非常危险。栖息在龙心矿的年轻红龙Tzindelor是唯一一个火蝾螈勉强尊重的力量和权威的生物。Tzindelor和火蝾螈目前互不干涉，但双方都觊觎对方所拥有的：Tzindelor想要占有Hrakhamar，而火蝾螈则希望控制龙心矿中的铁矿资源。",spotlightRefs:[],presentNpcIds:["npc_ras_nsi"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_1a6",locationId:"loc_1a6",name:"沃恩",activation:{condition:{type:"always"},priority:0},skeleton:["站在一些岩石和蕨类植物旁边的是一座8尺高的雕像，人形，青铜拳头，铁关节，精金胸甲，以及一个有眼睛缝隙的铁头盔。","雕像的其他部分是由雕刻的木头制成，用精金的带子和铆钉加固。","在它脚边散落着食物、羽毛、彩色石头和头骨的供品。","这座雕像实际上是一具已停用的 构装盾卫，曾经担任一位法师的保镖。","这位法师几十年前死于极端的厄运——他在一场严重的蓝雾热病发作期间从树上摔下，头部撞到一块岩石导致他 昏迷，并滚入一滩水中，最终溺水身亡。"],flesh:`这座雕像实际上是一具已停用的 构装盾卫，曾经担任一位法师的保镖。这位法师几十年前死于极端的厄运——他在一场严重的蓝雾热病发作期间从树上摔下，头部撞到一块岩石导致他 昏迷，并滚入一滩水中，最终溺水身亡。从那以后，这盾卫守护者一直冷漠地站立不动，等待着命令。一个精通 奥秘 技能的角色通过一次成功的 DC 10 智力（奥秘）检定可以认出这盾卫守护者的真实身份。

一个在区域内搜索并成功通过DC 10 感知（求生检定的人物，会发现泥土中的脚印——这些脚印是崇拜这座构装体为次级神灵的哥布林、咕噜和植物侏儒游牧部落的证据。他们修剪了可能吞噬构装体的丛林藤蔓和爬藤，并在其脚下留下供品。几英里内的区域是一个"中立区"，这些部落允许彼此进入而不会引发冲突。

任何找到盾牌守卫控制护身符的人（见"叶利亚克"）都可以激活这个构装生物并控制它。重新激活构装生物并将其移动会激怒当地的地精、格龙和植物侏儒部落。与这些生物的随机遭遇将自动充满敌意，除非角色们用财宝安抚部落，或说服他们Vorn"希望"被移到其他地方。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"站在一些岩石和蕨类植物旁边的是一座8尺高的雕像，人形，青铜拳头，铁关节，精金胸甲，以及一个有眼睛缝隙的铁头盔。雕像的其他部分是由雕刻的木头制成，用精金的带子和铆钉加固。在它脚边散落着食物、羽毛、彩色石头和头骨的供品。"},{id:"scn_1a8",locationId:"loc_1a8",name:"独角鲸号残骸",activation:{condition:{type:"always"},priority:0},skeleton:["由于某种魔法事故，一艘名为独角鲸的海船最终落在了丛林中心。","它倒扣着，船体上长满了藤壶，爬满了常春藤。","船员们消失得无影无踪，但这条旧船仍然有居民：一只隐居的虎人和一个小型的蔬菜矮人部落共享它。","由于虎人杀的比吃的多，并将剩余的食物留给蔬菜矮人，这个小社区相处得很好。","蔬菜矮人在船下阴暗潮湿的区域和货舱里茁壮成长，而虎人则更优雅地生活在通风良好、装饰精美（尽管是倒置的）的船长舱室里。"],flesh:`由于某种魔法事故，一艘名为独角鲸的海船最终落在了丛林中心。它倒扣着，船体上长满了藤壶，爬满了常春藤。船员们消失得无影无踪，但这条旧船仍然有居民：一只隐居的虎人和一个小型的蔬菜矮人部落共享它。由于虎人杀的比吃的多，并将剩余的食物留给蔬菜矮人，这个小社区相处得很好。蔬菜矮人在船下阴暗潮湿的区域和货舱里茁壮成长，而虎人则更优雅地生活在通风良好、装饰精美（尽管是倒置的）的船长舱室里。

这个植物侏儒部落由一个孢子人领主、十二个孢子人们和三个棘背兽组成（关于植物侏儒和荆棘怪的具体数值，见附录D）。这个虎人（N 男性楚尔坦人类）不再使用名字了，但多年前他被称为Bwayes O'tamu。他是瓦康嘎·欧塔姆（见"商人王子"，即"商人王子"）的表亲，两人小时候关系非常亲密。家族相似性很强；见过瓦康嘎的角色在虎人变成人类形态时会看到这种相似性。虎人会说通用语和植物侏儒语，尽管由于长期不用，他已经忘记了前者的很多内容。

如果是奇数结果，Bwayes正在狩猎，并且在角色意识到他之前自动检测到他们的存在；如果是偶数结果，Bwayes正在船骸上休息，这意味着角色很可能会先遇到植物侏儒而不是虎人。如果Bwayes检测到角色，他会出于好奇而不是嗜血而秘密跟踪他们。他想见见他们，了解他们的目的。他甚至会带他们回到船上，如果他们有的话，用宝石换酒。除非角色由Bwayes陪同，否则植物侏儒对他们是敌对的。

一条伟大龙的骨骼位于西南方向的一个洞穴中。（如果角色们礼貌地询问，布韦斯可以带领他们去针骨之地。）

奥伦河与恩西荒地之间，有一座曾经美丽的花园宫殿遗址，据说藏有无与伦比的宝藏。（Bwayes可以带领角色们前往南加洛尔，但出于尊重，他不会去探索它。）

虎人的小屋里收集了足够多的零散装备，可以制作一套制图工具和一套皮匠工具，还有一个草药工具。虎人吊床旁有个破旧的木箱，里面装着一个探险者背包、一个望远镜、一套三龙牌（虎人不知道玩法）、装有四颗杂色宝石（每颗价值100金币）的皮袋，以及两瓶治疗药水。`,spotlightRefs:[],presentNpcIds:["npc_wakanga_o_tamu"],availableInfoIds:[],encounterIds:["enc_1a8"],treasureSlotIds:["trs_1a8_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`当角色进入与独角鲸相同的六边形时，掷一个骰子。
如果角色们与虎人成为朋友并询问楚尔特其他地方的情况，他会分享以下信息：`},{id:"scn_1aa",locationId:"loc_1aa",name:"星辰女神号的残骸",activation:{condition:{type:"always"},priority:0},skeleton:["一只木制容器卡在高高的树枝上，碎成了三块。","它看起来像一艘船，但有明显的不同之处，清楚地表明它不是一艘海船。","船尾是最低的部分，靠绳索勉强悬挂在离地面大约50尺的地方。","中间部分看起来比船尾高出15尺，而船头部分则牢牢地卡在比中间部分再高10尺的树枝巢中。",'一个微弱的声音呼喊道，"喂，在地上。'],flesh:`星辰女神号是一艘来自哈鲁阿的90英尺天空船。它像飞艇一样飞行，借助一个神奇的比空气轻的气囊。一群哈鲁阿冒险者正在使用它从空中探索楚尔特时，遭到了一群翼手兽的袭击。翼手兽撕裂了气囊，飞船坠毁在丛林树冠上。如地图2.13所示，木制的吊舱断成了三截，现在摇摇欲坠地悬挂在三个不同高度的树顶上。泄了气的气球缠绕在上方的树枝中。坠毁可能发生在过去的3d10天内的任何时间。

攀爬到沉船处相对容易，这要归功于树上挂满的藤蔓和船上的绳索。从地面成功通过一个 DC 10 力量（运动）检定足以抵达船上。从一个部分移动到另一个部分需要重复同样的检定；或者，角色可以通过一个成功的 DC 10 敏捷（特技）检定从较高的部分跳到较低的部分。

呼唤队伍的声音属于Thasselandra Bravewing，船的女船长（NG女性Halruaan人类贵族）。她简要地解释了情况，然后声音变得微弱，从地面上几乎听不见。其他坠机生还者包括船的导航员Ra-das（N男性Halruaan人类斥候）；武器大师Falx Haranis（CN男性Halruaan人类老兵）；以及三名分别名为Brax、Nhar和Veliod的其他船员（N男性Halruaan人类警卫）。Ra-das和Falx在船尾部分；其他NPC都在中部。

船只携带了补给品，但当吊舱破裂时，大部分货物都洒在了地上。生还者可以用桶接雨水，但他们已经几天没有食物了。因此，所有NPC都有4级的力竭，他们没有足够的力量自己爬到地面上。

每只食尸鬼的额头上都纹有一个小的蓝色三角形——这是拉兹·纳斯的象征。这些食尸鬼从树木那里获得了3，如果情况变得太危险，它们会暂时撤离该区域。

角色们爬上残骸几分钟后，它遭到三只 四臂猿怪丧尸 的攻击（参见 附录D）。这些怪物从东边接近，由于它们具有攀爬速度，它们可以在地图上的任何地方像在船上一样轻松移动。NPC 们会反击，但由于他们的 力竭 状态，他们的反击并不十分有效。吉拉伦僵尸毫不吝啬地抓取敌人并将他们扔下船；一两个 NPC 守卫应该会因此死亡。一个坠下或被扔下船的角色可以通过成功的 DC 10 敏捷（特技）检定将坠落伤害减半，这代表他们在坠落过程中抓住了藤蔓和树枝。

星辰女神号上或其残骸中没有宝藏，但角色们可以打捞到武器、衣物以及足够组装一个探险者背包和一个牧师背包的物资。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi"],availableInfoIds:[],encounterIds:["enc_1aa"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`一只木制容器卡在高高的树枝上，碎成了三块。它看起来像一艘船，但有明显的不同之处，清楚地表明它不是一艘海船。船尾是最低的部分，靠绳索勉强悬挂在离地面大约50尺的地方。中间部分看起来比船尾高出15尺，而船头部分则牢牢地卡在比中间部分再高10尺的树枝巢中。
一个微弱的声音呼喊道，"喂，在地上。你们能帮我们吗？`,dmGuidance:"当角色们首次到达现场时，他们看到八只食尸鬼们潜伏在失事地点下方的灌木丛中。",mapGeometry:{imageRef:"adventure/ToA/045-0320.webp"}},{id:"scn_1af",locationId:"loc_1af",name:"龙心矿井",activation:{condition:{type:"always"},priority:0},skeleton:["一个盾矮人部落在四十年前一直经营着这座铁矿（地图2.14），直到它被一条名叫Tzindelor的年轻红龙征服。",'休·哈金斯顿（见"寻找向导"，即"寻找向导"）希望重新夺回并重新开放这座矿井，他很高兴地招募角色们帮助他（或者在必要时不情愿地将他们卷入）。',"Tzindelor聚集了一群狗头人跟随她，狗头人们称她为Tinder。","她偶尔会离开去狩猎，但大部分时间都在矿井底部睡觉。","狗头人们在他们共同的巢穴中布置了许多陷阱。"],flesh:`一个盾矮人部落在四十年前一直经营着这座铁矿（地图2.14），直到它被一条名叫Tzindelor的年轻红龙征服。休·哈金斯顿（见"寻找向导"，即"寻找向导"）希望重新夺回并重新开放这座矿井，他很高兴地招募角色们帮助他（或者在必要时不情愿地将他们卷入）。

Tzindelor聚集了一群狗头人跟随她，狗头人们称她为Tinder。她偶尔会离开去狩猎，但大部分时间都在矿井底部睡觉。狗头人们在他们共同的巢穴中布置了许多陷阱。矿井的许多部分仍然显示出矮人们对抗Tinder的战斗迹象，包括那些死去的人散落和烧焦的骨头。

矮人们在矿井里留下了三辆矿车，它们都处于工作状态或可修理。环绕主井的矿车轨道相当陡峭；不如楼梯那么陡，但比大多数坡道要陡。矿车的设计使得下坡端（前部）比上坡端（后部）高。这使得它们可以在倾斜的轨道上保持水平，但在平坦地面上看起来有些奇怪。每辆矿车的后部都配有一根沉重的牵引绳和马具，以便训练有素的恐龙能够拉动重载上轨道。一个坚固的、通过杠杆操作的刹车控制着它的下降。

如果使用撬棍（每个侧轨旁都藏有一根）来切换轨道，矿车可以被引导到侧通道上。

一些矿车的刹车状况比其他矿车更好。如果刹车失灵，矿车会失控地在坑道中一圈又一圈地飞驰，直到撞上轨道底部的障碍物。当矿车撞击时，车内的每个人会因矿车每垂直下降20英尺而受到1d6点钝击伤害。那些在矿车撞击前跳车的人，根据矿车在他们跳车前的下降距离，会受到一半的伤害，但每个生物还必须成功通过一次DC 10敏捷豁免检定，否则会从轨道边缘翻落，坠入坑道底部。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[85],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"当角色们到达时，轨道设置为绕过所有侧轨，直接通往底部。"},{id:"scn_1b0",locationId:"loc_1af",name:"办公室",activation:{condition:{type:"always"},priority:0},skeleton:["这座建筑的墙壁由紧密拼接的石头构成，有大窗户，以及一个宽阔的、突出的瓦屋顶。","现在它被藤蔓和攀缘植物覆盖，但结构仍然坚固。","当有人进入时，受惊的蜥蜴和鸟会从窗户逃走。","这座建筑里的内容物都已经腐烂。","账簿早已发霉变成黏液。"],flesh:`门因膨胀而紧闭，必须通过一次成功的 DC 12 力量 (运动) 检定才能强行打开，但窗户可以轻易爬过。当有人进入时，受惊的蜥蜴和鸟会从窗户逃走。

这座建筑里的内容物都已经腐烂。账簿早已发霉变成黏液。桌子和柜子上覆盖着攀缘植物、鸟粪以及小动物的骨头。任何重量放在凳子上都会导致它们倒塌。这里没有信息，也没有可用的东西。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这座建筑的墙壁由紧密拼接的石头构成，有大窗户，以及一个宽阔的、突出的瓦屋顶。现在它被藤蔓和攀缘植物覆盖，但结构仍然坚固。"},{id:"scn_1b2",locationId:"loc_1af",name:"供应棚",activation:{condition:{type:"always"},priority:0},skeleton:["这座建筑由紧密拼接的石头建成，并且有一个瓦屋顶，但没有窗户。","在树根将石头推开的地方，墙壁的部分正在崩裂。","斧头砍击的凹痕和划痕表明有人试图砍穿厚重的门，但在进展甚微后放弃了。","斧头的痕迹离地面只有几英尺（是由狗头人造成的）。","里面堆放着几十个板条箱和桶。"],flesh:`斧头的痕迹离地面只有几英尺（是由狗头人造成的）。门可以通过一个成功的 DC 10 力量（运动）检定强行打开。

里面堆放着几十个板条箱和桶。几个被它们下面生长的树根推倒了。存放的食物和水已经不能食用，但其他物资大多仍然可以使用，即使它们对冒险者来说不是特别有用。它们包括用于采矿、石工和铁工的工具、铲子、灯笼和蜡烛、矿工头盔、厚手套、备用轮子、轴和矿车制动器、油脂、粗绳、焦油、刷子、扫帚等等。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这座建筑由紧密拼接的石头建成，并且有一个瓦屋顶，但没有窗户。在树根将石头推开的地方，墙壁的部分正在崩裂。斧头砍击的凹痕和划痕表明有人试图砍穿厚重的门，但在进展甚微后放弃了。"},{id:"scn_1b4",locationId:"loc_1af",name:"3. 矿车",activation:{condition:{type:"always"},priority:0},skeleton:["一辆矿车停在矿井入口的轨道上，轮子下面垫着一个木块固定位置。","马车的金属箱体依然坚固，但一根车轴已断裂，另一根发出刺耳的摩擦声。","补给棚（区域3）内有修复所需的零件和润滑油。","旧刹车看似完好，但每次使用时都有10概率完全失灵。","使用补给棚的备用零件可修复刹车。"],flesh:"马车的金属箱体依然坚固，但一根车轴已断裂，另一根发出刺耳的摩擦声。补给棚（区域3）内有修复所需的零件和润滑油。旧刹车看似完好，但每次使用时都有10概率完全失灵。通过成功进行DC 10智力检定来检查刹车的人能发现这个隐患。使用补给棚的备用零件可修复刹车。",spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一辆矿车停在矿井入口的轨道上，轮子下面垫着一个木块固定位置。"},{id:"scn_1b6",locationId:"loc_1af",name:"4. 上层井道",activation:{condition:{type:"always"},priority:0},skeleton:["在矿井内部，洞穴通向一个巨大的、深达250尺的深坑。","矮人们在中间留下了一根坚固的石柱来支撑屋顶，并且他们建造了一条木制步道，从南到北横跨整个坑洞。","尽管许多木板已经破碎或缺失，步道基本上还是稳固的。","矿车轨道沿着坑壁以顺时针方向下降。","足够的日光透过矿井开口滤进来，为矿井底部提供微弱的照明。"],flesh:`在矿井内部，洞穴通向一个巨大的、深达250尺的深坑。矮人们在中间留下了一根坚固的石柱来支撑屋顶，并且他们建造了一条木制步道，从南到北横跨整个坑洞。尽管许多木板已经破碎或缺失，步道基本上还是稳固的。矿车轨道沿着坑壁以顺时针方向下降。足够的日光透过矿井开口滤进来，为矿井底部提供微弱的照明。

居住在矿井中的狗头人（正确地）相信这个上层区域被矮人的灵魂所困扰。狗头人避免进入矿井的上层区域，除非他们必须离开或进入。他们专门使用木桥，从不走经过区域5的矿车轨道。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_1b7",locationId:"loc_1af",name:"5. 闹鬼的锻造间",activation:{condition:{type:"always"},priority:0},skeleton:["这里是矮人的锻造场和工作室。","当Tinder攻击时，许多矿工撤退到这里，但龙焚烧了他们的路障，然后用她的呼吸将他们烧死。","从台阶底部到房间后面的整个区域都被烧焦并变黑。","有十几个或更多（很难分辨）烧焦的骷髅散落在房间里。","其中一个矮人骷髅比其他的更近（尸体已经死了三年），并且没有烧焦；"],flesh:`这里是矮人的锻造场和工作室。当Tinder攻击时，许多矿工撤退到这里，但龙焚烧了他们的路障，然后用她的呼吸将他们烧死。从台阶底部到房间后面的整个区域都被烧焦并变黑。有十几个或更多（很难分辨）烧焦的骷髅散落在房间里。其中一个矮人骷髅比其他的更近（尸体已经死了三年），并且没有烧焦；它躺在台阶底部，面朝下，头朝下的位置暗示矮人在匆忙下台阶时死亡。这是休·哈金斯通的探险队的一名成员，他成为了这个闹鬼的锻造场的受害者。

六个恶灵出没在锻造场，每个房间有三个。它们是矿井中矮人守卫的残余。第一个进入任一房间的角色将受到该房间内幽灵的攻击，而来自相邻房间的幽灵将在两轮后到达。幽灵不能离开锻造场。

大部分矮人的财物被龙火烧毁或熔化了，但有一具骷髅身上穿着一个幸存下来的秘银胸甲（秘银胸甲）。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:["enc_1b7"],treasureSlotIds:["trs_1b7_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_1b9",locationId:"loc_1af",name:"岩架",activation:{condition:{type:"always"},priority:0},skeleton:["这个平台被墙上壁台上的火把照亮，由两个狗头人发明家（见附录D）守卫。","粗糙的台阶通向区域6B。"],flesh:"这个平台被墙上壁台上的火把照亮，由两个狗头人发明家（见附录D）守卫。粗糙的台阶通向区域6B。",spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:["enc_1b9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_1ba",locationId:"loc_1af",name:"6B. 蛋孵化室",activation:{condition:{type:"always"},priority:0},skeleton:["七个小型爬行类人形生物守卫着这个房间，房间的墙壁上雕刻有壁龛。","每个壁龛内衬着苔藓，里面放着一个棕色的蛋，大小相当于一个小橙子。","七个狗头人守卫着这个房间，这里作为狗头人的蛋室。","这些狗头人怀着坚定的决心保护他们的蛋。","墙壁上的苔藓壁龛里总共有三十个蛋。"],flesh:"七个狗头人守卫着这个房间，这里作为狗头人的蛋室。这些狗头人怀着坚定的决心保护他们的蛋。墙壁上的苔藓壁龛里总共有三十个蛋。",spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:["enc_1ba"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"七个小型爬行类人形生物守卫着这个房间，房间的墙壁上雕刻有壁龛。每个壁龛内衬着苔藓，里面放着一个棕色的蛋，大小相当于一个小橙子。"},{id:"scn_1bc",locationId:"loc_1af",name:"滚动石陷阱",activation:{condition:{type:"always"},priority:0},skeleton:["一条绊线横跨在隧道口处，连接着下方的通道与矿车轨道。","如果未能发现绊线，每个经过隧道口的角色都有50的几率触发它并启动两个机关。","第一个机关是一个弹簧驱动的木质装置，形似爪子，从隧道上方的矿井壁弹出，横扫隧道口。","一回合后，第二个机关会释放一个直径5英尺的石球，石球落入洞穴（地图上标记为T）并滚向横跨隧道口的木质爪子，爪子被石球撞击摧毁——但在被摧毁前会将石球转向矿车轨道。","石球沿轨道疾驰直至抵达区域11，在那里脱轨并撞入乌尔德的居住区。"],flesh:"一条绊线横跨在隧道口处，连接着下方的通道与矿车轨道。通过一次成功的DC 13感知（察觉）检定可以发现它。如果未能发现绊线，每个经过隧道口的角色都有50的几率触发它并启动两个机关。第一个机关是一个弹簧驱动的木质装置，形似爪子，从隧道上方的矿井壁弹出，横扫隧道口。触发陷阱者必须成功通过一次DC 13敏捷豁免，否则将受到7（2d6）点钝击伤害。一回合后，第二个机关会释放一个直径5英尺的石球，石球落入洞穴（地图上标记为T）并滚向横跨隧道口的木质爪子，爪子被石球撞击摧毁——但在被摧毁前会将石球转向矿车轨道。石球沿轨道疾驰直至抵达区域11，在那里脱轨并撞入乌尔德的居住区。（乌尔德们能轻易听到它接近并躲开。）处于石球路径上的所有人都必须成功通过一次DC 13敏捷豁免，否则将受到22（4d10）点钝击伤害并被击倒倒地。豁免失败的角色可以选择跳离轨道并跌落至矿井底部以避免被石球击中；这一行为自动成功。由于轨道坡度陡峭，力量检定无法使石球减速。",spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_1bd",locationId:"loc_1af",name:"上层着陆点",activation:{condition:{type:"always"},priority:0},skeleton:["两个狗头人在一些旧板条箱附近站岗。","一个监视着矿车轨道，而另一个监视着通往南方的楼梯。","如果一个狗头人倒下，另一个会跑下楼梯去警告在区域8的同伙。","该区域北部的矿石车似乎处于可用状态，但每次使用时其刹车有10的几率会失灵。"],flesh:`两个狗头人在一些旧板条箱附近站岗。一个监视着矿车轨道，而另一个监视着通往南方的楼梯。如果一个狗头人倒下，另一个会跑下楼梯去警告在区域8的同伙。

该区域北部的矿石车似乎处于可用状态，但每次使用时其刹车有10的几率会失灵。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:["enc_1bd"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_1bf",locationId:"loc_1af",name:"8. 主要居住区",activation:{condition:{type:"always"},priority:0},skeleton:["连接此房间与矿车轨道的北侧通道设有一个布满尖刺的摆动原木陷阱。","在房间中央的一个坑里，火势微弱地燃烧着，蜥蜴、蝙蝠和食人鱼慢慢地在支撑在周围的棍子上烤着。","火光照亮了洞穴中的狗头人居住者。","在白天，这个房间内有2d6只狗头人；","到了夜晚，这个数字增加到6d6只狗头人。"],flesh:`连接此房间与矿车轨道的北侧通道设有一个布满尖刺的摆动原木陷阱。角色通过通道时有50概率触发绊线（可通过成功的DC 13感知（察觉）检定发现）。当原木摆动时，通道内的每个生物必须成功通过DC 13敏捷豁免，否则受到10（3d6）点穿刺伤害并被击倒倒地。

在白天，这个房间内有2d6只狗头人；到了夜晚，这个数字增加到6d6只狗头人。无论是白天还是夜晚，一半的居住者是非战斗人员。除非有大声的干扰吵醒了它们，否则狗头人们会相互堆叠着睡在长满小蜥蜴和其他害虫的芦苇堆上。

东侧的房间是供奉库尔图尔马克的神龛。里面有两只空桶，其中一只上面是一个由金属、玻璃、木头和石头碎片组成的3尺高的狗头人神像。食物供品堆放在基座周围。神像的任何组成部分都不值钱，但在南扎路港的任何古董收藏家那里，它值10金币。神像重15磅。除了库尔图尔马克的神像外，这里没有宝藏。狗头人发现的所有有价值的东西都交给了Tinder。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:["enc_1bf"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在房间中央的一个坑里，火势微弱地燃烧着，蜥蜴、蝙蝠和食人鱼慢慢地在支撑在周围的棍子上烤着。火光照亮了洞穴中的狗头人居住者。"},{id:"scn_1c2",locationId:"loc_1af",name:"发明家区",activation:{condition:{type:"always"},priority:0},skeleton:["旧板条箱和桶被改造成了部落的狗头人发明家的简陋睡铺，现在有两个在此（见附录D）。","另外两个在区域6A。"],flesh:"旧板条箱和桶被改造成了部落的狗头人发明家的简陋睡铺，现在有两个在此（见附录D）。另外两个在区域6A。",spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:["enc_1c2"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_1c3",locationId:"loc_1af",name:"10. 大破坏",activation:{condition:{type:"always"},priority:0},skeleton:["一块巨石危险地平衡在二轮货车轨道上方的岩架上。","一根绕在巨石上的绳索穿过中央支柱上的铁环和狗头人房间附近的另一个铁环。","如果狗头人听到矿车沿着轨道隆隆驶来，其中四个会冲出来准备猛拉这根绳索，时机把握得当就能让巨石砸中矿车。","全速行驶时（无刹车），矿车AC为16。","如果有居住者使用刹车控制速度，矿车AC为8。"],flesh:`一块巨石危险地平衡在二轮货车轨道上方的岩架上。一根绕在巨石上的绳索穿过中央支柱上的铁环和狗头人房间附近的另一个铁环。如果狗头人听到矿车沿着轨道隆隆驶来，其中四个会冲出来准备猛拉这根绳索，时机把握得当就能让巨石砸中矿车。它们对矿车进行一次攻击检定（命中加值为+4），矿车的AC取决于其速度。全速行驶时（无刹车），矿车AC为16。如果有居住者使用刹车控制速度，矿车AC为8。如果矿车居住者在看到狗头人拉绳时启动或松开刹车以改变速度，则矿车AC为12。

如果巨石击中，车上的每个生物都会受到5点（1d10）钝击伤害。掷一个d6来决定车辆及其乘客会发生什么：`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`【10. 大破坏】1–2. 矿车继续沿着轨道无阻碍地前进。
3–5. 马车脱轨冲入 区域11。车内的每个生物被抛出，倒地 倒地，并且必须成功通过一个 DC 12 敏捷豁免检定，否则受到 5（1d10）钝击伤害。
6. 马车翻出轨道，坠落到125英尺深的区域12。马车内的生物可以进行一次DC 12敏捷豁免，以在马车坠下边缘前跳出。豁免成功，生物将倒地在马车轨道上。豁免失败，生物将随马车一起坠下边缘，并如常承受坠落伤害。`},{id:"scn_1c5",locationId:"loc_1af",name:"乌尔德区",activation:{condition:{type:"always"},priority:0},skeleton:["曾经作为矮人矿工的次要工作和储藏区，这个洞穴现在被八个有翼的乌尔德（带翼狗头人）用作居住区。","这些有翼的乌尔德不与他们没有翅膀的同类交往，并且会在看到入侵者时立即发动攻击，如果他们中有一半或更多被杀，他们会逃到井道中。","这个区域下方侧线上的矿车看起来处于工作状态，但刹车手柄在第一次使用时会断裂。"],flesh:`曾经作为矮人矿工的次要工作和储藏区，这个洞穴现在被八个有翼的乌尔德（带翼狗头人）用作居住区。这些有翼的乌尔德不与他们没有翅膀的同类交往，并且会在看到入侵者时立即发动攻击，如果他们中有一半或更多被杀，他们会逃到井道中。

这个区域下方侧线上的矿车看起来处于工作状态，但刹车手柄在第一次使用时会断裂。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_1c7",locationId:"loc_1af",name:"12. 井道底部",activation:{condition:{type:"always"},priority:0},skeleton:["井道底部的地面上散落着烧焦的矮人骷髅。","一道60尺高的瀑布从北墙倾泻而出，形成了一个大约10尺深的大型水池。","你唯一能听到的就是水花冲击的声音。","一打烧焦的矮人骷髅散落在地板上。","其中八个是古老的，覆盖着钙沉积物，但有四个是较新的（它们来自三年前休·哈金斯顿不幸的探险队）。"],flesh:`一打烧焦的矮人骷髅散落在地板上。其中八个是古老的，覆盖着钙沉积物，但有四个是较新的（它们来自三年前休·哈金斯顿不幸的探险队）。狗头人剥去了他们身上所有有价值的东西。

一条地下河流从北墙35尺高的地方涌出，高于矿车道（60尺高），然后穿过高架桥，最终溅入矿井地面上的一个水池。它只是一道薄薄的水帘，但声音很大，并且产生的雾气足以使井底永远保持潮湿。水池是2d6只食人鱼的家园。附近有一张卷起的渔网。

一条高架矿车轨道进入北墙的隧道，继续向北（或多或少）延伸40英里，通往赫拉卡马尔，那里有火蝾螈出没的冶炼炉和锻造场。这条路是通畅的，轨道完整，但很可能会遭遇狗头人和其他怪物。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:["enc_1c7"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"井道底部的地面上散落着烧焦的矮人骷髅。一道60尺高的瀑布从北墙倾泻而出，形成了一个大约10尺深的大型水池。你唯一能听到的就是水花冲击的声音。"},{id:"scn_1ca",locationId:"loc_1af",name:"接见室",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴俯瞰着一个更大的洞穴。","悬挂在俯瞰区后部的木栓上的是四个看起来凶猛的木制面具和四个用鲜红色的鳞状恐龙皮制成的披风。","当狗头人需要向廷德支付贡品或需要龙的建议或批准时，他们会派遣他们谄媚、卑躬屈膝的使者到这个俯瞰龙巢的壁架。","狗头人在向他们的领主发表讲话之前，会戴上仪式性的木制面具和披风。","首先，狗头人只对巨龙说龙语。"],flesh:`当狗头人需要向廷德支付贡品或需要龙的建议或批准时，他们会派遣他们谄媚、卑躬屈膝的使者到这个俯瞰龙巢的壁架。狗头人在向他们的领主发表讲话之前，会戴上仪式性的木制面具和披风。

首先，狗头人只对巨龙说龙语。其次，他们在言语中充满了奉承和夸张的敬语，如"您那巨大的、炽热的威严"和"您那无法熄灭、无法忍受的熔炉"。第三，他们从不，永远不会质疑巨龙的宣告或判断。每当这些准则被打破时，廷德尔可以进行一次感知（察觉）检定，与角色的魅力（欺瞒）检定对抗，以识破诡计。如果有额外的角色在与巨龙的对话期间藏匿在瞭望台上，每个人都必须成功通过一次 DC 19 敏捷（隐匿）检定（如果他们完全不被 区域14 看到，则具有优势）以避免被发现。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这个洞穴俯瞰着一个更大的洞穴。悬挂在俯瞰区后部的木栓上的是四个看起来凶猛的木制面具和四个用鲜红色的鳞状恐龙皮制成的披风。",dmGuidance:"如果角色在窥视 区域14 前戴上面具和披风，并使自己看起来像狗头人大小，他们就有机会欺骗巨龙，让它相信他们是狗头人，但这很容易出错。"},{id:"scn_1cc",locationId:"loc_1af",name:"14. 廷德的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["Tzindelor，一只被称为Tinder的雌性青年红龙，大部分时间都在这里，躺在她的宝藏堆上打盹。","否则，她就出去狩猎并恐吓她的邻居。","角色们从区域12悄悄接近她的机会有所提高，这多亏了那里的大声瀑布（他们要么在隐匿检定上有优势，要么Tinder在察觉检定上处于劣势，视情况而定）。","如果狗头人触发了区域10的巨石陷阱，龙就不能被突袭，她也不能错过矿车沿着轨道滚动的声音或在复杂结构中任何地方发出的响亮咒语。","这条龙倾向于杀死任何她不认识的人，但可能会与有有趣话题的冒险家交谈。"],flesh:`Tzindelor，一只被称为Tinder的雌性青年红龙，大部分时间都在这里，躺在她的宝藏堆上打盹。否则，她就出去狩猎并恐吓她的邻居。角色们从区域12悄悄接近她的机会有所提高，这多亏了那里的大声瀑布（他们要么在隐匿检定上有优势，要么Tinder在察觉检定上处于劣势，视情况而定）。如果狗头人触发了区域10的巨石陷阱，龙就不能被突袭，她也不能错过矿车沿着轨道滚动的声音或在复杂结构中任何地方发出的响亮咒语。

这条龙倾向于杀死任何她不认识的人，但可能会与有有趣话题的冒险家交谈。由于她还年轻，她仍然有很多关于这个世界的东西要学习。如果受到奉承并提供足够的贿赂（价值至少500金币的供品），她甚至可以提供到距离Wyrmheart Mine 100英里内任何地标的基本方向。

当涉及到使用她的吐息武器时，这条龙毫不保留；她喜欢看着她的猎物在火焰中尖叫和燃烧。在绝境情况下，她有信心可以飞上矿井井道，并且比任何入侵者追赶的速度更快地逃脱。

龙的宝藏包括3300金币，15000银币，45000铜币，一个金色刺绣的剑鞘（25金币），一个由金子制成的龙形奖章和链子（50金币），一个镶有翡翠的铜质杯子（100金币），以及一瓶高等治疗药水。

靠南墙的老箱子和桶里各有1d12件矮人制作的胸甲、头盔、盾牌、战锤和战斧。其中一把矮人制作的战斧实际上是一把+1 战斧，它能在水上和其他液体上漂浮，并且赋予持有者在进行力量（运动)检定时的优势。战斧的柄上刻有德特克（矮人语）符文，拼写出武器的名字：Bob。`,spotlightRefs:[],presentNpcIds:["npc_hew_hackinstone"],availableInfoIds:[],encounterIds:["enc_1cc"],treasureSlotIds:["trs_1cc_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_1ce",locationId:"loc_1ce",name:"叶利亚克",activation:{condition:{type:"always"},priority:0},skeleton:["Yellyark（地图2.15）是Batiri地精的Biting Ant部落的家园。","这些地精戴着风格化的木制蚂蚁面具，并用敌人（类人生物和野兽）的头和骷髅标记他们领土的边界。",'在这种情况下，"领土"指的是辛德拉·席尔瓦因地图上的一个六边形区域。',"为了保护自己免受巨型食肉动物的侵害，地精们在一棵像巨大弹簧一样弯曲下来的大树上，用藤蔓将坚固而柔韧的树枝绑在一起，构建了村庄的重要建筑。","这个网被固定在一棵沉重的树上。"],flesh:`Yellyark（地图2.15）是Batiri地精的Biting Ant部落的家园。这些地精戴着风格化的木制蚂蚁面具，并用敌人（类人生物和野兽）的头和骷髅标记他们领土的边界。在这种情况下，"领土"指的是辛德拉·席尔瓦因地图上的一个六边形区域。

为了保护自己免受巨型食肉动物的侵害，地精们在一棵像巨大弹簧一样弯曲下来的大树上，用藤蔓将坚固而柔韧的树枝绑在一起，构建了村庄的重要建筑。这个网被固定在一棵沉重的树上。当有捕食者威胁要淹没村庄时，地精们会切断藤蔓，整个村庄就会卷成一个球，被抛到丛林上空一千码远！里面的小屋由层层树叶和苔藓缓冲冲击；柔性结构的损坏可以修复，村庄的大部分珍贵图腾、食物、篮子和备用武器都可以保存下来。

四十个地精居住在村庄里：女王格拉布斯塔布（一个地精头目），二十四个成年地精，和十五个非战斗儿童。有关Batiri地精及其战术的更多信息，请参见"楚尔特的种族"。

部落的生存依赖于对即将到来的危险提前预警，因此哨兵们总是被安排在村庄周围。他们穿着由藤蔓和树叶制成的斗篷，这使他们在保持完全静止时在敏捷（隐匿）检定上获得优势，但在移动时会使敏捷（隐匿）检定处于劣势。哨兵们还在村庄周围布置了绊索，上面挂满了装满小石子的贝壳和头骨。角色在接近村庄时如果搜索这些东西，可以通过一次成功的 DC 13 感知（察觉）检定发现绊索；否则，任何被动感知（察觉）得分达到13或更高的角色都会注意到它们。如果接近的敌人被哨兵发现或触发了绊索，村庄会进入警戒状态，使得潜入变得不可能。`,spotlightRefs:[],presentNpcIds:["npc_syndra_silvane","npc_grabstab"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/ToA/048-0322.webp"}},{id:"scn_1cf",locationId:"loc_1ce",name:"1. 独木舟",activation:{condition:{type:"always"},priority:0},skeleton:["三艘独木舟被拉到了溪流的岸边。"],flesh:"三艘独木舟被拉到了溪流的岸边。",spotlightRefs:[],presentNpcIds:["npc_grabstab"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_1d0",locationId:"loc_1ce",name:"食品储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["地精们在这个小屋储存新鲜肉类、鱼类和其他易腐食物。","它不会与村庄的其他部分一起被发射；","在遭受攻击的情况下，这些食物会被留下，以让食肉动物忙于进食，而地精们则趁机逃跑。"],flesh:"地精们在这个小屋储存新鲜肉类、鱼类和其他易腐食物。它不会与村庄的其他部分一起被发射；在遭受攻击的情况下，这些食物会被留下，以让食肉动物忙于进食，而地精们则趁机逃跑。",spotlightRefs:[],presentNpcIds:["npc_grabstab"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_1d1",locationId:"loc_1ce",name:"3. 格拉布斯塔布女王的小屋",activation:{condition:{type:"always"},priority:0},skeleton:["女王的小屋并不比其他的小屋大，但总有两只地精在外面守卫。","女王格拉布斯塔布（一个地精头目）和另外四个地精（她的成年子女和随从）在里面，为了只与他们有关的事情相互争吵。","女王的一个随从骄傲地在它的脖子上挂着一根绳子，上面挂着木笼（区域4）的钥匙。",'女王佩戴着一枚刻有"沃恩"字样的青铜和精金徽章。','这是控制盾牌守卫者的护身符（见"沃恩"）。'],flesh:`女王的小屋并不比其他的小屋大，但总有两只地精在外面守卫。女王格拉布斯塔布（一个地精头目）和另外四个地精（她的成年子女和随从）在里面，为了只与他们有关的事情相互争吵。女王的一个随从骄傲地在它的脖子上挂着一根绳子，上面挂着木笼（区域4）的钥匙。

女王佩戴着一枚刻有"沃恩"字样的青铜和精金徽章。这是控制盾牌守卫者的护身符（见"沃恩"）。所有地精都不知道这枚护身符与他们所崇拜的小神有关。`,spotlightRefs:[],presentNpcIds:["npc_grabstab"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_1d3",locationId:"loc_1ce",name:"木笼",activation:{condition:{type:"always"},priority:0},skeleton:["这个用竹子捆扎而成的笼子可以根据情况关押动物或囚犯。","由于巴提里部落对金币毫无兴趣，囚犯很少被用来勒索赎金。","通常，他们会被关在这里，直到地精们准备吃掉他们。","区域3中的一名地精携带着笼子粗糙挂锁的钥匙。"],flesh:"这个用竹子捆扎而成的笼子可以根据情况关押动物或囚犯。由于巴提里部落对金币毫无兴趣，囚犯很少被用来勒索赎金。通常，他们会被关在这里，直到地精们准备吃掉他们。区域3中的一名地精携带着笼子粗糙挂锁的钥匙。拥有盗贼工具的角色可以通过一次成功的DC 11敏捷检定来撬开锁。",spotlightRefs:[],presentNpcIds:["npc_grabstab"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"如果角色试图从笼子内部开锁，则该检定具有劣势。"},{id:"scn_1d4",locationId:"loc_1ce",name:"5. 蚁丘",activation:{condition:{type:"always"},priority:0},skeleton:["这个特别的Batiri部落擅长饲养蚂蚁，村庄位于三座底部宽10尺、高8尺的蚁丘之间。","这三座蚁丘通过隧道相连。","破坏或摧毁蚁丘会导致六个蚁群（昆虫集群）从地下巢穴中爆发出来。","每个蚁丘涌出两个蚁群。","蚂蚁会忽略巴蒂里地精，转而追逐它们在附近感知到的任何其他东西。"],flesh:`这个特别的Batiri部落擅长饲养蚂蚁，村庄位于三座底部宽10尺、高8尺的蚁丘之间。这三座蚁丘通过隧道相连。

破坏或摧毁蚁丘会导致六个蚁群（昆虫集群）从地下巢穴中爆发出来。每个蚁丘涌出两个蚁群。蚂蚁会忽略巴蒂里地精，转而追逐它们在附近感知到的任何其他东西。`,spotlightRefs:[],presentNpcIds:["npc_grabstab"],availableInfoIds:[],encounterIds:["enc_1d4"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_1d5",locationId:"loc_1ce",name:"发射机制",activation:{condition:{type:"always"},priority:0},skeleton:["将那村庄发射出去的弯曲大树在此处固定。","整个机制被很好地伪装，以防止入侵者潜入并发射村庄作为突袭。","那些拥有求生技能熟练度的角色在此检定中具有优势。","哥布林们不会自己使用这种装置；"],flesh:`将那村庄发射出去的弯曲大树在此处固定。发射由切断粗壮的藤蔓触发，该藤蔓具有AC 15、15点生命值，对劈砍伤害易受，对火焰和穿刺伤害有抗性，且对钝击、毒素、心灵和雷电伤害免疫。整个机制被很好地伪装，以防止入侵者潜入并发射村庄作为突袭。在白天仔细观察村庄并成功通过DC 18感知（察觉）检定的角色会发现藤蔓网络和弯曲的大树，并认出它们是一个巨大的弹簧陷阱。那些拥有求生技能熟练度的角色在此检定中具有优势。

哥布林们不会自己使用这种装置；它太致命了。当村子被发射并撞击地面时，任何在网内的人必须进行一次 DC 15 敏捷豁免检定，检定失败将受到 28 (8d6) 点钝击伤害，检定成功则仅受到一半的伤害。`,spotlightRefs:[],presentNpcIds:["npc_grabstab"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_1d6",locationId:"loc_1d6",name:"禁城居民",activation:{condition:{type:"always"},priority:0},skeleton:["奥穆位于雨林深处的一个盆地中，四周被陡峭的悬崖所环绕。","这座城市出了名的难以找到。","那些试图寻找的人必须面对数英里的无迹可寻的丛林，那里居住着天然捕食者、食人族和拉兹·纳斯不死军团的残余。","即使是熟练的向导也很难穿越。","要想进入九神之墓，冒险者们必须小心行事，与这座废墟城市的居住者斗争，并尽可能多地了解奥穆的九位诡计之神以及他们古老的敌对关系。"],flesh:`奥穆位于雨林深处的一个盆地中，四周被陡峭的悬崖所环绕。这座城市出了名的难以找到。那些试图寻找的人必须面对数英里的无迹可寻的丛林，那里居住着天然捕食者、食人族和拉兹·纳斯不死军团的残余。即使是熟练的向导也很难穿越。

要想进入九神之墓，冒险者们必须小心行事，与这座废墟城市的居住者斗争，并尽可能多地了解奥穆的九位诡计之神以及他们古老的敌对关系。

在未经训练的眼睛看来，奥穆似乎已被废弃，然而它的高架街道和破碎的广场远非无人居住。

有两条主要的路线通向奥穆。向东北方向，一条河流从火焰峰的山麓蜿蜒而下，通过一个峡谷涌入城市（见区域17）。第二个入口点是西南方向的楼梯（见区域1）。

环绕奥穆的悬崖高100至150尺，由破碎的岩石构成。茂密的丛林紧挨着悬崖顶端，蕨类植物、兰花和苔藓从边缘溢出。大约每隔100尺，就有一只石像鬼（石像鬼）栖息在悬崖的边缘。当一个角色仔细观察这些生物时，请阅读：

石像鬼会攻击任何飞越城市或试图爬上爬下悬崖的人，但它们会忽略通过河流或西南方向的峡谷进入的入侵者。它们为阿瑟瑞克服务，并接受他的不死生物墓穴管理员威瑟斯的命令（见第五章）。

奥穆的悲惨历史镌刻在它的废墟之中。

奥穆曾经是楚尔特王冠上的一颗宝石。这座城市建立在丰富的矿脉之上，因此积累了大量的财富。奥穆的珠宝在世界各地都备受追捧，城市的商人因贸易而变得富有。据说，进入奥穆就如同进入了天堂之门。这样的财富带来了贪婪。奥穆对奴隶的渴望使她的统治者向邻居索要越来越多的贡品。当他们的附庸无法用肉体支付时，他们用鲜血支付。奥穆令人畏惧的军团跨越了整个楚尔特。

奥穆人的贪婪和傲慢激怒了神乌博塔奥，导致他在两百年前就抛弃了奥穆——这比他放弃整个楚尔特地区还要早得多。奥穆的牧师们失去了他们的法术，城市陷入了疾病和疫情之中。奴隶起义使奥穆遭受重创，它的贵族们纷纷逃离。显示奥穆位置的地图被销毁，它的硬币被熔化并重新铸造。失去恩典的奥穆成为了众所周知的禁忌之城。

随着乌博塔奥的离去，原始的精灵从雨林中出现，对剩下的奥穆人施加了魔法。他们伪装成丛林生物，并承诺以虔诚换取巨大力量。奥穆人渴望救赎，于是他们拆毁了供奉乌博塔奥的神殿，并为这九位诡计之神建立了神龛。

新的神祇具有分裂性，常常残忍。由于力量太弱，无法为每个信徒赐予神迹，他们精心设计了复杂的试炼来筛选神职人员。在圣日，有志成为祭司的人在他们的九个神龛中接受考验，失败则有致命后果。这些试炼为堕落的奥曼人提供了娱乐，并为他们软弱的神祇提供了急需的牺牲。

九十年来，城市居民遵循着他们恶作剧神的信条生活。他们以这些神的名义建造雕像，并相互策划以确立他们所选神的统治地位。奥穆的辉煌过去已不复存在，但它的人民坚持了下来。这样的仁慈并没有持续太久。

奥穆血腥的试炼吸引了阿瑟瑞克的注意，他是一位在宇宙中漫游寻找灵魂收割的巫妖。喜欢死亡陷阱的阿瑟瑞克对奥穆人设计的试炼感到惊奇。这些试炼激发了他在城市下方建造自己的地下城的灵感。

一百多年前，阿瑟瑞克进入了奥穆并杀死了所有九位诡计之神。然后他奴役了奥穆人，并强迫他们为他们被击败的神雕刻一个坟墓。当坟墓完成后，阿瑟瑞克杀害了奥穆人并将他们与他们的假神一起封在坟墓里。巫妖继续他在各个位面的奥德赛之旅，心满意足地认为地下城会用死去冒险者的灵魂滋养他的魂器。丛林重新夺回了奥穆，它陷入了废墟。

五十年前，一群来自希萨里的蛇人（见第二章）悄悄进入奥穆，并将其作为他们的新家园。他们在旧宫殿下建造了一座地下神庙，并耐心地等待他们的神，夜之蛇丹达尔，出现并吞噬世界。地震摇撼了奥穆，使其像无花果一样裂开，导致河水泛滥。偶然的机会使蛇人神庙免于毁灭，但仍有许多蛇人死亡，包括他们的领袖（一位蛇人怪物）。

邪恶的军阀拉兹·纳斯曾组建一支不死军团，企图征战圣城梅兹罗，却遭受了可怕的失败。在蛇人之后不久，他抵达了奥穆。拉兹·纳斯巧妙地赢得了蛇人的好感，并经历了一个仪式，将自己转变为一个咒怨者。不久后，他成为了他们的统治者。如今，在奥穆破裂和破碎的街道下方，拉兹·纳斯掌握着权力，并密谋将夜之蛇丹达尔带入世界，封印其命运。

关于奥穆的九位诡计之神的故事随着崇拜他们的奥穆人的死亡而消失。

很久以前，神乌博塔奥坚定了他的心，发誓不再为奥穆的人民流泪。雨水停止了，丛林枯萎死去，死亡席卷了奥穆。

一天早晨，一位智者佐博从她的空心树中走出，向垂死的奥穆人讲话。为了向乌博塔奥证明他们的价值，她决定为他煮一锅用他们所有优秀品质制成的炖菜。捕捉这些美德并不容易，所以她请求一位狡猾的独角兔帮助她。独角兔偷偷地将鲁莽放入锅中，她认为这是一种美德，而乌博塔奥尝到后吐出了炖菜。从那天起，佐博的奥博娜卡和独角兔的艾金成为了可怕的敌人。

在正午时分，一只勇敢的六岐蛇豹从她的岩石上跳了下来。她看到了奥穆人心中的邪恶，并决定像处理一个麻烦的疖子一样将其清除。六岐蛇豹制造了一支圣矛，但她把它留在了河边，一个狡猾的格朗偷走了它。在她的愤怒中，六岐蛇豹的莎根比忘记了所有关于奥穆人的事，永远地追逐着偷矛的格朗娜浪横穿天空。

当傍晚来临时，一个狡猾的魔王鹤从他的芦苇屋中走了出来。他不喜欢奥穆人，但是没有他们，他就没有人可以捉弄了。魔王鹤派了一只沼泽青蛙去说服乌博塔奥，但青蛙很生气，决定与神摔跤。这让乌博塔奥感到有趣，于是他给了青蛙触手让它变得更强大。当青蛙魔库巴赞返回到魔王鹤帕帕扎图时，他用他的新触手将帕帕扎图追进了沼泽。

那天夜里，一只苏怪闯入了乌博塔奥的宫殿，为奥穆人偷了一桶水。当神跑来寻找时，苏怪把水桶藏在了投石机的洞穴里。乌博塔奥询问丛林中的动物他的水藏在哪里，而投石机莫亚太诚实了，无法撒谎。当苏怪望戈发现莫亚如何出卖了他时，他发誓要抓住投石机并吃掉他。

与此同时，安珂这只链鞭蜗牛深居地下。其他动物战斗的噪音让她滑行到地面，当黎明的曙光照在她的壳上时，光线晃瞎了乌博塔奥的眼睛，使他的眼睛涌出了泪水。生命回到了奥穆，人们建造了神龛来纪念拯救了他们的动物。

几个派系居住在奥穆内部，包括蛇人、格朗人、植物侏儒和狗头人。探险家们也来到这里寻找黄金和荣耀。目前，这些包括红袍法师和三名斑猫猎人。每组人都可以根据您的需要在故事中扮演同样重要的角色。他们可以作为敌人，或者作为因共同利益而联合起来的盟友。

蛇人在奥穆王宫废墟下方的庞大地下神庙中向夜之蛇丹达尔献祭（见区域20）；神庙在第四章中有描述。蛇人守卫着城市的入口，巡逻其街道，并向周围的丛林派出突击队。拉兹·纳斯统治着他们，但背叛的祭司们正在策划他的覆灭。

第1章中介绍的向导之一是萨莉达，一个忠于拉兹·纳斯的纯血蛇人。如果萨莉达护送角色们进入城市，她会秘密地使用她的短讯石联系拉兹·纳斯，以便他可以准备伏击。当夜幕降临时，萨莉达使用一盏灯笼作为信号，发起蛇人的攻击。攻击力量由每名队伍成员对应一个3型的恶咒蛇人和两个纯血原体蛇人组成。拉兹·纳斯渴望捕获角色们，以便他可以询问他们有关他们任务的信息。

一群小型的格朗族居住在娜浪神龛（区域18）周围的屋顶上。拉兹·纳斯定期对他们发动袭击以减少他们的人数。

格朗族崇拜娜浪，并将她的神龛视为他们酋长及其精英守卫的圣地。疯狂的格朗族酋长约伯渴望对拉兹·纳斯进行复仇，但还没有找到一个值得的攻击计划。

多年前，一颗陨石从天而降，形成了城市的巨大裂缝。星尘落在废墟上，形成了一片片赤褐色的霉菌，从中诞生了植物侏儒。他们的部落在被洪水淹没的小巷中徘徊。元提人已经学会避开这些地区，并且一见到"霉菌"就将其杀死。

奥穆包含几个小的植皮矮人部落。他们在领土上发生冲突，只有在对大裂谷的崇敬上才统一。即使植皮矮人能与角色们交流，他们也不太愿意与他们合作。他们的首领并不聪明，角色们可以诱骗植皮矮人联合起来对抗一个共同的敌人。

九个致命的神庙守护着进入九神之墓的秘密。为了维护神庙的陷阱，阿瑟瑞克招募了一个狗头人部落作为神庙的修理者。这些生物居住在一个被毁坏的市场下面的地窖里(区域15)。阿瑟瑞克承诺如果狗头人履行他们的协议，就会将他们的巫师Kakarol变成一条龙。Kakarol太不耐烦等待他的升华，开始睡在一小堆宝藏上，并坚持让他的下属称他为伟大的龙。

阿瑟瑞克 没有告诉狗头人他与 拉兹·纳斯 的联盟。就他们而言，元提人几乎不知道狗头人的存在。

一群红袍法师在角色到来前几天进入了城市。他们在区域2的废墟区域扎营，但在夜间突袭中，拉兹·纳斯的部队几乎将他们全部消灭。幸存者继续在废墟中寻找Soulmonger。

生还者包括四名红袍法师（LE男性和女性泰雅人魔法师们）分别名为Dyrax（男性）、Thazma（女性）、Yamoch（男性）和Zagmira（女性）。他们穿着红袍，剃光头，面色苍白，这些都表明他们忠于泰雅。八名雇佣兵（LE男性和女性人类暴徒，各种族裔）护送这些法师。级别最高的法师Zagmira看起来只有十八岁，然而她一半的脸却是衰老的。这种效果是她为了占据自己孙女的身体而进行的一个可怕仪式的后遗症。这四名法师都携带着包含他们所有准备法术的法术书。

扎格米拉见过九神之墓的入口（区域14）并相信魂吸器被保存在其中。红袍法师们已经分开去寻找解锁墓室所需的谜题立方体（见"谜题魔方"）。

一个叫Orvex的男子（见区域2）为红袍法师们担任抄写员和翻译，但他对他们的忠诚是不稳定的。冒险者们可以很容易地与他成为朋友。

在他们生命的暮年，受人尊敬的斑猫人有时会离开他们的家庭，冒险进入丛林去寻求猎人的死亡。一位被称为猫领主的神祇引领最勇敢的人到奥穆，在那里他们度过最后的日子，狩猎恐龙和其他丛林野兽。

他们的名字是Hooded Lantern（男性）、钉包（男性）和Copper Bell（女性）。这些猎人对城市非常熟悉，但对它的历史不感兴趣，并且远离它的神殿。他们独自狩猎，避免与探险者接触。稀有武器和狩猎装备是角色们唯一可以提供以获得他们帮助的物品。

罩灯有灰黑色的毛发，左眼因白内障而变得浑浊。他正在为与被称为翎羽之王的巨型霸王龙进行一场光荣的战斗而准备（见区域13）。铜铃有斑点状的姜黄色毛发，并在她瘦骨嶙峋的肩膀上披着一块破烂的蓝布——这是她用来安抚幼崽的毯子。她保留了大部分的求知欲和讽刺的幽默感。钉包已经疯了，描述见区域7。

要解锁九神之墓，角色们必须首先从遍布城市各处的神龛中恢复九个谜题方块。红袍法师已经在寻找这些方块，而 拉兹·纳斯 正在尽他所能阻止红袍法师或角色们获得全部方块。

一个谜题立方体是一个边长3英寸的石制立方体，上面刻有特定恶作剧之神的图像。每个立方体重半磅。使用en=Detect Magic法术或类似的效果可以揭示每个立方体周围的防护魔法光环。

这些谜题方块无法以任何方式被摧毁。如果它们被丢弃、掩埋或被带离欧穆超过一英里，它们会传送回各自神殿内的原处。

一些线索可以引导玩家前往圣地，包括在营地发现的遗失日记（区域9）。角色也可以自己发现圣地，或者从奥尔威克斯·欧夸玛斯（区域2）那里了解它们。

角色们无需探索全部九个圣地。红袍法师至少找到了两个谜题立方体，而拉兹·纳斯总是会介入来索取最后一个立方体。

只要红袍法师仍在活动，每天就有累计25的几率他们会从随机神殿中夺取另一个谜题方块。

一旦有五个谜题立方体从它们的圣地被取走，拉兹·纳斯开始设置伏击。他们的命令是捕获角色并将他们带到夜蛇神殿进行审讯。

一旦八个谜题立方体被认领，拉兹·纳斯就会为自己偷走第九个立方体，并留下一条明显的踪迹，引导追踪者前往他的地下神庙的主入口（见区域20A）。角色们必须潜入神庙，要么通过武力夺取谜题立方体，要么说服拉兹·纳斯放弃它。有关神庙及其居民的更多信息，请参见第四章。

角色们可以与红袍法师结成联盟，以取回被yuan-ti拿走的谜题立方体。如果达成协议，Zagmira透露她在yuan-ti神庙里有一个间谍：一个名为Ishmakahl（发音为ISH-mah-kawl）的yuan-ti纯血。Zagmira没有透露这个间谍是一个变形怪。

Zagmira鼓励人类角色伪装成纯血潜入yuan-ti神庙，非人类角色则假扮成他们的奴隶。如果没有人类角色在场，Zagmira愿意消耗一个5环法术位来施放en=Invisibility法术，使多达四名队伍成员隐形。如果阿图斯·辛贝尔与队伍在一起，红袍法师也会试图从他那里夺取凛冬戒指。

如果红袍法师获得了全部九个谜题立方体，他们会使用它们进入九神之墓，并且一个接一个地落入墓中的险恶陷阱。

城市盆地里密密麻麻地布满了破败的别墅和杂草丛生的庭院。奥穆的建筑物是由石灰石建造的。厚实的阔叶藤蔓吞噬了大部分建筑，而蕨类植物和带刺的灌木则阻塞了街道。代表恶作剧之神的雕像在许多路口阴险地凝视着。

谨慎的角色可以在城市中以每5分钟200尺的速度移动。即使他们不顾一切地小心，杂草丛生的密度使得移动速度很难超过每分钟200尺。每当队伍搜索一栋废墟建筑时，掷百分率骰子并参考废墟内部表，看看建筑里有什么，如果有的话。

这座废墟被藤蔓覆盖，其中潜伏着1d3株刺客藤蔓（见附录D）。

若失败，地板坍塌，角色坠落 20 英尺到达下层，正常承受坠落伤害。再次在废墟内部表中投掷，看看下层是否有任何有趣的东西。

废墟内弥漫着一层稀薄、无味的蓝色雾气。进入建筑的角色会暴露在蓝色雾气热病中（见"疾病"）。再次在废墟内部表上掷骰，看看建筑内是否还有其他东西。

建筑物内已经有虫害筑巢。掷一个 d6 并参考巢穴居住者表来确定巢穴的居民。任何被巨型黄蜂伤害的角色必须在遭遇结束时成功通过一个 DC 11 体质豁免检定，否则会感染颤抖病（参见 "疾病"）。

这座废墟包含一种或多种稀有植物，可以通过掷一个d6并参考植物发现表来确定。这些植物在附录C中有描述。

这座废墟包含1d6个奥马艺术品（玉戒指、彩绘陶器、镶嵌银的木制恶作剧神小雕像、水晶花瓶等）。每件艺术品价值25金币。

隐藏在废墟中的是1d4个孢子人们（见附录D）。它们并不处于战斗状态，对入侵者感到害怕。如果被攻击，它们会通过墙壁的裂缝逃走，并试图隐藏在周围的沼泽中。

冒险者在探索奥穆时可能会遇到一个或多个随机遭遇。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_acererak","npc_withers","npc_salida","npc_yorb","npc_bag_of_nails","npc_king_of_feathers","npc_orvex_ocrammas","npc_artus_cimber"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`丛林分开，露出一个被陡峭悬崖环绕的死城。废墟建筑和石头大道像雾蒙蒙的盆地中出现的幽灵一样升起。五彩缤纷的鸟儿在头顶滑翔。
一道瀑布倾泻进盆地，形成了一条汹涌的河流，它淹没了城市的大部分，然后流入一个充满熔岩的深裂缝中。一座破败的宫殿坐落在冒着蒸汽的深渊边缘几百尺远的地方。

一个被藤蔓覆盖的石像鬼栖息在悬崖顶端，俯视着这座毁灭的城市。它有着恶魔的面孔，嘴巴张开，无声地尖叫。`,dmGuidance:`如果角色们到达一个可以完整看到整个城市的地方，无论是从上方飞行还是从悬崖边俯瞰，给玩家们一份附录E中的手稿12副本（见附录 E）。
当角色们第一次看到奥穆时，请阅读：
当角色们探索时，使用这里提供的信息让这座城市栩栩如生。
当角色们探索这些神的神龛时，玩家们拼凑起以下传说的片段，这些片段提供了如何进入九神之墓的线索。
如果角色们与狗头人达成协议，巫师的贪婪很容易被操纵。
当角色们到达时，三位年长的斑猫猎人（见附录D）在城市中潜行。
【老奥姆安】欧姆古人使用古欧姆古文书写，这是一种与任何其他字母表都几乎没有相似之处的楔形文字。具有隐士学者或贤者背景的角色可以通过成功的 DC 10 智力（历史）检定翻译用古欧姆古文写成的铭文，而拥有符文守护者之眼（Eyes of the Rune Keeper）呼召的魔契师则无需检定即可翻译古欧姆古文。如果角色从 区域11 的奇温加车（怯蕴阿灵 cart）中找到了"女王的法令"，他们可以使用它来解码用古欧姆古文写成的铭文。如果没有女王的法令或具有适当背景的角色，角色只能通过使用 en=Comprehend Languages 法术或类似的魔法来翻译古欧姆古文。
如果角色们返回之前清理过的神殿，每天有累计20的概率狗头人会重置其中的陷阱。
如果玩家找到一种方法破坏敌人的计划——例如，通过杀死他们——事情会有不同的发展。
在角色们获得第一个谜题方块的当天，红袍法师们会清理城市内的另一座神殿。
如果玩家们抵达一座已被清理的神殿，他们会发现一片狼藉的场景：陷阱触发、怪物被杀、方块失踪。
当角色们到达下一个圣地时，三个1型恶咒蛇人和六个纯血原体蛇人伏击他们。
如果角色们取回了被拉兹·纳斯拿走的谜题立方体，红袍法师会在角色们从yuan-ti神庙出来后转而对抗他们，并试图为自己夺取所有的谜题立方体。
如果角色停下来寻找宝藏，每栋建筑需要30分钟来清理。
当角色探索这座建筑时，随机选择一个角色进行 DC 12 敏捷豁免检定。
有关城市中随机遭遇的更多信息，请参见附录 B。`,randomTableIds:["tbl_1d6_0","tbl_1d6_1","tbl_1d6_2"],mapGeometry:{imageRef:"adventure/ToA/051-301.webp"}},{id:"scn_52f",locationId:"loc_52f",name:"奥姆",activation:{condition:{type:"always"},priority:0},skeleton:["除非角色们清除了夜蛇神殿，否则奥穆仍然处于元提族的控制之下。","如果拉兹·纳斯仍然活着，一旦死亡诅咒结束，他对角色们就再也没有用处了。","他认为角色们知道得太多，对他们自己没有好处，于是派遣一队元提族去捕捉或杀死他们，阻止他们离开城市。","如果芬萨札还活着，拉兹·纳斯犯了一个错误，让她负责带领团队去杀死角色们，而她反而向队伍提出了一个交易。","如果他们从神殿中虚弱地出现，她会尝试摧毁他们。"],flesh:`除非角色们清除了夜蛇神殿，否则奥穆仍然处于元提族的控制之下。如果拉兹·纳斯仍然活着，一旦死亡诅咒结束，他对角色们就再也没有用处了。他认为角色们知道得太多，对他们自己没有好处，于是派遣一队元提族去捕捉或杀死他们，阻止他们离开城市。

如果芬萨札还活着，拉兹·纳斯犯了一个错误，让她负责带领团队去杀死角色们，而她反而向队伍提出了一个交易。如果他们从神殿中虚弱地出现，她会尝试摧毁他们。

公主姆瓦克丝娜瑞希望恢复Omu的昔日辉煌，并在那里建立一个新的王国。拥有Ch'gakare的骷髅杯，她可以赢得渴望回归旧日方式的Chultans的支持。然而，南扎路港的商人王子们并不愿意支持她的主张，元提族也不会不战而放弃Omu。姆瓦克丝娜瑞的梦想可能需要多年才能实现，如果真能实现的话。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_fenthaza"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[190],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`如果队伍获得了黑蛋白石皇冠，他们可以用这件物品来换取他们的生命。
如果角色们同意杀死拉兹·纳斯，他们可以自由离开，并保留他们从神殿中拿走的任何宝藏，除了黑蛋白石王冠，芬萨札坚持要求立即交给她。
如果角色们轻易击败了拉兹·纳斯，芬萨札会履行她的交易承诺。`},{id:"scn_1fa",locationId:"loc_1fa",name:"城市中的地点",activation:{condition:{type:"always"},priority:0},skeleton:["以下描述对应于标记在地图3.1和3.2上的区域。"],flesh:"以下描述对应于标记在地图3.1和3.2上的区域。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_1fb",locationId:"loc_1fa",name:"1. 城市入口",activation:{condition:{type:"always"},priority:0},skeleton:["一座警卫室位于城市入口附近。","石灰石墙上刻有箭缝，一个歪斜的铁制吊闸悬挂在门道上方，透过门道你可以看到一座开阔的广场。","大部分内部已经坍塌成瓦砾。","攀缘植物附着在墙上，高草在石板间生长，周围有早已熄灭的篝火痕迹。","一面墙上覆盖着涂鸦——有些字是画上去的，有些则是刻上去的。"],flesh:`这些涂鸦（用通用语写成）提供了关于即将面临的挑战的提示：

五个恶咒蛇人从一个雕刻在悬崖上的小型洞穴中监视着这座城市的入口。一条狭窄的山羊小径蜿蜒而上，通向他们的藏身之处。

这个小组由两个1型malisons、两个2型malisons和一个3型malison组成。他们跟随角色进入奥穆，并在街道上跟踪他们。他们的目标是伏击角色并至少捕获其中一个。如果他们保持隐蔽，yuan-ti将在角色尝试在城市中进行第一次长休或短休时发动攻击。

3型malison的长弓被漆成并雕刻成蛇形，用细小的琥珀色宝石作为眼睛。作为艺术品，这件武器价值250金币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_toa_puzzle_cubes"],encounterIds:["enc_1fb"],treasureSlotIds:["trs_1fb_0"],eventIds:["evt_toa_learn_cubes"],tone:"tension",_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一座警卫室位于城市入口附近。石灰石墙上刻有箭缝，一个歪斜的铁制吊闸悬挂在门道上方，透过门道你可以看到一座开阔的广场。

大部分内部已经坍塌成瓦砾。攀缘植物附着在墙上，高草在石板间生长，周围有早已熄灭的篝火痕迹。一面墙上覆盖着涂鸦——有些字是画上去的，有些则是刻上去的。`,dmGuidance:`如果角色进入警卫室，读：
【1. 城市入口】"畏惧拉兹·纳斯的毒牙！"
"Erik，我已经去寻找九个圣地了。V。"
"谜题立方体是关键。"
"小心青蛙怪物！"
"安珂是谁？"
"全体致敬翎羽之王！"
"这些蛇并非它们看起来那样。"
"库巴赞 = 勇敢。莎根比 = 感知。莫阿 = ？"`,offerableQuestIds:["qst_main_toa"]},{id:"scn_201",locationId:"loc_201",name:"围墙大院",activation:{condition:{type:"always"},priority:0},skeleton:["烟雾从有围墙的院子中懒散地飘出。","大门破碎不堪，建筑物上布满了烧焦的痕迹。","在院子中心的广场上，散落着烧焦的人类尸体。","其中一具尸体正被一群野狗撕扯。","红袍法师占领了这个院子作为他们在奥穆的行动基地，但是yuan-ti发动了攻击，几乎将他们全歼。"],flesh:`红袍法师占领了这个院子作为他们在奥穆的行动基地，但是yuan-ti发动了攻击，几乎将他们全歼。院子中散落着三十具尸体——三名红袍法师、二十名人类雇佣兵和七名在南扎路港雇佣的搬运工的遗体。yuan-ti掠夺了他们发现的所有物资，并偷走了敌人的武器。六只野狗（使用胡狼的具体数值）正在啃食一名红袍法师的尸体。

元提人焚烧了他们的亡者同胞，并将他们的骨头排列成一根灵柱。探索这个院落的角色们发现了这个雕像：

通过一个成功的 DC 15 智力（宗教）检定，角色可以识别出墙上的符号是吞噬世界的夜蛇恩达尔之标记。

在袭击中，一次爆炸将红袍法师探险队的一名成员埋在了倒塌的墙下。奥尔威克斯因缺水而濒临死亡，并且处于力竭状态。

奥弗克斯作为红袍法师的抄写员和翻译。他是一个实际的、秃顶的四十多岁人类，之所以为红袍法师服务，正如他所说，是因为红袍法师支付的报酬丰厚。奥尔威克斯具有间谍的具体数值，并有以下变化：

奥弗克斯是中立的。

他还剩3点生命值，并处于3层力竭状态。

他讲通用语和格朗格语。

奥弗克斯能够翻译古奥穆安语，他对奥穆的雕刻的研究教会了他关于九位骗子神的传说（见"九神传说"），一旦他完全康复和休息，奥弗克斯很乐意复述这个故事。

尽管存在明显的风险，奥弗克斯仍然期待着更深入地探索这座城市并揭开它的秘密。如果他在角色们收集到全部九个谜题立方体时仍然与他们在一起，他会迫不及待地抓住机会陪同他们一起进入九神之墓。`,spotlightRefs:[],presentNpcIds:["npc_orvex_ocrammas"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`烟雾从有围墙的院子中懒散地飘出。大门破碎不堪，建筑物上布满了烧焦的痕迹。在院子中心的广场上，散落着烧焦的人类尸体。其中一具尸体正被一群野狗撕扯。

一把镰戟被插在烧毁的火葬堆的残骸中。烧焦的蛇头和变黑的非人脊椎被绑在矛上。在附近的墙上，一个符号用灰烬涂抹而成：一条蛇盘成螺旋形，用它的颚咬着一个圆圈。`,dmGuidance:`如果角色保持距离，这些狗不会构成威胁。
当角色们搜索院子时，他们听到他在瓦砾下呼救。
如果角色们解救了Orvex，他请求加入他们的队伍，直到他找到避难所。
如果角色们与奥弗克斯成为朋友，他可以帮助他们与任何幸存的红袍法师达成停战协议。`,mapGeometry:{imageRef:"adventure/ToA/055-303.webp"}},{id:"scn_206",locationId:"loc_201",name:"3. 库巴赞的神龛",activation:{condition:{type:"always"},priority:0},skeleton:["一个长方形的水池，池水浑浊，前方是这个藤蔓缠绕的圣地。","曾经横跨水面的绳桥现在漂浮在水面上，与其他杂物纠缠在一起。","一座倒塌的石碑碎片形成了通往水池中央的垫脚石，那里有一座石蛙雕像从水面升起。","供奉给恶作剧之神库巴赞（表现为一个沼喉怪）的圣地包含了进入九神之墓所需的九个谜题立方体之一。"],flesh:"供奉给恶作剧之神库巴赞（表现为一个沼喉怪）的圣地包含了进入九神之墓所需的九个谜题立方体之一。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_toa_puzzle_cubes"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个长方形的水池，池水浑浊，前方是这个藤蔓缠绕的圣地。曾经横跨水面的绳桥现在漂浮在水面上，与其他杂物纠缠在一起。一座倒塌的石碑碎片形成了通往水池中央的垫脚石，那里有一座石蛙雕像从水面升起。",offerableQuestIds:["qst_main_toa"]},{id:"scn_208",locationId:"loc_201",name:"巨蛙池",activation:{condition:{type:"always"},priority:0},skeleton:["这个水池深6英尺，浑浊不清，满是泥土和藻类。","蛙魔会攻击任何扰动水面或试图接近祭坛的人，从水池中跃出追逐猎物。","破碎的纪念碑上长满了滑腻的青苔，腐烂的绳桥一旦有人踏上去就会下沉。","一个检查青蛙雕像嘴巴的角色会发现一个石钥匙嵌入雕像舌头上的一个凹槽里。","这把钥匙可以打开区域3B的锁着的门。"],flesh:`这个水池深6英尺，浑浊不清，满是泥土和藻类。一个成功通过DC 14感知（察觉）检定的人物会发现水池中伸出一根沼喉怪的眼梗（见附录D）。蛙魔会攻击任何扰动水面或试图接近祭坛的人，从水池中跃出追逐猎物。

破碎的纪念碑上长满了滑腻的青苔，腐烂的绳桥一旦有人踏上去就会下沉。任何试图跳跃过垫脚石的角色必须成功通过一次 DC 10 敏捷（特技）检定，以避免掉入池中。

一个检查青蛙雕像嘴巴的角色会发现一个石钥匙嵌入雕像舌头上的一个凹槽里。这把钥匙可以打开区域3B的锁着的门。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_208"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_20a",locationId:"loc_201",name:"3B. 上锁的大门",activation:{condition:{type:"always"},priority:0},skeleton:['这个锁着的门上方的横梁上刻着用古奥穆安语写的铭文："库巴赞敦促我们无畏前行，并给予我们所取的同样多。','"留意这些话的角色会获得一些关于区域3C中等待的考验的洞察。',"若使用来自蛙魔池（区域3A）的石钥匙开门，该刻纹不会触发。"],flesh:`这个锁着的门上方的横梁上刻着用古奥穆安语写的铭文："库巴赞敦促我们无畏前行，并给予我们所取的同样多。"留意这些话的角色会获得一些关于区域3C中等待的考验的洞察。

要撬开这把锁，一名携带盗贼工具的角色必须通过一次DC 20敏捷检定。无论检定成功与否，一道en=Glyph of Warding法术都会以en=Fear（豁免DC 15）锁定该角色。若使用来自蛙魔池（区域3A）的石钥匙开门，该刻纹不会触发。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_20b",locationId:"loc_201",name:"勇敢之室",activation:{condition:{type:"always"},priority:0},skeleton:["台阶向下通往一个俯瞰着布满锋利木桩的坑洞的壁架。","远处墙上的凹室里有一个基座，上面放着一个石制立方体。","凹室背面上雕刻着一只与鹤战斗的带有触手的怪物青蛙浮雕。","木梁从墙面地板高度处辐射开来，木梁之间有四尺的间隔。","墙上方的梁上方突出雕刻的青蛙头。"],flesh:`墙上的浮雕展示了库巴赞（一个 沼喉怪）与帕帕扎图（一个 魔王鹤）战斗的场景。一段用古奥姆语写的铭文讲述了库巴赞是如何从神乌巴托那里获得他的触手（见"九神传说"）。

这个坑深30英尺。任何掉入坑中的生物会受到10点（3d6）钝击伤害，并且必须进行一次DC 12敏捷豁免检定。如果检定失败，1d4根木桩会刺穿该生物，每根木桩额外造成1d6穿刺伤害。

生物可以通过从一个梁跳到另一个梁在房间的周边移动。要跳上梁而不掉下来，生物必须在敏捷（特技）检定上成功，检定的难度等级是5加上（两梁之间距离的尺数）。当重量施加到梁上并从梁上抬起时，梁会缩回并与墙面齐平，防止再次使用。所有梁都缩回墙面后，它们会重置到原始位置。

如果库巴赞的谜题立方体从基座上移开，区域3B的门会猛然关闭并上锁。在圣地内尝试撬门锁的检定会有不利。同时，墙上雕刻的青蛙头张开它们的嘴，吐出足以填满圣地的有毒气体，然后又闭上嘴。在基座上放置一个与谜题立方体重量相等的物体（半磅）可以防止门关闭和气体释放。

气体在神殿内持续存在1分钟，然后消散。任何气体存在时在神殿内开始其回合的生物必须成功通过一次DC 12体质豁免检定，否则受到10点（3d6）毒素伤害。即使生物屏住呼吸或不需要呼吸，也会受到影响。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"台阶向下通往一个俯瞰着布满锋利木桩的坑洞的壁架。远处墙上的凹室里有一个基座，上面放着一个石制立方体。凹室背面上雕刻着一只与鹤战斗的带有触手的怪物青蛙浮雕。木梁从墙面地板高度处辐射开来，木梁之间有四尺的间隔。墙上方的梁上方突出雕刻的青蛙头。"},{id:"scn_210",locationId:"loc_201",name:"4. 莎根比的神龛",activation:{condition:{type:"always"},priority:0},skeleton:["在这个有围墙的院子中心矗立着一座破败的圣地。","高大的石柱立在入口两侧，上面装饰着一只从肩膀上长出六条蛇的美洲豹的图案。","圣地内有一扇石门。","供奉给恶作剧之神莎根比（表现为一个六岐蛇豹）的圣地包含了进入九神之墓所需的九个谜题立方体之一。","两只配偶的六岐蛇豹人（见附录D）将圣地后面的一辆手推车作为他们的巢穴。"],flesh:`供奉给恶作剧之神莎根比（表现为一个六岐蛇豹）的圣地包含了进入九神之墓所需的九个谜题立方体之一。

两只配偶的六岐蛇豹人（见附录D）将圣地后面的一辆手推车作为他们的巢穴。如果他们听到有入侵者接近圣地，kamadans会试图伏击他们。为了保护他们的三个幼崽，kamadans会用牙齿和爪子进行战斗。六岐蛇豹幼崽是非战斗人员，看起来像小豹子，并且在一年内长到成年大小。幼崽的蛇在另外6个月内不会从他们的肩膀上长出来。角色们可以捕获幼崽，并花费数月时间尝试驯养它们，但是一旦它们在一年后成年，kamadans会反抗那些想要成为它们主人的人。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在这个有围墙的院子中心矗立着一座破败的圣地。高大的石柱立在入口两侧，上面装饰着一只从肩膀上长出六条蛇的美洲豹的图案。圣地内有一扇石门。",offerableQuestIds:["qst_main_toa"]},{id:"scn_212",locationId:"loc_201",name:"神殿入口",activation:{condition:{type:"always"},priority:0},skeleton:["入口两侧各有两座石碑，每座石碑高15尺，上面缠绕着藤蔓。",'检查雕刻的角色会发现用古奥穆安语写的铭文："莎根比教导我们用荣誉对抗邪恶。','"石碑上的浮雕展示了莎根比监督楚尔坦战士们用矛和剑训练的场景。',"圣地的门没有上锁，但它沉重地悬挂在铰链上。","它重600磅，因此一个或多个角色必须具有总计20或更高的力量值才能将其推开。"],flesh:`入口两侧各有两座石碑，每座石碑高15尺，上面缠绕着藤蔓。检查雕刻的角色会发现用古奥穆安语写的铭文："莎根比教导我们用荣誉对抗邪恶。"石碑上的浮雕展示了莎根比监督楚尔坦战士们用矛和剑训练的场景。

圣地的门没有上锁，但它沉重地悬挂在铰链上。它重600磅，因此一个或多个角色必须具有总计20或更高的力量值才能将其推开。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_213",locationId:"loc_201",name:"竞技场长廊",activation:{condition:{type:"always"},priority:0},skeleton:["当一个或多个角色进入圣地时，阅读：","台阶向下通往一个十五尺高、覆盖着苔藓的房间。","四尊奥穆安战士的雕像站在两侧的凹室中，俯瞰着地板上的一个有栅栏的角斗场。","每个雕像看起来都应该持有一支矛，但它的武器不见了。","在房间的远端，一个石制基座显眼地空着。"],flesh:`当一个或多个角色进入圣地时，阅读：

这些雕像无法从它们的凹室中移动，它们对伤害和法术免疫。北墙上的隧道向下倾斜至角斗场坑底（区域4D），并且通向另一边的牢房区（区域4C）。

墙壁浮雕描绘了莎根比（一种六岐蛇豹）与娜浪（一种格朗格）的战斗。正下方，一段用古欧姆语撰写的铭文讲述了娜浪如何偷走莎根比的矛的故事（见"九神传说"）。通过一个成功的 DC 15 感知 (察觉) 检定，角色会注意到浮雕上微小的孔洞。用布料或蜡填塞这些孔洞可以防止平台被扰动时毒气渗透进来（见下文）。

这个基座是一个4英尺高的石柱，对伤害和法术免疫。仔细检查会发现顶部有一个石制舱口。任何强行打开舱口的物理尝试都会通过壁雕上的孔释放出一团气体。这团气体会填满壁画正前方15英尺的立方体区域。区域内的生物必须进行一次DC 12体质豁免，豁免失败则受到14（4d6）点毒素伤害，豁免成功则受到一半伤害。即使生物屏住呼吸或不需要呼吸，气体仍会对其产生影响。气体不会持续存在。

为了获得莎根比的谜题立方体，角色们必须从区域4C的怪物那里获得四支青铜长矛，并将这些武器放入四个战士雕像的手中。只有击败角斗场中的怪物，才能获得长矛。当所有四支长矛都放入雕像手中时，阅读：

一旦它从基座上升起，莎根比的谜题魔方就可以安全地移除。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`台阶向下通往一个十五尺高、覆盖着苔藓的房间。四尊奥穆安战士的雕像站在两侧的凹室中，俯瞰着地板上的一个有栅栏的角斗场。每个雕像看起来都应该持有一支矛，但它的武器不见了。在房间的远端，一个石制基座显眼地空着。它后面的墙上的浮雕展示了一只长有六条蛇从肩膀伸出的怪兽美洲豹，正在与一个手持矛的矮胖、类似青蛙的人形生物战斗。在浮雕的左侧是一条带有向下楼梯的狭窄隧道。

基座开始在原地旋转，一个华丽的石制立方体从顶部的一个舱口螺旋上升起。`},{id:"scn_218",locationId:"loc_201",name:"4C. 角斗士牢房",activation:{condition:{type:"always"},priority:0},skeleton:["这个走廊里有四个狭小的牢房，后面是铁制的吊闸门。","吊闸门被固定在位，只能通过en=Knock法术或者踩在区域4D的压力板上才能升起。","每个牢房里都有一个由彩绘粘土制成的楚尔特角斗士。","每个角斗士都是类似魔像的生物，一只手拿着青铜长矛，另一只手拿着木盾。","它具有角斗士的具体数值，并有以下变化："],flesh:`这个走廊里有四个狭小的牢房，后面是铁制的吊闸门。吊闸门被固定在位，只能通过en=Knock法术或者踩在区域4D的压力板上才能升起。每个牢房里都有一个由彩绘粘土制成的楚尔特角斗士。每个角斗士都是类似魔像的生物，一只手拿着青铜长矛，另一只手拿着木盾。它具有角斗士的具体数值，并有以下变化：

粘土角斗士是一个无阵营的构装生物，具有17（天生，盾牌）的护甲等级。

它具有30尺的攀爬速度，并且能够攀爬困难的表面，包括在天花板上倒挂着，无需进行属性检定。

它对毒素伤害以及魅惑、恐慌和中毒状态免疫。它不需要进食、饮水、睡眠或呼吸。

它不会说话。

它不能进行远程攻击，也不能被解除武装。

如果被攻击或被召唤到角斗场（区域4D），一个粘土角斗士会进行战斗。如果在角斗场之外减少到0生命值，角斗士及其所有物会消失，并以满生命值的状态重新出现在其牢房中，手持长矛和盾牌，并尽可能返回到角斗场。如果在角斗场中被击败，角斗士会留下长矛，然后在牢房中重新形成。然后，长矛可以被带回区域4B。如果从圣地拿走，长矛会消失，并重新出现在角斗士的手中。

角斗士可以在圣地的任何地方活动，但不能离开它。当圣地内没有其他生物时，角斗士会返回他们的牢房，吊闸门将在他们身后落下。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_218"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_219",locationId:"loc_201",name:"角斗场坑",activation:{condition:{type:"always"},priority:0},skeleton:["这个坑深20尺，其栅栏间隔2尺。","一个中等体型或更小的生物可以轻松地从栅栏之间溜过，但是没有攀爬装备或魔法的帮助，坑壁太光滑，无法攀爬。","在坑的底部，相对而立的是六尺高的拱门，坑底是一个大型压力板。","对地板施加50磅或更多的压力会导致区域4C的吊闸门伴随着巨大的噪音升起，随后粘土角斗士从他们的牢房中出现，并迅速前往坑。"],flesh:`这个坑深20尺，其栅栏间隔2尺。一个中等体型或更小的生物可以轻松地从栅栏之间溜过，但是没有攀爬装备或魔法的帮助，坑壁太光滑，无法攀爬。

在坑的底部，相对而立的是六尺高的拱门，坑底是一个大型压力板。对地板施加50磅或更多的压力会导致区域4C的吊闸门伴随着巨大的噪音升起，随后粘土角斗士从他们的牢房中出现，并迅速前往坑。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_21a",locationId:"loc_201",name:"5. 大裂谷",activation:{condition:{type:"always"},priority:0},skeleton:["摇摇欲坠的废墟紧贴在一个裂谷的边缘，裂谷俯瞰着一个冒着气泡的熔岩湖。","从悬崖顶部掉入岩浆的生物会因为坠落受到70（20d6）点钝击伤害，并从岩浆中受到55（10d10）点火焰伤害。","在岩浆中开始其回合的生物将再次受到火焰伤害。","这个格朗格，名叫Imbok，被藤蔓捆绑并处于束缚状态。","当格朗格挣扎时，蔬菜皮格米人围绕着他进行一种奇怪的仪式性舞蹈。"],flesh:`从悬崖顶部掉入岩浆的生物会因为坠落受到70（20d6）点钝击伤害，并从岩浆中受到55（10d10）点火焰伤害。在岩浆中开始其回合的生物将再次受到火焰伤害。

这个格朗格，名叫Imbok，被藤蔓捆绑并处于束缚状态。当格朗格挣扎时，蔬菜皮格米人围绕着他进行一种奇怪的仪式性舞蹈。除非角色们进行干预，否则蔬菜皮格米人会将他们的俘虏滚下悬崖边。几个蔬菜皮格米人在奉献的狂热中也跟着跳了下去。

这个部落由一个孢子人领主、八个孢子人们以及族长的荆棘兽宠物组成。所有这些生物的具体数值出现在附录D中。他们的格朗格俘虏是格朗格酋长约伯深受爱戴的第一百八十个儿子。他不会说通用语，但承诺如果能护送他回到他父亲的圣地(区域18)，他会用金子将他的恩人埋葬。Imbok的承诺是空洞的，但他没有其他东西可以提供给他的救星。`,spotlightRefs:[],presentNpcIds:["npc_yorb"],availableInfoIds:[],encounterIds:["enc_21a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"摇摇欲坠的废墟紧贴在一个裂谷的边缘，裂谷俯瞰着一个冒着气泡的熔岩湖。",dmGuidance:`当角色们第一次到达时，他们遇到了一个小型蔬菜皮格米族群，正准备将一个格龙蛙人（见附录D）献祭给裂谷。
如果角色们释放了Imbok，他会跪在他们的脚边。`},{id:"scn_21d",locationId:"loc_21d",name:"摩亚的神殿",activation:{condition:{type:"always"},priority:0},skeleton:["这个圣地位于高耸的大裂谷上方的岩石尖塔上（区域5）。","一根岩石柱高耸在熔岩上方200尺。","一座被棕榈树覆盖的围墙废墟坐落在山顶。","在最狭窄的地方，神庙与城市其他部分之间的裂谷宽60尺。","携带绳索和抓钩的角色可以抛掷绳索越过这个缺口。"],flesh:`这个圣地位于高耸的大裂谷上方的岩石尖塔上（区域5）。

在最狭窄的地方，神庙与城市其他部分之间的裂谷宽60尺。携带绳索和抓钩的角色可以抛掷绳索越过这个缺口。

供奉给恶作剧之神摩亚（由一个幻色蛇代表）的神庙包含了进入九神之墓所需的九个谜题方块之一。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"一根岩石柱高耸在熔岩上方200尺。一座被棕榈树覆盖的围墙废墟坐落在山顶。",offerableQuestIds:["qst_main_toa"]},{id:"scn_21f",locationId:"loc_21d",name:"6A. 神龛入口",activation:{condition:{type:"always"},priority:0},skeleton:["这座低矮的建筑前生长着棕榈树，磨损的台阶通向一个形成入口的拱门。","拱门两侧是盘绕的蛇形浮雕。","四只幻色蛇（见附录D）潜伏在庭院中，利用它们的伪装能力在树干周围盘旋隐藏。"],flesh:"四只幻色蛇（见附录D）潜伏在庭院中，利用它们的伪装能力在树干周围盘旋隐藏。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_21f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座低矮的建筑前生长着棕榈树，磨损的台阶通向一个形成入口的拱门。拱门两侧是盘绕的蛇形浮雕。",dmGuidance:"如果角色们进入庭院，幻色蛇就会突然出击并攻击。"},{id:"scn_221",locationId:"loc_21d",name:"陷阱通道",activation:{condition:{type:"always"},priority:0},skeleton:["这个布满碎石的走廊墙壁上雕刻着蛇形图案，每隔5尺就有一个箭缝。","蛛网填满了箭缝，像窗帘一样悬挂在走廊的天花板上。","在入口上方，一块石碑上刻有楔形文字的信息。",'匾额上的文字是用古老的欧姆语写成，上面写着："莫阿教我们，秘密隐藏着真相。','" 探险家必须注意这条信息，才能找到神殿的谜题立方体。'],flesh:`匾额上的文字是用古老的欧姆语写成，上面写着："莫阿教我们，秘密隐藏着真相。" 探险家必须注意这条信息，才能找到神殿的谜题立方体。

箭窗宽6英寸，高2尺，深1尺。一个角色在清除掉蜘蛛网后通过箭窗窥视，可以看到隔壁房间（区域6D），前提是该角色有光源或者能在黑暗中视物。

沿着走廊在神殿地图上标记为X的位置分布着三个隐蔽的陷坑。这些坑盖会保持锁定状态，直到谜题方块从6C区域的基座上移开。此后，任何生物踏上坑盖都会使其摆动打开并坠落其中，除非它成功通过一次DC 15敏捷豁免。每个陷坑深10英尺，底部有一片绿软泥。

一名在走廊地板上搜寻陷阱的角色，若成功通过 DC 15 感知（察觉）检定，可发现一个陷坑陷阱。这些盖子构造巧妙，只能通过使用如 en=Arcane Lock 等法术才能将其卡住关闭。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这个布满碎石的走廊墙壁上雕刻着蛇形图案，每隔5尺就有一个箭缝。蛛网填满了箭缝，像窗帘一样悬挂在走廊的天花板上。在入口上方，一块石碑上刻有楔形文字的信息。"},{id:"scn_224",locationId:"loc_21d",name:"6C. 欺骗之室",activation:{condition:{type:"always"},priority:0},skeleton:["在这个房间的中央，一个石质立方体放置在一个普通的石质基座上。","十二尊部落战士的雕像从周围的墙壁突出，弓箭瞄准着基座。","基座前的地面上有一个描绘着一只巨大的蛇缠绕着一只愤怒的猴子的马赛克。","苔藓遮盖了大部分细节。","马赛克描绘了莫阿（一个幻色蛇）与望戈（一个苏怪）战斗的场景。"],flesh:`马赛克描绘了莫阿（一个幻色蛇）与望戈（一个苏怪）战斗的场景。如果一个角色把苔藓剥开，他们会揭露用古老的欧姆语写成的以下信息：'死亡奖赏欺骗的小偷。真理来自蛇的口。'另一段铭文环绕着地板，讲述了莫阿如何向乌布陶坚守真理并背叛了望戈的信任（见'九神传说'）。

基座上的谜题立方体是幻影，尽管触摸起来感觉很真实。一个en=Detect Magic法术或类似的效果会揭示立方体周围的幻术魔法气息。当它从神殿中被拿走时，它会在一团绿色的烟雾中消失。如果一个生物从基座上移除谜题立方体或试图破坏其中一个雕像，弓箭手就会活化并朝房间里的所有生物开火。弓箭手甚至能探测到隐形生物的存在。在他们开火之前，箭矢会神奇地出现在他们的弓上。弓箭手保持活化状态1小时，之后他们恢复到无生命的状态。

十二学会的弓箭手在先攻值20时行动。在它的回合，雕像射出一支箭（命中+6）。被箭命中的生物受到5（1d8 + 1）穿刺伤害。每个雕像是AC 17的中型物体；30生命值；对来自非魔法攻击的钝击、穿刺和挥砍伤害免疫；并且对毒素和心灵伤害免疫。

在搜索墙壁寻找秘密门的角色，如果成功通过一次 DC 12 感知（察觉）检定，可以在入口隧道的每一侧找到一扇秘密门。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在这个房间的中央，一个石质立方体放置在一个普通的石质基座上。十二尊部落战士的雕像从周围的墙壁突出，弓箭瞄准着基座。基座前的地面上有一个描绘着一只巨大的蛇缠绕着一只愤怒的猴子的马赛克。苔藓遮盖了大部分细节。"},{id:"scn_227",locationId:"loc_21d",name:"西侧密室",activation:{condition:{type:"always"},priority:0},skeleton:["一个盘曲的蛇雕像主宰着这个布满蛛网的房间。","雕像的头部缺失，它碎裂在地板上，旁边是一个石质立方体。","雕像没有头部时高7尺。","躺在头部破碎残骸旁边的谜题立方体是假的，当它从神殿中被拿走时，会在一团绿色的烟雾中消失。","将它带到区域6C会激活那里的雕像。"],flesh:"雕像没有头部时高7尺。躺在头部破碎残骸旁边的谜题立方体是假的，当它从神殿中被拿走时，会在一团绿色的烟雾中消失。将它带到区域6C会激活那里的雕像。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"一个盘曲的蛇雕像主宰着这个布满蛛网的房间。雕像的头部缺失，它碎裂在地板上，旁边是一个石质立方体。"},{id:"scn_229",locationId:"loc_21d",name:"6E. 东部密室",activation:{condition:{type:"always"},priority:0},skeleton:["一个巨大的盘曲蛇雕像主宰着这个布满蛛网的房间。","雕像的口中紧握着一个石质立方体。","雕像高8尺，并且无害。","这个立方体是莫阿的谜题立方体。","它可以安全地从雕像的口中移除。"],flesh:`雕像高8尺，并且无害。

这个立方体是莫阿的谜题立方体。它可以安全地从雕像的口中移除。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个巨大的盘曲蛇雕像主宰着这个布满蛛网的房间。雕像的口中紧握着一个石质立方体。"},{id:"scn_22c",locationId:"loc_22c",name:"倒下的树",activation:{condition:{type:"always"},priority:0},skeleton:["一棵倒下的树横跨前方的河流。","它的树干比一个人还要宽，延伸超过100尺。","河的两岸都躺着废墟建筑。","一个名叫钉包的老年斑猫猎人会在角色试图在这里涉水过河时伏击他们。","倒下的树干足够宽，可以让两个中型生物安全地交错通过。"],flesh:`一个名叫钉包的老年斑猫猎人会在角色试图在这里涉水过河时伏击他们。

倒下的树干足够宽，可以让两个中型生物安全地交错通过。在树下，河水向200英尺下游的瀑布翻涌。一个掉入河中或试图游过河的生物必须成功通过一个 DC 14 力量（运动）检定才能到达岸边。如果检定失败，水流会以每轮50英尺的速度将生物拉向瀑布。

钉包渴望得到一个猎人的死亡。衰老已经控制了他，现在他把所有生物都当作他的猎物。

要发现他，角色必须成功通过一次DC 22感知（察觉）检定。每次射击后，他会跃过屋顶到一个新的射击位置并尝试躲藏。

钉包是一个斑猫人族的刺客，有以下变化：

钉包是混乱中立。

他有20尺的攀爬速度和猫科动物敏捷特性（见下文）。

他具有达到60尺范围的黑暗视觉。

他懂得通用语、矮人语和盗贼暗语。

作为一个动作，他可以用他的爪击进行一次近战武器攻击（命中加值为+3），命中时造成1d4挥砍伤害。

他携带的是长弓而不是弩（射程150/600尺）。

如果钉包的生命值降至最大生命值的一半以下，他会向敌人投降，带领他们前往他的巢穴（一个废墟地下室），并以友谊的名义提供炖菜。在分发炖菜碗时，他解释说，他来到奥姆是为了寻找传说中的宝藏——月之脐（见第五章）。他希望利用其传说中的力量找到他失踪的儿子，但他早已放弃了找到它的希望。成功的DC 15感知（洞悉）检定揭示，这个斑猫人无意让角色们活着离开他的领地。他在炖菜中加入了午夜之泪（摄入）。

角色们在斑猫猎人的巢穴中搜寻时，会在一个空心葫芦里找到五剂午夜之泪（摄入），以及足够的装备来制作一个探险家背包。`,spotlightRefs:[],presentNpcIds:["npc_bag_of_nails"],availableInfoIds:[],encounterIds:["enc_22c"],treasureSlotIds:["trs_22c_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"一棵倒下的树横跨前方的河流。它的树干比一个人还要宽，延伸超过100尺。河的两岸都躺着废墟建筑。",dmGuidance:`当角色们到达时，钉包藏在河东岸一栋废墟建筑中，距离倒下的树150英尺。
当角色穿过桥梁时，钉包会开火。
【钉包】当斑猫人（tabaxi）在其战斗回合中移动时，它可以将其速度加倍，直到回合结束。一旦使用了这一特性，斑猫人在之后的回合中不能再使用，直到它在某个回合中移动0尺。`,mapGeometry:{imageRef:"adventure/ToA/058-306.webp"}},{id:"scn_232",locationId:"loc_22c",name:"8. 安珂的神龛",activation:{condition:{type:"always"},priority:0},skeleton:["两个方尖碑上装饰着螺旋状的雕刻，它们位于这个院落的入口处。","一个杂草丛生的庭院位于高大的棕榈树荫下。","石门封闭着一个没有窗户的神殿入口，旁边有一个较小的废墟。","供奉给恶作剧之神安珂（由一个链锤蜗牛代表）的神殿包含进入九神之墓所需的九个谜题立方体之一。"],flesh:"供奉给恶作剧之神安珂（由一个链锤蜗牛代表）的神殿包含进入九神之墓所需的九个谜题立方体之一。",spotlightRefs:[],presentNpcIds:["npc_bag_of_nails"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"两个方尖碑上装饰着螺旋状的雕刻，它们位于这个院落的入口处。一个杂草丛生的庭院位于高大的棕榈树荫下。石门封闭着一个没有窗户的神殿入口，旁边有一个较小的废墟。"},{id:"scn_234",locationId:"loc_22c",name:"神殿入口",activation:{condition:{type:"always"},priority:0},skeleton:['门上方用古老的欧姆语写着一段铭文："安珂敦促我们在行动前对比所有选择。','"安珂的祭司们深思熟虑，但容易犹豫不决。',"他们的信息是解决神殿谜题的线索。","神殿的门没有上锁，悬挂在沉重的铰链上。","每扇门重600磅，因此一个或多个角色需要合计力量值20或更高才能把它们推开。"],flesh:'门上方用古老的欧姆语写着一段铭文："安珂敦促我们在行动前对比所有选择。"安珂的祭司们深思熟虑，但容易犹豫不决。他们的信息是解决神殿谜题的线索。神殿的门没有上锁，悬挂在沉重的铰链上。每扇门重600磅，因此一个或多个角色需要合计力量值20或更高才能把它们推开。',spotlightRefs:[],presentNpcIds:["npc_bag_of_nails"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_235",locationId:"loc_22c",name:"毁坏的工作室",activation:{condition:{type:"always"},priority:0},skeleton:["这个车间的屋顶很久以前就塌了，现在一堆浓密的植物从废墟中生长出来。","透过苔藓，你看到墙上挂着数百把铁钥匙。","有些弯曲破损，有些锈蚀得无法修复。","其余的看起来还可以使用。","其中一把钥匙可以打开区域8C的基座。"],flesh:"其中一把钥匙可以打开区域8C的基座。",spotlightRefs:[],presentNpcIds:["npc_bag_of_nails"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这个车间的屋顶很久以前就塌了，现在一堆浓密的植物从废墟中生长出来。透过苔藓，你看到墙上挂着数百把铁钥匙。有些弯曲破损，有些锈蚀得无法修复。其余的看起来还可以使用。",dmGuidance:"如果角色知道要找哪把钥匙，他们在搜索几分钟后就可以找到它。"},{id:"scn_237",locationId:"loc_22c",name:"8C. 沉思之室",activation:{condition:{type:"always"},priority:0},skeleton:["一尊巨大的蜗牛雕像矗立在你面前。","它没有触角，而是有五个以岩石制成的棍棒末端的伪足。","沿着墙壁，六个铁钥匙挂在石制底座上方的小壁龛中。","在雕像后面，一个宽阔壁龛中的雕刻基座在其底部设有一个钥匙孔。","雕像高9尺，代表着恶作剧之神安珂，形象是一只链锤蜗牛。"],flesh:`雕像高9尺，代表着恶作剧之神安珂，形象是一只链锤蜗牛。三个妖鬼们（不死的楚尔坦部落族人）藏在它后面。每个食尸鬼的额头上都纹有拉兹·纳斯的象征——一个小型蓝色三角形。角色一进入房间，食尸鬼就从雕像后面跳出来攻击。

这个房间里的钥匙都不能打开基座。然而，它们的大小都相似。如果一个角色拿走全部六把钥匙并将它们重叠，它们的重叠部分形成了一个特定的图案。在废墟车间（区域8B）的搜索会发现一把与这个图案匹配的单一钥匙。这把钥匙可以打开基座。

安珂的谜题立方体隐藏在基座内。如果一个角色将正确的钥匙插入钥匙孔并向顺时针方向转动四分之一圈，谜题立方体就会从一个隐蔽的舱口出现：

现在可以安全地将谜题魔方从基座上取下来了。

使用盗贼工具，角色可以通过一次成功的DC 25敏捷检定来撬开基座上的锁。检定失败且差值达到5或更高的角色会意外触发陷阱。

当这种情况发生时，神殿内的每个生物都必须进行一次 DC 18 敏捷豁免。任何未能通过豁免的生物将被光线击中，并受到 33 点 (6d10) 的光耀伤害。如果雕像完全或部分处于 en=Antimagic Field 中，则无法发射光线。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_bag_of_nails"],availableInfoIds:[],encounterIds:["enc_237"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一尊巨大的蜗牛雕像矗立在你面前。它没有触角，而是有五个以岩石制成的棍棒末端的伪足。沿着墙壁，六个铁钥匙挂在石制底座上方的小壁龛中。在雕像后面，一个宽阔壁龛中的雕刻基座在其底部设有一个钥匙孔。

基座在原地旋转。随着它的转动，一个华丽的石质立方体从其表面的隐蔽舱口螺旋升起。`,dmGuidance:"如果角色将错误的钥匙插入基座底部的钥匙孔中，或尝试撬锁失败，链枷蜗牛雕像的外壳会发出炫目的光线，并向四面八方射出。"},{id:"scn_23c",locationId:"loc_23c",name:"冒险者营地",activation:{condition:{type:"always"},priority:0},skeleton:["在废墟中有一个废弃的营地。","撕裂的背包和腐烂的装备散落在三个发霉的帐篷周围的地面上。","在营地的中心，一块脏兮兮的黄色布片悬挂在一个简陋的木制旗杆上。","这个营地是由黄旗公司（Company of the Yellow Banner）建立的，这是一群探险者，他们在六个月前抵达奥穆（Omu）。","现在所有的探险者都已经死亡。"],flesh:`这个营地是由黄旗公司（Company of the Yellow Banner）建立的，这是一群探险者，他们在六个月前抵达奥穆（Omu）。现在所有的探险者都已经死亡。更多详情，请参阅第五章。

搜索该区域的角色发现了一张发霉的羊皮纸，它夹在其中一个帐篷的衬里中；给玩家一份手册13的副本（见附录 E）。公司的领袖，布里克斯顿勋爵，为一个失踪的同伴留下了这封信。营地的其余部分已经被洗劫一空。

这位红袍法师由两名雇佣兵陪同，正在寻找欧姆的神殿。除非队伍与扎格米拉结成了联盟，否则一场战斗是不可避免的，在这种情况下，红袍法师提出与队伍联手。`,spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"在废墟中有一个废弃的营地。撕裂的背包和腐烂的装备散落在三个发霉的帐篷周围的地面上。在营地的中心，一块脏兮兮的黄色布片悬挂在一个简陋的木制旗杆上。",dmGuidance:"如果角色在营地停留一个或多个小时，一个随机确定的红袍法师（见'泰伊红袍法师'）会偶然遇到他们。",offerableQuestIds:["qst_main_toa"]},{id:"scn_23f",locationId:"loc_23c",name:"10. 艾金的神龛",activation:{condition:{type:"always"},priority:0},skeleton:["破裂的独石柱守护着这处废墟的入口。","锯齿状的蕨类植物生长在破碎的石板之间的庭院里。","一对石门通向一个大型的平顶废墟。","供奉给恶作剧之神艾金（由一只独角兔代表）的神殿包含进入九神之墓所需的九个谜题立方体之一。"],flesh:"供奉给恶作剧之神艾金（由一只独角兔代表）的神殿包含进入九神之墓所需的九个谜题立方体之一。",spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"破裂的独石柱守护着这处废墟的入口。锯齿状的蕨类植物生长在破碎的石板之间的庭院里。一对石门通向一个大型的平顶废墟。"},{id:"scn_241",locationId:"loc_23c",name:"10A. 神龛入口",activation:{condition:{type:"always"},priority:0},skeleton:["一只无害的独角兔（见附录D）居住在庭院下面的洞穴里，一感觉到入侵者就会躲藏起来。","当一个角色接近门时，阅读：","这个神殿的门上装饰着雕塑浮雕。","雕刻显示一只带角的兔子正在向一只长着锋利爪子的小型野生熊发起冲锋。","门上方刻着一段楔形文字信息。"],flesh:`一只无害的独角兔（见附录D）居住在庭院下面的洞穴里，一感觉到入侵者就会躲藏起来。当一个角色接近门时，阅读：

这条信息是用古奥曼语写的，内容为：'艾金 教导我们走最不寻常的道路。' 艾金 教导她的追随者过不可预测的生活，总是改变路线，从不坚持计划。角色们在神殿内应该好好听从她的信息。

雕刻下方隐藏的较小铭文讲述了艾金（一只独角兔）如何因为破坏了为神乌布陶准备的炖汤，而激怒了奥博娜卡（一只佐博怪）。详细信息见'九神传说'。`,spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个神殿的门上装饰着雕塑浮雕。雕刻显示一只带角的兔子正在向一只长着锋利爪子的小型野生熊发起冲锋。门上方刻着一段楔形文字信息。"},{id:"scn_243",locationId:"loc_23c",name:"谜题地板",activation:{condition:{type:"always"},priority:0},skeleton:["一条十尺宽的走廊延伸进黑暗中。","走廊地面上铺着雕刻着各种野兽图案的瓷砖。","给玩家一份附录 E中的讲义14副本。","三十二块瓷砖覆盖了走廊中一段20尺长、10尺宽的区域。","每块瓷砖都是5尺见方，瓷砖按照八行四列排列。"],flesh:`给玩家一份附录 E中的讲义14副本。

三十二块瓷砖覆盖了走廊中一段20尺长、10尺宽的区域。每块瓷砖都是5尺见方，瓷砖按照八行四列排列。瓷砖上描绘的野兽包括独角兔（见附录D）、蜻蜓、鹰、长颈鹿、猴子、老虎、疣猪和斑马。

要安全通过走廊，角色必须避免多次踩踏同一动物图案。如果在错误的图案地砖上施加超过20磅的压力，四枚毒镖会从墙壁的孔洞中射出。每枚飞镖对触发地砖10尺内的随机目标进行一次远程武器攻击（命中加值+5）。单个生物可能被多枚飞镖攻击。被飞镖命中的生物受到2（1d4）点穿刺伤害，并且必须成功通过DC 15的体质豁免检定，失败则受到7（2d6）点毒素伤害，成功则伤害减半。角色可以通过成功的DC 13感知（察觉）检定发现孔洞。用布或蜡堵住孔洞可以防止飞镖发射。

角色可以通过飞行或传送穿过走廊来避开陷阱，或者使用en=Spider Climb法术沿着墙壁或天花板爬行。否则墙壁太光滑，无法攀爬。

一个en=Detect Magic法术揭示了每个独角兔瓷砖周围的防护魔法光环。一个生物踩在独角兔瓷砖上会获得2d10点临时生命值。一旦一个瓷砖赋予了这个好处，它就会失去魔法，直到下一个黎明。对一个瓷砖施放en=Dispel Magic有相同的效果。`,spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"一条十尺宽的走廊延伸进黑暗中。走廊地面上铺着雕刻着各种野兽图案的瓷砖。"},{id:"scn_247",locationId:"loc_23c",name:"迷宫",activation:{condition:{type:"always"},priority:0},skeleton:["这座布满灰尘的迷宫中遍布陷阱。","地板上的隐藏压力板位于圣坛地图上标记为X的位置。","如果压力板上施加超过20磅的压力，一个锋利的斧刃会从天花板的隐藏隔间中摆出。","斧刃对站在压力板上的任何生物进行一次近战攻击（命中+6）。","命中时，目标受到8（1d8 + 4）挥砍伤害。"],flesh:"这座布满灰尘的迷宫中遍布陷阱。地板上的隐藏压力板位于圣坛地图上标记为X的位置。如果压力板上施加超过20磅的压力，一个锋利的斧刃会从天花板的隐藏隔间中摆出。斧刃对站在压力板上的任何生物进行一次近战攻击（命中+6）。命中时，目标受到8（1d8 + 4）挥砍伤害。一个角色通过成功的DC 16感知（察觉）检定可以发现压力板和天花板隔间。用铁钉或其他物件楔入压力板下方可以阻止陷阱触发。使用盗贼工具，角色可以通过成功的DC 15敏捷检定拆除斧刃。如果检定失败且差值达到5或更多，陷阱会触发并对该角色进行一次具有劣势的攻击。",spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_248",locationId:"loc_23c",name:"10D. 谜题立方体",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门没有上锁也没有陷阱。","一束自然光线从天花板上的一个小方洞中洒落，照在一个雕刻的石质基座上。","一个装饰华丽的石质立方体放置在其表面。","这个立方体是艾金的谜题立方体。","它没有陷阱，并且可以安全地从基座上移除。"],flesh:`这个房间的门没有上锁也没有陷阱。

这个立方体是艾金的谜题立方体。它没有陷阱，并且可以安全地从基座上移除。`,spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一束自然光线从天花板上的一个小方洞中洒落，照在一个雕刻的石质基座上。一个装饰华丽的石质立方体放置在其表面。"},{id:"scn_24a",locationId:"loc_23c",name:"11. 怯蕴阿灵货车",activation:{condition:{type:"always"},priority:0},skeleton:["前方街道上躺着一辆翻倒的马车。","腐烂的花瓣散落在周围地面上，马车的破碎轮子里筑有蜜蜂巢。","一串新近割下的丛林花环悬挂在马车的舌杆上。","这辆四轮货车是一个怯蕴阿灵的家（见附录D）。","该区域的孢子人们害怕这个怯蕴阿灵，并带来花朵作为礼物以平息它的愤怒。"],flesh:`这辆四轮货车是一个怯蕴阿灵的家（见附录D）。该区域的孢子人们害怕这个怯蕴阿灵，并带来花朵作为礼物以平息它的愤怒。实际上，这个怯蕴阿灵是无害的。

怯蕴阿灵使用它的魔法隐藏在马车下的一块长满苔藓的石盘上（见下文的'女王的法令'）。接近马车的角色会注意到这个区域异常地郁郁葱葱，充满生机。如果他们留下供品，怯蕴阿灵会胆怯地向他们展示自己。如果没有，怯蕴阿灵的天然好奇心会驱使它跟随角色并监视他们。

蜂蜜的香味预示着怯蕴阿灵的出现，无害的蜜蜂跟随在它周围。它对类人生物的头发很感兴趣，很可能会附着在一个长着胡须的矮人或一个有着卷曲发丝的角色身上。当怯蕴阿灵陪伴队伍时，任何遇到的植物侏儒一旦察觉到怯蕴阿灵的存在就会立即逃跑。怯蕴阿灵对自然世界的亲近使它不会跟随角色进入神殿或地牢。

这块石碑是欧姆女王对她在梅兹罗的对手的宣言。梅兹罗人无法读懂欧姆人的本土文字，因此这块石碑包含了用通用语和古老欧姆语写成的相同信息。它写道：'女王娜帕卡宣布，欧姆的自由人民无所畏惧。勇敢的新神保护着我们，就像乌布陶以前做的那样，但现在不再如此。欧姆将再次崛起，娜帕卡将根据征服的权利夺回属于她的一切。'

使用这块石碑，角色们可以翻译任何用古老欧姆语写成的信息。石碑直径3尺，重200磅，但有墨水和羊皮纸的角色可以抄写它或拓印。`,spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`前方街道上躺着一辆翻倒的马车。腐烂的花瓣散落在周围地面上，马车的破碎轮子里筑有蜜蜂巢。一串新近割下的丛林花环悬挂在马车的舌杆上。

一块长满苔藓的石盘半埋在马车下的泥里。它的表面覆盖着同心圆环的铭文——有些用通用语书写，其他的则用锯齿状的楔形文字刻成。`,dmGuidance:`如果角色们查看马车下面，阅读：
如果角色们将石碑从马车上移开，他们最终会带着怯蕴阿灵一起带走。`},{id:"scn_24e",locationId:"loc_23c",name:"12. 望戈的神龛",activation:{condition:{type:"always"},priority:0},skeleton:["雕刻着悬挂尾巴的猴子的两个裂开的方尖碑装饰着一座被破碎墙壁包围的神殿。","方尖碑之后是一个庭院，庭院里长满了马尾草和海芋百合。","五个拱门在废墟的底部通向黑暗。","中央拱门上方安装着一块刻有楔形文字铭文的石匾。","供奉给恶作剧之神望戈（由一只苏怪代表）的神殿包含进入九神之墓所需的九个谜题立方体之一。"],flesh:`供奉给恶作剧之神望戈（由一只苏怪代表）的神殿包含进入九神之墓所需的九个谜题立方体之一。中央拱门上方的铭文用古老的欧姆语写成，内容如下："成为望戈的朋友比成为他的敌人更好。"

四个入口走廊中的五个吊闸被提升到上方的门楣里。当一个角色从区域12B拿到谜题魔方时，吊闸猛然关闭并封锁了这些走廊。每个吊闸重600磅，可以通过一个或多个角色合力，只要他们的总力量值至少达到20，就能将其抬起。一个角色可以通过至少两个铁钉阻止吊闸下降。`,spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"雕刻着悬挂尾巴的猴子的两个裂开的方尖碑装饰着一座被破碎墙壁包围的神殿。方尖碑之后是一个庭院，庭院里长满了马尾草和海芋百合。五个拱门在废墟的底部通向黑暗。中央拱门上方安装着一块刻有楔形文字铭文的石匾。"},{id:"scn_252",locationId:"loc_23c",name:"破裂的方尖碑",activation:{condition:{type:"always"},priority:0},skeleton:["生物穿过这两座方尖碑时，会在它们的脑海中听到一群尖叫的猴子的喧闹声。","一旦这些生物移动到其他地方，声音就会消失。","尖叫声令人讨厌但无害。","方尖碑本身没有魔法，它们的效果也无法被驱散。"],flesh:"生物穿过这两座方尖碑时，会在它们的脑海中听到一群尖叫的猴子的喧闹声。一旦这些生物移动到其他地方，声音就会消失。尖叫声令人讨厌但无害。方尖碑本身没有魔法，它们的效果也无法被驱散。",spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_253",locationId:"loc_23c",name:"12B. 友谊的考验",activation:{condition:{type:"always"},priority:0},skeleton:["在这个二十尺高的房间中央，一个十尺高的邪恶猴子模样的石雕站在一个石台上，靠尾巴保持平衡。","雕像的四肢张开，手心和脚心都呈杯状。","在背后的墙上，一个浮雕展示了一个类似猴子的creature正在撕裂一条巨大的蛇。","浮雕的上方和下方刻有楔形文字。","四幅彩绘石面具从墙上突出；"],flesh:`墙上的浮雕展示了诡计之神望戈（一种苏怪）与他憎恨的敌人摩亚（一种幻色蛇）战斗。古奥曼语的铭文解释了摩亚如何背叛望戈给神乌布塔奥（见"九神传说"）。

一个en=Detect Magic法术或类似的效果揭示了雕像周围的召唤魔法气息，雕像很容易攀爬。一个角色如果搜索雕像的基座，会发现用古老的欧姆语写成的以下铭文：'望戈的朋友知道在哪里倒水。'望戈的'朋友'（秃鹫）可以通过解开观看走廊（区域12C）上方的面具所写的逻辑谜题来识别。

当一个角色向雕像的右手或其中一只杯状脚倒入一品脱或更多的水时，液体会发出嘶嘶声并转化为1d3个蒸汽魔蝠，它们会战斗直到被摧毁。雕像可以以这种方式最多创造出六个蒸汽魔蝠，之后直到下一个黎明之前不能再创造出更多的魔蝠。一个降至0生命值的蒸汽魔蝠会失去其形态并消失。

当向雕像捧着的左手倒入一品脱或更多的水时，望戈的谜题立方体会通过魔法出现在雕像的头上。当谜题立方体出现时，倒水的角色会听到一个咆哮的、无实体的声音说："拿走奖品并诅咒你的朋友，或者与我的孩子们战斗以索取它。你的选择是什么？"如果一个角色拿走了谜题立方体，墙上的面具就会发出它们的诅咒（见区域12C）。如果没有角色立即拿走立方体，吊闸门将在区域12A的入口走廊猛然关闭，同时四个苏怪（见附录D）被传送到房间内，像受惊的孩子一样紧紧抓住雕像，寻求保护父母的庇护。苏怪跳下来并攻击。一旦苏怪出现，拿走谜题立方体就不会触发面具的诅咒了。召唤出的苏怪是真实的，它们的身体在死亡时不会消失。

检查墙壁上的石质面具的角色会看到它们的眼睛是开放的洞，允许人窥视相邻的走廊（区域12C）。这些面具是墙壁的延伸，如果不破坏它们就无法移除。`,spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:["enc_253","enc_toa_wongo_su_monsters"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在这个二十尺高的房间中央，一个十尺高的邪恶猴子模样的石雕站在一个石台上，靠尾巴保持平衡。雕像的四肢张开，手心和脚心都呈杯状。在背后的墙上，一个浮雕展示了一个类似猴子的creature正在撕裂一条巨大的蛇。浮雕的上方和下方刻有楔形文字。四幅彩绘石面具从墙上突出；它们分别描绘了狮子、斑马（斑马）、野猪和秃鹫的头部。"},{id:"scn_257",locationId:"loc_23c",name:"观景走廊",activation:{condition:{type:"always"},priority:0},skeleton:["这四个走廊的每个尽头都有一个凸入区域12B的模制石质面具。","一个en=Detect Magic法术揭示了每个面具周围的变形魔法气息。","古老的欧姆语铭文刻在面具上方的墙壁上。","该诅咒的效果如同en=Polymorph法术，并在24小时后结束。","斑马的具体数值与乘用马相同。"],flesh:`这四个走廊的每个尽头都有一个凸入区域12B的模制石质面具。一个en=Detect Magic法术揭示了每个面具周围的变形魔法气息。古老的欧姆语铭文刻在面具上方的墙壁上。

当面具释放其诅咒时（见区域 12B），任何在过去一小时内通过面具观察的角色，必须成功进行一个DC 15体质豁免检定，否则将变成他们最后一次观察面具上所描绘的生物。该诅咒的效果如同en=Polymorph法术，并在24小时后结束。

斑马的具体数值与乘用马相同。`,spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`【观景走廊】狮子面具（L）。这个面具上方的铭文写着："我吃了野猪的一个朋友。"一个通过面具窥视的角色会看到一束蓝光从天花板上照射在区域12B的雕像的右手上。
野猪面具 (B。这个面具上方的铭文写着："秃鹫很幸运还活着。"通过这个面具，一个角色会看到一束蓝光照射在区域12B的雕像的左脚上。
斑马面具（Z）。这个面具上方的铭文写着："我唯一的朋友饿死了。"通过这个面具，一个角色会看到一束蓝光照射在区域12B的雕像的右脚上。
秃鹫面具 (V。这个面具上方的铭文写着，"其他人中的一个没有朋友。"通过这个面具，角色看到一束蓝光落在区域12B雕像的左手上。
野猪、狮子和秃鹫的具体数值也出现在怪物图鉴中。`},{id:"scn_259",locationId:"loc_23c",name:"13. 露天剧场",activation:{condition:{type:"always"},priority:0},skeleton:["一座废墟的露天剧场高耸于周围建筑之上。","藤蔓缠绕着它的台阶，动物雕像排列在座位上。","外面的泥地上的植被被剥得一干二净。","一种诡异的寂静笼罩着这个区域。","没有鸟叫，没有虫鸣，没有任何东西在动。"],flesh:`这个露天剧场是翎羽之王的巢穴，它是一只拥有魔法能力的强大的暴龙。每个脚印从脚尖到脚跟超过5尺长。靠近废墟时，他们发现了长而纤细的羽毛，颜色为鲜红、橙色和绿色，还有一大堆足够埋葬一个矮人的粪便。

这个露天剧场是一个露天的半圆形结构，有阶梯式座位俯瞰着一个废墟舞台。欧姆人用它来进行公共辩论和演出，既有喜剧也有悲剧。狭窄的通道和散落着瓦砾的房间分布在看台下方。这个昏暗的迷宫是五只恐爪龙（见附录D）的家园。当暴龙外出狩猎时，这群deinonychuses离开它们的巢穴，在露天剧场四处游荡，一旦发现其他生物就进行攻击。在它们的巢穴周围散布着欧姆文物（见下文的"宝藏"）。

白天，翎羽之王有50的几率在圆形剧场休息。夜晚时，这个几率会降低至25%。如果这只野兽外出狩猎，每小时有累计20的几率返回。翎羽之王是一只长有羽毛的霸王龙，并具有以下变化：

翎羽之王是一个拥有200生命值的怪物。

它能够看到隐形生物和物体，就像它们是可见的一样。

它能够天生施放en=Misty Step，无需任何材料。它的施法能力是感知。

它具有传奇抗性特性和召唤蜂群行动选项（见下文）。当它用嘴巴抓住生物时，它不能使用召唤蜂群行动。

在露天剧场下的房间中搜寻，发现了一件刻有楚尔坦宴会仪式图像的电气石托盘（25金币），一个用彩绘黄金制成的欧姆死亡面具（250金币），以及一件心灵感应头盔。`,spotlightRefs:[],presentNpcIds:["npc_king_of_feathers"],availableInfoIds:[],encounterIds:["enc_259","enc_toa_king_of_feathers"],treasureSlotIds:["trs_259_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一座废墟的露天剧场高耸于周围建筑之上。藤蔓缠绕着它的台阶，动物雕像排列在座位上。外面的泥地上的植被被剥得一干二净。一种诡异的寂静笼罩着这个区域。没有鸟叫，没有虫鸣，没有任何东西在动。",dmGuidance:`当角色们接近露天剧场时，他们无法不注意到泥地里的巨大爪印。
【向国王致敬】如果翎羽之王豁免检定失败，它可以选择成功。
翎羽之王 呼出一群昆虫集群（黄蜂），它们在距离它20尺内的某个空间形成。这群昆虫作为翎羽之王的盟友，并且在它之后立即行动。这群昆虫在1分钟后散去。
【翎羽之王】被称为翎羽之王的这只怪物暴龙是欧姆无可争议的统治者。大多数其他居住在禁忌之城的生物都害怕它雷鸣般的脚步声，并且会远远避开它的巢穴——露天剧场。
翎羽之王可以在欧姆的任何地方被发现。起初，可以通过让角色们瞥见它在远处雾中移动的身影，或者让他们听到它的咆哮声在废墟上回荡，来逗弄他们。它可能在英雄们探索废墟或休息时出现。或者，它可能会在队伍战斗不利（或者太容易）时打断战斗。`},{id:"scn_261",locationId:"loc_261",name:"九神之墓",activation:{condition:{type:"always"},priority:0},skeleton:["一座被藤蔓覆盖的方尖碑标志着通往九神之墓的入口。","完整细节请参考第五章。"],flesh:"一座被藤蔓覆盖的方尖碑标志着通往九神之墓的入口。完整细节请参考第五章。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_262",locationId:"loc_261",name:"15. 废墟市集",activation:{condition:{type:"always"},priority:0},skeleton:["前方街角处矗立着一座破败的市场大厅。","磨损的布质遮阳篷破烂不堪地悬挂在一条宽阔的小巷上方，小巷两旁排列着摊位。","狗头人居住在废弃市场大厅下方的隐蔽地窖中，并在整个集市设置了六个陷阱。","角色每花费一分钟搜索集市，就有累计20的几率发现陷阱。","若检定成功，角色能发现陷阱（一个隐藏的弹簧投石机）及其触发装置（绊索或压力板）而不会触发它。"],flesh:`狗头人居住在废弃市场大厅下方的隐蔽地窖中，并在整个集市设置了六个陷阱。角色每花费一分钟搜索集市，就有累计20的几率发现陷阱。当发现陷阱时，让该角色进行一次DC 15感知（察觉）检定。若检定成功，角色能发现陷阱（一个隐藏的弹簧投石机）及其触发装置（绊索或压力板）而不会触发它。一旦被发现，该陷阱可以轻松解除或避开（无需检定）。

如果他们跟随这个生物，它会带领他们到达市场下面的地下室。

狗头人居住在地图3.1上没有显示的地下室中。除了一个之外，通往它们巢穴的所有楼梯都被坍塌或用家具堆砌堵住了。

卡卡罗尔，一位狗头人鳞术士，坐在宝藏堆上休息。还有两位狗头人发明家和十位狗头人在场。狗头人鳞甲术士和狗头人发明家的数据出现在附录D中。

狗头人们团结起来保卫卡卡罗尔。当他们击退入侵者时，卡卡罗尔和他的发明家从后方进行远程攻击。如果情况看起来不妙，卡卡罗尔会向角色们求饶。

卡卡罗尔身穿一件6尺长的、被撕裂的金刚鹦鹉挂毯，上面装饰着石榴石珠子（75金币）作为斗篷。他的宝藏包括30金币，250银币，1800铜币，一个蜻蜓形状的彩色玻璃小雕像（25金币），四颗血石（每颗50金币），以及一瓶高等治疗药水。

卡卡罗尔相信阿瑟瑞克会将他变成一条龙。因此，这个狗头人表现得傲慢、贪婪和虚荣——这些特质可以被用来对付他。他对阿瑟瑞克真正的目的一无所知，也未被告知有关Soulmonger的事情。卡卡罗尔的狗头人监视着城市中大多数其他派系。如果赠予足够的财宝，他可能成为冒险者们有用的预警系统。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:["enc_262"],treasureSlotIds:["trs_262_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`前方街角处矗立着一座破败的市场大厅。磨损的布质遮阳篷破烂不堪地悬挂在一条宽阔的小巷上方，小巷两旁排列着摊位。

摇曳的火把在约20英尺见方的酒窖拱顶下投下2。开裂的天花板高8英尺。在房间远端的凹室里，一堆财宝在火光中闪烁。狗头人正围聚在周围。`,dmGuidance:`检定失败意味着角色意外触发了陷阱，这将复制狗头人发明家的武器发明攻击（参见附录D）。
在角色找到三个陷阱后，他们看到一只狗头人消失在一个集市边缘隐蔽的楼梯上。
当角色们穿过地下室时，请阅读：`},{id:"scn_268",locationId:"loc_261",name:"16. 帕帕扎图的神龛",activation:{condition:{type:"always"},priority:0},skeleton:["鳄鱼在这个泥泞的湖床上打滚，从湖床上升起一座有围墙的废墟。","入口两侧有两根柱子，上面雕刻着一只长腿鸟，喙尖如针。","在建筑的正面，滑腻的台阶通向入口拱门。","供奉给骗子神帕帕扎图（由一个魔王鹤代表）的神龛包含了进入九神之墓所需的九个谜题方块之一。","神龛周围的水深2尺。"],flesh:"供奉给骗子神帕帕扎图（由一个魔王鹤代表）的神龛包含了进入九神之墓所需的九个谜题方块之一。神龛周围的水深2尺。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[107],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"鳄鱼在这个泥泞的湖床上打滚，从湖床上升起一座有围墙的废墟。入口两侧有两根柱子，上面雕刻着一只长腿鸟，喙尖如针。在建筑的正面，滑腻的台阶通向入口拱门。"},{id:"scn_26a",locationId:"loc_261",name:"神殿入口",activation:{condition:{type:"always"},priority:0},skeleton:['神龛入口上方的牌匾上刻有古奥曼语的铭文："帕帕扎图教导我们不向任何人鞠躬。','" 记住该邪教座右铭的角色在探索帕帕扎图的坟墓时（第五章）会获得优势。',"四只饥饿的鳄鱼潜伏在神殿被洪水淹没的庭院中。","这些生物是神殿后方筑巢的巨鳄的后代。"],flesh:`神龛入口上方的牌匾上刻有古奥曼语的铭文："帕帕扎图教导我们不向任何人鞠躬。" 记住该邪教座右铭的角色在探索帕帕扎图的坟墓时（第五章）会获得优势。

四只饥饿的鳄鱼潜伏在神殿被洪水淹没的庭院中。这些生物是神殿后方筑巢的巨鳄的后代。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_26a","enc_toa_papazotl_giant_crocodile"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[107],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"如果角色们攻击这些鳄鱼，它们的母亲将在2轮后加入战斗。"},{id:"scn_26b",locationId:"loc_261",name:"马赛克地板",activation:{condition:{type:"always"},priority:0},skeleton:["整个大厅的石雕上都附着着苔藓。","镶嵌的地面描绘了一只高大的鸟，用它长长的尖喙固定住一只从肩膀上长出触手的类似青蛙的怪物。","远处的墙上镶嵌着一扇沉重的石门。","马赛克展示了诡计之神帕帕扎图（一个魔王鹤）与他的敌人Kubazan（一个蛙兽）战斗的场景。","马赛克周围刻有奥姆安古文的铭文。"],flesh:`马赛克展示了诡计之神帕帕扎图（一个魔王鹤）与他的敌人Kubazan（一个蛙兽）战斗的场景。马赛克周围刻有奥姆安古文的铭文。

门没有上锁，但挂在铰链上非常沉重。每扇门重600磅，因此一个或多个角色必须拥有合计力量值20或更高才能将其强行打开。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[107],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"整个大厅的石雕上都附着着苔藓。镶嵌的地面描绘了一只高大的鸟，用它长长的尖喙固定住一只从肩膀上长出触手的类似青蛙的怪物。远处的墙上镶嵌着一扇沉重的石门。",dmGuidance:'如果角色们翻译这些铭文，他们会了解到Kubazan如何违背帕帕扎图并被诅咒的故事（见"九神传说"）。'},{id:"scn_26d",locationId:"loc_261",name:"16C. 指挥之室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间中央有一个空的基座。","墙上的壁龛中有六尊雕像面向它。","它们描绘的是裸露上身、头部为不同动物的人类。","从左到右，头部分别类似于蜥蜴、美洲豹、龙虾、巨嘴鸟、蝙蝠和青蛙。","检查基座的角色会发现在其底座上刻有一道谜题。"],flesh:`检查基座的角色会发现在其底座上刻有一道谜题。）与其他试验室中的铭文不同，这道谜题是用通用语刻写的：

谜题的答案（"影子"）是找到秘密房间（区域16D）的线索。爬行通道的入口通常隐藏在一堵幻象墙后面，可以用一个en=Dispel Magic法术来解除。这个爬行通道宽2尺，高3尺，通向区域16D。

无论角色们如何努力，他们都无法撬开这个盖子。只有当所有六尊雕像都被蒙上眼睛时（见区域16D），帕帕扎图的谜题魔方才会出现。当这种情况发生时，请阅读：

角色们现在可以安全地拿走这个谜题魔方。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[107],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间中央有一个空的基座。墙上的壁龛中有六尊雕像面向它。它们描绘的是裸露上身、头部为不同动物的人类。从左到右，头部分别类似于蜥蜴、美洲豹、龙虾、巨嘴鸟、蝙蝠和青蛙。

伴随着阳光
随夜晚离去
隐藏在黑暗中
不会咬人
总是与其施法者相连
从不离其主人

基座旋转，一个装饰精美的石质立方体从其表面的一个舱口出现。`,dmGuidance:`（给玩家提供附录E中15号手册的副本，参见附录 E。
如果角色将光源靠近蝙蝠头雕像，一个爬行通道就会在其影子中显现。
如果角色搜索基座，他们会在其上表面发现一个石盖的轮廓。`},{id:"scn_272",locationId:"loc_261",name:"隐藏房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个石制牢房的远墙上刻着一个奇怪的网格。","这个网格是解谜的关键。","如果将区域16C中的谜题字母（不包括空格）输入到网格中，暗格中的字母拼出'cover eyes'。","这个短语为获取区域16C中的谜题魔方提供了线索。"],flesh:"这个网格是解谜的关键。如果将区域16C中的谜题字母（不包括空格）输入到网格中，暗格中的字母拼出'cover eyes'。这个短语为获取区域16C中的谜题魔方提供了线索。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这个石制牢房的远墙上刻着一个奇怪的网格。",dmGuidance:"当角色进入这个房间时，给玩家提供附录E中16号手册的副本，参见附录 E。"},{id:"scn_274",locationId:"loc_261",name:"17. 瀑布",activation:{condition:{type:"always"},priority:0},skeleton:["一条河流蜿蜒穿过岩石峡谷，然后从50英尺高处坠入一个30英尺深的池塘。","从瀑布顶部到下方的城市没有安全路径。","第一个从瀑布附近的悬崖上俯瞰城市的字符看到了奥姆的坠落幻象：","一座宏伟的白色建筑群展现在你眼前。","阳光在玻璃穹顶和窗户上闪烁，然而一切并不美好。"],flesh:`一条河流蜿蜒穿过岩石峡谷，然后从50英尺高处坠入一个30英尺深的池塘。任何从瀑布上掉落的生物必须进行一次DC 10敏捷豁免，若豁免失败则受到12（5d4）点钝击伤害，若豁免成功则不受到伤害。从瀑布顶部到下方的城市没有安全路径。

第一个从瀑布附近的悬崖上俯瞰城市的字符看到了奥姆的坠落幻象：

在奥姆期间，看到幻象的角色在每次长休时都会做同一个黑暗的梦。在梦中，角色站在城市坠落时，看到一个骷髅般的身形独自穿过死亡的街道。他穿着破烂的长袍，手持一个头骨尖端的法杖，他深陷的眼睛中包含着死亡的光芒。每次梦境，这个身形（阿瑟瑞克）都会变得更近一些。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一座宏伟的白色建筑群展现在你眼前。阳光在玻璃穹顶和窗户上闪烁，然而一切并不美好。城市各处的火灾中冒出黑烟，街道上散落着尸体，幽灵像秃鹰一样在屋顶盘旋。一个完全黑暗的球体从城市的中心向外扩散，它扩张向你时遮蔽了光线。你转过头去，当你再次回头时，黑暗消失了。这座城市变成了半淹没、杂草丛生的废墟。"},{id:"scn_277",locationId:"loc_277",name:"娜浪的神殿",activation:{condition:{type:"always"},priority:0},skeleton:["装饰有跳跃的、类似青蛙的雕像的独石柱从沼泽中升起。","远处，一座形状像箭头的废墟建筑蹲伏在泥泞的水中。","灌木和树木从它的屋顶生长出来。","在建筑物尖锐的前部，台阶通向一扇沾满黏液的石门。","供奉给恶作剧之神娜浪（由一个格隆代表）的神祠包含进入九神之墓所需的九个谜题魔方之一。"],flesh:"供奉给恶作剧之神娜浪（由一个格隆代表）的神祠包含进入九神之墓所需的九个谜题魔方之一。神祠周围的水深2尺。",spotlightRefs:[],presentNpcIds:["npc_yorb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"装饰有跳跃的、类似青蛙的雕像的独石柱从沼泽中升起。远处，一座形状像箭头的废墟建筑蹲伏在泥泞的水中。灌木和树木从它的屋顶生长出来。在建筑物尖锐的前部，台阶通向一扇沾满黏液的石门。",mapGeometry:{imageRef:"adventure/ToA/059-307.webp"}},{id:"scn_279",locationId:"loc_277",name:"18A. 神龛入口",activation:{condition:{type:"always"},priority:0},skeleton:["这座神殿是名为约伯首领的金色皮肤格龙蛙人精英战士的家园。","四名橙色皮肤的格龙蛙人精英战士与约伯及其驯养的鸭嘴龙坐骑一起在积水的庭院中打滚。","一名红色皮肤的格龙蛙人蛮荒祭司和七名绿色皮肤的格龙蛙人们潜伏在神殿20英尺高的屋顶上。","屋顶上的格朗族射箭以抵御入侵者。","如果入侵者反击，更多绿皮肤的格龙蛙人们会从附近的建筑物靠近，每轮结束时会有1d4个出现，直到有二十个到达。"],flesh:`这座神殿是名为约伯首领的金色皮肤格龙蛙人精英战士的家园。四名橙色皮肤的格龙蛙人精英战士与约伯及其驯养的鸭嘴龙坐骑一起在积水的庭院中打滚。一名红色皮肤的格龙蛙人蛮荒祭司和七名绿色皮肤的格龙蛙人们潜伏在神殿20英尺高的屋顶上。

屋顶上的格朗族射箭以抵御入侵者。如果入侵者反击，更多绿皮肤的格龙蛙人们会从附近的建筑物靠近，每轮结束时会有1d4个出现，直到有二十个到达。

格隆人对陌生人感到紧张且不信任。起初，约伯更感兴趣的是吓跑入侵者，而不是与他们交谈。他目前还不知道他的儿子失踪了。

格隆族崇拜死去的骗子神娜浪。

神殿的门半开着。如果战斗的形势对首领 约伯 不利，他会与他的精英卫队一起撤退到神殿内并闩上门。一个角色可以通过一次成功的 DC 25 力量检定强行打开闩上的门。`,spotlightRefs:[],presentNpcIds:["npc_yorb"],availableInfoIds:[],encounterIds:["enc_279"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`有关这些生物的统计数据，请参阅附录D。
如果角色们在区域5中救出了他心爱的儿子，并且有办法与首领沟通，约伯会对他们敞开心扉。
如果角色们与约伯进行谈判，他可以讲述奥穆的九个骗子神的全部传说（见"九神传说"）。`},{id:"scn_27b",locationId:"loc_277",name:"贪婪之室",activation:{condition:{type:"always"},priority:0},skeleton:["火把照亮了满是宝藏的房间：堆满硬币的箱子、打磨过的双耳瓶、成串的珍珠，以及装饰华丽的盔甲。","在另一扇双门前的地面上，镶嵌着一幅马赛克，描绘了一个类似青蛙的人形生物正在击败一只从肩膀上长出蛇的豹子。","楔形文字的铭文交织在战斗者的上方和下方。","这些铭文是用古老的奥姆安文写的。",'马赛克上方的铭文写着："娜浪教导我们只服务于我们自己。'],flesh:`这些铭文是用古老的奥姆安文写的。马赛克上方的铭文写着："娜浪教导我们只服务于我们自己。"下方的铭文讲述了娜浪（一个格隆）如何偷走了莎根比（一个六岐蛇豹）的长矛。有关详细信息，请参阅"九神传说"。

尽管这些宝藏仍然在神祠中，它们看起来和感觉都是真实的。如果一个角色从神祠中移除宝藏，幻象就会消失，宝藏会恢复其真实形态：金币变成锡盘，银色酒器变回陶罐，闪亮的盔甲变成生锈的废金属。一个en=Detect Magic法术揭示了宝藏在神祠中时散发出幻象魔法的气息。这些"宝藏"都没有价值。

通往区域18C的石门被锁上了，既没有钥匙孔也没有把手。在双门上方，用古老的奥姆安文在石雕上刻着以下信息："你们中谁最富有，就给我带来你们的礼物。"到目前为止，即使是首领约伯也不知道门后面是什么。一个en=Detect Magic法术揭示了门周围有占卜魔法的气息。如果一个生物携带在神祠中发现的一个或多个宝藏接近门，门就会打开。然而，如果神祠中的另一个生物也携带着这样的宝藏，门就会保持关闭。一个en=Knock法术也能打开门。`,spotlightRefs:[],presentNpcIds:["npc_yorb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"火把照亮了满是宝藏的房间：堆满硬币的箱子、打磨过的双耳瓶、成串的珍珠，以及装饰华丽的盔甲。在另一扇双门前的地面上，镶嵌着一幅马赛克，描绘了一个类似青蛙的人形生物正在击败一只从肩膀上长出蛇的豹子。楔形文字的铭文交织在战斗者的上方和下方。"},{id:"scn_27e",locationId:"loc_277",name:"18C. 谜题立方体",activation:{condition:{type:"always"},priority:0},skeleton:["在这个尘土飞扬的房间中央，一个石质立方体安放在一个雕刻并画着类似矮胖人形蛙的基座上。","娜浪的谜题魔方可以安全地从其基座上移除。"],flesh:"娜浪的谜题魔方可以安全地从其基座上移除。",spotlightRefs:[],presentNpcIds:["npc_yorb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在这个尘土飞扬的房间中央，一个石质立方体安放在一个雕刻并画着类似矮胖人形蛙的基座上。"},{id:"scn_280",locationId:"loc_280",name:"奥博娜卡的神殿",activation:{condition:{type:"always"},priority:0},skeleton:["一对针状的柱子标志着通往围墙遗迹的入口。","在庭院的另一边，榕树的根须包裹着一座矮胖的建筑。","封闭入口的石门上雕刻着咆哮的熊，它们有着长长的锋利爪子。","供奉给恶作剧之神奥博娜卡（由一个zorbo代表）的神祠包含进入九神之墓所需的九个谜题魔方之一。"],flesh:"供奉给恶作剧之神奥博娜卡（由一个zorbo代表）的神祠包含进入九神之墓所需的九个谜题魔方之一。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"一对针状的柱子标志着通往围墙遗迹的入口。在庭院的另一边，榕树的根须包裹着一座矮胖的建筑。封闭入口的石门上雕刻着咆哮的熊，它们有着长长的锋利爪子。"},{id:"scn_282",locationId:"loc_280",name:"19A. 神龛入口",activation:{condition:{type:"always"},priority:0},skeleton:['神龛入口上方的牌匾用古老的奥姆安语刻着以下信息："奥博娜卡教导我们要谨慎行事，保持在光明之中。','" 这条信息揭示了如何获得奥博娜卡的谜题魔方。',"门微微敞开，门铰生锈，开门时会发出尖锐的响声。","它们会调查吱吱作响的门的声音，但不会攻击大群体，更倾向于攻击落单者和掉队者。"],flesh:`神龛入口上方的牌匾用古老的奥姆安语刻着以下信息："奥博娜卡教导我们要谨慎行事，保持在光明之中。" 这条信息揭示了如何获得奥博娜卡的谜题魔方。门微微敞开，门铰生锈，开门时会发出尖锐的响声。

它们会调查吱吱作响的门的声音，但不会攻击大群体，更倾向于攻击落单者和掉队者。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_282"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色们到达时，四个佐博怪（见附录D）正潜伏在神祠周围。"},{id:"scn_283",locationId:"loc_280",name:"雕刻长廊",activation:{condition:{type:"always"},priority:0},skeleton:["这条昏暗走廊的墙壁上覆盖着彩绘浮雕，展示了奥姆安人狩猎、收获果实、种植庄稼、制作武器、宴请、战斗、编织和剥制动物皮的场景。","八个空的火把支架从浮雕下方的墙壁上突出。","要解除区域19E中的谜题魔方陷阱，必须将那个房间的魔法火把放置在这个走廊的支架上。","这扇门从西侧被三重闩住。","从这一侧无法手动打开，但施展三次 en=Knock 法术可以解决问题。"],flesh:`要解除区域19E中的谜题魔方陷阱，必须将那个房间的魔法火把放置在这个走廊的支架上。

一个角色如果搜索墙壁并通过了 DC 17 感知 (察觉) 检定，会发现入口内的一扇秘密门。这扇门从西侧被三重闩住。从这一侧无法手动打开，但施展三次 en=Knock 法术可以解决问题。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这条昏暗走廊的墙壁上覆盖着彩绘浮雕，展示了奥姆安人狩猎、收获果实、种植庄稼、制作武器、宴请、战斗、编织和剥制动物皮的场景。八个空的火把支架从浮雕下方的墙壁上突出。"},{id:"scn_286",locationId:"loc_280",name:"19C. 日光池",activation:{condition:{type:"always"},priority:0},skeleton:["天花板上雕刻着一个辉煌的太阳，正下方是一个静止的水池。","水池中反射的天花板并没有显示出太阳雕刻，而是显示出一个月亮雕刻。","这个水池是一个魔法传送门，连接到区域19D的水池。","角色如果潜入这个水池，会在区域19D的水池中出现。"],flesh:"这个水池是一个魔法传送门，连接到区域19D的水池。角色如果潜入这个水池，会在区域19D的水池中出现。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"天花板上雕刻着一个辉煌的太阳，正下方是一个静止的水池。水池中反射的天花板并没有显示出太阳雕刻，而是显示出一个月亮雕刻。"},{id:"scn_288",locationId:"loc_280",name:"月池",activation:{condition:{type:"always"},priority:0},skeleton:["天花板上在这里雕刻着一个满月，正上方是水池。","墙壁上装饰着奥姆安人进行日常杂务的浮雕。","水池中反射的天花板上没有显示月亮雕刻，而是显示了一个太阳雕刻。","要回到区域19C，角色必须潜入水池的表面下。","即使被发现，也没有明显的方法打开这扇门，但 en=Knock 法术可以生效。"],flesh:`水池中反射的天花板上没有显示月亮雕刻，而是显示了一个太阳雕刻。要回到区域19C，角色必须潜入水池的表面下。

南墙上的一个密室门需要进行一次成功的 DC 15 感知（察觉）检定才能发现。即使被发现，也没有明显的方法打开这扇门，但 en=Knock 法术可以生效。

一名研究墙壁浮雕的角色如果成功通过了 DC 10 智力（调查）检定，会观察到墙上有一个身影正在制作一把钥匙。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"天花板上在这里雕刻着一个满月，正上方是水池。墙壁上装饰着奥姆安人进行日常杂务的浮雕。",dmGuidance:`如果角色通过水池进入这个房间，请阅读：
如果角色推动这把钥匙，暗门会弹开，露出后方布满灰尘和蛛网的隧道（区域 19F）。`},{id:"scn_28b",locationId:"loc_280",name:"19E. 圣礼之室",activation:{condition:{type:"always"},priority:0},skeleton:["八支火把照亮了这个房间。","光线洒在地板上的马赛克上，上面展示了两个生物在战斗：一只有着锋利爪子的小熊和一只额头上有螺旋角的兔子。","在房间的中央，一个穿着长袍的人物站在一个齐腰高的基座旁边，基座上放着一个石立方体。","这个人物是秃顶的，一只手放在立方体上。","过了一会儿才意识到这个人物是一个雕像。"],flesh:`地板上的马赛克描绘了奥博娜卡（一只泽波）与艾金（一只独角兔）的战斗。马赛克下方的古老奥姆安文字解释了艾金是如何破坏了奥博娜卡安抚乌布塔奥的企图（参见"九神传说"）。

雕像是一位名为沃杰的石化红袍法师（守序邪恶男性塞恩人类魔法师）。他在触摸之前未能解除魔方陷阱，其魔法将他变成了石头。如果对沃杰施放en=Greater Restoration或类似的魔法，他会恢复肉身，意识到自己并非孤身一人，并攻击任何试图阻止他获得魔方的人。

沃伊听从扎格米拉的命令，并知道奥博娜卡和艾金的故事。

任何触碰谜题立方体的生物都必须进行一次 DC 15 体质豁免检定，否则将被 石化。即使检定成功，持有立方体的生物也必须在其每回合结束时重复豁免检定，直到谜题立方体从神龛中移除。当此房间中的火把插入区域19B的空支架时，可以安全地处理奥博娜卡的谜题立方体。

每支火把都燃烧着一种永远不消耗木材的火焰。火把可以被熄灭，但每次重新进入这个房间时它们都会重新点燃。用任何其他方法重新点燃火把都是不可能的。如果所有八支火把都被插入到区域19B中的空托架里，谜题魔方就可以安全地处理了。

沃伊携带一根不动权杖，一个装有三颗虎眼宝石的皮袋（每颗10金币），以及一本红色皮革装订的魔法书，其中包含了他准备的所有法术。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_28b_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"八支火把照亮了这个房间。光线洒在地板上的马赛克上，上面展示了两个生物在战斗：一只有着锋利爪子的小熊和一只额头上有螺旋角的兔子。在房间的中央，一个穿着长袍的人物站在一个齐腰高的基座旁边，基座上放着一个石立方体。这个人物是秃顶的，一只手放在立方体上。过了一会儿才意识到这个人物是一个雕像。",dmGuidance:'如果角色们击败了他，他们会在他的身上找到一些贵重物品（见下方的"宝藏"），这些物品在沃伊被石化时无法获得。'},{id:"scn_290",locationId:"loc_280",name:"秘密通道",activation:{condition:{type:"always"},priority:0},skeleton:["这个黑暗的通道被灰尘和蛛网堵塞。","很明显，这里已经多年没有人通过了。","穿越这条走廊是从区域19E向区域19B运送火把而不会让火焰在水池中熄灭的最便捷方式。","通往区域19B的秘密门上有三根木条。","一旦移除这些木条，门就可以轻松拉开。"],flesh:"穿越这条走廊是从区域19E向区域19B运送火把而不会让火焰在水池中熄灭的最便捷方式。通往区域19B的秘密门上有三根木条。一旦移除这些木条，门就可以轻松拉开。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这个黑暗的通道被灰尘和蛛网堵塞。很明显，这里已经多年没有人通过了。"},{id:"scn_292",locationId:"loc_280",name:"20. 王宫",activation:{condition:{type:"always"},priority:0},skeleton:["成千上万的蝙蝠在一座巨大的废墟上空盘旋。","在一个15尺高的圆形墙后面，你可以看到破碎的拱廊、被藤蔓缠绕的雕像、空旷的广场，以及被榕树根覆盖的建筑物。","没有被洪水淹没的街道上堆满了瓦砾。","宫殿看起来已被废弃，并且所有的财宝都被盗掘一空。","在瓦砾中蜿蜒穿行的蛇大多数是无害的（但见下文区域20A和20B）。"],flesh:`宫殿看起来已被废弃，并且所有的财宝都被盗掘一空。在瓦砾中蜿蜒穿行的蛇大多数是无害的（但见下文区域20A和20B）。在废墟上空飞翔的蝙蝠也是无害的。

夜蛇神殿（见第四章]位于宫殿之下。有两个入口：北边（区域20A）有一个大入口，南边（区域20B）有一个隐藏入口。每个入口都有三个第一型态的恶咒蛇人以蛇的形态守护。它们从隐藏处滑出，恢复到真实形态，攻击任何没有元帝族陪同的人。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_toa_puzzle_cubes"],encounterIds:["enc_292","enc_toa_palace_secret_entrance"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"成千上万的蝙蝠在一座巨大的废墟上空盘旋。在一个15尺高的圆形墙后面，你可以看到破碎的拱廊、被藤蔓缠绕的雕像、空旷的广场，以及被榕树根覆盖的建筑物。没有被洪水淹没的街道上堆满了瓦砾。",offerableQuestIds:["qst_main_toa"]},{id:"scn_294",locationId:"loc_280",name:"圣所主入口",activation:{condition:{type:"always"},priority:0},skeleton:["夜蛇神殿的北入口很容易找到：","一条人工挖掘的隧道在这里向下延伸至地下。","泥泞的马车轨道从入口处来回蜿蜒。","隧道向下倾斜通向蛇人神庙的区域1（参见第四章）。"],flesh:`夜蛇神殿的北入口很容易找到：

隧道向下倾斜通向蛇人神庙的区域1（参见第四章）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"一条人工挖掘的隧道在这里向下延伸至地下。泥泞的马车轨道从入口处来回蜿蜒。"},{id:"scn_296",locationId:"loc_280",name:"20B. 神庙的秘密入口",activation:{condition:{type:"always"},priority:0},skeleton:["夜蛇神殿的南入口隐藏在棕榈树和荆棘丛后。","经过此处的蛇人总是试图掩盖他们的行踪。","移开棕榈叶，你发现了一条狭窄、粗糙的通道，向下延伸进入地下。","这段通道连接到蛇人神殿的区域23（见第四章）。"],flesh:`夜蛇神殿的南入口隐藏在棕榈树和荆棘丛后。经过此处的蛇人总是试图掩盖他们的行踪。要找到入口，角色必须在搜索附近时成功通过一次 DC 15 感知（察觉）或感知（求生）检定。

这段通道连接到蛇人神殿的区域23（见第四章）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"移开棕榈叶，你发现了一条狭窄、粗糙的通道，向下延伸进入地下。"},{id:"scn_298",locationId:"loc_298",name:"夜蛇圣所",activation:{condition:{type:"always"},priority:0},skeleton:["在奥姆的废墟宫殿之下，有一个元帝族寺庙，专门供奉一位被称为夜蛇神丹达尔的末日之神。","这座寺庙最初是宫殿的一部分，但多年来元帝族已经扩展并修改了它以满足他们的需求。","当拉兹·纳斯偷走了奥姆的一个谜题魔方（见第三章）时，角色们必须深入寺庙去取回它。","被元帝族捕获的角色最终也会来到这里。"],flesh:"在奥姆的废墟宫殿之下，有一个元帝族寺庙，专门供奉一位被称为夜蛇神丹达尔的末日之神。这座寺庙最初是宫殿的一部分，但多年来元帝族已经扩展并修改了它以满足他们的需求。当拉兹·纳斯偷走了奥姆的一个谜题魔方（见第三章）时，角色们必须深入寺庙去取回它。被元帝族捕获的角色最终也会来到这里。",spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_fenthaza","npc_sekelok"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/ToA/060-401.webp"}},{id:"scn_299",locationId:"loc_298",name:"玉蜓族的阴谋",activation:{condition:{type:"always"},priority:0},skeleton:["更多信息可见于瓦罗怪物指南。","他的末日预言尚未迫在眉睫，因为拉兹·纳斯正因对自己死亡恐惧而分心。","他已成为死亡诅咒的受害者，日渐衰弱，而他和他的蛇人祭司们都无法确定其原因或找到解救之法。","随着拉兹·纳斯力量的减弱，他的对手们正准备好除掉他，继续他们的神圣使命。","阿瑟瑞克承诺如果元帝族守卫九神之墓，他将帮助他们。"],flesh:`更多信息可见于瓦罗怪物指南。

他的末日预言尚未迫在眉睫，因为拉兹·纳斯正因对自己死亡恐惧而分心。他已成为死亡诅咒的受害者，日渐衰弱，而他和他的蛇人祭司们都无法确定其原因或找到解救之法。随着拉兹·纳斯力量的减弱，他的对手们正准备好除掉他，继续他们的神圣使命。

阿瑟瑞克承诺如果元帝族守卫九神之墓，他将帮助他们。拉兹·纳斯不知道阿瑟瑞克正在愚弄他。最重要的是，拉兹·纳斯珍视自己的生命。

残忍的恶咒蛇人芬萨札在权力上仅次于拉兹·纳斯，担任神庙的高级祭司。作为登达尔的"噩梦传话者"之一，她解释了蛇神的梦境幻象，并以折磨和牺牲来取悦她。

芬萨札一直对拉兹·纳斯紧抓人性之线心存怨恨。现在她的幻象预示着拉兹·纳斯将带来毁灭，她正积极策划反对他。她的梦境揭示了一件名为黑蛋白石王冠的宝藏，深藏在九神之墓中。她确信这顶王冠是释放夜蛇神丹达尔的关键。芬萨札想要谋杀拉兹·纳斯并从墓中获得王冠。这位牧师既耐心又狡猾，除非胜算在她这边，否则她不会对拉兹·纳斯采取行动。被捕的角色很快就会成为芬萨札政变中的棋子。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_acererak","npc_fenthaza","npc_sekelok"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`在运行本章之前，请先查阅《怪物图鉴》中关于蛇人的信息。
拉兹·纳斯领导着欧姆的蛇人执行一项神圣使命，旨在召唤夜蛇丹达尔并引发世界末日（更多关于拉兹·纳斯及其邪恶计划的信息，请参见附录D）。
如果角色们能说服拉兹·纳斯，阿瑟瑞克是一个共同的敌人，他愿意不阻挠他们的道路，只要他们发誓要摧毁灵魂收割者。
【神庙名单和增援】如果元提在神庙内发现入侵者且这些入侵者不是囚犯，他们会试图在区域9敲响大锣。神庙名单表格总结了元提在巢穴中的位置，并指出当发现入侵者或锣声响起时他们的反应。
一旦警报响起，开始追踪角色在神庙中花费的时间。每到一个小时结束时，投掷百分骰并查阅神庙增援表格，看看还有什么会到达。增援从区域1或23进入神庙，并按你的意愿行动。
神庙是一个活跃的社区。在战斗之外，居民们在各个房间之间移动，进食，洗澡，休息，并参与元提生活中所有邪恶的欺骗行为。你可以使用神庙增援表格来模拟这一切。`},{id:"scn_29d",locationId:"loc_298",name:"进入内部",activation:{condition:{type:"always"},priority:0},skeleton:["两个通往元帝族寺庙的入口位于奥姆王宫的废墟之中。","地图4.1提供了寺庙的概览。","主入口通向地图上的区域1，而秘密入口通向区域23。","冒险者们最有可能以渗透者或俘虏的身份进入神庙。","如果他们已经在第三章中与红袍法师达成了联盟，他们将在神庙的后宫（区域10）寻找扎格米拉的间谍。"],flesh:`两个通往元帝族寺庙的入口位于奥姆王宫的废墟之中。地图4.1提供了寺庙的概览。主入口通向地图上的区域1，而秘密入口通向区域23。

冒险者们最有可能以渗透者或俘虏的身份进入神庙。如果他们已经在第三章中与红袍法师达成了联盟，他们将在神庙的后宫（区域10）寻找扎格米拉的间谍。

人类角色如果穿着和行为得体，可以冒充元帝族纯血，甚至可以将其他角色作为俘虏带入寺庙。他们必须通过欺骗手段通过元帝族守卫。马利森是最容易欺骗的：他们天生对元帝族社会下层的蔑视意味着他们不太关注纯血在寺庙中的行动。

神庙的居民有着难以模仿的种族特征，他们使用一种混合了通用语和龙语的方言交谈。为了避免在交谈时引起怀疑，假装为纯血蛇人的人类角色必须成功通过一次DC 15魅力（欺瞒）检定。

非人类角色在没有魔法帮助的情况下更难欺骗元提。试图伪装成元提纯血的非人类角色在进行伪装的属性检定时会有劣势。

被元提捕获的角色会被剥夺装备，戴上手铐（一套绑定手腕，另一套绑定脚踝），并被关押在区域8的坑中。他们的装备被存放在区域13，直到储藏室的守护者阿兹·马斯能够研究并清点。亚鲁会询问他们有关他们任务的问题。然后，他和他的保镖们会护送角色们去见拉兹·纳斯或芬萨札。

雅胡喜欢政治游戏，利用角色来操纵拉兹·纳斯和芬萨札相互对立。如果他们以平静、礼貌的方式作出反应，他们将被带到芬萨札那里。

拉兹·纳斯在王座厅（区域11）会见囚犯。他想知道角色们为何入侵奥姆。如果他发现他们的回答不满意，他会认为他们很危险，并立即下令处死他们。如果拉兹·纳斯得知他们来是为了结束死亡诅咒，他会感兴趣。如果他们透露原因在于九神之墓，他会释放他们，给他们提供任何剩余的谜题魔方，以便他们进入墓穴，并在他们成功摧毁灵魂收割者的情况下，允许他们安全离开奥姆。他不会进一步帮助他们，因为这可能会激起元帝族的反抗。

芬萨札在她的住处（区域5）会见囚犯。她视角色们为她篡夺拉兹·纳斯权力的棋子。为了确定他们是否值得信赖，她指派他们作为奴隶在奴隶主伊萨尔（区域19）手下工作。伊萨尔根据掷百分骰并查阅奴隶劳动表格来为每个角色分配劳动（多个角色可以被赋予相同的任务）。在执行劳动时，角色们可以看到神庙的运作方式，并可能找到逃脱的方法。

她承诺如果他们同意推翻拉兹·纳斯，就会给他们自由。她还允许他们保留在拉兹·纳斯监管下的任何谜题魔方。如果他们同意，她会给他们军械库的密码（见区域4），并鼓励他们发起一场奴隶起义。她还提出将人类角色通过仪式转变为元提纯血，以便他们可以更接近拉兹·纳斯（见区域9）。

如果政变被挫败，芬萨札和她的同谋将被处死。如果政变成功，芬萨札会得出结论认为角色们已经失去了利用价值，并试图除掉他们。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_fenthaza","npc_sekelok"],availableInfoIds:["info_toa_ras_bargain"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[112],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们在1小时内无法逃脱，他们将被元提间谍大师亚鲁和他的保镖们（见区域17）访问。
如果角色对雅胡的问题回答时表现出愤怒或傲慢，他们将被带到拉兹·纳斯那里。
如果角色们在1天内无事故或抱怨地完成他们的劳动，他们将再次被带到芬萨札面前。
当角色们制造混乱时，她集结了她的守卫和祭司（见区域6和7），伏击拉兹·纳斯，并试图杀死他。
如果角色们在她背叛之前逃跑，芬萨札会派遣她的空气元素（见区域5）去追捕并杀死他们。`,randomTableIds:["tbl_29d_0","tbl_29d_2"],offerableQuestIds:["qst_main_toa"]},{id:"scn_2a5",locationId:"loc_298",name:"神庙内的位置",activation:{condition:{type:"always"},priority:0},skeleton:["地图4.1展示了整个寺庙的布局。","以下特征在整个寺庙中都是常见的。","除非另有说明，房间的天花板高度为20尺，走廊的天花板高度为10尺。","门由加工过的石材制成，底部有4英寸宽的孔洞，沿其间隔排列，以允许中型及更小的蛇通过。","除非另有说明，否则门是未上锁的。"],flesh:`地图4.1展示了整个寺庙的布局。以下特征在整个寺庙中都是常见的。

除非另有说明，房间的天花板高度为20尺，走廊的天花板高度为10尺。

门由加工过的石材制成，底部有4英寸宽的孔洞，沿其间隔排列，以允许中型及更小的蛇通过。除非另有说明，否则门是未上锁的。

油灯在整个建筑群中提供2。每盏灯燃烧着高高的绿色火焰，亮度与火炬相当。

铁制闸门保护着寺庙的某些区域。闸门的铁条厚1英寸，间隔4英寸。闸门可以通过附近的铁杆升起或降下。如果无法触及铁杆，总力量达到30或更高的角色可以强行将其抬起或按下，但这样做会破坏防止闸门坠落的机制。en=Knock法术也可以将关闭的闸门抬起。

寺庙没有楼梯，而是有石制坡道，蛇身的元提发现它们更容易攀爬。

拉兹·纳斯 创建了五个魔法传送器（位于区域8至12），其他人不得使用。每个传送器看起来像是一个凸起的、微弱发光的石盘，上面刻有一个蛇形符文。在en=Detect Magic法术的仔细检查下，每个盘子都散发出咒法魔法的气息。

如果 拉兹·纳斯 踏上其中一个圆盘，他可以从神庙中的任何其他圆盘继续移动。一个精通 奥秘 技能的角色也可以通过踏上传送器并成功通过一次 DC 20 智力（奥秘）检定来做到同样的事情。如果检定成功但角色心中没有目标圆盘，他或她将出现在随机确定的一个圆盘上。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_fenthaza","npc_sekelok"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[114],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_2ad",locationId:"loc_298",name:"主门",activation:{condition:{type:"always"},priority:0},skeleton:["一条宽阔的通道向下倾斜至一对青铜门。","门上的金属装饰着盘绕的蛇形图案，门的头部高度处有一个滑动的小窗。","每扇门的底部都有四英寸宽的孔洞。","当打开时，青铜门滑入隧道两侧的壁龛中。","要拉开这些门，Nahth指挥下的元提守护者在门的南侧拉动沉重的链条。"],flesh:`当打开时，青铜门滑入隧道两侧的壁龛中。要拉开这些门，Nahth指挥下的元提守护者在门的南侧拉动沉重的链条。要绕过这些门而不打开它们，恶咒蛇人变身为蛇，从门底部的洞中滑过。

一个名叫Nahth（发音为NAWTH）的类型1 恶咒蛇人和四名原体卫雏蛇人（见附录D）守卫着主门。除非由一个或多个元提陪同，否则不允许陌生人进入。

Nahth非常贪婪。在允许角色通过大门后，他要求以食物（最好是肉类）或财宝（最少10金币）的形式贿赂。在这里进行战斗会从区域2吸引援军。

主门之外有三个被铁栅覆盖的坑。当敌人攻击时，守卫们会移开栅栏盖，并在敞开的坑的南侧形成一道防御线。每个坑宽5英尺，深10英尺，里面充满了毒蛇群。每个坑的墙壁过于光滑，没有装备或魔法的帮助无法攀爬。一个生物可以通过成功进行DC 10敏捷（特技）检定来绕过坑的边缘，但如果检定失败则会掉入坑中。一个生物也可以尝试通过原地跳跃或助跑跳跃来跨过坑，前提是对面没有守卫排成一列。

Nahth有一个鳄鱼皮袋，里面装有28金币，并佩戴着雕刻成蝙蝠形状的金色仪式护腕（一对价值150金币）。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2ad"],treasureSlotIds:["trs_2ad_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[114],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"一条宽阔的通道向下倾斜至一对青铜门。门上的金属装饰着盘绕的蛇形图案，门的头部高度处有一个滑动的小窗。每扇门的底部都有四英寸宽的孔洞。",dmGuidance:`如果角色从北方接近这个区域，请阅读：
如果角色拒绝支付，Nahth会与他们发生冲突。`},{id:"scn_2b1",locationId:"loc_298",name:"战争大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个大厅有20尺高的天花板，由四根雕刻着蛇形浮雕的柱子支撑着，大厅中央是一座18尺高的盘绕眼镜蛇雕像，面向北方。","墙上闪烁着绿色火焰的火把，空气中弥漫着粪便的臭味。","两辆马车停在一个角落，另一角落则是一个金属围栏中关着的三角龙。","向西是一对昏暗的凹室，向南则是一个宽阔的、有柱子的大厅。","元提军队在进入城市之前在这座大厅集结。"],flesh:`元提军队在进入城市之前在这座大厅集结。除非他们被吸引到其他地方，否则名为Soakosh（发音为SOH-kawsh）的一位纯血原体蛇人和四位原体卫雏蛇人（见附录D）驻扎在这里。两只被锁链拴在西边壁龛的钩子上的石化蜥蜴被训练成不直视他们的元提主人的眼睛。嚼碎的石头碎片（石化受害者的残骸）散落在壁龛的地板上。被关在西北角金属围栏里的三角龙在受到威胁之前都很温顺。元提用它来拉补给车。

Soakosh 很胖，舌头分叉。他很少不带他最喜欢的食物在身边：糖渍格隆蛋。

如果警报响起，Soakosh命令育幼守卫从挂钩上解开蛇怪并将它们像战犬一样带入战斗。如果警报没有响起但这里发生了战斗，一名育幼守卫会跑去敲响区域9的锣。

如果三角龙受到火的威胁或被攻击伤害，它会撞破围栏的墙壁，朝区域1方向前进。

这座雕像并不危险。角色可以通过一次成功的DC 15力量（运动）检定来攀爬它。

东北角的补给马车是空的。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2b1"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这个大厅有20尺高的天花板，由四根雕刻着蛇形浮雕的柱子支撑着，大厅中央是一座18尺高的盘绕眼镜蛇雕像，面向北方。墙上闪烁着绿色火焰的火把，空气中弥漫着粪便的臭味。两辆马车停在一个角落，另一角落则是一个金属围栏中关着的三角龙。向西是一对昏暗的凹室，向南则是一个宽阔的、有柱子的大厅。"},{id:"scn_2b5",locationId:"loc_298",name:"3. 蛇厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个有柱子的大厅的墙壁上刻有一条巨大蛇和它的元提崇拜者做可怕事情的浮雕。","墙上的浮雕展示了夜蛇Dendar的传说和拉兹·纳斯的崛起。","角色们如果仔细查看，会看到以下场景：","一条巨蛇在冥界盘旋，吞噬着睡眠生物的梦想。","元提恐吓楚尔坦人，将他们的噩梦喂给那条巨大的蛇。"],flesh:`墙上的浮雕展示了夜蛇Dendar的传说和拉兹·纳斯的崛起。角色们如果仔细查看，会看到以下场景：

一条巨蛇在冥界盘旋，吞噬着睡眠生物的梦想。

元提恐吓楚尔坦人，将他们的噩梦喂给那条巨大的蛇。

一个恶咒蛇人（拉兹·纳斯），手持火焰剑，头戴镶有黑色蛋白石的金冠，带领蛇族人走向通往冥界的大门。

通往冥界的门打开了，释放了那条蛇。它吞噬了太阳，使世界陷入恐怖和黑暗之中。

一名角色若在浮雕中搜索并成功通过一次 DC 15 感知（察觉）检定，会发现 拉兹·纳斯 王冠上的黑欧珀是一颗石制按钮。如果检定的结果比 DC 高 5 或更多，该角色还会看到在夜蛇雕刻的鳞片中隐藏的微小孔洞。

如果一个角色按下了 拉兹·纳斯 皇冠上的按钮，夜蛇的雕刻会释放出一种催眠气体，充满走廊并持续1分钟。任何进入气体或在其范围内开始回合的生物必须进行一次 DC 13 体质豁免。气体对无法 中毒 的生物没有影响，而那些豁免失败的生物会陷入 昏迷 状态1小时。使用布或蜡，角色可以堵住数百个小孔，阻止气体流出。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_fenthaza","npc_sekelok"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个有柱子的大厅的墙壁上刻有一条巨大蛇和它的元提崇拜者做可怕事情的浮雕。"},{id:"scn_2b7",locationId:"loc_298",name:"军械库",activation:{condition:{type:"always"},priority:0},skeleton:["军械库的门被施放了 en=Arcane Lock 法术。",'官方来说，只有 拉兹·纳斯、瑟克洛克 和 芬萨札 知道绕过该法术的指令短语（"白色羽毛"）。',"站在门5英尺之内说出指令短语，可在1分钟内压制其魔法，在此期间门可以正常打开。","这个金库的架子上堆满了闪亮的弯刀、蛇形头盔和鳞甲。","大骨头和有角的头骨散落在地板上，远处的墙上挂着一个用龟壳制成的盾牌。"],flesh:`军械库的门被施放了 en=Arcane Lock 法术。官方来说，只有 拉兹·纳斯、瑟克洛克 和 芬萨札 知道绕过该法术的指令短语（"白色羽毛"）。站在门5英尺之内说出指令短语，可在1分钟内压制其魔法，在此期间门可以正常打开。该门也可以通过 en=Knock 法术或成功的 DC 25 力量（运动）检定强行打开。

一个名叫Ukurlahmu（发音为oo-ker-LAH-moo）的骸骨纳迦接到命令保护军械库不受小偷侵害，但它很难记住面孔。它只会攻击那些没有说出正确口令的生物。当前的口令是"黑色面具"。角色们有三次机会说出正确的短语，否则Ukurlahmu会攻击。在攻击之前，骸骨纳迦会使用附赠动作说出一个魔法命令词，使两个骷髅牛头人从地板上的骨头中升起。这些骷髅服从骸骨纳迦。

Ukurlahmu说话很奇怪。当它提出问题或发出要求时，它总是以"It will..."或"They will..."（例如，"It will告诉我们它为什么在这里以及它想要什么。"）作为每个句子的开头。当它发表声明或回答问题时，它总是以"...so Ukurlahmu has spoken."结束句子。

军械库包含十套鳞甲，五十把弯刀，二十张长弓，二十张短弓，以及五十个箭袋，每个箭袋含有二十支箭。一个en=Detect Magic法术揭示了挂在墙上的盾牌周围的变形魔法光环。这个盾牌有一个轻微的魔法属性：盾牌持有者说出的话会被放大，听起来比正常声音大十倍。

龟壳盾牌属于瑟克洛克，只有他被允许触碰它。如果一个角色将盾牌从墙上取下，Ukurlahmu会冷静地要求将其放回挂钩，如果这个指示被忽视，它将发起攻击。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_sekelok","npc_fenthaza"],availableInfoIds:[],encounterIds:["enc_2b7"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`这个金库的架子上堆满了闪亮的弯刀、蛇形头盔和鳞甲。大骨头和有角的头骨散落在地板上，远处的墙上挂着一个用龟壳制成的盾牌。
一条大型的骨骼蛇从架子后面滑出，抬起它的头，用通用语说道："他们会告诉我们口令的！So Ukurlahmu如是说。"`,dmGuidance:"当角色向内看时，请阅读："},{id:"scn_2ba",locationId:"loc_298",name:"5. 芬萨札的住处",activation:{condition:{type:"always"},priority:0},skeleton:["两个第二型恶咒蛇人在房间外的走廊上站岗。","走廊中的战斗会提醒区域6的元提守护者，它们将在1回合内到达。","房间可以这样描述：","室内弥漫着香烟的薄雾。","墙壁上装饰着褪色的壁画，地板上散布着抛掷地毯和靠垫。"],flesh:`两个第二型恶咒蛇人在房间外的走廊上站岗。走廊中的战斗会提醒区域6的元提守护者，它们将在1回合内到达。房间可以这样描述：

芬萨札，一位蛇人梦魇语者（见附录D），在这里潜伏。如果警报响起，芬萨札依靠她的守卫来保护她，同时她释放了困在石瓮中的生物（见下文）。芬萨札试图使入侵者失去行动能力，并将他们关押到区域8。一个特别令人讨厌的敌人可能会被铐在区域6的祭坛上，在那里她可以随意折磨它。

作为神庙中较为强大的人物之一，芬萨札在他们的怪物领袖死后统治了元提，并执行了将拉兹·纳斯转变为咒诅者的仪式。最近，她的视觉幻象使她开始怀疑拉兹·纳斯的能力。作为回应，拉兹·纳斯开始将权力让给他的冠军，瑟克洛克（见区域12）。

这个石制骨灰瓮高4英尺，重250磅。它的石制盖子重25磅。骨灰瓮中困着一个气元素，它服从于芬萨札。如果骨灰瓮的盖子被芬萨札以外的人打开，风元素会飞出来并发动攻击。

芬萨札 利用元素生物追捕并杀死逃脱的囚犯。一旦完成任务，元素生物总是返回其女主人那里。

芬萨札 携带着一串钥匙，可以打开区域8中囚犯所戴的手铐和脚镣。她的脖子上挂着夜蛇Dendar的圣徽（价值25金币）。

箱子没有上锁，里面有200金币，一个黑色皮制箭袋，上面绣有镶嵌石英的星图（75金币），还有一把仪式用匕首，装在金鞘中，上面浮雕着丛林动物奔腾的场景（25金币）。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2ba"],treasureSlotIds:["trs_2ba_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[117],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"室内弥漫着香烟的薄雾。墙壁上装饰着褪色的壁画，地板上散布着抛掷地毯和靠垫。一个雕刻精细的箱子放在角落里，旁边是一个覆盖着蛇形雕刻的石瓮。一个生物盘绕在房间中央，它有着深色皮肤女性的头部和上半身，以及蛇的下半身。",mapGeometry:{imageRef:"adventure/ToA/063-403.webp"}},{id:"scn_2be",locationId:"loc_298",name:"祭祀室",activation:{condition:{type:"always"},priority:0},skeleton:["除非被区域5战斗的声音吸引，否则四名原体卫雏蛇人（见附录D）在这个房间里站岗，每个角落一个。","这个房间中央有一个血迹斑斑的祭坛。","祭坛顶部固定着镣铐，两侧雕刻有壁龛。","每个壁龛内都放着一个人头骨。","凹槽从祭坛延伸至地面的排水沟，使溢出的血液可以流入墙壁。"],flesh:`除非被区域5战斗的声音吸引，否则四名原体卫雏蛇人（见附录D）在这个房间里站岗，每个角落一个。

芬萨札 经常在祭坛上献祭囚犯。当他们死去时，他们的血会流入区域9的池中。一个被俘的角色如果侮辱或以其他方式激怒芬萨札，最终可能会被铐在祭坛上。

祭坛有六个壁龛（每端一个，每长边两个）。在en=Detect Magic法术的检查下，每个壁龛中的人头骨散发出防护魔法的气息。如果在这里发生战斗，头骨会开始用深渊语吟唱。当头骨从它们的壁龛中移除或战斗结束时，头骨会停止吟唱。每个头骨的AC为9，1点生命值，并对毒素和心灵伤害免疫。只要有一个或多个头骨在吟唱，房间里的所有元提都会获得以下好处：

对来自非魔法攻击的钝击、刺穿和挥砍伤害具有抗性

对法术和其他魔法效果的豁免检定有优势

一个吊闸封闭了通往区域8的入口。一个青铜杠杆嵌入在门南侧的墙壁上，从区域8看不见。拉起杠杆会升起吊闸，拉下杠杆则会使吊闸落下。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2be"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[117],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这个房间中央有一个血迹斑斑的祭坛。祭坛顶部固定着镣铐，两侧雕刻有壁龛。每个壁龛内都放着一个人头骨。凹槽从祭坛延伸至地面的排水沟，使溢出的血液可以流入墙壁。陶瓮里溢出着湿骨和血肉。"},{id:"scn_2c2",locationId:"loc_298",name:"邪恶预言者",activation:{condition:{type:"always"},priority:0},skeleton:["蒸汽从一个装满粘性黑色和紫色液体的石盆中升起。","三个蛇形生物围绕着水池。","每个生物都有深色皮肤女性的头部和上半身，以及蛇的下半身。","蛇发教徒使用这个水池与夜蛇Dendar交流。","名叫Arakiti、Kultha和Nyss的三位牧师始终在这里。"],flesh:`蛇发教徒使用这个水池与夜蛇Dendar交流。名叫Arakiti、Kultha和Nyss的三位牧师始终在这里。他们忠于芬萨札，并且是类型3恶咒蛇人，有以下变化：

在蛇人可随意施放的法术列表中添加以下法术：en=Eldritch Blast（2束；+5命中；每束1d10 + 3力场伤害）、en=Minor Illusion和en=Poison Spray。

它们没有携带长弓。

池中的污泥传导着夜蛇登达尔的幻象。进入污泥或在其上开始回合的生物会受到5点（1d10）心灵伤害。

任何凝视池水超过数秒的生物都会接收到一段短暂的噩梦般的幻象。在这个幻象中，生物被一只巨蛇整个吞下。幻象结束时，该生物必须进行一个DC 15的感知豁免检定。如果检定失败，该生物受到5（1d10）点心灵伤害，并遭受一种随机的长期疯狂效果。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2c2"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"蒸汽从一个装满粘性黑色和紫色液体的石盆中升起。三个蛇形生物围绕着水池。每个生物都有深色皮肤女性的头部和上半身，以及蛇的下半身。",dmGuidance:`【元提人的囚犯】元提的俘虏如果没有被当作奴隶使用，就会被关在牢房里，直到他们可以被献祭给夜蛇Dendar。下面描述了十个样本囚犯，你可以创造其他囚犯。所有囚犯的手腕和脚踝上都戴着手铐（见区域8了解详细信息）。除非另有说明，他们都被剥夺了盔甲和武器。所有人都寻求逃离寺庙，回到他们的家园或返回文明社会。
塔沃，一个十岁的男孩（LG男性楚尔坦人非战斗人员，AC 10，2点生命值），戴着花环，不断地向Tymora祈祷。
塞夫，一个除了分叉的舌头外看起来像人类的纯血原体蛇人，正在遭受蓝雾热（见"疾病"）的影响，并且向只有他能看到的虚幻蓝猴子扔石头。
奥洛玛·奥瑟达玛（CG女性图拉米人斥候）是星女神号（见第二章）的前船员。当船坠毁时，她从一个舷窗跳下，元提在丛林中捕获了她。奥洛玛携带了一把隐藏的匕首。
陶器碎片，一个斑猫诗人（见附录D），在从南扎路港前往贝路利安堡的途中被绑架。
Gorvax，一个火蝾螈武者（见附录D）渴望逃脱并返回失落荣耀谷。
一位名叫洛玛尔·德拉尔（守序善良男性图拉米人人类魔法师且没有剩余法术位）的竖琴手。在南扎路港寻找阿图斯·辛贝尔时，他被原体蛇人向导萨莉达下药，醒来后成为了奥姆的囚犯。
芒格，一个巴提里地精，在丛林中觅食时被元提捕获。他营养不良，遭受着3级的力竭（见《玩家手册》中的附录A）。
卡努什·纳通贝（N男性楚尔坦人部族武者）愚蠢地前往奥穆，向另一个人证明自己的价值。卡努什营养不良，遭受着4级的力竭。
齐拉·阿塔齐（LE女性楚尔坦人匪徒）曾是龙牙号上的海盗。由于不服从命令，船长伊洛克·加哈望将齐拉扔下了船。她在被冲上岸后被元提捕获。`},{id:"scn_2c6",locationId:"loc_298",name:"8. 囚犯坑",activation:{condition:{type:"always"},priority:0},skeleton:["一个铁制的格栅门封闭了这个房间。","升起它的扳手位于区域6。","被元提捕获的角色被关押在这里。","如果这是角色们首次到达的方式，请阅读：","汗水的恶臭弥漫在潮湿的空气中。"],flesh:`一个铁制的格栅门封闭了这个房间。升起它的扳手位于区域6。

被元提捕获的角色被关押在这里。如果这是角色们首次到达的方式，请阅读：

房间里包含四个深坑，每个深坑都是一个钟形的地下室，深10英尺，直径10英尺。深坑被淹没了3英尺深。每个深坑上覆盖着一个600磅重的圆形铁栅栏，需要总力量值至少为20的一个或多个角色才能抬起。或者，一个角色可以使用每个深坑附近的铁绞盘，通过成功的 DC 12 力量检定来升起或降下盖子。攀爬深坑湿滑的斜坡墙壁需要 DC 25 力量（运动）检定。

新囚犯被锁链束缚并被随意投入一个坑中。元提剥去所有囚犯的财物，这些财物被存放在储藏室（区域13）中，直到它们被适当地清点。如果元提需要将囚犯从坑中取出，他们会从盖子上断开一个钩子，并用它通过手铐将囚犯吊起来。

每个坑里关着1d3名囚犯，而"元提人的囚犯"边栏描述了几个。

囚犯被迫在手腕上戴上手铐，脚踝上戴上脚镣。手铐会使攀爬或游泳的技能检定处于劣势。脚镣会使囚犯的行走速度减半，并且跳跃的技能检定处于劣势。芬萨札（见区域5）持有这些束缚的钥匙。

北边壁龛中雕刻的石盘是拉兹·纳斯的魔法传送器之一（见"传送装置"）。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`汗水的恶臭弥漫在潮湿的空气中。你被锁在阴暗、部分被水淹没的坑洞墙壁上。附近的其他囚犯在微弱的火把光芒中呜咽，这些火把来自上面的洞口。

从四个覆盖着圆形铁格栅的坑中传来压抑的哭泣和呻吟声。每个格栅上挂着的链条穿过固定在天花板上的滑轮，缠绕在一个嵌入附近墙壁的铁绞盘上。南墙上挂着铁手铐。向北，一个微弱发光的石盘覆盖在一个空荡荡的壁龛的地面上，石盘顶部刻有一个蛇形符号。`,dmGuidance:`如果角色通过吊闸向这个房间内窥视，请使用以下描述：
如果玩家角色死亡，你可以在这里引入一个替代角色作为希望被救援的囚犯。
有关破坏、逃脱和打开手铐（和脚镣）的规则，请参见《玩家手册》第5章中的"冒险用品"。`},{id:"scn_2ca",locationId:"loc_298",name:"圣所",activation:{condition:{type:"always"},priority:0},skeleton:["一个地下大教堂展现在你们面前。","在一端，一个雕塑阳台坐落在五条昂首的石蛇之上。","从蛇的下巴滴下的血滴落入一个半圆形的水池中，然后沿着一个倾斜的槽流进嵌入地板的一个宽阔的石碗中。","在碗的南侧是一个夹层，上面显眼地放着一个冒着热气的大锅，散发着肉味。","在西侧，一个雕刻着蛇形图案的巨大锣悬挂在第二个阳台上。"],flesh:`在仪式期间，神殿里满是元帝族，但其他时候房间无人守卫。敲击时，锣声可以传遍整个寺庙建筑群。一声锣响宣布蛇类仪式的开始：敲响时，寺庙建筑群内的所有元帝族会在半小时内聚集到这里。连续快速敲击两声或更多声则是警报信号：敲响时，寺庙中的元帝族会尽可能快地聚集到这个位置（见寺庙人员名单表）。

在区域6中流淌的血液被导入这个房间，中央的池子里积有3d6英寸粘稠、多日的血液，来自之前的祭祀。元蒂有时会在血液中打滚，有时奴隶们会被带到这里，被疯狂的狂欢者活活吃掉，或者被转化成元蒂（见下文"元提仪式"）。

一锅用煮熟的肉制成的炖菜在锅中翻滚，锅底下的火山喷口加热着它。翻倒这口锅需要成功通过一次 DC 15 力量检定。当锅被推翻时，位于锅周围15英尺锥形区域内的每个生物必须进行一次 DC 12 敏捷豁免，豁免失败会受到 4 点 (1d8) 火焰伤害，成功则只受到一半伤害。

拉兹·纳斯 和 芬萨札 使用北侧阳台对下属发表讲话。要爬上去，角色必须通过一个 DC 13 力量（运动）检定。阳台周围的栏杆为来自下方房间的远程攻击提供了 3。

后墙上嵌入了一个壁龛，壁龛内有一块刻有图案的石盘在地面上——这是拉兹·纳斯的魔法传送器之一（见"传送装置"）。

一个铁栅门封闭了通往区域10的入口。一个铜制扳手设置在门北边的墙壁上，从区域10看不见。拉起扳手会升起铁栅门，拉下扳手则会使铁栅门落下。

每十天一次，元提聚集在神庙进行一个堕落的仪式。仪式在一夜之间进行，期间只有少数守卫守护着寺庙的其他区域。

在仪式期间，墙上的烛台燃烧着迷人的熏香。（有关熏香的更多信息，请见区域13。）芬萨札从北阳台向会众宣讲。当仪式达到高潮时，她加入血池中的狂欢者，享用奴隶，然后滑回她的住处。偶尔，人类奴隶在这些仪式中被转变为眼魔族纯血或后代守卫。要经历这种变化，奴隶们必须在寺庙药物的影响下，在牺牲者的血中与蛇一起沐浴。这种转变使每个奴隶得到1d6级的力竭状态。一旦他们蜕去旧皮，那些在过程中幸存下来的人将被带到眼魔族巢穴（区域18）的新家中恢复。那些死去的人则被喂给区域21中的多头蛇。

芬萨札可以安排被捕获的人类角色被转变为元帝族纯血，以便他们能够在寺庙建筑群内自由漫游，并更接近拉兹·纳斯。这种转变只能通过en=Wish法术或神明的干预来撤销。经历并幸存下来的角色会获得一种随机的不定性疯狂。经历并幸存下来仪式的人类将保留其特征，并获得以下元帝族种族特征。

你可以在60尺内将2视为2，将黑暗视为2。在黑暗中你无法分辨颜色，只能看到灰度阴影。

你习得戏法en=Poison Spray。你可以通过此特质无限制地施放en=Animal Friendship，但以此施放的法术目标只能是蛇。从3级开始，你还可以通过此特质施放en=Suggestion。一旦你施放了它，在你完成一次长休前无法再次施放。魅力是你这些法术的施法属性。

你在对抗法术和其他魔法效果时进行的豁免检定具有优势。

你免疫毒素伤害和中毒状态。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_fenthaza","npc_sekelok"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"一个地下大教堂展现在你们面前。在一端，一个雕塑阳台坐落在五条昂首的石蛇之上。从蛇的下巴滴下的血滴落入一个半圆形的水池中，然后沿着一个倾斜的槽流进嵌入地板的一个宽阔的石碗中。在碗的南侧是一个夹层，上面显眼地放着一个冒着热气的大锅，散发着肉味。在西侧，一个雕刻着蛇形图案的巨大锣悬挂在第二个阳台上。"},{id:"scn_2d5",locationId:"loc_298",name:"10. 后宫",activation:{condition:{type:"always"},priority:0},skeleton:["一个铁制吊闸封闭了这个房间的入口。","要升起它，生物必须在区域9拉起一个杠杆。","前方地面上，一股凉爽的泉水在冒泡。","空气中弥漫着百合花的香气，丝绸帷幔在热气中懒洋洋地飘动。","拱门通向阴凉的包厢，包厢里堆满了垫子和盛满糖果的托盘。"],flesh:`一个铁制吊闸封闭了这个房间的入口。要升起它，生物必须在区域9拉起一个杠杆。

拉兹·纳斯的妃子们在这些房间里过着奢侈的生活。十一个纯血原体蛇人和一个伪装成纯血的变形怪组成了后宫。两个原体卫雏蛇人（见附录D）全天候看守后宫。

拉兹·纳斯 过去常常在这里消磨很多时间，享受后宫的愉悦。自从死亡诅咒降临在他身上后，他就隐居在别处。纯血族既不帮助也不阻碍角色们，他们害怕拉兹·纳斯，所以不会自愿背叛他。尽管拉兹·纳斯努力隐藏死亡诅咒的影响，但妃子们知道他生病了，快要死了。

拉兹·纳斯的元提冠军瑟克洛克（见区域11）对妃子尼玛着迷，并在深夜拜访她，这可能导致灾难。尼玛胁迫其他妃子掩盖她的事情。

这个变形怪通过杀死并假扮一个名叫Ishmakahl（发音为ISH-mah-kawl）的男性元提纯血族，潜入了寺庙。它是由红袍法师Zagmira派来监视拉兹·纳斯的。不幸的是，对于它的雇主来说，自从到达神庙以来，变形怪与拉兹·纳斯接触甚少；然而，它通过偷听瑟克洛克和Neema的亲密对话，已经了解到了一些信息。

Ishmakahl 看起来是一个英俊的楚尔坦男子，有着蛇一样的眼睛。Ishmakahl 知道寺庙的布局，并知道在王座厅（区域11）某个地方有一扇秘密门通向拉兹·纳斯的巢穴。这个变形怪还知道可以通过神殿的传送器到达拉兹·纳斯的巢穴，尽管它不知道如何激活它们。它建议角色们在瑟克洛克下次访问后宫时闯入巢穴。

Ishmakahl 正在秘密考虑投靠元提族。如果它的计划有任何反效果的迹象，变形怪就会向拉兹·纳斯或瑟克洛克显露真身，并警告他有关入侵者的事情。

东侧的包厢内有一个凹室，地面上嵌着一个微弱发光的石盘，上面刻有蛇形符号。这是拉兹·纳斯的魔法传送器之一（见"传送装置"）。

角色们洗劫这些房间会获得以下宝物：一顶由两条交织在一起的蝰蛇形状制成的白金头冠，上面镶嵌着托帕石眼睛（750金币），一个翡翠制成的捕蝇草形状的小饰品盒，周围环绕着卷曲的金叶子（250金币），以及一对金色眼镜蛇形状的烛台（每个75金币）。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_sekelok","npc_fenthaza"],availableInfoIds:[],encounterIds:["enc_2d5"],treasureSlotIds:["trs_2d5_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"前方地面上，一股凉爽的泉水在冒泡。空气中弥漫着百合花的香气，丝绸帷幔在热气中懒洋洋地飘动。拱门通向阴凉的包厢，包厢里堆满了垫子和盛满糖果的托盘。十几个穿着暴露的人形生物懒散地躺在那里，他们的眼睛像蛇一样，手臂、腿、脖子和背部有鳞片斑块。一对非人的双足爬行动物在看守着他们。",dmGuidance:"如果角色们代表红袍法师与变形怪取得联系，它会提出帮助他们从拉兹·纳斯的巢穴（区域12）中偷取任何谜题魔方。"},{id:"scn_2da",locationId:"loc_298",name:"宝座室",activation:{condition:{type:"always"},priority:0},skeleton:["四根柱子支撑着拱形天花板，台阶通向一个雕刻成多头蛇形状的铁制宝座。","宝座后面的墙上画着一个巨大的蓝色三角形。","在南侧，一个凹室的地面上嵌着一个雕刻的石盘。","东墙上一个十尺宽的开口通向一个被水淹没的洞穴。","这个房间的居住者由情况决定："],flesh:`这个房间的居住者由情况决定：

在白天，拉兹·纳斯（见附录D）在宝座上"坐着"同时向两个类型1恶咒蛇人提供咨询。站在房间中央的是拉兹·纳斯的冠军瑟克洛克（见下文），以及三名原体卫雏蛇人（见附录D）。藏在宝座后面的是四个服从拉兹·纳斯命令的食尸鬼们。每个食尸鬼的额头上都纹有一个蓝色的三角形。

晚上，拉兹·纳斯退居到区域12，留下其他元帝族（包括瑟克洛克）和小食尸鬼在此。瑟克洛克有时会偷偷前往后宫（区域10）。

如果区域9中的锣被敲响，瑟克洛克和其他元提人会离开去调查，而食尸鬼会藏在宝座后面，拉兹·纳斯则撤退到区域12。

瑟克洛克是一个高大、肌肉发达的元帝族纯血。他的属性为勇士（见附录D），有以下变化：

瑟克洛克 是中立邪恶。

他不穿戴盔甲，但他的鳞片坚硬如钢（AC 18）。

他对毒素伤害和中毒状态免疫。

他具有达到60尺范围的黑暗视觉。

他讲深渊语、通用语和龙语。

他在对抗法术和其他魔法效果的豁免检定上具有优势。

他具有以下描述的天生施法特性。

瑟克洛克 是 拉兹·纳斯 的信任保镖，并且以屠杀主人的敌人为乐。拉兹·纳斯 喜欢强迫那些冒犯他的人与 瑟克洛克 决斗，要么是第一次划伤，要么是至死。

瑟克洛克与Neema有秘密恋情，Neema是拉兹·纳斯的一位妃子（见区域10）。他的动机很混乱：尽管他坚定地忠于拉兹·纳斯，但这种欺骗行为助长了他的自负。如果拉兹·纳斯发现这段恋情，他会活活剥皮背叛者，并将他们喂给他的宠物九头蛇（见区域21）。

北墙西角的一扇密门通往 拉兹·纳斯 的巢穴（区域12）。要找到这扇密门，角色必须在搜索墙壁时成功通过一个 DC 16 感知（察觉）检定。

南边壁龛中雕刻的石盘是拉兹·纳斯的魔法传送器之一（见"传送装置"）。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_sekelok","npc_fenthaza"],availableInfoIds:[],encounterIds:["enc_2da"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"四根柱子支撑着拱形天花板，台阶通向一个雕刻成多头蛇形状的铁制宝座。宝座后面的墙上画着一个巨大的蓝色三角形。在南侧，一个凹室的地面上嵌着一个雕刻的石盘。东墙上一个十尺宽的开口通向一个被水淹没的洞穴。",dmGuidance:`【瑟克洛克】瑟克洛克的施法能力基于魅力（法术豁免 DC 13）。他可以天生施放以下法术，且无需任何材料组件：
随意：en=Animal Friendship（仅限蛇类）、en=Poison Spray
每天3次：en=Suggestion
如果角色被告知密门的存在，他们在该技能检定上获得优势。`},{id:"scn_2e1",locationId:"loc_298",name:"12. 拉兹·纳斯的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["在这个奢华的卧室里，阴影在跳动。","靠垫堆放在一个角落里，装饰性的盾牌排列在墙壁上。","财宝堆积在房间各处：金币和银币；","镶嵌宝石的酒瓶；","以及精致的衣物随意搭在木制人体模型上。"],flesh:`在夜晚，拉兹·纳斯（见附录D）在此休息，正逐渐被死亡诅咒消耗着他的力量。如果敌人将拉兹·纳斯逼入绝境，盾牌会从墙壁飞出保护他（见下文的"飞行盾牌"）。在清醒的时候，拉兹·纳斯只有在处于危险时才会返回这里。

拉兹·纳斯 正在慢慢地腐烂至死。他不知道这种痛苦的原因，也没有办法治愈它。

在他死之前，拉兹·纳斯想要召唤出夜蛇神丹达尔并毁灭世界。

元帝族相信在火焰之峰的某个地方有一扇上锁的门，阻止了丹达尔进入这个世界。阿瑟瑞克承诺帮助拉兹·纳斯打开这扇门，召唤出夜蛇。作为回报，拉兹·纳斯守护着九神之墓。

需要九个石质谜题魔方才能进入九神之墓。拉兹·纳斯不知道如何使用这些魔方来解开墓穴的锁。

墓穴入口被一座方尖碑标记。（拉兹·纳斯可以提供方向和/或护送。）

阿瑟瑞克在奴役奥姆城的居民之前，先杀死了九位神明，他利用这些居民建造了自己的墓穴。

作为附赠动作，拉兹·纳斯可以说出命令词（"Ssilum"），这会让五面盾牌从墙壁上飞出并围绕他悬浮。当它们处于激活状态时，拉兹·纳斯的护甲等级（AC）获得+10的加值。如果通常会击中拉兹·纳斯的攻击被盾牌挡住，那么一面盾牌会被击中并失能，掉落到地面，使拉兹·纳斯的AC加值减少2。当没有更多的活跃盾牌时，效果结束，拉兹·纳斯在完成一次长休之前不能再使用这个能力。一个en=Detect Magic或类似的效果会揭示盾牌周围的变形魔法气息。只有拉兹·纳斯能激活这些盾牌，并且效果仅限于这个房间。

东边壁龛中雕刻的石盘是拉兹·纳斯的魔法传送器之一（见"传送装置"）。

拉兹·纳斯挥舞一把焰舌长剑，并携带一块短讯石。伴生石在萨莉达的的手中（见"寻找向导"）。

拉兹·纳斯的巢穴里藏有来自遥远之地的财宝。收藏品包括一个散提亚酒瓶（50金币），一件镶有宝石的安姆尼亚夹克配相同钱袋（75金币），一件精致的科米尔披风（100金币），一把镀金的月亮海竖琴（250金币），以及三个覆盖着图拉米丝绸的大靠垫（每个25金币）。在其中一个靠垫下隐藏着拉兹·纳斯的皮革装订魔法书，其中包含了他准备的所有法术（见附录D）。除此之外，他的宝藏中还包括一个陶罐中装有三十颗50金币的宝石，一个未上锁的木箱中有150白金币，地板上散落着350金币和900银币，以及一个用彩绘木头制成的蛙兽小雕像，眼睛是用三颗紫水晶宝石制成的（每颗100金币）。

如果拉兹·纳斯从奥姆的神祠中拿走了一个或多个谜题魔方，它们可以在他宝藏中的物品里找到。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_acererak","npc_salida","npc_fenthaza","npc_sekelok"],availableInfoIds:["info_toa_ras_bargain"],encounterIds:[],treasureSlotIds:["trs_2e1_0"],eventIds:["evt_toa_ras_bargain"],tone:"exploration",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在这个奢华的卧室里，阴影在跳动。靠垫堆放在一个角落里，装饰性的盾牌排列在墙壁上。财宝堆积在房间各处：金币和银币；镀金的竖琴；镶嵌宝石的酒瓶；丝质的枕头；以及精致的衣物随意搭在木制人体模型上。向东，一个雕刻的石盘嵌在壁龛的地板上。向西，墙上安装着一块矩形的钢板，擦得像镜子一样光亮。",dmGuidance:"如果角色们击败了拉兹·纳斯并审问他，为了自保，他会透露以下信息：",offerableQuestIds:["qst_main_toa"]},{id:"scn_2e7",locationId:"loc_298",name:"13. 储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["西南侧的双扇门被锁上了。","坚固的木箱堆、布包和陶土双耳瓶散落在地板上。","从上界收集的物资储存在这个房间里。","一只名叫阿兹·玛斯的巨蟒蛇担任这些物资的保管员。","当有新鲜的货物到达时，阿兹·玛斯会亲自检查它们并进行精神分类。"],flesh:`西南侧的双扇门被锁上了。使用盗贼工具，角色可以通过一次成功的DC 15敏捷检定来撬开锁。

从上界收集的物资储存在这个房间里。一只名叫阿兹·玛斯的巨蟒蛇担任这些物资的保管员。当有新鲜的货物到达时，阿兹·玛斯会亲自检查它们并进行精神分类。其余时间，他则会蜷缩在阴影中。这条蛇感到无聊并喜欢与来访的蛇人聊天。如果其他生物从西南方进入，阿兹·玛斯会伏击他们并试图挟持人质。如果处于劣势，他会哀嚎并请求怜悯。

很久以前，一位丛林德鲁伊对阿兹·玛斯使用了en=Awaken法术，赋予了他10的智慧值并能够说通用语。在法术的持续时间内为他服务后，这条蛇蜿蜒前行，找到了通往奥姆的路。阿兹·玛斯有很好的记忆力；他能记住名字和面孔，并且如果看到不熟悉的元帝族通过，他会迅速警告他的主人。

储藏室里有五十卷布；六箱青铜条；三桶盐和香料；以及三个装有绳索、油、灯笼、纸和毯子的箱子。从这些物资中，角色们可以组装出足够的装备来制作五个探险者背包。

现场还有一个密封的盒子，里面装有十块寺庙香。点燃一块香会产生一团朦胧的烟雾，形成一个直径20英尺的球体，并随着香的移动而移动。任何在烟雾中开始回合并呼吸空气的生物必须成功通过一个 DC 16 体质豁免检定，否则会陷入一种带有噩梦般景象的梦幻恍惚状态。尽管生物保持清醒，但它会 中毒。即使是蛇人也无法免疫这种效果，这种效果会在生物离开烟雾后持续1小时，或者直到它受到一个 en=Lesser Restoration 或类似的魔法影响。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2e7"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"坚固的木箱堆、布包和陶土双耳瓶散落在地板上。"},{id:"scn_2eb",locationId:"loc_298",name:"毒液蒸馏厂",activation:{condition:{type:"always"},priority:0},skeleton:["南门被锁住了，锁具中隐藏着一个巧妙设计的毒针陷阱。","若豁免失败，角色会被毒针刺中，受到5（1d10）点毒素伤害，并陷入目盲状态。","该目盲效果是永久性的，但可以通过en=Lesser Restoration或类似魔法治愈。","这里的空气潮湿而粘稠。","自然光线从天花板的裂缝中洒下，泥浆覆盖着地面。"],flesh:`南门被锁住了，锁具中隐藏着一个巧妙设计的毒针陷阱。要撬开这把锁，持有盗贼工具的角色必须通过一次DC 15敏捷检定。发现陷阱需要通过DC 20感知（察觉）检定；一旦发现，可以通过DC 12敏捷检定解除。若角色未解除陷阱就尝试撬锁，则必须进行DC 16敏捷豁免。若豁免失败，角色会被毒针刺中，受到5（1d10）点毒素伤害，并陷入目盲状态。该目盲效果是永久性的，但可以通过en=Lesser Restoration或类似魔法治愈。

元帝族使用这个房间从蛇中提取毒液。索帕尔（发音为zoh-PAUL），一个纯血原体蛇人，装瓶并混合毒液以创造出致命的新菌株。五个人类丧尸们作为劳动力为索帕尔服务。

索帕尔携带一个青铜注射器，内含三剂毒液鸡尾酒。作为一个动作，他可以用注射器进行一次近战武器攻击（命中++3），命中时造成1点穿刺伤害并注入一剂毒液。任何被注入毒液的生物必须进行一次DC 14的体质豁免检定，豁免失败时受到10（3d6）点毒素伤害，成功时则只受到一半伤害。此外，无论豁免是否成功，该生物都会陷入中毒状态，持续1小时。

索帕尔相信他的命运是转变成一个更强大的元帝族形态——这种蜕变将在他研制出一种如此剧毒的毒药，以至于即使是天生的抗毒能力也无法抵挡时发生。索帕尔用僵尸作为实验对象；一旦他克服了他们的免疫力，他计划在活着的元帝族上进行进一步的测试。

这个房间里存在着如此多的毒药，使得在这里的战斗变得极其危险。如果一个工作台受到爆炸力的影响，比如由 en=Thunderwave 或 en=Fireball 法术产生的爆炸力，瓶子会破碎并形成一个半径15英尺的有毒蒸气球，持续1分钟。任何在回合中首次进入该区域或在该区域内开始其回合的生物必须进行一次 DC 15 体质豁免，豁免失败则受到18（4d8）点毒素伤害。即使生物屏住呼吸或不需要呼吸，也会受到影响。

在这些毒药中，有一个塞住的铜壶，用来发酵丛林根茎成催眠气体。移除塞子会释放气体，气体会充满以壶为中心的15尺半径的球形area。有关催眠气体的效果，请参见区域3。

索帕尔携带一把铜钥匙，可以打开南门。

搜索毒药的玩家可以掠夺二十剂蛇毒、五剂乙醚精和五剂麻痹毒药。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2eb"],treasureSlotIds:["trs_2eb_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这里的空气潮湿而粘稠。自然光线从天花板的裂缝中洒下，泥浆覆盖着地面。石制工作台上堆满了各种形状和大小的陶土瓶子。毒蝇伞、蛇根草和颠茄植物在杂物中生长，由上方渗出的水滋养。站在植物附近的是一个皮肤有鳞且没有头发的男子，手持一个青铜注射器。潜伏在他周围阴影中的是五个弯腰驼背、散发着腐烂气味的人类。"},{id:"scn_2ef",locationId:"loc_298",name:"15. 蛇坑",activation:{condition:{type:"always"},priority:0},skeleton:["一座摇摇欲坠的木制步道沿着一个深坑的墙壁蜿蜒而行。","从下方传来恶臭。","在下方的阴暗处，成千上万的蛇在扭动。","尽管看起来破旧，但这座摇摇欲坠的木制步道是安全的。","元提有时会将不听话的奴隶扔进坑中，让它们被蛇群吞噬。"],flesh:`尽管看起来破旧，但这座摇摇欲坠的木制步道是安全的。元提有时会将不听话的奴隶扔进坑中，让它们被蛇群吞噬。这个坑深50尺，里面充满了有毒的蛇。当一个生物跌落或踏入坑中时，一群毒蛇群会围绕它形成并发起攻击。以这种方式几乎可以创造出无穷无尽的蛇群。当一个蛇群没有目标可攻击时，它的构成部分会四散开来，蛇群也就不复存在。

为了攀爬湿滑的洞壁，角色必须成功通过一个DC 15力量（运动）检定。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2ef"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一座摇摇欲坠的木制步道沿着一个深坑的墙壁蜿蜒而行。从下方传来恶臭。在下方的阴暗处，成千上万的蛇在扭动。"},{id:"scn_2f1",locationId:"loc_298",name:"血浴",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间充满了铁锈般的血腥味。","沿着一面墙，一排充满血迹的水池深入地面。","血迹和血脚印在水池之间延伸。","当他们每天醒来时，元提族会在祭品的血液中进行仪式性的沐浴。","这些血液被存放在这些石制浴缸中，并通过每个水池下方的地热通风口加热。"],flesh:`当他们每天醒来时，元提族会在祭品的血液中进行仪式性的沐浴。这些血液被存放在这些石制浴缸中，并通过每个水池下方的地热通风口加热。五个穿着腰布的奴隶（男性和女性楚尔坦人类平民，各种阵营）满足他们的每一个需要。根据需要给奴隶命名（见书籍介绍中的"楚尔特名字"侧栏）。

鲜血浸透的眼魔族将他们的武器放在每个壁龛的后面。如果他们听到锣的警报声，眼魔族命令他们的奴隶留在此处，而他们自己去武装起来，然后迅速前往区域9。如果在这里爆发战斗，来自区域17的增援将在1d3回合内到达。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2f1"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这个房间充满了铁锈般的血腥味。沿着一面墙，一排充满血迹的水池深入地面。血迹和血脚印在水池之间延伸。",dmGuidance:"当角色们进入时，四个纯血原体蛇人和两个第二型恶咒蛇人在温暖的池中沐浴。"},{id:"scn_2f3",locationId:"loc_298",name:"17. 桑拿",activation:{condition:{type:"always"},priority:0},skeleton:["热气从一个巨大的椭圆形石头上升起，这个石头嵌在房间的地板上。","四周堆满了丢弃的蛇皮，石头下面的架子上摆满了罐子。","一个蛇头的袁提正在蜕皮，而两个强壮的、赤裸上身的人类男子手持长矛在一旁观看。","这个椭圆形的石头高8尺，由多孔岩石制成。","它位于一个火山口上方，能够均匀地将热量传递到整个房间。"],flesh:`这个椭圆形的石头高8尺，由多孔岩石制成。它位于一个火山口上方，能够均匀地将热量传递到整个房间。袁提来到这里蜕皮并打磨他们的鳞片。

三十个罐子排列在椭圆形石头下面的架子上，每个罐子里都装有一种袁提用来保持皮肤柔软并缓解蜕皮的香膏。这种香膏并不值钱。

除非他们在其他地方已经被打败，否则两个被奴役的男人（NE男性Chultan人类角斗士）会监视Yahru（发音为YAH-roo），一个类型1 恶咒蛇人，当他蜕皮（这个过程可能需要长达一小时）。Yahru是拉兹·纳斯的间谍大师，他不喜欢被打扰。伪装成yuan-ti纯血的角色被指示立即离开房间。被奴役的角色被命令在Yahru的皮肤上涂抹药膏以加快蜕皮过程。

亚鲁厌恶肉搏战斗，并且他非常珍视他的保镖，不愿意在一场毫无意义的战斗中冒险他们的生命。除非角色们挑起战斗，否则他试图更多地了解他们并学习他们可能拥有的任何秘密，同时尽可能少地提供信息。如果亚鲁获得了明显有利于拉兹·纳斯或芬萨札的信息，他会选择将信息赠予哪位上级。亚鲁喜欢让他们相互竞争。

如果他的保镖被击败，他面临死亡，亚鲁会为了自由的承诺提供一些信息片段。除了神庙的布局和防御，亚鲁还知道以下内容：

拉兹·纳斯 指挥着奥穆的元提，但他的指挥权是不稳定的。高级祭司 芬萨札 是 拉兹·纳斯 的主要对手。

拉兹·纳斯 正慢慢被一种没有已知治疗方法的魔法疾病侵蚀。

拉兹·纳斯 与一个名叫 阿瑟瑞克 的强大巫妖达成了契约，他很久以前征服了奥穆并在城市下建造了一座坟墓。坟墓的入口被一个方尖碑标记。（亚鲁可以提供方向。）

阿瑟瑞克 杀死了奥穆的九位神灵，然后奴役了这座城市的人类和牛头人居民，他利用他们建造了自己的陵墓。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_fenthaza","npc_acererak","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2f3"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"热气从一个巨大的椭圆形石头上升起，这个石头嵌在房间的地板上。四周堆满了丢弃的蛇皮，石头下面的架子上摆满了罐子。一个蛇头的袁提正在蜕皮，而两个强壮的、赤裸上身的人类男子手持长矛在一旁观看。"},{id:"scn_2f5",locationId:"loc_298",name:"远地蛇巢",activation:{condition:{type:"always"},priority:0},skeleton:["这些潮湿的地下墓穴已经被改造成了卧室。","墙壁上排列着壁龛，现在用作袁提的巢穴。","剩下的六个壁龛目前没有在使用中。","除非角色们使用魔法来隐藏自己，否则不被察觉地穿过这个区域是不可能的。","如果 区域9 中的锣被敲响，这个房间里的所有元提会拿起武器并进行调查。"],flesh:`剩下的六个壁龛目前没有在使用中。除非角色们使用魔法来隐藏自己，否则不被察觉地穿过这个区域是不可能的。

如果 区域9 中的锣被敲响，这个房间里的所有元提会拿起武器并进行调查。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2f5"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"这些潮湿的地下墓穴已经被改造成了卧室。墙壁上排列着壁龛，现在用作袁提的巢穴。",dmGuidance:"当角色们到达时，十八个壁龛中有十二个被六只恶咒蛇人（每种类型各两只）和六只纯血原体蛇人占据。"},{id:"scn_2f7",locationId:"loc_298",name:"19. 奴隶洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["篝火在这个洞穴中投射出温暖的光线。","成堆的枯草和棕榈叶散布四周，泥泞的地面布满了脚印。","当他们不工作的时候，2d10名奴隶（不同种族、阵营和性别的平民）住在这里。",'关于奴隶的名字，请参阅书籍导言中的"楚尔特名字"边栏。',"三名原体卫雏蛇人（见附录D）为奴隶主伊萨尔守卫奴隶，伊萨尔是一名戴着红布头饰的类型3恶咒蛇人。"],flesh:`当他们不工作的时候，2d10名奴隶（不同种族、阵营和性别的平民）住在这里。关于奴隶的名字，请参阅书籍导言中的"楚尔特名字"边栏。三名原体卫雏蛇人（见附录D）为奴隶主伊萨尔守卫奴隶，伊萨尔是一名戴着红布头饰的类型3恶咒蛇人。伊萨尔更感兴趣的是凝视手镜中自己的倒影，而不是让奴隶们工作。

伊萨尔（Issar）太过高贵，不愿与他指挥下的"肉"交谈。相反，他选择了一个名叫科蒂（Khoti）的楚尔坦奴隶男孩来翻译他微妙的、未说出口的手势。尾巴的抽动可能被解释为取水的命令，或者舌头的轻弹表示认可。实际上，科蒂编造了他所看到的大部分内容。伊萨尔并不在意，只要表现出正确程度的尊敬即可。如果有陌生人出现在伊萨尔面前，科蒂会代表他的主人对他们进行询问。\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0adventure/adventure-toa.json

在伊萨尔的监督下，奴隶们本应拓宽这些洞穴，为袁提创造新的睡眠区。然而，进展缓慢。奴隶们磨损或损坏了大部分工具，伊萨尔正在等待新工具的交付。

这些奴隶身体上是健康的，但他们的意志已经被精神创伤和镇静药物摧毁。他们的情感只在休息时才会浮现，当夜蛇的梦境将他们从不安的睡眠中尖叫着唤醒时。

奴隶们并未被链锁。当有机会逃脱时，大多数人因犹豫而陷入麻痹状态。打破这种状态需要强有力的话语和一次成功的DC 17魅力（游说或威吓）检定。醒悟过来的武装奴隶会尽可能多地杀死蛇人。他们知道寺庙的防御和大致布局，除了第11区和第12区（他们从未见过）。

伊萨尔携带一把铁钥匙，可以打开通往 区域13 的双扇门。他的红色布头巾上缝有孔雀石宝石（250 gp），他还在一把金手镜（75 gp）前打扮。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_2f7_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"篝火在这个洞穴中投射出温暖的光线。成堆的枯草和棕榈叶散布四周，泥泞的地面布满了脚印。"},{id:"scn_2fb",locationId:"loc_298",name:"地下河",activation:{condition:{type:"always"},priority:0},skeleton:["一条地下河展现在您面前。","钟乳石低垂在河面上方，滴水声在黑暗中回响。","河流连接了建筑群的各个部分。","水深在5到30尺之间，水流不足以对游泳者构成危险。","河流向北和向南延伸进入淹没的隧道，这些隧道在丛林下延伸数英里。"],flesh:`河流连接了建筑群的各个部分。水深在5到30尺之间，水流不足以对游泳者构成危险。河流向北和向南延伸进入淹没的隧道，这些隧道在丛林下延伸数英里。

每艘船的船头挂钩上悬挂着一个牛铃。敲击任何一个铃铛都会召唤区域21中的九头蛇，它将在1d6轮内到达。

守卫着小船并监视着秘密入口（区域23）的是四名原体卫雏蛇人（见附录D）。如果他们发现没有伪装成玉蛇族的入侵者，一名幼卵守卫会跑去警告驻扎在区域19的玉蛇族，而其他人则试图击退入侵者。

巢穴守卫会停下并盘问伪装成纯血蛇人的角色们。为了瞒过守卫，角色们必须成功通过一个团体 DC 10 魅力（欺瞒）检定。如果团体检定成功，巢穴守卫会挥手让他们进入，而不核对他们的故事。如果团体检定失败，巢穴守卫会押送他们去见奴隶主伊萨尔，在 区域19 处。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2fb"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"一条地下河展现在您面前。钟乳石低垂在河面上方，滴水声在黑暗中回响。",dmGuidance:"当角色们到达时，一对划艇被拉到了通往区域23的隧道附近的岸边（有关划艇的更多信息，请参见城主指南中的第五章）。"},{id:"scn_2ff",locationId:"loc_298",name:"九头蛇的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["一条地下河流拓宽形成了一个被水淹没的岩洞。","向西，一个布满卵石的河岸上升到洞穴壁上的一个凹进去的门。","在湖的中间附近，骨头像潮汐线一样粘附在岩石柱上。","一只多头蛇潜伏在这片水域。","拉兹·纳斯视这只怪物为他的爱宠，并定期用奴隶、囚犯和违抗他的下属喂养它。"],flesh:`一只多头蛇潜伏在这片水域。拉兹·纳斯视这只怪物为他的爱宠，并定期用奴隶、囚犯和违抗他的下属喂养它。九头蛇的受害者被捆绑并用划艇运到河流最深处的区域。为了召唤这只怪物，抓捕者会敲响划艇的铃铛并将被捆住的受害者（或多位受害者）投入水中。

只要保持饱食，多头蛇会避开来回穿梭的船只。当划艇的铃铛响起时，多头蛇会在1d6回合内浮出水面。如果它没有立即被喂食，它就会攻击船只。多头蛇会攻击任何冒险进入区域18以北的船只。游泳者也是它的猎物。`,spotlightRefs:[],presentNpcIds:["npc_ras_nsi","npc_fenthaza","npc_sekelok"],availableInfoIds:[],encounterIds:["enc_2ff"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"一条地下河流拓宽形成了一个被水淹没的岩洞。向西，一个布满卵石的河岸上升到洞穴壁上的一个凹进去的门。在湖的中间附近，骨头像潮汐线一样粘附在岩石柱上。"},{id:"scn_301",locationId:"loc_298",name:"22. 真菌洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["通道拓宽成一个充满真菌的洞穴。","毒蘑菇、马勃菌和其他块根状生长物覆盖了墙壁和地板。","在远处的墙壁上，一个畸形的骨架被埋在一块黄油状的霉菌下。","一串黄铜钥匙挂在它的脖子上。","一块绿软泥附着在入口上方的天花板上，会落在第一个从下方经过的生物身上。"],flesh:`一块绿软泥附着在入口上方的天花板上，会落在第一个从下方经过的生物身上。

一簇黄霉菌覆盖在骸骨上。若有生物触碰霉菌，它会喷出致命的孢子云。

这具尸体属于库库加，一个秘密崇拜祖格特莫伊（真菌的恶魔女王）的玉蛇族纯血。库库加配制了一种真菌酿造物，希望能够将自己的身体转变为更接近他恶魔女主人的形式。然而，这导致了他突然而可怕的死亡。索帕尔（区域14）偶尔会冒险进入洞穴，从他的尸体上采集有毒的毒蘑菇。

为了在不破坏霉菌的情况下取出铜钥匙，角色必须成功通过一次 DC 12 敏捷（巧手）检定。这把钥匙可以打开毒药蒸馏室的门（区域14）。`,spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"通道拓宽成一个充满真菌的洞穴。毒蘑菇、马勃菌和其他块根状生长物覆盖了墙壁和地板。在远处的墙壁上，一个畸形的骨架被埋在一块黄油状的霉菌下。一串黄铜钥匙挂在它的脖子上。"},{id:"scn_303",locationId:"loc_298",name:"秘密入口",activation:{condition:{type:"always"},priority:0},skeleton:["通道蜿蜒进入大地的深处。","空气潮湿且粘稠，墙壁上滑溜溜的都是水分。","无害的蜈蚣在你下降时在地板上爬行。","隧道大约有100尺长。","角色如果沿着隧道向地面爬升，会出现在奥穆皇家宫殿的废墟中（见第三章，区域20B）。"],flesh:"隧道大约有100尺长。角色如果沿着隧道向地面爬升，会出现在奥穆皇家宫殿的废墟中（见第三章，区域20B）。",spotlightRefs:[],presentNpcIds:["npc_fenthaza","npc_ras_nsi","npc_sekelok"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"通道蜿蜒进入大地的深处。空气潮湿且粘稠，墙壁上滑溜溜的都是水分。无害的蜈蚣在你下降时在地板上爬行。",dmGuidance:"如果角色从地面进入这个隧道，请阅读："},{id:"scn_305",locationId:"loc_305",name:"九神之墓",activation:{condition:{type:"always"},priority:0},skeleton:["阿瑟瑞克建造九神之墓不仅是为了安置奥穆的恶作剧神灵的遗骸，也是为了杀死入侵者。","然而，今天很少有人知道这座墓穴的存在，因此它仍然是一个谜。","很少有酒馆的故事能吸引冒险家到它的门前，而它的秘密在烛堡的图书馆中也未被记录。","原因很简单：没有一个进入墓穴的人活着出来讲述这个故事。"],flesh:"阿瑟瑞克建造九神之墓不仅是为了安置奥穆的恶作剧神灵的遗骸，也是为了杀死入侵者。然而，今天很少有人知道这座墓穴的存在，因此它仍然是一个谜。很少有酒馆的故事能吸引冒险家到它的门前，而它的秘密在烛堡的图书馆中也未被记录。原因很简单：没有一个进入墓穴的人活着出来讲述这个故事。",spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/ToA/064-501.webp"}},{id:"scn_306",locationId:"loc_305",name:"陵墓的历史",activation:{condition:{type:"always"},priority:0},skeleton:["在阿瑟瑞克谋杀了奥穆的神灵之后，他奴役了奥穆人，并强迫他们在城市周围的悬崖下雕刻一座宏伟的墓穴。","这个巫妖为每个墓室设计了残酷的试炼，并在其中散布了谜题和幻象来欺骗入侵者。","当建筑工程完成后，他将自己的奴隶送入死亡陷阱以测试其效力。","巫妖将一些受害者变成了不死生物和血肉魔像，然后将它们锁在墓穴中作为守护者。","之后，阿瑟瑞克继续他的漫游。"],flesh:`在阿瑟瑞克谋杀了奥穆的神灵之后，他奴役了奥穆人，并强迫他们在城市周围的悬崖下雕刻一座宏伟的墓穴。这个巫妖为每个墓室设计了残酷的试炼，并在其中散布了谜题和幻象来欺骗入侵者。当建筑工程完成后，他将自己的奴隶送入死亡陷阱以测试其效力。巫妖将一些受害者变成了不死生物和血肉魔像，然后将它们锁在墓穴中作为守护者。之后，阿瑟瑞克继续他的漫游。

在阿瑟瑞克离开期间，墓穴捕获了来自遥远土地的冒险家，并收割他们的灵魂来滋养巫妖的护符盒，这个护符盒一直隐藏在另一个位面上。每隔几十年，阿瑟瑞克就会返回来调整他的地下城陷阱，向其金库中添加财宝，并收获一批囤积的灵魂。他的位面漫游影响了墓穴混合的建筑风格，并用奇怪而致命的怪物填充了它。

在穿越宇宙的一次旅程中，阿瑟瑞克偶然发现了一只萎缩者尔（见附录D）。他将它带到托瑞尔，安置在他的墓穴摇篮中，并开始用死灵能量滋养它，希望将其转变为一个神：一个能够宣称对死亡的统治权的神。如果这个新生的死亡之神在托瑞尔被释放，它将沉迷于生命，直到世界上只剩下死者行走。

为了养育萎缩者尔，阿瑟瑞克需要无数的灵魂。巫妖与缝合姐妹——一群在整个下层界都令人恐惧的夜巫婆——达成了交易。被近乎无尽的灵魂供应前景所诱惑，这些巫婆加入了阿瑟瑞克的墓穴。在她们的帮助下，巫妖制造了灵魂收割者——一种死灵法术装置，能够从整个托瑞尔收割垂死者的灵魂并喂养给萎缩者尔。留下缝合姐妹作为看护者，阿瑟瑞克放弃了他的墓穴，从远处观察死亡之神的崛起。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"当角色们深入探索九神之墓的深处时，他们将了解到它可怕过去的片段。"},{id:"scn_309",locationId:"loc_305",name:"探索墓穴",activation:{condition:{type:"always"},priority:0},skeleton:["为了在墓穴的恐怖中生存下来，玩家角色必须动用他们所有的智慧和意志力。","墓穴中普遍存在以下特点。","墓穴的一些层次还有额外的特点，这些将在各自章节的开头进行描述。","除非另有说明，墓穴中走廊的天花板高度为8尺，房间的天花板高度为12尺。","墓穴的某些区域只能通过狭窄的隧道进入。"],flesh:`为了在墓穴的恐怖中生存下来，玩家角色必须动用他们所有的智慧和意志力。

墓穴中普遍存在以下特点。墓穴的一些层次还有额外的特点，这些将在各自章节的开头进行描述。

除非另有说明，墓穴中走廊的天花板高度为8尺，房间的天花板高度为12尺。

墓穴的某些区域只能通过狭窄的隧道进入。这些爬行道高度为3尺，宽度为2尺。

除非另有说明，墓穴的所有区域都是未照明的。

墓穴内大多数秘密门是通过石滑轨上滑开的。打开它们的手柄隐藏在墙壁上的浮雕雕刻特征中，包括许多雕刻的骷髅头的颚部内部。

任何角色如果在秘密门的5英尺范围内，并且拥有20或更高的被动感知（察觉）值，或者通过搜索并成功进行一次DC 20感知（察觉）检定，都可以发现这扇门。

墓穴中的楼梯是从活岩石中雕刻出来的，每个台阶上都覆盖着一块切割好的石板。死去的奥穆人的头骨和骨头填满了每个楼梯墙壁上的壁龛。墓穴中每个层次之间楼梯的跨度为25尺。

探索者们最近闯入了这座古墓，而威瑟斯和他的墓穴矮人们频繁巡逻。他们的足迹来回交错，使得墓穴中的其他生物难以追踪。最新的足迹属于骷髅钥匙（见下方的"墓穴居民"）。任何试图追踪钥匙骷髅踪迹的角色，可以通过成功的DC 12感知（求生）检定来完成，找到通往最近未探索区域的路，该区域在地图上标有骷髅符号。

一群阴森的怪物居民潜伏在墓穴中，等待着迎接来访者。

威瑟斯，阿瑟瑞克的不死看守，监督着一群不死维护团队，以确保墓穴的陷阱保持工作状态。为了组建这个团队，阿瑟瑞克绑架了矮人矿工并将他们变成了恶灵，利用他们在地下建筑方面的专业知识。威瑟斯作为矮人们的监督者，并在巫妖访问墓穴时担任阿瑟瑞克的助手。使用他在区域25的水晶球，威瑟斯可以指挥奥穆的石像鬼并与地表世界的代理人交流。

威瑟斯和他的船员使用位于区域26的楼梯，在墓穴的许多层中无声息地游荡。当他们的工作完成后，他们撤退到墓穴第二层的秘密总部（区域27和28）。威瑟斯尽可能避免与角色接触，相信阿瑟瑞克的陷阱会击败他们。

两个传奇怪物居住在 阿瑟瑞克 的坟墓中：一个守卫着宝藏库房的眼魔（区域44）和一个潜伏在地下湖中的阿波罗斯（区域65）。这些生物在坟墓内不能使用巢穴动作，每个生物巢穴的区域效果仅限于它们居住的层次。

尽管是地牢的创造者，阿瑟瑞克并不将九神之墓视为他的巢穴。因此，在这次冒险中，没有赋予巫妖任何巢穴行动或区域效果。

为了解开通往灵魂收割者（Soulmonger）的最终大门，冒险家们必须获得五把骷髅钥匙——每把都是一个漫游墓穴的活化人类骷髅的雕刻头骨。角色们可以捕获并控制这些骷髅，或者简单地从脊柱上折断一个头骨。

一个钥匙骷髅具有骷髅的具体数值，并有以下变化：

钥匙骷髅是无阵营的。

它具有30尺的攀爬速度，并且能够攀爬困难的表面，包括在天花板上倒挂着，无需进行属性检定。

它持有一对匕首，可以作为一个动作进行两次近战武器攻击（命中 为 +4）。每次匕首攻击命中时造成4（1d4 + 2）点穿刺伤害。

当降至0生命值时，一个钥匙骷髅会解体，尽管它的头骨和骨头仍然完好无损。

一个钥匙骷髅不会触发放置在墓穴房间或门上的任何陷阱。

每个钥匙骷髅都有一个延伸成雕刻钥匙形状的头骨。这些形状与缝合姐妹巢穴中（区域71）骷髅门的钥匙孔相匹配。骷髅钥匙表总结了每把钥匙的位置和形状。

墓穴的前五个层次每个都有其自己的钥匙骷髅。一个钥匙骷髅可以出现在层次地图上标记有骷髅符号的任何位置。你可以选择一个钥匙骷髅的位置。你也可以改变主意，重新定位钥匙骷髅，使其更容易或更难找到。

除了解锁位于区域71的骷髅门之外，骷髅钥匙没有其他功能。钥匙骷髅的主要目标是避免被捕获或摧毁，因此如果可能的话它会逃跑。

在墓穴的最底层，一群夜巫婆正在培养萎缩者达到其神化。有关巫婆的更多信息，请参见区域71和该部分附近的"缝合姐妹"边栏。

在墓穴中死去的冒险家被陵墓矮人缝合起来，并用螺栓固定进盔甲中。一旦完成，这些蹒跚的魔像就被放进墓穴去追捕入侵者。

一个陵墓守卫 是一个穿着板甲的 血肉魔像，使其护甲等级达到17。每当你觉得需要战斗时，应该出现一个或两个墓穴守卫。随着角色深入墓穴，他们应该逐渐熟悉这些怪物。

奥穆九位诡计之神的灵魂在这座墓穴中徘徊。尽管它们无法逃脱，但这些灵魂可以寄居在墓穴内的冒险者身上（参见"九诡神亡魂"）。

隐藏在墓中的众多宝藏中，有四个传说中的艺术品，它们具有特殊价值。阿瑟瑞克 使用它们来吸引冒险家到墓中。

任何熟练于历史技能的角色在看到这些宝物之一时，可以通过一次成功的DC 20智力（历史）检定回忆起其传说。

黑蛋白石皇冠曾经是尼瑟瑞尔的大法师萨达莫尔所佩戴的。传说中萨达莫尔如何在他的皇冠蛋白石中看到了人类邪恶的深渊。心碎之下，他创造了一个末日装置——一个湮灭法球——来吞噬世界，但最终被自己的创造物所吞噬。

玉蛇族噩梦使者芬萨札（见第四章）相信黑欧珀皇冠可以唤醒夜蛇神登达尔。皇冠安放在死亡迷宫中（区域49）。

几个世纪以来，这颗拳头大小的红宝石一直镶嵌在尼萨尔的大金字塔上，它是马兹特克帝国首都的标志性建筑。这块宝石是扎尔特克教派的圣物，其匕首状的尖端曾被插入无数祭品的心脏中。

一个被称为黄旗公司的冒险团队进入了奥穆寻找扎尔特克之眼，从此再也没有被看到。扎尔特克之眼由一个岩石战车守卫（区域62）。

据说这是从月球上切下来的一块，这个抛光的蛋形石头是卡利姆港的统治者赛尔帕夏送给他水手女儿的礼物。据说任何持有这块石头的人都能找到回家的路，回到他或她所爱的人身边。

斑猫猎人钉包（见第三章）来到奥穆寻找月亮的肚脐，但未能找到它。月亮的肚脐被镶嵌在一个秘密房间（区域56）里的大摆钟的摆锤上。

这个镶有宝石的高脚杯是用一个早已死去的奥穆国王的头骨制成的，它是奥穆王室血统的象征。传说中的楚尔特英雄Ch'gakare（发音为chuh-GAH-kah-ree）据说在骑上一头猛犸象逃离九层地狱后斩首了国王。

姆瓦克丝娜瑞公主（见"基尔·萨巴尔"，以及附录D）非常希望恢复Ch'gakare的骷髅圣杯，作为她夺回奥穆王位的一部分。为了获得它，角色们必须首先在黄金猛犸象大厅（区域67）的危险中生存下来。

许多法术在九神之墓中施展时效果会有所改变，包括从魔法物品或神器中施展的法术，以及复制法术效果的职业能力。阿瑟瑞克的魔法和黑颅骨护符（见附录C）的魔法不受影响。

通常允许生物进出墓穴的法术要么失败，要么将接收者传送到区域57。通常允许通过石头的法术会失败，墓穴内施放的占卜法术会提供错误的读数。设计用于长距离通信的法术同样会被破坏。这些改变在修改法术表中进行了总结。表中未包括的法术可能会遭受类似的改变，由你自行决定。

召唤其他位面生物或物体的魔法正常工作，同样涉及创造额外维度空间的魔法也正常工作。在额外维度空间内施展的任何法术（例如由en=Rope Trick)创造的）都受到与在墓穴中施展的魔法相同的限制。

如果一个角色在九神之墓中死亡，并且你需要一个钩子来引入一个新的队伍成员，可以从下面的建议中选择，或者与角色的玩家合作设计一些合适的东西：

这个替补角色几个世纪前闯入了墓穴，但被囚禁在一个魔法雕刻中。当其他角色之一无意中靠在这个雕刻上时，替补角色被从囚禁中释放出来。

替代角色来自另一个世界（阿塔斯、克莱恩、奥斯、中古地球或你选择的任何其他背景），并作为阿瑟瑞克的战利品之一，被困在墓穴的静态中。

替代角色是已故冒险家的克隆体。在区域71的巫婆们创造了这个克隆体并对其进行折磨，以获取有关冒险家在墓穴中存在的信息。逃脱后，新角色患有失忆症，对巫婆们的记忆很少。克隆体拥有从死去的冒险家那里收集的装备。

新角色是一个注定要失败的冒险团队的唯一生还者，该团队闯入墓穴是为了寻找并摧毁灵魂收割者。`,spotlightRefs:[],presentNpcIds:["npc_withers","npc_acererak","npc_fenthaza","npc_bag_of_nails"],availableInfoIds:["info_toa_skeleton_keys"],encounterIds:[],treasureSlotIds:["trs_309_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`当角色进入包含钥匙骷髅的区域时，它可能站在房间中央、站在角落、在天花板上行走，或者附着在墙上。
如果角色们找到了皇冠，芬萨札会试图在他们带着它逃离楚尔特之前杀死他们。
如果角色被触碰，大巫妖的束缚魔法将结束。`,mapGeometry:{imageRef:"adventure/ToA/065-502.webp"},offerableQuestIds:["qst_main_toa"]},{id:"scn_321",locationId:"loc_305",name:"九诡神亡魂",activation:{condition:{type:"always"},priority:0},skeleton:["阿瑟瑞克将奥穆的九位恶作剧神灵的魂魄困在了以他们名义建造的墓穴中，他们对此并不满意。","这些魂魄不知道墓穴的布局或防御，但他们向他们附身的人提供建议和魔法力量。","当然，他们的帮助是有代价的。","灵魂被束缚在散落在坟墓中的魔法物品里。","当一个人形生物触碰这样的物品时，被束缚在其中的诡计之神会试图占据这个生物。"],flesh:`阿瑟瑞克将奥穆的九位恶作剧神灵的魂魄困在了以他们名义建造的墓穴中，他们对此并不满意。这些魂魄不知道墓穴的布局或防御，但他们向他们附身的人提供建议和魔法力量。当然，他们的帮助是有代价的。

灵魂被束缚在散落在坟墓中的魔法物品里。当一个人形生物触碰这样的物品时，被束缚在其中的诡计之神会试图占据这个生物。如果该生物成功通过一次 DC 16 魅力豁免检定，它就能抵抗神的力量，且该神在剩余的冒险中无法再次尝试占据同一个生物。如果豁免失败——或该生物选择放弃豁免——神的灵魂将占据该生物的身体。诡计之神能够判断一个生物是否为人形，并且他们对占据其他类型的生物没有兴趣。

当恶作剧之神居住在一个宿主身体内时，它就像一个专横的乘客。宿主生物仍然控制着自己的行为，但会从神那里继承一个缺陷以及一个特殊能力。当恶作剧之神居住在一个玩家角色中时，给玩家那张神的神之卡牌（见附录F）。一个角色在特定恶作剧之神首次居住在角色身上之前，不知道从该神那里获得的缺陷和能力是什么。当精灵离开宿主时，缺陷和能力都会结束。

恶作剧之神永远不会自愿离开宿主，但如果宿主死亡或离开墓穴，或者宿主被en=Dispel Evil and Good法术的解除魔法功能针对，它的灵魂将被迫离开。恶作剧之神也可以被另一个恶作剧之神迫使离开（见下文的"争夺宿主"）。

当恶作剧神灵的魂魄被迫从宿主体内驱逐出来时，它会返回到它所绑定的魔法物品中，并且在冒险的剩余时间内不能再附身于该宿主。如果该物品被摧毁或从墓穴中拿走，恶作剧神灵的魂魄会在墓穴中寻找另一个物品来附身。恶作剧神灵的魂魄无法被摧毁，也永远无法离开墓穴。

当一个恶作剧之神的灵魂居住在一个已经被另一个恶作剧之神居住的宿主中时，这两个神将为留在宿主中的权利而战斗。给一个神分配"偶数"，给另一个神分配"奇数"，然后掷任意骰子。结果决定了哪个神胜利，失败的神将被迫离开宿主。宿主对于哪个神被迫离开没有影响力。

恶作剧神灵可以使用宿主角色的感官，并与宿主的心灵对话。角色保留他或她的阵营，并且可以独立思考。然而，如果角色有一个与恶作剧神灵的缺陷相悖的缺陷，这个角色的缺陷在恶作剧神灵的魂魄离开角色的身体之前会被抑制。

你可以扮演恶作剧之神在角色头脑中的声音，但让玩家扮演他们角色的遗传缺陷。你可以给扮演恶作剧之神缺陷特别好的玩家奖励灵感。

所有的恶作剧神灵都渴望对阿瑟瑞克进行报复。他们只能提供有限的关于墓穴及其居民的指导，但他们鼓励角色寻找其他恶作剧神灵的魂魄，并在对抗巫妖的最终战斗中提供超自然的援助。

每个恶作剧之神（除了安珂）在墓穴中都有自己的对手，它宁愿避开。奥穆人编造了丰富多彩的故事来解释这些反感，但实际上，这些精神只是代表对立的阵营轴上的冲突点。当对手精神占据同一组中的不同角色时，他们尽可能地试图让他们的宿主争吵和相互违抗。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"如果玩家忽视了扮演恶作剧之神的缺陷，让居住的精神试图刺激角色表现得更像它。"},{id:"scn_326",locationId:"loc_326",name:"第一层：腐烂大厅",activation:{condition:{type:"always"},priority:0},skeleton:["地图5.1显示了地牢的这一层。","这里的空气陈旧而潮湿。","墙壁上覆盖着苔藓，装饰着尖叫的骷髅头，并悬挂着腐烂的树根和枯死的藤蔓。","细小的日光和月光穿过微小的岩石裂缝，形成地图 5.1 上显示的自然光池。","一个小型生物可以使用这些狭窄的裂缝进出墓穴。"],flesh:`地图5.1显示了地牢的这一层。这里的空气陈旧而潮湿。墙壁上覆盖着苔藓，装饰着尖叫的骷髅头，并悬挂着腐烂的树根和枯死的藤蔓。

细小的日光和月光穿过微小的岩石裂缝，形成地图 5.1 上显示的自然光池。一个小型生物可以使用这些狭窄的裂缝进出墓穴。

泥泞的雨水从上方的丛林中渗透进来，流经墓穴，形成一条缓慢的地下河流，被视作3。水深3尺，隧道的天花板在水面上方的高度从6英寸到3尺不等。这些水不适合饮用。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_32a",locationId:"loc_326",name:"1. 阿瑟瑞克的警告",activation:{condition:{type:"always"},priority:0},skeleton:["在悬崖底部附近，一座高十五尺的破裂石碑被藤蔓和黑色苔藓覆盖。","在它后面，你看到一个被枯萎的爬藤植物遮挡的黑暗通道。","另一个较小的隧道则通往东边悬崖底部。","通往墓室真正入口的隧道（区域4）被植被遮蔽，除非角色进行搜索，否则无法被发现。","三个石像鬼从雕刻在悬崖边上的狭窄壁架上注视着你。"],flesh:`通往墓室真正入口的隧道（区域4）被植被遮蔽，除非角色进行搜索，否则无法被发现。然而，任何在假入口（区域2）或开放画廊（区域3）附近成功通过DC 10感知（察觉）检定的角色会注意到更多：

三只石像鬼栖息在俯瞰石碑的壁架上，在地图5.1上标记为G的点。壁架位于地面上方30尺，宽5尺，深2尺，间隔25尺。任何试图推倒或损坏石碑的人，或者首先攻击它们的任何人，都会遭到石像鬼的俯冲攻击。

方尖碑在en=Detect Magic法术或类似魔法的审视下散发出强烈的防护系魔法光环，使用圣洁感知的圣骑士可以察觉到方尖碑内存在着一股邪恶的存在。清除方尖碑南面的藤蔓和苔藓后，可以看到上面用通用语刻着一则信息。（给玩家一份附录 E中的讲义 17。）信息内容如下：

阿瑟瑞克在方尖碑和宏伟楼梯（区域7）上放置的警告提供了克服坟墓中一些挑战的线索。方尖碑的线索涉及第一层的特征和位置，特别是真正的入口（区域4）、魔鬼面孔（区域 5B）、奥博娜卡的坟墓（区域10）、莫阿的坟墓（区域14）和望戈的坟墓（区域16）。

力量总和达到60或以上的角色可以推倒这座方尖碑，在底部将其折断。破坏或摧毁方尖碑会释放出一团黑烟，凝聚成一个判魂魔恶魔。恶魔出现在方尖碑30尺范围内的未被占据的空间，并攻击那些亵渎方尖碑的人。1分钟后，恶魔消失并返回到无底深渊。

即使方尖碑被推倒或摧毁，乌木池（区域81）的传送功能也会将角色传送回方尖碑处。`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_nepartak"],availableInfoIds:[],encounterIds:["enc_32a","enc_toa_obelisk_nalfeshnee"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`在悬崖底部附近，一座高十五尺的破裂石碑被藤蔓和黑色苔藓覆盖。在它后面，你看到一个被枯萎的爬藤植物遮挡的黑暗通道。另一个较小的隧道则通往东边悬崖底部。

三个石像鬼从雕刻在悬崖边上的狭窄壁架上注视着你。每个石像鬼都有一张长着胡须的恶魔的脸，嘴巴张开，发出无声的尖叫。

当被遗弃者夺取死亡的斗篷，当海洋干涸，死者复活，而我，不死的阿瑟瑞克，收割生者的世界时，恐惧夜晚。敢于进入的人当心：敌人会反对。
他们之间站着一个人。
它隐藏在黑暗中。
戴上面具，否则就会被发现。
不要对注定的孩子说出真相。
钥匙只能从内部转动。`,offerableQuestIds:["qst_main_toa"]},{id:"scn_32f",locationId:"loc_326",name:"诡计长廊",activation:{condition:{type:"always"},priority:0},skeleton:["壁龛沿着一条狭窄的隧道延伸，每一个壁龛上方都有一个野兽雕像站立或蹲坐在油盆之上。","这些雕像描绘了九位恶作剧之神，每对相对的壁龛都献给了彼此对立的两位恶作剧之神。","从西向东沿着大厅移动，对立的雕像分别描绘了摩亚（幻色蛇）和望戈（苏怪），艾金（独角兔）和奥博娜卡（巨蜥），帕帕扎图（魔王鹤）和库巴赞（蛙兽），娜浪（树精）和莎根比（六岐蛇豹）。","每座雕像高3尺，不能从基座上移动。","当任何携带谜题立方体的角色（见第三章）进入隧道时，与立方体上的诡计之神相匹配的油盆会燃起火焰。"],flesh:`这些雕像描绘了九位恶作剧之神，每对相对的壁龛都献给了彼此对立的两位恶作剧之神。从西向东沿着大厅移动，对立的雕像分别描绘了摩亚（幻色蛇）和望戈（苏怪），艾金（独角兔）和奥博娜卡（巨蜥），帕帕扎图（魔王鹤）和库巴赞（蛙兽），娜浪（树精）和莎根比（六岐蛇豹）。

每座雕像高3尺，不能从基座上移动。当任何携带谜题立方体的角色（见第三章）进入隧道时，与立方体上的诡计之神相匹配的油盆会燃起火焰。一个en=Detect Magic法术或类似效果会揭示雕像周围的占卜魔法气息。油盆散发出召唤魔法的气息。

最初只有八个骗子神是可见的；安珂（链枷蜗牛）的雕像被隐藏在隧道尽头的秘密门后面，尽管它的功能与其他雕像相同。将安珂的谜题魔方带入隧道会点亮安珂的火盆，给予角色在寻找秘密门的属性检定时的优势。

一个形状像眼睛的金色吊坠挂在安珂雕像上。它价值25金币，散发着占卜魔法的气息。如果佩戴这个吊坠的角色进入区域1的方尖碑附近10尺范围内，吊坠会拉着角色朝隐藏的墓穴入口（区域4）移动。这个吊坠在区域79也有用。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_32f_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"壁龛沿着一条狭窄的隧道延伸，每一个壁龛上方都有一个野兽雕像站立或蹲坐在油盆之上。"},{id:"scn_332",locationId:"loc_326",name:"假入口",activation:{condition:{type:"always"},priority:0},skeleton:["走过20尺后，一个谜题门封锁了墓穴中一个小型房间的入口，这个入口是假的。","一条短隧道在一块经过加工的石板上结束，石板边缘刻有咧嘴笑的骷髅浮雕。","四条线在石板中心相交形成一个星形，每条线的两端都标记着一个切割在门上的立方体形状的凹槽——总共八个凹槽。","每个空腔的大小都适合放置从奥穆神殿回收的一个谜题立方体（见第三章）。","然而，总共有九个谜题立方体，却只有八个空腔。"],flesh:`走过20尺后，一个谜题门封锁了墓穴中一个小型房间的入口，这个入口是假的。

每个空腔的大小都适合放置从奥穆神殿回收的一个谜题立方体（见第三章）。然而，总共有九个谜题立方体，却只有八个空腔。

如果代表除安珂之外的所有恶作剧之神的谜题方块以敌对神的方块彼此相对的方式插入凹槽中，一块石砖会慢慢降下，封住隧道入口。任何在隧道中的角色必须决定是留下还是逃离，这需要通过一个成功的DC 10力量（运动）检定。一旦隧道被封住，腐蚀性气体会从浮雕骷髅的口中涌出。任何被困在隧道中的生物必须成功通过一个DC 15体质豁免检定，否则会受到5（1d10）点毒素伤害和5（1d10）点酸蚀伤害。任何受影响的生物在隧道中每回合开始时必须重复进行豁免检定。10回合后，气体阀门关闭，石砖升回天花板。任何仍在凹槽中的谜题方块会被弹出，陷阱重新设置。

任何角色在隧道中搜索陷阱时，若成功通过一次 DC 16 感知（察觉检定，会发现凸起的石块。石块的重量使其无法阻碍其下落。任何检查谜题门并通过一次 DC 14 感知（察觉检定的角色会注意到骷髅嘴中的孔洞。用布或蜡塞住孔洞可以防止气体释放。当陷阱激活时，这样做很困难，需要进行六次成功的 DC 10 敏捷检定，每次检定都作为一个动作。

假门后面是一个充满气体的房间。任何生物在该区域内开始其回合时，将受到11（2d10）点毒素伤害和11（2d10）点强酸伤害。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"一条短隧道在一块经过加工的石板上结束，石板边缘刻有咧嘴笑的骷髅浮雕。四条线在石板中心相交形成一个星形，每条线的两端都标记着一个切割在门上的立方体形状的凹槽——总共八个凹槽。",dmGuidance:"如果角色选择留下或检定失败，他们将被困在隧道中，当石砖封住隧道时被封锁。",offerableQuestIds:["qst_main_toa"]},{id:"scn_334",locationId:"loc_326",name:"4. 真正入口",activation:{condition:{type:"always"},priority:0},skeleton:["茂密的植被隐藏了九神之墓的真正入口。","拨开厚重的灌木丛，你发现了悬崖上的一个拱门。","石制的骷髅从门楣上俯视，古老的骨头散落在门槛上。","当光线照射到入口时，一群蝙蝠从内部尖叫着飞出。","这些蝙蝠是无害的。"],flesh:`茂密的植被隐藏了九神之墓的真正入口。任何在此处悬崖底部进行搜索的角色，通过一次成功的 DC 10 感知（察觉）检定即可找到入口。

这些蝙蝠是无害的。丛林捕食者使用这条隧道作为庇护所，骨头是树精和迅猛龙的混合。任何搜索痕迹的角色都会发现通往墓穴的靴子印迹。这些痕迹不是最近的，属于最后一群进入这里的寻宝者。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"拨开厚重的灌木丛，你发现了悬崖上的一个拱门。石制的骷髅从门楣上俯视，古老的骨头散落在门槛上。当光线照射到入口时，一群蝙蝠从内部尖叫着飞出。",offerableQuestIds:["qst_main_toa"]},{id:"scn_336",locationId:"loc_326",name:"4A. 第一谜题门",activation:{condition:{type:"always"},priority:0},skeleton:["一块经过加工的石板阻挡了从入口大约二十尺处开始的杂草丛生的隧道。","咧嘴笑的骷髅标记着石板的边缘，在石板中心有九个立方体形状的凹槽，排列成三行三列。","给玩家分发位于附录 E中的手稿11上的神祇符号的副本。","单个方格可以被剪下来，由玩家任意排列，或者他们可以简单地在纸上做笔记。","要打开门，角色们必须用从奥穆神庙中取得的九个谜题立方体填充凹槽（见第三章），但必须按照正确的配置。"],flesh:`给玩家分发位于附录 E中的手稿11上的神祇符号的副本。单个方格可以被剪下来，由玩家任意排列，或者他们可以简单地在纸上做笔记。

要打开门，角色们必须用从奥穆神庙中取得的九个谜题立方体填充凹槽（见第三章），但必须按照正确的配置。代表诡计之神的立方体必须放置得使每个神都与对手的立方体在网格上相对，而安珂（中立，没有对手）位于中间。例如，插入网格角落的谜题立方体必须让其对手位于对角线相对的角落。图5.1展示了一种可能的配置，尽管其他配置只要安珂位于艾金（混乱中立）和奥博娜卡（守序中立）之间，位于Kubazan（守序善良）和帕帕扎图（邪恶中立）之间，位于Moa（守序善良）和望戈（混乱邪恶）之间，以及位于娜浪（中立邪恶）和莎根比（中立善良）之间，也可以工作。

如果拼图魔方放置错误，之前放置的所有魔方都会弹出。然后电流会从放置错误的魔方中爆发出来，对门周围20尺内的所有生物造成18点（4d8）闪电伤害。可以使用en=Mage Hand法术从更远的地方放置魔方，以避免这种伤害。

一个en=Detect Magic法术或类似的效果揭示了每个空腔周围的咒语魔法气息。

当门打开时，谜题立方体会传送回奥穆各自对应的神庙。一旦门完全升起，它会保持开启状态1小时，然后慢慢下沉回到原位。当门关闭时在门外的角色必须重新访问城市以回收立方体。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一块经过加工的石板阻挡了从入口大约二十尺处开始的杂草丛生的隧道。咧嘴笑的骷髅标记着石板的边缘，在石板中心有九个立方体形状的凹槽，排列成三行三列。

九个立方体发出光芒，然后消失了。石板像愤怒的野兽一样咆哮着开始滑向天花板。`,dmGuidance:"如果角色正确放置了立方体，请阅读：",mapGeometry:{imageRef:"adventure/ToA/068-503.webp"}},{id:"scn_339",locationId:"loc_326",name:"4B. 第二道谜题门",activation:{condition:{type:"always"},priority:0},skeleton:["另一块石板在第一扇门后二十尺处阻挡了走廊。","一个铁制杠杆嵌入门板表面，上方有一个雕刻的石骷髅冷笑着俯视。","当一个角色到达走廊的中点时，阅读：","骷髅的下巴吱嘎作响地打开，一只持着水晶沙漏式计时器的骷髅手从里面伸出。","随着一声点击，计时器开始旋转，沙子开始流入它的下半部球体。"],flesh:`当一个角色到达走廊的中点时，阅读：

从10开始慢慢倒数，并让玩家告诉你，在这段时间里，他们的角色会做什么，如果有的话。沙漏无法被移动或损坏。

门保持开启1小时后，会缓慢升起，再次封闭通道。角色们可以通过将铁钉卡入周围的地面缝隙来阻止门升起。门在回到关闭位置时重置。门无法从北侧打开。

拉动杠杆会使两扇门之间的地板沿着中央接缝裂开。当杠杆被拉动时，站在地板上的每个生物都会跌入一个20英尺深的坑中，坑内布满了毒刺。如果拉动杠杆的角色成功通过一个 DC 15 的敏捷豁免检定，他们可以通过抓住杠杆来避免掉入坑中。这个坑会一直保持开放状态，直到杠杆被复位到原来的位置。

每个掉入坑中的生物会受到11（2d10）点钝击伤害，并被1d4根尖刺刺穿，每根尖刺造成3（1d6）点穿刺伤害和5（1d10）点毒素伤害。任何因一根或多根尖刺受到毒素伤害的生物将陷入中毒状态24小时，或直到通过en=Lesser Restoration法术或类似魔法解除该状态。

发现地板上的裂缝需要进行一次成功的 DC 15 感知 (察觉) 检定。角色可以将尖钉锤入地板以防止其下陷，但由于地板的尺寸和重量，至少需要十根尖钉。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`另一块石板在第一扇门后二十尺处阻挡了走廊。一个铁制杠杆嵌入门板表面，上方有一个雕刻的石骷髅冷笑着俯视。

骷髅的下巴吱嘎作响地打开，一只持着水晶沙漏式计时器的骷髅手从里面伸出。随着一声点击，计时器开始旋转，沙子开始流入它的下半部球体。`,dmGuidance:`当角色们走过第一扇门时，请阅读：
如果角色们在你倒数结束之前没有拉下杠杆，杠杆和沙漏会随着门沉入地板而收回，揭示了区域5在另一边。`},{id:"scn_33d",locationId:"loc_326",name:"5. 陷阱走廊",activation:{condition:{type:"always"},priority:0},skeleton:["一条覆盖着苔藓的走廊从第二扇门延伸出去。","树根从下垂的天花板上垂下，空气中弥漫着腐烂和潮湿的气味。","前方，在T字形的交叉口墙上，装饰着一个长着胡须的恶魔面孔的浮雕。","恶魔张开的嘴巴是一个完全黑暗的井。"],flesh:"",spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一条覆盖着苔藓的走廊从第二扇门延伸出去。树根从下垂的天花板上垂下，空气中弥漫着腐烂和潮湿的气味。前方，在T字形的交叉口墙上，装饰着一个长着胡须的恶魔面孔的浮雕。恶魔张开的嘴巴是一个完全黑暗的井。"},{id:"scn_33f",locationId:"loc_326",name:"5A. 毒镖",activation:{condition:{type:"always"},priority:0},skeleton:["地图上的每个X标记代表一个5英尺见方的压力板，触发重量为20磅或以上。","当压力板被触发时，四支毒镖会从墙上的弹簧发射管中射出。","在压力板下方插入铁钉或类似物品可以防止触发该压力板。","用布或蜡堵住与压力板相邻的墙孔可以阻止飞镖发射。"],flesh:`地图上的每个X标记代表一个5英尺见方的压力板，触发重量为20磅或以上。当压力板被触发时，四支毒镖会从墙上的弹簧发射管中射出。每支毒镖会对压力板10英尺范围内的随机目标进行一次远程攻击（命中加值+8）。被毒镖击中的生物将受到2（1d4）点穿刺伤害，并且必须进行一次DC 15体质豁免检定，若失败则受到14（4d6）点毒素伤害，成功则伤害减半。

苔藓掩盖了墙上发射飞镖的小孔，但可以通过一次成功的 DC 15 感知 (察觉) 检定发现它们。通过仔细检查地面并成功通过一次 DC 15 感知 (察觉) 检定，角色可以注意到地砖图案中的不规则之处，从而揭示压力板的存在。在压力板下方插入铁钉或类似物品可以防止触发该压力板。用布或蜡堵住与压力板相邻的墙孔可以阻止飞镖发射。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_340",locationId:"loc_326",name:"5B. 恶魔面孔",activation:{condition:{type:"always"},priority:0},skeleton:["魔法黑暗和一个永久的en=Silence法术充满了恶魔面孔的嘴巴以及其后的一个大型腔室。","这张面孔是用石头雕刻而成，与周围墙壁无缝融合，它的嘴巴足够宽敞，可以让一个中等大小或更小的生物爬过去。","一个en=Detect Magic法术或类似的效果会揭示覆盖在面孔上的幻术魔法气息。","恶魔嘴巴后面的空腔是一只幽影恶魔的栖息地，它能够在魔法黑暗中正常视物。","如果有生物伸手进入嘴巴，恶魔会对其发起攻击并获得优势，然后如果有任何生物进入它的领地，它会继续攻击。"],flesh:`魔法黑暗和一个永久的en=Silence法术充满了恶魔面孔的嘴巴以及其后的一个大型腔室。这张面孔是用石头雕刻而成，与周围墙壁无缝融合，它的嘴巴足够宽敞，可以让一个中等大小或更小的生物爬过去。一个en=Detect Magic法术或类似的效果会揭示覆盖在面孔上的幻术魔法气息。

恶魔嘴巴后面的空腔是一只幽影恶魔的栖息地，它能够在魔法黑暗中正常视物。如果有生物伸手进入嘴巴，恶魔会对其发起攻击并获得优势，然后如果有任何生物进入它的领地，它会继续攻击。

成功施放 en=Dispel Magic (DC 16) 于恶魔巢穴可驱散魔法黑暗与静默。若黑暗被驱散，影魔将现身并攻击，直至其生命值减半或更低，此时它将逃向陵墓中的黑暗区域。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:["enc_340"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_341",locationId:"loc_326",name:"5C. 地板舱口",activation:{condition:{type:"always"},priority:0},skeleton:["一个生锈的铁栅栏嵌入在走廊的地板上。","透过栅栏的铁条，你看到泥水缓慢流过。","这些铁栅栏不能弯曲或破坏，但它们之间的间隔足够宽，以至于一个小型生物可以挤过去。","这个栅门也可以被一个或多个总力量值达到24或更高的生物抬起。","任何通过舱口的生物都会掉入缓慢流动的地下河中，河流流向区域17。"],flesh:"这些铁栅栏不能弯曲或破坏，但它们之间的间隔足够宽，以至于一个小型生物可以挤过去。这个栅门也可以被一个或多个总力量值达到24或更高的生物抬起。任何通过舱口的生物都会掉入缓慢流动的地下河中，河流流向区域17。",spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个生锈的铁栅栏嵌入在走廊的地板上。透过栅栏的铁条，你看到泥水缓慢流过。"},{id:"scn_343",locationId:"loc_326",name:"6. 水晶窗户",activation:{condition:{type:"always"},priority:0},skeleton:["攀爬植物和藤蔓附着在这条走廊的墙壁上，走廊尽头是一个拱形的水晶窗户，六尺宽，十尺高。","透过它，你可以看到一间黑暗的房间。","水晶窗户可以窥视奥博娜卡的墓穴（区域10），无法打开，并且阻挡了区域6和区域10之间所有的声音。","当任何角色接近水晶窗户并透过它窥视时，阅读区域10中的框内文本，省略关于窗户的最后一句。"],flesh:`水晶窗户可以窥视奥博娜卡的墓穴（区域10），无法打开，并且阻挡了区域6和区域10之间所有的声音。窗户有AC 5，伤害阈值为15，有10点生命值，并且对毒素和心灵伤害免疫。

当任何角色接近水晶窗户并透过它窥视时，阅读区域10中的框内文本，省略关于窗户的最后一句。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"攀爬植物和藤蔓附着在这条走廊的墙壁上，走廊尽头是一个拱形的水晶窗户，六尺宽，十尺高。透过它，你可以看到一间黑暗的房间。",dmGuidance:"如果角色们通过破碎的窗户进入区域10而没有采取适当的措施来隐藏自己，奥博娜卡墓穴中的不死生物生物将会攻击（更多信息请见区域10）。"},{id:"scn_345",locationId:"loc_326",name:"7. 大楼梯",activation:{condition:{type:"always"},priority:0},skeleton:["一个宏伟的大厅在前方展开，宽达五十英尺，向下延伸至黑暗之中。","一条石制阳台沿着墙壁蜿蜒，连接着四座拱门。","下方可见其他阳台层，走廊向四面八方延伸。","在北面，一段石阶通往更低的层数。","宏伟的楼梯连接着墓穴的前四层，每层比上一层低25尺。"],flesh:"宏伟的楼梯连接着墓穴的前四层，每层比上一层低25尺。阳台宽5尺。",spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[134],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个宏伟的大厅在前方展开，宽达五十英尺，向下延伸至黑暗之中。一条石制阳台沿着墙壁蜿蜒，连接着四座拱门。下方可见其他阳台层，走廊向四面八方延伸。在北面，一段石阶通往更低的层数。"},{id:"scn_347",locationId:"loc_326",name:"7A. 我们并不孤单",activation:{condition:{type:"always"},priority:0},skeleton:["地图上第一个到达这个点的角色瞥见下方楼层上有一个墓穴矮人：","一个弯腰的身影从下面的阳台上怒视着你，戴着一个与墓穴入口处的恶魔面孔相同的面具。","那个身影没有说一句话，就走出了视线。","墓穴侏儒使用尸妖的具体数值，除了它挥舞着战斧和轻弩。","如果没有被抓住，这个生物会悄无声息地通过秘密门移动到区域25。"],flesh:`地图上第一个到达这个点的角色瞥见下方楼层上有一个墓穴矮人：

墓穴侏儒使用尸妖的具体数值，除了它挥舞着战斧和轻弩。如果没有被抓住，这个生物会悄无声息地通过秘密门移动到区域25。对于任何靠在阳台上想看看这个身影去了哪里的角色来说，它似乎已经消失得无影无踪。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:["enc_347"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[134],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个弯腰的身影从下面的阳台上怒视着你，戴着一个与墓穴入口处的恶魔面孔相同的面具。那个身影没有说一句话，就走出了视线。",dmGuidance:"如果角色们立即采取行动，他们可以抓住墓穴侏儒。"},{id:"scn_349",locationId:"loc_326",name:"7B. 阿瑟瑞克的第二次警告",activation:{condition:{type:"always"},priority:0},skeleton:["东墙第二层阳台固定着一块青铜牌，上面镌刻着阿瑟瑞克的另一道用通用语写成的神秘警示。","（给玩家们发一份位于附录 E手稿18的内容。","这个环是通往另一个墓穴的路径。","只有宝石能驯服青蛙。","如死去的神所低吟的那样鞠躬。"],flesh:`东墙第二层阳台固定着一块青铜牌，上面镌刻着阿瑟瑞克的另一道用通用语写成的神秘警示。（给玩家们发一份位于附录 E手稿18的内容。）内容如下：

这块牌匾上的线索与第二层的地点有关，具体是重力环（区域19），假墓（区域20），娜浪的墓穴（区域24），帕帕扎图的墓穴（区域22），以及恶魔坑（区域18）。`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[134],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个环是通往另一个墓穴的路径。
死者厌恶阳光。
只有宝石能驯服青蛙。
如死去的神所低吟的那样鞠躬。
深入黑暗之中。`},{id:"scn_34b",locationId:"loc_326",name:"7C. 阿瑟瑞克的第三次警告",activation:{condition:{type:"always"},priority:0},skeleton:["第三层阳台的北墙上出现了另一块青铜牌匾。","（给玩家一份附录 E中手册19的副本。","）这个警告内容如下：","手持武器穿越水域。","在圣洗盆处解渴你的影子。"],flesh:`第三层阳台的北墙上出现了另一块青铜牌匾。（给玩家一份附录 E中手册19的副本。）这个警告内容如下：

这块青铜牌匾上的线索涉及第三层的特点和地点，具体包括反射大厅（区域31），魔法圣洗盆（区域33），艾金的墓穴（区域35），魔像坑（区域39），以及库巴赞的墓穴（区域42）。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[134],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`手持武器穿越水域。
在圣洗盆处解渴你的影子。
秃鹫是第一步。
纠正众神。
历史的墙壁诉说一切。`},{id:"scn_34d",locationId:"loc_326",name:"7D. 阿瑟瑞克的第四次警告",activation:{condition:{type:"always"},priority:0},skeleton:["最后一条警告刻在第四层阳台西墙上的青铜牌匾上。","（给玩家一份附录 E中手册20的副本。","死亡于火，或餐或溺，珍贵空气，落沙。","军队在寂静中沉睡。","镜子里有十二个。"],flesh:`最后一条警告刻在第四层阳台西墙上的青铜牌匾上。（给玩家一份附录 E中手册20的副本。）内容如下：

这块青铜牌匾上的线索与第四层的特征和地点有关，特别是元素陷阱（区域47）、莎根比的墓（区域48）、生命陷阱之镜（摄心镜）（区域50）、太阳女王墓穴中的权杖（区域53）以及安珂的墓（区域55）。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[134],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`死亡于火，或餐或溺，珍贵空气，落沙。
军队在寂静中沉睡。
镜子里有十二个。
找到铁权杖的配对。
迷宫藏有钥匙。`},{id:"scn_34f",locationId:"loc_326",name:"8. 魔法吸引",activation:{condition:{type:"always"},priority:0},skeleton:["一个生锈的骑士雕像站在这个大厅的西端，紧握着一个大铁盾。","雕像脚周围的地板上覆盖着锈蚀金属的碎片和鳞片。","雕像周围的魔法力场会吸引任何类型的金属物体（不仅仅是铁质金属）。","任何直接接触盾牌的金属物体会立刻崩解，化成一片锈粉散落在地。","神器不受这种腐蚀的影响。"],flesh:`雕像周围的魔法力场会吸引任何类型的金属物体（不仅仅是铁质金属）。任何直接接触盾牌的金属物体会立刻崩解，化成一片锈粉散落在地。神器不受这种腐蚀的影响。任何未穿戴或携带的金属物体进入房间时，如果重量在150磅或以下，会立即被吸向盾牌。任何穿戴或携带金属物品的生物进入房间或在该处开始回合时，能感受到雕像的拉力，并且必须通过一次 DC 10 力量（运动）检定来抵抗。如果检定失败，生物会失去平衡，飞越房间并撞上雕像，每移动10英尺受到 1d6 钝击伤害。盾牌只会崩解与之直接接触的金属物体，因此存放在背包中的金属物体会被背包的皮革保护而免于被摧毁。

一个en=Detect Magic法术或类似的效果会揭示出护盾上方环绕着变化魔法的光环。雕像和护盾被视为一个单一的大型物体，具有AC 17；40点生命值；对非魔法攻击的穿刺、钝击和挥砍伤害免疫；并对毒性和精神伤害免疫。如果雕像和护盾被破坏，陷阱会被禁用。成功在雕像上施放en=Dispel Magic（DC 17）会使吸引场关闭1小时。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[134],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个生锈的骑士雕像站在这个大厅的西端，紧握着一个大铁盾。雕像脚周围的地板上覆盖着锈蚀金属的碎片和鳞片。",dmGuidance:"如果角色穿戴金属护甲，检定将带有劣势。"},{id:"scn_351",locationId:"loc_326",name:"9. 魔法喷泉",activation:{condition:{type:"always"},priority:0},skeleton:["一个覆盖着苔藓的大喷泉位于一个圆形房间的中央。","三个大理石少女站在喷泉中，手持水壶，水从其中流出。","任何被奥博娜卡或望戈的灵魂附身的角色在进入这个区域时会收到建议：","谨慎的奥博娜卡建议任何人不要从喷泉中饮水。","鲁莽的望戈鼓励他的主人从喷泉中饮水。"],flesh:`任何被奥博娜卡或望戈的灵魂附身的角色在进入这个区域时会收到建议：

谨慎的奥博娜卡建议任何人不要从喷泉中饮水。

鲁莽的望戈鼓励他的主人从喷泉中饮水。

任何生物饮用喷泉中的水都会经历一个随机的魔法效果，这由掷一个d4并查阅魔法喷泉效果表来决定。从喷泉中取出并储存在容器中的水保留其魔法属性，每次有人从容器中饮用时都会发生不同的效果。在en=Detect Magic法术或类似效果的仔细检查下，喷泉散发出变化魔法的气息。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[135],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个覆盖着苔藓的大喷泉位于一个圆形房间的中央。三个大理石少女站在喷泉中，手持水壶，水从其中流出。",randomTableIds:["tbl_351_0"]},{id:"scn_356",locationId:"loc_326",name:"10. 奥博娜卡的墓",activation:{condition:{type:"always"},priority:0},skeleton:["这个拱形的墓室长满了苔藓和藤蔓。","一个石棺安放在房间中央的台阶上。","在石棺后面的墙上，两座巨大的熊雕像抓住了一个直径五尺的铜盘，上面浮雕着一打瞪眼。","六个干瘪的尸体坐在沿墙的壁龛中的宝座上。","每个尸体都戴着一个由纸浆和羽毛制成的黑色面具。"],flesh:`见区域6以获取水晶窗户的描述。

瘫坐在宝座上的尸体是六个休眠的尸妖。如果青铜盘上的眼睛发现了墓穴中的入侵者（见"眼睛盘"），尸妖们会苏醒并攻击。如果其中一个或多个尸妖受到任何伤害，它们也会攻击。它们不会离开房间去追击入侵者。一旦所有入侵者死亡或离开，尸妖们就会返回他们的宝座并再次进入休眠状态。

任何研究这个盘子的角色都会注意到它的眼睛在移动，它们青铜色的瞳孔来回快速扫视墓穴以寻找入侵者。这些眼睛具有30尺范围内的黑暗视觉。如果眼睛发现墓穴中有任何类人生物，尸妖就会苏醒并攻击。眼睛盘无法感知任何戴上尸妖所佩戴的纸浆面具的类人生物，也不能在魔法黑暗中或被毯子或类似物体覆盖时看到任何东西。

青铜盘重250磅。熊雕像用它们的石爪紧紧抓住盘子，所以如果不打碎雕像就无法撬动它。每个雕像是一个大型物体，具有17的AC；45点生命值；对非魔法攻击的钝击、穿刺和挥砍伤害免疫；以及对毒素和心灵伤害免疫。一个en=Detect Magic法术或类似的效果会揭示围绕盘子的占卜魔法气息。

任何戴着其中一个尸鬼的纸浆面具的生物，可以通过一次成功的DC 13力量（运动）检定推开石棺的盖子。对于其他所有生物而言，棺盖被魔法锁住，除非使用en=Knock法术，或由一名角色使用盗贼工具进行一次成功的DC 20敏捷检定，否则无法打开。

两个壁龛的后墙上都设有秘密门——一个在北边，另一个在南边。南边的秘密门边缘由燧石制成。打开这扇门会产生火花，点燃区域11中的气体（详见该区域的描述）。

石棺内尘土飞扬的一堆中躺着一只佐博（奥博娜卡的动物形态；一个防护戒指放在堆顶。如果这个戒指离开九神之墓（但见"失落的宝藏"），它就会化为灰尘并被摧毁。

奥博娜卡的精神试图占据任何触摸戒指的角色（见"九诡神亡魂"）。当奥博娜卡的精神显现时，阅读：

如果精神成功占据了角色，请给玩家ToA（见附录F）。如果尝试失败，精神将返回戒指并等待另一个角色触摸它。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_356_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[135],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个拱形的墓室长满了苔藓和藤蔓。一个石棺安放在房间中央的台阶上。在石棺后面的墙上，两座巨大的熊雕像抓住了一个直径五尺的铜盘，上面浮雕着一打瞪眼。六个干瘪的尸体坐在沿墙的壁龛中的宝座上。每个尸体都戴着一个由纸浆和羽毛制成的黑色面具。东边的一个拱形水晶窗户可以看到隧道的另一边。

当你触摸戒指时，尘埃旋转形成一个小巧、野性的熊状生物，伴随着幽灵般的咆哮向你扑来。`,dmGuidance:"见附录D）。"},{id:"scn_35e",locationId:"loc_326",name:"11. 气体囊",activation:{condition:{type:"always"},priority:0},skeleton:["这条地下河流的这一段积聚了带有腐烂气味的易燃气体。","如果将火炬、灯笼或其他明火带入该区域，或者通往 区域10 的密门被打开，气体会爆炸。","爆炸会烧尽气体，8小时后气体会再次积聚。"],flesh:"这条地下河流的这一段积聚了带有腐烂气味的易燃气体。如果将火炬、灯笼或其他明火带入该区域，或者通往 区域10 的密门被打开，气体会爆炸。气体囊袋区域或15英尺范围内的每个生物必须进行一次 DC 15 敏捷豁免，失败则受到 22（4d10）点火焰伤害，成功则只承受一半伤害。爆炸会烧尽气体，8小时后气体会再次积聚。",spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_35f",locationId:"loc_326",name:"12. 陷阱宝箱",activation:{condition:{type:"always"},priority:0},skeleton:["水从这个洞穴粗糙墙壁的裂缝和接缝中涌出，洞穴的地板是一个泥泞的水潭，水流通过外面的隧道排出。","就在水潭表面上方，一个大型宝箱悬挂在嵌入天花板的生锈链条上。","箱子长6尺，宽3尺，高3尺，悬挂在5尺深水池上方1尺处。","锁孔装饰成一个嘲笑的恶魔骷髅形状。",'围绕着锁孔，用通用语写的细小铭文是："我吞噬除了最伟大的盗贼之外的一切。'],flesh:`箱子长6尺，宽3尺，高3尺，悬挂在5尺深水池上方1尺处。锁孔装饰成一个嘲笑的恶魔骷髅形状。围绕着锁孔，用通用语写的细小铭文是："我吞噬除了最伟大的盗贼之外的一切。"

这个箱子被锁上了，而且似乎没有陷阱。然而，一个en=Detect Magic法术或类似效果会显示它周围环绕着塑能系魔法的灵光。撬开锁需要进行一次成功的DC 22敏捷检定，需使用盗贼工具。这样做也会解除锁上的魔法陷阱，使箱子能够安全打开。

若检定失败，恶魔头骨会咬住盗贼工具并将其摧毁。若检定失败且差值达到5或更高，魔法陷阱会将进行检定的角色传送到上锁的宝箱内部，该角色将陷入束缚状态。固定宝箱的锁链随后会将其释放入水，沉至池底。即使宝箱被移出水面，受困角色仍会在5轮后窒息。

这个箱子是一个中等大小的物体，具有13的AC，30点生命值，并对毒素和心灵伤害免疫。任何角色在水下尝试撬锁或用近战或远程攻击击中箱子时，都会处于不利状态。

箱子内部衬有铅皮，内含300金币，一个悲伤面孔的金质酒杯，当酒杯被倒满时，它的脸会露出微笑（价值250金币），以及一个塞着的骨筒，内含一张法术卷轴，上面写着en=Remove Curse法术。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_35f_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"水从这个洞穴粗糙墙壁的裂缝和接缝中涌出，洞穴的地板是一个泥泞的水潭，水流通过外面的隧道排出。就在水潭表面上方，一个大型宝箱悬挂在嵌入天花板的生锈链条上。"},{id:"scn_362",locationId:"loc_326",name:"13. 石骷髅",activation:{condition:{type:"always"},priority:0},skeleton:["一个巨大的石制骷髅头覆盖着苔藓，从通道的尽头突出。","它的每个眼窝里都有火焰闪烁，通过它张开的下巴可以看见一个里面的房间。","任何透过骷髅头窥视的角色都能看到区域14（见下面的描述）。","骷髅的下巴开得足够宽，允许一个中等大小或更小的生物爬过去。","每当一个生物爬过骷髅的下颌，其眼眶中的一团火焰便会熄灭。"],flesh:`任何透过骷髅头窥视的角色都能看到区域14（见下面的描述）。骷髅的下巴开得足够宽，允许一个中等大小或更小的生物爬过去。

每当一个生物爬过骷髅的下颌，其眼眶中的一团火焰便会熄灭。当生物第三次爬过时，下颌会猛然闭合，进行一次近战武器攻击，并获得+10加值。命中时，目标生物受到22点（4d10）钝击伤害，并受擒（逃脱DC 19）。在受擒期间，该生物在其每回合开始时受到5点（1d10）钝击伤害。当该生物离开下颌时，骷髅眼眶中的火焰重新点燃，下颌打开，陷阱重置。

眼窝中的火焰不产生热量或烟雾，除了上述方法外无法被熄灭。任何角色在搜索头颅并成功通过一个DC 15感知（察觉）检定时，会注意到下颌是铰接的。一个坚固的物体卡在头颅的下颌中，只要该物体能承受住伤害，就能保持开口状态。en=Detect Magic法术或类似效果会揭示头颅周围存在变化魔法的灵光。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[137],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个巨大的石制骷髅头覆盖着苔藓，从通道的尽头突出。它的每个眼窝里都有火焰闪烁，通过它张开的下巴可以看见一个里面的房间。"},{id:"scn_364",locationId:"loc_326",name:"14. 摩亚的墓",activation:{condition:{type:"always"},priority:0},skeleton:["覆盖着干泥的骷髅从这个墓穴墙壁上凿出的壁龛中怒视着。","一个石制的石棺位于房间的中心，盖子上雕刻着一条浮雕的盘曲蛇。","在石棺后面，位于大理石基座上的是一个华丽的水晶盒，里面有一个小小的人形骷髅在漂浮。","数百只狼蛛大小的不死蜘蛛在这些通道中爬行。","水晶盒中的头骨属于妮博特，她是奥穆最后一位女王纳帕卡的10岁孙女。"],flesh:`壁龛后面的墙壁上被切割出了许多细小的通道，任何成功通过 DC 10 感知（察觉）检定角色都可以听到其中传来的微弱而怪异的昆虫爬行声。数百只狼蛛大小的不死蜘蛛在这些通道中爬行。

水晶盒中的头骨属于妮博特，她是奥穆最后一位女王纳帕卡的10岁孙女。水晶盒的魔法保存了她的意识，但几个世纪的孤独和恐惧使她忘记了自己困境的细节。第一个进入墓穴的角色听到妮博特通过心灵感应呼唤：

妮博特通过魔法感知到入侵者的存在，使用心灵感应向所有角色提问。将她扮演成一个在黑暗中迷失的受惊孩子。在她的恐慌中，她可能会问以下任何问题：

"我在哪里？我是怎么来到这里的？"

"为什么我看不见任何东西？"

"你们是我父亲的的朋友吗？他在找我吗？"

为了安全地探索这个区域，角色们必须安抚妮博特，同时不揭露她的真实困境。欺骗她需要通过一个成功的DC 12魅力(欺瞒)检定。

妮博特拥有燃焰之颅的具体数值，但不会说话，而是使用心灵感应在30尺范围内进行交流。当她攻击时，在下一轮开始时，成群的木乃伊蜘蛛会从壁龛中涌出。

六群不死生物蜘蛛居住在墓穴墙壁内的巢穴中。它们被视为昆虫集群（蜘蛛），只不过它们对可以针对不死生物的效果敏感。

这些通道过于狭窄，中型或更大的生物无法进入，小型生物必须挤过才能通过。微小生物可以自由穿过通道。如果妮博特被激怒，虫群会攻击任何进入通道的生物或莫阿墓穴中的生物。

石棺并未上锁，可以通过一个成功的 DC 15 力量（运动）检定打开。内部，一捆褪色的布料中包裹着一条幻色蛇生物雅库利（诡计之神莫阿的动物形态；一根 巨蟒法杖 放置在这些遗骸上。如果这根法杖离开九神之墓，它将化为尘土并被摧毁（但参见 "失落的宝藏"）。

摩亚的精神试图占据任何触摸法杖的角色（见"九诡神亡魂"）。当摩亚的精神显现时，阅读：

如果精神成功占据了角色，请给玩家ToA（见附录F）。如果尝试失败，精神将返回法杖并等待另一个角色触摸它。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:["enc_364"],treasureSlotIds:["trs_364_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[137],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`覆盖着干泥的骷髅从这个墓穴墙壁上凿出的壁龛中怒视着。一个石制的石棺位于房间的中心，盖子上雕刻着一条浮雕的盘曲蛇。在石棺后面，位于大理石基座上的是一个华丽的水晶盒，里面有一个小小的人形骷髅在漂浮。

一个小女孩的声音在你的脑海中回响："发生了什么？为什么我看不见？"

当骷髅的眼窝中闪烁起绿色火焰时，声音惊恐地尖叫。随着一声碎裂的巨响，水晶盒爆炸了，骷髅悬浮在空中。

绿色烟雾从法杖中滚滚而出，像蛇一样缠绕着你。一个嘶嘶的声音在你的耳边低语：'让我帮助你！我保证会乖乖的。'`,dmGuidance:`如果角色们通过沿着河流的秘密通道进入这个墓穴，他们会看到区域13处石骷髅的凹面内侧。
如果角色们揭露她不过是一个无身的头颅，如果他们三次欺骗她的魅力检定失败，或者如果他们直接无视她，妮博特会变得越来越焦虑，然后陷入狂暴的杀戮情绪。
参见 附录D）的骨骼。`},{id:"scn_36d",locationId:"loc_326",name:"15. 风道",activation:{condition:{type:"always"},priority:0},skeleton:["雕刻的鸟儿在这条走廊的墙壁上翱翔。","在其北端附近阻挡通道的是一个带有五个锋利刀片的大型金刚石螺旋桨。","当走廊地板承受超过 20 磅的压力时，它会轰然启动。","一旦激活，螺旋桨将在 6 秒内加速至全速运转。","如果地板上的重量被移除，螺旋桨的叶片将需要整整一分钟才能减速至停止。"],flesh:`通过一次成功的 DC 15 感知（察觉）检定，一名角色可以察觉到整个走廊的地板是一个单一的压力板。这个精金螺旋桨的防御等级为 20，拥有 30 点生命值，并且对所有伤害类型（除了力场伤害）免疫。当走廊地板承受超过 20 磅的压力时，它会轰然启动。一旦激活，螺旋桨将在 6 秒内加速至全速运转。如果地板上的重量被移除，螺旋桨的叶片将需要整整一分钟才能减速至停止。

当螺旋桨在加速或减速旋转时，生物可以通过成功的 DC 20 敏捷（特技）检定从两片叶片之间的空隙中跃过。如果检定失败，该角色在穿过叶片时受到 33（6d10）点挥砍伤害。

全速运转时，螺旋桨对任何经过的生物造成66点（12d10）挥砍伤害，且叶片旋转过快，生物无法在它们之间跳跃。快速旋转的螺旋桨还会产生风洞效应，任何进入螺旋桨10英尺内或在此开始其回合的生物必须成功通过一次DC 15力量豁免。未通过豁免的生物将被向北扔入区域16的坑中。如果这种强制移动使生物穿过螺旋桨，生物将受到旋转叶片的伤害。

可以通过在两个叶片之间固定一个不动权杖来卡住螺旋桨。当螺旋桨转动时，其他魔法物品会被挤到一边。螺旋桨会摧毁所有夹在其旋转叶片之间的非魔法物品。

当螺旋桨静止时，一个未处于失能状态的生物可以用身体卡住机制。当螺旋桨开始转动时，该生物必须进行一次DC 20力量（运动）检定。如果检定成功，螺旋桨将被卡住，直到该生物的下一个回合开始，届时它可以利用其动作重复进行检定。检定失败或选择脱身的生物将受到11（2d10）点劈砍伤害，并被弹向螺旋桨的北侧。

如果螺旋桨连续3轮被卡住，它就会损坏并失去功能。第二天黎明时，威瑟斯 会派遣墓穴矮人来修复损坏，并将陷阱恢复到工作状态。`,spotlightRefs:[],presentNpcIds:["npc_withers","npc_nepartak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"雕刻的鸟儿在这条走廊的墙壁上翱翔。在其北端附近阻挡通道的是一个带有五个锋利刀片的大型金刚石螺旋桨。"},{id:"scn_36f",locationId:"loc_326",name:"16. 望戈的墓",activation:{condition:{type:"always"},priority:0},skeleton:["这个墓穴的入口处有一个深坑，底部放着一个石棺。","棺盖上装饰着一只咆哮的猴形生物。","越过深坑，三个宝箱放在石制的基座上。","左边的箱子是用黑色缟玛瑙雕刻而成，中间的箱子由生锈的铁制成，右边的箱子由银铸造而成，闪烁着霜冻的光芒。","这个坑深20尺。"],flesh:`这个坑深20尺。要解锁望戈的石棺，角色们必须从宝箱中找到并使用三把隐藏的钥匙。

每个箱子长5尺，宽3尺，高3尺。这三个箱子都没有上锁，而且（大多数情况下）是空的。箱子不能移动，并且对伤害和法术免疫。

打开任何一个箱子都会发现一个3英寸长的金钥匙从箱子盖子底部的金刚石钥匙孔中伸出。钥匙无法被移除，当箱子打开时，金刚石夹具会阻止钥匙转动。当箱子盖子关闭时，盖子内部会发出一声闷响，因为围绕钥匙的夹具松开了。任何爬进箱子并关闭盖子的角色都可以轻松地转动它的金钥匙。

如果当箱子关闭时转动箱子的钥匙，箱子就会锁定，夹具会再次紧紧夹住钥匙。如果此时有角色在箱子内部，他们将被困住。与此同时，望戈石棺的盖子上会神奇地出现一个按钮。

石棺的盖子上雕刻着望戈的苏怪形态（见附录D）的图案，并且已经用强大的魔法与石棺的其余部分融合在一起。因此，盖子无法被移除。石制石棺对伤害和法术免疫。

每当其中一个宝箱被锁定时，石棺盖上就会神奇地出现一个雕刻的按钮，位于望戈的怪物形象上方。每个按钮的材料与其对应的宝箱相匹配：缟玛瑙、生锈的铁或银色。按下按钮会同时解锁相关的宝箱，并触发其内部的陷阱：

按下黑曜石按钮会迫使黑曜石箱内的任何生物进行一次 DC 15 体质豁免，豁免失败则受到 75 点 (10d6 + 40) 的力场伤害。任何因该伤害生命值降至 0 点的生物将化为一堆灰尘，留下其所持有或穿戴的所有装备。

按下生锈铁制按钮会导致生锈铁制宝箱内的任何非魔法金属物体（包括宝箱中生物携带或穿戴的物品）腐蚀成一堆无价值的锈迹。部分由金属制成的物品会因为其金属部分的腐蚀而损毁。

按下银色按钮会使银色箱子内的任何生物进行一个 DC 15 的体质豁免检定，若失败则受到 45 (10d8) 点寒冷伤害，若成功则受到一半伤害。

一旦石棺盖上的所有三个按钮都被按下，请阅读：

当石棺变成晶体状时，它变得脆弱，具有AC 5，10点生命值，易受钝击和雷鸣伤害，对毒素和心灵伤害免疫。如果生命值降至0点，石棺会破碎，里面的苏怪木乃伊会活化并攻击。在战斗的第一轮，木乃伊激活它的恐惧之锤，对角色释放一波恐怖波动。之后，它使用权杖或其腐烂的拳头进行近战攻击。

望戈的木乃伊紧握着一把恐惧之锤。如果这把钉头锤离开九神之墓（但见"失落的宝藏"），它将化为尘土并被摧毁。

望戈的灵魂被束缚在钉头锤上。如果钉头锤击中或以其他方式接触到任何角色，望戈的灵魂会试图占据那个角色（见"九诡神亡魂"）。当望戈的灵魂显现时，请阅读：

如果灵成功附身于角色，请给玩家ToA（见附录F）。如果尝试失败，灵返回到钉头锤中，并等待另一个角色与之接触。木乃伊对任何被望戈的灵附身的角色表示友好，将该角色视为盟友。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:["enc_36f"],treasureSlotIds:["trs_36f_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个墓穴的入口处有一个深坑，底部放着一个石棺。棺盖上装饰着一只咆哮的猴形生物。越过深坑，三个宝箱放在石制的基座上。左边的箱子是用黑色缟玛瑙雕刻而成，中间的箱子由生锈的铁制成，右边的箱子由银铸造而成，闪烁着霜冻的光芒。

石制的棺材变成了透明的水晶，露出了里面木乃伊化的猴类生物。在其干燥的爪子中紧握着一把可怕的钉头锤。

红烟从钉头锤的头部沸腾而出，形成了一只长尾巴猴子的轮廓。伴随着一声咆哮，这团烟雾幻象向你扑来，尖叫着说："让我进去！"`},{id:"scn_377",locationId:"loc_326",name:"17. 地下瀑布",activation:{condition:{type:"always"},priority:0},skeleton:["地下河流直冲入一个黑暗、多岩石的峡谷。","冷气从下方旋转升起，就像某种怪物的呼吸。","透过昏暗，你发现一个华丽的宝箱放在对面的壁架上。","宝箱是一个伪装成物品的拟身怪。","如果任何生物触碰它，拟身怪会以物品形态进行攻击。"],flesh:`宝箱是一个伪装成物品的拟身怪。如果任何生物触碰它，拟身怪会以物品形态进行攻击。

岩壁距离瀑布边缘有15英尺。需要一个成功的 DC 14 力量（运动）检定来攀爬到岩壁。

这条岩壁湿滑不平。任何站在岩壁上的生物受到伤害时，必须成功通过一次 DC 10 敏捷豁免检定，否则会坠入裂缝，掉落到 区域64 的水中，坠落高度为 100 英尺。坠落会造成 35（10d6）点钝击伤害，如果成功通过 DC 10 敏捷豁免检定则不会受到伤害。`,spotlightRefs:[],presentNpcIds:["npc_nepartak"],availableInfoIds:[],encounterIds:["enc_377"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"地下河流直冲入一个黑暗、多岩石的峡谷。冷气从下方旋转升起，就像某种怪物的呼吸。透过昏暗，你发现一个华丽的宝箱放在对面的壁架上。"},{id:"scn_37a",locationId:"loc_37a",name:"第二层：欺骗之迷宫",activation:{condition:{type:"always"},priority:0},skeleton:["地图5.2展示了地牢的这一层。","墙上刻有嘲笑的恶魔面孔，空气中弥漫着腐烂肉体的恶臭。","由于没有光线滋养，填满第一层的植被并没有延伸到这里。"],flesh:"地图5.2展示了地牢的这一层。墙上刻有嘲笑的恶魔面孔，空气中弥漫着腐烂肉体的恶臭。由于没有光线滋养，填满第一层的植被并没有延伸到这里。",spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_37b",locationId:"loc_37a",name:"18. 恶魔坑",activation:{condition:{type:"always"},priority:0},skeleton:["这个十五尺见方的房间的墙壁和地板都裂开了，上面刻着惊恐的人形生物坠落的图像。","房间中央镶嵌着一个石制的浮雕，上面是一个长着胡须的恶魔面孔，涂成了绿色。","从它张开的大嘴里传来了绝望的哭声。","恶魔面孔形成了一个5尺宽的圆柱形竖井的入口，竖井下降10尺后在区域35的天花板上开口。","魔法黑暗充满了入口和竖井。"],flesh:`恶魔面孔形成了一个5尺宽的圆柱形竖井的入口，竖井下降10尺后在区域35的天花板上开口。魔法黑暗充满了入口和竖井。一个en=Detect Magicspell或类似的效果揭示了竖井内部的召唤和幻术魔法的气息。

成功施放 en=Dispel Magic (DC 16) 于黑暗上可驱散它。如果黑暗被驱散，其逐渐消逝的精华会魔法般地凝聚成一只 蝙蝠群，从竖井中飞出并攻击房间内的任何生物。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:["enc_37b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个十五尺见方的房间的墙壁和地板都裂开了，上面刻着惊恐的人形生物坠落的图像。房间中央镶嵌着一个石制的浮雕，上面是一个长着胡须的恶魔面孔，涂成了绿色。从它张开的大嘴里传来了绝望的哭声。"},{id:"scn_37d",locationId:"loc_37a",name:"19. 重力环",activation:{condition:{type:"always"},priority:0},skeleton:["在一个四路交叉路口，向北和向南的走廊向上弯曲并消失在视线之外，但没有栏杆或台阶可以攀爬。","一具半人半羊生物的尸体，身穿长袍，横卧在北方十尺处。","它紧握着一根顶端有青铜山羊头的手杖。","弯曲的走廊形成一个完美的圆圈，被赋予了魔法重力，使得生物在沿着它行走时被束缚在地面上。","一个en=Detect Magic法术或类似的效果揭示了走廊内的变形术光环。"],flesh:`弯曲的走廊形成一个完美的圆圈，被赋予了魔法重力，使得生物在沿着它行走时被束缚在地面上。一个en=Detect Magic法术或类似的效果揭示了走廊内的变形术光环。

尸体属于Devlin Bashir，一位来自卡利什的法师，也是黄旗公司的一员。Devlin的山羊般的特征是因为一个诅咒，他在与同伴分开后被墓穴矮人杀害。任何对他的遗体的检查都显示他是被斧头和弩箭的伤口杀死的。Devlin的墨迹斑斑的长袍里藏有一本暗示着墓穴秘密的日志（见下文的"Devlin的日志"）。对尸体的搜索还发现了一些更有价值的物品（见下文的"财宝"）。

任何被帕帕扎图或莎根比的灵魂附身的角色在进入这个区域时会收到建议：

专横的帕帕扎图敦促他的宿主命令另一个角色走过圆形大厅的全长。

睿智的莎根比警告她的宿主，倒下的法师手中的法杖可能被诅咒了。

圆形走廊的中点，直接位于交叉路口的"对面"，是一个看不见的位面门，无法用魔法检测。任何生物穿过这个门都会进入一个平行现实。走过圆形走廊全长的角色会注意到Devlin的身体不再存在——那些在他们后面等待的同伴也不在了。如果他们通过门返回，他们将回到自己的世界。

为了测试他的陷阱，阿瑟瑞克制造了一个"镜之墓"并将其隐藏在一个半位面中。这个镜之墓与一年前的真正墓穴完全相同。在镜之墓中遇到的所有物体和生物看起来都是真实的，但如果被带到真实世界，它们就会消失。镜之墓拥有与真正墓穴相同的魔法防御，任何在半位面中死亡的角色都会被Soulmonger困住。

每天黎明，阿瑟瑞克的魔法都会用新的构造物替换镜之墓。被杀的怪物在其原始位置重新出现，移动的物体传送回它们被发现的地方。当这种情况发生时，镜之墓内的角色会目睹空气中出现一种奇怪的扭曲波纹。

早期的记录记载了黄旗团在楚尔特的事迹。团队在基切尔河口登陆，沿着奥伦河前往洛湖，然后向西南方向进入丛林，前往奥穆。日记描述了惊险的遭遇，冒险者在奥穆寻找谜题立方体的过程，他们与蛇人的交锋，以及真正墓穴入口的发现。只有最后一条记录提到了他们在墓穴中的经历，但并未提及德文林的法杖（见下方的"宝藏"）。

任何花费10分钟仔细研究日志的角色都可以注意到对其他公司成员的一些简短提及：Lord Brixton（一位科米尔骑士），Bravus Boulderborn（一位摩拉丁的金矮人牧师），Seward（一位Chondathan人类游侠），以及Sephirius（一位常被称为'Seph'的龙裔圣武士）。

对Devlin身体的搜索还发现了一瓶永不耗尽的墨水（价值100金币）和一本包含以下法术的咒语书：

1环法术：en=Alarm, en=Comprehend Languages, en=Detect Magic, en=Expeditious Retreat, en=Identify, en=Illusory Script, en=Sleep, en=Tenser's Floating Disk

2环法术：en=Arcane Lock, en=Cloud of Daggers, en=Flaming Sphere, en=Knock

3环法术：en=Dispel Magic, en=Fireball

Devlin的法杖是一根强袭法杖，但任何与之共鸣的角色在3天内会变成山羊-人类混生体。提夫林对这种诅咒免疫。在第一天，粗糙的毛发开始在被诅咒的角色全身生长。24小时后，角色的眼睛变得像山羊，额头上长出短角。在最后一天，角色的手指和脚趾融合成双位数，角长到全尺寸。这种转变不会阻止角色使用武器或施放法术。en=Remove Curse, en=Greater Restoration，或任何其他结束诅咒的效果可以恢复角色的原始外观，但只有en=Wish法术可以消除法杖改变与之共鸣者的能力。`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_withers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_37d_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在一个四路交叉路口，向北和向南的走廊向上弯曲并消失在视线之外，但没有栏杆或台阶可以攀爬。一具半人半羊生物的尸体，身穿长袍，横卧在北方十尺处。它紧握着一根顶端有青铜山羊头的手杖。",dmGuidance:"当角色们找到德文林的日记时，给玩家们一份位于附录 E中的手稿21的副本，展示日记的最后一条记录。"},{id:"scn_383",locationId:"loc_37a",name:"20. 假墓",activation:{condition:{type:"always"},priority:0},skeleton:["在西侧隧道的天花板上嵌有一块石头。",'这块石头是房间陷阱的一部分（见下文"陷阱"）。',"这个房间散发着葡萄酒的香味。","在一个棋盘格大理石地面上，一具镀金的棺材在阳光下闪闪发光，阳光从房间的拱形天花板上流泻下来，天花板高高在上十二尺。","四个巨大的石像鬼头，张开的嘴巴，从墙壁上突出。"],flesh:`在西侧隧道的天花板上嵌有一块石头。搜索隧道的角色在进行一次成功的DC 15感知（察觉）检定时会发现这块石头。这块石头是房间陷阱的一部分（见下文"陷阱"）。

幻术魔法生成了照射在棺材上的阳光。这种光线被视为真实的阳光，对阳光敏感的生物会受到其影响。石像鬼头雕像高5英尺，宽5英尺，嘴巴直径为2英尺。每个头后面有一个气密石阀，阻断了进入的通道。阀门在房间的陷阱激活前保持关闭，但可以通过en=Knock或一个成功的DC 25力量（运动）检定强行打开。对幻象阳光施放en=Dispel Magic可以使其消失，并防止陷阱触发。

任何被Kubazan或Moa的灵魂附身的角色在进入这个区域时会收到建议：

活泼的Kubazan试图说服他的宿主打开棺材盖并猛击里面的东西。

诚实的Moa指出这座墓穴与他的任何神性伴侣的象征都不相符。

这个封闭的棺材被至尊胶粘在地板上，并且有一个铰链盖。一个en=Detect Magic法术或类似的效果揭示了棺材周围的防护魔法光环。棺材内的一块木牌用通用语写着"沉溺于悲伤"。

如果棺材打开时从天花板落下的幻象阳光照射到铭牌上，房间外走廊的石块会缓慢下降，并在6秒内封闭入口。在此期间，任何希望进入或离开墓穴的生物可以这样做，移动至多其速度的距离。如果生物在石块下结束其移动，它必须进行一次 DC 15 敏捷豁免。若豁免成功，生物成功从石块下移向其移动方向的一侧。若豁免失败，生物受到55（10d10）点钝击伤害。如果此伤害将生物的生命值降至0，它被压成肉酱；否则，生物被推入房间。石块对伤害和法术免疫。当完全降下时，石块气密且无法被移动。

四个装满红酒的巨型蓄水池隐藏在石像鬼头像后的墙壁中。当石块封住入口时，头像后的阀门会打开，使得红酒从石像鬼的嘴和鼻孔中涌出。酒水会以每轮1英尺的速度淹没墓室。在酒水涌出时试图爬入石像鬼的嘴中，需要通过一次 DC 25 力量（运动）检定。

当红酒开始涌入房间时，所有在场的生物必须进行先攻检定。追踪轮次的流逝：

在第三轮开始时，三个酒诡（使用水诡的具体数值）从西北、东北和东南的储水池流入墓穴。这些怪异攻击墓穴中的任何人，并且在完全浸没在红酒中时是隐形的。

12轮后，葡萄酒会填满墓室。使用第九章中的水下战斗规则来处理在这些条件下的战斗。葡萄酒中的视野仅限于5英尺。

在水中呼吸的能力并不能帮助在红酒中溺水的角色。当10分钟过去后，封闭墓穴的石块升回到天花板上的凹槽中。红酒沿着西隧道倾泻而下，流下宏伟的楼梯（区域7）。第二天黎明，威瑟斯派遣墓穴矮人清理房间和隧道，之后红酒储水池神奇地重新填满，陷阱重置。

西南爬行通道向上通往区域24。当墓穴被红酒淹没时，液体会流到爬行通道的倾斜部分。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:["enc_383"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[141],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间散发着葡萄酒的香味。在一个棋盘格大理石地面上，一具镀金的棺材在阳光下闪闪发光，阳光从房间的拱形天花板上流泻下来，天花板高高在上十二尺。四个巨大的石像鬼头，张开的嘴巴，从墙壁上突出。"},{id:"scn_388",locationId:"loc_37a",name:"21. 僵尸门",activation:{condition:{type:"always"},priority:0},skeleton:["站在阳台上的冒险者听到从这扇门里传来的咕哝呻吟声。","一扇九尺宽、九尺高的石门上雕刻着三个椭圆形的洞，位于人头高度。","当你接近时，三个类人生物的头从洞中伸出，每个头上都覆盖着腐烂的肉，并且正咬着固定在链条马勒上的铁制嚼子。","这些咬合的头属于三个丧尸们，它们被链子拴在门南侧天花板上的滑轮上。","滑轮的设置是这样的：当所有三个僵尸远离门移动时，它们会将其抬起打开。"],flesh:`站在阳台上的冒险者听到从这扇门里传来的咕哝呻吟声。

这些咬合的头属于三个丧尸们，它们被链子拴在门南侧天花板上的滑轮上。滑轮的设置是这样的：当所有三个僵尸远离门移动时，它们会将其抬起打开。僵尸在新鲜肉从阳台上引诱它们时不会移动，但如果它们被成功驱赶，它们会抬起门向南逃跑。

这扇门重1000磅。力量值总和达到33或更多的角色可以抬起这扇门。僵尸会攻击它们能够触及的任何生物。威瑟斯和他的墓穴矮人在24小时内会替换被摧毁的僵尸。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:["enc_388"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[141],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一扇九尺宽、九尺高的石门上雕刻着三个椭圆形的洞，位于人头高度。当你接近时，三个类人生物的头从洞中伸出，每个头上都覆盖着腐烂的肉，并且正咬着固定在链条马勒上的铁制嚼子。"},{id:"scn_38a",locationId:"loc_37a",name:"22. 帕帕扎图的墓",activation:{condition:{type:"always"},priority:0},skeleton:["六个装满类人生物骨头的玻璃大锅排列在这个墓穴的墙壁上，墓穴中心是一个古老的战车，上面放着一个铜制的石棺，上面散布着财宝。","战车车身上的绘画展示了一只高大的鸟，有着长而锋利的喙。",'在南墙上，一面铜盾牌上浮雕着一个手持长矛的Chultan战士的形象，上方的铭文写着，"不向任何人鞠躬。','"盾牌两侧的基座上各立着四尊铜像。',"它们描绘了Chultan战士：一个手持剑，两个手持矛，还有一个失去了面部。"],flesh:`帕帕扎图的骨头被安放在石棺内，但它们受到了很好的保护（见下文的"玻璃大锅"和"铜盾牌"）。

任何被娜浪或奥博娜卡的灵魂附身的角色在进入这个区域时会收到建议：

贪婪的娜浪鼓励她的宿主从战车上抓取一些财宝。

紧张的奥博娜卡警告其宿主，大锅包含着帕帕扎图最狂热信徒的骨头，他们即使在死后也可能寻求保护他。

扰乱战车、石棺或上面散落的财宝会导致十二个骷髅们从玻璃大锅中爬出来（每个大锅中两个）。所有的骷髅在同一先攻计数上行动。在骷髅的回合开始时，每个大锅会额外吐出一个骷髅，直到大锅被摧毁或墓穴中的入侵者被清除。当没有敌人剩余时，任何剩余的骷髅会返回大锅。

摧毁大锅会阻止骷髅的涌出，同样，向无面雕像鞠躬（"不向任何人鞠躬"）也有此效果。每个大锅是一个大型物体，具有AC 15，22生命值，易受钝击和雷鸣伤害，并对毒素和心灵伤害免疫。一个en=Detect Magic法术或类似的效果会揭示大锅周围的召唤光环。一个空的大锅重500磅。

铜盾牌悬挂在墙上，用皮带固定。它对en=Detect Magic法术或类似的效果发出了召唤魔法的辐射。

如果战车、石棺或宝藏被惊动，或者盾牌从墙上被取下，上面浮雕的猎人就会活化。每轮在先攻值20时，它会向它所能看见的最近角色投掷一根魔法力场矛，忽略任何在无面青铜雕像前鞠躬的生物。猎人看不见盾牌前侧后面的任何生物。当它向一个生物投掷矛时，猎人进行一次远程法术攻击（命中+10），命中时造成18（4d8）力场伤害。被此攻击将生命值降至0的目标会瓦解并化为粉尘。

要阻止盾牌的守卫攻击，角色必须通过将不透明物品（如袋子或斗篷）覆盖在盾牌上或将盾牌转向墙壁来使其失明。盾牌也可以被摧毁；它有AC 15，10点生命值，并且对所有伤害免疫，除了力场伤害。如果从房间中拿走，盾牌会消失，并在雕像之间的墙壁上重新出现。

石棺内装有一只易碎的头骨和骨头，属于一个魔王鹤（帕帕扎图的动物形态；

石棺上散布着以下财宝：一个金项圈（250金币），三个金杯（每个75金币），五个金斗篷别针（每个25金币），以及一个健康护符。如果这个护身符离开九神之墓，它会变成灰尘并被摧毁（但见"失落的宝藏"）。

帕帕扎图的精神试图占据任何触摸到健康护符的角色（见"九诡神亡魂"）。当帕帕扎图的精神显现时，请阅读：

如果灵魂成功附身于角色，给玩家ToA（见附录F）。如果尝试失败，灵魂返回到护身符中，并等待另一个角色触摸它。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:["enc_38a"],treasureSlotIds:["trs_38a_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[142],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`六个装满类人生物骨头的玻璃大锅排列在这个墓穴的墙壁上，墓穴中心是一个古老的战车，上面放着一个铜制的石棺，上面散布着财宝。战车车身上的绘画展示了一只高大的鸟，有着长而锋利的喙。在南墙上，一面铜盾牌上浮雕着一个手持长矛的Chultan战士的形象，上方的铭文写着，"不向任何人鞠躬。"盾牌两侧的基座上各立着四尊铜像。它们描绘了Chultan战士：一个手持剑，两个手持矛，还有一个失去了面部。

奇怪的阴影在墙壁上移动，形成了一只长腿鸟的轮廓。它的喙向你刺来，一个声音在你的脑海中回响："你将按我的命令行事！"`,dmGuidance:"见附录D）。"},{id:"scn_393",locationId:"loc_37a",name:"23. 瓶中精灵",activation:{condition:{type:"always"},priority:0},skeleton:["古老的蛛网布满这条狭窄的走廊，走廊的中点有一个拱形壁龛。","壁龛内，一个满是灰尘的瓶子放在桌上。","这个瓶子被塞住了，里面装有一个名叫Keshma al-Wazir的土巨灵，几个世纪前被阿瑟瑞克困住。","任何检查瓶子的人都会看到瓶内的精灵挥手示意，并听到她的声音在呼救。","Keshma只会说Terran语。"],flesh:`这个瓶子被塞住了，里面装有一个名叫Keshma al-Wazir的土巨灵，几个世纪前被阿瑟瑞克困住。任何检查瓶子的人都会看到瓶内的精灵挥手示意，并听到她的声音在呼救。Keshma只会说Terran语。起初，她命令角色们释放她。如果他们拒绝，她会尝试与他们讨价还价（见下文的"扮演Dao的角色"）。在被困在瓶子里时，Keshma不能攻击或施放法术。一旦她被释放，她可以施放en=Tongues法术，以更好地与解放者沟通。

如果瓶子被打破或拔掉塞子，道就会出现在沙尘暴中。她履行了对角色们做出的任何承诺以换取自由，然后施展了en=Plane Shift法术，试图返回元素位面的土元素界。（自然，尝试失败了，她最终被困在区域57。）

任何被Moa、娜浪或帕帕扎图灵魂附身的角色在看到瓶中的精灵时会收到建议：

真实的摩亚劝告他的宿主不要违背与道达成的任何协议。

贪婪的娜浪建议她的宿主与dao达成只对宿主和她自己有利的交易。

骄傲的帕帕扎图鼓励他的宿主像对待卑躬屈膝的奴才一样对待dao。

数十年的囚禁几乎没有削弱凯什玛的傲慢本性。作为一个道，她将角色视为低等生物，并且只有在他们拒绝她的命令时才会与他们交易。

起初，Keshma承诺以自由换取财富——她编织头发中的蓝宝石和她手臂上的铂金臂环（见下文的"财宝"）。在大局中，这些小玩意儿对dao来说意义不大，但她在放弃它们时假装痛苦。最后，她提出要和他们一起穿越墓穴，并用她的法术帮助他们三次。

一旦获得自由，凯什玛会信守诺言。然而，她不会容忍对她荣誉的任何侮辱。如果她感到被侮辱，她会攻击角色并试图奴役他们。

dao可能会成为角色们的棘手问题或一个难以相处的盟友。她对墓穴防御的无知限制了她如果施放en=Plane Shift法术时只能到达区域57区域。如果她从区域57逃脱，她期望角色们帮助她找到一个安全离开墓穴的路径。当她了解到诡计之神时，Keshma鼓励角色们寻找他们，并利用他们来击败阿瑟瑞克。

道穿着两条蓝宝石绳索（每条价值1,250金币），两个雕刻有对龙的白金臂环（每个750金币），以及一颗黄玉脐部宝石（价值500金币）。`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_withers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_393_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[142],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"古老的蛛网布满这条狭窄的走廊，走廊的中点有一个拱形壁龛。壁龛内，一个满是灰尘的瓶子放在桌上。",dmGuidance:"如果角色们要求更多，Keshma承诺将他们带到多元宇宙的任何地方。"},{id:"scn_398",locationId:"loc_37a",name:"24. 娜浪的墓",activation:{condition:{type:"always"},priority:0},skeleton:["这里的空气中弥漫着硫磺和沥青的恶臭。","在这个房间的地板上，一个用盐画的五角星围绕着一个华丽的石棺，其盖子上覆盖着跳跃的蛙类人形生物的小雕像。","一只隐形的史拉灰蟾在盐制五角星内踱步。","魔法结界防止了史拉蟾扰乱盐分或离开圆圈的范围。","如果另一个生物攻击史拉蟾，进入边界圆圈的区域，或通过扫除或刷去盐分破坏圆圈或五角星的任何部分，史拉蟾就会被释放。"],flesh:`一只隐形的史拉灰蟾在盐制五角星内踱步。魔法结界防止了史拉蟾扰乱盐分或离开圆圈的范围。如果另一个生物攻击史拉蟾，进入边界圆圈的区域，或通过扫除或刷去盐分破坏圆圈或五角星的任何部分，史拉蟾就会被释放。渴望屠杀的生物将怒火发泄在角色们身上，然后离开房间去寻找它的控制宝石，却不知道它被保存在区域28区域。

任何被奥博娜卡或望戈的灵魂附身的角色在进入这个区域时会收到建议：

谨慎的奥博娜卡认为盐制的五角星阵可能需要更多的盐，并鼓励她的宿主如果有任何盐的话添加进去。（这样做不会破坏困住史拉蟾的结界。）

鲁莽的望戈不太在乎盐制五角星，他敦促他的宿主破坏这个符号，看看会发生什么。

石棺顶部排列着十二个描绘格朗格的彩绘木雕。它们很可爱但毫无价值。石棺的盖子可以通过成功的DC 17力量（运动）检定抬起并推开。里面是一个涂过清漆的陶瓮，装着格朗格的头骨和骨骼（娜浪的动物形态；

一个 en=Detect Magic 法术或类似效果会揭示出围绕陶罐的附魔灵光。第一个触摸陶罐或扰乱其内容的生物必须成功通过一次 DC 21 的感知豁免，否则将受到 en=Otto's Irresistible Dance 法术的影响。直到效果结束，该生物在每个回合结束时还会受到 11（2d10）点心灵伤害，因为不和谐的打击乐声淹没了它的心智。任何处于 en=Mind Blank 法术或类似魔法效果下的生物不会听到这音乐或受到心灵伤害。成功的 en=Dispel Magic（DC 18）可以驱散陶罐上的效果，使其可以被安全地触摸。

在石棺内有一个伪装成剧毒药水的极效治疗药水，还有一个石化的格朗蛋，它的作用相当于一个法力再生珍珠。一个施法者如果与这个蛋同步，也会获得对毒素伤害的抗性。如果蛋离开九神之墓（但见"失落的宝藏"），它会变成灰尘并被摧毁。

娜浪的精神试图占据任何触摸到蛋的角色（见"九诡神亡魂"）。当娜浪的精神显现时，请阅读：

如果灵魂成功附身于角色，给玩家ToA（见附录F）。如果尝试失败，灵魂返回到卵中并等待另一个角色触摸它。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:["enc_398"],treasureSlotIds:["trs_398_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这里的空气中弥漫着硫磺和沥青的恶臭。在这个房间的地板上，一个用盐画的五角星围绕着一个华丽的石棺，其盖子上覆盖着跳跃的蛙类人形生物的小雕像。

当你触摸这个蛋时，一条粘液触须从其表面升起并变成了一个蛙状的头部，向你摇摆而来。一个蛙鸣般的声音在你的脑海中响起："娜浪现在会帮助你。"`,dmGuidance:'参见附录D），以及一些贵重物品（参见下面的"宝藏"）。'},{id:"scn_39f",locationId:"loc_37a",name:"25. 占卜池",activation:{condition:{type:"always"},priority:0},skeleton:["秘密门后面，水充满了一个雕刻的石质圣水池。","威瑟斯 使用这种字体与墓外的生物交谈，并联系他的陵墓守卫。","一个en=Detect Magic法术或类似的效果揭示了水上的占卜光环。","当任何角色凝视这个水池时，请阅读：","当水开始旋转时，诡异的光线从盆中散发出来。"],flesh:`威瑟斯 使用这种字体与墓外的生物交谈，并联系他的陵墓守卫。一个en=Detect Magic法术或类似的效果揭示了水上的占卜光环。当任何角色凝视这个水池时，请阅读：

凝视着圣水池的人可以通过一个随机的墓穴守卫的眼睛看到它在地牢中巡逻。选择一个随机的楼层（或者掷一个d6）并描述守卫穿过它的路径。守卫依赖于黑暗视觉来看见，所以池中的图像是黑白的。如果没有角色凝视水，图像就会消失，窥视效果也会结束。

除非凝视水池的角色之一佩戴着黑颅骨护符（见附录C和区域28），否则墓穴守卫在1分钟后会察觉到这个窥探。当这种情况发生时，请阅读：

陵墓守卫 是一个穿着板甲的血肉魔像（AC 17）。当它从圣水池中出现时，它会攻击房间里的每个人，一直战斗到被摧毁。当守卫出现时，水池的窥视能力直到下一个黎明才会恢复。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:["enc_39f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`秘密门后面，水充满了一个雕刻的石质圣水池。

当水开始旋转时，诡异的光线从盆中散发出来。慢慢地，在水面上显现出一个图像。

水池表面爆炸，一个穿着板甲和桶形头盔的庞大身影从水池中升起。`},{id:"scn_3a3",locationId:"loc_37a",name:"26. 螺旋楼梯",activation:{condition:{type:"always"},priority:0},skeleton:["三个拱门俯瞰着一个圆形的房间，一个螺旋楼梯向下延伸进入黑暗。","楼梯的墙壁上排列着未点燃的火把，装在铁制壁灯中，并设有壁龛，里面装有腐烂的人形头骨和骨头。","这段楼梯从2层下降到3层、4层和5层，每层比上一层低25尺。","壁龛中的骨头和头骨属于被阿瑟瑞克牺牲的死者Omuans，他为了建造墓穴而牺牲了他们。","威瑟斯和他的墓穴矮人使用这些楼梯在各层之间移动。"],flesh:`这段楼梯从2层下降到3层、4层和5层，每层比上一层低25尺。壁龛中的骨头和头骨属于被阿瑟瑞克牺牲的死者Omuans，他为了建造墓穴而牺牲了他们。威瑟斯和他的墓穴矮人使用这些楼梯在各层之间移动。

火把可以从它们的支架上取下来并带到其他地方。`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_withers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"三个拱门俯瞰着一个圆形的房间，一个螺旋楼梯向下延伸进入黑暗。楼梯的墙壁上排列着未点燃的火把，装在铁制壁灯中，并设有壁龛，里面装有腐烂的人形头骨和骨头。"},{id:"scn_3a5",locationId:"loc_37a",name:"27. 墓穴矮人的锻造场",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的墙壁上摆放着老旧的木凳和架子，上面布满了齿轮、链条、陷阱组件，以及装满老鼠的笼子。","点燃的铁制火盆通过链条悬挂在天花板上。","在北墙边，一个台阶状的高台上设置着一个笨重的装置：一种铁处女，连接着一个由蒸汽活塞、管子和冒泡的血池组成的网络。","五个戴着面具的矮人正在操作这个装置。","每个矮人都拥有尸妖的属性数据，但它们手持战斧和轻型十字弩。"],flesh:`每个矮人都拥有尸妖的属性数据，但它们手持战斧和轻型十字弩。

任何搜索该熔炉的角色都能发现足够组装两套盗贼工具、一套工匠工具、一套炼金工具、一套石匠工具和一套铁匠工具的装备。笼中的老鼠被用来测试陷阱。

矮人们使用基座上的铁制装置从被杀冒险者的尸体中制造墓穴守卫。

从装置中出现的生物是一个陵墓守卫——一个被板甲包裹的血肉魔像（AC 17）。这个守卫是用黄旗公司的冒险家Seward的遗骸和其他一些不幸的入侵者的遗体制成的。现在它是一个没有思想的不死生物，一看到角色就会攻击。

任何搜索铁匠铺的角色会发现一个幽魂灯笼（见附录C），它曾经属于西沃德。它放在一张长椅上，旁边有一些工具。

一位名为Starfallen的女性月精灵魔契师的灵魂居住在幽魂灯笼内。如果任何角色触摸灯笼，就能看到里面的精神。这个灵魂是无实体的，不能受到伤害，也不能造成伤害。它说通用语、精灵语和森林语。如果灯笼被摧毁，灵魂将被困在Soulmonger中。

星辰陨落者几乎在一千年前被一位废陋巨人杀死。她死后，她的灵魂寄居在灯笼里。黄旗公司发现了灯笼，并开始寻找一种方法来使星辰陨落者复活。传说中的扎尔特克之眼据说拥有复活古代死者的力量。公司追踪宝石到了墓穴，但从未找到它就灭亡了。

Starfallen的灵魂随着时间的推移已经变得衰弱并开始健忘。她对自己过去的事情或与黄旗公司的旅行记忆甚少，但是某些事情可能会唤起她的记忆。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:["enc_3a5"],treasureSlotIds:["trs_3a5_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间的墙壁上摆放着老旧的木凳和架子，上面布满了齿轮、链条、陷阱组件，以及装满老鼠的笼子。点燃的铁制火盆通过链条悬挂在天花板上。在北墙边，一个台阶状的高台上设置着一个笨重的装置：一种铁处女，连接着一个由蒸汽活塞、管子和冒泡的血池组成的网络。五个戴着面具的矮人正在操作这个装置。

铁制装置在打开时震动着，释放出一股嘶嘶作响的蒸汽。在翻滚的蒸汽中，一个戴着桶形头盔的装甲身影踏步进入视野。`,dmGuidance:`当角色们到达时，五名墓穴矮人正在室内工作。
如果冒险者离开此区域，当他们返回时有50的几率会遇到1d4名在墓穴中游荡的其他墓穴矮人。
当角色们到达时，墓穴矮人们正在进行他们最新创造物的释放过程。
如果玩家陷入困境，你可以利用Starfallen作为提供提示的手段，以保持冒险的正轨。`,mapGeometry:{imageRef:"adventure/ToA/071-504.webp"}},{id:"scn_3aa",locationId:"loc_37a",name:"28. 威瑟斯的办公室",activation:{condition:{type:"always"},priority:0},skeleton:["蜡烛昏暗地照亮了一个杂乱的办公室。","一只骷髅般的鸣禽在角落里的一个肮脏笼子里对你嘶哑地叫着。","其他的家具包括一个木制写字台和一把高背椅子。","用木炭画的解剖图挂在桌子后面的墙上。","坐在椅子里的是一个干瘪的人形尸体，穿着发霉的长袍，戴着一个雕刻成皱眉表情的青铜面具。"],flesh:`在他变成不死生物之前，威瑟斯 是一位名叫戈拉的奥姆工程师。像奥姆的所有公民一样，戈拉被奴役并被迫建造墓穴。当阿瑟瑞克 牺牲他的工人以创建自己的地牢时，戈拉的陷阱表现最佳。这足以让大巫妖满意，于是他将戈拉变成了一个尸妖，并有以下变化：

威瑟斯的智力值为16（+3）。

他佩戴着一个黑颅骨护符（见附录C），并且没有携带长弓。

他具备以下描述的施法特性。

他的挑战等级为4（1,100经验值）。

七个蠕行之爪们跟随着他并听从他的命令。

威瑟斯对阿瑟瑞克极其忠诚。他对学习的热爱延续到了他的不死之身，赋予了他一个难得的机会，可以永远地学习。他的办公室墙壁上贴满了自然历史和解剖学的论文，他使用区域25区域的水晶球通过Omu的石像鬼的眼睛研究自然世界。

当他遇到角色们时，威瑟斯渴望在杀死他们之前尽可能多地了解一切。他对楚尔特当前的事务以及外国的历史特别感兴趣。然后，带着一些遗憾，他最终宣布是时候让他们死了。威瑟斯宁愿逃跑也不愿意被摧毁或被俘，因此如果战斗对他不利，他会使用他的法术撤退，并保留en=Wall of Fire法术来切断追击者的退路。

威瑟斯 是一位勤奋的抄写员。他发霉的日记记录了奥穆与九神之墓的历史，详细描述了萎缩者的到来以及灵魂吞噬者的建造。任何角色花10分钟翻阅这些日记，都会发现一个突出的条目。将该角色的玩家交给附录E中 附录 E 的副本。要更详细地补充这些日记，请参考第三章中的 "奥穆的历史" 部分以及本章前面的 "坟墓的历史"。

威瑟斯的桌子上有足够的设备可以组装成一个学者包。一本魔像手册（粘土）打开着放在他的桌子上，旁边是一本包含他所有准备好的法术的咒语书。在咒语书的内侧封底上似乎有一个名字：Khomara Blackfire。'Khomara'和'Blackfire'实际上是区域50区域的摄心镜的命令词。

桌子的抽屉里有一个半透明的、拳头大小的灰色石头，它向en=Detect Magic法术或类似效果散发出魔法的气息。这块石头是区域24区域灰色史拉蟾的控制宝石。

威瑟斯的骷髅歌鸟被驯服但脾气暴躁。它不能飞，但可以被卖给南扎路港的买家，售价为75金币。威瑟斯的青铜面具价值25金币。`,spotlightRefs:[],presentNpcIds:["npc_withers","npc_acererak"],availableInfoIds:["info_toa_soulmonger"],encounterIds:["enc_3aa"],treasureSlotIds:["trs_3aa_0"],eventIds:["evt_toa_withers_journal"],tone:"tension",_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"蜡烛昏暗地照亮了一个杂乱的办公室。一只骷髅般的鸣禽在角落里的一个肮脏笼子里对你嘶哑地叫着。其他的家具包括一个木制写字台和一把高背椅子。用木炭画的解剖图挂在桌子后面的墙上。坐在椅子里的是一个干瘪的人形尸体，穿着发霉的长袍，戴着一个雕刻成皱眉表情的青铜面具。在这个人形的脖子上挂着一个黑色的骷髅形护身符，一些被切断的手在他周围的桌子和地板上爬行。",dmGuidance:`【28. 威瑟斯的办公室】威瑟斯 是一个9级施法者。他的施法属性是智力（法术豁免 DC 13；法术攻击 +5）。他准备了以下法师法术：
随意施展的戏法：en=Acid Splash, en=Mage Hand, en=Minor Illusion, en=Prestidigitation
1环（4个法术位）：en=Detect Magic, en=Expeditious Retreat, en=Feather Fall, en=Thunderwave
2环（3个法术位）：en=Darkness, en=Hold Person, en=Rope Trick
3环（3个法术位）：en=Dispel Magic, en=Lightning Bolt
4环（3个法术位）：en=Blight, en=Wall of Fire
5环法术（1个位）：en=Telekinesis
当角色们到达时，威瑟斯 正在他的办公桌前工作。
如果角色们迎合他，他会在他们回答问题时表现得彬彬有礼。
有关控制宝石的更多信息，请参见怪物图鉴中的"Slaadi"条目。`,mapGeometry:{imageRef:"adventure/ToA/073-508.webp"},offerableQuestIds:["qst_main_toa"]},{id:"scn_3b0",locationId:"loc_3b0",name:"第三层：反思之库",activation:{condition:{type:"always"},priority:0},skeleton:["地图5.3显示了这个地牢的这一层次，一个名为Belchorzh the Unseen（不见的Belchorzh，见区域44）的隐形巨眼兽声称这里是它的家。","它没有巢穴动作和区域效果的使用权；","相反，它用奇异的外星生长物感染了它的家园。","邪眼怪的变异影响渗透了墓穴这一层次的石雕，导致紫色霉菌从地板、墙壁和天花板上生长出来。","这种霉菌闻起来像腐烂的尸体，偶尔还会释放出无害的孢子云。"],flesh:`地图5.3显示了这个地牢的这一层次，一个名为Belchorzh the Unseen（不见的Belchorzh，见区域44）的隐形巨眼兽声称这里是它的家。它没有巢穴动作和区域效果的使用权；相反，它用奇异的外星生长物感染了它的家园。

邪眼怪的变异影响渗透了墓穴这一层次的石雕，导致紫色霉菌从地板、墙壁和天花板上生长出来。这种霉菌闻起来像腐烂的尸体，偶尔还会释放出无害的孢子云。贝尔克霍可以透过这些眼睛观察，并利用它们追踪队伍的进展。

任何造成火焰、死灵或光耀伤害的效果在接触时都会摧毁一片异形生长物。然而，眼魔并不喜欢霉菌的破坏。当一片生长物被摧毁时，下一个最近的片会长出一根短粗的眼梗，射出一道随机确定的眼睛射线攻击最近的字符。（掷一个d10并参考眼魔的统计块来确定它产生哪种射线。）发动这次攻击后，眼梗迅速缩回霉菌中。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[146],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"当角色穿过有异域生长的区域时，小小的眼球会从霉菌中浮现出来审视他们。"},{id:"scn_3b3",locationId:"loc_3b0",name:"29. 豺狼面具",activation:{condition:{type:"always"},priority:0},skeleton:["一只咆哮的豺狼头的巨大雕刻从走廊尽头的墙壁上突出。","通过它牙齿间的缝隙可以看到一个房间。","牙齿间的缝隙只有2英寸宽，但任何通过缝隙查看的角色都能看到区域35区域：","四支火把照亮了蹲伏在这个十五尺高的房间角落的石制狮身人面像。","火把在雕刻在瓷砖地板上的象形文字上投下闪烁的光芒。"],flesh:`牙齿间的缝隙只有2英寸宽，但任何通过缝隙查看的角色都能看到区域35区域：

这个视角是一个通向过去的魔法窗口。任何通过豺狼的颚部看的人都能看到一个关于艾金的墓穴（区域35）的幻象，就像最后一个人进入之前的样子。过了一会儿，幻象揭示了一个人进入了房间。

这里的魔法记录了黄旗公司英雄布拉弗斯·鲍尔德伯恩的最后时刻。这位矮人忽视了角色们与他交流的任何尝试。

如果所有角色转身离开，幻象将重置。当任何角色下次通过面具看时，会看到矮人再次进入艾金的墓穴。

豺狼面具向en=Detect Magic法术或类似效果散发出占卜魔法的气息。如果任何角色使用传送或其他魔法绕过牙齿进入墓穴，将会在区域35区域发现矮人的腐烂骨架。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[146],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一只咆哮的豺狼头的巨大雕刻从走廊尽头的墙壁上突出。通过它牙齿间的缝隙可以看到一个房间。

四支火把照亮了蹲伏在这个十五尺高的房间角落的石制狮身人面像。火把在雕刻在瓷砖地板上的象形文字上投下闪烁的光芒。在房间的中心，一个镶金的葬礼船只矗立在一个三尺高的石制基座上。在船的甲板上休息着一个装饰有角兔的小金棺。一个黑暗的竖井在船的正上方的天花板上打开。

一块墙板突然向东向上磨动，一个戴着头巾和锁子甲的矮人悄悄进入墓穴。他挥舞着盾牌，小心翼翼地穿过地板。

当矮人踩上其中一块地砖时，发出了一声响亮的点击声。随后，随着蝗虫从斯芬克斯雕像的口中涌出，一阵震耳欲聋的嗡嗡声响起，很快就将他吞没了。他试图反击，但无济于事。当昆虫群消失后，除了骨头和装备外，矮人的一切都不见了。`},{id:"scn_3b8",locationId:"loc_3b0",name:"30. 铁制屏障",activation:{condition:{type:"always"},priority:0},skeleton:["在你们前方，一张咆哮的牛头人面孔被刻在一块铁板上，铁板将爬行通道一分为二。","它的眼睛被挖空了，让你可以透过铁板看到另一边，隧道在那边继续延伸。","牛头怪的面孔被刻在一块1英寸厚、锋利边缘的铁板上，铁板阻挡了爬行通道。","形成眼睛的洞孔宽2英寸。","角色们可以使用如en=Gaseous Form和en=Misty Step这样的法术来穿过铁板。"],flesh:`牛头怪的面孔被刻在一块1英寸厚、锋利边缘的铁板上，铁板阻挡了爬行通道。形成眼睛的洞孔宽2英寸。角色们可以使用如en=Gaseous Form和en=Misty Step这样的法术来穿过铁板。

任何检查这道屏障的角色都会发现它可以滑入天花板。卷簧提供了阻力，需要进行一次成功的 DC 17 力量（运动）检定才能举起这块板。如果检定成功，隐藏的闩锁会将板固定住，允许生物从下方爬过。除非用铁钉、坚固的武器或类似的物体将其楔住，否则屏障会在1分钟后迅速落下，再次封住爬行通道。当屏障迅速关闭时，任何在板下方的生物必须成功通过一次 DC 15 敏捷豁免，否则将受到44（8d10）点挥砍伤害。任何因此伤害降至0点生命值的生物将被切成两半。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[147],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在你们前方，一张咆哮的牛头人面孔被刻在一块铁板上，铁板将爬行通道一分为二。它的眼睛被挖空了，让你可以透过铁板看到另一边，隧道在那边继续延伸。"},{id:"scn_3ba",locationId:"loc_3b0",name:"31. 反射大厅",activation:{condition:{type:"always"},priority:0},skeleton:["一道水帘隔开了两个基本上是彼此镜像的走廊。","这个十五尺宽的走廊地面上覆盖着静止的水坑。","墙壁因潮湿而光滑，并装饰着壁画，壁画上展示着戴有动物头部的类人生物穿着盔甲，其中大部分似乎挥舞着挂在墙上的真正武器。","东墙上有一个三尺高的爬行通道，与地面齐平。","在大厅的远端，一道波光粼粼的透明水帘填满了一个石拱门。"],flesh:`一道水帘隔开了两个基本上是彼此镜像的走廊。

挂在墙上的失去光泽的武器状况很差，它们用钩子固定，使得看起来像是画中的战士们拿着它们。

每个走廊两侧各有十二个彩绘人物，西墙上六个，东墙上六个，彼此正对着。相对墙壁上的人物是彼此的完美镜像。

从南到北，这个大厅里的战士和武器如下所示：

鹤头男性手持手斧（东墙上的雕像在两腿之间有通往区域36的爬行通道）

长着蜥蜴头的女性手持钉头锤

豹头男性手持吹箭

未武装的鹰头女性（东壁画是幻象；见区域31A）

长着山羊头的男性手持镰刀

蛙头女性手持三叉戟

从南到北，这个大厅里的战士和武器如下所示：

蛙头女性手持三叉戟

长着山羊头的男性手持镰刀

未武装的鹰头女性（东壁画是幻象；见区域31A）

豹头男性手持吹箭

长着蜥蜴头的女性手持钉头锤

鹤头男性手持手斧（东墙上的雕像在其双腿之间有通往区域32的爬行通道）`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[147],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个十五尺宽的走廊地面上覆盖着静止的水坑。墙壁因潮湿而光滑，并装饰着壁画，壁画上展示着戴有动物头部的类人生物穿着盔甲，其中大部分似乎挥舞着挂在墙上的真正武器。东墙上有一个三尺高的爬行通道，与地面齐平。在大厅的远端，一道波光粼粼的透明水帘填满了一个石拱门。在水帘的另一边，你看到另一个看起来和你所在的走廊相似的走廊。",dmGuidance:"当角色进入第一个走廊时，请阅读："},{id:"scn_3bf",locationId:"loc_3b0",name:"31A. 隐藏凹室",activation:{condition:{type:"always"},priority:0},skeleton:["两个壁龛隐藏在5尺宽、8尺高的潮湿石墙幻象后面，墙上绘有鹰头女战士的画。","触摸任一部分墙面揭示了其石头和上面的图像都是幻象。","每个壁龛内都有一个基座，上面放置着一个直径为1英寸的水晶眼球：南边是一个淡紫色的眼球，北边是一个鲜绿色的眼球。","这对非魔法水晶之眼是打开邪眼怪金库（区域44）所需的十把钥匙中的两把。"],flesh:`两个壁龛隐藏在5尺宽、8尺高的潮湿石墙幻象后面，墙上绘有鹰头女战士的画。触摸任一部分墙面揭示了其石头和上面的图像都是幻象。

每个壁龛内都有一个基座，上面放置着一个直径为1英寸的水晶眼球：南边是一个淡紫色的眼球，北边是一个鲜绿色的眼球。

这对非魔法水晶之眼是打开邪眼怪金库（区域44）所需的十把钥匙中的两把。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[147],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_3c1",locationId:"loc_3b0",name:"31B. 水帘",activation:{condition:{type:"always"},priority:0},skeleton:["清澈的水在两条走廊之间形成了一道1英尺厚、7英尺高、10英尺宽的水幕，散发出一种咒法魔法的灵光，可以被en=Detect Magic法术或类似效果侦测到。","水幕在1小时后会魔法般地重新出现。","如果任何生物携带三叉戟穿过水幕，什么也不会发生。","任何三叉戟都可以，不仅仅是走廊里的那些。","如果有任何生物在没有三叉戟的情况下穿过帘幕，水会像猛烈的波浪般南北方向爆发。"],flesh:`清澈的水在两条走廊之间形成了一道1英尺厚、7英尺高、10英尺宽的水幕，散发出一种咒法魔法的灵光，可以被en=Detect Magic法术或类似效果侦测到。成功地在水幕上施放en=Dispel Magic (DC 17) 会使水幕消失，使拱门敞开。水幕在1小时后会魔法般地重新出现。

如果任何生物携带三叉戟穿过水幕，什么也不会发生。任何三叉戟都可以，不仅仅是走廊里的那些。

如果有任何生物在没有三叉戟的情况下穿过帘幕，水会像猛烈的波浪般南北方向爆发。任何一个厅内的生物都会被水猛击，必须进行一次DC 15力量豁免。如果豁免失败，该生物将受到14（4d6）点钝击伤害，并被巨大的力量扫到大厅尽头，使其倒地。成功通过豁免的生物只受到一半伤害并倒地，但不会被扫走。挂在墙上的武器保持原位。

水幕排出的水在流到走廊范围之外前就消失了。水也不会进入两个隐藏的壁龛（区域31A），因此那里的生物不受波浪影响。

由水幕召唤的水通过地板上的小裂缝渗漏出大厅，留下水坑。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[147],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_3c2",locationId:"loc_3b0",name:"32. 旋转通道",activation:{condition:{type:"always"},priority:0},skeleton:['这条缝隙标志着25英尺长的爬行道（在地图5.3上标记为"隧道A"）的一个端点，该爬行道可以旋转。',"如果检定成功超过5或更多，角色可以推断出这条缝隙表示隧道两部分可以分离的点。","当隧道A的中点施加了50磅或更多的重量时，一个机制会使隧道快速顺时针旋转90度并在转动时下沉5尺。","隧道的两端立即被切断，困住里面的生物。",'同时，第二个与第一个垂直的爬行通道（在地图5.3上标记为"隧道B"）顺时针旋转90度并下沉到位，位于隧道A原来的位置。'],flesh:`任何在这条隧道中搜寻陷阱或秘密门洞的角色，若成功通过一个 DC 15 感知 (察觉) 检定，会注意到石工中有一条狭窄的缝隙。这条缝隙标志着25英尺长的爬行道（在地图5.3上标记为"隧道A"）的一个端点，该爬行道可以旋转。如果检定成功超过5或更多，角色可以推断出这条缝隙表示隧道两部分可以分离的点。

当隧道A的中点施加了50磅或更多的重量时，一个机制会使隧道快速顺时针旋转90度并在转动时下沉5尺。隧道的两端立即被切断，困住里面的生物。同时，第二个与第一个垂直的爬行通道（在地图5.3上标记为"隧道B"）顺时针旋转90度并下沉到位，位于隧道A原来的位置。飞行中的角色、处于气态形态的，或者以其他方式有效无重量的角色不会触发陷阱，可以安全地穿过隧道。

当隧道B与其余的爬行通道相连时，形成了一条新的南北向通道。隧道B的陷阱设置与隧道A类似，只是当触发陷阱时，两个隧道在逆时针旋转90度的同时上升5尺。将隧道A恢复到原始位置的唯一方法是从隧道B触发陷阱，反之亦然。

被困在与爬行通道其余部分不相连的隧道部分的角色没有明显的逃生方法。隧道是密封的。一个生物在24小时内会消耗掉可用的空气供应，多个生物则按比例分配这个时间。例如，四个生物被困在隧道中，它们可以在开始窒息之前存活6小时。

任何能够看到隧道B的角色都会注意到一个不幸的冒险者的尸体。

这具尸体属于黄旗公司的龙族圣武士赛菲利乌斯（Sephirius）。搜查尸体会发现几件有趣的物品（见下文的"宝藏"）。

Sephirius没有穿盔甲，但携带了一把+1 伊库瓦短矛，一个探险家背包，一个包含8金币的小袋，一个形状像恐龙爪的象牙背刮器（25金币），一个巴哈姆特的圣徽（25金币），以及一个直径1英寸的红色水晶眼球。

这个非魔法的水晶眼球是打开邪眼怪金库所需的十把钥匙之一（区域44）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_3c2_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[148],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`随着一声刺耳的摩擦声，这段爬行通道开始旋转，立即切断了前方和后方的出口。你可以感觉到通道在转动时下沉了大约五尺。几秒钟后，它停止了转动，摩擦声也随之消失。

当一个新的隧道旋转到位时，你看到一具骸骨尸体躺在那个隧道的地板上，大约十尺远。`,dmGuidance:"当玩家的角色第一次被困在旋转隧道中时，请向他们朗读以下文本："},{id:"scn_3c9",locationId:"loc_3b0",name:"33. 对立之室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间内有一个石盆，里面装满了冒着热气的绿色液体。","在石盆的另一边，一个朦胧的身影站在房间远处的一扇敞开的门前，背对着你。","这个石制容器固定在地板上，无法倾倒。","它也对伤害和法术免疫。","它看起来可以装40品脱（5加仑）的热汤，但液体是虚幻的。"],flesh:`这个石制容器固定在地板上，无法倾倒。它也对伤害和法术免疫。它看起来可以装40品脱（5加仑）的热汤，但液体是虚幻的。触觉探索揭示了液体没有实质，容器是干的。

这个黑暗的身影是打开房间门的角色的魔法幻影复制体。它模仿角色的动作，让一个精明的玩家可以使用这个复制体来处理盆中的液体。这个影子复制体具有平民的具体数值，并对毒素伤害免疫。它完美地模仿创造它的那个角色的动作，总是将其背对着创造者，就好像它是一个15尺前方的投影图像。

如果创造了影子复制体的角色向后移动，复制体会向盆移动。一旦盆中的幻象汤被吸完，盆中会出现之前不存在的宝藏（见下文'宝藏'部分）。对盆施放en=Dispel Magic会导致幻象汤消失，但宝藏不会出现。幻象汤1分钟后会重新出现。

影子复制体无法对物体施加压力，并且可以滑过它遇到的任何障碍物。对这个角色施放en=Dispel Magic会使其消失。它不会对受到伤害做出反应，但如果降至0生命值或被迫离开房间就会消失。关闭房间的门再重新打开会创建开门者的一个新的复制体。一次只能存在一个影子复制体。

阴影复制体具有可怕而致命的外貌。任何生物看到它的脸时，会看到一个锁定在无声尖叫中的恐怖面容，并且必须成功通过一次 DC 15 感知豁免检定，否则生命值将降至 0。无法被 恐慌 的生物自动通过豁免检定。

如果影子复制体喝光了盆中的幻象汤，一个由白热橙色水晶制成的直径1英寸的眼球将出现在盆底，并且可以轻易取出。如果眼球从盆中取出后再放回去，它将消失，幻象汤的效果将被重置。

这个非魔法的水晶眼球是打开邪眼怪金库所需的十把钥匙之一（区域44）。

盆的东侧是一个布满灰尘的空房间。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[148],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间内有一个石盆，里面装满了冒着热气的绿色液体。在石盆的另一边，一个朦胧的身影站在房间远处的一扇敞开的门前，背对着你。",dmGuidance:"如果角色接着模拟从盆中喝水的动作，复制体会以每轮5品脱的速度吸食'汤'，在8轮内将盆吸空。"},{id:"scn_3ce",locationId:"loc_3b0",name:"34. 窥视孔",activation:{condition:{type:"always"},priority:0},skeleton:["如果有一名或多名角色从南方接近这个区域，请阅读：","走廊在左边急转弯。","在转弯前的角落，一个窥视孔被雕刻在6尺高的石墙上。","窥视孔是穿过坚固岩壁的5尺长管道的一端。","管道中设置的放大镜片让通过孔洞窥视的人可以清楚地看到35A区域中的金色奖章以及其背后转盘上的象形文字。"],flesh:`如果有一名或多名角色从南方接近这个区域，请阅读：

窥视孔是穿过坚固岩壁的5尺长管道的一端。管道中设置的放大镜片让通过孔洞窥视的人可以清楚地看到35A区域中的金色奖章以及其背后转盘上的象形文字。此外，通过窥视孔观察的生物可以与35B区域的生物进行心灵感应沟通。利用窥视孔，角色可以识别出35B区域中正确的地砖顺序，并将这些信息传达给艾金墓穴中的每个人。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"走廊在左边急转弯。在转弯前的角落，一个窥视孔被雕刻在6尺高的石墙上。"},{id:"scn_3d0",locationId:"loc_3b0",name:"35. 艾金的墓",activation:{condition:{type:"always"},priority:0},skeleton:["角色可以通过区域18到达这个区域，通过降低东墙（区域35A）的石块，或者通过区域29处的豺狼面具的牙齿间隙滑过来。","任何被娜浪或莎根比的精神附身的角色在进入这个区域时会收到建议：","既胆怯又贪婪的娜浪希望她的宿主在别人之前去搜刮死去矮人的尸体。","明智的莎根比建议附近可能有一个线索，可以提示哪些地砖是安全的行走区域。","高台和雕像周围的地面上铺满了5英尺见方的石砖，每一块石砖上都刻有一个象形文字。"],flesh:`角色可以通过区域18到达这个区域，通过降低东墙（区域35A）的石块，或者通过区域29处的豺狼面具的牙齿间隙滑过来。

任何被娜浪或莎根比的精神附身的角色在进入这个区域时会收到建议：

既胆怯又贪婪的娜浪希望她的宿主在别人之前去搜刮死去矮人的尸体。

明智的莎根比建议附近可能有一个线索，可以提示哪些地砖是安全的行走区域。

高台和雕像周围的地面上铺满了5英尺见方的石砖，每一块石砖上都刻有一个象形文字。给玩家们分发附录 E中的第23号资料。

角色可以通过飞行或沿着墙壁和天花板攀爬来避免触发地砖。攀爬墙壁需要成功的 DC 20 力量（运动）检定。那些踏上地砖的人必须按照正确的顺序穿越，否则将承受后果。

如果任何角色踏上地砖并且向东的通道是开放的，区域35A的石块会上升以封堵隧道。当石块与天花板接触时，任何位于石块上的生物必须成功通过一次DC 7敏捷豁免检定，以便向一个方向或另一个方向跳开。如果豁免失败，该生物将受到55（10d10）的钝击伤害。任何因这次伤害而生命值降至0的生物将被压成肉泥。否则，该生物将倒地在坟墓内。

正确的地板瓷砖顺序与区域35A中的黏土转盘上的象形文字出现顺序一致：秃鹫、蛇、门、芦苇、甲虫、权杖、脚、瓮。每当一个角色踏上正确的瓷砖时，一个新的象形文字会在黏土转盘上显现，任何角色都可以通过区域34的窥视孔看到这一景象。转盘会按照正确的顺序旋转显示所有象形文字。如果有角色踩错了象形文字的顺序，雕像会如"狮身人面像雕像"中描述的那样做出反应。踩错瓷砖不会重置顺序。

当顺序中的最后一个地砖被踩到时，以下所有事情会同时发生：

艾金的金棺打开了。

区域35A的石块沉入地板，形成了向东的开放通道。

由狮身人面像召唤的任何蝗虫都被驱散了。

象形文字地板已失效。24小时后，威瑟斯派遣1d4名墓穴矮人来重置陷阱。

这些雕像中的每一个都描绘了一个等身大小的雌狮身人面像，并且全部四个都对en=Detect Magic法术或类似效果散发出防护和召唤的光环。这些雕像对伤害和法术免疫。

当任何生物踩到错误的地砖时，所有四座雕像都会张开嘴巴，大量通过魔法召唤的蝗虫从它们的口中飞出。蝗虫形成一片单独的云团，填充在违规地砖上方中心位置的15尺立方体中。在云团形成时在其中的每个生物，以及在回合中首次进入云团或在其回合开始时在那里的任何生物，都会受到44点（8d10）点穿刺伤害。任何因这个陷阱而生命值降至0的生物将被吞噬蝗虫杀死并啃食至骨。云团持续1分钟，或直到创造出另一片蝗虫云。

艾金的金棺只能通过按正确顺序踩踏八块地砖来打开。金棺完好无损时价值7500金币，但重75磅。将其从葬礼船上移除会导致四面墙的力量墙（类似于由en=Wall of Force法术创造的）从地面到天花板围绕基座。这些墙将持续存在，直到被摧毁或直到金棺被放回船上。

金棺中包含着一只独角兔（艾金的动物形态；如果这个角离开九神之墓，它将化为尘土并被摧毁（但见"失落的宝藏"）。

艾金的精神试图附身于任何触摸号角的角色（见"九诡神亡魂"）。当艾金的精神显现时，请阅读：

如果这个精神成功附身于角色，给玩家ToA（见附录F）。如果尝试失败，这个精神返回到角中并等待另一个角色触摸它。

布拉弗斯的黄色头巾上镶有一颗橄榄石宝石（500金币）。对布拉弗斯尸体的搜索还发现了一面非魔法盾牌和一个腰带小包，包内含有一颗500金币的钻石（一个en=Raise Dead法术的材料成分）以及两个直径为1英寸的水晶眼球——一个深蓝色和一个鲜紫色。

这对非魔法水晶之眼是打开邪眼怪金库（区域44）所需的十把钥匙中的两把。`,spotlightRefs:[],presentNpcIds:["npc_withers","npc_acererak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_3d0_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:'光线从角的尖端散发出来。当它们在你周围旋转时，它们形成了一只额头上有一只角的幽灵兔子。一个女声低语："快，快，让我进去！我们必须阻止阿瑟瑞克！"',dmGuidance:"见附录D）的脆弱骨骼，以及它的螺旋角，该角充当一个惊异魔杖。"},{id:"scn_3d1",locationId:"loc_3b0",name:"35A. 石块",activation:{condition:{type:"always"},priority:0},skeleton:["一块5尺宽、5尺厚、12尺高的实心石块填满了通往艾金墓穴（区域35B）的门口。","石块面向墓穴的一侧没有任何特征，并且对伤害和法术免疫。","走廊尽头是一块石头，上面画着一个七尺高的豺狼头类人生物，它的脖子上挂着一个圆形的金色奖章。","这个生物的四周都是蝗虫的雕刻。","仔细检查会发现，其中一个雕刻的蝗虫是一个可以按下的按钮。"],flesh:`一块5尺宽、5尺厚、12尺高的实心石块填满了通往艾金墓穴（区域35B）的门口。石块面向墓穴的一侧没有任何特征，并且对伤害和法术免疫。

仔细检查会发现，其中一个雕刻的蝗虫是一个可以按下的按钮。当按下这个按钮时，石块会沉入地板，从而为通往墓穴（区域35B）的通道打开一条通路。

豺狼头画像所佩戴的'奖章'实际上是一个直径6英寸的金盘，上面雕刻着一个张嘴的有角恶魔的面孔。在这个盘后面是一个粘土转盘，上面刻有八个象形文字。其中一个象形文字（一个秃鹫）通过形成恶魔张嘴的孔洞可见，但是转盘被固定住了，其余七个象形文字被奖章遮挡，看不见。

如果任何角色在区域35B踩到秃鹫地砖，转盘会转动，展示一个新的象形文字：一条蛇。转盘会一次揭示一个正确的地砖顺序：秃鹫、蛇、门、芦苇、圣甲虫、权杖、脚和骨灰瓮。踩到与转盘上象形文字匹配的地砖会导致转盘转动，展示序列中的下一个符号。

金色奖章是用至尊胶粘贴在石块上的，移除它需要万溶剂。然而，也可以简单地破坏奖章以到达下面的转盘。移除或破坏奖章会暴露出转盘及其八个象形文字。

一旦徽章被移开，刻度盘就可以轻松从石块内部的辐条上取下。然而，取下刻度盘会释放出被困在石块内的腐蚀性气体。气体通过隐藏在刻度盘后面的小孔逸出，并填满石块正东方向的5英尺空间。当气体释放时，任何位于该区域的生物必须进行一次 DC 14 体质豁免，若豁免失败则受到44 (8d10) 点强酸伤害，若豁免成功则受到一半伤害。一个搜索陷阱的角色可以通过 DC 25 感知 (察觉) 检定来探测到隐藏在刻度盘后面的小孔；一旦发现这些小孔，可以在取下刻度盘之前用蜡将它们堵住，从而防止气体逸出。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"走廊尽头是一块石头，上面画着一个七尺高的豺狼头类人生物，它的脖子上挂着一个圆形的金色奖章。这个生物的四周都是蝗虫的雕刻。",dmGuidance:"如果角色从东侧接近石块，请阅读："},{id:"scn_3d3",locationId:"loc_3b0",name:"35B. 墓穴",activation:{condition:{type:"always"},priority:0},skeleton:["四支火把照亮了蹲伏在这个十五尺高的房间角落的石制狮身人面像。","火把在雕刻在瓷砖地板上的象形文字上投下闪烁的光芒。","在房间的中心，一个镶金的葬礼船只矗立在一个三尺高的石制基座上。","在船的甲板上休息着一个装饰有角兔的小金棺。","一个黑暗的竖井在船的正上方的天花板上打开，而往南边，通过墙上雕刻的一组獠牙，可以看到一条走廊。"],flesh:`要解锁艾金的石棺，必须按照正确的顺序踩踏八块地板砖（见下方的"象形文字地板"和附录 E中的附录 23）。踩错顺序会触发陷阱（见下方的"狮身人面像雕像"）。

这具骸骨曾经是布拉弗斯·鲍尔德伯恩，一位属于摩拉丁的金矮人牧师，也是黄旗公司的前成员。布拉弗斯因为按错顺序踩踏地砖而死，他的尸体躺在带有"足"象形文字的地砖上。对尸体的搜索会发现一些贵重物品（见下文的"宝藏"）。

四支火把照亮了这个房间。只要它们保持在支架上，就永远不会燃尽。如果火把从支架上移除，它就会正常燃烧完。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[150],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`四支火把照亮了蹲伏在这个十五尺高的房间角落的石制狮身人面像。火把在雕刻在瓷砖地板上的象形文字上投下闪烁的光芒。在房间的中心，一个镶金的葬礼船只矗立在一个三尺高的石制基座上。在船的甲板上休息着一个装饰有角兔的小金棺。一个黑暗的竖井在船的正上方的天花板上打开，而往南边，通过墙上雕刻的一组獠牙，可以看到一条走廊。
一具矮人的骸骨横卧在船只东侧的地板上，身穿破烂的黄色头巾和沾满灰尘的锁子甲，并且紧握着一个铜盾。`},{id:"scn_3dd",locationId:"loc_3b0",name:"36. 休息之室",activation:{condition:{type:"always"},priority:0},skeleton:["这座墓穴的守护者几乎忘记了这个夹在两个爬行通道之间的小房间。","在这里避难的角色将得到安静休息的奖励。"],flesh:"这座墓穴的守护者几乎忘记了这个夹在两个爬行通道之间的小房间。在这里避难的角色将得到安静休息的奖励。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[151],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_3de",locationId:"loc_3b0",name:"37. 混乱之风",activation:{condition:{type:"always"},priority:0},skeleton:["两个阳台隔开一个巨大的深坑相对而望。","在阳台之间悬浮着五个木制平台，每个平台都是直径十尺的圆盘。","每个阳台上方都燃烧着一支火把。","在东侧阳台上矗立着一个粗雕的、十五尺高的庞大恶魔雕像，它有着收起的翅膀和紧握的拳头。","在西侧阳台的墙上安装着一个向上的生锈杠杆。"],flesh:`攀爬墙壁需要通过一个 DC 15 力量（运动）检定。一个爬行通道设置在西北角，与阳台和浮空平台处于同一高度。另一个爬行通道从东阳台延伸出去。在西阳台的后方，一段楼梯向下延伸10英尺，通往一个平台和一扇秘密门。

任何被艾金或库巴赞灵魂附身的角色在进入这个区域时会收到建议：

多变的艾金敦促她的宿主拉动杠杆。这能有什么害处呢？

无畏的库巴赞坚持让他的宿主跳到平台上，即使其他人更适合这样做。

这些圆形的木制平台直径为10英尺，悬浮在空中，彼此之间相距6至12英尺，如地图5.3所示。它们与阳台处于同一高度，位于天花板下方15英尺，坑底上方60英尺。使用en=Detect Magic法术或类似魔法可以揭示每个平台周围的防护系和变化系灵光。每个圆盘足够宽，角色可以在跳跃前移动10英尺。当任何物体落在平台上时，平台会轻微上下浮动，仿佛漂浮在水面上。任何从平台掉落到坑底的生物将受到21（6d6）点钝击伤害。对平台施放en=Dispel Magic会导致它坠落。

如果西阳台上的操纵杆被拉动，恶魔雕像会松开拳头，在每只手掌中露出一个大理石大小的物体（见下文的"宝藏"）。同时，呼啸的风声升起并填满了房间。将操纵杆恢复到原始的向上位置会使风声平息，雕像的拳头也会闭合。

每当风声开始呼啸时，让所有队伍成员进行先攻掷骰。在风声呼啸期间，任何不在漂浮平台上开始其回合的生物必须进行一次DC 20感知豁免，若豁免失败则受到16（3d10）点心灵伤害，若豁免成功则受到一半伤害。此外，风声会使房间内的生物在进行所有基于力量的技能检定时处于劣势，包括跳向或离开漂浮平台的检定以及攀爬墙壁的检定。

任何成功通过 DC 15 智力（奥秘）检定的角色都会意识到这座雕像描绘的是一只尼卡洛斯。使用 en=Detect Magic 法术或类似效果可以察觉到雕像紧握的双拳散发出变化系魔法的灵光。

这座雕像重15000磅，对伤害和法术免疫。对雕像施放en=Knock法术会使其一只拳头在1轮内松开，在此期间那只手中的物品可以安全地移除。

雕像的左手紧握着一颗直径1英寸的珍珠白色水晶眼珠，右手则握着一个同样大小的鲜红色水晶眼珠。

这对非魔法水晶之眼是打开邪眼怪金库（区域44）所需的十把钥匙中的两把。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[151],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"两个阳台隔开一个巨大的深坑相对而望。在阳台之间悬浮着五个木制平台，每个平台都是直径十尺的圆盘。每个阳台上方都燃烧着一支火把。在东侧阳台上矗立着一个粗雕的、十五尺高的庞大恶魔雕像，它有着收起的翅膀和紧握的拳头。在西侧阳台的墙上安装着一个向上的生锈杠杆。"},{id:"scn_3e6",locationId:"loc_3b0",name:"38. 旋转房间陷阱",activation:{condition:{type:"always"},priority:0},skeleton:["这个墓穴的这一部分由三个不同的区域组成：一个控制室（区域38A），一个通道走廊（区域38B），以及一个旋转死亡陷阱（区域38C）。","图5.2展示了这些区域的侧视图。","当房间在旋转时，在主动进攻计数10结束时会触发一个额外的效果。","掷一个d20，并参考旋转房间效果表。","如果38A区域的拉杆被拉起，或者南门被打开或破坏，房间就会停止翻滚。"],flesh:`这个墓穴的这一部分由三个不同的区域组成：一个控制室（区域38A），一个通道走廊（区域38B），以及一个旋转死亡陷阱（区域38C）。图5.2展示了这些区域的侧视图。

当房间在旋转时，在主动进攻计数10结束时会触发一个额外的效果。掷一个d20，并参考旋转房间效果表。

如果38A区域的拉杆被拉起，或者南门被打开或破坏，房间就会停止翻滚。门锁隐藏在墙内，无法用盗贼工具撬开，需要三个独立的en=Knock法术才能解锁。也可以通过成功的DC 26力量（运动）检定强行打开或攻击该门。它具有AC 17；50点生命值；并且免疫火焰、穿刺、毒素、心灵、挥砍和雷鸣伤害。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},randomTableIds:["tbl_3e6_0"],mapGeometry:{imageRef:"adventure/ToA/076-510.webp"}},{id:"scn_3e7",locationId:"loc_3b0",name:"38A. 控制室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间昏暗且布满灰尘。","一个高大的身影戴着水桶头盔站在西侧，一只手搭在墙上的一个铁制操纵杆上。","南侧的墙壁是倾斜的，有一个五尺宽七尺高的矩形大窗户。","窗户望向一个走廊，通过走廊地板上的一个矩形洞口，还可以看到下面一个类似侧放的圆柱形的明亮房间。","戴头盔的身影是一个陵墓守卫：一个穿着板甲（AC 17）的血肉魔像。"],flesh:`戴头盔的身影是一个陵墓守卫：一个穿着板甲（AC 17）的血肉魔像。它的任务是在看到冒险者进入区域38C时拉动杠杆。墓穴守卫只在自卫时战斗，并且接到威瑟斯的命令不得离开控制室。如果它失控，它会忽略这些命令。

南墙上的窗户由石头制成，只有从这一侧被魔法处理成透明。成功施放 en=Dispel Magic (DC 17) 会使石头失去透明度。如果墓室守卫无法看到区域 38B 和 38C，它就不会拉动杠杆。

杠杆从西北墙上的一个垂直槽中伸出。它处于上升位置。将杠杆拉下会激活区域38C的陷阱。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:["enc_3e7"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间昏暗且布满灰尘。一个高大的身影戴着水桶头盔站在西侧，一只手搭在墙上的一个铁制操纵杆上。南侧的墙壁是倾斜的，有一个五尺宽七尺高的矩形大窗户。窗户望向一个走廊，通过走廊地板上的一个矩形洞口，还可以看到下面一个类似侧放的圆柱形的明亮房间。"},{id:"scn_3eb",locationId:"loc_3b0",name:"38B. 通道",activation:{condition:{type:"always"},priority:0},skeleton:["这个走廊高10尺，宽5尺。","这条狭窄隧道的墙壁在接近十英尺高的天花板时向内倾斜。","大厅东半部分的墙壁和地板上附着着斑驳的霉菌。","走廊西端的地面上凿有一个三英尺宽、四英尺长的矩形洞口，2从中倾泻而出。","任何站在洞口旁边的角色都可以向下窥视一个圆柱形房间（区域38C），其弯曲的地面位于洞口下方15尺处。"],flesh:`这个走廊高10尺，宽5尺。

任何站在洞口旁边的角色都可以向下窥视一个圆柱形房间（区域38C），其弯曲的地面位于洞口下方15尺处。

洞口北边的墙壁充当单向窗户，但从这一侧看，它看起来与隧道的其他部分没有区别。区域38A中的生物可以看到这个隧道，但隧道中的生物看不到区域38A。像en=Detect Magic和en=True Seeing这样的法术从这一侧也无法揭示窗户。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这条狭窄隧道的墙壁在接近十英尺高的天花板时向内倾斜。大厅东半部分的墙壁和地板上附着着斑驳的霉菌。走廊西端的地面上凿有一个三英尺宽、四英尺长的矩形洞口，2从中倾泻而出。",dmGuidance:"如果角色通过来自区域30或37的爬行通道进入大厅，请阅读："},{id:"scn_3ed",locationId:"loc_3b0",name:"38C. 旋转鼓",activation:{condition:{type:"always"},priority:0},skeleton:["角色可以通过天花板上的长方形洞口（区域38B）或通过南墙上的石门进入这个房间。","这个房间的形状像是一个侧卧的鼓或圆柱体，其南端逐渐变细，通向一扇小石门。","石雕上装饰着恶魔的图案，它们的眼睛中闪烁着火焰。","闪烁的火焰是由en=Continual Flame法术创造的，这些法术使房间充满了2。","当区域38A中的杠杆被拉动时，三个隐藏的锁会封闭南门，一个en=Wall of Stone法术会阻挡天花板上的长方形洞口（切断通往区域38B的逃生路线），并且房间开始旋转。"],flesh:`角色可以通过天花板上的长方形洞口（区域38B）或通过南墙上的石门进入这个房间。

闪烁的火焰是由en=Continual Flame法术创造的，这些法术使房间充满了2。

当区域38A中的杠杆被拉动时，三个隐藏的锁会封闭南门，一个en=Wall of Stone法术会阻挡天花板上的长方形洞口（切断通往区域38B的逃生路线），并且房间开始旋转。当这种情况发生时，所有在场的生物应该进行先攻判定。

任何没有牢固固定在墙上、飞行中、或处于en=Gaseous Form法术或类似魔法效果下的生物都会被旋转的房间甩动。该生物在每回合开始时必须进行一次DC 15敏捷豁免，若豁免失败则受到11点（2d10）钝击伤害，若豁免成功则受到一半伤害。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的形状像是一个侧卧的鼓或圆柱体，其南端逐渐变细，通向一扇小石门。石雕上装饰着恶魔的图案，它们的眼睛中闪烁着火焰。"},{id:"scn_3f0",locationId:"loc_3b0",name:"39. 魔像坑",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间中央有一个十五尺宽、十五尺深的大坑。","在坑底，一个八尺高的陶土雕像静静地站在一个石制宝箱旁边。","一个银色的钥匙挂在雕像脖子上的绳索上。","两个九尺高的石制雕像分别站在坑的两侧的基座上。","南侧墙壁前的第三个基座空着。"],flesh:`一堵隐形的力场墙（由en=Wall of Force法术创造）覆盖在坑顶，保护着下面的粘土魔像和宝箱。通过操纵雕像，角色们可以将魔像传送到他们的层面，或者将他们中的一个送入坑中。

任何被摩亚或帕帕扎图灵魂附身的角色在进入这个区域时会收到建议：

深思熟虑的摩亚警告说，需要用精金或魔法武器才能伤害到一个粘土魔像。

专横的帕帕扎图坚持要有人站在第三个基座上。（"它空着肯定有原因！"）

面对坑洞的两座雕像分别代表阿祖斯（法术之神）和托姆（勇气与自我牺牲之神）。通过成功的 DC 12 智力（宗教）检定可以辨认出它们。使用 en=Detect Magic 法术或类似效果会揭示每座雕像周围的防护魔法灵光。

对基座的任何检查都会发现，每尊雕像都安装在一个旋转的弹簧装置上。如果将阿祖斯的雕像向右旋转，坑内的一个生物会被传送到第三个基座上，迫使那里的任何其他生物让位。如果坑内有多个生物，随机决定哪个生物被传送。将托姆的雕像向右旋转会将任何在第三个基座上或上方的物体传送到坑中。即使那里什么也没有，也会听到一声爆裂声，因为空气涌入填补了空位。当一个已经转动的雕像被释放时，它会嘎吱嘎吱地回到起始位置。

粘土魔像接到命令，攻击它看到并能够触及的任何生物。如果魔像被摧毁，威瑟斯会使用他在区域28中的魔像手册在30天后制造一个新的。

这个箱子和它的铰链都是由石头制成的。箱子重250磅，并配有一个银制的锁具。打开锁需要构装体脖子上挂着的银钥匙。使用en=Mage Hand法术或类似的魔法可以从构装体脖子上取下钥匙而不会引发其攻击。使用盗贼工具的角色可以通过一次成功的DC 20敏捷检定来撬开锁。然而，用银钥匙以外的方式打开箱子会释放出一团气体，充满以箱子为中心15英尺立方的区域（填满整个坑）。这种气体会立即腐蚀并摧毁所有与之接触的非魔法金属，包括盔甲和武器。密封在容器中的金属物品则不受影响。

这个箱子是一个小型物体，具有AC 12，10点生命值，并对毒素和心灵伤害免疫。

箱子里有两个直径1英寸的玻璃眼球，它们放置在红色垫子上。一个眼球是淡绿色的，另一个是粉红色的。

这对非魔法水晶之眼是打开邪眼怪金库（区域44）所需的十把钥匙中的两把。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:["enc_3f0"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[153],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间中央有一个十五尺宽、十五尺深的大坑。在坑底，一个八尺高的陶土雕像静静地站在一个石制宝箱旁边。一个银色的钥匙挂在雕像脖子上的绳索上。
两个九尺高的石制雕像分别站在坑的两侧的基座上。南侧墙壁前的第三个基座空着。其中一个雕像描绘的是一个戴兜帽、留着胡须的男性，左手高举，食指指向上方。另一个雕像刻画的是一个身穿盔甲的男性骑士，右手戴着铁手套伸出，掌心向内朝向骑士自己。`},{id:"scn_3f7",locationId:"loc_3b0",name:"40. 黄金骷髅的诅咒",activation:{condition:{type:"always"},priority:0},skeleton:["一个金色的骷髅头放在这个小而多尘的房间中央的基座上。","这个被诅咒的人类骷髅头，镀了金，是一个名叫亚卡的傻瓜的遗骸——他曾是娱乐奥穆王室的艺人。","如果任何角色触摸它，骷髅头就会悬浮在空中，开始到处跟随那个角色。","骷髅头永远不会偏离几尺远，如果看不见他或她，它会瞬间传送回角色的身边。","当它悬浮时，亚卡的骷髅头以一种嘲讽、空洞的声音提供一连串的冷笑话。"],flesh:`这个被诅咒的人类骷髅头，镀了金，是一个名叫亚卡的傻瓜的遗骸——他曾是娱乐奥穆王室的艺人。如果任何角色触摸它，骷髅头就会悬浮在空中，开始到处跟随那个角色。骷髅头永远不会偏离几尺远，如果看不见他或她，它会瞬间传送回角色的身边。当它悬浮时，亚卡的骷髅头以一种嘲讽、空洞的声音提供一连串的冷笑话。除非骷髅头被魔法沉默，否则它的不合时宜的评论会导致角色进行所有属性检定时处于不利状态。

将头骨角色扮演为残忍且愤世嫉俗的角色，带有黑色幽默感。它对陵墓一无所知，却假装无所不知。阿瑟瑞克 用强大的魔法为头骨施加了防护，使其对伤害和法术免疫。其诅咒过于强大，只有en=Wish才能打破，该法术可用于摧毁头骨或结束诅咒。如果诅咒结束但头骨仍存在，它会传送回基座并等待下一个角色触碰它。

诅咒也可以通过给骷髅喂食宝石来结束，它对此有强烈的渴望。骷髅咀嚼并摧毁任何喂食给它的非魔法宝石，不留下宝石的任何痕迹。一旦它摧毁了价值10,000金币的宝石，骷髅就会传送回基座，受影响角色的诅咒就会结束。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[154],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个金色的骷髅头放在这个小而多尘的房间中央的基座上。"},{id:"scn_3f9",locationId:"loc_3b0",name:"41. 墓穴守卫",activation:{condition:{type:"always"},priority:0},skeleton:["两个高大的身影站在这条长廊的壁龛中，彼此相对。","盔甲被固定在他们的肉体上，他们戴着桶形头盔和带刺的铁手套。","他们脖子上的铁项圈通过一条穿过走廊的带刺链条相连。","在壁龛中的墓穴守卫会攻击任何攻击它们或试图越过它们的生物。","它们是血肉魔像，但有以下变化："],flesh:`在壁龛中的墓穴守卫会攻击任何攻击它们或试图越过它们的生物。它们是血肉魔像，但有以下变化：

这些魔像是穿着板甲的（护甲等级17）。

墓穴守护者使用其带刺的铁手套，在每次成功的猛击攻击中造成13点（2d8 + 4）钝击伤害外加7点（2d6）点穿刺伤害。

每个墓穴守卫的挑战等级为6（2300经验值）。

将守卫们捆绑在一起的魔法带刺铁链使它们无法相距超过15尺。此外，只要铁链完好无损，对任一守卫造成的伤害都会在它们之间平均分配。带刺铁链可以被单独攻击，具有AC 18，伤害阈值10，5点生命值，并对毒素和心灵伤害免疫。如果铁链断裂，两个墓穴守卫会立即陷入狂暴状态。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_3f9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[154],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"两个高大的身影站在这条长廊的壁龛中，彼此相对。盔甲被固定在他们的肉体上，他们戴着桶形头盔和带刺的铁手套。他们脖子上的铁项圈通过一条穿过走廊的带刺链条相连。"},{id:"scn_3fc",locationId:"loc_3b0",name:"42. 库巴赞的墓",activation:{condition:{type:"always"},priority:0},skeleton:["一座四柱门廊从远处的墙壁突出，其下有一个石制的石棺安放在壁龛中。","四个陶瓷青蛙面具挂在石棺周围的壁龛里。","面具下方，类人生物的骨头散落在地板上。","向东，一只带有触手的青蛙怪物的大型雕刻蹲在神龛上方。","供品摆放在它前面的架子上。"],flesh:`要打开石棺，角色们必须在戴着青蛙面具的情况下，在神龛前进行一个简单的仪式。墙壁上的壁画揭示了必须做的事情。

任何被娜浪、奥博娜卡或莎根比的灵魂附身的角色在进入这个区域时会收到建议：

贪婪的娜浪敦促她的宿主去抢夺墙上神龛的金币。

谨慎的奥博娜卡警告不要尝试戴上面具。

睿智的莎根比确信这些壁画是理解墙壁神龛力量的线索。

四幅壁画排列在墓穴的东墙上，神龛两侧各两幅。

这幅壁画展示了库巴赞使用他的触手帮助奥穆人推倒乌博神雕像的时代：

这幅壁画展示了库巴赞帮助一群奥穆猎人杀死一只威胁城市的巨型鳄鱼的时代：

这幅壁画展示了库巴赞帮助奥穆人在丛林中找到一名失踪儿童的时代：

这幅壁画展示了一个时期，当时Kubazan生气了，奥曼人用财宝安抚他：

对墙边神龛的搜索揭示了几件物品：

一座6英寸高的石制蛙类巨兽小雕像（见附录D），重5磅，其底座上用古奥穆语刻有铭文："像自古以来的其他人一样向我表示感谢。"

一个装有老鼠骨头的铜碗

四只死蟑螂

一支绿色蜡质的蜡烛，烛芯可以回收利用

5金币（散币）

要打开石棺，一个或多个角色必须站在墙边神龛前，并按任意顺序执行以下操作：

在戴青蛙面具的同时向神龛捐献至少5金币。

在戴着青蛙面具的情况下，在神龛前点燃一支蜡烛。

在戴青蛙面具的同时，将一个活生生的生物的血倒入铜碗中。

在戴着青蛙面具的情况下吃一只虫子（活的或死的）。

如果这些动作中有任何一项执行错误，三只邪灵将从地板上的骨骸中升起。幽魂会攻击直到被消灭，并追击任何逃离此区域的角色。当幽魂出现时，任何佩戴青蛙面具的角色将被变形为一只青蛙，仿佛他们在对抗变形术的豁免检定中失败了一样。

库巴赞的石棺没有装饰，尽管一个en=Detect Magic法术或类似的效果能揭示其周围的防护和召唤魔法的光环。

当仪式正确执行时，石棺的盖子会解锁并滑开。里面装有一只蛙魔怪（库巴赞的动物形态，见附录D）的骨头以及一些有价值的物品（见下面的"宝藏"）。石棺的盖子被en=Arcane Lock法术密封。它可以通过en=Knock法术打开，或者通过成功的DC 25力量（运动）检定强行打开。然而，如果石棺通过任何非仪式方式打开，一束en=Prismatic Spray法术（豁免DC 19）将从石棺后面的墙壁中喷发出来。房间内的所有生物，以及南边狭窄走廊中的生物，都将成为该法术的目标。

石棺内含有一对射手护腕和二十支易碎的箭，这些箭放在一个腐烂的皮革箭袋中。每支箭在撞击时会碎裂，并且只在击中时造成1点穿刺伤害。护腕上装饰有蛙类巨兽的雕刻，它们使任何与之协调的角色的皮肤保持令人不安的湿润。如果护腕离开九神之墓（但见"失落的宝藏"），它们会化为尘土并被摧毁。

库巴赞的精神试图附身于任何触摸这对护腕的角色（见"九诡神亡魂"）。当库巴赞的精神显现时，请阅读：

如果精神成功附身于角色，给玩家ToA（见附录F）。如果尝试失败，精神返回到护腕中，并等待另一个角色触摸其中一个。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_3fc"],treasureSlotIds:["trs_3fc_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[154],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一座四柱门廊从远处的墙壁突出，其下有一个石制的石棺安放在壁龛中。四个陶瓷青蛙面具挂在石棺周围的壁龛里。面具下方，类人生物的骨头散落在地板上。向东，一只带有触手的青蛙怪物的大型雕刻蹲在神龛上方。供品摆放在它前面的架子上。四个长方形的壁画装饰着相邻的墙壁。

一个类似青蛙的巨兽使用它的触须帮助奥穆人推倒一座宏伟的雕像。在前景中，一位戴着青蛙面具的老妇人从手中抛出五枚硬币，就像播种一样。

一个类似青蛙的巨兽用它的触须缠绕住一只巨型鳄鱼，同时奥穆猎人用长矛刺向鳄鱼。在前景中，一个戴着青蛙面具的老人张开嘴，将一只虫子放到嘴边。

一个背上骑着四名奥穆猎人的类似青蛙的巨兽在丛林中找到了一个小男孩。猎人们看起来非常高兴。在前景中，一位戴着青蛙面具的年轻女子一手拿着刀，另一手拿着一只无头鸡。

一只类似青蛙的巨兽在浅水池中打滚，奥穆人向它献上装满食物和财宝的瓮作为贡品。壁画上的裂缝遮住了前景中人物的头部，但你可以看到它握着一支点燃的蜡烛。

护腕发出光芒，水波般的光线在墙壁上荡漾。一个带有触手的怪物般阴影从石棺中升起，空气中弥漫着沼泽的恶臭。一个隆隆的声音在墓穴中回响：'你们召唤我，真是勇敢。一起，我们将粉碎那个不死之物！'`},{id:"scn_40d",locationId:"loc_3b0",name:"43. 恐惧之幕",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间位于一扇双门的另一边，门的外侧雕刻着嘲笑和嬉笑的骷髅头。","门既没有上锁也没有陷阱，它们在生锈的铰链上向内摆动，揭示了门后的房间。","离门十尺处，一道厚实的挂毯从墙到墙悬挂着。","它的刺绣展示了一幅欢乐的场景：贵族们围坐在宴会桌旁盛宴，一个烤野猪在盘子上，仆人们在倒酒。","在第一道帘子的另一边，还挂着两道帘子，每道帘子上都展示着同样的图像，但逐渐变成了恐怖场景。"],flesh:`这个房间位于一扇双门的另一边，门的外侧雕刻着嘲笑和嬉笑的骷髅头。门既没有上锁也没有陷阱，它们在生锈的铰链上向内摆动，揭示了门后的房间。

在第一道帘子的另一边，还挂着两道帘子，每道帘子上都展示着同样的图像，但逐渐变成了恐怖场景。当第二道帘子被揭开时，请阅读：

第二道帘子后面是第三道：

一个 en=Detect Magic 法术或类似效果会揭示从第三块窗帘散发出的附魔魔法灵光。任何看到这块窗帘的生物必须成功通过一次 DC 14 感知豁免，否则将 恐慌 它。一个 恐慌 的生物会试图尽快离开房间并且无法重新进入。一旦在房间外，生物可以在其每回合结束时重复进行豁免，成功则效果终止。一个成功抵御此效果的生物之后将不受窗帘影响，并且可以重新进入房间。

当最后一幅挂毯帘子被拉开时，令人畏惧的宴会之主出现在角色们面前：

任何能够看到被砍下的野猪头的人形生物必须成功通过一次 DC 16 的感知豁免检定，否则将被其 魅惑。在其回合中，被 魅惑 的生物除了接近被砍下的头颅并将自己的头放入野猪口中外，不会做任何其他事情。野猪口中一次只能容纳一个头。如果野猪的嘴已经满了，被 魅惑 的生物会耐心等待，直到嘴巴空出来。任何在回合结束时将头放在野猪口中的生物将受到 22（4d10）的挥砍伤害，因为野猪的下颚会咬合。如果此伤害将生物的生命值降至 0，则其被斩首。被 魅惑 的生物每次受到伤害时都可以重复进行豁免检定，成功则结束对其自身的效果。一旦生物成功豁免此效果，它在 24 小时内不会再受到野猪头的影响。

摧毁宴会之主会结束它对所有生物的魅力效果。野猪头是一个中型物体，具有AC 5和22点生命值。

摧毁野猪头揭示了三件物品，它们卡在它的牙齿之间：一副弯曲的金边眼镜（25金币），一个镶有血石的皮革眼罩（50金币），以及一枚铂金发夹（75金币）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_40d_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`离门十尺处，一道厚实的挂毯从墙到墙悬挂着。它的刺绣展示了一幅欢乐的场景：贵族们围坐在宴会桌旁盛宴，一个烤野猪在盘子上，仆人们在倒酒。

第一道帘子后面挂着另一道帘子，展示了同样的场景，但已经堕落成放荡。贵族们互相争斗，在桌子上进行肉体接触，或躺在地板上，周围是呕吐物的水坑。

一幅恐怖的场景展现在你们面前：贵族们在享用仆人们，互相活吃，并且放火烧大厅。烤野猪在盘子上活着，并且正在笑。

一具腐烂的巨型野猪头被安装在最后一道帘子后的墙上。新鲜的血迹和残骸溅在它的獠牙上，顺着墙往下滴。`},{id:"scn_414",locationId:"loc_3b0",name:"44. 凝视者之库",activation:{condition:{type:"always"},priority:0},skeleton:["一只隐形隐形的巨眼魔（beholder）在这个圆形的房间里筑巢。","冒险者要进入，必须通过一扇上锁的门。","任何被库巴赞、奥博娜卡或望戈的灵魂附身的角色将收到以下建议：","冲动的库巴赞敦促他的宿主在没有任何警告或谈判的情况下攻击黑色布幔下隐藏的东西。","谨慎的奥博娜卡认为黑色布幔下隐藏着一只巨眼魔，并敦促她的宿主立即逃离。"],flesh:`一只隐形隐形的巨眼魔（beholder）在这个圆形的房间里筑巢。冒险者要进入，必须通过一扇上锁的门。

任何被库巴赞、奥博娜卡或望戈的灵魂附身的角色将收到以下建议：

冲动的库巴赞敦促他的宿主在没有任何警告或谈判的情况下攻击黑色布幔下隐藏的东西。

谨慎的奥博娜卡认为黑色布幔下隐藏着一只巨眼魔，并敦促她的宿主立即逃离。

当意识到巨眼魔的存在时，鲁莽的望戈建议他的宿主攻击另一个队伍成员，以此欺骗巨眼魔认为它有一个盟友。

黑色布幔掩盖着一个魔法铁球，直径6尺，悬浮在离地面20尺的高空。一个施加在铁球上的en=Nystul's Magic Aura法术让它看起来像是邪恶的异怪，对于能够感知此类信息的特征或魔法来说。

铁球是空心且固定的，当布幔覆盖它时，它保持静止状态。贝尔乔兹可以随时使用它的念力眼射线移开布幔，揭示铁球并使其发出魔法磁场。房间里任何穿戴金属盔甲的生物都会被拉向铁球并粘附在上面，任何未被固定或被持有的金属武器或物品也会如此。任何粘附在铁球上的生物都会被束缚，直到磁场停用。

在室内进行的任何远程攻击，如果使用完全或部分由金属制成的弹药，攻击检定将会有劣势；如果攻击未命中，弹药就会粘附在铁球上。

将黑色帷幕覆盖在球体上会使其暂时失效，附着其上的生物和物体会掉落到地板上。在球体上成功施放 en=Dispel Magic（DC 16）会解除 en=Nystul's Magic Aura 法术，永久关闭磁场，并使球体坠落到地板上。这会导致大理石地板上出现裂纹网，消除了地面的无摩擦效果，使生物能够正常移动。如果球体接触到 en=Antimagic Field 或被摧毁，它也会失效并坠落。

这个球体是一个大型物体，具有AC 20；100生命值；对来自非魔法攻击的钝击、穿刺和挥砍伤害有抗性；并且对毒素和心灵伤害免疫。它的重量是1000磅。当磁场激活时，任何用金属武器对球体进行的攻击都会自动命中，尽管武器在撞击后会粘在球体上。

九神之墓并不是巨眼魔真正的领地，所以它不能使用领地动作。

这只隐形隐形的巨眼魔会尽可能与冒险者保持距离，同时确保不让自己进入铁球的反魔法锥范围内。

Belchorzh不会追赶逃离其金库的入侵者。然而，如果冒险者从它的宝藏中偷走哪怕一枚铜币，邪眼就会利用地牢这一层次的外星生长物来对付他们。每当角色们靠近生长物的一块area时，它就会长出一个眼柄并进行攻击（见"外星生长物"）。

巨眼怪懂得深渊语和下界语，并且它用第三人称称呼自己。它傲慢不屈，喜欢摧毁盗墓者，同时拒绝屈服。任何理解它话语的角色都可以翻译出Belchorzh的几个经典语录：

"你们战斗起来像一群呋噜！"

"你们不是无形者Belchorzh可怕眼球射线的对手！"

"你们是多么丑陋、不完美的生物啊。"

这九个壁龛包含以下宝藏：

12,000枚铜币，5,000枚银币和2,200枚 gp

一个覆盖着会变色的水晶珠子的陶土变色龙小雕像（25金币）

三个涂成金色的儿童面具，分别按照蝙蝠、猴子和鹦鹉的面孔形状制作（每个75金币）

一个形状像章鱼的金冠，上面镶嵌着珍珠母的眼睛（2,500金币）

一瓶缩小药水，一颗力场珠，以及一面形状像尖叫的恶魔脸的青铜+1 盾牌`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_414_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_415",locationId:"loc_3b0",name:"44A. 凝视者之眼",activation:{condition:{type:"always"},priority:0},skeleton:["走廊尽头是一扇大门，门上嵌着一个圆形的镜子。","镜子周围有十个圆形凹痕，每个大约一英寸宽。","这扇门密封得很紧，不能用属性检定或魔法打开。","要打开这扇门，必须将地牢（见区域31A、32、33、35B、37和39）其他地方找到的十个水晶眼插入凹痕中。","每个眼睛插入时都会亮起并发出点击声。"],flesh:`这扇门密封得很紧，不能用属性检定或魔法打开。要打开这扇门，必须将地牢（见区域31A、32、33、35B、37和39）其他地方找到的十个水晶眼插入凹痕中。每个眼睛插入时都会亮起并发出点击声。随着每个眼睛的插入，角色在镜子中的反射会逐渐变得不健康——体重减轻、掉发、掉牙，越来越像不死生物。

当十个眼睛全部就位时，它们会消失，门会随之轰鸣着打开，并且从此保持开启状态。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"走廊尽头是一扇大门，门上嵌着一个圆形的镜子。镜子周围有十个圆形凹痕，每个大约一英寸宽。"},{id:"scn_417",locationId:"loc_3b0",name:"44B. 库内",activation:{condition:{type:"always"},priority:0},skeleton:["门打开时，阅读：","金库门轰鸣着向上打开，露出一个高五十尺的圆顶房间，里面点着蜡烛。","抛光的大理石地板反射得如此完美，以至于产生了站在一个球体入口处的错觉。","沿着墙壁有九个壁龛，里面装满了闪闪发光的财宝。","在房间中央，一个大型球体物体在离地面二十尺的黑色丝绸布下悬浮着。"],flesh:`门打开时，阅读：

名为贝尔科兹（发音为BEL-korj）的眼魔悬浮在房间的顶部。阿瑟瑞克施展了en=Wish，使贝尔科兹隐形。成功对眼魔施展en=Dispel Magic（DC 19）或接触en=Antimagic Field可使其隐形效果终止。贝尔科兹对入侵者的反应将在以下"眼魔战术"部分中描述。

大厅里有一百支点燃的蜡烛。当蜡烛保持在这座金库内时，它们会无限期地燃烧。如果一支蜡烛从房间中拿走，它就会正常燃烧完。

穹顶下方的地面被魔法变得滑腻。任何踏入或在此区域开始回合的生物都必须成功通过一次 DC 10 敏捷豁免检定，否则将 倒地。当一个未固定的生物被推挤或以其他方式在地面上移动时，它会在一个方向上滑动，直到碰到墙壁或其他障碍物才会停止。

壁龛内藏有宝藏（见下文的"宝藏"）。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:["enc_417"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"金库门轰鸣着向上打开，露出一个高五十尺的圆顶房间，里面点着蜡烛。抛光的大理石地板反射得如此完美，以至于产生了站在一个球体入口处的错觉。沿着墙壁有九个壁龛，里面装满了闪闪发光的财宝。在房间中央，一个大型球体物体在离地面二十尺的黑色丝绸布下悬浮着。"},{id:"scn_41d",locationId:"loc_41d",name:"第四层：恐怖之室",activation:{condition:{type:"always"},priority:0},skeleton:["地图5.4展示了地牢的这一层。","这些走廊和房间充满了灰尘，地面上散落着瓦砾和死去的奥穆人的骨头。"],flesh:"地图5.4展示了地牢的这一层。这些走廊和房间充满了灰尘，地面上散落着瓦砾和死去的奥穆人的骨头。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_41e",locationId:"loc_41d",name:"45. 石像鬼守卫",activation:{condition:{type:"always"},priority:0},skeleton:["在宏伟楼梯的底部，一个共鸣的机械隆隆声从这个房间地板中央的一个黑暗竖井中传出。","四个圆柱形的石制基座围绕着竖井，每个基座高十尺，宽五尺，并在其侧面设有一个小槽口。","每个基座上蹲着一个大型的四臂石像鬼。","任何角色从上面的阳台或另一个高处俯瞰房间时会注意到其他事情：","每个石像鬼都被包含在由嵌入其基座顶部的金属瓦片组成的正方形内。"],flesh:`任何角色从上面的阳台或另一个高处俯瞰房间时会注意到其他事情：

四只 四臂巨石像鬼（见 附录D）栖息在基座上，每一只都蹲伏在它那块镶嵌着珍贵金属的正方形内。这些石像鬼保持静止，直到它们被激怒。

每个基座上的插槽离地面4尺，大致是标准硬币的大小。所有类人生物在离开这个房间前都必须缴纳什一税，以避免激起石像鬼的愤怒。具体来说，每个类人生物必须将适当类型的硬币插入每个基座（北基座1铜币，东基座1银币，南基座1金币，西基座1白金币）。石像鬼总是会接受比所需更珍贵的硬币，所以将每个基座插入一个白金硬币的角色可以安全地离开房间。石像鬼也会接受多个等值或更高价值的硬币作为什一税（例如，东基座上用10铜币代替1银币）。基座内有空心腔体来存放硬币（见下面的"宝藏"）。

石像鬼总是知道何时被欺骗。如果任何类人生物在没有提供足够硬币的情况下离开房间，任何被欺骗的石像鬼就会苏醒并攻击吝啬鬼。如果石像鬼或其底座以任何方式受到损坏，石像鬼也会苏醒并攻击。底座上的金属瓦片可以撬松，但如果从这个房间移除，它们就会变成灰尘。

地面上的竖井宽10尺，深15尺。它通向区域58的天花板。要爬上竖井光滑的墙壁，角色需要攀爬装备或魔法。

每个底座是一个空心石制圆柱体，壁厚6英寸。拥有适当工具的角色可以砸穿石头，以获取每个底座内的硬币。

北边的底座有5个银币和100个铜币。东边的底座藏有1个金币、120个银币和200个铜币。南边的底座隐藏着2个铂金币、90个金币、350个银币和500个铜币。西边的底座有10个铂金币、630个金币、7200个银币、5000个铜币，以及一个欧曼工程师的骸骨。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_41e"],treasureSlotIds:["trs_41e_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`在宏伟楼梯的底部，一个共鸣的机械隆隆声从这个房间地板中央的一个黑暗竖井中传出。四个圆柱形的石制基座围绕着竖井，每个基座高十尺，宽五尺，并在其侧面设有一个小槽口。每个基座上蹲着一个大型的四臂石像鬼。

每个石像鬼都被包含在由嵌入其基座顶部的金属瓦片组成的正方形内。从最北边的基座开始，按顺时针方向，瓦片分别是铜的、银的、金的和铂的。`,mapGeometry:{imageRef:"adventure/ToA/079-511.webp"}},{id:"scn_423",locationId:"loc_41d",name:"46. 蜥蜴巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个走廊的远端雕刻着一个六尺高的绿色恶魔面孔，它的嘴巴张开。","墙上的壁画展示了没有面孔的人形生物，他们痛苦地弯腰，双手紧抓头部和耳朵。","尽管有不祥的壁画和恶魔面孔雕刻，这个走廊没有陷阱。","任何检查恶魔面孔的角色会发现一只蜥蜴藏在雕刻的浅口中。","这只蜥蜴是由一位楚尔坦德鲁伊施放的en=Awaken法术的接受者，智力得分为10，并且会说德鲁伊语。"],flesh:"尽管有不祥的壁画和恶魔面孔雕刻，这个走廊没有陷阱。任何检查恶魔面孔的角色会发现一只蜥蜴藏在雕刻的浅口中。这只蜥蜴是由一位楚尔坦德鲁伊施放的en=Awaken法术的接受者，智力得分为10，并且会说德鲁伊语。黄旗公司在欧姆捕获了它，并把它带到墓穴，认为它可能对触发陷阱有用。蜥蜴逃脱了，最终来到这里。它不知道它的捕获者发生了什么，如果角色们承诺将其带回欧姆，它会尽其所能地帮助角色。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[158],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个走廊的远端雕刻着一个六尺高的绿色恶魔面孔，它的嘴巴张开。墙上的壁画展示了没有面孔的人形生物，他们痛苦地弯腰，双手紧抓头部和耳朵。"},{id:"scn_425",locationId:"loc_41d",name:"47. 元素牢房",activation:{condition:{type:"always"},priority:0},skeleton:["要到达莎根比的墓穴(区域48)，冒险者必须穿过四个主题与火、水、空气和土相关的牢房。","除非角色们已经摧毁了他，威瑟斯（见区域28）会在秘密门通往47A区域被打开时感知到，并使用区域25中的水晶球池观察冒险者们如何应对这些牢房。","每个牢房中都充填着en=Antimagic Field，使得魔法物品失效，压制持续中的魔法效果，并阻止所有的法术施放。"],flesh:`要到达莎根比的墓穴(区域48)，冒险者必须穿过四个主题与火、水、空气和土相关的牢房。除非角色们已经摧毁了他，威瑟斯（见区域28）会在秘密门通往47A区域被打开时感知到，并使用区域25中的水晶球池观察冒险者们如何应对这些牢房。

每个牢房中都充填着en=Antimagic Field，使得魔法物品失效，压制持续中的魔法效果，并阻止所有的法术施放。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[158],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"完整信息请参见玩家手册中的法术描述。"},{id:"scn_426",locationId:"loc_41d",name:"47A. 火元素牢房",activation:{condition:{type:"always"},priority:0},skeleton:["这个狭小的牢房中爆发出阵阵热浪。","墙壁上刻有浮雕，描绘着火山将城市烧成灰烬的场景。","地板和十尺高的天花板上钻有一排排小孔。","对面的墙上嵌着一具人类骷髅，手持一个装有燃烧的红蜡烛的铁烛台。","这具骷髅是已故欧曼工程师的遗骸。"],flesh:`这具骷髅是已故欧曼工程师的遗骸。只要蜡烛留在这个牢房内，它就会无限期地燃烧。如果被拿走，它会正常燃烧完毕。

如果威瑟斯正在监视，他会尝试通过低声说出一个命令词来困住尽可能多的角色在牢房内，这个命令词会导致南墙上的秘密门滑动关闭并上锁。在秘密门上找不到钥匙孔或可见的开启机制。秘密门会保持密封状态，直到角色们从牢房逃脱或尝试逃脱时死亡。可以使用楔子、钉子或类似的物体来防止门关闭。

当任何角色靠近蜡烛1英尺范围内或将其从烛台取下时，天花板上的小孔开始涌出熔岩。熔岩如同雨点般落下，并通过地板上的孔神奇地流走。当熔岩开始落下时，房间内的每个生物都必须进行一次DC 20敏捷豁免，若豁免失败则受到22点（4d10）火焰伤害，若成功则只受一半伤害。任何在本回合首次进入房间或在此开始回合的生物必须重复进行豁免。由于房间内的en=Antimagic Field，提供火焰抗性的魔法物品和法术在此无效。

如果蜡烛在牢房内被熄灭，en=Antimagic Field将被解除，并且牢房内的所有生物将被传送到其他牢房之一，具体如下：

如果蜡烛的火焰被水或其他液体熄灭，牢房内的生物将被传送到水牢房（区域47B）。

如果蜡烛的火焰被吹灭或因缺乏氧气而熄灭（包括在墙壁或地板上摩擦熄灭），生物将被传送到空气牢房（区域47C）。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[158],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个狭小的牢房中爆发出阵阵热浪。墙壁上刻有浮雕，描绘着火山将城市烧成灰烬的场景。地板和十尺高的天花板上钻有一排排小孔。对面的墙上嵌着一具人类骷髅，手持一个装有燃烧的红蜡烛的铁烛台。"},{id:"scn_42b",locationId:"loc_41d",name:"47B. 水元素牢房",activation:{condition:{type:"always"},priority:0},skeleton:["你出现在一个有霉味的牢房里。","潮湿的墙壁上覆盖着活蜗牛和牡蛎，并有浮雕展示海啸摧毁沿海城市和船只。","一具美人鱼骷髅嵌在一面墙上，紧握着一个装有燃烧的红蜡烛的铁烛台。","突然，微温的水开始通过十尺高的天花板上的小孔流入牢房。","这根蜡烛是一个干扰物，并不能提供离开牢房的出路。"],flesh:`这根蜡烛是一个干扰物，并不能提供离开牢房的出路。只要它留在这个牢房内，蜡烛就会无限期地燃烧，直到被熄灭。如果被拿走，它会正常燃烧完毕。

水以每轮1英尺的速度填满牢房，10轮后房间会被完全填满。如果蜡烛留在烛台上，上升的水将在第四轮将其熄灭。试图堵塞或阻挡孔洞并不能阻止水涌入。由于牢房内的en=Antimagic Field，使角色能够在水下呼吸的法术和魔法物品在此处无法生效。任何空气耗尽的角色将开始窒息。

墙上附着数十只蜗牛和牡蛎。角色可以使用动作从墙上取下一个牡蛎或蜗牛，打开它并吃掉。第一次从墙上取下牡蛎或蜗牛时，牢房的en=Antimagic Field将被解除。吃牡蛎会将角色（连同他或她的物品）传送到空气牢房（区域47C），而吃蜗牛会将角色（连同他或她的物品）传送到土牢房（区域47D）。

当最后一个角色离开牢房时，地板上的小孔会打开，使水以每轮1尺的速度排出。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"你出现在一个有霉味的牢房里。潮湿的墙壁上覆盖着活蜗牛和牡蛎，并有浮雕展示海啸摧毁沿海城市和船只。一具美人鱼骷髅嵌在一面墙上，紧握着一个装有燃烧的红蜡烛的铁烛台。突然，微温的水开始通过十尺高的天花板上的小孔流入牢房。"},{id:"scn_42f",locationId:"loc_41d",name:"47C. 风元素牢房",activation:{condition:{type:"always"},priority:0},skeleton:["当你被传送到一个没有光、没有声音、也没有空气的房间时，你立刻开始感到窒息。","牢房的en=Antimagic Field熄灭了魔法光源，而非魔法火焰因为房间内缺乏氧气而熄灭。","能在黑暗中视物的生物可以看到以下情景：","这个黑暗牢房的墙壁上有浮雕，展示着龙卷风拔起树木并摧毁城市。","一具鸟羽人骷髅嵌在一面墙上，手持一个装有未点燃的红蜡烛的铁烛台。"],flesh:`牢房的en=Antimagic Field熄灭了魔法光源，而非魔法火焰因为房间内缺乏氧气而熄灭。能在黑暗中视物的生物可以看到以下情景：

任何需要空气呼吸的生物会立即开始窒息，除非它在传送到这里之前采取了屏息的预防措施。

任何无法看见的角色可以使用一个动作通过触摸盲目搜索牢房，然后进行一次 DC 13 感知 (察觉) 检定。如果检定成功，角色可以辨别出房间的一个关键特征：要么是墙上的雕刻，要么是阿剌克瑞骨架，要么是蜡烛。

嵌入墙壁中的鸟羽人骨骼拥有中空的骨骼，其中包含着陈旧但可呼吸的空气——每一个骨骼本质上都是用蜡密封的管子。拥有匕首或类似工具的角色可以使用动作从墙上撬下骨骼，刺穿蜡封，并吸入里面的空气。第一次从墙上移除骨骼时，牢房的en=Antimagic Field将被解除。任何吸入空气的角色（连同他或她的物品）将被传送到区域48。

没有空气，蜡烛无法点燃，但这可以浪费角色们的时间尝试。蜡烛并不是角色逃离牢房的手段。如果以某种方式点燃，只要它留在这个牢房内，蜡烛就会无限期地燃烧。如果被拿走，它会正常燃烧完毕。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`当你被传送到一个没有光、没有声音、也没有空气的房间时，你立刻开始感到窒息。

这个黑暗牢房的墙壁上有浮雕，展示着龙卷风拔起树木并摧毁城市。一具鸟羽人骷髅嵌在一面墙上，手持一个装有未点燃的红蜡烛的铁烛台。`},{id:"scn_434",locationId:"loc_41d",name:"47D. 土元素牢房",activation:{condition:{type:"always"},priority:0},skeleton:["这个石制牢房的墙壁上覆盖着浮雕，展示着沙漠吞噬文明废墟的场景。","一面墙上有一个身穿长袍的美杜莎的高浮雕。","它戴着一个带有黑曜石吊坠的石项链，并紧握着一个装有燃烧的红蜡烛的铁烛台。","沙子开始从十尺高的天花板上的小孔中落下，你听到地板下传来隆隆的声音。","蜡烛可以被熄灭并重新点燃，但对于试图逃离房间的角色来说没有用处。"],flesh:`蜡烛可以被熄灭并重新点燃，但对于试图逃离房间的角色来说没有用处。只要它留在这个牢房内，蜡烛就会无限期地燃烧。如果被拿走，它会正常燃烧完毕。

任何搜索牢房并通过一个DC 10感知（察觉）检定成功的角色，会注意到一个从北向南贯穿地板中间的接缝。这个接缝暗示可能存在一个陷阱坑。

下落的沙子以每轮6英寸的速度填满房间，1轮后地板变成3。任何能够到天花板的角色可以使用一个动作用布或蜡堵住一些洞，使沙子每轮减慢1英寸。如果沙子达到12英寸深，地板沿着接缝裂开。当陷坑打开时，一半地板向西摆动，另一半向东下落，沙子停止下落。一个6英寸宽的壁架环绕陷坑四周。任何在陷坑打开时站在地板上的生物必须进行一个DC 15敏捷豁免；那些靠墙站的生物在豁免检定上有优势。豁免成功的生物会抓住壁架。豁免失败的生物将坠落。

这个10英尺深的坑内有两个巨大的石制滚轮，滚轮上嵌有交错的石齿。任何比沙粒大的物体都会被这些滚轮碾碎，造成132点（24d10）力场伤害。任何因该伤害而生命值降至0点的生物都会被碾成肉泥。任何一个生命值至少为1的生物通过滚轮后，会落在磨盘下方5英尺处的铁格栅上。铁格栅上方的墙壁上嵌有一块石制按钮，只有滚轮下方的生物才能看到。按下按钮后，滚轮会停止转动并缩回墙壁内，让幸存的生物通过一次成功的DC 15力量（运动）检定爬出去。

这个坑位于牢房的en=Antimagic Field内，因此法术和魔法效果，如果有的话，将无法让角色在滚筒上生存或攀爬出坑。

任何搜索美杜莎浮雕并通过DC 11感知（察觉）检定的角色会注意到雕刻周围的接缝，表明存在一扇密门。成功的检定还会发现美杜莎的黑曜石吊坠是一个按钮。除非陷坑开启，否则按钮无法按下。角色可以尝试使用盗贼工具解锁按钮，需通过DC 17敏捷检定。按下解锁的吊坠会使密门锁具发出沉闷的咔哒声松开，之后可以推开门露出后面的区域48。密门装有弹簧，除非被固定或楔住，否则会自动关闭。门关闭时会锁住，只能从牢房内部打开。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个石制牢房的墙壁上覆盖着浮雕，展示着沙漠吞噬文明废墟的场景。一面墙上有一个身穿长袍的美杜莎的高浮雕。它戴着一个带有黑曜石吊坠的石项链，并紧握着一个装有燃烧的红蜡烛的铁烛台。沙子开始从十尺高的天花板上的小孔中落下，你听到地板下传来隆隆的声音。"},{id:"scn_438",locationId:"loc_41d",name:"48. 莎根比的墓",activation:{condition:{type:"always"},priority:0},skeleton:['每个从区域47C传送到这个墓室的角色都会出现在一个随机确定的传送符文上（见下文的"传送符文"）。',"角色也可以通过区域47D的秘密门进入墓室。","这个墓室充满了兵马俑战士，它们整齐地跪在抛光的木棺周围。","在战士之间，四条散落着破碎陶器的通道通向棺材，棺材上画着一个豹子，其肩膀上长着蛇。",'如果墓室内有入侵者的声音，兵马俑战士会站起来保卫它（见下文的"兵马俑战士"）。'],flesh:`每个从区域47C传送到这个墓室的角色都会出现在一个随机确定的传送符文上（见下文的"传送符文"）。角色也可以通过区域47D的秘密门进入墓室。

如果墓室内有入侵者的声音，兵马俑战士会站起来保卫它（见下文的"兵马俑战士"）。要偷取莎根比的宝藏，角色们必须安静地移动。

任何被安珂或望戈的灵魂附身的角色在进入这个区域时会收到建议：

紧张的安珂建议她的宿主立即使用其中一个传送符文离开墓室，尽管她无法决定哪个符文最好。

冲动的望戈认为尽可能快地破坏尽可能多的兵马俑是个好主意。

墓室的北面、东面和南面墙上的地面上刻有三个传送符文。一个en=Detect Magic法术或类似的效果显示每个符文都有不同的气息——来自东面符文的强大稳定的召唤魔法；来自北面符文的闪烁召唤魔法；以及来自南面符文的召唤和变化魔法的组合。

每当一个生物传送到墓穴中时，掷一个d6来确定它到达哪个符文上：1-2，北符文；3-4，东符文；5-6，南符文。如果多个生物被传送到同一个符文上，当新生物出现时，之前的生物会被无害地推下符文。此外，北符文出现故障，任何到达那里的生物都会受到18点（4d8）力场伤害。

任何生物从符文外部移动到其空间内，会立即被传送到区域50。使用南侧符文进行传送的生物还会被变化成一种随机的野兽，就好像它未能通过对抗en=Polymorph法术的豁免检定一样。掷一个d4来确定新形态：1，狒狒；2，蝙蝠；3，飞蛇；4，食人鱼。

四十八名兵马俑战士守卫着墓室。使用活化盔甲的具体数值，并进行以下更改：

每个兵马俑都手持一把短剑。作为一个动作，它可以用该武器攻击两次（命中+4），每次命中造成5（1d6 + 2）点穿刺伤害。

如果对兵马俑造成重击，它将破碎并被摧毁。

只要墓室保持相对安静，兵马俑战士就会保持完全静止，不构成威胁。如果任何角色在墓室内大声说话、踩到破碎的陶器，或制造任何其他等效的噪音，请阅读：

在这一声警告之后，如果听到任何其他响动，兵马俑战士会发动攻击。在不使用魔法的情况下，任何生物在穿过陵墓时都必须通过一个DC 12的敏捷（隐匿）检定以保持安静。走过陶器碎片会使该检定处于劣势。一旦被唤醒进入战斗状态，兵马俑战士会攻击陵墓中的所有生物。

莎根比的棺材设有陷阱但未上锁。当棺盖被打开时，内部的音乐盒会启动，若能听见其诡异旋律（即便冒险者此前一直保持安静），将唤醒兵马俑。任何角色在轻轻抬起棺盖时通过DC 14感知（察觉）检定可发现陷阱触发线，随后可用盗贼工具并通过DC 12敏捷检定切断。若检定失败则音乐盒启动。

六岐蛇豹（莎根比的动物形态；

以下宝物堆放在莎根比（Shagambi）的遗骨周围：200金币、五颗月光石（每颗价值50金币）、被陷阱触发的精美音乐盒（价值250金币）以及一件吟游诗人乐器（卡奈斯卡曼陀林）。如果这件乐器离开九神之墓，它就会化为尘埃并被摧毁（但请参见"失落的宝藏"）。

莎根比的灵魂试图附身于任何触摸曼陀林的角色（见"九诡神亡魂"）。当莎根比的灵魂显现时，请阅读：

如果灵魂成功附身于角色，给玩家ToA（见附录F）。如果尝试失败，灵魂将返回到曼陀林中，并等待另一个角色触摸它。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_438"],treasureSlotIds:["trs_438_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[160],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个墓室充满了兵马俑战士，它们整齐地跪在抛光的木棺周围。在战士之间，四条散落着破碎陶器的通道通向棺材，棺材上画着一个豹子，其肩膀上长着蛇。

所有的兵马俑战士都转过头来面对你。它们齐刷刷地将剑从剑鞘中拔出几英寸。

六条朦胧的蛇从曼陀林中滑出，缠绕在你的身体周围。你听到一个在你的脑海中低语的声音说："我不是你的敌人。"`,dmGuidance:'见附录D）的骨头被绑在布中，放在石棺内，连同贵重物品（见下文的"宝藏"）。'},{id:"scn_442",locationId:"loc_41d",name:"49. 死亡迷宫",activation:{condition:{type:"always"},priority:0},skeleton:["石板封住了这个地牢角落的入口。"],flesh:"石板封住了这个地牢角落的入口。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[161],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_443",locationId:"loc_41d",name:"49A. 石板",activation:{condition:{type:"always"},priority:0},skeleton:["一块石板堵住了这条走廊的尽头。","石板上画着一个面容憔悴的男性类人生物，身穿带兜帽的斗篷，其脸是星星构成的面具。","这个人物枯萎的左手抬起，掌心向外。","这些石板对伤害和法术都是不可渗透的，它们紧密地安装在一起，即使是气态生物也无法穿过。","如果任何角色站在石板前，伸出左手掌向上，两块石板会同时打开，不管采取了什么措施来阻止它们。"],flesh:`这些石板对伤害和法术都是不可渗透的，它们紧密地安装在一起，即使是气态生物也无法穿过。如果任何角色站在石板前，伸出左手掌向上，两块石板会同时打开，不管采取了什么措施来阻止它们。当这种情况发生时，读：

如果石板被再次升起以封住出口（见区域49C），迷宫内的角色会看到每块石板内侧的第二个图像：

这个图像只有在石板处于升起位置时才可见。从迷宫内部，一个角色可以通过站在任一石板前并举起他的或她的右臂来使两块石板重新沉入地面——只要那只手臂在肘部以下被切断。手臂是如何被切断的并不重要，但将其放入49B区域的湮灭法球是一种方法。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[161],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一块石板堵住了这条走廊的尽头。石板上画着一个面容憔悴的男性类人生物，身穿带兜帽的斗篷，其脸是星星构成的面具。这个人物枯萎的左手抬起，掌心向外。

石板沉入地板，露出了后面的尘土飞扬的通道。墙壁上的浮雕刻画着一群类人生物逃离天空中的黑色星星，星星发出的光芒触及到它们将它们变成尘土。

石板内侧画着一个穿着带兜帽斗篷的男性类人生物，他的脸上再次布满了星星。这个人物举起了他整齐地切断在肘部的右臂。`,dmGuidance:"当角色到达任一入口时，请阅读："},{id:"scn_447",locationId:"loc_41d",name:"49B. 绿色恶魔面孔",activation:{condition:{type:"always"},priority:0},skeleton:["一个绿色石制的恶魔面孔从墙上突出。","恶魔的嘴巴张开，里面充满了黑暗。","这个恶魔面孔高6尺，嘴巴直径2尺。","一个en=Detect Magic法术或类似的效果揭示了面孔上的变形魔法气息。","口腔内的黑暗是一个湮灭法球，它无法被控制或移动。"],flesh:`这个恶魔面孔高6尺，嘴巴直径2尺。一个en=Detect Magic法术或类似的效果揭示了面孔上的变形魔法气息。

口腔内的黑暗是一个湮灭法球，它无法被控制或移动。任何站在距离球体5英尺内的角色都能听到从球体中传出的微弱低语。成功通过DC 12感知（察觉）检定的角色能够辨认出深渊语中的话语，其翻译如下："黑暗正朝你袭来。你的末日即将来临。"`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[162],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个绿色石制的恶魔面孔从墙上突出。恶魔的嘴巴张开，里面充满了黑暗。"},{id:"scn_449",locationId:"loc_41d",name:"49C. 黑蛋白石皇冠",activation:{condition:{type:"always"},priority:0},skeleton:["在这个中央开阔的空间里，一个金色的王冠，顶部镶嵌着一颗闪闪发光的黑色蛋白石，放置在大理石基座上。","如果任何生物从基座上移除皇冠，两件事情会同时发生：","49A区域的石板升起，封闭了迷宫的两个出口。","两个博达克（见附录D）神奇地从49B区域的湮灭法球中出现，似乎不受其影响，并开始在迷宫中寻找猎物。","被博达克杀死的任何生物都会被拖回球体并投入其中。"],flesh:`如果任何生物从基座上移除皇冠，两件事情会同时发生：

49A区域的石板升起，封闭了迷宫的两个出口。

两个博达克（见附录D）神奇地从49B区域的湮灭法球中出现，似乎不受其影响，并开始在迷宫中寻找猎物。被博达克杀死的任何生物都会被拖回球体并投入其中。只有在确信迷宫中没有剩余可杀之物时，博达克才会爬回球体。

黑蛋白石王冠价值5000金币，但如果在任何大城市的拍卖中出售，其价值可能高达这个数字的四倍。关于这件物品的更多信息，请见"传说中的宝藏"。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_449"],treasureSlotIds:["trs_449_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[162],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在这个中央开阔的空间里，一个金色的王冠，顶部镶嵌着一颗闪闪发光的黑色蛋白石，放置在大理石基座上。",mapGeometry:{imageRef:"adventure/ToA/080-513.webp"}},{id:"scn_44c",locationId:"loc_41d",name:"50. 生命陷阱之镜",activation:{condition:{type:"always"},priority:0},skeleton:["任何从区域48传送到这里的生物都会随机出现在房间中心附近，并且面向西方，这对它来说非常危险。","这个尘土飞扬的房间是一个15尺见方的正方形，除了墙上唯一出口对面挂着的一面装饰华丽的矩形镜子外，房间里空无一物。","用至尊胶附着在西墙上的是一面摄心镜。","镜子目前有三个空单元。","如果镜子在其十二个单元已经被占据时困住一个生物，它会随机释放一个被困的生物，以容纳新的囚犯。"],flesh:`任何从区域48传送到这里的生物都会随机出现在房间中心附近，并且面向西方，这对它来说非常危险。

用至尊胶附着在西墙上的是一面摄心镜。任何在镜子30英尺内看到自己倒影的生物必须通过一个DC 15的魅力豁免检定，否则将被囚禁在镜子的十二个异次元牢房之一中，随身携带的物品也会一同被囚禁。构装体自动通过豁免检定。

镜子目前有三个空单元。如果镜子在其十二个单元已经被占据时困住一个生物，它会随机释放一个被困的生物，以容纳新的囚犯。镜子的囚犯表格列出了镜子目前的囚犯，并总结了如果释放它们或与它们交谈时它们的反应。否则，请根据你认为合适的方式进行角色扮演。

这面镜子有两个命令词。站在镜子5尺范围内说出"Khomara"这个词可以激活或关闭镜子。（镜子关闭时无法困住生物。）说出"Blackfire"这个词以及一个牢房编号可以释放困在该牢房中的生物。

对镜子施放一个en=Identify法术可以揭示它的命令词和魔法属性。命令词也写在区域28中找到的法术书中。

如果镜子被摧毁，所有被困在其中的生物将立即被释放。）为了避免与如此多的生物进行战斗，可以假设只有隐形追猎者和巨魔最初会攻击队伍。其他生物在获得自由后会互相攻击或逃跑，具体如下：

卢卡努和扎尔攻击石像鬼，在4轮内将其摧毁，然后帮助角色们对付隐形追猎者和食人魔。

蝠翼魔攻击了阿坦，在一个回合内将其杀死。吸取了阿坦的血液后，蝠翼魔飞走去消化它的猎物。

变形怪试图逃跑，但不会逃得太远，希望角色们能够幸存，并在他们胜利后回来感谢他们。

特拉德·索尔布里斯使用他的魔法帮助角色们，除非看起来他们快要被击败，那时这个卓尔精灵会转而对抗他们。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_44c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[163],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个尘土飞扬的房间是一个15尺见方的正方形，除了墙上唯一出口对面挂着的一面装饰华丽的矩形镜子外，房间里空无一物。",dmGuidance:"（有关镜子的统计数据，请参阅第七章的城主指南。"},{id:"scn_450",locationId:"loc_41d",name:"51. 恐怖之门",activation:{condition:{type:"always"},priority:0},skeleton:["走廊尽头矗立着一扇看似巨大的石门，但它没有把手或铰链。","门两侧的墙上各有一个相匹配的青铜雕塑——每个都是一条露出獠牙的蛇的头部和颈部。",'门楣上用通用语刻着以下信息："热情如火焰，冷酷如残酷，静止如死亡，稀饭给食尸鬼。',"腐烂肉体的恶臭从青铜蛇像中飘散出来。","仔细检查会发现每个雕像的嘴里有干涸的血迹，以及在它颈部后部的细小管子。"],flesh:`腐烂肉体的恶臭从青铜蛇像中飘散出来。仔细检查会发现每个雕像的嘴里有干涸的血迹，以及在它颈部后部的细小管子。这些管子延伸到门两侧的秘密房间里，那里关押着六只妖鬼们（每个房间三只）。

当一品脱或更多的新鲜血液倒入每个青铜蛇的口中时，石门就会打开。血液滴入容纳食尸鬼的房间，使它们陷入一种可以透过蛇张开的嘴巴听到的狂饮狂潮。一旦食尸鬼喝饱了血，它们就会拉动链条将门拉起打开。

这扇门重达1000磅，可以由总力量值达到33或更高的角色抬起。这会释放出饥饿的食尸鬼，它们会战斗直到被驱逐或被消灭。每扇锁住的密门可以通过施放en=Knock法术或由角色成功通过一个DC 22力量（运动）检定来强行打开。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_450"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[163],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:'走廊尽头矗立着一扇看似巨大的石门，但它没有把手或铰链。门两侧的墙上各有一个相匹配的青铜雕塑——每个都是一条露出獠牙的蛇的头部和颈部。门楣上用通用语刻着以下信息："热情如火焰，冷酷如残酷，静止如死亡，稀饭给食尸鬼。"',dmGuidance:"如果角色这样做，门后走廊两侧的密门会解锁并滑开。"},{id:"scn_452",locationId:"loc_41d",name:"52. 王座厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个拱形的房间有一个十尺深的下沉地面，周围是不带栏杆的壁架。","壁架上的凹室里摆放着带有黄蜂头部的人形战士的彩绘木雕，每个战士都穿着草裙，紧握着长矛。","一个由骨头和皮肤条绑扎而成的可怕宝座矗立在西侧的悬崖上。","一个可怕的带角的头骨位于宝座之上，周围堆满了小头骨。","宝座的座位似乎是用拉伸的皮肤制成的，上面放着一根金属权杖。"],flesh:`四根柱子支撑着天花板，天花板距离壁架15尺，距离下沉地面25尺。木雕是无害的（他们的长矛只是装饰性的），每个重150磅。

任何被奥博娜卡或帕帕扎图灵魂附身的角色在进入这个区域时会收到建议：

谨慎的奥博娜卡建议她的宿主不要打扰宝座或拿起权杖，但她承认不确定这两者是否真的有害。

精明的帕帕扎图意识到宝座是由死去的奥穆人的骨头和奥穆伟大的牛头人冠军卡拉戈斯的头骨制成的。

在房间里潜伏的三个生物是阿瑟瑞克的不死仆从。尽管它们失明，但每个生物都具有感知和描绘九神之墓中发生的疼痛、屠杀和死亡场景的魔法能力。

其中一位艺术家目前正在覆盖描绘黄旗公司陷落的场景。唯一剩下的是已故的布里克斯顿勋爵（他的遗体可以在区域63找到）被毒气呛到的图像。另外两位艺术家正在绘制捕捉玩家角色迄今为止在墓穴中惊险经历的图像。（选择一个或多个队伍成员受到严重伤害或死亡的难忘时刻。）

这些不死艺术家具有丧尸们的具体数值，并有以下变化：

与黑暗视觉不同，每位艺术家拥有30尺范围内的盲视。在这个半径之外，艺术家们是失明的，并且对目盲状态免疫。

它们没有有效的攻击方式，并且价值0 XP。

虽然它太大无法挤过任何5尺宽的走廊，但它可以轻松穿越东边的更宽的通道。

王座由被杀死的奥姆战士的皮肤和骨头制成，周围堆满了奥姆儿童的颅骨。王座顶部的颅骨曾经属于一位名叫卡拉戈斯的奥姆牛头人守卫。任何触碰颅骨或坐在王座上的生物都必须成功通过一个 DC 16 魅力豁免检定，否则将被诅咒，获得卡拉戈斯的狂怒。被诅咒时，生物获得50点临时生命值并变得狂暴。在诅咒解除之前，受害者被迫用近战攻击攻击它能看到的最接近的生物。它不能进行远程攻击或施法，如果看不到任何生物进行攻击，它将什么也不做。如果狂暴的生物生命值降至0，或者对其施放 en=Greater Restoration 或 en=Remove Curse 法术，诅咒将结束。当诅咒结束时，由它赋予的临时生命值也会消失。

宝座上的权杖由纯铁制成，头部是精金。它是非魔法的，重12磅，可以作为钉头锤使用。它的魔法双胞胎藏在区域53。

在西北壁龛的雕像后面，一扇秘密门通向区域53。门微微开着，任何搜索壁龛的角色都能找到它。

东南角的一扇正确关闭的秘密门通向一个向上和向下的螺旋楼梯（区域26）。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[164],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个拱形的房间有一个十尺深的下沉地面，周围是不带栏杆的壁架。壁架上的凹室里摆放着带有黄蜂头部的人形战士的彩绘木雕，每个战士都穿着草裙，紧握着长矛。
一个由骨头和皮肤条绑扎而成的可怕宝座矗立在西侧的悬崖上。一个可怕的带角的头骨位于宝座之上，周围堆满了小头骨。宝座的座位似乎是用拉伸的皮肤制成的，上面放着一根金属权杖。
在房间凹陷部分徘徊的是三个瘦削的人形身影，他们穿着满是灰尘的长袍，身上披着蜘蛛网，眼睛和嘴巴都被缝了起来。他们手持刷子和装有颜料的陶罐，用阴郁、绘制粗糙的插图来装饰墙壁和柱子。`,dmGuidance:"如果角色们转化或摧毁了任何一位艺术家，一只暴龙丧尸（见附录D）会从地板下的一个洞中冲出来攻击，留下一个20尺直径的洞和破碎的地板砖。",mapGeometry:{imageRef:"adventure/ToA/081-514.webp"}},{id:"scn_459",locationId:"loc_41d",name:"53. 日之女王的墓穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的墙壁上装饰着丛林城市的瓷砖马赛克，与盛开的植物、鸟类、昆虫以及穿着金色裙子、手持长矛和装饰性罐子的人类的壁画交织在一起。","天花板被漆成看起来像清澈的蓝天。","一只镶嵌宝石的小蟑螂栖息在房间中央的黑色玄武岩制成的石棺上。","一个两尺直径的球体悬挂在石棺上方的链子上，由锤打的黄金制成，看起来像一个微笑的太阳。","在阿瑟瑞克杀死了欧姆的恶作剧神并奴役了这座城市之后，这座城市的年迈女王Napaka选择不逃跑，而是自愿作为牺牲品，以换取她人民的释放。"],flesh:`在阿瑟瑞克杀死了欧姆的恶作剧神并奴役了这座城市之后，这座城市的年迈女王Napaka选择不逃跑，而是自愿作为牺牲品，以换取她人民的释放。阿瑟瑞克对女王的勇气印象深刻——不足以饶她一命或尊重她的请求，但足以让她被安置在一个特别的墓室中。

一个en=Detect Magic法术或类似的效果揭示了金色太阳和镶嵌宝石的蟑螂（见下面的"宝藏"）周围的召唤魔法光环。

黑色石棺的盖子上刻有一个用通用语书写的名字：纳帕卡。盖子由熔化的铅条密封，可以轻易撬开。一旦铅条被移除，成功的 DC 15 力量（运动）检定可以将盖子推开。石棺内部衬有铅，并包含几件宝物（见下面的"宝物"）。

每当太阳或其链条被触摸或损坏时，太阳的微笑会变成一种难以捉摸的表情，并且在以自身为中心的20尺半径球体内释放出巨大的热量。任何在其区域内开始回合的生物都会受到10（3d6）点火焰伤害。如果所有生物离开受影响的区域，这个效果就会结束。

当女王的遗骸或她的任何宝物首次从石棺中移出时，太阳的表情变得愤怒，并散发出灼热的光线。在太阳周围30英尺范围内且没有对其有3的每个生物必须成功通过一个DC 14的敏捷豁免检定，否则将被光线击中，造成42（12d6）点火焰伤害。

太阳及其链条被视为一个单一的小物体，具有AC 15；22生命值；并对火焰、毒素和心灵伤害免疫。当太阳发射其光线或被摧毁时，它失去了魔法属性。

首饰盒和石棺包含宝藏。

这个蟑螂形状的首饰盒由黄金制成，镶嵌着珍贵的宝石（包括用作眼睛的小粒黑珍珠），价值1500金币。它重5磅，并包含两个物品：一把小玉制的鳄鱼形状的钥匙（设计用于插入62B区域的钥匙孔）和一条剩余八个珠子的火球项链。阿瑟瑞克对项链施加了诅咒，这可以通过en=Identify法术揭示。

当任何生物戴上这条被诅咒的项链时，上面的所有珠子会同时爆炸。以爆炸的项链为中心，半径20英尺范围内的每个生物必须进行一次DC 15的敏捷豁免检定，若检定失败则受到56点16d6火焰伤害，成功则只受到一半伤害。项链的佩戴者会自动豁免失败。一个en=Remove Curse法术或类似的魔法可以移除项链上的诅咒。

石棺内装有通过魔法保存的纳帕卡女王的遗体。她穿着一件破烂的黑色礼服残片和一个由彩绘金制成的黄蜂面具（价值250金币）。

纳帕卡的左手中握着一根铁制权杖，头部为精金制成，比看上去要轻（5磅）。一个en=Detect Magic法术或类似的效果揭示了权杖周围的变形魔法光环，它可以用来摧毁区域62中的岩石战车。对权杖施放en=Identify、en=Legend Lore或类似的法术揭示了它的唯一目的是摧毁一个以纳帕卡命名的构装生物。

如果权杖被移走且未立即从 区域52 处用其非魔法的孪生品替换，或者如果纳帕卡的遗骸从其安息地被移走，女王的尸体会张开嘴打哈欠，并呼出一团充满恶意的黑色气体，形成一个以她为中心的15英尺立方区域。该区域内的每个生物必须进行一次 DC 18 体质豁免，豁免失败者将受到45点（7d12）的暗蚀伤害，豁免成功则受到一半的伤害。

纳帕卡女王已经去世一个多世纪了。如果在她的尸体上施放en=Speak with Dead法术，角色们可以向她询问有关奥穆的问题并获得诚实的答案。纳帕卡开始相信奥穆的神并不是真正的神灵，而是由欺骗奥穆人民崇拜他们的恶作剧精灵。女王记得阿瑟瑞克杀死了这些恶作剧的神灵并奴役了奥穆人，但她对九神之墓一无所知，因为它是在她死后建造的。她知道一些王室成员逃离了奥穆，但她不知道鸟羽人族正在基尔·萨巴尔庇护她的曾孙。纳帕卡知道她的祖母，扎尔柯蕊，正在南加洛尔的废墟中受苦。

即使在死后，纳帕卡仍渴望奥穆能够重生并重新有人居住。然而，她最渴望的还是摧毁阿瑟瑞克。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[164],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的墙壁上装饰着丛林城市的瓷砖马赛克，与盛开的植物、鸟类、昆虫以及穿着金色裙子、手持长矛和装饰性罐子的人类的壁画交织在一起。天花板被漆成看起来像清澈的蓝天。一只镶嵌宝石的小蟑螂栖息在房间中央的黑色玄武岩制成的石棺上。一个两尺直径的球体悬挂在石棺上方的链子上，由锤打的黄金制成，看起来像一个微笑的太阳。"},{id:"scn_460",locationId:"loc_41d",name:"54. 滚动的厄运",activation:{condition:{type:"always"},priority:0},skeleton:["走过十尺后，这条尘土飞扬的走廊变成了一段楼梯，下降十五尺到达下方的隧道。","在楼梯底部的地面上，放着一个带有生锈内置锁的古老宝箱。","宝箱的正前方，隧道通向一个巨大、昏暗的房间。","箱子（区域54A）是一个陷阱的触发器。","当箱子或其盖子被抬起时，一个沉重的石球（区域54B）会沿着楼梯滚下来。"],flesh:"箱子（区域54A）是一个陷阱的触发器。当箱子或其盖子被抬起时，一个沉重的石球（区域54B）会沿着楼梯滚下来。冒险家们在逃离石球时会绊进一个隐藏的陷坑（区域54C）。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[166],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"走过十尺后，这条尘土飞扬的走廊变成了一段楼梯，下降十五尺到达下方的隧道。在楼梯底部的地面上，放着一个带有生锈内置锁的古老宝箱。宝箱的正前方，隧道通向一个巨大、昏暗的房间。"},{id:"scn_462",locationId:"loc_41d",name:"54A. 宝箱",activation:{condition:{type:"always"},priority:0},skeleton:["箱内有一把隐形的钥匙，3英寸长，由黄铜制成。","任何手动搜索箱内的角色都能摸到这把钥匙，它可以解锁区域56的时钟。","一个 en=Detect Magic 法术或类似效果也会揭示钥匙的存在，无论是在箱子中还是在残骸中。"],flesh:`箱子的锁可以通过使用盗贼工具进行一次成功的DC 10敏捷检定撬开。箱内有一把隐形的钥匙，3英寸长，由黄铜制成。任何手动搜索箱内的角色都能摸到这把钥匙，它可以解锁区域56的时钟。

如果箱子被花岗岩球砸碎（见下文），隐形钥匙会遗失在废墟中，但可以通过一次成功的DC 15感知（察觉）检定找到。

一个 en=Detect Magic 法术或类似效果也会揭示钥匙的存在，无论是在箱子中还是在残骸中。成功地对钥匙施展 en=Dispel Magic（DC 14）会使其显现出来。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[166],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_463",locationId:"loc_41d",name:"54B. 花岗岩球",activation:{condition:{type:"always"},priority:0},skeleton:["一个直径5英尺的实心花岗岩球体平衡地放置在楼梯顶部的暗格中。","当被释放时，石球轰隆隆地滚下楼梯并跌入54C处的坑中。","任何在楼梯上或下方隧道中的角色都可以通过向坑中跑来避开石球。","任何检定失败或无法避开石球的角色将受到22（4d10）点钝击伤害并被击倒倒地。","石球滚过时还会压扁宝箱（54A）。"],flesh:`一个直径5英尺的实心花岗岩球体平衡地放置在楼梯顶部的暗格中。发现该暗格需要角色搜索隧道顶部并通过一次DC 15感知（察觉）检定。可以用铁钉卡住舱口，或通过使用盗贼工具进行一次成功的DC 20敏捷检定。

当被释放时，石球轰隆隆地滚下楼梯并跌入54C处的坑中。任何在楼梯上或下方隧道中的角色都可以通过向坑中跑来避开石球。角色也可以通过一次成功的DC 15敏捷（特技）检定跳过石球。任何检定失败或无法避开石球的角色将受到22（4d10）点钝击伤害并被击倒倒地。石球滚过时还会压扁宝箱（54A）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[166],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_464",locationId:"loc_41d",name:"54C. 酸液坑",activation:{condition:{type:"always"},priority:0},skeleton:["这个10英尺深的坑的墙壁上铺满了厚厚的玻璃，坑内装满了绿色酸液，深度为5英尺。","坑的盖子由相互连接的石板制成，当承重超过100磅时会坍塌。","任何在回合中首次进入酸液区域或在酸液区域内开始其回合的生物将受到 66（12d10）点酸液伤害。","坑洞的墙壁过于光滑，若无魔法或攀爬装备的辅助，无法攀爬。"],flesh:`这个10英尺深的坑的墙壁上铺满了厚厚的玻璃，坑内装满了绿色酸液，深度为5英尺。坑的盖子由相互连接的石板制成，当承重超过100磅时会坍塌。任何搜索地面的角色都会注意到不寻常的石工，并通过一次成功的DC 13感知（察觉）检定闻到下面的酸液。

当地板坍塌时，坑洞区域内的生物可以通过一次成功的 DC 15 敏捷豁免来避免坠落并抓住坑洞边缘。任何在回合中首次进入酸液区域或在酸液区域内开始其回合的生物将受到 66（12d10）点酸液伤害。坑洞的墙壁过于光滑，若无魔法或攀爬装备的辅助，无法攀爬。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[166],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`如果角色没有察觉到坑洞的存在，此次豁免检定将带有劣势。
如果角色手头有玻璃瓶，可以安全地将坑中的酸液装入其中，并可以用作玩家手册第5章"装备"中的酸液。`},{id:"scn_465",locationId:"loc_41d",name:"55. 安珂的墓",activation:{condition:{type:"always"},priority:0},skeleton:["四根大理石柱子支撑着这座宏伟墓室的天花板。","两对楼梯通向上层的走廊，走廊墙壁上装饰着一个巨大的迷宫形状的雕刻。","墓室的地板上矗立着一个不透明的彩色水晶制成的石棺，它的颜色在不断变化。","牛头人壁画装饰着墓室下层的墙壁。","墓室的墙壁上排列着秘密门，这些门滑开后会露出散落着牛头人骨头的房间——总共有十个这样的房间。"],flesh:`墓室的墙壁上排列着秘密门，这些门滑开后会露出散落着牛头人骨头的房间——总共有十个这样的房间。其中一间房间的后部有一条走廊通往区域56。

任何被艾金或库巴赞灵魂附身的角色在进入这个区域时会收到建议：

多变的艾金建议在尝试打开石棺之前等待它变成金色。（金色是艾金最喜欢的颜色。）

勇敢的库巴赞敦促他的宿主检查迷宫雕刻，并成为第一个触摸它的人。

当墙壁雕刻被检查时，阅读：

任何非不死生物触碰墙壁雕刻时会消失，并在与之匹配的半位面迷宫中重新出现。当第一次发生这种情况时，所有秘密门都会滑开，牛头人的骨头结合在一起，形成十个骷髅牛头人，它们从各自的房间中出现并攻击墓室中的任何人。所有在场的生物都应该进行先攻骰，包括被困在迷宫中的任何人。打开安珂石棺的钥匙藏在迷宫中。

当一个角色进入迷宫时，可以这样描述它：

站在墙壁雕刻附近的角色可以看到被困在迷宫中的角色，但听不到他们的声音。同样，迷宫中的角色可以看到站在墙壁雕刻10尺范围内的任何生物的巨大扭曲版本，但他们听不到迷宫外的任何声音。

迷宫的布局不断变化，以确保迷宫内的角色保持分离，无法找到彼此。由于翻滚的雾气，迷宫内的视野被限制在20尺内。在墓室中改变的法术在迷宫中也会发生类似的改变（见"法术限制"）。

迷宫的墙壁可以通过成功的DC 20力量（运动）检定攀爬。任何攀爬到墙壁顶部或飞越墙壁的角色将被驱逐出迷宫，受到22点（5d8）力场伤害，并在墙壁雕刻附近的一个未被占据的空间伴随着一声巨响重新出现。

迷宫中的任何角色都可以花费时间探索它。在每次探索迷宫的回合结束时，投掷百分率骰子，并使用迷宫发现表来确定角色找到了什么，如果有的话。任何找到水晶钥匙并捡起它的角色将被传送到安珂石棺旁边的一个空闲空间，连同所有的装备和财产。

任何检查石棺的角色都会注意到盖子上雕刻着一个微小的钥匙孔。钥匙孔不穿透石棺的内部，里面没有任何机制可以撬开或解除。石棺对伤害和法术都是不可渗透的。

水晶石棺每6秒钟改变一次颜色，按照以下循环顺序变化：蓝色、金色、紫色、绿色、红色、黑色。如果从迷宫中取得的水晶钥匙在石棺和钥匙颜色相同时插入钥匙孔，石棺盖将消失，石棺的内容将被揭示（见下面的"宝藏"）。同时，从迷宫中取回钥匙的角色将从一个神秘的施主那里收到一个超自然的礼物（见下面的"阿瑟瑞克的礼物"）。

如果当石棺和钥匙颜色不同时插入水晶钥匙，钥匙将被传送回迷宫，石棺保持封闭。

石棺内填满了盐，在其中埋藏着十个由链鞭蜗牛（安珂的动物形态；如果这件长袍离开九神之墓，它将化为尘土并被摧毁（但见"失落的宝藏"）。

安珂的灵魂试图附身于任何触摸虹光法袍的角色（见"九诡神亡魂"）。当安珂的灵魂显现时，阅读：

如果灵魂成功附身于角色，给予玩家ToA（见附录F）。如果尝试失败，灵魂将返回到长袍中并等待另一个角色触摸它。

获取用于打开安珂石棺的水晶钥匙的角色会从阿瑟瑞克那里获得一个超自然的礼物，礼物的性质根据钥匙的颜色而变化。当阿瑟瑞克的奥术符号出现在他或她身体的某个位置时，角色就会意识到这个礼物的存在。如果不咨询更高层次的力量，礼物的来源无法确认，但这个标记可以通过en=Lesser Restoration或类似的魔法移除。这些礼物遵循"其他奖励"中关于魅惑的规则。

获得者获得一个九命护咒。当你因受到伤害而生命值降至0时，你可以选择改为降至1点生命值。一旦使用了九次，魅惑效果就会消失。

受赠者获得一个水晶之心护咒。这个魅惑物使你免疫来自非魔法攻击的穿刺和挥砍伤害，但你会获得对钝击伤害的易伤。这些效应持续10天，之后魅惑物会从你身上消失。

受赠者获得一个财宝感知护咒。当此魅惑持续时，你可以用一个动作通过嗅觉精确定位30尺内贵金属和宝石的位置，例如钱币和宝石。此效应持续3天，之后魅惑将从你身上消失。

获得者将获得一个肿胀鬼婆护咒。这个护符允许你用一个动作喷吐出一只青蛙。青蛙理解你且服从你的命令。一旦使用了三次，护符就会消失。

获得者将获得一个重伤护咒。这个魅惑允许你复生长一个迷失的附属肢体或器官，例如手臂、脚或眼睛。使用一次后，魅惑就会消失。

接受者获得一个食尸鬼护咒。这个魅惑允许你用一个动作吃掉一个死亡不超过1天的类人生物的血肉。当你这样做时，你恢复3d8 + 3生命值。一旦使用了三次，魅惑就会消失。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:["enc_465"],treasureSlotIds:["trs_465_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[166],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`四根大理石柱子支撑着这座宏伟墓室的天花板。两对楼梯通向上层的走廊，走廊墙壁上装饰着一个巨大的迷宫形状的雕刻。墓室的地板上矗立着一个不透明的彩色水晶制成的石棺，它的颜色在不断变化。牛头人壁画装饰着墓室下层的墙壁。

错综复杂的雕刻在你眼前变化，其布局不断变化。迷宫没有出口，其走廊被微小的火把照亮，被雾气笼罩。

你站在一个十五尺高的通道内，四周是平滑无特征的石墙，通道由火把照亮并被雾气笼罩。这里没有天花板，当你抬头看时，你会看到一个你离开的房间的扭曲景象。

粘液从闪烁长袍的褶皱中涌出，形成了多个链状伪足的形状。一个女声在室内回响："我可以帮助你。至少，我认为我应该这么做。"`,dmGuidance:"见附录D）的壳制成的蛋白石手镯（每个75金币）和一件虹光法袍。",randomTableIds:["tbl_465_0"]},{id:"scn_478",locationId:"loc_41d",name:"56. 祖父钟",activation:{condition:{type:"always"},priority:0},skeleton:["任何接近这个房间的角色都能听到里面发出的有节奏的滴答声。","这个房间包含一个顶部设有编号表盘的木制橱柜，表盘两侧配有两个华丽的金属辐条。","在表盘下方，一个摆锤在一个开放的隔间内摆动。","摆锤的尖端装饰着一个蛋形的石头。","这座长箱钟散发出变形魔法的气息，可以被en=Detect Magic法术或类似的效果探测到。"],flesh:`任何接近这个房间的角色都能听到里面发出的有节奏的滴答声。

这座长箱钟散发出变形魔法的气息，可以被en=Detect Magic法术或类似的效果探测到。

任何被安珂或望戈的灵魂附身的角色在进入这个区域时会收到建议：

犹豫不决的安珂被时钟的技术奇观所打动，想要留下来欣赏它的美丽。

疯狂的望戈觉得时钟的滴答声出奇地令人安慰，并敦促他的主人多待一会儿。

每当整点时，钟内的青铜钟会响起。当钟声敲响时，任何在钟周围30英尺内的生物必须成功通过一个 DC 17 体质豁免检定，否则会衰老十岁。这种效果可以通过 en=Greater Restoration 来逆转，但仅限于事件发生后的24小时内。

一扇隐形的上锁金属门保护着时钟摆轮的隔间。门上的隐形效果无法被解除，但可以通过触摸找到钥匙孔。来自54A区域宝箱中的隐形钥匙可以打开锁，en=Knock法术同样有效。要撬开锁，角色必须使用盗贼工具进行一次DC 20的敏捷检定。

固定在摆锤尖端的卵形宝石就是传说中的月亮之脐。这块拳头大小的宝石价值2500金币，但如果在任何主要城市拍卖，其价值可能高达三倍。有关这项物品的更多信息，请参见"传说中的宝藏"。

如果把蛋从钟摆上移除，时钟就会失去它的魔法属性并停止工作。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_478_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[168],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间包含一个顶部设有编号表盘的木制橱柜，表盘两侧配有两个华丽的金属辐条。在表盘下方，一个摆锤在一个开放的隔间内摆动。摆锤的尖端装饰着一个蛋形的石头。",dmGuidance:`当角色首次到达时，假设时间为整点过 5d10 + 5 分钟。
如果角色想到向锁内吹入粉笔灰、灰尘或类似物质以突出其齿轮，则该检定具有优势。`},{id:"scn_47d",locationId:"loc_41d",name:"57. 遗忘之井",activation:{condition:{type:"always"},priority:0},skeleton:["任何试图通过魔法传送自己离开坟墓的生物都会来到这里。","你进入一个房间，房间的一半堆满了腐烂的尸体。","从一面墙上突出的是一个巨大的绿色恶魔面孔，其鼻孔张开正好位于腐烂的尸体上方。","恶魔面孔上方的壁灯上插着一支摇曳的火把。","火把被en=Continual Flame法术点燃，照亮了填满房间至6尺深的人形生物尸体，使这个区域成为3。"],flesh:`任何试图通过魔法传送自己离开坟墓的生物都会来到这里。

火把被en=Continual Flame法术点燃，照亮了填满房间至6尺深的人形生物尸体，使这个区域成为3。根据需要，阿瑟瑞克的魔法从世界各地的墓地吸引新的尸体来到这里，它们都处于不同程度的腐烂状态。

一只 食腐兽 以尸体为食，目前被埋在西南角的堆积物下。任何成功通过 DC 14 感知（察觉）检定的人物会发现该生物的眼柄从恶臭的堆积物中伸出。奥图格会急切地攻击单独的人物，但会避免与多个敌人正面冲突。一旦被杀死，奥图格不会被替换。

这个8尺高的恶魔面孔从北墙上突出。任何近距离的检查都会发现它的鼻孔包含着空洞的腔室，每个腔室里都装有一个石制杠杆。拉动的杠杆锁定到位，并且在重置之前不能移动。

拉动左鼻孔的杠杆会导致魔鬼面孔的嘴巴大大张开，露出一个充满无法穿透的黑暗的食道，吸入房间内的一切。该区域内的所有生物都应进行先攻检定。任何在房间内开始其回合且未以某种方式固定的生物必须成功通过一个DC 11敏捷豁免检定，否则将被拉入食道并毁灭。如果某个角色未通过豁免检定，可触及范围内的另一个角色，或任何通过绳索与第一个角色绑定的角色，可以使用其反应抓住并给予第一个角色重新掷骰的机会。1分钟后，杠杆会以明显的咔嗒声重置。食道在杠杆重置前一直保持打开状态。魔法对食道或其中的黑暗无效。

拉动右侧鼻孔中的杠杆会导致恶魔的眼睛发出红色光芒，房间里的所有生物（包括如果它还活着的巨型蠕虫）都会被传送到5B区域的恶魔面孔前，连同他们所穿戴或携带的任何物品。然后杠杆重置。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[168],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"你进入一个房间，房间的一半堆满了腐烂的尸体。从一面墙上突出的是一个巨大的绿色恶魔面孔，其鼻孔张开正好位于腐烂的尸体上方。恶魔面孔上方的壁灯上插着一支摇曳的火把。",dmGuidance:"如果角色们在以后的时间返回这个房间，杠杆的效果会被逆转。"},{id:"scn_480",locationId:"loc_480",name:"第五层：仇恨之齿轮",activation:{condition:{type:"always"},priority:0},skeleton:["地图5.5展示了地牢的这一层。","灵魂收割者从这一层的机械中汲取力量。","那机械的轰鸣声在所有区域回响，引起许多墙壁、地板和天花板上铆接的金属板震动。","一个阿波罗斯的恶意影响也污染了这一层。","在地图 5.5 中标出的一些区域中，地板上覆盖着黏稠的灰色粘液。"],flesh:`地图5.5展示了地牢的这一层。灵魂收割者从这一层的机械中汲取力量。那机械的轰鸣声在所有区域回响，引起许多墙壁、地板和天花板上铆接的金属板震动。一个阿波罗斯的恶意影响也污染了这一层。

在地图 5.5 中标出的一些区域中，地板上覆盖着黏稠的灰色粘液。这些区域是3，任何在粘液池中开始其回合的生物，或在该回合中首次接触粘液的生物，将受到 5（1d10）点心灵伤害。如果粘液池受到任何寒冷、光耀或死灵伤害，它将被摧毁。它对所有其他类型的伤害免疫。

区域58、59 和 60 建造在巨大的石制齿轮中。之后，可以通过区域51中的控制装置旋转这些房间。它们的天花板与墙壁分离，使得房间可以在不重新定向天花板或区域58中的轴的情况下旋转。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[168],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"当角色首次到达这一层时，齿轮房间的配置如地图 5.5 所示。"},{id:"scn_484",locationId:"loc_480",name:"58. 腐朽齿轮",activation:{condition:{type:"always"},priority:0},skeleton:["这个五边形房间充满了刺鼻的恶臭，墙壁上覆盖着铆接的铁板。","一个充满病态植物和腐烂堆肥的野生花园占据了大部分内部空间，一条狭窄的小径沿着墙壁延伸，在两个出口之间。","一个六尺高的生锈喷头从花园中央突出。","在喷头上方的天花板上，一个十尺宽的竖井直通上方。","每当这个房间通过区域51中的控制装置旋转时，喷头就会从地下湖(区域65)抽取水来喷洒房间中的植物。"],flesh:`每当这个房间通过区域51中的控制装置旋转时，喷头就会从地下湖(区域65)抽取水来喷洒房间中的植物。尽管缺乏阳光，魔法仍然使这些植物保持生机。

如果齿轮被转动，使得其中一个门与北边的区域63对齐，那个区域的气体就会涌入花园，将随机的堆肥堆变成三个蔓生怪，它们会站起来攻击房间里的其他生物。1小时后，蔓生怪会恢复成死亡的堆肥。

天花板上的竖井向上延伸15尺至区域45。要攀爬竖井的光滑墙壁，角色需要攀爬装备或魔法。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_484"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个五边形房间充满了刺鼻的恶臭，墙壁上覆盖着铆接的铁板。一个充满病态植物和腐烂堆肥的野生花园占据了大部分内部空间，一条狭窄的小径沿着墙壁延伸，在两个出口之间。一个六尺高的生锈喷头从花园中央突出。在喷头上方的天花板上，一个十尺宽的竖井直通上方。"},{id:"scn_486",locationId:"loc_480",name:"59. 酸液齿轮",activation:{condition:{type:"always"},priority:0},skeleton:["这个五边形的房间充满了酸性的恶臭，有两个出口。","墙壁上覆盖着铆接的铁板，布满坑洼的石地板中央有一大片灰色粘液。","墙壁上靠近天花板的地方装饰着五条黑龙的浮雕。","当这个房间通过区域51中的控制装置旋转时，本应从龙形浮雕的口中滴下酸性液体，但天花板上的酸液隔间目前是空的。","因此，当房间转动时，什么也没发生。"],flesh:"当这个房间通过区域51中的控制装置旋转时，本应从龙形浮雕的口中滴下酸性液体，但天花板上的酸液隔间目前是空的。因此，当房间转动时，什么也没发生。任何能够靠近天花板检查浮雕的角色都会注意到龙的口中有微小的孔洞。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个五边形的房间充满了酸性的恶臭，有两个出口。墙壁上覆盖着铆接的铁板，布满坑洼的石地板中央有一大片灰色粘液。墙壁上靠近天花板的地方装饰着五条黑龙的浮雕。"},{id:"scn_488",locationId:"loc_480",name:"60. 血之齿轮",activation:{condition:{type:"always"},priority:0},skeleton:["五个柚木衣柜靠在这个房间的铁壁上，每个门上都雕刻有图像或场景。","灰色粘液覆盖了地板的部分区域。","房间有两个出口，包括一个阻挡向北通道的精金栅栏。","在栅栏上方的金属板上镶嵌着一排五个血滴形状的红色水晶。","精金栅栏对伤害和法术免疫，其栅栏条间隔4英寸。"],flesh:`精金栅栏对伤害和法术免疫，其栅栏条间隔4英寸。一个细小或气体生物可以轻松地从栅栏条之间滑过。

要升起这个栅栏，必须在这个房间里召唤并消灭来自所有五个衣柜的怪物。一次只能打开一个衣柜，而且直到那个衣柜的怪物被击败，房间内所有其他衣柜都是封闭的，无法打开。当一个衣柜的所有怪物死亡时，衣柜就会消失，栅栏上方的一个红色水晶就会亮起来。当所有五个水晶都亮起来时，栅栏升起并保持开启状态24小时。一旦这个时间结束，栅栏就会回到原位，水晶熄灭，衣柜重新出现，门关闭。

每个衣柜内都含有一个通往另一个位面的单向门，如果衣柜从这个房间移走或被摧毁，门就会失效。任何生物尝试从这一侧穿过衣柜的门都会被强制推回，无法进入。

每个衣柜重250磅，高6½尺，并且对en=Detect Magic法术或类似效果散发出一种召唤魔法的气息。衣柜是一个中等大小的物体，具有11的护甲等级，30点生命值，并对毒素和心灵伤害免疫。

这扇门上的场景描绘了一支兽人大军与一支大地精大军的冲突。当门被打开时，请阅读：

打开这个衣柜会召唤一个兽人军官和七个兽人。他们死亡时，身体、盔甲和武器都会留在这个房间里。

这扇门上描绘着一个咧嘴笑的夜巫婆，她怀里抱着一个裹着襁褓的人类婴儿。当门被打开时，请阅读以下内容：

打开衣柜揭示了两个 毒虫罗斯魔，它们传送进房间并进行攻击。当一个毒虫罗斯魔死亡时，它的身体会转变成油腻烟雾的缕缕，尽管它的三叉戟仍然保留。

这扇门雕刻着一个华丽时钟的面孔。当门被打开时，请阅读：

打开衣柜会召唤一个困惑、迷失方向的单元冢，它在角色们的脚边以倒地状态着陆。然后它试图站起来并重新进入衣柜，但被衣柜的魔法所阻止。这个魔冢只在自卫时战斗，如果被摧毁就会解体。

这扇门上的场景描绘了扭曲、尖叫的人形面孔，被链条缠绕。当门被打开时，请阅读：

打开衣柜会召唤一个骨魔。当它死去时，它的身体会转变成一滩恶臭的粘液。

这扇门上的场景描绘了食尸鬼在啃食骨头。当门被打开时，请阅读：

打开衣柜会召唤出四个 鬼火，它们在攻击前处于 隐形 状态。当它们被摧毁时，不会留下任何东西。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_488","enc_toa_blood_cog_mezzoloths","enc_toa_blood_cog_monodrone","enc_toa_blood_cog_bone_devil","enc_toa_blood_cog_wisps"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`五个柚木衣柜靠在这个房间的铁壁上，每个门上都雕刻有图像或场景。灰色粘液覆盖了地板的部分区域。房间有两个出口，包括一个阻挡向北通道的精金栅栏。在栅栏上方的金属板上镶嵌着一排五个血滴形状的红色水晶。

尘土和烟雾从衣柜中滚滚而出，你周围的空气中充满了战斗的轰鸣声。在门的另一边，军队在血红色的天空下战斗，天空中有如巨大而遥远的月亮般的铁立方体漂浮着。突然，灰烬云从衣柜中飞出，在你的眼前变成了尖叫的兽人。

门开在一座活火山的火山口上方。黑色的岩石碎片漂浮在熔岩上方。一块岩石上栖息着两个体型与人类相当的生物，它们具有昆虫般的特征，每个都有四只手臂。

巨大的相互啮合的齿轮和齿条延伸到你能看到的最远地方。突然，一个球形构装生物，有着细长的腿和小小的翅膀，从打开的门洞中滚落进来。

当门打开时，热浪袭来，露出一条通往由被击败的军队焦黑残骸环绕的玄武岩堡垒的铁路。囚犯们在装饰堡垒墙壁的铁笼中尖叫。突然，一个发光的火星从衣柜中飞出，变成了一个长着翅膀、骨瘦如柴的恶魔，脸上带着微笑、骷髅般的面容。

你凝视着一个古老的墓地，倾斜的墓碑被雾气笼罩。远处的坟墓间，诡异而饥饿的身影在移动。突然，明亮发光的光球出现在你身后的房间里。`},{id:"scn_494",locationId:"loc_480",name:"61. 控制室",activation:{condition:{type:"always"},priority:0},skeleton:["这个生锈的铁板房间中央有一个四尺高、七尺宽的铁制讲台，上面是一个倾斜的控制面板。","控制面板上设有一个带有星形手柄的金制杠杆，两个红色和蓝色的刻度盘，以及两个同色的按钮。","控制面板后面的墙壁上刻有五组圆圈，每组圆圈下方的墙壁中嵌入了一个小水晶。",'标记为"3"的配置下方的水晶发出明亮的绿色光芒。',"三根直径六英寸的生锈铁管从上方的墙壁上突出。"],flesh:`它展示了铁讲台上的控制面板，以及墙上的雕刻和生锈的管道。检查管道可以发现与贯穿本层的坑洼中相同的灰色黏液痕迹。

任何被帕帕扎图、安珂或望戈的灵魂附身的角色在进入这个区域时会收到建议：

精明的帕帕扎图坚称蓝色的控制装置是有益的，红色的控制装置是有害的。（这是他自己的纯粹猜测。）

焦虑的安珂认为她可以通过研究这些控制装置来弄清楚它们的功能。如果她的宿主允许她进行一个小时的研究和思考，她得出的结论是这些控制装置是一个谜，应该保持不动。

暴力的望戈敦促他的宿主破坏控制装置。

一个隐藏的爬行通道从讲台的底部延伸至区域70，但不能从这个房间内部进入。任何从区域70进入爬行通道的角色都会在爬行通道南端的墙壁上发现一个石制杠杆。拉动杠杆会使讲台滑开，露出一个进入点。

控制面板是一个中型物体，具有AC 15，伤害阈值为10，15点生命值，并且对毒素和精神伤害免疫。摧毁面板会使控制装置失效，并从铁制讲台上瞬间爆发出闪电弧。房间内的每个生物必须成功通过一个DC 16的敏捷豁免检定，否则将被闪电击中，受到11（2d10）点闪电伤害。

铁制讲台上的控制装置没有任何标签，因此它们的用途必须通过实验来发现。

这个刻度盘可以向左或向右旋转，如果松开，它会弹回到中心位置。蓝色刻度盘决定了哪个墙壁上的水晶被点亮。目前，配置3下的水晶是亮着的。如果转动刻度盘，当前亮着的水晶会熄灭，而向左或向右（刻度盘旋转的方向）的水晶会亮起来。

按下蓝色按钮会使齿轮房间（58号至60号区域）与有水晶点亮的配置相匹配。整个层级在巨大的齿轮旋转时震动。如果蓝色按钮在齿轮房间旋转中或已经在正确的配置时被按下，什么也不会发生。

杠杆最初处于向上的位置。如果拉到向下的位置，杠杆将锁定，并通过墙壁雕刻上方的铁管开始倒入阿波罗斯粘液（见"阿波罗斯粘液"）。如果在拉动杠杆之前用布塞住管道，可以阻止粘液流入房间，但如果粘液正在从管道中流出，则无法塞住管道。

粘液以每轮1英寸的深度覆盖地板。如果通往区域70的爬行通道被暴露（见上文的"隐蔽的爬行通道"），粘液不会在房间内积聚，而是流入爬行空间。

杠杆的锁定机制可以通过角色使用盗贼工具进行一次成功的DC 15敏捷检定来解除。如果解除成功，杠杆会自动切换到上升位置，关闭管道中的阀门并停止粘液流动。也可以通过一次成功的DC 15力量（运动）检定将杠杆从控制台上扯下，效果相同。

金色杠杆还有另一个功能，这将在区域67中揭示。

按下红色按钮会导致一堵6英寸厚的铁墙从门口的天花板落下，封锁东出口。铁墙落下时，任何位于门口的生物必须进行一次DC 15敏捷豁免。豁免成功时，生物会被推到屏障的一侧或另一侧（由其选择）。豁免失败时，生物会被压到墙下，陷入倒地状态，并受到44（8d10）点钝击伤害。被压住的生物会陷入束缚状态，无法站起来，并在其每回合开始时受到11（2d10）点钝击伤害，直到它从门下爬出或另一个生物将其拉出，这两种情况都需要一个动作和一次成功的DC 25力量（运动）检定。铁墙会保持锁闭状态1小时，之后会自动升回天花板。铁墙无法被举起或撬开，不过en=Knock法术可以使其缩回天花板。当铁墙降下时，按下红色按钮不会产生任何效果。

这个刻度盘可以向左或向右旋转，如果松开，它会弹回到中心位置。向左转动刻度盘会在本房间的生物和区域65中的阿波罗斯之间建立双向心灵感应连接。向右转动刻度盘会结束这个连接。任何离开控制室的生物也会结束与阿波罗斯的心灵感应连接。因为通信是心灵感应的，即使他们不说同一种语言，所有参与者也能理解彼此。使用区域65中的信息来扮演阿波罗斯。

阿波罗斯习惯于只与威瑟斯交谈，并以他原来的名字Gorra称呼尸妖。"一旦阿波罗斯意识到它与陌生人建立了心灵感应连接，它就想要了解他们的一切，除了满足它的好奇心之外没有其他原因。

资料24（见附录 E）展示了这个地牢层级的五种不同配置：

配置1. 开放的门道将区域58连接到60号和63号区域。59号区域被切断，同样被切断的还有通往61号、62号和67号区域的出口。

配置2. 一个开放的门道连接58号和63号区域，但通往区域59的门道以一堵空白墙结束。60号区域也被切断，同样被切断的还有通往61号、62号、67号和68号区域的出口。

配置3. 如地图5.5所示。

配置4. 一个开放的门道将区域58连接到区域62。59号区域和区域60被切断，同样被切断的还有通往61号、67号和68号区域的出口。

配置5. 开放的门道连接59号和61号区域，以及60号和67号区域。58号区域被切断，同样被切断的还有通往62号和68号区域的出口。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[170],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:'这个生锈的铁板房间中央有一个四尺高、七尺宽的铁制讲台，上面是一个倾斜的控制面板。控制面板上设有一个带有星形手柄的金制杠杆，两个红色和蓝色的刻度盘，以及两个同色的按钮。控制面板后面的墙壁上刻有五组圆圈，每组圆圈下方的墙壁中嵌入了一个小水晶。标记为"3"的配置下方的水晶发出明亮的绿色光芒。三根直径六英寸的生锈铁管从上方的墙壁上突出。',dmGuidance:`当角色到达这个房间时，给玩家一份附录 E中的资料24副本。
如果角色们激活了心灵感应连接，阿波罗斯发送的第一个想法是恼怒的，"现在又怎么了，Gorra？`},{id:"scn_49f",locationId:"loc_480",name:"62. 岩石战车",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域是一个死胡同——在很多方面都是。"],flesh:"这个区域是一个死胡同——在很多方面都是。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[172],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_4a0",locationId:"loc_480",name:'62A. "唤醒纳帕卡！"',activation:{condition:{type:"always"},priority:0},skeleton:["这个走廊里满是灰尘和蛛网。","前方，闪烁的灯光微弱地照亮了一个与这条走廊垂直的更大的走廊。","在两条走廊交汇处，天花板上用干涸的血迹潦草地写着一些字。","西墙上的一扇暗门滑开，露出一条通往26号和66号区域的黑暗隧道。",'在地图5.5上标记为X的地方，天花板上的血字写着："唤醒纳帕卡！'],flesh:'西墙上的一扇暗门滑开，露出一条通往26号和66号区域的黑暗隧道。在地图5.5上标记为X的地方，天花板上的血字写着："唤醒纳帕卡！"',spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[172],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个走廊里满是灰尘和蛛网。前方，闪烁的灯光微弱地照亮了一个与这条走廊垂直的更大的走廊。在两条走廊交汇处，天花板上用干涸的血迹潦草地写着一些字。",mapGeometry:{imageRef:"adventure/ToA/084-516.webp"}},{id:"scn_4a2",locationId:"loc_480",name:"62B. 倾斜走廊",activation:{condition:{type:"always"},priority:0},skeleton:["大滩的灰色粘液散布在这条十英尺宽、缓缓倾斜的走廊地板上。","铆接壁架上的蜡烛摇曳闪烁，将2投射在一系列雕刻浮雕上，这些浮雕描绘了长着野兽头颅的人形生物跪拜在一颗黑色星辰前的场景。","在走廊低端，一道厚重的紫色帷幕从墙延伸到墙。","在高端处，走廊戛然而止。","走廊向下倾斜通向62C区域。"],flesh:`走廊向下倾斜通向62C区域。62D区域位于西侧，隐藏在一扇横跨整面墙的秘密门后面（更多信息请参见该区域）。

六根魔法蜡烛在走廊的两侧每隔10尺交替放置。只要它们保持在这个区域，蜡烛就不会燃烧。

隐藏在一幅描绘鳄鱼头人形生物托举梯形箱子的浅浮雕后方，一条爬行通道通向区域62D。仔细观察浮雕会发现箱子的钥匙孔是真实的。在区域53找到的翡翠钥匙可用于解锁浮雕并使其摆动打开，露出爬行通道。锁也可以通过角色使用盗贼工具进行一次成功的DC 21敏捷检定来撬开。但如果检定失败且差值达到5或更多，西墙的密门会滑开释放出岩石战车（参见区域62D的"纳帕卡苏醒"）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[172],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"大滩的灰色粘液散布在这条十英尺宽、缓缓倾斜的走廊地板上。铆接壁架上的蜡烛摇曳闪烁，将2投射在一系列雕刻浮雕上，这些浮雕描绘了长着野兽头颅的人形生物跪拜在一颗黑色星辰前的场景。在走廊低端，一道厚重的紫色帷幕从墙延伸到墙。在高端处，走廊戛然而止。"},{id:"scn_4a6",locationId:"loc_480",name:"62C. 破碎的雕像",activation:{condition:{type:"always"},priority:0},skeleton:["走廊在紫色帷幕之外15尺处到达尽头。","一尊六尺高的嘲笑四臂石像鬼雕像靠在后墙上。","它的一只手臂已经断裂，躺在它前面的地板上，它的手紧握成拳。","其他三只手臂的爪子张开，似乎意味着它们应该拿着什么东西。",`在雕像上方的墙上刻着一个谜语：
我需要三个
然后是三个更多
还是三个更多
打开门`],flesh:`走廊在紫色帷幕之外15尺处到达尽头。

石像鬼雕像对伤害和法术免疫，但它断裂的手臂不是。如果将三颗宝石放在雕像的三个张开的手中，这些手会神奇地合拢成拳头，将宝石压成粉末。然后雕像的手再次张开。如果这个动作再进行两次，总共压碎了九颗宝石，那么断裂的手臂的手就会张开，里面出现了一个拳头大小的红宝石。这颗红宝石是扎尔特克之眼，它通过牺牲宝石从62D区域传送过来。如果从石像鬼的手中摘下红宝石，雕像会神奇地张开嘴，呼出一团催眠气体，填满走廊东侧的15尺。与此同时，走廊西端的秘密门滑开，62D区域的岩石战车滚下走廊。

在毒气云中每个对中毒状态不免疫的生物必须成功通过一个DC 15的体质豁免检定，否则将陷入昏迷状态1小时。受到伤害的生物该效果将终止。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[172],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一尊六尺高的嘲笑四臂石像鬼雕像靠在后墙上。它的一只手臂已经断裂，躺在它前面的地板上，它的手紧握成拳。其他三只手臂的爪子张开，似乎意味着它们应该拿着什么东西。在雕像上方的墙上刻着一个谜语：
我需要三个
然后是三个更多
还是三个更多
打开门`},{id:"scn_4a8",locationId:"loc_480",name:"62D. 秘密房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的秘密门横跨整个墙面，不能通过力量或魔法打开。","它只有在62B或62C区域的角色的行为触发时才会打开。","这个房间的三分之二被阿瑟瑞克的岩石战车占据（见附录D）。","名为阿瑟瑞克的死灵法师以已故的乌曼女王Napaka的名字命名了这个岩石战车（见区域53）。","当岩石战车被激活时，请阅读："],flesh:`这个房间的秘密门横跨整个墙面，不能通过力量或魔法打开。它只有在62B或62C区域的角色的行为触发时才会打开。

这个房间的三分之二被阿瑟瑞克的岩石战车占据（见附录D）。名为阿瑟瑞克的死灵法师以已故的乌曼女王Napaka的名字命名了这个岩石战车（见区域53）。

当岩石战车被激活时，请阅读：

所有在场的生物都必须进行先攻骰。在它的回合，石魔像沿着走廊滚动，对任何阻挡在它道路上的生物进行撞击攻击，并使用其毁灭性滚动特性来压碎小型或倒地的敌人。当没有敌人活着时，它返回到秘密房间。石魔像无法进入小于10尺宽的空间，并且在走廊里没有足够的空间转弯。它通过向前和向后滚动来进行攻击。

隐藏在那帕卡真墓（区域53）中的是一根魔法权杖，其精金杖头能将战争巨像的生命值降至0并使其化为尘埃。当战争巨像处于惰性状态时，使用权杖攻击无需进行攻击检定。如果战争巨像已被唤醒，角色可以使用权杖对战争巨像进行一次近战武器攻击，命中后将其生命值降至0并使其化为尘埃。

除非它已经被传送到62C区域，否则一颗光泽四射、带刺的巨大红宝石，大小如同人拳，放置在从房间西墙突出的石架上。这颗宝石就是传说中的扎尔特克之眼。它价值5000金币，但如果在任何主要城市的拍卖中出售，其价值可能高达五倍。有关扎尔特克之眼的更多信息，请参见"传说中的宝藏"。

如果扎尔特克之眼被传送到了62C区域，那么架子上将空无一物。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:["enc_4a8"],treasureSlotIds:["trs_4a8_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[173],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"走廊西端的墙壁滑开，露出一个装有滚轮的岩石战车。这个构装生物填满了走廊的高度和宽度，以惊人的速度向你们冲来。",dmGuidance:"如果角色们通过爬行通道进入房间，并且还没有唤醒岩石战车，它将保持静止，除非受到伤害或秘密门滑开，否则不会攻击。"},{id:"scn_4ac",locationId:"loc_480",name:"63. 充满气体的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间大部分时间是封闭且无法进入的。","角色们可以通过重新调整齿轮，使门道向区域58打开，从而到达这个区域。","浓密的绿色气体从这间狭小房间墙壁上的骷髅形喷嘴中喷涌而出。","一具腐烂的尸体穿着镶钉皮甲躺在地上，嘴巴大张，双手紧抓喉咙。","它的一条手臂上缠着一条黄色带子。"],flesh:`这个房间大部分时间是封闭且无法进入的。角色们可以通过重新调整齿轮，使门道向区域58打开，从而到达这个区域。

这个房间中充满的绿色气体在两个房间相互开放时会充满 区域58，但气体太重，无法上升到竖井进入 区域45。这种气体有两种效果：

它将区域58中的死亡植被转变为三个蔓生怪（详见该区域）。

它对非植物有毒。任何容易受到毒气影响的生物，如果在充满毒气的区域开始其回合，必须进行一次 DC 13 体质豁免检定，失败则受到 18（4d8）点毒素伤害，成功则受到一半伤害。即使生物屏住呼吸或不需要呼吸，也会受到影响。

用布塞住喷嘴可以阻止更多的气体涌入房间。

地板上的死者是布里克斯顿勋爵，科米尔的黄旗公司的领袖，这个公司注定要失败。当威瑟斯从区域51转动齿轮并将他困在这个房间里时，他死去了。

尸体穿着镶钉皮甲，携带一把收在鞘中的长剑，剑柄呈龙形。这把剑具有轻微的魔法特性：持有者获得说和理解龙语的能力。

在布里克斯顿勋爵的尸体旁边是一个探险者的背包，里面塞着一个包含六颗红榴石宝石的小袋（每个50金币）。`,spotlightRefs:[],presentNpcIds:["npc_withers"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_4ac_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[173],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"浓密的绿色气体从这间狭小房间墙壁上的骷髅形喷嘴中喷涌而出。一具腐烂的尸体穿着镶钉皮甲躺在地上，嘴巴大张，双手紧抓喉咙。它的一条手臂上缠着一条黄色带子。",dmGuidance:"如果角色们阻止了气体流动，残留的气体将在1分钟后散去。"},{id:"scn_4af",locationId:"loc_480",name:"64. 瀑布底部",activation:{condition:{type:"always"},priority:0},skeleton:["从区域17掉落的任何东西最终都会落到这里。","这个岩洞的墙壁上滑溜溜地覆盖着粘液，空气中弥漫着腐烂的臭味。","肮脏的水从天花板上的一个洞口倾泻而下，然后沿着一条粗糙的隧道流向一个阴暗的湖泊。","那边传来机器的轰鸣声。","这里的水深30英尺。"],flesh:`从区域17掉落的任何东西最终都会落到这里。

爬上滑腻的墙壁需要通过一个 DC 15 力量（运动）检定。这里的水深30英尺。允许自己被水流带走的角色会被轻柔地冲入 区域65。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[173],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个岩洞的墙壁上滑溜溜地覆盖着粘液，空气中弥漫着腐烂的臭味。肮脏的水从天花板上的一个洞口倾泻而下，然后沿着一条粗糙的隧道流向一个阴暗的湖泊。那边传来机器的轰鸣声。"},{id:"scn_4b1",locationId:"loc_480",name:"65. 地下湖",activation:{condition:{type:"always"},priority:0},skeleton:["一个昏暗的地下湖展现在你的面前，它的天花板上挂满了链条和齿轮——其中一些似乎有矮人悬挂在上面。","一个巨大的静止石制齿轮从水中升起，有两个与之相匹配的齿轮与之连接。","生锈的金属管道从洞壁延伸到齿轮上。","湖水粘稠，湖中的泥泞中闪烁着点点荧光。","洞穴的天花板距离污浊的湖面20英尺高，湖水深20英尺。"],flesh:`洞穴的天花板距离污浊的湖面20英尺高，湖水深20英尺。任何饮用湖水的生物将陷入中毒状态，直到吐出液体为止（这会在1d4分钟后自动发生）。湖底的光源是以淤泥为食的荧光蟹。每只螃蟹能在5英尺半径内发出2，但离开水面10分钟后就会停止发光。

区域58至60的三个石制齿轮半浸在水中，高出水面10尺。它们不平整的上表面是3，并且它们光滑的外墙无法在没有攀爬装备或魔法的情况下攀爬。

机械境链条（区域69）驱动这个洞穴中的机械，为灵魂吞噬者以及地牢内众多的陷阱和其他机械提供动力。在任何给定时间，有1d4 + 1名穿着皮具的墓穴矮人悬挂在天花板上，对齿轮和巨大的齿轮进行例行维护。每个墓穴矮人拥有尸妖的具体数值，除了它们携带战斧和轻型十字弓。墓穴矮人除非受到攻击，否则会忽略入侵者，在受到攻击时，他们会用十字弓自卫。

一个名为格里鲁尔（guh-LEE-rool）的底栖魔鱼居住在湖中。当阿瑟瑞克奴役它时，这只厄博洛斯失去了理智，并发展出了分裂人格。它的主导人格等待死神降临，它相信这预示神性的衰落。直到那一天，厄博洛斯谦卑地服从威瑟斯（它称呼他为原来的名字戈拉），并攻击任何试图阻止萎缩者升天的人。厄博洛斯的另一人格是一个类人孩童——无害、欢快且极度好奇。在这种心态下，厄博洛斯不会对任何人构成威胁，如果受到攻击则会逃跑。投掷任何骰子以确定在某一时刻哪个人格占主导。若结果为偶数，则厄博洛斯的孩童人格占主导。

在战斗中，阿波里法斯并非湖泊的主人，因此没有巢穴行动。

古老到无法估量，G'lyh'rul 已经积累了数万年的知识。（由于他们实际上并没有施放法术，这个效果不受九神之墓内施法限制的约束。）在分享这些信息之后，底栖魔鱼感到无聊，并退回到湖的一个黑暗角落，做起了关于邪恶事物的梦。`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_withers"],availableInfoIds:[],encounterIds:["enc_4b1"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[174],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个昏暗的地下湖展现在你的面前，它的天花板上挂满了链条和齿轮——其中一些似乎有矮人悬挂在上面。一个巨大的静止石制齿轮从水中升起，有两个与之相匹配的齿轮与之连接。生锈的金属管道从洞壁延伸到齿轮上。湖水粘稠，湖中的泥泞中闪烁着点点荧光。",dmGuidance:`如果角色使用 区域66 中的划艇探索湖泊，无论阿波里法斯当前的态度如何，它都会忽略他们，除非他们引起不必要的注意。
如果角色们与这个底栖魔鱼建立了心灵感应，并且它愿意与他们交谈，它可以提供信息，就像角色们施放了en=Commune法术一样。`},{id:"scn_4b4",locationId:"loc_480",name:"66. 吞噬之门",activation:{condition:{type:"always"},priority:0},skeleton:["在楼梯底部，一条昏暗的走廊向南延伸，而一扇带有铁铰链和黄铜把手的石门则位于东方。","一根经过雕琢的石柱从湖底一直延伸到洞穴顶部，并通过一个石制管道连接到附近的墙壁上。","在柱子的一侧，覆盖着苔藓的石阶从石制码头上升到一个没有把手或铰链的石门所在的平台。","绳索将一对小船绑在码头柱上，一个生锈的铁笼在泥泞中摇摆，由链条和绞车支撑着漂浮。","荧光螃蟹聚集在笼子下方的湖底。"],flesh:`分隔码头区域和螺旋楼梯(区域26)的石门散发出防护、召唤和幻象的魔法气息，可以被en=Detect Magic法术或类似效果探测到。从西侧可以简单地通过拉动黄铜把手轻松打开这扇门。从东侧开门则要困难得多。

从湖中攀升而上的苔藓覆盖的楼梯，以及其顶部的着陆平台，散落着螃蟹壳的碎片。如果任何角色触摸或检查门，请阅读以下内容：

这个嘴类似于由 en=Magic Mouth 法术创造的嘴，但更加强大。在门上施放成功的 en=Dispel Magic（DC 19）会抑制其魔法 10 分钟，阻止嘴的形成。然而，如果没有这个嘴，除了从西侧外，门无法被打开，即使使用 en=Knock 法术也不行。

这张嘴没有被设定说其他的话，但它的话语（以及脚下的蟹壳）为角色们提供了如何打开门的线索。如果给这张嘴提供一个活的荧光蟹，它会张大嘴巴，咬碎蟹子以吞噬它，然后吐出压碎的壳。一旦这张嘴被喂食，它就会消失，通向 区域26 的门就会打开。如果门再次关闭，门就会上锁，法术也会重置。

不需要进行攻击检定或豁免检定。以这种方式被'吞噬'的角色会被传送到 区域57。

笼子侧面的一扇生锈的铁门为两个中等大小或更小的生物提供了入口。笼子散发出变化魔法，可以通过en=Detect Magic法术或类似效果来探测，并对笼子内的任何生物赋予en=Water Breathing法术的效果。坚固的铁条为笼子内的生物提供了3，以抵御来自笼子外的攻击。

使用绞车，台阶上的一个角色可以将笼子降到湖底20尺处，让笼子里的角色能够轻松地从泥浆中收获2d6只发光的蟹。

笼子的吱嘎声吸引了区域65中的夺心魔的注意。如果夺心魔的残暴人格占主导，它会试图奴役笼子中的任何角色。如果成功，它会命令他们返回地表，引诱其他人深入深渊。如果夺心魔的孩子般人格占主导，它会游过来并利用其心灵感应与潜水者展开友好的对话。

两艘小船的船尾上刻有捕食者和猎物的名字。一个en=Detect Magic法术或类似的效果揭示了每个船只周围的变形魔法气息。每艘船可以容纳多达四个小型或中型生物及其装备，每艘船都包含两把桨、一个空木桶和一卷50尺长的麻绳。

在捕食者上的生物在船在水中时攻击检定时具有优势。一盏装满油的牛眼灯笼悬挂在船头。

在猎物上的生物在船在水中时豁免检定时具有优势。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[174],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`在楼梯底部，一条昏暗的走廊向南延伸，而一扇带有铁铰链和黄铜把手的石门则位于东方。

一根经过雕琢的石柱从湖底一直延伸到洞穴顶部，并通过一个石制管道连接到附近的墙壁上。在柱子的一侧，覆盖着苔藓的石阶从石制码头上升到一个没有把手或铰链的石门所在的平台。绳索将一对小船绑在码头柱上，一个生锈的铁笼在泥泞中摇摆，由链条和绞车支撑着漂浮。荧光螃蟹聚集在笼子下方的湖底。

门上形成了一个怪物的嘴巴，用低沉的拖长声音喊道："我饿得能把你活活吞下去，但我可以满足于吃点别的东西。一些活着的东西。一些轻松的东西！"`,dmGuidance:`如果角色们通过螺旋楼梯(区域26)来到这个区域，请在他们到达楼梯底部时阅读以下内容：
如果角色们从湖的方向接近这个区域，请阅读以下内容：
如果角色投入任何不是荧光蟹的东西到嘴里，这张嘴会将其吐出来。
如果角色在发生这种情况时距离门10尺以内，门会用舌头卷起角色并将角色整个吞下。`},{id:"scn_4bd",locationId:"loc_480",name:"67. 金象大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这块石头会一直位于此处，直到该房间的陷阱被触发。","这个房间中央有一个一尺高的石制齿轮上矗立着一尊真实大小的金色猛犸象雕像。","宝石装饰的獠牙从它的脸颊延伸出来，它的鼻子高举，仿佛在咆哮。","雕像身上缠绕着铭文，墙壁上的壁画展示了一个楚尔坦战士骑着一头活生生的猛犸象穿越一系列地狱般的景观。","在每个场景中，都有不同种类的恶魔攻击他们。"],flesh:`一名在通往该房间的隧道中搜寻陷阱的角色，若成功通过 DC 20 感知（察觉）检定，会注意到一块石头卡在天花板上。这块石头会一直位于此处，直到该房间的陷阱被触发。

墙上的壁画讲述了楚尔坦勇士查卡雷（发音为 chuh-GAH-kah-ree）的故事，他偷走了国王珍贵的坐骑：一头名叫郭姆的猛犸象。作为惩罚，国王的巫师将查卡雷和郭姆放逐到了九层地狱，但两者一路战斗并回到了家乡。归来后，查卡雷砍下了国王的头颅，并将其头骨制成了一只珠宝杯。任何研究壁画并通过 DC 15 智力（历史）检定成功的角色都能认出这个传说并讲述它。壁画中展示了查卡雷和郭姆与棘刺魔鬼、胡须魔鬼、倒刺魔鬼、角魔和复仇魔鬼的战斗。

任何被艾金、奥博娜卡或莎根比的灵魂附身的角色在进入这个区域时会收到建议：

不可预测的艾金想要骑上金色的猛犸象！

紧张的奥博娜卡害怕金色的猛犸象，她敦促她附身的宿主不要激怒它。

如果向她复述了Ch'gakare和Ghom所面临的挑战，明智的莎根比得出结论，这个大厅是为了呈现类似的挑战而建造的。

雕像栩栩如生的品质归功于这是Ghom，它的身体被保存在魔法铁中，并覆盖着一层薄薄的锤打金子，它的獠牙上镶嵌着宝石（见下文的"宝藏"）。

雕像上的铭文是用古老的奥曼语写的。内容如下：

石制齿轮下方地板上的划痕表明它可以旋转，但无论施加多大的压力都无法移动它。对雕像顶部的任何搜索都会发现其头部后部有一个星形的凹槽。那些在区域51见过金质杠杆的人会认出杠杆的星形把手与这个凹槽完美匹配。如果杠杆被取回并头朝下插入凹槽，阅读以下内容：

这块石块填满了地图5.5上标示的走廊空间。当石块落下时，任何位于石块下方的生物必须进行一次DC 15敏捷豁免。若成功，生物可以按自己选择的方向移出石块的路径。若豁免失败，生物将受到55（10d10）点钝击伤害。如果这次伤害使生物的生命值降至0，生物将被压成肉泥；否则，它将被推入房间。

当猛犸象雕像开始旋转时，所有在场的生物应该进行先攻检定。雕像逆时针旋转，并在每轮的先攻计数0时完成一次360度的完整旋转。

当雕像完成其第一次旋转时，魔法火焰吞没了地板和齿轮，火焰高达6尺。任何在回合中首次进入火焰的生物，或者在其上开始回合的生物，都会受到10点（3d6）火焰伤害。任何栖息在金色猛犸象上的角色都免受火焰伤害。一次最多可以有六只中等体型的生物栖息在猛犸象上——四只在其背上，每只弯曲的长牙上各一只。

每次雕像转向北方时，一个或多个恶魔从壁画中出现并攻击房间内的所有其他生物。为每组新到的恶魔进行先攻检定。每个通过魔法召唤的恶魔在降至0生命值或没有生物可攻击时会在一阵烟雾中消失。恶魔按照以下顺序出现，从墙壁中出现，出现位置由你决定：

第2轮: 四只棘魔

第3轮: 三只须魔

第4轮: 两只猬魔

第五回合: 一只角魔

第六轮: 一只罪魔

一个向罪魔提供自己灵魂的角色将被火焰毁灭。该角色的灵魂被困在灵魂收割者中，角色的财物被留下，房间里所有剩余的恶魔在烟雾中消失。

当最后一个恶魔被击败，或者队伍与罪魔达成协议时，猛犸象雕像会回到它最初的面向北方的位置并停止旋转。当这种情况发生时，请阅读以下内容：

这个不死战士是Ch'gakare，几乎无法认出他就是壁画中骑猛犸象的那个人。他拥有还魂鬼的具体数值，但他不能被摧毁。如果生命值降至0，Ch'gakare会变成烟雾，消失，并在遥远丛林中的某个坟墓里重新形成。

Ch'gakare不说话，而是举起圣杯，以一种暗示他将其作为礼物的方式。如果圣杯从他手中被拿走，Ch'gakare就会变成烟雾消失了。当Ch'gakare消失时，封住房间的石块会缩回天花板中。

如果剥离下来，猛犸象的金箔价值2500金币，尽管需要一个角色花费30小时才能全部收集。多个角色合作可以相应缩短时间。还可以从猛犸象的獠牙上撬下五十颗宝石（每颗100金币）。

Ch'gakare的礼物是传说中的Ch'gakare的骷髅圣杯。这个物品价值2500金币，但如果在任何主要城市的拍卖中出售，其价值可以达到这个数字的四倍。另外，将圣杯归还给公主姆瓦克丝娜瑞将获得其承诺的奖励（见"基尔·萨巴尔"）。有关圣杯的更多信息，请参见"传说中的宝藏"。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_4bd","enc_toa_gold_elephant_bearded","enc_toa_gold_elephant_barbed","enc_toa_gold_elephant_horned","enc_toa_gold_elephant_erinyes"],treasureSlotIds:["trs_4bd_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[175],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间中央有一个一尺高的石制齿轮上矗立着一尊真实大小的金色猛犸象雕像。宝石装饰的獠牙从它的脸颊延伸出来，它的鼻子高举，仿佛在咆哮。雕像身上缠绕着铭文，墙壁上的壁画展示了一个楚尔坦战士骑着一头活生生的猛犸象穿越一系列地狱般的景观。在每个场景中，都有不同种类的恶魔攻击他们。

愿你的骨骼守护我的宝藏，勇敢的Ghom。正如你从地狱中带我出来，我亦将从死亡中崛起，保卫我的财富。

猛犸象的鼻子里爆发出雷鸣般的吼叫声，导致一块石头封住了房间。猛犸象脚下的齿轮随后开始旋转，让雕像依次面对每一幅壁画。

火焰熄灭了，尽管烟雾仍然弥漫在空气中。一阵温暖的风吹过大厅，带来了茉莉、乳香和坟墓尘埃的气息。烟雾凝聚成一个被绷带包裹的腐烂战士。他举起一个由人头骨制成的可怕的圣杯。`,dmGuidance:`当角色们第一次进入房间时，这尊10尺高的猛犸象雕像正对着入口。
如果角色们试图与恶魔们进行交易，只有罪魔愿意与他们交涉——但它要求一个角色自愿牺牲自己的灵魂。`,mapGeometry:{imageRef:"adventure/ToA/085-517.webp"}},{id:"scn_4c6",locationId:"loc_480",name:"68. 腐朽之厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个大厅装饰着腐烂尸体的雕刻图像，地板上散落着褪色的硬币、盔甲碎片、破碎的盾牌、斧头以及其他一些废旧金属碎片。","所有进入这条走廊的非魔法物品，如果是由布、皮革、木头或金属制成的，会立即腐烂或腐蚀到无用和无价值的程度。","衣物和盔甲会破碎，盾牌和武器变得脆弱且无效，等等。","一个en=Mending法术无法修复以这种方式损坏的物品。","大厅的西端有一个拱门，角色们可以通过它看到 区域69。"],flesh:`所有进入这条走廊的非魔法物品，如果是由布、皮革、木头或金属制成的，会立即腐烂或腐蚀到无用和无价值的程度。衣物和盔甲会破碎，盾牌和武器变得脆弱且无效，等等。一个en=Mending法术无法修复以这种方式损坏的物品。

大厅的西端有一个拱门，角色们可以通过它看到 区域69。

一个en=Detect Magic法术或类似的效果揭示了从象牙戒指散发出的死灵魔法气息。如果戒指被从骷髅的下巴上拽下来，它会解体，走廊中的破坏效果也会结束。

走廊南侧的楼梯下降25尺到达6层的区域71区域。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[176],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个大厅装饰着腐烂尸体的雕刻图像，地板上散落着褪色的硬币、盔甲碎片、破碎的盾牌、斧头以及其他一些废旧金属碎片。

这个巨大的拱门有一个拱心石，上面装饰着一个铁制的公牛骷髅头，它咬着一个象牙戒指。`},{id:"scn_4c9",locationId:"loc_480",name:"69. 机械境链",activation:{condition:{type:"always"},priority:0},skeleton:["带有燃烧油气味的热风吹过一个四十尺直径的垂直井道。","石制阳台从这个空间对面的墙壁上突出，西侧的阳台比东侧的高出十五尺。","两条粗链在阳台之间的鸿沟中发出哗啦声——一条上升两百尺后消失在被紫色闪电弧照亮的云雾漩涡中；","另一条则缠绕在一个漂浮在下方一百尺的巨大金属齿轮上。","在齿轮下方再一百尺处，第二个漩涡肆虐。"],flesh:`为了驱动他的地狱机械，阿瑟瑞克污染了来自机械境的一群魔冢。在一个腐败的五元冢的监督下，魔冢将他们的一条巨大链条重新路由进了坟墓。阳台上方和下方的井道部分存在于正常空间之外，防止井道与坟墓的其他层次相交。

当任何角色第一次移动到阳台上时，阅读：

一个五元冢带领着一支由九个四元冢组成的小队穿过上层位面漩涡，这个漩涡允许安全地进入井道，但不允许离开。知道他们无法返回机械境，魔冢会战斗到被摧毁。一旦这些魔冢被处理掉，井道就变得没有防御。没有其他魔冢通过漩涡被派送过来。

五面体自身无法飞行，但当它被包裹在水晶十面体中时，它可以获得30尺的飞行速度并能够悬浮。这为其乘员提供了3，免受来自载具外部的攻击。五面体无法通过十面体进行近战攻击，但它可以使用一个附赠动作在十面体的任何一个面上打开一个小孔，以向生物喷射其麻痹气体。

十二面体的护甲等级为16，有50生命值，对毒素伤害免疫，对穿刺和挥砍伤害有抗性，对钝击和雷鸣伤害有弱点。如果它的生命值降至0，水晶十二面体会破碎，五元冢将坠落。

水晶十二面体有足够的空间，除了五元冢外，还可以容纳一只小型或中型生物，如果一个角色想到使用en=Misty Step、en=Dimension Door或类似的魔法进入载具。在载具内部，五元冢可以正常攻击。当五元冢死亡时，十二面体会破碎。

精通奥秘技能的角色可以进行智力（奥秘）检定，以确定他们是否记得关于位面漩涡和机械境链条的相关信息。如果检定成功，角色将学习到相应的知识，以及所有难度等级较低的知识：

{@b DC 10}: 位面漩涡具有极大的破坏性。没有人能够指望进入漩涡后还能生还。

{@b DC 15}: 这条锁链被称为机械境锁链。这种锁链由模组制造，并与其他机械装置配合使用，以保持机械境的运转秩序。

{@b DC 20}：这条机械境的链条已被重新用于这座墓穴。一条链条就足以保持墓穴陷阱和其他机构的正常运作。

{@b DC 25}: 摧毁一条机械境之链需要施放三个en=Wish法术。

井道总高度为400尺，在顶部和底部都有致命的位面漩涡。井道中的任何生物如果进入位面漩涡将被撕裂，其身体和财物散落在多元宇宙中。

机械境链条形成一个不断运动的循环。链条的一部分以每轮50尺的速度下降，缠绕在漂浮在东侧阳台下方100尺的巨大齿轮上，而链条的另一部分以相同的速度上升，进入上方的漩涡。

两个阳台被一条15英尺宽的鸿沟隔开，穿过其中，叮当作响的链条上下起伏。允许角色飞行或行走在墙上的魔法使得从一个阳台到另一个阳台变得容易。任何事先移动至少10英尺的角色可以从西阳台跳到东阳台。由于西阳台比东阳台高出15英尺，角色必须使用撑杆跳越过缺口（使用10英尺长的杆子或类似物品）或使用魔法。角色也可以通过从一个阳台跳到最近的链条，从链条到另一个链条，最后跳到对面的阳台来穿过这片区域。每次跳跃都需要通过一次成功的 DC 10 力量（运动）检定。任何在跳向阳台或链条时失败的检定者将掉入井中并进入下位面漩涡，除非有某种方式阻止。下落的角色可以通过成功的 DC 10 敏捷豁免落在100英尺下方的浮空齿轮上，但仍会正常受到坠落伤害。`,spotlightRefs:[],presentNpcIds:["npc_acererak"],availableInfoIds:[],encounterIds:["enc_4c9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[177],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`带有燃烧油气味的热风吹过一个四十尺直径的垂直井道。石制阳台从这个空间对面的墙壁上突出，西侧的阳台比东侧的高出十五尺。两条粗链在阳台之间的鸿沟中发出哗啦声——一条上升两百尺后消失在被紫色闪电弧照亮的云雾漩涡中；另一条则缠绕在一个漂浮在下方一百尺的巨大金属齿轮上。在齿轮下方再一百尺处，第二个漩涡肆虐。

在高高的漩涡中出现一个裂缝，九个有翅膀和短弓的立方体形状生物飞了出来。它们很快被一个巨大的水晶十二面体跟随，水晶中有一个奇怪的海星形状生物。`},{id:"scn_4cf",locationId:"loc_480",name:"70. 浑天仪",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含一个位于铰接臂中心的青铜装置。","一个直径10尺的球体在臂内缓慢旋转，上面装饰着地形图，包括地貌和海洋。","黄铜的同心环限制着这个装置，都在旋转并承载着它们自己的较小球体。","其中一个球体有尖锐的点，看起来像太阳。","房间的墙壁上雕刻着高大无头人形生物。"],flesh:`浑天仪描绘了托瑞尔（Toril）、它的月亮、太阳以及Realmspace中的其他天体。任何观看过费伦（Faerûn）大尺度地图的角色都会在球体上认出某些地理特征。

当任何生物第一次移动到中心球体5尺范围内时，请阅读以下内容：

当一个生物坐在浑天仪椅子上时，球体再次关闭。任何阻止关闭的尝试都会使机制过载；在堵塞被移除之前，任何在浑天仪球体5尺范围内且没有坐在椅子上的生物都会受到18点（4d8）闪电伤害。

当坐在椅子上的生物站起来时，球体的舱口会打开，只有在另一个生物坐在椅子上或没有生物在浑天仪5尺范围内时，舱口才会再次关闭。

当球体封闭时，坐在椅子上的角色可以透过球体看到外面，就像它是由透明玻璃制成的一样。拉动每个扶手末端的操纵杆会导致浑天仪的环圈使太阳、月亮和其他天体的代表物朝一个方向或另一个方向旋转。

一个征伐罗斯魔被塞在代表托瑞尔月亮的青铜球体中，即塞露妮。当浑天仪内部的生物第一次重新调整其环和外球体时，尼卡洛斯会从月亮中冲出，将其粉碎。随后，尼卡洛斯会试图杀死房间内的所有其他生物，并追逐逃跑的敌人。它忽略球体内的生物，但会攻击任何离开球体的生物。

当这只尼卡罗斯用它的巨斧进行攻击骰，并掷出自然 20 时，它将砍下目标的头（如果目标有多个头，则砍下其中一个）。如果目标失去头后无法存活，它就会死亡。对挥砍伤害免疫的目标对此效果免疫。如果目标没有头或不需要头、拥有传奇动作，或其头太大而无法用巨斧砍下，目标也会免于被斩首，但依然会受到武器暴击的伤害。

如果这些环被旋转，使得所有的天体都排成一线，就在浑天仪合相表上掷骰以确定会发生什么。一旦合相效果发生，浑天仪就会发生故障，导致操纵杆锁定在原位，舱口也被锁定关闭。

上锁的舱口是一个大型物体，具有AC 11、25点生命值，并且免疫毒素和心灵伤害。只要外环和球体没有移动，舱口可以通过成功的DC 20力量（运动）检定强行打开，或者由角色使用盗贼工具进行成功的DC 20敏捷检定来打开。

南墙上的一个暗门隐藏着一条通往南方并从控制室下方穿过的爬行通道。详情请见 区域51。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_4cf"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[177],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间包含一个位于铰接臂中心的青铜装置。一个直径10尺的球体在臂内缓慢旋转，上面装饰着地形图，包括地貌和海洋。黄铜的同心环限制着这个装置，都在旋转并承载着它们自己的较小球体。其中一个球体有尖锐的点，看起来像太阳。房间的墙壁上雕刻着高大无头人形生物。

装置突然转动，它的环圈旋转开来，球体表面剥落，露出一个黑暗的空心内部。在这个空腔里是一个带有垫子的青铜椅子，椅子的扶手上装有操纵杆。`,randomTableIds:["tbl_4cf_0"]},{id:"scn_4d7",locationId:"loc_4d7",name:"第六层：死亡之神的摇篮",activation:{condition:{type:"always"},priority:0},skeleton:["地图5.6展示了地牢的这一层次。","在这里，令人畏惧的灵魂收割者培养着萎缩者成为神明。","一个被称为缝合姐妹的女巫团守卫着托儿所，它一直保持密封状态，直到使用五个 骷髅钥匙 解锁。","如果你想让冒险继续向前推进，而不是让角色们返回，将剩余的骷髅钥匙放置在 区域71 或附近其他地方。"],flesh:"地图5.6展示了地牢的这一层次。在这里，令人畏惧的灵魂收割者培养着萎缩者成为神明。一个被称为缝合姐妹的女巫团守卫着托儿所，它一直保持密封状态，直到使用五个 骷髅钥匙 解锁。如果你想让冒险继续向前推进，而不是让角色们返回，将剩余的骷髅钥匙放置在 区域71 或附近其他地方。",spotlightRefs:[],presentNpcIds:["npc_dragonbait","npc_mister_threadneedle","npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[178],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"如果角色们未能从上层获得全部五个骷髅钥匙，他们在这一层次上将无法取得进展。"},{id:"scn_4d8",locationId:"loc_4d7",name:"71. 缝补姐妹的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["绿烟从一个位于这个二十尺高的拱形大厅中央的铜制大釜中滚滚而出。","透过烟雾隐约可见的是三把摇椅、几个堆满服饰用品的工作台、一个纺车，以及一个装着囚犯的生锈铁笼。","走廊在房间两侧离地面十尺高的地方。",'绿色烟雾使这个房间2，并阻挡了角色们对南方一扇巨大绿门的视线（见下方的"骷髅门"）。','铁笼及其囚犯的描述见"笼子"部分。'],flesh:`绿色烟雾使这个房间2，并阻挡了角色们对南方一扇巨大绿门的视线（见下方的"骷髅门"）。铁笼及其囚犯的描述见"笼子"部分。

这个房间属于缝合姐妹，一个由三个忠于 阿瑟瑞克 的 夜鬼婆 组成的女巫团。这些女巫一起抚养着萎缩者并守卫着灵魂收割者。她们热切地等待着萎缩者的神化，届时文明的崩溃预示着大量灵魂的丰收。缝合姐妹从边界以太位面监视入侵者。任何能够感知以太位面上的生物和物体的角色会看到这些女巫像幽灵般的人物聚集在房间中央。更多信息请见"缝合姐妹"侧边栏。

每位女巫都创造了一个残忍的玩物：一个通过植入儿童灵魂而赋予生命的娃娃。当冒险者到达时，这些娃娃突然进入视野：

每个娃娃都是一个小型构装体，具有10点护甲等级，1点生命值，行走速度为10尺，对毒素伤害和中毒状态免疫，并且没有攻击能力。摧毁一个娃娃会导致娃娃内的孩子的灵魂被困在灵魂收割者中。

稻草娃娃，稻草包，通常代表团队发言。泥土无面只有在其空白的脸上塑造出嘴巴时才能说话，而猴子霍霍在尝试说话时会咳嗽出填充物。如果有机会，这些娃娃会分享以下信息：

缝合姐妹是三个夜巫婆。这些娃娃拒绝提及巫婆的名字，以免巫婆听到它们的名字被说出。

这些娃娃是由孩子们的灵魂制成的，它们想要摆脱捕获者的束缚。

巫婆们正在照顾某种潜伏在骷髅门（绿色大门）另一侧的生物，但这些娃娃不知道那生物是什么。

为了了解更多关于冒险者的信息，巫婆们一直在折磨笼子里的"窥视者"。

需要五把骷髅钥匙来打开骷髅门。每一把钥匙看起来像是一个有骷髅头的动画骷髅，其头骨延伸成雕刻成的钥匙形状。

骷髅钥匙在坟墓的上层游荡。

在使用骷髅钥匙之前，必须先打开骷髅门上的五个钥匙孔。相邻的五个房间（区域72至76）包含可以克服的试炼，用以打开五个钥匙孔。

这些娃娃不知道72号到76号区域的试炼的性质，除非被捡起来并带出去，否则它们无法离开这个房间。

如果有任何角色努力与其中一个玩偶交朋友，困在玩偶内的孩子的灵魂会赐予该角色一个魔法护符。每个玩偶只能赐予一次护符。这些护符类似于第七章中描述的护符，并遵循相同的规则。

当你携带着草包时，该护咒使你可以使用一个动作施放法术en=Etherealness，无需任何法术成分。使用三遍后，该护咒从你身上消失。

当你携带着无脸粘土时，你无需饮食和呼吸。携带该玩偶时，该增益持续 30 天。之后，该护咒从你身上消失。

当你携带着约霍时，它赋予你的增益使你如同戴着一顶通晓语言头盔。携带该玩偶时，该增益持续 7 天。之后，该护咒从你身上消失。

一把沉重的挂锁锁住了生锈的笼子，笼子里一个赤裸的身影蜷缩在一条沾满血迹的毯子下。

针线先生（参见区域74）携带着挂锁的钥匙，否则可以通过使用盗贼工具进行一次成功的DC 15敏捷检定解锁。该锁也可以被轻易砸开。

笼子里的囚犯是玩家角色之一的退化克隆体，可以立即被识别出来。它是通过巫婆在角色睡觉时获得的血液或头发丝创造出来的。角色们有很小的机会在随机的野外遭遇中遇到巫婆（详见附录 B）；然而，盗窃发生的时间与地点由你决定。

克隆体不是完美的复制品。它比它所模仿的角色更矮更瘦弱，并且有畸形。使用 平民 的具体数值来代表这个生物，适当地应用种族特征。

这个克隆体没有名字，也没有被创造出来的记忆。然而，巫婆们已经在这个克隆体和制造它的原始角色之间建立了一个魔法链接。克隆体知道角色所知道的一切，包括所有现有的知识。巫婆们一直在审问克隆体，以了解有关冒险者的一切。现在，既然她们不再需要这些信息，缝合姐妹计划杀死并吃掉克隆体。

一个柏绿色的焦油状液体填满了铜制大锅。任何饮用这种液体的生物将会被震慑状态影响，持续1d10分钟。在震慑状态下，生物会因为萎缩者尔的黑暗梦境而遭受癫痫发作。

大锅的青铜盖子放在附近的地板上。如果将盖子放在大锅上，充满房间的绿色烟雾在1分钟后会消散。

这些几何符号直径为6英寸，相互间隔1尺，并且镶嵌在直径8英寸的石盘内。石盘背后的五个钥匙孔的大小和形状与在其他墓穴层级上找到的骷髅钥匙的头部相匹配（见"骷髅钥匙"）。

每次角色完成区域72至76中的一个试炼，一个石制印章就会滚到一边，露出背后的钥匙孔。当一个钥匙骷髅插入对应的钥匙孔并顺时针转动时，门内的锁芯就会解开。当所有五个锁芯都解开后，骷髅门就可以像一扇普通的（尽管很重的）门一样被拉开，露出一条向下20尺通往区域77的宽阔楼梯。门及其印章对伤害和法术免疫，不能以上述规定之外的任何方式打开。

巫婆们的目标是夺取一个或多个骷髅钥匙，从而阻止角色们到达灵魂收割者。如果一个巫婆获得了一个钥匙骷髅，它会在带着它返回边界以太时发出尖笑。

如果有两名巫婆死亡，第三名巫婆会试图与角色们讨价还价，提供有用信息以换取自己的生命。巫婆要求角色们以他们凡人的灵魂发誓，一旦她透露了信息就不得伤害她。任何违背协议的角色将患上黏滑厄运，就好像他或她未能通过对抗en=Contagion法术的豁免检定一样。一旦达成协议，巫婆会透露以下信息（且不会透露更多）：

"在这个地牢层隐藏着一个失落知识图书馆，由一个名为Ygga Raxyg的奥法罗斯魔守护。"（详见区域80。）

"离开地牢只有一种方式：乌木池。焦骨指引着方向。"（详见区域81了解乌木池的详情。"焦骨"指的是在区域79地板上的焦黑骷髅。）

"红径通向死亡。"（详见区域79。）`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_mister_threadneedle","npc_dragonbait","npc_valindra_shadowmantle"],availableInfoIds:["info_toa_skeleton_keys"],encounterIds:["enc_4d8"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[178],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`绿烟从一个位于这个二十尺高的拱形大厅中央的铜制大釜中滚滚而出。透过烟雾隐约可见的是三把摇椅、几个堆满服饰用品的工作台、一个纺车，以及一个装着囚犯的生锈铁笼。走廊在房间两侧离地面十尺高的地方。

走廊的墙壁上设有五扇木门，每扇门上都雕刻着一个几何符号：一个三角形、一个正方形、一个五边形、一个六边形和一个八边形。

三个微小的身影穿过烟雾向你蹒跚走来：一个身上插着生锈大头针的稻草娃娃，一个由泥土塑造的无面儿童，以及一个下半身是独轮车的填充猴子。稻草娃娃说：'你得逃跑！缝合姐妹随时会回来！'

这扇门高十二尺，宽十尺，由绿色石头制成，表面雕刻着咧嘴笑的地精骷髅。一条平滑的石带横贯门的四尺高处，上面并排镶嵌着五个金色符号：一个三角形、一个正方形、一个五边形、一个六边形和一个八边形。每个符号都雕刻在一个凹陷的圆形印章上。`,dmGuidance:`当角色们处于一个可以更好地看到上层走廊的位置时，请阅读以下内容：
如果角色们对骷髅门产生了兴趣，这些娃娃会透露他们所知道的关于它的信息：
【缝合姐妹】阿瑟瑞克 招募了三个夜魔，利用她们在缝合灵魂袋方面的专长——她们将这项技艺改良用于创造灵魂收割者。这些女巫是一群可怕的存在：
寡妇格罗特 用失去光泽的金币覆盖着她的眼睛，蚂蚁在她头骨中筑巢。这些蚂蚁充当她的间谍，它们的存在常常预示着她的到来。她携带着一颗心石、一个灵魂袋以及一个带有八个钥匙的铁环。这些钥匙可以打开区域78中的镣铐。
佩吉·迪德贝尔 戴着一串喋喋不休的孩子们的牙齿，并且拖着一条沉重的木腿行走。当她笑时，黄色的气体从她的鼻子和耳朵中涌出。她的脖子上挂着一个由侏儒皮肤制成的袋子，里面有一个心石和五颗光亮的黑色大理石（见区域81）。佩吉的绳带腰带上系着一个灵魂袋。
老婆婆巴基 的头上缝着一个蠕动的皮革袋。袋子里还有一只公鸡、一条蝰蛇和一只小猎犬。其中一个动物可以代替她自己的头从袋子里出来为她代言，当松垮娜娜死去时，这些动物会变成烟雾。她的口袋里携带着一颗心石、一个灵魂袋和三个地精手指。
夜巫婆们有一个共享的法术池（详见《怪物手册》中的"巫婆联盟"侧边栏）。稻草人针线先生（详见区域74）携带着联盟的巫婆之眼。
有关心石和灵魂袋的更多信息，请参阅《怪物手册》中的"夜巫婆物品"侧边栏。
当角色靠近到足以分辨出绿色门的细节时，请阅读以下内容：
如果角色们设法打开了所有的五个钥匙孔，并且拥有所需的骷髅钥匙，缝合姐妹将从边界以太中出现并攻击他们。`,mapGeometry:{imageRef:"adventure/ToA/088-518.webp"},offerableQuestIds:["qst_main_toa"]},{id:"scn_4e6",locationId:"loc_4d7",name:"72. 三角试炼",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域的门上雕刻着一个三角形。","这个房间后墙附近的一个五尺宽、从地板到天花板的玻璃圆柱体内充满了光线，光源并不明显。","玻璃上在五尺高的地方切有一个小三角形的洞。","在圆柱体内，有一个铁杆安装在地板上的金属板上。","为了够到拉杆，角色们必须想办法进入或绕过这个圆柱体。"],flesh:`这个区域的门上雕刻着一个三角形。

为了够到拉杆，角色们必须想办法进入或绕过这个圆柱体。如果拉动拉杆，位于区域71的骷髅门上的三角形印章就会滚到一边，露出背后的三角形钥匙孔。

这个圆柱体直径为5尺，由2英寸厚的玻璃制成。玻璃上的三角形洞口宽1英寸。通常情况下，这个圆柱体对伤害和法术是免疫的，且无法移动。处于en=Gaseous Form的角色可以通过洞口进入圆柱体内，而处于以太状态的角色可以穿过玻璃。角色也可以使用en=Misty Step、en=Dimension Door或类似的魔法进入圆柱体。一个被魔法召唤出来的生物可以出现在圆柱体内，同样，一个en=Unseen Servant也可以，无论是哪一个都可以被命令去拉动拉杆。拉杆太重了，无法用en=Mage Hand法术移动，但会对en=Telekinesis法术产生反应。

如果有三只生物围绕玻璃圆柱体站立，形成围绕它的三角形的顶点，圆柱体就会变得脆弱，可以用任何实心打击将其击碎。一旦圆柱体被摧毁，任何人都可以走上前去拉动拉杆。`,spotlightRefs:[],presentNpcIds:["npc_dragonbait","npc_mister_threadneedle","npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[181],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间后墙附近的一个五尺宽、从地板到天花板的玻璃圆柱体内充满了光线，光源并不明显。玻璃上在五尺高的地方切有一个小三角形的洞。在圆柱体内，有一个铁杆安装在地板上的金属板上。",dmGuidance:"当角色们打开门时，请阅读："},{id:"scn_4e8",locationId:"loc_4d7",name:"73. 正方形试炼",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域的门上雕刻着一个正方形。","这个房间充满了飞舞的羊皮纸，随着它们的飘动，页面上的字迹清晰可见。","远墙上固定着一块金属板，上面装有一个幽灵般的拉杆。","飞行的书页来自一本法术书，如果受到任何火焰伤害就会被摧毁。","书页上写着一个随机法术；"],flesh:`这个区域的门上雕刻着一个正方形。

飞行的书页来自一本法术书，如果受到任何火焰伤害就会被摧毁。一个角色可以使用一个动作，在书页飘过时通过一次成功的DC 10敏捷检定抓取一页。书页上写着一个随机法术；掷一个d6来决定法术的等级，然后从法师法术列表中随机选择一个该等级的法术。

如果取走超过三页纸，房间里剩下的所有纸张都会化为尘土，这些尘土聚集成一只敌对的尘魔蝠，以及由en=Mirror Image法术创造的三个虚幻复制体。尘魔蝠攻击房间里的所有其他生物，其复制体似乎也在进行攻击。

这个魔蝠知道三个命令词："膨胀虫"，"青蛙唾沫"，和"纺锤冲刺"。在这个房间里，它可以用一个附赠动作说出一个命令词来触发下面相关的魔法效果。它不能连续两轮说出同一个命令词。

膨胀虫：魔蝠指定一个它能看到的30尺范围内的一个生物，该生物的重量立即增加50%。任何结束诅咒效果的法术，如en=Greater Restoration或en=Remove Curse，都能结束这个效果并使生物恢复到正常重量。

青蛙唾沫：房间内的每个生物必须成功通过 DC 10 体质豁免检定，否则会受到 9 (2d8) 点毒素伤害。（小鬼免疫毒素伤害。）

蛛网疾行: 效果随机针对房间内的生物。让玩家为房间里的每个角色掷一个d20，并且为魔蝠和其他每个生物掷一个d20。掷得最低点数的生物会受到21（6d6）点力场伤害。

当尘魔蝠死亡时，它会崩溃并转变成一根黑色的粉笔。

北墙上的拉杆是用骨头雕刻的，但是它是非物质的，以至于角色的手可以直接穿过它。对于位面以太界的生物来说，拉杆看起来是实体的，以太界的生物可以正常拉动它。en=Dispel Magic对拉杆没有效果，即使在en=Antimagic Field的范围内，拉杆仍然是非物质的。如果任何生物用粉笔画一个正方形围绕拉杆在墙上，拉杆就会变成实体。如果正方形被擦除，拉杆再次变得非物质。

如果拉动拉杆，位于区域71的骷髅门上的正方形印章就会滚到一边，露出背后的正方形钥匙孔。`,spotlightRefs:[],presentNpcIds:["npc_dragonbait","npc_mister_threadneedle","npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:["enc_4e8"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[181],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间充满了飞舞的羊皮纸，随着它们的飘动，页面上的字迹清晰可见。远墙上固定着一块金属板，上面装有一个幽灵般的拉杆。",dmGuidance:"当角色们打开门时，请阅读："},{id:"scn_4eb",locationId:"loc_4d7",name:"74. 五边形试炼",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域的门上雕刻着一个五边形。","香料烤肉的香味扑鼻而来。","在一条二十尺长的走廊尽头，一个房间展开，墙上挂着红色的挂毯。","三张桌子上摆满了盛宴，包括烤野猪、南瓜炖菜和一盘冰镇蛋糕。","带有泡沫的啤酒壶为宴会画上了完美的句号。"],flesh:`这个区域的门上雕刻着一个五边形。

那位瘦削的绅士是针线先生，缝合姐妹的男仆。一个en=Detect Magic法术或类似效果会揭示他周围环绕着幻术魔法的灵光。成功的en=Dispel Magic（DC 16）会揭示他的真实形态。

针线先生 是一个被魔法伪装成人类的稻草人。他的口袋里携带着缝合姐妹的 鬼婆之眼和一颗光亮的黑色大理石（见 区域81）。针线先生 懂得通用语但无法说话。他通过点头和摇头，或者用手势和面部表情来交流。

巫婆们得知冒险者的到来后，准备了这场魔法盛宴，并指示针线先生布置好。稻草人只有在被冒险者先攻击，或者巫婆们命令他攻击时才会攻击角色。

任何被Kubazan或娜浪的灵魂附身的角色在进入这个区域时会收到建议：

狂野的Kubazan催促他的宿主尝试烤野猪。

贪婪又容易受惊的娜浪催促她的宿主囤积所有的冰镇蛋糕并避开泡沫啤酒。

食物烹饪得当且美味，啤酒醇厚。享用这顿盛宴的任何角色会根据所食用的食物获得益处，并遭受相应的不良影响。在这些不良影响生效之前，不要向玩家透露它们。

烤野猪：角色感觉更强大，在力量检定上有优势，但在对寡妇格罗特进行的攻击骰上有劣势。这两种效果持续时间为24小时。

南瓜炖菜：角色感觉更健康，在体质豁免检定上获得优势，但在对佩吉·死铃进行攻击检定时处于劣势。两种效果持续时间为24小时。

冰镇蛋糕：角色感到精力充沛并获得2d10点临时生命值，但在接下来的24小时内对老婆婆巴基进行攻击检定时会受到不利影响。

泡沫啤酒：角色获得一个特殊骰子：一个d6。在接下来的24小时内，角色可以掷这个骰子一次，并将结果加到他或她刚刚进行的d20掷骰结果上。此外，如果角色被恶作剧神灵的精神附身，该精神通常赋予的能力将在24小时内被抑制。

进入房间但不食用食物或饮料的角色一旦离开这个区域就会被诅咒，遭受极度饥饿的困扰。这个效果使攻击检定和属性检定处于劣势，并且可以通过en=Greater Restoration、en=Remove Curse或类似的魔法来结束。

五块红色挂毯从固定在墙上的铁杆上垂下。每块挂毯由五边形拼布缝制而成。任何仔细检查西南墙上的挂毯并通过DC 15感知（察觉）检定的角色会看到更多内容：一个巧妙隐藏在图案中的潜意识魔鬼面孔。魔鬼的张开嘴巴形成一个五边形。角色可以把手伸进魔鬼的嘴巴里，仿佛布料不存在一样，发现一个小的异次元隔间，隔间的后部设有一个玻璃杠杆。隔间只能从挂毯的正面进入，并且只有在挂毯挂在墙上时才能进入。如果挂毯被从房间拿走或被摧毁，新的挂毯将在4d6小时后在墙上出现。

如果拉动挂毯里的拉杆，位于区域71的骷髅门上的五边形印章就会滚到一边，露出背后的五边形钥匙孔。`,spotlightRefs:[],presentNpcIds:["npc_mister_threadneedle","npc_dragonbait","npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:["enc_4eb"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[182],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`香料烤肉的香味扑鼻而来。在一条二十尺长的走廊尽头，一个房间展开，墙上挂着红色的挂毯。三张桌子上摆满了盛宴，包括烤野猪、南瓜炖菜和一盘冰镇蛋糕。带有泡沫的啤酒壶为宴会画上了完美的句号。
一个面容憔悴的人类男性穿着一件沾满灰尘的黑色西装，正在安静地整理蛋糕桌上的物品，注意到了你们的闯入。他没有说话，示意你们走上前去品尝这顿盛宴。`,dmGuidance:"当角色们打开门时，请阅读："},{id:"scn_4f0",locationId:"loc_4d7",name:"75. 六边形试炼",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门上雕刻着一个六边形。","一面大的、有裂纹的六边形镜子安装在对面墙上突出的石架上方。","石架上放着五根未点燃的蜡烛，每根都是由黄色蜡制成，并覆盖着细小的黑色符记。",'在镜子上方的墙上用干血潦草地写着"PIGGY PIGGY PIGGY"。',"第六根蜡烛与明处的五根完全相同，被隐藏在石头架下看不见的地方。"],flesh:`这个房间的门上雕刻着一个六边形。

第六根蜡烛与明处的五根完全相同，被隐藏在石头架下看不见的地方。任何搜索架子以寻找陷阱或隐藏隔间的角色都会自动找到第六根蜡烛。镜子和蜡烛都对 en=Detect Magic 法术或类似效果散发出召唤魔法的气息。

这面破裂的镜子无法从墙上撬下来，也无法比现在更加损坏。

如果点燃所有六根蜡烛，一个角色在镜子前连续三次说出"piggy"这个词，就会看到反射的烛光揭示了北墙上一个嵌在金属板上的木制拉杆。如果在说出这些词时点燃的蜡烛少于六根，拉杆反而会出现在南墙上。这些拉杆只存在于镜子的反射中，并不存在于现实中。

只有能够看到镜子里反射出的拉杆的角色才能拉动它。由于这很可能会将拉杆置于角色触及范围之外，他或她可以施放一个en=Mage Hand或者en=Telekinesis法术，召唤一个en=Unseen Servant，用绳子套住拉杆，或者采取任何合适的巧妙解决方案。

如果拉动北边的拉杆，位于区域71的骷髅门上的六边形印章就会滚到一边，露出背后的六边形钥匙孔。

如果拉动南边的拉杆，三个疯狂的处于混合形态的野猪人们会从镜子中魔法般地跳出，落在房间中央，并战斗至死。当房间里没有东西可打时，它们会加入到区域71的夜巫婆中。

野猪人只能被召唤一次。再次拉动这个拉杆没有效果。`,spotlightRefs:[],presentNpcIds:["npc_dragonbait","npc_mister_threadneedle","npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:["enc_4f0"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[183],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:'一面大的、有裂纹的六边形镜子安装在对面墙上突出的石架上方。石架上放着五根未点燃的蜡烛，每根都是由黄色蜡制成，并覆盖着细小的黑色符记。在镜子上方的墙上用干血潦草地写着"PIGGY PIGGY PIGGY"。',dmGuidance:"当角色们打开门时，请阅读以下内容："},{id:"scn_4f5",locationId:"loc_4d7",name:"76. 八边形试炼",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门上雕刻着一个八边形。","这个房间的墙壁是石膏的，天花板高十五尺。","一本皮革封面的大书摊开在固定于地面的木制讲台上。","讲台后的墙壁内嵌着八具人类骷髅，排列得看起来像是在坠落和尖叫。","这些骷髅是嵌入石膏墙中的无生命遗骸。"],flesh:`这个房间的门上雕刻着一个八边形。

这些骷髅是嵌入石膏墙中的无生命遗骸。讲台由四颗深深固定在地板上的螺栓固定，对损害、法术和移动尝试免疫。书本的封面用至尊胶粘在讲台上，防止它被轻易移除。这本八页的书包含了缝合姐妹用地狱语写的八行儿歌，每页承载一行诗。角色们第一次到达时，书是翻到第四和第五页。

隐藏在东墙讲桌腿的一侧，有一个可以通过成功的 DC 10 感知（察觉）检定找到的暗格。

如果将儿歌的诗句（见下文）倒序大声朗读，从最后一行开始，以第一行为结束，秘密隔间的门就会打开，露出里面的黄铜拉杆。如果拉动拉杆，位于区域71的骷髅门上的八边形印章就会滚到一边，露出背后的八边形钥匙孔。

这个隔间也可以用en=Knock法术打开，或者由一名角色使用盗贼工具进行一次成功的DC 20敏捷检定来打开。以任一方式打开隔间都会触发陷阱（见下方的"蜘蛛扇陷阱"）。

任何懂得地狱语的角色都可以将巫婆的儿歌翻译如下：

任何检查房间地板的角色，若成功通过一个DC 15感知（察觉）检定，会注意到地板边缘的细微缝隙，暗示下方有一个陷阱。这些缝隙旨在欺骗冒险者并让他们对地板保持警惕，但实际上地板下方并没有陷阱。

真正的危险来自于天花板，它看起来是平滑切割的石头，实际上是薄石膏。在假石膏天花板上方五尺是房间真正的天花板，上面安装着一个刀片扇，形状像一个巨大的铁蜘蛛。

如果房间内的角色从第1页的第一行开始阅读至第8页的最后一行读完整个童谣，或者讲台上的隔间被不当打开，天花板风扇会开始旋转，同时房间内会激活一个en=Reverse Gravity法术。讲台是房间内唯一固定的物体。任何能够触及它的生物，通过成功的DC 17敏捷豁免检定，可以抓住讲台避免向上坠落。无法抓住讲台或以其他方式固定的生物会'坠落'通过假石膏天花板进入旋转的风扇叶片，受到44点(8d10)的挥砍伤害。每当该生物在天花板上开始其回合时，会再次受到此伤害。en=Reverse Gravity效果持续1分钟，之后天花板上的生物会坠落回下方20英尺的地板。法术结束后，天花板风扇停止旋转。此陷阱不会重置。`,spotlightRefs:[],presentNpcIds:["npc_dragonbait","npc_mister_threadneedle","npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[184],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的墙壁是石膏的，天花板高十五尺。一本皮革封面的大书摊开在固定于地面的木制讲台上。讲台后的墙壁内嵌着八具人类骷髅，排列得看起来像是在坠落和尖叫。",dmGuidance:`当角色们打开门时，请阅读：
【儿歌书】第1页：反向，反向，八归一。
第2页：念完这首韵。
第3页：将蜘蛛锁起来。
第4页：看见拉杆，清晰如白昼。
第5页：旋转，旋转，铁蜘蛛。
第6页：将他们的肉体和骨头变成苹果酒。
第7页：说出韵律，面对你的命运。
第8页：向前，向前，一至八。`},{id:"scn_4fa",locationId:"loc_4d7",name:"77. 死神的育婴室",activation:{condition:{type:"always"},priority:0},skeleton:["打开区域71的骷髅门，露出一个10尺宽、20尺长的抛光黑色大理石楼梯，通往这个区域。","摇摇欲坠的阳台俯瞰着这个三角形房间中的熔岩池，其上方悬挂着一个巨大的水晶圆柱，由三个精金支架固定。","水晶圆柱内有像幽灵般的形体旋转，空气中回荡着异世界的尖叫声。","从圆柱的盖子上伸出四条长长的、扭动的触手。","一个干瘪的怪物，大小如象，漂浮在圆柱附近。"],flesh:`打开区域71的骷髅门，露出一个10尺宽、20尺长的抛光黑色大理石楼梯，通往这个区域。

这个圆柱形的装置是灵魂收割者。旁边漂浮的畸形生物是一个萎缩者（详见附录D），它以捕获的死者灵魂为食。萎缩者会攻击任何威胁它或试图破坏其食物来源的生物。如果萎缩者死亡，阿瑟瑞克会到来以报复（见下文"阿瑟瑞克的复仇"）。

这个拱顶的天花板高30尺，北阳台的墙壁上排列着壁龛，壁龛里堆满了头骨和骨头——旧奥姆人及其牛头人保护者的遗骸。

任何被恶作剧精灵附身的角色在进入这个区域时会收到建议：

多变的艾金鼓励她的宿主去调查南阳台上充满雾气的拱门（见下文的"雾门"）。

爱冒险的库巴赞期望他的宿主做出最终的牺牲，在荣耀的火焰中死去。

仁慈的莫阿想要解放困在灵魂收割者中的灵魂。

贪婪的娜浪敦促她的宿主搜查阳台和充满骨头的壁龛寻找宝藏。

紧张的奥博娜卡担心北边壁龛里的骨头可能会站起来并发动攻击。

精明的帕帕扎图怀疑萎缩者可能对光耀伤害敏感，并且杀死它可能会召唤出它的邪恶主人。

高尚的莎根比认识到萎缩者是不神圣的，并命令她的宿主立即摧毁它。

沉思的安珂敦促她的宿主与萎缩者沟通。也许这个生物只是被误解了。

疯狂的望戈想要他的宿主攻击从灵魂收割者顶部长出的触手。

灵魂收割者是一个直立的水晶圆柱体，高20尺，直径10尺。将其悬挂在岩浆上方的精金支架连接在圆柱体中部的一个精金环上。

在 en=Detect Magic 法术或类似效果的审查下，灵魂收割者散发出强烈的死灵魔法气息。摧毁灵魂收割者不仅结束了死亡诅咒的效果（见冒险介绍），还释放了困在该设备中的所有灵魂。释放出的灵魂会前往来世，任何灵魂被释放的生物都可以通过魔法手段从死亡中带回来。

灵魂收割者是一件邪恶的神器——一个巨大的物体，具有AC（护甲等级）15；200生命值；对光耀伤害易损；并且对来自非魔法攻击的钝击、穿刺和挥砍伤害免疫。

摧毁灵魂收割者的一种方法是破坏将其悬挂在岩浆上方的三条精金支架中的任意一条。每条支架都被视为一个大型物体，具有AC 20；100生命值；对非魔法攻击的钝击、穿刺和挥砍伤害免疫；以及对火焰、毒素和心灵伤害免疫。当一条支架的生命值降至0时，它会断裂，并导致其他两条支架随着灵魂收割者的坠落而断裂。

横梁足够宽，中型或小型生物可以毫无困难地行走。然而，任何站在横梁上受到伤害的生物必须成功通过一个 DC 10 的敏捷豁免检定，否则会从横梁上跌落，坠入岩浆，除非该生物以某种方式被固定住。

除非同样被固定，任何站在精金支柱上的生物在支柱断裂时会坠入熔岩。如果该生物在阳台的触及范围内，它可以跳到阳台上，并通过一次成功的DC 10敏捷豁免来避免坠落。

每回合一次，当任意生物对柱状体或其支柱成功进行近战武器攻击时，灵魂商贩会用其30尺长的触须攻击该生物。触须的力量值为22，并对该生物进行一次近战武器攻击：+7命中，24（4d8 + 6）钝击伤害。触须也可以不造成伤害而擒抱其目标（逃脱DC 16）。如果目标重量不超过330磅，触须还能举起受擒的生物并将其移动到其30尺触及范围内的任意未占据空间，或将其丢入熔岩中。

触手可以被攻击并摧毁。每一个触手都是一个巨大的活化物体，具有AC 15，30生命值，并对毒素和心灵伤害免疫。

当灵魂收割者的生命值降至0时，请阅读以下内容：

如果萎缩者没有被摧毁，它会在死者的灵魂从灵魂收割者的残骸中逃脱时发出尖叫。

熔岩坑位于房间地面下方30尺处，深100尺。任何生物如果掉入熔岩或在其上方开始回合，将受到55点（10d10）火焰伤害。任何物体如果掉入熔岩，在初次接触时会受到伤害，并且每轮都会再次受到伤害，直到它从熔岩中移除或被摧毁。

在房间的东西两侧墙壁上，有两个阳台，它们位于岩浆坑上方30尺的位置。

阿瑟瑞克 在多元宇宙中有门徒散布各处，包括许多力求变得和他一样强大的巫妖。他将他们的护符放在这里。

每个阳台上都有2d6 + 5个巫妖命匣。任何通过DC 15智力（奥秘）检定的角色都能认出这些命匣的真实本质。摧毁命匣并非易事，通常需要特殊仪式、物品或武器。这里的命匣都是独一无二的，要发现每个命匣的摧毁方法需要时间和昂贵的研究。将这些命匣投入熔岩有10的几率能摧毁其中任意一个。

房间南端的阳台上设有通往九神之墓最终厅室的门户。

一个en=Detect Magic法术或类似的效果揭示了环绕在门周围的召唤魔法光环。任何生物踏入拱门时，都会从区域78中的一个类似拱门中出现，包括它所穿戴或携带的任何物品。

阿瑟瑞克（见附录D）开始进行先攻判定，并全力以赴攻击，希望杀死入侵者并收割他们的灵魂。这位死灵法师携带着被遗忘者的法杖（见附录C），并且伴随着一个湮灭法球，他通过佩戴在脖子上的法球护符来控制它。因为九神之墓不是阿瑟瑞克的家，所以在这场战斗中他没有巢穴行动的权限。

阿瑟瑞克 以居高临下的口吻对冒险者们说话，称他们为'微不足道的凡人'，同时他准备去摧毁他们。

当阿瑟瑞克出现时，任何被恶作剧之神灵魂附身的角色都会听到那个灵魂为了复仇而呼喊。除了他或她的恶作剧之神赋予的力量外，只要角色能看到阿瑟瑞克，他们还会获得以下好处：

角色在每个自己的回合开始时获得50点临时生命值。

如果阿瑟瑞克的生命值降至100点以下，他会在下个回合施放en=Teleport并逃跑。当他离开时，请阅读以下内容：

阿瑟瑞克的身体在他的圣物匣附近重新形成，圣物匣隐藏在某个遥远的半位面中，但他的财物被遗留下来供角色们掠夺。湮灭法球保持静止，直到有人使用护符来控制它。因为它不是生物，如果它进入迷雾之门（见上文的"迷雾之门"），湮灭球不会被传送。`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_dragonbait","npc_mister_threadneedle","npc_valindra_shadowmantle"],availableInfoIds:["info_toa_soulmonger","info_toa_acererak_revenge"],encounterIds:["enc_toa_atropal","enc_toa_acererak"],treasureSlotIds:[],eventIds:["evt_toa_destroy_soulmonger"],tone:"tension",_meta:{sourcePages:[184],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`摇摇欲坠的阳台俯瞰着这个三角形房间中的熔岩池，其上方悬挂着一个巨大的水晶圆柱，由三个精金支架固定。水晶圆柱内有像幽灵般的形体旋转，空气中回荡着异世界的尖叫声。从圆柱的盖子上伸出四条长长的、扭动的触手。一个干瘪的怪物，大小如象，漂浮在圆柱附近。它的身体湿润畸形，四肢萎缩，巨大的头部滴着黑色的粘液。这个生物通过一根扭曲的脐带与圆柱相连。

水晶圆柱体碎裂开来，无数微小的光芒从中涌出。这些明亮的灵魂像旋风一样在空中盘旋，向上燃烧，然后以耀眼的幽灵闪光消失。

房间中间相对的两个阳台上散落着装饰华丽的玻璃瓶、有槽纹的银质大罐、象牙宝箱以及其他容器——所有这些容器上都刻有恶毒的符号。

一个装饰华丽的拱门笼罩在这个阳台上。其框架上铸有狞笑的骷髅，并且发光的雾气在其中旋转。

一个骷髅般的身形，裹着腐烂的长袍，紧握着一个头骨尖端的法杖，出现在南阳台上。它眼眶中燃烧着充满恶意的白色针尖般的光芒，旁边空中悬浮着一个两尺直径的绝对黑暗球体。

"我们还会再见面的，傻瓜们！"巫妖说道。"到那时，你们将会死去！"说完，阿瑟瑞克举起他的法杖，念出一些神秘的音节，然后就消失了。

巫妖的脸上露出惊恐的表情，他的身体化为尘土。他破烂的长袍、法杖和护符都掉落在地上。`,dmGuidance:`当角色们走到楼梯底部时，请阅读：
如果角色们杀死了萎缩者，请阅读以下内容：
当角色对阿瑟瑞克进行攻击检定并命中时，攻击会额外造成3d6点心灵伤害。
如果角色们在阿瑟瑞克有机会逃跑之前成功杀死他，请阅读以下内容：`,mapGeometry:{imageRef:"adventure/ToA/090-521.webp"},offerableQuestIds:["qst_main_toa"]},{id:"scn_50d",locationId:"loc_4d7",name:"78. 仇恨礼拜堂",activation:{condition:{type:"always"},priority:0},skeleton:["任何生物通过区域77中的迷雾之门，都会从这个房间南墙上的类似拱门中出现。","这个门也允许返回到区域77。","你从雾中走出，来到一个地下礼拜堂，这里有黑色的玄武岩柱子和一个抛光过的黑曜石祭坛。","祭坛上放着一个皮革袋，大小和形状像一个人的身体，看起来已经被缝上了。","祭坛后面，从拱门上垂挂着一道沉重的黑色帘幕。"],flesh:`任何生物通过区域77中的迷雾之门，都会从这个房间南墙上的类似拱门中出现。这个门也允许返回到区域77。

一旦萎缩者吸取了足够多的灵魂，阿瑟瑞克计划用一个值得的祭品的血来给它洗礼。这个礼拜堂就是为了那个黑暗的仪式而建造的。缝制姐妹获得了一个合适的祭品，并将其缝制在祭坛上休息的皮革人体袋里。

任何被摩亚或望戈的灵魂附身的角色在进入这个区域时会收到建议：

仁慈的摩亚建议释放被锁链束缚的生物。

暴力的望戈敦促他的宿主刺破那个身体袋，确保里面的任何东西都死了。

这个皮革身体袋可以被割开，露出一个昏迷的囚犯，其身份由你来决定。可能是阿图斯·辛贝尔，龙饵，沃洛塔姆·盖达尔姆，或者是角色们从未有机会遇见的其他NPC。它也可能是在冒险过程中与队伍失散的NPC。

如果没有合适的NPC出现在脑海中，可以使用一个名为扎尔德·费尔隆德（LG男性特提里安人类骑士，信仰托姆，没有盔甲或武器）的被俘获的铁手套团成员。扎尔德的故事是，他在丛林巡逻时被缝制姐妹绑架。如果被释放，他请求护送他回到复仇营地（见第二章）。

夜鬼婆的魔法使囚犯保持存活并昏迷。通过一次成功的DC 17智力（奥秘或宗教）检定，角色可以确定只有给囚犯泼洒圣水才能结束该效果。

被锁在小教堂墙上的生物是八只诺斯怪——他们是阿瑟瑞克的前信徒，因试图学习主人的奥术秘密而失去了理智。这些诺斯怪被锁链束缚，在获得自由之前无法进行近战攻击。他们会说地底通用语并要求被释放。

夜鬼婆寡妇格罗特（见区域71）携带着诺提枷锁的钥匙，这些枷锁也可以通过角色使用盗贼工具成功通过DC 13敏捷检定撬开，或者用强力武器打击破坏。

如果解放者询问他们，他们还会提供以下有用的信息：

'

'`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_artus_cimber","npc_dragonbait","npc_mister_threadneedle","npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:["enc_50d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[186],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`你从雾中走出，来到一个地下礼拜堂，这里有黑色的玄武岩柱子和一个抛光过的黑曜石祭坛。祭坛上放着一个皮革袋，大小和形状像一个人的身体，看起来已经被缝上了。祭坛后面，从拱门上垂挂着一道沉重的黑色帘幕。
八个瘦弱的、皮肤呈绿色的生物被锁在礼拜堂的墙壁上，每一个都用一只充满恶意的眼睛凝视着你。这些怪物开始发出尖声尖叫和流口水，当它们摇晃着镣铐时，渴望被释放。`,dmGuidance:`如果角色们忽视诺斯的要求，这些怀恨在心的生物将使用他们可怕的腐烂凝视攻击他们。
如果角色们释放了他们，诺斯会在礼拜堂里闲逛，并且不会打扰队伍。
如果角色们正在寻找通往墓穴的出口，其中一个诺斯怪跳到黑色帘幕旁边，拉开帘子，指向北方的隧道（区域79），并喊道（用下界语）：'小心骨头！
如果角色们正在寻找宝藏，另一个诺斯怪执行与上述相同的动作，除了它喊道：'跟随紫色的踪迹！`},{id:"scn_512",locationId:"loc_4d7",name:"79. 最终之厅",activation:{condition:{type:"always"},priority:0},skeleton:["帘子后面是一条十尺宽、四十五尺长的走廊，设有四个装饰性的拱门，拱门内是空白的墙壁。","三条分别用红色、金色和紫色瓷砖铺成的小径蜿蜒穿过地板，每条小径通向其中一个拱门。","地上有一具烧焦的骷髅指向第四个拱门，没有路径通向它。","走廊尽头的墙上有一个火把在燃烧。","在其下方安装着一块铜牌，上面用通用语刻着警告：'看那些违抗我的人的命运！"],flesh:`只要火把保持在这个走廊里，它就会一直亮着并且不会燃烧完。如果从大厅拿走，它就会正常燃烧。

任何被艾金或莎根比灵魂附身的角色在进入这个区域时会收到建议：

善变的艾金希望她的宿主沿着铺有紫色瓷砖的小径走，看看它会通向哪里。（紫色是艾金目前最喜欢的颜色。）

睿智的莎根比敦促她的宿主不要偏离铺瓷砖的小径。

烧焦的骷髅指向一个隐藏着秘密门的拱门，门滑开后会显露出区域81。

打开秘密门会触发一个 en=Glyph of Warding 法术，该法术以门为中心，针对半径20英尺范围内的所有生物。该球形区域可以绕过角落扩散。区域内的每个生物必须进行一次 DC 24 敏捷豁免，豁免失败则受到22点（5d8）寒冷伤害，豁免成功则只受到一半伤害。触发刻文位于门的右下角，可以通过一次成功的 DC 24 智力（调查）检定发现。

当en=Glyph of Warding法术被激活或被解除时，一道魔法火墙会在走廊的南端突然出现，如果黑色的窗帘还挂在那里，它也会被点燃。火墙横跨整个大厅的宽度和高度。任何进入火墙的生物，在其内部开始回合的生物，或者在火墙北侧5尺内开始回合的生物都会受到22（5d8）点火焰伤害。

当火墙出现时，在场的所有生物都应进行先攻检定。每轮在先攻值为15时，火墙向北移动10英尺，仅在距离北墙5英尺时停止。火墙持续存在，直到走廊中没有生物，或成功使用en=Dispel Magic（DC 14）解除。

金色瓷砖的路径通向西墙上的拱门，那里藏有一扇密门。任何佩戴在区域2找到的眼形护符的角色都能无需检定就发现这扇密门，并且可以触发陷阱（见下文）的情况下打开它。密门后是一条布满灰尘和蛛网的走廊，里面回荡着甜美的扬琴乐声。当接近区域80时，音乐声会逐渐变大。

打开秘密门会触发一个en=Glyph of Warding法术，该法术以门为中心的20英尺半径球体内的所有生物为目标。该球体会绕过角落。区域内的每个生物必须进行一次DC 24敏捷豁免检定，失败则受到22（5d8）点雷鸣伤害，成功则受到一半的伤害。触发刻文位于门的右下角，可以通过成功的DC 24智力（调查）检定发现。

一条由紫色瓷砖铺成的小径通向大厅最北端的拱门。如果一个角色沿着小径行走而不踏出界外，然后触摸拱门内的墙壁，墙壁就会变成厚泥状，持续1小时。在这个效果持续期间，任何穿过墙壁的生物，或者被推进墙壁的物体，都会从区域80壁龛的后墙出现。

红砖铺就的小径在走廊最南端的拱门前结束。沿着红砖小径行走且从未离开过它的生物，一旦触摸拱门内的墙壁，就会被吸入墙壁，并被不客气地扔进区域57。`,spotlightRefs:[],presentNpcIds:["npc_dragonbait","npc_mister_threadneedle","npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[187],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`帘子后面是一条十尺宽、四十五尺长的走廊，设有四个装饰性的拱门，拱门内是空白的墙壁。三条分别用红色、金色和紫色瓷砖铺成的小径蜿蜒穿过地板，每条小径通向其中一个拱门。地上有一具烧焦的骷髅指向第四个拱门，没有路径通向它。
走廊尽头的墙上有一个火把在燃烧。在其下方安装着一块铜牌，上面用通用语刻着警告：'看那些违抗我的人的命运！'`},{id:"scn_51c",locationId:"loc_4d7",name:"80. 红图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["角色们可能通过东边的隧道到达这里，或者如果他们激活了区域79中的紫色小径拱门，也可以通过西南角的壁龛来到这里。","轻柔的扬琴乐声充满了这个房间，墙壁被漆成干涸血液的颜色。","布满蛛网和灰尘的书架沿墙排列，房间中央还有四排书架。","数百本皮革装订的典籍压弯了它们下陷的架子。","在房间的一端，一个小书房里放着一张带软垫的皮椅、一个脚凳和一张小桌子——还有三具尸体倒吊在靠近北墙天花板的镣铐和锁链上。"],flesh:`角色们可能通过东边的隧道到达这里，或者如果他们激活了区域79中的紫色小径拱门，也可以通过西南角的壁龛来到这里。

图书馆收藏了一百位智者的感知，以及一些法术书和卷轴（见下文的"宝藏"部分）。

沿着北墙悬挂的尸体是三位试图干涉 阿瑟瑞克 事务的大法师的遗骸。一次成功的 DC 12 感知（医药）检定可以确认这三个人都在过去一个月内死亡，而毁灭性法术是他们的死因。

坐在椅子上睡觉的老人是一只受到其en=Alter Self法术影响的奥法罗斯魔。这个恶魔的腿上摊开着图书馆的一本法术书，假装在睡觉。如果有人接近，这个人似乎会醒来并问："你为什么打扰我？"这个生物不会透露它的真实名字，而是自称为"狐狸先生"。奥法罗斯魔被阿瑟瑞克的魔法束缚在图书馆里，不能离开，也不能允许图书馆的任何书籍或卷轴被拿走。

如果任何角色在恶魔能听到的范围内说出了奥法罗斯魔的真实姓名（"Ygga Raxyg"；见区域71），它将被震慑1分钟。一旦震慑效果消失，重复说出奥法罗斯魔的名字在接下来的24小时内对它没有效果。如果被杀死，奥法罗斯魔会融化成一滩粘液，留下它的长袍和角框眼镜（见下文的"宝藏"）。

房间西南角的壁龛是空的。如果紫色小径尽头的魔法仍然处于激活状态（见区域79），壁龛的后墙具有浓稠泥浆的一致性。任何穿过墙壁的生物，或者任何被推过墙壁的物体，都会从区域79的最北端拱门出现。

这个奥法罗斯魔的角框眼镜没有魔法，但它们价值250金币。眼镜也是一个门户钥匙，可以打开位于位面城市西吉尔的传送门。这个传送门是通往世外桃源位面的双向门。对眼镜施放en=Legend Lore法术可以揭示这些信息，如果将它们卖给法师或贤者，它们的潜在价值可以提升到2500金币。

桌上的物品是一个由深色木材与金丝镶嵌制成的音乐盒。施展en=Detect Magic法术或类似效果会显示其周围环绕着咒法系魔法灵光。盒子的五个侧面各雕刻着一位有角女性演奏不同乐器的图案：分别是扬琴、长笛、竖琴、里拉琴和提琴。当生物接触音乐盒时，可用一个动作使其演奏展示乐器之一的音乐声（60尺内可听闻），亦可用动作停止演奏。该音乐盒价值750金币。

这个图书馆包含两百本历史文本（每本50金币），六十本奥术知识书籍（每本100金币），三卷尘封的法术卷轴（en=Create Undead、en=Fabricate和en=Resurrection），以及六本法术书。前三本法术书每本包含1d6个1级到3级的法术。第四和第五本法术书每本包含1d4个4级到6级的法术。第六本法术书的书脊上烙有标题（神秘者X的奥术魔典），包含1d3个7级到9级的法术。`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_dragonbait","npc_mister_threadneedle","npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:["enc_51c"],treasureSlotIds:["trs_51c_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[188],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"轻柔的扬琴乐声充满了这个房间，墙壁被漆成干涸血液的颜色。布满蛛网和灰尘的书架沿墙排列，房间中央还有四排书架。数百本皮革装订的典籍压弯了它们下陷的架子。在房间的一端，一个小书房里放着一张带软垫的皮椅、一个脚凳和一张小桌子——还有三具尸体倒吊在靠近北墙天花板的镣铐和锁链上。桌上放着一个灯笼形状的装置，似乎是音乐的来源。一位老人躺在椅子上睡着了，他的角质框眼镜滑到了鼻尖。"},{id:"scn_520",locationId:"loc_4d7",name:"81. 乌木池",activation:{condition:{type:"always"},priority:0},skeleton:["这个寂静的房间内，一池漆黑的软泥在闪烁，墙壁上装饰着浮雕雕刻，描绘着黑色的星星。","这个水池散发出一种召唤魔法的光环，可以通过en=Detect Magic法术或类似的效果检测到。","接触到软泥的生物不会受到伤害。","任何没有被生物穿戴或携带的物品，如果被浸入黑色软泥中，就会消失。","这些物品被永久性地丢失了，因为它们被传送到了一个秘密的半位面，其位置无法被探测到。"],flesh:`这个水池散发出一种召唤魔法的光环，可以通过en=Detect Magic法术或类似的效果检测到。接触到软泥的生物不会受到伤害。任何没有被生物穿戴或携带的物品，如果被浸入黑色软泥中，就会消失。这些物品被永久性地丢失了，因为它们被传送到了一个秘密的半位面，其位置无法被探测到。从池中移除的任何数量的软泥会立即消失。

佩吉·死铃（在区域71）和针线先生（在区域74）拥有可以用来激活水池的黑色大理石。如果将这些黑色大理石之一扔进水池，阅读：

任何触摸到软泥方尖碑的生物，连同它穿戴和携带的所有物品，都会被传送到墓穴入口外10尺范围内的一个未被占据的空间内（区域1）。这种效果不受阻止墓穴内传送法术运作的魔法结界的影响。

软泥方尖碑在1分钟后重新沉入水池并消失。再扔一颗黑色大理石到水池中会导致方尖碑重新形成。`,spotlightRefs:[],presentNpcIds:["npc_mister_threadneedle","npc_dragonbait","npc_valindra_shadowmantle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[189],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个寂静的房间内，一池漆黑的软泥在闪烁，墙壁上装饰着浮雕雕刻，描绘着黑色的星星。

黑色大理石沉入软泥中，软泥突然升起形成一个四尺高的黑色方尖碑——这是坟墓入口外矗立的方尖碑的微型版本。`},{id:"scn_524",locationId:"loc_4d7",name:"结局",activation:{condition:{type:"always"},priority:0},skeleton:["摧毁灵魂收割器将释放其中被困住的灵魂，并结束阿瑟瑞克的死亡诅咒。","完成这一目标的角色将拯救许多生命，如果他们的英雄事迹传播开来，富裕且有影响力的NPC将带着感谢的礼物前来。","这些礼物可以采取多种形式，包括土地和特殊恩惠。","阿瑟瑞克在墓穴中放置了四件宝藏作为诱饵：黑蛋白石王冠、扎尔特克之眼、月亮的肚脐和奇加克雷的骷髅圣杯。","这些物品可以保留、出售给有兴趣的买家，或归还给它们的合法所有者。"],flesh:`摧毁灵魂收割器将释放其中被困住的灵魂，并结束阿瑟瑞克的死亡诅咒。完成这一目标的角色将拯救许多生命，如果他们的英雄事迹传播开来，富裕且有影响力的NPC将带着感谢的礼物前来。这些礼物可以采取多种形式，包括土地和特殊恩惠。

阿瑟瑞克在墓穴中放置了四件宝藏作为诱饵：黑蛋白石王冠、扎尔特克之眼、月亮的肚脐和奇加克雷的骷髅圣杯。这些物品可以保留、出售给有兴趣的买家，或归还给它们的合法所有者。

奥穆的元提族正在寻找这件宝藏。如果他们不能从角色们手中夺走它，他们会试图从角色们出售给的个人那里购买或偷走皇冠。皇冠是否拥有释放夜蛇邓达尔的力量由你决定。如果皇冠落入错误之手，角色们可能需要冒险进入火焰峰下的洞穴，在世界末日之前取回它。

黄旗公司在试图获取这颗失落的宝石时被击败，传说它拥有复活古代死者的力量。如果扎尔特克之眼确实拥有这样的力量，它需要大量的牺牲才能发挥作用。斑猫人小偷可能会试图偷走这颗宝石，并安全地带回马兹提卡，或许用它交换被奴役的亲人的释放。相反，一个恶棍可能会购买这颗宝石，并用它来复活一个死去的暴君、邪恶的大法师，或者某个更大的威胁。

可能会引发一场竞购战，或者派出刺客去取回石头，并悄无声息地处理掉它的新主人。这块石头是否具有传说中让时间和命运分离的家庭重聚的力量，完全取决于你。

姆瓦克丝娜瑞公主无法支付这些宝藏的价值，并且如果角色将其出售给别人，她会对他们心生怨恨。南扎路港的三位商人王子对购买这个圣杯表示兴趣：伊方·塔若阿想将其添加到他的楚尔坦文物私人收藏中，克薇欧泽想将其熔化，而绛则出于情感原因想要它。拒绝他们的任何一人对角色来说都将是一个严重的错误，并可能导致他们收到一个不祥的伊特帕卡社会令牌。

某些魔法物品——特别是那些居住着九位诡计之神灵魂的物品——一旦离开坟墓就会化为灰烬并被摧毁。这些物品包括奥博娜卡的 防护戒指 (区域10)，摩亚的 巨蟒法杖 (区域14)，望戈的 恐惧之锤 (区域16)，帕帕扎图的 健康护符 (区域22)，娜浪的蛋形 法力再生珍珠 (区域24)，艾金号形的 惊异魔杖 (区域35)，库巴赞的 射手护腕 (区域42)，莎根比的 吟游诗人乐器 (区域48)，以及安珂的 虹光法袍 (区域55)。

如果您认为，某位玩家在扮演恶作剧之神的缺陷方面做得非常出色，这位神明的精神可能会奖励该玩家的角色，允许它的魔法物品存在于墓穴之外，前提是当角色离开墓穴时，他与物品已经调谐。

幸存于九神之墓的角色们在返回南扎路港、使用如en=Scrying法术监视她，或通过en=Sending法术或类似魔法与她联系之前，不会知道辛德拉·席尔瓦因的命运。如果辛德拉死了，但她的灵魂在萎缩者吞噬之前被救出，她会在灵魂收割者被摧毁后的十天内复活，并履行她与队伍的协议。如果辛德拉死了，她的灵魂被吞噬，她的遗体将等待葬礼和适当的安葬。

阿图斯·辛贝尔 不愿意放弃 凛冬戒指。他有理由担心这枚戒指会支配和控制任何其他拥有者。此外，如果没有戒指，阿图斯将作为一个正常人类开始衰老，他希望与他心爱的阿莉桑德拉永生。

藏妲拉、竖琴手、忠于Jarl 斯托瓦尔德的霜巨人以及散塔林会不会停止寻找凛冬戒指。瓦琳朵拉·暗影斗篷和Thay的红袍法师也不会错过用武力夺取戒指的机会。

无论是否拥有戒指，阿图斯·辛贝尔 继续等待梅兹罗的归来，同时寻找到达或召唤这个流离失所城市的方法。没有什么比与他的妻子团聚更重要了。有兴趣帮助阿图斯的角色可以使用占卜法术或在闲暇时间进行研究。他们也可以与竖琴手协商，竖琴手可以接触到可能帮助阿图斯完成任务的传说，但他们要求以戒指作为交换。在竖琴手的帮助和戒指之间做出选择时，阿图斯选择了后者。或者，通往梅兹罗半位面的传送门可能隐藏在楚尔特的某个地方，为一个精彩的新冒险播下了种子。

如果他和角色们一起从九神之墓逃脱，龙饵渴望把奥穆和这次冒险抛在身后。只要阿图斯·辛贝尔还活着，龙饵就仍然致力于帮助他的朋友找到流离失所的梅兹罗城。如果Artus死了，没有复活的希望，龙饵选择返回南扎路港，在那里他先在几桶特吉酒中沉溺于悲伤，然后享受一些休息时间。这位蜥蜴人挥别队伍时散发出玫瑰的香味。他最终与沃洛桑普·格达尔姆相遇，两位探险家一起踏上了无数次的冒险之旅。

灵魂收割者的毁灭让瓦琳朵拉·暗影斗篷感到恼怒。她使用她的en=Teleportation Circle返回泰雅，并通知萨扎斯坦她在楚尔特的任务失败了。萨扎斯坦因队伍的干预而愤怒，派遣新的特工和强大的不死生物去监视角色们，了解他们的弱点，并（最终）除掉他们。

阿瑟瑞克将自己的护身符隐藏起来，无论是神明还是法术都无法探知其位置。如果他的物理身体被摧毁，阿瑟瑞克将在1d10天后在他的护身符旁重新形成。这位巫妖并不急于报复失败。他更愿意让时间——他最强大的盟友——来消灭冒险者。一旦他们死去并消失，他就会出发让他的后代生活变得痛苦。

这标志着《湮灭之墓》的结束。`,spotlightRefs:[],presentNpcIds:["npc_acererak","npc_ifan_talro_a","npc_zhanthi","npc_syndra_silvane","npc_artus_cimber","npc_xandala","npc_valindra_shadowmantle","npc_dragonbait","npc_mister_threadneedle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[189],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们允许萎缩者在墓穴深处存活，它最终将吸引阿瑟瑞克的虚无主义追随者，他们将用自己的黑暗灵魂喂养它作为养分。
当角色探索墓穴时，他们很可能会找到一件或多件传说中的宝藏，以及被奥穆死去的恶作剧神灵所居住的魔法物品。
当角色离开墓穴时，这些物品会发生什么情况在下文中讨论。
如果角色们试图在博德之门、南扎路港或其它城市出售这块石头，有关销售的消息很快就会传到富有的卡利什商人的间谍耳中。
如果角色们摧毁了灵魂收割者而辛德拉还活着，祭司们会迅速恢复她的健康，角色们可以领取他们承诺的奖励。
如果角色们带着阿图斯回到文明世界，他们应该在路上遇到这些团体中的一个或多个。
如果角色们与竖琴手或散塔林会有友好关系，为其中一个派系工作的间谍会了解到红袍法师的阴谋，并可以警告角色们。
由于篇幅限制，我们无法完整探索楚尔特，但您可以创建自己的基于楚尔特的冒险，并在地下城主公会（www.dmsguild.com）上发布。`}],o=[{id:"npc_acererak",name:"阿瑟瑞克",aliases:["Acererak"],role:"建造九神之墓与灵魂收割者的巫妖",plotCritical:!0,initialAttitude:-3,personality:"把凡人死亡视为实验材料，只有萎缩者被杀才亲自现身复仇。",voice:"以冷静、蔑视而近乎学术的口吻评价入侵者。",skeleton:["它们为阿瑟瑞克服务，并接受他的不死生物墓穴管理员威瑟斯的命令（见第五章）。","奥穆血腥的试炼吸引了阿瑟瑞克的注意，他是一位在宇宙中漫游寻找灵魂收割的巫妖。","喜欢死亡陷阱的阿瑟瑞克对奥穆人设计的试炼感到惊奇。","一百多年前，阿瑟瑞克进入了奥穆并杀死了所有九位诡计之神。","当坟墓完成后，阿瑟瑞克杀害了奥穆人并将他们与他们的假神一起封在坟墓里。","为了维护神庙的陷阱，阿瑟瑞克招募了一个狗头人部落作为神庙的修理者。","Acererak（湮灭之墓具名人物，数据见固定图鉴来源 p209）。"],flesh:"它们为阿瑟瑞克服务，并接受他的不死生物墓穴管理员威瑟斯的命令（见第五章）。奥穆血腥的试炼吸引了阿瑟瑞克的注意，他是一位在宇宙中漫游寻找灵魂收割的巫妖。喜欢死亡陷阱的阿瑟瑞克对奥穆人设计的试炼感到惊奇。一百多年前，阿瑟瑞克进入了奥穆并杀死了所有九位诡计之神。当坟墓完成后，阿瑟瑞克杀害了奥穆人并将他们与他们的假神一起封在坟墓里。为了维护神庙的陷阱，阿瑟瑞克招募了一个狗头人部落作为神庙的修理者。",appearance:{tags:[],description:""},knownInfoIds:["info_toa_soulmonger","info_toa_acererak_revenge"],recruitable:!1,combatRef:"阿瑟瑞克|ToA",_meta:{sourcePages:[125,185,186],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/plotCritical/initialAttitude/personality/voice/homeLocationId/_meta；配置列入逐NPC来源复核清单"},homeLocationId:"loc_305"},{id:"npc_artus_cimber",name:"阿图斯·辛贝尔",aliases:["Artus Cimber"],role:"「瓦尔斯皮德」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"竖琴手同盟的前成员阿图斯·辛贝尔如今是冬之戒的持有者。",voice:"原书未另述固定声线；按「瓦尔斯皮德」中已记录的立场与行为说话。",skeleton:["其他十五名巨人分成了五个由三名巨人组成的搜索队，正在丛林中搜寻阿图斯·辛贝尔和凛冬戒指。","在采取任何行动之前，她会试图打探出角色对阿图斯·辛贝尔和这件神器的了解程度。","角色与巨人之间的任意遭遇如果在角色第一次遭遇阿图斯·辛贝尔之后发生会更加戏剧性。"],flesh:"其他十五名巨人分成了五个由三名巨人组成的搜索队，正在丛林中搜寻阿图斯·辛贝尔和凛冬戒指。在采取任何行动之前，她会试图打探出角色对阿图斯·辛贝尔和这件神器的了解程度。角色与巨人之间的任意遭遇如果在角色第一次遭遇阿图斯·辛贝尔之后发生会更加戏剧性。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[212],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_12b"},{id:"npc_asharra",name:"阿莎尔",aliases:["Asharra"],role:"「基尔·萨巴尔」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"阿莎尔聪明、野心勃勃，并且有些操纵欲，但从不残忍或冷漠。",voice:"原书未另述固定声线；按「基尔·萨巴尔」中已记录的立场与行为说话。",skeleton:["这个社群的领袖是一只极其年长的鸟人，名叫阿莎尔。","阿莎尔聪明、野心勃勃，并且有些操纵欲，但从不残忍或冷漠。",`阿莎尔是一只鸟羽人，但有以下变化：

阿莎尔 是守序中立的。`,"阿莎尔 是一个5级施法者，使用感知作为她的施法属性（法术豁免 DC 13；","阿莎尔可以提供方向，但她不允许她的人民靠近废墟，因为那里有已知居住的邪恶、有智慧的鹤（魔王鹤）。","鸟羽人族说他们这样做完全是出于楚特的未来，但阿莎尔秘密希望，如果楚特王国得以复兴，鸟羽人族将能在其中担任关键角色。"],flesh:`这个社群的领袖是一只极其年长的鸟人，名叫阿莎尔。阿莎尔聪明、野心勃勃，并且有些操纵欲，但从不残忍或冷漠。阿莎尔是一只鸟羽人，但有以下变化：

阿莎尔 是守序中立的。阿莎尔 是一个5级施法者，使用感知作为她的施法属性（法术豁免 DC 13；阿莎尔可以提供方向，但她不允许她的人民靠近废墟，因为那里有已知居住的邪恶、有智慧的鹤（魔王鹤）。鸟羽人族说他们这样做完全是出于楚特的未来，但阿莎尔秘密希望，如果楚特王国得以复兴，鸟羽人族将能在其中担任关键角色。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_13f"},{id:"npc_azaka_stormfang",name:"婀扎卡·风暴之牙",aliases:["Azaka Stormfang"],role:"「火指」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：如果婀扎卡·风暴之牙（见第一章）与角色们在一起，她坚持要他们攻击尖塔。",voice:"原书未另述固定声线；按「火指」中已记录的立场与行为说话。",skeleton:["如果婀扎卡·风暴之牙（见第一章）与角色们在一起，她坚持要他们攻击尖塔。"],flesh:"如果婀扎卡·风暴之牙（见第一章）与角色们在一起，她坚持要他们攻击尖塔。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[33],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_0e6"},{id:"npc_bag_of_nails",name:"钉包",aliases:["Bag of Nails"],role:"「倒下的树」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"钉包渴望像真正的猎人那样死去。",voice:"原书未另述固定声线；按「倒下的树」中已记录的立场与行为说话。",skeleton:["一个名叫钉包的老年斑猫猎人会在角色试图在这里涉水过河时伏击他们。","钉包渴望得到一个猎人的死亡。",`钉包是一个斑猫人族的刺客，有以下变化：

钉包是混乱中立。`,"如果钉包的生命值降至最大生命值的一半以下，他会向敌人投降，带领他们前往他的巢穴（一个废墟地下室），并以友谊的名义提供炖菜。"],flesh:`一个名叫钉包的老年斑猫猎人会在角色试图在这里涉水过河时伏击他们。钉包渴望得到一个猎人的死亡。钉包是一个斑猫人族的刺客，有以下变化：

钉包是混乱中立。如果钉包的生命值降至最大生命值的一半以下，他会向敌人投降，带领他们前往他的巢穴（一个废墟地下室），并以友谊的名义提供炖菜。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"钉包|ToA",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_22c"},{id:"npc_bosco_daggerhand",name:"博斯科·匕手",aliases:["Bosco Daggerhand"],role:"「贾哈卡锚地」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：除了海盗船员外，贾哈卡锚地还有少数海盗听从酒馆老板博斯科·匕手（区域6A）的指挥——仅仅因为他是麦酒的主人。",voice:"原书未另述固定声线；按「贾哈卡锚地」中已记录的立场与行为说话。",skeleton:["除了海盗船员外，贾哈卡锚地还有少数海盗听从酒馆老板博斯科·匕手（区域6A）的指挥——仅仅因为他是麦酒的主人。"],flesh:"除了海盗船员外，贾哈卡锚地还有少数海盗听从酒馆老板博斯科·匕手（区域6A）的指挥——仅仅因为他是麦酒的主人。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"博斯科·匕手|ToA",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_130"},{id:"npc_dragonbait",name:"龙饵",aliases:["Dragonbait"],role:"「结局」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"龙饵是一名善良斗士，也是一名类蜴人——一个起源于遥远世界并且长寿的种族。",voice:"原书未另述固定声线；按「结局」中已记录的立场与行为说话。",skeleton:["如果他和角色们一起从九神之墓逃脱，龙饵渴望把奥穆和这次冒险抛在身后。","只要阿图斯·辛贝尔还活着，龙饵就仍然致力于帮助他的朋友找到流离失所的梅兹罗城。","如果Artus死了，没有复活的希望，龙饵选择返回南扎路港，在那里他先在几桶特吉酒中沉溺于悲伤，然后享受一些休息时间。"],flesh:"如果他和角色们一起从九神之墓逃脱，龙饵渴望把奥穆和这次冒险抛在身后。只要阿图斯·辛贝尔还活着，龙饵就仍然致力于帮助他的朋友找到流离失所的梅兹罗城。如果Artus死了，没有复活的希望，龙饵选择返回南扎路港，在那里他先在几桶特吉酒中沉溺于悲伤，然后享受一些休息时间。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[218],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_4d7"},{id:"npc_drufi",name:"德鲁菲",aliases:["Drufi"],role:"「瓦尔斯皮德」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：其中一名霜巨人猎人是瓦尔斯皮德的船长，德鲁菲（NE女性霜巨人）。",voice:"原书未另述固定声线；按「瓦尔斯皮德」中已记录的立场与行为说话。",skeleton:["其中一名霜巨人猎人是瓦尔斯皮德的船长，德鲁菲（NE女性霜巨人）。","应她的主人，Jarl 斯托瓦尔德的要求，德鲁菲带领这次探险队来取回戒指。","他相信有了凛冬戒指，他可以冻结世界，带来永久冰河时代的来临——这个美妙的梦想让德鲁菲专注于手头的任务。","德鲁菲的搜索队包括两名雄性霜巨人和一对冬狼。","德鲁菲 从远处看到了贝路利安堡，从提尔基河口对面看到了南扎路港，但巨人避开了烈焰之拳的巡逻队。","显然，这是搜索像楚尔特这样大而密集的地区的一种非常低效的方式，但德鲁菲没有更好的主意。"],flesh:"其中一名霜巨人猎人是瓦尔斯皮德的船长，德鲁菲（NE女性霜巨人）。应她的主人，Jarl 斯托瓦尔德的要求，德鲁菲带领这次探险队来取回戒指。他相信有了凛冬戒指，他可以冻结世界，带来永久冰河时代的来临——这个美妙的梦想让德鲁菲专注于手头的任务。德鲁菲的搜索队包括两名雄性霜巨人和一对冬狼。德鲁菲 从远处看到了贝路利安堡，从提尔基河口对面看到了南扎路港，但巨人避开了烈焰之拳的巡逻队。显然，这是搜索像楚尔特这样大而密集的地区的一种非常低效的方式，但德鲁菲没有更好的主意。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"德鲁菲|ToA",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_12b"},{id:"npc_ekene_afa",name:"艾珂内-阿法",aliases:["Ekene-Afa"],role:"「城市居民」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`交易武器、盾牌、旅行装备、雨水收集器、马鞍、马车和独木舟

艾珂内-阿法（守序善良女性Chultan人类角斗士）在南扎路港的竞技场赢得了众多角斗士比赛，之后她将奖金投资于她的首次贸易交易。`,voice:'原书对白/措辞样本：艾珂内-阿法出售各种非魔法武器和盾牌，但她的大部分库存由燧石匕首、带有木柄和黑曜石尖的yklwas（见"购买特殊物品"），以及由木框架和伸展在其上的爬行动物皮层制成的盾牌组成。',skeleton:[`交易武器、盾牌、旅行装备、雨水收集器、马鞍、马车和独木舟

艾珂内-阿法（守序善良女性Chultan人类角斗士）在南扎路港的竞技场赢得了众多角斗士比赛，之后她将奖金投资于她的首次贸易交易。`,'艾珂内-阿法出售各种非魔法武器和盾牌，但她的大部分库存由燧石匕首、带有木柄和黑曜石尖的yklwas（见"购买特殊物品"），以及由木框架和伸展在其上的爬行动物皮层制成的盾牌组成。',"艾珂内-阿法支付瓦康嘎·欧塔姆在这些物品中选择少数几个进行永久性附魔，她以魔法盾牌和武器出售表中列出的价格出售它们。","他嫉妒 瓦康嘎·欧塔姆 的魔法力量和 艾珂内-阿法 在竞技场中的声誉。"],flesh:`交易武器、盾牌、旅行装备、雨水收集器、马鞍、马车和独木舟

艾珂内-阿法（守序善良女性Chultan人类角斗士）在南扎路港的竞技场赢得了众多角斗士比赛，之后她将奖金投资于她的首次贸易交易。艾珂内-阿法出售各种非魔法武器和盾牌，但她的大部分库存由燧石匕首、带有木柄和黑曜石尖的yklwas（见"购买特殊物品"），以及由木框架和伸展在其上的爬行动物皮层制成的盾牌组成。艾珂内-阿法支付瓦康嘎·欧塔姆在这些物品中选择少数几个进行永久性附魔，她以魔法盾牌和武器出售表中列出的价格出售它们。他嫉妒 瓦康嘎·欧塔姆 的魔法力量和 艾珂内-阿法 在竞技场中的声誉。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[25],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_02e"},{id:"npc_eku",name:"依库",aliases:["Eku"],role:"「要做的事情」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`原书未单列性格；已知行为：伪装的羽蛇（南扎路港）

依库 是一只变形为中年Chultan女性的 羽蛇。`,voice:"原书未另述固定声线；按「要做的事情」中已记录的立场与行为说话。",skeleton:[`伪装的羽蛇（南扎路港）

依库 是一只变形为中年Chultan女性的 羽蛇。`,"在人类形态时，依库身着浅蓝色长袍，手持一根雕刻成风格化羽蛇形象的拐杖。","在这个形态中，依库身高5尺6英寸，体重110磅。","依库还知道守护Omu的邪恶石像鬼，尽管她从未与它们战斗过，以及Orolunga的守秘纳迦，其预言能力是传奇的。","依库对姆巴拉的人民怀有极大的爱和尊重，他们被一个名叫普普奶奶的绿巫婆欺骗并吃掉了。","依库认为这个巫婆是楚尔特最大的邪恶之一。"],flesh:`伪装的羽蛇（南扎路港）

依库 是一只变形为中年Chultan女性的 羽蛇。在人类形态时，依库身着浅蓝色长袍，手持一根雕刻成风格化羽蛇形象的拐杖。在这个形态中，依库身高5尺6英寸，体重110磅。依库还知道守护Omu的邪恶石像鬼，尽管她从未与它们战斗过，以及Orolunga的守秘纳迦，其预言能力是传奇的。依库对姆巴拉的人民怀有极大的爱和尊重，他们被一个名叫普普奶奶的绿巫婆欺骗并吃掉了。依库认为这个巫婆是楚尔特最大的邪恶之一。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[34],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_065"},{id:"npc_elok_jaharwon",name:"伊洛克·加哈望",aliases:["Elok Jaharwon"],role:"楚尔特与死亡诅咒相关人物",plotCritical:!1,initialAttitude:0,personality:"",voice:"",skeleton:["伊洛克·加哈望（湮灭之墓具名人物，数据见固定图鉴来源 p67）。"],flesh:"",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"伊洛克·加哈望|ToA",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；态度/声线待补；配置列入逐NPC来源复核清单"}},{id:"npc_faroul",name:"法鲁尔",aliases:["Faroul"],role:"「要做的事情」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`原书未单列性格；已知行为：无能的寻宝者（南扎路港）

法鲁尔（NG 男性 Calishite 人类 斥候）和 冈多洛（CG 男性 lightfoot halfling 斥候，生命值为13）是在南扎路港运气不佳的两个花花公子。`,voice:"原书未另述固定声线；按「要做的事情」中已记录的立场与行为说话。",skeleton:[`无能的寻宝者（南扎路港）

法鲁尔（NG 男性 Calishite 人类 斥候）和 冈多洛（CG 男性 lightfoot halfling 斥候，生命值为13）是在南扎路港运气不佳的两个花花公子。`,"被宠坏且自大的 法鲁尔 被他恼怒的父母送到南扎路港，并告诉他在那里发财。","带着满满的钱财和对冒险的渴望，法鲁尔 带来了他的饮酒伙伴 冈多洛。","在几个月内，他们在恐龙赛跑中挥霍了大部分法鲁尔的现金，并欠下了许多赌徒和几位商人王子的债务。","法鲁尔身高5尺10英寸，体重175磅。"],flesh:`无能的寻宝者（南扎路港）

法鲁尔（NG 男性 Calishite 人类 斥候）和 冈多洛（CG 男性 lightfoot halfling 斥候，生命值为13）是在南扎路港运气不佳的两个花花公子。被宠坏且自大的 法鲁尔 被他恼怒的父母送到南扎路港，并告诉他在那里发财。带着满满的钱财和对冒险的渴望，法鲁尔 带来了他的饮酒伙伴 冈多洛。在几个月内，他们在恐龙赛跑中挥霍了大部分法鲁尔的现金，并欠下了许多赌徒和几位商人王子的债务。法鲁尔身高5尺10英寸，体重175磅。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[34],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_065"},{id:"npc_fenthaza",name:"芬萨札",aliases:["Fenthaza"],role:"试图推翻拉兹·纳斯的蛇人梦魇语者",plotCritical:!0,initialAttitude:-1,personality:"野心勃勃，会利用俘虏寻找黑蛋白石皇冠并打击拉兹·纳斯。",voice:"以预言和交换条件包装每一项威胁。",skeleton:["然后，他和他的保镖们会护送角色们去见拉兹·纳斯或芬萨札。","雅胡喜欢政治游戏，利用角色来操纵拉兹·纳斯和芬萨札相互对立。","如果他们以平静、礼貌的方式作出反应，他们将被带到芬萨札那里。","芬萨札在她的住处（区域5）会见囚犯。","如果政变被挫败，芬萨札和她的同谋将被处死。","如果政变成功，芬萨札会得出结论认为角色们已经失去了利用价值，并试图除掉他们。"],flesh:"然后，他和他的保镖们会护送角色们去见拉兹·纳斯或芬萨札。雅胡喜欢政治游戏，利用角色来操纵拉兹·纳斯和芬萨札相互对立。如果他们以平静、礼貌的方式作出反应，他们将被带到芬萨札那里。芬萨札在她的住处（区域5）会见囚犯。如果政变被挫败，芬萨札和她的同谋将被处死。如果政变成功，芬萨札会得出结论认为角色们已经失去了利用价值，并试图除掉他们。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"芬萨札|ToA",_meta:{sourcePages:[112,117],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/plotCritical/initialAttitude/personality/voice/homeLocationId/_meta；配置列入逐NPC来源复核清单"},homeLocationId:"loc_298"},{id:"npc_flask_of_wine",name:"酒瓶",aliases:["Flask of Wine"],role:"「支线任务」中的具名角色",plotCritical:!1,initialAttitude:0,personality:'原书未单列性格；已知行为：罗卡还承诺将角色们引荐给两位荒野向导——名为河雾和酒瓶的斑猫人兄妹（参见"寻找向导"）——并支付向导费用。',voice:'原书对白/措辞样本：罗卡还承诺将角色们引荐给两位荒野向导——名为河雾和酒瓶的斑猫人兄妹（参见"寻找向导"）——并支付向导费用。',skeleton:['罗卡还承诺将角色们引荐给两位荒野向导——名为河雾和酒瓶的斑猫人兄妹（参见"寻找向导"）——并支付向导费用。'],flesh:'罗卡还承诺将角色们引荐给两位荒野向导——名为河雾和酒瓶的斑猫人兄妹（参见"寻找向导"）——并支付向导费用。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[35],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_02e"},{id:"npc_gondolo",name:"冈多洛",aliases:["Gondolo"],role:"「要做的事情」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`原书未单列性格；已知行为：无能的寻宝者（南扎路港）

法鲁尔（NG 男性 Calishite 人类 斥候）和 冈多洛（CG 男性 lightfoot halfling 斥候，生命值为13）是在南扎路港运气不佳的两个花花公子。`,voice:"原书未另述固定声线；按「要做的事情」中已记录的立场与行为说话。",skeleton:[`无能的寻宝者（南扎路港）

法鲁尔（NG 男性 Calishite 人类 斥候）和 冈多洛（CG 男性 lightfoot halfling 斥候，生命值为13）是在南扎路港运气不佳的两个花花公子。`,"带着满满的钱财和对冒险的渴望，法鲁尔 带来了他的饮酒伙伴 冈多洛。","在绝望中，冈多洛从一个发烧的探险家那里购买了一张藏宝图，这位探险家需要现金买票返回博德之门。","冈多洛 高3尺6英寸，重80磅（松软状态下）。"],flesh:`无能的寻宝者（南扎路港）

法鲁尔（NG 男性 Calishite 人类 斥候）和 冈多洛（CG 男性 lightfoot halfling 斥候，生命值为13）是在南扎路港运气不佳的两个花花公子。带着满满的钱财和对冒险的渴望，法鲁尔 带来了他的饮酒伙伴 冈多洛。在绝望中，冈多洛从一个发烧的探险家那里购买了一张藏宝图，这位探险家需要现金买票返回博德之门。冈多洛 高3尺6英寸，重80磅（松软状态下）。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[34],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_065"},{id:"npc_grabstab",name:"格拉布斯塔布",aliases:["Grabstab"],role:"「叶利亚克」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：四十个地精居住在村庄里：女王格拉布斯塔布（一个地精头目），二十四个成年地精，和十五个非战斗儿童。",voice:"原书未另述固定声线；按「叶利亚克」中已记录的立场与行为说话。",skeleton:["四十个地精居住在村庄里：女王格拉布斯塔布（一个地精头目），二十四个成年地精，和十五个非战斗儿童。"],flesh:"四十个地精居住在村庄里：女王格拉布斯塔布（一个地精头目），二十四个成年地精，和十五个非战斗儿童。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"格拉布斯塔布|ToA",_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_1ce"},{id:"npc_grandfather_zitembe",name:"泽腾贝爷爷",aliases:["Grandfather Zitembe"],role:"「支线任务」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：她所在神殿的首领泽腾贝爷爷虽然事务繁忙，但已准许她展开调查。",voice:"原书未另述固定声线；按「支线任务」中已记录的立场与行为说话。",skeleton:["她所在神殿的首领泽腾贝爷爷虽然事务繁忙，但已准许她展开调查。","若应允，角色们将见到泽腾贝爷爷（参见区域7）。"],flesh:"她所在神殿的首领泽腾贝爷爷虽然事务繁忙，但已准许她展开调查。若应允，角色们将见到泽腾贝爷爷（参见区域7）。",appearance:{tags:[],description:""},knownInfoIds:["info_toa_omu_vision"],recruitable:!1,_meta:{sourcePages:[20],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_02e"},{id:"npc_hew_hackinstone",name:"休·哈金斯顿",aliases:["Hew Hackinstone"],role:"「龙心矿井」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"这些狂战士来自蛮荒之地，性情难测，总是结成战团，走到哪儿就打到哪儿，到处寻衅挑事。",voice:'原书对白/措辞样本：休·哈金斯顿（见"寻找向导"，即"寻找向导"）希望重新夺回并重新开放这座矿井，他很高兴地招募角色们帮助他（或者在必要时不情愿地将他们卷入）。',skeleton:['休·哈金斯顿（见"寻找向导"，即"寻找向导"）希望重新夺回并重新开放这座矿井，他很高兴地招募角色们帮助他（或者在必要时不情愿地将他们卷入）。'],flesh:'休·哈金斯顿（见"寻找向导"，即"寻找向导"）希望重新夺回并重新开放这座矿井，他很高兴地招募角色们帮助他（或者在必要时不情愿地将他们卷入）。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[33],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_1af"},{id:"npc_ifan_talro_a",name:"伊方·塔若阿",aliases:["Ifan Talro'a"],role:"「城市居民」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`交易野兽和驯兽

伊方·塔若阿 (NE 男性 Chultan 人类 贵族) 是一个贪婪、狡猾的人，他得到了 散塔林会 中有影响力且危险的朋友的支持。`,voice:"原书未另述固定声线；按「城市居民」中已记录的立场与行为说话。",skeleton:[`交易野兽和驯兽

伊方·塔若阿 (NE 男性 Chultan 人类 贵族) 是一个贪婪、狡猾的人，他得到了 散塔林会 中有影响力且危险的朋友的支持。`,"伊方·塔若阿在南扎路港雇佣了数十名商人，他们不仅充当他的眼线，还出售驯化的野兽，这些野兽可用作伙伴、坐骑或驮兽。"],flesh:`交易野兽和驯兽

伊方·塔若阿 (NE 男性 Chultan 人类 贵族) 是一个贪婪、狡猾的人，他得到了 散塔林会 中有影响力且危险的朋友的支持。伊方·塔若阿在南扎路港雇佣了数十名商人，他们不仅充当他的眼线，还出售驯化的野兽，这些野兽可用作伙伴、坐骑或驮兽。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"伊方·塔若阿|ToA",_meta:{sourcePages:[25],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_02e"},{id:"npc_jessamine",name:"婕萨敏",aliases:["Jessamine"],role:"「城市居民」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`原书未单列性格；已知行为：从事植物、毒药和暗杀

婕萨敏（中立女性Chultan人类刺客，她的生命值上限降低至58）不常说话。`,voice:'原书对白/措辞样本：谋杀在南扎路港是非法的，就像几乎在任何地方一样，但婕萨敏垄断了"制裁"——即允许通过指定方法（通常是毒药或刀刺）进行杀戮的许可令。',skeleton:[`从事植物、毒药和暗杀

婕萨敏（中立女性Chultan人类刺客，她的生命值上限降低至58）不常说话。`,"然而，当议会在某个问题上意见分歧时，婕萨敏通常会投决定性的一票。","婕萨敏从事植物、草药、毒药和合法暗杀的交易。",'谋杀在南扎路港是非法的，就像几乎在任何地方一样，但婕萨敏垄断了"制裁"——即允许通过指定方法（通常是毒药或刀刺）进行杀戮的许可令。',"十二年前，婕萨敏与一位阿姆尼亚海员有过一段短暂而热烈的爱情。","在婕萨敏的严密监视下，家庭教师正在教授伊梅兹拉将来接管家族生意所需的技能。"],flesh:`从事植物、毒药和暗杀

婕萨敏（中立女性Chultan人类刺客，她的生命值上限降低至58）不常说话。然而，当议会在某个问题上意见分歧时，婕萨敏通常会投决定性的一票。婕萨敏从事植物、草药、毒药和合法暗杀的交易。谋杀在南扎路港是非法的，就像几乎在任何地方一样，但婕萨敏垄断了"制裁"——即允许通过指定方法（通常是毒药或刀刺）进行杀戮的许可令。十二年前，婕萨敏与一位阿姆尼亚海员有过一段短暂而热烈的爱情。在婕萨敏的严密监视下，家庭教师正在教授伊梅兹拉将来接管家族生意所需的技能。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"婕萨敏|ToA",_meta:{sourcePages:[26],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_02e"},{id:"npc_jobal",name:"乔巴",aliases:["Jobal"],role:"「城市居民」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"乔巴完全信任他，而Aazon的忠诚是无可指责的。",voice:"原书未另述固定声线；按「城市居民」中已记录的立场与行为说话。",skeleton:[`提供向导和雇佣兵服务

乔巴（NE 男性楚尔特人类 斥候）在作为野外向导时，因他所工作的团队发现了大量楚尔特黄金和珠宝而发了财。`,"奇迹般地，只有乔巴在不死生物和恐龙攻击的围攻中幸存下来，他乘坐满载着宝藏的独木舟返回南扎路港。","乔巴完全信任他，而Aazon的忠诚是无可指责的。","由于他与探险者的交易，乔巴 对楚尔特的地图有着浓厚的兴趣。","乔巴指派Aazon负责护送冒险者到他们感兴趣的向导那里。","乔巴不需要预付款，因为根据法律，南扎路港的所有向导都必须向他支付他们收入的合理份额。"],flesh:`提供向导和雇佣兵服务

乔巴（NE 男性楚尔特人类 斥候）在作为野外向导时，因他所工作的团队发现了大量楚尔特黄金和珠宝而发了财。奇迹般地，只有乔巴在不死生物和恐龙攻击的围攻中幸存下来，他乘坐满载着宝藏的独木舟返回南扎路港。乔巴完全信任他，而Aazon的忠诚是无可指责的。由于他与探险者的交易，乔巴 对楚尔特的地图有着浓厚的兴趣。乔巴指派Aazon负责护送冒险者到他们感兴趣的向导那里。乔巴不需要预付款，因为根据法律，南扎路港的所有向导都必须向他支付他们收入的合理份额。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[26],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_02e"},{id:"npc_king_of_feathers",name:"翎羽之王",aliases:["King of Feathers"],role:"「13. 露天剧场」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"被称为翎羽之王的巨型暴龙是奥姆无可争议的统治者。",voice:"原书未另述固定声线；按「13. 露天剧场」中已记录的立场与行为说话。",skeleton:["这个露天剧场是翎羽之王的巢穴，它是一只拥有魔法能力的强大的暴龙。","白天，翎羽之王有50的几率在圆形剧场休息。",`翎羽之王是一只长有羽毛的霸王龙，并具有以下变化：

翎羽之王是一个拥有200生命值的怪物。`,"King of Feathers（湮灭之墓具名人物，数据见固定图鉴来源 p106）。"],flesh:`这个露天剧场是翎羽之王的巢穴，它是一只拥有魔法能力的强大的暴龙。白天，翎羽之王有50的几率在圆形剧场休息。翎羽之王是一只长有羽毛的霸王龙，并具有以下变化：

翎羽之王是一个拥有200生命值的怪物。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"翎羽之王|ToA",_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_23c"},{id:"npc_kupalu",name:"库帕鲁艾",aliases:["Kupalué"],role:"「要做的事情」中的具名角色",plotCritical:!1,initialAttitude:0,personality:'原书未单列性格；已知行为：这位德鲁伊与一个名为Kupalué的孢子人伙伴同行，Kupalué是一个Chultan词汇，意思是"行走的杂草"。',voice:'原书对白/措辞样本：这位德鲁伊与一个名为Kupalué的孢子人伙伴同行，Kupalué是一个Chultan词汇，意思是"行走的杂草"。',skeleton:['这位德鲁伊与一个名为Kupalué的孢子人伙伴同行，Kupalué是一个Chultan词汇，意思是"行走的杂草"。'],flesh:'这位德鲁伊与一个名为Kupalué的孢子人伙伴同行，Kupalué是一个Chultan词汇，意思是"行走的杂草"。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[35],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_065"},{id:"npc_kwayoth",name:"克薇欧泽",aliases:["Kwayothé"],role:"「城市居民」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`原书未单列性格；已知行为：交易水果、葡萄酒、麦芽酒、特吉酒、油、香水和驱虫剂

克薇欧泽（NE女性楚尔特人祭司，佩戴着一枚火焰抗性戒指）以一种隐约带有威胁性的方式平静而深思。`,voice:"原书未另述固定声线；按「城市居民」中已记录的立场与行为说话。",skeleton:[`交易水果、葡萄酒、麦芽酒、特吉酒、油、香水和驱虫剂

克薇欧泽（NE女性楚尔特人祭司，佩戴着一枚火焰抗性戒指）以一种隐约带有威胁性的方式平静而深思。`,"克薇欧泽有两个情人——一个名叫Ixis的魅魔和一个名叫Indar的梦魔。","克薇欧泽在南扎路港的街头长大，贫穷且无依无靠。","尽管她很好地隐藏了自己的蔑视，克薇欧泽仍在不断地干涉绛则的事务和家庭事务。","如果绛则意识到克薇欧泽对她和她家人的敌意，她选择不表现出来。","克薇欧泽雇佣了商人自己制作特吉酒和驱虫剂。"],flesh:`交易水果、葡萄酒、麦芽酒、特吉酒、油、香水和驱虫剂

克薇欧泽（NE女性楚尔特人祭司，佩戴着一枚火焰抗性戒指）以一种隐约带有威胁性的方式平静而深思。克薇欧泽有两个情人——一个名叫Ixis的魅魔和一个名叫Indar的梦魔。克薇欧泽在南扎路港的街头长大，贫穷且无依无靠。尽管她很好地隐藏了自己的蔑视，克薇欧泽仍在不断地干涉绛则的事务和家庭事务。如果绛则意识到克薇欧泽对她和她家人的敌意，她选择不表现出来。克薇欧泽雇佣了商人自己制作特吉酒和驱虫剂。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"克薇欧泽|ToA",_meta:{sourcePages:[26],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_02e"},{id:"npc_laskilar",name:"拉斯基拉尔",aliases:["Laskilar"],role:"楚尔特与死亡诅咒相关人物",plotCritical:!1,initialAttitude:0,personality:"",voice:"",skeleton:["拉斯基拉尔（湮灭之墓具名人物，数据见固定图鉴来源 p67）。"],flesh:"",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"拉斯基拉尔|ToA",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；态度/声线待补；配置列入逐NPC来源复核清单"}},{id:"npc_liara_portyr",name:"莉尔阿·波提尔",aliases:["Liara Portyr"],role:"「派系及其代表」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"作为贝路利安堡的指挥官，莉尔阿的大部分时间都在和海盗达成协议，同时留意她的堡垒的安全问题。",voice:"原书未另述固定声线；按「派系及其代表」中已记录的立场与行为说话。",skeleton:["贝路利安堡的指挥官，也是楚尔特地区烈焰之拳组织中级别最高的成员是莉尔阿·波提尔（见附录D）。","博德之门的旗帜飘扬在贝路利安堡的上空，该堡垒由拉文加德的臣属莉尔阿·波提尔指挥的烈焰之拳雇佣兵驻守。"],flesh:"贝路利安堡的指挥官，也是楚尔特地区烈焰之拳组织中级别最高的成员是莉尔阿·波提尔（见附录D）。博德之门的旗帜飘扬在贝路利安堡的上空，该堡垒由拉文加德的臣属莉尔阿·波提尔指挥的烈焰之拳雇佣兵驻守。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"莉尔阿·波提尔|ToA",_meta:{sourcePages:[227],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_065"},{id:"npc_mister_threadneedle",name:"针线先生",aliases:["Mister Threadneedle"],role:"「74. 五边形试炼」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：那位瘦削的绅士是针线先生，缝合姐妹的男仆。",voice:"原书未另述固定声线；按「74. 五边形试炼」中已记录的立场与行为说话。",skeleton:["那位瘦削的绅士是针线先生，缝合姐妹的男仆。","针线先生 是一个被魔法伪装成人类的稻草人。","针线先生 懂得通用语但无法说话。","巫婆们得知冒险者的到来后，准备了这场魔法盛宴，并指示针线先生布置好。"],flesh:"那位瘦削的绅士是针线先生，缝合姐妹的男仆。针线先生 是一个被魔法伪装成人类的稻草人。针线先生 懂得通用语但无法说话。巫婆们得知冒险者的到来后，准备了这场魔法盛宴，并指示针线先生布置好。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"针线先生|ToA",_meta:{sourcePages:[183],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_4d7"},{id:"npc_musharib",name:"穆沙瑞卜",aliases:["Musharib"],role:"「要做的事情」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`白化侏儒（南扎路港）

穆沙瑞卜（守序善良男性白矮人精魂武者；`,voice:"原书未另述固定声线；按「要做的事情」中已记录的立场与行为说话。",skeleton:[`白化侏儒（南扎路港）

穆沙瑞卜（守序善良男性白矮人精魂武者；`,"穆沙瑞卜 身高4尺5英寸，体重140磅。"],flesh:`白化侏儒（南扎路港）

穆沙瑞卜（守序善良男性白矮人精魂武者；穆沙瑞卜 身高4尺5英寸，体重140磅。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[34],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_065"},{id:"npc_mwaxanar",name:"姆瓦克丝娜瑞",aliases:["Mwaxanaré"],role:"「基尔·萨巴尔」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"姆瓦克丝娜瑞自负、固执，并且急切地想要夺取她的王位。",voice:"原书对白/措辞样本：姆瓦克丝娜瑞相信，通过找回一个象征性重要但早已失传的宝藏——Ch'gakare的骷髅圣杯（见第五章），她能够获得广泛的支持来重新人口和重建奥穆。",skeleton:["十七岁的公主姆瓦克丝娜瑞（见附录D）是奥穆王室现存最年长的后裔，也是这个陷落王国的主要继承人。","姆瓦克丝娜瑞自负、固执，并且急切地想要夺取她的王位。","姆瓦克丝娜瑞并不是傻瓜；","姆瓦克丝娜瑞相信，通过找回一个象征性重要但早已失传的宝藏——Ch'gakare的骷髅圣杯（见第五章），她能够获得广泛的支持来重新人口和重建奥穆。","尽管鸟羽人对她很好，姆瓦克丝娜瑞仍然感到孤独；","这种依恋将是强烈、热烈且嫉妒的，而姆瓦克丝娜瑞习惯于得到她想要的一切。"],flesh:"十七岁的公主姆瓦克丝娜瑞（见附录D）是奥穆王室现存最年长的后裔，也是这个陷落王国的主要继承人。姆瓦克丝娜瑞自负、固执，并且急切地想要夺取她的王位。姆瓦克丝娜瑞并不是傻瓜；姆瓦克丝娜瑞相信，通过找回一个象征性重要但早已失传的宝藏——Ch'gakare的骷髅圣杯（见第五章），她能够获得广泛的支持来重新人口和重建奥穆。尽管鸟羽人对她很好，姆瓦克丝娜瑞仍然感到孤独；这种依恋将是强烈、热烈且嫉妒的，而姆瓦克丝娜瑞习惯于得到她想要的一切。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[228],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_13f"},{id:"npc_na",name:"Na",aliases:[],role:"「南戈尔」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"年轻的王子纳是一个AC 10、HP 3的非战斗人员。",voice:"原书未另述固定声线；按「南戈尔」中已记录的立场与行为说话。",skeleton:["在他们的时代，这个花园被称为Ka-Nanji，即梦幻悬挂花园。","Ka-Nanji是逃离奥穆的阴谋和压力的宫殿式隐居地，这个美丽的分层花园被誉为对女王的恰当致敬。","Nangalore位于Olung河半英里远的地方。","步行前往Nangalore是一场噩梦，因为1英里内的土地无非是泥泞的沼泽地。"],flesh:"在他们的时代，这个花园被称为Ka-Nanji，即梦幻悬挂花园。Ka-Nanji是逃离奥穆的阴谋和压力的宫殿式隐居地，这个美丽的分层花园被誉为对女王的恰当致敬。Nangalore位于Olung河半英里远的地方。步行前往Nangalore是一场噩梦，因为1英里内的土地无非是泥泞的沼泽地。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[228],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；2 形态并档 combatRef 链；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_166"},{id:"npc_nanny_pu_pu",name:"普普奶奶",aliases:["Nanny Pu'pu"],role:"「姆巴拉」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：普普奶奶，一个绿鬼婆，扮演着一个古老巫婆的角色。",voice:"原书未另述固定声线；按「姆巴拉」中已记录的立场与行为说话。",skeleton:["普普奶奶，一个绿鬼婆，扮演着一个古老巫婆的角色。","如果有人问她的名字，她需要好一会儿才能记起村民叫她普普奶奶。","普普奶奶并不完全孤单。","普普奶奶是骨头之主Myrkul的信徒，并且知道一种可以将死去的类人生物变成类似僵尸生物的变形仪式。","将死去的同伴带到姆巴拉的角色可以请求普普奶奶将他们变成行尸走肉。","普普奶奶 是楚尔特唯一能够执行偷来的生命仪式的生物。"],flesh:"普普奶奶，一个绿鬼婆，扮演着一个古老巫婆的角色。如果有人问她的名字，她需要好一会儿才能记起村民叫她普普奶奶。普普奶奶并不完全孤单。普普奶奶是骨头之主Myrkul的信徒，并且知道一种可以将死去的类人生物变成类似僵尸生物的变形仪式。将死去的同伴带到姆巴拉的角色可以请求普普奶奶将他们变成行尸走肉。普普奶奶 是楚尔特唯一能够执行偷来的生命仪式的生物。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"普普奶奶|ToA",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_15a"},{id:"npc_nepartak",name:"妮博特",aliases:["Nepartak"],role:"「14. 摩亚的墓」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：水晶盒中的头骨属于妮博特，她是奥穆最后一位女王纳帕卡的10岁孙女。",voice:`原书对白/措辞样本："

为了安全地探索这个区域，角色们必须安抚妮博特，同时不揭露她的真实困境。`,skeleton:["水晶盒中的头骨属于妮博特，她是奥穆最后一位女王纳帕卡的10岁孙女。",`第一个进入墓穴的角色听到妮博特通过心灵感应呼唤：

妮博特通过魔法感知到入侵者的存在，使用心灵感应向所有角色提问。`,`"

为了安全地探索这个区域，角色们必须安抚妮博特，同时不揭露她的真实困境。`,"如果妮博特被激怒，虫群会攻击任何进入通道的生物或莫阿墓穴中的生物。"],flesh:`水晶盒中的头骨属于妮博特，她是奥穆最后一位女王纳帕卡的10岁孙女。第一个进入墓穴的角色听到妮博特通过心灵感应呼唤：

妮博特通过魔法感知到入侵者的存在，使用心灵感应向所有角色提问。"

为了安全地探索这个区域，角色们必须安抚妮博特，同时不揭露她的真实困境。如果妮博特被激怒，虫群会攻击任何进入通道的生物或莫阿墓穴中的生物。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[137],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_326"},{id:"npc_niles_breakbone",name:"奈尔斯·断骨",aliases:["Niles Breakbone"],role:"「复仇营地」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"负责的圣骑士是一个虔诚崇拜提尔的信徒，名叫奈尔斯·断骨（守序善良男性Chondathan人类贵族），一个致力于战锤骑士团所代表的一切的人，但并不适合指挥像复仇营地这样的驻地。",voice:"原书未另述固定声线；按「复仇营地」中已记录的立场与行为说话。",skeleton:["负责的圣骑士是一个虔诚崇拜提尔的信徒，名叫奈尔斯·断骨（守序善良男性Chondathan人类贵族），一个致力于战锤骑士团所代表的一切的人，但并不适合指挥像复仇营地这样的驻地。","最后，堡垒得到了由Chultan猎人和侦察兵组成的杂牌军的支持，包括由Lorsa Bilwatal（中立女性Chultan人类斥候）和奈尔斯·断骨的老朋友Wulf Rygor（混乱善良男性半精灵斥候）领导的十五名部族武者。","Niles Breakbone（湮灭之墓具名人物，数据见固定图鉴来源 p47）。"],flesh:"负责的圣骑士是一个虔诚崇拜提尔的信徒，名叫奈尔斯·断骨（守序善良男性Chondathan人类贵族），一个致力于战锤骑士团所代表的一切的人，但并不适合指挥像复仇营地这样的驻地。最后，堡垒得到了由Chultan猎人和侦察兵组成的杂牌军的支持，包括由Lorsa Bilwatal（中立女性Chultan人类斥候）和奈尔斯·断骨的老朋友Wulf Rygor（混乱善良男性半精灵斥候）领导的十五名部族武者。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_0cd"},{id:"npc_ortimay_swift_and_dark",name:"鸥尔忒梅·斯威夫特·达克",aliases:["Ortimay Swift and Dark"],role:"「南扎路港」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：铜皮天马由鸥尔忒梅·斯威夫特·达克（CG女性岩石侏儒匪帮队长，拥有达到60尺范围的黑暗视觉）指挥，她既聪明又冷静。",voice:"原书未另述固定声线；按「南扎路港」中已记录的立场与行为说话。",skeleton:["铜皮天马由鸥尔忒梅·斯威夫特·达克（CG女性岩石侏儒匪帮队长，拥有达到60尺范围的黑暗视觉）指挥，她既聪明又冷静。"],flesh:"铜皮天马由鸥尔忒梅·斯威夫特·达克（CG女性岩石侏儒匪帮队长，拥有达到60尺范围的黑暗视觉）指挥，她既聪明又冷静。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"鸥尔忒梅·斯威夫特·达克|ToA",_meta:{sourcePages:[21],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_02e"},{id:"npc_orvex_ocrammas",name:"奥尔威克斯·欧夸玛斯",aliases:["Orvex Ocrammas"],role:"「禁城居民」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：角色也可以自己发现圣地，或者从奥尔威克斯·欧夸玛斯（区域2）那里了解它们。",voice:"原书未另述固定声线；按「禁城居民」中已记录的立场与行为说话。",skeleton:["角色也可以自己发现圣地，或者从奥尔威克斯·欧夸玛斯（区域2）那里了解它们。"],flesh:"角色也可以自己发现圣地，或者从奥尔威克斯·欧夸玛斯（区域2）那里了解它们。",appearance:{tags:[],description:""},knownInfoIds:["info_toa_puzzle_cubes"],recruitable:!1,_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_1d6"},{id:"npc_qawasha",name:"卡瓦沙",aliases:["Qawasha"],role:"「要做的事情」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`原书未单列性格；已知行为：楚尔坦德鲁伊和植物巨人（贝路利安堡）

卡瓦沙（NG男性Chultan 德鲁伊) 是翡翠联盟的成员，常驻于贝路利安堡。`,voice:"原书未另述固定声线；按「要做的事情」中已记录的立场与行为说话。",skeleton:[`楚尔坦德鲁伊和植物巨人（贝路利安堡）

卡瓦沙（NG男性Chultan 德鲁伊) 是翡翠联盟的成员，常驻于贝路利安堡。`,"卡瓦沙通常简称他的伙伴为杂草。","卡瓦沙 希望摆脱丛林中的不死生物威胁，因此他故意带领冒险家穿越充满不死生物的地区。","当他穿越丛林时，卡瓦沙 会大声说出他周围不寻常的动植物的名字。","卡瓦沙亲眼目睹了Flaming Fist对没有适当文件就探险楚尔特的冒险家的虐待。","卡瓦沙 身高6尺2英寸，体重180磅。"],flesh:`楚尔坦德鲁伊和植物巨人（贝路利安堡）

卡瓦沙（NG男性Chultan 德鲁伊) 是翡翠联盟的成员，常驻于贝路利安堡。卡瓦沙通常简称他的伙伴为杂草。卡瓦沙 希望摆脱丛林中的不死生物威胁，因此他故意带领冒险家穿越充满不死生物的地区。当他穿越丛林时，卡瓦沙 会大声说出他周围不寻常的动植物的名字。卡瓦沙亲眼目睹了Flaming Fist对没有适当文件就探险楚尔特的冒险家的虐待。卡瓦沙 身高6尺2英寸，体重180磅。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[35],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_065"},{id:"npc_ras_nsi",name:"拉兹·纳斯",aliases:["Ras Nsi"],role:"夜蛇圣所首领与最后一枚拼图立方体持有者",plotCritical:!0,initialAttitude:-2,personality:"仍执着丹达尔预言，却因死亡诅咒衰弱而愿与能摧毁灵魂收割者者交易。",voice:"威严与病弱交错，谈判时反复确认队伍是否真能进入墓穴。",skeleton:["那些试图寻找的人必须面对数英里的无迹可寻的丛林，那里居住着天然捕食者、食人族和拉兹·纳斯不死军团的残余。","邪恶的军阀拉兹·纳斯曾组建一支不死军团，企图征战圣城梅兹罗，却遭受了可怕的失败。","拉兹·纳斯巧妙地赢得了蛇人的好感，并经历了一个仪式，将自己转变为一个咒怨者。","如今，在奥穆破裂和破碎的街道下方，拉兹·纳斯掌握着权力，并密谋将夜之蛇丹达尔带入世界，封印其命运。","拉兹·纳斯统治着他们，但背叛的祭司们正在策划他的覆灭。","第1章中介绍的向导之一是萨莉达，一个忠于拉兹·纳斯的纯血蛇人。","Ras Nsi（湮灭之墓具名人物，数据见固定图鉴来源 p230）。"],flesh:"那些试图寻找的人必须面对数英里的无迹可寻的丛林，那里居住着天然捕食者、食人族和拉兹·纳斯不死军团的残余。邪恶的军阀拉兹·纳斯曾组建一支不死军团，企图征战圣城梅兹罗，却遭受了可怕的失败。拉兹·纳斯巧妙地赢得了蛇人的好感，并经历了一个仪式，将自己转变为一个咒怨者。如今，在奥穆破裂和破碎的街道下方，拉兹·纳斯掌握着权力，并密谋将夜之蛇丹达尔带入世界，封印其命运。拉兹·纳斯统治着他们，但背叛的祭司们正在策划他的覆灭。第1章中介绍的向导之一是萨莉达，一个忠于拉兹·纳斯的纯血蛇人。",appearance:{tags:[],description:""},knownInfoIds:["info_toa_puzzle_cubes","info_toa_ras_bargain"],recruitable:!1,combatRef:"拉兹·纳斯|ToA",_meta:{sourcePages:[111,114,121],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/plotCritical/initialAttitude/personality/voice/homeLocationId/_meta；配置列入逐NPC来源复核清单"},homeLocationId:"loc_298"},{id:"npc_river_mist",name:"河雾",aliases:["River Mist"],role:"「要做的事情」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`原书未单列性格；已知行为：斑猫人兄妹（南扎路港）

河雾 和 酒瓶（CG 女性和男性 斑猫猎人；`,voice:"原书未另述固定声线；按「要做的事情」中已记录的立场与行为说话。",skeleton:[`斑猫人兄妹（南扎路港）

河雾 和 酒瓶（CG 女性和男性 斑猫猎人；`,"南扎路港的散塔林会代理人已指示河雾与酒壶留意阿图斯·辛贝尔。"],flesh:`斑猫人兄妹（南扎路港）

河雾 和 酒瓶（CG 女性和男性 斑猫猎人；南扎路港的散塔林会代理人已指示河雾与酒壶留意阿图斯·辛贝尔。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[35],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_065"},{id:"npc_salida",name:"萨莉达",aliases:["Salida"],role:"「要做的事情」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"言辞丰富，擅长编造可信借口，并主动争取向导、战士、搬运工或划桨手的工作。",voice:"原书未另述固定声线；按「要做的事情」中已记录的立场与行为说话。",skeleton:[`蛇发间谍（南扎路港）

萨莉达（NE 女性 Chultan 纯血原体蛇人，具有 求生 +5）在南扎路港伪装成人类向导，但她实际上为拉兹·纳斯工作。`,"萨莉达将她的短讯石放在一个袋子里，并尝试作为向导、战士，甚至是卑微的搬运工或划桨手加入玩家角色的探险队。","萨莉达 身高5尺4英寸，体重120磅。","萨莉达 擅长制造丰富多彩的侮辱言辞，并编造可信的谎言来掩盖她的真实背景。"],flesh:`蛇发间谍（南扎路港）

萨莉达（NE 女性 Chultan 纯血原体蛇人，具有 求生 +5）在南扎路港伪装成人类向导，但她实际上为拉兹·纳斯工作。萨莉达将她的短讯石放在一个袋子里，并尝试作为向导、战士，甚至是卑微的搬运工或划桨手加入玩家角色的探险队。萨莉达 身高5尺4英寸，体重120磅。萨莉达 擅长制造丰富多彩的侮辱言辞，并编造可信的谎言来掩盖她的真实背景。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"萨莉达|ToA",_meta:{sourcePages:[34,35],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:personality/_meta；配置列入逐NPC来源复核清单"},homeLocationId:"loc_065"},{id:"npc_sekelok",name:"瑟克洛克",aliases:["Sekelok"],role:"「宝座室」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：站在房间中央的是拉兹·纳斯的冠军瑟克洛克（见下文），以及三名原体卫雏蛇人（见附录D）。",voice:"原书未另述固定声线；按「宝座室」中已记录的立场与行为说话。",skeleton:["站在房间中央的是拉兹·纳斯的冠军瑟克洛克（见下文），以及三名原体卫雏蛇人（见附录D）。","晚上，拉兹·纳斯退居到区域12，留下其他元帝族（包括瑟克洛克）和小食尸鬼在此。","瑟克洛克有时会偷偷前往后宫（区域10）。","如果区域9中的锣被敲响，瑟克洛克和其他元提人会离开去调查，而食尸鬼会藏在宝座后面，拉兹·纳斯则撤退到区域12。","瑟克洛克是一个高大、肌肉发达的元帝族纯血。",`他的属性为勇士（见附录D），有以下变化：

瑟克洛克 是中立邪恶。`],flesh:`站在房间中央的是拉兹·纳斯的冠军瑟克洛克（见下文），以及三名原体卫雏蛇人（见附录D）。晚上，拉兹·纳斯退居到区域12，留下其他元帝族（包括瑟克洛克）和小食尸鬼在此。瑟克洛克有时会偷偷前往后宫（区域10）。如果区域9中的锣被敲响，瑟克洛克和其他元提人会离开去调查，而食尸鬼会藏在宝座后面，拉兹·纳斯则撤退到区域12。瑟克洛克是一个高大、肌肉发达的元帝族纯血。他的属性为勇士（见附录D），有以下变化：

瑟克洛克 是中立邪恶。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"瑟克洛克|ToA",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_298"},{id:"npc_shago",name:"鲨狗",aliases:["Shago"],role:"「要做的事情」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`楚尔坦角斗士（贝路利安堡）

鲨狗（混乱善良男性楚尔坦角斗士，拥有求生技能+7）是楚尔坦人，也是南扎路港商人王子之一绛则的唯一儿子。`,voice:"原书未另述固定声线；按「要做的事情」中已记录的立场与行为说话。",skeleton:[`楚尔坦角斗士（贝路利安堡）

鲨狗（混乱善良男性楚尔坦角斗士，拥有求生技能+7）是楚尔坦人，也是南扎路港商人王子之一绛则的唯一儿子。`,"鲨狗曾领导多次烈焰之拳的探险队进入丛林，清除不死生物，尽管他非常害怕被变成僵尸或食尸鬼。","尽管他有所恐惧，鲨狗知道必须击败不死生物。","鲨狗 高6尺3英寸，体重220磅，肌肉线条分明，面带友好的微笑。","当鲨狗作为他们的向导时，角色们在进行魅力检定时，影响烈焰之拳成员时获得优势。"],flesh:`楚尔坦角斗士（贝路利安堡）

鲨狗（混乱善良男性楚尔坦角斗士，拥有求生技能+7）是楚尔坦人，也是南扎路港商人王子之一绛则的唯一儿子。鲨狗曾领导多次烈焰之拳的探险队进入丛林，清除不死生物，尽管他非常害怕被变成僵尸或食尸鬼。尽管他有所恐惧，鲨狗知道必须击败不死生物。鲨狗 高6尺3英寸，体重220磅，肌肉线条分明，面带友好的微笑。当鲨狗作为他们的向导时，角色们在进行魅力检定时，影响烈焰之拳成员时获得优势。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"鲨狗|ToA",_meta:{sourcePages:[35],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_065"},{id:"npc_syndra_silvane",name:"辛德拉·席尔瓦因",aliases:["Syndra Silvane"],role:"死亡诅咒受害者与楚尔特远征赞助人",plotCritical:!0,initialAttitude:2,personality:"直接、务实，清楚自己剩余时间有限但不隐瞒任务风险。",voice:"用简短条件、明确报酬和逐日恶化的身体状况催促远征。",skeleton:["如果他得知了地图的存在，他愿意为辛德拉·席尔瓦因的地图支付丰厚的报酬。","他是辛德拉·席尔瓦因的长期朋友，也是一个相当注重外表的花花公子，容易被聪明的女人所吸引——或者这只是他精心构建的公众形象。"],flesh:"如果他得知了地图的存在，他愿意为辛德拉·席尔瓦因的地图支付丰厚的报酬。他是辛德拉·席尔瓦因的长期朋友，也是一个相当注重外表的花花公子，容易被聪明的女人所吸引——或者这只是他精心构建的公众形象。",appearance:{tags:[],description:""},knownInfoIds:["info_toa_death_curse"],recruitable:!1,_meta:{sourcePages:[8,16,190],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/plotCritical/initialAttitude/agendaIds/personality/voice/homeLocationId/_meta；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_02e",agendaIds:["agd_toa_syndra_decline"]},{id:"npc_valindra_shadowmantle",name:"瓦琳朵拉·暗影斗篷",aliases:["Valindra Shadowmantle"],role:"「结局」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"巫妖本是强大法师的遗骸，他们主动选择不死之身，只为让自己永存。",voice:"原书未另述固定声线；按「结局」中已记录的立场与行为说话。",skeleton:["瓦琳朵拉·暗影斗篷和Thay的红袍法师也不会错过用武力夺取戒指的机会。","灵魂收割者的毁灭让瓦琳朵拉·暗影斗篷感到恼怒。"],flesh:"瓦琳朵拉·暗影斗篷和Thay的红袍法师也不会错过用武力夺取戒指的机会。灵魂收割者的毁灭让瓦琳朵拉·暗影斗篷感到恼怒。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"瓦琳朵拉·暗影斗篷|ToA",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_4d7"},{id:"npc_volothamp_volo_geddarm",name:'瓦罗赞普"瓦罗"格达姆',aliases:['Volothamp "Volo" Geddarm'],role:"楚尔特与死亡诅咒相关人物",plotCritical:!1,initialAttitude:0,personality:"喜欢吹牛的环球旅行家瓦罗赞普·格达姆前来楚尔特进行他的新作《瓦罗怪物指南》的签售。",voice:"",skeleton:["喜欢吹牛的环球旅行家瓦罗赞普·格达姆前来楚尔特进行他的新作《瓦罗怪物指南》的签售。","除了拜访南扎路港的七位贸易亲王（他对他们很了解）外，瓦罗正在当地的酒馆里推销他的作品，而冒险者们可能会在城市中的某地碰上他。","瓦罗可以提供许多信息（虽然不一定准确），但他在任何情况下都不会加入冒险队伍。","瓦罗可能会在拜访各位贸易亲王时允许冒险者同行。","在第一章结束时，好面子的瓦罗可能会愿意分享他来南扎路港后听到的1d4 + 1个有关丛林的传说。",'"我不想探索丛林、失落城市和地下城。','瓦罗赞普"瓦罗"格达姆（湮灭之墓具名人物，数据见固定图鉴来源 p235）。'],flesh:"",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[235],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；态度/声线待补；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"}},{id:"npc_wakanga_o_tamu",name:"瓦康嘎·欧塔姆",aliases:["Wakanga O'tamu"],role:"辛德拉的老友、南扎路港奥术商人王子",plotCritical:!0,initialAttitude:1,personality:"博学、谨慎，愿为终结诅咒提供地图、情报和有限魔法援助。",voice:"礼貌而审慎地估算风险、价格与可信度。",skeleton:["艾珂内-阿法支付瓦康嘎·欧塔姆在这些物品中选择少数几个进行永久性附魔，她以魔法盾牌和武器出售表中列出的价格出售它们。","他嫉妒 瓦康嘎·欧塔姆 的魔法力量和 艾珂内-阿法 在竞技场中的声誉。",`交易魔法与传说

瓦康嘎·欧塔姆（守序善良男性库尔坦人类魔法师）是商人王子中唯一的奥术施法者。`],flesh:`艾珂内-阿法支付瓦康嘎·欧塔姆在这些物品中选择少数几个进行永久性附魔，她以魔法盾牌和武器出售表中列出的价格出售它们。他嫉妒 瓦康嘎·欧塔姆 的魔法力量和 艾珂内-阿法 在竞技场中的声誉。交易魔法与传说

瓦康嘎·欧塔姆（守序善良男性库尔坦人类魔法师）是商人王子中唯一的奥术施法者。`,appearance:{tags:[],description:""},knownInfoIds:["info_toa_death_curse"],recruitable:!1,_meta:{sourcePages:[26,29],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/plotCritical/initialAttitude/personality/voice/homeLocationId/_meta；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_02e"},{id:"npc_withers",name:"威瑟斯",aliases:["Withers"],role:"九神之墓管理员与墓穴矮人监督者",plotCritical:!0,initialAttitude:-3,personality:"忠于阿瑟瑞克，永生后仍热衷自然史与解剖，会先盘问再杀死入侵者。",voice:"像好奇学者一样提问，随后遗憾地宣布实验对象必须死亡。",skeleton:["探索者们最近闯入了这座古墓，而威瑟斯和他的墓穴矮人们频繁巡逻。","威瑟斯，阿瑟瑞克的不死看守，监督着一群不死维护团队，以确保墓穴的陷阱保持工作状态。","威瑟斯作为矮人们的监督者，并在巫妖访问墓穴时担任阿瑟瑞克的助手。","使用他在区域25的水晶球，威瑟斯可以指挥奥穆的石像鬼并与地表世界的代理人交流。","威瑟斯和他的船员使用位于区域26的楼梯，在墓穴的许多层中无声息地游荡。","威瑟斯尽可能避免与角色接触，相信阿瑟瑞克的陷阱会击败他们。"],flesh:"探索者们最近闯入了这座古墓，而威瑟斯和他的墓穴矮人们频繁巡逻。威瑟斯，阿瑟瑞克的不死看守，监督着一群不死维护团队，以确保墓穴的陷阱保持工作状态。威瑟斯作为矮人们的监督者，并在巫妖访问墓穴时担任阿瑟瑞克的助手。使用他在区域25的水晶球，威瑟斯可以指挥奥穆的石像鬼并与地表世界的代理人交流。威瑟斯和他的船员使用位于区域26的楼梯，在墓穴的许多层中无声息地游荡。威瑟斯尽可能避免与角色接触，相信阿瑟瑞克的陷阱会击败他们。",appearance:{tags:[],description:""},knownInfoIds:["info_toa_skeleton_keys","info_toa_soulmonger"],recruitable:!1,combatRef:"威瑟斯|ToA",_meta:{sourcePages:[129,145,146],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/plotCritical/initialAttitude/personality/voice/homeLocationId/_meta；配置列入逐NPC来源复核清单"},homeLocationId:"loc_37a"},{id:"npc_xandala",name:"藏妲拉",aliases:["Xandala"],role:"「支线任务」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"善良阵营的玩家或许能让夏日智者背叛藏妲拉，或至少从其口中获取信息，用以挫败藏妲拉的计划或帮助阿图斯。",voice:"原书未另述固定声线；按「支线任务」中已记录的立场与行为说话。",skeleton:["一位名叫藏妲拉（见附录D）的半精灵接近玩家们，声称自己是阿图斯·辛贝尔的女儿。","阿图斯无法通过魔法被找到，但藏妲拉听说阿图斯与一名沉默寡言、气味古怪的爬行类男子一同离开了城市。","藏妲拉真正想要的是阿图斯持有的凛冬戒指，但她并未向玩家们透露这点。","夏日智者——藏妲拉的伪龙宠物认为寻找戒指的冒险过于危险，但已放弃劝说主人。","善良阵营的玩家或许能让夏日智者背叛藏妲拉，或至少从其口中获取信息，用以挫败藏妲拉的计划或帮助阿图斯。"],flesh:"一位名叫藏妲拉（见附录D）的半精灵接近玩家们，声称自己是阿图斯·辛贝尔的女儿。阿图斯无法通过魔法被找到，但藏妲拉听说阿图斯与一名沉默寡言、气味古怪的爬行类男子一同离开了城市。藏妲拉真正想要的是阿图斯持有的凛冬戒指，但她并未向玩家们透露这点。夏日智者——藏妲拉的伪龙宠物认为寻找戒指的冒险过于危险，但已放弃劝说主人。善良阵营的玩家或许能让夏日智者背叛藏妲拉，或至少从其口中获取信息，用以挫败藏妲拉的计划或帮助阿图斯。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"藏妲拉|ToA",_meta:{sourcePages:[236],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_02e"},{id:"npc_yorb",name:"约伯",aliases:["Yorb"],role:"「18A. 神龛入口」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：这座神殿是名为约伯首领的金色皮肤格龙蛙人精英战士的家园。",voice:"原书未另述固定声线；按「18A. 神龛入口」中已记录的立场与行为说话。",skeleton:["这座神殿是名为约伯首领的金色皮肤格龙蛙人精英战士的家园。","四名橙色皮肤的格龙蛙人精英战士与约伯及其驯养的鸭嘴龙坐骑一起在积水的庭院中打滚。","起初，约伯更感兴趣的是吓跑入侵者，而不是与他们交谈。","如果战斗的形势对首领 约伯 不利，他会与他的精英卫队一起撤退到神殿内并闩上门。","Yorb（湮灭之墓具名人物，数据见固定图鉴来源 p108）。"],flesh:"这座神殿是名为约伯首领的金色皮肤格龙蛙人精英战士的家园。四名橙色皮肤的格龙蛙人精英战士与约伯及其驯养的鸭嘴龙坐骑一起在积水的庭院中打滚。起初，约伯更感兴趣的是吓跑入侵者，而不是与他们交谈。如果战斗的形势对首领 约伯 不利，他会与他的精英卫队一起撤退到神殿内并闩上门。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"约伯|ToA",_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_277"},{id:"npc_zalkor",name:"扎尔柯蕊",aliases:["Zalkoré"],role:"「南戈尔」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"这个宏伟的花园（地图2.12）是为了纪念自负的奥穆女王扎尔柯蕊而建造的。",voice:"原书未另述固定声线；按「南戈尔」中已记录的立场与行为说话。",skeleton:["这个宏伟的花园（地图2.12）是为了纪念自负的奥穆女王扎尔柯蕊而建造的。","建造者Thiru-taya是扎尔柯蕊的首席将军和配偶。","不断的奉承和有毒的虚荣心在扎尔柯蕊的心中溃烂，直到她与一位罪魔交易，以永远保持她的青春和美丽。","当她邪恶交易的消息在王国中传播开来时，军队强迫扎尔柯蕊退位，并将她流放到卡南吉，这个地方从此被称为南加洛尔，失落梦境的花园。","扎尔柯蕊认为提鲁-塔亚是流放她的将军之一，因此在南加洛尔破坏了所有他的雕像和肖像。","扎尔柯蕊在花园里种植致幻植物，因为在它们的麻醉性、梦幻般的睡莲梦中，她才能召唤出她死去爱人的面容。"],flesh:"这个宏伟的花园（地图2.12）是为了纪念自负的奥穆女王扎尔柯蕊而建造的。建造者Thiru-taya是扎尔柯蕊的首席将军和配偶。不断的奉承和有毒的虚荣心在扎尔柯蕊的心中溃烂，直到她与一位罪魔交易，以永远保持她的青春和美丽。当她邪恶交易的消息在王国中传播开来时，军队强迫扎尔柯蕊退位，并将她流放到卡南吉，这个地方从此被称为南加洛尔，失落梦境的花园。扎尔柯蕊认为提鲁-塔亚是流放她的将军之一，因此在南加洛尔破坏了所有他的雕像和肖像。扎尔柯蕊在花园里种植致幻植物，因为在它们的麻醉性、梦幻般的睡莲梦中，她才能召唤出她死去爱人的面容。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"扎尔柯蕊|ToA",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_166"},{id:"npc_zaroum_al_saryak",name:"扎如姆·艾萨亚克",aliases:["Zaroum Al-Saryak"],role:"「贝路利安堡」中的具名角色",plotCritical:!1,initialAttitude:0,personality:'原书未单列性格；已知行为：海盗船长扎如姆·艾萨亚克持有匹配的石头（见"贾哈卡锚地"）。',voice:'原书对白/措辞样本：海盗船长扎如姆·艾萨亚克持有匹配的石头（见"贾哈卡锚地"）。',skeleton:['海盗船长扎如姆·艾萨亚克持有匹配的石头（见"贾哈卡锚地"）。'],flesh:'海盗船长扎如姆·艾萨亚克持有匹配的石头（见"贾哈卡锚地"）。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"扎如姆·艾萨亚克|ToA",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_0f2"},{id:"npc_zhanthi",name:"绛则",aliases:["Zhanthi"],role:"「城市居民」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`交易宝石、珠宝、布料和盔甲

绛则（中立善良女性库尔坦人类贵族）血管中流淌着王室血统，很少有人敢质疑这位明智的老商人。`,voice:"原书未另述固定声线；按「城市居民」中已记录的立场与行为说话。",skeleton:["她认为绛则是她的死敌，并且对于等待这位老贵族女性去世已经变得不耐烦。","尽管她很好地隐藏了自己的蔑视，克薇欧泽仍在不断地干涉绛则的事务和家庭事务。","如果绛则意识到克薇欧泽对她和她家人的敌意，她选择不表现出来。",`交易宝石、珠宝、布料和盔甲

绛则（中立善良女性库尔坦人类贵族）血管中流淌着王室血统，很少有人敢质疑这位明智的老商人。`,"绛则 交易宝石、珠宝、色彩缤纷的Chultan布料，以及非魔法的皮甲、铆钉皮甲和兽皮甲。","绛则是极少数偶然发现了莉尔阿·波提尔与海盗的秘密安排的证据的人之一，但她暂时保留这些知识。"],flesh:`她认为绛则是她的死敌，并且对于等待这位老贵族女性去世已经变得不耐烦。尽管她很好地隐藏了自己的蔑视，克薇欧泽仍在不断地干涉绛则的事务和家庭事务。如果绛则意识到克薇欧泽对她和她家人的敌意，她选择不表现出来。交易宝石、珠宝、布料和盔甲

绛则（中立善良女性库尔坦人类贵族）血管中流淌着王室血统，很少有人敢质疑这位明智的老商人。绛则 交易宝石、珠宝、色彩缤纷的Chultan布料，以及非魔法的皮甲、铆钉皮甲和兽皮甲。绛则是极少数偶然发现了莉尔阿·波提尔与海盗的秘密安排的证据的人之一，但她暂时保留这些知识。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"绛则|ToA",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单"},homeLocationId:"loc_02e"},{id:"npc_zindar",name:"金达尔",aliases:["Zindar"],role:"「13. 港务长办公室」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"这位半金龙管理着南扎路港的码头并记录船舶舱单。",voice:"原书未另述固定声线；按「13. 港务长办公室」中已记录的立场与行为说话。",skeleton:["港口管理员是一条半金龙，名叫金达尔（见附录D）。","金达尔发现，他那令人印象深刻的个人魅力能更快、更令自己满意地解决问题，而不是任何数量的下属所能完成的。","办公室里的职员很少确切知道金达尔任何时候在哪里，但可以给他留言；"],flesh:"港口管理员是一条半金龙，名叫金达尔（见附录D）。金达尔发现，他那令人印象深刻的个人魅力能更快、更令自己满意地解决问题，而不是任何数量的下属所能完成的。办公室里的职员很少确切知道金达尔任何时候在哪里，但可以给他留言；",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[239],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置列入逐NPC来源复核清单；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_02e"}],a=[{id:"info_toa_death_curse",content:"死亡诅咒使复活法术失效；曾被复活者每日失去 1 点最大生命且无法恢复。辛德拉在远征开始时剩 79 生命，若诅咒未终止会在第 79 天死亡。",teaser:"一场会持续侵蚀复生者的全球诅咒正在倒计时。",holders:["npc_syndra_silvane","npc_wakanga_o_tamu"],revealCondition:{type:"free"},linkedQuestId:"qst_main_toa",linkedHookId:"hook_toa_curse",_meta:{sourcePages:[8,16],confidence:"high",needsReview:!1}},{id:"info_toa_omu_vision",content:"泽腾贝看到南方遥远、被悬崖环绕且遍布蛇的丛林城市和藤蔓覆盖的黑色方尖碑；萨嘉·恩巴扎进一步确认奥姆位于火焰峰与失落荣誉谷之间并低于周围丛林。",teaser:"两份独立异象都指向南方一座下沉失落城。",holders:["npc_grandfather_zitembe"],revealCondition:{type:"free"},linkedQuestId:"qst_main_toa",linkedHookId:"hook_toa_omu",_meta:{sourcePages:[20,81],confidence:"high",needsReview:!1}},{id:"info_toa_puzzle_cubes",content:"九神之墓真正入口需要九枚诡神拼图立方体；大多数分散在奥姆九座神龛，蛇人已把至少一枚带入夜蛇圣所。",teaser:"墓门的钥匙被拆成九枚、分别供奉在失落城中。",holders:["npc_orvex_ocrammas","npc_ras_nsi"],revealCondition:{type:"free"},linkedQuestId:"qst_main_toa",linkedHookId:"hook_toa_cubes",_meta:{sourcePages:[95,97,110,111],confidence:"high",needsReview:!1}},{id:"info_toa_ras_bargain",content:"拉兹·纳斯也正被死亡诅咒侵蚀；得知队伍要进入九神之墓摧毁灵魂收割者后，他会提供手中剩余立方体并允许安全离开，但不会进一步援助。",teaser:"夜蛇圣所首领与远征队在诅咒上存在短暂共同利益。",holders:["npc_ras_nsi"],revealCondition:{type:"free"},linkedQuestId:"qst_main_toa",linkedHookId:"hook_toa_cubes",_meta:{sourcePages:[114,121],confidence:"high",needsReview:!1}},{id:"info_toa_skeleton_keys",content:"死亡之神育婴室的骷髅门需要五把钥匙；每一把都是在墓穴前五层游荡、会逃离追捕的活化骷髅头，且必须先完成相邻五项试炼露出钥匙孔。",teaser:"墓穴最底层的门需要五个会自行逃跑的头骨钥匙。",holders:["npc_withers"],revealCondition:{type:"free"},linkedQuestId:"qst_main_toa",linkedHookId:"hook_toa_tomb",_meta:{sourcePages:[129,178,179],confidence:"high",needsReview:!1}},{id:"info_toa_soulmonger",content:"灵魂收割者悬在岩浆上方，拥有 200 生命、易受光耀伤害；摧毁本体或任一条 100 生命的精金支架都会使装置坠毁、终止诅咒并释放尚未被萎缩者吞噬的灵魂。",teaser:"诅咒源头是一件可从本体或支架破坏的死灵装置。",holders:["npc_withers","npc_acererak"],revealCondition:{type:"free"},linkedQuestId:"qst_main_toa",linkedHookId:"hook_toa_soulmonger",_meta:{sourcePages:[145,184,185],confidence:"high",needsReview:!1}},{id:"info_toa_acererak_revenge",content:"萎缩者死亡会立刻引来阿瑟瑞克；被诡神附身的角色每回合获得临时生命。阿瑟瑞克生命低于 100 时会终止战斗并传送离开。",teaser:"杀死育婴室守卫会招来墓穴主人亲自复仇。",holders:["npc_acererak"],revealCondition:{type:"free"},linkedQuestId:"qst_main_toa",linkedHookId:"hook_toa_soulmonger",_meta:{sourcePages:[185,186],confidence:"high",needsReview:!1}}],s=[{id:"enc_036",name:"刽子手之路遭遇",sceneId:"scn_036",prelocked:!1,enemies:[{ref:"Velociraptor|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[18],confidence:"medium",needsReview:!0,extractorNotes:"来源未规定每次比赛采用哪一种野兽及精确数量；记录单只迅猛龙作为可选最小分支。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"刽子手之路每次只放入一种饥饿野兽；迅猛龙、黑豹与幼年异特龙是主持人可选例子，不合并结算。"},encounterPolicy:{engagement:"contact"}},{id:"enc_037",name:"垃圾坑遭遇",sceneId:"scn_037",prelocked:!1,enemies:[{ref:"Otyugh|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[20],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"},encounterPolicy:{engagement:"contact"}},{id:"enc_065",name:"商业王子别墅遭遇",sceneId:"scn_065",prelocked:!1,enemies:[{ref:"Flying Sword|ToA",count:1},{ref:"Rug of Smothering",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"仅瓦康嘎别墅的门上凌空剑与伪装地毯会在其命令或入侵时攻击；飞蛇只是其他别墅装饰。"},encounterPolicy:{engagement:"contact"}},{id:"enc_0ae",name:"阿塔兹·穆哈哈遭遇",sceneId:"scn_0ae",prelocked:!1,enemies:[{ref:"Baboon|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[41,42],confidence:"medium",needsReview:!0,extractorNotes:"原书数量为 1d4。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"只有未安抚藤蔓上的猴群时才有 1d4 只狒狒攻击；整数 schema 记录最小值。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_ataaz_stone_golem",name:"阿塔兹·穆哈哈：乌布塔奥石魔像",sceneId:"scn_0ae",prelocked:!1,enemies:[{ref:"Stone Golem",count:1}],battlefield:{family:"jungle"},levelScaling:{note:"亵渎雕像、破坏桥梁或未正确沿迷宫敬礼时，神殿石魔像发动攻击。"},_meta:{sourcePages:[41,42],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_0b4",name:"阿塔兹·伊克瓦齐遭遇",sceneId:"scn_0b4",prelocked:!1,enemies:[{ref:"Firenewt Warrior|ToA",count:4},{ref:"Giant Strider|ToA",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"典型巡逻队为四名火蝾蜴武者，每人骑一只阔步鸟；青年红龙是独立狩猎者，不与巡逻队固定合并。"},encounterPolicy:{engagement:"contact"}},{id:"enc_0b5",name:"楚尔特湾遭遇",sceneId:"scn_0b5",prelocked:!1,enemies:[{ref:"Dragon Turtle",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[42,43],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"阿雷马格先索要 2d4×50 金币贡品，只有队伍拒绝或攻击时才进入战斗；礁鲨另列游泳超时分支。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_bay_sharks",name:"楚尔特湾：落水礁鲨",sceneId:"scn_0b5",prelocked:!1,enemies:[{ref:"Reef Shark|ToA",count:1}],battlefield:{family:"jungle"},levelScaling:{note:"任何人在水中停留超过三轮后遭 1d4 只礁鲨攻击；整数 schema 记录最小值。"},_meta:{sourcePages:[43],confidence:"medium",needsReview:!0,extractorNotes:"原书数量为 1d4。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_camp_goblin_ambush",name:"正义营地：约卡伏击",sceneId:"scn_0b7",prelocked:!1,enemies:[{ref:"Goblin Boss",count:1},{ref:"Goblin",count:2}],battlefield:{family:"jungle"},levelScaling:{note:"约卡与其乐队会偷船、设伏；来源没有给出乐队总人数，记录自动提取可证的最小两名地精。"},_meta:{sourcePages:[43,44],confidence:"medium",needsReview:!0,extractorNotes:"约卡乐队总人数未给出。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_camp_undead_lure",name:"正义营地：不死生物诱集",sceneId:"scn_0b7",prelocked:!1,enemies:[{ref:"Zombie",count:1},{ref:"Skeleton",count:1}],battlefield:{family:"jungle"},levelScaling:{note:"地精可用号角引来各 1d8 只丧尸和骷髅；整数 schema 记录每组最小值。"},_meta:{sourcePages:[44],confidence:"medium",needsReview:!0,extractorNotes:"原书两组数量均为 1d8。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_camp_beast_lure",name:"正义营地：野兽诱集",sceneId:"scn_0b7",prelocked:!1,enemies:[{ref:"Allosaurus",count:1},{ref:"Axe Beak|ToA",count:2}],battlefield:{family:"jungle"},levelScaling:{note:"地精可引来一只异特龙与 1d4+1 只斧喙鸟；整数 schema 记录最小值。"},_meta:{sourcePages:[44],confidence:"medium",needsReview:!0,extractorNotes:"斧喙鸟数量为 1d4+1。"},encounterPolicy:{engagement:"contact"}},{id:"enc_0b9",name:"指挥帐篷遭遇",sceneId:"scn_0b9",prelocked:!1,enemies:[{ref:"poisonous snake",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[44],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"},encounterPolicy:{engagement:"contact"}},{id:"enc_0bd",name:"动物围栏遭遇",sceneId:"scn_0bd",prelocked:!1,enemies:[{ref:"Axe Beak|ToA",count:5}],battlefield:{family:"jungle"},_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"围栏中的幼鸟只有 6 生命且无有效攻击；骚扰它才会在两轮后引来五只成年斧喙鸟。"},encounterPolicy:{engagement:"contact"}},{id:"enc_0db",name:"主入口遭遇",sceneId:"scn_0db",prelocked:!1,enemies:[{ref:"Grung|ToA",count:16}],battlefield:{family:"jungle"},_meta:{sourcePages:[50],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"四名入口守卫先攻击，第二轮十二名格龙蛙人增援到达；只有无护送且说错口令时触发。"},encounterPolicy:{engagement:"contact"}},{id:"enc_0dd",name:"格罗克岛遭遇",sceneId:"scn_0dd",prelocked:!1,enemies:[{ref:"Grung Elite Warrior|ToA",count:8}],battlefield:{family:"jungle"},_meta:{sourcePages:[50],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_0de",name:"神龛遭遇",sceneId:"scn_0de",prelocked:!1,enemies:[{ref:"Grung Wildling",count:1},{ref:"Grung|ToA",count:6},{ref:"Grung Elite Warrior|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"克鲁克与六名助手、格罗克王及罗尔克都在神龛；仅在角色侮辱或违抗国王时作为条件敌群。"},encounterPolicy:{engagement:"contact"}},{id:"enc_0e6",name:"火指遭遇",sceneId:"scn_0e6",prelocked:!1,enemies:[{ref:"Pterafolk|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[52],confidence:"medium",needsReview:!0,extractorNotes:"敌人数为队伍人数×2，当前 schema 无法表达动态乘数。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"无遮蔽接近火指且集体隐匿失败时，每名队员会引来两只翼手兽；整数 schema 仅记录每名队员的倍数基数。"},encounterPolicy:{engagement:"contact"}},{id:"enc_0e8",name:"第一层。废弃的洞穴遭遇",sceneId:"scn_0e8",prelocked:!1,enemies:[{ref:"巨狼蛛",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_0ea",name:"第二层。吸血蝙蝠洞遭遇",sceneId:"scn_0ea",prelocked:!1,enemies:[{ref:"Stirge|ToA",count:9}],battlefield:{family:"jungle"},_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_0ed",name:"第三层。翼手兽的巢穴遭遇",sceneId:"scn_0ed",prelocked:!1,enemies:[{ref:"Pterafolk|ToA",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"第三层有四名翼手兽长者；被绑缚的鸟羽人尼菲尔是俘虏而非敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_0ef",name:"第四层。尖顶遭遇",sceneId:"scn_0ef",prelocked:!1,enemies:[{ref:"翼手兽|ToA",count:6}],battlefield:{family:"jungle"},_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_10d",name:"石化树遭遇",sceneId:"scn_10d",prelocked:!1,enemies:[{ref:"Swarm of Bats|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_113",name:"不死生物守卫遭遇",sceneId:"scn_113",prelocked:!1,enemies:[{ref:"Zombie",count:6},{ref:"Girallon Zombie|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[60],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"壁橱中固定塞有六只楚尔特丧尸与两只四臂猿怪丧尸。"},encounterPolicy:{engagement:"contact"}},{id:"enc_11a",name:"冶炼厂遭遇",sceneId:"scn_11a",prelocked:!1,enemies:[{ref:"Firenewt Warrior|ToA",count:8}],battlefield:{family:"jungle"},_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_11d",name:"锻造车间遭遇",sceneId:"scn_11d",prelocked:!1,enemies:[{ref:"Firenewt Warrior|ToA",count:10},{ref:"Firenewt Warlock of Imix",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"北室四名、南室六名火蝾螈武者，南室另有一名伊米克斯魔契师监督。"},encounterPolicy:{engagement:"contact"}},{id:"enc_11f",name:"仓库遭遇",sceneId:"scn_11f",prelocked:!1,enemies:[{ref:"Firenewt Warrior|ToA",count:7},{ref:"Firenewt Warlock of Imix",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"东北室三名、 西南室四名火蝾螈武者，东南室另有两名伊米克斯魔契师。"},encounterPolicy:{engagement:"contact"}},{id:"enc_125",name:"伊米西神殿遭遇",sceneId:"scn_125",prelocked:!1,enemies:[{ref:"firenewt warlock of Imix",count:2},{ref:"Firenewt Warrior|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_127",name:"烟雾弥漫的洞穴遭遇",sceneId:"scn_127",prelocked:!1,enemies:[{ref:"Smoke Mephit|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_129",name:"通往龙心矿井的牢房和通道遭遇",sceneId:"scn_129",prelocked:!1,enemies:[{ref:"Carrion Crawler|ToA",count:1},{ref:"Giant Spider|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[63,64],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"通往龙心矿井的四十英里隧道必然遭遇食腐虫和巨蜘蛛；两名白矮人是重伤俘虏，狗头人只在矿井另一端。"},encounterPolicy:{engagement:"contact"}},{id:"enc_12a",name:"矿车湾遭遇",sceneId:"scn_12a",prelocked:!1,enemies:[{ref:"Giant Strider|ToA",count:12}],battlefield:{family:"jungle"},_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_12b",name:"瓦尔斯皮德遭遇",sceneId:"scn_12b",prelocked:!1,enemies:[{ref:"Frost Giant",count:5}],battlefield:{family:"jungle"},_meta:{sourcePages:[64,65],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"瓦尔斯皮德现场有三名船员和两名海滩守卫；德鲁菲搜索队与其他搜索队另在丛林活动。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_hvalspyd_search_party",name:"瓦尔斯皮德：德鲁菲搜索队",sceneId:"scn_12b",prelocked:!1,enemies:[{ref:"Frost Giant",count:3},{ref:"Winter Wolf|ToA",count:2}],battlefield:{family:"jungle"},levelScaling:{note:"德鲁菲与两名雄性霜巨人组成一队，并固定带一对冬狼。"},_meta:{sourcePages:[64,65],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_135",name:"仓库遭遇",sceneId:"scn_135",prelocked:!1,enemies:[{ref:"Flying Sword|ToA",count:10}],battlefield:{family:"jungle"},_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"扰动宝藏时，墙上的十把生锈刀刃全部活化为凌空剑。"},encounterPolicy:{engagement:"contact"}},{id:"enc_138",name:"笼子遭遇",sceneId:"scn_138",prelocked:!1,enemies:[{ref:"Reef Shark|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[67],confidence:"medium",needsReview:!0,extractorNotes:"原书数量为 1d4+1。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"笼子下栖息 1d4+1 只礁鲨；整数 schema 记录最小两只。"},encounterPolicy:{engagement:"contact"}},{id:"enc_139",name:"瞭望塔遭遇",sceneId:"scn_139",prelocked:!1,enemies:[{ref:"Bandit|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"瞭望塔顶固定有两名海盗值班；警铃引来的增援属于邻接区域。"},encounterPolicy:{engagement:"contact"}},{id:"enc_13a",name:"博斯科的底舱遭遇",sceneId:"scn_13a",prelocked:!1,enemies:[{ref:"Thug",count:1},{ref:"Deinonychus",count:1},{ref:"Bandit|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[67,68],confidence:"medium",needsReview:!0,extractorNotes:"酒馆海盗数量为 2d6，另有 1d6 名昏睡者。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"老板博斯科使用暴徒数据并养一只恐爪龙；另有 2d6 名清醒海盗，仅在交涉失败时参战，整数 schema 记录最小两名。"},encounterPolicy:{engagement:"contact"}},{id:"enc_15a",name:"姆巴拉遭遇",sceneId:"scn_15a",prelocked:!1,enemies:[{ref:"Green Hag",count:1},{ref:"Flesh Golem",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[72,73],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"普普奶奶倾向逐个暗杀；下令时由埋藏的血肉魔像保护她。2d6 飞猴不会为她战斗，翼手兽巢穴是另一个地点。"},encounterPolicy:{engagement:"contact"}},{id:"enc_167",name:"入口遭遇",sceneId:"scn_167",prelocked:!1,enemies:[{ref:"鳄鱼",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_16a",name:"梯田遭遇",sceneId:"scn_16a",prelocked:!1,enemies:[{ref:"捕人草|ToA",count:1},{ref:"黄迷香丧尸|ToA",count:6},{ref:"黄迷香爬藤|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_16d",name:"灵魂穹顶遭遇",sceneId:"scn_16d",prelocked:!1,enemies:[{ref:"Giant Spider|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[77],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"七腿巨蜘蛛会攻击接近蛛网者；三只怯蕴阿灵是好奇或害羞的自然精灵，不列敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_171",name:"废墟宫殿遭遇",sceneId:"scn_171",prelocked:!1,enemies:[{ref:"Swarm of Poisonous Snakes|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[77],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_177",name:"致幻植物遭遇",sceneId:"scn_177",prelocked:!1,enemies:[{ref:"Tri-flower Frond|ToA",count:3},{ref:"Mantrap|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"东南花园固定有三株三花株，东北花园固定有一株捕人草；随机花园发现另由表格结算。"},encounterPolicy:{engagement:"contact"}},{id:"enc_17d",name:"宝塔遭遇",sceneId:"scn_17d",prelocked:!1,enemies:[{ref:"魔王鹤|ToA",count:6}],battlefield:{family:"jungle"},_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_182",name:"扎尔柯蕊的巢穴遭遇",sceneId:"scn_182",prelocked:!1,enemies:[{ref:"Medusa",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[79,80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"扎尔柯蕊会先以流亡女王身份交涉；识破或激怒后才显露美杜莎身份。魔王鹤是别处来客，不固定并入。"},encounterPolicy:{engagement:"contact"}},{id:"enc_188",name:"针骨遭遇",sceneId:"scn_188",prelocked:!1,enemies:[{ref:"Swarm of Quippers|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"搜索针骨泥底会固定招致两群食人鱼攻击。"},encounterPolicy:{engagement:"contact"}},{id:"enc_18d",name:"奥罗伦加遭遇",sceneId:"scn_18d",prelocked:!1,enemies:[{ref:"Swarm of Poisonous Snakes|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[80,81],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"毒蛇台阶无法靠杀戮清空，必须依兰花、羽毛和吞蛇仪式通过；守秘纳迦与示范的怯蕴阿灵不是敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_19e",name:"咬合龟湾遭遇",sceneId:"scn_19e",prelocked:!1,enemies:[{ref:"巨鳄龟|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1a8",name:"独角鲸号残骸遭遇",sceneId:"scn_1a8",prelocked:!1,enemies:[{ref:"Vegepygmy Chief",count:1},{ref:"Vegepygmy",count:12},{ref:"Thorny|ToA",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"植物侏儒只在虎人布韦斯未陪同角色时敌对；布韦斯因好奇接触且不列敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1aa",name:"星辰女神号的残骸遭遇",sceneId:"scn_1aa",prelocked:!1,enemies:[{ref:"Girallon Zombie|ToA",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[84,85],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"角色登上残骸数分钟后三只四臂猿怪丧尸攻击；六名筋疲力尽的幸存船员是盟友。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1b7",name:"闹鬼的锻造间遭遇",sceneId:"scn_1b7",prelocked:!1,enemies:[{ref:"Specter|ToA",count:6}],battlefield:{family:"jungle"},_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1b9",name:"岩架遭遇",sceneId:"scn_1b9",prelocked:!1,enemies:[{ref:"Kobold Inventor|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1ba",name:"蛋孵化室遭遇",sceneId:"scn_1ba",prelocked:!1,enemies:[{ref:"狗头人",count:7}],battlefield:{family:"jungle"},_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1bd",name:"上层着陆点遭遇",sceneId:"scn_1bd",prelocked:!1,enemies:[{ref:"狗头人",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1bf",name:"主要居住区遭遇",sceneId:"scn_1bf",prelocked:!1,enemies:[{ref:"狗头人",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[87],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"},encounterPolicy:{engagement:"contact"}},{id:"enc_1c2",name:"发明家区遭遇",sceneId:"scn_1c2",prelocked:!1,enemies:[{ref:"Kobold Inventor|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"发明家区固定有两名狗头人发明家；另外两名位于上层岩架。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1c7",name:"井道底部遭遇",sceneId:"scn_1c7",prelocked:!1,enemies:[{ref:"Quipper|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[88],confidence:"medium",needsReview:!0,extractorNotes:"原书食人鱼数量为 2d6，整数 schema 记录最小两只。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"井底水池有 2d6 只食人鱼；通往赫拉卡马尔路上可能遇到的狗头人不是本场固定敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1cc",name:"廷德的巢穴遭遇",sceneId:"scn_1cc",prelocked:!1,enemies:[{ref:"young red dragon",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1d4",name:"蚁丘遭遇",sceneId:"scn_1d4",prelocked:!1,enemies:[{ref:"Swarm of Insects",count:6}],battlefield:{family:"jungle"},_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"破坏三座蚁丘时，每座涌出两群蚂蚁，共六群。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1fb",name:"城市入口遭遇",sceneId:"scn_1fb",prelocked:!1,enemies:[{ref:"Yuan-ti Malison (Type 1)|ToA",count:2},{ref:"Yuan-ti Malison (Type 2)|ToA",count:2},{ref:"Yuan-ti Malison (Type 3)|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"入口侦察队固定为两名 1 型、两名 2 型与一名 3 型恶咒蛇人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_208",name:"巨蛙池遭遇",sceneId:"scn_208",prelocked:!1,enemies:[{ref:"froghemoth",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_218",name:"角斗士牢房遭遇",sceneId:"scn_218",prelocked:!1,enemies:[{ref:"粘土角斗士|ToA",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"四座粘土角斗士使用书内变体数据；普通角斗士标签只是其基础统计，不另加一个生物。"},encounterPolicy:{engagement:"contact"}},{id:"enc_21a",name:"大裂谷遭遇",sceneId:"scn_21a",prelocked:!1,enemies:[{ref:"Vegepygmy Chief",count:1},{ref:"Vegepygmy",count:8},{ref:"Thorny|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[100,101],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"植物侏儒正准备献祭被束缚的格龙蛙人伊姆博克；俘虏不列敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_21f",name:"神龛入口遭遇",sceneId:"scn_21f",prelocked:!1,enemies:[{ref:"幻色蛇|ToA",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_22c",name:"倒下的树遭遇",sceneId:"scn_22c",prelocked:!1,enemies:[{ref:"Bag of Nails|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"钉包以自己的书内变体数据从河东废墟伏击过桥者，半血以下投降。"},encounterPolicy:{engagement:"contact"}},{id:"enc_237",name:"沉思之室遭遇",sceneId:"scn_237",prelocked:!1,enemies:[{ref:"Ghast|ToA",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_253",name:"友谊的考验遭遇",sceneId:"scn_253",prelocked:!1,enemies:[{ref:"Steam Mephit",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[105],confidence:"medium",needsReview:!0,extractorNotes:"原书第一分支数量为 1d3，且最多累计六只。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"向错误容器倒水会生成 1d3 只蒸汽魔蝠；整数 schema 记录最小值。四只苏怪是选择等待而不拿立方体时的独立分支。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_wongo_su_monsters",name:"望戈神龛：四只苏怪",sceneId:"scn_253",prelocked:!1,enemies:[{ref:"苏怪|ToA",count:4}],battlefield:{family:"dungeon"},levelScaling:{note:"只有立方体出现后无人立即拿取时，四只苏怪才被传送入室。"},_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_259",name:"露天剧场遭遇",sceneId:"scn_259",prelocked:!1,enemies:[{ref:"Deinonychus",count:5}],battlefield:{family:"jungle"},_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"五只恐爪龙固定住在看台下；翎羽之王白天仅 50%、夜间 25% 在场，另列条件首领分支。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_king_of_feathers",name:"露天剧场：翎羽之王",sceneId:"scn_259",prelocked:!1,enemies:[{ref:"King of Feathers|ToA",count:1}],battlefield:{family:"jungle"},levelScaling:{note:"白天 50%、夜间 25% 在巢；外出时每小时累计 20% 返回。"},_meta:{sourcePages:[106],confidence:"medium",needsReview:!0,extractorNotes:"首领在场概率随昼夜和停留时长变化。"},encounterPolicy:{engagement:"contact"}},{id:"enc_262",name:"废墟市集遭遇",sceneId:"scn_262",prelocked:!1,enemies:[{ref:"Kobold Inventor|ToA",count:2},{ref:"狗头人",count:10},{ref:"kobold scale sorcerer",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_26a",name:"神殿入口遭遇",sceneId:"scn_26a",prelocked:!1,enemies:[{ref:"Crocodile",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[107],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"被淹庭院固定有四只饥饿鳄鱼；巨鳄是其后方筑巢的母兽，另列条件分支。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_papazotl_giant_crocodile",name:"帕帕扎图神龛：巢中巨鳄",sceneId:"scn_26a",prelocked:!1,enemies:[{ref:"Giant Crocodile",count:1}],battlefield:{family:"jungle"},levelScaling:{note:"巨鳄在神殿后方筑巢，与庭院四只幼鳄分开结算。"},_meta:{sourcePages:[107],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_279",name:"神龛入口遭遇",sceneId:"scn_279",prelocked:!1,enemies:[{ref:"Grung Elite Warrior|ToA",count:5},{ref:"Hadrosaurus",count:1},{ref:"Grung Wildling",count:1},{ref:"Grung|ToA",count:7}],battlefield:{family:"jungle"},_meta:{sourcePages:[108],confidence:"medium",needsReview:!0,extractorNotes:"后续增援数量为每轮 1d4、总上限二十，当前敌群只记录初始编制。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"约伯与四名精英、坐骑、祭司和七名屋顶守卫构成初始守军；后续每轮另有 1d4 普通格龙蛙人，最多二十名。"},encounterPolicy:{engagement:"contact"}},{id:"enc_282",name:"神龛入口遭遇",sceneId:"scn_282",prelocked:!1,enemies:[{ref:"佐博怪|ToA",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_292",name:"王宫遭遇",sceneId:"scn_292",prelocked:!1,enemies:[{ref:"Yuan-ti Malison (Type 1)|ToA",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"王宫北侧主入口固定由三名 1 型恶咒蛇人守卫；南侧秘密入口另列独立分支。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_palace_secret_entrance",name:"王宫南侧：秘密入口守卫",sceneId:"scn_292",prelocked:!1,enemies:[{ref:"Yuan-ti Malison (Type 1)|ToA",count:3}],battlefield:{family:"jungle"},levelScaling:{note:"南侧秘密入口另由三名以蛇形态潜伏的 1 型恶咒蛇人守卫；与北侧主入口分开结算。"},_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2ad",name:"主门遭遇",sceneId:"scn_2ad",prelocked:!1,enemies:[{ref:"Yuan-ti Malison (Type 1)|ToA",count:1},{ref:"Yuan-ti Broodguard|ToA",count:4},{ref:"Swarm of Poisonous Snakes|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[114],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2b1",name:"战争大厅遭遇",sceneId:"scn_2b1",prelocked:!1,enemies:[{ref:"Yuan-ti Pureblood",count:1},{ref:"Yuan-ti Broodguard|ToA",count:4},{ref:"Basilisk|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"索科什、四名卫雏和两只受训石化蜥蜴守卫战争大厅；三角龙受威胁才冲破围栏逃离，不列固定敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_2b7",name:"军械库遭遇",sceneId:"scn_2b7",prelocked:!1,enemies:[{ref:"Bone Naga (Spirit)|ToA",count:1},{ref:"Minotaur Skeleton|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2ba",name:"芬萨札的住处遭遇",sceneId:"scn_2ba",prelocked:!1,enemies:[{ref:"Yuan-ti Malison (Type 2)|ToA",count:2},{ref:"Air Elemental",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[117],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"两名门卫先参战；只有芬萨札打开石瓮时气元素才加入。芬萨札本人优先制服、俘虏和谈判，不重复列作固定敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_2be",name:"祭祀室遭遇",sceneId:"scn_2be",prelocked:!1,enemies:[{ref:"Yuan-ti Broodguard|ToA",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[117],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2c2",name:"邪恶预言者遭遇",sceneId:"scn_2c2",prelocked:!1,enemies:[{ref:"Yuan-ti Malison (Type 3)|ToA",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"阿拉基提、库尔萨与妮斯三名蛇人祭司均使用书内 3 型恶咒蛇人变体；不重复加入基础统计。"},encounterPolicy:{engagement:"contact"}},{id:"enc_2d5",name:"后宫遭遇",sceneId:"scn_2d5",prelocked:!1,enemies:[{ref:"Yuan-ti Broodguard|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"两名原体卫雏全天守卫后宫；十一名纯血与潜伏的变形怪默认既不帮助也不阻碍角色。"},encounterPolicy:{engagement:"contact"}},{id:"enc_2da",name:"宝座室遭遇",sceneId:"scn_2da",prelocked:!1,enemies:[{ref:"Yuan-ti Malison (Type 1)|ToA",count:2},{ref:"Yuan-ti Broodguard|ToA",count:3},{ref:"Ghoul",count:4},{ref:"Champion",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[120,121],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"白天王座厅有两名恶咒蛇人、三名卫雏、四只食尸鬼与瑟克洛克；拉兹·纳斯可能在场但会按警报和交涉结果撤回巢穴。"},encounterPolicy:{engagement:"contact"}},{id:"enc_2e7",name:"储藏室遭遇",sceneId:"scn_2e7",prelocked:!1,enemies:[{ref:"giant constrictor snake",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2eb",name:"毒液蒸馏厂遭遇",sceneId:"scn_2eb",prelocked:!1,enemies:[{ref:"Yuan-ti Pureblood",count:1},{ref:"Zombie",count:5}],battlefield:{family:"jungle"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"索帕尔在毒液蒸馏厂固定由五个人类丧尸劳工环绕。"},encounterPolicy:{engagement:"contact"}},{id:"enc_2ef",name:"蛇坑遭遇",sceneId:"scn_2ef",prelocked:!1,enemies:[{ref:"Swarm of Poisonous Snakes|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2f1",name:"血浴遭遇",sceneId:"scn_2f1",prelocked:!1,enemies:[{ref:"yuan-ti pureblood",count:4},{ref:"Yuan-ti Malison (Type 2)|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2f3",name:"桑拿遭遇",sceneId:"scn_2f3",prelocked:!1,enemies:[{ref:"Gladiator",count:2},{ref:"Yuan-ti Malison (Type 1)|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"亚鲁与两名受奴役保镖优先交涉，仅角色挑起战斗时使用；不把保镖误当额外无名编制。"},encounterPolicy:{engagement:"contact"}},{id:"enc_2f5",name:"远地蛇巢遭遇",sceneId:"scn_2f5",prelocked:!1,enemies:[{ref:"Yuan-ti Malison (Type 1)|ToA",count:6},{ref:"yuan-ti pureblood",count:6}],battlefield:{family:"jungle"},_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2fb",name:"地下河遭遇",sceneId:"scn_2fb",prelocked:!1,enemies:[{ref:"Yuan-ti Broodguard|ToA",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2ff",name:"九头蛇的巢穴遭遇",sceneId:"scn_2ff",prelocked:!1,enemies:[{ref:"hydra",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_32a",name:"阿瑟瑞克的警告遭遇",sceneId:"scn_32a",prelocked:!1,enemies:[{ref:"Gargoyle",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[130,131],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"三只石像鬼只在方尖碑被攻击或首先受击时俯冲；破坏方尖碑释放的判魂魔另列分支。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_obelisk_nalfeshnee",name:"方尖碑：亵渎释放判魂魔",sceneId:"scn_32a",prelocked:!1,enemies:[{ref:"Nalfeshnee",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"只有方尖碑被推倒或摧毁时释放，出现一分钟后返回无底深渊。"},_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_340",name:"恶魔面孔遭遇",sceneId:"scn_340",prelocked:!1,enemies:[{ref:"shadow demon",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_347",name:"我们并不孤单遭遇",sceneId:"scn_347",prelocked:!1,enemies:[{ref:"wight",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[134],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_364",name:"摩亚的墓遭遇",sceneId:"scn_364",prelocked:!1,enemies:[{ref:"Flameskull",count:1},{ref:"Swarm of Insects",count:6}],battlefield:{family:"jungle"},_meta:{sourcePages:[137,138],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"激怒妮博特后，她以燃焰之颅数据攻击，下一轮六群不死蜘蛛从墙内涌出。"},encounterPolicy:{engagement:"contact"}},{id:"enc_36f",name:"望戈的墓遭遇",sceneId:"scn_36f",prelocked:!1,enemies:[{ref:"mummy",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_377",name:"地下瀑布遭遇",sceneId:"scn_377",prelocked:!1,enemies:[{ref:"mimic",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_37b",name:"恶魔坑遭遇",sceneId:"scn_37b",prelocked:!1,enemies:[{ref:"Swarm of Bats|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_383",name:"假墓遭遇",sceneId:"scn_383",prelocked:!1,enemies:[{ref:"Water Weird",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[141],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"陷阱触发第三轮时，西北、东北和东南三座酒池各涌出一只酒诡，均使用水诡数据。"},encounterPolicy:{engagement:"contact"}},{id:"enc_388",name:"僵尸门遭遇",sceneId:"scn_388",prelocked:!1,enemies:[{ref:"丧尸",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[141],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_38a",name:"帕帕扎图的墓遭遇",sceneId:"scn_38a",prelocked:!1,enemies:[{ref:"骷髅",count:12}],battlefield:{family:"jungle"},_meta:{sourcePages:[142],confidence:"medium",needsReview:!0,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核"},encounterPolicy:{engagement:"contact"}},{id:"enc_398",name:"娜浪的墓遭遇",sceneId:"scn_398",prelocked:!1,enemies:[{ref:"gray slaad",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_39f",name:"占卜池遭遇",sceneId:"scn_39f",prelocked:!1,enemies:[{ref:"Tomb Guardian|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"占卜被察觉一分钟后，一名穿板甲的墓穴守卫从池中升起；血肉魔像仅为基础数据。"},encounterPolicy:{engagement:"contact"}},{id:"enc_3a5",name:"墓穴矮人的锻造场遭遇",sceneId:"scn_3a5",prelocked:!1,enemies:[{ref:"Wight",count:1},{ref:"Tomb Guardian|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[144,145],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"墓穴矮人使用尸妖数据；铁制装置中完成的一名墓穴守卫同时攻击。血肉魔像只是墓穴守卫的基础数据，不另计。"},encounterPolicy:{engagement:"contact"}},{id:"enc_3aa",name:"威瑟斯的办公室遭遇",sceneId:"scn_3aa",prelocked:!1,enemies:[{ref:"Withers|ToA",count:1},{ref:"Crawling Claw|ToA",count:7}],battlefield:{family:"jungle"},_meta:{sourcePages:[145,146],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"威瑟斯使用自己的书内施法者数据，七只蠕行之爪跟随并服从他。"},encounterPolicy:{engagement:"contact"}},{id:"enc_3e7",name:"控制室遭遇",sceneId:"scn_3e7",prelocked:!1,enemies:[{ref:"Tomb Guardian|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"控制室固定有一名墓穴守卫；血肉魔像仅为其基础数据，不重复计数。"},encounterPolicy:{engagement:"contact"}},{id:"enc_3f0",name:"魔像坑遭遇",sceneId:"scn_3f0",prelocked:!1,enemies:[{ref:"clay golem",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[153],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_3f9",name:"墓穴守卫遭遇",sceneId:"scn_3f9",prelocked:!1,enemies:[{ref:"Tomb Guardian|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[154],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"长廊两侧壁龛各有一名墓穴守卫，两者由带刺魔法铁链相连；血肉魔像仅为基础数据。"},encounterPolicy:{engagement:"contact"}},{id:"enc_3fc",name:"库巴赞的墓遭遇",sceneId:"scn_3fc",prelocked:!1,enemies:[{ref:"Wraith|ToA",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[154,155],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"仪式做错才从骨堆升起三只邪灵；青蛙只是变形后果和库巴赞象征。"},encounterPolicy:{engagement:"contact"}},{id:"enc_417",name:"库内遭遇",sceneId:"scn_417",prelocked:!1,enemies:[{ref:"beholder",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_41e",name:"石像鬼守卫遭遇",sceneId:"scn_41e",prelocked:!1,enemies:[{ref:"四臂巨石像鬼|ToA",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_438",name:"莎根比的墓遭遇",sceneId:"scn_438",prelocked:!1,enemies:[{ref:"兵马俑|ToA",count:48}],battlefield:{family:"jungle"},_meta:{sourcePages:[160,161],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"四十八名兵马俑只在第二次噪音或棺盖音乐盒触发后攻击；狒狒、蝙蝠、飞蛇和食人鱼是南符文随机变形结果，活化盔甲只是兵马俑基础数据。"},encounterPolicy:{engagement:"contact"}},{id:"enc_449",name:"黑蛋白石皇冠遭遇",sceneId:"scn_449",prelocked:!1,enemies:[{ref:"Bodak|ToA",count:2}],battlefield:{family:"jungle"},_meta:{sourcePages:[162],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_44c",name:"生命陷阱之镜遭遇",sceneId:"scn_44c",prelocked:!1,enemies:[{ref:"Invisible Stalker",count:1},{ref:"Troll",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[163],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"摄心镜被摧毁时十二个牢房同时释放；来源建议初始只让隐形追猎者与巨魔攻击队伍，其他囚犯按各自反应交战、协助或逃离。"},encounterPolicy:{engagement:"contact"}},{id:"enc_450",name:"恐怖之门遭遇",sceneId:"scn_450",prelocked:!1,enemies:[{ref:"Ghast|ToA",count:6}],battlefield:{family:"jungle"},_meta:{sourcePages:[163],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_465",name:"安珂的墓遭遇",sceneId:"scn_465",prelocked:!1,enemies:[{ref:"Minotaur Skeleton|ToA",count:10}],battlefield:{family:"jungle"},_meta:{sourcePages:[166,167],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"首次触碰迷宫雕刻时十副骨骸组成骷髅牛头人；青蛙只来自奖励护咒。"},encounterPolicy:{engagement:"contact"}},{id:"enc_484",name:"腐朽齿轮遭遇",sceneId:"scn_484",prelocked:!1,enemies:[{ref:"Shambling Mound|ToA",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_488",name:"血之齿轮遭遇",sceneId:"scn_488",prelocked:!1,enemies:[{ref:"Orc War Chief",count:1},{ref:"Orc|ToA",count:7}],battlefield:{family:"jungle"},_meta:{sourcePages:[169,170],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"血之齿轮五个衣柜必须逐个打开；此条只表示兽人衣柜，其他四波各自独立。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_blood_cog_mezzoloths",name:"血之齿轮：毒虫罗斯魔衣柜",sceneId:"scn_488",prelocked:!1,enemies:[{ref:"Mezzoloth|ToA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"第二个衣柜的独立波次。"},_meta:{sourcePages:[169,170],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_blood_cog_monodrone",name:"血之齿轮：迷失单元冢",sceneId:"scn_488",prelocked:!1,enemies:[{ref:"Monodrone",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"第三个衣柜召出倒地且只会自卫的单元冢。"},_meta:{sourcePages:[170],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_blood_cog_bone_devil",name:"血之齿轮：骨魔衣柜",sceneId:"scn_488",prelocked:!1,enemies:[{ref:"Bone Devil",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"第四个衣柜的独立波次。"},_meta:{sourcePages:[170],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_blood_cog_wisps",name:"血之齿轮：鬼火衣柜",sceneId:"scn_488",prelocked:!1,enemies:[{ref:"Will-o'-Wisp|ToA",count:4}],battlefield:{family:"dungeon"},levelScaling:{note:"第五个衣柜的独立波次，鬼火在攻击前保持隐形。"},_meta:{sourcePages:[170],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_4a8",name:"秘密房间遭遇",sceneId:"scn_4a8",prelocked:!1,enemies:[{ref:"岩石战车|ToA",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[173],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_4b1",name:"地下湖遭遇",sceneId:"scn_4b1",prelocked:!1,enemies:[{ref:"Aboleth",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[174,175],confidence:"medium",needsReview:!0,extractorNotes:"原书以任意骰奇偶决定残暴/孩童人格，当前 encounter 仅表达敌对分支。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"格里鲁尔只有残暴人格占主导时主动阻止队伍；荧光蟹是门钥匙，墓穴矮人除非受击只维护齿轮。"},encounterPolicy:{engagement:"contact"}},{id:"enc_4bd",name:"金象大厅遭遇",sceneId:"scn_4bd",prelocked:!1,enemies:[{ref:"Spined Devil|ToA",count:4}],battlefield:{family:"jungle"},_meta:{sourcePages:[175,176],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"金象大厅按轮次依次召唤五波魔鬼；此条只表示第二轮的四只棘魔。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_gold_elephant_bearded",name:"金象大厅：须魔波次",sceneId:"scn_4bd",prelocked:!1,enemies:[{ref:"Bearded Devil|ToA",count:3}],battlefield:{family:"dungeon"},levelScaling:{note:"第三轮出现。"},_meta:{sourcePages:[176],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_gold_elephant_barbed",name:"金象大厅：猬魔波次",sceneId:"scn_4bd",prelocked:!1,enemies:[{ref:"Barbed Devil|ToA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"第四轮出现。"},_meta:{sourcePages:[176],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_gold_elephant_horned",name:"金象大厅：角魔波次",sceneId:"scn_4bd",prelocked:!1,enemies:[{ref:"Horned Devil",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"第五轮出现。"},_meta:{sourcePages:[176],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_gold_elephant_erinyes",name:"金象大厅：罪魔波次",sceneId:"scn_4bd",prelocked:!1,enemies:[{ref:"Erinyes",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"第六轮出现；角色可与其交易灵魂结束剩余魔鬼，但代价按来源结算。"},_meta:{sourcePages:[176],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_4c9",name:"机械境链遭遇",sceneId:"scn_4c9",prelocked:!1,enemies:[{ref:"pentadrone",count:1},{ref:"Quadrone|ToA",count:9}],battlefield:{family:"jungle"},_meta:{sourcePages:[177],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_4cf",name:"浑天仪遭遇",sceneId:"scn_4cf",prelocked:!1,enemies:[{ref:"nycaloth",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[177],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_4d8",name:"缝补姐妹的巢穴遭遇",sceneId:"scn_4d8",prelocked:!1,enemies:[{ref:"Night Hag",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[178,179,180],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"缝补姐妹是三名在边界以太位面监视队伍的夜鬼婆；无攻击娃娃、退化克隆体和骷髅钥匙不列敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_4e8",name:"正方形试炼遭遇",sceneId:"scn_4e8",prelocked:!1,enemies:[{ref:"dust mephit",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[181],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_4eb",name:"五边形试炼遭遇",sceneId:"scn_4eb",prelocked:!1,enemies:[{ref:"scarecrow",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[182],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_4f0",name:"六边形试炼遭遇",sceneId:"scn_4f0",prelocked:!1,enemies:[{ref:"Wereboar",count:3}],battlefield:{family:"jungle"},_meta:{sourcePages:[183],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"少于六根蜡烛时拉动假拉杆，会从镜中召出三名混合形态野猪人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_atropal",name:"死亡之神育婴室：萎缩者",sceneId:"scn_4fa",prelocked:!1,enemies:[{ref:"萎缩者|ToA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"萎缩者保护灵魂收割者；死亡后阿瑟瑞克立即到来复仇。"},_meta:{sourcePages:[184,185],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_toa_acererak",name:"死亡之神育婴室：阿瑟瑞克复仇",sceneId:"scn_4fa",prelocked:!1,enemies:[{ref:"Acererak|ToA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"仅在萎缩者被摧毁后到来；九诡神附身者每回合获得临时生命，阿瑟瑞克被逼至 100 生命以下会传送离开。"},_meta:{sourcePages:[185,186],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_50d",name:"仇恨礼拜堂遭遇",sceneId:"scn_50d",prelocked:!1,enemies:[{ref:"Nothic|ToA",count:8}],battlefield:{family:"jungle"},_meta:{sourcePages:[186,187],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"八只诺斯怪只有被释放后才可近战；皮袋中的骑士或其他俘虏是营救对象。"},encounterPolicy:{engagement:"contact"}},{id:"enc_51c",name:"红图书馆遭遇",sceneId:"scn_51c",prelocked:!1,enemies:[{ref:"arcanaloth",count:1}],battlefield:{family:"jungle"},_meta:{sourcePages:[188],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}}],i=[{id:"qst_main_toa",title:"湮灭之墓：摧毁灵魂收割者",chapterId:"02e",stages:[{id:"stage_toa_port",title:"南扎路港的准备",objectives:[{id:"obj_toa_confirm_curse",type:"narrative",description:"接受辛德拉委托，确认死亡诅咒会阻止复活并逐日侵蚀曾被复活者；远征目标是在楚尔特找到并摧毁灵魂收割者。",evidenceRequired:!0},{id:"obj_toa_prepare_supplies",type:"reach",targetRef:"scn_083",description:"在南扎路港购买独木舟、集雨器、驱虫剂与口粮，并选择是否雇佣一名或多名向导。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_083"}},{id:"obj_toa_collect_leads",type:"reach",targetRef:"scn_03c",description:"从泽腾贝的异象、瓦康嘎的研究、向导或其他可靠来源取得‘悬崖环绕的南方失落城与黑色方尖碑’线索。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_03c"}}]},{id:"stage_toa_expedition",title:"楚尔特开放远征",objectives:[{id:"obj_toa_choose_route",type:"reach",targetRef:"scn_09d",description:"按向导、补给和线索选择河流、海岸或陆路路线；楚尔特地点可以跳过、回访和交错探索，不强制固定全清顺序。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_09d"}},{id:"obj_toa_survive_jungle",type:"narrative",description:"逐日结算导航、天气、饮水、食物、驱虫剂、疾病和随机遭遇，同时推进死亡诅咒时间压力。",evidenceRequired:!0},{id:"obj_toa_locate_omu",type:"reach",targetRef:"scn_18d",description:"完成奥罗伦加神塔试炼并从守秘纳迦萨嘉·恩巴扎确认奥姆位于火焰峰与失落荣誉谷之间的下沉盆地。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_18d"}}]},{id:"stage_toa_omu",title:"奥姆与九座神龛",objectives:[{id:"obj_toa_enter_omu",type:"reach",targetRef:"scn_1fb",description:"从河谷或悬崖进入奥姆，辨认九座诡神神龛、红袍法师与蛇人争夺拼图立方体的局势。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_1fb"}},{id:"obj_toa_collect_cubes",type:"narrative",description:"按任意顺序解开仍可进入的诡神神龛并收集拼图立方体；记录被红袍或蛇人先取走的立方体，不伪造九座固定顺序。",evidenceRequired:!0},{id:"obj_toa_reach_palace",type:"reach",targetRef:"scn_292",description:"追查被拉兹·纳斯夺走的最后一枚立方体，找到王宫下夜蛇圣所的主门或秘密入口。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_292"}}]},{id:"stage_toa_fane",title:"夜蛇圣所",objectives:[{id:"obj_toa_infiltrate_fane",type:"reach",targetRef:"scn_29d",description:"选择伪装、被俘、秘密入口、芬萨札政变或正面突入等来源允许路线进入圣所。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_29d"}},{id:"obj_toa_resolve_ras_nsi",type:"reach",targetRef:"scn_2e1",description:"与拉兹·纳斯谈判或战斗；揭示死亡诅咒来自九神之墓后，可取得他持有的剩余拼图立方体。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_2e1"}},{id:"obj_toa_leave_fane",type:"reach",targetRef:"scn_303",description:"保留芬萨札、瑟克洛克、俘虏与其他蛇人的存活后果，从主门、地下河或秘密入口离开。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_303"}}]},{id:"stage_toa_tomb",title:"开启九神之墓",objectives:[{id:"obj_toa_open_tomb",type:"reach",targetRef:"scn_334",description:"把九枚拼图立方体放入真正入口的骷髅门，识破假入口并进入第一层腐烂大厅。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_334"}},{id:"obj_toa_accept_god_spirits",type:"reach",targetRef:"scn_321",description:"在九位诡神亡魂尝试附身时记录宿主、互斥关系、缺陷与力量；不把亡魂当作固定敌人。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_321"}},{id:"obj_toa_descend_levels",type:"narrative",description:"在六层墓穴中自由选择楼梯、支路与回访路线，处理陷阱、威瑟斯、墓穴守卫和两名传奇居民。",evidenceRequired:!0}]},{id:"stage_toa_skeleton_keys",title:"五把骷髅钥匙",objectives:[{id:"obj_toa_collect_keys",type:"reach",targetRef:"scn_309",description:"从前五层各捕获或击毁一只会主动逃跑的骷髅钥匙，保存五个不同形状的头骨。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_309"}},{id:"obj_toa_open_keyholes",type:"reach",targetRef:"scn_4d8",description:"完成 72–76 号五项几何试炼，打开五个钥匙孔并插入对应骷髅钥匙。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_4d8"}},{id:"obj_toa_resolve_hags",type:"reach",targetRef:"scn_4d8",description:"识别并处理边界以太位面的缝补姐妹，同时决定是否营救退化克隆体与三个儿童灵魂娃娃。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_4d8"}}]},{id:"stage_toa_soulmonger",title:"死亡之神育婴室",objectives:[{id:"obj_toa_destroy_soulmonger",type:"reach",targetRef:"scn_4fa",description:"摧毁灵魂收割者本体或三条精金支架中的任意一条，使装置坠入岩浆并释放未被吞噬的灵魂。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_4fa"}},{id:"obj_toa_defeat_atropal",type:"reach",targetRef:"scn_4fa",description:"击败守护装置的萎缩者；其死亡会立即引来阿瑟瑞克复仇。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_4fa"}},{id:"obj_toa_survive_acererak",type:"reach",targetRef:"scn_4fa",description:"借九诡神亡魂的临时生命对抗阿瑟瑞克，迫使其在生命降至 100 以下时传送撤退，或以其他来源允许方式脱身。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_4fa"}}]},{id:"stage_toa_epilogue",title:"诅咒终止",objectives:[{id:"obj_toa_escape_tomb",type:"reach",targetRef:"scn_512",description:"经最终之厅或其他已开启路线离开墓穴，带走幸存同伴与可离开墓穴的遗物。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_512"}},{id:"obj_toa_resolve_syndra",type:"reach",targetRef:"scn_524",description:"结算死亡诅咒终止、辛德拉存亡与复活条件、奥姆和夜蛇圣所后果，并领取仍可兑现的报酬。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_524"}}]}],_meta:{sourcePages:[8,16,24,37,40,81,91,95,105,111,121,125,129,178,184,185,188,190],confidence:"high",needsReview:!1,extractorNotes:"按来源的港城准备、开放远征、九立方体、夜蛇圣所、五钥匙与灵魂收割者终局重建。；overlay覆写:title/chapterId/stages/_meta"},progression:"objectives",completionCondition:{type:"and",clauses:[{type:"quest_objective",questId:"qst_main_toa",objectiveId:"obj_toa_escape_tomb"},{type:"quest_objective",questId:"qst_main_toa",objectiveId:"obj_toa_resolve_syndra"}]}}],c=[{id:"evt_toa_zitembe_vision",sceneId:"scn_03c",trigger:{type:"player_action",verbClass:"speak",targetRef:"npc_grandfather_zitembe"},once:!0,effects:[{kind:"reveal_info",infoId:"info_toa_omu_vision"}],narrationHint:"泽腾贝完成二十四小时仪式后描述悬崖、蛇与黑色方尖碑。",_meta:{sourcePages:[20],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐事件来源复核清单"}},{id:"evt_toa_saja_location",sceneId:"scn_18d",trigger:{type:"player_action",verbClass:"speak"},once:!0,effects:[{kind:"reveal_info",infoId:"info_toa_omu_vision"}],narrationHint:"通过神塔三层试炼后，守秘纳迦把奥姆位置补全到可导航范围。",_meta:{sourcePages:[80,81],confidence:"high",needsReview:!1,extractorNotes:"targetRef自由文本「萨嘉·恩巴扎」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device；配置列入逐事件来源复核清单"}},{id:"evt_toa_learn_cubes",sceneId:"scn_1fb",trigger:{type:"player_action",verbClass:"scavenge",targetRef:"scn_1fb"},once:!0,effects:[{kind:"reveal_info",infoId:"info_toa_puzzle_cubes"}],narrationHint:"城内神龛、竞争者足迹与方尖碑共同表明九枚立方体是墓门钥匙。",_meta:{sourcePages:[95,96],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐事件来源复核清单"}},{id:"evt_toa_ras_bargain",sceneId:"scn_2e1",trigger:{type:"player_action",verbClass:"speak",targetRef:"npc_ras_nsi"},once:!0,effects:[{kind:"reveal_info",infoId:"info_toa_ras_bargain"},{kind:"reveal_info",infoId:"info_toa_puzzle_cubes"}],narrationHint:"说明要终结死亡诅咒后，拉兹·纳斯交出剩余立方体并允许队伍离开。",_meta:{sourcePages:[114,121],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐事件来源复核清单"}},{id:"evt_toa_withers_journal",sceneId:"scn_3aa",trigger:{type:"player_action",verbClass:"scavenge"},once:!0,effects:[{kind:"reveal_info",infoId:"info_toa_skeleton_keys"},{kind:"reveal_info",infoId:"info_toa_soulmonger"}],narrationHint:"日记把墓穴维护、五把钥匙、萎缩者与灵魂收割者连接起来。",_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"targetRef自由文本「威瑟斯日记」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device；配置列入逐事件来源复核清单"}},{id:"evt_toa_destroy_soulmonger",sceneId:"scn_4fa",trigger:{type:"player_action",verbClass:"use"},once:!0,effects:[{kind:"reveal_info",infoId:"info_toa_soulmonger"},{kind:"reveal_info",infoId:"info_toa_acererak_revenge"}],narrationHint:"装置或支架归零后坠入岩浆，死亡诅咒停止；萎缩者若死则阿瑟瑞克现身。",_meta:{sourcePages:[184,185],confidence:"medium",needsReview:!0,extractorNotes:"运行时没有可受击装置、支架共享破坏条件与紧接首领战的复合状态机；数值与顺序由主持人按来源结算。；targetRef自由文本「灵魂收割者」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}}],d=[],r=[{id:"trs_073_0",sceneId:"scn_073",container:"锁在",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"盗贼工具"}],once:!0,_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「这套物品包含相当于在城主指南中库藏宝藏：挑战等级 0—4表格的"宝石或艺术品"栏掷骰两次所获得的个人物品。 如果房间内有珠宝，则有50概率被锁在珠宝盒中，需要使用盗贼工具并通过一次DC 15敏捷检定才能打开。」'}},{id:"trs_0bb_0",sceneId:"scn_0bb",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"一个托姆的银色圣徽（价值25金币）仍然挂在神殿墙上的一个钉子上"}],once:!0,_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「一个托姆的银色圣徽（价值25金币）仍然挂在神殿墙上的一个钉子上，用皮绳挂着，直到现在才被发现。」"}},{id:"trs_0be_0",sceneId:"scn_0be",container:"袋子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"里面装有五颗各式各样的宝石（每颗价值10金币）"}],once:!0,_meta:{sourcePages:[45],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「搜索死去的圣骑士的角色会发现一套鳞甲（已毁），一把战锤，以及一个袋子，里面装有五颗各式各样的宝石（每颗价值10金币）。」"}},{id:"trs_0c9_0",sceneId:"scn_0c9",container:"袋子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"炼金壶"}],once:!0,_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这个壶是一个炼金壶，很久以前被崇拜它作为乌伯托礼物的楚尔坦人放置在这里。 唯一安全拿起炼金壶的方法是模仿人与鳄鱼的动作。 在骑手/搬运者的团队中，任何一个成员都可以安全地拿起壶并将其带出房间。 如果壶被其他人拿起，松动的砖块开始从天花板上掉…」"}},{id:"trs_0de_0",sceneId:"scn_0de",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"爆裂头饰"},{kind:"fixed",itemRef:"33 gp"},{kind:"fixed",itemRef:"50 gp"}],once:!0,_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Groak国王戴着一个爆裂头饰，他不怕用它来对付任何侮辱或违抗他的人。 他的水池底部铺着33金币和一个拳头大小的绿色石英块（50金币）。」"}},{id:"trs_0ea_0",sceneId:"scn_0ea",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"15 gp"},{kind:"fixed",itemRef:"60 gp"},{kind:"fixed",itemRef:"50 gp"}],once:!0,_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「勇敢面对吸血蝙蝠并搜索死去探险家的角色可以回收15金币，一枚金和红玉髓戒指（60金币），以及两个代表怯蕴阿灵的黑玉雕像（每个50金币）。 有关怯蕴阿灵的更多信息，请参见附录D。」"}},{id:"trs_0ef_0",sceneId:"scn_0ef",container:"木箱",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"法术卷轴"},{kind:"fixed",itemRef:"野兽面具"},{kind:"fixed",itemRef:"2000 cp"},{kind:"fixed",itemRef:"730 sp"},{kind:"fixed",itemRef:"四颗宝石（每颗价值50金币）"}],once:!0,_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「塔内有简陋的巢穴和四个发霉的木箱。 这些箱子没有上锁。 总共，它们包含2000铜币，730银币，四颗宝石（每颗价值50金币），以及一张en=Commune with Nature的法术卷轴。 其中一个箱子还装有一个布包裹的木制面具，它类似于…」"}},{id:"trs_105_0",sceneId:"scn_105",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"治疗药水",count:4},{kind:"fixed",itemRef:"法术卷轴",count:4},{kind:"fixed",itemRef:"+1 箭",count:5},{kind:"fixed",itemRef:"命令水元素水钵"}],once:!0,_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「第二个房间包含四瓶治疗药水，四个法术卷轴（两个en=Lesser Restoration和两个en=Purify Food and Drink），一个箭袋中有五支+1 箭矢，以及一个命令水元素水钵（用于要塞的最后防线）。 波提尔和哈尔斯多蒂…」"}},{id:"trs_108_0",sceneId:"scn_108",container:"床下",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"盗贼工具"},{kind:"fixed",itemRef:"短讯石"}],once:!0,_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「一个角色如果在莉尔阿·波提尔的床下搜寻，会发现一个上锁的铁制保险箱。 使用盗贼工具并通过DC 18敏捷检定成功的角色可以将其撬开。 箱子里有220枚金币和一块短讯石，莉亚拉用它来与贾哈卡锚地的海盗们联系。」"},coins:{dice:"220d1"}},{id:"trs_110_0",sceneId:"scn_110",container:"存放",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"法术卷轴",count:2}],once:!0,_meta:{sourcePages:[60],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「书架上摆满了书籍、卷轴、石板和地图，它们都以这样或那样的方式关于楚尔特。 它们深入覆盖了历史、地理、文化和自然哲学，但所有这些资料都早于咒灾。 如果瓦琳朵拉得知其存在，她会不惜杀人以获取辛德拉·席尔瓦因的地图。 她的法术书并不在这里——它们…」"}},{id:"trs_120_0",sceneId:"scn_120",container:"存放",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"每块铁锭价值1金币"},{kind:"fixed",itemRef:"每块精金锭价值10金币"},{kind:"fixed",itemRef:"价值2500金币"}],once:!0,_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「金库中存放着Hrakhamar积累的财富。 成千上万的铁锭和精金锭被整齐地分类、堆放和装箱。 每块铁锭价值1金币，重10磅。 每块精金锭价值10金币，重1磅。 如果Sithi Vinecutter在场，她会允许角色们收集他们的奖励，尽管她会…」"}},{id:"trs_135_0",sceneId:"scn_135",container:"存放",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"法术卷轴"},{kind:"fixed",itemRef:"6400 cp"},{kind:"fixed",itemRef:"2500 sp"},{kind:"fixed",itemRef:"300 gp"},{kind:"fixed",itemRef:"25 gp"}],once:!0,_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「仓库的宝藏存放在许多未上锁的箱子、袋子、密封的板条箱和木桶中。 这个宝藏包括6400铜币，2500银币，300金币，60白金币，十个金手镯（每个25金币），一个锑制高脚杯（25金币），以及两个装在塞着软木塞的木管中的法术卷轴（en=Knoc…」"}},{id:"trs_13c_0",sceneId:"scn_13c",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"水下呼吸药水"},{kind:"fixed",itemRef:"140 sp"}],once:!0,_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「通过成功的 DC 12 感知（察觉）检定，可以在海箱中发现一个假底。 隔间内装有 58 gp、140 sp、一瓶 水下呼吸药水 和三块黑色眼罩。 （海盗船长们在尝试从 区域4 移除宝藏前会戴上眼罩。 ）」"},coins:{dice:"58d1"}},{id:"trs_154_0",sceneId:"scn_154",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"这些总共价值330金币"}],once:!0,_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「姆瓦克丝娜瑞拥有许多美丽的小饰品：银制的刷子和镜子、水晶香水瓶、由多色鹦鹉羽毛制成的书写笔、用来编入她头发的珠宝、镶有炽热的楚特猫眼石和琥珀的项链和戒指。 这些总共价值330金币，但在Kir Sabal被抓到偷取姆瓦克丝娜瑞的物品意味着死亡…」"}},{id:"trs_15a_0",sceneId:"scn_15a",container:"存放",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"法术卷轴"},{kind:"fixed",itemRef:"内装：六颗缟玛瑙（每颗价值50金币）、一张法术卷轴（记载en=Comprehend Languages法术）、十块印有矮人符文的精金锭（每块价值10金币）"}],once:!0,_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「绿女巫在她的小屋中没有存放任何有价值的东西。 她的宝藏隐藏在旧村庄的一个蓄水池里。 任何穿过废墟的人都会发现蓄水池。 蓄水池的开口直径为15尺，井道下降15尺到达污浊的黑色水面。 蓄水池的边缘和墙壁都是砖砌的。 此处水深40尺且异常浑浊，导…」"}},{id:"trs_15a_1",sceneId:"scn_15a",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"镀银匕首"},{kind:"fixed",itemRef:"高等治疗药水"}],once:!0,_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在洞穴的后半部分有两具被部分啃食的探险家尸体。 它们附近一个被丢弃的背包里有一个装有6 gp的小包、一把镀银匕首和一瓶高等治疗药水。」"},coins:{dice:"6d1"}},{id:"trs_17d_0",sceneId:"scn_17d",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"守护卷轴"},{kind:"fixed",itemRef:"10 gp"},{kind:"fixed",itemRef:"50 gp"}],once:!0,_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「角色们在搜寻垃圾时会发现魔王鹤藏起来的一些小玩意儿，包括一个包含七颗不同宝石的小袋（每颗10金币），一个形状像羽蛇的彩绘金手镯（50金币），以及一个雕刻有骷髅的木制卷轴筒，里面装有一份守护卷轴（不死生物）。」"}},{id:"trs_182_0",sceneId:"scn_182",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"她的羽毛礼服价值50金币"}],once:!0,_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在扎尔柯蕊的巢穴中，大部分遗留物都没有什么价值。 她的羽毛礼服价值50金币，前提是它没有在战斗中被严重损坏（如果扎尔柯蕊受到的伤害超过一半是劈砍、酸或火焰伤害，或者她受到了en=Fireball或类似效果的影响，那么这件礼服就被毁了）。 她…」"},coins:{dice:"10d1"}},{id:"trs_188_0",sceneId:"scn_188",container:"藏着",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"恐惧魔杖"},{kind:"fixed",itemRef:"+1 投石索子弹",count:5},{kind:"fixed",itemRef:"55 gp"},{kind:"fixed",itemRef:"800 sp"},{kind:"fixed",itemRef:"10 gp"},{kind:"fixed",itemRef:"500 gp"},{kind:"fixed",itemRef:"头骨盒子价值12金币"}],once:!0,_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在洞穴西北墙上的一个 10 英尺宽、10 英尺高的密门隐藏着一个 15 英尺深的壁龛。 密门由天然岩石雕刻而成，伪装成墙壁的一部分，周围的植物都已枯死。 密门可以通过成功的 DC 17 感知（察觉）检定发现。 检查门周围植物并成功通过 DC…」"}},{id:"trs_1a8_0",sceneId:"scn_1a8",container:"木箱",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"制图工具"},{kind:"fixed",itemRef:"皮匠工具"},{kind:"fixed",itemRef:"草药工具"},{kind:"fixed",itemRef:"治疗药水",count:2},{kind:"fixed",itemRef:"里面装着一个探险者背包、一个望远镜、一套三龙牌（虎人不知道玩法）、装有四颗杂色宝石（每颗价值100金币）的皮袋"}],once:!0,_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「虎人的小屋里收集了足够多的零散装备，可以制作一套制图工具和一套皮匠工具，还有一个草药工具。 虎人吊床旁有个破旧的木箱，里面装着一个探险者背包、一个望远镜、一套三龙牌（虎人不知道玩法）、装有四颗杂色宝石（每颗价值100金币）的皮袋，以及两瓶治…」"}},{id:"trs_1b7_0",sceneId:"scn_1b7",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"秘银胸甲"}],once:!0,_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「大部分矮人的财物被龙火烧毁或熔化了，但有一具骷髅身上穿着一个幸存下来的秘银胸甲（秘银胸甲）。」"}},{id:"trs_1cc_0",sceneId:"scn_1cc",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"高等治疗药水"},{kind:"fixed",itemRef:"+1 战斧"},{kind:"fixed",itemRef:"3300 gp"},{kind:"fixed",itemRef:"15000 sp"},{kind:"fixed",itemRef:"45000 cp"},{kind:"fixed",itemRef:"25 gp"},{kind:"fixed",itemRef:"50 gp"},{kind:"fixed",itemRef:"100 gp"}],once:!0,_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「龙的宝藏包括3300金币，15000银币，45000铜币，一个金色刺绣的剑鞘（25金币），一个由金子制成的龙形奖章和链子（50金币），一个镶有翡翠的铜质杯子（100金币），以及一瓶高等治疗药水。 靠南墙的老箱子和桶里各有1d12件矮人制作的…」"}},{id:"trs_1fb_0",sceneId:"scn_1fb",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"这件武器价值250金币"}],once:!0,_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「3型malison的长弓被漆成并雕刻成蛇形，用细小的琥珀色宝石作为眼睛。 作为艺术品，这件武器价值250金币。」"}},{id:"trs_22c_0",sceneId:"scn_22c",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"午夜之泪",count:5}],once:!0,_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「角色们在斑猫猎人的巢穴中搜寻时，会在一个空心葫芦里找到五剂午夜之泪（摄入），以及足够的装备来制作一个探险家背包。」"}},{id:"trs_259_0",sceneId:"scn_259",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"心灵感应头盔"},{kind:"fixed",itemRef:"25 gp"},{kind:"fixed",itemRef:"250 gp"}],once:!0,_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在露天剧场下的房间中搜寻，发现了一件刻有楚尔坦宴会仪式图像的电气石托盘（25金币），一个用彩绘黄金制成的欧姆死亡面具（250金币），以及一件心灵感应头盔。」"}},{id:"trs_262_0",sceneId:"scn_262",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"高等治疗药水"},{kind:"fixed",itemRef:"75 gp"},{kind:"fixed",itemRef:"30 gp"},{kind:"fixed",itemRef:"250 sp"},{kind:"fixed",itemRef:"1800 cp"},{kind:"fixed",itemRef:"25 gp"},{kind:"fixed",itemRef:"50 gp"}],once:!0,_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「卡卡罗尔身穿一件6尺长的、被撕裂的金刚鹦鹉挂毯，上面装饰着石榴石珠子（75金币）作为斗篷。 他的宝藏包括30金币，250银币，1800铜币，一个蜻蜓形状的彩色玻璃小雕像（25金币），四颗血石（每颗50金币），以及一瓶高等治疗药水。」"}},{id:"trs_28b_0",sceneId:"scn_28b",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"不动权杖"}],once:!0,_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「沃伊携带一根不动权杖，一个装有三颗虎眼宝石的皮袋（每颗10金币），以及一本红色皮革装订的魔法书，其中包含了他准备的所有法术。」"},coins:{dice:"10d1"}},{id:"trs_2ad_0",sceneId:"scn_2ad",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"并佩戴着雕刻成蝙蝠形状的金色仪式护腕（一对价值150金币）"}],once:!0,_meta:{sourcePages:[114],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Nahth有一个鳄鱼皮袋，里面装有28金币，并佩戴着雕刻成蝙蝠形状的金色仪式护腕（一对价值150金币）。」"},coins:{dice:"28d1"}},{id:"trs_2ba_0",sceneId:"scn_2ba",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"200 gp"},{kind:"fixed",itemRef:"75 gp"},{kind:"fixed",itemRef:"25 gp"},{kind:"fixed",itemRef:"她的脖子上挂着夜蛇Dendar的圣徽（价值25金币）"}],once:!0,_meta:{sourcePages:[117],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「芬萨札 携带着一串钥匙，可以打开区域8中囚犯所戴的手铐和脚镣。 她的脖子上挂着夜蛇Dendar的圣徽（价值25金币）。 箱子没有上锁，里面有200金币，一个黑色皮制箭袋，上面绣有镶嵌石英的星图（75金币），还有一把仪式用匕首，装在金鞘中，上…」"}},{id:"trs_2d5_0",sceneId:"scn_2d5",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"750 gp"},{kind:"fixed",itemRef:"250 gp"},{kind:"fixed",itemRef:"75 gp"}],once:!0,_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「角色们洗劫这些房间会获得以下宝物：一顶由两条交织在一起的蝰蛇形状制成的白金头冠，上面镶嵌着托帕石眼睛（750金币），一个翡翠制成的捕蝇草形状的小饰品盒，周围环绕着卷曲的金叶子（250金币），以及一对金色眼镜蛇形状的烛台（每个75金币）。」"}},{id:"trs_2e1_0",sceneId:"scn_2e1",container:"藏有",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"焰舌"},{kind:"fixed",itemRef:"短讯石"},{kind:"fixed",itemRef:"50 gp"},{kind:"fixed",itemRef:"75 gp"},{kind:"fixed",itemRef:"100 gp"},{kind:"fixed",itemRef:"250 gp"},{kind:"fixed",itemRef:"25 gp"},{kind:"fixed",itemRef:"350 gp"},{kind:"fixed",itemRef:"900 sp"},{kind:"fixed",itemRef:"他的宝藏中还包括一个陶罐中装有三十颗50金币的宝石"}],once:!0,_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「拉兹·纳斯挥舞一把焰舌长剑，并携带一块短讯石。 伴生石在萨莉达的的手中（见"寻找向导"）。 拉兹·纳斯的巢穴里藏有来自遥远之地的财宝。 收藏品包括一个散提亚酒瓶（50金币），一件镶有宝石的安姆尼亚夹克配相同钱袋（75金币），一件精致的科米尔…」'}},{id:"trs_2eb_0",sceneId:"scn_2eb",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"蛇毒",count:20},{kind:"fixed",itemRef:"乙醚精",count:5}],once:!0,_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「索帕尔携带一把铜钥匙，可以打开南门。 搜索毒药的玩家可以掠夺二十剂蛇毒、五剂乙醚精和五剂麻痹毒药（详见城主指南第八章"毒药"）。」'}},{id:"trs_2f7_0",sceneId:"scn_2f7",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"250 gp"},{kind:"fixed",itemRef:"75 gp"}],once:!0,_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「伊萨尔携带一把铁钥匙，可以打开通往 区域13 的双扇门。 他的红色布头巾上缝有孔雀石宝石（250 gp），他还在一把金手镜（75 gp）前打扮。」"}},{id:"trs_309_0",sceneId:"scn_309",container:"藏在",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"隐藏在墓中的众多宝藏中，有四个传说中的艺术品，它们具有特殊价值。"}],once:!0,_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「隐藏在墓中的众多宝藏中，有四个传说中的艺术品，它们具有特殊价值。 阿瑟瑞克 使用它们来吸引冒险家到墓中。 任何熟练于历史技能的角色在看到这些宝物之一时，可以通过一次成功的DC 20智力（历史）检定回忆起其传说。」"}},{id:"trs_32f_0",sceneId:"scn_32f",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"它价值25金币"}],once:!0,_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「一个形状像眼睛的金色吊坠挂在安珂雕像上。 它价值25金币，散发着占卜魔法的气息。 如果佩戴这个吊坠的角色进入区域1的方尖碑附近10尺范围内，吊坠会拉着角色朝隐藏的墓穴入口（区域4）移动。 这个吊坠在区域79也有用。」"}},{id:"trs_356_0",sceneId:"scn_356",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"防护戒指"}],once:!0,_meta:{sourcePages:[135],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「石棺内尘土飞扬的一堆中躺着一只佐博（奥博娜卡的动物形态； 见附录D）。 一个防护戒指放在堆顶。 如果这个戒指离开九神之墓（但见"失落的宝藏"），它就会化为灰尘并被摧毁。」'}},{id:"trs_35f_0",sceneId:"scn_35f",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"法术卷轴"},{kind:"fixed",itemRef:"它的脸会露出微笑（价值250金币）"}],once:!0,_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「箱子内部衬有铅皮，内含300金币，一个悲伤面孔的金质酒杯，当酒杯被倒满时，它的脸会露出微笑（价值250金币），以及一个塞着的骨筒，内含一张法术卷轴，上面写着en=Remove Curse法术。」"},coins:{dice:"300d1"}},{id:"trs_364_0",sceneId:"scn_364",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"巨蟒法杖"}],once:!0,_meta:{sourcePages:[137],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「石棺并未上锁，可以通过一个成功的 DC 15 力量（运动）检定打开。 内部，一捆褪色的布料中包裹着一条幻色蛇生物雅库利（诡计之神莫阿的动物形态； 参见 附录D）的骨骼。 一根 巨蟒法杖 放置在这些遗骸上。 如果这根法杖离开九神之墓，它将化为…」"}},{id:"trs_36f_0",sceneId:"scn_36f",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"恐惧之锤"}],once:!0,_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「望戈的木乃伊紧握着一把恐惧之锤。 如果这把钉头锤离开九神之墓（但见"失落的宝藏"），它将化为尘土并被摧毁。」'}},{id:"trs_37d_0",sceneId:"scn_37d",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"强袭法杖"},{kind:"fixed",itemRef:"对Devlin身体的搜索还发现了一瓶永不耗尽的墨水（价值100金币）和一本包含以下法术的咒语书："}],once:!0,_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「对Devlin身体的搜索还发现了一瓶永不耗尽的墨水（价值100金币）和一本包含以下法术的咒语书： 1环法术：en=Alarm, en=Comprehend Languages, en=Detect Magic, en=Expeditious…」"}},{id:"trs_38a_0",sceneId:"scn_38a",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"健康护符"},{kind:"fixed",itemRef:"250 gp"},{kind:"fixed",itemRef:"75 gp"},{kind:"fixed",itemRef:"25 gp"}],once:!0,_meta:{sourcePages:[142],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「石棺上散布着以下财宝：一个金项圈（250金币），三个金杯（每个75金币），五个金斗篷别针（每个25金币），以及一个健康护符。 如果这个护身符离开九神之墓，它会变成灰尘并被摧毁（但见"失落的宝藏"）。」'}},{id:"trs_393_0",sceneId:"scn_393",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"道穿着两条蓝宝石绳索（每条价值1,250金币）"},{kind:"fixed",itemRef:"一颗黄玉脐部宝石（价值500金币）"}],once:!0,_meta:{sourcePages:[142],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「道穿着两条蓝宝石绳索（每条价值1,250金币），两个雕刻有对龙的白金臂环（每个750金币），以及一颗黄玉脐部宝石（价值500金币）。」"},coins:{dice:"750d1"}},{id:"trs_398_0",sceneId:"scn_398",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"剧毒药水"},{kind:"fixed",itemRef:"极效治疗药水"},{kind:"fixed",itemRef:"法力再生珍珠"}],once:!0,_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「在石棺内有一个伪装成剧毒药水的极效治疗药水，还有一个石化的格朗蛋，它的作用相当于一个法力再生珍珠。 一个施法者如果与这个蛋同步，也会获得对毒素伤害的抗性。 如果蛋离开九神之墓（但见"失落的宝藏"），它会变成灰尘并被摧毁。」'}},{id:"trs_3a5_0",sceneId:"scn_3a5",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"幽魂灯笼"}],once:!0,_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「任何搜索铁匠铺的角色会发现一个幽魂灯笼（见附录C），它曾经属于西沃德。 它放在一张长椅上，旁边有一些工具。 一位名为Starfallen的女性月精灵魔契师的灵魂居住在幽魂灯笼内。 如果任何角色触摸灯笼，就能看到里面的精神。 这个灵魂是无实体…」"}},{id:"trs_3aa_0",sceneId:"scn_3aa",container:"抽屉",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"魔像手册"},{kind:"fixed",itemRef:"摄心镜",count:44},{kind:"fixed",itemRef:"威瑟斯的青铜面具价值25金币"}],once:!0,_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「威瑟斯的桌子上有足够的设备可以组装成一个学者包。 一本魔像手册（粘土）打开着放在他的桌子上，旁边是一本包含他所有准备好的法术的咒语书。 在咒语书的内侧封底上似乎有一个名字：Khomara Blackfire。 'Khomara'和'Blac…」"},coins:{dice:"75d1"}},{id:"trs_3c2_0",sceneId:"scn_3c2",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"+1 伊库瓦短矛"},{kind:"fixed",itemRef:"8 gp"},{kind:"fixed",itemRef:"25 gp"}],once:!0,_meta:{sourcePages:[148],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「Sephirius没有穿盔甲，但携带了一把+1 伊库瓦短矛（见第1章中的"购买特殊物品"以获取有关这种武器的更多信息），一个探险家背包，一个包含8金币的小袋，一个形状像恐龙爪的象牙背刮器（25金币），一个巴哈姆特的圣徽（25金币），以及一个…」'}},{id:"trs_3d0_0",sceneId:"scn_3d0",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"500 gp"}],once:!0,_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「布拉弗斯的黄色头巾上镶有一颗橄榄石宝石（500金币）。 对布拉弗斯尸体的搜索还发现了一面非魔法盾牌和一个腰带小包，包内含有一颗500金币的钻石（一个en=Raise Dead法术的材料成分）以及两个直径为1英寸的水晶眼球——一个深蓝色和一个…」"}},{id:"trs_3fc_0",sceneId:"scn_3fc",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"射手护腕"}],once:!0,_meta:{sourcePages:[154],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「石棺内含有一对射手护腕和二十支易碎的箭，这些箭放在一个腐烂的皮革箭袋中。 每支箭在撞击时会碎裂，并且只在击中时造成1点穿刺伤害。 护腕上装饰有蛙类巨兽的雕刻，它们使任何与之协调的角色的皮肤保持令人不安的湿润。 如果护腕离开九神之墓（但见"失…」'}},{id:"trs_40d_0",sceneId:"scn_40d",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"25 gp"},{kind:"fixed",itemRef:"50 gp"},{kind:"fixed",itemRef:"75 gp"}],once:!0,_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「摧毁野猪头揭示了三件物品，它们卡在它的牙齿之间：一副弯曲的金边眼镜（25金币），一个镶有血石的皮革眼罩（50金币），以及一枚铂金发夹（75金币）。」"}},{id:"trs_414_0",sceneId:"scn_414",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"缩小药水"},{kind:"fixed",itemRef:"力场珠"},{kind:"fixed",itemRef:"+1 盾牌"},{kind:"fixed",itemRef:"12000 cp"},{kind:"fixed",itemRef:"5000 sp"},{kind:"fixed",itemRef:"2200 gp"},{kind:"fixed",itemRef:"25 gp"},{kind:"fixed",itemRef:"75 gp"},{kind:"fixed",itemRef:"2500 gp"}],once:!0,_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这九个壁龛包含以下宝藏： 12,000枚铜币，5,000枚银币和2,200枚 gp 一个覆盖着会变色的水晶珠子的陶土变色龙小雕像（25金币） 三个涂成金色的儿童面具，分别按照蝙蝠、猴子和鹦鹉的面孔形状制作（每个75金币） 一个形状像章鱼的金…」"}},{id:"trs_41e_0",sceneId:"scn_41e",container:"藏有",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"5 sp"},{kind:"fixed",itemRef:"100 cp"},{kind:"fixed",itemRef:"1 gp"},{kind:"fixed",itemRef:"120 sp"},{kind:"fixed",itemRef:"200 cp"},{kind:"fixed",itemRef:"2 pp"},{kind:"fixed",itemRef:"90 gp"},{kind:"fixed",itemRef:"350 sp"},{kind:"fixed",itemRef:"500 cp"},{kind:"fixed",itemRef:"10 pp"},{kind:"fixed",itemRef:"630 gp"},{kind:"fixed",itemRef:"7200 sp"},{kind:"fixed",itemRef:"5000 cp"}],once:!0,_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「每个底座是一个空心石制圆柱体，壁厚6英寸。 拥有适当工具的角色可以砸穿石头，以获取每个底座内的硬币。 北边的底座有5个银币和100个铜币。 东边的底座藏有1个金币、120个银币和200个铜币。 南边的底座隐藏着2个铂金币、90个金币、350…」"}},{id:"trs_438_0",sceneId:"scn_438",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"吟游诗人乐器"},{kind:"fixed",itemRef:"以下宝物堆放在莎根比（Shagambi）的遗骨周围：200金币、五颗月光石（每颗价值50金币）、被陷阱触发的精美音乐盒（价值250金币）"}],once:!0,_meta:{sourcePages:[160],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「以下宝物堆放在莎根比（Shagambi）的遗骨周围：200金币、五颗月光石（每颗价值50金币）、被陷阱触发的精美音乐盒（价值250金币）以及一件吟游诗人乐器（卡奈斯卡曼陀林）。 如果这件乐器离开九神之墓，它就会化为尘埃并被摧毁（但请参见"失…」'},coins:{dice:"200d1"}},{id:"trs_449_0",sceneId:"scn_449",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"黑蛋白石王冠价值5000金币"}],once:!0,_meta:{sourcePages:[162],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「黑蛋白石王冠价值5000金币，但如果在任何大城市的拍卖中出售，其价值可能高达这个数字的四倍。 关于这件物品的更多信息，请见"传说中的宝藏"。」'}},{id:"trs_465_0",sceneId:"scn_465",container:"藏着",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"虹光法袍"}],once:!0,_meta:{sourcePages:[166],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「石棺内填满了盐，在其中埋藏着十个由链鞭蜗牛（安珂的动物形态； 见附录D）的壳制成的蛋白石手镯（每个75金币）和一件虹光法袍。 如果这件长袍离开九神之墓，它将化为尘土并被摧毁（但见"失落的宝藏"）。」'},coins:{dice:"75d1"}},{id:"trs_478_0",sceneId:"scn_478",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"这块拳头大小的宝石价值2500金币"}],once:!0,_meta:{sourcePages:[168],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「固定在摆锤尖端的卵形宝石就是传说中的月亮之脐。 这块拳头大小的宝石价值2500金币，但如果在任何主要城市拍卖，其价值可能高达三倍。 有关这项物品的更多信息，请参见"传说中的宝藏"。 如果把蛋从钟摆上移除，时钟就会失去它的魔法属性并停止工作。」'}},{id:"trs_4a8_0",sceneId:"scn_4a8",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"它价值5000金币"}],once:!0,_meta:{sourcePages:[173],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「除非它已经被传送到62C区域，否则一颗光泽四射、带刺的巨大红宝石，大小如同人拳，放置在从房间西墙突出的石架上。 这颗宝石就是传说中的扎尔特克之眼。 它价值5000金币，但如果在任何主要城市的拍卖中出售，其价值可能高达五倍。 有关扎尔特克之眼…」"}},{id:"trs_4ac_0",sceneId:"scn_4ac",container:"塞着",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"镶钉皮甲"}],once:!0,_meta:{sourcePages:[173],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「地板上的死者是布里克斯顿勋爵，科米尔的黄旗公司的领袖，这个公司注定要失败。 当威瑟斯从区域51转动齿轮并将他困在这个房间里时，他死去了。 尸体穿着镶钉皮甲，携带一把收在鞘中的长剑，剑柄呈龙形。 这把剑具有轻微的魔法特性：持有者获得说和理解龙…」"},coins:{dice:"50d1"}},{id:"trs_4bd_0",sceneId:"scn_4bd",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"猛犸象的金箔价值2500金币"},{kind:"fixed",itemRef:"这个物品价值2500金币"}],once:!0,_meta:{sourcePages:[175],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「如果剥离下来，猛犸象的金箔价值2500金币，尽管需要一个角色花费30小时才能全部收集。 多个角色合作可以相应缩短时间。 还可以从猛犸象的獠牙上撬下五十颗宝石（每颗100金币）。 Ch'gakare的礼物是传说中的Ch'gakare的骷髅圣杯…」"},coins:{dice:"100d1"}},{id:"trs_51c_0",sceneId:"scn_51c",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"乐器"},{kind:"fixed",itemRef:"扬琴"},{kind:"fixed",itemRef:"长笛"},{kind:"fixed",itemRef:"里拉琴"},{kind:"fixed",itemRef:"提琴"},{kind:"fixed",itemRef:"法术卷轴",count:3},{kind:"fixed",itemRef:"2500 gp"},{kind:"fixed",itemRef:"50 gp"},{kind:"fixed",itemRef:"100 gp"},{kind:"fixed",itemRef:"但它们价值250金币"},{kind:"fixed",itemRef:"该音乐盒价值750金币"}],once:!0,_meta:{sourcePages:[188],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这个奥法罗斯魔的角框眼镜没有魔法，但它们价值250金币。 眼镜也是一个门户钥匙，可以打开位于位面城市西吉尔的传送门。 这个传送门是通往世外桃源位面的双向门。 对眼镜施放en=Legend Lore法术可以揭示这些信息，如果将它们卖给法师或贤…」"}}],l=[{id:"lore_000",title:"前言",keywords:["前言"],content:`湮灭之墓是一个关于死亡以及人们为避免死亡而竭尽全力的故事。就像许多D&D冒险一样，它注定会很有趣，不是因为文字和图片，而是因为游戏体验本身。每一个糟糕的玩家决策、不幸的掷骰结果、偏离计划的行动、滑稽的声音、愚蠢的怪物以及不合时宜的角色死亡都有可能让我们发笑。就像牛仔竞技中的小丑一样，冒险者们往往会做出风趣的事情来生存和取得成功。
这次冒险远不止是一个致命的地牢。为了让其充满乐趣，我们求助于《D&D》梦启者动画系列冒险时间的创作者彭德尔顿·沃德。彭是一位讲述者大师，他知道如何在幽默角色和陷阱中制造有意义的故事，并且他理解当给予有趣的玩具时，D&D玩家可以创造出他们自己的欢乐。在彭的协助下，我们尝试制造一个充满经典D&D套路和奇怪转折的故事，这些转折会让你和你的玩家大笑，即使对英雄们来说情况看起来很噩兆。如果猴舞果对你不起作用，也许弹射的地精村庄或喷吐丧尸的亡灵霸王龙会。还有墓穴本身，希望它能以其致命的独创性引发咯咯的笑声和狂笑的尖叫。
对我们的测试玩家，我献上衷心的感谢。你们帮助让湮灭之墓成为对所有人来说更有乐趣的体验。你们的反馈——如同这里发现的任何蛮横陷阱一样残酷——极其宝贵。请放心，你们的角色并非白白牺牲。`,alwaysOn:!0,category:"history",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_55a",title:"简介·简介",keywords:["简介"],content:`某种邪恶的力量正在囚禁死者的灵魂，并从所有通过魔法复活的死者身上吸取生命。这场全球性的"死亡诅咒"不仅阻止了死者的复活，还导致之前复活的生物枯萎并死亡。这个死亡诅咒的源头位于一个布满陷阱的陵墓中，这个陵墓隐藏在一片广阔丛林深处的失落城市之下。

湮灭之墓 是一个发生在遗忘国度的楚尔特半岛上的龙与地下城冒险。楚尔特是一个热带荒野，主要由丛林、高原、不可逾越的山脉和喷发的火山组成。您可以替换为不同的丛林场景，根据需要更改地点名称。其他龙与地下城设置包括奥斯的阿米迪奥丛林、密斯塔拉的野蛮海岸、艾伯伦的赞德里克丛林，或者您家乡战役世界的类似设置。

这次冒险设计为开始时有四到六名1级角色的派对，他们应该在冒险结束时达到11级或更高等级。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[0],confidence:"medium",needsReview:!1}},{id:"lore_001",title:"故事梗概·故事梗概",keywords:["故事梗概","辛德拉·席尔瓦因","瓦琳朵拉·暗影斗篷","拉兹·纳斯","阿瑟瑞克"],content:`角色们被辛德拉·席尔瓦因拉入故事，她是一位退休的冒险家和商人，多年前从死亡中被复活。现在，她正在逐渐枯萎。当她咨询祭司时，Syndra得知这种痛苦是普遍存在的，没有任何咒语能够治愈它。她向哈珀斯的朋友咨询，他们确定了痛苦的源头：一个被称为Soulmonger的邪恶死灵装置。哈珀斯从一位巫妖那里获得了情报，但他们除了Soulmonger的名字和大致位置外，对它知之甚少。愿意帮助Syndra的冒险者必须前往Chult，一个丛林和怪物之地，找到并摧毁Soulmonger。

辛德拉和她的盟友们不知道，灵能者正在捕捉死者的灵魂，剥夺巫妖们用护身符捕捉灵魂的手段。(灵能者在灵魂被其他地方捕捉之前就将它们夺走。) 萨扎斯坦，泰伊红法师中最强大的巫妖，已经派特工前往楚尔特去偷取灵能者，或者，如果失败的话，摧毁它。领导泰伊远征队的是萨扎斯坦的忠诚副手，瓦琳朵拉·暗影斗篷。瓦琳德拉已经被警告说冒险家可能会穿过她的路径，所以她已经做好了准备。

在楚尔特的心脏地带潜藏着拉兹·纳斯，他是楚尔特人中的一个神话般的、邪恶的人物。拉兹·纳斯曾是一个人类圣武士，也是梅兹罗城的誓言守护者。他背叛了他的誓言并被放逐。他没有寻求救赎，而是召集了一支不死军团来征服梅兹罗。这位潜在的暴君被击败并再次被放逐。梅兹罗后来被法术瘟疫摧毁（或看起来是这样），在此期间，拉兹·纳斯失去了创造和指挥不死生物的力量。他撤退到了奥穆城，留下了他的不死军团的残余在丛林中无拘无束地漫游。然而，这并不是拉兹·纳斯的终结。他对失去力量感到愤怒，与潜藏在奥穆废墟中的元提结成了联盟，并经历了一种转变仪式，成为了恶咒蛇人。作为元提，拉兹·纳斯强加他可怕的意志于邪恶的蛇人，并成为了他们的领袖。

在奥穆的破碎街道之下，隐藏着一个名为夜蛇神殿的秘密蛇人神庙，其中拉兹·纳斯掌握着权力，并且策划着终结世界。奥穆也是九神之墓的所在地。当角色们探索这个多层地牢时，他们遇到了奥穆的恶作剧神灵，并且可能被他们附身。每个神都体现了不同的阵营，被附身的角色也会获得一个特殊能力以及一个缺陷。九个恶作剧神并不和睦，他们试图将彼此从角色的身体中推出。当神灵争夺他们的活体宿主时，角色们必须应对守护灵魂收割者的致命陷阱和怪物。深入墓穴，他们发现了关于地牢邪恶建筑师——巫妖阿瑟瑞克——的线索，并了解到灵魂收割者正在将灵魂喂养给一个叫做萎缩者的不死恐怖生物。一旦它吸收了足够多的灵魂，萎缩者将转变为一个邪恶的神。

摧毁灵魂收割者可以结束影响世界的死亡诅咒，而杀死萎缩者会招致来自阿瑟瑞克的愤怒。在正常情况下，愤怒的巫妖对于凡人冒险者来说是一个难以克服的敌人，但有了奥穆的恶作剧神的帮助，英雄们有了一线生机。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_012_0",title:"开始冒险·开始冒险",keywords:["开始冒险","辛德拉·席尔瓦因","大法师","瓦康嘎·欧塔姆","瓦琳朵拉·暗影斗篷","抵达"],content:`冒险的默认起始地点是被遗忘的国度设定中剑海岸的博德之门城市。然而，任何大型定居点都可以。来自其他D&D世界的可能性包括奥斯世界的自由城格雷休姆，密斯塔拉世界的斯佩库拉姆城，以及艾伯伦的沙恩城。

为了开始，向玩家们阅读或转述以下引言文本：

在这一点上，邀请玩家解释为什么他们的角色在一起，他们已经在一起多久了，以及他们一直在做什么。如果角色们彼此不认识，你可以让他们在辛德拉·席尔瓦因的住所相遇。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[8],confidence:"medium",needsReview:!1}},{id:"lore_012_1",title:"开始冒险",keywords:["开始冒险","辛德拉·席尔瓦因","大法师","瓦康嘎·欧塔姆","瓦琳朵拉·暗影斗篷","抵达"],content:`过去几天来，街头巷尾和酒馆里谈论的都是所谓的死亡诅咒：一种消耗性疾病，困扰着每一个曾经从死亡中被复活的人。受害者每天变得越来越瘦弱，缓慢但稳定地滑向他们曾经拒绝的死亡。当他们最终屈服时，他们无法再次被复活——其他人也是如此，无论他们过去是否曾经得到过那个奇迹。神殿和神圣魔法的学者们对这种影响整个地区，甚至可能是整个世界的诅咒束手无策。

你被邀请到了退休冒险家兼商人辛德拉·席尔瓦因的家中。一位穿着制服的侍从带领你走上宏伟的楼梯，来到三楼，然后将你引入一个镶有木板的房间，房间里有壁炉、舒适的椅子，以及一个沉重的桌子上摆放着酒杯和葡萄酒瓶。深色的木板墙上挂着地图和海图。架子、书架和橱柜里存放着数百卷卷起的地图和海图。
有一个人坐在火炉旁的一张填充过多的椅子上。你无法分辨性别，因为只有这个人的头部从覆盖在椅子上的沉重毯子下露出来，绣花兜帽和银色面具掩盖了佩戴者的脸。即使是这个人干燥、嘶哑的声音也没有提供任何线索。"请自便喝点酒，坐下吧，朋友们——我希望我可以这样称呼你们。"`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[8],confidence:"medium",needsReview:!1}},{id:"lore_012_2",title:"开始冒险·希瓦娜的诅咒",keywords:["开始冒险","希瓦娜的诅咒","辛德拉·席尔瓦因","大法师","瓦康嘎·欧塔姆","瓦琳朵拉·暗影斗篷","抵达"],content:`队伍的赞助人是一位名叫辛德拉·席尔瓦因的退休冒险家。作为一名声名显赫的法师和商人，她拥有魔法来加速队伍前往楚尔特的旅程，以及用以奖励角色们协助的财宝。

当你准备好让角色们与Syndra见面时，请阅读：

戴面具的演讲者是辛德拉·席尔瓦因。她是一位泰瑟瑞安人大法师，有以下变化：

Syndra是守序中立的，并且会说通用语、矮人语、精灵语和半身人语。

由于灵能者的死亡诅咒，辛德拉的生命值上限已降至79，并且每午夜减少1点。如果她的生命值上限降至0，辛德拉就会死亡，并且直到死亡诅咒结束（并且如果她的灵魂没有被吞噬）之前，她不能被复活。摧毁灵能者是唯一能停止损耗并恢复她生命值上限至正常的方法。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[8],confidence:"medium",needsReview:!1}},{id:"lore_012_3",title:"开始冒险·扮演辛德拉·西尔瓦尼",keywords:["开始冒险","扮演辛德拉·西尔瓦尼","辛德拉·席尔瓦因","大法师","瓦康嘎·欧塔姆","瓦琳朵拉·暗影斗篷","抵达"],content:`Syndra向角色们讲述了她的故事并提出了她的请求。在角色扮演这次遭遇时，可以对以下信息进行意译，并用Silvane干燥、沙哑的声音回答角色们的问题：

"我多年前是个冒险家。我死过一次，然后从死里复活。从那以后，我关闭了生命中的那个阶段。"

"你们听说过的死亡诅咒已经降临到我身上。我不知道在我死去之前还能坚持多久。牧师们无法提供帮助。他们对正在发生的事情束手无策。"

"我在竖琴手联盟的联系人得知，死亡诅咒的原因是被称为魂灵收割者的死灵法术神器。根据他们的消息来源，魂灵收割者位于楚尔特的某个地方。"

"楚尔特是一个被山脉环绕、雨林茂密的半岛。巨大的爬行动物、野蛮的地精和一支不死生物的军队在它的丛林和废墟中徘徊。绘制这个地方的地图几乎是不可能的，除了沿海几英里之外，人们对该地区当前的地理情况一无所知。"

"根据数十张海图、航海日志和探险家日记，我将所有已知的关于楚尔特当前状态的信息汇总成一张地图。如果你承担我的使命，我会提供给你。"

"当你们准备好出发时，我会把我们所有人都传送到南扎路港，这是Chult唯一的主要定居点。我之前已经去过那里几次，所以很少有意外发生。一旦到达那里，我会和一个叫瓦康嘎·欧塔姆的朋友呆在一起。他是统治这座城市的七个商人王子之一。"

Syndra对于派遣没有经验的冒险家去执行如此危险的任务感到担忧，但她不会冒任何风险。她没有提及，其他更有经验的冒险家团队已经被派往楚尔特。所有人都消失了，Syndra担心最坏的情况。事实上，他们成为了楚尔特的危险的牺牲品，或者与瓦琳朵拉·暗影斗篷相遇，从此再也没有人见过或听说过他们。如果角色们催促Syndra去寻找一个更有经验的冒险家团队，她会干巴巴地回答："我已经这么做了。"`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[8],confidence:"medium",needsReview:!1}},{id:"lore_012_4",title:"开始冒险·宝藏",keywords:["开始冒险","宝藏","辛德拉·席尔瓦因","大法师","瓦康嘎·欧塔姆","瓦琳朵拉·暗影斗篷","抵达"],content:`Syndra向每个角色承诺，如果成功完成她的任务，将提供一件稀有或不常见的魔法物品。（冒险结束时，每个玩家可以选择一个合适的物品，需经您批准。）Syndra还期望角色们在楚尔特找到足够的财宝，使他们像国王一样富有。

如果角色们要求预先支付金币，Syndra会给每个角色50金币以支付在南扎路港的费用。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[8],confidence:"medium",needsReview:!1}},{id:"lore_012_5",title:"开始冒险·玩家的楚尔特地图",keywords:["开始冒险","玩家的楚尔特地图","辛德拉·席尔瓦因","大法师","瓦康嘎·欧塔姆","瓦琳朵拉·暗影斗篷","抵达"],content:"在这一点上，给玩家一份辛德拉·席尔瓦因的不完整楚尔特地图（见附录E中的手册1，附录 E）。辛德拉乐意尽她所能回答他们的问题，但她对楚尔特的了解并不比地图上多。她对南扎路港足够了解，可以向角色们保证他们可以在那里购买补给。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[8],confidence:"medium",needsReview:!1}},{id:"lore_012_6",title:"开始冒险·传送到Chult",keywords:["开始冒险","传送到Chult","辛德拉·席尔瓦因","大法师","瓦康嘎·欧塔姆","瓦琳朵拉·暗影斗篷","抵达"],content:'为了节省时间，Syndra准备使用一个en=Teleport法术将自己和英雄们传送到南扎路港。如果角色们同意，就不需要掷骰子来确定法术的准确性。Syndra对城市的港口区非常熟悉，能够准确到达目的地。她选择了一个靠近码头的户外地点作为目的地。当角色们到达南扎路港时，跳转到第1章中"抵达"部分。',alwaysOn:!1,category:"setting",_meta:{sourcePages:[8],confidence:"medium",needsReview:!1}},{id:"lore_012_7",title:"开始冒险·角色钩子",keywords:["开始冒险","角色钩子","辛德拉·席尔瓦因","大法师","瓦康嘎·欧塔姆","瓦琳朵拉·暗影斗篷","抵达"],content:"附录A提供了两个需要您同意才能选择的新角色背景：人类学家和考古学家。此外，玩家手册和剑湾冒险者指南中也包含多个非常适合本次冒险的角色背景。如果您的玩家在完善角色背景时遇到困难，可以与他们分享「选定背景的角色动机表」中的构思。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[8],confidence:"medium",needsReview:!1}},{id:"lore_01c_0",title:"欢迎来到楚尔特·欢迎来到楚尔特",keywords:["欢迎来到楚尔特","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:`除了一些沿海定居点外，楚尔特是一个未被驯服的热带荒野：密集的丛林和蜿蜒的河流被山脉、火山和陡峭的悬崖环绕。西部、南部和东部的山脉像墙壁一样保护内陆不受海洋和水手视线的侵扰。河流流速如此缓慢，以至于很难判断上游和下游的方向。只有在它们穿过陡峭的峡谷时，河流才会加速。

进入这个杂草丛生的领域最安全的地方（在这个语境下，"最安全"是一个相对的概念）是在北部和东部。从楚尔特湾到避难湾的海岸提供了可以进入未被标记的丛林的海滩。沿着整个海岸线，楚尔特湾是旅行者能找到友好文明的唯一地点。半岛的其他地区是吸血、携带疾病的昆虫、怪物爬行动物、食肉鸟类和各种野兽，以及杀人不死生物的繁殖地。一个人离海岸越远，土地就越潮湿、炎热、不适宜居住。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_1",title:"欢迎来到楚尔特·天气",keywords:["欢迎来到楚尔特","天气","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:`楚尔特全年炎热、潮湿且多雨。白天的温度经常高达95华氏度（35摄氏度），即使在夜间也很少降至70华氏度（20摄氏度）以下。不下雨的日子很少，但雨量从持续的薄雾到倾盆大雨不等。

在大雨中的视线限制在50码以内。超过这个距离，只能分辨出大型或更大的物体。在雨中，远程武器的射程减半。

在遭遇暴雨的日子里，有25概率形成完全发展的热带风暴，伴随倾盆大雨、狂风、闪电、海上的巨浪以及沿岸的巨大浪涌。熟悉琼达尔地区情况的向导建议在这些日子里就地躲避。河道旅行将无法进行（独木舟在出发后15分钟内就会被浪涌淹没）。如果角色坚持徒步旅行，每个角色将自动获得1层力竭状态，并且必须成功通过DC 10体质检定，否则再获得1层。在暴风雨天气中，避免迷路的技能检定将具有劣势。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_2",title:"欢迎来到楚尔特·楚尔特的种族",keywords:["欢迎来到楚尔特","楚尔特的种族","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:`在南扎路港，可以找到费伦大陆上每个种族和国籍的成员，但他们中的少数人会走出城墙一百多码。当地人民必须被分为那些通常已知的和那些存在是传奇的或只是怀疑的。第一组包括库尔坦人（人类）、鸟羽人族、巴提里族（地精）、矮人（包括白化矮人）、翼手兽和斑猫人。在第二类中，怀疑有少量的虎人存在；探险家和猎人有时会报告说在丛林深处看到格朗族（蛙人）；还有传言说在偏远地区，蛇人正在重新崛起。

除了这些已知和疑似居民外，一群霜巨人来到楚尔特寻找凛冬戒指，一支红法师的远征队正在寻找灵能者，但这些团队的存在对更广泛的人口来说仍然是未知的。

最后，茂密的丛林中充斥着骷髅、僵尸、食尸鬼以及其他类型的不死生物。楚尔特的每个人都非常清楚它们的存在。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_3",title:"欢迎来到楚尔特·楚尔特人",keywords:["欢迎来到楚尔特","楚尔特人","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:`楚尔特人是楚尔特的土生土长的人类。他们有着深色皮肤、黑发和丰富的文化。由于怪物和不死生物的驱赶，他们被迫离开丛林，逃到了南扎路港坚固的城墙后面，放弃了他们的王朝，联合起来成为南大洋的一个商业强国，渴望与任何访问他们危险土地的人做生意。一些楚尔特人向北迁移，在诸如阿特卡拉、博德之门、卡林港、门农和扎泽斯普尔等遥远城市建立了前哨站。

曾经在楚尔特地区掌握政治权力的国王和王后的血统，大多已被时间、战争、灾难和不幸所抹去。他们被楚尔特的商人王子所取代，这些王子从Amnian和Tethyrian的奸商那里学到了贸易的艺术和技巧，现在他们利用自己的财富来建立有利可图的联盟，并引导他们边疆王国的命运。

Chult人穿着轻便、色彩鲜艳的服装，适合热带气候。他们交易黄金、宝石、珠宝、纺织品、香料、稀有草药、象牙、木材、未精炼的金属矿石以及其他从Chult的丛林、山谷和山脉中采摘和掠夺的商品。在他们自己之间，所有Chult人仍然说着自己的语言（一种混合了呼气和吸气元音、辅音和舌音的语言），但那些经常与外国人打交道的人也能流利地说通用语，通常带有浓重而有特色口音。

由于气候原因，南扎路港的楚尔特人很少穿戴盔甲，但由坚韧的恐龙皮制成的大型、多彩的盾牌却无处不在。这些盾牌被称为hlang，功能与普通盾牌相同。在近战中，他们偏爱传统的伊库瓦短矛（发音为YICK-ul-wah），这是一种短小、宽刃、单手使用的矛状武器。有关yklwa的更多信息，请参见"购买特殊物品"。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_4",title:"欢迎来到楚尔特·鸟羽人",keywords:["欢迎来到楚尔特","鸟羽人","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:`Chult的山脉和高原上居住着鸟羽人族群。鸟羽人的领袖是技艺高超的舞者，他们利用舞蹈激励追随者，同时也施展法术。

鸟羽人努力保卫这片土地，抵御邪恶势力。他们以帮助迷路、生病或有其他麻烦的探险者而闻名，前提是这些探险者无意掠夺Chult的自然资源或剥削其居民。鸟羽人是翼手兽和Omu的石像鬼的天然敌人。

一个鸟羽人族群声称拥有一个偏远的楚尔特修道院，名为基尔萨巴尔。这个地方在南扎路港众所周知，因为通过丛林中偶尔的空隙，可以从奥伦河上看到这些建筑。然而，除此之外，人们对这个地方知之甚少，因为这些悬崖上的建筑从地面上很难到达。鸟羽人在那里庇护着奥穆王室的最后后裔，他们希望有朝一日能够恢复他们的统治。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_5",title:"欢迎来到楚尔特·巴提里（地精）",keywords:["欢迎来到楚尔特","巴提里（地精）","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:"楚尔特是众多独立的地精部落的家园，这些部落统称为巴提里（Batiri）。一个巴提里部落由一个女王统治（使用地精头目的具体数值）。当一个女王死去时，战斗就会爆发，直到一个新的女王胜利出现并自称为部落的统治者。尽管巴提里拥有许多文化和神话方面的独特之处，但他们的行为本质上与其他地精相似；他们迷信、残忍、对外界人怀疑、内部纷争不断，并且同样可能折磨和吃掉其他类人生物，就像他们与这些生物进行交易一样。他们不仅残忍，而且在折磨手段上极具创造力。例如，他们喜欢将敌人绑在树上，用蜂蜜浇灌他们，然后将他们留给昆虫在几天内慢慢吞噬，除非更大的捕食者先一步将他们解决。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_6",title:"欢迎来到楚尔特·战争面具",keywords:["欢迎来到楚尔特","战争面具","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:'巴提里战士在战斗中戴着超大号的木制战争面具。每个地精都会自己绘画和装饰面具，使其看起来尽可能可怕。除了恐吓敌人外，这些面具在巴提里部落中的作用与费伦贵族骑士的纹章相同。对立部落的巴提里可能不知道敌人的名字，但他们知道"咆哮的鳄鱼"或"獠牙猿"。',alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_7",title:"欢迎来到楚尔特·战斗堆叠",keywords:["欢迎来到楚尔特","战斗堆叠","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:`巴提里战士有时在战斗中会骑在彼此的肩膀上，形成一种被称为战斗堆叠的阵型。这些堆叠可以达到九个地精的高度。每个地精分别跟踪其生命值，但堆叠作为一个生物移动并进行属性检定、攻击骰和豁免投掷。只有堆叠顶部的地精可以攻击，只有底部的地精可以移动（所有骑在它肩膀上的地精随它一起移动）。顶部的地精为堆叠进行所有的感知、感知和魅力属性检定和豁免检定。底部的地精为堆叠进行所有的力量、敏捷和体质属性检定和豁免检定。战斗堆叠不能跳跃，但它可以抓住或推搡另一个生物，从藤蔓上荡，以及使用疾走、撤离、回避和躲藏动作。由于其内置的"群体战术"效果，堆叠在近战攻击上有优势；所有的地精都在向敌人挥舞长矛，即使只有一个能击中。

当叠加的哥布林中有一个的生命值下降到0，它会被抛出叠加状态。如果叠加成功通过一个DC 10的敏捷豁免检定，它将保持完整（尽管少了一只哥布林）。如果豁免失败，叠加会崩溃，所有哥布林会跌倒倒地在一个5英尺见方的空间内。

要形成一个新的战斗堆叠，地精必须使用它的行动能力爬到另一个愿意的地精肩上，且该地精必须在它5尺范围内。其他地精也可以以相同的方式加入现有的战斗堆叠。地精可以使用它的行动能力从战斗堆叠中移除自己，落在堆叠底部5尺范围内的未被占据的空间。

巴提里人发明了战斗堆叠作为一种对抗比自己大得多的生物的方法，同时也是为了能够到达树上的敌人。战斗堆叠阵形还有一个额外的效果，那就是让矮小的地精在较大的敌人面前显得更加高大和可怕。战斗堆叠对其他地面威胁并不有效，因为除了最上面的地精之外，所有地精都放弃了他们的攻击和机动性，成为堆叠的一部分。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_8",title:"欢迎来到楚尔特·矮人",keywords:["欢迎来到楚尔特","矮人","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:"楚尔特之下的大多数盾矮人要塞因强烈的火山活动而被摧毁。数百名矮人被迫逃离他们坍塌的大厅，结果却被丛林捕食者屠杀和吞噬。少数人抵达了南扎路港，他们至今仍然留在那里。这些生还者中有些是白化病患者（更多信息见附录D）。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_9",title:"欢迎来到楚尔特·霜巨人",keywords:["欢迎来到楚尔特","霜巨人","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:"二十名霜巨人来到楚尔特寻找凛冬戒指。他们的船锚定在Kitcher湾的北部，霜巨人团队正在丛林中搜寻戒指及其佩戴者阿图斯·辛贝尔的踪迹。一位名叫德鲁菲的雌性霜巨人领导着这次狩猎。到目前为止，霜巨人在进行他们的活动时还未被注意到，但他们迟早会遇到来自贝路利安堡的Flaming Fist巡逻队。霜巨人讨厌楚尔特及其气候，但无论代价如何，他们都不会放弃对戒指的搜索。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_10",title:"欢迎来到楚尔特·格龙蛙人们",keywords:["欢迎来到楚尔特","格龙蛙人们","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:`这些主要为邪恶的蛙族生活在丛林中分散的村庄里。他们用泥巴、藤蔓和柳条建造原始的建筑，并且更习惯在树上而不是地面上生活。他们用毒箭射击敌人，并在树枝间跳跃，不留下任何痕迹。

并非所有的格朗族都是邪恶的。一些格朗族愿意为了食物或财宝帮助探险者。无论邪恶与否，格朗族通过将被杀敌人的尸体悬挂在他们领地边缘的树上来警告入侵者。

一些楚尔特向导知道在南扎路港正南方，提尔基河（发音为tee-REE-kee）源头上方有一个格朗村庄。关于这个村庄的更多信息，请参见"登格隆格"。附录D包含了关于格朗的额外信息。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_11",title:'欢迎来到楚尔特·翼手兽（"恐怖族"）',keywords:["欢迎来到楚尔特",'翼手兽（"恐怖族"）',"购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:'这些恶毒的飞行爬行类人形生物会突然俯冲下来攻击毫无戒备的猎物，偷取他们能拿到的东西，然后撤退到他们高处的巢穴中去炫耀他们偷来的战利品。他们袭击的突然性和暴力性使他们在楚尔特的其他种族中赢得了"恐怖族"的绰号。他们是鸟羽人族的天然敌人。有关详细信息，请参见附录D中的翼手兽条目。',alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_12",title:"欢迎来到楚尔特·斑猫人",keywords:["欢迎来到楚尔特","斑猫人","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:`塔巴克西（斑猫人）是一种猫科类人生物，最初来自西部大陆马兹蒂卡（Maztica）。一些楚尔特人称呼他们为"猫族"或"豹人"。一些塔巴克西在逃离奴隶贩子后最终来到了楚尔特。他们是一个有文化的民族，很少是邪恶的。一些人在南扎路港担任向导。其他人则以小组形式进入丛林，为了自己的目的狩猎格朗（grungs）和地精。

斑猫猎人可以在Chult的任何地方遇到。斑猫诗人很少在南扎路港之外遇到。附录D包含了两者的具体数值。斑猫人也可以是玩家角色（见瓦罗怪物指南以了解tabaxi种族特性）。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_13",title:"欢迎来到楚尔特·亡灵",keywords:["欢迎来到楚尔特","亡灵","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:"一个多世纪前，军阀拉兹·纳斯组建了一支不死军队来征服梅卓城。这支军队主要由作为僵尸复活的死去的楚尔特人和被转化为食尸鬼的食人族组成。拉兹·纳斯和他的军团被击败并被赶回丛林。在拉兹·纳斯能够组织另一次攻击之前，梅卓被平面转移走，拉兹·纳斯被剥夺了他的神赐力量。他自称为世界的敌人，加入了玉帝。拉兹·纳斯的不死军队的残余像瘟疫一样在丛林中蔓延，直到现在他们声称有数百英里的荒野作为他们的猎场。更糟糕的是，阿瑟瑞克用可怕的不死生物如四臂猿怪丧尸和暴龙丧尸（见附录D）填补了他们的行列，主要是为了防止探险者过于接近奥穆。随着萎缩者吞噬死者的灵魂，它的力量在增长。最终，它将变得足够强大，能够控制这些贪婪的不死生物。在那之前，楚尔特的不死军团没有领袖。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_14",title:"欢迎来到楚尔特·虎人",keywords:["欢迎来到楚尔特","虎人","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:`感染了虎人狼人的库尔坦人在丛林中以小家庭或小团体的形式出没。南扎路港的每个人都听说过这个谣言，但并不是所有人都相信它。

虎人族群避免与外来者接触，包括冒险家，但一些邪恶的虎人喜欢将狩猎入侵者作为娱乐，这些入侵者来到他们的领地是为了掠夺。由于虎人可以看起来像人类，他们很容易伪装成楚尔特的猎人、向导、救援者或探险者来吸引猎物。这些邪恶的虎人通常崇拜狩猎之神马拉尔。其他人则继续崇拜他们成为兽化人之前所尊敬的神祇。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}},{id:"lore_01c_15",title:"欢迎来到楚尔特·蛇人",keywords:["欢迎来到楚尔特","蛇人","购买特殊物品","地精头目","阿图斯·辛贝尔","德鲁菲","登格隆格"],content:`在被驱逐出他们的古城之后（见"希萨里"），元提族声称Omu的废墟为他们所有。他们在南扎路港的间谍警惕地监视着商人王子、潜在的宝藏猎人和冒险家。角色们也可能遇到寻找隐藏定居点和失落宝藏的元提族纯血、恶咒蛇人和元提族怪物。

Omu的元提（yuan-ti）相信一个封闭的传送门位于火焰峰（Peaks of Flame）的某个地方，打开它将使夜蛇Dendar进入这个世界。神祇Ubtao本应对抗Dendar，但随着Ubtao离开这个世界，元提认为没有什么能阻止夜蛇。他们已经为这个毁灭世界的蛇形生物奉献了一个地下神庙，但他们距离实现他们的终极目标还有很长的路要走。

关于蛇人的更多信息可以在《瓦罗怪物指南》中找到，以及在《附录D》中。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[11],confidence:"medium",needsReview:!1}}],_=[{id:"hook_toa_curse",goalRef:"qst_main_toa",priority:10,clues:[{id:"clue_toa_syndra",channel:"npc",content:"辛德拉展示自己每日恶化的身体并说明复活魔法已经失效。",deployableSceneIds:["scn_02f"]},{id:"clue_toa_wakanga",channel:"npc",content:"瓦康嘎确认诅咒源头在楚尔特并协助准备远征。",deployableSceneIds:["scn_083"]},{id:"clue_toa_daily_loss",channel:"environment",content:"每过去一天，辛德拉与其他复生者的最大生命继续下降且无法恢复。",deployableSceneIds:["scn_02f","scn_09d"]}],_meta:{sourcePages:[8,16],confidence:"high",needsReview:!1}},{id:"hook_toa_omu",goalRef:"qst_main_toa",priority:10,clues:[{id:"clue_toa_zitembe",channel:"npc",content:"泽腾贝的异象显示悬崖环绕、遍布蛇的南方丛林城。",deployableSceneIds:["scn_03c"]},{id:"clue_toa_black_obelisk",channel:"environment",content:"异象同时显示藤蔓覆盖的黑色方尖碑。",deployableSceneIds:["scn_03c","scn_32a"]},{id:"clue_toa_saja",channel:"npc",content:"奥罗伦加守秘纳迦给出奥姆在火焰峰与失落荣誉谷之间的位置。",deployableSceneIds:["scn_18d"]}],_meta:{sourcePages:[20,80,81],confidence:"high",needsReview:!1}},{id:"hook_toa_cubes",goalRef:"qst_main_toa",priority:10,clues:[{id:"clue_toa_nine_shrines",channel:"environment",content:"奥姆神龛壁画与铭文各自对应一位诡神和一枚立方体。",deployableSceneIds:["scn_206","scn_210","scn_21d"]},{id:"clue_toa_rival_tracks",channel:"environment",content:"部分神龛有红袍法师或蛇人先行搜掠的痕迹。",deployableSceneIds:["scn_1fb","scn_292"]},{id:"clue_toa_palace",channel:"npc",content:"奥维克斯与俘虏证词把最后一枚立方体指向王宫下方。",deployableSceneIds:["scn_23c","scn_292"]}],_meta:{sourcePages:[95,103,110,111],confidence:"high",needsReview:!1}},{id:"hook_toa_tomb",goalRef:"qst_main_toa",priority:10,clues:[{id:"clue_toa_true_entrance",channel:"environment",content:"方尖碑警告和植被遮蔽的通道区分真假入口。",deployableSceneIds:["scn_32a","scn_332","scn_334"]},{id:"clue_toa_keys",channel:"environment",content:"前五层每层有一只会逃跑的骷髅钥匙，脚印可追向最近未探索区域。",deployableSceneIds:["scn_309"]},{id:"clue_toa_hag_dolls",channel:"npc",content:"三个儿童灵魂娃娃说明五把钥匙与相邻五项试炼共同开启育婴室。",deployableSceneIds:["scn_4d8"]}],_meta:{sourcePages:[129,131,178,179],confidence:"high",needsReview:!1}},{id:"hook_toa_soulmonger",goalRef:"qst_main_toa",priority:10,clues:[{id:"clue_toa_withers_journal",channel:"document",content:"威瑟斯日记记录萎缩者到来与灵魂收割者建造。",deployableSceneIds:["scn_3aa"]},{id:"clue_toa_device",channel:"environment",content:"育婴室水晶圆柱与三条精金支架悬在岩浆上方。",deployableSceneIds:["scn_4fa"]},{id:"clue_toa_atropal",channel:"environment",content:"萎缩者以被囚灵魂为食，其死亡会引来阿瑟瑞克。",deployableSceneIds:["scn_4fa"]}],_meta:{sourcePages:[145,184,185],confidence:"high",needsReview:!1}}],f=[{id:"clk_toa_syndra_death_curse",name:"辛德拉的死亡诅咒",segments:79,tickOn:[{type:"time_elapsed_hours",hours:24}],onTick:[],onComplete:{effects:[{kind:"set_npc_state",npcId:"npc_syndra_silvane",state:"dead"}],narrationHint:"若第七十九天结束前仍未摧毁灵魂收割者，辛德拉最大生命降至 0 并死亡；她的灵魂是否已被吞噬取决于当时装置状态。"},_meta:{sourcePages:[8,190],confidence:"high",needsReview:!1,extractorNotes:"来源明确辛德拉在开局剩 79 生命且每日失去 1；时钟只落账死亡，其他复生者逐日损失由通用诅咒叙事处理。"}}],u=[{id:"tbl_054_0",name:"出售魔法盾牌和武器",purpose:"reference",rows:[{id:"row_054_0_0",kind:"text",text:"+1 弹药（每件）｜50 gp"},{id:"row_054_0_1",kind:"text",text:"+1 木盾｜450 gp"},{id:"row_054_0_2",kind:"text",text:"+1 匕首 或 +1 伊库瓦短矛｜500 gp"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_054_1",name:"待售的野兽",purpose:"reference",rows:[{id:"row_054_1_0",kind:"text",text:"飞猴，巨蜥，或 鸭嘴龙｜100 gp"},{id:"row_054_1_1",kind:"text",text:"甲龙, 恐爪龙, 或者 飞蛇｜250 gp"},{id:"row_054_1_2",kind:"text",text:"三角龙｜500 gp"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_054_2",name:"魔法物品出售表",purpose:"reference",rows:[{id:"row_054_2_0",kind:"text",text:"药水，普通｜80 gp"},{id:"row_054_2_1",kind:"text",text:"药水，非普通｜300 gp"},{id:"row_054_2_2",kind:"text",text:"法术卷轴, 1级｜100 gp"},{id:"row_054_2_3",kind:"text",text:"法术卷轴, 2环｜550 gp"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_083_0",name:"在恐龙赛跑上投注",purpose:"reference",rows:[{id:"row_083_0_0",kind:"text",text:"7:1｜d8｜2–8｜赌注 × 7｜大汉克（受观众欢迎的年轻暴龙）",attrs:{赢得胜利:"2–8","赔付 =":"赌注 × 7",赛跑者示例:"大汉克（受观众欢迎的年轻暴龙）"}},{id:"row_083_0_1",kind:"text",text:"5:1｜d6｜2–6｜投注 × 5｜乌博涛之宠（处于连胜状态的年轻三角龙）",attrs:{赢得胜利:"2–6","赔付 =":"投注 × 5",赛跑者示例:"乌博涛之宠（处于连胜状态的年轻三角龙）"}},{id:"row_083_0_2",kind:"text",text:"3:1｜d4｜2–4｜赌注 × 3｜香蕉糖果（训练有素的哈德龙）",attrs:{赢得胜利:"2–4","赔付 =":"赌注 × 3",赛跑者示例:"香蕉糖果（训练有素的哈德龙）"}},{id:"row_083_0_3",kind:"text",text:"2:1｜d3｜2–3｜投注 × 2｜骨碎者（年轻，脾气暴躁的异特龙）",attrs:{赢得胜利:"2–3","赔付 =":"投注 × 2",赛跑者示例:"骨碎者（年轻，脾气暴躁的异特龙）"}},{id:"row_083_0_4",kind:"text",text:"1:1｜任意｜平局｜下注｜格朗践踏者（年轻的甲龙）",attrs:{赢得胜利:"平局","赔付 =":"下注",赛跑者示例:"格朗践踏者（年轻的甲龙）"}},{id:"row_083_0_5",kind:"text",text:"1:2｜d3｜1｜下注 × 2｜疤背（即将退役的年轻霸王龙）",attrs:{赢得胜利:"1","赔付 =":"下注 × 2",赛跑者示例:"疤背（即将退役的年轻霸王龙）"}},{id:"row_083_0_6",kind:"text",text:"1:3｜d4｜1｜投注 × 3｜Nasty Boy（有著名训练师的异特龙）",attrs:{赢得胜利:"1","赔付 =":"投注 × 3",赛跑者示例:"Nasty Boy（有著名训练师的异特龙）"}},{id:"row_083_0_7",kind:"text",text:"1:5｜d6｜1｜下注 × 5｜丛林公主（带有恐慌骑手的恐爪龙）",attrs:{赢得胜利:"1","赔付 =":"下注 × 5",赛跑者示例:"丛林公主（带有恐慌骑手的恐爪龙）"}},{id:"row_083_0_8",kind:"text",text:"1:7｜d8｜1｜投注 × 7｜山之雷霆（年迈的二齿龙）",attrs:{赢得胜利:"1","赔付 =":"投注 × 7",赛跑者示例:"山之雷霆（年迈的二齿龙）"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_083_1",name:"赛跑恐龙",purpose:"reference",rows:[{id:"row_083_1_0",kind:"text",text:"青年异特龙｜50/80｜16*｜13｜30｜+6｜8 (1d10 + 3)｜15 (+2)",attrs:{技能检定难度:"16*",AC:"13",生命值:"30",攻击:"+6",伤害:"8 (1d10 + 3)",体质:"15 (+2)"}},{id:"row_083_1_1",kind:"text",text:"恐爪龙｜40/60｜12*｜13｜26｜+4｜6 (1d8 + 2)｜14 (+2)",attrs:{技能检定难度:"12*",AC:"13",生命值:"26",攻击:"+4",伤害:"6 (1d8 + 2)",体质:"14 (+2)"}},{id:"row_083_1_2",kind:"text",text:"异齿龙｜30/50｜8｜12｜19｜+3｜8 (2d6 + 1)｜15 (+2)",attrs:{技能检定难度:"8",AC:"12",生命值:"19",攻击:"+3",伤害:"8 (2d6 + 1)",体质:"15 (+2)"}},{id:"row_083_1_3",kind:"text",text:"鸭嘴龙｜40/50｜10｜11｜19｜+3｜6 (1d10 + 1)｜13 (+1)",attrs:{技能检定难度:"10",AC:"11",生命值:"19",攻击:"+3",伤害:"6 (1d10 + 1)",体质:"13 (+1)"}},{id:"row_083_1_4",kind:"text",text:"其他｜40/60｜12｜12｜24｜+3｜6 (1d8 + 2)｜16 (+3)",attrs:{技能检定难度:"12",AC:"12",生命值:"24",攻击:"+3",伤害:"6 (1d8 + 2)",体质:"16 (+3)"}},{id:"row_083_1_5",kind:"text",text:"年轻的三角龙｜50/75｜14｜13｜38｜+5｜6 (1d10 + 1)｜15 (+2)",attrs:{技能检定难度:"14",AC:"13",生命值:"38",攻击:"+5",伤害:"6 (1d10 + 1)",体质:"15 (+2)"}},{id:"row_083_1_6",kind:"text",text:"年轻的暴龙｜50/100｜18*｜13｜46｜+6｜9 (1d12 + 3)｜17 (+3)",attrs:{技能检定难度:"18*",AC:"13",生命值:"46",攻击:"+6",伤害:"9 (1d12 + 3)",体质:"17 (+3)"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_083_2",name:"楚尔特谣言",purpose:"random",rows:[{id:"row_083_2_0",kind:"text",text:"鸟人族居住在一个修道院，该修道院悬挂在奥伦河上游数英里的一个高原侧面，过了笑谷。鸟人族将楚尔特的最后一位王室继承人作为他们的囚犯。",range:[1,5]},{id:"row_083_2_1",kind:"text",text:"在丛林的深处，有一座由牛头人建造的城市。现在它被蛇人占领了，但更糟糕的是，下面还栖息着其他生物。在幻象中，我看到了奇怪的恶魔在黑暗中尖叫。",range:[6,12]},{id:"row_083_2_2",kind:"text",text:'如果你乘独木舟沿提尔基河向上游走大约五天，你会看到东边有一座石塔。当地人称它为火指。"恐怖族"在那里筑巢，如果他们发现了你，你就准备战斗吧。',range:[13,17]},{id:"row_083_2_3",kind:"text",text:"在进行任何丛林探险之前，必须在贝路利安堡购买勘探许可证。烈焰之拳会惩罚那些没有所需文件的探险者。",range:[18,22]},{id:"row_083_2_4",kind:"text",text:"楚尔特有许多国王和王后，但没有一个比扎尔柯蕊女王更美丽。成千上万的战士为她而战死，但她统治的唯一纪念物是位于奥伦格河东侧、卢湖以北的Nangalore花园宫殿。",range:[23,28]},{id:"row_083_2_5",kind:"text",text:"楚尔特曾经是一条绿龙的游乐场。她的骨头标志着一个隐藏的宝藏库的位置。如果你前往梅兹罗，向东穿过笑谷，然后向南前往基尔萨巴尔，你可能会偶然发现龙的骨头，并在历史书籍中赢得一席之地！",range:[29,33]},{id:"row_083_2_6",kind:"text",text:"梅兹罗城在法术瘟疫期间并没有被摧毁。它的废墟其实是一种幻象。我听到一个皮肤苍白的男人对着一个手持巨剑的恐龙人低声说这些。那个恐龙人闻起来像忍冬花。",range:[34,40]},{id:"row_083_2_7",kind:"text",text:"矮人决心夺回Wyrmheart矿，但现在那里住着一条红龙。已经有一段时间没见到他们了。",range:[41,45]},{id:"row_083_2_8",kind:"text",text:"丛林里充满了自然精灵——一些戴着面具的怪异小元素生物。它们不说话，我从不知道它们会造成伤害，但它们的魔法力量不容小觑。",range:[46,50]},{id:"row_083_2_9",kind:"text",text:"一些城里人正期待着一艘名为星辰女神的哈鲁安飞艇的到来。但它从未抵达。我打赌它在丛林的某个地方坠毁了。",range:[51,55]},{id:"row_083_2_10",kind:"text",text:"在巨鳄龟湾有巨大的巨鳄龟。其中一只像房子一样大。它被称为托巴国王，它的壳上镶嵌着宝石。",range:[56,60]},{id:"row_083_2_11",kind:"text",text:"Gauntlet之序来到这里是为了清除丛林中的不死生物。他们不久前失去了一个营地。他们勉强维持着另一个。我总是看到他们的使者，乘着独木舟沿着Soshenstar河前往南扎路港获取更多的补给和圣殿骑士。",range:[61,65]},{id:"row_083_2_12",kind:"text",text:"要小心任何带有蓝色光晕的雾气。它会传播一种使人发狂的热病。",range:[66,71]},{id:"row_083_2_13",kind:"text",text:"一只名叫Aremag的龙龟居住在楚尔特湾。如果你想从南扎路港启航，你需要财宝来安抚这个贪婪的怪物。需要多少财宝，我说不上来。Aremag会告诉你它想要什么，你最好给它所要求的。",range:[72,77]},{id:"row_083_2_14",kind:"text",text:"塔斯河上游，卡哈克拉峡谷之后，有一座废弃的城市。据说，没有人探索过峡谷的更深处，但这不是真的。只是那些活着出来的少数人大多对在那里发现的东西保持沉默。据可靠消息，这些废墟由一位既智慧又慷慨的纳迦守护。",range:[78,82]},{id:"row_083_2_15",kind:"text",text:"伟大的神乌博塔奥曾经引导楚尔特的人民，但他厌倦了他们不断的战争并抛弃了他们。从那时起，楚尔特人转向了对其他神的崇拜，其中一些是诡计多端和欺骗的神。",range:[83,87]},{id:"row_083_2_16",kind:"text",text:"很久以前，一个被称为阿尔达尼的和平渔民部落因捕食并吃掉河中所有的龙虾而激怒了乌博涛。作为对他们贪婪的惩罚，他们全部被变成了居住在阿尔达尼盆地的怪物。",range:[88,92]},{id:"row_083_2_17",kind:"text",text:"坐落在俯瞰阿尔达尼盆地的高原上的是一个鬼村。那里的人都消失了。没有人知道为什么。你可以通过沿着索申斯塔河到达阿尔达尼盆地。",range:[93,96]},{id:"row_083_2_18",kind:"text",text:"伟大的神乌博涛喜欢迷宫。如果你偶然遇到任何类型的迷宫，就描绘出一条穿过它的路径。通过这样做，你将赢得乌博涛的青睐。",range:[97,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_0da_0",name:"荆棘迷宫遭遇",purpose:"random",rows:[{id:"row_0da_0_0",kind:"text",text:"无遭遇。",range:[1,9]},{id:"row_0da_0_1",kind:"text",text:"1d6 + 6 只皮肤为绿色的格龙蛙人们（巡逻的战士）。",range:[10,12]},{id:"row_0da_0_2",kind:"text",text:"1d3个刺客藤蔓（见附录D）与周围墙壁融为一体。",range:[13,13]},{id:"row_0da_0_3",kind:"text",text:"1d4 食尸鬼们 在迷宫中迷失。",range:[14,14]},{id:"row_0da_0_4",kind:"text",text:"一只无害的亚查甲虫（见 附录C）。",range:[15,15]},{id:"row_0da_0_5",kind:"text",text:"角色们听到了一种喉咙深处的叫声，听起来既充满生机又显得凄凉。它的来源无法确定。",range:[16,16]},{id:"row_0da_0_6",kind:"text",text:"1d6 只丧尸们在迷宫中迷路。",range:[17,17]},{id:"row_0da_0_7",kind:"text",text:"一个隐蔽的陷阱，宽5英尺，深10英尺，内部排列着有毒的木桩。领队角色通过成功的DC 15感知（察觉）检定发现了陷阱。第一个踏入陷阱的角色会掉入其中，受到3（1d6）点钝击伤害，并落在1d4根木桩上，每根木桩造成3（1d6）点穿刺伤害和7（2d6）点毒素伤害。",range:[18,19]},{id:"row_0da_0_8",kind:"text",text:"一扇内部的秘密门。需要进行一次成功的 DC 15 感知（察觉）检定才能发现。",range:[20,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_16a_0",name:"花园发现",purpose:"random",rows:[{id:"row_16a_0_0",kind:"text",text:"1d4 只独角兔（见附录D）",range:[1,1]},{id:"row_16a_0_1",kind:"text",text:"1 刺客藤（见附录D）",range:[2,3]},{id:"row_16a_0_2",kind:"text",text:"1 怯蕴阿灵（见附录D）躲藏在一朵花中",range:[4,5]},{id:"row_16a_0_3",kind:"text",text:"1d4只飞猴（见附录D）栖息在树上。这些猴子顽皮地向附近角色投掷猴舞果（见附录C）。若被攻击它们会飞走。",range:[6,7]},{id:"row_16a_0_4",kind:"text",text:"1d4个幻色蛇（见附录D）",range:[8,9]},{id:"row_16a_0_5",kind:"text",text:"门加灌木，带有2d6盎司的叶子（见附录C）",range:[10,11]},{id:"row_16a_0_6",kind:"text",text:"1d4 个ryath根（见附录C）",range:[12,13]},{id:"row_16a_0_7",kind:"text",text:"4d6个生长在灌木上的辛达浆果（见附录C）",range:[14,15]},{id:"row_16a_0_8",kind:"text",text:"1d4 个野生根（见附录C）",range:[16,17]},{id:"row_16a_0_9",kind:"text",text:"Yahcha甲虫（见附录C）",range:[18,19]},{id:"row_16a_0_10",kind:"text",text:"一个被刺客藤勒死的人类法师的腐烂尸体。对尸体的搜索会发现一个学者背包、一个包含15金币的小袋，以及一个折叠船。这个发现只能进行一次。如果再次出现这个结果，请重新在表上掷骰。",range:[20,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_1d6_0",name:"废墟内部",purpose:"random",rows:[{id:"row_1d6_0_0",kind:"text",text:"—",range:[1,40]},{id:"row_1d6_0_1",kind:"text",text:"刺客藤蔓",range:[41,50]},{id:"row_1d6_0_2",kind:"text",text:"蓝色雾气（再掷一次）",range:[51,60]},{id:"row_1d6_0_3",kind:"text",text:"坍塌的地板（再掷一次）",range:[61,65]},{id:"row_1d6_0_4",kind:"text",text:"巢穴",range:[66,70]},{id:"row_1d6_0_5",kind:"text",text:"植物发现",range:[71,75]},{id:"row_1d6_0_6",kind:"text",text:"宝藏",range:[76,85]},{id:"row_1d6_0_7",kind:"text",text:"孢子人们",range:[86,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_1d6_1",name:"巢穴居住者",purpose:"random",rows:[{id:"row_1d6_1_0",kind:"text",text:"1d6 巨黄蜂",range:[1,2]},{id:"row_1d6_1_1",kind:"text",text:"2d6 蚊蝠们",range:[3,4]},{id:"row_1d6_1_2",kind:"text",text:"1d3 毒蛇群",range:[5,6]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d6"},{id:"tbl_1d6_2",name:"植物发现",purpose:"random",rows:[{id:"row_1d6_2_0",kind:"text",text:"树上挂着2d6颗猴舞果",range:[1,1]},{id:"row_1d6_2_1",kind:"text",text:"门加灌木丛附带1d6盎司的叶子",range:[2,2]},{id:"row_1d6_2_2",kind:"text",text:"生长在地面上的1d6株莱亚斯之根",range:[3,3]},{id:"row_1d6_2_3",kind:"text",text:"生长在灌木上的4d6颗辛达莓果",range:[4,4]},{id:"row_1d6_2_4",kind:"text",text:"1d6 野性根须",range:[5,5]},{id:"row_1d6_2_5",kind:"text",text:"地上生长着2d6株扎孢菇",range:[6,6]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d6"},{id:"tbl_29d_0",name:"奴隶劳动",purpose:"random",rows:[{id:"row_29d_0_0",kind:"text",text:"清理恐龙围栏中的粪便，在区域2。",range:[1,15],attrs:{发展:"角色得知Nahth（区域1）容易受到贿赂。"}},{id:"row_29d_0_1",kind:"text",text:"帮助阿兹·马斯重新整理储藏室的内容（区域13）。",range:[16,40],attrs:{发展:"阿兹·马斯分享了他的怀疑，即芬萨札正在策划一场政变。"}},{id:"row_29d_0_2",kind:"text",text:"协助Xopal在毒药蒸馏厂（区域14）。",range:[41,60],attrs:{发展:"Xopal派角色独自前往区域22采集真菌。"}},{id:"row_29d_0_3",kind:"text",text:"清洗在区域16沐浴的元提。",range:[61,75],attrs:{发展:"角色得知芬萨札做了一个关于黑玉王冠的预言梦，元提人相信这个宝藏拥有召唤夜蛇登达尔的力量。"}},{id:"row_29d_0_4",kind:"text",text:"清理在区域18的元提巢穴。",range:[76,90],attrs:{发展:'角色无意中听到一个元提人用通用语低声对另一个元提人说，"白羽毛，黑面具。"关于这些话的意义，请见区域4。'}},{id:"row_29d_0_5",kind:"text",text:"将一个死去的囚犯喂给在区域21的多头蛇。",range:[91,100],attrs:{发展:"角色们在死去的囚犯身上找到了一张折叠起来的羊皮纸。其中一面，它上面画着寺庙的粗略地图。"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_29d_1",name:"神庙名单",purpose:"reference",rows:[{id:"row_29d_1_0",kind:"text",text:"1｜Nahth (类型1 恶咒蛇人), 4 原体卫雏蛇人, 3 毒蛇群｜元提留在这里，从区域2召集增援。虫群被限制在坑中。",attrs:{备注:"元提留在这里，从区域2召集增援。虫群被限制在坑中。"}},{id:"row_29d_1_1",kind:"text",text:"2｜Soakosh (纯血原体蛇人), 4 原体卫雏蛇人, 2 石化蜥蜴, 1 三角龙｜如果战斗爆发，一名育幼守卫会试图在区域9敲响锣，使整个神庙进入警戒状态。如果锣被其他人敲响，所有的元提和蛇怪会离开去调查。如果被攻击或用火威胁，三角龙会向区域1冲去。",attrs:{备注:"如果战斗爆发，一名育幼守卫会试图在区域9敲响锣，使整个神庙进入警戒状态。如果锣被其他人敲响，所有的元提和蛇怪会离开去调查。如果被攻击或用火威胁，三角龙会向区域1冲去。"}},{id:"row_29d_1_2",kind:"text",text:"4｜1 骸骨纳迦, 2 骷髅牛头人｜不死生物留在这里。",attrs:{备注:"不死生物留在这里。"}},{id:"row_29d_1_3",kind:"text",text:"5｜芬萨札 (蛇人梦魇语者), 2 恶咒蛇人（类型2）, 1 气元素｜如果受到威胁，元提会从区域6调来援军。元素生物一直待在它的瓮中，直到芬萨札释放它。",attrs:{备注:"如果受到威胁，元提会从区域6调来援军。元素生物一直待在它的瓮中，直到芬萨札释放它。"}},{id:"row_29d_1_4",kind:"text",text:"6｜4 原体卫雏蛇人｜除非被区域5战斗的声音吸引，否则元提守护者会留在这里。",attrs:{备注:"除非被区域5战斗的声音吸引，否则元提守护者会留在这里。"}},{id:"row_29d_1_5",kind:"text",text:"7｜3 恶咒蛇人（第三型变种）｜马利森留在这里。",attrs:{备注:"马利森留在这里。"}},{id:"row_29d_1_6",kind:"text",text:"10｜1 变形怪, 11 纯血原体蛇人, 2 原体卫雏蛇人｜变形怪帮助与泰伊红袍法师合作的角色。育幼守卫保护纯血元提。",attrs:{备注:"变形怪帮助与泰伊红袍法师合作的角色。育幼守卫保护纯血元提。"}},{id:"row_29d_1_7",kind:"text",text:"11｜拉兹·纳斯（仅限白天），瑟克洛克 (勇士 变体), 2 恶咒蛇人（类型1）, 3 原体卫雏蛇人, 4 食尸鬼们｜如果受到威胁，拉兹·纳斯会撤退到区域12。如果区域9的锣声响起，瑟克洛克、咒诅者和育幼守卫会去调查，而食尸鬼会留在这里。",attrs:{备注:"如果受到威胁，拉兹·纳斯会撤退到区域12。如果区域9的锣声响起，瑟克洛克、咒诅者和育幼守卫会去调查，而食尸鬼会留在这里。"}},{id:"row_29d_1_8",kind:"text",text:"12｜拉兹·纳斯（仅在夜间出现或被迫从区域11逃离时）｜拉兹·纳斯如果处于劣势会逃跑或进行谈判。",attrs:{备注:"拉兹·纳斯如果处于劣势会逃跑或进行谈判。"}},{id:"row_29d_1_9",kind:"text",text:"13｜Azi Mas (觉醒的巨蟒蛇)｜蛇留在这里。",attrs:{备注:"蛇留在这里。"}},{id:"row_29d_1_10",kind:"text",text:"14｜Xopal (纯血原体蛇人), 5 丧尸们｜元提和僵尸留在这里。",attrs:{备注:"元提和僵尸留在这里。"}},{id:"row_29d_1_11",kind:"text",text:"15｜毒蛇群｜虫群被限制在坑中。",attrs:{备注:"虫群被限制在坑中。"}},{id:"row_29d_1_12",kind:"text",text:"16｜2 恶咒蛇人（类型2）, 4 纯血原体蛇人｜如果区域9的锣声响起，元提会离开去调查。如果这里爆发战斗，增援将从区域17到达。",attrs:{备注:"如果区域9的锣声响起，元提会离开去调查。如果这里爆发战斗，增援将从区域17到达。"}},{id:"row_29d_1_13",kind:"text",text:"17｜Yahru (类型1 恶咒蛇人), 2 角斗士｜如果区域9的锣声响起，或者如果他们检测到区域16有异常情况，咒诅者和角斗士会离开去调查。",attrs:{备注:"如果区域9的锣声响起，或者如果他们检测到区域16有异常情况，咒诅者和角斗士会离开去调查。"}},{id:"row_29d_1_14",kind:"text",text:"18｜6 恶咒蛇人（1型、2型和3型各2个），6 纯血原体蛇人｜如果区域9的锣被敲响，元提会离开去调查。否则，他们在这里休息。",attrs:{备注:"如果区域9的锣被敲响，元提会离开去调查。否则，他们在这里休息。"}},{id:"row_29d_1_15",kind:"text",text:"19｜伊萨尔（类型3恶咒蛇人），3 原体卫雏蛇人｜元提留在这里。",attrs:{备注:"元提留在这里。"}},{id:"row_29d_1_16",kind:"text",text:"20｜4 原体卫雏蛇人｜元提守卫着秘密入口。如果战斗爆发，其中一人会逃往区域19向那里的元提发出警报。试图偷偷溜过守卫的入侵者将被带到区域19接受审问。",attrs:{备注:"元提守卫着秘密入口。如果战斗爆发，其中一人会逃往区域19向那里的元提发出警报。试图偷偷溜过守卫的入侵者将被带到区域19接受审问。"}},{id:"row_29d_1_17",kind:"text",text:"21｜1 多头蛇｜多头蛇攻击游泳者以及在区域18以北旅行的生物。如果摇响小艇的铃铛，多头蛇将在1d6回合内出现并攻击，除非它得到适当的食物。",attrs:{备注:"多头蛇攻击游泳者以及在区域18以北旅行的生物。如果摇响小艇的铃铛，多头蛇将在1d6回合内出现并攻击，除非它得到适当的食物。"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_29d_2",name:"寺庙援军",purpose:"random",rows:[{id:"row_29d_2_0",kind:"text",text:"1d4 个纯血原体蛇人护送着一个类型3恶咒蛇人。",range:[1,15]},{id:"row_29d_2_1",kind:"text",text:"1d4 + 1 名纯血原体蛇人护送着2d4名俘虏（任何阵营的楚尔坦人类男性和女性平民）。",range:[16,30]},{id:"row_29d_2_2",kind:"text",text:"2d4 只纯血原体蛇人从探险或巡逻中返回寺庙。",range:[31,45]},{id:"row_29d_2_3",kind:"text",text:"4 原体卫雏蛇人（见附录D）抬着一个轿子，上面坐着一个第二型恶咒蛇人。",range:[46,60]},{id:"row_29d_2_4",kind:"text",text:"1 名恶咒蛇人正在返回寺庙。掷一个d6来确定其类型：1-2，类型1；3-4，类型2；5-6，类型3。",range:[61,70]},{id:"row_29d_2_5",kind:"text",text:"1 憎恶蛇人 到达神庙挑战拉兹·纳斯的领导地位。如果芬萨札还活着，她会利用她的影响力安排在神庙（区域9）中拉兹·纳斯和这个怪物之间的决斗。如果芬萨札被失能或死亡，这个怪物强行闯入拉兹·纳斯的王座室（区域11），在那里它被杀死。",range:[71,75]},{id:"row_29d_2_6",kind:"text",text:"2d4名疯狂的邪教狂信者（中立邪恶的男女混血人类）请求觐见拉兹·纳斯，以向夜蛇丹德尔宣誓效忠。这些狂信者以财宝作为贡品（在库藏宝藏：挑战等级 0—4表上掷骰一次，出自第七章城主指南）。",range:[76,85]},{id:"row_29d_2_7",kind:"text",text:"2d6名部族武者（中立阵营的楚尔特男女人类）向拉兹·纳斯进贡。贡品包括食物、饮品和财宝（在库藏宝藏：挑战等级 0—4表上掷一次，出自第七章城主指南）。",range:[86,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_309_0",name:"骷髅钥匙",purpose:"reference",rows:[{id:"row_309_0_0",kind:"text",text:"1｜三角形"},{id:"row_309_0_1",kind:"text",text:"2｜方形"},{id:"row_309_0_2",kind:"text",text:"3｜五边形"},{id:"row_309_0_3",kind:"text",text:"4｜六边形"},{id:"row_309_0_4",kind:"text",text:"5｜八边形"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_309_1",name:"修改后的法术",purpose:"reference",rows:[{id:"row_309_1_0",kind:"text",text:"en=Antimagic Field｜这个法术不能阻止恶作剧神灵的魂魄附身于宿主。该法术对灵魂收割者也无效。"},{id:"row_309_1_1",kind:"text",text:"en=Arcane Gate｜任何试图使用这个法术进入或离开墓穴的生物都会出现在区域57。"},{id:"row_309_1_2",kind:"text",text:"en=Astral Projection｜如果在墓穴内施放此法术，或者其预期目标是墓穴内部，法术将失败。"},{id:"row_309_1_3",kind:"text",text:"en=Augury｜如果在墓穴中施展此法术，它将返回错误的读数。"},{id:"row_309_1_4",kind:"text",text:"en=Banishing Smite｜任何被这个法术放逐的生物都会出现在区域57。"},{id:"row_309_1_5",kind:"text",text:"en=Banishment｜与en=Banishing Smite相同。"},{id:"row_309_1_6",kind:"text",text:"en=Clairvoyance｜如果传感器的目的是出现在墓穴内，这个法术就会失败。"},{id:"row_309_1_7",kind:"text",text:"en=Commune｜如果在墓穴中施展此法术，它将不返回任何答案。"},{id:"row_309_1_8",kind:"text",text:"en=Dimension Door｜与en=Arcane Gate相同。"},{id:"row_309_1_9",kind:"text",text:"en=Divination｜与en=Augury相同。"},{id:"row_309_1_10",kind:"text",text:"en=Etherealness｜施法者进入边界以太，但不能穿过墓穴中的表面或门。以太状态的角色可能会遇到一个或多个缝合姐妹。"},{id:"row_309_1_11",kind:"text",text:"en=Find Traps｜如果在墓穴中施展，这个法术会失败。"},{id:"row_309_1_12",kind:"text",text:"en=Gate｜任何在墓穴中的生物，如果穿过这个法术创造的门，将出现在区域57。"},{id:"row_309_1_13",kind:"text",text:"en=Passwall｜这个法术不允许通过墓穴中的表面或门。"},{id:"row_309_1_14",kind:"text",text:"en=Plane Shift｜与en=Arcane Gate相同。"},{id:"row_309_1_15",kind:"text",text:"en=Stone Shape｜这个法术对墓穴中的表面、门、石棺、石块或雕像没有任何效果。"},{id:"row_309_1_16",kind:"text",text:"en=Teleport｜与en=Arcane Gate相同。"},{id:"row_309_1_17",kind:"text",text:"en=Teleportation Circle｜与en=Arcane Gate相同。"},{id:"row_309_1_18",kind:"text",text:"en=Transport via Plants｜与en=Astral Projection相同。"},{id:"row_309_1_19",kind:"text",text:"en=Tree Stride｜与en=Astral Projection相同。"},{id:"row_309_1_20",kind:"text",text:"en=Wish｜这个法术不能用来逃离墓穴。"},{id:"row_309_1_21",kind:"text",text:"en=Word of Recall｜与en=Arcane Gate相同。"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_321_0",name:"恶作剧之神",purpose:"reference",rows:[{id:"row_321_0_0",kind:"text",text:'艾金（女性）｜CN｜善变而难以捉摸｜"我从不按计划行事"｜奥博娜卡｜宿主的敏捷值变成 23，除非它已经更高。',attrs:{个性:"善变而难以捉摸",遗传缺陷:'"我从不按计划行事"',仇敌:"奥博娜卡",法力:"宿主的敏捷值变成 23，除非它已经更高。"}},{id:"row_321_0_1",kind:"text",text:'库巴赞（男性）｜CG｜狂野而充满活力｜"我无所畏惧，风险再大我也敢试一试。"｜帕帕扎图｜宿主的力量值变成23，除非它已经更高。',attrs:{个性:"狂野而充满活力",遗传缺陷:'"我无所畏惧，风险再大我也敢试一试。"',仇敌:"帕帕扎图",法力:"宿主的力量值变成23，除非它已经更高。"}},{id:"row_321_0_2",kind:"text",text:'摩亚（男性）｜LG｜诚实且善良｜"无论何时，我都只说真话。"｜望戈｜宿主可以使用一个动作来隐形。你正在持用和携带的所有物件都将与你一同隐形。如果你攻击、施法、强迫他人进行豁免或造成伤害，该隐形效果将结束。',attrs:{个性:"诚实且善良",遗传缺陷:'"无论何时，我都只说真话。"',仇敌:"望戈",法力:"宿主可以使用一个动作来隐形。你正在持用和携带的所有物件都将与你一同隐形。如果你攻击、施法、强迫他人进行豁免或造成伤害，该隐形效果将结束。"}},{id:"row_321_0_3",kind:"text",text:'娜浪（女性）｜NE｜自私且残忍｜"我不会与他人分享。"｜莎根比｜宿主可以在垂直表面和天花板上自由移动，这无需占用你的双手。你还将获得与你的步行速度相同的攀爬速度。',attrs:{个性:"自私且残忍",遗传缺陷:'"我不会与他人分享。"',仇敌:"莎根比",法力:"宿主可以在垂直表面和天花板上自由移动，这无需占用你的双手。你还将获得与你的步行速度相同的攀爬速度。"}},{id:"row_321_0_4",kind:"text",text:'奥博娜卡（女性）｜LN｜胆怯且偏执｜"我厌恶风险，只会循规蹈矩。"｜艾金｜宿主可以额外同调一个魔法物品。当奥博娜卡离开你时，你失去与所有魔法物品的同调。',attrs:{个性:"胆怯且偏执",遗传缺陷:'"我厌恶风险，只会循规蹈矩。"',仇敌:"艾金",法力:"宿主可以额外同调一个魔法物品。当奥博娜卡离开你时，你失去与所有魔法物品的同调。"}},{id:"row_321_0_5",kind:"text",text:'帕帕扎图（男性）｜LE｜精明且狡诈｜"我不听任何人的意见，只希望别人都照我的命令去做。"｜库巴赞｜宿主不会被突袭，同时你所有基于感知的属性检定具优势，并且你不会受到任何坠落伤害。',attrs:{个性:"精明且狡诈",遗传缺陷:'"我不听任何人的意见，只希望别人都照我的命令去做。"',仇敌:"库巴赞",法力:"宿主不会被突袭，同时你所有基于感知的属性检定具优势，并且你不会受到任何坠落伤害。"}},{id:"row_321_0_6",kind:"text",text:'莎根比（女性）｜NG｜智慧且高尚｜"我对作恶者从不手下留情。"｜娜浪｜如果宿主在自己回合内采取攻击动作，则宿主可以额外进行一次攻击。',attrs:{个性:"智慧且高尚",遗传缺陷:'"我对作恶者从不手下留情。"',仇敌:"娜浪",法力:"如果宿主在自己回合内采取攻击动作，则宿主可以额外进行一次攻击。"}},{id:"row_321_0_7",kind:"text",text:'安珂（女性）｜N｜自私自利且优柔寡断｜"我无法做出任何决定。"｜无｜"我无法做出任何决定。"',attrs:{个性:"自私自利且优柔寡断",遗传缺陷:'"我无法做出任何决定。"',仇敌:"无",法力:'"我无法做出任何决定。"'}},{id:"row_321_0_8",kind:"text",text:'望戈（男性）｜CE｜暴力且疯狂｜"我做事从来不顾他人死活。"｜莫阿｜宿主可以用动作对周围 60 英尺内你可以看见的一个生物发动一次心灵打击。目标必须进行一次 DC 16 的感知豁免，豁免失败则陷入震慑，直至其下回合结束时。',attrs:{个性:"暴力且疯狂",遗传缺陷:'"我做事从来不顾他人死活。"',仇敌:"莫阿",法力:"宿主可以用动作对周围 60 英尺内你可以看见的一个生物发动一次心灵打击。目标必须进行一次 DC 16 的感知豁免，豁免失败则陷入震慑，直至其下回合结束时。"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_351_0",name:"魔法喷泉效果",purpose:"random",rows:[{id:"row_351_0_0",kind:"text",text:"饮用该水的生物必须进行一次 DC 12 体质豁免，若豁免失败则受到 44 (8d10) 点暗蚀伤害，若成功则受到一半伤害。如果此伤害将该生物的生命值降至 0，该生物死亡并化为尘埃。",range:[1,1]},{id:"row_351_0_1",kind:"text",text:"饮用这水的生物将失去说话能力，持续8小时。一个en=Lesser Restoration法术或类似的魔法可以结束这个效果。",range:[2,2]},{id:"row_351_0_2",kind:"text",text:"饮用这水的生物会通过魔法改变性别。一个en=Greater Restoration法术可以恢复生物原来的性别，同样，再次饮用这个喷泉的水也会产生相同的效果。",range:[3,3]},{id:"row_351_0_3",kind:"text",text:"饮用这种水的生物获得2d10点临时生命值。",range:[4,4]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d4"},{id:"tbl_3e6_0",name:"旋转房间效果",purpose:"random",rows:[{id:"row_3e6_0_0",kind:"text",text:"恶魔的面孔喷出令人昏睡的气体，这些气体迅速消散。房间内每个不对 中毒 状态免疫的生物必须成功通过一个 DC 15 体质豁免检定，否则将陷入 昏迷 状态。处于 昏迷 状态的生物每次受到伤害时可以重复豁免检定，成功则结束该效果。",range:[1,6]},{id:"row_3e6_0_1",kind:"text",text:"恶魔的面孔呼出闪烁的尘雾，任何在房间内未通过 DC 15 感知豁免的生物都将被致盲。失明效果持续到其被 en=Lesser Restoration 或类似的魔法治愈为止。",range:[7,12]},{id:"row_3e6_0_2",kind:"text",text:"石制尖刺神奇地从墙壁中伸出，长度为6英寸。任何在回合开始时因房间受到伤害的生物，还会额外受到11（2d10）点穿刺伤害来自这些尖刺。当下一个房间效果被触发时，尖刺会缩回。",range:[13,18]},{id:"row_3e6_0_3",kind:"text",text:"恶魔面孔喷出一股易燃气体，迅速点燃，使整个房间充满火焰。房间里的每个生物都会受到45点（10d8）火焰伤害。",range:[19,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_44c_0",name:"镜子的囚犯",purpose:"reference",rows:[{id:"row_44c_0_0",kind:"text",text:"1｜阿坦（CN 男性楚尔坦人类 平民）｜奥曼商人在奥曼陷落后不久被捕获；长时间的监禁使他精神错乱｜跟随他的解放者四处走动，说着胡话",attrs:{备注:"奥曼商人在奥曼陷落后不久被捕获；长时间的监禁使他精神错乱",释放后的反应:"跟随他的解放者四处走动，说着胡话"}},{id:"row_44c_0_1",kind:"text",text:"2｜—｜—｜—",attrs:{备注:"—",释放后的反应:"—"}},{id:"row_44c_0_2",kind:"text",text:"3｜隐形追猎者｜镜子守卫｜试图杀死释放它的人，并在成功后消失",attrs:{备注:"镜子守卫",释放后的反应:"试图杀死释放它的人，并在成功后消失"}},{id:"row_44c_0_3",kind:"text",text:"4｜Zaal (牛头人)｜在奥穆陷落后不久被阿瑟瑞克困住｜攻击它看到的任何其他生物，除了卢卡努，它服从卢卡努",attrs:{备注:"在奥穆陷落后不久被阿瑟瑞克困住",释放后的反应:"攻击它看到的任何其他生物，除了卢卡努，它服从卢卡努"}},{id:"row_44c_0_4",kind:"text",text:"5｜—｜—｜—",attrs:{备注:"—",释放后的反应:"—"}},{id:"row_44c_0_5",kind:"text",text:"6｜Yraggath (巨魔)｜因囚禁而精神错乱｜攻击它能吃的一切",attrs:{备注:"因囚禁而精神错乱",释放后的反应:"攻击它能吃的一切"}},{id:"row_44c_0_6",kind:"text",text:"7｜Tlad Xolbrys (NE 男性 卓尔魔法师)｜在建造九神之墓期间被困的奥穆访客｜为了确保自己的生存，帮助或背叛他的解放者",attrs:{备注:"在建造九神之墓期间被困的奥穆访客",释放后的反应:"为了确保自己的生存，帮助或背叛他的解放者"}},{id:"row_44c_0_7",kind:"text",text:"8｜波克斯（变形怪）｜伪装成名叫比夫·朗斯泰尔的男性人类冒险家；跟随黄旗公司进入了墓穴｜尝试加入队伍并远离危险",attrs:{备注:"伪装成名叫比夫·朗斯泰尔的男性人类冒险家；跟随黄旗公司进入了墓穴",释放后的反应:"尝试加入队伍并远离危险"}},{id:"row_44c_0_8",kind:"text",text:"9｜四臂巨石像鬼（见附录D）｜镜子守卫｜攻击所有其他生物，然后站在镜子旁边守卫",attrs:{备注:"镜子守卫",释放后的反应:"攻击所有其他生物，然后站在镜子旁边守卫"}},{id:"row_44c_0_9",kind:"text",text:"10｜—｜—｜—",attrs:{备注:"—",释放后的反应:"—"}},{id:"row_44c_0_10",kind:"text",text:"11｜卢卡努（N 女性楚尔坦勇士；见附录D）｜欧姆女王Napaka的保镖，在城市陷落时被困；穿着刺尾狮甲胄（见附录C）｜帮助她的解放者，但在得知纳帕卡女王（见区域53）发生了什么之前，她不会离开奥穆",attrs:{备注:"欧姆女王Napaka的保镖，在城市陷落时被困；穿着刺尾狮甲胄（见附录C）",释放后的反应:"帮助她的解放者，但在得知纳帕卡女王（见区域53）发生了什么之前，她不会离开奥穆"}},{id:"row_44c_0_11",kind:"text",text:"12｜蚊蝠｜当它飞向镜子时被困住｜攻击最近的温血生物",attrs:{备注:"当它飞向镜子时被困住",释放后的反应:"攻击最近的温血生物"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_465_0",name:"迷宫发现",purpose:"random",rows:[{id:"row_465_0_0",kind:"text",text:"无",range:[1,70]},{id:"row_465_0_1",kind:"text",text:"奥穆儿童的骸骨",range:[71,75]},{id:"row_465_0_2",kind:"text",text:"战斗至死的牛头人",range:[76,84]},{id:"row_465_0_3",kind:"text",text:"蓝色水晶钥匙",range:[85,87]},{id:"row_465_0_4",kind:"text",text:"金色水晶钥匙",range:[88,90]},{id:"row_465_0_5",kind:"text",text:"紫色水晶钥匙",range:[91,93]},{id:"row_465_0_6",kind:"text",text:"绿色水晶钥匙",range:[94,96]},{id:"row_465_0_7",kind:"text",text:"红色水晶钥匙",range:[97,99]},{id:"row_465_0_8",kind:"text",text:"黑色水晶钥匙",range:[100,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"},{id:"tbl_4cf_0",name:"浑天仪合相",purpose:"random",rows:[{id:"row_4cf_0_0",kind:"text",text:"浑天仪和其中的所有生物都消失了。最终由DM决定它们是否会出现在哪里，如果出现的话。可能性包括机械境（Mechanus）、奥尔瑟（奥斯）上的广阔沼泽、克林（Krynn）上的永不忘记山（Mount Nevermind）、阿塔斯（Athas）上的沙漠、地球上的维多利亚时代伦敦，或者是太阳。",range:[1,5]},{id:"row_4cf_0_1",kind:"text",text:"坐在浑天仪椅子上的生物被一个未知实体触碰，并遭受了根本的性格改变。与玩家合作确定一个适当的改变。",range:[6,15]},{id:"row_4cf_0_2",kind:"text",text:"在球体内施放了en=Cloudkill法术。",range:[16,30]},{id:"row_4cf_0_3",kind:"text",text:"太阳形状的球体裂开，5000金币洒落在地板上。",range:[31,50]},{id:"row_4cf_0_4",kind:"text",text:"坐在浑天椅上的生物获得一个英勇护咒（参见超自然赠礼在城主指南的第七章）。",range:[51,65]},{id:"row_4cf_0_5",kind:"text",text:"距离浑天仪20尺范围内的所有生物恢复50生命值。球体内的生物不获得此益处。",range:[66,80]},{id:"row_4cf_0_6",kind:"text",text:"一个光彩夺目宝石出现在坐在浑天仪椅子上的生物的膝盖上。",range:[81,90]},{id:"row_4cf_0_7",kind:"text",text:"坐在浑天仪椅子上的生物的智慧（Intelligence）属性得分永久增加1d4 + 1，最高不超过22。",range:[91,99]},{id:"row_4cf_0_8",kind:"text",text:"坐在浑天仪椅子上的生物被赋予了一次施放en=Wish法术的能力。",range:[100,100]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d100"}],p=[],I=[],g=[{id:"agd_toa_syndra_decline",title:"死亡诅咒持续侵蚀辛德拉",ownerRef:"npc_syndra_silvane",secrecy:"known",activation:"auto",steps:[{id:"step_toa_syndra_week",after:{anchor:"day"},headline:"辛德拉继续衰弱",effects:[],foreshadow:"传讯或瓦康嘎的消息显示她的最大生命仍按日下降。"},{id:"step_toa_syndra_critical",after:{anchor:"day"},headline:"辛德拉接近死亡",effects:[],foreshadow:"远征拖延使赞助人的剩余时间变成可计算的风险。"}],cancelCondition:{type:"quest_completed",questId:"qst_main_toa"},_meta:{sourcePages:[8,190],confidence:"medium",needsReview:!0,extractorNotes:"原书只有逐日减 1 与初始 79 生命，没有为两条叙事预警规定具体日数；精确倒计时由 clock 承载，agenda 只作提示。"}}],m=[],v={formatVersion:1,manifest:e,locations:n,scenes:t,npcs:o,infos:a,encounters:s,quests:i,events:c,achievements:d,treasures:r,lore:l,hooks:_,clocks:f,tables:u,secrets:p,afflictions:I,agendas:g,migrations:m};export{d as achievements,I as afflictions,g as agendas,f as clocks,v as default,s as encounters,c as events,h as formatVersion,_ as hooks,a as infos,n as locations,l as lore,e as manifest,m as migrations,o as npcs,i as quests,t as scenes,p as secrets,u as tables,r as treasures};

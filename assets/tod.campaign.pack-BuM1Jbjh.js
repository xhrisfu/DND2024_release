const g=1,e={id:"tod",title:"巨龙僭政",version:"1.0.0",sourceBook:{title:"Tyranny of Dragons (Hoard of the Dragon Queen + The Rise of Tiamat)",edition:"2023 compilation",totalPages:192},recommendedLevels:[1,15],startingLocationId:"loc_hotdq_05f",startingSceneId:"scn_hotdq_05f",chapters:[{id:"source_hotdq",title:"龙后的宝山",questIds:["qst_main_tod"],completionCondition:{type:"always"},dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。议会任务、金属龙谈判与龙语者线索允许不同顺序。教团反击是穿插事件，不是独立旅行目的地；不能把三次反击连续播放或要求所有可选任务。"}]},{id:"source_rot",title:"提亚马特崛起",questIds:[],completionCondition:{type:"always"},dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。议会任务、金属龙谈判与龙语者线索允许不同顺序。教团反击是穿插事件，不是独立旅行目的地；不能把三次反击连续播放或要求所有可选任务。"}]}],styleBible:"以整编版为单一入口：从燃烧的绿野追踪巨龙教团劫掠宝藏，经孵化场、商队、纳瑞塔城堡、狩猎小屋与云端城堡揭开计划；随后以深水城议会为反复返回的战争枢纽，在移动冰海、龙语者任务、教团反击、金属龙议会、赞萨尔塔和泰伊使团之间按议会决策推进，最终突袭龙井神殿阻止提亚马特。不得把多次议会或可变任务顺序伪造成固定清单全清。",_meta:{needsReview:!1,extractorNotes:"manifest 已由逐书 packMeta 复核｜开局点：overrides.json 指定开局（startingLocationId=loc_hotdq_05f，已排除 external 哨兵）｜packMeta 已完成逐书复核"},outcomeMilestones:[{id:"tod_stage_tod_greenest",outcomes:[{id:"tod_stage_tod_greenest",condition:{type:"and",clauses:[{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_reach_greenest"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_greenest_missions"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_cyanwrath"}]}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_stage_tod_raiders",outcomes:[{id:"tod_stage_tod_raiders",condition:{type:"and",clauses:[{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_follow_raiders"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_scout_camp"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_rescue_leosin"}]}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_stage_tod_hatchery",outcomes:[{id:"tod_stage_tod_hatchery",condition:{type:"and",clauses:[{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_return_camp"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_infiltrate_hatchery"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_resolve_eggs"}]}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_stage_tod_caravan",outcomes:[{id:"tod_stage_tod_caravan",condition:{type:"and",clauses:[{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_elturel_briefing"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_join_caravan"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_shadow_cult"}]}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_stage_tod_naerytar",outcomes:[{id:"tod_stage_tod_naerytar",condition:{type:"and",clauses:[{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_reach_naerytar"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_choose_castle_route"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_find_portal"}]}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_stage_tod_lodge",outcomes:[{id:"tod_stage_tod_lodge",condition:{type:"and",clauses:[{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_exit_portal"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_resolve_talis"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_reach_parnast"}]}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_stage_tod_skyreach",outcomes:[{id:"tod_stage_tod_skyreach",condition:{type:"and",clauses:[{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_enter_skyreach"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_turn_blagothkus"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_stop_hoard"}]}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_obj_tod_escape_aruthator",outcomes:[{id:"tod_obj_tod_escape_aruthator",condition:{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_escape_aruthator"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_obj_tod_resolve_varram",outcomes:[{id:"tod_obj_tod_resolve_varram",condition:{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_resolve_varram"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_obj_tod_defeat_neronvain",outcomes:[{id:"tod_obj_tod_defeat_neronvain",condition:{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_defeat_neronvain"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_obj_tod_survive_lennithon",outcomes:[{id:"tod_obj_tod_survive_lennithon",condition:{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_survive_lennithon"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_cult_strike_1",outcomes:[{id:"tod_cult_strike_1",condition:{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_cult_strike_1"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_cult_strike_2",outcomes:[{id:"tod_cult_strike_2",condition:{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_cult_strike_2"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"tod_cult_strike_3",outcomes:[{id:"tod_cult_strike_3",condition:{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_cult_strike_3"}}],thresholds:[{completedCount:1,levelGain:1}]}]},n=[{id:"loc_hotdq_05f",name:"燃烧的绿野",aliases:["Greenest in Flames"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_08b",kind:"road"}],sceneIds:["scn_hotdq_05f","scn_hotdq_060","scn_hotdq_061","scn_hotdq_06c","scn_hotdq_073"],defaultSceneId:"scn_hotdq_05f",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_08b",name:"强盗营地",aliases:["Raiders' Camp"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_05f",kind:"road"},{toLocationId:"loc_hotdq_0a7",kind:"road"}],sceneIds:["scn_hotdq_08b","scn_hotdq_08e","scn_hotdq_095","scn_hotdq_0a6"],defaultSceneId:"scn_hotdq_08b",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_0a7",name:"龙蛋孵化场",aliases:["Dragon Hatchery"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_08b",kind:"road"},{toLocationId:"loc_hotdq_0d5",kind:"road"}],sceneIds:["scn_hotdq_0a7","scn_hotdq_0af","scn_hotdq_0b0","scn_hotdq_0b1","scn_hotdq_0b4","scn_hotdq_0b5","scn_hotdq_0b7","scn_hotdq_0bb","scn_hotdq_0bd","scn_hotdq_0c1","scn_hotdq_0c8","scn_hotdq_0ca","scn_hotdq_0cb","scn_hotdq_0ce","scn_hotdq_0d1","scn_hotdq_0d3"],defaultSceneId:"scn_hotdq_0a7",_meta:{sourcePages:[37],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_0d5",name:"在路上",aliases:["On the Road"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_0a7",kind:"road"},{toLocationId:"loc_hotdq_10c",kind:"road"}],sceneIds:["scn_hotdq_0d5","scn_hotdq_0d6","scn_hotdq_0da","scn_hotdq_0dd","scn_hotdq_0f5","scn_hotdq_0f6","scn_hotdq_105"],defaultSceneId:"scn_hotdq_0d5",_meta:{sourcePages:[44],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_10c",name:"前方施工",aliases:["Construction Ahead"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_0d5",kind:"road"},{toLocationId:"loc_hotdq_111",kind:"road"}],sceneIds:["scn_hotdq_10c","scn_hotdq_2d2","scn_hotdq_10e"],defaultSceneId:"scn_hotdq_10c",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_111",name:"卡纳特客栈",aliases:["Carnath Roadhouse"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_10c",kind:"road"},{toLocationId:"loc_hotdq_130",kind:"road"}],sceneIds:["scn_hotdq_111","scn_hotdq_113","scn_hotdq_114","scn_hotdq_115","scn_hotdq_116","scn_hotdq_117","scn_hotdq_118","scn_hotdq_119","scn_hotdq_11a","scn_hotdq_11b","scn_hotdq_11c","scn_hotdq_11e"],defaultSceneId:"scn_hotdq_111",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_130",name:"纳瑞塔城堡",aliases:["Castle Naerytar"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_111",kind:"road"},{toLocationId:"loc_hotdq_139",kind:"passage"},{toLocationId:"loc_hotdq_15f",kind:"passage"},{toLocationId:"loc_hotdq_171",kind:"passage"},{toLocationId:"loc_hotdq_181",kind:"passage"}],sceneIds:["scn_hotdq_130","scn_hotdq_137","scn_hotdq_138"],defaultSceneId:"scn_hotdq_130",_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_139",name:"在纳瑞塔尔城堡之外",aliases:["Outside Castle Naerytar"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_130",kind:"passage"}],sceneIds:["scn_hotdq_139","scn_hotdq_13a","scn_hotdq_13b","scn_hotdq_13c","scn_hotdq_13e","scn_hotdq_140","scn_hotdq_142"],defaultSceneId:"scn_hotdq_139",_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_263",name:"底层",aliases:["Ground Floor"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_238",kind:"passage"}],sceneIds:["scn_hotdq_263","scn_hotdq_144","scn_hotdq_145","scn_hotdq_146","scn_hotdq_147","scn_hotdq_148","scn_hotdq_14a","scn_hotdq_14b","scn_hotdq_14d","scn_hotdq_14f","scn_hotdq_150","scn_hotdq_151","scn_hotdq_152","scn_hotdq_154","scn_hotdq_155","scn_hotdq_156","scn_hotdq_157","scn_hotdq_158","scn_hotdq_15a","scn_hotdq_15b","scn_hotdq_15c","scn_hotdq_15d","scn_hotdq_15e"],defaultSceneId:"scn_hotdq_263",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_15f",name:"第二层",aliases:["Second Floor"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_130",kind:"passage"},{toLocationId:"loc_hotdq_167",kind:"passage"},{toLocationId:"loc_hotdq_171",kind:"passage"}],sceneIds:["scn_hotdq_15f","scn_hotdq_160","scn_hotdq_161","scn_hotdq_163","scn_hotdq_164","scn_hotdq_166"],defaultSceneId:"scn_hotdq_15f",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_167",name:"2I, J, K. 空置房间",aliases:["2I, J, K. Vacant Rooms"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_15f",kind:"passage"}],sceneIds:["scn_hotdq_167","scn_hotdq_168","scn_hotdq_169","scn_hotdq_16a","scn_hotdq_16b","scn_hotdq_16c","scn_hotdq_16d","scn_hotdq_16e","scn_hotdq_16f"],defaultSceneId:"scn_hotdq_167",_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_171",name:"第三层",aliases:["Third Floor"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_15f",kind:"passage"},{toLocationId:"loc_hotdq_175",kind:"passage"},{toLocationId:"loc_hotdq_130",kind:"passage"}],sceneIds:["scn_hotdq_171","scn_hotdq_172","scn_hotdq_174"],defaultSceneId:"scn_hotdq_171",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_175",name:"3H, I, J. 蜘蛛巢穴",aliases:["3H, I, J. Spiders' Lair"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_171",kind:"passage"}],sceneIds:["scn_hotdq_175","scn_hotdq_176","scn_hotdq_178","scn_hotdq_179","scn_hotdq_17b","scn_hotdq_17c","scn_hotdq_17d","scn_hotdq_17e","scn_hotdq_17f","scn_hotdq_180"],defaultSceneId:"scn_hotdq_175",_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_181",name:"城堡之下",aliases:["Beneath the Castle"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_130",kind:"passage"},{toLocationId:"loc_hotdq_196",kind:"portal"}],sceneIds:["scn_hotdq_181","scn_hotdq_187","scn_hotdq_188","scn_hotdq_18a","scn_hotdq_18b","scn_hotdq_18c","scn_hotdq_18d","scn_hotdq_18e","scn_hotdq_18f","scn_hotdq_190","scn_hotdq_191","scn_hotdq_192","scn_hotdq_193","scn_hotdq_194","scn_hotdq_195"],defaultSceneId:"scn_hotdq_181",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_196",name:"狩猎小屋",aliases:["Hunting Lodge"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_181",kind:"portal"},{toLocationId:"loc_hotdq_1a3",kind:"passage"},{toLocationId:"loc_hotdq_1b1",kind:"passage"},{toLocationId:"loc_hotdq_1d0",kind:"passage"},{toLocationId:"loc_hotdq_1f1",kind:"road"}],sceneIds:["scn_hotdq_196","scn_hotdq_208","scn_hotdq_20c","scn_hotdq_1a1"],defaultSceneId:"scn_hotdq_196",_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_1a3",name:"小屋外",aliases:["Outside the Lodge"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_196",kind:"passage"}],sceneIds:["scn_hotdq_1a3","scn_hotdq_1a7","scn_hotdq_1a9","scn_hotdq_1b0"],defaultSceneId:"scn_hotdq_1a3",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_1b1",name:"小屋底层",aliases:["Lodge Ground Floor"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_196",kind:"passage"},{toLocationId:"loc_hotdq_1d0",kind:"passage"}],sceneIds:["scn_hotdq_1b1","scn_hotdq_1b2","scn_hotdq_1b4","scn_hotdq_1b7","scn_hotdq_1ba","scn_hotdq_1bc","scn_hotdq_1bf","scn_hotdq_1c4","scn_hotdq_1c6","scn_hotdq_1c9","scn_hotdq_1cb","scn_hotdq_1cd","scn_hotdq_1ce"],defaultSceneId:"scn_hotdq_1b1",_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_1d0",name:"小屋上层",aliases:["Lodge Upper Floor"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_1b1",kind:"passage"},{toLocationId:"loc_hotdq_196",kind:"passage"}],sceneIds:["scn_hotdq_1d0","scn_hotdq_1d1","scn_hotdq_1d9","scn_hotdq_1dc","scn_hotdq_1df","scn_hotdq_1e2","scn_hotdq_1e6","scn_hotdq_1e9","scn_hotdq_1ed"],defaultSceneId:"scn_hotdq_1d0",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_1f1",name:"云端城堡",aliases:["Castle in the Clouds"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_196",kind:"road"},{toLocationId:"loc_hotdq_1f3",kind:"road"},{toLocationId:"loc_hotdq_20e",kind:"passage"},{toLocationId:"loc_hotdq_238",kind:"passage"},{toLocationId:"loc_rot_05f",kind:"road"}],sceneIds:["scn_hotdq_1f1","scn_hotdq_1f2"],defaultSceneId:"scn_hotdq_1f1",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_1f3",name:"帕纳斯特村庄",aliases:["1. Village of Parnast"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_1f1",kind:"road"},{toLocationId:"loc_hotdq_1ff",kind:"passage"}],sceneIds:["scn_hotdq_1f3","scn_hotdq_1f7","scn_hotdq_1fb"],defaultSceneId:"scn_hotdq_1f3",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_1ff",name:"斧头神殿",aliases:["4. Shrine of Axes"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_1f3",kind:"passage"}],sceneIds:["scn_hotdq_1ff","scn_hotdq_201","scn_hotdq_207"],defaultSceneId:"scn_hotdq_1ff",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_20e",name:"城堡区域 (6-15)",aliases:["Areas of the Castle (6-15)"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_1f1",kind:"passage"},{toLocationId:"loc_hotdq_220",kind:"passage"},{toLocationId:"loc_hotdq_234",kind:"passage"},{toLocationId:"loc_hotdq_238",kind:"passage"}],sceneIds:["scn_hotdq_20e","scn_hotdq_20f","scn_hotdq_214","scn_hotdq_216","scn_hotdq_21c"],defaultSceneId:"scn_hotdq_20e",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_220",name:"马厩",aliases:["8. Stables"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_20e",kind:"passage"}],sceneIds:["scn_hotdq_220","scn_hotdq_223","scn_hotdq_224","scn_hotdq_229","scn_hotdq_22d","scn_hotdq_232"],defaultSceneId:"scn_hotdq_220",_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_234",name:"客房",aliases:["14. Guest Chamber"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_20e",kind:"passage"}],sceneIds:["scn_hotdq_234","scn_hotdq_235"],defaultSceneId:"scn_hotdq_234",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_238",name:"城堡区域 (16-25)",aliases:["Areas of the Castle (16-25)"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_1f1",kind:"passage"},{toLocationId:"loc_hotdq_20e",kind:"passage"},{toLocationId:"loc_hotdq_25b",kind:"passage"},{toLocationId:"loc_hotdq_263",kind:"passage"}],sceneIds:["scn_hotdq_238","scn_hotdq_239","scn_hotdq_23c","scn_hotdq_23f","scn_hotdq_243"],defaultSceneId:"scn_hotdq_238",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_hotdq_25b",name:"食人魔营房",aliases:["20. Ogre Barracks"],chapterId:"source_hotdq",connections:[{toLocationId:"loc_hotdq_238",kind:"passage"}],sceneIds:["scn_hotdq_25b","scn_hotdq_25f","scn_hotdq_261","scn_hotdq_268","scn_hotdq_269","scn_hotdq_26a","scn_hotdq_270"],defaultSceneId:"scn_hotdq_25b",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_05f",name:"深水城议会",aliases:["Council of Waterdeep"],chapterId:"source_rot",connections:[{toLocationId:"loc_hotdq_1f1",kind:"road"},{toLocationId:"loc_rot_086",kind:"road"},{toLocationId:"loc_rot_0da",kind:"road"},{toLocationId:"loc_rot_153",kind:"road"},{toLocationId:"loc_rot_16f",kind:"road"},{toLocationId:"loc_rot_196",kind:"road"},{toLocationId:"loc_rot_1dd",kind:"portal"},{toLocationId:"loc_rot_1e6",kind:"road"},{toLocationId:"loc_rot_1c0",kind:"road"}],sceneIds:["scn_rot_05f","scn_rot_060","scn_rot_062","scn_rot_064","scn_rot_066","scn_rot_07d","scn_rot_07f"],defaultSceneId:"scn_rot_05f",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_086",name:"移动冰海",aliases:["The Sea of Moving Ice"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_05f",kind:"road"},{toLocationId:"loc_rot_098",kind:"passage"}],sceneIds:["scn_rot_086","scn_rot_091"],defaultSceneId:"scn_rot_086",_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_098",name:"冰洞",aliases:["Ice Caves"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_086",kind:"passage"},{toLocationId:"loc_rot_0b2",kind:"passage"},{toLocationId:"loc_rot_0c3",kind:"passage"},{toLocationId:"loc_rot_0c7",kind:"passage"},{toLocationId:"loc_rot_0d3",kind:"passage"}],sceneIds:["scn_rot_098","scn_rot_0a9","scn_rot_0aa","scn_rot_0ab","scn_rot_0ac","scn_rot_0af","scn_rot_0b0"],defaultSceneId:"scn_rot_098",_meta:{sourcePages:[115],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_0b2",name:"巨人大厅",aliases:["7. Hall of Giants"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_098",kind:"passage"}],sceneIds:["scn_rot_0b2","scn_rot_0b4","scn_rot_0b6","scn_rot_0b7","scn_rot_0bd","scn_rot_0c1"],defaultSceneId:"scn_rot_0b2",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_0c3",name:"冰蟾工作区",aliases:["13. Ice Toad Workplace"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_098",kind:"passage"}],sceneIds:["scn_rot_0c3","scn_rot_0c6"],defaultSceneId:"scn_rot_0c3",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_0c7",name:"阿拉瑟托的巢穴",aliases:["Arauthator's Lair"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_098",kind:"passage"}],sceneIds:["scn_rot_0c7","scn_rot_0cf","scn_rot_0d0","scn_rot_0d1","scn_rot_0d2"],defaultSceneId:"scn_rot_0c7",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_0d3",name:"喉咙",aliases:["18b. The Throat"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_098",kind:"passage"}],sceneIds:["scn_rot_0d3","scn_rot_0d4","scn_rot_0d5","scn_rot_16c","scn_rot_0d7","scn_rot_0d8"],defaultSceneId:"scn_rot_0d3",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_0da",name:"第11章和第12章：龙语者之死",aliases:["Chapters 11 and 12: Death to the Wyrmspeakers"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_05f",kind:"road"},{toLocationId:"loc_rot_0ea",kind:"road"},{toLocationId:"loc_rot_13a",kind:"road"}],sceneIds:["scn_rot_0da","scn_rot_0db"],defaultSceneId:"scn_rot_0da",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_0ea",name:"迪德里乌斯的墓穴",aliases:["Tomb of Diderius"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_0da",kind:"road"},{toLocationId:"loc_rot_101",kind:"passage"}],sceneIds:["scn_rot_0ea","scn_rot_0f1","scn_rot_0f6","scn_rot_0f7","scn_rot_0f9","scn_rot_0ff"],defaultSceneId:"scn_rot_0ea",_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_101",name:"走廊",aliases:["6. Hallway"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_0ea",kind:"passage"},{toLocationId:"loc_rot_10a",kind:"passage"}],sceneIds:["scn_rot_101","scn_rot_104","scn_rot_106","scn_rot_108","scn_rot_109"],defaultSceneId:"scn_rot_101",_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_10a",name:"宝库",aliases:["11. Treasure Vault"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_101",kind:"passage"},{toLocationId:"loc_rot_116",kind:"passage"}],sceneIds:["scn_rot_10a","scn_rot_10d","scn_rot_110"],defaultSceneId:"scn_rot_10a",_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_116",name:"Ss'tck'al",aliases:["Ss'tck'al"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_10a",kind:"passage"},{toLocationId:"loc_rot_125",kind:"passage"}],sceneIds:["scn_rot_116","scn_rot_11d","scn_rot_11e","scn_rot_11f","scn_rot_121","scn_rot_124"],defaultSceneId:"scn_rot_116",_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_125",name:"孵化室",aliases:["19. Hatchery"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_116",kind:"passage"}],sceneIds:["scn_rot_125","scn_rot_126","scn_rot_128","scn_rot_129","scn_rot_12d","scn_rot_12f"],defaultSceneId:"scn_rot_125",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_13a",name:"内罗瓦因的要塞",aliases:["Neronvain's Stronghold"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_0da",kind:"road"}],sceneIds:["scn_rot_13a","scn_rot_141","scn_rot_143","scn_rot_145","scn_rot_146","scn_rot_148","scn_rot_149","scn_rot_14b","scn_rot_14d","scn_rot_14f","scn_rot_150"],defaultSceneId:"scn_rot_13a",_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_153",name:"教团反击",aliases:["The Cult Strikes Back"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_05f",kind:"road"}],sceneIds:["scn_rot_153","scn_rot_155","scn_rot_15d","scn_rot_166","scn_rot_16e"],defaultSceneId:"scn_rot_153",_meta:{sourcePages:[140],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_16f",name:"金属龙，觉醒",aliases:["Metallic Dragons, Arise"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_05f",kind:"road"}],sceneIds:["scn_rot_16f","scn_rot_170","scn_rot_172"],defaultSceneId:"scn_rot_16f",_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_196",name:"赞萨尔的塔",aliases:["Xonthal's Tower"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_05f",kind:"road"},{toLocationId:"loc_rot_198",kind:"passage"}],sceneIds:["scn_rot_196","scn_rot_194"],defaultSceneId:"scn_rot_196",_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_198",name:"迷宫",aliases:["The Maze"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_196",kind:"passage"},{toLocationId:"loc_rot_1ae",kind:"passage"}],sceneIds:["scn_rot_198","scn_rot_19c","scn_rot_1a1","scn_rot_1a4","scn_rot_1a6","scn_rot_1a8","scn_rot_1aa","scn_rot_1ac"],defaultSceneId:"scn_rot_198",_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_1ae",name:"高塔",aliases:["The Tower"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_198",kind:"passage"},{toLocationId:"loc_rot_1c0",kind:"passage"}],sceneIds:["scn_rot_1ae","scn_rot_1b6","scn_rot_1b8","scn_rot_1b9","scn_rot_1bb","scn_rot_1bd","scn_rot_1bf"],defaultSceneId:"scn_rot_1ae",_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_1c0",name:"地下城",aliases:["Dungeon"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_1ae",kind:"passage"},{toLocationId:"loc_rot_05f",kind:"road"}],sceneIds:["scn_rot_1c0","scn_rot_1c6","scn_rot_1c7","scn_rot_1ca","scn_rot_1cc","scn_rot_1ce","scn_rot_1d1","scn_rot_1d3","scn_rot_1d5","scn_rot_1d6","scn_rot_1d8","scn_rot_1da"],defaultSceneId:"scn_rot_1c0",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_1dd",name:"前往泰伊的使命",aliases:["Mission to Thay"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_05f",kind:"portal"}],sceneIds:["scn_rot_1dd","scn_rot_1de","scn_rot_1e5"],defaultSceneId:"scn_rot_1dd",_meta:{sourcePages:[161],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_1e6",name:"提亚马特的归来",aliases:["Tiamat's Return"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_05f",kind:"road"},{toLocationId:"loc_rot_1ed",kind:"passage"}],sceneIds:["scn_rot_1e6","scn_rot_1e7"],defaultSceneId:"scn_rot_1e6",_meta:{sourcePages:[164],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}},{id:"loc_rot_1ed",name:"龙之井",aliases:["The Well of Dragons"],chapterId:"source_rot",connections:[{toLocationId:"loc_rot_1e6",kind:"passage"}],sceneIds:["scn_rot_1ed","scn_rot_1fa","scn_rot_1fb","scn_rot_1fc","scn_rot_1fd","scn_rot_200","scn_rot_201","scn_rot_204","scn_rot_205","scn_rot_206","scn_rot_208","scn_rot_209","scn_rot_20b","scn_rot_20d","scn_rot_20e","scn_rot_20f","scn_rot_210","scn_rot_215","scn_rot_238"],defaultSceneId:"scn_rot_1ed",_meta:{sourcePages:[165],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；overlay覆写:connections；配置列入逐地点来源复核清单"}}],t=[{id:"scn_hotdq_05f",locationId:"loc_hotdq_05f",name:"燃烧的绿野",activation:{condition:{type:"always"},priority:0},skeleton:["格林斯特镇是由半身人达瓦·斯卡特哈特创立的，她是一个自诩为绿野女王的流氓。","斯卡特哈特去世时并未达到那种显赫的地位，但她的小镇发展成为一个繁荣的社区。","它的成功并不令人意外，因为格林斯特是横跨乌尔登小径的唯一一个相当规模的城镇，乌尔登小径是连接东部的龙海岸城市、科米尔和散提亚与南下海岸之路的最直接道路，通往伟大的城市安姆、特希尔和遥远的卡利姆杉。","通过格林斯特的贸易商队为小镇的商人和工匠带来金钱，而总督奈特希尔在居民的要求下管理着这个小镇。","冒险者们可能正在从一座城镇前往另一座城镇的路上，或者在一次远行后返回他们的家园。"],flesh:`格林斯特镇是由半身人达瓦·斯卡特哈特创立的，她是一个自诩为绿野女王的流氓。斯卡特哈特去世时并未达到那种显赫的地位，但她的小镇发展成为一个繁荣的社区。它的成功并不令人意外，因为格林斯特是横跨乌尔登小径的唯一一个相当规模的城镇，乌尔登小径是连接东部的龙海岸城市、科米尔和散提亚与南下海岸之路的最直接道路，通往伟大的城市安姆、特希尔和遥远的卡利姆杉。通过格林斯特的贸易商队为小镇的商人和工匠带来金钱，而总督奈特希尔在居民的要求下管理着这个小镇。

冒险者们可能正在从一座城镇前往另一座城镇的路上，或者在一次远行后返回他们的家园。另外，他们可能作为保镖陪同一位商人或富有的旅行者。费伦的许多不安分的年轻人已经作为商队护卫体验了他们第一次的旅行和冒险。

你可以将巨龙的僭政调整为适用于不同地域或是不同的设定，只需你稍微多做一些准备工作。更改名称和位置以适应你的战役。

燃烧的房屋和半月为整个城镇提供了2。堡垒内部则被明亮地照亮。

邪教徒在穿过小镇时试图点燃建筑物，但茅草并没有看起来那么容易燃烧。

流经格林斯特的小溪很浅（很少超过3尺深），底部是砾石，所以角色可以轻松地沿着它移动。在河岸清晰的地方，进入或离开小溪都很容易。小溪边的灌木丛很茂密，灌木生长的地方河岸很陡。角色在灌木丛中每回合只能移动5尺。

管理绿野镇的人是塔巴·奈特希尔，一个六十岁的人类男性。当天空晴朗时，他在城堡的护墙上踱步，或者如果龙在攻击，他就在城堡内部。无论如何，奈特希尔欢迎他们，并带他们到护墙上。从那里，他们可以最好地俯瞰绿野镇。

奈特希尔的右侧脸颊和头部被绷带包扎，他的右臂悬挂在三角巾中，他浅蓝色的束腰外衣沾染了他自己的血迹。他在袭击的早期阶段受了这些伤，并且没有抽出时间进行比匆忙急救更多的治疗。

Escobert是一个盾矮人，有着打结、凌乱、鲜红色的头发。作为城堡的主人，Escobert负责其防御，并且是关于隧道和突击口（见下文"古老的隧道"和"出击口"）的最佳信息来源。他携带着一个巨大的铁和黄铜钥匙环，用于城堡中的许多锁。`,spotlightRefs:[],presentNpcIds:["npc_frulam_mondath","npc_leosin_erlanthar","npc_linan_swift"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`当角色们到达城镇边缘（在Greenest地图上显示的区域）时，太阳已经落山了。
当角色们到达时，大部分火焰来自干草堆和谷仓，而不是来自住宅或商店。
如果角色们询问谁是负责人，他们会被人指引去找奈特希尔。
如果角色们到达城堡时没有去找州长，他会找到他们。`,mapGeometry:{imageRef:"adventure/HotDQ/006-tod-01-01.webp"}},{id:"scn_hotdq_060",locationId:"loc_hotdq_05f",name:"角色钩子",activation:{condition:{type:"always"},priority:0},skeleton:["为了将角色的背景故事与巨龙的僭政战役更加紧密地联系起来，请参阅附录A。"],flesh:"为了将角色的背景故事与巨龙的僭政战役更加紧密地联系起来，请参阅附录A。",spotlightRefs:[],presentNpcIds:["npc_frulam_mondath","npc_leosin_erlanthar","npc_linan_swift"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_061",locationId:"loc_hotdq_05f",name:"接近",activation:{condition:{type:"always"},priority:0},skeleton:["邪教徒企图收集他们希望在提亚马特到来时献给她的财宝。","邪教通过集结匪徒、狗头人、雇佣兵以及其他雇佣类型的人员组成了一支小型军队来进行这次袭击。","一个名叫Leosin Erlanthar的僧侣也在镇上。","通过他在贝尔达斯克和烛堡之间旅行期间进行的勤奋研究和访谈，Leosin确信邪教正在进行一项大规模行动，但他还不知道具体是什么。","Leosin利用这次袭击作为潜入邪教的机会，以便更多地了解邪教的计划。"],flesh:`邪教徒企图收集他们希望在提亚马特到来时献给她的财宝。邪教通过集结匪徒、狗头人、雇佣兵以及其他雇佣类型的人员组成了一支小型军队来进行这次袭击。一个名叫Leosin Erlanthar的僧侣也在镇上。通过他在贝尔达斯克和烛堡之间旅行期间进行的勤奋研究和访谈，Leosin确信邪教正在进行一项大规模行动，但他还不知道具体是什么。Leosin利用这次袭击作为潜入邪教的机会，以便更多地了解邪教的计划。然而，他被发现并被捕获了，需要角色们的帮助才能从囚禁中逃脱。

角色们可以在邪教徒和狗头人在绿野镇肆虐时参与几次遭遇战。

接下来的事件顺序由你和角色们决定。你可以按照任意顺序呈现尽可能多的遭遇。唯一的例外是"寻找城堡"，这应该是角色们进入格林斯特后的第一个遭遇。`,spotlightRefs:[],presentNpcIds:["npc_leosin_erlanthar","npc_frulam_mondath","npc_linan_swift"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"过去几天，你一直在一条蜿蜒穿过绿野草原的小路上旅行。日落时分，你爬上一个小山丘，看到不远处的Greenest小镇。但与你期望中那个宜人、热情的小镇不同，你看到的是从燃烧的建筑物中升起的黑色烟柱，远处只能看到奔跑的身影，还有一只黑暗的、带翅膀的身形在小镇中心的城堡上空低飞。Greenest正遭受一条龙的攻击！",dmGuidance:"当角色们接近绿野镇时，他们看到一条蓝龙及其龙之邪教的盟友正在攻击这个小镇。",offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_06c",locationId:"loc_hotdq_05f",name:"随机遭遇",activation:{condition:{type:"always"},priority:0},skeleton:["这些袭击者在镇上肆无忌惮地行动，一路掠夺。","使用这些指南来确定角色是否会发生遭遇战。","每有两个检定失败，角色在前往目的地的途中就会遭遇一次。","在第1章的遭遇表上掷一个 d8 来确定每次遭遇。","如果掷出的结果是4或更低，他们那次移动没有引起注意。"],flesh:`这些袭击者在镇上肆无忌惮地行动，一路掠夺。使用这些指南来确定角色是否会发生遭遇战。

每有两个检定失败，角色在前往目的地的途中就会遭遇一次。在第1章的遭遇表上掷一个 d8 来确定每次遭遇。

如果掷出的结果是4或更低，他们那次移动没有引起注意。如果掷出的结果是5或更高，他们就会遇到某些东西；再掷一个d8，并检查第一章遭遇表，看看角色们遇到了什么。

* 侍僧准备了en=Command而不是en=Sanctuary。

大多数邪教徒、守卫和侍僧都是人类。你可以包括一些矮人、半精灵、半兽人或半身人，而不需要改变任何游戏具体数值。

角色们在进入绿野镇时会随机遭遇袭击者，但这次应该是他们本章的第一个任务。它开始于一个惊恐的人类家庭（父亲、母亲和三个年幼的孩子）从他们的路上跑过，后面有七个狗头人紧追不舍。

这位女性是利南·斯威夫特，她的丈夫是卡斯。莉楠是一个平民，但有8点生命值。她用长矛攻击的命中加值为+2，造成1d6穿刺伤害。她的丈夫因之前的战斗只剩下2点生命值。孩子们以20尺速度移动。他们可以被携带，但携带孩子的角色在攻击检定上具有劣势且无法使用双手武器。

除非角色们干预，否则狗头人们会认为角色们是邪教徒并忽视他们。假设角色们介入并救出了这个家庭，莉娜解释说他们必须前往堡垒（在区域1）；这是格林斯特唯一安全的地方。袭击者们还没有在堡垒周围建立起有效的封锁线，所以仍然可以通过前门进入——但不会持续太久。

要到达城堡，角色们必须通过三组袭击者。每组由1d6个狗头人和1d4个邪教徒组成。如果这个组有六个狗头人，其中一个是翼狗头人（乌尔德）。

角色们可以与这些敌人战斗，悄悄溜过他们，撤退以完全避开他们，或者尝试一些聪明的手段，如虚张声势。如果他们选择战斗，就正常进行战斗。当敌人需要进行检定以注意到潜行或虚张声势时，为小组进行有利的检定。

每当角色们为了避开敌人而撤退时，他们会碰到 1d6 位试图到达城堡的镇民。每增加四位镇民跟随，队伍就需要额外通过一个敌人团队才能到达城堡。

在要塞，角色们是在大门关闭并上闩前的最后一批进入的人。角色们进入要塞后，袭击者开始越来越多地包围它。

除了在前往堡垒途中与袭击者战斗所获得的经验点（XP），角色们每带入堡垒一个存活的非玩家角色（NPC），还会获得额外的50 XP。将这个额外奖励平均分配给队伍成员。或者，如果您使用里程碑经验规则，角色们一旦到达堡垒就会达到2级。`,spotlightRefs:[],presentNpcIds:["npc_linan_swift","npc_frulam_mondath","npc_leosin_erlanthar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_06c_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[23],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"毫无预警地，五个人类从你们左侧的两座建筑物之间冲了出来。一个跛脚的男人和三个小孩跑过街道，躲进了更多的阴影中，而一个手持圆盾和断矛的女人转身面对着他们来时的方向。七个狗头人紧随这个家庭的脚步从巷子里涌出，围绕在女人的周围，她看起来决心尽可能长时间地拖延这些生物。",dmGuidance:`格林斯特的街道上充斥着由邪教徒和侍僧组成的部队，同时还有怪物的盟友：狗头人与伏击龙（参见附录D）以及巨蜥。
当角色们穿越这个被战火蹂躏的村庄时，他们可能会遇到袭击者和镇民。
如果角色利用掩蔽和潜行来避免遭遇，让每个角色尝试一次 DC 10 敏捷（隐匿）检定。
如果角色大部分行程都利用河床作为掩蔽，这些角色在敏捷检定上具有优势。
如果角色不使用掩体和潜行来避免遭遇，他们在城镇中每移动100尺就掷一个d8。
【被盗的宝藏】邪教徒和他们的狗头人爪牙正在洗劫格林斯特，并将战利品收集起来运回营（见第二章）。玩家遇到的任何掠夺小队有50的概率携带有被盗的财宝。掷一枚d6并将结果乘以10，以确定被盗物品的总价值，单位为金币（gp）。`,randomTableIds:["tbl_hotdq_06c_0"]},{id:"scn_hotdq_073",locationId:"loc_hotdq_05f",name:"任务",activation:{condition:{type:"always"},priority:0},skeleton:["绿野镇的事件被划分为任务。","任务不一定涉及战斗，但大多数任务确实包含战斗。","角色们在日落时分到达小镇，大约是晚上9点。","第二天早上6点太阳再次升起，但袭击者在凌晨4点前就已经全部离开。","为了计时目的，假设每项任务需要一个小时。"],flesh:`绿野镇的事件被划分为任务。任务不一定涉及战斗，但大多数任务确实包含战斗。

角色们在日落时分到达小镇，大约是晚上9点。第二天早上6点太阳再次升起，但袭击者在凌晨4点前就已经全部离开。

为了计时目的，假设每项任务需要一个小时。在这一小时内，除了战斗或悄悄穿过城镇外的时间，都用于整理装备、包扎轻伤、巡逻堡垒的墙壁、向奈特希尔简报情况以及其他日常任务。

袭击者用成群的守卫将城堡与小镇隔离开来，但他们还没有组织攻击。夜山认为袭击者不打算攻击城堡；他们似乎只对掠夺感兴趣。真正的危险在于小镇以及那些在城堡被切断前没有进入城堡的人们。夜山希望角色们潜回小镇帮助那些被切断的人或者骚扰袭击者。一个隐蔽的小组可以在不引起袭击者注意的情况下离开城堡并再次进入。

一条狭窄的隧道从堡垒下的地窖通往小溪边（区域2）。隧道的宽度足以让战士们单排通过。在堡垒内，隧道被一扇锁着的铁箍门封闭，而小溪的出口则被一个锁着的铁格栅覆盖，看起来像是一个下水道出口。隧道的主要功能是在围城期间秘密收集小溪中的水，但它也可以兼作用为出击口。由于堡垒从未被围攻过，这条旧隧道从未被使用过。门前面堆放着桶和箱子。锁的钥匙在埃斯科伯特随身携带的钥匙圈上。

在某个时候，埃斯科伯特推荐使用隧道作为将镇民偷偷带入城堡的方法，而不必冒险穿越守在大门外的攻击者。

角色们可以通过几分钟的工作清理地窖门。锁很紧，但用钥匙可以打开；如果没有钥匙，角色可以通过一次成功的 DC 10 敏捷检定和一套 盗贼工具 来打开锁。废弃的隧道被蜘蛛网堵塞，但除此之外是通畅的。在溪流尽头几码内有一个由两群 老鼠群 组成的巢穴。老鼠在受到干扰时会攻击，当它们的数量减少到一半时，幸存的老鼠会逃跑。

长年暴露和疏于保养已经锈蚀了出口栅格的锁。即使有钥匙，也需要通过一次成功的 DC 10 敏捷检定才能打开锁。如果没有钥匙，DC 增加到 20。如果检定失败且差值达到 5 或更多，钥匙或 盗贼工具 会在锁中断裂，使得解锁变得不可能。这时只有通过一次成功的 DC 15 力量检定才能强行打开栅格。

角色们可以保持在隧道中不被发现，或者在袭击者经过后尝试伏击。如果检定失败，袭击者就会发现角色；进行先攻骰并继续战斗。如果格栅必须通过力量检定破坏打开，袭击者会听到噪音并找到掩护；他们等待角色们离开隧道，然后获得一个突袭轮。袭击者小组由两名邪教徒和六名狗头人组成。如果在战斗的第四轮开始时还有邪教徒活着，其中一人会跑去寻求帮助。十分钟后，两名邪教徒、十名狗头人和一只伏击龙兽（见附录D）到达守卫隧道。

击败敌人后给予标准经验值。除此之外，这项任务的主要奖励是隧道本身。只要它保持秘密，角色就可以安全地进出要塞。每次他们使用隧道出口时，掷一个骰子d6。如果是1，袭击者看到并攻击角色。如果是2，他们被看到但未被攻击。相反，袭击者设置了一个伏击，并在角色下次返回隧道出口时攻击。

堡垒的西墙设有一个出击口，用于反击那些用破城槌攻击大门的敌人。埃斯科伯特发现了他们，并在潜入者之前冲进院子拉响警报。

有足够的防御者可以应对在堡垒中散布的袭击者带来的直接威胁，因为这更像是一次失控的侦察而非全面攻击。埃斯科伯特最担心的是重新封闭小门，他正在寻找角色们来完成这项工作。

为了确保突击口的安全，角色们必须通过两组敌人的战斗。第一场战斗是对抗三名侍僧、三名狗头人和一只伏击龙兽（见附录D），它们正在守卫突击口的10尺乘20尺的准备室，以防止这种类型的反击。角色们夺取房间后，他们发现门严重损坏。最快的修理方法是使用五次施放en=Mending（每次五分钟）。有人必须找到并把她带到准备室。

在门被修复之前，第二组袭击者由两名警卫、三名邪教徒和三名狗头人组成发动攻击。这些敌人可能来自要塞外部，或者可能是一群试图杀回外部的渗透者。

击败敌人后，给予标准的经验值（XP）。

成年蓝龙 Lennithon 参与了这次突袭，但并非积极参与者。它主要的贡献是其可怕的威慑力，但随着夜晚的深入，防守者逐渐克服了恐惧，这个效果也逐渐减弱。接近午夜时分，巨龙发动了对城堡的最后一次袭击。弗鲁兰·蒙达斯 下令发起攻击，她知道冒险者们此时正在要塞中。Lennithon 并不认为这是它的战斗，也不愿为了别人的利益与冒险者们纠缠。

在这次攻击中，Lennithon飞过城堡，使用他的吐息武器，而没有靠近城墙25尺以内。墙上的防御者已经从之前的攻击中克服了对龙的骇人威仪感的恐惧。任务开始时，墙上有二十名NPC防御者，更多的防御者可以在攻击之间到达，以取代那些倒下的人。龙最初并不针对冒险者，每一次没有针对他们的呼吸攻击都会杀死1d4名NPC防御者，并使1d6名更多防御者受伤。偶然被卷入该区域的冒险者进行正常的豁免检定，并承受标准伤害。NPC的攻击对Lennithon无效。请记住，龙的吐息武器会直接杀死1级角色，所以在将龙转向队伍之前，一定要向玩家展示其破坏力。

每次攻击后，Lennithon飞走直到他的吐息武器重新充能，然后再次进入进行攻击。他重复这个模式，直到他受到24点或更多的伤害，或者遭受一次重击。之后，Lennithon将永远离开。

角色们因为赶走了Lennithon，每人获得50 XP，但如果在攻击中有10名或更多的防御者被杀，将这个奖励减少到25 XP。由于他们在赶走龙的过程中的作用，角色们从感激的Nighthill州长那里收到了四瓶治疗药水。

夜山总督希望审问一些袭击者。

这是每个人瞥见弗鲁兰·蒙达斯（见附录D）穿着紫色长袍，由一打守卫陪同的理想时机。即使是州长也警告角色们不要攻击如此强大的力量，特别是当任何低级别的官员都能回答他的问题时。

通过正门离开堡垒是不可能的——太多袭击者在监视，一旦角色们离开堡垒，他们就会被袭击。其他选择包括等待云层遮住月亮，然后沿着扔在堡垒后墙的绳子爬下来，或者使用那条通往溪流床的旧隧道。

这个任务可以与另一个任务结合进行，比如拯救磨坊或从裳缇亚亚神庙（区域3）救出村民。所有角色需要做的是将一个活的邪教徒或龙之教团的入门者带回城堡。或者角色们可以进入小镇特别寻找一个。

被带回堡垒的囚犯将由Nighthill州长和他的一些挑选出来的守卫进行审讯。

被俘虏的狗头人非常害怕；他们会说出他们认为审问者想听的话。他们知道自己是在为龙之教团和"龙女士"（瑞兹米尔）工作，并且他们在寻找战利品。

被捕获的雇佣兵或匪徒很乐意交谈；他们对龙之邪教没有特别的忠诚。他们透露，他们一直在袭击格林菲尔德周围的社区以抢夺财物，并且他们在营地里听到了有关龙蛋的传言。

邪教徒和新入教者最为缄默。需要成功的 DC 10 魅力（威吓）或 DC 12 魅力（游说）检定才能使邪教徒透露他们是龙之教团的成员，并且他们正在收集战利品"为了那将迎来龙女王统治的伟大宝藏"。他们知道教团在营地的一个山洞里严密守护着一窝龙蛋。

要获得这个奖励，囚犯必须被带到总督那里。独立审问囚犯并将信息带给总督是不算数的。此外，角色们还会因为他们在路上击败的任何怪物而获得标准的经验值。

从城堡的城垛上，有人发现一群袭击者试图放火烧镇上的磨坊（区域4）。州长奈特希尔迅速接近冒险者。

磨坊距离城堡大约500尺。

掷一个d6在第1章 遭遇表格上，以确定试图烧毁磨坊的劫匪的强度。如果这支队伍中有任何狗头人，一旦两名或更多劫匪被杀死，它们就会逃跑。如果成功，一个角色会意识到劫匪正在演示放火，但这只是作秀。建筑物周围有几处火苗，但它们可以轻易被扑灭。

焚烧磨坊这一行为其实是一个诡计。蒙达斯得知有英雄正在帮助这个小镇，她想要诱使他们进入埋伏。更多的袭击者——每个角色一个邪教徒和一个警卫——正藏在磨坊里，等待角色们出现。

磨坊是一个简单的长方形谷仓，长约40尺，宽约20尺，带有一个附属的外部办公室。建筑物远离小溪的长边有谷仓门和一个双扇门，两侧短墙上有窗户。所有这些开口都是关闭的，但都没有上锁或闩上。内部，主层由一个巨大的石头磨盘占据，由溪流中的水轮驱动。磨坊在袭击开始时还在运营，磨坊主在逃离时没有脱开磨盘，所以它仍在嘈杂地转动。谷仓的上半部分是一个阁楼，存放着磨好的面粉。阁楼可以通过沿着东墙的木楼梯到达，或者使用通过阁楼地板上的大开口上下吊运面粉袋的绳索和滑轮。

伏击者正在阁楼中等待英雄们进入磨坊。当英雄们进入后，守卫们从上方投掷一轮长矛，然后跳下来进行近身战斗。伏击者有很大机会获得一个突袭轮用于投掷长矛；需要在攻击前进行一次成功的 DC 20 感知（察觉）检定才能发现他们。在进入磨坊时扫描阁楼寻找隐藏敌人的角色在检定中具有优势。

第二次战斗结束后十分钟，一打虽然受伤但基本健康的防御者从堡垒赶来，奉命来替换角色们并保卫磨坊。他们告诉角色们悄悄地回到堡垒，而他们则留在磨坊。

对于击败的敌人给予标准经验值。如果他们没有推断出这是一个陷阱，但及时发现了伏击者，避免了突袭回合，给每个角色25经验值的奖励。

数十名镇民将自己封锁在裳缇亚神庙（区域3）内，神庙被袭击者包围。袭击者试图放火烧毁这座坚固的建筑，但几乎没有成功。现在他们部署了一个临时的破城槌。神庙的主门在攻击下倒塌只是时间问题，可能是几分钟之内，届时里面的人将无依无靠。

神庙是一座大型建筑，由田地石建造，有一个尖顶的石板屋顶，呈方形。它比镇上的大多数其他建筑都要高。内部，祭坛位于神庙的中心，其他礼拜区域围绕其布置。

神庙外的部队分成三组。一组（A）正在撞击前门，另一组（B）正围绕着神庙尖叫成群，第三组（C）正在后门堆放燃烧的稻草。所有这些组合起来可能会压倒1级角色，但角色们可以制定一个计划，通过应对其中一组来让他们进入神庙内部。

A组由一名龙爪（见附录D）、两名邪教徒和六名狗头人组成。邪教徒正在操作攻城槌，而狗头人则警戒着，以防城镇民兵发动反击。龙爪负责指挥。狗头人守卫们保持警惕，但当B组经过神庙前方时，他们分心了。

B组由三名邪教徒，十名狗头人，以及两只伏击龙（见附录D）组成，它们排成一队，队伍延伸50尺。这个伴随着跳跃和旋转的狗头人的队伍大约每八分钟绕着神庙转一圈（每边两分钟）。

C组由四名邪教徒和四名狗头人组成，他们紧密聚集在庙宇的后门周围。他们微弱的火堆产生的火焰很少，反而产生了大量的浓烟，吞没了庙宇的后部，并像毯子一样覆盖了周围30尺的地面。烟雾中的一切都被2，而透过超过15尺烟雾看到的物件或生物则被2。角色们可以潜行接近这些袭击者并获得一轮针对它们的突袭，只要他们在此过程中避开B组。

英雄们拯救镇民的最佳机会是压倒C组并控制后门。在神庙内，他们可以安排一个干扰，以保持A组和B组在前门的注意力，同时绿野镇的居民从后门溜出，奔向堡垒或旧隧道——如果角色们已经打开了隧道的话。这只是一种可能性；聪明的玩家可以想出不同的解决方案。

寺庙里的镇民们近乎恐慌，他们不会听从陌生人的命令，除非有人成功通过 DC 15 魅力（游说）检定。否则，角色们需要找到裳缇亚的祭司——冷静的半精灵伊迪安·鹰月。他很容易辨认，因为他是寺庙中唯一冷静的人，而且看到他们时非常高兴。他期待着角色们提出计划。

时间紧迫。你允许多少时间前门才会被撞开取决于你的团队。重要的是让玩家感到紧迫。为了营造紧迫感，给前门设定30点生命值，并让攻城锤的每一次撞击造成1d6点钝击伤害。当门的生命值降至20点时，裂缝足够大，可以透过它们看到外面。在10点生命值时，门在铰链处下垂。在5点生命值时，门可能在下一次撞击时就会倒塌。你滚动骰子的频率取决于你！每15-20秒滚动一次骰子是大多数团队的合适目标。保持灵活，判断玩家的紧张程度，不要让任何人放松。

如果神庙疏散之前大门被撞开，这个场景就会变成与A组的一场混乱的近战。那组中的狗头人更倾向于攻击手无寸铁的村民而不是致命的冒险者。除非角色们攻击狗头人，切断他们与受害者的联系，或者以其他方式干预，否则每个狗头人每轮都会自动杀死一个村民。如果镇上的居民已经通过后门疏散了神庙，或者在破门而入之前疏散过程已经进展得相当顺利，那么角色们可以通过神庙进行有战斗的撤退。一旦所有人都进入外面的烟雾，他们可以关闭并加固后门，然后向堡垒或溪流岸边的隧道冲刺，有足够的领先优势安全逃脱。

从神庙中救出人质，每个角色除了击败怪物所获得的点数外，还将获得100 XP。如果在救援过程中有超过十名村民死亡，将该奖励减少到50 XP。

在所有袭击者离开之前，他们的冠军向小镇上最好的战士发起挑战。

蓝鳞兰迪卓莎拥有一支由十六只狗头人组成的私人部队。若角色成功通过DC 15智力（奥秘）或智力（自然）检定，可从描述中认出该生物为半龙。

城堡中的一名守卫，Markguth中士，认出囚犯是他妹妹和她的孩子，他准备冲出去与半龙战斗。红Escobert和其他几个守卫阻止了他，而Nighthill走向角色们。

如果没有人站出来，Nighthill会感到失望，但他说他理解，并且他们的拒绝不会减少他们到目前为止所做的一切。在这种情况下，那位女士的兄弟出去面对半龙。他是一个人类警卫。选择一个玩家来控制Markguth中士进行这场战斗，或者仅仅叙述其结果。

塞恩沃拉斯对于有勇士站出来感到高兴。他同意这些战斗条件：三名儿童将立即被释放，但他的狗头人将继续看守那名女性，如果有人干扰战斗——例如，如果要塞中的弓箭手向他射击，他们会杀了她。无论谁赢，战斗结束后这名女性都将被释放；胜者将是最后站立的人。

州长奈特希尔在战斗期间将他的部队留在城堡内。冒险者们如果愿意，可以出去，但这位半龙坚持要他们保持距离，并待在他和堡垒之间。这位半龙是邪恶的，但他对一对一战斗有着深厚的荣誉感。他不打算耍任何花招，也不允许他的狗头人们这么做。

无论是与马克格斯中士战斗还是与角色战斗，塞安沃拉斯很可能是这场对决的赢家。当他的对手倒下时，他会再攻击一次；最后一击要么杀死马克格斯，要么给角色带来一次死亡判定失败。如果塞安沃拉斯输掉了战斗，狗头人会立即跳入保护他的身体并将其带走。（塞安沃拉斯将从他的伤口中恢复，并在后续再次遇到。）如果塞安沃拉斯由于某种不幸被杀或被捕获，他在龙孵化场（第三章）的位置将由另一个半龙取代。

战斗结束后，最后的袭击者集体从小镇撤退进入黑暗中，向东南方向行进。

如果一个角色挺身而出接受挑战并与塞安沃拉斯战斗，每个队伍成员将获得50经验值（XP）。如果没有，角色们在这次遭遇中将一无所获。一队带有治疗工具包并且在感知（医药）检定上获得+4加值的医疗人员会照顾受伤或垂死的角色，奈特希尔总督感激地向受伤的角色提供两瓶治疗药水。

假设当角色们第一次看到格林斯特的战斗时，他们会立即冲上前去保卫。如果他们没有，而且他们还和其他旅行者在一起，那么他们同行的NPC会建议立即发动攻击可能会扭转局势或至少拯救许多生命。当太阳升起时，即使是快速检查也显示出一半以上的建筑物遭到严重破坏，镇上的大部分财富被带走了。成百上千的受伤人员挤在要塞里，或者被发现藏在地窖中，但他们中的大多数人会存活下来。`,spotlightRefs:[],presentNpcIds:["npc_frulam_mondath","npc_rezmir","npc_langdedrosa_cyanwrath","npc_leosin_erlanthar","npc_linan_swift"],availableInfoIds:[],encounterIds:["enc_tod_greenest_tunnel_rats","enc_tod_greenest_tunnel_patrol","enc_tod_greenest_sally_port","enc_tod_greenest_sanctuary","enc_tod_greenest_cyanwrath_duel"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`"我愿意付出任何代价来知道我们面对的是什么，以及为什么。为此，我们需要俘虏。一个指挥官，哪怕是低级别的，是最好的。"

"卫兵发现了一个新的威胁。袭击者正试图放火烧掉镇上的磨坊。如果它被烧毁，我们将失去我们的面粉储备，而且几个月内都无法再磨制更多。我正试图从要塞这里集结足够的防御者来保护它度过余下的夜晚，但这需要时间。如果你们能快速赶到磨坊并赶走袭击者，阻止他们放火，那将对我们是极大的帮助。你们需要守住它，直到我们的部队到达接管，但应该不会超过你们十五分钟。"

一个生物从黑暗中大步走出，踏入堡垒周围垂死火堆的2中。虽然它大体上拥有人类的形态，但身高至少有七尺，皮肤覆盖着蓝色鳞片，手指长着恶意的爪子，脸上有着龙的口套和爬行动物的眼睛。这个生物在距离堡垒主门约八十码处停下，扫视着城墙。一队狗头人在它身后扇形散开。他们用长矛驱赶着四名人类囚犯进入2。你可以辨认出一名妇女、一名穿着染血外衣的少年和两名儿童。然后这个半龙生物向堡垒喊话。
"绿野镇的守卫们！今晚我们大获成功，我心情很好，愿意慷慨一些。你们看到这四个可怜又无用的囚犯了吗？我们不需要他们，所以我将他们还给你们。派出你们最好的战士来与我战斗，你们就可以用这四个人来交换。"

"我的朋友们，在这可怕的一夜中，你们展示了自己的勇猛。我意识到这对我来说是一个沉重的负担，但你们中的任何一个击败那个怪物的机会都比我的民兵要大。"`,dmGuidance:`如果角色们进行短休，他们就无法在那一小时内承担任何其他任务。
如果玩家需要指导，夜山总督可以向角色们快速介绍战术情况。
当角色们从隧道中出现时，一群邪教徒正在沿着溪流的岸边搜寻藏匿的镇民。
如果角色们使用钥匙或盗贼工具成功开锁，第一个出来的人会注意到袭击者接近，而不会被对方发现；
在角色们在堡垒内过夜时，袭击者接近旧门，强行打开它，并冲了进来。
如果角色中没有人能做到这一点，城堡中的一个NPC知道这个戏法。
如果角色们在等待修理时用桶或其他重物堵住门，他们可能可以抵挡住攻击者，从而完全避免这场战斗。
如果角色们还没有遇到过任何邪教领袖，奈特希尔会带他们走上城垛，指出他所指的意思。
如果角色们愿意，他们也可以参与。
如果角色们捕获了一个囚犯，每个角色奖励25点经验值（XP）。
如果角色们使用秘密隧道并沿着溪流保持隐蔽，这个距离会增加一倍。
如果角色在攻击前观察磨坊一分钟或更长时间，允许他们尝试DC 15 Wisdom (洞悉)或Charisma (表演)检定。
如果角色意识到他们正步入一个陷阱，给每个人50经验值的奖励。
当角色们在寺庙内时，提醒他们攻城锤对前门的猛烈撞击声和惊恐的镇民。
发言者是兰德卓萨·青怒（统计数据见附录D），他是一只半蓝龙，为龙巫教效力。
如果角色们试图包围他或悄悄进入埋伏的位置，他会警告他们，如果看到背叛的迹象，他的狗头人们不会犹豫杀害人质。
如果角色们的所作所为导致人质丧生，奈特希尔总督会对他们大发雷霆，并不再提供任何帮助。
如果角色们仍然不参与这场战斗，他们会看到大约一半的攻击者在午夜左右离开，其余的在接下来的几个小时内分成小组撤退。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_08b",locationId:"loc_hotdq_08b",name:"强盗营地",activation:{condition:{type:"always"},priority:0},skeleton:["在白天温暖的阳光下，夜山总督和其他领导人想要知道谁是对Greenest袭击的幕后黑手，以及为什么这个小镇成为了目标。","袭击者向东南方向撤退，他们的踪迹很容易发现。","一个小型的、隐蔽的小组可以沿着踪迹追踪到袭击者的营地并收集信息。","Nighthill州长向角色们提出了一个建议：如果他们能找到袭击者的营地并查明某些信息，他愿意每人支付250金币。","他想知道营地的位置、那里有多少袭击者、他们的领袖是谁、是什么动机驱使这些袭击，以及他们下一步计划攻击哪里。"],flesh:`在白天温暖的阳光下，夜山总督和其他领导人想要知道谁是对Greenest袭击的幕后黑手，以及为什么这个小镇成为了目标。袭击者向东南方向撤退，他们的踪迹很容易发现。一个小型的、隐蔽的小组可以沿着踪迹追踪到袭击者的营地并收集信息。

Nighthill州长向角色们提出了一个建议：如果他们能找到袭击者的营地并查明某些信息，他愿意每人支付250金币。他想知道营地的位置、那里有多少袭击者、他们的领袖是谁、是什么动机驱使这些袭击，以及他们下一步计划攻击哪里。然而，与他提出的其他目标相比，追回宝藏是一个较小的目标。

角色们旅行所需的任何装备或物资都由城镇提供。然而，当角色们准备出发执行这项任务（或者如果他们拒绝任务离开城镇），一位受伤的僧侣接近了他们。

这位僧侣的名字叫内西姆·瓦拉德拉。介绍结束后，他继续说道。

Nesim尽其所能回答角色们的问题，但他也敦促他们要行动迅速。这些僧侣们正从烛堡的大图书馆返回Berdusk，在那里Leosin正在咨询图书管理员并研究有关龙的民间传说的古老文献。龙的邪教是他特别感兴趣的领域。

破碎的法杖没有什么特别的。这个颈圈是一个编织的皮革颈带，上面有一个银龙的设计嵌入皮革中。末端参差不齐，好像它是被粗暴地撕下来的。

为击败的敌人授予标准经验值。这一章节不涉及很多战斗，但它确实提出了许多挑战，角色们应该因克服它们而得到奖励。下面列出的奖项只是建议；根据你认为合适的情况进行调整和增加。

如果您正在使用里程碑经验规则，角色们在完成这一章节时将达到3级。

对于不引起警报或被抓住而进入和离开邪教徒营地的：每个角色100经验值。

为了不引起任何怀疑地进入和离开邪教徒的营地：每个角色额外获得100 XP。

救援利奥辛：每个角色250经验值。

对于在Leosin的位置留下一个假人或诱饵：每个角色额外获得50点经验值（XP）。

对于解救其他囚犯：每救出一个活着离开营地的囚犯，获得25 XP。

对于角色们在"探索营地"中自行发现（而不是从Leosin那里得知）的每条信息：每个角色25 XP。

陪伴他的僧侣们看到他活着非常高兴，任何其他被释放的囚犯的家人也对他们亲人的归来同样感激。Nighthill州长向角色们支付了他们承诺的每人250金币，并公开赞扬他们的勇气和胆量。`,spotlightRefs:[],presentNpcIds:["npc_leosin_erlanthar","npc_langdedrosa_cyanwrath","npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`一个年轻人一瘸一拐地向你走来，他左腿缠着绷带，步履蹒跚。"我听说你们打算追踪袭击者，看看他们去了哪里。我非常希望能和你们一起去，但在这种状态下，我会拖慢你们的速度。在所有这些悲剧中，你们没有理由听说我的主人Leosin Erlanthar的命运，但你们有必要知道。他是来自Berdusk的一个僧侣。昨晚，在与袭击者进行了一场特别残酷的战斗之后，他就消失了。我和其他人勉强杀出了一条血路到了城堡。Leosin根本没能到达。我们今天早上回去找他，但我们找到的只有他折断的手杖和他总是佩戴的这个颈圈。"

"利奥辛已经调查这些袭击者好几个月了。我担心他可能在他们撤退时试图潜入他们的组织，或者更糟糕的是，被俘并作为囚犯被带走了。没有人比他更了解这些匪徒，他的了解对我们来说是无价的。当你们找到他们的营地时，请寻找任何利奥辛在那里的迹象。我的一个兄弟已经前往伯达斯克求援，但援军到来还需要很多天。在那之前你们能做的任何事情都将是天赐之福。"`,dmGuidance:`如果角色们能追回从小镇被盗走的贵重物品，他希望它们能被归还，但他会尽力从小镇剩余的国库中安排奖励。
如果角色们谨慎行事并利用营地提供的所有机会，他们可以达到3级，但这并不是必要的。
当角色们安全地回到Greenest——很可能带着Leosin——他可以向他们补充他们在调查邪教营地期间错过的任何细节。`,mapGeometry:{imageRef:"adventure/HotDQ/010-tod-02-01.webp"}},{id:"scn_hotdq_08e",locationId:"loc_hotdq_08b",name:"追踪袭击者",activation:{condition:{type:"always"},priority:0},skeleton:["在绿野起伏的草原上，袭击者的路径很容易追踪。","一大片草地被踩踏，但无法准确确定袭击者的数量。","这条路径只确认了角色们已经知道的事情：他们人数众多，而且是由人类、狗头人和训练有素的爬行动物组成的混合队伍。","他们在归途中携带了战利品，但让玩家自己得出这个结论。","从混乱的脚印中无法判断是否有任何特定的脚印是囚犯的。"],flesh:`在绿野起伏的草原上，袭击者的路径很容易追踪。一大片草地被踩踏，但无法准确确定袭击者的数量。这条路径只确认了角色们已经知道的事情：他们人数众多，而且是由人类、狗头人和训练有素的爬行动物组成的混合队伍。通过一次成功的DC 15 感知（察觉）检定，可以得出一个信息：许多野兽的脚印在撤退时比前进时更深。他们在归途中携带了战利品，但让玩家自己得出这个结论。从混乱的脚印中无法判断是否有任何特定的脚印是囚犯的。

小径向南延伸大约十二英里，进入一个更加崎岖的地区，那里陡峭的岩石高原取代了平缓的丘陵。高原之间的土地大部分是平坦的，只有突出的岩石和在陡峭的沟壑中蜿蜒的溪流打破了这片平坦。高原从周围地面上突兀地升起五十到一百尺，除了岩石崩塌和沉降造成的天然坡道外，很难攀爬。高原破碎的边缘上散布着洞穴和滚落的巨石区。

在这次旅行中，角色们可以遇到两组敌人。第一组是落后于主力的一群袭击者。他们组织松散且好争吵，对于警觉的冒险者来说应该是容易对付的猎物。第二组是一支有组织的后卫部队，他们专门监视来自小镇的追踪者。他们构成了一个更为严重的威胁。

角色们从几英里外就看到了这群人的烹饪火烟，因为这些落后者停下来烤了一些草原野鸡作为食物。他们寻找了一个周围小山之间的低洼处避难，那里有高大的巨石滚落成一堆松散的石头堆。实际上，周围的环境并没有提供保护，反而使敌人更容易潜入该地点。

通过观察几分钟，角色们可以辨别出队伍中有四位人类邪教徒和八位狗头人。狗头人和人类彼此不信任，尽管邪教徒表现得像是他们的首领，但他们的领导不过是无效的欺凌。人类的武器被堆放在一块岩石旁，不易取用。狗头人的武器则挂在腰带上。

如果这个小组被留在一旁，狗头人们会拿走他们那份半熟的午餐，然后移动大约五十码远去吃东西，而人类则继续争吵如何烹饪一只母鸡以及狗头人作为盟友的无用之处。

在返回绿野镇的路上，他们可能会再次遇到这些落后者。

人类在他们的第一回合拿取武器和盾牌。狗头人们丢下食物四散逃开，然后在第四回合重新集结并反击，尽可能多地使用他们的投石索。他们只有在他们的人类盟友还在战斗的情况下才会留下来战斗。一旦所有的人类都被击败，剩下的狗头人就会悄悄地溜进山里，不再出现。

为击败的敌人，包括逃跑的狗头人，发放标准经验值。如果有任何邪教徒被审问，除非有人成功通过DC 15魅力（威吓）检定，否则他们拒绝开口。他们知道袭击队伍通常会留下一支后卫部队。他们不知道后卫部队的实力如何，但他们预计后卫部队会驻扎在道路穿过岩石峭壁之间约一英里的地方。他们还可以描述袭击者的营地及其位置，并且知道一些囚犯从城镇被带走，但不知道具体有多少人，也不知道是否包括一名半精灵武僧。他们知道袭击的目的是为了掠夺，因为他们被特别指示寻找黄金、宝石和其他贵重物品，并且被禁止为自己进行任何掠夺。邪教徒知道他们正在准备"献给龙后的伟大财宝"。

被捕获的狗头人会毫无顾忌地说话，但他们说的大部分内容都是谎言。这并不是因为他们试图误导敌人，而是因为如果任何话，无论多么离奇，可能会让他们获得自由，他们就会说出来。

邪教徒们除了他们的廉价武器外，共有28个银币。狗头人们不顾命令进行了抢劫，他们有一只袋子，里面装着一些锡制烛台、一些银制餐具，以及从家庭神龛中拿走的一些裳缇亚的宗教雕刻品。

实际上，这样做是明智的，因为这不仅避免了一场可能造成损害的战斗，而且如果后卫被消灭了，邪教的领袖会想知道为什么它从未回报。对于角色们来说，最好的结果是前哨站在正确的时间回报"一切正常"。

后卫由一名老兵（老兵）、六名邪教徒和两名侍僧组成。守卫和邪教徒配备了长矛，既可远战也可近战。他们被部署在一个道路蜿蜒穿过两个岩石突出部分之间的区域。伏击者隐藏在岩石中，距离地面12到15尺。角色们可能会发现伏击，发现的几率取决于他们的了解程度以及他们如何接近该区域。

如果逃兵向角色们描述了可能的伏击地点，成功通过一个 DC 10 感知 (察觉) 检定，就可以从200码外认出该地点。

如果散兵提到了后卫但没有描述具体地点，那么在成功通过 DC 15 感知（察觉）检定时，该地点被认为是一个从 100 码外进行伏击的好位置。

后卫有双重任务。它必须阻止任何小队侵入者沿着小径上来，或者在向营地发送消息表示麻烦即将到来的同时骚扰和拖延更大的群体。老兵判断他有足够的优势对抗五或六名冒险者的队伍，可以当场解决问题，前提是他不会通过派遣信使去找弗鲁兰·蒙达斯而削弱自己的力量。如果冒险小组包含七名或更多的角色，你可以让老兵骚扰敌人并派遣一个信使去营地，或者你可以增加邪教徒的数量，直到他们以两到三个的数量超过角色们，然后让邪教徒们进行抵抗。

每个角色必须成功通过一个 DC 11 的敏捷豁免检定，否则会受到坠落的岩石造成的 2d12 钝击伤害（成功通过豁免则只受一半伤害）。巨石攻击构成邪教徒的突袭轮。之后，他们会使用远程攻击，直到弹药耗尽或被英雄们逼入近战。由于他们位于角色上方的岩石中，邪教徒对来自下方的攻击具有 3（AC获得+5加值）。要接近敌人，角色们必须攀爬岩石。距离只有10到15英尺，不需要进行能力检定，但岩石是 3。

这些袭击者与之前的散兵游勇截然不同。所有人都穿着相似的（但不完全相同）黑色皮革束腰外衣，衣摆向外展开，披着黑色的斗篷。这些是虔诚的邪教徒。如果被捕获，除非成功通过一次 DC 20 魅力（威吓）检定，否则无法从他们口中撬出任何信息。即便如此，他们所透露的也只是他们是龙巫教的见习成员，以及他们领导者的名字（瑞兹米尔、弗鲁兰·蒙达斯 和 兰德卓萨·青怒），以及对绿石镇的袭击是为了为龙收集宝藏。瑞兹米尔 的等级高于其他领导者。

击败敌人可以获得标准的经验值（XP）。邪教徒没有财宝，但他们的龙之教团服装和武器在角色们尝试进入袭击者营地时可能非常有价值。`,spotlightRefs:[],presentNpcIds:["npc_frulam_mondath","npc_rezmir","npc_langdedrosa_cyanwrath"],availableInfoIds:[],encounterIds:["enc_hotdq_08e"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[30],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`【龙之教团等级】龙之邪教有一个活跃的招募流程，接受从年轻时期开始的新手。一个新手（使用邪教徒的统计数据块）需要训练数月或数年才能在组织内获得任何等级，而且许多受训者无法通过测试存活下来。通过测试的新手必须选择对特定颜色龙的亲和性：黑色、蓝色、绿色、红色或白色。之后，他或她作为龙爪被欢迎进入行列。
邪教的高级阶层，按等级递增顺序，分别是龙爪、龙翼、龙牙、龙魂和龙语者。龙语者只有五位，每种色彩龙各一位。目前的龙语者分别是塞弗林（红），加尔文（蓝），内伦瓦因（绿），瑞兹米尔（黑），和瓦拉姆（白）。
教团的大部分运作由被称为紫衣人的当地领导者监督，他们之所以被称为紫衣人，是因为他们都穿着仪式性的长袍。所有的龙语者都是紫衣人，同样由龙语者任命的低级邪教徒也是，他们负责主持邪教的据点。
如果角色们选择绕过这组人，他们可以毫不费力地绕道而行。
如果角色们发起攻击，那么除非他们故意暴露自己的行踪（例如，通过向营地喊话），否则他们会获得一个突袭回合。
如果角色们从落后者那里了解到营地的位置和后卫可能的地点，他们可以利用这些信息完全绕过这次遭遇。
如果角色没有被提醒注意后卫，当角色进入20码范围内时，某人可以通过一次成功的DC 20感知（察觉）检定发现一张从上方向下窥视的脸。
如果玩家表示他们正在寻找可能的伏击地点，当进行这些检定时给予他们优势。
如果角色走入陷阱，邪教徒会将巨石滚向他们。`,mapGeometry:{imageRef:"adventure/HotDQ/011-tod-02-02.webp"}},{id:"scn_hotdq_095",locationId:"loc_hotdq_08b",name:"营地",activation:{condition:{type:"always"},priority:0},skeleton:["邪教徒在一个大致呈马蹄形的岩石高原的凹陷处设立了营地。","高原的下部从周围地面缓缓升起，但很快变得陡峭，上升到比景观高出150尺的高度。","巨石在悬崖底部形成了杂乱的堆垛。","高原的平坦层和顶部覆盖着长草，灌木和低矮的树木成片生长。","这些巨石是3，并提供3。"],flesh:`邪教徒在一个大致呈马蹄形的岩石高原的凹陷处设立了营地。高原的下部从周围地面缓缓升起，但很快变得陡峭，上升到比景观高出150尺的高度。巨石在悬崖底部形成了杂乱的堆垛。高原的平坦层和顶部覆盖着长草，灌木和低矮的树木成片生长。

这些巨石是3，并提供3。

该地点周围的灌木丛生长高度为4到6英尺。它坚韧而密集，使其成为3，并为藏身其中的靶标提供3。

高原陡峭的侧面点缀着浅洞穴。巨石或灌木丛恰好隐藏了许多洞穴入口。需要进行长休的角色可以很容易地找到一个安全的洞穴来隐藏。

邪教徒在营地建造了两座哨塔，一座位于山谷的入口，另一座位于高地上。这些塔高20尺，由粗糙的木梁用绳索捆绑在一起制成。它们足够大，可以容纳几个瞭望员。山谷入口处的塔由狗头人守卫，而上面的塔由战士守卫。当需要发出警报时，守卫们有号角可以吹响。

邪教徒的囚犯被关押在区域1。目前，营地中只有八名囚犯，不包括莱奥辛。白天，他们在四名龙爪的监视下工作（见附录D）。晚上，他们被锁在小屋的柱子上以防止逃跑。锁链由一个简单的链条和锁固定，钥匙由其中一名守卫携带，或者使用盗贼工具并通过一次DC 10的敏捷检定可以打开锁链。链条可以通过一次DC 20的力量检定来打破。五名囚犯来自绿林镇，另外三名来自早期对南部和东部小型农庄的袭击。曾经有更多囚犯，但许多人因过度劳累和虐待而死亡。如果出现需要释放囚犯并让他们战斗的情况，请使用平民的属性。

高原的两侧陡峭上升，而凹陷处的地面则逐渐向东倾斜上升。一条长长的梯子被绑在悬崖上，以便守卫们能够到达上面的瞭望塔。

悬崖上有可供攀爬的手抓点和脚蹬点，因此在正常情况下无需掷骰子。

袭击者居住在由紧密排列的木杆或骨杆制成的圆形小屋中，这些小屋覆盖着兽皮、泥土和草皮。小屋的直径从10尺到25尺不等，高度从5尺到10尺不等。（地图上的符号代表帐篷群。）位于山谷口（地图上的1级）的小屋建造粗糙，装饰着动物头骨。这些小屋被狗头人占据。邪教徒占据了2级上的小屋，这些小屋更为坚固、干净，并装饰有代表龙的彩绘图案。2级上的一些帐篷被留作关押囚犯之用。

区域2的大帐篷通过一个开放空间与其他帐篷隔开。它为瑞兹米尔、弗鲁兰·蒙达斯、兰德卓萨·青怒和阿兹巴拉·乔斯预留。一支由四名老兵和四名守卫龙兽（见附录D）组成的荣誉卫队昼夜守卫在这个帐篷周围。他们不会在岗位上睡觉，不会上当，也不会听故事或请求。他们的工作是让每个人远离帐篷，他们对此非常狂热。只有那些老兵认识面貌和声音的侍僧和专家才被允许接近。

在袭击后的第一天，邪教徒们对结果感到兴奋，同时也感到筋疲力尽。瑞兹米尔并不期望来自小镇的严重挑战，袭击队伍中的行动较慢的成员和行走中的伤员在袭击后的整日陆续进入营地。营地的情况混乱，安全措施松懈。这些袭击者大部分是雇佣兵和匪徒，即使是虔诚的邪教徒在袭击中也不穿可识别的制服。没有人对迟到者进行密码或安全信号的挑战。简而言之，袭击者们相信没有敌人跟随他们这么远。角色们可以径直走进营地，而他们的身份不会被严肃质疑。事实上，他们越大胆，他们就越有可能融入其中。

玩家们可能会想要让角色在白天寻找掩护并进行观察，直到夜幕降临才尝试进入营地。这也是可行的，但在黑暗中潜行更容易引起怀疑，相比之下，像是他们属于营地一样直接走进去可能更为简单。

主要风险是有人可能会认出这些角色在绿林镇战斗中的表现。让每个角色进行一次DC 5的魅力检定。成功意味着没有人记得角色的面容，但失败意味着在某个时刻（不一定是立即，但会是在认出来最具戏剧性的时候），营地中的某人认出了角色。然而，曾与赛安瓦尔斯一对一战斗的角色在这次检定中会有-4的惩罚。如果那个角色再次与半龙面对面，认出来是自动的。

随着时间流逝，喧闹逐渐平息，营地变得更加平静和有组织。守卫们恢复了正常的日常巡逻。他们需要一个好故事，并且成功通过一次 DC 10 魅力（欺瞒）检定，才能通过由五名 警卫 把守的岗哨。这个检定为整个团队只进行一次；如果失败，他们无法通过进一步交涉来挽回。一旦初始的进入机会错过，角色们需要依靠潜行或诡计才能进入。例如，从东侧攀爬高原的角色可以利用灌木作为掩护，直达悬崖俯瞰营地的地方。在那里，他们可以在夜色的掩护下观察或从岩石攀爬下去。

如果被谋杀的人类哨兵或邪教徒的尸体被发现，整个营地都会进入警戒状态。一只死去的狗头人不会引起太大的警报，但许多死去的狗头人会。如果营地进入警戒状态，每个角色都必须进行一次DC 15的魅力检定。失败意味着角色被发现为陌生人和渗透者。有人发出警报，迅速引来一群人。掷出10或更低意味着有人从绿晶镇的战斗中认出了角色。

如果被抓住，角色们会被解除武装，双手被捆绑，并被带到弗鲁兰·蒙达斯面前接受审判。她一个接一个地询问他们是谁，来自哪里，以及他们在她的营地里做什么。

如果有人因为绿色之地的战斗而被认出来，不管角色们说什么都无关紧要。蒙达斯判决所有人在第二天被处决，在与僧侣利奥辛一起被绑在柱子上过夜之后。角色们有一晚上的时间来逃脱这个命运。他们可能挣扎着摆脱束缚，贿赂或迷惑一个邪教徒来释放他们，或者巧妙地使用一个戏法。如果一切都失败了，利奥辛透露他有一把隐藏的刀，他们可以用它来割断自己。

当某人的谎言特别合理或不合理时，你可以允许优势或劣势在掷骰时。为每个角色单独匹配骰子。那些蒙达斯相信的人会被释放，但如果他们试图离开营地，会被监视和阻止。那些蒙达斯不相信的人将如上所述被判处死刑。

角色们可以在营地里四处探查了解到很多东西。在确定反应或尝试获得帮助时，大多数邪教徒应该被视为漠不关心。狗头人不太有帮助，在角色进行魅力检定以判断他们的反应时，应该被视为敌对。

角色们可以通过观察和询问来了解以下信息。然而，他们需要小心，不要因为问太多问题或过多地插手与自己无关的事情而引起注意。任何时候如果他们表现得"过于好奇"，可以随意要求进行一次魅力检定，看看是否有人从格林斯特认出他们。

这是龙之崇拜的营地——赞美提亚马特的荣耀！

这里并不是每个人都是邪教的正式成员。许多人是新入会的成员，正在努力获得完全的接纳，还有许多人是普通的雇佣兵，在袭击期间或营地受到攻击时被雇佣来增强营地的力量。

狗头人之所以在这里，是因为他们对龙的崇拜态度使他们容易被瑞兹米尔和其他高级别邪教徒操纵，但他们并不受其他种族的喜欢或信任。

猎人从草原带回羚羊和其他大型猎物来供养营地。邪教徒和他们的盟友吃掉了大部分，但也有一部分储存在洞穴里用来喂养幼龙。

这个邪教一直在进行小规模的突袭，四处搜寻财宝。Greenest 是离营地最近的城镇，是他们袭击过的所有城镇中最大的，也是最有利可图的——赞美提亚马特的荣耀！

囚犯被用作体力劳动。过去，有一些人"转变"了信仰，成为邪教的忠实成员，但大多数人最终因过劳和营养不良而死亡。然后他们被喂给幼龙，或被带进洞穴去喂养幼龙。

营地（区域4）后面的洞穴只对那些经过蒙达斯和瑞兹米尔批准的人开放，这包括少数守卫和狗头人。营地里众所周知，被称为"育婴室"，并且有一个公开的秘密，即瑞兹米尔计划在那里孵化一窝龙蛋。

半黑龙瑞兹米尔几个月前来到了这个地区，并设立了营地。蒙达斯负责日常运营。

半蓝龙Cyanwrath是Mondath的得力助手，很少离开她的身边。他有着严格的荣誉感，但你不会想激怒他。

龙之母——赞颂提亚马特的荣耀——将会归来，当那一天到来时，世界上所有的国家都将在她威严面前颤抖！

这位僧侣对瑞兹米尔特别感兴趣。否则，她为什么会以那种方式保持这个生物活着呢？瑞兹米尔希望从他那里学到的东西谁也猜不到，但当审问变得严肃时，你不会想成为那个半精灵——或者他剩下的部分——的。

附近定居点的战利品存放在洞穴中。除了瑞兹米尔之外，没有人知道总共有多少，但到目前为止，它肯定是一个巨大的堆。

除了被认出之外，在邪教营地逗留的主要风险是被卷入工作细节。角色们可能会被一名官员选中，花费几个小时帮助准备食物、在塔楼站岗、练习武器演练，甚至清理动物的遗骸（这通常是为囚犯保留的工作，但目前营地中的囚犯数量很少）。

这位僧侣被绑在营地后部的一根木桩上（区域3）。他遭受了严重的殴打，并且为了摧毁他的意志，他被剥夺了食物和水。瑞兹米尔从剑海岸的线人那里得知，Leosin一直在研究邪教的历史和最近的活动。这位龙语者想知道Leosin学到了什么，以及他与谁分享了他的信息。瑞兹米尔认为在突袭中捕获Leosin是一个惊人的幸运。

事实上，这根本不是运气，至少对瑞兹米尔来说不是。Leosin研究了他们之前的袭击，并得出结论认为邪教是时候攻击一个更大的目标了，他知道Greenest既繁荣又防御薄弱，这使它成为最有可能的下一个目标。所以，当他觉得时机差不多成熟时，他带着等待事情发生的意图访问了这个小镇。他的观察得到了回报，Leosin在夜晚与他的人民分离，并在袭击者撤退时加入了他们，希望了解更多关于邪教计划和他们营地的位置。太阳升起后不久，瑞兹米尔发现了他，这位僧侣很快就被制服并被捕获。

里奥辛的计划那部分进行得相当顺利。他现在知道了上面在"探索营地"中列出的大部分信息。不幸的是，对他来说，囚禁比他预期的要残酷得多，尽管他的精神和意志仍然坚强，但他的身体状况非常糟糕。

尽管有危险，如果角色们来解救他，利奥辛并不完全高兴被救出。他相信自己可以学到更多，而且他愿意冒这个险。然而，他太虚弱无法抵抗，所以如果角色们想这么做，可以很容易地违背他的意愿将他带走。他可以在没有帮助的情况下以20尺的速度移动，并且像一个普通人一样战斗，攻击检定处于劣势。他后来拒绝谈论这件事。

他们可以用它来割断绑缚。如果Leosin被带走，他的缺席会在五分钟内被发现，整个营地会响起警报。在他的位置上设置一个假人可以延迟发现时间二十分钟。用一个死去的或昏迷的邪教徒（最好是半精灵）代替他可以确保入侵者在逃跑被发现前有两小时的领先时间。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_frulam_mondath","npc_langdedrosa_cyanwrath","npc_azbara_jos"],availableInfoIds:[],encounterIds:["enc_tod_cult_camp_honor_guard"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[32],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们匆忙行动，则需要通过一次成功的 DC 10 力量（运动）检定，以确保在攀爬时不会坠落。
如果角色们担心保持安静，则需要通过一次成功的 DC 10 敏捷（隐匿）检定，以确保没有岩石松脱并滚落下来。
如果角色穿着从后卫那里拿到的龙神教团服装，他们在这次检定中处于劣势，因为此时返回营地的人不应该穿着制服。
如果角色在第一天的日落之前尚未进入营地，他们会发现这变得更加困难，因为平日里进出营地的车辆和行人极少。
如果角色立即发动攻击并开始冲出营地，他们有机会逃脱，但如果他们拖延或编造故事，一群数量是他们五倍的邪教徒会包围他们。
如果角色们尝试估计营地中的人数，他们大致数出有一百名狗头人和大约八十名混合的土匪、守卫和邪教徒——如果角色们有与他们全部战斗的想法，这实际上是无限供应。
如果角色们承认他们来自Greenest并且是邪教的敌人，那么产生的效果和他们被认出来是一样的。
如果角色们对蒙达斯撒谎——比如说，声称他们是新招募的人员，这一切都是个误会，或者他们正在研究这个邪教，以决定是否加入——那么将他们的魅力（欺瞒）检定与蒙达斯的感知检定进行比较，以确定她是否相信他们。
如果角色们假扮成邪教成员，他们可以与其他邪教徒交谈，并且（谨慎地）询问他们关于邪教的计划和长期目标。
如果角色们没有将他带出营地，利奥辛会自己逃脱。
如果角色们被捕并和Leosin一起被关押，并且他们逃跑的尝试失败了，他会透露他在靴子里藏有一把小刀。`,mapGeometry:{imageRef:"adventure/HotDQ/014-tod-02-03.webp"},offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_0a6",locationId:"loc_hotdq_08b",name:"废弃营地",activation:{condition:{type:"always"},priority:0},skeleton:["（如果他们留了下来，他们会目睹营地迅速收拾并遗弃的过程。","）狗头人的恶臭小屋（位于第一层的那些）已被烧毁，但第二层的小屋和两座守卫塔仍然存在。","任何人都可以根据足迹判断，邪教徒们分成小组向四面八方撤离。","营地里仍留下的有猎人、照料洞穴中龙巢的狗头人、弗鲁兰·蒙达斯、她的守卫，以及兰德卓萨·青怒。","只有猎人还在使用小屋。"],flesh:`（如果他们留了下来，他们会目睹营地迅速收拾并遗弃的过程。）狗头人的恶臭小屋（位于第一层的那些）已被烧毁，但第二层的小屋和两座守卫塔仍然存在。任何人都可以根据足迹判断，邪教徒们分成小组向四面八方撤离。一次成功的 DC 10 感知（察觉）检定显示，营地的大多数马车和驮兽都向西方向排成一行移动。

营地里仍留下的有猎人、照料洞穴中龙巢的狗头人、弗鲁兰·蒙达斯、她的守卫，以及兰德卓萨·青怒。只有猎人还在使用小屋。所有其他人都住在孵化洞穴里。洞穴口周围的活动和警卫应该是吸引角色们注意的首要事项。

大多数早晨，猎人们分散到草原上，猎取羚羊和其他大型猎物。他们骑马出行，并带上一匹额外的马来驮运野外处理过的猎物回营地。猎人们不一定每晚都回营地。他们会在外逗留，直到他们有足够多的肉带回。在绿野狩猎情况良好，因此他们很少需要在外过夜超过一两个晚上。四名斥候充当猎人；掷一个d4来决定当角色到达营地时有多少人在营地。他们不是虔诚的邪教徒，所以他们不会挑战进入营地的角色，攻击他们，甚至不会提醒邪教徒。他们认为站岗是低人一等的工作。

他们是一群沉默寡言的人，所以对于好奇的角色帮助不大。他们与游侠交谈更自由，但对大多数陌生人，他们只是点头、指指点点、摇头、皱眉，并说出一两个词的回答。从洞穴中搬出的板条箱被装载到马车或动物上，并被拖向西边。一些袭击者仍然留在洞穴里：穿着紫色长袍的人（Mondath）、"龙人"（Cyanwrath）、更好的战士和"龙狗"（狗头人）。只要邪教徒愿意为新鲜肉品支付好价钱，追踪者就会继续为他们狩猎。洞穴里还有什么其他的，他们就不关心了。

彻底搜索营地大约需要十个人时。允许角色在第一个小时后进行一次感知（察觉）检查。成功的检定意味着角色意识到虽然留下了相当多的物品，但它们都是垃圾：破裂的陶器、生锈的刀子、脏污的衣物和床上用品、廉价的厨具，以及已经变成醋的葡萄酒。其中一些对在火灾中失去一切的绿野镇居民可能有些用处，但作为宝藏它们没有价值。`,spotlightRefs:[],presentNpcIds:["npc_frulam_mondath","npc_langdedrosa_cyanwrath","npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[36],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`当角色们返回营地时，发现那里大部分已被遗弃。
如果角色们与他们交谈，这些猎人可以讲述营地在被捕获的半精灵逃脱被发现后几小时内解散的情况。`},{id:"scn_hotdq_0a7",locationId:"loc_hotdq_0a7",name:"龙蛋孵化场",activation:{condition:{type:"always"},priority:0},skeleton:["营地里唯一值得关注的东西就是洞穴本身（地图上标记为营地区域4），角色们可以从营地看到这个洞穴。","在那里，角色们发现了留下来的邪教徒、一窝龙蛋、照料这些蛋的特殊狗头人小队——以及狗头人设置的许多陷阱，用来保卫他们的家园。","这些蛋对邪教来说很重要，但它们被认为快要孵化了，不能安全移动。","瑞兹米尔把它们留给了她认为是足够的守卫力量，由弗鲁兰·蒙达斯和兰德卓萨·青怒指挥。","洞穴的天花板高度为15尺。"],flesh:`营地里唯一值得关注的东西就是洞穴本身（地图上标记为营地区域4），角色们可以从营地看到这个洞穴。在那里，角色们发现了留下来的邪教徒、一窝龙蛋、照料这些蛋的特殊狗头人小队——以及狗头人设置的许多陷阱，用来保卫他们的家园。这些蛋对邪教来说很重要，但它们被认为快要孵化了，不能安全移动。瑞兹米尔把它们留给了她认为是足够的守卫力量，由弗鲁兰·蒙达斯和兰德卓萨·青怒指挥。

洞穴的天花板高度为15尺。人类房间（区域11，12，和13）的天花板高度为10尺。

在白天，区域 1 和 2 被明亮地照亮，而区域 3 和 4 由外部光线微弱照明。除非区域说明另有规定，否则所有其他区域都处于黑暗中。

洞穴里充满了微弱的声音：滴水声、抓挠的啮齿动物、爬行的蜥蜴、风在入口处的呻吟。这些正常的地下声音掩盖了狗头人和邪教徒的碰撞声、重击声、咳嗽声和说话声。声音在主室（区域1-5）中回响得很好，所以在这些区域中的任何战斗都可以被其他区域听到。在其他地方，正常的声音令人困惑地回响，并在背景噪音中消失。然而，尖叫声可以传得很远，如果战斗持续超过3轮，30尺长的隧道中战斗的声音会吸引注意。

狗头人在洞穴中自由穿行，忙于他们的事情。角色有机会随机遇到这些游荡的狗头人。每次角色进入或重新进入区域3到10时，掷一个d6。如果是1点，怪物就会出现。根据表格掷骰以确定他们遇到了什么。这些随机遇到的怪物将被添加到区域描述中提到的任何生物中。确保在角色进入区域之前进行这次掷骰，因为两组都有获得突袭的机会。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_frulam_mondath","npc_langdedrosa_cyanwrath"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[37],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},randomTableIds:["tbl_hotdq_0a7_0"]},{id:"scn_hotdq_0af",locationId:"loc_hotdq_0a7",name:"1. 洞穴入口",activation:{condition:{type:"always"},priority:0},skeleton:["洞穴的入口宽阔高大，但是天花板很快降低到15尺的高度。","在入口内部站岗的是两只龙爪（见附录D）。","它们定位在洞穴内部大约30尺处，并且待在墙壁和柱子附近，所以虽然它们不是隐藏的，但也不显眼。","从远处观察洞穴的角色——例如从高原的区域，那里的台阶从1层上升到2层——可以看到其中一只龙爪兽。","然后他们就有机会突袭龙爪兽。"],flesh:`洞穴的入口宽阔高大，但是天花板很快降低到15尺的高度。在入口内部站岗的是两只龙爪（见附录D）。它们定位在洞穴内部大约30尺处，并且待在墙壁和柱子附近，所以虽然它们不是隐藏的，但也不显眼。从远处观察洞穴的角色——例如从高原的区域，那里的台阶从1层上升到2层——可以看到其中一只龙爪兽。

然后他们就有机会突袭龙爪兽。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_0af"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[37],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`如果角色们公开地穿过营地接近，龙爪兽会自动发现他们并撤退到洞穴的区域2，以设置埋伏。
如果角色们安静地从侧面接近洞穴，他们不会被发现。`},{id:"scn_hotdq_0b0",locationId:"loc_hotdq_0a7",name:"2. 隐藏通道",activation:{condition:{type:"always"},priority:0},skeleton:["如果入口处的守卫发现了角色们接近，他们会在此等待，直到角色们进入视线，然后尝试发动突袭。","这个壁龛末端的通道被深深的阴影所笼罩，并被巧妙地切割的岩石褶皱隐藏着。","通往区域3的楼梯设有陷阱。","详情见该区域的描述。"],flesh:`如果入口处的守卫发现了角色们接近，他们会在此等待，直到角色们进入视线，然后尝试发动突袭。正常判定惊喜。

这个壁龛末端的通道被深深的阴影所笼罩，并被巧妙地切割的岩石褶皱隐藏着。对于任何走到壁龛末端的人来说，这都很明显，但在洞穴的其他地方，只有通过成功的 DC 20 感知 (察觉) 检定才能发现它。

通往区域3的楼梯设有陷阱。详情见该区域的描述。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_0b1",locationId:"loc_hotdq_0a7",name:"3. 真菌花园",activation:{condition:{type:"always"},priority:0},skeleton:["狗头人在这座洞穴里种植真菌，以补充猎人捕获的肉类。","在普通的真菌中混杂着紫腐菌。","从区域2的下降高度是10尺。","洞穴的入口在这里以一个10尺的陡坡结束。","在您的右侧，宽阔的台阶被粗糙地雕刻成天然的石坡。"],flesh:`狗头人在这座洞穴里种植真菌，以补充猎人捕获的肉类。在普通的真菌中混杂着紫腐菌。从区域2的下降高度是10尺。楼梯设有陷阱；

乍一看，两条小路没有任何区别。右侧的小路两侧有四株紫腐菌，而左侧的小路则没有这些危险的生长物。通过一次成功的DC 15智力（自然）检定，可以在其他蘑菇中辨认出紫真菌，但只能在台阶底部看到，而不能从岩架上发现。同样，仔细检查路径会发现，只有左侧的小路有明显的使用痕迹。

楼梯被设计成最低的台阶会坍塌成一个斜坡，将角色直接抛到紫色真菌的根部。每当角色走下楼梯时，掷一次骰子；如果投出奇数，角色将触发陷阱。当然，狗头人和卫兵知道该避开哪些地方。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_0b1"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"洞穴的入口在这里以一个10尺的陡坡结束。在您的右侧，宽阔的台阶被粗糙地雕刻成天然的石坡。下面的洞穴里铺满了各种真菌，从几英寸高到几乎和一个成年人一样高。有两条路径穿过这些真菌：一条在右边，一条在左边。",dmGuidance:`详见下文。
如果角色主动在楼梯上寻找陷阱，可以通过一次成功的 DC 15 感知（察觉）检定发现被设陷阱的台阶。`},{id:"scn_hotdq_0b4",locationId:"loc_hotdq_0a7",name:"4. 吸血怪巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["来自区域3的一些真菌点缀着这个区域，但主要是一群蝙蝠的栖息地。","在蝙蝠群中隐藏着十只蚊蝠们。","蝙蝠只在日出到日落期间出现，但蝠魔始终在这里。","通常蝠魔以丰富的蝙蝠为食，不会打扰洞穴中的其他居民，但并不总是这样。","角色们注意到地上有死蝙蝠（这是吸血蝙蝠的受害者）。"],flesh:`来自区域3的一些真菌点缀着这个区域，但主要是一群蝙蝠的栖息地。在蝙蝠群中隐藏着十只蚊蝠们。蝙蝠只在日出到日落期间出现，但蝠魔始终在这里。通常蝠魔以丰富的蝙蝠为食，不会打扰洞穴中的其他居民，但并不总是这样。

角色们注意到地上有死蝙蝠（这是吸血蝙蝠的受害者）。如果这让有人抬头看，通过一个成功的DC 10感知（察觉）检定，描述天花板上满是蝙蝠。为了避免惊动蝙蝠，角色们必须非常安静地前进。这需要一个成功的DC 10敏捷（隐匿）检定。如果有三个或更多的角色检定失败，蝙蝠会被噪音惊动，从天花板上掉下来，并在洞穴中形成一片令人眼花缭乱的拍打和尖叫的鼠类飞云。蝙蝠并不会带来危险，但它们的喧闹声淹没了其他声音，并使得视线不超过5英尺。这也会提醒吸血蝙蝠，这些投机取巧的吸血生物会在混乱中发动攻击。在蝙蝠风暴中，吸血蝙蝠的AC获得+2加值。

在区域4安静五分钟后，蝙蝠平静下来并返回到天花板上的栖息地。

一把带有凹痕的长矛躺在通往区域6的台阶顶部附近的地板上。狗头人使用这个来绕过台阶底部的陷阱（见区域6）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_0b4"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_0b5",locationId:"loc_hotdq_0a7",name:"5. 穴蜥人入侵",activation:{condition:{type:"always"},priority:0},skeleton:["每层台阶地面下降10尺。","狗头人将洞穴的这部分用作垃圾场。","除了普通的垃圾，如破碎的陶器、腐烂的篮子和被老鼠咬过的绳子，他们还丢弃了从远处看起来有用的东西：丢弃的衣服、磨损的靴子、破旧的书籍、破裂的灯具等。","这些物品中有些来自死去的囚犯，其他的则是在掠夺财宝时被拿走，后来被认为是不值得提亚马特拥有的。","角色们从悬崖上查看这个区域时，可以看到诱人的金属闪光（没有带子的皮带扣）和羊皮纸（因水渍而无法辨认的书籍）。"],flesh:`每层台阶地面下降10尺。

狗头人将洞穴的这部分用作垃圾场。除了普通的垃圾，如破碎的陶器、腐烂的篮子和被老鼠咬过的绳子，他们还丢弃了从远处看起来有用的东西：丢弃的衣服、磨损的靴子、破旧的书籍、破裂的灯具等。这些物品中有些来自死去的囚犯，其他的则是在掠夺财宝时被拿走，后来被认为是不值得提亚马特拥有的。角色们从悬崖上查看这个区域时，可以看到诱人的金属闪光（没有带子的皮带扣）和羊皮纸（因水渍而无法辨认的书籍）。

空气中弥漫着一股强烈的恶臭。生活在地下更深处的穴蜥人通过狭窄的裂缝（未在地图上显示）侵入了洞穴。如果他们花时间搜索，那么四名穴蜥人会发起攻击。这些裂缝是角色们可能探索的区域，如果你想扩展这个地牢以进行进一步的冒险。如果不是，那么就宣布这些裂缝太窄，角色们无法挤过去，或者完全消除它们和穴蜥人。

花10分钟彻底搜查垃圾堆确实能找到一件有价值的物品：一个被忽视的袋子，里面有六颗装饰性宝石，每颗价值10金币，以及八颗半宝石，每颗价值50金币。而那些洞穴穴蜥人身边没有任何值得别人想要的东西。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_0b5"],treasureSlotIds:["trs_hotdq_0b5_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色们对这个地方匆匆一瞥然后离开，这里什么也不会发生。"},{id:"scn_hotdq_0b7",locationId:"loc_hotdq_0a7",name:"6. 肉类冷藏室",activation:{condition:{type:"always"},priority:0},skeleton:["通往这个洞穴入口的帘子设有陷阱。","在这些陡峭下降的台阶底部，一条帘子横挂在通道上。","它由数百条重的皮革条组成，每条大约是人类手的宽度。","这些条带固定在天花板上，足够长以至于可以拖到地板上。","帘子从一堵墙延伸到另一堵墙。"],flesh:`通往这个洞穴入口的帘子设有陷阱。

这个洞穴自然寒冷。它全年温度仅略高于冰点，不论季节如何。猎人们带来的大部分肉类供给了邪教徒和狗头人，但多余的肉储存在这里，以备龙蛋孵化时那些贪吃的幼龙出现时使用。这些尸体从非常新鲜到几个月都有。肉只是冷的，并没有冻住，所以较旧的肉类正在慢慢变质。

这个洞穴没有任何有价值的东西。

隐藏在窗帘皮革条中的是数百根涂有毒药的金属倒刺。任何穿过窗帘的人必须成功通过一次 DC 10 敏捷豁免检定，否则将受到 5 (1d10) 点毒素伤害，并且目标的生命值上限减少 5 点。这种减少效果将持续到目标完成一次长休。

仔细检查这些皮革条，并结合一个成功的 DC 10 感知（察觉）检定，可以发现上面的倒刺；否则无法注意到它们。当狗头人使用这个楼梯时，他们会带来存放在 区域4 的破损长矛。用它，他们会将皮革条扫到走廊的左侧，并将长矛的末端楔入区域 6 内部地板上的一个倾斜插座中。这使得他们在进出房间时，皮革条能够安全地避开。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`在这些陡峭下降的台阶底部，一条帘子横挂在通道上。它由数百条重的皮革条组成，每条大约是人类手的宽度。这些条带固定在天花板上，足够长以至于可以拖到地板上。帘子从一堵墙延伸到另一堵墙。皮革来自各种当地动物，并且鞣制得很差。帘子有几层厚，没有缝隙，所以你完全看不到另一边。

陈旧的血腥味冲击着你的鼻子。地面上覆盖着干涸的血泊。四个从地板到天花板的柱子间隔分布在室内，链子像晾衣绳一样在它们之间拉起。动物的尸体挂在链子上的钩子上。你可以看到被剖开并剥皮的羚羊、鹿、山羊，可能还有大型猫科动物，甚至还有一些小熊。如果气味是一个可靠的指示，那么这些肉中的一些已经在这里有一段时间了。`,dmGuidance:'详见下方的"陷阱帘子"。'},{id:"scn_hotdq_0bb",locationId:"loc_hotdq_0a7",name:"7. 幼龙育婴室",activation:{condition:{type:"always"},priority:0},skeleton:["4区和7区之间的短而宽的通道设有陷阱。",'具体细节见下方的"尖刺陷阱"。',"简单的油灯提供了昏暗、闪烁的光线。","这个房间内有四只狗头人和一只带翼狗头人。","这些生物位于房间的上部。"],flesh:`4区和7区之间的短而宽的通道设有陷阱。具体细节见下方的"尖刺陷阱"。简单的油灯提供了昏暗、闪烁的光线。这个房间内有四只狗头人和一只带翼狗头人。这些生物位于房间的上部。

这个较低的区域是邪教徒进行仪式创造他们的守卫龙兽的地方，然后安置了这些生物。悬崖是一个陡峭的10尺落差。木制楼梯位于悬崖右端向下延伸。一个坚固的笼子由10尺高的铁栏杆围绕，以防止未经训练的龙逃上台阶。一把钥匙挂在台阶顶部的挂钩上；它打开了底部的锁着的门。

西南墙上的架子上摆放着用于训练幼龙的工具：一端带有套索的长杆，用于捕捉和控制年轻的幼龙；牵引绳和项圈；尖锐的刺棒；用木头制成的模拟武器；用帆布缝制并填充稻草的真人大小的假人，它们的脸上画着荒谬的表情。

下层区域笼罩在浓重的阴影中。目前那里有三头守卫龙兽即将完成训练。由于尚未完全发育成熟，每条龙兽仅有33点生命值。从岩架上发现这些龙兽需要通过一次DC 15感知（察觉）检定；若用牛眼提灯照射坑洞则可获得检定优势。若角色通过台阶下行或攀爬岩架进入坑洞，龙兽将会发动攻击。

如果这些幼龙被站在岩架上的角色发现并遭到攻击，它们会发出一声嚎叫，从区域8吸引六名狗头人和三名带翼狗头人。至少有一个会尝试绕过角色，解开台阶底部的大门锁，让守卫幼龙按照训练加入战斗。

区域4 和 7 之间的部分地板被一张巧妙地绘制成周围石头的纸张所取代。通过成功的 DC 15 感知（察觉）检定可以察觉到它，或者通过系统地用杆子或其他工具敲击地板的人可以自动发现。纸张下方是一个浅坑（约 2 英尺深），里面布满了带毒的尖刺。每当一个角色在区域4 和 7 之间移动时，掷一个 d10。如果掷出 1 或 2，角色的脚就会穿过陷阱。角色将受到 1d4 点穿刺伤害，并且必须进行一次 DC 10 体质豁免检定以抵抗毒素。如果豁免失败，角色会受到 en=Confusion 的影响，持续一分钟（10 轮）。如果豁免成功，角色将受到 en=Confusion 的影响，持续 1 轮。该效果并非魔法效果。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_0bb"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[39],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色携带生肉到岩架边，龙兽会以为投喂时间到而靠近光源。"},{id:"scn_hotdq_0bd",locationId:"loc_hotdq_0a7",name:"8. 狗头人营房",activation:{condition:{type:"always"},priority:0},skeleton:["从区域7下来的台阶设有陷阱；","区域8是狗头人的居住区。","它原本是一个天然洞穴，但已经被以一种简陋的方式扩大和平滑处理过。","除非他们已经对区域7中的噪音做出了反应，否则这个区域包含六名狗头人和六名带翼狗头人。","他们现在是下班状态，所以他们不是特别警觉。"],flesh:`从区域7下来的台阶设有陷阱；区域8是狗头人的居住区。它原本是一个天然洞穴，但已经被以一种简陋的方式扩大和平滑处理过。除非他们已经对区域7中的噪音做出了反应，否则这个区域包含六名狗头人和六名带翼狗头人。他们现在是下班状态，所以他们不是特别警觉。使用他们的被动感知（察觉）得分来决定他们是否对噪音做出反应。摇曳的油灯提供微弱的照明。

最上层的台阶被设计成触发区域7天花板部分塌陷的机关。每名角色进入楼梯时，掷任意骰子。如果结果是奇数，角色踩到了错误的位置并触发了陷阱。天花板会坍塌在队列中的下一个角色（即触发陷阱角色后面的角色）上方。该角色受到4d4钝击伤害，如果角色成功通过DC 15敏捷豁免，伤害减半。每个在5英尺范围内的角色都会受到2d4钝击伤害，如果成功通过豁免，伤害减半。

一个正在主动寻找楼梯上陷阱的角色可以通过一次成功的 DC 10 感知（察觉）检定发现那个有陷阱的台阶。通过一次成功的 DC 15 感知（察觉）检定，可以偶然发现可坍塌的天花板。

如果陷阱被触发，8号和9号区域的狗头人会听到喧闹声。

搜查房间需要10分钟，发现了38金币，152银币和704铜币，这些铜币整齐地分成了88堆，每堆正好8个铜币。还有许多以龙为主题的护身符和护身符，它们由骨头、皂石、木头和象牙雕刻而成。其中大部分的工艺都很差，但有四个具有独特且野蛮的艺术风格。如果卖给收藏艺术珍品的人，它们分别值50、60、70和100金币。对于任何其他商人来说，每个价值10金币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_0bd"],treasureSlotIds:["trs_hotdq_0bd_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[40],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"用未经妥善鞣制的毛皮覆盖的稻草薄床垫构成了随意摆放在室内的小床。老鼠和小蜥蜴在地板上的食物残渣和发霉的酒囊中穿梭。",dmGuidance:'详见下文的"坍塌陷阱"。'},{id:"scn_hotdq_0c1",locationId:"loc_hotdq_0a7",name:"9. 龙神殿",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴是献给提亚马特的圣坛，但特别强调她的黑龙头部以及黑龙这一整体。","其中还包含许多龙巫教的标志，以及一个为粗心者准备的阴险陷阱；","摇曳的油灯提供了2。","兰德卓萨·青怒 占据着神龛，他由两名人类狂战士们陪同。","（如果冒险队伍包含超过四名角色，每增加一名角色就增加一名狂战士。"],flesh:`这个洞穴是献给提亚马特的圣坛，但特别强调她的黑龙头部以及黑龙这一整体。其中还包含许多龙巫教的标志，以及一个为粗心者准备的阴险陷阱；摇曳的油灯提供了2。

兰德卓萨·青怒 占据着神龛，他由两名人类狂战士们陪同。（如果冒险队伍包含超过四名角色，每增加一名角色就增加一名狂战士。如果Langdedrosa被杀，那么用另一个具有相同具体数值的半龙来替换他。）如果Cyanwrath在Greenest与任何角色一对一战斗过，他会立即单挑那个人并如下发言。

一旦他说完话，他就会发起攻击。只要没有角色干预，Cyanwrath的团队就比插手他的一对一比赛更为明智。

如果没有任何角色在袭击期间与塞恩瓦拉斯交战，但在邪教徒营地中度过了一段时间，请阅读以下内容。

然后他发起攻击，他的守卫们立即加入战斗。

在区域10的生物不会被这场战斗吸引。它们躲藏起来，等待看谁获胜。战斗结束后，角色们有时间调查这个房间。

五头龙是提亚马特，火山是龙井，龙之邪教打算在龙井将提亚马特带入这个世界。龙井位于日落山脉的最北端。大多数角色应该能从民间故事中认出提亚马特，并知道她很久以前被流放到九层地狱，并且一直被囚禁在那里。从雕刻上无法判断火山的位置，也无法知道这是否是对未来事件的预测，或者只是邪恶龙后诞生的隐喻。

这个箱子被锁住并设有陷阱；详情请参阅下方的"酸液陷阱"。角色可以使用来自 区域11 的钥匙打开它，或者可以使用 盗贼工具 并通过一个成功的 DC 10 敏捷检定来撬开锁。然而，除非敏捷检定结果为15或更高，否则当箱子打开时会触发陷阱。

首先，黑龙的数量过多。显示的龙中几乎有一半是黑龙。龙语者雷兹米尔 偏爱它们胜过其他所有类型。其次，详细的搜索加上一次成功的DC 10 感知（察觉）检定可以发现，许多黑龙雕刻的嘴巴上有洞。

神殿室西南角的一条通道通向一个滑道，向上延伸30尺到达区域11。顶部固定着一个绳梯；一张地毯覆盖了开口。

龙嘴里的洞是陷阱的喷嘴，用于喷射酸性雾气。这个陷阱有两个触发器。第一个位于西北角的箱子下面。如果箱子被移动，陷阱就会触发。第二个触发器在箱子里。如果箱子被强行打开，或者锁被不熟练地撬开（敏捷检定结果为14或更低），陷阱就会触发。

房间内的每个人都必须成功通过一次 DC 10 敏捷豁免检定，否则将因被酸液喷洒而受到 2d6 点酸蚀伤害（豁免成功则只受一半伤害）。然而，酸液真正的危险并不在于对角色皮肤的伤害，而是对肺部的伤害。每个人都还必须成功通过一次 DC 10 体质豁免检定，否则将额外受到 2d8 点酸蚀伤害。

箱子里装着邪教最近宝藏突袭中夺取的一些精选物品。Mondath说服瑞兹米尔让她保留它们，并承诺当她北上前往龙井参加仪式时会带上它们。实际上，如果一切都变糟了，她想要一些退路（她从未向瑞兹米尔提及最后那部分）。里面有一串珍珠（300金币），一枚金蓝宝石戒指（900金币），以及一个袋子，里面装着六个精心切割和打磨的宝石（每个100金币）。戒指和珍珠是从Greenest拿走的，那里的任何人都会认出它们，但宝石来自其他地方，难以识别。如果从Greenest回收的物品归还，它们的主人将支付相当于它们价值25%的奖励（300金币）。`,spotlightRefs:[],presentNpcIds:["npc_langdedrosa_cyanwrath","npc_rezmir"],availableInfoIds:[],encounterIds:["enc_hotdq_0c1"],treasureSlotIds:["trs_hotdq_0c1_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[40],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`"你们活下来了！我不知道是该失望还是高兴。我想两者都有吧。"

"你看起来很眼熟......我在营地里见过你。如果你是来找麻烦的，我就是你在找的麻烦。"

这个房间已经从原始形态被扩大和重新塑造。地板和三面墙都是平滑的，钟乳石和石笋被打磨成闪闪发光的柱子。每一个表面都闪烁着湿润的光泽，空气温暖而潮湿。房间的平面墙上装饰着龙的浅浮雕抽象雕刻。龙的尾巴卷曲成复杂的图案和结，贯穿整个墙面。在西北角的生物特别显眼：一只五头龙，从喷发的火山中升起。其他龙似乎被这五头怪物所矮化，聚集在它旁边。在角落里，五头龙雕刻前的地板上，放着一个带有银和珍珠母镶嵌的小木箱。

你听到箱子下面传来一声断裂声，接着是像几十条愤怒的蛇一样发出的嘶嘶声——或者像液体通过开放管道流动的声音。片刻之后，液体从墙壁和天花板上的数十个小孔喷涌而出。无论它溅到哪里，石头上的水分都会冒泡并冒烟。片刻之内，室内就充满了酸性雾气。`,dmGuidance:`详见下方的"酸性陷阱"。
如果角色在Greenest战胜了困难并赢得了战斗，你可以用释义的方式来反映这一点。
如果角色们联手对抗Cyanwrath或他的一个守卫，或者试图离开房间，守卫们就会发起攻击。
如果角色花费10分钟或以上时间研究这些雕刻，他们可以了解到两件事。
如果玩家立即声明他们的角色正在遮住面部并尽快离开房间，并试图不吸入蒸气，则在体质豁免检定上具有优势。`},{id:"scn_hotdq_0c8",locationId:"loc_hotdq_0a7",name:"10. 龙巢",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间内有三个蛋，瑞兹米尔希望它们孵化成一群新的龙。","它们还没有孵化，但很快就会，这就是为什么当营地打包离开时瑞兹米尔不愿意移动它们。","相反，她把它们留给了Mondath和狗头人照顾。","当狗头人在区域9听到打斗声时熄灭了他们的灯光。","楼梯底部打开的房间非常宽敞。"],flesh:`这个房间内有三个蛋，瑞兹米尔希望它们孵化成一群新的龙。它们还没有孵化，但很快就会，这就是为什么当营地打包离开时瑞兹米尔不愿意移动它们。相反，她把它们留给了Mondath和狗头人照顾。房间是黑暗的；当狗头人在区域9听到打斗声时熄灭了他们的灯光。

房间的下部(10A)位于岩架下方15尺处。已经建造了木制台阶通往下层。与7号房间一样，台阶被一个坚固的铁笼包围，在底部有一个门。门的钥匙挂在楼梯顶部对面的墙钉上。一旦角色们进入房间，到达楼梯顶部，他们就会受到藏在10B的狗头人的攻击。

站在岩架上，角色们勉强能在下面的黑暗中辨认出大型蛋的形状（每个蛋将近三尺高）。洞穴延伸进他们光线范围之外的黑暗中。他们需要下楼梯并直接探索该区域以了解其全貌。站在岩架上的角色们能辨认出岩架底部粗糙地面上有许多大的深色污迹，但不清楚是什么造成的。`,spotlightRefs:[],presentNpcIds:["npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[41],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"楼梯底部打开的房间非常宽敞。一个宽阔的岩架沿着左边的墙壁延伸，并在右边下降到一个深坑。许多钟乳石从天花板垂下，滴水声不断地回响。",dmGuidance:"详见该区域的描述了解详细信息。"},{id:"scn_hotdq_0ca",locationId:"loc_hotdq_0a7",name:"10A. 黑龙蛋",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域温暖潮湿。","角色仔细观察地面后，他们可以判断出这些污渍是血迹，其中一些是新鲜的。","这些血迹来自狗头人扔下来的肉。","蜷缩在房间最远边缘的阴影中或自然柱子后面的是两只被训练来保护龙蛋的守卫龙兽。","它们不会在角色通过门时立即攻击，而是等到角色进入房间。"],flesh:`这个区域温暖潮湿。角色仔细观察地面后，他们可以判断出这些污渍是血迹，其中一些是新鲜的。这些血迹来自狗头人扔下来的肉。

蜷缩在房间最远边缘的阴影中或自然柱子后面的是两只被训练来保护龙蛋的守卫龙兽。它们不会在角色通过门时立即攻击，而是等到角色进入房间。这些龙的首要任务是保护蛋。它们的第二任务是在入侵者和台阶之间制造障碍，防止他们逃跑。除非角色在探索这个区域之前不使用台阶而爬进10A，否则他们会在触发狗头人的攻击之前触发这个区域。

在房间东南角附近的钟乳石中混居着一个不寻常的石绳怪，它能说通用语。它不攻击狗头人或守卫龙兽，因为狗头人给它喂食守卫龙兽不愿意吃的变质肉。如果受到攻击，它会反击（对3级角色来说非常危险！）。它的触手可以伸到区域10的任何地方，而且它还能以10的速度移动。它目前吃饱了，对陌生人感到好奇，所以它不反对交谈。它唯一真正关心的是食物。如果告诉它区域6有肉供应并带来一些作为证据，它会在悄悄溜走去检查食物储藏室的同时，不去打扰角色们。

总共有三个龙蛋分布在整个区域。每个龙蛋大约三英尺高，重达150磅。其中两个只要携带光源穿过房间就很容易发现。第三个则藏在一根柱子后面的一堆颜色相似的石头中，很容易被忽略掉。只有掷出15或更高的人才能发现伪装在巢穴中的龙蛋。观察龙蛋时，角色可以通过一个成功的DC 10智力（自然）检定来确定龙的种类颜色。

如果这些蛋留在此处，它们将在不到一周的时间内孵化。如果它们被移走，它们是否孵化取决于它们的存放和处理方式。在没有像这个房间一样温暖、潮湿的环境中，它们的发育会停止，直到它们再次处于合适的孵化器中。如果蛋被砸碎、压碎或刺穿，里面的龙可以很容易被杀死。如果一个蛋仅仅是被打开，幼龙会挣扎着呼吸，像人类婴儿一样哭泣和扭动几分钟，然后死去。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_0ca"],treasureSlotIds:[],eventIds:["evt_tod_hatchery_route"],tone:"tension",_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色们搜索房间时，让每个人都进行一次感知（察觉）检定。",mapGeometry:{imageRef:"adventure/HotDQ/019-tod-03-02.webp"},offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_0cb",locationId:"loc_hotdq_0a7",name:"10B. 隐藏的狗头人",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域的地面比岩架低约10英尺。","照看龙蛋的四只狗头人在听到第9区爆发战斗时躲在了这个凹陷处。","它们在下一轮会做同样的事情。","然后如果可能的话，它们会等待一两轮，同时10A区的噬魂怪会将角色拖入其触手中，咬住他们，或将他们扔下20英尺到守卫龙兽那里。","如果检定成功，目标身上的效果结束。"],flesh:`这个区域的地面比岩架低约10英尺。照看龙蛋的四只狗头人在听到第9区爆发战斗时躲在了这个凹陷处。它们在下一轮会做同样的事情。然后如果可能的话，它们会等待一两轮，同时10A区的噬魂怪会将角色拖入其触手中，咬住他们，或将他们扔下20英尺到守卫龙兽那里。

炸弹目标点10英尺内的每个生物都必须成功通过一次DC 11敏捷豁免，否则将被束缚。目标或在其范围内的另一个生物可以使用一个动作进行一次DC 11力量检定；如果检定成功，目标身上的效果结束。

炸弹目标点周围10英尺内的每个生物必须成功通过一次 DC 11 敏捷豁免，否则受到4 (1d8) 点火焰伤害（豁免成功则只受到一半伤害）。

如果其他方法都失败了，狗头人会匆忙爬上他们临时搭建的梯子，并用短剑进行攻击。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_0cb"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色接近俯瞰10B区的岩架25英尺范围内时（当他们在10A区楼梯顶部的位置），两只狗头人投掷胶质炸弹，另外两只投掷火焰炸弹。"},{id:"scn_hotdq_0ce",locationId:"loc_hotdq_0a7",name:"11. 弗鲁拉姆·蒙达斯的房间",activation:{condition:{type:"always"},priority:0},skeleton:["弗鲁兰·蒙达斯（见附录D)在营地被废弃后搬进了这个简单但舒适的房间。","如果与区域12的守卫没有发生战斗，并且角色从区域9进入这个房间，那么当他们到达时Mondath就在这里。","区域12的守卫会听到这个房间里发生的任何事情，并会尽职尽责地作出反应。","这个房间里有一张写字台和凳子，几张摆放着书籍和纸张的桌子，以及一个放在地板支架上的镜子。","光线来自两盏油灯。"],flesh:`弗鲁兰·蒙达斯（见附录D)在营地被废弃后搬进了这个简单但舒适的房间。如果与区域12的守卫没有发生战斗，并且角色从区域9进入这个房间，那么当他们到达时Mondath就在这里。区域12的守卫会听到这个房间里发生的任何事情，并会尽职尽责地作出反应。

这个房间里有一张写字台和凳子，几张摆放着书籍和纸张的桌子，以及一个放在地板支架上的镜子。光线来自两盏油灯。厚厚的地毯完全覆盖了地板，包括一个通向区域9的开口滑槽。滑槽内固定着一个绳梯，用于上下攀爬，但当滑槽被地毯覆盖时，没有任何标记显示这个3英尺宽的开口位置。成功通过一个DC 10感知（察觉）检定可以注意到地毯上轻微的凹陷。如果有人不知道滑槽的存在而踩上去，角色必须进行一个DC 10敏捷豁免检定。成功意味着角色在地毯坍塌之前跳开，或者在坠落时抓住梯子的顶端；失败意味着角色从滑槽中坠落30英尺，掉入区域9，受到3d6钝击伤害。

主室旁的小房间内有一张床、一个装有蒙达斯衣服的箱子，以及第二个箱子，里面装有蒙达斯的龙之邪教服饰和通往区域9箱子的一把钥匙。有了这套服饰，可以给一个人（最好是一个人类女性，但衣服可以调整以适应男性）装扮成紫衣使者。值得注意的是，每个紫衣使者的服饰都相似但独特，因此高级邪教成员很可能会认出这是蒙达斯的服饰。当他们看到穿戴它的人不是蒙达斯，或者知道她已经死了，警钟肯定会响起。

如果在区域12发生战斗，并且那个房间的四名守卫撤退到这里来保卫蒙达斯，她的反应取决于你。如果营房中的战斗对角色们造成了重大损失，她可能会决定在这里面对他们。如果攻击者轻松击败了她的前线守卫，蒙达斯可能会通过滑道撤退到区域9，并与赛恩瓦斯联手，甚至逃离洞穴。她已经将自己的生命奉献给了龙之邪教，但她并不急于为邪教而死。蒙达斯知道邪教正在北方积累财宝，并且瑞兹米尔经常提及提亚马特，但这就是她对更大计划所知的全部。`,spotlightRefs:[],presentNpcIds:["npc_frulam_mondath","npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[43],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:'在其中一张桌子上展开的是一张简单的格林菲尔德地区地图，显示了邪教袭击和掠夺的村庄。从格林菲尔德向西，有一支箭头指向贸易之路上的城镇贝雷戈斯特，然后箭头向北转。另一张纸上面列满了数字，写着"一切都必须向北运输到纳埃里塔。瑞兹米尔允许我们保留一些珍珠、一枚戒指和一把小石头。"其他纸张则不那么有趣；它们大多数都写有关于龙的糟糕诗歌。'},{id:"scn_hotdq_0d1",locationId:"loc_hotdq_0a7",name:"12. 警卫营房",activation:{condition:{type:"always"},priority:0},skeleton:["留在Mondath身边的守卫将这个房间用作他们的营房。","他们在入口（1号区域）维持两人的警戒；","目前有两个龙爪在那个区域值班，其他人——三个警卫和八个邪教徒——在这里，要么睡觉要么休息。","如果从1号区域与龙爪的战斗接近通往12号区域的通道，掷一个d20；","如果掷出12或更高，这里的守卫会因为声音而进行调查。"],flesh:`留在Mondath身边的守卫将这个房间用作他们的营房。他们在入口（1号区域）维持两人的警戒；目前有两个龙爪在那个区域值班，其他人——三个警卫和八个邪教徒——在这里，要么睡觉要么休息。如果从1号区域与龙爪的战斗接近通往12号区域的通道，掷一个d20；如果掷出12或更高，这里的守卫会因为声音而进行调查。否则他们就留在这里，对其他地方发生的事情大多一无所知。

两名守卫和五名邪教徒在这里与角色战斗，而一名守卫和三名邪教徒撤退到区域11去保护弗鲁兰·蒙达斯。

守卫的剑鞘上装饰有龙的图案。每个价值大约5金币。它们不是龙之崇拜"制服"的一部分，但是佩戴其中之一的剑鞘可能会在尝试伪装成邪教徒时为角色增加可信度。例如，你可能在进行欺骗或影响邪教徒的魅力检定时给予+1的奖励。除了他们的装备，守卫们还有硬币和小宝石，总价值为120金币。`,spotlightRefs:[],presentNpcIds:["npc_frulam_mondath"],availableInfoIds:[],encounterIds:["enc_hotdq_0d1"],treasureSlotIds:["trs_hotdq_0d1_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[43],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色从区域2进入这个房间，守卫们会迅速作出反应。"},{id:"scn_hotdq_0d3",locationId:"loc_hotdq_0a7",name:"13. 宝藏储藏",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间现在大部分是空的，除了一些翻倒的箱子、破碎的物品、散落的硬币、在匆忙撤离时掉落的小宝石，以及一个在喝了几瓶酒后在地板上沉睡的邪教徒。","除非进行剧烈摇晃，否则他不会醒来，而且他需要几个小时才能清醒。","留在这个房间里的所有掉落物品的总价值仅为16金币。"],flesh:"这个房间现在大部分是空的，除了一些翻倒的箱子、破碎的物品、散落的硬币、在匆忙撤离时掉落的小宝石，以及一个在喝了几瓶酒后在地板上沉睡的邪教徒。除非进行剧烈摇晃，否则他不会醒来，而且他需要几个小时才能清醒。留在这个房间里的所有掉落物品的总价值仅为16金币。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_0d3_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[43],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_0d5",locationId:"loc_hotdq_0d5",name:"在路上",activation:{condition:{type:"always"},priority:0},skeleton:["从格林菲尔德掠夺的财宝正通过贸易之路向北运输，隐藏在没有标记的货运马车中，这些马车是那条繁忙道路上常规的商队交通的一部分。","英雄们必须找出这些战利品的去向，这意味着他们需要进行一次漫长而充满危险的北行之旅。","角色们应该从Greenest东南的废弃邪教营地前往Chionthar河畔的Elturel城。","他们的路线会让他们再次经过Greenest，在那里他们可以归还从邪教那里回收的任何被盗物品，并从伤痛中恢复。","Nighthill高兴并尊敬地迎接角色们。"],flesh:`从格林菲尔德掠夺的财宝正通过贸易之路向北运输，隐藏在没有标记的货运马车中，这些马车是那条繁忙道路上常规的商队交通的一部分。英雄们必须找出这些战利品的去向，这意味着他们需要进行一次漫长而充满危险的北行之旅。

角色们应该从Greenest东南的废弃邪教营地前往Chionthar河畔的Elturel城。他们的路线会让他们再次经过Greenest，在那里他们可以归还从邪教那里回收的任何被盗物品，并从伤痛中恢复。Nighthill高兴并尊敬地迎接角色们。他告诉他们，在Leosin Erlanthar离开城镇之前，他为角色们购买了马匹和骑行装备，以加快他们前往Elturel的旅程。马匹正在经销商的马厩中保管，直到角色们准备前往Elturel；他们的所有费用都已支付。

骑马的话，角色们可以在大约六天内完成从格林斯特到埃图雷尔的200英里旅程。除非您安排一两次遭遇来增加旅途的趣味性或提高他们的经验值总数，否则他们会平安无事地完成旅程。在格林菲尔德未开化的广袤地区，遭遇土匪、类人族部落和漫游怪物是恰当的。`,spotlightRefs:[],presentNpcIds:["npc_leosin_erlanthar","npc_jamna_gleamsilver","npc_ontharr_frume"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[44],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/HotDQ/020-tod-04-01.webp"}},{id:"scn_hotdq_0d6",locationId:"loc_hotdq_0d5",name:"埃尔托瑞尔",activation:{condition:{type:"always"},priority:0},skeleton:["Elturel，一个俯瞰着奇昂塔河的大型有序城市，充满了商人、河上贸易者和农贸市场。","它最显著的特征是一团辉煌的魔法光，它悬浮在城市上方，日夜照亮着城市。","这束光对不死生物来说是痛苦的，并且几乎从Elturgard（其首都就是Elturel）的每个角落都可以看到，从远处看，它看起来像一颗星星或遥远的太阳。","他是一个行动派，喜欢玩笑和恶作剧，喜欢烈酒和友好的打斗。",'如果他们询问昂塔尔·弗鲁姆，任何人都可以指引他们到Frume派系的"总部"，战锤骑士团，在一家名为A Pair of Black Antlers的酒馆。'],flesh:`Elturel，一个俯瞰着奇昂塔河的大型有序城市，充满了商人、河上贸易者和农贸市场。它最显著的特征是一团辉煌的魔法光，它悬浮在城市上方，日夜照亮着城市。这束光对不死生物来说是痛苦的，并且几乎从Elturgard（其首都就是Elturel）的每个角落都可以看到，从远处看，它看起来像一颗星星或遥远的太阳。

他是一个行动派，喜欢玩笑和恶作剧，喜欢烈酒和友好的打斗。

如果他们询问昂塔尔·弗鲁姆，任何人都可以指引他们到Frume派系的"总部"，战锤骑士团，在一家名为A Pair of Black Antlers的酒馆。

你可以根据自己的意愿和玩家的喜好，在埃图雷尔的互动上花费或多或少的时间。只要角色们认为持续的饮酒、扳手腕、骑马比赛、格斗和武器训练是愉快的时光，他们在弗鲁姆的陪伴下就一定会玩得开心。角色们可以通过赢得一些比赛（通过对抗技能或属性检定快速解决）或与他的士兵进行格斗比赛，或者通过讲述他们在格林斯特突袭、袭击者营地和龙洞中的壮举的有趣故事，给弗鲁姆留下积极的印象。

在一天结束的时候，Frume对角色们印象深刻，他派他的一名随从到酒馆的私人房间召唤他们。

昂塔尔·弗鲁姆 和 Leosin Erlanthar，以及剑海岸沿线一些其他关注此事的领袖和学者，正处于组织反抗龙之崇拜的初期阶段。

埃兰萨的组织是竖琴手联盟。角色们可能听说过更古老的竖琴手，但他们不太可能知道这个秘密组织的更多信息，除了通常的传言：竖琴手致力于促进平等和正义，防止权力落入不配拥有它的人手中。埃兰萨解释说，竖琴手联盟的组织结构比较松散；允许特工有广泛的行动自由。

昂塔尔·弗鲁姆 代表战锤秩序。他的秩序和竖琴手们分享许多原则，但这两个组织非常不同。战锤秩序强调信仰、警惕以及对邪恶威胁的持续斗争。它的许多成员是牧师和圣武士，但秩序欢迎任何分享其理想的人。纪律是关键，并且秩序在结构和等级制度上明显比竖琴手们更加严格和有层次。

两个小组最关心的是龙之邪教。过去，邪教在东方更为活跃，它专注于创造龙巫妖。它转向剑海岸并对活龙和提亚玛特的新重点引起了担忧。邪教正在行动，它在策划一些大事；战锤秩序、竖琴手同盟以及被称为翡翠联盟的第三个联盟小组想要挫败邪教的计划。

在这次会面中，弗鲁姆和埃兰萨向角色们提供了加入他们派系的机会。在这个阶段，成员们没有薪水，也没有等级。他们能提供的是来自其他成员和盟友的帮助与支持，这些盟友从南部的纳什凯尔和烛堡一直分布到北部的永聚镇和米拉巴尔。埃兰萨为角色们安排的马匹只是竖琴手联盟和战锤骑士团所能提供帮助的一个小例子。

竖琴手可以通过该组织的标志来识别：一具银色竖琴嵌在新月的两角之间。有些人公开佩戴这个标志，而其他人则将其隐藏起来。Erlanthar在确定自己不会进入潜在的俘虏情况时，会在脖子上佩戴一枚吊坠形式的标志——有时公开佩戴，有时藏起来。战锤秩序的成员则公开佩戴他们的圣徽。（Frume的是Torm的右手手套。）该秩序的通用标志是一只紧握剑刃的手套。Frume在脖子上佩戴这样的一个吊坠标志，隐藏在他的长胡子下面。

角色们无需加入任何一个派系，但这样做有一些优势，并且没有真正的缺点。即使角色们不同意加入，弗鲁姆和埃兰萨也试图争取他们的帮助，追踪邪教的货物运输。

由于角色们的努力，竖琴手们现在知道邪教正在积累财宝并将其运往北方。这些财宝究竟要运往何处以及邪教计划用它做什么是接下来需要解答的两个问题。弗鲁姆和埃兰萨希望角色们加入邪教的商队并陪同它一起旅行。他们可以让自己被雇佣为守卫——如果不是为了邪教的车队管理人，那么是为了同时朝同一方向旅行的其他商人。不同公司的商人通常会联合起来组成更大的车队以获得保护。弗鲁姆在该地区的许多商人中有联系人，并确信他可以安排一份工作。

时间是一个问题。离开邪教徒营地的踪迹和Mondath房间的地图都表明，马车正朝西行驶去接海岸之路，在那里它们将向北转往Beregost和博德之门，大约550英里的旅程。根据条件，马车需要二十五到三十天来完成这次旅行。马车在角色们返回营地之前至少出发了一天，而且角色们可能花了一天时间探索被遗弃的营地并清理龙孵化场。返回Greenest，休息，并前往Elturel又需要八到十天。除非角色们步行到Elturel或在前往北方之前在Greenest逗留了好几天，否则他们应该至少有十到十五天的时间，在这之前邪教的马车会到达博德之门。

奇昂塔河直接从埃图雷尔流到博德之门。如果帆船夜间停靠以保安全，顺流而下大约需要三天；如果冒险在夜间借助灯光继续航行，则需要两天。弗鲁姆已经安排了这样一艘船在第二天早上黎明出发。他们每人还获得了50金币，以支付旅途中的开销。

埃兰萨留下来再次呼吁他们的荣誉感和责任感。里面有一颗价值1200金币的华丽红宝石。他解释说，如果他们接受任务，这颗红宝石将在深水城的一个竖琴手特工手中等着他们。

那天晚上，弗鲁姆确保角色们都配备了新的衣服和装备，甚至如果他们想要的话，还有新武器。他建议他们尽可能简单地改变自己的外表，以减少在邪教营地可能遇到的任何人认出他们的几率。

无论乘船前往博德之门的旅程需要三天还是两天，都是平安无事的。马儿可能不会喜欢，但它们会适应。`,spotlightRefs:[],presentNpcIds:["npc_ontharr_frume","npc_leosin_erlanthar","npc_jamna_gleamsilver"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[44],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`Frume的侍从带您进入酒馆公共区旁边的一个私人空间，并在他离开时关上门。在房间里等候您的是宽肩膀的人类圣武士、僧侣利奥辛，以及许多罐深红色的葡萄酒。与他通常开朗的表情不同，圣武士的脸上带着严肃的表情。
我的朋友们，我们有重要的事务要讨论。到了这个时候，你们几乎和我们一样了解情况，而且多亏了你们，我们今天知道的是十天前的两倍。有些不妙的事情正在进行中。我们还没有任何正式的组织来对抗这些无赖——至少目前还没有。我们正在努力。我们需要像你们这样的人，知道何时以及如何战斗，何时以及如何保持低调并观察。我们不能向你们承诺任何东西，除了充满危险和压力的漫长日子——但还有什么比这更好的呢，嗯？"`,dmGuidance:`当角色们遇到昂塔尔·弗鲁姆时，他们会发现他是一个性格善良的Torm圣武士，Torm是英勇和勇敢之神。
如果角色们在到达Elturel时询问Leosin Erlanthar，当地没有人认识他。
如果角色们在Erlanthar离开Greenest后的十天内到达，那么这位僧侣和他的一小群弟子也还在那里。
如果玩家们没有意识到，埃伦瑟会在一个安静的时刻确保角色们明白，用他们的实力、诚实和动力给弗鲁姆留下深刻印象符合他们的长远利益。
如果角色们拒绝了这个任务，弗鲁姆会说一些关于他们不是他认为的那种人的话，他离开会议时非常生气。
如果角色们仍然拒绝他，他会伸手进他的束腰外衣，拿出一个软皮袋，把它交给角色们中的一个。
如果角色们愿意，他们可以带着马一起上船。`,mapGeometry:{imageRef:"adventure/HotDQ/021-tod-04-02.webp"}},{id:"scn_hotdq_0da",locationId:"loc_hotdq_0d5",name:"博德之门",activation:{condition:{type:"always"},priority:0},skeleton:["博德之门是一个繁忙的贸易中心，货物从北方和南方通过贸易之路的马车运输，通过剑之海的船只运输，从东方沿奇昂塔河以及从科米尔和森比亚运输而来。","博德之门位于河边的一个显眼峭壁上，俯瞰着一个优良的天然港口。","它分为三个截然不同的区域：上城区，这里是最富有和最有影响力的公民居住的地方，也是城市的市场（广阔市场）所在地；","下城区，环绕着港口，大部分城市的商人居住和经营业务的地方；","以及外城区，位于城墙之外，大部分城市的劳工居住在从拥挤但干净到恶劣不等的条件下。"],flesh:`博德之门是一个繁忙的贸易中心，货物从北方和南方通过贸易之路的马车运输，通过剑之海的船只运输，从东方沿奇昂塔河以及从科米尔和森比亚运输而来。博德之门位于河边的一个显眼峭壁上，俯瞰着一个优良的天然港口。它分为三个截然不同的区域：上城区，这里是最富有和最有影响力的公民居住的地方，也是城市的市场（广阔市场）所在地；下城区，环绕着港口，大部分城市的商人居住和经营业务的地方；以及外城区，位于城墙之外，大部分城市的劳工居住在从拥挤但干净到恶劣不等的条件下。

根据时间安排，角色们可能只需要在博德之门等待几天，或者最多等待十天。大部分时间应该用来联系弗鲁姆推荐的商人，并安排事务，以便他们能够在邪教的马车到达时发现它们。

Frume的联系人是一个名叫Ackyn Selebon的人类商人。他在城市城墙北部的外城经营着一个运输设备业务，在被称为Blackgate的地区。他销售长途货运所需的所有物资：马车、绳索、网、润滑油、链条、轮子等。他的商店还修理马车。他并不直接参与雇佣商队的守卫，但他认识一些从事这项工作的人。有他为角色们担保，他们应该不难找到作为北上商队守卫的工作，但他不能为他们提供特定商人的工作。

博德之门不允许马车、驮兽、马匹甚至狗进入城市。街道非常狭窄、陡峭，而且由于频繁下雨而变得滑腻，重型马车会构成威胁。实际上，这是博德之门成为如此繁华商业中心的原因之一：例如，要从南部运送货物穿过城市到北部，它们必须在外城东边的城墙外卸下，然后由搬运工步行穿过城市，然后在城市北部重新装上不同的马车以继续它们的旅程。没有道路方便地绕过这座城市——这是城门的奸商中介努力维持的情况。大多数商人发现，当他们到达博德之门时，将他们的货物卖给那些中介和寄售商，从遥远的地方购买新的货物，然后掉头回家，在那里他们可以再次以利润出售新货物，这样更容易。

与货车一样，守卫很少在博德之门进行连续的旅行。前往北方的商队通常在黑门雇佣守卫，那里是北行货车开始它们旅程的地方。塞莱邦告诉角色们，如果他们在他商店附近的任何酒馆或帐篷酒吧闲逛，他们肯定会看到所有的北行交通。如果潜在雇主询问，他们不应该犹豫使用他作为一个推荐人。

从博德之门向北的旅程是艰巨的，因此商人们为了安全起见一起旅行。每位商人都独立雇佣守卫，但普遍的看法是如果每个人都雇佣两到三名守卫，并且有足够的货车一起旅行，商队就会得到很好的保护。

在几天之内（等待时间由您决定，以及您为货物从营地到达而制定的时机），角色们发现了他们在高原上的邪教营地认识的人。瑞兹米尔作为半龙，不能在博德之门公开旅行；她会被暴民攻击。然而，这座城市的富裕精英经常为了舒适和隐私，乘坐有屏风或帘子的轿子在街上行走。瑞兹米尔也是如此。如果他们仔细观察，可能会在帘子短暂分开时瞥见她。

瑞兹米尔 和她的保镖来到塞莱邦的院子购买五辆货车和物资（在城市南部卖掉了其他货车）。一旦准备就绪，当地的搬运工将商品和物资打包到货车上，用帆布覆盖它们，并将其固定。

如果他们愿意冒险，可以向邪教徒申请，但其他商人也在为明天出发做同样的准备。从商人和旅行者列表中选择任何人作为潜在雇主。每个角色进行一次魅力（游说）或力量（运动）检定，他们喜欢哪个就用哪个。检查下面的结果。

所有的雇佣都是为前往深水城的旅程。中士需要管理两到五名其他守卫。保镖需要紧跟雇主并保护他或她免受伤害。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_jamna_gleamsilver","npc_ontharr_frume"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`当角色们认出来自邪教营地的熟悉面孔时，邪教徒们正在搬运或护送一个轿子，瑞兹米尔就坐在里面。
在角色们识别出邪教徒的马车并看到他们的安排后，他们应该很容易找到作为守卫的工作。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_0dd",locationId:"loc_hotdq_0d5",name:"同行旅伴",activation:{condition:{type:"always"},priority:0},skeleton:["在这次旅程中，角色们有机会遇到来自费伦各地的人们。","商人、雇佣兵、朝圣者、学者、小偷和探险家都在伟大的贸易之路上交流。","在旅途中有两个非玩家角色特别重要：阿兹巴拉·乔斯 和 贾姆娜·烁银。","他们都是在距离深水城大约120英里的Daggerford加入商队的，这也是商队最后一次进行为期一天的休息的地方。","他们不是一起旅行的；"],flesh:`在这次旅程中，角色们有机会遇到来自费伦各地的人们。商人、雇佣兵、朝圣者、学者、小偷和探险家都在伟大的贸易之路上交流。

在旅途中有两个非玩家角色特别重要：阿兹巴拉·乔斯 和 贾姆娜·烁银。他们都是在距离深水城大约120英里的Daggerford加入商队的，这也是商队最后一次进行为期一天的休息的地方。他们不是一起旅行的；在Daggerford同时出现是巧合。

阿兹巴拉·乔斯（数据见附录D）是一名男性人类，也是塞尔的红袍巫师。红袍巫师普遍不受欢迎且不被信任，因此他费了些心思掩饰自己的成员身份，总是戴着一顶带耳颈护耳的羊毛帽，遮住自己剃光并纹身的头。这并非特别有效的伪装；成功通过DC 15感知（察觉）检定的角色会注意到帽子下露出的纹身边缘。然而，许多塞尔人都有剃光并纹身的头，但只有少数是红袍巫师。当巫妖萨扎斯·塔姆夺取控制权时，无数塞尔人逃离了他们的国家，因此他们在剑湾并不完全陌生。如果被询问，乔斯会声称自己只是另一个塞尔流亡者，试图在他的国家被亡灵怪物控制时寻找避难所。事实上，除了否认自己是红袍巫师之外，这一切都是真的。

乔斯 在邪教的一辆马车上买了个位置，尽管他们在旅途早期拒绝了所有其他寻求通行的人。他不与其他旅行者交往，也很少与任何人说话，除了那个似乎是邪教徒首领的人。

贾姆娜·烁银（见附录D以获取具体数值）是一位女性侏儒，也是一个名为黑暗网络的神秘组织——也就是众所周知的散塔林会的成员。表面上，黑暗网络提供雇佣兵和其他形式的肌肉力量。非正式地说，它被认为是一个类似于广泛盗贼行会的犯罪社会。秘密地，它的领导者寻求将他们的影子之手伸入费伦的每一个王座房间和统治委员会的议事厅。像竖琴手一样，散塔林会也知道龙之邪教正在行动，他们需要知道邪教的计划，这样他们就可以防止邪教干扰散塔林会自己的计划，也许还可以利用掠夺的可能性。

这就是Gleamsilver加入商队的原因。黑网的间谍得知邪教正在向北运送货物，和她一样，她的任务是弄清楚他们运输的是什么，以及货物的目的地。她的上级严肃考虑过用伪装成土匪的雇佣兵消灭商队，抢劫货车，并折磨邪教成员以获取所需信息。幸运的是，对角色们来说，Gleamsilver说服了她的上级给她一个机会，用不那么血腥的方式来揭露真相。如果到了商队到达深水城时她还没有找到有用的东西，她将执行计划B——涉及大规模谋杀的那个计划。

尽管他们的观点之间存在巨大的鸿沟，但黑暗网络和竖琴手有一个共同的敌人，这正促使他们进入一个不太可能的联盟。格莱姆希尔弗是一个英雄的反面——她自私自利，是一个熟练的小偷和骗子，并且愿意谋杀任何阻碍她实现目标的人。

这二十个非玩家角色列表是为了方便您快速使用而提供的。当然，您可以根据需要更改有关他们的任何细节。利用他们来充实商队，为旅程增添趣味，帮助使旅行变得生动，并让角色们在路上有可以喜欢和保护的人，或者不喜欢和争吵的人。

Ulyeltin是这个商队中一个独立的马车夫，拥有两辆马车。两辆马车都装载着加工过的毛皮和未经加工的皮革。他是一个粗野的男人，身上没有一丝文明的痕迹。他不是不友好——只是有异味、粗俗，而且完全没有礼貌。另一方面，他的第二辆马车的驾驶员和两名工人则非常愉快。

Urnpoleshurst 本职是个律师，但天性却像只臭鼬，他正从博德之门搬到任何不是博德之门的地方。围绕商队的流言是他因丑闻被驱逐，这很难让人不相信。他对每个人都心存疑虑，并且会毫无预警地提出极端的指控。

啤酒和麦芽酒非常普遍，以至于长距离运输它们赚不了多少钱。但这正是Sechepol货车上装载的东西。他打算在路上通过向商队中的同伴出售他的存货来赚钱。他很懂外交手腕，并且有天赋能够在争论升级到暴力之前让每个人都满意地平息争端，但他对装备和马匹很粗心——这个缺点可能会引起那些讨厌看到马因疏忽而受到虐待的人的不满。

Lewel的马车装载着来自楚尔特丛林的异国木材，供深水城的大师级木工和橱柜制造商用来制作精美的家具。她在性格上与Beyd Sechepol完全相反：对人不耐烦，但对自己的马车要求严格，并且非常宠爱她的动物。

Agetul已经多次进行过这次旅行，并且从不犹豫地向别人炫耀她的经验。她是一个完美主义者，并且她希望其他人知道这一点。

Tobun在过去的四十年里驾驶货运马车穿越费伦，从深水城到卡利姆波特，从博德之门到希尔斯法。他是故事和传说的宝库，但在他的故事中很难分辨真实与虚构。如果有人质疑他故事的真实性，他会变得好争论，然后变得忧郁和怀恨在心。只要旅行者站在他的好一边，Tobun就是一个极好的旅行伴侣。

Imsa名字背后的原因显而易见：她从头到脚都是绿色的。她的皮肤、头发、眼睛、指甲、牙齿——她身上的一切都是绿色的。她坦言自己正在前往深水城寻找治疗她状况的方法。这种颜色似乎并没有困扰她，但如果有人问及她为何会变成这样，她就会显得慌乱。只要对话不涉及她的过去，她还是很友好的，尽管有些安静。

这位雄心勃勃的商人正在从安姆运送香精油和香水，希望从深水城的贵族和花花公子那里获得巨大的利润。他不断地谈论金钱：他打算赚多少，他将如何花掉它，以及别人会因此而羡慕他。在整个旅程中，他甚至不会花一个铜板请别人喝一杯或买一个烤萝卜。

Lasfelro有时会莫名其妙地突然唱起欢快的歌曲，讲起简短的笑话。他的声音是优美的男高音，他的笑话非常有趣。但这些社交的情绪总是很短暂。其他时间，他像坟墓一样沉默，忧郁地盯着前方的道路，几乎不动地坐在他的马车上，看起来几乎不呼吸。没有人知道他的马车里装的是什么，但它由一个沉思的石像鬼守护着，石像鬼被一根细银链拴在马车上。

Widris 像雇佣兵一样诚实勇敢。她在南方生活多年，现在想看看遥远的北方的雪地和冰海，体验真正寒冷的风是什么感觉。

尽管洛斯维乌斯的鼻子对于一个半身人来说已经相当大了，但"长鼻子"这个绰号之所以落在他身上，却是因为另一个原因：他对一切都充满好奇，包括别人的事务，尤其是别人的尴尬秘密。洛斯维乌斯并不是为了寻找勒索材料而到处窥探。他对人们不谈论的事情有着无法抗拒的好奇心。如果他在队伍中，角色们很可能会在他们转身时发现他在翻看他们的财物。

努哈尔和他的哑巴兄弟塞尔维克正在搬运由科米尔精灵制作的精美木雕。虽然他的兄弟只能通过手语交流，但努哈尔可能是角色们见过的最善于表达的人。话语从他口中流出，就像米利尔的竖琴中流淌出的音乐。他很少有什么话要说的事实，似乎从未阻止他说话或别人倾听。

一批卡利沙丝绸将使尼尔希特·维尔瑟在深水城成为富翁，或者他这样认为。不幸的是，他在购买丝绸时没有仔细检查，丝绸被虫子侵染了。如果在旅途中有人发现这些虫子并向维尔瑟指出，他会因为愤怒和悲伤而失去理智。

艾瑟伦在博德之门外的农田长大，这是她第一次离家超过两英里远的旅行。她聪明、坚韧，并且擅长使用长矛和弓箭，但她对于她阿姨的农场以外的世界或不诚实的人一无所知。她的阿姨，一个明智的女性，相信这次旅行对她有好处。

伊文莫尔是一位独立的马车夫，他运输异国情调的鸟类到深水城利润丰厚的市场。他是一个固执、好争论的人，对几乎所有事情都有强烈的意见，但当有人愿意坐下来和他无休止地争论时，他在请客喝酒方面却非常慷慨。

没有人知道Perethun最终会去向何方，或者为何而去。他独自吃饭，很少说话，总是坐在马车后面，带着渴望的目光凝视着已经走过的道路。唯一能让他从这种壳中出来的是赌博游戏。他赌得热闹且技艺高超。

或许，那些在贸易之路上颠簸、摇晃的马车里搬运昂贵、易碎的瓷器的人，一定是天生的乐观主义者。在萨玛达格的世界里，天空总是蓝色的，天气总是晴朗的，明天的前景总是光明的。如果他能守住自己的钱财，他可能已经是个富有的人了，但他对每一个经过他身边的流浪儿和不幸的故事都心软。

在沙阿尔的家乡部落中，苏勒斯德格的名字意味着"像屋梁一样高"。在剑海岸，他只是被称为"长杆"。他身高7尺5英寸，可能是角色或商队中其他人见过的最高的人。他不怎么说话，但当他说话时，人们通常会倾听。

不久之后，商队里的每个人都会知道要避开提吉特·斯凯什。她容易发怒，一旦有事情激怒她，她就会更快地拔出她的刀剑。她诚实得有点过分，从不放过任何一个机会告诉人们她为什么生气，这样他们将来就可以改正自己的行为。她不会容忍欺凌行为。

安静、谦逊的韦龙德·托罗哈尔在贸易之路上驾驭马匹或骡子的能力无人能及。她有一种神奇的本领，只需轻轻一抖缰绳、一声口哨、一甩鞭子，就能让动物明白她的意图。泥泞、石头和冰面在托罗哈尔驾驭下似乎根本不是障碍。她内心是个充满浪漫情怀的梦想家，她关于久远失落的爱恋和受挫激情的故事能让坚强的男人泪流满面。`,spotlightRefs:[],presentNpcIds:["npc_azbara_jos","npc_jamna_gleamsilver","npc_ontharr_frume"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/HotDQ/022-tod-04-03.webp"}},{id:"scn_hotdq_0f5",locationId:"loc_hotdq_0d5",name:"路上的生活",activation:{condition:{type:"always"},priority:0},skeleton:["从博德之门到深水城的路程是750英里。","马车或骡车每天可以行驶15英里，这取决于条件。","动物们每工作六天后需要休息一天来恢复体力。","综合考虑，预计这次旅行需要两个月。","离开博德之门的商队包含了龙之教派的三辆马车，外加2d4辆。"],flesh:`从博德之门到深水城的路程是750英里。马车或骡车每天可以行驶15英里，这取决于条件。动物们每工作六天后需要休息一天来恢复体力。综合考虑，预计这次旅行需要两个月。

离开博德之门的商队包含了龙之教派的三辆马车，外加2d4辆。并非所有旅行者都是商人。一辆马车可能载着一个迁往北方的家庭，或者是一个前往深水城执行任务的外交官。人们和马车在路上加入商队，其他人则根据生意和命运的安排离开。有些旅行者骑马，有些步行在马车旁边，有些则支付商人费用乘坐他们的马车。在几个场合，角色注意到教派的马车夫即使有空闲空间也拒绝乘客。

没有迹象表明邪教的马车与其他典型的商人向北运输货物的马车有任何不同。在白天，它们不会聚集在一起，晚上也不会一起露营。据其他人所知，它们唯一的联系就是它们都是这个商队的一部分。

瑞兹米尔 和她的八名守卫在商队之前秘密离开博德之门，快速向北骑行。他们前往死灵之地的纳里塔尔城堡，直到 第六章 才会再次出现。她留下了十二名 警卫。每辆马车都有一名随行，充当车夫的守卫和助手。另外九名伪装成私人旅行者，分成两个不同的小组，在商队中寻求同伴和保护以完成他们的旅程。

马车每天行驶约八小时，途中会停下几次给马和骡子喂食和饮水。许多夜晚都是在路边露营度过。如果旅行者希望更舒适些，大多数小镇都有路边客栈，而专为马车商队服务的带围墙的旅馆每隔几天就会有一处。在这些带围墙的院落中，动物和旅行者可以舒适地休息，而马车则安全地锁在里面。第五章的地图上显示了一座曾经用于此目的的建筑。如果需要，它可以作为典型旅馆的模型。

旅程中最困难的部分在开始附近。从博德之门向北旅行几天，商队就会进入被称为死者之地的乡村。道路蜿蜒穿过点缀着古老战场、石桌和土堆的小山。普遍的看法是，在死者之地的山顶夜间点火是一个非常糟糕的主意，因为光亮会吸引方圆数英里的怪物。穿越这片领土需要几天时间，在这期间每个人都会感到紧张并保持警惕。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_jamna_gleamsilver","npc_ontharr_frume"],availableInfoIds:[],encounterIds:["enc_hotdq_0f5"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_0f6",locationId:"loc_hotdq_0d5",name:"随机道路事件",activation:{condition:{type:"always"},priority:0},skeleton:["向北的旅程大约持续四十天，大多数旅行者希望这些日子是单调且无事发生的。","但这是费伦，情况从不会如此。","许多天过去了，没有发生什么激动人心的事情，但其他时候可能会遇到怪物袭击、奇怪的事件、路边休息站的激动人心的事情、与NPC的会面，以及邪教马车目的地的永恒问题。","您可以随意安排这些事件。","使用一些，使用全部，或者自己创造更多。"],flesh:`向北的旅程大约持续四十天，大多数旅行者希望这些日子是单调且无事发生的。但这是费伦，情况从不会如此。

许多天过去了，没有发生什么激动人心的事情，但其他时候可能会遇到怪物袭击、奇怪的事件、路边休息站的激动人心的事情、与NPC的会面，以及邪教马车目的地的永恒问题。您可以随意安排这些事件。使用一些，使用全部，或者自己创造更多。

对于这样长度的旅行，每小时检查随机事件是过度的。贸易之路上有很多旅行者，相对（如果不是完全）安全。每天通过掷一个d20来检查随机事件。如果掷出16或更高，就会发生以下所示的一个或多个事件：

16 表示一个事件在上午发生

17 表示一个事件在第一个休息站发生

18 表示一个事件在下午发生

19 表示一个事件在傍晚或夜间发生

20 表示一个事件在上午发生，另一个在下午或夜间发生

当事件发生时，选择一个适合地点、时机以及角色迄今为止的背景故事的事件，或者你可以掷一个d12来随机选择一个。如果需要立即行动的刺激，你可以用随机的匪徒（白天）或怪物（夜晚）攻击来替代任何其他事件。

这些事件的经验值奖励由您决定。我们建议每个角色为每个成功解决的情况获得300经验点。理想情况下，角色有机会完成这些事件中的八到九个。如果您使用里程碑经验规则，角色在这次旅程结束时将达到5级。

另一组冒险者加入了商队，或在同一家路边客栈过夜。从他们的吹嘘来看，他们击败了费伦所能提供的最凶猛的怪物和敌人。他们看起来富有，充满了激动人心的故事，并与一位雇佣了角色之一或多个的商人建立了联系。第二天早上，那位商人告诉角色们他们的服务不再需要，因为他已经雇佣了更有经验守卫。

这些新来的人是一群演员，他们试图通过表演来支付前往下一个城镇的路费。他们赌博认为不会有危险出现，需要他们挺身而战。当危险真的出现时（这肯定会发生），很明显他们中没有一个战士或法师；他们是五个人类平民，拥有过剩的魅力和闪亮的舞台道具作为武器和盔甲。在他们从危险中被救出后，角色们的前雇主，现在适当地受到了惩罚，愿意以略高的工资重新雇佣角色们。

一位旅行者——一位贵族——经常看到他虐待他的马。他让马的颈圈和肚带磨损马的皮肤，导致疮伤，还吝啬马的饲料，并在疼痛和饥饿的动物拉得不够用力或不够快时鞭打它们。最终，他的一匹马会在挽具中倒下，他要么在道路上将其打死，要么将其放开并让它死去，除非有一个或多个角色介入。他有一名骑士和一名魔法师作为保镖随行。

在高空中，两只鹿鹰正在观察道路，寻找它们产卵前可以吞噬的新鲜心脏。它们在很容易被误认为老鹰的高度盘旋。每个角色在看到这些生物时可以进行一次DC 15智力（自然）检定。成功意味着它们在首次俯冲攻击前就认出了皮瑞顿。失败意味着角色突袭。

邪教的一辆马车在一个困难的拐角处翻车，或者因为车轮在岩石上破裂而翻倒。在滚落出来的箱子中，有一个箱子摔碎了，露出了数十件用羊毛包裹保护的美丽珠宝。这是角色们看到一些走私品的绝佳机会，甚至可以通过帮助邪教徒修理他们的马车来与他们建立友好关系。

邪教徒们因为人们看到了他们洒落的货物内容而愤怒。他们从巨龙喉舌 瑞兹米尔 那里得到的直接指示是确保这些材料的安全和保密。对那些表现出对珠宝极大兴趣或提出问题的目击者，可能需要采取沉默措施。NPC目击者可能会在一夜之间消失或因突发疾病而意外死亡（成功的 DC 10 感知 [医药] 检定可揭示为中毒）。同样，那些表现出过多好奇心的角色也可能成为攻击目标。

商队中的某个人看中了一个角色所拥有的珍贵物品。这个NPC试图购买它，但出价很低。这个NPC在一天中坚持不懈，变得越来越讨厌，但出价并没有更慷慨。除非角色采取特别的预防措施，否则这个物品会在一夜之间消失。那个NPC没有这个物品，并对指控感到愤怒。前一天目睹了这些对话的另一个人决定，另一个NPC为夜间偷窃提供了完美的掩护，并拿走了失踪的物品。要找到这个物品，角色需要暗中搜查人们的包裹和马车，因为很少有人会同意让他们的财物被翻找，就好像他们是普通小偷一样——特别是对于一个普通小偷来说。

在经过两天两夜的降雨、闪电以及风中奇怪的呼啸声后，角色们醒来时发现周围的乡村被真菌覆盖。它无处不在，包括道路上。当任何人踩到蘑菇时（几乎不可能不踩到），它会喷出一股黑色孢子并发出痛苦的呻吟声。这些微小的尖叫者从一个巨大的菌丝体中发芽，该菌丝体从浅层洞穴下蔓延到该地区。它们可以通过一次成功的 DC 15智力（自然）检定来识别，但如果掷骰结果为10–14，角色会误认为它们是有剧毒的（其实不是）。

商人们非常害怕这些东西，拒绝驾车穿过它们，担心它们可能有毒或者更糟。除此之外，这些声音吓坏了动物，使它们变得难以控制。

蘑菇在雨浸透的地面上生长得如此之快，以至于人们几乎可以看到它们在变大。当人们第一次注意到它们时，它们的大小和香槟塞差不多；在一个小时内，它们长到了六英寸高，再过一个小时，它们长到了一尺高。之后它们的生长速度慢了下来，但到那时，商队中的大多数人已经确信一切都注定要完蛋了。

任何人都可以用重扫帚、镰刀或树枝在蘑菇丛中扫出一条路来。这种噪音令人不安。所有参与此过程的人都必须进行一次 DC 10 的体质豁免检定。失败意味着角色被悲伤和悔恨的情绪所淹没，这看似是因为听到了成千上万微小的痛苦哭泣和死亡呻吟，但实际上是由于吸入了未成熟真菌释放的轻度有毒孢子。受影响的角色将在 1d20 分钟后崩溃，再也无法面对这些声音。他们会连续几天做噩梦，直到毒素完全排除体外。你还可以施加更持久的效果，比如终身厌恶食用任何种类的蘑菇。

人们可以通过六个人工时的工作清理出一条通过蘑菇丛的道路（六个人可以在一小时内完成，或者三个人可以在两小时内完成）。

在一个美丽、阳光明媚的下午，一群鹿被发现在附近的山上吃草。旅行者们抓住这样的机会猎取新鲜肉类以补充食物储备。然而，这群鹿中包括一只壮观的雄鹿（使用赤鹿的具体数值），它在阳光下闪闪发光，好像它的皮毛是由黄金纺成的，它的鹿角是铂制成的。几乎每个能驾驭弓箭的商队成员都想捕获这只野兽。即使不是真正的黄金，它的皮毛也值一大笔钱。一些更为谨慎的人警告说，这个生物显然是一个受祝福的存在，杀死它会为商队带来厄运，但不超过两到三个人被说服。几分钟内，狩猎就开始了，鹿群散布到附近的森林和农民的田地里。

角色可以根据自己的意愿选择加入追逐、试图劝服他人、保护雄鹿或忽略此情况。通过成功的 DC 10 智力（求生）检定，可以在森林中追踪它。每经过 500 码必须进行一次新的检定。

这只雄鹿带领猎人进行了一场1500码的追逐，来到了森林中一个长满苔藓、被常春藤覆盖的废墟。在那里，可以发生三件事中的一件。选择最适合你游戏的那一个。

这只雄鹿可以被逼到角落，战斗并被杀死。它是一只普通的雄鹿，但拥有令人屏息的美丽金色皮毛。如果当地农民得知它被杀死了，他们会拿起草叉和长弓，威胁要冲进商队，除非支付500金币作为他们的损失赔偿；这只雄鹿给他们带来了好运。

这只雄鹿用森林语向角色们打招呼。它向他们保证他们走的是正确的路，并且必须继续沿着金色的河流前进，直到他们到达天空中的城堡。遗憾的是，他们的道路将充满艰辛和血腥。为了帮助他们，它向角色提供了一把+1长弓。长弓出现在他们面前的地面上，然后雄鹿消失在视线中，说道：'不是所有人都会活下来...'

这位年轻男性一丝不挂，要么戴着有角的头饰，要么头上长着精致的鹿角。他跪下来，用一种古老但能理解的精灵方言恳求角色们。他是一个精灵王子，他们周围的石头曾经是他统治的美丽城堡。但他被他所爱的女人的父亲诅咒了，每当他走出这些墙壁，就会变成一只金色雄鹿。他带着诅咒生活了如此之久，以至于他的王国被遗忘了，他的城堡变成了废墟，他甚至不再记得自己的名字。他认为某个地方的法师可以解除他的诅咒，但无论他走到哪里，人们都试图杀死他，为了得到他的金色皮毛。故事是真的；深水城中的几位法师可以解除诅咒。精灵无法在最后支付奖励，但角色们因为相信他并保护他，每人将获得500经验值。这项工作并不容易，因为商队里的人觉得他们的故事荒谬，并寻找机会杀死雄鹿。

当商队绕过道路的一个拐弯时，可以看到一百码外的路中间放着一个人头。远处，被动感知（察觉）得分15或更高的角色会认出，这个头实际上是一个被埋到脖子的人，他处于昏迷状态但仍然活着。当任何人接近到10码以内时，这一事实就显而易见了，就像他额头上写着的"背誓者"这个词一样明显。

被掩埋的人类因暴露和脱水而状况不佳。任何治疗魔法或一些水和一次成功的 DC 10 感知 (医药) 检定可以让他苏醒过来。

商队中的许多商人认为，无论是谁，如果有人或某物费心将他标记为叛徒并将他埋在贸易路上直到脖子，他可能确实值得这样的对待，应该被留在那里。从翻土上的车轮痕迹来看，其他马车确实在过去几天里经过了他。

将这个人从地里挖出来需要至少两名挖掘者花费至少两小时，而重新填埋这个洞需要另外一小时（你不能把路上的洞就那么留着）。

被埋葬的男子名叫卡隆·阿莫费尔（Carlon Amoffel）。他是一个人类间谍，也是竖琴手（Harpers）的成员；他除了被埋时穿的腰布外一无所有。

公开来说，阿莫费尔的故事是他违反了一个承诺，即答应娶一个女人。他解除了婚约，因为他发现她的父兄都是匪徒，并且他被期望加入他们。

他和他们执行的是完全相同的任务：追踪一批被偷的赃物向北运输。但是走私者——他确信他们是龙之崇拜教团（Cult of the Dragon）的成员——开始对他产生怀疑。阿莫费尔在一家路边客栈向另一个竖琴手传递了信息，商队成员目睹了这次会面。教团成员编造了一个故事，说他在向匪徒传递信息。商人们不愿意直接杀了他，但他们愿意让他被埋在路上，'让天意决定这个人的命运'。

阿莫费尔在深水城有竖琴手的联系人，并且熟悉这座城市。当这个商队到达目的地时，他可以成为一个有用的盟友。

经过一个悲惨的潮湿寒冷的一天，并预示着将变成更加潮湿、寒冷的夜晚，商队到达了一家大客栈。当他们进入温暖舒适的公共休息室准备安排过夜时，尴尬的客栈老板告诉角色们整个客栈都已客满；所有的私人房间都被占用了，公共休息室也已被预订为一个私人派对。商队需要在户外过夜。环顾四周，角色们只看到一个团体：一位贵族法官和他的三个人类业余爱好者随行人员。他们嘲笑角色们，同时发表诸如"睡个好觉"和"祝你晚上愉快"的评论，并在他们呼吸下低声侮辱角色们泥泞的衣物和低贱的出身。我们也不得不为它们预订了整个马厩。你懂的，我相信。"他的傲慢朋友们对此大笑不止。

在马车里度过这个夜晚对角色们来说将是艰难的，但对于那些无保护的马和骡子来说将是痛苦的，而这唯一的原因就是客栈里那些窃笑的小家伙的残忍和傲慢。

客栈里的NPC不会被任何形式的说理、辩论或金钱提供所影响。他们觉得这种情况极其有趣，似乎对商人们和他们的动物在冰冷的雨中整夜受苦的前景感到高兴。他们抓住每一个机会挑衅和刺激角色们和他们的同伴旅行者，包括当没有其他人在客栈里面时，从客栈的门口和窗户。

实际上，这些NPC是四个伪装成普通客人的老兵，他们前往博德之门寻找工作，并打算在别人的不幸中寻找乐趣。一旦暴力爆发，他们就放弃了所有的伪装。

当商队到达他们夜间的停留点时，有两位丰满的双胞胎姐妹已经在他们之前到了那里，正在搭建营地并照料她们的马匹。阿里埃塔和泽丽娜·因尼瓦对一些旅行者产生了好感——可能是，但不一定是，一些角色——并花了整个晚上询问他们的过去，他们要去哪里，他们是否有家人等等。这对姐妹实际上是两个变形怪。她们可以选择在那天晚上攻击某人，或者加入商队几天，同时研究旅行者并选择她们的受害者。当决定攻击的时候，她们会等到天黑后，然后试图通过用熟悉的声音呼救来将目标从其他人身边引开。对于角色们和他们的同伴旅行者来说，幸运的是，如果其中一个被击败，另一个会在一串诅咒和复仇威胁中逃走。

贸易之路环绕着巨大的特罗巴克和雾蒙蒙的森林，但它穿过许多其他较小的森林，这些森林在地图上没有标记。当商队穿过这样一个林区时，三只伊特怪和两只巨蜘蛛袭击了它。它们主要感兴趣的是抓马，而不是货物，但如果得不到马，它们也不会拒绝抓人。两只伊特怪追逐马匹，而第三只伊特怪和巨型蜘蛛则让商队守卫忙于应对。一只伊特怪可以在3轮内将马从挽具中解开。之后，它们退回到树林中，用蛛网牵引着马匹离开。没有马，马车就会滞留。角色们的雇主坚持要他们追捕伊特怪并夺回被盗的马匹。

这些动物在灌木丛中留下了易于追踪的踪迹；成功的DC 10 感知（求生）检定足以跟紧它们。马匹被带到离此约半英里远的蜘蛛精巢穴。如果他们停下来观察几分钟，他们会看到蜘蛛精驱赶巨型蜘蛛离开，同时准备享用马肉。然后角色们可以只与蜘蛛精战斗6轮，之后巨型蜘蛛会因战斗声返回。然而，角色们不能拖延太久，因为蜘蛛精不会浪费时间，很快就会杀死并开始食用马匹。

这是死者之地区域的理想事件，如果在那里发生的话，但也可以在任何地方使用。

商队看到前方正在进行一场战斗。一辆货运马车搁浅在路上，其拉车的动物已经死亡。一位商人（贵族）和三名警卫躲在马车下，用拖到轮子之间的板条箱作为掩护。他们有充足的十字弓和弩箭，但六个大地精和一名大地精长官似乎很乐意将他们围困到日落，届时他们计划利用黑暗作为掩护冲向马车。这些是乌尔沙尼大地精，他们异常野蛮的外表（即使对于大地精来说）是他们的特征。乌尔沙尼大地精会用狼皮装饰自己，在盾牌上画上座狼的头，并且在他们的盔甲和衣物中融入其他狼的部件和图标。

首先必须赶走大地精，然后照顾受伤的人员，接着必须对搁浅的马车采取一些措施。商人有钱购买更多的马匹，如果有任何人愿意出售的话。否则，他将前往下一个客栈搭便车，在那里他可以购买动物，而他的三名守卫留下来。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_jamna_gleamsilver","npc_ontharr_frume"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[50],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们还保留着他们的马，他会赞赏它们，并提出购买一匹或多匹来替换他所谓的"无用的劣马"。
如果角色在第二天早上公开指责这个NPC，他们会树敌；
如果角色中没有人说那种语言，它会换成精灵语，如果还是没有人回应，它会尝试用带有浓重口音的混合通用语。
当角色们搜索倒塌的废墟时，他们没有发现雄鹿的踪迹，却看到一个瘦削的人，他看起来像是一个有着鲜亮金色皮肤的木精灵。
如果角色们允许他和他们一起旅行并保护他，他将尽他所能在旅程结束时奖励他们。
如果角色作为NPC商人的守卫工作，至少有一个雇主属于这个群体。
如果角色们挖出他，他们会在他的手臂上发现一个竖琴手的纹身。
如果角色中有竖琴手成员，并且他们向阿莫费尔透露了他们的联系，他会告诉他们真实的故事。
如果角色们询问是否可以在马厩过夜，其中一个贵族说："我们的马对与谁共享空间非常挑剔。
如果角色们不开始打斗，商队中的其他人可能会这么做。
如果角色们行动迅速，他们有很大机会救回活着的马匹。
如果角色们直接冲进去，他们将会受到三只伊特怪和两只巨蜘蛛的攻击。`,randomTableIds:["tbl_hotdq_0f6_0"],contentRole:"reference"},{id:"scn_hotdq_105",locationId:"loc_hotdq_0d5",name:"计划中的道路事件",activation:{condition:{type:"always"},priority:0},skeleton:["在贾姆娜·烁银和阿兹巴拉·乔斯加入商队后，必须发生三个计划中的事件。","它们的时机由您决定。","让每个角色在旅程的第一天进行一次魅力检定，但不要告诉玩家这是为了什么。","在旅程中的某个时刻，魅力检定结果最低的角色被一个邪教徒认出。","邪教徒们认为，最好的情况是，这个角色一定是从邪教中叛逃出来的。"],flesh:`在贾姆娜·烁银和阿兹巴拉·乔斯加入商队后，必须发生三个计划中的事件。它们的时机由您决定。

让每个角色在旅程的第一天进行一次魅力检定，但不要告诉玩家这是为了什么。在旅程中的某个时刻，魅力检定结果最低的角色被一个邪教徒认出。邪教徒们认为，最好的情况是，这个角色一定是从邪教中叛逃出来的。最坏的情况是，他或她是一名间谍和破坏者。在旅程的一个戏剧性时刻，当商队远离博德之门时，这意味着麻烦。

或者，您可以不用掷骰子，直接让某人自动识别角色之一，以便使用这个事件。

如果某个角色被认出来，允许该角色进行一次DC 15的感知（洞悉）检定。成功意味着该角色发现一个邪教徒在可疑地监视他或她，记录该角色与谁交谈、何时进食以及在何处睡觉。在几天内，应该很明显这个邪教徒已经认出了该角色。对于角色们来说，这个问题的唯一永久解决方案是谋杀；必须消除这个怀有怀疑的邪教徒，以免他或她将怀疑分享给其他人。善良的角色可能会不情愿采取这一步；这就是角色扮演。如果他们能找到另一种方式，那是最好的，但一旦敌对势力认出了某人，情况很可能以死亡告终。

商队离开达格福德的第二天，让每个角色进行一次感知（洞悉）检定。（或者，您可以允许进行一次魅力（欺瞒）检定，允许角色利用他们对欺骗的了解来识别何时其他人在使用同样的技巧。只有在欺瞒技能上受过训练的角色可以选择这个选项。）按以下方式解释结果。

9或更低：角色没有注意到任何异常。

10到12：角色注意到最近加入商队的侏儒对同时加入并作为乘客登上邪教马车之一的人类表现出兴趣。他们并不在一起，但在休息时，侏儒经常悄悄靠近到足以偷听到该人类可能说的任何内容的地方，也有人看到她在邪教徒忙于其他任务而不是严密守卫马车时，徘徊在邪教马车附近。

13到15：角色注意到侏儒对他们表现出兴趣。她已经和他们中的几个交谈过，提出无害的问题并评论天气。她给人留下的印象是，她完美地注意到了有关人和周围环境的每一个细节。

16或以上：角色注意到了上述所有情况，并有这样一种感觉，即格莱姆希尔佛（Gleamsilver）也意识到角色们在观察她。

如果有人向格莱姆希尔佛（Gleamsilver）展示竖琴徽章，她会简短地回应"收起来，傻瓜"，然后离开。

在商队距离深水城四天路程的那天早晨（在'不受欢迎的关注'事件两天后），当角色们正要坐下吃早餐时，光辉银走向他们。她环顾四周，确保没有邪教徒在看，然后她把手指放在嘴唇上，接着拿走了他们中的一个人即将要吃的一碗燕麦粥。

角色们的粥里不再有骨头碎片了。Gleamsilver 展示给他们的那一片其实在她把匕首插入碗里之前就已经粘在了匕首的背面。如果检定成功，告诉他们发现了几个可能骨头碎片的小块，但它们也可能是燕麦壳、锯末或虫卵。同时告诉他们，两名邪教徒不时朝他们的方向张望，但似乎在试图掩饰他们的兴趣。

那天晚上，在大多数旅行者都已经安顿下来之后，格莱姆希尔佛（Gleamsilver）来到角色们身边。如果之前没有进行过自我介绍，她会先介绍自己。否则，她会直接切入正题。

实际上，她已经知道了，但她需要弄清楚角色们知道什么。她尽可能多地从他们那里获取信息，同时除了确认他们已经知道的事情外，几乎没有提供任何回报。

格莱姆希尔佛（Gleamsilver）对于她为什么对这一切感兴趣特别谨慎。这位侏儒从未提及过 散塔林会 或 Black Network。她也没有直接说过她是为 Harpers 工作的。格莱姆希尔佛是捕捉最微妙线索的专家，并利用这些线索来表现得似乎知道她实际上不知道的事情，以及说出人们想要或期望听到的话。她利用这种天赋在与角色的所有交往中占据巨大优势。在15或更高的点数上，角色怀疑格莱姆希尔佛没有告诉他们一切，但没有发现实际的谎言。在任何其他结果上，角色们没有发现不诚实。

在"谁是你的朋友？"事件发生后的两天，营地因一起谋杀案而惊醒。一名担任马车守卫的邪教徒在夜间被谋杀。他被人用剑刺中背部（伤口太大，不可能是匕首造成的），然后被丢在他倒下的邪教马车下。

死者的同伴立即指控其中一位角色，并要求检查角色的武器。任何那个大小的剑都会足够接近。马车周围有许多脚印，但成功的 DC 10 智力（调查）检定可以确定这些脚印都是来自早上围绕尸体的人群。地面在夜间被清扫过以去除脚印。

到了旅途的这一点，角色们应该已经受到其他旅行者的欢迎；他们可能已经多次挽救了无数生命，并且不止一次地拯救了整个商队。另一方面，邪教徒们并不那么受欢迎。他们保持距离，甚至有点古怪。这对被告角色有利，因为许多人会站出来为他或她辩护。

如果一个角色建议马车的主人打开他们的箱子看看是否有东西丢失，指控就会消失。（如果一个角色没有提出这个建议，人群中的旁观者会这么做。）不同寻常的是，阿兹巴拉·乔斯走上前来，试图平息局面，在这个过程中，他说的话比迄今为止任何人一次听到的都要多。

最终，商队中最杰出的商人同意，没有证人，什么也做不了。神灵会惩罚有罪的一方，生活将继续。

大多数邪教徒从此以后看待被指控的角色时，除了毫不掩饰的仇恨之外，再无其他。这种敌意在第五章中变得重要。

凶手当然是贾姆娜·烁银。知道货物中有什么，她无法抵制自己取一些的诱惑。盗窃本身是不可检测的，因为她没有留下任何迹象，而且邪教没有携带其掠夺宝藏的清单。守卫在行动中打断了她，不得不死；就这么简单。`,spotlightRefs:[],presentNpcIds:["npc_jamna_gleamsilver","npc_azbara_jos","npc_ontharr_frume"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`侏儒用匕首的刀片在你们的燕麦粥里戳了戳，然后把它举起来给你们看，那是一个沾满燕麦粥的小东西，看起来像一颗微小的珠子。她回头看了一眼邪教徒吃早餐的地方。"这是一小片骨头，"她低声说，"卷成一圈，这样你就可以在不察觉的情况下一口粥吞下去。一旦吃下去，它会在你体内慢慢展开，露出针尖刺穿你的内脏，慢慢杀死你。我怀疑你们的每顿早餐里都有。"当她起身离开时，她补充说，"我们今晚再谈。"

"我们不为同一批人工作，但我们都在同一边——我们都相信必须阻止龙之崇拜教团。我需要知道他们那些马车里装的是什么，以及他们要把它们带到哪里。你们愿意帮我查清楚吗？我们可以在今晚行动。"`,dmGuidance:`如果角色们在格林菲尔德的袭击者营地花费了很多时间徘徊并与邪教徒交谈，他们可能在那里与一个邪教徒进行了对话，而这个邪教徒现在成为了马车夫之一。
如果角色们推迟采取行动，邪教徒们会首先发动袭击，试图在角色的床铺上暗杀他们，或者可能安排一场意外——松动的车轮、断裂的车轴或受惊的头马可能是解决问题的有效方式。
如果角色们翻查他们的燕麦粥寻找碎片，让他们进行 DC 15 智力（调查）检定。
如果角色们告诉格莱姆希尔佛（Gleamsilver）他们对邪教货物的了解，她会表达感激和宽慰，因为她不需要冒险闯入他们的马车。
如果角色们还没有意识到阿兹巴拉·乔斯是泰伊的红袍法师，她会指出这一点，并提出为什么一个红袍法师会与龙之崇拜教团的成员混在一起的问题。
如果玩家请求使用感知（洞悉）来检测这位侏儒是否在说实话，让他们进行检定。
如果角色携带短剑，将会是一个匹配，尽管这并不能证明什么。`,mapGeometry:{imageRef:"adventure/HotDQ/023-tod-04-04.webp"},contentRole:"reference"},{id:"scn_hotdq_10c",locationId:"loc_hotdq_10c",name:"前方施工",activation:{condition:{type:"always"},priority:0},skeleton:["货物尽可能地向北运输，沿着贸易之路经过深水城，到达那条被不断扩张的死灵湖吞噬的大路。","曾经为商人和马车夫服务的加固路屋现在为劳动者提供食物，并保护筑路物资，它还帮助龙之邪教走私其宝藏。","当商队在两个月的旅途后驶入深水城，大多数商人分散到城市的市场、仓库和马厩。","他们已经到达了目的地，角色们被用银子支付并感谢他们的服务。","如果他们表现得很好，他们被告知可以随时找到这些托运人的工作。"],flesh:`货物尽可能地向北运输，沿着贸易之路经过深水城，到达那条被不断扩张的死灵湖吞噬的大路。曾经为商人和马车夫服务的加固路屋现在为劳动者提供食物，并保护筑路物资，它还帮助龙之邪教走私其宝藏。

当商队在两个月的旅途后驶入深水城，大多数商人分散到城市的市场、仓库和马厩。他们已经到达了目的地，角色们被用银子支付并感谢他们的服务。如果他们表现得很好，他们被告知可以随时找到这些托运人的工作。然而，角色们不能在深水城关闭自己的账户或观光太久，否则他们会在拥挤的大都市中失去宝藏马车。

邪教的马车并不遵循商队中的其他马车相同的模式。相反，它们朝城市北边前进，然后寻找过夜的地方。所有角色知道与邪教有关的人都在日落时聚集在同一个地点。阿兹巴拉·乔斯 在这段时间里一直和邪教徒在一起，而Jamna表达了她想和他们一起待到他们发现宝藏目的地的愿望。

邪教徒在深水城北边的一个马厩里花了一天时间休息他们的马。其他马车已经在那里，秘密地携带着来自剑海岸各地的宝藏到集合点。在白天，一些邪教徒访问了北城门内的一个大型仓库，那里堆积着准备向北运输的建筑材料，并且马车被集中起来并装载货物准备出发。

每个人都记得这个事件；彩色半龙几乎从未被看到，当它们出现时往往会引发警报。如果这个谣言是真的，那么这个半龙是与一队强大的骑马护卫一起向北行进。当然，这个谣言是真的，但不能完全确定。

通过四处打听，角色们得知通往北方的路叫做高路，曾经连接深水城和无冬城。一个寒冷的沿海沼泽地，名为死者之沼，位于道路和海岸之间。多年来，这个沼泽地不断扩张。每次它扩大，都会淹没道路，道路不得不向内陆更远处迁移。这种情况一直持续到一个世纪前，当时无冬城几乎被霍特诺火山的爆发所摧毁。随着城市的废墟，维持道路开放的努力就停止了。它不再有用途。

但现在，Neverember勋爵正在重建无冬城，道路再次变得必要。邪教徒访问的仓库是协调向道路建设营地运送物资的地方。如果货运司机去了那里，那一定是为了看看他们是否可以为付费运送物资到路头。他们是否在为供应商队雇佣警卫？当然，他们肯定是。死者之沼是野生和危险的。Neverember勋爵在这个努力中的代理人，一直在寻找工人来修建道路和保护工人的战士。那些工作的人员流动相当高。`,spotlightRefs:[],presentNpcIds:["npc_azbara_jos","npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"如果角色在深水城的北门打听与瑞兹米尔描述相符的人，他们会听说大约十天前有人在该地区目击了半龙的存在。",mapGeometry:{imageRef:"adventure/HotDQ/024-tod-05-01.webp"}},{id:"scn_hotdq_2d2",locationId:"loc_hotdq_10c",name:"深水城",activation:{condition:{type:"always"},priority:0},skeleton:["辉煌之城是剑海岸城市中最伟大的。","作为最多可容纳两百万居民的家园，深水城是一个稳定且通常和平的城市。","然而，深水城的某些区域对那些不小心的人来说可能是危险的，比如粗犷的码头区。"],flesh:"辉煌之城是剑海岸城市中最伟大的。作为最多可容纳两百万居民的家园，深水城是一个稳定且通常和平的城市。然而，深水城的某些区域对那些不小心的人来说可能是危险的，比如粗犷的码头区。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[192],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/HotDQ/117-tod-e-13b.webp"}},{id:"scn_hotdq_10e",locationId:"loc_hotdq_10c",name:"再次北行",activation:{condition:{type:"always"},priority:0},skeleton:["角色们在补给仓库很容易就找到了马车护卫的工作。","与商队不同，护卫不是由各个马车老板雇佣，而是由高地宪章公司雇佣，这是一个由行会和贵族家庭组成的联盟，与Neverember勋爵合作。","一个名叫Ardred Briferhew的人类老兵指挥着整个车队。","车队由六辆补给马车、十二名护卫（包括角色和Jamna）以及两打劳工组成，他们将出发去替换一群即将返回深水城休息一段时间的团队。","那些没有被雇佣为三辆马车车夫的邪教徒将作为劳工随行。"],flesh:`角色们在补给仓库很容易就找到了马车护卫的工作。与商队不同，护卫不是由各个马车老板雇佣，而是由高地宪章公司雇佣，这是一个由行会和贵族家庭组成的联盟，与Neverember勋爵合作。一个名叫Ardred Briferhew的人类老兵指挥着整个车队。车队由六辆补给马车、十二名护卫（包括角色和Jamna）以及两打劳工组成，他们将出发去替换一群即将返回深水城休息一段时间的团队。那些没有被雇佣为三辆马车车夫的邪教徒将作为劳工随行。

邪教徒们看到角色们再次出现并不高兴，因此角色们成了他们不满目光的目标。

运输队前往的工作营地位于海岸线上200英里处。大部分路程，道路蜿蜒穿过位于剑山和大海之间的崎岖沿海丘陵。在第七天晚上，运输队在山顶露营，角色们首次看到了死者之沼。这是一片寒冷的树木、灌木、泥泞的地面、积水、芦苇和猫尾草的纠结，延伸得比眼睛能看到的还要远。余下的旅程都在沼泽的视界之内。目的地在第十天左右到达。

前往深水城以北的旅程中不需要发生太多事情。你可以快速地叙述过去。根据你的选择，使用下面的随机遭遇来为旅程增添趣味。每天掷一个d20，并使用指定的遭遇。在第8天、第9天和第10天，掷骰子时加上2点。

记住，角色只是护送队伍的一部分。在《深水城北部遭遇战表》上列出的怪物是角色必须战斗的。与此同时，护送队伍中的NPC成员正在处理这里没有列出的其他怪物。假设在这些遭遇战之前，怪物和旅行者都保持警惕。每次遭遇战后，掷一个 1d4-2。结果是在战斗中其他地方被杀的NPC护送成员的数量。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},randomTableIds:["tbl_hotdq_10e_0"]},{id:"scn_hotdq_111",locationId:"loc_hotdq_111",name:"卡纳特客栈",activation:{condition:{type:"always"},priority:0},skeleton:["车队的目的地是卡纳斯路屋，这个地方在深水城和无冬城之间的贸易路线上曾经是一个旅馆，在贸易繁荣的时期提供服务。","当贸易停止时，它就废弃了，但现在道路正在重建，路屋已经修复并被用作供应库和马车停车场。","这部分冒险像是一个间谍故事。","擅长潜行的角色在这里应该能找到很多可做的事情。","工作营地正是它看起来的样子：为道路建设者提供物资的补给站。"],flesh:`车队的目的地是卡纳斯路屋，这个地方在深水城和无冬城之间的贸易路线上曾经是一个旅馆，在贸易繁荣的时期提供服务。当贸易停止时，它就废弃了，但现在道路正在重建，路屋已经修复并被用作供应库和马车停车场。这部分冒险像是一个间谍故事。擅长潜行的角色在这里应该能找到很多可做的事情。

工作营地正是它看起来的样子：为道路建设者提供物资的补给站。然而，它也是更多的东西：邪教从南方走私上来的货物的转运点。

当从南方来的货车抵达时，它们会一次或两次被带入院内进行卸货，然后移回外面停放。院内挤满了装在箱子和桶里的食物、木材以及无数其他物资。不能暴露在寒冷潮湿天气下或特别有价值的物资存放在仓库（区域3），任何有价值的东西都存放在与仓库相连的上锁的保险箱内（区域4）。只有营地主管，一个被称为Bog Luck的健壮半兽人（使用老兵的具体数值），有那间内室的钥匙。

博格·卢克多年前被招募进龙之教。唯一外在的迹象是，他总是随身携带的短剑的剑鞘上，装饰着一条与在龙孵化场（以及可能角色们现在还带着的；见该部分的区域12区域）看到的剑鞘上的图案相似的龙。当教派的马车到达时，他们的筑路货物通常会被卸载到院子里，但博格·卢克确保走私货物被存放在坚固的房间里。之后，他独自一人进入坚固的房间，并在属于教派的每个纸箱上画上一个符号。

在储藏室的地板上有一个伪装过的活板门。可以通过一个 DC 10 感知（察觉）检定找到它。这个活板门通向一条滴水的、粘滑的隧道，隧道延伸 500 码，通往死者沼泽边缘的一片茂密的树林和灌木丛。夜晚，当营地里的所有人都已经入睡，只剩下几个屋顶上的守卫时，蜥蜴人悄悄穿过隧道，将标记的箱子运送到沼泽中的某个地点（这是 第六章 的内容）。除非货物非常少，他们很少在一夜之间完成这一任务。通常他们每晚搬运一车。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_113",locationId:"loc_hotdq_111",name:"1. 庭院",activation:{condition:{type:"always"},priority:0},skeleton:["大多数时候，这个开阔的庭院里挤满了箱子、桶和物资堆。","潮湿的气候意味着地面是泥泞的，除非温度在冰点以下。","那时泥泞会硬化成不均匀、覆盖着霜的沟槽。","从大门到马厩的小路保持畅通，以便动物可以移动，但在繁忙时期，那条小路经常从通往房间的门前的阳台下穿过。"],flesh:"大多数时候，这个开阔的庭院里挤满了箱子、桶和物资堆。潮湿的气候意味着地面是泥泞的，除非温度在冰点以下。那时泥泞会硬化成不均匀、覆盖着霜的沟槽。从大门到马厩的小路保持畅通，以便动物可以移动，但在繁忙时期，那条小路经常从通往房间的门前的阳台下穿过。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_114",locationId:"loc_hotdq_111",name:"2. 马厩",activation:{condition:{type:"always"},priority:0},skeleton:["在某些方面，马厩是院子中最舒适的区域。","当马厩拥挤时，马和骡子的体温使建筑物保持温暖。","四名马厩男孩负责照顾动物并在这里睡觉。","其中最年轻的，一个名叫Wump的机智男孩，对正在发生一些神秘的事情有所怀疑。","他对龙之教一无所知，但他足够敏锐，想知道为什么任何用于道路建设的东西都需要被锁起来。"],flesh:"在某些方面，马厩是院子中最舒适的区域。当马厩拥挤时，马和骡子的体温使建筑物保持温暖。四名马厩男孩负责照顾动物并在这里睡觉。其中最年轻的，一个名叫Wump的机智男孩，对正在发生一些神秘的事情有所怀疑。他对龙之教一无所知，但他足够敏锐，想知道为什么任何用于道路建设的东西都需要被锁起来。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_115",locationId:"loc_hotdq_111",name:"3. 仓库",activation:{condition:{type:"always"},priority:0},skeleton:["仓库的门是关着的但没上锁。","不应该暴露在天气中的物品存放在这里：供人们食用的食物和动物的饲料。"],flesh:"仓库的门是关着的但没上锁。不应该暴露在天气中的物品存放在这里：供人们食用的食物和动物的饲料。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_116",locationId:"loc_hotdq_111",name:"4. 坚固房间",activation:{condition:{type:"always"},priority:0},skeleton:["不同寻常的贵重货物和个人物品都被锁在保险箱里。","工人们不知道也不关心哪些道路建设物资被认为如此宝贵，以至于必须被锁起来保护。","他们只是按照Bog Luck的指示，把东西堆在被告知的地方。","由于睡眠房间无法上锁，工人和车队司机们经常让博格·拉克把他们的现金和其他贵重物品锁在保险室里以保管。","他在账本上记录了所有存放在那里的个人物品，并以细心确保每个人都拿回自己的物品而闻名——所有的物品，仅有是自己的物品。"],flesh:`不同寻常的贵重货物和个人物品都被锁在保险箱里。工人们不知道也不关心哪些道路建设物资被认为如此宝贵，以至于必须被锁起来保护。他们只是按照Bog Luck的指示，把东西堆在被告知的地方。

由于睡眠房间无法上锁，工人和车队司机们经常让博格·拉克把他们的现金和其他贵重物品锁在保险室里以保管。他在账本上记录了所有存放在那里的个人物品，并以细心确保每个人都拿回自己的物品而闻名——所有的物品，仅有是自己的物品。

这个房间的钥匙总是在博格·拉克的腰带上，但锁可以通过一次成功的 DC 10 敏捷检定和一套 盗贼工具 打开。

暗门位于房间的东南角。门上钉着一个空箱子来遮盖它；当门被打开时，整个箱子会向北倾斜。由于箱子被钉在地板上，轻微的碰撞或推动会感觉它很结实且装满了东西。只有当它倾斜时，这个机关才会变得明显。可以通过对房间进行20分钟的彻底搜索或成功的 DC 10 感知（察觉）检定来发现它。

每两个角色对应有三个蜥蜴人。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_116"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色们在夜间搜查保险箱，蜥蜴人会出现来搬运走私品。"},{id:"scn_hotdq_117",locationId:"loc_hotdq_111",name:"5. 房间",activation:{condition:{type:"always"},priority:0},skeleton:["住在院子里的马车夫、护卫和劳工共享房间。","所有的房间至少有四个人的铺位，更大的房间可以睡六个人。","房间里有铺位、存放物品的箱子，以及覆盖着灯心草的木地板。","除了Bog Luck的房间外，其他房间的门都没有锁。","如果有人问及锁的事，Bog Luck解释说，在寒冷的天气里它们会冻住，所以人们无法进出他们的房间。"],flesh:`住在院子里的马车夫、护卫和劳工共享房间。没有私人房间；所有的房间至少有四个人的铺位，更大的房间可以睡六个人。房间里有铺位、存放物品的箱子，以及覆盖着灯心草的木地板。

除了Bog Luck的房间外，其他房间的门都没有锁。如果有人问及锁的事，Bog Luck解释说，在寒冷的天气里它们会冻住，所以人们无法进出他们的房间。这个借口是可信的；特别是上层房间的门，早上经常结冰。实际上，Bog Luck拆除了锁，以加强他锁定保险箱的借口。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_118",locationId:"loc_hotdq_111",name:"6. 博格·卢克的房间",activation:{condition:{type:"always"},priority:0},skeleton:["沼泽幸运这个房间是他独自拥有的，所以比其他房间更宽敞舒适。","他除了睡觉几乎不在这里，而且他时常锁着门。","尽管沼泽幸运举止粗鲁，但他是个有些学识的人，这一点从他书架上摆放的哲学和自然史书籍可以看出。"],flesh:"沼泽幸运这个房间是他独自拥有的，所以比其他房间更宽敞舒适。他除了睡觉几乎不在这里，而且他时常锁着门。用 盗贼工具 进行一次成功的 DC 10敏捷检定可以打开它。尽管沼泽幸运举止粗鲁，但他是个有些学识的人，这一点从他书架上摆放的哲学和自然史书籍可以看出。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_119",locationId:"loc_hotdq_111",name:"7. 阿德雷德·布里弗休的房间",activation:{condition:{type:"always"},priority:0},skeleton:["雇佣守卫的指挥官独自拥有这个小房间。","它没有什么特别之处。"],flesh:"雇佣守卫的指挥官独自拥有这个小房间。它没有什么特别之处。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_11a",locationId:"loc_hotdq_111",name:"8. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["这个上层房间用于在大型炉子上准备食物。","到了晚上，这里变成了一个公共休息室，人们聚集在这里抽烟、喝酒、交换故事并取暖。","最终，厨师，一个脾气暴躁的人类名叫Gristle Pete，会赶大家出去，这样他就可以铺开他的床垫和毯子，好好睡一觉。","他听到的声音并误以为是老鼠，实际上是蜥蜴人在从下面的保险箱中取走走私品。","如果被问及，他会说偶尔会听到这些声音，不是每晚都有。"],flesh:`这个上层房间用于在大型炉子上准备食物。到了晚上，这里变成了一个公共休息室，人们聚集在这里抽烟、喝酒、交换故事并取暖。最终，厨师，一个脾气暴躁的人类名叫Gristle Pete，会赶大家出去，这样他就可以铺开他的床垫和毯子，好好睡一觉。

他听到的声音并误以为是老鼠，实际上是蜥蜴人在从下面的保险箱中取走走私品。如果被问及，他会说偶尔会听到这些声音，不是每晚都有。如果追问，他意识到这些声音发生在新货物送达后的几晚。现在这不是一些奇怪的老鼠行为吗？`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:'如果角色仔细聆听格斯特尔·皮特在厨房工作时的自言自语，他们会听到他自言自语地抱怨自己因为地板上的生物们"... 整夜都在敲击、嘶嘶声和窃窃私语，让我无法入睡"等等。'},{id:"scn_hotdq_11b",locationId:"loc_hotdq_111",name:"追踪货物",activation:{condition:{type:"always"},priority:0},skeleton:["角色们有几种方式可以收集有关工作营正在发生的事情的线索。","如果他们观察货车卸货，他们会注意到Bog Luck指挥工人将从Greenfields带来的箱子搬进仓库。","如果他们有机会看到仓库里发生了什么，他们会看到所有的箱子都进入了保险箱。","如果他们在货车卸货时没有查看仓库，而是稍后检查仓库，他们不会发现任何箱子；","箱子唯一可能去的地方就是保险箱。"],flesh:`角色们有几种方式可以收集有关工作营正在发生的事情的线索。

如果他们观察货车卸货，他们会注意到Bog Luck指挥工人将从Greenfields带来的箱子搬进仓库。如果他们有机会看到仓库里发生了什么，他们会看到所有的箱子都进入了保险箱。如果他们在货车卸货时没有查看仓库，而是稍后检查仓库，他们不会发现任何箱子；箱子唯一可能去的地方就是保险箱。

住在坚固房间上方的格里斯特·皮特，在某些夜晚听到奇怪的噪音。他误以为那些噪音是老鼠发出的，但实际上它们来自蜥蜴人，他们正在将走私品带入坚固房间下面的隧道中。

他们可以直接采取行动，偷偷检查保险箱。通过撬锁进入是最安全的方法。试图从Bog Luck的腰带上偷走钥匙是可行的，但这很冒险。如果他在尝试时抓住了某人，他们最好希望只是被痛打一顿。一个聪明的人物会接受这种羞辱，因为反击意味着Bog Luck会叫其他人来帮助他惩罚小偷，所有的角色从此以后都会被排斥。接受打击意味着Bog Luck将事件保持在他们两人之间。

角色们可以安排住在龙之邪教团队的马车夫旁边的房间，并通过墙壁偷听邪教徒的对话。他们无法听清整个对话，但他们确实捕捉到了"保险箱"、"隧道"、"蜥蜴人"和"Bog Luck"这些词。

与其他护卫和马车夫交谈可以获得一些有趣的观察，但没有具体的线索。大多数参与深水城北部运输的人一致认为，那些邪教徒（他们没有使用这个词）有些难以接近。

搜查邪教徒的两个房间会发现一些个人物品，包括一个装有六颗抛光宝石和小巧、易于隐藏的珠宝物品的袋子，总共价值约1400金币。邪教徒中有一名盗贼：一个名叫Larion Keenblade的半精灵。如果他能被识别并在其他人不在场的情况下被拦截，他可能会同意帮助角色，以换取他们帮助他逃脱。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们没有能力完成这些任务，Jamna可以帮助完成。
如果角色在深夜搜查房间，这将导致与蜥蜴人的战斗。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_11c",locationId:"loc_hotdq_111",name:"恩怨对决",activation:{condition:{type:"always"},priority:0},skeleton:["一个邪教徒的朋友被Jamna谋杀后，对某个角色怀恨在心。","现在他们的货物安全送达，任务完成，这个邪教徒可以为她被杀的朋友寻求复仇。","在适当的时机，邪教徒试图激怒角色进行战斗。","她会利用他们在一起时发生的任何事件，包括谋杀案，来在大家面前质疑角色的勇气和战斗能力。","这个NPC想要血，不会接受任何比这更少的东西。"],flesh:`一个邪教徒的朋友被Jamna谋杀后，对某个角色怀恨在心。现在他们的货物安全送达，任务完成，这个邪教徒可以为她被杀的朋友寻求复仇。

在适当的时机，邪教徒试图激怒角色进行战斗。她会利用他们在一起时发生的任何事件，包括谋杀案，来在大家面前质疑角色的勇气和战斗能力。这个NPC想要血，不会接受任何比这更少的东西。她拔出剑并发起攻击。

对于其他邪教徒、车夫和雇佣的守卫来说，这是他们两人之间的私人问题。如果有其他角色在同伴的一边加入战斗，更多的邪教徒也会这样做（将他们视为十二名警卫）。博格·卢克和阿德雷德·布里弗休阻止其他人加入，但他们不介意观看一些有限的流血事件来打破无聊。

邪教徒打算杀死角色，如果她在决斗中获胜（在角色生命值降至0点后继续刺击尸体），并且没有人阻止她，她会这么做。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_11c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色拒绝上钩，邪教徒不会退缩。
邪教徒使用老兵的统计数据。
如果角色退缩，每个人都会认为这个角色是个懦夫，并在营地剩余的时间里不尊重这个角色。`},{id:"scn_hotdq_11e",locationId:"loc_hotdq_111",name:"前往城堡",activation:{condition:{type:"always"},priority:0},skeleton:["纳里塔城堡并不只是路边的一箭之地。","它位于工作营地十五英里之外——十五英里的寒冷、泥泞、艰难的路程。","角色们以适中的步伐需要两天时间来走完这段距离。","幸运的是，蜥蜴人标记了通往纳里塔城堡的小径，他们通过死者之沼运输走私品给邪教。","没有这条小径，在这片错综复杂的迷宫中找到城堡更多地依赖运气而不是技巧。"],flesh:`纳里塔城堡并不只是路边的一箭之地。它位于工作营地十五英里之外——十五英里的寒冷、泥泞、艰难的路程。角色们以适中的步伐需要两天时间来走完这段距离。幸运的是，蜥蜴人标记了通往纳里塔城堡的小径，他们通过死者之沼运输走私品给邪教。没有这条小径，在这片错综复杂的迷宫中找到城堡更多地依赖运气而不是技巧。这条小径并没有让旅行变得容易；蜥蜴人的小径仍然被视为3。它只显示了前进的方向。

第一天的行程是徒步穿越错综复杂的沼泽地。在这片湿地里，即使是"坚实的地面"也很潮湿，水几乎就在地表。蜥蜴人搬运工背着重物，沿着这条小径的这部分行走，他们的足迹在路径穿过潮湿地面时清晰可见。路径的大部分都穿过泥泞、冰冷、齐膝深的水。在这些路段，树上刻有标记，以确保搬运工沿着正确的路线前进。只要角色们沿着小径走，就不需要任何技能检定来避免迷路。每次检定等同于一个小时的搜索，这需要进行随机遭遇检定。

经过七英里的行程，角色们到达了位于工作营地和奈瑞塔城堡之间大约一半路程的露营地。

每艘独木舟都有三个桨，足够大，可以容纳五个没有携带太多装备的人类，或者两三个携带背包和其他装备的人类。在棚屋里有一些篮子，里面装着熏鱼（可食用），还有一些被压扁晒干的蜥蜴和鸟类（对人类来说非常不开胃，但可食用）。

当太阳开始落山时，九个蜥蜴人划着三艘独木舟上来了。他们从奈瑞塔城堡前往客栈去取一批走私货物。蜥蜴人预计在他们的营地附近不会有麻烦，所以如果角色安排了警戒，那么那些积极警戒的角色会自动注意到接近的蜥蜴人，蜥蜴人会处于突袭状态。然而，如果角色点起了火，蜥蜴人则会从很远的地方闻到烟雾，知道有人在营地。他们假设那可能是他们自己的同类从工作营地带着要送往奈瑞塔城堡的宝藏回来，但沼泽充满了潜在的敌人，谁也不知道，所以如果他们闻到了烟雾，他们会更谨慎地接近。在这种情况下，具有10或更高被动感知（察觉）得分的角色在蜥蜴人发现营地中的陌生人之前注意到了接近的蜥蜴人独木舟。

这些蜥蜴人不会与角色进行谈判或交谈。他们被纳里塔城堡的精灵指挥官告知，出现在沼泽中的陌生人要么被杀要么被俘，但绝不能与之交谈。如果蜥蜴人被抓住并捆绑起来，一个成功的 DC 10 魅力（威吓）或 DC 15 魅力（游说）检定可以使他们开口说话。如果蜥蜴人没有被绑起来，角色在进行这些检定时会有劣势，因为蜥蜴人认为他们心软。

蜥蜴人知道他们正在将宝藏运送到城堡。所谓的"龙跪族"将其带入城堡，蜥蜴人就再也看不到它了。他们以钢制刀片（他们没有能力用金属制造）和魔法护身符作为报酬。所有的蜥蜴人都佩戴着由骨头、牙齿、羽毛、雕刻过的软石和皮革制成的项链和手镯。仔细观察，角色们在这些物品中看到了文明的痕迹：玻璃珠、硬币、廉价珠宝、小镜子，以及可以在任何小饰品店或纪念品摊位上花几便士买到的压印铜和锡护身符。这些东西都不是魔法的。

在审问过程中，让每个角色进行一次魅力检定。得分最高的那个角色给一个蜥蜴人俘虏留下了深刻的印象。这个蜥蜴人名叫Snapjaw，他对沼泽中的情况感到不满，他开始认为这些陌生人可能是驱逐邪教徒和屠杀他们残忍的蜥蜴人盟友的关键。Snapjaw试图与被选中的角色沟通，但他不想让他的任何同伴知道。他能够说足够基础的通用语进行简单交流，以防小队中没有人会说龙语。

Snapjaw开启对话的方式取决于情况。如果他是唯一的幸存蜥蜴人，或者他在其他人听不见的地方被询问，他可以公开说话。如果有好几个蜥蜴人被绑起来并且一起被询问，他可能会在他的龙语回答中掺杂一些通用语单词，比如"想帮忙"和"单独谈话"。如果有好几个蜥蜴人被绑起来，并且被单独留了几分钟，他可能会在地上划出类似的信息。

对于其他被俘的蜥蜴人，每个掷一次骰子。如果是偶数点数，Snapjaw说服那个蜥蜴人加入他的小规模反抗。如果是奇数点数，那个NPC无论如何都拒绝合作。

从营地开始，前往纳埃斯塔城堡的旅程必须乘独木舟进行。Snapjaw可以引导角色们。实际上并不真正需要向导，因为路线已经用刻在树干上和挂在树枝上的图腾标记出来了。

死亡者之沼是一个充满了危险生物的地方。每旅行一个小时，掷一个d20；在18到20的点数上会发生一次遭遇。通过下面的表格掷骰来决定遭遇，或者选择一次遭遇。

啵灵蛙在沼泽中随意巡逻。并非所有在沼泽中的啵灵蛙都为邪教工作，但角色们遇到的都是。

与鳄鱼的遭遇总是在至少2尺深的水中发生。角色们第一次在死水潭中遇到鳄鱼时，这些生物在隐匿检定时具有优势。

巨大青蛙尽可能使用它们的粘性舌头攻击，它们更偏好半身人、侏儒和其他小目标，而不是它们无法吞咽的生物。

亡者之泽中的巨型蜥蜴具有"屏息"特性。有30的几率这些是蜥蜴人遭遇队之前训练的蜥蜴。如果是这样，那些蜥蜴人（见下文）会在战斗的第六轮开始时出现在场景中。

蜘蛛网在浓雾区域几乎隐形。死人之泽的蜘蛛拥有憋气特性。

沼泽中的蜥蜴人是邪教的不情愿的盟友，主要是因为德拉莫瑞·灰生允许数量更多的蜥蜴人欺负他们。蜥蜴人群体是为邪教工作还是独立的，几率各占50%。如果有Snapjaw在场说服他们，独立群体会帮助角色。他们不会直接对抗邪教或一大群蜥蜴人，但他们可以通过侦查和制造干扰来提供帮助。如果看到Snapjaw像囚犯一样被捆绑，为邪教工作的蜥蜴人会立即攻击。如果Snapjaw没有被捆绑，角色们看起来也不对他表示敌意，蜥蜴人会犹豫，想知道角色们是否是邪教徒。

一个生物若踏入流沙，必须成功通过一次 DC 11 敏捷豁免，否则将沉入流沙并被 束缚。在其回合中，作为移动的一部分，被困生物可以通过进行一次 DC 15 力量检定来逃脱。另一个生物可以尝试作为一个动作将被 束缚 的生物从流沙中拉出，但必须成功通过一次 DC 15 力量检定才能做到。就像电影中一样，被困的生物总是离流沙边缘超过5英尺，所以救援者不能直接抓住角色；他们必须找到藤蔓、绳索或杆子，并将其投掷到被困角色能够到的地方。

所有的蜥蜴人，包括Snapjaw在内，都对"行走的杂草"感到恐惧。如果Snapjaw和角色们在一起时它出现，他会花费1轮时间敦促角色们逃跑，然后他自己也会逃跑。除非有人立即跟随他，否则要再找到他将需要一个小时。

如果这次遭遇发生在角色们到达中途营地之前，幽光不会立即显现自己，而是隐形地跟随角色们直到夜幕降临。然后它们会尝试诱使一个或两个角色跟随它们，通过出现作为附近经过的模糊、闪烁的灯笼。任何跟随这些光的人即使只是很短的距离也会被诱入流沙区域。如果遭遇发生在角色们离开中途营地之后，那么幽光会使用同样的诡计，但在浓重的晨雾中，它们不是诱使角色们进入流沙，而是将他们引向黑色龙Voaraghamanthar的巢穴。

死水潭的所有居民，包括蜥蜴人、邪教徒，尤其是啵灵蛙，都害怕并鄙视蛇人。而蛇人则对所有人都抱有鄙视，但他们无所畏惧。这个由两个恶咒蛇人（类型1）和三个纯血原体蛇人组成的狩猎队正在寻找适合作为他们长期沉睡的神Merrshaulk祭品的任何智慧生物。蛇人不会与任何人结盟，也不会反对任何人。`,spotlightRefs:[],presentNpcIds:["npc_dralmorrer_borngray"],availableInfoIds:[],encounterIds:["enc_tod_naerytar_dusk_camp"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`这个营地并不大——只是一个比你们一直在跋涉的泥泞稍微干燥一点的空地——但四个柳条制成的斜靠棚和一座石平台（用来在潮湿的地面上点火）在这片荒野中引人注目。三艘挖空的独木舟停靠在其中一个斜靠棚附近。
在您行进方向的营地外几十码处，干燥的土地就结束了。除了覆盖着苔藓的树木、倒下的原木和茂密的芦苇丛外，没有任何东西高出静止的黑色水面。`,dmGuidance:`如果角色离开小径，则需要成功进行一次 DC 15 的感知（求生）检定才能再次找到它。
如果角色在黄昏前到达，营地是空的，他们可以安全地探索。
当角色在营地时，不会有随机遭遇打扰他们。
他可能会试图挑衅一个角色进行摔跤比赛或决斗（如果你的玩家是那种会接受此类挑战的人），然后低声向角色耳语他的信息。
如果角色们不对Snapjaw粗暴，并且不必要地不杀死更多的蜥蜴人，只要他们继续反对邪教和流氓蛙人，他就会成为可靠的盟友。
在角色们到达中途营地之前，这次遭遇是每个角色面对两个啵灵蛙。
在角色们到达中途营地之后，这次遭遇是每个角色面对三个啵灵蛙。`,randomTableIds:["tbl_hotdq_11e_0"]},{id:"scn_hotdq_130",locationId:"loc_hotdq_130",name:"纳瑞塔城堡",activation:{condition:{type:"always"},priority:0},skeleton:["一个多世纪前，一位半精灵法师在死灵之湖边缘建造了一座城堡。","他在那里居住了相对较短的时间，之后不断扩张的沼泽地从四面八方包围了城堡，使得这个地点对他来说也太偏僻了。","在这座建筑荒废多年之后，一群自称观星学院的占星家们声称了它。","他们在城堡的最高层建造了一个天文台，并安装了一件名为伊卢斯克的预言者的魔法设备。","但几年后，这些占星家神秘地消失了。"],flesh:`一个多世纪前，一位半精灵法师在死灵之湖边缘建造了一座城堡。他在那里居住了相对较短的时间，之后不断扩张的沼泽地从四面八方包围了城堡，使得这个地点对他来说也太偏僻了。在这座建筑荒废多年之后，一群自称观星学院的占星家们声称了它。他们在城堡的最高层建造了一个天文台，并安装了一件名为伊卢斯克的预言者的魔法设备。但几年后，这些占星家神秘地消失了。

占星术士消失后，这座城堡再次陷入废弃。它是为了抵御寒冷、多水的环境而建造的，所以逐渐逼近的水并没有破坏墙壁或淹没地牢。然而，在数十年的荒废中，城堡里堆满了碎片，并吸引了许多不受欢迎的居住者。然后，在她的一次进入沼泽研究并与黑龙Voaraghamanthar进行谈判的旅行中，瑞兹米尔偶然发现了这座城堡。瑞兹米尔怀疑这座城堡可以成为她的一个有用的要塞，因为它非常便利地靠近一只黑龙的巢穴。她探索了这座建筑，清除了塔中的巨型蜘蛛，并与附近的啵灵蛙部落建立了联盟。

在那段时间里，半龙仍然只将城堡视为一个加固的藏身之处。当她在地牢中发现了传送门并得知它连接到灰峰山脉中一个废弃的小屋时，一个新的想法形成了。携带大量宝藏穿越十五英里的死水潭并不容易，但如果能省去700英里的马车运输，那将是值得的困难——特别是如果啵灵蛙和蜥蜴人做了所有艰苦的工作。瑞兹米尔声称拥有这两个结构，将灰峰山脉的狩猎小屋交给了一个值得信赖的龙之教联系人（一个名叫Talis的半精灵，现在鄙视瑞兹米尔——见第七章），并开始使奈瑞塔城堡成为该教派在北方积累宝藏活动中的一个重要枢纽。

通过外交和恐吓，以及利用Voaraghamanthar对沼泽中怪物群体的影响力，瑞兹米尔在死灵之湖创建了一个不稳定的联盟，并将她的愿景变为现实。

在纳埃斯塔城堡周围有三个势力在活动：龙之邪教、一群蜥蜴人和一支蜥蜴人部落。黑龙Voaraghamanthar及其手下的狗头人和蜥蜴人如果积极参与事件，可能构成第四个势力，但目前它正在观望，等待事件的发展。

瑞兹米尔的三方联盟是不稳定的。邪教徒厌恶生活在沼泽中，对流氓蛙人或蜥蜴人几乎没有尊重；流氓蛙人的领袖想要为了自己的目的夺取纳里塔城堡；流氓蛙人通常利用每一个机会欺负蜥蜴人；蜥蜴人在流氓蛙人的虐待下感到不满，并想知道为什么Voaraghamanthar不介入保护他们。

尽管瑞兹米尔负责让奈瑞塔城堡复活，并以龙之教的名义声称拥有它（实际上她认为这是她的个人财产），但一位名叫德拉莫瑞·灰生的紫色穿戴者精灵（见附录D）代表瑞兹米尔指挥城堡。半龙需要偶尔出现，以提醒啵灵蛙和蜥蜴人龙之教才是真正的掌权者，但Borngray负责运营。

德拉莫瑞·灰生是Eldreth Valuuthra的成员，这是一个致力于将人类从费伦移除的精灵至上主义团体。他渴望回到人类宣称这个大陆之前的伟大帝国时代。作为来自永聚岛的人，他相信他的岛屿家园将安全地免受龙族统治的影响。大陆上的精灵将会受苦，但与将降临在人类身上的恐怖相比，这将是微不足道的代价。

这个精灵在所有方面都崇拜瑞兹米尔，除了一点：他懊悔她决定提升泥怪蛙在他们联盟中的地位。在博恩格雷看来，蜥蜴人比令人厌恶的泥怪蛙更有用、更可靠，也更适合作为盟友。他无法在不违背瑞兹米尔命令的情况下改变这个安排，但博恩格雷已经采取了一些小步骤来恢复蜥蜴人的部落自尊，比如试图教他们冶金术。他的努力收效甚微。

Borngray忠于邪教，渴望Tiamat的归来。他真心期待整个世界无助地躺在龙爪之下，一方面是因为那是世界应有的位置，另一方面这意味着他在纳里塔城堡的工作将结束。他生命中第二美好的一天将是当他能从靴子上刮去死者之沼的泥土和恶臭，回到某个文明的地方的那一天。他从未向他认为令人反感的必需品——啵灵蛙——提及过他离开的愿望。

城堡中只有少数真正的龙之教派的入门者和官员居住。他们全部在城堡描述中有所提及。他们充当Borngray和瑞兹米尔的监督者和助手。

为龙之教服务的啵灵蛙团体遵循法布列斯·溅黏（见附录D）的命令，他是一个罕见的掌握了萨满魔法的啵灵蛙。他的"宗教"是一种混乱的传统、借用的神秘主义、幻觉性陶醉剂和制造的传说的大杂烩，这对Pharblex个人权力的道路比对啵灵蛙的精神体系更有用。Pharblex的施法能力使他的追随者团结在一起，这使他对瑞兹米尔很有用。

Pharblex希望当Tiamat回归时，瑞兹米尔会把纳埃斯塔城堡交给他，他将从城堡统治整个死灵之湖。他认为自己和目标之间唯一的障碍是城堡的现任主人，德拉莫瑞·灰生；有人可能不想住在沼泽地里的想法从未进入Pharblex狭窄的脑海，而这位蜥蜴人似乎对Borngray对沼泽的讽刺和挖苦充耳不闻。当时机成熟时，Pharblex计划用任何必要的手段将精灵从画面中移除。他不太可能选择在与角色并肩战斗的中间背叛精灵——但如果看起来城堡里的邪教行动注定要失败，Pharblex是那种会改变立场以保全自己粘液皮肤的生物。时机必须完美，因为他比害怕角色更害怕瑞兹米尔。然而，如果角色们已经赢得了蜥蜴人的支持，屠杀或赶走了大部分蜥蜴人，占领了城堡，并准备在战斗中杀死Borngray和Pharblex——Pharblex判断放弃旧盟友，讨好新盟友的理想时机已经到来。他愿意提供几乎所有东西，以换取角色们让他活着并拥有纳埃斯塔城堡（无论伊卢斯克的预言者是否处于工作状态）。

城堡周围的啵灵蛙数量波动不定。他们随心所欲地来来去去。在任何给定的日子，有四十到五十个啵灵蛙在城堡外露营。另外三十四个加上Pharblex住在城堡的兵营里（区域1G和2G）。还有三十到七十个在附近的区域，足够近，可以在十五分钟内响应到barbican中的鼓声。

啵灵蛙早已自认为是死水潭的领主，并且他们的行为举止也像领主一样。然而，他们很容易混淆。在正常情况下，如果啵灵蛙在数量上占优势，他们会立即攻击冒险者。他们已经习惯了看到不同种族的邪教徒在城堡周围进出，所以当他们看到陌生人时，他们的第一反应是认为这些新来的人是更多的邪教徒。如果Snapjaw或其他蜥蜴人陪伴这些陌生人，或者角色们有任何公开的邪教装备或服装，这种假设就会得到加强。

这并不意味着角色们可以随意在营地和城堡中漫游。啵灵蛙守卫仍然会挑战他们，询问他们是谁以及他们要去哪里（如果角色中没有人说啵灵蛙语，则使用破碎的混杂通用语）。他们只是不会假设每个陌生人都是敌人，并在看到时就攻击。

鳞甲死亡蜥蜴人部落没有领袖。Pharblex杀死了它的萨满祭司，太阳召唤者，死亡让部落产生了一种容易被利用的自卑感。当瑞兹米尔承诺Voaraghamanthar会奖励部落为教派所做的劳动时，蜥蜴人已经准备好倾听。

啵灵蛙扮演着固定防御力量的角色，而蜥蜴人则执行五个职能。首先，他们是教派的劳动者和搬运工。在清理城堡废墟时，蜥蜴人完成了大部分繁重的工作，并且他们用背部和独木舟将大部分宝藏从工作营地运送到城堡。第二，他们照料用于在死水潭中拖运或携带特别重的负载的巨型蜥蜴。第三，他们负责大部分的狩猎、捕鱼和收集工作，以供养城堡里的每个人。第四，他们充当城堡的远程侦察兵和外围守卫，因为他们在积极巡逻、伏击和设置陷阱方面远远优于任何啵灵蛙。第五，一群蜥蜴人被招募为城堡本身的精英守卫。Borngray不期望任何力量会对城堡发动真正的攻击；它太难以接近了，深藏在沼泽中。但如果这种不太可能的事件真的发生了，他知道那些虚张声势的啵灵蛙会选择逃跑而不是与有组织的敌人战斗。另一方面，当蜥蜴人有值得跟随的领袖时，他们可以表现出勇气和纪律。Borngray希望成为这样的领袖，至少对于他安置在城堡中并给予特殊待遇的一小部分蜥蜴人战士来说。作为他们工作的回报，Borngray用随赃物一起带到城堡的金属武器"支付"给部落。

与此同时，流氓蛙人欺负蜥蜴人，由于他们数量上的优势、蜥蜴人对Pharblex魔法的本能敬畏，以及Borngray或黑龙巢穴没有任何约束的迹象，流氓蛙人变得更加胆大妄为。Voaraghamanthar的沉默，比其他任何事情都更让蜥蜴人怀疑，是否命运在因为他们某些未知的过错而惩罚他们。他们抱怨，偶尔有一些蜥蜴人会开小差，但大多数蜥蜴人以爬行动物的坚忍不拔承受着。

Snapjaw是少数提出反抗可恶的蜥蜴人和邪教徒的人之一。他没有公开这样做，因为那会招致蜥蜴人的报复，但他已经向一些他信任的部落同胞表达了这个想法。他们的反应是感兴趣但不置可否；他们打算对蜥蜴人进行报复，但要等到时机成熟。与此同时，他们忍受着——并囤积武器。Borngray对部落中总共有多少蜥蜴人只有一个大致的概念，他没有仔细统计过交给他们的剑、矛、匕首、盾牌和金属尖头箭的数量。在这一点上，蜥蜴人的武装比他们向蜥蜴人或邪教徒透露的要好得多。当反击蜥蜴人的时候到来时，蜥蜴人打算用一把新的、锋利的钢刀切开每一个蜥蜴人的喉咙和腹部。

像流氓蛙人一样，蜥蜴人在看到陌生人时的第一个假设是他们是邪教徒，或者是来城堡工作或谈判的邪教徒盟友。然而，他们并不像流氓蛙人那样傲慢，所以除非他们受到攻击，否则他们并不真正关心谁在营地里徘徊。正在巡逻或站岗的蜥蜴人是个例外。他们保持警惕，并且他们假设每个人都是潜在的敌人。在确定之前他们不会攻击，以免因杀死一个盟友而招致瑞兹米尔或Borngray的愤怒。作为外围守卫，他们的指示是当陌生人接近时提醒营地，监视陌生人，并等待进一步的指示。

鳞甲死亡部落由八十名蜥蜴人战士组成，包括男性和女性。大约一半的战士在任何给定时间都在城堡附近；二十六名生活在城堡内，其余的居住在芦苇小屋（区域3）。其他人则外出狩猎、捕鱼、巡逻、从工作营地运送走私品，或者拜访他们位于西南方向几个小时路程的部落村庄的家人。

在纳里塔城堡中只有一位红袍法师：阿兹巴拉·乔斯，他之前也在Greenfields的邪教营地，并且与瑞兹米尔一起北上。他对死者之沼、流氓蛙人或蜥蜴人没有兴趣，对黑龙也只有稍微多一点的兴趣。他之所以在这里，只是作为拉斯·莫达与瑞兹米尔之间的联络人。然而，城堡下方的传送门引起了Jos的兴趣；传送门始终是红袍法师所关心的。

冒险者出现在这个偏远、秘密的地点也引起了他的兴趣。如果阿兹巴拉·乔斯看到这些角色或得知他们的存在，他会安排一次私下会面——一次瑞兹米尔和灰生甚至不知道，更不用说参加的会面。他想知道角色对邪教的计划了解多少，他们在哪里以及如何发现这些信息，还有谁知道这些信息，以及他们认为计划成功的可能性有多大。

这假设角色们在奈瑞塔城堡中伪装成邪教徒或隐藏在蜥蜴人中。如果他们在城堡里横冲直撞，杀死遇到的每一个人，那么阿兹巴拉·乔斯只有一个担忧：在某人或某物杀死他之前通过传送门逃脱。

Voaraghamanthar是一只成年黑龙，宣称死灵之湖为自己的领地。尽管许多生物生活在沼泽中并在某种程度上支配着它，但没有人挑战Voaraghamanthar的至高无上的地位。蜥蜴人视他为持续的威胁，每当他的影子靠近时都会颤抖。蛇人勉强给予他尊重并觊觎他巨大的财富。蜥蜴人尊敬他，并想知道为什么他允许邪教徒虐待他们。邪教徒崇拜他，并将一些到达的走私品转移到他的巢穴作为贡品。

沃阿拉格曼塔尔有一个秘密，在费伦只有另外两个生物知道。其中之一是瑞兹米尔。另一个生物is这个秘密：沃阿拉格曼塔尔的双胞胎兄弟——沃瓦尔恩多。几个世纪以来，这对双胞胎一直误导世人，让人相信只有一条龙居住在死亡沼泽——一条必须以极快速度移动的龙，因为它曾在极短的时间内被出现在相距甚远的地方。这对兄妹很少离开他们的巢穴，但当他们离开时，他们会协调行动，确保他们永远不会被一起看到或在同一时间出现在两个遥远的地方。

瑞兹米尔说服了这对双胞胎龙承诺帮助邪教，但到目前为止，这个承诺并没有产生太大的影响。两条龙都没有频繁离开它们的巢穴来提供太多帮助。像所有的黑龙一样，这两条龙对其他所有龙都抱有偏执。与与其他龙发生冲突的真正危险相比，Tiamat的潜在归来和建立庞大的龙帝国似乎是遥远的可能性，任何一条龙都会很高兴为了它们的财宝而谋杀Voaraghamanthar和Waervaerendor。总之，这就是双胞胎的看法。虽然他们对其他龙的杀性感到担忧是有道理的，但事实上它们是两条龙，意味着它们对大多数孤独的龙没有什么好怕的。瑞兹米尔正在努力说服他们，通过在战略上正确的时刻揭露他们的秘密，他们可以获得巨大的力量。然而，在Tiamat的归来看起来更确定之前，Voaraghamanthar和Waervaerendor打算继续谨慎行事，呆在家里附近，守护他们的秘密。

Voaraghamanthar和Waervaerendor并不是沼泽中真正的派系，因为他们没有推进自己的任何议程，但他们的存在影响了力量的平衡。没有Voaraghamanthar，邪教根本不会出现在这里。没有Voaraghamanthar，蜥蜴人可能无法被操纵与蜥蜴人达成共同的事业。

角色们在这个冒险中不应该直接遇到这两种龙（他们更有可能在提亚马特的崛起中相遇）。许多线索可以告诉角色们他们进入了龙的领地。首先，他们会经过由酸蚀的人类、人形生物、蛇人、鳄鱼以及几乎所有生活在沼泽中的生物的颅骨组成的标记物。这些颅骨挂在枯萎的树上，或者插在地上的尖刺上。

两条龙的巢穴都由蜥蜴人严密守护。这些龙的守卫是从为邪教工作的鳞片死亡蜥蜴人中挑选出来的。狗头人侵扰着实际的巢穴，但他们很少出来进入沼泽地。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_dralmorrer_borngray","npc_pharblex_spattergoo","npc_azbara_jos","npc_rath_modar","npc_talis_the_white"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`如果角色被抓住并关在城堡里，乔斯会找机会私下问同样的问题，但他处于更有利的位置，可以迫使角色回答。
如果角色们有意或无意地偏离了蜥蜴人营地和纳里塔尔城堡之间的路径——例如，如果他们跟随鬼火进入了沼泽——他们可能会进入其中一处巢穴周围的荒芜领地。`,mapGeometry:{imageRef:"adventure/HotDQ/028-tod-06-02.webp"}},{id:"scn_hotdq_137",locationId:"loc_hotdq_130",name:"与龙之教团对峙",activation:{condition:{type:"always"},priority:0},skeleton:["角色们在纳里塔城堡有多种选择，那里的事件可以朝许多方向发展。","在进行这一章节时，以下是需要记住的关键点。","瑞兹米尔和阿兹巴拉·乔斯几乎会不惜一切代价避免与碍事的冒险者交战。","他们有比纳瑞塔城堡及其居民的安全更重要的事。","如果战斗爆发，这两个角色会直接前往城堡下方的异界之门，传送到白袍塔利斯的狩猎小屋（见第七章）。"],flesh:`角色们在纳里塔城堡有多种选择，那里的事件可以朝许多方向发展。在进行这一章节时，以下是需要记住的关键点。

瑞兹米尔和阿兹巴拉·乔斯几乎会不惜一切代价避免与碍事的冒险者交战。他们有比纳瑞塔城堡及其居民的安全更重要的事。如果战斗爆发，这两个角色会直接前往城堡下方的异界之门，传送到白袍塔利斯的狩猎小屋（见第七章）。就本次冒险而言，尽你所能确保瑞兹米尔和乔斯在本章中存活。如果他们没能存活，也不是什么大灾难，但如果他们活下来会好得多。

德拉莫瑞·灰生和法布列斯·溅黏如果邪教的敌人强冲纳瑞塔城堡，他们将失去一切；失败会让灰生失去他在邪教中辛苦挣得的等级，而溅黏则会失去他希望在邪教用完城堡后统治这片沼泽的基地。他们为保护城堡而战至死（同时为瑞兹米尔和乔斯争取逃脱时间）。尽管他们彼此厌恶，但他们明白团结起来比分开要强大得多。战斗一爆发，他们就联手合作。

Borngray和Pharblex最好的防守位置取决于攻击的发展情况；你需要根据情况灵活应对。面对坚决的突击，他们最好的策略可能是通过城堡进行战斗撤退，然后进入洞穴，那里狭窄的通道和巨大青蛙对他们有利。

啵灵蛙数量众多但胆小。他们会为了保护Pharblex而战斗，但如果他不在视线范围内——例如，如果Pharblex在其他啵灵蛙在内院战斗时退入洞穴——感觉被他抛弃的啵灵蛙可能会跳入死水潭并永不返回。如果Pharblex被杀，大多数啵灵蛙会立即逃跑。

蜥蜴人很勇敢，但他们鄙视流氓蛙人。如果流氓蛙人在附近，蜥蜴人会撤退，让流氓蛙人承受战斗的冲击和伤亡。如果蜥蜴人被说服与角色们并肩作战，那么他们会在城堡和场地内追捕流氓蛙人，并毫不留情地杀死他们。如果流氓蛙人逃进沼泽，蜥蜴人会追赶他们。面对邪教徒时，他们表现得半心半意——并不是因为他们害怕邪教徒，而是因为他们不恨他们，他们在心理上更难反对那个联盟。

邪教徒们是虔诚的，但不是狂热分子，他们是劳动者，不是士兵。他们在德拉莫瑞·灰生的带领下勇敢战斗。没有他，邪教徒的攻击就会变得不协调和犹豫不决。如果他们面对的是反抗的蜥蜴人，情况会更糟。在那种情况下，如果没有Borngray的鼓舞，他们最有可能的做法是将自己封锁在西南塔的上层或图书馆中，并试图熬过这场屠杀。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_azbara_jos","npc_talis_the_white","npc_dralmorrer_borngray","npc_pharblex_spattergoo"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"如果角色们没有将蜥蜴人招募到他们这边，那么当蜥蜴人单独作战时，他们会战斗得很好。"},{id:"scn_hotdq_138",locationId:"loc_hotdq_130",name:"接近纳埃瑞塔尔城堡",activation:{condition:{type:"always"},priority:0},skeleton:["角色们如何接近Naerytar可以为城堡中发生的一切都定下基调。","Snapjaw知道蜥蜴人在城堡外大约半英里处布置了哨兵。","如果他和角色们在一起，他可以防止他们误入陷阱或遭遇伏击。","他对他们说的内容取决于他对角色们形成的看法。","如果Snapjaw还不确定这些角色是否是他希望的救世主，他会告诉守卫这些人是来加入城堡中已有的邪教徒。"],flesh:`角色们如何接近Naerytar可以为城堡中发生的一切都定下基调。

Snapjaw知道蜥蜴人在城堡外大约半英里处布置了哨兵。如果他和角色们在一起，他可以防止他们误入陷阱或遭遇伏击。他对他们说的内容取决于他对角色们形成的看法。

如果Snapjaw还不确定这些角色是否是他希望的救世主，他会告诉守卫这些人是来加入城堡中已有的邪教徒。守卫们毫无质疑地接受了这个说法，并让所有人通过。

如果英雄们与斯纳普乔之间建立了强大的信任，他告诉守卫们这些角色是前来摧毁龙息教的伟大战士，现在是时候对泥蛙族采取行动了。你可以自行决定守卫对此的反应，或为斯纳普乔进行一次DC 10魅力的检定。如果检定成功，守卫们被说服。如果检定失败，角色们没有给他们留下深刻印象。他们现在不会对泥蛙族采取行动，但也不会干涉角色们。如果结果在5或以下，这些守卫认为斯纳普乔的起义言论是危险的鲁莽之举，并攻击他。

如果Snapjaw不在角色身边，他们仍然有机会自己发现守卫前哨站。拥有被动感知（察觉）得分15或更高的角色能嗅到木烟的味道。同时为蜥蜴人守卫进行一次敏捷（隐匿）检定，并且有优势（他们有足够的时间隐藏自己）。将他们的结果与角色的被动感知（察觉）得分进行比较，以确定是否有角色注意到隐藏的蜥蜴人。

如果蜥蜴人没有被发现，他们会派两名快速游泳者通过次要路线提前去城堡警告蜥蜴人。另外两名侦察兵跟随角色，而最后两名留在他们的岗位上继续守望。`,spotlightRefs:[],presentNpcIds:["npc_azbara_jos","npc_dralmorrer_borngray","npc_pharblex_spattergoo","npc_talis_the_white"],availableInfoIds:[],encounterIds:["enc_hotdq_138"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们允许，他会和六名蜥蜴人守卫交谈。
如果角色们没有做任何事情来赢得Snapjaw的信任，或者他们对待他并不比流氓蛙人更好，那么他会告诉守卫角色们只会带来麻烦，然后蜥蜴人就会发动攻击。`},{id:"scn_hotdq_139",locationId:"loc_hotdq_139",name:"在纳瑞塔尔城堡之外",activation:{condition:{type:"always"},priority:0},skeleton:["纳里塔城堡建在干燥的陆地上，然后在其周围挖掘了一条深而干燥的护城河。","当沼泽扩张并包围了城堡所在地时，护城河被淹没并溢出。","现在整个地方都变成了沼泽地，大片的积水点缀在空地上。","城堡建在裸露的基岩上，所以其基础稳固，即使在洪水发生一个世纪后，大部分仍然是干燥的。","杂乱的灌木和树木生长在城堡三面的墙壁二十尺内。"],flesh:`纳里塔城堡建在干燥的陆地上，然后在其周围挖掘了一条深而干燥的护城河。当沼泽扩张并包围了城堡所在地时，护城河被淹没并溢出。现在整个地方都变成了沼泽地，大片的积水点缀在空地上。城堡建在裸露的基岩上，所以其基础稳固，即使在洪水发生一个世纪后，大部分仍然是干燥的。杂乱的灌木和树木生长在城堡三面的墙壁二十尺内。只有正面（南面）是开阔的。

蜥蜴人居住在拥挤、匆忙搭建的芦苇屋里。而蜥蜴人的住所则是更坚固、更宽敞的芦苇长屋。

这是进入城堡的唯一通道。城堡建造时，一对坚固的木门和一道铁制的吊闸封锁了这个12尺宽、10尺高的通道。这些门从未关闭；它们现在在铰链上下垂得如此严重，以至于除非是迫在眉睫的攻击，否则不值得费力将它们撬到位。吊闸设置可以通过用力拉动杠杆（位于上层，区域2A）来放下，但自从上次测试以来，机械已经生锈到吊闸只能下降3尺，然后就会卡住。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_13a",locationId:"loc_hotdq_139",name:"1. 登陆",activation:{condition:{type:"always"},priority:0},skeleton:["这里拉上了半打的独木舟。","每艘舟底部有三到五支桨。","其中五艘状况良好；","第六艘底部腐烂，蜥蜴人从不使用它。","它一放入水中就开始漏水，并且在十五分钟后沉没。"],flesh:"这里拉上了半打的独木舟。每艘舟底部有三到五支桨。其中五艘状况良好；第六艘底部腐烂，蜥蜴人从不使用它。它一放入水中就开始漏水，并且在十五分钟后沉没。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色匆忙中拿了独木舟，有六分之一的几率他们会拿到腐烂的那艘。"},{id:"scn_hotdq_13b",locationId:"loc_hotdq_139",name:"2. 动物围栏",activation:{condition:{type:"always"},priority:0},skeleton:["蜥蜴人在这里圈养他们的巨型蜥蜴。","围栏的五尺高墙是由坚固的原木制成，这些原木被打入地下，间隔约六英寸，并用扭曲的纤维捆绑在一起。","这些蜥蜴能够携带或拖动对蜥蜴人来说过于庞大的负载，例如大型木材或令人印象深刻的鳄鱼。","它们还被用来通过绳索和滑轮将石头提升到城堡的城垛上——这项技术总是让蜥蜴人感到惊奇。","任何时候围栏里都有2d4只巨蜥。"],flesh:"蜥蜴人在这里圈养他们的巨型蜥蜴。围栏的五尺高墙是由坚固的原木制成，这些原木被打入地下，间隔约六英寸，并用扭曲的纤维捆绑在一起。这些蜥蜴能够携带或拖动对蜥蜴人来说过于庞大的负载，例如大型木材或令人印象深刻的鳄鱼。它们还被用来通过绳索和滑轮将石头提升到城堡的城垛上——这项技术总是让蜥蜴人感到惊奇。任何时候围栏里都有2d4只巨蜥。它们脾气暴躁，如果驯养者不在场控制它们，它们会攻击任何进入它们触及范围的人。如果被释放，它们最有可能在沼泽中嬉戏地逃走。如果目标是让这些蜥蜴在营地中横冲直撞，首先需要有人激怒它们。用长矛穿过围栏墙戳它们就能做到这一点。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_13b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_13c",locationId:"loc_hotdq_139",name:"3. 长屋",activation:{condition:{type:"always"},priority:0},skeleton:["蜥蜴人战士居住在这些长屋里。","长屋是由芦苇捆绑成长而厚的束，并弯曲成倒置的U形肋骨构成的。","肋骨之间的空隙用更多的芦苇编织并覆盖。","每个长屋在一端墙的中心有一个单独编织的门。","长屋所使用的建造技术非常巧妙。"],flesh:`蜥蜴人战士居住在这些长屋里。

蜥蜴人可能在技术上落后，但他们是环境的主宰。他们在陷阱和捕猎器上展示了同样的建筑才能。

内部，长屋宽敞且通风良好。地面铺有芦苇垫，内部干燥且通风。装备挂在墙上的钉子上，以保持其不接触地面。蜥蜴人特别小心对待他们的新钢制武器，因为这些武器在潮湿环境中容易迅速生锈。他们用炭火填充小型石炉以取暖。这里没有开放式壁炉；火星的危险太大了。

这些长屋每座都能舒适地容纳25个蜥蜴人，如果拥挤一些，甚至可以容纳更多。当瑞兹米尔首次与蜥蜴人协商时，他们打算将整个村庄迁移到这里，并据此建造。随着更多的啵灵蛙也涌向城堡，实际情况变得明朗，战士们指示他们的家人留在后面。因此，他们在城堡拥有的长屋空间远远超出了他们的需求。他们在空地上不会数到那么多蜥蜴人。如果Snapjaw在附近，他可以解释这种差异。`,spotlightRefs:[],presentNpcIds:["npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"长屋是由芦苇捆绑成长而厚的束，并弯曲成倒置的U形肋骨构成的。肋骨之间的空隙用更多的芦苇编织并覆盖。每个长屋在一端墙的中心有一个单独编织的门。长屋所使用的建造技术非常巧妙。",dmGuidance:"如果角色从藏身处观察该区域，仅凭长屋来判断，他们会保守估计城堡里有超过一百个蜥蜴人居住。"},{id:"scn_hotdq_13e",locationId:"loc_hotdq_139",name:"4. 茅屋",activation:{condition:{type:"always"},priority:0},skeleton:["啵灵蛙居住在简陋搭建的小屋中。","十几个小屋随意地散布在沼泽地上。","每个小屋的形状都像一个略微压扁的圆顶。","门口是敞开的，但一个低矮的短隧道迫使生物必须爬行进入小屋。","它们由芦苇编织在一个格子上，整个结构上涂抹了一层厚厚的泥、草和粪便。"],flesh:`啵灵蛙居住在简陋搭建的小屋中。

蜥蜴人的住所与蜥蜴人的长屋完全相反：潮湿、肮脏、粗制滥造，并且散发着恶臭。地板不仅仅是潮湿；它们被搅拌成深达2尺的泥坑，这样蜥蜴人就可以像青蛙一样在泥里休息，泥浆甚至可以没到他们的眼睛。他们没有隐私或个人空间的概念。到了晚上，他们会挤在一起，直到每个人都被挤得紧紧的。蜥蜴人不会被分配到特定的小屋。当他们感到疲倦时，会在最方便的地方睡觉，所以有些小屋在晚上可能会挤满人，而其他小屋则完全空着。

八只巨蛙在小屋间随意跳跃，或静静地坐在积水池中。这些生物是由啵灵蛙从蝌蚪抚养长大的，它们不会打扰啵灵蛙，但会攻击任何不小心走进它们15尺长舌头范围内的其他生物。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_13e"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"十几个小屋随意地散布在沼泽地上。每个小屋的形状都像一个略微压扁的圆顶。门口是敞开的，但一个低矮的短隧道迫使生物必须爬行进入小屋。它们由芦苇编织在一个格子上，整个结构上涂抹了一层厚厚的泥、草和粪便。泥水、沼泽水和淤泥在小屋间流淌，甚至流进流出那些低矮的开放门口。"},{id:"scn_hotdq_140",locationId:"loc_hotdq_139",name:"5. 护城河",activation:{condition:{type:"always"},priority:0},skeleton:["拍打着城堡墙壁的浑浊水流乍一看与遍布该区域的积水无法区分，但它其实隐藏着一条护城河。","西南塔周围的护城河部分已经淤积到地面高度，但在其他地方，它有30到40英尺宽，深达15英尺。","堤道（1A）横跨护城河，提供了一个视觉线索，表明水可能比看起来更深。","任何在护城河中溅起水花的人都会吸引六只鳄鱼的注意。"],flesh:"拍打着城堡墙壁的浑浊水流乍一看与遍布该区域的积水无法区分，但它其实隐藏着一条护城河。西南塔周围的护城河部分已经淤积到地面高度，但在其他地方，它有30到40英尺宽，深达15英尺。堤道（1A）横跨护城河，提供了一个视觉线索，表明水可能比看起来更深。任何在护城河中溅起水花的人都会吸引六只鳄鱼的注意。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_140"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_142",locationId:"loc_hotdq_139",name:"在纳瑞塔尔城堡内部",activation:{condition:{type:"always"},priority:0},skeleton:["城堡的外墙平均厚度为10尺。","内墙也是石头建造的，但厚度大约只有1或2尺。","城堡内的大多数建筑都超过一层楼高。","在描述中，区域通过楼层和字母来标识，所以区域1L位于地面层，2L位于第二层，以此类推。","如果一个区域没有特定楼层的入口，那么它就不存在在那个楼层。"],flesh:`城堡的外墙平均厚度为10尺。内墙也是石头建造的，但厚度大约只有1或2尺。

城堡内的大多数建筑都超过一层楼高。在描述中，区域通过楼层和字母来标识，所以区域1L位于地面层，2L位于第二层，以此类推。如果一个区域没有特定楼层的入口，那么它就不存在在那个楼层。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_263",locationId:"loc_hotdq_263",name:"底层",activation:{condition:{type:"always"},priority:0},skeleton:["每个门的内侧都装有一个银色的铃铛，每次门被打开时铃铛都会响起，提醒塔楼内的居民。","一座楼梯紧贴着这个房间的内墙，通向一个带有门的平台。","房间本身包含着巨人尺寸的坚固木雕家具，包括一个四周有四把椅子的桌子。","墙壁上雕刻着冰壁画，描绘了一支由山地、霜冻、火、石头和云巨人组成的军队。","四名食人魔守卫着下层。"],flesh:`每个门的内侧都装有一个银色的铃铛，每次门被打开时铃铛都会响起，提醒塔楼内的居民。

一座楼梯紧贴着这个房间的内墙，通向一个带有门的平台。房间本身包含着巨人尺寸的坚固木雕家具，包括一个四周有四把椅子的桌子。墙壁上雕刻着冰壁画，描绘了一支由山地、霜冻、火、石头和云巨人组成的军队。

四名食人魔守卫着下层。他们戴着装饰有羽毛的头盔，以表明他们是布拉戈提库斯的"荣誉卫队"成员。这种简单的奖励使食人魔保持警觉和忠诚，因为他们知道巨人随时可以将这些头盔赠予其他人。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:["enc_hotdq_263"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_144",locationId:"loc_hotdq_263",name:"1A. 瓮城",activation:{condition:{type:"always"},priority:0},skeleton:["瓮城是城堡的主要防御位置。","它由十名啵灵蛙和1d6只巨蛙全天候守护。","除非某处发生了战斗或其他干扰，否则这些守卫的警戒度很低。","这个大厅的石地板上覆盖着泥泞。","从大门到堤道入口铺设了木板，形成了一条10尺宽的高架步道，供那些不喜欢像啵灵蛙那样在泥泞中行走的邪教徒使用。"],flesh:`瓮城是城堡的主要防御位置。它由十名啵灵蛙和1d6只巨蛙全天候守护。除非某处发生了战斗或其他干扰，否则这些守卫的警戒度很低。

这个大厅的石地板上覆盖着泥泞。从大门到堤道入口铺设了木板，形成了一条10尺宽的高架步道，供那些不喜欢像啵灵蛙那样在泥泞中行走的邪教徒使用。滑溜的泥地使得木板之外的任何地方对于角色来说都是3。一些桌子是用横放在桶上的木板拼凑而成的，配有粗糙制作的长凳作为座位。桌子和长凳几乎和地板一样泥泞。

瓮城在地面层没有窗户或箭垛。白天时，2 存在于距通往堤道的开放传送门和开放门口20尺范围内。其他地方，油灯仅能投下2（因为啵灵蛙从不清洁它们）。

楼梯通向区域2A。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_144"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_145",locationId:"loc_hotdq_263",name:"1B. 堤道",activation:{condition:{type:"always"},priority:0},skeleton:["这座180尺长的堤道横跨护城河，通向城堡的外院。","它没有屋顶，这样位于城门楼（区域2A）上层的守卫可以向拥挤在堤道上的攻击者射箭。","堤道沿东墙的一小块防御性凸起从未有人驻守。"],flesh:"这座180尺长的堤道横跨护城河，通向城堡的外院。它没有屋顶，这样位于城门楼（区域2A）上层的守卫可以向拥挤在堤道上的攻击者射箭。堤道沿东墙的一小块防御性凸起从未有人驻守。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_146",locationId:"loc_hotdq_263",name:"1C. 外院",activation:{condition:{type:"always"},priority:0},skeleton:["这里的地面曾经是坚硬的土壤，但是营房前面的区域（区域1G）已经被拍动的蜥蜴人的脚搅成了泥浆。","在任何特定时间，外院中有1d6-1只啵灵蛙和1d6-1只蜥蜴人。","蜥蜴人可能正在工作（训练他们的巨型蜥蜴），而蜥蜴人可能在偷懒或给蜥蜴人下命令。"],flesh:"这里的地面曾经是坚硬的土壤，但是营房前面的区域（区域1G）已经被拍动的蜥蜴人的脚搅成了泥浆。在任何特定时间，外院中有1d6-1只啵灵蛙和1d6-1只蜥蜴人。蜥蜴人可能正在工作（训练他们的巨型蜥蜴），而蜥蜴人可能在偷懒或给蜥蜴人下命令。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_146"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_147",locationId:"loc_hotdq_263",name:"1D. 内院",activation:{condition:{type:"always"},priority:0},skeleton:["最初，外院和内院之间的通道可以用沉重的木门封闭，但这些门早已破碎且没有被替换。","内院由三只守卫龙兽（见附录D了解具体数值）全天候巡逻。","它们会攻击任何它们不认识或没有它们认识的人陪伴的人。"],flesh:"最初，外院和内院之间的通道可以用沉重的木门封闭，但这些门早已破碎且没有被替换。内院由三只守卫龙兽（见附录D了解具体数值）全天候巡逻。它们会攻击任何它们不认识或没有它们认识的人陪伴的人。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_147"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_148",locationId:"loc_hotdq_263",name:"1E. 西北塔楼",activation:{condition:{type:"always"},priority:0},skeleton:["这座塔的门已经被从铰链上撕扯下来，躺在地上。","最初，地面上有一个木地板，下面有一个坑用来关押囚犯。","木地板已经完全腐烂，而那个坑几乎被垃圾和泥浆填满到地面高度。","这座塔建造时，这里一定有木地板，以覆盖下面的地牢坑。","现在地板已经不见了，地牢变成了一个垃圾坑和厕所，里面充满了恶臭的废物和沼泽水，水深只有几尺，接近门口的高度。"],flesh:`这座塔的门已经被从铰链上撕扯下来，躺在地上。最初，地面上有一个木地板，下面有一个坑用来关押囚犯。木地板已经完全腐烂，而那个坑几乎被垃圾和泥浆填满到地面高度。

这个深坑是食腐兽的巢穴，它吞噬了城堡中大部分的垃圾。如果有人踏入淤泥或跳到台阶上，奥提尤克会用它的触须猛烈攻击。受擒的角色会被拖入深坑，除了遭受奥提尤克的猛烈攻击外，还有溺水的危险。可以合理假设进入这座塔楼的角色会先深吸一口新鲜空气，但奥提尤克的攻击可能会让他们喘不过气。允许被攻击的角色进行一次体质豁免，DC等于5加上奥提尤克触须攻击造成的伤害。豁免成功意味着角色在被拖入淤泥时还有一口空气，可以屏住呼吸的时间为1加上其体质调整值的分钟数，最少为30秒（5轮）。豁免失败意味着角色的肺部没有空气，角色在等同于其体质调整值的回合数后在其回合结束时陷入昏迷状态，除非在此之前挣脱奥提尤克的擒抱。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_148"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座塔建造时，这里一定有木地板，以覆盖下面的地牢坑。现在地板已经不见了，地牢变成了一个垃圾坑和厕所，里面充满了恶臭的废物和沼泽水，水深只有几尺，接近门口的高度。上面的楼层严重腐烂，大部分已经坍塌。通过二楼的巨大洞口，你可以看到三楼仍然状况良好。但是要到达环绕外墙向上的石阶，你必须穿过10尺难以形容的泥泞。",dmGuidance:`当角色到达时，它静静地潜伏在淤泥中，除非角色用杆子搅动恶臭的淤泥，否则无法被察觉。
详见窒息规则（选自玩家手册）。`},{id:"scn_hotdq_14a",locationId:"loc_hotdq_263",name:"1F. 马厩",activation:{condition:{type:"always"},priority:0},skeleton:["最强壮、最凶猛的巨型蜥蜴被安置在这里，而不是在开放的围栏中（区域2），以保护它们免受普通围栏中常见的撕咬和抓挠。","这些蜥蜴被蜥蜴人用作长途巡逻时的坐骑。","原本为马匹建造的马厩已被扩大，以容纳这些野兽（八只巨蜥）。","当陌生人进入马厩时，这些通常懒散的生物会变得激动起来。","其他蜥蜴很快也会加入这场骚动，因此两分钟内，所有蜥蜴都会拍打墙壁并咆哮。"],flesh:`最强壮、最凶猛的巨型蜥蜴被安置在这里，而不是在开放的围栏中（区域2），以保护它们免受普通围栏中常见的撕咬和抓挠。这些蜥蜴被蜥蜴人用作长途巡逻时的坐骑。原本为马匹建造的马厩已被扩大，以容纳这些野兽（八只巨蜥）。当陌生人进入马厩时，这些通常懒散的生物会变得激动起来。其他蜥蜴很快也会加入这场骚动，因此两分钟内，所有蜥蜴都会拍打墙壁并咆哮。这场骚动会引来四名蜥蜴人，他们是这些巨型蜥蜴的驯养员。蜥蜴人对巨型蜥蜴有镇静作用，但如果他们受到干扰，这些不安的蜥蜴会撞破马厩并攻击马厩内的任何东西。

马厩东南角的梯子可以通往马厩上方的阁楼。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_14a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色停留超过一分钟，其中两只蜥蜴会开始用尾巴拍打墙壁。"},{id:"scn_hotdq_14b",locationId:"loc_hotdq_263",name:"1G. 下层兵营",activation:{condition:{type:"always"},priority:0},skeleton:["这个大型建筑是为了容纳城堡的守备部队而建造的。","Pharblex和他的精挑细选的啵灵蛙硬汉团队接管了这里。","Pharblex很少在这里，但在白天，有十二名啵灵蛙在肮脏的环境中闲逛。","到了夜晚，这个数字会增加一倍。","如果他们潜入或在半夜进入，请相应调整和改述。"],flesh:`这个大型建筑是为了容纳城堡的守备部队而建造的。Pharblex和他的精挑细选的啵灵蛙硬汉团队接管了这里。Pharblex很少在这里，但在白天，有十二名啵灵蛙在肮脏的环境中闲逛。到了夜晚，这个数字会增加一倍。

如果他们潜入或在半夜进入，请相应调整和改述。

如果啵灵蛙假设角色是邪教徒，他们会容忍他们在兵营最低层的存在。他们不允许任何人上楼，也不会接受他们不认识和认可的人的命令。如果这个区域发生战斗，来自上层（区域2G）的啵灵蛙将在第三轮从楼梯跳入战斗。

三个沾满泥浆的箱子被塞在楼梯后面的遮蔽空间里。这些箱子里装着啵灵蛙积累的大部分薪水。德拉莫瑞·灰生用他认为太便宜或太俗气而不适合加入为Tiamat积累的财宝中的掠夺宝物来支付他们的工资。这些箱子里装有数百件由铜和锡制成的物品，这些物品上镶嵌着小的或损坏的半宝石。三个箱子总共装有30,000枚铜币，500枚银币，以及价值另外350金币的珠宝（由铜和锡制成，带有装饰性或半宝石），总价值为700金币。它们的总重量超过500磅：305磅的硬币加上另外200磅的珠宝。

在一个装满铜和锡的箱子里埋藏着一个小桃花心木盒，里面装有两瓶治疗药水和一瓶以太化之油，这些在邪教徒整理时被忽略了。`,spotlightRefs:[],presentNpcIds:["npc_dralmorrer_borngray"],availableInfoIds:[],encounterIds:["enc_hotdq_14b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"十二个啵灵蛙从一个可能曾经是整洁兵营的房间里怀疑地盯着你。现在这个房间几乎没有家具，大部分地板被踩成了泥浆，啵灵蛙的气味弥漫在每一个角落。",dmGuidance:"如果角色在白天走进兵营，请大声朗读以下文本。"},{id:"scn_hotdq_14d",locationId:"loc_hotdq_263",name:"1H. 锻造厂和军械库",activation:{condition:{type:"always"},priority:0},skeleton:["Naerytar的建造者为铁匠们设立了这个结构，他们负责制造和维护城堡守卫所需的盔甲和武器。","这个房间的中心有一个大型锻造炉，由于锻造炉中微弱发光的煤床，这里温暖宜人。","大约有六名蜥蜴人围绕着锻造炉工作，但他们似乎没有完成太多工作。","其他铁匠工具散布在房间里，许多制作非常粗糙的金属物品堆积在西北角。","几个月前，德拉莫瑞·灰生决定重新启动锻造工作。"],flesh:`Naerytar的建造者为铁匠们设立了这个结构，他们负责制造和维护城堡守卫所需的盔甲和武器。

几个月前，德拉莫瑞·灰生决定重新启动锻造工作。他鄙视Pharblex和啵灵蛙，如果他能处理自从Pharblex谋杀了他们的萨满以来一直困扰部落的忧郁情绪，他更愿意只与蜥蜴人打交道。Borngray认为掌握像金属加工这样先进的手艺会给蜥蜴人带来新的信心。他可能是对的，但到目前为止，蜥蜴人对这个手艺几乎没有表现出天赋。然而，他们确实喜欢在炉火的温暖中沐浴，并且已经学会了即使不能制造更多，也要照顾好他们的新武器。

锻造室里的六只蜥蜴人不会主动攻击，除非他们首先受到挑衅。他们正试图从破损盔甲的碎片中制作一个铁矛尖，但他们的努力更像是在制作一把铲子而不是刀片。`,spotlightRefs:[],presentNpcIds:["npc_dralmorrer_borngray"],availableInfoIds:[],encounterIds:["enc_tod_naerytar_forge"],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的中心有一个大型锻造炉，由于锻造炉中微弱发光的煤床，这里温暖宜人。大约有六名蜥蜴人围绕着锻造炉工作，但他们似乎没有完成太多工作。其他铁匠工具散布在房间里，许多制作非常粗糙的金属物品堆积在西北角。",dmGuidance:"如果角色们提供建议，他们会聚精会神地听，但并没有表现出理解他们被告知的内容的迹象。"},{id:"scn_hotdq_14f",locationId:"loc_hotdq_263",name:"1I. 蜥蜴人准备室",activation:{condition:{type:"always"},priority:0},skeleton:["由德拉莫瑞·灰生挑选的二十名蜥蜴人作为他的后备警卫，使用这座东北塔楼作为他们的营房。","这个房间是他们白天的待命室。","当他们不在使用武器进行训练时，蜥蜴人在这个房间里赌博、锻炼，并讲述快乐时光的故事。","Borngray维持这支力量作为对抗Pharblex和啵灵蛙背叛的保险。","像城堡其他地方的守卫一样，这个房间里的守卫会假定陌生人是新到的邪教徒，除非他们有理由认为不是（看到陌生人手持最近战斗中滴血的武器就是一个这样的理由）。"],flesh:`由德拉莫瑞·灰生挑选的二十名蜥蜴人作为他的后备警卫，使用这座东北塔楼作为他们的营房。这个房间是他们白天的待命室。当他们不在使用武器进行训练时，蜥蜴人在这个房间里赌博、锻炼，并讲述快乐时光的故事。Borngray维持这支力量作为对抗Pharblex和啵灵蛙背叛的保险。

像城堡其他地方的守卫一样，这个房间里的守卫会假定陌生人是新到的邪教徒，除非他们有理由认为不是（看到陌生人手持最近战斗中滴血的武器就是一个这样的理由）。除非受到挑衅，否则他们不会攻击，但他们也不会让任何人上楼或进入1J和1K区域，除非有非常好的理由。`,spotlightRefs:[],presentNpcIds:["npc_dralmorrer_borngray"],availableInfoIds:[],encounterIds:["enc_hotdq_14f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_150",locationId:"loc_hotdq_263",name:"1J. 蜥蜴人卧室",activation:{condition:{type:"always"},priority:0},skeleton:["这十个占主导地位的蜥蜴人守卫在这个房间里休息，因为它从锻造场（区域1H）得到的温暖比区域1K要多。",'它们睡在散布在地板上的芦苇垫上，没有任何明显的模式，每个蜥蜴人都在其"床"下存放着少量的个人物品。',"尽管房间没有秩序，但房间是干净且干燥的。","白天房间是空的，但晚上有十个蜥蜴人在这里睡觉。"],flesh:'这十个占主导地位的蜥蜴人守卫在这个房间里休息，因为它从锻造场（区域1H）得到的温暖比区域1K要多。它们睡在散布在地板上的芦苇垫上，没有任何明显的模式，每个蜥蜴人都在其"床"下存放着少量的个人物品。尽管房间没有秩序，但房间是干净且干燥的。白天房间是空的，但晚上有十个蜥蜴人在这里睡觉。',spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_150"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_151",locationId:"loc_hotdq_263",name:"1K. 蜥蜴人卧室",activation:{condition:{type:"always"},priority:0},skeleton:["十个蜥蜴人守卫在这个房间里睡觉。","他们是Borngray的蜥蜴人守卫中较为弱势的一半，被分配到这个睡觉的房间，因为这个房间从锻造炉（区域1H）获得的温暖比区域1J少。",'他们睡在散布在地板上的芦苇垫上，没有任何明显的模式，每个蜥蜴人都在其"床"下存放着少量的个人物品。',"尽管缺乏秩序，但这个房间是干净且干燥的。","白天这个房间是空的，但到了晚上有十个蜥蜴人在这里睡觉。"],flesh:'十个蜥蜴人守卫在这个房间里睡觉。他们是Borngray的蜥蜴人守卫中较为弱势的一半，被分配到这个睡觉的房间，因为这个房间从锻造炉（区域1H）获得的温暖比区域1J少。他们睡在散布在地板上的芦苇垫上，没有任何明显的模式，每个蜥蜴人都在其"床"下存放着少量的个人物品。尽管缺乏秩序，但这个房间是干净且干燥的。白天这个房间是空的，但到了晚上有十个蜥蜴人在这里睡觉。',spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_151"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_152",locationId:"loc_hotdq_263",name:"1L. 礼拜堂",activation:{condition:{type:"always"},priority:0},skeleton:["多年来，这座小礼拜堂已经奉献给了几位不同的神祇，这取决于谁统治着城堡。","现在它是提亚马特的神龛，装饰着由蜥蜴人精心制作的龙后木雕。","工艺出奇地好，尽管提亚马特的大多数形象更像蜥蜴人而不是龙。","邪教徒尊敬提亚马特，但不崇拜她，所以这个小礼拜堂很少用于任何可以被认为是宗教仪式或集会的活动。","相反，个别邪教徒或小团体有时会退到这里，静静地思考当龙后崛起时世界将如何遭受苦难。"],flesh:`多年来，这座小礼拜堂已经奉献给了几位不同的神祇，这取决于谁统治着城堡。现在它是提亚马特的神龛，装饰着由蜥蜴人精心制作的龙后木雕。工艺出奇地好，尽管提亚马特的大多数形象更像蜥蜴人而不是龙。邪教徒尊敬提亚马特，但不崇拜她，所以这个小礼拜堂很少用于任何可以被认为是宗教仪式或集会的活动。相反，个别邪教徒或小团体有时会退到这里，静静地思考当龙后崛起时世界将如何遭受苦难。

在提亚马特的黑龙头雕像下方藏有一个隐蔽的隔间，里面放着一把淬毒匕首。通过一次成功的DC 15智力（调查）检定可以发现它。只有瑞兹米尔和参与雕刻雕像的少数蜥蜴人（包括裂颚）知道这把匕首的存在。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_152_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_154",locationId:"loc_hotdq_263",name:"1M. 储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["当邪教徒接管时，所有来自礼拜堂的垃圾——破碎的凳子、腐烂的祭坛布、腐蚀的圣像——都被倾倒在这个房间里。","这里没有任何有价值的东西。"],flesh:"当邪教徒接管时，所有来自礼拜堂的垃圾——破碎的凳子、腐烂的祭坛布、腐蚀的圣像——都被倾倒在这个房间里。这里没有任何有价值的东西。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_155",locationId:"loc_hotdq_263",name:"1N. 教区长住宅",activation:{condition:{type:"always"},priority:0},skeleton:["这原本是城堡牧师的居住区，包括许多坚固的储物柜，用于存放法衣和宗教用品。","所有的柜子很久以前就被砍开并被洗劫一空。","四名龙爪（见附录D）搬进了这个房间，并将其变成了他们的居住区。","他们负责维护区域2N的图书馆。"],flesh:"这原本是城堡牧师的居住区，包括许多坚固的储物柜，用于存放法衣和宗教用品。所有的柜子很久以前就被砍开并被洗劫一空。四名龙爪（见附录D）搬进了这个房间，并将其变成了他们的居住区。他们负责维护区域2N的图书馆。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_155"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_156",locationId:"loc_hotdq_263",name:"10. 弓箭手走廊",activation:{condition:{type:"always"},priority:0},skeleton:["这个长廊通过箭缝俯瞰堤道。","在遭受攻击的情况下，弓箭手可以占据这里。","邪教徒没有使用它，除了蜘蛛网外，它是空的。"],flesh:"这个长廊通过箭缝俯瞰堤道。在遭受攻击的情况下，弓箭手可以占据这里。邪教徒没有使用它，除了蜘蛛网外，它是空的。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_157",locationId:"loc_hotdq_263",name:"1P. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["邪教徒的餐食是由一位矮人厨师和他的两名人类助手（平民）在这个厨房里准备的。","这位厨师是一位名叫Tharm Tharmzid的矮人。","如果有机会，他会痛苦地抱怨这里缺乏制作美食的食材。","他收到的所有东西都来自蜥蜴人猎人和采集者，他们对于什么可食用什么不可食用的观念与Tharmzid的并不相符。"],flesh:"邪教徒的餐食是由一位矮人厨师和他的两名人类助手（平民）在这个厨房里准备的。这位厨师是一位名叫Tharm Tharmzid的矮人。如果有机会，他会痛苦地抱怨这里缺乏制作美食的食材。他收到的所有东西都来自蜥蜴人猎人和采集者，他们对于什么可食用什么不可食用的观念与Tharmzid的并不相符。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_158",locationId:"loc_hotdq_263",name:"1Q. 大厅",activation:{condition:{type:"always"},priority:0},skeleton:["邪教徒在这间高大宽敞的大厅里用餐并进行大部分活动。","大厅的东端用于用餐和社交。","西半部是检查、分类和重新打包从卡纳斯路屋运来的走私品的地方，之后这些走私品会被运送到西南塔下的传送门。","大厅那一半的桌子上摆满了贵重物品。","然而，只要还有任何邪教徒活着，抢劫就不可能进行。"],flesh:`邪教徒在这间高大宽敞的大厅里用餐并进行大部分活动。大厅的东端用于用餐和社交。西半部是检查、分类和重新打包从卡纳斯路屋运来的走私品的地方，之后这些走私品会被运送到西南塔下的传送门。大厅那一半的桌子上摆满了贵重物品。

然而，只要还有任何邪教徒活着，抢劫就不可能进行。在白天，总会有十二名邪教徒（入门级别的）在大厅工作，并且有四名龙爪（见附录D了解具体数值）监视着他们。大多数邪教徒是人类，但所有角色种族都有代表。确切的组合并不重要。

如果大礼堂有任何骚动，所有能听到的人都会响应呼救声。西南塔中的邪教徒和内院的守卫龙兽会在第三回合开始时出现，而外院的任何啵灵蛙或蜥蜴人会在第四回合开始时响应。

在夜晚，两只守卫龙兽（见附录D以获取具体数值）在大礼堂中睡觉，而第三只守卫龙兽在大厅和内院巡逻。即使在睡觉时，守卫龙兽也保持正常警觉状态。

房间的西南角是一个临时的木工作坊，邪教徒在这里制作新的箱子和盒子来存放赃物。或者，你可以自己创造你自己的专家级宝藏。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_158"],treasureSlotIds:["trs_hotdq_158_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色有机会翻找这些堆垛并保留他们发现的东西，他们将获得450金币，520银币，80铜币，22颗半宝石（5颗每颗35金币，6颗每颗45金币，6颗每颗55金币，4颗每颗65金币，1颗80金币），以及一瓶高等治疗药水。"},{id:"scn_hotdq_15a",locationId:"loc_hotdq_263",name:"1R. 西南塔前厅",activation:{condition:{type:"always"},priority:0},skeleton:["沼泽水从地基的裂缝渗入这个房间，在凹陷的岩石地板上积成几英寸深的水坑，空气中弥漫着令人窒息的霉味。","邪教徒们在地板上铺设了木板走道，以便他们能在两个门口之间行走而不弄湿双脚。","这个房间除了作为1Q和1S区域之间的通道外，没有其他用途。"],flesh:"沼泽水从地基的裂缝渗入这个房间，在凹陷的岩石地板上积成几英寸深的水坑，空气中弥漫着令人窒息的霉味。邪教徒们在地板上铺设了木板走道，以便他们能在两个门口之间行走而不弄湿双脚。这个房间除了作为1Q和1S区域之间的通道外，没有其他用途。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_15b",locationId:"loc_hotdq_263",name:"1S. 地下入口",activation:{condition:{type:"always"},priority:0},skeleton:["1R区域的水坑没有延伸到这个房间，但气味却弥漫进来。","正因为如此，邪教徒仅将这个房间用作通往其他区域的通道。","这个房间最重要的特点是通往城堡下方洞穴的楼梯。","它正好位于通往塔楼第二层楼梯的正下方。","两组楼梯之间都没有门道。"],flesh:`1R区域的水坑没有延伸到这个房间，但气味却弥漫进来。正因为如此，邪教徒仅将这个房间用作通往其他区域的通道。

这个房间最重要的特点是通往城堡下方洞穴的楼梯。它正好位于通往塔楼第二层楼梯的正下方。两组楼梯之间都没有门道。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_15c",locationId:"loc_hotdq_263",name:"1T. 未使用的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间潮湿且发霉，尽管没有被水淹没。","由于潮湿，邪教徒不使用它，因此巨大的蜈蚣已经搬进来并筑了巢。","任何进入这个房间的人都会成为十只巨蜈蚣的目标。","他们的首要任务是清除蜈蚣，填补漏水，并总体上使房间变得适宜居住。"],flesh:`这个房间潮湿且发霉，尽管没有被水淹没。由于潮湿，邪教徒不使用它，因此巨大的蜈蚣已经搬进来并筑了巢。任何进入这个房间的人都会成为十只巨蜈蚣的目标。

他们的首要任务是清除蜈蚣，填补漏水，并总体上使房间变得适宜居住。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_15c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色伪装成邪教派来的增援，他们将被分配到这个房间作为他们的住处。"},{id:"scn_hotdq_15d",locationId:"loc_hotdq_263",name:"1U. 城堡入口",activation:{condition:{type:"always"},priority:0},skeleton:["主城堡的入口比内院的地面高出三个台阶。","一扇坚固的木门挡住了它，维护得很好，但在正常情况下，门永远不会上锁或闩上。","这个前厅是大厅的缩小版，有几套很少使用的桌椅。","螺旋楼梯通往二楼。"],flesh:`主城堡的入口比内院的地面高出三个台阶。一扇坚固的木门挡住了它，维护得很好，但在正常情况下，门永远不会上锁或闩上。

这个前厅是大厅的缩小版，有几套很少使用的桌椅。螺旋楼梯通往二楼。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_15e",locationId:"loc_hotdq_263",name:"1V. 西侧客房",activation:{condition:{type:"always"},priority:0},skeleton:["通常，这些房间无人使用，但阿兹巴拉·乔斯目前占用了它们。","它们相当暖和舒适。","乔斯在不与瑞兹米尔在区域1U、2N或3L商议时，会待在这里。","乔斯将所有真正贵重物品随身携带。","他留在这些房间里的仅有物品是他的衣物和旅行法术书——其中包含他准备的所有法术（见附录D）。"],flesh:"通常，这些房间无人使用，但阿兹巴拉·乔斯目前占用了它们。它们相当暖和舒适。乔斯在不与瑞兹米尔在区域1U、2N或3L商议时，会待在这里。乔斯将所有真正贵重物品随身携带。他留在这些房间里的仅有物品是他的衣物和旅行法术书——其中包含他准备的所有法术（见附录D）。法术书被锁在一个镶银红木盒子里。锁可以通过一次成功的DC 15敏捷检定打开，但如果掷骰结果低于20，撬锁行为会触发一个魔法结界，其效果与en=Melf's Acid Arrow法术相同；强酸箭射向打开盒子的角色，立即造成4d6强酸伤害，并在该角色的下一回合结束时再造成4d6强酸伤害。如果该角色成功通过一次DC 15敏捷豁免，伤害减半。用钥匙打开盒子会自动解除陷阱；乔斯将钥匙系在脖子上的一根细线上随身携带。",spotlightRefs:[],presentNpcIds:["npc_azbara_jos","npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_15f",locationId:"loc_hotdq_15f",name:"第二层",activation:{condition:{type:"always"},priority:0},skeleton:["此处是「第二层」。"],flesh:"",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_160",locationId:"loc_hotdq_15f",name:"2A. 上部瓮城",activation:{condition:{type:"always"},priority:0},skeleton:["尽管比下层干净得多，城门楼的上层仍然是一片混乱。","泥泞的、带有蜘蛛网痕迹的啵灵蛙的脚印在楼梯上上下下，遍布整个地板。","这个区域由九名啵灵蛙日夜值守，但在夜间，他们往往会在岗哨上睡觉。","这个瓮城的层面没有屋顶。","成百上千个西瓜大小的石头堆放在城垛周围，准备用来投掷攻击者的头部。"],flesh:`尽管比下层干净得多，城门楼的上层仍然是一片混乱。泥泞的、带有蜘蛛网痕迹的啵灵蛙的脚印在楼梯上上下下，遍布整个地板。这个区域由九名啵灵蛙日夜值守，但在夜间，他们往往会在岗哨上睡觉。

这个瓮城的层面没有屋顶。成百上千个西瓜大小的石头堆放在城垛周围，准备用来投掷攻击者的头部。许多堆石头已经倒塌，而啵灵蛙们太懒惰，没有重新堆叠它们。

堤道完全暴露在设在闸楼后方的弓箭手的视线中，但啵灵蛙很少注意那个方向。

这个区域的主要特色是一个由巨大的空心原木雕刻而成的信号鼓。当它被用力敲打时，声音可以传到数英里之外。啵灵蛙用这个鼓发送许多不同的信号：他们可以召回巡逻队和觅食者回到城堡，唤醒营地，指示用餐时间，宣布卫兵换岗，并在城堡遭到攻击时发出一般警报。这个鼓在典型的一天中会被听到大约六次，所有住在城堡的人都知道不同鼓声的含义。角色们如果不询问别人，就不会知道它们的含义。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_160"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_161",locationId:"loc_hotdq_15f",name:"2E. 腐烂的地板",activation:{condition:{type:"always"},priority:0},skeleton:["西北塔楼的第二层状况很差。","地板已经完全腐烂或掉落到下面的泥浆中，留下了大洞，而剩余的地板也不大可能承受一个人的重量。","梁木仍然结实，但上面覆盖着滑腻的真菌和霉菌。","环绕外墙的石阶蜿蜒至一个小的（大约3尺乘3尺）石质平台，然后继续向上通往第三层。","只要角色停留在平台上或台阶上，他们就不会有坠落的危险。"],flesh:`西北塔楼的第二层状况很差。地板已经完全腐烂或掉落到下面的泥浆中，留下了大洞，而剩余的地板也不大可能承受一个人的重量。梁木仍然结实，但上面覆盖着滑腻的真菌和霉菌。要安全地穿过这一层而不滑倒并掉入区域1E的糟糕境地，需要进行一次成功的DC 10敏捷（特技）检定。

环绕外墙的石阶蜿蜒至一个小的（大约3尺乘3尺）石质平台，然后继续向上通往第三层。只要角色停留在平台上或台阶上，他们就不会有坠落的危险。

一个活板门在天花板处关闭了楼梯的顶部。门用一个简单的木制旋转按钮锁住。门上还带有警告标志，但由于警告是近一个世纪前用粉笔画的，现在几乎看不见了。只有通过成功的DC20感知（察觉）检定才能注意到它。注意到粉笔标记后，任何能读懂矮人语的人都可以正确地将其解释为一个警告，表明强大的不死生物居住在隔壁的房间里。几十年前，冒险家们在区域3E遇到幽灵后在这里放置了这个符文。

在塔楼的另一端，紧靠南墙，有一个上锁的箱子。这个锁可以用一套盗贼工具和一次成功的DC 10敏捷检定打开。箱子里装有1,825铜币、54银币和一对俗气的金耳环，如果熔化的话，这些耳环价值10金币。这个箱子是城堡的最后一批租户离开时留下的，他们认为不值得费力把它搬下楼。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_161_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_163",locationId:"loc_hotdq_15f",name:"2F. 马厩阁楼",activation:{condition:{type:"always"},priority:0},skeleton:["马厩上方的阁楼是蜥蜴人存放切割好的芦苇的地方，这些芦苇用作巨型蜥蜴马厩里的垫料。","除了芦苇和一些蝙蝠外，这里没有其他东西。"],flesh:"马厩上方的阁楼是蜥蜴人存放切割好的芦苇的地方，这些芦苇用作巨型蜥蜴马厩里的垫料。除了芦苇和一些蝙蝠外，这里没有其他东西。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_164",locationId:"loc_hotdq_15f",name:"2G. 上层兵营",activation:{condition:{type:"always"},priority:0},skeleton:["法布列斯·溅黏（见附录D以获取具体数值）和他的十个个人随从啵灵蛙将这个营房层面作为他们的居住区。","任何人都没有理由进入这个房间，包括邪教徒。","即使是Borngray或瑞兹米尔本人也不受欢迎。","这些啵灵蛙晚上总是在这里，但白天只有两个守卫在宝箱旁，当Pharblex大部分时间在城堡下的巨型青蛙孵化场里度过。","这两个守卫不信任任何人，其中一个装备了一只由鳄鱼骨头制成的号角，用于在出现麻烦时发出警报。"],flesh:`法布列斯·溅黏（见附录D以获取具体数值）和他的十个个人随从啵灵蛙将这个营房层面作为他们的居住区。任何人都没有理由进入这个房间，包括邪教徒。即使是Borngray或瑞兹米尔本人也不受欢迎。这些啵灵蛙晚上总是在这里，但白天只有两个守卫在宝箱旁，当Pharblex大部分时间在城堡下的巨型青蛙孵化场里度过。这两个守卫不信任任何人，其中一个装备了一只由鳄鱼骨头制成的号角，用于在出现麻烦时发出警报。

像所有被啵灵蛙占据的区域一样，这个房间一片混乱。芦苇垫子、脏篮子和动物骨头散落在地板上。

在房间的东南角有一个大型、坚固的箱子，被链条牢牢绑住，并上了挂锁。该锁可以通过使用盗贼工具和一次成功的DC 12敏捷检定打开。里面是Pharblex分得的蛙人报酬：银器和银金合金的珠宝、手镜、贝壳梳子、发夹和带有半宝石的胸针，总价值1,376金。大部分银器已经因氧化变黑。在文明地区，这些物品中的每一件都可能会出现在女性的梳妆台或床头柜上。这是德拉莫瑞·灰生暗自觉得极为搞笑的一个私人玩笑。对Pharblex来说，这一切都一样，因为他对于文明或人类贵族女性的时尚一无所知。`,spotlightRefs:[],presentNpcIds:["npc_pharblex_spattergoo","npc_rezmir","npc_dralmorrer_borngray"],availableInfoIds:[],encounterIds:["enc_hotdq_164"],treasureSlotIds:["trs_hotdq_164_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_166",locationId:"loc_hotdq_15f",name:"2H. 武器库",activation:{condition:{type:"always"},priority:0},skeleton:["当城堡被废弃时，这个房间存放了盔甲、武器和数百支箭。","金属已经锈成了尘土，箭矢变形无法使用，皮革被老鼠和其他害虫咬烂了。","现在这个房间成了城堡内蜥蜴人的非官方总部。","流氓蛙人和邪教徒从不上来这里。","军械库是城堡中最温暖的房间，这要归功于从锻造炉（区域1H）上升的热量。"],flesh:`当城堡被废弃时，这个房间存放了盔甲、武器和数百支箭。金属已经锈成了尘土，箭矢变形无法使用，皮革被老鼠和其他害虫咬烂了。现在这个房间成了城堡内蜥蜴人的非官方总部。流氓蛙人和邪教徒从不上来这里。

军械库是城堡中最温暖的房间，这要归功于从锻造炉（区域1H）上升的热量。住在城堡里的蜥蜴人聚集在这里——通常是在夜间——讨论他们的处境以及他们应该采取什么行动。辩论的主题是接受他们作为龙之教卑微仆人的命运，以一次光荣但自杀性的攻击对抗啵灵蛙，或者耐心等待直到他们有机会获胜再发动攻击。

蜥蜴人的新型武器储备隐藏在一堆生锈、腐烂、百年老的武器下面。只要花几分钟在这些杂物中搜寻，就能找到一两捆锋利、干净的短剑、匕首和长矛，它们整齐地包裹在油布中。

除非蜥蜴人部落在开会，否则这个房间通常都是空的。蜥蜴人很少在可能被观察到聚集的时候来这里，以避免引起怀疑或让人们对锻造室上方未使用的房间里有什么感到好奇。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_167",locationId:"loc_hotdq_167",name:"2I, J, K. 空置房间",activation:{condition:{type:"always"},priority:0},skeleton:["德拉莫瑞·灰生将整个东北塔分配给蜥蜴人使用，但他们主要在一楼睡觉和生活。","二楼的房间没有值得注意的或有价值的东西。","然而，如果角色们在这些区域探查，那些拥有被动感知（察觉）分数达到15或更高的人会注意到，2H、2I和2K区域之间的门开启和关闭时既平稳又无声，这与城堡里大多数其他门不同，后者在腐蚀的铰链上吱吱作响。","蜥蜴人保持这些门的润滑油状态良好，这样他们就可以在深夜悄无声息地溜到2H区域，而不会惊醒营房（区域1G和2G）中的任何啵灵蛙。","一个活板门关闭了通往区域3H的楼梯顶部。"],flesh:`德拉莫瑞·灰生将整个东北塔分配给蜥蜴人使用，但他们主要在一楼睡觉和生活。二楼的房间没有值得注意的或有价值的东西。

然而，如果角色们在这些区域探查，那些拥有被动感知（察觉）分数达到15或更高的人会注意到，2H、2I和2K区域之间的门开启和关闭时既平稳又无声，这与城堡里大多数其他门不同，后者在腐蚀的铰链上吱吱作响。蜥蜴人保持这些门的润滑油状态良好，这样他们就可以在深夜悄无声息地溜到2H区域，而不会惊醒营房（区域1G和2G）中的任何啵灵蛙。

一个活板门关闭了通往区域3H的楼梯顶部。活板门未被锁上，但一对铁钉已被钉在门和门框之间。打开门需要进行一次DC 10力量检定，或者花费十分钟小心翼翼地撬出铁钉。如果门被强行打开，且没有人准备好接住铁钉，它们会发出嘈杂的声音滚下楼梯。`,spotlightRefs:[],presentNpcIds:["npc_dralmorrer_borngray"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_168",locationId:"loc_hotdq_167",name:"2L. 外图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["德拉莫瑞·灰生 已将礼拜堂的二楼改造成图书馆。","这个位于楼梯顶部的房间包含一些从到达的宝藏中挑选出来的书籍箱和箱子，这些书籍尚未被整理和编目。"],flesh:"德拉莫瑞·灰生 已将礼拜堂的二楼改造成图书馆。这个位于楼梯顶部的房间包含一些从到达的宝藏中挑选出来的书籍箱和箱子，这些书籍尚未被整理和编目。",spotlightRefs:[],presentNpcIds:["npc_dralmorrer_borngray"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_169",locationId:"loc_hotdq_167",name:"2M. 阅览室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间里唯一的家具是一张小桌子和两把椅子。"],flesh:"这个房间里唯一的家具是一张小桌子和两把椅子。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_16a",locationId:"loc_hotdq_167",name:"2N. 图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["书籍和手稿排列在用回收木材制成的木架上。","一只龙翼（具体数值见附录D）和四名邪教徒（新入教者）大部分时间都在这里整理书籍。","自从宝藏开始流入Naerytar以来，德拉莫瑞·灰生就取出了所有引起他兴趣的书籍、羊皮纸、石板和其他书面材料。","他知道不能将它们据为己有；","当Naerytar城堡的工作接近尾声时，他将把这些宝藏转交给提亚马特的藏品。"],flesh:`书籍和手稿排列在用回收木材制成的木架上。一只龙翼（具体数值见附录D）和四名邪教徒（新入教者）大部分时间都在这里整理书籍。

自从宝藏开始流入Naerytar以来，德拉莫瑞·灰生就取出了所有引起他兴趣的书籍、羊皮纸、石板和其他书面材料。他知道不能将它们据为己有；当Naerytar城堡的工作接近尾声时，他将把这些宝藏转交给提亚马特的藏品。在那之前，他把书面材料保存在城堡里进行研究，并以此转移他对悲惨环境的注意力。瑞兹米尔知道这个图书馆，并赞成这样使用这些书籍，只要它们在提亚马特到来之前被送到龙井。

Borngray组建了一个令人印象深刻的图书馆。它包含一百多本书籍、四开本和手稿，涵盖了剑海岸的历史、自然哲学、数学、天文学、魔法，以及许多关于替代现实、时间和维度旅行的理论作品。如果这些藏品能在邪教徒将其转移或啵灵蛙破坏之前从城堡中移出，它将成为深水城任何图书馆或收藏家的无价之宝。`,spotlightRefs:[],presentNpcIds:["npc_dralmorrer_borngray","npc_rezmir"],availableInfoIds:[],encounterIds:["enc_hotdq_16a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_16b",locationId:"loc_hotdq_167",name:"2P. 厨房储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["偶尔但不是每天厨房（区域1P）需要的物品都存放在这里，以及不会变质的食物，如食用油、谷物、奶酪、葡萄酒和咸肉。"],flesh:"偶尔但不是每天厨房（区域1P）需要的物品都存放在这里，以及不会变质的食物，如食用油、谷物、奶酪、葡萄酒和咸肉。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_16c",locationId:"loc_hotdq_167",name:"2R. 邪教徒的寝室",activation:{condition:{type:"always"},priority:0},skeleton:["地位最低的邪教徒在这里睡觉。","在夜晚，有五名邪教徒在此。","其他时候，这个房间除了他们的芦苇床垫和存放在木箱里的简单物品外，是空无一物的。","2T区域的一个小石炉提供了微弱的温暖。"],flesh:"地位最低的邪教徒在这里睡觉。在夜晚，有五名邪教徒在此。其他时候，这个房间除了他们的芦苇床垫和存放在木箱里的简单物品外，是空无一物的。2T区域的一个小石炉提供了微弱的温暖。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_16c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_16d",locationId:"loc_hotdq_167",name:"2T. 邪教徒的卧室",activation:{condition:{type:"always"},priority:0},skeleton:["除此之外，这个房间空无一物，只有他们的芦苇床垫和存放在木箱里的简单物品。","一个小石炉使房间保持温暖。"],flesh:"除此之外，这个房间空无一物，只有他们的芦苇床垫和存放在木箱里的简单物品。一个小石炉使房间保持温暖。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_16d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"晚上，有七只龙翼（见附录D了解统计数据）在这里睡觉。"},{id:"scn_hotdq_16e",locationId:"loc_hotdq_167",name:"2U. 德拉莫尔·博恩格雷的公共休息室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间是休息室和办公室的结合体，西墙边的小壁炉提供热量。","一张写字台、一张大垫子椅子和一条长凳被拉到壁炉附近。"],flesh:"这个房间是休息室和办公室的结合体，西墙边的小壁炉提供热量。一张写字台、一张大垫子椅子和一条长凳被拉到壁炉附近。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_16f",locationId:"loc_hotdq_167",name:"2V, W. 博恩格雷的卧室和更衣室",activation:{condition:{type:"always"},priority:0},skeleton:["区域2V是Borngray的卧室，配有床、铺有地毯的桌子（带洗脸盆和梳洗用品，如梳子、刷子、肥皂、香水水）和一把凳子。","地毯覆盖了大部分地板。","一个大笼子里的乌鸦会大声叫，如果陌生人进入房间，声音足以在外院听到，而且叫声会唤醒并吸引来自区域2R和2T的邪教徒和龙翼成员来到塔楼。","Borngray除了睡觉、临睡前和刚起床时很少在这里。","除了精灵的衣物和个人物品外，一个小型保险箱隐藏在地毯下一块松动的木板下。"],flesh:`区域2V是Borngray的卧室，配有床、铺有地毯的桌子（带洗脸盆和梳洗用品，如梳子、刷子、肥皂、香水水）和一把凳子。地毯覆盖了大部分地板。一个大笼子里的乌鸦会大声叫，如果陌生人进入房间，声音足以在外院听到，而且叫声会唤醒并吸引来自区域2R和2T的邪教徒和龙翼成员来到塔楼。Borngray除了睡觉、临睡前和刚起床时很少在这里。

除了精灵的衣物和个人物品外，一个小型保险箱隐藏在地毯下一块松动的木板下。如果移动地毯，隐藏处会自动被发现；如果不移动地毯，则会自动被忽略。保险箱内含博恩格雷的应急资金：200金币、200银币和10颗每颗价值100金币的宝石。锁着的箱子可以用博恩格雷腰带上的钥匙打开，或者使用一把盗贼工具并通过一次DC 15的敏捷检定。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_16f_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_171",locationId:"loc_hotdq_171",name:"第三层",activation:{condition:{type:"always"},priority:0},skeleton:["城堡的许多最高层被邪教徒弃用。","其中一些仍然住着危险的生物，这些生物被封闭起来而不是被清除掉。"],flesh:"城堡的许多最高层被邪教徒弃用。其中一些仍然住着危险的生物，这些生物被封闭起来而不是被清除掉。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_172",locationId:"loc_hotdq_171",name:"3E. 幽灵圣所",activation:{condition:{type:"always"},priority:0},skeleton:["在建造者和原主人放弃纳埃瑞塔城堡几年后，城堡被一所名为观星学院的全女性占星学校重新占领。","占星师们搬进来几年后，他们被自己的领袖消灭了。","城堡的一些居民在西北塔最顶层的这个房间里以特别可怕的方式被谋杀。","他们以三个恶灵的形式仍然在这里，出没在这个房间里。","他们安静地休息，忽略城堡里的所有事物和所有人，直到有人打开活板门并进入。"],flesh:`在建造者和原主人放弃纳埃瑞塔城堡几年后，城堡被一所名为观星学院的全女性占星学校重新占领。占星师们搬进来几年后，他们被自己的领袖消灭了。城堡的一些居民在西北塔最顶层的这个房间里以特别可怕的方式被谋杀。他们以三个恶灵的形式仍然在这里，出没在这个房间里。他们安静地休息，忽略城堡里的所有事物和所有人，直到有人打开活板门并进入。

这个开放的房间内有一张大桌子，墙上的卷轴架上摆放着星图。三具尸体散落在地板上，随着时间的流逝变成了粉末状的骨头和尘土飞扬的破布。一旦有人进入房间，它们就会作为幽灵站起来并攻击。它们会在城堡内的任何地方追击，但它们不会离开城堡。如果无法触及打扰它们安息的人，它们会攻击其他生物，但它们更倾向于攻击入侵者。

大部分纸质星图一经触摸就会化为尘土，但还有三张足够坚固，可以带走。其中一张是在羊皮纸上绘制的，一张是在泥板上刻写的，还有一张是刻在薄铜卷上的。这些幸存的星图在深水城或其他主要城市的占星师那里每张可以卖到700金币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_172"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_174",locationId:"loc_hotdq_171",name:"3G. 未使用的房间",activation:{condition:{type:"always"},priority:0},skeleton:["最初，这个营房的楼层用于储藏和在恶劣天气下进行训练。","几个击剑假人和靶子仍然矗立在房间里，但如果用力过猛，它们就会散架。"],flesh:"最初，这个营房的楼层用于储藏和在恶劣天气下进行训练。几个击剑假人和靶子仍然矗立在房间里，但如果用力过猛，它们就会散架。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_175",locationId:"loc_hotdq_175",name:"3H, I, J. 蜘蛛巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["东北塔的顶层是五只巨蜘蛛的巢穴。","它们在夜晚在沼泽地狩猎，然后在白天返回塔中休息，通过屋顶的一个洞进入。","这些蜘蛛很警惕，所以从未被人看见进出。","蜥蜴人知道它们的存在，但没有向其他人提及。","这个房间没有悬挂着蛛网，但许多动物（包括啵灵蛙）的裂开的骨头散落在地板上。"],flesh:`东北塔的顶层是五只巨蜘蛛的巢穴。它们在夜晚在沼泽地狩猎，然后在白天返回塔中休息，通过屋顶的一个洞进入。这些蜘蛛很警惕，所以从未被人看见进出。蜥蜴人知道它们的存在，但没有向其他人提及。

这个房间没有悬挂着蛛网，但许多动物（包括啵灵蛙）的裂开的骨头散落在地板上。蜘蛛们蜷缩在天花板梁之间的深阴影中，当它们隐藏在这些缝隙中时，它们在敏捷（隐匿）检定上有优势。

一个陷阱门从区域2K的台阶上关闭，并且用两个铁钉卡在门和框架之间，使其卡住。关于打开门的说明，请参见2K区域的描述。这扇门足以防止蜘蛛进入塔楼的较低层，因为蜘蛛和蜥蜴人之间有一种默契，互不干扰。但这并不适用于像角色们这样的陌生人。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_175"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_176",locationId:"loc_hotdq_175",name:"3L. 雷兹米尔的办公室",activation:{condition:{type:"always"},priority:0},skeleton:["旧礼拜堂的第三层被改造成了龙语者瑞兹米尔的居住区。","即使瑞兹米尔有时离开城堡数日或数月，也没有其他人使用这些房间。","这四个房间里的家具都非常豪华——与城堡里的其他一切相比，这一点令人惊讶。","所有其他家具都是现场制作的，但瑞兹米尔的家具来自费伦最好的木工和装饰工的作坊。","它们是通过来自白袍塔利斯小屋的传送门带到城堡的。"],flesh:`旧礼拜堂的第三层被改造成了龙语者瑞兹米尔的居住区。即使瑞兹米尔有时离开城堡数日或数月，也没有其他人使用这些房间。

这四个房间里的家具都非常豪华——与城堡里的其他一切相比，这一点令人惊讶。所有其他家具都是现场制作的，但瑞兹米尔的家具来自费伦最好的木工和装饰工的作坊。它们是通过来自白袍塔利斯小屋的传送门带到城堡的。

这个前厅作为瑞兹米尔的办公室。它包含一张写字台，几个堆满清单和报告的小桌子，以及四把美观但不舒服的木椅。写字台上的文件中包括瑞兹米尔的笔记，描述了城堡下方的传送门以及如何操作它，包括它的口令（'Draezir'）。

楼梯顶部两侧各有一尊匹配的黑龙玉雕。一位严肃的收藏家可能会为这对玉雕支付高达3000金币。它们每个高3尺，重400磅。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_talis_the_white"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_176_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_178",locationId:"loc_hotdq_175",name:"3M. 雷兹米尔的起居室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间是一个休息室，配备了软垫椅子、垫子长凳和两张小地毯覆盖的桌子，布置得相当舒适。","瑞兹米尔不招待客人，所以除了她自己，没有人会使用这个房间。"],flesh:"这个房间是一个休息室，配备了软垫椅子、垫子长凳和两张小地毯覆盖的桌子，布置得相当舒适。瑞兹米尔不招待客人，所以除了她自己，没有人会使用这个房间。",spotlightRefs:[],presentNpcIds:["npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_179",locationId:"loc_hotdq_175",name:"3N. 雷兹米尔的卧室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间内有一张大床、两个衣柜、一个立式镜子和一个装备着备用鳞甲的盔甲架。","其中一个衣柜里装满了衣物。","另一个衣柜的门上画有五头龙的图案，里面装有瑞兹米尔的龙之邪教仪式服饰——紫色长袍、斗篷、披风和许多等级标志的物品，但不是黑龙面具。","因为瑞兹米尔是半龙人，所以她的衣服或盔甲不太可能适合其他人。","存放邪教服饰的衣柜设有陷阱。"],flesh:`这个房间内有一张大床、两个衣柜、一个立式镜子和一个装备着备用鳞甲的盔甲架。其中一个衣柜里装满了衣物。另一个衣柜的门上画有五头龙的图案，里面装有瑞兹米尔的龙之邪教仪式服饰——紫色长袍、斗篷、披风和许多等级标志的物品，但不是黑龙面具。因为瑞兹米尔是半龙人，所以她的衣服或盔甲不太可能适合其他人。

存放邪教服饰的衣柜设有陷阱。陷阱可以通过成功的DC 20 感知（察觉）检定来发现。一旦发现，可以使用瑞兹米尔的爪徽或一套盗贼工具并成功通过DC 20 敏捷检定来自动解除陷阱。如果衣柜在没有解除陷阱的情况下被打开，或者敏捷检定失败，陷阱会触发，导致酸液瓶爆炸。房间内的所有生物必须进行DC 15 敏捷豁免检定，失败者受到24（7d6）点酸液伤害，成功者则减半；触发陷阱的角色在此豁免检定中具有劣势。衣柜内的所有龙之邪教物品都会被酸液毁坏，房间内的大部分家具和其他物品，包括下面描述的龙雕像，也会被破坏。

房间里少数容易携带的贵重物品之一是一座2尺高的黑龙雕像，由真正的黑龙鳞片和爪子制成，眼睛是红宝石，牙齿是钻石。它栖息在一堆由真正的黄金和宝石组成的财宝堆上。对收藏家来说，它的价值是4800金币，重量仅为20磅。然而，粗暴处理会损坏它，其价值会降低到只有1200金币。`,spotlightRefs:[],presentNpcIds:["npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_179_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_17b",locationId:"loc_hotdq_175",name:"3O. 雷兹米尔的圣所",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间是瑞兹米尔私下崇拜提亚马特的地方。","唯一的装饰是门背后画的一幅五头龙从火山中升起的图案（除非有人在这个房间里时关上门，否则看不到这幅画）。","画家只有几种颜色可以使用，并且不是特别有才华，但五个头可以被识别为五种色彩龙。"],flesh:"这个房间是瑞兹米尔私下崇拜提亚马特的地方。房间很简陋。唯一的装饰是门背后画的一幅五头龙从火山中升起的图案（除非有人在这个房间里时关上门，否则看不到这幅画）。画家只有几种颜色可以使用，并且不是特别有才华，但五个头可以被识别为五种色彩龙。",spotlightRefs:[],presentNpcIds:["npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_17c",locationId:"loc_hotdq_175",name:"3P. 厨房储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含更多的厨房储藏，与区域2P相似。","这里只存放干货——面粉、糖、干果和蔬菜——以避免搬运液体的桶或桶上楼的麻烦。"],flesh:"这个房间包含更多的厨房储藏，与区域2P相似。这里只存放干货——面粉、糖、干果和蔬菜——以避免搬运液体的桶或桶上楼的麻烦。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_17d",locationId:"loc_hotdq_175",name:"3R. 邪教徒的卧室",activation:{condition:{type:"always"},priority:0},skeleton:["中层邪教徒拥有整个塔楼的顶层供他们使用。","晚上，会有六名龙翼（见附录D）。","除此之外，房间里空无一物，只有他们的芦苇床垫和存放在木箱中的个人物品。","一个小石制壁炉提供微弱的温暖。","通往区域3S的门总是关着，但没有上锁。"],flesh:"中层邪教徒拥有整个塔楼的顶层供他们使用。晚上，会有六名龙翼（见附录D）。除此之外，房间里空无一物，只有他们的芦苇床垫和存放在木箱中的个人物品。一个小石制壁炉提供微弱的温暖。通往区域3S的门总是关着，但没有上锁。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_17d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_17e",locationId:"loc_hotdq_175",name:"3S. 未使用的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的一部分屋顶和西北墙已经坍塌，所以它没有被用作任何用途。","通往区域3R的门始终关闭，但没有上锁。"],flesh:"这个房间的一部分屋顶和西北墙已经坍塌，所以它没有被用作任何用途。通往区域3R的门始终关闭，但没有上锁。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_17f",locationId:"loc_hotdq_175",name:"3T. 邪教徒的书房",activation:{condition:{type:"always"},priority:0},skeleton:["共享区域3R的六名邪教徒使用这个房间来研究他们的法术书以及练习他们的魔法技艺。","这个房间包含三个凳子、三个写字台和一盆水。"],flesh:"共享区域3R的六名邪教徒使用这个房间来研究他们的法术书以及练习他们的魔法技艺。这个房间包含三个凳子、三个写字台和一盆水。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_180",locationId:"loc_hotdq_175",name:"3U. 观星台",activation:{condition:{type:"always"},priority:0},skeleton:["星象观察者将城堡的顶层改造成了一个天文观测台。","他们安装的最有趣的设备是一个伊卢斯克的预言者——一种类似望远镜的装置，它有助于观测和研究天体，但也可以用来以类似于en=Arcane Eye法术的方式使用。","在那种模式下，先知可以查看距离它五十英里以内的位置。","以这种方式调整和聚焦设备需要相当多的技能和实践，而设备的破旧状况使这个过程更加困难。","瑞兹米尔 和 Borngray 都经常访问这个区域来研究先知。"],flesh:`星象观察者将城堡的顶层改造成了一个天文观测台。他们安装的最有趣的设备是一个伊卢斯克的预言者——一种类似望远镜的装置，它有助于观测和研究天体，但也可以用来以类似于en=Arcane Eye法术的方式使用。在那种模式下，先知可以查看距离它五十英里以内的位置。以这种方式调整和聚焦设备需要相当多的技能和实践，而设备的破旧状况使这个过程更加困难。

瑞兹米尔 和 Borngray 都经常访问这个区域来研究先知。这位精灵对它的使用取得了有限的成功，但瑞兹米尔已经掌握了它的使用方法。在过去的一年里，她使用先知来研究Voaraghamanthar在龙的巢穴中的情况。在那些侦察期间，瑞兹米尔发现了龙的秘密双胞胎。

为了保护这个区域，瑞兹米尔招募了四只石像鬼。它们白天和夜晚都栖息在要塞屋顶的四个角落，从地面上可以看到它们，它们也可以通过窗户看到天文台内部。只有瑞兹米尔和Borngray知道这些石像鬼是活的。如果有人没有两位教派官员之一的陪同就进入天文台，石像鬼就会撕开天文台的四个天花板舱口并发动攻击。这是它们唯一会响应的入侵。石像鬼不会在其他地方干预，除非直接接到瑞兹米尔的命令，除非是最紧急的情况，否则她不会下这样的命令。

一个角色在成功通过一个 DC 15 智力（奥秘）检定时，能够识别出观象台内的 伊卢斯克的预言者。在确定其真实性质后，使用它来观察远处的区域需要成功通过一个 DC 15 智力（奥秘）检定和一个 DC 15 敏捷（巧手）检定。如果智力检定失败，无法找到期望的位置。如果敏捷检定失败，图像过于扭曲，无法传达任何信息。如果敏捷检定结果为5或更低，先知的关键部分会断裂，使该物品无法使用。

这是角色们了解沃阿拉曼塔秘密的绝佳机会。

角色们离开时可能会尝试带走这个物品。远见者（farseer）体积庞大（大约40磅）且易碎。最糟糕的是，它已经遭受了近两个世纪的忽视。最轻微的粗暴处理都会使它破碎。一支由铜匠和贤者组成的团队，如果耐心工作，或许能够完整地将这个装置从纳埃瑞塔城堡（Castle Naerytar）中移除，但急于行动的冒险者们则没有机会。`,spotlightRefs:[],presentNpcIds:["npc_rezmir"],availableInfoIds:[],encounterIds:["enc_hotdq_180"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色发现它时，先知正聚焦于瓦瓦伦多的巢穴。"},{id:"scn_hotdq_181",locationId:"loc_hotdq_181",name:"城堡之下",activation:{condition:{type:"always"},priority:0},skeleton:["通过区域1S可以进入Naerytar城堡下的洞穴。","在顶部，台阶光滑且制作精良。","随着向下延伸，台阶变得粗糙，经过几个转弯，下降约20尺到达地牢地图的区域1。","这个地下区域主要是啵灵蛙的领地，他们在冰冷的湖中繁殖巨型青蛙。","Pharblex大部分时间都在这里度过，他的保镖和许多工人也是如此。"],flesh:`通过区域1S可以进入Naerytar城堡下的洞穴。在顶部，台阶光滑且制作精良。随着向下延伸，台阶变得粗糙，经过几个转弯，下降约20尺到达地牢地图的区域1。这个地下区域主要是啵灵蛙的领地，他们在冰冷的湖中繁殖巨型青蛙。Pharblex大部分时间都在这里度过，他的保镖和许多工人也是如此。

墙壁到处滴水，地面因潮湿而滑。温度稳定在50度。洞穴里没有门。

洞穴的天花板高度为10尺，除非另有说明。

区域1由灯笼明亮地照亮。所有其他区域都没有光线。

洞穴里充满了滴水声、抓挠的啮齿动物声和爬行的蜥蜴声。声音传播效果不佳；如果战斗持续超过三轮，打斗声会传到邻近的房间并引起注意。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_187",locationId:"loc_hotdq_181",name:"1. 入口洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["从纳里塔城堡西南塔下来台阶通向这个房间。","这个房间由挂在入口台阶旁边的一盏灯笼和另一盏挂在通往区域9的西北开口附近的灯笼明亮地照亮。","唯一的声音是来自区域3和9方向的滴水声。","向西北的台阶下降5英尺通向区域9。","向东南的台阶上升5英尺通向一个再次下降5英尺通向区域3的通道。"],flesh:`从纳里塔城堡西南塔下来台阶通向这个房间。这个房间由挂在入口台阶旁边的一盏灯笼和另一盏挂在通往区域9的西北开口附近的灯笼明亮地照亮。房间是空的。唯一的声音是来自区域3和9方向的滴水声。

向西北的台阶下降5英尺通向区域9。向东南的台阶上升5英尺通向一个再次下降5英尺通向区域3的通道。成功进行DC 10感知（察觉）检定来寻找泥泞的脚印，可以发现只有霸蛤怪使用东南的通道，从未有邪教徒或蜥蜴人使用过。

淹没在房间中心的水不过是一个小水坑；它在中心处的深度达到1尺。水略微呈酸性，但不足以造成损害。连接到区域2的墙上的缺口在水上方大约3尺高，所以大多数角色必须蹲下才能通过。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_188",locationId:"loc_hotdq_181",name:"2. 灰色软泥怪巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间是一只灰泥怪的巢穴，尽管所有的啵灵蛙或邪教徒都不知道它的存在。","偶尔，它会从自己的房间里滑出来吃掉一只巨型青蛙；","其他时间，它则保持隐蔽。","这种软泥怪与周围的石头完美融合，并且有足够的时间来伪装自己。","将软泥怪的敏捷（隐匿）检定与角色们的被动感知（察觉）分数进行比较，以确定他们中的一个或多个人是否发现了它。"],flesh:`这个房间是一只灰泥怪的巢穴，尽管所有的啵灵蛙或邪教徒都不知道它的存在。偶尔，它会从自己的房间里滑出来吃掉一只巨型青蛙；其他时间，它则保持隐蔽。这种软泥怪与周围的石头完美融合，并且有足够的时间来伪装自己。将软泥怪的敏捷（隐匿）检定与角色们的被动感知（察觉）分数进行比较，以确定他们中的一个或多个人是否发现了它。

搜索的角色确实能在房间东端的水下看到宝石的闪光。在那个区域搜寻会找到一小把价值1800金币的奇特和半宝石（2颗每颗50金币，5颗每颗100金币，1颗200金币，1颗400金币，1颗600金币）。这些宝石来自一个不太虔诚的邪教徒，他每次有机会就会把一把硬币和其他宝藏物品扔进2号区域。他计划在邪教离开后回到城堡并收集他的"退休基金"。他不知道的是，居住在2号区域的软泥怪在经过它的巢穴时会捞起这些物品。除了宝石以外，所有物品都在软泥怪体内溶解。这些石头吸引了这个生物微小的大脑，所以它"吐出"宝石并收集它们。软泥怪不会打扰那些进入、四处看看然后离开的人。如果被攻击，它会反击，并且如果有人拿走宝石，它会（很可能是突袭）攻击任何人。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_188"],treasureSlotIds:["trs_hotdq_188_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_18a",locationId:"loc_hotdq_181",name:"3. 泥泞房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的地板被一英尺深的粘稠恶臭泥浆淹没，使得整个房间成为3。","布林妖们在这泥浆中打滚，既因为他们喜欢这样，也因为法布莱克斯规定的某些晦涩的仪式目的。","两只啵灵蛙维持着泥浆的浓度和深度，这正是布林妖们所偏爱的。","向西的台阶陡峭地下降10英尺，通向区域4。","台阶顶部的一排石头挡住了大部分泥浆，使之不至于涌入台阶，但仍有足够的泥浆使台阶变得湿滑。"],flesh:`这个房间的地板被一英尺深的粘稠恶臭泥浆淹没，使得整个房间成为3。布林妖们在这泥浆中打滚，既因为他们喜欢这样，也因为法布莱克斯规定的某些晦涩的仪式目的。两只啵灵蛙维持着泥浆的浓度和深度，这正是布林妖们所偏爱的。

向西的台阶陡峭地下降10英尺，通向区域4。台阶顶部的一排石头挡住了大部分泥浆，使之不至于涌入台阶，但仍有足够的泥浆使台阶变得湿滑。每个走下这些台阶的角色都必须成功进行一次DC 8敏捷豁免，以避免跌入区域4。跌落会造成1d4点钝击伤害，并发出很大的噪音。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_18a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色们进入时，它们不会立即发起攻击，但它们怀有敌意且易怒。"},{id:"scn_hotdq_18b",locationId:"loc_hotdq_181",name:"4. 蜈蚣巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间是空的，但成群的蜈蚣生活在西墙的壁龛和凹室中。","它们会被火把的恐慌驱散，但提灯、蜡烛和en=Light法术不会打扰它们。","它们会攻击任何没有携带至少一支点燃火把的队伍。","每个队伍成员会遭遇两群蜈蚣群。"],flesh:"这个房间是空的，但成群的蜈蚣生活在西墙的壁龛和凹室中。它们会被火把的恐慌驱散，但提灯、蜡烛和en=Light法术不会打扰它们。它们会攻击任何没有携带至少一支点燃火把的队伍。每个队伍成员会遭遇两群蜈蚣群。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_18b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_18c",locationId:"loc_hotdq_181",name:"5. 空室",activation:{condition:{type:"always"},priority:0},skeleton:["向西的台阶下降5尺到达区域6。"],flesh:"向西的台阶下降5尺到达区域6。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_18d",locationId:"loc_hotdq_181",name:"6. 青蛙湖",activation:{condition:{type:"always"},priority:0},skeleton:["Pharblex和啵灵蛙在这座充满水的洞穴里饲养巨型青蛙。","洞穴的天花板高30尺。","水池的地面从岸边突然下降，水深在10到15尺之间变化。","大多数角色在入口处使用火把或灯笼无法看得那么远。","如果有人进入水中或走到海岬上，青蛙会大声叫唤并跳入水中。"],flesh:`Pharblex和啵灵蛙在这座充满水的洞穴里饲养巨型青蛙。洞穴的天花板高30尺。水池的地面从岸边突然下降，水深在10到15尺之间变化。

大多数角色在入口处使用火把或灯笼无法看得那么远。如果有人进入水中或走到海岬上，青蛙会大声叫唤并跳入水中。角色听到更多的叫声，至少有十二声溅水声来自区域7。如果他们在两轮后仍然在区域6或区域7，他们将被十二只巨蛙攻击。这些青蛙集中攻击它们可以吞下的小型角色。

青蛙通过池子东南角水面下的一个通道进出这个区域。这个通道连接着城堡外霸蛙小屋南边的水域。通道总长度为300英尺。距离这个池子入口80英尺的地方，隧道分叉；左侧的通道通向水面，右侧的通道延伸50英尺到一个死胡同。在一片漆黑中，游泳者几乎没有线索选择哪条隧道。一个 DC 15 智力（调查）检定可以揭示应该选择哪条隧道。

许多蝙蝠也在这个洞穴中栖息。它们可以通过屋顶的天然烟囱到达外面。通常情况下，蝙蝠不会打扰任何人，但如果发生战斗，它们会变得焦躁并在空气中飞舞。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_18d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`当角色进入时，一只巨蛙静止地坐在岛上观察他们。
如果角色坚持沿着东边和北边入口之间的岸边行走，青蛙不会有反应。
如果角色观察池子10到15分钟并成功通过一个 DC 12 智力（自然）检定，他们可以推断出这个事实。`},{id:"scn_hotdq_18e",locationId:"loc_hotdq_181",name:"7. 青蛙登陆点",activation:{condition:{type:"always"},priority:0},skeleton:["当这些巨型青蛙不在地下湖中游泳时，大多数会坐在洞穴里的岩石架上，偶尔用它们长长的舌头从空中抓蝙蝠。","在特定时间，这里可能会有多达十二只巨蛙，加上多达五名啵灵蛙。","如果巨型青蛙如区域6描述的那样攻击角色，啵灵蛙不会加入战斗。","相反，他们会潜入水中，并从角色们光线的边缘观看战斗。","如果巨型青蛙看起来可能会赢，啵灵蛙会加入战斗。"],flesh:`当这些巨型青蛙不在地下湖中游泳时，大多数会坐在洞穴里的岩石架上，偶尔用它们长长的舌头从空中抓蝙蝠。在特定时间，这里可能会有多达十二只巨蛙，加上多达五名啵灵蛙。如果巨型青蛙如区域6描述的那样攻击角色，啵灵蛙不会加入战斗。相反，他们会潜入水中，并从角色们光线的边缘观看战斗。如果巨型青蛙看起来可能会赢，啵灵蛙会加入战斗。如果巨型青蛙输了，啵灵蛙会游向水池东南角的水下出口（见区域6）。

啵灵蛙带来并喂给青蛙的大型动物的骨头也散落在地上。最令人不安的是三组锚定在石头上的铁镣铐，旁边有人、精灵、矮人和半身人的骨头。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_18e"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[76],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_18f",locationId:"loc_hotdq_181",name:"8. 蝌蚪孵化场",activation:{condition:{type:"always"},priority:0},skeleton:["在这个小水池中饲养着巨型青蛙的蝌蚪，直到它们长得足够大，能够避免在6号和7号区域被成年青蛙吃掉。","目前这个区域的蝌蚪对角色们是无害的。","从区域6来的通道由两个啵灵蛙守卫，以防止成年青蛙进入。","如果可能的话，他们会在区域6中躲避敌人。","如果被逼到角落或者在区域6发生战斗并且他们看到胜利的机会，他们会进行战斗。"],flesh:`在这个小水池中饲养着巨型青蛙的蝌蚪，直到它们长得足够大，能够避免在6号和7号区域被成年青蛙吃掉。目前这个区域的蝌蚪对角色们是无害的。

从区域6来的通道由两个啵灵蛙守卫，以防止成年青蛙进入。如果可能的话，他们会在区域6中躲避敌人。如果被逼到角落或者在区域6发生战斗并且他们看到胜利的机会，他们会进行战斗。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_18f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[76],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_190",locationId:"loc_hotdq_181",name:"9. 起重机",activation:{condition:{type:"always"},priority:0},skeleton:["分隔区域9和区域10的岩架是一个15尺的垂直下降。","为了将装满财宝的重箱子降到区域10，已经设置了一个木制的手摇起重机。","这个起重机在提升重量方面有效地将角色的力量值提高了三倍。","为了上下攀爬，一个木制梯子被固定在岩架上。"],flesh:"分隔区域9和区域10的岩架是一个15尺的垂直下降。为了将装满财宝的重箱子降到区域10，已经设置了一个木制的手摇起重机。这个起重机在提升重量方面有效地将角色的力量值提高了三倍。为了上下攀爬，一个木制梯子被固定在岩架上。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[76],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_191",locationId:"loc_hotdq_181",name:"10. 雾气房间",activation:{condition:{type:"always"},priority:0},skeleton:["从区域2流出并穿过区域9的雾气在此地累积到3尺深，然后流入区域6并逐渐消散。","除此之外，这个房间是空的。"],flesh:"从区域2流出并穿过区域9的雾气在此地累积到3尺深，然后流入区域6并逐渐消散。除此之外，这个房间是空的。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[76],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_192",locationId:"loc_hotdq_181",name:"11. 青蛙神殿",activation:{condition:{type:"always"},priority:0},skeleton:["Pharblex将这个区域变成了一个神龛，用以表达他对宗教扭曲的理解。","墙壁上的壁龛里填满了从拳头大小到南瓜大小的青蛙雕刻。","更大的雕刻品放置在地板上。","青蛙的简陋图案被划在壁龛周围的墙壁上，并用粉笔进行了着色。","任何拥有智力（宗教）技能的人都能识别出这些设计中包含了源自对格纳杜尔（黏液之神）和莎尔（阴影女神）崇拜的元素，但这些元素并未以传统方式使用。"],flesh:`Pharblex将这个区域变成了一个神龛，用以表达他对宗教扭曲的理解。墙壁上的壁龛里填满了从拳头大小到南瓜大小的青蛙雕刻。更大的雕刻品放置在地板上。青蛙的简陋图案被划在壁龛周围的墙壁上，并用粉笔进行了着色。

任何拥有智力（宗教）技能的人都能识别出这些设计中包含了源自对格纳杜尔（黏液之神）和莎尔（阴影女神）崇拜的元素，但这些元素并未以传统方式使用。法布莱克斯使用了他在抵达的宝藏货物中看到的宗教图标中的片段，但他并不理解它们的真正含义。通过成功的 DC 18 智力（宗教）检定，角色还能看到表明瑞美诺斯在此受到崇拜的迹象。瑞美诺斯是一个古老的实体，现在被认为处于深眠之中。据角色所知，瑞美诺斯是古代创造种族之一的神祇——如果它不仅仅是一个传说。从这间密室来看，建造此地的人对这些实体的了解极为浅薄。

除非洞穴中其他地方出现了干扰，否则Pharblex最有可能在这里，其次是区域12和7（按照这个顺序）。无论他走到哪里，法布列斯·溅黏（见附录D获取具体数值）都有十个啵灵蛙保护他。`,spotlightRefs:[],presentNpcIds:["npc_pharblex_spattergoo"],availableInfoIds:[],encounterIds:["enc_hotdq_192"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[77],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_193",locationId:"loc_hotdq_181",name:"12. 法布莱克斯的圣所",activation:{condition:{type:"always"},priority:0},skeleton:["Pharblex来到这个房间来沉思宇宙的伟大奥秘——或者他这样告诉他的追随者。","这是Pharblex唯一一个人去的地方。",'他的保镖在10号或11号区域等待，而Pharblex则在"与伟大的力量交流"。',"房间里有一把沾满泥的椅子和阅读桌、一盒蜡烛和一个木箱。","箱子没有上锁，但是有陷阱。"],flesh:`Pharblex来到这个房间来沉思宇宙的伟大奥秘——或者他这样告诉他的追随者。这是Pharblex唯一一个人去的地方。他的保镖在10号或11号区域等待，而Pharblex则在"与伟大的力量交流"。房间里有一把沾满泥的椅子和阅读桌、一盒蜡烛和一个木箱。

箱子没有上锁，但是有陷阱。如果移动箱子或者铰链没有正确打开，六个陶罐会从天花板隐藏的壁龛中掉落。掷一个d6来确定有多少罐子在地板上破碎。罐子里装有涂有致幻蛙毒的细粉。在室内的每个生物如果不是啵灵蛙或泥巴怪，则必须进行一次体质豁免检定，难度等级为11加上破碎罐子的数量。成功通过豁免的生物不受影响。未通过豁免检定的生物会陷入幻觉，认为室内所有其他生物都变成了噩梦般的、类似啵灵蛙的怪物。受影响的生物不能采取反应，并且在每个回合开始时必须掷骰子。如果骰子结果是奇数，生物必须使用它的行动和所有可用的移动力前往区域6，进入水池，并保持在水下。如果骰子结果是偶数，产生幻觉的生物会攻击它最近的生物，将其视为敌对。效果持续10分钟。

陷阱可以被检查箱子或天花板并成功通过 DC 12 感知 (察觉) 检定的人发现。未破碎的陶罐可以被保存并用作毒药手榴弹。每次投掷时，陶罐有 50 的几率会破裂。霸蛤和各种青蛙对此毒药的效果免疫。

Pharblex退到这个房间研究两本他从区域2N偷来的法术书。如果德拉莫瑞·灰生和瑞兹米尔知道这些书不见了，他们会非常愤怒。其中一本属于一个7级法师，包含到4级的法术，另一本是由一个9级法师写的，包含到5级的法术（你来选择法术）。作为法师法术，这些魔法超出了Pharblex学习或施放的能力；他对权力的渴望足够强烈，使他不断地研究这些文本，并希望有所突破。`,spotlightRefs:[],presentNpcIds:["npc_dralmorrer_borngray","npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[77],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_194",locationId:"loc_hotdq_181",name:"13. 前往灰峰山脉",activation:{condition:{type:"always"},priority:0},skeleton:["来自区域10的雾气渗透进这个房间，并将其填充到两到三尺深。","除了雾气，这个房间看起来是空的。","然而，它并不空。","一个永久的传送圈被雕刻在地板上，被雾气所遮挡。",'拥有被动感知（察觉）分数达到10或更高的角色能发现这个圆圈，而驱散雾气（例如使用"强风术"）则能让所有人看到这个圆圈。'],flesh:`来自区域10的雾气渗透进这个房间，并将其填充到两到三尺深。除了雾气，这个房间看起来是空的。

然而，它并不空。一个永久的传送圈被雕刻在地板上，被雾气所遮挡。拥有被动感知（察觉）分数达到10或更高的角色能发现这个圆圈，而驱散雾气（例如使用"强风术"）则能让所有人看到这个圆圈。

要通过这扇门，必须大声说出（低语即可）口令。口令（"Draezir"）可以在瑞兹米尔的桌子上的一张纸上找到，位于区域3L，或者如果德拉莫瑞·灰生在没有逃脱的情况下面临失败，也可以从他那里获得。当口令被说出来时，门内周长内的所有人员和物品都会被传送到白袍塔利斯狩猎小屋中相应的门（见第七章）。纳埃斯塔城堡和格雷峰山小屋是由同一位隐士法师建造的，这是他往返两地的交通方式。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_dralmorrer_borngray","npc_talis_the_white"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[77],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_195",locationId:"loc_hotdq_181",name:"奖励",activation:{condition:{type:"always"},priority:0},skeleton:["为击败的敌人授予标准经验值。","如果您使用里程碑经验规则，角色在激活门之后达到6级。"],flesh:"为击败的敌人授予标准经验值。如果您使用里程碑经验规则，角色在激活门之后达到6级。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[77],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_196",locationId:"loc_hotdq_196",name:"狩猎小屋",activation:{condition:{type:"always"},priority:0},skeleton:["角色们通过Naerytar城堡地牢中的传送圈，跟随龙语者瑞兹米尔或阿兹巴拉·乔斯，会被传送到灰峰山脉的高处。","这里的气候变化非常明显；","传送门和附近的小屋被寒风侵袭，周围的乡村地区森林茂密。","这个传送门是龙之邪教之前就存在的多个传送门之一，它帮助邪教领袖跨越大距离聚集。","传送门旁边是一个狩猎小屋，多年来一直由一系列当地领主使用。"],flesh:`角色们通过Naerytar城堡地牢中的传送圈，跟随龙语者瑞兹米尔或阿兹巴拉·乔斯，会被传送到灰峰山脉的高处。这里的气候变化非常明显；传送门和附近的小屋被寒风侵袭，周围的乡村地区森林茂密。这个传送门是龙之邪教之前就存在的多个传送门之一，它帮助邪教领袖跨越大距离聚集。

传送门旁边是一个狩猎小屋，多年来一直由一系列当地领主使用。这个小屋对于高级邪教徒来说是一个有用且中心的会面地点，其中包括一位被称为白袍塔利斯的紫色穿戴者。

塔利斯坚信她属于塞弗林的"核心圈子"，但塞弗林不信任她，并最近任命了一个名叫瓦拉姆的矮人作为他的龙语者，负责恢复白龙面具。冒险者们遇到了塔利斯和她的仆人，他们最终可能会在小屋中与塔利斯和她的船员战斗。他们也可能会与塔利斯讨价还价，达成协议，反对那些反对她上位的人。如果他们选择后者，她会帮助队伍到达附近的帕纳斯特村庄和天空之城城堡（见第八章）——但谈判相当危险，很容易导致战斗而不是达成协议。

尽管Talis不会提及任何细节，如面具或召唤，邪教徒普遍相信提亚马特到来的时机已经成熟。角色们可以找到几个线索来支持这一信念。

这个小屋以舒适而粗犷的风格建造，精美的挂毯和一些狩猎战利品装饰着房间。木质地板上布满了爪痕。成功的 DC 20 智力（自然）检定揭示这些痕迹并非普通猎犬所留，而是伏击龙兽的痕迹（见 附录D）。

大多数狩猎小屋的天花板高度为8尺。

这个小屋除了壁炉和蜡烛外没有其他照明。当百叶窗关闭时，室内是黑暗的。

在小屋里聚会的邪教徒们在计划好的集会时间前后来来往往。目前，一切处于平静状态。

Talis相信她是白龙面具的合法持有者，并且当面具的保管权交给了她憎恨的对手，矮人Varram时，她感到了极大的不公。Talis认为Varram是一个愚蠢的生物，她认为他无能且毫无价值，令人感到侮辱。她一直在观察邪教的宝藏增长，并且她希望能够采取行动，在邪教的层级结构中成为一个重要人物——当然，在邪教徒中她有很多支持者。

因为他们是敌人，瑞兹米尔没有警告Talis攻击者可能会通过传送门紧随其后，而是悄悄前往Skyreach Castle（见第八章），意图让冒险者消灭Talis。

如果瑞兹米尔在前面的章节中幸存下来，这位半龙角色会与奥瑟斯坦队长在帕纳斯特会面，以接收关于邪教袭击情况的完整报告，并告知队长可能到来的冒险者。成功追踪她需要进行一次DC 23 感知（求生）检定。

这个四臂巨魔是一个恶魔崇拜者，也是一个狂热的大型猎物猎人：没有什么比带回鲜血和骨头来喂养他的伏击龙，或者看到他更聪明的受害者的可怕恐惧更能让他高兴的了。特雷普辛主要关心战斗和混乱，但他发现为邪教服务使战斗和混乱更有可能发生。他对Talis非常忠诚，并热情地为龙之教服务。他的四条手臂只是使他更容易抓、撕和切碎任何太慢而无法逃脱他触及的东西。他让狗头人和小屋的人类仆人感到恐惧。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_azbara_jos","npc_talis_the_white","npc_captain_othelstan","npc_trepsin","npc_sandesyl_morgia"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`如果玩家没有意识到邪教希望将提亚马特带到领域，这一章节是揭示或确认这一信息的最佳时机。
如果角色们击败了瑞兹米尔，小屋相对缺乏警觉性就不足为奇了。
如果冒险者选择忽略小屋而跟随瑞兹米尔前往帕纳斯特，直接跳到第八章。
【邪教的标志和信号】龙之邪教在其成员之间使用几种信号和口令，最常见的是伸出所有五个手指，他们称之为"提亚马特敬礼"。此外，"向提亚马特致敬！"和"他们将崛起！"这两个短语经常被用作过路口令。
除了他们的信号外，邪教徒经常佩戴五色带，甚至使用红色、蓝色和绿色条纹作为编码的衣物。还有一些展示邪教徽章的旗帜，但大多数旗帜都被保留下来，用于龙族崛起接管的日子。在那之前，暗语和敬礼是龙之邪教成员之间最常用的识别信号。`,mapGeometry:{imageRef:"adventure/HotDQ/037-tod-07-01.webp"},offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_208",locationId:"loc_hotdq_196",name:"通用特征",activation:{condition:{type:"always"},priority:0},skeleton:["这座城堡由不透明的冰雕刻而成，并经过魔法强化，使其坚硬如岩石。","当它在地面时，城堡坐落在帕纳斯特郊外一处宽阔的峡谷中。","峡谷内的一切都因雾气而处于2状态，因此角色们可以接近城堡而不被其居民发现。","在城堡起飞之前，村庄的邪教徒和警卫们会驾驶满载补给品和宝藏的马车前往城堡的主城门（详情请见区域6）。","所有城堡的天花板都是30尺高，以适应建造它的云巨人。"],flesh:`这座城堡由不透明的冰雕刻而成，并经过魔法强化，使其坚硬如岩石。当它在地面时，城堡坐落在帕纳斯特郊外一处宽阔的峡谷中。峡谷内的一切都因雾气而处于2状态，因此角色们可以接近城堡而不被其居民发现。在城堡起飞之前，村庄的邪教徒和警卫们会驾驶满载补给品和宝藏的马车前往城堡的主城门（详情请见区域6）。

所有城堡的天花板都是30尺高，以适应建造它的云巨人。

城堡内所有的门都是由1尺厚的冰制成的，这种冰像石头一样坚硬和牢固，但重量只有一半。门配备了铁铰链和把手，尺寸适合巨人使用。一个普通的门高20尺，宽8尺，把手位于离地面10尺的高度。`,spotlightRefs:[],presentNpcIds:["npc_sandesyl_morgia"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_20c",locationId:"loc_hotdq_196",name:"重要非玩家角色",activation:{condition:{type:"always"},priority:0},skeleton:["这些对手之间并不完全信任彼此，不太可能对角色们展现出统一的战线。","相反，巨人为了保卫他们的家园而战斗，而邪教徒和龙则为了保卫他们的宝藏而战斗。","NPC们有数十名仆人、邪教徒和守卫可供调遣。","如果其中一两个被发现死亡，邪教徒就会在城堡内搜查凶手。","布拉戈提库斯这位云巨人并不是龙之邪教的特别热心支持者，但他将其视为一种方式，可以激发他的同胞巨人摆脱自满并采取行动。"],flesh:`天穹城堡是云巨人布拉戈提库斯的家园，还有一对名为Wigluf和Hulde的石巨人（云巨人的盟友），龙语者瑞兹米尔来自龙之邪教，两位来自泰伊的红袍法师（拉斯·莫达和阿兹巴拉·乔斯），一个名叫桑德西尔·莫吉亚的吸血鬼，以及一头名为Glazhael the Cloudchaser的成年白龙。

这些对手之间并不完全信任彼此，不太可能对角色们展现出统一的战线。相反，巨人为了保卫他们的家园而战斗，而邪教徒和龙则为了保卫他们的宝藏而战斗。NPC们有数十名仆人、邪教徒和守卫可供调遣。如果其中一两个被发现死亡，邪教徒就会在城堡内搜查凶手。

布拉戈提库斯这位云巨人并不是龙之邪教的特别热心支持者，但他将其视为一种方式，可以激发他的同胞巨人摆脱自满并采取行动。

布拉戈提库斯认为巨人已经变得软弱，打击一些龙类对巨人族有好处。因此，他表面上与邪教合作，但在暗地里，他正在巨人中聚集支持，敦促他们夺回作为世界主宰的正当地位。他认为提亚马特的崛起和龙类帝国的威胁将激励巨人联合起来。

布拉戈提库斯对"小人族"并没有冲突。他会高兴地告诉队伍，是的，他的城堡正在将大量宝藏运送到龙井，那里邪教正在集结力量，并积累了一堆宝藏，以期待提亚马特的到来（他不知道具体位置）。这支军队在提亚马特的崛起中有更详细的描述。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus","npc_rezmir","npc_rath_modar","npc_azbara_jos","npc_sandesyl_morgia"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们明智地利用这一点，这种缺乏信任将成为反派们的败笔。
如果角色们想帮助他对抗邪教徒，他会高兴地带他们去北方更有趣的地方，那里他正在集结自己的小军队，以在龙被引诱到开阔地带后与它们战斗。`},{id:"scn_hotdq_1a1",locationId:"loc_hotdq_196",name:"穿过大门",activation:{condition:{type:"always"},priority:0},skeleton:["从Naerytar城堡的大门在队伍穿过后立即关闭。","没有正确的密码，门就无法重新打开。","在山谷的山坡上，四周都是黑暗的松树林；","空气寒冷而清新。","你两侧各立着两块古老的石头，在前方不远处的小径上，是一座大房子，底层是石头建造的，上面是木结构。"],flesh:`从Naerytar城堡的大门在队伍穿过后立即关闭。没有正确的密码，门就无法重新打开。

传送门位于石制标记之间（见区域1)。`,spotlightRefs:[],presentNpcIds:["npc_sandesyl_morgia"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`在山谷的山坡上，四周都是黑暗的松树林；空气寒冷而清新。你两侧各立着两块古老的石头，在前方不远处的小径上，是一座大房子，底层是石头建造的，上面是木结构。视线所及之处还有更多的立石。
松树枝条在一阵阵急风中摇曳。一只松鼠吱吱叫着，然后陷入沉默。`},{id:"scn_hotdq_1a3",locationId:"loc_hotdq_1a3",name:"小屋外",activation:{condition:{type:"always"},priority:0},skeleton:["这座古老的建筑有一个木制和灰泥制成的上层楼层，下层是铺设有田石的楼层：所有的百叶窗都关闭着。","屋顶完全被苔藓覆盖。","一扇门微微敞开着。","烟从一个三个大烟囱中的一个冒出。","这座小屋矗立在一片森林中，周围是高耸的松树，位于极佳的狩猎区域。"],flesh:`这座小屋矗立在一片森林中，周围是高耸的松树，位于极佳的狩猎区域。可以通过前门、厨房门、带百叶窗的窗户（需通过 DC 10 敏捷检定，否则百叶窗会发出响声），或从狗舍和马厩可见的苔藓覆盖的屋顶上的一个洞（位于 区域17 上方）进入房屋。爬上这个洞需要成功通过 DC 15 力量（运动）检定。

幼龙犬舍（区域2）和飞龙马厩（区域3）是位于小屋后面的石头附属建筑，靠近一口井和一个木柴堆。调查犬舍会激起幼龙的大声嘶嘶声和特殊的低沉咆哮声，这是吸引整个小屋注意的一个确定方法。

屋顶上还有一个鹿鹰的巢（见区域22），它正位于区域18的正上方。

那些被动感知（察觉）得分为12或更高的人不会被两群巨魔和三只伏击龙（见附录D的具体数值）的突袭所突袭。这些生物一直在该地区徘徊。战斗提醒塔利斯她有伴了。巨魔充当小屋的保镖，任何不受欢迎的人都会被吃掉。`,spotlightRefs:[],presentNpcIds:["npc_trepsin"],availableInfoIds:[],encounterIds:["enc_hotdq_1a3"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"这座古老的建筑有一个木制和灰泥制成的上层楼层，下层是铺设有田石的楼层：所有的百叶窗都关闭着。屋顶完全被苔藓覆盖。一扇门微微敞开着。烟从一个三个大烟囱中的一个冒出。",dmGuidance:`如果队伍在小屋外逗留或探索附近的树林，就会发现有伴。
如果队伍被迫从据点撤退，四臂巨魔 特雷普辛（见区域2和"四臂巨魔"边栏）会追捕他们，并试图至少将其中一人带回据点进行审讯。`},{id:"scn_hotdq_1a7",locationId:"loc_hotdq_1a3",name:"1. 传送石",activation:{condition:{type:"always"},priority:0},skeleton:["这些苔藓覆盖的石头古老且风化；","地衣覆盖了它们大部分表面，但在一些沟槽中仍可看到白色油漆的痕迹。","通往Naerytar城堡的魔法门位于一对覆盖着苔藓的立石之间，从小屋的所有前厅都可以看到。","小屋附近还有三个其他的传送门，它们也位于类似的石头之间，邪教徒们已经重新调整了它们的目的地以适应他们自己的目的。","其中一个连接到遥远的北方（Talis拜访白龙盟友的地方），一个通向Thay的一个重兵把守的房间，还有一个通往Mulhorand的沙漠，靠近一个蓝龙的巢穴。"],flesh:`通往Naerytar城堡的魔法门位于一对覆盖着苔藓的立石之间，从小屋的所有前厅都可以看到。小屋附近还有三个其他的传送门，它们也位于类似的石头之间，邪教徒们已经重新调整了它们的目的地以适应他们自己的目的。其中一个连接到遥远的北方（Talis拜访白龙盟友的地方），一个通向Thay的一个重兵把守的房间，还有一个通往Mulhorand的沙漠，靠近一个蓝龙的巢穴。

这些额外的传送门不应该是冒险的主要部分，但如果角色决定在小屋逗留许多天，它们可以引入前来"在小屋做生意"的邪教徒非玩家角色。没有遥远图书馆中的资料或在天空之城城堡（Skyreach Castle）中拉斯·莫达的房间里的信息，激活这些传送门石的可能性很小（见第八章）。

这些沟槽是龙语字母，拼写出洛罗斯语中的单词，洛罗斯是尼瑟尔的语言。它们提到了"雪地"，"不安的沼泽地，充满悲伤的鸣叫声"，以及"红太阳"的土地，但没有提供具体的地名。随着时间的推移，这些石头被用来到达领域内许多地点。`,spotlightRefs:[],presentNpcIds:["npc_rath_modar","npc_trepsin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这些苔藓覆盖的石头古老且风化；地衣覆盖了它们大部分表面，但在一些沟槽中仍可看到白色油漆的痕迹。"},{id:"scn_hotdq_1a9",locationId:"loc_hotdq_1a3",name:"2. 狩猎犬舍",activation:{condition:{type:"always"},priority:0},skeleton:["这座石头建筑有一个长满苔藓的屋顶，没有窗户。","两端的坚固橡木门高9尺；","整个建筑看起来像一个小谷仓。","用力敲打它会让居住者过来开门，但他们可能会带来惊喜。","当门打开时，阅读："],flesh:`打开这扇门需要一个en=Knock法术或一次成功的DC 20力量检定；用力敲打它会让居住者过来开门，但他们可能会带来惊喜。当门打开时，阅读：

四臂巨魔，特雷普辛，正在要求邪教的识别信号。

狗舍里有六只伏击龙（见附录D了解具体数值），邪教徒用它们来追踪和杀死猎物和入侵者。这些龙服从特雷普辛作为它们群体的领袖。

特雷普辛穿着一件苔藓覆盖且肮脏的斗篷，他用井水将其浸湿；这不仅提供了良好的伪装，还提供了一定程度的防火保护。这件泥泞的斗篷使他能够忽略任何攻击或来源造成的前10点火焰伤害。

这些符文是用巨人语书写的。特雷普辛是恶魔领主巴菲门特的追随者，巴菲门特是猎人和屠戮者的主宰。这个奇怪且生锈的矛祭坛上放着腐烂的肉作为对恶魔领主的祭品。

特雷普辛 为自己保留了一些物品。其中包括六张貂皮（每张100金币），三张狐狸皮（每张25金币），以及他收藏中的珍品：一件完整的冬季狼皮斗篷（250金币），配有一个爪形的秘银扣用来固定斗篷（750金币）。`,spotlightRefs:[],presentNpcIds:["npc_trepsin"],availableInfoIds:[],encounterIds:["enc_hotdq_1a9"],treasureSlotIds:["trs_hotdq_1a9_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这座石头建筑有一个长满苔藓的屋顶，没有窗户。两端的坚固橡木门高9尺；整个建筑看起来像一个小谷仓。

门开了，腐烂肉的气味飘了出来。门内生物是一只穿着泥泞斗篷、牵着小龙的四臂巨魔。"你们想要什么？"它问道。"出示信号。"

在狗舍的后面，三根野猪矛被绑在一起，形成了一个粗糙但坚固的三脚架。一具动物尸体通过一根绳子悬挂在三脚架上：很可能是一头年轻的野猪，尽管苍蝇让人难以辨认。在它下方是一个被用血写成的符文围成一圈的碗。`,dmGuidance:`如果角色不知道信号或没有提供，巨魔会发动攻击。
如果角色们调查狗舍的内部，他们会找到一个令人不安的祭坛。
【四臂巨魔】有时当一个巨魔失去一个肢体时，它会再生出两个肢体来替换它失去的那一个。这可能导致巨魔拥有多个手臂。一个四臂巨魔使用巨魔的统计数据块，除了它是挑战等级6的怪物（2,300 XP），并且有以下动作代替巨魔正常的多重攻击动作：
巨魔进行五次攻击，一次用它的咬击，四次用它的爪击。如果两次或更多的爪击击中同一个目标，巨魔会撕扯目标，额外造成2d6的挥砍伤害。`,mapGeometry:{imageRef:"adventure/HotDQ/038-tod-07-02.webp"}},{id:"scn_hotdq_1b0",locationId:"loc_hotdq_1a3",name:"3. 马厩和井",activation:{condition:{type:"always"},priority:0},skeleton:["马厩有时会关上一只或三只飞龙，但目前是空的。","井有一个吊车、一个桶和冷水，看起来似乎是通过魔法在石头中雕刻而成的。","除此之外，并无特别之处。"],flesh:"马厩有时会关上一只或三只飞龙，但目前是空的。井有一个吊车、一个桶和冷水，看起来似乎是通过魔法在石头中雕刻而成的。除此之外，并无特别之处。",spotlightRefs:[],presentNpcIds:["npc_trepsin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_1b1",locationId:"loc_hotdq_1b1",name:"小屋底层",activation:{condition:{type:"always"},priority:0},skeleton:["下层铺着厚重、沾满泥污的地毯，墙壁是深色的木质。","这些是访客和仆人的公共区域。","角色可以通过前门、厨房门或百叶窗进入小屋。","小屋目前除了塔利斯之外，大多数高级邪教徒都不在，塔利斯在上层（见区域16）。","她只期待同教的邪教徒作为访客。"],flesh:`下层铺着厚重、沾满泥污的地毯，墙壁是深色的木质。这些是访客和仆人的公共区域。角色可以通过前门、厨房门或百叶窗进入小屋。在不让小屋的居住者察觉的情况下打开百叶窗需要进行一次成功的DC 12敏捷（隐匿）检定。

小屋目前除了塔利斯之外，大多数高级邪教徒都不在，塔利斯在上层（见区域16）。她只期待同教的邪教徒作为访客。大多数仆人会期待友好的访客来这里见她。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_1b2",locationId:"loc_hotdq_1b1",name:"4. 斗篷室和警卫站",activation:{condition:{type:"always"},priority:0},skeleton:["门厅大部分时间是空的。","一进门就是一个有挂衣钩和长凳的房间，用来放置斗篷和靴子。","一组生锈的长矛靠在角落里，被一个小龙雕像的爪子抓着。","这个入口右侧的警卫哨所通常无人值守，除非有大批敌对邪教徒聚集。","两个小箭缝使得向入口大厅射击变得容易，提供3。"],flesh:`门厅大部分时间是空的。

这个入口右侧的警卫哨所通常无人值守，除非有大批敌对邪教徒聚集。两个小箭缝使得向入口大厅射击变得容易，提供3。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一进门就是一个有挂衣钩和长凳的房间，用来放置斗篷和靴子。一组生锈的长矛靠在角落里，被一个小龙雕像的爪子抓着。"},{id:"scn_hotdq_1b4",locationId:"loc_hotdq_1b1",name:"5. 小厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个中央走廊设有楼梯、大型木门和一套精致的板甲。","在主入口两侧，有两套独立的精灵板甲，都涂有剥落的绿色油漆。","楼梯底部附近有几个人形的恶魔雕像。","入口处附近的沉重地毯被归来的猎人的泥靴弄脏了。","那两个恶魔雕像是石像鬼，它们会攻击带着武器进入大厅的生物。"],flesh:`入口处附近的沉重地毯被归来的猎人的泥靴弄脏了。那两个恶魔雕像是石像鬼，它们会攻击带着武器进入大厅的生物。

独立的精灵铠甲被刻有冰冻符文保护，成功进行一个 DC 20 感知（察觉）检定可以发现这些符文。任何角色如果触摸其中一套铠甲或从中穿过，必须进行一次 DC 15 体质豁免。若豁免失败，角色将受到 1d12 点寒冷伤害，并被 束缚（冻结在原地）1分钟。角色可以在其回合中使用一个动作进行一次 DC 15 力量检定，成功则提前结束该效果。

每套板甲都安装在一个粗糙的木制支架上，形状隐约像一个无头的精灵。冰冻符文可以用 en=Dispel Magic（DC 15）移除，之后盔甲将失去魔法属性。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个中央走廊设有楼梯、大型木门和一套精致的板甲。在主入口两侧，有两套独立的精灵板甲，都涂有剥落的绿色油漆。楼梯底部附近有几个人形的恶魔雕像。"},{id:"scn_hotdq_1b7",locationId:"loc_hotdq_1b1",name:"6. 三头猎犬休息室",activation:{condition:{type:"always"},priority:0},skeleton:["头顶上的粗梁被烟熏成了黑色。","房间里摆放着一张舒适的桌子和椅子、一个小衣柜，以及一套暗淡的黑色盔甲。","一幅大型挂毯展示了三只猎犬拖拽着一只白色野猪，它闪烁着奇异的光芒。","这件黑色盔甲是由恐怖铠甲构成的，专门为邪教服务，并被幻象伪装成普通的盔甲。","它被探测为魔法物品，如果被打扰，或者被Talis或穿着紫色龙之邪教长袍的人命令，它就会发动攻击。"],flesh:`这件黑色盔甲是由恐怖铠甲构成的，专门为邪教服务，并被幻象伪装成普通的盔甲。它被探测为魔法物品，如果被打扰，或者被Talis或穿着紫色龙之邪教长袍的人命令，它就会发动攻击。

恐怖铠甲储存了一个en=Evard's Black Tentacles法术。它被设定在面对三个或更多的对手时施放这个法术，且只能施放一次。）

这幅挂毯具有魔力，可以将踏入其中的人传送到小屋周围的森林中，大约距离小屋五英里远。它通常会将旅行者放置在鹿、山羊或其他野生动物附近。

这幅挂毯重约50磅，只有在挂在墙上时才有效，可以将生物传送到五英里范围内的随机位置；如果像地毯一样放在地上则无法工作，并且如果以任何方式损坏，它将失去其魔法属性。它的价值是2500金币，如果失去其传送属性，则价值400金币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_1b7"],treasureSlotIds:["trs_hotdq_1b7_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"头顶上的粗梁被烟熏成了黑色。房间里摆放着一张舒适的桌子和椅子、一个小衣柜，以及一套暗淡的黑色盔甲。一幅大型挂毯展示了三只猎犬拖拽着一只白色野猪，它闪烁着奇异的光芒。",dmGuidance:"（详见恐怖铠甲的统计数据块，了解其法术储存特性的详细信息。"},{id:"scn_hotdq_1ba",locationId:"loc_hotdq_1b1",name:"7. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["这里有一扇通往龙犬舍（区域2）和井（区域3）的门。","这个宽敞的厨房是一个繁忙的蜂巢。","靠墙的大火炉里燃烧着熊熊烈火，上面放着一个沸腾的炖锅和悬挂着的鹿腿。","洋葱和香草串像蜘蛛网一样交错在杂乱的桌子上方。","四个人类正在准备餐点：两个男人和两个女人。"],flesh:`这里有一扇通往龙犬舍（区域2）和井（区域3）的门。

这四名邪教徒是塔利斯的仆人。他们知道如何烹饪，并且能够进行战斗。如果遭到攻击，一名邪教徒会跑到幼龙犬舍（区域2）去叫特雷普辛和他的幼龙。那些增援将在3轮后到达。`,spotlightRefs:[],presentNpcIds:["npc_trepsin"],availableInfoIds:[],encounterIds:["enc_hotdq_1ba"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个宽敞的厨房是一个繁忙的蜂巢。靠墙的大火炉里燃烧着熊熊烈火，上面放着一个沸腾的炖锅和悬挂着的鹿腿。洋葱和香草串像蜘蛛网一样交错在杂乱的桌子上方。四个人类正在准备餐点：两个男人和两个女人。他们都在沸水、切肉刀和刀子的伸手可及的范围内，他们的目光非常清楚地表明他们不喜欢有人陪伴。"},{id:"scn_hotdq_1bc",locationId:"loc_hotdq_1b1",name:"8. 食品储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["这个食品储藏室储备充足，有豆类、黄油、熏火腿、硬饼干、新鲜苹果、鸡蛋、面粉袋和啤酒桶。","这里的食物足够度过一个漫长的冬天。","这些银子总共价值300金币，重量为50磅。"],flesh:`进行一次成功的 DC 18 智力（调查）检定可以揭示地板下的一个空洞，里面藏有一个保险箱，保险箱内储存着旅馆的高级餐具银器：24套餐具，包括黄油刀、汤匙、叉子和甜点匙——但没有刀。

这些银子总共价值300金币，重量为50磅。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_1bc_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个食品储藏室储备充足，有豆类、黄油、熏火腿、硬饼干、新鲜苹果、鸡蛋、面粉袋和啤酒桶。这里的食物足够度过一个漫长的冬天。"},{id:"scn_hotdq_1bf",locationId:"loc_hotdq_1b1",name:"9. 地下室",activation:{condition:{type:"always"},priority:0},skeleton:["地窖潮湿，散发着苹果和醋的气味。","一堵墙上排列着装有苹果的袋子和装有土豆的麻袋。","三名囚犯被锁链锁在另一堵墙上：一个留着被砍断和烧焦胡须的矮人，以及两个人——一个男人和一个女人。","那个女人受伤了。","他们的锁链被固定在铁环上，使他们刚好够不着食物。"],flesh:`他们全部被铁链锁住，营养不良，其中两名俘虏明显遭受了鞭打和殴打。邪教徒捕获了他们并将他们带到小屋进行审讯。

Craggnor是邪教的成员，也是Talis最憎恨的邪教徒矮人Varram the White的朋友。她捕获了Craggnor，希望发现一个她可以利用的弱点，但到目前为止，他抵抗了各种贿赂、魔法和身体折磨。她打算在收集到材料后尝试一种更强大的心灵阅读方法。

这位来自博德之门的年轻女子随商队来到帕纳斯特，偶然发现了邪教的行径，并被捕获。她非常害怕塔利斯，塔利斯不时会下来殴打她和Craggnor。她的脖子和肩膀上有淤伤和划痕。将她视为一个人类斥候，开始时只有1点生命值。她渴望逃脱，但除非得到治疗和装备，否则并不愿意与邪教纠缠。

这位人类祭司（牧师）是Amaunator的信徒，他没有受到虐待，这让他有点紧张。他说他从东边的希尔斯法（Hillsfar）来到这里，作为前往海岸神殿的朝圣之旅的一部分，这就是为什么Talis特别优待他——他不太可能知道任何有用的事情。

Caemon兄弟怀疑Talis试图将他拉拢到邪教，但他也担心Talis计划将他作为召唤仪式的一部分而牺牲，并正在尝试使用"用蜜捉更多苍蝇"的方法来赢得他的自由。Talis的善意完全是虚假的，但这可能会让角色们感到困惑，成为一个误导的线索。Caemon知道的不多，他有点心地善良但有些愚蠢。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"地窖潮湿，散发着苹果和醋的气味。一堵墙上排列着装有苹果的袋子和装有土豆的麻袋。三名囚犯被锁链锁在另一堵墙上：一个留着被砍断和烧焦胡须的矮人，以及两个人——一个男人和一个女人。那个女人受伤了。他们的锁链被固定在铁环上，使他们刚好够不着食物。"},{id:"scn_hotdq_1c4",locationId:"loc_hotdq_1b1",name:"10. 客房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间昏暗且寒冷。","家具包括一张盖着毯子和毛皮的床，上面有一张小桌子上放着一盏未点燃的油灯，一个洗脸架，一个便壶，以及一个装有炭火的火盆。","窗户是关闭着的。","这个房间为客人准备好了，但目前无人居住。","这里没有任何有价值的东西。"],flesh:"这个房间为客人准备好了，但目前无人居住。这里没有任何有价值的东西。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间昏暗且寒冷。家具包括一张盖着毯子和毛皮的床，上面有一张小桌子上放着一盏未点燃的油灯，一个洗脸架，一个便壶，以及一个装有炭火的火盆。窗户是关闭着的。"},{id:"scn_hotdq_1c6",locationId:"loc_hotdq_1b1",name:"11. 白色鹿角厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间温暖舒适，有一个大壁炉、填充皮革椅子和一张摆放着熏香肠和蜡烛的桌子。","一幅挂毯展示了一只壮丽的白鹿在山谷上方，一对绿龙在头顶翱翔，下方的树叶和树木间藏着鹿、野猪和刺猬。","每面墙上都挂着一两个战利品，包括两个精美的山羊头、一个带有10个分叉的麋鹿头、一个巨型鹰的头和爪子、一个金属公牛的头、一个狮鹫的头和前爪，以及一个白色皮毛的野猪头，其獠牙长达匕首的长度。","这个房间看起来除此之外是空的。","金属公牛头是一个石化铁牛的头像，所有的战利品都是真实的，尽管除了作为奇珍异宝外并无价值。"],flesh:`金属公牛头是一个石化铁牛的头像，所有的战利品都是真实的，尽管除了作为奇珍异宝外并无价值。

这里的挂毯价值大约400金币，但重40磅。此外，狮鹫的头部确实包含一些不寻常的东西：两瓶治疗药水的储藏。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_1c6_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间温暖舒适，有一个大壁炉、填充皮革椅子和一张摆放着熏香肠和蜡烛的桌子。一幅挂毯展示了一只壮丽的白鹿在山谷上方，一对绿龙在头顶翱翔，下方的树叶和树木间藏着鹿、野猪和刺猬。
每面墙上都挂着一两个战利品，包括两个精美的山羊头、一个带有10个分叉的麋鹿头、一个巨型鹰的头和爪子、一个金属公牛的头、一个狮鹫的头和前爪，以及一个白色皮毛的野猪头，其獠牙长达匕首的长度。这个房间看起来除此之外是空的。`},{id:"scn_hotdq_1c9",locationId:"loc_hotdq_1b1",name:"12. 狗头人仆人",activation:{condition:{type:"always"},priority:0},skeleton:["这个没有家具的房间里弥漫着一股恶臭，房间里挤满了二十多只狗头人，一半在睡觉，一半醒着。","二十四名狗头人仆从是小屋的女仆、马夫和厨师。","他们主要在夜间工作。","这些仆人避免战斗，但如果他们看到任何可疑的情况，他们会监视每位访客并向Talis汇报。"],flesh:"二十四名狗头人仆从是小屋的女仆、马夫和厨师。他们主要在夜间工作。这些仆人避免战斗，但如果他们看到任何可疑的情况，他们会监视每位访客并向Talis汇报。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个没有家具的房间里弥漫着一股恶臭，房间里挤满了二十多只狗头人，一半在睡觉，一半醒着。"},{id:"scn_hotdq_1cb",locationId:"loc_hotdq_1b1",name:"13. 人类仆人",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含三张床和一个简单的写字台。","房间闻起来很干净，地板也扫得一尘不染。","三个人类仆人（平民）在不担任小屋的服务员和迎宾员时在这里睡觉。","他们是由小屋的前主人，一个被邪教杀害的贵族Lord Marsten雇佣的。","当不服务Talis时，他们被限制在这个房间里。"],flesh:`三个人类仆人（平民）在不担任小屋的服务员和迎宾员时在这里睡觉。他们是由小屋的前主人，一个被邪教杀害的贵族Lord Marsten雇佣的。当不服务Talis时，他们被限制在这个房间里。这些心怀不满的仆人是首席男仆Gastyn，首席女仆Arlaenga，以及前首席猎人，现在的首席马夫Angrath Woodwise。他们对邪教徒心存怨恨，特别是对特雷普辛这个巨魔。

人类仆人们避免战斗，但他们监视每一位访客。Arlaenga正试图讨好他人，如果她看到任何可疑的事情，她会向Talis报告。

仆人们愿意向冒险者们透露有关狗舍里巨魔（区域2）的信息，以及整个邪教聚集策划的房间（区域20）。他们还知道，可以通过食物安抚鹿鹰（区域22），并且邪教在亚麻织品中保存着一面有价值的旗帜（区域15）。不过最重要的是，他们说他们见过"帕纳斯特附近的空中城堡"。`,spotlightRefs:[],presentNpcIds:["npc_trepsin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间包含三张床和一个简单的写字台。房间闻起来很干净，地板也扫得一尘不染。"},{id:"scn_hotdq_1cd",locationId:"loc_hotdq_1b1",name:"14. 浴室",activation:{condition:{type:"always"},priority:0},skeleton:["这个小房间里面有一个大型浴缸。","下面的浴室兼作洗衣房，供仆人们洗涤亚麻布、床上用品等。"],flesh:"这个小房间里面有一个大型浴缸。下面的浴室兼作洗衣房，供仆人们洗涤亚麻布、床上用品等。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_1ce",locationId:"loc_hotdq_1b1",name:"15. 床单",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间堆满了毯子、床单、各种动物皮毛、桌布、旗帜、横幅和卷起的地毯。","这里没有什么特别有价值的东西，但其中一面旗帜有五种颜色的条纹，分别是黑色、蓝色、绿色、红色和白色。","这面旗帜的用途是在接近Skyreach Castle时作为信号，挂在长矛或枪上飞行，以表明持旗者是友好的。","任何被俘的邪教徒都能解释这面旗帜的用途。"],flesh:"这里没有什么特别有价值的东西，但其中一面旗帜有五种颜色的条纹，分别是黑色、蓝色、绿色、红色和白色。这面旗帜的用途是在接近Skyreach Castle时作为信号，挂在长矛或枪上飞行，以表明持旗者是友好的。任何被俘的邪教徒都能解释这面旗帜的用途。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间堆满了毯子、床单、各种动物皮毛、桌布、旗帜、横幅和卷起的地毯。"},{id:"scn_hotdq_1d0",locationId:"loc_hotdq_1d0",name:"小屋上层",activation:{condition:{type:"always"},priority:0},skeleton:["二楼包括客人的卧室、武器库、用于邪教集会的宴会厅，以及Talis的私人房间。"],flesh:"二楼包括客人的卧室、武器库、用于邪教集会的宴会厅，以及Talis的私人房间。",spotlightRefs:[],presentNpcIds:["npc_galvan"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_1d1",locationId:"loc_hotdq_1d0",name:"16. 塔利斯大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个看似设备齐全的房间摆满了家具，可以用作吃饭或讨论重要事宜的地方。","房间里有三个男人穿着鳞甲、携带剑；","一位女士穿着覆盖白色鳞甲的长袍，手持镶嵌蓝色宝石的魔杖。","我认为你们是我的客人。","也许我们可以做生意。"],flesh:`这次遭遇是典型的场景，如果玩家愿意暂停，反派会在这里解释自己的动机和计划。

白袍塔利斯（见附录D获取具体数值）。她站在她的保镖后面，使用一根凛冬魔杖（见附录C）。Talis的保镖包括两个名叫Maelgot和Sorvic的人类老兵，以及一个名叫Kusphia的龙爪（见附录D）。如果Talis被杀，老兵们会投降，但Kusphia会战斗到死，为她死去的女主人复仇。

Talis 期望在小屋会见一些共谋者，讨论她自己在等级中上升的各种事务。同时，她知道她不能被视为对邪教利益不忠。

Talis对角色们保持警惕，但为了观察他们是否可能成为有用的工具，她提供了款待。一个观察者会注意到她虽然有礼貌但并不热情，她显然在寻找某些东西。

Talis希望通过让她的对手惨败来提升自己的等级。

她敦促角色们阻止一大批宝藏的运输。在瑞兹米尔指挥下的邪教徒们正在使用一位云巨人的飞行城堡来加快交付。塔利斯提出帮助角色们在它起飞前登上天空之城城堡（见第八章），并提供了一面旗帜（见区域15）以及一个有用的口令（"提亚马特，我们的母亲和力量"），这将允许他们安全地到达城堡。

拒绝塔利斯的慷慨提议会触发战斗。塔利斯大喊求援，这会让来自区域5，的1b4只石像鬼、来自区域6的恐怖铠甲、以及来自区域12的狗头人赶来，甚至还会向窗外呼喊巨魔特雷普辛。全力以赴——如果情况不妙，塔利斯会爬出窗户逃入森林或通过传送门（见区域1）。

Talis不是一个致命的反派角色；她是一个生还者，愿意投降并请求宽恕。实际上，她利用自己在邪教层级中的敌对关系和她最近的挫折，将自己描绘成一个"不满的邪教徒"，她可能不是很渴望，但是愿意提供信息。

一旦检定失败，她就会闭口不言——至少直到她被贿赂、威胁或用其他信息交换为止。

塔利斯指出邪教的五位领袖是"龙语者"，每一位都对特定种类的色彩龙具有亲和力。这些领袖的名字是赛维林红龙、加尔文蓝龙、内洛维绿龙、瑞兹米尔黑龙和瓦拉姆白龙。

她解释了区域15中旗帜的重要性，并透露了各种邪教的标志和信号（见本章开头的小节）。

如果这些还不够，她告诉他们邪教在一个附近隐藏的飞行城堡中拥有大量的财宝——但不会隐藏太久。如果被追问细节，Talis透露说这座城堡属于一个与邪教结盟的云巨人。她说，城堡隐藏在Parnast村附近，而这个村庄处于邪教的控制之下。

如果这些还不够，她以充满热情和崇拜的语调告诉队伍，一头伟大的白龙居住在城堡中。她称这头龙为'雪白的格拉扎尔，云追者，一头英俊的纯种北方龙。' 当讨论龙族时，她的语气听起来像个狂热者。

她对红袍法师了解不多，但透露说已经派出了一位红袍法师联络员来帮助安排将宝藏运输到邪教总部。

她可能愿意告诉队伍，邪教及其盟友正在遥远的南方的日落山脉中组建一支军队，以期待提亚马特的到来。`,spotlightRefs:[],presentNpcIds:["npc_talis_the_white","npc_rezmir","npc_trepsin","npc_severin","npc_galvan","npc_neronvain","npc_varram"],availableInfoIds:[],encounterIds:["enc_hotdq_1d1"],treasureSlotIds:[],eventIds:["evt_tod_talis_bargain"],tone:"tension",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:'这个看似设备齐全的房间摆满了家具，可以用作吃饭或讨论重要事宜的地方。房间里有三个男人穿着鳞甲、携带剑；一位女士穿着覆盖白色鳞甲的长袍，手持镶嵌蓝色宝石的魔杖。"欢迎。我认为你们是我的客人。也许我们可以做生意。"',dmGuidance:`如果角色们可以被利用为她的优势，她宁愿将他们派去对抗她的对手，而不是与他们战斗。
如果队伍接受了交易，Talis更愿意留下来，这样她就可以利用她的魔法不时地监视他们。
如果角色们坚持要她加入他们，她会勉强同意，但根据Skyreach Castle中事件的发展，她可能会反过来对抗他们。
如果角色们接受她的投降，只要询问她的角色继续进行一系列成功的 DC 15 魅力（游说）检定，她就会分享以下信息。`,mapGeometry:{imageRef:"adventure/HotDQ/043-tod-07-03.webp"},offerableQuestIds:["qst_main_tod"]},{id:"scn_hotdq_1d9",locationId:"loc_hotdq_1d0",name:"17. 军械库",activation:{condition:{type:"always"},priority:0},skeleton:["屋顶上的一个大洞使这个军械库暴露在自然环境中。","目前这里存放的武器非常少。","北边的架子上大部分是空的，而靠南墙的一个维护不善的武器架上挂着三支生锈的长矛和一张磨损的网。","附近有一个关闭的柜子。","搜查架子和武器架可以找到一把长剑、一盒20支十字弓弩箭、一盒10支箭、三根长矛和一张网。"],flesh:`搜查架子和武器架可以找到一把长剑、一盒20支十字弓弩箭、一盒10支箭、三根长矛和一张网。柜子没有上锁，里面有两把重十字弓和两把长弓。

其中一支生锈的长矛上镶嵌着秘银（价值50金币），另一支名为龙光一闪的长矛被施加了10次en=Daylight的魔法，用于在微光或黑暗森林的灌木丛中使用。命令短语是"提亚马特的眼睛闪耀"，用龙语符文写在长矛的护手上。`,spotlightRefs:[],presentNpcIds:["npc_galvan"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_1d9_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"屋顶上的一个大洞使这个军械库暴露在自然环境中。目前这里存放的武器非常少。北边的架子上大部分是空的，而靠南墙的一个维护不善的武器架上挂着三支生锈的长矛和一张磨损的网。附近有一个关闭的柜子。"},{id:"scn_hotdq_1dc",locationId:"loc_hotdq_1d0",name:"18. 塔利斯的卧室",activation:{condition:{type:"always"},priority:0},skeleton:["一张巨大的床被柔软的酒红色床罩覆盖着，壁炉里火焰噼啪作响，给房间带来温暖和舒适的气氛。","塔丽丝在这个房间里保管着一个上锁的箱子，她持有唯一的钥匙。","当箱子被打开时，+1 链甲散发出的光芒会从箱子里溢出。","光芒还照亮了箱子里的4000金币和一张法术卷轴，卷轴上记载了en=Scorching Ray。","两位老兵每人携带20金币，而Kusphia携带着一个价值40金币的银质邪教标志。"],flesh:`塔丽丝在这个房间里保管着一个上锁的箱子，她持有唯一的钥匙。使用盗贼工具的角色也可以通过一次成功的DC 21敏捷检定打开它。当箱子被打开时，+1 链甲散发出的光芒会从箱子里溢出。光芒还照亮了箱子里的4000金币和一张法术卷轴，卷轴上记载了en=Scorching Ray。

两位老兵每人携带20金币，而Kusphia携带着一个价值40金币的银质邪教标志。`,spotlightRefs:[],presentNpcIds:["npc_galvan"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_1dc_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[85],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一张巨大的床被柔软的酒红色床罩覆盖着，壁炉里火焰噼啪作响，给房间带来温暖和舒适的气氛。"},{id:"scn_hotdq_1df",locationId:"loc_hotdq_1d0",name:"19. 保镖室",activation:{condition:{type:"always"},priority:0},skeleton:["百叶窗是敞开的，允许光线照进来。","南墙上排列着四张未整理的床，其他的家具包括一张有四把椅子的桌子和一个酒架，酒架上有许多瓶子，其中大多数是未塞瓶塞且空的。","为Talis服务的老兵们占据了这些设备齐全的住处：他们是Maelgot、Sorvic和被称为老练的Wessic。","Wessic，一个六十岁的人类老兵，当角色们第一次出现时，他正在这里休息；","其他人在区域16。"],flesh:`为Talis服务的老兵们占据了这些设备齐全的住处：他们是Maelgot、Sorvic和被称为老练的Wessic。Wessic，一个六十岁的人类老兵，当角色们第一次出现时，他正在这里休息；其他人在区域16。Wessic穿着盔甲睡觉，并将武器存放在床下，触手可及。如果被唤醒，他会激烈战斗并大声呼救；这通常会引来Talis和其他守卫，但不会引来特雷普辛这个巨魔或旅馆的人类和狗头人仆人。如果降至其生命值的一半，他将尝试投降。

大多数的葡萄酒瓶都是空的，但剩下的十二瓶满的每瓶价值15金币。此外，其中一个空瓶里藏有一条被偷的金项链，价值250金币。`,spotlightRefs:[],presentNpcIds:["npc_trepsin","npc_galvan"],availableInfoIds:[],encounterIds:["enc_hotdq_1df"],treasureSlotIds:["trs_hotdq_1df_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[85],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"百叶窗是敞开的，允许光线照进来。南墙上排列着四张未整理的床，其他的家具包括一张有四把椅子的桌子和一个酒架，酒架上有许多瓶子，其中大多数是未塞瓶塞且空的。"},{id:"scn_hotdq_1e2",locationId:"loc_hotdq_1d0",name:"20. 龙后之室",activation:{condition:{type:"always"},priority:0},skeleton:["在这个宽敞的、30尺高的房间的一端，一个熊熊燃烧的壁炉发出热量和光亮，天花板由十根雕刻成龙形的木柱支撑。","五幅大型挂毯挂在墙上——西墙上有两幅，分别位于一扇门的两侧，东墙上并排挂着两幅，还有一幅特别宏伟的挂毯，它主宰了南墙，就在壁炉旁边。","这个房间曾经是宴会厅，现在被专门用于邪教集会，目前无人占用。","北墙上的一对双开门拉开后，露出一个石制阳台，可以俯瞰马厩、狗舍和井（详见区域2和3）。","五幅挂毯中有四幅展示了龙猎杀、捕食较弱小生物的场景，包括蓝龙攻击沙漠商队、精灵屈服于绿龙的气体吐息武器、红龙焚烧可能是深水城城堡区的地方，以及一只黑龙和白龙在布满废墟的寒冷沼泽上空盘旋。"],flesh:`这个房间曾经是宴会厅，现在被专门用于邪教集会，目前无人占用。北墙上的一对双开门拉开后，露出一个石制阳台，可以俯瞰马厩、狗舍和井（详见区域2和3）。

五幅挂毯中有四幅展示了龙猎杀、捕食较弱小生物的场景，包括蓝龙攻击沙漠商队、精灵屈服于绿龙的气体吐息武器、红龙焚烧可能是深水城城堡区的地方，以及一只黑龙和白龙在布满废墟的寒冷沼泽上空盘旋。每幅挂毯至少价值500金币，但每幅重约75磅，极其笨重。

第五幅挂毯展示了提亚马特，邪恶龙族的女王，在她的荣耀中，头戴金银冠冕，以宝石和金银线绣制。这幅挂毯宽达35尺，高20尺，展示了提亚马特摧毁城市，周围是崇拜的追随者。挂毯重约200磅，价值2500金币。仅仅移除半宝石就能得到石榴石、玛瑙、月光石等，总值约800金币。

仔细检查挂毯并通过一次成功的 DC 20 智力（历史）检定可以揭示它们在剑湾地区的位置。蓝龙正在攻击穿越安诺克沙漠的商队，白龙和黑龙在死人之沼上空盘旋，红龙在深水城附近，而绿龙显然在高等森林的精灵中肆虐，背景中的山脉证实了这一点。提亚马特本人被描绘在她的爪子中抓着深水城、无冬城和博德之门。

通过成功的 DC 20 感知（察觉）检定可以发现一扇隐藏门的轮廓。这扇门通向战利品室（区域 21）。`,spotlightRefs:[],presentNpcIds:["npc_galvan"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[85],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在这个宽敞的、30尺高的房间的一端，一个熊熊燃烧的壁炉发出热量和光亮，天花板由十根雕刻成龙形的木柱支撑。五幅大型挂毯挂在墙上——西墙上有两幅，分别位于一扇门的两侧，东墙上并排挂着两幅，还有一幅特别宏伟的挂毯，它主宰了南墙，就在壁炉旁边。"},{id:"scn_hotdq_1e6",locationId:"loc_hotdq_1d0",name:"21. 战利品室",activation:{condition:{type:"always"},priority:0},skeleton:["三个敞开的窗户透进光线和空气；","房间的墙壁上装饰着填充动物头，包括一只大型的14叉角鹿、一只山羊、一只熊、两只冬狼，以及只能是蚁狮的头。","两条破旧的旗帜从天花板垂下，还有两把皮椅和一些火盆完善了这个舒适的客厅。","这非常是一个猎人的夸耀室。","这扇门巧妙地隐藏在房间的木制面板中，拉开后可以进入区域 20。"],flesh:`这非常是一个猎人的夸耀室。

可以通过进行一次 DC 20 智力（调查）检定来在东方挂毯之间发现一扇秘密门。这扇门巧妙地隐藏在房间的木制面板中，拉开后可以进入区域 20。也可以通过拉动挂毯之间的木制面板边缘来发现它。`,spotlightRefs:[],presentNpcIds:["npc_galvan"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"三个敞开的窗户透进光线和空气；房间的墙壁上装饰着填充动物头，包括一只大型的14叉角鹿、一只山羊、一只熊、两只冬狼，以及只能是蚁狮的头。两条破旧的旗帜从天花板垂下，还有两把皮椅和一些火盆完善了这个舒适的客厅。"},{id:"scn_hotdq_1e9",locationId:"loc_hotdq_1d0",name:"22. 鹿鹰栖息地",activation:{condition:{type:"always"},priority:0},skeleton:["这个位于屋顶的大型巢穴由编织的枝条、树叶和羽毛构成，其中还夹杂着被太阳漂白的大型动物骨骼：可能是鹿、熊或山羊。","巢穴紧邻一个通向塔莉丝卧室的烟囱（区域18），属于一对配对的鹿鹰。","白天，这对佩利顿会多次离开巢穴寻找食物。","白天有50的几率巢穴是空的；","夜晚，两只佩利顿都会在这里栖息。"],flesh:`巢穴紧邻一个通向塔莉丝卧室的烟囱（区域18），属于一对配对的鹿鹰。白天，这对佩利顿会多次离开巢穴寻找食物。白天有50的几率巢穴是空的；夜晚，两只佩利顿都会在这里栖息。

鹿鹰是邪教的盟友，并且能够清楚地看到小屋前方的传送门（区域1）。它们从巢穴中看不见马厩或狗舍（区域2 和 3）。

这个巢穴为鹰狮提供了合理的牵引力和良好的栖息地，但倾斜的屋顶很难站立。每当它的回合开始或受到伤害时，站在屋顶的生物必须成功通过一个 DC 10 敏捷豁免检定。如果豁免失败，生物会在屋顶上 倒地；如果豁免失败超过5点，生物会滑落并从屋顶上掉下，受到 2d6 点钝击伤害并在地面上 倒地。

这个巢穴里装有骨头、一些旧的盔甲碎片、一个被戳穿的头盔以及其他残骸。挖掘1分钟或更长时间还会发现两件宝物：一面古老的吸矢盾和一个价值100金币的失去光泽的银器袋。`,spotlightRefs:[],presentNpcIds:["npc_galvan"],availableInfoIds:[],encounterIds:["enc_hotdq_1e9"],treasureSlotIds:["trs_hotdq_1e9_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个位于屋顶的大型巢穴由编织的枝条、树叶和羽毛构成，其中还夹杂着被太阳漂白的大型动物骨骼：可能是鹿、熊或山羊。"},{id:"scn_hotdq_1ed",locationId:"loc_hotdq_1d0",name:"前往帕纳斯特",activation:{condition:{type:"always"},priority:0},skeleton:["如果您使用里程碑经验规则，角色们在清理狩猎小屋并击败Talis或与她建立脆弱联盟后达到7级。","帕纳斯特村庄和城堡距离小屋有五英里的徒步路程，位于山的另一侧，穿过森林覆盖的山丘，越过原木和湍急的小溪，沿着泥泞的小径。","至少需要半天的步行时间。","考虑在Talis的个人物品中留下一条线索，或者让一个村民（大多数村民是邪教徒）带着食物和物资的补给出现在小屋。"],flesh:`如果您使用里程碑经验规则，角色们在清理狩猎小屋并击败Talis或与她建立脆弱联盟后达到7级。

帕纳斯特村庄和城堡距离小屋有五英里的徒步路程，位于山的另一侧，穿过森林覆盖的山丘，越过原木和湍急的小溪，沿着泥泞的小径。至少需要半天的步行时间。

考虑在Talis的个人物品中留下一条线索，或者让一个村民（大多数村民是邪教徒）带着食物和物资的补给出现在小屋。`,spotlightRefs:[],presentNpcIds:["npc_galvan"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"如果角色们杀死了Talis以及她所有的仆人和守卫，那么就没有人能告诉角色们关于天穹城堡的事情，队伍可能会因为过长时间的疗伤或调查小屋而耽误了时间。"},{id:"scn_hotdq_1f1",locationId:"loc_hotdq_1f1",name:"云端城堡",activation:{condition:{type:"always"},priority:0},skeleton:["邪教在天穹城堡获得了一个友好的栖息地，这是由云巨人建造的飞行要塞。","这座城堡停靠在帕纳斯特村附近，被雾气、魔法和怪物守护。","要塞包含了邪教从周边地区掠夺的大部分财宝和贵重物品——这些财宝将被添加到龙井的更加庞大的宝藏中，邪教计划在那里召唤提亚马特。","在它飞向天空之前，角色们应该有时间去处理塔利斯和可能的其他邪教徒。","角色们必须在攻占城堡时表现得聪明一些——这显然是一个设防坚固的地方。"],flesh:`邪教在天穹城堡获得了一个友好的栖息地，这是由云巨人建造的飞行要塞。这座城堡停靠在帕纳斯特村附近，被雾气、魔法和怪物守护。要塞包含了邪教从周边地区掠夺的大部分财宝和贵重物品——这些财宝将被添加到龙井的更加庞大的宝藏中，邪教计划在那里召唤提亚马特。

在它飞向天空之前，角色们应该有时间去处理塔利斯和可能的其他邪教徒。

角色们必须在攻占城堡时表现得聪明一些——这显然是一个设防坚固的地方。他们也不能等待太久。

如果Talis与队伍在一起，她可以利用她的等级和影响力安全地带领角色们到达天穹城堡，但一旦进入城堡，她就不能保证他们的安全，实际上，她会在最早的机会对他们进行反击。在本章结束时，角色们应该达到或接近8级。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_captain_othelstan"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`当角色们到达村庄时，瑞兹米尔已经宣布堡垒必须为出发做好准备。
如果角色们拖延，Skyreach Castle会离开去另一个邪教的巢穴收集更多宝藏。
它何时起飞的确切时刻由你作为DM来决定。`,mapGeometry:{imageRef:"adventure/HotDQ/045-tod-08-01.webp"}},{id:"scn_hotdq_1f2",locationId:"loc_hotdq_1f1",name:"帕纳斯特",activation:{condition:{type:"always"},priority:0},skeleton:["以下信息是可用的，每成功一次可获得一条，应按以下顺序逐步提供。","在帕纳斯特频繁出现的邪教最高级别成员是半龙，龙语者瑞兹米尔。","（如果她仍然活着并且自由，瑞兹米尔已经躲藏起来了。","村里没有人知道她在哪里，尽管他们声称天空之城城堡是最有可能找到她的地方。","瑞兹米尔的副手是一位邪教资深成员，名为奥瑟斯坦队长。"],flesh:`劳工、搬运工、工匠和教徒在村庄中生活和工作，尽管他们不愿意交谈，但可以通过成功进行一个 DC 18 魅力（游说）检定来贿赂、魅惑或说服他们。以下信息是可用的，每成功一次可获得一条，应按以下顺序逐步提供。

在帕纳斯特频繁出现的邪教最高级别成员是半龙，龙语者瑞兹米尔。（如果她仍然活着并且自由，瑞兹米尔已经躲藏起来了。村里没有人知道她在哪里，尽管他们声称天空之城城堡是最有可能找到她的地方。）

瑞兹米尔的副手是一位邪教资深成员，名为奥瑟斯坦队长。他指挥着帕纳斯特的邪教力量，并监视着所有经过村庄的访客和商品。

邪教已经控制了帕纳斯特一年多，基本上引进了一伙暴徒来接管。

一些村民已经是邪教的渗透者，而当明显看出邪教徒富有并拥有私人军队时，其他村民也加入了进来。

邪教徒在村庄的马厩里饲养了训练有素的飞龙。邪教徒利用它们在城堡飞行时到达那里。（包括奥瑟斯坦队长在内的村庄里没有人知道城堡离开帕纳斯特后会去哪里。）

角色们还可以从Gundalin或任何成为他们友好助手的人那里学到两个安全进入城堡的暗号之一："提亚马特，我们的母亲和力量"或"向布拉戈提库斯致敬。"`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_captain_othelstan","npc_blagothkus"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_1f3",locationId:"loc_hotdq_1f3",name:"帕纳斯特村庄",activation:{condition:{type:"always"},priority:0},skeleton:["这个小村庄秘密地处于龙之邪教的控制之下。","邪教徒们在这里装载和卸载货物，其中一些货物被送往Talis的狩猎小屋（见第七章）。","这个村庄有几十座房屋和一个小型广场，建筑物包括一家酒馆、一个马厩和一个神龛。","与这个乡村小镇形成鲜明对比的是，一座雄伟的冰城堡半隐藏在雾气笼罩的峡谷中：城墙高达四十尺，巨大的狭窄塔楼高耸入云——一座是蓝色的冰塔，一座正在崩塌——所有这些都是按照巨人的规模建造的。","雾气中的微光掩盖了城堡的许多细节，但你看到两座雕像矗立在巨大的门前。"],flesh:`这个小村庄秘密地处于龙之邪教的控制之下。邪教徒们在这里装载和卸载货物，其中一些货物被送往Talis的狩猎小屋（见第七章）。

伪装成村民的邪教徒对访客不友好，而受到邪教影响的村民则因害怕激怒邪教而保持沉默，避开访客。`,spotlightRefs:[],presentNpcIds:["npc_captain_othelstan","npc_raggnar_redtooth"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"这个村庄有几十座房屋和一个小型广场，建筑物包括一家酒馆、一个马厩和一个神龛。与这个乡村小镇形成鲜明对比的是，一座雄伟的冰城堡半隐藏在雾气笼罩的峡谷中：城墙高达四十尺，巨大的狭窄塔楼高耸入云——一座是蓝色的冰塔，一座正在崩塌——所有这些都是按照巨人的规模建造的。雾气中的微光掩盖了城堡的许多细节，但你看到两座雕像矗立在巨大的门前。",dmGuidance:`如果角色们要求与负责人交谈，他们被引见给奥瑟斯坦队长（见附录D），但也被警告说他没有时间或耐心处理与逃犯相关的事情。
【乐于助人的车轮匠】虽然村庄里充满了邪教徒和那些与他们合作的人，但并不是每个人都愿意容忍邪教的存在。有一个叫Gundalin the Wheelwright的男人，他是一个为商人、林区居民和其他人制作轮子和修理轴的人，他希望邪教消失。如果角色们寻找不是邪教成员的人，他们可能在Golden Tankard（他在那里什么也不说）或在广场上他的小店里找到他。他经常试图吸引他们的注意，但他非常害怕邪教，只有在一个安全的地方，他确信不会被看到时才会说话。他知道"谣言和信息"部分中的所有信息。`},{id:"scn_hotdq_1f7",locationId:"loc_hotdq_1f3",name:"2. 金色酒杯",activation:{condition:{type:"always"},priority:0},skeleton:["这个乡村酒馆的门上挂着一个黄色的酒杯。","然而，里面的气氛并不怎么欢快。","所有的谈话都停止了，所有的目光都转向了你的方向。",'一个高大、魁梧的男人，留着巨大的连鬓胡须，走上前问道："旅行者们，我能为你们提供些什么？',"访客可以在这里花3个铜板买一杯啤酒，或者花1个银便士买一杯烈蜂蜜酒。"],flesh:`访客可以在这里花3个铜板买一杯啤酒，或者花1个银便士买一杯烈蜂蜜酒。菜单上还有香肠、炖白菜和重黑面包（满满一盘4个铜板），但没有人会为了美食而来。这些食物仅仅足够让访客再维持一天的生活，仅此而已。

店主是拉格纳·红齿，他表面上看起来很友好，但实际上秘密接受龙之邪教的贿赂。在他的酒馆里，陌生人从未真正受到欢迎，但他会为他们提供服务，同时通过派遣信使通知奥瑟斯坦队长。Raggnar有着暴力的过去，被视为一名未穿戴盔甲的老兵（AC 10）。他把武器藏在吧台后面。

从Raggnar和他的客户那里探听信息是困难的。村民们想让角色们忙起来，他们要求角色们讲述他们的旅行故事，他们询问角色们的家庭成员和他们来自哪里，他们还探询队伍是如何到这里的。

如果有人问及住宿的地方，Raggnar明确表示他不是旅馆老板：这里没有床或房间，甚至马厩也满了。如果有人询问原因，他给出了他的一贯借口：'Marsten勋爵和他的随行人员要来打猎。所有的仆人们都在为他们的到来做准备。'（这当然是纯粹的胡说八道，他除了自己的房间外没有其他房间。）如果角色们稍等片刻，Raggnar说他愿意提供他自己的房间，但要收取10金币的高额费用。'我会清理一些东西，然后整个房间都是你们的。'这同样是一种拖延策略，尽管他肯定会收下钱。

因为邪教徒们正准备从村庄运送满满一城堡的财宝，他们急切地不希望角色们发现任何可疑的事物，例如装满箱子的马车（在这个小村庄里没有地方隐藏商队），或者马厩里的飞龙坐骑（见区域3）。如果Raggnar能让角色们忙于吃喝和闲聊，那么天穹城堡就能悄无声息地溜向天空。

金色酒杯（The Golden Tankard）的名字来源于Raggnar多年前发现的一件魔法物品：一个金色的大啤酒杯，上面装饰有跳舞的矮人和谷物图案。这是一件丰足酒杯（见附录C）。口令是'Illefarn'。`,spotlightRefs:[],presentNpcIds:["npc_raggnar_redtooth","npc_captain_othelstan"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_1f7_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个乡村酒馆的门上挂着一个黄色的酒杯。然而，里面的气氛并不怎么欢快。所有的谈话都停止了，所有的目光都转向了你的方向。一个高大、魁梧的男人，留着巨大的连鬓胡须，走上前问道："旅行者们，我能为你们提供些什么？"

"我一会儿就派酒保给你送去我简陋酒馆里最好的酒。"他朝厨房走去，大声喊着要一桶酒。`,dmGuidance:"如果角色们坐下来点些啤酒，那就再好不过了。",mapGeometry:{imageRef:"adventure/HotDQ/048-tod-08-02.webp"}},{id:"scn_hotdq_1fb",locationId:"loc_hotdq_1f3",name:"3. 马厩",activation:{condition:{type:"always"},priority:0},skeleton:["通往马厩的两扇大门被封闭了，这个地方看起来已经关闭了。","但仔细听的人可以听到（无需检定）咆哮声。","邪教在马厩里养了两只飞龙；","有时，它们会发出飞龙大小的吼叫。","破碎的羊骨和一些牛头骨覆盖在马厩的地板上。"],flesh:`但仔细听的人可以听到（无需检定）咆哮声。邪教在马厩里养了两只飞龙；有时，它们会发出飞龙大小的吼叫。

破碎的羊骨和一些牛头骨覆盖在马厩的地板上。除了用于飞龙的骑行马具外，这里没有宝藏。

角色们可以尝试给飞龙装上马具并骑乘它们作为空中坐骑；详情请参阅"飞龙骑行和城堡捕捉"侧边栏。如果他们从龙之邪教的鼻子底下偷走一只或两只飞龙，将4000 XP平均分配给角色们——这比他们杀死飞龙所获得的经验要多。`,spotlightRefs:[],presentNpcIds:["npc_raggnar_redtooth"],availableInfoIds:[],encounterIds:["enc_hotdq_1fb"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"通往马厩的两扇大门被封闭了，这个地方看起来已经关闭了。",dmGuidance:`如果角色们四处打听，村民们会声称马厩在一段时间前就停业了。
【骑乘飞龙和捕获城堡】马厩（区域3）中的飞龙被训练成一次可以搭载多达两名中等体型或六名小型骑手。困难的部分在于正确地给它们装上马具，以确保骑手不会掉下来，以及在空中时发出正确的指令。
任何角色都可以通过一次成功的 DC 10 感知（驯兽）检定给飞龙套上鞍具。如果检定失败且差值达到5或更多，飞龙会强烈反对并立即用尾刺攻击该角色一次。飞龙对骑手并不挑剔，但要说服它飞行或朝特定方向移动，则需要一个动作并进行一次 DC 15 感知（驯兽）检定；如果检定失败，飞龙会无视骑手的命令，直到骑手的下一个回合。在骑手成功通过两次此类检定后，飞龙会在接下来的一个小时内或直到它受到伤害或骑手下马前，按照骑手的意愿行动。
无论白天还是夜晚，城堡在五英里范围内都很容易被发现。飞龙在空中飞行的速度比城堡快，并且它们能够追上城堡。`},{id:"scn_hotdq_1ff",locationId:"loc_hotdq_1ff",name:"斧头神殿",activation:{condition:{type:"always"},priority:0},skeleton:["这个木制建筑是伐木工人的神龛，它将多个神明聚集在一个屋檐下。","安格拉达的雕像，一个代表春天的鲜为人知的精灵神祇，矗立在代表其他季节的众神雕像之中，即奥里尔（冬天）、裳缇亚（夏天）和梅丽凯（秋天）。","安格拉达的雕像遭到破坏，她的面部和手部被砍掉了。","在奥里尔的脚边留有一只死松鼠。","梅丽凯女神的雕像不仅新近粉刷过，而且在其脚下还摆放着一套小杯子、面包碎块以及其他小祭品。"],flesh:`安格拉达的雕像，一个代表春天的鲜为人知的精灵神祇，矗立在代表其他季节的众神雕像之中，即奥里尔（冬天）、裳缇亚（夏天）和梅丽凯（秋天）。安格拉达的雕像遭到破坏，她的面部和手部被砍掉了。在奥里尔的脚边留有一只死松鼠。

梅丽凯女神的雕像不仅新近粉刷过，而且在其脚下还摆放着一套小杯子、面包碎块以及其他小祭品。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"这个木制建筑是伐木工人的神龛，它将多个神明聚集在一个屋檐下。"},{id:"scn_hotdq_201",locationId:"loc_hotdq_1ff",name:"5. 村庄井和广场",activation:{condition:{type:"always"},priority:0},skeleton:["一个井位于村中心广场的中央。","四座建筑围绕着它：一个空荡的神龛、一个车轮匠的铺子、一家酒馆和一个马厩。","木材商、林区居民以及其他人在这里就优质木材讨价还价，货车则负责运送物资。","有关酒馆、马厩和神龛的更多信息，请参见区域区域2、3和4。","这口井深40尺，井水冷冽且纯净。"],flesh:`木材商、林区居民以及其他人在这里就优质木材讨价还价，货车则负责运送物资。有关酒馆、马厩和神龛的更多信息，请参见区域区域2、3和4。

这口井深40尺，井水冷冽且纯净。五名忠于龙之邪教的人类警卫始终在此保持警惕，确保村民按照他们的命令行事。如果守卫们遭到对峙，其中一人会跑去通知奥瑟斯坦队长，而村民们则会逃跑。只有车轮匠冈达林留下来观看，他甚至也是躲在一辆沉重的木制牛车后面观看。`,spotlightRefs:[],presentNpcIds:["npc_captain_othelstan"],availableInfoIds:[],encounterIds:["enc_hotdq_201","enc_tod_parnast_response"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个井位于村中心广场的中央。四座建筑围绕着它：一个空荡的神龛、一个车轮匠的铺子、一家酒馆和一个马厩。",dmGuidance:`【安排出发时间】角色们可以闲逛多久？时间问题有点棘手，因为队伍可能会直接前往城堡，错过帕纳斯特可能的许多信息和角色扮演机会。所以，天空之城城堡应该在你最觉得戏剧性的时刻离开，作为DM，但这里有一些提示可以帮助你选择最佳时刻。
攻击性玩家可以在城堡着陆时攻击它。除了应对城堡的防御外，他们还必须与来自帕纳斯特的增援作战。这些增援包括奥瑟斯坦队长、一名老兵、六名警卫和三名龙爪。此外，奥瑟斯坦和他的副手（老兵）骑着一对飞龙（见区域3）。
任何在村庄里花费一个小时或更长时间提问、吃饭或休息，或者以其他方式没有登上城堡的队伍，都可能错过机会。一旦邪教徒意识到村庄已经被渗透，城堡就会在一个小时后离开。城堡消失后，村民们放弃了所有友好的伪装，派出奥瑟斯坦队长（见附录D）、一名老兵和六名警卫试图捕捉入侵者，要么将他们作为祭品杀死，要么将他们赶出村庄。Othelstan还可以召唤增援，包括三名龙爪，其中一人会花时间释放马厩中的两只飞龙（见区域3）。
如果城堡在角色们不在的情况下飞走，贡达林或其他倾向于帮助队伍的村民可能会在奥瑟斯坦队长及其随从到达之前提供协助，建议角色们赶紧前往马厩，骑上飞龙，立即起飞。在奥瑟斯坦包围建筑并要求他们投降之前，角色们有几轮时间到达马厩。`},{id:"scn_hotdq_207",locationId:"loc_hotdq_1ff",name:"天穹城堡",activation:{condition:{type:"always"},priority:0},skeleton:["数百万年前，云巨人建造了这座飞行要塞，将他们与龙族的古老战争带入了天空。","一个巨人的灵魂使其能够飞行——这种古老的联系可以追溯到巨人和龙族进行大战的年代。","这种束缚阻止了龙族将这些城堡据为己有，几个世纪后，这种联系仍然存在。","邪教与城堡的主人，一位名叫布拉戈提库斯的云巨人达成了协议，他对龙族（或任何其他事物）并没有特别的仇恨。","他已故的妻子Esclarotta的灵魂控制着城堡的推进和浮力。"],flesh:`数百万年前，云巨人建造了这座飞行要塞，将他们与龙族的古老战争带入了天空。一个巨人的灵魂使其能够飞行——这种古老的联系可以追溯到巨人和龙族进行大战的年代。这种束缚阻止了龙族将这些城堡据为己有，几个世纪后，这种联系仍然存在。

邪教与城堡的主人，一位名叫布拉戈提库斯的云巨人达成了协议，他对龙族（或任何其他事物）并没有特别的仇恨。他已故的妻子Esclarotta的灵魂控制着城堡的推进和浮力。邪教不能冒险疏远布拉戈提库斯，因为城堡的灵魂不会服从他们。

Skyreach Castle由厚到不透明的冰雕刻而成。这些冰因为古代云巨人的魔法而像花岗岩一样坚固且不可穿透。塔楼和墙壁围绕着一个被挖空的冰山核心，这个核心被用作一头与邪教结盟的强大白龙的巢穴。整个城堡可以隐藏在雾和云的帷幕下，或者随风缓慢移动。详情见区域19。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_20e",locationId:"loc_hotdq_20e",name:"城堡区域 (6-15)",activation:{condition:{type:"always"},priority:0},skeleton:["此处是「城堡区域 (6-15)」。"],flesh:"",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_20f",locationId:"loc_hotdq_20e",name:"6. 主门",activation:{condition:{type:"always"},priority:0},skeleton:["一座放下的吊桥横跨着雾蒙蒙的护城河。","吊桥的另一边是一个敞开的吊闸，吊闸的另一边是一个通往开阔庭院的有顶的门道。","门道里隐约显现出巨大的身形，但你无法完全看清楚。","在城堡起飞离开帕纳斯特之前，邪教将一些装满宝箱和物资的货车移入下层庭院，并在白天每隔一两个小时就卸一次货。","那些在大门口听力范围内的冒险者如果仔细听，也能听到每辆货车经过时说出的口令。"],flesh:`在城堡起飞离开帕纳斯特之前，邪教将一些装满宝箱和物资的货车移入下层庭院，并在白天每隔一两个小时就卸一次货。那些在大门口听力范围内的冒险者如果仔细听，也能听到每辆货车经过时说出的口令。

补给车为队伍提供了一种不被发现地进入城堡的方式。邪教徒将补给物资运送到厨房（区域15）并将宝箱搬运到龙的主要藏宝室（区域25）。

城堡的墙壁由坚固的冰雕刻而成，具有石头的弹性和质地。这些墙壁为抵御地面攻击提供了很好的防御。当城堡在空中时，墙壁还能防止内部的人坠落致死，并且它们可以挡住风。

每个门塔上（见区域6B）有三名食人魔站岗。他们可以呼喊求援，援军来自区域9、10和15。瑞兹米尔和她的守卫龙兽（见区域11）三轮后到达。下层庭院在白天没有雾。

除了站岗的食人魔（见上文），吸血鬼 桑德西尔·莫吉亚会巡逻下位中庭（在夜晚因浓雾而处于2）和上部庭院（在夜晚处于2）。只要吸血鬼在巡逻，邪教徒们和狗头人就会避开庭院。

装填并发射弩炮需要一个动作，且在一轮中只能发射一次弩炮。使用弩炮发射标枪的食人魔将使用以下攻击代替其普通的标枪攻击。

标枪。远程武器攻击：+7命中，范围120尺/480尺，单一目标。命中：14（3d8）穿刺伤害。

每个弩炮的护甲等级为10，生命值为50，并且对毒素和心灵伤害免疫。

每个塔楼的屋顶上都有一个大型活板门，可以拉开以露出一个紧贴塔楼内部并螺旋向下延伸至塔楼底层的冰制楼梯，那里有一扇单独的未上锁的巨人尺寸的门，通向下层庭院（区域7）或邪教徒兵营（区域9）。

升降吊桥的绞盘位于北塔的地面层，而升降闸门的绞盘则位于另一座塔的地面层。每个绞盘由一只食人魔操作，每只食人魔都有严格的命令，即使警报响起，也要守住绞盘，不得离开塔楼。转动绞盘上的曲柄是一个动作，且需要进行一次成功的DC 15力量检定。每使用一个动作转动曲柄，吊桥或闸门会升降一半。（完全升起或降下任一障碍物需要两个动作。）`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_sandesyl_morgia"],availableInfoIds:[],encounterIds:["enc_hotdq_20f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一座放下的吊桥横跨着雾蒙蒙的护城河。吊桥的另一边是一个敞开的吊闸，吊闸的另一边是一个通往开阔庭院的有顶的门道。门道里隐约显现出巨大的身形，但你无法完全看清楚。"},{id:"scn_hotdq_214",locationId:"loc_hotdq_20e",name:"6A. 门户与魔像",activation:{condition:{type:"always"},priority:0},skeleton:["在吊桥后面，一道沉重的橡木和铁制的吊闸被拉了起来。","两座18尺高的云巨人真人大小的雕像——一个是男性，一个是女性——站在吊闸后面，在有顶的门道内面对面站立。","提升和降低吊桥和闸门的绞盘位于附近的门塔内；","有关详细信息，请参阅区域6B。","位于通道内吊闸两侧的两座雕像是巨大的，但除此之外，它们拥有石魔像的属性。"],flesh:`提升和降低吊桥和闸门的绞盘位于附近的门塔内；有关详细信息，请参阅区域6B。

位于通道内吊闸两侧的两座雕像是巨大的，但除此之外，它们拥有石魔像的属性。任何未说出正确口令（'提亚马特，我们的母亲和力量'或'向布拉戈提库斯致敬'）就通过通道的人会激活其中一个魔像。如果另一生物未说出口令就试图通过，第二个魔像会活化并攻击。一旦活化，只有云巨人才能命令魔像返回他们的岗位。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在吊桥后面，一道沉重的橡木和铁制的吊闸被拉了起来。两座18尺高的云巨人真人大小的雕像——一个是男性，一个是女性——站在吊闸后面，在有顶的门道内面对面站立。"},{id:"scn_hotdq_216",locationId:"loc_hotdq_20e",name:"6B. 城门塔",activation:{condition:{type:"always"},priority:0},skeleton:["这两座门塔高度不一样。","吊桥左侧的那座是120尺高，而吊桥右侧的那座是80尺高。","每个塔楼上有三名食人魔站岗。","尽管食人魔配备了标枪，但他们也可以使用每个塔楼屋顶上的巨型弩炮来发射标枪。"],flesh:"每个塔楼上有三名食人魔站岗。尽管食人魔配备了标枪，但他们也可以使用每个塔楼屋顶上的巨型弩炮来发射标枪。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_hotdq_216"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这两座门塔高度不一样。吊桥左侧的那座是120尺高，而吊桥右侧的那座是80尺高。"},{id:"scn_hotdq_21c",locationId:"loc_hotdq_20e",name:"7. 下层庭院",activation:{condition:{type:"always"},priority:0},skeleton:["上层庭院（区域16）部分悬垂于下层庭院之上，由巨大的冰拱门高悬于空中。","夜晚，下层庭院因雾气而2，遮蔽高度达40尺——与环绕它的墙壁高度相同。","这个庭院被坚固的冰墙所环绕。","另一个庭院部分悬垂在这个庭院上方。","它由高耸至100多尺的冰制拱门支撑。"],flesh:`上层庭院（区域16）部分悬垂于下层庭院之上，由巨大的冰拱门高悬于空中。夜晚，下层庭院因雾气而2，遮蔽高度达40尺——与环绕它的墙壁高度相同。

如果一个或多个角色成功通过了 DC 22 感知 (察觉) 检定，则添加以下内容：

在此地进行战斗会惊动6号区域的食人魔、区域9的邪教徒、区域10的石巨人，以及区域15的狗头人。其中一名邪教徒会跑到区域11并通知瑞兹米尔，她带着她的守卫龙兽在三个回合后到达。

一个由雕刻冰制成的螺旋楼梯连接着上层庭院和下层庭院，以及通往主金库的隧道，那里是龙的栖息地（见区域25）。楼梯的螺旋台阶上覆盖着易碎的霜，不能安静地攀爬，也不滑。`,spotlightRefs:[],presentNpcIds:["npc_rezmir"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个庭院被坚固的冰墙所环绕。另一个庭院部分悬垂在这个庭院上方。它由高耸至100多尺的冰制拱门支撑。雕刻精美的冰门，装有铁铰链，通往庭院对面的附属建筑和主堡，远离门塔。

隐藏在主大门对面的突出庭院的阴影中，有一堵墙上的开口，通向一个由雕刻的冰制成的螺旋楼梯。`},{id:"scn_hotdq_220",locationId:"loc_hotdq_220",name:"马厩",activation:{condition:{type:"always"},priority:0},skeleton:["马厩的双扇门高达20尺，宽也是20尺，这使得飞龙（见下文）可以轻松进出。","这个地方散发着某种排泄物和腐烂肉的恶臭。","地板上覆盖着碎裂的骨头。","两头飞龙露出獠牙，尾巴猛击着走进视野。","这个附属建筑目前养有两只被训练为空中坐骑的飞龙。"],flesh:`马厩的双扇门高达20尺，宽也是20尺，这使得飞龙（见下文）可以轻松进出。

这个附属建筑目前养有两只被训练为空中坐骑的飞龙。然而，它们很饿，会攻击任何它们不认识的人。

这里存放着四副精美的飞龙马勒，上面镶嵌着玉石，配有秘银马嚼（每副价值500金币）。`,spotlightRefs:[],presentNpcIds:["npc_rath_modar"],availableInfoIds:[],encounterIds:["enc_hotdq_220"],treasureSlotIds:["trs_hotdq_220_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"这个地方散发着某种排泄物和腐烂肉的恶臭。地板上覆盖着碎裂的骨头。两头飞龙露出獠牙，尾巴猛击着走进视野。"},{id:"scn_hotdq_223",locationId:"loc_hotdq_220",name:"9. 邪教徒兵营",activation:{condition:{type:"always"},priority:0},skeleton:["兵营里散发着未洗涤床上用品的气味，室内有十四张覆盖着毛皮的床，还有几个装有衣物的箱子、一张桌子和椅子，以及其他简单的家具。","任何给定时间，这里都有十名龙翼（见附录D以获取具体数值）在休息。","其中一半正在熟睡，另一半虽然醒着但没有进行任何过于剧烈的活动。","除非警报响起，他们听到庭院中的战斗声，或者大门口的食人魔呼叫增援，否则他们不会在城堡中巡逻。"],flesh:`兵营里散发着未洗涤床上用品的气味，室内有十四张覆盖着毛皮的床，还有几个装有衣物的箱子、一张桌子和椅子，以及其他简单的家具。

任何给定时间，这里都有十名龙翼（见附录D以获取具体数值）在休息。其中一半正在熟睡，另一半虽然醒着但没有进行任何过于剧烈的活动。除非警报响起，他们听到庭院中的战斗声，或者大门口的食人魔呼叫增援，否则他们不会在城堡中巡逻。`,spotlightRefs:[],presentNpcIds:["npc_rath_modar"],availableInfoIds:[],encounterIds:["enc_hotdq_223"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_224",locationId:"loc_hotdq_220",name:"10. 石巨人的房间",activation:{condition:{type:"always"},priority:0},skeleton:["两座20尺高、8尺宽的拱门连接着这个房间和下层庭院。","庭院中任何大声的干扰都会惊动居住在这里的石巨人。","在这个结霜的房间中央，有一个九尺高的雕刻石桌，周围有三把同样由石头雕刻而成的巨人尺寸的椅子。","一个上面刻有符文的胖铁锅放在桌子上。","在房间远处的角落里的地上，有一个大铁箱。"],flesh:`两座20尺高、8尺宽的拱门连接着这个房间和下层庭院。庭院中任何大声的干扰都会惊动居住在这里的石巨人。

如果警报尚未响起并且石巨人在场，请添加：

如果城堡的警报没有响起，角色们将获得一个突袭轮。

这两位石巨人，Wiglof和Hulda，是云巨人的客人。他们担心布拉戈提库斯企图煽动巨人们对抗龙族可能会导致灾难性的后果，但他们仍然表示支持。他们已同意帮助布拉戈提库斯修复城堡的损伤，并乐于协助其防御。

目前，Wiglof正在使用一个魔法大锅（见"宝藏"）进行占卜仪式，希望确定布拉戈提库斯与龙之邪教联盟最有可能的结果，以确认或缓解云巨人的恐惧，即邪教正计划背叛他。任何针对Wiglof的攻击都会打断他的仪式并极大地激怒他。Hulda是Wiglof的伴侣和保镖，任何针对她或Wiglof的敌意都会遭到残酷的反击。

石巨人知道这座飞行城堡是由一个舵手塔（区域19）控制的，该塔可从上层庭院进入，而且只有巨人才能进入该塔。

石巨人收集小巧但完美的宝石，主要是紫水晶，但也有钻石、蛋白石、红宝石和黄玉。他们的收藏品被一个魔法力场球保护在一个铁箱中，铁箱长六英尺，高和宽各四英尺，重达500磅。抬起沉重的铁盖需要一个动作和一个 DC 12 的力量检定，而破坏力场球需要一个 en=Antimagic Field 或成功施放 en=Dispel Magic (DC 16)。这32颗宝石每颗价值500 gp，总计16,000 gp。铁箱中还装有石巨人的石工工具，但这些工具既没有价值，也无法被较小的生物使用。

这个铁制大锅重50磅。当装满水或其他液体时，这个大锅可以代替施放en=Augury法术所需的正常材料成分。这个大锅价值25金币。

石巨人不愿意分享任何信息，但如果被击败并受到威胁或贿赂，他们可能会合作。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus","npc_rath_modar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_hotdq_224_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`在这个结霜的房间中央，有一个九尺高的雕刻石桌，周围有三把同样由石头雕刻而成的巨人尺寸的椅子。一个上面刻有符文的胖铁锅放在桌子上。在房间远处的角落里的地上，有一个大铁箱。

一个男性石巨人凝视着大锅，而一个女性石巨人坐在附近。`},{id:"scn_hotdq_229",locationId:"loc_hotdq_220",name:"11. 雷兹米尔的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这扇门总是锁着的，而瑞兹米尔持有钥匙。","另外，敲门并编造一个好故事可能也有效；","邪教徒和仆人随时进出。","一大块地毯覆盖在门内冰冷的地板上，这个10尺高的房间由一炉热炭照明。","一个角落里放着一张大床，另一个角落放着一张书桌。"],flesh:`这扇门总是锁着的，而瑞兹米尔持有钥匙。使用en=Knock法术是最简单的进入方式，但角色也可以使用盗贼工具进行一次DC 25的敏捷检定来解锁这扇门。另外，敲门并编造一个好故事可能也有效；邪教徒和仆人随时进出。

除非她被全域警报引诱到其他地方，瑞兹米尔（见附录D）会在这里，还有两只忠诚的守卫龙兽（见附录D）。

门内的大型地毯实际上是一个闷人毯。魔毯耐心等待生物走上去再进行攻击。如果它们在场，瑞兹米尔和她的龙蜥会在魔毯攻击进门的敌人之前等待，然后突然行动。

如果瑞兹米尔被杀，她桌上铁箱里的内容物会通过传送离开，留下一个空箱子。

瑞兹米尔持有这个房间的钥匙、箱子上的锁以及储藏室（区域13）的钥匙。此外，这里的箱子被锁上，并且与瑞兹米尔魔法契合，以至于如果她死亡，箱子里的内容物会被传送到龙井中，从而使她的杀手无法得到。

箱子上的挂锁可以使用盗贼工具并通过一次成功的DC 20敏捷检定打开。然而，锁上装有一个毒针陷阱，如果检定失败且差值为5或更多，陷阱将触发。通过一次成功的DC 20智力（调查）检定可以发现毒针，并通过一次成功的DC 15敏捷检定可以拆除陷阱。触发毒针陷阱或在敏捷检定中失败且差值为5或更多的生物将被注入飞龙毒液，必须进行一次DC 13体质豁免，失败则受到24（7d6）点毒素伤害，成功则受到一半伤害。

箱子里装有黑龙面具（见附录C），以及瑞兹米尔的私人宝石、珠宝和硬币收藏。宝石和珠宝包括一串镶有橄榄石的金链（400金币），一个带有龙头的银质颈环（200金币），六颗每颗50金币的月光石，以及一套20颗散珍珠，总价值3000金币。还有600银币，200金币和50铂金币。

她宁愿选择死亡也不愿投降，特别是如果她的死亡可能使黑龙面具不落入她的敌人手中（见上文）。瑞兹米尔是一个真正的信徒，角色们最好希望他们的囚犯最终停止辱骂和侮辱他们。"你们的事业是没有希望的。我的朋友们会吞噬你们，你们那些可怜而微不足道的企图否认提亚玛特的威严将一无所获。"`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_rath_modar"],availableInfoIds:[],encounterIds:["enc_hotdq_229"],treasureSlotIds:["trs_hotdq_229_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一大块地毯覆盖在门内冰冷的地板上，这个10尺高的房间由一炉热炭照明。一个角落里放着一张大床，另一个角落放着一张书桌。书桌上放着一个外观漂亮的带铁箍的箱子，用一个坚固的挂锁锁着。",dmGuidance:"如果角色们捕获了瑞兹米尔，她拒绝以任何方式合作。",mapGeometry:{imageRef:"adventure/HotDQ/051-tod-08-03.webp"}},{id:"scn_hotdq_22d",locationId:"loc_hotdq_220",name:"12. 红法师的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门没有上锁。","数百个马骷髅被钉在天花板上，完全覆盖了它。","厚实的地毯覆盖着冰冷的地板，到处都是桌子、椅子和讲台，有的上面摆满了书籍和卷轴，有的则摆放着药水瓶、肉块和毛皮以及其他东西。","四个庞大的石像鬼在房间里静止不动。","拉斯·莫达（见附录D以获取具体数值），是与龙之邪教结盟的泰伊红袍法师，居住在这里。"],flesh:`这个房间的门没有上锁。

拉斯·莫达（见附录D以获取具体数值），是与龙之邪教结盟的泰伊红袍法师，居住在这里。除非他之前已经被杀或被捕，阿兹巴拉·乔斯（见附录D以获取具体数值）也会在场。如果两位红袍法师都在场，当角色们到达时他们正处于学术争论之中，但一旦有其他人出现他们就会立刻停止。如果拉斯·莫达独自一人，他正站在讲台前阅读一本书（见"宝藏"）。

如果阿兹巴拉不在，拉斯·莫达可能会误认为角色们是邪教徒。拉斯不是傻瓜，他是识破幻象和欺骗的专家。他对陌生人也有健康的怀疑，特别是如果角色们受伤或装备不当。

拉斯·莫达在这里是为了帮助看守正在被运送到龙井的庞大宝藏，并且也为了计划召唤提亚玛特；所需的咒语非常复杂，需要数百名熟练的施法者。他知道邪教的最终目标是释放提亚玛特并将她的神庙从九层地狱中升起，而拉斯的最终目标是利用提亚玛特和她的龙来推翻萨扎斯坦。

天花板上的马骷髅是可怕的装饰品，仅此而已。

其中三个石像鬼是雕像；第四个是一只活的石像鬼，它为拉斯·莫达服务。

两扇窗户之间是一段长35尺、高20尺的冰墙，在触摸时会消失1分钟。墙的另一边是一个室外登陆平台。

如果他处于劣势，拉斯·莫达会变为隐形，对自己施放en=Fly法术，触碰消失的墙面，然后从起降平台上跳下，留下阿兹巴拉·乔斯独自应对。如果石像鬼还活着，它会试图掩护拉斯的逃跑。他的en=Fly法术和消失技巧意味着逃跑非常有可能成功。

拉斯·莫达和他的伙伴在提亚马特的崛起中扮演了重要角色。击败或杀死他们将对邪教召唤提亚马特的能力造成严重打击。

拉斯·莫达拥有三份法术卷轴（en=Dimension Door、en=Feather Fall和en=Fireball），并且他携带一根火焰法杖。

对房间的彻底搜索发现了多封来自龙之邪教的最高领袖Severin给拉斯·莫达的信件。Severin的信件揭示了红袍法师（至少是那些对拉斯·莫达友好的）与邪教之间的深厚联系。角色们还发现了来自泰伊的其他信件，清楚表明一些红袍法师对邪教的计划并不那么热衷。

讲台上放着一本名为铁门之外的书。全书用炼狱语书写，描述了各种恶魔召唤的形式，但最后一章讲述了利用大规模召唤和献祭数百灵魂将提亚马特从九层地狱中实体化召唤至世界的方法。仪式的细节明确表明这需要巨大的准备和花费，但本书并未提供实际的魔法公式和咒语。然而，无论是这本书还是这里的其他文件，都没有提供邪教或红袍法师计划何时进行召唤的时间表，也没有提到邪教积累的财宝的重要性。（拉斯·莫达和阿兹巴拉·乔斯都可以证明这些财宝是为了在她到来时安抚提亚马特。）`,spotlightRefs:[],presentNpcIds:["npc_rath_modar","npc_azbara_jos","npc_leosin_erlanthar","npc_ontharr_frume"],availableInfoIds:[],encounterIds:["enc_hotdq_22d"],treasureSlotIds:["trs_hotdq_22d_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"数百个马骷髅被钉在天花板上，完全覆盖了它。厚实的地毯覆盖着冰冷的地板，到处都是桌子、椅子和讲台，有的上面摆满了书籍和卷轴，有的则摆放着药水瓶、肉块和毛皮以及其他东西。四个庞大的石像鬼在房间里静止不动。",dmGuidance:`如果角色们顺水推舟，试图从红袍法师那里收集信息，就进行角色扮演。
如果角色们与拉斯·莫达或他的伙伴阿兹巴拉·乔斯交谈，他们会发现红袍法师傲慢的声名并非虚传：这两人对自己的技艺自视甚高，且对"试图阻止不可避免之事的粗人、恶棍和雇佣兵"毫无耐心。
如果角色们将这些信件交给Leosin Erlanthar、昂塔尔·弗鲁姆或他们在反对红袍法师和龙之邪教的组织中的其他联系人，奖励队伍1000 XP。`,mapGeometry:{imageRef:"adventure/HotDQ/052-tod-08-04.webp"}},{id:"scn_hotdq_232",locationId:"loc_hotdq_220",name:"13. 储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["这扇门被加固并上锁。","瑞兹米尔和布拉戈提库斯携带着钥匙。","巨大的牛肉块、整只火腿和巨大的桶装满了这个房间，还有成百上千的板条箱。","这个地方散发着麻袋、木头和盐的味道。","这个储藏室里有大量的食品，尽管所有食品都是普通品质。"],flesh:`这扇门被加固并上锁。任何拥有盗贼工具的角色可以尝试进行一次DC 17的敏捷检定来开锁。瑞兹米尔和布拉戈提库斯携带着钥匙。

这个储藏室里有大量的食品，尽管所有食品都是普通品质。除了其自然的冷藏效果外，这个房间没有什么特别的。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_blagothkus","npc_rath_modar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"巨大的牛肉块、整只火腿和巨大的桶装满了这个房间，还有成百上千的板条箱。这个地方散发着麻袋、木头和盐的味道。"},{id:"scn_hotdq_234",locationId:"loc_hotdq_234",name:"客房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间为人类大小的居民舒适地配备了家具。","与门相对的冰墙的一大块在被触碰时会消失1分钟，使这个房间暴露在外界环境中。","墙的另一边是一个户外起降平台。"],flesh:`这个房间为人类大小的居民舒适地配备了家具。

与门相对的冰墙的一大块在被触碰时会消失1分钟，使这个房间暴露在外界环境中。墙的另一边是一个户外起降平台。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_235",locationId:"loc_hotdq_234",name:"15. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["场景一片混乱：几十个狗头人在砍切、混合、搬运成袋的原料，还有的在搅动大锅。","这里可能是炼金实验室，也可能是厨房——有狗头人在做饭，实在难以确定。","这里有二十只狗头人，它们正在为城堡的其他居民准备食物。","厨房里堆满了大块的牛肉、整只羊、装满干鱼的箱子，以及大量的培根、洋葱、豆类等食材。","在上方壁架上栖息的是一头狮鹫。"],flesh:`这里有二十只狗头人，它们正在为城堡的其他居民准备食物。厨房里堆满了大块的牛肉、整只羊、装满干鱼的箱子，以及大量的培根、洋葱、豆类等食材。

在上方壁架上栖息的是一头狮鹫。这个生物是布拉戈提库斯的宠物，它确保狗头人们表现规矩。每当发生战斗，它从上方一声尖叫就能让狗头人们恢复秩序。如果狗头人受到攻击，狮鹫兽也会保护它们。

对厨房的彻底搜索揭示了装有黑胡椒、肉桂和肉豆蔻的小箱子。每个箱子重2磅，但它们的内容物总共价值130金币。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:["enc_hotdq_235"],treasureSlotIds:["trs_hotdq_235_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"场景一片混乱：几十个狗头人在砍切、混合、搬运成袋的原料，还有的在搅动大锅。这里可能是炼金实验室，也可能是厨房——有狗头人在做饭，实在难以确定。"},{id:"scn_hotdq_238",locationId:"loc_hotdq_238",name:"城堡区域 (16-25)",activation:{condition:{type:"always"},priority:0},skeleton:["此处是「城堡区域 (16-25)」。"],flesh:"",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_hotdq_239",locationId:"loc_hotdq_238",name:"16. 上层庭院",activation:{condition:{type:"always"},priority:0},skeleton:["上层庭院是城堡在空中时龙类、飞龙和飞行施法者的主要着陆平台。","白昼时，2d6名食人魔在此练习标枪猛投。","夜晚时，庭院被雾（高达30尺）2，并由吸血鬼、桑德西尔·莫吉亚（见区域18）巡逻。","高大、修长的冰制塔楼和墙壁环绕着一个风吹的庭院。","在此着陆的角色需要立即准备好展示邪教的旗帜或信物；"],flesh:`上层庭院是城堡在空中时龙类、飞龙和飞行施法者的主要着陆平台。白昼时，2d6名食人魔在此练习标枪猛投。夜晚时，庭院被雾（高达30尺）2，并由吸血鬼、桑德西尔·莫吉亚（见区域18）巡逻。

在此着陆的角色需要立即准备好展示邪教的旗帜或信物；否则，守望的食人魔或吸血鬼会发出警报并攻击他们。20号区域的食人魔会调查庭院中任何大声的干扰。`,spotlightRefs:[],presentNpcIds:["npc_sandesyl_morgia","npc_blagothkus","npc_rezmir"],availableInfoIds:[],encounterIds:["enc_hotdq_239"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"高大、修长的冰制塔楼和墙壁环绕着一个风吹的庭院。",dmGuidance:"如果角色们伪装自己或巧妙地通过庭院，他们将被带去见云巨人布拉戈提库斯（如果被食人魔抓住），或者见瑞兹米尔（如果被吸血鬼抓住）。"},{id:"scn_hotdq_23c",locationId:"loc_hotdq_238",name:"17. 高蓝塔",activation:{condition:{type:"always"},priority:0},skeleton:["这座浅蓝色的冰塔呈现出冬日天空的颜色。","它仅有的几扇窗户闪烁着像镜子或水晶一样的光泽。","这座塔的门装有一个铁锁，只有 布拉戈提库斯 携带着唯一的钥匙。","两名手持标枪、岩石和弩炮的食人魔在塔顶守卫。","他们有长长的绳索用于在塔外爬上爬下。"],flesh:`这座塔的门装有一个铁锁，只有 布拉戈提库斯 携带着唯一的钥匙。可以用 盗贼工具 并通过一个成功的 DC 15 敏捷检定来撬开锁。两名手持标枪、岩石和弩炮的食人魔在塔顶守卫。他们有长长的绳索用于在塔外爬上爬下。

塔的内部是一个高90尺的中空圆柱体，没有楼梯或梯子到达顶部。塔内的任何生物，只要说出命令词"Esclarotta"，就会立即被传送到区域21。

如果站在这座塔顶守望的两个食人魔开始用弩炮射击或投掷一些巨石，他们会相当快地引起主城堡场地和庭院中的食人魔守卫、邪教徒以及其他人的注意。一旦有食人魔大喊，就会立刻拉响警报。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座浅蓝色的冰塔呈现出冬日天空的颜色。它仅有的几扇窗户闪烁着像镜子或水晶一样的光泽。"},{id:"scn_hotdq_23f",locationId:"loc_hotdq_238",name:"18. 坍塌的塔楼",activation:{condition:{type:"always"},priority:0},skeleton:["这座塔几乎有100尺高，但它的状况破败不堪。","有两个入口：一个位于塔基的门无法打开（见下文），以及一个位于塔基上方75尺处的破败冰制阳台上的工作门。","这座古老塔楼似乎正在崩裂。","窗户已经被冰封住，墙壁和屋顶上出现了裂缝。","一个雕刻着冰的阳台紧贴着塔楼的一侧，距离塔基75尺。"],flesh:`这座塔几乎有100尺高，但它的状况破败不堪。有两个入口：一个位于塔基的门无法打开（见下文），以及一个位于塔基上方75尺处的破败冰制阳台上的工作门。

这是吸血鬼 桑德西尔·莫吉亚的塔楼，她是一位在成为不死生物很久之前就加入了龙之邪教的月精灵。她是老卫队的成员，在Severin接管之前就已经存在了很久。如果有机会，她会谈论在Sammaster的领导下服役以及杀死龙并将它们作为龙巫妖复活的经历，她仍然认为这是"真正的道路"。她讨厌新的邪教领导层，但因环境所迫，她不得不与他们合作。

桑德西尔只在夜间活动，在夜晚时段潜行于上层和下层庭院，密切注意落单的食人魔守卫或其他可能成为她餐点的人。当面对的敌人多于她能应对的数量时，她会召唤两个初生吸血鬼（月亮精灵伴侣）作为援兵。这些初生吸血鬼潜伏在塔的上层。

这座塔急需维修。破裂和碎裂的冰提供了大量的抓手，使得塔的墙壁可以通过一次成功的DC 10力量（运动）检定来攀爬。

这座塔曾经有四个层高20尺的楼层；然而，除了最高楼层外，其他楼层的地板和天花板都已经破碎，曾经沿着塔内盘旋连接各个楼层的楼梯也已经被摧毁。现在，一楼充满了冰碛碎片，深达20尺，这些碎片阻止了一楼门的开启。

进入塔楼的最佳途径是通过阳台。然而，阳台已经弱化，如果放置超过150磅的重量，它就会断裂。从阳台通往的门没有上锁，通向作为桑德斯尔墓室的上层。这一层没有窗户。

桑德斯尔的棺材位于塔楼上层的中央，由她的两个伴侣日夜守卫。棺材里装有墓地的泥土，但没有宝藏。一座冰制楼梯紧贴着一面墙，下降了几尺后突然结束，在塔楼最底层填满冰碴的50尺上方。`,spotlightRefs:[],presentNpcIds:["npc_sandesyl_morgia"],availableInfoIds:[],encounterIds:["enc_hotdq_23f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[98],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座古老塔楼似乎正在崩裂。窗户已经被冰封住，墙壁和屋顶上出现了裂缝。一个雕刻着冰的阳台紧贴着塔楼的一侧，距离塔基75尺。",mapGeometry:{imageRef:"adventure/HotDQ/053-tod-08-05.webp"}},{id:"scn_hotdq_243",locationId:"loc_hotdq_238",name:"19. 舵手塔",activation:{condition:{type:"always"},priority:0},skeleton:["布拉戈提库斯已经用en=Arcane Lock确保了这座塔的门。","它可以通过巨人的力量或en=Knock法术正常打开。","一座冰制楼梯从塔楼的底层通往一个更高的房间，房间的墙壁和天花板上闪烁着光芒：到处都是宝石。","你可以看到发光的月长石、拇指大小的翡翠、闪亮的银色秘银魔杖，以及覆盖着绿松石和黄金的奇异球体，还有数十个镶嵌在墙壁上的铜杆和金球。","过了一会儿，墙壁本身似乎消失了，提供了一个完美的全方位俯瞰视角，就好像没有城堡和云团一样。"],flesh:`布拉戈提库斯已经用en=Arcane Lock确保了这座塔的门。它可以通过巨人的力量或en=Knock法术正常打开。对于其他人来说，强行打破它几乎是不可能的，因为需要进行DC 70力量检定。

这是城堡的舵手室。当没有人在场时，城堡由被强大魔法束缚在堡垒中的埃斯克拉罗塔的精神控制，这种魔法无法被解除。触碰其中一个发光的符文会向埃斯克拉罗塔的精神发出特定命令。懂矮人语或巨人语的角色可以理解这些命令符文。

有十八个指挥符文。

尽管任何人都可以触发命令符文，但实际上云巨人埃斯克拉罗塔的灵魂控制着城堡，并可以"锁定"滥用命令符文的个体，有效地使他们无法触发符文。

任何成功通过 DC 15 智力（奥秘）检定的角色都能感知到一种智慧的存在，并且只要在塔内呼唤，就可以尝试与埃斯卡拉罗塔的灵魂进行交流。她是一个善良的灵魂，被那些侵扰她美丽城堡的邪教徒、龙、飞龙和狗头人所困扰，并且渴望了解她丈夫的近况。向她提出的请求通过 DC 14 魅力（游说）检定即可成功。如果有人试图破坏操纵室，埃斯卡拉罗塔会触发警报符文。布拉戈提库斯（参见 附录D）会在 3 轮后带着两名 食人魔（他的管家）赶到。

如果布拉戈提库斯在城堡上死亡，他的灵魂将取代埃斯克拉罗塔的，他会坠毁城堡，以防止它落入敌人手中（见"发展"）。

这将摧毁城堡在动力下移动、产生天气效果等能力。城堡将被强风向北吹去，最终撞在世界之脊山脉的米克洛斯冰川上。修复控制机制需要一段极其困难和昂贵的长时间工作，尽管一个en=Wish法术可以完成它。

城堡可能会坠毁，这取决于角色和各种非玩家角色的行动。

如果云巨人被杀死，他在驾驶室中的妻子的灵魂会被他的灵魂取代。激怒之下，他会通过将城堡向北移动并在靠近米克洛斯冰川的世界之脊处命令其坠毁来复仇。关于这次坠毁及其后果的更多细节在提亚马特的崛起中提供。

如果龙被杀死且邪教徒被击溃，拉斯·莫达会召集任何剩余的与邪教结盟的力量并杀死布拉戈提库斯，因为他深知云巨人的死亡将导致城堡坠毁（见上文）。拉斯·莫达随后使用他的en=Fly法术逃离。

如果他们仍在城堡上，拉斯·莫达和吸血鬼会尽最大努力阻挠他们。

如果他仍然控制着城堡，布拉戈提库斯决定去拜访巨人。他将Skyreach Castle向北发送至接近世界之脊的地方。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus","npc_rath_modar"],availableInfoIds:[],encounterIds:["enc_hotdq_243"],treasureSlotIds:["trs_hotdq_243_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[98],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一座冰制楼梯从塔楼的底层通往一个更高的房间，房间的墙壁和天花板上闪烁着光芒：到处都是宝石。你可以看到发光的月长石、拇指大小的翡翠、闪亮的银色秘银魔杖，以及覆盖着绿松石和黄金的奇异球体，还有数十个镶嵌在墙壁上的铜杆和金球。过了一会儿，墙壁本身似乎消失了，提供了一个完美的全方位俯瞰视角，就好像没有城堡和云团一样。十多个发光的白色符文闪现出来，像雪花一样在房间里飘动。",dmGuidance:`【指挥符文】一种类似呼啸风声的噪音警告了城堡内所有非耳聋生物。
一种类似大声耳语的声音标志着危险的结束。
城堡在地面或空中保持位置。尽管有风、暴风雨等，城堡仍然保持静止。
城堡周围的雷云在1分钟内逐渐减弱。在此期间，风暴符文无法重新激活。
城堡不再锚定。
城堡随风飘荡，实际上无人控制。
城堡返回其起源之地，在世界之脊（北方寒冷的山脉）。
城堡朝指定的基本方向移动。同时触摸两个符文可以使城堡朝其他方向移动；例如，同时触摸北和东的符文会将城堡朝东北方向移动。
城堡每轮上升10尺。
城堡每轮下降10尺。如果接触到地面，它将着陆。
城堡缓慢地顺时针旋转，每1分钟完成一次完整的旋转。
城堡周围的云层变暗并翻腾，在1分钟内变成轰隆的雷云。在此之前，平静符文无法激活。一旦雷云完全形成，激活风暴符文的生物可以在舵室内使用其动作，瞄准它能看见的一个生物发射一道闪电箭。闪电箭的射程为1,000英尺，可以瞄准一个生物或无人看管的物体。被闪电箭瞄准的生物必须成功通过一次DC 14敏捷豁免，否则将受到22（4d10）点闪电伤害。被闪电箭瞄准的无人看管的物体则直接承受伤害（无需豁免）。
笼罩城堡的雾状云物质消散。2范围在1轮内变为天晴，而2范围变为2持续1分钟，随后变为天晴。
雾状云物质在城堡周围显现。一分钟后，城堡100尺内所有室外区域的生物和物件2，所有室内区域的生物和物件2。
城堡缓慢地逆时针旋转，每分钟完成一次完整的旋转。
如果角色会说巨人语，他在检定时具有优势。
如果角色坚持要拆掉有价值的控制元件，他们可以撬出一把把的翡翠、绿松石、月长石、一大块玉石、一些琥珀碎片以及大块的秘银，总价值为10,000金币。
如果冒险者们与布拉戈提库斯成为朋友并赶走邪教徒和龙，他们可以驾驶城堡飞往任何地方，尽管他们肯定会吸引任何龙的敌意。`},{id:"scn_hotdq_25b",locationId:"loc_hotdq_25b",name:"食人魔营房",activation:{condition:{type:"always"},priority:0},skeleton:["这个没有家具的房间内，有一群食人魔睡在一堆皮毛上。","除非他们被警报或其他干扰吸引到其他地方，否则十二个食人魔会在这个没有其他特征的建筑中睡在堆积的皮毛上。","这些食人魔都在袋子、麻袋和箱子里存放着少量的金币和银币。","如果任何食人魔被俘虏、魅惑或被花言巧语说服，角色们能了解到的信息相对较少。",'他们为云巨人布拉戈提库斯服务（他的妻子在几年前被杀），他们知道云巨人有几位客人，包括"穿红袍的巫师"（拉斯·莫达）、"龙女士"（瑞兹米尔）和"住在洞穴里的白色巨龙"（格拉泽尔）。'],flesh:`除非他们被警报或其他干扰吸引到其他地方，否则十二个食人魔会在这个没有其他特征的建筑中睡在堆积的皮毛上。

这些食人魔都在袋子、麻袋和箱子里存放着少量的金币和银币。

如果任何食人魔被俘虏、魅惑或被花言巧语说服，角色们能了解到的信息相对较少。他们为云巨人布拉戈提库斯服务（他的妻子在几年前被杀），他们知道云巨人有几位客人，包括"穿红袍的巫师"（拉斯·莫达）、"龙女士"（瑞兹米尔）和"住在洞穴里的白色巨龙"（格拉泽尔）。要获取比基本信息更多的内容，每项额外信息需要进行一次DC 19魅力（游说）检定：

一个吸血鬼在夜间监视着Skyreach城堡。它有时会以食人魔为食，令他们感到恼怒。

邪教使用城堡访问没有道路或传送门的重要地点。食人魔并不清楚他们具体在哪里，只知道是"绿森林"、"那片沼泽地带"和"古老的山脉"。

城堡的迷雾和航行都由云巨人的魔法控制。没有他，城堡无法飞行。

最后一点是不真实的，但这是布拉戈提库斯告诉他的食人魔的，他们相信他。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:["enc_hotdq_25b"],treasureSlotIds:["trs_hotdq_25b_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"这个没有家具的房间内，有一群食人魔睡在一堆皮毛上。",dmGuidance:`如果角色们出其不意地出现在这个房间的居住者面前，请阅读以下文本。
如果角色们花30分钟搜查兵营，他们会发现800枚银币和300枚金币。
如果队伍中的一名成员成功通过了一项DC 20智力（调查）检定，他或她会在裂缝中发现一颗价值500 gp的淡蓝色蓝宝石。`},{id:"scn_hotdq_25f",locationId:"loc_hotdq_25b",name:"21. 埃斯克拉罗塔的墓穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个冰封的密室没有明显的入口或出口。","然而，生物可以通过区域17传送到这个被埋藏的密室。","你出现在一个由坚实冰川冰雕刻而成的椭圆形洞穴中，没有通道可以出去。","天花板高30尺，挂着冰柱，碎冰片围绕着位于地板中央的巨大白色大理石棺材。","棺材的盖子雕刻成一个长发飘逸的女性巨人的形象。"],flesh:`这个冰封的密室没有明显的入口或出口。然而，生物可以通过区域17传送到这个被埋藏的密室。

这具石棺长20英尺，宽10英尺，高10英尺。石棺底座上雕刻的矮人符文拼出了名字"艾斯克拉罗塔"。石棺的盖子需要一个DC 30的力量检定才能推开，里面安放着布拉戈提库斯已故的云巨人妻子的遗骨。没有随葬的财宝。

在这座坟墓中说出"布拉戈提库斯"这个名字的生物会立即被传送到 区域17 的地面层。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"你出现在一个由坚实冰川冰雕刻而成的椭圆形洞穴中，没有通道可以出去。天花板高30尺，挂着冰柱，碎冰片围绕着位于地板中央的巨大白色大理石棺材。棺材的盖子雕刻成一个长发飘逸的女性巨人的形象。"},{id:"scn_hotdq_261",locationId:"loc_hotdq_25b",name:"22. 云巨人塔",activation:{condition:{type:"always"},priority:0},skeleton:["这座70尺高的塔楼有一个城垛屋顶，地面层有两扇未上锁的门，并且没有窗户。","塔楼内部分为两层，每层都有30尺高的天花板。","一座雕刻成冰的楼梯紧贴内墙，连接着两层。","除非角色们采取措施隐藏自己的行踪，否则屋顶上的食人魔会发现他们。","三只食人魔守卫着塔顶，塔顶上配备了一台弩炮。"],flesh:`这座70尺高的塔楼有一个城垛屋顶，地面层有两扇未上锁的门，并且没有窗户。塔楼内部分为两层，每层都有30尺高的天花板。一座雕刻成冰的楼梯紧贴内墙，连接着两层。

除非角色们采取措施隐藏自己的行踪，否则屋顶上的食人魔会发现他们。

三只食人魔守卫着塔顶，塔顶上配备了一台弩炮。详情请见区域6B。

如果上方或下方的食人魔发出警报，布拉戈提库斯不能被突袭。

布拉戈提库斯（附录D）和两个食人魔（他的管家）并不是这个房间里唯一的居民。在他的回合中，布拉戈提库斯可以作为一个奖励动作，召唤一个被魔法束缚在房间里的气元素。这个元素会听从巨人的命令，但无法离开房间。它会一直存在，直到被其主人解雇。

愚笨的食人魔管家不善言辞，但布拉戈提库斯却把他们当作倾诉对象，表达他对龙之教团可能试图夺取城堡控制权的担忧。食人魔们无法提供任何建议。聪明的角色可以通过利用巨人的恐惧来制造不和（参见本章开头的"与云巨人协商"）。警报或角色的突然出现会让他惊慌失措，并立即伸手去拿武器。食人魔们会誓死保卫他们的主人。

这些箱子没有上锁，里面装满了银币和金币（总共12000金币）。其中一个箱子还包含一个次元袋（容量袋）、四根纯金条（每根价值1000金币）和四十根纯银条（每根价值100金币）。每根金条或银条约重5磅。

但以防万一，你应该知道他们非常认真地想要再次让龙在海岸线上成为一股力量。你能想象吗？真是胆大包天。'如果他们说服巨人站在他们这边，巨人会把自己锁在区域19，并在角色们处理邪教徒和白龙时引导城堡向北移动。布拉戈提库斯的最终目的地在提亚马特的崛起中有描述。

如果有人试图从他手中夺取城堡，布拉戈提库斯会前往驾驶塔，试图让城堡在世界之脊山脉坠毁；有关详细信息，请参阅区域19。如果布拉戈提库斯被杀，他的灵魂将接管城堡，最终结果相同。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:["enc_hotdq_261","enc_tod_skyreach_tower_top"],treasureSlotIds:["trs_hotdq_261_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间的墙壁上雕刻着冰壁画，描绘了云巨人骑着巨大的鸟。一个巨大的床，床头板是雕刻成云朵形状的冰，主宰着这个房间。床上堆满了熊皮，床脚处有两个大木箱。
一个蓝皮肤的巨人盘腿坐在地上，两个食人魔正在梳理他那雪白的头发。巨人那巨大的晨星锤靠在床边，伸手可及。`,dmGuidance:`如果角色假扮成教团成员，布拉戈提库斯会对他们的入侵感到愤怒，但除非他们进一步挑衅，否则不会发动攻击。
如果角色们向布拉戈提库斯投降，他会询问他们的名字、忠诚和计划。
如果角色们自称是邪教的敌人，巨人会说：'我可以对付他们。`,mapGeometry:{imageRef:"adventure/HotDQ/054-tod-08-06.webp"}},{id:"scn_hotdq_268",locationId:"loc_hotdq_25b",name:"23. 巨人客房",activation:{condition:{type:"always"},priority:0},skeleton:["这些房间是为巨人尺寸的客人准备的，配备了相应尺寸的家具。","在每个房间中，当触摸时，外墙的一大块区域会在1分钟内消失，露出一个冰冷的着陆平台。","很久以前，巨人会使用这些平台让他们的飞行神鹰坐骑着陆。"],flesh:`这些房间是为巨人尺寸的客人准备的，配备了相应尺寸的家具。

在每个房间中，当触摸时，外墙的一大块区域会在1分钟内消失，露出一个冰冷的着陆平台。很久以前，巨人会使用这些平台让他们的飞行神鹰坐骑着陆。`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_hotdq_269",locationId:"loc_hotdq_25b",name:"24. 仆人营房",activation:{condition:{type:"always"},priority:0},skeleton:["二十只狗头人正试图在这里的小堆床上用品、毛皮和衣服上睡觉。","他们非常疲惫，除非面临极大危险，否则会忽略角色们。","每次成功都会揭示以下信息之一；","任何角色的第一次失败意味着狗头人们在对邪教徒的恐惧中团结起来，并完全沉默。","如果进一步询问，他们开始尖叫求救，语无伦次地求饶：完全没有用处。"],flesh:`二十只狗头人正试图在这里的小堆床上用品、毛皮和衣服上睡觉。他们非常疲惫，除非面临极大危险，否则会忽略角色们。他们没有宝藏。

角色在询问地精仆从时可以进行一次 DC 12 魅力（游说）检定。

每次成功都会揭示以下信息之一；任何角色的第一次失败意味着狗头人们在对邪教徒的恐惧中团结起来，并完全沉默。如果进一步询问，他们开始尖叫求救，语无伦次地求饶：完全没有用处。

一个精灵吸血鬼居住在那座摇摇欲坠的塔楼中（区域18）。

布拉戈提库斯仍然与他已故的妻子对话，她的灵魂是城堡的驾驶员和保护者。如果巨人死去，城堡的所有魔法将会消失。

人类龙之教派的人并不像狗头人那样真正理解龙。龙是很好的生物，但脾气暴躁。他们说这里的宝藏是为了所有龙的女王，以防止她脾气暴躁。

一位身穿红袍的法师正在与邪教徒合作，他的房间（区域12）对所有狗头人禁止进入。

白龙Cloudchaser喜欢冷冻肉。把它扔进洞穴（区域25），然后快跑！`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色穿着邪教徒的服装并且表现相当令人信服，则无需进行检定。"},{id:"scn_hotdq_26a",locationId:"loc_hotdq_25b",name:"25. 主金库",activation:{condition:{type:"always"},priority:0},skeleton:['城堡的冰制"核心"被挖空成隧道，在多个点穿透表面。',"白龙，Glazhael the Cloudchaser，通过一个宽漏斗形状的通道进出，当它接近主金库时通道变窄，那里是龙之教派存放宝藏的地方。","蓝色冰墙部分透明，可以看到周围嵌入冰中的各种物品，包括硬币、头盔、家畜、一小撮狗头人，以及一两个食人魔。","霜冻覆盖在隧道地面上，踩上去会发出嘎吱声。","所有隧道似乎都通向一个中心核心——一个闪闪发光的冰洞，有着参差不齐的墙壁和大小如钟乳石的冰柱。"],flesh:`城堡的冰制"核心"被挖空成隧道，在多个点穿透表面。白龙，Glazhael the Cloudchaser，通过一个宽漏斗形状的通道进出，当它接近主金库时通道变窄，那里是龙之教派存放宝藏的地方。

格莱泽尔是一只成年白龙，他正在尽自己的一份力确保提亚马特的崛起，希望这位邪恶龙族的皇后能赐予他无尽的力量。然而，他有点迟钝，认为访客要么是仆人（给他带来食物的人），要么是敌人（不给他带来食物的人）。大多数时候，格莱泽尔以守护这些宝藏给提亚马特，他那最光荣和完美的皇后而自豪。他很少与塔利斯之外的任何邪教徒交谈，并对瑞兹米尔和其他人充满怀疑。

他会慷慨地饶恕那些以财宝或食物形式向他致敬的人的生命。那些挑战他的人将成为他的吐息武器的目标。

在战斗中，Glazhael尽可能地紧贴天花板，使用他的吐息武器和骇人威仪开始战斗。如果这还不能吓跑角色们，他会进行近战攻击，直到他的吐息武器重新充能。如果生命值降至40点以下，他会逃跑。他可以通过收起翅膀在狭窄的隧道中穿行。一旦到了外面，他会用龙语警告城堡的其他人：'他们在追宝！'

聪明的角色可以将龙诱入一个狭窄的隧道，在那里它无法有效机动。在这种情况下，龙在近战攻击上会有不利。

这些财宝被冻结在冰中，需要使用多个火系法术或者长时间用篝火等待才能融化冰层。财宝包括500,000铜币，100,000银币，和5,000金币，一个冻结的箱子，内含800铂金和21颗小蓝宝石，每颗价值300金币，一个冻结的气化形体药水（气态形态药水），一把+1 长剑（+1长剑），一把+1 长弓（+1长弓），一件+1 皮甲（+1皮甲），以及防御护腕（防御护腕）。

如果龙被杀死，邪教徒会愤怒并寻求立即报复。Skyreach城堡中的主要邪教成员会召集食人魔，唤醒吸血鬼，并要求红袍法师找到入侵者。`,spotlightRefs:[],presentNpcIds:["npc_rezmir","npc_blagothkus"],availableInfoIds:[],encounterIds:["enc_hotdq_26a"],treasureSlotIds:["trs_hotdq_26a_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`蓝色冰墙部分透明，可以看到周围嵌入冰中的各种物品，包括硬币、头盔、家畜、一小撮狗头人，以及一两个食人魔。霜冻覆盖在隧道地面上，踩上去会发出嘎吱声。

所有隧道似乎都通向一个中心核心——一个闪闪发光的冰洞，有着参差不齐的墙壁和大小如钟乳石的冰柱。这个宏伟的金库分为两层：一个卵形的上层，有一个陡峭的悬崖俯瞰着下方30尺的下层，那里有一堆巨大的宝藏躺在冰层之下。在宝物上方的天花板上，一只巨大的白龙紧贴着，翅膀紧贴在身体两侧，爪子抓住冰面。

洞穴的地面上铺满了金币、银币、铜币和宝石，都被一层冰封住了。还有许多古老的人类头骨和骨头也冻结在冰中。`,dmGuidance:`如果角色们探索这些隧道，请阅读或释义以下内容：
当角色们到达主金库时，请阅读以下内容：
如果角色们与Glazhael交谈，他会以一篇自大的演讲回应，讲述龙类相较于人类、矮人等的优越性。
如果角色们以荒谬的程度奉承他，他会倾听任何听起来像是过分讨好、奴性、乐于助命的话语，但不会给予任何回报。
当角色们调查这些财宝时，请阅读以下内容：
如果角色们在龙被杀死后仍然在场，整个城堡将进入高度警戒状态，直到他们被发现并被杀死。`},{id:"scn_hotdq_270",locationId:"loc_hotdq_25b",name:"结束冒险",activation:{condition:{type:"always"},priority:0},skeleton:["天穹堡的坠毁或被占领标志着龙后的宝山的结束。","如果你使用里程碑经验规则，角色们将因完成此冒险而达到8级。","通过揭露邪教的计划并劫持大量财宝，角色们减缓并损害了邪教成功的机会。","他们可能还杀死或俘获了龙之邪教的重要领袖。","但还有更多事情即将发生。"],flesh:`天穹堡的坠毁或被占领标志着龙后的宝山的结束。如果你使用里程碑经验规则，角色们将因完成此冒险而达到8级。通过揭露邪教的计划并劫持大量财宝，角色们减缓并损害了邪教成功的机会。他们可能还杀死或俘获了龙之邪教的重要领袖。但还有更多事情即将发生。邪教继续执行他们的计划，试图从九层地狱中释放他们的五头女王，而仅仅失去财富并不会阻止真正的狂热分子。

提亚马特的崛起 扩展了最终消灭龙巫教的行动，它需要强大的新力量和新的勇气。冒险者在寻求帮助的过程中，从未移动的冰海到蛇山深处，事情变得更加危险。他们可能会在巨人中找到一件强大的武器，或者在教派内部发现一个意想不到的盟友。

除非角色们继续前进，否则龙之女王可能仍然会在较小生物的土地上建立她个人的统治。当九层地狱之门打开，满是火焰和利齿的鳞片末日从巢穴中出现时，风险就变得很高。

冲突在龙井达到了高潮，角色们和他们辛苦赢得的盟友面对提亚马特及其最强大的仆从，在一场生死决战中！`,spotlightRefs:[],presentNpcIds:["npc_blagothkus"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/HotDQ/055-tod-08-07.webp"}},{id:"scn_rot_05f",locationId:"loc_rot_05f",name:"深水城议会",activation:{condition:{type:"always"},priority:0},skeleton:["提亚马特的崛起紧接在龙后的宝山结局之后，并假设角色们在那次冒险后返回了深水城。","在这座城市中，冒险者们被召唤参加深水城议会的第一次会议。","在那次集会中，他们听到了古老的龙吼号角的声响，这预示着龙之邪教的阴谋进入了下一阶段。",'（关于龙吼号角的更多信息，请参见第十七章，但务必在角色们完成"第10章：移动冰海"之前保留这些信息。'],flesh:'提亚马特的崛起紧接在龙后的宝山结局之后，并假设角色们在那次冒险后返回了深水城。在这座城市中，冒险者们被召唤参加深水城议会的第一次会议。在那次集会中，他们听到了古老的龙吼号角的声响，这预示着龙之邪教的阴谋进入了下一阶段。（关于龙吼号角的更多信息，请参见第十七章，但务必在角色们完成"第10章：移动冰海"之前保留这些信息。）',spotlightRefs:[],presentNpcIds:["npc_maccath_the_crimson"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/RoT/006-tod-09-01.webp"},offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_060",locationId:"loc_rot_05f",name:"开始冒险",activation:{condition:{type:"always"},priority:0},skeleton:["提亚马特的崛起 始于深水城。","如果你玩过 龙后的宝山，角色们可能已经在天穹堡坠毁后返回了这座辉煌之城。","如果你没有玩过 龙后的宝山，如果天穹堡没有坠毁，或者如果角色们之后去了深水城以外的其他地方，你需要让队伍回到深水城以开始这次冒险。","简单地告诉玩家他们的角色回到了深水城是很容易的。","然而，如果你怀疑你的团队不会对此感到满意，你可以通过使用以下情景来避免进行一次漫长的陆上旅行。"],flesh:`提亚马特的崛起 始于深水城。如果你玩过 龙后的宝山，角色们可能已经在天穹堡坠毁后返回了这座辉煌之城。如果你没有玩过 龙后的宝山，如果天穹堡没有坠毁，或者如果角色们之后去了深水城以外的其他地方，你需要让队伍回到深水城以开始这次冒险。

简单地告诉玩家他们的角色回到了深水城是很容易的。然而，如果你怀疑你的团队不会对此感到满意，你可以通过使用以下情景来避免进行一次漫长的陆上旅行。

无论角色们在这个环节开始时身在何处，一只乌鸦飞向他们。这只鸟是翡翠联盟的Leosin Erlanthar的盟友们派遣的en=Animal Messenger中继的一部分。

这只鸟耐心地等待着皮革包裹从它的鞍具上被取下。包裹里有一张仔细折叠的法术卷轴，上面记载着en=Teleport以及深水城一个永久传送法阵的符号序列。这个法阵可以位于一座神庙、政府建筑或你选择的任何其他地点。只是别让这个过程太过困难。`,spotlightRefs:[],presentNpcIds:["npc_maccath_the_crimson"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:'乌鸦在你前方十几步远的地方落地，然后大胆地跳得更近，它的腹部绑着一个用油布包裹的扁平包裹。它神秘地盯着你看了一会儿，然后用一个熟悉的声音说话。"里奥辛·埃兰萨向你致以最热烈的祝贺！请使用这只鸟带来的礼物尽快在深水城与我见面。"',dmGuidance:`如果队伍中有超过六个角色，包裹里会包含两张卷轴。
如果队伍中没有角色能够使用en=Teleport卷轴，他们需要寻找一位能够使用它的 NPC。`},{id:"scn_rot_062",locationId:"loc_rot_05f",name:"回到深水城",activation:{condition:{type:"always"},priority:0},skeleton:["剑海岸最强大的派系都认识到提亚马特可能回归的重要性，并且他们愿意相互合作来阻止它。","这些不同的团体之间信任并不容易建立。",'但即使是过去曾经发生过冲突的秩序和组织，也很容易理解"敌人的敌人"这一概念。',"为了协调对抗龙巫教的工作，各个派系派遣了重要代表在深水城举行了秘密会议。","如果你没有参与龙后的宝山的冒险，将会有一支独立的英雄队伍袭击了天穹堡，并英勇牺牲以摧毁这座堡垒。"],flesh:`剑海岸最强大的派系都认识到提亚马特可能回归的重要性，并且他们愿意相互合作来阻止它。这些不同的团体之间信任并不容易建立。但即使是过去曾经发生过冲突的秩序和组织，也很容易理解"敌人的敌人"这一概念。

为了协调对抗龙巫教的工作，各个派系派遣了重要代表在深水城举行了秘密会议。如果你没有参与龙后的宝山的冒险，将会有一支独立的英雄队伍袭击了天穹堡，并英勇牺牲以摧毁这座堡垒。因此，角色们之所以被邀请参加议会，仅仅是因为他们作为强大冒险者的声誉，并且议会预料到需要他们的服务。

这位僧侣解释了议会的目的，并告诉冒险者们他们被期望参加第一次集会——既是为了议会能感谢他们的伟大事迹，也是为了向议会提供关于龙之教派的信息。在危机的关键时刻，议会共举行了四次会议，一直到冒险的最终章节——龙井。

在议会的第一次会议期间，当龙吼号角响起时，整个剑海岸都意识到了龙之邪教阴谋的进展。之后，角色们得到了线索，指向第十章或者指向瓦拉姆在第十一章和第十二章。

议会的第二次会议被召集以应对日益严重的龙类活动。角色们被要求调查迷雾森林中一系列毁灭性的袭击，最终指向内洛维，在"{@area 第11章和第12章：向龙语者宣战。|12d|x}"中。冒险者们还被一位代表接触，他希望将队伍带往与金属龙的秘密会面，引导至第十四章。

议会召开了第三次会议，以评估联盟派系在对抗龙巫教方面取得的进展。队伍被要求追踪两条线索，这些线索可能会为他们提供对抗龙巫教的更多优势——一条是一位叛逃的教徒愿意交出一张龙面具，在第十五章中；另一条是试图削弱流亡的红袍法师的力量，在第十六章中。

在深水城议会的第四次会议上，冒险者们得知龙之邪教和红袍法师的阴谋接近成熟。各个派系的力量必须集结，为对龙井的攻击做准备。

在每一次新的议会中，各个派系都会衡量队伍的行动和成就，并将这些行动与他们自己的目标进行比较。推动某个派系目标的角色会发现那个派系愿意为对抗邪教的战斗提供更多的资源。然而，获得一个派系的忠诚可能会导致其他派系的不信任。冒险者必须在他们的诉求和安抚代表之间找到谨慎的平衡，以集结尽可能强大的力量来面对提亚马特。

尽管对所有与会者来说这并不理想，但深水城的领主宫殿是议会会议指定的地点。领主联盟派系派出了最多的代表，而这些代表更喜欢一个文明的聚会场所。`,spotlightRefs:[],presentNpcIds:["npc_tiamat","npc_varram","npc_neronvain","npc_maccath_the_crimson"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果冒险者们曾参与龙后的宝山的冒险，那么他们对龙巫教活动的了解将与任何人一样多，并且他们的英雄事迹已经引起了强大领导者的注意，使他们得以在议会桌上占有一席之地。
当角色们抵达深水城时，他们遇到了竖琴手代理人Leosin Erlanthar。`},{id:"scn_rot_064",locationId:"loc_rot_05f",name:"集结盟友",activation:{condition:{type:"always"},priority:0},skeleton:["尽管每个派系都为与提亚马特势力的最终决战提供了一些部队和资源，他们的支持程度——以及这种支持将产生多大的影响——取决于冒险者们通过自己的行动从每个团体获得的尊重。","在不可逆转地承诺战斗之前，必须说服一个派系，邪教构成了超越所有其他关切的危险——并且冒险者是领导这场战斗的正确英雄。","此外，在一个派系中值得尊重的行为可能会在另一个派系中失去尊重。","当冒险者完成冒险的各个章节时，你需要追踪他们在议会记分卡上从每个派系获得或失去的尊重（见附录 B）。",'"在下面的"会议评分"部分，可以找到更多信息。'],flesh:`尽管每个派系都为与提亚马特势力的最终决战提供了一些部队和资源，他们的支持程度——以及这种支持将产生多大的影响——取决于冒险者们通过自己的行动从每个团体获得的尊重。在不可逆转地承诺战斗之前，必须说服一个派系，邪教构成了超越所有其他关切的危险——并且冒险者是领导这场战斗的正确英雄。此外，在一个派系中值得尊重的行为可能会在另一个派系中失去尊重。

当冒险者完成冒险的各个章节时，你需要追踪他们在议会记分卡上从每个派系获得或失去的尊重（见附录 B）。"在下面的"会议评分"部分，可以找到更多信息。

大多数派系都向深水城议会派出了一个代表团，由几位重要人物及其助手组成。一般来说，只有每个代表团的领导人出席冒险者参加的议会会议。然而，无论个别代表对角色的行为有何反应，他们也会听取不在议会会议上的同僚的意见。个别领导人可能赞同的勇敢和英雄行为，如果这些行为与派系的议程不符，可能会被整个派系所不齿。`,spotlightRefs:[],presentNpcIds:["npc_tiamat","npc_maccath_the_crimson"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_rot_066",locationId:"loc_rot_05f",name:"议会的会议",activation:{condition:{type:"always"},priority:0},skeleton:['下面描述的四次议会会议的格式遵循了"战役概述"部分中设定的冒险流程。',"如果您的战役中事件的发展有所不同，请相应调整会议及其事件。","对于每次议会会议，都提供了对派系不同态度的简要理由。",'关于派系及其代表的更多信息在书籍介绍的"盟友"部分中提供。',"议会的每一次会议都讨论了作为该会议结果而进行的章节的设置，以及在该会议中解决结果的前一章节的后续行动。"],flesh:`下面描述的四次议会会议的格式遵循了"战役概述"部分中设定的冒险流程。如果您的战役中事件的发展有所不同，请相应调整会议及其事件。对于每次议会会议，都提供了对派系不同态度的简要理由。关于派系及其代表的更多信息在书籍介绍的"盟友"部分中提供。

议会的每一次会议都讨论了作为该会议结果而进行的章节的设置，以及在该会议中解决结果的前一章节的后续行动。在所有情况下，请参阅那些特定章节以获取详细信息。

两个预备事件帮助为议会的第一次会议做准备：阿瑟加斯特·乌尔布林特遇刺的消息，他是深水城的蒙面领主之一，以及龙吼号角的响起。

尽管龙之邪教的领导层可能没有意识到，挫败赛维林计划的关键事件之一是邪教暗杀了阿瑟加斯特·乌尔布林特，他是深水城的蒙面领主，也是竖琴手雷米·海文特里的丈夫。阿瑟加斯特最近被谋杀的消息已经传遍了剑海岸，并激发了深水城对邪教的反对。

在她的悲痛中，Remi Haventree发誓要摧毁邪教及其对剑海岸的威胁。她在将派系聚集到这个深水城议会中发挥了关键作用，为冒险者现在必须完成的联盟奠定了基础。

在Skyreach Castle坠毁或被俘获后不久，龙之邪教的特工在遥远的龙井吹响了龙吼号角。作为一个古老的魔法遗物，龙吼号角正被邪教用来召唤色彩龙加入他们黑暗的事业。

沉默只持续了片刻，深水城的常态声音又回来掩盖了那无法解释的感觉。同样，动物行为的微妙变化也可以被注意到。狗感到紧张和不安，马变得容易受惊，猫比平常更加野性，老鼠聚集成大胆的大群。敏感的NPC也受到影响，变得紧张、害怕和不耐烦。

在议会的第一次会议期间（如果角色们努力调查这一奇怪现象，也可以更早），冒险者们被达拉·希尔默赫尔夫——一位水深城的贵族——接近。

西尔玛赫芙女士从她家族的秘密恩人——一条名为尼穆尔的古老青铜龙那里学到了这些。她对龙吼号角略知一二，但她要等到第一次议会会议时才会透露。如果被问及知识的来源，她断然拒绝告诉任何人。这让乌尔德·鸦卫、康纳德国王和欧萨·弗鲁姆心生怀疑，但其他人对此保密行为见怪不怪。如果西尔玛赫芙女士受到不当对待，可能会影响尼穆尔在第十四章中与角色们的互动。

接受了议会会议邀请的冒险者们在领主宫殿受到接待。根据你的战役风格，对辉煌之城和领主宫殿的介绍可以详细或简单。

一旦进入领主宫殿，利奥斯因·埃兰萨带领团队前往秘密的议会厅。外廊挤满了贵族，他们正在进行激烈的辩论，守卫们穿着来自北方各个城邦的制服。

尽管埃尔兰萨尔没有被邀请参加议会讨论，雷马利亚·海文特里已经告知他议程以及召集队伍的原因。他建议角色们，尽管所有派系名义上都致力于阻止龙之邪教，但到目前为止，没有一个代表做出了实质性的承诺。

太多的不信任仍然困扰着各个派系，而且对情况的了解还不够充分。Erlanthar认为领导者们需要有人向他们展示正确的道路——英雄们将带领剑海岸的军队以坚定的信念进入即将到来的黑暗。他相信冒险者们有机会成为那些英雄。然而，他解释说，每个派系都会权衡角色们说的每一个字，并仔细审查他们的每一个决定。取悦一个团体可能会激怒另一个团体，要让所有各方都满意将是极其困难的。

一旦介绍完毕，如果冒险者没有玩过《龙后的宝山》，达格特·奈维姆伯会总结当前的情况。这包括召唤提亚马特的计划、由邪教领导的日益增加的龙类袭击、宝藏收集系统、天坠城堡的坠毁或被占领，以及龙语者和龙面具对邪教的重要性。

（此时，使用奈维默来补充你认为重要但在龙后的宝山中玩家未收集到的信息。）

大多数派系都认识到Skyreach Castle需要被阻止，并且如果城堡被摧毁，他们会感到高兴。然而，领主联盟的一些成员认为，无论有意或无意，如此资源被摧毁是不可接受的。这些持不同意见者认为，如果角色们等待增援，然后攻击以确保城堡（无论这个计划可能多么不现实）会更好。

龙孵化场的命运也引起了分歧。大多数代表尊重摧毁孵化场的决定，接受以后处理的龙数量减少是一个优势。然而，竖琴手更希望将蛋保留下来，作为对其父母进行勒索的筹码，可能使这些龙不与邪教合作。Dagult会把有价值的蛋卖给"负责任的买家"，然后用这些金币雇佣更多的雇佣兵。翡翠联盟坚决反对摧毁任何龙蛋，认为色彩龙是自然秩序的一部分，杀害它们的幼崽会破坏这种秩序的平衡。Taern Hornblade和Laeral Silverhand女士认为可能有办法利用蛋作为勒索，但两人都认识到持有它们将是危险的——甚至归还它们会更加危险。

在关于 龙后的宝山 事件的讨论结束后，议会转向当前的事务。所有人都很清楚，冒险者们已经果断地着手处理这场危机，并证明了自己的价值。议会授予角色们紧急调查的权力，并提供相应的授权书。这使得角色们能够访问他们认为调查所需的资源和地点，但同时也带来了议会监督的责任。

一旦角色们被授予了他们的权力，冒险的第一阶段就在等待着他们。

雷米利亚·海文特里在对抗龙之邪教的斗争中的第一个行动之一是鼓励竖琴手集中所有资源关注邪教的活动及其最强大的成员。这些努力已经取得了成功，利奥斯因·埃兰萨向冒险者报告了瓦拉姆，邪教的白龙语者的动向。这引出了"瓦拉姆·怀特"，是"第11章和第12章：龙语者之死"的一部分。

龙吼号角的响起对剑海岸的所有领导者来说都是一个沉重的负担。为了获取有关这个号角及其位置的更多信息，队伍踏上了前往冰冻的北方的远征，前往第十章。

在深水城的第二次议会上，冒险者们看到了两张新面孔。Neverember勋爵不再担任深水城的开放领主，而是由Laeral Silverhand女士接替，她现在坐在议会桌的首位。Dagult坐在她的右边，旁边是一位被介绍为Elia的人类女性（见下文）。

代表们在收到角色们的报告后，讨论了他们各自领域中的袭击事件，这为邪教正在进行的活动提供了背景，并清晰地传达了形势正在升级的印象。

针对龙语者瓦拉姆的命运，如果这位矮人在未经审讯的情况下被杀害，竖琴手联盟和塔恩会感到不安，而康纳雷德会因为瓦拉姆没有被捕并在矮人法庭上作为例子而感到不满。尽管大多数人对捕获瓦拉姆感到满意，但翡翠联盟却感到困惑，他们认为捕获他只会使事情复杂化。瓦拉姆已经表现出愿意破坏自然秩序的意愿，使得审判变得多余——并可能为营救行动打开大门。

奥术兄弟会是强大的盟友，如果队伍赢得了他们的支持，所有人都会感到高兴——除了Gauntlet秩序。Ontharr Frume知道奥术兄弟会不对其成员追求何种知识进行监管，并且他们容忍许多邪恶的法师加入他们的行列。将奥术兄弟会纳入联盟不会失去Frume的尊重，但也不会赢得它。

翡翠联盟的Delaan Winterhound参与调查了迷雾森林最近发生的龙类袭击事件。梅兰德拉克国王对Delaan的担忧不以为意，表示自从他的精灵增加了巡逻并加强了他们的阵地后，该地区的龙类袭击已经停止。发现真相将引导冒险者前往"内隆瓦因"，这是"{@adventure 第11章和第12章：向龙语者宣战。|RoT|3}"的一部分。

在会议期间，冒险者们被介绍给了银龙奥特阿利雅卡诺斯，她以人类形象伊莉亚出现。她带来了金属龙族会议的邀请，会议代表们请求冒险者们参加。这将引导他们进入第十四章。

第三次议会出现了另一个新面孔——提夫林里安·夜影，被介绍为尼弗伯爵的特殊顾问。细心的角色会注意到，会议上的一些人——包括伊斯特瓦尔爵士、昂塔尔·弗鲁姆和布朗安维尔大使——正在尽力忽视这位秘密的散塔林会代表，除非被队伍点名，否则他不会发表任何声明。

议会上所有人都对精灵森林中龙的袭击结束的消息感到欣慰。然而，Melandrach国王对他的儿子内洛维的背叛消息反应冷淡而愤怒。他仍然犹豫不决，不愿将精灵置于战斗的最前线，但不再阻碍谈判。他的实用主义意味着他不再对冒险者争取红法师、巨人甚至恶魔加入对抗龙之教派的战斗有任何疑虑——只要这样的盟友在战斗中方便地部署在他的精灵前面。

善良的龙是明智和公正的生物，他们对队伍的接纳极大地提升了冒险者在每个人眼中的地位。

他之所以道歉是因为荣誉要求他这么做，但他对迫使他屈服的队伍心存怨恨。如果为了回应矮人古老的龙议会而做出让步，康纳雷德·布朗安维尔同样会感到不快。龙议会的传统在他们的时代拯救了许多生命，而事实上有一只金属龙受伤表明它可能行为不端。矮人对于容忍行为不端的龙没有耐心，不管它们的颜色如何。

通过交换邪教所盗宝库的一部分是一些派系能够做出让步的唯一方式。对于为份额所做出的每一个让步，按照以下顺序圈出一个负号(−)图标：达格特·奈弗伯，Connerad，Melandrach，Lady Laeral，乌尔德·瑞文嘉德，Taern Hornblade，竖琴手，Sir Isteval，以及盾牌秩序。翡翠联盟不受此类让步的影响，因为该秩序并未受到龙类袭击的严重影响。

由于冒险者给龙族议会留下深刻印象的方式，现在分配那些承诺为各派系服务的龙的任务落在了他们身上。分配给领主联盟代表的龙被指派保护代表领土的首都城市。分配给竖琴手的龙将用于情报收集。战锤骑士团将任何龙送往Elturel城，而翡翠联盟则将龙送往守护被称为祖父树的古老树灵。队伍也可以将龙分配到特定地区。在这样一种情况下，龙在其被分配的地点周围100英里半径区域内提供保护，阻止该区域内的龙类袭击。

在峰会上，有信息透露给角色们，表明龙之邪教的一名高级成员希望脱离该组织，并且该邪教徒正在提供一副龙面具作为他请求援助的一部分。尽管这个提议可能是一个陷阱，但议会代表认为这个风险是值得的。这名叛逃者藏匿在被称为Xonthal塔的堡垒中，最近被邪教接管。因为一个小团队比大部队更有可能成功潜入塔内，冒险者们被要求进行调查。这将引导他们进入第十五章。

红法师对于邪教召唤提亚马特的计划至关重要，但与龙之教派结盟的红法师是没有任何与泰伊联系的流亡者。泰伊的红法师接近深水城议会，请求派遣一位使者前往泰伊，他们必须说服费伦最受厌恶的法师加入剑海岸的力量，为了共同的利益。这为第十六章铺平了道路。

第四次议会是派系领袖和冒险者之间的最后会议。在龙井附近发现了数百只色彩龙，现在是采取行动的时候了。在这次会议结束时，如果代表们还没有做出决定，他们将对冒险者及其事业做出最终的支持决定。

在议会会议的适当时刻，Rian Nightshade接近角色并请求私下会面。她解释了自己作为散塔林会的使者的身份，以及散塔林会对当前事务的兴趣。她对其他派系的犹豫不决表示遗憾，并声明黑网愿意立即并毫不动摇地采取行动——如果党派能帮助安排对散塔林会支持的可接受条件的话。

Rian指出，散塔林会对Xonthal之塔有着浓厚的兴趣。塔的所有权正在由议会讨论，但这个提夫林人想直接与冒险者们交易，他们通过征服权拥有对塔的主张。散塔林会愿意以50,000金币购买冒险者们对塔的利益，并且Rian可以额外提供一瓶高效治疗药水、一瓶霜巨人之力药水和一张en=Earthquake的法术卷轴来增加交易的吸引力。如果党派从其他派系那里为散塔林会的支持谈判出可接受的条件，这个价格可能会大幅提升——在你的判断下，最多可增加25,000金币。

与红袍法师的任何联盟都是一把双刃剑。包括竖琴手联盟、梅兰德拉克国王、达古尔特·尼弗伯以及塔恩·霍恩布莱德在内的更务实的派系和代表对这种安排所展示的外交手腕印象深刻，并且知道无论红袍法师的性格和以前对剑海岸的阴谋如何，他们都是一笔重要的资产。伊斯特瓦尔爵士、布朗安维尔大使和战拳会反对甚至与红袍法师开启对话的想法，他们认为泰亚人只会同意结盟，如果这有助于他们统治剑海岸和整个费伦的计划。莱拉女士和乌尔德·瑞文嘉德都认为红袍法师不可预测但必要，他们相信唯一重要的是泰亚人如何影响最终战斗的结果。

第三次议会中分配的金属龙支持的结果（如上所述）在第四次议会中得到了考虑。没有得到龙族援助的派系在邪教的袭击中遭受了巨大损失，一些代表对冒险者们因保留他们的龙族盟友的服务而感到不满。只有Isteval、Connerad和竖琴手无论龙是如何分配的，都保持对冒险者的尊重。Cormyr在很大程度上未受邪教的影响，其行动仍集中在剑海岸。竖琴手没有要塞，因此比其他派系受害较少。大使Brawnanvil欣赏龙卫的价值，但他的要塞深埋地下，邪教难以到达——而且所有的矮人都知道即使是善良的龙也觊觎矮人的宝石和黄金。`,spotlightRefs:[],presentNpcIds:["npc_severin","npc_tiamat","npc_varram","npc_neronvain","npc_maccath_the_crimson"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_tod_first_council"],tone:"exploration",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`风向的突然转变带来了一种奇怪的不安感。这种感觉类似于致命风暴来临前气压的下降，或是远处山体滑坡或地震带来的微弱震动。你不是唯一注意到的人。你周围的城市突然异常安静。没有狗吠，没有鸟叫。连街头小贩也沉默了。

"在剑海岸上感觉到的扰动是龙吼号角——一个古老的装置，其声音向费伦各地的龙发出警告，表明重大事件正在展开。虽然无法确切说出这个声音意味着什么，但龙们清楚地听到了它，并最终将响应它的召唤。"`,dmGuidance:`当角色们抵达深水城时，请阅读或转述以下内容。
如果角色们到了一个安静的地方，他们会再次注意到这种干扰，就像几乎听不见的隆隆声。
当角色们与达拉交谈时，请阅读或转述以下内容。
如果队伍参与了之前的冒险，达古尔特会解释说议会已经听取了昂塔尔、莱欧辛和其他目击者的报告，但代表们希望听取近期事件核心英雄们的陈述。
如果冒险者行为不当或滥用权力，他们的行为将被审查，授权书将被撤销。
如果队伍获得了金属龙的支持，所有的代表都会印象深刻，即使他们自己的派系被要求做出让步。
如果角色们同意为龙裔神话道歉，梅兰德拉克国王会非常愤怒。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_07d",locationId:"loc_rot_05f",name:"会议评分",activation:{condition:{type:"always"},priority:0},skeleton:["每个派系都将为对抗龙之教派的斗争捐赠部队和资源。","然而，要赢得这场战斗，需要多个派系的全面、无条件的支持。","深水城议会的结果记录在议会记分卡（附录 B）上，这决定了在龙井的最终对抗中对抗龙之教派时可用的资源。","一个派系倾向于哪一方是由冒险者在冒险过程中的行动和成就决定的。","通常，成功完成冒险的一章会赢得多个派系的支持。"],flesh:`每个派系都将为对抗龙之教派的斗争捐赠部队和资源。然而，要赢得这场战斗，需要多个派系的全面、无条件的支持。深水城议会的结果记录在议会记分卡（附录 B）上，这决定了在龙井的最终对抗中对抗龙之教派时可用的资源。

一个派系倾向于哪一方是由冒险者在冒险过程中的行动和成就决定的。通常，成功完成冒险的一章会赢得多个派系的支持。然而，每个派系都有自己的优先事项，有时一个取悦一个派系的英雄行为可能会激怒或让另一个派系失望。在某些情况下，一个派系甚至可能更希望角色们进行反英雄行为——例如，通过处决某些敌人而不是俘虏他们。如果金属龙盟友被派去保护一个派系的利益和定居点而不是另一个派系，冒险者也可能被视为偏袒某些派系。

每个派系在计分卡上都有自己的栏目。在提亚马特的崛起期间发生的重要事件会在计分卡的侧面标明，从可能在之前的冒险龙后的宝山中发生的事件开始。如果你没有玩过龙后的宝山，请假设标有星号 (*) 的事件发生了，而其他事件没有发生。

一个加号(+)表示某个特定派系对某个事件的成功结果表示认可，并且角色们因这一结果而获得尊重。每个+在最终统计中计为+1。一个负号(−)表示一个派系不赞成某个结果，并且角色们因这一结果而失去尊重。每个−在最终统计中计为-1。空白意味着该派系要么不认为该事件重要，要么派系内部没有共识。某些事件对特定派系尤其重要，被标记为双加(+/+)或双减(−/−)。它们在统计中分别计为+2或-2。

每当列表中注明的事件发生时，圈出或突出显示相应的图标。通常，您可以一次标记一行中的所有图标。被标记的图标将被计算以确定每个派系的态度，而未标记的图标则被忽略。

桌子上有三行图标不能同时标记。这些是关于哪些派系获得金属龙守卫的决定，哪些派系必须做出让步以确保金属龙的帮助，以及谁将占有Xonthal的高塔。只有受影响的派系的图标才会被标记。例如，如果Melandrach国王和乌尔德·瑞文嘉德不得不做出让步以赢得金属龙的支持，那么在那一行上只有他们的条目应该被圈出或突出显示。

一些与会者更容易被说服，承诺他们的全力支持，包括达格特·奈弗伯。其他人则更难以说服，如康纳雷德·布劳南维尔。此外，确保伊斯特瓦尔爵士或莱拉尔·银手的全力支持会为其他某些派系提供额外的尊重，因为这两位高级代表在议会中具有巨大的影响力。

计分卡涵盖了冒险过程中可能发生的事件和结果。然而，提亚马特的崛起是一个开放式的故事情节，玩家的决定可能会触发计分卡上未注明的事件。优秀的外交技巧、良好的角色扮演以及能够给某些代表留下深刻印象或激怒他们的创意处理方式，都可以根据你的判断给予额外的尊重。同样地，如果角色按照不同于此列表的顺序处理章节，只需在事件发生时标记图标，然后根据你的判断记录小计。

在每个议会结束时，将该冒险阶段的所有加号和减号加起来，并在提供的空间里写下小计。在第四次议会结束时，将小计加起来。您可以使用小计作为反馈，让玩家了解派系对他们行为的反应，以及代表们是否以尊重、轻蔑或介于两者之间的态度对待他们。

如果您不透露记分卡的具体内容，可以通过描述和角色扮演传达玩家和冒险者的目标，提供关于冒险者如何有效地赢得派系支持的良好指示。

如果一个派系的最终得分等于或超过"所需分数以获得支持"，角色们就赢得了该派系在最终战斗中的全力支持。如果得分低于所需分数，该派系只会派出最低限度的支持，这在最终对抗中不会有帮助。每个派系支持的好处在第十七章中确定。`,spotlightRefs:[],presentNpcIds:["npc_maccath_the_crimson"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"记分卡仅供DM使用，但如果与您的游戏风格相符，与玩家分享也无妨。",offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_07f",locationId:"loc_rot_05f",name:"简介",activation:{condition:{type:"always"},priority:0},skeleton:["每次龙吼号角响起时，它的超自然呼唤在剑海岸回荡。","龙能清晰地听到它，即使其他生物只有在周围安静且风吹得恰到好处时，才能听到它作为一种不清晰的呻吟。","听不到龙吼号角的生物仍然能感觉到它，就像一种微弱的振动在潜意识中感觉到，并被解释为一种恐惧感。","冒险者们在深水城议会的第一次会议上由达拉·西尔默赫尔夫引入了龙吼号角。","当他们准备好寻找有关这一古老神器的更多信息时，达拉会提供它。"],flesh:`每次龙吼号角响起时，它的超自然呼唤在剑海岸回荡。龙能清晰地听到它，即使其他生物只有在周围安静且风吹得恰到好处时，才能听到它作为一种不清晰的呻吟。听不到龙吼号角的生物仍然能感觉到它，就像一种微弱的振动在潜意识中感觉到，并被解释为一种恐惧感。

冒险者们在深水城议会的第一次会议上由达拉·西尔默赫尔夫引入了龙吼号角。当他们准备好寻找有关这一古老神器的更多信息时，达拉会提供它。

白龙阿拉乌塔托在移动冰海上如复仇之风般出没。阿拉乌塔托体现了其种族的残酷与野蛮，是龙之邪教的坚实盟友。当提亚马特从九层地狱凯旋归来时，可以指望他在龙之井现身。

Arauthator的主要巢穴位于一个被称为Lonefang Mountain的偏远山峰下，但他在移动冰海中随季节潮汐漂流的冰山中也维持着一些较小的巢穴。其中之一被当地部落称为Ice Hunters的称为Oyaviggaton（意为"永恒之岛"），因为Arauthator将许多敌人冻结在冰山内部空洞的冰壁上。

除了他的体型、狡猾和凶猛之外，Arauthator还拥有施法能力，使他成为一个特别危险的敌人。一个多世纪前，在被称为龙之怒的周期性龙族暴力事件之一期间，Arauthator与其他十几条龙一起攻击了Luskan的奥术之塔。他们的攻击摧毁了塔的西翼，Arauthator被看到捞起了许多具有巨大魔法重要性和力量的物品，包括至少三本稀有法术的书籍。恢复那些书籍的可能性是吸引绯红的麦卡丝来到移动冰海的部分原因。

Arauthator的冰山巢穴主要是作为他和他的配偶——古老的白龙Arveiaturace（"白龙"）——的会面之地。她知道邪教的活动，但一直不愿与之联手，Arauthator正在寻找方法赢得她的承诺。曾经，Arveiaturace服侍过一个名叫Meltharond的法师，他的尸体仍然绑在龙背上的马鞍上。她从未接受他的死亡，并且仍然像他活着一样与他交谈。Arauthator希望如果他能为Arveiaturace提供一个新的法师来服侍，她将从悲伤中恢复过来，并全心全意地加入他支持龙之邪教。当骄傲、有抱负的绯红的麦卡丝来到Arauthator的巢穴时，这条龙以成为Arveiaturace的主人和骑手的前景诱惑了她。

奥术兄弟会是一个位于卢斯坎城的法师联盟，位于传说中的奥术之宿。奥术之宿是费伦最杰出法师的学院。只有最有前途的法师才能被接受为奥术兄弟会的成员，而且只有该秩序的成员才能在奥术之宿学习。

绯红的麦卡丝在前往Hosttower寻求入学时，是那些最优秀和最聪明的人物之一。她对龙类传说和龙类遗迹的知识已经非常丰富，但她想更多地了解龙类的魔法。尽管她获得了接触奥术兄弟会积累的传说的机会，Maccath得出结论，有些问题只能由龙来回答——以及关于在上一次龙之愤怒期间从Hosttower被盗的魔法的问题，只能由Arauthator来回答。Maccath三年前开始了一次探险之旅去学习这些答案，从那以后再没有消息。

达拉·希尔默赫尔夫向角色们提供了所有已知的麦克卡斯的命运。

在深水城，角色们被配备了适合穿越深雪地的寒冷天气装备，包括雪鞋，并安排了一艘专为航行移动冰海水域而建造的船只向北航行。霜皮由一个名叫Lerustah Half-face的人类男性指挥。他脸部的右半边因多年前在移动冰海上遭受的严重冻伤而留下了疤痕。他大部分时间都戴着一个皮罩遮住脸，既为了保暖，也为了避免吓到孩子们。Lerustah是一位勇敢的探险家和熟练的水手。

霜皮 是一艘轻快的长船，吃水浅，由单一的帆或必要时的桨驱动。在密集的冰区中选择航线需要风和桨力的结合。尽管这艘船的长度接近六十尺，但它仍然足够轻，如果被冰围困，可以由它的四十名船员抬起。船是露天的，但船员在甲板上搭建帆布遮蔽物以抵御风和雨夹雪，并保持一些温暖。`,spotlightRefs:[],presentNpcIds:["npc_maccath_the_crimson","npc_tiamat"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`"移动冰海是龙吼号角最后的已知位置。没有人能从声音中确定它的当前位置，甚至无法确定地验证这个神器是否仍在北方海域，但搜索必须从那里开始。"
"唯一一个能告诉我们更多信息的人是一位叫做绯红的麦卡丝的提夫林术士。没有人比她更了解龙吼号角，但她也是奥术兄弟会的成员，而且已经有三年没有人见过她了。她在消失前一直在调查移动冰海。"

"Maccath通过en=Sending法术向奥术之宿报告了她的进步。她最后一份报告提到看到冰猎者划着他们的海豹皮船朝一个巨大的冰山前进，这个冰山表面平坦得像一个高原，但周围环绕着冰峰。她本打算跟随冰猎者并调查冰山。之后，再也没有报告传来。"
"使用水晶球占卜和其他魔法手段寻找麦克卡斯只找到了她的船，船只漂流且严重受损。一些船员被发现死亡，但从未找到提夫林巫师的踪迹。然而，像Arauthator这样强大的龙的巢穴无疑受到防护，防止被水晶球魔法窥探。如果麦克卡斯还活着，除了她可以分享的关于龙吼号角的知识外，奥术兄弟会将非常感激能将她带回来。"`,mapGeometry:{imageRef:"adventure/RoT/008-tod-10-02.webp"}},{id:"scn_rot_086",locationId:"loc_rot_086",name:"移动冰海",activation:{condition:{type:"always"},priority:0},skeleton:["沿着剑海岸的旅程不是这一章的重点，所以你不需要详细描述它。","在顺风的情况下，霜皮几天内就到达了移动冰海。","从那个点开始，船只必须减速并谨慎前进。","勒鲁斯塔船长对于船员是否应该在夜间把霜皮拉到浮冰上，或者在水上过夜没有强烈的意见。","浮冰更舒适，并能提供免受某些水生生物攻击的安全。"],flesh:`沿着剑海岸的旅程不是这一章的重点，所以你不需要详细描述它。在顺风的情况下，霜皮几天内就到达了移动冰海。从那个点开始，船只必须减速并谨慎前进。

勒鲁斯塔船长对于船员是否应该在夜间把霜皮拉到浮冰上，或者在水上过夜没有强烈的意见。浮冰更舒适，并能提供免受某些水生生物攻击的安全。在开阔水域，船只更安全，因为有些生物只在冰上狩猎，但在甲板上睡觉比在容易搭建的雪地掩体中要冷得多，也不舒服得多。在哪里过夜的决定取决于角色们。

冰猎者是游牧民族，在北方生活的时间比任何其他人类都要长久。他们身材矮小，黑发，宽脸，浅棕色皮肤，坚定地坚守着他们在移动冰海上捕鱼和捕鲸的文化与传统，以及在冰流中捕猎海豹、海象和北极熊。他们乘狗拉雪橇在陆地和冰上旅行，划着由海豹皮制成的船只，称为khyeks或oumyeks，在冰冷的水面上穿行。他们崇拜周围世界中的动物图腾，如聪明的乌米奥灰海豹，祖父海象，大白熊，以及驯鹿之母Pindalpau-pau。

冰猎者们在几代人前无意中来到了龙的冰山。龙希望在他长期缺席期间有仆人守卫他的巢穴，所以他杀死了足够多的部落成员，迫使剩下的人出于恐惧而服从他。利用他们无与伦比的侦察能力，他们现在作为Arauthator在移动冰海上的眼睛和耳朵。作为奴隶生活，他们毫无疑问，如果他们离开冰山，Arauthator会追捕他们并进行可怕的报复。

在移动的冰海中寻找Maccath描述的像高原一样的冰山是一个耗时的过程。每天早晨、下午和晚上各掷一次d6。如果掷出1，则发生一次遭遇。掷骰子来确定具体情况，并在白天在船上搜索时，每次之前的骰子结果都会使结果加1。夜间搜索或在霜皮在冰上时白天搜索，并不会提高找到Oyaviggaton的几率。

如果战斗变得必要，勒鲁斯塔船长作为骑士战斗，他的船员作为40名警卫战斗。如果在霜皮上战斗，角色们在使用造成火焰或力场伤害的区域法术时必须小心。一个这样的法术造成的最小伤害可以由船员在战斗结束后在海上修复。如果使用了两个这样的法术，霜皮必须被拖到浮冰上进行需要半天时间的修理。在那段时间内正常掷骰事件，但如果掷出7或更高的总数则重掷。

这个事件可以在白天或夜晚发生，但只能在水上。两只巨型章鱼同时攻击，试图将角色和船员拖入冰冷的水中。当一只章鱼被杀死时，另一只潜入水下并逃跑。

这个事件可以在白天或夜晚，在冰面或水面上发生。五个迈罗人鱼在攻击前尽可能靠近霜皮。成功意味着霜皮危险地倾斜，船上的每个生物都必须进行一个DC15的敏捷豁免检定。豁免失败者将被抛入水中。

一个生物若掉入冰冷的水中并在其中游泳，它必须在每回合开始时进行一次 DC 12 体质豁免检定。每次豁免失败，该生物将承受一级 力竭。水中的角色是水中怪物的优先目标。

这个事件可以在白天或夜晚发生，但只能在冰上。在霜皮上的一名船员发现一只白熊在浮冰上跟踪一个受伤的冰猎者。（如果角色们没有办法与他交流，霜歌者的船员中的一个可以翻译。）虽然他不是来自居住在Oyaviggaton的部落，但这个猎人知道这个冰山。对于任何关于Oyaviggaton的问题，他都会告诉角色们它距离他们当前位置的距离和方向，但警告他们要远离它。有了这些信息，角色们在接下来的两次白天事件掷骰中获得+1的奖励。

这个事件只在夜间发生，并且只在冰上发生。当霜皮停在一块浮冰上等待早晨时，三只水生巨魔，被称为斯克瑞格（游泳速度30尺，能在水下呼吸），攻击了船只。

这个事件只能在白天发生。来自Oyaviggaton的狩猎队伍（12名部落战士）被发现在一块浮冰上追逐海豹，无论霜皮是在水上还是在相邻的浮冰上。如果有人接近，这些猎人会显得脾气暴躁且不愿意交流，因为他们知道他们必须在夜幕降临前返回冰山，否则他们的亲人将受到惩罚。勒鲁斯塔船长对他们的行为感到困惑，因为他知道冰猎者人虽然害羞但从不怀有敌意。猎人们迅速划着他们的小船向东北方向离去。

这个事件只在白天发生。一群来自奥亚维加顿的渔民（12名部族武者）在他们特有的船只上被发现，无论霜皮是在水里还是在附近的浮冰上。如果有人接近，他们会表现出不友好和不交流的态度，一旦能够行动，就会立即向东北方向划去。

这个事件可以在白天或夜晚发生。这个巨大的冰山的轮廓与绯红的麦卡丝给出的描述完全匹配，这一点毫无疑问。一端是平坦的广阔区域，另一端是锯齿状的山峰，角色们的目标就在眼前。`,spotlightRefs:[],presentNpcIds:["npc_maccath_the_crimson"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们在船上，梅罗们会尝试通过进行一个DC 25的力量检定来使船倾覆，每多一个梅罗参与这次尝试，检定就会获得+2的加值。
如果角色们介入并救了这个猎人，他会非常感激，并用自己的语言与他们交谈。
如果角色和船员不打算将霜皮拖到浮冰上过夜，其中一个斯克瑞格会游到船下并拧松一块木板，造成严重漏水，需要将船拖到冰上进行修理。
如果角色们跟随猎人或使用这个方向作为他们下一段旅程的指引，他们在下一次白天事件掷骰中将获得+1的奖励。
如果角色跟随这些猎人或使用这个方向作为他们旅程下一阶段的指引，他们将在下一次白天事件检定中获得+1的加值。`},{id:"scn_rot_091",locationId:"loc_rot_086",name:"奥亚维加顿",activation:{condition:{type:"always"},priority:0},skeleton:["Arauthator的冰山巢穴从海中升起，形成了一个漂浮的岛屿。","冰山在水面以上的部分大致呈三角形，角落圆润。","冰山的高原部分高出水面一百多尺，而锯齿状的冰峰又在那个高度上增加了两百尺。","冰猎者村庄是一系列位于岛屿中心的雪地庇护所和帐篷。","由于冰山的高度，从海上看不到这个村庄，但从水面上可以清楚地看到一个大型的冰架，冰猎者们在那里拖放他们的船只。"],flesh:`Arauthator的冰山巢穴从海中升起，形成了一个漂浮的岛屿。冰山在水面以上的部分大致呈三角形，角落圆润。冰山的高原部分高出水面一百多尺，而锯齿状的冰峰又在那个高度上增加了两百尺。

冰猎者村庄是一系列位于岛屿中心的雪地庇护所和帐篷。由于冰山的高度，从海上看不到这个村庄，但从水面上可以清楚地看到一个大型的冰架，冰猎者们在那里拖放他们的船只。这个冰架大约60尺宽，高出海平面几尺，上面散布着巨大的裂缝骨头——包括比人类还高的拱形肋骨。

一个在自然技能上熟练的角色会识别出这些骨头大多来自鲸鱼和巨大的海豹（或者勒鲁斯塔船长可以提供这些信息）。任何角色如果花几分钟检查这些骨头，会发现有巨大的咬痕半径的齿痕——证据表明一个巨大的捕食者（Arauthator）至少吃了其中一些生物。检查骨头还发现了堆中的较小的人类骨头，它们都显示出相同的咬痕。

一道冰裂缝将冰架上方的悬崖一分为二，一直延伸到高原的顶部。裂缝底部宽20尺，但到顶部时收窄至5尺宽。冰上刻有阶梯，可以轻松地攀登至高原顶部。

勒鲁斯塔船长希望让他的船员留在霜皮上，而不是让他们登上高原。他对于没有尽可能多的守卫就离开他的船的想法感到非常不舒服。如果翻译者得到至少50金币的奖金，他将陪同角色们进入冰山，但一旦角色们进入冰洞，他就会返回船上。

奥亚维加顿的顶部是一个高原，但它并不平坦。地面不均匀，被狭窄的冰裂缝分割，并且由沟渠、雪堆和比人还高的冰脊划分，这些地形由海浪和风雕琢而成。这些冰脊阻挡了对村庄的视线，直到角色们距离最近的庇护所200尺以内。

当冒险者们出现在高原上时，首先映入眼帘的是一排十个尸体，被冻结在一堵冰墙中：三名卢斯卡战士，一个矮人和六名冰猎者。这些尸体在冰中保存完好，无法判断他们已经在这里多久了。这些南方人和矮人是绯红的麦卡丝的同伴之一，被Arauthator杀害。冰猎者利用这些尸体来发出这个可怕的警告，希望其他入侵者会害怕同样的命运并回头。死去的冰猎者试图从冰山逃离，但被Arauthator追捕并杀害，他迫使他们的亲人将他们添加到这个可怕展示中。

这个村庄位于冰山中心附近的一个避风处。当风吹起时——这通常是大多数时候——雪从周围的雪堆上卷起，将定居点包围在一片旋转的白色披风中。

这个村庄由二十个建筑组成，分为类似冰屋的雪块遮蔽所和由海豹皮拉伸在鲸鱼骨框架上制成的双层墙蒙古包。其中十六个建筑是小的单间家庭住宅。一个冰块遮蔽所是储藏室，用于存放部落共有的装备，包括捕鱼网和用于捕鲸的重绳。村庄中心附近的一个蒙古包比其他的稍大，是冰猎者首领Barking Seal的家。一个与其他遮蔽所分开的蒙古包是萨满Bonecarver的家，这一点可以从小屋周围的许多动物图腾和鲸鱼骨雕刻中看出。萨满的小屋有一个较少使用的通往冰洞的入口。

村庄中最大的建筑是会议厅，上面装饰着鲸鱼骨头和鱼以及哺乳动物的头骨。会议厅由一个大房间组成，有一个由从移动冰海中捕获并压碎的船只上回收的木板制成的木地板。在木板下方的后角有一个通往村庄下方冰洞的入口，这些冰洞通向Arauthator的洞穴。在那个角落附近的墙上挂着一长卷绳子，一个大铁滑轮被悬挂在上方横梁上的洞口。

没有烟雾的柱子在村庄上空升起，暴露其位置，因为流动的冰海没有木材或泥炭可供燃烧。唯一的人工热量来自燃烧鲸油的灯和微型炉子。村民们以鱼、鲸肉和海豹肉为生，生吃或在村庄周围散布的架子上的晾干。通过一个成功的 DC 10 智力（求生）检定，一个检查架子的角色会意识到，村庄生产的食物远远超过了村民们所需的数量。

一旦这些狗开始吠叫和咆哮，整个村庄就会全副武装并保持警惕——25名部族武者（男性和女性；包括首领，Barking Seal），30名平民，1名德鲁伊（Bonecarver，部落萨满，女性）和1名角斗士（Orcaheart，村庄冠军，男性）。

村长和萨满代表村民说话，村民只说他们自己的语言，乌卢克语。村长还懂得一些粗糙的伊卢斯坎方言。冰猎者有两个主要兴趣：弄清楚为什么陌生人来到奥亚维加顿，以及让他们离开。他们自由地并且善于撒谎，讲述该地区的海怪和肆虐的斯克瑞格的故事。她描述水边冰架上的鲸鱼和海豹骨头堆是那个怪物留下的全部。否则，这些骨头被描述为该地区怪物捕食者的证据。

当Barking Seal和Bonecarver与冒险者交谈时，部落的其他成员围绕在队伍周围，皱着眉头并低声抱怨，狗们也在咆哮。八名战士带着武器向冰制楼梯和下面的冰架走去，他们在那里谨慎地监视着霜皮。队伍中的法师、魔契师和战争魔契师吸引了轻蔑的目光。尽你所能传达一种紧张敌对的氛围给玩家。

任何陪伴角色们的船员都可以指出这种行为是非常不寻常的。尽管冰猎者避免与外来者接触，但他们几乎从不怀有敌意。

在此次互动中，允许角色尝试进行 DC 20 感知（察觉）检定。成功的角色会注意到几名村民一个接一个地悄悄溜走并消失在会议厅中。村民们从会议厅下到冰窟，向阿拉萨托尔的仆人们警告有陌生人到来，然后迅速返回地面。

冰洞中的遭遇假定入侵者在冰山上的存在已经被知晓。

冰猎者决心不允许陌生人进入村庄大厅，那里他们可能会发现通往冰洞的入口。他们知道让强大的冒险者穿过他们进入龙的巢穴意味着部落中每一个成年人和儿童都将遭受折磨或死亡。

当他们拖延时间时，Barking Seal、Bonecarver和Orcaheart也在评估冒险者的实力。如果冠军赢了，角色们必须交出他们的一些优质钢制武器，并立即离开，永远不再回来。他们可以在村庄过夜，之后Bonecarver将尽她所能回答他们的问题。

不允许使用魔法，但如果角色拥有无明显效果的魔法武器或魔法盔甲，村民们不太可能注意到。战斗持续到一名参赛者昏迷并濒死。（如果奥卡心的生命值降至0点，允许他进行死亡豁免。）此时，比赛结束，每位战斗者的盟友可以介入提供治疗和协助。

在战斗中，若一名战斗者从盟友处获得任何形式的协助，他将被判定为弃权。尽管如此，骨雕者（Bonecarver）仍会在战斗中尽可能地帮助虎心者（Orcaheart）。她会调整自己的位置，使得在他被击中时能够向后倒下并落在她面前。当她扶他站起来时，她会偷偷施放en=Cure Wounds法术。成功意味着骨雕者的行为被发现，尽管在被指控作弊时她会否认提供了协助。

如果奥卡哈特输了比赛，冰猎者们会履行他们的誓言。他们提议让角色们在村子的储藏小屋里过夜，那勉强算是个庇护所。骨雕师给他们端来一盘略微变质的生鱼，并（诚实地）解释说她的族人更喜欢那种过熟肉类的酸味。吃了这鱼虽不会伤害角色——但骨雕师加在鱼里的毒药会。鱼的强烈酸味完美掩盖了苦涩的毒药，因此需要通过一次成功的 DC 20 感知（察觉）检定或 DC 15 智力（调查）检定才能察觉到它。

任何食用中毒鱼类的角色必须进行一次 DC 15 体质豁免检定。如果失败，角色将受到 13 (3d8) 点毒素伤害，并陷入 昏迷 状态持续 8 小时。若检定成功，角色将受到 9 (2d8) 点毒素伤害。如果所有角色都因毒素陷入 昏迷 状态，他们将被捆绑并带到冰洞中的区域 1，在那里他们将醒来并看到 5 只 冰蟾蜍 （参见 附录D）正在检查他们的物品。

在所有的冰猎者中，Bonecarver是唯一一个角色们有可能赢得其青睐的人。她最初并不信任冒险者，并且像她的其他族人一样，渴望看到他们离开奥亚维加顿。然而，她知道冰猎者最终会在Arauthator的愤怒下灭亡，她长久以来一直梦想着图腾之灵会送来具有击败龙的力量的英雄。

通过有效的角色扮演和一个 DC 15 魅力（游说）检定，Bonecarver 将与冒险者们私下会面，并讲述她人民困境的真相。德鲁伊、游侠或其他能够真实表达对萨满以动物图腾为基础的信仰的理解的角色在检定时具有优势。Bonecarver 不愿意冒着牺牲她部落成员生命危险与龙战斗。然而，她从小屋向角色们展示了冰洞穴的入口，并解释了她所知道的关于洞穴的信息。这包括其大致布局、居住者以及"有角的女士"的存在（绯红的麦卡丝）。`,spotlightRefs:[],presentNpcIds:["npc_maccath_the_crimson"],availableInfoIds:[],encounterIds:["enc_tod_oyaviggaton_toad_inspection"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[113],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们无法与冰猎者（只说他们自己的语言，Uluik）沟通，船上的一名船员会说足够的Uluik来应付。
如果角色们通过从冰架上来的明显路径接近峡谷，他们会被村庄的12只雪橇犬（视为狼）注意到。
如果角色们询问有关Arauthator或其他龙的事情，萨满声称被称为老白死(Old White Death)的龙在一年前被霜巨人杀死。
如果队伍自从到达以来一直保持隐秘，他们就有机会在冰洞中出其不意地攻击生物。
如果角色们拒绝离开冰山，Barking Seal提议进行一场比赛：村庄的冠军对抗任何外来者中的战士。
如果冒险者赢了，他们将赢得在村民中的地位。
如果角色们同意决斗，其中一人必须与奥卡心进行一对一战斗。
如果玩家明确指出某个角色正在观察人群以寻找干扰的迹象，该角色可以尝试进行一次DC 15的感知（察觉）检定。`},{id:"scn_rot_098",locationId:"loc_rot_098",name:"冰洞",activation:{condition:{type:"always"},priority:0},skeleton:["村庄下方有一系列由Arauthator及其手下居住的冰洞。","从村庄有两个入口通向这些洞穴：一个隐藏在会议厅内，另一个在萨满的小屋里。","龙通过连接到他的巢穴房间的水下隧道进入洞穴，但这些隧道太深且隐藏得太好，冒险者无法使用。","奥亚维加顿的洞穴是在冰山的冰川深处雕刻而成，这里的每一个表面都是由冰构成的。","冰洞中的大多数通道至少有15尺宽，天花板高度为20尺，除非另有说明。"],flesh:`村庄下方有一系列由Arauthator及其手下居住的冰洞。从村庄有两个入口通向这些洞穴：一个隐藏在会议厅内，另一个在萨满的小屋里。龙通过连接到他的巢穴房间的水下隧道进入洞穴，但这些隧道太深且隐藏得太好，冒险者无法使用。

奥亚维加顿的洞穴是在冰山的冰川深处雕刻而成，这里的每一个表面都是由冰构成的。

冰洞中的大多数通道至少有15尺宽，天花板高度为20尺，除非另有说明。墙壁上雕刻着复杂的龙形图案、柱子、檐口、镂空花纹、扶壁、嘲讽的龙头和其他装饰性细节。这些工作是由Arauthator的仆从——狗头人完成的，其质量参差不齐。

冰山内部的地板因数十年的行走而磨损得如玻璃般光滑。冰龙阿拉萨托、冰巨魔和冰蟾蜍们凭借脚上的爪子和骨刺轻松地在光滑的冰面上移动，这些结构为它们提供了足够的摩擦力。冰龙的狗头人仆从们在脚上绑着用动物牙齿制成的冰爪。没有冰爪或无法在冰上行走的角色需将所有冰洞区域视为 3。成功通过 DC 10 智力检定可以让一个角色从登山装备中制作出一套冰爪，或将一对狗头人尺寸的冰爪改造以适应中型生物。雪鞋在冰山内部毫无用处。

冰山内部没有楼梯；不同海拔的区域之间通过斜坡连接。角色可以轻松地从一个层级的斜坡滑下。装备有冰爪的角色无法站立，但可以将斜坡视为 3。穿着冰爪在两个层级的斜坡上移动，还需要成功通过一个 DC 12 敏捷（特技）检定。没有冰爪的角色可以通过成功通过一个 DC 15 敏捷检定爬上一个层级的斜坡，或者通过成功通过一个 DC 20 敏捷检定爬上两个层级的斜坡。特技 对这些检定没有帮助，但使用攀爬工具可以使检定获得优势。任何在斜坡上移动失败的敏捷检定都会导致角色滑到斜坡底部并陷入 倒地 状态。

奥亚维加顿的内部由狗头人负责添油和点燃的鲸油灯提供着2。这光线是为了冰蟾蜍的增益，它们是洞穴中唯一需要光照来看见的居民。

冰洞非常寒冷，大多数洞室的温度大约在华氏20度左右。白龙、冰巨魔和冰蟾蜍不怕冷。狗头人和绯红的麦卡丝则穿上毛皮衣物，并用村民提供的鲸油燃烧的小炉子温暖他们的居住区。只要角色们穿戴适当的寒冷天气装备，他们在冰洞中就不会受到寒冷的威胁。

冰洞向海洋开放，形成蒸汽团，在奥亚维加顿的走廊和房间中不断翻滚。这种雾在洞穴的低点更为常见。在地图上标记为+10尺的区域，除非遇到随机雾团，否则能见度不受限制。在标记为0尺的区域，能见度限制在75尺内。在标记为-10尺或-20尺的区域，能见度限制在45尺内。

除了在特定区域提到的居民外，冒险者在任何走廊或空荡的房间里都可能遇到阿拉图拉特的仆从。每当角色从一个房间移动到圆形走廊，或者从走廊进入一个没有居住者房间时，掷一个d6。如果掷出1，就会发生一次遭遇。然后根据表格来确定具体情况。

空气中突然充满了滚滚蒸汽。能见度降低到5尺，持续2分钟，或者直到角色们移动90尺远离。

阿劳索多尔多年前带来了一群无知的狗头人，这些生物自此一直在严寒中为他服务。如果遇到，一队3d6 狗头人正在该区域工作或经过。为狗头人进行一次单独的感知检定，难度等级等于角色们伪装自己的最低检定结果。狗头人的感知调整值是-2，但由于他们的数量，他们在这次检定上有优势。如果检定成功（或者如果角色们没有伪装），狗头人会向入侵者发射一轮弹弓石子，然后尽可能多地向不同方向逃跑，向冰蟾或冰巨魔报告入侵。

一群1d6 冰蟾蜍（见附录D)正在这个区域工作或沿着走廊行进。伪装对冰蟾无效，它们知道在Oyaviggaton任何时候居住的生物是什么。如果它们看到任何不寻常的事物——即使是未经允许进入洞穴的Ice Hunter村民——它们会停下手头的工作，观察角色们的行为，如果可能的话会提出问题。如果受到威胁，冰蟾会逃向冰巨魔，只有在必要时才会战斗。

冰蟾蜍说它们自己的语言，以及足够的龙语和乌卢克语，以便与Arauthator、狗头人和冰猎者交流。它们为Arauthator工作，但对这条龙没有特别的忠诚。如果即将发生战斗，它们的忠诚归于它们认为会赢的一方。这意味着是龙，除非角色们以某种方式给它们留下深刻印象。

Maccath经常在冰洞中徘徊，陷入深思。遇到陌生人时，她的反应出奇地克制。有关Maccath情况的更多细节，请看区域10。

单独或成小群游荡的冰巨魔是普通的巨魔，皮肤呈蓝色，并对寒冷伤害免疫。除非有冰蟾蜍在附近干预，否则冰巨魔会将任何非狗头人、冰蟾蜍、Maccath或冰猎者的生物视为入侵者。有关为Arauthator工作的冰巨魔的更多信息，请参见区域12。`,spotlightRefs:[],presentNpcIds:["npc_maccath_the_crimson","npc_mend_nets"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[115],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`【冰蟾蜍】Arauthator已经吸引了不少冰蟾蜍来到奥亚维加顿，它们帮助维护冰山以及龙的众多财宝和战利品。得益于它们异常聪明的领导者马夫尔布，冰蟾蜍在这方面做得很好。
奥亚维加顿的冰蟾蜍以海豹、海鸟和冰猎者为它们捕获的鱼为食，它们并不会对陌生人自动产生敌意。一旦角色进入Arauthator的巢穴，他们可能会发现这些生物对他们的任务有所帮助。冰蟾蜍通常只说它们自己晦涩的语言。在奥亚维加顿的冰蟾蜍懂得一点龙语和乌卢克语（冰猎者的语言），但他们的口音很重，发音很糟糕。得益于与Arauthator长时间的交流，马夫尔布能够流利地说龙语。
当角色遇到冰蟾蜍时，它们的智能在它们行动或尝试说话之前都不会显现出来。即便如此，角色们可能也不会意识到冰蟾蜍的叫声是一种语言。冰蟾蜍用四肢行走，但它们有蹼的前脚出奇地灵巧。一些冰蟾蜍在脖子上挂着的袋子里携带工具和有用物品。
如果角色坐着，从两个层级的斜坡（例如，从区域10到区域9）滑下是自动的，但如果角色尝试站着滑下，则需要通过一个 DC 10 敏捷（特技）检定。
如果角色们装扮成冰猎者村民或穿着其他合适的伪装，狗头人会警惕地看着他们，但不会立即发出警报。`,randomTableIds:["tbl_rot_098_0"]},{id:"scn_rot_0a9",locationId:"loc_rot_098",name:"1. 从小屋的入口",activation:{condition:{type:"always"},priority:0},skeleton:["在萨满骨雕者的棚屋内，旧毛皮堆积在木杆上，横放在通往冰洞的入口处。","在滑道的墙壁上凿出了台阶，形成了陡峭而结冰的楼梯，以紧密的螺旋状下降100英尺。","由于这个入口很少使用，随着角色下降，台阶逐渐被霜冻掩盖。","失败意味着角色失去平衡，滑倒并翻滚60英尺到底部，并受到21（6d6)钝击伤害。","角色可以通过用绳子将自己绑在一起或使用攀爬工具来减轻这种危险。"],flesh:`在萨满骨雕者的棚屋内，旧毛皮堆积在木杆上，横放在通往冰洞的入口处。在滑道的墙壁上凿出了台阶，形成了陡峭而结冰的楼梯，以紧密的螺旋状下降100英尺。由于这个入口很少使用，随着角色下降，台阶逐渐被霜冻掩盖。在40英尺处，角色必须尝试一次DC 12敏捷（特技)检定，以在危险的、不平坦的脚踏处保持抓握。失败意味着角色失去平衡，滑倒并翻滚60英尺到底部，并受到21（6d6)钝击伤害。角色可以通过用绳子将自己绑在一起或使用攀爬工具来减轻这种危险。超过40英尺后，台阶再次变得完好，无需进一步的检定。

滑道及其冰楼梯在天花板处结束。然后，一把结实的梯子向下延伸至一个矩形房间的中心附近。通往走廊的出口是一个向下倾斜的15尺宽的冰通道。

这个洞室除了北角堆放着十几个由皮革条和海象肋骨编织的篮子外，空无一物。这些篮子里装着冻鱼和一些被皮肤包裹着的腐烂鲨鱼肉，冰猎者认为这是一种美味。`,spotlightRefs:[],presentNpcIds:["npc_mend_nets"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0aa",locationId:"loc_rot_098",name:"2. 从村公所的入口",activation:{condition:{type:"always"},priority:0},skeleton:["隐藏在村庄大厅后角木板下方的这个冰洞入口由一个雕刻有冰楼梯的滑道组成，以紧密螺旋形下降100尺。","这条路线经常用来将物资运送给Arauthator的手下，所以台阶清晰且易于攀爬。","物资被绑在村民的背上运下去，或者用村庄大厅里的滑轮和绳索放在篮子里降下。","这个洞室除了从上方的滑道下来的梯子附近放着三捆卷起的海豹皮外，空无一物。","此外，在房间的西南角还布置了一堆皮毛床铺，当角色们进入洞室时，可以听到响亮的咳嗽声。"],flesh:`隐藏在村庄大厅后角木板下方的这个冰洞入口由一个雕刻有冰楼梯的滑道组成，以紧密螺旋形下降100尺。这条路线经常用来将物资运送给Arauthator的手下，所以台阶清晰且易于攀爬。物资被绑在村民的背上运下去，或者用村庄大厅里的滑轮和绳索放在篮子里降下。

这个洞室除了从上方的滑道下来的梯子附近放着三捆卷起的海豹皮外，空无一物。此外，在房间的西南角还布置了一堆皮毛床铺，当角色们进入洞室时，可以听到响亮的咳嗽声。那些遭受Bonecarver有限治愈能力之外的疾病或伤害的村民会在这里的洞穴相对温暖的环境下被隔离。咳嗽的村民名叫修补网（部族武者）。

修补网天生对陌生人持怀疑态度，但如果有角色能使用en=Lesser Restoration来治愈他的疾病，他就会成为一个值得信赖的盟友。他不会做任何伤害村庄或部落的事情，但他痛恨居住在洞穴中的狗头人。冰蟾蜍同样让他感到厌恶，尽管它们也忽视他。冰巨魔让他感到恐惧，他几次醒来都发现有巨魔从通往巨魔巢穴（区域12）的隧道里贪婪地盯着他。他告诉角色们，洞穴中的生物已经被告知了他们的存在，但他除了这个区域1、3和7之外，对其他房间一无所知。`,spotlightRefs:[],presentNpcIds:["npc_mend_nets"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0ab",locationId:"loc_rot_098",name:"3. 食品储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["村民们为Arauthator及其手下提供的补给品存放在这里——主要是干燥和冷冻的鱼、鲸鱼、海豹、海象以及巨型鱿鱼，还有狗头人用来制作防护服的毛皮。","鱼的器官、贝壳、骨头、软石和其他杂物以较小的数量储存，被冰蟾蜍用来制作墨水、刷子、羊皮纸和其他工作所需的物品。","一些看似难以解释的物品被存放在其他补给品之外，包括一只钢制护手、一枚包含浮雕的银质胸针、一把决斗刀的黄铜柄，以及一个装饰性的腰带扣——这些零碎的物品是村民们从吃过在移动冰海上失踪的探险者的鲨鱼或巨型章鱼的胃中取出的。","在这个洞室中也储备了绳索、钉子和一些滑轮。","一眼就可以看出这些设备来自南方，不是冰猎者制造的。"],flesh:`村民们为Arauthator及其手下提供的补给品存放在这里——主要是干燥和冷冻的鱼、鲸鱼、海豹、海象以及巨型鱿鱼，还有狗头人用来制作防护服的毛皮。鱼的器官、贝壳、骨头、软石和其他杂物以较小的数量储存，被冰蟾蜍用来制作墨水、刷子、羊皮纸和其他工作所需的物品。一些看似难以解释的物品被存放在其他补给品之外，包括一只钢制护手、一枚包含浮雕的银质胸针、一把决斗刀的黄铜柄，以及一个装饰性的腰带扣——这些零碎的物品是村民们从吃过在移动冰海上失踪的探险者的鲨鱼或巨型章鱼的胃中取出的。

在这个洞室中也储备了绳索、钉子和一些滑轮。一眼就可以看出这些设备来自南方，不是冰猎者制造的。狗头人使用这些设备当有东西——或有人——需要通过区域6降入Arauthator的巢穴时。滑轮固定在那个洞室天花板上的铁钩上。`,spotlightRefs:[],presentNpcIds:["npc_mend_nets"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0ac",locationId:"loc_rot_098",name:"4. 狗头人巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["阿劳托尔的狗头人仆从居住在这个房间。","一打狗头人占据了这个凌乱且肮脏的洞室。","吃了一半的鱼头和啃过的海豹鳍被扔到角落里或随意散落在毛皮堆上，如果不是因为寒冷，这些毛皮堆无疑会像看起来一样难闻。","少数几个在睡觉，但大多数在玩指关节骨游戏，磨利刀片，缝制衣物，雕刻鲸鱼骨，或者互相挑衅。",'关于小矮人如何应对入侵者的指南，请参见上面的"随机遭遇"。'],flesh:`阿劳托尔的狗头人仆从居住在这个房间。

少数几个在睡觉，但大多数在玩指关节骨游戏，磨利刀片，缝制衣物，雕刻鲸鱼骨，或者互相挑衅。关于小矮人如何应对入侵者的指南，请参见上面的"随机遭遇"。

他们唯一有价值的财产是一些刻有龙形图案的海象獠牙，其中六个工艺足够精湛，可以从合适的收藏家那里卖得每个200金币。`,spotlightRefs:[],presentNpcIds:["npc_mend_nets"],availableInfoIds:[],encounterIds:["enc_rot_0ac"],treasureSlotIds:["trs_rot_0ac_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一打狗头人占据了这个凌乱且肮脏的洞室。吃了一半的鱼头和啃过的海豹鳍被扔到角落里或随意散落在毛皮堆上，如果不是因为寒冷，这些毛皮堆无疑会像看起来一样难闻。",dmGuidance:`当角色们进入时，洞室里有12个狗头人。
如果角色花几分钟时间搜索该区域，成功的 DC 12 智力（调查）检定表明大约有两打狗头人居住在这个房间。`},{id:"scn_rot_0af",locationId:"loc_rot_098",name:"5. 杂物室",activation:{condition:{type:"always"},priority:0},skeleton:["狗头人们把他们的垃圾、食物残渣、废物、穿破的靴子和其他无用的垃圾扔进这个洞穴般的洞室。",'由于在这个冰山中为Arauthator服务了几个世纪的手下们的"贡献"，这个洞室坑一样的地面上堆积了几尺深的垃圾。',"洞室的垃圾地面可以安全地穿越，但这里没有任何有价值的东西。"],flesh:'狗头人们把他们的垃圾、食物残渣、废物、穿破的靴子和其他无用的垃圾扔进这个洞穴般的洞室。由于在这个冰山中为Arauthator服务了几个世纪的手下们的"贡献"，这个洞室坑一样的地面上堆积了几尺深的垃圾。洞室的垃圾地面可以安全地穿越，但这里没有任何有价值的东西。',spotlightRefs:[],presentNpcIds:["npc_mend_nets"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0b0",locationId:"loc_rot_098",name:"6. 滑槽",activation:{condition:{type:"always"},priority:0},skeleton:["这个狭窄的洞穴是通往下方Arauthator巢穴的入口点。","这个洞室比你迄今为止探索的任何冰洞区域都要冷得多。","冷气从一个在地板上的大坑中发出，这个坑向下扭曲进入黑暗中，天花板的冰中固定着一个沉重的铁钩。","一个五尺宽的走道环绕在坑的两侧，连接着这个入口和房间另一边的出口。","墙壁上的冰被雕刻成飞翔的白龙形象。"],flesh:`这个狭窄的洞穴是通往下方Arauthator巢穴的入口点。

从任一门口进行的视觉检查显示，这条走道看起来足够安全——除了结冰、狭窄且紧邻一个看似无底的坑之外。实际上，跨越房间东侧和北侧的走道是安全的，角色可以毫不费力地行走其上。而跨越西侧和南侧墙壁的走道则较为脆弱且危险。如果掷出奇数，部分墙壁会崩塌，任何在走道上的生物都必须尝试一个 DC 17 的敏捷豁免。若豁免失败，该生物将被推下走道，坠入滑槽。

滑道下降60尺到达阿拉塔托巢穴中区域16的冰平台顶部。被推入滑道的生物与其说是坠落不如说是滑行，在撞击底部时仅受到10（3d6）钝击伤害。该生物必须随后尝试一次敏捷豁免否则会从冰平台上跌落；更多信息见区域16。故意跳入滑道的生物从下降中受到一半伤害，并在留在冰平台的豁免检定中具有优势。`,spotlightRefs:[],presentNpcIds:["npc_mend_nets"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞室比你迄今为止探索的任何冰洞区域都要冷得多。冷气从一个在地板上的大坑中发出，这个坑向下扭曲进入黑暗中，天花板的冰中固定着一个沉重的铁钩。一个五尺宽的走道环绕在坑的两侧，连接着这个入口和房间另一边的出口。墙壁上的冰被雕刻成飞翔的白龙形象。",dmGuidance:"当角色到达走道的转弯处时，让玩家掷任意骰子。"},{id:"scn_rot_0b2",locationId:"loc_rot_0b2",name:"巨人大厅",activation:{condition:{type:"always"},priority:0},skeleton:["Arauthator几个世纪以来战斗并杀死的一些霜巨人的尸体在这个洞室中被展示，冻结在晶莹剔透的冰墙中。","在这个层面上的能见度仅为45尺，所以角色们从门口看不到太多。","当他们走进洞室时，第一个霜巨人的轮廓在60尺的距离上开始模糊可见。","在45尺的距离，这个身影很容易被误认为是一动不动站立的活霜巨人。","在30尺的距离，角色们意识到这个巨人已经死亡并被冻结，看到了它撕裂的盔甲以及苍白蓝色肌肤上可怕的爪痕。"],flesh:`Arauthator几个世纪以来战斗并杀死的一些霜巨人的尸体在这个洞室中被展示，冻结在晶莹剔透的冰墙中。在这个层面上的能见度仅为45尺，所以角色们从门口看不到太多。当他们走进洞室时，第一个霜巨人的轮廓在60尺的距离上开始模糊可见。在45尺的距离，这个身影很容易被误认为是一动不动站立的活霜巨人。在30尺的距离，角色们意识到这个巨人已经死亡并被冻结，看到了它撕裂的盔甲以及苍白蓝色肌肤上可怕的爪痕。大厅展示了八具霜巨人、一具火巨人和一具云巨人的尸体。

如果他们认出角色们是入侵者，他们会尝试在雾中远离他们，然后在有机会时悄悄离开洞室。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_0b2"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"当角色们到达这个区域时，有8个狗头人正在洞室里工作，打磨并维护冰面。"},{id:"scn_rot_0b4",locationId:"loc_rot_0b2",name:"8. 战利品大厅",activation:{condition:{type:"always"},priority:0},skeleton:["Arauthator众多战斗的战利品在这个房间里展示。","能见度为45尺，所以角色们从门口看不到太多。","在这里被冻结在死亡中的生物包括两头百足魔兽、三个青足龙蛇、五只可怕雪怪，以及一只令人瞠目结舌的巨大乌贼。","这里还展示着一艘帆已升起的完整长船。","这艘船显然无法通过冰山的任何入口；"],flesh:`Arauthator众多战斗的战利品在这个房间里展示。能见度为45尺，所以角色们从门口看不到太多。在这里被冻结在死亡中的生物包括两头百足魔兽、三个青足龙蛇、五只可怕雪怪，以及一只令人瞠目结舌的巨大乌贼。这里还展示着一艘帆已升起的完整长船。这艘船显然无法通过冰山的任何入口；它在外面被精心拆解，然后由狗头人在这里重新组装。懂船的角色可以看出索具和船体板的错误，但对于展示来说，这是可以接受的好工作。

更引人注目的是船甲板上敞开的装着黄金和珠宝的箱子。箱子里有375 gp、1,480 ep和495 sp，还有价值225 gp的珠宝和珍贵物品。

如果宝箱或它包含的任何宝藏——即使是一枚硬币——被从船上移走，Arauthator会立即感知到，并派遣2个冰巨魔（见区域12）来进行调查。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_0b4"],treasureSlotIds:["trs_rot_0b4_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色在不移动箱子或其内容的情况下仔细检查，可以通过成功的DC 10智力检定估计其价值在1,000到1,500 gp之间。"},{id:"scn_rot_0b6",locationId:"loc_rot_0b2",name:"9. 未使用的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞室是空的，正等待Arauthator的战利品收藏填满7号和8号区域的那一天。"],flesh:"这个洞室是空的，正等待Arauthator的战利品收藏填满7号和8号区域的那一天。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0b7",locationId:"loc_rot_0b2",name:"10. 绯红的麦卡丝",activation:{condition:{type:"always"},priority:0},skeleton:["如果绯红的麦卡丝在奥亚维加顿的其他任何地方都没有被遇到，角色们会在这里遇见她。","在从区域9上来的坡道顶端，有1个冰冰巨魔（见区域12）守卫着这个洞穴。","它把自己安置在角落周围，所以直到入侵者到达坡道顶部时它才可见。","这个房间的空冰面上有一个非常出人意料的景象。","一个大型的遮蔽所似乎是用碎片建造的，风格与位于南方大约两千英里处的卡利姆沙漠游牧民使用的帐篷相同。"],flesh:`如果绯红的麦卡丝在奥亚维加顿的其他任何地方都没有被遇到，角色们会在这里遇见她。

在从区域9上来的坡道顶端，有1个冰冰巨魔（见区域12）守卫着这个洞穴。它把自己安置在角落周围，所以直到入侵者到达坡道顶部时它才可见。

Maccath的住所是由巨大的挂毯和地毯构成，它们悬挂在鲸鱼肋骨制成的框架上，高8尺，宽20尺，长30尺。墙壁的底部垂到地面，底下没有缝隙。这个帐篷没有明显的入口，但是角色可以通过任何两个重叠的挂毯之间滑动进入住所内部。

如果这是角色们第一次与绯红的麦卡丝会面，请添加以下描述：

当Maccath三年前到达Oyaviggaton时，Arauthator通常会毫不犹豫地杀死她。然而，她所佩戴的奥术兄弟会的胸针使Arauthator想到这个提夫林可能会解决两个问题。首先，这条龙拥有许多从奥术兄弟会那里偷来的物品，其中一些即使经过几十年的研究，他也无法理解。其次，Arauthator一直在寻求帮助他的配偶Arveiaturace克服对曾经服务的法师之死的悲痛。用奥术兄弟会的成员来替代那位法师似乎是完美的解决方案。

Maccath足够聪明，说服了龙，使他相信她接受了他的提议，期望她最终能够找到逃离冰山的方法。然而，到目前为止，她被Arauthator的强大魔法所阻挠——包括从奥术兄弟会那里偷来的法术和仪式——这些法术和仪式使她在Oyaviggaton被封印和无助，无法被占卜发现，也无法使用en=Sending来请求帮助。在Arauthator将Maccath交给Arveiaturace之前，他让这个提夫林解读了他偷来的文字，尽管由于材料固有的复杂性和危险性，这项工作进展缓慢。

狗头人被指示留在提夫林身边并听从她的命令，这主要意味着去抄写室（区域11）跑腿。她还依赖他们来做饭、打扫卫生以及其他日常杂务。一旦角色们明确表示他们是来营救麦克卡斯的，狗头人就会冲向区域12。除非被阻止，否则他们会警告冰巨魔。

尽管她是一名囚犯，麦克卡斯却沉迷于完成Arauthator的具有挑战性的魔法翻译。像奥术兄弟会的大多数成员一样，她致力于此以至于有些傲慢，她相信即使她注定要作为龙的玩物死去，她也会首先完成一些辉煌的成就。

因此，这个提夫林为她的救援提出了条件，她说她不会离开Oyaviggaton，除非尽可能多地带上奥术兄弟会的被盗物品。

Arauthator目前正在他的巢穴的区域20，靠近图书馆（区域11）下方的入口。

大部分从奥术之塔偷来的材料都在抄写室里，但有几件物品可能在Arauthator的巢穴中（见本章末尾的"阿劳托尔的宝藏"）。

Maccath知道这条龙洞穴的大致布局，但不了解具体的险恶之处。在巢穴中，Arauthator从未让她离开过他的视线。特别是，她对区域15中的石像鬼或区域18中的陷阱一无所知。

有两个入口通向Arauthator的巢穴——一个在相邻的抄写室，另一个在区域6。

Arauthator使用水下通道进出巢穴。

当麦克卡斯来到奥亚维加顿时，龙吼号角就已经在这里，但是半年前一群穿着独特长袍的人类来到了冰山。经过与Arauthator的谈判，他们带走了这个装置。（角色们根据麦克卡斯对人类的描述，认出了龙之邪教的标志。）除此之外，麦克卡斯可以告诉角色们关于龙吼号角的所有信息，就像在第十七章中描述的那样。

在Arauthator能够从空中发动攻击的时候，试图乘船逃离冰山将是自杀行为。这条龙很乐意让他的手下处理入侵者，但如果角色们逃跑，他会被惊动。

即使冒险者们没有惊动龙的任何仆人，Maccath的失踪也会在一天之内被报告。当这种情况发生时，龙会出来寻找她以及任何帮助她逃跑的人。

马卡斯知道出其不意是角色挑战龙的最佳武器，他不会为了这个单一的巢穴而冒生命危险。尽管他讨厌放弃一个拥有宝藏和战利品的家的想法，但如果被冒险者击败，阿劳托尔将逃往他的其他巢穴之一。

如果团队似乎决心要与Arauthator战斗，Maccath提供了一枚她在囚禁期间制作的抗寒戒指和两支屠龙箭。尽管这些物品和她的龙类知识给了角色们一些优势，她警告团队说Arauthator几乎吞噬了他所面对的每一个英雄。`,spotlightRefs:[],presentNpcIds:["npc_maccath_the_crimson"],availableInfoIds:[],encounterIds:["enc_rot_0b7"],treasureSlotIds:["trs_rot_0b7_0"],eventIds:["evt_tod_maccath_draakhorn"],tone:"tension",_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间的空冰面上有一个非常出人意料的景象。一个大型的遮蔽所似乎是用碎片建造的，风格与位于南方大约两千英里处的卡利姆沙漠游牧民使用的帐篷相同。

住所的内部出人意料地温暖，这要归功于一个小型炉子和燃烧芳香鲸油的简单灯具。地毯在地板上堆叠成厚厚的几层，来自费伦大陆每一个文化的挂毯悬挂在一个坚固的鲸鱼肋骨框架上。
书籍和卷轴整齐地堆放在由皮革和鲸鱼骨制成的桌子上和阅读架上。遮蔽所内唯一不是由这些天然材料制成的家具是地毯和挂毯，还有一个看起来像是从帆船上取来的便携式写字台。

坐在写字台前的是一位穿着定制皮草的女提夫林，她身上披着一件鲜红色的斗篷。斗篷用一枚银白色的大头针别住，上面刻着类似分枝树的图案——这是奥术兄弟会的象征。两个狗头人侍从站在旁边，紧张地在你们和提夫林之间张望。过了一会儿，提夫林抬起头，面无表情地淡淡问道："你们是来救我还是杀我？反正两者之间没太大区别。"`,dmGuidance:`当角色们走进去时，阅读或转述以下内容。
当角色们走进来时，Maccath正在研究其中一份被偷的卷轴。
如果角色们通过与冰巨魔战斗来宣布他们的到来，那两个狗头人会显得非常不安，尽管麦克卡斯表现得不太关心。
如果角色们同意，Maccath分享了以下信息：`,offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_0bd",locationId:"loc_rot_0b2",name:"11. 抄写室",activation:{condition:{type:"always"},priority:0},skeleton:["尽管这个房间比邻近的洞穴要深，但这里并没有雾气弥漫在空气中。","三个架子立在这个空荡荡的洞穴中，它们是用回收的木头、鲸鱼骨头、巨人的盔甲碎片，甚至是雪怪的冰冻肢体拼凑而成的。","许多卷轴、书籍、羊皮纸和折页被精心地排列在架子上，所有这些都带有魔法文字的标志。","如果马卡斯与角色们在一起，她可以指引他们找到从奥术之塔偷来的物品。","她警告角色们为了自己的安全不要阅读甚至浏览这些材料。"],flesh:`尽管这个房间比邻近的洞穴要深，但这里并没有雾气弥漫在空气中。

如果马卡斯与角色们在一起，她可以指引他们找到从奥术之塔偷来的物品。她警告角色们为了自己的安全不要阅读甚至浏览这些材料。这些文字中充满了对凡人心智有害的恶魔学识。

无法阅读魔法的角色在书籍中无法取得任何进展。能够阅读魔法的角色在检查这些文字时必须进行一次DC 15的感知豁免检定。成功意味着该角色识别出危险并停止阅读。失败意味着该角色吸收了邪恶魔法的力量并遭受精神冲击。在遭受此冲击时，该角色在攻击检定和属性检定上具有劣势，并且必须尝试进行一次DC 10的体质检定来施放法术。如果检定失败，法术无法施放，但法术位不会消耗。每当该角色完成一次长休时，可以再进行一次豁免检定来结束此效果。

奥术施法者在这个抄写室中可以发现许多有价值的东西，同样也有很多毫无价值的东西。几个世纪以来，Arauthator收集了许多被杀法师的法术书。对于队伍的直接利益来说，更重要的是，他还收集了数十卷卷轴。尽管这里许多卷轴因潮湿或年代久远而变质，但花几分钟搜索的角色可以找到十个法术卷轴：en=Gaseous Form，en=Haste，en=Protection from Energy，en=Water Breathing，en=Evard's Black Tentacles，en=Fire Shield，en=Wall of Fire，en=Hold Monster，en=Chain Lightning 和 en=Disintegrate。

在抄写室的西端附近，一个15尺宽的滑道通向Arauthator巢穴的19区。龙可以轻松地爬上爬下这个通道。熟练于运动技能的角色可以使用冰爪或其他一些设备抓住墙壁爬下滑道。其他角色只有在有绳索、岩钉和其他攀爬装备的情况下才能爬下去。滑道下降60尺到达区域19的屋顶，之后角色必须再下降15尺到达冰平台。

老白死神不想让任何人——无论是入侵者还是客人——能够轻易地离开他的巢穴。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_rot_0bd_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"三个架子立在这个空荡荡的洞穴中，它们是用回收的木头、鲸鱼骨头、巨人的盔甲碎片，甚至是雪怪的冰冻肢体拼凑而成的。许多卷轴、书籍、羊皮纸和折页被精心地排列在架子上，所有这些都带有魔法文字的标志。",dmGuidance:"在角色们下到洞穴之前，麦克卡斯告诉他们，他们没有简单的方法回到这些房间。"},{id:"scn_rot_0c1",locationId:"loc_rot_0b2",name:"12. 冰霜巨魔",activation:{condition:{type:"always"},priority:0},skeleton:["Arauthator召集来为他服务的冰巨魔将这个大厅作为他们的居住地，不允许其他生物进入这里。","一个冰巨魔拥有蓝白色的半透明皮肤，并对寒冷伤害免疫；","除此之外，它拥有普通巨魔的具体数值。","见下文），这个区域可以放置3个或更多。","这个巨大的洞室充满了漂浮的雾气，雾气笼罩着从地面到天花板的冰柱。"],flesh:`Arauthator召集来为他服务的冰巨魔将这个大厅作为他们的居住地，不允许其他生物进入这里。一个冰巨魔拥有蓝白色的半透明皮肤，并对寒冷伤害免疫；除此之外，它拥有普通巨魔的具体数值。

见下文），这个区域可以放置3个或更多。

冰柱和压力脊形成了锋利的峭壁，它们在翻腾的雾气中隐约可见。即便是在零下温度下，流水也因魔法而流动，它们在风驱动的冰雪下，通过空心的缝隙发出噼啪声。

从入口处只能看到旋转的迷雾，只能听到风声。如果玛卡丝或任何冰蟾蜍与队伍同行，他们会以最强烈的措辞劝告角色不要进入这个房间。那些冒险进入此处的人会被冰霜巨魔无声地包围并伏击。

这些巨魔会说巨人语，并且懂得一点龙语。他们愿意与证明难以杀死的角色进行交易或讨价还价。只有可验证的食物和财宝的提供才能说服巨魔背叛Arauthator。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_0c1"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个巨大的洞室充满了漂浮的雾气，雾气笼罩着从地面到天花板的冰柱。远处的沉闷寂静只被流水声打破。",dmGuidance:`当角色们首次进入时，这里至少有2个冰巨魔，但根据你（指DM）的判断（以及取决于冒险者是否满足可能导致战斗的条件；
如果冒险者们逃跑，巨魔会饥渴地追赶，但当冰蟾蜍发出命令时，它们会听从并不再攻击。`},{id:"scn_rot_0c3",locationId:"loc_rot_0c3",name:"冰蟾工作区",activation:{condition:{type:"always"},priority:0},skeleton:["巨大的冰蟾蜍在奥亚维加顿为阿劳托尔服务，担任监工。","它们管理狗头人的劳动，指导冰猎者村民为巢穴提供食物和其他物资，并具有处理顽固冰巨魔所需的耐心。","在这个粗糙墙壁的房间里，一个奇异的景象迎接着你。","大约有十几个巨大的蟾蜍，它们有着厚实的、斑驳的白色皮肤，正在这里忙碌，将奇怪的文字刻在墙壁的冰上，或者刻在风化的羊皮纸和石板上。","一些蟾蜍将羊皮纸和石板搬进搬出，这些存放在沿着整个南墙切割的从地板到天花板的格子里。"],flesh:`巨大的冰蟾蜍在奥亚维加顿为阿劳托尔服务，担任监工。它们管理狗头人的劳动，指导冰猎者村民为巢穴提供食物和其他物资，并具有处理顽固冰巨魔所需的耐心。

总共有11只冰蟾蜍（见附录D以获取具体数值）在这个房间工作，使用磨尖的鹿角或它们自己的爪子在冰上刻写记录和计数。它们还根据冰猎者村民的报告，维护着移动冰海的粗略地图。在固定的时间间隔，它们的临时记录被转移到更永久的形式。

请参见"随机遭遇"（上文）了解巨型冰蟾如何对入侵者做出反应的指南。角色避免在该区域发生战斗——以及防止冰蟾通知冰巨魔——的最佳机会是通过与他们的领袖马夫尔布进行谈判，赢得冰蟾的支持。

普通的冰蟾蜍很聪明，但它们的领袖马夫尔布是杰出的（智力13）。她对组织和管理的天赋在遇到阿劳托尔之前在移动冰海上没有得到发挥，自那以后，她已经作为奥亚维加顿的管家服务了四十年。甚至阿劳托尔也不如马夫尔布那样了解奥亚维加顿的运作，她知道冰山中每一个包裹、箱子和硬币堆的内容和价值，直到最后一枚铜币。

除了关于Arauthator的数据——他的宝藏、交配习性，以及与霜巨人和其他怪物的史诗级战斗——冰蟾蜍们积累的信息还包括关于不断变化的移动冰海、世界脊北面的天气，以及难以捉摸的冰猎者文化的详尽细节。马夫尔布对她一生的工作感到极大的满足，但她对世界脊南部的社会了解太少，以至于无法感知其全部重要性。

奥术兄弟会将认为这些知识是现存最惊人的自然哲学作品之一（一旦它们从冰蟾蜍的独特语言中艰难地翻译过来），他们会争相见面并赞扬马夫尔布。如果没有次元袋（容量袋），这些收藏品太大而无法移动。`,spotlightRefs:[],presentNpcIds:["npc_marfulb"],availableInfoIds:[],encounterIds:["enc_rot_0c3"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"在这个粗糙墙壁的房间里，一个奇异的景象迎接着你。大约有十几个巨大的蟾蜍，它们有着厚实的、斑驳的白色皮肤，正在这里忙碌，将奇怪的文字刻在墙壁的冰上，或者刻在风化的羊皮纸和石板上。一些蟾蜍将羊皮纸和石板搬进搬出，这些存放在沿着整个南墙切割的从地板到天花板的格子里。",dmGuidance:"如果角色们配备了一个次元袋（容量袋），他们可以在离开奥亚维加顿时带走所有的羊皮纸和石板。"},{id:"scn_rot_0c6",locationId:"loc_rot_0c3",name:"14. 冰蟾蜍巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个冰冷、悲惨的房间是冰蟾蜍的完美家园，但目前是空的。","蟾蜍们在这里的任何物品都没有战利品价值，但它们构成了一个奇怪而有趣的收藏。","这些物品包括用海象牙制成的疣刮刀、用独角鲸角制成的长矛、雕刻在冰地面上的奇形怪状的家具而不是立在地面之上、用鲸须雕刻并为带蹼的手塑形的书写工具，以及结合了雕刻鲸骨、漂流木和从船难中回收的普通物品如银器和玻璃塞等艺术物品。"],flesh:"这个冰冷、悲惨的房间是冰蟾蜍的完美家园，但目前是空的。蟾蜍们在这里的任何物品都没有战利品价值，但它们构成了一个奇怪而有趣的收藏。这些物品包括用海象牙制成的疣刮刀、用独角鲸角制成的长矛、雕刻在冰地面上的奇形怪状的家具而不是立在地面之上、用鲸须雕刻并为带蹼的手塑形的书写工具，以及结合了雕刻鲸骨、漂流木和从船难中回收的普通物品如银器和玻璃塞等艺术物品。",spotlightRefs:[],presentNpcIds:["npc_marfulb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0c7",locationId:"loc_rot_0c7",name:"阿拉瑟托的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["龙的巢穴是一个单独的、洞穴般的房间，有许多小洞、裂缝和冰覆盖的突出部分。","像它上面的洞穴一样，Arauthator的巢穴完全由冰构成。","开放洞穴的粗糙天花板在不平坦地面的不同高度上方上升40尺。","洞穴的地面被磨得非常光滑，且非常滑。","Arauthator和冰崖怪得益于它们的爪子，可以轻松地在光滑的冰面上移动，但是没有冰爪或在冰上行走能力的角色应将巢穴洞穴的所有区域视为3。"],flesh:`龙的巢穴是一个单独的、洞穴般的房间，有许多小洞、裂缝和冰覆盖的突出部分。

像它上面的洞穴一样，Arauthator的巢穴完全由冰构成。

开放洞穴的粗糙天花板在不平坦地面的不同高度上方上升40尺。

洞穴的地面被磨得非常光滑，且非常滑。Arauthator和冰崖怪得益于它们的爪子，可以轻松地在光滑的冰面上移动，但是没有冰爪或在冰上行走能力的角色应将巢穴洞穴的所有区域视为3。有关冰爪的详细信息，请参见冰洞的"一般特征"。在巢穴中，雪鞋没有帮助。

洞穴地图上显示的地形高度以8英尺为增量。地面的高度是由于冰层分裂和碎裂形成的，因此岩壁陡峭，呈现出明显的阶梯状外观。角色可以轻松地跳下一个层级。攀爬上一个层级需要成功通过一次DC 15力量（运动）检定；如果装备了冰爪或攀爬装备，攀爬者在检定中具有优势。

这个巢穴洞穴通常很暗。所有的描述都假定角色们有光源或者具有黑暗视觉。

巢穴洞穴比上面的隧道和房间更冷。洞穴的温度是刺骨的0华氏度。区域20甚至更冷。

蒸汽团在洞穴中滚动，限制了有光源角色的视线至60尺。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_rot_0cf",locationId:"loc_rot_0c7",name:"15. 斯克瑞格的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴的角落是2个斯克瑞格的家，Arauthator允许它们在他的巢穴中生活，条件是它们在他不在时要守卫这里。","这些水生巨魔可以水下呼吸，并且游泳速度为30尺。"],flesh:"这个洞穴的角落是2个斯克瑞格的家，Arauthator允许它们在他的巢穴中生活，条件是它们在他不在时要守卫这里。这些水生巨魔可以水下呼吸，并且游泳速度为30尺。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_0cf"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色靠近，这些怪物会躲进藏身之处，然后试图从伏击中攻击并捕获一个意外的猎物。"},{id:"scn_rot_0d0",locationId:"loc_rot_0c7",name:"16. 冰柱",activation:{condition:{type:"always"},priority:0},skeleton:["在这个区域内，冰柱从地面突起。","一个生物从区域6的滑道掉下，会落在洞穴东南部大型冰平台的最上层，位于洞穴地面16英尺高处。","）如果豁免失败，该生物会从冰平台的最上层滑落并撞上第二层，受到3（1d6）点钝击伤害并处于倒地状态。","任何落到洞穴地面的生物都会吸引15区水鬼的注意。"],flesh:`在这个区域内，冰柱从地面突起。攀爬超过8英尺高的冰柱需要攀爬工具和一次成功的DC 15力量（运动）检定。

一个生物从区域6的滑道掉下，会落在洞穴东南部大型冰平台的最上层，位于洞穴地面16英尺高处。该生物随后必须成功通过一次DC 15敏捷豁免以保持在平台上。（故意跳下滑道的生物会从下降中受到一半伤害，并在这次豁免检定上获得优势。）如果豁免失败，该生物会从冰平台的最上层滑落并撞上第二层，受到3（1d6）点钝击伤害并处于倒地状态。

任何落到洞穴地面的生物都会吸引15区水鬼的注意。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0d1",locationId:"loc_rot_0c7",name:"17. 冰狼之脊",activation:{condition:{type:"always"},priority:0},skeleton:["这个参差不齐的冰脊将洞穴分成了几个部分。","至少爬升到8尺的高度，并沿着冰脊移动，是从15区或16区安全进入19或20的唯一方法，而不会触发18a和18b区的陷阱。","与洞穴中的其他岩架不同，冰狼之脊的水平面并不平坦。","失败意味着该生物失去平衡并摔到下一层，受到3（1d6）点钝击伤害并处于倒地状态。","穿着冰爪在此检定中获得优势。"],flesh:`这个参差不齐的冰脊将洞穴分成了几个部分。至少爬升到8尺的高度，并沿着冰脊移动，是从15区或16区安全进入19或20的唯一方法，而不会触发18a和18b区的陷阱。

与洞穴中的其他岩架不同，冰狼之脊的水平面并不平坦。巢穴中的居民可以毫无困难地穿越这些岩架，但任何其他生物在一轮内移动超过15英尺时，必须进行一次DC 12敏捷（特技）检定。失败意味着该生物失去平衡并摔到下一层，受到3（1d6）点钝击伤害并处于倒地状态。穿着冰爪在此检定中获得优势。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0d2",locationId:"loc_rot_0c7",name:"18a. 咽喉",activation:{condition:{type:"always"},priority:0},skeleton:["这条狭窄的通道被设置了一个魔法陷阱。","当第一个角色通过通道最狭窄的地方时，整个通道区域将被en=Stinking Cloud法术充满，持续1分钟。","如果触发了en=Stinking Cloud，Arauthator会立即察觉到入侵者。","龙在穿过该区域时不会触发陷阱。"],flesh:`这条狭窄的通道被设置了一个魔法陷阱。当第一个角色通过通道最狭窄的地方时，整个通道区域将被en=Stinking Cloud法术充满，持续1分钟。

如果触发了en=Stinking Cloud，Arauthator会立即察觉到入侵者。龙在穿过该区域时不会触发陷阱。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0d3",locationId:"loc_rot_0d3",name:"喉咙",activation:{condition:{type:"always"},priority:0},skeleton:["这条狭窄的通道设置了一个魔法陷阱。","当第一个角色通过通道最窄处时，会触发一个en=Slow法术，针对该区域内的所有生物。","受到法术影响的生物将在1分钟内承受其效果。","如果触发了en=Slow，Arauthator会立即察觉到入侵者。","龙在穿过该区域时不会触发陷阱。"],flesh:`这条狭窄的通道设置了一个魔法陷阱。当第一个角色通过通道最窄处时，会触发一个en=Slow法术，针对该区域内的所有生物。受到法术影响的生物将在1分钟内承受其效果。

如果触发了en=Slow，Arauthator会立即察觉到入侵者。龙在穿过该区域时不会触发陷阱。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_rot_0d4",locationId:"loc_rot_0d3",name:"19. 栖息地",activation:{condition:{type:"always"},priority:0},skeleton:["阿劳托尔有时会在这个广阔的冰架上睡觉，但更多时候他会在20号区域闲逛。","巨龙在奥亚维加顿存放的大部分宝藏都藏在这里以及上面的岩架上。",'见下方的"阿劳托尔的宝藏"。'],flesh:'阿劳托尔有时会在这个广阔的冰架上睡觉，但更多时候他会在20号区域闲逛。巨龙在奥亚维加顿存放的大部分宝藏都藏在这里以及上面的岩架上。见下方的"阿劳托尔的宝藏"。',spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0d5",locationId:"loc_rot_0d3",name:"20. 阿拉瑟托的深渊",activation:{condition:{type:"always"},priority:0},skeleton:["巢穴洞穴的西端是阿拉萨托（一位成年白龙）在欧亚维加顿度过大部分时间的地方。","黄金、宝石和其他财宝散落在地板上，冻结在这个广阔房间的墙壁中。","这里的温度明显比冰山其他任何地方都要低，达到了华氏零下0度。","没有寒冷天气装备的角色自动豁免失败。","豁免失败时，角色将承受一级力竭。"],flesh:`巢穴洞穴的西端是阿拉萨托（一位成年白龙）在欧亚维加顿度过大部分时间的地方。黄金、宝石和其他财宝散落在地板上，冻结在这个广阔房间的墙壁中。

这里的温度明显比冰山其他任何地方都要低，达到了华氏零下0度。任何处于气温低于华氏0度区域的角色，必须在每小时结束时进行一次DC 10的体质豁免检定。没有寒冷天气装备的角色自动豁免失败。豁免失败时，角色将承受一级力竭。

这会吸引来自区域12的冰巨魔，它们将在5轮后到达。

洞穴地面上分布着泥浆池，由于海水的高盐分含量，它们无法冻结。其中一个泥浆池位于洞穴的最西角，隐藏着一条通往移动冰海的淹没通道。这是Arauthator通常的出入口。当龙的血量降至100点或更少，并且面对三个或更多的敌人时，它会潜入这个出口，逃入冰冻的海洋。如果龙逃跑，冰巨魔也会撤退。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_0d5"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色们面对阿拉索托时，这只龙的咆哮声如此之大，以至于整个冰山都随着他的愤怒而回响。"},{id:"scn_rot_16c",locationId:"loc_rot_0d3",name:"发展",activation:{condition:{type:"always"},priority:0},skeleton:["这场战斗可能会是一个挑战来运行。","它旨在创造冒险中的情感低谷，在这个低谷中，善良势力的全面失败看起来是一个真正的可能性。","角色死亡——即使是暂时的——可能会打击一些玩家的士气。","对于玩家们来说，不要使这场战斗只是一场无情的走向死亡的苦战。","给冒险者们机会去拯救无辜的镇民免遭屠杀，让龙远离逃散的人群。"],flesh:`这场战斗可能会是一个挑战来运行。它旨在创造冒险中的情感低谷，在这个低谷中，善良势力的全面失败看起来是一个真正的可能性。角色死亡——即使是暂时的——可能会打击一些玩家的士气。

对于玩家们来说，不要使这场战斗只是一场无情的走向死亡的苦战。给冒险者们机会去拯救无辜的镇民免遭屠杀，让龙远离逃散的人群。角色们可以清除燃烧的建筑，使用魔法扑灭火焰或拯救濒死之人，并为那些无法自卫的人站出来。让他们在这场战斗中的牺牲具有意义。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},contentRole:"reference"},{id:"scn_rot_0d7",locationId:"loc_rot_0d3",name:"离开奥亚维加顿",activation:{condition:{type:"always"},priority:0},skeleton:["当阿劳托尔自由攻击时，角色们没有机会乘坐霜皮逃离冰山。","龙可以轻易地从空中或水下发起攻击，冻结或翻覆船只，然后随意地攻击船员。","如果Arauthator在战斗中被击败并被迫撤退，他不会追击霜皮当角色们驶离。","冒险者和船员可能会看到龙在远处的影子，但Arauthator太骄傲和害怕，不愿再次面对队伍。"],flesh:`当阿劳托尔自由攻击时，角色们没有机会乘坐霜皮逃离冰山。龙可以轻易地从空中或水下发起攻击，冻结或翻覆船只，然后随意地攻击船员。

如果Arauthator在战斗中被击败并被迫撤退，他不会追击霜皮当角色们驶离。冒险者和船员可能会看到龙在远处的影子，但Arauthator太骄傲和害怕，不愿再次面对队伍。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"如果冒险者试图悄悄带走麦克卡斯，狗头人和冰蟾在一天之内就会注意到巫师的缺席。",offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_0d8",locationId:"loc_rot_0d3",name:"阿劳托尔的宝藏",activation:{condition:{type:"always"},priority:0},skeleton:["如果老白死神被杀死或赶走，他将留下他的冰山巢穴的宝藏。","（因为Oyaviggaton只是龙维持的众多次要巢穴之一，这里的宝藏只代表他总财富的一小部分。","区域19和20共有700金币、1000银币和20颗宝石（五颗分别价值200金币、400金币、600金币和800金币）。","此外，你可以自行添加药水、卷轴和魔法物品。","或者，使用宝藏表生成一个与你的战役价值相符的宝藏。"],flesh:`如果老白死神被杀死或赶走，他将留下他的冰山巢穴的宝藏。（因为Oyaviggaton只是龙维持的众多次要巢穴之一，这里的宝藏只代表他总财富的一小部分。）

区域19和20共有700金币、1000银币和20颗宝石（五颗分别价值200金币、400金币、600金币和800金币）。此外，你可以自行添加药水、卷轴和魔法物品。或者，使用宝藏表生成一个与你的战役价值相符的宝藏。

要索取这些宝藏，必须在巢穴洞穴中从冰中砍出来。这样做需要半天时间（因此如果Arauthator仍在巢穴中，则不可能完成）。

马夫尔布对阿劳托尔四十年的数据对奥术兄弟会来说是无价的（如果角色们不知道，麦克卡斯会认识到这一点）或其他收集龙类传说的人。如果龙已经死了，可以通过说服让马夫尔布同意将这些资料运往南方，前提是她可以一同前往。如果阿劳托尔还活着，冰蟾宁愿留下来继续她的工作，保持她的记录完整。`,spotlightRefs:[],presentNpcIds:["npc_marfulb"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_rot_0d8_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_rot_0da",locationId:"loc_rot_0da",name:"第11章和第12章：龙语者之死",activation:{condition:{type:"always"},priority:0},skeleton:["从他们在龙后的宝山中首次发现龙面具开始，角色们就已经意识到了这些面具对龙之教派的重要性。","在这次冒险过程中，英雄们有两次机会与赛维林内圈的龙语者正面交锋，或许可以夺取他们的龙面具，阻碍赛维林的计划。","这一部分包含两个不同的章节。","在第一章节中，角色们追踪瓦拉姆，即白龙面具的守护者，来到位于蛇丘的被元提人占据的古老墓穴。","在第二章节中，冒险者们在迷雾森林中一个隐藏的要塞和龙巢中对抗内洛维，即绿龙面具的龙语者。"],flesh:`从他们在龙后的宝山中首次发现龙面具开始，角色们就已经意识到了这些面具对龙之教派的重要性。

在这次冒险过程中，英雄们有两次机会与赛维林内圈的龙语者正面交锋，或许可以夺取他们的龙面具，阻碍赛维林的计划。

这一部分包含两个不同的章节。在第一章节中，角色们追踪瓦拉姆，即白龙面具的守护者，来到位于蛇丘的被元提人占据的古老墓穴。在第二章节中，冒险者们在迷雾森林中一个隐藏的要塞和龙巢中对抗内洛维，即绿龙面具的龙语者。这些章节在深水城议会的第一和第二次会议期间的不同时间点展开，但它们被放在一起展示，因为它们构成了单一任务的两个部分——将战斗带到龙语者那里，作为挫败赛维林阴谋的手段。

邪教五位龙语者中的三位——蓝龙加尔文、黑龙雷兹米尔，以及佩戴着红龙面具的赛维林本人——已经抵达龙井并超出了冒险者的接触范围。然而，白龙语者瓦拉姆在失去了白龙面具后被迫离开了他堡垒的安全区，而绿龙语者内洛维则和他的龙族盟友丘斯对迷雾森林的精灵发动了袭击。当深水城议会得知五位龙语者中有两位可能仍在活动时，冒险者们抓住了这次打击他们的机会。

一旦他的健康恢复，这位堕落的龙语者很快就接受了自己作为队伍囚犯的身份——这仅仅是因为他知道如果试图返回邪教，赛维林会杀了他。瓦拉姆可以提供关于邪教层级和计划的详细见解，并且可以揭露在深水城理事会派系中的秘密支持者和叛徒，这取决于你的决定。活着带回矮人会让队伍在派系中获得极大的尊重，尽管带回他死亡的消息也几乎同样令人印象深刻。

如果被问及白龙面具，瓦拉姆不情愿地承认他在池中看到了它——并且它已经被邪教找到并回收，目前位于龙井。

角色们在这一章节结束时获得一个等级。

这一章节可以以Chuth和内洛维中的一个或两个死亡或从要塞逃脱而结束。如果任何一个幸存，他们会撤退到龙井，并向赛维林报告冒险者的行动。（如果合适，您可能允许Chuth或内洛维寻求报复，作为在第十三章攻击冒险者的力量的一部分。）

无论如何，针对迷雾森林的威胁已经结束了。Melandrach国王听说了派对的行为，并对英雄们的勇敢表示感激。然而，发现他失踪的儿子内洛维是一个龙语者，这让他充满了羞耻和愤怒。

角色们在这一章节结束时获得一个等级。`,spotlightRefs:[],presentNpcIds:["npc_severin","npc_varram","npc_neronvain","npc_galvan"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"如果角色们救了他，瓦拉姆在没有接受治疗魔法或完成长休之前仍然会语无伦次。",mapGeometry:{imageRef:"adventure/RoT/011-tod-11-01.webp"}},{id:"scn_rot_0db",locationId:"loc_rot_0da",name:"瓦拉姆·怀特",activation:{condition:{type:"always"},priority:0},skeleton:["瓦拉姆 the White 是 赛维林 的亲密盟友和心腹，但龙之教团的领袖并不知道他的这位老朋友的行为已经威胁到了教团的计划。","瓦拉姆 的 白龙面具 已经丢失，被一个与 散塔林会 有联盟的盗贼偷走，并且现在对常规的占卜魔法隐藏了起来。","瓦拉姆 迫切想要在 赛维林 发现面具丢失之前取回它，所以他制造了一个借口，带着一群值得信赖的追随者去寻找位于蛇丘的古代魔法遗址，他声称这将帮助教团在召唤 提亚马特 的计划中。","实际上，瓦拉姆 正在寻找 迪德里乌斯 的墓穴——一个古老的占卜池所在地，他希望这能显示他丢失面具的位置。","竖琴手的特工们听到了关于白龙面具被盗的传言，而利奥斯因·埃兰萨尔最近得知矮人瓦拉姆出现在贸易定居点博尔斯凯尔桥，靠近蛇丘。"],flesh:`瓦拉姆 the White 是 赛维林 的亲密盟友和心腹，但龙之教团的领袖并不知道他的这位老朋友的行为已经威胁到了教团的计划。瓦拉姆 的 白龙面具 已经丢失，被一个与 散塔林会 有联盟的盗贼偷走，并且现在对常规的占卜魔法隐藏了起来。瓦拉姆 迫切想要在 赛维林 发现面具丢失之前取回它，所以他制造了一个借口，带着一群值得信赖的追随者去寻找位于蛇丘的古代魔法遗址，他声称这将帮助教团在召唤 提亚马特 的计划中。实际上，瓦拉姆 正在寻找 迪德里乌斯 的墓穴——一个古老的占卜池所在地，他希望这能显示他丢失面具的位置。

竖琴手的特工们听到了关于白龙面具被盗的传言，而利奥斯因·埃兰萨尔最近得知矮人瓦拉姆出现在贸易定居点博尔斯凯尔桥，靠近蛇丘。由于竖琴手们已经在他们的情报收集任务上分散得很远，冒险者们是追踪龙语者的最佳选择。

Leosin Erlanthar 在深水城的一次议会会议期间联系了队伍。在向他们介绍了有关 瓦拉姆 丢失了 白龙面具 并出国寻找它的谣言后，他派角色们前往 Boareskyr 桥，指示他们寻找有关 瓦拉姆 最近行动和可能目的地的信息。

这一章节描述了角色们从博尔斯凯尔桥到蛇丘中一个被遗忘的阿纳乌瑞安遗迹的旅程。瓦拉姆所寻找的占卜池就在那里——但同样在那里的还有一群元提，他们对龙语者和冒险者都构成了威胁。

博尔斯凯尔桥以一个现在已经消失的王国的名字命名，位于贸易之路的北部和东部。这座桥横跨蜿蜒之水，是一个重要的地标。它由黑色花岗岩建造，上面雕刻着神祇塞里克和巴尔的形象，纪念他们在动荡时代在桥上进行的传说中的战斗。

这个驿站定居点不过是一些提供食物、新鲜坐骑和其他服务给旅行者的帐篷、马车和商队的集合。来自 Elturgard 神权国家的一群圣武士在新建的要塞中守护着这座桥。

博洛的帐篷边旅馆是一家位于博尔斯凯尔帐篷城中心附近的大型帐篷内的简陋而杂乱的场所。

瓦拉姆杀死元提间谍的唯一目标是阻止关于他行动的消息在他到达之前传到蛇丘，但这使他成为了当地的英雄。只要角色们不透露他们打算伤害矮人，博洛就乐意分享她所知道的。

瓦拉姆 与十几个其他同伴一起旅行，包括几个披着斗篷和戴着兜帽的战士。她以为他们是野蛮人雇佣兵，但实际上瓦拉姆是在一群须魔的保护下旅行。矮人在杀死元提人后进入了蛇丘。

好天气以及瓦拉姆和他的大队伍急于行进的事实使得他们的踪迹进入山区容易追踪。从博尔斯凯尔桥出发，冒险者们追踪矮人进入蛇丘——这是一片布满树木和高草的荒地、平顶山和岩石高原。瓦拉姆的踪迹向北东北延伸大约六十五英里。

蜥蜴人和纳迦，巨魔和巨人，以及阴险的元提都潜伏在蛇形山脉中，隐藏在不止一个衰落文明的坟墓和废墟中。如果掷出17到20，则发生一次遭遇。根据下面的表格来决定遭遇。

进入蛇丘的类人生物可能是宝藏猎人、从怪物之地纳迦拉逃出的奴隶，或是来自埃尔图迦德监视蛇人活动的斥候。

成群的山羊、羚羊以及其他牧群哺乳动物在蛇丘范围内活动。它们会避开其他生物，但如果受到威胁或被逼入绝境，会变得凶猛。

队伍遇到了一两个正在享用倒下的兽群动物的山丘巨人。当这些巨人注意到冒险者时，他们看到了另一个食物的机会。山地巨人在生命值减少到一半或更少时会撤退，更喜欢不反抗的猎物。

一个低矮的土丘，上面散乱地堆满了匆忙收集的石头，标志着许多在蛇丘倒下的探险者之一的安息之地。根据你的判断，夜间一个无标记的坟墓可能会变成与一个幽魂或其他不安的不死生物的遭遇。

一个供奉尼瑟尔或阿纳乌瑞安众多失落神祇的孤立神祠从沙漠中升起。许多这样的遗址显示出曾被山区旅行者用作营地的迹象。

成群的秃鹫可能在远处盘旋，或者如果它们将角色误认为是濒死的迷失旅者，可能会骚扰他们。

蛇丘中许多失落的定居点只剩下破碎的石头和干涸的井。

蜥蜴人定期为他们元提主人狩猎和收集食物，当有机会时，还会在山丘边缘捕获人形定居者。`,spotlightRefs:[],presentNpcIds:["npc_varram","npc_severin","npc_tiamat","npc_diderius"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:'"一个穿着紫色长袍的矮人？哦，我见过他。他在询问进山的护送，这时一个戴兜帽的人开始问他的来意。矮人直视着他的眼睛，然后拔出匕首，刺死了那个高个儿！他是来自蛇丘的鳞片族，下来监视我们的！那个矮人是个英雄，毫无疑问。但他和他的随行人员立刻就往山里去了，像猫一样快！"',dmGuidance:`当角色们询问关于瓦拉姆的信息时，他们被指引到博洛的旅馆及其女性半精灵店主那里。
当角色们追踪瓦拉姆时，每旅行6小时，掷一次d20；`,randomTableIds:["tbl_rot_0db_0"],offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_0ea",locationId:"loc_rot_0ea",name:"迪德里乌斯的墓穴",activation:{condition:{type:"always"},priority:0},skeleton:["迪德里乌斯 的墓穴及其魔法池隐藏在一个雕刻在高耸悬崖中的复杂密室中。","最初是作为法师 迪德里乌斯 围绕神秘占卜池建造的庄园的一部分，这个复合体在他去世后才被改造成墓穴。","墓穴俯瞰着围绕魔法池发展起来的城镇废墟，这个城镇是为了迎合那些寻求 迪德里乌斯 感知的人而建立的。","这个城镇曾经坐落在两个峭壁之间的峡谷中，但现在只剩下一些破败的石结构和行政及神殿建筑的石板基础。","峭壁上散布着洞穴入口，标志着以前的住所和简单的坟墓。"],flesh:`迪德里乌斯 的墓穴及其魔法池隐藏在一个雕刻在高耸悬崖中的复杂密室中。最初是作为法师 迪德里乌斯 围绕神秘占卜池建造的庄园的一部分，这个复合体在他去世后才被改造成墓穴。墓穴俯瞰着围绕魔法池发展起来的城镇废墟，这个城镇是为了迎合那些寻求 迪德里乌斯 感知的人而建立的。

这个城镇曾经坐落在两个峭壁之间的峡谷中，但现在只剩下一些破败的石结构和行政及神殿建筑的石板基础。峭壁上散布着洞穴入口，标志着以前的住所和简单的坟墓。这些废墟没有任何价值或兴趣的东西，但洞穴为队伍提供了安全的休息场所。

关于曾经屹立在这里的定居点的知识已经遗失，除了伊尔达，一位在墓穴区域9中的幽灵图书管理员，她能回答许多被遗忘的问题。此外，尽管现在很少有人寻找这个水池，但在墓穴后面出现了一个名为Ss'tck'al的小元提殖民地。元提使用人形牺牲来为占卜池的魔法提供能量，学习黑暗的秘密，这些秘密推动了他们阴险的计划。

除非另有说明，地牢的地板和墙壁由砂岩块和石板构成。墙壁触感凉爽，空气寒冷。

除非另有说明，墓穴的天花板高度为10尺。

除非另有说明，否则墓穴内没有光亮。

当迪德里乌斯去世时，那些生前尊敬他的人将他转变成了一个特殊的木乃伊领主，他的魔法弥漫在他的墓穴中。由于迪德里乌斯是中立而非邪恶的，这个区域缺少其他木乃伊领主墓穴中常见的黑暗魔法。墓穴的一些房间看起来像是适合高贵大法师的豪华且维护良好的房间。然而，这是一种幻觉，未能掩盖尘土和腐烂的刺鼻气味。迪德里乌斯的魔法还引导那些表现出适当尊重的人。`,spotlightRefs:[],presentNpcIds:["npc_diderius"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_rot_0f1",locationId:"loc_rot_0ea",name:"1. 入口广场",activation:{condition:{type:"always"},priority:0},skeleton:["迪德里乌斯的墓穴入口位于曾经是一个大型铺砌广场的地方。","喷泉的遗迹现在不过是围绕着通向下方深处井口的破碎洞口的一圈石头。","两个石雕立在庭院中，高达二十尺。","在它们后面，一座四十尺高的建筑物被雕刻在悬崖边上，以雕刻有奇异、超凡场景的浮雕柱为特色。","左侧的巨像是一个留着胡须的男性人类，穿着异国情调的衣服，但它的面部已经破碎到无法辨认。"],flesh:`左侧的巨像是一个留着胡须的男性人类，穿着异国情调的衣服，但它的面部已经破碎到无法辨认。它的右手拿着一个天平，身边放着一根棍棒，左手举起，仿佛在警告。入口右侧的巨像是穿着类似异国情调服装的年轻男性人类，它的头部左半边破裂脱落，躺在它的脚下。雕像左手拿着一个牧羊人的曲柄杖，右手也举起作为警告。

入口周围的浮雕场景描绘了迪德里乌斯在占卜池中瞥见的事物，包括从未实现的其他世界和位面。在描述这些场景时，请发挥你的想象力。墓穴的入口位于一个石质楼梯井上方30尺处，楼梯井在离悬崖面突出的平台10尺处停止。瓦拉姆的信徒（见下文）在建筑物旁边留下了一把梯子，允许角色们爬上入口。

如果回答是"我们寻求感知"或"我们渴望知识"，或者角色们进行了可能让自负的法师感到高兴的谦卑或自贬的角色扮演回应，雕像们会作出回应。它们说："迪德里乌斯将赐予你们所寻求的东西，但只有在你们听从他并继续表现出适当的尊重！"然后它们恢复到原来的位置。

冒险者的积极回应使他们获得了有益的警告，这是迪德里乌斯魔法的恩赐。警告在它们适用的区域中有详细说明。

除了"知识"或"感知"之外的任何回答，如果不是以某种方式恭维迪德里乌斯的——包括要求澄清的问题——都会导致雕像恢复到它们最初的位置。角色们可以自由地继续进入这个建筑群，但他们从这次互动中得不到任何好处。

瓦拉姆的邪教徒在破旧喷泉附近的广场上扎营。这里燃烧着一堆篝火，三个睡袋显示了后卫邪教徒的营地。在营地东侧挖了七个浅坟——这是邪教徒探索中的伤亡。

守卫已经死了，被居住在井下隧道里的巨魔拖走并吃掉了。那些下水道大部分仍然完好，居住在那里的3个巨魔发现，利用它们在墓穴和广场之间移动，可以在该地区找到很好的食物。巨魔会战斗，直到生命值减少到三分之一或更少，然后撤退到井的安全地带。

通往隧道的入口太窄，即使是小型角色也无法挤过去。巨魔通过脱臼他们的髋部和肩膀来通过，承受了10点钝击伤害，但它们很快就再生了。`,spotlightRefs:[],presentNpcIds:["npc_diderius","npc_varram"],availableInfoIds:[],encounterIds:["enc_rot_0f1"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[127],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`迪德里乌斯的墓穴入口位于曾经是一个大型铺砌广场的地方。喷泉的遗迹现在不过是围绕着通向下方深处井口的破碎洞口的一圈石头。两个石雕立在庭院中，高达二十尺。在它们后面，一座四十尺高的建筑物被雕刻在悬崖边上，以雕刻有奇异、超凡场景的浮雕柱为特色。

当你接近这些雕像时，你突然听到了石头摩擦的声音。这些巨大的雕像转过它们巨大的头颅，破碎的面容俯视着你。两个声音齐声发出，如同从深邃的大地中爆发出来。
"停下。你们来到迪德里乌斯面前，以太行者和千里眼的通道。现在目睹他奇妙的成就。迪德里乌斯 扩展感知，迪德里乌斯 提供知识。你们寻求哪一个？"`,dmGuidance:`当队伍接近雕像时，请阅读以下内容。
如果队伍在这里或5号区域休息，巨魔会在夜间发动攻击。`},{id:"scn_rot_0f6",locationId:"loc_rot_0ea",name:"2. 前厅",activation:{condition:{type:"always"},priority:0},skeleton:["尽管幻象仍然显示着一个有着镀金雕刻和银制香炉的墓穴，这些都只是影子。","盗墓者破坏了浮雕墙壁，香炉早已不复存在。","在雕刻之间是一打可以识别为葬礼壁龛的凹槽，尽管这些凹槽里只剩下骨头碎片。","在房间的远端，一扇石门半开着。","门和门框上的痕迹表明它最近被强行打开过。"],flesh:"尽管幻象仍然显示着一个有着镀金雕刻和银制香炉的墓穴，这些都只是影子。盗墓者破坏了浮雕墙壁，香炉早已不复存在。在雕刻之间是一打可以识别为葬礼壁龛的凹槽，尽管这些凹槽里只剩下骨头碎片。在房间的远端，一扇石门半开着。门和门框上的痕迹表明它最近被强行打开过。",spotlightRefs:[],presentNpcIds:["npc_diderius"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[127],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_0f7",locationId:"loc_rot_0ea",name:"3. 警觉雕像",activation:{condition:{type:"always"},priority:0},skeleton:["六座雕像矗立于此，皆为身披斗篷、倚靠法杖的巫师，面容被深兜帽遮蔽。","兜帽形成的凹陷处格外幽暗。","雕像间的壁龛曾安置着与邪教徒战斗的骷髅卫士。","如今，十余具类人生物的骸骨散落满地。","不要看那些隐藏着这类知识的黑暗。"],flesh:`六座雕像矗立于此，皆为身披斗篷、倚靠法杖的巫师，面容被深兜帽遮蔽。兜帽形成的凹陷处格外幽暗。雕像间的壁龛曾安置着与邪教徒战斗的骷髅卫士。如今，十余具类人生物的骸骨散落满地。

不要看那些隐藏着这类知识的黑暗。"

当第一名冒险者通过房间的中点时，石质摩擦声响起，宣告着雕像转过它们戴兜帽的头来追踪角色的移动。角色绝不能看向雕像兜帽内的黑暗。任何这样做的角色必须进行一次DC 15感知豁免以抵抗en=Suggestion。成功意味着角色摆脱了雕像的魔法，而失败则意味着角色被石质兜帽内的黑暗凝视定住1轮。在此期间，雕像向角色耳语着不可能的秘密，这些秘密既是恩赐也是负担。

该角色随后必须进行一次 DC 15 智力豁免检定。若检定失败，该角色无法理解所展示的秘密，并且不会产生任何效果。若检定成功，该角色对世界的理解更为准确，在接下来的24小时内，进行智力检定时具有优势。然而，该角色也会暂时陷入疯狂状态，持续1分钟。疯狂的生物无法执行动作或反应，无法理解其他生物的话语，无法阅读，并且只会胡言乱语。你控制该生物的移动，其移动路线是不规则的。`,spotlightRefs:[],presentNpcIds:["npc_diderius"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[127],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:'当角色们进入这个区域时，那些在1号区域与雕像对话时选择得当的角色会突然想到："有些秘密并不适合凡人的心智去了解。'},{id:"scn_rot_0f9",locationId:"loc_rot_0ea",name:"4. 马赛克大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间是一个高高的拱形圆顶，周围环绕着一个深凹的壁架，宽10尺，高15尺。","这里的地面铺设着一幅美丽的瓷砖马赛克，上面画着一个身穿板甲的骑士，手持一把发光的剑对抗着奇美拉。",'通往5号区域的门上用粉笔写着"安全"，标志着这个房间是邪教徒使用的休息场所。',"当第一个角色进入这个房间时，瓷砖奇美拉开始缓慢移动。","奇美拉的行为像一个普通的奇美拉，但被魔法活化并根据侧边栏进行了定制。"],flesh:`这个房间是一个高高的拱形圆顶，周围环绕着一个深凹的壁架，宽10尺，高15尺。这里的地面铺设着一幅美丽的瓷砖马赛克，上面画着一个身穿板甲的骑士，手持一把发光的剑对抗着奇美拉。通往5号区域的门上用粉笔写着"安全"，标志着这个房间是邪教徒使用的休息场所。

当第一个角色进入这个房间时，瓷砖奇美拉开始缓慢移动。通过一个成功的 DC 14 感知（察觉）检定，角色会注意到这一移动并在瓷砖升起、奇美拉似乎从镶嵌中爬出时不会 突袭。

奇美拉的行为像一个普通的奇美拉，但被魔法活化并根据侧边栏进行了定制。它移动时会发出咔嗒声，受伤时会喷射瓷砖而不是流血。这个生物在一个维度上很薄，并可以利用这一特点在战斗中取得优势。生物飞到壁架上使用其火焰呼吸，然后飞下来进行近战攻击，直到可以再次呼吸。

太阳被描绘在走廊附近的马赛克中，那是 区域6——实际上是一个滑动的圆形板，可以揭示该区域的骨巨石陷阱。只有通过 DC 24 感知（察觉）检定或 DC 18 智力（调查）检定才能发现这块板。

通往区域12的双扇门上覆盖着腐蚀的铜板，上面雕刻着一群法师俯视着一个水池。图像顶部的男性法师的过大身影举起双手，仿佛在从池中召唤一个生物。

门框明显向外凸起，由于第4区和第12区之间走廊的天花板坍塌，石头的重量将门推出。拉动任何一扇门都会释放足够的力量，导致铰链断裂，门和一堆碎石墙冲向房间。任何在门10英尺范围内的生物必须进行一次DC 18敏捷豁免检定以跳开躲避。若检定失败，该生物将受到28（8d6）点钝击伤害，若检定成功则只受到一半伤害。坍塌的碎石使走廊充满石头，无法通行。`,spotlightRefs:[],presentNpcIds:["npc_diderius"],availableInfoIds:[],encounterIds:["enc_rot_0f9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`【自定义：活化瓷砖生物】一个活动瓷砖生物的行为与其相似的生物一样，除了它是一个构造物，不需要呼吸、饮水、进食或睡眠。此外，这个生物还获得了以下特性。
伤害抗性 穿刺
伤害免疫 毒素，心灵
状态免疫 魅惑, 恐慌, 麻痹, 石化, 中毒
一个瓷砖生物获得了以下特性。
如果被摧毁，瓷砖生物将在24小时内恢复所有生命值并再次活跃，除非至少收集了其一半的瓷砖并将其与生物的其他瓷砖分开存放。
一个瓷砖生物获得了以下反应。
当被近战攻击瞄准时，瓷砖生物可以采取反应将其最狭窄的一面朝向攻击者。攻击者在攻击掷骰上具有劣势。`},{id:"scn_rot_0ff",locationId:"loc_rot_0ea",name:"5. 井室",activation:{condition:{type:"always"},priority:0},skeleton:["这个占卜池使用水来创建一个镜面般的表面，用于其强大的仪式，水是从这口井补充的。","井中的水仍然存在，但区域效果迪德里乌斯对其巢穴的影响导致水在被拉到这个区域后的几轮内就会蒸发。","井边放着一个铜桶，桶上系着绳子，而一个空盆子放在北墙边8尺高的地方，有石阶通向它。","一个黄铜杠杆从盆子附近的墙中突出。","当水倒入盆中并拉动杠杆时，它会向区域12的沟渠供水。"],flesh:`这个占卜池使用水来创建一个镜面般的表面，用于其强大的仪式，水是从这口井补充的。井中的水仍然存在，但区域效果迪德里乌斯对其巢穴的影响导致水在被拉到这个区域后的几轮内就会蒸发。井边放着一个铜桶，桶上系着绳子，而一个空盆子放在北墙边8尺高的地方，有石阶通向它。一个黄铜杠杆从盆子附近的墙中突出。当水倒入盆中并拉动杠杆时，它会向区域12的沟渠供水。

井的两侧以及旁边的地面上覆盖着鲜红色的蘑菇。它们表面光滑，带着水光，看起来像血，如果采摘并在巢穴效果使其变质前食用，它们的味道和质地像生肝。然而，它们是安全可食用的。

邪教徒在他们的短暂探险期间将这个房间用作前哨营地。睡袋和露营装备散落在周围。就像通往这个区域的门一样，'安全'这个词用粉笔写在墙上，以防有人迷路或迷失方向。

这里的井与供应外面广场喷泉的水库相连。那个区域的巨魔有时在狩猎不顺时会来到这里，以肝脏蘑菇为食。尽管邪教徒在被玉帝族抓走之前没有遇到它们，但如果队伍使用这个区域休息，巨魔会在半夜攻击。和在广场上一样，如果受伤严重，巨魔会逃下井。`,spotlightRefs:[],presentNpcIds:["npc_diderius"],availableInfoIds:[],encounterIds:["enc_rot_0ff"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_101",locationId:"loc_rot_101",name:"走廊",activation:{condition:{type:"always"},priority:0},skeleton:["这条走廊急剧向下倾斜，通向区域7，全长下降了15英尺。","这个板揭示了一个曾经用于传送餐食的狭窄通道，它向下30英尺直达通往区域11的楼梯井。","（邪教徒发现了这个通道，并利用它进入了区域10和11，尽管没有发现他们通过的痕迹。","在竖井入口15英尺处，地板上安装的机械板会触发一个滚石陷阱。","如果触发板被激活，4号区域地面上作为太阳出现的圆形马赛克图案会滑开，一个由数百具骨骼组成的、直径7尺的球体将神奇地从地面升起。"],flesh:`这条走廊急剧向下倾斜，通向区域7，全长下降了15英尺。任何角色如果花时间四处探查，并通过一个 DC 17 智力（调查）检定，会注意到走廊中间有一个隐秘的板，大小足以让一个小型生物通过，或者一个中型生物挤过。这个板揭示了一个曾经用于传送餐食的狭窄通道，它向下30英尺直达通往区域11的楼梯井。（邪教徒发现了这个通道，并利用它进入了区域10和11，尽管没有发现他们通过的痕迹。）

在竖井入口15英尺处，地板上安装的机械板会触发一个滚石陷阱。行军序列中第一排的某个角色需要进行一次成功的DC 22感知（察觉）检定，才能在不激活压力板的情况下注意到这个触发器。

如果触发板被激活，4号区域地面上作为太阳出现的圆形马赛克图案会滑开，一个由数百具骨骼组成的、直径7尺的球体将神奇地从地面升起。这个骨石滚向6号区域，并沿着倾斜的走廊滚动，然后撞向7号区域的墙壁。

当骨球滚动时，它会对区域内6码内的任何生物造成碾压和切割，造成18点（4d8）钝击伤害和18点（4d8）切割伤害，或通过成功的DC 17敏捷豁免检定减少一半伤害。任何未能通过此初始豁免检定的生物将被骷髅之手抓住并拉入球体，球体继续在走廊中碾压其他生物。

被困在骨石中的生物可以尝试进行一次 DC 17 力量（运动）或敏捷（特技）检定，以在骨石撞击区域7的墙壁前挣脱。任何未能逃脱的生物将在骨石撞击时被困在其中，并卷入一场骨头与石块的爆炸，受到14点（4d6）钝击伤害和14点（4d6）挥砍伤害。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_rot_104",locationId:"loc_rot_101",name:"7. 王座室前厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间充满了香的气味，墙上挂着华丽的挂毯。","在南墙上，一个只容许小型角色挤过去的滑槽从外面透进光线。","在打开北侧的双扇门时做出这个姿势的角色可以顺利通过。","六个石棺镶嵌在挂毯后面的墙壁中，里面存放着迪德里乌斯家宅守卫的木乃伊遗体。"],flesh:`这个房间充满了香的气味，墙上挂着华丽的挂毯。在南墙上，一个只容许小型角色挤过去的滑槽从外面透进光线。

" 一次成功的 DC 15 智力（宗教）检定会让角色想起已逝女神密斯特拉的信徒中的一种神圣姿势，包括低下头并将双手举起，仿佛拿着一盏灯。在打开北侧的双扇门时做出这个姿势的角色可以顺利通过。

六个石棺镶嵌在挂毯后面的墙壁中，里面存放着迪德里乌斯家宅守卫的木乃伊遗体。`,spotlightRefs:[],presentNpcIds:["npc_diderius"],availableInfoIds:[],encounterIds:["enc_rot_104"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`如果角色们在 区域1 中与雕像正确地对话，当他们进入这个区域时，会听到一个陌生的声音低语："以密斯特拉的方式展现的谦卑，庇护着那些为寻求知识开辟道路的人。
如果角色在没有做出正确的手势的情况下打开北边的双门，或者擅自触碰石棺，就会唤醒6个木乃伊们，它们会蹒跚地走出来并发动攻击。`},{id:"scn_rot_106",locationId:"loc_rot_101",name:"8. 宝座大厅",activation:{condition:{type:"always"},priority:0},skeleton:["一座巨大基座上的王座犹如浮云，遮蔽着一轮金色太阳。","王座上坐着一位十二英尺高、威严而肌肉发达的人形男性，拥有飘动的白胡子和紫色长袍——实际上，这是一个粘土魔像，迪德里乌斯曾用它在这片区域接待贵宾。","这个魔像被注入了多次施放的en=Magic Mouth。",'当任何角色首次靠近它时，这生物会用一种抚慰而威严的声音说道："寻求迪德里乌斯智慧之人须先供奉祭品，好让迪德里乌斯施展其强大魔法。',"将此类祭品放置于吾足下，抑或速速离去。"],flesh:`一座巨大基座上的王座犹如浮云，遮蔽着一轮金色太阳。王座上坐着一位十二英尺高、威严而肌肉发达的人形男性，拥有飘动的白胡子和紫色长袍——实际上，这是一个粘土魔像，迪德里乌斯曾用它在这片区域接待贵宾。

这个魔像被注入了多次施放的en=Magic Mouth。当任何角色首次靠近它时，这生物会用一种抚慰而威严的声音说道："寻求迪德里乌斯智慧之人须先供奉祭品，好让迪德里乌斯施展其强大魔法。将此类祭品放置于吾足下，抑或速速离去。"

迪德里乌斯不是一个贪婪的法师，他甚至接受来自城镇穷人的微薄供品。只要每个队伍成员在宝藏堆中放置比陶杯更有价值的物品，角色们就被允许通过。

在宝座的脚下是一堆宝藏，包含250枚银币，六条精致的银项链，每条价值50金币，还有一瓶火焰吐息药水。即使只是快速一瞥，角色们也可以看到这堆宝藏还包括数百枚铜币以及一些无价值的珠宝碎片和陶器碎片。`,spotlightRefs:[],presentNpcIds:["npc_diderius"],availableInfoIds:[],encounterIds:["enc_rot_106"],treasureSlotIds:["trs_rot_106_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果冒险者试图偷走任何宝藏或在不留下宝藏的情况下使用通往区域10的门，魔像就会攻击。"},{id:"scn_rot_108",locationId:"loc_rot_101",name:"9. 书房与图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["宝座前厅东侧的房间是迪德里乌斯的书房和图书馆，他曾在这里与智者和旅行者会面。","现在，布满灰尘的书架和桌子上空空如也，曾经存放在这里的卷轴和书籍早已被洗劫一空。","然而，这个区域的不知情的守护者仍然存在。","Ilda是一个中立善良的幽魂，曾经是迪德里乌斯的学徒之一。","她非常崇拜她的师傅，但当一本他珍贵的书籍遗失时，她被误认为是小偷而被放逐。"],flesh:`宝座前厅东侧的房间是迪德里乌斯的书房和图书馆，他曾在这里与智者和旅行者会面。现在，布满灰尘的书架和桌子上空空如也，曾经存放在这里的卷轴和书籍早已被洗劫一空。然而，这个区域的不知情的守护者仍然存在。

Ilda是一个中立善良的幽魂，曾经是迪德里乌斯的学徒之一。她非常崇拜她的师傅，但当一本他珍贵的书籍遗失时，她被误认为是小偷而被放逐。Ilda在迪德里乌斯去世后不久就去世了，她的灵魂回到了这里，作为他庞大知识库的守护者。

除了那些会从 迪德里乌斯 偷窃的人之外，伊尔达并不暴力。一个成功的 DC 14 智力（宗教）检定揭示，如果任何遗失的图书馆的卷轴被归还，伊尔达可以从她的逗留中解脱（参见 区域11）。

尽管Ilda并非邪恶，与她的对峙仍应是令人痛苦的。这是一个灵魂因痛苦而与世界相连的生物，与Ilda的任何互动都应是一个危险的过程，与一个随时可能失控的角色交谈。她可能会无缘无故地消失在空气中，然后如果角色们试图将她召唤回来，她会愤怒地返回。

伊尔达对邪教徒一无所知，他们没有进入这个区域。

迪德里乌斯的激情是强大的占卜魔法，这也正是他发现这个洞穴群中神秘水池的方式。他围绕水池挖掘了这些房间，国王和法师们带着贡品来到这里。在他生活了数个世纪之后去世，这个地下宅邸变成了他的墓穴。

占卜池允许使用者窥视许多阻碍低级占卜魔法的魔法防护。

水池的启示可能会使使用者疯狂，除非提出的问题具体并且只涉及物理世界，避免涉及形而上学的问题。在没有首先提供祭品的情况下凝视水池是极其危险的。

使用占卜池需要个人牺牲，但随着时间的流逝，池子的要求变得更加苛刻。如果像Ilda怀疑的那样，自迪德里乌斯死后其他人一直在使用这个池子，那么它现在的代价肯定是非常黑暗的。`,spotlightRefs:[],presentNpcIds:["npc_diderius"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`当角色进入这个区域时，她会显现出来，要求知道他们为何而来，并威胁他们如果计划洗劫图书馆。
如果角色指出图书馆里已经没有什么可偷的了，伊尔达会被一阵痛苦所淹没，她为自己的失败而痛苦。
如果队伍设法与伊尔达交谈，他们可能会了解到玉帝族居住在建筑群最深处。
如果角色们赢得她的信任，伊尔达还可以提供以下信息：`},{id:"scn_rot_109",locationId:"loc_rot_101",name:"10. 餐厅",activation:{condition:{type:"always"},priority:0},skeleton:["在这个餐厅的南端，有两张普通的石桌，而北端则有一张长大理石桌。",'通往区域8的楼梯上方的门上用粉笔写着"? DANGER"。','通往南方楼梯的门被钉死了，上面用粉笔潦草地写着"DANGER"。',"五个须魔坐在大理石桌旁——瓦拉姆探险队的最后生还者。","当他的邪教追随者在调查11号区域时被击溃，瓦拉姆把恶魔们留在这里，指示他们防范任何从那个区域出来的生物。"],flesh:`在这个餐厅的南端，有两张普通的石桌，而北端则有一张长大理石桌。通往区域8的楼梯上方的门上用粉笔写着"? DANGER"。通往南方楼梯的门被钉死了，上面用粉笔潦草地写着"DANGER"。

五个须魔坐在大理石桌旁——瓦拉姆探险队的最后生还者。当他的邪教追随者在调查11号区域时被击溃，瓦拉姆把恶魔们留在这里，指示他们防范任何从那个区域出来的生物。恶魔们非常认真地执行命令，这意味着除非角色们攻击，否则他们几乎不会注意到冒险者。

如果礼貌地询问这些恶魔，他们会告诉角色们他们被命令留在这里。他们承认他们的主人是瓦拉姆，并提到在南方的楼梯下有大量宝藏。那个矮人已经离开一段时间了，但他们不知道他发生了什么事。

如果恶魔们被提供了100金币或更多的宝石，他们还会告诉角色们，他们在这座建筑群中战斗并杀死了不死生物；那个矮人失去了对他邪教很重要的东西，需要占卜池来找回它；并且他们正在按照他们的领主扎瑞尔，阿弗纳斯的女大公的命令为邪教工作，她希望提亚马特离开九层地狱。

角色们可以自由通过这个房间，包括进入区域11——但当他们离开那个区域时，恶魔们会高兴地攻击他们。`,spotlightRefs:[],presentNpcIds:["npc_varram","npc_tiamat"],availableInfoIds:[],encounterIds:["enc_rot_109"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_10a",locationId:"loc_rot_10a",name:"宝库",activation:{condition:{type:"always"},priority:0},skeleton:["在迪德里乌斯生前，这个区域是他的卧室，仍然包含一张优雅的床、书架、一个大木箱，以及一个摆放着水壶和高脚杯的边桌。","邪教徒在与这里的不死守卫发生了灾难性的冲突后封闭了这个房间。","从区域6到金库前楼梯井的升降机井曾经被用来绕过从卧室到建筑群上层的长距离步行，供迪德里乌斯的仆人们使用。","升降机的绳索和腐烂的木制平台散落在楼梯上。","这个区域由3个邪灵和3个恶灵守卫。"],flesh:`在迪德里乌斯生前，这个区域是他的卧室，仍然包含一张优雅的床、书架、一个大木箱，以及一个摆放着水壶和高脚杯的边桌。邪教徒在与这里的不死守卫发生了灾难性的冲突后封闭了这个房间。

从区域6到金库前楼梯井的升降机井曾经被用来绕过从卧室到建筑群上层的长距离步行，供迪德里乌斯的仆人们使用。升降机的绳索和腐烂的木制平台散落在楼梯上。

这个区域由3个邪灵和3个恶灵守卫。这些幽灵是曾经为了换取法师的异国知识而将灵魂献给迪德里乌斯的战士的灵魂。它们可以在战斗中被击败，但它们的灵魂被古老的魔法束缚在房间里，导致它们在被摧毁后24小时再次显现。不死生物是在这里死去的三个邪教徒和三个在探索废墟时死去的蛇人的复活灵魂。如果被摧毁，它们不会再次显现。

书架上摆放着关于预言术的魔法论文和笔记，这些文献经受了时间的摧残。它们详细记录了古代耐瑟瑞尔的施法实践，如果出售，可以换取750金币。如果将书归还到图书馆（区域9），幽灵便能从这个世界安息。

床边的银壶和四个高脚杯是魔法物品。一个角色如果从充满气体的高脚杯中'喝'下这种气体，将在接下来的3小时内对毒素豁免检定获得优势，并在毒素伤害上获得抗性。每个高脚杯每七天可以产生这种效果一次。

这个密封的箱子里装有七件丝绸长袍，它们没有腐烂，如果出售，每件价值50金币。

箱子里还装有一个镶嵌紫水晶的抗毒戒指和两张en=Protection from Energy的法术卷轴。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_10a"],treasureSlotIds:["trs_rot_10a_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`如果角色搜索房间，他们会发现一本名为跨可能性的实质转换的破旧书籍，夹在床和墙之间。
如果角色从空壶中向空高脚杯倒水，两个容器之间会流动着一种冒烟的气体。`},{id:"scn_rot_10d",locationId:"loc_rot_10a",name:"12. 占卜池",activation:{condition:{type:"always"},priority:0},skeleton:["这个长廊拥有魔法池，它是迪德里乌斯力量的源泉。","朝南的双门上没有标记，但它们具有与区域4中的门相同的危险。","破碎的箭矢、血迹和一具邪教徒的尸体散落在房间的地板上。","这些箭矢由石头雕刻而成，箭头呈毒牙状，上面刻有戴有王冠的眼镜蛇图案。","如果一个角色检查尸体，会发现这名教徒并非死于箭矢，而是被匕首所伤。"],flesh:`这个长廊拥有魔法池，它是迪德里乌斯力量的源泉。朝南的双门上没有标记，但它们具有与区域4中的门相同的危险。

破碎的箭矢、血迹和一具邪教徒的尸体散落在房间的地板上。进行一次 DC 12 智力（调查）检定可以揭示这些箭矢是从北面的门廊射出的，通往区域 13。这些箭矢由石头雕刻而成，箭头呈毒牙状，上面刻有戴有王冠的眼镜蛇图案。进行一次 DC 18 智力（宗教）检定可以认出这是蛇人神祇梅沙尔克的象征。

如果一个角色检查尸体，会发现这名教徒并非死于箭矢，而是被匕首所伤。成功进行一个 DC 15 智力（调查）检定可以揭示凶器是一把 龙牙匕首（参见 附录C）。这是那个狡诈的 瓦拉姆 在使用水池时牺牲的不幸教徒。

水池目前是空的。瓦拉姆 刚刚完成水池的预言仪式，原体蛇人就发动了袭击并将他拖走。一道岩石水闸从南墙延伸出来，将水排入水池。或者，也可以用一瓶圣水瓶来激活水池，这不受木乃伊领主的巢穴效应影响。

当任何水接触到水池时，它会扩散并发出黑色的光芒。任何接收到伊尔达警告的角色（或记得 区域3 处雕像话语的角色）最好声明他或她移开视线不看水池。否则，角色必须进行一个 DC 20 的感知豁免检定以抵抗 en=Suggestion 法术。若检定失败，角色会被迫凝视占卜池，除非另一个角色立即将好奇的受害者从池边拉开（并在拉开时也避免直视水池）。如果没有被拉开，凝视角色会暂时陷入疯狂状态 1 分钟（参见区域 3）。从池边被拉开的角色不会陷入疯狂，但会 震慑 1 分钟。

占卜水池历来要求使用者做出个人牺牲以获取其秘密。然而，由于长期孤立，水池的魔力变得更加贪婪。为了回应玉帝族的残忍，使用水池需要牺牲一个有感知生物的全部或大部分。`,spotlightRefs:[],presentNpcIds:["npc_diderius","npc_varram"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色们能迅速填满区域5的盆并快速打开水闸，水就会在水蒸发之前注入水池。"},{id:"scn_rot_110",locationId:"loc_rot_10a",name:"迪德里乌斯的墓穴",activation:{condition:{type:"always"},priority:0},skeleton:["迪德里乌斯的最后安息之地是一个20尺高的房间，由注入了en=Continual Flame的火盆照亮。","一个巨大的石棺位于中心的台阶石基上。","墙壁上装饰着真人大小的壁画，展示了尼瑟尔和阿纳乌里亚的失落神祇。","如果任何这样的壁画被打破，隐藏在其后的 木乃伊 会发起攻击。","其他三个隐藏的木乃伊，都是曾经 迪德里乌斯 的顾问，随后会破墙而出进行攻击。"],flesh:`迪德里乌斯的最后安息之地是一个20尺高的房间，由注入了en=Continual Flame的火盆照亮。一个巨大的石棺位于中心的台阶石基上。墙壁上装饰着真人大小的壁画，展示了尼瑟尔和阿纳乌里亚的失落神祇。

检查壁画的角色可以尝试进行一次 DC 15 智力 (调查) 检定，以发现其中四幅壁画上的薄石膏。如果任何这样的壁画被打破，隐藏在其后的 木乃伊 会发起攻击。其他三个隐藏的木乃伊，都是曾经 迪德里乌斯 的顾问，随后会破墙而出进行攻击。

迪德里乌斯，木乃伊领主，安息在石棺中。我知道你们所寻求的是什么。"

做好准备，我将开启通向危险之路。"除非角色要求迪德里乌斯等待，片刻之后伴随着铃声，密门将通向区域14。小队可获得一轮突袭回合来对付那里的守卫。

那些在第一区域未能妥善发言的人必须向迪德里乌斯询问关于瓦拉姆的信息以获取其行踪。若不够恭敬，迪德里乌斯会说"要么让我安息，要么面对你的末日"。只有在这次对话中格外庄重的访客，迪德里乌斯才会为其开启通路。

如果他们坚持，他会攻击。藏在壁画后面的木乃伊们也会打破束缚并攻击。这些怪物不会追击逃离这个房间的人，这个房间很快会恢复到它的原始状态。

迪德里乌斯可以使用木乃伊领主的传说行动，但他与众不同，因为他施放法师法术。他使用他的18点感知作为施法能力（他的感知仍然是18），并准备了以下法师法术：

戏法（随意施放）：en=Minor Illusion，en=Ray of Frost

1环（4个法术位）：en=Charm Person, en=Detect Magic, en=Shield, en=Thunderwave

2环（3个法术位）：en=Cloud of Daggers，en=Hold Person，en=See Invisibility

3环（3个法术位）：en=Animate Dead, en=Dispel Magic

4环（3个法术位）：en=Fire Shield，en=Greater Invisibility

5环（2个法术位）：en=Cloudkill, en=Wall of Stone

石棺中的一个卡诺皮克罐子装有迪德里乌斯的枯萎心脏。

在北墙上有一扇暗门，需要成功的 DC 20 感知（察觉）检定才能发现。敲击石墙可以听到内部传来的空洞回声，但开门的机关在另一边。可以使用 en=Knock 或 en=Stone Shape 法术打开它，或者通过成功的 DC 20 力量检定强行打开。`,spotlightRefs:[],presentNpcIds:["npc_diderius","npc_varram"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果队伍从区域1获得的恩惠，所有角色都会感觉到打扰这里的任何东西都是不敬的——一切都应该保持原样。
当角色们接近到石棺几步之内时，一个深沉而清晰的声音从棺材中发出，说道："你们接近安息中的迪德里乌斯。
如果冒险者们对区域1中的雕像说话得当，声音会说："蛇人已将名为瓦拉姆的生物带过北墙上的传送门。
如果冒险者试图打开石棺，迪德里乌斯会警告他们。`,mapGeometry:{imageRef:"adventure/RoT/014-tod-11-02.webp"}},{id:"scn_rot_116",locationId:"loc_rot_116",name:"Ss'tck'al",activation:{condition:{type:"always"},priority:0},skeleton:["在迪德里乌斯死后很久，玉帝族发现了这个墓穴并将其据为己有。","一小群玉帝族现在住在这里，由蜥蜴人奴隶支持。","他们是占卜水池的看护者，高级玉帝族使用它来寻求对他们深远阴谋的魔法洞察。","玉帝族避免进入建筑群的原始房间，因为他们害怕那里的不死生物。","相反，他们通过向悬崖侧面挖掘得更深来扩建了这个建筑群。"],flesh:`在迪德里乌斯死后很久，玉帝族发现了这个墓穴并将其据为己有。一小群玉帝族现在住在这里，由蜥蜴人奴隶支持。他们是占卜水池的看护者，高级玉帝族使用它来寻求对他们深远阴谋的魔法洞察。玉帝族避免进入建筑群的原始房间，因为他们害怕那里的不死生物。相反，他们通过向悬崖侧面挖掘得更深来扩建了这个建筑群。

蛇人捕获并献祭那些参观迪德里乌斯的坟墓的人。然而，他们为了自救，也不会拒绝达成交易。

这里比墓穴明显更温暖，而且整个空气中都弥漫着令人不舒服的潮湿。

蛇人聚居区的墙壁是由深绿色的石板构成，上面覆盖着黏液和湿气。

除非另有说明，墓穴的天花板高度为10尺。

除非另有说明，否则墓穴内部没有光亮。`,spotlightRefs:[],presentNpcIds:["npc_diderius"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_tod_varram_truth"],tone:"exploration",_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_rot_11d",locationId:"loc_rot_116",name:"14. 入口",activation:{condition:{type:"always"},priority:0},skeleton:["这个粗糙的自然洞穴拥有用于提升石板秘密门的绞车系统，该秘密门位于区域13和区域14之间。","门口由6个蜥蜴人守卫，一旦这扇门在这两个区域之间升起，它们就会立即攻击。","其中一个蜥蜴人跑去警告玉帝族，而其他则在门附近就位。","然后门会被从这个区域打开，敌军发动攻击。","如果其中一个魔裔被杀，其他魔裔会撤退。"],flesh:`这个粗糙的自然洞穴拥有用于提升石板秘密门的绞车系统，该秘密门位于区域13和区域14之间。门口由6个蜥蜴人守卫，一旦这扇门在这两个区域之间升起，它们就会立即攻击。其中一个蜥蜴人跑去警告玉帝族，而其他则在门附近就位。

然后门会被从这个区域打开，敌军发动攻击。如果其中一个魔裔被杀，其他魔裔会撤退。当一半的蜥蜴人死亡时，剩余的蜥蜴人会撤退。

东边的楼梯下降30尺后到达区域15的桥上。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_11d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色花费超过10轮时间打开门，会有4个额外的蜥蜴人和3个恶咒蛇人（类型1）出现。"},{id:"scn_rot_11e",locationId:"loc_rot_116",name:"15. 桥梁",activation:{condition:{type:"always"},priority:0},skeleton:["从区域14陡峭的楼梯通向一座40尺长的石桥，横跨一个黑暗的深坑。","桥的西端比东端高出10尺。","潮湿的水滴从高高的天花板上滴落下来，覆盖在桥上的光滑苔藓像绿色的窗帘一样悬挂在边缘。","桥梁延伸的坑洞在桥的顶部（西侧）深60英尺，在桥的底部（东侧）深50英尺。","桥下的区域是蛇形元嗣幼体（参见 区域19）的进食室，它们通过墙上的洞在两个区域之间爬行。"],flesh:`从区域14陡峭的楼梯通向一座40尺长的石桥，横跨一个黑暗的深坑。桥的西端比东端高出10尺。

潮湿的水滴从高高的天花板上滴落下来，覆盖在桥上的光滑苔藓像绿色的窗帘一样悬挂在边缘。任何在桥上移动的生物都必须成功通过一个 DC 14 的敏捷豁免检定，否则就会摔倒。在豁免检定失败时，生物可以尝试进行一次 DC 10 的敏捷（特技）检定，以紧紧抓住桥梁，而不是坠入黑暗中。

桥梁延伸的坑洞在桥的顶部（西侧）深60英尺，在桥的底部（东侧）深50英尺。桥下的区域是蛇形元嗣幼体（参见 区域19）的进食室，它们通过墙上的洞在两个区域之间爬行。任何从桥上掉下的人物或蜥蜴人都会受到适当的坠落伤害，然后被元嗣幼体攻击。爬回桥上与任一楼梯交汇处需要成功进行三次 DC 15 力量（运动）检定。

任何从区域14撤退的蜥蜴人都会在这里试图阻挡队伍。此外，还有6个蜥蜴人蹲在桥上加强这个区域，希望试图通过战斗通过的角色会掉入下面的黑暗中。他们得到2个恶咒蛇人（类型1）的支持，这些恶咒蛇人手持弓箭，从东侧楼梯进行攻击。恶咒蛇人还使用en=Suggestion法术告诉角色，一个队伍成员被元提间谍替换了，应该被攻击。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_11e"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_11f",locationId:"loc_rot_116",name:"16. 冥想室",activation:{condition:{type:"always"},priority:0},skeleton:["在这个大房间里，元提人以他们黑暗的神灵的名义冥想，并讨论他们自己的计划和阴谋。","这个房间的东北和西南墙上有供奉元提神祇Merrshaulk和Sseth的雕像神龛。","另外两面墙上刻有元提高僧的雕像，他们的脚下摆放着作为供品的铠甲。","虽然这些蛇本身并不构成威胁，但它们会填满盔甲套装，这些盔甲随后会起身攻击，化为2只恐怖铠甲，手持带毒长剑。","恐怖之物不会离开这个房间。"],flesh:`在这个大房间里，元提人以他们黑暗的神灵的名义冥想，并讨论他们自己的计划和阴谋。这个房间的东北和西南墙上有供奉元提神祇Merrshaulk和Sseth的雕像神龛。另外两面墙上刻有元提高僧的雕像，他们的脚下摆放着作为供品的铠甲。

虽然这些蛇本身并不构成威胁，但它们会填满盔甲套装，这些盔甲随后会起身攻击，化为2只恐怖铠甲，手持带毒长剑。成功被蛇形恐怖兽长剑击中的目标必须进行DC 12的体质豁免检定，豁免失败则受到9点（2d8）毒素伤害，成功则仅受一半伤害。恐怖之物不会离开这个房间。

四颗价值1000金币的红宝石镶嵌在雕像的眼睛中，可以被撬出来。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_11f"],treasureSlotIds:["trs_rot_11f_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色们到达此处时，成百上千的蛇开始从雕像的孔洞和房间的角落中爬出。"},{id:"scn_rot_121",locationId:"loc_rot_116",name:"17. 玉提住处",activation:{condition:{type:"always"},priority:0},skeleton:["这里在石地板上凿有十几个直径3尺、深7尺的圆柱形孔洞，被低级玉帝族用作睡觉的洞穴。","两个石图腾立在这里，都呈眼镜蛇形态，张着嘴。","这些图腾散发出的魔法抵消了木乃伊领主巢穴在这一区域的一些区域效果，允许玉帝族在这里储存食物和水，而不会蒸发或变质。","这个房间目前由3个蜥蜴人和1个纯血原体蛇人守卫，除非这些生物已经在区域18中遇到过了。","通往区域21的走廊暗门由墙上刻画的拱门标记。"],flesh:`这里在石地板上凿有十几个直径3尺、深7尺的圆柱形孔洞，被低级玉帝族用作睡觉的洞穴。两个石图腾立在这里，都呈眼镜蛇形态，张着嘴。这些图腾散发出的魔法抵消了木乃伊领主巢穴在这一区域的一些区域效果，允许玉帝族在这里储存食物和水，而不会蒸发或变质。

这个房间目前由3个蜥蜴人和1个纯血原体蛇人守卫，除非这些生物已经在区域18中遇到过了。

通往区域21的走廊暗门由墙上刻画的拱门标记。然而，在拱门前10尺处设有一个压力板，通过成功的DC 15智力（调查）检定可发现。当任何生物踩上压力板时，飞镖会从走廊两侧墙壁射出，攻击区域内所有生物：命中+8，3（1d6）穿刺伤害，且目标必须通过DC 14体质豁免检定，否则受到10（3d6）毒素伤害并陷入麻痹状态1分钟。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_121"],treasureSlotIds:["trs_rot_121_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色搜索睡眠洞，他们可以找到600铜币，200银币和150金币，以及一瓶剧毒药水。"},{id:"scn_rot_124",locationId:"loc_rot_116",name:"18. 长走廊",activation:{condition:{type:"always"},priority:0},skeleton:["这个长走廊的墙壁似乎在波动，来回移动，就像走廊在以巨蛇的方式滑行。","这只是一种永久幻象效果，但它仍然让人感到不安。"],flesh:"这个长走廊的墙壁似乎在波动，来回移动，就像走廊在以巨蛇的方式滑行。这只是一种永久幻象效果，但它仍然让人感到不安。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_124"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`当角色们到达走廊的转弯处时，4个蜥蜴人从区域22的方向冲过来，随后是2个恶咒蛇人（类型1）。
如果角色们在没有检查那个房间的情况下经过了通往区域17的门，那个区域里的3个蜥蜴人和1个纯血原体蛇人也会冲出来。`},{id:"scn_rot_125",locationId:"loc_rot_125",name:"孵化室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的地板比相邻走廊的地板低20尺，通过高梯子到达。","这个元提孵化室的墙壁滴着粘液，地板上充满了房间居住者的蠕动。","元提产出大量的后代，其中被兄弟姐妹所消耗，以确保只有最强壮的存活。","在队伍出现的第一时间，元提使用en=Suggestion法术，同时为之前的所有冲突道歉，声称他们的族人无意伤害角色们。","作为诚意的表现，这个怪物邀请角色们下来梯子，与元提一起参加盛宴。"],flesh:`这个房间的地板比相邻走廊的地板低20尺，通过高梯子到达。这个元提孵化室的墙壁滴着粘液，地板上充满了房间居住者的蠕动。元提产出大量的后代，其中被兄弟姐妹所消耗，以确保只有最强壮的存活。

在队伍出现的第一时间，元提使用en=Suggestion法术，同时为之前的所有冲突道歉，声称他们的族人无意伤害角色们。作为诚意的表现，这个怪物邀请角色们下来梯子，与元提一起参加盛宴。

如果他们从上方遭到攻击，元提会上梯子战斗。如果怪物的生命力降至一半或更少，它会逃离战斗。`,spotlightRefs:[],presentNpcIds:["npc_neronvain"],availableInfoIds:[],encounterIds:["enc_rot_125"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`一群这些后代（使用毒蛇群的统计数据）在地板上爬行，穿越着成堆的卵和碎蛋壳，由1个憎恶蛇人和3个纯血原体蛇人看守。
如果角色们完全被说服，元提会等待他们下来，然后他们和虫群会发动攻击。
如果角色们逃跑，元提会追击。`},{id:"scn_rot_126",locationId:"loc_rot_125",name:"20. 蜥蜴人巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个散发着恶臭的房间堆满了垃圾和污垢。","蛇人的蜥蜴人奴隶被关在这里。","目前这个区域是空的，所有的居民都在其他区域有所记录。","隐藏在蜥蜴人的脏乱巢穴中的是22枚金币和125枚银币的散币。"],flesh:`这个散发着恶臭的房间堆满了垃圾和污垢。蛇人的蜥蜴人奴隶被关在这里。目前这个区域是空的，所有的居民都在其他区域有所记录。

隐藏在蜥蜴人的脏乱巢穴中的是22枚金币和125枚银币的散币。`,spotlightRefs:[],presentNpcIds:["npc_neronvain"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_rot_126_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_128",locationId:"loc_rot_125",name:"21. 监狱",activation:{condition:{type:"always"},priority:0},skeleton:["玉帝族使用类人生物的牺牲来为占卜水池的魔法提供能量。","他们的不幸受害者被关押在这里，直到需要时为止，但监狱目前是空的。"],flesh:"玉帝族使用类人生物的牺牲来为占卜水池的魔法提供能量。他们的不幸受害者被关押在这里，直到需要时为止，但监狱目前是空的。",spotlightRefs:[],presentNpcIds:["npc_neronvain"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_129",locationId:"loc_rot_125",name:"22. 神殿",activation:{condition:{type:"always"},priority:0},skeleton:["元提定居点的核心，这个巨大的房间在东西两墙上有巨大的石蛇，它们张开的嘴里喷吐着绿色的火焰。","元提的领袖们就在这里——3个憎恶蛇人，2个恶咒蛇人（类型2），以及1个纯血原体蛇人女祭司——还有任何从之前的遭遇中撤退的元提和蜥蜴人。","元提人和蜥蜴人在摇曳的绿色火焰的阴影中站立，准备发动攻击，但他们明白如果冒险者们能够毫发无损地来到这里，那么他们将是一个严重的威胁。","在房间的后部，靠近一个雕刻着巨大张开嘴巴的眼镜蛇形状的祭坛，昏迷的瓦拉姆被殴打并捆绑着。","牧师已经听说了角色们的任务，尽管她不知道也不关心他们为何寻找这个矮人。"],flesh:`元提定居点的核心，这个巨大的房间在东西两墙上有巨大的石蛇，它们张开的嘴里喷吐着绿色的火焰。元提的领袖们就在这里——3个憎恶蛇人，2个恶咒蛇人（类型2），以及1个纯血原体蛇人女祭司——还有任何从之前的遭遇中撤退的元提和蜥蜴人。

元提人和蜥蜴人在摇曳的绿色火焰的阴影中站立，准备发动攻击，但他们明白如果冒险者们能够毫发无损地来到这里，那么他们将是一个严重的威胁。在房间的后部，靠近一个雕刻着巨大张开嘴巴的眼镜蛇形状的祭坛，昏迷的瓦拉姆被殴打并捆绑着。

牧师已经听说了角色们的任务，尽管她不知道也不关心他们为何寻找这个矮人。

如果元提不知道角色们为何攻击，女祭司只知道瓦拉姆一直在求饶，承诺如果放了他，会给元提带来巨大的财富。女祭司计划通过提供矮人承诺给她的假想财富来与角色们讨价还价。

无论哪种方式，如果角色们希望瓦拉姆活着，女祭司要求队伍在不杀死更多玉帝族的情况下离开这个建筑群。她愿意交出矮人，但解释说他的灵魂已经被强大的玉帝族魔法暂时从他的身体中抽离出来。（女祭司在撒谎——瓦拉姆之所以处于目前这种半昏迷状态，是因为他在玉帝族手中受到了残酷对待。）

如果这也失败了并且战斗爆发，她会杀死瓦拉姆（他只剩下3点生命值），然后和她的追随者一起攻击。

一个成功的 DC 15 智力 (调查) 检定会发现寺庙中一座蛇形雕像下的秘密空间和一条通道。空间内是飞地的宝藏，包括800金币、100白金、2颗价值500金币的浑浊绿宝石、一条由22颗每颗价值20金币的绿玉髓珠组成的项链，以及2张 法术卷轴，分别是 en=Levitate 和 en=Call Lightning。通道通向蛇人们离开建筑群而不经过墓穴的出口。出口被小心翼翼地隐藏在一片岩石和灌木丛后面，距废墟广场入口一百码处。`,spotlightRefs:[],presentNpcIds:["npc_varram","npc_neronvain"],availableInfoIds:[],encounterIds:["enc_rot_129"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`如果角色们在之前与蛇人或蜥蜴人的战斗中提到了他们寻找瓦拉姆，那么蛇人畸形牧师会把瓦拉姆的龙牙匕首架在矮人的脖子上。
当角色们离开这个飞地时，它将会被归还。
如果角色们拒绝了她的提议，女祭司会尝试使用en=Suggestion法术来影响她认为的党的领袖。`},{id:"scn_rot_12d",locationId:"loc_rot_125",name:"内洛维",activation:{condition:{type:"always"},priority:0},skeleton:["随着龙后的宝山结尾处天穹城堡的失陷，邪教徒们收集提亚马特贡品的行动严重受挫。","为了弥补这一损失，邪教徒们对迷雾森林的精灵发动了多次袭击，这些袭击由龙语者内洛维和他的伙伴，绿龙楚斯指挥。","完成了对邪教的配额后，龙语者和龙退入了迷雾森林的更深处，留下了被摧毁的精灵飞地。","然而，那些邪教袭击的生还者如果得知绿龙语者是内洛维——被流放的梅兰德拉克国王的儿子，多年前就被认为是死了——会感到非常惊讶。","在一次袭击中，内洛维赢得了一个名叫Galin的精灵的忠诚——这位森林守卫为了结束对他家乡村庄的袭击，向龙语者宣誓效忠。"],flesh:`随着龙后的宝山结尾处天穹城堡的失陷，邪教徒们收集提亚马特贡品的行动严重受挫。为了弥补这一损失，邪教徒们对迷雾森林的精灵发动了多次袭击，这些袭击由龙语者内洛维和他的伙伴，绿龙楚斯指挥。

完成了对邪教的配额后，龙语者和龙退入了迷雾森林的更深处，留下了被摧毁的精灵飞地。然而，那些邪教袭击的生还者如果得知绿龙语者是内洛维——被流放的梅兰德拉克国王的儿子，多年前就被认为是死了——会感到非常惊讶。

在一次袭击中，内洛维赢得了一个名叫Galin的精灵的忠诚——这位森林守卫为了结束对他家乡村庄的袭击，向龙语者宣誓效忠。内洛维接受了，利用Galin对迷雾森林的了解来帮助策划对其他定居点的袭击。到目前为止，Galin对他的内洛维的誓言保持了秘密，尽管他对自己的行为感到巨大的内疚。

在梅兰德拉克国王的指挥下，雾之森林的精灵加强了他们的防御，邪教的攻击已经停止。梅兰德拉克认为威胁已经结束，但他的儿子阿拉加特哈斯不同意。王子阿拉加特哈斯利用翡翠联盟寻找袭击源头的线索，他们得知一个精灵与绿龙一同出现，似乎在指挥这只野兽。阿拉加特哈斯王子和翡翠联盟的德兰·温特哈特都认为更多的攻击即将来临，绿龙的主人可能是邪教的龙语者之一。但两人都没有意识到绿龙语者实际上是阿拉加特哈斯自己的同父异母兄弟内洛维——梅兰德拉克国王的不光彩的次子，被他的人民流放，人们长久以来都认为他已经死了。他们现在寻求冒险者的帮助，以找到这位龙之主宰。

Delaan Winterhound在深水城理事会期间或冒险者们完成另一个章节后返回城市时找到他们。他谈到了理事会上提到的迷雾森林中的龙族入侵，并表示翡翠联盟的代理人一直在Alagarthas王子的支持下工作，以防止新一轮的攻击。由于他的代理人已经遍布迷雾森林，他希望冒险者们前往少数几个在龙族袭击后仍然屹立的定居点之一——一个叫Altand的村庄。如果Delaan认为绿色龙的神秘主人是邪教的龙语者之一的信念是正确的，Altand的生还者可能知道一些有助于找到他的信息。`,spotlightRefs:[],presentNpcIds:["npc_tiamat","npc_neronvain"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[134],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/RoT/015-tod-12-01.webp"}},{id:"scn_rot_12f",locationId:"loc_rot_125",name:"迷雾森林",activation:{condition:{type:"always"},priority:0},skeleton:["本章节发生在迷雾森林——一个被浓雾和雨水所隐蔽的庞大林地。","巨大的云杉树主宰着森林的北端，阿尔坦德就坐落于此——同时也是内洛维和丘斯建立其要塞的地方。","森林中的雾气无处不在。","尽管在建筑物内部可以忽略不计，但森林的所有户外区域都是2。","阿尔坦主要是一个木精灵定居点，几乎与周围的森林无缝融合。"],flesh:`本章节发生在迷雾森林——一个被浓雾和雨水所隐蔽的庞大林地。巨大的云杉树主宰着森林的北端，阿尔坦德就坐落于此——同时也是内洛维和丘斯建立其要塞的地方。森林中的雾气无处不在。尽管在建筑物内部可以忽略不计，但森林的所有户外区域都是2。

阿尔坦主要是一个木精灵定居点，几乎与周围的森林无缝融合。村庄分为两个层次，一些建筑建在地面上，围绕着一座古老的精灵游侠纪念碑。住宅和村庄的神殿建在森林的上层树枝中。精灵们在这些地点之间拉起绳桥，并在树木周围建造了圆形步道。

像许多其他被龙袭击的定居点一样，通过滑轮操作的平台连接了村庄的两个层次，为偶尔进入森林而不是沿着贸易路线袭击人类定居点的兽人提供了极好的防御。然而，这些防御对于飞行的绿龙来说却成了死亡陷阱，导致许多精灵无法迅速到达地面逃脱。

在村庄的三百居民中，超过一半的人在突袭中幸存下来——这与其他地方被袭击的定居点不同，那里龙猎杀了精灵，直到最后一个成年人和孩子。Altand村的许多居民在袭击来临时都在地上。在村庄上层的精灵中，许多人在等待下来时死于龙的有毒气息，或者在恐慌中桥梁和步道坍塌而坠亡。

大多数生还者逃离了现场，对接下来发生的事情知之甚少。然而，通过仔细询问一些村民，角色们可以了解到以下信息：

龙首先俯冲下来并在地上发动攻击。在那次首次袭击中，村庄的受害者几乎有一半死亡。

穿着龙之教团礼服的人类跟随龙，杀死了他们发现的所有人。村庄的牧师站出来领导其他人与龙战斗，但那只野兽将他整个吞下。

一些生还者声称看到一名邪教徒骑在龙背上。大多数人称这个龙骑士是人类，像其他邪教徒一样。然而，有少数人报告说，这个身影的动作有着精灵的优雅。

随着牧师的去世，村庄的守卫加林成为了阿尔坦的领袖。尽管他在战斗中处于前线，但他毫发无损地幸存下来，并成为团结生还者的强大力量。

这次袭击只持续了很短的时间，然后龙出乎意料地撤退了。邪教徒紧随其后，但在逃跑时，他们没有从村庄拿走任何有价值的东西。这与龙的其他袭击形成了鲜明对比，其他袭击都集中在捕获财宝上。

看守人加林是一个看起来紧张的精灵，他有一个黑暗的秘密。村里的人描述他承受着他新领导角色的重担和一百多名村民的死亡——包括他自己的妻子。

对于任何关于加林的问题，角色们被指引到他在村庄上层树枝中的住所。

加林回答了角色们向他提出的任何问题，但他的回应仅仅重复了其他生还者所知的信息。他声称没有看到龙骑士，并且不相信那些说他们看到了的人，认为这些报告是袭击期间恐惧和混乱的结果。一个成功的DC 18感知（洞悉）检定揭示了这位精灵守卫在隐瞒信息。如果他被逼问，他会承认自己看到了龙杀害了他的妻子，并因未能救她而深感内疚。随后一个成功的DC 16感知（洞悉）检定揭示了即使这也不是全部真相，但如果角色继续追问，加林会感到不悦。

尽管类人生物目击者对他们所知的攻击有限，但角色们可以利用其他潜在资源。通过使用en=Speak with Plants法术，角色们可以获取树木自身的感受和记忆。尽管这个法术只允许其对象回忆起前24小时的印象，但Altand的树木可以报告说，在前一晚晚些时候，它们目睹了Galin悄悄地离开村庄，伴随着他的宠物乌鸦消失在树林中。自从袭击以来，Galin几乎每晚都进行这样的旅行，向内洛维提供其他精灵定居点的信息，而龙语者正在利用这些信息来计划他的下一轮攻击。

记住，动物的智力不像类人生物那样善于表达，可能需要巧妙地诱导乌鸦描述一个可能吓到它的场景。

角色们也可能选择观察并在加林的深夜外出中跟随他。那晚内洛维并没有出现，但守卫预先安排的会面地点是一片被压平的灌木丛，显然有龙在那里降落过不止一次。

如果加林面对针对他的证据，他会公开指控冒险者们（如果必要的话）与邪教有勾结，并试图破坏阿尔坦生还者的意志。

加林不会对恐吓作出回应。然而，有效的角色扮演可以用来触动他的内疚感。如果他因妻子的死而得到同情——而不是指责——这位监狱长最终崩溃了。他承认，在看到他的妻子被杀后，他在战斗中面对面地遇到了内洛维，并乞求自己的生命，承诺以任何东西作为交换。内洛维接受了监狱长的提议，同意饶恕加林并让Altand保持完整，作为交换，他要求提供下一轮邪教袭击目标的其他定居点的信息。

加林不知道绿龙语者的身份，也不知道内洛维和Chuth的巢穴位置。然而，从会面地点，他一直在观察

龙朝正东南方向飞去，他注意到龙语者的衣服和头发经常是湿的。

内洛维的要塞位于阿尔坦东南方向三十英里处，穿过茂密且充满雾气的森林。

如果他们前去调查，他们会看到一位受人尊敬的老妇人，她的腿被一棵沉重的倒下的树压住了。她看到队伍时便呼救。这位德鲁伊是这片森林的守护者。

三棵启蒙树木隐藏在附近的其他树木中——其中一棵故意且无害地倒在了德鲁伊身上，让她可以假装受伤并吸引角色们到她身边。她正确地猜测这群人正在寻找龙，并希望给予他们一个恩惠以帮助他们对抗她森林中的这一祸害，但她首先想要测试他们的性格强度。她不会帮助那些不帮助他人的人。

只要角色们佩戴这些花环，他们在接近内洛维的要塞时，对楚斯的动物间谍（龙穴周围注入的魔法的一部分）就是隐形的。此外，第一次佩戴花环的角色面对楚斯时，会从花环中感受到一股温暖涌动，并且自动成功通过对抗龙的骇人威仪的豁免检定。

它们会战斗至死，因为德鲁伊变成了一只猫头鹰并飞走了。

在距离丘斯的巢穴四分之一英里处，开始能看到细缕的蛛网，几乎隐形地悬挂在雾蒙蒙的空气中。这些蛛网标志着龙的巢穴与一窝蜘蛛的狩猎场之间的重叠区域。蛛网与森林中浓密的迷雾相结合，使得巢穴周围的区域直到队伍抵达水池（区域1）之前，都处于2和3状态。由于蛛网是潮湿的，它们不易被烧掉。直接使用火焰可以摧毁蛛网，但火焰不会在它们之间蔓延。一个手持火把的角色可以使用一个动作来清除触及范围内的蛛网。

任何穿越蛛网的动作都会惊动潜伏在附近的3个伊特怪和7个巨蜘蛛。伊特怪使用网套攻击，而蜘蛛则利用蛛网落入队伍中间。如果杀死了两个伊特怪或五只蜘蛛，其余的会逃跑。`,spotlightRefs:[],presentNpcIds:["npc_neronvain"],availableInfoIds:[],encounterIds:["enc_rot_12f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[134],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`你走进一间悬挂在铁一般坚硬的枝条间的简陋小屋，进入一个舒适的客厅。一位苗条的精灵坐在桌旁，当一只乌鸦在附近的笼子里发出可怕的叫声时，他站起来迎接你，勉强露出微笑。"欢迎来到我们的村庄，"精灵说。"我能为您提供什么帮助？"

你们用尽全力抬起这棵树，知道如果树干向你们移动，你们将置身于危险之中。但是就在你们快要把那位女士解救出来的时候，树开始自行升起。附近另外两棵树沿着地面向后移动，当精灵站起来微笑时，没有显示出任何受伤的迹象。
"终于来了英雄！"她说。"有多少人会在森林中看到陌生人时退缩在恐惧之中，或者在帮助别人之前先考虑自己的安全？我赐予你们我的祝福。愿你们的心在其他人害怕踏足的地方证明是真诚的。"
那位女士从她的头发中摘下花朵，你敢肯定刚才那里还没有花，然后她用手指灵巧地将它们编织成花环，就像变魔法一样。她把一个花环放在你们每个人的脖子上，然后突然变成了一只猫头鹰。她唤醒的树仆跟着她踏入森林。`,dmGuidance:`如果角色们使用en=Speak with Animals来询问乌鸦，他们会得知加林在前一晚走进了森林一英里多，面对面地遇到了绿龙楚斯和他的骑手。
如果角色们可以使用en=Zone of Truth或类似的魔法，他会断然拒绝参与任何进一步的询问。
当角色们寻找龙语者和他的龙时，他们遇到了一位老德鲁伊，并且必须应对蜘蛛哨兵。
当角色们穿过森林时，他们听到一棵大树折断的嘎吱声，紧接着是一位女性的声音呼救。
如果角色们毫无保留地帮助德鲁伊，请阅读以下内容。
如果角色们忽视了德鲁伊，她在他们离开时会可怜地呼救，当他们消失时，她发出最后一声对他们懦弱的哀叹。
如果冒险者攻击德鲁伊，觉醒的树木会发动攻击。
当角色们前进时，蛛网变得更为密集，并显示出困在其中的鸟类和动物。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_13a",locationId:"loc_rot_13a",name:"内罗瓦因的要塞",activation:{condition:{type:"always"},priority:0},skeleton:["绿龙语者在迷雾森林的一个洞穴群中为自己和楚斯建立了一个要塞，入口隐藏在一道高崖上倾泻而下的瀑布后面。","这条绿龙占据了要塞中最大的洞穴，作为它的众多巢穴之一。","内洛维由一群邪教徒保镖护卫，而楚斯则赢得了一些双头巨人的帮助来守卫据点。","这条龙还控制着一群惊恐的精灵囚犯内洛维，这些囚犯是他们在一次突袭中带回来的，他们为龙和龙语者战斗，除非能说服他们逃跑。","Chuth是一只成年绿龙。"],flesh:`绿龙语者在迷雾森林的一个洞穴群中为自己和楚斯建立了一个要塞，入口隐藏在一道高崖上倾泻而下的瀑布后面。这条绿龙占据了要塞中最大的洞穴，作为它的众多巢穴之一。

内洛维由一群邪教徒保镖护卫，而楚斯则赢得了一些双头巨人的帮助来守卫据点。这条龙还控制着一群惊恐的精灵囚犯内洛维，这些囚犯是他们在一次突袭中带回来的，他们为龙和龙语者战斗，除非能说服他们逃跑。

Chuth是一只成年绿龙。内洛维的具体数值可以在附录D中找到。

要塞内的秘门只不过是房间之间的裂缝，仅够中型生物挤过。它们被松散的岩石或其他掩护物所遮蔽，需要通过一个 DC 14 感知（察觉）检定才能发现。

要塞通常是黑暗的，除非另有说明。`,spotlightRefs:[],presentNpcIds:["npc_neronvain"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`【无人在家】当角色们接近要塞时，有可能Chuth离开了洞穴去狩猎，或者他和内洛维出去侦查未来的袭击。你可以随机决定这一点，或者允许角色们在要塞视线范围内躲藏起来，简单地等待龙和龙语者离开。
将Chuth和内洛维从要塞中移出，进行初步的突袭，可以让角色们在没有即将到来的龙攻击的压力下探索并消灭守卫。即使对于高级角色来说，这个地牢也是一个艰难的冒险，尤其是考虑到Chuth在他的巢穴中可以使用的传说行动。如果龙意识到了冒险者的接近，直接正面攻击很可能是一次自杀任务。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_141",locationId:"loc_rot_13a",name:"1. 池塘",activation:{condition:{type:"always"},priority:0},skeleton:["瀑布底部的水池中心深20尺，其表面被翠绿色的雾气所笼罩，标志着这里是一条绿龙的巢穴。","一个陡峭的斜坡从瀑布后的洞穴下降到区域2的入口，其表面因翻滚的雾气而变得湿滑。","失败意味着角色从斜坡上翻滚40英尺，受到9（2d8）钝击伤害。","使用绳索下降斜坡的角色可以安全地完成此动作。","它会在洞穴的入口处等待，紧贴在入口附近的墙壁上。"],flesh:`瀑布底部的水池中心深20尺，其表面被翠绿色的雾气所笼罩，标志着这里是一条绿龙的巢穴。

一个陡峭的斜坡从瀑布后的洞穴下降到区域2的入口，其表面因翻滚的雾气而变得湿滑。角色必须成功通过一个DC 12敏捷（特技）检定或一个DC 12力量（运动）检定才能攀爬或爬下斜坡。失败意味着角色从斜坡上翻滚40英尺，受到9（2d8）钝击伤害。使用绳索下降斜坡的角色可以安全地完成此动作。

它会在洞穴的入口处等待，紧贴在入口附近的墙壁上。一个成功通过DC 20 感知（察觉）检定的角色会注意到洞穴内的动静，但无法辨别那是什么（或它可能是什么大小的生物）。

Chuth使用他的盲视（盲视）来探测角色们何时接近洞穴的入口。然后他穿过瀑布，从角色们上方飞过，同时使用他的毒气吐息进行攻击，如果没有人注意到他，他会在突袭中攻击。没有佩戴花环的角色也会暴露在龙的骇人威仪中。在对抗骇人威仪的豁免检定失败的角色可能会逃回森林，那里可能有蜘蛛在等待。在龙的下一个回合，它退回到区域2，等待英雄们的下一步行动。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`如果角色们戴上德鲁伊给他们的花环，Chuth就无法察觉他们的接近，允许他们安全地通过这个区域进入洞穴。
如果冒险者们没有收到花环，或者他们在进入舒斯巢穴四分之一英里范围内时因任何原因摘下了花环，龙所拥有的众多动物间谍会向它报告队伍的到来。`},{id:"scn_rot_143",locationId:"loc_rot_13a",name:"2. 岛屿大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个大型洞室有一个40尺高的天花板，上面布满了巨大的钟乳石，地面上散布着较小的石笋。","洞室东南角有一个小岛的水池，由岩石间滴下的水流补给。","洞室的西南面是一个25尺高的峭壁，其中一部分是区域4。","这个水池深50尺，岛屿是一根从其底部升起的石柱。","在东南方，湖面下方25尺处，一条20尺宽的水下通道通向Chuth在区域10的巢穴。"],flesh:`这个大型洞室有一个40尺高的天花板，上面布满了巨大的钟乳石，地面上散布着较小的石笋。洞室东南角有一个小岛的水池，由岩石间滴下的水流补给。洞室的西南面是一个25尺高的峭壁，其中一部分是区域4。

这个水池深50尺，岛屿是一根从其底部升起的石柱。在东南方，湖面下方25尺处，一条20尺宽的水下通道通向Chuth在区域10的巢穴。

他们正期待更多的邪教徒到达巢穴，精明的角色或许能够通过虚张声势或角色扮演来欺骗他们。精灵们要求角色们提供姓名，并询问他们认为只有真正的邪教徒才知道答案的问题，包括知道邪教领袖的身份和其等级结构。

即使最初被愚弄了，如果角色们开始提出邪教徒应该知道的问题（包括关于内洛维、楚斯或要塞的问题），精灵们会变得怀疑。在这种情况下，精灵们会大声呼救并立即发动攻击。

在这里的任何战斗都会吸引3号、4号区域以及5的生物，它们会如下文所述参与战斗。Chuth从池塘中出现，并在3回合后加入战斗。

然后他会猛击下来，对精灵比其他任何类人生物更加集中地进行近战攻击。如果使用吐息武器可能会伤害或妨碍他的盟友，Chuth会克制不用。

龙的咆哮标志着为楚斯和内洛维服务的仆人们开始对冒险家们进行伏击的战斗。精灵们从区域4的峭壁上射箭，而双头巨人和邪教徒则在他们的主人旁边进行近战。有关生物统计和信息，请参见区域3、4和5。内洛维从邪教徒后面远程攻击，紧贴区域5和6的入口。

当躲藏在水下时，这条龙处于2（重度遮蔽）状态。丘斯是水陆两栖生物，可以在水下使用其任何攻击以及巢穴动作。游泳通过水下通道的角色可能会突然被水下藤蔓束缚，使他们成为龙息武器的易受攻击目标，或者如果他们无法挣脱，将面临溺水的风险。

如果内洛维的生命值降至54点，他会召唤Chuth到他身边并消耗一瓶治疗药水。如果Chuth的生命值降至78点，他同样会在战斗中寻找内洛维。然后两人一起退回到区域10，通过水池。`,spotlightRefs:[],presentNpcIds:["npc_neronvain"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[137],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`如果角色们没有惊动Chuth，他们接近时，一群精灵守卫（3个平民和1个贵族）站在这个区域的西北入口，出于恐惧被迫为龙服务（见区域4）。
如果角色们在水池被丘斯攻击，这条龙会在这个区域的天花板上附着，一旦角色们进入洞穴就立即使用他的吐息武器对角色们进行攻击。
如果角色们杀死或使所有内洛维和丘斯的仆人失能，这条龙会躲藏在水池中，并在其吐息武器每次充能完毕时现身。`},{id:"scn_rot_145",locationId:"loc_rot_13a",name:"3. 双头巨人巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个肮脏的房间仅有三个巨大的垃圾堆，堆放在西墙边。","这里是3个双头巨人的家，它们彼此憎恨。","通过一些巧妙的角色扮演，角色们可能能够煽动双头巨人相互战斗。","食人魔族的领袖是一位名叫Grunda-Gurga的女性。","她拥有一条山丘巨人力量腰带，但她错误地将其作为腰带佩戴，没有获得它的任何好处，也没有意识到它的魔法潜力。"],flesh:`这个肮脏的房间仅有三个巨大的垃圾堆，堆放在西墙边。这里是3个双头巨人的家，它们彼此憎恨。

通过一些巧妙的角色扮演，角色们可能能够煽动双头巨人相互战斗。这会消耗每个双头巨人21点生命值，并让他们忙于摔跤和呼喊10分钟。

食人魔族的领袖是一位名叫Grunda-Gurga的女性。她拥有一条山丘巨人力量腰带，但她错误地将其作为腰带佩戴，没有获得它的任何好处，也没有意识到它的魔法潜力。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_145"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`如果冒险者能不被发现地来到这里，这些ettins会认为他们是更多愚蠢的人类邪教徒在做愚蠢的人类事情。
当角色们经过时，它们会忽视他们，继续相互推搡。`},{id:"scn_rot_146",locationId:"loc_rot_13a",name:"4. 精灵区",activation:{condition:{type:"always"},priority:0},skeleton:["通往这个区域的隧道上升了20尺，以一扇破旧的木门结束，这是精灵们建造的，用来挡住一些双头巨人的气味。","这个区域位于一个开阔的悬崖顶端，其东北边缘可以俯瞰区域2。","内洛维和楚斯在迷雾森林的袭击中带回了一打精灵作为俘虏——8名平民，3名偶尔与内洛维交谈的魔法师，以及楚斯玩弄的一名骑士和一名贵族们。","只要没有警报被触发，精灵们不愿攻击可能是内洛维或Chuth的客人，但他们仍然保持怀疑。","精灵们十分畏惧古斯，而这狡猾的巨龙已说服他们，只要他们忠诚，他最终会释放他们。"],flesh:`通往这个区域的隧道上升了20尺，以一扇破旧的木门结束，这是精灵们建造的，用来挡住一些双头巨人的气味。这个区域位于一个开阔的悬崖顶端，其东北边缘可以俯瞰区域2。

内洛维和楚斯在迷雾森林的袭击中带回了一打精灵作为俘虏——8名平民，3名偶尔与内洛维交谈的魔法师，以及楚斯玩弄的一名骑士和一名贵族们。

只要没有警报被触发，精灵们不愿攻击可能是内洛维或Chuth的客人，但他们仍然保持怀疑。

精灵们十分畏惧古斯，而这狡猾的巨龙已说服他们，只要他们忠诚，他最终会释放他们。需要令人信服的角色扮演和进行一次DC 17的魅力（游说）检定来说服精灵们逃离，而不是等待巨龙最终厌倦并吃掉他们。

一个古老的神龛矗立在洞穴的西南角，展示了一位年轻女性人类手持一个盆。一个成功的 DC 15 智力（宗教）检定可以认出这是瀑布女神埃尔达斯的神龛。水从天花板的裂缝中流下，落在了雕像的头上，然后流入盆中。漫长的岁月在雕像的脸上蚀刻出了细白的线条，仿佛泪痕。

女神Eldath仍在这座神祠中倾听。角色们如果祈求她在对抗龙的战斗中给予帮助，可以根据你的决定获得恩惠，包括en=Water Breathing、en=Bless或其他有用的法术。`,spotlightRefs:[],presentNpcIds:["npc_neronvain"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:`如果角色们未被发现地进入了洞穴，任何不在守卫岗位上的精灵（见区域2）都在这里。
如果角色们从德鲁伊那里获得了花环并将它们戴在精灵们身上，这将会自动说服他们安全逃离。`},{id:"scn_rot_148",locationId:"loc_rot_13a",name:"5. 邪教徒公共室",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域被粗糙雕刻的墙壁烛台中的火把照亮。","由劈开的原木制成的长桌是邪教徒们坐着吃饭或自娱自乐的地方。","一个烹饪火在房间中央燃烧，它的烟雾升到中央洞穴，然后从洞穴中排出。","如果警报没有被拉响，这里会有5名龙爪和1名龙牙邪教徒（见附录D）在休闲。","除非角色们穿着邪教服饰并且能够有效地进行角色扮演，否则邪教徒会立即将他们识别为入侵者并发起攻击。"],flesh:`这个区域被粗糙雕刻的墙壁烛台中的火把照亮。由劈开的原木制成的长桌是邪教徒们坐着吃饭或自娱自乐的地方。一个烹饪火在房间中央燃烧，它的烟雾升到中央洞穴，然后从洞穴中排出。

如果警报没有被拉响，这里会有5名龙爪和1名龙牙邪教徒（见附录D）在休闲。除非角色们穿着邪教服饰并且能够有效地进行角色扮演，否则邪教徒会立即将他们识别为入侵者并发起攻击。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_148"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_149",locationId:"loc_rot_13a",name:"6. 教徒宿舍",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域里充满了简陋的床铺、睡袋和背包。","如果警报尚未响起，这里有5个龙爪和1个龙牙邪教徒在睡觉（见附录D）。","在双层床的床垫下隐藏着总共30金币，120银币，23铜币，以及200铜板，外加一根来自博德之门的重5磅的银条（价值20金币）。"],flesh:`这个区域里充满了简陋的床铺、睡袋和背包。如果警报尚未响起，这里有5个龙爪和1个龙牙邪教徒在睡觉（见附录D）。

在双层床的床垫下隐藏着总共30金币，120银币，23铜币，以及200铜板，外加一根来自博德之门的重5磅的银条（价值20金币）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_149"],treasureSlotIds:["trs_rot_149_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_14b",locationId:"loc_rot_13a",name:"7. 储藏室",activation:{condition:{type:"always"},priority:0},skeleton:["这个邪教在这里存放了相当数量的食物和酒精。","从这些储备的数量来看，内洛维正计划对雾之森林的精灵进行一系列长期的攻击。","食物大多是常见的食物，但内洛维的个人储备包括8瓶永恒甘露，每瓶价值100金币。","由于与精灵岛屿永聚岛的接触非常罕见，所以很容易找到买家。"],flesh:`这个邪教在这里存放了相当数量的食物和酒精。从这些储备的数量来看，内洛维正计划对雾之森林的精灵进行一系列长期的攻击。

食物大多是常见的食物，但内洛维的个人储备包括8瓶永恒甘露，每瓶价值100金币。由于与精灵岛屿永聚岛的接触非常罕见，所以很容易找到买家。`,spotlightRefs:[],presentNpcIds:["npc_neronvain"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_rot_14b_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_14d",locationId:"loc_rot_13a",name:"8. 内罗恩韦因的房间",activation:{condition:{type:"always"},priority:0},skeleton:["内洛维在这个粗糙的洞穴中创造了一个郁郁葱葱的生活空间，用他从袭击中精选的艺术和手工艺品来装饰。","丰富的地毯和挂毯覆盖了洞穴的地板和墙壁，洞穴内有一个砍制的原木床、一个大镜子和一个箱子。","通往这个房间的入口隧道由一个与内洛维调谐的en=Glyph of Warding保护。","如果除了内洛维之外的任何人踏入刻文5英尺范围内，它会爆发。","如果内洛维在要塞内，只有在角色们设法在没有进行任何战斗或引起任何警报的情况下到达这么远的地方时，才能在这个区域找到他。"],flesh:`内洛维在这个粗糙的洞穴中创造了一个郁郁葱葱的生活空间，用他从袭击中精选的艺术和手工艺品来装饰。丰富的地毯和挂毯覆盖了洞穴的地板和墙壁，洞穴内有一个砍制的原木床、一个大镜子和一个箱子。

通往这个房间的入口隧道由一个与内洛维调谐的en=Glyph of Warding保护。一个DC 14智力（调查）检定可以发现这个刻文。如果除了内洛维之外的任何人踏入刻文5英尺范围内，它会爆发。所有在刻文20英尺范围内的生物必须进行一次DC 14敏捷豁免，豁免失败则受到22点（5d8）酸伤害，豁免成功则受到一半伤害。

如果内洛维在要塞内，只有在角色们设法在没有进行任何战斗或引起任何警报的情况下到达这么远的地方时，才能在这个区域找到他。否则，当他进入与角色们的战斗时才会遇到他。

然而，角色们应该意识到这些物品是被偷走的精灵的合法财产。

象鼻被一个毒针陷阱保护着，可以通过成功的DC 18智力（调查）检定来发现。如果陷阱被触发，它会进行一次攻击：+10命中，1穿刺伤害，并且角色会遭受一种特殊毒素的影响，必须尝试一次DC 16体质豁免检定。若成功，受影响的区域（通常是被针刺中的手）会在30分钟后变得麻木，1小时后变得透明。再过2小时后，受影响的区域会痛苦地恢复正常，受害者受到27（6d8）毒素伤害。若豁免检定失败，效果如上所述但受害者受到54（12d8）毒素伤害。`,spotlightRefs:[],presentNpcIds:["npc_neronvain"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_rot_14d_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色们能从这个区域收集所有的家具、地毯、挂毯和艺术品，总共价值1500金币。"},{id:"scn_rot_14f",locationId:"loc_rot_13a",name:"9. 秘密通道",activation:{condition:{type:"always"},priority:0},skeleton:["这个秘密房间仅供内洛维个人使用。","一个供奉给芬马雷尔·梅斯塔林的小神祠——他是精灵之神，代表着被遗弃者、替罪羊和孤独——看起来像一对白色眼睛，从上方的小盆子上方的黑暗墙壁中窥视出来。",'这里还有一本日记，揭示了内洛维与梅兰德拉克国王的关系，内洛维经常称他为"我可怜父亲"。',"日记还透露了绿龙面具已经在龙井之下，受到赛维林的保护，并准备组装成龙后面具。"],flesh:`这个秘密房间仅供内洛维个人使用。一个供奉给芬马雷尔·梅斯塔林的小神祠——他是精灵之神，代表着被遗弃者、替罪羊和孤独——看起来像一对白色眼睛，从上方的小盆子上方的黑暗墙壁中窥视出来。

这里还有一本日记，揭示了内洛维与梅兰德拉克国王的关系，内洛维经常称他为"我可怜父亲"。日记还透露了绿龙面具已经在龙井之下，受到赛维林的保护，并准备组装成龙后面具。`,spotlightRefs:[],presentNpcIds:["npc_neronvain","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_150",locationId:"loc_rot_13a",name:"10. 楚斯的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["除了龙和内洛维之外，没有人被允许进入这个区域。","沿着东墙是Chuth从迷雾森林的精灵那里收集的财宝的一部分，但与邪教为提亚马特所声称的以及龙在他其他巢穴中所拥有的相比，这只是小巫见大巫。","这里的拱形天花板高达60尺。","如果楚斯在要塞内，他最初只有在角色们到达这么远的地方而没有进行任何战斗或发出任何警报，或者如果他和内洛维退到了巢穴时，才会在这里被发现。","如果在此处遇到丘斯，他会不加区别地使用他的吐息武器、传说行动和巢穴行动。"],flesh:`除了龙和内洛维之外，没有人被允许进入这个区域。沿着东墙是Chuth从迷雾森林的精灵那里收集的财宝的一部分，但与邪教为提亚马特所声称的以及龙在他其他巢穴中所拥有的相比，这只是小巫见大巫。这里的拱形天花板高达60尺。

如果楚斯在要塞内，他最初只有在角色们到达这么远的地方而没有进行任何战斗或发出任何警报，或者如果他和内洛维退到了巢穴时，才会在这里被发现。如果在此处遇到丘斯，他会不加区别地使用他的吐息武器、传说行动和巢穴行动。他试图将强力的近战战斗者推回墙壁，然后制造一堵荆棘墙将他们围起来。

因为这只是他总财宝的一小部分，Chuth对保护它没有兴趣。当他的生命值减少到一半或更少时，他会逃跑。内洛维战斗到类似程度，然后前往Chuth并说服龙逃离洞穴。

楚斯的小宝藏包括来自博德之门的十个金条，每个价值50金币，外加10枚珍珠，120金币，2400银币和8000铜币。你也可以在宝藏中添加一些有用的药水或卷轴。`,spotlightRefs:[],presentNpcIds:["npc_neronvain","npc_tiamat"],availableInfoIds:[],encounterIds:["enc_rot_150"],treasureSlotIds:["trs_rot_150_0"],eventIds:["evt_tod_neronvain_identity"],tone:"tension",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_153",locationId:"loc_rot_153",name:"教团反击",activation:{condition:{type:"always"},priority:0},skeleton:["在这次冒险的过程中，英雄们进行各种活动以挫败龙之邪教的阴谋。","不管怎样，邪教很快就将角色们视为必须消除的威胁。",'像"第9章：深水城议会"一样，这一章是作为独立的遭遇来展开的。',"然而，这些攻击如果被整合到其他章节中，而不是在章节之间展开，效果会更好。","考虑其他章节的节奏和这些遭遇的安排，以便邪教的攻击可以随着时间分散开来。"],flesh:`在这次冒险的过程中，英雄们进行各种活动以挫败龙之邪教的阴谋。不管怎样，邪教很快就将角色们视为必须消除的威胁。

像"第9章：深水城议会"一样，这一章是作为独立的遭遇来展开的。然而，这些攻击如果被整合到其他章节中，而不是在章节之间展开，效果会更好。

考虑其他章节的节奏和这些遭遇的安排，以便邪教的攻击可以随着时间分散开来。特别是，第三次攻击应该被安排在最有效的时机。

邪教的攻击可以在任何地方发生，但角色们在自己的地盘上风险最大。邪教希望它的敌人知道他们在哪里都不安全。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[140],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们玩了龙后的宝山，邪教对角色们反对他们目标的意识甚至会更早开始。
如果角色们在看似安全的环境中分开执行不同的任务，邪教几乎肯定会发动攻击。
【角色死亡】角色死亡应该始终谨慎处理，但在这个冒险中不要害怕杀死队伍成员。角色们的等级应该足够高，能够施放en=Raise Dead，或者能够从他们的盟友那里寻求这样的魔法。特别是如果他们经历了龙后的宝山的冒险，角色们有充分的机会向竖琴手组织、战锤秩序以及其他派系证明他们的价值。`,mapGeometry:{imageRef:"adventure/RoT/018-tod-13-01.webp"}},{id:"scn_rot_155",locationId:"loc_rot_153",name:"首次攻击",activation:{condition:{type:"always"},priority:0},skeleton:["邪教对英雄们的第一次攻击是一种旨在发出警告的审慎攻击。","这次袭击可以发生在任何地方。","邪教并不关心无辜的旁观者，但如果不涉及惊慌失措的人群，这次遭遇对你来说会更容易进行。","这次战斗遭遇应该发生在之前的战斗消耗了角色们一些资源之后，但在他们完成长休之前。","根据队伍的强度调整邪教对角色发起的攻击。"],flesh:`邪教对英雄们的第一次攻击是一种旨在发出警告的审慎攻击。

这次袭击可以发生在任何地方。邪教并不关心无辜的旁观者，但如果不涉及惊慌失措的人群，这次遭遇对你来说会更容易进行。这次战斗遭遇应该发生在之前的战斗消耗了角色们一些资源之后，但在他们完成长休之前。

根据队伍的强度调整邪教对角色发起的攻击。使用来自第一波攻击邪教部队表中的敌人，按照地牢大师特瑞的指南中的指导构建这次第一波攻击为一个艰难的遭遇战。

教团成员试图用以下两种不同的计划之一进行突袭。您可以自由调整这些计划之一或制定您自己的计划。假设教团成员已经观察角色几天了，或者已经通过其他间谍了解了他们的目标。

更微妙的方法是他们分批伪装成客人进入旅馆，然后在角色们人数不足且被包围时发动攻击。龙不太可能进入旅馆建筑，而是选择通过窗户使用它的吐息武器，或者攻击任何走出室外的角色或旁观者。

或者，教团成员可能在白天保持一定距离跟随队伍，然后在角色们停下来过夜休息时靠近。在黑暗中或黎明时分发动突袭特别危险，这给龙提供了完全的行动自由，并有可能使一些队伍成员在睡觉或未穿盔甲时遭受攻击。

由于教团低估了英雄们的实力，这次首次袭击注定会失败。然而，请尽量确保至少有一个教团成员逃脱并报告所发生的事情。如果没有人活着离开，留下迹象表明其他教团成员原本作为增援在旁观望，但在原始力量被压倒时逃跑了。

确保角色们明白这次袭击的意图。如果根据袭击的情况合理，教团成员将穿着全套礼服，包括面具和龙翼斗篷。在他们最后一口气时，垂死的教团成员应该诅咒角色们，并大喊：'龙升天了！你们阻止不了我们！'

角色们在这一章节结束时获得一个等级。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[140],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们住在旅馆，教团成员可能会选择直接攻击，撞破前门。
当角色们在旅行时，教团成员可以赶到他们前面并设置伏击。`},{id:"scn_rot_15d",locationId:"loc_rot_153",name:"第二次攻击",activation:{condition:{type:"always"},priority:0},skeleton:["第一次袭击表明，英雄们是一个比教团所相信的更为危险的威胁。","在这第二次遭遇中，一股更强大的教团力量发起攻击以求致命一击。","将这次遭遇安排在角色们不是最强大或准备最充分的时刻。","等到他们分散开来，他们的法术和特性因之前的战斗而耗尽，或者他们受伤且治疗不足。","这样的袭击使角色们处于极大的劣势，但也强化了龙之教团想要冒险者死亡的意图。"],flesh:`第一次袭击表明，英雄们是一个比教团所相信的更为危险的威胁。在这第二次遭遇中，一股更强大的教团力量发起攻击以求致命一击。

将这次遭遇安排在角色们不是最强大或准备最充分的时刻。等到他们分散开来，他们的法术和特性因之前的战斗而耗尽，或者他们受伤且治疗不足。特别是，如果袭击发生在长休期间但在角色们完成休息之前，他们还没有恢复全部的生命值、法术和其他资源。这样的袭击使角色们处于极大的劣势，但也强化了龙之教团想要冒险者死亡的意图。

一个戏剧性的地点最适合这次攻击。教团成员不仅想要消除威胁，他们还想要向所有反对他们的人传达一个信息。在重要的公共建筑如主要的寺庙或宫殿发动攻击，宣称没有地方对教团来说是安全的；而在大型市场或皇家花园发动袭击，则确保了有最多的目击者。

第二次攻击力量由一个由龙魂教团成员领导的团队组成（见附录D）。如果这是一场与角色们处于或接近全力状态的孤立战斗，选择对手以创造一个致命的遭遇。

不要犹豫使用可能杀死一个或多个角色的力量。摧毁英雄是这次攻击的目标，如果死亡的风险感觉不真实，玩家们就不会认真对待教团的威胁。

由于那场战斗中的生还者，这些攻击者比第一组人更了解他们的目标。

袭击者在角色们参观一个重要的、挤满了无辜旁观者的地点时发起了进攻。黑龙首先撕掉了一部分屋顶，以尽可能地制造恐怖。梅佐洛特们使用en=Cloudkill来包围角色们，并不在乎被卷入攻击的NPC。

在市场、花园或其它户外地点的袭击以黑龙和一只或多只飞行的征伐罗斯魔出现在头顶开始，以制造恐慌。教团成员挂在龙身上，但他们下降与队伍进行近战，而龙在上方盘旋，使用其吐息武器，并在其吐息武器仍在重新充能的回合中使用其骇人威仪效果。当人群限制了角色们的移动时，毒虫罗斯魔可以轻松快速地通过人群进行传送。

不要害怕让领导攻击的龙魂教团成员进行一些胜利的独白。无论攻击者是赢是输，教团成员在战斗中高呼"龙升天了！"和"我们势不可挡！"在某个时刻，领导者会泄露重要信息："面具已联合，召唤已发出！很快九层地狱之门将敞开，她将归来！"

与对冒险者的第一次袭击一样，如果攻击者被击败，请尽量确保至少有一个人逃脱以报告战斗的结果。最容易的是，如果战斗对它不利，龙可以飞走。

这些尤格罗斯魔是被红袍法师召唤并由教团支付报酬来杀死冒险者的，但它们对资助者没有忠诚。如果一个尤格罗斯魔在一次攻击中受到的伤害超过其剩余生命值的一半，它将在下一回合退出战斗。如果它还没有尝试召唤另一个尤格罗斯魔，它会立即这么做。如果它已经使用了那个能力，它就会简单地逃跑，打算以后与其他生还者重新集结。

由于尤格罗斯魔是雇佣兵，角色们可以尝试用更好的报价来说服他们——一个不仅超出教团支付的价格，而且还涵盖了在战斗中途改变立场所带来的声誉损害。一个不错的起始报价是10,000金币，或者如果超过五个尤格罗斯魔参与战斗，每个尤格罗斯魔2,000金币。

除了伤害旁观者，这次遭遇很容易摧毁建筑物和重要地标。这次强大的攻击应该让人们感受到，如果龙之教团的计划成功，剑海岸将遭受的破坏。

攻击者可能会赢得这场战斗并杀死所有角色。然而，这并不需要结束冒险。战拳教团、竖琴手和翡翠联盟中的治疗师可以将角色们恢复生命，以便他们继续为正义力量而战。令人惊讶的是，在这场战斗中死去可能会给角色们带来优势。当攻击者向赛维林报告那些多管闲事的冒险者已经死了时，他们将被视为不再构成威胁。如果复活的角色们努力避开教团间谍的视线，他们对教团的下一次打击可能会完全出乎敌人意料。

角色们在这一事件结束时获得一个等级的提升。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_15d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[141],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果冒险者们因早期的遭遇而变得虚弱，那么目标应该是一场艰难的遭遇。
当角色们被这次袭击分散注意力时，隐形的夜鬼婆趁机进入并发起突袭。`},{id:"scn_rot_166",locationId:"loc_rot_153",name:"第三次攻击",activation:{condition:{type:"always"},priority:0},skeleton:["第二次攻击的目的是彻底消灭英雄们。","如果需要进行第三次攻击，教团将升级到最高级别。","如果没有其他原因，第二次攻击应该让角色们印象深刻，第一次攻击不是侥幸或一次性事件。","他们的项上有一个悬赏。","此外，第二次攻击的强度应该让角色们明白，如果第三次攻击比第二次更强大，他们将无法生存。"],flesh:`第二次攻击的目的是彻底消灭英雄们。如果需要进行第三次攻击，教团将升级到最高级别。

如果没有其他原因，第二次攻击应该让角色们印象深刻，第一次攻击不是侥幸或一次性事件。他们的项上有一个悬赏。此外，第二次攻击的强度应该让角色们明白，如果第三次攻击比第二次更强大，他们将无法生存。

这次攻击可以发生在角色们停留或经过的任何定居点。理想情况下，选择一个或多个角色拥有家园或家人的地点。

第二次教团攻击之后，允许角色们在教团对他们的生命进行这最后的企图之前完成一到两个冒险章节。因为这次攻击是一次全面突击，角色们应该有完全的使用法术、治疗和其他资源的权限。

足够多的色彩龙响应了德拉霍恩的的召唤，以至于可以派出一整队年轻的红龙来一劳永逸地对付英雄们。为了这次最后的突击，邪教用一些邪教徒、半龙人和红袍法师（法师）来加强红龙的力量，他们是拉斯·莫达尔分裂派系的成员。邪教徒和红袍法师骑在红龙的背上到达。

此刻，邪教徒已了解角色的战斗方式，你也是。有时玩家能塑造出比基础游戏数值更坚韧的角色团队。若你的团队正是如此，在选择进攻部队时需将此纳入考量。

这次遭遇应该在各个方面都挑战冒险者。角色们不应该轻易成为攻击力量的对手，以至于撤退和逃跑可能是他们希望生存的最佳选择。然而，如果角色们事先没有制定逃跑计划，攻击者将采取措施使撤退变得不可能。具体情况由你决定，但应该基于遭遇区域的任何明显特征。后门和已知的下水道入口等标准逃生路径将被监视，角色们以前使用过的战术也将被了解。只有特殊的逃生路线——比如只有宫殿最信任的仆人才知道的秘密通道——才会让教团成员和红袍法师感到惊讶。

由于在之前的攻击中巧妙的诡计和伏击都失败了，教团的第三次攻击选择了压倒性的力量。龙从空中攻击角色，如果他们在室内，试图将他们引到外面。当他们最终面对冒险者时，攻击者为了致命一击而战斗。半龙、教团成员和法师监视所有已知的出口，包括地下的，以防止角色们溜走。

伟大的英雄从失败中反弹，为了他们所信仰的事业而更加努力地战斗。多亏了en=Raise Dead法术，一场失利的战斗只是一个挫折，而不是失败。对于那些认为角色胜利是确定无疑的玩家们来说，这是一个警钟。龙之邪教致力于其目标，并且会不择手段地实现它。角色们必须对他们的目标更加投入。

角色们在这一事件结束时获得一个等级的提升。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[142],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果玩家们没有想到角色们应该采取措施保护自己，一个关心的NPC可以提出建议。
将其设计为致命遭遇——不仅仅依据城主指南中规定的数值。
如果角色试图待在室内并隐藏起来，龙会攻击他们藏身的任何建筑物，将其点燃。`,mapGeometry:{imageRef:"adventure/RoT/019-tod-13-02.webp"}},{id:"scn_rot_16e",locationId:"loc_rot_153",name:"事件顺序",activation:{condition:{type:"always"},priority:0},skeleton:["根据冒险的发展情况，您可以根据需要调整第二和第三次攻击的力量和策略。","例如，您可能想在第三次攻击中再使用尤格罗斯魔，或者您可能希望红袍法师在第二次攻击中出现，而不是第三次。"],flesh:"根据冒险的发展情况，您可以根据需要调整第二和第三次攻击的力量和策略。例如，您可能想在第三次攻击中再使用尤格罗斯魔，或者您可能希望红袍法师在第二次攻击中出现，而不是第三次。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_rot_16f",locationId:"loc_rot_16f",name:"金属龙，觉醒",activation:{condition:{type:"always"},priority:0},skeleton:["当龙之邪教吹响了龙吼号角时，其震动在整个北方都能感受到。","作为回应，许多金属龙开始调查这声音的含义，并从附近的类人文化中收集有关邪教的信息。","其中一条龙，一位名叫Protanther的古老金龙，召唤了一个古老的龙族议会仪式，召集了来自金属龙族的大使们。","在下界山脉的会面中，议会将决定面对即将到来的提亚马特威胁时，金属龙应该采取什么行动。","议会包括来自五种金属龙种族的代表，他们将向他们的同胞传达议会的决定。"],flesh:`当龙之邪教吹响了龙吼号角时，其震动在整个北方都能感受到。作为回应，许多金属龙开始调查这声音的含义，并从附近的类人文化中收集有关邪教的信息。

其中一条龙，一位名叫Protanther的古老金龙，召唤了一个古老的龙族议会仪式，召集了来自金属龙族的大使们。在下界山脉的会面中，议会将决定面对即将到来的提亚马特威胁时，金属龙应该采取什么行动。

议会包括来自五种金属龙种族的代表，他们将向他们的同胞传达议会的决定。对深水城议会的派系特别重要的是，龙是否应该帮助文明的类人种族对抗邪教，或者他们是否会自行行动的问题。

在议会期间，冒险者们有机会与费伦一些最明智和最强大的生物进行交流和辩论。他们必须说服龙类，剑海岸的类人生物的事业是正义的，龙类和非龙类需要在这场冲突中相互支持。

为了促成这样的联盟，角色们可能需要代表不同的派系承诺让步——无论他们是否有这些派系的许可来提供让步。如果他们成功了，冒险者不仅可以获得龙族整体的支持，还可以获得某些议员的特别青睐，包括来自那些龙的宝藏中的价值连城的魔法物品。

细节和条款——包括角色们承诺的任何让步——可以在下一次议会会议上讨论。`,spotlightRefs:[],presentNpcIds:["npc_tiamat"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`当角色们与龙族达成满意的协议后，奥塔里雅卡诺斯提出返回深水城，告知议会协议已经达成。
如果角色们因为不能或不愿满足龙族的要求而未能达成协议，奥塔里雅卡诺斯会飞回他们，但会立即离开深水城。`,mapGeometry:{imageRef:"adventure/RoT/020-tod-14-01.webp"}},{id:"scn_rot_170",locationId:"loc_rot_16f",name:"不太可能的大使们",activation:{condition:{type:"always"},priority:0},skeleton:["根据古老的传统，龙类议会包括来自微小类人种族的大使。","银龙Otaaryliakkarnos——化身为人类Elia——来到深水城理事会，以扩展对龙类议会的邀请，在这一点上，代表们讨论谁应该被派去作为剑海岸类人派系的大使。","作为一个整体上不与任何特定派系或事业结盟的团体，派对被认为是最合适的人选。","从深水城到下界山脉的旅程超过六百英里。","奥塔里利亚卡诺斯愿意赐予角色们一个特别的恩惠，让她背上他们飞行，只需两天即可到达。"],flesh:`根据古老的传统，龙类议会包括来自微小类人种族的大使。银龙Otaaryliakkarnos——化身为人类Elia——来到深水城理事会，以扩展对龙类议会的邀请，在这一点上，代表们讨论谁应该被派去作为剑海岸类人派系的大使。作为一个整体上不与任何特定派系或事业结盟的团体，派对被认为是最合适的人选。

从深水城到下界山脉的旅程超过六百英里。奥塔里利亚卡诺斯愿意赐予角色们一个特别的恩惠，让她背上他们飞行，只需两天即可到达。然而，这个提议只有在冒险者们直接从议会出发，而不是首先处理其他事务时才会被提出。

这次旅行带领角色们穿越了在邪教攻击下受苦的地区。无论是骑马还是通过空中，他们都能见到孤立定居点的废墟和地平线上悬挂的烟雾。在选择旅程应该包含多少次战斗遭遇时，请自行斟酌。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"如果角色们陆路旅行，他们可能会穿过这些被毁的定居点，或者遇到邪教的掠夺者、土匪、难民以及致力于破坏的色彩龙。"},{id:"scn_rot_172",locationId:"loc_rot_16f",name:"龙之议会",activation:{condition:{type:"always"},priority:0},skeleton:["五只古老的龙组成了议会，负责决定他们金属龙族对邪教的反应。","尽管它们不一定是龙类中最明智或最强大的个体，但都备受尊敬。","这些龙议会议员做出的任何决定都将被金属龙族整体接受。","龙类无需评判剑海岸的不同派系，因为他们已经知道他们的声誉和行动。","在这方面，龙类的态度实际上是固定的。"],flesh:`五只古老的龙组成了议会，负责决定他们金属龙族对邪教的反应。尽管它们不一定是龙类中最明智或最强大的个体，但都备受尊敬。这些龙议会议员做出的任何决定都将被金属龙族整体接受。

龙类无需评判剑海岸的不同派系，因为他们已经知道他们的声誉和行动。在这方面，龙类的态度实际上是固定的。然而，他们也知道，在所有类人种族中，领导者经常决定社会的特征。尽管他们明白冒险者们不是任何派系的名义领袖，但龙类已经知道英雄们的行动已经确定了派系对抗提亚马特的战斗进程。因此，如果龙类支持类人生物，这将是对派对的个人信任的声明——以及对派对将所有派系带入战斗的能力的信任。

每位龙族议员在这一章中都有四种态度之一，从不友好到谨慎、中立和友好。为了确保金属龙族整体的合作，队伍必须以至少三位龙族议员持有友好态度且没有不友好态度来结束这一章。一般性让步则为你选择的单个龙族提供一步态度改进。

金属龙非常睿智，但它们有时在区分不同的类人生物个体时会遇到困难。因此，一个个体龙最初的态度取决于队伍的种族构成——以及古老的互动和过去的恩怨。

请参阅"第9章：深水城议会"，了解冒险者为确保金属龙族的忠诚所提供的让步的效果。

雄性金龙

Protanther是议会的领导者。作为曾经的正义之王——这是金龙中的王室头衔——他并不喜欢类人生物，特别是人类和精灵。尽管他看到次等种族中既有好的也有坏的，但他相信，尽管他们身体条件有限，但获得巨大能量的能力使他们变得危险。对于所有他们的能力来说，类人生物几乎没有时间去学习引导这种能力的感知。

这条金龙知道，世界上许多最恶劣的生物起源于为了获得力量而与黑暗势力交易的人类，包括蛇人和提夫林。他认为，人类文明在费伦大陆上的失败循环是人性本质缺陷的标志。此外，他很快指出，人类构成了邪恶大法师和巫妖的大多数——包括创立龙之邪教的Sammaster，以及萨扎斯坦的红袍法师。即使是龙之邪教的现任领袖赛维林，以及该邪教的大多数成员也是人类。

Protanther至少能够欣赏到类人种族的罪行通常都是针对彼此的。他知道许多类人生物的短暂生命意味着他们甚至可能无法认识到自己的邪恶。然而，精灵寿命长久，拥有丰富的知识——过去曾利用这些知识对龙族造成伤害。正是精灵塑造了 龙裔神话 的魔法，导致费伦大陆的龙类陷入狂怒。说服Protanther相信包含精灵在内的类人派系是一项艰巨的任务。

Protanther更希望龙族集结他们的力量，不考虑类人种族的派系，立即并在邪教及其色彩龙盟友能够集结全部力量之前果断出击。如果这样做让类人种族面临风险，那就这样吧。

中立。

Protanther希望精灵族的代表能对那次令人憎恶的龙裔神话事件进行正式道歉。他愿意相信冒险者们能够让梅兰德拉克国王在议会上作出这样的道歉。

雄性黄铜龙

Ileuthra是一只古老的黄铜龙，他穿越各个位面寻找知识和更具挑战性的游戏。传说他与知识之神Oghma同住，但关于这一点，这只龙非常谨慎。

Ileuthra在次等种族中既看到了好的方面也看到了坏的方面，他认为帮助类人种族不是决定他们是否值得帮助的问题，而是更多地关于决定这些冒险者大使是否值得信任，能否妥善地领导这些派系。

Ileuthra没有对最佳方案有先入为主的看法，他愿意听取讨论的所有方面。

中立。伊勒特拉从位面观察了低等种族长达数个世纪，他理解每个类人生物都拥有同等的善恶潜力。他真正地犹豫不决，并将权衡针对邪教的所有行动选项。

伊琉斯拉认为，若类人生物知晓龙面具的下落，这些面具对世界而言将过于危险。

雌性银龙

银龙的代表相信，在次等种族中，好与坏都绝非绝对。类人种族需要保护和引导，应该向他们展示巴哈姆特正义的生活方式，而不是忽视他们，将他们当作孩子对待。如果龙族拒绝参与类人种族的事务，只关注自身的进步，那么类人种族将会持续不断地重复犯同样的错误。

然而，在看待矮人时，Otaaryliakkarnos对类人种族潜力的信心却有一个盲点。她因为古代的屠龙大会而对矮人心存怨恨——在这些大型狩猎活动中，各个氏族会联合起来，以消除对特定龙类所感知到的威胁。几个世纪前，Otaaryliakkarnos的侄女在一次屠龙大会中被杀害，而鉴于金属龙族长久的祖先记忆，她认为所有矮人都应该对此负责。

中立。

Otaaryliakkarnos希望金属龙族现在就按照Protanther的建议出击，但她不确定如果单靠他们自己是否能够成功。一个联盟可以减少所有方的伤亡，但是龙族必须确信各派系及其领袖的意图。

Otaaryliakkarnos知道她被杀害的族人的皮被用来为杀害她的矮人领主制作盔甲。她要求归还遗骸，并要求大使Brawnanvil代表所有矮人对龙猎会造成的错误死亡进行道歉。

雄性青铜龙

在议会中的所有龙中，Nymmurh最强烈地反对Protanther。他知道金属龙是按照巴哈姆特的形象被创造出来的，在善良或邪恶的问题上没有选择的余地。因此，当类人种族自由选择善良，必须有意识地远离邪恶时，善良是多么伟大和珍贵呢？

Nymmurh对类人种族潜力的信念部分是出于他对位于深水城的高贵Silmerhelve家族（包括Dala Silmerhelve；见"第9章：深水城议会"）的喜爱和保护。

Nymmurh愿意帮助各派系，期望竖琴手和战锤秩序能够体现类人种族渴望的最佳特质。

除非队伍在他面前（或他听说的地方）有过问题行为，Nymmurh是友好的。他知道这些角色是因为那些他尊重和喜爱的人推荐才来到议会的。

除非角色们以某种方式冒犯了Nymmurh，否则他不需要任何让步。在这样一种情况下，冒险者们必须以你认为合适的方式证明他们的价值和善良。

雌性铜龙

Tazmikella非常喜欢人类，并且曾在人类中生活了很长时间，但她对于支持各派系有所保留。她的巢穴和宝藏不止一次成为狡猾的小偷和能言善辩的骗子的目标，她将背叛视为类人种族的一个特征。她担心如果一个或多个派系为了向提亚马特证明忠诚而反对金属龙，可能会发生什么。

这条铜龙还相信，类人种族和龙类之间无限制的互动对两个种族都是灾难性的。龙裔神话是两个民族之间经常产生的敌意的痛苦提醒。

Tazmikella同意Protanther的观点，即金属龙可以自己攻击色彩龙。然而，她并不确信他们会成功，而且拥有类人生物盟友可以减少双方的伤亡。

中立。

选择一件派对成员所拥有的魔法物品，这件物品是在之前的冒险中找到的。事实证明，这件物品曾经属于塔兹米凯拉，是她从一个古代黑龙那里夺取的宝藏的一部分。（使用en=Legend Lore或类似魔法对物品进行鉴定可以确认这个故事。）这件物品对她来说有情感价值——或者至少在一个小偷偷走它之前是这样。将物品归还给她并道歉可以改善塔兹米凯拉的态度。

队伍可以向龙群做出一般性的让步以安抚它们，而不是向个别龙做出个人让步。一般性让步可以提升你选择的单个龙的态度一个等级。

即使是善良的巨龙也热爱财宝，将邪教为提亚马特收集的财宝的一部分赠予它们，会大大改善议会巨龙的态度。队伍可以将巨龙视为另一个派系，分得等份的财宝，将总财宝分成十一份，给予它们一份。这样做可以将一只巨龙的态度提升一级。每多承诺给巨龙一份财宝（十二份中的两份，十三份中的三份，以此类推），队伍可以将另一只巨龙的态度提升一级。

龙族的态度按以下顺序通过财富得到提升：塔兹米凯拉、奥塔里雅卡诺斯、伊琉特拉、普罗坦瑟和尼穆尔。承诺分配宝藏的三分之一（在十五个派系中分配五份）或更多，可以提升所有五条龙的态度。

龙不会主动给队伍提供选项，但角色们可以通过其他提议来影响它们。对于如下之类的选项，奖励玩家的独创性：

承诺如果捕获了赛维林，将他作为囚犯交给龙，或者如果被杀，将他的尸体交给龙。

将一个主要的修道院或神庙奉献给巴哈姆特

将一块历史性的土地献给龙族，作为属于龙族的领地。`,spotlightRefs:[],presentNpcIds:["npc_tiamat","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们对特定龙族做出承诺或执行针对特定龙族的行为，他们将获得该龙族态度的两步改进（例如，从不友好到中立，或从谨慎到友好）。
如果队伍中有人类或提夫林，Protanther则持谨慎态度。
如果队伍中有精灵，他对队伍则是不友好的。
如果角色们同意所有龙面具一经发现便立即移交金属龙族——包括最终战役后缴获的任何面具——他的态度将会改善。
如果队伍中包括一个或更多的矮人，Otaaryliakkarnos则表现出不友好的态度。
如果队伍中有任何角色是龙裔，Tazmikella则表现出谨慎态度。
如果队伍中包含任何以不正当交易（特别是盗贼或吟游诗人）而闻名的角色，她则表现出不友好的态度。
【正是这种场合所需的神器】金属龙以偶尔赠予英雄魔法和宝藏而闻名。如果角色们在给龙留下深刻印象方面做得非常出色——例如，将所有五条龙的态度提升到友好——或者如果他们在角色扮演遭遇中表现得非常好，议会的龙可能会赠予一个或多个角色作为他们尊敬的标志。这很可能是一套3支屠龙箭，或者是抗电装甲。无论哪种都将在对抗邪教时证明是有用的，特别是如果角色们还没有经历过第十五章。塔兹米凯拉甚至可以作为让步，归还角色们给她的物品。（她并不贪婪，当它可能对其他人有好处时，只是对被偷走感到不满。）`,mapGeometry:{imageRef:"adventure/RoT/021-tod-14-02.webp"}},{id:"scn_rot_196",locationId:"loc_rot_196",name:"赞萨尔的塔",activation:{condition:{type:"always"},priority:0},skeleton:["在费伦的法师和讲故事者中，Xonthal塔因其不寻常的魔法防御而闻名，包括一个围绕它的魔法树篱迷宫。","教团成员通过塔内的一个传送门进出，避开了树篱迷宫。","法师赞萨尔是一个非凡的人物。","他起初是一个卑微的冒险家，他游历了费伦以及更远的地方，到达了遥远的扎哈拉、卡拉图，甚至马兹提卡。","他的工作专注于召唤术和元素召唤，所以他经常与元素生物和巨灵为伴。"],flesh:`在费伦的法师和讲故事者中，Xonthal塔因其不寻常的魔法防御而闻名，包括一个围绕它的魔法树篱迷宫。教团成员通过塔内的一个传送门进出，避开了树篱迷宫。

法师赞萨尔是一个非凡的人物。他起初是一个卑微的冒险家，他游历了费伦以及更远的地方，到达了遥远的扎哈拉、卡拉图，甚至马兹提卡。他的工作专注于召唤术和元素召唤，所以他经常与元素生物和巨灵为伴。

Xonthal珍视独处，因此他设计了他的塔楼及其周围的树篱迷宫，以阻止入侵者和不受欢迎的访客。一个多世纪前，这位法师把他的学徒赶出去并封闭了塔楼。没有人知道Xonthal在这几十年间做了什么，或者他是否还活着。一些人认为他一定变成了巫妖，而其他人则认为他已经死了。唯一确定的是，树篱迷宫仍然是一个令人沮丧的障碍，保护塔楼免受入侵的法术和守卫仍然和以往一样强大。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_rot_194",locationId:"loc_rot_196",name:"一个意外的消息",activation:{condition:{type:"always"},priority:0},skeleton:["伊斯坎德尔给队伍的消息可以通过你认为合适的任何方式到达，包括通过散塔林会的联系人。","无论是直接到达角色还是到达深水城议会的NPC，消息可以是匆匆写就的便条，由绑定的信使传递的雄辩呼吁，或是在黑暗走廊中的低声请求。",'"你们不认识我，但我们能互相帮助。',"我叫伊斯坎德尔，我加入龙之教团是一个可怕的错误。","教团的可怕计划肯定会给所有人带来灾难，但我可以在你们的帮助下阻止这些计划。"],flesh:`伊斯坎德尔给队伍的消息可以通过你认为合适的任何方式到达，包括通过散塔林会的联系人。无论是直接到达角色还是到达深水城议会的NPC，消息可以是匆匆写就的便条，由绑定的信使传递的雄辩呼吁，或是在黑暗走廊中的低声请求。

冒险者们可能会对伊斯坎德尔持怀疑态度，直觉告诉他的提议是出于对自己生存的担忧，而不是对世界的担忧。如果使用占卜法术来评估情况，给角色们一个强烈的感觉，即伊斯坎德尔是诚实的，而且蓝龙面具确实在他的手中。

失去五个龙面具中的一个将对赛维林的计划是一个巨大的挫折。

沿着树篱迷宫边缘延伸的是一个村庄，也被称为Xonthal塔。这个定居点最初是Xonthal的众多学徒建立自己家园的地方。随着岁月的流逝，随着消息传开，说这位法师和他的学徒提供了极好的保护，以抵御掠夺的兽人和怪物，更多的定居者被吸引到这个地区。村庄现在比塔楼的鼎盛时期要小，但仍有大约三百人居住在那里。

当地人足够友好，但他们对那些对塔楼问题过多的陌生人保持警惕。那里长时间都很安静，但几乎一年来，村民们在夜间看到窗户透出光亮，听到了超自然的声音。一些人声称看到一只蓝色的龙在高空徘徊。有些村民对此嗤之以鼻，但大家都同意塔楼已经被重新占据。

一旦村民们确信冒险者们不是来摧毁塔楼的（他们担心一场全面的战斗可能会摧毁村庄），他们对其他话题就不那么感兴趣了，除了想知道里面可能有什么人。最受欢迎的理论是Xonthal已经回来或作为巫妖苏醒，或者是他曾经囚禁的其中一个巨灵或元素生物最终打破了束缚，但仍然被困在塔楼里。

村民们严厉地警告角色们进入迷宫的危险。进入迷宫的人很少能回来，而那些回来的人也状况大不如前。即使是动物和鸟类也会避开迷宫。

塔楼和迷宫由Xonthal精心施放的许愿法术保护。塔楼对所有侦查和占卜免疫，并且对所有形式的攻击和改变都无敌。通过迷宫并解决Xonthal设计出的谜题是进入塔楼的唯一方式。`,spotlightRefs:[],presentNpcIds:["npc_iskander","npc_severin","npc_tiamat"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`"你们不认识我，但我们能互相帮助。我叫伊斯坎德尔，我加入龙之教团是一个可怕的错误。教团的可怕计划肯定会给所有人带来灾难，但我可以在你们的帮助下阻止这些计划。将我从教团的控制中解救出来，我将把最珍贵的奖品交给你们：蓝龙面具。没有它，赛维林在召唤提亚马特回到我们世界的努力中将面临不可逾越的挫折。具就在Xonthal塔这里，只有少数几个法师，包括我自己，在研究和守护它。"
"我的背叛被发现的危险随着每一天的过去而增加，如果我被发现，我肯定会被杀。请快点，为了你珍视的每一个人和每一件事。"`,dmGuidance:"如果角色询问深水城议会的成员他们的意见，NPC们的意见是一致的：风险巨大，但潜在的回报更大。",offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_198",locationId:"loc_rot_198",name:"迷宫",activation:{condition:{type:"always"},priority:0},skeleton:["围绕中心塔楼的树篱迷宫是一个令人惊叹的魔法建筑作品。","在某些方面，由于它以强大的方式操纵空间，它甚至比塔楼本身还要令人印象深刻。","一条柔和弯曲的小径从村庄边缘通向迷宫。","村民们在入口处建了一道低矮的篱笆，以防止年幼的孩子和动物误入其中。","对迷宫的恐惧从村民们能够意识到其危险的年龄开始就被深深植入他们心中，他们非常小心地避开它。"],flesh:`围绕中心塔楼的树篱迷宫是一个令人惊叹的魔法建筑作品。在某些方面，由于它以强大的方式操纵空间，它甚至比塔楼本身还要令人印象深刻。

一条柔和弯曲的小径从村庄边缘通向迷宫。村民们在入口处建了一道低矮的篱笆，以防止年幼的孩子和动物误入其中。对迷宫的恐惧从村民们能够意识到其危险的年龄开始就被深深植入他们心中，他们非常小心地避开它。

从上方看——无论是通过飞行角色还是从附近的屋顶——迷宫看起来像是一个杂草丛生、纠结不清的混乱场景，没有任何可辨识的小径超过十几码长。它看起来正如它所是：一个超过一个世纪未经照料的树篱迷宫，已经长成了一个几乎完全由树篱和荆棘构成的坚实团块。

然而，从地面层看，迷宫看起来是一个宜人的、被树篱环绕的花园，与迷宫没有任何相似之处。村民们很快指出这种异常，向角色们证明迷宫不是可以轻视的东西。从上方看可以揭示迷宫在现实世界中的真实形态。从地面层沿路径向上看，看到的是赞萨尔为他的房子周围创造的超维度空间。

塔楼的入口只存在于这个超维度空间内。除了沿着主路走进迷宫之外，以其他任何方式进入都会很快让角色们陷入密集纠结的灌木丛中，那里几乎无法通行，并且实际上并不连接到任何塔楼入口。那些试图砍出一条路到塔楼、飞越迷宫或在迷宫下挖掘地道到外墙的角色会发现，那里只有平滑、未被破坏的石头，无法通过任何方式突破或绕过。塔楼顶层有一个阳台突出，但它被一个看不见、无法穿透的屏障包围，可以弹开所有物体和效果。到达塔楼入口的唯一途径是通过Xonthal的超维度迷宫。

由于迷宫不存在于普通空间，因此不能传统地进行地图绘制。相反，这里将其展示为七个节点的集合，其中发生遭遇。无论角色是步行还是奔跑，两个节点之间的移动都需要2d6回合。角色体验这种移动就像在修剪整齐的树篱花园中沿着一条小路行走。小路弯曲得使角色看不到前方超过15尺的地方，就像他们处在一个有同心路径的圆形花园中一样。穿过树篱对角色从一个节点到下一个节点所需的时间有影响。返回寻找之前穿过的地方的角色永远不会找到它。

树篱墙高达8尺，让冒险者们从许多地方都能看到上方的塔楼。然而，这种视角并没有提供方向上的线索。角色们可能在某个时刻看到塔楼在左侧，而在下一刻又发现它在右侧、后面，或者更近或更远。当试图集中注意力在塔楼的新位置上时，角色们突然发现他们无法清晰地记住它的旧位置，或者开始怀疑它是否一直就在当前的位置。

如果一个角色沿着小径进入超维度迷宫后试图飞越它，塔楼会立即从视野中消失，取而代之的是无尽延伸至地平线的树篱小径。另外，飞越迷宫的角色会被送回现实世界，在树篱纠缠之上出现，同伴们不见踪影。他们重新加入队伍的唯一方式是再次进入迷宫并追溯他们的步骤，应对沿途的所有遭遇。（如果你不喜欢分散队伍，谨慎使用这个选项。）

然而，任何对天空稍有了解的人都会注意到这些星座完全陌生。

区域1是迷宫的核心，角色们在寻找塔楼入口的过程中会多次返回这里。如果他们做得正确，就不需要面对迷宫的任何危险。尽管如此，这种情况不太可能发生。

尽管迷宫非常难以穿越，但离开它却很容易。角色们只需要在区域1表达想要离开迷宫的愿望，他们接下来采取的任何路线都会引导他们回到入口和村庄边缘的小径。他们可以转身再次进入，最终会回到区域1，迷宫的起点。

除非角色们采取了极端措施隐藏他们接近迷宫的行动，否则他们会被塔楼中的教团成员发现。（教团成员密切监视着村庄，并且会立即注意到冒险者到来引起的任何动静。）教团成员不知道冒险者的计划，但有了蓝龙面具在手，他们不打算冒险。他们的准备让伊斯坎德尔警觉起来，他看到自己逃脱的机会正在减少。在恐慌中，他抓起蓝龙面具，冲向塔楼的阳台。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`当你准备踏上花园小径时，你注意到塔楼上高处有动静。一个穿着黑色长袍的人类男性站在阳台上，挥舞着头上的某物。从这个距离很难辨认细节，但那可能是一个蓝色的面具。
"英雄们，"那个身影尖叫道，"他们在村子里看到你们了！我已经拿到了面具，但他们几分钟内就会发现它不见了！在塔楼下找我，因为那是我唯一有机会藏身的地方。这是能让你们传送到地牢的钥匙。"说话间，那个身影高举第二件物品——某种白色，闪闪发光的沙漏。"我会在使用后留下它，但别人可能在你们之前找到它。"
说话者回头看向他的肩膀，另一个身影突然冲到阳台上。刀光剑影和魔法火焰爆发。然后，说话者将攻击者抛过栏杆，然后迅速返回屋内。`,dmGuidance:`如果角色们在夜晚进入迷宫，晴空的星光足以让他们找到路径——甚至亮到能让区域1的日晷投下影子。
当角色们准备第一次进入迷宫，或者如果他们在村庄逗留时间过长时，请阅读或转述以下内容。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_19c",locationId:"loc_rot_198",name:"1. 日晷",activation:{condition:{type:"always"},priority:0},skeleton:["沿着入口小径走进迷宫后，这是角色们首先到达的区域，他们通过E号小径进入。","你进入了一个交汇点，八条小径在这里对称地汇聚。","你可以在树篱墙上方看到Xonthal塔，但由于小径的弯曲，无法判断哪一条可能通往那里。","一个日晷位于十字路口的中心，其晷针的影子笔直指向塔楼——这非常奇怪，因为太阳并不在你身后。","你的影子指向正确的方向。"],flesh:`沿着入口小径走进迷宫后，这是角色们首先到达的区域，他们通过E号小径进入。

日晷固定在地上，无法移动或改变位置。从这个区域延伸出去的八条小径都是相同的。冒险者们不应该知道他们每次是否回到了同一个地点，或者在迷宫中是否存在多个相同的日晷交汇点。

日晷的影子指示着正确的路径。一旦走上错误路径，就不能回头。一旦最后一个角色走出日晷的视线（沿着蜿蜒的小径15尺），改变方向会使所有角色到达如果他们继续前进会到达的同一区域。

每次他们返回时，日晷都会指向不同的路径，按照下面呈现的顺序。然而，每次角色在第一次之后进入这个区域，日晷会投射出多个影子。冒险者们必须从多个影子中推断出正确的路径，但这些解决方案并不明显，甚至不公平。Xonthal试图阻止敌人和好奇者进入——不仅仅是为了给他们提供一个愉快的智力挑战。

前三个日晷虽然解决办法并不总是显而易见, 但相对来说还是比较直接的。

第四个日晷 投射出四个影子，形成一个"X"形状。在这种情况下，正确的路径就是日晷本身。如果一个角色跳上或爬上日晷，他会被吸入其石质表面，然后突然从天而降，安全地落在第五个日晷周围。

第五日晷投射出八道阴影，指向所有可能的路径。没有一条路是正确的。要正确地分割阴影，角色必须在路径之间移动，直接进入任何树篱的尽头。一旦角色迈步、奔跑或一头扎入树篱，他或她就会安全地出现在塔的脚下。

每当角色们选择了错误的道路，他们就会出现在下面描述的其他迷宫区域之一，您可以按照您喜欢的任何顺序使用它们。

角色们总是返回到他们最近离开的同一个日晷谜题（日晷1到5），这样他们在每次走错路后不必从起点重新开始。然而，如上所述，他们没有办法知道他们是否返回到了同一个特定的日晷。

一个死去的教团成员的身体横躺在地上（就是伊斯坎德尔早些时候从阳台上扔下去的那个）。在他们身后，角色们看到一条直道，直接通向日晷交汇点。还有一条小径从日晷延伸出三十码，以村庄的出口结束。

第一个角色踏入圆圈几秒钟后，圆圈内的所有生物被传送到区域8。或者，角色们可以从塔底的花园直接走出，没有任何绕路或困难。然而，他们在迷宫中收集的任何宝石（见下文）将神秘地从他们的拥有中消失。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[150],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`你进入了一个交汇点，八条小径在这里对称地汇聚。你可以在树篱墙上方看到Xonthal塔，但由于小径的弯曲，无法判断哪一条可能通往那里。
一个日晷位于十字路口的中心，其晷针的影子笔直指向塔楼——这非常奇怪，因为太阳并不在你身后。你的影子指向正确的方向。只有日晷的影子指向前方。`,dmGuidance:`如果角色们试图在这个区域的地面上做任何标记或留下物品，那么当他们下次到达这里时，这些标记和物品都会消失。
如果角色们跟随不是由日晷指示的路径，它会引导他们到达迷宫的其他区域（由你选择）。
如果角色选择了正确的路径，他们在2d6回合后返回到区域1。
当角色们检查这些影子时，它们开始缓慢地围绕日晷的表面旋转，旋转速度越来越快，影子变得越来越短，直到它们缩进日晷的指针中，日晷上完全没有影子。
如果角色们错误选择超过六次，您可以重复使用区域，创建您自己的新区域，或者让角色们沿着比平常长得多的道路漫步，然后再遇到日晷。
【分队】一些队伍会尝试分开行动，希望以此智胜迷宫。然而，无论角色如何尝试，他们最终总是会重新聚集在一起。如果小组走不同的路线，他们会在同一个目的地相遇。如果一个角色留在日晷处，而其他人选择了一条路，那条路会带他们回到日晷处，那里的角色正在等待。此外，那个角色发誓其他人已经离开了1d6小时——足够进行一次短休息的时间（尽管在迷宫中进行一次长休息是不可能的）。像往常一样，任何在该区域做的识别标记在那些小时内都会消失，而没有人注意到。
当角色们通过在第五个日晷处成功进入树篱来完成迷宫时，他们出现在塔楼底部的一个传送圈的视线范围内。`},{id:"scn_rot_1a1",locationId:"loc_rot_198",name:"2. 甲伏怪池",activation:{condition:{type:"always"},priority:0},skeleton:["这个八十尺见方的庭院中心是一个直径六十尺的圆形水池。","水色深暗且混浊，能见度降低到大约一尺。","一块石榴石宝石悬浮在水池中心上方一尺处。","另一条路径通过水池对面的树篱墙离开这个区域，正好与您进入的地方相对。","四只甲伏怪居住在这片黑暗的水域中。"],flesh:`四只甲伏怪居住在这片黑暗的水域中。只要角色们待在庭院里，它们就会保持隐藏，但任何进入水池或触碰宝石的生物都会遭到它们的攻击。攻击中的chuuls会试图使角色瘫痪，然后将他们拖入或扔进50尺深的水池中淹死。然而，它们对魔法很感兴趣，如果有任何魔法物品被扔进水池，chuuls会被分散注意力5轮。在那段时间里，它们不会攻击，如果它们已经在攻击，它们会停止并潜到水池底部去检查它们的新宝藏。

如果石榴石被带出这个区域，两条路都会引导角色们回到日晷处。

水池底部藏有各种访客投入的宝藏：六瓶治疗药水，一瓶成长药水，一瓶火焰吐息药水，一根恐惧魔杖，三把+1匕首，一个漂浮之球，以及一个元素宝石（透明蓝宝石/风元素）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_1a1"],treasureSlotIds:["trs_rot_1a1_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个八十尺见方的庭院中心是一个直径六十尺的圆形水池。水色深暗且混浊，能见度降低到大约一尺。一块石榴石宝石悬浮在水池中心上方一尺处。另一条路径通过水池对面的树篱墙离开这个区域，正好与您进入的地方相对。",dmGuidance:`如果角色们试图在未取回石榴石的情况下离开这个区域，两条路径都会弯曲并使他们经过一段短距离的行走后回到这里。
如果角色们在这个区域留下了任何标记、物品或同伴，所有相同的条件都适用于区域1。`},{id:"scn_rot_1a4",locationId:"loc_rot_198",name:"3. 独眼巨人牧场",activation:{condition:{type:"always"},priority:0},skeleton:["你从小径走出，进入一个比你预期在迷宫花园中遇到的任何开放区域都要大得多的地方。","这个长方形的空间大约有90尺宽，远端几乎有150尺远。","它看起来像是一个散布着巨石的牧场，一边是一个大型池塘，另一边是一个围起来的菜园和一间超大的小屋。","绵羊在牧场上吃草，由一对独眼巨人看管，但它们都不动。","它们看起来都像是被时间冻结了。"],flesh:`一旦任何角色进入这个区域，这里的生物就会活跃起来，绵羊在吃草，独眼巨人在彼此闲聊。当独眼巨人注意到角色们时，他们会交换几句听不见的话，然后玩一种类似于石头/剪刀/布的游戏。其中一个输了，两个独眼巨人就向角色们走来。他们看起来没有携带武器。

当独眼巨人距离角色们20尺以内时，输掉游戏的那个从地上抓起一个小石头，向队伍示意。然后他看向场地远处，将石头扔出100尺，石头在那里弹跳并再滚了20尺。两个独眼巨人随后转过身来，期待地看着角色们。

这片田野这一端的巨石直径至少有2尺，重量超过500磅。

独眼巨人只说巨人语。如果任何角色用那种语言与他们交谈，他们会忽略任何问题，但会解释他们游戏的规则：角色们的巨石必须比独眼巨人的飞得更远。角色们如何做到这一点对独眼巨人来说并不重要，但巨石不能被拖拽或携带——它必须至少飞行一部分距离。

角色们可以通过几种方式完成这个挑战。最直接的解决方案是使用en=Enlarge/Reduce法术缩小石头，然后使用相同的法术将一个强壮的角色变大来投掷它。其他解决方案可能包括对石头施放en=Levitate法术并给它一个推动力，为石头挖一条沟渠让它沿着场地的长度滚动，或者以其他某种方式用魔法推动它。只要角色们尝试的解决方案将石头推进得比独眼巨人更远，独眼巨人就会接受。\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0adventure/adventure-rot.json

每个独眼巨人在被攻击时都会自卫，杀死它们不会改变任何事情。角色们仍然需要将一块石头推进得比独眼巨人更远，才能回到日晷那里。

如果带着黄宝石离开这个区域，任意一条路径都会引导角色们回到日晷那里。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_1a4"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[153],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"你从小径走出，进入一个比你预期在迷宫花园中遇到的任何开放区域都要大得多的地方。这个长方形的空间大约有90尺宽，远端几乎有150尺远。它看起来像是一个散布着巨石的牧场，一边是一个大型池塘，另一边是一个围起来的菜园和一间超大的小屋。绵羊在牧场上吃草，由一对独眼巨人看管，但它们都不动。它们看起来都像是被时间冻结了。",dmGuidance:`当角色们战胜了挑战，独眼巨人投掷的石头裂成两半，露出里面的黄宝石。
如果角色们试图在没有赢得比赛的情况下离开这个区域，两条路都会在短暂步行后将他们带回到这里。
如果角色们在这个区域留下任何标记、物品或同伴，所有相同的条件都适用于区域1。`},{id:"scn_rot_1a6",locationId:"loc_rot_198",name:"4. 食肉花园",activation:{condition:{type:"always"},priority:0},skeleton:["前方，你看到一个冒着气泡的喷泉占据了小径。","喷泉两侧的树篱中生长着大而鲜艳的花朵，每一朵花瓣在光线中闪烁。","这里的空气闻起来格外清新甜美。","地图上每个正方形的北侧和南侧都长着一朵大花，除了喷泉所在的那个正方形之外。","然而，如果任何一朵这些食肉性花朵被攻击，或者如果角色试图从花朵中取出珍珠，所有的十二朵花都会攻击它们能够触及的任何敌人。"],flesh:`地图上每个正方形的北侧和南侧都长着一朵大花，除了喷泉所在的那个正方形之外。然而，如果任何一朵这些食肉性花朵被攻击，或者如果角色试图从花朵中取出珍珠，所有的十二朵花都会攻击它们能够触及的任何敌人。使用食腐兽的具体数值来代表每朵花，除了它们的速度为0，并且它们具有植物类型。

一旦花朵被杀死，它的珍珠就可以被移除。如果珍珠被带出这个区域，两条路都会引导角色们回到日晷处。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_1a6"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[153],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"前方，你看到一个冒着气泡的喷泉占据了小径。喷泉两侧的树篱中生长着大而鲜艳的花朵，每一朵花瓣在光线中闪烁。这里的空气闻起来格外清新甜美。",dmGuidance:`当角色们靠近时，他们可以看到花朵的闪烁来自于镶嵌在每朵花上的一颗大珍珠。
如果角色们试图在没有珍珠的情况下离开这个区域，两条路径都会弯曲并在一段短距离的行走后将他们带回这里。
如果角色们在这个区域留下了标记、物品或同伴，所有相同的条件都适用于区域1。`},{id:"scn_rot_1a8",locationId:"loc_rot_198",name:"5. 宝塔",activation:{condition:{type:"always"},priority:0},skeleton:["一个宁静的池塘占据了这个开放空间的中心。","一座结实的宝塔从一块巨石上升起，就像水中的一个小岛。","一座拱形桥横跨水面通向宝塔，宝塔的红色屋顶由六根坚固的柱子支撑，顶部装饰着雕刻的鱼。","一个穿着黄色丝绸长袍、绣有红色和金色鱼的人类男性站在宝塔中。","你听到一种异国情调的音乐正在弦乐器上演奏。"],flesh:`他耐心地等待队伍加入他。岩石周围的宝塔地板不是木头的，而是一个装饰石和刷沙的岩石花园。在男人坐着的岩石旁边，一个炭火坑冒着烟。

塔的主人没有言语，他耐心地等待冒险者们加入他。当他们进入塔时，他微微一笑，并递上了丝绸坐垫。然后他挥了挥手，一个铁茶壶从灰烬中升起。茶壶看起来像一张皱着眉的粗犷面孔，仔细观察的玩家可能在成功的 DC 12 感知（察觉）或智力（奥秘）检定后认出这是一个道。那人从陶罐中倒入清水，并加入茶叶。他向茶壶鞠躬，对这件器皿表现出极大的敬意，然后低头冥想。不久，蒸汽从茶壶中升起。

这个泡茶的人是一个被魔法伪装成人类的土巨灵，而壶里煮的不是茶，而是一种致命的气体毒药。茶壶也是道的en=Magic Jar（如下所述）。

通过一次成功的 DC 15 智力 (奥秘) 检定，角色会意识到一种内在能力将茶壶从煤炭上抬起（en=Move Earth 作用在一个小陶柱上）。观看茶叶进入水壶的角色可以尝试进行一次 DC 13 智力 (自然) 或 感知 (医药) 检定。成功意味着角色认出了龙草，一种可能致命的草药。

他使用地行术潜入巨石。他的身体安全地藏在地下，灵魂则跳入茶壶中，他监视着角色们的逃脱尝试，并享受观看他们的痛苦。接下来的3分钟（30回合），塔楼内的生物（除了道法师在 en=Magic Jar 中的灵魂）必须在每个回合开始时进行一次 DC 13 的体质豁免检定以抵抗毒素。如果豁免失败，生物将受到14点（4d6）毒素伤害，豁免成功则受到一半伤害。连续三次成功的豁免检定将使生物对此毒素免疫。

被困的角色有几种逃脱的选择：

石墙的护甲等级是5，厚度为6英寸，每英寸厚度有15点生命值（总共90点生命值）。有动力的角色可以在墙上制造气孔。

将壶倒进火中会将失败豁免时的毒素伤害减少到7（2d6），成功豁免则伤害减半。燃烧龙血草产生的烟雾比蒸汽的危险性要小。

堵住茶壶的壶嘴或熄灭火焰可以将豁免检定的难度等级降低到8。

损坏茶壶会迫使道回到宝塔。当道的灵魂栖息在茶壶中时，脸部会稍微动起来。任何触摸茶壶的人都会发现眼睛在宝塔周围转动。茶壶有5的护甲等级和20点生命值。如果它受到超过10点伤害，道就会返回他的身体，从石头中出现，放下en=Wall of Stone（因为他也不能呼吸毒气），并发动攻击。

道会先杀死最弱的角色，以此扭转局势对他有利。当道的生命值降至45点或更少时，他会撤退到地下。

一个玉宝石放在茶壶里。如果带着它离开这个区域，任意一条路径都会引导角色们回到日晷那里。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_1a8"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[154],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个宁静的池塘占据了这个开放空间的中心。一座结实的宝塔从一块巨石上升起，就像水中的一个小岛。一座拱形桥横跨水面通向宝塔，宝塔的红色屋顶由六根坚固的柱子支撑，顶部装饰着雕刻的鱼。一个穿着黄色丝绸长袍、绣有红色和金色鱼的人类男性站在宝塔中。你听到一种异国情调的音乐正在弦乐器上演奏。",dmGuidance:`当角色们到达时，穿长袍的人向他们鞠躬，并坐在宝塔地板上突出的岩石上。
如果角色们什么都不做，浸泡的龙草会使塔楼充满有毒蒸气，道法师会用 en=Wall of Stone 将塔楼（包括屋顶）封闭，将毒气和角色们困在其中。
如果角色在道的陷阱触发前攻击他，他会反击，充分利用en=Invisibility、en=Move Earth以及其他能力。
如果角色们没有携带玉宝石就离开这个区域，两条路径都会弯曲并在一段短距离的步行后将他们带回这里。
如果角色们在这个区域留下了标记、物品或同伴，所有相同的条件都适用于区域1。`},{id:"scn_rot_1aa",locationId:"loc_rot_198",name:"6. 雕像长廊",activation:{condition:{type:"always"},priority:0},skeleton:["六套华丽的板甲像守卫一样站在这个区域。","破旧和砸扁的盔甲和武器散落在他们面前的地毯地板上。","盔甲上覆盖着苔藓和地衣，尽管它没有生锈。","这个区域的远端有另一条小径。","每当一套盔甲被摧毁，就会再激活两套。"],flesh:`每当一套盔甲被摧毁，就会再激活两套。当没有更多的盔甲可以激活时，这些盔甲会从散落在地上的部件中重新组装自己。重新组装需要一个回合的完整动作——在那一回合中它不能做其他任何事情。重新组装后，活化盔甲继续攻击。只要任何角色仍然在这个区域，这个过程就会持续进行。

每次一套盔甲被摧毁时，掷一个d6。如果掷出6，一块大血石会随着盔甲碎片落到地上滚出来。如果将血石带出这个区域，任意路径都会引导角色回到日晷处。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_1aa"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[154],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"六套华丽的板甲像守卫一样站在这个区域。破旧和砸扁的盔甲和武器散落在他们面前的地毯地板上。盔甲上覆盖着苔藓和地衣，尽管它没有生锈。这个区域的远端有另一条小径。",dmGuidance:`当角色们开始探索这个区域时，两套活化盔甲动起来并发动攻击。
如果角色们没有携带血石就离开这个区域，两条路径都会弯曲并在一段短距离的步行后将他们带回这里。
如果角色们在这个区域留下了标记、物品或同伴，所有相同的条件都适用于区域1。`},{id:"scn_rot_1ac",locationId:"loc_rot_198",name:"7. 石化铁牛迷宫",activation:{condition:{type:"always"},priority:0},skeleton:["当他们沿着小径走去，角色们被引入了魔法花园中更大的迷宫内的迷宫。","你跟随的弯曲小径突然转弯，露出了周围树篱中修剪出的正式迷宫。","片刻之后，蹄声隆隆，一只石化铁牛从绿色植物中冲向你。","这个区域被连续不断的树篱墙环绕，使得逃脱变得不可能。","角色们在完全探索这个区域之前不会意识到这一点，而且他们没有时间这样做，因为有一只石化铁牛在四处游荡。"],flesh:`当他们沿着小径走去，角色们被引入了魔法花园中更大的迷宫内的迷宫。

这个区域被连续不断的树篱墙环绕，使得逃脱变得不可能。角色们在完全探索这个区域之前不会意识到这一点，而且他们没有时间这样做，因为有一只石化铁牛在四处游荡。

迷宫允许牛头怪在其使用践踏冲锋攻击时自由穿过树篱。当它追逐冒险者时，它会尽可能频繁地使用石化吐息攻击。每次使用吐息时，都会从其吐息中结晶出一颗钻石并掉落到地面上。角色可以通过一次成功的 DC 15 感知（察觉）检定发现这颗宝石。角色可以在牛头怪的下一个回合开始前捡起钻石，但如果没有被捡起，它就会消散成雾气。

当一个角色捡起钻石时，这个区域的四边中央各打开了一条小径，任何一条都能引导角色们回到日晷处。

石化铁牛不会跟随角色离开迷宫。如果石化铁牛被杀死，另一只石化铁牛会在区域1分钟后在区域1的某处显现。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_1ac"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"你跟随的弯曲小径突然转弯，露出了周围树篱中修剪出的正式迷宫。片刻之后，蹄声隆隆，一只石化铁牛从绿色植物中冲向你。"},{id:"scn_rot_1ae",locationId:"loc_rot_1ae",name:"高塔",activation:{condition:{type:"always"},priority:0},skeleton:["在穿越树篱迷宫的危险之后，冒险者可以进入Xonthal的塔。","一旦进入，他们得知伊斯坎德尔的同伙发现了他的叛国行为，并试图杀死他。","角色们必须弄清楚塔的魔法传送系统，然后击败邪教徒和Xonthal的一些原始防御，以救出伊斯坎德尔并索取他承诺给他们的龙面具。","然而，在角色们离开之前，他们必须处理被召唤来保护面具的蓝龙。","尽管从外面看塔楼是方形的，但从内部看，它的房间和墙壁却是圆形的。"],flesh:`在穿越树篱迷宫的危险之后，冒险者可以进入Xonthal的塔。一旦进入，他们得知伊斯坎德尔的同伙发现了他的叛国行为，并试图杀死他。角色们必须弄清楚塔的魔法传送系统，然后击败邪教徒和Xonthal的一些原始防御，以救出伊斯坎德尔并索取他承诺给他们的龙面具。然而，在角色们离开之前，他们必须处理被召唤来保护面具的蓝龙。

尽管从外面看塔楼是方形的，但从内部看，它的房间和墙壁却是圆形的。这种奇怪的不一致性是Xonthal操纵空间能力的另一种表现。

塔楼内的房间有10尺高的天花板。

区域8到13被狭窄的窗户和魔法灯明亮地照亮。

塔楼的结构在楼层之间减弱了声音。只有在相邻楼层上才能听到最响亮的喊叫或噪音，而且除非是爆炸或en=Thunderwave法术，否则超过一个楼层就听不到任何声音。

Xonthal的塔的地面层没有楼梯。从一个层级到另一个层级的唯一方法是使用塔内建造的传送圈（在地图上标记为"T"）。因为他们不是在向上或向下爬，角色们在传送后无法知道他们所在的层级，除非通过窗户向外看。塔中的高窗户太窄，任何超过几英寸宽的生物都无法通过。

每个传送圈背后的墙上都有一个刻有符号的金属面板。触摸一个符号会让它发出柔和的光。几秒钟后，站在圈内的所有生物都会传送到由该符号选定的区域。

触摸到右三角形的角色会回到从塔底看到的日晷那里，允许他们沿着直线路径返回塔，或者离开迷宫前往村庄（见上文的"完成迷宫"）。

要传送到地牢层，必须使用沙漏形状的钥匙触摸符号，这是伊斯坎德尔在阳台上挥舞的那把。Xonthal在地牢中进行了许多危险的实验，他不希望任何人未经他许可就进入或离开那个层级。

这把钥匙是象牙和水晶制成的沙漏的代表。伊斯坎德尔 使用这把钥匙从天文台逃到地牢，但在使用后将钥匙扔回房间，这样冒险者们可以跟随他下去。Jorgen Pawl 找到了这把钥匙，现在拥有它。角色们必须从他那里拿到钥匙才能到达地牢层。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_rot_1b6",locationId:"loc_rot_1ae",name:"8. 接见大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的墙壁上绘有异国情调的几何图案，代表羽毛、鹰和蛇，所有这些都以你从未见过的风格呈现。","在房间的一侧，一个人类女性面朝下躺在血泊中。","她穿着打扮像龙之教团的高级成员。","死去的教团成员是被伊斯坎德尔杀死的。","他们发生了争执，死去的教团成员转身想要踏上传送圈，而伊斯坎德尔在她踏入传送器之前刺了她一刀，然后他自己穿过了传送器。"],flesh:`死去的教团成员是被伊斯坎德尔杀死的。他们发生了争执，死去的教团成员转身想要踏上传送圈，而伊斯坎德尔在她踏入传送器之前刺了她一刀，然后他自己穿过了传送器。

一个检查尸体并成功通过 DC 10 感知（医药）检定的角色可以确定这个邪教徒是被一把 龙牙匕首 所杀（参见 附录C）。

阳台设置在离地面8英尺高处，可通过攀爬轻松到达。每个阳台的地面上都有一个传送法阵，与塔内各处发现的类似。控制装置位于阳台栏杆下方，需要通过一次 DC 8 智力（调查）检定来发现。这些控制装置只能将角色传送回该区域的主法阵。

房间里的装饰让人联想到马兹特克风格的建筑。Xonthal深入研究了马兹特克文化，并将许多马兹特克图案融入了他的家中。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的墙壁上绘有异国情调的几何图案，代表羽毛、鹰和蛇，所有这些都以你从未见过的风格呈现。在房间的一侧，一个人类女性面朝下躺在血泊中。她穿着打扮像龙之教团的高级成员。"},{id:"scn_rot_1b8",locationId:"loc_rot_1ae",name:"9. 封闭的房间",activation:{condition:{type:"always"},priority:0},skeleton:["Xonthal将这些房间用于什么目的尚不清楚。","当邪教徒到达时，这些房间是空的，他们很快将其重新用作兵营。","散布在各处的睡袋表明每个房间有四到六名邪教徒使用。","这一层的传送器位于一个有关闭门的圆形房间内。","门和房间的墙壁都是由薄的、未打磨的钢制成。"],flesh:`Xonthal将这些房间用于什么目的尚不清楚。当邪教徒到达时，这些房间是空的，他们很快将其重新用作兵营。散布在各处的睡袋表明每个房间有四到六名邪教徒使用。

这一层的传送器位于一个有关闭门的圆形房间内。门和房间的墙壁都是由薄的、未打磨的钢制成。如果转动一个简单的门闩，门就会向外摆动。

教团成员很快意识到他们无法打败冒险者，于是他们冲向传送室。他们试图逃到休息室（区域11），他们期望在那里找到增援。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:["enc_rot_1b8"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色们到达时，一个邪教狂信者和四个邪教徒正在地板上寻找伊斯坎德尔。"},{id:"scn_rot_1b9",locationId:"loc_rot_1ae",name:"10. 神龛",activation:{condition:{type:"always"},priority:0},skeleton:["当Xonthal居住在塔中时，这座神龛是奉献给Oghma的。","邪教的传统主义者将这个房间变成了他们研究的实验室。","这个房间的墙壁上画有龙巫妖的画像，房间中央的石制祭坛上摆放着龙的骨骼肢体和爪子。","半打邪教徒对你的出现感到惊讶。","一条黑龙的骷髅前肢被骑乘在祭坛上，并被附上了永久的en=Animate Objects法术。"],flesh:`当Xonthal居住在塔中时，这座神龛是奉献给Oghma的。邪教的传统主义者将这个房间变成了他们研究的实验室。

一条黑龙的骷髅前肢被骑乘在祭坛上，并被附上了永久的en=Animate Objects法术。每个肢体有AC 10和50点生命值，并且每轮可以对5尺内的一个生物进行一次近战攻击：+4命中；6（1d10 + 1）穿刺伤害。

这个房间被两个魔法师们和五个邪教狂信者占据，他们在发现入侵者的第一个迹象时就会攻击。作为行动，其中一个法师尖叫出激活词来启动骷髅龙的肢体。如果激活肢体的邪教徒被杀，肢体会停止攻击，但两个法师都知道激活词。所有的邪教徒都会战斗至死。

这个房间包含许多关于龙巫妖的笔记和卷轴，但没有价值的东西。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:["enc_rot_1b9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的墙壁上画有龙巫妖的画像，房间中央的石制祭坛上摆放着龙的骨骼肢体和爪子。半打邪教徒对你的出现感到惊讶。",dmGuidance:"当角色们进入时，不会明显看出这些肢体与祭坛相连或它们可以被活化。"},{id:"scn_rot_1bb",locationId:"loc_rot_1ae",name:"11. 休息室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间是Xonthal的起居室、办公室和书房的结合体，用于学习、放松和写作。","当邪教徒接管了这座塔时，他们将这个房间变成了另一个龙巫妖实验室。","房间中央的一个大火炉使这个房间保持温暖舒适，烟雾被神奇地排放到室外。","大约有三分之二的成年龙的骨架铺展在地板上，环绕着火炉。","然而，在你们有更多时间进行评估之前，六个穿着黑色斗篷的身影准备攻击你们。"],flesh:`这个房间是Xonthal的起居室、办公室和书房的结合体，用于学习、放松和写作。当邪教徒接管了这座塔时，他们将这个房间变成了另一个龙巫妖实验室。

这个房间里的六个邪教狂信者一旦有人在传送器中出现就会立即行动。如果可能的话，邪教徒会试图在传送圈上还有一或多个角色时激活它。传送圈激活只需要几秒钟，所以站在圈里的角色除非他们有能力作为反应移动，否则将无法移动离开。邪教徒选择神龛层作为冒险者的目的地。

他们还看到邪教徒在这里做饭的迹象，发现一些简单的餐具沿着北墙堆放，还有装有土豆、萝卜、肉干和面粉的袋子。

除了被精心清洁的骨架和学者可能觉得有趣的笔记之外，这一层没有价值的东西。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:["enc_rot_1bb"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"房间中央的一个大火炉使这个房间保持温暖舒适，烟雾被神奇地排放到室外。大约有三分之二的成年龙的骨架铺展在地板上，环绕着火炉。然而，在你们有更多时间进行评估之前，六个穿着黑色斗篷的身影准备攻击你们。",dmGuidance:"当角色们有时间检查这具骨架（一头黑龙）时，他们会看到骨头是断开的并且摆放得很粗糙，而且这个生物的前肢不见了。"},{id:"scn_rot_1bd",locationId:"loc_rot_1ae",name:"12. 天文台",activation:{condition:{type:"always"},priority:0},skeleton:["Jorgen Pawl（魔法师）和3名邪教狂信者在角色们通过传送到达时在阳台上。","这四个人准备伏击第一个踏上阳台的角色。","这个房间显然是一个法师的工作场所。","一对关于天文学和占星术的厚重书籍摊开在一张桌子上。","一架由黄铜、水晶和抛光桃花心木制成的巨大望远镜安放在房间中央的复杂支架上。"],flesh:`Jorgen Pawl（魔法师）和3名邪教狂信者在角色们通过传送到达时在阳台上。这四个人准备伏击第一个踏上阳台的角色。

Xonthal使用这个房间来观测星空。梯子是用来到达安装在天花板上的透镜，它从塔楼向上观察。在白天，通过它几乎看不到什么，但在夜晚，透镜为望远镜提供了从地平线到地平线的整个天空的视野。

Jorgen Pawl拥有沙漏形状的钥匙，这把钥匙可以进入塔的地牢层。将钥匙触摸到任何传送圈控制面板上的沙漏符号，可以激活传送圈，跳跃到区域14的传送圈。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:["enc_rot_1bd"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间显然是一个法师的工作场所。一对关于天文学和占星术的厚重书籍摊开在一张桌子上。一架由黄铜、水晶和抛光桃花心木制成的巨大望远镜安放在房间中央的复杂支架上。一把梯子靠在一面墙上，天花板上嵌着一个巨大的水晶透镜。",dmGuidance:"如果角色们在探索天文台之前先调查阳台，邪教徒会冲进房间，希望以惊喜的方式发动攻击。"},{id:"scn_rot_1bf",locationId:"loc_rot_1ae",name:"13. 卧室",activation:{condition:{type:"always"},priority:0},skeleton:["Jorgen Pawl 和 伊斯坎德尔 共享这个目前空置的房间，它在经受时间的摧残之前可能曾经非常豪华。","一张由木板横跨桶上组成的桌子上摆满了笔记和卷轴，所有这些都与龙巫妖有关，但与当前的危机无关。"],flesh:"Jorgen Pawl 和 伊斯坎德尔 共享这个目前空置的房间，它在经受时间的摧残之前可能曾经非常豪华。一张由木板横跨桶上组成的桌子上摆满了笔记和卷轴，所有这些都与龙巫妖有关，但与当前的危机无关。",spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_1c0",locationId:"loc_rot_1c0",name:"地下城",activation:{condition:{type:"always"},priority:0},skeleton:["尽管邪教徒已经占领了Xonthal塔的上层，但他们无法控制塔下的地牢。","这个区域的秘密和古老的守卫对他们来说仍然是个谜。","Xonthal大部分实验都是在这里进行的，地牢曾经包括许多从主走廊(区域17)可以进入的超维度空间。","当第一批两组被派往这里探索的教团成员在区域15被元素生物杀死时，Jorgen Pawl迅速宣布地牢为禁区。","伊斯坎德尔明白逃到这里的风险，但他知道这是Jorgen狂热追随者不愿追捕他的唯一地方。"],flesh:`尽管邪教徒已经占领了Xonthal塔的上层，但他们无法控制塔下的地牢。这个区域的秘密和古老的守卫对他们来说仍然是个谜。Xonthal大部分实验都是在这里进行的，地牢曾经包括许多从主走廊(区域17)可以进入的超维度空间。

当第一批两组被派往这里探索的教团成员在区域15被元素生物杀死时，Jorgen Pawl迅速宣布地牢为禁区。伊斯坎德尔明白逃到这里的风险，但他知道这是Jorgen狂热追随者不愿追捕他的唯一地方。

地牢中的房间天花板高度为10尺，除非另有说明。

除非区域描述中另有说明，否则区域14至23在生物进入房间前均无光照。魔法灯随后激活并提供2。

声音在这些房间和走廊中传播得非常好。一个区域中的打斗声或其他大声噪音可以通过相邻区域的关闭门听到。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_tod_xonthal_fake_mask"],tone:"exploration",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_1c6",locationId:"loc_rot_1c0",name:"14. 地牢传送器",activation:{condition:{type:"always"},priority:0},skeleton:["地上躺着三具邪教徒的尸体。","第三具尸体是被刺死的，这不需要检定就能看出来。","一串血迹从区域 15 延伸到这个房间。","伊斯坎德尔 在这个房间里等待追踪者出现。","他立刻杀死了两个，但第三个追踪者追他到了15号区域，那里的元素生物攻击了他们两个。"],flesh:`地上躺着三具邪教徒的尸体。一个成功的 DC 13 感知（医药）检定可以确定其中两人是被魔法力量的箭矢所杀（伊斯坎德尔 的杰作）。第三具尸体是被刺死的，这不需要检定就能看出来。一串血迹从区域 15 延伸到这个房间。

伊斯坎德尔 在这个房间里等待追踪者出现。他立刻杀死了两个，但第三个追踪者追他到了15号区域，那里的元素生物攻击了他们两个。

这里的传送器可以到达塔上任何传送圈，但其控制装置不允许角色返回日晷。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_1c7",locationId:"loc_rot_1c0",name:"15. 元素检查点",activation:{condition:{type:"always"},priority:0},skeleton:["这里的地板上沾满了血迹，包括一条拖回传送室的涂抹痕迹，以及一条向北通往走廊的血迹靴印。","站在血迹中的是三个类人生物——两个看起来像泥塑和石雕的畸形雕像，还有一个看起来像是火焰构成的类人生物。","这些生物是2个土元素和一个火元素，是Xonthal召唤来守护他的工作室的。","在没有新命令的情况下，元素生物永远遵循Xonthal的最后一个命令，即杀死入侵者。","当任何角色进入房间时，元素生物会发动攻击。"],flesh:`这些生物是2个土元素和一个火元素，是Xonthal召唤来守护他的工作室的。在没有新命令的情况下，元素生物永远遵循Xonthal的最后一个命令，即杀死入侵者。当任何角色进入房间时，元素生物会发动攻击。它们会战斗直到被摧毁，或者直到队伍逃回14号区域或进一步进入地牢。除非从远处受到攻击，否则元素生物不会追击到这个区域之外。

房间的一角摆放着一张大型圆桌和四把椅子，沿墙排列着书架和工作台。桌上散落着书籍和纸张，还有一个大小约为鞋盒的上锁木箱。打开锁需要 盗贼工具 和一次成功的 DC 15 敏捷检定。检定失败会触发一道魔法 en=Glyph of Warding 陷阱，触发一个 en=Slow 法术，影响区域内除元素生物外的所有生物。受影响的生物可以在每个回合结束时再次尝试进行豁免检定。否则,效果将在1分钟后结束。

房间里的纸张和书籍上的字迹已经变得无法辨认，纸因为火元素的热度变得如此脆弱，一碰就碎。

箱子里有三个卷轴：两个防护火元素生物的卷轴和一个防护土元素的卷轴。角色们如果拿到这些卷轴，可以安全地通过元素生物，只要他们紧密地聚集在一起，让每个人都在施法者5尺半径效果范围内。由于只有一个防护土元素的卷轴，角色们可能至少需要面对一次土元素生物。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_1c7"],treasureSlotIds:["trs_rot_1c7_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这里的地板上沾满了血迹，包括一条拖回传送室的涂抹痕迹，以及一条向北通往走廊的血迹靴印。站在血迹中的是三个类人生物——两个看起来像泥塑和石雕的畸形雕像，还有一个看起来像是火焰构成的类人生物。",mapGeometry:{imageRef:"adventure/RoT/025-tod-15-02.webp"}},{id:"scn_rot_1ca",locationId:"loc_rot_1c0",name:"16. 实验室",activation:{condition:{type:"always"},priority:0},skeleton:["一眼就可以看出，这个区域曾经是一位法师的工作间。","工作台上覆盖着笔记、炼金烧瓶、烧杯、火盆以及其他奥秘装置。","更令人惊讶的是占据房间中心的旋风。","它直径十尺，从地板延伸到天花板，不停地旋转，显露出里面的一些闪闪发光的宝石。","旋风不是一个生物，而是Xonthal的一个实验。"],flesh:`旋风不是一个生物，而是Xonthal的一个实验。在其中旋转的宝石是元素宝石。如果将手或任何其他物质对象推入旋风中，它会扰乱气流的完美平衡，导致一个元素宝石旋转出来并在地板上破碎，召唤出一个愤怒的元素生物。你可以选择元素生物的类型或随机确定。旋风包含八个宝石，每种元素类型的两个。每次旋风被扰乱时，就会弹出并破碎另一个宝石。

这里的装备现在已经无用，任何试剂或材料早已干涸、腐烂或失去了效力。一个角色如果花一天时间仔细研究这些笔记，可以尝试进行一次 DC 20 智力（奥秘）检定，以理解 Xonthal 曾参与一项复杂的尝试，旨在创造融合了土、空气、火和水最佳特性的元素生物。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[158],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一眼就可以看出，这个区域曾经是一位法师的工作间。工作台上覆盖着笔记、炼金烧瓶、烧杯、火盆以及其他奥秘装置。更令人惊讶的是占据房间中心的旋风。它直径十尺，从地板延伸到天花板，不停地旋转，显露出里面的一些闪闪发光的宝石。"},{id:"scn_rot_1cc",locationId:"loc_rot_1c0",name:"17. 宇宙走廊",activation:{condition:{type:"always"},priority:0},skeleton:["台阶向下延伸至一条似乎横跨无限空间的步道。","成千上万的星星在不熟悉的星座中闪烁，流星在步道上方和下方的浩瀚空间中划过。","就在楼梯底部的不远处，一扇由虚无环绕的门从步道上升起。","五十尺之外，步道到达一个交叉口，正前方有另一扇门。","这条走廊是Xonthal对超空间实验的遗迹。"],flesh:`这条走廊是Xonthal对超空间实验的遗迹。路径由走廊的地板形成，尽管看起来延伸到虚空中，但它完全坚固且安全。到达走道的边缘证实了没有墙壁或天花板的存在。气氛稀薄且寒冷，但并不令人不适。

在一个或多个角色正沿着路径移动的适当时机，一群众多的小型流星划过，威胁着将他们从走道上击落。路径上的所有生物必须成功通过一个 DC 10 敏捷豁免来躲避流星。豁免失败时，生物被击中，受到 9 (2d8) 点钝击伤害，并被击落走道。

一只被击落走道的生物看起来像是掉入了无限空间。除非生物能够飞行或传送回走道，否则它很快就会从视线中消失。掷一个1d4 + 17；掷出的数字是角色在下一回合出现在的房间编号，并且从高处坠落到地面上，受到14点（4d6）钝击伤害。

尽管让角色从步道上掉下去是危险的（并且可能令人兴奋），但这使得冒险者在区域22被火巨灵欺骗的可能性降低。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[158],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"台阶向下延伸至一条似乎横跨无限空间的步道。成千上万的星星在不熟悉的星座中闪烁，流星在步道上方和下方的浩瀚空间中划过。就在楼梯底部的不远处，一扇由虚无环绕的门从步道上升起。五十尺之外，步道到达一个交叉口，正前方有另一扇门。"},{id:"scn_rot_1ce",locationId:"loc_rot_1c0",name:"18. 书房",activation:{condition:{type:"always"},priority:0},skeleton:["这个圆形房间显然是一个图书馆或书房，墙壁上摆满了从地板一直延伸到二十尺高的柔和圆顶天花板的书架。","一个带轮子的梯子连接到围绕弯曲墙壁运行的轨道上，可以让人到达上层书架。","房间中央矗立着一张精致、华丽的书桌，周围堆满了空白纸张。","书桌上放着一张大地图，地图的四角用石头压住。","通往法术书研究室的门（区域20）是通过移动地板水平的一本书打开的。"],flesh:`这个区域的两扇暗门隐藏在活动的书架后面，每扇门都可以通过成功进行DC 15智力（调查）检定来发现。通往法术书研究室的门（区域20）是通过移动地板水平的一本书打开的。通往观察室的门（区域19）位于地面以上10英尺处，它通过将滚动梯子放置在门前面并推动位于地面以上15英尺处的书架来打开。

如果除了赞萨尔之外的任何人打开任一秘密门，房间里堆积的纸张就会像有微风穿过一样开始飘动。然后成千上万张厚纸片飞入空中，形成巨大的旋风，向区域内的任何生物猛烈袭击。在第一轮，每个角色周围都会形成一个明显的纸片风暴。在此后的每轮，每角色周围又会形成两个更多的旋风，每个角色最多形成三个。

将这些纸旋风视为渡鸦群，但它们是构造物而非野兽，并且它们对火焰有弱点。当纸群形成时，它们会在书房中保持警戒30分钟，然后再次崩溃成一堆纸。它们不会追逐角色进入走廊，但会追逐他们进入两个相邻的房间。

Xonthal图书馆的内容不仅数量庞大，而且价值连城。这位法师的收藏包括近五千本书籍、小册子、对开本、四开本、卷轴和石板，总重量超过一吨。如果这些收藏能够被搬动，其总价值将达到50,000金币。另外，角色们也可以挑选一些特别有价值的卷册。

接受过以下技能之一训练的角色可以进行检定，在图书馆中搜索有关该主题的著作：驯兽、运动、奥秘、历史、医药、自然、表演、游说、宗教或巧手。将检定的总分乘以10，即可得到角色在该主题上能找到的单本最有价值的书籍的金币价值。每次技能检定需要10分钟，但许多角色可以同时进行搜索。寻找更多书籍的角色对后续检定会有累积的-10惩罚。

这张地图显示了围绕着传说中的黄铜之城的火元素界的区域。这张地图不会被火焰损坏，对于位面学者或探险家来说价值500金币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_rot_1ce"],treasureSlotIds:["trs_rot_1ce_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[158],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个圆形房间显然是一个图书馆或书房，墙壁上摆满了从地板一直延伸到二十尺高的柔和圆顶天花板的书架。一个带轮子的梯子连接到围绕弯曲墙壁运行的轨道上，可以让人到达上层书架。房间中央矗立着一张精致、华丽的书桌，周围堆满了空白纸张。书桌上放着一张大地图，地图的四角用石头压住。"},{id:"scn_rot_1d1",locationId:"loc_rot_1c0",name:"19. 观察室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的地板比18号区域的地板高10尺。","这个房间中，一个直径十尺的圆形水晶面板垂直悬挂着，通过链条固定在天花板、墙壁和地板上。","在水晶内部可以瞥见翻腾的火焰场景。","在水晶前面，一根华丽的杆子插在地板上。","这个窥视水晶让宗达尔能够窥探其他位面，目前设置用于观察火元素位面。"],flesh:`这个房间的地板比18号区域的地板高10尺。

这个窥视水晶让宗达尔能够窥探其他位面，目前设置用于观察火元素位面。视角由嵌入地板的控制杆控制，移动它就能改变场景。然而，正确操作这并不容易。角色可以尝试进行一个DC 20敏捷（巧手）检定来移动控制杆。成功意味着水晶展示了靠近黄铜城的一个令人叹为观止的火焰景观的短暂一瞥。失败则意味着水晶只显示了火焰。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间中，一个直径十尺的圆形水晶面板垂直悬挂着，通过链条固定在天花板、墙壁和地板上。在水晶内部可以瞥见翻腾的火焰场景。在水晶前面，一根华丽的杆子插在地板上。"},{id:"scn_rot_1d3",locationId:"loc_rot_1c0",name:"20. 魔法书研究",activation:{condition:{type:"always"},priority:0},skeleton:["一个大型的简单桌子，上面有几瓶墨水、几支羽毛笔和一把椅子，占据了这个否则空无一物的房间的中心。","Xonthal曾用这个房间来编写他的法术书，但他消失时那些书也随之不见了。","墨水瓶已经干涸，但任何受过奥秘训练的角色都会认出用于魔法书写的特定类型的墨水。","羽毛笔制作精美，仍然可以使用。"],flesh:"Xonthal曾用这个房间来编写他的法术书，但他消失时那些书也随之不见了。墨水瓶已经干涸，但任何受过奥秘训练的角色都会认出用于魔法书写的特定类型的墨水。羽毛笔制作精美，仍然可以使用。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个大型的简单桌子，上面有几瓶墨水、几支羽毛笔和一把椅子，占据了这个否则空无一物的房间的中心。"},{id:"scn_rot_1d5",locationId:"loc_rot_1c0",name:"21. 储藏柜",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域排列着架子，架子上摆满了Xonthal在他的实验中使用的各种普通和异国情调的试剂和组件。","大部分的供应品在漫长的岁月中已经蒸发、凝结或腐烂，但任何施法角色都可以在这里找到足够的可用材料，如果需要的话，可以补充他们的材料成分。"],flesh:"这个区域排列着架子，架子上摆满了Xonthal在他的实验中使用的各种普通和异国情调的试剂和组件。大部分的供应品在漫长的岁月中已经蒸发、凝结或腐烂，但任何施法角色都可以在这里找到足够的可用材料，如果需要的话，可以补充他们的材料成分。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_1d6",locationId:"loc_rot_1c0",name:"22. 公正的塔拉兹",activation:{condition:{type:"always"},priority:0},skeleton:["当走廊转向东北方向时，它再次呈现出石质走廊的外观。","前方的光线透过走廊照进来，走廊通向一个布置着看起来舒适的超大家具的房间。","在房间的中心，一个红色皮肤的生物穿着由火焰、青铜和火山石制成的盔甲，盘腿坐在地上，研究着一个棋盘。","这个生物是一个名叫Taraz the Fair的火巨灵。","这个名字与他的正义感或公平游戏无关，而是指的是他火焰般头发的浅色。"],flesh:`当走廊转向东北方向时，它再次呈现出石质走廊的外观。

这个生物是一个名叫Taraz the Fair的火巨灵。这个名字与他的正义感或公平游戏无关，而是指的是他火焰般头发的浅色。Xonthal困住了Taraz，试图迫使或欺骗火巨灵为他服务，但他消失了。被困的生物有了一个多世纪的孤独来后悔它的命运。

塔拉兹被一圈细长的魔法盐束缚在这个区域内。这些盐由桑塔尔注入强大的防护咒语，环绕着四面墙的底部，并延伸穿过门口处的铺路石缝隙。一个被动察觉为18或更高的角色会自动注意到这些盐。否则，一个仔细观察的角色需要通过一次成功的DC 12 智力（奥秘 或 调查）检定来发现这些盐。

Taraz用火热的微笑迎接冒险者们。他正确地推断出角色们在伊斯坎德尔出现后不久就到达这里并非巧合，他利用失踪的法师作为谈判的筹码。Taraz唯一关心的是逃脱，他会为了赢得自由而做任何事情。

Taraz与冒险者的对话涵盖了以下要点——其中许多是彻头彻尾的谎言，旨在帮助他获得角色们的信任：

赞萨尔在将火巨灵困在这里时剥夺了塔拉兹实现愿望的能力，以防止他逃脱。他只有在被释放时才能恢复他的能力。（这两项都是错误的。）

Xonthal对房间施加了防护，以防止火巨灵伤害任何人，这样法师和神灵才能下棋。Xonthal承诺如果Taraz赢得比赛就会释放他。（以上全部是虚假的。Xonthal从未进入这个区域，因为Taraz可以并且会在他的房间里伤害生物。）

角色们在走廊里是绝对安全的。（是的，只要Taraz被限制在区域22内。）

塔拉兹没有伤害角色的意愿，即使他想这么做，也做不到，多亏了赞萨尔的保护魔法。（错误。赞萨尔的结界将火巨灵及其魔法限制在22号区域，但它们并不保护那个区域内的其他生物。）

Taraz看到一个人（伊斯坎德尔）在冒险者前面沿着走廊走来。他拿着一个像龙脸的面具，而且看起来受了重伤。（全部属实。）

伊斯坎德尔 绊倒并带着面具从步道上跌落到无限空间之外，毫无疑问他仍在下落。为了救他并取回面具，角色们将需要Taraz的帮助，因为从步道周围的宇宙井中取回面具的唯一方法是通过一个愿望。火巨灵将以他的愿望作为交换，赋予这个强大的魔法给队伍。（包括火巨灵赋予愿望的能力在内，以上全部是虚假的。）

释放塔拉兹就像打破入口处的盐线一样简单。（真的。）

最终，Taraz非常渴望逃离地牢，他会承诺几乎所有事情——除了继续服役——以赢得自由。然而，除非交易的条件是铁板钉钉，否则这个火巨灵会寻找方法在一旦获得自由后逃避任何交易，并且出于纯粹的恶意攻击角色。因为他能飞，Taraz不怕从步道上掉下来，并且他会推角色下去。`,spotlightRefs:[],presentNpcIds:["npc_iskander"],availableInfoIds:[],encounterIds:["enc_rot_1d6"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[159],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"前方的光线透过走廊照进来，走廊通向一个布置着看起来舒适的超大家具的房间。在房间的中心，一个红色皮肤的生物穿着由火焰、青铜和火山石制成的盔甲，盘腿坐在地上，研究着一个棋盘。"},{id:"scn_rot_1d8",locationId:"loc_rot_1c0",name:"23. 时间室",activation:{condition:{type:"always"},priority:0},skeleton:["两个巨大的沙漏占据了这个形状不规则的房间。","它们的玻璃球体直径近15尺，每个沙漏高达30尺，几乎触及天花板。","每个沙漏都通过链条、滑轮和齿轮悬挂，可以翻转以启动沙子流动。","在房间的远端靠墙处，是那个从塔的阳台上呼唤你的邪教徒。","他的黑色长袍被烧焦并撕破，他那沾满血迹的手中紧握着一个蓝色龙面具。"],flesh:`除了精通空间魔法外，赞萨尔还涉足了时间操纵。这些沙漏是他试图控制时间流逝的一部分，尽管他最终放弃了这项研究。沙漏可以通过拉动它们的链条来旋转，但唯一的效果是发出刺耳、令人不快的呻吟声。沙子在流动，但沙漏的魔力早已消散。

施放一个en=Detect Magic揭示了每个沙漏内的沙子中微弱的变形魔法光环。一个沙漏的AC为5，生命值为25，易受钝击和雷鸣伤害。当一个沙漏的生命值降至0时，它会破碎，将沙子洒在地上。在沙子堆中筛选会发现1d4 + 2颗微小的钻石。每颗钻石的表面价值为100金币，拥有钻石的角色可以使用一个附赠动作传送到它能看到的最多30尺远的空间，随后钻石消失。

伊斯坎德尔 自从他到达这里不久后就已死去，被元素生物造成的伤口所杀。那个（假的）蓝龙面具 上有血迹但未受损。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[160],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`两个巨大的沙漏占据了这个形状不规则的房间。它们的玻璃球体直径近15尺，每个沙漏高达30尺，几乎触及天花板。每个沙漏都通过链条、滑轮和齿轮悬挂，可以翻转以启动沙子流动。
在房间的远端靠墙处，是那个从塔的阳台上呼唤你的邪教徒。他的黑色长袍被烧焦并撕破，他那沾满血迹的手中紧握着一个蓝色龙面具。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_1da",locationId:"loc_rot_1c0",name:"离开Xonthal的塔",activation:{condition:{type:"always"},priority:0},skeleton:["位于区域14的传送法阵可以将角色传送回塔楼的任何楼层（区域8至13）。","这些区域中的传送法阵可以将他们传送回日晷，从那里他们可以离开迷宫。","不过，角色们尚未完全脱离险境。","无论约根·帕尔多么反对赛维林，他仍然保持对龙巫教的忠诚。","一旦他意识到叛徒伊斯坎德尔与冒险者们有所勾结，他便使用en=Sending从附近的巢穴召唤了一只成年蓝龙，并告知它伊斯坎德尔偷走了龙面具。"],flesh:`位于区域14的传送法阵可以将角色传送回塔楼的任何楼层（区域8至13）。这些区域中的传送法阵可以将他们传送回日晷，从那里他们可以离开迷宫。不过，角色们尚未完全脱离险境。

无论约根·帕尔多么反对赛维林，他仍然保持对龙巫教的忠诚。一旦他意识到叛徒伊斯坎德尔与冒险者们有所勾结，他便使用en=Sending从附近的巢穴召唤了一只成年蓝龙，并告知它伊斯坎德尔偷走了龙面具。

当他们到达花园的边缘时，他们看到巨龙在村庄上空盘旋，惊慌失措的村民朝着四面八方逃窜。被动察觉为14或更高的角色认出这条巨龙是兰尼森，成年蓝龙，他们在战役龙后的宝山中曾与之交锋。

像任何聪明的敌人一样，Lennithon 试图按照自己的条件战斗，而不是敌人的。它停留在空中，并将其吐息武器发挥到最大效果。

这条龙忠于教团，但它没有打算在提亚马特辉煌归来之前死去。它战斗直到生命值降至75点，然后飞走去休养。`,spotlightRefs:[],presentNpcIds:["npc_severin","npc_iskander","npc_tiamat"],availableInfoIds:[],encounterIds:["enc_rot_1da"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[160],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:'"面具，傻瓜们！面具是我来取的东西。把它交给我，我就会放过这些爬行的蚂蚁和他们悲惨的生命。女王即将归来！你们凭什么希望阻止她？把面具给我！',dmGuidance:`当角色们传送到日晷时，迎接他们的是村民们可怕的尖叫声、巨龙的咆哮声，以及闪电将房屋撕裂成碎片的声响。
如果角色们拒绝面对它，Lennithon 乐于摧毁村庄并杀害无辜者，以努力将英雄们引出。
当角色们面对龙时，请阅读或转述以下内容。`},{id:"scn_rot_1dd",locationId:"loc_rot_1dd",name:"前往泰伊的使命",activation:{condition:{type:"always"},priority:0},skeleton:["在他崛起的过程中，赛维林 招募了一群泰雅流亡者来帮助他实现将提亚马特带回世界的计划。","他需要红袍法师在开启提亚马特位于阿弗纳斯的家园与龙井之间传送门的仪式上的专业知识。","没有红袍法师，赛维林的计划就无法成功。","被赛维林招募的红袍法师是许多逃离Thay统治的流亡Thayans之一，Thay的统治者是巫妖领主萨扎斯坦以及他的不死zulkirs议会。","巫妖领主的愤怒如此之大，以至于所有这样的流亡者都被判处死刑。"],flesh:`在他崛起的过程中，赛维林 招募了一群泰雅流亡者来帮助他实现将提亚马特带回世界的计划。他需要红袍法师在开启提亚马特位于阿弗纳斯的家园与龙井之间传送门的仪式上的专业知识。没有红袍法师，赛维林的计划就无法成功。

被赛维林招募的红袍法师是许多逃离Thay统治的流亡Thayans之一，Thay的统治者是巫妖领主萨扎斯坦以及他的不死zulkirs议会。巫妖领主的愤怒如此之大，以至于所有这样的流亡者都被判处死刑。与赛维林结盟的红袍巫师会流亡者的领袖是Rath Modar，一个人类幻术师。

尽管他与龙族没有特别的联系，但拉斯·莫达尔相信，当提亚马特回归时，她会愿意为那些支持她的人提供帮助。与龙之教派那些微不足道的成员相比，他们只向提亚马特提供虔诚但别无他物，而为提亚马特打开门户的红袍法师们则可以以她的名义施展强大的魔法力量。莫达尔计划要求的回报是龙后帮助他推翻可恨的萨扎斯坦，并恢复泰瑟尔的昔日荣耀。拉斯·莫达尔和他的分裂派别将他们的运动称为泰瑟尔复活。`,spotlightRefs:[],presentNpcIds:["npc_severin","npc_tiamat"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[161],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/RoT/026-tod-16-01.webp"}},{id:"scn_rot_1de",locationId:"loc_rot_1dd",name:"我的敌人的敌人",activation:{condition:{type:"always"},priority:0},skeleton:["在这一章的开始，角色们被他们在深水城议会信任的人召集到一个秘密会议上。","在会议上，他们得知议会被泰雅的一个名叫Nyh Ilmichh的红袍巫师会接触。","Ilmichh向议会发出邀请，希望派遣一个特使前往泰雅，讨论在当前危机中泰雅和剑海岸如何互相帮助。","在会议后，冒险者们被特别请求代表剑海岸参加这次会议，之后角色们将安全无恙地返回深水城。","访问大使馆只会持续几天，但会议的地点是不可协商的。"],flesh:`在这一章的开始，角色们被他们在深水城议会信任的人召集到一个秘密会议上。在会议上，他们得知议会被泰雅的一个名叫Nyh Ilmichh的红袍巫师会接触。Ilmichh向议会发出邀请，希望派遣一个特使前往泰雅，讨论在当前危机中泰雅和剑海岸如何互相帮助。在会议后，冒险者们被特别请求代表剑海岸参加这次会议，之后角色们将安全无恙地返回深水城。

访问大使馆只会持续几天，但会议的地点是不可协商的。角色们将要会见的萨奇翁（泰雅的州长）的职责使她不能离开她的岗位。角色们的议会联系人告诉他们，Ilmichh已经经过仔细询问，并接受了en=Zone of Truth法术的测试，而且她说的一切都已被证实。

角色们应该明白，没有红袍法师，赛维林的计划将受到严重破坏。此外，众所周知，萨扎斯坦希望所有流亡的红袍法师以最糟糕的方式死去。尽管议会中有些人有所保留，但大多数人认为，由于派系和萨扎斯坦有一个共同的目标，邀请是值得接受的。

最终决定权当然在角色们手中。没有人会强迫他们去泰雅。但在议会的估计中，一次性推迟甚至破坏赛维林的计划的潜力太大了，不容错过。

泰瑟尔是一个孤立且干旱的风扫高原，位于深水城以东约二千五百英里，其黑暗的天空被火山灰持续笼罩，云层密布。这个地区以其边界内不死生物的普遍性而闻名。泰瑟尔的最高领袖是巫妖萨扎斯坦，他的顾问委员会——祖尔克尔们——本身也是强大的巫妖。泰瑟尔所有有影响力的人都是施法者，而且那里常见的是死灵法师。不死生物仆从随处可见，泰瑟尔军队中的许多指挥官是自由思考的不死生物士兵（使用尸妖的具体数值）。

来到这片土地的旅行者必须警惕其黑暗的政治——普遍的偏执狂，警察国家的心态，以及占据社会顶层的死灵法师——以及这里居住的不死生物和红袍法师的威胁。泰雅是一个充满非凡危险的所在。

竖琴手密切关注Thay的发展，他们是角色们获取该地当前信息的最佳资源。

除了向角色们提供上述关于泰雅的信息外，Erlanthar还安排他们收到密封的授权书，表明他们是代表深水城领主和领主联盟行事。该队伍受到这两个组织的保护，尽管这样的授权书在泰雅并不能保证安全。Erlanthar建议角色们在称呼任何重要人物时，要以恭敬的方式并使用头衔，而不是仅用名字。同样，了解任何死灵魔法的角色应该随意展示它。

当冒险者们准备出发时，Nyh Ilmichh会与他们一起传送到位于Lapendrar领地的Nethwatch Keep，就在泰雅边境之内。

Nethwatch Keep 由萨奇翁Eseldra Yeth指挥。她作为Lapendrar的萨奇翁已经近一个世纪了——足够长的时间，以至于对过去的叛乱有第一手的记忆。

在堡垒中，角色们被分配到豪华的单人房间，尽管房门没有锁。Nyh Ilmichh告诉任何询问的人，他们在Tharchion的堡垒中是绝对安全的。在与Eseldra Yeth的会面之前，冒险者们没有看到其他任何生物。所有的仆人和工作人员都是不死生物，但堡垒的食物和舒适设施品质极佳，完全安全。

泰尔奇昂·埃塞尔德拉·耶斯是一名女性人类吸血鬼施法者。在举行会议的接见室里，她由10名红袍巫师（必要时使用魔法师数据）和5名尸妖陪同。埃塞尔德拉·耶斯简要查看了角色的授权令，然后传达了一条准备好的传讯术。

Tharchion等待角色们的回应，并与他们讨论已知的释放提亚马特的阴谋以及红袍法师协助该阴谋的情况。她的问题直接而明智，几乎没有提供狡猾或聪明回答的机会。如果一个角色不够诚实，Eseldra Yeth会深入探询更多信息。她向特定角色提问，从不一般性地向整个团队提问。如果她察觉到谎言（见下文），她将不再与那个角色对话。

在会面的尾声，每个角色必须进行一次 DC 20 魅力 (游说) 检定。（为了保持威胁的氛围，要求进行检定但不透露DC。）以下调整值适用于此次检定：

奥术施法者获得+6的加值。

公开崇拜与死亡相关的神祇的角色将获得+4的加成。

善良阵营神祇的牧师和圣武士受到-6的惩罚。

其他佩戴明显崇拜任何善良阵营神祇标志的角色会受到-4的惩罚。

任何对埃瑟德拉·耶斯说谎的角色将受到–8的惩罚，除非他或她每次说谎都成功通过一次DC 18魅力（欺瞒）检定。（不要透露此检定的DC）。

根据角色提出的具体论点和他们的整体行为，可以自由引入额外的调整值。真诚（或至少令人信服）地赞美死灵法术和泰雅扭曲的社会秩序，可能会获得+2或+4的加成。不真诚的赞美、明显的空洞奉承或公然的敌意应该会受到惩罚。

记下哪些角色在豁免检定中成功，哪些失败了。结果决定了他们那天晚上会发生什么。

在接见结束时，角色们被解散。在被带回他们的房间并享用一顿丰盛的晚餐之前，Nyh Ilmichh告诉他们，他们将在第二天早上再次见面。

那天晚上，每位冒险者都成为了由红袍巫师会幻术师施放并精心制作的en=Dream法术的定制版本的目标。每个角色在幻象中被一个苍白的红袍巫师会质问，他说："我们对你们有进一步的问题。"精灵和其他不睡觉的生物不受此效果影响。

每个角色必须进行一个DC 18的感知豁免检定，且具有劣势。成功通过豁免检定的角色在早晨会记得模糊、令人不安的梦境，但不会受到其他影响。

每个未能通过豁免检定的角色都会经历一个类似的噩梦。他或她被麻痹并被神奇地束缚在一个神秘的大锅中，周围是活动的链条和触手。一打红袍法师平静地观察着，而另外三个红袍法师则对无助的角色施加痛苦的折磨。角色被问及为什么队伍来到Thay，关于赛维林的阴谋，关于Rath Modar，关于他或她自己的过去和其他人的生活，关于队伍对萨扎斯坦的态度，以及任何你想问的事情。

角色的每个回答都必须伴随一个 DC 15 魅力（游说）检定，如果角色诚实地回答；或者一个 DC 15 魅力（欺瞒）检定，如果回答有任何部分虚假。在观众面前成功通过魅力（游说）检定的角色在每次这些检定中具有优势。每次检定失败时，角色会遭受极度痛苦，因为一位 红袍巫师会 大声宣布角色失败的回答次数。拒绝回答与检定失败同等待遇。

一个角色如果挣扎反抗束缚，或者尝试施放法术或使用其他不受身体限制影响的能力，将会遭受极度的痛苦，以至于他或她暂时处于失能状态。该角色在梦中进行的下一次魅力检定会受到-2的惩罚。

当一个角色成功回答五个问题，或者总共回答八个问题时，噩梦结束。如果最后一个问题回答正确，角色那晚其余时间会睡得很不安稳。如果最后一个问题回答错误，角色会尖叫着醒来，浑身是汗。床单上沾有血迹，尽管角色没有明显的伤口。角色还会受到10 (3d6) 点心灵伤害，并且当晚的睡眠不会带来长休的好处。

早上，任何经历了这种审问的角色都会面色苍白，眼睛看起来黑暗、凹陷。

第二天早上，在享用了另一顿美味的餐食后，角色们被引导回到接见室。Eseldra Yeth不在那里。相反，他们由Nyh Ilmichh和前一天接见时在场的一位红袍法师迎接。只有Nyh Ilmichh发言。

她说的话取决于在梦中成功回答五个问题的角色数量。如果这个数字占非精灵队伍的一半以上（也就是说，精灵不计入队伍总数，因为它们不能被红法师的en=Dream法术影响），Nyh Ilmichh会告诉角色们红法师已经同意帮助剑海岸的派系，并且她将作为泰雅的大使陪同他们回到议会。

如果统计结果显示是非精灵角色数量的一半或更少，Nyh Ilmichh会表示Tharchion Yeth感谢他们提供的信息，但Thay的注意力被其自身边界内的事务所吸引，红袍法师无法提供帮助。片刻之后，冒险者们站在了深水城北边一英里处的一座废弃和破败的农舍里。他们周围隐约可见的Thayan传送圈的轮廓以及他们整齐打包的行李逐渐消失。`,spotlightRefs:[],presentNpcIds:["npc_severin","npc_tiamat"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_tod_thay_offer"],tone:"tension",_meta:{sourcePages:[161],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`我们发现自己因共同的敌人而团结在共同的事业中。那些在过去试图毁灭我们的人，现在也试图毁灭你们。我们对复仇的渴望强烈，正如你们对延续生命的渴望一样。
我们的敌人已经成为你们的敌人。我们知道他们的弱点以及如何永远摧毁他们，同时不破坏他们的用处。在你们对抗他们的邪教盟友的斗争中，你们有机会发现他们的藏身之处。我们可以一起将他们从对我们双方的威胁中移除。
我们的代理人，Nyh Ilmichh，将与你一同返回你们深水城，在那里作为我们与你们议会的联络人。你们了解到的敌人信息，她将通过我们自己的方式传达给我们。你们只需要找到敌人。我们将按照我们的习俗来对付他们。
"我被我们的永恒主宰，萨扎斯坦授权说这些话，因为我是代表他行事。"`,dmGuidance:`如果角色们不向竖琴手寻求建议，Leosin Erlanthar会接近他们。
如果角色在称呼艾瑟德拉·伊斯时没有使用她的头衔'tharchion'，每次都会遭受-4的惩罚。
当角色完成一次长休后，他或她的外表会恢复正常。
当角色们收拾好行囊后，红袍巫师会会与他们一起传送回深水城。
在角色们来得及反应之前，另一位红袍巫师会挥手，围绕角色们之前隐形的魔法圈在地面上闪烁着生命。`},{id:"scn_rot_1e5",locationId:"loc_rot_1dd",name:"结局",activation:{condition:{type:"always"},priority:0},skeleton:["如果前往泰瑟尔的任务成功，它将在第17章中为派系带来好处。","此外，每个角色在背包或口袋里隐藏着一个绑在干肠环上的人类指骨。","每块骨头充当一个守护卷轴（不死生物），通过将其折断激活并消耗。","如果你选择，角色们在这一章结束时可以获得一个等级。"],flesh:`如果前往泰瑟尔的任务成功，它将在第17章中为派系带来好处。此外，每个角色在背包或口袋里隐藏着一个绑在干肠环上的人类指骨。每块骨头充当一个守护卷轴（不死生物），通过将其折断激活并消耗。

如果你选择，角色们在这一章结束时可以获得一个等级。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[163],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_rot_1e6",locationId:"loc_rot_1e6",name:"提亚马特的归来",activation:{condition:{type:"always"},priority:0},skeleton:["《巨龙僭政：提亚马特的崛起》在龙井达到了高潮，那里龙类、巨人、施法者和军队在升起的提亚马特神庙周围展开了壮观的冲突。","与此同时，冒险者们承担了潜入神庙、对抗龙后仆从及其黑暗女神的最后战斗的关键任务。","提亚马特的崛起的高潮结局应该在本模组的所有其他章节完成之后，并且角色达到14级或15级时再进行。","在本章之前的章节中，竖琴手同盟和散塔林会都在巨龙教团中安插了间谍。","因此，这两个组织都可以报告教团的准备即将完成。"],flesh:`《巨龙僭政：提亚马特的崛起》在龙井达到了高潮，那里龙类、巨人、施法者和军队在升起的提亚马特神庙周围展开了壮观的冲突。与此同时，冒险者们承担了潜入神庙、对抗龙后仆从及其黑暗女神的最后战斗的关键任务。

提亚马特的崛起的高潮结局应该在本模组的所有其他章节完成之后，并且角色达到14级或15级时再进行。在本章之前的章节中，竖琴手同盟和散塔林会都在巨龙教团中安插了间谍。因此，这两个组织都可以报告教团的准备即将完成。同样的信息也可以通过角色在第十三章的任何事件中直接审问囚犯获得。

无论它如何发生，从这一章节开始行动的那一刻起，事件就会迅速升级。从那个时刻起就没有回头路，犹豫不决的角色们冒着失去一切的风险。`,spotlightRefs:[],presentNpcIds:["npc_tiamat"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[164],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/RoT/027-tod-17-01.webp"}},{id:"scn_rot_1e7",locationId:"loc_rot_1e6",name:"最终战役",activation:{condition:{type:"always"},priority:0},skeleton:["剑海岸派系与龙之教派之间的战斗表现为一场巨大的军队与怪兽力量之间的冲突。","这场战斗如何展开取决于'深水城议会'章节的结果，以及英雄们在联合各个派系方面的成功程度。","在最终战斗之前或期间，冒险者有机会侦察龙井，并秘密潜入教派的要塞以及提亚马特的神庙。","自从开始响起，龙吼号角的悲哀音调一直是剑海岸上升威胁的不断提醒。","当赛维林的计划进入最后阶段，德拉霍恩的的呼唤从几乎无法察觉变为清晰而遥远的声音，给所有听到它的人带来一种即将到来的厄运感。"],flesh:`剑海岸派系与龙之教派之间的战斗表现为一场巨大的军队与怪兽力量之间的冲突。这场战斗如何展开取决于'深水城议会'章节的结果，以及英雄们在联合各个派系方面的成功程度。

在最终战斗之前或期间，冒险者有机会侦察龙井，并秘密潜入教派的要塞以及提亚马特的神庙。

自从开始响起，龙吼号角的悲哀音调一直是剑海岸上升威胁的不断提醒。当赛维林的计划进入最后阶段，德拉霍恩的的呼唤从几乎无法察觉变为清晰而遥远的声音，给所有听到它的人带来一种即将到来的厄运感。

有关龙吼号角的更多信息，请参见"龙之井"中的区域8。

赛维林将提亚马特带回世界的计划分为五个不同的阶段：

组装一个配得上提亚马特的宝藏堆。

集结一支由龙和其他邪恶生物组成的军队，以防御龙井不受干扰。

捕获数百名囚犯，他们的灵魂将为魔法提供力量，这种魔法将吸引提亚马特来到费伦。

执行仪式，在龙井的火山口中升起提亚马特的神庙。

在执行引导提亚马特从九层地狱来到世界的仪式时，牺牲囚犯。

赛维林计划的前三个阶段已经完成。第四阶段将在角色们到达龙井时完成。第五阶段将在英雄们及其派系盟友到达后不久开始，并成为这场对抗邪教的最终战斗的焦点。

英雄们的目标是挫败赛维林的计划，防止提亚马特从九层地狱进入费伦。到目前为止，角色们的成就已经挫败了赛维林并延缓了他的计划。但现在唯一能真正阻止他的方法，是终结由教派的红袍巫师会盟友在提亚马特神庙内进行的仪式。

四周百里范围内的景象是一个严峻的预兆，预示着如果提亚马特统治世界将意味着什么。

色彩龙日夜间在该区域巡逻。你可以要求进行DC 12智力（自然）或感知（求生）检定，以判断角色是否及时找到庇护所或隐蔽自己以避免经过的彩龙。或者，简单地询问角色采取了什么预防措施以避免被发现，并自行判断这些措施是否足以保证他们的安全。在林地中穿行、沿着峡谷行走、尽可能减少在开阔地的时间，甚至装扮成邪教徒都是有用的策略。

飞往龙井存在问题。无论是骑乘金属龙还是依靠自己的力量飞行，角色们在到达目的地之前很久就会遭到色彩龙的攻击。`,spotlightRefs:[],presentNpcIds:["npc_tiamat","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[164],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"龙井周围的地区几乎没有什么残留，而龙吼号角不断的嗡嗡声迫使当地的动物逃离或疯狂。该地区一些村庄成了血迹斑斑的鬼城，每一个农舍都是烧焦的废墟。你遇到的少数生还者都朝着相反的方向前进，他们都在注视着天空，寻找飞翔中的龙的明显形状。",dmGuidance:`详见本节后面的'敌人与盟友'以获取更多信息。
当角色们和由深水城议会派系指挥的部队接近龙井时，他们无疑正深入敌境。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_1ed",locationId:"loc_rot_1ed",name:"龙之井",activation:{condition:{type:"always"},priority:0},skeleton:["龙井是位于日落山脉北端的一个灭绝火山口。","出于凡人无法理解的原因，许多生命走到尽头的龙类来到龙井这里死去，这种情况已经持续了数千年。","一个早已死去的火山口从前方的灰烬平原上升起。","在火山渣锥的陡峭斜坡上，成千上万的生物在四处徘徊，或者正在排成有序的步兵队伍。","在上方的空中，几十只色彩龙在盘旋和尖叫，就像一群巨大的乌鸦，等待着即将到来的战斗中的流血。"],flesh:`龙井是位于日落山脉北端的一个灭绝火山口。出于凡人无法理解的原因，许多生命走到尽头的龙类来到龙井这里死去，这种情况已经持续了数千年。

龙之邪教很久以前就发现了龙井。熔岩管在现在休眠的火山下蜿蜒形成了自然走廊，连接着邪教为了自己的目的而扩大的洞穴。在中央火山口中，他们建立了一个仪式空间，用于从被吸引到这个地点、知道自己即将死去的龙那里制造龙巫妖。在赛维林的领导下，火山口及其下方的地下通道被重新设计为提亚马特的宏伟神庙将被建立的地方，以及龙后新统治的开始。火山口的地面上铺满了龙的骨头，堆积成巨大的、错综复杂的堆。

龙井的火山口大致呈椭圆形，周围有高而陡峭的墙壁。幸运的是，上方飞翔的龙并不是在搜寻潜入者，而是在战斗前相互争吵和摆出姿态。

在过去，龙井的邪教徒数量很少超过一百。现在，随着最终胜利触手可及，他们的人数已经激增。只有邪教徒在火山口下方的迷宫中生活和工作。成千上万的雇佣兵、巨人、恶魔和怪物服务于邪教，主要驻扎在北部和东部坡地上。

火山口的地图显示了提亚马特神庙在被红袍法师的魔法升起时将出现的位置轮廓。

熔岩管在死火山的火山口下方形成了天然的通道。自从龙之教宣称龙井以来，数十年间，教派成员扩大了由熔岩管连接的天然洞穴，并挖掘了新的洞穴。

大多数熔岩管入口都沿着火山坡有可见路径标记。入口2A很少使用，因此角色们如果不仔细搜索很可能会忽略它。入口3从未使用；邪教徒认为这条隧道在六十年前坍塌后仍然被堵塞。

熔岩管的直径从15到25尺不等。它们足够宽敞，足以让龙巫妖和龙轻松穿行。

熔岩管走廊由挂在墙上间隔较宽的灯具或火把昏暗地照亮。除非另有说明，龙井内的房间由灯具明亮地照亮。

龙吼号角的声音不断在龙之井中回荡，源自区域8。结合邪教在洞穴内外的活动，它通过岩石传递出持续不断的背景噪音。如果战斗在3轮或更短时间内结束，或者战斗距离可能听到的生物超过200英尺，战斗的声音不会被注意到。特别响亮的声音，如en=Thunderwave法术，则很容易被听到。

随着仪式的临近，龙井中到处都是邪教徒及其盟友。无论是使用隐身还是伪装成邪教徒，角色们可以轻易地侦查熔岩管的入口，或者从火山口边缘看到升起的神庙。然而，一旦冒险者进入龙井，伪装就变得无效。在洞穴中工作和巡逻的邪教徒高度警觉，并使用复杂的检查和口令系统作为防止间谍和敌方特工的证据。

仪式的高级阶段意味着所有邪教徒都已被命令去巡逻或准备战斗。

入口 1A 是火山口北侧所有隧道入口中使用最频繁的一个。所有被运送到龙井的宝藏都会经过它，前往区域6 或 区域7。每个入口都由 3 只龙翼、3 只龙爪 和 2 只守卫龙兽 把守（这些生物的数据请参阅附录D）。

1B和1C入口彼此在视线范围内，但1A入口被山坡的弯曲部分遮挡，无法从另外两个入口看到。

在火山口东侧的隧道入口中，只有2C使用频繁。所有关押在洞穴中的囚犯在前往区域16、17或18时都会通过该隧道。入口2A很少使用。入口2B由居住在区域12和13的邪教徒使用，其他人不使用。

2A和2B入口每个由1个龙翼和3个龙爪守卫。2C入口由1个龙牙、3个龙翼、5个龙爪和3个守卫龙兽守卫。请参阅附录D了解这些生物的具体数值。

驻扎在聚居区内的龙魂与龙牙等级的邪教徒使用这些营房。这些房间布置得像兵营，有供睡觉的简易床和存放个人物品的储物箱。由于目前龙井周围有许多陌生人，使用这些房间的邪教徒安排了4只守卫龙兽（数据见附录D）来监视该区域。

被邪教俘虏的囚犯被关押在这些黑暗、肮脏的房间里，等待仪式的日子和他们最终的牺牲。当囚犯在这里时，两组守卫巡逻这些区域，每组包括1个龙翼，2个龙爪和1个守卫龙兽。

然而，一个半饥饿的十五岁人类男性名叫斯特林藏在尸体中。斯特林可以告诉角色，邪教徒几小时前把囚犯带往了火山口，但他所知甚少。

随着区域16空置，由5个龙爪组成的囚犯护送队已开始将区域17的囚犯转移到神庙。此外，如果发生骚乱，附近工作的1个龙牙、5个龙爪和2个守卫龙兽将在2轮内到达。（见附录D了解这些生物的具体数值）囚犯们没有被铐在一起，但大多数人因饥饿而虚弱。如果有武器，10个人类平民可以与角色们并肩作战。角色们可以自由地以他们认为合适的方式利用这些盟友。如果被派去战斗，他们会很快死去。

红袍法师们用魔法在火山口中建立了提亚马特的神殿，并将召唤龙后降临这个世界，他们居住在这两个洞穴中。两个区域都装饰奢华，但红袍法师们将他们的物品打包在箱子里，随时准备通过传送离开。较大的区域20是拉斯·莫达尔的住所。目前所有的红袍法师都在提亚马特的神殿中。`,spotlightRefs:[],presentNpcIds:["npc_severin","npc_tiamat","npc_naergoth_bladelord"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[165],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`一个早已死去的火山口从前方的灰烬平原上升起。在火山渣锥的陡峭斜坡上，成千上万的生物在四处徘徊，或者正在排成有序的步兵队伍。在上方的空中，几十只色彩龙在盘旋和尖叫，就像一群巨大的乌鸦，等待着即将到来的战斗中的流血。

一座令人头脑麻木的建筑从交错的骸骨下方拔地而起，耸立在毁灭的火山之上。这座提亚马特神庙部分由火山灰与龙骨熔合而成，部分由九层地狱的黑暗魔法灌注的石块构成，有着混乱的角度和突出的扶壁。在那纷乱的檐口和高耸的角度中，你可以辨认出五座不对称的塔楼，顶部是扭曲的尖顶。`,dmGuidance:`当角色们和他们的盟友到达与教派作战时，这项工作将会完成。
如果角色们在一个地方逗留太久，或者在龙井周围漫无目的地徘徊，就根据现有遭遇增加额外的警卫巡逻。
有关这些生物的具体数值，请参见附录D。
如果角色们在献祭进行时经过这里，16号区域除了一些饿死的囚犯尸体外是空的，大约有一打。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_1fa",locationId:"loc_rot_1ed",name:"3. 被遗忘的入口",activation:{condition:{type:"always"},priority:0},skeleton:["自从六十年前隧道在三岔路口坍塌以来，没有邪教徒使用过这个入口，使得这个通道变得无用。","最近，一只掘土巨怪兽偶然挖洞进入了这些隧道，重新开放了三个方向的通道。","因此，这个隧道提供了一个未受守卫的入口进入火山口和巢穴。","对入口的任何探索都表明这里被蝙蝠使用，但没有显示出邪教活动的迹象。","三岔路口东侧仍然矗立的一堵薄弱的碎石墙让邪教徒们相信通道仍然完全被堵塞。"],flesh:`自从六十年前隧道在三岔路口坍塌以来，没有邪教徒使用过这个入口，使得这个通道变得无用。最近，一只掘土巨怪兽偶然挖洞进入了这些隧道，重新开放了三个方向的通道。因此，这个隧道提供了一个未受守卫的入口进入火山口和巢穴。

一个在冲锋前侦察山脉的角色在成功进行 DC 12 智力（调查）或感知（察觉）检定时会注意到这个入口。对入口的任何探索都表明这里被蝙蝠使用，但没有显示出邪教活动的迹象。

三岔路口东侧仍然矗立的一堵薄弱的碎石墙让邪教徒们相信通道仍然完全被堵塞。然而，这堵墙可以被小心地拆除以允许向那个方向移动。在三岔路口的角色可以感觉到空气沿着隧道的北部部分流动，暗示着那边有开放的空间。`,spotlightRefs:[],presentNpcIds:["npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[167],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_1fb",locationId:"loc_rot_1ed",name:"4. 纳格罗斯·刀领主",activation:{condition:{type:"always"},priority:0},skeleton:["在赛维林接管龙之教之前，龙井被用来将濒死的龙转变为龙巫妖。","纳尔戈斯·剑领主（见附录D了解具体数值）是一个亡灵巫妖，以龙之教的名义指挥这个地点数百年。","在为教派奉献了多个生命的无私服务之后，他被排挤到一边，以支持新秩序。","尽管他的忠诚仍然坚定不移，但Naergoth担心赛维林会成功实现他的计划，并且提亚马特将摧毁释放她的教派。","作为一个亡灵巫妖，Naergoth对于住处几乎没有需求，但是这里存放了他生前所属的物品，使得这个地方对他来说很愉快。"],flesh:`在赛维林接管龙之教之前，龙井被用来将濒死的龙转变为龙巫妖。纳尔戈斯·剑领主（见附录D了解具体数值）是一个亡灵巫妖，以龙之教的名义指挥这个地点数百年。在为教派奉献了多个生命的无私服务之后，他被排挤到一边，以支持新秩序。尽管他的忠诚仍然坚定不移，但Naergoth担心赛维林会成功实现他的计划，并且提亚马特将摧毁释放她的教派。

作为一个亡灵巫妖，Naergoth对于住处几乎没有需求，但是这里存放了他生前所属的物品，使得这个地方对他来说很愉快。这个房间看起来像是一个数百年前被遗弃的贵族骑士的家，其内容物现在覆盖着灰尘，挂着蜘蛛网，充满了悲伤。

潜行穿过巢穴的入侵者可以在任何地方遇到Naergoth。您可以将他用作角色扮演遭遇，或者在您选择的时刻，当队伍的战斗进展顺利时，将他加入战斗中。`,spotlightRefs:[],presentNpcIds:["npc_severin","npc_naergoth_bladelord","npc_tiamat"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[167],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},mapGeometry:{imageRef:"adventure/RoT/030-tod-17-02.webp"}},{id:"scn_rot_1fc",locationId:"loc_rot_1ed",name:"5. 未使用的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个空荡荡的房间在龙巫妖时代所服务的任何目的早已被遗忘。"],flesh:"这个空荡荡的房间在龙巫妖时代所服务的任何目的早已被遗忘。",spotlightRefs:[],presentNpcIds:["npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[167],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_1fd",locationId:"loc_rot_1ed",name:"6. 主宝藏室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的入口经常被人使用，由1个龙牙（见附录D了解具体数值）守卫，他指挥着2个血肉魔像。","教派从剑海岸偷来的宝藏，为了给龙后创造一个宝藏堆，都囤积在这个房间里，创造了一个连最贪婪的角色梦想中也难以想象的景象。","你看到了黄金——成山的黄金。","还有宝石......和珍珠......银器和镀金的镜子......镶嵌宝石的剑和国王的盔甲......箱子、盒子和桶里装满了剑海岸的宝藏，塞满了一个大教堂大小的洞穴，堆到了巨人的高度！","小径蜿蜒穿过闪闪发光的宝物堆，反射的光线使你的眼睛眼花缭乱，就像一百万颗闪烁的星星触手可及。"],flesh:`这个房间的入口经常被人使用，由1个龙牙（见附录D了解具体数值）守卫，他指挥着2个血肉魔像。

教派从剑海岸偷来的宝藏，为了给龙后创造一个宝藏堆，都囤积在这个房间里，创造了一个连最贪婪的角色梦想中也难以想象的景象。

在堆积如山的宝藏之间狭窄的小径上巡逻的是4个守卫龙兽（见附录D了解具体数值）。它们习惯了这些金库无人值守（普通教派成员是不允许来这里的），并且会立即攻击入侵者或移动到入口处加入战斗。

这个洞穴藏有数不清的宝藏。en=Detect Magic法术会被硬币的金属阻挡，因此只有表面的物品容易被发现。您可以在表面上放置任何常见的或不常见的魔法物品，但找到稀有的东西应该需要一个漫长而嘈杂的搜索。`,spotlightRefs:[],presentNpcIds:["npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:["enc_rot_1fd"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[168],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"你看到了黄金——成山的黄金。还有宝石......和珍珠......银器和镀金的镜子......镶嵌宝石的剑和国王的盔甲......箱子、盒子和桶里装满了剑海岸的宝藏，塞满了一个大教堂大小的洞穴，堆到了巨人的高度！小径蜿蜒穿过闪闪发光的宝物堆，反射的光线使你的眼睛眼花缭乱，就像一百万颗闪烁的星星触手可及。",dmGuidance:"如果角色们寻找特定的物品并且有几个小时的时间来搜索，他们很可能可以在这里找到。"},{id:"scn_rot_200",locationId:"loc_rot_1ed",name:"7. 次要宝物室",activation:{condition:{type:"always"},priority:0},skeleton:["艺术品、有价值的书籍、细亚麻布、水晶器皿，以及特别是易碎的魔法物品，都比在区域6更加小心地存放在这里，被仔细地堆放在架子和桌子上。"],flesh:"艺术品、有价值的书籍、细亚麻布、水晶器皿，以及特别是易碎的魔法物品，都比在区域6更加小心地存放在这里，被仔细地堆放在架子和桌子上。",spotlightRefs:[],presentNpcIds:["npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[168],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_201",locationId:"loc_rot_1ed",name:"8. 龙角号",activation:{condition:{type:"always"},priority:0},skeleton:["在距离区域8入口50英尺的范围内，空气因声音而开始闪烁。","失败意味着角色无法再向区域8前进。","成功表示在龙吼号角停止发声后的2分钟后，耳聋状态结束。","失败则表示角色在龙吼号角停止发声后的1小时内保持耳聋状态。","在隧道的喧嚣之后，这个房间显得异常安静——直到你意识到在令人畏惧的龙吼号角面前你完全耳聋。"],flesh:`在距离区域8入口50英尺的范围内，空气因声音而开始闪烁。任何在门口20英尺内的角色必须成功通过一次DC 12的力量检定，才能继续抵抗声音产生的压力。失败意味着角色无法再向区域8前进。

对于任何进入区域8的角色，声音都会逐渐消失，因为任何进入该区域的生物都会暂时处于耳聋状态，并且必须进行一次DC 12的体质豁免检定。成功表示在龙吼号角停止发声后的2分钟后，耳聋状态结束。失败则表示角色在龙吼号角停止发声后的1小时内保持耳聋状态。

一个气元素用它无尽的气息吹响号角，由一个石魔像守卫。

龙吼号角悬挂在房间的北半部，并指向西南角。当号角响起时，生物在回合中第一次进入号角前方150英尺的锥形区域或在此区域开始其回合时，必须进行DC 15的体质豁免检定。如果检定失败，生物将受到27点（6d8）的雷鸣伤害，并被击倒倒地。如果检定成功，生物只受到一半伤害，且不会被击倒倒地。号角无法转向或对准特定目标。

如果号角的声音停止超过1分钟，1个龙魂、1个龙牙和4个龙翼将会到达进行调查。请参阅附录D了解这些教派成员的具体数值。

龙吼号角曾是提亚马特的古老红龙伴侣Ephelomon的角，她将它赠予龙族，以帮助他们在对抗巨人的战争中。龙吼号角是一种信号装置，它非常巨大，需要两个中型生物（或一个大型或更大的生物）来持有，而第三个生物吹响它，使大地响应其召唤。

龙吼号角发出的低沉、呻吟的嗡嗡声使几英里内的正常动物感到不安，并且它警告两千英里内的所有龙提高警惕，因为有巨大的危险即将来临。编码的爆破曾经被用来传递特定的信息。

了解德拉霍恩的历史的人知道，它最初是为了向色彩龙族发出危险信号而建造的——龙之教派已经将这一目的腐化，用来从北方各地召唤色彩龙族到龙井。`,spotlightRefs:[],presentNpcIds:["npc_tiamat","npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:["enc_rot_201"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[168],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在隧道的喧嚣之后，这个房间显得异常安静——直到你意识到在令人畏惧的龙吼号角面前你完全耳聋。它由一只古老红龙的巨大龙角雕刻而成，悬挂在房间的天花板上，被火焰熏黑至深褐色，并由厚厚的青铜带固定。刻在其表面的龙语符文闪烁着紫色的神秘火焰。",dmGuidance:`当角色沿着熔岩管向这个房间前进时，龙吼号角的音调明显变得更大了。
如果角色们干扰号角或空气元素，魔像和元素将发起攻击。`},{id:"scn_rot_204",locationId:"loc_rot_1ed",name:"9. 策划室",activation:{condition:{type:"always"},priority:0},skeleton:["在这个目前空置的房间里，赛维林与他的内部圈子和其他教派领袖会面，制定计划并发布命令。","一张长桌两侧摆放着几条长凳和椅子，墙上还有几个小写字台供抄写员记录笔记。"],flesh:"在这个目前空置的房间里，赛维林与他的内部圈子和其他教派领袖会面，制定计划并发布命令。一张长桌两侧摆放着几条长凳和椅子，墙上还有几个小写字台供抄写员记录笔记。",spotlightRefs:[],presentNpcIds:["npc_severin","npc_naergoth_bladelord"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_205",locationId:"loc_rot_1ed",name:"10. 领导者宿舍",activation:{condition:{type:"always"},priority:0},skeleton:["这个设备齐全的宿舍住着停留在龙井的最重要的紫衣使者。","床铺排列在北墙和东墙上，西墙则有锁柜式的衣橱存放日常装备。","随着龙井的活动达到高峰，这个房间是空的。"],flesh:"这个设备齐全的宿舍住着停留在龙井的最重要的紫衣使者。床铺排列在北墙和东墙上，西墙则有锁柜式的衣橱存放日常装备。随着龙井的活动达到高峰，这个房间是空的。",spotlightRefs:[],presentNpcIds:["npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_206",locationId:"loc_rot_1ed",name:"11. 塞弗林的住处",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间是赛维林的私人住处，里面有一张床、一个装有普通个人物品的箱子、一个存放长袍和礼服的衣柜、一个大型写字台，以及一个用于展示龙面具的木铁陈列架。","这个架子的设计允许面具单独展示或组合成单一的龙后面具。","组合面具目前与赛维林在一起。"],flesh:"这个房间是赛维林的私人住处，里面有一张床、一个装有普通个人物品的箱子、一个存放长袍和礼服的衣柜、一个大型写字台，以及一个用于展示龙面具的木铁陈列架。这个架子的设计允许面具单独展示或组合成单一的龙后面具。组合面具目前与赛维林在一起。",spotlightRefs:[],presentNpcIds:["npc_severin","npc_naergoth_bladelord"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_208",locationId:"loc_rot_1ed",name:"14. 囚犯的物品",activation:{condition:{type:"always"},priority:0},skeleton:["从囚犯那里拿走的个人物品被扔进这个房间。","在这些零碎物品中找不到任何有价值的东西，但是这里的匕首、飞镖和短剑可以用来装备仍然有能力战斗的囚犯。"],flesh:"从囚犯那里拿走的个人物品被扔进这个房间。在这些零碎物品中找不到任何有价值的东西，但是这里的匕首、飞镖和短剑可以用来装备仍然有能力战斗的囚犯。",spotlightRefs:[],presentNpcIds:["npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_209",locationId:"loc_rot_1ed",name:"15. 低级邪教徒的房间",activation:{condition:{type:"always"},priority:0},skeleton:["看守16号到18号区域囚犯的邪教徒在这里睡觉。","房间里只有铺在地上的稻草床垫，几张用木板搭在桶上的桌子，以及粗糙制作的长凳。","请参阅附录D了解这些邪教徒的具体数值。"],flesh:"看守16号到18号区域囚犯的邪教徒在这里睡觉。房间里只有铺在地上的稻草床垫，几张用木板搭在桶上的桌子，以及粗糙制作的长凳。请参阅附录D了解这些邪教徒的具体数值。",spotlightRefs:[],presentNpcIds:["npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:["enc_rot_209"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色们进入时，房间里有3个龙翼和9个龙爪在战斗前快速地吃一顿饭。"},{id:"scn_rot_20b",locationId:"loc_rot_1ed",name:"19. 幼龙围栏",activation:{condition:{type:"always"},priority:0},skeleton:["巡逻熔岩隧道的幼龙被关在这些房间里。","房间里散落着被啃过的类人生物骨头，还有腰带扣、破旧靴子和血迹斑斑的衣物碎片。"],flesh:"巡逻熔岩隧道的幼龙被关在这些房间里。房间里散落着被啃过的类人生物骨头，还有腰带扣、破旧靴子和血迹斑斑的衣物碎片。",spotlightRefs:[],presentNpcIds:["npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:["enc_rot_20b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"当角色们调查这些房间时，会看到4只守卫龙兽（详见附录D），它们正在争夺一些最好不要识别的大块肉。"},{id:"scn_rot_20d",locationId:"loc_rot_1ed",name:"22. 陷坑",activation:{condition:{type:"always"},priority:0},skeleton:["这部分火山口在很久以前坍塌成一个地下洞穴，形成了一个大型天坑。","唯一知道熔岩隧道的一个分支通向这个天坑的龙之教派的现任成员是尸妖骑士纳尔戈斯·剑领主（区域4），他相信隧道仍然被堵塞。","这个天坑深30英尺。","天坑的侧面陡峭，但由粗糙的火山岩组成，易于攀爬。","龙骨覆盖了坑底，深度达5英尺，使得坑底成为3。"],flesh:`这部分火山口在很久以前坍塌成一个地下洞穴，形成了一个大型天坑。唯一知道熔岩隧道的一个分支通向这个天坑的龙之教派的现任成员是尸妖骑士纳尔戈斯·剑领主（区域4），他相信隧道仍然被堵塞。

这个天坑深30英尺。天坑的侧面陡峭，但由粗糙的火山岩组成，易于攀爬。龙骨覆盖了坑底，深度达5英尺，使得坑底成为3。邪教徒从未来过这个天坑；唯一可能在此区域发现入侵者的生物是飞龙。`,spotlightRefs:[],presentNpcIds:["npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[171],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_20e",locationId:"loc_rot_1ed",name:"23. 北方出口",activation:{condition:{type:"always"},priority:0},skeleton:["覆盖在火山口的龙骨已经被从这些出口推开，形成了一个荒凉的开阔广场，连接着通往神庙入口的两个隧道出口。","这个空间从东到西延伸250尺，从神庙大门向北延伸100尺，在祭祀仪式期间是可怕的屠杀现场。","囚犯们被从神庙赶进广场，那里有五只等待的龙（每种颜色各一只，年龄类别不限）用牙齿和爪子撕咬他们。","尽管这些出口通常没有守卫，在囚犯牺牲期间，每个隧道都被2个猬魔和4个守卫龙兽（详见附录D的具体数值）阻塞。","恶魔们的注意力集中在广场上，而不是隧道或守卫幼龙在做什么。"],flesh:`覆盖在火山口的龙骨已经被从这些出口推开，形成了一个荒凉的开阔广场，连接着通往神庙入口的两个隧道出口。这个空间从东到西延伸250尺，从神庙大门向北延伸100尺，在祭祀仪式期间是可怕的屠杀现场。囚犯们被从神庙赶进广场，那里有五只等待的龙（每种颜色各一只，年龄类别不限）用牙齿和爪子撕咬他们。

尽管这些出口通常没有守卫，在囚犯牺牲期间，每个隧道都被2个猬魔和4个守卫龙兽（详见附录D的具体数值）阻塞。恶魔们的注意力集中在广场上，而不是隧道或守卫幼龙在做什么。守卫幼龙可能会在恶魔之前注意到接近的角色，但只有在恶魔下令时才会攻击。因此，队伍可能会先发制人对付这些守卫。

对于移动越过清理过的广场或从塌陷处接近此区域的角色，这些骨头堆是3。`,spotlightRefs:[],presentNpcIds:["npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[171],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_20f",locationId:"loc_rot_1ed",name:"24. 神庙出口",activation:{condition:{type:"always"},priority:0},skeleton:["南部巢穴的主要熔岩隧道出口位于提亚马特神庙的黑色小教堂（区域5）。","注定要被献祭的囚犯被带到黑色小教堂，然后被带到神庙入口，并被赶出到广场上，供等待的龙群享用。","这个出口无人守卫。"],flesh:"南部巢穴的主要熔岩隧道出口位于提亚马特神庙的黑色小教堂（区域5）。注定要被献祭的囚犯被带到黑色小教堂，然后被带到神庙入口，并被赶出到广场上，供等待的龙群享用。这个出口无人守卫。",spotlightRefs:[],presentNpcIds:["npc_tiamat","npc_naergoth_bladelord","npc_severin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[171],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_rot_210",locationId:"loc_rot_1ed",name:"提亚马特的神庙",activation:{condition:{type:"always"},priority:0},skeleton:["位于龙井火山口的神庙是标记着提亚马特在阿弗纳斯领域中心的同一神庙。","红袍法师的仪式将其带到这里，作为龙后滩头堡和信标，在此过程中将其融入火山口地面。","通往区域1（蓝色礼拜堂）的主门是唯一明显的入口，但一条熔岩管走廊从邪教的地下迷宫通向区域5（黑色礼拜堂）。","当仪式开始时，神庙是教派活动的焦点，赛维林的红袍巫师会盟友（使用魔法师具体数值）处于行动的中心。","祭品的灵魂提供了打开九层地狱和物质界之间通道的魔力。"],flesh:`位于龙井火山口的神庙是标记着提亚马特在阿弗纳斯领域中心的同一神庙。红袍法师的仪式将其带到这里，作为龙后滩头堡和信标，在此过程中将其融入火山口地面。通往区域1（蓝色礼拜堂）的主门是唯一明显的入口，但一条熔岩管走廊从邪教的地下迷宫通向区域5（黑色礼拜堂）。

当仪式开始时，神庙是教派活动的焦点，赛维林的红袍巫师会盟友（使用魔法师具体数值）处于行动的中心。祭品的灵魂提供了打开九层地狱和物质界之间通道的魔力。红袍法师们随后将引导提亚马特，当她用爪子进入凡人领域时。

神庙的内部是一个单一的开放空间。尽管被划分为不同的区域，这个类似大教堂的空间没有内部墙壁或上层楼层。五个小教堂分别致力于提亚马特的五个方面以及与之匹配的色彩龙分支，它们都围绕着中央的后殿。后殿和所有五个小教堂分别升起成为独立的尖塔，在中央尖塔的尖顶处达到圣所。地图上显示的2层是地面以上50尺的区域；3层是地面以上100尺的区域，这两个区域只能通过飞行到达。

地图上的编号区域在下面的表格中进行了识别，该表格还识别了在仪式中将提亚马特带到龙井的关键NPC。

如果您愿意，角色之前互动过的任何自由龙语者都可以在神庙内各自的小教堂中出现，但他们的出现不是必需的。不在这里的龙语者在外面领导龙井的防御。

为了成功地将提亚马特从九层地狱召唤到这个世界，红袍法师们必须在冒险者进入提亚马特的神庙后，连续10轮成功集中进行召唤仪式。每一轮，至少需要有五位红袍法师使用行动来执行仪式，以便该轮能够成功集中，帮助引导提亚马特穿越各个位面。

在红袍法师的回合结束时，如果少于五位红袍法师使用行动来执行仪式，那么漂浮在宏伟后殿（区域7）的传送门会波动，仪式没有进展。如果连续两轮少于五位红袍法师执行仪式，传送门会崩溃，成功集中的轮数计数将重置为0。

龙后面具是仪式的关键，而赛维林无法离开圣所。他的en=Levitate法术将持续整个仪式的过程，即使他处于失能或被杀死，也能让他在圣所中浮空。赛维林在佩戴龙后面具时可以进行攻击和自卫。只要他的身体佩戴着面具并留在圣所中，他甚至无需活着就能继续仪式。`,spotlightRefs:[],presentNpcIds:["npc_tiamat","npc_severin","npc_naergoth_bladelord"],availableInfoIds:[],encounterIds:["enc_tod_tiamat_ritual"],treasureSlotIds:[],eventIds:["evt_tod_enter_tiamat_temple"],tone:"exploration",_meta:{sourcePages:[171],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`一旦你的眼睛适应了提亚马特神庙的惊人混乱，你会看到它的内部是一个单一的、类似大教堂的空间，高耸入云。五个不同的拱顶从中央走廊分支出去。尽管这个地方的主导颜色是一种没有生命的、灰烬般的灰色，但每个侧拱都微弱地闪烁着蓝色、绿色、红色、白色或黑色——那是邪恶龙和他们吞噬世界的女王的颜色。
红袍法师站在五个拱顶中的每一个里，吟唱并将魔法力量引导到中央的小祭坛。在那里，一股千变万化的奥术能量涡流在焦黑的地板上升起，延伸至神庙中心尖塔的扭曲深处。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_215",locationId:"loc_rot_1ed",name:"敌人与盟友",activation:{condition:{type:"always"},priority:0},skeleton:["通过查阅在四次深水城议会会议期间填写的计分卡（见附录 B），你可以评估针对龙之教派施加的力量的强度。","角色在冒险过程中建立的联盟对于阻止这个邪教至关重要。","最终战斗资源表列出了双方战斗的生物和力量。","'派系资源'涵盖了在冒险过程中创建的联盟的主要可能性，但根据你的战役中的事件，你可以按需修改列表。","当你已经记录了哪些资源正在对抗邪教时，就是决定这些善良力量如何进攻的时候了。"],flesh:`通过查阅在四次深水城议会会议期间填写的计分卡（见附录 B），你可以评估针对龙之教派施加的力量的强度。角色在冒险过程中建立的联盟对于阻止这个邪教至关重要。

最终战斗资源表列出了双方战斗的生物和力量。'派系资源'涵盖了在冒险过程中创建的联盟的主要可能性，但根据你的战役中的事件，你可以按需修改列表。

当你已经记录了哪些资源正在对抗邪教时，就是决定这些善良力量如何进攻的时候了。角色是向龙井进军的联盟力量中的关键人物，他们的意见具有巨大的分量。因此，请确保玩家知道他们在策划战斗中扮演着关键角色。

最简单的方法是一对一的对决，特定的优秀资源抵消邪教资源。让玩家自由搭配资源，但如果你觉得有必要，可以对特定计划的可行性发表意见。例如，玩家可能决定，由散塔林会提供的刺客应该通过潜入邪教建筑群，将那些囚犯护送到自由来对抗献祭的囚犯。在这种情况下，你可以提醒玩家，黑暗网络的专家杀手可以更好地用于对抗赛维林的内圈邪教领袖，而Harper特工或领主联盟的部队则在火山口下方的隧道中提供帮助。

某些对抗是显而易见的。金属龙是色彩龙的天敌，这两股力量在战斗中可以预期会相互牵制。更重要的是，金属龙将阻止色彩龙干扰冒险者的计划。

邪教的首领仍然在神庙的圣所（区域13）中，红袍法师编织他们的魔法时，他戴着龙后面具。他可以根据需要进行防守或进攻战斗，而且普通信徒只要知道赛维林还活着就会战斗到死。

拉斯·莫达尔主持引导仪式，但任何红袍巫师会都可以承担这个角色。当神庙遭到攻击时，他交出仪式中的部分并领导对冒险者的攻击。

紫衣者在邪教徒中是受尊敬的领袖，他们中的大多数本身就是强大的战斗者。

龙之教派在龙井有成千上万的战斗人员，他们全副武装，致力于龙后的荣耀。

在龙井出现的色彩龙的确切数量由您决定，可能从几十只到一百只或更多。

由红袍巫师召唤的为邪教效力的魔鬼们，侍奉着那些致力于看到提亚马特离开阿弗纳斯的邪恶主人。

为邪教作战的少数巨人相信提亚马特的归来是不可避免的，但他们情绪低落且不合作。当他们看到容易的胜利时会战斗，但当他们感觉到失败时会撤退。

雇佣兵公司构成了邪教军队的主力。这些雇佣兵比邪教徒训练更为有素，能够与费伦大陆上最佳的战士对抗。

寺庙是仪式的地点。如果仪式成功，破坏它可以帮助削弱提亚马特。

没有执行仪式的红袍法师被编入雇佣兵单位和武装邪教徒的部队中，以提供额外的火力支持。

面具的魔力是仪式成功的核心。如果它被认领或摧毁，仪式就会失败，但赛维林会使用面具的所有力量来保持它的拥有权。

剑鞘骑士团的士兵是剑海岸上最坚韧、最坚定的士兵之一。除了在自己单位中服役外，他们的领导力还增强了其他部队。

翡翠联盟的德鲁伊和游侠响应号召，从剑海岸的森林和山脉带来他们的树精和狮鹫盟友。

这些沉默的杀手追踪并杀死敌方的领导者和信使。尽管只有少数散塔林会刺客加入了战斗，但他们可以在关键时刻使敌军单位瘫痪，或者阻止重要命令到达目的地。

在战斗中截获情报是哈珀（Harper）的专长，哈珀特工可以提供关于邪教计划和部署的关键信息。此外，哈珀的弓箭手、步兵和施法者可以在战斗中产生巨大的影响。

金属龙在数量上将被它们的彩色同类所超过。然而，它们与盟友的合作比邪恶龙更好，这使它们在战场上产生更大的影响。

某些强大的恶魔不希望看到提亚马特在费伦释放，因为他们知道如果在一个人类不再是统治者的世界中，他们自己的力量将会受到限制。九层地狱的代理人是凶猛的战士，但他们在战斗中的存在让许多其他士兵感到不安。

如果深水城的派系确保了巨人的效忠，他们乐于与色彩龙族对抗。然而，如果两个分队没有得到同等重要性的任务并且被分开，巨人和金属龙之间可能会出现麻烦。

领主联盟各个独立成员集结的力量在战斗力上仅次于拳套秩序，并且数量上要多得多。这些构成了攻击力量的主力。

如果可用，飞行城堡在战斗中可能证明是一个巨大的帮助。Skyreach一旦出现在龙井上方，就会立即受到色彩龙的攻击，将这些强大的战斗者从保护火山口的任务中吸引开来。

奥秘兄弟会的成员与为邪教而战的红袍法师不相上下。然而，奥秘兄弟会的施法者不会接受除其他强大的施法者之外任何人的命令——这几乎肯定意味着另一个奥秘兄弟会的成员。

将提亚马特带回的过程涉及四个关键组成部分——邪教积累的宝藏、龙后面具、囚犯的牺牲以及是所有赛维林疯狂计划的顶点的仪式。Skyreach城堡的坠毁或被俘已经使邪教在为龙后收集合适宝藏的目标上受挫，使得过程的其他三个阶段变得更加重要。

面具、牺牲和仪式都可以成为角色们的目标。有效地这样做实际上可能结束仪式并阻止提亚马特的出现。即使英雄们无法在威胁开始之前设法结束威胁，但扰乱仪式过程的任何部分都会削弱龙后。

当善良的力量已经部署并且战斗开始时，角色们将承担最重要的目标——攻击提亚马特的神庙。穿过火山口下方的洞穴提供了到达神庙的多种选择。

角色们是直接与提亚马特战斗还是阻止召唤仪式完成，取决于他们在最终战斗中的行动。但当角色们看到提亚马特的头颅通过红袍法师的传送门强行进入时，他们会明白他们面对的不是普通怪物。正如在附录D中的具体数值所清楚显示的，提亚马特是神。如果她以全力通过传送门显现，她可以轻松摧毁多个15级的队伍。在她的神庙化为灰烬和骨头的同时与提亚马特进行的一场巨大战斗，是结束一个战役的难忘方式——但角色们可能不会作为任何比记忆更多的东西存活下来。

在神庙中的战斗中，在五个或更多的红袍法师成功集中进行召唤仪式的10回合后，请大声朗读以下文本。

提亚马特的头部在仪式完成后的第二回合开始进入战斗，顺序如下：白色、黑色、绿色、蓝色和红色。她的红色头部在仪式完成后的第六回合宣布龙后的完整降临。在那之前，提亚马特只能使用她的咬击和吐息武器。这给了角色们在龙后出现前最后一次尝试削弱龙后的机会。

一旦提亚马特完全现身，她会花费必要的回合，嘲笑着一次吞噬她那些不幸的仆从——拉斯·莫达尔，任何剩余的红袍法师，然后是赛维林（或者是他的尸体，只要它戴着龙后面具）。接下来的回合，她将怒火转向冒险者。

英雄们在这场最终战斗之前和之中的行动可以降低提亚马特出现前的力量。如果以下任何事件发生，请做记录：

由于仪式连续两轮被中断，仪式成功集中的轮数计数被重置为0。

龙后面具被摧毁，或者从赛维林的身体上移除并从神庙圣所（区域13）中取出。

角色持有任何一个龙面具，或者可以其他方式阻止一个或多个面具在仪式中被使用。（黑龙面具 可能在之前的冒险中被角色所获得。）

对提亚马特的神庙造成了严重破坏，就像受到了en=Earthquake法术的影响。

在神庙前对囚犯的牺牲被停止了。这可能之前通过攻击龙或切断囚犯流向该区域的方式已经实现。

当上述任何事件发生时，将按照以下顺序对提亚马特施加以下惩罚：

提亚马特的攻击和吐息武器伤害减少15，她的生命值下降75。

提亚马特失去了她的再生特性，她的生命值上限减少了75点，她对来自非魔法武器的钝击、穿刺和挥砍伤害的免疫变成了抗性。

提亚马特失去了有限法术免疫，她的生命值上限减少了75。

提亚马特的攻击掷骰、豁免检定DC和AC受到-5的惩罚，她的生命值上限减少了75。

提亚马特只能进行三次传奇行动，她的生命值上限减少了75点。

如果上述所有惩罚都成功应用，提亚马特实际上被降低到挑战等级18的敌人——但这对于四个15级角色来说仍然是一场致命的战斗。如果没有全部五个减少，角色们在与龙后的战斗中几乎没有生存的机会，更不用说赢得战斗了。

当龙后尖叫着解体时，传送门崩溃，她被拖回阿弗纳斯。除非有人能重新创造仪式的条件并再次尝试释放她，否则她将一直被困在那里。

除了上述注明的情况外，不应为了公平战斗而任意削弱提亚马特。将龙后呈现为任何低于神明的存在都会削弱整个冒险的体验。与提亚马特交战的角色必须明白，他们正处于生命中的决战之中。

与阻止龙后归来的目标相比，没有任何个人的生存是重要的，有时英雄会为了更大的利益而牺牲。当然，如果击败了提亚马特，倒下的角色可以再次被复活。如果她没有被击败，死亡可能不是最坏的选择。`,spotlightRefs:[],presentNpcIds:["npc_severin","npc_rath_modar","npc_tiamat","npc_naergoth_bladelord"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[172],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`神庙中央后殿充满的魔法漩涡突然随着一声雷鸣裂开。
五个巨大无比的龙首开始从那由符文环绕的火焰之坑中撕裂并咬碎而出。龙后提亚马特即将从她在九层地狱的牢笼中破体而出，降临于世。`,dmGuidance:`有关赛维林的具体数值，请参见附录D。
有关拉思·摩达尔的具体数值，请参见附录D。
如果角色们将提亚马特的生命值降至0点，她的解体特性就会启动。`,offerableQuestIds:["qst_main_tod"]},{id:"scn_rot_238",locationId:"loc_rot_1ed",name:"胜利或失败",activation:{condition:{type:"always"},priority:0},skeleton:["世界的命运取决于这场最终的战斗。","无论英雄们及其盟友是赢是输，其后果都将在费伦大陆感受到。","邪龙教在这次冒险中的胜利是真实可能的，这将是费伦的灾难。","随着提亚马特的崛起，凡人的时代结束了，龙的时代开始了。","国家和王国分崩离析，文明陷入血腥的战争，混乱至高无上。"],flesh:`世界的命运取决于这场最终的战斗。无论英雄们及其盟友是赢是输，其后果都将在费伦大陆感受到。

邪龙教在这次冒险中的胜利是真实可能的，这将是费伦的灾难。随着提亚马特的崛起，凡人的时代结束了，龙的时代开始了。国家和王国分崩离析，文明陷入血腥的战争，混乱至高无上。

龙后的凡人代理人没有一个得到他们预期的奖赏。释放她的红袍法师要么被吞噬，要么被赶走，被萨扎斯坦的势力追捕。策划提亚马特回归的邪教徒们情况稍好一些，因为龙后不在乎她的龙类臣民追捕、吞噬和奴役哪些凡人。赛维林希望引入并统治的龙族的辉煌时代变成了一个邪恶龙类主宰一切的残酷世界。

然而，这样的黑暗时代并不意味着你的战役的终结。角色们虽然输掉了一场关键的战斗，但他们可能会幸存下来继续战争。他们的新目标是找到一种方法永久驱逐或摧毁提亚马特，再次为世界带来和平。

如果提亚马特被送回九层地狱，她的威胁就结束了，但胜利的后果可能会带来冒险者必须处理的挑战。这包括帮助龙井中剩余的数百名囚犯。赛维林的倒台也意味着还有数百名不知悔改的邪教徒仍然在世界上逍遥法外，渴望在最近失败后获得力量和复仇。

此外，剑海岸的大部分财富都存放在龙井中。除了处理复仇的邪教徒外，角色们可能会在将宝藏归还给原主或其亲属的同时，扮演领导角色，同时还要应对骗子、小偷和寻宝者，他们希望利用突然成为费伦最富有地牢的机会。

在邪教的前盟友中，报复心切的色彩龙纷纷返回它们的巢穴，但在此之前，许多色彩龙试图夺取邪教宝藏中的珍贵财宝或装满黄金和宝石的桶。它们的女王被击败后，色彩龙可能会在费伦大陆上进行几个世纪未见的破坏狂欢。

即使胜利，善良势力的军队在对抗提亚马特的战斗中也将付出沉重的代价。除了士兵外，代表无数地区和家族统治贵族的领袖们也将在战斗中倒下。然而，情况并非一片黯淡。在黑暗中，慷慨和合作的感人事例将脱颖而出——而其中最伟大的莫过于冒险者们的传说。几代人将从英雄们的壮举和牺牲中汲取灵感，当他们重建家园并展望更美好的日子时。`,spotlightRefs:[],presentNpcIds:["npc_tiamat","npc_severin","npc_naergoth_bladelord"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:["evt_tod_aftermath"],tone:"exploration",_meta:{sourcePages:[174],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}}],o=[{id:"npc_azbara_jos",name:"阿兹巴拉·乔斯",aliases:["Azbara Jos"],role:"「纳瑞塔城堡」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：在纳里塔城堡中只有一位红袍法师：阿兹巴拉·乔斯，他之前也在Greenfields的邪教营地，并且与瑞兹米尔一起北上。",voice:"原书未另述固定声线；按「纳瑞塔城堡」中已记录的立场与行为说话。",skeleton:["在纳里塔城堡中只有一位红袍法师：阿兹巴拉·乔斯，他之前也在Greenfields的邪教营地，并且与瑞兹米尔一起北上。","如果阿兹巴拉·乔斯看到这些角色或得知他们的存在，他会安排一次私下会面——一次瑞兹米尔和灰生甚至不知道，更不用说参加的会面。","如果他们在城堡里横冲直撞，杀死遇到的每一个人，那么阿兹巴拉·乔斯只有一个担忧：在某人或某物杀死他之前通过传送门逃脱。"],flesh:"在纳里塔城堡中只有一位红袍法师：阿兹巴拉·乔斯，他之前也在Greenfields的邪教营地，并且与瑞兹米尔一起北上。如果阿兹巴拉·乔斯看到这些角色或得知他们的存在，他会安排一次私下会面——一次瑞兹米尔和灰生甚至不知道，更不用说参加的会面。如果他们在城堡里横冲直撞，杀死遇到的每一个人，那么阿兹巴拉·乔斯只有一个担忧：在某人或某物杀死他之前通过传送门逃脱。",appearance:{tags:[],description:""},knownInfoIds:["info_tod_hoard_route"],recruitable:!1,combatRef:"阿兹巴拉·乔斯|ToD",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_130"},{id:"npc_blagothkus",name:"布拉戈提库斯",aliases:["Blagothkus"],role:"「22. 云巨人塔」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：如果上方或下方的食人魔发出警报，布拉戈提库斯不能被突袭。",voice:"原书未另述固定声线；按「22. 云巨人塔」中已记录的立场与行为说话。",skeleton:["如果上方或下方的食人魔发出警报，布拉戈提库斯不能被突袭。","布拉戈提库斯（附录D）和两个食人魔（他的管家）并不是这个房间里唯一的居民。","在他的回合中，布拉戈提库斯可以作为一个奖励动作，召唤一个被魔法束缚在房间里的气元素。","愚笨的食人魔管家不善言辞，但布拉戈提库斯却把他们当作倾诉对象，表达他对龙之教团可能试图夺取城堡控制权的担忧。","布拉戈提库斯的最终目的地在提亚马特的崛起中有描述。","如果有人试图从他手中夺取城堡，布拉戈提库斯会前往驾驶塔，试图让城堡在世界之脊山脉坠毁；"],flesh:"如果上方或下方的食人魔发出警报，布拉戈提库斯不能被突袭。布拉戈提库斯（附录D）和两个食人魔（他的管家）并不是这个房间里唯一的居民。在他的回合中，布拉戈提库斯可以作为一个奖励动作，召唤一个被魔法束缚在房间里的气元素。愚笨的食人魔管家不善言辞，但布拉戈提库斯却把他们当作倾诉对象，表达他对龙之教团可能试图夺取城堡控制权的担忧。布拉戈提库斯的最终目的地在提亚马特的崛起中有描述。如果有人试图从他手中夺取城堡，布拉戈提库斯会前往驾驶塔，试图让城堡在世界之脊山脉坠毁；",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"布拉戈提库斯|ToD",_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_25b"},{id:"npc_captain_othelstan",name:"奥瑟斯坦队长",aliases:["Captain Othelstan"],role:"「帕纳斯特」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`原书未单列性格；已知行为：）

瑞兹米尔的副手是一位邪教资深成员，名为奥瑟斯坦队长。`,voice:"原书未另述固定声线；按「帕纳斯特」中已记录的立场与行为说话。",skeleton:[`）

瑞兹米尔的副手是一位邪教资深成员，名为奥瑟斯坦队长。`,"（包括奥瑟斯坦队长在内的村庄里没有人知道城堡离开帕纳斯特后会去哪里。"],flesh:`）

瑞兹米尔的副手是一位邪教资深成员，名为奥瑟斯坦队长。（包括奥瑟斯坦队长在内的村庄里没有人知道城堡离开帕纳斯特后会去哪里。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"奥瑟斯坦队长|ToD",_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_1f1"},{id:"npc_dralmorrer_borngray",name:"德拉莫瑞·灰生",aliases:["Dralmorrer Borngray"],role:"「纳瑞塔城堡」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：尽管瑞兹米尔负责让奈瑞塔城堡复活，并以龙之教的名义声称拥有它（实际上她认为这是她的个人财产），但一位名叫德拉莫瑞·灰生的紫色穿戴者精灵（见附录D）代表瑞兹米尔指挥城堡。",voice:"原书未另述固定声线；按「纳瑞塔城堡」中已记录的立场与行为说话。",skeleton:["尽管瑞兹米尔负责让奈瑞塔城堡复活，并以龙之教的名义声称拥有它（实际上她认为这是她的个人财产），但一位名叫德拉莫瑞·灰生的紫色穿戴者精灵（见附录D）代表瑞兹米尔指挥城堡。","德拉莫瑞·灰生是Eldreth Valuuthra的成员，这是一个致力于将人类从费伦移除的精灵至上主义团体。","他认为自己和目标之间唯一的障碍是城堡的现任主人，德拉莫瑞·灰生；"],flesh:"尽管瑞兹米尔负责让奈瑞塔城堡复活，并以龙之教的名义声称拥有它（实际上她认为这是她的个人财产），但一位名叫德拉莫瑞·灰生的紫色穿戴者精灵（见附录D）代表瑞兹米尔指挥城堡。德拉莫瑞·灰生是Eldreth Valuuthra的成员，这是一个致力于将人类从费伦移除的精灵至上主义团体。他认为自己和目标之间唯一的障碍是城堡的现任主人，德拉莫瑞·灰生；",appearance:{tags:[],description:""},knownInfoIds:["info_tod_hoard_route"],recruitable:!1,combatRef:"德拉莫瑞·灰生|ToD",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_130"},{id:"npc_frulam_mondath",name:"弗鲁兰·蒙达斯",aliases:["Frulam Mondath"],role:"「任务」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：弗鲁兰·蒙达斯 下令发起攻击，她知道冒险者们此时正在要塞中。",voice:"原书未另述固定声线；按「任务」中已记录的立场与行为说话。",skeleton:["弗鲁兰·蒙达斯 下令发起攻击，她知道冒险者们此时正在要塞中。","这是每个人瞥见弗鲁兰·蒙达斯（见附录D）穿着紫色长袍，由一打守卫陪同的理想时机。"],flesh:"弗鲁兰·蒙达斯 下令发起攻击，她知道冒险者们此时正在要塞中。这是每个人瞥见弗鲁兰·蒙达斯（见附录D）穿着紫色长袍，由一打守卫陪同的理想时机。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"弗鲁兰·蒙达斯|ToD",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_05f"},{id:"npc_jamna_gleamsilver",name:"贾姆娜·烁银",aliases:["Jamna Gleamsilver"],role:"「计划中的道路事件」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：在贾姆娜·烁银和阿兹巴拉·乔斯加入商队后，必须发生三个计划中的事件。",voice:"原书未另述固定声线；按「计划中的道路事件」中已记录的立场与行为说话。",skeleton:["在贾姆娜·烁银和阿兹巴拉·乔斯加入商队后，必须发生三个计划中的事件。","凶手当然是贾姆娜·烁银。"],flesh:"在贾姆娜·烁银和阿兹巴拉·乔斯加入商队后，必须发生三个计划中的事件。凶手当然是贾姆娜·烁银。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"贾姆娜·烁银|ToD",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_0d5"},{id:"npc_langdedrosa_cyanwrath",name:"兰德卓萨·青怒",aliases:["Langdedrosa Cyanwrath"],role:"「追踪袭击者」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：即便如此，他们所透露的也只是他们是龙巫教的见习成员，以及他们领导者的名字（瑞兹米尔、弗鲁兰·蒙达斯 和 兰德卓萨·青怒），以及对绿石镇的袭击是为了为龙收集宝藏。",voice:"原书未另述固定声线；按「追踪袭击者」中已记录的立场与行为说话。",skeleton:["即便如此，他们所透露的也只是他们是龙巫教的见习成员，以及他们领导者的名字（瑞兹米尔、弗鲁兰·蒙达斯 和 兰德卓萨·青怒），以及对绿石镇的袭击是为了为龙收集宝藏。"],flesh:"即便如此，他们所透露的也只是他们是龙巫教的见习成员，以及他们领导者的名字（瑞兹米尔、弗鲁兰·蒙达斯 和 兰德卓萨·青怒），以及对绿石镇的袭击是为了为龙收集宝藏。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"兰德卓萨·青怒|ToD",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_08b"},{id:"npc_leosin_erlanthar",name:"Leosin Erlanthar",aliases:[],role:"「接近」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：一个名叫Leosin Erlanthar的僧侣也在镇上。",voice:"原书未另述固定声线；按「接近」中已记录的立场与行为说话。",skeleton:["一个名叫Leosin Erlanthar的僧侣也在镇上。"],flesh:"一个名叫Leosin Erlanthar的僧侣也在镇上。",appearance:{tags:[],description:""},knownInfoIds:["info_tod_council_flow","info_tod_varram_mask"],recruitable:!1,combatRef:"Leosin Erlanthar|ToD",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_05f"},{id:"npc_linan_swift",name:"利南·斯威夫特",aliases:["Linan Swift"],role:"「随机遭遇」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：这位女性是利南·斯威夫特，她的丈夫是卡斯。",voice:"原书未另述固定声线；按「随机遭遇」中已记录的立场与行为说话。",skeleton:["这位女性是利南·斯威夫特，她的丈夫是卡斯。"],flesh:"这位女性是利南·斯威夫特，她的丈夫是卡斯。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"利南·斯威夫特|ToD",_meta:{sourcePages:[8],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_05f"},{id:"npc_ontharr_frume",name:"昂塔尔·弗鲁姆",aliases:["Ontharr Frume"],role:"「埃尔托瑞尔」中的具名角色",plotCritical:!1,initialAttitude:0,personality:'理想: 责任，更大的利益 ("强者必须保护弱者，无论代价如何。',voice:'原书对白/措辞样本：如果他们询问昂塔尔·弗鲁姆，任何人都可以指引他们到Frume派系的"总部"，战锤骑士团，在一家名为A Pair of Black Antlers的酒馆。',skeleton:['如果他们询问昂塔尔·弗鲁姆，任何人都可以指引他们到Frume派系的"总部"，战锤骑士团，在一家名为A Pair of Black Antlers的酒馆。',"昂塔尔·弗鲁姆 和 Leosin Erlanthar，以及剑海岸沿线一些其他关注此事的领袖和学者，正处于组织反抗龙之崇拜的初期阶段。","昂塔尔·弗鲁姆 代表战锤秩序。"],flesh:'如果他们询问昂塔尔·弗鲁姆，任何人都可以指引他们到Frume派系的"总部"，战锤骑士团，在一家名为A Pair of Black Antlers的酒馆。昂塔尔·弗鲁姆 和 Leosin Erlanthar，以及剑海岸沿线一些其他关注此事的领袖和学者，正处于组织反抗龙之崇拜的初期阶段。昂塔尔·弗鲁姆 代表战锤秩序。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"昂塔尔·弗鲁姆|ToD",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_0d5"},{id:"npc_pharblex_spattergoo",name:"法布列斯·溅黏",aliases:["Pharblex Spattergoo"],role:"「纳瑞塔城堡」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：为龙之教服务的啵灵蛙团体遵循法布列斯·溅黏（见附录D）的命令，他是一个罕见的掌握了萨满魔法的啵灵蛙。",voice:"原书未另述固定声线；按「纳瑞塔城堡」中已记录的立场与行为说话。",skeleton:["为龙之教服务的啵灵蛙团体遵循法布列斯·溅黏（见附录D）的命令，他是一个罕见的掌握了萨满魔法的啵灵蛙。"],flesh:"为龙之教服务的啵灵蛙团体遵循法布列斯·溅黏（见附录D）的命令，他是一个罕见的掌握了萨满魔法的啵灵蛙。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"法布列斯·溅黏|ToD",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_130"},{id:"npc_raggnar_redtooth",name:"拉格纳·红齿",aliases:["Raggnar Redtooth"],role:"「2. 金色酒杯」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：店主是拉格纳·红齿，他表面上看起来很友好，但实际上秘密接受龙之邪教的贿赂。",voice:"原书未另述固定声线；按「2. 金色酒杯」中已记录的立场与行为说话。",skeleton:["店主是拉格纳·红齿，他表面上看起来很友好，但实际上秘密接受龙之邪教的贿赂。"],flesh:"店主是拉格纳·红齿，他表面上看起来很友好，但实际上秘密接受龙之邪教的贿赂。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"拉格纳·红齿|ToD",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_1f3"},{id:"npc_rath_modar",name:"拉斯·莫达",aliases:["Rath Modar"],role:"「12. 红法师的房间」中的具名角色",plotCritical:!1,initialAttitude:0,personality:'原书未单列性格；已知行为：如果拉斯·莫达独自一人，他正站在讲台前阅读一本书（见"宝藏"）。',voice:'原书对白/措辞样本：如果拉斯·莫达独自一人，他正站在讲台前阅读一本书（见"宝藏"）。',skeleton:['如果拉斯·莫达独自一人，他正站在讲台前阅读一本书（见"宝藏"）。',"如果阿兹巴拉不在，拉斯·莫达可能会误认为角色们是邪教徒。","拉斯·莫达在这里是为了帮助看守正在被运送到龙井的庞大宝藏，并且也为了计划召唤提亚玛特；","第四个是一只活的石像鬼，它为拉斯·莫达服务。","如果他处于劣势，拉斯·莫达会变为隐形，对自己施放en=Fly法术，触碰消失的墙面，然后从起降平台上跳下，留下阿兹巴拉·乔斯独自应对。","拉斯·莫达和他的伙伴在提亚马特的崛起中扮演了重要角色。"],flesh:'如果拉斯·莫达独自一人，他正站在讲台前阅读一本书（见"宝藏"）。如果阿兹巴拉不在，拉斯·莫达可能会误认为角色们是邪教徒。拉斯·莫达在这里是为了帮助看守正在被运送到龙井的庞大宝藏，并且也为了计划召唤提亚玛特；第四个是一只活的石像鬼，它为拉斯·莫达服务。如果他处于劣势，拉斯·莫达会变为隐形，对自己施放en=Fly法术，触碰消失的墙面，然后从起降平台上跳下，留下阿兹巴拉·乔斯独自应对。拉斯·莫达和他的伙伴在提亚马特的崛起中扮演了重要角色。',appearance:{tags:[],description:""},knownInfoIds:["info_tod_cult_plan","info_tod_thay_offer","info_tod_final_ritual"],recruitable:!1,combatRef:"拉斯·莫达|ToD",_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_220"},{id:"npc_rezmir",name:"瑞兹米尔",aliases:["Rezmir"],role:"「营地」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"狗头人之所以在这里，是因为他们对龙的崇拜态度使他们容易被瑞兹米尔和其他高级别邪教徒操纵，但他们并不受其他种族的喜欢或信任。",voice:'原书对白/措辞样本：营地里众所周知，被称为"育婴室"，并且有一个公开的秘密，即瑞兹米尔计划在那里孵化一窝龙蛋。',skeleton:["它为瑞兹米尔、弗鲁兰·蒙达斯、兰德卓萨·青怒和阿兹巴拉·乔斯预留。","瑞兹米尔并不期望来自小镇的严重挑战，袭击队伍中的行动较慢的成员和行走中的伤员在袭击后的整日陆续进入营地。","狗头人之所以在这里，是因为他们对龙的崇拜态度使他们容易被瑞兹米尔和其他高级别邪教徒操纵，但他们并不受其他种族的喜欢或信任。","营地（区域4）后面的洞穴只对那些经过蒙达斯和瑞兹米尔批准的人开放，这包括少数守卫和狗头人。",'营地里众所周知，被称为"育婴室"，并且有一个公开的秘密，即瑞兹米尔计划在那里孵化一窝龙蛋。',"半黑龙瑞兹米尔几个月前来到了这个地区，并设立了营地。"],flesh:'它为瑞兹米尔、弗鲁兰·蒙达斯、兰德卓萨·青怒和阿兹巴拉·乔斯预留。瑞兹米尔并不期望来自小镇的严重挑战，袭击队伍中的行动较慢的成员和行走中的伤员在袭击后的整日陆续进入营地。狗头人之所以在这里，是因为他们对龙的崇拜态度使他们容易被瑞兹米尔和其他高级别邪教徒操纵，但他们并不受其他种族的喜欢或信任。营地（区域4）后面的洞穴只对那些经过蒙达斯和瑞兹米尔批准的人开放，这包括少数守卫和狗头人。营地里众所周知，被称为"育婴室"，并且有一个公开的秘密，即瑞兹米尔计划在那里孵化一窝龙蛋。半黑龙瑞兹米尔几个月前来到了这个地区，并设立了营地。',appearance:{tags:[],description:""},knownInfoIds:["info_tod_cult_plan","info_tod_hoard_route"],recruitable:!1,combatRef:"瑞兹米尔|ToD",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_08b"},{id:"npc_sandesyl_morgia",name:"桑德西尔·莫吉亚",aliases:["Sandesyl Morgia"],role:"「重要非玩家角色」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：天穹城堡是云巨人布拉戈提库斯的家园，还有一对名为Wigluf和Hulde的石巨人（云巨人的盟友），龙语者瑞兹米尔来自龙之邪教，两位来自泰伊的红袍法师（拉斯·莫达和阿兹巴拉·乔斯），一个名叫桑德西尔·莫吉亚的吸血鬼，以及一头名为Glazhael the Cloudchaser的成年白龙。",voice:"原书未另述固定声线；按「重要非玩家角色」中已记录的立场与行为说话。",skeleton:["天穹城堡是云巨人布拉戈提库斯的家园，还有一对名为Wigluf和Hulde的石巨人（云巨人的盟友），龙语者瑞兹米尔来自龙之邪教，两位来自泰伊的红袍法师（拉斯·莫达和阿兹巴拉·乔斯），一个名叫桑德西尔·莫吉亚的吸血鬼，以及一头名为Glazhael the Cloudchaser的成年白龙。"],flesh:"天穹城堡是云巨人布拉戈提库斯的家园，还有一对名为Wigluf和Hulde的石巨人（云巨人的盟友），龙语者瑞兹米尔来自龙之邪教，两位来自泰伊的红袍法师（拉斯·莫达和阿兹巴拉·乔斯），一个名叫桑德西尔·莫吉亚的吸血鬼，以及一头名为Glazhael the Cloudchaser的成年白龙。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"桑德西尔·莫吉亚|ToD",_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_196"},{id:"npc_talis_the_white",name:"白袍塔利斯",aliases:["Talis the White"],role:"「与龙之教团对峙」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：如果战斗爆发，这两个角色会直接前往城堡下方的异界之门，传送到白袍塔利斯的狩猎小屋（见第七章）。",voice:"原书未另述固定声线；按「与龙之教团对峙」中已记录的立场与行为说话。",skeleton:["如果战斗爆发，这两个角色会直接前往城堡下方的异界之门，传送到白袍塔利斯的狩猎小屋（见第七章）。"],flesh:"如果战斗爆发，这两个角色会直接前往城堡下方的异界之门，传送到白袍塔利斯的狩猎小屋（见第七章）。",appearance:{tags:[],description:""},knownInfoIds:["info_tod_cult_plan","info_tod_talis_bargain"],recruitable:!1,combatRef:"白袍塔利斯|ToD",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_130"},{id:"npc_trepsin",name:"特雷普辛",aliases:["Trepsin"],role:"「2. 狩猎犬舍」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`原书未单列性格；已知行为：当门打开时，阅读：

四臂巨魔，特雷普辛，正在要求邪教的识别信号。`,voice:"原书未另述固定声线；按「2. 狩猎犬舍」中已记录的立场与行为说话。",skeleton:[`当门打开时，阅读：

四臂巨魔，特雷普辛，正在要求邪教的识别信号。`,"这些龙服从特雷普辛作为它们群体的领袖。","特雷普辛穿着一件苔藓覆盖且肮脏的斗篷，他用井水将其浸湿；","特雷普辛是恶魔领主巴菲门特的追随者，巴菲门特是猎人和屠戮者的主宰。","特雷普辛 为自己保留了一些物品。"],flesh:`当门打开时，阅读：

四臂巨魔，特雷普辛，正在要求邪教的识别信号。这些龙服从特雷普辛作为它们群体的领袖。特雷普辛穿着一件苔藓覆盖且肮脏的斗篷，他用井水将其浸湿；特雷普辛是恶魔领主巴菲门特的追随者，巴菲门特是猎人和屠戮者的主宰。特雷普辛 为自己保留了一些物品。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"特雷普辛|ToD",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_1a3"},{id:"npc_diderius",name:"迪德里乌斯",aliases:["Diderius"],role:"「迪德里乌斯的墓穴」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：迪德里乌斯 的墓穴及其魔法池隐藏在一个雕刻在高耸悬崖中的复杂密室中。",voice:"原书未另述固定声线；按「迪德里乌斯的墓穴」中已记录的立场与行为说话。",skeleton:["迪德里乌斯 的墓穴及其魔法池隐藏在一个雕刻在高耸悬崖中的复杂密室中。","最初是作为法师 迪德里乌斯 围绕神秘占卜池建造的庄园的一部分，这个复合体在他去世后才被改造成墓穴。","墓穴俯瞰着围绕魔法池发展起来的城镇废墟，这个城镇是为了迎合那些寻求 迪德里乌斯 感知的人而建立的。","当迪德里乌斯去世时，那些生前尊敬他的人将他转变成了一个特殊的木乃伊领主，他的魔法弥漫在他的墓穴中。","由于迪德里乌斯是中立而非邪恶的，这个区域缺少其他木乃伊领主墓穴中常见的黑暗魔法。","迪德里乌斯的魔法还引导那些表现出适当尊重的人。"],flesh:"迪德里乌斯 的墓穴及其魔法池隐藏在一个雕刻在高耸悬崖中的复杂密室中。最初是作为法师 迪德里乌斯 围绕神秘占卜池建造的庄园的一部分，这个复合体在他去世后才被改造成墓穴。墓穴俯瞰着围绕魔法池发展起来的城镇废墟，这个城镇是为了迎合那些寻求 迪德里乌斯 感知的人而建立的。当迪德里乌斯去世时，那些生前尊敬他的人将他转变成了一个特殊的木乃伊领主，他的魔法弥漫在他的墓穴中。由于迪德里乌斯是中立而非邪恶的，这个区域缺少其他木乃伊领主墓穴中常见的黑暗魔法。迪德里乌斯的魔法还引导那些表现出适当尊重的人。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"迪德里乌斯|ToD",_meta:{sourcePages:[40],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_rot_0ea"},{id:"npc_galvan",name:"加尔文",aliases:["Galvan"],role:"「16. 塔利斯大厅」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：这些领袖的名字是赛维林红龙、加尔文蓝龙、内洛维绿龙、瑞兹米尔黑龙和瓦拉姆白龙。",voice:"原书未另述固定声线；按「16. 塔利斯大厅」中已记录的立场与行为说话。",skeleton:["这些领袖的名字是赛维林红龙、加尔文蓝龙、内洛维绿龙、瑞兹米尔黑龙和瓦拉姆白龙。"],flesh:"这些领袖的名字是赛维林红龙、加尔文蓝龙、内洛维绿龙、瑞兹米尔黑龙和瓦拉姆白龙。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"加尔文|ToD",_meta:{sourcePages:[9],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_hotdq_1d0"},{id:"npc_iskander",name:"伊斯坎德尔",aliases:["Iskander"],role:"「高塔」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：一旦进入，他们得知伊斯坎德尔的同伙发现了他的叛国行为，并试图杀死他。",voice:"原书未另述固定声线；按「高塔」中已记录的立场与行为说话。",skeleton:["一旦进入，他们得知伊斯坎德尔的同伙发现了他的叛国行为，并试图杀死他。","角色们必须弄清楚塔的魔法传送系统，然后击败邪教徒和Xonthal的一些原始防御，以救出伊斯坎德尔并索取他承诺给他们的龙面具。","要传送到地牢层，必须使用沙漏形状的钥匙触摸符号，这是伊斯坎德尔在阳台上挥舞的那把。","伊斯坎德尔 使用这把钥匙从天文台逃到地牢，但在使用后将钥匙扔回房间，这样冒险者们可以跟随他下去。"],flesh:"一旦进入，他们得知伊斯坎德尔的同伙发现了他的叛国行为，并试图杀死他。角色们必须弄清楚塔的魔法传送系统，然后击败邪教徒和Xonthal的一些原始防御，以救出伊斯坎德尔并索取他承诺给他们的龙面具。要传送到地牢层，必须使用沙漏形状的钥匙触摸符号，这是伊斯坎德尔在阳台上挥舞的那把。伊斯坎德尔 使用这把钥匙从天文台逃到地牢，但在使用后将钥匙扔回房间，这样冒险者们可以跟随他下去。",appearance:{tags:[],description:""},knownInfoIds:["info_tod_xonthal_fake_mask"],recruitable:!1,combatRef:"伊斯坎德尔|ToD",_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_rot_1ae"},{id:"npc_maccath_the_crimson",name:"绯红的麦卡丝",aliases:["Maccath the Crimson"],role:"「简介」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：恢复那些书籍的可能性是吸引绯红的麦卡丝来到移动冰海的部分原因。",voice:"原书未另述固定声线；按「简介」中已记录的立场与行为说话。",skeleton:["恢复那些书籍的可能性是吸引绯红的麦卡丝来到移动冰海的部分原因。","当骄傲、有抱负的绯红的麦卡丝来到Arauthator的巢穴时，这条龙以成为Arveiaturace的主人和骑手的前景诱惑了她。","绯红的麦卡丝在前往Hosttower寻求入学时，是那些最优秀和最聪明的人物之一。"],flesh:"恢复那些书籍的可能性是吸引绯红的麦卡丝来到移动冰海的部分原因。当骄傲、有抱负的绯红的麦卡丝来到Arauthator的巢穴时，这条龙以成为Arveiaturace的主人和骑手的前景诱惑了她。绯红的麦卡丝在前往Hosttower寻求入学时，是那些最优秀和最聪明的人物之一。",appearance:{tags:[],description:""},knownInfoIds:["info_tod_draakhorn"],recruitable:!1,combatRef:"绯红的麦卡丝|ToD",_meta:{sourcePages:[33],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_rot_05f"},{id:"npc_marfulb",name:"马夫尔布",aliases:["Marfulb"],role:"「冰蟾工作区」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：角色避免在该区域发生战斗——以及防止冰蟾通知冰巨魔——的最佳机会是通过与他们的领袖马夫尔布进行谈判，赢得冰蟾的支持。",voice:"原书未另述固定声线；按「冰蟾工作区」中已记录的立场与行为说话。",skeleton:["角色避免在该区域发生战斗——以及防止冰蟾通知冰巨魔——的最佳机会是通过与他们的领袖马夫尔布进行谈判，赢得冰蟾的支持。","普通的冰蟾蜍很聪明，但它们的领袖马夫尔布是杰出的（智力13）。","甚至阿劳托尔也不如马夫尔布那样了解奥亚维加顿的运作，她知道冰山中每一个包裹、箱子和硬币堆的内容和价值，直到最后一枚铜币。","马夫尔布对她一生的工作感到极大的满足，但她对世界脊南部的社会了解太少，以至于无法感知其全部重要性。","奥术兄弟会将认为这些知识是现存最惊人的自然哲学作品之一（一旦它们从冰蟾蜍的独特语言中艰难地翻译过来），他们会争相见面并赞扬马夫尔布。"],flesh:"角色避免在该区域发生战斗——以及防止冰蟾通知冰巨魔——的最佳机会是通过与他们的领袖马夫尔布进行谈判，赢得冰蟾的支持。普通的冰蟾蜍很聪明，但它们的领袖马夫尔布是杰出的（智力13）。甚至阿劳托尔也不如马夫尔布那样了解奥亚维加顿的运作，她知道冰山中每一个包裹、箱子和硬币堆的内容和价值，直到最后一枚铜币。马夫尔布对她一生的工作感到极大的满足，但她对世界脊南部的社会了解太少，以至于无法感知其全部重要性。奥术兄弟会将认为这些知识是现存最惊人的自然哲学作品之一（一旦它们从冰蟾蜍的独特语言中艰难地翻译过来），他们会争相见面并赞扬马夫尔布。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"马夫尔布|ToD",_meta:{sourcePages:[35],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_rot_0c3"},{id:"npc_mend_nets",name:"修补网",aliases:["Mend-nets"],role:"「2. 从村公所的入口」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：咳嗽的村民名叫修补网（部族武者）。",voice:"原书未另述固定声线；按「2. 从村公所的入口」中已记录的立场与行为说话。",skeleton:["咳嗽的村民名叫修补网（部族武者）。","修补网天生对陌生人持怀疑态度，但如果有角色能使用en=Lesser Restoration来治愈他的疾病，他就会成为一个值得信赖的盟友。"],flesh:"咳嗽的村民名叫修补网（部族武者）。修补网天生对陌生人持怀疑态度，但如果有角色能使用en=Lesser Restoration来治愈他的疾病，他就会成为一个值得信赖的盟友。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"修补网|ToD",_meta:{sourcePages:[32],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_rot_098"},{id:"npc_naergoth_bladelord",name:"纳尔戈斯·剑领主",aliases:["Naergoth Bladelord"],role:"「22. 陷坑」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：唯一知道熔岩隧道的一个分支通向这个天坑的龙之教派的现任成员是尸妖骑士纳尔戈斯·剑领主（区域4），他相信隧道仍然被堵塞。",voice:"原书未另述固定声线；按「22. 陷坑」中已记录的立场与行为说话。",skeleton:["唯一知道熔岩隧道的一个分支通向这个天坑的龙之教派的现任成员是尸妖骑士纳尔戈斯·剑领主（区域4），他相信隧道仍然被堵塞。"],flesh:"唯一知道熔岩隧道的一个分支通向这个天坑的龙之教派的现任成员是尸妖骑士纳尔戈斯·剑领主（区域4），他相信隧道仍然被堵塞。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"纳尔戈斯·剑领主|ToD",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_rot_1ed"},{id:"npc_neronvain",name:"内洛维",aliases:["Neronvain"],role:"「内洛维」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"在一次袭击中，内洛维赢得了一个名叫Galin的精灵的忠诚——这位森林守卫为了结束对他家乡村庄的袭击，向龙语者宣誓效忠。",voice:"原书未另述固定声线；按「内洛维」中已记录的立场与行为说话。",skeleton:["为了弥补这一损失，邪教徒们对迷雾森林的精灵发动了多次袭击，这些袭击由龙语者内洛维和他的伙伴，绿龙楚斯指挥。","然而，那些邪教袭击的生还者如果得知绿龙语者是内洛维——被流放的梅兰德拉克国王的儿子，多年前就被认为是死了——会感到非常惊讶。","在一次袭击中，内洛维赢得了一个名叫Galin的精灵的忠诚——这位森林守卫为了结束对他家乡村庄的袭击，向龙语者宣誓效忠。","内洛维接受了，利用Galin对迷雾森林的了解来帮助策划对其他定居点的袭击。","到目前为止，Galin对他的内洛维的誓言保持了秘密，尽管他对自己的行为感到巨大的内疚。","但两人都没有意识到绿龙语者实际上是阿拉加特哈斯自己的同父异母兄弟内洛维——梅兰德拉克国王的不光彩的次子，被他的人民流放，人们长久以来都认为他已经死了。"],flesh:"为了弥补这一损失，邪教徒们对迷雾森林的精灵发动了多次袭击，这些袭击由龙语者内洛维和他的伙伴，绿龙楚斯指挥。然而，那些邪教袭击的生还者如果得知绿龙语者是内洛维——被流放的梅兰德拉克国王的儿子，多年前就被认为是死了——会感到非常惊讶。在一次袭击中，内洛维赢得了一个名叫Galin的精灵的忠诚——这位森林守卫为了结束对他家乡村庄的袭击，向龙语者宣誓效忠。内洛维接受了，利用Galin对迷雾森林的了解来帮助策划对其他定居点的袭击。到目前为止，Galin对他的内洛维的誓言保持了秘密，尽管他对自己的行为感到巨大的内疚。但两人都没有意识到绿龙语者实际上是阿拉加特哈斯自己的同父异母兄弟内洛维——梅兰德拉克国王的不光彩的次子，被他的人民流放，人们长久以来都认为他已经死了。",appearance:{tags:[],description:""},knownInfoIds:["info_tod_neronvain"],recruitable:!1,combatRef:"内洛维|ToD",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_rot_125"},{id:"npc_severin",name:"赛维林",aliases:["Severin"],role:"「敌人与盟友」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"赛维林有一只名为奈尔维克的中立邪恶伪龙同伴。",voice:"原书未另述固定声线；按「敌人与盟友」中已记录的立场与行为说话。",skeleton:["在这种情况下，你可以提醒玩家，黑暗网络的专家杀手可以更好地用于对抗赛维林的内圈邪教领袖，而Harper特工或领主联盟的部队则在火山口下方的隧道中提供帮助。","他可以根据需要进行防守或进攻战斗，而且普通信徒只要知道赛维林还活着就会战斗到死。","如果它被认领或摧毁，仪式就会失败，但赛维林会使用面具的所有力量来保持它的拥有权。","将提亚马特带回的过程涉及四个关键组成部分——邪教积累的宝藏、龙后面具、囚犯的牺牲以及是所有赛维林疯狂计划的顶点的仪式。","一旦提亚马特完全现身，她会花费必要的回合，嘲笑着一次吞噬她那些不幸的仆从——拉斯·莫达尔，任何剩余的红袍法师，然后是赛维林（或者是他的尸体，只要它戴着龙后面具）。","龙后面具被摧毁，或者从赛维林的身体上移除并从神庙圣所（区域13）中取出。"],flesh:"在这种情况下，你可以提醒玩家，黑暗网络的专家杀手可以更好地用于对抗赛维林的内圈邪教领袖，而Harper特工或领主联盟的部队则在火山口下方的隧道中提供帮助。他可以根据需要进行防守或进攻战斗，而且普通信徒只要知道赛维林还活着就会战斗到死。如果它被认领或摧毁，仪式就会失败，但赛维林会使用面具的所有力量来保持它的拥有权。将提亚马特带回的过程涉及四个关键组成部分——邪教积累的宝藏、龙后面具、囚犯的牺牲以及是所有赛维林疯狂计划的顶点的仪式。一旦提亚马特完全现身，她会花费必要的回合，嘲笑着一次吞噬她那些不幸的仆从——拉斯·莫达尔，任何剩余的红袍法师，然后是赛维林（或者是他的尸体，只要它戴着龙后面具）。龙后面具被摧毁，或者从赛维林的身体上移除并从神庙圣所（区域13）中取出。",appearance:{tags:[],description:""},knownInfoIds:["info_tod_cult_plan","info_tod_xonthal_fake_mask","info_tod_final_ritual"],recruitable:!1,combatRef:"赛维林|ToD",_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:agendaIds"},homeLocationId:"loc_rot_1ed",agendaIds:["agd_tod_cult_counterattacks"]},{id:"npc_tiamat",name:"提亚马特",aliases:["Tiamat"],role:"「最终战役」中的具名角色",plotCritical:!0,initialAttitude:0,personality:"原书未单列性格；已知行为：在最终战斗之前或期间，冒险者有机会侦察龙井，并秘密潜入教派的要塞以及提亚马特的神庙。",voice:"原书未另述固定声线；按「最终战役」中已记录的立场与行为说话。",skeleton:["在最终战斗之前或期间，冒险者有机会侦察龙井，并秘密潜入教派的要塞以及提亚马特的神庙。",`赛维林将提亚马特带回世界的计划分为五个不同的阶段：

组装一个配得上提亚马特的宝藏堆。`,"捕获数百名囚犯，他们的灵魂将为魔法提供力量，这种魔法将吸引提亚马特来到费伦。","执行仪式，在龙井的火山口中升起提亚马特的神庙。","在执行引导提亚马特从九层地狱来到世界的仪式时，牺牲囚犯。","英雄们的目标是挫败赛维林的计划，防止提亚马特从九层地狱进入费伦。"],flesh:`在最终战斗之前或期间，冒险者有机会侦察龙井，并秘密潜入教派的要塞以及提亚马特的神庙。赛维林将提亚马特带回世界的计划分为五个不同的阶段：

组装一个配得上提亚马特的宝藏堆。捕获数百名囚犯，他们的灵魂将为魔法提供力量，这种魔法将吸引提亚马特来到费伦。执行仪式，在龙井的火山口中升起提亚马特的神庙。在执行引导提亚马特从九层地狱来到世界的仪式时，牺牲囚犯。英雄们的目标是挫败赛维林的计划，防止提亚马特从九层地狱进入费伦。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"提亚马特|ToD",_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_rot_1e6"},{id:"npc_varram",name:"瓦拉姆",aliases:["Varram"],role:"「瓦拉姆·怀特」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：瓦拉姆 the White 是 赛维林 的亲密盟友和心腹，但龙之教团的领袖并不知道他的这位老朋友的行为已经威胁到了教团的计划。",voice:"原书未另述固定声线；按「瓦拉姆·怀特」中已记录的立场与行为说话。",skeleton:["瓦拉姆 the White 是 赛维林 的亲密盟友和心腹，但龙之教团的领袖并不知道他的这位老朋友的行为已经威胁到了教团的计划。","瓦拉姆 的 白龙面具 已经丢失，被一个与 散塔林会 有联盟的盗贼偷走，并且现在对常规的占卜魔法隐藏了起来。","瓦拉姆 迫切想要在 赛维林 发现面具丢失之前取回它，所以他制造了一个借口，带着一群值得信赖的追随者去寻找位于蛇丘的古代魔法遗址，他声称这将帮助教团在召唤 提亚马特 的计划中。","实际上，瓦拉姆 正在寻找 迪德里乌斯 的墓穴——一个古老的占卜池所在地，他希望这能显示他丢失面具的位置。","竖琴手的特工们听到了关于白龙面具被盗的传言，而利奥斯因·埃兰萨尔最近得知矮人瓦拉姆出现在贸易定居点博尔斯凯尔桥，靠近蛇丘。","在向他们介绍了有关 瓦拉姆 丢失了 白龙面具 并出国寻找它的谣言后，他派角色们前往 Boareskyr 桥，指示他们寻找有关 瓦拉姆 最近行动和可能目的地的信息。"],flesh:"瓦拉姆 the White 是 赛维林 的亲密盟友和心腹，但龙之教团的领袖并不知道他的这位老朋友的行为已经威胁到了教团的计划。瓦拉姆 的 白龙面具 已经丢失，被一个与 散塔林会 有联盟的盗贼偷走，并且现在对常规的占卜魔法隐藏了起来。瓦拉姆 迫切想要在 赛维林 发现面具丢失之前取回它，所以他制造了一个借口，带着一群值得信赖的追随者去寻找位于蛇丘的古代魔法遗址，他声称这将帮助教团在召唤 提亚马特 的计划中。实际上，瓦拉姆 正在寻找 迪德里乌斯 的墓穴——一个古老的占卜池所在地，他希望这能显示他丢失面具的位置。竖琴手的特工们听到了关于白龙面具被盗的传言，而利奥斯因·埃兰萨尔最近得知矮人瓦拉姆出现在贸易定居点博尔斯凯尔桥，靠近蛇丘。在向他们介绍了有关 瓦拉姆 丢失了 白龙面具 并出国寻找它的谣言后，他派角色们前往 Boareskyr 桥，指示他们寻找有关 瓦拉姆 最近行动和可能目的地的信息。",appearance:{tags:[],description:""},knownInfoIds:["info_tod_varram_mask"],recruitable:!1,combatRef:"瓦拉姆|ToD",_meta:{sourcePages:[9],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_rot_0da"}],s=[{id:"info_tod_cult_plan",content:"塞弗林已改变龙之邪教的旧教义：集齐五色龙面具组成龙后面具，招募色彩龙并汇聚贡品，由流亡红袍法师在龙井打开通往阿弗纳斯的门户，释放提亚马特。",teaser:"各地劫掠、龙面具与红袍法师属于同一项召唤计划。",holders:["npc_rezmir","npc_talis_the_white","npc_severin","npc_rath_modar"],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_cult_plan",_meta:{sourcePages:[6,11,78,164],confidence:"high",needsReview:!1}},{id:"info_tod_hoard_route",content:"绿野与沿岸聚落的劫掠物经博德之门商队运到深水城，再由筑路队送往卡纳特客栈；蜥蜴人把货物经死者之沼送到纳瑞塔城堡，传送门和天穹堡最终把它运往龙井。",teaser:"被盗财宝沿一条跨越剑湾的隐秘补给线向北移动。",holders:["npc_rezmir","npc_dralmorrer_borngray","npc_azbara_jos"],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_hoard",_meta:{sourcePages:[44,46,55,56,58,59,78,88],confidence:"high",needsReview:!1}},{id:"info_tod_talis_bargain",content:"塔利斯因白龙面具被交给瓦拉姆而敌视塞弗林核心圈；她可以说明教团期待提亚马特归来，并以进入帕纳斯特和天穹堡的协助换取队伍打击其竞争者。",teaser:"一名失宠的紫袍者可能用路线情报交换对手的覆灭。",holders:["npc_talis_the_white"],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_hoard",_meta:{sourcePages:[78,87],confidence:"high",needsReview:!1}},{id:"info_tod_council_flow",content:"深水城议会共召开四次：第一次给出移动冰海与瓦拉姆线索；第二次引向内洛维和金属龙；第三次引向赞萨尔塔与泰伊；第四次集结龙井决战。每次会议都会依据队伍此前选择调整各派系支持。",teaser:"战争任务不是固定全清清单，而是四次议会之间反复汇报与选择的网络。",holders:["npc_leosin_erlanthar"],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_council",_meta:{sourcePages:[104,105,109],confidence:"high",needsReview:!1}},{id:"info_tod_draakhorn",content:"天穹堡失陷后，教团在龙井吹响古老龙吼号角，召唤费伦的色彩龙；麦卡丝的研究与白龙宝库线索能确认号角已被送往龙井。",teaser:"遍及剑湾的低沉震动正在召集色彩龙。",holders:["npc_maccath_the_crimson"],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_council",_meta:{sourcePages:[104,105,123],confidence:"high",needsReview:!1}},{id:"info_tod_varram_mask",content:"瓦拉姆已把白龙面具丢给一名与散塔林会结盟的盗贼；他秘密进入迪德里乌斯墓穴寻找占卜池，试图在塞弗林发现失职前定位面具。墓中的瓦拉姆没有白龙面具。",teaser:"白龙语者离开教团保护并非执行任务，而是在掩盖一场失窃。",holders:["npc_varram","npc_leosin_erlanthar"],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_wyrmspeakers",_meta:{sourcePages:[124,131],confidence:"high",needsReview:!1}},{id:"info_tod_neronvain",content:"绿龙语者内洛维是迷雾森林梅兰德拉克国王被流放、长期被认为已死的儿子；他与绿龙丘斯利用守卫加林提供的定居点情报实施袭击。",teaser:"指挥迷雾森林袭击的绿龙骑手与精灵王室有关。",holders:["npc_neronvain"],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_wyrmspeakers",_meta:{sourcePages:[134,139],confidence:"high",needsReview:!1}},{id:"info_tod_xonthal_fake_mask",content:"伊斯坎德尔真心相信自己偷出的物件是蓝龙面具，但他在赞萨尔塔地下城死于元素生物伤势；尸旁沾血而未损的面具其实是赝品，真面具仍在塞弗林控制下。",teaser:"叛逃者的求救是真实的，但他承诺的奖品未必是真品。",holders:["npc_iskander","npc_severin"],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_xonthal",_meta:{sourcePages:[149,157,160],confidence:"high",needsReview:!1}},{id:"info_tod_thay_offer",content:"萨扎斯坦同样要消灭拉斯·莫达率领的流亡红袍法师。泰伊提出的合作只要求队伍找到这些共同敌人的藏身处；使团会以谈判和托梦审讯判断角色是否可信。",teaser:"一个危险政权与剑湾暂时拥有同一批敌人。",holders:["npc_rath_modar"],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_council",_meta:{sourcePages:[161,163],confidence:"high",needsReview:!1}},{id:"info_tod_final_ritual",content:"角色进入提亚马特神庙后，至少五名红袍法师必须连续十轮专注仪式；连续两轮不足五人会令门户崩溃并把进度归零。龙后面具和仍在圣所中的塞弗林遗体都能维持仪式。",teaser:"最终仪式有可被打断的十轮专注窗口。",holders:["npc_severin","npc_rath_modar"],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_finale",_meta:{sourcePages:[171,172],confidence:"high",needsReview:!1}},{id:"info_tod_aftermath",content:"胜利仍留下龙井囚犯、逃散邪教徒、撤退色彩龙与大批被掠财富；失败则开启提亚马特统治下的龙之时代，但幸存角色仍可继续寻找驱逐或摧毁她的方法。",teaser:"终战胜负都不会自动抹平战争造成的后果。",holders:[],revealCondition:{type:"free"},linkedQuestId:"qst_main_tod",linkedHookId:"hook_tod_finale",_meta:{sourcePages:[174],confidence:"high",needsReview:!1}}],a=[{id:"enc_tod_greenest_tunnel_rats",name:"古老隧道的鼠群",sceneId:"scn_hotdq_073",prelocked:!1,enemies:[{ref:"Swarm of Rats",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_greenest_tunnel_patrol",name:"溪流出口巡逻队",sceneId:"scn_hotdq_073",prelocked:!1,enemies:[{ref:"Cultist",count:2},{ref:"狗头人",count:6},{ref:"Cultist",count:2},{ref:"狗头人",count:10},{ref:"伏击龙兽|ToD",count:1}],battlefield:{family:"wilderness"},levelScaling:{note:"初始两名邪教徒和六名狗头人；若邪教徒在第四轮开始仍活着会去报警，十分钟后两名邪教徒、十名狗头人和一只伏击龙兽抵达。"},_meta:{sourcePages:[24,25],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_greenest_sally_port",name:"出击口争夺",sceneId:"scn_hotdq_073",prelocked:!1,enemies:[{ref:"Acolyte",count:3},{ref:"狗头人",count:3},{ref:"伏击龙兽|ToD",count:1},{ref:"guard",count:2},{ref:"Cultist",count:3},{ref:"狗头人",count:3}],battlefield:{family:"wilderness"},levelScaling:{note:"第一波为三侍僧、三狗头人和一伏击龙兽；第二波为两警卫、三邪教徒和三狗头人。"},_meta:{sourcePages:[25],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_greenest_sanctuary",name:"圣堂三路围攻",sceneId:"scn_hotdq_073",prelocked:!1,enemies:[{ref:"龙爪|ToD",count:1},{ref:"Cultist",count:9},{ref:"狗头人",count:20},{ref:"伏击龙兽|ToD",count:2}],battlefield:{family:"wilderness"},levelScaling:{note:"三队分别为龙爪+二邪教徒+六狗头人、三邪教徒+十狗头人+二伏击龙兽、四邪教徒+四狗头人；同时环绕但不必合为一场。"},_meta:{sourcePages:[26],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_greenest_cyanwrath_duel",name:"青怒的单挑",sceneId:"scn_hotdq_073",prelocked:!1,enemies:[{ref:"兰德卓萨·青怒|ToD",count:1}],battlefield:{family:"wilderness"},levelScaling:{note:"战斗本体是一对一决斗；十六名狗头人作为俘虏警戒，只在他人干预时处决人质并掩护撤退。"},_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_cult_camp_honor_guard",name:"强盗营地荣誉卫队",sceneId:"scn_hotdq_095",prelocked:!1,enemies:[{ref:"veteran",count:4},{ref:"守卫龙兽|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[32],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_naerytar_dusk_camp",name:"沼泽暮营蜥蜴人",sceneId:"scn_hotdq_11e",prelocked:!1,enemies:[{ref:"Lizardfolk",count:9}],battlefield:{family:"wilderness"},_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_parnast_response",name:"帕纳斯特教团追捕队",sceneId:"scn_hotdq_201",prelocked:!1,enemies:[{ref:"奥瑟斯坦队长|ToD",count:1},{ref:"veteran",count:1},{ref:"guard",count:6},{ref:"龙爪|ToD",count:3},{ref:"Wyvern",count:2}],battlefield:{family:"wilderness"},levelScaling:{note:"城堡起飞后或村庄暴露时出动；两只飞龙是否及时释放取决于追捕过程。"},_meta:{sourcePages:[91,92],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_skyreach_tower_top",name:"云巨人塔顶守卫",sceneId:"scn_hotdq_261",prelocked:!1,enemies:[{ref:"Ogre",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_oyaviggaton_toad_inspection",name:"中毒访客的冰蟾蜍检查",sceneId:"scn_rot_091",prelocked:!1,enemies:[{ref:"冰蟾蜍|ToD",count:5}],battlefield:{family:"wilderness"},levelScaling:{note:"仅全队都被冰猎者毒倒并囚禁时，五只冰蟾蜍前来检查。"},_meta:{sourcePages:[115],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_naerytar_forge",name:"纳瑞塔锻造厂的蜥蜴人工匠",sceneId:"scn_hotdq_14d",prelocked:!1,enemies:[{ref:"Lizardfolk",count:6}],battlefield:{family:"wilderness"},levelScaling:{note:"六名蜥蜴人工匠不主动攻击，只有受挑衅才自卫。"},_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_tod_tiamat_ritual",name:"提亚马特神庙召唤仪式",sceneId:"scn_rot_210",prelocked:!1,enemies:[{ref:"赛维林|ToD",count:1},{ref:"拉斯·莫达|ToD",count:1},{ref:"魔法师",count:9},{ref:"提亚马特|ToD",count:1}],battlefield:{family:"wilderness"},levelScaling:{note:"神庙钥匙表固定列出九名普通红袍法师、拉斯和悬浮的赛维林；提亚马特只在至少五名法师连续专注十轮后从门户现身，并受此前破坏项削弱。"},_meta:{sourcePages:[171,172],confidence:"medium",needsReview:!0,extractorNotes:"静态敌群无法表达十轮仪式时钟、法师专注人数、可选龙语者与提亚马特削弱项；人数来自神庙钥匙表逐格计数。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_08e",name:"追踪袭击者遭遇",sceneId:"scn_hotdq_08e",prelocked:!1,enemies:[{ref:"Cultist",count:4},{ref:"狗头人",count:8},{ref:"veteran",count:1},{ref:"Cultist",count:6},{ref:"Acolyte",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"前四名邪教徒与八名狗头人是掉队者；老兵、六名邪教徒和两名侍僧是独立后卫。运行时合并列出，但主持人应分两场结算。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0af",name:"洞穴入口遭遇",sceneId:"scn_hotdq_0af",prelocked:!1,enemies:[{ref:"龙爪|ToD",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[37],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0b1",name:"真菌花园遭遇",sceneId:"scn_hotdq_0b1",prelocked:!1,enemies:[{ref:"Violet Fungus",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"房间内固定四株紫菌。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0b4",name:"吸血怪巢穴遭遇",sceneId:"scn_hotdq_0b4",prelocked:!1,enemies:[{ref:"Stirge|ToD",count:10}],battlefield:{family:"wilderness"},_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0b5",name:"穴蜥人入侵遭遇",sceneId:"scn_hotdq_0b5",prelocked:!1,enemies:[{ref:"Troglodyte|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0bb",name:"幼龙育婴室遭遇",sceneId:"scn_hotdq_0bb",prelocked:!1,enemies:[{ref:"狗头人",count:4},{ref:"Winged Kobold",count:1},{ref:"守卫龙兽|ToD",count:3},{ref:"狗头人",count:6},{ref:"Winged Kobold",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[39],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"初始守卫为四名狗头人和一名带翼狗头人，三只守卫龙兽在下方；遇袭后六名狗头人与三名带翼狗头人从8号区域增援。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0bd",name:"狗头人营房遭遇",sceneId:"scn_hotdq_0bd",prelocked:!1,enemies:[{ref:"狗头人",count:6},{ref:"Winged Kobold|ToD",count:6}],battlefield:{family:"wilderness"},_meta:{sourcePages:[40],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0c1",name:"龙神殿遭遇",sceneId:"scn_hotdq_0c1",prelocked:!1,enemies:[{ref:"兰德卓萨·青怒|ToD",count:1},{ref:"Berserker",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[40],confidence:"medium",needsReview:!0,extractorNotes:"额外狂战士数量随队伍人数动态变化。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"青怒固定带两名狂战士；四人以上队伍每多一名角色再增加一名狂战士。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0ca",name:"黑龙蛋遭遇",sceneId:"scn_hotdq_0ca",prelocked:!1,enemies:[{ref:"守卫龙兽|ToD",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"两只守卫龙兽固定守护龙蛋；饱食的绳伥只在被攻击时自卫，不并入固定敌群。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0cb",name:"隐藏的狗头人遭遇",sceneId:"scn_hotdq_0cb",prelocked:!1,enemies:[{ref:"狗头人",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0d1",name:"警卫营房遭遇",sceneId:"scn_hotdq_0d1",prelocked:!1,enemies:[{ref:"guard",count:3},{ref:"Cultist|ToD",count:8}],battlefield:{family:"wilderness"},_meta:{sourcePages:[43],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_0f5",name:"路上的生活遭遇",sceneId:"scn_hotdq_0f5",prelocked:!1,enemies:[{ref:"guard",count:12}],battlefield:{family:"wilderness"},_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_116",name:"坚固房间遭遇",sceneId:"scn_hotdq_116",prelocked:!1,enemies:[{ref:"Lizardfolk",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[59],confidence:"medium",needsReview:!0,extractorNotes:"原书按队伍人数动态计算。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"每两名角色出现三名蜥蜴人；整数编制保留一组基数。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_11c",name:"恩怨对决遭遇",sceneId:"scn_hotdq_11c",prelocked:!1,enemies:[{ref:"veteran",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[60],confidence:"medium",needsReview:!0,extractorNotes:"警卫数量取决于玩家是否干预单挑。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"老兵主动挑战一名角色；其他角色干预时客栈最多十二名警卫才会加入。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_138",name:"接近纳埃瑞塔尔城堡遭遇",sceneId:"scn_hotdq_138",prelocked:!1,enemies:[{ref:"Lizardfolk|ToD",count:6}],battlefield:{family:"wilderness"},_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_13b",name:"动物围栏遭遇",sceneId:"scn_hotdq_13b",prelocked:!1,enemies:[{ref:"巨蜥",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[66],confidence:"medium",needsReview:!0,extractorNotes:"原书数量为2d4。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"水中有2d4只巨蜥，整数 schema 记录最小两只。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_13e",name:"茅屋遭遇",sceneId:"scn_hotdq_13e",prelocked:!1,enemies:[{ref:"巨蛙",count:8}],battlefield:{family:"wilderness"},_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_140",name:"护城河遭遇",sceneId:"scn_hotdq_140",prelocked:!1,enemies:[{ref:"鳄鱼",count:6}],battlefield:{family:"wilderness"},_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_263",name:"底层遭遇",sceneId:"scn_hotdq_263",prelocked:!1,enemies:[{ref:"Ogre|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_144",name:"瓮城遭遇",sceneId:"scn_hotdq_144",prelocked:!1,enemies:[{ref:"Bullywug",count:10},{ref:"巨蛙",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[67],confidence:"medium",needsReview:!0,extractorNotes:"巨蛙数量为1d6。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"十名啵灵蛙固定在场，另有1d6只巨蛙。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_146",name:"外院遭遇",sceneId:"scn_hotdq_146",prelocked:!1,enemies:[{ref:"Bullywug",count:1},{ref:"Lizardfolk",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[67],confidence:"medium",needsReview:!0,extractorNotes:"两类敌人数均为1d6-1。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"两方人数各为1d6-1，可能为零；只在本场实际掷出后实例化。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_147",name:"内院遭遇",sceneId:"scn_hotdq_147",prelocked:!1,enemies:[{ref:"守卫龙兽|ToD",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_148",name:"西北塔楼遭遇",sceneId:"scn_hotdq_148",prelocked:!1,enemies:[{ref:"otyugh",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_14a",name:"马厩遭遇",sceneId:"scn_hotdq_14a",prelocked:!1,enemies:[{ref:"巨蜥",count:8},{ref:"Lizardfolk",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"八只巨蜥固定在场；角色停留两分钟后四名蜥蜴人增援到达。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_14b",name:"下层兵营遭遇",sceneId:"scn_hotdq_14b",prelocked:!1,enemies:[{ref:"Bullywug",count:12}],battlefield:{family:"wilderness"},_meta:{sourcePages:[68],confidence:"medium",needsReview:!0,extractorNotes:"数量随昼夜翻倍。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"白天十二名，夜间二十四名啵灵蛙；记录白天固定编制。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_14f",name:"蜥蜴人准备室遭遇",sceneId:"scn_hotdq_14f",prelocked:!1,enemies:[{ref:"Lizardfolk",count:20}],battlefield:{family:"wilderness"},_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"二十名蜥蜴人后备守卫白天在此；会先把陌生人当新到邪教徒，受挑衅才攻击。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_150",name:"蜥蜴人卧室遭遇",sceneId:"scn_hotdq_150",prelocked:!1,enemies:[{ref:"Lizardfolk|ToD",count:10}],battlefield:{family:"wilderness"},_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_151",name:"蜥蜴人卧室遭遇",sceneId:"scn_hotdq_151",prelocked:!1,enemies:[{ref:"Lizardfolk|ToD",count:10}],battlefield:{family:"wilderness"},_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_155",name:"教区长住宅遭遇",sceneId:"scn_hotdq_155",prelocked:!1,enemies:[{ref:"龙爪|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_158",name:"大厅遭遇",sceneId:"scn_hotdq_158",prelocked:!1,enemies:[{ref:"Cultist",count:12},{ref:"龙爪|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[70],confidence:"medium",needsReview:!0,extractorNotes:"敌群随昼夜替换。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"白天为十二名邪教徒与四名龙爪；夜间改由两只守卫龙兽留守且第三只巡逻，不合并两套编制。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_15c",name:"未使用的房间遭遇",sceneId:"scn_hotdq_15c",prelocked:!1,enemies:[{ref:"Giant Centipede|ToD",count:10}],battlefield:{family:"wilderness"},_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_160",name:"上部瓮城遭遇",sceneId:"scn_hotdq_160",prelocked:!1,enemies:[{ref:"Bullywug|ToD",count:9}],battlefield:{family:"wilderness"},_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_164",name:"上层兵营遭遇",sceneId:"scn_hotdq_164",prelocked:!1,enemies:[{ref:"法布列斯·溅黏|ToD",count:1},{ref:"Bullywug",count:10}],battlefield:{family:"wilderness"},_meta:{sourcePages:[71],confidence:"medium",needsReview:!0,extractorNotes:"首领位置与守卫数量随昼夜变化。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"夜间法布列斯与十名私人护卫在上层兵营；白天通常只有两名守卫，法布列斯多在下层洞穴。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_16a",name:"图书馆遭遇",sceneId:"scn_hotdq_16a",prelocked:!1,enemies:[{ref:"龙翼|ToD",count:1},{ref:"Cultist|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_16c",name:"邪教徒的寝室遭遇",sceneId:"scn_hotdq_16c",prelocked:!1,enemies:[{ref:"Cultist|ToD",count:5}],battlefield:{family:"wilderness"},_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_16d",name:"邪教徒的卧室遭遇",sceneId:"scn_hotdq_16d",prelocked:!1,enemies:[{ref:"龙翼|ToD",count:7}],battlefield:{family:"wilderness"},_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_172",name:"幽灵圣所遭遇",sceneId:"scn_hotdq_172",prelocked:!1,enemies:[{ref:"Specter|ToD",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_175",name:"3H, I, J. 蜘蛛巢穴遭遇",sceneId:"scn_hotdq_175",prelocked:!1,enemies:[{ref:"巨蜘蛛",count:5}],battlefield:{family:"wilderness"},_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_17d",name:"邪教徒的卧室遭遇",sceneId:"scn_hotdq_17d",prelocked:!1,enemies:[{ref:"龙翼|ToD",count:6}],battlefield:{family:"wilderness"},_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_180",name:"观星台遭遇",sceneId:"scn_hotdq_180",prelocked:!1,enemies:[{ref:"Gargoyle|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_188",name:"灰色软泥怪巢穴遭遇",sceneId:"scn_hotdq_188",prelocked:!1,enemies:[{ref:"gray ooze",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_18a",name:"泥泞房间遭遇",sceneId:"scn_hotdq_18a",prelocked:!1,enemies:[{ref:"Bullywug|ToD",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_18b",name:"蜈蚣巢穴遭遇",sceneId:"scn_hotdq_18b",prelocked:!1,enemies:[{ref:"Swarm of Centipedes",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[75],confidence:"medium",needsReview:!0,extractorNotes:"总数为队伍人数乘二。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"每名角色出现两群蜈蚣；整数编制记录每名角色的倍数基数。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_18d",name:"青蛙湖遭遇",sceneId:"scn_hotdq_18d",prelocked:!1,enemies:[{ref:"巨蛙",count:12}],battlefield:{family:"wilderness"},_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_18e",name:"青蛙登陆点遭遇",sceneId:"scn_hotdq_18e",prelocked:!1,enemies:[{ref:"巨蛙",count:12},{ref:"Bullywug",count:5}],battlefield:{family:"wilderness"},_meta:{sourcePages:[76],confidence:"medium",needsReview:!0,extractorNotes:"巨蛙为上限且啵灵蛙是否参战取决于战局。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"最多十二只巨蛙参与；五名啵灵蛙只在巨蛙占优时加入。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_18f",name:"蝌蚪孵化场遭遇",sceneId:"scn_hotdq_18f",prelocked:!1,enemies:[{ref:"Bullywug|ToD",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[76],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_192",name:"青蛙神殿遭遇",sceneId:"scn_hotdq_192",prelocked:!1,enemies:[{ref:"法布列斯·溅黏|ToD",count:1},{ref:"Bullywug",count:10}],battlefield:{family:"wilderness"},_meta:{sourcePages:[77],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"法布列斯在地下神殿由十名啵灵蛙保护。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_1a3",name:"小屋外遭遇",sceneId:"scn_hotdq_1a3",prelocked:!1,enemies:[{ref:"巨魔",count:2},{ref:"伏击龙兽|ToD",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"两只巨魔与三只伏击龙兽巡猎小屋外缘。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_1a9",name:"狩猎犬舍遭遇",sceneId:"scn_hotdq_1a9",prelocked:!1,enemies:[{ref:"特雷普辛|ToD",count:1},{ref:"伏击龙兽|ToD",count:6}],battlefield:{family:"wilderness"},_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"四臂巨魔特雷普辛与六只伏击龙兽同在犬舍。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_1b7",name:"三头猎犬休息室遭遇",sceneId:"scn_hotdq_1b7",prelocked:!1,enemies:[{ref:"helmed horror",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_1ba",name:"厨房遭遇",sceneId:"scn_hotdq_1ba",prelocked:!1,enemies:[{ref:"Cultist|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_1d1",name:"塔利斯大厅遭遇",sceneId:"scn_hotdq_1d1",prelocked:!1,enemies:[{ref:"白袍塔利斯|ToD",count:1},{ref:"veteran",count:2},{ref:"龙爪|ToD",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"塔利斯大厅固定为塔利斯、两名老兵和一名龙爪；她优先交易，不必然开战。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_1df",name:"保镖室遭遇",sceneId:"scn_hotdq_1df",prelocked:!1,enemies:[{ref:"veteran",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[85],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_1e9",name:"鹿鹰栖息地遭遇",sceneId:"scn_hotdq_1e9",prelocked:!1,enemies:[{ref:"Peryton",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[86],confidence:"medium",needsReview:!0,extractorNotes:"是否在场取决于昼间概率。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"巢中固定两只佩利冬，但白天有50%概率外出。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_1fb",name:"马厩遭遇",sceneId:"scn_hotdq_1fb",prelocked:!1,enemies:[{ref:"Wyvern|ToD",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_201",name:"村庄井和广场遭遇",sceneId:"scn_hotdq_201",prelocked:!1,enemies:[{ref:"guard",count:5}],battlefield:{family:"wilderness"},_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"广场固定五名教团警卫；若村庄暴露，奥瑟斯坦、老兵、六警卫、三龙爪及两飞龙构成后续独立追捕队。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_20f",name:"主门遭遇",sceneId:"scn_hotdq_20f",prelocked:!1,enemies:[{ref:"Stone Golem",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"未说口令通过主门时两座石魔像依次活化；门塔食人魔与夜间吸血鬼另有各自区域。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_216",name:"城门塔遭遇",sceneId:"scn_hotdq_216",prelocked:!1,enemies:[{ref:"Ogre|ToD",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_220",name:"马厩遭遇",sceneId:"scn_hotdq_220",prelocked:!1,enemies:[{ref:"Wyvern",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"马厩固定饲养两只饥饿飞龙。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_223",name:"邪教徒兵营遭遇",sceneId:"scn_hotdq_223",prelocked:!1,enemies:[{ref:"龙翼|ToD",count:10}],battlefield:{family:"wilderness"},_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_229",name:"雷兹米尔的房间遭遇",sceneId:"scn_hotdq_229",prelocked:!1,enemies:[{ref:"瑞兹米尔|ToD",count:1},{ref:"守卫龙兽|ToD",count:2},{ref:"rug of smothering",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"瑞兹米尔、两只守卫龙兽和一张噬人地毯守住房间。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_22d",name:"红法师的房间遭遇",sceneId:"scn_hotdq_22d",prelocked:!1,enemies:[{ref:"拉斯·莫达|ToD",count:1},{ref:"阿兹巴拉·乔斯|ToD",count:1},{ref:"Gargoyle",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[96],confidence:"medium",needsReview:!0,extractorNotes:"阿兹巴拉是否在场取决于前章结果。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"拉斯与一只石像鬼固定在场；阿兹巴拉仅在此前未死或未被俘时在场。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_235",name:"厨房遭遇",sceneId:"scn_hotdq_235",prelocked:!1,enemies:[{ref:"狗头人",count:20},{ref:"griffon",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"二十名狗头人厨工固定在场；狮鹫只会保护厨工，厨工本身倾向逃跑。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_239",name:"上层庭院遭遇",sceneId:"scn_hotdq_239",prelocked:!1,enemies:[{ref:"Ogre",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[97],confidence:"medium",needsReview:!0,extractorNotes:"白天数量为2d6，夜间使用另一遭遇。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"白天有2d6名食人魔训练；夜间改由桑德西尔巡逻，不合并昼夜敌群。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_23f",name:"坍塌的塔楼遭遇",sceneId:"scn_hotdq_23f",prelocked:!1,enemies:[{ref:"桑德西尔·莫吉亚|ToD",count:1},{ref:"vampire spawn",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[98],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"桑德西尔本人参战；她陷入劣势时，两名吸血鬼衍体从地下室增援。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_243",name:"舵手塔遭遇",sceneId:"scn_hotdq_243",prelocked:!1,enemies:[{ref:"布拉戈提库斯|ToD",count:1},{ref:"Ogre",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[98],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"伤害控制室会在三轮后引来布拉戈提库斯及两名食人魔；否则本场不触发。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_25b",name:"食人魔营房遭遇",sceneId:"scn_hotdq_25b",prelocked:!1,enemies:[{ref:"Ogre|ToD",count:12}],battlefield:{family:"wilderness"},_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_261",name:"云巨人塔遭遇",sceneId:"scn_hotdq_261",prelocked:!1,enemies:[{ref:"布拉戈提库斯|ToD",count:1},{ref:"Ogre",count:2},{ref:"air elemental",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"主厅为布拉戈提库斯、两名食人魔侍从和被束缚气元素；塔顶另有三名食人魔，下层另有四名。"},encounterPolicy:{engagement:"contact"}},{id:"enc_hotdq_26a",name:"主金库遭遇",sceneId:"scn_hotdq_26a",prelocked:!1,enemies:[{ref:"adult white dragon",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0ac",name:"狗头人巢穴遭遇",sceneId:"scn_rot_0ac",prelocked:!1,enemies:[{ref:"狗头人",count:12}],battlefield:{family:"wilderness"},_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0b2",name:"巨人大厅遭遇",sceneId:"scn_rot_0b2",prelocked:!1,enemies:[{ref:"狗头人",count:8}],battlefield:{family:"wilderness"},_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0b4",name:"战利品大厅遭遇",sceneId:"scn_rot_0b4",prelocked:!1,enemies:[{ref:"冰巨魔|ToD",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0b7",name:"绯红的麦卡丝遭遇",sceneId:"scn_rot_0b7",prelocked:!1,enemies:[{ref:"冰巨魔|ToD",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"一只冰巨魔守卫；两名狗头人是麦卡丝的仆从，只会逃跑报警。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0c1",name:"冰霜巨魔遭遇",sceneId:"scn_rot_0c1",prelocked:!1,enemies:[{ref:"冰巨魔|ToD",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[120],confidence:"medium",needsReview:!0,extractorNotes:"原书只给下限。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"至少两只冰巨魔，主持人可增加到三只或更多。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0c3",name:"冰蟾工作区遭遇",sceneId:"scn_rot_0c3",prelocked:!1,enemies:[{ref:"冰蟾蜍|ToD",count:11}],battlefield:{family:"wilderness"},_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0cf",name:"斯克瑞格的巢穴遭遇",sceneId:"scn_rot_0cf",prelocked:!1,enemies:[{ref:"Scrag",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0d5",name:"阿拉瑟托的深渊遭遇",sceneId:"scn_rot_0d5",prelocked:!1,enemies:[{ref:"adult white dragon",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0f1",name:"入口广场遭遇",sceneId:"scn_rot_0f1",prelocked:!1,enemies:[{ref:"巨魔",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[127],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0f9",name:"马赛克大厅遭遇",sceneId:"scn_rot_0f9",prelocked:!1,enemies:[{ref:"活动瓷砖奇美拉|ToD",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"只有一只使用书内变体数据的活动瓷砖奇美拉；普通奇美拉只是基础统计。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_0ff",name:"井室遭遇",sceneId:"scn_rot_0ff",prelocked:!1,enemies:[{ref:"巨魔",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_104",name:"王座室前厅遭遇",sceneId:"scn_rot_104",prelocked:!1,enemies:[{ref:"Mummy|ToD",count:6}],battlefield:{family:"wilderness"},_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_106",name:"宝座大厅遭遇",sceneId:"scn_rot_106",prelocked:!1,enemies:[{ref:"clay golem",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_109",name:"餐厅遭遇",sceneId:"scn_rot_109",prelocked:!1,enemies:[{ref:"Bearded Devil|ToD",count:5}],battlefield:{family:"wilderness"},_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_10a",name:"宝库遭遇",sceneId:"scn_rot_10a",prelocked:!1,enemies:[{ref:"Wraith|ToD",count:3},{ref:"Specter|ToD",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_11d",name:"入口遭遇",sceneId:"scn_rot_11d",prelocked:!1,enemies:[{ref:"Lizardfolk",count:6},{ref:"Lizardfolk",count:4},{ref:"Yuan-ti Malison (Type 1)",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"初始六名蜥蜴人；若开门超过十轮，四名蜥蜴人与三名1型恶咒蛇人增援。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_11e",name:"桥梁遭遇",sceneId:"scn_rot_11e",prelocked:!1,enemies:[{ref:"Lizardfolk|ToD",count:6},{ref:"Yuan-ti Malison (Type 1)|ToD",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_11f",name:"冥想室遭遇",sceneId:"scn_rot_11f",prelocked:!1,enemies:[{ref:"蛇形恐怖兽|ToD",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"两套盔甲各被蛇群充满并化为书内蛇形恐怖兽；恐怖铠甲只是基础描述，不另计。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_121",name:"玉提住处遭遇",sceneId:"scn_rot_121",prelocked:!1,enemies:[{ref:"Lizardfolk|ToD",count:3},{ref:"Yuan-ti Pureblood|ToD",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_124",name:"长走廊遭遇",sceneId:"scn_rot_124",prelocked:!1,enemies:[{ref:"Lizardfolk",count:4},{ref:"Yuan-ti Malison (Type 1)",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"初始四名蜥蜴人与两名1型恶咒蛇人；若17号房未清，另有三名蜥蜴人与一名纯血增援。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_125",name:"孵化室遭遇",sceneId:"scn_rot_125",prelocked:!1,enemies:[{ref:"swarm of poisonous snakes",count:1},{ref:"憎恶蛇人",count:1},{ref:"Yuan-ti Pureblood|ToD",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_129",name:"神殿遭遇",sceneId:"scn_rot_129",prelocked:!1,enemies:[{ref:"憎恶蛇人",count:3},{ref:"Yuan-ti Malison (Type 2)|ToD",count:2},{ref:"Yuan-ti Pureblood|ToD",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_12f",name:"迷雾森林遭遇",sceneId:"scn_rot_12f",prelocked:!1,enemies:[{ref:"Ettercap",count:3},{ref:"巨蜘蛛",count:7}],battlefield:{family:"wilderness"},_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"真实哨兵为三名蛛化精灵与七只巨蜘蛛；老德鲁伊和三棵觉醒树是引导与试炼，不列固定敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_145",name:"双头巨人巢穴遭遇",sceneId:"scn_rot_145",prelocked:!1,enemies:[{ref:"Ettin|ToD",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_148",name:"邪教徒公共室遭遇",sceneId:"scn_rot_148",prelocked:!1,enemies:[{ref:"龙爪|ToD",count:5},{ref:"龙牙|ToD",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_149",name:"教徒宿舍遭遇",sceneId:"scn_rot_149",prelocked:!1,enemies:[{ref:"龙爪|ToD",count:5},{ref:"龙牙|ToD",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_150",name:"楚斯的巢穴遭遇",sceneId:"scn_rot_150",prelocked:!1,enemies:[{ref:"adult green dragon",count:1},{ref:"内洛维|ToD",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"丘斯与内洛维会依据警报和此前位置退守龙巢；本场承载二者的最终对抗。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_15d",name:"第二次攻击遭遇",sceneId:"scn_rot_15d",prelocked:!1,enemies:[{ref:"龙魂|ToD",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[141],confidence:"medium",needsReview:!0,extractorNotes:"来源明确要求主持人按队伍强度选择其余兵力，不能臆造固定编制。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"第二次反击固定由一名龙魂领导，其他龙翼、佣兵、尤格罗斯或成年黑龙由主持人配到困难/致命强度。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1a1",name:"甲伏怪池遭遇",sceneId:"scn_rot_1a1",prelocked:!1,enemies:[{ref:"Chuul|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1a4",name:"独眼巨人牧场遭遇",sceneId:"scn_rot_1a4",prelocked:!1,enemies:[{ref:"cyclops",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[153],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"一对独眼巨人主持投石挑战，只有受攻击时自卫。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1a6",name:"食肉花园遭遇",sceneId:"scn_rot_1a6",prelocked:!1,enemies:[{ref:"otyugh",count:12}],battlefield:{family:"wilderness"},_meta:{sourcePages:[154],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"十二株静止肉食花使用食腐兽数据，但速度为0。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1a8",name:"宝塔遭遇",sceneId:"scn_rot_1a8",prelocked:!1,enemies:[{ref:"dao",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[154],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1aa",name:"雕像长廊遭遇",sceneId:"scn_rot_1aa",prelocked:!1,enemies:[{ref:"animated armor",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[154],confidence:"medium",needsReview:!0,extractorNotes:"无限重组与倍增无法由静态敌群完整表达。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"初始两套活动铠甲；每摧毁一套会再活化两套，且角色留在区域时会不断重组。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1ac",name:"石化铁牛迷宫遭遇",sceneId:"scn_rot_1ac",prelocked:!1,enemies:[{ref:"gorgon",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1b8",name:"封闭的房间遭遇",sceneId:"scn_rot_1b8",prelocked:!1,enemies:[{ref:"Cult Fanatic|ToD",count:1},{ref:"Cultist|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1b9",name:"神龛遭遇",sceneId:"scn_rot_1b9",prelocked:!1,enemies:[{ref:"魔法师",count:2},{ref:"Cult Fanatic|ToD",count:5}],battlefield:{family:"wilderness"},_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1bb",name:"休息室遭遇",sceneId:"scn_rot_1bb",prelocked:!1,enemies:[{ref:"Cult Fanatic|ToD",count:6}],battlefield:{family:"wilderness"},_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1bd",name:"天文台遭遇",sceneId:"scn_rot_1bd",prelocked:!1,enemies:[{ref:"魔法师",count:1},{ref:"Cult Fanatic|ToD",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1c7",name:"元素检查点遭遇",sceneId:"scn_rot_1c7",prelocked:!1,enemies:[{ref:"Earth Elemental|ToD",count:2},{ref:"fire elemental",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1ce",name:"书房遭遇",sceneId:"scn_rot_1ce",prelocked:!1,enemies:[{ref:"Swarm of Ravens",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[158],confidence:"medium",needsReview:!0,extractorNotes:"总数随队伍人数和战斗轮动态增长。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"打开暗门后，每名角色首轮形成一群纸旋风，之后每轮再形成两群，直至每名角色最多三群；记录每名角色上限基数。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1d6",name:"公正的塔拉兹遭遇",sceneId:"scn_rot_1d6",prelocked:!1,enemies:[{ref:"efreeti",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[159],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"塔拉兹会谈判求自由；一旦盐圈被破坏，他可能为逃约和恶意而攻击。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1da",name:"离开Xonthal的塔遭遇",sceneId:"scn_rot_1da",prelocked:!1,enemies:[{ref:"adult blue dragon",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[160],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_1fd",name:"主宝藏室遭遇",sceneId:"scn_rot_1fd",prelocked:!1,enemies:[{ref:"龙牙|ToD",count:1},{ref:"Flesh Golem|ToD",count:2},{ref:"守卫龙兽|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[168],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_201",name:"龙角号遭遇",sceneId:"scn_rot_201",prelocked:!1,enemies:[{ref:"air elemental",count:1},{ref:"Stone Golem",count:1},{ref:"龙魂|ToD",count:1},{ref:"龙牙|ToD",count:1},{ref:"龙翼|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[168],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/levelScaling/_meta；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},levelScaling:{note:"初始为气元素和石魔像；龙吼号角停止一分钟后，一名龙魂、一名龙牙和四名龙翼增援。"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_209",name:"低级邪教徒的房间遭遇",sceneId:"scn_rot_209",prelocked:!1,enemies:[{ref:"龙翼|ToD",count:3},{ref:"龙爪|ToD",count:9}],battlefield:{family:"wilderness"},_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_rot_20b",name:"幼龙围栏遭遇",sceneId:"scn_rot_20b",prelocked:!1,enemies:[{ref:"守卫龙兽|ToD",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}}],i=[{id:"qst_main_tod",title:"巨龙僭政：阻止提亚马特归来",chapterId:"source_hotdq",stages:[{id:"stage_tod_greenest",title:"燃烧的绿野",objectives:[{id:"obj_tod_reach_greenest",type:"reach",targetRef:"scn_hotdq_061",description:"进入正遭成年蓝龙、邪教徒、狗头人与雇佣兵劫掠的绿野镇，并把遇到的平民护送到堡垒。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_061"}},{id:"obj_tod_greenest_missions",type:"narrative",description:"在凌晨四点袭击者撤离前，按局势选择古老隧道、出击口、圣堂、磨坊、俘虏与龙袭等任务；除寻找堡垒外不强制固定全清顺序。",evidenceRequired:!0},{id:"obj_tod_cyanwrath",type:"reach",targetRef:"scn_hotdq_073",description:"结算兰德卓萨·青怒在堡垒外提出的单挑战与俘虏命运，记录其存活后果。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_073"}}]},{id:"stage_tod_raiders",title:"追踪强盗营地",objectives:[{id:"obj_tod_follow_raiders",type:"reach",targetRef:"scn_hotdq_08e",description:"沿撤退队伍留下的十二英里踪迹追踪袭击者，处理掉队者与专门监视追兵的后卫。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_08e"}},{id:"obj_tod_scout_camp",type:"reach",targetRef:"scn_hotdq_095",description:"潜入或侦察营地，查明首领、兵力、劫掠目的、下一步行动与洞穴中龙蛋的线索。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_095"}},{id:"obj_tod_rescue_leosin",type:"talk",targetRef:"npc_leosin_erlanthar",description:"找到被俘的利奥辛；按他的选择当夜救出他，或先让他完成侦察再返回绿野。",evidenceRequired:!0}]},{id:"stage_tod_hatchery",title:"龙蛋孵化场",objectives:[{id:"obj_tod_return_camp",type:"reach",targetRef:"scn_hotdq_0a6",description:"根据利奥辛掌握的教团计划返回已撤空的营地，确认洞穴仍由守卫把守。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_0a6"}},{id:"obj_tod_infiltrate_hatchery",type:"reach",targetRef:"scn_hotdq_0a7",description:"穿过陷阱与守卫深入孵化场，调查教团培育伏击龙兽和黑龙蛋的行动。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_0a7"}},{id:"obj_tod_resolve_eggs",type:"reach",targetRef:"scn_hotdq_0ca",description:"面对三枚黑龙蛋及其守卫，选择摧毁或带走龙蛋，并取得指向教团宝藏运输路线的记录。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_0ca"}}]},{id:"stage_tod_caravan",title:"沿剑湾北上",objectives:[{id:"obj_tod_elturel_briefing",type:"reach",targetRef:"scn_hotdq_0d6",description:"把孵化场情报交给利奥辛与昂塔尔·弗鲁姆，接受秘密追踪教团宝藏而不惊动护送者的任务。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_0d6"}},{id:"obj_tod_join_caravan",type:"reach",targetRef:"scn_hotdq_0da",description:"从博德之门加入北行商队，辨认混在普通商旅中的教团车队。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_0da"}},{id:"obj_tod_shadow_cult",type:"narrative",description:"在约两个月的商队旅程中处理道路事件、与贾姆娜接触并维持掩护，跟随宝藏抵达深水城而非提前暴露。",evidenceRequired:!0}]},{id:"stage_tod_roadhouse",title:"卡纳特客栈",objectives:[{id:"obj_tod_continue_north",type:"reach",targetRef:"scn_hotdq_10e",description:"在深水城重新受雇加入北上筑路队，继续监视从商队转运的教团货物。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_10e"}},{id:"obj_tod_roadhouse_warehouse",type:"reach",targetRef:"scn_hotdq_111",description:"调查卡纳特客栈仓库、地板暗门与夜间搬运，确认货物被蜥蜴人经秘密隧道送入死者之沼。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_111"}},{id:"obj_tod_follow_lizardfolk",type:"reach",targetRef:"scn_hotdq_11e",description:"沿独木舟运输线进入沼泽；可以交涉、跟踪或控制蜥蜴人向导，不把随机沼泽遭遇当作必清清单。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_11e"}}]},{id:"stage_tod_naerytar",title:"纳瑞塔城堡",objectives:[{id:"obj_tod_reach_naerytar",type:"reach",targetRef:"scn_hotdq_130",description:"抵达教团宝藏中转站，辨明灰生、法布列斯、蜥蜴人与啵灵蛙之间不稳定的权力关系。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_130"}},{id:"obj_tod_choose_castle_route",type:"narrative",description:"选择伪装侦察、争取受压迫蜥蜴人、挑动内讧或正面强攻；保留瑞兹米尔、灰生与法布列斯可能逃脱或倒戈的后果。",evidenceRequired:!0},{id:"obj_tod_find_portal",type:"reach",targetRef:"scn_hotdq_181",description:"进入城堡下方洞穴，追踪宝藏与首领穿过的传送法阵，并取得启用口令。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_181"}}]},{id:"stage_tod_lodge",title:"狩猎小屋",objectives:[{id:"obj_tod_exit_portal",type:"reach",targetRef:"scn_hotdq_196",description:"穿过传送门抵达灰峰山脉狩猎小屋，追查瑞兹米尔与宝藏的去向。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_196"}},{id:"obj_tod_resolve_talis",type:"talk",targetRef:"npc_talis_the_white",description:"与被排除在核心圈外的白袍塔利斯战斗或达成脆弱交易，从她或小屋线索得知帕纳斯特与天穹堡。",evidenceRequired:!0},{id:"obj_tod_reach_parnast",type:"reach",targetRef:"scn_hotdq_1ed",description:"在天穹堡起飞前赶到五英里外的帕纳斯特；若塔利斯及其人员全灭，须从其物品或村民处找到替代线索。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_1ed"}}]},{id:"stage_tod_skyreach",title:"天穹堡",objectives:[{id:"obj_tod_enter_skyreach",type:"reach",targetRef:"scn_hotdq_1f3",description:"在受教团控制的帕纳斯特识破拖延，选择伪装、塔利斯引路、骑乘飞龙或其他来源允许方式进入飞行城堡。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_1f3"}},{id:"obj_tod_turn_blagothkus",type:"talk",targetRef:"npc_blagothkus",description:"查明云巨人布拉戈提库斯借教团挑动巨人与龙战争的动机，决定说服、胁迫或对抗他。",evidenceRequired:!0},{id:"obj_tod_stop_hoard",type:"reach",targetRef:"scn_hotdq_26a",description:"处理瑞兹米尔、白龙与主金库，使天穹堡坠毁、被占领或至少截断运往龙井的大批贡品。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_hotdq_26a"}}]},{id:"stage_tod_council",title:"深水城议会",objectives:[{id:"obj_tod_first_council",type:"reach",targetRef:"scn_rot_066",description:"返回深水城参加第一次秘密议会，报告教团计划，并在龙吼号角响遍剑湾后接受移动冰海或瓦拉姆线索。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_066"}},{id:"obj_tod_track_support",type:"narrative",description:"在四次会议中持续记录各派系对队伍行动的赞成与反对；任务顺序由议会线索和玩家选择决定，不伪造成固定全清。",evidenceRequired:!0},{id:"obj_tod_survive_strikes",type:"reach",targetRef:"scn_rot_153",description:"把教团对英雄的三次递增反击穿插在其他章节之间；具体是否发生第三次及间隔由来源的战役节奏决定。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_153"}},{id:"obj_tod_cult_strike_1",type:"narrative",description:"已实际经历并解决教团第 1 次反击；没有发生的反击不补演，不按聊天次数生成。",evidenceRequired:!0},{id:"obj_tod_cult_strike_2",type:"narrative",description:"已实际经历并解决教团第 2 次反击；没有发生的反击不补演，不按聊天次数生成。",evidenceRequired:!0,reportCondition:{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_cult_strike_1"}},{id:"obj_tod_cult_strike_3",type:"narrative",description:"已实际经历并解决教团第 3 次反击；没有发生的反击不补演，不按聊天次数生成。",evidenceRequired:!0,reportCondition:{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_cult_strike_2"}}]},{id:"stage_tod_moving_ice",title:"移动冰海与龙吼号角",objectives:[{id:"obj_tod_find_oyaviggaton",type:"reach",targetRef:"scn_rot_091",description:"乘霜皮号进入移动冰海寻找奥亚维加顿，并从被白龙奴役的冰猎者处取得进入冰洞的路线。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_091"}},{id:"obj_tod_find_maccath",type:"talk",targetRef:"npc_maccath_the_crimson",description:"在冰洞中找到失踪的绯红法师麦卡丝，确认龙吼号角被教团从白龙宝库运往龙井。",evidenceRequired:!0},{id:"obj_tod_escape_aruthator",type:"reach",targetRef:"scn_rot_0d7",description:"击退或避开阿劳托尔并带麦卡丝及所得研究离开；未先迫使白龙撤退时，霜皮号无法安全逃离。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_0d7"}}]},{id:"stage_tod_wyrmspeakers",title:"向龙语者宣战",objectives:[{id:"obj_tod_track_varram",type:"reach",targetRef:"scn_rot_0db",description:"依据第一次议会线索追踪丢失白龙面具的瓦拉姆，从博尔斯凯尔桥进入蛇丘与迪德里乌斯墓穴。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_0db"}},{id:"obj_tod_resolve_varram",type:"reach",targetRef:"scn_rot_116",description:"穿过被元提占据的墓穴找到瓦拉姆；取得他对教团的情报并确认白龙面具并不在墓中。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_116"}},{id:"obj_tod_find_neronvain",type:"reach",targetRef:"scn_rot_12f",description:"依据第二次议会任务调查迷雾森林袭击，以幸存者、加林、乌鸦和湿衣线索定位东南方瀑布要塞。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_12f"}},{id:"obj_tod_defeat_neronvain",type:"reach",targetRef:"scn_rot_150",description:"在隐藏要塞与龙巢对抗内洛维和绿龙丘斯，结算绿龙面具及内洛维真实身份对议会的影响。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_150"}}]},{id:"stage_tod_metallic_dragons",title:"金属龙议会",objectives:[{id:"obj_tod_accept_dragon_embassy",type:"reach",targetRef:"scn_rot_16f",description:"接受银龙奥塔里利亚卡诺斯邀请，作为剑湾类人派系大使前往下界山脉。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_16f"}},{id:"obj_tod_negotiate_dragons",type:"reach",targetRef:"scn_rot_172",description:"与五位金属龙议员逐一交涉并权衡派系让步，争取至少三位友好且无一不友好。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_172"}},{id:"obj_tod_secure_dragon_alliance",type:"narrative",description:"把承诺、让步与各龙态度带回深水城议会，确定金属龙是否共同参战及提供的个别援助。",evidenceRequired:!0}]},{id:"stage_tod_xonthal",title:"赞萨尔塔的假面具",objectives:[{id:"obj_tod_answer_iskander",type:"reach",targetRef:"scn_rot_194",description:"回应叛逃教徒伊斯坎德尔声称能交出蓝龙面具的紧急消息，前往赞萨尔塔。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_194"}},{id:"obj_tod_solve_maze",type:"reach",targetRef:"scn_rot_198",description:"按日晷与路径规则解开魔法树篱迷宫；塔楼无法由侦测、传送或直接破坏绕过。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_198"}},{id:"obj_tod_reach_iskander",type:"reach",targetRef:"scn_rot_1c0",description:"掌握塔内传送符号并进入地下城，找到已死的伊斯坎德尔及沾血但为赝品的蓝龙面具。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_1c0"}},{id:"obj_tod_survive_lennithon",type:"reach",targetRef:"scn_rot_1da",description:"离塔后面对被召来的成年蓝龙兰尼森，在保护村民、交出赝品或击退巨龙之间作出选择。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_1da"}}]},{id:"stage_tod_thay",title:"泰伊使团",objectives:[{id:"obj_tod_accept_thay",type:"reach",targetRef:"scn_rot_1de",description:"评估泰伊使者经诚实之域确认的邀请，决定是否以剑湾特使身份前往奈瑟守望堡。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_1de"}},{id:"obj_tod_negotiate_thay",type:"narrative",description:"向萨奇昂埃塞尔德拉·耶斯提供流亡红袍法师与拉斯·莫达的情报，同时承受当夜托梦术审讯的后果。",evidenceRequired:!0},{id:"obj_tod_return_from_thay",type:"reach",targetRef:"scn_rot_1e5",description:"带着泰伊是否援助以及守护卷轴奖励返回深水城；任务成功会改变龙井决战可用资源。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_1e5"}}]},{id:"stage_tod_well",title:"龙井决战",objectives:[{id:"obj_tod_fourth_council",type:"reach",targetRef:"scn_rot_1e7",description:"在第四次议会整合此前得失，分配派系、金属龙及其他盟军资源对抗教团、色彩龙、雇佣军与红袍法师。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_1e7"}},{id:"obj_tod_infiltrate_well",type:"reach",targetRef:"scn_rot_1ed",description:"侦察或随联军突入龙井，经多个熔岩管入口接近已升起的提亚马特神庙，并决定是否救援祭品或破坏辅助目标。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_1ed"}},{id:"obj_tod_break_ritual",type:"reach",targetRef:"scn_rot_210",description:"在神庙中中断红袍法师连续十轮的仪式、夺取或摧毁龙后面具；若提亚马特降临，则按此前破坏项削弱并将其驱逐。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_210"}}]},{id:"stage_tod_aftermath",title:"胜利、失败与余波",objectives:[{id:"obj_tod_resolve_outcome",type:"reach",targetRef:"scn_rot_238",description:"结算提亚马特被阻止、被驱逐或成功统治的结果，并保留角色战败后继续反抗的可能性。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_rot_238"}},{id:"obj_tod_rescue_prisoners",type:"narrative",description:"若联军获胜，救援龙井剩余囚犯，处理逃散邪教徒、撤退色彩龙与剑湾各地被掠宝藏的归还争议。",evidenceRequired:!0}]}],_meta:{sourcePages:[22,24,29,32,36,37,44,55,56,58,59,61,64,75,78,87,88,102,104,105,111,113,123,124,131,134,136,139,140,142,144,145,149,155,157,160,161,163,164,165,171,172,174],confidence:"high",needsReview:!1,extractorNotes:"按 HotDQ 八章和 RoT 四次议会的来源结构重建；RoT 中可变任务顺序与教团反击穿插关系明确保留，不强行线性化。；overlay覆写:title/chapterId/stages/_meta"},progression:"objectives",completionCondition:{type:"and",clauses:[{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_resolve_outcome"},{type:"quest_objective",questId:"qst_main_tod",objectiveId:"obj_tod_rescue_prisoners"}]}}],c=[{id:"evt_tod_hatchery_route",sceneId:"scn_hotdq_0ca",trigger:{type:"player_action",verbClass:"scavenge",targetRef:"scn_hotdq_0ca"},once:!0,effects:[{kind:"reveal_info",infoId:"info_tod_hoard_route"}],narrationHint:"孵化场的龙蛋、货单和营地撤离痕迹把教团贡品路线指向北方。",_meta:{sourcePages:[42,43,44],confidence:"high",needsReview:!1}},{id:"evt_tod_talis_bargain",sceneId:"scn_hotdq_1d1",trigger:{type:"player_action",verbClass:"speak",targetRef:"npc_talis_the_white"},once:!0,effects:[{kind:"reveal_info",infoId:"info_tod_talis_bargain"},{kind:"reveal_info",infoId:"info_tod_cult_plan"}],narrationHint:"塔利斯把对白龙面具任命的不满转化为交易筹码，指出帕纳斯特与天穹堡。",_meta:{sourcePages:[78,84,87],confidence:"high",needsReview:!1}},{id:"evt_tod_first_council",sceneId:"scn_rot_066",trigger:{type:"player_action",verbClass:"move",targetRef:"scn_rot_066"},once:!0,effects:[{kind:"reveal_info",infoId:"info_tod_council_flow"},{kind:"reveal_info",infoId:"info_tod_draakhorn"},{kind:"agenda_start",agendaId:"agd_tod_cult_counterattacks"}],narrationHint:"第一次议会把龙吼号角、移动冰海和瓦拉姆线索列入战争议程，并开始追踪各派系态度。",_meta:{sourcePages:[104,105],confidence:"high",needsReview:!1}},{id:"evt_tod_maccath_draakhorn",sceneId:"scn_rot_0b7",trigger:{type:"player_action",verbClass:"speak",targetRef:"npc_maccath_the_crimson"},once:!0,effects:[{kind:"reveal_info",infoId:"info_tod_draakhorn"}],narrationHint:"麦卡丝结合囚禁期间所见与白龙资料，确认龙吼号角已由教团送往龙井。",_meta:{sourcePages:[119,123],confidence:"high",needsReview:!1}},{id:"evt_tod_varram_truth",sceneId:"scn_rot_116",trigger:{type:"player_action",verbClass:"speak",targetRef:"npc_varram"},once:!0,effects:[{kind:"reveal_info",infoId:"info_tod_varram_mask"}],narrationHint:"活捉、救出或审问瓦拉姆后，可确认他来墓穴是为占卜失窃白龙面具而非携带面具。",_meta:{sourcePages:[124,131,133],confidence:"high",needsReview:!1}},{id:"evt_tod_neronvain_identity",sceneId:"scn_rot_150",trigger:{type:"player_action",verbClass:"scavenge",targetRef:"scn_rot_150"},once:!0,effects:[{kind:"reveal_info",infoId:"info_tod_neronvain"}],narrationHint:"绿龙巢穴、龙语者遗物与加林证词共同确认内洛维的王室身份和袭击网络。",_meta:{sourcePages:[134,139],confidence:"high",needsReview:!1}},{id:"evt_tod_xonthal_fake_mask",sceneId:"scn_rot_1c0",trigger:{type:"player_action",verbClass:"scavenge",targetRef:"scn_rot_1c0"},once:!0,effects:[{kind:"reveal_info",infoId:"info_tod_xonthal_fake_mask"}],narrationHint:"伊斯坎德尔已死，尸旁沾血的蓝色面具经检查被证实为赝品。",_meta:{sourcePages:[157,160],confidence:"high",needsReview:!1}},{id:"evt_tod_thay_offer",sceneId:"scn_rot_1de",trigger:{type:"player_action",verbClass:"move",targetRef:"scn_rot_1de"},once:!0,effects:[{kind:"reveal_info",infoId:"info_tod_thay_offer"}],narrationHint:"泰伊使团明确共同目标是拉斯·莫达的流亡红袍法师，但合作伴随审讯与政治风险。",_meta:{sourcePages:[161,162],confidence:"high",needsReview:!1}},{id:"evt_tod_enter_tiamat_temple",sceneId:"scn_rot_210",trigger:{type:"player_action",verbClass:"move",targetRef:"scn_rot_210"},once:!0,effects:[{kind:"reveal_info",infoId:"info_tod_final_ritual"}],narrationHint:"五座礼拜堂的红袍法师开始把魔力导入中央门户；主持人按来源逐轮记录至少五人专注的十轮进度。",_meta:{sourcePages:[171,172],confidence:"medium",needsReview:!0,extractorNotes:"现有运行时没有按战斗轮、参与施法者人数及连续失败轮数驱动的复合 clock；事件揭示精确规则，逐轮状态由主持人记录。"}},{id:"evt_tod_aftermath",sceneId:"scn_rot_238",trigger:{type:"player_action",verbClass:"move",targetRef:"scn_rot_238"},once:!0,effects:[{kind:"reveal_info",infoId:"info_tod_aftermath"}],narrationHint:"依据仪式、提亚马特与联军结果结算战役，并把囚犯、邪教残部、色彩龙和赃物转入余波。",_meta:{sourcePages:[174],confidence:"high",needsReview:!1}}],d=[],r=[{id:"trs_hotdq_06c_0",sceneId:"scn_hotdq_06c",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"掷一枚d6并将结果乘以10，以确定被盗物品的总价值，单位为金币（gp）。"}],once:!0,_meta:{sourcePages:[23],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「邪教徒和他们的狗头人爪牙正在洗劫格林斯特，并将战利品收集起来运回营（见第二章）。 玩家遇到的任何掠夺小队有50的概率携带有被盗的财宝。 掷一枚d6并将结果乘以10，以确定被盗物品的总价值，单位为金币（gp）。」"}},{id:"trs_hotdq_0b5_0",sceneId:"scn_hotdq_0b5",container:"袋子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"每颗价值10金币"},{kind:"fixed",itemRef:"每颗价值50金币"}],once:!0,_meta:{sourcePages:[38],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「花10分钟彻底搜查垃圾堆确实能找到一件有价值的物品：一个被忽视的袋子，里面有六颗装饰性宝石，每颗价值10金币，以及八颗半宝石，每颗价值50金币。 而那些洞穴穴蜥人身边没有任何值得别人想要的东西。」"}},{id:"trs_hotdq_0bd_0",sceneId:"scn_hotdq_0bd",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"38 gp"},{kind:"fixed",itemRef:"152 sp"},{kind:"fixed",itemRef:"704 cp"},{kind:"fixed",itemRef:"8 cp"},{kind:"fixed",itemRef:"100 gp"},{kind:"fixed",itemRef:"每个价值10金币"}],once:!0,_meta:{sourcePages:[40],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「搜查房间需要10分钟，发现了38金币，152银币和704铜币，这些铜币整齐地分成了88堆，每堆正好8个铜币。 还有许多以龙为主题的护身符和护身符，它们由骨头、皂石、木头和象牙雕刻而成。 其中大部分的工艺都很差，但有四个具有独特且野蛮的艺术风…」"}},{id:"trs_hotdq_0c1_0",sceneId:"scn_hotdq_0c1",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"300 gp"},{kind:"fixed",itemRef:"900 gp"},{kind:"fixed",itemRef:"100 gp"}],once:!0,_meta:{sourcePages:[40],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「箱子里装着邪教最近宝藏突袭中夺取的一些精选物品。 Mondath说服瑞兹米尔让她保留它们，并承诺当她北上前往龙井参加仪式时会带上它们。 实际上，如果一切都变糟了，她想要一些退路（她从未向瑞兹米尔提及最后那部分）。 里面有一串珍珠（300金币…」"}},{id:"trs_hotdq_0d1_0",sceneId:"scn_hotdq_0d1",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"总价值为120金币"}],once:!0,_meta:{sourcePages:[43],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「守卫的剑鞘上装饰有龙的图案。 每个价值大约5金币。 它们不是龙之崇拜"制服"的一部分，但是佩戴其中之一的剑鞘可能会在尝试伪装成邪教徒时为角色增加可信度。 例如，你可能在进行欺骗或影响邪教徒的魅力检定时给予+1的奖励。 除了他们的装备，守卫们…」'},coins:{dice:"5d1"}},{id:"trs_hotdq_0d3_0",sceneId:"scn_hotdq_0d3",container:"箱子",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[43],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这个房间现在大部分是空的，除了一些翻倒的箱子、破碎的物品、散落的硬币、在匆忙撤离时掉落的小宝石，以及一个在喝了几瓶酒后在地板上沉睡的邪教徒。 除非进行剧烈摇晃，否则他不会醒来，而且他需要几个小时才能清醒。 留在这个房间里的所有掉落物品的总价…」"},coins:{dice:"16d1"}},{id:"trs_hotdq_152_0",sceneId:"scn_hotdq_152",container:"藏有",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"淬毒匕首"}],once:!0,_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在提亚马特的黑龙头雕像下方藏有一个隐蔽的隔间，里面放着一把淬毒匕首。 通过一次成功的DC 15智力（调查）检定可以发现它。 只有瑞兹米尔和参与雕刻雕像的少数蜥蜴人（包括裂颚）知道这把匕首的存在。」"}},{id:"trs_hotdq_158_0",sceneId:"scn_hotdq_158",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"高等治疗药水"},{kind:"fixed",itemRef:"450 gp"},{kind:"fixed",itemRef:"520 sp"},{kind:"fixed",itemRef:"80 cp"},{kind:"fixed",itemRef:"35 gp"},{kind:"fixed",itemRef:"45 gp"},{kind:"fixed",itemRef:"55 gp"},{kind:"fixed",itemRef:"65 gp"},{kind:"fixed",itemRef:"80 gp"}],once:!0,_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「房间的西南角是一个临时的木工作坊，邪教徒在这里制作新的箱子和盒子来存放赃物。 如果角色有机会翻找这些堆垛并保留他们发现的东西，他们将获得450金币，520银币，80铜币，22颗半宝石（5颗每颗35金币，6颗每颗45金币，6颗每颗55金币，4…」"}},{id:"trs_hotdq_161_0",sceneId:"scn_hotdq_161",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"盗贼工具"},{kind:"fixed",itemRef:"1825 cp"},{kind:"fixed",itemRef:"54 sp"},{kind:"fixed",itemRef:"这些耳环价值10金币"}],once:!0,_meta:{sourcePages:[70],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在塔楼的另一端，紧靠南墙，有一个上锁的箱子。 这个锁可以用一套盗贼工具和一次成功的DC 10敏捷检定打开。 箱子里装有1,825铜币、54银币和一对俗气的金耳环，如果熔化的话，这些耳环价值10金币。 这个箱子是城堡的最后一批租户离开时留下的…」"}},{id:"trs_hotdq_164_0",sceneId:"scn_hotdq_164",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"盗贼工具"}],once:!0,_meta:{sourcePages:[71],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在房间的东南角有一个大型、坚固的箱子，被链条牢牢绑住，并上了挂锁。 该锁可以通过使用盗贼工具和一次成功的DC 12敏捷检定打开。 里面是Pharblex分得的蛙人报酬：银器和银金合金的珠宝、手镜、贝壳梳子、发夹和带有半宝石的胸针，总价值1,…」"}},{id:"trs_hotdq_16f_0",sceneId:"scn_hotdq_16f",container:"保险箱",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"盗贼工具"},{kind:"fixed",itemRef:"200 sp"},{kind:"fixed",itemRef:"保险箱内含博恩格雷的应急资金：200金币、200银币和10颗每颗价值100金币的宝石"}],once:!0,_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「除了精灵的衣物和个人物品外，一个小型保险箱隐藏在地毯下一块松动的木板下。 如果移动地毯，隐藏处会自动被发现； 如果不移动地毯，则会自动被忽略。 保险箱内含博恩格雷的应急资金：200金币、200银币和10颗每颗价值100金币的宝石。 锁着的箱…」"},coins:{dice:"200d1"}},{id:"trs_hotdq_176_0",sceneId:"scn_hotdq_176",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[],once:!0,_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「楼梯顶部两侧各有一尊匹配的黑龙玉雕。 一位严肃的收藏家可能会为这对玉雕支付高达3000金币。 它们每个高3尺，重400磅。」"},coins:{dice:"3000d1"}},{id:"trs_hotdq_179_0",sceneId:"scn_hotdq_179",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"4800 gp"},{kind:"fixed",itemRef:"1200 gp"}],once:!0,_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「房间里少数容易携带的贵重物品之一是一座2尺高的黑龙雕像，由真正的黑龙鳞片和爪子制成，眼睛是红宝石，牙齿是钻石。 它栖息在一堆由真正的黄金和宝石组成的财宝堆上。 对收藏家来说，它的价值是4800金币，重量仅为20磅。 然而，粗暴处理会损坏它，…」"}},{id:"trs_hotdq_188_0",sceneId:"scn_hotdq_188",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"50 gp"},{kind:"fixed",itemRef:"100 gp"},{kind:"fixed",itemRef:"200 gp"},{kind:"fixed",itemRef:"400 gp"},{kind:"fixed",itemRef:"600 gp"},{kind:"fixed",itemRef:"在那个区域搜寻会找到一小把价值1800金币的奇特和半宝石（2颗每颗50金币，5颗每颗100金币，1颗200金币，1颗400金币，1颗600金币）"}],once:!0,_meta:{sourcePages:[75],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「搜索的角色确实能在房间东端的水下看到宝石的闪光。 在那个区域搜寻会找到一小把价值1800金币的奇特和半宝石（2颗每颗50金币，5颗每颗100金币，1颗200金币，1颗400金币，1颗600金币）。 这些宝石来自一个不太虔诚的邪教徒，他每次有…」"}},{id:"trs_hotdq_1a9_0",sceneId:"scn_hotdq_1a9",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"100 gp"},{kind:"fixed",itemRef:"25 gp"},{kind:"fixed",itemRef:"250 gp"},{kind:"fixed",itemRef:"750 gp"}],once:!0,_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「特雷普辛 为自己保留了一些物品。 其中包括六张貂皮（每张100金币），三张狐狸皮（每张25金币），以及他收藏中的珍品：一件完整的冬季狼皮斗篷（250金币），配有一个爪形的秘银扣用来固定斗篷（750金币）。」"}},{id:"trs_hotdq_1b7_0",sceneId:"scn_hotdq_1b7",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"则价值400金币"}],once:!0,_meta:{sourcePages:[81],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这幅挂毯重约50磅，只有在挂在墙上时才有效，可以将生物传送到五英里范围内的随机位置； 如果像地毯一样放在地上则无法工作，并且如果以任何方式损坏，它将失去其魔法属性。 它的价值是2500金币，如果失去其传送属性，则价值400金币。」"},coins:{dice:"2500d1"}},{id:"trs_hotdq_1bc_0",sceneId:"scn_hotdq_1bc",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"这些银子总共价值300金币"}],once:!0,_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这些银子总共价值300金币，重量为50磅。」"}},{id:"trs_hotdq_1c6_0",sceneId:"scn_hotdq_1c6",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"治疗药水",count:2}],once:!0,_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这里的挂毯价值大约400金币，但重40磅。 此外，狮鹫的头部确实包含一些不寻常的东西：两瓶治疗药水的储藏。」"},coins:{dice:"400d1"}},{id:"trs_hotdq_1d9_0",sceneId:"scn_hotdq_1d9",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"龙光一闪"},{kind:"fixed",itemRef:"其中一支生锈的长矛上镶嵌着秘银（价值50金币）"}],once:!0,_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「其中一支生锈的长矛上镶嵌着秘银（价值50金币），另一支名为龙光一闪的长矛被施加了10次en=Daylight的魔法，用于在微光或黑暗森林的灌木丛中使用。 命令短语是"提亚马特的眼睛闪耀"，用龙语符文写在长矛的护手上。」'}},{id:"trs_hotdq_1dc_0",sceneId:"scn_hotdq_1dc",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"盗贼工具"},{kind:"fixed",itemRef:"+1 链甲"},{kind:"fixed",itemRef:"法术卷轴"},{kind:"fixed",itemRef:"4000 gp"},{kind:"fixed",itemRef:"20 gp"},{kind:"fixed",itemRef:"而Kusphia携带着一个价值40金币的银质邪教标志"}],once:!0,_meta:{sourcePages:[85],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「塔丽丝在这个房间里保管着一个上锁的箱子，她持有唯一的钥匙。 使用盗贼工具的角色也可以通过一次成功的DC 21敏捷检定打开它。 当箱子被打开时，+1 链甲散发出的光芒会从箱子里溢出。 光芒还照亮了箱子里的4000金币和一张法术卷轴，卷轴上记载…」"}},{id:"trs_hotdq_1df_0",sceneId:"scn_hotdq_1df",container:"藏有",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"但剩下的十二瓶满的每瓶价值15金币"},{kind:"fixed",itemRef:"价值250金币"}],once:!0,_meta:{sourcePages:[85],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「大多数的葡萄酒瓶都是空的，但剩下的十二瓶满的每瓶价值15金币。 此外，其中一个空瓶里藏有一条被偷的金项链，价值250金币。」"}},{id:"trs_hotdq_1e9_0",sceneId:"scn_hotdq_1e9",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"吸矢盾"},{kind:"fixed",itemRef:"挖掘1分钟或更长时间还会发现两件宝物：一面古老的吸矢盾和一个价值100金币的失去光泽的银器袋"}],once:!0,_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这个巢穴里装有骨头、一些旧的盔甲碎片、一个被戳穿的头盔以及其他残骸。 挖掘1分钟或更长时间还会发现两件宝物：一面古老的吸矢盾和一个价值100金币的失去光泽的银器袋。」"}},{id:"trs_hotdq_1f7_0",sceneId:"scn_hotdq_1f7",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"丰足酒杯"}],once:!0,_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「金色酒杯（The Golden Tankard）的名字来源于Raggnar多年前发现的一件魔法物品：一个金色的大啤酒杯，上面装饰有跳舞的矮人和谷物图案。 这是一件丰足酒杯（见附录C）。 口令是'Illefarn'。」"}},{id:"trs_hotdq_220_0",sceneId:"scn_hotdq_220",container:"存放",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"配有秘银马嚼（每副价值500金币）"}],once:!0,_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这里存放着四副精美的飞龙马勒，上面镶嵌着玉石，配有秘银马嚼（每副价值500金币）。」"}},{id:"trs_hotdq_224_0",sceneId:"scn_hotdq_224",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"这32颗宝石每颗价值500 gp"},{kind:"fixed",itemRef:"这个大锅价值25金币"}],once:!0,_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「石巨人收集小巧但完美的宝石，主要是紫水晶，但也有钻石、蛋白石、红宝石和黄玉。 他们的收藏品被一个魔法力场球保护在一个铁箱中，铁箱长六英尺，高和宽各四英尺，重达500磅。 抬起沉重的铁盖需要一个动作和一个 DC 12 的力量检定，而破坏力场球…」"},coins:{dice:"16000d1"}},{id:"trs_hotdq_229_0",sceneId:"scn_hotdq_229",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"盗贼工具"},{kind:"fixed",itemRef:"飞龙毒液",count:5},{kind:"fixed",itemRef:"黑龙面具"},{kind:"fixed",itemRef:"400 gp"},{kind:"fixed",itemRef:"200 gp"},{kind:"fixed",itemRef:"50 gp"},{kind:"fixed",itemRef:"600 sp"},{kind:"fixed",itemRef:"50 pp"},{kind:"fixed",itemRef:"总价值3000金币"}],once:!0,_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「瑞兹米尔持有这个房间的钥匙、箱子上的锁以及储藏室（区域13）的钥匙。 此外，这里的箱子被锁上，并且与瑞兹米尔魔法契合，以至于如果她死亡，箱子里的内容物会被传送到龙井中，从而使她的杀手无法得到。 箱子上的挂锁可以使用盗贼工具并通过一次成功的D…」"}},{id:"trs_hotdq_22d_0",sceneId:"scn_hotdq_22d",container:"放着",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"法术卷轴",count:3},{kind:"fixed",itemRef:"火焰法杖"}],once:!0,_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「拉斯·莫达拥有三份法术卷轴（en=Dimension Door、en=Feather Fall和en=Fireball），并且他携带一根火焰法杖。 对房间的彻底搜索发现了多封来自龙之邪教的最高领袖Severin给拉斯·莫达的信件。 Seve…」"}},{id:"trs_hotdq_235_0",sceneId:"scn_hotdq_235",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"但它们的内容物总共价值130金币"}],once:!0,_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「对厨房的彻底搜索揭示了装有黑胡椒、肉桂和肉豆蔻的小箱子。 每个箱子重2磅，但它们的内容物总共价值130金币。」"}},{id:"trs_hotdq_243_0",sceneId:"scn_hotdq_243",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"如果角色坚持要拆掉有价值的控制元件，他们可以撬出一把把的翡翠、绿松石、月长石、一大块玉石、一些琥珀碎片以及大块的秘银，总价值为10,000金币。"}],once:!0,_meta:{sourcePages:[98],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「如果角色坚持要拆掉有价值的控制元件，他们可以撬出一把把的翡翠、绿松石、月长石、一大块玉石、一些琥珀碎片以及大块的秘银，总价值为10,000金币。 这将摧毁城堡在动力下移动、产生天气效果等能力。 城堡将被强风向北吹去，最终撞在世界之脊山脉的米…」"}},{id:"trs_hotdq_25b_0",sceneId:"scn_hotdq_25b",container:"袋子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"800 sp"},{kind:"fixed",itemRef:"他或她会在裂缝中发现一颗价值500 gp的淡蓝色蓝宝石"}],once:!0,_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这些食人魔都在袋子、麻袋和箱子里存放着少量的金币和银币。 如果角色们花30分钟搜查兵营，他们会发现800枚银币和300枚金币。 如果队伍中的一名成员成功通过了一项DC 20智力（调查）检定，他或她会在裂缝中发现一颗价值500 gp的淡蓝色蓝…」"},coins:{dice:"300d1"}},{id:"trs_hotdq_261_0",sceneId:"scn_hotdq_261",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"次元袋"},{kind:"fixed",itemRef:"其中一个箱子还包含一个次元袋（容量袋）、四根纯金条（每根价值1000金币）和四十根纯银条（每根价值100金币）"}],once:!0,_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这些箱子没有上锁，里面装满了银币和金币（总共12000金币）。 其中一个箱子还包含一个次元袋（容量袋）、四根纯金条（每根价值1000金币）和四十根纯银条（每根价值100金币）。 每根金条或银条约重5磅。」"},coins:{dice:"12000d1"}},{id:"trs_hotdq_26a_0",sceneId:"scn_hotdq_26a",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"气化形体药水"},{kind:"fixed",itemRef:"+1 长剑"},{kind:"fixed",itemRef:"+1 长弓"},{kind:"fixed",itemRef:"+1 皮甲"},{kind:"fixed",itemRef:"防御护腕"},{kind:"fixed",itemRef:"500000 cp"},{kind:"fixed",itemRef:"100000 sp"},{kind:"fixed",itemRef:"每颗价值300金币"}],once:!0,_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这些财宝被冻结在冰中，需要使用多个火系法术或者长时间用篝火等待才能融化冰层。 财宝包括500,000铜币，100,000银币，和5,000金币，一个冻结的箱子，内含800铂金和21颗小蓝宝石，每颗价值300金币，一个冻结的气化形体药水（气态…」"},coins:{dice:"5000d1"}},{id:"trs_rot_0ac_0",sceneId:"scn_rot_0ac",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[],once:!0,_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「他们唯一有价值的财产是一些刻有龙形图案的海象獠牙，其中六个工艺足够精湛，可以从合适的收藏家那里卖得每个200金币。」"},coins:{dice:"200d1"}},{id:"trs_rot_0b4_0",sceneId:"scn_rot_0b4",container:"装着",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"375 gp"},{kind:"fixed",itemRef:"1480 ep"},{kind:"fixed",itemRef:"495 sp"},{kind:"fixed",itemRef:"1500 gp"},{kind:"fixed",itemRef:"还有价值225 gp的珠宝和珍贵物品"}],once:!0,_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Arauthator众多战斗的战利品在这个房间里展示。 能见度为45尺，所以角色们从门口看不到太多。 在这里被冻结在死亡中的生物包括两头百足魔兽、三个青足龙蛇、五只可怕雪怪，以及一只令人瞠目结舌的巨大乌贼。 这里还展示着一艘帆已升起的完整长…」"}},{id:"trs_rot_0b7_0",sceneId:"scn_rot_0b7",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"寒冷抗性戒指"},{kind:"fixed",itemRef:"屠杀箭",count:2}],once:!0,_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「如果团队似乎决心要与Arauthator战斗，Maccath提供了一枚她在囚禁期间制作的抗寒戒指和两支屠龙箭。 尽管这些物品和她的龙类知识给了角色们一些优势，她警告团队说Arauthator几乎吞噬了他所面对的每一个英雄。」"}},{id:"trs_rot_0bd_0",sceneId:"scn_rot_0bd",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"法术卷轴",count:10}],once:!0,_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「奥术施法者在这个抄写室中可以发现许多有价值的东西，同样也有很多毫无价值的东西。 几个世纪以来，Arauthator收集了许多被杀法师的法术书。 对于队伍的直接利益来说，更重要的是，他还收集了数十卷卷轴。 尽管这里许多卷轴因潮湿或年代久远而变…」"}},{id:"trs_rot_0d8_0",sceneId:"scn_rot_0d8",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"700 gp"},{kind:"fixed",itemRef:"1000 sp"},{kind:"fixed",itemRef:"400 gp"},{kind:"fixed",itemRef:"600 gp"},{kind:"fixed",itemRef:"800 gp"},{kind:"fixed",itemRef:"区域19和20共有700金币、1000银币和20颗宝石（五颗分别价值200金币、400金币、600金币和800金币）"}],once:!0,_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「如果老白死神被杀死或赶走，他将留下他的冰山巢穴的宝藏。 （因为Oyaviggaton只是龙维持的众多次要巢穴之一，这里的宝藏只代表他总财富的一小部分。 ） 区域19和20共有700金币、1000银币和20颗宝石（五颗分别价值200金币、40…」"}},{id:"trs_rot_106_0",sceneId:"scn_rot_106",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"火焰吐息药水"},{kind:"fixed",itemRef:"250 sp"},{kind:"fixed",itemRef:"每条价值50金币"}],once:!0,_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在宝座的脚下是一堆宝藏，包含250枚银币，六条精致的银项链，每条价值50金币，还有一瓶火焰吐息药水。 即使只是快速一瞥，角色们也可以看到这堆宝藏还包括数百枚铜币以及一些无价值的珠宝碎片和陶器碎片。」"}},{id:"trs_rot_10a_0",sceneId:"scn_rot_10a",container:"放着",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"毒素抗性戒指"},{kind:"fixed",itemRef:"法术卷轴"},{kind:"fixed",itemRef:"每件价值50金币"}],once:!0,_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「书架上摆放着关于预言术的魔法论文和笔记，这些文献经受了时间的摧残。 它们详细记录了古代耐瑟瑞尔的施法实践，如果出售，可以换取750金币。 如果角色搜索房间，他们会发现一本名为跨可能性的实质转换的破旧书籍，夹在床和墙之间。 如果将书归还到图书…」"},coins:{dice:"750d1"}},{id:"trs_rot_11f_0",sceneId:"scn_rot_11f",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"四颗价值1000金币的红宝石镶嵌在雕像的眼睛中"}],once:!0,_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「四颗价值1000金币的红宝石镶嵌在雕像的眼睛中，可以被撬出来。」"}},{id:"trs_rot_121_0",sceneId:"scn_rot_121",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"剧毒药水"},{kind:"fixed",itemRef:"600 cp"},{kind:"fixed",itemRef:"200 sp"}],once:!0,_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「如果角色搜索睡眠洞，他们可以找到600铜币，200银币和150金币，以及一瓶剧毒药水。」"},coins:{dice:"150d1"}},{id:"trs_rot_126_0",sceneId:"scn_rot_126",container:"藏在",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"125 sp"}],once:!0,_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「隐藏在蜥蜴人的脏乱巢穴中的是22枚金币和125枚银币的散币。」"},coins:{dice:"22d1"}},{id:"trs_rot_149_0",sceneId:"scn_rot_149",container:"藏着",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"120 sp"},{kind:"fixed",itemRef:"23 cp"},{kind:"fixed",itemRef:"外加一根来自博德之门的重5磅的银条（价值20金币）"}],once:!0,_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在双层床的床垫下隐藏着总共30金币，120银币，23铜币，以及200铜板，外加一根来自博德之门的重5磅的银条（价值20金币）。」"},coins:{dice:"30d1"}},{id:"trs_rot_14b_0",sceneId:"scn_rot_14b",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"每瓶价值100金币"}],once:!0,_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「食物大多是常见的食物，但内洛维的个人储备包括8瓶永恒甘露，每瓶价值100金币。 由于与精灵岛屿永聚岛的接触非常罕见，所以很容易找到买家。」"}},{id:"trs_rot_14d_0",sceneId:"scn_rot_14d",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"总共价值1500金币"}],once:!0,_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「如果角色们能从这个区域收集所有的家具、地毯、挂毯和艺术品，总共价值1500金币。 然而，角色们应该意识到这些物品是被偷走的精灵的合法财产。 象鼻被一个毒针陷阱保护着，可以通过成功的DC 18智力（调查）检定来发现。 如果陷阱被触发，它会进行…」"}},{id:"trs_rot_150_0",sceneId:"scn_rot_150",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"2400 sp"},{kind:"fixed",itemRef:"8000 cp"},{kind:"fixed",itemRef:"每个价值50金币"}],once:!0,_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「楚斯的小宝藏包括来自博德之门的十个金条，每个价值50金币，外加10枚珍珠，120金币，2400银币和8000铜币。 你也可以在宝藏中添加一些有用的药水或卷轴。」"},coins:{dice:"120d1"}},{id:"trs_rot_1a1_0",sceneId:"scn_rot_1a1",container:"藏有",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"治疗药水",count:6},{kind:"fixed",itemRef:"成长药水"},{kind:"fixed",itemRef:"火焰吐息药水"},{kind:"fixed",itemRef:"恐惧魔杖"},{kind:"fixed",itemRef:"+1 匕首",count:3},{kind:"fixed",itemRef:"漂浮之球"},{kind:"fixed",itemRef:"元素宝石，蓝宝石"}],once:!0,_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「水池底部藏有各种访客投入的宝藏：六瓶治疗药水，一瓶成长药水，一瓶火焰吐息药水，一根恐惧魔杖，三把+1匕首，一个漂浮之球，以及一个元素宝石（透明蓝宝石/风元素）。」"}},{id:"trs_rot_1c7_0",sceneId:"scn_rot_1c7",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"守护卷轴",count:2}],once:!0,_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「箱子里有三个卷轴：两个防护火元素生物的卷轴和一个防护土元素的卷轴。 角色们如果拿到这些卷轴，可以安全地通过元素生物，只要他们紧密地聚集在一起，让每个人都在施法者5尺半径效果范围内。 由于只有一个防护土元素的卷轴，角色们可能至少需要面对一次土…」"}},{id:"trs_rot_1ce_0",sceneId:"scn_rot_1ce",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"对于位面学者或探险家来说价值500金币"}],once:!0,_meta:{sourcePages:[158],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Xonthal图书馆的内容不仅数量庞大，而且价值连城。 这位法师的收藏包括近五千本书籍、小册子、对开本、四开本、卷轴和石板，总重量超过一吨。 如果这些收藏能够被搬动，其总价值将达到50,000金币。 另外，角色们也可以挑选一些特别有价值的卷…」"},coins:{dice:"50000d1"}}],l=[],_=[{id:"hook_tod_cult_plan",goalRef:"qst_main_tod",priority:10,clues:[{id:"clue_tod_greenest_raid",channel:"environment",content:"蓝龙、五色标记的教徒与雇佣兵不占领绿野，只系统搬走献给龙后的财宝。",deployableSceneIds:["scn_hotdq_061","scn_hotdq_073"]},{id:"clue_tod_leosin",channel:"npc",content:"利奥辛数月调查确认袭击来自龙之邪教的大规模行动，并主动潜入后被俘。",deployableSceneIds:["scn_hotdq_061","scn_hotdq_095"]},{id:"clue_tod_hatchery_records",channel:"document",content:"孵化场记录把劫掠、龙蛋、伏击龙兽和北行宝藏路线连接起来。",deployableSceneIds:["scn_hotdq_0ca","scn_hotdq_0d3"]}],_meta:{sourcePages:[22,24,29,32,42,43],confidence:"high",needsReview:!1}},{id:"hook_tod_hoard",goalRef:"qst_main_tod",priority:10,clues:[{id:"clue_tod_caravan_wagons",channel:"environment",content:"教团把赃物混入从博德之门北上的普通商队，并用护卫监视货车。",deployableSceneIds:["scn_hotdq_0da","scn_hotdq_0f5"]},{id:"clue_tod_roadhouse_floor",channel:"environment",content:"卡纳特客栈仓库暗门连接沼泽运输线，夜间由蜥蜴人搬走教团货箱。",deployableSceneIds:["scn_hotdq_111","scn_hotdq_11b"]},{id:"clue_tod_talis_skyreach",channel:"npc",content:"塔利斯知道帕纳斯特、天穹堡与瑞兹米尔的下一站，并可因派系怨恨提供通路。",deployableSceneIds:["scn_hotdq_196","scn_hotdq_1d1"]}],_meta:{sourcePages:[46,49,55,56,58,78,87],confidence:"high",needsReview:!1}},{id:"hook_tod_council",goalRef:"qst_main_tod",priority:10,clues:[{id:"clue_tod_draakhorn_sound",channel:"environment",content:"天穹堡事件后，所有动物与敏感者都感到龙吼号角从龙井传来的低沉扰动。",deployableSceneIds:["scn_rot_05f","scn_rot_066"]},{id:"clue_tod_maccath_horn",channel:"npc",content:"麦卡丝和白龙宝库资料确认号角已被教团取走并送往龙井。",deployableSceneIds:["scn_rot_0b7","scn_rot_0d7"]},{id:"clue_tod_four_councils",channel:"document",content:"四次议会议程把任务线索、派系态度和最终可调动资源逐轮对应起来。",deployableSceneIds:["scn_rot_066","scn_rot_07d"]}],_meta:{sourcePages:[104,105,109,123],confidence:"high",needsReview:!1}},{id:"hook_tod_wyrmspeakers",goalRef:"qst_main_tod",priority:10,clues:[{id:"clue_tod_varram_rumor",channel:"rumor",content:"竖琴手获知白龙面具被盗，瓦拉姆最近在博尔斯凯尔桥出现并急入蛇丘。",deployableSceneIds:["scn_rot_0db"]},{id:"clue_tod_galin_wet",channel:"npc",content:"加林暗中会见绿龙骑手；龙语者衣发总是湿透，巨龙每次都向村庄东南飞行。",deployableSceneIds:["scn_rot_12f"]},{id:"clue_tod_waterfall_lair",channel:"environment",content:"东南三十英里处瀑布、河道和蜘蛛哨兵共同指向内洛维与丘斯的隐藏要塞。",deployableSceneIds:["scn_rot_12f","scn_rot_13a"]}],_meta:{sourcePages:[124,131,134,136],confidence:"high",needsReview:!1}},{id:"hook_tod_xonthal",goalRef:"qst_main_tod",priority:10,clues:[{id:"clue_tod_iskander_message",channel:"document",content:"伊斯坎德尔承诺以蓝龙面具换取从教团控制下获救，并警告背叛随时会暴露。",deployableSceneIds:["scn_rot_194"]},{id:"clue_tod_balcony_mask",channel:"environment",content:"队伍抵达迷宫时，伊斯坎德尔在塔楼阳台挥舞疑似蓝色面具并指示他们进入地下。",deployableSceneIds:["scn_rot_198"]},{id:"clue_tod_fake_mask",channel:"item",content:"地下城尸体旁的面具沾血却未损，经查验可确认它只是蓝龙面具赝品。",deployableSceneIds:["scn_rot_1c0","scn_rot_1d8"]}],_meta:{sourcePages:[149,157,160],confidence:"high",needsReview:!1}},{id:"hook_tod_finale",goalRef:"qst_main_tod",priority:10,clues:[{id:"clue_tod_council_resources",channel:"document",content:"第四次议会计分与资源表显示盟军必须抵消色彩龙、巨人、魔鬼、雇佣军和教团部队。",deployableSceneIds:["scn_rot_1e7","scn_rot_215"]},{id:"clue_tod_well_entrances",channel:"environment",content:"龙井多个熔岩管入口通向囚牢、宝库、号角与神庙，为突袭提供不同目标与路线。",deployableSceneIds:["scn_rot_1ed"]},{id:"clue_tod_ritual_focus",channel:"environment",content:"五座礼拜堂的红袍法师把力量汇入中央门户；压低参与人数可停滞并最终重置十轮仪式。",deployableSceneIds:["scn_rot_210"]}],_meta:{sourcePages:[164,165,171,172],confidence:"high",needsReview:!1}}],h=[],f=[{id:"tbl_hotdq_06c_0",name:"第1章 遭遇",purpose:"random",rows:[{id:"row_hotdq_06c_0_0",kind:"text",text:"6 狗头人",range:[1,1]},{id:"row_hotdq_06c_0_1",kind:"text",text:"3只狗头人和1只伏击龙兽（见附录D）",range:[2,2]},{id:"row_hotdq_06c_0_2",kind:"text",text:"6 邪教徒",range:[3,3]},{id:"row_hotdq_06c_0_3",kind:"text",text:"4个邪教徒和1个警卫",range:[4,4]},{id:"row_hotdq_06c_0_4",kind:"text",text:"2 个邪教徒和 1 个侍僧*",range:[5,5]},{id:"row_hotdq_06c_0_5",kind:"text",text:"3名警卫和1名侍僧",range:[6,6]},{id:"row_hotdq_06c_0_6",kind:"text",text:"1d6 位镇民正被掠夺者追捕（掷一个 d6 来确定掠夺者团队）",range:[7,7]},{id:"row_hotdq_06c_0_7",kind:"text",text:"1d6 躲藏的镇民",range:[8,8]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d8"},{id:"tbl_hotdq_0a7_0",name:"第3章 遭遇战",purpose:"random",rows:[{id:"row_hotdq_0a7_0_0",kind:"text",text:"4 狗头人",range:[1,1]},{id:"row_hotdq_0a7_0_1",kind:"text",text:"6名狗头人和2名带翼狗头人",range:[2,2]},{id:"row_hotdq_0a7_0_2",kind:"text",text:"3 带翼狗头人",range:[3,3]},{id:"row_hotdq_0a7_0_3",kind:"text",text:"5 带翼狗头人",range:[4,4]},{id:"row_hotdq_0a7_0_4",kind:"text",text:"2 带翼狗头人 和 1 守卫龙兽（附录D）",range:[5,5]},{id:"row_hotdq_0a7_0_5",kind:"text",text:"2 伏击龙 (附录D)",range:[6,6]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d6"},{id:"tbl_hotdq_0da_0",name:"接受雇佣",purpose:"reference",rows:[{id:"row_hotdq_0da_0_0",kind:"text",text:"没有人对雇佣这个角色感兴趣，但他或她可以作为旅行者随行。在路上，守卫有时会辞职或死亡，替补有机会找到工作。"},{id:"row_hotdq_0da_0_1",kind:"text",text:"作为基础守卫被雇佣，每十天获得5金币，外加路上的食物和生活费用。"},{id:"row_hotdq_0da_0_2",kind:"text",text:"作为中士被雇佣，每十天8金币，另加路上的伙食和生活费用。"},{id:"row_hotdq_0da_0_3",kind:"text",text:"作为商人的保镖被雇佣，每十天获得10金币，外加路上的食物和生活费用。"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!0,extractorNotes:"骰列区间解析不全，降级 reference 待人工核"}},{id:"tbl_hotdq_0f6_0",name:"贸易之路事件",purpose:"random",rows:[{id:"row_hotdq_0f6_0_0",kind:"text",text:"冒险生活",range:[1,1]},{id:"row_hotdq_0f6_0_1",kind:"text",text:"动物虐待",range:[2,2]},{id:"row_hotdq_0f6_0_2",kind:"text",text:"山岳之敌",range:[3,3]},{id:"row_hotdq_0f6_0_3",kind:"text",text:"走私品",range:[4,4]},{id:"row_hotdq_0f6_0_4",kind:"text",text:"万物皆有价",range:[5,5]},{id:"row_hotdq_0f6_0_5",kind:"text",text:"巨大真菌",range:[6,6]},{id:"row_hotdq_0f6_0_6",kind:"text",text:"金色鹿",range:[7,7]},{id:"row_hotdq_0f6_0_7",kind:"text",text:"报复",range:[8,8]},{id:"row_hotdq_0f6_0_8",kind:"text",text:"客栈无空房",range:[9,9]},{id:"row_hotdq_0f6_0_9",kind:"text",text:"路边的款待",range:[10,10]},{id:"row_hotdq_0f6_0_10",kind:"text",text:"蜘蛛森林",range:[11,11]},{id:"row_hotdq_0f6_0_11",kind:"text",text:"搁浅",range:[12,12]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d12"},{id:"tbl_hotdq_10e_0",name:"深水城以北的遭遇",purpose:"random",rows:[{id:"row_hotdq_10e_0_0",kind:"text",text:"无事发生",range:[1,14]},{id:"row_hotdq_10e_0_1",kind:"text",text:"12名人类匪徒们",range:[15,15]},{id:"row_hotdq_10e_0_2",kind:"text",text:"1 巨魔",range:[16,16]},{id:"row_hotdq_10e_0_3",kind:"text",text:"4个兽人和1个食人魔",range:[17,17]},{id:"row_hotdq_10e_0_4",kind:"text",text:"2 食人魔",range:[18,18]},{id:"row_hotdq_10e_0_5",kind:"text",text:"3个蜥蜴人和3个巨蜥",range:[19,19]},{id:"row_hotdq_10e_0_6",kind:"text",text:"6 蜥蜴人",range:[20,20]},{id:"row_hotdq_10e_0_7",kind:"text",text:"8 巨蛙",range:[21,21]},{id:"row_hotdq_10e_0_8",kind:"text",text:"12 啵灵蛙",range:[22,22]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_hotdq_11e_0",name:"死灵之湖遭遇",purpose:"random",rows:[{id:"row_hotdq_11e_0_0",kind:"text",text:"啵灵蛙（每个角色2或3个）",range:[1,2]},{id:"row_hotdq_11e_0_1",kind:"text",text:"鳄鱼（每个角色2只）",range:[3,3]},{id:"row_hotdq_11e_0_2",kind:"text",text:"巨蛙（每个角色2只）",range:[4,4]},{id:"row_hotdq_11e_0_3",kind:"text",text:"巨蜥（每个角色2只）",range:[5,5]},{id:"row_hotdq_11e_0_4",kind:"text",text:"巨型蜘蛛（每个角色1只）",range:[6,6]},{id:"row_hotdq_11e_0_5",kind:"text",text:"蜥蜴人（每2个角色3名）",range:[7,8]},{id:"row_hotdq_11e_0_6",kind:"text",text:"流沙",range:[9,9]},{id:"row_hotdq_11e_0_7",kind:"text",text:"蔓生怪",range:[10,10]},{id:"row_hotdq_11e_0_8",kind:"text",text:"鬼火 (3)",range:[11,11]},{id:"row_hotdq_11e_0_9",kind:"text",text:"蛇人狩猎队（见下文）",range:[12,12]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d12"},{id:"tbl_rot_086_0",name:"移动冰海遭遇",purpose:"reference",rows:[{id:"row_rot_086_0_0",kind:"text",text:"巨型章鱼"},{id:"row_rot_086_0_1",kind:"text",text:"迈罗人鱼"},{id:"row_rot_086_0_2",kind:"text",text:"白熊"},{id:"row_rot_086_0_3",kind:"text",text:"斯克瑞格*"},{id:"row_rot_086_0_4",kind:"text",text:"冰猎者"},{id:"row_rot_086_0_5",kind:"text",text:"冰猎者在渔船上"},{id:"row_rot_086_0_6",kind:"text",text:"发现奥亚维加顿"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!0,extractorNotes:"骰列区间解析不全，降级 reference 待人工核"}},{id:"tbl_rot_098_0",name:"冰洞遭遇",purpose:"random",rows:[{id:"row_rot_098_0_0",kind:"text",text:"雾",range:[1,2]},{id:"row_rot_098_0_1",kind:"text",text:"狗头人 (3d6)",range:[3,5]},{id:"row_rot_098_0_2",kind:"text",text:"冰蟾蜍 (1d6)",range:[6,8]},{id:"row_rot_098_0_3",kind:"text",text:"绯红的麦卡丝",range:[9,9]},{id:"row_rot_098_0_4",kind:"text",text:"冰巨魔 (1d2)",range:[10,10]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d10"},{id:"tbl_rot_0db_0",name:"蛇丘遭遇",purpose:"random",rows:[{id:"row_rot_0db_0_0",kind:"text",text:"人形生物（1d6）",range:[1,1]},{id:"row_rot_0db_0_1",kind:"text",text:"成群哺乳动物 (5d6)",range:[2,2]},{id:"row_rot_0db_0_2",kind:"text",text:"山丘巨人 (1d2)",range:[3,3]},{id:"row_rot_0db_0_3",kind:"text",text:"无标记的坟墓",range:[4,4]},{id:"row_rot_0db_0_4",kind:"text",text:"圣坛",range:[5,5]},{id:"row_rot_0db_0_5",kind:"text",text:"秃鹫 (3d6)",range:[6,6]},{id:"row_rot_0db_0_6",kind:"text",text:"废墟定居点",range:[7,7]},{id:"row_rot_0db_0_7",kind:"text",text:"蜥蜴人 (2d8)",range:[8,8]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d8"},{id:"tbl_rot_155_0",name:"首次攻击邪教势力",purpose:"reference",rows:[{id:"row_rot_155_0_0",kind:"text",text:"龙爪｜200"},{id:"row_rot_155_0_1",kind:"text",text:"龙翼｜450"},{id:"row_rot_155_0_2",kind:"text",text:"龙牙｜1,100"},{id:"row_rot_155_0_3",kind:"text",text:"半蓝龙角斗士*｜1,800"},{id:"row_rot_155_0_4",kind:"text",text:"青年蓝龙｜5,000"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_rot_15d_0",name:"第二次攻击的教团力量",purpose:"reference",rows:[{id:"row_rot_15d_0_0",kind:"text",text:"龙翼｜450"},{id:"row_rot_15d_0_1",kind:"text",text:"龙魂｜1,800"},{id:"row_rot_15d_0_2",kind:"text",text:"毒虫罗斯魔｜1,800"},{id:"row_rot_15d_0_3",kind:"text",text:"征伐罗斯魔｜5,000"},{id:"row_rot_15d_0_4",kind:"text",text:"成年黑龙｜11,500"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_rot_166_0",name:"第三次攻击的邪教力量",purpose:"reference",rows:[{id:"row_rot_166_0_0",kind:"text",text:"龙翼｜450"},{id:"row_rot_166_0_1",kind:"text",text:"龙牙｜1,100"},{id:"row_rot_166_0_2",kind:"text",text:"半红龙角斗士*｜2,300"},{id:"row_rot_166_0_3",kind:"text",text:"魔法师｜2,300"},{id:"row_rot_166_0_4",kind:"text",text:"半绿龙刺客**｜3,900"},{id:"row_rot_166_0_5",kind:"text",text:"青年红龙｜5,900"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_rot_19c_0",name:"日晷阴影",purpose:"reference",rows:[{id:"row_rot_19c_0_0",kind:"text",text:"1｜A｜A",attrs:{正确的路径:"A"}},{id:"row_rot_19c_0_1",kind:"text",text:"2｜A，C｜B",attrs:{正确的路径:"B"}},{id:"row_rot_19c_0_2",kind:"text",text:"3｜A, D, F｜E",attrs:{正确的路径:"E"}},{id:"row_rot_19c_0_3",kind:"text",text:"4｜B, D, F, H｜日晷",attrs:{正确的路径:"日晷"}},{id:"row_rot_19c_0_4",kind:"text",text:"5｜A-H｜树篱边缘",attrs:{正确的路径:"树篱边缘"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_rot_1ae_0",name:"传送符号",purpose:"reference",rows:[{id:"row_rot_1ae_0_0",kind:"text",text:"椅子｜观众室（区域8）"},{id:"row_rot_1ae_0_1",kind:"text",text:"两把椅子*｜观众室阳台"},{id:"row_rot_1ae_0_2",kind:"text",text:'倒置的"L"｜封闭的房间（区域9）'},{id:"row_rot_1ae_0_3",kind:"text",text:"矩形｜神龛（区域10）"},{id:"row_rot_1ae_0_4",kind:"text",text:"火焰｜休息室（区域11）"},{id:"row_rot_1ae_0_5",kind:"text",text:"星辰｜天文台（区域12）"},{id:"row_rot_1ae_0_6",kind:"text",text:"方形｜卧室（区域13）"},{id:"row_rot_1ae_0_7",kind:"text",text:"沙漏｜地牢传送器（锁定的—区域14）"},{id:"row_rot_1ae_0_8",kind:"text",text:"直角三角形｜树篱迷宫中的日晷区域（区域1；无法从地牢进入）"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_rot_210_0",name:"提亚玛特神庙的钥匙",purpose:"reference",rows:[{id:"row_rot_210_0_0",kind:"text",text:"1｜入口/蓝色小教堂｜红袍巫师会 正在执行仪式",attrs:{仪式期间的占据者和活动:"红袍巫师会 正在执行仪式"}},{id:"row_rot_210_0_1",kind:"text",text:"2｜最小的凹室｜"},{id:"row_rot_210_0_2",kind:"text",text:"3｜白色礼拜堂｜红袍巫师会 正在执行仪式",attrs:{仪式期间的占据者和活动:"红袍巫师会 正在执行仪式"}},{id:"row_rot_210_0_3",kind:"text",text:"4｜绿色小教堂｜红袍巫师会 正在执行仪式",attrs:{仪式期间的占据者和活动:"红袍巫师会 正在执行仪式"}},{id:"row_rot_210_0_4",kind:"text",text:"5｜黑色礼拜堂｜红袍巫师会 正在执行仪式；也是从地下迷宫的出口",attrs:{仪式期间的占据者和活动:"红袍巫师会 正在执行仪式；也是从地下迷宫的出口"}},{id:"row_rot_210_0_5",kind:"text",text:"6｜红色小教堂｜拉斯·莫达 正在执行仪式",attrs:{仪式期间的占据者和活动:"拉斯·莫达 正在执行仪式"}},{id:"row_rot_210_0_6",kind:"text",text:"7｜宏伟的凹室｜提亚马特 从阿弗纳斯出现的传送门",attrs:{仪式期间的占据者和活动:"提亚马特 从阿弗纳斯出现的传送门"}},{id:"row_rot_210_0_7",kind:"text",text:"8｜蓝色尖塔｜红袍巫师会（飞行中）正在执行仪式",attrs:{仪式期间的占据者和活动:"红袍巫师会（飞行中）正在执行仪式"}},{id:"row_rot_210_0_8",kind:"text",text:"9｜白色尖塔｜红袍巫师会（飞行中）正在执行仪式",attrs:{仪式期间的占据者和活动:"红袍巫师会（飞行中）正在执行仪式"}},{id:"row_rot_210_0_9",kind:"text",text:"10｜绿色尖塔｜红袍巫师会（飞行中）正在执行仪式",attrs:{仪式期间的占据者和活动:"红袍巫师会（飞行中）正在执行仪式"}},{id:"row_rot_210_0_10",kind:"text",text:"11｜黑色尖塔｜红袍巫师会（飞行中）正在执行仪式",attrs:{仪式期间的占据者和活动:"红袍巫师会（飞行中）正在执行仪式"}},{id:"row_rot_210_0_11",kind:"text",text:"12｜红色尖塔｜红袍巫师会（飞行中）正在执行仪式",attrs:{仪式期间的占据者和活动:"红袍巫师会（飞行中）正在执行仪式"}},{id:"row_rot_210_0_12",kind:"text",text:"13｜庇护术｜赛维林（悬浮中）佩戴着龙后面具",attrs:{仪式期间的占据者和活动:"赛维林（悬浮中）佩戴着龙后面具"}}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_rot_215_0",name:"最终战斗资源",purpose:"reference",rows:[{id:"row_rot_215_0_0",kind:"text",text:"赛维林｜臂铠教团"},{id:"row_rot_215_0_1",kind:"text",text:"拉斯·莫达｜翠绿闲庭"},{id:"row_rot_215_0_2",kind:"text",text:"邪教领袖*｜散塔林会 刺客"},{id:"row_rot_215_0_3",kind:"text",text:"邪教徒部队｜竖琴手特工"},{id:"row_rot_215_0_4",kind:"text",text:"色彩龙｜金属龙"},{id:"row_rot_215_0_5",kind:"text",text:"魔鬼｜魔鬼"},{id:"row_rot_215_0_6",kind:"text",text:"巨人｜巨人"},{id:"row_rot_215_0_7",kind:"text",text:"邪恶雇佣兵｜领主联盟军队"},{id:"row_rot_215_0_8",kind:"text",text:"提亚马特的神庙｜苍穹城堡**"},{id:"row_rot_215_0_9",kind:"text",text:"红袍巫师｜奥术兄弟会"},{id:"row_rot_215_0_10",kind:"text",text:"龙后面具｜"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}}],u=[],p=[],I=[{id:"agd_tod_cult_counterattacks",title:"龙之邪教追杀议会英雄",ownerRef:"npc_severin",secrecy:"suspectable",activation:"event",steps:[{id:"step_tod_first_strike",after:{anchor:"day"},headline:"教团第一次试探性反击",effects:[],foreshadow:"陌生侦察者、失踪信使与重复出现的五色暗号显示英雄已被教团盯上。"},{id:"step_tod_second_strike",after:{anchor:"day"},headline:"教团派出足以杀死英雄的第二次袭击",effects:[],foreshadow:"幸存袭击者已经把队伍能力回报给上级，下一队会针对既有战术并把无辜者置于火线。"},{id:"step_tod_third_strike",after:{anchor:"day"},headline:"教团以年轻红龙与红袍法师发动全面突击",effects:[],foreshadow:"第二次袭击后仍有教团观察者活动，常规出口与英雄过去使用的撤退路线可能已被监视。"}],cancelCondition:{type:"quest_completed",questId:"qst_main_tod"},_meta:{sourcePages:[140,141,142,143],confidence:"medium",needsReview:!0,extractorNotes:"来源明确三次袭击递增强度，但第一次时点由主持人选择、后续只规定间隔一至两个冒险章节；day 锚点仅产生无状态后果的提示，真实插入位置必须按章节进度人工裁定。"}}],m=[],v={formatVersion:1,manifest:e,locations:n,scenes:t,npcs:o,infos:s,encounters:a,quests:i,events:c,achievements:d,treasures:r,lore:l,hooks:_,clocks:h,tables:f,secrets:u,afflictions:p,agendas:I,migrations:m};export{d as achievements,p as afflictions,I as agendas,h as clocks,v as default,a as encounters,c as events,g as formatVersion,_ as hooks,s as infos,n as locations,l as lore,e as manifest,m as migrations,o as npcs,i as quests,t as scenes,u as secrets,f as tables,r as treasures};

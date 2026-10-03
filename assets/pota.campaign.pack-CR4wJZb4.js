const I=1,e={id:"pota",title:"毁灭亲王",version:"1.0.0",sourceBook:{title:"Princes of the Apocalypse",edition:"2015",totalPages:256},recommendedLevels:[3,15],startingLocationId:"loc_04b",startingSceneId:"scn_04b",chapters:[{id:"047",title:"德萨林谷地",questIds:["qst_main_pota"],completionCondition:{type:"quest_stage",questId:"qst_main_pota",stageId:"stage_pota_delegation",reached:!0},levelBand:[3,3],dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。四座地表前哨、四神殿和元素节点可按玩家线索探索。先知退往何处由既有战况决定，F21 只运行实际对应分支。关闭门户与暂时击败亲王不同。"}]},{id:"100",title:"萨姆伯山丘的秘密",questIds:["qst_main_pota"],completionCondition:{type:"quest_stage",questId:"qst_main_pota",stageId:"stage_pota_temples",reached:!0},levelBand:[3,6],dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。四座地表前哨、四神殿和元素节点可按玩家线索探索。先知退往何处由既有战况决定，F21 只运行实际对应分支。关闭门户与暂时击败亲王不同。"}]},{id:"295",title:"空气、土、火和水",questIds:["qst_main_pota"],completionCondition:{type:"quest_stage",questId:"qst_main_pota",stageId:"stage_pota_fane",reached:!0},levelBand:[6,10],dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。四座地表前哨、四神殿和元素节点可按玩家线索探索。先知退往何处由既有战况决定，F21 只运行实际对应分支。关闭门户与暂时击败亲王不同。"}]},{id:"4b3",title:"长老元素之眼神庙",questIds:["qst_main_pota"],completionCondition:{type:"quest_completed",questId:"qst_main_pota"},levelBand:[10,15],dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。四座地表前哨、四神殿和元素节点可按玩家线索探索。先知退往何处由既有战况决定，F21 只运行实际对应分支。关闭门户与暂时击败亲王不同。"}]},{id:"5f5",title:"警报与远征",questIds:[],completionCondition:{type:"always"},levelBand:[1,11],dmGuidance:[{text:"地点连接决定可达范围，事件由前置事实、玩家行动与世界钟触发。章节/场景数组是内容索引，不是必须依次演出的流程；同一地点内的事件不等于移动。遭遇挂载、未清标记与提醒次数均不是开战原因。战斗后留出交流、调查与收束，目标完成申报须指明 objectiveId 和已发生的 evidence；条件目标与奖励由引擎结算。四座地表前哨、四神殿和元素节点可按玩家线索探索。先知退往何处由既有战况决定，F21 只运行实际对应分支。关闭门户与暂时击败亲王不同。"}]}],styleBible:"从红松镇追查米拉巴代表团，沿线索进入四座闹鬼要塞与提亚-贝希尔的四座元素神殿。神殿可按任意顺序探索；首位先知败亡后，其余三位分别退往长老元素之眼神殿与两个元素节点。最终以风标、水溺、铁牙、焰袭关闭对应传送门；不得把四座要塞、四座神殿或四个节点伪装成固定全清顺序。",endings:[{id:"pota-portals-closed",condition:{type:"quest_completed",questId:"qst_main_pota"},epilogueSceneId:"scn_5f1",dmGuidance:"全部仍开放的元素传送门被对应武器关闭后，节点恢复正常，幸存邪教徒四散。"},{id:"pota-prince-defeated",epilogueSceneId:"scn_5f1",dmGuidance:"原书允许至少击败一位元素亲王后暂时解除危机；若仍有传送门开放，各派系会要求队伍返回关闭它们。"}],_meta:{needsReview:!1,extractorNotes:"manifest 已由逐书 packMeta 复核｜开局点：overrides.json 指定开局（startingLocationId=loc_04b，已排除 external 哨兵）｜packMeta 已完成逐书复核"},outcomeMilestones:[{id:"pota_obj_pota_keeps_0",outcomes:[{id:"pota_obj_pota_keeps_0",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_keeps_0"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"pota_obj_pota_keeps_1",outcomes:[{id:"pota_obj_pota_keeps_1",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_keeps_1"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"pota_obj_pota_keeps_2",outcomes:[{id:"pota_obj_pota_keeps_2",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_keeps_2"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"pota_obj_pota_keeps_3",outcomes:[{id:"pota_obj_pota_keeps_3",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_keeps_3"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"pota_obj_pota_temples_0",outcomes:[{id:"pota_obj_pota_temples_0",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_temples_0"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"pota_obj_pota_temples_1",outcomes:[{id:"pota_obj_pota_temples_1",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_temples_1"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"pota_obj_pota_temples_2",outcomes:[{id:"pota_obj_pota_temples_2",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_temples_2"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"pota_obj_pota_temples_3",outcomes:[{id:"pota_obj_pota_temples_3",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_temples_3"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"pota_fane",outcomes:[{id:"pota_fane",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_confront_fane_prophet"}}],thresholds:[{completedCount:1,levelGain:1}]},{id:"pota_nodes",outcomes:[{id:"obj_pota_node_0",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_node_0"}},{id:"obj_pota_node_1",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_node_1"}},{id:"obj_pota_node_2",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_node_2"}},{id:"obj_pota_node_3",condition:{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_node_3"}}],thresholds:[{completedCount:1,levelGain:1},{completedCount:3,levelGain:1}]}]},n=[{id:"loc_047",name:"德萨林谷地",aliases:["The Dessarin Valley"],chapterId:"047",connections:[{toLocationId:"loc_04b",kind:"road"},{toLocationId:"loc_100",kind:"road"}],sceneIds:["scn_047","scn_048","scn_04a","scn_093","scn_0b4","scn_0ff"],defaultSceneId:"scn_047",_meta:{sourcePages:[18],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_04b",name:"红松镇",aliases:["Red Larch"],chapterId:"047",connections:[{toLocationId:"loc_623",kind:"passage"},{toLocationId:"loc_5f5",kind:"passage"},{toLocationId:"loc_100",kind:"passage"},{toLocationId:"loc_67c",kind:"passage"},{toLocationId:"loc_65d",kind:"passage"},{toLocationId:"loc_4b3",kind:"passage"},{toLocationId:"loc_6e3",kind:"passage"},{toLocationId:"loc_369",kind:"passage"},{toLocationId:"loc_5a8",kind:"passage"},{toLocationId:"loc_6a7",kind:"passage"},{toLocationId:"loc_2a9",kind:"passage"},{toLocationId:"loc_6c7",kind:"passage"},{toLocationId:"loc_047",kind:"road"}],sceneIds:["scn_04b","scn_055","scn_057","scn_05c","scn_060","scn_063","scn_066","scn_068","scn_06b","scn_06e","scn_070","scn_072","scn_075","scn_078","scn_07a","scn_07d","scn_07f","scn_082","scn_085","scn_088","scn_08a","scn_08c","scn_08e"],defaultSceneId:"scn_04b",_meta:{sourcePages:[19],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_100",name:"萨姆伯山丘的秘密",aliases:["Secret of the Sumber Hills"],chapterId:"100",connections:[{toLocationId:"loc_175",kind:"passage"},{toLocationId:"loc_18d",kind:"road"},{toLocationId:"loc_1e8",kind:"road"},{toLocationId:"loc_24b",kind:"road"},{toLocationId:"loc_pota_feathergale_spire",kind:"road"},{toLocationId:"loc_047",kind:"road"},{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_295",kind:"passage"},{toLocationId:"loc_623",kind:"passage"}],sceneIds:["scn_100","scn_101","scn_112","scn_12b"],defaultSceneId:"scn_100",_meta:{sourcePages:[40],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_pota_feathergale_spire",name:"羽风尖塔",aliases:["Feathergale Spire"],chapterId:"100",connections:[{toLocationId:"loc_100",kind:"road"},{toLocationId:"loc_175",kind:"passage"}],sceneIds:["scn_146","scn_148","scn_14d","scn_14e","scn_14f","scn_150","scn_152","scn_154","scn_156","scn_158","scn_15c","scn_161"],defaultSceneId:"scn_146",_meta:{sourcePages:[46,47,48,49],confidence:"high",needsReview:!1,extractorNotes:"来源目录复用 textid=17c 导致地点标题与 V1 引用碰撞；以原书 S1-S11 与骑士任务稳定场景显式恢复尖塔地点。"}},{id:"loc_175",name:"叹息谷",aliases:["Sighing Valley"],chapterId:"100",connections:[{toLocationId:"loc_2a9",kind:"passage"},{toLocationId:"loc_100",kind:"passage"},{toLocationId:"loc_pota_feathergale_spire",kind:"passage"}],sceneIds:["scn_175","scn_17d","scn_17e","scn_180","scn_183","scn_185","scn_187","scn_189","scn_18a"],defaultSceneId:"scn_175",_meta:{sourcePages:[50],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_18d",name:"河园堡垒",aliases:["Rivergard Keep"],chapterId:"100",connections:[{toLocationId:"loc_301",kind:"passage"},{toLocationId:"loc_100",kind:"road"},{toLocationId:"loc_295",kind:"passage"}],sceneIds:["scn_18d","scn_19f","scn_1a3","scn_1a7","scn_1aa","scn_1af","scn_1b1","scn_1b3","scn_1b5","scn_1b8","scn_1bd","scn_1bf","scn_1c2","scn_1c7","scn_1c9","scn_1cb","scn_1cd","scn_1d4","scn_1d6","scn_1d9","scn_1de","scn_1e0","scn_1e5"],defaultSceneId:"scn_18d",_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_1e8",name:"圣石修道院",aliases:["Sacred Stone Monastery"],chapterId:"100",connections:[{toLocationId:"loc_369",kind:"passage"},{toLocationId:"loc_100",kind:"road"}],sceneIds:["scn_1e8","scn_1f9","scn_1fc","scn_200","scn_202","scn_205","scn_207","scn_209","scn_20b","scn_20d","scn_213","scn_218","scn_21a","scn_21f","scn_223","scn_225","scn_227","scn_22b","scn_22f","scn_233","scn_237","scn_23c","scn_242","scn_246","scn_248"],defaultSceneId:"scn_1e8",_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_24b",name:"赤月大厅",aliases:["Scarlet Moon Hall"],chapterId:"100",connections:[{toLocationId:"loc_3ca",kind:"passage"},{toLocationId:"loc_100",kind:"road"}],sceneIds:["scn_24b","scn_276","scn_27a","scn_27c","scn_27e","scn_27f","scn_283","scn_287","scn_28c","scn_28f"],defaultSceneId:"scn_24b",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_295",name:"空气、土、火和水",aliases:["Air, Earth, Fire, and Water"],chapterId:"295",connections:[{toLocationId:"loc_100",kind:"passage"},{toLocationId:"loc_18d",kind:"passage"},{toLocationId:"loc_2a9",kind:"passage"},{toLocationId:"loc_301",kind:"passage"},{toLocationId:"loc_369",kind:"passage"},{toLocationId:"loc_3ca",kind:"passage"},{toLocationId:"loc_463",kind:"passage"},{toLocationId:"loc_4b3",kind:"road"}],sceneIds:["scn_295","scn_296","scn_2a0"],defaultSceneId:"scn_295",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_2a9",name:"嚎叫仇恨之庙",aliases:["Temple of Howling Hatred"],chapterId:"295",connections:[{toLocationId:"loc_3ca",kind:"passage"},{toLocationId:"loc_301",kind:"passage"},{toLocationId:"loc_4bc",kind:"passage"},{toLocationId:"loc_463",kind:"passage"},{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_175",kind:"passage"},{toLocationId:"loc_295",kind:"passage"}],sceneIds:["scn_2a9","scn_2b3","scn_2b5","scn_2b9","scn_2bd","scn_2c2","scn_2c5","scn_2c7","scn_2cc","scn_2cf","scn_2d3","scn_2d5","scn_2d9","scn_2de","scn_2e4","scn_2e9","scn_2ec","scn_2ee","scn_2f1","scn_2f7","scn_2fe"],defaultSceneId:"scn_2a9",_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_301",name:"破碎波涛之庙",aliases:["Temple of the Crushing Wave"],chapterId:"295",connections:[{toLocationId:"loc_369",kind:"passage"},{toLocationId:"loc_463",kind:"passage"},{toLocationId:"loc_18d",kind:"passage"},{toLocationId:"loc_295",kind:"passage"},{toLocationId:"loc_2a9",kind:"passage"}],sceneIds:["scn_301","scn_30e","scn_315","scn_319","scn_31b","scn_31d","scn_31f","scn_321","scn_323","scn_325","scn_32a","scn_32f","scn_331","scn_333","scn_335","scn_33a","scn_33c","scn_33e","scn_344","scn_348","scn_34a","scn_34e","scn_351","scn_356","scn_358","scn_35c","scn_361","scn_364","scn_366"],defaultSceneId:"scn_301",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_369",name:"黑土神殿",aliases:["Temple of Black Earth"],chapterId:"295",connections:[{toLocationId:"loc_3ca",kind:"passage"},{toLocationId:"loc_463",kind:"passage"},{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_1e8",kind:"passage"},{toLocationId:"loc_295",kind:"passage"},{toLocationId:"loc_301",kind:"passage"}],sceneIds:["scn_369","scn_373","scn_377","scn_37a","scn_37f","scn_384","scn_386","scn_389","scn_38c","scn_392","scn_396","scn_398","scn_399","scn_39d","scn_39f","scn_3a5","scn_3aa","scn_3af","scn_3b2","scn_3b4","scn_3b6","scn_3ba","scn_3c0","scn_3c3","scn_3c5"],defaultSceneId:"scn_369",_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_3ca",name:"永恒火焰的神殿",aliases:["Temple of Eternal Flame"],chapterId:"295",connections:[{toLocationId:"loc_5a8",kind:"passage"},{toLocationId:"loc_463",kind:"passage"},{toLocationId:"loc_24b",kind:"passage"},{toLocationId:"loc_295",kind:"passage"},{toLocationId:"loc_2a9",kind:"passage"},{toLocationId:"loc_369",kind:"passage"}],sceneIds:["scn_3ca","scn_3d3","scn_3d9","scn_3dd","scn_3e2","scn_3e6","scn_3ec","scn_3f2","scn_3f6","scn_3f9","scn_3fc","scn_402","scn_408","scn_40d","scn_410","scn_412","scn_415","scn_417","scn_419","scn_41b","scn_41f","scn_423","scn_427","scn_42c","scn_430","scn_435","scn_43b","scn_43e","scn_442","scn_447"],defaultSceneId:"scn_3ca",_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_463",name:"费恩之眼",aliases:["Fane of the Eye"],chapterId:"4b3",connections:[{toLocationId:"loc_4bc",kind:"passage"},{toLocationId:"loc_4ff",kind:"passage"},{toLocationId:"loc_55d",kind:"passage"},{toLocationId:"loc_5a8",kind:"passage"},{toLocationId:"loc_295",kind:"passage"},{toLocationId:"loc_2a9",kind:"passage"},{toLocationId:"loc_301",kind:"passage"},{toLocationId:"loc_369",kind:"passage"},{toLocationId:"loc_3ca",kind:"passage"},{toLocationId:"loc_4b3",kind:"road"}],sceneIds:["scn_463","scn_470","scn_472","scn_477","scn_47c","scn_480","scn_486","scn_488","scn_48e","scn_490","scn_493","scn_498","scn_4a1","scn_4a5","scn_4ae","scn_4b0","scn_4b3","scn_46b","scn_46e","scn_48c","scn_49f","scn_4a9"],defaultSceneId:"scn_463",_meta:{sourcePages:[115,122],confidence:"high",needsReview:!1,extractorNotes:"费恩之眼 F1-F21 的房间清单与章节重号 F21 归属已逐项复核。；overlay覆写:sceneIds/defaultSceneId/_meta"}},{id:"loc_4b3",name:"元素之怒与深入神殿",aliases:["Temple of the Elder Elemental Eye"],chapterId:"4b3",connections:[{toLocationId:"loc_463",kind:"road"},{toLocationId:"loc_4bc",kind:"road"},{toLocationId:"loc_4ff",kind:"road"},{toLocationId:"loc_55d",kind:"road"},{toLocationId:"loc_5a8",kind:"road"},{toLocationId:"loc_5f5",kind:"road"},{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_295",kind:"road"}],sceneIds:["scn_44d","scn_461","scn_462"],defaultSceneId:"scn_44d",_meta:{sourcePages:[112,115],confidence:"high",needsReview:!1,extractorNotes:"章根 textid 与 F21 重号；此地点只承载第四章末的全局事件、先知撤退与代表团去向。；overlay覆写:name/aliases/sceneIds/defaultSceneId/_meta"}},{id:"loc_4bc",name:"嚎叫洞穴",aliases:["The Howling Caves"],chapterId:"4b3",connections:[{toLocationId:"loc_2a9",kind:"passage"},{toLocationId:"loc_463",kind:"passage"},{toLocationId:"loc_4b3",kind:"road"}],sceneIds:["scn_4bc","scn_4c3","scn_4c5","scn_4ca","scn_4cc","scn_4d2","scn_4d4","scn_4d7","scn_4dc","scn_4e1","scn_4e3","scn_4e5","scn_4e8","scn_4ec","scn_4ee","scn_4f0","scn_4f2","scn_4f7","scn_4f9"],defaultSceneId:"scn_4bc",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_4ff",name:"狂泻瀑布",aliases:["The Plunging Torrents"],chapterId:"4b3",connections:[{toLocationId:"loc_463",kind:"passage"},{toLocationId:"loc_4b3",kind:"road"}],sceneIds:["scn_4ff","scn_50d","scn_512","scn_514","scn_51a","scn_51e","scn_525","scn_52a","scn_52c","scn_52f","scn_531","scn_533","scn_537","scn_53e","scn_540","scn_545","scn_54a","scn_54c","scn_54e","scn_554"],defaultSceneId:"scn_4ff",_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_55d",name:"黑色晶洞",aliases:["The Black Geode"],chapterId:"4b3",connections:[{toLocationId:"loc_6a7",kind:"passage"},{toLocationId:"loc_463",kind:"passage"},{toLocationId:"loc_4b3",kind:"road"}],sceneIds:["scn_55d","scn_56a","scn_56c","scn_571","scn_574","scn_579","scn_57b","scn_580","scn_582","scn_588","scn_58c","scn_591","scn_594","scn_596","scn_598","scn_59b","scn_5a1","scn_5a3"],defaultSceneId:"scn_55d",_meta:{sourcePages:[135],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_5a8",name:"哭泣的巨人",aliases:["The Weeping Colossus"],chapterId:"4b3",connections:[{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_3ca",kind:"passage"},{toLocationId:"loc_463",kind:"passage"},{toLocationId:"loc_4b3",kind:"road"}],sceneIds:["scn_5a8","scn_5b9","scn_5bf","scn_5c4","scn_5ca","scn_5cc","scn_5d4","scn_5d9","scn_5de","scn_5e1","scn_5e4","scn_5e7","scn_5ec","scn_5f1"],defaultSceneId:"scn_5a8",_meta:{sourcePages:[141],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_5f5",name:"警报与远征",aliases:["Alarums and Excursions"],chapterId:"5f5",connections:[{toLocationId:"loc_60e",kind:"road"},{toLocationId:"loc_623",kind:"road"},{toLocationId:"loc_65d",kind:"road"},{toLocationId:"loc_668",kind:"road"},{toLocationId:"loc_67c",kind:"road"},{toLocationId:"loc_683",kind:"road"},{toLocationId:"loc_6a7",kind:"road"},{toLocationId:"loc_6c7",kind:"road"},{toLocationId:"loc_6d8",kind:"road"},{toLocationId:"loc_6e3",kind:"road"},{toLocationId:"loc_6f3",kind:"road"},{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_4b3",kind:"road"}],sceneIds:["scn_5f5","scn_5f6","scn_5f9","scn_651"],defaultSceneId:"scn_5f5",_meta:{sourcePages:[148],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_60e",name:"死灵法师的洞穴",aliases:["Necromancer's Cave"],chapterId:"5f5",connections:[{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_60e","scn_60f","scn_612","scn_614","scn_616","scn_61b","scn_620"],defaultSceneId:"scn_60e",_meta:{sourcePages:[151],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_623",name:"移动石墓",aliases:["Tomb of Moving Stones"],chapterId:"5f5",connections:[{toLocationId:"loc_100",kind:"passage"},{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_623","scn_627","scn_62b","scn_62d","scn_633","scn_639","scn_63b","scn_63d","scn_642","scn_647"],defaultSceneId:"scn_623",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_65d",name:"新管理",aliases:["New Management"],chapterId:"5f5",connections:[{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_65d"],defaultSceneId:"scn_65d",_meta:{sourcePages:[160],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_668",name:"冰盾兽人",aliases:["Iceshield Orcs"],chapterId:"5f5",connections:[{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_668"],defaultSceneId:"scn_668",_meta:{sourcePages:[163],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_67c",name:"漫长的道路",aliases:["The Long Road"],chapterId:"5f5",connections:[{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_67c"],defaultSceneId:"scn_67c",_meta:{sourcePages:[166],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_683",name:"火焰女巫的诅咒",aliases:["Curse of the Fire Witch"],chapterId:"5f5",connections:[{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_683"],defaultSceneId:"scn_683",_meta:{sourcePages:[167],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_6a7",name:"舞水谷",aliases:["Vale of Dancing Waters"],chapterId:"5f5",connections:[{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_55d",kind:"passage"},{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_6a7","scn_6aa","scn_6ab","scn_6ad","scn_6b3","scn_6b9","scn_6bc","scn_6bf"],defaultSceneId:"scn_6a7",_meta:{sourcePages:[172],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_6c7",name:"雅塔尔的黑暗交易",aliases:["Dark Dealings in Yartar"],chapterId:"5f5",connections:[{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_6c7"],defaultSceneId:"scn_6c7",_meta:{sourcePages:[175],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_6d8",name:"伦德雷特庄园",aliases:["Rundreth Manor"],chapterId:"5f5",connections:[{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_6d8"],defaultSceneId:"scn_6d8",_meta:{sourcePages:[179],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_6e3",name:"狩猎斧大厅",aliases:["Halls of the Hunting Axe"],chapterId:"5f5",connections:[{toLocationId:"loc_04b",kind:"passage"},{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_6e3"],defaultSceneId:"scn_6e3",_meta:{sourcePages:[180],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}},{id:"loc_6f3",name:"废墟",aliases:["The Ruins"],chapterId:"5f5",connections:[{toLocationId:"loc_5f5",kind:"road"}],sceneIds:["scn_6f3","scn_6f4","scn_6f6","scn_6f8","scn_6fa","scn_6fd","scn_6ff","scn_701","scn_703","scn_705","scn_708","scn_712"],defaultSceneId:"scn_6f3",_meta:{sourcePages:[183],confidence:"high",needsReview:!1,extractorNotes:"地点名称、章节归属、房间清单及显式连接已对照来源与战役任务结构复核；配置列入逐地点来源复核清单"}}],t=[{id:"scn_047",locationId:"loc_047",name:"德萨林谷地",activation:{condition:{type:"always"},priority:0},skeleton:["邪恶元素在费伦的崛起始于德萨林谷，这是一个轻描淡写的商队城镇、孤立的农舍和无人居住的荒野地区，距离深水城只有一周的旅程。","数百年来，这里没有发生过任何值得注意的事情。","边疆早已向北退去，留下了一个安静的后水区，到处都是废墟。","如今，德萨林谷与野蛮边疆的普遍概念几乎没有共同之处。","这里的冬天很严酷，但兽人和其他饥饿怪物的大军离这些地方还很远。"],flesh:`邪恶元素在费伦的崛起始于德萨林谷，这是一个轻描淡写的商队城镇、孤立的农舍和无人居住的荒野地区，距离深水城只有一周的旅程。数百年来，这里没有发生过任何值得注意的事情。边疆早已向北退去，留下了一个安静的后水区，到处都是废墟。如今，德萨林谷与野蛮边疆的普遍概念几乎没有共同之处。这里的冬天很严酷，但兽人和其他饥饿怪物的大军离这些地方还很远。

如果Dessarin Valley不像过去那样荒凉和无法无天，它仍然是一个人口稀少的地区，作为通往遥远土地的路线。像Red Larch或Triboar这样的地方的居民夸耀他们的简陋定居点是"北方的门户"。每年有数百个商队和船只通过这些土地，连接深水城和无冬城等大港口与Everlund、Mirabar或Silverymoon等地。稳定的商队交通给这个地区的城镇带来生机，支持Long Road沿线定居点的商业。旅馆迎合了那些急于在坚固的墙壁内安全睡觉并享受温暖的火旁的美食而不是在路边露营的旅行者。

除了迎合前往或来自远北的商队和旅行者，德斯林河谷还是深水城和无冬城人群的粮仓。该地区的农场和牧场生产谷物、牲畜、家禽、苹果和啤酒花，然后将它们顺流而下（或沿着长路）运到海岸。很少有人通过农业致富，但只要天气合作，该地区的农民就能过上好日子。（这也是最近不寻常天气引起关切的原因之一。）`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_pota_elemental_weapons"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[18],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/PotA/013-poa02-01.webp"},offerableQuestIds:["qst_main_pota"]},{id:"scn_048",locationId:"loc_047",name:"历史",activation:{condition:{type:"always"},priority:0},skeleton:["大多数生活在德斯拉林谷的人并不知道它悠久的历史。","当地酒吧里坐在壁炉旁点头称是的老居民有时会说，'这些土地，它们有古老的骨骼。","'大多数当地人并不知道他们说得有多对。","虽然这个地区一些真正古老的遗迹可以追溯到第一个伟大的精灵王国时期，但这些并不属于这次冒险的故事。","确实与这个故事有关的最早王国是盾矮人的贝西尔默王国，它在大约六千年前，即公元前4420年德兰历成立了。"],flesh:`大多数生活在德斯拉林谷的人并不知道它悠久的历史。当地酒吧里坐在壁炉旁点头称是的老居民有时会说，'这些土地，它们有古老的骨骼。'大多数当地人并不知道他们说得有多对。

虽然这个地区一些真正古老的遗迹可以追溯到第一个伟大的精灵王国时期，但这些并不属于这次冒险的故事。确实与这个故事有关的最早王国是盾矮人的贝西尔默王国，它在大约六千年前，即公元前4420年德兰历成立了。它的存在如此久远，以至于只有少数非矮人学者听说过它。德斯拉林谷的大多数人根本不知道贝西尔默，但他们熟悉它的两项工程：被称为石桥的工程奇迹（将在本章后面描述）和被称为狩猎斧大厅的破败废墟。

贝西尔默的领域是罕见的：一个建在地面上的矮人王国，其力量以田野和牧场来衡量。它一度繁荣，但后来被巨魔和巨人所困扰。矮人被迫在地下建造一个要塞，在贝西尔默建立一个世纪后，雕刻出了堡垒城市泰亚-贝西尔默。不幸的是，矮人王国在国王和创始人在战斗中死亡后崩溃了。大多数幸存的矮人寻找了更安全的土地。位于苏姆伯丘陵下的矮人城市在-4160 DR年被遗弃，然后被遗忘。

Tyar-Besil在黑暗中沉睡了许多世纪，偶尔被怪物或有野心的矿工发现并占据，然后又被遗弃。直到893 DR年，一群自称为银角骑士的冒险家发现了这些废墟，它才再次被世人所知。在接下来的六年里，他们一次又一次地返回，最终建立了自己的要塞，以保护通往这个庞大地下城的隐藏入口。

骑士们在清理野性的Sumber Hills中的小领地方面取得了一些成功，但仅仅几年后，附近的强大的兽人王国Uruth Ukrypt崛起，Dessarin Valley变成了战场。麻烦接踵而至：Orcfastings战争，第一次和第二次巨魔战争，最后是一系列恶毒的黑暗精灵袭击。到了942 DR年，Dessarin Valley的人类定居点几乎被全部摧毁，银角骑士团也不复存在。他们的要塞变成了废墟，并在后来的年代被称为闹鬼的城堡。最终，没有人记得是谁建造了它们，以及为什么。

德斯林河谷及其周边地区目前的定居浪潮始于1000 DR年之后，与深水城从一个军阀的要塞成长为一个主要城市的时间相吻合。最初一些小型前哨站逐渐发展成为红松镇和特里博尔这样的地方，它们是从一片野性和未开垦的土地上开拓出来的。重新定居德斯林河谷的人们发现，这个地区到处散落着"古代王国"的遗迹。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[19],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`【国度的历法】被遗忘的国度的人们使用戴尔瑞克纪年法来计算年份，简称为'DR'。年份也有名称，这些名称来源于很久以前一位伟大预言者的著作。这次冒险设定在1491 DR年，即赤巫年。
每个月由三个十天长的星期组成，称为旬。人们称呼旬的方式就像其他世界的人们称呼周一样。`},{id:"scn_04a",locationId:"loc_047",name:"当前事件",activation:{condition:{type:"always"},priority:0},skeleton:["在Dessarin Valley，小问题并不罕见。","来自剑山或Evermoors的野蛮人形生物偶尔在这里袭击。","被称为Uthgardt的人类野蛮人在这些土地上游荡，更激进的部落可能非常危险。","匪徒有时会聚集在山谷更偏僻的地方伏击沿着Long Road或Kheldell Path旅行的商队。","时不时地，鲁莽或不幸的冒险者在该地区周围散布的废墟中激起一些古老的诅咒。"],flesh:`在Dessarin Valley，小问题并不罕见。来自剑山或Evermoors的野蛮人形生物偶尔在这里袭击。被称为Uthgardt的人类野蛮人在这些土地上游荡，更激进的部落可能非常危险。匪徒有时会聚集在山谷更偏僻的地方伏击沿着Long Road或Kheldell Path旅行的商队。时不时地，鲁莽或不幸的冒险者在该地区周围散布的废墟中激起一些古老的诅咒。山谷定居点的警官通常能够胜任恢复和平的任务。

六个月前，一个阴险的新威胁在该地区开始增长，当地人或任何路过的冒险家都没有察觉。梦境和幻象将四位元素先知一个接一个地吸引到了苏姆伯山下的眼球祭坛。每位先知开始召集志同道合的追随者。陌生人开始三三两两地进入德斯拉林谷。一些人已经是邪恶元素的邪教徒，渴望建立一个可以公开进行他们邪恶仪式的地方。其他人是残忍的暴徒，渴望权力的禁魔法术爱好者，或是被邪恶召唤的狂热分子。起初，邪教徒将秘密性视为最重要的事情，但随着他们的人数增加并建立他们的据点，他们开始将注意力转向扩大对德斯拉林谷的控制。

如此多的恶人存在导致了一连串的土匪活动、绑架、谋杀和袭击。邪教徒还扰乱了该地区的天气。在冒险过程中，所有这些事件持续恶化，直到角色找到并清除了位于邪恶元素神庙中的四个元素邪教。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[19],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},offerableQuestIds:["qst_main_pota"]},{id:"scn_04b",locationId:"loc_04b",name:"红松镇",activation:{condition:{type:"always"},priority:0},skeleton:["红松镇在过去两个世纪里一直是长路上的一个重要停靠点。","它得名于一片独特的红松树林，这些树木在建立这个小村庄时被砍伐了。","红松镇之所以能成为一个定居点，多亏了一个可以饮用的泉水，它滋养了一个足够大的池塘，非常适合给马、牛和驮骡饮水。","一条东西向的小径在池塘处与Long Road相遇，向西通往Kheldell的伐木社区，向东通往Bargewright Inn，最终到达Secomber。","另一条小径通向Sumber Hills的采石场，以及很久以前留给怪物和亡命之徒的石制城堡废墟（闹鬼的城堡）。"],flesh:`红松镇在过去两个世纪里一直是长路上的一个重要停靠点。它得名于一片独特的红松树林，这些树木在建立这个小村庄时被砍伐了。红松镇之所以能成为一个定居点，多亏了一个可以饮用的泉水，它滋养了一个足够大的池塘，非常适合给马、牛和驮骡饮水。

一条东西向的小径在池塘处与Long Road相遇，向西通往Kheldell的伐木社区，向东通往Bargewright Inn，最终到达Secomber。另一条小径通向Sumber Hills的采石场，以及很久以前留给怪物和亡命之徒的石制城堡废墟（闹鬼的城堡）。

近年来，在城镇的西北边缘新开了一些采石场。到目前为止，这些采石场产出了大量在深水城非常珍贵的大理石板，用于覆盖大型新建筑和修复旧建筑。红松树也是石匠在苏姆伯丘陵边缘采石板的中心。

尽管红松镇依然繁荣，但不祥的征兆正在出现。苏姆伯山的中心变得更加危险，似乎到处都是潜伏的怪物（如今没有人去山里摘浆果或猎兔，尽管红松镇的孩子们传统上在夏天和秋天每天都这么做）。土匪活动日益猖獗，天气似乎变得更加严酷和不可预测。几位红松镇的牧羊人看到奇怪的人物在城东的荒野田野里，从远处的山坡上注视着他们，那里是他们传统上放牧羊群的地方。采石工人过去在订单积压时会点着火把工作，但现在不再这样做，夜间避开采石场。他们被有关穿着黑袍、戴着石面具的神秘人物潜伏在火把光芒之外的黑暗中的谣言所吓倒。镇上的居民担心危险的时刻即将到来，但似乎没有人知道如何应对。

红松镇的居民对最近所谓的'黑暗行径'感到如此害怕，以至于他们没有表现出典型的边疆缄默，而是乐于喋喋不休地谈论他们所看到和听到的一切。大多数人希望说服冒险家去调查并结束当前的麻烦。

重要的红松镇居民包括以下NPC：

埃尔德拉斯·坦图尔是当地的铁匠（位于区域9）。他在镇上是个意见领袖。

恩德里斯·瓦利沃是一位商人，在他的商店（区域22）出售各式商品。他是竖琴手同盟的联络人。

海莉亚·汉德罗姆是这家澡堂（区域15）的主人。她是翡翠议会的联系人。

赫尔维尔和梅格拉·塔恩拉是服装商（区域7）。两人都是领主联盟的联系人。

哈伯克·图斯玛利尔是红崖镇的治安官，一位严厉而正直的卫队指挥官兼法官。他生活并工作在区域11。

伊姆达尔·瑞尔万德是全能神殿（区域1）中坦帕斯的一位牧师。他是铁手套骑士团的一名联络人。

凯莱莎·伊克尔是"摇摆之剑"旅店的经营者（区域2）。她从红弓手同伴那里听到许多消息并分享出来。

曼戈巴尔·洛伦是镇上的面包师（区域8）。他是散塔林会的联络人。

玛兰德罗·盖尔库尔是个名声不佳的本地理发师（兼造假者），经营着一家实用的二手商店（区域17），红弓手们常在此聚集闲聊。

红松镇的十几个长老有一个秘密：他们属于一个自称为"信徒"的秘社。它不完全是一个邪教，尽管它有代代相传的特殊仪式和礼仪。它也不完全是一个公民组织，尽管红松镇一些最富有和最有权力的人是成员。信徒的成员利用他们的秘密协会来指导城镇事务，策划对抗商业竞争对手，有时在清楚"必须做些什么"以利于城镇时，照顾那些制造问题的人。

信徒组织多年前成立，当时当地的矿工在城镇下方发现了一个秘密地下密室。密室里发生了一些奇怪的事情，比如没有人在场时沉重的石头会漂浮并移动。矿工们开始使用这个密室来纪念在采石场事故中丧生的人，并安抚不幸和事故女神贝沙巴。信徒们每九天秘密地在墓穴聚集一次，看看是否有石头移动——如果有，他们就会在第二天晚上秘密会面，讨论这些移动意味着什么，以及应该采取什么行动。他们保守着墓穴及其奇怪的秘密。

信徒们对邪恶元素一无所知。然而，黑土教发现了他们的秘密并产生了兴趣。一个名叫拉拉克的黑土祭司来到红松镇，引导这个群体去崇拜元素之土。教徒们打算通过信徒来接管红松镇，但苏姆伯山下有其他更重要的任务让他们忙碌着。时机尚未成熟。

红松镇是本书中两个不同冒险叙事的起点。红松镇NPC提供的线索和谣言取决于您当前运行的冒险阶段。如果您希望从3级开始冒险者，并立即深入邪恶元素的情节，请从"邪恶的谣言"线索开始。如果您希望从1级开始冒险者，请从"红松镇的麻烦"的谣言开始。

在镇上打听情况或询问以下NPC可以指向以下信息：

亡命之徒潜伏在凯恩小路上，但警长哈尔伯克（区域11）尚未发现任何线索。

敏萨拉·曼迪维尔的孙女佩尔（区域13）在离镇不远的古墓旁见到了一个幽灵。

塔尔拉尔的小孩（区域7）正在讲述关于兰斯岩瘟疫的离奇故事。

凯莱莎·伊尔凯尔，摆剑旅馆（区域2）的主人，认为镇上的麻烦可能有共同的源头。

梅利科石业（区域18）的采石工人称，夜晚工作时会有戴着石质面具的神秘人物监视他们。工人们现在天黑后拒绝留在采石场。

瓦埃尔弗马车工坊的工人 (区域16) 一直在谈论工坊周围的可疑活动。多数夜晚都能在正午头盔酒馆 (区域3) 找到他们喝酒的身影。

与这些谣言相关的NPC交谈为角色提供了几个在红松镇的冒险机会。这些冒险在第6章中介绍。"进入荒野"描述了几个位于城镇附近的遭遇。"兰斯岩"描述了一个位于城外几英里处的显著地标附近的冒险地点；一个自称为"领主"的疯狂死灵法师住在那里。最后，"移动石墓"展示了一个位于红松镇部分地区下方的类似地牢的矿井室。这是信徒们保守的秘密，尽管它也引起了黑土教的注意。

如果冒险家们自己找到了移动石墓，就允许他们在找到时探索这个地点。如果冒险家们没有找到墓穴或者先探索了附近的其他地点，墓穴的秘密将通过镇上出现的一个大天坑来揭示。天坑在角色们从Lance Rock或其他探险返回红松镇后不久就打开了；有关更多详情，请参阅第六章的冒险。

红松树中元素邪教的间谍（贾斯特兰·戴尔，吉莉达和伊劳恩·特尔德）并非强大的战士，也不愿与冒险者战斗。他们通过递纸条或安排与通过城镇的邪教信使进行简短对话来传递信息。这些信使大多是来自当地邪教掠夺者帮派的人类土匪，穿着没有标记的服装。

如果被质问，邪教间谍否认与任何不法行为有关，并试图通过虚张声势摆脱麻烦。

一个当场被抓的间谍哭泣着乞求怜悯。有些人可能会声称自己受到了咒语的影响，希望获得同情。被抓的间谍只透露对他们自己保命所必需的信息。

红松镇充满了关于来自米拉巴失踪代表团的谣言。这是一个大型且装备精良的团队，它似乎遭遇了不幸，这非常具有新闻价值。

暂住在摇摆之剑（区域2）的晨曦之主牧师埃顿兄弟说，米拉巴人已经穿过了贝利亚德。

烈日之盔（区域3）的一位商队护卫称米拉巴兰人穿过了贝利亚德。

恩德里斯·瓦里沃（区域22）最近得到了一本精美的矮人语书籍，一直在向人炫耀。这本书看起来古老且重要。

牧羊人拉蒙·绿靴声称，他在桑伯山丘发现了奇怪的新坟墓。他经常在盖尔库尔的商店（区域17）附近闲逛。

要弄清楚这些NPC是如何得知他们所知的信息的，冒险家们必须询问关键角色。这些对话应该暗示几种开始寻找来自米拉巴代表团的方法。当冒险家们决定要跟踪哪个线索时，继续进行第3章中"初步调查"的遭遇。

以下是镇上重要地点的简要描述。地图上没有编号和描述的建筑物是房屋、棚屋或附属建筑。它们属于耕种靠近城镇的农民、在附近牧场放牧的牧羊人，以及被较大企业雇佣的工人或仆人。

城镇中的许多地点提供了关于"红松树的麻烦"（针对1级角色）或"邪恶的谣言"（针对准备调查邪恶元素邪教的角色）故事情节的信息。请忽略与您当前运行的冒险部分无关的线索和提示。您可以假设，只要冒险者询问有关来自米拉巴的失踪代表团的问题，信徒们决定保持低调；或者如果冒险者从当地麻烦开始，代表团尚未到达该地区。

如果您进行第6章中的"移动石墓"冒险，揭露信徒将导致一些重大变化。即使信徒们能够避免谋杀调查，红松镇的居民也会对许多最受尊敬的同胞是秘密集团的一部分而感到震惊。这一发现引发了一场关于流言蜚语、含沙射影和相互指责的风暴。

接下来的几个月里，红松镇的其他居民避开信徒，信徒们也互相对立。许多人退隐。红松镇的领导权传给了哈伯克，但他作为警长太忙了。一个月后，贾莱萨·奥恩拉成为了红松镇的市长。她受到喜爱，以常识著称，所以镇上的居民团结在她周围。

镇上的居民们齐心协力覆盖陷坑，加固墙壁和天花板以防止未来的塌陷。`,spotlightRefs:[],presentNpcIds:["npc_maegla_tarnlar","npc_darathra_shendrel"],availableInfoIds:["info_pota_missing_delegation"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[19],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`【碎蛋糕】对于深水城的普通市民来说，红松镇以其特产碎饼而闻名。这种备受诟病但营养丰富的食物在旅途中很有用：烤制的火鸡和野禽碎片、坚果以及切碎的根菜和绿叶，混合在鹰嘴豆泥中。它在最好的时候味道也很平淡，但做得不好的碎饼味道很糟糕。
当队伍完成"红松镇的麻烦"冒险后，他们达到3级，他们准备好继续进行"邪恶的谣言"线索和事件。
当角色们到达红松镇时，与任何NPC进行几分钟的对话就会揭示镇民对奇怪事件的担忧。
当角色们筛选无稽之谈和小道消息以找到可信的线索时，他们发现了以下可能性：
当角色们离开调查其他线索后返回红标镇时，他们听说马车匠托斯克·塞隆（区域5）最近接待了一些奇怪的新顾客。`,offerableQuestIds:["qst_main_pota"]},{id:"scn_055",locationId:"loc_04b",name:"1. 万信神殿",activation:{condition:{type:"always"},priority:0},skeleton:["在Long Road的西侧，就在旅店马厩的南边，矗立着一座看起来宏伟的石头宅邸。","两扇宽阔的木门上绘有众多神祇的象征，日夜敞开。","内部是一个简朴的礼拜堂，设有一个石制祭坛。","全信仰神祠是一个多信仰使用的路边神祠，没有特定的所有者。","来自深水城的牧师们成对地来到这里，进行为期一个月的停留。"],flesh:`在Long Road的西侧，就在旅店马厩的南边，矗立着一座看起来宏伟的石头宅邸。两扇宽阔的木门上绘有众多神祇的象征，日夜敞开。内部是一个简朴的礼拜堂，设有一个石制祭坛。

全信仰神祠是一个多信仰使用的路边神祠，没有特定的所有者。来自深水城的牧师们成对地来到这里，进行为期一个月的停留。每一对牧师包括由深水城神庙安排的两种不同信仰的牧师。最常见的组合是苏妮和塞勒内、提莫拉和拉坦德尔，以及坦普斯和奥格玛。访问的牧师们居住在神殿后面的两个简单的石室中。他们带来自己的法衣和圣物，并在职责结束时带走它们。

目前，伊姆达尔·雷尔万德（男性达马兰人类祭司），战争之神坦帕斯的追随者，以及莱姆拉·奥达尔克（女性特提里安人类侍僧），太阳女神苏涅的信徒，正在神祠服务。伊姆达尔是一个严肃的人，对新闻、谣言和访客都极为感兴趣。他也是护手会的盟友，偶尔会传递消息，并向该会报告当地事件。莱姆拉是一个富有同情心的倾听者和向导，她来到神祠已有数十年，主持了许多对夫妇的婚礼，在红松镇广受爱戴和信任。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_057",locationId:"loc_04b",name:"摇摆之剑",activation:{condition:{type:"always"},priority:0},skeleton:["在全信仰神殿北边的一扇门处，矗立着摇摆剑旅馆。","这家旅馆是一座三层的石结构建筑，顶部是陡峭的石板屋顶，上面布满了众多烟囱。","一块招牌悬挂在门上方，由链条固定。","这是一把十尺长的雕刻木制弯刀，两面都用红漆印有旅馆的名字。","建筑物后面有一个带有马厩和附属建筑的旅馆院子。"],flesh:`在全信仰神殿北边的一扇门处，矗立着摇摆剑旅馆。这家旅馆是一座三层的石结构建筑，顶部是陡峭的石板屋顶，上面布满了众多烟囱。一块招牌悬挂在门上方，由链条固定。这是一把十尺长的雕刻木制弯刀，两面都用红漆印有旅馆的名字。建筑物后面有一个带有马厩和附属建筑的旅馆院子。

摇摆剑旅馆按照该地区的乡村标准来说，既热情又豪华。每个房间都设有壁炉、温暖的窗帘和挂毯，以及自来水（由屋顶水箱提供）。现在由来自深水城的伊凯尔家族经营，这家旅馆已经成为德萨林谷旅行者的一个受欢迎的中转站。最顶层的客房设有宿舍，旅行者可以与多达六位客人共享房间，享受"便宜住宿"，但较低的楼层则被划分为舒适的客房套房，每个套房都有自己的私人卫生间。旅馆的一楼还有一个餐厅。

The Sword有一个反复出现的问题：厨房火灾。位于旅馆后面的单层厨房附属建筑目前停用，最初建造时烟囱抽风效果不佳。目前，烹饪是基本的，且在院子里进行，在面包炉旁边的烤架上。餐厅主要用于饮酒，对面的"Helm"（酒馆）目前提供镇上最好的餐食，旅行者可以轻松购买。

虽然高阳盔甲是听红松镇人放松的地方，摇摆剑则是红松镇的礼貌社交中心和中立会面场所。

摇摆剑旅馆的老板是Kaylessa Irkell（女性Illuskan人类平民）。她是她家族的四十多岁的女族长，一个愉快、结实的女性。她越来越担心红松镇中'在黑暗中聚集'的事情，并且会向任何可能的冒险家提起她的担忧（见下文'Kaylessa的故事'）。

Kaylessa的员工都特别专注且工作出色。然而，其中两人有秘密主人。Ghileeda（女性Tethyrian人类平民），一名女仆，秘密向Helm的Justran Daehl报告，为Crushing Wave邪教服务。独眼马夫Iraun Thelder（男性Tethyrian人类警卫），一位曾经的雇佣兵战士，是Howling Hatred邪教的间谍。Iraun完全是被动的；他只报告他的正常职责所显示的内容。

凯莱萨对任何可能在附近逗留的冒险者都很友好，因为她相信每杀死一个怪物都会使红松树变得更安全。她听说过许多关于苏姆伯丘陵即使在明亮的阳光下也持续存在的雾气的故事，以及从丘陵中吹出的突然的热风，那里的微风一直都是冷的。还有更暴力的景象，比如突然的闪电从丘陵刺向晴朗的天空。凯莱萨称之为"邪恶的魔法"，尽管她承认这是与她分享的观点，她自己并没有亲眼见过这些。

凯莱莎也注意到一些红弓手看起来既害怕又偷偷摸摸的，并且生硬地回避无辜的询问。如果被逼问，她会提到石匠梅利科（区域18）和制革匠鲁鲁斯（区域19）。

在摇摆剑旅馆的客人中，有伊尔登兄弟（男性半精灵侍僧），黎明之神拉桑德尔的追随者。伊尔登兄弟漫游北方的小镇，担任信使和巡回牧师。他最近通过西桥从贝利亚德来，他可以证实，当他离开时，来自米拉巴的代表团在贝利亚德两个旬前。他对矮人们还没有出现感到惊讶，因为他以为他们打算很快在红松镇停留。

Kaylessa对红松镇最近麻烦的来源有一个理论：这都与Lance Rock的邪恶存在有关。她说，无论是警长还是镇上的长老都没有帮助她，所以她提供给角色们50金币去调查Lance Rock，并确保那里没有潜伏的邪恶势力。（见第6章中的"兰斯岩"。）`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[22],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"如果角色们不接近她，凯莱萨会告诉他们红松树附近最近的骚动。"},{id:"scn_05c",locationId:"loc_04b",name:"高阳之盔",activation:{condition:{type:"always"},priority:0},skeleton:["Swinging Sword Inn正对面的Long Road上矗立着一家破旧的两层酒馆。","生锈的金属格栅覆盖着它小巧、肮脏的窗户。","酒馆的名字非常清晰地用大而简单的字母印在突出的木制招牌两侧。","招牌顶部是一个生锈的、过大的装饰物：一个战士的桶形头盔，有两个眼缝（实际上是一个倒置的洗衣盆）。","里面是一个大而昏暗、镶有木制墙板的酒吧间。"],flesh:`Swinging Sword Inn正对面的Long Road上矗立着一家破旧的两层酒馆。生锈的金属格栅覆盖着它小巧、肮脏的窗户。酒馆的名字非常清晰地用大而简单的字母印在突出的木制招牌两侧。招牌顶部是一个生锈的、过大的装饰物：一个战士的桶形头盔，有两个眼缝（实际上是一个倒置的洗衣盆）。

里面是一个大而昏暗、镶有木制墙板的酒吧间。一个开放式木制楼梯通向上层，上层和酒吧间一样昏暗，墙板也是深色的。酒吧间后面是一条长长的吧台，上面悬挂着三个铜制烛灯，还有一段通往地窖的楼梯。

海姆高地是当地人放松、闲聊、调情、讲述笑话和他们工作日的"战争故事"，以及醉酒的地方。这不是一个精致用餐的地方。一打服务员在海姆高地轮班工作；大多数晚上，两个人负责一楼，一个人在上层为客人服务。海姆高地的工作人员不闲聊，但如果有人询问他们，他们会指引询问者去找他们认为可能谈论特定主题的其他客人。一杯酒的小礼物通常能让人们更愿意开口。

头盔酒吧时不时会变得喧闹，但工作人员已经准备好应对普通的醉酒斗殴。吧台后面有三根坚固且经常使用的警棍，还有一件旧斗篷，用作临时担架把醉酒的人拖到外面（有时也用来盖在打斗者的头上，以便他们可以被击倒）。

Helm由性情开朗但贪婪的Garlen Harlathurl（男性Tethyrian人类平民）经营。他是一个因失败的Waterdhavian商业冒险而变得愤世嫉俗的悲观者，但他已经证明是一个细心的酒馆老板。他有两个合伙人：一个已经退休到深水城，另一个是Helm的地窖管理员，粗鲁而肥胖的Justran Daehl（男性Tethyrian人类匪徒）。Justran秘密地是Crushing Wave邪教的间谍。

酒馆常客中有一位醉醺醺且好斗的商队护卫佐米丝（女性半兽人 警卫）。她刚刚离开一支从贝利亚德经西桥镇抵达红玉髓（两天前）的商队。商队继续南行时没有带上佐米丝，但她能证实约十五天前曾与失踪代表团所属的米拉巴兰守卫发生斗殴。她压根不关心那些人的去向，但他们的失踪与她毫无干系。

斯坦诺·刺蓟发（男性轻足半身人平民）是维尔弗马车行（区域16）的木匠。斯坦诺是个鬼鬼祟祟、惹人厌烦的家伙，但如果贿赂他开口（10金币就能搞定），他会告诉角色们曾看见老板伊尔梅斯·维尔弗消失在工场院子后方的隐蔽隧道里。他还见过其他人在天黑后溜进去，跟着伊尔梅斯去往某处——不过其他人都戴着兜帽或面具。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[23],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/PotA/016-poa02-03.webp"}},{id:"scn_060",locationId:"loc_04b",name:"雅兰莎母亲",activation:{condition:{type:"always"},priority:0},skeleton:["这座三层的破旧寄宿公寓有许多阳台和室外楼梯。","内部，这个地方是一系列狭窄、地板吱吱作响的通道，这些通道蜿蜒穿过由脆弱隔墙构成的小房间。","然而，这里的氛围是欢快的，尽管通常很吵闹。","寄宿屋是其所有者和经营者，瘦削、抽烟斗的'Mother' Yalantha Dreen（女性Tethyrian人类平民）的家。","Mother Yalantha住在非常后面的一个狭小的一楼房间里，其他二十个房间大多被临时工占据。"],flesh:`这座三层的破旧寄宿公寓有许多阳台和室外楼梯。内部，这个地方是一系列狭窄、地板吱吱作响的通道，这些通道蜿蜒穿过由脆弱隔墙构成的小房间。然而，这里的氛围是欢快的，尽管通常很吵闹。

寄宿屋是其所有者和经营者，瘦削、抽烟斗的'Mother' Yalantha Dreen（女性Tethyrian人类平民）的家。Mother Yalantha住在非常后面的一个狭小的一楼房间里，其他二十个房间大多被临时工占据。然而，通常有四到五个房间可以在需要时为旅馆提供额外的住宿空间。

所有居民都见过（或者至少声称见过）夜间在红松镇周围潜伏的"强盗"，更不用说从蛇头老鼠到幽灵龙的各种怪物，这些怪物在接近时会消失。（如果你在寻找NPC来传播更加奇异和荒诞的谣言，住在雅兰萨母亲寄宿屋的居民们是完美的选择。）

住在这里的六位客人是黑土教团的观察者（相当于匪徒们）。他们便是那些夜间监视采石场的石面具人，以及在活动石墓的区域T7中出现的所谓"灾厄带来者"（当听到冒险者发现了隐藏密室时，他们会冲进隧道）。他们不会承认任何参与，也不会愚蠢到在寄宿处藏匿面具。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_063",locationId:"loc_04b",name:"5. 塞尔恩的安全旅程",activation:{condition:{type:"always"},priority:0},skeleton:["三个巨大的棚子在这里呈三角形排列，周围是各个组装阶段坚固的木制马车。","第一个是一个充满忙碌木工的工作坊，第二个是存放轮子和车轴等零件的存储区，第三个则是用于出售的一打成品马车。","Thelorn's是这个地区最著名的马车制造商，现在由创始人的两个孙子经营。","这是一个忙碌且总是熙熙攘攘的地方，因为制作高品质的马车需要时间，所以这里日夜不停地工作（工人分为三班）。",`Thelorn's马车的品质在该地区众所周知，结果就是这里的工人们必须全力以赴，以保持Thelorn's长期规定的"库存中有十二辆备用马车，随时准备出发"。`],flesh:`三个巨大的棚子在这里呈三角形排列，周围是各个组装阶段坚固的木制马车。第一个是一个充满忙碌木工的工作坊，第二个是存放轮子和车轴等零件的存储区，第三个则是用于出售的一打成品马车。Thelorn's是这个地区最著名的马车制造商，现在由创始人的两个孙子经营。这是一个忙碌且总是熙熙攘攘的地方，因为制作高品质的马车需要时间，所以这里日夜不停地工作（工人分为三班）。Thelorn's马车的品质在该地区众所周知，结果就是这里的工人们必须全力以赴，以保持Thelorn's长期规定的"库存中有十二辆备用马车，随时准备出发"。

这里没有人在轮班时间对闲聊感兴趣。有一种务实、自豪于工艺的氛围，许多工人是专家，能够以惊人的速度完成一流的工作。警惕的孩子们手持平底锅作为警报，时刻守卫着棚屋。

Thorsk Thelorn和更高但更瘦的Asdan Thelorn（两位都是Illuskan人类平民）是这里的老板。他们是公正、勤劳的人，他们支付丰厚的工资以留住好工人。

他的货物上标有一个奇怪的符号，像一个碗。这位阿姆尼亚商人慷慨地支付了索斯克，并谈到了他正要去的一个大德鲁伊集会，希望能销售桶装啤酒和各种小饰品。询问索斯克的角色可以得到前往赤月大厅的方向（见第三章）。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色询问索斯克关于奇怪的顾客，这位忙碌的马车制造商回忆起一位前往北方长路的阿姆尼亚商人，他停下来修理马车。"},{id:"scn_066",locationId:"loc_04b",name:"6. 钱西尔精细马具",activation:{condition:{type:"always"},priority:0},skeleton:["这种拥挤的工作坊里充满了鞣制和涂油皮革的刺鼻气味，墙上展示着各种尺寸的工作用兽的皮制马鞍、缰绳、轭和挽具。","时尚的皮夹克、长大衣、帽子、靴子、绑腿、护腕、腰带、肩带和全套皮甲也都有存货，尺寸齐全。","由其创始人的孙女拥有并监督，她管理着三名全职员工和两名兼职员工，钱瑟尔被认为是红松树最好的马具制造商，商队商人都这么认为。","对一些人来说，这是他们来到红松树的原因。","钱瑟尔是长路上许多定居点的稳定供应商。"],flesh:`这种拥挤的工作坊里充满了鞣制和涂油皮革的刺鼻气味，墙上展示着各种尺寸的工作用兽的皮制马鞍、缰绳、轭和挽具。时尚的皮夹克、长大衣、帽子、靴子、绑腿、护腕、腰带、肩带和全套皮甲也都有存货，尺寸齐全。

由其创始人的孙女拥有并监督，她管理着三名全职员工和两名兼职员工，钱瑟尔被认为是红松树最好的马具制造商，商队商人都这么认为。对一些人来说，这是他们来到红松树的原因。钱瑟尔是长路上许多定居点的稳定供应商。

Phaendra Chansyrl（女性Tethyrian人类斥候）穿着自己制作的雕刻和印花皮甲，作为一种行走的广告。她腰带上和绑在手臂及腿部的定制鞘中携带着锋利的刀子、尖钻和冲子，看起来像一名冒险家。她闲暇时梦想着周游北方并屠杀龙，但她更感兴趣的是建立一个商业帝国，并希望有一天能超越红松镇。

Phaendra 听过许多关于强盗和怪物目击事件以及夜晚神秘石面具观察者的传闻，但她忽略了它们，专注于自己的工作。她尖锐地建议其他人也这么做。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[24],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_068",locationId:"loc_04b",name:"赫尔维尔·塔恩拉，裁缝",activation:{condition:{type:"always"},priority:0},skeleton:["塔恩拉是方圆百里内唯一可以买到高品质服装的地方。","这座方形的两层建筑位于长路和卡恩路的交汇处。","它的招牌上绘有穿着考究的贵族男士和女士的图像，每一边各有一个。","装饰性的卷轴式铁栅栏保护着窗户。","Tarnlars家族过去是做马车制造的，但由于竞争，家族在两代前改行了。"],flesh:`塔恩拉是方圆百里内唯一可以买到高品质服装的地方。这座方形的两层建筑位于长路和卡恩路的交汇处。它的招牌上绘有穿着考究的贵族男士和女士的图像，每一边各有一个。装饰性的卷轴式铁栅栏保护着窗户。

Tarnlars家族过去是做马车制造的，但由于竞争，家族在两代前改行了。Tarnlars重新塑造自己，成为销售坚固而时尚服装的商人，以吸引使用Long Road的商人和旅行者。毕竟，斗篷和靴子就像马车轮一样会磨损，任何人在春天的恶劣天气或严寒的冬天在路上跋涉十天，很快就会非常珍视温暖的衣物。

这些衣服、靴子和配饰都制作精良、温暖且坚固，尽管很少有红松镇的居民能负担得起每天穿戴它们。塔恩拉尔一家住在他们服装店上面的舒适公寓里。

Helvur Tarnlar（男性Tethyrian人类平民）按照红松镇的标准来说是个势利小人。他装出一副文雅的样子，傲慢地向顾客解释说"这就是贵族们在无冬城穿靴子的方式"，或者"像这样的帽子在银月城非常流行"，尽管他从未去过那些地方。他拒绝对当地事件进行猜测，说，"Tarnlars家不涉足流言蜚语！"然而，对于领主联盟的任何成员，Helvur会放下他的矫揉造作和不愿分享信息的态度。他通常会把大部分询问转给他的妻子Maegla。

玛格拉（女性图拉米人类平民)是家族中真正的天才。她是一位敏锐的商人，对优质商品有敏锐的眼光。她也是四个大胆而爱冒险的孩子的母亲。她还帮助那些服务于领主联盟利益的人。

塔恩拉尔家的孩子们（两个男孩和两个女孩，年龄在七到十岁之间）渴望与冒险家交朋友并跟随他们，作为摆脱日常家务的可能途径。几个星期前，塔恩拉尔家的孩子们在朝兰斯岩方向采摘浆果时，遇到了一个饱经风霜的矮人勘探者，他警告他们远离兰斯岩"因为那里有瘟疫。"梅格拉不知道他们在说什么，但孩子们可以提供前往矮人警告他们的那个峡谷的方向。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[25],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/PotA/017-poa02-04.webp"}},{id:"scn_06b",locationId:"loc_04b",name:"8. 洛伦的面包店",activation:{condition:{type:"always"},priority:0},skeleton:["这个芳香、整洁的建筑的烤箱和搅拌碗日夜都在使用。","面包店有一个悬挂的标志，由一个雕刻并涂漆的木制圆形面包组成，大小相当于一辆小推车。","面包店总是有新鲜的圆面包和圆面包卷出售。","它的特色是顶部撒有来自周边当地农场的融化蘑菇奶酪的奶酪面包卷。","瘦小而精力充沛的店主，曼戈巴洛·洛伦（男性孔达坦人类暴徒），热衷于流言蜚语，能够编造许多荒诞的故事。"],flesh:`这个芳香、整洁的建筑的烤箱和搅拌碗日夜都在使用。面包店有一个悬挂的标志，由一个雕刻并涂漆的木制圆形面包组成，大小相当于一辆小推车。

面包店总是有新鲜的圆面包和圆面包卷出售。它的特色是顶部撒有来自周边当地农场的融化蘑菇奶酪的奶酪面包卷。

瘦小而精力充沛的店主，曼戈巴洛·洛伦（男性孔达坦人类暴徒），热衷于流言蜚语，能够编造许多荒诞的故事。很少有真的，而且没有一个秘密是他自己的。他是散塔林会的坚定、谨慎的盟友，对于那个派系的任何人来说，他是一个有用的、不问问题的援助来源。洛伦不会主动提供这些信息，但他的一些远亲有散塔林会的联系，他总是愿意帮助黑网。

曼戈巴尔听说了佩尔·曼迪维尔在闹鬼之墓的遭遇，决定亲自去查看一番。他在附近发现了一个地精，并认为是一群地精占据了那里并设置了"闹鬼"机关来吓跑入侵者。他会告诉任何散塔林会角色，与明萨拉·曼迪维尔（区域14）谈谈可能值得——墓中可能藏有宝藏，不该留在一群地精手里。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[25],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_06e",locationId:"loc_04b",name:"9. 坦图尔铁匠铺",activation:{condition:{type:"always"},priority:0},skeleton:["这座被烟熏黑的建筑两端是巨大的石块，耸立成高大宽阔的烟囱。","打铁锤的叮当声在大多数夜晚都很晚才停歇。","Eldras Tantur（男性Turami人类暴徒）已经担任红松镇的铁匠有十五年了，在这段时间里只休息了几天。","Eldras和他的孩子们——一个健壮的儿子和两个强壮的女儿——都是熟练的铁匠，能够制造几乎所有不需要特殊合金或处理的东西。","他们可以给剑淬火并加固盔甲，并且经常修理工具和武器。"],flesh:`这座被烟熏黑的建筑两端是巨大的石块，耸立成高大宽阔的烟囱。打铁锤的叮当声在大多数夜晚都很晚才停歇。Eldras Tantur（男性Turami人类暴徒）已经担任红松镇的铁匠有十五年了，在这段时间里只休息了几天。Eldras和他的孩子们——一个健壮的儿子和两个强壮的女儿——都是熟练的铁匠，能够制造几乎所有不需要特殊合金或处理的东西。他们可以给剑淬火并加固盔甲，并且经常修理工具和武器。

Tanturs家族很少从他们的铁匠铺出来。他们每天都在工作，满足无尽的订单，包括铰链、铰链、锁和链条，以及马车所需的五金配件，如销钉、螺栓环、车轮边缘和轮毂。

埃尔德拉斯是一个直率的人，他对红松镇当前的情绪和麻烦几乎一无所知，因为他很少离开他的铁匠铺。

他的妻子莱芙拉通过她交易的商人订购金属，她听到了很多麻烦事，但她没有告诉埃尔德拉斯和他们的孩子任何这些事。她认为，没有这些事情的生活会更好。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[26],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_070",locationId:"loc_04b",name:"德劳特优质家禽",activation:{condition:{type:"always"},priority:0},skeleton:["这两家红松镇家禽店中最大的一家，由于当地农场的繁荣和长路沿线社区的无尽需求，总是熙熙攘攘。","每天有两三辆装满油桶里串烤阉鸡的马车从这家店出发，去远方的壁炉上完成烹饪。","这座单层建筑外观狭长且不显眼，但商业的名称被漆在双开大门上方（足够宽以供马车通过）。","内部，羽毛在空气中飘散。","笼子和桶位于建筑的街道端，接着是两个砖砌的烹饪炉灶、长而血迹斑斑的切割台，以及后面的拔毛区。"],flesh:`这两家红松镇家禽店中最大的一家，由于当地农场的繁荣和长路沿线社区的无尽需求，总是熙熙攘攘。每天有两三辆装满油桶里串烤阉鸡的马车从这家店出发，去远方的壁炉上完成烹饪。

这座单层建筑外观狭长且不显眼，但商业的名称被漆在双开大门上方（足够宽以供马车通过）。内部，羽毛在空气中飘散。笼子和桶位于建筑的街道端，接着是两个砖砌的烹饪炉灶、长而血迹斑斑的切割台，以及后面的拔毛区。羽毛堆积在手推车里，这些手推车将被送去清洗，并最终作为枕头填充物出售。

店主兼所有者，纳海莉亚·德鲁特（女性特提里安人类平民），通过成为山谷中旅馆的可信赖供应商，建立了自己的业务。她宁愿不去了解"荒野的危险"和"诸如黑暗魔法之类的胡说八道"。纳海莉亚从她的父亲那里继承了这项业务，她的父亲是一位受人尊敬的镇长老，但她还没有被信徒们邀请加入。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[26],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_072",locationId:"loc_04b",name:"11. 贾莱萨·奥恩拉，屠夫",activation:{condition:{type:"always"},priority:0},skeleton:["Drouth's Fine Poultry隔壁有四座相同的单层石建筑，从街道上排成一行。","最前面的建筑上有一个被切肉刀雕刻的火腿的招牌画，旁边没有任何文字。","这是Red Larch的屠夫Jalessa Ornra（女性Illuskan人类平民）的工作场所和商店。","第二座建筑是她的熏肉房，通过一个地下冷藏室与商店相连，肉类就存放在那里。","第三座建筑外面经常有晾在晾衣绳上的衣服，是Jalessa和镇上的警官Harburk Tuthmarillar（男性Tethyrian人类老兵）共同居住的家。"],flesh:`Drouth's Fine Poultry隔壁有四座相同的单层石建筑，从街道上排成一行。最前面的建筑上有一个被切肉刀雕刻的火腿的招牌画，旁边没有任何文字。这是Red Larch的屠夫Jalessa Ornra（女性Illuskan人类平民）的工作场所和商店。第二座建筑是她的熏肉房，通过一个地下冷藏室与商店相连，肉类就存放在那里。第三座建筑外面经常有晾在晾衣绳上的衣服，是Jalessa和镇上的警官Harburk Tuthmarillar（男性Tethyrian人类老兵）共同居住的家。

红松镇没有监狱或法庭。商店是最近似的东西。哈布尔克雇佣了四名可信赖的人，他们住在第四栋建筑里。这些可信赖的人是助理警官（人类警卫），他们也为贾莱萨工作，作为切割者和腌制者，将肉切割、腌制，然后密封在小桶中，用于运输或储存。

哈伯克和他的心腹在宰割肉类时讨论执法和维护和平的事务。他们还以将醉酒者用皮带挂在肉钩上让他们醒酒而闻名。

哈布尔克和他的亲信是红松树中最忙碌的人之一，因为他们除了在镇上维护治安的轮班外，还担任屠夫的工作。哈布尔克以打盹代替整夜睡眠而闻名。

Harburk还没有完全意识到他的家门口就有四个元素邪教。他知道Sumber Hills有邪恶和秘密的团体——谣言不可能所有都是假的——但他不确定外面究竟是什么。能够去他不敢去的地方调查的冒险家将是天赐之物。

哈伯克听说过城镇南部的卡恩路上有土匪活动，并且他知道几个可能的藏身之处。他没有时间去乡间闲逛，他认为那是徒劳无功的追逐，但他向热心的新冒险家提供了一两个可能地点的方向。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[26],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:'见第6章中的"熊和弓"遭遇。'},{id:"scn_075",locationId:"loc_04b",name:"12. 多伦·费恩斯通",activation:{condition:{type:"always"},priority:0},skeleton:["这座普通的方形建筑总是被一层灰白色的岩石尘埃覆盖。","这是繁忙的Dornen采石场的办公室，由Elak Dornen（男性Tethyrian人类贵族）经营。",'办公室展示了切割好的石材样本以及采石场的"原始"样本。',"订单记录和旧雇员名单整齐地分类存放在木制柜台后面的柜子里。","Dornen对大约二十名工人要求严格，并且他坚持要保持仔细的记录。"],flesh:`这座普通的方形建筑总是被一层灰白色的岩石尘埃覆盖。这是繁忙的Dornen采石场的办公室，由Elak Dornen（男性Tethyrian人类贵族）经营。办公室展示了切割好的石材样本以及采石场的"原始"样本。订单记录和旧雇员名单整齐地分类存放在木制柜台后面的柜子里。Dornen对大约二十名工人要求严格，并且他坚持要保持仔细的记录。

信徒们没有正式的领袖，但如果有的话，多能就是。他是一个长期成员，作为决定性一票，决定谁被接纳进秘密小组，以及如何使用他们的集体影响力来安排红松镇的事务。他是一个严厉而不灵活的人，他喜欢从让其他信徒站在他这边中获得的权力。

多南是黑土牧师拉拉克信息的热心皈依者。他预见不久的将来，他和其他信徒将公开夺取权力。如果被好事的冒险者打扰，多南会告诉他们他听说过特里克罗克洞穴中有失落的宝藏和潜伏的神秘恶棍的故事。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[26],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_078",locationId:"loc_04b",name:"13. 铁头武器店",activation:{condition:{type:"always"},priority:0},skeleton:["三年前，一位名叫冯·铁头的老兵和商队守卫决定在红松镇定居，并开设一家买卖武器和防具的商店，包括新的和二手的。","在漫长的职业生涯中，铁头（男性半兽人老兵）护送商队和驮队从北方的一端到另一端，他决定通过为雇佣兵和雇佣兵提供体面且负担得起的装备来赚钱。","铁头是一个出人意料的和蔼可亲的半兽人。","他在武器和盔甲修理方面有一点技巧，有时修理二手装备以供转售。","他真正的才能是对那些能够经受住艰苦使用和恶劣天气的普通武器和盔甲有着敏锐的眼光。"],flesh:`三年前，一位名叫冯·铁头的老兵和商队守卫决定在红松镇定居，并开设一家买卖武器和防具的商店，包括新的和二手的。在漫长的职业生涯中，铁头（男性半兽人老兵）护送商队和驮队从北方的一端到另一端，他决定通过为雇佣兵和雇佣兵提供体面且负担得起的装备来赚钱。

铁头是一个出人意料的和蔼可亲的半兽人。他在武器和盔甲修理方面有一点技巧，有时修理二手装备以供转售。他真正的才能是对那些能够经受住艰苦使用和恶劣天气的普通武器和盔甲有着敏锐的眼光。如果你问他哪把战斧最好，铁头会给出诚实（且准确）的答案。他不是一个擅长做生意的人，几乎不赚钱，但他似乎并不在意。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_07a",locationId:"loc_04b",name:"14. 曼迪维尔的家禽",activation:{condition:{type:"always"},priority:0},skeleton:["这座木制建筑多年来随意扩建，向外延伸出单层的翼楼和杂乱无章的附属建筑。","内部看起来像谷仓或阁楼，有裸露的梁和柱子。","活鸡的笼子占据了建筑里大部分奇怪的角落和走廊，只留下一条狭窄的通道通往后面，那里住着曼迪弗斯一家。","他们的房间通过一个工作室与鸡笼隔开，工作室里有切割台和中央壁炉。","Mhandyvver's是当地两家家禽店中不太显眼的一家，但却是红松镇居民的最爱。"],flesh:`这座木制建筑多年来随意扩建，向外延伸出单层的翼楼和杂乱无章的附属建筑。内部看起来像谷仓或阁楼，有裸露的梁和柱子。活鸡的笼子占据了建筑里大部分奇怪的角落和走廊，只留下一条狭窄的通道通往后面，那里住着曼迪弗斯一家。他们的房间通过一个工作室与鸡笼隔开，工作室里有切割台和中央壁炉。

Mhandyvver's是当地两家家禽店中不太显眼的一家，但却是红松镇居民的最爱。慈祥的老Minthra 'Minny' Mhandyvver（女性Tethyrian人类平民）和她的三个成年子女出售活鸡或烤鸡以及油浸、腌制的鸡肝，还有新鲜和腌制的鸡蛋。

米妮看起来像一个和蔼的老糊涂，但她比看上去要敏锐得多。除其他事情外，她知道一群镇上的长者（包括埃拉克·多伦、伊尔梅斯·维尔弗和阿尔贝里·梅利克霍）属于一个秘密俱乐部，并在镇上操纵很多事情。她认为信徒们是无害的，但如果她信任的冒险者向她寻求建议，她会分享她所知道的。

最近，米妮的冒险心旺盛的孙女佩尔在城镇外不远处一个被遗忘已久的坟墓附近与一个"鬼魂"有了一次可怕的邂逅。米妮命令女孩远离那里，但她想知道佩尔看到了什么，并且她认为应该有人去"确保那里安全"。佩尔提供的指引通向第6章中的"闹鬼的墓穴"遭遇。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_07d",locationId:"loc_04b",name:"15. 海莉亚的",activation:{condition:{type:"always"},priority:0},skeleton:["海莉亚·哈纳德鲁姆（女性人类泰瑟里人平民）来自安姆，她在自己宽敞、设备齐全的家中经营着一家浴室和服装店。","入口处两旁摆放着装有芳香草药和花朵的半桶，窗户上装饰着充满鲜花的花箱。","内部是一个整洁的房间，用作裁缝店和试衣间。","穿过两扇门是散发着宜人气味和温暖潮湿感的浴室。","与街上的Tarnlar's不同，Haeleeya's迎合的是寻求特殊场合穿着的当地女性；"],flesh:`海莉亚·哈纳德鲁姆（女性人类泰瑟里人平民）来自安姆，她在自己宽敞、设备齐全的家中经营着一家浴室和服装店。入口处两旁摆放着装有芳香草药和花朵的半桶，窗户上装饰着充满鲜花的花箱。内部是一个整洁的房间，用作裁缝店和试衣间。穿过两扇门是散发着宜人气味和温暖潮湿感的浴室。

与街上的Tarnlar's不同，Haeleeya's迎合的是寻求特殊场合穿着的当地女性；她为男性制作的服装很少。浴场是一项更稳定的生意，因为许多红松镇的老年女性定期去浴场交换八卦。

海莉亚听到了在浴室里分享的所有八卦，但她保持自己的立场，除非询问者与翡翠联盟有关。当海莉亚年轻时，她在荒野中迷路了。一位翡翠联盟的游侠救了她，从那以后她一直是派系成员的朋友。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_07f",locationId:"loc_04b",name:"16. 瓦尔弗的马车工坊",activation:{condition:{type:"always"},priority:0},skeleton:["伊尔梅斯·维尔弗（男性特提里安人类匪徒）经营着塞尔伦安全旅行公司的廉价替代品，制作并销售马车的替换轮子和车轴。","车间是一个杂乱无章、不整洁的棚屋，周围有几十辆马车，被磨损的帆布防水帆布覆盖着。","宽宽的主门上方挂着一个粗糙的手写招牌，宣称这里是'维尔弗的马车作坊'。","伊尔梅斯大部分时间都在修理马车，为当地采石场制作重型马车和雪橇。","内部，大约六辆马车处于不同的组装阶段，周围散布着凳子、梯子和长椅。"],flesh:`伊尔梅斯·维尔弗（男性特提里安人类匪徒）经营着塞尔伦安全旅行公司的廉价替代品，制作并销售马车的替换轮子和车轴。车间是一个杂乱无章、不整洁的棚屋，周围有几十辆马车，被磨损的帆布防水帆布覆盖着。宽宽的主门上方挂着一个粗糙的手写招牌，宣称这里是'维尔弗的马车作坊'。伊尔梅斯大部分时间都在修理马车，为当地采石场制作重型马车和雪橇。

内部，大约六辆马车处于不同的组装阶段，周围散布着凳子、梯子和长椅。木柱支撑着一个阁楼，阁楼是一个由木板构成的开放式格子结构，作为一些鸟类的栖息地和数十个木制马车轮的存放地。Ilmeth雇佣了大约六名劳工，他们在工作时大量饮酒。这里的一切都比Thelorn's的更混乱，但也更便宜。

伊尔梅斯是个酗酒成性、性情阴郁的男人，对他人困境漠不关心。作为信仰者组织的一员，他企图利用该团体势力挤垮宿敌塞尔伦家族。他那杂乱工作院落后的旧地窖门，实际连通着通往移动之石墓穴区域T9的隧道（详见第六章）。

半身人斯坦诺·蓟发是这里的一名工人，他注意到了伊尔梅斯和其他信徒在没有人应该在场的时候偷偷进出，但如果在这里被问及，斯坦诺不愿说出任何话，因为他担心伊尔梅斯可能会无意中听到他的话。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[27],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_082",locationId:"loc_04b",name:"17. 盖尔库尔的",activation:{condition:{type:"always"},priority:0},skeleton:["这座破旧的木制建筑是红松镇的二手工具和商品店，它的理发店，以及当地人的非官方第二酒馆。","内部是一个杂乱的商店，里面满是闲逛的顾客——他们大多数是男性，并不特别急于被服务——旧的理发剪掉落在下垂的木板地板上。","Malandro Gaelkur（男性Tethyrian人类平民）是店主兼理发师。","除了提供美容服务外，他还交易二手（有时是可疑的）物品，并且不问任何问题。","盖尔库尔的真实交易在其他红松树人中并不为人所知。"],flesh:`这座破旧的木制建筑是红松镇的二手工具和商品店，它的理发店，以及当地人的非官方第二酒馆。内部是一个杂乱的商店，里面满是闲逛的顾客——他们大多数是男性，并不特别急于被服务——旧的理发剪掉落在下垂的木板地板上。Malandro Gaelkur（男性Tethyrian人类平民）是店主兼理发师。除了提供美容服务外，他还交易二手（有时是可疑的）物品，并且不问任何问题。

盖尔库尔的真实交易在其他红松树人中并不为人所知。他经营这家店铺作为他伪造货币业务的掩护。盖尔库尔将廉价硬币（或简单的铁塞）涂上薄层的更有价值的金属，然后使用他自己制作的印章和模具适当地标记它们。

马兰德罗是一位技艺高超的雕刻师，曾经在博德之门担任珠宝商的助手，制作宝石镶嵌和整枚戒指。他只在店铺关闭且独自一人时才会伪造货币，但在大多数日子和每个夜晚的大部分时间里，红松镇的居民都会前来交谈。最近，每一个关于当地所见的奇怪和可疑事物的荒诞故事似乎都成为了讨论的话题。

Larmon Greenboot（男性Tethyrian人类平民），一位当地的牧羊人，可以在Gaelkur's找到。他一直在讲述并重复讲述在Sumber Hills发现神秘新挖坟墓的故事。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_085",locationId:"loc_04b",name:"18. 梅利克霍石雕",activation:{condition:{type:"always"},priority:0},skeleton:['在这座小屋前面的一小片杂草丛生的草坪上，两根柱子上挂着一块招牌，上面写着"梅利克霍石场"。',"采石场坑道就从房子后面开始，这房子既是办公场所，也是采石场老板阿尔贝里·梅利克霍（女性泰瑟里人类平民）的家。","梅利克霍本人监督着采石场的工作，哄骗和咒骂着这里汗流浃背的石匠。","采石场内的隐藏隧道通向移动之石之墓中的区域T1（见第六章）。",'梅利科与其他信仰者知晓采石场中的秘密入口，但在此工作的石匠们并不知情（此处被巧妙地伪装成一条"塌方"废弃的储藏隧道）。'],flesh:`在这座小屋前面的一小片杂草丛生的草坪上，两根柱子上挂着一块招牌，上面写着"梅利克霍石场"。采石场坑道就从房子后面开始，这房子既是办公场所，也是采石场老板阿尔贝里·梅利克霍（女性泰瑟里人类平民）的家。梅利克霍本人监督着采石场的工作，哄骗和咒骂着这里汗流浃背的石匠。

采石场内的隐藏隧道通向移动之石之墓中的区域T1（见第六章）。梅利科与其他信仰者知晓采石场中的秘密入口，但在此工作的石匠们并不知情（此处被巧妙地伪装成一条"塌方"废弃的储藏隧道）。

Albaeri，一个通常性情愉快、精力充沛的有孕之身的女性，是信徒之一。她对红松镇下方隐藏的房间里最近活动更加频繁的移动石块感到担忧，但她不愿与陌生人分享她的担忧。

当对她石头的订单积压时，梅利克霍通常会让她的石匠们在火把的照明下加班工作。在过去的一个月左右，他们被一些穿着石面具的神秘黑袍人物吓跑了，这些人物从阴影中观察着他们。

这些戴面具的监视者实际上是黑土邪教的成员，他们在镇上的马具店或仓库中担任劳工；他们住在Mother Yalantha的寄宿屋。Mellikho参与了吓跑她自己的采石工人的计划；信徒们使用采石场与藏在移动石墓中的黑土祭司Larrakh会面。

然后她建议，如果角色们正在寻找一些考验他们勇气的东西，据说有一个传说中的宝藏隐藏在Tricklerock洞穴中，并提供了方向。（这将导致第6章中的"血腥宝藏"遭遇。）她知道洞穴是危险的，希望角色们在那里丧命，结束尴尬的问题，但试图将她的建议作为"有帮助的"谣言传递。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},dmGuidance:"如果角色们访问采石场并开始提问，Albaeri Mellikho声称关于奇怪观察者的谣言被夸大了。"},{id:"scn_088",locationId:"loc_04b",name:"19. 卢鲁特的制革厂",activation:{condition:{type:"always"},priority:0},skeleton:["这个前仓库散发着一种令人泪流不止、令人窒息的恶臭，这种恶臭完全掩盖了该地一箭之遥内的所有其他气味。","内部有伸展架、带有锋利刀片和碎皮的切割台、一个装满成品皮革准备出售的后室，以及六个巨大的开放式大桶，里面装有用于鞣制的各种难闻的、腐蚀性的液体。","店主是Ulhro Luruth（男性Chondathan人类平民）。","由于多年在制革厂工作，他一点也闻不到气味。","他和他的五个忠诚、简洁的助手在这里生活和工作。"],flesh:`这个前仓库散发着一种令人泪流不止、令人窒息的恶臭，这种恶臭完全掩盖了该地一箭之遥内的所有其他气味。内部有伸展架、带有锋利刀片和碎皮的切割台、一个装满成品皮革准备出售的后室，以及六个巨大的开放式大桶，里面装有用于鞣制的各种难闻的、腐蚀性的液体。

店主是Ulhro Luruth（男性Chondathan人类平民）。由于多年在制革厂工作，他一点也闻不到气味。他和他的五个忠诚、简洁的助手在这里生活和工作。

Luruth是信徒之一。他知道他不应该与外界谈论这个秘密社团，但他不太聪明，可能会认为提问者知道的比他们实际上知道的要多。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_08a",locationId:"loc_04b",name:"20. 贝森德尔的仓库",activation:{condition:{type:"always"},priority:0},skeleton:["四座相同且建造精良的仓库矗立在这里，地面覆盖着耙平的砾石和灰烬。",'任何人一踏过标有"贝森杜尔仓储/按十天、一个月或一年租用空间"的标志，就会出现一个高大、面带微笑的男人来迎接他们。',"这是埃雷戈·贝森杜尔（男性泰瑟里人类贵族）。","他由三名魁梧的职员和搬运工协助，他们都是前雇佣兵暴徒。","Aerego 不多问，所以这里可以存放任何东西。"],flesh:`四座相同且建造精良的仓库矗立在这里，地面覆盖着耙平的砾石和灰烬。任何人一踏过标有"贝森杜尔仓储/按十天、一个月或一年租用空间"的标志，就会出现一个高大、面带微笑的男人来迎接他们。这是埃雷戈·贝森杜尔（男性泰瑟里人类贵族）。他由三名魁梧的职员和搬运工协助，他们都是前雇佣兵暴徒。

Aerego 不多问，所以这里可以存放任何东西。存放的物品如果不动或不从容器中爆发出来，将被严格单独留下，尽管开始散发出死亡气味的板条箱会被拿到后面并打开。如果它们包含尸体（很少见，但会发生），Aerego 会默默地将它们烧掉，而不向警长或任何人提及。

Aerego是一个信徒，尽管他的出席情况参差不齐，他开始怀疑神秘的祭司Larrakh到底对红松镇有什么打算。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[28],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_08c",locationId:"loc_04b",name:"21. 市场",activation:{condition:{type:"always"},priority:0},skeleton:["这个泥泞且经常使用的场地被小屋和石头圈所环绕，这些石头圈显然在过去多次被用作烹饪火或垃圾焚烧场。","每十天一次，这里就会挤满了附近农场的马车。","农民们从几英里外的家园驾车来到这里，出售各种时令农产品、奶酪、苹果酒和苹果醋，以及装在罐子里的去年的腌甜菜。","在旬日的其他九天里，这里只有一位红松镇居民，一个名叫格伦德的半兽人。","格伦德（男性半兽人暴徒）是村里的傻瓜。"],flesh:`这个泥泞且经常使用的场地被小屋和石头圈所环绕，这些石头圈显然在过去多次被用作烹饪火或垃圾焚烧场。每十天一次，这里就会挤满了附近农场的马车。农民们从几英里外的家园驾车来到这里，出售各种时令农产品、奶酪、苹果酒和苹果醋，以及装在罐子里的去年的腌甜菜。

在旬日的其他九天里，这里只有一位红松镇居民，一个名叫格伦德的半兽人。格伦德（男性半兽人暴徒）是村里的傻瓜。他在田地尽头的大桶里制作泡菜勉强维持生计。

格伦德是个快乐而愚笨的家伙。其他商贩都从他敞开的腌菜桶里偷东西，而他则乐呵呵地放任他们。在这里遇见他总能带来轻松的喜剧效果，但冒险者们会在活动石墓的区域T3（见第六章）遇到他更加不幸的境遇。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_08e",locationId:"loc_04b",name:"22. 瓦利沃的杂货店",activation:{condition:{type:"always"},priority:0},skeleton:["除了令人眼花缭乱的门、桶、腐烂的旧家具和靠在外墙上的工具外，这座建筑看起来像一个私人住宅。","前门上挂着一块小小的褪色招牌，上面写着'Vallivoe's Sundries'。","房间里堆满了新的商品和各种使用过的物品，直到天花板。","恩德里斯·瓦利沃（男性泰瑟里人类平民）是一位退休的商队商人，他出售新的和二手的商品：家具、灯具、地毯、镜子、武器、盾牌、头盔以及几乎所有其他东西。","几乎所有任何东西都可能在这里买到，埋藏在其他东西堆下，瓦利沃在脑海中保持着良好的库存清单。"],flesh:`除了令人眼花缭乱的门、桶、腐烂的旧家具和靠在外墙上的工具外，这座建筑看起来像一个私人住宅。前门上挂着一块小小的褪色招牌，上面写着'Vallivoe's Sundries'。房间里堆满了新的商品和各种使用过的物品，直到天花板。

恩德里斯·瓦利沃（男性泰瑟里人类平民）是一位退休的商队商人，他出售新的和二手的商品：家具、灯具、地毯、镜子、武器、盾牌、头盔以及几乎所有其他东西。几乎所有任何东西都可能在这里买到，埋藏在其他东西堆下，瓦利沃在脑海中保持着良好的库存清单。他是镇上唯一出售空白书籍和羊皮纸的供应商。

恩德里斯是一个害羞、躲躲闪闪的小个子男人，他雇佣了一小群当地孩子。他听说过大部分谣言和怪物目击事件，但他不知道——也不想知道——真正发生了什么。然而，他仔细地观察和倾听。他对竖琴手友好，并且愿意与任何询问的竖琴手分享他所看到和听到的一切。他是一个有用、忠诚的情报和联系人，尽管他并不适合做任何英勇的行为。

如果一个或多个角色表现出对帮助城镇解决其最近麻烦的兴趣，恩德里斯说：'我不知道这是否相关，但我无意中听到有人说他们看到一颗头骨被一支黑色箭钉在树上，就像某种不祥的警告或恶兆。它位于沿着松树小道走半天的路程，然后向东进入山区大约四英里。'如果角色调查这条线索，请在第6章运行'最后的笑'遭遇。

恩德里斯几天前从一个路过的商人那里买了一本奇怪的旧书。这本书是一本用矮人语书写的精美彩绘手稿。恩德里斯不懂矮人语，所以他不知道书里的内容；能读懂这些文字的角色可以告诉别人，这是关于米拉巴矮人氏族的家谱历史。如果有人问起他是如何得到这本书的，恩德里斯解释说他是从穿过城镇的小贩那里买的。小贩告诉恩德里斯，他是从沃姆福德的一个可疑的平底船船长那里买来的，那个船长不知怎么得到了一打类似的书。（如果角色们进行调查，这将引向第3章中的"沃姆福德的老鼠"遭遇。）恩德里斯愿意以50金币的价格出售这本书，尽管他愿意以25金币的价格卖给竖琴手。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_093",locationId:"loc_047",name:"探索山谷",activation:{condition:{type:"always"},priority:0},skeleton:["在冒险开始时，玩家角色知道他们面对的是一个神秘的威胁。","德斯拉林谷有些不对劲。","为了找出究竟是什么威胁着这些土地，他们必须离开红松镇，冒险进入更广阔的山谷。","冒险的早期行动涉及访问山谷内外的不同地点，解决问题并挖掘线索，这些线索可以引导队伍前往闹鬼的堡垒——然后继续与元素邪教对抗，并发现位于苏姆伯山下的寺庙群。","对于一个行动缓慢的团队来说——比如说，一个商队——从红松树跋涉到特里博可能需要整整十天的时间。"],flesh:`在冒险开始时，玩家角色知道他们面对的是一个神秘的威胁。德斯拉林谷有些不对劲。为了找出究竟是什么威胁着这些土地，他们必须离开红松镇，冒险进入更广阔的山谷。冒险的早期行动涉及访问山谷内外的不同地点，解决问题并挖掘线索，这些线索可以引导队伍前往闹鬼的堡垒——然后继续与元素邪教对抗，并发现位于苏姆伯山下的寺庙群。

对于一个行动缓慢的团队来说——比如说，一个商队——从红松树跋涉到特里博可能需要整整十天的时间。德萨林河对于任何没有船只的团队来说都是一个障碍，因为在铁福特和石桥之间找不到任何过河的地方。

所有定居点都是已知的地点 - 只需几分钟询问就可以获得足够的方向前往另一个城镇。同样，德斯拉林河和石桥是众所周知的地标。红松镇的任何人都知道羽风尖塔。在Bargewright Inn和Womford的一些人知道Rivergard Keep。在Beliard和Womford的任何人都知道Summit Hall。Beliard的任何人都知道狩猎斧大厅的地点。来自该地区或被特定钩子吸引到这里的角色可能知道这些地点。

所有其他地点都是未知的，因此角色需要找到这些位置。

德萨林谷的大部分是荒野，那里野生动物丰富，怪物常见。

在早晨、下午、傍晚和午夜检查随机遭遇。掷骰1d20；当掷出18或更高时，遭遇发生。

根据你想要的故事安排遭遇事件的范围。并非每次遭遇都必须是对抗。有些遭遇可以预示它们的开始，或者允许角色选择避开它们。

在第3章和第4章中，使用"早期旅行"随机遭遇表。在第5章中，使用"后续旅行"表。在旅行中或非常接近德萨林河的任何时候，使用"河流之旅"表。掷骰1d12 + 1d8来决定冒险者会遇到什么。

带有星号的遭遇在表格后面有解释。

这些 1d4 + 1 鸟羽人 攻击那些看起来是元素教徒的人。否则，鸟羽人可能会提供帮助。

一个战争团队由1d6 + 3个鸟羽人和一个气元素组成。它们像上文的侦察兵一样互动。

空气教派的一组侦察员由 1d4 + 1 名穿着 飞翼服 的 飓风 组成。有关教徒的具体数值和 飞翼服 描述，请参见第7章。

一名 羽风骑士 领导着 1d4 名 天织者。他们都骑着 巨秃鹫。有关教徒的具体数值请参见第7章。

一支商队由一个商人及其随行人员组成，他们正前往最近的定居点。该团队由1d4 + 2 警卫，2d4 平民，以及商队领袖（一名间谍）组成。

一群矮人矿工由1d4 + 1名盾矮人斥候和一个好战的领袖（一个盾矮人暴徒）组成。

地之教团的一群掠夺者由1d4 + 1 黑土守卫，一名黑土祭司，以及1d4−1 食人魔组成。有关教团成员的具体数值，请参见第7章。

这些土之邪教的匪徒们在途中设伏，准备伏击过路的行人。这个团队由1d4 + 1 匪徒们和1d4 黑土守卫s组成。

一小群元素生物自由游荡。掷一个 d4 来确定元素生物的类型：1, 风；2, 土；3, 火焰；4, 水。

这个小组包括一名狂战士和1d4 + 1 部族武者。他们是敌对的（见本章末尾的"The Uthgardt Tribes"部分）。

火焰教派派出的袭击者包括2d6名永恒火焰守卫和一名永恒火焰祭司。有关教徒的具体数值，请参见第7章。

火教的一支战争团队由 1d6 名 永恒火焰守卫，一名 永恒火焰祭司，以及 1d3 只 地狱猎犬 组成。有关教徒的具体数值请参见第7章。

队伍发现了一个农舍。掷一个d6来确定那里人们的种族：1-3，泰瑟里安人类；4，伊利斯坎人类；5-6，半身人。一个农舍由1d6成年平民和1d6−1非战斗儿童组成。居民可能会为友好的冒险者提供食物和住所。

一艘河流商人的平底船载有1d4 + 4名平民（水手），1d4名警卫，以及一位船长（一名间谍）。他们愿意为同方向的冒险者提供通行。

这个武装巡逻队由1d4 老兵和1d4 警卫组成。他们来自顶峰大厅，并向角色们热情地打招呼说"幸会！"

几只魔蝠成群结队旅行。掷一个 d6 来确定魔蝠的类型：1, 粉尘; 2, 冰; 3, 岩浆; 4, 泥浆; 5, 浓烟; 6, 蒸汽。

一群朝圣者包括2d6 平民，1d4 + 1 警卫，1d4 侍僧，以及一位前往圣地或特殊地点的祭司。他们很高兴有人陪伴。

一艘平底船载有2d4名匪徒们，1d4名暴徒，以及一位海盗船长（一名匪徒首领）。

一群牧羊人看守着牧群。掷一个d6来确定牧羊人的种族：1-4，人类；5-6，半身人。这个小组由1d4 平民和1d2名领袖（侦察员）组成。

曾经，这个 恐怖铠甲 在贝利亚德的警觉骑士旅馆的公共休息室里站岗。它随机选择一个角色，前进到5尺以内，然后对目标进行几秒钟的研究。如果遭到攻击，它会反击，失去一半生命值后撤退。否则，它会跟随所选角色 1d3 天，在战斗中守护其临时主人。那段时间结束后，恐怖铠甲再次徘徊。

水之邪教的一群掠夺者包括2d6 碎浪掠夺者，一位破碎波涛祭司，以及1d2 深渊探索者。有关邪教徒的具体数值，请参见第7章。

来自水之教团的一群掠夺者包括2d6 碎浪掠夺者，一名破碎波涛祭司，以及一个独眼战栗。领袖是一名骑在巨鳄上的暗潮骑士。有关教团成员的具体数值，请参见第7章。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[29],confidence:"high",needsReview:!1,extractorNotes:"德萨林谷探索规则属于谷地总览，不属于红松镇商铺。；overlay覆写:locationId/_meta"},dmGuidance:`当玩家角色出发前往另一个地点时，他们要么知道如何到达那里，要么不知道。
有关荒野旅行的更多信息，请参阅城主指南第5章"冒险环境"。`},{id:"scn_0b4",locationId:"loc_047",name:"山谷地点",activation:{condition:{type:"always"},priority:0},skeleton:["Dessarin Valley已经成为通往Sword Coast North腹地的一条长期使用的高速公路，已经有一个世纪又一个世纪的历史，它见证了许多兽人部落的破坏，一个矮人王国的兴衰，频繁的强盗团伙，等等。","探险家们在探索Sumber Hills及其周边地区时，可能会在穿越山谷的过程中访问许多有趣的地点。","安普海尔位于长路之上，距离深水城北边大约三天的马程。","这个城镇是以安普海尔公正者的名字命名的，他是深水城早期的军阀之一，据说他的灵魂形态出没在周围的山丘中，吓跑怪物。","这里饲养和训练马匹，富有的深水城人在这里的山丘中拥有隐秘的庄园，而且农田非常充足。"],flesh:`Dessarin Valley已经成为通往Sword Coast North腹地的一条长期使用的高速公路，已经有一个世纪又一个世纪的历史，它见证了许多兽人部落的破坏，一个矮人王国的兴衰，频繁的强盗团伙，等等。探险家们在探索Sumber Hills及其周边地区时，可能会在穿越山谷的过程中访问许多有趣的地点。

安普海尔位于长路之上，距离深水城北边大约三天的马程。这个城镇是以安普海尔公正者的名字命名的，他是深水城早期的军阀之一，据说他的灵魂形态出没在周围的山丘中，吓跑怪物。这里饲养和训练马匹，富有的深水城人在这里的山丘中拥有隐秘的庄园，而且农田非常充足。到处可见成片的暗暮木和云杉树。

在镇广场的一角矗立着伟大的沙朗，这是一尊很久以前在安普海尔培育出的著名战马的黑色石雕像。这匹被恶作剧者阉割的腾跃马经常被精神饱满的当地人涂上鲜艳的颜色。孩子们被允许向站在雕像上的鸟儿投掷石块，以保持其清洁。孩子们经常自己爬上去，危险地挂在高高的倾斜马鞍上，挥动着手臂，指挥想象中的军队投入战斗。在雕像不远处是鹿角酒杯，一个舒适的酒馆。

Great Shalarn是一个留下神秘信息的热门地点，这些信息要么塞在雕像的后蹄下，要么滑进它尾巴的雕刻卷曲之间。

曾经是山顶的路边客栈，这个地方已经变成了一个有围墙的社区，由破旧且经常重建的木制塔楼和建筑物组成，现在完全覆盖了一个俯瞰河流对面沃姆福德村庄的山丘。

驳船匠客栈散发着粪便和污泥的恶臭。这里有铁匠、买卖马、骡子和牛的商人、车轮匠、桶匠和马车制造商。它有旅馆、马厩和仓库，以及两圈高高的保护墙和夜间紧闭并上闩的大门。（个人可以支付高额费用在日落后通过绳索吊椅被升降，但他们携带的东西不能超过他们能携带的。）

几年前，Bargewright Inn受到了散塔林会的影响。该派系的任何成员或盟友都能在其墙内找到一个谨慎的欢迎（以及少数或低费用）。散塔林会对每个人进行间谍活动，甚至彼此之间（或者正如一位商人所说，"尤其是彼此之间"）。Bargewright Inn由商业所有者的财阀统治，其中大多数人被散塔林会收买。非官方领袖是Chalaska Muruin（女性Damaran人类老兵），简洁、冷眼的"高级剑客"和门卫的主人。

最大的旅馆，老酒保，最近被重建为一座坚固的石头结构，有厚墙、秘密通道和私人房间，这些房间通过封闭的通道与附近房间隔开。旅馆老板纳拉斯库尔·塔兰（男性半精灵间谍）仔细监视着进出他的旅馆的人；这是散塔林会人聚集在一起，在深水城进行非法交易的地方，比如走私商品、毒药和某些魔法。

瑟隆德是散塔林会在当地领袖，并且是与该派系有联系的角色的关键联系人。这也是两条支线旅程"漫长的道路"和"新管理"的起点。

Beliard 由于其众多树木而成为德斯拉林谷中看起来较为宜人的村庄之一，是当地牛倌的市场集会地。它位于德斯拉林路与石径的交汇处。

Beliard是许多牧场主的家园，他们的牛群在周围的山丘上漫游，特别是东部。这个村庄提供了一个公共井，还有一个池塘，可以驱赶马或牛穿过水来给它们洗澡，驱赶苍蝇，并让它们饮水。这里还是一个制革工、一个铁匠、一些马匹经销商和训练师的家园，他们拥有广泛的马厩，以及一个客栈：历史悠久、受欢迎、多次扩建的警惕骑士。客栈最初是以公共房间里的一个不能运作的恐怖铠甲雕像命名的，但这个生物在几年前神秘消失了。客栈老板在那之后不久也失踪了。

近年来，曾在深水城和中心地带贸易路线上活跃的保镖和雇佣兵退休到了贝利亚德，他们的存在使得附近的强盗不愿直接袭击这个村庄。由于许多大城市的人都在这里定居，有关在贝利亚德各处埋藏或以其他方式隐藏的宝藏的谣言持续不断，但除了在一个烟囱后面用石头封存的一袋金币之外，至今还没有发现其他任何东西——至少没有成为公众所知的东西。

Beliard 是人们最后一次看到来自 Mirabar 的失踪代表团的地方（在 第三章 中描述）。

在区域地图上特别标记了两个邪教营地。这些在冒险的事件和邪教反应中发挥着作用。

这是惩罚者哈扬的营地，在第5章的"元素之怒"部分有描述。这个营地仅在角色击败了空气先知和水域先知，或者迫使它们从各自的圣殿撤退后才会出现。

这是水教劫掠者的营地，如第3章"初步调查"部分所述。这个营地只在角色击败Jolliver Grimjaw（第三章）或戈尔·碎骨（第四章）之前存在。

Goldenfields 是一个巨大的有围墙的寺庙农场，致力于农业女神 裳缇亚。被称为"北方的粮仓"，这是许多北方人唯一能够品尝到比灌木浆果更大的多肉水果的原因。深水城、Secomber、Yartar 以及更远的地方都消费着寺庙可靠的产出：精心管理的谷物和仔细保存在巨大的储藏地窖、大桶、干草堆和矮胖的石头粮仓中的干燥、油封或盐渍食品。

现在的管理者是艾勒丁·达罗维克修士（男性泰瑟里人类祭司），金田是翡翠联盟的堡垒。那个派系的成员和裳缇亚的神职人员一样受到欢迎；他们中的许多人会在这里住上几个月，帮助工作，警惕地保卫农场，防止昆虫和病害，以及可能的破坏者和掠夺者。雇佣的冒险者们巡逻城墙和周围地区，监视任何接近的人。有五千多人全年在金田生活和工作，耕种着超过二十平方英里的农田，由勤劳的园丁们组成的团队。

Goldenfields的客人永远不会饿着离开，农民祭司们期望每个人都应该带着'足够十天或更长时间在路上的食物，以及未来的种子'离开。

Darovik 对于与翡翠联盟有联系的角色来说是一个有用的联系人。Goldenfields 也是失踪代表团的预期目的地，尽管他们显然从未到达。

这些被怪物出没的废墟曾经是盾矮人王国Besilmer中的一个宏伟而重要的城市。旧城是一个由石头圆屋组成的小森林，与花园交织在一起，并通过墙壁连接成一个庞大而蔓延的建筑。它被一个由地下泉水供给的护城河所环绕；无论人们转向何方，英勇矮人的华丽石雕都站在高高的基座上。现在除了最厚、最高的墙壁的基础外，这座巨大建筑的所有痕迹都已消失，这些墙壁的基础像石头牙齿的线条一样从树木和藤蔓的灌木丛中突出。几个世纪以来，曾经装饰大厅的壮丽彩色玻璃窗的碎片已经进入当地吹制的美丽而独特的玻璃瓶中。

附近贝利亚德的故事警告说，有掠食性生物潜伏在广阔的废墟中。尽管有冒险团队和决心夺回并探索废墟的矮人不断进行探险，大厅很少长时间空无一人。因此，旅行者通常会绕开狩猎斧大厅。

许多矮人和大多数当地的竖琴手相信，贝西尔默的创始人，国王托希尔德·焰舌，和他的传奇巨斧一起被埋葬在大厅的某个地方。（这个谣言是真的。）一些矮人传说更进一步，说皇家陵墓很久以前就被矮人故意封死，任何打扰托希尔德安息的人都会遭受可怕的诅咒。

角色们有机会在第6章的"狩猎斧大厅"支线旅程中探索托希尔德的墓穴。

在苏姆伯丘陵的西南部，有四座由一群冒险家——银角骑士团在几个世纪前建造的破败堡垒。根据大多数当地人的说法，这些摇摇欲坠的石城堡被鬼魂和潜行的怪物所困扰。明智的山谷居民会避开它们。

近年来，四个元素邪教已经接管了这些堡垒。邪教徒们小心地保持好奇者在他们的墙壁之外——或者确保那些了解到真相的访客要么加入邪教，要么从他们的访问中永远不返回。

这四个地点是冒险的核心（见 第三章），也是角色直接面对邪恶元素邪教的地方。

这里是华丽的Feathergale Society的所在地，这座高大的石塔坐落在一个高处，可以俯瞰Sumber Hills的壮丽景色。任何穿越山丘的人都可以从远处看到它，它被一个由富有的Waterdhavians组成的精英骏鹰飞行俱乐部用作私人休养所，他们自称为Feathergale Knights。这些"骑士"塑造了一个大胆的形象，喜欢喝酒、唱歌、穿时尚的衣服和一般的欢乐。该俱乐部是Howling Hatred邪教的掩护。邪教战士监视周围地区，但不打扰靠近尖塔的旅行者。他们目前希望避免引起对他们活动的注意。

这个"堡垒"实际上是一个古老的石头寺庙，建在苏姆伯丘陵南部边缘的一个岩石山谷中。它最近重新作为圣石修道院而诞生，是一群隐居的僧侣的家园，他们致力于一种神秘的"圣石之道"，整个费伦的智者们从未听说过，因为它仅仅是黑土邪教的一个掩护。

这座修道院是土之邪教的地表要塞，同时也是通往其下方黑土神庙的守卫入口。所有的僧侣都是土之邪教的信徒，他们非常清楚修道院的真正性质。

位于苏姆伯丘陵深处的荒野中心，赤月大厅是赤月之环德鲁伊的居所。对于德萨林谷的居民来说，这是最神秘的鬼堡之一。它位于苏姆伯丘陵的深处"那里有最糟糕的怪物"——因此当地的猎人、探矿者、草药采集者和伐木工人很少靠近这个地方。

赤月大厅暗中是永恒烈焰教派的要塞，这些元素火邪教徒伪装成德鲁伊，同时他们在寻找新的追随者。

这座坚固的城堡位于Dessarin River河畔。它由一个石头主楼和门楼组成，通过围墙连接到河边的塔楼和码头。

河岸堡是一支由"城堡领主"乔利弗·碎颚率领的雇佣兵团所在地。该兵团正在修缮这座古老城堡，而更换屋顶是他们当前的主要任务。他们声称其意图是将河岸堡作为基地，保护河道贸易免受怪物和匪徒侵扰。实际上，碎颚及其追随者本身就是匪徒，河岸堡暗地里是碎波邪教的要塞。

在Westbridge的西北方向，森林边缘矗立着Helvenblade House，这是深水城的Silmerhelve贵族家族的主要乡村庄园。它包括一个设防的庄园主楼、马厩、客房别墅以及两个通过草坪小径相连的狩猎小屋，这些小径环绕着一个食物和草药花园以及一个小型草坪。一个大型、树木稀疏的狩猎保护区从庄园延伸数英里。

Silmerhelves 家族大约每年来访六次，其余时间这个宁静的庄园就交给住家员工照料。Helvenblade 从未被土匪侵占或遭受其他破坏；仆人们将此归功于"家族鬼魂"的保护。实际上，一只名叫 Umsheryoth（成年雄性 青铜龙）的秘密守护龙保护着这座房子，并且几代以来一直是 Silmerhelves 家族的朋友。

赫文布雷德家族提供了一个从元素邪教的阴谋中解脱的机会，而"家族鬼魂"可能证明是一个不寻常但强大的盟友。

尽管与古代边界相比已经大大缩小，高森林仍然是辽阔而神秘的。它比一些王国还要大，足以在其深处包含山脉。这里是巨大树精、鹿角宽如马车的雄鹿、比大谷仓还要大的棕熊、枭熊、狼和独角兽的家园。伐木工人甚至逃亡的歹徒也只敢访问高森林的边缘。众所周知，那些深入森林的人很少再被看到。

位于高森林西北部的暗影顶大教堂，是一片高耸的暗影顶树林，是翡翠联盟的重要会面地点。联盟的敌人必须经过战斗才能到达那里，但成员们可以在这片树林中轻松找到帮助、治疗和建议。

暗影顶大教堂是翡翠联盟的关键基地。此外，来自树灵乌斯加德部落的角色称高森林为家。

Dessarin Valley上散布着许多孤立的农舍，但只有少数在冒险的支线任务中出现的农舍在区域地图上显示。本章前面随机遭遇表中还出现了其他农舍。即使是Dessarin Valley的终身居民也不知道所有偏远农场和牧场的确切位置，穿越乡村旅行的角色可能会在任何地方偶然发现孤独的农舍或偏远的牧场。

由于农舍是永久性建筑，在角色随机发现一个时，在区域地图上做一个标记。

农庄通常包括一个带有厚百叶窗的农舍和一扇门闩，一两个装有牲畜的谷仓，一个饲料箱，以及附近的庄稼或牧场。大多数农庄主是人族或半身人的平民。他们乐于欢迎旅行者（特别是看起来像是试图赶走歹徒和怪物的冒险者），并且渴望得到消息。农庄主通常可以指路到最近的城镇或邻近的农庄（通常在一两个六边形内就有另一个农庄）。

（这些俘虏目前被关在Sacred Stone Monastery下面的奴隶围栏里。）此外，Anderil Farm、Dellmon Ranch和Nettlebee Ranch这三个农场在支线任务中被提及，并在区域地图上标出。

克里普特加登森林隐藏着许多古老的矮人遗迹和现在被称为南克里普特的广阔地下城市。几个世纪以来，这片森林一直是古老雌性绿龙克劳吉亚利亚马塔的家园和狩猎场，许多人更熟悉她的另一个名字——"老啃骨"。她之所以得到这个绰号，是因为她有啃食旧猎物的习惯，人们经常看到她嘴里挂着一具破烂的尸体。其他龙很少在克里普特加登森林停留太久，因为克劳吉亚利亚马塔会将它们赶走。

来自西桥的猎人过去常常谨慎地在克里普特加登的最东边寻找猎物，但现在不再这样做了，因为有几个狩猎队伍消失了。小型猎物仍然丰富，但大型野兽很少见到。据推测，这样的野兽可能已成为老啃骨（Old Gnawbone）的猎物。

兰斯岩是红松镇附近一个显著的地标，是一根细长的石柱，从长路以西几英里的平原上突兀而出。它只有大约25尺高，但附近的土地平坦开阔，所以在晴朗的日子里，从几英里外就能看到它。兰斯岩由花岗岩制成，与附近任何其他石头都不匹配，看起来像是从天而降——确实如此。很久以前，被称为"老啃骨"的古老绿龙Claugiyliamatar，从剑山取来这块巨大的石头，扔向了一个对手的红龙。红龙的骨头早已消失，除了Claugiyliamatar之外，很少有人知道这块石头的起源。

调查兰斯洛克附近有关瘟疫的谣言的角色可能会发现附近有一个死灵法师的巢穴。

无冬城位于剑海岸，位于德萨林谷地的西北方。曾经被誉为北方的宝石，无冬城城在大约五十年前附近的霍特诺火山爆发时遭到了严重破坏。技艺之城正在疯狂地重建自己，作为一个以钟表和其他精美本地制品而闻名的富裕贸易城市。然而，无冬城的重建远未完成。整个城市的部分地区仍然处于废墟之中，被强盗和怪物困扰，邪恶的派系图谋接管这个地方。

无冬城是称为领主联盟的城市国家联盟的一部分。Lord Dagult Neverember统治着这座城市，尽管他不是无冬城王冠的真正继承人。他支持联盟在北方建立文明的努力，尽管他的主要关注是重建城市及其经济。

从德萨林谷地到无冬城最直接的路线是沿着从特里博到小镇潘达林的小径向西走（大约140英里），然后沿着海岸公路再向北走大约110英里左右。熟悉路线、轻装上阵、驱使耐力强的坐骑的骑手可以在短短八到九天内完成这次旅行。

在俯瞰长路的山顶上，距离安普海尔东北不到一天的路程，矗立着破败的伦德莱斯庄园。这座曾经宏伟的石头宅邸现在没有屋顶，杂草丛生，是众所周知的神秘而可怕的"黑暗女士"的居所。当地人警告每个人远离废墟。

故事的真相是，'黑暗女士'是一只名为Nurvureem的成年雌性黑影龙，她在庄园下面的洞穴中建立了巢穴。她最喜欢的形态是一位美丽的黑暗精灵女性。在这种形态下，Nurvureem诱使冒险者进入庄园并跟踪他们。她有时伪装成一只被龙俘虏的黑暗精灵，急切地希望避免被吃掉，并愿意用她的财宝来换取被救援。竖琴手们已经知道了她的秘密，并尽最大努力传播关于黑暗女士的故事，以吓跑好奇或鲁莽的冒险者。他们警告同伴成员要非常小心地接近Nurvureem。

近几个月来，Nurvureem一直被寻找潜在基地的元素教徒骚扰。她将他们撕碎的尸体留在道路上供所有人看到，希望向教徒们明确表示他们应该远离伦德莱斯庄园。

在第六章中的一次支线探险发生在伦德莱斯庄园，角色们有机会面对黑暗女士，也许能找到共同对抗邪教的原因。

这座巨大的石拱门（两英里长，四百尺高）轻松地横跨了德萨林河最宽的春季洪水。它是许多矮人的圣地朝圣之地。很久以前，矮人之神摩拉丁出现在石桥顶部，号召铁星族的矮人对抗一群兽人。贝西尔默的创始人，国王托希尔德·火舌，在石桥顶部与一个山巨人战斗时牺牲。（他被安葬在狩猎斧大厅内。）

石桥是为了连接位于德萨林河东西两岸的矮人王国贝西尔默的各个部分而建造的，由光滑、熔合的硬花岗岩制成。它只有六步宽，没有栏杆或障碍物，所以任何站在上面的人都只能任凭风摆布，特别是在冬天。

石桥是铁渡口和亚塔之间德萨林河上唯一的过河点；旅行者和商队经常（小心地）使用它。

桑伯丘陵是风吹拂的荒地，稀疏地覆盖着干草。许多丘陵露出岩石表面或陡峭的悬崖。尽管丘陵干燥，但无数细小的溪流从隐藏的泉水中涌出（通常干净可饮用），然后流下汇入德萨林河，该河流将丘陵一分为二。

当当地人听到"桑伯丘陵"时，他们通常只会想到河流西侧更加荒凉、更高的丘陵，因为那里曾经有富饶的采石场和良好的狩猎场。一些由富裕的沃特德普人或冒险者拥有的狩猎小屋和堡垒仍然存在——并且最近已经变成了匪徒和怪物的家园。那些在桑伯丘陵开采建筑石材和砾石的人经常交易关于在丘陵中发现宝石和富矿脉的故事——但大多数情况下，这些持续流传的故事从未超出过空谈。

在过去的几年里，位于桑伯丘陵西部的臭名昭著的"鬼堡"都已经重新被占领。奇怪生物和威胁性身影的出现也有所增加。

在冒险的第三章中，角色们可能会在桑伯丘陵四处奔波，寻找那些闹鬼的堡垒。

峰会厅很久以前由萨穆拉骑士团建立，作为一个设防的修道院，该骑士团致力于正义之神提尔。一位名叫萨穆拉·卡拉敦的提尔圣武士创立了这个修道院和它的骑士团。修道院内的一座墓穴包含萨穆拉的遗体，以及他兄弟兰维柯卡拉敦的护符匣，后者作为巫妖居住在圣石修道院（见上文的"鬼堡"）。

尤希恩·风暴旗帜女士（女性泰瑟里安人类骑士，提尔的信徒）监督着峰会厅。许多经验丰富的老兵，他们中的许多人身上带着疤痕，表情严肃，训练新手并向他们传授道德上的"骑士规则"（一系列详尽的"在这种情况下，骑士应该这样做"的指导方针）。这里的生活非常严格规范。峰会厅的居住者自己种植食物，并且不断地监视附近的土地。他们随时准备战斗，如果在他们的城墙外遇到，总是全副武装。

追踪从贝利亚德来的米拉巴代表团的角色会发现，代表团从未到达峰会厅。元素教徒袭击代表团的地点仅在几英里之外。在冒险的后期，与战拳团有联系的角色可以求助于萨穆拉骑士团，招募守卫他们清理过的地方或其它"镜头外"需要低级士兵的需求。

特里博镇位于长路与永恒沼泽路的交汇处，永恒沼泽路是一条通往东部城市亚塔尔的常用商队路线。特里博是亚塔尔的主要竞争对手，两个社区为争夺德萨林谷地的贸易而竞争。

现任守护领主是一位性情善良的竖琴手和前冒险者，名叫达拉斯拉·珊德瑞尔（女性泰瑟里安人类骑士），以其制作的优质葡萄酒而闻名。Darathra 制定并修改当地法律（被称为"领主法令"），然后由"十二人"，一群来自民兵的骑马老兵执行，他们每十天轮换一次，负责执行这些法令。

特里博是附近十几个牧场的马市，这些牧场出产训练有素的挽马、坐骑和驮马，以及驮骡。铁匠、马具制造商和车辆制造厂在镇上蓬勃发展。此外，还有许多向导从特里博出发。他们带领商人和其他旅行者前往剑海岸北部（通常收费不菲）。这些向导中有许多是退休的冒险者，他们对北部地区非常熟悉。

一位名为格沃尔的半精灵冒险者及其同伴近日失踪。这些冒险者曾在镇上逗留，当地居民本期待他们十天前就该归来。此外，来自深水城的两位重要商人——哈洛斯与贾里——也已逾期未归。（目前格沃尔被囚禁在黑土神殿的区域B14中，而两位深水城人则被烈火邪教徒在长路上掳走，现关押在哭泣巨像的区域W6。）

任何竖琴手都可以在镇郊的野猪之家找到庇护和帮助，这是一个小屋。Darathra是与竖琴手有联系的角色的关键联系人。散塔林会在镇上也有间谍，其代理人可能会在第6章的'漫长的道路'支线探险过程中与角色联系。

在矮人语中被称为Tyn'rrin Wurlur，这条狭窄的峡谷携带着三条小溪流经瀑布般的水流汇入德萨林河。这个山谷位于河的西侧，位于石桥以南的秘密小径尽头。

很久以前，这个山谷是矮人王国贝西尔默的国王托希尔德·火舌的夏宫所在地。随着时间的推移，它成为了一个神圣的地方，矮人们来到这里崇拜他们的神灵。壮族中的一些传说说，古老宫殿的地窖隐藏着贝西尔默皇家国库的财富。（实际上，宫殿很久以前就倒塌了，但神殿仍然存在。）最近在桑伯丘陵出现的怪物和漫游的掠夺者团伙让守护神殿的盾矮祭司感到惊慌。他们担心敌人可能找到通往隐藏山谷的路。

战拳团在这里的矮人中有盟友，角色们可能被要求在"舞水谷"的支线探险中查看他们的情况。

辉煌之城是剑海岸上一个繁华的城市。从红松出发的骑手可以在七天内到达深水城，如果经常更换马匹并且敢于夜间骑行，则只需三天。一些商人称深水城为"世界上最好的供应中心"，拥有最大规模的卓越工匠、专家、有用的联系人以及任何地方都能找到的潜在雇员。另一些人警告说，对于那些不小心的人来说，它代表着一个巨大的潜在敌人大军——而且所有人都同意，它繁忙的街道上充满了间谍。

深水城的贵族家族和行会对剑海岸的政治和经济有着巨大的影响力，但在城市本身，真正的权力掌握在深水城的蒙面领主手中——这些人秘密集会，他们的身份大多不为人知。这个统治机构的公众面孔是深水城的开放领主。现任开放领主，莱拉尔·银手，担任此职位只有几个月，城市中许多贵族和行会首领正在争夺她的注意，并密谋从她的办公室夺取权力，同时利用过渡期来除掉不想要的对手。对大多数城市居民来说，这种政治混乱是'家常便饭'。

需要稀有物品、智者建议或其他只有在大城市才能找到的服务的角色可能会说"我们要去深水城。"

西桥是一个沿着长路延伸的村庄，位于红松和特里博之间。西桥是丰收客栈的所在地，客栈位于长路的西侧，面向石桥方向的马车路。客栈由亲切的赫里文·达格龙（男性半身人平民）经营，他是一个卷发的收藏家和转售商，专门买卖品味可疑的绘画和小雕像。

这个镇上充满了关于奥里克和拉特娜失踪的谣言，他们是一对兄妹，被来自城外不远的农庄的袭击者绑架了。（他们目前在河园要塞的厨房里服务。）赫里文·达格龙也担心他的一位常客，一位名叫沃尔格雷达的女性盾矮人勘探者。她已经有很长时间没有来过了（她现在是黑土神庙的囚犯）。

当邪教徒为了报复角色们的行动而采取行动时，西桥成为了目标。角色们可能会在第4章的"不祥的预兆"反击之后，或者在第5章的"绝望议会"事件之后来到西桥。

这些森林覆盖了剑山的东部山麓，是一个错综复杂且多样的地区。森林中有一个供奉梅丽凯的神殿，一些经常被匪徒季节性或几个月一次强行占领的伐木工人的营地，以及一些古老精灵王国里利萨的杂草丛生的废墟。

最近，一支游牧的麋鹿部落野蛮人（见下文的"乌斯加德部落"）来到了西林。他们强行驱逐了最深处伐木工人营地的匪徒，然后自己在那里扎营，以便在西林探索和狩猎。

麋鹿部落和冒险者有共同的敌人：元素邪教。尽管角色们很难赢得野蛮人的信任，但他们可以从他们那里获取有用的信息。麋鹿猎人对桑伯丘陵非常熟悉，并且可以提供基于地标的简单方向指引到两个邪教据点：河园要塞和赤月大厅（尽管他们不知道这些地点的名称）。

这个小村庄在德萨林河上有一个码头，用于运输其磨坊的谷物。它也是周围农场的本地供应和市场，谷物就来自这些农场。除了磨坊，村庄由少数几个粮仓和更多的小屋组成，其中一些小屋设有小型本地商店。根据古老的传说，直到附近有一条龙被杀死之前，这个村庄被称为铁渡口。过路的人开始称这个定居点为"龙渡口"，由于当地浓重的口音，这个名字随后被误读为"沃姆福德"。

由于位于德萨林河上，沃姆福德成为了邪教活动的中心，这些活动只是被薄薄地掩饰起来。与水教有联盟的河流海盗和走私者经常在镇上的码头停靠。每当有一艘龙骨船在码头停靠时，地痞和暴徒似乎就会接管这个村庄。实际上，一些当地人已经加入了走私者的行列——三个年轻的不良青年名叫戈尔姆、赫雷克和沙德尼尔一个月前启航加入了他们。（他们现在是河园要塞厨房的仆人。）

温佛德的居民夜晚会锁上门闩、紧闭窗户，因为他们害怕那被称为"温佛德蝙蝠"的夜行掠食者——这种生物会抓走天黑后仍在户外的落单者。十天前，一位名叫达雷斯的村民就在自家门前几步之遥消失无踪。（实际上他是被水之邪教徒绑架，此刻正囚禁在区域F21中）

在调查失踪代表团的过程中，试图追溯神秘书籍起源的角色可能会来到沃姆福德，并与沃姆福德老鼠打交道，如第三章所述。

这座设防的城市控制着德萨林河上最北边的马车桥。河西侧的一个有围墙的城堡连接着一座足够宽以容纳两辆马车还有余地的桥，将永恒沼泽路连接到并通过亚塔尔。这条路向东通往埃弗伦和银月城，向西通往特里博，最终通过长路到达深水城。

亚塔尔繁荣且日益拥挤，因此建筑物被拆除，更高大的建筑被建造起来——有些建筑高达四层。

统治一生的水领主统治着亚特塔。现任水领主是精明、有远见的内斯特拉·鲁西奥（女性特提里安人类贵族）。亚特塔是领主联盟的一部分，鲁西奥认为其成员身份对其生存和繁荣至关重要。她知道哈珀斯和散塔林会在城市中根基深厚，但只有当亚特塔人的福祉受到威胁时，她的路才会与他们相交。

元素教派已开始绑架那些不会被注意到的雅塔兰人——主要是穷人和醉汉——并将他们偷运出城。这些失踪的雅塔兰人目前被关在嚎叫憎恨神殿的区域A12（详见第四章）。

"雅塔尔的黑暗交易"这条支线任务将角色带到这里。更广泛地说，隶属领主联盟的角色可以轻松在雅塔尔获得支持，而竖琴手同盟和散塔林会的成员如果处事谨慎并知道如何联系城中的代理人，也能得到帮助。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_renwick","npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[31],confidence:"high",needsReview:!1,extractorNotes:"谷地地点总览归德萨林谷地。；overlay覆写:locationId/_meta"},dmGuidance:`如果队伍再次经过，它应该在同一个位置。
如果角色与Sumber Hills东部地区的居民交谈，他们会得知穿着棕色斗篷的袭击者洗劫了几座农场，并把居民带走了。
如果角色需要大城市的服务和商业，而深水城出于某种原因不行，那么无冬城是下一个最好的选择。`,mapGeometry:{imageRef:"adventure/PotA/020-poa02-06.webp"}},{id:"scn_0ff",locationId:"loc_047",name:"乌瑟加德部落",activation:{condition:{type:"always"},priority:0},skeleton:["德萨林谷附近地区的大多数人类野蛮人属于不同的乌特加德特部落。","他们的名字来源于乌特加，一位在许多世纪前征服了北方大部分地区并最终升为神明的伟大英雄首领。","每个部落都崇拜自己特定的图腾动物，并保护自己的圣地，这些地方被称为祖坟。","一些乌特加德特人相对定居，并与该地区的文明人进行贸易，而另一些则是侵略性的掠夺者，他们会掠夺他们遇到的任何商队或农庄。","德萨林谷附近的主要部落包括麋鹿、灰狼、狮鹫和树魂。"],flesh:`德萨林谷附近地区的大多数人类野蛮人属于不同的乌特加德特部落。他们的名字来源于乌特加，一位在许多世纪前征服了北方大部分地区并最终升为神明的伟大英雄首领。每个部落都崇拜自己特定的图腾动物，并保护自己的圣地，这些地方被称为祖坟。一些乌特加德特人相对定居，并与该地区的文明人进行贸易，而另一些则是侵略性的掠夺者，他们会掠夺他们遇到的任何商队或农庄。

德萨林谷附近的主要部落包括麋鹿、灰狼、狮鹫和树魂。灰狼和狮鹫部落的人以勇猛的战士著称，但他们很少会游荡到南方的苏姆伯山丘。树魂是一个隐居的群体，他们在高森林中漫游；有时可以在苏姆伯山丘和森林边缘之间的山谷中看到这些野蛮人，但他们是较为和平的部落，很少扰乱这个地区的定居者或旅行者。

属于麋鹿部落的乌特加德特人将德萨林谷的大部分地区视为自己的领地。麋鹿战士的小队在西林、苏姆伯山丘以及德萨林河和苏布林河周围的丘陵地带漫游。由于他们的人数相对较少，麋鹿野蛮人远离该地区的城市和城镇。然而，他们经常攻击那些在偏远小径上、远离援助的防守薄弱的商队。部落成员通常不会骚扰像农场主和牧羊人这样的贫穷劳动者，尽管如果有机会，他们有时会偷走羊或其他牲畜。`,spotlightRefs:[],presentNpcIds:["npc_darathra_shendrel","npc_maegla_tarnlar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[39],confidence:"high",needsReview:!1,extractorNotes:"乌瑟加德部落背景归德萨林谷地。；overlay覆写:locationId/_meta"},mapGeometry:{imageRef:"adventure/PotA/022-poa02-08.webp"}},{id:"scn_100",locationId:"loc_100",name:"萨姆伯山丘的秘密",activation:{condition:{type:"always"},priority:0},skeleton:["冒险从红松镇开始，角色们调查来自米拉巴的代表团失踪事件。","角色们可以自由前往他们所获得的信息指引的地方，这些信息由您提供。","线索将他们引向苏姆伯山丘的鬼魂要塞。","这些古老的堡垒已成为邪恶元素教派的秘密前哨。"],flesh:"冒险从红松镇开始，角色们调查来自米拉巴的代表团失踪事件。角色们可以自由前往他们所获得的信息指引的地方，这些信息由您提供。线索将他们引向苏姆伯山丘的鬼魂要塞。这些古老的堡垒已成为邪恶元素教派的秘密前哨。",spotlightRefs:[],presentNpcIds:["npc_deseyna_majarra","npc_shoalar_quanderil"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[40],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/PotA/023-poa03-01.webp"}},{id:"scn_101",locationId:"loc_100",name:"失踪的代表团",activation:{condition:{type:"always"},priority:0},skeleton:["数月来，邪恶元素教派一直在德萨林谷建立自己的地位，而没有引起太多注意。","两星期前，情况发生了变化，当一支来自米拉巴城的重要代表团在苏姆伯山丘失踪了。","代表团从西桥出发，经由陆路前往贝利亚德，穿过石桥。","从贝利亚德向南进入桑伯山，前往山顶大厅。","土元素邪教徒在离山顶大厅几英里处袭击了这个团体。"],flesh:`数月来，邪恶元素教派一直在德萨林谷建立自己的地位，而没有引起太多注意。两星期前，情况发生了变化，当一支来自米拉巴城的重要代表团在苏姆伯山丘失踪了。

代表团从西桥出发，经由陆路前往贝利亚德，穿过石桥。从贝利亚德向南进入桑伯山，前往山顶大厅。土元素邪教徒在离山顶大厅几英里处袭击了这个团体。邪教徒将俘虏带回圣石修道院，并支付水元素邪教徒使用他们的河船渡过德萨林河，这就是代表团的财物最终到达沃姆福德的原因（参见"红松镇的谣言"）。在返回基地的路上，土元素邪教徒与风元素邪教徒发生了小规模冲突，这解释了本章后面的"浅坟"部分。

在他们抵达神圣之石修道院后，代表团的一些成员被派去矿场工作。其他人则被送往黑土神庙（详见第四章）。

最近也出现了其他麻烦，包括一些可能直接影响角色的问题。根据角色之间的派系、背景和动机来调整引言。

如果你在 第六章 中的入门冒险中开始了这个战役，提醒玩家关于在移动之石墓穴中从拉拉克身上找到的、在密拉巴铸造的贸易条。

五个派系知道代表团已经逾期，并且足够关心以至于派遣代理人进行调查。与这些派系有关联的角色被联系并被请求提供帮助。私下告诉每位玩家，他或她的派系为什么关心失踪的代表团。每个派系的确切原因如下所述：

代表团中包括一位名叫布鲁登塔的著名盾矮人历史学家，他正在将他的手稿收藏运送到深水城。哈珀组织不希望这位贤者或他的书落入错误的手中。

三位来自联盟城市的重要外交官领导着代表团：一位来自银月城的月精灵名叫特雷希尔，一位来自米拉巴的盾矮人名叫伦多斯，以及一位来自深水城的人类贵族名叫德塞娜·马贾拉。这些外交官很重要，但每个人还携带着一份必须不惜一切代价回收的秘密、加密文件的一部分。

月精灵特雷希尔拥有一袋魔法种子，她正将它们带到离红松镇不远的金田修道院。据说，这些种子一旦种植，将生长成一片魔法树林。

代表团还在运送一位在世界之脊与兽人战斗时牺牲的骑士的遗体。这位骑士本应在位于苏姆伯山丘东南部的峰顶大厅，一个名为萨穆拉骑士团的分会，以荣誉的方式安葬。

散塔林会并不特别关心代表团本身，但他们看到了一个有趣的机会，通过营救失踪的代表来赢得米拉巴领导人的感激。因此，一个散塔林会角色希望通过伸出援手来证明黑暗网络的诚意。

不属于这五个派系的角色可以根据自己的主动性寻找失踪的代表团，或者可能受到他们个人行动号召的激励。一个失踪代表团的谜团可能看起来与角色带到冒险中的任何个人目标没有直接联系，但话说回来，它可能就是线索。

红松镇在第二章中有详细描述。花时间与当地人交谈的角色可能会获得线索或学到一些有用的东西。了解失踪代表团最新谣言的最佳地点是镇上的酒馆（高阳头盔）、镇旅馆的公共休息室（摇摆剑）或商店（盖尔库尔）。

在红松镇及其周边询问一个晚上，可以揭示以下谣言。

米拉巴代表团最后一次被看到是在贝利亚德镇。这条消息来自高阳头盔酒馆的一名商队守卫，以及一位刚从贝利亚德来的拉瑟达游方牧师在摇摆剑旅馆。

一打用矮人语写成的美丽古老书籍出现在沃姆福德一个可疑的平底船船长的货物中。角色们从摇摆剑旅馆喝酒的当地店主恩德里斯·瓦利沃那里听到了这个事实，他最近从一个刚从沃姆福德来的商人那里买了一本书。

苏姆伯山丘上，镇外几英里处，一座风吹拂的山顶上出现了四个新的坟墓——实际上只是一些简单的石堆。牧羊人拉蒙·格林布发现了它们，他不知道最近几天会有谁被埋在那里。拉蒙常在盖尔库尔的店附近。他可以引导角色们到他发现坟墓的地方，但他坚持要等到早上。

一位前往北方长路的阿姆尼亚商人在索斯克·塞尔恩的作坊停留修理马车。他的货物上标有一个奇怪的符号，像一个碗。他给了索斯克丰厚的报酬，并谈到他正前往一个大型德鲁伊集会，希望能销售桶装啤酒和各种小饰品。`,spotlightRefs:[],presentNpcIds:["npc_rhundorth","npc_deseyna_majarra","npc_shoalar_quanderil"],availableInfoIds:["info_pota_missing_delegation","info_pota_four_keeps"],encounterIds:[],treasureSlotIds:[],eventIds:["evt_pota_learn_delegation"],tone:"exploration",_meta:{sourcePages:[40],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`红松镇是长路上的一个小城镇，位于深水城以北几天的路程，雅塔尔以南。它是前往北方城市或从北方城市来的商队的驿站，只有一个旅馆，叫做摇摆剑。
来自米拉巴城的一个重要代表团在附近的苏姆伯山丘失踪了。整个城镇也因为关于凶猛的掠夺者、漫游的怪物、可疑的陌生人和不合时宜的天气的新闻和谣言而沸沸扬扬。`,dmGuidance:`【角色升级】这次冒险假定角色们在本章开始时为3级。一些闹鬼的要塞比其他的要塞更难。羽风尖塔是为3级队伍设计的，河园要塞最适合4级队伍，神圣石要塞是为5级队伍设计的，而赤月厅应该挑战6级队伍。角色们克服的每个前哨站都应该至少提升他们一级。
如果角色们向索斯克提及阿姆尼亚商人，他们可以得到前往赤月厅的方向。`,offerableQuestIds:["qst_main_pota"]},{id:"scn_112",locationId:"loc_100",name:"初步调查",activation:{condition:{type:"always"},priority:0},skeleton:["有了在红松镇的调查中得到的一两个线索（也许还有来自他们个人行动号召的线索），角色们可以开始他们的搜寻。",'询问玩家他们希望他们的角色去哪里，并根据情况继续"贝利亚尔德"，"浅坟"或"沃姆福德的老鼠"。',"要找到一个闹鬼的要塞，队伍必须通过追踪冒险中的事件、使用占卜魔法或系统地搜索苏姆伯山丘来发展线索。","一些或全部的玩家角色可能因为第第一章中的冒险钩子而开始冒险时已经掌握了有用的信息。","这些钩子的关键线索包括以下几点："],flesh:`有了在红松镇的调查中得到的一两个线索（也许还有来自他们个人行动号召的线索），角色们可以开始他们的搜寻。询问玩家他们希望他们的角色去哪里，并根据情况继续"贝利亚尔德"，"浅坟"或"沃姆福德的老鼠"。

要找到一个闹鬼的要塞，队伍必须通过追踪冒险中的事件、使用占卜魔法或系统地搜索苏姆伯山丘来发展线索。

一些或全部的玩家角色可能因为第第一章中的冒险钩子而开始冒险时已经掌握了有用的信息。这些钩子的关键线索包括以下几点：

最佳冷处理：角色从红松镇酒馆的顾客那里听说，一个名为风怪的吟游诗人乐队在羽风尖塔表演。角色知道尖塔的位置。

危险信息：角色知道掠夺者伏击事件发生的地点（见本章后面的"邪教报复"），并且可以前往那里进行干预。

羽风反叛者：角色知道羽风尖塔的位置。

闹鬼要塞的疯子：角色知道河园要塞的位置。

常设报价或奇怪地图：角色知道神圣石修道院的位置。

可疑的家伙：角色知道羽风尖塔的位置，并且听说瑟尔·梅洛斯卡可以在那里找到。

卧底：角色知道Rivergard Keep的位置，并且知道Jolliver Grimjaw负责那里。

这是一个众所周知的地点。

在前往贝利亚德的旅途中检查随机遭遇（见第二章）。

每个人都在谈论来自米拉巴的旅行者，并且想知道发生了什么。有十几个理论在流传，但大多数都没有意义。

内什·弗洛丁，守望骑士旅馆的老板，与代表团的领导们交谈，并得知他们计划沿着德萨林路向南行进。他们打算接下来访问峰顶大厅，归还在北方阵亡的骑士的遗体。

塞尼亚，警觉骑士旅馆的一名服务员，注意到一个戴着金色面具的奇怪僧侣在米拉巴人停留在警觉骑士旅馆时密切观察他们。这位僧侣在代表团出发前几小时离开了，从此就再也没有人见过他。

一位牛群赶运者在城镇以南大约十英里的德萨林路上遇到了代表团，那是他们离开后的几个小时内。那天晚些时候，他看到了一群五个穿着天蓝色盔甲和白色斗篷的战士，他们骑着巨大的秃鹫飞行。这些空中骑士从头顶飞过，转向南方，与代表团行进的方向相同。伊安，一位在警觉骑士旅馆喝酒的牛群赶运者，会把这个故事讲给任何愿意听的人。

贝利亚德的镇长兼首席执法官哈尔鲁德·庞登看起来有些紧张，他告诉角色们，在红松镇不远的羽风尖塔附近，有人看到穿着蓝色盔甲和白色斗篷的战士骑着怪物或巨大的秃鹫飞行。

关于贝利亚尔的奇怪僧侣，没有更多的线索出现。角色们必须继续寻找。

没有人发现这个地方，因为它位于道路之外。直到最近一两天，自然食腐动物才重新回到这个区域，因为元素魔法的残留光环之前一直让它们远离这里。

来自北方的角色认出红色斧头设计是米拉巴的徽章。非本地角色需要通过一次成功的DC 10智力（历史）检定来认出它。一次成功的DC 15智力（奥秘）检定可以识别出这些陨石坑和乱石堆是强大土系魔法的效果。米拉巴的代表们都不在这里，但他们几乎所有的护卫都被杀死了。

大石堆中躺着五具地精的尸体。他们穿着黑色皮甲，上面有一个奇怪的三角形符号（土元素教派的标志）。小石堆中躺着一位穿着僧侣长袍的人类女性尸体，脸上戴着一个形状像咆哮石像鬼面孔的奇怪金色面具（一位在战斗中被杀的神圣石修道院的僧侣）。这个面具由镀锡制成，并没有特别的价值。

一个角色在调查该区域的足迹时，如果成功通过 DC 10 的感知 (求生) 检定，将得知大约三十个熊地精和一些穿着靴子的中型人形生物向西进入了山丘。足迹延伸数英里至荒无人烟的德萨林河岸边，但岸边的划痕显示有几艘龙骨船在此登陆。

角色们在红松镇附近的苏姆伯山丘旅行时，也可能偶然发现这个地点。

如果拉蒙与队伍在一起，他解释说他在附近的山谷放牧羊群，他不到一个月前经过这个地方。他之前的访问时这里没有坟墓。他几天前才发现它们，并且不知道可能埋葬着谁——红松镇的居民没有人失踪，他也不知道还有谁会在这附近。这些山丘大多是无人居住的。

所有人都死于箭伤或重击，赢得战斗的大地教徒埋葬了双方的死者，因为他们相信一切最终都应被大地吞噬。

如果任何角色认真努力地研究周围地区，他们会找到一堆混乱的足迹、一些折断的箭、一个丢弃的标枪和一件破烂的灰色斗篷。

如果被问及，拉蒙会确认远处的塔楼是羽风尖塔。他对这个地方所知甚少，只知道"来自深水城的骑士们有时会骑着飞行怪物来到这里。"他补充说，"他们自己保持距离。"

队伍可能会发现前往米拉巴的代表团是前往峰顶大厅的，并且可能会直接前往那里，而不是从贝利亚德沿着德萨林路走。（如果队伍中有属于战锤骑士团的角色坚持直接前往峰顶大厅，这种情况最有可能发生。）

山巅大厅是大约十二名萨姆拉骑士的居所，这个教团由长期受苦的提尔信徒组成，因神祇的回归而重获活力。他们还接待了另外十二名年轻的见习骑士，以及约十五名仆役和工匠协助维护此地。

最资深的骑士是一位名叫乌希恩·风暴旗帜的六十岁人类女性，她是战锤骑士团的盟友。乌希恩很乐意会见任何出现在她门前的冒险家。她告诉角色们，来自米拉巴的代表从未出现在峰顶大厅，她的战士们搜索了该地区并没有找到他们（两者都是真的）。

如果任何角色提到戴金色面具的僧侣，或者向乌希恩女士展示德萨林路遗址中僧侣的面具，乌希恩会认出它。她可以告诉角色们，这些面具是由神圣石修道会的僧侣所佩戴的。她对他们了解不多，但她可以告诉角色们，这些僧侣已经接管了其中一个古老的闹鬼要塞。她提供了前往神圣石修道院的方向。

大多数镇上的居民都被那些在他们的平底船上进行犯罪交易的恶棍吓倒了。询问"这里有人卖书吗？"或者"我们在哪里能找到河船？"这样的问题很快就会引导队伍前往码头。

三艘平底船中有两艘由平民（普通的河上水手）驾驶。第三艘属于一群水教徒帮派：元素裔 修拉·坎德拉（见第七章），他的仆人Pike（一个半身人暴徒），以及两个忠于元素裔的匪徒们。教徒的平底船长30尺。中间的10尺设有一个小甲板屋，一端有前舱，另一端有开放的船尾。货舱里塞满了普通的补给品，上面标有水教标志。\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0adventure/adventure-pota.json

肖拉尔看起来很高兴，但他有一种尖刻的幽默感，倾向于嘲笑人们而不是和他们一起笑。如果被问及，他否认对来自米拉巴的书籍或代表有任何了解，但他在撒谎。表现出自己是同道中人或潜在新成员的角色可能能够说服他承认"几星期前，我渡了一些不受欢迎的乘客过河，他们怎么付钱不是我担心的事。"威胁或表现得可疑的角色会触发肖拉尔和他的船员的攻击。

肖拉尔携带着一个皮制腰带袋，里面有10金币，三块小孔雀石（每块10金币），以及一瓶治疗药水。甲板屋中的一个箱子里装有五本用矮人语写的书（关于德尔宗古老王国的历史记载），每本价值30金币。甲板屋中的桌子上有一张大图表，上面用手绘的水教标志标记了河园堡的位置。`,spotlightRefs:[],presentNpcIds:["npc_thurl_merosska","npc_shoalar_quanderil","npc_deseyna_majarra"],availableInfoIds:["info_pota_missing_delegation"],encounterIds:[],treasureSlotIds:["trs_112_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`果园和大型牧场环绕着贝利亚德这个小镇。大型的牲畜围场位于城镇的东侧，而沿着德萨林路的石头仓库表明了经常有商队经过。

德萨林路穿过贫瘠的苏姆伯山丘，向南延伸。今天你没有遇到其他旅行者，但你发现了证据表明这条小径经常有人通行——车辙和骡子的粪便证明人们定期走这条路。直到你向南大约十五英里，远离贝利亚尔，你才看到一群乌鸦和秃鹫在小径以西大约一英里的地方盘旋。

在离道路一英里远的一个小山谷中，你发现了战斗的遗迹。一打死去的士兵躺在地上，身穿黑色外衣，上面有红色斧头的标志。大多数人似乎死于战斗伤害，尽管有些人躺在小坑或破碎岩石的堆中。附近有一些被遗弃和被掠夺的马车。马车旁边有几个破碎的箱子。附近山坡上有两个石堆——一个大的和一个小的。

在离红松镇几英里的荒芜山顶上，你发现了四个新挖的浅坟。挖出用于墓穴的土堆放在附近，尽管匆忙收集的石头覆盖了坟墓。死亡的微弱气味弥漫在空气中，几只秃鹫在头顶盘旋。

从这个有利位置，你可以很好地看到周围的山丘。向西几英里，你可以看出红松镇的微小轮廓，以及标志着长路的细长黑线。向北几英里，你看到一座细长的古老塔楼，周围有大型鸟类环绕。周围没有其他东西。

这个小型要塞位于苏姆伯山丘南部地区的一个山顶上。它由一个石头大厅组成，周围是一堵十五尺高的墙，墙上有一个坚固的木门。马厩、塔楼、兵营和仓库都包含在保护墙内。上方飘扬着一面旗帜，上面绣有交叉火炬和剑的标志。

沃姆福德是位于德萨林河岸上的一个小定居点，位于铁桥以南。一个破旧的码头伸入河中，那里系着三艘平底船。一座大型磨坊坐落在河岸边，附近有几个大粮仓和一些小型、破败的小屋。`,dmGuidance:`如果角色询问有关羽风尖塔的地方，红松镇的任何人都能提供良好的指引。
如果角色决定追踪这些线索之一而不是调查失踪的代表团，那也是可以的。
如果角色们筛选这些流言，寻找那些与米拉巴人交谈过的人，他们会发现以下线索：
如果角色询问有关骑乘飞行怪物或巨大秃鹫的战士，他们将获得另一个谣言：
如果队伍从贝利亚德向南沿着通往峰顶大厅和沃姆福德的路追踪，他们会来到米拉巴代表团遭到袭击的地方。
如果角色们进行调查，他们会发现一场大地教派和来自米拉巴的代表团之间的激烈战斗的遗迹。
如果角色们询问，红松镇的牧羊人拉蒙·格林布特会带领他们来到这个地点。
如果角色们挖掘坟墓，他们会发现一名穿着工匠长袍的矮人男性（来自米拉巴的铁匠），一名穿着黑色外衣并带有红色斧头标志（米拉巴军队的象征）的女性人类战士，一名穿着黑色斗篷并配有奇异石质盔甲的男性人类战士（一名大地教徒），以及一名穿着白色长袍并在肩膀上有黑色羽毛的男性人类（一名空气教徒）。`,offerableQuestIds:["qst_main_pota"]},{id:"scn_12b",locationId:"loc_100",name:"邪教报复",activation:{condition:{type:"always"},priority:0},skeleton:["邪恶元素的教派并不会被动地等待一群英雄系统地消灭他们在地表的前哨基地。","即使角色们完全摧毁了闹鬼要塞之一的前哨站，并消除了所有可能的目击者，元素先知们仍然会通过梦境、幻象和征兆窥见他们面临的威胁。","上古元素之眼会警告先知们危险并促使他们作出反应。",'您有四种反击措施可供选择："震动"、"空中骑士"、"掠夺者伏击" 和 "烈火尖牙"。',"让玩家的兴趣和您自己对节奏的把握来决定使用哪种反击措施。"],flesh:`邪恶元素的教派并不会被动地等待一群英雄系统地消灭他们在地表的前哨基地。即使角色们完全摧毁了闹鬼要塞之一的前哨站，并消除了所有可能的目击者，元素先知们仍然会通过梦境、幻象和征兆窥见他们面临的威胁。上古元素之眼会警告先知们危险并促使他们作出反应。

您有四种反击措施可供选择："震动"、"空中骑士"、"掠夺者伏击" 和 "烈火尖牙"。让玩家的兴趣和您自己对节奏的把握来决定使用哪种反击措施。

如果一个角色拥有危险信息的冒险钩子（见第一章），请在角色决定前往攻击地点并阻止它时运行掠夺者伏击。

"空中骑士"和"掠夺者伏击"是不错的选择，因为它们指向低等级的闹鬼要塞（分别是羽风尖塔和河园要塞）。

这是一个很好的机会，可以将角色们引向空气或水的要塞——无论角色们尚未探索的哪一个。

当你艰难地穿越这片贫瘠的乡村时，你听到了远处低沉的隆隆声。片刻之后，你脚下的地面开始震动。这次震动足以使山坡上的碎石开始小规模滑动，并使灌木和草丛左右摇摆，但随后它平息了。片刻之后，像马一样大的可怕昆虫类生物开始从地下钻出来！

这些像昆虫一样的怪物是两只掘地虫，渴望着血肉。这些生物并没有特别被大地教派派来攻击角色们，但是教派对当地邪恶的影响使得像震动和安克赫格攻击这样的事件在德萨林谷几乎变得司空见惯。

爱管闲事的英雄在附近城镇提出尴尬问题，引起了嚎叫仇恨教派的注意。风元素教派派出一群空中袭击者来消灭角色，或者至少给他们一个好好的惊吓。这次遭遇可以在角色们离开定居点的任何时候发生。

攻击者包括一名羽风骑士和两名嚎叫仇恨的启蒙者（见第七章），每个都骑在一只巨秃鹫上。骑手们更倾向于保持距离并进行远程攻击。他们也对他们的坐骑有保护意识。如果一只秃鹫的生命值减少到一半或以下，它的骑手就会撤退。如果有两名骑手被杀或撤退，第三名也会逃跑。

这些骑手没有携带财宝，但其中一人的靴子里藏有一张地图。（无论角色们击败了哪个恶棍，地图都归他们所有——角色们应该找到它。）地图上粗略地描绘了德萨林谷的地形，并标记了一个叫做"尖塔"的地方，位于红松镇东边几英里处。它还描绘了该地点旁边一个奇怪的箭头状符号（空气教派的标志）。

他们可以找到隐藏在小路视线之外的恶棍营地。否则，角色们在该地区任何时候沿着道路或小路旅行都可能遇到这个营地。

营地由一名破碎波涛祭司、两名碎浪掠夺者和五名匪徒们（牧师和掠夺者的具体数值出现在第七章）占据。否则，教徒们会假设任何陌生人都是敌人并发起攻击。如果所有的粉碎波成员都被杀死，幸存的匪徒会尝试逃跑或投降。

被捕获的粉碎波教派成员拒绝交谈，但被捕获的匪徒们并不像他们那样狂热地守口如瓶。匪徒们透露，他们加入了河园要塞的"雇佣兵"，现在为乔利弗·格里姆颚工作。他们可以告诉角色们如何找到这座要塞。

火元素教派不像其他元素教派那样关心保持外表。当凡尼弗或她的副手得知有一队冒险家试图揭露该教派时，他们会派出三只地狱猎犬来追踪队伍。这些地狱犬只需要通过溢出的血液或丢弃的物品就能嗅到角色们的气味。无论角色们当时身在何处，无论是在地点间旅行还是表面上安全地待在旅馆里，这次遭遇都可能发生。

（如果角色们自己也在那里用餐，情况会更好）。

这些怪物一心一意地追踪角色并战斗，直到其中一只被杀死，第二只的生命值减少到一半以下，这时幸存的地狱犬会逃跑。一个神秘的碗状符号（火元素教派的符号）标记在地狱犬的铁项圈上。红松镇的索斯克·塞尔恩可以将这个符号与他从一个过路商人那里听说的苏姆伯山丘上一次神秘德鲁伊集会联系起来，并提供前往赤月厅的方向。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_deseyna_majarra","npc_shoalar_quanderil"],availableInfoIds:[],encounterIds:["enc_pota_reprise_tremor","enc_pota_reprise_air","enc_pota_reprise_water","enc_pota_reprise_fire"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[44],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`从上方某处传来的奇怪、咯咯的叫声引起了你的注意。你发现三只巨大的、有翼的形状正向你滑翔过来——巨大的秃鹫！每只鸟的背上都骑着一个穿着暗淡蓝色盔甲、披着脏白色斗篷的战士。

这个杂乱无章的营地中央，一团小小的、精心控制的烹饪火在闷烧。周围散布着半打破旧的帐篷和装满补给品的板条箱，还有架子上晾着正在熏制的鱼片。几个看起来凶猛的人类战士蹲在他们的帐篷前，整理着自己的装备或静静地交谈。`,dmGuidance:`在角色访问第一个地点（贝利亚德、德萨林路、浅坟、峰顶大厅或沃姆福德老鼠）后，选择一种反击行动。
在角色们访问了第一个闹鬼的要塞之后，选择第二个反击措施来运行。
在角色们访问第三个闹鬼要塞之后，选择第三个反击措施来执行。
当角色们探索苏姆伯山丘时，他们亲身经历了困扰该地区的奇怪现象和危险怪物。
在角色们在城镇之间旅行或在山丘中搜索有趣地点的任何时候都可以使用这种反击。
如果角色们通过危险背景冒险钩子得知了这次袭击，他们知道有一伙袭击者打算在红松镇和铁福特桥之间的小路上伏击一支商队，地点在巴格赖特旅馆几英里外。
如果角色们拥有预知的优势并且成功地潜行接近恶棍，他们可以突袭水元素教徒。
如果角色们在荒野中遇到了地狱猎犬，这些猎犬会在角色们身后不远处出现，跟随他们的踪迹，并急切地吠叫。
如果角色们在旅馆休息，他们会因为来自旅馆公共休息室的尖叫声和吠叫声而受到打扰，地狱猎犬群会打破窗户冲进来，让工作人员感到恐慌。`,mapGeometry:{imageRef:"adventure/PotA/024-poa03-02.webp"},offerableQuestIds:["qst_main_pota"]},{id:"scn_146",locationId:"loc_pota_feathergale_spire",name:"S1. 马厩层",activation:{condition:{type:"always"},priority:0},skeleton:["一个圆形平台围绕着螺旋楼梯的中心轴。","平台上堆满了物资和稻草捆。","从平台辐射出十二个带有稻草覆盖地板的马厩。","每个马厩里挂着马具、马鞭和马鞍。","每个马厩的两端都有摆动的木门，一端通向塔楼，另一端通向开阔的户外。"],flesh:`尖塔中央的圆形房间用作储藏室，里面堆满了物资。骑士们愿意以百分之十的加价出售物品。

除非有骑士介绍新来者，否则这些骏鹰和秃鹫对进入它们隔间的陌生人具有攻击性。骑士的伪装可以在远处欺骗这些生物。

摊位门上的门闩在每个门上都有多个固定点，因此打开每扇门需要两个动作。`,spotlightRefs:[],presentNpcIds:["npc_deseyna_majarra","npc_shoalar_quanderil","npc_thurl_merosska"],availableInfoIds:[],encounterIds:["enc_146"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"},readAloud:"一个圆形平台围绕着螺旋楼梯的中心轴。平台上堆满了物资和稻草捆。从平台辐射出十二个带有稻草覆盖地板的马厩。每个马厩里挂着马具、马鞭和马鞍。每个马厩的两端都有摆动的木门，一端通向塔楼，另一端通向开阔的户外。",dmGuidance:`任何你希望角色拥有的来自玩家手册的装备都可以在这里找到。
当角色们到达时，四只骏鹰和两只巨秃鹫占据了马厩，每个都有自己的隔间，还有一名羽风骑士（见第七章）站岗并照看这些生物。`},{id:"scn_148",locationId:"loc_pota_feathergale_spire",name:"S2. 前厅",activation:{condition:{type:"always"},priority:0},skeleton:["入口是一条三十尺长的白色石头大厅。","大厅的另一端是两扇十二尺高的门，与入口大门相似。","一只由巨大木材雕刻而成的鹰悬挂在天花板的远端，被坚固的链条吊挂着。","它细长的钢制翅膀紧贴身体两侧。","它的头部也是由钢制成的。"],flesh:`一名羽风骑士（当角色们首次到达时是萨芙拉）和两名嚎叫仇恨的启蒙者在入口大厅保持警戒。请参阅第七章了解他们的具体数值。

如果萨芙拉允许角色们进入，她会告诉角色们他们来得正是时候。她邀请他们参加今晚的骑士盛宴，以纪念羽风协会成立十周年。萨芙拉带领队伍穿过塔楼，去S11区域见她的队长，瑟尔·梅洛斯卡。

这只鹰是一根破城锤。如果使用S4区域门附近的杠杆释放，破城锤会攻击从S4区域门开始，沿着大厅中心5尺宽路径延伸30尺的区域。

区域内的每个生物必须成功通过一次 DC 10 敏捷豁免，否则将受到 3d6 点钝击伤害。豁免失败且差值达到5或以上的生物会被公羊冲撞带动，被推出大厅到吊桥上，并被击倒 倒地。当鹰形雕像回摆时，它会重置，锁定回原位并重置其启动杆。`,spotlightRefs:[],presentNpcIds:["npc_thurl_merosska","npc_deseyna_majarra","npc_shoalar_quanderil"],availableInfoIds:[],encounterIds:["enc_148"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"},readAloud:`入口是一条三十尺长的白色石头大厅。大厅的另一端是两扇十二尺高的门，与入口大门相似。
一只由巨大木材雕刻而成的鹰悬挂在天花板的远端，被坚固的链条吊挂着。它细长的钢制翅膀紧贴身体两侧。它的头部也是由钢制成的。`},{id:"scn_14d",locationId:"loc_pota_feathergale_spire",name:"S3. 武器库",activation:{condition:{type:"always"},priority:0},skeleton:["羽风骑士们在这里存放武器和盔甲，并且上锁保管。","武器架上目前有四把长剑、四套鳞甲、四个盾牌、四顶头盔、四张长弓以及每个箭袋有二十支箭。"],flesh:"羽风骑士们在这里存放武器和盔甲，并且上锁保管。武器架上目前有四把长剑、四套鳞甲、四个盾牌、四顶头盔、四张长弓以及每个箭袋有二十支箭。",spotlightRefs:[],presentNpcIds:["npc_deseyna_majarra","npc_shoalar_quanderil","npc_thurl_merosska"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"}},{id:"scn_14e",locationId:"loc_pota_feathergale_spire",name:"S4. 中央楼梯",activation:{condition:{type:"always"},priority:0},skeleton:["一座螺旋楼梯贯穿塔的中心，每层楼都有平台。","楼梯的外缘有扶手。"],flesh:"一座螺旋楼梯贯穿塔的中心，每层楼都有平台。楼梯的外缘有扶手。",spotlightRefs:[],presentNpcIds:["npc_deseyna_majarra","npc_shoalar_quanderil","npc_thurl_merosska"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"}},{id:"scn_14f",locationId:"loc_pota_feathergale_spire",name:"S5. 新手宿舍",activation:{condition:{type:"always"},priority:0},skeleton:["嚎叫憎恨入门者、牧师、飓风和天织者在这个房间里的四张双层床上睡觉。","大多数教徒在尖塔的其他部分度过他们的日子。"],flesh:"嚎叫憎恨入门者、牧师、飓风和天织者在这个房间里的四张双层床上睡觉。大多数教徒在尖塔的其他部分度过他们的日子。",spotlightRefs:[],presentNpcIds:["npc_deseyna_majarra","npc_shoalar_quanderil","npc_thurl_merosska"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"}},{id:"scn_150",locationId:"loc_pota_feathergale_spire",name:"S6. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["在这个厨房里，麻袋堆积在墙壁旁，一小堆蔬菜散放在桌子上。","一个巨大、冒着热气的大锅位于中心。","两个木桨和两把刀挂在砖炉旁边的架子上。","四个壁架上放着一打面包。","四名嚎叫仇恨的启蒙者（见第七章)站在大锅周围，吸入从锅中飘出的蒸汽。"],flesh:'四名嚎叫仇恨的启蒙者（见第七章)站在大锅周围，吸入从锅中飘出的蒸汽。这些入门者正试图"吸入——并成为——蒸汽。"这些教徒也充当厨房工作人员。',spotlightRefs:[],presentNpcIds:["npc_deseyna_majarra","npc_shoalar_quanderil","npc_thurl_merosska"],availableInfoIds:[],encounterIds:["enc_150"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"},readAloud:"在这个厨房里，麻袋堆积在墙壁旁，一小堆蔬菜散放在桌子上。一个巨大、冒着热气的大锅位于中心。两个木桨和两把刀挂在砖炉旁边的架子上。四个壁架上放着一打面包。"},{id:"scn_152",locationId:"loc_pota_feathergale_spire",name:"S7. 日光室",activation:{condition:{type:"always"},priority:0},skeleton:["一个明亮的房间占据了这层楼的东四分之一。","许多不同品种的花卉和灌木在迷宫般的种植槽中生长。","细长的红色和紫色植物悬挂在半空中的篮子里生长。","穿着长袍的人类正在给植物浇水。","三名嚎叫仇恨的启蒙者和一名飓风（两者均见第七章）在这个房间里照料植物、思考哲学或进行训练。"],flesh:`三名嚎叫仇恨的启蒙者和一名飓风（两者均见第七章）在这个房间里照料植物、思考哲学或进行训练。

几个装满清水的大桶位于房间的周边。`,spotlightRefs:[],presentNpcIds:["npc_deseyna_majarra","npc_shoalar_quanderil","npc_thurl_merosska"],availableInfoIds:[],encounterIds:["enc_152"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"},readAloud:"一个明亮的房间占据了这层楼的东四分之一。许多不同品种的花卉和灌木在迷宫般的种植槽中生长。细长的红色和紫色植物悬挂在半空中的篮子里生长。穿着长袍的人类正在给植物浇水。"},{id:"scn_154",locationId:"loc_pota_feathergale_spire",name:"S8. 大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这座宏伟的大厅横跨塔的一半直径。","在过大的窗户之间，挂毯描绘了勇敢骑士骑乘飞行的骏鹰、与龙战斗以及在云端相互比武的场景。","高高的墙上挂着狮鹫、飞龙、枭熊和蝎尾狮的头部标本。","一张长而弯曲的桌子为盛宴摆设，延伸在大厅的两个壁炉之间。","在晚上，骑士们就寝后，塔的仆人们会在这里睡觉。"],flesh:"在晚上，骑士们就寝后，塔的仆人们会在这里睡觉。",spotlightRefs:[],presentNpcIds:["npc_deseyna_majarra","npc_shoalar_quanderil","npc_thurl_merosska"],availableInfoIds:[],encounterIds:["enc_154"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"},readAloud:"这座宏伟的大厅横跨塔的一半直径。在过大的窗户之间，挂毯描绘了勇敢骑士骑乘飞行的骏鹰、与龙战斗以及在云端相互比武的场景。高高的墙上挂着狮鹫、飞龙、枭熊和蝎尾狮的头部标本。一张长而弯曲的桌子为盛宴摆设，延伸在大厅的两个壁炉之间。",dmGuidance:"当角色们首次到达时，可以在这里找到两名没有其他任务或休息的羽风骑士（见第七章）。"},{id:"scn_156",locationId:"loc_pota_feathergale_spire",name:"S9. 骑士牢房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含两张床、一个壁炉、一个衣柜、两个箱子以及墙上的一小幅挂毯。","每位骑士的胸甲内含有价值 d100 金币的贵重物品，以及一件羽毛斗篷。"],flesh:"每位骑士的胸甲内含有价值 d100 金币的贵重物品，以及一件羽毛斗篷。",spotlightRefs:[],presentNpcIds:["npc_deseyna_majarra","npc_shoalar_quanderil","npc_thurl_merosska"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"},readAloud:"这个房间包含两张床、一个壁炉、一个衣柜、两个箱子以及墙上的一小幅挂毯。"},{id:"scn_158",locationId:"loc_pota_feathergale_spire",name:"S10. 梅罗斯卡的公寓",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含一张床、一个壁炉、一个衣柜、一个写字台、一个箱子以及墙上的一小幅挂毯。","在桌子上，一个圆柱形的皮革盒子里，有一封来自阿莉希·卡罗娜斯给瑟尔·梅洛斯卡的信，由她的吟游诗人犁风者所写。","除了衣物和个人物品外，箱子里还有一个装有320金币的袋子，一瓶英勇药水，一卷en=Beast Bond法术卷轴，以及一卷en=Skywrite法术卷轴（见附录 B了解这两个法术的描述）。"],flesh:`在桌子上，一个圆柱形的皮革盒子里，有一封来自阿莉希·卡罗娜斯给瑟尔·梅洛斯卡的信，由她的吟游诗人犁风者所写。信的内容如下：

除了衣物和个人物品外，箱子里还有一个装有320金币的袋子，一瓶英勇药水，一卷en=Beast Bond法术卷轴，以及一卷en=Skywrite法术卷轴（见附录 B了解这两个法术的描述）。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_thurl_merosska","npc_windharrow","npc_deseyna_majarra","npc_shoalar_quanderil"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_158_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"},readAloud:"这个房间包含一张床、一个壁炉、一个衣柜、一个写字台、一个箱子以及墙上的一小幅挂毯。",dmGuidance:`【S10. 梅罗斯卡的公寓】梅罗斯卡,
我们很高兴听到你与黑土教派冲突的结果，并且我们赞扬你捕获了他们的一名囚犯。这位来自深水城的贵族女士有一个有趣的故事要讲，我们将享受进一步审问她。密切监视圣石寺。我想知道我们的敌人接下来计划做什么。.
你心爱的女王,
阿莉希·卡罗娜斯`},{id:"scn_15c",locationId:"loc_pota_feathergale_spire",name:"S11. 尖塔",activation:{condition:{type:"always"},priority:0},skeleton:["在塔的顶点，楼梯在一座圆形的石头凉亭处终止，凉亭向上延伸成一座针状的尖塔。","在这个围栏之外，塔顶上生长着一小块草坪。","四条用白色石头铺成的小径指向罗盘的方向，每条小径的末端都是一个尖顶的城垛。","在尖塔边缘是一架三脚架上的望远镜，指向下方。","从这个有利位置，羽风骑士们可以俯瞰附近峡谷和远处苏姆伯山丘发生的一切。"],flesh:`两名羽风骑士（见第七章)和他们的巨秃鹫驻扎在这里。每小时，他们中的一个在空中巡逻尖塔周围。另一个则巡逻塔楼。他们警惕着危险和被派遣出去的同伴骑士。

在这里高高的开阔空气中，教徒们聚集起来崇拜延西冰。他们将自己的敌人作为祭品，首先用延西冰的标志标记他们，然后将他们从尖塔上扔下去。在叹息谷，区域C2，食腐动物迅速清除了骑士们黑暗行径的证据。

那些直接通过望远镜观察而不先移动它的人首先会看到一个披着兜帽的身影进入刀锋峡谷（区域V3）的隐藏门。`,spotlightRefs:[],presentNpcIds:["npc_thurl_merosska","npc_yan_c_bin","npc_deseyna_majarra","npc_shoalar_quanderil"],availableInfoIds:[],encounterIds:["enc_15c","enc_pota_s11_thurl_first_arrival"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"},readAloud:`在塔的顶点，楼梯在一座圆形的石头凉亭处终止，凉亭向上延伸成一座针状的尖塔。在这个围栏之外，塔顶上生长着一小块草坪。四条用白色石头铺成的小径指向罗盘的方向，每条小径的末端都是一个尖顶的城垛。在尖塔边缘是一架三脚架上的望远镜，指向下方。
从这个有利位置，羽风骑士们可以俯瞰附近峡谷和远处苏姆伯山丘发生的一切。`,dmGuidance:"当角色们首次到达尖塔时，瑟尔·梅洛斯卡（见第七章）也在这里，向西眺望红松镇。"},{id:"scn_161",locationId:"loc_pota_feathergale_spire",name:"骑士的使命",activation:{condition:{type:"always"},priority:0},skeleton:["萨芙拉·贝拉布兰塔护送角色们穿过尖塔，到达尖顶，那里瑟尔·梅洛斯卡正在巡视领土。","简要描述角色们在上升过程中观察到的塔内其他房间或居民。","羽风骑士团的指挥官是一位体格健壮的男性人类，年龄在五十多岁初期。","他的盔甲上装饰着浮雕的羽毛图案，他的王权披风有着羽毛斗篷。","他将白色金发梳理整齐，然后在你面前深深鞠躬，就像他只是一个卑微的宫廷侍从。"],flesh:`萨芙拉·贝拉布兰塔护送角色们穿过尖塔，到达尖顶，那里瑟尔·梅洛斯卡正在巡视领土。简要描述角色们在上升过程中观察到的塔内其他房间或居民。

"欢迎来到羽风尖塔，羽风协会的隐居之地。我是瑟尔·梅洛斯卡，团长。"

瑟尔·梅洛斯卡提供塔楼的款待，邀请角色们参加庆祝协会成立十周年的宴会。梅罗斯卡特别青睐贵族、骑士、领主联盟的成员以及战拳会的成员。

他可能会回答以下主题的问题：

羽风协会，来自深水城的一个"精英"飞行坐骑爱好者团体

羽风尖塔的起源（见第二章）

为王国尽职

狩猎和鹰猎

骏鹰、巨大秃鹫以及其他飞行坐骑

瑟尔允许角色们在塔中休息，直到开始宴会的时候。

骑士们利用宴会来了解角色们以及他们对元素教团了解多少。通过鼓掌赞扬勇气并举杯祝酒，骑士们聆听角色们的故事并分享轶事。当您认为时机成熟时，请阅读以下内容：

梅罗斯卡请求角色们加入他的四名骑士参与追捕蝎尾狮。他提出借给他们骏鹰来完成这项任务。拒绝邀请的人可以留在羽风尖塔休息，或探索塔楼。

Thurl的戒指价值250金币。Thurl的袋子里还装有3d10金币和2d6银币。

四名羽风骑士加入角色们的狩猎行动。开始时，请阅读以下文本：

蝎尾狮狩猎发生在叹息谷上空（见附带的地图）。

由于雾气和夜空的原因，峡谷内的视野被限制在100尺内。蝎尾狮、骏鹰和巨大秃鹫对峡谷非常熟悉，能够避免撞上悬崖。

骑士们骑着巨大秃鹫并作为一个团队保持在一起。角色们可以加入骑士们的团队，组建自己的团队，或者分成多个小组。如果一个角色或骑士与他的团队其余成员相距超过100尺，他就成为了一个独立的小组。

在搜索蝎尾狮的每分钟结束时，峡谷中的每个猎人小组掷一个d20，小组中每个角色或骑士加1。任何掷出总数18或更高的小组将接近蝎尾狮100尺以内。任何找到蝎尾狮的小组都可以与之交战。

如果骑士们首先发现了蝎尾狮，他们会吹响号角，以便其他小组能够精确定位骑士们的位置，并在 1d6 轮内加入战斗。

巨大秃鹫和骏鹰比蝎尾狮飞行得更快，蝎尾狮也知道这一点。一旦发现，蝎尾狮会战斗直到没有目标可以攻击，每轮行动时使用其尾部尖刺进行三次攻击。如果没有角色在场，假定每轮战斗结束时有一名骑士受伤，蝎尾狮的生命值减少8点。受伤的骑士会离开狩猎。当没有更多的骑士剩下时，骑士们就退出了狩猎。如果蝎尾狮没有可以攻击的目标，战斗结束，它就会飞走。剩下的小组可以尝试再次寻找它。

狮蝎有二十四根尾刺。当尾刺用尽时，它在回合中只会逃离追逐者。在每个这样的回合结束时，让战斗中的所有角色和骑士进行一次 DC 13 感知（察觉）检定。如果他们的检定全部失败，狮蝎会成功逃脱，尽管队伍可以再次尝试搜寻它。

如果在10分钟内，骑士们和角色都没有找到蝎尾狮，它将返回其巢穴（区域V9）。

在蝎尾狮狩猎之后，有几个故事线可以继续发展。

瑟尔决定如何处置角色们。他怀疑那些隐居的僧侣可能藏有邪恶之物，希望角色们进行调查。同时对抗所有骑士和邪教徒将是一场致命遭遇，但反派们会优先试图活捉角色，再将他们从尖塔顶端（区域S11）扔下。若发生这种情况，区域V8的翼人族会前来援助角色们。

他们引领追击者经过区域V7的狮鹫巢穴。幸存的教派成员撤退到刀尖峡谷（区域V3）的嚎叫仇恨神庙。

如果一个角色给萨夫拉留下了深刻印象，并且队伍与骑士们关系良好，萨夫拉会寻找机会将那个角色拉到一边。对角色的行为感到高兴，萨夫拉透露说，羽风骑士团有一个秘密任务，掌握元素之风以消灭深水城的敌人。萨夫拉提出要与瑟尔会面，请求他招募这个角色加入羽风骑士团。在这样做的过程中，她无意中透露了骑士团秘密的一部分。

萨夫拉被风元素教派洗脑，她的心和思想属于延西冰。`,spotlightRefs:[],presentNpcIds:["npc_thurl_merosska","npc_yan_c_bin","npc_deseyna_majarra","npc_shoalar_quanderil"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_161_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；overlay覆写:locationId；配置列入逐场景来源复核清单"},readAloud:`羽风骑士团的指挥官是一位体格健壮的男性人类，年龄在五十多岁初期。他的盔甲上装饰着浮雕的羽毛图案，他的王权披风有着羽毛斗篷。他将白色金发梳理整齐，然后在你面前深深鞠躬，就像他只是一个卑微的宫廷侍从。

瑟尔的脸色变得阴沉。"这些山丘中潜藏着巨大的邪恶，"他说。"堕落的教徒被可怜的怪物领导。但让我们在宴会温暖了我们的血液之后再谈论这些问题。"

身穿最精美的天鹅绒锦缎服装，骑士们在宏伟大厅中一张弯曲的桌子旁举行宴会，两个壁炉熊熊燃烧。瑟尔·梅洛斯卡坐在桌子的首席。
"尊敬的客人们，"他说。"请向我们讲述你们在苏姆伯山丘的冒险。让我们以任何我们能帮助的方式协助你们。"

大厅的门猛地打开，来自尖塔的哨兵大喊：'蝎尾狮！它在移动！'
听到这个宣告，羽风骑士们齐刷刷地站起身来，他们面前的宴会尚未结束。
"我们应该抓住这个机会去杀死那个怪物，"瑟尔说。他从手指上取下一个带有石榴石的羽毛图案金戒指，并高高举起，说："给带来那野兽头颅的人的奖品！"

四名羽风骑士在尖塔集结，每个人都骑在一只巨大秃鹫上。月亮照亮了羽风尖塔下方雾气蒙蒙的峡谷。在远处，一片黑暗的碎片在移动，在雾中忽隐忽现。然后那阴影沉入云层之下，再次从视线中消失。`,dmGuidance:`当角色们到达尖顶时，请阅读以下文本：
如果角色们现在希望采访梅罗斯卡，他们可以这样做。
如果角色提到元素教派，请阅读以下文本：
如果角色们参加宴会，请阅读以下文本：
如果角色们同意，请转到"蝎尾狮狩猎"部分。
如果角色们一直礼貌有加，瑟尔会告诉他们圣石修道院的位置。
如果角色们表现粗鲁或已被证实是所有元素邪教的敌人，骑士们会在当晚试图杀害他们。
如果角色们击败了攻击者，幸存的骑士们会骑上骏鹰和巨型秃鹫逃跑。
如果角色们击败了教派并摧毁了风标，萨夫拉就会从王子的影响中解脱出来，恢复理智。`,mapGeometry:{imageRef:"adventure/PotA/027-poa03-04.webp"}},{id:"scn_175",locationId:"loc_175",name:"叹息谷",activation:{condition:{type:"always"},priority:0},skeleton:["叹息谷实际上是一个宽阔的峡谷，由一条深深的峡谷组成，一条小河流经其中。","岩石尖塔从峡谷底部升起，当风吹过这些自然结构时，会发出叹息——有时是嚎叫——的声音。","野生的山羊在峡谷中很常见。","夜晚，雾笼罩着峡谷，能见度降至100尺。","超过此范围，生物和物件处于2状态。"],flesh:`叹息谷实际上是一个宽阔的峡谷，由一条深深的峡谷组成，一条小河流经其中。岩石尖塔从峡谷底部升起，当风吹过这些自然结构时，会发出叹息——有时是嚎叫——的声音。

野生的山羊在峡谷中很常见。

夜晚，雾笼罩着峡谷，能见度降至100尺。超过此范围，生物和物件处于2状态。

峡谷在白天明亮，夜晚的光线从昏暗到黑暗不等。

峡谷壁高200到400尺。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[50],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_17d",locationId:"loc_175",name:"V2. 死岩",activation:{condition:{type:"always"},priority:0},skeleton:["一只巨秃鹫在岩石上啄食着可怕的残骸。","巨型秃鹫只有在被激怒时才会攻击角色。","六只血鹰在头顶盘旋，攻击任何靠近猎物的生物。","半小时后，秃鹫飞走，血鹰则俯冲下来。","在干涸、数日前的血泊中散落着破碎的骨头。"],flesh:`一只巨秃鹫在岩石上啄食着可怕的残骸。巨型秃鹫只有在被激怒时才会攻击角色。六只血鹰在头顶盘旋，攻击任何靠近猎物的生物。半小时后，秃鹫飞走，血鹰则俯冲下来。

在干涸、数日前的血泊中散落着破碎的骨头。成功的 DC 15 智力（调查）检定显示这些骨头属于类人生物。如果检定结果超过5点或更多，角色会在岩石和骨头碎片中发现锈迹，表明这里曾有许多类人生物丧生。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_17d","enc_pota_dead_rocks_provoked_vulture"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_17e",locationId:"loc_175",name:"V3. 刀尖谷",activation:{condition:{type:"always"},priority:0},skeleton:["峡谷壁上的一条狭窄裂缝通向一个被苍白灌木丛和灌木堵塞的沟壑。","一阵轻风穿过裂缝。","尽头处，一个黑暗、参差不齐的裂缝在等待。","在峡谷尽头的裂缝中雕刻着一道通往嚎叫憎恨神庙（参见 第四章）的阶梯。","三个 飓风（参见 第七章）在入口处监视着入侵者。"],flesh:"在峡谷尽头的裂缝中雕刻着一道通往嚎叫憎恨神庙（参见 第四章）的阶梯。三个 飓风（参见 第七章）在入口处监视着入侵者。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_17e"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"峡谷壁上的一条狭窄裂缝通向一个被苍白灌木丛和灌木堵塞的沟壑。一阵轻风穿过裂缝。尽头处，一个黑暗、参差不齐的裂缝在等待。"},{id:"scn_180",locationId:"loc_175",name:"V4. 迷失之河",activation:{condition:{type:"always"},priority:0},skeleton:["一条河流穿过峡谷，蜿蜒环绕着高耸的尖塔，流经一个高原的基部。","粗糙的绿色灌木丛沿着河岸聚集。","一只鬣狗人头领和三只鬣狗人在河西边的大石头间觅食。","白天，当天空晴朗时，它们会用长弓向角色射击。","夜晚，它们蜷缩在岩石后面，啃食河里的鱼。"],flesh:`一只鬣狗人头领和三只鬣狗人在河西边的大石头间觅食。白天，当天空晴朗时，它们会用长弓向角色射击。夜晚，它们蜷缩在岩石后面，啃食河里的鱼。

鬣狗人族群首领携带着一个戴着金戒指（价值25金币）的切断的人类手指。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_180"],treasureSlotIds:["trs_180_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一条河流穿过峡谷，蜿蜒环绕着高耸的尖塔，流经一个高原的基部。粗糙的绿色灌木丛沿着河岸聚集。"},{id:"scn_183",locationId:"loc_175",name:"V5. 呼啸高原",activation:{condition:{type:"always"},priority:0},skeleton:["这个高耸的岩石高原从峡谷中心升起。","一条河流穿过峡谷底部，从这里流到另一边。","高原上的风呼啸哀鸣，随着风力和风向的变化而改变音调。","站在嚎叫高原上的生物可以看到整个峡谷，但看不到周围的土地。"],flesh:"站在嚎叫高原上的生物可以看到整个峡谷，但看不到周围的土地。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个高耸的岩石高原从峡谷中心升起。一条河流穿过峡谷底部，从这里流到另一边。高原上的风呼啸哀鸣，随着风力和风向的变化而改变音调。"},{id:"scn_185",locationId:"loc_175",name:"V6. 迷失之河",activation:{condition:{type:"always"},priority:0},skeleton:["流经峡谷的河流靠近峡谷的东壁。","向西，地面上覆盖着岩石尖塔和野生灌木。","四只鬣狗人和四只鬣狗在这里觅食。","在白天，当天空晴朗时，鬣狗人使用他们的长弓来击倒远处的目标。"],flesh:"四只鬣狗人和四只鬣狗在这里觅食。在白天，当天空晴朗时，鬣狗人使用他们的长弓来击倒远处的目标。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_185"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"流经峡谷的河流靠近峡谷的东壁。向西，地面上覆盖着岩石尖塔和野生灌木。"},{id:"scn_187",locationId:"loc_175",name:"V7. 狮鹫巢",activation:{condition:{type:"always"},priority:0},skeleton:["一对配偶的狮鹫占据了一个位于峡谷底部大约150尺高的悬崖洞穴。","狮鹫会攻击任何接近巢穴的马或骏鹰。","它们杀死坐骑并带着尸体逃跑。","这个洞穴散发着动物麝香和潮湿稻草的气味。","一个由稻草和小树枝构成的巢穴沿着洞穴墙壁的弯曲延伸。"],flesh:`一对配偶的狮鹫占据了一个位于峡谷底部大约150尺高的悬崖洞穴。狮鹫会攻击任何接近巢穴的马或骏鹰。它们杀死坐骑并带着尸体逃跑。

巢中有两个狮鹫蛋，每个价值高达2000金币。如果每天孵化时间少于16小时，每个蛋有10%的几率变质。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_187"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴散发着动物麝香和潮湿稻草的气味。一个由稻草和小树枝构成的巢穴沿着洞穴墙壁的弯曲延伸。"},{id:"scn_189",locationId:"loc_175",name:"V8. 鸟羽人营地",activation:{condition:{type:"always"},priority:0},skeleton:["在峡谷底部附近的一个山脊的凹陷处，五名鸟羽人设立了一个用灌木隐藏的瞭望哨。","他们看到忧郁的朝圣者进出刀锋峡谷（区域V3），并且目睹了近期从羽翼尖塔进行的献祭。","他们确信邪恶元素的力量已经在峡谷中扎根，现在正在讨论采取什么行动。","他们愿意帮助那些表现出对抗峡谷中邪恶兴趣的角色，并且可能会干涉羽翼骑士团献祭被俘角色的任何尝试。"],flesh:"在峡谷底部附近的一个山脊的凹陷处，五名鸟羽人设立了一个用灌木隐藏的瞭望哨。他们看到忧郁的朝圣者进出刀锋峡谷（区域V3），并且目睹了近期从羽翼尖塔进行的献祭。他们确信邪恶元素的力量已经在峡谷中扎根，现在正在讨论采取什么行动。他们愿意帮助那些表现出对抗峡谷中邪恶兴趣的角色，并且可能会干涉羽翼骑士团献祭被俘角色的任何尝试。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_18a",locationId:"loc_175",name:"V9. 蝎尾狮巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个深邃洞穴的中心是一个水池，由岩石下自然涌出的泉水形成，向外流入河流。","长长的钟乳石悬挂在水池上方，环绕着一个自然的中央石柱。","水从钟乳石滴入水池，回声在洞穴中回荡。","这里的一些残骸看起来像是一个旧营地的遗留物，包括四个旧木箱。","两只刺尾狮在此巢穴。"],flesh:`两只刺尾狮在此巢穴。通常只有一只蝎尾狮在场，另一只则外出狩猎。如果在"蝎尾狮狩猎"事件中有一只蝎尾狮死亡，另一只则在这里。

洞穴里散落着六个兽人的骨头，还有迹象表明兽人在这里扎营了很多天。水池和巢穴周围散落的硬币总计有60铜币，26银币和14金币。兽人还积累了四个装满战利品的木箱，包括盘子、烛台和丝绸，总价值50金币。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_18a"],treasureSlotIds:["trs_18a_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个深邃洞穴的中心是一个水池，由岩石下自然涌出的泉水形成，向外流入河流。长长的钟乳石悬挂在水池上方，环绕着一个自然的中央石柱。水从钟乳石滴入水池，回声在洞穴中回荡。这里的一些残骸看起来像是一个旧营地的遗留物，包括四个旧木箱。"},{id:"scn_18d",locationId:"loc_18d",name:"河园堡垒",activation:{condition:{type:"always"},priority:0},skeleton:["位于德萨林河岸的一座虽小但建造坚固的城堡，Rivergard Keep是Sumber Hills的闹鬼城堡之一。","一个名叫Jolliver Grimjaw的沉默寡言的雇佣兵领主和他的雇佣兵团队占领了这座城堡。","他们正在修复这座古老的城堡，并声称保护河流沿线的贸易不受怪物和匪徒的侵扰。","实际上，Rivergard Keep是Cult of the Crushing Wave的秘密要塞。","Grimjaw和他的追随者正是他们声称要保护贸易的那些真正的匪徒。"],flesh:`位于德萨林河岸的一座虽小但建造坚固的城堡，Rivergard Keep是Sumber Hills的闹鬼城堡之一。一个名叫Jolliver Grimjaw的沉默寡言的雇佣兵领主和他的雇佣兵团队占领了这座城堡。他们正在修复这座古老的城堡，并声称保护河流沿线的贸易不受怪物和匪徒的侵扰。实际上，Rivergard Keep是Cult of the Crushing Wave的秘密要塞。Grimjaw和他的追随者正是他们声称要保护贸易的那些真正的匪徒。

Grimjaw和他的团伙与走私者合作，在河上运输赃物。他们对拒绝支付保护费的河船发动袭击，并积极招募暴徒和怪物加入Cult of the Crushing Wave（压碎波涛教派）。

接下来发生的事情取决于角色们为何而来以及他们如何接近。

那些利用内部知识（要求见戈尔·碎骨或雷什，或请求加入碎颌帮）的角色，将被视为重要客人或知道得过多的间谍。

护送人员将队伍带到大厅（区域K16），在那里Grimjaw将对角色们进行面试，以了解他们真正的身份。

Grimjaw和他的刺客们没有预料到会遭受攻击。潜入的角色将被他们在内部遇到的任何人挑战。至于能否通过巧妙的言辞避免在这样的遭遇中发生冲突，这取决于你的判断。

水教徒们正忙于修复Rivergard，但该建筑群的部分区域仍然无法进入。例如，北塔和水塔的上层充满了碎片。以下是城堡的共同特点。任何例外情况在适用区域中都有注明。

在城堡的墙壁中，箭缝位于地面以上9尺，宽8英寸，高4尺。

大多数天花板高度为12尺。

Jolliver Grimjaw被他的追随者称为"Jolly"，这是他名字的缩写，也是对他举止的讽刺。他领导着为了金钱而不是意识形态工作的匪徒和水教徒。只有一些平民仆人对Grimjaw和教派缺乏忠诚。

内部的门由木头制成。需要成功通过一个 DC 10 的力量检定才能强行打开一扇锁着的门。外部门则由铁条加固，并且可以用门闩闩上。这样的闩门需要成功通过一个 DC 20 的力量检定才能强行打开。

在白昼，城堡的窗户和箭垛为所有内部空间提供2。在黑夜，内部空间由小型油灯提供明亮光照。

一把锁需要盗贼工具和一次成功的DC 15敏捷检定来打开。

城堡中的每位战士携带着混合货币和少量贵重物品，总价值为 2d10−2 金币。

城墙位于地面15尺以上，内部地面10尺以上。外墙面有城垛。每段城墙上都有一个匪徒巡逻，来回走动。

当警报响起时，会发生以下反制措施：

城堡居民关闭所有外部门。

位于区域K8的匪徒移动到墙顶，每个墙段增加两名匪徒。

位于区域K8的碎浪劫掠者会直奔骚动的源头，并在警报响起1分钟后抵达。

10分钟后，Grimjaw和来自区域K20的掠夺者离开要塞，在城堡中搜寻入侵者。

这条地下河流蜿蜒穿过超过两英里的无光洞穴，通向失落的矮人城市Tyar-Besil郊区的一个地下湖。角色们可以轻松地划着小船从秘密登陆点（区域K22）到粉碎波神庙的湖岸登陆点（见第四章）。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel"],availableInfoIds:["info_pota_four_keeps"],encounterIds:[],treasureSlotIds:["trs_18d_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`一座小型城堡俯瞰着雄伟的德萨林河，在这一点上，河宽足有半英里。一座门楼和主楼坐落在一个低矮的峭壁上，但城墙一直建到水边。在河岸边，另一座低矮的塔楼守卫着一个船坞，那里停泊着平底船。
这座城堡看起来古老而破旧，但新的木料和瓦片表明正在进行修复。城堡上方飘扬着一面白色旗帜，上面绘有一只蓝色的手套。
前门是关闭的。`,dmGuidance:`当角色们到达Rivergard时，请阅读以下文本：
如果角色们公开且礼貌地接近，并以几乎任何可信的理由请求进入，邪教徒会欢迎他们。
如果角色们不使用此类知识，且无礼或没有提供合理的进入理由，他们将被拒之门外。
如果角色们和平地进入，四名匪徒们将护送他们通过大门（区域K1）。
如果角色们通过水门进入（区域K11），则由三名碎浪掠夺者（见第七章）提供护送。
如果角色被抓住做了可疑的事情，附近的教徒会试图拉响警报。`,offerableQuestIds:["qst_main_pota"]},{id:"scn_19f",locationId:"loc_18d",name:"K1. 前门",activation:{condition:{type:"always"},priority:0},skeleton:["堡垒的主入口设有一个两层高的门楼，连接着一个圆形塔楼。","箭缝可以俯瞰门外的地面。","大门本身是由铁箍加固的厚木制双门。","大门从内部被闩住。","除了攻城器械外，任何方法都无法强行打开。"],flesh:`大门从内部被闩住。除了攻城器械外，任何方法都无法强行打开。闩可以从门楼通道内部（区域K2）提起，或者通过门楼上层（区域K3）的铁链提起。

一名匪徒在门楼北侧的墙段上站岗。如果他发现队伍靠近，他会警告区域K2和K3的邪教徒。

箭缝处的人是霍尔格，一个暴徒，负责指挥门楼。霍尔格是一个神经质的严格人，门楼里没有人喜欢他。霍尔格决定是否开门，告诉角色们离开，或者命令他的匪徒开火。如果霍尔格允许角色进入，他会命令四名匪徒们（两名来自区域K2，两名来自区域K3）在大门口与他们会面，并护送他们进入。

如果此处爆发战斗，站在大门前的角色将暴露在来自区域K3的箭孔和墙垛上的火力之下。如果区域K2的匪徒无法对齐射击入侵者，他们会爬上楼梯前往区域K3，然后移动到墙垛上加入战斗。

如果这些守卫也被杀死，Grimjaw需要1d4 + 1天来获得增援并替换门卫。在此期间，前门保持关闭但无人守卫。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_19f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`堡垒的主入口设有一个两层高的门楼，连接着一个圆形塔楼。箭缝可以俯瞰门外的地面。大门本身是由铁箍加固的厚木制双门。

门楼内部传来嘈杂的声音和压抑的说话声。然后，一个人类战士出现在大门正上方的二楼箭缝处。你看不清他的全貌，但他穿着皮夹克，留着黑色的胡须。"你们是谁？你们想要什么？"`,dmGuidance:`如果角色公开接近大门并呼喊，阅读以下文本：
如果角色们杀死一些或全部的门房守卫（区域K2和K3），然后离开Rivergard，死去的守卫将由来自区域K8或K20的部队替换。`},{id:"scn_1a3",locationId:"loc_18d",name:"K2. 门房",activation:{condition:{type:"always"},priority:0},skeleton:["大门开启，通向一个三十尺长的向东的通道。","一个吊闸阻挡着通道的远端，但你可以看到另一边的城堡庭院。","通道南墙上的箭缝为防御者提供了一种射击入侵者的方式，如果他们到达这么远的地方。","特别检查天花板的角色会注意到杀人孔（参见区域 K3）。","这是门楼塔楼的底层。"],flesh:`特别检查天花板的角色会注意到杀人孔（参见区域 K3）。否则，需要进行一次成功的 DC 15 感知（察觉）检定才能发现头顶的杀人孔。

塔楼内部作为四名匪徒们的营房。如果城门楼遭到攻击，其中三人会移动到箭缝处，而第四人则进入区域K4并前往区域K8拉响警报。

楼梯通向区域K3。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1a3"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`大门开启，通向一个三十尺长的向东的通道。一个吊闸阻挡着通道的远端，但你可以看到另一边的城堡庭院。通道南墙上的箭缝为防御者提供了一种射击入侵者的方式，如果他们到达这么远的地方。

这是门楼塔楼的底层。一扇门朝东，楼梯通往上面的楼层。这个房间的箭缝可以俯瞰城堡外的地面和北面的门通道。墙壁上靠着两个双层床。`,dmGuidance:"如果角色找到了进入门楼通道南侧的圆形塔楼的方法，请阅读以下文本："},{id:"scn_1a7",locationId:"loc_18d",name:"K3. 门房上层",activation:{condition:{type:"always"},priority:0},skeleton:["这个位于城堡门楼上方的房间设有通往北面和东面墙顶的门。","楼梯通往下面的楼层。","房间北半部的一个链条机制位于主门上方，用于提升或降低门闩。","另一个控制吊闸。","地板上有三个洞，每个大约一尺见方，可以俯瞰下面的通道。"],flesh:`这个区域作为兵营和防御岗位。霍尔格，一个暴徒，指挥着门楼。还有三名匪徒们在这里有床铺。

链条机制很容易操作。一个角色需要使用三个动作来闩上或打开大门，或者升起或降低吊闸。被派驻在这个区域的匪徒操作这些机制来让人进入或离开城堡。

这个房间的楼梯通向区域K2。门通向城堡南侧和西侧的墙段。

霍尔格通过对他指挥下的战士进行"罚款"积累了一小笔财富，主要是针对小违规行为。他在床下存放了一个锁着的木箱（钥匙挂在他脖子上的绳子上）。箱子里有150个银币，40个金币，一瓶治疗药水和一瓶缩小药水。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1a7"],treasureSlotIds:["trs_1a7_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个位于城堡门楼上方的房间设有通往北面和东面墙顶的门。楼梯通往下面的楼层。房间北半部的一个链条机制位于主门上方，用于提升或降低门闩。另一个控制吊闸。地板上有三个洞，每个大约一尺见方，可以俯瞰下面的通道。"},{id:"scn_1aa",locationId:"loc_18d",name:"K4. 城堡庭院",activation:{condition:{type:"always"},priority:0},skeleton:["城堡门楼内部的区域由一个小型庭院组成，庭院里是裸露的泥土和一簇簇坚韧的草。","马厩位于东侧，门楼位于西侧，城堡的主庭院位于北侧。","堡垒占据了城堡庭院的东北角。","靠近堡垒的石阶通往墙顶。","他们不会注意那些在墙内表现得像是应该在那里的人。"],flesh:`他们不会注意那些在墙内表现得像是应该在那里的人。

城堡庭院东侧的陡峭土堆和松散岩石延伸至船坞和码头。土堆中雕刻有一段20尺长的楼梯。

在城堡庭院逗留的角色很可能会遇见各种在Rivergard进行日常活动的居民。白天每5分钟检查一次随机遭遇，夜间每15分钟检查一次。掷一个d20；如果结果是18或更高，就会发生随机遭遇。要确定遭遇的内容，请掷一个d6并参考下面的表格：

平民们乐于助人，特别是如果他们意识到角色们打算对抗粉碎波邪教徒。如果他们认为角色们是邪教徒，平民们会避开眼神快速走过。所有其他群体如果认为队伍看起来可能不属于这里，就会对角色们提出挑战。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1aa"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[54],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"城堡门楼内部的区域由一个小型庭院组成，庭院里是裸露的泥土和一簇簇坚韧的草。马厩位于东侧，门楼位于西侧，城堡的主庭院位于北侧。堡垒占据了城堡庭院的东北角。靠近堡垒的石阶通往墙顶。",dmGuidance:"当角色在城堡庭院中移动时，很容易看到（并被）站在墙上的四名匪徒们中的任何一个或全部看到。",randomTableIds:["tbl_1aa_0"]},{id:"scn_1af",locationId:"loc_18d",name:"K5. 废墟马厩",activation:{condition:{type:"always"},priority:0},skeleton:["这个老旧的马厩状况很差。","大部分屋顶已经塌陷，腐烂的残骸填满了内部。","六间马厩沿着后墙排列。","邪教徒还没有费心去修理马厩，因为他们在这里几乎没有对坐骑的需求。"],flesh:"邪教徒还没有费心去修理马厩，因为他们在这里几乎没有对坐骑的需求。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个老旧的马厩状况很差。大部分屋顶已经塌陷，腐烂的残骸填满了内部。六间马厩沿着后墙排列。"},{id:"scn_1b1",locationId:"loc_18d",name:"K6. 军械库",activation:{condition:{type:"always"},priority:0},skeleton:["这个军械库的墙上武器架上摆放着长矛。","装满弩箭和箭矢的桶靠近门。","房间中央的开放式箱子里装有皮甲。","这个军械库中最不寻常的物品是盾牌——它们由锤打的铜制成，形状像马蹄蟹的壳。","这个房间包含二十根长矛，十把短剑，五把弯刀，五把轻型弩，四百个弩箭，二百支箭，十五套皮甲，以及八个形状像马蹄蟹壳的盾牌。"],flesh:"这个房间包含二十根长矛，十把短剑，五把弯刀，五把轻型弩，四百个弩箭，二百支箭，十五套皮甲，以及八个形状像马蹄蟹壳的盾牌。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个军械库的墙上武器架上摆放着长矛。装满弩箭和箭矢的桶靠近门。房间中央的开放式箱子里装有皮甲。这个军械库中最不寻常的物品是盾牌——它们由锤打的铜制成，形状像马蹄蟹的壳。"},{id:"scn_1b3",locationId:"loc_18d",name:"K7. 浴室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间中央放着两个大木制洗衣盆，西侧墙壁上的一排帘子为几个厕所提供了隐私。"],flesh:"",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间中央放着两个大木制洗衣盆，西侧墙壁上的一排帘子为几个厕所提供了隐私。"},{id:"scn_1b5",locationId:"loc_18d",name:"K8. 兵营",activation:{condition:{type:"always"},priority:0},skeleton:["这个兵营里摆满了九个双层床铺，每个床铺下面都塞着一对储物箱。","门通往北面、西面和东面。","这个区域是十二名匪徒们和四名碎浪掠夺者（见第七章）的住所。","在任何给定时间，有四名匪徒作为哨兵在外墙站岗，两名粉碎波劫掠者在区域K16值班。","其余的八名匪徒和两名劫掠者在这里逗留。"],flesh:`这个区域是十二名匪徒们和四名碎浪掠夺者（见第七章）的住所。在任何给定时间，有四名匪徒作为哨兵在外墙站岗，两名粉碎波劫掠者在区域K16值班。其余的八名匪徒和两名劫掠者在这里逗留。他们大部分时间都在赌博、在床铺上打盹、整理装备、在院子外面练习，或者互相挑起毫无意义的争吵。

在夜间，这些战士中的大多数都睡在他们的床铺上，但邪教徒在整个夜晚都会在这个房间里安排守夜。至少有两名匪徒始终保持清醒和武装。睡觉的邪教徒在任何战斗开始时的第一轮会睡过头，然后在第二轮醒来并武装自己。

兵营里几乎没有同志情谊——这些邪教徒大多阴沉、自夸或脾气暴躁，他们欺负新兵。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1b5"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个兵营里摆满了九个双层床铺，每个床铺下面都塞着一对储物箱。门通往北面、西面和东面。",dmGuidance:"如果角色说服Grimjaw他们来这里是为了加入，他们将被分配到这个房间的床铺（只有两张床铺是空的，所以角色可能需要共享）。"},{id:"scn_1b8",locationId:"loc_18d",name:"K9. 水塔",activation:{condition:{type:"always"},priority:0},skeleton:["这座塔楼的上层看起来已经废弃，但底层仍在使用中。","帘子悬挂在房间东半部的墙壁上，隔开了某人的私人住处，门附近的地板上放着几个稻草垫子。","北墙边有一个绞车，一条重链通过东北方向的管道消失。","河水就在塔楼箭缝的正下方拍打着。","三名碎浪掠夺者和一名名为Reash的测深者（见第七章）占据了这座塔楼。"],flesh:`三名碎浪掠夺者和一名名为Reash的测深者（见第七章）占据了这座塔楼。Reash负责指挥并且主要负责交谈。他是一个面容阴沉、留着下垂小胡子、态度傲慢的人。Reash对陌生人立刻产生怀疑。

Reash使用帘子隔开的区域作为他的私人住处，而劫掠者则凑合使用稻草垫子。这个深水者的私人住处有一张折叠木床和桌子上的一个马鞍袋（见下面的"宝藏"）。

绞车用来提升或降低阻挡城堡水门（区域K11）的链条。操作绞车只需要一个人，但要降低链条以让船只通过，则需要一个角色使用三个动作来转动。

Reash 携带着通往区域 K13 格栅的钥匙。他的皮制马鞍袋里装有 70 金币，12 铂金币，以及六块玛瑙（每块价值 10 金币）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1b8"],treasureSlotIds:["trs_1b8_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座塔楼的上层看起来已经废弃，但底层仍在使用中。帘子悬挂在房间东半部的墙壁上，隔开了某人的私人住处，门附近的地板上放着几个稻草垫子。北墙边有一个绞车，一条重链通过东北方向的管道消失。河水就在塔楼箭缝的正下方拍打着。"},{id:"scn_1bd",locationId:"loc_18d",name:"K10. 登陆地点",activation:{condition:{type:"always"},priority:0},skeleton:["堡垒的东墙突出到河中，形成了一个相当大的船坞，里面有几艘龙骨船漂浮着。","东南墙上的一个宽缺口提供了通往河流的入口，尽管它被一条重链阻挡。","一个二十尺高的岩石和土堆将码头和附近的一座塔楼与城堡的其余部分隔开。","在北面，一条宽阔的溪流从洞穴口流出，流入船坞。","一个铁格栅阻挡了通往溪流的入口。"],flesh:"满载战利品和赃物的龙骨船在这里卸货。目前，紧靠码头停泊的船是空的。船坞里的水大约有15尺深，尽管它在靠近岸边的地方自然变浅。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"堡垒的东墙突出到河中，形成了一个相当大的船坞，里面有几艘龙骨船漂浮着。东南墙上的一个宽缺口提供了通往河流的入口，尽管它被一条重链阻挡。一个二十尺高的岩石和土堆将码头和附近的一座塔楼与城堡的其余部分隔开。在北面，一条宽阔的溪流从洞穴口流出，流入船坞。一个铁格栅阻挡了通往溪流的入口。"},{id:"scn_1bf",locationId:"loc_18d",name:"K11. 水门",activation:{condition:{type:"always"},priority:0},skeleton:["堡垒的东墙建在河中，形成了一个长长的码头，环绕着一个船坞。","一条从南边塔楼延伸出来的重链横跨在入口处。","在区域K9的绞盘所操控的沉重铁链可通过升降来阻挡船只进出河堡。","游泳的角色可以轻松从铁链上方或下方通过——它仅对船只交通构成阻碍。","哨兵——一个被派驻在突出到河中的墙段上的匪徒——向乘船接近的角色致意。"],flesh:`在区域K9的绞盘所操控的沉重铁链可通过升降来阻挡船只进出河堡。游泳的角色可以轻松从铁链上方或下方通过——它仅对船只交通构成阻碍。

哨兵——一个被派驻在突出到河中的墙段上的匪徒——向乘船接近的角色致意。然后他大声呼唤区域K9的Reash，Reash移动到他塔楼的箭缝处看看发生了什么。

里什决定是否允许队伍进入。如果同意，他会命令掠夺者在 区域K9 降下锁链并指引角色将船停泊在区域 K10。随后他会派掠夺者护送这些角色。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`堡垒的东墙建在河中，形成了一个长长的码头，环绕着一个船坞。一条从南边塔楼延伸出来的重链横跨在入口处。

一个头发稀疏的黑发男性透过河边塔楼的箭缝向外望。他留着下垂的小胡子，面带酸涩的表情。"你们想要什么？"他问道。`},{id:"scn_1c2",locationId:"loc_18d",name:"K12. 停泊的平底船",activation:{condition:{type:"always"},priority:0},skeleton:["一艘大型龙骨船停泊在堡垒东墙内侧，漂浮在船坞中。","一条绳梯从墙顶延伸至船甲板，大约在下方六尺处。","船首和船尾的舱口通向船舱内部。","船上的水元素裔族船长修拉·坎德拉（见第七章）和一个名叫Pike的半身人仆人（一个暴徒）占据了船舱。","另外两名匪徒们作为其余的船员。"],flesh:`这是河之女号。船上的水元素裔族船长修拉·坎德拉（见第七章）和一个名叫Pike的半身人仆人（一个暴徒）占据了船舱。另外两名匪徒们作为其余的船员。他们待在船首甲板下方狭窄的舱室里，那里可以通过一个舱口和短梯进入。

Shoalar是一位地位较高的粉碎波邪教徒，他对整个区域城镇中的事件了解甚深。除非角色们在战役早期就来到Rivergard，否则他很可能会从对他们事迹的描述中认出他们。请运用你的最好判断。

如果Shoalar认出角色们，他会选择以下选项之一：

他装作无知，邀请角色们喝酒赌博，然后向他的船员发出信号，发起突然袭击。

他装作无知，将角色们引向赤月大厅，然后派一名匪徒去警告Jolliver Grimjaw。

他立即发起攻击。

如果战斗不利，Shoalar会跳入河中逃跑。

相反，龙骨船的主人是一匪徒首领。

甲板上的一个锁着的箱子里有190个银币和95个金币。Shoalar佩戴着一个皮腰带包，里面有10个金币，三块小孔雀石，每块价值10个金币，还有一瓶治疗药水。此外，货舱（在船尾下方）目前装满了赃物：啤酒桶、咸鱼和十二大包处理好的皮毛（海狸和黑貂），每包价值40个金币。`,spotlightRefs:[],presentNpcIds:["npc_shoalar_quanderil"],availableInfoIds:[],encounterIds:["enc_1c2","enc_pota_k12_replacement_captain"],treasureSlotIds:["trs_1c2_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一艘大型龙骨船停泊在堡垒东墙内侧，漂浮在船坞中。一条绳梯从墙顶延伸至船甲板，大约在下方六尺处。船首和船尾的舱口通向船舱内部。",dmGuidance:'如果角色们已经击败了Shoalar（见本章前面的"沃姆福德的老鼠"部分），那么这位元素裔和他的半身人仆人就不在这里。'},{id:"scn_1c7",locationId:"loc_18d",name:"K13. 黑暗溪流",activation:{condition:{type:"always"},priority:0},skeleton:["船坞北侧拍打着一个陡峭的岩壁。","从岩壁底部，一条地下河流入船坞。","这条河接近三十尺宽，洞穴顶部大约在水中央高出水面六尺。","一个铁格栅阻挡了溪流的入口。","铁格栅有一个可摆动的门部分，由一个简单的锁固定。"],flesh:"铁格栅有一个可摆动的门部分，由一个简单的锁固定。Reash（区域K9）和Jolliver Grimjaw（区域K16）持有钥匙。溪流深10尺，通向堡垒（区域K22）下方的一个隐藏的船码头。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"船坞北侧拍打着一个陡峭的岩壁。从岩壁底部，一条地下河流入船坞。这条河接近三十尺宽，洞穴顶部大约在水中央高出水面六尺。一个铁格栅阻挡了溪流的入口。"},{id:"scn_1c9",locationId:"loc_18d",name:"K14. 北塔",activation:{condition:{type:"always"},priority:0},skeleton:["这座塔楼位于峭壁之巅，俯瞰着下方的德斯拉林河和城堡港口。","这座塔楼内部散落着肮脏的毛皮和丢弃的骨头。","空气中弥漫着一股难闻的动物气味。","邪教招募的大多数非人类成员都被派往了粉碎波神庙（见第四章）。","然而，Jolliver Grimjaw认为他没有足够的人数来抵御一次坚决的攻击，所以他雇佣了三个熊地精来增强守卫力量。"],flesh:`这座塔楼位于峭壁之巅，俯瞰着下方的德斯拉林河和城堡港口。

邪教招募的大多数非人类成员都被派往了粉碎波神庙（见第四章）。然而，Jolliver Grimjaw认为他没有足够的人数来抵御一次坚决的攻击，所以他雇佣了三个熊地精来增强守卫力量。这些地精感到无聊，渴望战斗。他们会攻击任何他们不认识的人，不在乎是否伤害或杀死新兵。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1c9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座塔楼内部散落着肮脏的毛皮和丢弃的骨头。空气中弥漫着一股难闻的动物气味。",mapGeometry:{imageRef:"adventure/PotA/032-poa03-07.webp"}},{id:"scn_1cb",locationId:"loc_18d",name:"K15.圣堂",activation:{condition:{type:"always"},priority:0},skeleton:["堡垒的礼拜堂内设有朴素的木制长凳，面向房间西端的一座大型祭坛。","没有偶像暗示这里崇拜的是什么神祇。","祭坛上方的墙上画着一个简陋的符号，像是一个带有横杆连接底部支臂的X形。","几个稻草垫子摆放在礼拜堂门附近。","礼拜堂的负责人是Drosnin，一位破碎波涛祭司。"],flesh:`礼拜堂的负责人是Drosnin，一位破碎波涛祭司。两名碎浪掠夺者担任她的保镖，并且是有些不情愿的助手。（见第七章了解邪教徒的具体数值。）他们是对邪教充满热情的皈依者，但他们宁愿外出袭击或战斗，而不是被困在礼拜堂里听Drosnin大谈粉碎波不可阻挡的力量。祭坛上方画的符号是粉碎波邪教的标志。

Drosnin认为任何走进她礼拜堂的陌生人都是被分配给她进行洗脑的。Drosnin最喜欢的技巧是热情而无情的演讲。只要角色们不攻击，她就会开始一场关于"深水的真相"和即将到来的"伟大启示"的详尽布道。和她在一起的两名劫掠者会翻白眼，看起来无聊，但Drosnin继续不停地说，不允许打断。一旦Drosnin开始，她会喋喋不休地讲上两个小时才解散队伍。如果他们在她讲完布道之前试图离开，或者如果他们频繁打断她，她会命令劫掠者阻止他们离开。

如果这里爆发战斗，德罗斯宁会誓死保卫教堂。一旦她倒下，任何幸存的掠夺者都会撤退到 区域K14 或 K16 以发出警报。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1cb"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"堡垒的礼拜堂内设有朴素的木制长凳，面向房间西端的一座大型祭坛。没有偶像暗示这里崇拜的是什么神祇。祭坛上方的墙上画着一个简陋的符号，像是一个带有横杆连接底部支臂的X形。几个稻草垫子摆放在礼拜堂门附近。",dmGuidance:"如果角色们无视她的命令，她会攻击。"},{id:"scn_1cd",locationId:"loc_18d",name:"K16. 大厅",activation:{condition:{type:"always"},priority:0},skeleton:["大厅根据场合的需要变成宴会厅、练武厅或宝座厅。","这个房间是堡垒的主厅。","它有两层楼高，房间两侧的石楼梯通往大厅西端的石制阳台。","沉重的双门向东通往城堡庭院，而两个内部门向西打开。","箭缝朝北和南方向望去。"],flesh:`大厅根据场合的需要变成宴会厅、练武厅或宝座厅。

Jolliver Grimjaw在这里进行大部分业务。他是一只野猪人，尽管在与Rivergard的陌生人见面时，他保持人形态。Grimjaw通常在大厅待到深夜，然后他溜到河边以野猪形态狩猎。他在黎明前返回，并在他的住处（区域K21）睡觉。在大厅里，他由一位名叫Urshnora的测深者和两名碎浪掠夺者陪同（见第七章了解两者）。如果爆发战斗，Grimjaw更愿意以他的混合形态战斗。如果战斗不利，他通过秘密门逃跑（见下面的"秘密门"）。

Grimjaw对行政管理几乎没有耐心。来自该地区各地的匪徒和走私团伙的各种报告被埋在桌子上的文件堆里，还有关于Rivergard供应、河上船只航行的常规笔记，以及从被掠夺船只上取得的日志和清单。匪徒们报告了他们所取得的确切战利品，但地点描述不够精确：例如，"B.附近的货车面粉"，或者"W.附近的旅行者40银币"。这些缩写代表该地区的城镇，Beliard和Womford。

其中一份报告详细说明了红松镇的商队交通情况。它记录了"一群麻烦制造者"的到来，并且提到了队伍中不同种族的混合。这封信没有签名，但书写异常，混合了印刷体和手写体。

通过一次成功的 DC 10 感知（察觉）检定，可以发现格林贾夫座位后面的一扇暗门。这扇门隐藏着一条通往区域K22的螺旋楼梯。

Jolliver Grimjaw性格阴沉、多疑且缺乏幽默感。他会问非常直接的问题，比如"你们是谁？"和"你们为什么在这里？"如果有人试图奉承他或编造任何离奇的故事，Grimjaw会让这个多话的人闭嘴，并指着另一个人来回答。

在听了角色们的陈述后，Grimjaw在以下选项中做出决定：

大多数分散到Dessarin Valley各地的匪徒和走私者营地。邪教的新手撤退到粉碎波神庙（见第四章）。

Grimjaw带着打开区域K13铁格栅的钥匙。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1cd"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间是堡垒的主厅。它有两层楼高，房间两侧的石楼梯通往大厅西端的石制阳台。沉重的双门向东通往城堡庭院，而两个内部门向西打开。箭缝朝北和南方向望去。
在房间西端，阳台下方，一把大木椅坐在一张散乱着纸张和丢弃的盘子的宽桌后面。另一张桌子，这张是长条形并配有长凳，延伸至大厅的中央。墙壁被涂成绿色和蓝色，装饰着带有海洋图案的破旧旗帜。`,dmGuidance:`如果角色们进一步调查，请参阅第4章中的"间谍的信件"。
如果队伍似乎不知道邪教并且惹恼了他，他会命令角色们被赶出Rivergard。
如果队伍似乎不知道邪教，但提供了一个合理的理由留在Rivergard，Grimjaw只允许角色们在必需的情况下留下来，并在区域K8为他们提供床铺。
如果队伍似乎知道一些事情，但看起来弱小或危险，Grimjaw命令邪教徒攻击。
如果队伍似乎知道一些事情，并且看起来很重要（或者作为新兵很有用），Grimjaw允许他们留下来，在区域K8给他们提供床铺。
如果角色是被从某个门护送到Grimjaw的大厅的，他们的护送人员在与Grimjaw谈话期间也在场。
如果角色在杀死Grimjaw或迫使他逃跑后离开Rivergard，任何剩余的邪教徒将在接下来的一两天里放弃堡垒。`},{id:"scn_1d4",locationId:"loc_18d",name:"K17. 仆人宿舍",activation:{condition:{type:"always"},priority:0},skeleton:["这个简朴的宿舍配备了六张双层床、一张小木桌和椅子，还有两个大洗衣盆以及几个装满脏衣服和亚麻布的篮子。","这个房间住着在厨房工作并负责城堡内各种杂务的仆人。","目前有三名人类平民（Anya、Berd和Nayreen）在这里工作。","他们是Womford的本地人，被粉碎波邪教绑架并带到这里来负责清洁、烹饪、洗衣和侍候邪教战士。","他们三人都渴望逃跑回家，但他们不敢尝试。"],flesh:`这个房间住着在厨房工作并负责城堡内各种杂务的仆人。目前有三名人类平民（Anya、Berd和Nayreen）在这里工作。他们是Womford的本地人，被粉碎波邪教绑架并带到这里来负责清洁、烹饪、洗衣和侍候邪教战士。他们三人都渴望逃跑回家，但他们不敢尝试。Grimjaw已经将另外两名试图逃跑的人鞭打至死。

仆人们知道区域K16有一个秘密门，但他们不知道它通向哪里。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个简朴的宿舍配备了六张双层床、一张小木桌和椅子，还有两个大洗衣盆以及几个装满脏衣服和亚麻布的篮子。"},{id:"scn_1d6",locationId:"loc_18d",name:"K18. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间北墙上的两个大火炉上放着满是炖煮着的炖锅。","房间中央有洗手盆和工作台，上面摆放着旧的、有破损的陶器。","袋子、桶和木桶堆放在南墙边，天花板上挂着奶酪和熏鱼。","这里有五个人类平民在劳作。","其中两个（Lathna和Oric）是俘虏，他们并不愿意待在这里，但另外三个（Gorm、Herek和Shadnil）是来自Womford的不良分子。"],flesh:`这里有五个人类平民在劳作。其中两个（Lathna和Oric）是俘虏，他们并不愿意待在这里，但另外三个（Gorm、Herek和Shadnil）是来自Womford的不良分子。这三个人不够强悍，无法成为粉碎波的战士，因此他们被强征到厨房服务。如果有入侵者进入厨房，这些可能的匪徒会试图溜走去警告邪教徒。

这些袋子里装有面粉，一打桶装有啤酒（每桶价值10金币），木桶里装有咸肉。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_1d6_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间北墙上的两个大火炉上放着满是炖煮着的炖锅。房间中央有洗手盆和工作台，上面摆放着旧的、有破损的陶器。袋子、桶和木桶堆放在南墙边，天花板上挂着奶酪和熏鱼。"},{id:"scn_1d9",locationId:"loc_18d",name:"K19. 古老图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的墙壁被旧书架占据，但大多数是空的。","一个旧书架已经被清空并重新摆放了一些书籍。","一个单人床位于房间远端的狭窄窗户下，靠近一个小桌子、一把木椅和一个箱子。","地板看起来是湿的。","这个房间曾经是堡垒领主的图书馆和客厅，但Grimjaw对阅读或娱乐没有特别兴趣。"],flesh:`这个房间曾经是堡垒领主的图书馆和客厅，但Grimjaw对阅读或娱乐没有特别兴趣。现在它成为了Urshnora的个人住处，她通常在区域K16被发现。Urshnora是一个测深者（见第七章）。她讨厌Reash（区域K9），而Reash也由衷地回应了Urshnora的敌意。

其中一个书架隐藏着一扇暗门。通过一次成功的 DC 10 感知（察觉）检定可以发现这扇门，它通往区域 K21。

Urshnora在她的床边放有一个小木箱。箱子里装有80个银币、30个金币、一个丝绸袋，袋中装有四块优质碧玉，每块价值70金币，还有一张en=Haste卷轴，以及一张en=Wall of Water卷轴（见附录 B）。

这些书籍——总共有一打——每本价值25金币。大多数书籍涵盖航海主题，包括图表、船只日志的摘录等。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_1d9_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的墙壁被旧书架占据，但大多数是空的。一个旧书架已经被清空并重新摆放了一些书籍。一个单人床位于房间远端的狭窄窗户下，靠近一个小桌子、一把木椅和一个箱子。地板看起来是湿的。"},{id:"scn_1de",locationId:"loc_18d",name:"K20. 守卫室",activation:{condition:{type:"always"},priority:0},skeleton:["这个警卫室的墙壁上排列着四张双层床。","向南，一个箭缝俯瞰着城堡庭院，一扇门通向城堡的城垛。","另一扇门通向北方。","这个警卫室作为六名碎浪掠夺者（见第七章）的兵营。","在任何给定时间，有两个在区域K16值班，而其他四个在这里休息。"],flesh:`这个警卫室作为六名碎浪掠夺者（见第七章）的兵营。在任何给定时间，有两个在区域K16值班，而其他四个在这里休息。在夜间，至少有一名劫掠者始终保持清醒。

如果这个房间里的劫掠者听到K19或K21区域的战斗声，他们会迅速移动去调查并处理任何威胁。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1de"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个警卫室的墙壁上排列着四张双层床。向南，一个箭缝俯瞰着城堡庭院，一扇门通向城堡的城垛。另一扇门通向北方。"},{id:"scn_1e0",locationId:"loc_18d",name:"K21. 领主的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个堡垒这一楼层的西半部分是一个大型的半圆形房间。","三扇狭窄的窗户俯瞰城堡墙壁外的乡村。","房间的家具非常简朴，包括一张看起来很硬的单人床、一张小木桌和几把简单的椅子。","几个大箱子占据了房间的南角。","Jolliver Grimjaw不需要任何舒适设施，但他非常喜欢他的财富。"],flesh:`Jolliver Grimjaw不需要任何舒适设施，但他非常喜欢他的财富。他帮派的抢劫和掠夺中最好的战利品最终都放在这里，这样他随时都能看到和触摸它们。Grimjaw是一只野猪人，他只在每个早晨的几个小时里在这个房间睡觉。

如果在此处面对对峙，Grimjaw会为了保护他的财宝而激烈战斗，愤怒地咆哮并呼救。任何附近的邪教徒（见区域K19和K20）都会响应他的召唤。如果当Grimjaw不在此处时，角色们被发现在这个房间，他们会立即遭到攻击，因为这个房间除了Grimjaw之外，对所有人来说都是禁止入内的。

一扇通往图书馆的秘密门（区域 K19）隐藏在房间的东北角。成功的 DC 10 智力（察觉）检定可以揭示这扇门。

Grimjaw的战利品包括600个银币，450个金币，以及一个包含十五个蓝色天青石（每个价值10金币）的小袋。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1e0"],treasureSlotIds:["trs_1e0_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个堡垒这一楼层的西半部分是一个大型的半圆形房间。三扇狭窄的窗户俯瞰城堡墙壁外的乡村。房间的家具非常简朴，包括一张看起来很硬的单人床、一张小木桌和几把简单的椅子。几个大箱子占据了房间的南角。"},{id:"scn_1e5",locationId:"loc_18d",name:"K22. 秘密登陆",activation:{condition:{type:"always"},priority:0},skeleton:["区域K16的秘密楼梯向下延伸20英尺到达这个平台，毗邻一条向东流向K13区域的地下溪流。","在楼梯底部，你发现一个火把照亮的房间，里面有两艘船在地下河流中轻轻摇晃。","这条河流向东流向日光，向西上游则通向黑暗。","六只 食尸鬼们 潜伏在船登陆点附近的水中。","他们奉命确保只有邪教徒能够继续前往位于上游两英里外的碎浪神殿。"],flesh:`区域K16的秘密楼梯向下延伸20英尺到达这个平台，毗邻一条向东流向K13区域的地下溪流。

六只 食尸鬼们 潜伏在船登陆点附近的水中。他们奉命确保只有邪教徒能够继续前往位于上游两英里外的碎浪神殿。如果任何人没有先站在船首做出碎浪手势就开始划船向上游前进，食尸鬼们会对其发动攻击。在漆黑的水中发现食尸鬼需要通过一个 DC 17 的感知 (察觉) 检定。

所有六个食尸鬼在每次战斗的第一个动作都是协同合作，试图掀翻船只并将乘客倾倒入河中。这样做使得其中三个食尸鬼可以使用他们的动作进行力量检定，而另外三个食尸鬼则使用他们的动作采取 协助 动作。如果有任何一个食尸鬼成功通过 DC 20 力量检定，船只就会倾覆。在战斗的后期，一些食尸鬼可能会继续尝试推翻船只。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_1e5"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在楼梯底部，你发现一个火把照亮的房间，里面有两艘船在地下河流中轻轻摇晃。这条河流向东流向日光，向西上游则通向黑暗。"},{id:"scn_1e8",locationId:"loc_1e8",name:"圣石修道院",activation:{condition:{type:"always"},priority:0},skeleton:["Sumber Hills的第三座闹鬼堡垒，神圣石修道院是巫妖兰维柯 Caradoon选择安家的地方，阻止其他怪物在附近定居。","前堡垒已经重生为神圣石修道院，现在是一群隐居的神秘僧侣（实际上是伪装成的土之邪教徒）的家园，他们每天花时间冥想和进行严格的自律练习。","该地区很少有人听说过神圣石修道会。","这个地区没有人知道真相：修道院现在作为黑土邪教的地面总部，守护着下面的黑土神庙的不洁金库。","与华丽的Featherdale骑士或Rivergard Keep的侵略性袭击者不同，神圣石阶修道会的僧侣们保持低调。"],flesh:`Sumber Hills的第三座闹鬼堡垒，神圣石修道院是巫妖兰维柯 Caradoon选择安家的地方，阻止其他怪物在附近定居。前堡垒已经重生为神圣石修道院，现在是一群隐居的神秘僧侣（实际上是伪装成的土之邪教徒）的家园，他们每天花时间冥想和进行严格的自律练习。

该地区很少有人听说过神圣石修道会。这个地区没有人知道真相：修道院现在作为黑土邪教的地面总部，守护着下面的黑土神庙的不洁金库。

与华丽的Featherdale骑士或Rivergard Keep的侵略性袭击者不同，神圣石阶修道会的僧侣们保持低调。他们悄悄地招募怪物，并绑架旅行者和孤立的矿工作为他们矿山的奴隶，但他们小心地消除目击者。到目前为止，没有人怀疑"那些隐居的僧侣"是麻烦的幕后黑手。实际上，他们几乎没有引起注意，以至于神圣石阶的僧侣们几乎不费心让他们的怪物盟友避开视线，或者误导好奇的入侵者。

无论角色们讲述的是什么故事，神圣石修道院的僧侣们都不感兴趣。敲门的一群陌生人会被拒之门外。坚持来访的人会被告知："院长不允许访客打扰我们的冥想"，如果他们拒绝离开，就会遭到攻击。

疑心的角色可能会通过一次成功的DC 10感知（洞悉）技能检定察觉到僧侣们正在交换隐秘的目光。

通过点名询问海伦蕾、马洛斯·恩雷尔或米拉吉·维扎恩，或者出示一些能引起黑土邪教徒兴趣的东西，就足以作为证明。如果被允许进入，角色们将被护送到Qarbo那里，由他决定如何处理他们（见区域M9中的"与Qarbo会面"）。

神圣石修道院的僧侣们通常穿着带兜帽的长袍，戴着覆盖面部的镀锡石像鬼面具。伪装成神圣石修道院僧侣的角色可以在修道院内自由活动而不被质疑，只要他们避免过多的交谈。M8和M14区域的石像鬼不会攻击穿着神圣石长袍和面具的角色。其他反派和怪物会忽略伪装的角色，除非他们表现得很可疑。

修道院的居民清楚地知道谁应该在这里，谁不应该。没有护送的未伪装的冒险者在大厅里闲逛时，会立即被识别为入侵者并遭到攻击。

教徒们对攻击没有组织化的应对。大多数修道院的居民都是宿命论者，倾向于坚守阵地与入侵者战斗，而不是试图逃跑并拉响警报。然而，教徒们对战斗声确实会做出积极反应。当一个区域开始战斗时，检查相邻区域是否有其他怪物或恶棍。然后决定这些敌人是否以及何时加入正在进行的战斗。这可能会导致角色面临致命的战斗遭遇，因为新的对手可能会冲进来加入仍在进行的战斗，或者在角色在一场艰苦战斗后试图休息时到达。

除了建筑物东端（M16和M17区域），圣石修道院的大部分看起来状况良好，那里的墙壁破碎，堆满了瓦砾。以下特征是修道院常见的。任何例外情况在它们适用的区域中注明。

修道院的天花板高度为12尺。矿井在大多数地方的天花板高度为8尺。

修道院的大多数居民是邪教徒。其他如食人魔，是雇佣兵。巫妖兰维柯（区域M16）与邪教无关。

内部的门由木头制成。需要成功的DC 10力量检定才能强行打开一扇锁住的门。外部门用铁条加固并且通常上锁。这样的门需要成功的DC 15力量检定才能强行打开。

在白昼，窗户为大部分室内空间提供2。在黑夜，没有灯光被点亮。矿井同样没有照明。

一把锁需要盗贼工具和一次成功的DC 15敏捷检定来打开。

圣石寺的僧侣是禁欲者，不收集个人财宝。他们镀金的锡面具毫无价值。对于修道院中更世俗的居民（例如灰矮人），每个都携带2d10金币的混合货币和次要贵重物品。

修道院的屋顶距离地面大约25尺，但是墙壁上有碎裂的砌体或安装不当的毛石，所以相对容易攀爬。环绕花园（区域M14）的围墙高10尺。

修道院的窗户又窄又高，几乎像箭缝一样。每个窗户的窗台距离外面的地面大约10尺。

古老阶梯（区域M24）下延约250英尺，通向天然洞窟中一条四分之一英里长的通道。这条通道进而通往黑土神庙中的区域B1（参见第四章）。`,spotlightRefs:[],presentNpcIds:["npc_renwick","npc_hellenrae","npc_marlos_urnrayle","npc_miraj_vizann"],availableInfoIds:["info_pota_four_keeps"],encounterIds:[],treasureSlotIds:["trs_1e8_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们询问关于米拉巴代表团的事，门口的僧侣会说，"他们不在这里，"并将队伍打发走。
如果角色们声称他们是来加入的，或者已经是为黑土邪教工作的，神圣石的僧侣们可能会被说服让角色们进入。
如果角色们获得了这些物品，他们可以穿上僧侣的服装进行伪装。
当角色们击败了海伦蕾和她的追随者，或者说服他们带领他们深入神庙时，他们便完成了冒险中的修道院部分。`,offerableQuestIds:["qst_main_pota"]},{id:"scn_1f9",locationId:"loc_1e8",name:"M1. 石之通道",activation:{condition:{type:"always"},priority:0},skeleton:["一条小径通向风雕沙岩峭壁间日益狭窄的峡谷。","最终，墙壁靠得如此之近，以至于你可以伸手触摸两侧，但随后这个狭窄的空间开阔成一个隐藏在山丘中心的峡谷。","一座蔓延的修道院，有着黑暗的窄窗户和红色瓦屋顶，矗立在这个天然圆形剧场的中心，四周环绕着沙岩峭壁。","前方，一段风化的石阶通往紧闭的修道院大门。","这些朴素的门由沉重的木材制成，上面镶嵌着铁钉。"],flesh:`修道院里的人不太注意外面潜行的人，尽管制造骚动的角色可能会吸引那些窗户朝向正确方向的邪教徒的注意。

日落之后，所有的外门都被锁上了。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[60],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一条小径通向风雕沙岩峭壁间日益狭窄的峡谷。最终，墙壁靠得如此之近，以至于你可以伸手触摸两侧，但随后这个狭窄的空间开阔成一个隐藏在山丘中心的峡谷。一座蔓延的修道院，有着黑暗的窄窗户和红色瓦屋顶，矗立在这个天然圆形剧场的中心，四周环绕着沙岩峭壁。
前方，一段风化的石阶通往紧闭的修道院大门。这些朴素的门由沉重的木材制成，上面镶嵌着铁钉。一条尘土飞扬的小径环绕着这座建筑。

在修道院的西北侧有一扇小门，可能是仆人入口。在东北侧，一堵低墙围起了一个相当大的花园，园门上锁。修道院的东侧部分状况非常糟糕——那里的墙壁正在坍塌，窗户已经被旧石工砌砖封堵。在建筑的东南部分，靠近那个区域，有一扇小边门。`,dmGuidance:`当角色们抵达圣石修道院时，请阅读以下文本：
如果角色们侦查建筑的其他侧面，补充以下内容：`},{id:"scn_1fc",locationId:"loc_1e8",name:"M2. 玄武岩大厅",activation:{condition:{type:"always"},priority:0},skeleton:["晚上这里没有人，但白天会有两名圣石僧侣（参见第七章）驻守此处。","如果武僧在场且队伍敲门、试图开门或大声交谈，请阅读以下内容：","修道院前门上的一个小窗板滑开，一个戴着金色面具的人探出头来。","面具是按照怒视的石像鬼形状制作的，但打开窗板的手看起来足够像人类的。","从面具下传来一个女性的声音：'嗯？"],flesh:`晚上这里没有人，但白天会有两名圣石僧侣（参见第七章）驻守此处。如果武僧在场且队伍敲门、试图开门或大声交谈，请阅读以下内容：

僧侣们聆听了访客的故事，除非角色们能提出有说服力的论点来证明他们的重要性，否则会将他们拒之门外。如果门是开着的，角色们可以不打招呼就走进去。在这种情况下，他们会在大厅里发现两位穿着土色长袍的僧侣，他们冷静地等待着。僧侣们会询问他们想要什么，对话以类似的方式继续进行。

一旦角色们通过了前门，请阅读：

如果有人试图在没有护送的情况下从东门或西门离开，僧侣们会毫无预警地发起攻击。若僧侣们确信角色们是潜在招募对象或正在进行重要的教团事务，其中一名僧侣会带领队伍前往区域M9与卡波会面。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_pota_m2_monks","enc_pota_m2_minotaurs"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`修道院前门上的一个小窗板滑开，一个戴着金色面具的人探出头来。面具是按照怒视的石像鬼形状制作的，但打开窗板的手看起来足够像人类的。从面具下传来一个女性的声音：'嗯？你们想要什么？'

这个简朴的大厅用不规则的暗色玄武岩块装饰，这些岩石沿墙形成自然的柱子。修道院前门朝南，而内部门通向东西方向。一个内部庭院位于这个房间的北面，可以通过一对窄窗户看到。`,dmGuidance:"如果角色们攻击了修道院并离开，当他们返回时这里的守卫会被从黑土之殿派来的两个牛头人取代，并由一个圣石僧监督（参见第七章）。"},{id:"scn_200",locationId:"loc_1e8",name:"M3. 南宿舍",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间布置得像一个看起来很不舒服的兵营。","沿着墙壁，十个薄薄的垫子被卷起，旁边整齐地堆放着一堆堆衣物——朴素的土色长袍和凉鞋。","其中两堆衣物还包括金色的面具，形状是怒视的石像鬼脸。","一扇窗户朝向南方的峡谷墙。","这个房间住着十名圣石僧侣（参见第七章）。"],flesh:`这个房间住着十名圣石僧侣（参见第七章）。白天，房间空无一人，因为僧侣们在其他地方履行他们的职责。晚上，六名僧侣在这个房间睡觉，两名保持清醒，两名在M7区域工作。保持清醒的两名僧侣监视，确保没有人偷偷溜出去袭击厨房或酒厂，或者以其他方式做出不符合僧侣身份的行为。如果发生战斗，睡觉的僧侣会在他们的第一回合醒来并站起来。他们每人都可以在第二回合正常行动。

在白天，有四位僧侣（那些值夜班的人）在这里睡觉。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_200"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间布置得像一个看起来很不舒服的兵营。沿着墙壁，十个薄薄的垫子被卷起，旁边整齐地堆放着一堆堆衣物——朴素的土色长袍和凉鞋。其中两堆衣物还包括金色的面具，形状是怒视的石像鬼脸。没有其他家具。一扇窗户朝向南方的峡谷墙。"},{id:"scn_202",locationId:"loc_1e8",name:"M4. 客房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门通常上锁。","卡尔波携带着钥匙。","白天他在区域M9，晚上则在此处睡觉。","这个房间的墙壁上排列着八张简单的双层床，每张床的床尾都有一个小箱子。","房间中央靠近一个铁炉子的地方有一张小桌子和几把木椅。"],flesh:`这个房间的门通常上锁。卡尔波携带着钥匙。白天他在区域M9，晚上则在此处睡觉。

在过去修道院的居民为旅行者提供庇护时，这个房间曾作为修道院的客房。现在很少有人来这里，所以黑土祭司 Qarbo将此处用作他的私人住所。Qarbo有两名黑土守卫随叫随到，充当他的保镖。

Qarbo在午夜到黎明后不久在这里休息。他其余时间都在M9区域，石头神殿。当Qarbo和他的守卫在这里时，他们会锁上门睡觉。

在卡尔波的床铺下的一个锁着的铁箱里，装有120金币、90银币、价值40金币的金丝神职长袍、一个装有价值各30金币的两个金手镯的皮袋、一张en=Earthbind卷轴、一张en=Maximilian's Earthen Grasp卷轴，以及一张en=Transmute Rock卷轴（见附录 B以了解这些法术的描述）。卡尔波携带着箱子的钥匙，以及M21区域锁着的门的钥匙。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_202"],treasureSlotIds:["trs_202_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的墙壁上排列着八张简单的双层床，每张床的床尾都有一个小箱子。房间中央靠近一个铁炉子的地方有一张小桌子和几把木椅。五张床是空的，但有三张床上舒适地铺着床单、枕头和毯子。",dmGuidance:"关于这些教徒的统计数据，请参阅第七章。"},{id:"scn_205",locationId:"loc_1e8",name:"M5. 西宿舍",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的窗户被厚重的木百叶窗覆盖，使得室内非常昏暗。","由于一个大火势旺盛的大铁炉，室内也非常温暖。","十张看起来不舒服的垫子散布在整洁的铁制武器和盔甲堆中。","这个房间里有六名灰矮人和四名圣石僧侣（参见第七章）。","白天，武僧们会在道场（区域M15）和厨房（区域M7）工作，而灰矮人们在这里休息。"],flesh:`这个房间里有六名灰矮人和四名圣石僧侣（参见第七章）。白天，武僧们会在道场（区域M15）和厨房（区域M7）工作，而灰矮人们在这里休息。在灰矮人出现的时候，任何时候都有三名是醒着的，另外三名在打盹。夜晚，灰矮人们会在修道院周围巡逻并进入矿井冒险，而武僧们则休息。

这些灰矮人雇佣兵认为黑土教派是个不错的选择。他们容忍这些僧侣，因为僧侣们话不多，通常不会打扰他们。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_205","enc_pota_m5_night_monks"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的窗户被厚重的木百叶窗覆盖，使得室内非常昏暗。由于一个大火势旺盛的大铁炉，室内也非常温暖。十张看起来不舒服的垫子散布在整洁的铁制武器和盔甲堆中。"},{id:"scn_207",locationId:"loc_1e8",name:"M6. 餐厅",activation:{condition:{type:"always"},priority:0},skeleton:["四张旧木桌配长凳位于这个房间的中央，墙上的架子上摆满了朴素的陶器和木制大盘子。","向西，两扇窗户望向修道院墙外的峡谷。","这个房间有两扇门向北，一扇向南。","这些邪教徒在这个公共休息室里待的时间很少。","他们大部分清醒的时间都在修道院的其他部分工作或训练。"],flesh:`这些邪教徒在这个公共休息室里待的时间很少。他们大部分清醒的时间都在修道院的其他部分工作或训练。当他们不工作时，他们在自己的房间里休息。

黎明与黄昏时分，神圣之石邪教徒（除了区域M2的两个门卫外）会聚集在这个房间静默共进晚餐半小时。用餐时，十二名圣石僧侣在此进食，同席的还有海伦蕾、黑土祭司卡波，以及保护卡波的两名黑土守卫。修道院的其他住民（区域M5的灰矮人和区域M18的欧克食人魔）不愿与其他居民共餐。邪教徒的详细数据参见第七章。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_207"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"四张旧木桌配长凳位于这个房间的中央，墙上的架子上摆满了朴素的陶器和木制大盘子。向西，两扇窗户望向修道院墙外的峡谷。这个房间有两扇门向北，一扇向南。"},{id:"scn_209",locationId:"loc_1e8",name:"M7. 厨房",activation:{condition:{type:"always"},priority:0},skeleton:["通往外面的门在夜幕降临后会被锁上。","白天时，厨房工作的僧侣们经常进出，收集草药或倾倒垃圾。","这个房间中央两个大砖砌壁炉里的炭火正在闷烧，空气中弥漫着烤面包的香味。","墙壁上堆满了面粉袋、咸鱼桶、干菜箱和奶酪轮，还有磨损的工作台和一套不配套的餐具。","向西的一个门通向一个洗涤室，那里有三个大木桶。"],flesh:`通往外面的门在夜幕降临后会被锁上。白天时，厨房工作的僧侣们经常进出，收集草药或倾倒垃圾。

圣石僧侣轮流在厨房工作。无论白天还是晚上，都有四名圣石僧侣（见第七章)在这里工作。如果时间很晚（或很早），他们会忙于烤面包、擦洗壶具或制作果酱。食物不是很好吃，但数量充足且能填饱肚子。基本的供应品沿着墙壁堆放。

紧挨着西边的房间是一个带有三大木桶的浴室和洗衣区。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_209"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间中央两个大砖砌壁炉里的炭火正在闷烧，空气中弥漫着烤面包的香味。墙壁上堆满了面粉袋、咸鱼桶、干菜箱和奶酪轮，还有磨损的工作台和一套不配套的餐具。向西的一个门通向一个洗涤室，那里有三个大木桶。向北的一扇门通向修道院的外部，而另一扇门则通向南。"},{id:"scn_20b",locationId:"loc_1e8",name:"M8. 砂岩庭院",activation:{condition:{type:"always"},priority:0},skeleton:["这个区域是露天的。","在修道院屋顶的角色可以通过这里进入建筑物。","这个长而狭窄的庭院铺设着红色的砂岩。","庭院的北面是修道院的主庙或神殿，其铜制门上镶嵌着一个三角形的符号。","庭院的东西两端也有门，南墙上有几个狭窄的窗户。"],flesh:`这个区域是露天的。在修道院屋顶的角色可以通过这里进入建筑物。

离寺庙门最近的两座雕像实际上是两只石像鬼，它们藏身于显眼之处。除非不属于邪教的人物试图进入北方的神殿（M9区域），否则它们不会做出反应。石像鬼不会干涉任何穿着圣石长袍和面具的人，也不会干涉由穿着此类服装的人护送的人。

北门上的符号是元素土的符号。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个长而狭窄的庭院铺设着红色的砂岩。庭院的北面是修道院的主庙或神殿，其铜制门上镶嵌着一个三角形的符号。庭院的东西两端也有门，南墙上有几个狭窄的窗户。石像鬼雕像守卫着门，每个都面向庭院，露出凶猛的怒视。"},{id:"scn_20d",locationId:"loc_1e8",name:"M9. 石制神龛",activation:{condition:{type:"always"},priority:0},skeleton:["房间中央的楼梯向下通往修道院下方矿区的区域M21。","四根天然岩石的巨大柱子主宰着这座神殿。","在房间中央，一组宽阔的台阶向下延伸进入黑暗，正对着一块石板状的石祭坛。","南墙上有一对大型的铜包门，较小的门通往东西两侧。","北墙上的两扇窄窗从外面透进细长的光线。"],flesh:`房间中央的楼梯向下通往修道院下方矿区的区域M21。

任何查看西北角的人都会注意到一个小铜杆（见该部分）。

黑土教派信徒将这座古老神殿的主厅据为己有，现在这个圣所成为了驻守这个前哨站的教派成员的圣地——以及那些希望加入者的试炼场。当不在M4区域时，黑土祭司卡尔波在这里主持，由两名黑土守卫（见第七章）保护。他们攻击没有护送的入侵者。

仔细观察祭坛可以发现，表面的古老符文和徽记最近被凿掉了。一个检查这些痕迹的角色可以尝试进行一次 DC 15 智力 (宗教) 检定，以识别被抹去的标记（矮人会自动成功）。符文显示这座寺庙曾经是供奉摩拉丁的。

拉动拉杆会触发区域M21中描述的坍塌楼梯陷阱，并释放该房间中的掘土巨怪。

卡尔波是修道院的第二指挥官，但修道院长海伦蕾不喜欢与访客打交道。因此，审问任何客人或新兵的任务就落在了卡尔波身上。

卡尔博既残忍又有些疯狂，他在整个审问角色的过程中都狡猾地笑着，仿佛在享受一个内部笑话。他会问诸如"你最大的失败是什么？"和"你为什么认为你有资格成为永恒大地的仆人？"这样的问题。没有正确或错误的答案；这位牧师只是想看看新来者的反应。

在听取角色们的陈述后，Qarbo选择了以下选项之一：

他从M7区域召唤了一对圣石修道院的僧侣，他们拿走了角色们的所有装备和衣物，并给他们提供了圣石修道院的僧侣长袍。在接下来的几天里，他们被分配到厨房的日常杂务，并受到密切监视。

在一两天之内，角色们被召唤到神庙（见第四章）。圣石僧侣提供了一位向导来指引他们的道路。

卡波迫不及待想让区域M21的掘土巨怪好好玩耍一番，所以他更喜欢第三个选择。

这座简朴的神殿没有宝藏，但卡尔博携带着通往区域M4内箱子的钥匙以及通向区域 M21 的门钥匙。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_20d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"四根天然岩石的巨大柱子主宰着这座神殿。在房间中央，一组宽阔的台阶向下延伸进入黑暗，正对着一块石板状的石祭坛。南墙上有一对大型的铜包门，较小的门通往东西两侧。北墙上的两扇窄窗从外面透进细长的光线。祭坛上方，在厚重的石块墙上凿刻着一个三角形的符号。",dmGuidance:`如果角色们被介绍给他（也许是因为他们声称他们想加入），卡尔波会向他们提问，以确定他们对教派的忠诚度。
如果队伍看起来准备加入这个邪教，Qarbo解释说他们必须从一段自我否定和反思的时期开始。
如果角色们同意这样做，他们将被分开，并在M3和M5区域被分配到垫子上。
如果队伍似乎决心与邪教中的高层人士（例如米拉吉·维扎恩）交谈，Qarbo勉强地为他们分配了客房（M4区域）的空间，并向黑土神庙发送信息。
如果队伍表现出敌意或似乎对教派没有潜在价值，卡尔波会假装接受他们，并告诉他们可以"继续下去"，指的楼梯通向M21区域。
当队伍的大多数人走上台阶时，他会拉动杠杆，将队伍倒入M21区域，同时释放那个区域的愤怒的掘土巨怪。
如果角色们在这场经历中幸存下来，他会非常惊讶，但匆忙解释说"他们通过了测试"，并将他们接纳进教派，或把他们的提议转达给神殿中的领袖。`},{id:"scn_213",locationId:"loc_1e8",name:"M10. 抄写室",activation:{condition:{type:"always"},priority:0},skeleton:["这个大型工作室的窗户下摆放着写字台。","写字台上堆满了尘封的书籍、成堆的羊皮纸和墨水罐。","白天，四名圣石僧侣（见第七章）在这个房间里工作。","到了晚上，他们返回自己的房间。","僧侣们正在抄写的书籍和卷轴来自一个小型收藏，这些书籍是马洛斯·恩雷尔在他作为人类贵族的一生中所收集的。"],flesh:`白天，四名圣石僧侣（见第七章）在这个房间里工作。到了晚上，他们返回自己的房间。

僧侣们正在抄写的书籍和卷轴来自一个小型收藏，这些书籍是马洛斯·恩雷尔在他作为人类贵族的一生中所收集的。这些典籍包括关于元素位面的学术文本、涉及大地神祇或元素力量（大多数非常晦涩）的宗教文本，以及关于自我否定和虚无主义作为对这个有缺陷且不合逻辑的世界的回应的哲学论著。

那些涉猎了这里大多数文本的平凡"见解"和"秘密"的角色们会发现马洛斯·恩雷尔的个人宣言。从这篇文本中，他们可以了解到以下内容：

马洛斯·恩雷尔 是大地先知；

他被强烈的幻象吸引到了一个叫做"眼睛神殿"的地方。在那里，他找到了"铁牙，地力圣器"，并将其据为己有；

马尔洛斯在圣石修道院下方一个长期废弃的矮人要塞遗址上建立了黑土神殿；

他培育着被称为黑曜石的东西，当一切准备就绪时，"不断成长的山将会来临，以他自己的形象重塑这片土地。"

僧侣们将它们放到一边，意识到它们是魔法物品且无法被抄录。

那些花时间整理书籍的角色会发现其中有二十本对非邪教徒有价值的书籍。每本价值25金币。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_213"],treasureSlotIds:["trs_213_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个大型工作室的窗户下摆放着写字台。写字台上堆满了尘封的书籍、成堆的羊皮纸和墨水罐。",dmGuidance:"在书本和羊皮纸中有一张en=Dust Devil卷轴和一张en=Erupting Earth卷轴（两个法术的说明参见附录 B）。"},{id:"scn_218",locationId:"loc_1e8",name:"M11. 楼梯",activation:{condition:{type:"always"},priority:0},skeleton:["石阶向下延伸十尺到达一个平台，然后转向，继续向下延伸，超出了你的视线。","几个大桶歪斜地堆放在平台上。","向北，一段楼梯向下延伸十尺到达一扇门。","西侧的楼梯通向修道院下方矿区的区域M18。","北侧的楼梯下行至一扇门，可通往花园（区域 M14）。"],flesh:`西侧的楼梯通向修道院下方矿区的区域M18。北侧的楼梯下行至一扇门，可通往花园（区域 M14）。

这些水桶是用来从M18区域的井中取水的，这是僧侣们的日常杂务。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"石阶向下延伸十尺到达一个平台，然后转向，继续向下延伸，超出了你的视线。几个大桶歪斜地堆放在平台上。向北，一段楼梯向下延伸十尺到达一扇门。",mapGeometry:{imageRef:"adventure/PotA/035-03-06.webp"}},{id:"scn_21a",locationId:"loc_1e8",name:"M12. 女修道院长的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这扇门在夜晚是锁着的。","海伦蕾不希望被打扰。","这个大房间内有一张木桌和四把椅子，一个小工作台，几幅壁挂编织品，以及一个放在靠西墙的低石架上的单人床铺。","向北，一个带栅栏的窗户俯瞰着一个有围墙的花园。","海伦蕾（见第七章），石头修道院长，居住在这里。"],flesh:`这扇门在夜晚是锁着的。海伦蕾不希望被打扰。

海伦蕾（见第七章），石头修道院长，居住在这里。她白天很少待在自己的房间里，更喜欢在道场（M15区域）进行锻炼和冥想。到了晚上，她会回到这个房间，但她只睡短暂的小憩——即使在深夜，她也有50%的机会是完全清醒的。

如果在这里遇到入侵者，海伦蕾会立即发起攻击。如果她被看起来像是新加入的教徒或邪教宾客打扰，她会简短地告知他们Qarbo可以满足他们的需求，并让他们离开她的视线。

俯瞰花园的窗户似乎被牢固地钉上了栏杆以防止出入。然而，窗台下方的一个闩扣可以释放栏杆，使它们能够摆动打开，这样身材瘦小的人可以轻易地从窗户中钻出去并跳到下面的花园（区域M14）。如果海伦蕾被逼入绝境，并且不相信自己能击败敌人，她会通过这条路线逃跑。

海伦蕾对物质财富兴趣不大，但她明白其他人对此感兴趣。修道院有时也需要资金。桌子旁的大木箱里装有800银币、65金币，以及12块价值每块10金币的绿松石，它们被包裹在一块牛皮纸中。

通往区域M13的钥匙挂在房间门旁的墙钩上。海伦蕾脖子上用皮绳挂着区域M24挂锁的钥匙。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_21a_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个大房间内有一张木桌和四把椅子，一个小工作台，几幅壁挂编织品，以及一个放在靠西墙的低石架上的单人床铺。向北，一个带栅栏的窗户俯瞰着一个有围墙的花园。"},{id:"scn_21f",locationId:"loc_1e8",name:"M13. 蒸馏室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门在晚上是锁着的。","这个房间的一面墙上整齐地堆放着柴火堆，四个大铜壶放在铁架上，铁架上方是铁火盆。","铜管以长卷的形式从一个壶连接到另一个壶。","房间南端有几个大木桶，东墙上的架子上摆满了用红色蜡封口的棕色瓶子。","圣石僧侣对白兰地酒的用处不大，但海伦蕾认识到，像为访客生产酒类这样的无害活动可能有助于掩盖黑土教派研究和哲学的真正本质。"],flesh:`这个房间的门在晚上是锁着的。

圣石僧侣对白兰地酒的用处不大，但海伦蕾认识到，像为访客生产酒类这样的无害活动可能有助于掩盖黑土教派研究和哲学的真正本质。这也是一个有用的差事，可以让她手下的僧侣忙碌起来。白天，有两名圣石僧侣（见第七章）在这里工作，照看火炉。

架子上有六十五瓶最近装瓶的白兰地。它很烈，但不是很好——这种烈酒没有得到适当的调味或陈化。如果点燃，它会猛烈地燃烧。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_21f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的一面墙上整齐地堆放着柴火堆，四个大铜壶放在铁架上，铁架上方是铁火盆。铜管以长卷的形式从一个壶连接到另一个壶。房间南端有几个大木桶，东墙上的架子上摆满了用红色蜡封口的棕色瓶子。"},{id:"scn_223",locationId:"loc_1e8",name:"M14. 石园",activation:{condition:{type:"always"},priority:0},skeleton:["通往修道院外部的花园门通常都是锁着的。","海伦蕾和卡尔博持有大门的钥匙。","一个围墙花园位于修道院北墙下方。","这个花园维护不善，尽管已经做了一些努力来清理穿过杂草丛生的小径。","花园东北角有一个通往外面的花园门。"],flesh:`通往修道院外部的花园门通常都是锁着的。海伦蕾和卡尔博持有大门的钥匙。

这些雕像是马洛斯·恩雷尔的手笔。他现在很少来修道院，但在他最初在该地区建立大地教会时曾住在这里。

这个花园中的两座雕像实际上是石像鬼。这些怪物会忽略邪教徒，但会自由攻击闯入该区域的入侵者。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个围墙花园位于修道院北墙下方。这个花园维护不善，尽管已经做了一些努力来清理穿过杂草丛生的小径。花园东北角有一个通往外面的花园门。三个门分别在花园的东南、南和西侧通向修道院。花园里的雕像特别栩栩如生。"},{id:"scn_225",locationId:"loc_1e8",name:"M15. 道场",activation:{condition:{type:"always"},priority:0},skeleton:["这个大型练习室的地板上铺着草席，沿墙的木架上摆放着长棍、长柄武器以及通常与武术相关的各种武器。","门通向北方和东方。","一个三角形的符号被雕刻在房间西墙的中心。","海伦蕾（见第七章），石头修道院长，她在白天的大部分时间都在这里，与她的僧侣们进行对练或带领他们进行各种冥想。","任何时候，都有四位圣石僧侣（见第七章）与她一起练习。"],flesh:`海伦蕾（见第七章），石头修道院长，她在白天的大部分时间都在这里，与她的僧侣们进行对练或带领他们进行各种冥想。任何时候，都有四位圣石僧侣（见第七章）与她一起练习。海伦蕾的教导包括将她的追随者打得失去意识，所以这两位僧侣的生命值只有他们正常值的一半。

如果遇到她认为是新兵的个体，海伦蕾会叫他们出来，并亲自在近战中考验他们。她一次选择一个角色挑战。如果她打算的对手拒绝，海伦蕾还是会攻击。当受害者的生命值降至一半或更少时，或者她自己降至一半或更少时，她会结束这场较量。如果有多名角色同时攻击她，她会立刻意识到这不再是一场练习赛，并且会尽力杀死或使尽可能多的敌人失去行动能力。她那些受伤的圣石僧侣也会加入战斗。

她的工作是利用纪律和苦工使新来者成为元素土的合格仆人。她对马洛斯·恩雷尔赞不绝口，并讲述了他的幻象和他的努力（见区域M10中的"马洛斯的遗嘱"）。

普通的木棍和法杖填满了木制武器架。墙上的标志是土之教派的象征。海伦蕾将通往区域M24的钥匙用皮绳挂在她的脖子上。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_marlos_urnrayle","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_225"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个大型练习室的地板上铺着草席，沿墙的木架上摆放着长棍、长柄武器以及通常与武术相关的各种武器。门通向北方和东方。一个三角形的符号被雕刻在房间西墙的中心。",dmGuidance:"如果角色们以某种方式让海伦蕾变得健谈（这可不容易），她会解释说，她将圣石修道院视为在黑土神庙服务的垫脚石。"},{id:"scn_227",locationId:"loc_1e8",name:"M16. 伦威克的塔",activation:{condition:{type:"always"},priority:0},skeleton:["从区域M14通往M16的门被施加了en=Arcane Lock法术（由巫妖兰维柯施放），通往西南通道的门也是如此。","北边的楼梯向下通往区域M20。","修道院的这个较旧部分已经被改造成了一个实验室，工作台上覆盖着炼金术设备，架子上摆满了奇怪的古董和满是灰尘的陶罐。","窗户已经被砌上砖块，天花板的角落里挂着厚厚的蜘蛛网。","一个古老的人物正在一个小桌子上翻阅一本厚重的书籍，做着笔记，羊皮纸上覆盖着神秘的文字。"],flesh:`从区域M14通往M16的门被施加了en=Arcane Lock法术（由巫妖兰维柯施放），通往西南通道的门也是如此。北边的楼梯向下通往区域M20。

修道院的这部分是圣石修道院一个长期租户的领地，一个名为兰维柯 Caradoon的巫妖。这个巫妖不是黑土教派的成员，只要其他修道院的居民不打扰他的研究，他就不在乎他们。

数百年前，兰维柯曾是一位有些名气的英雄，也是萨穆拉骑士团创始人萨穆拉·卡拉杜恩的兄弟。他们俩在第二次巨魔战争中英勇奋战。兰维柯对奥术知识的渴望最终驱使他为成为巫妖做准备，但他之所以成为巫妖，是因为他的兄弟在战场上给他喝下了巫妖药水，而不是让他死去。黑土教派自然试图与兰维柯结盟，但他无视了他们。海伦蕾和她的僧侣们特意让他自行其是。

兰维柯不会攻击入侵者。如果他相信角色们是黑土教派的成员，他会说："我已经告诉过你们不行。离开。" 如果面对他认为不是教派成员的角色，他会说："我不是你们的敌人。现在走开。" 如果角色们挑衅他，他会发出公平的警告："我将在片刻之内用致命的毒气填满这个房间。你们现在应该离开。" 如果在没有警告的情况下被攻击，兰维柯会使用en=Time Stop，然后施放en=Cloudkill，然后离开。（这位巫妖准备了en=Time Stop而不是en=Power Word Kill。）

他不想与教派信徒战斗，因为他已不再有杀戮的愿望，但如果被说服帮助，他会赠予队伍中任何圣武士或善良阵营的战士一个礼物：一个健康护符。他还承诺在角色们赶走教派信徒后，阻止更多教派信徒重新占领修道院，并且他可能会提供下一节描述的一些药剂和卷轴。

兰维柯的奇珍异宝和深奥的书籍并不值钱，也没有多少魔法力量。几个世纪以来，他对魔法哲学感兴趣，而不是更大更强的法术或神器。然而，在这些奇珍中散布着一瓶高等治疗药水（强效治疗药水）、一瓶山丘巨人之力药水（山丘巨人力量药水）、一张en=Invisibility（隐形术）卷轴，以及一张en=Snilloc's Snowball Swarm（斯尼洛克的雪球群）卷轴（见附录 B）。`,spotlightRefs:[],presentNpcIds:["npc_renwick","npc_hellenrae","npc_miraj_vizann"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_227_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"修道院的这个较旧部分已经被改造成了一个实验室，工作台上覆盖着炼金术设备，架子上摆满了奇怪的古董和满是灰尘的陶罐。窗户已经被砌上砖块，天花板的角落里挂着厚厚的蜘蛛网。一个古老的人物正在一个小桌子上翻阅一本厚重的书籍，做着笔记，羊皮纸上覆盖着神秘的文字。",dmGuidance:`他准备的法术列表与怪物图鉴中介绍的巫妖相同，除此之外。
如果角色们认出了兰维柯（也许是从Summit Hall讲述的故事中得知的），并提醒他那些英雄事迹，兰维柯可能会被感动而帮助他们。`},{id:"scn_22b",locationId:"loc_1e8",name:"M17. 巫妖的住所",activation:{condition:{type:"always"},priority:0},skeleton:["一张华丽的天篷床，覆盖着灰尘和破烂的床单，以及几个被虫蛀的沙发，表明这个房间曾经是某个重要人物的卧室。","当兰维柯首次在这座古老的修道院中确立自己的地位时，他选择了这个房间，尽管他并不需要生活中的装饰。","如果他决定帮助角色们，他会允许他们安全地使用这个房间休息。","兰维柯把他的法器留在了一个连他自己都不容易到达的地方：位于高峰大厅下的墓穴。","如果他在战斗中被击败，他会在那里重新成形——并看看他是否能带走他兄弟的身体，以便重新安葬在区域M20的空石棺中。"],flesh:`当兰维柯首次在这座古老的修道院中确立自己的地位时，他选择了这个房间，尽管他并不需要生活中的装饰。如果他决定帮助角色们，他会允许他们安全地使用这个房间休息。

兰维柯把他的法器留在了一个连他自己都不容易到达的地方：位于高峰大厅下的墓穴。如果他在战斗中被击败，他会在那里重新成形——并看看他是否能带走他兄弟的身体，以便重新安葬在区域M20的空石棺中。`,spotlightRefs:[],presentNpcIds:["npc_renwick","npc_hellenrae","npc_miraj_vizann"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一张华丽的天篷床，覆盖着灰尘和破烂的床单，以及几个被虫蛀的沙发，表明这个房间曾经是某个重要人物的卧室。"},{id:"scn_22f",locationId:"loc_1e8",name:"M18. 矿井警卫室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间附近的楼梯通向修道院一层的区域M11。","这个房间的一个角落里有一个大井，配备了一个绞盘和水桶机制来取水。","门从北面、西面和南面进入。","几个脏稻草垫子藏在房间的角落——包括一个非常大且发臭的垫子。","这个房间是圣石地下守卫的营房：三只魔兽人和一只食人魔。"],flesh:`这个房间附近的楼梯通向修道院一层的区域M11。

这个房间是圣石地下守卫的营房：三只魔兽人和一只食人魔。半兽人的首领是一位伤痕累累的老兵，名叫尤尔特，自称"指挥官"。那只食人魔名叫德鲁尔，是个软弱的傻瓜，他粗暴地对待这些守卫监管的可怜奴隶，试图以此来讨好尤尔特。

当陌生人出现时，Jurth和他的帮派不会立即攻击。相反，这个半魔兽人咆哮道："通行信号！"他等待其中一名角色做出地神教的手势：一个简单的三角形，通过将拇指和食指相互触碰形成。

Jurth积累了大量从那些不幸落入邪教之手的俘虏那里偷来的战利品。他把这些战利品藏在他睡觉的草垫下松动的石板下的皮袋里。袋子里有90金币和40银币。Jurth还带着通往M19和M21区域门的钥匙。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_pota_m18_original","enc_pota_m18_replacements"],treasureSlotIds:["trs_22f_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的一个角落里有一个大井，配备了一个绞盘和水桶机制来取水。门从北面、西面和南面进入。几个脏稻草垫子藏在房间的角落——包括一个非常大且发臭的垫子。",dmGuidance:`如果角色们猜不出通行信号或无法在没有信号的情况下蒙混过关，Jurth和他的追随者就会发动攻击。
如果角色们杀死这群怪物并在未击败海伦蕾的情况下离开地牢，在1d3天内，她会用六名灰矮人替换这些守卫。
如果角色们在矿井（区域M22）的随机遭遇中杀死了Jurth，灰矮人也会到来。`},{id:"scn_233",locationId:"loc_1e8",name:"M19. 奴隶牢笼",activation:{condition:{type:"always"},priority:0},skeleton:["在这条隧道的尽头，从岩石中挖掘出了三个类似牢房的房间。","铁栅栏隔开了每一个房间，用链条和挂锁固定着一个摆动的门。","里面，一些囚犯蜷缩在悲惨的稻草垫子上。","通往每个围栏的笼门都被锁上了。","尤尔斯（在区域 M18）持有钥匙。"],flesh:`通往每个围栏的笼门都被锁上了。尤尔斯（在区域 M18）持有钥匙。强行打开笼门需要进行一次成功的 DC 20 力量检定。

这些牢房里总共关押了十七名平民。大多数是人族农民、商队车夫、商人或部落成员。然而，其中一位是矮人贤者Bruldenthar，他是来自米拉巴的代表团中失踪的成员之一。

教派的囚犯们一直在矿井中工作，他们恳求角色们将他们从围栏中释放出来，并带领他们离开修道院。他们知道Jurth持有围栏的钥匙，并且可以在北边的警卫室（M18区域）找到他。如果被询问，他们会讲述穿着棕色兜帽或披风的袭击者冲进城镇，将他们带回矿井服劳役的故事。奇怪的是，矿井中并没有有价值的矿石。

Bruldenthar确认，土教徒在Beliard南部伏击了米拉巴代表团，杀死了他们大部分的守卫。土教徒和他们的俘虏被海盗用船渡过了Dessarin河，作为报酬，海盗们得到了这位贤者的珍贵书籍。在Sumber Hills的某个地方，骑着巨大秃鹫的匪徒伏击了土教徒。匪徒们捕获了代表Deseyna Norvael。Bruldenthar和其他人被带到圣石修道院。这位贤者被迫工作，但代表伦多斯和Teresiel被带到下面，命运未知。`,spotlightRefs:[],presentNpcIds:["npc_rhundorth","npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在这条隧道的尽头，从岩石中挖掘出了三个类似牢房的房间。铁栅栏隔开了每一个房间，用链条和挂锁固定着一个摆动的门。里面，一些囚犯蜷缩在悲惨的稻草垫子上。"},{id:"scn_237",locationId:"loc_1e8",name:"M20. 闹鬼的地穴",activation:{condition:{type:"always"},priority:0},skeleton:["通往该区域的门由古老的青铜板制成。","向东南方向的楼梯通向区域 M16，这里的门被 en=Arcane Lock 锁住了。","这个桶形拱顶的房间显然是一个古老的墓穴。","沿墙的壁龛里摆放着几十具古老的骷髅，有些骷髅的骨头上还挂着一些残存的葬衣。","并非修道院下的所有怪物都属于黑土教派。"],flesh:`通往该区域的门由古老的青铜板制成。它们没有上锁，但卡住了（需要 DC 10 力量检定来强行打开）。向东南方向的楼梯通向区域 M16，这里的门被 en=Arcane Lock 锁住了。

并非修道院下的所有怪物都属于黑土教派。地穴是巫妖兰维柯所宣称的地牢的一部分，他通常可以在自己的工作室（M16区域）找到。巫妖撤退到这里以避免面对决心攻击者。六个丧尸们守卫着这个地方，躺在最初建造它的已故牧师和僧侣的遗骸中。这些生物服从兰维柯的命令，他命令它们抵御所有活着的入侵者。

在墓穴的东端，矗立着一座宏伟但空荡的石制棺材，上面雕刻着一位长着长白胡子的高贵人类骑士的形象。棺材正面刻着一行铭文："这里躺着萨穆拉·卡拉敦，北方的守护者。"巫妖很久以前就准备了这座墓穴，预见到他可以带走他兄弟的尸体（目前安葬在萨穆拉骑士团的山顶大厅）。

在石棺内藏着的是米拉巴代表团正在运送到峰会大厅的一个死去的人类骑士的遗体。骑士穿着一件胸甲，上面印有提尔（Tyr）的象征。对尸体施放死者交谈法术可以揭示骑士的名字（Narl Elrok）以及他的死因（被半兽人杀死）。

大部分老牧师和僧侣的葬礼都非常简朴，但是北墙上的一具骷髅戴着一枚镶嵌着小红宝石的银戒指（600金币）和一枚火焰抗性戒指（火焰抗性戒指）。`,spotlightRefs:[],presentNpcIds:["npc_renwick","npc_hellenrae","npc_miraj_vizann"],availableInfoIds:[],encounterIds:["enc_237"],treasureSlotIds:["trs_237_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个桶形拱顶的房间显然是一个古老的墓穴。沿墙的壁龛里摆放着几十具古老的骷髅，有些骷髅的骨头上还挂着一些残存的葬衣。"},{id:"scn_23c",locationId:"loc_1e8",name:"M21. 渴望石之厅",activation:{condition:{type:"always"},priority:0},skeleton:["在门外敲门或制造噪音会激怒房间里的生物，使其吼叫并冲撞门，门会发出巨响并摇晃，但除此之外仍然坚固。","南端宽阔的楼梯通往上修道院的石头神殿（区域M9）。","这个大型房间的地板由松散的红土构成。","一根天然石柱位于房间中央附近，一排坚固的铁栅栏配有一个滑动的笼门（目前是关闭的），将房间的西部区域隔离开来。","铁栅栏后面西墙上有一道铁板门，而另一扇类似的门通向东边。"],flesh:`通往这个房间的门由铁板制成，并用坚固但简单的锁固定（用力强破需进行 DC 20 力量检定，或用盗贼工具开锁需进行 DC 10 敏捷检定）。

在门外敲门或制造噪音会激怒房间里的生物，使其吼叫并冲撞门，门会发出巨响并摇晃，但除此之外仍然坚固。

南端宽阔的楼梯通往上修道院的石头神殿（区域M9）。

房间西部的怪物是一只掘土巨怪。邪教徒们部分地目盲了这个生物，并移除了它的天然爪子，因此巨魔不再拥有它的迷乱凝视能力或掘地能力。然而，人造的刀刃将其爪击伤害提升至14点（2d8 + 5）的挥砍伤害。愤怒且被困住的乌黯巨魔会急切地攻击任何它能触及的东西。它可以在每个回合使用一个动作来尝试进行DC 20力量检定，以试图将笼门撬开。

自然形成的石柱和松土地面是无害的。这些土壤大约有5尺深，下面有坚硬的岩石；走在上面并不比走在紧实的沙地上更困难。

区域M9的拉杆可以打开笼门。也可以通过解锁打开（钥匙在区域M18的尤尔思身上），不过笼中的掘土巨怪会立刻攻击打开笼子的人。

位于区域M9的拉杆还会导致通往此房间的楼梯坍塌，形成一个陡峭的滑坡。角色若主动搜寻楼梯上的陷阱，成功通过DC 15感知（察觉）检定即可发现坍塌机关。

当杠杆被激活时，楼梯上的任何人都会滑到楼梯底部，并且必须成功通过一次敏捷豁免检定（难度等级 DC 15），否则会倒地（倒地）。在楼梯倒塌时，爬回去需要通过一次敏捷（特技）检定（难度等级 DC 15）。

通常，黑土教徒会把受害者推下楼梯并拉动杠杆，同时释放笼子里的掘土巨怪，并确保受害者（和怪物）无法逃回楼梯上。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:["enc_23c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个大型房间的地板由松散的红土构成。一根天然石柱位于房间中央附近，一排坚固的铁栅栏配有一个滑动的笼门（目前是关闭的），将房间的西部区域隔离开来。铁栅栏后面西墙上有一道铁板门，而另一扇类似的门通向东边。向南，有一段宽阔的楼梯向上。

铁栅栏后面站着一个怪物，它看起来像是一只巨大的猿和一只甲虫的混合体。它有着邪恶的颚部、强大的爪子和四个眼窝——但它的两个眼睛已经被挖出，它的爪子是青铜刀片。这个生物大声吼叫并在愤怒中挣扎，不断地测试栅栏并用爪子抓墙。`,dmGuidance:`如果角色们在西侧的门上倾听，他们会听到另一边有什么东西在不安地移动。
如果角色们从楼梯或东门进入房间，添加以下内容：
如果角色通过栅栏激怒它（例如，用远程武器或法术攻击），乌黯巨魔会变得狂暴。`},{id:"scn_242",locationId:"loc_1e8",name:"M22. 矿井",activation:{condition:{type:"always"},priority:0},skeleton:["这个层面的大部分由矿井隧道组成。","任何不是关键房间的地方都是矿井的一部分。","几条粗糙的矿井隧道在这个地方交汇，由旧木材支撑。","一些地方的墙上附着着奇怪的菌类或地衣。","柔和的微风在通道中呼啸。"],flesh:`这个层面的大部分由矿井隧道组成。任何不是关键房间的地方都是矿井的一部分。

这些木支撑实际上并不需要，因为隧道结构稳固。微风从M23区域进入矿井，稍微循环后，然后从M24区域排出。

矿井并不经常有人来往，但教团成员会把他们的俘虏送到这里工作，有时奇怪的生物也会游荡进来。每小时检查一次随机遭遇。掷一个d20；如果结果是18或更高，就会发生随机遭遇。白天遭遇掷一个d6，或者夜晚遭遇掷一个d8：

村民们正在新的挖掘点劳作，用十字镐和铲子挖掘着。他们极度渴望逃离，但却被彻底吓破了胆。若将玩家误认为黑土邪教徒，他们会畏缩着更卖力工作。若发现玩家是来对抗邪教徒的，便会热切告知矿井布局及M18区域守卫的一切信息。村民还知道墓穴（M20区域）与渴石大厅（M21区域）的位置，但未曾进入过那些房间。他们哀求玩家解救区域M19的其他俘虏，并帮助所有人逃离。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"几条粗糙的矿井隧道在这个地方交汇，由旧木材支撑。一些地方的墙上附着着奇怪的菌类或地衣。柔和的微风在通道中呼啸。",randomTableIds:["tbl_242_0"]},{id:"scn_246",locationId:"loc_1e8",name:"M23. 隐藏隧道",activation:{condition:{type:"always"},priority:0},skeleton:["一次局部的塌方部分阻塞了这个废弃的矿井隧道。","一堆碎石高达六尺，阻挡了通道中十尺长的一段，但隧道肯定在坍塌的部分之后继续延伸。","这条隧道延伸了四分之一英里，通向周围山丘中一个隐蔽的地方。","瓦砾使得攀爬变得艰难，但只要花点时间，任何人都能应对。"],flesh:"这条隧道延伸了四分之一英里，通向周围山丘中一个隐蔽的地方。瓦砾使得攀爬变得艰难，但只要花点时间，任何人都能应对。",spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一次局部的塌方部分阻塞了这个废弃的矿井隧道。一堆碎石高达六尺，阻挡了通道中十尺长的一段，但隧道肯定在坍塌的部分之后继续延伸。"},{id:"scn_248",locationId:"loc_1e8",name:"M24. 古老阶梯",activation:{condition:{type:"always"},priority:0},skeleton:["这个楼梯通向Tyar-Besil的废墟，从圣石矿井中出来。","通道通向一个由铁栅栏制成的大门，它阻挡了向北的道路，并用链条和挂锁固定。","大门的另一边，磨损的石阶向下延伸并向左拐。","这不是矿井隧道——尽管显然年代久远，但石工几乎完美。","向右，一条短通道通向一扇铁板大门，门从另一边凹陷了。"],flesh:`这个楼梯通向Tyar-Besil的废墟，从圣石矿井中出来。

海伦蕾 和 Jurth 持有这扇大门的钥匙。楼梯下降大约250尺后到达黑土神庙（见 第四章）。任何矮人都能认出这些台阶是矮人石工，很可能有数千年的历史。

向东的门被锁住了，通向M21区域；Jurth和Qarbo持有钥匙。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_miraj_vizann","npc_renwick"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"通道通向一个由铁栅栏制成的大门，它阻挡了向北的道路，并用链条和挂锁固定。大门的另一边，磨损的石阶向下延伸并向左拐。这不是矿井隧道——尽管显然年代久远，但石工几乎完美。向右，一条短通道通向一扇铁板大门，门从另一边凹陷了。"},{id:"scn_24b",locationId:"loc_24b",name:"赤月大厅",activation:{condition:{type:"always"},priority:0},skeleton:["埃力萨·空壶，曾经是一位德鲁伊的火教徒，已经向Dessarin Valley发送消息，声称一个鲜为人知（且虚构的）德鲁伊结社子——赤月圈子知道柳条巨人的仪式，这是一种可以恢复动荡地区自然平衡的仪式。","几个小组已经在赤月大厅下方的斜坡上设立了营地，等待Elizar邀请他们参加仪式。","他说服了聚集在这里的人，他是赤月圈子的德鲁伊，并且承诺在仪式进行时教其他人这个仪式。","这里的气氛是节日般的期待。","真正的德鲁伊们很兴奋地想见到他们的同伴，并向神秘但强大的Elizar学习。"],flesh:`埃力萨·空壶，曾经是一位德鲁伊的火教徒，已经向Dessarin Valley发送消息，声称一个鲜为人知（且虚构的）德鲁伊结社子——赤月圈子知道柳条巨人的仪式，这是一种可以恢复动荡地区自然平衡的仪式。几个小组已经在赤月大厅下方的斜坡上设立了营地，等待Elizar邀请他们参加仪式。他说服了聚集在这里的人，他是赤月圈子的德鲁伊，并且承诺在仪式进行时教其他人这个仪式。这里的气氛是节日般的期待。真正的德鲁伊们很兴奋地想见到他们的同伴，并向神秘但强大的Elizar学习。

赤月大厅曾经是一个有外围防护墙的中心塔楼。现在这些墙壁已成为倒塌的废墟，而塔楼正在修复中。以下特征是该地点的共同特点。任何例外情况都会在适用的区域中注明。

火元素的影响创造了一片烟雾弥漫的污霭，使得该区域2。污霭中的一个亮点指示着太阳或月亮的位置。

这个区域的潜在敌人多种多样。火教信徒伪装成赤月之环的仆人。在他们当中，只有埃利扎尔具有德鲁伊的能力。

山腰上燃起了几堆篝火。每当一个生物在回合中首次进入火焰，或是其回合开始时在火焰中，篝火将对其造成1d10点火焰伤害。你可以根据火焰的大小调整伤害值。

在堡垒墙内，在每个篝火大约20尺范围内，以及沿着小径，地面足够平坦，不会构成阻碍。其他区域对于那些在地面上向山上移动的人来说是3。

帆布帐篷足够高，人类可以在里面蹲下。大部分帐篷的地板上散落着铺盖和衣物。大多数帐篷内部或从支撑帐篷入口的框架上挂着灯笼。

这里的大多数访客携带2d10金币的混合货币和一些小贵重物品。

由于烟雾，角色们可以潜行过去或在不引起其他人注意的情况下克服一个营地。他们是否吸引附近营地的注意取决于他们有多安静。请记住，棕熊（营地Hc2）、狼人（营地Hc3）和座狼（营地Hc7）都拥有敏锐的感官，这些感官不依赖于视觉。

营地的居民只有在明显输掉战斗时才会发出警报。然而，除非有特殊情况，否则他们不会一轮又一轮地重复警报。

一旦战斗开始，援军会分批到达。可以想象，一旦几个营地清空，其余的营地就会躲藏起来，希望攻击其他营地的东西不会朝他们的方向来。

角色们可以通过绕过山丘，从北面攀登来完全避开营地。山的北面陡峭但可通行，可以攀登而无需进行属性检定。

四位德鲁伊（Varigo、Mahood、Iniri和Fariya）期待着柳条巨人的仪式，并希望它能够促进Dessarin Valley的德鲁伊之间的更大合作。这些德鲁伊已经在庆祝，希望仪式能够成功。他们为角色们提供食物和饮料，包括一小桶白兰地的几口，并鼓励团队过夜并见证仪式，该仪式应该在明天进行。

火之邪教徒们已决定这些德鲁伊不适合被纳入邪教。Elizar计划在仪式中将他们喂给柳条巨人。

这些德鲁伊只有在受到攻击时才会战斗，会激励他们的两个赤鹿伙伴投入战斗。一旦他们中的一半（包括麋鹿）倒下，他们就会乞求怜悯。

当第一次检测到干扰时，Hc2营地会到达。如果干扰持续存在，Hc3营地会到达。

德鲁伊们在他们其中一个帐篷的木箱中放有一张en=Elemental Bane的卷轴和一张en=Warding Wind的卷轴（关于这两个法术的描述请参阅附录 B）。

这些人是两位永恒烈焰祭司（见第七章），自称是Aylbrith和Ingulf，伪装成赤月之环的德鲁伊。他们身边有一只捕获的棕熊以增强他们的伪装。他们热情地问候那些显然不怀敌意的访客，询问问题以确定角色们访问赤月大厅的原因。

如果熊无法触及到10英尺内的某个人，它会使用它的动作进行一次DC 20力量检定，成功则挣脱束缚。一旦获得自由，它如果无法触及角色，就会攻击火焰邪教徒。

营地Hc1首先到达，尽管那个营地的德鲁伊尝试通过交谈而不是战斗来解决问题。如果干扰很大或持续时间较长，Hc6营地会到达。

人类Storol和Wiglaf是狼人。他们在这里是因为他们想知道德鲁伊们在做什么。他们认为柳条巨人的仪式是真实的。

兽化人们并不知道，当火教信徒访问这个营地时，他们已经通过了初步测试。火教并不知道Storol和Wiglaf是兽化人，但他们注意到了这对伙伴的杀手本能。

这些狼人假装对仪式感兴趣，但与陌生人长时间交谈使他们感到沮丧。任何对话中的敌意都会让他们突然发怒，变身为混合形态并发动攻击。

Hc4营地首先到达，如果干扰持续，则Hc6营地随后到达。这些增援会攻击角色和狼人。

这些人是一个永恒火焰祭司和三名永恒火焰守卫（见第七章了解两者）。这位牧师——一个名叫Lytin的半精灵——看起来像德鲁伊，并且尝试进行所有的对话。她的守卫——Biart、Orm和Malin——看起来像游侠，任何对话持续的时间越长，他们就越显得紧张。

营地Hc3首先到达，但营地Hc5可能会对持续的干扰做出反应。

这个营地有一个真正的德鲁伊，名叫Gariena，还有两个小仙灵，名叫Flix和Afid。他们在这里是为了参与仪式。Gariena有一种期待感，但她想知道为什么她从未听说过柳条巨人的仪式。她也想知道为什么准备工作要花这么长时间。

Gariena只有在受到攻击时才会战斗，并且乐意与友好的角色分享她的篝火。然而，没有人可以在这里扎营。精灵们不可信，无法保证不恶作剧，而Gariena不想惹麻烦。

营地Hc4到达，首先攻击入侵者，然后试图消灭Gariena和仙女。火教不认为Gariena具备成为邪教徒的资质。

Gariena有一个装有40银币和18金币的钱袋，此外，她还戴着一枚价值25金币的银戒指，携带着一张en=Lesser Restoration卷轴和一张en=Skywrite卷轴（见附录 B）。

三个正在睡觉的德鲁伊——Comnall、Murcadh和Ragnad——如果角色们公开接近会醒来。第四个人是Sauruki，一个破碎波涛祭司（见第七章）水教派派他来弄清楚火教派在这里的动向。他们对陌生人很怀疑，但Sauruki对角色们的身份很好奇。

火教信徒还没有对这群人做出决定，尽管Sauruki已经得出结论，火教信徒正在寻找新信徒。

Sauruki尽量保持距离，谨慎作战。他反复做出水之邪教的标志，交叉他的食指并触碰他的拇指，希望角色们与水之邪教有关联。

Hc7营地到达。如果干扰持续，Hc3营地也会到达。

这些罩着兜帽的身影是三个熊地精，伴随着两只座狼们。直到最近，这个营地还被一些没有通过火教检验的德鲁伊占据，他们被喂给了柳条巨人。熊地精试图在远处看起来像德鲁伊，直到其他营地被清空。知道他们不可能在近距离欺骗任何人，他们立即发起攻击。

营地Hc6首先到达。德鲁伊们起初不确定要与谁战斗，尽管角色们可以通过一次成功的DC 10魅力（游说）检定来说服他们。

这些地精总共携带了68枚铜币，42枚银币和55枚金币。

队伍仍然可以处理山坡上仍然存在的露营者。

位于区域H6的隧道通向永恒之焰神殿的区域E1。或者，你也可以允许玩家角色下到永恒之焰神殿中，让他们亲身体验其中的危险。`,spotlightRefs:[],presentNpcIds:["npc_elizar_dryflagon"],availableInfoIds:["info_pota_four_keeps"],encounterIds:[],treasureSlotIds:["trs_24b_0","trs_24b_1","trs_24b_2"],eventIds:[],tone:"tension",_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`透过覆盖在山丘上的薄雾，可以看到一座被废墟墙环绕的方塔。塔前燃烧着一堆篝火，形状像一个火焰巨人。塔下斜坡上散布着七个篝火，周围聚集着帐篷。人形身影蜷缩在这些较近的篝火旁。一条小径通向这些山坡上的营地。

四个穿着长袍的人类——两个男性，两个女性——在篝火周围吟唱。在火光的边缘，有两头巨大的麋鹿，正平静地咀嚼着。

两个穿着长袍的人类男子站在篝火前。在篝火的另一边，一头棕色的熊被拴在一根钉在地上的木桩上。

两个粗犷的人类坐在一个巨大的篝火旁。他们穿着简陋，体毛浓密。

这里的一位半精灵女性穿着长袍，而她的三位同伴——一位人类女性和两位人类男性——穿着结实的衣物和胸甲。穿盔甲的三个人在篝火上用烤肉串烤食物。

这个篝火比其他的稍微小一些。一位穿着长袍的精灵女性在演奏小提琴，两个小精灵在火堆上方的烟雾中跳舞。

三个人在篝火旁打盹，而第四个人则靠在一根手杖上，显然感到极其无聊。

这个边缘营地有三个魁梧的身影站在火光旁，他们的长袍兜帽被拉起。两只座狼休息在火光的边缘。`,dmGuidance:`详情请参阅城主指南第五章"冒险环境"中的"冒险环境"表格。
如果角色们没有被他们的宣称所安抚，邪教徒们就会发动攻击。
如果角色们赢得她的好感，她会将她的卷轴作为礼物送给他们，帮助他们在对抗邪恶元素教派的斗争中。
如果角色们看起来可能会破坏仪式，德鲁伊们会发起攻击。
当角色们击败埃利扎尔和他的追随者时，这个场景基本上就结束了。
如果玩家角色尚未准备好探索该神殿，来自神殿的力量可能会现身将他们驱离。`,offerableQuestIds:["qst_main_pota"]},{id:"scn_276",locationId:"loc_24b",name:"H1. 庭院",activation:{condition:{type:"always"},priority:0},skeleton:["环绕着中央塔楼的城墙废墟之外，是一个杂乱无章的庭院，庭院里布满了帐篷。","一个两层楼高的人体形状的柳条巨人在这里熊熊燃烧。","两个穿着长袍的身影站在柳条巨人附近，他们的头低垂在祈祷中。","这座塔正在维修中，木制脚手架高达三十尺，横跨东西两侧。","灯笼挂在固定在木制品上的支架和杆上。"],flesh:`这座塔正在维修中，木制脚手架高达三十尺，横跨东西两侧。灯笼挂在固定在木制品上的支架和杆上。两名手持十字弓的守卫从西侧的脚手架上监视着庭院。塔的南侧有一个宽阔的门道被瓦砾堵住，很可能是曾经的主入口。

这两个祈祷的雕像实际上是永恒烈焰祭司（参见第七章）。他们伪装成德鲁伊，但没人应该出现在庭院中，因此他们会攻击入侵者。在她的第一个行动中，一名祭司站在柳条巨人面前喊道："醒来吧，清除这个地方的卑劣之人！"她接下来的两个行动会重复这一召唤。如果她死亡，另一名祭司会用他的行动做同样的事情。如果祭司们成功召唤柳条巨人三次，请参见区域H2。

犬舍（区域H3）的守卫加入战斗。脚手架（区域H4）上的守卫对庭院内的骚动反应较慢，因为某些类似事件是火元素教派在给柳条巨人喂食。他们会在战斗的第二轮加入，从脚手架上进行远程攻击，除非有理由下去。如果战斗持续，区域H5的生物也会加入。根据你的选择，山坡营地的居民也可能作为增援出现，从营地Hc6开始，然后是营地Hc3。一些营地居民可能受到影响去帮助角色。`,spotlightRefs:[],presentNpcIds:["npc_elizar_dryflagon"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"环绕着中央塔楼的城墙废墟之外，是一个杂乱无章的庭院，庭院里布满了帐篷。一个两层楼高的人体形状的柳条巨人在这里熊熊燃烧。两个穿着长袍的身影站在柳条巨人附近，他们的头低垂在祈祷中。"},{id:"scn_27a",locationId:"loc_24b",name:"H2. 柳条巨人",activation:{condition:{type:"always"},priority:0},skeleton:["从燃烧的柳条巨人那里传来阵阵热浪，但木制结构却能够包含火焰而不被它们吞噬。","柳条巨人中捆绑着一个火元素。","它保持静止，直到塔架开始倒塌，祭司召唤它（见H1区域），或者角色们伤害了柳条巨人。","一旦它出现，元素将攻击任何不可能被误认为是火教徒的生物。","它还会燃烧附近任何易燃的东西。"],flesh:`柳条巨人中捆绑着一个火元素。它保持静止，直到塔架开始倒塌，祭司召唤它（见H1区域），或者角色们伤害了柳条巨人。

一旦它出现，元素将攻击任何不可能被误认为是火教徒的生物。它还会燃烧附近任何易燃的东西。一旦元素出现，柳条巨人本身也开始燃烧，就像区域H4的脚手架一样。`,spotlightRefs:[],presentNpcIds:["npc_elizar_dryflagon"],availableInfoIds:[],encounterIds:["enc_27a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"从燃烧的柳条巨人那里传来阵阵热浪，但木制结构却能够包含火焰而不被它们吞噬。"},{id:"scn_27c",locationId:"loc_24b",name:"H3. 狗舍",activation:{condition:{type:"always"},priority:0},skeleton:["这些倒塌的墙壁围绕着一个浅坑，这里可能曾经是一个地下室。","两只地狱猎犬和一位永恒火焰守护者（见第七章）在这里站岗。"],flesh:"两只地狱猎犬和一位永恒火焰守护者（见第七章）在这里站岗。",spotlightRefs:[],presentNpcIds:["npc_elizar_dryflagon"],availableInfoIds:[],encounterIds:["enc_27c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这些倒塌的墙壁围绕着一个浅坑，这里可能曾经是一个地下室。"},{id:"scn_27e",locationId:"loc_24b",name:"H4. 脚手架",activation:{condition:{type:"always"},priority:0},skeleton:["塔楼的脚手架高30尺，长度也相同。","它很容易攀爬，并且每上升7尺就有一个走道。","两个永恒火焰守卫（见第七章）从脚手架上的栖息处监视着庭院，他们不愿意被卷入近战战斗。","根据您的选择，可能是由于掉落的灯笼或迷途的火球术，脚手架的一部分可能会着火。","这样的火焰在每轮开始时向每个方向蔓延5尺，直到整个结构被完全吞没。"],flesh:`塔楼的脚手架高30尺，长度也相同。它很容易攀爬，并且每上升7尺就有一个走道。两个永恒火焰守卫（见第七章）从脚手架上的栖息处监视着庭院，他们不愿意被卷入近战战斗。

根据您的选择，可能是由于掉落的灯笼或迷途的火球术，脚手架的一部分可能会着火。这样的火焰在每轮开始时向每个方向蔓延5尺，直到整个结构被完全吞没。从脚手架第一次着火开始1分钟后，每分钟随机选择 1d2 个10尺的区域坍塌，直到整个结构变成一片燃烧的废墟。`,spotlightRefs:[],presentNpcIds:["npc_elizar_dryflagon"],availableInfoIds:[],encounterIds:["enc_27e"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_27f",locationId:"loc_24b",name:"H5. 上层入口室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的门只能从脚手架的顶部进入。","这个温暖明亮的房间在木地板上有一个大洞，石制楼梯沿着北墙向上延伸。","除非他们已经在H2区域加入了战斗，否则这里有两个永恒火焰守卫（见第七章），由一个作为凡尼弗和Elizar之间使者的火矮人陪同。","他们渴望将敌人引诱到地板上的洞口附近，然后将他们推下去，让他们掉入20尺深的H6区域。","木制楼梯通往H7区域。"],flesh:`这个房间的门只能从脚手架的顶部进入。塔墙由粗糙的毛石建成，因此可以通过成功的DC 10力量（运动）检定攀爬。

除非他们已经在H2区域加入了战斗，否则这里有两个永恒火焰守卫（见第七章），由一个作为凡尼弗和Elizar之间使者的火矮人陪同。他们渴望将敌人引诱到地板上的洞口附近，然后将他们推下去，让他们掉入20尺深的H6区域。

木制楼梯通往H7区域。

如果此处的战斗持续超过3轮，区域H7便会醒来。他们会警告H8区域的埃利扎，让埃利扎及其邪教徒有时间在H7区域设下埋伏。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_elizar_dryflagon"],availableInfoIds:[],encounterIds:["enc_27f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个温暖明亮的房间在木地板上有一个大洞，石制楼梯沿着北墙向上延伸。"},{id:"scn_283",locationId:"loc_24b",name:"H6. 下降之路",activation:{condition:{type:"always"},priority:0},skeleton:["一堆巨大的瓦砾——来自上方楼层的家具和地板——位于这个房间的中央。","一群小型火元素生物在北墙的木梁上燃烧，那里有一个向下的隧道。","碎石覆盖了曾经是塔楼主要入口的地方，但五个火童正在燃烧这些碎片，以使北边地板上的隧道变得更大。","它们会攻击任何看起来不像火教信徒的人。","隧道蜿蜒向下，最终连接至永恒圣焰神殿的区域E1（参见第四章）。"],flesh:`碎石覆盖了曾经是塔楼主要入口的地方，但五个火童正在燃烧这些碎片，以使北边地板上的隧道变得更大。它们会攻击任何看起来不像火教信徒的人。

隧道蜿蜒向下，最终连接至永恒圣焰神殿的区域E1（参见第四章）。`,spotlightRefs:[],presentNpcIds:["npc_elizar_dryflagon"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一堆巨大的瓦砾——来自上方楼层的家具和地板——位于这个房间的中央。一群小型火元素生物在北墙的木梁上燃烧，那里有一个向下的隧道。"},{id:"scn_287",locationId:"loc_24b",name:"H7. 邪教徒营房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有十几个睡袋散落在地板上。","石阶沿着塔楼北墙内侧继续向上延伸。","如果他们没有被打扰，当角色们到达时，会有一名永恒火焰祭司和两名永恒火焰守卫（见第七章）正在睡觉。","如果埃力萨·空壶位于区域H8且听到此房间内的骚动，他会尽快加入战斗。","画有线条的区域在被踩踏时会发出响亮的吱呀声。"],flesh:`如果他们没有被打扰，当角色们到达时，会有一名永恒火焰祭司和两名永恒火焰守卫（见第七章）正在睡觉。

如果埃力萨·空壶位于区域H8且听到此房间内的骚动，他会尽快加入战斗。

画有线条的区域在被踩踏时会发出响亮的吱呀声。每轮开始时，掷 1d8。若结果等于或小于站在脆弱地板上的生物数量，地板就会坍塌，使所有生物坠落15尺至区域H5，或35尺至H6区域。`,spotlightRefs:[],presentNpcIds:["npc_elizar_dryflagon"],availableInfoIds:[],encounterIds:["enc_287"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间有十几个睡袋散落在地板上。石阶沿着塔楼北墙内侧继续向上延伸。"},{id:"scn_28c",locationId:"loc_24b",name:"H8. 埃利扎的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间包含一个睡袋、一张桌子和一个书架。","在北墙上，一个高梯子通向天花板上的一个活板门。","埃力萨·空壶（见第七章），一个穿着长袍、携带烟斗的老人，如果他没有加入H7区域的战斗，就会在这里。","在和蔼可亲的外表下隐藏着一个纵火狂的内心。","他不会长时间谈判，更倾向于将角色们烧成虚无。"],flesh:"埃力萨·空壶（见第七章），一个穿着长袍、携带烟斗的老人，如果他没有加入H7区域的战斗，就会在这里。在和蔼可亲的外表下隐藏着一个纵火狂的内心。他不会长时间谈判，更倾向于将角色们烧成虚无。",spotlightRefs:[],presentNpcIds:["npc_elizar_dryflagon"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_28c_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间包含一个睡袋、一张桌子和一个书架。在北墙上，一个高梯子通向天花板上的一个活板门。",dmGuidance:"在伊丽莎的桌子里有250金币，两颗火蛋白石（每颗价值50金币），以及一份en=Flame Arrows卷轴（参见附录 B）。",mapGeometry:{imageRef:"adventure/PotA/038-poa03-10.webp"}},{id:"scn_28f",locationId:"loc_24b",name:"H9. 阁楼上的蝙蝠",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间位于塔楼倾斜的上层屋顶下。","天花板上的洞通往户外。","西侧的短梯子穿过其中一个开口。","房间内充满了覆盖在地板上的排泄物的强烈气味。","四只巨蝙蝠栖息在此处。"],flesh:`四只巨蝙蝠栖息在此处。火元素教徒会定期驱赶它们，但其他蝙蝠会在一周内返回。这些蝙蝠饥饿且富有攻击性，因此会攻击任何通过活板门的人。

梯子向上延伸大约5尺到达一个大约3尺宽的圆形开口。在这个开口外面建有一个小型平台，平台上放置着用于修理屋顶的物资，包括200尺的麻绳和一套攀爬工具。

这个区域有一个像H14区域那样的薄弱地面。掉落的生物会下降15尺掉入H8区域。`,spotlightRefs:[],presentNpcIds:["npc_elizar_dryflagon"],availableInfoIds:[],encounterIds:["enc_28f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间位于塔楼倾斜的上层屋顶下。天花板上的洞通往户外。西侧的短梯子穿过其中一个开口。房间内充满了覆盖在地板上的排泄物的强烈气味。"},{id:"scn_295",locationId:"loc_295",name:"空气、土、火和水",activation:{condition:{type:"always"},priority:0},skeleton:["在第3章中，角色们成功揭露了一些或全部元素教派的地表前哨站作为罪恶的巢穴。","然而，闹鬼的堡垒只是冰山一角。","每个教派的基地都隐藏在Sumber Hills下方的古老矮人要塞Tyar-Besil深处。","清除闹鬼堡垒中的教派成员给受影响的教派带来了沉重的打击，但除非角色们通过潜入神庙建筑群来跟进他们最初的成功，否则教派会从早期的失败中迅速恢复，并以更大的力量返回。"],flesh:"在第3章中，角色们成功揭露了一些或全部元素教派的地表前哨站作为罪恶的巢穴。然而，闹鬼的堡垒只是冰山一角。每个教派的基地都隐藏在Sumber Hills下方的古老矮人要塞Tyar-Besil深处。清除闹鬼堡垒中的教派成员给受影响的教派带来了沉重的打击，但除非角色们通过潜入神庙建筑群来跟进他们最初的成功，否则教派会从早期的失败中迅速恢复，并以更大的力量返回。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/PotA/039-poa04-01.webp"}},{id:"scn_296",locationId:"loc_295",name:"铲除邪恶",activation:{condition:{type:"always"},priority:0},skeleton:["角色们可能希望尽快攻占四大元素神殿，但他们也需要应对邪教组织持续腐蚀和恐吓德萨林谷人民的行径。","在前往提亚-贝西尔的探险间隙，角色们应该继续他们在 第三章 中开始的调查。","最终，自然灾害、怪物入侵和袭击者活动的增加都是同一种疾病的症候：邪恶元素神庙的存在。","无论角色们选择应对哪些灾难和事件，解决该地区问题的办法都在于Sumber Hills下方的巨大地牢中。","在这个冒险部分的早期，一个或多个角色从他们的派系收到消息，请求帮助解决该地区的其他危险。"],flesh:`角色们可能希望尽快攻占四大元素神殿，但他们也需要应对邪教组织持续腐蚀和恐吓德萨林谷人民的行径。在前往提亚-贝西尔的探险间隙，角色们应该继续他们在 第三章 中开始的调查。

最终，自然灾害、怪物入侵和袭击者活动的增加都是同一种疾病的症候：邪恶元素神庙的存在。无论角色们选择应对哪些灾难和事件，解决该地区问题的办法都在于Sumber Hills下方的巨大地牢中。

在这个冒险部分的早期，一个或多个角色从他们的派系收到消息，请求帮助解决该地区的其他危险。这个机会允许你向玩家介绍在第六章中描述的一次支线探险。

召唤可能是一个口头信息，由一个在角色们的基地城镇等待的NPC传达。一个信使可能会冒险到野外，在角色们的营地找到他们。可以使用魔法，如一个en=Sending法术。无论派对选择回应还是继续他们当前的路线，都取决于玩家。

角色们在红松镇有一个问题：Justran Daehl，Highsun之盔酒吧的地窖管理员（啤酒采购员），是碎浪教派的间谍。自从他们到达该地区以来，他一直在报告队伍的行动。Justran没有在信上签名，但如果角色们在Rivergard或碎浪神庙找到他的一份报告，他们可能通过寻找作者来弄清楚他是谁。

大多数镇民不认识这种笔迹，但那些与Justran和Highsun的Helm经常做生意的人可以识别他的字迹。这些人包括Kaylessa（摇摆剑旅馆的所有者）、Malandro Gaelkur（Gaelkur家族的成员）和Aerego Bethendur（仓库所有者）。

如果被质问，Justran Daehl会强烈否认指控。他声称角色们提出的任何作为证据的信件都是"明显的伪造品"，直到他看到逃跑的机会。这个教派间谍相当于一个匪徒首领。如果这场遭遇发生在Helm，并且角色们没有提出有力的反对理由，那么五个平民（酒馆常客）会来为他辩护。他们不是教派的仆人，只是对Justran有误解的旁观者，并试图帮助让他们有酒喝的地窖管理员。

Justran可能会自告奋勇地消灭角色们。这与一瓶剧毒药水有相同的效果，但角色们在他们的豁免检定上有优势，因为Justran不得不将毒药稀释在几个酒壶中。（稀释还使得毒药不太可能致命；Justran在酿造啤酒方面比制造毒药更在行。）

一个简单的调查揭示了那些被下毒的酒壶来自Highsun的Helm旅馆的酒吧，并且Justran Daehl亲自递送并倒了那些麦芽酒。

他知道河堡的一处地下暗流通向"下方的神殿"，尽管他从未去过碎波神殿。他还知道乔利弗·格里姆乔和他的追随者（参见第三章）是水之教派的信徒。

四个元素教派在Sumber Hills下的古老矮人堡垒Tyar-Besil中维持着他们的主要据点。每个教派控制着旧矮人要塞的一部分，并拥有专门奉献给其崇拜元素的圣所。这四个神庙在本章中有描述。

从埋葬的Tyar-Besil到地面有几条地下通道。Feathergale Spire附近的Knifepoint Gully通向Howling Hatred神庙。Dark Stream流经Rivergard Keep，通往Crushing Wave神庙。Ancient Stair从Sacred Stone Monastery下降到Black Earth神庙。最后，Frozen Fire之路从Scarlet Moon Hall下面的地窖通向Eternal Flame神庙。每个元素教派控制着其中一条路线，因此控制着连接到地表前哨的Tyar-Besil四分之一区域。

穿着邪教徒装备的角色可能在潜入神庙方面会取得一定的成功。每个邪教的怪物盟友很少会质疑一群自信前进的邪教徒。邪教的人类成员有很好的机会在近距离发现冒名顶替者，但是能言善辩的角色可能能够将自己伪装成新来的人、重要信息的携带者，或者对抗另一个邪教的潜在盟友。被愚弄的邪教徒坚持带领队伍去见邪教的某个领袖。至少有两名邪教徒作为任何与角色互动的群体的护送者。

邪教徒在角色们攻击他们的要塞时学习和适应。本章描述的四个神庙地牢中，每个地牢都包括一个那个邪教元素先知可能出现的房间。一个先知倒下后，剩下的三个先知撤退到更低的层次，留下他们的手下保卫神庙地牢。

呼啸憎恨神殿: 区域A19

碎浪神殿：区域C25

黑土神殿：区域B23

永恒之火神殿：区域E17

在没有击败那个地牢的先知的情况下，在要塞中逗留是危险的。即使先知撤退到Eye的圣所或元素节点，他们也可以组织这次攻击——来自Eye的幻象和低语指导他们的行动。（然而，在神庙层面内有一些特定区域被特别指出，角色们可能可以在这些地方休息而不引起注意。）

从地牢的较低层次派来的小组包括以下内容：

空气教派：啸怨祭司 和四名 天狗

水教：破碎波涛祭司 和四名 熊地精

土元素教派：黑土祭司和两名食人魔

火之教派：永恒火焰祭司 和四名 大地精

同样，在清理过的闹鬼堡垒中露营也不安全。元素先知通过神谕得知角色们的位置，并派出部队骚扰队伍。小股教派突击队和雇佣兵在Sumber Hills游荡，因此命令其中一个小组攻击位于闹鬼堡垒之一的角色们是一件简单的事情。（见第2章中的"随机遭遇"部分。）为了安全休息，角色们必须隐藏他们的营地或返回附近的定居点。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_pota_prophet_retreat"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[74],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`当角色们忙于摧毁一座神殿时，其他三个邪教组织可以在该地区造成巨大伤害。
如果角色们向这些人中的任何一个展示信件，NPC会识别出笔迹。
如果玩家说"我们向镇上的每个人展示这封信"，Justran会听说这件事，并在角色们找到他之前逃离城镇。
当角色们在返回红松镇后的一个晚上聚集共进晚餐时，他安排给他们提供被下毒的啤酒。
如果角色们抓住了贾斯特兰，在简短的审讯后，他会透露自己是碎波教派的成员。
【角色升级】角色们可能在大约6级时开始这一章节。鼓励玩家按照他们希望的顺序接受本章的挑战——让他们的兴趣推动故事的发展。如果你想控制冒险的节奏，嚎叫仇恨神庙适合6级的派对；破碎波涛神庙适合7级的派对；黑土神庙为8级小组设计；永恒之焰神庙最适合9级角色派对。角色们清理的每一部分地牢应该使派对提升一级。
如果角色们要求见先知或以先知的名义发出威胁，他们在进行欺骗或恐吓进入神庙的属性检定时将获得优势。
当角色们第一次找到这些地点之一时，先知在场，角色们可以与敌人交战。
当角色们杀死每个地牢的先知或消灭这些地点中元素神殿里的怪物时，他们就击败了每个地牢：
如果角色们在四个神庙中的任何一个尝试扎营，而它的元素先知仍然活着，先知会召集援军并派他们去攻击入侵者。
见第七章了解每位牧师的具体数值。`,offerableQuestIds:["qst_main_pota"]},{id:"scn_2a0",locationId:"loc_295",name:"邪教报复",activation:{condition:{type:"always"},priority:0},skeleton:["消灭一个或多个元素教派的地表前哨站标志着角色们成为了危险的敌人。","这些报复性遭遇的时机与派对在克服四个神庙综合体方面的进展相一致。","当一个神庙的先知被击败或其神龛中的怪物被消灭时，该神庙就被克服了。","选择留在地牢中而不返回城镇的队伍可能对反派的报复一无所知。",'当触发"毁灭赛跑"时，角色们从一个派系NPC那里收到一个en=Sending或类似的警告，告知他们一个城镇处于极大危险之中，为他们提供了一个阻止该事件的机会。'],flesh:`消灭一个或多个元素教派的地表前哨站标志着角色们成为了危险的敌人。

这些报复性遭遇的时机与派对在克服四个神庙综合体方面的进展相一致。当一个神庙的先知被击败或其神龛中的怪物被消灭时，该神庙就被克服了。

选择留在地牢中而不返回城镇的队伍可能对反派的报复一无所知。当触发"毁灭赛跑"时，角色们从一个派系NPC那里收到一个en=Sending或类似的警告，告知他们一个城镇处于极大危险之中，为他们提供了一个阻止该事件的机会。

当派对到达Sumber Hills地区的任何定居点时，他们会得知这个消息。

一位商队成员告诉角色们，她看到一群沉默的朝圣者正在前往有关定居点的路上。她详细描述了朝圣者的服装，足以让角色们知道这些朝圣者是元素教派的信徒。他们携带着一个盒子，盒子上刻有元素符号。然后这位商队成员和她的仆人们目睹了这场破坏，但由于距离太远而无法提供任何帮助。

他们从生还者那里得知，邪教徒们走到镇中心，打开了盒子，取出了一个球体，然后逃往山丘，留下了球体。灾难发生在短短几分钟后。许多镇民受伤了，生还者正在临时搭建的避难所中照料伤员。

通过占卜、间谍报告或由上古元素之眼赐予的幻象，邪教徒得知玩家角色们使用哪个定居点作为基地，然后派出一支小队携带一个毁灭法球去破坏那个定居点——最好是在角色们在场的情况下。

教派成员的路径使他们接近角色们碰巧停留的地方。例如，如果角色们在闹鬼堡垒附近的某个地方扎营，他们会在团体从连接堡垒和地牢层的通道出来时发现他们。

这个物品是一个毁灭法球，它已经准备好爆炸了。教派成员将装置从其外壳中取出并等待它爆炸。有关毁灭宝珠的描述和教派成员的具体数值，请参见第七章。该团体的组成取决于涉及的是哪个教派：

一位啸怨祭司，一位飓风，以及八位装备有毁灭法球的嚎叫仇恨的启蒙者

一名黑土祭司，两名黑土守卫，以及四名手持毁灭法球的圣石僧侣

一位永恒火焰祭司，三位永恒火焰守卫，以及一位装备有毁灭法球的怒火者

一名破碎波涛祭司和六名碎浪掠夺者，装备有毁灭法球的水元素球

教派成员用他们的意图挑衅队伍，希望诱使角色们匆忙前去阻止他们，从而被卷入毁灭之中。选择一个目标地点，角色们必须旅行到达，并且给予足够的时间，让队伍能够及时赶到那里。

对Beliard的威胁是真实的。邪教徒在城外几英里处等待，藏身不露，直到指定的攻击时间。否则，邪教徒将在日落前一个小时携带一个毁灭法球向城镇进军。具体哪个邪教团体参与则取决于情况。

两名骑在骏鹰上的羽风骑士，一名空织匠，一名飓风，以及五名熊地精

一名骑在巨鳄上的暗潮骑士，一名测深者，一名破碎波涛祭司，以及六个匪徒们

一只骑在鲨蜥上的穴居鲨鱼，以及两名黑土守卫

三名永恒火焰守卫，两名牛头人和四只地狱猎犬

这些邪教徒愿意在执行任务的过程中自我毁灭。邪教徒还接到命令，确保在爆炸中抓获角色，因此如果他们在远离城镇的地方被拦截，他们仍会尝试引爆宝珠（见第七章）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_pota_retaliation_air_orb","enc_pota_retaliation_earth_orb","enc_pota_retaliation_fire_orb","enc_pota_retaliation_water_orb","enc_pota_race_air","enc_pota_race_water","enc_pota_race_earth","enc_pota_race_fire"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[76],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`在你们到达城镇后的第二天日出后不久，你们听到外面有喧闹声。有人喊道："嘿，停下那个！"片刻之后，声音变成了低沉、奇怪的吟唱。

几个穿着奇特的人站在街道上。一个看起来像牧师的人在吟唱，其他人则打开一个刻有重复元素符号的大型盒子。盒子里，一个类似水晶球的魔法球体在跳动，充满了力量。牧师高举着球体继续吟唱，而其他人则跪拜在它面前。

今晚你的睡眠受到了困扰。半记得的片段和警告似乎在你的脑海中徘徊。然后一个朦胧的身影走进你的心灵之眼，拂去你游离的思绪。"听好了，傻瓜，"它嘲笑道。"你冒犯了上古元素之眼。因为你的亵渎，其他人将受到惩罚。后天日落时分，我们将摧毁Beliard镇。你可以试图阻止我们，但你会失败；没有人能幸免。这是你违抗的代价。"
你的梦中出现了一个新的景象。你站在一个小城镇上方的山坡上。一群模糊的邪教徒站在旁边，凝视着圆圈中心的一个发光的球体。球体跳动着，你突然惊醒。`,dmGuidance:`当队伍继续对Tyar-Besil的教派要塞发起攻击时，元素先知寻找反击的方法，使用他们的毁灭之球。
在角色们击败第一个先知后，当他们返回定居点时运行"不祥的预兆"。
在角色们迫使第二个教派放弃其圣地后，当队伍返回定居点时，进行"鲁莽仇恨"遭遇。
在角色们迫使第三个邪教放弃其神龛后，进行"毁灭赛跑"遭遇战。
如果角色们从未离开，假定邪教徒在'鲁莽仇恨'中摧毁城镇的努力造成了巨大的破坏，而角色们没有在场来阻止。
当角色们忙于探索毁灭的Tyar-Besil时，元素邪教徒使用了一个毁灭法球来攻击该地区的一个城镇。
如果角色们没有接近任何文明地区，他们在荒野中遇到的NPC会传递这个消息。
如果角色们访问了被摧毁的城镇，他们可以确认破坏的程度。
当角色们击败第二个元素神庙时，受到冒犯的邪教徒会进行反击。
当角色们休息时，麻烦就出现在他们的家门口。
如果角色们在城外扎营，当他们发现教派团体前往他们打算攻击的定居点时，就会发生这次遭遇。
当角色们进行调查时，添加以下信息。
在角色们破坏了邪恶元素神庙中的第三个圣地后，剩余的教派派出了一支强大的力量，并携带着来自眼睛圣所的毁灭法球（见第五章），目的是摧毁Dessarin Valley的另一个城镇。
当角色们休息时，邪教徒使用en=Dream法术联系队伍中最突出或最容易辨认的角色。
如果角色们搜索城镇的郊区，他们可以在目标之外与邪教徒交战。`,mapGeometry:{imageRef:"adventure/PotA/040-poa04-02.webp"}},{id:"scn_2a9",locationId:"loc_2a9",name:"嚎叫仇恨之庙",activation:{condition:{type:"always"},priority:0},skeleton:["在普遍的地下黑暗中，一个巨大的裂谷延伸至视线所及之处。","一条粗糙狭窄的楼梯紧贴着裂谷旁的岩石，疯狂地在急转弯处绕过锋利的岩石突起。","楼梯参差不齐，威胁着将旅行者倾倒入裂谷之中。","经过几英里的危险路程后，楼梯在一块宽阔平坦的平台上结束，平台突出在巨大的黑色裂谷之上。","在幽暗中，一个失落的矮人城市在闪烁的洞穴穹顶下成为废墟。"],flesh:`嚎叫仇恨教派在其古代Tyar-Besil的西南区域建立了神庙，那里的矮人在巨大裂缝边缘的一个巨大洞穴中建造了一座宫殿。在洞穴的闪闪发光、矿石覆盖的天花板高耸之处，矮人们建造了宽敞的广场，他们在其中雕刻了高耸的雕像、精致的柱子和巨大的纪念碑。他们利用洞穴中的天然石材，在岩石中雕刻出兵营和其他生活区，并通过点灯的通道连接它们。尽管它是一个堡垒，但也有一些商业和艺术存在，有一个简陋的集市和矮人吟游诗人用吟唱的诗句填满了空气。在一位友好的气巨灵的帮助下，矮人们在洞穴中心建造了一个金字塔形状的宫殿，周围是一个由地下溪流供水的护城河。矮人的创新为洞穴提供了光照、淡水和污水处理。

在高耸的洞穴天花板下，街道连接着几处宽敞的广场，富裕的矮人家庭在这里建立了庄园。在一位被俘的巨灵的帮助下，空气教派努力修复泰尔-贝西尔宫殿，并将其改造成阿莉希·卡罗娜斯的新呼啸憎恨神殿。该区域具有以下特点。任何例外情况都适用于其所标注的区域。

内部天花板高度为15尺，除了中央广场，那里的天花板高度为75尺。

裂缝垂直下降200尺。

单扇门由平衡在中心枢轴上的石板制成。打开门时会产生两个缝隙，每个约3英尺宽。没有锁还能使用，但有些门卡住了。需要进行一次成功的DC 15力量检定来强行打开卡住的门。

双开门有铁铰链，可以像普通门一样朝一个方向或另一个方向打开。

在 区域A4 播放的音乐能在区域 A1、A6 及 A10 南侧隐约听见，而在区域 A2、A3 和 A16 的音量更为明显。

尽管空气邪教徒很少这样做，但空气神庙的许多居民都携带少量财宝。天狗（Kenku）珍视闪亮的小玩意儿，他们总是拥有这样的财宝。拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。

如果Aerisi被击败，嚎叫仇恨神庙中的空气教徒会四散逃跑。一些人永远地放弃了教派，而其他人则撤退到眼睛神殿和嚎叫洞穴。您可以随意追踪这些教徒。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_2a9_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"在普遍的地下黑暗中，一个巨大的裂谷延伸至视线所及之处。一条粗糙狭窄的楼梯紧贴着裂谷旁的岩石，疯狂地在急转弯处绕过锋利的岩石突起。楼梯参差不齐，威胁着将旅行者倾倒入裂谷之中。经过几英里的危险路程后，楼梯在一块宽阔平坦的平台上结束，平台突出在巨大的黑色裂谷之上。在幽暗中，一个失落的矮人城市在闪烁的洞穴穹顶下成为废墟。破碎的雕像矗立在空荡荡的广场中，盲目地凝视着黑暗。一座巨大的阶梯金字塔在悬崖边缘升起，环绕它的护城河中，一道雾蒙蒙的瀑布在裂谷的边缘低语。",dmGuidance:"当角色们从Knifepoint Gully的隧道跟随而来（见第三章），请阅读以下文本："},{id:"scn_2b3",locationId:"loc_2a9",name:"A1. 宫殿区入口",activation:{condition:{type:"always"},priority:0},skeleton:["两个矮人的浮雕面朝对方，形成跨越壁架的拱门。","穿过拱门，在地下夜晚中，一个失落的矮人城市的块状轮廓蔓延开来。","从某个地方传来一声痛苦的哀嚎，紧接着是一连串气喘吁吁的呜咽恳求。","然后整个城市似乎加入了合唱，伴随着因折磨而疯狂的生物的尖叫声。","那些痛苦的尖叫声实际上来自四个潜伏在门房（A2区域）内的天狗。"],flesh:"那些痛苦的尖叫声实际上来自四个潜伏在门房（A2区域）内的天狗。",spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2b3"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"两个矮人的浮雕面朝对方，形成跨越壁架的拱门。穿过拱门，在地下夜晚中，一个失落的矮人城市的块状轮廓蔓延开来。从某个地方传来一声痛苦的哀嚎，紧接着是一连串气喘吁吁的呜咽恳求。然后整个城市似乎加入了合唱，伴随着因折磨而疯狂的生物的尖叫声。"},{id:"scn_2b5",locationId:"loc_2a9",name:"A2. 门房",activation:{condition:{type:"always"},priority:0},skeleton:["一座矮胖的石制门房矗立在矮人城市的入口处。","穿过敞开的大门，一条拱形的走廊蜿蜒穿过坚固的石墙，墙上布满了从每个角度窥视的箭缝。","在这个致命走廊的尽头是这个失落的矮人城市的入口。","四名天狗占据了门房结构，隐藏在箭缝后面。","除非角色们通过箭缝发现并攻击它们，否则它们不会向角色们显露自己。"],flesh:`四名天狗占据了门房结构，隐藏在箭缝后面。除非角色们通过箭缝发现并攻击它们，否则它们不会向角色们显露自己。它们通过模仿天狗折磨者（区域A12）折磨的受害者的尖叫声和恳求声来折磨角色们。

门房的设计采用锯齿形图案，旨在为矮人防御者提供掩护，同时减缓敌人的进攻速度。门房两侧的每个角落都有两个箭缝，允许门房结构内的生物在门房通道内朝多个方向射击。每个箭缝还配备了一个铁百叶窗，可以关闭并锁上，这样门房内的生物只会从一个方向受到威胁。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2b5"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一座矮胖的石制门房矗立在矮人城市的入口处。穿过敞开的大门，一条拱形的走廊蜿蜒穿过坚固的石墙，墙上布满了从每个角度窥视的箭缝。在这个致命走廊的尽头是这个失落的矮人城市的入口。"},{id:"scn_2b9",locationId:"loc_2a9",name:"A3. 机械室",activation:{condition:{type:"always"},priority:0},skeleton:["两根巨大的石柱在这座巨大房间的地板和天花板上穿孔。","石制横梁穿过柱子形成辐条，创造出巨大的轮子。","两个穿着长袍的人影用鞭子驱使五个看起来可怜的人类用尽全力推着最西边轮子的横梁。","当轮子缓慢地逆时针转动时，你听到隐藏在石板地面深处的巨大齿轮发出的摩擦声。",'两位嚎叫仇恨祭司（见第七章）监督着五位平民慢慢转动最西边的轮子（见下文"石轮"）。'],flesh:`两位嚎叫仇恨祭司（见第七章）监督着五位平民慢慢转动最西边的轮子（见下文"石轮"）。完成一次旋转后，他们停下来等待进一步的指示。

这些平民是即将成为入门者的邪教徒。祭司们鞭打这些邪教徒，以在最终入教前击垮他们的意志。通过一次成功的魅力（威吓）检定 DC 15，可以让一个平民 恐慌并投降。

石轮操作着这个地牢复合体地板下的一个复杂机械装置。这个机械装置控制着护城河（A11区域）的水位。将任一车轮顺时针转动一圈，护城河的水位会降低10尺。将车轮逆时针转动一圈，水位会上升10尺。一个车轮不能向任一方向转动超过一圈。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2b9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`两根巨大的石柱在这座巨大房间的地板和天花板上穿孔。石制横梁穿过柱子形成辐条，创造出巨大的轮子。
两个穿着长袍的人影用鞭子驱使五个看起来可怜的人类用尽全力推着最西边轮子的横梁。当轮子缓慢地逆时针转动时，你听到隐藏在石板地面深处的巨大齿轮发出的摩擦声。`,dmGuidance:"如果角色发动攻击，祭司会命令这些平民战斗至死。"},{id:"scn_2bd",locationId:"loc_2a9",name:"A4. 缪斯广场",activation:{condition:{type:"always"},priority:0},skeleton:["一座石制喷泉矗立在宏伟广场的中央，其侧面雕刻成手持鼓和号角的矮人形状。","在喷泉附近，几个身穿羽毛服装的人在骨制长笛上演奏着尖锐刺耳、不和谐的曲调。","聚集在喷泉旁的这群人物是风吟者，一个由阿莉希·卡罗娜斯的吟游诗人犁风者和五名嚎叫仇恨的启蒙者组成的音乐团体（有关两者的详细信息，请参阅第七章）。","这些学徒中没有一个人拥有任何音乐天赋。","对平庸的新信徒感到沮丧的犁风者会问角色们是否是熟练的音乐家，以及他们是否愿意参加乐队的试镜。"],flesh:`聚集在喷泉旁的这群人物是风吟者，一个由阿莉希·卡罗娜斯的吟游诗人犁风者和五名嚎叫仇恨的启蒙者组成的音乐团体（有关两者的详细信息，请参阅第七章）。这些学徒中没有一个人拥有任何音乐天赋。

对平庸的新信徒感到沮丧的犁风者会问角色们是否是熟练的音乐家，以及他们是否愿意参加乐队的试镜。

如果一个吟游诗人角色或一个角色证明了他或她对犁风者的能力，他会招募角色们加入乐队，并提供给他们入门者的长袍和长笛。犁风者没有告诉角色们那些使阿莉希·卡罗娜斯不悦的吟游诗人会发生什么。

吟游诗人们的长笛是由未能用其音乐取悦 阿莉希·卡罗娜斯 的昔日风语者的空心雕刻骨头制成。角色可以通过成功的 DC 10 感知（医药）检定辨认出这些乐器是人形骨头。

如果陷入一场他知道自己会输的战斗，犁风者会逃往区域A19。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2bd"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一座石制喷泉矗立在宏伟广场的中央，其侧面雕刻成手持鼓和号角的矮人形状。在喷泉附近，几个身穿羽毛服装的人在骨制长笛上演奏着尖锐刺耳、不和谐的曲调。",dmGuidance:`如果角色们和平地接近Windwyrds，邪教徒会停止演奏。
如果角色们采用Windwyrds的服装和乐器，他们就有机会顺利通过风元素教派的领域。`},{id:"scn_2c2",locationId:"loc_2a9",name:"A5. 泰亚-贝希尔商店",activation:{condition:{type:"always"},priority:0},skeleton:["这些商店的所有者早已离去，但门上的雕刻表明了他们以前的职业：裁缝、珠宝商、铁匠、面包师。","现在这些地方只剩下一些小的、散落着碎石的房间。","一只在旧Tyar-Besil商店中狩猎的斗篷怪在食物来源（邪教徒）到来后立即进入了该区域。","每当角色们进入其中一家商店时，他们有25%的几率遇到斗篷怪。","这个生物要么伪装成斗篷在显眼处，要么藏在天花板上。"],flesh:`一只在旧Tyar-Besil商店中狩猎的斗篷怪在食物来源（邪教徒）到来后立即进入了该区域。每当角色们进入其中一家商店时，他们有25%的几率遇到斗篷怪。这个生物要么伪装成斗篷在显眼处，要么藏在天花板上。斗篷怪对角色们使用打击和逃跑的战术，而不是冒险进行一场持久的战斗。

斗篷怪已经收集了这个区域里所有的贵重物品，以及它受害者的财富。它积累了价值150金币的硬币和贵重物品。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2c2"],treasureSlotIds:["trs_2c2_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这些商店的所有者早已离去，但门上的雕刻表明了他们以前的职业：裁缝、珠宝商、铁匠、面包师。现在这些地方只剩下一些小的、散落着碎石的房间。"},{id:"scn_2c5",locationId:"loc_2a9",name:"A6. 维加丹广场",activation:{condition:{type:"always"},priority:0},skeleton:["一枚硬币上刻有微笑矮人形象的磨损图案，被印在铺砌这个广场的石板上。","一个老旧的标志，上面带有同样的形象，悬挂在广场中心一个大厅的门上方。","七个天狗在大厅后面的小巷中徘徊，搜寻瓦砾中的宝藏。"],flesh:"七个天狗在大厅后面的小巷中徘徊，搜寻瓦砾中的宝藏。",spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2c5"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一枚硬币上刻有微笑矮人形象的磨损图案，被印在铺砌这个广场的石板上。一个老旧的标志，上面带有同样的形象，悬挂在广场中心一个大厅的门上方。",dmGuidance:"当角色们接近小巷时，天狗躲藏起来，并试图用黑暗中的幽灵般的声音吓跑派对。"},{id:"scn_2c7",locationId:"loc_2a9",name:"A7. 莫拉丁广场",activation:{condition:{type:"always"},priority:0},skeleton:["数条街道交汇于一个广场，广场中央矗立着一座三十尺高的花岗岩摩拉丁雕像，伸出的拳头握着一盏巨大的石制提灯。","一盏2从提灯中散发出来，照亮了广场周围破败的店铺，其内部房间延伸至岩石之中。","两名嚎叫仇恨的启蒙者，一名飓风，一名空织匠，以及两名天狗被派驻在此，以监视来自地下黑暗（Underdark）的捕食者的入侵。","（见第七章以获取教派成员的具体数值。","弯曲的北向隧道通往永恒之火神殿的区域E27。"],flesh:`两名嚎叫仇恨的启蒙者，一名飓风，一名空织匠，以及两名天狗被派驻在此，以监视来自地下黑暗（Underdark）的捕食者的入侵。（见第七章以获取教派成员的具体数值。）

弯曲的北向隧道通往永恒之火神殿的区域E27。

摩拉丁的雕像除了眼睛和灯笼的面板外都是由实心花岗岩制成的，这些部分是由石英制成的。在灯笼内部空心处施放的en=Continual Flame法术照亮了整个广场。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2c7"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"数条街道交汇于一个广场，广场中央矗立着一座三十尺高的花岗岩摩拉丁雕像，伸出的拳头握着一盏巨大的石制提灯。一盏2从提灯中散发出来，照亮了广场周围破败的店铺，其内部房间延伸至岩石之中。"},{id:"scn_2cc",locationId:"loc_2a9",name:"A8. 废弃别墅",activation:{condition:{type:"always"},priority:0},skeleton:["这座城市这一部分的独立建筑不过是些破碎的外壳和成堆的瓦砾。","深洞将鹅卵石街道撕裂，建筑物张着大口，墙壁变成了碎石。","尘埃颗粒在空中飘浮，在寂静的阴暗中，有东西在石头上抓挠。","一只掘土巨怪在这些破碎的建筑物中筑巢。","风元素教派赶走了它通常的猎物，现在这只掘土巨怪以走进其领地的教派成员为食。"],flesh:`一只掘土巨怪在这些破碎的建筑物中筑巢。风元素教派赶走了它通常的猎物，现在这只掘土巨怪以走进其领地的教派成员为食。掘土巨怪从岩石墙后出击捕获猎物，然后再次挖洞逃走。风元素教派每周至少有一个成员被掘土巨怪捕食，它非常狡猾，会掩盖它的隧道。

在被毁坏的别墅中搜寻会发现92金币，一个刻有纪念摩拉丁的葬礼仪式的小型锑金砧（150金币），以及一根不动权杖。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2cc"],treasureSlotIds:["trs_2cc_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座城市这一部分的独立建筑不过是些破碎的外壳和成堆的瓦砾。深洞将鹅卵石街道撕裂，建筑物张着大口，墙壁变成了碎石。尘埃颗粒在空中飘浮，在寂静的阴暗中，有东西在石头上抓挠。"},{id:"scn_2cf",locationId:"loc_2a9",name:"A9. 墓穴",activation:{condition:{type:"always"},priority:0},skeleton:["巨大的石门上覆盖着矮人神祇的侧面浮雕，高耸十五尺。","矮人神祇面带严肃的表情，身着正式的礼服。","门从外面被钉死了。","浮雕描绘了Dumathoin，山下秘密的守护者，以及Marthammor Duin，小径的守望者和发现者。","Besilmer矮人尊崇这些神作为他们死者的守望者。"],flesh:`浮雕描绘了Dumathoin，山下秘密的守护者，以及Marthammor Duin，小径的守望者和发现者。Besilmer矮人尊崇这些神作为他们死者的守望者。

风元素教派的信徒开始探索这些坟墓，但在食尸鬼的攻击后他们暂停了探索，并且封闭了这些坟墓。

打开这些门需要移除楔入的尖刺，使用正确的工具需要几分钟。一次成功的DC 25力量检定可以让角色在不移除尖刺的情况下强行打开门。

七只食尸鬼们在场地上徘徊，一旦意识到门已经打开，它们就会立即发动攻击。如果A7区域还有任何教派成员，他们会听到战斗声并撤退到宫殿（A18区域）。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2cf"],treasureSlotIds:["trs_2cf_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`巨大的石门上覆盖着矮人神祇的侧面浮雕，高耸十五尺。矮人神祇面带严肃的表情，身着正式的礼服。门从外面被钉死了。

门后，地面向下倾斜，通向一个巨大的裂隙。矮人的坟墓和地穴在裂隙边缘前蔓延，宛如一个微型城市。消瘦的身影从这些坟墓后面出现，用饥饿的目光盯着你。`,dmGuidance:`如果角色打开了门，请阅读以下文字：
如果角色们掠夺了泰亚-贝希尔的墓穴，他们会找到 3d10 个价值每个50金币的小雕像、纪念品和葬礼面具。`},{id:"scn_2d3",locationId:"loc_2a9",name:"A10. 宫殿广场",activation:{condition:{type:"always"},priority:0},skeleton:["一条深深的护城河环绕着一个广场，广场上有一个被石制步道环绕的阶梯金字塔。","北部和东部的石柱廊跨越护城河，将广场与矮人聚居区的其他部分连接起来。","一座短桥横跨南部的护城河。","支撑着桥梁和柱廊的是一些矮人的巨大雕像，它们被淹没到脖子处。","金字塔顶端，俯瞰着整个墓室的是一个身披羽毛斗篷的人形生物，骑在一只庞大的龙形生物上。"],flesh:`一个名为Kaz Hanar的空织匠（见第七章）和他的飞龙坐骑栖息在金字塔顶上，守卫着广场。他们会俯冲下来攻击任何没有穿着空气教徒服装的人。

Kaz不太关心他们的答案；他很无聊，正在寻找一个借口来行使他的权威。如果伪装，角色们必须提供一个有说服力的故事来说服Kaz让他们通过。如果他们未能说服Kaz，他和他的飞龙会拒绝让他们通过。

墓室的天花板位于步道上方75尺处，并且是粗糙地凿成的。阶梯金字塔曾经是Tyar-Besil的矮人宫殿。它有两个层次（A18和A19区域），每个层次都是20尺高。

横跨广场北部护城河的柱廊通向A7区域。东侧有一条类似但更长的柱廊，其描述见于A17区域。通往南方的桥通向A16区域。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2d3"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一条深深的护城河环绕着一个广场，广场上有一个被石制步道环绕的阶梯金字塔。北部和东部的石柱廊跨越护城河，将广场与矮人聚居区的其他部分连接起来。一座短桥横跨南部的护城河。支撑着桥梁和柱廊的是一些矮人的巨大雕像，它们被淹没到脖子处。金字塔顶端，俯瞰着整个墓室的是一个身披羽毛斗篷的人形生物，骑在一只庞大的龙形生物上。护城河中的水流向西，然后倾泻过瀑布进入一个黑暗的深渊。急流的声音在墓室中回响如雷鸣，墓室的天花板上闪烁着矿石沉积物，宛如永恒的繁星之夜。",dmGuidance:"如果角色们伪装成风元素教派的信徒，Kaz会降落在最近的桥或柱廊上，并询问他们要去哪里。"},{id:"scn_2d5",locationId:"loc_2a9",name:"A11. 护城河",activation:{condition:{type:"always"},priority:0},skeleton:["由光滑凿石构成的围墙围绕着这条20英尺深的护城河。","一条地下溪流注入护城河，使其充满水。","由区域A3的石轮控制开启和关闭的阀门调节流入护城河的水量。","关闭阀门会使剩余的水从西边的瀑布流走，从而排干护城河。",'持有光源的角色检查护城河时，会注意到河底闪烁着金币的光芒和钢铁武器盔甲的闪光（见下方"宝藏"部分）。'],flesh:`由光滑凿石构成的围墙围绕着这条20英尺深的护城河。一条地下溪流注入护城河，使其充满水。由区域A3的石轮控制开启和关闭的阀门调节流入护城河的水量。关闭阀门会使剩余的水从西边的瀑布流走，从而排干护城河。持有光源的角色检查护城河时，会注意到河底闪烁着金币的光芒和钢铁武器盔甲的闪光（见下方"宝藏"部分）。

一个形状像12尺高、9尺宽的矮人的石魔像沿着护城河的底部行走，巡逻着护城河，并攻击任何落入其中生物。当护城河的水满时，魔像隐藏在黑暗的水下。随着护城河的排水，魔像逐渐露出。魔像从不离开护城河。Besilmer矮人知道控制魔像的口令；这些口令已经失传。

西墙上的一个大裂缝通向一个200英尺深的峡谷。护城河的水流入这个峡谷，形成了一个瀑布。在它的回合开始时，除非通过一个DC 15力量（运动）检定，否则在护城河最西端游泳的生物会被水流向峡谷拉动20英尺。

经过多年，许多不幸的生物在护城河中丧生，它们的一些宝藏随意散落在底部。在生锈的武器和凹陷的盔甲中，有金银物品，包括镶嵌半宝石的颈圈和戒指、吊坠、胸针等，总价值约为600金币。此外，一个镶嵌着红宝石的铂金高脚杯（价值2500金币）躺在护城河的地板上。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2d5"],treasureSlotIds:["trs_2d5_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_2d9",locationId:"loc_2a9",name:"A12. 莫拉丁神殿",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的两面墙上覆盖着壁画，一面描绘了摩拉丁创造矮人的场景，另一面是兽人和矮人之间的一场大规模战斗。","远处的墙壁上布满了曾经环绕着砧板形状祭坛的宝石的洞，现在只剩下磨损的石榴石和玛瑙残余。","在房间中央，三个鸟头生物正在折磨一群被锁链束缚的囚犯。","这个房间内有三只天狗和五个被捆绑和上锁的人类平民。","一只天狗折磨囚犯，而另外两只模仿囚犯的痛苦哭声。"],flesh:`这个房间内有三只天狗和五个被捆绑和上锁的人类平民。一只天狗折磨囚犯，而另外两只模仿囚犯的痛苦哭声。

四名囚犯是被Yartar的教派成员下药并绑架的人类旅行者。他们被顺流而下，准备被灌输进教派或被献祭。其中一名囚犯是Bero Gladham。如果被释放，他会告诉角色们，他的妻子Nerise被教派成员"带到下面去了"。

如果囚犯被送回家，他们的家人会为每个返回的囚犯提供50金币的奖励。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2d9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的两面墙上覆盖着壁画，一面描绘了摩拉丁创造矮人的场景，另一面是兽人和矮人之间的一场大规模战斗。远处的墙壁上布满了曾经环绕着砧板形状祭坛的宝石的洞，现在只剩下磨损的石榴石和玛瑙残余。在房间中央，三个鸟头生物正在折磨一群被锁链束缚的囚犯。"},{id:"scn_2de",locationId:"loc_2a9",name:"A13. 维加丹大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这座建筑曾经是矮人宴会的大厅。","旧木桌散布在长长的主房间中，有的散落，有的破碎，三只巨大的酒桶排列在曾经美丽的橡木吧台后面的墙壁上。","酒桶后面是用于装卸酒桶的门。","空气教派将这个大厅用作冥想区。","任何时候，这里都可能有五位嚎叫仇恨的启蒙者，一位飓风和一位空织匠，他们悬浮在地面上方并吟唱。"],flesh:`空气教派将这个大厅用作冥想区。任何时候，这里都可能有五位嚎叫仇恨的启蒙者，一位飓风和一位空织匠，他们悬浮在地面上方并吟唱。飓风携带着一个风暴回力标（见第七章），并获得以下行动选项：

这些巨大的木桶曾经装着优质的矮人啤酒，但它们已经干涸了几个世纪。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2de"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座建筑曾经是矮人宴会的大厅。旧木桌散布在长长的主房间中，有的散落，有的破碎，三只巨大的酒桶排列在曾经美丽的橡木吧台后面的墙壁上。酒桶后面是用于装卸酒桶的门。",dmGuidance:`见第七章以获取邪教徒的具体数值。
【A13. 维加丹大厅】+5 命中；射程 60/120 尺，单一目标。命中：4（1d4 + 2）钝击伤害加7（3d4）雷鸣伤害，且目标必须成功通过DC 10体质豁免检定否则陷入震慑状态直到其下个回合结束。失手：回旋镖返回飓风手中。`},{id:"scn_2e4",locationId:"loc_2a9",name:"A14. 生活区",activation:{condition:{type:"always"},priority:0},skeleton:["这些建筑物大体上还保持完好，尽管其中的家具和装饰品早已被移除。","瓦砾碎片、破碎的陶器和骨头碎片散落在地板上。","空气教派成员将这些区域用作寝室。","在下面的表格上掷一个 d20。","这条隧道向东通向碎浪神庙的区域C20。"],flesh:`空气教派成员将这些区域用作寝室。

在下面的表格上掷一个 d20。

这条隧道向东通向碎浪神庙的区域C20。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这些建筑物大体上还保持完好，尽管其中的家具和装饰品早已被移除。瓦砾碎片、破碎的陶器和骨头碎片散落在地板上。",dmGuidance:`如果角色们伪装成教派成员，他们可以在这里休息一段时间。
如果角色们不模仿教派的方式（悬浮、冥想或练习呼吸运动），在场的任何教派成员开始提出问题。
当角色们进入其中一个公寓并且每停留10分钟时，检查一次随机遭遇。`,randomTableIds:["tbl_2e4_0"]},{id:"scn_2e9",locationId:"loc_2a9",name:"A15. 坠落尖塔广场",activation:{condition:{type:"always"},priority:0},skeleton:["这片广场铺着深蓝色大理石的碎裂石板。","东面的大道尽头是一堵倒塌的石墙与瓦砾。","西面，柱廊横跨护城河，通向一座阶梯金字塔。","Ahtayir，一位穿着破烂背心和褴褛裤的气巨灵，在这里辛勤劳作。","他高贵的面容带着坚忍的表情，用石刻工具雕刻着一块巨石。"],flesh:`Ahtayir，一位穿着破烂背心和褴褛裤的气巨灵，在这里辛勤劳作。他高贵的面容带着坚忍的表情，用石刻工具雕刻着一块巨石。

贝西尔默矮人的国王Torhild Flametongue拥有一只每一百零一年可以召唤阿塔伊尔的号角。凭借号角的力量，召唤来的气巨灵必须完成一项服务或任务。Torhild让气巨灵承担了维护宫殿区良好状态的艰巨任务——这项任务他已持续执行了数个世纪。

当阿莉希·卡罗娜斯到达时，她占有了号角，但拒绝让气巨灵摆脱他之前被分配的任务。Ahtayir在这个任务上无尽地工作，雕刻石砌建筑和雕像，并通过洞穴飞行，逐块重建这座城市。他对此任务感到不满，但他无法逃脱。

如果Ahtayir喜欢这些角色或相信他们有能力对抗空气教派，他会建议他们攻击阿莉希·卡罗娜斯，希望她能召唤他，从而让他从任务中解脱出来。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_2e9_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这片广场铺着深蓝色大理石的碎裂石板。东面的大道尽头是一堵倒塌的石墙与瓦砾。西面，柱廊横跨护城河，通向一座阶梯金字塔。",dmGuidance:"如果角色们与Ahtayir成为朋友并破坏了召唤他的号角，这位气巨灵将从他在空气界宫殿中给每个角色带来一瓶瓶装气息（见第七章）。"},{id:"scn_2ec",locationId:"loc_2a9",name:"A16. 方尖碑行",activation:{condition:{type:"always"},priority:0},skeleton:["三座尖顶方尖碑，其侧面刻有古老的象形文字，排成一行，它们的尖顶触及十五尺高的天花板。","每个方尖碑底部都绑着一个憔悴的人类。","在方尖碑周围，一个彩色鹅卵石马赛克描绘了Moradin，他肩上扛着一把巨大的战锤。","方尖碑由花岗岩制成，高15英尺，底座宽4英尺。","用粗绳绑在方尖碑上的是三个嚎叫仇恨的启蒙者，他们正遭受极度的饥饿。"],flesh:`方尖碑由花岗岩制成，高15英尺，底座宽4英尺。用粗绳绑在方尖碑上的是三个嚎叫仇恨的启蒙者，他们正遭受极度的饥饿。他们受到4级力竭。他们空荡荡的胸腔下，腹部几乎只剩凹陷的空间，皮肤紧贴在骨头上。他们的手臂、腿和面部也同样瘦骨嶙峋，身上布满可怕的伤痕。

这些新成员穿着教派服装，并正在接受考验。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"三座尖顶方尖碑，其侧面刻有古老的象形文字，排成一行，它们的尖顶触及十五尺高的天花板。每个方尖碑底部都绑着一个憔悴的人类。在方尖碑周围，一个彩色鹅卵石马赛克描绘了Moradin，他肩上扛着一把巨大的战锤。",dmGuidance:'如果角色们试图释放他们，他们会抗议，声称他们的教派主人正在教他们如何"仅靠空气生存"。'},{id:"scn_2ee",locationId:"loc_2a9",name:"A17. 宫殿之路",activation:{condition:{type:"always"},priority:0},skeleton:["这座石柱廊横跨环绕阶梯金字塔的护城河。","石柱像巨大的树一样排列着，上面刻有过去著名矮人的名字和形象。","破碎的木块和石块散落在地板上。","柱廊在西侧的步道尽头结束，步道环绕着一座阶梯金字塔。","金字塔顶部栖息着一只大型龙形生物，背上骑着一个穿着羽毛斗篷的人形生物。"],flesh:"阶梯金字塔顶端的生物是卡兹·哈纳尔和他的飞龙坐骑（详情参见区域A10）。他们会与沿着柱廊接近金字塔的角色对峙。",spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这座石柱廊横跨环绕阶梯金字塔的护城河。石柱像巨大的树一样排列着，上面刻有过去著名矮人的名字和形象。破碎的木块和石块散落在地板上。

柱廊在西侧的步道尽头结束，步道环绕着一座阶梯金字塔。金字塔顶部栖息着一只大型龙形生物，背上骑着一个穿着羽毛斗篷的人形生物。`,dmGuidance:"如果角色还没有处理过Kaz Hanar（见区域A10），请添加以下内容："},{id:"scn_2f1",locationId:"loc_2a9",name:"A18. 大厅",activation:{condition:{type:"always"},priority:0},skeleton:["两排柱子支撑着这个大理石大厅二十尺高的天花板。","这些柱子雕刻成矮人的样子，他们表情严肃地凝视着。","每个矮人都紧握着一把石斧。","柱子的东边是两座没有扶手的上升大理石楼梯。","在房间中央，几个穿着灰色羽毛长袍的邪教徒悬浮在地面上方几尺处，同时吟唱着赞美诗。"],flesh:`一只飓风，一只空织匠，以及五名嚎叫仇恨的启蒙者（详见第七章以获取具体数值）守卫着这个房间，他们悬浮在地面上方三尺处，同时吟唱着对延西冰的赞美诗。如果邪教徒移动或受到伤害，悬浮效果会结束。每个入门者携带两个追踪飞镖（详见第七章），并且获得了以下攻击选项：

否则，教徒们会停止吟唱并发起攻击。这个房间中的战斗声响会提醒区域A19的生物，但不会有来自那个区域的增援。

这个坑实际上是一个10尺见方的垂直石井，通向嚎叫洞穴（详见第五章）。上升气流减缓了任何跳入或落入坑中的生物的下降速度，就像施加了en=Feather Fall法术一样。空气教徒被训练通过用他们的斗篷和翼装捕捉风来爬上这个井道。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin","npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_2f1"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"两排柱子支撑着这个大理石大厅二十尺高的天花板。这些柱子雕刻成矮人的样子，他们表情严肃地凝视着。每个矮人都紧握着一把石斧。柱子的东边是两座没有扶手的上升大理石楼梯。在房间中央，几个穿着灰色羽毛长袍的邪教徒悬浮在地面上方几尺处，同时吟唱着赞美诗。从地面中央的一个坑中升起呼啸的气流。",dmGuidance:`【A18. 大厅】+4 命中，且飓风在攻击检定上获得优势；射程120尺，单一目标。命中：4（1d4 + 2）穿刺伤害加7（3d4）闪电伤害。
如果角色伪装成空气教徒，这里的教徒会忽略他们，除非遭到攻击。`},{id:"scn_2f7",locationId:"loc_2a9",name:"A19. 元素空气神庙",activation:{condition:{type:"always"},priority:0},skeleton:["楼梯上升二十尺，到达一个宽敞的、二十尺高的房间，房间内有一个古老矮人王国的地图，精细地雕刻在石板地面上。","在房间的远端，一个高高的宝座位于大理石基座之上，俯瞰着一切。","尖拱形的走廊上挂着薄如蝉翼的天蓝色窗帘，贯穿整个房间两侧。","从这些窗帘后面飘来浓郁的香气，它甜蜜的烟雾像空气生物一样移动。","在高宝座后面，一个巨大的螺旋形号角安放在壁龛中。"],flesh:`这个大厅曾经是贝西尔默矮人国王及其战争议会的权力中心。地板上雕刻着古老矮人王国的地图。空气教派已经将其变成了罪恶和堕落的巢穴。如果这是角色们探索的第一个元素神庙，空气先知阿莉希·卡罗娜斯坐在高宝座上监督她的宫廷，她那虚幻的翅膀轻轻扇动着空气。她总是随身携带她的魔法长矛，风标（详见第七章）。如果Aerisi在这里，她那永远警觉的隐形追猎者伙伴，Whisper，在大厅中无形地滑行。如果他从区域A4逃脱，犁风者也在这里，跪着或坐在Aerisi的脚边。十个嚎叫仇恨的启蒙者在北面和南面的柱子间挂着的窗帘后面被药物迷昏。Aerisi可以命令他们攻击入侵者，但他们实际上处于中毒状态。

如果Aerisi不在这里，一只鹫魔（其服务是来自恶魔使者的礼物），独自守卫着神庙。它潜伏在宝座后面，攻击任何进入大厅的非教徒。那些沉迷于药物的入门者不会帮助鹫魔，只有在自卫时才会战斗。

Aerisi像一个专横、虚荣、暴躁的女王一样统治着嚎叫仇恨教派。她对同情或善良漠不关心，除非这些举动是针对她的。她将普通凡人视为可牺牲、意志薄弱的玩具，并通过她的魅力魔法诱惑许多人加入嚎叫仇恨教派。她对翼精灵（有翼精灵）着迷，所以她给自己加上了虚幻的翅膀，以便她可以假装是其中之一。

她知道角色们及其事迹，但她的骄傲不允许她将他们视为威胁。如果他们指控她不法行为，她会告诉角色们，黑土教派试图冒充空气教徒来陷害她的追随者，希望诱使角色们去对付她憎恨的对手。

如果遭到严重反对，Aerisi会采取行动吹响号角（见下文）。气巨灵Ahtayir（区域A15）将在Aerisi下一个回合结束时到达。她命令气巨灵掩护她逃跑，并飞下区域A18的井道。

号角上刻有云彩景观，其中一座金字塔宫殿似乎漂浮在云层之上，周围是棕榈树、无花果树和枣树的树林。吹响号角可以召唤气巨灵Ahtayir，他必须为召唤他的人完成一个单一的任务。一旦那个任务完成，Ahtayir就可以自由返回他在元素位面的空气领域的领地，并且在一百零一年内不能再以这种方式被召唤。号角可以通过一次造成10点或更多伤害的武器打击来破坏。如果号角被破坏，Ahtayir就不能再通过它被召唤了。

Aerisi戴着一个白金项圈（价值1600金币），金戒指和蓝宝石戒指（四个，每个价值1000金币），以及来自Evereska的头饰（6400金币）。她携带着风标（详见第七章）和她准备的所有法术的法术书（详见她的具体数值在第七章）。

当阿莉希·卡罗娜斯第一次降至0点生命值时，她会在一阵尖叫的风中消失，留下风向标在后面。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:["enc_pota_a19_aerisi","enc_pota_a19_vrock"],treasureSlotIds:["trs_2f7_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`楼梯上升二十尺，到达一个宽敞的、二十尺高的房间，房间内有一个古老矮人王国的地图，精细地雕刻在石板地面上。在房间的远端，一个高高的宝座位于大理石基座之上，俯瞰着一切。尖拱形的走廊上挂着薄如蝉翼的天蓝色窗帘，贯穿整个房间两侧。从这些窗帘后面飘来浓郁的香气，它甜蜜的烟雾像空气生物一样移动。
在高宝座后面，一个巨大的螺旋形号角安放在壁龛中。`,dmGuidance:`详见第七章以获取邪教徒的具体数值。
如果角色们似乎急于与土教徒战斗，Aerisi会允许他们安全通过她的领地。
如果角色们击败了气巨灵和她的教徒，Aerisi（以及犁风者，如果他在场）会通过区域A18的井道逃往嚎叫洞穴。`,mapGeometry:{imageRef:"adventure/PotA/043-poa04-03.webp"}},{id:"scn_2fe",locationId:"loc_2a9",name:"A20. 蠕虫隧道",activation:{condition:{type:"always"},priority:0},skeleton:["这个大而未照明的房间除了一个特征外是空的。","从地板上的一个大洞中伸出来是一个巨大蠕虫的骷髅头，它的嘴巴张开。","这条紫色蠕虫的尸体是被矮人杀死的遗骸。","在其咽喉部位，躺着几具矮人的骨骸。","角色可以爬过这具骨架，进入它留下的隧道。"],flesh:"这条紫色蠕虫的尸体是被矮人杀死的遗骸。在其咽喉部位，躺着几具矮人的骨骸。角色可以爬过这具骨架，进入它留下的隧道。隧道宽10尺，通往眼魔神殿的区域F1（详见第五章）。",spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个大而未照明的房间除了一个特征外是空的。从地板上的一个大洞中伸出来是一个巨大蠕虫的骷髅头，它的嘴巴张开。"},{id:"scn_301",locationId:"loc_301",name:"破碎波涛之庙",activation:{condition:{type:"always"},priority:0},skeleton:["粉碎波涛教派在其古代堡垒Tyar-Besil的东南区域维持着其总部。","很久以前，Tyar-Besil的这一部分包含了仓库。","黑暗溪流提供了一条安全、可航行的水道，连接了这个要塞与Dessarin河以及王国的地表领地。","戈尔·碎骨，水之先知，指示他的追随者尽可能多地占领这个区域，并吸引对教派事业友好的怪物在附近建立巢穴。","一条地下溪流将粉碎波涛神庙与地表连接起来。"],flesh:`粉碎波涛教派在其古代堡垒Tyar-Besil的东南区域维持着其总部。很久以前，Tyar-Besil的这一部分包含了仓库。黑暗溪流提供了一条安全、可航行的水道，连接了这个要塞与Dessarin河以及王国的地表领地。

戈尔·碎骨，水之先知，指示他的追随者尽可能多地占领这个区域，并吸引对教派事业友好的怪物在附近建立巢穴。

一条地下溪流将粉碎波涛神庙与地表连接起来。这条溪流源自古代矮人要塞这一部分的一个大型泉水。它流经隧道和洞穴大约2英里，然后穿过Rivergard Keep下方，流入Dessarin河。这条溪流流速缓慢，逆流划船或撑船并不困难。

每次角色们通过黑暗溪流前往或离开破碎波涛神庙时，在地下旅行期间的某个点掷一个 d20 以进行随机遭遇。

暗幕魔兽和石锥怪从隧道天花板掉落到船上。穴蜥人从黑暗溪流穿过一个开放洞穴的岸边投掷标枪。水诡和甲伏怪潜伏在溪流中，并从水中发动攻击。

这个区域有以下特点。任何例外情况将在适用的区域中注明。

天花板高度为15尺。

门由平衡在中央枢轴上的石板组成——打开一扇门会形成两个约3英尺宽的缝隙。没有任何锁还能使用，但教徒们用搭扣和销钉固定了一些门。角色可以通过成功的DC 15力量检定强行打开这些门。

双开门有铁铰链，可以像普通门一样朝一个方向或另一个方向打开。

这个区域的湖泊和运河水位比周围地牢的地板低约5尺。运河深15尺。从C25区域的瀑布流出的水在两条运河中向南缓慢流动。

掉进运河的角色会发现运河两侧光滑且滑溜。除非附近有码头，否则很难抓住墙壁或爬出来。

教徒们使用铜壁灯架上的火炬施展en=Continual Flame法术，照亮他们经常使用的区域。这一层的其余部分是黑暗的。

一些与运河相邻的区域是码头，有几级台阶从地板层向下延伸，直到离水面只有1尺的高度。

许多寺庙的居民携带少量的财宝。拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。

如果Shatterkeel被击败或撤退到更深层，并且角色们击败了Thuluna Maah和Morbeoth，破碎波潮邪教就会瓦解。幸存的邪教徒放弃这一层，尽管一些怪物可能会留下来。一些邪教徒撤退到眼睛圣所或瀑布洪流，而其他人则完全逃离神庙。如果Thuluna或Morbeoth在角色离开破碎波潮领地后仍然存在，邪教徒会重新组织他们的防御，以击退任何其他入侵。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_301_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},randomTableIds:["tbl_301_0"]},{id:"scn_30e",locationId:"loc_301",name:"C1. 湖岸登陆点",activation:{condition:{type:"always"},priority:0},skeleton:["火光从前方的一个大型洞穴中透出。","溪流流入一个大型地下湖。","在右侧，一个破败的石码头通向一个通往东北方向的隧道。","一个十尺长的平底船系在码头上，隧道口旁边有一个铜制壁灯上的火炬在燃烧。","码头旁边，一条二十尺宽的运河从大湖向北延伸。"],flesh:`通往区域C4的码头可能可见也可能不可见，这取决于队伍从哪个方向接近。该区域没有照明，在黑暗中难以看见。

洞穴东端的登陆点由四名碎浪掠夺者和一名由名为Eyon的暗潮骑士指挥的测深者守卫（详见第七章以获取教徒的具体数值）。Eyon的坐骑，一只寻猎鲨，在附近的湖中游弋。教徒们挑战任何从东边接近的陌生船只，除非角色们说服他们进行谈判，否则会发起攻击。

她是一个历经风霜、冷酷无情的雇佣兵，对人只期待最坏的情况。一旦Eyon认定角色们试图欺骗她，她就会命令她的掠夺者发起攻击。

掠夺者们知道大多数敌人在水中会处于严重的劣势。如果他们攻击站在码头边或船上的敌人，掠夺者会尝试使用"推撞"特殊攻击将角色推入水中。（码头附近的水深为15尺。）Eyon更喜欢骑在她的鲨鱼上从水中战斗，使用她的长矛对付在船上或水边的敌人。

Eyon的腰带上有一个防水的皮袋，里面装有15金币，6铂金币，五颗雕刻精细的珊瑚宝石，每颗价值80金币，还有一瓶治疗药水（治疗药水）。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_30e"],treasureSlotIds:["trs_30e_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`火光从前方的一个大型洞穴中透出。溪流流入一个大型地下湖。在右侧，一个破败的石码头通向一个通往东北方向的隧道。一个十尺长的平底船系在码头上，隧道口旁边有一个铜制壁灯上的火炬在燃烧。码头旁边，一条二十尺宽的运河从大湖向北延伸。湖泊向西延伸进入黑暗之中。

通道通向一个由地下湖填满的大型、昏暗的洞穴。在湖的东端，一支火把照亮了一个石码头，旁边系着一艘十尺长的平底船。湖的西端消失在黑暗中。`,dmGuidance:`如果角色们乘船从溪流到达，请阅读以下文本：
如果角色们从地牢的其他部分找到通往这里的路，请改读以下文本：
如果角色们成功开始谈判，Eyon会非常怀疑地质问他们。
如果角色们不合作，不靠近水边，她也会步行战斗。
如果角色们击败了这些邪教徒并离开地牢的该区域，守卫会在一小时内被区域C7的邪教徒替换。`},{id:"scn_315",locationId:"loc_301",name:"C2. 运河",activation:{condition:{type:"always"},priority:0},skeleton:["一条二十尺宽的运河在古老的石墙之间延伸进黑暗中。","水流动缓慢，表明水流很弱。","远处的火光在闪烁。","在C6、C15和C24区域的桥梁附近放置的火把提供了照明；","从角色们找到运河的几乎所有点，他们都能看到其中一座桥上的火把。"],flesh:`在C6、C15和C24区域的桥梁附近放置的火把提供了照明；从角色们找到运河的几乎所有点，他们都能看到其中一座桥上的火把。

贝希尔默的矮人们修建了这条运河，将区域C26的泉水引离他们的挖掘区域，并将他们城市的商业区与地上世界连接起来。水深15英尺。角色可以用杆撑船以10英尺的速度通过运河。

水生生物在运河中游荡。掷一个d20骰子，并参考下表：

巨型章鱼会攻击它遇到的任何小团体。其他怪物会攻击它们识别为入侵者的团队。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一条二十尺宽的运河在古老的石墙之间延伸进黑暗中。水流动缓慢，表明水流很弱。远处的火光在闪烁。",dmGuidance:"当队伍在运河中游泳或乘船移动时，每小时检查一次随机遭遇。",randomTableIds:["tbl_315_0"]},{id:"scn_319",locationId:"loc_301",name:"C3. 低语湖",activation:{condition:{type:"always"},priority:0},skeleton:["这个地下湖黑暗、静止且寒冷。","在西侧，湖泊在砾石岸边结束，微弱的火把光亮暗示着向北有一条通道或运河。","在南侧，一个破败的石码头通向一个黑暗的通道。","在湖的东端，另一支火炬在一个大码头上方燃烧，有另一条通道向东延伸。","第二条运河从湖的东侧向北延伸，微弱的光亮也来自那个方向。"],flesh:`这个洞窟的顶部呈拱顶形，最高处距水面约50尺。在洞壁附近的湖水深20尺，中部深度则达60尺。这座湖泊得名于其独特的声学效应——即使在区域C1低声耳语，也能在区域C19清晰听见，反之亦然。

这个湖泊是小型盲洞鱼的栖息地。一只巨章鱼潜伏在南侧的一个岩洞中，隐藏在支撑洞穴天花板的石柱后面。如果游泳者或划船者接近它的巢穴30尺以内，这只生物会发动攻击。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_319"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个地下湖黑暗、静止且寒冷。在西侧，湖泊在砾石岸边结束，微弱的火把光亮暗示着向北有一条通道或运河。在南侧，一个破败的石码头通向一个黑暗的通道。在湖的东端，另一支火炬在一个大码头上方燃烧，有另一条通道向东延伸。第二条运河从湖的东侧向北延伸，微弱的光亮也来自那个方向。"},{id:"scn_31b",locationId:"loc_301",name:"C4. 淹没室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间充满了潮湿、腐烂的气味。","地板上分布着八个小池塘，每个大约3尺宽，里面装满了黑色的、发臭的水。","几个大石头躺在池塘附近的地板上，每块石头都被旧绳子缠绕了好几圈。","南墙上画着一个符号——一个X形状，底部的两条线通过一条水平线连接起来。","很久以前，这个房间是港务长的办公室，但粉碎波涛教派重新将其奉献为仪式性溺水俘虏的地方。"],flesh:`很久以前，这个房间是港务长的办公室，但粉碎波涛教派重新将其奉献为仪式性溺水俘虏的地方。每个池塘都是10尺深。石头平均约50磅重，绳子用来将受害者的脚绑在一起，然后将他或她推入池塘中。

十二只水生食尸鬼们（它们游泳速度为30尺）潜伏在这个房间——这是教派卑鄙仪式的前受害者。其中八个沉没在它们死去的池塘中，另外四个潜伏在房间西端被毁围栏的阴影中。这些怪物隐藏起来，以便能够突袭入侵者。

如果食尸鬼成功使一个角色陷入麻痹，最近的一只食尸鬼会用一个动作将一块沉重的石头绑在麻痹角色的脚上。在接下来的回合中，食尸鬼将麻痹的角色推入其中一个溺水池中。要带着绑着的石头游到水面，需要进行一次成功的DC 20力量（运动）检定，而在狭小的空间内挣脱束缚需要进行一次成功的DC 15敏捷（特技）检定。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_31b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间充满了潮湿、腐烂的气味。地板上分布着八个小池塘，每个大约3尺宽，里面装满了黑色的、发臭的水。几个大石头躺在池塘附近的地板上，每块石头都被旧绳子缠绕了好几圈。南墙上画着一个符号——一个X形状，底部的两条线通过一条水平线连接起来。"},{id:"scn_31d",locationId:"loc_301",name:"C5. 监狱",activation:{condition:{type:"always"},priority:0},skeleton:["一个铁制的门闩和别针装置固定了这个房间的门。","锁无法从内部触及，但从走廊上很容易打开。","这个房间显然用作监狱。","半打草垫子上铺着破旧的毯子，散布在地板上，一个水桶靠在一面墙上。","一个黑暗的、狭缝般的窗户朝向西方。"],flesh:`一个铁制的门闩和别针装置固定了这个房间的门。锁无法从内部触及，但从走廊上很容易打开。

教徒们目前没有在这个临时监狱里关押任何囚犯。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间显然用作监狱。半打草垫子上铺着破旧的毯子，散布在地板上，一个水桶靠在一面墙上。一个黑暗的、狭缝般的窗户朝向西方。",dmGuidance:"如果角色们在神庙中被击败，他们将被剥夺装备并被关押在这里，而戈尔·碎骨决定如何最好地处理他们。"},{id:"scn_31f",locationId:"loc_301",name:"C6. 胜利桥",activation:{condition:{type:"always"},priority:0},skeleton:["运河两侧的楼梯从码头上升10尺，因此桥面位于水面上方15尺的高度。","一座石桥以一个优雅的拱形横跨运河。","两侧的台阶通向桥面。","桥上有一个低矮的石制栏杆，其风化的两侧刻有矮人战斗的图案。","桥顶上有一支火炬在燃烧。"],flesh:`运河两侧的楼梯从码头上升10尺，因此桥面位于水面上方15尺的高度。

这座桥被抬高至水面之上，以便建造这一层的矮人可以自由地在运河上来回移动大型船只和驳船。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一座石桥以一个优雅的拱形横跨运河。两侧的台阶通向桥面。桥上有一个低矮的石制栏杆，其风化的两侧刻有矮人战斗的图案。桥顶上有一支火炬在燃烧。"},{id:"scn_321",locationId:"loc_301",name:"C7. 掠夺者营房",activation:{condition:{type:"always"},priority:0},skeleton:["这个旧房间配备了六张简朴的木制双层床和装满补给品的袋子。","石门通往南方和西方。","守卫湖登陆点（C1区域）的粉碎波涛教派教徒在这里住宿。","六个双层床供九名掠夺者、一名牧师、一名深水者和一位名叫Eyon的黑暗潮汐骑士使用。","任何时候，这里都有五名碎浪掠夺者和一名破碎波涛祭司（详见第七章以获取教徒的具体数值）。"],flesh:`守卫湖登陆点（C1区域）的粉碎波涛教派教徒在这里住宿。六个双层床供九名掠夺者、一名牧师、一名深水者和一位名叫Eyon的黑暗潮汐骑士使用。任何时候，这里都有五名碎浪掠夺者和一名破碎波涛祭司（详见第七章以获取教徒的具体数值）。

这个房间里的教徒通常处于下班状态，可能正在睡觉；掷一个 1d6 来看看有多少教徒在他们的铺位上。附近战斗的声音会唤醒正在睡觉的教徒，他们在战斗的第三轮开始时加入战斗。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_321"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个旧房间配备了六张简朴的木制双层床和装满补给品的袋子。石门通往南方和西方。"},{id:"scn_323",locationId:"loc_301",name:"C8. 古老粮仓",activation:{condition:{type:"always"},priority:0},skeleton:["有两个这样的房间，两者完全相同。","这个大房间散落着破败的砖石。","一个干涸的坑位于地板中央，周围是一个五尺宽的人行道。","这两个房间曾经是矮人城堡的粮仓，但这里存放的食物早已腐烂。","每个筒仓空间深30尺。"],flesh:`有两个这样的房间，两者完全相同。

这两个房间曾经是矮人城堡的粮仓，但这里存放的食物早已腐烂。每个筒仓空间深30尺。除了可能发生危险的跌落外，这些房间为队伍提供了安全的休息场所。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个大房间散落着破败的砖石。一个干涸的坑位于地板中央，周围是一个五尺宽的人行道。"},{id:"scn_325",locationId:"loc_301",name:"C9. 北守卫哨",activation:{condition:{type:"always"},priority:0},skeleton:["进入这个房间的门从内部用门闩和别针固定。","这扇石门中间镶嵌了一块大约一尺见方的铁板。","每扇门上都有一个被滑动铁板覆盖的小方孔。","房间里的教徒（见下文）利用这些孔对走廊里的入侵者进行弩箭攻击。","打开或关闭孔盖需要采取行动。"],flesh:`进入这个房间的门从内部用门闩和别针固定。

每扇门上都有一个被滑动铁板覆盖的小方孔。房间里的教徒（见下文）利用这些孔对走廊里的入侵者进行弩箭攻击。打开或关闭孔盖需要采取行动。通常情况下，一个教徒操作孔盖，而另一个进行射击。一次只有一个教徒可以通过一个孔进行射击。

这个警卫室由名为卡尔特的独眼战栗、名为戈多尔的暗潮骑士和三名碎浪掠夺者驻守（详情见第七章）。卡尔特负责指挥，管理严格。这些掠夺者装备了轻弩而非标枪（命中+4，1d8 + 2穿刺伤害），戈多尔也有一把轻弩（命中+7，1d8 + 3穿刺伤害）。

Khalt有一个袋子，里面有30金币，12铂金币，四颗价值100金币的石榴石，以及两瓶高等治疗药水。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_325"],treasureSlotIds:["trs_325_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这扇石门中间镶嵌了一块大约一尺见方的铁板。

这个房间是宿舍和警卫站。两个石门上装有坚固的铜门闩，每扇门上都有一个射孔，射孔被一小块铁板覆盖，对于人类来说位于胸部高度。房间中央有一张圆桌和四把摇摇欲坠的木椅。这里有十个双层床，尽管其中一半似乎没有在使用。`,dmGuidance:`当角色们接近门时，请阅读以下文本：
如果角色们进入或窥视这个房间，请阅读以下内容：
如果角色们击败了这些教徒，然后离开地牢的这一层，教徒们会用来自C23区域的四名粉碎波涛掠夺者来替换这些守卫。`},{id:"scn_32a",locationId:"loc_301",name:"C10. 石像鬼喷泉",activation:{condition:{type:"always"},priority:0},skeleton:["这个大厅已经严重受损。","几根倒塌的柱子和弯曲的墙壁表明已经过去了许多漫长的岁月，但有一个特征却出奇地完好无损：西墙中间的一座石制喷泉。","它由一个十尺宽的半圆形石制水盆组成，上面有一个咧嘴笑的滴水嘴兽蹲在从墙上突出的基座上。","石门通往北方和南方。","两只诺斯怪占据了这个房间，藏在阻塞房间东部的破碎柱子和瓦砾后面。"],flesh:`两只诺斯怪占据了这个房间，藏在阻塞房间东部的破碎柱子和瓦砾后面。诺斯选择在这里居住，希望那些粗心的教派成员可能成为伏击的容易猎物，或者无意中向怪物透露力量的秘密。它们会让大型且武装精良的队伍安全通过，但随后会试图攻击队尾的角色。

喷泉通过一个精心设计的系统得到补给，该系统连接到C26区域的隐藏泉水。古老的祝福赋予了喷泉适度的治疗能力；任何饮用它的人都可以获得完成短休的好处，但是从喷泉的魔法中受益的个体在24小时内不能再这样做。如果水从喷泉中移除，它就会失去治疗能力。

这条隧道向北通往黑土神殿的区域B11。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_32a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个大厅已经严重受损。几根倒塌的柱子和弯曲的墙壁表明已经过去了许多漫长的岁月，但有一个特征却出奇地完好无损：西墙中间的一座石制喷泉。它由一个十尺宽的半圆形石制水盆组成，上面有一个咧嘴笑的滴水嘴兽蹲在从墙上突出的基座上。石门通往北方和南方。"},{id:"scn_32f",locationId:"loc_301",name:"C11. 人鱼之庭",activation:{condition:{type:"always"},priority:0},skeleton:["这个庭院中央有一座古老喷泉，形状像三个跳舞的美人鱼。","喷泉已经干涸，雕塑也严重受损——两个美人鱼失去了手臂，第三个失去了头部。","从这个房间有通往北、南和东的走廊。","北边有火把的微光，东边也有微光。","西北方向的一扇门上覆盖着带有水生主题的彩绘符号和图像，但被长长的划痕破坏，使得它们的意义变得模糊不清。"],flesh:"这个房间的天花板高30尺。西北门上的装饰遭到破坏，这是C14区域的海巫婆Thuluna Maah所为。",spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个庭院中央有一座古老喷泉，形状像三个跳舞的美人鱼。喷泉已经干涸，雕塑也严重受损——两个美人鱼失去了手臂，第三个失去了头部。从这个房间有通往北、南和东的走廊。北边有火把的微光，东边也有微光。
西北方向的一扇门上覆盖着带有水生主题的彩绘符号和图像，但被长长的划痕破坏，使得它们的意义变得模糊不清。`},{id:"scn_331",locationId:"loc_301",name:"C12. 巨魔洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间非常脏乱。","墙壁破败且歪斜，地板上散布着未经处理的皮毛和毛皮堆，形成了一种粗糙、散发着恶臭的地毯。","被啃过的骨头和破碎的陶器散落一地，还有几件奇怪的盔甲，大多数被弯曲、扭曲或严重留下爪痕。","门朝向北方和西方。","这个房间是三只水生巨魔的巢穴，它们拥有40尺游泳速度和水下呼吸能力。"],flesh:`这个房间是三只水生巨魔的巢穴，它们拥有40尺游泳速度和水下呼吸能力。由于总有一名巨魔在守卫着区域C15，所以这里只有两只。

这些巨魔——名叫Gorgebelly、Marrowucker和Ninetooth——对地牢周围的活动不闻不问，并且他们不情愿地回应任何求援召唤。伪装成水教徒的角色，或者坚称他们正在为教派办事的角色，可以轻易说服巨魔留在这里什么都不做，或者贿赂他们在别处制造麻烦。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_331"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间非常脏乱。墙壁破败且歪斜，地板上散布着未经处理的皮毛和毛皮堆，形成了一种粗糙、散发着恶臭的地毯。被啃过的骨头和破碎的陶器散落一地，还有几件奇怪的盔甲，大多数被弯曲、扭曲或严重留下爪痕。门朝向北方和西方。"},{id:"scn_333",locationId:"loc_301",name:"C13. 黑爪巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间外的大厅里弥漫着霉味。","门上画着粗糙的怪物眼睛和长着尖牙的大嘴的图画。","这个房间充满了难闻的爬行动物气味，里面杂乱无章地堆放着破烂的动物皮毛和潮湿的稻草。","一个破旧的铁制香炉里满是炙热的余烬，在房间中央发光。","香炉旁边堆着半啃的尸体，证明了有人试图在炭火上随意烹饪它们。"],flesh:`这个房间外的大厅里弥漫着霉味。门上画着粗糙的怪物眼睛和长着尖牙的大嘴的图画。

这里是一群自称为黑口蜥蜴人的蜥蜴人部落的巢穴。尽管这些生物使用人类风格的武器和盔甲，但它们已经退化成野蛮状态。香炉旁边的尸体包括几天前在该地区潜行时被捕获的火教间谍的残骸。

现在这里有八只蜥蜴人，包括部落领袖，一位有36生命值的战士，名叫撕裂鳞。他们手持标枪、钉头锤和盾牌。还有五个蜥蜴人潜伏在C25区域附近，负责守卫。撕裂鳞及其追随者忠于海巫婆Thuluna Maah（C14区域）。他们憎恨并怨恨教派的人类成员。

如果蜥蜴人在此处战斗中至少损失两名成员，撕裂鳞会派遣一名剩余的战士去警告Thuluna并请求援助。`,spotlightRefs:[],presentNpcIds:["npc_tornscale","npc_bronzefume"],availableInfoIds:[],encounterIds:["enc_333"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间充满了难闻的爬行动物气味，里面杂乱无章地堆放着破烂的动物皮毛和潮湿的稻草。一个破旧的铁制香炉里满是炙热的余烬，在房间中央发光。香炉旁边堆着半啃的尸体，证明了有人试图在炭火上随意烹饪它们。这里有两个门：一个向北，一个向南。",dmGuidance:"如果角色们在进入这个区域时伪装成水教徒，黑口族会对他们的隐私被侵犯感到愤怒，并会像对待教派的敌人一样猛烈攻击。"},{id:"scn_335",locationId:"loc_301",name:"C14. 巫婆巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["精致的木制家具、绿色和金色的挂毯以及一张熊皮地毯装饰着这个豪华的房间——但家具被刮花了，挂毯被严重撕裂，地毯上布满了一尺长的洞。","向西北方向，一个破旧的绿色帘子遮挡着一个大凹室。","在房间的南部有两个大堆潮湿的皮毛。","空气中弥漫着像腐烂海藻一样的潮湿气味，小螃蟹在房间里四处爬行。","一个名叫Thuluna Maah的海鬼婆和两名充当她保镖的食人魔住在这个房间里。"],flesh:`一个名叫Thuluna Maah的海鬼婆和两名充当她保镖的食人魔住在这个房间里。这两名食人魔在房间的外部区域站岗，而Thuluna则潜伏在西北壁龛的帘子后面，那是她的私人卧室。如果时间已晚，Thuluna和她的守卫可能已经睡着了。

Thuluna Maah是神庙的第二号人物，只对戈尔·碎骨负责。她是一个狡猾、精明的生物，擅长提供交易并达成协议，这些协议她可以在后来转为自己的优势。这个老巫婆对教派的非人类成员有很大的影响力，主要是因为巨魔和巨魔会按照她的吩咐去做任何事情。Thuluna想要推翻Shatterkeel，并清除教派中的人类深水者和独眼颤抖者，但她很有耐心。目前，她试图说服Shatterkeel攻击对手教派，希望空气或火教徒能为她杀死他，并为她接管粉碎波涛教派铺平道路。

如果图卢娜知道战斗即将来临，她会从她的木箱中拿出药剂。她讨厌美丽，所以她会以最好看的一个角色为目标。如果战斗对她不利，她会恳求怜悯，并提出如果他们饶她一命，她会展示给他们一个巨大的宝藏。然后，图卢娜会带领他们前往区域C21中青铜烟的巢穴。

四把椅子每把价值80金币，但每把重30磅。西北角的凹室里有一个木箱，里面装有190金币，8个铂金币，一瓶山丘巨人之力药水和一瓶火焰抗性药水。靠近女巫的床铺有一把由龙骨制成，龙皮握柄的+1 长剑。剑柄和剑柄上镶嵌着红宝石。当剑在龙的120尺范围内时，剑会变暖，红宝石会微微发光。在这里，剑是暖和的，红宝石在发光，因为武器距离区域C21的龙龟120尺以内。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_335"],treasureSlotIds:["trs_335_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"精致的木制家具、绿色和金色的挂毯以及一张熊皮地毯装饰着这个豪华的房间——但家具被刮花了，挂毯被严重撕裂，地毯上布满了一尺长的洞。向西北方向，一个破旧的绿色帘子遮挡着一个大凹室。在房间的南部有两个大堆潮湿的皮毛。空气中弥漫着像腐烂海藻一样的潮湿气味，小螃蟹在房间里四处爬行。",mapGeometry:{imageRef:"adventure/PotA/046-poa04-05.webp"}},{id:"scn_33a",locationId:"loc_301",name:"C15. 龙桥",activation:{condition:{type:"always"},priority:0},skeleton:["运河两侧的楼梯通向一座石桥，石桥横跨运河，高出水面十五尺。","桥的两侧雕刻着守护着宝藏的龙的形象。","一根火把照亮了这座桥。","在运河的西侧，通道向西和向北延伸。","在运河的东侧，一条通道向东延伸。"],flesh:`在运河的西侧，通道向西和向北延伸。在运河的东侧，一条通道向东延伸。

一只水生巨魔潜伏在桥下的运河中，来自区域C12，监视着入侵者。当有人乘船经过该区域或试图过桥时，食人魔会浮出水面进行挑战。它几乎会被任何听起来稍微合理的说辞欺骗，但对任何看起来准备战斗的入侵者会立即发动攻击。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_33a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"运河两侧的楼梯通向一座石桥，石桥横跨运河，高出水面十五尺。桥的两侧雕刻着守护着宝藏的龙的形象。一根火把照亮了这座桥。",dmGuidance:"如果角色们乘坐小船，食人魔会以试图掀翻船只开始战斗，这需要一个动作并通过DC 20力量检定。"},{id:"scn_33c",locationId:"loc_301",name:"C16. 雷锤酿酒厂",activation:{condition:{type:"always"},priority:0},skeleton:["这个大房间的中央并排摆放着两排密封的铜制大缸。","这些大缸很旧，完全被铜绿覆盖。","墙上的大部分油漆很久以前就剥落了，但仍可看到一些壁画的线索，展示着矮人在田野里劳作和照料啤酒花藤蔓的场景。","在大缸排列的末端，整齐地堆放着三个新的、背包大小的玻璃罐，配有携带背带。","门朝向西方、东方和南方。"],flesh:`大多数大桶都是空的，但目前有三个大桶里装着从三个空的怪异的坦克（见第七章）中排出的水诡。装有水诡怪的大桶触感冰冷且黏腻，如果敲击会发出半满的声音。怪异只有在有人打开它所装桶顶部的舱口时才能发动攻击。

这里的任何骚动（例如，角色敲打铜罐或与一个或多个水诡战斗）都会警告C17区域的怪物。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_33c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个大房间的中央并排摆放着两排密封的铜制大缸。这些大缸很旧，完全被铜绿覆盖。墙上的大部分油漆很久以前就剥落了，但仍可看到一些壁画的线索，展示着矮人在田野里劳作和照料啤酒花藤蔓的场景。在大缸排列的末端，整齐地堆放着三个新的、背包大小的玻璃罐，配有携带背带。门朝向西方、东方和南方。"},{id:"scn_33e",locationId:"loc_301",name:"C17. 莫比奥斯的工作室",activation:{condition:{type:"always"},priority:0},skeleton:["通往这个区域的最北边的门由内而外被一个青铜门闩和插销固定。","这个房间的部分地区被一堆堆破碎的砖石埋没，但足够多的部分保持完好，可以作为一个奥术工坊。","房间中央的一张长木桌上散落着一些复杂的装置部件，包括一个大玻璃罐、铜配件和管道，以及一个皮革携带背带，而装满炼金试剂的架子靠在南墙上。","这里的空气相当冷，一层寒冷的雾气紧贴着地面。","北边一个较大的相邻房间看起来像是某人的卧室。"],flesh:`通往这个区域的最北边的门由内而外被一个青铜门闩和插销固定。

门朝南和东方向通出去，另一个门从卧室区域向东通。

一个名为Morbeoth的独眼战栗将这些房间作为他的家。他指挥着寺庙的西部区域，并抵御来自嚎叫仇恨邪教徒的入侵。他为战斗做好了准备，携带着一瓶气化形体药水和一瓶治疗药水。六名碎浪掠夺者作为他的私人守卫。

Morbeoth尝试过使用依赖元素力量的装置。桌上的装置是一个拆卸的诡异水罐（见第七章）。一个在奥秘上熟练的角色，如果仔细研究工作坊和储存的材料，可以确定这里组装的是靠元素水能量驱动的物品。

Morbeoth感到自豪且易怒。他认为他对奥术力量的掌握赋予了他向任何比自己弱小或意志不坚定的人强加自己意志的权利。他特别反感一个普通的德鲁伊被选为水之先知，以及像海巫婆这样的丑陋怪物担任邪教的第二号人物。如果有机会，他会引导一群爱管闲事的冒险者进入Thuluna Maah的领地（区域C14），让他们战斗并杀死她，然后从背后突袭消灭冒险者，并为破碎波潮邪教宣称一场伟大的胜利。

Morbeoth身上携带着区域C20大门的钥匙。

Morbeoth卧室中的一个小铁箱子里装有260枚银币，22枚铂金币，以及几封未签名的信件，报告了Red Larch发生的事件，包括角色们的到来以及他们在镇上的行动。书写风格是一种不寻常的块状字母和手写体的混合。（见本章开头的'间谍的信件'部分。）

这里的战斗声音会提醒区域C18的熊地精，战斗开始不久后他们会过来调查。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_33e"],treasureSlotIds:["trs_33e_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的部分地区被一堆堆破碎的砖石埋没，但足够多的部分保持完好，可以作为一个奥术工坊。房间中央的一张长木桌上散落着一些复杂的装置部件，包括一个大玻璃罐、铜配件和管道，以及一个皮革携带背带，而装满炼金试剂的架子靠在南墙上。这里的空气相当冷，一层寒冷的雾气紧贴着地面。北边一个较大的相邻房间看起来像是某人的卧室。"},{id:"scn_344",locationId:"loc_301",name:"C18. 西守卫哨",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间里的怪物在朝走廊的箭缝处设置了一个哨兵。","如果有人接近，房间里的居民会准备伏击，并试图在角色进入这个房间时给他们一个惊喜。","这个房间的天花板高二十尺，一个十尺高的阁楼覆盖了房间的西半部。","地板中间的一堆堆破碎的砖块标志着曾经放置炉子的地方。","地板上铺着肮脏、长满跳蚤的稻草垫子，旁边是一个水桶和几桶补给品。"],flesh:`这个房间里的怪物在朝走廊的箭缝处设置了一个哨兵。如果有人接近，房间里的居民会准备伏击，并试图在角色进入这个房间时给他们一个惊喜。

这个房间曾经是附近雷锤酿酒厂的啤酒花仓库。现在它是一个由五个熊地精守卫的哨所，他们保护破碎波潮神庙不受来自西方的入侵。

一只熊地精总是监视着房间东北角的箭缝。负责监视的熊地精会注意到通过外部走廊的团体。如果入侵者试图悄悄通过哨所，这个房间里的熊地精会冲出去从后方攻击他们。这里的任何战斗都会提醒Morbeoth和他的守卫（区域C17）。他们会通过加入战斗来响应攻击。

这个房间里的熊地精特别被警告要警惕'空气邪教徒的诡计'，所以他们对任何企图虚张声势或欺骗他们的行为特别小心。

如果这些熊地精被击败，它们将在一天之内由来自区域C12的巨魔所替换。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_344"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的天花板高二十尺，一个十尺高的阁楼覆盖了房间的西半部。地板中间的一堆堆破碎的砖块标志着曾经放置炉子的地方。地板上铺着肮脏、长满跳蚤的稻草垫子，旁边是一个水桶和几桶补给品。一个箭缝朝东边的走廊望去，门朝东和北方向通出去。"},{id:"scn_348",locationId:"loc_301",name:"C19. 洞穴湖岸",activation:{condition:{type:"always"},priority:0},skeleton:["这个天然洞穴向一个覆盖着鹅卵石的湖岸扩展并向下倾斜。","几艘腐烂的木船被拖上了岸。","向东，一个巨大的地下湖延伸进黑暗中。","向西，通道通往西方和北方。","三艘旧船在岸边等待。"],flesh:"三艘旧船在岸边等待。它们比地牢的其余部分要新得多，是不到一百年前由一群先前的探险者留下的。其中一艘状况足够好，可以通过从其他船上剥离木板，用一个小时的工作来修复。在这个区域的任何持续活动都会吸引居住在区域C3的巨章鱼的注意。这只怪物可以把自己拖上岸寻找看起来美味的食物。",spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_348"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个天然洞穴向一个覆盖着鹅卵石的湖岸扩展并向下倾斜。几艘腐烂的木船被拖上了岸。向东，一个巨大的地下湖延伸进黑暗中。向西，通道通往西方和北方。"},{id:"scn_34a",locationId:"loc_301",name:"C20. 带门的通道",activation:{condition:{type:"always"},priority:0},skeleton:["一扇粗糙建造的铁门看起来是这座古老地牢的新加部分，它堵住了通道。","一条沉重的链条和一个挂锁固定着门。","水之邪教徒在几个月前安装了这扇门，以防止嚎叫憎恨神殿的袭击。","莫尔贝奥斯（C17区域）持有这扇门的钥匙。","这段通道向西延伸至区域A14（位于嚎叫憎恶神殿内）。"],flesh:`水之邪教徒在几个月前安装了这扇门，以防止嚎叫憎恨神殿的袭击。莫尔贝奥斯（C17区域）持有这扇门的钥匙。使用一套盗贼工具并成功通过一次DC 15敏捷检定可以撬开锁，或者通过一次DC 25力量检定可以强行打开门。

这段通道向西延伸至区域A14（位于嚎叫憎恶神殿内）。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一扇粗糙建造的铁门看起来是这座古老地牢的新加部分，它堵住了通道。一条沉重的链条和一个挂锁固定着门。"},{id:"scn_34e",locationId:"loc_301",name:"C21. 繁星湖",activation:{condition:{type:"always"},priority:0},skeleton:["这个地下湖的水面上闪烁着淡淡的微光。","洞穴的天花板自然形成，点缀着数百个微小的蓝色光点，模仿着繁星闪烁的夜晚。","穿过这个湖的运河向北和南延伸。","向东，湖尽头的宽阔码头通向一个有红色柱子的大堂。","天花板位于水面上方50尺处。"],flesh:`天花板位于水面上方50尺处。其"星星"是小片的发光地衣。每片直径一英寸，亮度是蜡烛的十分之一。如果移除，地衣的发光可以持续1d3天。

这个湖泊平均深度为40英尺，靠近东端的地方浅至10英尺。湖中栖息着碎浪教派最强大的怪物：一只名为青铜香炉、拥有220点生命值的龙龟。她年轻而易受影响，被戈尔·碎骨的财富承诺引诱到了碎浪神庙。青铜香炉隐藏在湖泊的西端，等待水先知决定夺取河流控制权的时机。由于她的生命值减少，青铜香炉的挑战等级为13（10,000 XP）。

如果有船只冒险进入她掌控的那半边湖泊，青铜香炉会浮出水面进行侦察。如果区域C22中的铜锣被敲响，她也会现身。这只龙龟只有在确定遇到的生物是入侵者时才会发动攻击，例如当她看到水之信徒与角色们交战时。

青铜香炉 更喜欢攻击船只而不是人。在攻击角色和破坏角色所在的船之间做出选择时，她选择船只。摧毁一艘小艇需要她用 1d4 轮的行动，在此期间，她会忽略撤退的角色。

在湖的西端底部，有一个大木箱敞开着。它包含着青铜香炉的宝藏，有700金币，440银币，六颗价值40金币的绿玉髓宝石，以及四颗价值70金币的大缟玛瑙。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_gar_shatterkeel","npc_tornscale"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_34e_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个地下湖的水面上闪烁着淡淡的微光。洞穴的天花板自然形成，点缀着数百个微小的蓝色光点，模仿着繁星闪烁的夜晚。穿过这个湖的运河向北和南延伸。向东，湖尽头的宽阔码头通向一个有红色柱子的大堂。"},{id:"scn_351",locationId:"loc_301",name:"C22. 市场大厅",activation:{condition:{type:"always"},priority:0},skeleton:["六根裂缝和缺损的红色大理石柱子高耸在这个大厅中，大厅位于一个地下湖的东侧。","补给品和贸易货物堆积在墙壁旁：成捆的珍贵毛皮和皮草，面粉和谷物的麻袋，装满咸肉和啤酒的木桶，油桶等等。","三张长桌和长凳摆放在房间中央，一个大铜锣立在湖边的石码头上。","一根火把在房间中央柱子上的托架中燃烧。","破碎波潮邪教在这里囤积补给品和贸易货物。"],flesh:`破碎波潮邪教在这里囤积补给品和贸易货物。过去几个月在Dessarin河上失踪的许多河船货物都可以在这个大厅里找到。

角色们初次造访此地时，会有一名测深者（详见第七章）与三名邪教徒在此处整理新劫掠来的货物堆。此处的打斗声响会惊动位于区域C13的蜥蜴人或C23区域的邪教徒，他们会在战斗开始后不久前来调查。

如果面对一群危险的攻击者，邪教徒会试图到达锣那里。敲响锣会从区域C21召唤青铜香炉。在锣声响起后的第三个回合，她会在码头边浮出水面，然后加入战斗。

每次角色们穿过这个区域时，在下面的表格上掷一个d20骰子，看看这里是否有其他生物。

战利品包括三吨贸易商品，总价值约500金币。至少需要龙骨船往返三次或使用停泊在区域C1的小艇往返十次才能将所有货物从大厅运出。角色们可以收集500磅最值钱的货物，并用两艘小船运走价值250金币的物品。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_351","enc_pota_c22_bronzefume_reinforcement"],treasureSlotIds:["trs_351_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"六根裂缝和缺损的红色大理石柱子高耸在这个大厅中，大厅位于一个地下湖的东侧。补给品和贸易货物堆积在墙壁旁：成捆的珍贵毛皮和皮草，面粉和谷物的麻袋，装满咸肉和啤酒的木桶，油桶等等。三张长桌和长凳摆放在房间中央，一个大铜锣立在湖边的石码头上。一根火把在房间中央柱子上的托架中燃烧。",randomTableIds:["tbl_351_0"]},{id:"scn_356",locationId:"loc_301",name:"C23. 船舱",activation:{condition:{type:"always"},priority:0},skeleton:["两座铁炉、装满补给品的木桶、堆放在洗手盆旁的水壶和陶器，以及靠墙堆放的一堆柴火表明这个房间里有人经常做饭。","五张普通的双层床铺被安放在房间的东端。","两扇门朝南开，两个箭缝朝北和东方向的运河黑水望去。","这个区域是破碎波潮神庙的厨房。","邪教徒们在这里准备餐食，并在C22区域的餐桌用餐。"],flesh:`这个区域是破碎波潮神庙的厨房。邪教徒们在这里准备餐食，并在C22区域的餐桌用餐。如果时间已晚，大多数人会在他们的铺位上睡觉，但不管时间如何，总有一两个邪教徒忙于烘焙或清洁等杂务。额外的床铺属于在C22区域工作的邪教徒。

这个房间里的任何大声战斗都会提醒C22区域的邪教徒，他们会很快过来调查。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_356"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"两座铁炉、装满补给品的木桶、堆放在洗手盆旁的水壶和陶器，以及靠墙堆放的一堆柴火表明这个房间里有人经常做饭。五张普通的双层床铺被安放在房间的东端。两扇门朝南开，两个箭缝朝北和东方向的运河黑水望去。",dmGuidance:"当角色们到达时，有两名碎浪掠夺者（见第七章）和四名邪教徒在这里。"},{id:"scn_358",locationId:"loc_301",name:"C24. 英雄桥",activation:{condition:{type:"always"},priority:0},skeleton:["一座石桥横跨在这条运河上，距离水面十五尺。","运河南侧的台阶通向这座桥，桥的另一端是一对石制双开门。","门上画着一个巨大的符号。","桥的西侧和东侧，与桥齐平的地方，雕刻成巨大、张开的矮人面孔形状的涵洞将水流排入运河中。","这些小瀑布在桥的附近制造了很多噪音。"],flesh:`门上的标记是水之教派的符号。通往 区域C25 的门未上锁，但受到 en=Glyph of Warding 的保护。任何生物若未先做出水之教派的手势（食指交叉成"X"形，拇指重叠）便开门，都会触发陷阱。角色若搜索门上的陷阱，可通过 DC 14 感知（察觉）检定发现刻纹。触发时，刻纹会造成 5d8 雷鸣伤害（若目标在 DC 14 敏捷豁免中失败），成功则只受一半伤害。任何爆炸声响都足以惊动溃浪神殿内的所有生物。

可以通过排水渠进入区域C25。到达排水渠需要进行一次DC 20力量（运动）检定，以从运河水位爬升15尺湿滑的石砌墙面。排水渠约有4尺高，水流在越过边缘处仅有1尺深。爬上排水渠入口的角色可以轻松蹲下并涉水前进至区域C25，可能会对那里的反派造成突袭。`,spotlightRefs:[],presentNpcIds:["npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一座石桥横跨在这条运河上，距离水面十五尺。运河南侧的台阶通向这座桥，桥的另一端是一对石制双开门。门上画着一个巨大的符号。
桥的西侧和东侧，与桥齐平的地方，雕刻成巨大、张开的矮人面孔形状的涵洞将水流排入运河中。这些小瀑布在桥的附近制造了很多噪音。一条走廊从运河南侧的码头向南延伸。`},{id:"scn_35c",locationId:"loc_301",name:"C25. 元素水神庙",activation:{condition:{type:"always"},priority:0},skeleton:["一个en=Glyph of Warding（见区域C24）保护着房间南端的双开门。","一条二十尺宽的护城河将这个神祠分为北部和南部两半。","在北半部，两个大型石柱分别位于一个形状为普通石块的祭坛两侧。","祭坛上放着一些硬币。","在祭坛上方和后方，墙上悬挂着一个由漂流木梁制成的巨大符号，固定成X形。"],flesh:`一个en=Glyph of Warding（见区域C24）保护着房间南端的双开门。

在房间的南部，两个十尺宽的水道沿着神祠的东西墙延伸，通过南侧的低矮涵洞流出。这里还有两根柱子，一座低矮的石桥横跨分隔的水道，通往祭坛和房间的北部。

护城河深10尺，水位几乎与地面齐平。然而，将水向南输送至涵洞的小泄水道仅有2尺深。在东墙的中间，一个淹没的涵洞通向C26区域。

这个神祠曾经是献给矮人神祇的，但破碎波潮邪教徒重新将它献给了奥莉德拉。五名黑颚部落的蜥蜴人战士在神祠的南部守卫。

如果这是角色们探索的第一个元素神庙，他们会在这里发现戈尔·碎骨（见第七章），他站在房间北部的祭坛旁边。否则，他已经撤退到了眼睛圣所（见第五章）。在那种情况下，有一个狂蟾魔恶魔与蜥蜴人一起守卫。这个恶魔潜伏在神祠中央的深护城河中。

他鄙视大多数人，并且认为即使是他最可靠的追随者也可能因为软弱或背叛而让他失望。Shatterkeel知道角色们不是邪教的成员，也不是来这里加入的，所以他简洁地质问他们：'你们是谁？你们想要什么？我为什么不该淹死你们？'

Shatterkeel会倾听那些声称带来新闻或礼物的人，如果他们似乎打算攻击其他邪教之一，他可能会被说服放他们走。如果被引入对邪教的解释，他透露：'只有通过破坏，这个世界的错误才能得到修正。即将到来的洪水将冲走所有不配的人。'

Gar携带着水溺（见第七章）。水之信徒将财宝藏到这里，并堆积在祭坛上。目前，祭坛上散落着25银币，12金币，以及六个小玛瑙，每个价值10金币。Shatterkeel定期收集这些供品，并将它们安全地存放在C26区域。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_35c","enc_pota_c25_hezrou_branch"],treasureSlotIds:["trs_35c_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一条二十尺宽的护城河将这个神祠分为北部和南部两半。在北半部，两个大型石柱分别位于一个形状为普通石块的祭坛两侧。祭坛上放着一些硬币。在祭坛上方和后方，墙上悬挂着一个由漂流木梁制成的巨大符号，固定成X形。这个房间的这一部分有一道石门朝西开。",dmGuidance:"如果角色们有机会与Shatterkeel交谈，这位先知心情阴沉且多疑。"},{id:"scn_361",locationId:"loc_301",name:"C26. 金库",activation:{condition:{type:"always"},priority:0},skeleton:["要到达这个区域，角色必须通过从C25区域延伸过来的淹没隧道游泳过来。","一个清澈深邃的泉水填满了这个天然洞穴的大部分。","干燥的岩架构成了房间南侧的一部分。","这个水池深近80尺，由底部多孔岩石中的含水层供水。","它是黑暗溪流的源头，充满了这一层的运河和湖泊。"],flesh:`要到达这个区域，角色必须通过从C25区域延伸过来的淹没隧道游泳过来。

这个水池深近80尺，由底部多孔岩石中的含水层供水。它是黑暗溪流的源头，充满了这一层的运河和湖泊。它的难以接近使得它成为戈尔·碎骨囤积水之信徒宝藏的理想地点。他超越了此类顾虑，但他意识到财富对于那些并不完全致力于破碎波潮邪教教义的人来说是一种动力。

几个生锈的铁箱位于房间南边干燥的岩架上。其中两个包含730金币、900银币、一个银质水壶、一卷en=Tidal Wave卷轴，以及一卷en=Vitriolic Sphere卷轴（见附录 B中两种法术）。另外两个箱子里装有防水的皮包，里面装着将近五十本用德特克语（矮人文字）写成的沉重古籍。这些是来自米拉巴尔的智者布鲁登塔的书籍。这位智者被关押在圣石修道院下方的矿井中。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_361_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个清澈深邃的泉水填满了这个天然洞穴的大部分。干燥的岩架构成了房间南侧的一部分。"},{id:"scn_364",locationId:"loc_301",name:"C27. 牧师区",activation:{condition:{type:"always"},priority:0},skeleton:["这个设备齐全的房间包含八张整洁的床铺，一个带有几张椅子的圆桌，绿色和蓝色的挂毯，以及一个装满发光炭火的铜火盆。","一个箭缝朝南方向的黑暗运河望去。","这个房间是邪教牧师的个人住处：两名破碎波涛祭司（见第七章)和四名邪教徒。","这些牧师自视为邪教中最重要的成员，并确保照顾好自己的舒适生活。","他们不时地照料元素水神庙。"],flesh:`这个房间是邪教牧师的个人住处：两名破碎波涛祭司（见第七章)和四名邪教徒。这些牧师自视为邪教中最重要的成员，并确保照顾好自己的舒适生活。他们不时地照料元素水神庙。

在极少数情况下，当戈尔·碎骨休息几个小时时，他会在这里睡觉。否则，他会在C25区域，试图了解奥莉德拉的意愿或指导其他人学习邪教的知识和哲学。

牧师和邪教徒知道C28区域中毒虫罗斯魔谜题的答案，但他们不愿意向陌生人透露。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra","npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_364","enc_pota_c27_resting_gar"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个设备齐全的房间包含八张整洁的床铺，一个带有几张椅子的圆桌，绿色和蓝色的挂毯，以及一个装满发光炭火的铜火盆。一个箭缝朝南方向的黑暗运河望去。"},{id:"scn_366",locationId:"loc_301",name:"C28. 商队楼梯",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的墙壁上雕刻着石质浮雕。","它们描绘了矮人商人带领着驮着重负的骡子或巨型蜥蜴穿越巨大的洞穴。","在房间的中心，一段宽阔的楼梯向下延伸进入黑暗。","楼梯顶端站着一个弯腰的昆虫形态生物，手持一把双叉草叉。","阶梯向下通往眼之魔殿的 区域F6（参见 第五章）。"],flesh:`阶梯向下通往眼之魔殿的 区域F6（参见 第五章）。

粉碎波教派的信徒召唤了一个毒虫罗斯魔，并命令它摧毁任何试图使用楼梯的入侵者。为了确定某人是否是入侵者，毒虫罗斯魔会问三个问题：

{@i 你服务什么？} 答案应该是 "奥莉德拉"，"邪恶水源的公主"，或者 "水"。

你是什么 正确的答案是 "我什么也不是。"

下面有什么 正确的答案是 "眼睛圣所" 或 "远古元素之眼。"

它会战斗到死。`,spotlightRefs:[],presentNpcIds:["npc_olhydra","npc_bronzefume","npc_tornscale"],availableInfoIds:[],encounterIds:["enc_366"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的墙壁上雕刻着石质浮雕。它们描绘了矮人商人带领着驮着重负的骡子或巨型蜥蜴穿越巨大的洞穴。在房间的中心，一段宽阔的楼梯向下延伸进入黑暗。楼梯顶端站着一个弯腰的昆虫形态生物，手持一把双叉草叉。",dmGuidance:"如果队伍不能回答任何问题，毒虫罗斯魔会发动攻击。"},{id:"scn_369",locationId:"loc_369",name:"黑土神殿",activation:{condition:{type:"always"},priority:0},skeleton:["当元素先知被吸引到Tyar-Besil时，元素之土的仆从们控制了矮人废墟的东北区域。","很久以前，这个区域是Tyar-Besil的主入口，一个设防严密的大门复合体，有兵营、警卫室、武器库和马厩。","那些设法从上方地表的古老楼梯战斗下来的敌人被大门区域的威慑防御所阻挡。","不止一次鲁莽的兽人、巨魔或巨人的攻击被大门击退。","随着时间的推移，这些野蛮的敌人找到了攻击Sumber Hills矮人的其他方式，这座要塞最终被废弃。"],flesh:`当元素先知被吸引到Tyar-Besil时，元素之土的仆从们控制了矮人废墟的东北区域。很久以前，这个区域是Tyar-Besil的主入口，一个设防严密的大门复合体，有兵营、警卫室、武器库和马厩。那些设法从上方地表的古老楼梯战斗下来的敌人被大门区域的威慑防御所阻挡。不止一次鲁莽的兽人、巨魔或巨人的攻击被大门击退。随着时间的推移，这些野蛮的敌人找到了攻击Sumber Hills矮人的其他方式，这座要塞最终被废弃。现在，Tyar-Besil的大门已经成为废墟，不是被敌人的攻城机械破坏，而是被附近元素节点产生的震动所破坏。

与其他三个邪教的成员不同，黑土邪教徒可以轻松到达地表。这座神庙复合体的这个区域几乎直接位于圣石修道院下方，通过古老楼梯相连。土之邪教的袭击者可以攻击周围的定居点，并轻松撤退到黑土神庙的安全地带。大地先知马洛斯·恩雷尔选择长期失修的Tyar-Besil堡垒作为他邪教的总部，正是出于这个原因。

黑土神庙坐落于古阶梯的底部，这是神圣石修道院下方的一系列下降通道。阶梯的尽头通往区域B1北部的通道，向上可通往神圣石修道院下方的矿区中的区域M24（参见第三章）。

古老楼梯下降约250尺，每段楼梯为20到30尺。正如人们所期望的矮人建造，这个结构经受住了时间的考验。除了每个台阶中间明显光滑、磨损的部分外，古老楼梯仍然保持良好状态。

这个复合体有以下特点。任何例外情况在它们适用的区域中有所注明。

天花板高度为15尺。

门由平衡在中央枢轴上的石板组成——打开一扇门会形成两个约3英尺宽的缝隙。没有任何锁还能使用，但教徒们用搭扣和销钉固定了一些门。角色可以通过成功的DC 15力量检定强行打开这些门。

双开门有铁铰链，可以像普通门一样朝一个方向或另一个方向打开。

巨大的深坑或裂缝在这个古老的Tyar-Besil地区蜿蜒穿行。深坑平均深100到200尺，但两侧是粗糙倾斜的岩石，而不是陡峭的墙壁。深坑底部往往是陡峭的，杂乱无章的巨石堆，属于3。

教徒们使用铜壁灯架上的火炬施展en=Continual Flame法术，照亮他们经常使用的区域。这一层的其余部分是黑暗的。

许多寺庙的居民携带少量的财宝。拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。

如果她也失败了，黑土邪教就会瓦解。失去领袖后，剩余的土之邪教徒撤退到神眼之殿或完全离开这个区域。Xharva Deem（见区域B15）收拾好她的财宝，带着她的灰矮人助手一起离开。而双头巨人首领Broog-Norb（见区域B12）仍然留在那里。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_369_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:"如果角色们击败了Marlos和Miraj，或者两者都逃离了地牢，Yarsha（见区域B6）会尽她所能维系邪教。"},{id:"scn_373",locationId:"loc_369",name:"B1. 石像鬼峡谷",activation:{condition:{type:"always"},priority:0},skeleton:["这条通道通向一个地下深坑，深坑上横跨着一座之字形、十尺宽的无栏杆石桥。","这座桥连接着通往北方和南方的隧道。","深坑底部位于桥下五十尺处，由一堆杂乱的巨石组成。","在西侧，深坑变窄并继续延伸一段距离。","三个石像鬼守卫着这个区域，潜伏在这个洞穴昏暗的高处壁架上，洞穴的天花板比桥高50尺，离洞穴地面100尺。"],flesh:`三个石像鬼守卫着这个区域，潜伏在这个洞穴昏暗的高处壁架上，洞穴的天花板比桥高50尺，离洞穴地面100尺。携带火把或具有黑暗视觉的角色如果他们的被动感知（察觉）得分达到15或更高，就能发现石像鬼。石像鬼会忽略离开黑土神庙的团队。他们攻击任何从北方接近的陌生人，除非这些陌生人在桥上停下来做出邪教的手势（用双手的拇指和食指形成三角形）或大喊："我效忠黑土！"

在战斗中，石像鬼会寻找机会将角色推下桥梁。如果有两只石像鬼被击败，第三只便会撤退，飞往区域B2躲藏。

一些骨骼在深坑底部破碎或半埋着。大多数是穿着严重锈蚀盔甲的矮人和兽人。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_373"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这条通道通向一个地下深坑，深坑上横跨着一座之字形、十尺宽的无栏杆石桥。这座桥连接着通往北方和南方的隧道。深坑底部位于桥下五十尺处，由一堆杂乱的巨石组成。在西侧，深坑变窄并继续延伸一段距离。"},{id:"scn_377",locationId:"loc_369",name:"B2. 北方峡谷",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴状区域从地面到天花板高100尺。","这个大型洞穴的地面是一堆杂乱无章的石头，陡峭的墙壁倾斜向上，顶部是悬挂的钟乳石，大约在一百尺之上。","在五十尺高的锯齿状墙壁上有两个开口：一个通往西南方向的较宽开口和一个通往东南方向的狭窄隧道。","壁架之外是一个洞穴，洞穴顶部有悬挂的钟乳石，距离头顶五十尺，地面上散布着碎石，距离下方五十尺。","在您下方五尺处，一个狭窄的壁架紧贴着墙壁，几乎环绕洞穴一半。"],flesh:`这个洞穴状区域从地面到天花板高100尺。

马洛斯·恩雷尔使用en=Stone Shape法术在洞穴墙壁上创造了一条狭窄的岩架。从洞穴地面无法看见这条岩架，它起始于通往区域B6的岩架下方5英尺处，终止于一扇箭缝，箭缝后方就是区域B22。该箭缝高4英尺，但宽度仅有6英寸。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个大型洞穴的地面是一堆杂乱无章的石头，陡峭的墙壁倾斜向上，顶部是悬挂的钟乳石，大约在一百尺之上。在五十尺高的锯齿状墙壁上有两个开口：一个通往西南方向的较宽开口和一个通往东南方向的狭窄隧道。

壁架之外是一个洞穴，洞穴顶部有悬挂的钟乳石，距离头顶五十尺，地面上散布着碎石，距离下方五十尺。在您下方五尺处，一个狭窄的壁架紧贴着墙壁，几乎环绕洞穴一半。`,dmGuidance:`如果角色从东侧进入（通过B1区域），请阅读以下文本：
如果角色正站在区域B6或B21的岩架上，则改为使用以下文本：`},{id:"scn_37a",locationId:"loc_369",name:"B3. 毁坏的大门",activation:{condition:{type:"always"},priority:0},skeleton:["一对巨大的石门在南侧的小广场上破碎不堪，两旁是明亮的铁制火把，照亮了整个区域。","一扇门在其底部的铰链上不均匀地倾斜着，另一扇门则破碎在地。","立着的门上雕刻着一幅有谷物田和起伏丘陵的田园风光，经过几个世纪的风雨侵蚀已变得磨损和凹凸不平。","破碎的大门后面是一个宽敞而昏暗的大厅。","箭缝被雕刻在西侧和东侧的墙壁上。"],flesh:`这里曾是Tyar-Besil要塞的前门，但许多年前一场地震完成了由兽人和巨人开始的破坏。这里的天花板高30尺，大门高15尺。马洛斯·恩雷尔 打算修复它，但他还没有找到足够熟练的人来完成这项工作。

从B5和B6区域的哨所面向这个区域的箭缝目前没有人把守。然而，大门周围的任何大声喧哗都可能引起那些区域的邪教徒的注意。如果他们注意到入侵者，他们就会开始用十字弓或法术对任何看得见的敌人进行狙击。

他们用一道铁闸门封锁前门，并在区域B4以及B5和B6区域的箭缝处布置警戒守卫。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一对巨大的石门在南侧的小广场上破碎不堪，两旁是明亮的铁制火把，照亮了整个区域。一扇门在其底部的铰链上不均匀地倾斜着，另一扇门则破碎在地。立着的门上雕刻着一幅有谷物田和起伏丘陵的田园风光，经过几个世纪的风雨侵蚀已变得磨损和凹凸不平。破碎的大门后面是一个宽敞而昏暗的大厅。箭缝被雕刻在西侧和东侧的墙壁上。",dmGuidance:"如果角色们攻击黑土神殿后撤退，邪教徒会加强该区域的防御。"},{id:"scn_37f",locationId:"loc_369",name:"B4. 门厅",activation:{condition:{type:"always"},priority:0},skeleton:["这曾经是一个宏伟的大厅，有着高耸的天花板、大理石地板，以及装饰墙壁的繁荣农田的复杂雕刻。","然而，它已经沦为废墟。","墙壁上布满了深深的裂缝，部分砌体已经坍塌，大厅北端的巨大石门也已破碎。","通道通往西方和南方，东边有一扇石门。","房间的东南角有一个小烹饪火和几个睡袋。"],flesh:`震碎大门的相同地震也使得墙壁和地板出现了裂缝，30尺高的天花板上也有部分区域坍塌。

四名大地精，一个名叫Nartham的穴居鲨鱼（见第七章），以及Nartham的鲨蜥坐骑守卫着大门厅。Nartham是一个暴力且性情暴躁的家伙。

烹饪火和睡袋属于那些还没有在神庙里分配到更好住处的大地精。他们退缩并用箭矢射击角色，而Nartham和他的鲨蜥兽则攻击队伍。这些大地精是雇佣兵，希望赚取足够的战利品回到他们的部落并接管它。

位于 区域B5 的灰矮人和 区域B7 的邪教徒会听到这个房间里的任何战斗。不过他们已经习惯了纳萨姆的巨甲兽制造的噪音，所以要过一会儿他们才会对任何骚动产生好奇。灰矮人会使用十字弩（见区域 B5），而 B7 的邪教徒则会前来支援此处的部队。

几天后，他会再增加两个食人魔来增强这支力量。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle"],availableInfoIds:[],encounterIds:["enc_37f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这曾经是一个宏伟的大厅，有着高耸的天花板、大理石地板，以及装饰墙壁的繁荣农田的复杂雕刻。然而，它已经沦为废墟。墙壁上布满了深深的裂缝，部分砌体已经坍塌，大厅北端的巨大石门也已破碎。通道通往西方和南方，东边有一扇石门。房间的东南角有一个小烹饪火和几个睡袋。",dmGuidance:`如果角色们试图通过谈话进入神庙，他们需要说得快，因为Nartham渴望找借口杀人。
如果角色们在这里击败守卫并离开神庙，马洛斯·恩雷尔会在几个小时后用来自B14区域的邪教徒替换这些守卫。`},{id:"scn_384",locationId:"loc_369",name:"B5. 东守卫室",activation:{condition:{type:"always"},priority:0},skeleton:["这个老旧守卫室中破碎的砖石展示了这座地牢的悠久历史。","向北，一条长廊通向西墙上的一个箭缝。","向南，碎石堆堵塞了一个小内室。","房间里陈设着半打简单的睡袋和一个铁炉，附近堆放的柴火足以让炉火持续燃烧。","这个警卫室是五名为黑土邪教服务的灰矮人的营房和哨所。"],flesh:`这个警卫室是五名为黑土邪教服务的灰矮人的营房和哨所。这些灰矮人并不从北面的箭缝密切监视，因为他们知道区域B1的石像鬼和区域B4的纳萨姆守卫在站岗。

如果被外面严重的战斗或不寻常的活动所惊动，两名灰矮人会拿起轻弩（+2命中，1d8穿刺伤害）并驻守在箭垛处。其他三名则准备保护房间的唯一入口。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_384"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个老旧守卫室中破碎的砖石展示了这座地牢的悠久历史。向北，一条长廊通向西墙上的一个箭缝。向南，碎石堆堵塞了一个小内室。房间里陈设着半打简单的睡袋和一个铁炉，附近堆放的柴火足以让炉火持续燃烧。"},{id:"scn_386",locationId:"loc_369",name:"B6. 亚尔沙的洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个警卫室的东南角被部分倒塌的墙壁的一堆碎石填满，而北面的墙壁上有一条狭窄的裂缝。","尽管有这些缺陷，这个房间仍然充当着营房和警卫室。","四个简单的木制双层床围绕着房间排列，每个床都有一个小储物箱。","在东北墙的壁龛后面有一个箭缝。","这个房间曾是异界之门大厅的警卫室，但震动导致曾经连接这两个房间的门口坍塌，并形成了通往区域B2的隧道。"],flesh:`这个房间曾是异界之门大厅的警卫室，但震动导致曾经连接这两个房间的门口坍塌，并形成了通往区域B2的隧道。一位名叫亚尔沙的融石者和她的两名黑土守卫（两者详情见第七章）居住于此。除了正常装备外，亚尔沙携带一瓶高等治疗药水，而警卫们配有轻弩（命中+3，1d8穿刺伤害）用于必要时保护区域B3，但他们没有在箭缝处安排守卫。

Yarsha是个杀人犯，她打算暗杀米拉吉·维扎恩并取代他成为邪教的二号人物。如果她和她的守卫即将被击败，她会转而攻击自己的守卫并将他们消灭，这样她就可以试图与角色们达成交易。Yarsha告诉队伍Miraj是土之先知，以及他们在哪里可以找到他（区域B8）。她除了要求临时停战外，不为自己要求任何东西。

邪教徒们不知道位于区域B2的岩架可以连通北部隧道与区域 B22。

在亚莎的床铺下的铁箱里装有210个银币，140个铜币，一个装有六块黑曜石碎片的小袋，每块价值10金币，还有一瓶水下呼吸药水。`,spotlightRefs:[],presentNpcIds:["npc_miraj_vizann"],availableInfoIds:[],encounterIds:["enc_386"],treasureSlotIds:["trs_386_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个警卫室的东南角被部分倒塌的墙壁的一堆碎石填满，而北面的墙壁上有一条狭窄的裂缝。尽管有这些缺陷，这个房间仍然充当着营房和警卫室。四个简单的木制双层床围绕着房间排列，每个床都有一个小储物箱。在东北墙的壁龛后面有一个箭缝。"},{id:"scn_389",locationId:"loc_369",name:"B7. 门卫宿舍",activation:{condition:{type:"always"},priority:0},skeleton:["这套宽敞的套房由几个小房间组成，通过低矮的拱门相连。","棕色的窗帘为不同的房间提供了一定程度的隐私，墙上挂满了军事展示品——盾牌和交叉的剑，破旧的旗帜，以及几个固定好的怪物头颅，包括一只鹿鹰和一只蝎尾狮。","黑土邪教徒将这些房间用作营房。","此处由名为黛娜丝的穴居鲨鱼、一名黑土守卫和四名邪教徒驻守。","（黑土守卫和掘地鲨的数据详见第七章。"],flesh:`黑土邪教徒将这些房间用作营房。此处由名为黛娜丝的穴居鲨鱼、一名黑土守卫和四名邪教徒驻守。（黑土守卫和掘地鲨的数据详见第七章。）黛娜丝的巨甲虫被圈养在B9区域。此外，当前在区域B20执勤的邪教徒也在此房间内设有铺位。

邪教徒们的作息时间很诡异，任何时候都有1d4名成员在铺位上睡觉。即使在深夜，也至少有两名成员保持清醒。他们认为未经通报就闯入的陌生人是敌人并会发起攻击。如果情况允许，房间内的居住者会向区域B4的邪教徒发出警报通知他们有人来袭。

Dynath在他的盔甲下隐藏着一个钱包，里面有15金币，5铂金币，以及五颗价值40金币的精美黄水晶。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_389"],treasureSlotIds:["trs_389_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这套宽敞的套房由几个小房间组成，通过低矮的拱门相连。棕色的窗帘为不同的房间提供了一定程度的隐私，墙上挂满了军事展示品——盾牌和交叉的剑，破旧的旗帜，以及几个固定好的怪物头颅，包括一只鹿鹰和一只蝎尾狮。"},{id:"scn_38c",locationId:"loc_369",name:"B8. 泥巫师实验室",activation:{condition:{type:"always"},priority:0},skeleton:["这扇门上雕刻着一个皱眉的矮人战士，他身穿板甲，本应是拳头的地方是带刺的狼牙棒。","这个房间的内部可以这样描述：","这个大厅的墙壁上排列着雕刻成怒容满面的矮人战士模样的大型石雕。","每尊雕像的手中都有带刺的狼牙棒。","然而，有几尊雕像已经融化或变形。"],flesh:`这个房间的内部可以这样描述：

这是米拉吉·维扎恩（见第七章）的巢穴和工作室，他是一个土元素裔，也是黑土邪教的第二号人物。这些雕像曾经是活化构装生物，尽管驱动它们的魔法很久以前就消失了。Miraj设法重新激活了两个石头战士。其中一个现在在区域B24站岗，另一个在这里。这个古老的构装生物相当于一个石魔像，有102点生命值，没有多重攻击动作（挑战等级为4而不是8）。\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0adventure/adventure-pota.json

米拉杰是理性的、审慎的，并且不易发怒。他支持这个邪教是因为它加深了他对元素魔法的理解。如果受到挑战，他会试图说服攻击者将他们的努力转向对抗火邪教。米拉杰并不排斥提供贿赂来诱惑敌人，然后如果他们回来索取，他就会食言。

米拉杰自称为"泥巫师"，因为他练习土和水魔法，并且他尊敬欧雷莫克和奥莉德拉。他对水邪教徒并无恶意，有时甚至作为他们的代言人或使者。

在战斗中，米拉杰指挥魔像保护他。然后他退到房间的后方施展法术。如果死亡似乎迫在眉睫，米拉杰会使用隐形并逃跑。

工作台和架子上存放着常见的炼金材料和笔记本，包括不寻常的矿物盐和溶液。笔记表明那些融化的雕像是米拉杰实验失败的魔像。

一个藏在工作台下面的木制箱子里装着一小堆220金币，九个奇怪的黑色水晶，每个价值50金币，还有一瓶水下呼吸药水。`,spotlightRefs:[],presentNpcIds:["npc_miraj_vizann","npc_ogr_moch","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_38c"],treasureSlotIds:["trs_38c_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这扇门上雕刻着一个皱眉的矮人战士，他身穿板甲，本应是拳头的地方是带刺的狼牙棒。

这个大厅的墙壁上排列着雕刻成怒容满面的矮人战士模样的大型石雕。每尊雕像的手中都有带刺的狼牙棒。然而，有几尊雕像已经融化或变形。房间中央的石板已被移除，露出了自然岩石的表面。几张工作台和装满炼金试剂的架子被安置在雕像之间的墙壁上。`},{id:"scn_392",locationId:"loc_369",name:"B9. 破碎大厅",activation:{condition:{type:"always"},priority:0},skeleton:["很久以前，一次地震事件摧毁了这座大厅。","一道深深的裂谷将房间一分为二，在房间的北部和南部之间留下了一个宽阔的缺口。",'东部的独立岩石柱形成了跨越裂谷的天然"垫脚石"。',"裂谷延伸到西墙之外，一条狭窄的壁架紧贴着广阔空间的南墙。","这个大厅里仍然矗立着六根巨大的石柱，这里的天花板几乎有五十尺高。"],flesh:`Tyar-Besil的战士们曾在这里练习武器。现在，黑土邪教将这个房间用作他们珍贵坐骑的马厩：三只鲨蜥们。其中一只属于B7区域的Dynath。另外两只最近才被捕获，还没有被驯服。鲨蜥被关押在这里，直到这些怪物能与邪教徒建立联系。

每只穴居攫怪都被铁链牢固地拴在房间的一根大柱子上（具体来说是东北、中西部和东南的柱子）。锁链将穴居攫怪限制在柱子周围15英尺的范围内，除此之外它们可以自由移动。穴居攫怪大部分时间都在打盹，但它们睡得很浅。一只穴居攫怪可以通过一次成功的DC 20力量检定来挣脱锁链，但东北方向的锁链（拴着受过训练的穴居攫怪）较为脆弱，只需要一次成功的DC 15力量检定即可挣脱。

将房间一分为二的裂谷深100尺，宽度从15尺（在最东端）到30尺不等。裂谷东端的岩石柱顶部是平的，它们之间的间隙宽5尺。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_392"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:'很久以前，一次地震事件摧毁了这座大厅。一道深深的裂谷将房间一分为二，在房间的北部和南部之间留下了一个宽阔的缺口。东部的独立岩石柱形成了跨越裂谷的天然"垫脚石"。裂谷延伸到西墙之外，一条狭窄的壁架紧贴着广阔空间的南墙。这个大厅里仍然矗立着六根巨大的石柱，这里的天花板几乎有五十尺高。每根柱子都固定着重铁链，链环的大小和战士的手一样大。'},{id:"scn_396",locationId:"loc_369",name:"B10. 长峡谷",activation:{condition:{type:"always"},priority:0},skeleton:["如果铁匠们仍在B15区域工作，从那里可以听到锤击和锁链的碰撞声。","靠近裂谷那一端的角色也会看到附近的墙壁上闪烁着暗红色的光。","携带明亮光源的探险者可能会被B15区域的生物注意到。","这条长长的裂谷从西北向东南延伸。","一个五尺宽的壁架紧贴在一面墙上，然后形成一座狭窄的石桥横跨裂谷，连接到对面墙上的类似壁架。"],flesh:`如果铁匠们仍在B15区域工作，从那里可以听到锤击和锁链的碰撞声。靠近裂谷那一端的角色也会看到附近的墙壁上闪烁着暗红色的光。携带明亮光源的探险者可能会被B15区域的生物注意到。

壁架和石桥位于裂谷底部上方100尺处，并且低于裂谷顶部100尺。从桥上可以看到B15区域，且与桥处于同一水平。

在天然桥附近制造大量噪音的生物会惊扰栖息在桥下侧的一群蝙蝠群。

这座桥狭窄且不平。任何站在桥上并受到伤害的生物必须进行一次 DC 10 敏捷豁免检定。如果检定失败且差值达到或超过5，该生物将坠入深渊。在其他失败的情况下，该生物会滑倒并在桥的边缘 倒地。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_396"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[99],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这条长长的裂谷从西北向东南延伸。一个五尺宽的壁架紧贴在一面墙上，然后形成一座狭窄的石桥横跨裂谷，连接到对面墙上的类似壁架。"},{id:"scn_398",locationId:"loc_369",name:"B11. 南通道",activation:{condition:{type:"always"},priority:0},skeleton:["这个走廊向南通往区域C10。"],flesh:"这个走廊向南通往区域C10。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[99],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_399",locationId:"loc_369",name:"B12. 布鲁格-诺布的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["你来到一条南北走向的隧道。","隧道的两端都已塌陷，但西墙有一对刻有粗俗信息的双扇门，用通用语书写。",'南门上的信息写着："NORBS RUM. KEEP OWT BROOG." 北门上写着："BROOGS RUM. NORB IZ STOOPID."',"使用以下文本来描述房间的内部：","这个大房间内堆满了破碎的砖石、巨大的未加工毛皮和成堆的拣过的骨头与垃圾。"],flesh:`使用以下文本来描述房间的内部：

这个房间曾是驻扎在Tyar-Besil这一部分的矮人士兵的主要厨房。现在，它成为了Broog和Norb——两个特别大且脾气暴躁的双头巨人的首领——的巢穴。Broog-Norb拥有130点生命值。

Broog-Norb不是黑土邪教的追随者。几个月前，他找到了一条通往Tyar-Besil废墟的路。这个双头巨人与土之邪教徒有着脆弱的停战协议，邪教徒们小心地避开他的路。他会攻击那些明显不是土之邪教成员的入侵者，但只会威胁那些自称为邪教成员的入侵者。Broog-Norb并不知道谁是邪教徒，谁不是。

双头巨人的宝藏散乱地堆放在一块脏污的毛皮下。这堆宝藏包括2900铜币，130银币，一尊价值80金币的象牙小象雕像，以及一对各值30金币的金手镯。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_399"],treasureSlotIds:["trs_399_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[99],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`你来到一条南北走向的隧道。隧道的两端都已塌陷，但西墙有一对刻有粗俗信息的双扇门，用通用语书写。南门上的信息写着："NORBS RUM. KEEP OWT BROOG." 北门上写着："BROOGS RUM. NORB IZ STOOPID."

这个大房间内堆满了破碎的砖石、巨大的未加工毛皮和成堆的拣过的骨头与垃圾。这里看起来曾经是一个厨房或面包店：巨大的古老砖炉矗立在房间中央，尽管现在大多数已经变成了红色的碎石堆。`,dmGuidance:"如果角色从东侧接近这个房间，请阅读以下文本："},{id:"scn_39d",locationId:"loc_369",name:"B13. 狩猎大厅",activation:{condition:{type:"always"},priority:0},skeleton:["水填满了这个大厅中央的一个长方形大理石水池，墙壁上展示着一个环绕房间的古老浮雕。","浮雕描绘了林地中的鹿、熊和猎鸟，以及一群矮人猎人。","房间的东南角严重损坏，那里的墙壁不过是些碎石。","Tyar-Besil的矮人们以他们田园诗般的方式为荣，并以农场和林地的景象庆祝他们在地面上的领土。","这个房间很久以前是一个食堂，这里举行过许多精美的宴会。"],flesh:`Tyar-Besil的矮人们以他们田园诗般的方式为荣，并以农场和林地的景象庆祝他们在地面上的领土。这个房间很久以前是一个食堂，这里举行过许多精美的宴会。黑土邪教徒打算修复大厅，用他们自己阴郁的象征替换这些图像，但他们还没有开始。

埋藏在地板下的管道连接到破碎波涛邪教领地北部的一处泉水，并为水池供水。水池的边缘高出地面大约一尺，水池深4尺。水是新鲜的，安全可饮用。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[99],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"水填满了这个大厅中央的一个长方形大理石水池，墙壁上展示着一个环绕房间的古老浮雕。浮雕描绘了林地中的鹿、熊和猎鸟，以及一群矮人猎人。房间的东南角严重损坏，那里的墙壁不过是些碎石。"},{id:"scn_39f",locationId:"loc_369",name:"B14. 拷问室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间中央放着一个木制的拷问架。","墙上挂着镣铐，后墙上挂着恶魔般的钩子、刀片和夹具。","房间西侧的凹室里放着四个狭小的铁笼，里面关着面容憔悴、肮脏、眼神空洞的人。","房间东侧的凹室里放着两张双层床和一台铁炉。","这个房间配备了用来折磨战败的敌人、未能满足他们疯狂领袖要求的邪教仆人，或者偶尔的无辜受害者的器具。"],flesh:`这个房间配备了用来折磨战败的敌人、未能满足他们疯狂领袖要求的邪教仆人，或者偶尔的无辜受害者的器具。这个阴森的房间是名叫Heldorm的一位融石者（见第七章）和协助他的三位邪教徒的领地。

Heldorm精神不稳定，他在工作时自言自语，对自己只说出一半的黑色笑话咯咯笑。'他对审问新对象的前景感到非常兴奋。

被锁在笼子里的俘虏包括以下人员：

Orna，一个女性人类黑土守卫（见第七章），几天前敢于攻击一个黑土牧师。她贪婪而残忍，现在对邪教充满了愤怒。

Droth，一个男性人类雇佣兵暴徒，为嚎叫之恨邪教服务。他几乎处于木僵状态，但如果有人引导，他还是会从一个地方挪到另一个地方。

Wulgreda，一个不幸的女性矮人平民，她在圣石修道院附近的山丘勘探时被捕。她警告队伍Orna是一名黑土守卫。

Gervor，一个男性半精灵贵族，是一个月前在苏姆贝尔山丘被邪教伏击的冒险队伍中唯一的幸存者。他受了重伤，只剩下1点生命值。

Wulgreda和Gervor只要能被释放就很高兴，尽管他们请求队伍帮助他们到达安全的地方。Orna想要走自己的路，但她愿意用信息交换自由。她愿意引导角色前往马洛斯·恩雷尔（区域B21）。

Hedorm把从囚犯那里得到的最好的战利品存放在一个锁着的木箱里（钥匙在他的口袋里）。他的宝藏包括230银币，一个包含六个价值每个10金币的天青石的小袋，Orna的板甲，Gervor的镶钉皮甲和长剑，以及一支（完全充能的）由之前的受害者留下的魔法飞弹魔杖。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle"],availableInfoIds:[],encounterIds:["enc_39f"],treasureSlotIds:["trs_39f_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间中央放着一个木制的拷问架。墙上挂着镣铐，后墙上挂着恶魔般的钩子、刀片和夹具。房间西侧的凹室里放着四个狭小的铁笼，里面关着面容憔悴、肮脏、眼神空洞的人。房间东侧的凹室里放着两张双层床和一台铁炉。",dmGuidance:"如果角色们伪装成黑土邪教徒，他会假设他们给他带来了一个新的受害者，并问：'谁将被审问？"},{id:"scn_3a5",locationId:"loc_369",name:"B15. 石锻造场",activation:{condition:{type:"always"},priority:0},skeleton:["接近这个区域的角色在进入之前会听到铁锤敲打铁砧的声音。","这个房间可以直接俯瞰B10区域。","这个房间中央有一座铁匠炉，周围堆放着木柴。","两个大铁砧紧挨着，锤子、钳子和其他锻造工具散落在房间墙壁边的几个工作台上。","房间有通往西边和南边的门，但东端则通向一个黑暗的裂谷。"],flesh:`接近这个区域的角色在进入之前会听到铁锤敲打铁砧的声音。这个房间可以直接俯瞰B10区域。

黑土邪教徒将这间前兵营改造成了一个锻造场，他们在这里制造元素装置。锻造场的主人是一只名叫Xharva Deem的土巨灵。两个灰矮人协助她。

Xharva Deem 对战斗没有兴趣，因为她与马洛斯·恩雷尔的交易要求她为邪教制造元素力量的器具。这就是她承诺的范围。他可以照顾好自己的奴隶。"

她不保护自己的灰矮人助手，尽管如果有任何凡人敢于攻击她，她会怀着愤慨的愤怒反击。

Xharva Deem 的确得到了丰厚的报酬。锻造场旁的两个铁箱里总共装有600金币，两个各值100金币的金手镯，一条镶有红宝石吊坠的金项链价值750金币，以及一袋12个马赛克石，每个价值25金币。此外，这位道还为邪教完成了一套掘土巨怪之爪（见第七章）。爪子放在工作台上的一块烧焦的皮革上。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle"],availableInfoIds:[],encounterIds:["enc_3a5","enc_pota_b15_provoked_dao"],treasureSlotIds:["trs_3a5_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间中央有一座铁匠炉，周围堆放着木柴。两个大铁砧紧挨着，锤子、钳子和其他锻造工具散落在房间墙壁边的几个工作台上。房间有通往西边和南边的门，但东端则通向一个黑暗的裂谷。",dmGuidance:`如果角色们问她为什么袖手旁观，她会回答："Urnrayle 没有付钱让我去和微不足道的凡人战斗。
如果角色们试图破坏她的锻造场、拿走她的工具或移走她正在加工的物品，Xharva Deem 也会进行干预，尽管她会先发出严厉的警告。`},{id:"scn_3aa",locationId:"loc_369",name:"B16. 武器库",activation:{condition:{type:"always"},priority:0},skeleton:["一根粗大的柱子支撑着这个没有照明的房间的低矮、桶状拱形天花板。","生锈的金属碎片——胸甲、盾牌、斧头和剑的残余物——挂在墙上的老木钉上，或者躺在它们很久以前掉落的地面上。","更近期的杂物以脏乱的毛皮和破碎的木制家具的形式也散布在房间各处。","一堆破碎的椅子和桌腿堆放在房间北侧的一个冒烟的火坑旁边。","门朝向东边和西南方。"],flesh:`门朝向东边和西南方。

这个房间作为黑土邪教的警戒岗。它还为土之邪教徒提供了一个绝佳的监视永恒烈焰邪教的地方。为了守卫这个入口，马洛斯·恩雷尔指派了一支由五个食人魔组成的守备队，并下令不允许任何人从西边进入，除非出示土之邪教的通行信号（用拇指和食指组成的三角形）。食人魔没有接到阻止人们离开的命令，尽管他们会质疑那些看起来不像邪教成员的陌生人。

这条走廊通向永恒之火神殿中的区域E30。

如果食人魔被击败，马洛斯·恩雷尔 会在 1d4 天后用一个 土元素侍从（见 第七章）来替换它们。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle"],availableInfoIds:[],encounterIds:["enc_pota_b16_ogres","enc_pota_b16_myrmidon"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一根粗大的柱子支撑着这个没有照明的房间的低矮、桶状拱形天花板。生锈的金属碎片——胸甲、盾牌、斧头和剑的残余物——挂在墙上的老木钉上，或者躺在它们很久以前掉落的地面上。更近期的杂物以脏乱的毛皮和破碎的木制家具的形式也散布在房间各处。一堆破碎的椅子和桌腿堆放在房间北侧的一个冒烟的火坑旁边。"},{id:"scn_3af",locationId:"loc_369",name:"B17. 峡谷楼梯",activation:{condition:{type:"always"},priority:0},skeleton:["一道巨大的裂谷出现在你们面前，其顶部距离有三十尺。","裂谷中央有一根方形的黑色岩石柱。","一座石桥通向环绕这根柱子的楼梯。","裂谷、楼梯和柱子都延伸进黑暗之中。","在桥的中间施加了一个en=Alarm法术。"],flesh:`在桥的中间施加了一个en=Alarm法术。

警报通知了B18区域的邪教徒，他们会醒来，武装自己，并准备监视新来的人。

楼梯向下通往眼魔神殿内的区域F11（参见第五章）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一道巨大的裂谷出现在你们面前，其顶部距离有三十尺。裂谷中央有一根方形的黑色岩石柱。一座石桥通向环绕这根柱子的楼梯。裂谷、楼梯和柱子都延伸进黑暗之中。

当你走到桥的中间时，你感到脚下轻微的震动。然后一个低沉、响亮的声音，像是一个巨人的呻吟，充满了空气，在峡谷中回荡。`,dmGuidance:`如果角色从东侧接近这个区域，请阅读以下文本：
如果角色们触发了警报，请阅读以下内容：`},{id:"scn_3b2",locationId:"loc_369",name:"B18. 营房",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间看起来是一个干净、整洁有序的宿舍。","简陋的家具包括靠南墙和东墙排列的六张双层床，以及房间北半部的一张木桌和几把椅子。","房间中央附近有一个铁炉，旁边整齐地堆放着一堆木柴。","在房间的西南角，一个箭缝通向一个黑暗的通道。","门朝向东边和西边。"],flesh:`一打黑土邪教徒驻扎在这里，但任何时候只有四名黑土守卫和一名黑土祭司（见第七章）在场。两名守卫正在睡觉，没有穿盔甲；如果警报响起，他们没有时间穿上盔甲，他们的AC是10。

两把轻弩被放置在箭缝附近，以便警卫们可以对房间外的入侵者进行射击（命中+3，命中时造成1d8穿刺伤害）。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_3b2"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间看起来是一个干净、整洁有序的宿舍。简陋的家具包括靠南墙和东墙排列的六张双层床，以及房间北半部的一张木桌和几把椅子。房间中央附近有一个铁炉，旁边整齐地堆放着一堆木柴。在房间的西南角，一个箭缝通向一个黑暗的通道。门朝向东边和西边。"},{id:"scn_3b4",locationId:"loc_369",name:"B19. 奥格莫克雕像",activation:{condition:{type:"always"},priority:0},skeleton:["三条走廊在这个房间相交。","西墙中间的一个凹室里矗立着一座十尺高的雕像，描绘了一个由泥土、巨石和锋利水晶组成的粗糙人形。","一只巨大的岩石拳头高举在它钝圆的头顶之上。","一个更古老雕像的破碎残骸堆积在这座雕像站立的基座周围。","这座雕像描绘的是欧雷莫克，邪恶大地的王子。"],flesh:"这座雕像描绘的是欧雷莫克，邪恶大地的王子。马洛斯·恩雷尔雕刻了它。",spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"三条走廊在这个房间相交。西墙中间的一个凹室里矗立着一座十尺高的雕像，描绘了一个由泥土、巨石和锋利水晶组成的粗糙人形。一只巨大的岩石拳头高举在它钝圆的头顶之上。一个更古老雕像的破碎残骸堆积在这座雕像站立的基座周围。"},{id:"scn_3b6",locationId:"loc_369",name:"B20. 餐厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的中间摆放着三张支架桌，箱子里装着整齐堆叠的补给品靠墙放着。","向东南方向，一个敞开的门通向一个小厨房，里面有更多的补给品和一个大型烹饪壁炉。","一件破旧的灰色斗篷，上面有羽毛，被钉在北墙的中间。","门通向东方和西方。","土之邪教徒通常单独或成对用餐，随意享用整天炖煮的炖菜以及任何其他可用的食物。"],flesh:`土之邪教徒通常单独或成对用餐，随意享用整天炖煮的炖菜以及任何其他可用的食物。目前有两位黑土守卫（见第七章）在中间的桌子上用餐，而三位邪教徒在厨房工作。

这件带羽毛的斗篷是从一名嚎叫仇恨邪教徒（德罗斯，被囚禁在区域B14）那里作为战利品夺来的。

食堂是人流密集的地方，逗留在这里的角色很可能会碰到更多的黑土教团成员。角色第一次之后每次通过这个区域，都要在下面的表格上掷一个d20：`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_3b6"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的中间摆放着三张支架桌，箱子里装着整齐堆叠的补给品靠墙放着。向东南方向，一个敞开的门通向一个小厨房，里面有更多的补给品和一个大型烹饪壁炉。一件破旧的灰色斗篷，上面有羽毛，被钉在北墙的中间。门通向东方和西方。",randomTableIds:["tbl_3b6_0"]},{id:"scn_3ba",locationId:"loc_369",name:"B21. 尖叫雕像",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴里到处都是流石、石笋和钟乳石的形态。","一座石制建筑固定在北墙上，南边的石墙上有一扇石门。","洞穴墙上的一个天然缺口向东显露出一个裂谷。","许多栩栩如生的雕像被布置在岩石形态之中。","这些雕像描绘了表现出震惊、恐惧或极度痛苦的生物。"],flesh:`如果这是角色探索的第一个元素神殿，马洛斯·恩雷尔（见第七章）就在这里。幻象已经警告了这位美杜莎角色的到来，他更愿意在这个区域迎接访客。一个作为马洛斯的信使和管家的幽影恶魔潜伏在附近。

如果他不在这里，马洛斯已经撤退到了眼睛神殿或黑曜石（见第五章）。

Marlos是一个无情的自恋者，他喜欢谈论自己。如果他们忘记自己正在与一个美杜莎交谈而好好地看了他一眼，他很乐意永久记录下他们的惊讶。Marlos喜欢精美的东西并且喜欢炫耀。他夸耀自己如何发现了动摇大地根基的力量。很快，他打算报复所有曾经反抗或侮辱过他的人。

战斗中，马洛斯依靠其石化凝视来保护自己免受远程攻击或法术的伤害，同时逼近使用铁牙和蛇发攻击。当战局不利时，马洛斯会逃往区域B22，并通过B2区域的秘密路径撤离。

这些雕像是触怒了Urnrayle的土之邪教徒的石化遗骸。

马洛斯携带着铁牙（见第七章）。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle"],availableInfoIds:[],encounterIds:["enc_3ba","enc_pota_b21_first_temple_marlos"],treasureSlotIds:["trs_3ba_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴里到处都是流石、石笋和钟乳石的形态。一座石制建筑固定在北墙上，南边的石墙上有一扇石门。洞穴墙上的一个天然缺口向东显露出一个裂谷。许多栩栩如生的雕像被布置在岩石形态之中。这些雕像描绘了表现出震惊、恐惧或极度痛苦的生物。"},{id:"scn_3c0",locationId:"loc_369",name:"B22. 土之先知的圣所",activation:{condition:{type:"always"},priority:0},skeleton:["这个豪华装饰的房间配备了金色和棕色的挂毯，一个巨大的床铺上覆盖着枕头，精美的桃花心木家具配有深红色垫子，以及包括雕塑、半身像和瓮在内的可爱艺术品。","一个箭缝朝向东方的裂谷。","马洛斯精心准备了带有箭缝的凹室，以作为逃生的手段。","箭缝高4尺，宽6英寸，深1尺。","使用他的地脉通道特性一次就足够通过。"],flesh:`马洛斯精心准备了带有箭缝的凹室，以作为逃生的手段。箭缝高4尺，宽6英寸，深1尺。使用他的地脉通道特性一次就足够通过。外面是一条狭窄的壁架（见区域B2）。

在瓮中，马洛斯存放了1,100枚银币和130枚铂金币。房间里有一幅美丽的飞龙挂毯（价值400金币），一把雕刻的竖琴价值250金币，以及一件绣花丝绸长袍价值80金币。一套精灵链甲被折叠放在一个木箱里。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_3c0_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个豪华装饰的房间配备了金色和棕色的挂毯，一个巨大的床铺上覆盖着枕头，精美的桃花心木家具配有深红色垫子，以及包括雕塑、半身像和瓮在内的可爱艺术品。一个箭缝朝向东方的裂谷。"},{id:"scn_3c3",locationId:"loc_369",name:"B23. 流血石神殿",activation:{condition:{type:"always"},priority:0},skeleton:["一个不规则的坑洞占据了这个大厅的中心。","坑洞中央矗立着一座闪亮的黑色方尖碑。","在方尖碑底部散落着一些被漂白的骨头。","方尖碑前的一个较小的石柱上挂着一对镣铐，现在锁着一个奇怪的侏儒，他有着灰色的皮肤和光头。","一位名为Erione的黑土祭司（见第七章）正在这里，在一座古老矮人礼拜堂的废墟上建立神龛。"],flesh:`一位名为Erione的黑土祭司（见第七章）正在这里，在一座古老矮人礼拜堂的废墟上建立神龛。她由四名邪教徒陪同。

Erione对于很少有祭司在邪教中担任高位感到不满，她打算证明崇拜可以带来更大的力量。她诱导了一只黑布丁进入多孔的岩石方尖碑。它在她的命令下渗出。

Erione将一名名为Rukhelmoth 'Rukh' Glitterstone的女性地底侏儒铐在方尖碑底部的石柱上，并打算将他作为祭品奉献给黑色史莱姆。当史莱姆出现时，它像浓稠的黑色血液一样从方尖碑中渗出，首先攻击侏儒。只有在侏儒被消耗后，它才会注意到角色们。

Rukh是一名探险家，她在试图潜入神眼之殿时被捕。她还没有探索过黑土神庙，但已经看过B17和B21区域。如果被救出，她很乐意分享以下信息：

土之邪教的领袖是一个名叫马洛斯·恩雷尔的美杜莎。他的巢穴位于东北方的一个洞穴中。

南边的楼梯通往下方，那里有一个古老的卓尔神庙，它已经被元素邪教徒所占据。

邪教徒在下方的地牢中创造了元素节点。（Rukh推测这些节点是邪教徒奇怪元素力量的来源。）`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle"],availableInfoIds:[],encounterIds:["enc_3c3"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个不规则的坑洞占据了这个大厅的中心。坑洞中央矗立着一座闪亮的黑色方尖碑。在方尖碑底部散落着一些被漂白的骨头。方尖碑前的一个较小的石柱上挂着一对镣铐，现在锁着一个奇怪的侏儒，他有着灰色的皮肤和光头。",mapGeometry:{imageRef:"adventure/PotA/049-poa04-07.webp"}},{id:"scn_3c5",locationId:"loc_369",name:"B24. 哨兵大厅",activation:{condition:{type:"always"},priority:0},skeleton:["四根巨大的方形柱子支撑着这个古老大厅的天花板。","通道通往西北和东南方向。","大厅中央矗立着一座十尺高的严厉矮人战士雕像，他的手中是带有尖刺的铁球代替了手掌。","这座雕像是由米拉吉·维扎恩（见区域B8）重新激活的石魔像，并被放置在这里。","（它的挑战等级是4而不是8。"],flesh:`这座雕像是由米拉吉·维扎恩（见区域B8）重新激活的石魔像，并被放置在这里。它有102点生命值，没有多重攻击动作。（它的挑战等级是4而不是8。）

石魔像只对攻击和从西边进入大厅的生物作出反应。如果入侵者通过触碰拇指和食指做出三角形手势，或者如果他们说出通关口令"I serve the Black Earth"（我效忠于黑土），魔像会允许他们继续前进。否则，它就会攻击。

西侧的通道通向永恒之火圣殿的区域E5。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"四根巨大的方形柱子支撑着这个古老大厅的天花板。通道通往西北和东南方向。大厅中央矗立着一座十尺高的严厉矮人战士雕像，他的手中是带有尖刺的铁球代替了手掌。"},{id:"scn_3ca",locationId:"loc_3ca",name:"永恒火焰的神殿",activation:{condition:{type:"always"},priority:0},skeleton:["在古代Tyar-Besil的鼎盛时期，这座古老的矮人堡垒的西北区域充当着它的制造中心，巨大的锻造厂和铸造厂紧邻所有必需的自然资源，用以打造既美观又致命的武器和盔甲。","来自下方火山岩的熔岩提供了热量和材料，而熔岩流过并再次下沉的地方，富饶的矿脉和宝石矿脉被留在了天然管道中，供矮人发现和开采。","数个世纪以来，在Sumber Hills下的矮人们锻造武器、五金和壮丽的宝藏。","他们把最好的留给了自己。","其余的则被带到地表世界，商人们把矮人的作品带到了远方。"],flesh:`在古代Tyar-Besil的鼎盛时期，这座古老的矮人堡垒的西北区域充当着它的制造中心，巨大的锻造厂和铸造厂紧邻所有必需的自然资源，用以打造既美观又致命的武器和盔甲。来自下方火山岩的熔岩提供了热量和材料，而熔岩流过并再次下沉的地方，富饶的矿脉和宝石矿脉被留在了天然管道中，供矮人发现和开采。数个世纪以来，在Sumber Hills下的矮人们锻造武器、五金和壮丽的宝藏。他们把最好的留给了自己。其余的则被带到地表世界，商人们把矮人的作品带到了远方。随着时间的推移，当这座城市被遗弃时，锻造厂变得安静，铸造厂冷却，矮人大师们把工作台留给了黑暗，前往了其他领域。

当凡尼弗最初被这个建筑群吸引时，她指示她的手下在废弃的铸造厂内外占据地盘。这个提夫林知道控制制造战争工具的能力可以给她的邪教带来优势，并且她坚信她可以利用这种力量让其他元素神庙臣服，允许她统治一切。

永恒之火神庙的E1区域通过一系列蜿蜒曲折的熔岩管与地表相连，这些熔岩管在地表下蜿蜒延伸超过一英里。这些管道将地下神庙与绯月大厅相连（参见第三章）。主路沿途有许多侧管和旧的采矿隧道分支通向黑暗，主路上每隔一段距离都有火把照明。

这个复合体有以下特点。任何例外情况在它们适用的区域中有所注明。

天花板高度为15尺。

门由平衡在中央枢轴上的石板组成——打开一扇门会形成两个约3英尺宽的缝隙。没有任何锁还能使用，但教徒们用搭扣和销钉固定了一些门。角色可以通过成功的DC 15力量检定强行打开这些门。

双开门有铁铰链，可以像普通门一样朝一个方向或另一个方向打开。

教徒们使用铜壁灯架上的火炬施展en=Continual Flame法术，照亮他们经常使用的区域。这一层的其余部分是黑暗的。

许多寺庙的居民携带少量的财宝。拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。

Lyzzie Calderos（见区域E29）决定将一个储藏室改造成她的地狱猎犬的窝，所以她命令她的手下将那个房间里找到的所有杂物扔进这两个房间，因此一些堆垛显得凌乱。

彻底搜索每个房间需要6小时。角色们是否能找到任何有价值的东西由您决定。

三位关键的领导者维持着永恒之焰邪教的组织性：凡尼弗、巴斯蒂安·萨曼德和Lyzzie Calderos。如果这些领导者在角色离开神庙后有任何一个存活，邪教徒会重新组织他们的防御并击退进一步的入侵。如果凡尼弗撤退到更深层，而角色击败了Bastian和Lyzzie，永恒之焰邪教就会失去凝聚力，幸存的邪教徒会放弃这个层面。一些人撤退到眼睛神殿或哭泣的巨像，而其他人则完全逃离神庙。一些怪物可能会留下来，比如奇美拉，它会收集尽可能多的战利品，并在所有领导者都离开后开始狩猎散布的邪教徒。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_3ca_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"这个房间里弥漫着陈旧的铁锈和灰尘的气息。大量的杂物堆积在各处。有些地方，收藏品整齐有序，而在其他地方，则是一片混乱。"},{id:"scn_3d3",locationId:"loc_3ca",name:"E1. 入口",activation:{condition:{type:"always"},priority:0},skeleton:["一个箭缝被雕刻在通往这个区域的熔岩管的南墙上。","这个箭缝高3尺，宽6英寸，且无人守卫。","箭缝后面是一条通往E6区域的隧道。","通道在这一点变宽，有两个大型凹室分列走廊两侧。","松散堆放的石头形成了每个凹室前部的路障，倾斜着以防御来自西边的入侵。"],flesh:`一个箭缝被雕刻在通往这个区域的熔岩管的南墙上。这个箭缝高3尺，宽6英寸，且无人守卫。箭缝后面是一条通往E6区域的隧道。

四名大地精和一名大地精长官在此站岗，他们身穿火红色的战袍，胸前绘有元素火焰的标志。他们对从西边接近的任何人提出挑战，但对于朝那个方向去的人则不太关注。

向东行进的访客必须做出火之邪教的手势（一只手紧握成拳，大拇指朝上，另一只手覆盖在拳头上），或者说出通关口令，即"Fire is eternal!"（火是永恒的！）。否则，访客必须说服大地精他们必须与神庙领袖交谈。如果这些都没有发生，大地精将发动攻击。

这里的战斗声会吸引E2区域的守卫。

大地精队长有一个腰带小包，里面有20金币和一对打磨过的血石，每颗价值50金币。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_3d3_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"通道在这一点变宽，有两个大型凹室分列走廊两侧。松散堆放的石头形成了每个凹室前部的路障，倾斜着以防御来自西边的入侵。路障之间的一条路径通向东方一个宽阔的下行楼梯。",dmGuidance:`当角色到达楼梯顶部的房间时，请阅读以下文本：
如果角色们能说动大地精让他们通过，两名大地精将护送队伍至E2区域。
如果角色击败这些大地精后离开这个区域，守卫会在一两个小时内被区域E10的大地精替换。`},{id:"scn_3d9",locationId:"loc_3ca",name:"E2. 柱廊大厅",activation:{condition:{type:"always"},priority:0},skeleton:["大厅在此扩展成一个由四根带有火红裂缝的黑曜石柱子支撑的圆顶房间。","两只剃刀爆炸（见第七章）待在房间的两侧。","这些守卫的反应取决于角色们如何到达。","如果做到了，其中一个razerblast会护送队伍。","如果发生战斗，其中一个razerblast会大喊：'伊米西保佑我们！"],flesh:`两只剃刀爆炸（见第七章）待在房间的两侧。这些守卫的反应取决于角色们如何到达。如果做到了，其中一个razerblast会护送队伍。

如果发生战斗，其中一个razerblast会大喊：'伊米西保佑我们！'当这种情况发生时，请大声朗读以下文本：

任何生物在回合中首次进入一个或多个岩浆柱的10尺范围内，或在其回合结束时位于那里，将受到2d10火焰伤害。剃刀爆破者对火焰伤害免疫。

这些教徒知道激活黑曜石柱的指令。`,spotlightRefs:[],presentNpcIds:["npc_imix","npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_3d9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`大厅在此扩展成一个由四根带有火红裂缝的黑曜石柱子支撑的圆顶房间。空气异常温暖。

黑曜石柱变成了岩浆柱，散发出强烈的热量和光芒，使空气闪烁。`,dmGuidance:`如果角色没有拉响警报就来到这里，请阅读以下文本：
如果角色们来自火神庙内部并且表现得像他们属于那里，守卫们几乎不会注意他们。
如果角色们由大地精护送到达，他们必须说服守卫让他们通过。
如果角色击败了这些守卫并离开该区域，两小时后将由来自区域E7的教徒组成的替代守卫驻扎于此。`},{id:"scn_3dd",locationId:"loc_3ca",name:"E3. 壁龛大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个黑暗的大厅两侧都有壁龛。","每个壁龛内都站着一个模糊的身影。","这些模糊的身影是很久以前雕刻的矮人战士雕像，作为通过这个区域的人的荣誉守卫。","一条绊线横跨在最西侧的一对壁龛之间的地板上。","被动感知（察觉）属性值达到15或更高的角色会自动注意到它。"],flesh:`这些模糊的身影是很久以前雕刻的矮人战士雕像，作为通过这个区域的人的荣誉守卫。

一条绊线横跨在最西侧的一对壁龛之间的地板上。被动感知（察觉）属性值达到15或更高的角色会自动注意到它。否则，一个角色搜索地板上的陷阱时，若成功通过DC 10的感知（察觉）检定，就能发现这条绊线。如果绊线被触发，一把伪装成南部雕像一部分的弹簧驱动巨斧会弹射过走廊，并对触发陷阱的生物发动攻击（命中+10；命中时造成1d12 + 5挥砍伤害）。战斧的铿锵声会惊动区域E2的警卫们，他们会前来调查。

一扇密门藏在最东南角的雕像后面。需要通过一次成功的DC 15感知（察觉）检定才能发现。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个黑暗的大厅两侧都有壁龛。每个壁龛内都站着一个模糊的身影。"},{id:"scn_3e2",locationId:"loc_3ca",name:"E4. 隐藏金库",activation:{condition:{type:"always"},priority:0},skeleton:["这个地窖里有两座石制的石棺，上面精心雕刻着矮人符文和沉睡矮人的浮雕图像。","每个角落都放着一个未点燃的火盆，而在房间中央，一个黄铜香炉悬挂在连接到天花板的链子上。","火之邪教中没有人知道这个秘密区域。",'一个石棺上的德特克符文写着："安息吧，芬顿·石匠。',"在你的大厅中梦见锤子和凿子的回响。"],flesh:`火之邪教中没有人知道这个秘密区域。一个石棺上的德特克符文写着："安息吧，芬顿·石匠。在你的大厅中梦见锤子和凿子的回响。"另一个写着："亲爱的吉特。所有认识你的人心中沉重。"

抬起石棺盖需要成功的DC 20力量检定。

每个石棺内都放着一个腐烂的较小棺材的残骸。每个棺材的金银装饰和配件总共价值150金币。干枯的骨骼残骸躺在棺材残骸下。每个骨骼上都戴着一个精美制作的金色葬礼面具，上面镶嵌着石榴石和蓝宝石，价值2000金币。Findon最喜欢的石工工具也随他一同埋葬。许多精美的凿子、锥子和刮刀散布在棺材的整个长度上，他手中紧握着他的锤子，横放在胸前。

看到葬礼面具的矮人NPC可能会认出它们是什么，并询问角色如何得到它们的。关于发现的消息最终传到了北方的矮人领袖那里。几周之内，一小队矮人追踪到角色们，并询问面具的发现地点。矮人们还坚持要求将面具交给他们。

一旦矮人们得知了通往提亚-贝希尔的入口，他们就开始组织探险队。然而，永恒烈焰教派不会不战而退，放弃它的巢穴。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_3e2_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个地窖里有两座石制的石棺，上面精心雕刻着矮人符文和沉睡矮人的浮雕图像。每个角落都放着一个未点燃的火盆，而在房间中央，一个黄铜香炉悬挂在连接到天花板的链子上。",dmGuidance:"如果角色们要求支付，矮人们会皱眉，但同意为每个面具支付高达200铂金币。"},{id:"scn_3e6",locationId:"loc_3ca",name:"E5. 破碎的屏障",activation:{condition:{type:"always"},priority:0},skeleton:["这个部分坍塌的房间呈L形。","地板上覆盖着岩石和骨头的碎片。","一堵粗糙的五尺高的墙将房间的两半隔开。","两个穿着板甲的食人魔（AC 17）和四个半食人魔挑战任何从寺庙外面来的人。","那些寻求进入的人必须做出E1中描述的标志。"],flesh:`两个穿着板甲的食人魔（AC 17）和四个半食人魔挑战任何从寺庙外面来的人。那些寻求进入的人必须做出E1中描述的标志。

这条隧道通往区域B24（位于黑土神庙内）。

食人魔和半食人魔收集了一小批财宝，他们将其存放在一个镶有珍珠母的银盒中，并埋藏在房间东北角的碎石堆里。成功的 DC 10 智力（调查）检定可以让角色发现它，因为碎石堆最近被翻动过的痕迹明显。这个盒子价值 150 gp，里面装有 35 gp、17 pp、四颗每颗价值 30 gp 的亚历山大变石、一瓶 高等治疗药水 和一瓶 缩小药水。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_3e6"],treasureSlotIds:["trs_3e6_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个部分坍塌的房间呈L形。地板上覆盖着岩石和骨头的碎片。一堵粗糙的五尺高的墙将房间的两半隔开。",dmGuidance:`如果角色们相反地要求与寺庙的领袖交谈，一个食人魔离开并带着来自E2区域的razerblast回来。
如果角色们击败了食人魔并前往另一个区域，来自区域E9的一些食人魔将在一小时后替换他们。`},{id:"scn_3ec",locationId:"loc_3ca",name:"E6. 巴斯蒂安的住处",activation:{condition:{type:"always"},priority:0},skeleton:["除非Bastian在别处，否则这个房间的门是从内部锁上的。","这个令人窒息的房间内部充满了木柴烟味，烟雾弥漫在空气中。","角落里四个超大的火盆发出相当亮的光。","一张长沙发靠在一面墙上，而另一面墙上放着一个玄武岩桌面的写字台。","许多地毯，其中许多边缘烧焦了，散乱地铺在地板上。"],flesh:`除非Bastian在别处，否则这个房间的门是从内部锁上的。

一个皮肤呈红色的男子在房间中央来回踱步。

这是一个名叫巴斯蒂安·萨曼德（见第七章）的火元素元素裔（fire 元素裔）的巢穴和书房，他是火教的第二号人物。他负责守卫这个建筑群的北部。

Bastian对任何他不认识的人都持怀疑态度，并假定任何入侵者都是敌人。他足够精明，会进行对话，试图了解角色们的能力以及他们为何在此。Bastian试图说服角色们去追捕凡尼弗，并承诺如果角色们带给他焰袭，将会得到巨大的（并且是虚构的）奖励。他还描述了沿途可能遇到的景象。在此过程中，他最小化了中间房间的危险。

如果Bastian在这里受到攻击，E7和E8区域的邪教徒会来援助他。

北墙上的一个秘密门可以通过成功的 DC 15 感知（察觉）检定发现。它通向一条向北延伸 40 英尺的隧道，隧道尽头是一个箭缝，可以俯瞰到一个熔岩管道（见区域 E1）。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_vanifer","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个令人窒息的房间内部充满了木柴烟味，烟雾弥漫在空气中。角落里四个超大的火盆发出相当亮的光。一张长沙发靠在一面墙上，而另一面墙上放着一个玄武岩桌面的写字台。许多地毯，其中许多边缘烧焦了，散乱地铺在地板上。墙上挂着的挂毯，以各种深浅不一的猩红、血红和玫瑰红色编织而成，上面绣有火焰图案，装饰着这个房间。",dmGuidance:"如果角色们看起来同意并且有能力，他会提供给他们到达E26区域的指引。"},{id:"scn_3f2",locationId:"loc_3ca",name:"E7. 兵营",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间是兵营。","一排排的双层床铺沿着墙壁排列，几张桌子占据了中央部分。","火盆和火把在整间房间中以固定间隔分布。","桶、箱子和行李箱堆放在南端的墙壁旁。","东南墙上的一个宽阔的开口通向一座横跨火光闪烁的裂缝的石桥。"],flesh:`东南方向的裂缝在E12区域有描述。

一打火神庙的邪教徒在这里住宿，但当角色们到达时，只有四名永恒火焰守卫（见第七章）在场。必须唤醒两名，然后站起来加入任何战斗；他们的AC（护甲等级）为12，因为他们没有时间穿戴盔甲。

如果这个房间里的士兵遭遇突袭，战斗的声音会吸引来自区域E6、E8和E9的注意。不过区域E9的食人魔反应特别迟缓。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_3f2"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间是兵营。一排排的双层床铺沿着墙壁排列，几张桌子占据了中央部分。火盆和火把在整间房间中以固定间隔分布。桶、箱子和行李箱堆放在南端的墙壁旁。东南墙上的一个宽阔的开口通向一座横跨火光闪烁的裂缝的石桥。"},{id:"scn_3f6",locationId:"loc_3ca",name:"E8. 牧师的房间",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的大部分空间被三张床占据，每张床下都有一个储物箱。","架子和写字台位于南方。","一个小桌子靠在北墙的中间。","那里，散乱地放着一些羊皮纸和一个墨水池，旁边是两个壶和一摞盘子。","这个房间已经被三个邪教牧师占据。"],flesh:`这个房间已经被三个邪教牧师占据。通常情况下，有两名永恒烈焰祭司（见第七章）在场。

其中一名牧师携带着一瓶火焰吐息药水。箱子里总共有36个银币和19个金币。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_3f6"],treasureSlotIds:["trs_3f6_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的大部分空间被三张床占据，每张床下都有一个储物箱。架子和写字台位于南方。一个小桌子靠在北墙的中间。那里，散乱地放着一些羊皮纸和一个墨水池，旁边是两个壶和一摞盘子。",dmGuidance:"如果角色们出其不意地抓住他们，一个正在桌子旁吃饭，而另一个坐在桌子旁，查阅一本大书并写着东西。"},{id:"scn_3f9",locationId:"loc_3ca",name:"E9. 食人魔巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的两个北角各堆了一堆散发着臭味的毛皮。","两个巢穴之间放着一个小袋子，里面装满了指节骨，旁边放着一块半吃剩的肉。","这些毛皮堆是E5区域的食人魔用来睡觉的床铺。","区域E10也会在确认噪音并非只是食人魔喧闹后赶来。","熊地精可能会等到噪音平息后，仅仅窥探一下情况。"],flesh:`这些毛皮堆是E5区域的食人魔用来睡觉的床铺。

区域E10也会在确认噪音并非只是食人魔喧闹后赶来。熊地精可能会等到噪音平息后，仅仅窥探一下情况。

有一个食人魔在其床上堆放的一件毛皮衬里的斗篷口袋里藏了一个小袋子。袋子里装有几块闪亮的石头，其中包括一块蓝色的石英（价值5金币）、一块赤铁矿（价值5金币）和一块黑曜石（价值10金币）。其中一块闪亮的石头实际上是一块吉运之石（幸运石）。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_3f9_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的两个北角各堆了一堆散发着臭味的毛皮。两个巢穴之间放着一个小袋子，里面装满了指节骨，旁边放着一块半吃剩的肉。",dmGuidance:"如果角色们在这里制造噪音，区域E7会前来调查。"},{id:"scn_3fc",locationId:"loc_3ca",name:"E10. 大地精巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["角色们可以从东边的楼梯和西边的房间里闻到这里烤肉的味道。","这个形状不寻常的房间散发着烹饪中的肉味。","一些睡觉用的垫子靠在墙边，中间有一个开放的火圈，上面有肉在烤叉上嘶嘶作响。","为火神庙服务的大地精在这里住宿。","有六名大地精和一名大地精长官在场。"],flesh:`角色们可以从东边的楼梯和西边的房间里闻到这里烤肉的味道。

为火神庙服务的大地精在这里住宿。有六名大地精和一名大地精长官在场。除非有不睡觉的理由，否则四名大地精正在睡觉，而另外两名则和他们的队长一起坐在火旁。睡觉的大地精醒来并在第一回合站起来装备自己，在下一回合加入战斗。由于没有时间穿戴盔甲，每个大地精的护甲等级（AC）为13（盾牌）。

如果大地精队长的生命值减少到最大值的一半，它会用一回合的时间喝下一瓶高等治疗药水（见"财宝"）。

这些大地精经常大声喧哗，进行训练或比赛。位于区域E6、E7和E8的部队可能会调查此处的骚动，但这需要一段时间。而区域E9的食人魔只会在邪教徒下令时才会前来。

朝南的楼梯向下延伸30尺，到达E11区域西侧一个宽敞、火把照明的走廊。

大地精队长有一个小巧、打磨过的橡木盒子，里面装有三瓶火焰抗性药水和一瓶高等治疗药水。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_3fc"],treasureSlotIds:["trs_3fc_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个形状不寻常的房间散发着烹饪中的肉味。一些睡觉用的垫子靠在墙边，中间有一个开放的火圈，上面有肉在烤叉上嘶嘶作响。"},{id:"scn_402",locationId:"loc_3ca",name:"E11. 牢房区",activation:{condition:{type:"always"},priority:0},skeleton:["这条长长的通道在北侧和南侧墙壁上每隔十五尺就被门打断。","许多门都是用门闩和插销机制从这侧固定好的。","最西边的四个牢房（地图上标出）用作奴隶看守的兵营，其余的则用来关押奴隶。","当冒险者第一次打开通向配备家具的房间的门时，请阅读以下内容：","一张床靠在一面墙上，对面的墙上放着一张桌子。"],flesh:`最西边的四个牢房（地图上标出）用作奴隶看守的兵营，其余的则用来关押奴隶。

当冒险者第一次打开通向配备家具的房间的门时，请阅读以下内容：

挂毯上的符号是火的象征；北边每个配备家具的牢房里住着一个永恒火焰守护者，而南边每个配备家具的牢房里住着一个怒火者（见第七章中的两者）。一个牢房中的战斗会吸引附近其他邪教徒的注意。

大厅东南角的牢房是空的。在成功通过一次 DC 15 感知（察觉）检定时，可以发现南墙上的一扇密门。

除了有秘密门的那一个之外，这些没有家具的牢房的门摸起来令人不适地温暖。

大厅北侧每个未配备家具的牢房里都关着一个火蜥蜴——总共有四个火蜥蜴。如果给予自由，火蜥蜴可以被说服去对抗火教徒。然而，如果被迫与阿瑟人一起战斗，火蜥蜴在战斗中每轮有百分之二十五的几率反叛阿瑟人。

大厅南侧的每个无家具的牢房（不包括最东边的空牢房）内都有两个火矮人们——总共六个阿泽尔。他们渴望与火教徒和火巨灵奴隶主（见区域E13）战斗，但他们需要武器。如果火蜥蜴攻击阿泽尔，阿泽尔会与火蜥蜴战斗，直到一方或另一方被击败。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_402"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这条长长的通道在北侧和南侧墙壁上每隔十五尺就被门打断。许多门都是用门闩和插销机制从这侧固定好的。

一张床靠在一面墙上，对面的墙上放着一张桌子。桌子上方挂着一块红色的挂毯。挂毯上用黑色线绣着一个碗状的符号。`,dmGuidance:`展示给玩家看。
如果角色们不帮助阿泽尔与火蜥蜴战斗，阿泽尔也会转而攻击角色们。`},{id:"scn_408",locationId:"loc_3ca",name:"E12. 熔岩裂谷",activation:{condition:{type:"always"},priority:0},skeleton:["一座石桥横跨一个炎热、朦胧的裂缝，下方四十尺处是一条熔岩河流。","裂缝的顶部距离桥面五十尺。","生物在回合中首次进入岩浆或在其上结束回合时，会承受6d10火焰伤害。","一个大型机械装置悬挂在东部的空中。","这是一套钢制滑轮和粗铁链，连接着一堵悬挂的黑色石墙。"],flesh:`石桥安全可过。生物在回合中首次进入岩浆或在其上结束回合时，会承受6d10火焰伤害。

这个机械装置控制着熔岩流入E13区域。它由E17区域操作。尽管年代久远，这个设备仍然运转得非常完美。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一座石桥横跨一个炎热、朦胧的裂缝，下方四十尺处是一条熔岩河流。裂缝的顶部距离桥面五十尺。

一个大型机械装置悬挂在东部的空中。这是一套钢制滑轮和粗铁链，连接着一堵悬挂的黑色石墙。这堵墙看起来像是一种运河闸门。`,dmGuidance:"当角色们移动到房间中心附近的位置时，请大声朗读以下内容："},{id:"scn_40d",locationId:"loc_3ca",name:"E13. 铸造厂",activation:{condition:{type:"always"},priority:0},skeleton:["当人们接近这个房间时，温度明显升高，角色们在看到里面的东西之前很久就能听到金属撞击金属的声音。","这个巨大的房间发出噪音、光线和热量。","熔岩从西墙的洞中流出，进入铜制的槽中。","热浪、烟雾和蒸汽升向圆顶天花板，通过通风口逸出。","房间两端有楼梯上升，还有一个较小的通道向东出口。"],flesh:`当人们接近这个房间时，温度明显升高，角色们在看到里面的东西之前很久就能听到金属撞击金属的声音。

这个房间是火教领地的核心，伟大的铸造厂，他们在这里锻造武器和盔甲。这里的噪音淹没了周围地区发生的任何战斗声。一个火巨灵在一名爆刃和两名永恒火焰守卫（见第七章中的两者）的协助下，驱使一个火蜥蜴和三名火矮人们，强迫他们操作锻造炉。

一旦这里发生任何干扰，奴隶们就会转而攻击火巨灵。然后火巨灵将注意力集中在控制他的奴隶上，让邪教徒去对付角色们。如果明显看出邪教徒在战斗中处于不利，火巨灵会撤退到火节点的巢穴（见第五章）通过区域E14。

火蜥蜴和阿瑟人会攻击火巨灵，直到他撤退，然后它们会互相攻击。生还者可能会被影响，继续帮助角色，如E11区域中所描述。

这里目前正在锻造的所有盔甲和武器都还没有接近完成到可以有效地使用。

一个铁制传声管连接着这个房间的西南墙和区域E17的东墙，以便铁匠和操作区域E12中的运河和闸门机械的工程师之间可以来回传递指令。

一旦角色们在这里杀死或赶走了奴隶贩子，火神庙的其余部分就会进入高度警戒状态。一个小时后，来自E7至E10区域和E25至E29区域的守卫开始轮班监视这个区域。守卫们的目标是防止任何人进入E14区域。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_40d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个巨大的房间发出噪音、光线和热量。熔岩从西墙的洞中流出，进入铜制的槽中。热浪、烟雾和蒸汽升向圆顶天花板，通过通风口逸出。房间两端有楼梯上升，还有一个较小的通道向东出口。一个火巨灵驱使阿泽尔和火蜥蜴在这里制造武器，而火教徒则站岗守卫。",dmGuidance:"如果角色们带着来自E11区域的火蜥蜴或阿瑟人到达这里，这些生物会拿起武器站在各自一边。"},{id:"scn_410",locationId:"loc_3ca",name:"E14. 通往火元素节点的通道",activation:{condition:{type:"always"},priority:0},skeleton:["在这段通道的尽头，一个类似于吊桥的木制平台延伸到一个大约五十尺宽的大型不规则垂直井中。","一个直径十二尺的大型石盘悬浮在木制延伸部分旁边。","井道向上延伸进漆黑的黑暗中，但远远的下方可以看到闪烁的红光。","角色们第一次到达这里时，悬浮的圆盘就在场。","其他任何时候，它有50%的几率出现在这个层级。"],flesh:`角色们第一次到达这里时，悬浮的圆盘就在场。其他任何时候，它有50%的几率出现在这个层级。

通过向竖井中大声说出正确的指令词使圆盘上升或下降，声音需足够大以产生回声。指令词为"灰烬"使平台下沉，"余烬"使其上升。其上升高度不会超过此位置。从一个位置移动到另一个位置需要1分钟。竖井向下延伸至眼之密所中的区域F15，并进一步向下至哭泣巨像中的区域W1（两者位置详见第五章）。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在这段通道的尽头，一个类似于吊桥的木制平台延伸到一个大约五十尺宽的大型不规则垂直井中。一个直径十二尺的大型石盘悬浮在木制延伸部分旁边。井道向上延伸进漆黑的黑暗中，但远远的下方可以看到闪烁的红光。"},{id:"scn_412",locationId:"loc_3ca",name:"E15. 古代武器库",activation:{condition:{type:"always"},priority:0},skeleton:["这个走廊里充满了灰尘和蛛网。","在通道大约一半的地方，它扩展成一个小型房间，里面仍然摆放着生锈的武器和盔甲架。","一个闪亮的盾牌挂在东墙上。","除了挂在墙上的盾牌之外，所有的武器和盔甲都已损坏。","悬挂的盾牌是一个带有在其正面的棘轮的+1 盾牌，棘轮缓慢地顺时针转动，每小时转动一圈。"],flesh:`除了挂在墙上的盾牌之外，所有的武器和盔甲都已损坏。

悬挂的盾牌是一个带有在其正面的棘轮的+1 盾牌，棘轮缓慢地顺时针转动，每小时转动一圈。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_412_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个走廊里充满了灰尘和蛛网。在通道大约一半的地方，它扩展成一个小型房间，里面仍然摆放着生锈的武器和盔甲架。一个闪亮的盾牌挂在东墙上。",dmGuidance:"当角色们第一次发现通往这个没有光亮的地方的任一秘密门时，请大声朗读以下文本："},{id:"scn_415",locationId:"loc_3ca",name:"E16. 井",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间没有光亮。","走廊尽头是一个圆形房间，比建筑群的其余部分要凉爽。","房间中心有一个水池。","水面像玻璃一样平滑，离周围的地面有一尺。","井的深度约为12尺。"],flesh:`这个房间没有光亮。

井的深度约为12尺。水从井底的裂缝中渗上来。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"走廊尽头是一个圆形房间，比建筑群的其余部分要凉爽。房间中心有一个水池。水面像玻璃一样平滑，离周围的地面有一尺。"},{id:"scn_417",locationId:"loc_3ca",name:"E17. 机械室",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的北半部充满了复杂的齿轮、飞轮、传动轴和杠杆。","很明显，最近有人对它进行了修理，因为许多部件看起来是全新的，整个装置因最近被抛光和润滑而闪闪发光。","这个机械装置操作着连接E12区和E13区之间的运河和船闸系统。","操纵杆激活配重和弹簧，以升起和降低巨大的屏障门，控制流入熔岩槽的熔岩量。","一个铁制传声筒连接着这个房间的东墙和铸造厂（E13区）的西南角。"],flesh:"这个机械装置操作着连接E12区和E13区之间的运河和船闸系统。操纵杆激活配重和弹簧，以升起和降低巨大的屏障门，控制流入熔岩槽的熔岩量。一个铁制传声筒连接着这个房间的东墙和铸造厂（E13区）的西南角。",spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的北半部充满了复杂的齿轮、飞轮、传动轴和杠杆。很明显，最近有人对它进行了修理，因为许多部件看起来是全新的，整个装置因最近被抛光和润滑而闪闪发光。"},{id:"scn_419",locationId:"loc_3ca",name:"E18. 图书馆",activation:{condition:{type:"always"},priority:0},skeleton:["这个黑暗的地方散发出微弱的气味，带着坟墓的寒意。","奇怪的土堆贯穿整个房间，看起来像是种植用的沟渠。","这些土堆是曾经整齐排列的书架和书籍的腐朽残骸。","当邪教徒到达这里时，他们发现了一处占据了这里的褐色霉菌。","在不成功地试图烧掉它（导致其体积翻倍）之后，他们决定避开这个地方。"],flesh:"这些土堆是曾经整齐排列的书架和书籍的腐朽残骸。当邪教徒到达这里时，他们发现了一处占据了这里的褐色霉菌。在不成功地试图烧掉它（导致其体积翻倍）之后，他们决定避开这个地方。褐色霉菌占据了东南角的20尺见方的区域。",spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个黑暗的地方散发出微弱的气味，带着坟墓的寒意。奇怪的土堆贯穿整个房间，看起来像是种植用的沟渠。"},{id:"scn_41b",locationId:"loc_3ca",name:"E19. 犬舍",activation:{condition:{type:"always"},priority:0},skeleton:["这扇门是用门闩和插销机制锁住的。","这个炎热的房间散发着硫磺和肉的味道。","四只地狱猎犬在这里筑巢。","如果开门的人不是他们的主人Lyzzie（区域E29），它们就会发动攻击。"],flesh:`这扇门是用门闩和插销机制锁住的。

四只地狱猎犬在这里筑巢。如果开门的人不是他们的主人Lyzzie（区域E29），它们就会发动攻击。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_41b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个炎热的房间散发着硫磺和肉的味道。"},{id:"scn_41f",locationId:"loc_3ca",name:"E22. 展示大厅",activation:{condition:{type:"always"},priority:0},skeleton:["两个永恒火焰守卫（见第七章）在此站岗。","这个形状奇特的房间有两个圆润的角落，使室内空间流畅且令人愉悦。","一个楼梯井从南墙向下消失，一扇门嵌在东墙上。","一个大型石制火盆，其底座设计成背靠背坐着的矮人形状，位于房间中央，散发着热量和光亮。","楼梯通往E30区域。"],flesh:`两个永恒火焰守卫（见第七章）在此站岗。

楼梯通往E30区域。

如果此处爆发战斗，区域E23的居住者会通知伊格纳提娅（区域E24）并加入战斗。伊格纳提娅随后很快加入。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_41f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个形状奇特的房间有两个圆润的角落，使室内空间流畅且令人愉悦。一个楼梯井从南墙向下消失，一扇门嵌在东墙上。一个大型石制火盆，其底座设计成背靠背坐着的矮人形状，位于房间中央，散发着热量和光亮。"},{id:"scn_423",locationId:"loc_3ca",name:"E23. 兵营",activation:{condition:{type:"always"},priority:0},skeleton:["门后不长的通道通向一个长方形的房间，房间里有两组双层床和一张带有两边长凳的折叠桌。","桌子的一端放着一个大桶，桶附近有几个锡镴酒杯。","这个木桶装着淡而酸的葡萄酒。","两个永恒火焰守卫（见第七章）正在桌子旁喝酒和玩牌。","他们会攻击任何没有穿着邪教服装的人，并且会怀疑地询问任何伪装成邪教成员的人。"],flesh:`这个木桶装着淡而酸的葡萄酒。

两个永恒火焰守卫（见第七章）正在桌子旁喝酒和玩牌。他们会攻击任何没有穿着邪教服装的人，并且会怀疑地询问任何伪装成邪教成员的人。

这里的任何战斗都会吸引区域E24的Ignatia的注意。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_423"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"门后不长的通道通向一个长方形的房间，房间里有两组双层床和一张带有两边长凳的折叠桌。桌子的一端放着一个大桶，桶附近有几个锡镴酒杯。"},{id:"scn_427",locationId:"loc_3ca",name:"E24. 伊格纳提亚的居所",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的两个对角各放着一个书架。","它们之间放着一张床。","另一角落中，一对椅子围绕着一个火盆。","地板中间躺着一个拥有战士体格的个体，他的手腕和脚踝被绳子绑着。","Ignatia，一个怒火者（见第七章），住在这里。"],flesh:`Ignatia，一个怒火者（见第七章），住在这里。她领导外面的战士，并担任守卫南部路障（区域E27）的大地精的警卫队长。

除非角色们以某种方式使寺庙高度警戒，否则Ignatia正在审问一个被捉到潜入永恒之焰邪教领土的破碎波涛掠夺者。这个掠夺者，Orgaal，没有武装，还剩下4点生命值。

书架上摆满了书籍，其中一些很有价值，总价值为250金币。一个装满灰烬的瓮放在一个书架上，而在其底部，Ignatia埋藏了170金币、170银币以及每个价值50金币的10个肉红玉髓。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_427"],treasureSlotIds:["trs_427_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的两个对角各放着一个书架。它们之间放着一张床。另一角落中，一对椅子围绕着一个火盆。地板中间躺着一个拥有战士体格的个体，他的手腕和脚踝被绳子绑着。他被殴打过。"},{id:"scn_42c",locationId:"loc_3ca",name:"E25. 恳求者之室",activation:{condition:{type:"always"},priority:0},skeleton:["这个大型房间呈拉长的六边形，东西两边的尖角上各有一扇门。","东边的门被漆成了红色，并绘有一个黑色的、风格化的大锅符号。","还有通往南北的额外出口。","房间内摆放着几个古老的铁砧和铁匠炉，许多睡觉用的简陋床铺散布其间。","这里有八个邪教徒和两个邪教狂信者。"],flesh:`这里有八个邪教徒和两个邪教狂信者。

Lyzzie和她的火童（区域E29）会调查这里的任何骚动。如果合适，Lyzzie使用en=Sending来联系区域E30的奇美拉。奇美拉会尽快移动来帮助Lyzzie。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_42c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个大型房间呈拉长的六边形，东西两边的尖角上各有一扇门。东边的门被漆成了红色，并绘有一个黑色的、风格化的大锅符号。还有通往南北的额外出口。房间内摆放着几个古老的铁砧和铁匠炉，许多睡觉用的简陋床铺散布其间。"},{id:"scn_430",locationId:"loc_3ca",name:"E26. 火神庙",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间在东墙上有一个宽阔的凹室。","一个带有祭坛的高台填满了这个凹室。","高台两侧是两个冒烟的火盆和两个壁挂上的闪烁火把。","丰富的挂毯装饰着墙壁。","高台后面的挂毯上装饰着一个风格化的大锅符号。"],flesh:`如果这是角色们探索的第一个元素神庙，凡尼弗（见第七章）正跪在祭坛前，深思她信仰的更深层含义。火盆是容器，里面装有两只受凡尼弗指挥的火元素。一旦它们的女主人命令它们，它们就出现并发动攻击。

凡尼弗愿意交谈，但只是为了估量角色们。她并不遵守这样的交易。

在战斗中，凡尼弗命令元素生物攻击角色，而她则施放法术。如果战斗看起来对她不利，凡尼弗会逃向井道（区域E14）并进入火节点。

一个秘密门隐藏在南墙东端的挂毯后面。一个搜索墙壁并成功通过一次 DC 15 感知 (察觉) 检定的角色能找到它。门后有一段楼梯通往 E31 区域。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_gar_shatterkeel","npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_430"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间在东墙上有一个宽阔的凹室。一个带有祭坛的高台填满了这个凹室。高台两侧是两个冒烟的火盆和两个壁挂上的闪烁火把。丰富的挂毯装饰着墙壁。高台后面的挂毯上装饰着一个风格化的大锅符号。",dmGuidance:"如果角色们看起来愿意进行对话，她承诺如果他们帮她一个忙，杀死戈尔·碎骨并把他的爪子作为死亡的证明，她就会把她的邪教远远地带离Sumber Hills。"},{id:"scn_435",locationId:"loc_3ca",name:"E27. 障碍物",activation:{condition:{type:"always"},priority:0},skeleton:["这条通道通向一个形状奇特的房间。","一堆散乱的石头形成了一道路障，斜着摆放以防御来自南方的入侵。","六个大地精在此站岗，他们穿着火焰红色的战袍，胸前有元素火焰的标志。","他们对从南方接近的任何人提出挑战，但对于朝那个方向去的人则不太注意。",'来自南方的访客必须做出火教的手语（双手合拢竖起，中间一个尾指向上突出），说出通关密语（"火焰是永恒的！'],flesh:`六个大地精在此站岗，他们穿着火焰红色的战袍，胸前有元素火焰的标志。他们对从南方接近的任何人提出挑战，但对于朝那个方向去的人则不太注意。

来自南方的访客必须做出火教的手语（双手合拢竖起，中间一个尾指向上突出），说出通关密语（"火焰是永恒的！"），或者说服大地精允许通行。否则，大地精会发动攻击。只需稍微说服一下大地精，就能让他们相信入侵者有合法的理由来到这里。这些守卫宁愿将责任推给邪教领袖。

这条隧道连接至嚎叫憎恶神庙中的区域A7。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这条通道通向一个形状奇特的房间。一堆散乱的石头形成了一道路障，斜着摆放以防御来自南方的入侵。",dmGuidance:"如果玩家角色击败了这些大地精，守卫们会在一两个小时内被替换为区域E28的大地精。"},{id:"scn_43b",locationId:"loc_3ca",name:"E28. 兵营",activation:{condition:{type:"always"},priority:0},skeleton:["这个散发着恶臭、形状奇特的房间内有一些睡觉用的简陋床铺。","为Lyzzie（区域E29）服务的大地精居住在这里。","目前有四个大地精和一名大地精长官正在休息。","除非角色看起来像是邪教徒，否则大地精会发动攻击。","大地精队长携带着一瓶治疗药水（治疗药水）和一个包含60银币的小包。"],flesh:`为Lyzzie（区域E29）服务的大地精居住在这里。目前有四个大地精和一名大地精长官正在休息。除非角色看起来像是邪教徒，否则大地精会发动攻击。

大地精队长携带着一瓶治疗药水（治疗药水）和一个包含60银币的小包。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_43b"],treasureSlotIds:["trs_43b_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个散发着恶臭、形状奇特的房间内有一些睡觉用的简陋床铺。"},{id:"scn_43e",locationId:"loc_3ca",name:"E29. 莉齐的住处",activation:{condition:{type:"always"},priority:0},skeleton:["烧焦的痕迹和烧焦的家具散落在这个房间里，东墙上挂着一幅烧焦的挂毯。","四个由岩浆构成的小类人生物在房间里跳跃。","这些跳舞的生物是四个火童。","它们好奇地想知道角色们的身份，并顽皮地试图点燃他们。",'如果受到伤害，这些玛格魔会发出足够响亮的嘶嘶声来警告它们的女主人莱赞德拉 "莱茜" 卡尔德罗斯。'],flesh:`这些跳舞的生物是四个火童。它们好奇地想知道角色们的身份，并顽皮地试图点燃他们。如果受到伤害，这些玛格魔会发出足够响亮的嘶嘶声来警告它们的女主人莱赞德拉 "莱茜" 卡尔德罗斯。莉兹的房间里有几张烧焦的双层床，一张炭化的桌子，但没有任何值钱的物品。

位于区域E28的霍比特人会受到此处战斗声响的吸引。`,spotlightRefs:[],presentNpcIds:["npc_lyzandra_lyzzie_calderos","npc_bastian_thermandar"],availableInfoIds:[],encounterIds:["enc_43e"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"烧焦的痕迹和烧焦的家具散落在这个房间里，东墙上挂着一幅烧焦的挂毯。四个由岩浆构成的小类人生物在房间里跳跃。",dmGuidance:`她是一位人类魔法师，准备了en=Wall of Fire和en=Immolation（参见附录 B）而非en=Ice Storm和en=Cone of Cold。
当角色们首次到达时，莉兹正在烧焦的挂毯后方的小房间里休息。`},{id:"scn_442",locationId:"loc_3ca",name:"E30. 奇美拉巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间有一个高达三十尺的拱形天花板。","宽阔的凹室主宰了东西两面墙壁，在西侧的凹室中闪烁着财宝的光芒。","不愉快的麝香气味与硫磺的气味混合在一起。","地板上布满了破损的斑点、烧焦的痕迹、碎片和深色的污迹。","一只忠于火教的奇美拉在西侧的凹室里休息。"],flesh:`一只忠于火教的奇美拉在西侧的凹室里休息。它从凹室中出来，嘲弄和威胁角色们，来回踱步并咆哮。否则，它会让他们不受干扰地通过它的巢穴。

这条隧道通往黑土神殿的区域B16。

散落在西侧凹室中的——在破碎的骨头和衣物碎片之间——是奇美拉的宝藏，包括517枚铜币，1048枚银币，432枚金币，五颗打磨过的月光石（每颗50金币），一瓶水下呼吸药水（水下呼吸药水），以及一个装满细沙（无踪粉，消失之尘）的微小红色丝绸袋子。`,spotlightRefs:[],presentNpcIds:["npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:["enc_442"],treasureSlotIds:["trs_442_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间有一个高达三十尺的拱形天花板。宽阔的凹室主宰了东西两面墙壁，在西侧的凹室中闪烁着财宝的光芒。不愉快的麝香气味与硫磺的气味混合在一起。地板上布满了破损的斑点、烧焦的痕迹、碎片和深色的污迹。",dmGuidance:"如果角色们攻击它或试图抢夺它的宝藏，它将进行反击。",mapGeometry:{imageRef:"adventure/PotA/052-poa04-09.webp"}},{id:"scn_447",locationId:"loc_3ca",name:"E31. 凡尼弗的密室",activation:{condition:{type:"always"},priority:0},skeleton:["在这里，扔地毯、隐私屏风、沙发和四把舒适的椅子共同营造了一个温馨的空间。","薄纱织物披挂在一张四柱床上，书桌位于房间的东南角。","凡尼弗 在这里度过的时间非常少。","搜查书桌会发现一卷en=Melf's Minute Meteors（梅尔夫的流星雨）和一卷en=Wall of Sand（沙墙术）（见附录 B了解这两个法术的描述）。"],flesh:`凡尼弗 在这里度过的时间非常少。

搜查书桌会发现一卷en=Melf's Minute Meteors（梅尔夫的流星雨）和一卷en=Wall of Sand（沙墙术）（见附录 B了解这两个法术的描述）。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_bastian_thermandar","npc_lyzandra_lyzzie_calderos"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在这里，扔地毯、隐私屏风、沙发和四把舒适的椅子共同营造了一个温馨的空间。薄纱织物披挂在一张四柱床上，书桌位于房间的东南角。"},{id:"scn_44d",locationId:"loc_4b3",name:"元素之怒",activation:{condition:{type:"always"},priority:0},skeleton:["元素先知们感觉到时间所剩无几，于是加倍努力在德萨林谷地扩展邪恶元素的力量。","如果他们无法用毁灭之球征服该地区，先知们会撕裂通往元素位面的裂隙，使无人能抵挡元素的力量。","角色必须承受伤害。","每次角色从眼睛的圣坛撤退或完成探索一个元素节点时，从'倾盆大雨'、'燃烧的山丘'和'受折磨的大地'中运行一个遭遇。","此外，两个新威胁在该地区确立了自己的地位。"],flesh:`元素先知们感觉到时间所剩无几，于是加倍努力在德萨林谷地扩展邪恶元素的力量。如果他们无法用毁灭之球征服该地区，先知们会撕裂通往元素位面的裂隙，使无人能抵挡元素的力量。

角色必须承受伤害。每次角色从眼睛的圣坛撤退或完成探索一个元素节点时，从'倾盆大雨'、'燃烧的山丘'和'受折磨的大地'中运行一个遭遇。

此外，两个新威胁在该地区确立了自己的地位。惩罚者哈亚昂威胁着贝利亚德，而西桥屈服于绝望顾问。冒险者们可能会听闻这些情况，或者队伍可能会偶然遇到它们。

如果水元素节点仍然活跃，当冒险者在苏姆贝尔山丘旅行时，一场暴雨就会开始。这场暴雨持续12小时，产生大量的雨水、风和闪电。暴雨主要效果如下：

冒险者们除非在室内，否则无法完成长休。

所有陆路旅行时间翻倍。

超过100尺的视野被2。

避免迷路的难度等级提升至15。

您可以通过向角色呈现与风暴相关的意外障碍，来传达德萨林谷的情况正在恶化。

只有在火元素节点仍然活跃时才使用此事件。角色发现自己——也许还有他们关心的定居点——处于三个火元素和五个烟魔蝠的路径上。元素生物会寻找最近的大件可燃物体，而烟雾美菲特则散开并使用他们的灰烬呼吸来引发小型边缘火灾。

冒险者在火焰500尺外时侦查到它。它覆盖了大约200尺宽的正面。在每轮开始时，火焰前进2d6 × 10尺。浓烟使得火焰区域及其前方100尺内的区域，2。一个生物若在一回合内首次进入火焰区域，或在其回合开始时身处其中，将受到1d10火焰伤害。如果该生物不免疫火焰伤害且需要呼吸，它还必须成功通过一次DC 10体质豁免检定，否则将因吸入浓烟而陷入失能状态，直到其下一回合开始。

如果地脉节点仍然活跃，撼动德萨林谷的一次地震几乎就在队伍脚下发生。其效果类似于en=Earthquake法术，但影响范围的半径为1,000英尺。豁免检定DC为15。

当震动结束时，一只拥有184点生命值（挑战等级13）的青年紫虫从地下钻出。由于地震而陷入狂暴状态，它攻击附近其他生物。它宁愿撤退而不是在战斗中死亡。

看到家园遭受的毁灭无休无止，西桥镇长老中一个怯懦的派系向元素大地势力屈服了。他们希望能免受更多的悲伤和破坏。角色们从塞迪娜·狼爪那里得知了这一情况，她是一个来自翠博尔镇的半精灵斥候，曾造访过西桥镇，发现了这一情况，并匆忙寻找能够提供帮助的人。她如下介绍了这个问题：

塞迪娜很高兴陪伴队伍前往西桥。否则，她将继续她的旅程。

当冒险者到达西桥时，他们的接待取决于他们的到来方式。

公开进入城镇的角色会遇到一位名叫詹顿（Jendon）的憔悴果农（人类平民），他穿着一件带有棕色补丁的斗篷，该补丁的布料与地元素邪教徒穿的长袍相同。詹顿试图说服冒险者离开，并解释说："我们别无选择。现在，只有地元素祭司才能救我们。"

Jendon并不邪恶。他只是没有看到所谓的"英雄"们成功阻止了摧毁该地区的灾难的任何证据。Jendon知道有些人可能会称他为懦夫，但他确信，向元素大地的力量屈服是任何理性之人会做的事情。

Reetha不想与黑土邪教有任何关系，她对邻居们向邪教徒屈服感到绝望。Reetha告诉角色们，大多数镇民只是害怕，邪教徒已经接管了丰收客栈。

冒险者发现邪教已经在行动。

三个戴兜帽的牧师是黑土邪教的初级成员（邪教徒），他们正在享受对大约四十名正在接受灌输的平民的训斥。邪教徒嘲笑任何接近的角色，说：'这些人已经知道了真相。你救不了他们，但我们能。'

西桥的居民们处于恐慌状态。他们不喜欢邪教徒，但认为他们需要邪教的保护来抵御未来的灾难。一些人恳求角色们不要干预，而另一些人则将冒险者的到来视为反抗邪教的理由。如果这里发生战斗，大多数平民会四散逃跑，但有六人会帮助冒险者。这些更勇敢的人警告角色们，所谓的"高级祭司"，Dreyon，就在丰收客栈，并且他有一个山丘巨人为他服务。

德莱昂是占领西桥的邪教徒分队的首领，他是一名黑土祭司。两名黑土守卫、一名名叫洛姆的山丘巨人，以及一伙六名大地精协助他。）该小组已经接管了丰收旅馆。洛姆睡在被他清空了牲畜的马厩里。

哈里文·达拉贡，这位半身人店主，连同他的四名员工（人类平民）仍然留在场内。他们的状况比被恶劣对待的仆人好不了多少，他们拼命地试图满足山巨人的食欲。哈里文和他的员工希望那些恶棍死去。

面对时，德雷昂命令平民驱逐角色。如果这失败了，他接着试图将西桥人作为活体盾牌使用。

这次遭遇仅在嚎叫仇恨邪教和破碎波涛邪教的先知被击败后才会发生。在闹鬼要塞附近游荡的掠夺者小队、偏远的前哨站和巢穴，以及派对攻击的生还者都四散无主，没有方向。新的领袖出现，聚集分散的邪教徒，重建被击败的神庙；其中一位领袖是惩罚者Haayon。

海昂是一位云巨人，他希望成为下一个风之邪教的领袖。他响应邪恶元素的召唤来得晚了，最近到达德萨林谷时发现邪教已经瓦解。这位云巨人相信风之邪教徒之所以被击败是因为他们软弱，所以他对幸存的邪教徒实施了残酷的自我否定和赎罪制度。

如果给予时间，Haayon很可能重建嚎叫仇恨邪教。他对地下发生的事情知之甚少，尽管他正在广泛询问他遇到的每一个邪教徒。在他的傲慢中，他将逃亡邪教徒的存在视为需要新领导的证据。

通过城镇中的谣言或派系成员的信息，角色们听到了以下故事。对于描述，请选择一个角色们不在且未被摧毁的定居点。

这些难民是逃离了闹鬼要塞和元素神庙失败的邪教徒，但后来被海昂围捕。海昂认为值得的人被欢迎进入他的营地。不配的人被标记上牌子并被送走。只有被拒绝的邪教徒知道海昂的营地在哪里。

巨人的团队聚集在俯瞰Jundar's Pass的山丘上的一处废墟，从Beliard往东北方向的道路通向那里。当冒险者找到营地时，请阅读以下文本：

五名碎浪掠夺者和一名穿着气球背包的啸怨祭司在外营巡逻。（关于邪教徒的属性和气球背包的规则，见第七章。）被绑在柱子上的角色是五名空气和水之邪教徒。每人都只剩下1点生命值，并戴着一块木牌，上面写着："我受到了惩罚。"

海昂这位云巨人，两位羽风骑士（见第七章），以及六位忠诚的邪教徒聚集在帐篷内。帐篷后面有两只骏鹰，它们是骑士们的坐骑。巨人和他的手下能听到营地外围发生的任何战斗，但在第四回合他们的回合到来之前不会加入战斗。

如果他们询问受惩罚的邪教徒，这位巨人通过说他们是弱者来为他们受到的羞辱辩护。如果他们能作为对其他人的警告，那就更好了。

Haayon是一个耐心且具有洞察力的倾听者。他致力于强迫任何新来者加入他的团队。这些新成员必须接受他的审判。缺乏同意证明需要惩罚。'然后他会发出攻击信号。

哈扬的凉亭内有两个大木箱，装满了他从审判失败者那里没收的贵重物品。箱子里有260枚金币、一个装有六颗黄水晶（每颗价值60金币）的袋子，以及另一个装有两瓶飞行药水的袋子。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_pota_wrath_burning_hills","enc_pota_wrath_tortured_earth","enc_pota_wrath_harvest_inn","enc_pota_wrath_haayon_outer","enc_pota_wrath_haayon_inner"],treasureSlotIds:["trs_44d_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[112],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`空气中弥漫着烟雾的味道。顺风方向，山坡上冒出滚滚浓烟。草地以惊人的速度着火，火势迅速向你袭来。火焰构成的巨大生物在地面上疾驰，而小身影在烟雾中穿梭。

"西桥因为地震而严重受损。我那时正好在那边，发现镇上的一半人聚集在丰收客栈前。他们大多数人都在听一个穿着石甲的牧师布道。他宣讲着毁灭即将来临，只有被选中的人才能幸免，而他们在听他讲！"她摇了摇头。"当我试图发言时，牧师告诉镇民抓住我，但我设法逃脱了。我知道我必须找到能对抗这些疯子的人，所以我来了。"

西桥的大部分地区已成为废墟。少数人在外面，但他们保持距离。更多的几十个镇民聚集在一片空地上。他们每个人都在斗篷或束腰外衣上佩戴着棕色补丁，站在那里听着三个戴着兜帽的祭司引导他们向'黑土'进行奇怪的祈祷。

难民们从镇北的山丘上陆续下来。一些人穿着空气邪教徒的白色长袍和黑色羽毛兜帽，而其他人则穿着水邪教徒的绿色服装。每个人的脖子上都挂着一个牌子，上面写着"我受惩罚了。"

一条小径通向环绕山顶的一堵破败石墙。墙下有十几个帐篷搭建在避风处，还有一个亭子。在营地的一侧，五个耷拉着的人被绑在木柱上，每个俘虏脖子上都挂着一个牌子。穿着皮裤的沉默身影在站岗。`,dmGuidance:`如果角色们试图悄悄进入城镇而不被发现，他们很快就会遇到一个名叫Reetha的弓匠（一个人类平民）。
（有关邪教徒的统计数据，请参见第七章。
如果角色们以和平的方式且带着合理的故事接近，海昂愿意倾听他们。
如果冒险者拒绝，Haayon会说，'审判不需要同意。`},{id:"scn_461",locationId:"loc_4b3",name:"对抗先知",activation:{condition:{type:"always"},priority:0},skeleton:["你可以选择一位先知重新定位到眼睛神殿。","那个恶棍可以在区域F21找到，正在恳求远古元素之眼的帮助。","其他两位先知重新定位到他们的元素节点，并开始召唤各自邪恶元素的王子。","冒险者在节点中打断了他们遇到的第一位先知。","第二位先知在角色们到达时成功召唤了他的或她的赞助人。"],flesh:"你可以选择一位先知重新定位到眼睛神殿。那个恶棍可以在区域F21找到，正在恳求远古元素之眼的帮助。其他两位先知重新定位到他们的元素节点，并开始召唤各自邪恶元素的王子。冒险者在节点中打断了他们遇到的第一位先知。第二位先知在角色们到达时成功召唤了他的或她的赞助人。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:["info_pota_prophet_retreat"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[115],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:"在角色们击败一位先知后，剩下的三位先知接收到幻象，鼓励他们撤退到Tyar-Besil下方的洞穴中。",offerableQuestIds:["qst_main_pota"]},{id:"scn_462",locationId:"loc_4b3",name:"拯救代表",activation:{condition:{type:"always"},priority:0},skeleton:["一些来自米拉巴的代表及其财物仍有待发现：","Deseyna Norvael位于嚎叫洞穴（区域N17）。","伦多斯 位于黑晶矿洞（区域 G15）。","Teresiel位于哭泣巨像（区域W17），同时她身边还有一袋魔法种子。","拯救代表们解开了吸引角色们进入这场冒险的谜团。"],flesh:`一些来自米拉巴的代表及其财物仍有待发现：

Deseyna Norvael位于嚎叫洞穴（区域N17）。

伦多斯 位于黑晶矿洞（区域 G15）。

Teresiel位于哭泣巨像（区域W17），同时她身边还有一袋魔法种子。

拯救代表们解开了吸引角色们进入这场冒险的谜团。`,spotlightRefs:[],presentNpcIds:["npc_rhundorth"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[115],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"}},{id:"scn_463",locationId:"loc_463",name:"费恩之眼",activation:{condition:{type:"always"},priority:0},skeleton:["在Tyar-Besil废墟大厅之下，有一片由天然洞穴和古老建筑组成的迷宫，这些在矮人们建造他们的要塞之前就存在了。","很久以前，一群致力于崇拜邪恶元素的黑暗精灵流亡者在这里建造了这个地下神殿，以供奉古老的元素之眼。","四位先知就是在这里找到了他们的元素武器。","眼睛神殿是邪教共同的圣地。","在这里，空气、大地、火焰和水之间的敌意被搁置，一种谨慎的休战盛行。"],flesh:`在Tyar-Besil废墟大厅之下，有一片由天然洞穴和古老建筑组成的迷宫，这些在矮人们建造他们的要塞之前就存在了。很久以前，一群致力于崇拜邪恶元素的黑暗精灵流亡者在这里建造了这个地下神殿，以供奉古老的元素之眼。四位先知就是在这里找到了他们的元素武器。

眼睛神殿是邪教共同的圣地。在这里，空气、大地、火焰和水之间的敌意被搁置，一种谨慎的休战盛行。眼睛邪恶且深不可测，据先知们相信，它监视着邪教徒并审判他们。如果不是因为相信眼睛希望他们合作，这些邪教将会不断地战斗。

Tyar-Besil废墟中的每个神庙复合体都提供了通往圣所的入口。在圣所下方，有四个元素节点，邪教徒们从这些节点汲取力量。前往元素节点的邪教徒必须通过圣所。每个邪教控制着对其元素节点的访问，但任何神庙或元素节点都可以从圣所进入。

神殿主要由洞穴组成，其中一些通过魔法操纵岩石进行了改进。东北部包括由Besilmer的矮人建造的房间，因此它类似于他们城市的石工。该建筑群具有以下特点。任何例外情况将在适用区域中注明。

在通道中，墙壁不均匀地倾斜并在离地面大约15尺的高处相遇。房间的天花板在墙壁附近大约离地面10尺，但在中间可以高达30尺。

黑色的雾气，触感寒冷且油腻，将圣所的区域隔离开来。它们阻挡了视线并使声音变得模糊。物体可以无阻碍地穿过，但生物穿过时会感受到心灵抵抗和恶心。只有那些致力于邪恶元素的生物才不会被这些感觉所困扰。

门由平衡在中心枢轴上的石板制成。打开一扇门会形成两个约3英尺宽的开口。原有的锁已无法使用，但邪教徒用搭扣和销钉机制固定了一些门。以这种方式关闭的门可以通过一次成功的 DC 15力量检定来强行打开。

怪异的磷光地衣——该区域奇异魔法特性的副作用——提供了2。地衣在大型房间的上部区域更为密集，在通道中则几乎不可见。

在古老元素之眼神庙（区域F21）击败先知会导致剩下的两位元素先知接收到被击败先知最后时刻的幻象，以及他们尚未尝试的召唤仪式的最后咒语。每位幸存的先知撤退到各自对应的元素节点，并开始准备召唤四位邪恶元素王子之一。

任何在圣所中的怪物会一直待在那里，直到角色们击败它们。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:["info_pota_prophet_retreat","info_pota_elemental_weapons"],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[115],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},offerableQuestIds:["qst_main_pota"]},{id:"scn_46b",locationId:"loc_463",name:"F1. 蠕虫之梯",activation:{condition:{type:"always"},priority:0},skeleton:["一条巨大蠕虫的骨架与这个长隧道的两侧融为一体，消失在离地面五十尺高的几乎垂直的隧道中。","木制台阶被绑在骨头上，形成了一个临时的楼梯。","几个奇怪的背包堆放在楼梯底部的地面上。","垂直隧道通向嚎啸神庙的区域A20，高度近150尺。","台阶在50尺后终止，需要沿拱肋进行一次简单攀爬。"],flesh:`垂直隧道通向嚎啸神庙的区域A20，高度近150尺。台阶在50尺后终止，需要沿拱肋进行一次简单攀爬。

这些奇怪的背包是五个气球背包（见第七章），是邪教徒留在这里的。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_46b_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[115],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一条巨大蠕虫的骨架与这个长隧道的两侧融为一体，消失在离地面五十尺高的几乎垂直的隧道中。木制台阶被绑在骨头上，形成了一个临时的楼梯。几个奇怪的背包堆放在楼梯底部的地面上。"},{id:"scn_46e",locationId:"loc_463",name:"F2. 嚎叫坑",activation:{condition:{type:"always"},priority:0},skeleton:["风在攀爬这个黑暗的通道时发出呼啸声。","在80尺深处，这个坑逐渐收窄成一条隧道（嚎哭洞穴的区域N1，本章稍后会进行描述）。","混乱的气流在竖井中上下翻腾，但强度太低不足以造成实际危险。"],flesh:"在80尺深处，这个坑逐渐收窄成一条隧道（嚎哭洞穴的区域N1，本章稍后会进行描述）。混乱的气流在竖井中上下翻腾，但强度太低不足以造成实际危险。攀爬粗糙的坑壁需要通过DC 10力量（运动）检定。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[115],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"风在攀爬这个黑暗的通道时发出呼啸声。"},{id:"scn_470",locationId:"loc_463",name:"F3. 风之监狱",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴中央的石制基座上放着一个直径约八英寸的玻璃球体。","球体似乎包含着旋转的烟雾。","破旧的盔甲、损坏的武器和破烂的衣物散落在房间周围，但球体十尺范围内的地板上没有这样的碎片。","地上的一些武器似乎仍然可以使用，尽管所有武器都严重磨损。","旋风形成时，球体消失。"],flesh:`如果球体被扰乱，其10英尺范围内的所有生物必须成功通过一次DC 20力量豁免检定，否则将被卷入旋风并悬浮在20英尺高的空中。旋风形成时，球体消失。

被旋风卷起的生物处于束缚状态，并被风中飞散的碎屑击打。在每个回合开始时，被旋风束缚的生物会受到1d10钝击伤害。旋风中的生物可以使用其动作尝试进行一次DC 20力量检定。如果成功，该生物将解除束缚状态，掉落20英尺到地板上，并逃离旋风。旋风外的生物可以尝试进行类似的检定，以将另一生物从旋风中拉出，假设它有能力触及到空中20英尺的目标。旋风持续1分钟，然后崩塌，释放被困在其中的生物。

当旋风肆虐时，四把凌空剑从洞穴周围散落的碎片中活化。这些飞行剑攻击旋风外的生物。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:["enc_470"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴中央的石制基座上放着一个直径约八英寸的玻璃球体。球体似乎包含着旋转的烟雾。破旧的盔甲、损坏的武器和破烂的衣物散落在房间周围，但球体十尺范围内的地板上没有这样的碎片。地上的一些武器似乎仍然可以使用，尽管所有武器都严重磨损。"},{id:"scn_472",locationId:"loc_463",name:"F4. 鸟妖巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["角色们在进入这个房间之前就发现了这里的光亮。","一支闪烁着魔法光芒的青铜火炬躺在一个赤裸上身、手持蟹壳形状盾牌和一把断掉的鲨鱼牙齿剑的男人尸体旁边。","其他几具尸体散落在地板上。","有些已经被剥到只剩下骨头，他们的衣物和盔甲被丢弃在附近，而其他尸体几乎没有被触碰。","墙壁不平整，四周有小壁架和裂缝。"],flesh:`角色们在进入这个房间之前就发现了这里的光亮。

三只鸟妖在最高的岩架上筑巢。这些邪恶的生物为嚎叫仇恨邪教守护洞穴。这些尸体是鸟妖诱使他们走向毁灭的人。当鸟妖发现入侵者时，它们开始唱歌。

那些被海妖之歌影响的人会被迫攀爬。巢穴位于地面以上80英尺处。攀爬的前40英尺需要进行一个DC 10力量（运动）检定，但在此之后，DC变为15。

地板上的尸体包括一个水邪教徒（带有蟹壳盾牌和断剑的人物），两个蜥蜴人，一个食人魔，一个穿着苏恩牧师长袍的男性半身人，以及一个穿着破旧板甲的女性半精灵战士。

鹰身女妖的巢穴中囤积了战利品，包括560枚银币、220枚金币、一个金手镯（价值50金币）、一个银水罐（价值10金币）、一对骷髅造型的银耳环（每只价值10金币），以及一瓶强效治疗药水。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:["enc_472"],treasureSlotIds:["trs_472_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一支闪烁着魔法光芒的青铜火炬躺在一个赤裸上身、手持蟹壳形状盾牌和一把断掉的鲨鱼牙齿剑的男人尸体旁边。其他几具尸体散落在地板上。有些已经被剥到只剩下骨头，他们的衣物和盔甲被丢弃在附近，而其他尸体几乎没有被触碰。
墙壁不平整，四周有小壁架和裂缝。天花板大约有一百尺高。`},{id:"scn_477",locationId:"loc_463",name:"F5. 锈蚀怪物坑",activation:{condition:{type:"always"},priority:0},skeleton:["一层低矮、稀薄的雾气紧贴着这个洞穴的地面，墙壁上闪烁着湿润的光泽。","几套粗糙的铜镣铐固定在墙上，里面锁着三个憔悴的人类俘虏。","这些俘虏处于昏迷状态，尽管他们还在呻吟并缓慢地扭动。","一股稳定的微风向西边的通道吹去，而从东边传来远处流水的声音。","这片雾气是自然形成的，由于潮湿的空气从区域F6被向西吸入，穿过区域F3，并经过洞窟中凉爽的岩石表面所导致。"],flesh:`这片雾气是自然形成的，由于潮湿的空气从区域F6被向西吸入，穿过区域F3，并经过洞窟中凉爽的岩石表面所导致。雾气掩盖了洞穴北端的一个坑洞。

一个角色在搜索地面时，若成功通过 DC 10 感知（察觉）检定，便会注意到这个陷坑。

一个未察觉此坑陷的角色会掉入其中。该坑陷深10尺，里面有一只从区域F9被驱赶出来后误入此洞穴的锈蚀怪。这只锈蚀怪被迷雾2，并对掉入坑陷的生物发动突袭攻击，如果其目标处于倒地状态，则它在攻击检定上获得优势。

三名俘虏被链在墙上。其中两人是火神教信徒，而第三人是在几天前被碎浪河盗俘虏的河船船员。手铐由易于拆卸的开口销固定，但俘虏们无法够到它们。手铐也可以通过成功的 DC 20 力量检定来打破。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:["enc_477"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一层低矮、稀薄的雾气紧贴着这个洞穴的地面，墙壁上闪烁着湿润的光泽。几套粗糙的铜镣铐固定在墙上，里面锁着三个憔悴的人类俘虏。这些俘虏处于昏迷状态，尽管他们还在呻吟并缓慢地扭动。
一股稳定的微风向西边的通道吹去，而从东边传来远处流水的声音。`},{id:"scn_47c",locationId:"loc_463",name:"F6. 湍急溪流",activation:{condition:{type:"always"},priority:0},skeleton:["一道瀑布从这个大洞穴的墙壁中涌出，填满了一个旋转的水池，然后通过向北的通道流去。","一条蜿蜒的小径沿着急流而行。","除了溪流的通道外，还有石阶通向北方的矮人石工通道，以及向西北和西南的洞穴口。","这个洞穴是粉碎波浪教派在神殿中的核心区域。","两只水诡潜伏在池中，为教派守卫这片区域。"],flesh:`这个洞穴是粉碎波浪教派在神殿中的核心区域。两只水诡潜伏在池中，为教派守卫这片区域。它们会攻击任何接近水面但未能做出水教派手势的人。水池深20英尺。由于漩涡的存在，在池中游泳需要进行DC 10力量（运动）检定。任何未能通过检定的生物都会被卷入水流中。

溪流深 4 英尺，冰冷且湍急。任何没有游泳速度的生物在回合中第一次进入溪流或在那里开始回合，必须成功通过一次 DC 10 力量豁免，否则会被冲向下游 40 英尺。逆流游泳需要成功通过一次 DC 10 力量（运动）检定。

楼梯通向粉碎之浪神庙的区域C28（位于第四章）。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:["enc_47c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一道瀑布从这个大洞穴的墙壁中涌出，填满了一个旋转的水池，然后通过向北的通道流去。一条蜿蜒的小径沿着急流而行。除了溪流的通道外，还有石阶通向北方的矮人石工通道，以及向西北和西南的洞穴口。"},{id:"scn_480",locationId:"loc_463",name:"F7. 黑颚王座",activation:{condition:{type:"always"},priority:0},skeleton:["一个由数十个人形骷髅头环绕的大石凳靠在这个潮湿洞穴的西北墙边。","在房间中央，炭火在火坑中燃烧，而简陋的由苔藓和泥土构成的巢穴散布在各处。","一位名叫德雷克萨的蜥蜴之王领导着黑颚部落，这是一群致力于粉碎波潮邪教的蜥蜴人。","一位名叫斯凯什的蜥蜴人萨满为德雷克萨提供建议，此外还有八名蜥蜴人战士在这个区域筑巢。","黑颚部落装备着晨星、盾牌和标枪，是卑鄙的野蛮人，他们折磨、杀害并吃掉他们的敌人。"],flesh:`一位名叫德雷克萨的蜥蜴之王领导着黑颚部落，这是一群致力于粉碎波潮邪教的蜥蜴人。一位名叫斯凯什的蜥蜴人萨满为德雷克萨提供建议，此外还有八名蜥蜴人战士在这个区域筑巢。

黑颚部落装备着晨星、盾牌和标枪，是卑鄙的野蛮人，他们折磨、杀害并吃掉他们的敌人。

尽管这里的蜥蜴人是邪恶且好战的，但德雷沙认为他应该成为粉碎之潮的领导者之一。他对此职位未被授予他而感到怨恨。那些看起来有可能推翻戈尔·碎骨的人，或者有证据证明他们已经这样做的人，或许能够说服德雷沙帮助他们。德雷沙曾目睹过失败的政变，因此他只会在确定自己能够最终胜出的情况下才站在角色们一边。

向东的隧道高10尺，宽仅2尺。中等体型的角色必须挤压才能通过。

Drexa通过黑颚部落参与地表的各种突袭积累了一小笔财宝。他将部落的财宝视为自己的。两个木制箱子里装有2300铜币，1250银币和290金币。此外，Drexa还戴着一条重金链，价值200金币。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_zegdar"],availableInfoIds:[],encounterIds:["enc_480"],treasureSlotIds:["trs_480_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个由数十个人形骷髅头环绕的大石凳靠在这个潮湿洞穴的西北墙边。在房间中央，炭火在火坑中燃烧，而简陋的由苔藓和泥土构成的巢穴散布在各处。"},{id:"scn_486",locationId:"loc_463",name:"F8. 深渊",activation:{condition:{type:"always"},priority:0},skeleton:["这里的瀑布声很远就能听到。","瀑布的轰鸣声充满了这个洞穴。","一条溪流从南边的通道流过来，然后倾泻进一个四十尺宽的坑洞边缘。","一组滑腻的石阶向北下降入充满水雾的碗形容器中，而西边的通道则有向上的台阶。","被瀑布冲下的生物会落入一个充满水的盆地（本章稍后将描述的区域P1），且不会受到伤害。"],flesh:`这里的瀑布声很远就能听到。

被瀑布冲下的生物会落入一个充满水的盆地（本章稍后将描述的区域P1），且不会受到伤害。当它在盆地中开始其回合时，该生物必须成功通过一次DC 15力量豁免检定，否则将被冲入水下10英尺处并陷入束缚状态。该生物可以使用其动作进行一次DC 15力量（运动）检定，若成功则解除束缚状态。

紧贴坑洞边缘的楼梯虽然滑，但提供了一条更安全的通往P1区域的路线。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"瀑布的轰鸣声充满了这个洞穴。一条溪流从南边的通道流过来，然后倾泻进一个四十尺宽的坑洞边缘。一组滑腻的石阶向北下降入充满水雾的碗形容器中，而西边的通道则有向上的台阶。",mapGeometry:{imageRef:"adventure/PotA/056-poa05-03.webp"}},{id:"scn_488",locationId:"loc_463",name:"F9. 真菌沼泽",activation:{condition:{type:"always"},priority:0},skeleton:["一片奇异的真菌生长覆盖了这个大型洞穴。","巨大的蘑菇和喷壶菌站在浅水池中或沿着墙壁的壁架上。","那些墙壁被巨大的层状真菌覆盖。","水不断地从上方滴下。","元素土和元素水的影响在这个洞穴中相遇，产生了一个泥泞的沼泽，里面长满了巨大的真菌。"],flesh:`元素土和元素水的影响在这个洞穴中相遇，产生了一个泥泞的沼泽，里面长满了巨大的真菌。大多数真菌是无害的，有些甚至可以食用。然而，在小径交汇处聚集了三只紫腐菌。

一只触须怪潜伏在房间的上层，寻找可能可以单独袭击的孤独旅行者或落单者。这个生物会悄悄地飘下来，袭击那些正忙于其他事情的队伍的最后一名成员。

由于危险的真菌经常潜伏在步道附近，穿过这个房间的神殿居民已经找到了另一种绕行的方式。附着在墙壁上的层状真菌出奇地坚固，提供了一条3尺宽的小径，环绕着房间东侧。任何具有被动感知（察觉）得分15或更高的角色都能发现壁架小径，探索会自动揭示它。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:["enc_488"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一片奇异的真菌生长覆盖了这个大型洞穴。巨大的蘑菇和喷壶菌站在浅水池中或沿着墙壁的壁架上。那些墙壁被巨大的层状真菌覆盖。水不断地从上方滴下。"},{id:"scn_48c",locationId:"loc_463",name:"F10. 敌人破坏者之墓",activation:{condition:{type:"always"},priority:0},skeleton:["一个石制的石棺安放在这个房间南半部的基座上。","一个磨损的浮雕环绕着这座纪念碑，在地面上方大约四尺处，但它已经严重损坏，很难辨认出雕刻代表什么。","这个地穴标志着古代Tyar-Besil的一位矮人英雄的安息之地，他对抗从幽暗地域入侵的怪物进行了一场伟大的战斗。","仔细检查可以发现墙壁上的雕刻描绘了一个矮人屠杀牛头人和幽邃盲族。",'Hendrel Foebreaker的名字用迪泰克文刻在石棺的盖子上，后面跟着矮人语的短语，"低下头，记住勇气。'],flesh:`这个地穴标志着古代Tyar-Besil的一位矮人英雄的安息之地，他对抗从幽暗地域入侵的怪物进行了一场伟大的战斗。仔细检查可以发现墙壁上的雕刻描绘了一个矮人屠杀牛头人和幽邃盲族。Hendrel Foebreaker的名字用迪泰克文刻在石棺的盖子上，后面跟着矮人语的短语，"低下头，记住勇气。"

这个地穴包含亨德雷尔的遗骨，他被安葬在这里，作为对贝西尔默敌人的警告。他的坟墓也是en=Hallow法术的中心，这个法术的效果延伸到房间的门。任何善良阵营的人形生物，如果注意到坟墓上的雕刻，将获得5级en=Aid法术的效果。一个生物每天只能从这种效果中受益一次。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个石制的石棺安放在这个房间南半部的基座上。一个磨损的浮雕环绕着这座纪念碑，在地面上方大约四尺处，但它已经严重损坏，很难辨认出雕刻代表什么。"},{id:"scn_48e",locationId:"loc_463",name:"F11. 方尖碑的底部",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴是一个垂直的井道。","井道中升起的是一座黑色石制方尖碑，每边长二十尺，一条石制楼梯环绕其周围，向上延伸进入黑暗之中。","楼梯通往黑土圣殿的区域B17（参见第四章）。"],flesh:"楼梯通往黑土圣殿的区域B17（参见第四章）。",spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴是一个垂直的井道。井道中升起的是一座黑色石制方尖碑，每边长二十尺，一条石制楼梯环绕其周围，向上延伸进入黑暗之中。"},{id:"scn_490",locationId:"loc_463",name:"F12. 废弃矿井",activation:{condition:{type:"always"},priority:0},skeleton:["一条天然通道从南边进入这个散落着瓦砾的房间，向北逐渐消失。","石门通向东、西和南方。","生锈的铁轨固定在地板上，一对古老的矿车仍然停在铁轨上。","地板上的灰尘很厚，空气是陈旧的。","Tyar-Besil的矮人们开始在这里挖掘矿道，但面对从幽暗地域涌出的太多威胁时，他们放弃了。"],flesh:`Tyar-Besil的矮人们开始在这里挖掘矿道，但面对从幽暗地域涌出的太多威胁时，他们放弃了。

四个恶灵潜伏在向北的浅隧道中。这些是很久以前死在这里的幽邃盲族的灵魂，它们被渗透在圣所中的邪恶所渗透。它们会攻击任何进入这个房间的生物。邪教徒避开这个区域。

如果任何角色目前正受亨德雷尔·破敌者（区域 F10）的祝福，当最后一个幽灵被击败时，会出现一个身穿金色锁甲的严厉矮人战士的闪耀幻影。带着一丝感激的微笑，灵魂默默指向北侧隧道尽头的一堆碎石，然后消失。在瓦砾下是亨德雷尔的魔法锤，一把矮人飞锤。在亨德雷尔的灵魂显现之前，这把武器无法被发现。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:["enc_490"],treasureSlotIds:["trs_490_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一条天然通道从南边进入这个散落着瓦砾的房间，向北逐渐消失。石门通向东、西和南方。生锈的铁轨固定在地板上，一对古老的矿车仍然停在铁轨上。地板上的灰尘很厚，空气是陈旧的。"},{id:"scn_493",locationId:"loc_463",name:"F13. 黑水晶大厅",activation:{condition:{type:"always"},priority:0},skeleton:["奇异的水晶从这个古老大厅的墙壁和地板上突出，发出紫色的光芒。","在东侧，这些水晶形成了一个明显的门道或大门，门道的另一边地面向下倾斜。","房间南端有两个巨大的床铺和装满补给品的桶。","东侧通道向下通往黑岩晶洞的区域G1（本章稍后详述）。","为保护他们的圣所，土之狂信徒在此驻守了两名山丘巨人。"],flesh:`东侧通道向下通往黑岩晶洞的区域G1（本章稍后详述）。为保护他们的圣所，土之狂信徒在此驻守了两名山丘巨人。每名巨人穿戴环甲（护甲等级 14）。

巨人卡格和莫尔通过玩一种类似井字棋的游戏来消磨时间，使用的是不同颜色的石头。莫尔因为一直在输给卡格而感到沮丧。嘿，小骨头们！想玩吗？'

如果一个角色接受了挑战，通过智力比拼来解决每场比赛的结果。巨人通常每场比赛下注10金币。输掉比赛会让Maul非常愤怒；如果没有任何角色接受挑战，或者角色们对他们的游戏说三道四，巨人也会攻击。

Karg和Maul携带着大袋子。他们共有160金币，22宝石币，三颗红色尖晶石（每颗100金币），一颗精美的紫水晶（150金币），以及一个木乃伊化的人头。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:["enc_493"],treasureSlotIds:["trs_493_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"奇异的水晶从这个古老大厅的墙壁和地板上突出，发出紫色的光芒。在东侧，这些水晶形成了一个明显的门道或大门，门道的另一边地面向下倾斜。房间南端有两个巨大的床铺和装满补给品的桶。",dmGuidance:`当队伍到达时，他大声喊道：'我想和这些小家伙玩！
如果角色们未能平息他的怒火，他就会攻击，这也会引起Karg的攻击。`},{id:"scn_498",locationId:"loc_463",name:"F14. 泽格达尔的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴装饰着数十只被铁钉固定在墙上的烧焦的人类手和爬行动物的爪子。","房间中央的铁制火盆里满是炽热、发光的炭火。","一个由毛皮制成的大型睡垫被安排在南侧。","一个高大的牛头怪坐在垫子上，在一个铁箱里数着硬币，而一个奇怪的独眼生物蜷缩在火盆旁边。","牛头人是泽格达尔，Emberhorn部落的首领。"],flesh:`牛头人是泽格达尔，Emberhorn部落的首领。他有117点生命值，穿着锁子甲（AC 16），智力得分为11，会说Undercommon语言，并受到伊米西的祝福。这个祝福使牛头怪对火焰伤害免疫，以及以下额外的行动选项：

凡尼弗 已指示威克斯，一个谄媚的诺斯怪，作为泽格达尔的顾问。威克斯奉承泽格达尔，以确保他履行职责且不制造麻烦。灰角族的其他成员都厌恶威克斯，但泽格达尔将诺西怪视为其重要性的证明。

灰角牛头人通过砍下他们较小的败敌的手来夺取战利品。为了将胜利献给伊米西，牛头人将手放在炭火上烤制。

泽格达尔的铁箱中包含130枚银币、220枚金币和十颗有瑕疵的血石，每颗价值5金币。`,spotlightRefs:[],presentNpcIds:["npc_zegdar","npc_imix","npc_vanifer"],availableInfoIds:[],encounterIds:["enc_498"],treasureSlotIds:["trs_498_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴装饰着数十只被铁钉固定在墙上的烧焦的人类手和爬行动物的爪子。房间中央的铁制火盆里满是炽热、发光的炭火。一个由毛皮制成的大型睡垫被安排在南侧。一个高大的牛头怪坐在垫子上，在一个铁箱里数着硬币，而一个奇怪的独眼生物蜷缩在火盆旁边。",dmGuidance:"【F14. 泽格达尔的巢穴】牛头人在一个15英尺的锥形范围内呼出一团燃烧的余烬。该区域内的每个生物必须进行一次 DC 14 敏捷豁免，豁免失败则受到21点（6d6）火焰伤害，豁免成功则受到一半伤害。"},{id:"scn_49f",locationId:"loc_463",name:"F15. 炽热咽喉",activation:{condition:{type:"always"},priority:0},skeleton:["一块十尺宽的石板在这个宽阔的垂直井道中心悬浮着。","一座桥状的岩石突出部从井道东侧的宽阔岩架延伸出来，与平台相连。","热蒸汽从下方升起，井道在这个水平以下的部分闪烁着火光。","井道向上继续延伸进入黑暗中。","三条通道从井道延伸出去。"],flesh:`通过大声说出正确的指令词语（需响亮到产生回声）来移动浮空圆盘。指令词"余烬"（ash）使平台下降，"火星"（ember）使其上升。从一个位置移动到另一个位置需要1分钟。竖井上升通往永恒之焰神殿的区域E14，下降通往哭泣巨像（本章稍后描述的火元素节点）的区域W1。

说出命令词或敲击锣鼓可以召唤这个层级的圆盘。任何这样的噪音都会提醒F14、F16和F17区域的生物有人在这里。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一块十尺宽的石板在这个宽阔的垂直井道中心悬浮着。一座桥状的岩石突出部从井道东侧的宽阔岩架延伸出来，与平台相连。热蒸汽从下方升起，井道在这个水平以下的部分闪烁着火光。井道向上继续延伸进入黑暗中。
三条通道从井道延伸出去。一个小铜锣和一把敲击锤位于岩架附近。`},{id:"scn_4a1",locationId:"loc_463",name:"F16. 灰烬角兽巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["一个被烧焦的食人魔骷髅靠在这个洞穴的北墙上，被铁钉和生皮条固定在原地。","一个装满热炭的黑铁火盆放在房间中央。","三个巨大而肮脏的睡袋躺在食人魔骷髅的脚边。",'这个房间里住着三只等待接受"伊米西祝福"（能让它们喷出燃烧余烬云的能力）的余烬角牛头人。',"这个食人魔是几个月前被Emberhorn部落击败的土元素邪教的成员。"],flesh:`这个房间里住着三只等待接受"伊米西祝福"（能让它们喷出燃烧余烬云的能力）的余烬角牛头人。

这个食人魔是几个月前被Emberhorn部落击败的土元素邪教的成员。按照他们的习俗，牛头怪将食人魔的尸体烤熟并挂起来作为战利品。

此处任何大声响都会引起区域F17的牛头人前来调查。一个会去警告位于区域F14的泽格达尔，另一个则会尽快加入战斗。`,spotlightRefs:[],presentNpcIds:["npc_imix","npc_zegdar"],availableInfoIds:[],encounterIds:["enc_4a1"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个被烧焦的食人魔骷髅靠在这个洞穴的北墙上，被铁钉和生皮条固定在原地。一个装满热炭的黑铁火盆放在房间中央。三个巨大而肮脏的睡袋躺在食人魔骷髅的脚边。"},{id:"scn_4a5",locationId:"loc_463",name:"F17. 古代魔法",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的石工与附近自然洞穴的明显不同。","房间是从周围的岩石中粗略凿出来的，但从未经过修整或完成。","地板中央是一个奇怪的符号，形状像重叠的圆圈，用两英寸宽的渠道在石头上刻出。","两名烬角部落的牛头人在此房间内守卫，保卫火元素邪教在神殿中的据点。",'他们拥有燃烧吐息特殊能力（参见区域F14），并已获得"伊米西的祝福"。'],flesh:`两名烬角部落的牛头人在此房间内守卫，保卫火元素邪教在神殿中的据点。他们拥有燃烧吐息特殊能力（参见区域F14），并已获得"伊米西的祝福"。

早在矮人们在神殿上方的洞穴中建立他们的据点之前，这些洞穴曾属于被该地区元素能量吸引而来的卓尔精灵。这个房间是一个召唤室，卓尔精灵使用地板上蚀刻的魔法阵来召唤恶魔。任何成功通过 DC 15 智力（奥秘）检定的角色都能认出这些魔法阵的本质，并发现它们古老且损坏到无法使用的地步。

此处任何巨大噪音都会引起区域F16前来调查。其中一名会去警告位于F14区域的泽格达尔，另外两名会尽快加入战斗。`,spotlightRefs:[],presentNpcIds:["npc_imix","npc_zegdar"],availableInfoIds:[],encounterIds:["enc_4a5"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间的石工与附近自然洞穴的明显不同。房间是从周围的岩石中粗略凿出来的，但从未经过修整或完成。地板中央是一个奇怪的符号，形状像重叠的圆圈，用两英寸宽的渠道在石头上刻出。",mapGeometry:{imageRef:"adventure/PotA/057-poa05-04.webp"}},{id:"scn_4a9",locationId:"loc_463",name:"F18. 黑暗精灵的坟墓",activation:{condition:{type:"always"},priority:0},skeleton:["南边的一池浑浊水面上，火焰在跳舞，照亮了整个房间。","一个由光滑的黑色石头雕刻而成的石棺矗立在北边的天然基座上。","石棺有凹槽装饰、精致的肋条和展示着卑躬屈膝的恶魔的浮雕。","在石棺盖的中心是一个结合了四种元素教派符号的标志——古老元素之眼的符号（参见 第一章）。","教派成员相信这棺材是神圣的，因此没有打扰它。"],flesh:`在石棺盖的中心是一个结合了四种元素教派符号的标志——古老元素之眼的符号（参见 第一章）。教派成员相信这棺材是神圣的，因此没有打扰它。成功通过 DC 15 智力检定的角色可以识别出这石棺是卓尔艺术的典范。石棺内只有灰尘和骨头。

一具 en=Glyph of Warding 保护着石棺。角色可以通过一次成功的 DC 18 感知（察觉）检定发现该徽记。任何尝试打开棺材的举动都会触发该徽记，它会施放 en=Mordenkainen's Sword（近战法术攻击 +10）。这把剑会从触发它的生物开始，攻击石棺30英尺内的任何生物。1分钟后它会消失。

水面上的火焰是由渗入污染水池的天然石油所维持的，水池深5尺。这水不适合饮用。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"南边的一池浑浊水面上，火焰在跳舞，照亮了整个房间。一个由光滑的黑色石头雕刻而成的石棺矗立在北边的天然基座上。石棺有凹槽装饰、精致的肋条和展示着卑躬屈膝的恶魔的浮雕。"},{id:"scn_4ae",locationId:"loc_463",name:"F19. 潜伏之物",activation:{condition:{type:"always"},priority:0},skeleton:["在房间中央是一座雕像，描绘了一个无定形的身体和粗厚的触手，弯腰驼背，就像要进食一样。","一个人类头部大小的紫色水晶代表了一只外星眼睛。","卓尔精灵雕刻了这个房间并竖立了这座偶像以致敬与软泥怪相关的一位黑暗神祇——关纳德。",'这块"水晶"实际上是毫无价值的玻璃。',"这个诅咒类似于 en=Polymorph 法术，但它会将犯罪者变成一只不具有分裂反应的 赭果冻。"],flesh:`卓尔精灵雕刻了这个房间并竖立了这座偶像以致敬与软泥怪相关的一位黑暗神祇——关纳德。角色必须成功进行一次 DC 20 智力（宗教）检定来识别这位神秘的神祇。

这块"水晶"实际上是毫无价值的玻璃。任何移走或摧毁这块石头的生物都必须成功通过一次 DC 15 的感知豁免检定，否则将受到高安多的诅咒。这个诅咒类似于 en=Polymorph 法术，但它会将犯罪者变成一只不具有分裂反应的 赭果冻。一次 en=Greater Restoration 或 en=Remove Curse 法术可以终止这个效果。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[121],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在房间中央是一座雕像，描绘了一个无定形的身体和粗厚的触手，弯腰驼背，就像要进食一样。一个人类头部大小的紫色水晶代表了一只外星眼睛。"},{id:"scn_4b0",locationId:"loc_463",name:"F20. 战斗大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间散发着血和死亡的气息。","最近几次战斗的残骸散落在这个粗糙凿成的房间里。","十几个死去的战士，明显属于土和水的邪教，躺在少数怪物尸体中，比如地精和食人魔。","一些尸体看起来已经在这里好几个月了，而其他一些只有几天的历史。","一个被盔甲包裹、手持连枷的旋风冲进视野。"],flesh:`这个房间曾是元素教派为巩固对神殿的控制权而展开战斗的战场。目前，呼啸狂怒教派占据了这个房间，并由一名气元素侍从守卫（参见第七章）。

当入侵者出现时，风元素士兵会用其连枷指向他们，并以冷冽的声音问道："你们效忠于谁？"风元素士兵根据冒险者们的回答以及他们所携带的装备来判断他们是友是敌。如果不是，风元素士兵将会发起攻击。

这座大厅中的各种人类尸体包括风之教派信徒、土之教派信徒与一对火之教派信徒。虽无钱币或其他贵重物品残留，但角色们可以搜刮到足以制作五套风之教徒伪装、四套土之教徒伪装和一套火之教徒伪装的斗篷、外袍或长袍。`,spotlightRefs:[],presentNpcIds:["npc_zegdar"],availableInfoIds:[],encounterIds:["enc_4b0"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个房间散发着血和死亡的气息。最近几次战斗的残骸散落在这个粗糙凿成的房间里。十几个死去的战士，明显属于土和水的邪教，躺在少数怪物尸体中，比如地精和食人魔。一些尸体看起来已经在这里好几个月了，而其他一些只有几天的历史。一个被盔甲包裹、手持连枷的旋风冲进视野。",dmGuidance:"如果角色们看起来像是空气邪教徒，并且回答说他们效忠于元素空气或远古元素之眼，风元素士兵可能会感到满意。"},{id:"scn_4b3",locationId:"loc_463",name:"F21. 远古元素之眼神庙",activation:{condition:{type:"always"},priority:0},skeleton:["一座顶部覆盖着巨大黑色花岗岩祭坛的石制金字形神塔矗立在这个洞穴的中央。","祭坛脚下躺着一个被捆绑并塞住嘴巴的人物。","新鲜的血迹玷污了祭坛，并沿着金字形神塔的台阶滴落。","在洞穴的四面八方，闪烁的火焰在油腻的水面上起舞。","洞穴墙壁高处的裂缝中呼啸着风声。"],flesh:`这个房间是远古元素之眼的神殿，是邪恶元素背后的黑暗力量。金字形神塔的历史可以追溯到古代，当时叛逆的卓尔精灵崇拜眼睛，这远在Besilmer时代之前。元素先知们来到这里寻求眼睛的幻象和恩惠，尽管它是一个变幻莫测且不愿沟通的力量，很少以任何可识别的方式作出回应。

任何非邪恶生物触碰祭坛或对其发动近战武器攻击时，必须成功通过一个 DC 15 的体质豁免检定，否则会受到 22 (4d10) 点心灵伤害。祭坛的 AC 为 15，拥有 150 点生命值，并且对酸、寒、火、电、毒、心灵和雷鸣伤害免疫，同时不受非魔法武器的钝击、穿刺和挥砍伤害。只要祭坛保持完好，邪恶元素的仆从（包括四元素邪教的成员）在此房间内时无法被 恐慌。

在水池上燃烧的火焰是由水下石油渗漏所维持的。这些水受到了污染，不适合饮用。

当冒险者们首次到达时，四位元素先知中的一位会在这里。伴随先知的是一些下属。从以下选项中选择，不考虑已经被击败的任何先知：

阿莉希·卡罗娜斯。空气先知由犁风者（如果他逃离了呼啸憎恨之殿）、两个飓风和三名嚎叫仇恨的启蒙者陪同。

戈尔·碎骨。他骑在一只巨鳄上，并由四名碎浪掠夺者陪同。

马洛斯·恩雷尔。这位大地先知由两名石像鬼和两名戴着石像鬼面具的圣石僧侣陪同。

凡尼弗。火之先知拥有一个燃焰之颅和两个剃刀爆炸听从她的指挥。

先知知道角色们是谁。他或她也知道队伍所面对并击败的其他先知，因为在狂热的幻象中看到了这些事件。先知将任何此类失败视为淘汰弱者，并向角色们保证这里没有这样的弱点。

如果这符合先知的性格（参见第七章），他或她会试图招募这些角色，说道："你们已经展现了机智与勇气。我们需要你们。向我宣誓效忠，我将向你们展示你们从未梦想过的力量。"

先知及其随从会转移到一个战术上安全的位置。然后，为了证明他们的诚意，新皈依者必须献上祭品。这些恶棍绑架了一个名叫达雷思的平民，此人几周前从沃姆福德被掳走，作为祭品。达雷思已经被绑住、塞住嘴，躺在祭坛脚下。

达雷思不知道圣坛的布局，但他见过除了角色在神庙层击败的那一个之外的每一位先知。他能描述他们的外貌和举止，并且他能识别每个人携带的元素武器。此外，他知道这些武器很重要，并且以某种方式与被称为"节点"的元素力量之地相连。

如果被释放，达雷斯足够勇敢，愿意陪伴角色们，如果他们愿意的话，同时他也足够绝望，会独自前往沃姆福德，如果角色们给他指明回到地面的方向。

每位元素先知都携带着一件元素武器（见第七章）。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_windharrow","npc_gar_shatterkeel","npc_marlos_urnrayle","npc_vanifer","npc_zegdar"],availableInfoIds:[],encounterIds:["enc_pota_f21_air_prophet","enc_pota_f21_water_prophet","enc_pota_f21_earth_prophet","enc_pota_f21_fire_prophet"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定；overlay覆写:locationId"},readAloud:"一座顶部覆盖着巨大黑色花岗岩祭坛的石制金字形神塔矗立在这个洞穴的中央。祭坛脚下躺着一个被捆绑并塞住嘴巴的人物。新鲜的血迹玷污了祭坛，并沿着金字形神塔的台阶滴落。在洞穴的四面八方，闪烁的火焰在油腻的水面上起舞。洞穴墙壁高处的裂缝中呼啸着风声。",dmGuidance:"如果角色们接受了先知的提议，他或她会要求进行一次诚意的考验。",offerableQuestIds:["qst_main_pota"]},{id:"scn_4bc",locationId:"loc_4bc",name:"嚎叫洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["这些洞穴曾属于深入探索贝西尔默废墟的地底侏儒，当风之邪教到来时，他们已经开始了探险。","当风之邪教占领了Tyar-Besil下方的洞穴时，侏儒组织了抵抗。","他们的尝试是徒劳的。","当阿莉希·卡罗娜斯意识到毁灭之球的力量后，她在侏儒上测试了一个。","由此产生的气旋摧毁了前哨站，其混乱的余波赋予了洞穴元素力量，直到今天这些力量还在洞穴中吹拂。"],flesh:`这些洞穴曾属于深入探索贝西尔默废墟的地底侏儒，当风之邪教到来时，他们已经开始了探险。当风之邪教占领了Tyar-Besil下方的洞穴时，侏儒组织了抵抗。他们的尝试是徒劳的。当阿莉希·卡罗娜斯意识到毁灭之球的力量后，她在侏儒上测试了一个。由此产生的气旋摧毁了前哨站，其混乱的余波赋予了洞穴元素力量，直到今天这些力量还在洞穴中吹拂。

这个区域有以下特征。任何例外情况会在适用的区域中注明。

大多数洞穴的天花板高度为30尺，而通道的天花板高度从10到15尺不等。

嚎叫洞穴没有光亮。

风不断地穿过嚎叫洞穴，发出低语或嚎叫。

这些洞穴是空的。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:"这个洞穴的地面不平。风在此处的流石形态间低语。",offerableQuestIds:["qst_main_pota"]},{id:"scn_4c3",locationId:"loc_4bc",name:"N1. 入口",activation:{condition:{type:"always"},priority:0},skeleton:["一股地下风向北吹，沿着隧道，带着来自南方的遥远尖叫声。","隧道的北端是一处逐渐变宽的竖井底部，通往眼之魔殿的区域F2。","粗糙的墙壁可供安全攀爬。"],flesh:"隧道的北端是一处逐渐变宽的竖井底部，通往眼之魔殿的区域F2。粗糙的墙壁可供安全攀爬。",spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一股地下风向北吹，沿着隧道，带着来自南方的遥远尖叫声。"},{id:"scn_4c5",locationId:"loc_4bc",name:"N2. 致命水池",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴的温度骤降，以一个冰冻的水池为主导。","冰晶在墙壁、地板和其他岩石构造上闪烁。","雪花在强风中旋转。","冰层冻结坚固且非常滑。","）角色每在这里停留一分钟，温度剧烈变化的机会累积增加10%。"],flesh:`冰层冻结坚固且非常滑。）角色每在这里停留一分钟，温度剧烈变化的机会累积增加10%。

当温度发生变化时，请阅读以下内容：

当高温开始时，冰层在该轮开始时破裂，并在3轮后无法承受任何重量。湖泊深12尺，并转变为沸腾水体。一个生物在其回合内首次进入水中或在其回合开始时身处其中，将受到7（2d6）点火焰伤害。此外，蒸汽使洞穴2。

这些尸体是生活在N5区域的侏儒被煮熟后的残骸。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[123],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个洞穴的温度骤降，以一个冰冻的水池为主导。冰晶在墙壁、地板和其他岩石构造上闪烁。雪花在强风中旋转。

突然，空气变得非常温暖。水从上方倾泻而下。冰面裂开，浓密的蒸汽波从水池中升起。在破碎的冰中漂浮着，肿胀的小人形生物的尸体用他们那睁得大大的、无生命的眼睛凝视着上方。`,dmGuidance:`当角色首次到达时，这个洞穴的温度为华氏零下30度。
（有关极端寒冷和光滑冰面的规则，请参见冒险环境章节，选自城主指南。
如城主指南的第五章所述，向极度高温的移转仅在一瞬间完成。`},{id:"scn_4ca",locationId:"loc_4bc",name:"N3. 遗忘之井",activation:{condition:{type:"always"},priority:0},skeleton:["这个多风的洞穴的地面和墙壁上溅满了血迹，地面上散落着被肢解的人形生物尸体。","一个风旋在残骸中移动。","天花板上的一个竖井向上延伸，超出了你的视线范围。","这个竖井通向嚎叫憎恨神殿的区域A18。","一只气元素被束缚在这个区域，如同红色旋风一般在竖井下循环旋转。"],flesh:`这个竖井通向嚎叫憎恨神殿的区域A18。一只气元素被束缚在这个区域，如同红色旋风一般在竖井下循环旋转。它所经之处，墙壁上都会溅满鲜血、骨头和内脏。

这些尸体是作为对延西冰的祭品，由风之邪教徒扔下竖井的。元素空气的象征被刻在每个受害者的额头上。角色们可以找到一个完整的头部，并在血迹中看到这个符号。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:["enc_4ca"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个多风的洞穴的地面和墙壁上溅满了血迹，地面上散落着被肢解的人形生物尸体。一个风旋在残骸中移动。天花板上的一个竖井向上延伸，超出了你的视线范围。"},{id:"scn_4cc",locationId:"loc_4bc",name:"N4. 风暴裂谷",activation:{condition:{type:"always"},priority:0},skeleton:["一道裂谷将地下通道分割开来，通道在对面十尺远的地方继续延伸。","雾气遮掩了裂谷的深度。","该深坑有50尺深，其下部的40尺区域因雾气而处于2状态。","深坑底部是钝石和洞穴地面。","裂谷在随机时间充满风、雷或闪电。"],flesh:`该深坑有50尺深，其下部的40尺区域因雾气而处于2状态。深坑底部是钝石和洞穴地面。墙壁粗糙，可以通过一次成功的DC 10力量（运动）检定进行攀爬。

裂谷在随机时间充满风、雷或闪电。如果一个或多个生物在裂谷中，让它们进行先攻骰。在先攻计数10时，掷一个d20骰子，并参考下表以确定裂谷中是否发生任何效果：

强风在裂谷中持续1分钟。这股风会熄灭裂谷内或上方的任何明火，并对裂谷中生物进行的力量和敏捷检定造成不利影响。

雷声瞬间响彻裂谷。裂谷中的每个生物必须进行一次 DC 15 体质豁免检定。若失败，它将受到 10 (3d6) 点雷鸣伤害，并且 耳聋 1 分钟。若成功，该生物只受到一半伤害且不会 耳聋。

闪电瞬间充满了裂谷。裂谷中的每个生物必须进行一次DC 15敏捷豁免，失败则受到28（8d6）点闪电伤害，成功则只受到一半伤害。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一道裂谷将地下通道分割开来，通道在对面十尺远的地方继续延伸。雾气遮掩了裂谷的深度。",randomTableIds:["tbl_4cc_0"]},{id:"scn_4d2",locationId:"loc_4bc",name:"N5. 斯涅布力定居点",activation:{condition:{type:"always"},priority:0},skeleton:["如果征伐罗斯魔在N7区域，角色们会听到从东边通道传来的可怕、刺耳的歌声。","这个洞穴墙壁上的住所被某种强烈力量撕裂了。","几处住所的废墟看起来像是墙壁上的缺口和瓦砾堆。","许多小人形生物的尸体散落在废墟之中。","这个侏儒定居点是阿莉希·卡罗娜斯第一次测试毁灭法球的试验场。"],flesh:`如果征伐罗斯魔在N7区域，角色们会听到从东边通道传来的可怕、刺耳的歌声。

这个侏儒定居点是阿莉希·卡罗娜斯第一次测试毁灭法球的试验场。四个在这里死去的地底侏儒的恶灵在废墟中徘徊。空气节点的力量赋予了他们元素能量，因此他们的攻击造成的是闪电伤害而不是死灵伤害。他们会攻击任何进入洞穴的生物。`,spotlightRefs:[],presentNpcIds:["npc_aerisi_kalinoth","npc_yan_c_bin"],availableInfoIds:[],encounterIds:["enc_4d2"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴墙壁上的住所被某种强烈力量撕裂了。几处住所的废墟看起来像是墙壁上的缺口和瓦砾堆。许多小人形生物的尸体散落在废墟之中。"},{id:"scn_4d4",locationId:"loc_4bc",name:"N6. 窒息洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["巨大的蜘蛛在死亡时与死亡的洞穴蜥蜴、巨型蝙蝠、食腐虫以及一位身穿精美锁子甲、腰间挂着红宝石柄小刀的女黑暗精灵一起被发现。","没有明显的伤痕，死亡的气味比预期的要淡。","在洞穴的后部，距离黑暗精灵十尺以内，有三道细小的岩缝中传来微风的呼啸声。","裂隙会魔法般地吸走洞穴中的空气，以及任何进入洞穴后方30英尺范围内生物肺部的空气。","en=Remove Curse法术同样可以结束此效果，瓶装气息也是如此（参见第七章）。"],flesh:`裂隙会魔法般地吸走洞穴中的空气，以及任何进入洞穴后方30英尺范围内生物肺部的空气。此类生物必须成功通过一个DC 15体质豁免检定，否则将无法呼吸。除非生物在每分钟结束时再次通过豁免检定，否则无法恢复正常呼吸。en=Remove Curse法术同样可以结束此效果，瓶装气息也是如此（参见第七章）。

更多关于这名卓尔精灵的信息，请参阅区域N7。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_4d4_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"巨大的蜘蛛在死亡时与死亡的洞穴蜥蜴、巨型蝙蝠、食腐虫以及一位身穿精美锁子甲、腰间挂着红宝石柄小刀的女黑暗精灵一起被发现。没有明显的伤痕，死亡的气味比预期的要淡。在洞穴的后部，距离黑暗精灵十尺以内，有三道细小的岩缝中传来微风的呼啸声。",dmGuidance:"这名卓尔精灵身穿一套精灵链甲，携带一对装饰着红宝石的精良匕首（每把价值1000金币）以及一份en=Primordial Ward（参见附录 B）。"},{id:"scn_4d7",locationId:"loc_4bc",name:"N7. 漂浮者",activation:{condition:{type:"always"},priority:0},skeleton:["如果征伐罗斯魔还活着在这里，角色们在看到它之前会先听到从这个区域传来的可怕、刺耳的歌声。","两个人类，一个鸟羽人族（一种鸟身人），以及一个黑暗精灵被悬挂在连接着链条的钩子上。","他们的下方地板上积聚了血泊。","甲虫在地板、墙壁上爬行，沿着链条爬上爬下，落在受害者身上。","当微风吹动他们来回转动时，受害者微弱地挣扎、喘息和呻吟。"],flesh:`如果征伐罗斯魔还活着在这里，角色们在看到它之前会先听到从这个区域传来的可怕、刺耳的歌声。

这个令人毛骨悚然的展示是一个征伐罗斯魔的杰作，它在折磨俘虏中获得虐待狂的快感。它守卫着嚎叫洞穴的外围，抵御入侵者。

这里的囚犯状况很差。每个人都语无伦次，只剩下1点生命值。治疗可以让一个俘虏恢复意识。

这两个人类是两个嚎叫仇恨的启蒙者（见第七章），他们激怒了Aerisi太多次。如果被审问，他们情绪低落且沉默不语。他们会在第一时间寻找机会逃往地面。

Feathergale骑士们捕获了名为Kazra的鸟羽人，并将她带到此处进行审问。她渴望再次在开阔的天空中飞翔，并恳求角色们护送她回到地面。

这位卓尔魔法师，Balix，是一位历史学家，也是N5区域死去的侦察兵的同伴。他们来到此地是为了一睹眼睛圣所，并且想要查明是否有地表人在此，结果却误入了一个邪教的伏击。他不想与邪教、地表世界或任何其他事物有所牵连，只想返回最近的黑暗精灵社群。他会使用他天生的en=Darkness法术尽快撤退。

在碎片中有一个蜘蛛丝袋，里面有23个铂金币，以及一条念珠项链。项链上有一颗祝福之珠，一颗疗愈之珠，一颗召唤之珠，和一颗风行之珠。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:["enc_4d7"],treasureSlotIds:["trs_4d7_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"两个人类，一个鸟羽人族（一种鸟身人），以及一个黑暗精灵被悬挂在连接着链条的钩子上。他们的下方地板上积聚了血泊。甲虫在地板、墙壁上爬行，沿着链条爬上爬下，落在受害者身上。当微风吹动他们来回转动时，受害者微弱地挣扎、喘息和呻吟。包括破烂衣物和破碎武器在内的碎片散落在墙壁上。"},{id:"scn_4dc",locationId:"loc_4bc",name:"N8. 风之合唱",activation:{condition:{type:"always"},priority:0},skeleton:["风穿过这个弯曲的天然通道，呼啸着进入远处的黑暗中，随着它穿过遥远洞穴的壁龛和裂缝，风的音调在不断变化。","偶尔在这里时，一个或多个角色会听到耳语般的谎言或充满仇恨的嚎叫，次数可以由你决定。","选择一个对受影响角色重要或曾经重要的NPC朋友或盟友。","那些角色听到NPC的声音随风传来，但声音嘲讽并低语着失败、缺陷和负面特质。","选择一个对受影响角色重要或曾经重要的NPC敌人。"],flesh:`偶尔在这里时，一个或多个角色会听到耳语般的谎言或充满仇恨的嚎叫，次数可以由你决定。

选择一个对受影响角色重要或曾经重要的NPC朋友或盟友。那些角色听到NPC的声音随风传来，但声音嘲讽并低语着失败、缺陷和负面特质。

选择一个对受影响角色重要或曾经重要的NPC敌人。敌人的声音发誓要复仇，发出威胁，并预言灾难。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"风穿过这个弯曲的天然通道，呼啸着进入远处的黑暗中，随着它穿过遥远洞穴的壁龛和裂缝，风的音调在不断变化。"},{id:"scn_4e1",locationId:"loc_4bc",name:"N9. 蘑菇森林",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴的地面不平整，覆盖着毒蘑菇。","毒蘑菇的盖子上有白色、紫色、绿色和蓝色的斑点。","有些像森林中的蕨类植物一样低矮而宽阔，而其他的则像人类一样高，茎部像树干一样粗。","还有一些散发出微弱的光，诡异地照亮了一条通往平静水面的斜坡通道，那水面也发出微弱的光芒。","在低语般的风中，滴水声回响着。"],flesh:`在众多真菌中，有几个是具有魔力的，如果食用，它们会像药水一样起作用。一种带有水色斑点的毒蘑菇作用如同一瓶延寿药水。两个带有灰色斑点的琥珀色毒蘑菇像英勇药水。三个淡紫色的毒蘑菇如同治疗药水。这些具有魔力的毒蘑菇在接下来的一年里会重新生长。

食用其他任何一种毒蕈后，食用者需在 2d4 分钟后进行一次 DC 15 体质豁免检定。若失败，则食用者陷入 中毒 状态。以这种方式陷入 中毒 状态的生物可以在每个小时结束时重复进行豁免检定，成功则终止该效果。

通向南边的倾斜通道通往N12区域。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴的地面不平整，覆盖着毒蘑菇。毒蘑菇的盖子上有白色、紫色、绿色和蓝色的斑点。有些像森林中的蕨类植物一样低矮而宽阔，而其他的则像人类一样高，茎部像树干一样粗。还有一些散发出微弱的光，诡异地照亮了一条通往平静水面的斜坡通道，那水面也发出微弱的光芒。在低语般的风中，滴水声回响着。"},{id:"scn_4e3",locationId:"loc_4bc",name:"N10. 石笋花园",activation:{condition:{type:"always"},priority:0},skeleton:["风穿过这个奇异的石笋花园。","岩石形态光滑而扭曲，它们的自然形态被风化成混乱和抽象的形状。","超自然的空气风化了石笋，使得它们在人们穿过洞穴时形成了奇怪的图像。","角色们可能会看到一排努力逆风行走的身影，死者的面孔，或者你在你们的战役中想要描绘或传达的任何其他事物。"],flesh:"超自然的空气风化了石笋，使得它们在人们穿过洞穴时形成了奇怪的图像。角色们可能会看到一排努力逆风行走的身影，死者的面孔，或者你在你们的战役中想要描绘或传达的任何其他事物。",spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"风穿过这个奇异的石笋花园。岩石形态光滑而扭曲，它们的自然形态被风化成混乱和抽象的形状。"},{id:"scn_4e5",locationId:"loc_4bc",name:"N11. 英雄之墓",activation:{condition:{type:"always"},priority:0},skeleton:["一个黄色的棺材安放在一个发光小湖中央的石柱平坦的顶部。","石棺上覆盖着一片黄色霉菌。","在霉斑之下，棺材上的矮人铭文写着：'这里安息着屠龙者和和平守护者戈德维德。","' 棺材内装有灰尘、骨头、裂开的头骨和头盔，以及一件破旧的胸甲。","一柄闪亮的短剑紧握在骷髅的手中（见下面的'宝藏'）。"],flesh:`天然的石柱高达20英尺，表面因水和真菌而湿滑，因此需要成功的DC 15力量（运动）检定才能在没有帮助的情况下攀爬。石棺上覆盖着一片黄色霉菌。

在霉斑之下，棺材上的矮人铭文写着：'这里安息着屠龙者和和平守护者戈德维德。' 棺材内装有灰尘、骨头、裂开的头骨和头盔，以及一件破旧的胸甲。一柄闪亮的短剑紧握在骷髅的手中（见下面的'宝藏'）。

戈德韦德的短剑是一把屠龙者。移除剑刃会导致棺材中传来低沉的呻吟声，但除此之外什么也没有发生。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_4e5_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个黄色的棺材安放在一个发光小湖中央的石柱平坦的顶部。"},{id:"scn_4e8",locationId:"loc_4bc",name:"N12. 发光的池塘",activation:{condition:{type:"always"},priority:0},skeleton:["这个狭长的洞穴中，高高的石笋和真菌环绕着一个宽阔而平静的水池。","水体发出柔和的蓝色光芒，在浅水处，银色的鱼群忽隐忽现。","这个小湖在最深处有15尺深。","这里的水清澈干净。"],flesh:"这个小湖在最深处有15尺深。这里的水清澈干净。",spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个狭长的洞穴中，高高的石笋和真菌环绕着一个宽阔而平静的水池。水体发出柔和的蓝色光芒，在浅水处，银色的鱼群忽隐忽现。"},{id:"scn_4ec",locationId:"loc_4bc",name:"N14. 气节点门前",activation:{condition:{type:"always"},priority:0},skeleton:["从区域N15吹来的风经过此处时强度加剧，会熄灭火炬和其他明火。","几条通风的隧道在一处无底深渊处交汇。","洞穴壁上的岩架形成了无底深渊上方的天然小径。","这个深渊有100英尺深。","强风使得在狭窄的岩壁上行走变得危险。"],flesh:`从区域N15吹来的风经过此处时强度加剧，会熄灭火炬和其他明火。

这个深渊有100英尺深。强风使得在狭窄的岩壁上行走变得危险。任何试图这样做的生物必须成功通过 DC 10 敏捷（特技）检定。未能通过检定的生物会从岩壁跌入深渊。通常来说，这个深渊是容易攀爬的，但强风使得攀爬需要成功通过 DC 10 力量（运动）检定。未能通过检定的生物会从深渊的岩壁上坠落。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"几条通风的隧道在一处无底深渊处交汇。洞穴壁上的岩架形成了无底深渊上方的天然小径。"},{id:"scn_4ee",locationId:"loc_4bc",name:"N15. 风抱者",activation:{condition:{type:"always"},priority:0},skeleton:["一股温暖的风在这个光滑的洞穴中旋转，似乎随机改变方向。","九名穿着羽毛斗篷的邪教徒站在这里，双臂伸展，仿佛在等待风的拥抱，或者，也许在等待风将他们带到一个遥远的地方。",'一个啸怨祭司和八个嚎叫仇恨的启蒙者（见第七章）在这里，但他们太沉迷于他们的"风抱"之中，不会担心入侵者。',"只有当角色打扰他们时，他们才会攻击。","这里的风声足够大，以至于这个洞穴中的战斗声在其他地方是听不到的。"],flesh:'一个啸怨祭司和八个嚎叫仇恨的启蒙者（见第七章）在这里，但他们太沉迷于他们的"风抱"之中，不会担心入侵者。只有当角色打扰他们时，他们才会攻击。这里的风声足够大，以至于这个洞穴中的战斗声在其他地方是听不到的。',spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:["enc_4ee"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一股温暖的风在这个光滑的洞穴中旋转，似乎随机改变方向。九名穿着羽毛斗篷的邪教徒站在这里，双臂伸展，仿佛在等待风的拥抱，或者，也许在等待风将他们带到一个遥远的地方。"},{id:"scn_4f0",locationId:"loc_4bc",name:"N16. 受折磨的洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["墙壁呈现出平滑、波纹状的外观，好像石头被熔化了一样。","矮胖的石笋和细长的钟乳石弯曲成不自然的弧形。","一股强烈的气流吹过岩石形态，发出空洞的嚎叫。","它会一直战斗，直到被杀死。"],flesh:"它会一直战斗，直到被杀死。",spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:["enc_4f0"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"墙壁呈现出平滑、波纹状的外观，好像石头被熔化了一样。矮胖的石笋和细长的钟乳石弯曲成不自然的弧形。一股强烈的气流吹过岩石形态，发出空洞的嚎叫。",dmGuidance:"当角色们探索这个区域时，一只黑布丁从他们身后墙壁上的一个狭窄裂缝中涌出，切断了他们的退路。"},{id:"scn_4f2",locationId:"loc_4bc",name:"N17. 牺牲",activation:{condition:{type:"always"},priority:0},skeleton:["角色们在到达这里之前就能听到风声，并看到绿光。","在四个隧道的交汇处，一股强大的风暴从北边吹来，发出持续的嚎叫。","两个火盆燃烧着绿色的火焰，照亮了这个区域。","许多岩石柱子从地面延伸到天花板。","三根血迹斑斑的柱子底部放着一些被切断的丝绸绳索，它们被血染得很黑。"],flesh:`角色们在到达这里之前就能听到风声，并看到绿光。

囚犯们被关押在这里，直到他们可以在N19区域被献祭给延西冰。两个隐形的恶猿魔守卫着囚犯。这些恶魔潜伏在洞穴上层的柱子之间，会突然袭击敢于释放囚犯的入侵者。如果它们发现了角色们，这两个女人会警告角色们有"隐形恶魔"守卫着她们。

两个火盆用en=Continual Flame法术照亮了这个区域。

这里关押着两个人类，每个人的额头上都刻有空气的象征。一个是Nerise Gladham，一个农民（一个手无寸铁的平民，还剩2点生命值）。另一个是Deseyna Norvael，一个高级水深港外交官（一个手无寸铁的贵族，还剩4点生命值），她是米拉巴代表团的一部分。这两个囚犯只想逃离这个区域，回到文明社会。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:["enc_4f2"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"在四个隧道的交汇处，一股强大的风暴从北边吹来，发出持续的嚎叫。两个火盆燃烧着绿色的火焰，照亮了这个区域。许多岩石柱子从地面延伸到天花板。三根血迹斑斑的柱子底部放着一些被切断的丝绸绳索，它们被血染得很黑。另外两根柱子上绑着两个女人，每个女人的额头上都刻有一个符号。"},{id:"scn_4f7",locationId:"loc_4bc",name:"N18. 皇家守卫",activation:{condition:{type:"always"},priority:0},skeleton:["从此刻起，生物每向区域N19移动1英尺需消耗2英尺移动力。","飞行生物则需消耗5英尺移动力而非2英尺。","风将气体或蒸汽吹散，它能够熄灭蜡烛、火把以及该区域内类似的无保护火焰。","它使得受保护的火焰，如灯笼中的火焰，剧烈摇曳，并有50%的几率将它们熄灭。","角色们在到达这里之前就能看到火盆中的绿光(en=Continual Flame)。"],flesh:`这个房间和通往区域N19的隧道中风力极强，任何在该区域开始其回合的生物必须成功通过一次DC 10力量豁免检定，否则将被推向区域N17方向10英尺。飞行生物在此豁免检定中具有劣势。从此刻起，生物每向区域N19移动1英尺需消耗2英尺移动力。飞行生物则需消耗5英尺移动力而非2英尺。

风将气体或蒸汽吹散，它能够熄灭蜡烛、火把以及该区域内类似的无保护火焰。它使得受保护的火焰，如灯笼中的火焰，剧烈摇曳，并有50%的几率将它们熄灭。

角色们在到达这里之前就能看到火盆中的绿光(en=Continual Flame)。

四名憔悴的嚎叫仇恨祭司（见第七章）——艾瑞西最虔诚的信徒——守卫着这个区域。长时间仅靠空气维持生命已经扭曲了他们的身体。他们的眼睛从洞穴般的眼窝中突出，皮肤紧绷在突出的骨头上。由于他们的虔诚，他们对风的影响免疫。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin"],availableInfoIds:[],encounterIds:["enc_4f7"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一股强大的风在这个小洞穴中咆哮，导致碎片从墙壁上反弹，撞击后化为尘土。洞穴中央的石制火盆里燃烧着稳定的绿色火焰。阻挡着通往北方隧道的是四个穿着飘扬的邪教长袍的瘦弱身影。风似乎对他们没有任何阻碍。"},{id:"scn_4f9",locationId:"loc_4bc",name:"N19. 空气传送门",activation:{condition:{type:"always"},priority:0},skeleton:["角色们在接近这个区域时听到雷声并看到闪光。","在这个洞穴的中心，石笋向上突出，像三只巨大的爪子。","在它们之间，一团翻腾的雷云伴随着闪电。","雷声轰鸣，小石块从上方滚落。","在雷云下方是一个被许多祭品的血迹斑斑的高台。"],flesh:`角色们在接近这个区域时听到雷声并看到闪光。

如果Aerisi在这里，但不是唯一还活着的先知，请使用'与Aerisi的遭遇'部分。如果Aerisi是唯一剩下的先知，请使用'与延西冰的遭遇'部分。在两种遭遇中，空气元素精英都不在场。

阿莉希·卡罗娜斯（见第七章）站在空气传送门旁边，由一个气元素侍从保护。在试图召唤延西冰进入这个世界时，她试图保持在角色们够不到的地方，同时施放她的破坏性法术。元素精英专注于挫败和杀死远程攻击者和施法者。

Aerisi在这一点上拒绝逃跑，试图通过空气传送门使用风标将是灾难性的。

她高举风标并喊道："凭借这把钥匙，我召唤我的主人！"月亮精灵随后鞠躬，延西冰（见第七章）飞过传送门。邪恶空气的王子出现时是一个面容憔悴、深灰色的男人，白发和发光的眼睛。在这个形态中，延西冰微笑着，他的眼睛闪烁着闪电。当Aerisi自鸣得意时，延西冰专注于摧毁角色们。

雷云围绕着一扇银色的窗户，这是一个通往空气界的传送门，直接通往延西冰的隐形城堡的台阶。这个传送门距离地面30尺。

通过传送门的人将到达延西冰的隐形堡垒的台阶上，延西冰会出来摧毁他们。尽管延西冰只有在正确的仪式完成后才能进入这个世界，但角色们可以轻易地通过传送门逃跑。

角色们只能通过将风标投掷进传送门来关闭它，这一过程中武器会被摧毁。如果传送门关闭时延西冰仍然在这个世界，他将被迫返回元素空气界。

Aerisi穿戴着皇家华服。她戴着一个白金颈环（价值1600金币），金和蓝宝石戒指（四个，每个价值1000金币），以及来自Evereska的一顶王冠（6400金币）。她携带着风标（见第七章）。`,spotlightRefs:[],presentNpcIds:["npc_yan_c_bin","npc_aerisi_kalinoth"],availableInfoIds:["info_pota_portal_rites"],encounterIds:["enc_pota_n19_myrmidons","enc_pota_n19_aerisi","enc_pota_n19_yan_c_bin"],treasureSlotIds:["trs_4f9_0"],eventIds:["evt_pota_air_portal"],tone:"tension",_meta:{sourcePages:[127],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`在这个洞穴的中心，石笋向上突出，像三只巨大的爪子。在它们之间，一团翻腾的雷云伴随着闪电。雷声轰鸣，小石块从上方滚落。在雷云下方是一个被许多祭品的血迹斑斑的高台。
有时候在云层中心可以看到一扇银色的窗户。它通向无尽的天空中的云层。`,dmGuidance:`如果角色们击败了Aerisi，两个气元素侍从（见第七章）会守卫这个洞穴。
当角色们击败她时，她在一阵风的尖叫声中消失了，但是风标仍然保留，传送门也是如此。
当角色们到达时，阿莉希·卡罗娜斯独自一人。`,mapGeometry:{imageRef:"adventure/PotA/060-poa05-06.webp"},offerableQuestIds:["qst_main_pota"]},{id:"scn_4ff",locationId:"loc_4ff",name:"狂泻瀑布",activation:{condition:{type:"always"},priority:0},skeleton:["危险的瀑布、突然的洪水以及奇异的元素效果充斥着Plunging Torrents，这是水元素界的一个洞穴延伸部分。","该建筑群具有以下特征。","任何例外情况将在它们适用的区域中注明。","洞穴的天花板位于水面上方10尺处。","在靠近陡峭瀑布的位置，存在急流。"],flesh:`危险的瀑布、突然的洪水以及奇异的元素效果充斥着Plunging Torrents，这是水元素界的一个洞穴延伸部分。

该建筑群具有以下特征。任何例外情况将在它们适用的区域中注明。

洞穴的天花板位于水面上方10尺处。

墙壁是粗糙且滑溜的石头，需要成功通过 DC 10 力量 (运动) 检定才能攀爬。

在靠近陡峭瀑布的位置，存在急流。每当一个生物在一个回合中首次进入强流处或在其回合开始时处于该位置，它必须成功进行一次 DC 15 力量豁免，否则将被水流沿着流向携带10英尺方向，如《倾泻激流地图》上的箭头所示。该生物可以尝试通过成功进行 DC 15 力量（运动）检定来逆流游动。这样的水域对所有游泳者来说都是 3。

内部的门是由石头制成的，既没有锁也没有钥匙孔。

节点由水中散发的蓝色和绿色光芒昏暗地照亮。

大部分水深为20尺。

瀑布高40英尺。被瀑布冲下的生物不会因坠落而受到伤害。然而，在下游盆地开始回合时，该生物必须成功通过一个DC 15的力量豁免，否则会被冲到水下10英尺并被束缚在那里。该生物可以使用其动作进行一次DC 15的力量（运动）检定，成功则结束束缚状态。

每当角色探索一个新区域时，掷一个 d6。如果是1点，选择一个角色接收P4、P5或P6区域的环境特征（但不包括生物）的图像。生活在节点中的阿波洛斯通过心灵感应投射这些图像，以吓唬入侵者，最终将他们引诱到它的巢穴。

每当一个角色回应这种心灵感应接触时，便会建立一条链接。眼魔立刻知晓该角色的所有欲望和目标。随后，眼魔会间歇性地向该角色投射图像，展示角色所爱的一切被碎浪教派摧毁的场景。

每10分钟检查一次随机遭遇。掷一个d20，并参照下表确定角色们遇到了什么，如果有的话：

在Plunging Torrents中，任何在肉体上刻有水之象征的生物将获得等同于其地面速度的游泳速度，对水流的影响免疫，并且从瀑布下降时不会受到任何负面影响。刻印这个标记会造成1点挥砍伤害并留下疤痕。治疗魔法可以移除疤痕及其赋予的能力。

湍急的水流将水从区域P18引至这些洞穴。每个洞穴中心都有一个旋转的漩涡。任何被卷入漩涡的生物都会被传送到倾泻洪流中的随机水域。投掷一个d20；根据骰出的数字决定生物出现的位置。例如，若骰出7点，该生物将被传送到区域P7的quipper坑中。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:'接收到这些图像后，角色必须成功通过一个DC 10的感知豁免检定，否则将遭受一种随机的短期疯狂形式，如第8章"进行游戏"中城主指南所述。',randomTableIds:["tbl_4ff_0"],offerableQuestIds:["qst_main_pota"]},{id:"scn_50d",locationId:"loc_4ff",name:"P1. 瀑布盆地",activation:{condition:{type:"always"},priority:0},skeleton:["这里的瀑布声很远就能听到。","一个响亮的瀑布倾泻进这个长满青苔的洞穴。","潮湿的楼梯紧贴着西墙，向上爬升得比瀑布还要高，向下则延伸到充满水的盆地中。","在楼梯与水面相交的地方，一根铁柱以一定角度突出，一艘平板船系在它上面。","通往东北和西北方向的隧道将水从池中引导出去。"],flesh:`这里的瀑布声很远就能听到。

一个具有10或更高被动感知（察觉）得分的角色会注意到水之象征被雕刻在通往东北通道的上方。

阶梯向下延伸5英尺至湖面下，终止于一个粗糙的水下岩架，此处位于淹没洞穴地面以上15英尺。阶梯向上通往眼之密堂中的区域F8。

铁柱是洞穴中最近新增的部分，随意地插入楼梯的岩石中。

平底船是一种长而底部平坦的船，配备有一根杆，用于在水节点中导航。这艘平底船可以容纳多达七只中型生物。作为其移动的一部分，生物可以使用杆推动平底船前进10尺。平底船的AC为8，生命值为50点。如果它从瀑布上翻过去，它将失去25点生命值并翻覆。

这个直径7尺的水球悬浮在水面上方1尺处，保持静止直到有生物触碰它，随即包裹住该生物并通过东北方的隧道（经过区域P12、P14和P16）将其运送到区域P20。水球飞行速度为10尺，其中的生物只要留在水球内就获得en=Water Breathing法术效果。在运送过程中的任何时间，水球内生物可以以一个动作游出。水球每次仅运送一个生物，到达目的地后即破裂。水球免疫伤害，但干燥粉可摧毁它。

当水球被摧毁或离开这个洞穴时，另一个水球会从水中升起以取代它的位置。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[128],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个响亮的瀑布倾泻进这个长满青苔的洞穴。潮湿的楼梯紧贴着西墙，向上爬升得比瀑布还要高，向下则延伸到充满水的盆地中。在楼梯与水面相交的地方，一根铁柱以一定角度突出，一艘平板船系在它上面。通往东北和西北方向的隧道将水从池中引导出去。在水池上方，一个七尺直径的水球悬停在空中。",dmGuidance:"当角色们第一次到达这个房间时，这里有一艘平底船系着。"},{id:"scn_512",locationId:"loc_4ff",name:"P2. 陡峭通道",activation:{condition:{type:"always"},priority:0},skeleton:["水流迅速流向一个小岩石岛屿，它将水道一分为二，分为南北两个方向。","向南瀑布的声音更响亮。","水流将岛屿南侧的水拉向通往P17区域的瀑布。","通过水路导航该区域的角色会被拉向南并翻过瀑布，除非他们采取了反制措施。","向北的水道向西流经通道，不受水流的影响。"],flesh:`水流将岛屿南侧的水拉向通往P17区域的瀑布。通过水路导航该区域的角色会被拉向南并翻过瀑布，除非他们采取了反制措施。

向北的水道向西流经通道，不受水流的影响。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"水流迅速流向一个小岩石岛屿，它将水道一分为二，分为南北两个方向。向南瀑布的声音更响亮。"},{id:"scn_514",locationId:"loc_4ff",name:"P3. 网",activation:{condition:{type:"always"},priority:0},skeleton:["水道在一条长长的洞穴中尽头，只有远处瀑布的声音在洞壁上回响。","网子将洞穴分隔开，横跨在水面上方突出的石笋之间。","七只巨蟹居住在这个洞穴中。","三只在西北方向的岩石壁架上清晰可见。","两只螃蟹分别在水下紧贴在每张网的边缘。"],flesh:`七只巨蟹居住在这个洞穴中。三只在西北方向的岩石壁架上清晰可见。两只螃蟹分别在水下紧贴在每张网的边缘。观察水面的角色必须成功通过一次DC 14感知（察觉）检定，才能发现潜在水下的螃蟹，它们会爬上它们的网，攻击任何进入触手可及范围的生物。一旦战斗开始，所有螃蟹都会发起攻击。

覆盖在洞穴上的每张网具有AC 8和20生命值。它们在水面上方延伸5尺。由于网子是湿的，每张网对火焰伤害都有抗性。一旦网子的生命值降至0，网子就会沉入水中，不再提供任何阻碍。

双开门被推开，露出通往区域P4的水下通道。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_514"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`水道在一条长长的洞穴中尽头，只有远处瀑布的声音在洞壁上回响。网子将洞穴分隔开，横跨在水面上方突出的石笋之间。

在水下40尺处，墙壁由加工过的石头构成。红色和黑色的触手马赛克围绕着南墙上的一对黑色大理石门。门框的弧线上排列着长长的弯曲獠牙的浮雕。`,dmGuidance:"如果角色们探索水下，请阅读以下内容："},{id:"scn_51a",locationId:"loc_4ff",name:"P4. 神庙入口",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴的墙壁覆盖着黏液，没有装备无法攀爬，这里的水也被污染了，不适合饮用。","水填满了洞穴，距离天花板只有2尺。","水下隐约可见一排柱廊，上面支撑着一个拱形的山花，位于一个长长的门廊上方。","柱廊后面是一对刻有圆形、锯齿状大口浮雕的石门。","在这座建筑前的广场上，四个黏滑的鱼形人形生物跪在一个下沉的石制偶像下，偶像的分支触手在顶部汇聚成一个圆形的带牙的口。"],flesh:`这个洞穴的墙壁覆盖着黏液，没有装备无法攀爬，这里的水也被污染了，不适合饮用。

水填满了洞穴，距离天花板只有2尺。

在广场的西南端，一组弯曲的楼梯爬升到水面之上。

四只寇涛在祭坛前膜拜，而一只寇涛监察者守卫着东北方的门。寇涛鱼人试图捕获牺牲品，以供他们的Aboleth神（见P6区域）使用。

如果在此处发生战斗，来自区域P7的生物会前来侦查并加入战斗。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_51a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"水下隐约可见一排柱廊，上面支撑着一个拱形的山花，位于一个长长的门廊上方。柱廊后面是一对刻有圆形、锯齿状大口浮雕的石门。在这座建筑前的广场上，四个黏滑的鱼形人形生物跪在一个下沉的石制偶像下，偶像的分支触手在顶部汇聚成一个圆形的带牙的口。",dmGuidance:"下面的方框文本假设角色们能在水下看见："},{id:"scn_51e",locationId:"loc_4ff",name:"P5. 英古卢布神龛",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间回响着瀑布的轰鸣声。","装饰着这个半淹没神殿的黏滑墙壁上的浮雕雕刻，是一些可怕的嘴巴，每个嘴巴都被石制的滴落触手的结网框住。","楼梯两侧排列着柱子，从水中上升至一个平台，那里有一块平滑的石头作为祭坛。","链条从祭坛底部蜿蜒而出，末端是敞开的、生锈的镣铐。","三个鱼形的类人生物，长着参差不齐的牙齿，站在祭坛周围。"],flesh:`三个鱼形的类人生物，长着参差不齐的牙齿，站在祭坛周围。其中一个戴着海带和贝壳制成的头饰，高举着一把尖端像触手的三叉戟。

这里是位于区域P6的底栖魔鱼前来享用祭品的地方。一名装备着唤鱼三叉戟的寇涛大祭司和两名寇涛在此侍奉他们的神明。他们会试图抓捕角色并将他们锁在祭坛上。放置祭坛的粗凿平台高出水面20英尺。

将寇涛大祭司的权杖动作替换为以下动作：

这个洞穴的墙壁覆盖着黏液，没有装备无法攀爬，这里的水也受到污染，不适合饮用。

如果Aboleth在P6区域，它会爬到平台上加入战斗。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_51e"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间回响着瀑布的轰鸣声。装饰着这个半淹没神殿的黏滑墙壁上的浮雕雕刻，是一些可怕的嘴巴，每个嘴巴都被石制的滴落触手的结网框住。

楼梯两侧排列着柱子，从水中上升至一个平台，那里有一块平滑的石头作为祭坛。链条从祭坛底部蜿蜒而出，末端是敞开的、生锈的镣铐。`,dmGuidance:"【P5. 英古卢布神龛】+4 命中，触及5尺或射程20/60尺，单一目标。命中：5（1d6 + 2）穿刺伤害，若用双手进行近战攻击则为6（1d8 + 2）穿刺伤害。"},{id:"scn_525",locationId:"loc_4ff",name:"P6. 吞噬者英古库鲁布",activation:{condition:{type:"always"},priority:0},skeleton:["一个名为Yngukulub the Devourer的底栖魔鱼与戈尔·碎骨和Cult of the Crushing Wave结盟。","精神错乱的寇涛鱼人给Aboleth带来祭品，当他们没有合适的祭品时，他们愿意将自己作为食物喂养他们饥饿的神。","Yngukulub服从戈尔·碎骨，因为它期待着奥莉德拉淹没文明世界并摧毁众神的神殿的那一天。","在奥莉德拉胜利导致的黑暗时代中，Aboleths可以重返他们作为世界统治者的合适位置。","如果戈尔·碎骨在Crush Wave Temple被击败，那么Aboleth将守卫在P20区域的水传送门。"],flesh:`一个名为Yngukulub the Devourer的底栖魔鱼与戈尔·碎骨和Cult of the Crushing Wave结盟。精神错乱的寇涛鱼人给Aboleth带来祭品，当他们没有合适的祭品时，他们愿意将自己作为食物喂养他们饥饿的神。

Yngukulub服从戈尔·碎骨，因为它期待着奥莉德拉淹没文明世界并摧毁众神的神殿的那一天。在奥莉德拉胜利导致的黑暗时代中，Aboleths可以重返他们作为世界统治者的合适位置。

如果戈尔·碎骨在Crush Wave Temple被击败，那么Aboleth将守卫在P20区域的水传送门。否则，它就在这里。

如果它在此处，底栖魔鱼会以心灵感应接触角色，承诺满足他们的欲望以换取他们的效忠。拒绝的角色会被拖入咸水深渊并被吞噬。当完全浸没时，底栖魔鱼被黑暗、粘滑的水2。它能够毫无困难地追击向东跃下瀑布的猎物。

如果区域P5的寇涛鱼人尚未死亡，它们会赶来为底栖魔鱼防御。

柱子上描绘的Aboleth的三重眼睛实际上是翡翠、蓝宝石和蓝绿色猫眼石。这六颗宝石每颗价值1000金币。

Aboleth洞穴的地板上散落着180枚铂金币（pp），1700枚金币（ep），以及一根触须权杖。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_525"],treasureSlotIds:["trs_525_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"填充这个洞穴的黏滑水体通过东墙上的一个洞流出，然后倾泻进更远处的洞穴黑暗中。高大、覆盖着黏液的柱子从这肮脏的水中升起。每根柱子上都装饰着一幅马赛克，描绘了精灵、矮人、人类和其他种族落入柱子底部一个三眼、触手怪物的獠牙大口中。怪物的眼睛像宝石一样闪闪发光。"},{id:"scn_52a",locationId:"loc_4ff",name:"P7. 食人鱼坑",activation:{condition:{type:"always"},priority:0},skeleton:["楼梯通向一个小型潮湿的洞穴，五个令人厌恶的鱼人围绕着一个坑，发出窒息和嘟囔的声音。","这个坑宽10尺，深40尺，一直延伸到水下。","坑底的水深10尺（足以缓冲跌落的冲击）。","四个寇涛和一个寇涛驱策者在坑里填满了一群食人鱼群。","在他们和Aboleth都饱足的时候，他们会仪式性地将生物喂给quipper。"],flesh:`这个坑宽10尺，深40尺，一直延伸到水下。坑底的水深10尺（足以缓冲跌落的冲击）。

四个寇涛和一个寇涛驱策者在坑里填满了一群食人鱼群。在他们和Aboleth都饱足的时候，他们会仪式性地将生物喂给quipper。他们的仪式毫无意义：喘息、嘟囔和嘶哑，没有任何已知语言的基础。寇涛鱼人试图推角色进坑里。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_52a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"楼梯通向一个小型潮湿的洞穴，五个令人厌恶的鱼人围绕着一个坑，发出窒息和嘟囔的声音。"},{id:"scn_52c",locationId:"loc_4ff",name:"P8. 倾斜洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴的天花板上覆盖着钟乳石，它向南倾斜。","堤岸环绕在边缘，小而平坦的石头从大约5尺深的水中升起。","细小的白色鱼儿在浅水中游动，穿梭在水下可见的闪闪发光的硬币上方。","一只石绳怪和四只锥怪悬挂在钟乳石中的洞穴天花板上。","罗珀首先发动攻击。"],flesh:`一只石绳怪和四只锥怪悬挂在钟乳石中的洞穴天花板上。一个仔细观察钟乳石并且成功通过一次DC 20 感知（察觉）检定的人物会发现这些生物坚韧的皮肤上刻着水的符号。

罗珀首先发动攻击。当它用触须缠住猎物时，它会将猎物拉到附近的刺怪下方，然后刺怪从天花板上掉落。刺怪对受擒的猎物进行攻击检定时具有优势。

水下有230金币（ep）和563铂金币（gp）。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_52c"],treasureSlotIds:["trs_52c_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴的天花板上覆盖着钟乳石，它向南倾斜。堤岸环绕在边缘，小而平坦的石头从大约5尺深的水中升起。细小的白色鱼儿在浅水中游动，穿梭在水下可见的闪闪发光的硬币上方。"},{id:"scn_52f",locationId:"loc_4ff",name:"P9. 碎浪前哨站",activation:{condition:{type:"always"},priority:0},skeleton:["这个大型、充满水的洞穴的天花板位于水面上方30尺处。","在洞穴中央，两个岩石高原高出水面20尺。","每个基座上蹲着一个皮肤黏滑、半透明的类人生物。","水流向东南方向，那里你可以听到雷鸣般的瀑布声。","这个洞穴的水深只有5英尺。"],flesh:`这个洞穴的水深只有5英尺。高原的墙壁湿润但粗糙，成功通过 DC 10 力量（运动）检定即可攀爬。

两个碎浪掠夺者（见第七章）在高原上守望。每个都有五支标枪。它们是阿波洛斯的奴隶，它们的半透明肉体上覆盖着粘液。它们不怕死。

除非被吸引到区域P20去保护底栖魔鱼，否则两只甲伏怪会潜伏在高原后面。当碎浪掠夺者开始投掷标枪时，它们就会从藏身处现身并攻击入侵者。如果食尸鬼使敌人麻痹，它会任由水流将被无力抵抗的生物冲下瀑布并带入区域P20。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_52f","enc_pota_p10_chuuls_present"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个大型、充满水的洞穴的天花板位于水面上方30尺处。在洞穴中央，两个岩石高原高出水面20尺。每个基座上蹲着一个皮肤黏滑、半透明的类人生物。水流向东南方向，那里你可以听到雷鸣般的瀑布声。"},{id:"scn_531",locationId:"loc_4ff",name:"P10. 水之试炼",activation:{condition:{type:"always"},priority:0},skeleton:["一条干地紧贴着这个洞穴的墙壁，墙壁上覆盖着用粉笔涂画的元素水的符号。","在洞穴的中心，一个铁制笼子悬挂在一根绑在钟乳石上的绳索上。","笼子的四分之三浸没在填满洞穴中央的水潭中。","笼子里挤满了人形生物，每个额头上都刻有元素水的符号。","疲惫的手抓住栅栏，囚犯们努力将嘴巴伸到水面以上。"],flesh:`八个碎浪掠夺者（见第七章）占据了笼子，里面还有四个其他邪教徒的溺水尸体。

戈尔·碎骨 将弱小和不服从的邪教徒锁在笼子里，通过仪式使他们变得更加强大。如果他们的数量减少到一半，他们就会投降。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一条干地紧贴着这个洞穴的墙壁，墙壁上覆盖着用粉笔涂画的元素水的符号。
在洞穴的中心，一个铁制笼子悬挂在一根绑在钟乳石上的绳索上。笼子的四分之三浸没在填满洞穴中央的水潭中。笼子里挤满了人形生物，每个额头上都刻有元素水的符号。疲惫的手抓住栅栏，囚犯们努力将嘴巴伸到水面以上。在挣扎的人群中，有些已经静止不动，面朝下漂浮在笼子里。`,dmGuidance:"如果角色释放他们，邪教徒会攻击，先用赤手空拳，直到他们能夺取武器。"},{id:"scn_533",locationId:"loc_4ff",name:"P11. 猎人的巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["水滴从这个宁静洞穴中的钟乳石上滴落，回声在昏暗中回荡。","宽阔的岩石平台环绕着四周，天然的石岛提供了足够的空间来坐或躺下。","这个洞穴是一只巨章鱼的巢穴。","它大部分时间都在狩猎，所以它每小时只有百分之十的机会在其巢穴中。","淹没的隧道将这个洞穴与区域P12和P18连接起来。"],flesh:`这个洞穴是一只巨章鱼的巢穴。它大部分时间都在狩猎，所以它每小时只有百分之十的机会在其巢穴中。

淹没的隧道将这个洞穴与区域P12和P18连接起来。在水下游泳的角色会自动发现它们。

一扇单向的暗门阻挡着通往一条淹没隧道的入口，隧道的尽头是另一扇相似的暗门。成功的 DC 15 感知（察觉）检定足以发现任何一扇门，但它们只能从另一侧打开。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_533"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"水滴从这个宁静洞穴中的钟乳石上滴落，回声在昏暗中回荡。宽阔的岩石平台环绕着四周，天然的石岛提供了足够的空间来坐或躺下。"},{id:"scn_537",locationId:"loc_4ff",name:"P12. 饲养洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["一个长长的水池填满了洞穴，只有一座布满石笋的岛屿将其打断。","一具尸体面朝下漂浮在岛屿附近的水中。","戈尔·碎骨 使用这个洞穴来处理那些反对或使他不快的人。","一条水下隧道通向区域P13。","这条隧道被一扇坚固且上了锁的铁门所阻挡。"],flesh:`戈尔·碎骨 使用这个洞穴来处理那些反对或使他不快的人。

一条水下隧道通向区域P13。这条隧道被一扇坚固且上了锁的铁门所阻挡。四根短铁链末端连接着镣铐，固定在铁门的铁条上。使用盗贼工具，角色可以通过一次成功的DC 15敏捷检定打开锁。这扇门也可以通过一次成功的DC 25力量检定强行打开。

一面鼓矗立在岛上的石笋丛中。邪教徒用这面鼓在新鲜血肉等待它们时，提醒区域P13中的食尸鬼。

这具尸体属于一个碎浪派的新手，他在检查水下大门的手铐时靠得太近，结果被P13区的幽灵使麻痹并用爪子抓死。对尸体的搜索会发现一个戒指，上面有两个钥匙——一个可以打开大门，另一个可以打开大门的手铐。

在探索该区域南部时，角色们能听到区域P14的小魔怪在瀑布轰鸣上方的尖笑声。越接近P14区域，温度就会开始下降。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个长长的水池填满了洞穴，只有一座布满石笋的岛屿将其打断。一具尸体面朝下漂浮在岛屿附近的水中。"},{id:"scn_53e",locationId:"loc_4ff",name:"P13. 饥饿者",activation:{condition:{type:"always"},priority:0},skeleton:["人形生物的骨头散落在水底。","藤壶附着在洞穴的墙壁上，破碎骨头的堆叠拥挤在洞穴的壁架和小岛上。","盐水的气味与腐烂的恶臭相互交织。","七个食尸鬼们和一个妖鬼在这个洞穴里啃食骨头。","当有生物进入它们的巢穴时，食尸鬼会扑上去吞噬它并试图逃脱囚禁。"],flesh:"七个食尸鬼们和一个妖鬼在这个洞穴里啃食骨头。当有生物进入它们的巢穴时，食尸鬼会扑上去吞噬它并试图逃脱囚禁。",spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_53e"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"人形生物的骨头散落在水底。藤壶附着在洞穴的墙壁上，破碎骨头的堆叠拥挤在洞穴的壁架和小岛上。盐水的气味与腐烂的恶臭相互交织。"},{id:"scn_540",locationId:"loc_4ff",name:"P14. 痛苦之眼",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴里充满了冰冷的雾气。","冰柱和水晶体在壁架、天花板和墙壁上闪烁，一个中央小岛上覆盖着脆弱的冰层，上面蹲着一个皮肤苍白、赤裸上身、戴着眼罩的男人。","他周围是七个咯咯笑着、跳跃着、小鬼模样的冰制生物。","五个人类被展开四肢贴在远处的墙壁上，被冻在了上面，他们的皮肤因冻伤而变黑。","有的倒挂着，有的侧挂着；"],flesh:`一个独眼战栗（见第七章）和七个冰魔蝠居住在这个洞穴中。这个独眼战栗者被称为痛苦之眼，由其他邪教徒称呼，负责监督囚犯的折磨。冰mephits协助他。

粘在洞穴壁上的人类是地表人，他们对碎浪邪教了解得太多，或者阻碍了它。其中一些可能是未能阻止邪教的冒险者。决定这些囚犯是谁，如果他们中有人还活着，以及你希望他们扮演什么角色。

如果这里的战斗极其激烈，区域P16会知道准备应对危险。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_540"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴里充满了冰冷的雾气。冰柱和水晶体在壁架、天花板和墙壁上闪烁，一个中央小岛上覆盖着脆弱的冰层，上面蹲着一个皮肤苍白、赤裸上身、戴着眼罩的男人。他周围是七个咯咯笑着、跳跃着、小鬼模样的冰制生物。五个人类被展开四肢贴在远处的墙壁上，被冻在了上面，他们的皮肤因冻伤而变黑。有的倒挂着，有的侧挂着；有的缺失了手指、手和脚。"},{id:"scn_545",locationId:"loc_4ff",name:"P15. 反射室",activation:{condition:{type:"always"},priority:0},skeleton:["一个由珊瑚和贝壳制成的宝座矗立在这个房间中心的岩石上。","宝座的扶手上，一个镶有珍珠和蓝宝石的独角鲸角像权杖一样休息着。","洞穴水池的平滑表面反射出宝座的影像。","戈尔·碎骨 将这个房间用作他的私人休养所，在这里他思考他的邪教的未来。","在这里，水在en=Detect Magic法术的探查下散发出占卜魔法的辐射。"],flesh:`戈尔·碎骨 将这个房间用作他的私人休养所，在这里他思考他的邪教的未来。

在这里，水在en=Detect Magic法术的探查下散发出占卜魔法的辐射。每天一次，当一个生物将独角鲸角触摸到水池时，会立即施放一个en=Scrying法术。该法术仅限于窥探位于瀑布中的生物和地点，不允许豁免检定，并将水池表面变成一个窥视传感器。如果持有独角鲸角的人在触摸水池前没有指定目标，掷一个 d20。掷骰结果是水池中显示的区域编号，持续时间为法术的持续时间。（例如，掷出9点，窥视传感器就聚焦在P9区域。）

一条淹没的通道通向P14区。在水下游泳的角色会自动发现它。

一个单向的水下秘门可以旋转打开，通往一条向西北延伸的水下隧道。发现此门需要通过一次DC 15感知（察觉）检定。隧道尽头的另一扇类似秘门通向区域P11，无需进行属性检定即可发现。

镶嵌着蓝宝石和珍珠的独角鲸角价值10,000金币。在这个洞穴中持有独角鲸角的生物会感到它被拉向反射的水面。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_545_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个由珊瑚和贝壳制成的宝座矗立在这个房间中心的岩石上。宝座的扶手上，一个镶有珍珠和蓝宝石的独角鲸角像权杖一样休息着。洞穴水池的平滑表面反射出宝座的影像。"},{id:"scn_54a",locationId:"loc_4ff",name:"P16. 暗潮小屋",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴南端的瀑布声可以从北面接近时听到。","一个简陋的石屋坐落在宽阔水池中央的石岛上。","水从洞穴的天花板滴落，瀑布的轰鸣声在四周回荡。","两个隐藏在水下的水诡作为两个居住在岛上小屋中的暗潮骑士（见第七章）的绑定坐骑。","另一名骑士正在屋内休息。"],flesh:`这个洞穴南端的瀑布声可以从北面接近时听到。

两个隐藏在水下的水诡作为两个居住在岛上小屋中的暗潮骑士（见第七章）的绑定坐骑。另一名骑士正在屋内休息。

这个小屋里有两张用渔网制成的吊床，以及骑士们的武器、衣物和个人物品。这些个人物品中没有值钱的东西。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_54a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个简陋的石屋坐落在宽阔水池中央的石岛上。水从洞穴的天花板滴落，瀑布的轰鸣声在四周回荡。",dmGuidance:"当角色们首次到达时，一名骑士在岛上站岗；"},{id:"scn_54c",locationId:"loc_4ff",name:"P17. 元素守护者",activation:{condition:{type:"always"},priority:0},skeleton:["水从北面的瀑布流入这个洞穴，然后流过南面的第二个瀑布。","浓雾遮掩着洞穴的天花板，只有偶尔的钟乳石穿透雾气。","水面在大波浪中起伏。","天花板距离食客的表面有30尺。","一个水元素侍从（见第七章）潜伏在水下，但会上升攻击那些没有穿着水教徒服饰的入侵者。"],flesh:"天花板距离食客的表面有30尺。一个水元素侍从（见第七章）潜伏在水下，但会上升攻击那些没有穿着水教徒服饰的入侵者。",spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:[],encounterIds:["enc_54c"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"水从北面的瀑布流入这个洞穴，然后流过南面的第二个瀑布。浓雾遮掩着洞穴的天花板，只有偶尔的钟乳石穿透雾气。水面在大波浪中起伏。"},{id:"scn_54e",locationId:"loc_4ff",name:"P18. 残骸",activation:{condition:{type:"always"},priority:0},skeleton:["大雨猛烈地敲打着这个巨大的洞穴，其墙壁和天花板在暴风雨中消失了。","即使北面、西面和南面的瀑布的轰鸣声，在雨水的噪音下也变得安静。","在洞穴的中心，破碎的帆船船体侧倾着。","船体上附着着藤壶。","人形骷髅从绳索上垂下，或以混乱的堆叠躺着，海藻悬挂在船舷上。"],flesh:`在洞穴的中心，破碎的帆船船体侧倾着。船体上附着着藤壶。人形骷髅从绳索上垂下，或以混乱的堆叠躺着，海藻悬挂在船舷上。

雨水使得整个区域2，残骸两侧的强洋流将生物拉向P19a和P19b区域。尽管洞窟巨大，但此处的水深仅有5尺。

一只多头蛇在这些残骸中筑巢，它会攻击任何不是戈尔·碎骨的入侵者。

奥莉德拉 将水节点的力量传递给这些船只，作为她力量的展示，将它们交给了戈尔·碎骨。其中一艘残骸是曾经将年轻的戈尔·碎骨强行征入残酷奴役的Tethyrian商船。另一艘是攻击Tethyrian商船的同一Calishite海盗船，这个事件导致Gar被抛弃并失去了他的手臂给鲨鱼。

残骸形成了坚实的地面，但在大多数地方，它们是3，在那些没有布满洞和碎裂木头的地方，雨水使它们变得湿滑。任何尝试复杂动作，或采取疾跑或撤离动作的角色，必须通过一个DC 10的敏捷（特技）检定，否则会从残骸上跌落。

船只侧倾着。根据您的选择，船只可能有多层垂直地形、悬挂的帆和倾斜的桅杆，角色们可以攀爬或用作走道。

卡利什海盗船携带着一个装满宝藏的箱子。搜索残骸的角色们找到了这个箱子，里面包含一把+1 弯刀（+1弯刀），一个炼金壶（炼金罐），1,200 gp（金币），一颗价值5,000 gp的钻石，以及两颗各价值1,000 gp的小红宝石。

Tethyrian商船的货舱已经被清空，它的补给早已消失。船上的一具骷髅穿着一套装饰有贝壳图案的精美鳞甲。这套鳞甲是水手护甲（水手盔甲）。`,spotlightRefs:[],presentNpcIds:["npc_olhydra","npc_gar_shatterkeel"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_54e_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"大雨猛烈地敲打着这个巨大的洞穴，其墙壁和天花板在暴风雨中消失了。即使北面、西面和南面的瀑布的轰鸣声，在雨水的噪音下也变得安静。"},{id:"scn_554",locationId:"loc_4ff",name:"P20. 水之传送门",activation:{condition:{type:"always"},priority:0},skeleton:["一个小岛从湖中升起，位于三个轰鸣的瀑布的中心。","岛上边缘装饰着玫瑰色、象牙色和淡紫色的珊瑚。","一个巨大的、闪烁的水球悬浮在岛屿上方。","更小的水球从大水球中出现，向外漂移，并在湖面上几尺的空中悬浮。","环境光线揭示了洞穴的天花板，它位于岛屿上方八十尺处，挂满了无数的钟乳石。"],flesh:`洞穴地面逐渐向岛屿上升，以至于在洞穴周边的水深为20尺，而在岛屿10尺范围内水深仅为5尺。

如果Gar退到了节点，并且角色们击败了另外两个元素先知，请使用"与戈尔·碎骨的遭遇"部分。如果Gar是唯一剩下的先知，请使用"与奥莉德拉的遭遇"部分。

每个水球悬浮于水面1英尺高处，保持静止直至被生物触碰，随后会包裹该生物并将其通过北侧隧道（途经区域P18、P17和P2）运送到区域P1。水球飞行速度为10英尺，包裹在内的生物会持续获得en=Water Breathing法术效果。运输途中，被包裹生物可随时消耗一个动作游出水球。每个水球仅能承载单一生物，并在抵达目的地时破裂。水球免疫所有伤害，但干燥粉可将其摧毁。

如果一个球体被摧毁或离开了这个洞穴，另一个就会从水门中浮现出来代替它的位置。

来自区域P6的底栖魔鱼与来自区域P9的两只甲伏怪守卫着传送门。角色初次抵达时，这些生物潜藏在洞穴的西南角落。底栖魔鱼企图杀死或奴役角色，夺取水溺，并取代戈尔·碎骨成为奥莉德拉的先知。

戈尔·碎骨（见第七章）站在水门前的岛上，开始他的仪式来召唤奥莉德拉。他由一个水元素和三只鳄鱼守护，这些鳄鱼在岛上绕圈，攻击任何接近的creature。

Gar在这里做出最后的抵抗。他无法带着水溺撤退到水元素位面，并且他拒绝放弃他那悲惨的使命。水溺留在了他倒下的地方。

戈尔·碎骨站在岛上，无人守护。他高举他的三叉戟并呼喊："用这把钥匙我召唤我的女主人！" 一股黑暗的流动从传送门中涌出，形成了一个巨大的水元素，它有着珍珠般，邪恶的眼睛。这就是奥莉德拉，邪恶水之公主（见第七章）。奥莉德拉专注于留在这个世界中作恶，特别是让水溺远离角色们。

当奥莉德拉出现时，湖中的水位在每回合结束时上升2尺。由于洞穴中的瀑布高度为40尺，湖泊在20回合后上升到P9、P16和P18区域的水平。一旦水位达到瀑布的顶部，水就会停止上升，达到60尺深。

水之传送门是一个直径13尺的水球，它悬浮在岛屿上方。

通过传送门的角色们到达水元素位面下的水域，在那里奥莉德拉出现来摧毁他们。角色们可以撤退回传送门；然而，奥莉德拉在仪式完成之前不能通过传送门。

角色们只能通过将水溺投入传送门来关闭它，在此过程中摧毁水溺。如果传送门在奥莉德拉仍然存在于这个世界时关闭，她将被迫返回水元素位面。Plunging Torrents中不再形成更多的水球，节点中的水也恢复到正常水平。在接下来的几天里，剩余的大部分水被引流到周围的土地中。`,spotlightRefs:[],presentNpcIds:["npc_gar_shatterkeel","npc_olhydra"],availableInfoIds:["info_pota_portal_rites"],encounterIds:["enc_pota_p20_aboleth","enc_pota_p20_gar","enc_pota_p20_olhydra"],treasureSlotIds:[],eventIds:["evt_pota_water_portal"],tone:"tension",_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个小岛从湖中升起，位于三个轰鸣的瀑布的中心。岛上边缘装饰着玫瑰色、象牙色和淡紫色的珊瑚。一个巨大的、闪烁的水球悬浮在岛屿上方。更小的水球从大水球中出现，向外漂移，并在湖面上几尺的空中悬浮。环境光线揭示了洞穴的天花板，它位于岛屿上方八十尺处，挂满了无数的钟乳石。",dmGuidance:`如果角色们之前击败了戈尔·碎骨，请使用"与阿波洛斯的遭遇"部分。
当角色首次抵达时，三个直径7英尺的水球在此洞穴中飘浮。
当角色们击败他时，他变成了墨水般的水流逃走。`,mapGeometry:{imageRef:"adventure/PotA/063-poa05-08.webp"},offerableQuestIds:["qst_main_pota"]},{id:"scn_55d",locationId:"loc_55d",name:"黑色晶洞",activation:{condition:{type:"always"},priority:0},skeleton:["黑曜石洞穴是一个自然形成的洞穴，其特点是发光的紫罗兰色水晶缝隙。","马洛斯·恩雷尔使用铁牙将这些洞穴转变为一个土元素节点。","在黑曜石洞穴最大的洞穴中有一个传送门，通向元素位面土域的欧雷莫克的领域。","来自那个地方的奇异creature已经穿过大门并现在居住在洞穴中，而元素位面的原始能量正在渗透出来，正慢慢地将黑曜石洞穴转变为欧雷莫克领域的一种反映。","这个区域有以下特征。"],flesh:`黑曜石洞穴是一个自然形成的洞穴，其特点是发光的紫罗兰色水晶缝隙。马洛斯·恩雷尔使用铁牙将这些洞穴转变为一个土元素节点。在黑曜石洞穴最大的洞穴中有一个传送门，通向元素位面土域的欧雷莫克的领域。来自那个地方的奇异creature已经穿过大门并现在居住在洞穴中，而元素位面的原始能量正在渗透出来，正慢慢地将黑曜石洞穴转变为欧雷莫克领域的一种反映。

这个区域有以下特征。任何例外情况会在适用的区域中注明。

即使他还没有遇到角色们，马洛斯已经在他的视觉中看到了他们。这位土元素先知向黑曜石洞穴中的所有邪教徒描述了角色们。

洞穴的天花板高30尺，而隧道高15尺。

大多数区域由发出柔和紫罗兰色光芒的水晶形成物昏暗地照亮。

每30分钟检查一次随机遭遇。掷一个 d20 并参考以下表格，以确定角色们遇到了什么，如果有的话：

附近的墙壁膨胀并裂开，渗出浓厚的黑色泥浆。

一次震动导致天花板的一部分在随机一名队伍成员上方坍塌。目标必须成功进行一次 DC 15 敏捷豁免，否则将受到21（6d6）点钝击伤害，并被击倒 倒地 并被掩埋。当以这种方式被掩埋时，目标将处于 束缚 状态，无法呼吸或站起。一个生物可以使用一个动作来救出自己或另一个被掩埋的生物，需成功进行一次 DC 15 力量检定。

附近的墙上裂开了一条裂缝，从中伸出了一尺长的发光紫色水晶。

一阵震颤导致一个深度为 1d6 × 10 英尺的裂缝在一位队伍成员（随机决定）脚下的地面裂开。受影响的队伍成员必须成功通过一个 DC 15 敏捷豁免检定，否则会掉入裂缝，并像正常情况下一样受到钝击伤害，除非他们被绑住或以其他方式防止坠落。裂缝的墙壁很粗糙，可以通过一个成功的 DC 10 力量（运动）检定爬上来。

离队伍30尺内的钟乳石开始像融化的蜡一样滴落。当变化停止时，每个钟乳石已经增长了 1d4 尺。如果钟乳石触碰到对面的表面，它就会变成一个自然的柱子。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[135],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`如果队伍中有NPC，请确保也将他们计算在内。
如果队伍中包含NPC，请务必也将他们计算在内。`,randomTableIds:["tbl_55d_0"],offerableQuestIds:["qst_main_pota"]},{id:"scn_56a",locationId:"loc_55d",name:"G1. 守卫者大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴位于一条蜿蜒下行的隧道尽头，隧道起始于邪眼之巢的 区域F13。","这个洞穴的粗糙墙壁上升至一个拱形天花板，上面悬挂着钟乳石和成簇的细长、发光的水晶，它们将洞穴沐浴在柔和的紫罗兰色光芒中。","通道向东和西延伸。","向东，隧道上升。","西侧的通道两侧是一对二十尺高的粗犷人形石雕，它们的面部是严厉的禁止面具。"],flesh:`这个洞穴位于一条蜿蜒下行的隧道尽头，隧道起始于邪眼之巢的 区域F13。

两名黑土守卫（见第七章)站在雕像前。未佩戴伪装的角色将被认出真实身份。伪装成土教信徒或教派囚犯的角色必须进行一次魅力(欺瞒)检定，与守卫的感知(洞悉)检定相对抗；如果所有角色都成功，守卫将被愚弄并允许他们通过。

如果战斗在这里爆发，两个土元素会从地板中间破土而出并加入战斗。这些元素生物体内有发光的紫色水晶脉络；每个元素生物会散发出2，半径15尺，并且在此范围之外再延伸15尺2。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:["enc_56a"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[135],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴的粗糙墙壁上升至一个拱形天花板，上面悬挂着钟乳石和成簇的细长、发光的水晶，它们将洞穴沐浴在柔和的紫罗兰色光芒中。通道向东和西延伸。向东，隧道上升。西侧的通道两侧是一对二十尺高的粗犷人形石雕，它们的面部是严厉的禁止面具。每个雕像旁边都有一个穿着石甲的人类守卫。"},{id:"scn_56c",locationId:"loc_55d",name:"G2. 凯尔塔和戈尔克斯",activation:{condition:{type:"always"},priority:0},skeleton:["这个圆形房间的墙壁上密布着发光的水晶。","房间中央是一个肥胖的蛋形生物，它有三只手臂、三只腿、沉重的眼皮眼睛和一张宽阔的嘴巴，位于它多石的卵形身体上。","一个看起来令人毛骨悚然的土元素邪教徒正随意地将宝石投入这个生物张开的嘴里。","一个名叫凯尔塔的融石者（见第七章)与他在G17区域发现的一只石鼎兽一起守夜。","凯尔塔相信这个被称为戈尔克斯的石鼎兽，是欧雷莫克派来的使者，用来测试邪教的价值。"],flesh:`一个名叫凯尔塔的融石者（见第七章)与他在G17区域发现的一只石鼎兽一起守夜。当石鼎兽的生命值降至20点以下时，它会逃跑，但凯尔塔会战斗至死。

凯尔塔相信这个被称为戈尔克斯的石鼎兽，是欧雷莫克派来的使者，用来测试邪教的价值。实际上，这个creature是出于好奇穿过土元素传送门的。由于凯尔塔急于取悦戈尔克斯，它没有做任何事来消除他的这种信念。

这只石鼎兽说服凯尔塔认为欧雷莫克需要贡品，因此凯尔塔从每个经过的人那里索取贡品。凯尔塔对贡品如此着迷，以至于他忽略了路人的外表和通常的口令。当他注意到角色们时，他问道："你们带来了贡品吗？"

供奉包括将贵金属或宝石扔进石鼎兽的口中。Keltar严肃地告知捐献者，这些财宝被运送到欧雷莫克的领域。

泽克石怪能嗅到队伍的财富气息，因此它要求用土族语缴纳500金币的贡品。若队伍照办，凯塔会问：「吾王对此贡品可还满意？」戈克斯则回答：「王子殿下对此供奉甚是欣喜。」凯塔认定石怪已认可队伍资格，便放他们通行。他还会友善地回答询问。若队伍未作伪装，他会指引其前往G3区域，作为对其资质的另一项测试。若认为对方是教徒，凯塔会指引他们前往区域G6，并提醒安全通过石桥（G9区域）的暗语：「吾辈行走于欧雷莫克的阴影之中！」

与此同时，凯尔塔逃向G6区域。

石鼎兽的胃里仍然含有一些未消化的供奉物品：9金币，三块鸡蛋大小的粗糙月光石，每块价值25金币，三块红玛瑙每块价值50金币，以及一块破裂的紫水晶价值100金币。Keltar携带两块红玛瑙，并在口袋里藏有一张折叠的en=Investiture of Stone卷轴（见附录 B）。`,spotlightRefs:[],presentNpcIds:["npc_ogr_moch","npc_marlos_urnrayle","npc_rhundorth"],availableInfoIds:[],encounterIds:["enc_56c"],treasureSlotIds:["trs_56c_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[135],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个圆形房间的墙壁上密布着发光的水晶。房间中央是一个肥胖的蛋形生物，它有三只手臂、三只腿、沉重的眼皮眼睛和一张宽阔的嘴巴，位于它多石的卵形身体上。一个看起来令人毛骨悚然的土元素邪教徒正随意地将宝石投入这个生物张开的嘴里。",dmGuidance:`如果角色们攻击任何一方，另一方也会以同样的方式反击。
如果角色们拒绝支付，石鼎兽攻击携带最多财宝的角色。`},{id:"scn_571",locationId:"loc_55d",name:"G3. 石绳怪巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴是一片由石笋和钟乳石组成的密林。","几件武器和破碎的盔甲碎片散落在房间中心的尖塔之间。","一只石绳怪悬挂在碎片上方的天花板上。","它在其他人开始避开这个区域之前吃掉了几个邪教徒。","渴望更多的类人生物肉，ropper试图制服尽可能多的冒险者。"],flesh:`一只石绳怪悬挂在碎片上方的天花板上。它在其他人开始避开这个区域之前吃掉了几个邪教徒。渴望更多的类人生物肉，ropper试图制服尽可能多的冒险者。当它的生命值降至20点时，它闭上眼睛并收回触手，希望角色们不要打扰它。

散落在破碎的武器和盔甲中的有65金币，一个带有玛瑙眼睛的黄铜小恶魔雕像，价值180金币，以及一枚善泳戒指。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:["enc_571"],treasureSlotIds:["trs_571_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴是一片由石笋和钟乳石组成的密林。几件武器和破碎的盔甲碎片散落在房间中心的尖塔之间。"},{id:"scn_574",locationId:"loc_55d",name:"G4. 迷惑水晶",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴是一片发光水晶的森林，它们像树叶一样生长在细长的石柱上，这使得很难判断这个房间的真正大小。","靠在其中一根柱子上的是一个穿着石胸甲的死人。","从东北隧道传来雷鸣般的噪音，该隧道只有5尺高，并且向区域G6缓缓上升。","隧道以一堵泥流墙结束（见区域G6）。","任何生物穿过泥流时会受到10（3d6）钝击伤害。"],flesh:`任何在回合中首次进入洞穴或在洞穴内开始其回合的生物必须成功通过一次DC 10的感知豁免检定，否则将受到en=Confusion法术的影响。一旦生物成功通过豁免检定，它在24小时内对此效果免疫。

从东北隧道传来雷鸣般的噪音，该隧道只有5尺高，并且向区域G6缓缓上升。隧道以一堵泥流墙结束（见区域G6）。任何生物穿过泥流时会受到10（3d6）钝击伤害。

这具尸体属于一个被他的邪教同伴杀害的黑土守卫。守卫身上没有携带任何有价值的东西。

通往 区域G5 的"秘密"入口是一条被6环 en=Major Image 法术伪装成实心石壁的隧道。从远处辨别其本质需进行一次 DC 19 智力（调查）检定，但直接交互会立即识破幻象。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴是一片发光水晶的森林，它们像树叶一样生长在细长的石柱上，这使得很难判断这个房间的真正大小。靠在其中一根柱子上的是一个穿着石胸甲的死人。"},{id:"scn_579",locationId:"loc_55d",name:"G5. 地下世界入口",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴后面的一个洞口形成了一个隧道的入口，这个隧道深入到地球的更深处。","这个隧道没有像这些洞穴中其他地方生长的发光水晶，而且从它的深处吹来一阵寒冷、恶臭的微风。","这条隧道延伸数英里，最终分支进入下层黑暗的洞穴。"],flesh:"这条隧道延伸数英里，最终分支进入下层黑暗的洞穴。",spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴后面的一个洞口形成了一个隧道的入口，这个隧道深入到地球的更深处。这个隧道没有像这些洞穴中其他地方生长的发光水晶，而且从它的深处吹来一阵寒冷、恶臭的微风。"},{id:"scn_57b",locationId:"loc_55d",name:"G6. 泥石流瀑布",activation:{condition:{type:"always"},priority:0},skeleton:["泥水飞溅、翻腾的低沉轰鸣声充满了这个洞穴，墙壁和天花板上布满了闪闪发光的紫罗兰色水晶脉纹。","一股泥流通过屋顶上的裂缝倾泻而下，直到它撞击到一个十尺高的岩架上，然后从岩架上翻滚而下，流入一条细泥河中，通过东北角的洞口流出。","一条石阶通向岩架，那里有一条通道向北延伸。","下层的隧道通往南方。","大地教团的信徒将这条元素泥流称为泥流河。"],flesh:`大地教团的信徒将这条元素泥流称为泥流河。这条河流宽6英尺，深3英尺，在到达区域G11时总共下降了40英尺。任何在本回合第一次进入河流或在其回合结束时停留在河流中的生物必须进行一次DC 10的力量豁免，否则会摔倒倒地并被冲向区域G11的方向20英尺。在泥中倒地的生物必须使用一个动作并成功通过DC 15的力量（运动）检定才能站起来。在此洞穴与区域G11之间的隧道部分中无法站立；这段河流完全被泥浆淹没。

一个生物可以使用一个动作将自己或另一个在其触及范围内的生物从泥流中拉出，这需要通过一个成功的 DC 15 力量（运动）检定。

在泥浆中每移动1尺需要消耗2尺的速度，如果生物试图逆流而动，则需要消耗5尺的速度。

一个5尺高的隧道隐藏在泥浆后面，通往G4区域。生物必须穿过泥浆才能到达隧道，在穿过过程中会因掉落的泥浆受到10（3d6）点钝击伤害。

洞穴的西部比东部高10英尺，成功通过一个DC 10力量（运动）检定可以攀爬到壁架。通往壁架的石头阶梯位于泥流之北侧。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"泥水飞溅、翻腾的低沉轰鸣声充满了这个洞穴，墙壁和天花板上布满了闪闪发光的紫罗兰色水晶脉纹。一股泥流通过屋顶上的裂缝倾泻而下，直到它撞击到一个十尺高的岩架上，然后从岩架上翻滚而下，流入一条细泥河中，通过东北角的洞口流出。一条石阶通向岩架，那里有一条通道向北延伸。下层的隧道通往南方。"},{id:"scn_580",locationId:"loc_55d",name:"G7. 空荡的洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个小洞穴被发光的紫罗兰色水晶条纹覆盖。","向南的隧道急剧转向东方，而向北的隧道也向下倾斜并同样朝向东方。","这个区域非常适合随机遭遇。"],flesh:"这个区域非常适合随机遭遇。",spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个小洞穴被发光的紫罗兰色水晶条纹覆盖。向南的隧道急剧转向东方，而向北的隧道也向下倾斜并同样朝向东方。"},{id:"scn_582",locationId:"loc_55d",name:"G8. 失落皇冠洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["前方洞穴传来令人毛骨悚然的尖叫声。","这些哭声只持续了几秒钟，然后突然停止。","一旦队伍能看到洞穴，请阅读以下内容：","这个洞穴的地面上散落着类人生物的骨头。","一些骨架部分完好，它们的胸腔被压在上面的巨石砸碎。"],flesh:`一旦队伍能看到洞穴，请阅读以下内容：

这顶带冠头盔是一件古老的矮人遗物（见下面的"财宝"），当使用en=Detect Magicspell仔细检查时，它会发出强烈的魔法辐射。一旦有人试图拿走它，一个名叫Reulek的灰矮人矮人宝藏猎人的恶灵就会出现，并使用他的恐怖面容，尖叫着说："小偷！从我的愚蠢中吸取教训！即使在死后，Besilmer的矮人也守护着他们的传说中的财宝！"当幽灵念出这些话时，四个很久以前在这里的洞穴坍塌中被杀死的幽魂显现出来并攻击生者。

大地教派的信徒在黑色大地神殿中发现了这顶带冠的头盔，但未能意识到其重要性。鲁莱克后来将其偷走，并正潜行前往区域G5时，在这座洞穴中成为了那些幽灵的猎物。

Reulek相信是因为他偷了头盔，幽灵才杀了他。他的灵魂被束缚在这个遗物上，因为他认为在他得到永恒的安息之前，他必须将它归还给合法的所有者。

他知道贝西尔默最后一位国王的遗骸位于狩猎斧大厅之下。他请求角色们帮助他将带冠的头盔归还给国王的墓穴。同意的角色会发现鲁莱克通过与遗物的联系陪伴他们，尽管他只有在你希望他这么做的时候才会显现。

Reulek是一个名叫Obratu的鬼怪的合作伙伴。"

这个金刺头盔是贝希默之失落王冠（见第七章）。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:["enc_582"],treasureSlotIds:["trs_582_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`前方洞穴传来令人毛骨悚然的尖叫声。这些哭声只持续了几秒钟，然后突然停止。

这个洞穴的地面上散落着类人生物的骨头。一些骨架部分完好，它们的胸腔被压在上面的巨石砸碎。只有一个骨架保持完整，它紧抱着胸前一个敞开式的钢盔，上面装饰着一个金色的圆环，圆环上方伸出七个小金刺。`,dmGuidance:`当队伍首次接近这个区域时，请阅读以下文本：
如果冒险者击败了幽灵并与鬼魂交谈，鲁莱克会解释他的困境。
如果角色们指出幽灵不是矮人，可能并不在意皇冠，鲁莱克承认他的死亡可能与这个遗物无关。
如果队伍拒绝帮助，或者在任何时候Reulek感觉到他们不会履行承诺，他会使用附身来强制执行协议。
如果队伍忠于交易，Reulek的灵魂会在他安息时感谢他们。
如果角色们击败Obratu，他们可能会从找到的笔记中认出他的名字。
当角色们提到Obratu时，Reulek耸了耸肩，说："那只是权宜之计的伙伴关系。`},{id:"scn_588",locationId:"loc_55d",name:"G9. 狭窄的石桥",activation:{condition:{type:"always"},priority:0},skeleton:["以下框起来的文本假定角色们通过向北或向南的隧道到达这里：","通道通向一座由巨石环绕的平坦石桥。","这座桥宽五尺，没有栏杆，横跨一个宽阔的洞穴，洞穴中回荡着奇怪的咔嗒声。","这座桥长40英尺，非常坚固。","若豁免失败且差值大于或等于5，该生物将被击落桥下。"],flesh:`以下框起来的文本假定角色们通过向北或向南的隧道到达这里：

这座桥长40英尺，非常坚固。桥上若有一个生物在单次攻击中受到10点或更多伤害，则必须进行一次DC 10敏捷豁免。若豁免失败且差值大于或等于5，该生物将被击落桥下。若是其他失败情况，该生物会被击倒倒地但不会掉下桥。桥面距离周围洞穴（G10区）的地面有40英尺高。

两个石人守卫着这座桥——每个桥头各一个。它们看起来像普通的巨石，直到它们睁开眼睛并开始移动。要想不惊动石人过桥，过桥者中的某人必须说出邪教的口令："我们走在欧雷莫克的阴影下！"否则，石人会等到入侵者走到桥中央再发动攻击，首先通过活化它们附近的巨石并命令它们滚过桥。

这些咔嗒声是由周围洞穴中的恐爪怪发出的。

在桥上的战斗会吸引G10区域的恐爪怪，它们会聚集在桥下并攻击任何坠落的生物。`,spotlightRefs:[],presentNpcIds:["npc_ogr_moch","npc_marlos_urnrayle","npc_rhundorth"],availableInfoIds:[],encounterIds:["enc_588"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"通道通向一座由巨石环绕的平坦石桥。这座桥宽五尺，没有栏杆，横跨一个宽阔的洞穴，洞穴中回荡着奇怪的咔嗒声。"},{id:"scn_58c",locationId:"loc_55d",name:"G10. 咔嗒咔嗒",activation:{condition:{type:"always"},priority:0},skeleton:["这个长长的洞穴在大地上划出一条宽阔的路径。","其参差不齐的墙壁看起来就像是石头自己撕裂了一样。","破碎的骨头散落在乱石之中。","高高的上方，一座狭窄的石桥横跨着峡谷。","深渊中回响着咔嗒声，听起来有点像是掉落的石头。"],flesh:`洞穴的天花板高80尺，而桥（G9区域）位于洞穴地面上方40尺处。

八只恐爪怪隐藏在墙壁的裂缝中，通过一系列难以解读的咔嗒声和敲击声相互交流。恐爪怪会攻击任何试图穿越它们的领地或从桥上掉落的生物。

在一个钩状恐魔裂隙的深处隐藏着一条狭窄的通道，向上通向区域G7，长度为20英尺。发现这个隧道的入口需要通过一次难度等级为DC 15的感知（察觉）检定，但如果一个角色通过进入裂隙来探索，则无需进行能力检定即可发现这个隐藏的隧道。

角色们在恐爪怪先前受害者的破碎骨头中搜寻，发现了17枚银币，四块蓝色石英（每块10金币），一个镶有青金石的银制手镜（270金币），以及一颗法力再生珍珠。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:["enc_58c"],treasureSlotIds:["trs_58c_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个长长的洞穴在大地上划出一条宽阔的路径。其参差不齐的墙壁看起来就像是石头自己撕裂了一样。破碎的骨头散落在乱石之中。高高的上方，一座狭窄的石桥横跨着峡谷。深渊中回响着咔嗒声，听起来有点像是掉落的石头。"},{id:"scn_591",locationId:"loc_55d",name:"G11. 元素泥潭",activation:{condition:{type:"always"},priority:0},skeleton:["一股浓稠的泥浆从一面墙上的裂缝中喷涌而出，流了一小段距离后汇聚成一个旋转的泥潭。","站在泥潭旁边的是一个被盔甲包裹的土元素，以及几个由浓稠、滴落的泥浆组成的小型生物。","泥流从G6区域流入这个洞穴。","一个土元素侍从（见第七章)在守卫，无视六个泥魔蝠的挑衅。","这个地元素士兵保护着水池，攻击入侵者。"],flesh:`泥流从G6区域流入这个洞穴。

一个土元素侍从（见第七章)在守卫，无视六个泥魔蝠的挑衅。这个地元素士兵保护着水池，攻击入侵者。小鬼们也会加入战斗，但与地元素士兵不同，每个生命值降至10点以下的小鬼会逃跑。

关于穿越泥浆河流的规则参见区域G6。若生物在其回合结束时位于漩涡池中，则必须通过一次DC 15力量豁免检定，否则将被吸入土元素位面而消失。用绳索固定的生物可通过成功的DC 15力量（运动）检定被拉向池边10尺。

水池每小时有5%的非累积几率生成一个新的泥沼小鬼。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:["enc_591"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一股浓稠的泥浆从一面墙上的裂缝中喷涌而出，流了一小段距离后汇聚成一个旋转的泥潭。站在泥潭旁边的是一个被盔甲包裹的土元素，以及几个由浓稠、滴落的泥浆组成的小型生物。",dmGuidance:"如果角色们在不被注意的情况下观察洞穴几分钟，他们会看到地元素士兵俯身在水池上，从泥浆中抓起一只幼小的泥魔蝠。"},{id:"scn_594",locationId:"loc_55d",name:"G12. 冥想大厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴的墙壁在规律的间隔处被小壁龛打破，每个壁龛中都放着一块发光的紫罗兰色水晶碎片。","这里有四名土教信徒。","每个人都跪着或坐在一个壁龛前，这种方式暗示着一种冥想的形式。","在任何给定时间，这个洞穴里有两个黑土守卫，一个穴居鲨鱼，和一个融石者（见第七章，了解这些邪教徒的具体数值）。","守卫们在洞穴的南部，其他人在北部区域。"],flesh:`在任何给定时间，这个洞穴里有两个黑土守卫，一个穴居鲨鱼，和一个融石者（见第七章，了解这些邪教徒的具体数值）。守卫们在洞穴的南部，其他人在北部区域。如果海伦蕾（见第七章）还没有被击败，她会代替石融者出现在这里。邪教徒们正在冥想，使用水晶作为焦点。他们太入迷了，以至于听不到G9或G13区域的战斗声。

洞穴北端放着几个桶和箱子。它们装有水和口粮。`,spotlightRefs:[],presentNpcIds:["npc_hellenrae","npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:["enc_pota_g12_stonemelder","enc_pota_g12_hellenrae"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴的墙壁在规律的间隔处被小壁龛打破，每个壁龛中都放着一块发光的紫罗兰色水晶碎片。这里有四名土教信徒。每个人都跪着或坐在一个壁龛前，这种方式暗示着一种冥想的形式。",dmGuidance:"如果角色们安静地接近此区域且没有2光源，他们可以突袭里面的土邪教徒们。"},{id:"scn_596",locationId:"loc_55d",name:"G13. 鲨蜥兽犬舍",activation:{condition:{type:"always"},priority:0},skeleton:["巨石被用来建造粗糙的无顶围栏，类似于畜栏——北边有三个，南边有三个。","奇怪的马鞍和挽具堆放在洞穴中央，而长矛和刺棒靠在墙上。","有50%的几率，一只名为Rorgrin的穴居鲨鱼（见第七章）和他的训练有素的鲨蜥坐骑在这里；","否则它们在G14区域。","如果它们在这里，Rorgrin和他的坐骑会清晰可见，并且会在看到入侵者时发起攻击。"],flesh:`有50%的几率，一只名为Rorgrin的穴居鲨鱼（见第七章）和他的训练有素的鲨蜥坐骑在这里；否则它们在G14区域。如果它们在这里，Rorgrin和他的坐骑会清晰可见，并且会在看到入侵者时发起攻击。

北面和南面的围栏是10英尺高墙围成的犬舍。南面的犬舍是空的。北面的犬舍里有三只年轻的沙虫（使用犀牛的数据，但它们用咬击取代了角击）。如果罗格林不在场，这些沙虫正在睡觉。角色可以通过成功通过一个DC 11的敏捷（隐匿）检定来悄悄绕过正在睡觉的沙虫。如果检定失败或其中一只或多只沙虫受到攻击，它们会醒来。如果罗格林在G14区域，被惊醒的沙虫会对陌生人发出嘶嘶声，提醒罗格林他们的存在。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:["enc_596"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"巨石被用来建造粗糙的无顶围栏，类似于畜栏——北边有三个，南边有三个。奇怪的马鞍和挽具堆放在洞穴中央，而长矛和刺棒靠在墙上。"},{id:"scn_598",locationId:"loc_55d",name:"G14. 罗格林的洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个小洞穴的后部被一个由破碎的岩石碎片制成的巢穴占据。","附近，一个铺在地上的睡袋上放着一个奇怪的马鞍作为枕头。","有一半的时间，这对组合在睡觉。",'藏在他的皮革马鞍"枕头"下，罗格林保管着一个小型皮革袋，里面装有91金币，两颗石榴石（每颗价值100金币），以及一瓶雷鸣抗性药水。'],flesh:`有一半的时间，这对组合在睡觉。

藏在他的皮革马鞍"枕头"下，罗格林保管着一个小型皮革袋，里面装有91金币，两颗石榴石（每颗价值100金币），以及一瓶雷鸣抗性药水。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:["enc_598"],treasureSlotIds:["trs_598_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个小洞穴的后部被一个由破碎的岩石碎片制成的巢穴占据。附近，一个铺在地上的睡袋上放着一个奇怪的马鞍作为枕头。",dmGuidance:"如果队伍在G13区域没有遇到Rorgrin，他们会在这里找到这只穴居鲨鱼和他的训练有素的鲨蜥坐骑。"},{id:"scn_59b",locationId:"loc_55d",name:"G15. 奥术铸造厂",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴的墙壁上排列着石板。","石板上覆盖着武器、盔甲碎片和各种工具。","在房间中央，蒸汽从一口沸腾的泥浆井中升起。",'这些石板是工作台，上面覆盖着用于雕刻石头和水晶的工具，以及武器和一些盔甲（见下面的"财宝"）。',"这里有两位石融者（见第七章）与一位矮人锻造大师伦多斯——来自米拉巴的代表之一（见下文）。"],flesh:`这些石板是工作台，上面覆盖着用于雕刻石头和水晶的工具，以及武器和一些盔甲（见下面的"财宝"）。

这里有两位石融者（见第七章）与一位矮人锻造大师伦多斯——来自米拉巴的代表之一（见下文）。若米拉吉·维扎恩（见第七章）幸存，他会取代其中一位石融者在此处。三只诺斯怪从暗处监视，准备在锻造过程中提供奥术洞察。这些诺斯怪是被迫效力的仆从，若有机会就会逃向区域G16。

伦多斯拥有一个警卫的具体数值，但未装备武器和护甲（AC 11）。他的力量为18，会说通用语和矮人语。如果可以选择武器，他更倾向于使用战锤（+6命中，1d8 + 4钝击伤害，或使用双手时1d10 + 4钝击伤害）。他是守序善良阵营。

伦多斯被征召到这里劳作，帮助土元素邪教制造盔甲和武器，以换取土元素邪教关押的其他代表不会受到伤害的承诺。他知道贤者布鲁登萨被留在了圣石修道院的矿井里，而德赛娜女士被气元素邪教的袭击者捕获。他还报告说，几天前，月亮精灵特雷西尔被交给了火元素邪教。

任何生物在回合中首次进入沸腾泥浆井，或在其回合开始时位于那里，将受到10点（3d6）火焰伤害。泥浆深5尺，由洞穴下方的火山口加热。

角色们在工作台上搜寻时，会发现几根水晶法杖、石制晨星锤和岩石盔甲碎片，以及一件由抛光水晶制成的+1 胸甲。它上面刻有大地的象征，并且会增强穿戴者的自私、贪婪或邪恶行为的冲动。`,spotlightRefs:[],presentNpcIds:["npc_rhundorth","npc_miraj_vizann","npc_marlos_urnrayle","npc_ogr_moch"],availableInfoIds:[],encounterIds:["enc_59b"],treasureSlotIds:["trs_59b_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[140],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴的墙壁上排列着石板。石板上覆盖着武器、盔甲碎片和各种工具。在房间中央，蒸汽从一口沸腾的泥浆井中升起。"},{id:"scn_5a1",locationId:"loc_55d",name:"G16. 石头大教堂",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴有一个由六根天然石柱支撑的拱形天花板。","从天花板突出的水晶生长物在一切事物上投射出一种病态的紫色光芒。","从向东下降的隧道传来响亮而持续的石头相互摩擦的声音。","如果区域G15内的诺斯怪撤退到这个洞穴，它们会蜷缩在房间的西端。"],flesh:"如果区域G15内的诺斯怪撤退到这个洞穴，它们会蜷缩在房间的西端。",spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[140],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴有一个由六根天然石柱支撑的拱形天花板。从天花板突出的水晶生长物在一切事物上投射出一种病态的紫色光芒。从向东下降的隧道传来响亮而持续的石头相互摩擦的声音。"},{id:"scn_5a3",locationId:"loc_55d",name:"G17. 土之传送门",activation:{condition:{type:"always"},priority:0},skeleton:["这个巨大的洞穴是一个充满异域风情的景观，有着高耸的石质扶壁、奇异扭曲的柱子和巨大的发光水晶碎片。","一条长长的台阶被刻在不平坦的地面上，蜿蜒穿过雄伟的石柱，通向洞穴的核心。","在那里，台阶攀升至一座不断变化形状的石碑底部，石碑发出雷鸣般的摩擦声，填满了这个巨大的洞穴。","如果马洛斯·恩雷尔在别处已被击败，这个洞穴由两个土元素侍从（见第七章)守卫，在明显的地方站在石碑前。",'如果Marlos撤退到这个洞穴，并且角色们已经击败了另外两位先知，请使用"与Marlos Urnrayle的遭遇"部分。'],flesh:`如果马洛斯·恩雷尔在别处已被击败，这个洞穴由两个土元素侍从（见第七章)守卫，在明显的地方站在石碑前。如果Marlos撤退到这个洞穴，并且角色们已经击败了另外两位先知，请使用"与Marlos Urnrayle的遭遇"部分。如果Marlos是最后一位剩下的先知，请使用"遭遇奥格莫奇"部分。

马洛斯·恩雷尔（见第七章）站在地之传送门前，试图召唤欧雷莫克。角色们发现他背对着他们，他那件华丽的斗篷的兜帽拉起，所以他看起来像是一个穿着考究的邪教牧师。两个黑土守卫（见第七章）在他身边侍候，四个石像鬼紧贴在最近的四根柱子上。Marlos继续念咒，直到他意识到角色们的到来。然后，他拉回兜帽并开始攻击。

马洛斯嘲笑角色们，挑战那些避开他目光的人来见证他的力量和美丽。如果有人设法直视他的目光并存活下来，这位美杜莎会感到愤怒，将他的攻击集中在这样的角色上。

先知在这里坚守阵地。他无法带着铁牙通过土元素传送门逃跑，他的骄傲不允许他放弃在节点的权力。铁牙和传送门仍然存在。

马洛斯·恩雷尔看起来和他前一节中的样子差不多。" 随着土元素传送门的液化，巨大的欧雷莫克形象出现（见第七章）。欧雷莫克专注于摧毁角色，对马洛斯的后果不太关心。元素王子的目标是留在这个世界并在这里巩固权力，然后再制造混乱。

这个单石碑是一个通往元素位面的土元素位面的传送门。单石碑的某部分在任何给定时间都处于液态，任何触碰到液态石头的生物都会被拉入土元素位面，靠近欧雷莫克的居所。邪恶土元素的王子可以在自己的家园位面上攻击入侵者，但在适当的仪式完成之前，不能通过传送门追击它们进入世界。

角色们只能通过用铁牙击中石碑来关闭传送门。当元素武器击中石碑时，它会使原本不可摧毁的石头出现缺口，导致传送门在一场研磨的展示中内爆，将粉碎的岩石和水晶洒满整个区域。当这个事件发生时，欧雷莫克被迫返回他的家乡平面，服务于邪教。除了Marlos之外的邪教徒会畏缩并逃跑。传送门被摧毁后，铁牙变成锈迹并分解。

当传送门坍缩时，会触发一次以巨柱原址为中心的en=Earthquake。五分钟后，整个洞窟会塌陷，掩杀所有仍滞留其中的生物。位于区域G9的桥梁同样会坍塌，而黑晶窟其他区域则保持完好。由于与土元素位面的联系被切断，黑晶窟将停止震颤和异常魔法效应，数日内逐渐恢复自然状态。`,spotlightRefs:[],presentNpcIds:["npc_marlos_urnrayle","npc_ogr_moch","npc_rhundorth"],availableInfoIds:["info_pota_portal_rites"],encounterIds:["enc_pota_g17_myrmidons","enc_pota_g17_marlos","enc_pota_g17_ogremoch"],treasureSlotIds:[],eventIds:["evt_pota_earth_portal"],tone:"tension",_meta:{sourcePages:[140],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个巨大的洞穴是一个充满异域风情的景观，有着高耸的石质扶壁、奇异扭曲的柱子和巨大的发光水晶碎片。一条长长的台阶被刻在不平坦的地面上，蜿蜒穿过雄伟的石柱，通向洞穴的核心。在那里，台阶攀升至一座不断变化形状的石碑底部，石碑发出雷鸣般的摩擦声，填满了这个巨大的洞穴。",dmGuidance:`当角色们击败他时，他变成了泥浆并融化消失了。
当角色们到达时，他高举铁牙并念诵道："用这把钥匙，我召唤出毁灭之山，伟大而可怕的欧雷莫克！`,mapGeometry:{imageRef:"adventure/PotA/066-poa05-10.webp"},offerableQuestIds:["qst_main_pota"]},{id:"scn_5a8",locationId:"loc_5a8",name:"哭泣的巨人",activation:{condition:{type:"always"},priority:0},skeleton:["哭泣的巨人坐落在一个火山裂缝的中心。","在矮人文明贝西尔默的鼎盛时期，这个整个区域充满了熔岩，热量和岩浆上升到城市的最低层，那里是铸造厂所在地。","当凡尼弗带着她的邪教到来时，她利用她与邪恶火之王子伊米西的联系，平息了岩浆并形成了留下的腔室。","现在，裂缝和熔岩管道作为火元素节点，作为火元素平面的延伸，导致熔岩流、火山灰风暴、液态火的喷发以及其他奇怪的元素效应。","该建筑群具有以下特征。"],flesh:`哭泣的巨人坐落在一个火山裂缝的中心。在矮人文明贝西尔默的鼎盛时期，这个整个区域充满了熔岩，热量和岩浆上升到城市的最低层，那里是铸造厂所在地。当凡尼弗带着她的邪教到来时，她利用她与邪恶火之王子伊米西的联系，平息了岩浆并形成了留下的腔室。现在，裂缝和熔岩管道作为火元素节点，作为火元素平面的延伸，导致熔岩流、火山灰风暴、液态火的喷发以及其他奇怪的元素效应。

该建筑群具有以下特征。任何例外情况将在它们适用的区域中注明。

隧道的天花板高15尺，房间的天花板高20尺。

这些不同的开放空间是由熔岩流形成的，熔岩表面结壳并冷却，而较热的中间部分则排走。在墙壁和天花板是实心的地方，表面像玻璃一样光滑，或者在液态石头分层流动的地方折叠起来。在其他地方，滴落和飞溅形成了类似石笋、钟乳石和类似一串葡萄的圆形气泡结构的形态。尽管这些形态非常坚固，但其中大部分仍然很热。

地板可能是平滑且圆润的，或者是平坦的。在某些地方，地板是一层地壳，下面有熔岩。

当生物在一个回合内首次进入熔岩或在其回合结束时处于熔岩中，它会受到 6d10 点火焰伤害。

节点的所有区域都被火焰或熔岩明亮地照亮。

流动熔岩的嘶嘶声和隆隆声在整个节点中都能听到。

地图上标出了三个热度强度区域。低强度区域虽然炎热不适，但不会对角色造成其他妨碍。在中强度和高强度区域中的角色将面临极端高温，如第五章"冒险环境"所述。在高强度区域中，避免力竭的DC从10开始。

角色们在哭泣巨像内部每度过30分钟，就掷一个d20骰子并参考下表。表后附有一些遭遇的解释。在中等强度区域，掷一个d20和一个d4骰子，从d20的结果中减去d4的结果。在高密度区域，使用d6骰子代替d4。

一个随机的角色踩到了地板上特别薄的一块地方。这个角色必须成功通过一个 DC 10 敏捷豁免检定，否则会掉入一个洞（百分之七十五的几率）或薄层下方的熔岩（百分之二十五的几率）。如果是洞的情况，角色会掉入一个空的岩浆袋中，高度为 1d4 × 10 英尺。熔岩造成的伤害如前所述。

一个气体泡突然点燃，创造出一个与en=Burning Hands法术相同的火焰爆发。锥形区域从一个随机角色的空间开始，并向一个随机方向发射。

在一轮的开始，岩浆滴在天花板上形成，并在一个20尺直径的区域内落下，对在回合中首次进入该区域或在其回合开始时位于那里的任何生物造成9（2d8）点火焰伤害。这些滴落物会点燃暴露的易燃物体。在一轮结束后的2d4轮后，岩浆雨结束。

一团烟云扬起，充满一个直径40尺的区域，并使该区域变得2。烟云会在1d4分钟内消散，除非有风将其吹散。

附近一个通风口喷发出有毒气体。其效果与en=Stinking Cloud法术相同。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_imix"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[141],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},randomTableIds:["tbl_5a8_0"],offerableQuestIds:["qst_main_pota"]},{id:"scn_5b9",locationId:"loc_5a8",name:"W1. 火山裂缝",activation:{condition:{type:"always"},priority:0},skeleton:["这根竖井从永恒之焰神殿的区域E14延伸而下，经过眼魔巢穴的区域F15。","一块魔法圆盘可以让你在各层之间轻松移动。","井道的天然墙壁在底部附近变宽。","热量和光线来自覆盖大部分地面的熔岩湖，它在沸腾。","熔岩通过一个通往东北方向的出口流动。"],flesh:`这根竖井从永恒之焰神殿的区域E14延伸而下，经过眼魔巢穴的区域F15。一块魔法圆盘可以让你在各层之间轻松移动。

一个怒火者在标记为"a"的隧道中监视，而一个永恒火焰祭司位于标记为"b"的隧道。一个爆刃在中间的通道中站岗。（见第七章了解这些邪教徒的具体数值。）如果入侵者没有使用口令"向火之心致敬！"，守卫会攻击他们。

一块小铜板嵌在中间通道的北墙，靠近剃刀爆破者站岗的地方。它有一个凹槽，形状像人的手。按下时，铜板会使玄武岩柱从熔岩中升起，形成漂浮圆盘和中间通道之间的踏脚石。柱子刚升起时很热。任何生物在回合中首次接触到热柱或在其回合开始时位于那里，将受到3点（1d6）火焰伤害。1分钟后，柱子冷却。

东北部的熔岩流仅比流过它的通道的天花板低4尺。

在区域W2的剃刀爆破者会取代此处被击杀的任何守卫。`,spotlightRefs:[],presentNpcIds:["npc_imix","npc_vanifer"],availableInfoIds:[],encounterIds:["enc_5b9"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[142],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"井道的天然墙壁在底部附近变宽。热量和光线来自覆盖大部分地面的熔岩湖，它在沸腾。熔岩通过一个通往东北方向的出口流动。石质通道通往西北、西和南。"},{id:"scn_5bf",locationId:"loc_5a8",name:"W2. 哨兵室",activation:{condition:{type:"always"},priority:0},skeleton:["这个形状奇特的房间有一半比另一半高出许多，就好像它裂开并向上移动了几尺。","一个自然的石柱是上层唯一的特征。","在下层的中心，一个火焰漩涡从地板喷向天花板。","许多出口沿着周边向不同方向延伸。","一只爆刃（见第七章）和一只火巨人在这里休息，他们刚从监视W1区域的岗位上下来。"],flesh:`一只爆刃（见第七章）和一只火巨人在这里休息，他们刚从监视W1区域的岗位上下来。razerblast坐在火焰喷射器旁边，像对待营火一样对待它。

通往区域W5的通道隐藏在玄武岩柱后，高高地位于墙面之上。被动感知（察觉）值达到15或更高的角色会发现它。否则，角色们必须仔细观察正确的位置。粗糙的凹槽被刻在柱子和墙面上，因此可以像梯子一样攀爬到达通道。

巨人有一个由链甲制成的背包。里面有600金币，十三块价值50金币的血石，以及一瓶隐形药水（隐形药水）。`,spotlightRefs:[],presentNpcIds:["npc_imix","npc_vanifer"],availableInfoIds:[],encounterIds:["enc_5bf"],treasureSlotIds:["trs_5bf_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[142],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个形状奇特的房间有一半比另一半高出许多，就好像它裂开并向上移动了几尺。一个自然的石柱是上层唯一的特征。在下层的中心，一个火焰漩涡从地板喷向天花板。许多出口沿着周边向不同方向延伸。",dmGuidance:"当角色首次进入这个房间时，火巨人正在上层架子上打盹。"},{id:"scn_5c4",locationId:"loc_5a8",name:"W3. 堤道",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间的低处充满了熔岩。","一条不平坦的石堤横跨熔岩，结束在东墙的一条狭窄的壁架上。","在西隧道附近的一对粗链上悬挂着一个大铜锣。","在北边，熔岩通过一个宽阔的通道流出，那里的岩浆几乎触碰到天花板。","南边也有一个类似的通道，但那里的天花板比熔岩高几尺。"],flesh:`凡尼弗在这里通过强迫囚犯穿过通往东侧岩架的堤道，然后敲响锣鼓来提醒W4区域的熔岩石绳怪，进行献祭。

堤道宽3到5尺，没有栏杆。其表面粗糙不平。

这个锣发出响亮且回响的声音，可以在100尺范围内轻易听到。

南部的熔岩流仅比流经的通道的天花板低4尺。向北，熔岩和天花板之间的间隙仅有几英寸。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_imix"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个房间的低处充满了熔岩。一条不平坦的石堤横跨熔岩，结束在东墙的一条狭窄的壁架上。在西隧道附近的一对粗链上悬挂着一个大铜锣。
在北边，熔岩通过一个宽阔的通道流出，那里的岩浆几乎触碰到天花板。南边也有一个类似的通道，但那里的天花板比熔岩高几尺。`,dmGuidance:`如果角色们走上堤道，请见W4区域。
如果角色们敲响锣，见W4区域。`},{id:"scn_5ca",locationId:"loc_5a8",name:"W4. 熔岩池",activation:{condition:{type:"always"},priority:0},skeleton:["堤道紧贴东墙，向北延伸时逐渐变窄，直到最终消失。","岩浆发出嘶嘶声并翻腾，火焰在其表面跳跃。","一个由熔岩构成的 石绳怪 潜伏在熔岩池的中心，偶尔探出头来，或在听到锣声时升起。","它对火焰伤害免疫，对寒冷伤害易感，其咬击攻击造成的是火焰伤害而非穿刺伤害。","魔眼魔怪的触手击中造成 4 (1d8) 点火焰伤害，生物在每个回合结束时如果被魔眼魔怪 受擒，也会受到同样的伤害。"],flesh:`一个由熔岩构成的 石绳怪 潜伏在熔岩池的中心，偶尔探出头来，或在听到锣声时升起。它对火焰伤害免疫，对寒冷伤害易感，其咬击攻击造成的是火焰伤害而非穿刺伤害。魔眼魔怪的触手击中造成 4 (1d8) 点火焰伤害，生物在每个回合结束时如果被魔眼魔怪 受擒，也会受到同样的伤害。

当石绳怪使用其卷动动作时，它会将其正在摔跤的生物拉入熔岩中。由于熔岩的存在，石绳怪的挑战等级为11（7200 XP）。`,spotlightRefs:[],presentNpcIds:["npc_imix","npc_vanifer"],availableInfoIds:[],encounterIds:["enc_5ca"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"堤道紧贴东墙，向北延伸时逐渐变窄，直到最终消失。岩浆发出嘶嘶声并翻腾，火焰在其表面跳跃。"},{id:"scn_5cc",locationId:"loc_5a8",name:"W5. 骷髅之室",activation:{condition:{type:"always"},priority:0},skeleton:["这间石室位于火焰节点区域的制高点，两处通往此地的通道（来自 区域W2 和区域 W7）都以三十度角向上倾斜。","这条陡峭的通道通向一个地板凸起的房间。","数十个人形生物的头骨，其中大部分被烧焦和炭化，被塞进墙壁的壁龛里。","它们中的许多燃烧着火焰，每种颜色都不同，将整个房间映照在奇异的光线中。","由于地面是凸面的，站在入口处的角色无法看到其他出口。"],flesh:`这间石室位于火焰节点区域的制高点，两处通往此地的通道（来自 区域W2 和区域 W7）都以三十度角向上倾斜。

由于地面是凸面的，站在入口处的角色无法看到其他出口。

大多数头骨只是普通的头骨，上面施放了en=Continual Flame法术。然而，其中有四个头骨实际上是燃焰之颅。如果区域W6囚犯试图逃跑，它们就会发动攻击。否则它们会保持静止。

由于房间相对于节点其他部分的高度，这里积聚了有毒烟雾。每当生物在房间内开始其回合时，它必须进行一次 DC 15 体质豁免检定，若失败则受到 10（3d6）点毒素伤害，成功则减半。屏住呼吸并不能消除这些影响。

杠杆隐藏在地图上标记为"c"和"d"点的头骨后面的秘密壁龛中。发现杠杆需要通过一个 DC 15 智力（调查）检定。拉动任何一个杠杆都会在天花板中央打开一个小通风口，自然气流会在片刻间将烟雾抽出房间。角色会注意到持续的气流。拉动杠杆后1分钟，通风口会再次关闭，5分钟后房间会重新充满烟雾。

北墙的一个凹室包含一个直径8尺的竖井，通向下方30尺的W6区域。

角色们可以使用链梯下降竖井，无需进行属性检定。`,spotlightRefs:[],presentNpcIds:["npc_imix","npc_vanifer"],availableInfoIds:[],encounterIds:["enc_5cc"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这条陡峭的通道通向一个地板凸起的房间。数十个人形生物的头骨，其中大部分被烧焦和炭化，被塞进墙壁的壁龛里。它们中的许多燃烧着火焰，每种颜色都不同，将整个房间映照在奇异的光线中。

从这个光滑壁面的井道底部，强烈的热量和光线辐射上来，下方火焰的噼啪声清晰可辨。一条链梯盘绕在洞口附近，一端固定在墙上。`,dmGuidance:`在角色们进入前，就能看见内部闪烁的诡异多彩光芒。
如果角色们查看竖井，请阅读以下内容：`},{id:"scn_5d4",locationId:"loc_5a8",name:"W6. 监狱",activation:{condition:{type:"always"},priority:0},skeleton:["这个房间位于区域W5下方30英尺处，可通过垂直竖井进入。","一旦角色抵达竖井底部，请阅读以下内容：","这个粗糙的圆形洞穴非常热。","一堵火焰墙从地板延伸到天花板，它与周围墙壁之间仅留有五尺的空间。","这里的天花板高20尺。"],flesh:`这个房间位于区域W5下方30英尺处，可通过垂直竖井进入。一旦角色抵达竖井底部，请阅读以下内容：

这里的天花板高20尺。火是一个由凡尼弗永久化（直到被解除）的环状en=Wall of Fire法术。一个生物如果在回合结束时在这个房间但在外面的环内，会受到5d8火焰伤害。当生物在回合中首次进入墙面或在其上结束回合时，会受到相同的伤害。

凡尼弗可以控制这堵墙，将其降低（或部分降低）以放置或提取囚犯，然后再将其升起。墙在环内不散发热量，所以囚犯们在那里时不会受到伤害。

这里有四名囚犯，他们作为祭品等待着自己的命运。囚犯包括两名来自沃特德文的商队商人Kharloss和Jarlee（使用贵族的具体数值），一名破碎波涛掠夺者名叫Dirana，以及一名月亮精灵德鲁伊名叫Teresiel。他们的盔甲和武器被剥夺了，邪教徒将它们扔进了熔岩中。

Kharloss和Jarlee愿意支付最多500金币作为护送到Dessarin Valley的任何一个城镇的报酬。他们是诚实的。然而，从他们在深水城的财产中获得必要的钱币需要几个十天。

Dirana愿意交换信息。她可以绘制一幅波涛神庙和瀑布洪流的简易地图。她已经有几个十天没有去过这两个地方了，也不知道大多数房间里住着谁或是什么。

Teresiel是翡翠联盟的成员。她设法在身上藏了一个小巧的皮革包，里面装有九粒黄色种子。在侦测魔法法术的审视下，每粒种子都散发出一种召唤魔法的气息。将种子种植在肥沃的土地上，经过1d6轮后，它将成长为一个启蒙树木。觉醒树能理解其创造者所知的一种语言，并尽其所能遵循创造者的命令。Teresiel并不愿意放弃这些种子，她决心将它们送到Goldenfields的修道院。她请求角色们帮助她完成这次交付。

如果监狱是空的，火环是靠近地板的低火焰。

在节点内被捕的角色会被剥夺装备并被带到这里。如果他们在24小时内未能逃脱，凡尼弗会带着W8区域的邪教徒来，把囚犯带到W4区域，并将他们喂给岩浆石绳怪。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_imix"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个粗糙的圆形洞穴非常热。一堵火焰墙从地板延伸到天花板，它与周围墙壁之间仅留有五尺的空间。",dmGuidance:"如果角色们将任何囚犯留在这里，凡尼弗将在一天之内将剩余的俘虏献祭给熔岩石绳怪（W4区域）。"},{id:"scn_5d9",locationId:"loc_5a8",name:"W7. 繁殖室",activation:{condition:{type:"always"},priority:0},skeleton:["隧道在熔岩池上方开口，熔岩表面在下方三十尺处。","一条由铁链悬挂在天花板下方10尺的金属人行道连接到远处的另一个隧道，也连接到从岩浆中升起的石柱。","人行道穿过柱子上的一个洞。","在下方的熔岩中，蜿蜒的生物滑行和溅起水花。","向南，熔岩流入池中，然后继续向北流经一条通道。"],flesh:`四只火蜥蜴们和八条火蛇在熔岩中游动，它们将其作为繁殖池。火蜥蜴会向除了凡尼弗和她的守卫之外的任何穿过房间的人投掷长矛，而火蛇没有办法攻击在天桥上的生物。如果受到严重伤害，火蜥蜴和火蛇会潜入熔岩下方并保持不可见。

这座天桥没有栏杆，当人们走过时会摇晃，但它很坚固。

柱子里面有一块岩石，上面刻有火焰的符号。具有被动感知（察觉）得分15或更高的角色会注意到它。岩石下有一个小铜盒——这是凡尼弗的应急储藏之一——包含两瓶高等治疗药水和一瓶气化形体药水（气体形态药水）。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_imix"],availableInfoIds:[],encounterIds:["enc_5d9"],treasureSlotIds:["trs_5d9_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"隧道在熔岩池上方开口，熔岩表面在下方三十尺处。一条由铁链悬挂在天花板下方10尺的金属人行道连接到远处的另一个隧道，也连接到从岩浆中升起的石柱。人行道穿过柱子上的一个洞。在下方的熔岩中，蜿蜒的生物滑行和溅起水花。向南，熔岩流入池中，然后继续向北流经一条通道。"},{id:"scn_5de",locationId:"loc_5a8",name:"W8. 火神殿",activation:{condition:{type:"always"},priority:0},skeleton:["玄武岩柱从这个圆形洞穴的光滑地面上升起，支撑着一个平滑的圆顶天花板。","壁龛雕刻在柱子中，里面装有跳跃的火焰，照亮了挂在墙上的铜制挂毯。","每块挂毯上都有火元素邪教的标志。","在一个宽阔的出口隧道前，有一个带有祭坛的基座。","祭坛前跪着三个邪教徒，两个穿着长袍，一个穿着盔甲。"],flesh:`如果来自永恒烈焰神殿的火巨灵（见第四章）已经撤退到它的住所（W9区域），那么任何进入这个房间的角色都能看到它。

这个房间用作反思和崇拜之地。除非角色们伪装成火元素邪教徒，否则他们一出现就会被攻击。如果有伊夫里特在场，它也会加入战斗。

七幅价值每个50金币的挂毯装饰着墙壁。`,spotlightRefs:[],presentNpcIds:["npc_imix","npc_vanifer"],availableInfoIds:[],encounterIds:["enc_5de","enc_pota_w8_retreating_efreeti"],treasureSlotIds:["trs_5de_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`玄武岩柱从这个圆形洞穴的光滑地面上升起，支撑着一个平滑的圆顶天花板。壁龛雕刻在柱子中，里面装有跳跃的火焰，照亮了挂在墙上的铜制挂毯。每块挂毯上都有火元素邪教的标志。在一个宽阔的出口隧道前，有一个带有祭坛的基座。祭坛前跪着三个邪教徒，两个穿着长袍，一个穿着盔甲。
在北边和南边，有较小的房间与神祠相连。一个华丽的隐私屏风挡住了向北的视线。南边的房间是圆形的，装饰华丽。`,dmGuidance:"当角色们第一次到达时，有两名永恒烈焰祭司和一名爆刃（见第七章中的两者）正在向伊米西祈祷。"},{id:"scn_5e1",locationId:"loc_5a8",name:"W9. 火巨灵巢穴",activation:{condition:{type:"always"},priority:0},skeleton:["来自永恒之焰神殿区域E13的火巨灵（参见第四章）居住于此。","彩色地毯和抱枕散布在地板上，远端墙壁处的一块黑曜石桌子上摆放着丰盛的宴席。","桌子下面是一个华丽的箱子。","一个配有精细编织的布罩和枕头的沙发沿着北侧摆放。","墙上定期喷出的小股火焰照亮了这个地方。"],flesh:`来自永恒之焰神殿区域E13的火巨灵（参见第四章）居住于此。

这里的家具由对火免疫的材料制成。桌上的食物可以食用，并且非常美味。

箱子里有750金币，一瓶加速药水，以及一个装有卷轴的锡管，卷轴上写着en=Immolation（见附录 B）。`,spotlightRefs:[],presentNpcIds:["npc_imix","npc_vanifer"],availableInfoIds:[],encounterIds:["enc_5e1"],treasureSlotIds:["trs_5e1_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"彩色地毯和抱枕散布在地板上，远端墙壁处的一块黑曜石桌子上摆放着丰盛的宴席。桌子下面是一个华丽的箱子。一个配有精细编织的布罩和枕头的沙发沿着北侧摆放。墙上定期喷出的小股火焰照亮了这个地方。"},{id:"scn_5e4",locationId:"loc_5a8",name:"W10. 瓦尼弗的房间",activation:{condition:{type:"always"},priority:0},skeleton:["隐私屏风后面是一个舒适的卧室。","墙上挂着几件暗示性的艺术品，一些描绘人类、提夫林和其他生物在激情中挣扎的不雅雕塑摆放在边桌上。","中间是一张床，配有豪华的床罩和许多枕头。","一个衣橱靠在一侧的墙上。","凡尼弗在这里休息，并在适合的时候带来客人。"],flesh:`凡尼弗在这里休息，并在适合的时候带来客人。

一件挂在衣柜里的长袍口袋里有一瓶健康灵药。六幅由著名卡利希艺术家塔利克·阿尔·哈穆德绘制的画作装饰着墙壁；热度已经破坏了它们，但每幅画仍然值25金币。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_imix"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_5e4_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"隐私屏风后面是一个舒适的卧室。墙上挂着几件暗示性的艺术品，一些描绘人类、提夫林和其他生物在激情中挣扎的不雅雕塑摆放在边桌上。中间是一张床，配有豪华的床罩和许多枕头。一个衣橱靠在一侧的墙上。"},{id:"scn_5e7",locationId:"loc_5a8",name:"W11. 流动的熔岩",activation:{condition:{type:"always"},priority:0},skeleton:["一股熔岩流经这个长长的倾斜房间，流向其远处的一个巨大的岩浆池，途中翻过一系列岩石架。","一块巨大的岩石从熔岩流中向前上方突出。","一只青年红龙坐在岩石的尖端，思考着他是否能忍受为火焰先知效劳。","凡尼弗和Halinaxus之间有一份休战协议，因为他们正在商谈Halinaxus协助的条件。","这条龙对邪教的潜在力量感到好奇。"],flesh:`一只青年红龙坐在岩石的尖端，思考着他是否能忍受为火焰先知效劳。凡尼弗和Halinaxus之间有一份休战协议，因为他们正在商谈Halinaxus协助的条件。

这条龙对邪教的潜在力量感到好奇。他考虑着将来有一天如何可能接管它。Halinaxus也非常喜欢凡尼弗暗示要给他的奖品，所以他愿意耐心等待并观察事态的发展。

哈林纳克斯可以清晰地看到火门（区域W12）以及通往火门的堤道。如果发现有一名或多名不穿着火邪教徒服饰的队员，它会从栖木上飞下并降落在堤道上切断他们的退路。随后要求角色们求饶或用财宝买命。这条巨龙极度傲慢，无法容忍渺小人形生物的任何不敬之举。若被奉承并收到令他满意的贿赂，便会攫取新获得的财宝返回栖木。

Halinaxus积累了一堆零散的战利品。在他的栖木上有160个铂金币，十一颗红色石榴石（每颗100金币），一瓶坚不可摧药水，和一根恐惧魔杖。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_imix"],availableInfoIds:[],encounterIds:["enc_5e7"],treasureSlotIds:["trs_5e7_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一股熔岩流经这个长长的倾斜房间，流向其远处的一个巨大的岩浆池，途中翻过一系列岩石架。一块巨大的岩石从熔岩流中向前上方突出。"},{id:"scn_5ec",locationId:"loc_5a8",name:"W12. 火之传送门",activation:{condition:{type:"always"},priority:0},skeleton:["这个巨大的洞穴里充满了一个轻轻荡漾的岩浆湖。","一条粗糙不均的天然岩石堤道延伸至中间，到达一个点，那里两侧各有一根弯曲的黑色玻璃岩石柱，围绕着一个同样的巨石祭坛。","在祭坛的正前方，一个巨大的石头巨人从岩浆中升起至腰部，它的头部向后仰，仿佛在痛苦中。","熔岩的泪水从它的脸上流下，从它张开的嘴里涌出。","在巨人头顶上方悬浮着一个巨大的火光球体——一个微型太阳，周围环绕着旋转的火点。"],flesh:`如果 凡尼弗 已被击败，哈林纳克萨斯（见区域 W11）会守卫火焰传送门，并不惜一切代价保护它。一个 火元素侍从（见 第七章）站在祭坛前显眼的位置，冲向任何接近传送门的非 凡尼弗 者进行攻击。如果 凡尼弗 已撤退到该洞穴，且角色们已经击败了其他两位先知，请使用 "与Vanifer的遭遇" 部分。如果 凡尼弗 是最后一位幸存先知，则使用 "遭遇伊米西" 部分。无论哪种情况，侍从都不会在场。

凡尼弗（见第七章)站在黑曜石祭坛前，由Halinaxus（见W11区域）监视。Incinerath，一个有150生命值的火元素，保护着凡尼弗。这个元素自认为是伊米西的化身。凡尼弗更愿意让Halinaxus和Incinerath战斗，而她则在en=Wall of Fire后面施放法术。

凡尼弗不伪装，不请求宽恕，也不试图逃跑。相反，她狡猾且轻蔑。Halinaxus和Incinerath是傲慢的吹牛者，但在战斗中无所畏惧。

如果凡尼弗被击败，她会伴随着一声悲伤的尖叫变成烟雾消散。焰袭掉落到地面，而传送门仍然存在。

这场遭遇的特点与上文"与Vanifer的遭遇"中描述的反派相同。"火元素传送门闪耀，一股火焰击中了Incinerath。随着一声欢呼，这个元素creature转变成了伊米西（见第七章）。邪恶元素火之王子随后专注于摧毁角色，对凡尼弗的后果不太关心。伊米西想要消灭角色，但他也知道他必须保持火元素传送门的开启。他召唤火元素来帮助他。

火元素传送门是那个漂浮在哭泣巨人头顶上方，离地面80尺的巨大火球。它通向火元素平面，那里是伊米西居住的地方。伊米西会攻击任何通过传送门的敌人。然而，除非完成适当的仪式，否则他不能追击他们进入这个世界。

角色们只能通过将焰袭投入其中来关闭传送门。一旦被击中，传送门便会爆发，吞噬焰袭并发生内爆。它将所有火元素生物（包括伊米西）吸回火元素位面。随着传送门崩塌，节点逐渐恢复自然状态。一小股熔岩河流仍会从区域W1流经W3、W4、W7和W11区域，最终抵达W12区域。「恸哭巨像」可能会继续存在，也可能因传送门关闭而碎裂。`,spotlightRefs:[],presentNpcIds:["npc_vanifer","npc_imix"],availableInfoIds:["info_pota_portal_rites"],encounterIds:["enc_pota_w12_guardians","enc_pota_w12_vanifer","enc_pota_w12_imix"],treasureSlotIds:[],eventIds:["evt_pota_fire_portal"],tone:"tension",_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个巨大的洞穴里充满了一个轻轻荡漾的岩浆湖。一条粗糙不均的天然岩石堤道延伸至中间，到达一个点，那里两侧各有一根弯曲的黑色玻璃岩石柱，围绕着一个同样的巨石祭坛。在祭坛的正前方，一个巨大的石头巨人从岩浆中升起至腰部，它的头部向后仰，仿佛在痛苦中。熔岩的泪水从它的脸上流下，从它张开的嘴里涌出。在巨人头顶上方悬浮着一个巨大的火光球体——一个微型太阳，周围环绕着旋转的火点。洞穴的天花板在至少一百尺高的上方，再往上还有二十尺。",dmGuidance:'当角色们到达时，凡尼弗高举焰袭并喊道："用这把钥匙，我召唤我的主人，永恒烈焰！',mapGeometry:{imageRef:"adventure/PotA/068-poa05-12.webp"},offerableQuestIds:["qst_main_pota"]},{id:"scn_5f1",locationId:"loc_5a8",name:"结束战役",activation:{condition:{type:"always"},priority:0},skeleton:["随着至少一位邪恶元素王子被击败，其他王子也无法通过节点到达物质平面，Dessarin Valley暂时免受邪恶元素的威胁。","在接下来的几个月里，该地区恢复了其宁静的状态。","它仍然是一个边疆地区，但怪物的掠夺和土匪活动有所减少。",'天气恢复正常，即使红松镇的居民指出"正常的天气在这里意味着糟糕的天气，而且还是不可预测的。',"可以听到一些关于占领闹鬼要塞以吓走不受欢迎的擅自占地者，或者一劳永逸地摧毁这些堡垒的酒馆谈话。"],flesh:`随着至少一位邪恶元素王子被击败，其他王子也无法通过节点到达物质平面，Dessarin Valley暂时免受邪恶元素的威胁。在接下来的几个月里，该地区恢复了其宁静的状态。它仍然是一个边疆地区，但怪物的掠夺和土匪活动有所减少。天气恢复正常，即使红松镇的居民指出"正常的天气在这里意味着糟糕的天气，而且还是不可预测的。"

可以听到一些关于占领闹鬼要塞以吓走不受欢迎的擅自占地者，或者一劳永逸地摧毁这些堡垒的酒馆谈话。山谷中没有任何势力拥有完成这项任务的士兵，所以除非角色们采取行动，否则什么也不会发生。

邪教徒在邪教被击败后的十天内悄悄溜走并分散开来。失去了领导并且对事件感到震惊，邪教徒们决定Dessarin Valley不是他们的地方。一些人前往附近的城市，特别是深水城和无冬城，并试图在繁忙中隐藏自己，同时重建他们的行列。任何忠于邪教的怪物都可以自由地自谋生路。

角色们可以参与到针对邪教残余势力的清剿行动中。

胜利的王子会在节点附近逗留数周，重新组织其邪教，并将其他邪教的分散残余分子纳入控制。这段时间允许角色们策划第二次攻击。

角色们所属的派系在阻止元素之恶方面发挥了更积极的作用。从幸存第一次战斗的角色那里收到的报告对他们来说具有很大的分量，而且有可能某个派系在节点附近恰好在正确的时间进行了侦查，看到了战斗是如何展开的。例如，没有人希望因为缺乏火焰抗性药水而导致第二次攻击失败。

邪教的行列被削弱了，而且除非有关元素王子到来的消息传播开来，否则他们无法得到补充。角色们知道该期待什么，但邪恶元素王子足够傲慢和轻蔑，会像在第一场战斗中一样继续行动。

角色们可以期待在未来从派系那里获得更具体的帮助。如果不是因为角色们，德萨林谷将会成为邪恶的堡垒，注定会向北方蔓延。

与派系领袖更紧密的联系是双刃剑。角色们已经证明了自己有能力完成伟大的事情，现在这就是派系所期望的。

例如，角色们可能留下了开放的元素节点。所有五个派系都强烈要求关闭这些节点，尽管他们的原因、方法和鼓励各不相同。

古老的元素之眼——无论那股力量是什么——在德萨林谷遭受了一次明显的失败。然而，它并未被完全清除。四个邪教是元素之恶有希望的化身，但它们最终未能通过摆在它们面前的考验。

下一次古老的元素之眼在Dessarin Valley苏醒时，它不会选择像人类这样的相对新来者来执行它的命令。它转向了黑暗精灵，这些黑暗精灵在几千年前在Sumber Hills之下为它建造了一个神殿。黑暗精灵的邪教再次崛起，返回到眼睛圣所，并开始破坏黑暗精灵的社会。如果黑暗精灵落入邪恶元素的影响之下，地表世界将需要有经验的角色来面对这个新的威胁。

认识符合那种描述的人吗？`,spotlightRefs:[],presentNpcIds:["npc_imix","npc_vanifer"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[146],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们未能阻止邪恶元素王子留在世界中，一切并未丧失。
如果角色们需要更好的装备或代表他们施放的法术，派系就会开始行动。
如果角色们终结了元素之恶的威胁，他们所属的派系将会相应地表示感激和印象深刻。
如果角色们阻止了邪恶元素的发展，想想所有其他可以用他们对抗的威胁和对手。
如果角色们的胜利不够彻底，派系会促使他们完成这项工作。`,mapGeometry:{imageRef:"adventure/PotA/069-poa05-13.webp"}},{id:"scn_5f5",locationId:"loc_5f5",name:"警报与远征",activation:{condition:{type:"always"},priority:0},skeleton:["这一章节介绍了与邪恶元素故事线松散相关的次要冒险。","首先是适合1级至3级角色在红松镇及其附近进行的冒险。","然后是为更高等级角色准备的支线冒险。"],flesh:"这一章节介绍了与邪恶元素故事线松散相关的次要冒险。首先是适合1级至3级角色在红松镇及其附近进行的冒险。然后是为更高等级角色准备的支线冒险。",spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[148],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},mapGeometry:{imageRef:"adventure/PotA/070-poa06-01.webp"}},{id:"scn_5f6",locationId:"loc_5f5",name:"红松镇的麻烦",activation:{condition:{type:"always"},priority:0},skeleton:["红松镇是新手冒险家开始他们职业生涯的绝佳地点。","本节中的情景为1级至3级角色提供了了解红松镇的同时处理当地问题的机会。","为了挖掘有趣的谣言并找到潜在冒险地点的方向，角色们必须探索红松镇并与市民互动。","红松镇在第二章中有描述。",'请参阅"红松镇的麻烦"条目了解当地人所知道的信息。'],flesh:`红松镇是新手冒险家开始他们职业生涯的绝佳地点。本节中的情景为1级至3级角色提供了了解红松镇的同时处理当地问题的机会。

为了挖掘有趣的谣言并找到潜在冒险地点的方向，角色们必须探索红松镇并与市民互动。红松镇在第二章中有描述。请参阅"红松镇的麻烦"条目了解当地人所知道的信息。

有关红松镇建筑和非玩家角色（NPC）的描述，请参见第二章。角色可能是当地人或旅行者。他们和玩家在队伍探索城镇和遇见其居民时了解该地区。

摇摆剑（区域2）是唯一的客栈，而高阳头盔（区域3）是一家大型酒馆，位于客栈对面。当地人聚集在盖尔库尔的商店（区域17）或酒馆闲聊。铁头武器店（区域13）是购买武器和盔甲的最佳地点，而赫尔瓦尔·塔恩拉（区域7）出售为旅行者制作的精美服装。红松镇没有市长，但警长哈布尔克（区域11）维护着和平。与派系有关联的角色可能知道镇上派系代理人和支持者的名字。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[148],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:"红松镇是长路镇上的一个城镇，位于深水城北部几天路程的地方，以及特里巴南部几天路程的地方。它是前往北方城市或来自北方城市的商队的休息站，有一个名为摇摆剑的客栈，一个叫做高阳头盔的酒馆，以及许多为旅行者提供服务的工匠。"},{id:"scn_5f9",locationId:"loc_5f5",name:"进入荒野",activation:{condition:{type:"always"},priority:0},skeleton:["红松镇被田野和牧场所环绕，这些田野和牧场由石墙或树篱分隔。","在城镇外大约一英里处，耕作区域逐渐过渡到未被破坏的荒野。","连绵数英里的山丘、森林和草原延伸至视线所及之处，充满了丰富的野生动物。",'"红松镇周边"地图展示了附近几个有趣的地点和遭遇。',"城镇的居民或谣言会引导角色前往这些地点。"],flesh:`"红松镇周边"地图展示了附近几个有趣的地点和遭遇。城镇的居民或谣言会引导角色前往这些地点。冒险者也可以通过探索发现以下感兴趣的点。

警长哈伯克（红松镇，区域11）听说镇南有一个匪徒巢穴。

这四名匪徒们会攻击陌生人，他们更喜欢远程攻击。他们的藏身之处是一个洞穴，里面堆满了偷来的食物、酒、武器和硬币。他们偷了一辆装载着一只巨大野猪的坚固铁笼的马车，这辆马车原本是要运往深水城的一位贵族那里。他们吃掉了那只野兽，但随后捕获了一只黑熊。

匪徒们破坏了笼子的锁，所以他们用铁钉把它钉死了。这只饥饿的熊在暴力发生时，会用行动猛撞笼门。如果它成功通过一个 DC 15 的力量检定，它就能挣脱束缚。这只熊随后会攻击最近的生物或最近伤害它的生物。当它的生命值降至一半以下时，它就会逃跑。

洞穴里的硬币总计99铜币，74银币，和13金币，分散在几个钱包里。匪徒们还积累了其他价值100金币的赃物，包括许多武器。

明瑟拉·曼迪维尔的孙女佩尔（红松镇，区域14）知道这座墓穴的位置，芒戈巴尔·洛伦（红松镇，区域8）也知道。

随着时间的推移，许多富有的人在山谷中建造了住所。其中一些被埋葬在城镇附近的古老墓穴中。其中一个墓穴是一个被遗忘的贵族的最终安息之地，他在生前曾是一名战士。

一个名叫Mougra的地精和一个名叫Geeraugh的半食人魔一直在监视这个墓穴。他们会攻击任何侵入他们营地的人。否则，他们可能会伏击角色——见下一节。

在墓穴通道内，石门开得足够宽，可以让一个小型角色挤过去。它向内开。

Geeraugh和Mougra用金属马车轮配件制作了一个临时的警报装置，固定在门内侧。如果门被推开而没有移除这个"警报"，金属部件会发出巨大的撞击声掉落。如果Geeraugh和Mougra听到警报，他们会潜行到墓穴附近，伏击任何出现的人。他们更倾向于抢劫而不是战斗。

如果触摸生锈的铁门，一个手持幽灵长剑的幽灵铠甲男性人类将从门中出现。这个小幽灵曾是一名守卫，在未能保护安息于此的贵族时死去。（使用恶灵的具体数值，除了这个幽灵是守序中立的。）他警告入侵者离开他主人的墓穴。尽管幽灵可能会与和平角色对话，但他会攻击那些拒绝离开的人。幽灵不会追击逃跑的人。

铁门因生锈而卡住了。角色可以通过成功的 DC 15 力量检定将其强行打开。门内揭示出以下内容：

棺材内是一具穿着生锈胸甲的骷髅，手中紧握着一把长剑。当棺材被打开时，这把凌空剑会攻击入侵者。如果没有人留在这个房间，它会返回棺材中的位置。

箱子内有破损的布匹和一本湿透的书残骸，但它还有一个假木底。成功通过 DC 10 智力（调查）检定的人会注意到底部比箱子应有的深度高出几英寸。里面有一条金链和一个吊坠，吊坠内侧刻有一位美丽半精灵女性的侧面肖像（价值 100 gp），以及两个由编织银和金银制成的戒指（每个价值 25 gp）。

在Larch小径以南的山丘中，有一个洞穴，被称为滴石洞穴（Tricklerock Cave）。Albaeri Mellikho（红松，区域18）和Elak Dornan（红松，区域12）将角色指引到这个位置。

这个洞穴是四只蚊蝠们的栖息地，一旦有角色进入洞穴，它们就会立即发动攻击。与当地传言相反，滴石洞穴中并没有宝藏。

Endrith Vallivoe（红松，区域22）听说了一个可能引导角色们来到这里的报告。

一张黑色的羊皮纸（实际上是染黑的人皮）包裹在箭羽前方的箭杆上。这是一则用通用语写成的信息：

箭头是涂黑的金属制成，它穿透了头骨的后部并深深嵌入树中。任何触碰这个箭头的人都会做噩梦，梦见头骨冷笑着向他们冲来。这些人已被标记。在接下来的十天里，不死生物会勉强攻击他们，并将他们作为最后可能的目标。

在荒野中面对麻烦情况的角色吸引了摇摆之剑（Red Larch, area 2）的店主Kaylessa Irkell的注意。Kaylessa认为来自Lance Rock的邪恶影响是红松镇麻烦的根源。她请求这些应该还是1级的角色去查明发生了什么。角色们发现，一个自称为"领主"的死灵法师潜伏在地标附近的一个洞穴里。

在红松镇的西南方向，Lance Rock清晰可见，数英里外都可以看到。

这个巨石是灰色花岗岩，与周围的石灰岩不同。（很久以前，一条龙把它放在这里。）在石头以南几百尺处有一个峡谷，里面长满了灌木丛。一条小径通向灌木丛附近，那里有一个整齐绘制的标志，用通用语写着：

小径继续向下延伸至一个洞穴入口。另一个带有相同信息的警告标志被放置在洞口。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_5f9_0","trs_5f9_1"],eventIds:[],tone:"tension",_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；叙事拍单元挂靠最近建筑群待人工核；配置列入逐场景来源复核清单"},readAloud:`红松镇被田野和牧场所环绕，这些田野和牧场由石墙或树篱分隔。在城镇外大约一英里处，耕作区域逐渐过渡到未被破坏的荒野。连绵数英里的山丘、森林和草原延伸至视线所及之处，充满了丰富的野生动物。

在距离卡恩路不远的一个被灌木丛覆盖的山谷中，有一个临时营地，营地前方是一个洞穴入口。四个脾气暴躁的人类在火堆旁磨利他们的刀片。附近有一辆马车，上面放着一个木制笼子。笼子里，一只黑熊在扒着铁条。

一个黑暗的长方形洞口在附近山坡的草丛和藤蔓中张开。在隧道昏暗的深处可以看到一扇微微敞开的石门。门上刻有凿痕，这些凿痕可能曾经是一个名字。

门内是一条通道，高十尺宽十尺，直通向山丘内部。三十尺后，通道通向一个三十尺见方的正方形房间，房间里有一个石块制成的桌子。石板上的污迹和痕迹表明，曾经有生锈的物体排列在上面。在入口通道右侧墙壁的正中，有一扇关闭的、严重生锈的铁门。

生锈的门后是另一个二十尺见方的房间，里面有一具石棺。天花板有裂缝，从多个点允许树根和水进入室内，尽管这里几乎没有积水。在棺材的脚部是一个生锈的铁箱。

在一个峡谷中，一块裸露的岩面被一个大约三尺宽、十五尺高的垂直裂缝一分为二。水从裂缝中滴出，流入附近的沼泽。在裂缝周围的泥地里有许多重叠的靴印。一些朝裂缝里面走去，一些则从里面走出来。

裂缝通向山坡内部二十尺，然后扩展成一个洞穴。许多细流汇集成悦耳的声音，墙壁上闪烁着湿润的光泽。洞穴地面上散布着石笋，天花板上悬挂着石钟乳。

前方的树上钉着一个风化的人类头骨，下巴下垂，一个大黑箭从头骨的一只眼窝中突出，将其钉在树干上。

Lance Rock是一座狭窄的、高二十五尺的直立巨石，由裸露的灰色岩石构成，以六十度角向东突出。`,dmGuidance:`如果角色们调查这个线索，请阅读以下内容：
如果角色在进入墓穴通道前侦察该区域，他们会在150尺外的巨石堆中发现一个强盗营地。
当角色进入时，请阅读以下内容：
如果角色进入裂缝，请阅读以下内容：
【最后的笑】最后的笑
下一个就轮到你了！
瓦尔克隆达尔
当角色们能看到它时，请阅读以下文本：
【兰斯岩】禁止靠近
以免你染上
变形瘟疫
困扰我的！
Lance Rock的领主
如果角色们探索这个洞穴，请继续进行下面的"死灵法师的洞穴"遭遇。`},{id:"scn_60e",locationId:"loc_60e",name:"死灵法师的洞穴",activation:{condition:{type:"always"},priority:0},skeleton:['一个疯狂且隐居的死灵法师名为奥瑞欧斯——自称为"Lance Rock的领主"——已经居住在Lance Rock附近的洞穴中。',"他不会对红松镇构成直接威胁，但对入侵者并不友好。"],flesh:'一个疯狂且隐居的死灵法师名为奥瑞欧斯——自称为"Lance Rock的领主"——已经居住在Lance Rock附近的洞穴中。他不会对红松镇构成直接威胁，但对入侵者并不友好。',spotlightRefs:[],presentNpcIds:["npc_oreioth"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[151],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_60f",locationId:"loc_60e",name:"L1. 入口洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["洞穴口通向黑暗，从那里吹来微风，带着死亡的微弱气味。","里面是一个天然的洞穴，地面和天花板都不平坦。","通道向西延伸，越往前越窄。","一具尸体横躺在通道内60尺处。","一具男性人类的尸体在这里仰面朝天。"],flesh:`一具尸体横躺在通道内60尺处。

这个身体是一个丧尸，但如果被触碰，它就会动起来。然后，它就会攻击。`,spotlightRefs:[],presentNpcIds:["npc_oreioth"],availableInfoIds:[],encounterIds:["enc_60f"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[151],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`洞穴口通向黑暗，从那里吹来微风，带着死亡的微弱气味。里面是一个天然的洞穴，地面和天花板都不平坦。通道向西延伸，越往前越窄。

一具男性人类的尸体在这里仰面朝天。他只穿着皮短裤。`,dmGuidance:"当角色们靠近到足以仔细观察尸体时，请阅读以下内容："},{id:"scn_612",locationId:"loc_60e",name:"L2. 守卫洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["一个圆形的、高天花板的洞穴在这里展开。","它有两个狭窄的出口，一个向北，另一个向南。","一块平坦的巨石位于洞穴中央。","它大约有六尺宽，八尺长，三尺高。","顶部有深色的污迹。"],flesh:`巨石上沾有干涸的血迹。

在东侧入口上方，两个丧尸们站在10英尺高的壁架上。它们之间拿着一个装满石头的木箱。当它们发现入侵者时，便松开木箱，使其砸向闯入者。目标必须成功通过DC 12敏捷豁免检定，否则将受到7（2d6）点钝击伤害。僵尸们随后从壁架上跳下（每个承受1d6点钝击伤害）进行攻击。`,spotlightRefs:[],presentNpcIds:["npc_oreioth"],availableInfoIds:[],encounterIds:["enc_612"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[151],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个圆形的、高天花板的洞穴在这里展开。它有两个狭窄的出口，一个向北，另一个向南。一块平坦的巨石位于洞穴中央。它大约有六尺宽，八尺长，三尺高。顶部有深色的污迹。"},{id:"scn_614",locationId:"loc_60e",name:"L3. 尸体洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["这个洞穴的墙壁上靠着一些静止的人形生物，穿着脏衣服或破烂的盔甲。","有些几乎只剩下骷髅，头发和皮肤紧紧地贴在骨头上。","其他的则更新鲜。","几把旧短剑躺在布满灰尘的地面上。","这个房间存放着十二具尸体。"],flesh:"这个房间存放着十二具尸体。其中七个是骷髅，另外五个则更新鲜。三具骷髅们静止不动地混在其他遗骸中。它们会攻击任何触碰它们或这里尸体的人。",spotlightRefs:[],presentNpcIds:["npc_oreioth"],availableInfoIds:[],encounterIds:["enc_614"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[151],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个洞穴的墙壁上靠着一些静止的人形生物，穿着脏衣服或破烂的盔甲。有些几乎只剩下骷髅，头发和皮肤紧紧地贴在骨头上。其他的则更新鲜。几把旧短剑躺在布满灰尘的地面上。"},{id:"scn_616",locationId:"loc_60e",name:"L4. 舞动的死者",activation:{condition:{type:"always"},priority:0},skeleton:["通向这个房间的北边通道可以这样描述：","这条狭窄的通道在大多数地方高约十尺，墙壁粗糙且不规则。","墙壁上突出的尖刺上覆盖着干涸的血迹。","最终，这条天然的通道变宽了：","前方星形的洞穴墙壁上有许多裂缝。"],flesh:`通向这个房间的北边通道可以这样描述：

最终，这条天然的通道变宽了：

这三个丧尸们装扮成要娱乐Lance Rock领主的样子，通过上演怪诞喜剧。它们接到命令，一旦发现入侵者，就要上演一会儿戏剧，利用这个干扰来接近并攻击。

这个房间里的战斗声会提醒死灵法师奥瑞欧斯（位于区域L5）有入侵者靠近。奥瑞欧斯会爬上区域L5的楼梯，窥视西侧通道的尽头（见该区域描述），希望能有机会触发那里的陷阱。

这条隧道通向一个小洞穴，地面上放着两个关闭的铁箱。南墙上的一个窥视孔能让站在 区域L5 楼梯顶部的人观察到这些箱子。窥视孔旁边有一个杠杆，可以打开箱子上方天花板上的活板门，引发落石。

如果奥瑞欧斯就位，他会等待至少两个入侵者进入洞穴，然后他离开窥视孔并拉动杠杆。当他这么做时，他会喊道，通过窥视孔可以清楚地听到：'你们竟敢与Lance Rock的领主对抗？死亡是你们的奖赏！'然后他继续狂笑着撤退。

房间内的人可以进行一次 DC 10 的敏捷豁免检定，失败时受到 7（2d6）点钝击伤害，成功时则受到一半伤害。

铁箱是空的。`,spotlightRefs:[],presentNpcIds:["npc_oreioth"],availableInfoIds:[],encounterIds:["enc_616"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这条狭窄的通道在大多数地方高约十尺，墙壁粗糙且不规则。墙壁上突出的尖刺上覆盖着干涸的血迹。

前方星形的洞穴墙壁上有许多裂缝。洞穴对面只有两个裂缝看起来足够大，可以穿越。三只僵尸在该区域徘徊。其中一只装扮成熊的样子，另一只穿着带有褶边裙和浓妆的女士服装，最后一只装扮成小丑，其项圈和袖口上挂着叮当作响的铃铛。`},{id:"scn_61b",locationId:"loc_60e",name:"L5. 工作室",activation:{condition:{type:"always"},priority:0},skeleton:["通道通向一个巨大的洞穴，洞穴内有几支挂在墙上壁龛里的摇曳火炬照亮。","地面不平坦，天花板高四十尺。","通道附近的三块平坦巨石被当作摆放人类尸体的桌子。","尸体旁边有篮子，里面装着被干涸血迹覆盖的切断身体部位。","一个穿着黑色兜帽的身影站在第三张桌子旁边，背对着你。"],flesh:`这个戴兜帽的身影是一具丧尸，另外还有五个蠕行之爪们隐藏在篮子里的其他身体部位中。如果入侵者不回头，这些怪物就会发动攻击。

"长枪岩之主"是奥瑞欧斯（详见第七章），一个头发剃光、留着硬须、眼神狂野的泰瑟瑞尔人。否则，他会谨慎地躲在四具骷髅们后面观察。无论如何，如果被逼入绝境，他会退缩避免冲突，命令他的骷髅发动攻击，同时自己撤退到L6区域。

这位死灵法师以第三人称自居，并使用他自封的头衔。他害怕身体对抗，但在他的宠物保护下，他会假装勇敢，说：'向Lance Rock的领主鞠躬！就是我！看看我的黑暗恐怖！'只要入侵者离开洞穴，他愿意慷慨地考虑投降或停战的提议。

沿着北墙的台阶通向一个俯瞰这个房间的壁架。壁架旁的窥视孔可以看进区域L4的西边通道，这里有一个控制那个房间落石陷阱的杠杆。

这个石头柜台充当工具台。这里包括锯子、刀子、锥子、防腐工具和金属碗等工具。其中还有一壶谷物酒精和一桶清水。所有东西都非常干净。`,spotlightRefs:[],presentNpcIds:["npc_oreioth"],availableInfoIds:[],encounterIds:["enc_61b"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`通道通向一个巨大的洞穴，洞穴内有几支挂在墙上壁龛里的摇曳火炬照亮。地面不平坦，天花板高四十尺。通道附近的三块平坦巨石被当作摆放人类尸体的桌子。尸体旁边有篮子，里面装着被干涸血迹覆盖的切断身体部位。一个穿着黑色兜帽的身影站在第三张桌子旁边，背对着你。兜帽里露出纠结的头发，这个身影手里拿着一根用深色线穿过的骨针。
向西更远的地方，一座石楼梯沿着北墙攀升，顶端接近天花板。一个像柜台一样的石板从楼梯底部对面的墙壁突出。它上面放着锯子、刀子和其他工具。四个骷髅站在这个工具台的另一边，守卫着一个通往西边的宽阔通道。`,dmGuidance:"如果角色们穿过区域L4时惊动了他，他们会发现奥瑞欧斯正在工具台上整理清洁他的工具。",mapGeometry:{imageRef:"adventure/PotA/075-poa06-04.webp"}},{id:"scn_620",locationId:"loc_60e",name:"L6. 书房",activation:{condition:{type:"always"},priority:0},skeleton:["这个工作室变窄成为另一个通道，该通道两次分叉并重新连接。","它缓缓下降至以下描述的区域：","一个椭圆形的洞穴在这里展开，宽四十尺，长六十尺。","深紫色的挂毯挂在墙上。","中心是一个由切断的手臂制成的基座，排列成圆锥形相互紧握。"],flesh:`这个工作室变窄成为另一个通道，该通道两次分叉并重新连接。它缓缓下降至以下描述的区域：

对于符文，请向玩家展示远古元素之眼（Elder Elemental Eye）的象征（见第一章），无需额外的上下文。这个符文是一种幻象，如果它或基座被扰乱，它就会消失。

如果他在这里，奥瑞欧斯（见第七章）会藏在房间北端的帷幔后面，拿着一根魔法飞弹魔杖。他只有在被攻击或有人接近漂浮的符文时才会做出反应。在后一种情况下，他会喊道：'难道你看不见吗？那是眼睛！它看到你的每一个动作！你不害怕它吗？'

如果他死去，奥瑞欧斯会变成一道黑色的火焰。这道火焰伴随着哀怨的哭泣声逐渐消失，然后彻底消散。

发光的球体是一个漂浮之球。在帷幔后面有壁龛，奥瑞欧斯在那里存放他的食物、饮料、补给品、衣服和寝具，以及165枚银币、78枚金币和四颗磨光的黑曜石宝石（每颗50金币）。如果奥瑞欧斯未能取回它，魔法飞弹魔杖存放在壁龛中。`,spotlightRefs:[],presentNpcIds:["npc_oreioth"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_620_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个椭圆形的洞穴在这里展开，宽四十尺，长六十尺。深紫色的挂毯挂在墙上。中心是一个由切断的手臂制成的基座，排列成圆锥形相互紧握。最上面的手中托着一个发光的水晶球体。球体上方漂浮着一个带有类似眼睛缝隙的黑暗符文。",mapGeometry:{imageRef:"adventure/PotA/076-poa06-05.webp"}},{id:"scn_623",locationId:"loc_623",name:"移动石墓",activation:{condition:{type:"always"},priority:0},skeleton:["角色们从Lance Rock返回红松镇后不久，这个为2级角色设计的情景开始了。","在小镇下方，有古代矮人开凿的隧道和房间。","这个地方包括一个金库，里面的巨大石头神秘地改变位置。","几代人以前，在采石场工作的石匠发现了这些古老的隧道、被埋的矿工以及石头移动的奇怪现象。","起初，发现这个地方的人保守秘密，因为他们希望在其中找到宝藏。"],flesh:`角色们从Lance Rock返回红松镇后不久，这个为2级角色设计的情景开始了。在小镇下方，有古代矮人开凿的隧道和房间。这个地方包括一个金库，里面的巨大石头神秘地改变位置。

几代人以前，在采石场工作的石匠发现了这些古老的隧道、被埋的矿工以及石头移动的奇怪现象。起初，发现这个地方的人保守秘密，因为他们希望在其中找到宝藏。但从未发现过这样的宝藏，阴谋却延续了下来。

那些知道这个地方的红松镇居民包括了镇上的领导阶层。他们认为这种现象是超自然的，并且是预示性的。他们自称为信徒，并把埋在房间里的矿工称为挖掘者。信徒们仔细观察石头的运动，寻找其中的讯息，他们将挖掘者视为严苛的守护者，守护着一个古老的秘密。

多年来，信徒们开始安排红松镇中的事件和机会，以确保同为信徒的人繁荣昌盛。他们成为了一个秘密的镇议会，并开会做出艰难的决定，声称是为了"所有人的利益"。在红松镇制造麻烦的人会被赶出生意，受到恐吓，甚至被谋杀。

几个月前，黑土教的代理人偶然发现了移动石墓，一个名叫Larrakh的雄心勃勃的教派祭司来到红松镇，目的是将信徒置于教派的控制之下。与信徒们受到迷信的束缚不同，他学会了如何操纵移动的石头。现在，Larrakh利用这些石头传递"信息"，并为信徒们解释，操纵他们按照土教的命令行事。

专注于红崖镇正确谣言组的角色可能会发现移动之石墓穴。信徒们在瓦尔沃马车工坊（红崖镇，区域16）有一个隐蔽入口。从这个工坊延伸出的蜿蜒隧道通往墓穴中的区域T1。梅里科石工坊（红崖镇，区域18）的第二个隐蔽入口则通向区域T9。

在那种情况下，当你准备好开始时，请阅读以下文本：

任何生物在没有采取预防措施的情况下移动到塌陷洞穴的边缘，例如趴在地上爬行或用绳索固定自己，必须成功进行一次 DC 10 敏捷豁免检定，否则随着地面进一步崩塌，他们将掉入洞中。塌陷洞穴的底部有30英尺深，但一堆松软的泥土已经坍塌到下方的洞穴中作为缓冲，因此掉入洞中的人不会受到伤害。

这个陷坑暴露了区域T1（位于移动之石墓穴中）。掉入其中的镇民们受了惊吓和擦伤，在没有帮助的情况下无法爬出，但除此之外并无大碍。

试图控制局势的镇上长者包括Ilmeth Waelvur（男性Tethyrian人类匪徒；见红松镇，区域16），Albaeri Mellikho（女性Tethyrian人类平民；见红松镇，区域18），以及Ulhro Luruth（男性Chondathan人类平民；见红松镇，区域19）。他们急于阻止任何人发现陷坑通往通道，于是发表诸如"这件事不应该在陌生人面前讨论！"，"挖掘者们不应该被激怒！"和"石头不能被移动！"等声明。但这些命令从恐慌的镇民那里得到的服从度很低。

如果没有角色携带绳子，一位乐于助人的居民会带着一卷旧绳索出现。他或她会推开长者，向角色们提供绳索。坑中的孩子继续哭泣，随着更多旁观者的到来，显然是时候执行一次救援任务了。

救援那些掉下去的人，需要用绳子将救援者降下去，将绳子绑在受害者身上，然后让上面的人把他们拉上来。镇民们对角色们的援助感激不尽。

移动石墓穴被发现后的后果取决于最后几次遭遇的发展情况，特别是T5区域尸体的发现。这些尸体是谋杀受害者。

红松镇感到震惊，但这是秘密和谎言的问题，而不是谋杀和正义的问题。

哈伯克迅速得出了正确的结论——信徒们就是凶手。巡官随即展开了全面调查。

如果可能的话，哈布尔克询问了格伦特和巴拉古斯塔斯。格伦特没有杀害任何人，也没有目击谋杀，但他承认帮助藏匿尸体。他说阿尔贝里·梅利克霍和伊尔梅斯·瓦卢尔监督了这个过程。巴拉古斯塔斯也没有明显的不当行为，所以他很快确认了格伦特的故事，并为自己辩护。

玛兰德罗·盖尔库尔，阿尔贝里·梅利克霍和伊尔梅斯·瓦卢尔是真正的罪犯。面对所有证据，梅利克霍仍然坚称自己无辜，大声咆哮。瓦卢尔崩溃了，承认了自己的参与，并且指认了梅利克霍。盖尔库尔尽可能保持冷静，并试图在几周后逃离城镇，当明显瓦卢尔也要指认他时。凶手们还讲述了拉拉克在丑闻中的角色，以及他们如何使用他的魔法匕首。

这场戏剧在接下来的一个月里上演，一些信徒逃离了城镇，另一些则否认对谋杀案有任何了解。角色们可能会想要介入，但他们还需要应对四个元素教派。对信徒的正义可能会在角色们接下来几次访问红松镇期间在背景中展开。`,spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`红松镇一个平常的下午被一次震动打破。一秒钟后，四个小孩和他们正在玩耍的旧手推车滑入突然打开的陷坑中。他们消失在视线之外，尖叫着求救。
一位心烦意乱的妇女从附近的一所房子中跑出来，冲向洞口边缘，洞口崩塌，她也掉了进去。更多的人从其他家中跑出来。"拿绳子，拿绳子！"和"拿梯子！"的呼声充满了空气。

一个黑暗的房间位于地面下方大约三十尺处。它看起来比洞口大，并且向四面八方的黑暗延伸。中间堆着一堆松散的土。最先掉进来的孩子们坐在土堆上，咳嗽着，因害怕而哭泣。"我的孩子，我的孩子！"一位焦急的家长在边缘窥视着大喊，"有人做点什么！"
更多的镇民从四面八方赶来，避开边缘。他们中有一些是镇上的长者，他们把人们从边缘拉开，并命令其他人保持距离。"让我们来处理！"其中一个长者说。"孩子们在下面待一会儿不会有事，但没有人可以下去。保持距离！"`,dmGuidance:`如果角色们没有找到任何线索进入这个情景，一个陷坑会在红松镇中心打开，暴露出隐藏的房间。
当角色能够看到内部时，请阅读以下内容：
如果角色们没有太关注那些尸体，那么剩余的信徒能够在哈布尔克发现之前将它们带走并在其他地方埋葬。
如果角色们对这些尸体表现出好奇，或者你认为巡官哈伯克比信徒们更早到达了区域T5，那么情况会变得更加严重。`},{id:"scn_627",locationId:"loc_623",name:"T1. 入口洞穴",activation:{condition:{type:"always"},priority:0},skeleton:["如果陷坑打开了，这个洞穴中心有一堆土，30尺高的天花板上有一个20尺直径的大洞。","这个宽敞且形状不规则的洞穴，地面是平滑的基岩。","潮湿的泥土和石头构成墙壁，墙壁上这里那里突出着树根。","一个五尺宽的隧道通向北方，东边则有一块石板——一个带有生锈拉环的门。","在石门旁边，地板上放着几件破旧的斗篷和一个水袋。"],flesh:`如果陷坑打开了，这个洞穴中心有一堆土，30尺高的天花板上有一个20尺直径的大洞。

水袋里装有一半的水。斗篷非常普通。它们属于那些不想在进出入口隧道时引起注意的信徒。

东边的石门没有锁。它平滑地滑开。门后，一条铺砌的石质通道向下倾斜，继续向东通往区域T2。

这条隧道通往Mellikho石雕厂的采石场（红松镇，区域18）。

穿过木门后，隧道再延伸十尺，然后通向Albaeri Mellikho房子后面的采石场。

潮湿的火把因为被插入沙子中而熄灭了。它们很难点燃，但如果用现有的火源点燃，它们会很容易燃烧。箱子里装有打火石和钢块，以及六支干火把。`,spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个宽敞且形状不规则的洞穴，地面是平滑的基岩。潮湿的泥土和石头构成墙壁，墙壁上这里那里突出着树根。一个五尺宽的隧道通向北方，东边则有一块石板——一个带有生锈拉环的门。在石门旁边，地板上放着几件破旧的斗篷和一个水袋。

隧道里满是泥泞。它向北蜿蜒很长一段距离，然后逐渐上升。大约两百尺后，它以一扇形成倾斜屋顶的木门结束。门边地板上放着一个小木箱，木箱旁边是一堆潮湿的沙子，沙堆中露出了火把的末端。`,dmGuidance:"如果角色们调查这条隧道，请阅读以下内容："},{id:"scn_62b",locationId:"loc_623",name:"T2. 石哨兵",activation:{condition:{type:"always"},priority:0},skeleton:["石门后六十尺处，隧道变得平坦。","两个石雕的严肃矮人，穿着锁子甲，手持战斧，隔着隧道相对而立。","这些雕刻从通道墙壁上突出，它们周围有空隙，因此它们可能是门。","通道在它们后面继续延伸。","如果推动，门会很容易地滑开。"],flesh:"如果推动，门会很容易地滑开。朝南的门通向一个长的石隧道，隧道尽头是一个被有洞的石凳覆盖的坑（一个几十年未使用的厕所）。大厅北侧的门守卫着通往T5区域的通道。",spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"石门后六十尺处，隧道变得平坦。两个石雕的严肃矮人，穿着锁子甲，手持战斧，隔着隧道相对而立。这些雕刻从通道墙壁上突出，它们周围有空隙，因此它们可能是门。通道在它们后面继续延伸。"},{id:"scn_62d",locationId:"loc_623",name:"T3. 笼形陷阱",activation:{condition:{type:"always"},priority:0},skeleton:["只有在一个角色检查天花板时才阅读以下文本：","天花板由边长约十尺的方形石板组成。","每个石板周围都有生锈的铁框。","这些石板相互之间以及与两侧墙壁之间悬挂着几英寸的距离。","它们在头顶上方形成了一排，沿着通道延伸下去。"],flesh:`只有在一个角色检查天花板时才阅读以下文本：

十个铁笼悬挂在链条上，覆盖在走廊上方，而"石板"实际上是笼子的底部。真正的天花板高度为25尺，每个笼子由5尺长的重型链条悬挂，笼子本身高度为10尺。从走廊看，底部的石板看起来像是10尺高的天花板。这些石板是涂漆以模仿石头的薄石膏板。

除非Grund（男性半兽人暴徒）已经被处理，否则他正通过观察缝隙窥视。凭借他的黑暗视觉，他能在60尺外发现接近的角色，但如果角色们携带光源，一旦他们经过T2区域的门，他就会立即注意到他们。

Grund的任务是困住入侵者。任何不是入侵者的人应该在距离门60尺的地方停下来，交叉拳头，并喊出'一个信徒来了！'。Grund会对不遵循这一协议的任何人放下笼子。

每个笼子的链条都穿过一个滑轮，滑轮固定在T4区域门内的一根沉重的铁条上。从他所在的位置，Grund可以采取一个动作来释放两条链条。他首先从隧道西端的笼子开始，封锁退路，然后是落在队伍上方的笼子。此时进行先攻骰。Grund在他的第二个回合用第三个笼子封锁通道的东端，并对尚未被困的角色落下另一个笼子。

一个下落的笼子瞄准通道中对应的10英尺方形区域。区域内的目标可以站立不动，当笼子底部的石膏破裂并封闭他们时，不会受到伤害。那些希望避开下落笼子的人必须成功通过一个 DC 15 的敏捷豁免检定。未能通过的人会被困在笼子中。那些未通过检定且结果差5或更多的人会被笼子底部的铁框击中。这样的生物受到7点（2d6）钝击伤害，并被压在笼子下。被压时，角色处于 倒地 和 束缚 状态。

一个角色若使用行动成功进行 DC 15 力量检定，可以抬起笼子，允许一个生物逃脱。成功进行 DC 20 力量检定则能够将生锈的铁条弯曲，足够让所有在笼子内或下方的生物逃脱。被笼子压住的角色缺乏良好的杠杆作用，进行这些力量检定时处于劣势。

如果格伦德将角色困在大厅里，他会跑去通知T8区域的巴拉古斯塔斯。巴拉古斯塔斯呼叫灾难使者（见T7区域），他们将在10分钟后到达。反派们逐一升起笼子攻击被困的角色，目的是捕获他们。拉拉赫随后计划在一场特别的仪式上牺牲这些角色。`,spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:["enc_62d"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`天花板由边长约十尺的方形石板组成。每个石板周围都有生锈的铁框。这些石板相互之间以及与两侧墙壁之间悬挂着几英寸的距离。它们在头顶上方形成了一排，沿着通道延伸下去。

在通道的尽头是另一扇带有铁拉环的石门。它微微敞开，门后是一片黑暗。门上大约五尺高的地方，有一个两英寸宽、一尺长的横条缝隙。`,dmGuidance:`如果队伍继续沿着T2区域以外的隧道向东走，他们会走入一个陷阱。
当角色们能看到大厅的东端时，请阅读以下内容：`},{id:"scn_633",locationId:"loc_623",name:"T4. 前厅",activation:{condition:{type:"always"},priority:0},skeleton:["这个宽敞的方形房间是从岩石中开凿出来的。","在房间西墙的中心位置有一道带有狭长观察缝的石门。","门边大约离地三尺高的墙上固定着一套铁栏杆。","十条涂油的链条固定在这些栏杆上，向上延伸至天花板上的一个洞。","另一道坚固的石门位于东墙的中间。"],flesh:`根据T3区域发生的情况，Grund（男性半兽人暴徒）可能站在西侧门旁，监视着走廊。Grund对从他背后出现的入侵者感到困惑。他站在那里呆呆地看了一会儿，最后说："你们不能在这里。你们必须走！"他指向西侧走廊。在明显的恼怒和绝望中，他攻击任何试图通过东侧门离开的人。

被压在一堆小石块下的是一个名叫布雷伦·哈瑟汉德的十一岁男孩（男性特西里安人类平民，有2点生命值，没有有效的攻击能力）。他时而清醒，时而昏迷。如果有陌生人进入房间，他会勉强恢复意识，微弱地恳求自由。

布拉伦在这里被压了两天。沉重的石头被精心放置，以固定他的位置，而不会压碎或破坏任何东西。他感到寒冷、口渴、饥饿、疲倦和害怕。如果这个男孩被恐吓或欺负，他会因恐惧而变得沉默。如果以友好的方式接近他，他首先会乞求食物和水。他可以提供以下信息作为对角色问题的回应。

信徒们因为他不听话而把他关在这里作为惩罚。他未能将他父亲罗斯哈·哈瑟汉德给伊尔梅斯·维尔弗的消息传递出去。那是一张他没有阅读的纸条。

罗斯哈尔是信徒之一。布拉伦知道的其他信徒包括巴拉古斯塔斯·哈布克勒、马尔兰德罗·盖尔库尔和伊尔梅斯·维尔弗。这个男孩还知道格伦德并不是真正的信徒，但信徒们照顾他，所以他按照他们的吩咐去做。

信徒是一个由镇上一些最重要的人组成的秘社。他们守护着移动的石头，并确保没有人打扰埋葬在这里的挖掘者。信徒们仔细监视着移动的石头，因为石头移动是一个不好的征兆，他们必须弄清楚这意味着什么以避免危险。（这些信息并不真实，但信徒和布雷伦是这么相信的。）

布拉伦并不生他父亲的气，也不生信徒们的气。他认为这种待遇是正常的，并且他担心他的父亲可能会发现惩罚在预定结束之前就结束了。

移动石块的房间和被埋葬的探险者在东边，越过另外三扇石门。

这里固定在铁栏杆上的链条连接着T3区域的笼子。角色可以通过拉动链条将倒下的笼子恢复到原来的位置。

立石上的铭文用通用语写着："不要触怒挖掘者。"`,spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个宽敞的方形房间是从岩石中开凿出来的。在房间西墙的中心位置有一道带有狭长观察缝的石门。门边大约离地三尺高的墙上固定着一套铁栏杆。十条涂油的链条固定在这些栏杆上，向上延伸至天花板上的一个洞。另一道坚固的石门位于东墙的中间。
一个八尺高的长方形石头竖立在房间中央。石头上的铭文从远处看很难辨认。在立石的底部，一个身材矮小的人类被压在地上，面朝下，他的手臂、腿和背上都压着石头。他赤着脚，穿着破烂的衣服。`,dmGuidance:"如果角色释放了布雷伦，他会尝试通过T1区域的隧道回到地面。"},{id:"scn_639",locationId:"loc_623",name:"T5. 腐尸室",activation:{condition:{type:"always"},priority:0},skeleton:["角色们在接近这个房间时嗅到了死亡的气息。","隧道通向一个散发着腐烂肉味的方形房间。","三具人类的尸体，几乎只剩下血迹斑斑的骨头和筋腱，横卧在房间中央。","两只过大的老鼠在尸体中觅食，停下来咀嚼它们扯下来的肉。","墙壁上的狭窄裂缝中传来急促的爬行声。"],flesh:`角色们在接近这个房间时嗅到了死亡的气息。

五只巨鼠通过狭窄的裂缝找到了进来的路，这些裂缝刚好够这些啮齿动物挤过去。两只在房间中央，还有三只潜伏在裂缝中。信徒们还不知道老鼠在这里，而且这顿可怕的大餐足以让老鼠不再游荡。如果入侵者给巨型老鼠足够的空间，并且不惊吓它们，它们会忽略入侵者。如果受到伤害或挑衅，它们会进行攻击。

这些尸体是那些在红松镇附近失踪的旅行者。每个人的额头上都被深深地刻上了土之邪教的标志，以至于刻入了头骨。为了通过土之邪教徒拉拉克（见T9区域）所命令的测试，信徒们在过去一个月里分别伏击并杀害了这些旅行者。信徒们很少是杀人犯，但拉拉克正在操纵他们去做越来越黑暗的事情。`,spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:["enc_639"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"隧道通向一个散发着腐烂肉味的方形房间。三具人类的尸体，几乎只剩下血迹斑斑的骨头和筋腱，横卧在房间中央。两只过大的老鼠在尸体中觅食，停下来咀嚼它们扯下来的肉。墙壁上的狭窄裂缝中传来急促的爬行声。"},{id:"scn_63b",locationId:"loc_623",name:"T6. 悬浮石",activation:{condition:{type:"always"},priority:0},skeleton:["隧道通向一个方形房间。","在房间的中心，一块直径约一尺的黑色岩石悬浮在离地面三尺的空中。","一块普通的岩石因古老的魔法而漂浮在此，魔法维持着一个隐形的从地板到天花板的圆柱体，直径10英尺。","对于en=Detect Magic（变化学派）可见，柱子使放置并留在其中的物体在释放处漂浮。","柱子最多可承载500磅。"],flesh:"一块普通的岩石因古老的魔法而漂浮在此，魔法维持着一个隐形的从地板到天花板的圆柱体，直径10英尺。对于en=Detect Magic（变化学派）可见，柱子使放置并留在其中的物体在释放处漂浮。柱子最多可承载500磅。超过此重量的物体会坠落。",spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"隧道通向一个方形房间。在房间的中心，一块直径约一尺的黑色岩石悬浮在离地面三尺的空中。",dmGuidance:"如果角色将岩石（重20磅）移出柱子，它将脱离效果并坠落到地板上。"},{id:"scn_63d",locationId:"loc_623",name:"T7. 矮人雕像",activation:{condition:{type:"always"},priority:0},skeleton:["这个五十尺见方的房间是从岩石中雕刻出来的。","地面粗糙但平坦，墙壁上显示了最初建造者的凿痕，天花板大约十尺高。","中间有铁拉环手柄的相同石门，分别位于东、北和西墙。","房间中央矗立着一尊栩栩如生、真人大小的矮人战士雕像，身穿锁子甲，头戴头盔，脚穿大靴子。","他左臂持盾，右手握战斧。"],flesh:`这座雕像是一个被石化且早已死去的矮人。在支撑它的框架上，有一行小巧而整洁的铭文写道：

细砾环绕在雕像周围，距离雕像5尺，旨在标记一个适当尊重的距离。信徒们有一个传统，就是在这里留下小贵重物品以求好运。拉拉克敦促他们每十天带来更多，这样他就可以收集起来，当他离开红松镇时带走。

信徒们在这里留下的供品包括440铜币、253银币和97金币。六颗小绿玛瑙（每颗价值5金币）和两块磨光的月长石（每块价值50金币）也在这些硬币之中。

为了鼓励信徒们，拉拉克留下了一把装饰有星形图案和夜蓝色皮革握柄的+1 匕首。匕首上还沾着在T5区域杀害并雕刻符号的受害者时使用的干血。这把匕首在击中或切割物体时不会发出声响。

匕首的柄头上刻着"雷祖尔"这个名字。如果持用者说出这个名字，刀刃会发出微弱的、寒冷的辉光，在10尺半径内散发出2，直到持用者再次说出这个名字。

用不了多久，红石镇的黑土邪教徒——那些所谓的"灾厄使者"——就会得知角色们探索墓穴的消息。他们不希望任何人揭露他们操纵镇上长老的阴谋，于是便通过区域T1的北面隧道潜入墓穴，追捕队伍。这些邪教徒可以在这里追上队伍，或者如果你愿意，也可以安排在区域T9。

教派成员会匆忙前往角色们未使用的入口，并开始搜索墓穴。

灾难使者是六名匪徒们，他们的皮甲上印有黑土教派的标志。（这次遭遇对于只有1级的队伍来说很难。）当灾难使者遇到冒险者时，匪徒们严肃而自信地说："我们是灾难使者。我们来奖励你的好奇心。"然后教派成员开始攻击，战斗至死。其中三人保持距离，向施法者射击，每次集中火力攻击一个敌人。另外三人前进，与队伍的其余成员进行近战。`,spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_63d_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个五十尺见方的房间是从岩石中雕刻出来的。地面粗糙但平坦，墙壁上显示了最初建造者的凿痕，天花板大约十尺高。中间有铁拉环手柄的相同石门，分别位于东、北和西墙。房间中央矗立着一尊栩栩如生、真人大小的矮人战士雕像，身穿锁子甲，头戴头盔，脚穿大靴子。他左臂持盾，右手握战斧。雕像显然已经被粗暴地破坏，头部和上躯干、下躯干和腿部。这些部分已经被重新组装，并在一个坚固的木框中固定在一起并直立。在雕像前的地面上，一把匕首连同几枚硬币和宝石，围绕着一圈细砾。",dmGuidance:`【T7. 矮人雕像】石化的铁星矮人(?)
在1459 DR年在红松西采石场发现
处于破损状态。
如果队伍在地面塌陷之前进入地牢，梅利克霍石雕场或瓦卢尔的马车工坊附近的村民或教派监视者会注意到角色们的活动。`},{id:"scn_642",locationId:"loc_623",name:"T8. 接近",activation:{condition:{type:"always"},priority:0},skeleton:["一条通道——宽十尺，高十尺，由岩石凿成——向前延伸四十尺。","在通道东端门旁边的墙上挂着一盏小灯笼。","一个秃顶、无胡须的老年男性人类坐在灯笼旁的木凳上，穿着打补丁和褪色的工作裤和配套的束腰外衣。","他正在漫不经心地削着一根棍子。","这个人是红松镇的长老，名叫巴拉古斯塔斯·哈布克勒，一个退休的木匠（男性Tethyrian人类平民）。"],flesh:`这个人是红松镇的长老，名叫巴拉古斯塔斯·哈布克勒，一个退休的木匠（男性Tethyrian人类平民）。

巴拉古斯塔斯，一个信徒，没有武装并且害怕角色们。他扑倒在地板上，恳求宽恕。巴拉古斯塔斯太虚弱了，无法进行任何形式的抵抗，但他搓着手，恳求角色们不要通过扰乱墓穴（区域T9）的石头来激怒'挖掘者'的愤怒。

巴拉古斯塔斯知道布雷伦所知道的一切（见区域T4）。他自由地承认了信徒的存在，并解释了移动石头的谜团，告诉角色们：'时不时地，当没有人在看的时候，那些巨石会改变位置。那就是它们与我们交流的方式。它们向我们展示即将到来的危险的征兆，并在我们做出错误的选择时警告我们。'

这位老木匠对多年来信徒在红松镇的影响力了解甚多。他无意中提到了最近与'土之祭司'的牵连，这些人帮助他们理解移动的石头。他对拉拉克相当害怕，而且比起冒险者，他更害怕土教派的教徒。

巴拉古斯塔斯并不像他表现得那么无辜。他否认知道任何谋杀或其他不法行为，当提到如T5区域的尸体等证据时，他假装惊讶。这位老人没有参与这些活动，但他的否认是谎言。他知道有关谋杀的事情。

巴拉古斯塔斯身上有25铜币和19银币。他还有一枚简单的银婚戒，价值10金币。`,spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_642_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一条通道——宽十尺，高十尺，由岩石凿成——向前延伸四十尺。在通道东端门旁边的墙上挂着一盏小灯笼。一个秃顶、无胡须的老年男性人类坐在灯笼旁的木凳上，穿着打补丁和褪色的工作裤和配套的束腰外衣。他正在漫不经心地削着一根棍子。"},{id:"scn_647",locationId:"loc_623",name:"T9. 移动石室",activation:{condition:{type:"always"},priority:0},skeleton:["若是如此，他会迅速放下提灯并躲藏起来。","以下描述性文字基于这一情况:","这里雕刻出了一个有着二十尺高的天花板的巨大房间。","一盏点亮的灯笼放在房间中心附近的地面上。","一些奇怪的石碑阵列——有些是直立的石头，还有一些排列成三石拱门——围绕着房间站立。"],flesh:`若是如此，他会迅速放下提灯并躲藏起来。以下描述性文字基于这一情况:

拉拉克隐藏在一块较大的石头后面。他几乎把所有时间都花在这个房间里，研究这些古老的石头并试验魔法地面。当他看到角色们时，他会用他的魔法攻击他们。

拉拉克利用房间里的石头作为掩护，但他无意战斗至死。如果这个地方被发现了，他无法迅速轻松地消灭入侵者，拉拉克会试图通过一个秘密门逃跑（见下文）。他触发了一次岩崩来掩护他的逃跑。

拉拉克在黑土教派的祭司中因搞砸了一些早期任务而声名狼藉。他决心通过颠覆和利用信徒，不使用暴力征服红松镇。在冒险者出现之前，他计划用越来越黑暗的服从和邪恶行为来困住信徒，然后通过他的新仆人接管这个镇子。

灾厄使者会稍晚抵达战场，或从区域T8，或从秘密门出现，即在队伍击败拉拉克或他成功逃脱几分钟后。

石板上是人类矿工的骨头，他们在红松镇成立之前发现了这个房间。没有一个骨架是完整的；每个都有压碎的肢体、胸腔或头部。这些伤害与采矿事故一致。信徒们尊敬这些骨架，称他们为"探矿者"，并让尸体保持原样。

在东南角有一扇秘密门，需要通过一个成功的 DC 15 感知（察觉）检定来发现，注意门周围的未砌筑石料。这门以中心点为轴旋转，向两侧打开一条狭窄的通道。隧道通向瓦埃尔瓦车厂（Red Larch，区域 16）后院的一个木棚。

土教派教徒使用这条通道进出墓穴，信徒们将其伪装起来以避免好奇者的注意。隧道深处部分被灰尘覆盖的帆布、破碎的梁木和松动的岩石堵塞，看起来像是坍塌了。一个中等体型或更小的生物可以小心地穿过这些碎片。如果有人采取行动拔出一根支撑木，这些杂物就会真正坍塌。然后，隧道的10尺段被埋在堆中，阻塞了通道。清除这些碎片需要几个小时的工作。

这个区域是由贝西尔默的矮人在数千年前雕刻出来的大型储藏室和工作室。矮人们留下了一系列奇特的柱子、门槛石、横梁石以及雕刻的石门。来自古代法洛姆王国的人类矿工发现了矮人的挖掘。矿工们选择在这里埋葬他们的死者。直到红松镇的信徒们发现这里，这个房间再次被遗忘。

矮人们给这个房间的地板施加了魔法，使其能够使接触到它的石头悬浮，因此可以用en=Detect Magic（变化学派）来探测地板的魔法。对地板产生中等强度的冲击，比如掉落一个至少1磅重的物体或者用力跺脚，就会激活悬浮效果，效果持续1分钟。当地板激活时，石头会悬浮在地板上方不到一英寸的地方，并且可以通过轻触移动。因此，轻微的地面震动可以使石头移动。入侵者，甚至是野兽，也可以无意中移动石头。

信徒们从未弄清楚这种魔法，也没有人见过石头悬浮。拉拉克和黑土教派的教徒发现了地板的工作原理。他们一直在通过移动石头来娱乐自己，并告诉信徒们这些神秘的举动是可怕的不祥征兆。

拉拉赫参与了对米拉巴代表团的袭击，如第三章所述。（代表团失踪的消息直到你准备好继续冒险的下一部分才会传到红松镇。）他携带着四根米拉巴贸易条，每根都是一尺长的铁制纺锤形，像两个底部相连的长四面金字塔。这些条是真品，所以敲击时会发出独特的声音。每根价值5金币。任何来自北方的角色都能认出这座城市独特的货币。`,spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:["enc_647"],treasureSlotIds:["trs_647_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[158],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这里雕刻出了一个有着二十尺高的天花板的巨大房间。一盏点亮的灯笼放在房间中心附近的地面上。一些奇怪的石碑阵列——有些是直立的石头，还有一些排列成三石拱门——围绕着房间站立。六块低矮的石板靠在房间周围的墙壁上。每块石板上都放着类人生物的骨头，穿着破布和生锈的铁器。",dmGuidance:`如果角色在 区域T8 与巴拉斯塔斯交谈或检查该区域的门，一位名叫拉拉克的黑土祭司（参见第七章）会听到他们。
如果角色们尚未与灾厄使者交战（参见区域T7），他们将在此处遭遇。`,mapGeometry:{imageRef:"adventure/PotA/079-poa06-07.webp"}},{id:"scn_651",locationId:"loc_5f5",name:"支线任务",activation:{condition:{type:"always"},priority:0},skeleton:["从亚特塔到沃姆福德，从西伍德到高森林，危险且看似无关的局势正在广泛分散的地方出现。","在元素先知及其教派被击败之前，这些麻烦都无法彻底解决，但这并不意味着这些次要事件可以被允许恶化。","角色们可能会得出结论，认为其中一些问题非常严重，必须立即处理，即使这意味着要将注意力从对抗邪恶元素的行动中转移开。","本章中介绍的支线远征在此部分进行了总结，同时列出了它们的等级。","下一节和支线远征本身中将介绍涉及角色的选项。"],flesh:`从亚特塔到沃姆福德，从西伍德到高森林，危险且看似无关的局势正在广泛分散的地方出现。在元素先知及其教派被击败之前，这些麻烦都无法彻底解决，但这并不意味着这些次要事件可以被允许恶化。角色们可能会得出结论，认为其中一些问题非常严重，必须立即处理，即使这意味着要将注意力从对抗邪恶元素的行动中转移开。

本章中介绍的支线远征在此部分进行了总结，同时列出了它们的等级。下一节和支线远征本身中将介绍涉及角色的选项。有些与元素教派直接相关，有些则是与教派无关但需要立即关注的情况。这些短小的冒险可以提供很好的节奏变化。

当'权衡客栈'的客栈老板被叫走时，角色们被请求临时接管管理几天。散塔林会内部的争斗使得本应是例行公事的任务变得更加具有挑战性。这次冒险是为3级角色设计的，尽管在更低或更高等级也同样可以进行游戏。

一个因元素教派引发的自然灾害而流离失所的兽人部落，对山谷东部的农场主发起了一系列袭击。这次冒险是为4级角色设计的。

德萨林谷的贸易正逐渐陷入停滞。现在至关重要的是确保一队商队能从权衡客栈安全到达特里博尔。这次冒险是为5级队伍设计的。

黑土教派通过散布有关火巫婆恐吓内特尔比半身人氏族的谣言，为角色们设置了一个陷阱。这次冒险是为6级角色设计的。

一个神圣的矮人神殿陷入了沉默，导致角色们前去调查。他们得知一个杀人犯恶棍已经占领了这个圣地。这个冒险是为一个8级队伍设计的。

罪犯们正在拍卖一个毁灭法球给出价最高的人，角色们必须先一步夺回它。这个冒险是为一个9级队伍设计的。

一个被称为黑暗女士的邪恶实体潜伏在朗德雷特庄园，俯瞰着长路。多年来，商队安全地匆匆经过，但现在路上出现了尸体。有些东西已经改变了，而且情况并不乐观。这次冒险是为10级角色设计的。

传说中的托希尔德·火焰舌王的墓地，是古老的矮人王国贝西尔默的创始人，位于猎斧大厅。当一位年轻的矮人贵族出发寻找矮人国王的陵墓时，角色们发现他并不是唯一一个追求这个奖赏的人。这次冒险是为11级角色设计的。

这些支线任务为突出每个角色对主要派系的忠诚提供了极好的机会。不同的派系关注不同的情况。特别适合每个派系的支线任务包括以下内容：

翡翠联盟关注冰盾兽人的袭击以及有关尼特比农场附近被亵渎的乌斯加德古墓的故事。

竖琴手们担心来自朗德雷特庄园的黑暗女士所带来的威胁。他们也致力于保护隐藏在猎斧大厅中的宝藏。

领主联盟认为有必要向普通商人展示长路仍然安全。随后，联盟决定是时候将长期埋藏在猎斧大厅中的托希尔德·火焰舌王的传奇武器重新带回阳光下。

挑战者之秩序担心冰盾兽人的袭击。他们也想要确保舞水谷中隐藏的神庙保持安全。

散塔林会急于恢复该地区正常的商业流通，让商队在长路上行驶。他们还在巴格莱特旅馆有所顾虑。`,spotlightRefs:[],presentNpcIds:["npc_braelen_hatherhand"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[159],confidence:"high",needsReview:!1,extractorNotes:"支线任务总览归章节枢纽，不归移动石墓。；overlay覆写:locationId/_meta"}},{id:"scn_65d",locationId:"loc_65d",name:"新管理",activation:{condition:{type:"always"},priority:0},skeleton:["巴格莱特旅馆依赖于从亚塔尔定期通过驳船顺流而下的补给，但它的常规补给船已经逾期。","旅馆老板纳拉斯克·瑟兰德，一个散塔林会的特工，正在组织一次前往深水城的补给行动，与那里的上级讨论事宜。","他需要有人在他缺席时照看旅馆。","纳拉斯库尔与查拉斯卡·穆鲁因合作，但并不信任她。","查拉斯卡是一位言简意赅、目光冷酷的人类老兵。"],flesh:`巴格莱特旅馆依赖于从亚塔尔定期通过驳船顺流而下的补给，但它的常规补给船已经逾期。旅馆老板纳拉斯克·瑟兰德，一个散塔林会的特工，正在组织一次前往深水城的补给行动，与那里的上级讨论事宜。他需要有人在他缺席时照看旅馆。

纳拉斯库尔与查拉斯卡·穆鲁因合作，但并不信任她。查拉斯卡是一位言简意赅、目光冷酷的人类老兵。她是高级剑士，掌管着旅馆的四十名警卫（被称为剑士）。查拉斯卡管理着这个社区，但她知道纳拉斯库尔是她的制衡力量，并且他被命令监视她，正如她也监视他一样。查拉斯卡不喜欢纳拉斯库尔，并会乐于看到他永久消失。散塔林会可以迅速替换纳拉斯库尔，但这样的替代者不会知道旅馆的职能已重新安排为查拉斯卡的利益服务。

这种情况让瑟兰德不愿意在前往深水城时任命穆因作为他的临时替代者。相反，他更愿意挫败她，并为任何出错的事情找一个容易的替罪羊。

查拉斯卡和纳拉斯库尔并不知道，一位名叫英格洛·布拉森（男性矮人 间谍）的野心勃勃的散塔林会特工已经以勤杂工的身份建立了掩护，这使他能够看到并偷听到秘密。英格洛认为纳拉斯库尔在牺牲散塔林会利益的情况下中饱私囊。他怀疑查拉斯卡对纳拉斯库尔的贪污行为视而不见，但由于害怕查拉斯卡且没有证据，他无法指控她。英格洛决定两人都需要被陷害并取而代之。

这段冒险发生在角色们遇到纳拉斯库尔·泰隆德（男性半精灵间谍）时。他会请求角色们帮忙经营酒馆大约十天，承诺给予丰厚的报酬并向他的上司做出良好的推荐。他急着离开，因此不会亲自将钥匙交给他们。

在此之前，他告诉旅馆员工角色们接受了这份工作。当事情开始出现问题时，巴格莱特旅馆中的其他人会急忙找到角色们。

然后那个人会请求角色们的帮助。或者，角色们仅仅是作为事件展开时在场的人。

由于散塔林会控制着巴格瑞特旅馆，可能会有大量的 斥候、间谍们 和 暴徒 出现在旅馆区域。这些特工可能在休息或在执行特殊任务。无论如何，他们都会为散塔林会的利益警戒。

旅馆老板的首要职责是确保大门和重要内部门的钥匙安全，不受散塔林会的敌人威胁。该组织的谈判、交易和后勤准备工作必须保持安全。所有的钥匙都挂在旅馆老板办公室附近的酒馆酒吧间的柜子里。当办公室无人使用时，柜子和办公室都会被锁上。

这些黑色的、粗杆的钥匙和一个大人的手一样长，它们的手柄末端画有独特的红色泪滴。红色泪滴的数量标识了每把钥匙属于哪个锁。

纳拉斯克前往深水城后，六把钥匙立即失踪。英格洛为了质疑纳拉斯克的判断，偷走了这些钥匙，并将它们藏在南塔阁楼的箱子里。最晚在查拉斯卡要求一些钥匙以便晚上锁门时，角色们注意到钥匙已经从它们通常的位置消失了。

六把失踪的钥匙分别用来打开外墙的主门、外墙的后门、两扇类似的内墙门、南旅馆塔楼的会议室以及北塔楼基座的保险箱。最后一个房间是散塔林会存放薪水箱、赃物、贵重物品和重要物品的地方。

当钥匙失踪的情况变得明显时，查拉斯卡拉响了警报，并在大门上增加了一倍的守卫。然后她召集其他剑士搜索这个设防的社区及其访客。

在钥匙失踪前，感知最高的角色曾在酒馆大堂中，他记得一个衣着考究的男性人类在Chalaska询问钥匙之前迅速离开了酒馆。

随着搜索行动的展开，查拉斯卡对新任旅馆老板说："你打算如何处理丢失的钥匙？也许它们根本就没有丢失！" 然后她命令四名剑士搜查旅馆老板，寻找钥匙。查拉斯卡虽然不信任，但愿意接受旅馆老板目前没有钥匙的事实。

在发生暴力事件的情况下，剑士们会尝试解除对方的武装并制服对方，而不是杀害。查拉斯卡很强硬，但并不残忍。她和她的同伴也会在面对优势力量时退缩。

当关于钥匙的骚动开始时，英格洛计划的第二阶段展开。

英格洛在格伦多身上种了一个便条，格伦多是一个年轻的酒馆服务员（男性泰瑟瑞安人类平民）。当每个人都在为剑士们翻找口袋时，格伦多发现了这张便条。这张皱巴巴的羊皮纸上写着："告诉肯德林·费拉尔，是查拉斯卡。" 格伦多不知道他是怎么得到这张便条的，也从未见过一个叫肯德林的人。他对查拉斯卡感到害怕（同时也有点迷恋），所以他非常诚实。

宾客登记簿显示，一位名叫肯德林·费拉尔的商人住在旅馆里。

肯德林通常在北剑海岸地区销售异国情调的动物及其部件。长路上的贸易问题让他感到不安。

英格洛在早些时候的酒吧互动中从肯德林那里了解到了所有这些信息。英格洛还偷偷给肯德林塞了一张便条。那张便条上写着："他们在监视。你在这儿不安全。"

当在房间里被对峙时，肯德林（男性奇恩达坦人类贵族）正在打包。他丢下一个木盒并开始逃跑，他惊恐地尖叫着，失去了理智。木盒掉落时破碎了，释放出四只异国情调的蜘蛛。他把便条掉在了床上。

肯德林推搡或拳击任何挡住他去路的人。只有当有人对他使用武器时，他才会拔出武器。当他最终与一名剑士发生肢体冲突时，所有的剑士都会聚集起来捕获他。

肯德林不是散塔林会的成员。当他最终被制服时，关于格伦多的便条，他不知道任何阴谋或者查拉斯卡是谁。至于第二张便条，他承认了自己的麻烦。

当所有人都在处理肯德林的问题时，英格洛抓住机会去探查纳拉斯克的保险箱里藏了什么。为了诋毁查拉斯卡，因为她允许盗窃发生，以及纳拉斯克，因为他将巴格莱特旅馆交给了无能之手，英格洛拿走了500金币。然后他洗劫了这个房间。

在离开保险箱房间之前，英格洛仔细地放置了两个他从查拉斯卡的一件衬衫上偷来的独特的银色狐狸头纽扣。巴格莱特的大多数当地人和所有的剑士都认得这些纽扣。然后英格洛故意留门微开离开了。

英格洛在之前藏钥匙的箱子里藏了200金币。然后他偷偷地把钥匙和300金币放进了查拉斯卡的卧室。

角色们有可能发现英格洛尔在搞鬼。然而，在旅馆里走动时，他通常不会表现得很可疑。他是个杂工，他有理由在旅馆的任何地方。

盗窃案发生后，英格洛走进巴格莱特旅馆的其他区域。在当地人中，他开始了一场关于旅馆内发生奇怪事情的耳语运动。他提醒那些听他说话的人，查拉斯卡负责安全。

如果几个小时内没有人对金库发出警报，英格洛尔会在早上发现门开着。由于英格洛尔前一晚的闲谈，旅馆的酒吧比平时有更多的人来吃早餐。他公开宣布了问题，并敦促有人去调查。这位矮人甚至自愿成为第一个被搜查的人，如果这可以"让事情开始"的话。

随着调查的进行，他说："我听说昨晚有关查拉斯卡的某种争执。有人有关于她的便条吗？" 他后来又补充说："纳拉斯克负责的时候，从没发生过这样的事情。也许他本应该在这里。"

此时，所有线索都指向查拉斯卡。保险箱里有她的纽扣。她的房间里有钥匙和一些被盗的金币，还有她破损的衬衫。随着证据的累积，她变得越来越焦虑。作为高级剑士，她冒险影响一些忠诚的剑士来帮助她。这些叛徒将自己锁在保险箱房间里。

在南塔的阁楼进行彻底搜索可能会找到藏在那里的箱子和黄金。在这种情况下，英格洛的贪婪可能会成为他的致命弱点。阁楼地板上的灰尘中有他的脚印。查拉斯卡的则没有。

纳拉斯克回来时发现巴格莱特旅馆处于角色们决策导致的状态。通过他的账本，他确认储藏室里少了500金币，而不仅仅是300。这最后的发现可能会导致另一次搜索，最终指向英格洛，他是旅馆内唯一的矮人员工。

如果没有，英格洛尔成功。查拉斯卡名誉扫地并被撤职。纳拉斯库尔在散塔林会面前丢了面子，角色们也是如此。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_pota_new_management_spiders"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[160],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`如果角色们接受，纳拉斯库尔会指定一名角色（最好是与散塔林会有关联的人）作为酒馆老板，并告诉他或她钥匙的位置以及这些钥匙的重要性（见下面的"钥匙职责"部分）。
如果角色们拒绝，瑟兰德会留下一张关于钥匙的便条并前往深水城。
如果角色们与散塔林会没有联系，那么他们已经结交或者欠人情的人会同意经营旅馆。
如果角色成功通过一个 DC 10 Wisdom（洞悉）检定，他或她会记得那个男人看起来很焦虑，手里还拿着一张小小的纸条。`,mapGeometry:{imageRef:"adventure/PotA/082-poa06-09.webp"}},{id:"scn_668",locationId:"loc_668",name:"冰盾兽人",activation:{condition:{type:"always"},priority:0},skeleton:["兽人袭击在边疆地区是常见的事件，一小群兽人会偷窃家畜或伏击偶尔的补给马车。","最近几天，隐藏在苏姆伯山以东崎岖地带的一个部落变得明显更加大胆。","冰盾兽人正在袭击整个地区的农场和牧场，而且兽人侦察兵在距离亚塔尔不到一天骑程的地方被巡逻队发现。","尽管居住在该地区的人们坚韧独立，能够应对偶尔的袭击，但有组织兽人战斗小队的报告让他们感到担忧。","农民和牧场主采取措施保护自己，但他们也在寻找愿意阻止兽人在他们的土地上肆意妄为的冒险者。"],flesh:`兽人袭击在边疆地区是常见的事件，一小群兽人会偷窃家畜或伏击偶尔的补给马车。最近几天，隐藏在苏姆伯山以东崎岖地带的一个部落变得明显更加大胆。冰盾兽人正在袭击整个地区的农场和牧场，而且兽人侦察兵在距离亚塔尔不到一天骑程的地方被巡逻队发现。

尽管居住在该地区的人们坚韧独立，能够应对偶尔的袭击，但有组织兽人战斗小队的报告让他们感到担忧。农民和牧场主采取措施保护自己，但他们也在寻找愿意阻止兽人在他们的土地上肆意妄为的冒险者。

冰盾兽人居住在高森林西缘沿线，大约一天路程间隔的几个小屋中。他们一直是那些森林居民和在西部平原上耕种、放牧的定居者们的眼中钉。现在，冰盾兽人已经变成了一个突出的威胁。由于元素邪教使用强大的魔法导致的气候和景观的干扰，被解释为格乌什的一个信号，即血液和黄金必须从劣等种族的土地上流出。

兽人在山谷中寻找补给来源。侦察兵发现该地区的农民和牧场主是首选目标。现在，流浪的战斗小队直接攻击边疆家庭，肆无忌惮地袭击家园。除了偷窃家畜，冰盾部落还会带走他们发现的任何车辆和马车，用它们装载战利品。他们将家庭作为奴隶带走，并强迫他们将运输工具拖回冰盾部落的住所。

一些有独立思想的兽人小队认为，家园的肥沃土地比在他们自己的部落里当下属更有吸引力，于是他们杀死了原主人，占领了这片土地。他们没有打算耕种庄稼或照料牲畜，但他们打算住在那里直到食物耗尽，然后转移到下一个定居点。

定居者们与翡翠联盟和战锤秩序的成员一起，向高森林的精灵求助。精灵们组织了狩猎队伍，以结束这种骚乱。现在，农民和牧场主正努力坚持足够长的时间，等待精灵们平息这场动乱。

在穿越该地区时，角色们发现了安德里尔农场的家园正在燃烧。兽人发动了袭击，俘虏了几名农民，并放火烧毁了这个地方。从那里，角色们前往戴尔蒙牧场，他们可以在那里帮助防御，直到高森林的精灵们到来提供帮助。

或者，使用以下选项之一将角色引入这个支线任务：

下一次角色们进城休整、补给或处理其他事务时，他们从流离失所的当地人那里听说了兽人的袭击，并被请求帮助。

"铁手套"秩序的成员，可能在峰会大厅，寻找其他派系成员以找到恩内德·斯托特布莱德，因为他已经好几天没有消息了（见"戴尔蒙农场"部分）。

翡翠联盟的成员对派往高森林会见精灵的代表团失踪成员感到担忧，并需要有人去寻找他们（见"戴尔蒙牧场"部分）。代表团使用en=Animal Messenger法术发送了一条消息，说："我们被困在戴尔蒙牧场，被一支兽人战团围攻。目前安全，但我们不敢离开。发送援助。确保他们很坚强。"

这次遭遇发生在一天的早些时候。

燃烧的农场距离五分钟的行程。一旦角色们接近到视线范围内，请阅读以下内容：

塞尔温·安德里尔，一个男性半精灵，和他的人类妻子梅根在这个农场生活了八年。梅根正期待着这对夫妇的第一个孩子。他们雇佣了两个工人，是一对年轻的人类兄弟，名叫奥布和菲普·拉维尔，他们从深水城来到这个地区，以逃离城市生活，享受乡村生活。

大约一个小时前，冰盾部落的兽人袭击了这个农舍，俘虏了梅根和兄弟俩。他们严重伤害了塞尔温，塞尔温在试图保护他的妻子时被打得失去意识。兽人强迫兄弟俩把家里的马车装满他们认为可以用的东西。在放火烧了谷仓和房子后，兽人离开了，强迫兄弟俩拉着马车。梅根被塞在马车中的货物堆里。

火是在建筑的后侧被点燃的，并且正在向前方蔓延。塞尔温感到头晕，无法自救。

如果任何角色接近房子60尺以内，他们会听到塞尔温因烟雾而咳嗽，微弱地呼救。一旦有人通过前门进入，请阅读以下内容：

塞尔温（一个还剩1点生命值的平民）可以轻易地被抬或领到外面。一旦到了外面，他需要几分钟时间来清理肺部。塞尔温对他妻子的命运感到非常焦虑。对燃烧的房屋进行快速搜索显示，里面没有其他人，无论是死是活。在谷仓里也没有找到任何遗体。

塞尔温尽可能地讲述了他在昏迷前记得的事情。否则，他会疯狂地四处寻找任何能揭示她和拉维尔兄弟发生了什么的线索，并独自步行出发。

离去的兽人及其俘虏的马车和靴印在松软的土壤中非常明显。一旦找到，它们很容易跟踪。

兽人、囚犯和马车队的行进速度并不快，所以角色们赶上他们并不困难。追踪兽人足迹的角色们在追踪他们三十分钟内就能追上。否则，兽人在他们接近时就会发现他们。无论如何，请大声朗读以下内容：

这四只兽人因最近成功袭击了几个农场而变得胆大妄为。他们立即发起攻击，首先投掷他们的标枪，然后向角色们移动，与他们进行近战。如果塞尔温与团队在一起，他不会与兽人战斗，而是冲向马车去释放梅根。拉维尔兄弟因疲惫无法协助任何战斗。

即使角色们赢得了战斗并成功地解救了农舍居民，安德里尔家的地方也已经被毁，他们必须找到过夜的地方。他们听说其他定居者聚集在德尔蒙牧场以防御袭击队伍，并希望前往那里。他们请求角色们护送他们。

戴尔蒙家族在这个地区居住了好几代，并且被该地区的其他农场主所熟知。他们是一个富裕的家庭，通过辛勤耕作土地而积累了财富，他们不愿意让一群兽人把他们赶走。他们听说了兽人战争团伙的肆虐故事，并看到了附近的侦察兵。当附近的小农场开始遭到攻击时，凯宾·戴尔蒙发出消息，任何人都可以为了安全而留在他们的大院里。许多农民和牧场主接受了戴尔蒙的提议。

在场的每个有能力的人都投入了帮助加强防御。他们建造了一系列低矮的土岭和壕沟作为防御工事，贯穿于各个建筑物之间（见地图），并在屋顶线上拼凑了临时的城垛供投掷战斗人员使用。他们还储备了武器和弹药。

凯宾·戴尔蒙（男性泰瑟瑞安人类贵族），戴尔蒙家族的族长，尽管他的家庭处于危险之中，可能撤退到亚塔尔会更安全，但他拒绝离开他的家。他决心留下来战斗，任何人的话都没有改变他的主意。凯宾的女儿德琳娜向高森林的精灵发送了一条消息，但没有人知道他们是否会回应，或者何时会回应。据他们所知，牧场的守卫者只能依靠自己。

在牧场的其他德尔蒙家族成员包括以下人员：

凯宾的长子，佩尔德（男性特提里亚人类贵族），同意他父亲永不放弃的心态。佩尔德担心孩子们的安全，并私下怀疑留下来是否是一个错误。

珀德的妻子，玛卡（女性泰瑟瑞安人类斥候）担心他们的安全。

凯宾的次子，德琳娜（女性特提里亚人类德鲁伊）是翡翠联盟中一个正在成长的成员。她是被派去会见精灵的代表团的一部分，并且她向联盟发送了紧急信息。翡翠联盟不知道的是，德琳娜还使用en=Animal Messenger法术向高森林的精灵发送了紧急信息。

凯宾的小儿子，芬德里克（男性泰瑟瑞安人类警卫），是一个急性子，一直在鼓动在兽人围攻牧场之前就去面对他们。

珀德和玛卡的孩子，利维（女性）和瑟雷德（男性），年龄还不够大，不能参加战斗，尽管瑟雷德在他的床下藏了一把匕首。

德尔蒙家有许多工人和客人，包括以下人员：

弗拉梅兰·维尔明班，一个轻巧的半身人斥候，是翡翠圣域的一员，也是前往精灵的代表团成员。

埃恩德·斯托特布莱德，一位特提里亚人类骑士，也是战锤秩序的成员，他从亚塔尔来到此地，目的是保护弱者，并对冰盾部落实施正义。他一直在试图为兽人族的暴行进行报复，他刚刚到达，带来了一个大型兽人战斗小队就在附近，并且正朝牧场方向前进的消息。没有足够的时间逃跑，每个人都在尽力准备防御。

斯托瓦尔和布兰尼坎是兄弟（男性盾矮人警卫），他们担任该地区的铁匠、修补匠以及雇佣的普通劳动者。

其余的守卫由十八名农场和牧场的居民，以及一些翡翠圣域的盟友组成。十二名有能力的平民s手持手斧、镰刀或长矛。一半的人有短弓。四名战士(警卫)和两名猎人(斥候)构成了其他守卫。

十六人组成了一个非战斗人员的成人和儿童团体。其中一半的人可以搬运弹药，照顾伤员，或者照看老人和非常年幼的孩子。

让角色来主导如何设置牧场的防御。其他的守卫听从他们的指挥，并尽最大努力执行角色的计划。给玩家几分钟时间来安排自己的位置，然后开始攻击。

您有几种选择来运行这场战斗。请考虑以下选项：

你可以将每个防御者和兽人视为个体，并进行一场漫长而复杂的战斗。如果你这样做，玩家应该控制一些NPC。

您可以简化战斗的部分内容。牧场的地图已经被划分为特定的区域，您只需在玩家角色所在的区域进行常规战斗，根据您希望叙事如何进行来总结其他区域的结果。这种方法提高了游戏速度并降低了复杂性。

你可以只关注角色和他们的敌人，忽略所有其他战斗，只需对结果做出明智的猜测。这种方法是解决战斗最快的方式。

兽人可以轻易击败自己数量两倍的平民，但是有了牧场主可用的防御措施，胜算就大大提高了。牧场主们不必彻底击败兽人。他们只需要生存下来。您要创造紧张感，并使结果看起来像是在灾难边缘摇摆不定。在战斗接近尾声时，精灵们会像"援军到达"部分描述的那样出现。

兽人到来的第一个迹象是他们的侦察兵出现在围场周围的低矮山脊上。不久之后，小股兽人分散开来，包围了建筑物。随着一声号角的响起，他们同时冲向建筑。战斗开始了。

战斗小队由四十名兽人组成，由一个孤独的魔兽人和他的副手，一个格乌什之眼领导。当兽人进入射程时，他们会向任何可见目标投掷标枪。下一轮，他们冲锋以缩短距离，并用近战武器攻击。两三轮后，兽人撤退。

兽人重复这种模式几次，在守卫者将他们击退之前，可能会在某个地方突破一下。然后他们开始尝试不同的战术。

在白昼将尽时，兽人在营地的上风处点燃草地火，为自己制造掩护。浓厚的白烟飘散过营地，使得该区域2。任何距离观察者超过30尺的东西都会被浓烟2。兽人利用烟雾在发起攻击前更靠近营地。

在夜间，兽人潜行到建筑物足够近的地方放火。他们希望防御者无法扑灭火焰并保护周边不受破坏。

黎明时分，兽人发起了最后的冲锋。看起来他们在几个地方可能会压倒防御者，进入围栏内。突然，一个精灵战争号角的悦耳声音响起，一队由二十五名精灵士兵（包括守卫、侍僧、侦察兵和一些老兵的混合）到达以提供帮助。

兽人被杀死，被驱散，或被赶回他们的巢穴。农民和牧场主将角色们誉为英雄，并汇集微薄的资源，为每个角色提供25金币的奖励。翡翠圣域或铁手套秩序的成员将获得适当的赞誉。这些人立即开始重建他们的生活。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_pota_iceshield_rescue","enc_pota_iceshield_siege"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[163],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`小径从一条干涸的沟壑中出现。一股浓密的黑烟以轻微的角度在树梢上升起。看起来像是在下一个山脊后面有东西正在燃烧。

一个猛烈燃烧的农舍坐落在山脊顶部的你的位置下方的一个小山谷中。谷仓已成为冒烟的废墟，房子一半被火焰吞噬。惊慌失措的牲畜在谷仓远侧的围栏里乱窜。

前厅充满了热气和烟雾，火焰舔舐着天花板。一个额头上有血迹的瘦削半精灵躺在地板上，微弱地试图站起来。当他看到你时，挣扎着坐起来。"梅根！"他喊道。"我的妻子！请找到她！"然后他再次倒下，又一阵咳嗽发作。

四名粗野的兽人围绕着一辆停在干涸河床边一些矮小树荫下的马车。两名穿着普通农服的人类男性已在车辆前部倒下。马车的轮子深陷于松软的沙质土壤中数英寸。一名女性人类在马车中，周围是补给和其他战利品。`,dmGuidance:`当队伍旅行时，他们看到了烟雾。
阅读以下文本：
当角色们到达时，塞尔温正在房子的前厅恢复意识。
如果角色们在讨论追踪马车痕迹时包括他，他坚持要和他们一起去。
如果角色们在急于赶上的同时小心谨慎，那么他们可以获得突袭优势。
如果冒险者同意，这个团队可以在几个小时内到达德尔蒙牧场。
如果您使用《地下城主指南》第1章中描述的可选规则"你的世界"，那么赞誉可能包括声望。
如果角色们拒绝接受来自农场和牧场人民的钱，那么来自派系的奖励，以及当地人对冒险者的看法，将得到提升。`,mapGeometry:{imageRef:"adventure/PotA/083-poa06-10.webp"}},{id:"scn_67c",locationId:"loc_67c",name:"漫长的道路",activation:{condition:{type:"always"},priority:0},skeleton:["这个支线任务只有在角色们加入散塔林会商队时才会发生。","通常，来自亚塔尔的驳船会定期抵达，运送巴格赖特人订购的商品以供销售，包括扣子、旋转环、钉子、鞘、成品皮革制品以及食品和饮料。","然而，上个月驳船来晚了，订单数量不足，而且到达的少量商品价格急剧上涨。","散塔林会认为亚塔尔的阴谋是罪魁祸首：有人想要损害黑暗网络的利润。","散塔林会的代理人最初怀疑是竖琴手联盟，但可信的间谍最近回报称，一个未知的组织似乎在亚塔尔活动。"],flesh:`这个支线任务只有在角色们加入散塔林会商队时才会发生。

通常，来自亚塔尔的驳船会定期抵达，运送巴格赖特人订购的商品以供销售，包括扣子、旋转环、钉子、鞘、成品皮革制品以及食品和饮料。然而，上个月驳船来晚了，订单数量不足，而且到达的少量商品价格急剧上涨。

散塔林会认为亚塔尔的阴谋是罪魁祸首：有人想要损害黑暗网络的利润。散塔林会的代理人最初怀疑是竖琴手联盟，但可信的间谍最近回报称，一个未知的组织似乎在亚塔尔活动。

到达巴格赖特旅馆的报告中没有任何真相的线索，但麻烦制造者是克拉肯协会的成员，他们试图破坏亚塔尔的稳定，以便用他们自己的傀儡替换现任水霸。然后新水霸可以迅速解决麻烦，从而赢得当地支持。黑色网络在这个计划中只是附带的牺牲品。

不管"麻烦"发生的原因如何，散塔林会希望情况能够迅速得到解决。黑暗网络计划组织两次前往特里博的远征，一次是通过河上的驳船，另一次是通过陆路商队。两个任务都需要资金来购买新的物资，招募新的供应商，并资助他们在特里博的间谍以识别亚塔尔供应问题背后的人。

角色们参与到陆上商队中，因为散塔林会认为他们非常适合这份工作。任何由大量武装散塔林会雇佣兵护卫的快速商队对于北地的任何人都是一个富有的目标。出于同样的原因，散塔林会不敢雇佣居住在贝利亚德及周边地区的退休保镖、冒险家和雇佣兵，因为担心有关付费商队的谣言可能会在德萨林谷地到处传播。

散塔林会想要从沃姆福德开始一个小型商队，并使用其通常的警卫和赶车人队伍。他们雇佣角色们作为武装护送，为阿斯卡德·马林恩提供保护，他是一个新的由森比亚赞助的商人集团"滚轮"的谈判代表。

与黑网有关联的店主们接近角色们。他们准备多次这样做，每个潜在雇主分别提供大约20金币每个角色的报价。角色们可以安排为同一份工作多次获得报酬。他们的条款是标准的"四分之一预付款，到达特里博尔时支付第二季度，当马车返回巴格赖特时支付最后一半。"如果被追问，赞助人会加上预付款奖金，即在出发旅程的第一个休息站支付的一次性款项。

商队沿着凯尔恩路从沃姆福德出发前往红松镇，然后沿着长路向北经过西桥，最终到达特里博。

商队由六辆马车组成，每辆由两头牛拉动，配备有一把斧头、一把铲子、两个桶和一个三尖铁杆烤肉叉，这些可以方便地用作三把临时长矛。每辆马车还载有两名黑暗网络暴徒作为武装警卫，一名女赶车人（女性特提里亚人类平民），以及一名赶车人的助手（男性特提里亚人类平民），助手负责照看牲畜，并且在赶车人出现任何问题时能够驾驶马车。\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0adventure/adventure-pota.json

六辆马车中有五辆携带着隐藏的宝藏。每辆藏宝马车在假地板下隐藏着100金币的薄木箱。所有车辆都装满了要到特里博尔销售的普通商品。渣尔塔利姆人对于携带大量黄金陆路旅行并不高兴。

在对商队的攻击中，暴徒们首先自卫，然后保护自己的马车和车夫。他们不会离开马车去追捕攻击者，只有在这样做对他们认为的主要职责风险最小的情况下，他们才会帮助角色们战斗。

由海尔·托马杜尔（男性泰瑟瑞安人类老兵）指挥，商队在好天气下出发。在最佳天气且无延误的情况下，一个快速商队至少需要三天时间。

商队行程顺利，尽管天空变得阴沉，但没有下雨。在长路旁，只要能找到相对平坦的地面和水源，就有很多现成的营地。海尔尔没有在营地外布置哨兵。相反，他将马车围成一圈，并让暴徒们从车内监视。

土匪们在寻找机会伏击商队。这个团伙由十六名匪徒们组成，由一名匪徒首领领导。

土匪首先试图消灭营地外围的哨兵。否则，攻击以十六支点燃的箭矢开始，全部射向同一辆马车。马车开始燃烧，攻击者逃回他们的营地。任何追击他们的人将被引上山脊，直接进入下面山脊等待的土匪群的埋伏中。

海尔尔和他的守卫忙于处理燃烧的马车，因为他们需要集中精力移走钱箱。

如果营地中没有人冲出去查看是谁开的火，土匪们会回来。他们利用燃烧的马车发出的光亮来瞄准个人。土匪们更愿意从掩体中骚扰商队，并在守卫者被削弱后发起攻击。

没有一个土匪愿意死。他们撤退，以便稍后再次攻击商队。

在第二次土匪袭击之前，海尔尔来到角色们面前，寻求关于如何保卫商队的建议。他确信幸存的土匪会再次发动攻击。

土匪们在第二晚再次发起攻击，重复同样的战术，但是根据他们对商队优势和劣势的了解，调整他们的攻击目标。

牛对土匪来说除了作为食物外几乎没有用处，所以这次他们把目标对准了这些牲畜，希望将马车困在路上，这样他们就可以随意骚扰商队的防御者。使用犀牛的具体数值来代表牛，但去掉冲锋特性。

同样，土匪们并不愿意为了胜利而死。受伤的人一旦有机会就会撤退。

在第三天黎明前，四名嚎叫仇恨的启蒙者（见第七章）试图通过攻击商队来向空气邪教证明他们的用处。他们已经观察这个团队一段时间了，所以他们耐心等待，特别是如果角色们在第二次土匪袭击中表现出色。他们骑着巨秃鹫俯冲下来，向角色们（而不是散塔林会NPC或车夫）投掷标枪。他们至少尝试一次击杀，然后再飞走之前进行第二次攻击。

回程要安静得多，除了随机遭遇战外。土匪们仍在舔舐他们的伤口，而邪教徒则被他们的上级控制住了。`,spotlightRefs:[],presentNpcIds:[],availableInfoIds:[],encounterIds:["enc_pota_long_road_bandits","enc_pota_long_road_air"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[166],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`当角色们从担心的散塔林会店主那里得知，最近他们在供应上遇到了问题时，这个支线任务就开始了。
如果角色们谴责这种行为，暴徒们会生硬地提醒他们，他们都有各自的命令。
当角色们停下来过第一晚时，一伙大型的歹徒靠近，试图碰碰运气。`},{id:"scn_683",locationId:"loc_683",name:"火焰女巫的诅咒",activation:{condition:{type:"always"},priority:0},skeleton:["维根·荨麻蜂是Nettlebee半身人家族的吝啬族长，他通过精明的贸易和继承积累了一笔财富。","当土之邪教徒开始探索这个地区时，Wiggan收了他们的钱提供信息和偶尔的帮助。","随着他对邪教徒的了解，他们所拥有的土之力量引起了他的兴趣。","对土地的控制对于一个农民来说可能是非常有价值的。","Wiggan的邪教联系人帮助他除掉了几个竞争对手，并向他保证，随着邪教上升到权力地位，他的财富和影响力只会增加。"],flesh:`维根·荨麻蜂是Nettlebee半身人家族的吝啬族长，他通过精明的贸易和继承积累了一笔财富。当土之邪教徒开始探索这个地区时，Wiggan收了他们的钱提供信息和偶尔的帮助。随着他对邪教徒的了解，他们所拥有的土之力量引起了他的兴趣。对土地的控制对于一个农民来说可能是非常有价值的。Wiggan的邪教联系人帮助他除掉了几个竞争对手，并向他保证，随着邪教上升到权力地位，他的财富和影响力只会增加。

在奈特尔比家族中，Wiggan的秘密只有他的儿子Bertram知道，Bertram现在是地之邪教的一名新信徒。这个邪教已经开始缓慢地对整个奈特尔比家族进行洗脑，从Bertram的儿子Watson开始。Watson对他的父亲和祖父的新宗教很接受，但他仍然不知道其真正的性质。实际上，Wiggan和Bertram并不知道邪教的最终目标，只知道它崇拜一个强大的地之力量。

冒险者潜入神圣石猴寺后，邪教给威根一个任务。他和他的家人必须扮演温顺的半身人角色，引诱队伍到他们孤立的牧场，并杀死角色们。就威根的部分而言，他希望角色们为他们对他的导师，海伦蕾，石头修道院的院长（见第七章）造成的伤害付出沉重的代价。

作为他们暗杀计划的一部分，Wiggan和Bertram Nettlebee制造了一个精心设计的诡计。他们挖掘了一个附近的乌瑟加德特土丘并将其点燃。这个计划是有风险的，因为即使是Wiggan也知道乌瑟加德特野蛮人对于那些亵渎他们墓地的人没有容忍。

伯特伦用火的符号给奈特尔比家的牲畜打上了烙印。威根声称这个标记是一个"火女巫"的，用这个荒诞的故事吓唬他的家人。通过让他们的亲戚无知和害怕，威根和伯特伦觉得他们可以维持这个骗局，并更容易地将角色们诱入他们的陷阱。

访问过牧场的当地人证实了烧焦的古墓土堆，并描述了那个标志。每个附近的酒馆都充满了关于附近山丘中邪恶火教活动的可怕谈论。流言中包含了对内特尔比家族的许多同情，他们以优质家畜而闻名。一个乐于助人的市民可能会请求角色们伸出援手。

角色们可能会调查牧场、牧场或田野。他们也可以前往古墓土堆，这将在后面的专属部分进行描述。

这个牧场包括一个谷仓、粮仓和一个半层高的房子，这些建筑沿着一个小山坡起伏延伸。房子、谷仓和粮仓都很普通，包含农场标准设备。

内特尔比家族拥有一百只羊、十二头奶牛、十二头公牛和十五匹小马。其中四分之一的动物在臀部被烙印了火之标志。

燕麦和大麦在牧场附近的丘陵地带的两块田地上蔓延。伯特伦将邪教的烙印藏在了大麦田里的一个稻草人下面，这个烙印是在牧场的铁匠铺制作的。

Nettlebee家族包括以下人员：

内特尔比家族的族长，维根·荨麻蜂（见第七章）是一个吝啬、易怒的厌世者和痛苦的鳏夫。

Wiggan的唯一儿子，Bertram（一个邪教狂信者），固执己见，充满虚张声势。

Bertram的妻子，Jayne（一个平民），是一个务实的女性，知道如何处理Wiggan、Bertram和其他大嘴巴。尽管如此，她很害怕，最担心的是她的孩子们。

Bertram的继承人和长子，23岁的Watson（一个斥候），勇敢、诚实、直率。他更像他的母亲而不是父亲或祖父，他对牲畜受到的虐待感到愤怒。Watson知道Wiggan和Bertram的新宗教，但他认为这不重要，所以他不太可能提及。他对Wiggan的计划一无所知。

Darrow（一个平民）比Watson小一岁，是Bertram的次子。他天性善良，但他祖父对继承权的虚张声势让他开始考虑自己的未来。他可能会因为Jayne的不喜欢而过于轻易地接受冒险者。

Bertram和Jayne唯一的女儿，Elisa（一个平民），十九岁。她很像她的母亲，并且非常坦率地不喜欢她的"老山羊"祖父。

最小的Nettlebee家族成员，12岁的Ignatius，实际上只是个小男孩。每个人都（包括Wiggan）喜欢他，所以他是个快乐的小孩，但是火巫婆让他如此害怕，以至于他有夜惊。

Bertram和Wiggan避开角色。Wiggan扮演一个脾气暴躁的老半身人，锁在书房里处理贸易事务。他推动角色们采取行动，而不是打扰一个老半身人。Bertram检查他的庄稼，除非被叫去说话，否则他总是避开。然后，他发表了一篇虚张声势的演讲，表示他多么有信心，角色们可以让火巫婆为她所做的事情付出代价。

Jayne、Darrow、Elisa和Ignatius留在牧场，做他们的家务。Watson在牧场巡逻，监视牲畜。他们恳求角色们调查土丘，消灭困扰他们的火巫婆。

他们知道以下信息：

两周前，土丘突然起火。

几天后，Watson注意到了牲畜身上的烙印。

Nettlebee家族轮流夜间守护牲畜。慢慢地，烙印还是持续出现。

Watson调查了土丘并发现它被打开了。曾经立在拱门上的巨大的石块已被劈开，大厅里闪烁着火焰。Watson听到了来自黑暗中的可怕耳语。当他向家人传达了他所看到的，Wiggan谈到了曾经据说漫游这些山丘的火巫婆的传说。他们害怕一个火巫婆已经回来了。

Nettlebee家族感到对火巫婆无能为力，担心她可能很快会烧毁他们的牧场。Watson和Jayne非常绝望，想要避免这样的结果。

很久以前，乌特加德特野蛮人建造了这个土丘来安放一位首领的遗体，现在这位首领已经被遗忘。当维根·荨麻蜂加入黑土教时，他掠夺了土丘祭坛，扰乱了首领的灵魂。

他们保持距离，除非角色们邀请他们一起走。

如果Wiggan和Bertram公开陪同角色们，他们会在山边畏缩不前。这些半身人拒绝踏上这片"被诅咒"的土地。

在土丘中，结构由嵌入地下的石碑构成，并以其他田野石封顶。天花板是拱形的田野石，高10尺，由雕刻的石柱支撑。

通道和房间被en=Continual Flame的光点所照亮。这些火焰不会产生热量。它们是维根的添加物，因为乌斯伽人憎恶魔法。成功通过DC 10智力（历史）检定的角色会知道乌斯伽人的这种偏见。

从土丘入口，角色们在走廊尽头的墓室里只能看到一些模糊的细节，包括石制灵床和灵床头的麋鹿兽祭坛。

三个壁龛内供奉着野兽精魂的祭坛，分别刻有早期红虎图腾（西壁龛）、麋鹿图腾（北壁龛）和蓝熊图腾（东壁龛）的图案。红虎和麋鹿作为当代乌斯伽部落的图腾野兽仍然存在。

石制灵床曾是乌特加德特首领骨头的安息之地，现在这些骨头散落在基座上和它旁边的地面上。

由于酋长不安的灵魂的存在，墓厅变得寒冷。

角色们有一分钟时间四处看看后，请阅读以下内容：

首领Javor因他的坟墓被公然且无情地亵渎——在乌特加德特人中这是极大的侮辱——而被允许从死后世界来到这里。在这种形态下，他是一个还魂鬼。

Javor 不会攻击，他愿意短暂地倾听角色们的话，他知道他们对他犯下的罪行是无辜的。他不知道亵渎者的名字，但他的复仇追踪者特质意味着他知道在哪里可以找到Wiggan和Bertram。如果问对了问题，他可以告诉角色们亵渎者就在坟墓外面。

与此同时，Wiggan使用了一个en=Conjure Elemental的卷轴。他需要1分钟来施放这个法术，并且只有在所有角色都深入土丘后才开始。一个土元素响应了召唤，Wiggan命令它坍塌入口隧道并杀死土丘里的任何人。

元素生物轻易地坍塌了这个有数百年历史的入口隧道。当它这样做时，请阅读以下文本：

当元素生物坍塌了入口隧道，Wiggan和Bertram跑向牧场。Javor感觉到他的猎物在移动，急忙冲向墓穴的出口。元素生物从主室的地面中出现。它攻击它能看到的人，而不是追击Javor。

大约2分钟后，他在顶部附近完成了一个开口，并跳入阳光中。这个开口足够巨大的首领通过，所以也足够角色们通过。

来自凶猛的麋鹿部落的乌斯加德，从他们的服饰和标记可以辨认出来，这个野蛮人掠夺团队由一位名叫芬诺尔的女性狂战士领导。其他成员包括十名部族武者和一位名叫帕德雷克的男性狂战士。芬诺尔穿着锁子甲（AC 14），挥舞一把大剑，命中时造成10（2d6 + 3）点挥砍伤害，并具有多重攻击动作，允许她使用一个动作用她的剑进行两次攻击。她的挑战等级为3。帕德雷克挥舞一把钉头锤，命中时造成10（2d6 + 3）点钝击伤害。两位狂战士骑着战马。

任何本地人都知道麋鹿部落的乌斯加特人是危险的掠夺者。大多数当地人认为他们是野蛮的匪徒。那些来自其他地区的人通过一个成功的DC 10智力（历史）检定可以了解到麋鹿部落的名声。

野蛮人跟随贾沃尔。芬诺尔（芬诺尔）认为（虽然有些道理）队伍之所以能够毫发无损地从土丘中出来，只是因为贾沃尔允许他们这么做，这显示了一种默许的赞成。乌特加德特部落和归来的酋长愿意在行进中交谈。

Javor计划找到并杀死那些亵渎者。他知道两个Nettlebee家族的人是有罪的，但他只有在看到他们时才能辨认出来。归来的酋长对其他Nettlebee家族的人毫不关心。

芬诺尔 计划在执行酋长的正义过程中'帮助'，摧毁并掠夺农场。强烈的暗示是乌特加德特部落打算不允许任何荨麻蜂家族成员存活。

他愿意平息芬诺尔的嗜血欲望。然而，如果他同意，他要求得到赔偿。角色们必须帮助捕获亵渎者，并且找到Javor的宝藏并将其归还到他的古墓中，随后封闭古墓的入口隧道。作为他们的一部分，内特尔比家族必须自愿为袭击者提供路上的补给和一些家畜。（如果这意味着他们的生存，半身人们会这么做。）

芬诺尔补充道："所有带有这个骗子标记的人！"她用手比划出火的符号。她那不可思议的知识也来自她女儿的幻象。这位狂战士不愿意分享更多关于她孩子的事情。

角色们有许多选择。他们可以什么都不做，这将允许野蛮人掠夺和摧毁农场，并杀死每一个荨麻蜂家族成员。（乌特加德特部落毫不留情。）如果队伍选择在乌特加德特到达农场之前攻击他们，冒险者还必须与还魂鬼战斗。在农场，贾沃尔专注于寻找并杀死威根和伯特兰，这给了角色们更好的机会对抗袭击者。乌特加德特部落，尽管有不祥的幻象，却不愿意为了贾沃尔而牺牲。如果他们遭受重大损失，包括任何狂战士，他们会通过牧场进行战斗撤退，以偷走羊和马。

野蛮人一旦到达牧场，Javor就冲进了房子的地下室。Nettlebee家族看到袭击者越过山丘而来，就藏在那里。不死的酋长指着Wiggan和Bertram作为有罪的人。接下来的场景如何展开取决于你和玩家，但是半身人的机智和黑暗的奉献使得邪恶的Nettlebee家族不太可能轻易退缩。实际上，Wiggan试图贿赂角色们来保护Bertram和他"对抗这些野蛮人"。他还利用他的秘密试图影响角色们，承诺如果得救就会告诉他们一切。Javor可能会被说服暂时停手，让Wiggan讲述他的故事，但这位还魂鬼的缓刑只是暂时的。

受伤的敌人成为诱人的目标，特别是如果队伍知道威根的罪行。如果有伯特兰的帮助，威根甚至更加勇敢。沃森可能会试图阻止公开战斗，但他不愿意与他的亲戚作战。

如果威根被击败但被留下活口，可以强迫他说出真相。队伍必须承诺让他活命才能让他开口。

如果Wiggan或Bertram以某种方式幸存下来，他们后来逃到黑土神庙报告。角色们可能会在那里再次遇到他们。是否饶恕他们或因失败而惩罚他们，这取决于你。

贾沃尔确保其他乌特加德特遵守任何协议。芬诺尔 愿意遵循"古人"的意愿。如果威根和伯特兰被杀，贾沃尔会提醒角色们他们所做出的承诺（见"宝藏"部分）。作为交换，乌特加德特不会打扰幸存的荨麻蜂家族。

如果Javor在Wiggan或Bertram之前被杀，他会在24小时后复活，继续追捕亵渎者。他也可能出现在黑土神庙。此外，来自鹿族的乌特加德特可能会继续骚扰Nettlebee家族，很可能迫使他们离开牧场，大大减少地生活在附近的定居点。

威根和伯特兰知道黑土神庙的位置，以及进入神庙的口令（"我服务于黑土"）。尽管他们知道先知，但两个半身人都没有见过马洛斯·恩雷尔。堕落的荨麻蜂家族的主要联系人是圣石修道院的海伦蕾，以及在黑土神庙的"泥浆巫师"米拉吉·维扎恩，后者联系较少。

Wiggan书房中的日记、信件和交易记录将他与土元素邪教联系起来，揭示了与前述领导者的联系。Wiggan还写道他如何将Bertram转化，他如何逐渐影响Watson，以及火巫计划。

荨麻蜂家族对野蛮人残酷且超自然的攻击感到震惊和恐惧，随后对角色们或沃森揭露的真相也感到震惊。简和沃森回顾时看到了腐败的迹象。简接管了家族族长的职位。荨麻蜂家族通过邀请亲戚以及雇佣一些强悍的农场工人来扩张。

Nettlebee 的财富藏在一个铁箱中。这个箱子被嵌在地下室的一个壁龛里，用与墙壁相匹配的未抹灰的大块田野石围住。找到这个壁龛需要进行一次成功的 DC 10 智力（调查）检定。一旦角色们将他的财宝归还到古墓，Javor 就会消失，只留下他的遗骨。

箱子被锁住了，但威根有钥匙。

箱子顶部显眼的位置放着贾沃尔的装饰性头盔，由皮革、绳索和骨头制成。它结合了熊的头骨、鹿角和剑齿虎的下颌。这个物品状况良好，但它只值10金币。

头盔下涂了油的皮子包裹着Javor的华丽大剑，这是古老的贝西尔默制造的。剑柄用磨损的皮革绑着，看起来不是原装的，上面标有顺序的刻痕。剑柄上绑着熊爪。这把剑价值100金币。

此外，贾沃尔拥有四个动物雕像，大小与人的拳头相仿——一个由天青石雕刻的熊，一个由红色黑曜石雕刻的老虎，一个由带纹玛瑙雕刻的麋鹿（每个价值150金币），以及一个异能塑像（银色乌鸦）。

荨麻蜂家族的宝藏包括775铜币，2,512银币，1,553金币，和196铂金币，以及九个玫瑰石英水晶（每个50金币）和一个老旧的半身人制造的次元袋，这是一件传家宝。

为了履行恢复墓穴的承诺，角色们只需将Javor的物品带到那里并留在墓穴大厅。做到这一点的人将获得一种超自然魅力，这是一种精神祝福，模仿您为每个角色和来源（乌特加德特酋长）选择的药水或法术，视情况而定。在任何情况下，您选择的一个角色后来会在他或她的财物中发现乌鸦小雕像，感受到Javor的好感。

施加一个与超自然魅力相反的诅咒是合适的。角色们背信弃义的消息可能会在乌特加德特部落中传播。最坏的情况下，贾沃尔回来"提醒"角色们他们的承诺。

如果荨麻蜂家族觉得他们欠角色们人情，大约一个月后，沃森会在附近的一个城镇与他们见面。他给他们一个铁制的火之标志烙印，这是他在田野中找到的。沃森还告诉冒险者们任何他们不知道的关于威根、伯特兰以及他们与土之邪教的关系的信息。此外，作为他们之间纽带的纪念，他给了队伍一个次元袋。每个荨麻蜂家族成员都帮助修复并装饰了这个袋子，它包含了一些自制的补给品和一封简写的感谢信。然后沃森开玩笑说，将来把羊毛捆运到市场上会更加困难。`,spotlightRefs:[],presentNpcIds:["npc_wiggan_nettlebee","npc_hellenrae","npc_fennor","npc_padraich","npc_marlos_urnrayle","npc_miraj_vizann"],availableInfoIds:[],encounterIds:["enc_pota_nettlebee_elemental"],treasureSlotIds:["trs_683_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[167],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`奈特尔比牧场坐落在一系列低矮的起伏丘陵上，森林已经被清理掉，用于种植燕麦和大麦作物。奈特尔比家的获奖家畜——羊、小马和牛——在山坡牧场上成群结队地吃草。牧场由一栋两层的大房子和几个低矮的马厩及粮仓组成。在远处，一个不自然的土堆高高耸立在牧场之上，它的秃顶上稀疏地点缀着烧焦的树木残余。

土丘位于一个高高的山顶上，俯瞰着周围的乡村。土丘周围的区域静止且焦黑。烧焦的树木像黑暗的手指骨一样从光秃的土丘上伸出。这里明显感到寒冷。

高大的石碑排列在连接土丘入口与远处墓室的土制走廊两侧。火焰的微粒照亮了走廊以及后面的房间。空气中充满了灰烬的气味，冷而沉重。

一个简陋的田野石拱门构成了墓室的入口。在三个分支的凹室中有三个烧焦的祭坛——一个老虎的，另一个是麋鹿的，还有一个是熊的。在墓室的中心是一个石制灵床，上面躺着一个破碎且变黑的骷髅，它的头骨和四肢散落在墓室中。墓室的空气冰冷且带有灰烬的气味。

温度进一步下降，伴随着噼啪声，整个墓室覆盖上了霜。墙壁和走廊上的火焰熄灭了，灵床上方出现了一个蓝色光点，并扩展成一个模糊的人形。墓室中的骨头，以及麋鹿祭坛上的鹿角，开始动起来，然后飞向那道光。一瞬间，一个身材魁梧但非常苍白的人类男性站在你们面前，他的脸上长满了深色的胡须，头上戴着鹿角。他那乳白色的眼睛短暂地燃烧着蓝色的火焰，当他的目光落在你们身上时。
他的声音深沉、回响，带着奇怪的口音。他说："我从战士的灵魂安息中归来，发现我的坟墓被烧毁，我的骨头被亵渎。我知道亵渎者不在你们之中，但你们是谁，为什么在这里？"

透过土丘入口大厅的阳光变暗，好像入口处投下了阴影。紧接着，石头的磨擦声后是大厅里泥土和石头的倾泻声。隧道坍塌了！

一打野蛮人围绕着贾沃尔，形成一个半圆形站在土丘前面。其中两个骑在马上。他们几乎无视了你们的到来，带着敬畏的目光看着归来的酋长。其中一名骑手，她的额头上有一个鹿角纹身，下了马。
她说："我女儿的视力是真实的。这一个是古老的。他是我们的一份子！"
她跪在Javor面前，她的同伴们跟随她的动作。"我们来为你复仇，古老的一位，"她说。
Javor点头表示严肃的赞同。他说："你们来得正是时候，为了鲜血。亵渎者就住在那里。"
他指向土丘下方山谷中的荨麻蜂农场。然后，他开始朝那个方向跑去。`,dmGuidance:`当角色们在桑伯丘陵进行冒险时，有传言传到他们耳中，称有一位火巫婆居住在乌瑟加德特的古墓中，并恐吓着内特尔比家族。
如果角色们和他说话，他会抱怨这场危机给他带来了多大的损失。
当角色们询问这些无辜的Nettlebees关于事件的情况时，他们的恐惧和愤怒是真实的。
在角色们到达前几天，Wiggan和Bertram放火烧了土丘，以增加他们火巫婆诡计的可信度。
当角色们前往土丘时，Wiggan和Bertram跟随他们。
当角色们接近土丘时，他们看到以下情景：
当角色们移动到土丘入口时，请阅读以下内容：
当角色们能更清楚地看到墓室时，请阅读以下内容：
这种寒冷极为极端，如《城主指南》第5章"冒险环境"中所描述的那样。
当队伍与元素生物战斗时，Javor以超自然的热情清除堵住土丘出口的瓦砾。
当角色们从墓穴中出来时，请阅读以下文本：
如果角色提出正确的问题，这一意图可以得到确认。
如果冒险者们为了无辜的内特尔比家族的安全进行讨价还价，Javor可以被说服。
如果队伍保卫了荨麻蜂家族并且威根幸存，角色们仍然处于危险之中。
如果角色们未能发现这些定罪的证据，Watson后来会做到。
如果角色们承诺归还 Javor 的财宝，复仇亡魂会取出箱子并留下来确认他的财产。
如果角色们将剑、乌鸦和头盔与骨头一起放在灵床上，并将每个小雕像放在相应的祭坛上，每个魅力可以使用两次然后消失。
如果角色们未能兑现对贾沃尔的承诺，后果由你决定。`,mapGeometry:{imageRef:"adventure/PotA/086-06-06.webp"}},{id:"scn_6a7",locationId:"loc_6a7",name:"舞水谷",activation:{condition:{type:"always"},priority:0},skeleton:["北方的矮人们长久以来一直把隐藏的舞水谷视为圣地。","据说这里曾经是贝西尔默矮人国王的夏宫，现在这里是矮人们沉思和崇拜的地方，他们向他们的生育与爱情女神，沙林德拉致敬。","他们很少允许外人进入，但那些有幸被邀请的人会发现秘密峡谷及其飞溅的溪流是一个奇妙的景象。","舞水谷内受人尊敬的地点包括遍布峡谷的庙宇和神龛，而不是一个单一的综合建筑。","这些地点中的大多数需要从沿着峡谷的主要小径徒步到达。"],flesh:`北方的矮人们长久以来一直把隐藏的舞水谷视为圣地。据说这里曾经是贝西尔默矮人国王的夏宫，现在这里是矮人们沉思和崇拜的地方，他们向他们的生育与爱情女神，沙林德拉致敬。他们很少允许外人进入，但那些有幸被邀请的人会发现秘密峡谷及其飞溅的溪流是一个奇妙的景象。

舞水谷内受人尊敬的地点包括遍布峡谷的庙宇和神龛，而不是一个单一的综合建筑。这些地点中的大多数需要从沿着峡谷的主要小径徒步到达。其中一个这样的地点被称为温柔誓言神龛，这是一个小型的隐居地，信徒们可以在这里居住一段时间，沉思爱的本质。

最近，两个不择手段的宝藏猎人，一个名叫奥布拉图的鬼族和一个名叫瑞莱克的灰矮人，发现了国王托希尔德·焰舌的夏宫失落地窖的证据。他们恢复的地图草图和日记条目表明有两个可能的入口。一个靠近温柔誓言神龛，另一个在萨姆贝尔山丘之下。

Reulek 选择了寻求地下路线，他随后在黑色晶洞中死亡（参见 第五章, 区域 G8）。Obratu 与一个名叫 Grumink 的矮人及其一群叛变的矿工达成了协议。鬼人和其盟友潜入了神殿，利用诡计和魔法击败了少数信徒，然后开始挖掘。他们的行为没有被该地区的其他矮人发现。

一个矮人熟人请角色们前往舞水谷。哪个NPC请角色们去由你决定。他或她可能因为疾病需要帮助，这可能通过谷中的圣水得到缓解，或者可能是为了尊重角色们而邀请他们访问这个神圣的地方。无论如何，应该明确谷通常对非矮人是禁止进入的。

一旦角色们同意，他们就会收到如何找到谷地的指示。团队必须沿着德萨林河骑行到一个特定的弯道，爬过一个瀑布到达一个显眼的峭壁，然后沿着一条穿过茂密灌木丛的狭窄小径徒步。请求帮助的矮人还给角色们提供了一份签名并封口的文件，声明他们是允许访问谷地的矮人朋友。最后，他或她解释说，通往温柔誓言神龛的侧路用一对德特克符文微妙地标记着，这是矮人语中"温柔"和"誓言"这两个词的第一个字母。

前往谷地的旅程可以根据您的喜好安排得充满事件，但一旦角色们到达正确的地点，请从D1区域开始。

击败格鲁姆金克、奥布拉图及其手下的角色可以继续探索神龛的其余部分。如果他们在宿舍（D4区域）找到了被杀的牧师和侍僧的尸体，他们可以在舞水谷寻找其他矮人聚居地。在搜寻过程中，他们偶然遇到一群在谷中旅行的矮人。这些矮人得知温柔誓言神龛发生的事情后感到震惊。他们为被杀的同胞举行葬礼，并为角色们提供安全的庇护所。然后，在可预见的未来，神龛对游客关闭。`,spotlightRefs:[],presentNpcIds:["npc_grumink_the_renegade"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[172],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"}},{id:"scn_6aa",locationId:"loc_6a7",name:"D1. 盘山路",activation:{condition:{type:"always"},priority:0},skeleton:["通往温柔誓言圣殿的路径始于一段短而陡峭的台阶，这些台阶凿刻在峡谷的侧面。","舞水谷中的两条溪流在台阶附近交汇，然后继续流向德萨林河。","小径继续沿河而上通往谷地的其他区域，因此除非角色知道符文的存在，否则很容易错过台阶的起点；","走了二十步后，楼梯变成了一条沿着峡谷壁盘旋而上的狭窄小径。","角色们必须单排行走。"],flesh:`通往温柔誓言圣殿的路径始于一段短而陡峭的台阶，这些台阶凿刻在峡谷的侧面。舞水谷中的两条溪流在台阶附近交汇，然后继续流向德萨林河。小径继续沿河而上通往谷地的其他区域，因此除非角色知道符文的存在，否则很容易错过台阶的起点；需要通过一次成功的 DC 20 感知（察觉）检定才能注意到它们。

走了二十步后，楼梯变成了一条沿着峡谷壁盘旋而上的狭窄小径。角色们必须单排行走。这段旅程需要半小时。

在向上攀登三分之二路程的一个急转弯处，古鲁姆克的矿工们设置了一个陷阱。它的作用是发出声响并警告上方区域D2的瞭望者，但同时也具有危险性。被动感知（察觉）达到15或更高的角色会注意到离地面约两英寸、固定在巨石之间的钢制绊线。主动寻找陷阱的角色可以通过成功通过DC 10感知（察觉）检定来发现绊线。

如果绊线被触发，它会带下一块巨石和一堆较小的石块和砾石沿着路径滚下。前两个沿着小径上行的生物必须进行一次DC 15敏捷豁免。豁免失败时，该生物会被击倒倒地并受到2（1d4）点钝击伤害。如果豁免失败值超过5点，该生物会被从小径上击飞，滑落并摔到下一层路径，并额外受到10（3d6）点钝击伤害。

切断绊线会触发陷阱。要解除它，必须断开绊线，保持紧绷，并追踪到它所固定的木板，支撑松动的巨石和岩石。然后必须进一步支撑巨石，直到它因绊线失去张力而无法掉落。以这种方式重新布置陷阱可以有几种方法，但这样做的检定难度不会超过 DC 10。`,spotlightRefs:[],presentNpcIds:["npc_grumink_the_renegade"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[172],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"}},{id:"scn_6ab",locationId:"loc_6a7",name:"D2. 神殿入口",activation:{condition:{type:"always"},priority:0},skeleton:["路径在山的暗色石头上切出的拱门前变得平坦并加宽。","拱门两侧是两个向人致意的矮人雕像。","拱门之后是一个开放的庭院，庭院中心有一个站在高台上的雕像。","所有这些特征都是从山体上凿出来的，而不是用合适的石工建造的。","两名矮人警卫在这个石架上站岗。"],flesh:`两名矮人警卫在这个石架上站岗。他们手持双手战锤（命中造成1d10 + 1点钝击伤害），而非长矛和盾牌。由于没有盾牌，他们的护甲等级为14。守卫是否在场取决于角色接近时的动静：

他们已撤退至庭院（区域 D3）。

在后一种情况下，从庭院（见D7区域）的某个地方可以听到微弱的敲打声。`,spotlightRefs:[],presentNpcIds:["npc_grumink_the_renegade"],availableInfoIds:[],encounterIds:["enc_6ab"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[173],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"路径在山的暗色石头上切出的拱门前变得平坦并加宽。拱门两侧是两个向人致意的矮人雕像。拱门之后是一个开放的庭院，庭院中心有一个站在高台上的雕像。所有这些特征都是从山体上凿出来的，而不是用合适的石工建造的。",dmGuidance:`当角色们到达急转弯的顶部时，请阅读以下文本：
如果角色在区域D1触发陷阱或未尝试悄悄接近，矮人守卫会发现他们且不在此处。
如果角色未触发区域D1的陷阱并努力保持隐蔽，守卫会在此处用矮人语低声交谈。`},{id:"scn_6ad",locationId:"loc_6a7",name:"D3. 庭院",activation:{condition:{type:"always"},priority:0},skeleton:["这个庭院向天空开放，其墙壁上雕刻着矮人参与仪式的场景，通常是成对出现，表现出友好或浪漫的性质。","一个二十尺高的穿着礼服的女性矮人雕像站在庭院中央的石台上，她的双臂伸展开来，做出一个欢迎的姿态，她的脸上雕刻着温暖的笑容。","每个角落都立着未点燃的石制火盆，而通往黑暗内部空间的拱门穿透了东、北、西三面墙壁的中心。","在北面拱门上方的岩石上雕刻着一排窗户。","沿着北墙延伸的窗户俯瞰着庭院，距离地面20尺。"],flesh:`沿着北墙延伸的窗户俯瞰着庭院，距离地面20尺。它们贯穿D7区域南墙的长度。每个窗户是一个开放的长方形，高7尺，宽2尺。

格鲁明克从区域D7派出六名矮人警卫前往庭院，并得到来自D2区域的两名矮人警卫的增援。这八名矮人伪装成穿着长袍、正在参加私人婚礼仪式的矮人。恶鬼奥布拉图也在场，并使用变形能力变成主持仪式的女性矮人外貌：

具有13或更高被动感知（察觉）得分的角色会注意到矮人们在长袍下穿着锁子甲；这些角色在矮人们攻击时不会感到突袭。与长矛和盾牌不同，矮人们携带的是双手挥舞的战锤（命中时造成1d10 + 1点钝击伤害）。没有盾牌，这些守卫的AC为14。

一旦战斗爆发，鬼族对自己施放en=Invisibility，从讲台后面拿起其长柄武器，并使用沙林达尔雕像作为掩护施放法术，尽其所能不影响其盟友。只有在这样做可能会吓倒队伍时，鬼族才会显露其真实形态。当鬼族的生命值降至一半时，它会对自己施放en=Gaseous Form法术，并通过窗户飞入D7区域。`,spotlightRefs:[],presentNpcIds:["npc_grumink_the_renegade"],availableInfoIds:[],encounterIds:["enc_6ad"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[173],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这个庭院向天空开放，其墙壁上雕刻着矮人参与仪式的场景，通常是成对出现，表现出友好或浪漫的性质。一个二十尺高的穿着礼服的女性矮人雕像站在庭院中央的石台上，她的双臂伸展开来，做出一个欢迎的姿态，她的脸上雕刻着温暖的笑容。每个角落都立着未点燃的石制火盆，而通往黑暗内部空间的拱门穿透了东、北、西三面墙壁的中心。在北面拱门上方的岩石上雕刻着一排窗户。

雕像东侧有几个穿着长袍的矮人正在进行仪式。当他们转向你们时，脸上露出了笑容。
"啊！更多的客人！"执行婚礼仪式的女性矮人牧师说道。"欢迎来到婚礼。"婚礼派对的其他人示意你们加入。`,dmGuidance:`如果角色们清除了D2区域的守卫，庭院无人守卫，他们可以听到来自庭院北侧某处的敲打声（D7区域）。
如果角色在区域D1触发了陷阱，或以其他方式向D2区域的守卫预警了他们的到来，叛变的矮人就有时间准备诡计。
如果角色们看起来可疑或以任何方式威胁他们，矮人们会结束他们的诡计并发动攻击。
如果角色认为仪式是真实的并加入庆祝活动，矮人们会在他们靠近时才拿出隐藏的武器并攻击角色。`},{id:"scn_6b3",locationId:"loc_6a7",name:"D4. 宿舍",activation:{condition:{type:"always"},priority:0},skeleton:["从庭院向西的通道变成了一条长长的走廊，两侧有一系列的石门。","一条短走廊扩展成一个方形房间，里面有一套简单的家具。","每件家具都是直接从构成这个地方的岩石上雕刻出来的。","一对床铺排列在相对的墙壁上，而一张带长凳的桌子位于中间。","架子和开放式橱柜从墙壁上凿出，所有东西都光滑且形状完美。"],flesh:`从庭院向西的通道变成了一条长长的走廊，两侧有一系列的石门。

叛逆的矮人们将他们杀害的所有人的尸体扔进了西南角的牢房。甚至在门打开之前，请向玩家大声朗读以下内容：

一旦角色们进入，请阅读以下文本：

检查尸体发现，他们都是穿着长袍的矮人，很可能是神龛的居民。大多数人是被叛逆矮人的战锤所杀，尽管有些人是被鬼族的爪子造成的长伤口撕裂的。`,spotlightRefs:[],presentNpcIds:["npc_grumink_the_renegade"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[174],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`一条短走廊扩展成一个方形房间，里面有一套简单的家具。每件家具都是直接从构成这个地方的岩石上雕刻出来的。一对床铺排列在相对的墙壁上，而一张带长凳的桌子位于中间。架子和开放式橱柜从墙壁上凿出，所有东西都光滑且形状完美。长凳上铺着垫子，床垫放在床铺上。各种各样的小摆设散布在这里那里——日常用品，对于某人整洁简单的家来说很常见。

一种微弱但难闻的恶臭表明这扇门后有东西在腐烂。

一打矮人的尸体被堆放在远处的墙壁上。从气味和腐烂程度来看，他们大约在十天前死亡。`,dmGuidance:`当角色第一次进入其中一个房间时，请大声朗读以下内容：
如果角色们刻意四处查看，在成功通过一次 DC 15 智力（调查）检定时，他们会发现一丝血迹或其他暴力迹象。`},{id:"scn_6b9",locationId:"loc_6a7",name:"D5. 小教堂",activation:{condition:{type:"always"},priority:0},skeleton:["这条短拱形通道通向一个有高台和祭坛的房间，祭坛位于房间的远端。","祭坛上方雕刻着与庭院雕像中相同的微笑、招手的女性矮人形象。","两个小火盆放在祭坛上的白色布匹上，尽管目前都没有点燃。","一个空的石碗位于祭坛中心。","布制垫子随意散布在地板上。"],flesh:`这个礼拜堂是奉献给沙林德拉的。叛逆的矮人们没有动这个地方。

在银链附近有一小块血迹。`,spotlightRefs:[],presentNpcIds:["npc_grumink_the_renegade"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_6b9_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[174],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这条短拱形通道通向一个有高台和祭坛的房间，祭坛位于房间的远端。祭坛上方雕刻着与庭院雕像中相同的微笑、招手的女性矮人形象。两个小火盆放在祭坛上的白色布匹上，尽管目前都没有点燃。一个空的石碗位于祭坛中心。布制垫子随意散布在地板上。",dmGuidance:"如果角色在祭坛周围探查，一次成功的 DC 10 感知（察觉）检定可以发现在其中一个炭盆上缠着一条价值 25 gp 的银链。"},{id:"scn_6bc",locationId:"loc_6a7",name:"D6. 誓言大厅",activation:{condition:{type:"always"},priority:0},skeleton:["两个未点燃的火盆分列在这个宽敞大厅入口的两侧。","两侧墙壁上装饰着矮人的精细雕刻。","这些图像描绘了仪式、浪漫、爱情甚至激情的典礼。","两组楼梯并排着，但在北端分开螺旋上升。","当他们沿着通往寺庙的楼梯上升时，墙上的雕刻继续延伸。"],flesh:`当他们沿着通往寺庙的楼梯上升时，墙上的雕刻继续延伸。每段楼梯的尽头都是一扇宽阔的棕色帘子。

在西侧火盆后面的角落里靠着一把+1 巨斧。它的主人在参加更大寺庙的仪式时把它放在那里，但鬼族杀了矮人并忽略了这把斧头。斧头上刻有德特克符文，读作"黑暗深处的灯塔"。斧头的使用者始终知道通往从地下通向地表最近的通道的方向，以及斧头在地下的大致深度。`,spotlightRefs:[],presentNpcIds:["npc_grumink_the_renegade"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_6bc_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[174],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"两个未点燃的火盆分列在这个宽敞大厅入口的两侧。两侧墙壁上装饰着矮人的精细雕刻。这些图像描绘了仪式、浪漫、爱情甚至激情的典礼。两组楼梯并排着，但在北端分开螺旋上升。",dmGuidance:"如果角色们已经来到这个地点而没有惊动D7区域的生物，他们可以听到楼上传来的敲打声。"},{id:"scn_6bf",locationId:"loc_6a7",name:"D7. 神庙",activation:{condition:{type:"always"},priority:0},skeleton:["穿过帘子，你发现自己置身于一个大型的仪式厅。","台阶通向北墙上的一个宽阔凹室，那里有一个平台和祭坛面向前方。","对面墙上，光线透过一排高大狭窄的窗户照射进来。","这个大厅是矮人崇拜Sharindlar的主要仪式厅。","沿着南墙排列的窗户是7尺高，2尺宽的开放矩形。"],flesh:`这个大厅是矮人崇拜Sharindlar的主要仪式厅。沿着南墙排列的窗户是7尺高，2尺宽的开放矩形。

Grumink和他的团队一直在努力挖掘祭坛后面的石头。如果Grumink没有意识到角色们的存在，请参考"矮人们在工作"部分。如果Grumink知道角色们即将到来，请参考"矮人们被惊动"部分。在任何情况下，Grumink都对角色们持敌对态度，错误地将他们视为竞争对手。

请大声朗读以下文本：

这个穿着皮甲的矮人是叛逆的格鲁明克，而"蓝皮肤食人魔"是恶鬼，奥布拉图。八个矮人警卫正在祭坛后的石墙上敲打。与长矛和盾牌不同，守卫们手持双手战锤（命中时造成1d10 + 1点钝击伤害）。没有盾牌，这些守卫的AC（护甲等级）为14。

如果恶鬼在庭院战斗中幸存，它也会在此化身为一名女性矮人。

格鲁明克携带着一些零碎的地图和部分日记条目，当它们一起研究时，暗示着托希尔德·焰语国王的夏宫可能隐藏在神庙（区域D7）后面。这些地图和日记条目看起来是真实的，但实际上是假的。（"他们在错误的地方挖掘！"）

Obratu 携带着一张折叠的纸条，上面用通用语写着以下信息：`,spotlightRefs:[],presentNpcIds:["npc_grumink_the_renegade"],availableInfoIds:[],encounterIds:["enc_pota_d7_unalerted","enc_pota_d7_alerted"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[175],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`穿过帘子，你发现自己置身于一个大型的仪式厅。台阶通向北墙上的一个宽阔凹室，那里有一个平台和祭坛面向前方。对面墙上，光线透过一排高大狭窄的窗户照射进来。

一队矮人正在辛勤工作，在祭坛后的石头上用坚固的工具敲打。另一个穿着黑色皮甲的矮人专注地注视着他们。在他旁边，一个蓝皮肤的食人魔不耐烦地跺着脚。`,dmGuidance:`如果角色们刚刚在庭院（区域 D3）经历了一场激烈的战斗，叛逆的格鲁明克（参见第七章）将在此与两名矮人警卫一起准备进行最后的抵抗。
【发展】奥布拉图，
这里阳光太强了。我会尝试从幽暗地域的路线。也许我们会在宫殿里见面。
Reulek`,mapGeometry:{imageRef:"adventure/PotA/089-poa06-14.webp"}},{id:"scn_6c7",locationId:"loc_6c7",name:"雅塔尔的黑暗交易",activation:{condition:{type:"always"},priority:0},skeleton:["雅塔城以交易之地而闻名。","来自北地的商人、走私者、佣兵和间谍在雅塔城的酒馆和小巷中会面，进行交易。","贸易是这座城市的命脉，而只要有贸易繁荣的地方，盗贼就永远不会远离。","被称为雅塔之手的公会，是深水城和路斯坎之间最大且最不安分的无赖集合。","当雅塔之手拥有一个毁灭法球时，公会会做任何有自尊的盗贼公会可能做的事情：他们将之拍卖给出价最高者。"],flesh:`雅塔城以交易之地而闻名。来自北地的商人、走私者、佣兵和间谍在雅塔城的酒馆和小巷中会面，进行交易。贸易是这座城市的命脉，而只要有贸易繁荣的地方，盗贼就永远不会远离。被称为雅塔之手的公会，是深水城和路斯坎之间最大且最不安分的无赖集合。当雅塔之手拥有一个毁灭法球时，公会会做任何有自尊的盗贼公会可能做的事情：他们将之拍卖给出价最高者。

二十天前，永恒之火教派派遣了一群教徒，携带了一枚毁灭法球，对大型城镇翠柏尔发动了袭击。翠柏尔的民兵组织——十二人巡逻队，在附近的山丘中遭遇并击败了这些教徒。由于不清楚教徒携带的是什么，他们便将装着毁灭法球的容器带回翠柏尔。不久之后，它便消失了。

Nareen Dhest 是在 Triabor 活动的 Yartar 之手的成员，她偷窃了领主保护者的金库，并将球体连同其容器一起偷运回 Yartar。

亚塔尔之手对一个火球没有特别的用处，所以这些小偷决定将其卖掉。娜琳放出风声说，有兴趣的一方可以在眨眼和亲吻酒馆提交他们的报价，这是亚塔尔市场广场的一家酒馆。然而，另一位名为哈利拉·瑞文法斯特的亚塔尔之手找到了一个不同的买家：克拉肯协会，一个遍布北方的阴险秘密网络，拥有遍布各地的间谍。哈利拉与协会的特工达成了一项交易，将魔球卖给他们。他们只需要消除娜琳，让竖琴手、散塔林会和其他对魔球感兴趣的人互相指责对方不诚实交易。

您有几个不错的选择可以让角色参与这个支线任务。考虑以下一个或多个选项：

消息说："从特里博尔偷走的危险的火球。亚塔尔之手正在将球拍卖给出价最高的人。请取回球并将其归还给特里博尔。"

散塔林会 通过当地联系人或信使向一个盟友角色传达消息。黑网需要确保一个 Yartar 之手试图出售的魔法球体。角色需要不惜一切代价获得这个球体。

关注黑道新闻的角色会听说亚塔尔之手找到了一件元素武器。这些小偷正要将其拍卖。

经过亚塔尔的角色听到传言说亚塔尔之手偷了某种危险的东西。现在这些小偷想要摆脱它。

寻找住宿的角色在 Pearl-Handled Pipe（良好）和 White-Winged Griffon（简陋）找到了两个不错的选择。此外，与 Lords' Alliance 有关联的角色在 Waterbaron's Hall 受到欢迎，他们在那里可以免费获得客房。

眨眼和亲吻酒馆是一个位于城市中心市场广场附近的名声不佳的酒馆。

没有任何本地联系的角色可以通过在本地酒馆里花几个小时提问并花费10金币用于贿赂和购买饮料来获取相同的信息。

眨眼和亲吻（The Wink and Kiss）是一家大型酒馆，由一打舞者、服务员和厨师（都是平民）组成，由两名人类暴徒保护，他们担任保安。Nareen Dhest和她的团队在后部的一个私人房间里。在眨眼和亲吻工作的每个人都对Yartar之手友好，并且他们了解他们的常客。任何看起来可疑的陌生人都可能立即被注意到。工作人员假装一切正常，等待新来的人，但他们悄悄地警告Nareen和她的团队。Nareen可能会派一个服务员去询问这些人是否来谈生意，并邀请他们加入她。

这个女人是Nareen Dhest（女性Tethyrian人类间谍），那个在Triboar偷了毁灭法球的小偷。她由两名雇佣的老兵保护。此外，守卫酒馆的两名暴徒随时准备响应召唤。房间有两扇小的铅玻璃窗户和一扇面向酒馆后面小巷的带栅栏的门。Nareen确保在一个有两条出路的房间里设置，以防万一。

宝珠藏在附近的一个陵墓里。如果被问及，Nareen可以非常详细地描述这个宝珠，报告说它是一个厚实的玻璃球，颜色呈暗红色，触摸起来温暖。它被装在一个装满水的小木桶里，并用蜡封住。被Yartar之手雇佣的法师鉴定它为一种强大的元素火焰魔法武器，但担心它可能不稳定。她知道Triboar的士兵从那个城镇附近的奇怪橙色长袍的邪教徒手中拿走了它。如果被问及她是如何得到这个宝珠的，Nareen只是微笑。

纳琳期望得到1500金币，但若角色谈判技巧高超且提出有力论点，可通过一次成功的 DC 15 魅力（游说）检定将价格降到1100金币。她的守卫对使用魔法魅惑或胁迫她的行为极为警惕，一旦发现便会立即发动攻击。

当Nareen同意价格后，她要求角色们将一半的钱款留给眨眼与亲吻酒馆的酒保。她告诉角色们，她可以带他们去宝珠所在的地方，或者派人去取它。

Haliyra Ravenfast（女性Illuskan人类刺客），另一位Yartar之手，已经将球体卖给了Kraken Society。她在酒馆后面的小巷里有一个良好的藏身之处，可以透过后房间的小而脏的窗玻璃看到角色们与Nareen会面的地方。

当交易即将达成，或者角色们击败了Nareen和她的守卫时，Haliyra从外面的小巷通过窗户射入了一发弩箭。她以Nareen为目标。Nareen的守卫们认为是角色们所为并发起攻击，除非角色们立即援助Nareen或采取其他行动表明他们的清白。

哈利拉试图通过附近的集市逃跑。集市上人群拥挤。发现她需要进行一次成功的 DC 20 感知（察觉）检定。如果没有角色发现她，哈利拉会前往市集广场的一条街道——荆棘巷，并消失在雅塔尔的人群中。

Haliyra已经在眨眼与亲吻酒馆周围潜伏了几天，仔细观察谁参与了竞标。她已经安排了她选择的买家从藏匿之地取走宝珠。为了掩盖自己的行踪，她希望激起Nareen和角色们之间的打斗。

Haliyra携带着Kraken Society为球体支付的款项——六个价值每个250金币的翡翠。她还有一张附近墓地的简单草图，其中一个陵墓上标有X。

在与Haliyra的遭遇之后，Nareen想要退出。

下一步是取得球体的控制权，但Haliyra的买家已经在现场。

在这里的Kraken Society特工包括一个名叫格哈德的大型鲨华鱼人，Unferth（男性Tethyrian人类祭司），以及两名保镖（男性Tethyrian人类老兵）。保镖们正在用撬棍打开墓穴门，而格哈德在放哨。Unferth是这个小组的发言人，尽管格哈德负责指挥。

如果克拉肯社团的特工看到派对来了，Unferth会发出警告，说："不要再靠近了，朋友们！这是私事，我们不希望被打扰。" Unferth以一种虚假的欢乐表现自己，对两群正直的公民发现自己卷入了一场涉及打开墓穴的丑陋阴谋这一事实轻描淡写。在自嘲的态度下，是一种坚定的决心。克拉肯社团为宝珠支付了一大笔钱，他们打算保留它。

格哈德 等待并观察冒险者们是否能够被吓跑。当他决定冲突很可能发生时，他会不发警告地发动攻击。这一行为迫使其他人加入战斗。Unferth 保持距离并使用他的法术来支援他的盟友。

他们作为派对的盟友战斗。

这座墓穴是一座小型石制建筑，门是一扇锁着的铁门。纳琳握着钥匙；海妖会的密探没有钥匙，所以他们必须破门而入。墓穴里安放着一对小贵族夫妇的遗骸，他们于几个世纪前被埋葬于此。球形物放置在地板上一个显眼的木制封印桶中。有关毁灭之球的更多信息，请参阅第七章。

竖琴手们希望看到球体被归还到Triboar。散塔林会的特工们想要在散塔林会赞助的商队中走私球体，打算研究这个装置。否则，角色们可以将其交给当局或在远离任何居民区的乡村引爆它。`,spotlightRefs:[],presentNpcIds:["npc_ghald"],availableInfoIds:[],encounterIds:["enc_pota_yartar_kraken"],treasureSlotIds:["trs_6c7_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[175],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`亚塔尔是一个位于苏布林河东岸的小城，四周有城墙环绕。城市河岸线拥有广阔的码头。这座城市商贸繁荣，货车队伍不断地沿着永恒沼泽之路来来往往。在城市的西边，一座宽阔的桥梁横跨河流，通往一个有城墙的城堡。

一位服务员将你引到眨眼与亲吻酒馆后面的一个私密房间。房间里有一位黑发的人类女性，她有着冰冷的蓝眼睛，身穿旅行者的服装。她坐在一张大木桌后面，对面的椅子是空的。两个高大的人类雇佣兵穿着盔甲靠墙而立。她凝视了你一会儿，然后微笑了。
"竞标从一千五百金币开始，"她说。"你的出价是多少？"

杂草丛生的墓地延伸在城市东墙下。扭曲的树木和破败的陵墓四处阻挡了视线。三个人聚集在你所寻找的墓穴门前，还有一个——或某些东西——身高近八尺，隐藏在一件巨大的湿漉漉的斗篷下。`,dmGuidance:`如果角色与竖琴手结盟，一个已知的联系人通过en=Sending法术发送一条消息。
如果队伍是由竖琴手或散塔林会派往亚塔尔的，这些派系的当地联系人很快就会确认亚塔尔之手已经放出消息，任何对竞标一个奇异魔法球感兴趣的人都应该到眨眼和亲吻酒馆询问娜琳。
当角色们遇见娜琳时，请阅读以下内容：
如果队伍攻击并击败了纳琳和她的守卫，她将不情愿地通过交出宝珠的位置来换取自己的生命。
当角色们结束与Nareen的交易时，事情出现了新的转折。
如果角色们预先支付她，她同意告诉他们球体在哪里。
当角色们成功处理Nareen和Haliyra后，他们得知了毁灭法球藏匿的地点。
如果角色们接受了Nareen的提议，让她带他们来这里，并且她没有受到Haliyra攻击的伤害，她和她的一位老兵在这里。
当角色们找回毁灭法球时，他们必须决定如何处理它。`,mapGeometry:{imageRef:"adventure/PotA/090-poa06-15.webp"}},{id:"scn_6d8",locationId:"loc_6d8",name:"伦德雷特庄园",activation:{condition:{type:"always"},priority:0},skeleton:["德萨林谷中最强大的生物之一是一条名为努尔维雷姆的影龙，她居住在Rundreth庄园下的洞穴中。","Nurvureem对与邪教结盟没有任何兴趣。","在使者未能从Rundreth庄园返回后，元素邪教已经学会远离Nurvureem。","竖琴手组织、散塔林会和领主联盟相信元素邪教正在试图拉拢黑暗女士，因此他们派遣角色们去调查。","黑暗女士——这是Nurvureem的绰号，人们经常带着恐惧的颤抖低声提及——几个月前接待了一批元素教徒的代表团。"],flesh:`德萨林谷中最强大的生物之一是一条名为努尔维雷姆的影龙，她居住在Rundreth庄园下的洞穴中。Nurvureem对与邪教结盟没有任何兴趣。在使者未能从Rundreth庄园返回后，元素邪教已经学会远离Nurvureem。竖琴手组织、散塔林会和领主联盟相信元素邪教正在试图拉拢黑暗女士，因此他们派遣角色们去调查。

黑暗女士——这是Nurvureem的绰号，人们经常带着恐惧的颤抖低声提及——几个月前接待了一批元素教徒的代表团。他们来寻求黑暗女士的帮助。Nurvureem不仅拒绝了他们的提议，还享用了代表团。她放了一些教徒逃走，并报告他们所谓的"谈判"的可怕结果。

幸存的邪教徒匆忙离去并没有逃过人们的注意。来自竖琴手组织、散塔林会或领主联盟（由你选择）的一名间谍看到他们离开，并错误地推断出元素邪教与黑暗女士有勾结。

尽管基于错误的前提，这个支线任务对角色来说几乎不是浪费时间。如果他们玩得好，他们可以获得Nurvureem所提供的关于邪恶元素的历史视角。

这次冒险最好在战役的后期使用，有两个原因。首先，角色对元素邪教了解更多，并且能更好地理解黑暗女士的信息。其次，任何派系派遣没有经验的特工进入黑暗女士的巢穴都令人难以置信。

角色们收到了一个en=Sending法术，告诉他们去当地一家客栈与某个派系的特工会面。当他们到达时，请阅读以下文本：

那名特工试图跟踪邪教徒，但在黑暗中失去了他们的踪迹。

根据角色的需求量身定制奖励。

庄园的两翼现在只剩下倒下的石头和森林。在生长在宴会厅中的灌木和树木之间，可以看到一些铺路石。经过一番探索，角色们发现了一个通向地下楼梯的洞口。

楼梯顶部10英尺范围内的石板松散地铺在隐藏着尘土的脆弱木板上。当承受100磅或更重的重量时，它们会坍塌。一个搜索陷阱的角色可以通过成功的DC 15智力（调查）检定发现这些松动的石块。成功的检定还可以揭示松动的石块末端的边缘，即楼梯的顶部台阶是稳固的。如果陷阱被触发，其区域内的角色可以尝试进行DC 15敏捷豁免检定以抓住边缘。如果豁免失败，角色将掉落到40英尺深的坑底，在底层地板着陆，并处于倒地状态。

空气闪烁，一位女性卓尔精灵出现在房间中央。

卓尔是一个幻象投影，就像en=Major Image法术一样，努尔维雷姆用它来与入侵者交谈，而不会使自己暴露在危险之中。黑暗女士的影像通过说"欢迎来到伦德雷斯庄园"来开启对话。

这个影像无视角色对其发起的任何攻击，尽管这样的互动揭示了它是一个幻象。

黑暗女士完美地扮演了威胁性的致命女性角色，与冒险家们进行口头较量。利用她来向冒险家们传达你希望他们了解的任何知识。她只知道元素邪教计划的基本情况，但她想知道更多。她愿意交换信息来获取它。

信息交换可以采取两种形式。如果您的玩家喜欢与邪恶影龙进行口头交锋，那么就自然地发展角色扮演对话。黑暗女士巧妙地从角色们那里获取信息。为了保持信息流通，她会透露她所知道的事情。如果您的玩家更喜欢直接的谈判，那么黑暗女士就会提供公开的信息交易。角色们每透露一个关于邪教的有趣事实，黑暗女士也会透露一个。

跳过玩家已经知道的内容，黑暗女士可能会开始透露以下几点：

四个元素邪教已经进入苏默山丘：一个名为呼啸仇恨教的空气邪教；一个名为黑土教的土元素邪教；一个名为永恒火焰教的火元素邪教；以及一个名为压碎波涛教的水元素邪教。

Nurvureem已经有好几十天没有见到元素教徒了。她说："我用鲜血教导他们不要靠近这个地方。"

她的最近访客寻求与她结盟。她说："那些我允许离开的人失望地走了。嗯，我想，当恐惧消退后，他们会感到失望。"

这些邪教由自称先知的领袖领导，他们使用闹鬼的城堡作为他们的基地。空气邪教徒使用羽风尖塔，土元素邪教徒在圣石修道院，火元素邪教占据着赤月厅，而水元素邪教徒在河园城堡。

四座闹鬼的要塞是由探险者建造的，他们探索了贝西尔默的遗迹，这是一个古老的矮人王国。每一个要塞都位于地下矮人遗迹的入口处或附近。

这些邪教之所以在这里，是因为一个古老的卓尔精灵神庙，它供奉着古老的元素之眼，位于Tyar-Besil之下，Tyar-Besil是已沦陷的Besilmer的最后一个矮人要塞之一。

所有邪教都害怕远古元素之眼。其标志看起来像是一个垂直的眼睛，嵌在一个倒置的阶梯金字塔内。黑暗女士可以使用幻象魔法向角色展示远古元素之眼的标志是什么样子（见第一章）。

几个世纪前，一个名叫Vizeran DeVir的黑暗精灵利用神龛的力量制造了四把元素武器，分别是空气、水、土和火。每件武器都与一个异界的邪恶元素王子相连。这些武器可以打开或关闭通往该元素内层平面的传送门。

暗黑女士可以提供四位元素王子的名称和描述（详见第七章）。

努尔维雷姆 对先知们感到好奇。她也想了解四个邪教之间分裂或竞争的迹象。她同样对邪教如何在德萨林谷传播影响力感到好奇。她并不真正关心这些社区本身，但她对邪教用来播撒恐惧和施加控制的技巧非常感兴趣。

黑暗女士希望角色们攻击元素邪教并让她一个人待着。Nurvureem尽她所能操纵角色们去攻击四个元素邪教。她并没有出于恶意撒谎，尽管Nurvureem有很多恶意，而是因为她试图激励冒险者。她编造细节来吸引角色们继续前进。

只要黑暗女士对角色们提供的信息感兴趣，她就会与角色们交谈。当她得出结论认为角色们没有更多东西可以提供时，卓尔精灵的幻象就会消失。

努尔维雷姆 没有对进一步的请求作出回应，忽视了在地下室逗留的角色。

Nurvureem的宝藏超出了角色们的触及范围。他们的联系人对角色们在前往Rundreth庄园的旅程中存活下来表示惊讶。`,spotlightRefs:[],presentNpcIds:["npc_nurvureem_the_dark_lady"],availableInfoIds:["info_pota_elemental_weapons"],encounterIds:["enc_6d8"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[179],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`正如法术所言，你的联系人——一个看起来坚毅的女人——正在旅馆的后桌等待。寒暄之后，她展开了一张德萨林谷地的地图。
"一条强大的阴影龙被称为黑暗女士，它的巢穴就在Rundreth庄园下面，就在这里。"她指向地图上的一个点。"我们的一名特工看到穿着长袍的邪教徒离开庄园。我们从未见过有人活着离开Rundreth庄园，所以那可能意味着我们的敌人有一条阴影龙在他们那边。"她的眼睛眯起。"你的目标是以任何方式破坏这个联盟。我建议进行谈判。"

朗德瑞斯庄园的残余部分位于长路东侧的一座小而陡峭的林木覆盖的山上，一条马车道从山南边的商队路分叉出来，沿着山的南侧上升，然后绕过山脚，从东侧接近庄园的后部。
在庄园曾经矗立的地面上，有成堆的倒塌石块和倒塌的墙壁线条，它们形成了一个T字形轮廓，两个长方形的翼楼从巨大的东西向长方形房间向北和南突出。这个房间在两个地方有三层楼高的墙壁残迹，依附在高耸的石制烟囱上。它看起来曾经是一个真正令人印象深刻的大厅。

昏暗笼罩着一个七十尺宽、一百尺长的房间。房间里散布着腐烂的长条形搁板桌残骸，这些桌子配备了水槽，上面散布着锈迹斑斑的金属盘子、携带碗和大汤碗。它的天花板是一系列壮丽的交叉拱顶，支撑着一个石块天花板，许多地方被上方生长的树木的悬挂根穿透。

一个新的但熟悉的声音，比卓尔的声音低一个八度，远更加威胁，回荡在房间里，说道："现在离开，永远不要回来！你们对我来说不再有用。至少，活着对我来说不再有用。"`,dmGuidance:`如果角色们询问，他们的联系人会说，另一名特工看到有六个人匆忙离开Rundreth庄园。
如果角色请求报酬，联系人有权代表她的派系进行谈判。
当角色前往和返回庄园的途中，派系代理人可以向他们的上级传达信息，并获取角色协商的任何金钱或魔法。
如果角色提到了毁灭之球，黑暗女士会表现出浓厚的兴趣。
如果角色拒绝离开或故意挑起暴力冲突，努尔芙瑞姆会以她的龙形从阴影中出现并发起攻击，毫不留情。
要创建努尔维尔姆的数据，请将影龙模板应用于成年黑龙的数据，这些数据可在怪物图鉴中找到。
当队伍从Rundreth庄园返回时，无论他们与哪个派系打交道，都会尊重角色们达成的交易。`,mapGeometry:{imageRef:"adventure/PotA/093-poa06-17.webp"},offerableQuestIds:["qst_main_pota"]},{id:"scn_6e3",locationId:"loc_6e3",name:"狩猎斧大厅",activation:{condition:{type:"always"},priority:0},skeleton:["猎斧之厅矗立着，提醒着人们那个被遗忘已久的矮人王国贝西尔默。","作为地下世界和地面世界的门户，这些大厅曾经是一个宏伟的建筑群，有着高耸的拱形墙壁、美丽的彩色玻璃窗和无懈可击的工艺。","现在唯一剩下的是一些破败的废墟，它们位于一个显眼的岩石上，可以俯瞰周围数里格的平原。","有传言称，大厅的废墟隐藏着通往贝西尔默国王托希尔德·焰舌（Torhild Flametongue）的墓穴的入口，以及他的魔法斧头奥克分裂者（Orcsplitter）。","也有人坚称这个地方仅仅是匪徒和野兽的藏身之处。"],flesh:`猎斧之厅矗立着，提醒着人们那个被遗忘已久的矮人王国贝西尔默。作为地下世界和地面世界的门户，这些大厅曾经是一个宏伟的建筑群，有着高耸的拱形墙壁、美丽的彩色玻璃窗和无懈可击的工艺。现在唯一剩下的是一些破败的废墟，它们位于一个显眼的岩石上，可以俯瞰周围数里格的平原。有传言称，大厅的废墟隐藏着通往贝西尔默国王托希尔德·焰舌（Torhild Flametongue）的墓穴的入口，以及他的魔法斧头奥克分裂者（Orcsplitter）。也有人坚称这个地方仅仅是匪徒和野兽的藏身之处。

加戈什·布斯特尔姆，一个来自米斯拉大厅的年轻盾矮人，已经将寻找传说中的斧头兽人肢解者并将其呈献给布斯特尔姆家族的长老们作为他一生的追求，希望恢复他家族平平无奇的声誉。大多数长老认为加戈什的计划是愚蠢的追求。

加戈什已经发展并维护了他寻找任务的广泛日记，用笔记、图画、古代石碑的拓片等填充，所有这些都包含指向托希尔德·炎舌之墓的秘密位置的线索。最后确信他有足够的线索，加戈什已经出发去寻找斧头。现在他只需要一些值得信赖的人来帮助他完成他的任务。

Gargosh的贪婪表亲，Drannin Splitshield，也对找到这把斧头以获得自己的荣耀感兴趣。Drannin已经启动了一个独立的计划，该计划涉及偷取Gargosh的日记，并欺骗Gargosh的盟友去做所有的脏活，然后Drannin自己声称这把斧头。

加戈什的另一个问题是竖琴手。那个派系认为传说中的斧头应该保持它现在的位置，隐藏起来且不被打扰，这样它的力量就不会落入错误的手中。他们已经采取措施防止寻宝者过于接近，保持警惕的代理人在大厅附近，以阻止任何严重的挖掘活动。

这次冒险是为11级角色的团队设计的。亚尔塔是一个理想的起点，因为它是领主联盟盟友的聚集地。

加戈什走向角色们，恳求他们帮忙。贵族联盟与米斯拉尔厅有联系，并且愿意通过帮助加戈什找到斧头来为矮人们做一件好事。

"其他人都认为这是徒劳的差事，"他继续说道。"国王的墓穴，斧头所在之地，甚至对他的子民都是隐藏的，但我相信我们可以一起找到它！

加戈什继续详细地向冒险家们介绍了贝西尔默的历史（见第一章的"古代骨骼"部分的概述），并解释了他正在尝试完成的事情。在对话中，他透露他有"大量的笔记和证据"指向坟墓的位置，但他出于对日记安全的考虑没有带在身边。他承诺下次可以让他们看到。加戈什同意第二天在同一地点与他们会面，装备齐全，准备出发。

Drannin和他的团队喜欢让角色们触发陷阱并与所有致命的怪物战斗的想法，于是他们策划了一个欺骗角色们的计划。Drannin的一个同伴，一个变形怪，假扮成Gargosh并加入角色们，用一个关于盗窃和背叛的故事催促他们加快速度。其他人计划保持隐蔽，当找到斧头时，他们希望介入并从角色们那里夺取它。变形怪并不知道Gargosh知道的所有事情。然而，它可以读取表面思想，如果被询问，可能能够从审问它的人物那里提炼出预期的答案。如果一切都失败了，变形怪诉诸于敲诈，告诉角色们继续前进，否则真正的Gargosh将遭受巨大的伤害。

一个伪装成加戈什的变形怪在约定的时间遇到了角色们：

"加戈什"告诉角色们他们的目的地是狩猎斧大厅，他计划走以下路线：

从雅塔尔沿着永恒沼泽路向西旅行到特里博尔（60英里）

沿着从特里博尔到西桥的长路向南旅行（80英里）

从Westbridge沿着石径向东南方向旅行至石桥，然后继续向东前往Beliard（80英里）

从贝利亚德沿着德萨林路向南行驶大约四十英里，然后向东穿过丘陵到达狩猎斧头大厅（50英里）

角色们可以建议其他路线，但加戈什向他们保证他的路线是最安全的。无论角色们决定走哪条路线，都需要进行随机遭遇（见第二章）。

德兰宁和他的船员选择了一条更加危险且直接的路线，穿越崎岖的丘陵地带：

他们从雅塔尔向南旅行，穿过德萨林丘陵，到达石径，保持在德萨林河的西侧（110英里）

他们穿过石桥，然后继续向东前往Beliard（20英里）

他们穿越贝利亚德东南部的山丘直达狩猎斧大厅（30英里）

此外，德兰宁在石桥留下了一小股力量来骚扰角色们（见下文的'石桥'）。

欲了解更多关于石桥的信息，请参见第二章。

桥上的人物包括五个暴徒（男性盾矮人）和一个名叫卡维尔·扎尔托巴尔的雇佣兵魔法师（男性泰瑟瑞安人类）。Cavil手持一根+1 战法师魔杖。

Drannin故意将这些部队留在这里，他知道他们不太可能击败角色们，但他想强调有人试图阻止Gargosh完成他的任务。Cavil选择这个地方是因为它据说是矮人国王Torhild Flametongue，Besilmer的国王，很久以前坠落死亡的地方。"这不是一个糟糕的死法，"这位法师带着轻微的娱乐说道。

假扮成Gargosh的变形怪没有参与战斗，它留在战场边缘，希望角色们能够获胜。一旦三名暴徒被击败，剩下的两个投降，而法师对自己施放了en=Fly法术以逃脱。

"加戈什"假装惊讶：

有理由怀疑加戈什可能在撒谎或隐瞒信息的角色可以进行一次 DC 16 感知（洞悉）检定。检定成功的角色会意识到加戈什的惊讶似乎有点做作，这表明加戈什一直都知道德兰宁与此事有关。如果有一个或多个角色指责加戈什向他们隐瞒信息，他会承认自己长期以来一直怀疑德兰宁有这种背叛的倾向，但否认自己知道德兰宁的阴谋。

如果Gargosh感觉角色们可能会反对他，他建议他们所有人都继续前往Beliard并好好休息一晚。然后，变形怪试图在夜里悄悄溜走。`,spotlightRefs:[],presentNpcIds:["npc_cavil_zaltobar"],availableInfoIds:[],encounterIds:["enc_pota_hunting_axe_bridge"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[180],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},readAloud:`"你们能听我的故事真是太好了，"Gargosh说。"我在寻找一件伟大的武器，一件由我的祖先挥舞的传说中的斧头，我希望你能帮我找到它。按照适当的方式，我应该自己去找到它，以此来给我的家庭和氏族带来荣耀，但我根本无法独自成功。风险超出了我仅凭智慧和才能所能克服的范围。在这里，我说了。我独自尝试是不够好的。

当你在约定的时间和地点发现那个年轻的矮人时，他似乎非常焦虑不安。"难以置信！"他气愤地说。"有人偷了我的日记！就在我昨晚藏的地方！我发誓，现在的人真是不能相信！"他凝视着你，好像在考虑你是否与此有关，然后放弃了这个想法。"没关系，"他说。"我已经记住了我所有的笔记！

你看到前方桥上有半打身影——五个穿着皮甲的矮人和一个穿着法师长袍的人类。他们似乎坐在桥边，面向北方，欣赏着风景。当他们看到你时，他们站起来，离开桥边，拔出武器。穿长袍的人拿出一根魔杖。

"幸会！"法师说。"终于追上我们了，嗯？恐怕你的冒险到此为止了。"

"我的表亲德兰宁？那个无赖！他偷了我的日记，因为他想要那把斧头和所有的荣耀！我们需要加快速度追上他！"`,dmGuidance:`如果玩家角色中有一个是贵族联盟的成员，那么该派系中的某个人会将加戈什介绍给他们。
在角色们第一次与Gargosh会面和他们再次集结之间的时间，Drannin和他的杂牌团队抓住了Gargosh并得到了日记。
如果角色们推荐了一条更短的路线，加戈什同意听从他们的建议。
如果角色选择走加戈什的路线，德兰宁和他的团队将在加戈什和角色之前一天到达贝利亚德。
当角色们到达桥的中间时，请阅读以下文本：
如果角色们没有立即攻击，Cavil会在命令暴徒攻击之前对他们说几句话：
如果角色们抓住了俘虏，他们可以审问这些俘虏并得知他们是被一个名叫德兰宁的矮人雇佣的。`,mapGeometry:{imageRef:"adventure/PotA/094-poa06-18.webp"}},{id:"scn_6f3",locationId:"loc_6f3",name:"废墟",activation:{condition:{type:"always"},priority:0},skeleton:["他说，这些符号是打开Torhild Flametongue的墓穴的关键。","这个变形怪没有更多的信息。","捕获的德兰宁的团队成员可以透露真正加戈什的位置。","他被囚禁在雅塔尔附近河岸上的一个小洞穴里，锁在一个有通气孔和水的大箱子里。","加戈什在箱子里还能再活四天。"],flesh:`他说，这些符号是打开Torhild Flametongue的墓穴的关键。这个变形怪没有更多的信息。

捕获的德兰宁的团队成员可以透露真正加戈什的位置。他被囚禁在雅塔尔附近河岸上的一个小洞穴里，锁在一个有通气孔和水的大箱子里。加戈什在箱子里还能再活四天。

他们指出兽人肢解者应当交由矮人学者保管。首先他们会以利他之心劝说，若行不通则试图安排魔法物品交换。这是玩家为特定角色索求某物（例如一两件特定武器）的良机。若达成协议，阿里安娜·河逝会承诺两周后在他们指定的地点交付约定报酬。`,spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[183],confidence:"high",needsReview:!1,extractorNotes:"脚本提取（确定性）：skeleton 句子拣选近似；activation 前后序未判；配置列入逐场景来源复核清单"},dmGuidance:`当角色们最终到达被毁坏的狩猎斧大厅时，'Gargosh'解释说，寻宝的下一步是找到在废墟中的某处展示的四个符号。
如果角色带着兽人肢解者从矮人墓穴中现身，藏匿在区域X5的竖琴手们会在开阔的天空下与他们对峙。`,mapGeometry:{imageRef:"adventure/PotA/098-poa06-21.webp"}},{id:"scn_6f4",locationId:"loc_6f3",name:"X1. 枭熊的问候",activation:{condition:{type:"always"},priority:0},skeleton:["你找到了一条蜿蜒穿过山丘、树林和古老废墟的碎石路。","这条路偶尔穿过石拱门，向北蜿蜒而去。","前方就有这样一个拱门，而在拱门左侧的岩石峭壁上栖息着一只枭熊。","它对你尖叫，但没有离开它的栖息地。","枭熊一直在该地区狩猎并且最近已经进食，所以它并不饿到足以攻击一群全副武装的旅行者。"],flesh:`枭熊一直在该地区狩猎并且最近已经进食，所以它并不饿到足以攻击一群全副武装的旅行者。如果他们攻击它，它会跳下来反击，并在生命值减少到一半时逃跑。

这条古道与一条有小溪在底部流淌的峡谷相连。沿着这条路走的角色们来到一个被崩塌废墟包围的广场。`,spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:["enc_6f4"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[183],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"你找到了一条蜿蜒穿过山丘、树林和古老废墟的碎石路。这条路偶尔穿过石拱门，向北蜿蜒而去。前方就有这样一个拱门，而在拱门左侧的岩石峭壁上栖息着一只枭熊。它对你尖叫，但没有离开它的栖息地。",dmGuidance:"如果角色们不招惹它，枭熊会让他们通过。",mapGeometry:{imageRef:"adventure/PotA/097-poa06-20.webp"}},{id:"scn_6f6",locationId:"loc_6f3",name:"X2. 破碎的拱门",activation:{condition:{type:"always"},priority:0},skeleton:["道路穿过一个独立的拱门——这是一些Besilmer石工如何经受住时间的摧残的一个例子。","这座宏伟的拱门半被毁坏，但残存的部分表明它曾经是一座雕刻着符文的巨大而坚固的建筑，这些符文大多因风化而无法辨认。","拱门的另一边是一座曾经令人印象深刻的大厅的残垣断壁，以及它右侧的一尊巨型雕像的下半部分。","拱门上的德特克符文曾经告诉访客，他们正站在贝西尔默矮人的宏伟工程之中。","雕像在X3区域有描述，X4区域是废墟大厅。"],flesh:`道路穿过一个独立的拱门——这是一些Besilmer石工如何经受住时间的摧残的一个例子。

拱门上的德特克符文曾经告诉访客，他们正站在贝西尔默矮人的宏伟工程之中。雕像在X3区域有描述，X4区域是废墟大厅。`,spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[184],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座宏伟的拱门半被毁坏，但残存的部分表明它曾经是一座雕刻着符文的巨大而坚固的建筑，这些符文大多因风化而无法辨认。拱门的另一边是一座曾经令人印象深刻的大厅的残垣断壁，以及它右侧的一尊巨型雕像的下半部分。"},{id:"scn_6f8",locationId:"loc_6f3",name:"X3. 瞭望塔",activation:{condition:{type:"always"},priority:0},skeleton:["这座巨大的建筑曾经是一个顶部有一座伟大雕像的建筑——一个自豪地站立着的矮人，一只手臂伸展开来，挥舞着他的巨斧。","雕像的头部、肩部和手臂已经崩塌，现在散落在建筑底部的一堆瓦砾之中；","只剩下腿部、腰部、伸展的手臂和武器。","建筑物内的楼梯穿过雕像，尽管它最初设计是为了一直上升到雕像的头部，但它突然在破碎的躯干处停止了。"],flesh:"建筑物内的楼梯穿过雕像，尽管它最初设计是为了一直上升到雕像的头部，但它突然在破碎的躯干处停止了。",spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[184],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这座巨大的建筑曾经是一个顶部有一座伟大雕像的建筑——一个自豪地站立着的矮人，一只手臂伸展开来，挥舞着他的巨斧。雕像的头部、肩部和手臂已经崩塌，现在散落在建筑底部的一堆瓦砾之中；只剩下腿部、腰部、伸展的手臂和武器。"},{id:"scn_6fa",locationId:"loc_6f3",name:"X4. 古老大厅",activation:{condition:{type:"always"},priority:0},skeleton:["尽管现在大部分已经倒塌，这座大厅曾经一定是贝西尔默建筑技艺的杰出代表。","仍然可以看到厚厚墙壁的尖锐残余部分，它们高耸入云，上面有高高的、狭窄的彩色玻璃窗户，一些坍塌的巨大穹顶仍然坐落在上面。","四个入口拱门（每面墙的中心）或多或少保持完好，尽管门本身已经被砸碎或倒塌。","每个拱门内都嵌有一个狭窄的门道，通往同样狭窄的螺旋楼梯，向下通往地下。","每个楼梯通往一个小型地下房间，里面装有矮人的机械装置。"],flesh:`四个入口拱门（每面墙的中心）或多或少保持完好，尽管门本身已经被砸碎或倒塌。每个拱门内都嵌有一个狭窄的门道，通往同样狭窄的螺旋楼梯，向下通往地下。每个楼梯通往一个小型地下房间，里面装有矮人的机械装置。

刻在天花板上的象征是四个元素象征之一（见第一章）：

无论角色们如何用力推动，飞轮始终不动。仔细观察并成功通过一个 DC 10 智力（调查）检定后，可以发现一个脱开的链轮，可以沿着轴滑动以接合机器的另一部分。如果链轮被固定到位，当角色推动飞轮时，飞轮确实会移动，并且角色们可以听到远处传来石头摩擦的回声。仅靠蛮力似乎无法阻止这种运动；试图阻止反转的角色甚至无法减慢它的速度。

虽然蛮力不起作用，但机械的巧思会奏效。一个成功的 DC 15 智力（调查）检定会发现飞轮边缘上的一个小洞，普通的武器柄或一捆箭矢可以插入其中。如果此时至少有六英寸长的物体从飞轮伸出，飞轮便无法反转。

沿着边缘，飞轮上刻有隐约可见的气、土、火、水四元素符号。当所有四个飞轮都正确对齐后，区域X9中的秘密门便会解锁。

冒充加戈什的变形怪自己无法弄清楚这些，当角色们弄清楚时，它既感到惊讶又印象深刻。`,spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[184],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`尽管现在大部分已经倒塌，这座大厅曾经一定是贝西尔默建筑技艺的杰出代表。仍然可以看到厚厚墙壁的尖锐残余部分，它们高耸入云，上面有高高的、狭窄的彩色玻璃窗户，一些坍塌的巨大穹顶仍然坐落在上面。

这个黑暗的房间包含一个连接到一系列齿轮的大石质飞轮。更多的机械装置肯定隐藏在墙壁后面或地板下。天花板上雕刻着一个符号。`,dmGuidance:`当角色们首次发现这四个房间中的一个时，请大声朗读以下内容：
如果玩家想知道每个房间中的符号是什么样子，就像在猎斧之厅地图的角落上出现的那样，勾画出这些符号。
如果角色移动飞轮然后放开，它会反转并旋转回原来的位置。
如果角色转动飞轮使其符号与天花板上对应的符号对齐，然后通过飞轮边缘的孔将其锁定到位，区域X9中秘密门上的四个锁之一便会打开。`},{id:"scn_6fd",locationId:"loc_6f3",name:"X5. 水池",activation:{condition:{type:"always"},priority:0},skeleton:["水，因藻类而呈绿色，部分填满了一个挖掘在地下的五十尺宽的蓄水池。","水面位于地面以下三十尺。","来自悬崖更高处的引水渠的遗迹仍然可见，但大部分已经破败不堪。","贝西尔默矮人曾经拥有广泛的水利工程，尽管现在几乎没有剩下什么。","蓄水池的南边有一些古老的废墟，位于悬崖边缘。"],flesh:`贝西尔默矮人曾经拥有广泛的水利工程，尽管现在几乎没有剩下什么。

蓄水池的南边有一些古老的废墟，位于悬崖边缘。隐藏在这些废墟中的是三位善良阵营的哈珀组织特工——一位名叫Ariana Riverlost的魔法师（女性月精灵）和两位半月精灵斥候，分别叫做Elifar（男性）和Lorendil（女性）。他们听说了矮人企图洗劫托希尔德·炎舌国王的坟墓的传闻。`,spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[185],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"水，因藻类而呈绿色，部分填满了一个挖掘在地下的五十尺宽的蓄水池。水面位于地面以下三十尺。来自悬崖更高处的引水渠的遗迹仍然可见，但大部分已经破败不堪。",dmGuidance:'当角色们从墓穴中出现时，他们会从隐藏的地方出现并与持兽人肢解者的角色对峙（见"后续"）。'},{id:"scn_6ff",locationId:"loc_6f3",name:"X6. 露天剧场",activation:{condition:{type:"always"},priority:0},skeleton:["一个大型的半圆形露天剧场依山崖而建，利用了自然坡度和音响效果。","它结构上仍然稳固，尽管一些裂缝之间长出了杂草、灌木和小树。","德兰宁·拆盔者，他的构装盾卫，以及三名手持战斧而非长剑的矮人老兵隐藏在这里。","他们密切监视着墓穴入口（X7区域）。","除非他们在这里被对抗和击败，否则德兰宁和他的随从会跟随角色进入墓穴（见X10区域）。"],flesh:"德兰宁·拆盔者，他的构装盾卫，以及三名手持战斧而非长剑的矮人老兵隐藏在这里。他们密切监视着墓穴入口（X7区域）。除非他们在这里被对抗和击败，否则德兰宁和他的随从会跟随角色进入墓穴（见X10区域）。",spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:["enc_6ff"],treasureSlotIds:[],eventIds:[],tone:"tension",_meta:{sourcePages:[185],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"一个大型的半圆形露天剧场依山崖而建，利用了自然坡度和音响效果。它结构上仍然稳固，尽管一些裂缝之间长出了杂草、灌木和小树。"},{id:"scn_701",locationId:"loc_6f3",name:"X7. 地下墓穴入口",activation:{condition:{type:"always"},priority:0},skeleton:["这个结构与其说是一座建筑物，不如说是一个嵌入悬崖的立面。","两个壁龛分别位于一个开口的两侧，每个壁龛内都矗立着真人大小的石雕：一对穿着全套礼服的矮人，可能是作为荣誉守卫。","这些雕像风化严重，还遭受了破坏者和寻宝者的破坏。","这个开口通向一个走廊，走廊延伸大约60尺，然后到达一个长长的楼梯，楼梯向下进入黑暗200尺，每隔20尺有一个平台。","在每个平台的两侧，一个小壁龛里有一个石制火盆。"],flesh:"这个开口通向一个走廊，走廊延伸大约60尺，然后到达一个长长的楼梯，楼梯向下进入黑暗200尺，每隔20尺有一个平台。在每个平台的两侧，一个小壁龛里有一个石制火盆。尽管多年来都没有被点燃，但将火把触碰到其中一个会使它们全部神奇地燃起火焰，同时楼梯底部X8区域的火盆也会燃起。",spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[185],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个结构与其说是一座建筑物，不如说是一个嵌入悬崖的立面。两个壁龛分别位于一个开口的两侧，每个壁龛内都矗立着真人大小的石雕：一对穿着全套礼服的矮人，可能是作为荣誉守卫。这些雕像风化严重，还遭受了破坏者和寻宝者的破坏。"},{id:"scn_703",locationId:"loc_6f3",name:"X8. 陨落者大厅",activation:{condition:{type:"always"},priority:0},skeleton:["楼梯最终通向一个宏伟的大厅，里面布满了厚达20尺的巨大方柱，这些柱子上升到30尺高的天花板。","每个柱子的路径交叉处都立着石制火盆。","每个柱子都是一个陵墓，每侧都雕刻有一个凹室，错开排列，使得凹室只占据面对的右侧一半。","这些凹室曾经放置着安葬死者的石雕人像。","许多坟墓已经被砸开，露出了里面的死者骨头。"],flesh:`这里的地面由平滑的切割石块制成。

每根柱子上有四个墓室，每个墓室都隐藏在一个壁龛后面，壁龛内要么含有，要么曾经含有一个刻有墓内矮人浮雕的石板。已经被搜索过的墓室门敞开着，它们的门和雕像被砸碎了。只剩下八个墓室仍然封闭着，里面除了古代死者的骨头外什么也没有。`,spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[186],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`楼梯最终通向一个宏伟的大厅，里面布满了厚达20尺的巨大方柱，这些柱子上升到30尺高的天花板。每个柱子的路径交叉处都立着石制火盆。每个柱子都是一个陵墓，每侧都雕刻有一个凹室，错开排列，使得凹室只占据面对的右侧一半。这些凹室曾经放置着安葬死者的石雕人像。许多坟墓已经被砸开，露出了里面的死者骨头。破碎人像的碎石工作散落在地板上。
"我觉得我们来对地方了，"加戈什边说边在墓穴间闲逛，"这里某个地方就是通往炎舌国王陵墓的秘密入口。我们只需要找到它！"`},{id:"scn_705",locationId:"loc_6f3",name:"X9. 假墓",activation:{condition:{type:"always"},priority:0},skeleton:["这个特定的墓室在其他墓室中看起来并不显眼，但它揭示了一个秘密。","这座墓碑上的雕像描绘了一个身穿全套礼服的矮人国王，一只手紧握着石制权杖，另一只手指向地面。","仔细观察雕像可以发现，没有任何接缝表明其后藏有墓穴。","事实上，并没有墓穴存在。","权杖长2英尺，手柄厚2英寸，重25磅。"],flesh:`这个特定的墓室在其他墓室中看起来并不显眼，但它揭示了一个秘密。

仔细观察雕像可以发现，没有任何接缝表明其后藏有墓穴。事实上，并没有墓穴存在。一个成功的 DC 10 智力（调查）检定还会揭示权杖是独立的石雕部件，可以轻松从矮人国王的手中取下。权杖长2英尺，手柄厚2英寸，重25磅。

检查地板发现，教堂前20英尺见方的区域与大厅其他地方的平滑石头不同。它由十块20英尺长、1英尺宽的石板整齐拼接而成。在最南端的石板旁边钻有一个2英寸宽、6英寸深的洞，可以通过一项 DC 10 感知 (察觉) 检定发现。

这些石板其实是通往X10区域秘密阶梯的最上层台阶。地板下隐藏的四把锁会阻止石板下降。但如果区域X4的飞轮正确对齐，这些锁现在就会打开。一旦锁被打开，将石制权杖或其他类似尺寸的「钥匙」插入孔中会使石板下沉，形成隐藏阶梯的台阶。只要钥匙（权杖或其他物体）留在原位，阶梯就会保持开启状态。

"加戈什"可能在注意到隐藏的楼梯和地板上的洞方面有所帮助，但在弄清楚如何放下楼梯方面他帮不上什么忙。角色们也可以通过在秘密楼梯上施展四个en=Knock法术来"作弊"。

如果Gargosh在角色们打开秘密楼梯时在场，请阅读以下内容：`,spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:[],treasureSlotIds:[],eventIds:[],tone:"exploration",_meta:{sourcePages:[186],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`这座墓碑上的雕像描绘了一个身穿全套礼服的矮人国王，一只手紧握着石制权杖，另一只手指向地面。

加戈什惊讶地凝视着。"我们找到了，"他低声说。"斧头很快就是我的了！看，我根本不需要那本愚蠢的日记！我们走吧！"`,dmGuidance:"如果角色们还没有转动X4区域的飞轮，加戈什建议他们去其他地方寻找打开道路所需的符号。"},{id:"scn_708",locationId:"loc_6f3",name:"X10. 假坟墓",activation:{condition:{type:"always"},priority:0},skeleton:["角色们通过从X9区域下来楼梯到达这个区域。","宽阔的楼梯通向一个形状奇特的房间。",'楼梯旁边的墙上安装着一个处于"下"位置的石质杠杆。',"与上面的火盆相似，这些火盆燃烧着神秘的蓝色火焰，但不发出热量。","在两侧的壁龛中，大型矮人雕像立正致敬，向着远处墙壁边独立放置的精美雕刻的大理石石棺，墙上刻有符文。"],flesh:`角色们通过从X9区域下来楼梯到达这个区域。

任何能读懂矮人语的角色都可以翻译墙上的德特克符文：

这些矮人雕像是两个石魔像。任何人试图打开石棺的那一刻，魔像就会活化并攻击，一旦所有入侵者撤退上楼梯，它们就会返回到它们的壁龛中。如果"加戈什"仍然和角色们在一起，他会逃上楼梯以逃避魔像的愤怒，并与德兰宁重聚（见下面的"发展"）。

打开石棺会释放出一团毒气，充满整个房间。室内所有生物必须进行一次DC 15体质豁免检定，若失败则受到22（4d10)点毒素伤害，成功则受到一半伤害。豁免失败的生物还会中毒1分钟。

石棺是空的。

从墙上伸出的石制杠杆可以用来升起或降下通往X9区域的楼梯。向上移动杠杆会升起楼梯并封闭墓室；向下拉动杠杆则再次打开墓室。

西南角的一扇秘密门缓缓打开，露出了一条满是灰尘、高10英尺、宽10英尺的石质隧道，通向区域X11。角色在墙壁上寻找秘密门时，若通过一次成功的 DC 20 感知（察觉）检定，即可发现这道隐藏得很好的门。

一旦角色们击败了魔像，德兰宁·拆盔者就会带着他的构装盾卫和他的随从——三名手持战斧而非长剑的矮人老兵到来。如果假扮成Gargosh的变形怪还活着，它会尝试与其真正的同伴重聚。Drannin的队伍并不隐秘，所以角色们可以听到矮人和盾卫接近的声音。

一旦德兰宁和他的随从进入视线，请大声朗读以下内容：

德兰宁在面对角色之前喝下了一瓶霜巨人之力药水，并且急于战斗。他没有兴趣详细阅读加戈什的日记，所以他不知道这个墓室是假的，也不知道石棺可能有陷阱。

Drannin和他的同伙不会战斗到死。如果爆发战斗并且情况不妙，他们会撤退并留下盾卫来掩护他们的逃跑。如果Drannin被逼到绝境且没有人需要他保护，他会投降。

德兰宁佩戴着与盾卫者相配的控制护身符，以及一个寒冷抗性戒指。他还携带着加尔戈什的日记，其中除了其他内容外，还包含了关于一个带有秘密门的假墓的便条。`,spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:["enc_pota_x10_golems","enc_pota_x10_drannin"],treasureSlotIds:["trs_708_0"],eventIds:[],tone:"tension",_meta:{sourcePages:[186],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:`宽阔的楼梯通向一个形状奇特的房间。楼梯旁边的墙上安装着一个处于"下"位置的石质杠杆。与上面的火盆相似，这些火盆燃烧着神秘的蓝色火焰，但不发出热量。在两侧的壁龛中，大型矮人雕像立正致敬，向着远处墙壁边独立放置的精美雕刻的大理石石棺，墙上刻有符文。

一群穿着板条甲、挥舞斧头的矮人走进视线。在他们身后，一个英俊的矮人穿着板甲，在一具9尺高的构造物的阴影中鼓掌。"干得好，我的朋友们，"鼓掌的矮人说。"干得好。你们找到了老炎舌的坟墓。我曾怀疑过。我迫不及待地想看看可怜的加戈什发现是我，德兰宁·拆盔者，而不是他，找回了兽人肢解者时的表情！"矮人面带微笑，但他的笑容很快就消失了。"那么，我猜这是告别了。"`,dmGuidance:`【X10. 假坟墓】安息于此，尊贵的陛下
国王托希尔德·焰舌
他在阳光中建立了一个王国，
他用最后一口气守护着它。
如果角色们允许德兰宁洗劫墓室，他会触发毒气陷阱（如果它还没有被触发），并发现石棺是空的，他会感到非常愤怒。`},{id:"scn_712",locationId:"loc_6f3",name:"X11. 托希尔德·焰舌国王的真正坟墓",activation:{condition:{type:"always"},priority:0},skeleton:["这个简单的房间中央有一个略微抬高的圆形大理石台。","在石圈上雕刻着一个躺着的矮人雕像，抱着一把大战斧紧贴胸前。","台座周围用符文雕刻着铭文。","任何能读懂矮人语的角色都可以翻译德特克符文：","安息于此，尊贵的陛下"],flesh:`任何能读懂矮人语的角色都可以翻译德特克符文：

安息于此，尊贵的陛下

国王托希尔德·焰舌

他在阳光之下建立了一个王国。

愿他的统治永远不被遗忘。

祭坛是覆盖国王墓穴的一块沉重的石头盖子。抬起并移动祭坛需要三个角色协同合作，并且每个角色都必须在DC 20力量检定中成功。每增加一个帮助的生物，DC减少2。祭坛下方是一个宽8英尺、深3英尺的圆形石质墓穴，里面有一个简单的石棺。

石棺内躺着矮人国王的遗骸，他骨瘦如柴的双手紧握着他的斧头，兽人肢解者，靠在胸前。兽人肢解者在第七章中有描述。国王的骨头躺在500根金条上，其中一面印有国王的面孔，另一面印有升起的太阳。每根金条上细小的符文证明了古代贝西尔默王国的伟大和长久。每根金条价值10金币。`,spotlightRefs:[],presentNpcIds:["npc_drannin_splithelm"],availableInfoIds:[],encounterIds:[],treasureSlotIds:["trs_712_0"],eventIds:[],tone:"exploration",_meta:{sourcePages:[187],confidence:"high",needsReview:!1,extractorNotes:"顶层编号房间确定性提取（使用本地固定来源）；场景边界与正文由稳定 source id 锁定"},readAloud:"这个简单的房间中央有一个略微抬高的圆形大理石台。在石圈上雕刻着一个躺着的矮人雕像，抱着一把大战斧紧贴胸前。台座周围用符文雕刻着铭文。"}],o=[{id:"npc_aerisi_kalinoth",name:"阿莉希·卡罗娜斯",aliases:["Aerisi Kalinoth"],role:"嚎叫仇恨教派的空气先知",plotCritical:!0,initialAttitude:-2,personality:"艾瑞西·卡利诺斯是长者元素之眼的空气先知，也是嚎叫仇恨教派的领袖。",voice:"以精灵贵族般的优雅和优越感说话；受拒绝或嘲弄时迅速显露残酷。",skeleton:["聚集在喷泉旁的这群人物是风吟者，一个由阿莉希·卡罗娜斯的吟游诗人犁风者和五名嚎叫仇恨的启蒙者组成的音乐团体（有关两者的详细信息，请参阅第七章）。","犁风者没有告诉角色们那些使阿莉希·卡罗娜斯不悦的吟游诗人会发生什么。","吟游诗人们的长笛是由未能用其音乐取悦 阿莉希·卡罗娜斯 的昔日风语者的空心雕刻骨头制成。","Aerisi Kalinoth（毁灭亲王具名人物，数据见固定图鉴来源 p192）。"],flesh:"聚集在喷泉旁的这群人物是风吟者，一个由阿莉希·卡罗娜斯的吟游诗人犁风者和五名嚎叫仇恨的启蒙者组成的音乐团体（有关两者的详细信息，请参阅第七章）。犁风者没有告诉角色们那些使阿莉希·卡罗娜斯不悦的吟游诗人会发生什么。吟游诗人们的长笛是由未能用其音乐取悦 阿莉希·卡罗娜斯 的昔日风语者的空心雕刻骨头制成。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"阿莉希·卡罗娜斯|PotA",_meta:{sourcePages:[192,193],confidence:"high",needsReview:!1,extractorNotes:"据第7章空气先知条目与神殿在场文本复核。；overlay覆写:role/plotCritical/initialAttitude/voice/_meta"},homeLocationId:"loc_2a9"},{id:"npc_bastian_thermandar",name:"巴斯蒂安·萨曼德",aliases:["Bastian Thermandar"],role:"「永恒火焰的神殿」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"像火教中的许多人一样，巴斯蒂安内心燃烧着火焰，但他的火焰是野心，而不是希望看到世界燃烧的愿望。",voice:"原书未另述固定声线；按「永恒火焰的神殿」中已记录的立场与行为说话。",skeleton:["三位关键的领导者维持着永恒之焰邪教的组织性：凡尼弗、巴斯蒂安·萨曼德和Lyzzie Calderos。"],flesh:"三位关键的领导者维持着永恒之焰邪教的组织性：凡尼弗、巴斯蒂安·萨曼德和Lyzzie Calderos。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"巴斯蒂安·萨曼德|PotA",_meta:{sourcePages:[201],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_3ca"},{id:"npc_braelen_hatherhand",name:"布雷伦·哈瑟汉德",aliases:["Braelen Hatherhand"],role:"「T4. 前厅」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：被压在一堆小石块下的是一个名叫布雷伦·哈瑟汉德的十一岁男孩（男性特西里安人类平民，有2点生命值，没有有效的攻击能力）。",voice:"原书未另述固定声线；按「T4. 前厅」中已记录的立场与行为说话。",skeleton:["被压在一堆小石块下的是一个名叫布雷伦·哈瑟汉德的十一岁男孩（男性特西里安人类平民，有2点生命值，没有有效的攻击能力）。"],flesh:"被压在一堆小石块下的是一个名叫布雷伦·哈瑟汉德的十一岁男孩（男性特西里安人类平民，有2点生命值，没有有效的攻击能力）。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,_meta:{sourcePages:[156],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_623"},{id:"npc_bronzefume",name:"青铜香炉",aliases:["Bronzefume"],role:"「C21. 繁星湖」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"青铜香炉 更喜欢攻击船只而不是人。",voice:"原书未另述固定声线；按「C21. 繁星湖」中已记录的立场与行为说话。",skeleton:["湖中栖息着碎浪教派最强大的怪物：一只名为青铜香炉、拥有220点生命值的龙龟。","青铜香炉隐藏在湖泊的西端，等待水先知决定夺取河流控制权的时机。","由于她的生命值减少，青铜香炉的挑战等级为13（10,000 XP）。","如果有船只冒险进入她掌控的那半边湖泊，青铜香炉会浮出水面进行侦察。","青铜香炉 更喜欢攻击船只而不是人。","它包含着青铜香炉的宝藏，有700金币，440银币，六颗价值40金币的绿玉髓宝石，以及四颗价值70金币的大缟玛瑙。"],flesh:"湖中栖息着碎浪教派最强大的怪物：一只名为青铜香炉、拥有220点生命值的龙龟。青铜香炉隐藏在湖泊的西端，等待水先知决定夺取河流控制权的时机。由于她的生命值减少，青铜香炉的挑战等级为13（10,000 XP）。如果有船只冒险进入她掌控的那半边湖泊，青铜香炉会浮出水面进行侦察。青铜香炉 更喜欢攻击船只而不是人。它包含着青铜香炉的宝藏，有700金币，440银币，六颗价值40金币的绿玉髓宝石，以及四颗价值70金币的大缟玛瑙。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"青铜香炉|PotA",_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_301"},{id:"npc_cavil_zaltobar",name:"卡维尔·扎尔托巴尔",aliases:["Cavil Zaltobar"],role:"德兰宁雇来阻截寻斧队伍的法师",plotCritical:!1,initialAttitude:-2,personality:"受雇在石桥拦截队伍，以轻松嘲讽掩饰自己只是拖延者。",voice:"带着轻微娱乐感宣告冒险到此为止；三名暴徒倒下后优先施展飞行术逃离。",skeleton:["桥上的人物包括五个暴徒（男性盾矮人）和一个名叫卡维尔·扎尔托巴尔的雇佣兵魔法师（男性泰瑟瑞安人类）。","Cavil Zaltobar（毁灭亲王具名人物，数据见固定图鉴来源 p182）。"],flesh:"桥上的人物包括五个暴徒（男性盾矮人）和一个名叫卡维尔·扎尔托巴尔的雇佣兵魔法师（男性泰瑟瑞安人类）。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"卡维尔·扎尔托巴尔|PotA",_meta:{sourcePages:[182],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/initialAttitude/personality/voice/_meta"},homeLocationId:"loc_6e3"},{id:"npc_darathra_shendrel",name:"达拉斯拉·珊德瑞尔",aliases:["Darathra Shendrel"],role:"「山谷地点」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"现任守护领主是一位性情善良的竖琴手和前冒险者，名叫达拉斯拉·珊德瑞尔（女性泰瑟里安人类骑士），以其制作的优质葡萄酒而闻名。",voice:"原书未另述固定声线；按「山谷地点」中已记录的立场与行为说话。",skeleton:["现任守护领主是一位性情善良的竖琴手和前冒险者，名叫达拉斯拉·珊德瑞尔（女性泰瑟里安人类骑士），以其制作的优质葡萄酒而闻名。"],flesh:"现任守护领主是一位性情善良的竖琴手和前冒险者，名叫达拉斯拉·珊德瑞尔（女性泰瑟里安人类骑士），以其制作的优质葡萄酒而闻名。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"达拉斯拉·珊德瑞尔|PotA",_meta:{sourcePages:[37],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_04b"},{id:"npc_deseyna_majarra",name:"德塞娜·马贾拉",aliases:["Deseyna Majarra"],role:"「失踪的代表团」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：三位来自联盟城市的重要外交官领导着代表团：一位来自银月城的月精灵名叫特雷希尔，一位来自米拉巴的盾矮人名叫伦多斯，以及一位来自深水城的人类贵族名叫德塞娜·马贾拉。",voice:"原书未另述固定声线；按「失踪的代表团」中已记录的立场与行为说话。",skeleton:["三位来自联盟城市的重要外交官领导着代表团：一位来自银月城的月精灵名叫特雷希尔，一位来自米拉巴的盾矮人名叫伦多斯，以及一位来自深水城的人类贵族名叫德塞娜·马贾拉。"],flesh:"三位来自联盟城市的重要外交官领导着代表团：一位来自银月城的月精灵名叫特雷希尔，一位来自米拉巴的盾矮人名叫伦多斯，以及一位来自深水城的人类贵族名叫德塞娜·马贾拉。",appearance:{tags:[],description:""},knownInfoIds:["info_pota_missing_delegation"],recruitable:!1,_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；配置标记为非战斗NPC，已剥离combatRef"},homeLocationId:"loc_100"},{id:"npc_drannin_splithelm",name:"德兰宁·拆盔者",aliases:["Drannin Splithelm"],role:"「X6. 露天剧场」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"Drannin是一个自私的矮人，他一直认为，由于他的血统，他应该得到比他所得到的更好的待遇。",voice:"原书未另述固定声线；按「X6. 露天剧场」中已记录的立场与行为说话。",skeleton:["德兰宁·拆盔者，他的构装盾卫，以及三名手持战斧而非长剑的矮人老兵隐藏在这里。"],flesh:"德兰宁·拆盔者，他的构装盾卫，以及三名手持战斧而非长剑的矮人老兵隐藏在这里。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"德兰宁·拆盔者|PotA",_meta:{sourcePages:[210],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_6f3"},{id:"npc_elizar_dryflagon",name:"埃力萨·空壶",aliases:["Elizar Dryflagon"],role:"「H7. 邪教徒营房」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"Elizar是一位声称自己是赤月之环成员的德鲁伊。",voice:"原书未另述固定声线；按「H7. 邪教徒营房」中已记录的立场与行为说话。",skeleton:["如果埃力萨·空壶位于区域H8且听到此房间内的骚动，他会尽快加入战斗。"],flesh:"如果埃力萨·空壶位于区域H8且听到此房间内的骚动，他会尽快加入战斗。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"埃力萨·空壶|PotA",_meta:{sourcePages:[202],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_24b"},{id:"npc_fennor",name:"芬诺尔",aliases:["Fennor"],role:"凶猛麋鹿部落复仇队首领",plotCritical:!1,initialAttitude:-1,personality:"嗜战并想借酋长复仇掠夺农场，但会服从归来酋长贾沃尔达成的协议。",voice:"直言要惩罚带有邪教标记的人；对软弱让步不耐烦。",skeleton:["来自凶猛的麋鹿部落的乌斯加德，从他们的服饰和标记可以辨认出来，这个野蛮人掠夺团队由一位名叫芬诺尔的女性狂战士领导。","芬诺尔穿着锁子甲（AC 14），挥舞一把大剑，命中时造成10（2d6 + 3）点挥砍伤害，并具有多重攻击动作，允许她使用一个动作用她的剑进行两次攻击。","芬诺尔（芬诺尔）认为（虽然有些道理）队伍之所以能够毫发无损地从土丘中出来，只是因为贾沃尔允许他们这么做，这显示了一种默许的赞成。","芬诺尔 计划在执行酋长的正义过程中'帮助'，摧毁并掠夺农场。","他愿意平息芬诺尔的嗜血欲望。",`）

芬诺尔补充道："所有带有这个骗子标记的人！`,"Fennor（毁灭亲王具名人物，数据见固定图鉴来源 p170）。"],flesh:`来自凶猛的麋鹿部落的乌斯加德，从他们的服饰和标记可以辨认出来，这个野蛮人掠夺团队由一位名叫芬诺尔的女性狂战士领导。芬诺尔穿着锁子甲（AC 14），挥舞一把大剑，命中时造成10（2d6 + 3）点挥砍伤害，并具有多重攻击动作，允许她使用一个动作用她的剑进行两次攻击。芬诺尔（芬诺尔）认为（虽然有些道理）队伍之所以能够毫发无损地从土丘中出来，只是因为贾沃尔允许他们这么做，这显示了一种默许的赞成。芬诺尔 计划在执行酋长的正义过程中'帮助'，摧毁并掠夺农场。他愿意平息芬诺尔的嗜血欲望。）

芬诺尔补充道："所有带有这个骗子标记的人！`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"芬诺尔|PotA",_meta:{sourcePages:[170,171],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/initialAttitude/personality/voice/_meta"},homeLocationId:"loc_683"},{id:"npc_gar_shatterkeel",name:"戈尔·碎骨",aliases:["Gar Shatterkeel"],role:"破碎波涛教派的水之先知",plotCritical:!0,initialAttitude:0,personality:"加尔·碎骨是邪恶元素的水预言者，也是压碎波涛邪教的阴郁领袖。",voice:'原书对白/措辞样本：如果Gar退到了节点，并且角色们击败了另外两个元素先知，请使用"与戈尔·碎骨的遭遇"部分。',skeleton:['如果Gar退到了节点，并且角色们击败了另外两个元素先知，请使用"与戈尔·碎骨的遭遇"部分。',"底栖魔鱼企图杀死或奴役角色，夺取水溺，并取代戈尔·碎骨成为奥莉德拉的先知。","戈尔·碎骨（见第七章）站在水门前的岛上，开始他的仪式来召唤奥莉德拉。","戈尔·碎骨站在岛上，无人守护。"],flesh:'如果Gar退到了节点，并且角色们击败了另外两个元素先知，请使用"与戈尔·碎骨的遭遇"部分。底栖魔鱼企图杀死或奴役角色，夺取水溺，并取代戈尔·碎骨成为奥莉德拉的先知。戈尔·碎骨（见第七章）站在水门前的岛上，开始他的仪式来召唤奥莉德拉。戈尔·碎骨站在岛上，无人守护。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"戈尔·碎骨|PotA",_meta:{sourcePages:[208],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_4ff"},{id:"npc_ghald",name:"格哈德",aliases:["Ghald"],role:"「雅塔尔的黑暗交易」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"加尔德是一个身高8尺、四臂的鲨华鱼人人，他与搭档恩费斯一起为亚塔的克拉肯社团工作。",voice:"原书未另述固定声线；按「雅塔尔的黑暗交易」中已记录的立场与行为说话。",skeleton:["在这里的Kraken Society特工包括一个名叫格哈德的大型鲨华鱼人，Unferth（男性Tethyrian人类祭司），以及两名保镖（男性Tethyrian人类老兵）。","保镖们正在用撬棍打开墓穴门，而格哈德在放哨。","Unferth是这个小组的发言人，尽管格哈德负责指挥。","格哈德 等待并观察冒险者们是否能够被吓跑。"],flesh:"在这里的Kraken Society特工包括一个名叫格哈德的大型鲨华鱼人，Unferth（男性Tethyrian人类祭司），以及两名保镖（男性Tethyrian人类老兵）。保镖们正在用撬棍打开墓穴门，而格哈德在放哨。Unferth是这个小组的发言人，尽管格哈德负责指挥。格哈德 等待并观察冒险者们是否能够被吓跑。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"格哈德|PotA",_meta:{sourcePages:[210],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_6c7"},{id:"npc_grumink_the_renegade",name:"叛逆的格鲁明克",aliases:["Grumink the Renegade"],role:"「D7. 神庙」中的具名角色",plotCritical:!1,initialAttitude:0,personality:`原书未单列性格；已知行为：请大声朗读以下文本：

这个穿着皮甲的矮人是叛逆的格鲁明克，而"蓝皮肤食人魔"是恶鬼，奥布拉图。`,voice:`原书对白/措辞样本：请大声朗读以下文本：

这个穿着皮甲的矮人是叛逆的格鲁明克，而"蓝皮肤食人魔"是恶鬼，奥布拉图。`,skeleton:[`请大声朗读以下文本：

这个穿着皮甲的矮人是叛逆的格鲁明克，而"蓝皮肤食人魔"是恶鬼，奥布拉图。`],flesh:`请大声朗读以下文本：

这个穿着皮甲的矮人是叛逆的格鲁明克，而"蓝皮肤食人魔"是恶鬼，奥布拉图。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"叛逆的格鲁明克|PotA",_meta:{sourcePages:[210],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_6a7"},{id:"npc_hellenrae",name:"海伦蕾",aliases:["Hellenrae"],role:"「M12. 女修道院长的房间」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"Marlos Urnrayle的首席副手Hellenrae在儿时失去了视力。",voice:"原书未另述固定声线；按「M12. 女修道院长的房间」中已记录的立场与行为说话。",skeleton:["海伦蕾不希望被打扰。","海伦蕾（见第七章），石头修道院长，居住在这里。","如果在这里遇到入侵者，海伦蕾会立即发起攻击。","如果海伦蕾被逼入绝境，并且不相信自己能击败敌人，她会通过这条路线逃跑。","海伦蕾对物质财富兴趣不大，但她明白其他人对此感兴趣。","海伦蕾脖子上用皮绳挂着区域M24挂锁的钥匙。"],flesh:"海伦蕾不希望被打扰。海伦蕾（见第七章），石头修道院长，居住在这里。如果在这里遇到入侵者，海伦蕾会立即发起攻击。如果海伦蕾被逼入绝境，并且不相信自己能击败敌人，她会通过这条路线逃跑。海伦蕾对物质财富兴趣不大，但她明白其他人对此感兴趣。海伦蕾脖子上用皮绳挂着区域M24挂锁的钥匙。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"海伦蕾|PotA",_meta:{sourcePages:[198],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_1e8"},{id:"npc_imix",name:"伊米西",aliases:["Imix"],role:"邪恶火焰亲王",plotCritical:!0,initialAttitude:-3,personality:"将自身视作吞噬一切的永恒之焰，既要消灭入侵者，也必须维持火之传送门。",voice:"以焚尽与吞噬的意象发出简短威胁。",skeleton:['如果 凡尼弗 是最后一位幸存先知，则使用 "遭遇伊米西" 部分。',"这个元素自认为是伊米西的化身。","随着一声欢呼，这个元素creature转变成了伊米西（见第七章）。","伊米西想要消灭角色，但他也知道他必须保持火元素传送门的开启。","它通向火元素平面，那里是伊米西居住的地方。","伊米西会攻击任何通过传送门的敌人。","Imix（毁灭亲王具名人物，数据见固定图鉴来源 p214）。"],flesh:'如果 凡尼弗 是最后一位幸存先知，则使用 "遭遇伊米西" 部分。这个元素自认为是伊米西的化身。随着一声欢呼，这个元素creature转变成了伊米西（见第七章）。伊米西想要消灭角色，但他也知道他必须保持火元素传送门的开启。它通向火元素平面，那里是伊米西居住的地方。伊米西会攻击任何通过传送门的敌人。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"伊米西|PotA",_meta:{sourcePages:[145,214],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/plotCritical/initialAttitude/personality/voice/_meta"},homeLocationId:"loc_5a8"},{id:"npc_lyzandra_lyzzie_calderos",name:'莱赞德拉 "莱茜" 卡尔德罗斯',aliases:['Lyzandra "Lyzzie" Calderos'],role:"「E29. 莉齐的住处」中的具名角色",plotCritical:!1,initialAttitude:0,personality:'原书未单列性格；已知行为：如果受到伤害，这些玛格魔会发出足够响亮的嘶嘶声来警告它们的女主人莱赞德拉 "莱茜" 卡尔德罗斯。',voice:'原书对白/措辞样本：如果受到伤害，这些玛格魔会发出足够响亮的嘶嘶声来警告它们的女主人莱赞德拉 "莱茜" 卡尔德罗斯。',skeleton:['如果受到伤害，这些玛格魔会发出足够响亮的嘶嘶声来警告它们的女主人莱赞德拉 "莱茜" 卡尔德罗斯。'],flesh:'如果受到伤害，这些玛格魔会发出足够响亮的嘶嘶声来警告它们的女主人莱赞德拉 "莱茜" 卡尔德罗斯。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:'莱赞德拉 "莱茜" 卡尔德罗斯|PotA',_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_3ca"},{id:"npc_maegla_tarnlar",name:"梅格拉·塔恩拉",aliases:["Maegla Tarnlar"],role:"红松镇服装商与领主联盟联系人",plotCritical:!1,initialAttitude:1,personality:"经营方圆百里少见的高品质服装生意，并愿意把可信冒险者介绍给领主联盟。",voice:"务实地谈生意与镇上危险；原书未给固定口音。",skeleton:["赫尔维尔和梅格拉·塔恩拉是服装商（区域7）。","Maegla Tarnlar（毁灭亲王具名人物，数据见固定图鉴来源 p25）。"],flesh:"赫尔维尔和梅格拉·塔恩拉是服装商（区域7）。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"梅格拉·塔恩拉|PotA",_meta:{sourcePages:[20,25],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/initialAttitude/personality/voice/_meta"},homeLocationId:"loc_04b"},{id:"npc_marlos_urnrayle",name:"马洛斯·恩雷尔",aliases:["Marlos Urnrayle"],role:"黑土教派的土之先知",plotCritical:!0,initialAttitude:0,personality:"马洛斯·乌恩瑞尔是邪恶元素的土之先知，也是苏姆伯山黑土邪教的领袖。",voice:'原书对白/措辞样本：如果Marlos撤退到这个洞穴，并且角色们已经击败了另外两位先知，请使用"与Marlos Urnrayle的遭遇"部分。',skeleton:["如果马洛斯·恩雷尔在别处已被击败，这个洞穴由两个土元素侍从（见第七章)守卫，在明显的地方站在石碑前。",'如果Marlos撤退到这个洞穴，并且角色们已经击败了另外两位先知，请使用"与Marlos Urnrayle的遭遇"部分。',"马洛斯·恩雷尔（见第七章）站在地之传送门前，试图召唤欧雷莫克。","马洛斯·恩雷尔看起来和他前一节中的样子差不多。"],flesh:'如果马洛斯·恩雷尔在别处已被击败，这个洞穴由两个土元素侍从（见第七章)守卫，在明显的地方站在石碑前。如果Marlos撤退到这个洞穴，并且角色们已经击败了另外两位先知，请使用"与Marlos Urnrayle的遭遇"部分。马洛斯·恩雷尔（见第七章）站在地之传送门前，试图召唤欧雷莫克。马洛斯·恩雷尔看起来和他前一节中的样子差不多。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"马洛斯·恩雷尔|PotA",_meta:{sourcePages:[199],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_55d"},{id:"npc_miraj_vizann",name:"米拉吉·维扎恩",aliases:["Miraj Vizann"],role:"黑土神殿的泥浆巫师与先知副手",plotCritical:!1,initialAttitude:-2,personality:"来自卡利姆沙的土元素裔，服务黑土教并参与神殿防务。",voice:"冷静评估来客是否掌握黑土教口令或高层姓名；原书未给固定口音。",skeleton:["通过点名询问海伦蕾、马洛斯·恩雷尔或米拉吉·维扎恩，或者出示一些能引起黑土邪教徒兴趣的东西，就足以作为证明。","Miraj Vizann（毁灭亲王具名人物，数据见固定图鉴来源 p198）。"],flesh:"通过点名询问海伦蕾、马洛斯·恩雷尔或米拉吉·维扎恩，或者出示一些能引起黑土邪教徒兴趣的东西，就足以作为证明。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"米拉吉·维扎恩|PotA",_meta:{sourcePages:[60,198],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/initialAttitude/personality/voice/_meta"},homeLocationId:"loc_1e8"},{id:"npc_nurvureem_the_dark_lady",name:"努尔维瑞姆，黑暗女士",aliases:["Nurvureem, The Dark Lady"],role:"伦德雷特庄园的影龙情报贩子",plotCritical:!1,initialAttitude:-1,personality:"以卓尔幻象扮演危险而机敏的谈判者，用元素邪教情报换取队伍掌握的事实，并试图把他们引向邪教。",voice:"先以卓尔女性的从容讥诮交谈；交易结束后改用低沉一八度的威胁声线命令来客永远离开。",skeleton:["努尔维瑞姆，黑暗女士（毁灭亲王具名人物，数据见固定图鉴来源 p180）。"],flesh:"她只掌握邪教、闹鬼要塞、长老元素之眼与四把元素武器的基本事实；若队伍拒绝离开或挑起冲突，她才以成年黑影龙形态现身。",appearance:{tags:["卓尔幻象","影龙"],description:"通常以女性卓尔幻象与来客谈判，也能以藏在地下室阴影中的成年黑影龙形态出现。"},knownInfoIds:["info_pota_elemental_weapons","info_pota_four_keeps"],recruitable:!1,combatRef:"努尔维瑞姆，黑暗女士|PotA",_meta:{sourcePages:[179,180],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；overlay覆写:role/initialAttitude/personality/voice/flesh/appearance/_meta"},homeLocationId:"loc_6d8"},{id:"npc_ogr_moch",name:"欧雷莫克",aliases:["Ogrémoch"],role:"邪恶土之亲王",plotCritical:!0,initialAttitude:0,personality:"邪恶之土的王子是奥格雷莫克（发音为 oh-gray-mock），行走的山。",voice:'原书对白/措辞样本：" 随着土元素传送门的液化，巨大的欧雷莫克形象出现（见第七章）。',skeleton:["马洛斯·恩雷尔（见第七章）站在地之传送门前，试图召唤欧雷莫克。",'" 随着土元素传送门的液化，巨大的欧雷莫克形象出现（见第七章）。',"欧雷莫克专注于摧毁角色，对马洛斯的后果不太关心。","单石碑的某部分在任何给定时间都处于液态，任何触碰到液态石头的生物都会被拉入土元素位面，靠近欧雷莫克的居所。","当这个事件发生时，欧雷莫克被迫返回他的家乡平面，服务于邪教。"],flesh:'马洛斯·恩雷尔（见第七章）站在地之传送门前，试图召唤欧雷莫克。" 随着土元素传送门的液化，巨大的欧雷莫克形象出现（见第七章）。欧雷莫克专注于摧毁角色，对马洛斯的后果不太关心。单石碑的某部分在任何给定时间都处于液态，任何触碰到液态石头的生物都会被拉入土元素位面，靠近欧雷莫克的居所。当这个事件发生时，欧雷莫克被迫返回他的家乡平面，服务于邪教。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"欧雷莫克|PotA",_meta:{sourcePages:[216],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_55d"},{id:"npc_olhydra",name:"奥莉德拉",aliases:["Olhydra"],role:"邪恶水之公主",plotCritical:!0,initialAttitude:0,personality:"奥赫德拉是恶水公主。",voice:'原书对白/措辞样本：如果Gar是唯一剩下的先知，请使用"与奥莉德拉的遭遇"部分。',skeleton:['如果Gar是唯一剩下的先知，请使用"与奥莉德拉的遭遇"部分。',"底栖魔鱼企图杀死或奴役角色，夺取水溺，并取代戈尔·碎骨成为奥莉德拉的先知。","戈尔·碎骨（见第七章）站在水门前的岛上，开始他的仪式来召唤奥莉德拉。","这就是奥莉德拉，邪恶水之公主（见第七章）。","奥莉德拉专注于留在这个世界中作恶，特别是让水溺远离角色们。","当奥莉德拉出现时，湖中的水位在每回合结束时上升2尺。"],flesh:'如果Gar是唯一剩下的先知，请使用"与奥莉德拉的遭遇"部分。底栖魔鱼企图杀死或奴役角色，夺取水溺，并取代戈尔·碎骨成为奥莉德拉的先知。戈尔·碎骨（见第七章）站在水门前的岛上，开始他的仪式来召唤奥莉德拉。这就是奥莉德拉，邪恶水之公主（见第七章）。奥莉德拉专注于留在这个世界中作恶，特别是让水溺远离角色们。当奥莉德拉出现时，湖中的水位在每回合结束时上升2尺。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"奥莉德拉|PotA",_meta:{sourcePages:[218],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_4ff"},{id:"npc_oreioth",name:"奥瑞欧斯",aliases:["Oreioth"],role:"「L6. 书房」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"来自博德之门的瘦削、黑胡子年轻贵族，奥利斯更习惯于与死者为伍，而不是与生者。",voice:`原书对白/措辞样本：'

如果他死去，奥瑞欧斯会变成一道黑色的火焰。`,skeleton:["如果他在这里，奥瑞欧斯（见第七章）会藏在房间北端的帷幔后面，拿着一根魔法飞弹魔杖。",`'

如果他死去，奥瑞欧斯会变成一道黑色的火焰。`,"在帷幔后面有壁龛，奥瑞欧斯在那里存放他的食物、饮料、补给品、衣服和寝具，以及165枚银币、78枚金币和四颗磨光的黑曜石宝石（每颗50金币）。","如果奥瑞欧斯未能取回它，魔法飞弹魔杖存放在壁龛中。"],flesh:`如果他在这里，奥瑞欧斯（见第七章）会藏在房间北端的帷幔后面，拿着一根魔法飞弹魔杖。'

如果他死去，奥瑞欧斯会变成一道黑色的火焰。在帷幔后面有壁龛，奥瑞欧斯在那里存放他的食物、饮料、补给品、衣服和寝具，以及165枚银币、78枚金币和四颗磨光的黑曜石宝石（每颗50金币）。如果奥瑞欧斯未能取回它，魔法飞弹魔杖存放在壁龛中。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"奥瑞欧斯|PotA",_meta:{sourcePages:[212],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_60e"},{id:"npc_padraich",name:"帕德雷克",aliases:["Padraich"],role:"凶猛麋鹿部落复仇队战士",plotCritical:!1,initialAttitude:-1,personality:"追随芬诺尔和归来酋长贾沃尔；协议达成后服从贾沃尔。",voice:"寡言，以复仇队共同目标回应；原书未给个人对白样本。",skeleton:["其他成员包括十名部族武者和一位名叫帕德雷克的男性狂战士。","帕德雷克挥舞一把钉头锤，命中时造成10（2d6 + 3）点钝击伤害。","Padraich（毁灭亲王具名人物，数据见固定图鉴来源 p170）。"],flesh:"其他成员包括十名部族武者和一位名叫帕德雷克的男性狂战士。帕德雷克挥舞一把钉头锤，命中时造成10（2d6 + 3）点钝击伤害。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"帕德雷克|PotA",_meta:{sourcePages:[170,171],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/initialAttitude/personality/voice/_meta"},homeLocationId:"loc_683"},{id:"npc_renwick",name:"兰维柯",aliases:["Renwick"],role:"「M16. 伦威克的塔」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：从区域M14通往M16的门被施加了en=Arcane Lock法术（由巫妖兰维柯施放），通往西南通道的门也是如此。",voice:"原书未另述固定声线；按「M16. 伦威克的塔」中已记录的立场与行为说话。",skeleton:["从区域M14通往M16的门被施加了en=Arcane Lock法术（由巫妖兰维柯施放），通往西南通道的门也是如此。","修道院的这部分是圣石修道院一个长期租户的领地，一个名为兰维柯 Caradoon的巫妖。","数百年前，兰维柯曾是一位有些名气的英雄，也是萨穆拉骑士团创始人萨穆拉·卡拉杜恩的兄弟。","兰维柯对奥术知识的渴望最终驱使他为成为巫妖做准备，但他之所以成为巫妖，是因为他的兄弟在战场上给他喝下了巫妖药水，而不是让他死去。","黑土教派自然试图与兰维柯结盟，但他无视了他们。","兰维柯不会攻击入侵者。","这个巫妖不是黑土教派的成员，只要其他修道院的居民不打扰他的研究，他就不在乎他们。","（这位巫妖准备了en=Time Stop而不是en=Power Word Kill。"],flesh:"从区域M14通往M16的门被施加了en=Arcane Lock法术（由巫妖兰维柯施放），通往西南通道的门也是如此。修道院的这部分是圣石修道院一个长期租户的领地，一个名为兰维柯 Caradoon的巫妖。数百年前，兰维柯曾是一位有些名气的英雄，也是萨穆拉骑士团创始人萨穆拉·卡拉杜恩的兄弟。兰维柯对奥术知识的渴望最终驱使他为成为巫妖做准备，但他之所以成为巫妖，是因为他的兄弟在战场上给他喝下了巫妖药水，而不是让他死去。黑土教派自然试图与兰维柯结盟，但他无视了他们。兰维柯不会攻击入侵者。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"兰维柯|PotA",_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_1e8"},{id:"npc_rhundorth",name:"伦多斯",aliases:["Rhundorth"],role:"「G15. 奥术铸造厂」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：这里有两位石融者（见第七章）与一位矮人锻造大师伦多斯——来自米拉巴的代表之一（见下文）。",voice:"原书未另述固定声线；按「G15. 奥术铸造厂」中已记录的立场与行为说话。",skeleton:["这里有两位石融者（见第七章）与一位矮人锻造大师伦多斯——来自米拉巴的代表之一（见下文）。","伦多斯被征召到这里劳作，帮助土元素邪教制造盔甲和武器，以换取土元素邪教关押的其他代表不会受到伤害的承诺。"],flesh:"这里有两位石融者（见第七章）与一位矮人锻造大师伦多斯——来自米拉巴的代表之一（见下文）。伦多斯被征召到这里劳作，帮助土元素邪教制造盔甲和武器，以换取土元素邪教关押的其他代表不会受到伤害的承诺。",appearance:{tags:[],description:""},knownInfoIds:["info_pota_missing_delegation"],recruitable:!1,combatRef:"伦多斯|PotA",_meta:{sourcePages:[140],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_55d"},{id:"npc_shoalar_quanderil",name:"修拉·坎德拉",aliases:["Shoalar Quanderil"],role:"「初步调查」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"一个身材丰满的水元素裔，带着愉快的态度和尖锐的幽默感，肖拉·昆德里尔似乎是人们最不可能想到的破坏性邪教的残酷成员。",voice:"原书未另述固定声线；按「初步调查」中已记录的立场与行为说话。",skeleton:["第三艘属于一群水教徒帮派：元素裔 修拉·坎德拉（见第七章），他的仆人Pike（一个半身人暴徒），以及两个忠于元素裔的匪徒们。"],flesh:"第三艘属于一群水教徒帮派：元素裔 修拉·坎德拉（见第七章），他的仆人Pike（一个半身人暴徒），以及两个忠于元素裔的匪徒们。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"修拉·坎德拉|PotA",_meta:{sourcePages:[208],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_100"},{id:"npc_thurl_merosska",name:"瑟尔·梅洛斯卡",aliases:["Thurl Merosska"],role:"羽风骑士团首领与空气教地表代理人",plotCritical:!1,initialAttitude:0,personality:"以好客的骑士团长形象招待来客并邀请参加十周年宴会，同时掩护空气教派的献祭与侦察活动。",voice:"正式自称团长并殷勤邀请来客；受到揭露后转为命令式。",skeleton:["萨芙拉·贝拉布兰塔护送角色们穿过尖塔，到达尖顶，那里瑟尔·梅洛斯卡正在巡视领土。","我是瑟尔·梅洛斯卡，团长。",`"

瑟尔·梅洛斯卡提供塔楼的款待，邀请角色们参加庆祝协会成立十周年的宴会。`,"Thurl Merosska（毁灭亲王具名人物，数据见固定图鉴来源 p192）。"],flesh:`萨芙拉·贝拉布兰塔护送角色们穿过尖塔，到达尖顶，那里瑟尔·梅洛斯卡正在巡视领土。我是瑟尔·梅洛斯卡，团长。"

瑟尔·梅洛斯卡提供塔楼的款待，邀请角色们参加庆祝协会成立十周年的宴会。`,appearance:{tags:[],description:""},knownInfoIds:["info_pota_four_keeps"],recruitable:!1,combatRef:"瑟尔·梅洛斯卡|PotA",_meta:{sourcePages:[49,192],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界；overlay覆写:role/initialAttitude/personality/voice/homeLocationId/_meta"},homeLocationId:"loc_pota_feathergale_spire"},{id:"npc_tornscale",name:"撕裂鳞",aliases:["Tornscale"],role:"「C13. 黑爪巢穴」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：现在这里有八只蜥蜴人，包括部落领袖，一位有36生命值的战士，名叫撕裂鳞。",voice:"原书未另述固定声线；按「C13. 黑爪巢穴」中已记录的立场与行为说话。",skeleton:["现在这里有八只蜥蜴人，包括部落领袖，一位有36生命值的战士，名叫撕裂鳞。","撕裂鳞及其追随者忠于海巫婆Thuluna Maah（C14区域）。","如果蜥蜴人在此处战斗中至少损失两名成员，撕裂鳞会派遣一名剩余的战士去警告Thuluna并请求援助。"],flesh:"现在这里有八只蜥蜴人，包括部落领袖，一位有36生命值的战士，名叫撕裂鳞。撕裂鳞及其追随者忠于海巫婆Thuluna Maah（C14区域）。如果蜥蜴人在此处战斗中至少损失两名成员，撕裂鳞会派遣一名剩余的战士去警告Thuluna并请求援助。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"撕裂鳞|PotA",_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_301"},{id:"npc_vanifer",name:"凡尼弗",aliases:["Vanifer"],role:"永恒火焰教派的火之先知",plotCritical:!0,initialAttitude:0,personality:"瓦尼弗艰苦的童年使她对他人的心灵变得冷漠。",voice:'原书对白/措辞样本：如果 凡尼弗 已撤退到该洞穴，且角色们已经击败了其他两位先知，请使用 "与Vanifer的遭遇" 部分。',skeleton:["如果 凡尼弗 已被击败，哈林纳克萨斯（见区域 W11）会守卫火焰传送门，并不惜一切代价保护它。","一个 火元素侍从（见 第七章）站在祭坛前显眼的位置，冲向任何接近传送门的非 凡尼弗 者进行攻击。",'如果 凡尼弗 已撤退到该洞穴，且角色们已经击败了其他两位先知，请使用 "与Vanifer的遭遇" 部分。','如果 凡尼弗 是最后一位幸存先知，则使用 "遭遇伊米西" 部分。',"凡尼弗（见第七章)站在黑曜石祭坛前，由Halinaxus（见W11区域）监视。","Incinerath，一个有150生命值的火元素，保护着凡尼弗。",'这场遭遇的特点与上文"与Vanifer的遭遇"中描述的反派相同。'],flesh:'如果 凡尼弗 已被击败，哈林纳克萨斯（见区域 W11）会守卫火焰传送门，并不惜一切代价保护它。一个 火元素侍从（见 第七章）站在祭坛前显眼的位置，冲向任何接近传送门的非 凡尼弗 者进行攻击。如果 凡尼弗 已撤退到该洞穴，且角色们已经击败了其他两位先知，请使用 "与Vanifer的遭遇" 部分。如果 凡尼弗 是最后一位幸存先知，则使用 "遭遇伊米西" 部分。凡尼弗（见第七章)站在黑曜石祭坛前，由Halinaxus（见W11区域）监视。Incinerath，一个有150生命值的火元素，保护着凡尼弗。',appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"凡尼弗|PotA",_meta:{sourcePages:[203],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_5a8"},{id:"npc_wiggan_nettlebee",name:"维根·荨麻蜂",aliases:["Wiggan Nettlebee"],role:"「火焰女巫的诅咒」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"Wiggan Nettlebee是Nettlebee家族的族长，这是一个富裕的半身人家族，他们饲养牲畜并耕种土地。",voice:"原书未另述固定声线；按「火焰女巫的诅咒」中已记录的立场与行为说话。",skeleton:["维根·荨麻蜂是Nettlebee半身人家族的吝啬族长，他通过精明的贸易和继承积累了一笔财富。",`Nettlebee家族包括以下人员：

内特尔比家族的族长，维根·荨麻蜂（见第七章）是一个吝啬、易怒的厌世者和痛苦的鳏夫。`,"当维根·荨麻蜂加入黑土教时，他掠夺了土丘祭坛，扰乱了首领的灵魂。"],flesh:`维根·荨麻蜂是Nettlebee半身人家族的吝啬族长，他通过精明的贸易和继承积累了一笔财富。Nettlebee家族包括以下人员：

内特尔比家族的族长，维根·荨麻蜂（见第七章）是一个吝啬、易怒的厌世者和痛苦的鳏夫。当维根·荨麻蜂加入黑土教时，他掠夺了土丘祭坛，扰乱了首领的灵魂。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"维根·荨麻蜂|PotA",_meta:{sourcePages:[212],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_683"},{id:"npc_windharrow",name:"犁风者",aliases:["Windharrow"],role:"「A4. 缪斯广场」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"Windharrow曾用名Harald Grayspear，是一个机会主义的半月精灵流氓和匪徒。",voice:"原书未另述固定声线；按「A4. 缪斯广场」中已记录的立场与行为说话。",skeleton:["聚集在喷泉旁的这群人物是风吟者，一个由阿莉希·卡罗娜斯的吟游诗人犁风者和五名嚎叫仇恨的启蒙者组成的音乐团体（有关两者的详细信息，请参阅第七章）。","对平庸的新信徒感到沮丧的犁风者会问角色们是否是熟练的音乐家，以及他们是否愿意参加乐队的试镜。","如果一个吟游诗人角色或一个角色证明了他或她对犁风者的能力，他会招募角色们加入乐队，并提供给他们入门者的长袍和长笛。","犁风者没有告诉角色们那些使阿莉希·卡罗娜斯不悦的吟游诗人会发生什么。","如果陷入一场他知道自己会输的战斗，犁风者会逃往区域A19。"],flesh:"聚集在喷泉旁的这群人物是风吟者，一个由阿莉希·卡罗娜斯的吟游诗人犁风者和五名嚎叫仇恨的启蒙者组成的音乐团体（有关两者的详细信息，请参阅第七章）。对平庸的新信徒感到沮丧的犁风者会问角色们是否是熟练的音乐家，以及他们是否愿意参加乐队的试镜。如果一个吟游诗人角色或一个角色证明了他或她对犁风者的能力，他会招募角色们加入乐队，并提供给他们入门者的长袍和长笛。犁风者没有告诉角色们那些使阿莉希·卡罗娜斯不悦的吟游诗人会发生什么。如果陷入一场他知道自己会输的战斗，犁风者会逃往区域A19。",appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"犁风者|PotA",_meta:{sourcePages:[192],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_2a9"},{id:"npc_yan_c_bin",name:"延西冰",aliases:["Yan-C-Bin"],role:"邪恶空气亲王",plotCritical:!0,initialAttitude:0,personality:"Yan-C-Bin（发音为yan-see-bin）是邪恶空气的王子。",voice:"原书对白/措辞样本：如果Aerisi是唯一剩下的先知，请使用'与延西冰的遭遇'部分。",skeleton:["如果Aerisi是唯一剩下的先知，请使用'与延西冰的遭遇'部分。","在试图召唤延西冰进入这个世界时，她试图保持在角色们够不到的地方，同时施放她的破坏性法术。",'"月亮精灵随后鞠躬，延西冰（见第七章）飞过传送门。',"在这个形态中，延西冰微笑着，他的眼睛闪烁着闪电。","当Aerisi自鸣得意时，延西冰专注于摧毁角色们。","雷云围绕着一扇银色的窗户，这是一个通往空气界的传送门，直接通往延西冰的隐形城堡的台阶。"],flesh:`如果Aerisi是唯一剩下的先知，请使用'与延西冰的遭遇'部分。在试图召唤延西冰进入这个世界时，她试图保持在角色们够不到的地方，同时施放她的破坏性法术。"月亮精灵随后鞠躬，延西冰（见第七章）飞过传送门。在这个形态中，延西冰微笑着，他的眼睛闪烁着闪电。当Aerisi自鸣得意时，延西冰专注于摧毁角色们。雷云围绕着一扇银色的窗户，这是一个通往空气界的传送门，直接通往延西冰的隐形城堡的台阶。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"延西冰|PotA",_meta:{sourcePages:[221],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_4bc"},{id:"npc_zegdar",name:"泽格达尔",aliases:["Zegdar"],role:"「F14. 泽格达尔的巢穴」中的具名角色",plotCritical:!1,initialAttitude:0,personality:"原书未单列性格；已知行为：牛头人是泽格达尔，Emberhorn部落的首领。",voice:"原书未另述固定声线；按「F14. 泽格达尔的巢穴」中已记录的立场与行为说话。",skeleton:["牛头人是泽格达尔，Emberhorn部落的首领。",`这个祝福使牛头怪对火焰伤害免疫，以及以下额外的行动选项：

凡尼弗 已指示威克斯，一个谄媚的诺斯怪，作为泽格达尔的顾问。`,"威克斯奉承泽格达尔，以确保他履行职责且不制造麻烦。","灰角族的其他成员都厌恶威克斯，但泽格达尔将诺西怪视为其重要性的证明。","泽格达尔的铁箱中包含130枚银币、220枚金币和十颗有瑕疵的血石，每颗价值5金币。"],flesh:`牛头人是泽格达尔，Emberhorn部落的首领。这个祝福使牛头怪对火焰伤害免疫，以及以下额外的行动选项：

凡尼弗 已指示威克斯，一个谄媚的诺斯怪，作为泽格达尔的顾问。威克斯奉承泽格达尔，以确保他履行职责且不制造麻烦。灰角族的其他成员都厌恶威克斯，但泽格达尔将诺西怪视为其重要性的证明。泽格达尔的铁箱中包含130枚银币、220枚金币和十颗有瑕疵的血石，每颗价值5金币。`,appearance:{tags:[],description:""},knownInfoIds:[],recruitable:!1,combatRef:"泽格达尔|PotA",_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"npcFromBestiary：skeleton 取自图鉴 fluff；角色功能、态度与声线已完成逐NPC来源复核；中文名、首个正文在场场景、角色骨架与在场表现均由固定 source id 反向勾稽；原书未给固定声线时显式保留该来源边界"},homeLocationId:"loc_463"}],a=[{id:"info_pota_elemental_weapons",content:"风标、水溺、铁牙与焰袭既是四个元素节点的催化剂，也是关闭对应位面传送门的唯一钥匙；关闭门户会摧毁武器。",teaser:"四位先知的武器既开启了节点，也能终结节点。",holders:["npc_nurvureem_the_dark_lady"],revealCondition:{type:"free"},linkedQuestId:"qst_main_pota",linkedHookId:"hook_pota_portals",_meta:{sourcePages:[4,6,180],confidence:"high",needsReview:!1}},{id:"info_pota_missing_delegation",content:"米拉巴代表团在贝利亚德停留后从石桥向南进入萨姆伯山丘，近一个月未抵达金田；成员与遗物后来被四个教派分散。",teaser:"一支重要代表团从石桥转向山丘后失去踪迹。",holders:["npc_deseyna_majarra","npc_rhundorth"],revealCondition:{type:"free"},linkedQuestId:"qst_main_pota",linkedHookId:"hook_pota_delegation",_meta:{sourcePages:[6,40,41],confidence:"high",needsReview:!1}},{id:"info_pota_four_keeps",content:"空气、水、土、火教分别以羽风尖塔、河园堡垒、圣石修道院、赤月大厅为地表据点；每处都守着通往提亚-贝希尔对应神殿的通道。",teaser:"四个看似无害的社团占据了四座闹鬼要塞。",holders:["npc_nurvureem_the_dark_lady","npc_thurl_merosska"],revealCondition:{type:"free"},linkedQuestId:"qst_main_pota",linkedHookId:"hook_pota_keeps",_meta:{sourcePages:[6,40,46,52,59,69,180],confidence:"high",needsReview:!1}},{id:"info_pota_prophet_retreat",content:"四座神殿可按任意顺序进攻；首位先知败亡后，其余三位离开神殿，一位退守费恩 F21，另两位分别退入元素节点。",teaser:"神殿失守会迫使其余先知改变防线。",holders:[],revealCondition:{type:"free"},linkedQuestId:"qst_main_pota",linkedHookId:"hook_pota_fane",_meta:{sourcePages:[74,115],confidence:"high",needsReview:!1}},{id:"info_pota_portal_rites",content:"空气门须投入风标，水门须投入水溺，土门须用铁牙击打巨石，火门须投入焰袭；亲王仍在物质界时会被强制放逐。",teaser:"每座门户的关闭动作都与其先知武器直接对应。",holders:[],revealCondition:{type:"free"},linkedQuestId:"qst_main_pota",linkedHookId:"hook_pota_portals",_meta:{sourcePages:[127,134,140,145],confidence:"high",needsReview:!1}}],s=[{id:"enc_pota_reprise_tremor",name:"邪教报复：震动与掘地虫",sceneId:"scn_12b",prelocked:!1,enemies:[{ref:"Ankheg|PotA",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[44],confidence:"high",needsReview:!1,extractorNotes:"四种报复方案之一；不与其他方案合并。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_reprise_air",name:"邪教报复：空中骑士",sceneId:"scn_12b",prelocked:!1,enemies:[{ref:"羽风骑士|PotA",count:1},{ref:"啸怨新晋者|PotA",count:2},{ref:"Giant Vulture|PotA",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[44],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_reprise_water",name:"邪教报复：掠夺者伏击",sceneId:"scn_12b",prelocked:!1,enemies:[{ref:"破碎波涛祭司|PotA",count:1},{ref:"破碎波涛掠夺者|PotA",count:2},{ref:"Bandit|PotA",count:5}],battlefield:{family:"wilderness"},_meta:{sourcePages:[45],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_reprise_fire",name:"邪教报复：烈火尖牙",sceneId:"scn_12b",prelocked:!1,enemies:[{ref:"Hell Hound|PotA",count:3}],battlefield:{family:"wilderness"},_meta:{sourcePages:[45],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_146",name:"马厩层遭遇",sceneId:"scn_146",prelocked:!1,enemies:[{ref:"骏鹰",count:4},{ref:"Giant Vulture|PotA",count:2},{ref:"羽风骑士|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[46],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_148",name:"前厅遭遇",sceneId:"scn_148",prelocked:!1,enemies:[{ref:"羽风骑士|PotA",count:1},{ref:"啸怨新晋者|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[47],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_150",name:"厨房遭遇",sceneId:"scn_150",prelocked:!1,enemies:[{ref:"啸怨新晋者|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_152",name:"日光室遭遇",sceneId:"scn_152",prelocked:!1,enemies:[{ref:"啸怨新晋者|PotA",count:3},{ref:"飓风|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_154",name:"大厅遭遇",sceneId:"scn_154",prelocked:!1,enemies:[{ref:"羽风骑士|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"大厅初始有两名羽风骑士，自动提取单数已纠正。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_15c",name:"尖塔遭遇",sceneId:"scn_15c",prelocked:!1,enemies:[{ref:"Feathergale Knight|PotA",count:2},{ref:"Giant Vulture|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"原文所有格复数表明两只巨鹫，自动提取单数已纠正。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"两名骑士各有一只巨鹫；每小时一组巡空、另一组巡塔。瑟尔只在队伍首次抵达尖塔时位于此处，另以条件遭遇表示。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_s11_thurl_first_arrival",name:"S11 首次抵达：瑟尔·梅罗斯卡",sceneId:"scn_15c",prelocked:!1,enemies:[{ref:"Thurl Merosska|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"只在角色首次抵达羽风尖塔时与固定守卫一同在场；瑟尔通常先以团长身份接待，只有关系破裂才加入战斗。"},_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"把具名首领的首次到场条件与常驻巡逻队分开。"},encounterPolicy:{engagement:"contact"}},{id:"enc_17d",name:"死岩遭遇",sceneId:"scn_17d",prelocked:!1,enemies:[{ref:"Blood Hawk|PotA",count:6}],battlefield:{family:"dungeon"},_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_dead_rocks_provoked_vulture",name:"死岩条件遭遇：被激怒的巨鹫",sceneId:"scn_17d",prelocked:!1,enemies:[{ref:"Giant Vulture|PotA",count:1}],battlefield:{family:"wilderness"},levelScaling:{note:"巨鹫默认只啄食尸体且半小时后飞走；只有被玩家激怒时才与六只主动攻击的血鹰构成额外敌人。"},_meta:{sourcePages:[51],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_17e",name:"刀尖谷遭遇",sceneId:"scn_17e",prelocked:!1,enemies:[{ref:"飓风|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_180",name:"迷失之河遭遇",sceneId:"scn_180",prelocked:!1,enemies:[{ref:"gnoll pack lord",count:1},{ref:"Gnoll|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_185",name:"迷失之河遭遇",sceneId:"scn_185",prelocked:!1,enemies:[{ref:"Gnoll|PotA",count:4},{ref:"Hyena|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_187",name:"狮鹫巢遭遇",sceneId:"scn_187",prelocked:!1,enemies:[{ref:"Griffon|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"来源明确为一对配偶狮鹫，自动提取单数已纠正。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_18a",name:"蝎尾狮巢穴遭遇",sceneId:"scn_18a",prelocked:!1,enemies:[{ref:"Manticore|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"按实际在场数量从两只修正为一只。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"巢穴中任一时刻只留一只蝎尾狮，另一只外出狩猎；若狩猎事件已有一只死亡，幸存者仍在此。"},encounterPolicy:{engagement:"contact"}},{id:"enc_19f",name:"前门遭遇",sceneId:"scn_19f",prelocked:!1,enemies:[{ref:"Bandit|PotA",count:1},{ref:"Thug|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"去除从相邻房间临时调来的四名护卫，避免与 K2、K3 遭遇重复计数。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"墙上明哨为一名匪徒；霍尔格在 K3 箭孔处指挥并在冲突时参战。接待来客的四名护卫分别来自 K2、K3，不在 K1 重复计数。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1a3",name:"门房遭遇",sceneId:"scn_1a3",prelocked:!1,enemies:[{ref:"bandit",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1a7",name:"门房上层遭遇",sceneId:"scn_1a7",prelocked:!1,enemies:[{ref:"thug",count:1},{ref:"bandit",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1aa",name:"城堡庭院遭遇",sceneId:"scn_1aa",prelocked:!1,enemies:[{ref:"Bandit|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[54,55],confidence:"high",needsReview:!1,extractorNotes:"固定哨兵与 1d3/1d4 随机庭院居民分离。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"四名匪徒是从 K8 编制调到外墙的固定哨兵；庭院随机出现的平民、匪徒、掠夺者或巨鼠按原书随机表另行掷定，不并入固定敌群。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1b5",name:"兵营遭遇",sceneId:"scn_1b5",prelocked:!1,enemies:[{ref:"Bandit|PotA",count:8},{ref:"破碎波涛掠夺者|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"按来源的实际房间在场人数校正，未把外墙和 K16 值勤者重复放进兵营。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"完整编制为十二名匪徒与四名掠夺者；常态下四名匪徒在外墙、两名掠夺者在 K16，因此本室实际留守八名与两名。夜间至少两名匪徒清醒，其余首轮熟睡。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1b8",name:"水塔遭遇",sceneId:"scn_1b8",prelocked:!1,enemies:[{ref:"破碎波涛掠夺者|PotA",count:3},{ref:"测深者|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1c2",name:"停泊的平底船遭遇",sceneId:"scn_1c2",prelocked:!1,enemies:[{ref:"Shoalar Quanderil|PotA",count:1},{ref:"Thug|PotA",count:1},{ref:"Bandit|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"显式补回具名船长，并与修拉已死时的替补船长分支分开。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"仅在修拉尚未于沃姆福德被击败时使用；他可能佯装友善、示警或直接攻击，战况不利会跳河逃走。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_k12_replacement_captain",name:"K12 分支：修拉已死后的替补船长",sceneId:"scn_1c2",prelocked:!1,enemies:[{ref:"Bandit Captain|PotA",count:1},{ref:"Bandit|PotA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"仅当修拉已在沃姆福德被击败时使用；修拉与其半身人仆人均不在场。"},_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"与原始船员分支互斥；两名普通匪徒仍是船员。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1c9",name:"北塔遭遇",sceneId:"scn_1c9",prelocked:!1,enemies:[{ref:"Bugbear|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1cb",name:"圣堂遭遇",sceneId:"scn_1cb",prelocked:!1,enemies:[{ref:"破碎波涛祭司|PotA",count:1},{ref:"破碎波涛掠夺者|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1cd",name:"大厅遭遇",sceneId:"scn_1cd",prelocked:!1,enemies:[{ref:"wereboar",count:1},{ref:"测深者|PotA",count:1},{ref:"破碎波涛掠夺者|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[57],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_1de",name:"守卫室遭遇",sceneId:"scn_1de",prelocked:!1,enemies:[{ref:"Crushing Wave Reaver|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"按来源的房间实际在场人数校正。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"完整编制六名；任一时刻两名在 K16 值勤，本室留守四名。夜间至少一名保持清醒。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1e0",name:"领主的房间遭遇",sceneId:"scn_1e0",prelocked:!1,enemies:[{ref:"Wereboar|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"保留领主卧房的时间条件，不将其视作全天常驻。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"只在乔利弗·格里姆乔清晨返回后睡眠的数小时内使用；白天与晚间通常在 K16，深夜外出狩猎。"},encounterPolicy:{engagement:"contact"}},{id:"enc_1e5",name:"秘密登陆遭遇",sceneId:"scn_1e5",prelocked:!1,enemies:[{ref:"Ghoul|PotA",count:6}],battlefield:{family:"dungeon"},_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_m2_monks",name:"M2 分支：白昼门卫",sceneId:"scn_1fc",prelocked:!1,enemies:[{ref:"圣石僧|PotA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"白昼初访时使用；夜间无人。"},_meta:{sourcePages:[61],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_m2_minotaurs",name:"M2 分支：返程替补门卫",sceneId:"scn_1fc",prelocked:!1,enemies:[{ref:"Minotaur|PotA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"队伍攻击修道院后离开、再返回时替换原门卫。"},_meta:{sourcePages:[61],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_200",name:"南宿舍遭遇",sceneId:"scn_200",prelocked:!1,enemies:[{ref:"Sacred Stone Monk|PotA",count:8}],battlefield:{family:"dungeon"},_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"从总编制十名校正为夜间实际在场八名。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"仅夜间使用：六名睡眠、两名清醒；另两名在 M7 工作。白天本室为空。睡眠者在战斗首轮醒来并起身。"},encounterPolicy:{engagement:"contact"}},{id:"enc_202",name:"客房遭遇",sceneId:"scn_202",prelocked:!1,enemies:[{ref:"黑土祭司|PotA",count:1},{ref:"黑土守卫|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_205",name:"西宿舍遭遇",sceneId:"scn_205",prelocked:!1,enemies:[{ref:"Duergar|PotA",count:6}],battlefield:{family:"dungeon"},_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"拆开昼夜互斥住民，避免十个生物被错误合并为同时在场。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"白天分支：六名灰矮人在此休息，三醒三睡；四名僧侣分别在 M15 与 M7。夜间改用僧侣分支，灰矮人外出巡逻和进入矿井。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_m5_night_monks",name:"M5 夜间分支：返回宿舍的僧侣",sceneId:"scn_205",prelocked:!1,enemies:[{ref:"Sacred Stone Monk|PotA",count:4}],battlefield:{family:"dungeon"},levelScaling:{note:"仅夜间使用；四名僧侣回到宿舍休息，六名灰矮人则在修道院外围巡逻并进入矿井。"},_meta:{sourcePages:[62],confidence:"high",needsReview:!1,extractorNotes:"与白天灰矮人分支互斥。"},encounterPolicy:{engagement:"contact"}},{id:"enc_207",name:"餐厅遭遇",sceneId:"scn_207",prelocked:!1,enemies:[{ref:"Sacred Stone Monk|PotA",count:12},{ref:"Hellenrae|PotA",count:1},{ref:"Black Earth Priest|PotA",count:1},{ref:"Black Earth Guard|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"补回原文明示在席但自动抽取遗漏的海伦蕾，并保留时间条件。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"只在黎明或黄昏的半小时集体用餐期间使用；M2 两名门卫、M5 灰矮人与 M18 欧罗格不在席。"},encounterPolicy:{engagement:"contact"}},{id:"enc_209",name:"厨房遭遇",sceneId:"scn_209",prelocked:!1,enemies:[{ref:"圣石僧|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_20d",name:"石制神龛遭遇",sceneId:"scn_20d",prelocked:!1,enemies:[{ref:"黑土祭司|PotA",count:1},{ref:"黑土守卫|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[63],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_213",name:"抄写室遭遇",sceneId:"scn_213",prelocked:!1,enemies:[{ref:"圣石僧|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_21f",name:"蒸馏室遭遇",sceneId:"scn_21f",prelocked:!1,enemies:[{ref:"圣石僧|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_225",name:"道场遭遇",sceneId:"scn_225",prelocked:!1,enemies:[{ref:"Hellenrae|PotA",count:1},{ref:"Sacred Stone Monk|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"补回自动抽取遗漏的海伦蕾，并保留训练/单挑而非见面即死斗的语义。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"白天海伦蕾与四名僧侣在此修炼；来源另说明其中两名僧侣只有正常生命值一半。她会把疑似新兵叫出单挑，多人介入后才转为致命战斗。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_m18_original",name:"M18 分支：尤尔斯的矿井守卫",sceneId:"scn_22f",prelocked:!1,enemies:[{ref:"Orog|PotA",count:3},{ref:"Ogre|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[67],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_m18_replacements",name:"M18 分支：灰矮人替补",sceneId:"scn_22f",prelocked:!1,enemies:[{ref:"Duergar|PotA",count:6}],battlefield:{family:"dungeon"},levelScaling:{note:"原守卫死亡而海伦蕾仍存活，或尤尔斯在矿井随机遭遇中死亡后，1d3日内使用。"},_meta:{sourcePages:[67],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_237",name:"闹鬼的地穴遭遇",sceneId:"scn_237",prelocked:!1,enemies:[{ref:"Zombie|PotA",count:6}],battlefield:{family:"dungeon"},_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_23c",name:"渴望石之厅遭遇",sceneId:"scn_23c",prelocked:!1,enemies:[{ref:"umber hulk",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[68],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_27a",name:"柳条巨人遭遇",sceneId:"scn_27a",prelocked:!1,enemies:[{ref:"火元素",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_27c",name:"狗舍遭遇",sceneId:"scn_27c",prelocked:!1,enemies:[{ref:"Hell Hound|PotA",count:2},{ref:"永恒火焰守护者|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_27e",name:"脚手架遭遇",sceneId:"scn_27e",prelocked:!1,enemies:[{ref:"永恒火焰守护者|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_27f",name:"上层入口室遭遇",sceneId:"scn_27f",prelocked:!1,enemies:[{ref:"Eternal Flame Guardian|PotA",count:2},{ref:"Azer|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[72],confidence:"high",needsReview:!1,extractorNotes:"阿泽是凡尼弗与埃利扎之间的使者，并与两名守卫一同诱敌坠入 H6，按来源列入条件敌群。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"仅当两名守卫尚未在 H2 加入战斗时使用；战斗超过三轮会惊醒 H7，并让 H8 有时间设伏。"},encounterPolicy:{engagement:"contact"}},{id:"enc_287",name:"邪教徒营房遭遇",sceneId:"scn_287",prelocked:!1,enemies:[{ref:"永恒火焰祭司|PotA",count:1},{ref:"永恒火焰守护者|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_28f",name:"阁楼上的蝙蝠遭遇",sceneId:"scn_28f",prelocked:!1,enemies:[{ref:"Giant Bat|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_retaliation_air_orb",name:"鲁莽仇恨：空气毁灭法球队",sceneId:"scn_2a0",prelocked:!1,enemies:[{ref:"啸怨祭司|PotA",count:1},{ref:"飓风|PotA",count:1},{ref:"啸怨新晋者|PotA",count:8}],battlefield:{family:"wilderness"},_meta:{sourcePages:[76],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_retaliation_earth_orb",name:"鲁莽仇恨：大地毁灭法球队",sceneId:"scn_2a0",prelocked:!1,enemies:[{ref:"黑土祭司|PotA",count:1},{ref:"黑土守卫|PotA",count:2},{ref:"圣石僧|PotA",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[76],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_retaliation_fire_orb",name:"鲁莽仇恨：火焰毁灭法球队",sceneId:"scn_2a0",prelocked:!1,enemies:[{ref:"永恒火焰祭司|PotA",count:1},{ref:"永恒火焰守护者|PotA",count:3},{ref:"怒火者|PotA",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[76],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_retaliation_water_orb",name:"鲁莽仇恨：流水毁灭法球队",sceneId:"scn_2a0",prelocked:!1,enemies:[{ref:"破碎波涛祭司|PotA",count:1},{ref:"破碎波涛掠夺者|PotA",count:6}],battlefield:{family:"wilderness"},_meta:{sourcePages:[76],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_race_air",name:"毁灭赛跑：空气教警戒队",sceneId:"scn_2a0",prelocked:!1,enemies:[{ref:"羽风骑士|PotA",count:2},{ref:"Hippogriff|PotA",count:2},{ref:"空织匠|PotA",count:1},{ref:"飓风|PotA",count:1},{ref:"Bugbear|PotA",count:5}],battlefield:{family:"wilderness"},_meta:{sourcePages:[77],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_race_water",name:"毁灭赛跑：水教警戒队",sceneId:"scn_2a0",prelocked:!1,enemies:[{ref:"暗潮骑士|PotA",count:1},{ref:"Giant Crocodile|PotA",count:1},{ref:"测深者|PotA",count:1},{ref:"破碎波涛祭司|PotA",count:1},{ref:"Bandit|PotA",count:6}],battlefield:{family:"wilderness"},_meta:{sourcePages:[77],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_race_earth",name:"毁灭赛跑：土教警戒队",sceneId:"scn_2a0",prelocked:!1,enemies:[{ref:"穴居鲨鱼|PotA",count:1},{ref:"Bulette|PotA",count:1},{ref:"黑土守卫|PotA",count:2}],battlefield:{family:"wilderness"},_meta:{sourcePages:[77],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_race_fire",name:"毁灭赛跑：火教警戒队",sceneId:"scn_2a0",prelocked:!1,enemies:[{ref:"永恒火焰守护者|PotA",count:3},{ref:"Minotaur|PotA",count:2},{ref:"Hell Hound|PotA",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[77],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_2b3",name:"宫殿区入口遭遇",sceneId:"scn_2b3",prelocked:!1,enemies:[{ref:"Kenku|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"尖叫来自四只天狗，自动提取单数已纠正。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_2b5",name:"门房遭遇",sceneId:"scn_2b5",prelocked:!1,enemies:[{ref:"kenku",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2b9",name:"机械室遭遇",sceneId:"scn_2b9",prelocked:!1,enemies:[{ref:"啸怨祭司|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"五名平民在转动石轮，是被监管劳工，不列敌人。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_2bd",name:"缪斯广场遭遇",sceneId:"scn_2bd",prelocked:!1,enemies:[{ref:"犁风者|PotA",count:1},{ref:"啸怨新晋者|PotA",count:5}],battlefield:{family:"dungeon"},_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"风吟者为犁风者与五名新晋者；和平接近可试演入伙，只有冲突时进入战斗。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_2c2",name:"泰亚-贝希尔商店遭遇",sceneId:"scn_2c2",prelocked:!1,enemies:[{ref:"cloaker",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2c5",name:"维加丹广场遭遇",sceneId:"scn_2c5",prelocked:!1,enemies:[{ref:"kenku",count:7}],battlefield:{family:"dungeon"},_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2c7",name:"莫拉丁广场遭遇",sceneId:"scn_2c7",prelocked:!1,enemies:[{ref:"啸怨新晋者|PotA",count:2},{ref:"飓风|PotA",count:1},{ref:"空织匠|PotA",count:1},{ref:"kenku",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2cc",name:"废弃别墅遭遇",sceneId:"scn_2cc",prelocked:!1,enemies:[{ref:"umber hulk",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2cf",name:"墓穴遭遇",sceneId:"scn_2cf",prelocked:!1,enemies:[{ref:"Ghoul|PotA",count:7}],battlefield:{family:"dungeon"},_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2d3",name:"宫殿广场遭遇",sceneId:"scn_2d3",prelocked:!1,enemies:[{ref:"空织匠|PotA",count:1},{ref:"wyvern",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2d5",name:"护城河遭遇",sceneId:"scn_2d5",prelocked:!1,enemies:[{ref:"石魔像",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2d9",name:"莫拉丁神殿遭遇",sceneId:"scn_2d9",prelocked:!1,enemies:[{ref:"Kenku|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"三只天狗折磨五名被绑平民；只列天狗。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_2de",name:"维加丹大厅遭遇",sceneId:"scn_2de",prelocked:!1,enemies:[{ref:"啸怨新晋者|PotA",count:5},{ref:"飓风|PotA",count:1},{ref:"空织匠|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_2f1",name:"大厅遭遇",sceneId:"scn_2f1",prelocked:!1,enemies:[{ref:"飓风|PotA",count:1},{ref:"空织匠|PotA",count:1},{ref:"啸怨新晋者|PotA",count:5}],battlefield:{family:"dungeon"},_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_a19_aerisi",name:"A19 分支：阿莉希的宫廷",sceneId:"scn_2f7",prelocked:!1,enemies:[{ref:"阿莉希·卡罗娜斯|PotA",count:1},{ref:"Invisible Stalker|PotA",count:1},{ref:"犁风者|PotA",count:1},{ref:"啸怨新晋者|PotA",count:10}],battlefield:{family:"dungeon"},levelScaling:{note:"只在空气神殿为队伍首先探索的神殿时运行；犁风者仅在从 A4 逃脱后在场，十名新晋者处于中毒状态。"},_meta:{sourcePages:[84],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_a19_vrock",name:"A19 分支：空置神殿守卫",sceneId:"scn_2f7",prelocked:!1,enemies:[{ref:"Vrock|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"阿莉希不在时使用；药倒的新晋者只自卫，不预设加入弗洛魔。"},_meta:{sourcePages:[84],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_30e",name:"湖岸登陆点遭遇",sceneId:"scn_30e",prelocked:!1,enemies:[{ref:"破碎波涛掠夺者|PotA",count:4},{ref:"暗潮骑士|PotA",count:1},{ref:"测深者|PotA",count:1},{ref:"hunter shark",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_319",name:"低语湖遭遇",sceneId:"scn_319",prelocked:!1,enemies:[{ref:"giant octopus",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_31b",name:"淹没室遭遇",sceneId:"scn_31b",prelocked:!1,enemies:[{ref:"Ghoul|PotA",count:12}],battlefield:{family:"dungeon"},_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"淹没室有十二只水生食尸鬼，自动提取单数已纠正。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_321",name:"掠夺者营房遭遇",sceneId:"scn_321",prelocked:!1,enemies:[{ref:"破碎波涛掠夺者|PotA",count:5},{ref:"破碎波涛祭司|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_325",name:"北守卫哨遭遇",sceneId:"scn_325",prelocked:!1,enemies:[{ref:"独眼战栗|PotA",count:1},{ref:"暗潮骑士|PotA",count:1},{ref:"破碎波涛掠夺者|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_32a",name:"石像鬼喷泉遭遇",sceneId:"scn_32a",prelocked:!1,enemies:[{ref:"Nothic|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_331",name:"巨魔洞穴遭遇",sceneId:"scn_331",prelocked:!1,enemies:[{ref:"Troll|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[88],confidence:"high",needsReview:!1,extractorNotes:"巨魔洞穴固定三只水生巨魔。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_333",name:"黑爪巢穴遭遇",sceneId:"scn_333",prelocked:!1,enemies:[{ref:"Lizardfolk|PotA",count:7},{ref:"Tornscale|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[89],confidence:"high",needsReview:!1,extractorNotes:"把具名且有独立数据的部落首领从八名总数中拆出。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"八名黑颚蜥蜴人中包括首领托恩斯凯尔；损失至少两名后，幸存者会派一人向 C14 的图露娜求援。"},encounterPolicy:{engagement:"contact"}},{id:"enc_335",name:"巫婆巢穴遭遇",sceneId:"scn_335",prelocked:!1,enemies:[{ref:"Sea Hag|PotA",count:1},{ref:"Ogre|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_33a",name:"龙桥遭遇",sceneId:"scn_33a",prelocked:!1,enemies:[{ref:"Troll|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_33c",name:"雷锤酿酒厂遭遇",sceneId:"scn_33c",prelocked:!1,enemies:[{ref:"Water Weird|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_33e",name:"莫比奥斯的工作室遭遇",sceneId:"scn_33e",prelocked:!1,enemies:[{ref:"独眼战栗|PotA",count:1},{ref:"破碎波涛掠夺者|PotA",count:6}],battlefield:{family:"dungeon"},_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_344",name:"西守卫哨遭遇",sceneId:"scn_344",prelocked:!1,enemies:[{ref:"Bugbear|PotA",count:5}],battlefield:{family:"dungeon"},_meta:{sourcePages:[91],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_348",name:"洞穴湖岸遭遇",sceneId:"scn_348",prelocked:!1,enemies:[{ref:"Giant Octopus|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"保留跨场景复用与触发条件。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"只有修船等持续活动才会把 C3 的巨型章鱼吸引上岸；这是同一只章鱼的跨场景条件出现，不是第二只。"},encounterPolicy:{engagement:"contact"}},{id:"enc_351",name:"市场大厅遭遇",sceneId:"scn_351",prelocked:!1,enemies:[{ref:"Fathomer|PotA",count:1},{ref:"Cultist|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"固定分拣队、铜锣增援与可选房间增援分离。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"只在首次到访时固定在场；房内铜锣可召来 C21 的青铜烟，第三轮抵达。其他来源房间增援按原书列表由主持人选取，不并入固定敌群。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_c22_bronzefume_reinforcement",name:"C22 铜锣增援：青铜烟",sceneId:"scn_351",prelocked:!1,enemies:[{ref:"Bronzefume|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"仅当教徒成功敲响铜锣且青铜烟仍在 C21 时使用；它在铜锣响起后的第三轮从码头水面出现。"},_meta:{sourcePages:[92],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_356",name:"船舱遭遇",sceneId:"scn_356",prelocked:!1,enemies:[{ref:"破碎波涛掠夺者|PotA",count:2},{ref:"Cultist|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_35c",name:"元素水神庙遭遇",sceneId:"scn_35c",prelocked:!1,enemies:[{ref:"Lizardfolk|PotA",count:5},{ref:"Gar Shatterkeel|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[93,94],confidence:"high",needsReview:!1,extractorNotes:"第一神殿分支显式补回戈尔；与戈尔已退往费恩时的狂蟾魔分支互斥。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"仅当水神殿是队伍探索的第一座元素神殿时使用；戈尔在北侧祭坛旁，五名黑颚蜥蜴人在南侧。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_c25_hezrou_branch",name:"C25 分支：戈尔退守后的狂蟾魔",sceneId:"scn_35c",prelocked:!1,enemies:[{ref:"Lizardfolk|PotA",count:5},{ref:"Hezrou|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"水神殿不是队伍探索的第一座元素神殿时使用；戈尔已退往费恩，狂蟾魔潜伏在中央深水护城河。"},_meta:{sourcePages:[93,94],confidence:"high",needsReview:!1,extractorNotes:"与戈尔亲自在场的第一神殿分支互斥。"},encounterPolicy:{engagement:"contact"}},{id:"enc_364",name:"牧师区遭遇",sceneId:"scn_364",prelocked:!1,enemies:[{ref:"Crushing Wave Priest|PotA",count:2},{ref:"Cultist|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"常驻教徒与先知偶发休息分开。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"两名祭司与四名教徒以此为常驻住所；戈尔极少在此休息，若当时在场另运行条件遭遇。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_c27_resting_gar",name:"C27 条件遭遇：休息中的戈尔",sceneId:"scn_364",prelocked:!1,enemies:[{ref:"Gar Shatterkeel|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"只在戈尔极少数退到牧师区休息的数小时内使用；其余时间他在 C25，或已按神殿进度退往费恩。"},_meta:{sourcePages:[94],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_366",name:"商队楼梯遭遇",sceneId:"scn_366",prelocked:!1,enemies:[{ref:"mezzoloth",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_373",name:"石像鬼峡谷遭遇",sceneId:"scn_373",prelocked:!1,enemies:[{ref:"Gargoyle|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_37f",name:"门厅遭遇",sceneId:"scn_37f",prelocked:!1,enemies:[{ref:"Hobgoblin|PotA",count:4},{ref:"穴居鲨鱼|PotA",count:1},{ref:"鲨蜥",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_384",name:"东守卫室遭遇",sceneId:"scn_384",prelocked:!1,enemies:[{ref:"Duergar|PotA",count:5}],battlefield:{family:"dungeon"},_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_386",name:"亚尔沙的洞穴遭遇",sceneId:"scn_386",prelocked:!1,enemies:[{ref:"融石者|PotA",count:1},{ref:"黑土守卫|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_389",name:"门卫宿舍遭遇",sceneId:"scn_389",prelocked:!1,enemies:[{ref:"穴居鲨鱼|PotA",count:1},{ref:"黑土守卫|PotA",count:1},{ref:"Cultist|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_38c",name:"泥巫师实验室遭遇",sceneId:"scn_38c",prelocked:!1,enemies:[{ref:"石魔像",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_392",name:"破碎大厅遭遇",sceneId:"scn_392",prelocked:!1,enemies:[{ref:"鲨蜥",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_396",name:"长峡谷遭遇",sceneId:"scn_396",prelocked:!1,enemies:[{ref:"swarm of bats",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[99],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_399",name:"布鲁格-诺布的巢穴遭遇",sceneId:"scn_399",prelocked:!1,enemies:[{ref:"ettin",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[99],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_39f",name:"拷问室遭遇",sceneId:"scn_39f",prelocked:!1,enemies:[{ref:"融石者|PotA",count:1},{ref:"Cultist|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"Orna、Droth、Wulgreda 与 Gervor 均是囚犯或潜在合作者，不列敌群。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_3a5",name:"石锻造场遭遇",sceneId:"scn_3a5",prelocked:!1,enemies:[{ref:"Duergar|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"将默认敌对助手与中立土巨灵拆开，避免强制开战。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"两名灰矮人是黑土教锻造助手；土巨灵 Xharva Deem 默认袖手旁观，只有受攻击、锻造场被破坏或工具与加工物被拿走时才运行条件遭遇。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_b15_provoked_dao",name:"B15 条件遭遇：被激怒的土巨灵",sceneId:"scn_3a5",prelocked:!1,enemies:[{ref:"Dao|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"只有玩家攻击 Xharva Deem、破坏锻造场，或试图取走她的工具与加工物时使用；她会在因财物介入前先严厉警告。"},_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"土巨灵不保护灰矮人且不主动替教派作战，故从默认遭遇拆出。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_b16_ogres",name:"B16 分支：食人魔守备队",sceneId:"scn_3aa",prelocked:!1,enemies:[{ref:"Ogre|PotA",count:5}],battlefield:{family:"dungeon"},_meta:{sourcePages:[100],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_b16_myrmidon",name:"B16 分支：土元素替补",sceneId:"scn_3aa",prelocked:!1,enemies:[{ref:"Earth Elemental Myrmidon|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"五名食人魔被击败后 1d4 日，马洛斯才派它替补。"},_meta:{sourcePages:[100,101],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_3b2",name:"营房遭遇",sceneId:"scn_3b2",prelocked:!1,enemies:[{ref:"黑土守卫|PotA",count:4},{ref:"黑土祭司|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_3b6",name:"餐厅遭遇",sceneId:"scn_3b6",prelocked:!1,enemies:[{ref:"黑土守卫|PotA",count:2},{ref:"Cultist|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[101],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_3ba",name:"尖叫雕像遭遇",sceneId:"scn_3ba",prelocked:!1,enemies:[{ref:"shadow demon",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_b21_first_temple_marlos",name:"B21 第一神殿分支：马洛斯",sceneId:"scn_3ba",prelocked:!1,enemies:[{ref:"Marlos Urnrayle|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"只有黑土神殿是队伍探索的第一座元素神殿时使用；阴影恶魔始终在附近，马洛斯则因预见队伍抵达而在此迎候。"},_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"把第一神殿条件下的先知到场从常驻阴影恶魔遭遇中拆出。"},encounterPolicy:{engagement:"contact"}},{id:"enc_3c3",name:"流血石神殿遭遇",sceneId:"scn_3c3",prelocked:!1,enemies:[{ref:"黑土祭司|PotA",count:1},{ref:"Cultist|PotA",count:4},{ref:"Black Pudding|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"Rukh 是被铐住准备献祭的地底侏儒；补回原文明示但未带 creature 标签的四名邪教徒。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_3d9",name:"柱廊大厅遭遇",sceneId:"scn_3d9",prelocked:!1,enemies:[{ref:"爆刃|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_3e6",name:"破碎的屏障遭遇",sceneId:"scn_3e6",prelocked:!1,enemies:[{ref:"Ogre|PotA",count:2},{ref:"Half-Ogre (Ogrillon)|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_3f2",name:"兵营遭遇",sceneId:"scn_3f2",prelocked:!1,enemies:[{ref:"永恒火焰守护者|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_3f6",name:"牧师的房间遭遇",sceneId:"scn_3f6",prelocked:!1,enemies:[{ref:"永恒火焰祭司|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_3fc",name:"大地精巢穴遭遇",sceneId:"scn_3fc",prelocked:!1,enemies:[{ref:"Hobgoblin|PotA",count:6},{ref:"hobgoblin captain",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_402",name:"牢房区遭遇",sceneId:"scn_402",prelocked:!1,enemies:[{ref:"永恒火焰守护者|PotA",count:2},{ref:"怒火者|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"四间带家具牢房各住一名奴隶监工；火蜥蜴和火矮人是可释放、会因玩家选择改变阵营的囚犯，不预设为敌。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_40d",name:"铸造厂遭遇",sceneId:"scn_40d",prelocked:!1,enemies:[{ref:"Efreeti|PotA",count:1},{ref:"爆刃|PotA",count:1},{ref:"永恒火焰守护者|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"火蜥蜴与三名火矮人是被奴役的锻工，骚乱后会攻击火巨灵，不预设为玩家敌人。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_41b",name:"犬舍遭遇",sceneId:"scn_41b",prelocked:!1,enemies:[{ref:"Hell Hound|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_41f",name:"展示大厅遭遇",sceneId:"scn_41f",prelocked:!1,enemies:[{ref:"永恒火焰守护者|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_423",name:"兵营遭遇",sceneId:"scn_423",prelocked:!1,enemies:[{ref:"永恒火焰守护者|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_427",name:"伊格纳提亚的居所遭遇",sceneId:"scn_427",prelocked:!1,enemies:[{ref:"怒火者|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"Orgaal 是无武装且只剩4生命值的破碎波涛俘虏，不列敌人。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_42c",name:"恳求者之室遭遇",sceneId:"scn_42c",prelocked:!1,enemies:[{ref:"Cultist|PotA",count:8},{ref:"Cult Fanatic|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_430",name:"火神庙遭遇",sceneId:"scn_430",prelocked:!1,enemies:[{ref:"Fire Elemental|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_43b",name:"兵营遭遇",sceneId:"scn_43b",prelocked:!1,enemies:[{ref:"Hobgoblin|PotA",count:4},{ref:"hobgoblin captain",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_43e",name:"莉齐的住处遭遇",sceneId:"scn_43e",prelocked:!1,enemies:[{ref:"Magmin|PotA",count:4},{ref:'Lyzandra "Lyzzie" Calderos|PotA',count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"以具名施法者数据替代泛化法师，并保留先玩闹、后示警的触发顺序。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"四只熔岩怪先以恶作剧方式点燃来客；只有它们受伤时才大声惊动在挂毯后休息的莉齐，届时她加入冲突。"},encounterPolicy:{engagement:"contact"}},{id:"enc_442",name:"奇美拉巢穴遭遇",sceneId:"scn_442",prelocked:!1,enemies:[{ref:"Chimera|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"保留非强制战斗条件。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"奇美拉先威吓嘲弄但允许来客通过；只有玩家攻击它或试图掠夺其财宝时才进入战斗。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_wrath_burning_hills",name:"元素之怒：燃烧的山丘",sceneId:"scn_44d",prelocked:!1,enemies:[{ref:"Fire Elemental|PotA",count:3},{ref:"Smoke Mephit|PotA",count:5}],battlefield:{family:"wilderness"},_meta:{sourcePages:[112],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_wrath_tortured_earth",name:"元素之怒：受折磨的大地",sceneId:"scn_44d",prelocked:!1,enemies:[{ref:"Young Purple Worm|PotA",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[113],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_wrath_harvest_inn",name:"元素之怒：丰收旅店占领者",sceneId:"scn_44d",prelocked:!1,enemies:[{ref:"黑土祭司|PotA",count:1},{ref:"黑土守卫|PotA",count:2},{ref:"Hill Giant|PotA",count:1},{ref:"Hobgoblin|PotA",count:6}],battlefield:{family:"wilderness"},_meta:{sourcePages:[113],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_wrath_haayon_outer",name:"元素之怒：海昂外营",sceneId:"scn_44d",prelocked:!1,enemies:[{ref:"破碎波涛掠夺者|PotA",count:5},{ref:"啸怨祭司|PotA",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[114],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_wrath_haayon_inner",name:"元素之怒：惩罚者海昂",sceneId:"scn_44d",prelocked:!1,enemies:[{ref:"Cloud Giant|PotA",count:1},{ref:"羽风骑士|PotA",count:2},{ref:"Cultist|PotA",count:6},{ref:"Hippogriff|PotA",count:2}],battlefield:{family:"wilderness"},levelScaling:{note:"内营在外营开战后的第4轮加入；两只骏鹰位于帐篷后。"},_meta:{sourcePages:[114],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_470",name:"风之监狱遭遇",sceneId:"scn_470",prelocked:!1,enemies:[{ref:"Flying Sword|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_472",name:"鸟妖巢穴遭遇",sceneId:"scn_472",prelocked:!1,enemies:[{ref:"Harpy|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_477",name:"锈蚀怪物坑遭遇",sceneId:"scn_477",prelocked:!1,enemies:[{ref:"rust monster",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_47c",name:"湍急溪流遭遇",sceneId:"scn_47c",prelocked:!1,enemies:[{ref:"water weird",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_480",name:"黑颚王座遭遇",sceneId:"scn_480",prelocked:!1,enemies:[{ref:"Lizard King|PotA",count:1},{ref:"Lizardfolk Shaman|PotA",count:1},{ref:"Lizardfolk|PotA",count:8}],battlefield:{family:"dungeon"},_meta:{sourcePages:[117],confidence:"high",needsReview:!1,extractorNotes:"保留部落首领的政变合作分支。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"德雷克萨虽邪恶好战，但若队伍足以推翻戈尔或能证明已经做到，可说服其倒戈；遭遇不表示必然开战。"},encounterPolicy:{engagement:"contact"}},{id:"enc_488",name:"真菌沼泽遭遇",sceneId:"scn_488",prelocked:!1,enemies:[{ref:"Violet Fungus|PotA",count:3},{ref:"grell",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_490",name:"废弃矿井遭遇",sceneId:"scn_490",prelocked:!1,enemies:[{ref:"恶灵",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_493",name:"黑水晶大厅遭遇",sceneId:"scn_493",prelocked:!1,enemies:[{ref:"Hill Giant|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_498",name:"泽格达尔的巢穴遭遇",sceneId:"scn_498",prelocked:!1,enemies:[{ref:"Zegdar|PotA",count:1},{ref:"Nothic|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"原文将种族写在粗体标签中，自动提取漏掉具名首领，现已显式补回。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"泽格达尔使用来源中特殊牛头人数据：117 生命、AC 16、火焰免疫与灼热吐息；威克斯是其诺斯怪顾问。"},encounterPolicy:{engagement:"contact"}},{id:"enc_4a1",name:"灰烬角兽巢穴遭遇",sceneId:"scn_4a1",prelocked:!1,enemies:[{ref:"Minotaur|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_4a5",name:"古代魔法遭遇",sceneId:"scn_4a5",prelocked:!1,enemies:[{ref:"Minotaur|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_4b0",name:"战斗大厅遭遇",sceneId:"scn_4b0",prelocked:!1,enemies:[{ref:"air elemental myrmidon",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_f21_air_prophet",name:"F21 分支：空气先知",sceneId:"scn_4b3",prelocked:!1,enemies:[{ref:"阿莉希·卡罗娜斯|PotA",count:1},{ref:"犁风者|PotA",count:1},{ref:"飓风|PotA",count:2},{ref:"啸怨新晋者|PotA",count:3}],battlefield:{family:"dungeon"},levelScaling:{note:"四个先知分支只运行一个；犁风者仅在从空气神殿逃脱后加入。"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_f21_water_prophet",name:"F21 分支：水之先知",sceneId:"scn_4b3",prelocked:!1,enemies:[{ref:"戈尔·碎骨|PotA",count:1},{ref:"Giant Crocodile|PotA",count:1},{ref:"破碎波涛掠夺者|PotA",count:4}],battlefield:{family:"dungeon"},levelScaling:{note:"四个先知分支只运行一个。"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_f21_earth_prophet",name:"F21 分支：大地先知",sceneId:"scn_4b3",prelocked:!1,enemies:[{ref:"马洛斯·恩雷尔|PotA",count:1},{ref:"Gargoyle|PotA",count:2},{ref:"圣石僧|PotA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"四个先知分支只运行一个。"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_f21_fire_prophet",name:"F21 分支：火焰先知",sceneId:"scn_4b3",prelocked:!1,enemies:[{ref:"凡尼弗|PotA",count:1},{ref:"Flameskull|PotA",count:1},{ref:"爆刃|PotA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"四个先知分支只运行一个。"},_meta:{sourcePages:[122],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_4ca",name:"遗忘之井遭遇",sceneId:"scn_4ca",prelocked:!1,enemies:[{ref:"air elemental",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_4d2",name:"斯涅布力定居点遭遇",sceneId:"scn_4d2",prelocked:!1,enemies:[{ref:"Specter|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_4d7",name:"漂浮者遭遇",sceneId:"scn_4d7",prelocked:!1,enemies:[{ref:"Vrock|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"两名新晋者、鸟羽人 Kazra 和卓尔法师 Balix 都是被折磨的俘虏；守卫为一只弗洛魔。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_4ee",name:"风抱者遭遇",sceneId:"scn_4ee",prelocked:!1,enemies:[{ref:"Howling Hatred Priest|PotA",count:1},{ref:"Howling Hatred Initiate|PotA",count:8}],battlefield:{family:"dungeon"},_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"保留不打扰即可绕过的条件。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"九名教徒沉浸在‘拥抱风’冥想中，不会因来客出现而行动；只有玩家打扰他们时才攻击。"},encounterPolicy:{engagement:"contact"}},{id:"enc_4f0",name:"受折磨的洞穴遭遇",sceneId:"scn_4f0",prelocked:!1,enemies:[{ref:"black pudding",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_4f2",name:"牺牲遭遇",sceneId:"scn_4f2",prelocked:!1,enemies:[{ref:"Vrock|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"两只隐形弗洛魔守卫 Nerise 与 Deseyna；两名囚犯不列敌人。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_4f7",name:"皇家守卫遭遇",sceneId:"scn_4f7",prelocked:!1,enemies:[{ref:"啸怨祭司|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[126],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_n19_myrmidons",name:"N19 分支：空气元素秘耳弥冬",sceneId:"scn_4f9",prelocked:!1,enemies:[{ref:"Air Elemental Myrmidon|PotA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"阿莉希已在别处败亡时使用。"},_meta:{sourcePages:[127],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_n19_aerisi",name:"N19 分支：空气先知最后抵抗",sceneId:"scn_4f9",prelocked:!1,enemies:[{ref:"阿莉希·卡罗娜斯|PotA",count:1},{ref:"Air Elemental Myrmidon|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"阿莉希退入节点且并非唯一幸存先知时使用。"},_meta:{sourcePages:[127],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_n19_yan_c_bin",name:"N19 分支：延西冰降临",sceneId:"scn_4f9",prelocked:!1,enemies:[{ref:"阿莉希·卡罗娜斯|PotA",count:1},{ref:"延西冰|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"阿莉希为最后幸存先知时使用。"},_meta:{sourcePages:[127],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_514",name:"网遭遇",sceneId:"scn_514",prelocked:!1,enemies:[{ref:"Giant Crab|PotA",count:7}],battlefield:{family:"dungeon"},_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_51a",name:"神庙入口遭遇",sceneId:"scn_51a",prelocked:!1,enemies:[{ref:"kuo-toa",count:4},{ref:"kuo-toa monitor",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_51e",name:"英古卢布神龛遭遇",sceneId:"scn_51e",prelocked:!1,enemies:[{ref:"kuo-toa archpriest",count:1},{ref:"kuo-toa",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_525",name:"吞噬者英古库鲁布遭遇",sceneId:"scn_525",prelocked:!1,enemies:[{ref:"Aboleth|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[130],confidence:"high",needsReview:!1,extractorNotes:"保留与 P20 分支互斥的跨场景位置。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"只有戈尔尚未在水神殿被击败时，英古卢布才留在 P6；若戈尔已败，它改守 P20 水之门户，不得在两处重复出现。"},encounterPolicy:{engagement:"contact"}},{id:"enc_52a",name:"食人鱼坑遭遇",sceneId:"scn_52a",prelocked:!1,enemies:[{ref:"kuo-toa",count:4},{ref:"kuo-toa whip",count:1},{ref:"Swarm of Quippers|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_52c",name:"倾斜洞穴遭遇",sceneId:"scn_52c",prelocked:!1,enemies:[{ref:"roper",count:1},{ref:"Piercer|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_52f",name:"碎浪前哨站遭遇",sceneId:"scn_52f",prelocked:!1,enemies:[{ref:"Crushing Wave Reaver|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"拆开固定守卫与可能已转移到门户的楚尔魔。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"两名掠夺者固定守在高台；两只楚尔魔仅在未被调往 P20 保护英古卢布时从高台后加入，另用条件遭遇表示。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_p10_chuuls_present",name:"P10 条件遭遇：未被调走的楚尔魔",sceneId:"scn_52f",prelocked:!1,enemies:[{ref:"Chuul|PotA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"只有两只楚尔魔尚未被调到 P20 保护英古卢布时使用；掠夺者投矛后它们才从高台后现身。"},_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"与 P20 的英古卢布门户分支互斥。"},encounterPolicy:{engagement:"contact"}},{id:"enc_533",name:"猎人的巢穴遭遇",sceneId:"scn_533",prelocked:!1,enemies:[{ref:"Giant Octopus|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"保留来源出现概率。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"巨型章鱼大部分时间外出狩猎，每小时只有 10% 几率在巢穴；未掷中时本室无此敌人。"},encounterPolicy:{engagement:"contact"}},{id:"enc_53e",name:"饥饿者遭遇",sceneId:"scn_53e",prelocked:!1,enemies:[{ref:"Ghoul|PotA",count:7},{ref:"Ghast|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_540",name:"痛苦之眼遭遇",sceneId:"scn_540",prelocked:!1,enemies:[{ref:"独眼战栗|PotA",count:1},{ref:"Ice Mephit|PotA",count:7}],battlefield:{family:"dungeon"},_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_54a",name:"暗潮小屋遭遇",sceneId:"scn_54a",prelocked:!1,enemies:[{ref:"Water Weird|PotA",count:2},{ref:"暗潮骑士|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_54c",name:"元素守护者遭遇",sceneId:"scn_54c",prelocked:!1,enemies:[{ref:"water elemental myrmidon",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_p20_aboleth",name:"P20 分支：底栖魔鱼夺取水溺",sceneId:"scn_554",prelocked:!1,enemies:[{ref:"Aboleth|PotA",count:1},{ref:"Chuul|PotA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"只在戈尔此前已败亡时运行。"},_meta:{sourcePages:[134],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_p20_gar",name:"P20 分支：水之先知最后抵抗",sceneId:"scn_554",prelocked:!1,enemies:[{ref:"戈尔·碎骨|PotA",count:1},{ref:"Water Elemental|PotA",count:1},{ref:"Crocodile|PotA",count:3}],battlefield:{family:"dungeon"},levelScaling:{note:"只在戈尔退入节点且另两名元素先知已败亡时运行。"},_meta:{sourcePages:[134],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_p20_olhydra",name:"P20 分支：奥莉德拉降临",sceneId:"scn_554",prelocked:!1,enemies:[{ref:"戈尔·碎骨|PotA",count:1},{ref:"奥莉德拉|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"只在戈尔是最后幸存先知时运行。"},_meta:{sourcePages:[134],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_56a",name:"守卫者大厅遭遇",sceneId:"scn_56a",prelocked:!1,enemies:[{ref:"黑土守卫|PotA",count:2},{ref:"Earth Elemental|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[135],confidence:"high",needsReview:!1,extractorNotes:"两名守卫在场；战斗爆发时两只土元素从地面加入。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_56c",name:"凯尔塔和戈尔克斯遭遇",sceneId:"scn_56c",prelocked:!1,enemies:[{ref:"Stonemelder|PotA",count:1},{ref:"Xorn|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[135,136],confidence:"high",needsReview:!1,extractorNotes:"保留贡品交涉与拒付分支，遭遇记录不表示进入房间即强制战斗。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"可通过缴纳价值 500 gp 的贡品和平通过；若玩家先攻击任一方，两者反击；若拒付，戈尔克斯攻击最富有者而凯尔塔逃向 G6。"},encounterPolicy:{engagement:"contact"}},{id:"enc_571",name:"石绳怪巢穴遭遇",sceneId:"scn_571",prelocked:!1,enemies:[{ref:"roper",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_582",name:"失落皇冠洞穴遭遇",sceneId:"scn_582",prelocked:!1,enemies:[{ref:"Specter|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_588",name:"狭窄的石桥遭遇",sceneId:"scn_588",prelocked:!1,enemies:[{ref:"Galeb Duhr|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_58c",name:"咔嗒咔嗒遭遇",sceneId:"scn_58c",prelocked:!1,enemies:[{ref:"Hook Horror|PotA",count:8}],battlefield:{family:"dungeon"},_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_591",name:"元素泥潭遭遇",sceneId:"scn_591",prelocked:!1,enemies:[{ref:"earth elemental myrmidon",count:1},{ref:"Mud Mephit|PotA",count:6}],battlefield:{family:"dungeon"},_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_g12_stonemelder",name:"G12 分支：泥巫师冥想队",sceneId:"scn_594",prelocked:!1,enemies:[{ref:"黑土守卫|PotA",count:2},{ref:"穴居鲨鱼|PotA",count:1},{ref:"融石者|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"海伦蕾已败亡时使用。"},_meta:{sourcePages:[139],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_g12_hellenrae",name:"G12 分支：海伦蕾冥想队",sceneId:"scn_594",prelocked:!1,enemies:[{ref:"黑土守卫|PotA",count:2},{ref:"穴居鲨鱼|PotA",count:1},{ref:"海伦蕾|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"海伦蕾未败亡时由她替代融石者。"},_meta:{sourcePages:[139],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_596",name:"鲨蜥兽犬舍遭遇",sceneId:"scn_596",prelocked:!1,enemies:[{ref:"穴居鲨鱼|PotA",count:1},{ref:"Bulette|PotA",count:1},{ref:"Rhinoceros|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"保留来源中的位置随机性与幼体替代数据，不把单个 creature 标签误当一只幼体。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"Rorgrin 与坐骑有50%几率在 G13，否则在 G14；三只幼年鲨蜥使用犀牛数据，可能被潜行绕过。"},encounterPolicy:{engagement:"contact"}},{id:"enc_598",name:"罗格林的洞穴遭遇",sceneId:"scn_598",prelocked:!1,enemies:[{ref:"穴居鲨鱼|PotA",count:1},{ref:"鲨蜥",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_59b",name:"奥术铸造厂遭遇",sceneId:"scn_59b",prelocked:!1,enemies:[{ref:"融石者|PotA",count:2},{ref:"Nothic|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[140],confidence:"high",needsReview:!1,extractorNotes:"伦多斯是被迫劳作的失踪代表，警卫数据仅是其无武装数值，不列敌人；三只诺斯怪会伺机逃跑。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_g17_myrmidons",name:"G17 分支：土元素秘耳弥冬",sceneId:"scn_5a3",prelocked:!1,enemies:[{ref:"Earth Elemental Myrmidon|PotA",count:2}],battlefield:{family:"dungeon"},levelScaling:{note:"马洛斯已在别处败亡时使用。"},_meta:{sourcePages:[140],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_g17_marlos",name:"G17 分支：大地先知最后抵抗",sceneId:"scn_5a3",prelocked:!1,enemies:[{ref:"马洛斯·恩雷尔|PotA",count:1},{ref:"黑土守卫|PotA",count:2},{ref:"Gargoyle|PotA",count:4}],battlefield:{family:"dungeon"},levelScaling:{note:"马洛斯退入节点且另两名先知已败亡时使用。"},_meta:{sourcePages:[140],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_g17_ogremoch",name:"G17 分支：欧雷莫克降临",sceneId:"scn_5a3",prelocked:!1,enemies:[{ref:"马洛斯·恩雷尔|PotA",count:1},{ref:"欧雷莫克|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"马洛斯为最后幸存先知时使用。"},_meta:{sourcePages:[140],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_5b9",name:"火山裂缝遭遇",sceneId:"scn_5b9",prelocked:!1,enemies:[{ref:"怒火者|PotA",count:1},{ref:"永恒火焰祭司|PotA",count:1},{ref:"爆刃|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[142],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_5bf",name:"哨兵室遭遇",sceneId:"scn_5bf",prelocked:!1,enemies:[{ref:"爆刃|PotA",count:1},{ref:"fire giant",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[142],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_5ca",name:"熔岩池遭遇",sceneId:"scn_5ca",prelocked:!1,enemies:[{ref:"熔岩岩浆石绳怪|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_5cc",name:"骷髅之室遭遇",sceneId:"scn_5cc",prelocked:!1,enemies:[{ref:"Flameskull|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[143],confidence:"high",needsReview:!1,extractorNotes:"自动提取把复数压成一只；按来源纠正为四只并保留触发条件。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"四个火焰骷髅平时混在普通恒火骷髅中保持静止，只有 W6 的囚犯试图逃跑时才攻击。"},encounterPolicy:{engagement:"contact"}},{id:"enc_5d9",name:"繁殖室遭遇",sceneId:"scn_5d9",prelocked:!1,enemies:[{ref:"salamander",count:4},{ref:"Fire Snake|PotA",count:8}],battlefield:{family:"dungeon"},_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_5de",name:"火神殿遭遇",sceneId:"scn_5de",prelocked:!1,enemies:[{ref:"Eternal Flame Priest|PotA",count:2},{ref:"Razerblast|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"固定教徒与来自旧神殿的条件增援分开表示。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"三名教徒是首次抵达时的固定敌群；若 E13 的火巨灵已经撤到 W9，另运行条件遭遇 enc_pota_w8_retreating_efreeti。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_w8_retreating_efreeti",name:"W8 条件增援：撤退的火巨灵",sceneId:"scn_5de",prelocked:!1,enemies:[{ref:"Efreeti|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"仅当 E13 的火巨灵先前撤退到 W9 时，才与 W8 的三名固定教徒一同参战。"},_meta:{sourcePages:[108,145],confidence:"high",needsReview:!1,extractorNotes:"保留跨章节撤退状态，不臆造火巨灵常驻 W8。"},encounterPolicy:{engagement:"contact"}},{id:"enc_5e1",name:"火巨灵巢穴遭遇",sceneId:"scn_5e1",prelocked:!1,enemies:[{ref:"Efreeti|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[108,145],confidence:"high",needsReview:!1,extractorNotes:"保留跨场景同一实体与撤退前提。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"仅当 E13 的火巨灵从旧神殿撤退后才居于 W9；它能从 W8 被看见并在 W8 冲突时加入，三处描述均指同一实体。"},encounterPolicy:{engagement:"contact"}},{id:"enc_5e7",name:"流动的熔岩遭遇",sceneId:"scn_5e7",prelocked:!1,enemies:[{ref:"Young Red Dragon|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[146],confidence:"high",needsReview:!1,extractorNotes:"保留幼龙可谈判且立场未定的来源语义。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"哈利纳克萨斯正在权衡是否继续协助凡尼弗，默认并非见面即攻击；主持人应依据谈判、既有伤害与火节点状态决定其阵营。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_w12_guardians",name:"W12 分支：火门守卫",sceneId:"scn_5ec",prelocked:!1,enemies:[{ref:"Young Red Dragon|PotA",count:1},{ref:"Fire Elemental Myrmidon|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"凡尼弗已败亡且哈利纳克苏斯仍存活时使用。"},_meta:{sourcePages:[145],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_w12_vanifer",name:"W12 分支：火焰先知最后抵抗",sceneId:"scn_5ec",prelocked:!1,enemies:[{ref:"凡尼弗|PotA",count:1},{ref:"Young Red Dragon|PotA",count:1},{ref:"Fire Elemental|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"凡尼弗退入节点且并非最后幸存先知时使用；火元素 Incinerath 有150生命值，哈利纳克苏斯仅在 W11 存活时加入。"},_meta:{sourcePages:[146],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_w12_imix",name:"W12 分支：伊米西降临",sceneId:"scn_5ec",prelocked:!1,enemies:[{ref:"凡尼弗|PotA",count:1},{ref:"Young Red Dragon|PotA",count:1},{ref:"伊米西|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"凡尼弗为最后幸存先知时使用；Incinerath 转化为伊米西，哈利纳克苏斯仅在 W11 存活时加入。"},_meta:{sourcePages:[146],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_60f",name:"入口洞穴遭遇",sceneId:"scn_60f",prelocked:!1,enemies:[{ref:"Zombie|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[151],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_612",name:"守卫洞穴遭遇",sceneId:"scn_612",prelocked:!1,enemies:[{ref:"Zombie|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[151],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_614",name:"尸体洞穴遭遇",sceneId:"scn_614",prelocked:!1,enemies:[{ref:"Skeleton|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[151],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_616",name:"舞动的死者遭遇",sceneId:"scn_616",prelocked:!1,enemies:[{ref:"Zombie|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_61b",name:"工作室遭遇",sceneId:"scn_61b",prelocked:!1,enemies:[{ref:"Zombie|PotA",count:1},{ref:"Crawling Claw|PotA",count:5},{ref:"Skeleton|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_62d",name:"笼形陷阱遭遇",sceneId:"scn_62d",prelocked:!1,enemies:[{ref:"thug",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[155],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_639",name:"腐尸室遭遇",sceneId:"scn_639",prelocked:!1,enemies:[{ref:"Giant Rat|PotA",count:5}],battlefield:{family:"dungeon"},_meta:{sourcePages:[154],confidence:"high",needsReview:!1,extractorNotes:"保留可无战斗通过的条件。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"五只巨鼠正在取食腐尸；只要玩家保持距离且不惊动，它们会忽略来客，受伤或被激怒才攻击。"},encounterPolicy:{engagement:"contact"}},{id:"enc_647",name:"移动石室遭遇",sceneId:"scn_647",prelocked:!1,enemies:[{ref:"黑土祭司|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[158],confidence:"high",needsReview:!1,extractorNotes:"脚本提取：提及即在场近似，敌意/数量/裸名 ref 待人工核；配置列入逐遭遇来源复核清单；配置列入逐遭遇来源复核清单"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_new_management_spiders",name:"新管理：肯德林木盒中的蜘蛛",sceneId:"scn_65d",prelocked:!1,enemies:[{ref:"Spider|PotA",count:4}],battlefield:{family:"dungeon"},_meta:{sourcePages:[162],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_iceshield_rescue",name:"冰盾兽人：救援马车",sceneId:"scn_668",prelocked:!1,enemies:[{ref:"Orc|PotA",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[164],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_iceshield_siege",name:"冰盾兽人：戴尔蒙牧场围攻",sceneId:"scn_668",prelocked:!1,enemies:[{ref:"Orc|PotA",count:40},{ref:"Orog|PotA",count:1},{ref:"Orc Eye of Gruumsh|PotA",count:1}],battlefield:{family:"wilderness"},levelScaling:{note:"四十名兽人在首轮冲锋两三轮后撤退，黎明发动最终冲锋；牧场守卫与到场精灵是盟军，不列敌人。"},_meta:{sourcePages:[165,166],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_long_road_bandits",name:"漫长道路：首夜土匪袭击",sceneId:"scn_67c",prelocked:!1,enemies:[{ref:"Bandit|PotA",count:16},{ref:"Bandit Captain|PotA",count:1}],battlefield:{family:"wilderness"},_meta:{sourcePages:[166],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_long_road_air",name:"漫长道路：嚎叫仇恨袭击",sceneId:"scn_67c",prelocked:!1,enemies:[{ref:"啸怨新晋者|PotA",count:4},{ref:"Giant Vulture|PotA",count:4}],battlefield:{family:"wilderness"},_meta:{sourcePages:[167],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_nettlebee_elemental",name:"火焰女巫的诅咒：封墓土元素",sceneId:"scn_683",prelocked:!1,enemies:[{ref:"Earth Elemental|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[169],confidence:"high",needsReview:!1,extractorNotes:"威根完成一分钟召唤后命令土元素封闭入口并杀死墓内所有人；还魂鬼与乌瑟加德队伍存在谈判分支，不预设为敌。"},encounterPolicy:{engagement:"contact"}},{id:"enc_6ab",name:"神殿入口遭遇",sceneId:"scn_6ab",prelocked:!1,enemies:[{ref:"Guard|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[173],confidence:"high",needsReview:!1,extractorNotes:"神殿入口固定两名矮人守卫，自动提取单数已纠正。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_6ad",name:"庭院遭遇",sceneId:"scn_6ad",prelocked:!1,enemies:[{ref:"Guard|PotA",count:8},{ref:"Oni|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[173],confidence:"high",needsReview:!1,extractorNotes:"触发 D1 警报时，D2 两人与 D7 六人共八名守卫在庭院伪装婚礼，奥布拉图主持。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_d7_unalerted",name:"D7 分支：仍在挖掘的叛逆矮人",sceneId:"scn_6bf",prelocked:!1,enemies:[{ref:"叛逆的格鲁明克|PotA",count:1},{ref:"Oni|PotA",count:1},{ref:"Guard|PotA",count:8}],battlefield:{family:"dungeon"},levelScaling:{note:"只在格鲁明克未获警报时运行。"},_meta:{sourcePages:[175],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_d7_alerted",name:"D7 分支：格鲁明克的最后抵抗",sceneId:"scn_6bf",prelocked:!1,enemies:[{ref:"叛逆的格鲁明克|PotA",count:1},{ref:"Guard|PotA",count:2},{ref:"Oni|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"庭院发生大战后运行；奥布拉图仅在庭院战斗中幸存时加入。"},_meta:{sourcePages:[175],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_yartar_kraken",name:"雅塔尔黑暗交易：墓穴会面",sceneId:"scn_6c7",prelocked:!1,enemies:[{ref:"格哈德|PotA",count:1},{ref:"Priest|PotA",count:1},{ref:"Veteran|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[178],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_6d8",name:"伦德雷特庄园遭遇",sceneId:"scn_6d8",prelocked:!1,enemies:[{ref:"Nurvureem, The Dark Lady|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[179,180],confidence:"high",needsReview:!1,extractorNotes:"改用具名黑影龙战斗数据，替代仅用于套模板的泛化成年黑龙引用。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"黑暗女士先用卓尔幻象交换情报；只有角色拒绝离开或刻意挑起暴力冲突时，她才以成年黑影龙形态全力攻击。"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_hunting_axe_bridge",name:"狩猎斧大厅：石桥拦截者",sceneId:"scn_6e3",prelocked:!1,enemies:[{ref:"卡维尔·扎尔托巴尔|PotA",count:1},{ref:"Thug|PotA",count:5}],battlefield:{family:"wilderness"},_meta:{sourcePages:[182],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_6f4",name:"枭熊的问候遭遇",sceneId:"scn_6f4",prelocked:!1,enemies:[{ref:"Owlbear|PotA",count:1}],battlefield:{family:"dungeon"},_meta:{sourcePages:[183],confidence:"high",needsReview:!1,extractorNotes:"保留非敌对通过与撤退阈值。；overlay覆写:enemies/levelScaling/_meta"},levelScaling:{note:"枭熊刚进食，不会主动攻击装备精良的旅者；玩家攻击后才反击，降到一半生命时逃跑。"},encounterPolicy:{engagement:"contact"}},{id:"enc_6ff",name:"露天剧场遭遇",sceneId:"scn_6ff",prelocked:!1,enemies:[{ref:"德兰宁·拆盔者|PotA",count:1},{ref:"Shield Guardian|PotA",count:1},{ref:"Veteran|PotA",count:3}],battlefield:{family:"dungeon"},_meta:{sourcePages:[185],confidence:"high",needsReview:!1,extractorNotes:"德兰宁、盾卫与三名矮人老兵在露天剧场伏击；自动提取漏掉具名首领并把老兵数压成1。；overlay覆写:enemies/_meta"},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_x10_golems",name:"X10 假墓的石魔像",sceneId:"scn_708",prelocked:!1,enemies:[{ref:"Stone Golem|PotA",count:2}],battlefield:{family:"dungeon"},_meta:{sourcePages:[186],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}},{id:"enc_pota_x10_drannin",name:"X10 德兰宁夺斧",sceneId:"scn_708",prelocked:!1,enemies:[{ref:"德兰宁·拆盔者|PotA",count:1},{ref:"Shield Guardian|PotA",count:1},{ref:"Veteran|PotA",count:3},{ref:"Doppelganger|PotA",count:1}],battlefield:{family:"dungeon"},levelScaling:{note:"若德兰宁一行已在 X6 被击败则不再运行；假加戈什仍活着时才加入变形怪。"},_meta:{sourcePages:[186],confidence:"high",needsReview:!1},encounterPolicy:{engagement:"contact"}}],i=[{id:"qst_main_pota",title:"毁灭亲王：关闭元素传送门",chapterId:"047",stages:[{id:"stage_pota_red_larch",title:"红松镇的不祥征兆",objectives:[{id:"obj_pota_arrive_red_larch",type:"reach",targetRef:"scn_04b",description:"抵达红松镇，从镇民、派系联系人或个人行动号召中取得调查线索。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_04b"}},{id:"obj_pota_learn_delegation",type:"reach",targetRef:"scn_101",description:"确认米拉巴代表团自石桥转入萨姆伯山丘后失踪。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_101"}}]},{id:"stage_pota_delegation",title:"失踪的米拉巴代表团",objectives:[{id:"obj_pota_follow_delegation_clues",type:"narrative",description:"调查贝利亚德、德萨林路、浅坟、峰顶大厅或沃姆福德中的来源线索，找出代表团遭元素邪教分割俘虏的事实。",evidenceRequired:!0},{id:"obj_pota_find_haunted_keep",type:"narrative",description:"沿取得的线索选择羽风尖塔、河园堡垒、圣石修道院或赤月大厅中的一处闹鬼要塞；不要求按固定顺序清空四处。",evidenceRequired:!0}]},{id:"stage_pota_keeps",title:"闹鬼要塞下的通道",objectives:[{id:"obj_pota_infiltrate_keep",type:"narrative",description:"渗透或击败至少一处地表前哨，发现它通往提亚-贝希尔对应元素神殿的入口。",evidenceRequired:!0},{id:"obj_pota_rescue_delegates",type:"reach",targetRef:"scn_462",description:"追查布鲁登萨、德塞娜、伦多斯、特雷西尔与代表团遗物在不同教派据点中的去向，并营救仍存活者。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_462"}},{id:"obj_pota_keeps_0",type:"narrative",description:"已克服羽风尖塔的主要威胁并结束本次据点行动；潜入、途经或只清一间房不算。",evidenceRequired:!0,optional:!0},{id:"obj_pota_keeps_1",type:"narrative",description:"已克服河园堡垒的主要威胁并结束本次据点行动；潜入、途经或只清一间房不算。",evidenceRequired:!0,optional:!0},{id:"obj_pota_keeps_2",type:"narrative",description:"已克服圣石修道院的主要威胁并结束本次据点行动；潜入、途经或只清一间房不算。",evidenceRequired:!0,optional:!0},{id:"obj_pota_keeps_3",type:"narrative",description:"已克服赤月大厅的主要威胁并结束本次据点行动；潜入、途经或只清一间房不算。",evidenceRequired:!0,optional:!0}]},{id:"stage_pota_temples",title:"四座元素神殿",objectives:[{id:"obj_pota_choose_temple",type:"narrative",description:"按玩家选择探索空气、水、土、火神殿中的任意一座；四座神殿不存在固定必经顺序。",evidenceRequired:!0},{id:"obj_pota_defeat_first_prophet",type:"narrative",description:"击败第一位元素先知；其余三位随即放弃神殿，一位退到 F21，另外两位退入各自元素节点。",evidenceRequired:!0},{id:"obj_pota_temples_0",type:"narrative",description:"已克服嚎叫仇恨神庙的主要威胁并结束本次据点行动；潜入、途经或只清一间房不算。",evidenceRequired:!0,optional:!0},{id:"obj_pota_temples_1",type:"narrative",description:"已克服破碎波涛神庙的主要威胁并结束本次据点行动；潜入、途经或只清一间房不算。",evidenceRequired:!0,optional:!0},{id:"obj_pota_temples_2",type:"narrative",description:"已克服黑土神庙的主要威胁并结束本次据点行动；潜入、途经或只清一间房不算。",evidenceRequired:!0,optional:!0},{id:"obj_pota_temples_3",type:"narrative",description:"已克服永恒之焰神庙的主要威胁并结束本次据点行动；潜入、途经或只清一间房不算。",evidenceRequired:!0,optional:!0}]},{id:"stage_pota_fane",title:"长老元素之眼神殿",objectives:[{id:"obj_pota_enter_fane",type:"reach",targetRef:"scn_463",description:"从任一元素神殿深入彼此连通的费恩之眼。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_463"}},{id:"obj_pota_confront_fane_prophet",type:"reach",targetRef:"scn_4b3",description:"在 F21 对抗依先前选择退守此处的那一位先知及其随从；四个分支只运行一个。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_4b3"}}]},{id:"stage_pota_nodes",title:"追入元素节点",objectives:[{id:"obj_pota_pursue_remaining_prophets",type:"narrative",description:"从费恩通往嚎叫洞穴、狂泻瀑布、黑色晶洞或哭泣巨人，追击实际退入节点的剩余先知；不得预设四个节点全按序进入。",evidenceRequired:!0},{id:"obj_pota_claim_elemental_weapons",type:"narrative",description:"取得仍由先知掌握的风标、水溺、铁牙与焰袭；这些武器是关闭对应传送门的唯一钥匙。",evidenceRequired:!0},{id:"obj_pota_node_0",type:"narrative",description:"已完成空气元素节点的主要挑战并处理行动后果；只进入节点或击退一个普通敌人不算。",evidenceRequired:!0,optional:!0},{id:"obj_pota_node_1",type:"narrative",description:"已完成水元素节点的主要挑战并处理行动后果；只进入节点或击退一个普通敌人不算。",evidenceRequired:!0,optional:!0},{id:"obj_pota_node_2",type:"narrative",description:"已完成土元素节点的主要挑战并处理行动后果；只进入节点或击退一个普通敌人不算。",evidenceRequired:!0,optional:!0},{id:"obj_pota_node_3",type:"narrative",description:"已完成火元素节点的主要挑战并处理行动后果；只进入节点或击退一个普通敌人不算。",evidenceRequired:!0,optional:!0}]},{id:"stage_pota_portals",title:"关闭仍开放的传送门",objectives:[{id:"obj_pota_close_active_portals",type:"narrative",description:"把风标投入空气门、水溺投入水门、以铁牙击碎土门巨石、把焰袭投入火门；每次都会摧毁武器并放逐仍在物质界的元素亲王。",evidenceRequired:!0},{id:"obj_pota_survive_nodes",type:"narrative",description:"处理传送门关闭后的来源后果，尤其是土节点五分钟内坍塌；若只暂时击退一位亲王，保留返回关闭其他门户的后续。",evidenceRequired:!0}]},{id:"stage_pota_ending",title:"元素之恶暂退",objectives:[{id:"obj_pota_reach_epilogue",type:"reach",targetRef:"scn_5f1",description:"结算被救代表、幸存邪教、开放门户与德萨林谷各派系的后续；完全胜利须关闭所有仍开放的门户。",evidenceRequired:!0,reportCondition:{type:"scene_visited",sceneId:"scn_5f1"}}]}],_meta:{sourcePages:[6,40,46,52,59,69,74,95,103,115,122,127,134,140,145,146],confidence:"high",needsReview:!1,extractorNotes:"按冒险概要、闹鬼要塞、四神殿、F21 撤退逻辑与四个门户关闭规则重建；保留玩家选择，不把开放沙盒改写成线性全清。；overlay覆写:title/chapterId/stages/_meta"},progression:"objectives",completionCondition:{type:"and",clauses:[{type:"quest_objective",questId:"qst_main_pota",objectiveId:"obj_pota_reach_epilogue"}]}}],c=[{id:"evt_pota_learn_delegation",sceneId:"scn_101",trigger:{type:"player_action",verbClass:"scavenge",targetRef:"scn_101"},once:!0,effects:[{kind:"reveal_info",infoId:"info_pota_missing_delegation"}],narrationHint:"路线、遗体与幸存者证词逐步确认代表团被四个元素教派分割。",_meta:{sourcePages:[40,41],confidence:"high",needsReview:!1}},{id:"evt_pota_air_portal",sceneId:"scn_4f9",trigger:{type:"player_action",verbClass:"use"},once:!0,effects:[{kind:"set_npc_state",npcId:"npc_yan_c_bin",state:"banished"},{kind:"reveal_info",infoId:"info_pota_portal_rites"}],narrationHint:"风标投入传送门后被摧毁；延西冰若已降临则被放逐，嚎叫洞穴的风暴逐渐平息。",_meta:{sourcePages:[127],confidence:"medium",needsReview:!0,extractorNotes:"运行时尚无 remove_item 效果；来源明确的武器摧毁须由主持人同步从物品栏移除。；targetRef自由文本「风标」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_pota_water_portal",sceneId:"scn_554",trigger:{type:"player_action",verbClass:"use"},once:!0,effects:[{kind:"set_npc_state",npcId:"npc_olhydra",state:"banished"},{kind:"reveal_info",infoId:"info_pota_portal_rites"}],narrationHint:"水溺投入传送门后被摧毁；奥莉德拉若已降临则被放逐，节点水位开始恢复。",_meta:{sourcePages:[134],confidence:"medium",needsReview:!0,extractorNotes:"运行时尚无 remove_item 效果；来源明确的武器摧毁须由主持人同步从物品栏移除。；targetRef自由文本「水溺」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_pota_earth_portal",sceneId:"scn_5a3",trigger:{type:"player_action",verbClass:"use"},once:!0,effects:[{kind:"set_npc_state",npcId:"npc_ogr_moch",state:"banished"},{kind:"reveal_info",infoId:"info_pota_portal_rites"}],narrationHint:"铁牙击碎巨石后崩解；欧雷莫克被放逐，地震开始，黑色晶洞将在五分钟内坍塌。",_meta:{sourcePages:[140],confidence:"medium",needsReview:!0,extractorNotes:"运行时尚无 remove_item 与五分钟复合倒计时；武器摧毁及撤离计时由主持人按原书结算。；targetRef自由文本「铁牙」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}},{id:"evt_pota_fire_portal",sceneId:"scn_5ec",trigger:{type:"player_action",verbClass:"use"},once:!0,effects:[{kind:"set_npc_state",npcId:"npc_imix",state:"banished"},{kind:"reveal_info",infoId:"info_pota_portal_rites"}],narrationHint:"焰袭投入传送门后被摧毁；伊米西若已降临则被放逐，哭泣巨人的火山活动渐弱。",_meta:{sourcePages:[145],confidence:"medium",needsReview:!0,extractorNotes:"运行时尚无 remove_item 效果；来源明确的武器摧毁须由主持人同步从物品栏移除。；targetRef自由文本「焰袭」不可解析已剥离(规则14)，事件退化为verbClass+场景触发，待实体化为device"}}],r=[],d=[{id:"trs_112_0",sceneId:"scn_112",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"治疗药水"},{kind:"fixed",itemRef:"10 gp"},{kind:"fixed",itemRef:"每本价值30金币"}],once:!0,_meta:{sourcePages:[42],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「肖拉尔携带着一个皮制腰带袋，里面有10金币，三块小孔雀石（每块10金币），以及一瓶治疗药水。 甲板屋中的一个箱子里装有五本用矮人语写的书（关于德尔宗古老王国的历史记载），每本价值30金币。 甲板屋中的桌子上有一张大图表，上面用手绘的水教标志…」"}},{id:"trs_158_0",sceneId:"scn_158",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"英勇药水"}],once:!0,_meta:{sourcePages:[48],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「除了衣物和个人物品外，箱子里还有一个装有320金币的袋子，一瓶英勇药水，一卷en=Beast Bond法术卷轴，以及一卷en=Skywrite法术卷轴（见附录 B了解这两个法术的描述）。」"},coins:{dice:"320d1"}},{id:"trs_161_0",sceneId:"scn_161",container:"袋子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"2d6 sp"},{kind:"fixed",itemRef:"Thurl的戒指价值250金币"}],once:!0,_meta:{sourcePages:[49],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Thurl的戒指价值250金币。 Thurl的袋子里还装有3d10金币和2d6银币。」"},coins:{dice:"3d10"}},{id:"trs_180_0",sceneId:"scn_180",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"鬣狗人族群首领携带着一个戴着金戒指（价值25金币）的切断的人类手指"}],once:!0,_meta:{sourcePages:[51],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「鬣狗人族群首领携带着一个戴着金戒指（价值25金币）的切断的人类手指。」"}},{id:"trs_18a_0",sceneId:"scn_18a",container:"木箱",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"60 cp"},{kind:"fixed",itemRef:"26 sp"},{kind:"fixed",itemRef:"总价值50金币"}],once:!0,_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「洞穴里散落着六个兽人的骨头，还有迹象表明兽人在这里扎营了很多天。 水池和巢穴周围散落的硬币总计有60铜币，26银币和14金币。 兽人还积累了四个装满战利品的木箱，包括盘子、烛台和丝绸，总价值50金币。」"},coins:{dice:"14d1"}},{id:"trs_18d_0",sceneId:"scn_18d",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[52],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「城堡中的每位战士携带着混合货币和少量贵重物品，总价值为 2d10−2 金币。」"},coins:{dice:"2d1"}},{id:"trs_1a7_0",sceneId:"scn_1a7",container:"床下",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"治疗药水"},{kind:"fixed",itemRef:"缩小药水"},{kind:"fixed",itemRef:"150 sp"}],once:!0,_meta:{sourcePages:[53],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「霍尔格通过对他指挥下的战士进行"罚款"积累了一小笔财富，主要是针对小违规行为。 他在床下存放了一个锁着的木箱（钥匙挂在他脖子上的绳子上）。 箱子里有150个银币，40个金币，一瓶治疗药水和一瓶缩小药水。」'},coins:{dice:"40d1"}},{id:"trs_1b8_0",sceneId:"scn_1b8",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"12 pp"},{kind:"fixed",itemRef:"六块玛瑙（每块价值 10 金币）"}],once:!0,_meta:{sourcePages:[55],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Reash 携带着通往区域 K13 格栅的钥匙。 他的皮制马鞍袋里装有 70 金币，12 铂金币，以及六块玛瑙（每块价值 10 金币）。」"},coins:{dice:"70d1"}},{id:"trs_1c2_0",sceneId:"scn_1c2",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"治疗药水"},{kind:"fixed",itemRef:"190 sp"},{kind:"fixed",itemRef:"95 gp"},{kind:"fixed",itemRef:"10 gp"}],once:!0,_meta:{sourcePages:[56],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「甲板上的一个锁着的箱子里有190个银币和95个金币。 Shoalar佩戴着一个皮腰带包，里面有10个金币，三块小孔雀石，每块价值10个金币，还有一瓶治疗药水。 此外，货舱（在船尾下方）目前装满了赃物：啤酒桶、咸鱼和十二大包处理好的皮毛（海狸…」"}},{id:"trs_1d6_0",sceneId:"scn_1d6",container:"袋子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"一打桶装有啤酒（每桶价值10金币）"}],once:!0,_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这些袋子里装有面粉，一打桶装有啤酒（每桶价值10金币），木桶里装有咸肉。」"}},{id:"trs_1d9_0",sceneId:"scn_1d9",container:"木箱",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"80 sp"},{kind:"fixed",itemRef:"每块价值70金币"},{kind:"fixed",itemRef:"这些书籍——总共有一打——每本价值25金币"}],once:!0,_meta:{sourcePages:[58],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Urshnora在她的床边放有一个小木箱。 箱子里装有80个银币、30个金币、一个丝绸袋，袋中装有四块优质碧玉，每块价值70金币，还有一张en=Haste卷轴，以及一张en=Wall of Water卷轴（见附录 B）。 这些书籍——总共有…」"},coins:{dice:"30d1"}},{id:"trs_1e0_0",sceneId:"scn_1e0",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"600 sp"},{kind:"fixed",itemRef:"一个包含十五个蓝色天青石（每个价值10金币）的小袋"}],once:!0,_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Grimjaw的战利品包括600个银币，450个金币，以及一个包含十五个蓝色天青石（每个价值10金币）的小袋。」"},coins:{dice:"450d1"}},{id:"trs_1e8_0",sceneId:"scn_1e8",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[59],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「圣石寺的僧侣是禁欲者，不收集个人财宝。 他们镀金的锡面具毫无价值。 对于修道院中更世俗的居民（例如灰矮人），每个都携带2d10金币的混合货币和次要贵重物品。」"},coins:{dice:"2d10"}},{id:"trs_202_0",sceneId:"scn_202",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"120 gp"},{kind:"fixed",itemRef:"90 sp"},{kind:"fixed",itemRef:"30 gp"},{kind:"fixed",itemRef:"装有120金币、90银币、价值40金币的金丝神职长袍、一个装有价值各30金币的两个金手镯的皮袋、一张en=Earthbind卷轴、一张en=Maximilian's Earthen Grasp卷轴"}],once:!0,_meta:{sourcePages:[61],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在卡尔波的床铺下的一个锁着的铁箱里，装有120金币、90银币、价值40金币的金丝神职长袍、一个装有价值各30金币的两个金手镯的皮袋、一张en=Earthbind卷轴、一张en=Maximilian's Earthen Grasp卷轴，以及一…」"}},{id:"trs_213_0",sceneId:"scn_213",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"每本价值25金币"}],once:!0,_meta:{sourcePages:[64],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在书本和羊皮纸中有一张en=Dust Devil卷轴和一张en=Erupting Earth卷轴（两个法术的说明参见附录 B）。 僧侣们将它们放到一边，意识到它们是魔法物品且无法被抄录。 那些花时间整理书籍的角色会发现其中有二十本对非邪教徒…」"}},{id:"trs_21a_0",sceneId:"scn_21a",container:"木箱",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"800 sp"},{kind:"fixed",itemRef:"65 gp"},{kind:"fixed",itemRef:"10 gp"}],once:!0,_meta:{sourcePages:[65],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「海伦蕾对物质财富兴趣不大，但她明白其他人对此感兴趣。 修道院有时也需要资金。 桌子旁的大木箱里装有800银币、65金币，以及12块价值每块10金币的绿松石，它们被包裹在一块牛皮纸中。 通往区域M13的钥匙挂在房间门旁的墙钩上。 海伦蕾脖子上…」"}},{id:"trs_227_0",sceneId:"scn_227",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"高等治疗药水"},{kind:"fixed",itemRef:"山丘巨人之力药水"}],once:!0,_meta:{sourcePages:[66],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「兰维柯的奇珍异宝和深奥的书籍并不值钱，也没有多少魔法力量。 几个世纪以来，他对魔法哲学感兴趣，而不是更大更强的法术或神器。 然而，在这些奇珍中散布着一瓶高等治疗药水（强效治疗药水）、一瓶山丘巨人之力药水（山丘巨人力量药水）、一张en=Inv…」"}},{id:"trs_22f_0",sceneId:"scn_22f",container:"藏在",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"40 sp"}],once:!0,_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Jurth积累了大量从那些不幸落入邪教之手的俘虏那里偷来的战利品。 他把这些战利品藏在他睡觉的草垫下松动的石板下的皮袋里。 袋子里有90金币和40银币。 Jurth还带着通往M19和M21区域门的钥匙。」"},coins:{dice:"90d1"}},{id:"trs_237_0",sceneId:"scn_237",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"火焰抗性戒指"}],once:!0,_meta:{sourcePages:[67],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「大部分老牧师和僧侣的葬礼都非常简朴，但是北墙上的一具骷髅戴着一枚镶嵌着小红宝石的银戒指（600金币）和一枚火焰抗性戒指（火焰抗性戒指）。」"},coins:{dice:"600d1"}},{id:"trs_24b_0",sceneId:"scn_24b",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这里的大多数访客携带2d10金币的混合货币和一些小贵重物品。」"},coins:{dice:"2d10"}},{id:"trs_24b_1",sceneId:"scn_24b",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"40 sp"},{kind:"fixed",itemRef:"她还戴着一枚价值25金币的银戒指"}],once:!0,_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Gariena有一个装有40银币和18金币的钱袋，此外，她还戴着一枚价值25金币的银戒指，携带着一张en=Lesser Restoration卷轴和一张en=Skywrite卷轴（见附录 B）。 如果角色们赢得她的好感，她会将她的卷轴作为礼…」"},coins:{dice:"18d1"}},{id:"trs_24b_2",sceneId:"scn_24b",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"68 cp"},{kind:"fixed",itemRef:"42 sp"}],once:!0,_meta:{sourcePages:[69],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这些地精总共携带了68枚铜币，42枚银币和55枚金币。」"},coins:{dice:"55d1"}},{id:"trs_28c_0",sceneId:"scn_28c",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"两颗火蛋白石（每颗价值50金币）"}],once:!0,_meta:{sourcePages:[73],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在伊丽莎的桌子里有250金币，两颗火蛋白石（每颗价值50金币），以及一份en=Flame Arrows卷轴（参见附录 B）。」"},coins:{dice:"250d1"}},{id:"trs_2a9_0",sceneId:"scn_2a9",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。"}],once:!0,_meta:{sourcePages:[78],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「尽管空气邪教徒很少这样做，但空气神庙的许多居民都携带少量财宝。 天狗（Kenku）珍视闪亮的小玩意儿，他们总是拥有这样的财宝。 拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。」"}},{id:"trs_2c2_0",sceneId:"scn_2c2",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"它积累了价值150金币的硬币和贵重物品"}],once:!0,_meta:{sourcePages:[79],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「斗篷怪已经收集了这个区域里所有的贵重物品，以及它受害者的财富。 它积累了价值150金币的硬币和贵重物品。」"}},{id:"trs_2cc_0",sceneId:"scn_2cc",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"不动权杖"},{kind:"fixed",itemRef:"92 gp"},{kind:"fixed",itemRef:"150 gp"}],once:!0,_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在被毁坏的别墅中搜寻会发现92金币，一个刻有纪念摩拉丁的葬礼仪式的小型锑金砧（150金币），以及一根不动权杖。」"}},{id:"trs_2cf_0",sceneId:"scn_2cf",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[80],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「如果角色们掠夺了泰亚-贝希尔的墓穴，他们会找到 3d10 个价值每个50金币的小雕像、纪念品和葬礼面具。」"},coins:{dice:"50d1"}},{id:"trs_2d5_0",sceneId:"scn_2d5",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"一个镶嵌着红宝石的铂金高脚杯（价值2500金币）躺在护城河的地板上"}],once:!0,_meta:{sourcePages:[82],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「经过多年，许多不幸的生物在护城河中丧生，它们的一些宝藏随意散落在底部。 在生锈的武器和凹陷的盔甲中，有金银物品，包括镶嵌半宝石的颈圈和戒指、吊坠、胸针等，总价值约为600金币。 此外，一个镶嵌着红宝石的铂金高脚杯（价值2500金币）躺在护城…」"},coins:{dice:"600d1"}},{id:"trs_2e9_0",sceneId:"scn_2e9",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"瓶装气息"}],once:!0,_meta:{sourcePages:[83],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「如果角色们与Ahtayir成为朋友并破坏了召唤他的号角，这位气巨灵将从他在空气界宫殿中给每个角色带来一瓶瓶装气息（见第七章）。」"}},{id:"trs_2f7_0",sceneId:"scn_2f7",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"风标"},{kind:"fixed",itemRef:"Aerisi戴着一个白金项圈（价值1600金币）"},{kind:"fixed",itemRef:"金戒指和蓝宝石戒指（四个，每个价值1000金币）"}],once:!0,_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Aerisi戴着一个白金项圈（价值1600金币），金戒指和蓝宝石戒指（四个，每个价值1000金币），以及来自Evereska的头饰（6400金币）。 她携带着风标（详见第七章）和她准备的所有法术的法术书（详见她的具体数值在第七章）。」"},coins:{dice:"6400d1"}},{id:"trs_301_0",sceneId:"scn_301",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。"}],once:!0,_meta:{sourcePages:[84],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「许多寺庙的居民携带少量的财宝。 拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。」"}},{id:"trs_30e_0",sceneId:"scn_30e",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"治疗药水"},{kind:"fixed",itemRef:"6 pp"},{kind:"fixed",itemRef:"每颗价值80金币"}],once:!0,_meta:{sourcePages:[86],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Eyon的腰带上有一个防水的皮袋，里面装有15金币，6铂金币，五颗雕刻精细的珊瑚宝石，每颗价值80金币，还有一瓶治疗药水（治疗药水）。」"},coins:{dice:"15d1"}},{id:"trs_325_0",sceneId:"scn_325",container:"袋子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"高等治疗药水",count:2},{kind:"fixed",itemRef:"12 pp"},{kind:"fixed",itemRef:"四颗价值100金币的石榴石"}],once:!0,_meta:{sourcePages:[87],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Khalt有一个袋子，里面有30金币，12铂金币，四颗价值100金币的石榴石，以及两瓶高等治疗药水。」"},coins:{dice:"30d1"}},{id:"trs_335_0",sceneId:"scn_335",container:"木箱",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"山丘巨人之力药水"},{kind:"fixed",itemRef:"火焰抗性药水"},{kind:"fixed",itemRef:"+1 长剑"},{kind:"fixed",itemRef:"8 pp"},{kind:"fixed",itemRef:"四把椅子每把价值80金币"}],once:!0,_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「四把椅子每把价值80金币，但每把重30磅。 西北角的凹室里有一个木箱，里面装有190金币，8个铂金币，一瓶山丘巨人之力药水和一瓶火焰抗性药水。 靠近女巫的床铺有一把由龙骨制成，龙皮握柄的+1 长剑。 剑柄和剑柄上镶嵌着红宝石。 当剑在龙的1…」"},coins:{dice:"190d1"}},{id:"trs_33e_0",sceneId:"scn_33e",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"260 sp"},{kind:"fixed",itemRef:"22 pp"}],once:!0,_meta:{sourcePages:[90],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Morbeoth卧室中的一个小铁箱子里装有260枚银币，22枚铂金币，以及几封未签名的信件，报告了Red Larch发生的事件，包括角色们的到来以及他们在镇上的行动。 书写风格是一种不寻常的块状字母和手写体的混合。 （见本章开头的'间谍的信…」"}},{id:"trs_34e_0",sceneId:"scn_34e",container:"木箱",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"440 sp"},{kind:"fixed",itemRef:"六颗价值40金币的绿玉髓宝石"},{kind:"fixed",itemRef:"四颗价值70金币的大缟玛瑙"}],once:!0,_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在湖的西端底部，有一个大木箱敞开着。 它包含着青铜香炉的宝藏，有700金币，440银币，六颗价值40金币的绿玉髓宝石，以及四颗价值70金币的大缟玛瑙。」"},coins:{dice:"700d1"}},{id:"trs_351_0",sceneId:"scn_351",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"并用两艘小船运走价值250金币的物品"}],once:!0,_meta:{sourcePages:[92],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「战利品包括三吨贸易商品，总价值约500金币。 至少需要龙骨船往返三次或使用停泊在区域C1的小艇往返十次才能将所有货物从大厅运出。 角色们可以收集500磅最值钱的货物，并用两艘小船运走价值250金币的物品。」"},coins:{dice:"500d1"}},{id:"trs_35c_0",sceneId:"scn_35c",container:"存放",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"水溺"},{kind:"fixed",itemRef:"25 sp"},{kind:"fixed",itemRef:"每个价值10金币"}],once:!0,_meta:{sourcePages:[93],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Gar携带着水溺（见第七章）。 水之信徒将财宝藏到这里，并堆积在祭坛上。 目前，祭坛上散落着25银币，12金币，以及六个小玛瑙，每个价值10金币。 Shatterkeel定期收集这些供品，并将它们安全地存放在C26区域。」"},coins:{dice:"12d1"}},{id:"trs_361_0",sceneId:"scn_361",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"900 sp"}],once:!0,_meta:{sourcePages:[94],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「几个生锈的铁箱位于房间南边干燥的岩架上。 其中两个包含730金币、900银币、一个银质水壶、一卷en=Tidal Wave卷轴，以及一卷en=Vitriolic Sphere卷轴（见附录 B中两种法术）。 另外两个箱子里装有防水的皮包，里面…」"},coins:{dice:"730d1"}},{id:"trs_369_0",sceneId:"scn_369",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。"}],once:!0,_meta:{sourcePages:[95],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「许多寺庙的居民携带少量的财宝。 拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。」"}},{id:"trs_386_0",sceneId:"scn_386",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"水下呼吸药水"},{kind:"fixed",itemRef:"210 sp"},{kind:"fixed",itemRef:"140 cp"},{kind:"fixed",itemRef:"每块价值10金币"}],once:!0,_meta:{sourcePages:[96],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在亚莎的床铺下的铁箱里装有210个银币，140个铜币，一个装有六块黑曜石碎片的小袋，每块价值10金币，还有一瓶水下呼吸药水。」"}},{id:"trs_389_0",sceneId:"scn_389",container:"藏着",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"5 pp"},{kind:"fixed",itemRef:"五颗价值40金币的精美黄水晶"}],once:!0,_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Dynath在他的盔甲下隐藏着一个钱包，里面有15金币，5铂金币，以及五颗价值40金币的精美黄水晶。」"},coins:{dice:"15d1"}},{id:"trs_38c_0",sceneId:"scn_38c",container:"藏在",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"水下呼吸药水"},{kind:"fixed",itemRef:"每个价值50金币"}],once:!0,_meta:{sourcePages:[97],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「一个藏在工作台下面的木制箱子里装着一小堆220金币，九个奇怪的黑色水晶，每个价值50金币，还有一瓶水下呼吸药水。」"},coins:{dice:"220d1"}},{id:"trs_399_0",sceneId:"scn_399",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"2900 cp"},{kind:"fixed",itemRef:"130 sp"},{kind:"fixed",itemRef:"一尊价值80金币的象牙小象雕像"}],once:!0,_meta:{sourcePages:[99],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「双头巨人的宝藏散乱地堆放在一块脏污的毛皮下。 这堆宝藏包括2900铜币，130银币，一尊价值80金币的象牙小象雕像，以及一对各值30金币的金手镯。」"}},{id:"trs_39f_0",sceneId:"scn_39f",container:"存放",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"魔法飞弹魔杖"},{kind:"fixed",itemRef:"230 sp"}],once:!0,_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Hedorm把从囚犯那里得到的最好的战利品存放在一个锁着的木箱里（钥匙在他的口袋里）。 他的宝藏包括230银币，一个包含六个价值每个10金币的天青石的小袋，Orna的板甲，Gervor的镶钉皮甲和长剑，以及一支（完全充能的）由之前的受害者留…」"},coins:{dice:"10d1"}},{id:"trs_3a5_0",sceneId:"scn_3a5",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"掘土巨怪之爪"},{kind:"fixed",itemRef:"一条镶有红宝石吊坠的金项链价值750金币"},{kind:"fixed",itemRef:"每个价值25金币"}],once:!0,_meta:{sourcePages:[100],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Xharva Deem 的确得到了丰厚的报酬。 锻造场旁的两个铁箱里总共装有600金币，两个各值100金币的金手镯，一条镶有红宝石吊坠的金项链价值750金币，以及一袋12个马赛克石，每个价值25金币。 此外，这位道还为邪教完成了一套掘土巨怪…」"},coins:{dice:"600d1"}},{id:"trs_3ba_0",sceneId:"scn_3ba",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"铁牙"}],once:!0,_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「马洛斯携带着铁牙（见第七章）。」"}},{id:"trs_3c0_0",sceneId:"scn_3c0",container:"存放",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"精灵链甲"},{kind:"fixed",itemRef:"1100 sp"},{kind:"fixed",itemRef:"130 pp"},{kind:"fixed",itemRef:"房间里有一幅美丽的飞龙挂毯（价值400金币）"},{kind:"fixed",itemRef:"一把雕刻的竖琴价值250金币"},{kind:"fixed",itemRef:"一件绣花丝绸长袍价值80金币"}],once:!0,_meta:{sourcePages:[102],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在瓮中，马洛斯存放了1,100枚银币和130枚铂金币。 房间里有一幅美丽的飞龙挂毯（价值400金币），一把雕刻的竖琴价值250金币，以及一件绣花丝绸长袍价值80金币。 一套精灵链甲被折叠放在一个木箱里。」"}},{id:"trs_3ca_0",sceneId:"scn_3ca",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。"}],once:!0,_meta:{sourcePages:[103],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「许多寺庙的居民携带少量的财宝。 拥有个人财宝的生物拥有价值4d10 gp的混合货币和其他小价值物品。」"}},{id:"trs_3d3_0",sceneId:"scn_3d3",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"每颗价值50金币"}],once:!0,_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「大地精队长有一个腰带小包，里面有20金币和一对打磨过的血石，每颗价值50金币。」"},coins:{dice:"20d1"}},{id:"trs_3e2_0",sceneId:"scn_3e2",container:"放着",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"每个棺材的金银装饰和配件总共价值150金币"},{kind:"fixed",itemRef:"价值2000金币"}],once:!0,_meta:{sourcePages:[104],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「每个石棺内都放着一个腐烂的较小棺材的残骸。 每个棺材的金银装饰和配件总共价值150金币。 干枯的骨骼残骸躺在棺材残骸下。 每个骨骼上都戴着一个精美制作的金色葬礼面具，上面镶嵌着石榴石和蓝宝石，价值2000金币。 Findon最喜欢的石工工具…」"}},{id:"trs_3e6_0",sceneId:"scn_3e6",container:"存放",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"高等治疗药水"},{kind:"fixed",itemRef:"缩小药水"},{kind:"fixed",itemRef:"17 pp"},{kind:"fixed",itemRef:"这个盒子价值 150 gp"},{kind:"fixed",itemRef:"里面装有 35 gp、17 pp、四颗每颗价值 30 gp 的亚历山大变石、一瓶 高等治疗药水 和一瓶 缩小药水"}],once:!0,_meta:{sourcePages:[105],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「食人魔和半食人魔收集了一小批财宝，他们将其存放在一个镶有珍珠母的银盒中，并埋藏在房间东北角的碎石堆里。 成功的 DC 10 智力（调查）检定可以让角色发现它，因为碎石堆最近被翻动过的痕迹明显。 这个盒子价值 150 gp，里面装有 35 g…」"},coins:{dice:"35d1"}},{id:"trs_3f6_0",sceneId:"scn_3f6",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"火焰吐息药水"},{kind:"fixed",itemRef:"36 sp"}],once:!0,_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「其中一名牧师携带着一瓶火焰吐息药水。 箱子里总共有36个银币和19个金币。」"},coins:{dice:"19d1"}},{id:"trs_3f9_0",sceneId:"scn_3f9",container:"袋子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"吉运之石"},{kind:"fixed",itemRef:"其中包括一块蓝色的石英（价值5金币）、一块赤铁矿（价值5金币）和一块黑曜石（价值10金币）"}],once:!0,_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「有一个食人魔在其床上堆放的一件毛皮衬里的斗篷口袋里藏了一个小袋子。 袋子里装有几块闪亮的石头，其中包括一块蓝色的石英（价值5金币）、一块赤铁矿（价值5金币）和一块黑曜石（价值10金币）。 其中一块闪亮的石头实际上是一块吉运之石（幸运石）。」"}},{id:"trs_3fc_0",sceneId:"scn_3fc",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"火焰抗性药水",count:3},{kind:"fixed",itemRef:"高等治疗药水"}],once:!0,_meta:{sourcePages:[106],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「大地精队长有一个小巧、打磨过的橡木盒子，里面装有三瓶火焰抗性药水和一瓶高等治疗药水。」"}},{id:"trs_412_0",sceneId:"scn_412",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"+1 盾牌"}],once:!0,_meta:{sourcePages:[108],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「悬挂的盾牌是一个带有在其正面的棘轮的+1 盾牌，棘轮缓慢地顺时针转动，每小时转动一圈。」"}},{id:"trs_427_0",sceneId:"scn_427",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"170 sp"},{kind:"fixed",itemRef:"总价值为250金币"},{kind:"fixed",itemRef:"每个价值50金币的10个肉红玉髓"}],once:!0,_meta:{sourcePages:[109],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「书架上摆满了书籍，其中一些很有价值，总价值为250金币。 一个装满灰烬的瓮放在一个书架上，而在其底部，Ignatia埋藏了170金币、170银币以及每个价值50金币的10个肉红玉髓。」"},coins:{dice:"170d1"}},{id:"trs_43b_0",sceneId:"scn_43b",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"治疗药水"},{kind:"fixed",itemRef:"60 sp"}],once:!0,_meta:{sourcePages:[110],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「大地精队长携带着一瓶治疗药水（治疗药水）和一个包含60银币的小包。」"}},{id:"trs_442_0",sceneId:"scn_442",container:"袋子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"水下呼吸药水"},{kind:"fixed",itemRef:"无踪粉"},{kind:"fixed",itemRef:"517 cp"},{kind:"fixed",itemRef:"1048 sp"},{kind:"fixed",itemRef:"432 gp"},{kind:"fixed",itemRef:"50 gp"}],once:!0,_meta:{sourcePages:[111],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「散落在西侧凹室中的——在破碎的骨头和衣物碎片之间——是奇美拉的宝藏，包括517枚铜币，1048枚银币，432枚金币，五颗打磨过的月光石（每颗50金币），一瓶水下呼吸药水（水下呼吸药水），以及一个装满细沙（无踪粉，消失之尘）的微小红色丝绸袋子…」"}},{id:"trs_44d_0",sceneId:"scn_44d",container:"木箱",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"飞行药水",count:2},{kind:"fixed",itemRef:"箱子里有260枚金币、一个装有六颗黄水晶（每颗价值60金币）的袋子"}],once:!0,_meta:{sourcePages:[112],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「哈扬的凉亭内有两个大木箱，装满了他从审判失败者那里没收的贵重物品。 箱子里有260枚金币、一个装有六颗黄水晶（每颗价值60金币）的袋子，以及另一个装有两瓶飞行药水的袋子。」"},coins:{dice:"260d1"}},{id:"trs_46b_0",sceneId:"scn_46b",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"气球背包",count:5}],once:!0,_meta:{sourcePages:[115],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这些奇怪的背包是五个气球背包（见第七章），是邪教徒留在这里的。」"}},{id:"trs_472_0",sceneId:"scn_472",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"强效治疗药水"},{kind:"fixed",itemRef:"560 sp"},{kind:"fixed",itemRef:"包括560枚银币、220枚金币、一个金手镯（价值50金币）、一个银水罐（价值10金币）、一对骷髅造型的银耳环（每只价值10金币）"}],once:!0,_meta:{sourcePages:[116],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「鹰身女妖的巢穴中囤积了战利品，包括560枚银币、220枚金币、一个金手镯（价值50金币）、一个银水罐（价值10金币）、一对骷髅造型的银耳环（每只价值10金币），以及一瓶强效治疗药水。」"},coins:{dice:"220d1"}},{id:"trs_480_0",sceneId:"scn_480",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"2300 cp"},{kind:"fixed",itemRef:"1250 sp"},{kind:"fixed",itemRef:"价值200金币"}],once:!0,_meta:{sourcePages:[118],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Drexa通过黑颚部落参与地表的各种突袭积累了一小笔财宝。 他将部落的财宝视为自己的。 两个木制箱子里装有2300铜币，1250银币和290金币。 此外，Drexa还戴着一条重金链，价值200金币。」"},coins:{dice:"290d1"}},{id:"trs_490_0",sceneId:"scn_490",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"矮人飞锤"}],once:!0,_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「如果任何角色目前正受亨德雷尔·破敌者（区域 F10）的祝福，当最后一个幽灵被击败时，会出现一个身穿金色锁甲的严厉矮人战士的闪耀幻影。 带着一丝感激的微笑，灵魂默默指向北侧隧道尽头的一堆碎石，然后消失。 在瓦砾下是亨德雷尔的魔法锤，一把矮人飞…」"}},{id:"trs_493_0",sceneId:"scn_493",container:"袋子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"160 gp"},{kind:"fixed",itemRef:"100 gp"},{kind:"fixed",itemRef:"150 gp"}],once:!0,_meta:{sourcePages:[119],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Karg和Maul携带着大袋子。 他们共有160金币，22宝石币，三颗红色尖晶石（每颗100金币），一颗精美的紫水晶（150金币），以及一个木乃伊化的人头。」"}},{id:"trs_498_0",sceneId:"scn_498",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"130 sp"},{kind:"fixed",itemRef:"每颗价值5金币"}],once:!0,_meta:{sourcePages:[120],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「灰角牛头人通过砍下他们较小的败敌的手来夺取战利品。 为了将胜利献给伊米西，牛头人将手放在炭火上烤制。 泽格达尔的铁箱中包含130枚银币、220枚金币和十颗有瑕疵的血石，每颗价值5金币。」"},coins:{dice:"220d1"}},{id:"trs_4d4_0",sceneId:"scn_4d4",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"精灵链甲"},{kind:"fixed",itemRef:"携带一对装饰着红宝石的精良匕首（每把价值1000金币）"}],once:!0,_meta:{sourcePages:[124],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这名卓尔精灵身穿一套精灵链甲，携带一对装饰着红宝石的精良匕首（每把价值1000金币）以及一份en=Primordial Ward（参见附录 B）。 更多关于这名卓尔精灵的信息，请参阅区域N7。」"}},{id:"trs_4d7_0",sceneId:"scn_4d7",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"念珠项链"},{kind:"fixed",itemRef:"23 pp"}],once:!0,_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「在碎片中有一个蜘蛛丝袋，里面有23个铂金币，以及一条念珠项链。 项链上有一颗祝福之珠，一颗疗愈之珠，一颗召唤之珠，和一颗风行之珠。」"}},{id:"trs_4e5_0",sceneId:"scn_4e5",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"屠龙者"}],once:!0,_meta:{sourcePages:[125],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「戈德韦德的短剑是一把屠龙者。 移除剑刃会导致棺材中传来低沉的呻吟声，但除此之外什么也没有发生。」"}},{id:"trs_4f9_0",sceneId:"scn_4f9",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"风标"},{kind:"fixed",itemRef:"她戴着一个白金颈环（价值1600金币）"},{kind:"fixed",itemRef:"金和蓝宝石戒指（四个，每个价值1000金币）"}],once:!0,_meta:{sourcePages:[127],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Aerisi穿戴着皇家华服。 她戴着一个白金颈环（价值1600金币），金和蓝宝石戒指（四个，每个价值1000金币），以及来自Evereska的一顶王冠（6400金币）。 她携带着风标（见第七章）。」"},coins:{dice:"6400d1"}},{id:"trs_525_0",sceneId:"scn_525",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"触须权杖"},{kind:"fixed",itemRef:"180 pp"},{kind:"fixed",itemRef:"这六颗宝石每颗价值1000金币"}],once:!0,_meta:{sourcePages:[129],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「柱子上描绘的Aboleth的三重眼睛实际上是翡翠、蓝宝石和蓝绿色猫眼石。 这六颗宝石每颗价值1000金币。 Aboleth洞穴的地板上散落着180枚铂金币（pp），1700枚金币（ep），以及一根触须权杖。」"},coins:{dice:"1700d1"}},{id:"trs_52c_0",sceneId:"scn_52c",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"563 pp"}],once:!0,_meta:{sourcePages:[131],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「水下有230金币（ep）和563铂金币（gp）。」"},coins:{dice:"230d1"}},{id:"trs_545_0",sceneId:"scn_545",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"镶嵌着蓝宝石和珍珠的独角鲸角价值10,000金币。"}],once:!0,_meta:{sourcePages:[132],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「镶嵌着蓝宝石和珍珠的独角鲸角价值10,000金币。 在这个洞穴中持有独角鲸角的生物会感到它被拉向反射的水面。」"}},{id:"trs_54e_0",sceneId:"scn_54e",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"+1 弯刀"},{kind:"fixed",itemRef:"炼金壶"},{kind:"fixed",itemRef:"水手护甲"}],once:!0,_meta:{sourcePages:[133],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「卡利什海盗船携带着一个装满宝藏的箱子。 搜索残骸的角色们找到了这个箱子，里面包含一把+1 弯刀（+1弯刀），一个炼金壶（炼金罐），1,200 gp（金币），一颗价值5,000 gp的钻石，以及两颗各价值1,000 gp的小红宝石。 Teth…」"},coins:{dice:"1200d1"}},{id:"trs_56c_0",sceneId:"scn_56c",container:"藏有",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"每块价值25金币"},{kind:"fixed",itemRef:"三块红玛瑙每块价值50金币"},{kind:"fixed",itemRef:"一块破裂的紫水晶价值100金币"}],once:!0,_meta:{sourcePages:[135],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「石鼎兽的胃里仍然含有一些未消化的供奉物品：9金币，三块鸡蛋大小的粗糙月光石，每块价值25金币，三块红玛瑙每块价值50金币，以及一块破裂的紫水晶价值100金币。 Keltar携带两块红玛瑙，并在口袋里藏有一张折叠的en=Investiture…」"},coins:{dice:"9d1"}},{id:"trs_571_0",sceneId:"scn_571",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"善泳戒指"},{kind:"fixed",itemRef:"价值180金币"}],once:!0,_meta:{sourcePages:[136],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「散落在破碎的武器和盔甲中的有65金币，一个带有玛瑙眼睛的黄铜小恶魔雕像，价值180金币，以及一枚善泳戒指。」"},coins:{dice:"65d1"}},{id:"trs_582_0",sceneId:"scn_582",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"贝希默之失落王冠"}],once:!0,_meta:{sourcePages:[138],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「这个金刺头盔是贝希默之失落王冠（见第七章）。」"}},{id:"trs_58c_0",sceneId:"scn_58c",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"17 sp"},{kind:"fixed",itemRef:"10 gp"},{kind:"fixed",itemRef:"270 gp"}],once:!0,_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「角色们在恐爪怪先前受害者的破碎骨头中搜寻，发现了17枚银币，四块蓝色石英（每块10金币），一个镶有青金石的银制手镜（270金币），以及一颗法力再生珍珠。」"}},{id:"trs_598_0",sceneId:"scn_598",container:"藏在",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"雷鸣抗性药水"},{kind:"fixed",itemRef:"两颗石榴石（每颗价值100金币）"}],once:!0,_meta:{sourcePages:[139],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「藏在他的皮革马鞍"枕头"下，罗格林保管着一个小型皮革袋，里面装有91金币，两颗石榴石（每颗价值100金币），以及一瓶雷鸣抗性药水。」'},coins:{dice:"91d1"}},{id:"trs_59b_0",sceneId:"scn_59b",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"+1 胸甲"}],once:!0,_meta:{sourcePages:[140],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「角色们在工作台上搜寻时，会发现几根水晶法杖、石制晨星锤和岩石盔甲碎片，以及一件由抛光水晶制成的+1 胸甲。 它上面刻有大地的象征，并且会增强穿戴者的自私、贪婪或邪恶行为的冲动。」"}},{id:"trs_5bf_0",sceneId:"scn_5bf",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"隐形药水"},{kind:"fixed",itemRef:"十三块价值50金币的血石"}],once:!0,_meta:{sourcePages:[142],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「巨人有一个由链甲制成的背包。 里面有600金币，十三块价值50金币的血石，以及一瓶隐形药水（隐形药水）。」"},coins:{dice:"600d1"}},{id:"trs_5d9_0",sceneId:"scn_5d9",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"高等治疗药水",count:2},{kind:"fixed",itemRef:"气化形体药水"}],once:!0,_meta:{sourcePages:[144],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「柱子里面有一块岩石，上面刻有火焰的符号。 具有被动感知（察觉）得分15或更高的角色会注意到它。 岩石下有一个小铜盒——这是凡尼弗的应急储藏之一——包含两瓶高等治疗药水和一瓶气化形体药水（气体形态药水）。」"}},{id:"trs_5de_0",sceneId:"scn_5de",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「七幅价值每个50金币的挂毯装饰着墙壁。」"},coins:{dice:"50d1"}},{id:"trs_5e1_0",sceneId:"scn_5e1",container:"箱子",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"加速药水"},{kind:"fixed",itemRef:"法术卷轴"}],once:!0,_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「箱子里有750金币，一瓶加速药水，以及一个装有卷轴的锡管，卷轴上写着en=Immolation（见附录 B）。」"},coins:{dice:"750d1"}},{id:"trs_5e4_0",sceneId:"scn_5e4",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"健康灵药"},{kind:"fixed",itemRef:"但每幅画仍然值25金币"}],once:!0,_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「一件挂在衣柜里的长袍口袋里有一瓶健康灵药。 六幅由著名卡利希艺术家塔利克·阿尔·哈穆德绘制的画作装饰着墙壁； 热度已经破坏了它们，但每幅画仍然值25金币。」"}},{id:"trs_5e7_0",sceneId:"scn_5e7",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"坚不可摧药水"},{kind:"fixed",itemRef:"恐惧魔杖"},{kind:"fixed",itemRef:"160 pp"}],once:!0,_meta:{sourcePages:[145],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Halinaxus积累了一堆零散的战利品。 在他的栖木上有160个铂金币，十一颗红色石榴石（每颗100金币），一瓶坚不可摧药水，和一根恐惧魔杖。」"},coins:{dice:"100d1"}},{id:"trs_5f9_0",sceneId:"scn_5f9",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"99 cp"},{kind:"fixed",itemRef:"74 sp"},{kind:"fixed",itemRef:"匪徒们还积累了其他价值100金币的赃物"}],once:!0,_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「洞穴里的硬币总计99铜币，74银币，和13金币，分散在几个钱包里。 匪徒们还积累了其他价值100金币的赃物，包括许多武器。」"},coins:{dice:"13d1"}},{id:"trs_5f9_1",sceneId:"scn_5f9",container:"箱子",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"吊坠内侧刻有一位美丽半精灵女性的侧面肖像（价值 100 gp）"},{kind:"fixed",itemRef:"两个由编织银和金银制成的戒指（每个价值 25 gp）"}],once:!0,_meta:{sourcePages:[149],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「箱子内有破损的布匹和一本湿透的书残骸，但它还有一个假木底。 成功通过 DC 10 智力（调查）检定的人会注意到底部比箱子应有的深度高出几英寸。 里面有一条金链和一个吊坠，吊坠内侧刻有一位美丽半精灵女性的侧面肖像（价值 100 gp），以及两…」"}},{id:"trs_620_0",sceneId:"scn_620",container:"存放",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"漂浮之球"},{kind:"fixed",itemRef:"魔法飞弹魔杖"},{kind:"fixed",itemRef:"165 sp"},{kind:"fixed",itemRef:"78 gp"},{kind:"fixed",itemRef:"50 gp"}],once:!0,_meta:{sourcePages:[152],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「发光的球体是一个漂浮之球。 在帷幔后面有壁龛，奥瑞欧斯在那里存放他的食物、饮料、补给品、衣服和寝具，以及165枚银币、78枚金币和四颗磨光的黑曜石宝石（每颗50金币）。 如果奥瑞欧斯未能取回它，魔法飞弹魔杖存放在壁龛中。」"}},{id:"trs_63d_0",sceneId:"scn_63d",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"+1 匕首"},{kind:"fixed",itemRef:"440 cp"},{kind:"fixed",itemRef:"253 sp"},{kind:"fixed",itemRef:"六颗小绿玛瑙（每颗价值5金币）和两块磨光的月长石（每块价值50金币）也在这些硬币之中"}],once:!0,_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「信徒们在这里留下的供品包括440铜币、253银币和97金币。 六颗小绿玛瑙（每颗价值5金币）和两块磨光的月长石（每块价值50金币）也在这些硬币之中。 为了鼓励信徒们，拉拉克留下了一把装饰有星形图案和夜蓝色皮革握柄的+1 匕首。 匕首上还沾着…」"},coins:{dice:"97d1"}},{id:"trs_642_0",sceneId:"scn_642",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"25 cp"},{kind:"fixed",itemRef:"19 sp"},{kind:"fixed",itemRef:"价值10金币"}],once:!0,_meta:{sourcePages:[157],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「巴拉古斯塔斯身上有25铜币和19银币。 他还有一枚简单的银婚戒，价值10金币。」"}},{id:"trs_647_0",sceneId:"scn_647",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"每根价值5金币"}],once:!0,_meta:{sourcePages:[158],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「拉拉赫参与了对米拉巴代表团的袭击，如第三章所述。 （代表团失踪的消息直到你准备好继续冒险的下一部分才会传到红松镇。 ）他携带着四根米拉巴贸易条，每根都是一尺长的铁制纺锤形，像两个底部相连的长四面金字塔。 这些条是真品，所以敲击时会发出独特的…」"}},{id:"trs_683_0",sceneId:"scn_683",container:"藏在",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"异能塑像"},{kind:"fixed",itemRef:"次元袋"},{kind:"fixed",itemRef:"775 cp"},{kind:"fixed",itemRef:"2512 sp"},{kind:"fixed",itemRef:"1553 gp"},{kind:"fixed",itemRef:"196 pp"},{kind:"fixed",itemRef:"50 gp"},{kind:"fixed",itemRef:"这把剑价值100金币"},{kind:"fixed",itemRef:"一个由带纹玛瑙雕刻的麋鹿（每个价值150金币）"}],once:!0,_meta:{sourcePages:[167],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Nettlebee 的财富藏在一个铁箱中。 这个箱子被嵌在地下室的一个壁龛里，用与墙壁相匹配的未抹灰的大块田野石围住。 找到这个壁龛需要进行一次成功的 DC 10 智力（调查）检定。 如果角色们承诺归还 Javor 的财宝，复仇亡魂会取出箱…」"}},{id:"trs_6b9_0",sceneId:"scn_6b9",container:"具名宝藏子节",discovery:{mode:"hidden",checkSkill:"调查",dcTier:"medium"},contents:[{kind:"fixed",itemRef:"一次成功的 DC 10 感知（察觉）检定可以发现在其中一个炭盆上缠着一条价值 25 gp 的银链"}],once:!0,_meta:{sourcePages:[174],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「如果角色在祭坛周围探查，一次成功的 DC 10 感知（察觉）检定可以发现在其中一个炭盆上缠着一条价值 25 gp 的银链。 在银链附近有一小块血迹。」"}},{id:"trs_6bc_0",sceneId:"scn_6bc",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"+1 巨斧"}],once:!0,_meta:{sourcePages:[174],confidence:"high",needsReview:!1,extractorNotes:'宝藏具名子节按组确定性提取：「在西侧火盆后面的角落里靠着一把+1 巨斧。 它的主人在参加更大寺庙的仪式时把它放在那里，但鬼族杀了矮人并忽略了这把斧头。 斧头上刻有德特克符文，读作"黑暗深处的灯塔"。 斧头的使用者始终知道通往从地下通向地表最近的通道的方向，以及斧头在地下…」'}},{id:"trs_6c7_0",sceneId:"scn_6c7",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[],once:!0,_meta:{sourcePages:[175],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「Haliyra携带着Kraken Society为球体支付的款项——六个价值每个250金币的翡翠。 她还有一张附近墓地的简单草图，其中一个陵墓上标有X。」"},coins:{dice:"250d1"}},{id:"trs_708_0",sceneId:"scn_708",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"寒冷抗性戒指"}],once:!0,_meta:{sourcePages:[186],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「德兰宁佩戴着与盾卫者相配的控制护身符，以及一个寒冷抗性戒指。 他还携带着加尔戈什的日记，其中除了其他内容外，还包含了关于一个带有秘密门的假墓的便条。」"}},{id:"trs_712_0",sceneId:"scn_712",container:"具名宝藏子节",discovery:{mode:"visible"},contents:[{kind:"fixed",itemRef:"兽人肢解者"},{kind:"fixed",itemRef:"每根金条价值10金币"}],once:!0,_meta:{sourcePages:[187],confidence:"high",needsReview:!1,extractorNotes:"宝藏具名子节按组确定性提取：「石棺内躺着矮人国王的遗骸，他骨瘦如柴的双手紧握着他的斧头，兽人肢解者，靠在胸前。 兽人肢解者在第七章中有描述。 国王的骨头躺在500根金条上，其中一面印有国王的面孔，另一面印有升起的太阳。 每根金条上细小的符文证明了古代贝西尔默王国的伟大和…」"}}],l=[{id:"lore_000",title:"邪恶元素的崛起",keywords:["邪恶元素的崛起"],content:`北方聚集着可怕的威胁。在被遗忘的国度这个地区，野蛮的掠夺者带来毁灭。怪物四处游荡，捕食羊群，肆虐农田，攻击家园和旅行者。在定居点，不和与怀疑日益增长。邪恶的陌生人潜伏在阴影中，窃窃私语着一切都将很快改变。今年带来了异常温暖和多暴风雨的春天。有关洪水、风暴、野火和地震的故事四处传播。

这些麻烦的源头在北方鲜为人知：元素之恶。这些邪恶的仆从聚集在苏姆伯山丘，窥视着德斯林谷地，被一种他们无法解释的力量所吸引。这些狂热分子涉足危险的知识，试图掌握元素魔法并到处释放其破坏力。而且，他们的计划比北方大多数人意识到的要进展得更远。

在Sumber Hills，四个元素邪教在力量上不断增长，它们声称拥有与古代矮人王国地下要塞相连的废弃要塞。这些室内残留着由drow崇拜者建造的邪恶元素神庙。四个邪教中的每一个都崇拜着一个强大的空气、土地、火或水的实体：邪恶元素的王子。像他们的王子一样，这四个邪教是竞争对手，但它们全都服务于一个他们称之为长者元素之眼的神秘力量。

每个邪教都由一位拥有强大元素武器的先知领导。这些武器——风标、铁牙、焰袭和水溺——是创建四个元素节点的催化剂，这些节点是元素位面与物质位面连接的地方。邪教通过节点吸引元素生物，并使用元素魔法制造能够摧毁乡村的毁灭法球。他们一直在测试这些魔法武器，扩充邪教的行列，并渗透到各个社区，这一切都是由长者元素之眼向先知传达的幻象所指导的。最终，每位先知都希望吸引他或她对应的元素王子通过节点，在Dessarin Valley及其周边地区造成毁灭。`,alwaysOn:!0,category:"history",_meta:{sourcePages:[4],confidence:"medium",needsReview:!1}},{id:"lore_001",title:"使用此资源·使用此资源",keywords:["使用此资源"],content:`《毁灭亲王》提供了一场对抗邪恶元素势力的史诗级战役，这将让您和您的玩家沉浸其中数月。至少3级的角色可以直接进入主要冒险。1级或2级的角色应该从《第六章》中的迷你冒险开始。

本章节提供了邪恶元素在战役中出现的背景，以及冒险的概要。作为战役主要敌人的四个元素邪教也在本章中进行了描述。尽管这些邪教都渴望权力和倾向于破坏，但每个邪教都有自己的领袖和偏好的方法。此外，本章还提供了开始和运行冒险的指导方针。

第二章 探索了德斯林谷地，这是这次冒险的背景（如果你愿意，也可以是许多其他冒险的背景）。德斯林河是北方的一条伟大水道，它流经一个几乎未被定居的边境地区，距离伟大的城市深水城只有几天的路程。这个地区的心脏地带，苏姆伯山丘，已经成为元素邪教建立他们力量基地的要塞。

第三章 正式开始冒险。在这一章中，角色们得知德萨林谷地出现了麻烦，邪恶势力开始肆虐。通过探索，角色们发现了四大元素邪教的前哨基地——所谓的鬼魂城堡。

在《第四章》中，角色们发现四个邪教占据了苏姆伯山丘下的一个庞大的地下城复合体。这些神庙是邪教徒对德萨林山谷进行阴险攻击的基地。

第五章 描述了庙宇建筑群下方的古老洞穴和献给元素之恶的祭坛。从这些洞穴出发，通道通往四个元素节点，这些地方是元素位面的力量在世界中建立据点的地方。在每个节点中，通往那些位面之一的传送门的强度在增加。角色们必须在元素之恶的王子们被释放到世界上之前摧毁那里的邪教。

第六章 提供了与主线故事次要的冒险。您可以根据需要使用它们。如果从1级角色开始冒险，其中一些尤其有用。

《第七章》详细介绍了NPC、新怪物和新的魔法物品。

附录A 和 附录 B 包含了新素材，供玩家在创建他们的角色时使用。附录C 提供了如何将这个冒险适应到其他D&D战役设置的建议。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_002",title:"冒险背景·冒险背景",keywords:["冒险背景","阿莉希·卡罗娜斯","凡尼弗","戈尔·碎骨","马洛斯·恩雷尔"],content:`每当被称为长者元素之眼的力量测试其力量时，邪恶元素的威胁就会出现在多元宇宙的不同世界中。在其当前的化身中，邪恶元素在苏姆伯山丘中崛起。这个边疆地区的分散城镇和孤立农舍现在面临着严峻的威胁。如果邪恶元素的力量在它们壮大之前不能被击败，疯狂和毁灭可能会在北方无限制地蔓延。

元素之恶在苏姆伯山丘的存在可以追溯到数千年前，当时一群叛逆的黑暗精灵发现了苏姆伯山丘下方的广阔洞穴，并将其宣称为自己的领土。这些黑暗精灵崇拜一个可怕的原始邪恶之神，并为这个无名之力建造了一个神祠。随着时间的推移，古老的黑暗精灵邪教逐渐消失（或被消灭），被称为长者元素之眼神殿的地方被遗忘了数个世纪。

贝西尔默的矮人们是下一个发现这个地点的民族。贝西尔默是一个牧场和农田的王国。矮人们在苏姆伯丘陵下建立了一个名为泰亚-贝西尔默的地下要塞，以防御困扰该地区的巨魔和巨人。矮人们在他们自己的挖掘之下发现了古老的卓尔（黑暗精灵）据点及其神庙。他们没有力量清理废墟，因此他们放弃了更深入的挖掘。不久后，巨魔和巨人破坏了贝西尔默王国，剩下的矮人们也完全放弃了这个地方。

多年来，冒险家们偶尔发现了埋藏的Tyar-Besil要塞和下面的黑暗精灵金库。很少有人对他们的探险做出持久的记录，他们的名字也被遗忘了。但在893 DR年（使用戴尔计算历法，大约是现在600年前），一群自称银角骑士的冒险家发现了这个地方，并开始探索废墟。冒险家们一次又一次地回到Tyar-Besil，当他们决定建立要塞并驯服这片领土时，他们在通往古老矮人废墟的每个已知入口上方建造了他们的堡垒。冒险家们害怕苏姆伯山丘下方深洞中的东西，并打算永久监视这个区域。

历史并没有配合。在银角骑士团建立他们的要塞一两代人之后，一支兽人大军横扫了北方，要塞被攻陷。数个世纪以来，它们一直空置着。当地人开始称它们为闹鬼的要塞，各种怪物偶尔会占据这些废墟。

这些被遗弃的城堡和下面的矮人要塞可能永远被遗忘，但几年前，一个名叫Vizeran DeVir的卓尔（黑暗精灵）回到了古老的Eye Fane（眼睛神殿）。DeVir是一个强大的叛逆卓尔法师，他不是Lolth（卓尔的蜘蛛女神）的仆人；就像很久以前创建神庙的被遗忘的教派一样，他致力于Elder Elemental Eye（古老元素之眼）的无名力量。他的信仰导致他被卓尔社会放逐，但他对这种黑暗力量的忠诚并没有白费。在幻象的指引下，Vizeran DeVir创造了四件充满邪恶元素的强大武器：长矛风标，匕首焰袭，三叉戟水溺，和战镐铁牙。他将这些武器留在了Elder Elemental Eye的祭坛上，供注定的持有者发现。

在过去的几个月里，四位元素先知都被梦境或幻象驱使，去寻找古老祭坛。阿莉希·卡罗娜斯、凡尼弗、戈尔·碎骨和马洛斯·恩雷尔一个接一个地获得了他们的武器，并成为各自邪教的首领。四位先知在矮人提亚-贝西尔的废墟中安顿下来，并占据了守卫通往庞大地下城入口的幽灵堡垒。疯子、亡命之徒、渴望权力的恶棍以及各种各样的怪物开始被邪恶元素的黑暗召唤所吸引，逐渐涌入山谷。与此同时，先知们也在试验他们的新玩具，培育着日益壮大的元素节点的种子，并测试他们制造越来越大规模自然灾害的能力。

数千年后，元素之恶的种子再次在苏姆伯山丘下萌芽。是否有人能够揭露这些险恶的阴谋并阻止它们，还有待观察。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[5],confidence:"medium",needsReview:!1}},{id:"lore_003",title:"冒险概要·冒险概要",keywords:["冒险概要"],content:`冒险始于角色们抵达红松镇，这是德斯林谷地西侧的一个小定居点。奇怪的谣言和不祥的迹象让镇民们感到担忧，包括关于道路上的土匪袭击、德斯林河上的海盗活动以及离镇太近的怪物目击报告。但最让该地区敏锐的观察者们担忧的谜团是，一个从米拉巴城市前往深水城的代表团失踪了。代表团在贝利亚尔的小村庄停留，成员们提到他们打算在继续前往金田之前参观神圣的矮人遗址。他们最后一次被看到是在石桥的西端，向南转向，通过苏姆伯山丘的心脏地带陆路前行。现在几乎已经一个月了，代表团从未出现在金田或任何其他前哨站。

强大的派系有充分的理由担心失踪的代表团。竖琴手们担心代表团中一位著名的矮人历史学家。翡翠联盟想知道代表团成员带到金田的一袋魔法种子发生了什么。即使是散塔林会也有兴趣通过帮助解开这个谜团来改善他们与米拉巴的关系。无论角色们出发寻找失踪的代表团还是选择调查其他线索，他们很快就会发现线索，将他们引向苏姆伯山丘中的闹鬼堡垒。所有这些堡垒现在都被一些奇怪的新教派占据，他们伪装成无害的社团或隐居的秩序，但这些前哨站服务于邪恶元素。

当角色们渗透或击败这些伪装的邪教徒团体时，他们发现每个闹鬼的城堡都守卫着一条通往苏姆伯丘陵下的巨大地牢的通道，这里是新的邪恶元素神庙。在这里，元素邪教在一座古老矮人要塞的废墟中建立了自己的地位。他们正在增强自己的力量，同时努力掌握元素力量。角色们面对元素先知，并与四位邪教领袖中的一位对峙，其身份取决于角色们首先探索的神庙的哪一部分。

即使当角色们深入元素神殿时，他们的成功也引发了报复。元素先知们派遣了携带毁灭之球的邪教徒小队——这些本质上是由元素节点创造的元素能量炸弹——在整个德萨林谷地引发自然灾害，惩罚所有人以报复角色们的干涉。

尽管在各个元素神庙中遭到了激烈的反对，并且冒犯了邪教的报复，角色们成功地救出了一些米拉巴尔的代表，并从他们在提亚-贝希尔新建立的基地中驱逐了一些或全部邪教。不幸的是，代表团的其他成员仍然失踪，各种其他线索和谜团仍然未解。更糟糕的是，很快就清楚地表明，元素邪教正处于释放不可想象的灾难的边缘。

随着元素末日的临近，角色们发现了通往由邪教控制的Tyar-Besil地区的通道，并通向更古老（也更危险）的洞穴，这些洞穴被称为眼睛祭坛，是由黑暗精灵挖掘的。在这里，他们找到了献给长者元素之眼的邪恶祭坛，角色们在这里面对另一位元素先知（他们面对的先知取决于他们首先探索的地牢部分）。他们还发现了通往邪教最终圣所的通道：被称为黑晶石、嚎叫洞穴、倾泻瀑布和哭泣巨人的元素节点。

在冒险的最后阶段，角色们面临着追击剩余两位元素先知进入他们力量之地的艰巨任务。每个四个邪教中最强大和最虔诚的追随者守卫着这些圣所，这些圣所充满了元素能量，并扭曲成了元素位面的奇异反映。在每个元素节点的核心，角色们发现了一个巨大的传送门，作为其相关元素位面的通道。在这里，剩余的邪教领袖们进行他们的抵抗，角色们也在这里面对元素之恶的王子们压倒性的力量。面对这样的对手，胜利似乎令人怀疑，但聪明和足智多谋的角色们可以找到摧毁传送门的方法，而不是试图杀死这些可怕的存在。

随着传送门关闭，元素节点恢复了正常，任何幸存的邪教徒都四散逃命。他们的要塞被摧毁，他们的领袖已死；元素之恶在这个世界中暂时被击败了。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_0",title:"元素邪教·元素邪教",keywords:["元素邪教","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:`元素之恶扭曲了自然元素，将其限制在破坏的方面。这种力量想要获得摧毁一切的力量——道德、社会结构、政府、自然法则——并将存在还原为更加原始的状态，被冲突和疯狂所污染。元素之恶利用凡人仆从来达到这个目的。

这些可憎的原则在世界中主要有两种表现形式。第一种是腐败。元素之恶以反击的力量诱惑那些心灵破碎的、受冤枉的和邪恶的人。它代表着苹果中的虫子，一种随着自然秩序的衰败而日益增长的隐藏腐败。秘密邪教兴起，机构被贬低，管理季节的基本法则开始削弱。随着元素之恶的力量增强，它的腐败发展成第二种形式：疯狂。邪教徒陷入疯狂，对周围的一切进行攻击或在元素灾难中自我毁灭。毁灭统治着，自然力量变成了破坏的工具。一个元素之恶获得胜利的世界将只存在于永无止境的狂暴元素之战中。

元素之恶在许多时代中出现在不同的世界。这个阴险的力量——古老的元素之眼——在费伦大陆隐藏得很好。个体仍然容易受到它的召唤：那些被力量承诺所吸引的人，那些心中只有仇恨的人，那些心灵破碎因此容易受到暗示和黑暗耳语的人。这些人是元素之恶的仆从，如果他们不被揭露和根除，他们可能会造成无法估量的伤害。

尽管破坏是元素之恶的统一原则，但服务于这种黑暗力量的生物并不一定坚持这个目标。只有最不平衡的心智才会为了破坏本身而寻求破坏。相反，元素之恶的仆从通过空气、土地、火或水这些元素之一的破坏力量来寻求力量。这就是组成元素之恶崇拜的四个元素邪教的起源。

这些邪教各自独立运作。每个邪教都相信它们所偏爱的元素是最强大的，最值得崇拜。空气邪教的普通成员对有人能在元素土地、火或水中看到值得崇拜的东西的想法嗤之以鼻。其他邪教的成员对他们自己的邪教以外的任何邪教都有同样的感觉。只有受过最好教育或最有魔法天赋的成员才能理解每个元素邪教背后都有一个统一的原则。即便如此，他们仍然相信他们的元素应该至高无上。

尽管目标不同，方法各异，元素邪教之间通过它们不完全理解的力量相互联系。从一个世界到另一个世界，从一个时代到另一个时代，元素之恶的邪教一次又一次地崛起。每一次，空气、土地、火和水的元素邪教信徒都被联合到同一个黑暗的命运中。

在冒险过程中，角色们有充分的机会看到与四个邪教相关的每个符号。他们可以弄清楚这四个符号如何连接形成一个第五个符号：古老的元素之眼。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_1",title:"元素邪教·黑土教派",keywords:["元素邪教","黑土教派","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:"黑土邪教吸引那些直接或间接从土地中汲取财富的人。在元素之恶的影响占据的地区，生活在地下或在地下挖掘的动物和怪物接受邪教徒作为盟友。像蠕虫或巨型鲨蜥这样的生物，通常太愚蠢和贪食而无法训练，却顺从黑土的意志。这些怪物允许自己被驱赶或骑乘，与邪教的敌人战斗。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_2",title:"元素邪教·黑土之徽",keywords:["元素邪教","黑土之徽","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:"土之教派的象征代表着目的和稳定。信徒们有时用手势来标识自己：他们通过将双手的拇指和食指相触形成一个三角形。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_3",title:"元素邪教·战术与哲学",keywords:["元素邪教","战术与哲学","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:`黑土邪教是四个元素邪教中最注重防御和最有耐心的。土之邪教徒崇尚坚忍、耐力和不屈不挠的决心。他们行动审慎，行动缓慢，总是谨慎考虑他们的计划并在开始任何新事业之前聚集他们的力量。一旦土之邪教徒决定采取行动，他们就会变得不可动摇，通过任何障碍或未预见的发展方式稳步前进。他们极端地一心一意，大多数土之邪教徒对社会礼节几乎没有用处。他们将共同的礼貌视为弱者限制强者行为的方式，并且他们鄙视同情或友谊作为弱点。

在战斗中，黑土邪教徒是残忍和直接的。他们用直接的攻击压倒敌人，尽管如果他们有机会破坏防御或从下方攻击，他们会毫不犹豫地利用他们挖掘的技巧和掌握钻洞怪物的能力。他们在死亡面前毫不畏惧。投降从来不是一个选项。

土之邪教徒生活在地下。他们用石头或铁制作武器，并在沙子或泥土中"沐浴"，以感受他们偏爱的元素的亲近。黑土新手知道如何用魔法塑造石头来制造盔甲，甚至他们的长袍也包括石质的肩甲或面具。

破碎波涛教派的信徒几乎和土教派的追随者一样有耐心和坚忍。他们理解耗尽强大敌人并慢慢侵蚀他们防御的价值。然而，他们在总体哲学上比土教派信徒更加灵活和机会主义。就像洪水寻找堤坝的弱点，然后以不断增长的力量突破一样，水教派信徒迅速感知到机会并采取行动来利用它。这种实用主义和机会主义的哲学意味着破碎波涛是四个元素教派中最雇佣兵化的。水教派信徒渴望寻找丰厚的战利品，并利用他们的非法所得来发展他们的计划。

在战斗中，破碎波涛教派的信徒擅长进行小规模战斗。他们重视机动性和机会主义，很少在一个地方长时间坚守。相反，他们假装撤退，重新集结，并发动新的攻击，像风暴驱动的海浪侵蚀沙滩一样逐渐削弱敌人。几乎所有的水教派信徒都是出色的游泳者，擅长在水中战斗，因此他们寻找机会通过使用水域来绕过或穿越防御，以此出其不意地攻击敌人。

由于信徒们将水视为所有生命和目的的源泉，他们尽可能多地在水边或水中度过时间。许多教派藏身之处都位于大片水域附近，而那些不靠近水域的地方则设有隐藏的水池或井，供教派成员沉浸其中。水教派信徒珍视水下呼吸的魔法，并寻求它，不为其他原因，只为了能在水下冥想数小时。很少有信徒从这些练习中获得任何深刻的见解。

火教信徒冲动、易怒且暴力。他们并非无头脑的野蛮人；他们的冲劲也包括了恶魔般的创造力和为他们的疯狂事业设计新工具的动力。他们是火与锻造的大师，将俘虏带到他们的地狱铸造厂工作。火教信徒认为征服和奴役弱者是实现他们打算释放到世界上的混乱的必要步骤。

在战斗中，火教徒发起突然而压倒性的攻击。他们不顾一切地投身于鲁莽的攻击，不顾自己的生命，试图在倒下之前造成尽可能多的伤害。他们无所畏惧，宁愿在敌人群中战斗至死，也不愿后退一步。

永恒火焰教派的追随者会将自己置于他们所能创造的最大火焰之中。他们最喜欢的战术是使用魔法打开火山裂缝或通风口，引导熔岩流动。广泛纵火和故意设置森林火灾是可接受的替代方案。大多数火教信徒相信，每天应该点燃一些重要而美丽的东西，否则他们就没有尽到自己的职责。

嚎叫仇恨教派的信徒聪明、冲动且富有创造力。他们通常认为自己比遇到的其他人更聪明、更敏捷、更有能力。嚎叫仇恨教派的信徒不喜欢公开战斗。他们更愿意秘密工作，使用隐秘和幻象以最小的力量达到目的。欺骗和伏击的战术为空气教派的信徒提供了证明自己比对手更聪明、更有资源的机会。风不会吹倒城堡，而是绕过并穿过它。渗透和间接攻击显然是更优越的战术。

空气教派的信徒尽可能寻找高地作为他们的要塞，尽管他们也重视有宽阔裂缝或高耸拱顶的地下空间。能够飞行的地方是必须的。嚎叫仇恨的追随者明白，有时候他们必须将秘密性置于其他考虑之上。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_4",title:"元素邪教·土之先知",keywords:["元素邪教","土之先知","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:`一个名叫马洛斯·恩雷尔的美杜莎领导着黑土邪教。他掌握着元素武器铁牙，这是一种注入了邪恶土地王子欧雷莫克力量的战镐。Marlos自负而残忍，是一个极端的自恋者，喜欢用美丽的物品和奢华的舒适环境包围自己。在这嘲讽的自信之下，隐藏着一个痛苦的存在，他厌恶自己，对周围的每个人都怀有蔑视。

Marlos原本是一个人类贵族，出生在一个富裕的科米尔家族。他将家族的财富挥霍在无休止的自我放纵上，多年来寻求更多可疑的娱乐形式。Urnrayle庄园成为了一个以荒诞的化妆舞会、奇异的宴会和怪异的狂欢而闻名的地方。Marlos要求他的客人戴上丑陋或怪物的面具，从而确保没有人的美丽会超越他自己。

随着年龄的增长，Marlos求助于魔法来保持他日渐消逝的美丽。经过多年的寻找，他找到了一枚含有偷来的精类生物活力的戒指。只要他戴着这枚戒指，他的缺陷就会消失，没有人能抵挡他的身体魅力——直到有一天戒指将Marlos变成了美杜莎。他命运的恐怖使Marlos发疯。他逃离了他的祖居，带走了他的面具收藏。

经过多年的流浪和在西方心脏地带一个又一个废墟庄园中躲藏，马洛斯被困扰的梦境和幻象吸引到了荒凉的苏姆伯山丘。一个毁坏的修道院下面的长楼梯带他来到了一个古老的洞穴，洞穴中有一个丑陋的祭坛，上面放着一把铁制的战镐。当美杜莎认领了铁牙，他的目的终于变得清晰。他在附近的地牢建立了巢穴，并开始建立黑土教派。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_5",title:"元素邪教·特质",keywords:["元素邪教","特质","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:`与他的许多追随者不同，Marlos举止优雅，言谈得体。他喜欢机智的交谈和尖锐的反驳，尽管他很快就会发表尖刻的评论或以别人为代价开玩笑。Marlos喜欢嘲笑别人，尤其是如果他能以聪明或优雅的方式做到这一点。Marlos的前世一直在不断寻求乐趣，但现在唯一能激起他无情灵魂的只有精致的残忍。如果他被另一个优雅且有吸引力的个体超越，他可能会被盲目、不理智的嫉妒所驱使。

Gar身上长满了藤壶，他在他的左臂残端上戴着一个蟹爪形状的人造手臂。他从不多说一个字，认为任何人礼貌地对他说话要么是不真诚的，要么是在微妙地嘲笑他。这位水先知的主要动机是报复；世界对他很残酷，他打算让每个人都遭受和他一样的痛苦。他渴望再次靠近海洋，并且因为推动他幻象的驱动力让他远离大海而感到痛苦。

凡尼弗是一个非凡的操纵者。她用她的手段收集盟友和追随者，根据需要使用他们，并在他们失去用处的那一刻抛弃他们。她天生才能的证明是，她的许多受害者如果发现她还需要他们做其他事情，会急切地渴望再次沐浴在她的关注之中。虽然凡尼弗装出富有贵族的派头，但她鄙视那些在巨大财富中长大的人，她的品味偏好粗糙。凡尼弗的野心高于一切，作为火邪教无可争议的主人，她打算使永恒火焰成为所有邪教中最强大和最可怕的。

没有人能够否认Aerisi的优雅，但她也拥有一种暴力脾气，每当她被拒绝她所想要的东西时，这种脾气就会显露出来。Aerisi容易沉迷于幻想，并且冲动地沉溺于堕落。她不认为自己是邪恶的，因为她缺乏与他人共情的能力。那些崇拜并取悦她的人是好人，那些违抗她的人是邪恶的，必须受到惩罚。她希望用风暴和毁灭来鞭打这个世界，从根本上说，是对这个敢于强加规则给她的精灵社会的发脾气。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_6",title:"元素邪教·敌人与盟友",keywords:["元素邪教","敌人与盟友","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:`黑土教派的信徒对嚎叫仇恨教派非常怀疑。他们认为空气教派的信徒变化无常，不可靠，通常与现实脱节。土教派的信徒尊重永恒火焰追随者的力量和凶猛，但也发现他们令人恼火地反复无常。黑土教派的信徒最常与破碎波涛结盟，因为他们钦佩水教派信徒的耐心和实用主义。

破碎波涛的追随者憎恨永恒火焰的教徒。他们认为火教徒敌对、易怒，且不可原谅地鲁莽。嚎叫仇恨的教徒并不那么敌对，但他们同样容易冲动，且不可靠。水教徒与黑土教的教徒相处融洽。土教徒审慎可靠，尽管可能对他们自己来说过于死板。

永恒火焰邪教成员憎恶粉碎波涛的追随者。他们认为水邪教成员滑头且不可信，甚至可能是懦弱的——毕竟，粉碎波涛在面对反对时迅速撤退，寻求最小阻力的道路，然后再投入力量。土邪教成员稳重且勇敢，但行动缓慢得令人发狂。呼啸之恨的邪教徒与火邪教有迅速行动的冲动，并且在为元素之恶服务时表现出许多相同的创造力和创造性品质。

呼啸之恨邪教成员认为黑土邪教成员粗俗、无礼、缺乏想象力，并且固执到愚蠢的地步。最冒犯的是，土邪教成员对呼啸之恨邪教及其成就毫不在意。粉碎波涛的追随者更加灵活和有创造力，但他们是粗俗的雇佣兵，同样过于实用主义，无法欣赏空气邪教哲学的微妙之处。永恒火焰是其中最好的，因为火邪教成员分享了呼啸之恨邪教的果断和创造力，即使他们过于骄傲和侵略性。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_7",title:"元素邪教·破碎波涛教派",keywords:["元素邪教","破碎波涛教派","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:"破碎波涛教派吸引那些生活在水域附近或水域中的人，以及那些欣赏微妙和必然性的人。像水生食尸鬼和迈罗人鱼这样邪恶的海洋生物对水教派信徒友好。即使是非有意识的捕食者，如鲨鱼或章鱼，也明白水教派信徒是应该帮助的盟友或应该服从的主人。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_8",title:"元素邪教·破碎波涛之徽",keywords:["元素邪教","破碎波涛之徽","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:"水邪教成员在需要识别标志时使用一个简单的手势来相互识别：交叉食指并将拇指重叠以形成一个底部有横线的X形。它代表水的永恒涌动和退却，一个永无止境的变化循环。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_9",title:"元素邪教·水之先知",keywords:["元素邪教","水之先知","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:`前水手戈尔·碎骨领导着粉碎波涛邪教。他掌握着元素武器水溺，这是一种三叉戟，注入了邪恶水源公主奥莉德拉的本质。Gar是一个忧郁的人，话不多，让他的行动为他代言。他相信自己被世界冤枉了，除了那些和他一样破碎和不幸的人，他恨所有的人。Gar也鄙视他人的软弱。

Gar出生在Nelanther群岛的一个贫穷渔村。在很小的时候，他因鲨华鱼人攻击而失去了家人。海魔几乎杀害了他认识的每一个人。一位Tethyrian商人的船只征召了这位年轻的孤儿进入服务，Gar被迫进入残酷的契约奴役，这几乎不比被奴役好。当他不愿意的服务在海盗袭击商船时结束。在战斗中，Gar被击落船外。他靠紧抓船只残骸存活了几天，直到一只鲨鱼撕下他的左臂。死亡似乎迫在眉睫，但一股强大的海流出现并将他从饥饿的捕食者那里带走。在一个小时内，他被冲上了剑海岸的岸边。

加尔相信救了他一命的潮流是海洋派来的元素使者。从那天起，他将自己奉献给了海洋，自学其秘密，并在多年的孤独流浪中学会了强大的水系魔法。他鄙视所有人，只记得商船船员的苛刻对待和海盗的残暴。但随着时间的推移，他意识到了一种更高使命的召唤，促使他寻找其他人类浮萍，并教他们关于海洋力量的知识。

Gar的幻象引导他来到了苏姆伯山丘下的秘密水域。他发现了一个隐藏的洞穴神庙，神庙的祭坛上放着一把强大的魔法三叉戟。感受到它的力量，Gar拿起了这把武器，并开始召集他的邪教成员加入他在粉碎波涛神庙的行列。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_10",title:"元素邪教·永恒火焰教派",keywords:["元素邪教","永恒火焰教派","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:"永恒之火吸引那些为了破坏本身而破坏的人。元素火的生物最有可能接受这种鲁莽的哲学；即使是非智能的火怪也能感觉到火教徒心中潜藏的鲁莽破坏欲望，并认为永恒之火的信徒是他们的盟友。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_11",title:"元素邪教·永恒火焰之徽",keywords:["元素邪教","永恒火焰之徽","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:"火教的象征让人联想到一个带有燃烧火焰的碗状火盆。火教徒有时用象征性的手势来识别自己：一只手紧握成拳，拇指朝上，另一只手覆盖在拳头上，好像要遮住碗但让火焰显露出来。教派成员还可以通过他们的烧伤疤痕来识别。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_12",title:"元素邪教·火之先知",keywords:["元素邪教","火之先知","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:`通过吞噬一切的野心和惩罚所有曾经阻挠她梦想的人的愿望，这个提夫林凡尼弗已经上升到了永恒火焰邪教的领导地位。在她精致的外表下隐藏着被蔑视的骄傲的钢铁边缘。而在她坚硬的骄傲之下，隐藏着对谋杀和混乱的渴望。凡尼弗对所有自认为比她优越的人怀有强烈的仇恨，她不择手段地让他们看到她是一个值得畏惧和尊敬的人物。

凡尼弗出生并成长在卡利姆多最贫穷地区的极度贫困中，只依靠她狡猾的才智。在她的青年时期，她学会了跳舞赚钱，并逐渐从工人区的酒馆跳到城市贵族的优雅房间。她掌握了一些小火魔法来使自己与其他舞者区分开来，并将火焰融入她的舞蹈。她的才能增长了，不久她引起了一位帕夏的注意，成为了他的妾室。但即使她在享受帕夏慷慨赠送的礼物时，凡尼弗也因为帕夏将她视为一个简单的战利品而恨他。不久后她离开了，偷走了帕夏的一小笔珠宝财富，并放火烧了他的宫殿。

凡尼弗逃到了扎泽斯普尔，但她前主人的代理人很快就找到了她。她再次逃往博德之门，在被称为小卡利姆多的贫困社区定居。在那里，她开办了一所舞蹈学校，并发现她对火的天赋吸引了其他类型的学生。她成为了一个火崇拜邪教的领袖。她一直留在那里，直到几个月前，梦境和幻象驱使她去北方寻找一个失落的地牢。在一座被遗忘的神庙的祭坛上，她找到了匕首焰袭，这把匕首注入了邪恶火源王子伊米西的力量。手持这个强大的武器，凡尼弗决定在苏姆伯山丘下建立她的邪教新篇章。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_13",title:"元素邪教·哀嚎之怨教派",keywords:["元素邪教","哀嚎之怨教派","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:"嚎叫仇恨的教派吸引那些处理感知而非事实的人：例如幻觉师、间谍和刺客。任何种类的捕食性或凶猛的有翼生物，甚至是通常抵抗训练的非智能怪物，都认为空气教徒是盟友并与他们合作。骏鹰、狮鹫和巨型秃鹫经常被用作空气教派的坐骑。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_14",title:"元素邪教·哀嚎之怨之徽",keywords:["元素邪教","哀嚎之怨之徽","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:"元素空气的象征是一个倒三角形，上面有三条分叉线。一些人认为它代表龙卷风的漏斗云，而其他人则认为它代表有翼生物对地面生物的优越性。一些人认为它是一个代表元素领主延西冰的古老符文。无论他们的解释如何，空气邪教成员使用这个象征作为一个秘密密码。通过将拇指和小指放在一起，并将其余手指握成拳头，空气邪教成员形成了一个倒三角形，这是邪教成员身份的标志。",alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}},{id:"lore_004_15",title:"元素邪教·气之先知",keywords:["元素邪教","气之先知","马洛斯·恩雷尔","欧雷莫克","戈尔·碎骨","奥莉德拉","凡尼弗"],content:`月亮精灵阿莉希·卡罗娜斯领导着呼啸之恨邪教。她身材高大苗条，拥有轻轻扇动空气的幻象翅膀，Aerisi以一种在她面前所有人耳中都清晰可闻的低语对她的人民说话。Aerisi不把她的追随者看作邪教徒，而是视为她高贵的臣民。在他们面前，她是先知和女王。音乐家和宫廷侍从娱乐并奉承她，骑在骏鹰上的战士则充当她的骑士。

Aerisi在仙女座一个偏远地区的魔法城堡中长大，周围充满了传说、历史和魔法书籍。她在早年玩着游戏，练习魔法，并想象自己是故事书中的一位翼精灵（有翼的精灵）。她的父母将她保护起来，远离仙女座的冲突，她以一种温柔而脆弱的性格成年。

最终，她的父母认为他们的女儿应该开始参与精灵社会，于是他们带她来到了隐藏的城市Evereska。然后她的父母意识到了他们严重的错误。在溺爱和保护他们的女儿时，他们养大的不是一个年轻女士，而是一个被宠坏的孩子。习惯了得到她所渴望的一切，每当她的一点点愿望被拒绝时，公主就会大发雷霆，而Evereska的月亮精灵几乎无法忍受她。

Aerisi在月亮精灵中感到无能为力。尽管她在仙女座成为了一名熟练的施法者，但她的人民对这样的魅力并不买账。在她的梦中，她开始将自己想象成她故事书中的有翼精灵。她希望控制风，去她想去的任何地方，并惩罚那些冒犯她的人。她童年时的幼稚幻想变成了她统治风暴和空气本身的黑暗幻象。她梦见一位皮肤棕色、头发白色的古老神秘人物，他承诺教她所有她想知道的东西——这是邪恶空气王子延西冰的幻象。Aerisi将她的学习转向元素空气，学习飞行的秘密，并逃离Evereska去追随她梦中的妄想幻象。

Aerisi的幻象引导她来到苏姆伯山丘下的一个洞穴中一个奇怪的祭坛，在那里她获得了长矛风标。在延西冰的驱使下，她自封为女王，并开始寻找追随者来统治。她的魔法帮助填充了呼啸之恨邪教的行列，让新信徒无望地效忠于她。`,alwaysOn:!1,category:"setting",_meta:{sourcePages:[6],confidence:"medium",needsReview:!1}}],_=[{id:"hook_pota_red_larch",goalRef:"qst_main_pota",priority:10,clues:[{id:"clue_pota_omens",channel:"rumor",content:"道路土匪、德萨林河海盗、近镇怪物与异常天气同时增多。",deployableSceneIds:["scn_04b","scn_04a"]},{id:"clue_pota_black_robes",channel:"environment",content:"采石工在火把外看见穿黑袍、戴石面具的人影。",deployableSceneIds:["scn_04b"]},{id:"clue_pota_factions",channel:"npc",content:"竖琴手、翡翠联盟、散塔林会与领主联盟都各自关心失踪代表或其携带物。",deployableSceneIds:["scn_04b","scn_101"]}],_meta:{sourcePages:[6,19,20],confidence:"high",needsReview:!1}},{id:"hook_pota_delegation",goalRef:"qst_main_pota",priority:10,clues:[{id:"clue_pota_beliard",channel:"npc",content:"代表团在贝利亚德说要先拜访矮人圣地，再去金田。",deployableSceneIds:["scn_101","scn_112"]},{id:"clue_pota_stone_bridge",channel:"environment",content:"他们最后被看见从石桥西端向南进入萨姆伯山丘。",deployableSceneIds:["scn_101","scn_112"]},{id:"clue_pota_shallow_graves",channel:"environment",content:"浅坟与散落物显示代表团遭袭后被不同元素教派瓜分。",deployableSceneIds:["scn_112"]}],_meta:{sourcePages:[6,40,42],confidence:"high",needsReview:!1}},{id:"hook_pota_keeps",goalRef:"qst_main_pota",priority:9,clues:[{id:"clue_pota_spire",channel:"document",content:"空中袭击者携带的地图标出红松镇以东的尖塔与空气教符号。",deployableSceneIds:["scn_12b"]},{id:"clue_pota_rivergard",channel:"npc",content:"被俘匪徒供出河园堡垒的碎颚帮与水教关联。",deployableSceneIds:["scn_12b","scn_18d"]},{id:"clue_pota_scarlet_moon",channel:"item",content:"地狱猎犬项圈的火教符号指向赤月大厅的虚假德鲁伊集会。",deployableSceneIds:["scn_12b","scn_24b"]}],_meta:{sourcePages:[44,45,46,52,69],confidence:"high",needsReview:!1}},{id:"hook_pota_fane",goalRef:"qst_main_pota",priority:9,clues:[{id:"clue_pota_temples_connect",channel:"environment",content:"四座元素神殿在提亚-贝希尔废墟中相互连通，并共同通往更古老的费恩之眼。",deployableSceneIds:["scn_296","scn_463"]},{id:"clue_pota_fane_nodes",channel:"environment",content:"费恩之眼又分别通往嚎叫洞穴、狂泻瀑布、黑色晶洞和哭泣巨人四个元素节点。",deployableSceneIds:["scn_463"]},{id:"clue_pota_one_prophet_fane",channel:"npc",content:"第一位先知败亡后，可由既有选择确定一位剩余先知退守 F21。",deployableSceneIds:["scn_461","scn_4b3"]}],_meta:{sourcePages:[74,115,122],confidence:"high",needsReview:!1}},{id:"hook_pota_portals",goalRef:"qst_main_pota",priority:10,clues:[{id:"clue_pota_nurvureem_weapons",channel:"npc",content:"黑暗女士知道四把元素武器能打开或关闭对应位面的门户。",deployableSceneIds:["scn_6d8"]},{id:"clue_pota_four_portals",channel:"environment",content:"四个元素节点核心各有一座通往内层位面的巨大传送门。",deployableSceneIds:["scn_4bc","scn_4ff","scn_55d","scn_5a8"]},{id:"clue_pota_destroy_keys",channel:"item",content:"执行正确关闭动作会连同先知武器一起摧毁，并放逐尚在物质界的亲王。",deployableSceneIds:["scn_4f9","scn_554","scn_5a3","scn_5ec"]}],_meta:{sourcePages:[6,127,134,140,145,180],confidence:"high",needsReview:!1}}],u=[],f=[{id:"tbl_093_0",name:"早期旅行",purpose:"reference",rows:[{id:"row_093_0_0",kind:"text",text:"2｜—｜鸟羽人 侦察兵*"},{id:"row_093_0_1",kind:"text",text:"—｜2｜1d4 + 1 化形胡狼"},{id:"row_093_0_2",kind:"text",text:"3｜—｜萨穆拉骑士团*"},{id:"row_093_0_3",kind:"text",text:"4｜3｜朝圣者"},{id:"row_093_0_4",kind:"text",text:"—｜4｜1d2 枭熊们"},{id:"row_093_0_5",kind:"text",text:"5｜5｜麋鹿部落猎人*"},{id:"row_093_0_6",kind:"text",text:"6｜6｜1d3 掘地虫"},{id:"row_093_0_7",kind:"text",text:"7｜7｜1d3 + 1 熊地精"},{id:"row_093_0_8",kind:"text",text:"8｜8｜1d4 + 1 兽人"},{id:"row_093_0_9",kind:"text",text:"9｜—｜矮人矿工*"},{id:"row_093_0_10",kind:"text",text:"10｜—｜商队"},{id:"row_093_0_11",kind:"text",text:"11｜—｜农舍*"},{id:"row_093_0_12",kind:"text",text:"12｜9｜空气邪教侦察员"},{id:"row_093_0_13",kind:"text",text:"13｜10｜水教劫掠者*"},{id:"row_093_0_14",kind:"text",text:"14｜11｜土之邪教强盗"},{id:"row_093_0_15",kind:"text",text:"15｜12｜火教派袭击者*"},{id:"row_093_0_16",kind:"text",text:"16｜13｜1d4 + 1 鬣狗人"},{id:"row_093_0_17",kind:"text",text:"17｜—｜牧羊人*"},{id:"row_093_0_18",kind:"text",text:"18｜14｜1d6 + 2 狼"},{id:"row_093_0_19",kind:"text",text:"19｜15｜1d3 食人魔"},{id:"row_093_0_20",kind:"text",text:"—｜16｜1d2 石像鬼"},{id:"row_093_0_21",kind:"text",text:"—｜17｜1d3 + 1 食尸鬼们"},{id:"row_093_0_22",kind:"text",text:"20｜18｜1d2 鹿鹰"},{id:"row_093_0_23",kind:"text",text:"—｜19｜1d3 尸妖"},{id:"row_093_0_24",kind:"text",text:"—｜20｜警惕的骑士*"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_093_1",name:"河流之旅",purpose:"reference",rows:[{id:"row_093_1_0",kind:"text",text:"2–3｜鸟羽人 侦察兵*"},{id:"row_093_1_1",kind:"text",text:"4–5｜空气教空中骑士*"},{id:"row_093_1_2",kind:"text",text:"6–9｜河流海盗*"},{id:"row_093_1_3",kind:"text",text:"10–14｜平底船"},{id:"row_093_1_4",kind:"text",text:"15–16｜1d4 迈罗人鱼"},{id:"row_093_1_5",kind:"text",text:"17–18｜2d4 食尸鬼们"},{id:"row_093_1_6",kind:"text",text:"19–20｜1 水元素"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_093_2",name:"后续旅行",purpose:"reference",rows:[{id:"row_093_2_0",kind:"text",text:"2｜—｜鸟羽人 战团*"},{id:"row_093_2_1",kind:"text",text:"—｜2｜2d6 化形胡狼"},{id:"row_093_2_2",kind:"text",text:"3｜3｜1d3 刺尾狮"},{id:"row_093_2_3",kind:"text",text:"4｜4｜1d3 + 1 巨魔"},{id:"row_093_2_4",kind:"text",text:"5｜5｜麋鹿部落猎人*"},{id:"row_093_2_5",kind:"text",text:"—｜6｜1d8 鬼火"},{id:"row_093_2_6",kind:"text",text:"6｜—｜萨穆拉骑士团*"},{id:"row_093_2_7",kind:"text",text:"7｜—｜农舍*"},{id:"row_093_2_8",kind:"text",text:"—｜7｜1d2 妖鬼们 和 1d4 + 2 食尸鬼们"},{id:"row_093_2_9",kind:"text",text:"8｜8｜1d4 + 1 石像鬼"},{id:"row_093_2_10",kind:"text",text:"9｜9｜空气教空中骑士*"},{id:"row_093_2_11",kind:"text",text:"10｜10｜水之邪教袭击者"},{id:"row_093_2_12",kind:"text",text:"11｜11｜1d6 + 2 熊地精"},{id:"row_093_2_13",kind:"text",text:"12｜12｜火教战争乐队*"},{id:"row_093_2_14",kind:"text",text:"13｜13｜土之邪教掠夺者"},{id:"row_093_2_15",kind:"text",text:"14｜14｜2d4 食人魔"},{id:"row_093_2_16",kind:"text",text:"15｜—｜商队"},{id:"row_093_2_17",kind:"text",text:"—｜15｜1d4 + 1 尸妖"},{id:"row_093_2_18",kind:"text",text:"16｜16｜2d4 魔蝠*"},{id:"row_093_2_19",kind:"text",text:"17｜—｜矮人矿工*"},{id:"row_093_2_20",kind:"text",text:"—｜17｜1d3 初生吸血鬼"},{id:"row_093_2_21",kind:"text",text:"18｜18｜1d3 元素生物*"},{id:"row_093_2_22",kind:"text",text:"19｜19｜1 鲨蜥"},{id:"row_093_2_23",kind:"text",text:"20｜20｜1d2 山丘巨人"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}},{id:"tbl_1aa_0",name:"随机遭遇",purpose:"random",rows:[{id:"row_1aa_0_0",kind:"text",text:"1d3 平民（见区域 K17）",range:[1,1]},{id:"row_1aa_0_1",kind:"text",text:"1d4 匪徒们（见区域K8）",range:[2,2]},{id:"row_1aa_0_2",kind:"text",text:"1d3 碎浪掠夺者（见区域K20）",range:[3,3]},{id:"row_1aa_0_3",kind:"text",text:"1d3 巨鼠",range:[4,4]},{id:"row_1aa_0_4",kind:"text",text:"Drosnin和她的守卫（见区域K15）",range:[5,5]},{id:"row_1aa_0_5",kind:"text",text:"Reash和他的守卫（见区域K9）",range:[6,6]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d6"},{id:"tbl_242_0",name:"随机遭遇",purpose:"random",rows:[{id:"row_242_0_0",kind:"text",text:"1d4 平民（见区域M19）",range:[1,1]},{id:"row_242_0_1",kind:"text",text:"根据结果1，外加1名魔兽人（见区域M18）",range:[2,2]},{id:"row_242_0_2",kind:"text",text:"1d3 圣石僧侣（见区域 M7）",range:[3,3]},{id:"row_242_0_3",kind:"text",text:"1d3 紫腐菌",range:[4,4]},{id:"row_242_0_4",kind:"text",text:"1 穴居攫怪",range:[5,5]},{id:"row_242_0_5",kind:"text",text:"Jurth和1d2 魔兽人（见区域M18）",range:[6,6]},{id:"row_242_0_6",kind:"text",text:"1d3 + 1 灰矮人（见区域M5）",range:[7,8]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d6"},{id:"tbl_2e4_0",name:"随机遭遇",purpose:"random",rows:[{id:"row_2e4_0_0",kind:"text",text:"2d4 嚎叫仇恨的启蒙者（见区域A3）",range:[1,2]},{id:"row_2e4_0_1",kind:"text",text:"1d4 飓风（见区域A20）",range:[3,3]},{id:"row_2e4_0_2",kind:"text",text:"1d2 天织者（见区域 A20）",range:[4,4]},{id:"row_2e4_0_3",kind:"text",text:"1d2 嚎叫仇恨祭司（见区域A3）",range:[5,5]},{id:"row_2e4_0_4",kind:"text",text:"1 天狗（见A12区域）",range:[6,6]},{id:"row_2e4_0_5",kind:"text",text:"无",range:[7,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_301_0",name:"随机遭遇",purpose:"random",rows:[{id:"row_301_0_0",kind:"text",text:"1d6 暗幕魔兽",range:[1,1]},{id:"row_301_0_1",kind:"text",text:"1d4 + 1 锥怪",range:[2,2]},{id:"row_301_0_2",kind:"text",text:"1d4 + 4 穴蜥人",range:[3,3]},{id:"row_301_0_3",kind:"text",text:"1d4 + 1 幽影",range:[4,4]},{id:"row_301_0_4",kind:"text",text:"1 水诡",range:[5,5]},{id:"row_301_0_5",kind:"text",text:"1 甲伏怪",range:[6,6]},{id:"row_301_0_6",kind:"text",text:"无",range:[7,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_315_0",name:"随机遭遇",purpose:"random",rows:[{id:"row_315_0_0",kind:"text",text:"1d4 + 1 食尸鬼们（见区域 C4）",range:[1,1]},{id:"row_315_0_1",kind:"text",text:"1d4 + 4 蜥蜴人（见区域C13）",range:[2,3]},{id:"row_315_0_2",kind:"text",text:"1d2 巨魔（见区域C12）",range:[4,4]},{id:"row_315_0_3",kind:"text",text:"1只巨章鱼（见C3区域）",range:[5,5]},{id:"row_315_0_4",kind:"text",text:"1只龙龟（见C21区域）",range:[6,6]},{id:"row_315_0_5",kind:"text",text:"无",range:[7,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_351_0",name:"随机遭遇",purpose:"random",rows:[{id:"row_351_0_0",kind:"text",text:"1d4 + 4 蜥蜴人（见区域C13）",range:[1,1]},{id:"row_351_0_1",kind:"text",text:"1d4 + 1 碎浪掠夺者（见区域C7）",range:[2,3]},{id:"row_351_0_2",kind:"text",text:"1d3 + 1 熊地精（见区域C18）",range:[4,4]},{id:"row_351_0_3",kind:"text",text:"1 名 破碎波涛祭司 和 1d4 名 邪教徒（见区域 C27）",range:[5,5]},{id:"row_351_0_4",kind:"text",text:"图卢娜·玛 和 2 食人魔（见区域C14）",range:[6,6]},{id:"row_351_0_5",kind:"text",text:"无",range:[7,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_3b6_0",name:"随机遭遇",purpose:"random",rows:[{id:"row_3b6_0_0",kind:"text",text:"1d3 + 1 灰矮人（见区域B5）",range:[1,2]},{id:"row_3b6_0_1",kind:"text",text:"1d4 食人魔（见区域 B16）",range:[3,3]},{id:"row_3b6_0_2",kind:"text",text:"1名融石者和2名黑土守卫（见区域B6）",range:[4,4]},{id:"row_3b6_0_3",kind:"text",text:"1 穴居鲨鱼 和 1d4 邪教徒（见区域B7）",range:[5,5]},{id:"row_3b6_0_4",kind:"text",text:"1名黑土祭司和1d4名黑土守卫（见区域B18）",range:[6,6]},{id:"row_3b6_0_5",kind:"text",text:"米拉吉·维扎恩（见区域B8）",range:[7,7]},{id:"row_3b6_0_6",kind:"text",text:"无",range:[8,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_4cc_0",name:"N4. 风暴裂谷",purpose:"random",rows:[{id:"row_4cc_0_0",kind:"text",text:"无",range:[1,10]},{id:"row_4cc_0_1",kind:"text",text:"风势",range:[11,15]},{id:"row_4cc_0_2",kind:"text",text:"雷鸣",range:[16,18]},{id:"row_4cc_0_3",kind:"text",text:"闪电",range:[19,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_4ff_0",name:"随机遭遇",purpose:"random",rows:[{id:"row_4ff_0_0",kind:"text",text:"1 巨章鱼（见区域 P11）",range:[1,1]},{id:"row_4ff_0_1",kind:"text",text:"1d4 冰魔蝠（见区域P14）",range:[2,3]},{id:"row_4ff_0_2",kind:"text",text:"1 水诡（参见区域 P16）",range:[4,4]},{id:"row_4ff_0_3",kind:"text",text:"1 暗潮骑士 骑着 水诡（见区域 P16）",range:[5,5]},{id:"row_4ff_0_4",kind:"text",text:"1d4 食人鱼群",range:[6,6]},{id:"row_4ff_0_5",kind:"text",text:"无",range:[7,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_55d_0",name:"随机遭遇",purpose:"random",rows:[{id:"row_55d_0_0",kind:"text",text:"1 只穴居鲨鱼骑乘着一只鲨蜥（见区域G13）",range:[1,1]},{id:"row_55d_0_1",kind:"text",text:"1 融石者 和 1d3 + 1 黑土守卫（见区域G12）",range:[2,2]},{id:"row_55d_0_2",kind:"text",text:"1d2 土元素",range:[3,3]},{id:"row_55d_0_3",kind:"text",text:"1 掘土巨怪（从附近的墙壁中爆发出来）",range:[4,4]},{id:"row_55d_0_4",kind:"text",text:"流血的大地",range:[5,5]},{id:"row_55d_0_5",kind:"text",text:"天花板坍塌",range:[6,6]},{id:"row_55d_0_6",kind:"text",text:"水晶突出",range:[7,7]},{id:"row_55d_0_7",kind:"text",text:"狭缝",range:[8,8]},{id:"row_55d_0_8",kind:"text",text:"流石生长",range:[9,9]},{id:"row_55d_0_9",kind:"text",text:"无",range:[10,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_5a8_0",name:"随机遭遇",purpose:"random",rows:[{id:"row_5a8_0_0",kind:"text",text:"1 火元素",range:[1,2]},{id:"row_5a8_0_1",kind:"text",text:"1d8 火童",range:[3,3]},{id:"row_5a8_0_2",kind:"text",text:"1d3 火蜥蜴们（见区域W7）",range:[4,4]},{id:"row_5a8_0_3",kind:"text",text:"地壳破裂",range:[5,5]},{id:"row_5a8_0_4",kind:"text",text:"火焰喷发",range:[6,6]},{id:"row_5a8_0_5",kind:"text",text:"熔岩雨",range:[7,7]},{id:"row_5a8_0_6",kind:"text",text:"烟云",range:[8,8]},{id:"row_5a8_0_7",kind:"text",text:"硫磺云",range:[9,9]},{id:"row_5a8_0_8",kind:"text",text:"无",range:[10,20]}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1},die:"d20"},{id:"tbl_6fa_0",name:"X4. 古老大厅",purpose:"reference",rows:[{id:"row_6fa_0_0",kind:"text",text:"房间｜徽记"},{id:"row_6fa_0_1",kind:"text",text:"西北｜空气"},{id:"row_6fa_0_2",kind:"text",text:"东北｜土"},{id:"row_6fa_0_3",kind:"text",text:"东南｜火焰"},{id:"row_6fa_0_4",kind:"text",text:"西南｜水"}],_meta:{sourcePages:[],confidence:"medium",needsReview:!1}}],p=[],m=[],g=[],h=[],v={formatVersion:1,manifest:e,locations:n,scenes:t,npcs:o,infos:a,encounters:s,quests:i,events:c,achievements:r,treasures:d,lore:l,hooks:_,clocks:u,tables:f,secrets:p,afflictions:m,agendas:g,migrations:h};export{r as achievements,m as afflictions,g as agendas,u as clocks,v as default,s as encounters,c as events,I as formatVersion,_ as hooks,a as infos,n as locations,l as lore,e as manifest,h as migrations,o as npcs,i as quests,t as scenes,p as secrets,f as tables,d as treasures};

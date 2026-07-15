// 时间轴事件数据 - 按人生7个阶段组织
export interface TimelineEvent {
  id: number;
  year: string;
  date: string;
  location: string;
  event: string;
  chapter: string;
  significance: 'high' | 'medium' | 'low';
  stage: number;
}

export const timelineEvents: TimelineEvent[] = [
  // 阶段1: 比勒陀利亚的少年 (1971-1989)
  { id: 1, year: '1971', date: '1971年6月28日', location: '南非比勒陀利亚', event: '埃隆·马斯克出生', chapter: '02', significance: 'high', stage: 1 },
  { id: 2, year: '1974', date: '', location: '南非', event: '外祖父乔舒亚·霍尔德曼教飞行时坠机身亡，埃隆仅3岁', chapter: '01', significance: 'medium', stage: 1 },
  { id: 3, year: '1979', date: '', location: '南非', event: '父母离婚，8岁的埃隆决定搬到父亲埃罗尔那里住，后来深感后悔', chapter: '02', significance: 'high', stage: 1 },
  { id: 4, year: '1983', date: '', location: '南非', event: '12岁参加野外学校(veldskool)，被大孩子殴打，瘦了10磅', chapter: '序章', significance: 'high', stage: 1 },
  { id: 5, year: '1984', date: '1984年12月', location: '南非', event: '13岁编写的游戏《导火线》发表在计算机杂志，获500美元稿费', chapter: '04', significance: 'high', stage: 1 },
  { id: 6, year: '1985', date: '', location: '南非约翰内斯堡', event: '和金博尔参加反种族隔离音乐会，踩过一具头上插刀的尸体旁的血泊', chapter: '序章', significance: 'medium', stage: 1 },
  { id: 7, year: '1987', date: '', location: '南非', event: '16岁第二次去野外学校，身高6英尺，学会一拳打中欺凌者鼻子', chapter: '序章', significance: 'high', stage: 1 },
  { id: 8, year: '1989', date: '1989年6月11日', location: '约翰内斯堡机场', event: '离18岁生日还差两周，离开南非飞往加拿大', chapter: '05', significance: 'high', stage: 1 },

  // 阶段2: 加拿大与大学时代 (1989-1995)
  { id: 9, year: '1989', date: '', location: '加拿大蒙特利尔', event: '抵达加拿大，身上只有4000美元和母亲亲属名单', chapter: '06', significance: 'high', stage: 2 },
  { id: 10, year: '1989', date: '', location: '萨斯喀彻温省', event: '在表哥农场清理粮仓，过18岁生日', chapter: '06', significance: 'medium', stage: 2 },
  { id: 11, year: '1990', date: '1990年秋', location: '加拿大金斯顿', event: '进入女王大学读书，入学第一天遇到至交纳瓦德·法鲁克', chapter: '07', significance: 'high', stage: 2 },
  { id: 12, year: '1992', date: '', location: '美国费城', event: '转学到宾夕法尼亚大学，主修物理学和商科双学位', chapter: '08', significance: 'high', stage: 2 },
  { id: 13, year: '1994', date: '1994年夏', location: '硅谷', event: '在顶峰研究院研究超级电容器，晚上在火箭科学公司做游戏实习', chapter: '09', significance: 'high', stage: 2 },
  { id: 14, year: '1995', date: '1995年夏', location: '硅谷', event: '网景上市市值飙升29亿，决定放弃斯坦福研究生投身互联网', chapter: '09', significance: 'high', stage: 2 },

  // 阶段3: 互联网创业浪潮 (1995-2002)
  { id: 15, year: '1995', date: '', location: '帕洛阿尔托', event: '和金博尔创办Zip2，把企业名录和地图结合，睡在办公室', chapter: '10', significance: 'high', stage: 3 },
  { id: 16, year: '1999', date: '1999年1月', location: '美国', event: '康柏以3.07亿美元收购Zip2，27岁的马斯克得2200万美元', chapter: '10', significance: 'high', stage: 3 },
  { id: 17, year: '1999', date: '1999年3月', location: '帕洛阿尔托', event: '与哈里斯·弗里克创办X.com，向公司投资1200万美元', chapter: '12', significance: 'high', stage: 3 },
  { id: 18, year: '2000', date: '2000年1月', location: '加勒比海圣马丁岛', event: '与贾丝廷·威尔逊结婚', chapter: '11', significance: 'high', stage: 3 },
  { id: 19, year: '2000', date: '2000年3月', location: '美国', event: 'X.com与Confinity合并，马斯克任董事长', chapter: '12', significance: 'high', stage: 3 },
  { id: 20, year: '2000', date: '2000年9月', location: '悉尼', event: '蜜月期间被政变推翻CEO职务，蒂尔接任', chapter: '13', significance: 'high', stage: 3 },
  { id: 21, year: '2001', date: '2001年1月', location: '帕洛阿尔托', event: '患恶性疟疾，住重症监护室十天，五个月未完全康复', chapter: '13', significance: 'high', stage: 3 },
  { id: 22, year: '2002', date: '2002年7月', location: '美国', event: 'eBay以15亿美元收购PayPal，马斯克得约2.5亿美元', chapter: '13', significance: 'high', stage: 3 },

  // 阶段4: 至暗时刻 (2002-2008)
  { id: 23, year: '2002', date: '2002年5月', location: '洛杉矶', event: '成立太空探索技术公司（SpaceX）', chapter: '15', significance: 'high', stage: 4 },
  { id: 24, year: '2002', date: '2002年初', location: '莫斯科', event: '两次赴俄购买火箭失败，返程飞机上决定自己造', chapter: '15', significance: 'high', stage: 4 },
  { id: 25, year: '2002', date: '', location: '洛杉矶', event: '汤姆·穆勒加入SpaceX，成为推进部门负责人', chapter: '17', significance: 'high', stage: 4 },
  { id: 26, year: '2002', date: '', location: '拉古纳比奇', event: '长子内华达出生，10周后因婴儿猝死综合征去世', chapter: '16', significance: 'high', stage: 4 },
  { id: 27, year: '2003', date: '', location: '华盛顿', event: '格温·肖特韦尔加入SpaceX，成为第七名员工', chapter: '19', significance: 'high', stage: 4 },
  { id: 28, year: '2004', date: '2004年3月', location: '洛杉矶', event: '马斯克以640万美元领投Tesla天使轮，任董事会主席', chapter: '20', significance: 'high', stage: 4 },
  { id: 29, year: '2006', date: '2006年3月24日', location: '夸贾林岛', event: '猎鹰1号首次试射，25秒后因螺母腐蚀燃料泄漏坠毁', chapter: '23', significance: 'high', stage: 4 },
  { id: 30, year: '2007', date: '2007年3月', location: '夸贾林岛', event: '猎鹰1号第二次试射，第二级打旋未能入轨', chapter: '23', significance: 'high', stage: 4 },
  { id: 31, year: '2008', date: '2008年春', location: '帕洛阿尔托', event: '与贾丝延正式分居，婚姻破裂', chapter: '26', significance: 'medium', stage: 4 },
  { id: 32, year: '2008', date: '2008年7月', location: '伦敦', event: '在夜店结识妲露拉·莱莉，几周后求婚', chapter: '27', significance: 'high', stage: 4 },
  { id: 33, year: '2008', date: '2008年8月3日', location: '夸贾林岛', event: '猎鹰1号第三次试射失败，第一级撞上第二级', chapter: '28', significance: 'high', stage: 4 },
  { id: 34, year: '2008', date: '2008年秋', location: '美国', event: '恳求朋友和家人提供资金帮Tesla支付工资', chapter: '29', significance: 'high', stage: 4 },

  // 阶段5: 绝处逢生 (2008-2015)
  { id: 35, year: '2008', date: '2008年9月28日', location: '夸贾林岛', event: '猎鹰1号第四次发射成功！第一枚私人火箭进入轨道', chapter: '30', significance: 'high', stage: 5 },
  { id: 36, year: '2008', date: '2008年12月22日', location: '美国', event: 'NASA宣布SpaceX获得16亿美元合同', chapter: '30', significance: 'high', stage: 5 },
  { id: 37, year: '2008', date: '2008年圣诞节前', location: '科罗拉多博尔德', event: '在金博尔家中完成Tesla救命融资，马斯克流下泪水', chapter: '31', significance: 'high', stage: 5 },
  { id: 38, year: '2009', date: '2009年5月', location: '美国', event: '戴姆勒同意向Tesla注资5000万美元，"没有戴姆勒Tesla就倒闭了"', chapter: '31', significance: 'high', stage: 5 },
  { id: 39, year: '2009', date: '2009年6月', location: '美国', event: 'Tesla获得美国能源部4.65亿美元有息贷款', chapter: '31', significance: 'medium', stage: 5 },
  { id: 40, year: '2010', date: '2010年6月', location: '卡纳维拉尔角', event: '猎鹰9号首次试射入轨飞行成功', chapter: '34', significance: 'high', stage: 5 },
  { id: 41, year: '2010', date: '2010年5月', location: '弗里蒙特', event: '以4200万美元买下丰田工厂（原值10亿）', chapter: '36', significance: 'high', stage: 5 },
  { id: 42, year: '2010', date: '2010年6月', location: '纳斯达克', event: 'Tesla上市，自1956年福特以来第一家美国车企IPO', chapter: '36', significance: 'high', stage: 5 },
  { id: 43, year: '2010', date: '2010年9月', location: '苏格兰', event: '与妲露拉·莱莉举办婚礼', chapter: '35', significance: 'medium', stage: 5 },
  { id: 44, year: '2010', date: '2010年12月', location: '卡纳维拉尔角', event: '龙飞船入轨后安全返回，SpaceX成为首个完成此壮举的私营公司', chapter: '34', significance: 'high', stage: 5 },
  { id: 45, year: '2012', date: '2012年6月', location: '弗里蒙特', event: '第一批Model S从装配线下线', chapter: '36', significance: 'high', stage: 5 },
  { id: 46, year: '2012', date: '', location: '美国', event: 'Model S获《汽车趋势》年度最佳汽车，首次颁给电动车', chapter: '36', significance: 'high', stage: 5 },
  { id: 47, year: '2013', date: '', location: '日本', event: '松下同意在超级工厂项目中出资40%，与Tesla合作', chapter: '36', significance: 'high', stage: 5 },
  { id: 48, year: '2015', date: '2015年1月', location: '西雅图', event: '宣布成立SpaceX星链部门，计划发射近地轨道通信卫星', chapter: '52', significance: 'high', stage: 5 },
  { id: 49, year: '2015', date: '年底', location: '美国', event: '与山姆·阿尔特曼共同创办OpenAI，非营利性AI研究实验室', chapter: '40', significance: 'high', stage: 5 },

  // 阶段6: 扩张与黑暗 (2015-2019)
  { id: 50, year: '2016', date: '2016年5月', location: '佛罗里达', event: 'Tesla自动驾驶发生首起致命事故', chapter: '41', significance: 'high', stage: 6 },
  { id: 51, year: '2016', date: '2016年底', location: '香港', event: '萌生Boring Company想法', chapter: '43', significance: 'medium', stage: 6 },
  { id: 52, year: '2017', date: '2017年7月', location: '弗里蒙特', event: 'Model 3开始正式投产，"欢迎来到量产的地狱"', chapter: '45', significance: 'high', stage: 6 },
  { id: 53, year: '2017', date: '2017年9月', location: '美国', event: '宣布SpaceX将开发更大的可重复使用火箭BFR（后更名星舰）', chapter: '53', significance: 'high', stage: 6 },
  { id: 54, year: '2018', date: '2018年3月底', location: '弗里蒙特', event: '格莱姆斯到工厂与马斯克约会，整晚在厂房里走来走去', chapter: '49', significance: 'high', stage: 6 },
  { id: 55, year: '2018', date: '2018年5月10日', location: '上海', event: 'Tesla（上海）有限公司成立', chapter: '50', significance: 'high', stage: 6 },
  { id: 56, year: '2018', date: '2018年7月10日', location: '上海', event: '与上海市政府签署纯电动车项目投资协议', chapter: '50', significance: 'high', stage: 6 },
  { id: 57, year: '2018', date: '2018年8月7日', location: 'Twitter', event: '发推"我考虑以每股420美元将Tesla私有化，资金已到位"', chapter: '47', significance: 'high', stage: 6 },
  { id: 58, year: '2018', date: '2018年9月', location: '美国', event: 'SEC和解：卸任Tesla董事长、罚款4000万美元', chapter: '47', significance: 'high', stage: 6 },
  { id: 59, year: '2018', date: '2018年9月', location: '加州', event: '在《乔·罗根秀》节目中吸食大麻，NASA介入调查', chapter: '48', significance: 'high', stage: 6 },
  { id: 60, year: '2018', date: '2018年底', location: '洛杉矶港附近', event: '决定星舰从碳纤维改用不锈钢制造', chapter: '53', significance: 'high', stage: 6 },
  { id: 61, year: '2019', date: '2019年10月', location: '上海', event: '第一批Tesla从中国工厂下线', chapter: '50', significance: 'high', stage: 6 },
  { id: 62, year: '2019', date: '2019年11月21日', location: '洛杉矶', event: 'Cybertruck发布会，玻璃被砸裂，股价次日跌6%', chapter: '51', significance: 'high', stage: 6 },

  // 阶段7: 狂人时代 (2020-2023)
  { id: 63, year: '2020', date: '2020年5月', location: '卡纳维拉尔角', event: '猎鹰9号将两名NASA宇航员送入空间站，首次私营载人航天', chapter: '57', significance: 'high', stage: 7 },
  { id: 64, year: '2020', date: '2020年5月', location: '美国', event: '儿子X Æ A-12出生，马斯克与格莱姆斯的第一个孩子', chapter: '56', significance: 'medium', stage: 7 },
  { id: 65, year: '2020', date: '2020年底', location: '博卡奇卡', event: 'SpaceX无视FAA天气准则发射，FAA展开调查', chapter: '57', significance: 'medium', stage: 7 },
  { id: 66, year: '2021', date: '2021年5月', location: '纽约', event: '主持《周六夜现场》，首次公开承认患有阿斯伯格综合征', chapter: '61', significance: 'high', stage: 7 },
  { id: 67, year: '2021', date: '2021年7月', location: '奥斯汀', event: '得州超级工厂主体结构完成，1000万平方英尺', chapter: '55', significance: 'high', stage: 7 },
  { id: 68, year: '2021', date: '2021年9月', location: '佛罗里达', event: '灵感4号任务——首次全平民轨道飞行', chapter: '62', significance: 'high', stage: 7 },
  { id: 69, year: '2021', date: '2021年9月', location: '奥斯汀', event: 'Tesla AI Day，Optimus原型机首次亮相', chapter: '64', significance: 'high', stage: 7 },
  { id: 70, year: '2022', date: '2022年初', location: '乌克兰', event: '向乌克兰提供星链服务支持通信', chapter: '70', significance: 'high', stage: 7 },
  { id: 71, year: '2022', date: '2022年2月', location: '美国', event: '与比尔·盖茨因做空Tesla而决裂', chapter: '71', significance: 'medium', stage: 7 },
  { id: 72, year: '2022', date: '2022年4月4日', location: '美国', event: '披露持有Twitter 9%股份', chapter: '72', significance: 'high', stage: 7 },
  { id: 73, year: '2022', date: '2022年4月14日', location: '美国', event: '正式提出以440亿美元收购Twitter', chapter: '73', significance: 'high', stage: 7 },
  { id: 74, year: '2022', date: '2022年10月26日', location: '旧金山', event: '抱着水槽进入Twitter总部，"我可把水槽抱进来啦"', chapter: '81', significance: 'high', stage: 7 },
  { id: 75, year: '2022', date: '2022年10月27日', location: '旧金山', event: '正式完成440亿美元收购Twitter，解雇CEO等高管', chapter: '82', significance: 'high', stage: 7 },
  { id: 76, year: '2022', date: '2022年11月3-4日', location: 'Twitter全球', event: '第一轮大规模裁员，约50%员工被裁', chapter: '82', significance: 'high', stage: 7 },
  { id: 77, year: '2022', date: '2022年11月16日', location: 'Twitter', event: '发出"硬核"最后通牒邮件', chapter: '87', significance: 'high', stage: 7 },
  { id: 78, year: '2022', date: '2022年12月2日', location: '美国', event: 'Twitter Files第一篇发布', chapter: '90', significance: 'high', stage: 7 },
  { id: 79, year: '2022', date: '2022年12月22-25日', location: '萨克拉门托', event: '圣诞节"盗窃案"——连夜转移700多个服务器机架', chapter: '92', significance: 'high', stage: 7 },
  { id: 80, year: '2023', date: '2023年3月', location: '美国', event: '创立X.AI公司，正式加入AI军备竞赛', chapter: '94', significance: 'high', stage: 7 },
  { id: 81, year: '2023', date: '2023年4月20日', location: '博卡奇卡星际基地', event: '星舰首次试验性发射——升空4分钟后空中自毁爆炸', chapter: '95', significance: 'high', stage: 7 },
  { id: 82, year: '2023', date: '2023年5月', location: '美国', event: 'Neuralink获FDA批准开始人体临床试验', chapter: '95', significance: 'high', stage: 7 },
];

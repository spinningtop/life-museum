// 人物星图数据
// 基于沃尔特·艾萨克森《埃隆·马斯克传》史实整理

/**
 * 人物节点
 * id: 0 为主角本人（埃隆·马斯克），居中显示
 * ring: 圈层 1=至亲至近（内圈）2=重要人物（中圈）3=次要/间接（外圈）
 */
export interface Person {
  id: number;            // 0 为主角本人
  name: string;          // 姓名
  title: string;         // 身份标签（如"母亲"、"弟弟"、"前妻"、"合伙人"）
  intro: string;         // 一句话简介
  ring: 1 | 2 | 3;       // 圈层：1=至亲至近，2=重要人物，3=次要/间接
  color: string;         // 专属颜色
}

/**
 * 人物关系
 * fromId / toId: 关系双方 id（0 为主角）
 * intensity: 关系强度，影响连线粗细与颜色透明度
 */
export interface Relationship {
  id: number;
  fromId: number;        // 关系一方（0 为主角）
  toId: number;          // 关系另一方
  type: string;          // 关系类型（如"母子"、"兄弟"、"夫妻"、"合伙人"、"政敌"）
  description: string;   // 详细关系描述（点击线条时显示，50-120字）
  intensity: 'high' | 'medium' | 'low';  // 关系强度（影响线条粗细/颜色）
}

// 圈层对应颜色
// ring1 火星红（至亲）、ring2 月光蓝（重要）、ring3 紫（次要），主角为月光白
const COLOR_RING1 = '#e63946';
const COLOR_RING2 = '#a8dadc';
const COLOR_RING3 = '#6C3483';
const COLOR_HERO = '#f1faee';

// 人物清单：主角 + 18 位相关人物
export const people: Person[] = [
  // ===== 主角（居中） =====
  {
    id: 0,
    name: '埃隆·马斯克',
    title: '主角',
    intro: '科技狂人，Tesla、SpaceX、X 等多家颠覆性公司的掌舵者，火星殖民梦想的执念者。',
    ring: 1, // 主角圈层无实际意义，仅占位
    color: COLOR_HERO,
  },

  // ===== ring 1 内圈·至亲至近 =====
  {
    id: 1,
    name: '梅耶·马斯克',
    title: '母亲',
    intro: '南非裔加拿大模特与营养师，独立抚养三子，是马斯克一生的精神支柱。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 2,
    name: '埃罗尔·马斯克',
    title: '父亲',
    intro: '南非工程师，精神虐待者，马斯克"恶魔模式"的性格根源。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 3,
    name: '金巴尔·马斯克',
    title: '弟弟',
    intro: '至亲兄弟，Zip2、Tesla 董事会合伙人，少数敢于直言劝阻马斯克的人。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 4,
    name: '托斯卡·马斯克',
    title: '妹妹',
    intro: '影视制作人，马斯克家族的情感纽带，较少涉足商业。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 5,
    name: '贾斯汀·威尔逊',
    title: '前妻',
    intro: '女王大学初恋，2000年结婚生六子，2008年离婚大战的主角。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 6,
    name: '格莱姆斯',
    title: '伴侣',
    intro: '加拿大音乐人，X Æ A-12 之母，与马斯克在 AI 与艺术领域共鸣。',
    ring: 1,
    color: COLOR_RING1,
  },

  // ===== ring 2 中圈·重要人物 =====
  {
    id: 7,
    name: '彼得·蒂尔',
    title: 'PayPal 合伙人',
    intro: '保守派风投教父，PayPal 黑手党的核心，马斯克在硅谷的导师级人物。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 8,
    name: '格温·肖特维尔',
    title: 'SpaceX 总裁',
    intro: 'SpaceX 总裁兼 COO，"让马斯克梦想落地的人"，撑起商业奇迹。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 9,
    name: 'JB·斯特劳贝尔',
    title: 'Tesla 联合创始人',
    intro: 'Tesla 联合创始人兼 CTO，电池技术核心，2019年离开创办回收公司。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 10,
    name: '金特里·马斯克',
    title: 'SolarCity 联合创始人',
    intro: '马斯克表兄弟，SolarCity 联合创始人，清洁能源版图的关键拼图。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 11,
    name: '扎克·柯霍恩',
    title: 'Twitter 法律顾问',
    intro: 'Twitter/X 法律顾问，2022年收购战的核心执行者。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 12,
    name: '希冯·齐里斯',
    title: 'Neuralink 高管',
    intro: 'Neuralink 高管，2021年为马斯克诞下龙凤胎，被称为"工作伴侣"。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 13,
    name: '拉里·埃里森',
    title: 'Oracle 创始人',
    intro: 'Oracle 创始人，Tesla 早期投资人兼董事，硅谷力挺马斯克的重量级人物。',
    ring: 2,
    color: COLOR_RING2,
  },

  // ===== ring 3 外圈·次要/间接人物 =====
  {
    id: 14,
    name: '马丁·埃伯哈德',
    title: 'Tesla 联合创始人',
    intro: 'Tesla 首任 CEO，2007年被马斯克联合董事会驱逐出自己创办的公司。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 15,
    name: '阿肖克·沃斯瓦',
    title: 'Tesla FSD 负责人',
    intro: 'Tesla FSD 负责人，马斯克亲自培养的新一代 AI 工程师代表。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 16,
    name: '德尼斯·米尔豪斯',
    title: 'Twitter 收购财务安排人',
    intro: '马斯克家族旧交，在440亿美元收购 Twitter 的融资中扮演关键中间人。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 17,
    name: '比尔·盖茨',
    title: '公开对手',
    intro: '做空 Tesla 股票，被马斯克公开嘲讽"对电动车一无所知"的科技巨头。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 18,
    name: '马克·扎克伯格',
    title: '约战对象',
    intro: 'Meta 创始人，因 Threads 竞争被马斯克约战"八角笼格斗"。',
    ring: 3,
    color: COLOR_RING3,
  },
];

// 人物关系清单
// 主线：主角（id=0）与每位人物的关系（18条）
// 副线：人物之间的关系（4条）
export const relationships: Relationship[] = [
  // ===== 主线关系（主角 ↔ 各人物） =====
  {
    id: 1,
    fromId: 0,
    toId: 1,
    type: '母子',
    description: '梅耶独立抚养三子，在马斯克最艰难的2008年（SpaceX、Tesla 双双濒临破产）拿出全部积蓄支持儿子。她是马斯克一生的精神支柱，"我从未见她流露出软弱"。',
    intensity: 'high',
  },
  {
    id: 2,
    fromId: 0,
    toId: 2,
    type: '父子',
    description: '埃罗尔是工程师也是精神虐待者，童年带马斯克观看残酷的生存训练。马斯克称父亲为"恶魔"，其反复无常的"恶魔模式"成为马斯克性格中阴影与驱力的双重根源。',
    intensity: 'high',
  },
  {
    id: 3,
    fromId: 0,
    toId: 3,
    type: '兄弟',
    description: '金巴尔是马斯克最亲密的兄弟与合伙人，从 Zip2 到 Tesla 董事会始终相伴。两人共同经历童年创伤，金巴尔是少数敢于直言劝阻马斯克的人，"他不听别人，但会听我"。',
    intensity: 'high',
  },
  {
    id: 4,
    fromId: 0,
    toId: 4,
    type: '兄妹',
    description: '托斯卡是马斯克的妹妹，影视制作人。家族纽带紧密，她在马斯克家族的日常情感支持中扮演重要角色，但较少涉足商业决策，是家族温情的一面镜子。',
    intensity: 'medium',
  },
  {
    id: 5,
    fromId: 0,
    toId: 5,
    type: '夫妻',
    description: '贾斯汀是马斯克在女王大学的初恋，2000年结婚生下六子（其一夭折）。2008年离婚大战对簿公堂，她要求"像对待丈夫一样对待我"，是马斯克情感生活的重要转折点。',
    intensity: 'high',
  },
  {
    id: 6,
    fromId: 0,
    toId: 6,
    type: '伴侣',
    description: '格莱姆斯是加拿大音乐人，2018年公开恋情。X Æ A-12 之母，与马斯克在 AI、艺术、模拟宇宙理论领域思想共鸣，多次分合，关系充满戏剧性与思想张力。',
    intensity: 'high',
  },
  {
    id: 7,
    fromId: 0,
    toId: 7,
    type: '合伙人',
    description: '彼得·蒂尔是 PayPal 时期的合伙人兼导师，保守派风投教父。两人在 PayPal 黑手党中分庭抗礼，蒂尔为马斯克引入硅谷人脉与政治资源，"我们都是 difficult 的男人"。',
    intensity: 'medium',
  },
  {
    id: 8,
    fromId: 0,
    toId: 8,
    type: '拍档',
    description: '格温·肖特维尔2002年加入 SpaceX 任总裁兼 COO，是"让马斯克梦想落地的人"。她以卓越运营能力平衡马斯克的疯狂愿景，撑起 SpaceX 从濒亡到火箭回收的商业奇迹。',
    intensity: 'high',
  },
  {
    id: 9,
    fromId: 0,
    toId: 9,
    type: '合伙人',
    description: 'JB·斯特劳贝尔是 Tesla 联合创始人兼 CTO，电池技术核心。从2004年起与马斯克并肩15年，是 Tesla 技术灵魂，2019年离开创办电池回收公司 Redwood Materials。',
    intensity: 'high',
  },
  {
    id: 10,
    fromId: 0,
    toId: 10,
    type: '亲族',
    description: '金特里是马斯克的表兄弟，SolarCity 联合创始人。马斯克为其提供构想与资金，SolarCity 后来并入 Tesla，是马斯克清洁能源版图（太阳+储能+电动车）的关键拼图。',
    intensity: 'medium',
  },
  {
    id: 11,
    fromId: 0,
    toId: 11,
    type: '拍档',
    description: '扎克·柯霍恩是 Twitter/X 法律顾问，2022年收购战核心人物。在马斯克试图反悔引发的诉讼中为他出谋划策，是440亿美元收购 Twitter 的关键执行者与亲信。',
    intensity: 'medium',
  },
  {
    id: 12,
    fromId: 0,
    toId: 12,
    type: '伴侣',
    description: '希冯·齐里斯是 Neuralink 高管，2021年为马斯克诞下龙凤胎。被马斯克称为"工作伴侣"，关系介于恋人与同事之间，引发关于职场伦理与权力边界的争议。',
    intensity: 'high',
  },
  {
    id: 13,
    fromId: 0,
    toId: 13,
    type: '投资人',
    description: '拉里·埃里森是 Oracle 创始人，Tesla 早期投资人兼董事。在马斯克与 SEC 冲突、"特斯拉私有化"风波时公开力挺，是硅谷少数敢于为马斯克背书的重量级人物。',
    intensity: 'medium',
  },
  {
    id: 14,
    fromId: 0,
    toId: 14,
    type: '合伙人',
    description: '马丁·埃伯哈德是 Tesla 联合创始人首任 CEO，2007年被马斯克联合董事会驱逐出自己创办的公司。两人对"谁是 Tesla 真正创始人"的名号之争持续至今。',
    intensity: 'medium',
  },
  {
    id: 15,
    fromId: 0,
    toId: 15,
    type: '师徒',
    description: '阿肖克·沃斯瓦是 Tesla FSD 负责人，新一代工程师代表。马斯克亲自培养的 AI 骨干，是马斯克"硬核工作文化"的忠实执行者，常被马斯克在深夜邮件中点名调度。',
    intensity: 'low',
  },
  {
    id: 16,
    fromId: 0,
    toId: 16,
    type: '拍档',
    description: '德尼斯·米尔豪斯家族为 Twitter 收购提供财务安排。马斯克家族旧交，在2022年440亿美元收购 Twitter 的融资中扮演关键中间人，连接马斯克与华尔街资本。',
    intensity: 'low',
  },
  {
    id: 17,
    fromId: 0,
    toId: 17,
    type: '政敌',
    description: '比尔·盖茨做空 Tesla 股票，被马斯克公开嘲讽"对电动车一无所知"。两人在气候变化、AI 立场等多领域相左，是科技巨头间罕见的公开对手与口水战常客。',
    intensity: 'low',
  },
  {
    id: 18,
    fromId: 0,
    toId: 18,
    type: '对手',
    description: '扎克伯格是 Meta 创始人，2023年因 Threads 与 Twitter 竞争，马斯克约战"八角笼格斗"（cages match）。这场世纪约战最终沦为口水战，却引爆全球围观。',
    intensity: 'low',
  },

  // ===== 副线关系（人物之间） =====
  {
    id: 19,
    fromId: 1,
    toId: 2,
    type: '前夫妻',
    description: '梅耶与埃罗尔1970年结婚，1979年离婚。离婚后埃罗尔获得马斯克的抚养权，梅耶多年努力夺回未果，这段破裂婚姻是马斯克家族悲剧与创伤的起点。',
    intensity: 'high',
  },
  {
    id: 20,
    fromId: 3,
    toId: 4,
    type: '兄妹',
    description: '金巴尔与托斯卡是马斯克的弟妹，兄妹三人关系紧密，常在家族聚会与商业活动中共同现身，共同维系马斯克家族的情感纽带与日常温度。',
    intensity: 'medium',
  },
  {
    id: 21,
    fromId: 5,
    toId: 6,
    type: '前后任',
    description: '贾斯汀与格莱姆斯分别是马斯克的前妻与伴侣。两人在2021年因希冯·齐里斯诞下龙凤胎事件公开争执，是马斯克复杂情感关系的两个端点。',
    intensity: 'medium',
  },
  {
    id: 22,
    fromId: 9,
    toId: 14,
    type: '同僚',
    description: 'JB·斯特劳贝尔与马丁·埃伯哈德同为 Tesla 早期联合创始人。2007年埃伯哈德被驱逐时 JB 选择留下，两人分道扬镳，奠定 Tesla 后来的技术路线与权力格局。',
    intensity: 'low',
  },
];

// 人物星图数据
// 数据来源：沃尔特·艾萨克森《史蒂夫·乔布斯传》（中信出版社2011年10月第1版）
// 共18位人物（含主角），分3层同心圆；关系24条

/**
 * 人物节点
 * id: 0 为主角本人（乔布斯），居中显示
 * ring: 圈层 1=至亲至近（内圈）2=重要人物（中圈）3=次要/间接（外圈）
 */
export interface Person {
  id: number;
  name: string;
  title: string;
  intro: string;
  ring: 1 | 2 | 3;
  color: string;
}

/**
 * 人物关系
 * fromId / toId: 关系双方 id（0 为主角）
 * intensity: 关系强度，影响连线粗细与颜色透明度
 */
export interface Relationship {
  id: number;
  fromId: number;
  toId: number;
  type: string;
  description: string;
  intensity: 'high' | 'medium' | 'low';
}

// 圈层对应颜色
// ring1 银白（至亲）、ring2 深空蓝（重要）、ring3 银灰（次要），主角为苹果银
const COLOR_RING1 = '#E5E7EB';
const COLOR_RING2 = '#60A5FA';
const COLOR_RING3 = '#9CA3AF';
const COLOR_HERO = '#C0C0C0';

export const people: Person[] = [
  // ===== 主角（居中） =====
  {
    id: 0,
    name: '史蒂夫·乔布斯',
    title: '主角',
    intro: '苹果公司联合创始人，追求完美的产品艺术家。以现实扭曲力场和极简美学，颠覆了个人电脑、动画、音乐、手机、平板与数字出版六大产业。',
    ring: 1,
    color: COLOR_HERO,
  },

  // ===== ring 1 内圈·至亲 =====
  {
    id: 1,
    name: '保罗·乔布斯',
    title: '养父',
    intro: '威斯康星州出生的海岸警卫队队员、机械师。1955年与妻子克拉拉领养史蒂夫，在车库里向儿子传授机械与电子知识，灌输追求完美的工匠精神。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 2,
    name: '克拉拉·乔布斯',
    title: '养母',
    intro: '亚美尼亚移民后代，1946年与保罗结婚。因宫外孕丧失生育能力，1955年领养史蒂夫。乔布斯称她"百分之一千是我的母亲"。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 3,
    name: '劳伦·鲍威尔',
    title: '妻子',
    intro: '宾州大学毕业，曾任职高盛，后就读斯坦福商学院。1991年与乔布斯结婚，善解人意，是乔布斯病中最重要的精神支撑。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 4,
    name: '史蒂夫·沃兹尼亚克',
    title: '创业合伙人',
    intro: '家园高中的明星电子极客，Apple II的设计者。与乔布斯从蓝盒子到苹果合作一生，性格温良，是乔布斯的技术灵魂搭档。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 5,
    name: '乔纳森·艾夫',
    title: '创意搭档',
    intro: '苹果首席设计师，乔布斯的创意灵魂伙伴。两人共同打造了iMac、iPod、iPhone等划时代产品，情同手足。',
    ring: 1,
    color: COLOR_RING1,
  },

  // ===== ring 2 中圈·重要 =====
  {
    id: 6,
    name: '迈克·马库拉',
    title: '导师·董事长',
    intro: '苹果第一位大股东和董事长，1977年投资25万美元，对乔布斯形同慈父，是苹果早期的关键守护者。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 7,
    name: '约翰·斯卡利',
    title: '盟友转对手',
    intro: '前百事高管，1983年被乔布斯挖到苹果任CEO，后双方决裂，1985年把乔布斯排挤出局。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 8,
    name: '蒂姆·库克',
    title: '接班人',
    intro: '1998年被乔布斯聘为首席运营官，冷静果断。2011年接任CEO，成为乔布斯钦定的接班人。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 9,
    name: '丽莎·布伦南-乔布斯',
    title: '女儿',
    intro: '乔布斯与克里斯安的女儿，生于1978年，最初不被乔布斯承认，后父女关系修复。苹果"丽萨"电脑即以她命名。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 10,
    name: '克里斯安·布伦南',
    title: '前女友',
    intro: '乔布斯在家园高中的女朋友，丽莎的母亲，与乔布斯一生关系复杂纠葛。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 11,
    name: '比尔·盖茨',
    title: '竞争对手',
    intro: '1955年出生的另一位电脑天才，与乔布斯亦敌亦友，因Windows图形界面与Mac的渊源结下半生竞争。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 12,
    name: '约翰·拉塞特',
    title: '皮克斯搭档',
    intro: '皮克斯的联合创始人及创新主力，动画天才，与乔布斯对艺术完美的追求不相上下。',
    ring: 2,
    color: COLOR_RING2,
  },

  // ===== ring 3 外圈·次要 =====
  {
    id: 13,
    name: '阿卜杜勒法塔赫·钱德里',
    title: '生父',
    intro: '叙利亚出生，威斯康星大学硕士，乔布斯的生父。乔布斯终身未与他正式相认，曾不知情地在赌场餐厅被他服务。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 14,
    name: '丹尼尔·科特基',
    title: '挚友',
    intro: '乔布斯在里德学院最好的朋友，两人一起去印度朝圣，早期苹果雇员，却未获IPO前员工期权。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 15,
    name: '埃德温·卡特穆尔',
    title: '皮克斯联合创始人',
    intro: '皮克斯的联合创始人，技术先驱，后成为迪士尼高管，与乔布斯共同奠定皮克斯基业。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 16,
    name: '莫娜·辛普森',
    title: '妹妹',
    intro: '乔布斯同父同母的妹妹，小说家。1986年两人相认后关系日益密切，几部小说均以家人为蓝本。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 17,
    name: '罗恩·韦恩',
    title: '早期合伙人',
    intro: '在雅达利与乔布斯相识，成为苹果初创期第三个合伙人，但不明智地放弃了他在苹果的股权。',
    ring: 3,
    color: COLOR_RING3,
  },
];

export const relationships: Relationship[] = [
  { id: 1, fromId: 0, toId: 1, type: '养父子', description: '保罗与妻子克拉拉于1955年领养史蒂夫，在山景城车库里为他辟出工作台，传授机械手艺与追求完美的工匠精神，是乔布斯一生设计哲学的源头。', intensity: 'high' },
  { id: 2, fromId: 0, toId: 2, type: '养母子', description: '克拉拉因宫外孕无法生育，1955年领养史蒂夫。乔布斯称她"百分之一千是我的母亲"，凡有人称她为养母便会异常愤怒。', intensity: 'high' },
  { id: 3, fromId: 0, toId: 3, type: '夫妻', description: '劳伦1991年嫁给乔布斯，育有三个子女。她善解人意性情温良，在乔布斯确诊癌症后发动亲友说服他接受手术，是他晚年最重要的精神支柱。', intensity: 'high' },
  { id: 4, fromId: 0, toId: 4, type: '创业合伙人', description: '两人1968年相识，从蓝盒子到Apple I、Apple II合作无间。沃兹是技术天才，乔布斯是营销远见者，"沃兹的工程+乔布斯的远见"成就了苹果。', intensity: 'high' },
  { id: 5, fromId: 0, toId: 5, type: '创意搭档', description: '艾夫是苹果首席设计师，1997年乔布斯回归后两人成为创意灵魂伙伴，共同打造iMac、iPod、iPhone，乔布斯称其拥有"艺术家的纯粹品质"。', intensity: 'high' },
  { id: 6, fromId: 0, toId: 6, type: '导师', description: '马库拉1977年投资25万美元并任董事长，对乔布斯形同慈父。他教会乔布斯营销与管理，是苹果早期最关键的守护者。', intensity: 'high' },
  { id: 7, fromId: 0, toId: 7, type: '盟友转对手', description: '1983年乔布斯以"卖糖水还是改变世界"挖角斯卡利任CEO，两人却渐生矛盾。1985年斯卡利联合董事会将乔布斯排挤出局，友谊彻底破裂。', intensity: 'high' },
  { id: 8, fromId: 0, toId: 8, type: '接班人', description: '1998年乔布斯聘库克为首席运营官，库克以冷静果断整顿供应链。乔布斯病休期间他稳住公司，最终被钦定为接班人，2011年接任CEO。', intensity: 'high' },
  { id: 9, fromId: 0, toId: 9, type: '父女', description: '丽莎生于1978年，乔布斯初期否认父女关系，甚至曾上庭作证。后承认并接她同住，父女关系历经曲折才修复，苹果电脑"丽萨"即以她命名。', intensity: 'medium' },
  { id: 10, fromId: 0, toId: 10, type: '前女友', description: '克里斯安是乔布斯在家园高中的女朋友，丽莎的母亲。两人分分合合关系终生纠葛，乔布斯曾长期拒绝承认女儿并拒绝承担抚养责任。', intensity: 'medium' },
  { id: 11, fromId: 0, toId: 11, type: '竞争对手', description: '盖茨与乔布斯同为1955年生人，亦敌亦友。Mac图形界面被Windows"借鉴"结下半生竞争，乔布斯怒斥盖茨"毫无品位"，却又在1997年达成合作。', intensity: 'medium' },
  { id: 12, fromId: 0, toId: 12, type: '皮克斯搭档', description: '拉塞特是皮克斯的创意灵魂，乔布斯买下皮克斯后与他惺惺相惜，两人对艺术完美的追求不相上下，共同缔造了《玩具总动员》的奇迹。', intensity: 'medium' },
  { id: 13, fromId: 0, toId: 13, type: '生父', description: '钱德里是乔布斯的叙利亚裔生父，曾不知情地在乔布斯光顾的赌场餐厅担任餐饮经理。乔布斯终身未与他正式相认，称亲生父母只是"精子库和卵子库"。', intensity: 'low' },
  { id: 14, fromId: 0, toId: 14, type: '挚友', description: '科特基是乔布斯在里德学院的挚友，两人同赴印度朝圣，是早期苹果雇员。但乔布斯未给他IPO前员工期权，称"他是按小时拿钱的员工"，令友谊蒙上阴影。', intensity: 'medium' },
  { id: 15, fromId: 0, toId: 15, type: '皮克斯合作者', description: '卡特穆尔是皮克斯联合创始人，与乔布斯共同经营皮克斯。他专注技术与管理，与乔布斯的强势控制欲时有摩擦，却共同奠定动画帝国基业。', intensity: 'medium' },
  { id: 16, fromId: 0, toId: 16, type: '兄妹', description: '莫娜是乔布斯同父同母的妹妹，1986年相认后关系日益密切。她是小说家，几部作品以家人为蓝本，乔布斯去世前她守在病榻旁。', intensity: 'medium' },
  { id: 17, fromId: 0, toId: 17, type: '早期合伙人', description: '韦恩在雅达利与乔布斯相识，成为苹果初创期第三个合伙人，持10%股份。但11天后因畏惧风险退出，以800美元卖掉股权，错失日后数十亿财富。', intensity: 'low' },
  { id: 18, fromId: 1, toId: 2, type: '夫妻', description: '保罗与克拉拉1946年结婚，厮守40余年直至死亡将他们分开。两人因无法生育而领养史蒂夫，共同为他营造了充满工匠气息的童年。', intensity: 'high' },
  { id: 19, fromId: 4, toId: 17, type: '初创合伙人', description: '1976年4月1日，沃兹、乔布斯与韦恩三人在韦恩公寓签署苹果合伙协议，韦恩居中调停两人分歧。11天后韦恩退出，留下乔布斯与沃兹并肩前行。', intensity: 'low' },
  { id: 20, fromId: 6, toId: 7, type: '引荐与决裂', description: '马库拉引荐斯卡利出任苹果CEO，本意辅佐乔布斯。1985年权力斗争中，马库拉最终选择支持斯卡利，成为把乔布斯逐出苹果的关键一票。', intensity: 'medium' },
  { id: 21, fromId: 9, toId: 10, type: '母女', description: '克里斯安独自抚养丽莎长大，母女相依为命。在乔布斯拒绝承认女儿的岁月里，她靠打零工和政府救济度日，后与丽莎的关系始终亲密。', intensity: 'medium' },
  { id: 22, fromId: 12, toId: 15, type: '皮克斯双核', description: '拉塞特与卡特穆尔是皮克斯的创意与技术双核，原在卢卡斯影业共事。乔布斯买下公司后，两人共同将皮克斯从硬件公司变为动画巨头。', intensity: 'medium' },
  { id: 23, fromId: 13, toId: 16, type: '父女', description: '钱德里与乔安妮结婚后生下莫娜。莫娜长大后成为小说家，在1986年与乔布斯相认，揭开了兄妹同根的家族秘密。', intensity: 'medium' },
  { id: 24, fromId: 11, toId: 7, type: '授权与借鉴', description: '1985年乔布斯刚被逐，斯卡利便与微软签订图形界面授权协议，让Windows得以"合法借鉴"Mac界面，成为乔布斯终生耿耿于怀的痛。', intensity: 'low' },
];

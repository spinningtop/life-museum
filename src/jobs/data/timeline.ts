// 人生时间轴数据
// 数据来源：沃尔特·艾萨克森《史蒂夫·乔布斯传》（中信出版社2011年10月第1版）
// 按人生4个阶段组织，共42个事件

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
  // ===== 阶段1：少年时代（1955-1974） =====
  { id: 1, year: '1955', date: '1955年2月24日', location: '旧金山', event: '出生于旧金山，生母乔安妮·席贝尔为未婚研究生，生父阿卜杜勒法塔赫·钱德里为叙利亚移民', chapter: '一', significance: 'high', stage: 1 },
  { id: 2, year: '1955', date: '1955年', location: '旧金山', event: '被保罗·乔布斯和克拉拉·乔布斯夫妇领养，养父母承诺送他上大学', chapter: '一', significance: 'high', stage: 1 },
  { id: 3, year: '1961', date: '', location: '山景城', event: '随家人搬到硅谷山景城，父亲在车库里为他辟出工作台，传授机械与电子知识', chapter: '一', significance: 'medium', stage: 1 },
  { id: 4, year: '1967', date: '', location: '山景城', event: '入读家园高中，四年级老师希尔夫人用棒棒糖激发他的学习热情，测出他已达高中二年级水平', chapter: '一', significance: 'low', stage: 1 },
  { id: 5, year: '1968', date: '1968年', location: '山景城', event: '通过比尔·费尔南德斯结识斯蒂芬·沃兹尼亚克，两人在车库前人行道上一见如故', chapter: '二', significance: 'high', stage: 1 },
  { id: 6, year: '1971', date: '1971年9月', location: '森尼韦尔', event: '与沃兹尼亚克制造并销售"蓝盒子"免费电话装置，确立了两人合作的模式', chapter: '二', significance: 'high', stage: 1 },
  { id: 7, year: '1972', date: '1972年秋', location: '波特兰', event: '进入里德学院就读，一学期后退学，转为旁听生，选修书法课', chapter: '三', significance: 'medium', stage: 1 },
  { id: 8, year: '1972', date: '', location: '波特兰', event: '在里德学院接触禅宗与东方哲学，结识灵魂导师乙川弘文禅师，并结交挚友丹尼尔·科特基', chapter: '三', significance: 'medium', stage: 1 },
  { id: 9, year: '1974', date: '1974年', location: '印度', event: '与科特基赴印度朝圣七个月，追寻精神启蒙，归来后更坚定地信奉禅宗极简主义', chapter: '四', significance: 'medium', stage: 1 },
  { id: 10, year: '1974', date: '', location: '森尼韦尔', event: '加入雅达利公司担任技术员，老板诺兰·布什内尔与阿尔·奥尔康成为他的企业家启蒙者', chapter: '四', significance: 'medium', stage: 1 },

  // ===== 阶段2：苹果创立与崛起（1975-1985） =====
  { id: 11, year: '1975', date: '', location: '森尼韦尔', event: '跟随沃兹参加家酿计算机俱乐部，意识到个人电脑的商业潜力', chapter: '五', significance: 'medium', stage: 2 },
  { id: 12, year: '1976', date: '1976年4月1日', location: '洛斯阿尔托斯', event: '与沃兹尼亚克、罗恩·韦恩创立苹果电脑公司，在自家车库组装Apple I', chapter: '五', significance: 'high', stage: 2 },
  { id: 13, year: '1976', date: '', location: '洛斯阿尔托斯', event: '沃兹完成Apple I电路板，乔布斯以666.66美元定价出售，共卖出约200台', chapter: '五', significance: 'medium', stage: 2 },
  { id: 14, year: '1977', date: '1977年', location: '库比蒂诺', event: '迈克·马库拉投资25万美元并任董事长，苹果公司正式注册，发布Apple II', chapter: '六', significance: 'medium', stage: 2 },
  { id: 15, year: '1978', date: '1978年', location: '俄勒冈', event: '与女友克里斯安·布伦南的女儿丽莎出生，乔布斯初期否认父女关系', chapter: '七', significance: 'medium', stage: 2 },
  { id: 16, year: '1979', date: '1979年12月', location: '帕洛阿尔托', event: '参观施乐PARC，目睹图形用户界面与鼠标技术，决心将其商品化', chapter: '八', significance: 'medium', stage: 2 },
  { id: 17, year: '1980', date: '1980年12月12日', location: '纽约', event: '苹果公司上市，造就自福特汽车以来最火爆的IPO，乔布斯身价逾2亿美元', chapter: '九', significance: 'medium', stage: 2 },
  { id: 18, year: '1981', date: '', location: '库比蒂诺', event: '接管杰夫·拉斯金的Macintosh项目，组建精英团队打造平民化图形电脑', chapter: '十', significance: 'medium', stage: 2 },
  { id: 19, year: '1983', date: '1983年', location: '纽约', event: '以"你想卖一辈子糖水，还是改变世界"挖角百事总裁约翰·斯卡利出任苹果CEO', chapter: '十四', significance: 'medium', stage: 2 },
  { id: 20, year: '1984', date: '1984年1月24日', location: '库比蒂诺', event: '麦金塔电脑发布，"1984"广告轰动，电脑首次"开口自我介绍"，引发欢呼', chapter: '十五', significance: 'high', stage: 2 },
  { id: 21, year: '1985', date: '1985年5月', location: '库比蒂诺', event: '与斯卡利权力斗争失败，董事会支持斯卡利，乔布斯被剥夺经营管理权', chapter: '十七', significance: 'medium', stage: 2 },
  { id: 22, year: '1985', date: '1985年9月17日', location: '库比蒂诺', event: '正式辞职离开自己创立的苹果公司，抛售几乎所有苹果股票', chapter: '十七', significance: 'high', stage: 2 },

  // ===== 阶段3：荒野岁月（1985-1996） =====
  { id: 23, year: '1985', date: '1985年', location: '雷德伍德城', event: '创办NeXT公司，面向教育市场打造高端工作站，请保罗·兰德设计标识', chapter: '十八', significance: 'medium', stage: 3 },
  { id: 24, year: '1986', date: '1986年1月', location: '旧金山', event: '以1000万美元从卢卡斯影业买下电脑部门70%股份，成立皮克斯动画工作室', chapter: '十九', significance: 'high', stage: 3 },
  { id: 25, year: '1986', date: '1986年', location: '山景城', event: '养母克拉拉·乔布斯去世，乔布斯开始与生母及妹妹莫娜·辛普森相认', chapter: '二十', significance: 'low', stage: 3 },
  { id: 26, year: '1989', date: '1989年', location: '波士顿', event: 'NeXTcube电脑发布，售价昂贵，市场反响平平，但操作系统技术领先时代', chapter: '十八', significance: 'low', stage: 3 },
  { id: 27, year: '1991', date: '1991年3月18日', location: '约塞米蒂', event: '与劳伦·鲍威尔结婚，婚后育有三个子女，家庭成为他重要的精神支撑', chapter: '二十', significance: 'medium', stage: 3 },
  { id: 28, year: '1995', date: '1995年11月', location: '旧金山', event: '皮克斯首部动画长片《玩具总动员》上映，全球票房3.62亿美元，皮克斯随即上市', chapter: '二十一', significance: 'medium', stage: 3 },
  { id: 29, year: '1996', date: '1996年12月', location: '库比蒂诺', event: '苹果以约4.3亿美元收购NeXT，乔布斯以顾问身份重返苹果', chapter: '二十二', significance: 'high', stage: 3 },

  // ===== 阶段4：王者归来（1997-2011） =====
  { id: 30, year: '1997', date: '1997年8月', location: '波士顿', event: '在Macworld大会宣告回归，宣布微软投资1.5亿美元，出任临时CEO拯救濒危的苹果', chapter: '二十三', significance: 'high', stage: 4 },
  { id: 31, year: '1997', date: '1997年9月', location: '库比蒂诺', event: '推出"非同凡想"广告活动，致敬改变世界的疯狂天才，重塑苹果品牌精神', chapter: '二十四', significance: 'medium', stage: 4 },
  { id: 32, year: '1998', date: '1998年5月6日', location: '库比蒂诺', event: '发布半透明"邦迪蓝"iMac G3，当年8月上市即热销，苹果扭亏为盈', chapter: '二十六', significance: 'medium', stage: 4 },
  { id: 33, year: '1998', date: '1998年', location: '库比蒂诺', event: '聘用蒂姆·库克为首席运营官，库克以冷静果断整顿供应链，成为乔布斯最信赖的副手', chapter: '二十七', significance: 'medium', stage: 4 },
  { id: 34, year: '2001', date: '2001年5月', location: '格伦代尔', event: '首批苹果零售店开业，将购物体验本身打造为品牌展示的核心', chapter: '二十八', significance: 'low', stage: 4 },
  { id: 35, year: '2001', date: '2001年10月23日', location: '库比蒂诺', event: '发布iPod，"把1000首歌装进口袋"，开启数字音乐革命', chapter: '二十九', significance: 'high', stage: 4 },
  { id: 36, year: '2003', date: '2003年4月28日', location: '旧金山', event: 'iTunes商店上线，每首歌99美分，让饱受盗版之苦的音乐产业重获新生', chapter: '三十', significance: 'medium', stage: 4 },
  { id: 37, year: '2003', date: '2003年10月', location: '帕洛阿尔托', event: '确诊罕见的神经内分泌胰腺癌，拖延9个月才接受手术，埋下健康隐患', chapter: '三十四', significance: 'medium', stage: 4 },
  { id: 38, year: '2004', date: '2004年7月31日', location: '斯坦福', event: '在斯坦福大学医学中心接受胰腺手术，但癌细胞已扩散至肝脏', chapter: '三十四', significance: 'low', stage: 4 },
  { id: 39, year: '2005', date: '2005年6月', location: '斯坦福', event: '在斯坦福毕业典礼发表演讲，讲述三个故事，留下"求知若饥，虚心若愚"的传世金句', chapter: '三十四', significance: 'medium', stage: 4 },
  { id: 40, year: '2007', date: '2007年1月', location: '旧金山', event: '在Macworld发布iPhone，将iPod、手机与互联网设备融为一体，重新定义智能手机', chapter: '三十五', significance: 'high', stage: 4 },
  { id: 41, year: '2008', date: '2008年7月', location: '库比蒂诺', event: 'App Store上线，催生全新的应用经济生态，开发者与用户共同繁荣平台', chapter: '三十九', significance: 'medium', stage: 4 },
  { id: 42, year: '2010', date: '2010年1月27日', location: '旧金山', event: '发布iPad，开辟平板计算新品类，为数字出版与移动计算打开新世界', chapter: '三十七', significance: 'high', stage: 4 },
  { id: 43, year: '2011', date: '2011年8月', location: '库比蒂诺', event: '因健康恶化辞去苹果CEO，推荐蒂姆·库克接任，自己转任董事长', chapter: '四十', significance: 'medium', stage: 4 },
  { id: 44, year: '2011', date: '2011年10月5日', location: '帕洛阿尔托', event: '在加州家中病逝，享年56岁，留下改变六大产业的创新遗产', chapter: '四十一', significance: 'high', stage: 4 },
];

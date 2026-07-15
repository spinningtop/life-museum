// 曾国藩传（张宏杰著）人生时间轴
// 数据来源：原书正文及黎庶昌《曾国藩年谱》
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
  // 阶段1：寒门苦读（1811-1838）
  { id: 1, year: '1811', date: '十月十一日', location: '湖南湘乡白杨坪', event: '曾国藩出生于湘乡荷叶塘白杨坪一户普通农家', chapter: '第一章', significance: 'high', stage: 1 },
  { id: 2, year: '1826', date: '', location: '湖南湘乡', event: '十四岁随父曾麟书首次参加童子试，开始科场生涯', chapter: '第一章', significance: 'low', stage: 1 },
  { id: 3, year: '1832', date: '春', location: '长沙', event: '第六次考秀才落第，被学台"悬牌批责"为文理欠通，视为平生第一大挫折', chapter: '第一章', significance: 'high', stage: 1 },
  { id: 4, year: '1832', date: '', location: '湘乡', event: '父亲曾麟书第十七次应试终于考中秀才，老曾家五六百年来首位秀才', chapter: '第一章', significance: 'medium', stage: 1 },
  { id: 5, year: '1833', date: '', location: '湘乡', event: '第七次参加院试终于考中秀才，科举之路自此打通', chapter: '第一章', significance: 'high', stage: 1 },
  { id: 6, year: '1833', date: '秋', location: '长沙', event: '中秀才当年即中举人，取湖南省第三十六名，所谓"联捷"', chapter: '第一章', significance: 'medium', stage: 1 },
  { id: 7, year: '1834', date: '', location: '北京', event: '首次赴京参加会试，未中', chapter: '第一章', significance: 'low', stage: 1 },
  { id: 8, year: '1838', date: '', location: '北京', event: '再次进京会试，高中进士，朝考一等第二名，授翰林院庶吉士，改名"国藩"', chapter: '第一章', significance: 'high', stage: 1 },

  // 阶段2：京官岁月（1839-1852）
  { id: 9, year: '1839', date: '底', location: '北京', event: '告别家人，离湘赴京，正式开始京官生涯', chapter: '第二章', significance: 'medium', stage: 2 },
  { id: 10, year: '1840', date: '春', location: '北京', event: '散馆考试授翰林院检讨（从七品），入翰林院', chapter: '第二章', significance: 'medium', stage: 2 },
  { id: 11, year: '1841', date: '', location: '北京', event: '拜访大儒唐鉴，请教程朱之学，立志"学做圣人"', chapter: '第二章', significance: 'high', stage: 2 },
  { id: 12, year: '1842', date: '十月初一日', location: '北京', event: '开始恭楷写日记，立"十二条军规"，二十一日发誓戒烟成功', chapter: '第二章', significance: 'high', stage: 2 },
  { id: 13, year: '1843', date: '', location: '北京', event: '翰林大考名列二等第一，升翰林院侍讲，连升四级', chapter: '第三章', significance: 'medium', stage: 2 },
  { id: 14, year: '1844', date: '', location: '北京', event: '结识江忠源，预言天下将大乱，"是人必立功名于天下，然当以节义死"', chapter: '第四章', significance: 'low', stage: 2 },
  { id: 15, year: '1847', date: '六月', location: '北京', event: '翰林大考二等第四，升内阁学士兼礼部侍郎衔，跻身卿贰', chapter: '第三章', significance: 'medium', stage: 2 },
  { id: 16, year: '1849', date: '', location: '北京', event: '升礼部右侍郎，"十年七迁，连跃十级"，创道光朝升官纪录', chapter: '第三章', significance: 'high', stage: 2 },
  { id: 17, year: '1850', date: '正月', location: '北京', event: '道光帝去世，咸丰即位，下诏求言，曾国藩上《应诏陈言疏》', chapter: '第四章', significance: 'medium', stage: 2 },
  { id: 18, year: '1851', date: '', location: '北京', event: '上《敬陈圣德三端预防流弊疏》直言批评咸丰帝三大缺点，险遭治罪', chapter: '第四章', significance: 'high', stage: 2 },
  { id: 19, year: '1852', date: '六月', location: '北京', event: '受命充江西乡试正考官，离京赴任，结束十三年京官生涯', chapter: '第四章', significance: 'medium', stage: 2 },
  { id: 20, year: '1852', date: '七月二十五日', location: '安徽小池驿', event: '途中得知母亲江太夫人去世，奔丧回湘', chapter: '第五章', significance: 'high', stage: 2 },

  // 阶段3：湘军征战（1853-1864）
  { id: 21, year: '1852', date: '十二月十三日', location: '湘乡', event: '接湖南巡抚咨文，奉旨帮办团练，经郭嵩焘劝说决定出山', chapter: '第五章', significance: 'high', stage: 3 },
  { id: 22, year: '1853', date: '正月', location: '长沙', event: '到长沙设协办团练大臣公馆及审案局，铁腕剿匪，人称"曾剃头"', chapter: '第五章', significance: 'medium', stage: 3 },
  { id: 23, year: '1853', date: '八月', location: '衡州', event: '因长沙之辱（差点被兵痞所杀），"好汉打脱牙和血吞"，移驻衡州赤手练军', chapter: '第五章', significance: 'high', stage: 3 },
  { id: 24, year: '1854', date: '正月', location: '衡州', event: '湘军水陆一万七千人誓师北上，发表《讨粤匪檄》', chapter: '第六章', significance: 'high', stage: 3 },
  { id: 25, year: '1854', date: '四月初二日', location: '靖港', event: '靖港之战惨败，曾国藩投水自尽被救，后湘潭大捷传来才打消死志', chapter: '第六章', significance: 'high', stage: 3 },
  { id: 26, year: '1854', date: '秋', location: '武汉', event: '湘军攻占武汉，朝廷仅赏兵部侍郎衔，未授地方实权', chapter: '第七章', significance: 'medium', stage: 3 },
  { id: 27, year: '1855', date: '十二月', location: '湖口', event: '湖口惨败，水师被肢解，座船被俘，曾国藩再次投水自尽被救', chapter: '第八章', significance: 'high', stage: 3 },
  { id: 28, year: '1857', date: '', location: '湘乡', event: '父亲曾麟书去世，回乡守制，期间"大悔大悟"，完成性格脱胎换骨', chapter: '第八章', significance: 'high', stage: 3 },
  { id: 29, year: '1858', date: '', location: '江西', event: '二次出山，改弦更张，变得和光同尘，情商大增', chapter: '第九章', significance: 'medium', stage: 3 },
  { id: 30, year: '1860', date: '四月', location: '安徽', event: '署理两江总督，终于获得地方实权', chapter: '第九章', significance: 'high', stage: 3 },
  { id: 31, year: '1860', date: '八月', location: '祁门', event: '将大营设于祁门，险要之地，李秀成大军一度逼近，几陷绝境', chapter: '第九章', significance: 'high', stage: 3 },
  { id: 32, year: '1861', date: '八月初一日', location: '安庆', event: '攻克安庆，太平天国西线屏障尽失，成为战争转折点', chapter: '第九章', significance: 'high', stage: 3 },
  { id: 33, year: '1861', date: '十一月', location: '北京', event: '咸丰帝去世，慈禧发动辛酉政变，垂帘听政，曾国藩获坚定支持', chapter: '第十章', significance: 'medium', stage: 3 },
  { id: 34, year: '1862', date: '', location: '南京雨花台', event: '曾国荃率吉字营进逼天京城外雨花台，开始长达两年的天京攻坚战', chapter: '第十一章', significance: 'medium', stage: 3 },
  { id: 35, year: '1864', date: '六月十六日', location: '天京', event: '湘军攻破天京，太平天国覆灭，曾国藩封一等毅勇侯', chapter: '第十一章', significance: 'high', stage: 3 },

  // 阶段4：晚年抉择（1865-1872）
  { id: 36, year: '1864', date: '', location: '南京', event: '攻破天京后自剪羽毛，裁撤湘军，让曾国荃离职，化解朝廷猜忌', chapter: '第十二章', significance: 'high', stage: 4 },
  { id: 37, year: '1865', date: '', location: '安庆', event: '建立安庆内军械所，试制中国第一艘小轮船，开启洋务运动', chapter: '第十四章', significance: 'high', stage: 4 },
  { id: 38, year: '1865', date: '', location: '上海', event: '李鸿章建成江南制造局，曾国藩大力支持并扩大其规模', chapter: '第十四章', significance: 'medium', stage: 4 },
  { id: 39, year: '1868', date: '', location: '保定', event: '调任直隶总督，对畿辅官场痛加整顿', chapter: '第十六章', significance: 'medium', stage: 4 },
  { id: 40, year: '1870', date: '六月', location: '天津', event: '奉命处理天津教案，明知将毁名仍毅然赴津，背负"卖国贼"骂名', chapter: '第十六章', significance: 'high', stage: 4 },
  { id: 41, year: '1870', date: '', location: '南京', event: '因天津教案名声受损，回任两江总督', chapter: '第十六章', significance: 'low', stage: 4 },
  { id: 42, year: '1871', date: '', location: '南京', event: '与李鸿章联名奏请派遣幼童赴美留学，为国家办最后一件大事', chapter: '第十七章', significance: 'high', stage: 4 },
  { id: 43, year: '1872', date: '二月初四日', location: '南京两江总督府', event: '在花园散步时中风发作，端坐椅中薨逝，享年六十二岁', chapter: '第十七章', significance: 'high', stage: 4 },
];

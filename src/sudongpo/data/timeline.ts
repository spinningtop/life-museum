// 时间轴事件数据 - 按人生4个阶段组织
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
  // 阶段1: 少年英才 (1037-1056)
  { id: 1, year: '1037', date: '1037年1月8日', location: '眉山', event: '苏轼出生于眉州眉山，字子瞻，号东坡居士', chapter: '一', significance: 'high', stage: 1 },
  { id: 2, year: '1042', date: '', location: '眉山', event: '母亲程氏亲自教苏轼读书，以范滂传启蒙气节', chapter: '一', significance: 'high', stage: 1 },
  { id: 3, year: '1045', date: '', location: '眉山', event: '弟弟苏辙出生，兄弟一生相知相伴', chapter: '一', significance: 'high', stage: 1 },
  { id: 4, year: '1047', date: '', location: '眉山', event: '祖父苏序去世，父亲苏洵居家读书教子', chapter: '一', significance: 'medium', stage: 1 },
  { id: 5, year: '1052', date: '', location: '眉山', event: '读到《后汉书·范滂传》，慨然问母"轼若为滂，母许之否乎"', chapter: '一', significance: 'high', stage: 1 },
  { id: 6, year: '1054', date: '1054年', location: '眉山', event: '娶王弗为妻，王弗时年十六', chapter: '一', significance: 'high', stage: 1 },
  { id: 7, year: '1056', date: '1056年', location: '开封', event: '苏洵携苏轼、苏辙进京，拜见欧阳修', chapter: '二', significance: 'high', stage: 1 },

  // 阶段2: 金榜题名 (1057-1078)
  { id: 8, year: '1057', date: '1057年', location: '开封', event: '与弟苏辙同榜进士及第，欧阳修称"老夫当避路，放他出一头地"', chapter: '二', significance: 'high', stage: 2 },
  { id: 9, year: '1057', date: '', location: '开封', event: '母亲程氏病逝，父子三人回眉山守丧', chapter: '二', significance: 'high', stage: 2 },
  { id: 10, year: '1061', date: '1061年', location: '凤翔', event: '授大理评事签书凤翔府判官，初入仕途', chapter: '三', significance: 'high', stage: 2 },
  { id: 11, year: '1061', date: '', location: '渑池', event: '赴任途中与弟弟渑池唱和，作《和子由渑池怀旧》', chapter: '三', significance: 'high', stage: 2 },
  { id: 12, year: '1065', date: '1065年', location: '开封', event: '爱妻王弗病逝，年仅二十七', chapter: '三', significance: 'high', stage: 2 },
  { id: 13, year: '1066', date: '1066年', location: '开封', event: '父亲苏洵病逝，扶柩回眉山守丧', chapter: '三', significance: 'high', stage: 2 },
  { id: 14, year: '1068', date: '1068年', location: '眉山', event: '续娶王弗堂妹王闰之为妻', chapter: '三', significance: 'medium', stage: 2 },
  { id: 15, year: '1071', date: '1071年', location: '杭州', event: '任杭州通判，西湖诗酒从此闻名', chapter: '四', significance: 'high', stage: 2 },
  { id: 16, year: '1074', date: '1074年', location: '密州', event: '调任密州知州，作《江城子·密州出猎》', chapter: '四', significance: 'high', stage: 2 },
  { id: 17, year: '1076', date: '1076年', location: '密州', event: '中秋大醉作《水调歌头·明月几时有》，怀念弟弟苏辙', chapter: '四', significance: 'high', stage: 2 },
  { id: 18, year: '1077', date: '1077年', location: '徐州', event: '任徐州知州，率民抗洪保城', chapter: '四', significance: 'high', stage: 2 },
  { id: 19, year: '1078', date: '', location: '徐州', event: '在徐州发现煤炭，作《石炭行》', chapter: '四', significance: 'medium', stage: 2 },

  // 阶段3: 党争沉浮 (1079-1093)
  { id: 20, year: '1079', date: '1079年', location: '湖州', event: '调任湖州知州，到任即因"乌台诗案"被捕入狱', chapter: '五', significance: 'high', stage: 3 },
  { id: 21, year: '1079', date: '1079年8月', location: '开封', event: '乌台诗案爆发，御史台审讯百余日，险遭处死', chapter: '五', significance: 'high', stage: 3 },
  { id: 22, year: '1079', date: '1079年12月', location: '开封', event: '太皇太后曹氏与王安石等求情，贬黄州团练副使', chapter: '五', significance: 'high', stage: 3 },
  { id: 23, year: '1080', date: '1080年', location: '黄州', event: '抵达黄州，初居定慧院，作《卜算子·黄州定慧院寓居作》', chapter: '六', significance: 'high', stage: 3 },
  { id: 24, year: '1081', date: '1081年', location: '黄州', event: '友人马正卿请废地数十亩，苏轼开荒种田，号"东坡居士"', chapter: '六', significance: 'high', stage: 3 },
  { id: 25, year: '1082', date: '1082年秋', location: '黄州', event: '游赤壁作《念奴娇·赤壁怀古》及前后《赤壁赋》', chapter: '六', significance: 'high', stage: 3 },
  { id: 26, year: '1082', date: '1082年春', location: '黄州', event: '沙湖遇雨作《定风波·莫听穿林打叶声》，书《寒食帖》', chapter: '六', significance: 'high', stage: 3 },
  { id: 27, year: '1084', date: '1084年', location: '庐山', event: '离开黄州，游庐山作《题西林壁》', chapter: '六', significance: 'high', stage: 3 },
  { id: 28, year: '1085', date: '1085年', location: '开封', event: '宋神宗去世，哲宗即位，高太后临朝，苏轼被召回京', chapter: '七', significance: 'high', stage: 3 },
  { id: 29, year: '1086', date: '1086年', location: '开封', event: '任翰林学士知制诰，位居朝堂核心', chapter: '七', significance: 'high', stage: 3 },
  { id: 30, year: '1089', date: '1089年', location: '杭州', event: '出任杭州知州，疏浚西湖，筑"苏堤"', chapter: '七', significance: 'high', stage: 3 },
  { id: 31, year: '1091', date: '1091年', location: '颍州', event: '调任颍州知州，八月又召回京师', chapter: '七', significance: 'medium', stage: 3 },
  { id: 32, year: '1092', date: '1092年', location: '扬州', event: '任扬州知州，短暂任职后调回京城', chapter: '七', significance: 'medium', stage: 3 },
  { id: 33, year: '1093', date: '1093年', location: '定州', event: '出任定州知州，妻子王闰之在此年去世', chapter: '七', significance: 'high', stage: 3 },

  // 阶段4: 岭海流放 (1094-1101)
  { id: 34, year: '1094', date: '1094年', location: '惠州', event: '新党再度执政，贬宁远军节度副使惠州安置', chapter: '八', significance: 'high', stage: 4 },
  { id: 35, year: '1094', date: '1094年', location: '惠州', event: '携王朝云南迁，"日啖荔枝三百颗，不辞长作岭南人"', chapter: '八', significance: 'high', stage: 4 },
  { id: 36, year: '1096', date: '1096年', location: '惠州', event: '侍妾王朝云病逝于惠州，年仅三十四', chapter: '八', significance: 'high', stage: 4 },
  { id: 37, year: '1097', date: '1097年', location: '儋州', event: '再贬琼州别驾昌化军安置（今海南儋州），渡海赴贬', chapter: '九', significance: 'high', stage: 4 },
  { id: 38, year: '1098', date: '1098年', location: '儋州', event: '在儋州"桄榔庵"授徒讲学，开海南文教之风', chapter: '九', significance: 'high', stage: 4 },
  { id: 39, year: '1099', date: '1099年', location: '儋州', event: '完成《书传》《易传》《论语说》三部著作', chapter: '九', significance: 'high', stage: 4 },
  { id: 40, year: '1100', date: '1100年', location: '儋州', event: '宋徽宗即位大赦，苏轼遇赦北归', chapter: '十', significance: 'high', stage: 4 },
  { id: 41, year: '1101', date: '1101年', location: '常州', event: '北归途中病逝于常州，享年六十五岁', chapter: '十', significance: 'high', stage: 4 },
];

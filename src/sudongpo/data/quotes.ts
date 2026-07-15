// 苏东坡经典金句数据
export interface Quote {
  id: number;
  text: string;      // 金句原文
  source: string;    // 出处（作品名）
  year: string;      // 创作年份
  emotion: 'reflective' | 'passionate' | 'dark' | 'triumphant' | 'philosophical';
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: '大江东去，浪淘尽，千古风流人物。',
    source: '念奴娇·赤壁怀古',
    year: '1082',
    emotion: 'triumphant',
  },
  {
    id: 2,
    text: '但愿人长久，千里共婵娟。',
    source: '水调歌头·明月几时有',
    year: '1076',
    emotion: 'reflective',
  },
  {
    id: 3,
    text: '竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。',
    source: '定风波·莫听穿林打叶声',
    year: '1082',
    emotion: 'passionate',
  },
  {
    id: 4,
    text: '回首向来萧瑟处，归去，也无风雨也无晴。',
    source: '定风波·莫听穿林打叶声',
    year: '1082',
    emotion: 'philosophical',
  },
  {
    id: 5,
    text: '不识庐山真面目，只缘身在此山中。',
    source: '题西林壁',
    year: '1084',
    emotion: 'philosophical',
  },
  {
    id: 6,
    text: '十年生死两茫茫，不思量，自难忘。',
    source: '江城子·乙卯正月二十日夜记梦',
    year: '1075',
    emotion: 'dark',
  },
  {
    id: 7,
    text: '人有悲欢离合，月有阴晴圆缺，此事古难全。',
    source: '水调歌头·明月几时有',
    year: '1076',
    emotion: 'philosophical',
  },
  {
    id: 8,
    text: '人间如梦，一尊还酹江月。',
    source: '念奴娇·赤壁怀古',
    year: '1082',
    emotion: 'reflective',
  },
  {
    id: 9,
    text: '寄蜉蝣于天地，渺沧海之一粟。',
    source: '前赤壁赋',
    year: '1082',
    emotion: 'philosophical',
  },
  {
    id: 10,
    text: '哀吾生之须臾，羡长江之无穷。',
    source: '前赤壁赋',
    year: '1082',
    emotion: 'reflective',
  },
  {
    id: 11,
    text: '苟非吾之所有，虽一毫而莫取。',
    source: '前赤壁赋',
    year: '1082',
    emotion: 'philosophical',
  },
  {
    id: 12,
    text: '山高月小，水落石出。',
    source: '后赤壁赋',
    year: '1082',
    emotion: 'reflective',
  },
  {
    id: 13,
    text: '人生到处知何似，应似飞鸿踏雪泥。',
    source: '和子由渑池怀旧',
    year: '1061',
    emotion: 'philosophical',
  },
  {
    id: 14,
    text: '粗缯大布裹生涯，腹有诗书气自华。',
    source: '和董传留别',
    year: '1061',
    emotion: 'passionate',
  },
  {
    id: 15,
    text: '横看成岭侧成峰，远近高低各不同。',
    source: '题西林壁',
    year: '1084',
    emotion: 'philosophical',
  },
  {
    id: 16,
    text: '拣尽寒枝不肯栖，寂寞沙洲冷。',
    source: '卜算子·黄州定慧院寓居作',
    year: '1082',
    emotion: 'dark',
  },
  {
    id: 17,
    text: '谁见幽人独往来，缥缈孤鸿影。',
    source: '卜算子·黄州定慧院寓居作',
    year: '1082',
    emotion: 'dark',
  },
  {
    id: 18,
    text: '清风徐来，水波不兴。',
    source: '前赤壁赋',
    year: '1082',
    emotion: 'reflective',
  },
  {
    id: 19,
    text: '细看来，不是杨花，点点是离人泪。',
    source: '水龙吟·次韵章质夫杨花词',
    year: '1080',
    emotion: 'dark',
  },
  {
    id: 20,
    text: '日啖荔枝三百颗，不辞长作岭南人。',
    source: '惠州一绝',
    year: '1095',
    emotion: 'triumphant',
  },
];

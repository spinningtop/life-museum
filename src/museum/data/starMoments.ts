// 群星闪耀精选时刻：跨传记的决定性瞬间
export interface StarMoment {
  id: string;
  title: string;       // 时刻名
  person: string;      // 所属人物
  year: string;        // 年份
  description: string; // 一句话描述
  bioUrl: string;      // 跳转传记
}

export const starMoments: StarMoment[] = [
  {
    id: 's1',
    title: '离开南非',
    person: '埃隆·马斯克',
    year: '1989',
    description: '离18岁生日还有两周，独自飞往加拿大，从此再未回南非生活。外祖父的冒险基因在此刻觉醒。',
    bioUrl: '/musk',
  },
  {
    id: 's2',
    title: '返程飞机上的电子表格',
    person: '埃隆·马斯克',
    year: '2002',
    description: '俄罗斯人坐地起价、谈判破裂后，他在返程航班上算出"白痴指数"，宣布"我们自己造火箭"。',
    bioUrl: '/musk',
  },
  {
    id: 's3',
    title: '第四次发射——绝处逢生',
    person: '埃隆·马斯克',
    year: '2008',
    description: '第一枚私人制造的火箭进入轨道，三个月后NASA的16亿美元合同到来，SpaceX起死回生。',
    bioUrl: '/musk',
  },
  {
    id: 's4',
    title: '出蜀入京',
    person: '苏东坡',
    year: '1057',
    description: '21岁与弟同登进士第，欧阳修读其文惊叹"老夫当避此人，放出一头地"。',
    bioUrl: '/sudongpo',
  },
  {
    id: 's5',
    title: '乌台诗案',
    person: '苏东坡',
    year: '1079',
    description: '因诗获罪入狱百余日，险些处死，从此由庙堂跌入江湖，开启黄州之变。',
    bioUrl: '/sudongpo',
  },
  {
    id: 's6',
    title: '赤壁夜游',
    person: '苏东坡',
    year: '1082',
    description: '贬谪黄州期间两度夜游赤壁，写下前后《赤壁赋》与《念奴娇·赤壁怀古》。',
    bioUrl: '/sudongpo',
  },
];

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
  {
    id: 's7',
    title: '车库里的苹果',
    person: '史蒂夫·乔布斯',
    year: '1976',
    description: '愚人节，乔布斯与沃兹在自家车库签订合伙协议，接下50台订单，苹果传奇由此开启。',
    bioUrl: '/jobs',
  },
  {
    id: 's8',
    title: '麦金塔开口说话',
    person: '史蒂夫·乔布斯',
    year: '1984',
    description: 'Macintosh用合成语音自我介绍："大家好，我是Macintosh。"个人电脑从机器变成有性格的伙伴。',
    bioUrl: '/jobs',
  },
  {
    id: 's9',
    title: 'iPhone的登场',
    person: '史蒂夫·乔布斯',
    year: '2007',
    description: 'iPod、手机、上网终端三位一体，乔布斯重新发明了手机，移动互联网时代由此引爆。',
    bioUrl: '/jobs',
  },
  {
    id: 's10',
    title: '第七次科举的耻辱',
    person: '曾国藩',
    year: '1832',
    description: '考卷被学台"悬批"批评"文理不通"，曾国藩深受刺痛逐字反思，次年终于中秀才，自此一路连捷。',
    bioUrl: '/zeng',
  },
  {
    id: 's11',
    title: '靖港投水',
    person: '曾国藩',
    year: '1854',
    description: '湘军首战惨败，曾国藩羞愤投水自尽，被幕僚章寿麟救起。湘潭捷报随后传来，得以戴罪立功。',
    bioUrl: '/zeng',
  },
  {
    id: 's12',
    title: '攻破天京封侯',
    person: '曾国藩',
    year: '1864',
    description: '曾国荃部炸塌天京城墙，太平天国覆灭。曾国藩封一等毅勇侯，随即果断自剪湘军以避猜忌。',
    bioUrl: '/zeng',
  },
];

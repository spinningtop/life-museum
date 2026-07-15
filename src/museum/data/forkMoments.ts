// 命运岔路口精选：跨传记的反事实推演
export interface ForkMoment {
  id: string;
  title: string;       // 岔路口假设
  person: string;      // 所属人物
  realHistory: string; // 真实发生了什么
  altHistory: string;  // 平行历史：在那个假设下可能发生什么
  bioUrl: string;      // 跳转传记
}

export const forkMoments: ForkMoment[] = [
  {
    id: 'f1',
    title: '若猎鹰1号第四次发射也失败',
    person: '埃隆·马斯克',
    realHistory: '2008年9月28日第四次发射成功，三个月后NASA签下16亿美元合同，SpaceX起死回生。',
    altHistory: 'SpaceX破产清算，同月耗尽资金的Tesla也宣告关门，可回收火箭革命推迟十年，火星计划被锁进博物馆。',
    bioUrl: '/musk',
  },
  {
    id: 'f2',
    title: '若未在蜜月期间失去PayPal的CEO职位',
    person: '埃隆·马斯克',
    realHistory: '被董事会政变推翻后，他将精力转向硬件冒险，2002年创办SpaceX，2004年投资Tesla。',
    altHistory: '他把PayPal做成全球支付巨头，成为硅谷支付教父，不会深入火箭与电池的钢铁与火的世界。',
    bioUrl: '/musk',
  },
  {
    id: 'f3',
    title: '若乌台诗案苏轼被处死',
    person: '苏东坡',
    realHistory: '入狱百余日后经多方营救贬谪黄州，黄州岁月成就其文学巅峰。',
    altHistory: '宋代文坛少了一颗最亮的星，《赤壁赋》《寒食帖》皆成空谈，豪放词派或晚百年才有人接续。',
    bioUrl: '/sudongpo',
  },
  {
    id: 'f4',
    title: '若苏轼未卷入王安石变法之争',
    person: '苏东坡',
    realHistory: '因反对新法自请外放，辗转杭密徐湖，终因诗祸下狱，开启半生贬谪之路。',
    altHistory: '他或长居庙堂为一代名相，政务缠身，《东坡乐府》与赤壁二赋或永不诞生，中国少一个诗神。',
    bioUrl: '/sudongpo',
  },
  {
    id: 'f5',
    title: '若俄罗斯人没有坐地起价',
    person: '埃隆·马斯克',
    realHistory: '买火箭谈判破裂，返程飞机上他算出"白痴指数"，宣布自己造火箭，SpaceX由此诞生。',
    altHistory: '马斯克花8000万美元买下二手火箭改造，从此成为俄火箭大客户，商业航天被锁死在旧秩序里。',
    bioUrl: '/musk',
  },
];

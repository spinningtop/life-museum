// 命运的岔路口数据：基于《埃隆·马斯克传》史实的反事实推演
export interface Crossroad {
  id: number;
  moment: string;       // 对应的真实时刻（一句话）
  year: string;         // 年份
  reality: string;      // 真实发生了什么（一句话）
  fork: string;         // 岔路口假设："如果当时……"
  alternate: string;    // 平行历史：在那个假设下可能发生什么
  consequence: string;  // 连锁影响：对马斯克人生/对科技产业的影响
  color: string;        // 卡片强调色
}

export const crossroads: Crossroad[] = [
  {
    id: 1,
    moment: '猎鹰1号第三次失败后，SpaceX与Tesla同时濒临破产',
    year: '2008',
    reality: '9月28日第四次发射成功，三个月后NASA签下16亿美元合同，SpaceX起死回生。',
    fork: '如果第四次发射也失败——',
    alternate: 'SpaceX破产清算，同月耗尽资金的Tesla也宣告关门，马斯克全部身家归零，私人航天信仰崩塌，航天业重回国家队垄断格局。',
    consequence: '可回收火箭革命不会在2015年发生，星链、星舰皆成空谈；马斯克或回归软件业，电动车普及至少推迟十年，火星计划被锁进博物馆。',
    color: '#e63946',
  },
  {
    id: 2,
    moment: '蜜月期间被董事会政变推翻PayPal CEO职位',
    year: '2000',
    reality: '失去CEO后他将精力转向硬件冒险，2002年创办SpaceX，2004年投资Tesla。',
    fork: '如果马斯克没有失去CEO职位——',
    alternate: '他将PayPal做成全球支付的巨头，自己成为硅谷支付教父，不会深入火箭与电池的钢铁与火的世界。',
    consequence: '不会有SpaceX，可回收火箭与星链推迟十年以上；Tesla或被传统车企吞并，电动车革命推迟。世界多一个支付寡头，少一个火星使徒。',
    color: '#B7472A',
  },
  {
    id: 3,
    moment: '莫斯科买火箭被俄罗斯人坐地起价，谈判破裂',
    year: '2002',
    reality: '返程飞机上他用电子表格算出"白痴指数"，宣布"我们自己造火箭"，SpaceX由此诞生。',
    fork: '如果俄罗斯人没有坐地起价——',
    alternate: '马斯克花8000万美元买下二手洲际导弹改造的火箭，把有限的资金投入一次性载具，从此成为俄火箭的大客户而非颠覆者。',
    consequence: '不会有可回收火箭，不会有猎鹰9号的复用革命，Starlink与星舰无从谈起；商业航天格局被锁死在国家队与俄制载具的旧秩序里。',
    color: '#6C3483',
  },
  {
    id: 4,
    moment: '在Twitter发出"资金已到位，每股420美元私有化Tesla"推文',
    year: '2018',
    reality: 'SEC调查、2000万美元罚款、卸任董事长，Tesla保持上市；这条推文也是后来他收购Twitter的伏笔。',
    fork: '如果没有发那条420美元推文——',
    alternate: '马斯克不会与SEC缠斗，也不会因对"短视卖家"与媒体审查的愤怒而最终收购Twitter，他将精力全部押向Model Y、Cybertruck与FSD。',
    consequence: 'Tesla股价或更早突破万亿美元，FSD或更早落地；但他失去了一个直接的言论场，世界也少了一场对社交平台算法与言论边界的撕裂式实验。',
    color: '#85929E',
  },
  {
    id: 5,
    moment: '圣诞前夕Tesla濒临破产，马斯克在金博尔家中打电话融资',
    year: '2008',
    reality: '优点资本最终同意参与融资，Tesla在圣诞夜起死回生。',
    fork: '如果优点资本没有点头——',
    alternate: 'Tesla在圣诞夜宣告破产，Roadster订单作废，工厂被封，电池工程师团队解散到各大传统车企。',
    consequence: '电动车革命推迟五年以上，Model S不会在2012年问世；电池技术与充电网络的产业链成熟被大幅推迟，全球碳中和进程或晚十年。',
    color: '#e63946',
  },
];

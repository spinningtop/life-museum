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
  {
    id: 'f6',
    title: '若乔布斯未被斯卡利赶出苹果',
    person: '史蒂夫·乔布斯',
    realHistory: '1985年与CEO斯卡利权力斗争失败，乔布斯辞职离开亲手创立的公司，开始十二年荒野岁月。',
    altHistory: '他继续掌管Mac部门，但未经禅修与挫败淬炼的傲慢少年，可能让苹果提前倒闭。NeXT与皮克斯不会诞生，1997年的王者归来更无从谈起。',
    bioUrl: '/jobs',
  },
  {
    id: 'f7',
    title: '若乔布斯没有买下皮克斯',
    person: '史蒂夫·乔布斯',
    realHistory: '1986年以1000万美元收购卢卡斯影业电脑部门创立皮克斯，烧钱十年后《玩具总动员》一鸣惊人。',
    altHistory: '皮克斯被他人买走或解散，乔布斯荒野时期只剩NeXT的孤芳自赏。没有1995年的重返亿万富翁，没有7.4亿美元迪士尼收购的弹药，1997年回归苹果的底气将荡然无存。',
    bioUrl: '/jobs',
  },
  {
    id: 'f8',
    title: '若靖港投水时无人相救',
    person: '曾国藩',
    realHistory: '1854年湘军首战惨败，曾国藩投水自尽，被幕僚章寿麟救起。湘潭捷报随后传来，湘军自此崛起。',
    altHistory: '湘军群龙无首，朝廷再无可用之兵，太平军趁势席卷湖南湖北。"曾胡左李"格局不会形成，洋务运动大幅推迟，清廷可能在更早的时候走向崩溃。',
    bioUrl: '/zeng',
  },
  {
    id: 'f9',
    title: '若攻破天京后曾国藩拥兵自立',
    person: '曾国藩',
    realHistory: '1864年攻破天京后手握三十万湘军，曾国藩果断自剪湘军，令曾国荃"养病"回乡，以"倚天照海花无数"表明心迹。',
    altHistory: '湘军虽强但久战疲惫，李鸿章淮军未必相从，左宗棠亦非附庸。一旦起兵将陷入军阀混战，生灵涂炭，曾国藩一世英名化为"乱臣贼子"，洋务成果付诸东流。',
    bioUrl: '/zeng',
  },
];

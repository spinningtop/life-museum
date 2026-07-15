// 曾国藩传（张宏杰著）人物星图
// 数据来源：原书正文
export interface Person {
  id: number;
  name: string;
  title: string;
  intro: string;
  ring: 1 | 2 | 3;
  color: string;
}

export interface Relationship {
  id: number;
  fromId: number;
  toId: number;
  type: string;
  description: string;
  intensity: 'high' | 'medium' | 'low';
}

export const people: Person[] = [
  // 主角
  { id: 0, name: '曾国藩', title: '晚清重臣·湘军创立者', intro: '湖南湘乡人，进士出身，创立湘军平定太平天国，洋务运动先驱，立功立德立言三不朽', ring: 2, color: '#FFD700' },

  // ring1：至亲
  { id: 1, name: '曾麟书', title: '父亲', intro: '考十七次方中秀才，以死记硬背教子，造就曾国藩扎实根基与"尚拙"性格', ring: 1, color: '#D4AF37' },
  { id: 2, name: '曾国荃', title: '弟弟·湘军主将', intro: '曾国藩九弟，率吉字营攻克安庆、天京，用兵刚猛但贪财好杀，兄长屡加规训', ring: 1, color: '#D4AF37' },
  { id: 3, name: '曾国潢', title: '弟弟', intro: '曾国藩四弟，留守家乡管家业，曾国华亦为弟，三河镇之战战死', ring: 1, color: '#D4AF37' },
  { id: 4, name: '欧阳氏', title: '妻子', intro: '衡阳欧阳凝祉之女，一品夫人，相伴一生，曾国藩日记中多有对其身体欠安的挂念', ring: 1, color: '#D4AF37' },
  { id: 5, name: '曾纪泽', title: '长子', intro: '后成为清末著名外交家，曾国藩临终前与之"略言身世事"交代后事', ring: 1, color: '#D4AF37' },

  // ring2：重要
  { id: 6, name: '穆彰阿', title: '恩师·军机大臣', intro: '曾国藩会试座师，道光朝最得宠大臣，爱才，助曾国藩飞黄腾达，后咸丰即位被罢', ring: 2, color: '#4A6FA5' },
  { id: 7, name: '胡林翼', title: '战友·湖北巡抚', intro: '湖南老乡，"曾胡"并称，政治能力极强，收复湖北，与曾国藩联手攻安庆，1861年病逝', ring: 2, color: '#4A6FA5' },
  { id: 8, name: '左宗棠', title: '同僚·陕甘总督', intro: '才气横溢，目中无人，常批曾国藩"才短"，二人一生恩怨交织，曾逝后左送挽联叹服', ring: 2, color: '#4A6FA5' },
  { id: 9, name: '李鸿章', title: '学生·接班人', intro: '曾国藩门生，创建淮军，被塑造为接班人，"裁湘留淮"奠定日后地位，洋务运动主力', ring: 2, color: '#4A6FA5' },
  { id: 10, name: '彭玉麟', title: '部将·水师统领', intro: '湘军水师核心将领，与杨载福并称，一生淡泊名利，曾国藩倚为柱石', ring: 2, color: '#4A6FA5' },
  { id: 11, name: '咸丰帝', title: '君主', intro: '道光四子，自卑敏感刚愎，即位初求言图治，后疲软，一生防备曾国藩，临终未见安庆捷报', ring: 2, color: '#4A6FA5' },
  { id: 12, name: '罗泽南', title: '前辈·理学名家', intro: '湘乡理学家，湘军早期核心将领，曾国藩理学问引路人，攻打武汉时临终遗言"乱极时站的定"', ring: 2, color: '#4A6FA5' },

  // ring3：次要
  { id: 13, name: '洪秀全', title: '敌手·太平天国天王', intro: '四次科举落第后创拜上帝教，发动太平天国起义，焚毁孔庙典籍，与曾国藩"同途殊归"', ring: 3, color: '#6B8E9F' },
  { id: 14, name: '石达开', title: '对手·太平天国翼王', intro: '太平军名将，湖口之战大败湘军水师，天京内讧后率二十万大军出走，曾国藩一生劲敌', ring: 3, color: '#6B8E9F' },
  { id: 15, name: '李秀成', title: '对手·太平天国忠王', intro: '太平天国后期支柱，率军解天京之围，雨花台大战四十六天，天京陷落后被俘就义', ring: 3, color: '#6B8E9F' },
  { id: 16, name: '肃顺', title: '权臣·铁帽子王', intro: '咸丰宠臣，力主重用汉臣，建议以曾国藩督两江，辛酉政变被杀，家中书信无曾氏一字', ring: 3, color: '#6B8E9F' },
  { id: 17, name: '郭嵩焘', title: '至交·首任驻英公使', intro: '曾国藩至交，守制期间力劝曾国藩出山办团练，后成为中国首任驻英法公使', ring: 3, color: '#6B8E9F' },
];

export const relationships: Relationship[] = [
  { id: 1, fromId: 0, toId: 1, type: '父子', description: '曾麟书考十七次方中秀才，以"死记硬背"之法教曾国藩，奠定其扎实学问根基。曾国藩"尚拙"人生哲学直接源于父亲的教学方式与祖父的倔强家风。', intensity: 'high' },
  { id: 2, fromId: 0, toId: 2, type: '兄弟·战友', description: '曾国荃是曾国藩最倚重的弟弟，率吉字营攻安庆、围天京，立下首功。但曾国荃贪财好杀，曾国藩屡屡严函规训，并最终令其"自剪羽毛"离职以避朝廷猜忌。', intensity: 'high' },
  { id: 3, fromId: 0, toId: 3, type: '兄弟', description: '曾国潢留守湘乡管理家务，弟弟曾国华于三河镇之战全军覆没战死。曾国藩对诸弟既严且爱，家书往复不断，既课学业亦论修身。', intensity: 'medium' },
  { id: 4, fromId: 0, toId: 4, type: '夫妻', description: '欧阳氏为衡阳欧阳凝祉之女，封一品夫人。曾国藩日记中多有对妻子身体不适的挂念，亦有因她生病而"厌闻呻吟声"出门回避后又自责的记载。', intensity: 'medium' },
  { id: 5, fromId: 0, toId: 5, type: '父子', description: '曾纪泽为曾国藩长子，后成为清末著名外交家。曾国藩临终前一晚与纪泽"略言身世事"交代后事，纪泽在父亲中风时侍立身旁，亲历其最后一刻。', intensity: 'high' },
  { id: 6, fromId: 0, toId: 6, type: '师生', description: '穆彰阿为曾国藩会试座师，爱才，道光朝军机大臣。大考后主动索看曾国藩诗赋以示提携，助其"十年七迁"。但曾国藩与穆保持分寸，穆倒台后未受牵连。', intensity: 'high' },
  { id: 7, fromId: 0, toId: 7, type: '战友·知己', description: '"曾胡"并称。胡林翼政治能力极强，收复湖北，与曾国藩联手攻安庆。胡林翼调护湘军全局，1861年病逝，曾国藩"伤痛不能自已，彻夜难眠"。', intensity: 'high' },
  { id: 8, fromId: 0, toId: 8, type: '同僚·亦敌亦友', description: '左宗棠才气横溢，常批曾国藩"才短""才亦太缺"。二人一生恩怨交织，然曾国藩去世后，左宗棠送挽联"谋国之忠，知人之明，自愧不如元辅"，终于承认不如。', intensity: 'high' },
  { id: 9, fromId: 0, toId: 9, type: '师生·接班人', description: '李鸿章投帖拜师，曾国藩全面塑造之，令其创建淮军，"裁湘留淮"交出军权。曾国藩评其"拼命做官"，知其才而亦知其短，终以之为接班人。', intensity: 'high' },
  { id: 10, fromId: 0, toId: 10, type: '统帅·部将', description: '彭玉麟为湘军水师核心将领，与杨载福并称。曾国藩令其不要搞迎送仪式，彭玉麟执行不折不扣。一生淡泊，曾国藩倚为水师柱石。', intensity: 'medium' },
  { id: 11, fromId: 0, toId: 11, type: '君臣', description: '咸丰帝即位初纳言，曾国藩上疏批评其三大缺点险遭治罪。此后咸丰一生防备曾国藩，立功不赏、不给实权，直到临终也未看到安庆捷报。', intensity: 'high' },
  { id: 12, fromId: 0, toId: 12, type: '前辈·战友', description: '罗泽南为湘乡理学名家，湘军早期核心将领，是曾国藩理学问的引路人。攻打武汉时战死，临终遗言"乱极时站的定，才有用处"，曾国藩深为痛惜。', intensity: 'medium' },
  { id: 13, fromId: 0, toId: 13, type: '死敌', description: '洪秀全四次科举落第后创拜上帝教，焚毁孔庙典籍。曾国藩发表《讨粤匪檄》以"扶持名教"自任，二人"同途殊归"——同为落第秀才，一个尚拙到底，一个走向造反。', intensity: 'high' },
  { id: 14, fromId: 0, toId: 14, type: '对手', description: '石达开为太平天国翼王，湖口之战大败湘军水师，曾国藩座船被俘、再次投水。石达开是天京内讧后率二十万大军出走的核心人物，曾国藩一生劲敌。', intensity: 'medium' },
  { id: 15, fromId: 0, toId: 15, type: '对手', description: '李秀成为太平天国后期支柱，率十余万大军回救天京，雨花台大战四十六天猛攻曾国荃。天京陷落后被俘就义，曾国藩审讯后将其处决。', intensity: 'medium' },
  { id: 16, fromId: 0, toId: 16, type: '暗中支持', description: '肃顺力主重用汉臣，建议以曾国藩督两江。但曾国藩与之不建立私交，辛酉政变肃顺被杀，家中查抄书信无曾氏一字，慈禧因此深信曾国藩。', intensity: 'medium' },
  { id: 17, fromId: 0, toId: 17, type: '至交', description: '郭嵩焘与曾国藩相识多年相知甚深。曾国藩守制期间，郭嵩焘亲往吊孝并力劝出山："公素具澄清之志，今不乘时自效，如君父何？"曾国藩遂决定出山。', intensity: 'high' },
  { id: 18, fromId: 7, toId: 8, type: '同僚·推荐', description: '胡林翼与左宗棠同为湖南人，胡林翼曾向朝廷力荐左宗棠。左宗棠因樊燮案险遭不测，胡林翼全力营救。二人关系深厚，胡林翼去世后左宗棠悲痛不已。', intensity: 'medium' },
  { id: 19, fromId: 9, toId: 2, type: '同僚', description: '李鸿章与曾国荃同为曾国藩麾下，李鸿章率淮军赴上海，曾国荃围天京，东西并进。二人性格不同，李鸿章圆滑，曾国荃刚猛，但同属曾氏集团核心。', intensity: 'low' },
  { id: 20, fromId: 7, toId: 9, type: '前辈·调教', description: '胡林翼亦曾指点李鸿章。曾国藩派李鸿章创淮军时，胡林翼已去世，但其留下的军事格局和政治人脉为李鸿章的崛起铺平了道路。', intensity: 'low' },
  { id: 21, fromId: 11, toId: 16, type: '君臣·宠信', description: '肃顺为咸丰帝最宠信的大臣，力主重用汉臣平定太平天国。咸丰帝采纳其议，命曾国藩署理两江总督。辛酉政变后肃顺被杀，但其荐举之策已改变战局。', intensity: 'medium' },
  { id: 22, fromId: 12, toId: 7, type: '战友', description: '罗泽南与胡林翼在湖北战场并肩作战。罗泽南战死后，胡林翼继承其志，收复武汉，并将罗泽南的遗志融入"曾胡"联手攻安庆的战略中。', intensity: 'low' },
  { id: 23, fromId: 17, toId: 7, type: '同乡·同僚', description: '郭嵩焘与胡林翼同为湖南人，郭嵩焘后在广东为湘军协饷。胡林翼生前与郭嵩焘亦有交集，同属曾国藩周围的湖南士人圈。', intensity: 'low' },
];

// 人物星图数据
// 基于林语堂《苏东坡传》及相关史实整理

/**
 * 人物节点
 * id: 0 为主角本人（苏轼），居中显示
 * ring: 圈层 1=至亲至近（内圈）2=重要人物（中圈）3=次要/间接（外圈）
 */
export interface Person {
  id: number;            // 0 为主角本人
  name: string;          // 姓名
  title: string;         // 身份标签
  intro: string;         // 一句话简介
  ring: 1 | 2 | 3;       // 圈层
  color: string;         // 专属颜色
}

/**
 * 人物关系
 * fromId / toId: 关系双方 id（0 为主角）
 * intensity: 关系强度，影响连线粗细与颜色透明度
 */
export interface Relationship {
  id: number;
  fromId: number;
  toId: number;
  type: string;          // 关系类型
  description: string;   // 详细关系描述
  intensity: 'high' | 'medium' | 'low';
}

// 圈层对应颜色
// ring1 朱砂红（至亲）、ring2 鎏金黄（重要）、ring3 靛紫（次要），主角为宣纸白
const COLOR_RING1 = '#c73e3a';
const COLOR_RING2 = '#D4A24C';
const COLOR_RING3 = '#6C3483';
const COLOR_HERO = '#f5e6d3';

// 人物清单：主角 + 18 位相关人物
export const people: Person[] = [
  // ===== 主角（居中） =====
  {
    id: 0,
    name: '苏轼',
    title: '主角',
    intro: '字子瞻，号东坡居士。北宋文豪、书画家、政治家。一生宦海沉浮，以豁达旷达著称，诗、词、文、书、画皆臻化境。',
    ring: 1,
    color: COLOR_HERO,
  },

  // ===== ring 1 内圈·至亲至亲 =====
  {
    id: 1,
    name: '苏洵',
    title: '父亲',
    intro: '字明允，号老泉。二十七岁始发愤读书，"三苏"之首。教子有方，携二子进京名动天下。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 2,
    name: '程氏',
    title: '母亲',
    intro: '眉山程氏之女，苏轼启蒙之师。以范滂传教子气节，苏轼"轼若为滂，母许之否乎"传为佳话。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 3,
    name: '苏辙',
    title: '弟弟',
    intro: '字子由，号颍滨遗老。与兄同榜进士，一生相知相伴。"但愿人长久"即为怀念他而作。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 4,
    name: '王弗',
    title: '妻子',
    intro: '十六岁嫁苏轼，聪慧沉静。苏轼忆其"幕后听言"的往事。去世十年后苏轼写下"十年生死两茫茫"。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 5,
    name: '王闰之',
    title: '继室',
    intro: '王弗堂妹，继娶为妻。伴随苏轼经历凤翔、杭州、密州、徐州及乌台诗案，1093年去世。',
    ring: 1,
    color: COLOR_RING1,
  },
  {
    id: 6,
    name: '王朝云',
    title: '侍妾',
    intro: '钱塘名妓，十二岁入苏府。随苏轼南贬惠州，1096年病逝。苏轼"伤心一念偿前债"悼之。',
    ring: 1,
    color: COLOR_RING1,
  },

  // ===== ring 2 中圈·重要人物 =====
  {
    id: 7,
    name: '欧阳修',
    title: '恩师',
    intro: '北宋文坛领袖。读苏轼文章后"老夫当避路，放他出一头地"，将文坛盟主之位托付于他。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 8,
    name: '司马光',
    title: '同僚',
    intro: '字君实，反对王安石变法的旧党领袖。苏轼虽反对新法，亦不赞同尽废新法，与司马光亦有分歧。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 9,
    name: '高太后',
    title: '知遇之主',
    intro: '宋英宗皇后。临朝听政后召苏轼回京，拔为翰林学士。苏轼称"历事五朝"，高太后是最赏识他的君主。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 10,
    name: '张方平',
    title: '恩人',
    intro: '最早识拔苏洵父子的朝廷重臣。资助三苏进京，苏轼一生感念。乌台诗案时亦上书营救。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 11,
    name: '苏迈',
    title: '长子',
    intro: '王弗所生。随父经历乌台诗案与黄州贬谪，在黄州分担耕作。苏轼北归时苏迈先行探路。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 12,
    name: '苏过',
    title: '幼子',
    intro: '王闰之所生，号斜川居士。随父渡海至儋州三年，尽得苏轼书画之传，时称"小坡"。',
    ring: 2,
    color: COLOR_RING2,
  },
  {
    id: 13,
    name: '黄庭坚',
    title: '门生',
    intro: '字鲁直，号山谷道人。"苏门四学士"之首，江西诗派开山。书法与苏轼并称"苏黄"。',
    ring: 2,
    color: COLOR_RING2,
  },

  // ===== ring 3 外圈·次要/间接人物 =====
  {
    id: 14,
    name: '王安石',
    title: '政敌',
    intro: '字介甫，号半山。熙宁变法主导者。苏轼反对新法遭贬，然王安石退居后二人金陵相会，诗文唱和。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 15,
    name: '章惇',
    title: '政敌',
    intro: '字子厚。绍圣年间任相，将苏轼一贬再贬至惠州、儋州。早年与苏轼为友，后因党争反目。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 16,
    name: '沈括',
    title: '同僚',
    intro: '字存中，《梦溪笔谈》作者。与苏轼同在崇文院任职，后在两浙考察时录苏轼诗作，或为乌台诗案伏笔。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 17,
    name: '秦观',
    title: '门生',
    intro: '字少游，号淮海居士。"苏门四学士"之一，婉约词代表。苏轼赞其才，因苏荐而入仕。',
    ring: 3,
    color: COLOR_RING3,
  },
  {
    id: 18,
    name: '佛印',
    title: '方外之交',
    intro: '金山寺名僧，俗姓林。与苏轼多有禅机对答，"狗子吃佛"等公案流传甚广，为苏轼晚年精神知交。',
    ring: 3,
    color: COLOR_RING3,
  },
];

// 人物关系清单
export const relationships: Relationship[] = [
  // ===== 主线关系（主角 ↔ 各人物） =====
  {
    id: 1,
    fromId: 0,
    toId: 1,
    type: '父子',
    description: '苏洵二十七岁发愤读书，后亲自教导苏轼兄弟。携二子进京拜见欧阳修，使"三苏"名动天下。苏轼在《三字经》中"苏老泉，二十七"成为勤学典范。',
    intensity: 'high',
  },
  {
    id: 2,
    fromId: 0,
    toId: 2,
    type: '母子',
    description: '程氏是苏轼的启蒙恩师。教苏轼读《后汉书·范滂传》，苏轼问"轼若为滂，母许之否乎"，程氏答"汝能为滂，吾顾不能为滂母耶"——以气节立人，是苏轼一生的精神根基。',
    intensity: 'high',
  },
  {
    id: 3,
    fromId: 0,
    toId: 3,
    type: '兄弟',
    description: '苏轼与苏辙一生相知相念。二人同榜进士，仕途上互相扶持。1076年中秋，苏轼在密州大醉怀念弟弟作《水调歌头·明月几时有》——"但愿人长久，千里共婵娟"成千古绝唱。',
    intensity: 'high',
  },
  {
    id: 4,
    fromId: 0,
    toId: 4,
    type: '夫妻',
    description: '王弗十六岁嫁苏轼，聪慧沉静。苏轼早年仕途，王弗常"幕后听言"提醒其识人。王弗二十七岁早逝，十年后苏轼写下"十年生死两茫茫，不思量，自难忘"——中国文学史第一悼亡词。',
    intensity: 'high',
  },
  {
    id: 5,
    fromId: 0,
    toId: 5,
    type: '夫妻',
    description: '王闰之是王弗堂妹，在王弗去世后嫁苏轼。她伴随苏轼经历凤翔、杭州、密州、徐州及乌台诗案的风雨。在黄州陪伴开荒种田，1093年去世，苏轼悲痛欲绝。',
    intensity: 'high',
  },
  {
    id: 6,
    fromId: 0,
    toId: 6,
    type: '知己',
    description: '王朝云钱塘人，十二岁入苏府。在众侍妾散去后独随苏轼南贬惠州，"一肚皮不合时宜"之语传为佳话。1096年病逝惠州，苏轼葬她于西湖孤山，"伤心一念偿前债，弹指三生断后缘"。',
    intensity: 'high',
  },
  {
    id: 7,
    fromId: 0,
    toId: 7,
    type: '师徒',
    description: '欧阳修读苏轼文章后惊呼"老夫当避路，放他出一头地"，将文坛盟主之位托付。欧阳修是苏轼的恩师与伯乐，苏轼继承其古文革新运动，终成宋代文学第一人。',
    intensity: 'high',
  },
  {
    id: 8,
    fromId: 0,
    toId: 8,
    type: '同僚',
    description: '司马光与苏轼同属旧党，皆反对王安石新法。但元祐年间司马光尽废新法时，苏轼认为免役法不可尽废，当庭与司马光争辩。二人虽有分歧，仍互相尊重。',
    intensity: 'medium',
  },
  {
    id: 9,
    fromId: 0,
    toId: 9,
    type: '知遇',
    description: '高太后临朝听政后召苏轼回京，不到一年从贬臣升至翰林学士知制诰。高太后对苏轼说"先帝每诵卿文章，必叹奇才未用"——宋神宗一直想重用苏轼，未来得及便驾崩了。',
    intensity: 'high',
  },
  {
    id: 10,
    fromId: 0,
    toId: 10,
    type: '恩人',
    description: '张方平是最早识拔苏洵父子的重臣，资助三苏进京。乌台诗案时，已致仕的张方平上书营救苏轼。苏轼一生感念张方平的知遇之恩，视为前辈至交。',
    intensity: 'medium',
  },
  {
    id: 11,
    fromId: 0,
    toId: 11,
    type: '父子',
    description: '苏迈为王弗所生，是苏轼长子。乌台诗案时苏迈每日送饭入狱，约定"平日送菜，有凶信则送鱼"。在黄州苏迈分担耕作，随父亲度过最艰难岁月。',
    intensity: 'high',
  },
  {
    id: 12,
    fromId: 0,
    toId: 12,
    type: '父子',
    description: '苏过是王闰之所生，随父渡海至儋州。在海南三年与父亲同甘共苦，尽得苏轼书画之传，时称"小坡"。苏轼北归后苏过亦随之，后居颍昌，著《斜川集》。',
    intensity: 'high',
  },
  {
    id: 13,
    fromId: 0,
    toId: 13,
    type: '师徒',
    description: '黄庭坚出苏轼门下，"苏门四学士"之首。苏轼赞其"超逸绝尘，独立万物之表"。二人书法并称"苏黄"，诗歌并称"苏黄"。苏轼贬谪后黄庭坚亦受牵连，仍不改师门之谊。',
    intensity: 'high',
  },
  {
    id: 14,
    fromId: 0,
    toId: 14,
    type: '政敌',
    description: '王安石主导熙宁变法，苏轼因反对新法屡遭贬谪。然王安石退居金陵后，苏轼特往拜访，二人诗文唱和相得甚欢。王安石叹"不知更几百年方有如此人物"。',
    intensity: 'medium',
  },
  {
    id: 15,
    fromId: 0,
    toId: 15,
    type: '政敌',
    description: '章惇早年与苏轼为友，同游终南山。绍圣年间章惇任相，将苏轼一贬惠州再贬儋州，欲置之死地。苏轼北归时章惇失势，其子章援写信试探，苏轼回信宽慰，不加报复。',
    intensity: 'high',
  },
  {
    id: 16,
    fromId: 0,
    toId: 16,
    type: '同僚',
    description: '沈括与苏轼曾在崇文院同僚。后沈括出使两浙，将苏轼诗作抄录带回，被认为乌台诗案的伏笔之一。二人关系微妙，沈括在《梦溪笔谈》中也记录了苏轼的科学见解。',
    intensity: 'low',
  },
  {
    id: 17,
    fromId: 0,
    toId: 17,
    type: '师徒',
    description: '秦观为"苏门四学士"之一，婉约词大家。苏轼见其诗赞"才难难得"，力荐入仕。秦观一生追随苏轼，因党争牵连亦遭贬谪。苏轼闻秦观去世，悲痛不已。',
    intensity: 'medium',
  },
  {
    id: 18,
    fromId: 0,
    toId: 18,
    type: '方外',
    description: '佛印是金山寺名僧，与苏轼多有禅机对答。"狗子吃佛""一肚皮不合时宜"等公案广为流传。苏轼晚年好佛，佛印是其精神世界中重要的方外知交。',
    intensity: 'low',
  },

  // ===== 副线关系（人物之间） =====
  {
    id: 19,
    fromId: 1,
    toId: 2,
    type: '夫妻',
    description: '苏洵与程氏是苏轼的父母。程氏出身眉山名门，苏洵二十七岁发愤读书后，程氏全力支持，亲自教导苏轼兄弟。二人共同奠定了"三苏"家族的学问与气节根基。',
    intensity: 'high',
  },
  {
    id: 20,
    fromId: 4,
    toId: 5,
    type: '堂姐妹',
    description: '王弗与王闰之是堂姐妹。王弗去世后，苏轼续娶堂妹王闰之，延续了与王家的姻亲关系。王闰之善待王弗所生苏迈，视如己出。',
    intensity: 'medium',
  },
  {
    id: 21,
    fromId: 7,
    toId: 1,
    type: '知交',
    description: '欧阳修与苏洵为知交。苏洵携二子进京时，欧阳修读苏洵文章赞"可与刘向、贾谊相上下"。欧阳修识拔三苏父子，是"三苏"成名天下的关键推手。',
    intensity: 'medium',
  },
  {
    id: 22,
    fromId: 8,
    toId: 14,
    type: '政敌',
    description: '司马光与王安石在变法问题上针锋相对。司马光反对新法，王安石推行新法。元祐年间司马光执政尽废新法，而苏轼认为不当尽废，体现了独立的政治立场。',
    intensity: 'medium',
  },
];

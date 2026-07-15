// 曾国藩传（张宏杰著）经典金句
// 数据来源：原书正文引用的曾国藩家书、日记及他人评价
export interface Quote {
  id: number;
  text: string;
  source: string;
  year: string;
  speaker?: string;
  emotion?: string;
}

export const quotes: Quote[] = [
  { id: 1, text: '不为圣贤，便为禽兽。', source: '曾国藩诗文·励志', year: '1841', speaker: '曾国藩', emotion: '决绝' },
  { id: 2, text: '天下之至拙，能胜天下之至巧。', source: '曾国藩传·第一章', year: '1833', speaker: '曾国藩', emotion: '笃定' },
  { id: 3, text: '结硬寨，打呆仗。', source: '曾国藩全集·奏稿', year: '1860', speaker: '曾国藩', emotion: '坚韧' },
  { id: 4, text: '好汉打脱牙和血吞。', source: '曾国藩传·第五章', year: '1853', speaker: '曾国藩', emotion: '隐忍' },
  { id: 5, text: '倚天照海花无数，流水高山心自知。', source: '曾国藩传·第十二章', year: '1864', speaker: '曾国藩', emotion: '淡泊' },
  { id: 6, text: '谋国之忠，知人之明，自愧不如元辅。同心若金，攻错若石，相期无负平生。', source: '左宗棠挽曾国藩联', year: '1872', speaker: '左宗棠', emotion: '敬服' },
  { id: 7, text: '李少荃拼命做官，俞荫甫拼命著书。', source: '曾国藩传·第十五章', year: '1865', speaker: '曾国藩', emotion: '洞察' },
  { id: 8, text: '天下事在局外呐喊议论，总是无益，必须躬自入局，挺膺负责，乃有成事之可冀。', source: '曾国藩家书', year: '1860', speaker: '曾国藩', emotion: '担当' },
  { id: 9, text: '莫问收获，但问耕耘。', source: '曾国藩家书', year: '1850', speaker: '曾国藩', emotion: '踏实' },
  { id: 10, text: '有恒为作圣之基。', source: '曾国藩传·第二章', year: '1842', speaker: '曾国藩', emotion: '坚毅' },
  { id: 11, text: '凡人作一事，便须全副精神注在此一事，首尾不懈，不可见异思迁。人而无恒，终身一无所成。', source: '曾国藩家书·致诸弟', year: '1842', speaker: '曾国藩', emotion: '恳切' },
  { id: 12, text: '天下无易境，天下无难境；终身有乐处，终身有忧处。', source: '曾国藩传·第十一章', year: '1862', speaker: '曾国藩', emotion: '通达' },
  { id: 13, text: '倔强二字，却不可少。功业文章，皆须有此二字贯注其中，否则柔靡不能成一事。', source: '曾国藩全集·家书', year: '1842', speaker: '曾国藩', emotion: '刚毅' },
  { id: 14, text: '予自三十岁以来，即以做官发财为可耻，以宦囊积金遗子孙为可羞可恨，故私心立誓，总不靠做官发财以遗后人。神明鉴临，予不食言。', source: '曾国藩家书·致诸弟', year: '1849', speaker: '曾国藩', emotion: '清廉' },
  { id: 15, text: '君子之立志也，有民胞物与之量，有内圣外王之业，而后不忝于父母之所生，不愧为天地之完人。', source: '曾国藩家书·致诸弟', year: '1842', speaker: '曾国藩', emotion: '宏毅' },
  { id: 16, text: '打得通的，便是好汉。', source: '曾国藩家书·致诸弟', year: '1842', speaker: '曾国藩', emotion: '刚韧' },
  { id: 17, text: '大抵天下无完全无间之人才，亦无完全无隙之交情。大者得正，而小者包荒，斯可耳。', source: '曾国藩传·第十五章', year: '1865', speaker: '曾国藩', emotion: '包容' },
  { id: 18, text: '文正固非有超群绝伦之天才，在并时诸贤杰中称最钝拙。', source: '梁启超论曾国藩', year: '1900', speaker: '梁启超', emotion: '客观' },
  { id: 19, text: '勿忘勿助，看平地长得万丈高。', source: '曾国藩全集·诗文', year: '1860', speaker: '曾国藩', emotion: '从容' },
  { id: 20, text: '穷天下力，复此金汤；苦哉将士，来者勿忘！', source: '曾国藩·金陵缺口记事碑', year: '1864', speaker: '曾国藩', emotion: '悲悯' },
];

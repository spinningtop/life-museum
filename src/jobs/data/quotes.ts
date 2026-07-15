// 金句廊数据
// 数据来源：沃尔特·艾萨克森《史蒂夫·乔布斯传》（中信出版社2011年10月第1版）
// 收录乔布斯本人的经典语录与书中他人对他的评价，共18条

export interface Quote {
  id: number;
  text: string;
  source: string;
  year: string;
  speaker?: string;
  emotion?: string;
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: '那些疯狂到以为自己能够改变世界的人，才能真正改变世界。',
    source: '苹果"非同凡想"广告',
    year: '1997',
    speaker: '史蒂夫·乔布斯',
    emotion: 'triumphant',
  },
  {
    id: 2,
    text: '求知若饥，虚心若愚。',
    source: '斯坦福大学毕业典礼演讲（引《全球概览》告别刊）',
    year: '2005',
    speaker: '史蒂夫·乔布斯',
    emotion: 'philosophical',
  },
  {
    id: 3,
    text: '你无法在向前看时把生命中的点点滴滴串联起来，唯有在向后回顾时，才会发现它们之间的联系。',
    source: '斯坦福大学毕业典礼演讲·第一个故事',
    year: '2005',
    speaker: '史蒂夫·乔布斯',
    emotion: 'reflective',
  },
  {
    id: 4,
    text: '记住自己很快就要死了，是我面对人生重大选择时最重要的工具。因为几乎一切——所有外界的期望、所有骄傲、所有对于困窘和失败的恐惧——在死亡面前都烟消云散，只留下真正重要的东西。',
    source: '斯坦福大学毕业典礼演讲·第三个故事',
    year: '2005',
    speaker: '史蒂夫·乔布斯',
    emotion: 'philosophical',
  },
  {
    id: 5,
    text: '你是想卖一辈子糖水呢，还是想抓住机会来改变世界？',
    source: '劝诱约翰·斯卡利加入苹果',
    year: '1983',
    speaker: '史蒂夫·乔布斯',
    emotion: 'passionate',
  },
  {
    id: 6,
    text: '如果不是因为蓝盒子，就不会有苹果公司，这一点我百分百确定。',
    source: '回忆少年时代蓝盒子经历',
    year: '1971',
    speaker: '史蒂夫·乔布斯',
    emotion: 'reflective',
  },
  {
    id: 7,
    text: '我们是专门挑的你。',
    source: '养父母向幼年乔布斯解释领养',
    year: '1961',
    speaker: '保罗·乔布斯 / 克拉拉·乔布斯',
    emotion: 'reflective',
  },
  {
    id: 8,
    text: '在那种疯狂中，我们看到了天才。',
    source: '波士顿Macworld大会主题演讲',
    year: '1997',
    speaker: '史蒂夫·乔布斯',
    emotion: 'triumphant',
  },
  {
    id: 9,
    text: '把1000首歌装进口袋。',
    source: 'iPod发布会',
    year: '2001',
    speaker: '史蒂夫·乔布斯',
    emotion: 'passionate',
  },
  {
    id: 10,
    text: '今天，有史以来第一次，我要让麦金塔自己说话。',
    source: '麦金塔电脑发布会',
    year: '1984',
    speaker: '史蒂夫·乔布斯',
    emotion: 'triumphant',
  },
  {
    id: 11,
    text: '我的激情所在是打造一家可以传世的公司，这家公司里的人动力十足地创造伟大的产品。其他一切都是第二位的。',
    source: '遗产章节·乔布斯自述',
    year: '2011',
    speaker: '史蒂夫·乔布斯',
    emotion: 'philosophical',
  },
  {
    id: 12,
    text: '也许这就是为什么我从不喜欢给苹果产品加上开关吧。',
    source: '临终前对死亡与来世的沉思',
    year: '2011',
    speaker: '史蒂夫·乔布斯',
    emotion: 'dark',
  },
  {
    id: 13,
    text: '他需要一个在宇宙中留下印迹的产品。',
    source: '作者引述乔布斯的抱负',
    year: '1980',
    speaker: '沃尔特·艾萨克森',
    emotion: 'reflective',
  },
  {
    id: 14,
    text: '我的工程技术和他的远见卓识结合起来，我们可以做出怎样的一番事业。',
    source: '回忆蓝盒子与苹果创业',
    year: '1971',
    speaker: '斯蒂芬·沃兹尼亚克',
    emotion: 'reflective',
  },
  {
    id: 15,
    text: '史蒂夫是一个会侮辱人、伤害人的家伙。',
    source: '《时代》杂志采访',
    year: '1985',
    speaker: '斯蒂芬·沃兹尼亚克',
    emotion: 'dark',
  },
  {
    id: 16,
    text: '对于史蒂夫来说，最好的事情就是我们解雇了他，叫他滚蛋。',
    source: '评价乔布斯离开苹果',
    year: '1985',
    speaker: '亚瑟·罗克',
    emotion: 'reflective',
  },
  {
    id: 17,
    text: '他带着一种使命回来了。虽然他现在是在掌管一家大企业，但他不断采取一些大胆的举动，我觉得除了他任何人都不会这么做。',
    source: '回忆乔布斯癌症术后重返苹果',
    year: '2005',
    speaker: '蒂姆·库克',
    emotion: 'passionate',
  },
  {
    id: 18,
    text: '被遗弃。被选择。很特别。这些概念成为了乔布斯的一部分，也影响了他对自己的看法。',
    source: '前言·对乔布斯心理的概括',
    year: '1955',
    speaker: '沃尔特·艾萨克森',
    emotion: 'reflective',
  },
];

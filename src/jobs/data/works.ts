// 史蒂夫·乔布斯成就版图数据
// 数据来源：沃尔特·艾萨克森《史蒂夫·乔布斯传》（2011）

export interface Work {
  id: number;
  title: string;        // 作品名称
  year: string;
  category: string;     // 分类
  description: string;
  significance: 'high' | 'medium' | 'low';
}

export const works: Work[] = [
  {
    id: 1,
    title: 'Apple I',
    year: '1976',
    category: '个人电脑',
    description: '沃兹尼亚克设计的主板，乔布斯负责包装与销售。1976年在字节商店以666.66美元发售，共生产约200台。这是苹果公司第一款产品，确立了"沃兹造机、乔布斯造市"的合作模式。',
    significance: 'medium',
  },
  {
    id: 2,
    title: 'Apple II',
    year: '1977',
    category: '个人电脑',
    description: '人类历史上第一台真正面向大众的个人电脑。一体化注塑外壳、集成键盘、彩色图形显示。销售长达16年，销量逾600万台，让苹果在1980年上市，乔布斯25岁身价过亿。它引爆了个人计算机革命。',
    significance: 'high',
  },
  {
    id: 3,
    title: 'Macintosh',
    year: '1984',
    category: '个人电脑',
    description: '第一台商业成功的图形界面电脑，配备鼠标、窗口、图标。1984年1月24日发布，电脑首次"开口说话"。虽初期销量不及预期，却奠定了此后三十年所有人机交互的基础范式。',
    significance: 'high',
  },
  {
    id: 4,
    title: 'NeXT Computer',
    year: '1988',
    category: '工作站',
    description: '1988年发布的黑色镁合金立方体电脑，每台6500美元。面向教育市场未获商业成功，但其操作系统NeXTSTEP成为日后macOS与iOS的技术根基。1990年蒂姆·伯纳斯-李正是在NeXTcube上写出了第一个万维网浏览器。',
    significance: 'medium',
  },
  {
    id: 5,
    title: 'Toy Story（玩具总动员）',
    year: '1995',
    category: '动画电影',
    description: '史上首部全计算机生成的动画长片，皮克斯制作、迪士尼发行。全球票房3.61亿美元，让皮克斯1995年上市当日乔布斯身价跃升至12亿美元，远超苹果时期。这部电影开启了3D动画时代。',
    significance: 'high',
  },
  {
    id: 6,
    title: 'iMac G3',
    year: '1998',
    category: '个人电脑',
    description: '1998年5月发布的一体化半透明糖果色电脑，邦戈蓝外壳颠覆了米色机箱传统。乔布斯回归苹果后首款代表作，售价1299美元，上市数月销量80万台，扭亏为盈，标志苹果蓝色拯救行动成功。',
    significance: 'high',
  },
  {
    id: 7,
    title: 'iPod',
    year: '2001',
    category: '音乐设备',
    description: '2001年10月发布的硬盘式MP3播放器，5GB容量"装一千首歌"。滚轮操作、白色耳塞、极简界面。它重塑了音乐产业，为日后iPhone的诞生埋下伏笔——"iPod+手机+上网终端"三位一体。',
    significance: 'high',
  },
  {
    id: 8,
    title: 'iTunes Store',
    year: '2003',
    category: '数字服务',
    description: '2003年4月上线，每首歌0.99美元单曲购买。在盗版盛行的年代，它用合法、便捷、定价合理的数字分发拯救了唱片业。至2010年累计售出100亿首歌曲，成为全球最大音乐零售商。',
    significance: 'high',
  },
  {
    id: 9,
    title: 'iPhone',
    year: '2007',
    category: '智能手机',
    description: '2007年1月9日发布，6月上市。多点触控屏取代键盘，重新定义手机。"今天苹果重新发明了手机"。它引爆移动互联网革命，诺基亚、黑莓帝国崩塌，重塑了人类注意力、社交与生活方式。',
    significance: 'high',
  },
  {
    id: 10,
    title: 'App Store',
    year: '2008',
    category: '数字服务',
    description: '2008年7月上线，第三方开发者可上架应用，苹果抽成30%。它创造了"应用经济"——一个全新的全球产业，至2020年累计为开发者创造超1550亿美元收入，让iPhone从设备进化为生态平台。',
    significance: 'high',
  },
  {
    id: 11,
    title: 'iPad',
    year: '2010',
    category: '平板电脑',
    description: '2010年1月27日发布，499美元起。在手机与笔记本之间开创平板品类，80天售出300万台。乔布斯称其为"后PC时代"的标志，证明简洁的触摸体验将取代复杂的键鼠操作。',
    significance: 'high',
  },
  {
    id: 12,
    title: 'iCloud',
    year: '2011',
    category: '云服务',
    description: '2011年6月WWDC发布，取代此前MobileMe。乔布斯亲自登台介绍"PC褪去中心地位"的愿景——所有设备无缝同步照片、文档、音乐。这是他生前最后一次重要产品发布，将苹果生态延伸至云端。',
    significance: 'medium',
  },
];

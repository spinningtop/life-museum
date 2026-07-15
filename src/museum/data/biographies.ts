// 人生博物馆 · 馆藏传记列表
export interface Biography {
  id: string;          // 传记唯一标识
  name: string;        // 传记名
  subtitle: string;    // 副标题
  era: string;         // 生卒年代
  bioUrl: string;      // 传记详情页路由
  coverColor: string;  // 封面主色
  tagline: string;     // 人物标签（一句话身份）
}

export const biographies: Biography[] = [
  {
    id: 'musk',
    name: '埃隆·马斯克传',
    subtitle: '从南非少年到火星使者',
    era: '1971—至今',
    bioUrl: '/musk',
    coverColor: '#FF6B35',
    tagline: '冒险家',
  },
  {
    id: 'sudongpo',
    name: '苏东坡传',
    subtitle: '从眉山少年到岭海流放',
    era: '1037—1101',
    bioUrl: '/sudongpo',
    coverColor: '#D4A574',
    tagline: '文人',
  },
];

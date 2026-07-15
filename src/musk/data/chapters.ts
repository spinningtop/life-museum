// 人生7个阶段定义
export interface LifeStage {
  id: number;
  title: string;
  period: string;
  yearRange: string;
  color: string;
  colorLight: string;
  description: string;
  keyEvents: string;
}

export const lifeStages: LifeStage[] = [
  {
    id: 1,
    title: '比勒陀利亚的少年',
    period: '1971—1989',
    yearRange: '1971-1989',
    color: '#8B0000',
    colorLight: '#C0392B',
    description: '在南非的暴力与父亲的阴影中成长，童年的痛苦塑造了一个冒险家的灵魂',
    keyEvents: '出生、校园欺凌、父亲折磨、野外学校、编写游戏、离开南非',
  },
  {
    id: 2,
    title: '加拿大与大学时代',
    period: '1989—1995',
    yearRange: '1989-1995',
    color: '#1B4F72',
    colorLight: '#2E86C1',
    description: '横跨北美大陆求学，在女王大学和宾大找到人生方向——互联网、可持续能源、太空旅行',
    keyEvents: '抵达加拿大、女王大学、宾大转学、硅谷实习、构思三个影响人类的领域',
  },
  {
    id: 3,
    title: '互联网创业浪潮',
    period: '1995—2002',
    yearRange: '1995-2002',
    color: '#1D8348',
    colorLight: '#27AE60',
    description: '从Zip2到PayPal，在互联网黄金时代完成原始积累，也经历了第一次被驱逐',
    keyEvents: 'Zip2创业、被收购、X.com、PayPal政变、疟疾濒死、eBay收购',
  },
  {
    id: 4,
    title: '至暗时刻',
    period: '2002—2008',
    yearRange: '2002-2008',
    color: '#B7472A',
    colorLight: '#E67E22',
    description: 'SpaceX三次火箭爆炸，Tesla濒临破产，婚姻破裂——人生最地狱的时期',
    keyEvents: 'SpaceX创立、Tesla投资、猎鹰1号三次失败、2008年危机、第三次试射失败',
  },
  {
    id: 5,
    title: '绝处逢生',
    period: '2008—2015',
    yearRange: '2008-2015',
    color: '#B7950B',
    colorLight: '#F1C40F',
    description: '第四次发射成功，NASA救命合同，Model S横空出世，Tesla上市——从地狱到天堂',
    keyEvents: '第四次发射成功、NASA 16亿合同、Model S、IPO、与妲露拉结婚、猎鹰9号升空',
  },
  {
    id: 6,
    title: '扩张与黑暗',
    period: '2015—2019',
    yearRange: '2015-2019',
    color: '#6C3483',
    colorLight: '#8E44AD',
    description: 'OpenAI、量产地狱、SEC和解、上海建厂——在疯狂扩张中跌入最黑暗的深渊',
    keyEvents: 'OpenAI创立、Model 3量产地狱、私有化推文、SEC和解、上海建厂、Cybertruck发布',
  },
  {
    id: 7,
    title: '狂人时代',
    period: '2020—2023',
    yearRange: '2020-2023',
    color: '#85929E',
    colorLight: '#AEB6BF',
    description: '载人航天、收购Twitter、创立X.AI、星舰首飞——成为世界首富后的疯狂岁月',
    keyEvents: '载人航天、Twitter收购、"水槽"名场面、X.AI创立、星舰2023年4月首飞爆炸',
  },
];

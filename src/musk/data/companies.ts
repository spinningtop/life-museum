// 公司版图数据
export interface Company {
  id: number;
  name: string;
  nameEn: string;
  foundedYear: string;
  role: string;
  description: string;
  detail: string;
  color: string;
  icon: string;
}

export const companies: Company[] = [
  {
    id: 1,
    name: 'Zip2',
    nameEn: 'Zip2 Corporation',
    foundedYear: '1995',
    role: '联合创始人 / CTO',
    description: '把企业名录和地图结合的互联网黄页',
    detail: '马斯克和弟弟金博尔在帕洛阿尔托创办，睡在办公室地板上。1999年被康柏以3.07亿美元收购，27岁的马斯克获得2200万美元。',
    color: '#2E86C1',
    icon: 'map',
  },
  {
    id: 2,
    name: 'X.com / PayPal',
    nameEn: 'X.com / PayPal',
    foundedYear: '1999',
    role: '联合创始人 / 董事长 / 前CEO',
    description: '一站式在线银行，颠覆传统金融支付',
    detail: '马斯克投资1200万美元创办X.com，与Confinity合并后改名PayPal。蜜月期间被政变推翻，但2002年eBay以15亿美元收购，马斯克获利2.5亿美元。',
    color: '#27AE60',
    icon: 'credit-card',
  },
  {
    id: 3,
    name: 'SpaceX',
    nameEn: 'Space Exploration Technologies',
    foundedYear: '2002',
    role: '创始人 / CEO / 首席工程师',
    description: '目标是殖民火星的革命性火箭公司',
    detail: '从俄罗斯买火箭失败后，用"白痴指数"概念决定自己造。首创可重复使用火箭、固定价格合同模式。2008年第四次发射成功挽救公司，2020年首次载人航天。',
    color: '#E63946',
    icon: 'rocket',
  },
  {
    id: 4,
    name: 'Tesla',
    nameEn: 'Tesla, Inc.',
    foundedYear: '2003',
    role: '投资人 / 董事会主席 / CEO',
    description: '加速世界向可持续能源的转变',
    detail: '2004年领投640万美元天使轮，2008年接任CEO。从Roadster到Model S/3/Y/Cybertruck，颠覆百年汽车工业。上海超级工厂创造"中国速度"。',
    color: '#CC0000',
    icon: 'car',
  },
  {
    id: 5,
    name: 'SolarCity',
    nameEn: 'SolarCity Corporation',
    foundedYear: '2006',
    role: '投资人 / 董事会主席',
    description: '太阳能服务与光伏发电系统',
    detail: '表弟林登和彼得·赖夫创办，马斯克投资1000万美元启动。2016年被Tesla收购，整合为Tesla能源部门。',
    color: '#F39C12',
    icon: 'sun',
  },
  {
    id: 6,
    name: 'OpenAI',
    nameEn: 'OpenAI',
    foundedYear: '2015',
    role: '联合创始人 / 投资人',
    description: '非营利性人工智能研究实验室',
    detail: '与山姆·阿尔特曼共同创办，对抗谷歌垄断AI。捐赠1亿美元，后因转向营利模式与阿尔特曼决裂。2023年马斯克创立X.AI与之竞争。',
    color: '#8E44AD',
    icon: 'brain',
  },
  {
    id: 7,
    name: 'Boring Company',
    nameEn: 'The Boring Company',
    foundedYear: '2016',
    role: '创始人',
    description: '地下隧道交通解决城市拥堵',
    detail: '因堵车发推抱怨后真的创办了公司。自掏1亿美元投资，2018年原型隧道完工。卖火焰喷射器筹资，马斯克式幽默的体现。',
    color: '#5D6D7E',
    icon: 'shovel',
  },
  {
    id: 8,
    name: 'Neuralink',
    nameEn: 'Neuralink Corporation',
    foundedYear: '2017',
    role: '创始人',
    description: '脑机接口连接人类大脑与计算机',
    detail: '旨在打造植入式脑机接口芯片，既是应对AI威胁的策略，也表达对亲密情感关系的心理诉求。2023年获FDA批准人体临床试验。',
    color: '#1ABC9C',
    icon: 'cpu',
  },
  {
    id: 9,
    name: 'Twitter / X',
    nameEn: 'X Corp. (formerly Twitter)',
    foundedYear: '2022',
    role: '所有者 / 执行董事长',
    description: '440亿美元收购的"终极游乐场"',
    detail: '从秘密购股到"我可把水槽抱进来啦"名场面，50%大裁员、"硬核"最后通牒、Twitter Files发布——收购过程本身就是一出史诗级戏剧。',
    color: '#1DA1F2',
    icon: 'message-circle',
  },
  {
    id: 10,
    name: 'X.AI',
    nameEn: 'xAI',
    foundedYear: '2023',
    role: '创始人',
    description: '追求真理的人工智能公司',
    detail: '马斯克对AI安全忧虑的最终回应。目标打造"关心对宇宙理解"的AI，保护人类文明。意识到Twitter数据对AI训练的独特价值。',
    color: '#2C3E50',
    icon: 'sparkles',
  },
];

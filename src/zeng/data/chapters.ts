// 曾国藩传（张宏杰著，民主与建设出版社，2018）章节定义
// 数据来源：原书目录及正文
export interface Chapter {
  id: number;
  title: string;
  pageRange: string;
}

export const chapters: Chapter[] = [
  { id: 1, title: '曾国藩的七次科举之痛', pageRange: '11-25' },
  { id: 2, title: '为什么要"学做圣人"', pageRange: '26-44' },
  { id: 3, title: '惊人的进阶之道', pageRange: '45-56' },
  { id: 4, title: '从前的官场愣头青', pageRange: '57-83' },
  { id: 5, title: '"曾剃头"的长沙之辱', pageRange: '85-100' },
  { id: 6, title: '湘军为什么牛气', pageRange: '101-126' },
  { id: 7, title: '得而复失的湖北巡抚', pageRange: '127-150' },
  { id: 8, title: '江西困境与"大悔大悟"', pageRange: '151-184' },
  { id: 9, title: '安庆这块难啃的骨头', pageRange: '185-228' },
  { id: 10, title: '与何桂清的恩怨纠葛', pageRange: '229-246' },
  { id: 11, title: '太平天国最后的战役', pageRange: '247-274' },
  { id: 12, title: '"将权位二字，推让少许"', pageRange: '275-287' },
  { id: 13, title: '两江总督的清与浊', pageRange: '288-318' },
  { id: 14, title: '洋人也是人', pageRange: '319-357' },
  { id: 15, title: '与接班人李鸿章共同"剿"捻', pageRange: '358-378' },
  { id: 16, title: '天津教案：曾国藩是怎么成为"卖国贼"的', pageRange: '379-394' },
  { id: 17, title: '大清王朝最后的领航者', pageRange: '395-412' },
];

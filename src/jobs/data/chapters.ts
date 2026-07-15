// 章节定义数据
// 数据来源：沃尔特·艾萨克森《史蒂夫·乔布斯传》（中信出版社2011年10月第1版）
// 全书共41章，页码范围依据原书目录整理

export interface Chapter {
  id: number;
  title: string;
  pageRange: string;
}

export const chapters: Chapter[] = [
  { id: 1, title: '童年', pageRange: '001-018' },
  { id: 2, title: '奇特的一对', pageRange: '019-027' },
  { id: 3, title: '出离', pageRange: '028-037' },
  { id: 4, title: '雅达利与印度', pageRange: '038-049' },
  { id: 5, title: 'Apple I', pageRange: '050-063' },
  { id: 6, title: 'Apple II', pageRange: '064-076' },
  { id: 7, title: '克里斯安和丽萨', pageRange: '077-082' },
  { id: 8, title: '施乐和丽萨', pageRange: '083-091' },
  { id: 9, title: '上市', pageRange: '092-097' },
  { id: 10, title: 'Mac诞生了', pageRange: '098-105' },
  { id: 11, title: '现实扭曲力场', pageRange: '106-113' },
  { id: 12, title: '设计', pageRange: '114-123' },
  { id: 13, title: '制造Mac', pageRange: '124-136' },
  { id: 14, title: '斯卡利来了', pageRange: '137-146' },
  { id: 15, title: '麦金塔电脑的发布', pageRange: '147-157' },
  { id: 16, title: '盖茨与乔布斯', pageRange: '158-166' },
  { id: 17, title: '伊卡洛斯', pageRange: '167-196' },
  { id: 18, title: 'NeXT', pageRange: '197-221' },
  { id: 19, title: '皮克斯', pageRange: '222-231' },
  { id: 20, title: '凡人', pageRange: '232-259' },
  { id: 21, title: '玩具总动员', pageRange: '260-267' },
  { id: 22, title: '再度降临', pageRange: '268-278' },
  { id: 23, title: '回归', pageRange: '279-299' },
  { id: 24, title: '非同凡想', pageRange: '300-310' },
  { id: 25, title: '设计原则', pageRange: '311-318' },
  { id: 26, title: 'iMac', pageRange: '319-327' },
  { id: 27, title: 'CEO', pageRange: '328-338' },
  { id: 28, title: '苹果零售店', pageRange: '339-347' },
  { id: 29, title: '数字中枢', pageRange: '348-363' },
  { id: 30, title: 'iTunes商店', pageRange: '364-379' },
  { id: 31, title: '爱音乐的人', pageRange: '380-394' },
  { id: 32, title: '皮克斯的朋友', pageRange: '395-411' },
  { id: 33, title: '21世纪的Mac', pageRange: '412-418' },
  { id: 34, title: '第一回合', pageRange: '419-430' },
  { id: 35, title: 'iPhone', pageRange: '431-439' },
  { id: 36, title: '第二回合', pageRange: '440-451' },
  { id: 37, title: 'iPad', pageRange: '452-469' },
  { id: 38, title: '新的战斗', pageRange: '470-482' },
  { id: 39, title: '飞向太空', pageRange: '483-493' },
  { id: 40, title: '第三回合', pageRange: '494-511' },
  { id: 41, title: '遗产', pageRange: '512-521' },
];

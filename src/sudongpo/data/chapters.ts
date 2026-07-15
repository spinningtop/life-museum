// 人生4个阶段定义
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
    title: '少年英才',
    period: '1037—1056',
    yearRange: '1037-1056',
    color: '#5B8C5A',
    colorLight: '#7AB87A',
    description: '眉山苏氏之子，幼承母教，博览群书，少年便展露惊世才华',
    keyEvents: '眉山出生、母亲程氏教导、苏洵教子、读《后汉书·范滂传》',
  },
  {
    id: 2,
    title: '金榜题名',
    period: '1057—1078',
    yearRange: '1057-1078',
    color: '#B7950B',
    colorLight: '#D4AC0D',
    description: '欧阳修赏拔，名动京师，初入仕途，父亲与爱妻却相继离世',
    keyEvents: '欧阳修识拔、金榜题名、凤翔赴任、苏洵去世、王弗病逝、续娶王闰之',
  },
  {
    id: 3,
    title: '党争沉浮',
    period: '1079—1093',
    yearRange: '1079-1093',
    color: '#C0392B',
    colorLight: '#E74C3C',
    description: '乌台诗案险死还生，黄州贬谪成就千古文章，元祐回朝位至翰林',
    keyEvents: '乌台诗案、黄州贬谪、赤壁夜游、东坡雪堂、元祐回朝、翰林学士',
  },
  {
    id: 4,
    title: '岭海流放',
    period: '1094—1101',
    yearRange: '1094-1101',
    color: '#6C3483',
    colorLight: '#8E44AD',
    description: '一贬再贬至惠州、儋州，九死南荒却旷达自如，北归途中病逝常州',
    keyEvents: '惠州贬谪、朝云病逝、儋州三年、著书授徒、遇赦北归、病逝常州',
  },
];

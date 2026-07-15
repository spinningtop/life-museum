// 曾国藩传（张宏杰著）人生足迹
// 数据来源：原书正文
// 坐标转换公式：lng = x/100*360-180, lat = 90-y/100*180
export interface Location {
  id: number;
  name: string;
  year: string;
  event: string;
  x: number;
  y: number;
  lat?: number;
  lng?: number;
  significance: 'high' | 'medium' | 'low';
}

export const locations: Location[] = [
  { id: 1, name: '湘乡白杨坪', year: '1811', event: '曾国藩出生之地，祖父曾玉屏在此兴家立业，在此度过少年苦读时光', x: 81.3, y: 34.6, lat: 27.72, lng: 112.68, significance: 'high' },
  { id: 2, name: '长沙', year: '1853', event: '出山办团练，设审案局铁腕剿匪，遭兵痞围攻差点丧命，"好汉打脱牙和血吞"', x: 81.4, y: 34.3, lat: 28.26, lng: 113.04, significance: 'high' },
  { id: 3, name: '衡州', year: '1853', event: '长沙之辱后移驻衡州，赤手空拳创立湘军水陆两师，在此誓师北伐', x: 81.3, y: 35.1, lat: 26.82, lng: 112.68, significance: 'high' },
  { id: 4, name: '靖港', year: '1854', event: '湘军首战惨败之地，曾国藩投水自尽被救，后湘潭大捷传来方转危为安', x: 81.3, y: 34.4, lat: 28.08, lng: 112.68, significance: 'high' },
  { id: 5, name: '岳阳', year: '1854', event: '湘军北上途经岳州，与太平军激战，为攻占武汉的前哨战', x: 81.4, y: 33.7, lat: 29.34, lng: 113.04, significance: 'medium' },
  { id: 6, name: '武汉', year: '1854', event: '湘军攻占武昌，但朝廷仅赏兵部侍郎衔未授实权，后又得而复失', x: 81.8, y: 33.0, lat: 30.6, lng: 114.48, significance: 'high' },
  { id: 7, name: '湖口', year: '1855', event: '湖口惨败之地，石达开肢解湘军水师，曾国藩座船被俘再次投水', x: 82.3, y: 33.5, lat: 29.7, lng: 116.28, significance: 'high' },
  { id: 8, name: '南昌', year: '1855', event: '江西困境时期驻守，被太平军围困，"积劳成疾"，曾国藩最艰难的岁月', x: 82.2, y: 34.1, lat: 28.62, lng: 115.92, significance: 'medium' },
  { id: 9, name: '祁门', year: '1860', event: '任两江总督后设大营于此险地，李秀成大军逼近几陷绝境，写下遗书', x: 82.7, y: 33.4, lat: 29.88, lng: 117.72, significance: 'high' },
  { id: 10, name: '安庆', year: '1861', event: '攻克安庆，太平天国西线屏障尽失，成为战争转折点，曾国藩在此建内军械所', x: 82.5, y: 33.1, lat: 30.42, lng: 117.0, significance: 'high' },
  { id: 11, name: '天京（南京）', year: '1864', event: '湘军攻破天京，太平天国覆灭，曾国藩封一等毅勇侯，后任两江总督府于此', x: 83.0, y: 32.2, lat: 32.04, lng: 118.8, significance: 'high' },
  { id: 12, name: '苏州', year: '1863', event: '李鸿章率淮军攻克苏州，曾国藩东西并进战略的关键一环', x: 83.5, y: 32.6, lat: 31.32, lng: 120.6, significance: 'low' },
  { id: 13, name: '保定', year: '1868', event: '就任直隶总督，对畿辅官场痛加整顿，后因天津教案背负骂名', x: 82.1, y: 28.4, lat: 38.88, lng: 115.56, significance: 'medium' },
  { id: 14, name: '天津', year: '1870', event: '处理天津教案，明知将毁一世英名仍毅然赴津，背负"卖国贼"骂名', x: 82.6, y: 28.3, lat: 39.06, lng: 117.36, significance: 'high' },
  { id: 15, name: '北京', year: '1840', event: '京官十三年所在地，翰林院修身立志，"十年七迁"创升官纪录，后因直言批评咸丰帝获罪', x: 82.3, y: 27.8, lat: 39.96, lng: 116.28, significance: 'high' },
];

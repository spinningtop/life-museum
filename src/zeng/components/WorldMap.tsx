import { MapContainer, TileLayer, Marker, Polyline, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { locations } from '@/zeng/data/locations';
import { useScrollReveal } from '@/zeng/hooks/useScrollReveal';

// 青金主色
const GOLD = '#D4AF37';

/**
 * 自定义青金色脉冲标记图标
 * 内联样式，呈现青金色圆点 + 脉冲扩散效果
 */
const pulseIcon = L.divIcon({
  className: 'zeng-pulse-marker',
  html: `
    <span style="
      position:absolute;left:50%;top:50%;width:12px;height:12px;
      margin-left:-6px;margin-top:-6px;border-radius:50%;
      background:${GOLD};
      animation:pulseDot 2s cubic-bezier(0.4,0,0.6,1) infinite;
    "></span>
    <span style="
      position:absolute;left:50%;top:50%;width:10px;height:10px;
      margin-left:-5px;margin-top:-5px;border-radius:50%;
      background:${GOLD};
      border:1px solid rgba(245,230,202,0.7);
      box-shadow:0 0 6px ${GOLD}, 0 0 12px rgba(212,175,55,0.5);
    "></span>
  `,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -10],
});

/**
 * 人生足迹
 * Leaflet + CartoDB Dark Matter 真实地图 + 青金色脉冲圆点 + 迁徙虚线
 * 初始视图聚焦中国 [30, 112] zoom 4
 */
export default function WorldMap() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  // 仅取有坐标的地点
  const validLocations = locations.filter((loc) => loc.lat != null && loc.lng != null);
  // 迁徙路径坐标数组（按地点顺序连接）
  const pathPositions: [number, number][] = validLocations.map((loc) => [
    loc.lat as number,
    loc.lng as number,
  ]);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4AF37]">FOOTPRINTS</p>
          <h2 className="font-serif text-4xl font-bold text-[#F5E6CA] sm:text-5xl">人生足迹</h2>
          <p className="mt-4 font-sans text-sm text-[#F5E6CA]/50">
            从湘乡到两江 · 改变晚清命运的坐标
          </p>
        </div>

        {/* 地图容器 */}
        <div className="glass-card relative overflow-hidden p-4 sm:p-6 md:p-8">
          <div className="zeng-map-container relative w-full overflow-hidden rounded-2xl h-[380px] sm:h-[440px] md:h-[500px]">
            <MapContainer
              center={[30, 112]}
              zoom={4}
              scrollWheelZoom={false}
              zoomControl={false}
              className="h-full w-full"
              worldCopyJump
            >
              {/* 深色底图：CartoDB Dark Matter，与青金墨色系协调 */}
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; OpenStreetMap &copy; CARTO'
                subdomains={['b', 'c']}
                maxZoom={19}
              />

              {/* zoom 控件置于右下角 */}
              <ZoomControl position="bottomright" />

              {/* 迁徙路径：青金色虚线，透明度 0.4 */}
              <Polyline
                positions={pathPositions}
                pathOptions={{
                  color: GOLD,
                  opacity: 0.4,
                  weight: 1.5,
                  dashArray: '6 4',
                }}
              />

              {/* 地点标记：青金色脉冲圆点 + 弹窗 */}
              {validLocations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat as number, loc.lng as number]}
                  icon={pulseIcon}
                >
                  <Popup className="zeng-popup">
                    <div className="w-56 max-w-[85%]">
                      <div className="flex items-center gap-2">
                        <div>
                          <h4 className="font-serif text-base font-bold text-[#F5E6CA]">
                            {loc.name}
                          </h4>
                          <p className="font-sans text-xs text-[#D4AF37]">{loc.year}</p>
                        </div>
                      </div>
                      <p className="mt-2 font-sans text-xs font-medium text-[#4A6FA5]/80">
                        {loc.significance === 'high'
                          ? '关键坐标'
                          : loc.significance === 'medium'
                            ? '重要坐标'
                            : '相关坐标'}
                      </p>
                      <p className="mt-2 font-sans text-[11px] leading-relaxed text-[#F5E6CA]/60">
                        {loc.event}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* 图例 */}
          <div className="mt-4 flex items-center gap-2 font-sans text-xs text-[#F5E6CA]/40">
            <MapPin className="h-3 w-3 text-[#D4AF37]" />
            <span>点击标记查看地点详情 · 虚线为人生迁徙路径</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapContainer, TileLayer, Marker, Polyline, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { locations } from '@/jobs/data/locations';
import { useScrollReveal } from '@/jobs/hooks/useScrollReveal';

// 银色主色
const SILVER = '#C0C0C0';

/**
 * 自定义银色脉冲标记图标
 * 内联样式，呈现银色圆点 + 脉冲扩散效果
 */
const pulseIcon = L.divIcon({
  className: 'jobs-pulse-marker',
  html: `
    <span style="
      position:absolute;left:50%;top:50%;width:12px;height:12px;
      margin-left:-6px;margin-top:-6px;border-radius:50%;
      background:${SILVER};
      animation:pulseDot 2s cubic-bezier(0.4,0,0.6,1) infinite;
    "></span>
    <span style="
      position:absolute;left:50%;top:50%;width:10px;height:10px;
      margin-left:-5px;margin-top:-5px;border-radius:50%;
      background:${SILVER};
      border:1px solid rgba(229,231,235,0.7);
      box-shadow:0 0 6px ${SILVER}, 0 0 12px rgba(192,192,192,0.5);
    "></span>
  `,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -10],
});

/**
 * 人生足迹
 * Leaflet + CartoDB Dark Matter 真实地图 + 银色脉冲圆点 + 迁徙虚线
 * 初始视图聚焦美国 [37, -95] zoom 4
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
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#C0C0C0] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">FOOTPRINTS</p>
          <h2 className="font-serif text-3xl font-bold text-[#E5E7EB] sm:text-4xl md:text-5xl">人生足迹</h2>
          <p className="mt-3 font-sans text-xs text-[#E5E7EB]/50 sm:mt-4 sm:text-sm">
            从旧金山到京都 · 十四个改变命运的坐标
          </p>
        </div>

        {/* 地图容器 */}
        <div className="glass-card relative overflow-hidden p-3 sm:p-6 md:p-8">
          <div
            className="jobs-map-container relative w-full overflow-hidden rounded-2xl h-[300px] sm:h-[400px] md:h-[500px]"
          >
            <MapContainer
              center={[37, -95]}
              zoom={4}
              scrollWheelZoom={false}
              zoomControl={false}
              className="h-full w-full"
              worldCopyJump
            >
              {/* 深色底图：CartoDB Dark Matter，与银色色系协调 */}
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; OpenStreetMap &copy; CARTO'
                subdomains={['b', 'c']}
                maxZoom={19}
              />

              {/* zoom 控件置于右下角 */}
              <ZoomControl position="bottomright" />

              {/* 迁徙路径：银色虚线，透明度 0.4 */}
              <Polyline
                positions={pathPositions}
                pathOptions={{
                  color: SILVER,
                  opacity: 0.4,
                  weight: 1.5,
                  dashArray: '6 4',
                }}
              />

              {/* 地点标记：银色脉冲圆点 + 弹窗 */}
              {validLocations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat as number, loc.lng as number]}
                  icon={pulseIcon}
                >
                  <Popup className="jobs-popup">
                    <div className="w-56 max-w-[85%]">
                      <div className="flex items-center gap-2">
                        <div>
                          <h4 className="font-serif text-base font-bold text-[#E5E7EB]">
                            {loc.name}
                          </h4>
                          <p className="font-sans text-xs text-[#C0C0C0]">{loc.year}</p>
                        </div>
                      </div>
                      <p className="mt-2 font-sans text-xs font-medium text-[#60A5FA]/80">
                        {loc.significance === 'high'
                          ? '关键坐标'
                          : loc.significance === 'medium'
                            ? '重要坐标'
                            : '相关坐标'}
                      </p>
                      <p className="mt-2 font-sans text-[11px] leading-relaxed text-[#E5E7EB]/60">
                        {loc.event}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* 图例 */}
          <div className="mt-4 flex items-center gap-2 font-sans text-xs text-[#E5E7EB]/40">
            <MapPin className="h-3 w-3 text-[#C0C0C0]" />
            <span>点击标记查看地点详情 · 虚线为迁徙路径</span>
          </div>
        </div>
      </div>
    </section>
  );
}

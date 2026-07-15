import { MapContainer, TileLayer, Marker, Polyline, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { locations } from '@/sudongpo/data/locations';
import { useScrollReveal } from '@/sudongpo/hooks/useScrollReveal';

// 朱砂主色
const VERMILION = '#c73e3a';

/**
 * 自定义脉冲标记图标
 * 复用 index.css 中的 .su-pulse-ring / .su-pulse-dot 动画
 */
const pulseIcon = L.divIcon({
  className: 'su-pulse-marker',
  html: `
    <span class="su-pulse-ring"></span>
    <span class="su-pulse-dot"></span>
  `,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -10],
});

/**
 * 人生足迹
 * Leaflet + CartoDB Dark Matter 真实地图 + 朱砂脉冲圆点 + 足迹虚线，聚焦中国
 */
export default function WorldMap() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  // 足迹路径坐标数组（按地点顺序连接）
  const pathPositions: [number, number][] = locations.map((loc) => [loc.lat, loc.lng]);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#c73e3a]">FOOTPRINTS</p>
          <h2 className="font-serif text-4xl font-bold text-[#f5e6d3] sm:text-5xl">人生足迹</h2>
          <p className="mt-4 font-sans text-sm text-[#f5e6d3]/50">
            从眉山到天涯海角 · 十四个改变命运的坐标
          </p>
        </div>

        {/* 地图容器 */}
        <div className="glass-card relative overflow-hidden p-4 sm:p-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ height: '560px' }}
          >
            <MapContainer
              center={[35, 110]}
              zoom={4}
              scrollWheelZoom={false}
              zoomControl={false}
              className="h-full w-full"
              worldCopyJump
            >
              {/* 深色底图：CartoDB Dark Matter，与宋韵深色背景协调 */}
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; OpenStreetMap &copy; CARTO'
                subdomains={['b', 'c']}
                maxZoom={19}
              />

              {/* zoom 控件置于右下角 */}
              <ZoomControl position="bottomright" />

              {/* 足迹路径：朱砂红虚线，透明度 0.4 */}
              <Polyline
                positions={pathPositions}
                pathOptions={{
                  color: VERMILION,
                  opacity: 0.4,
                  weight: 1.5,
                  dashArray: '6 4',
                }}
              />

              {/* 14 个地点标记：脉冲圆点 + 弹窗 */}
              {locations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={pulseIcon}
                >
                  <Popup>
                    <div className="w-56 max-w-[85%]">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg text-[#c73e3a]">{loc.region}</span>
                        <div>
                          <h4 className="font-serif text-base font-bold text-[#f5e6d3]">
                            {loc.name}
                          </h4>
                          <p className="font-sans text-xs text-[#c73e3a]">{loc.year}</p>
                        </div>
                      </div>
                      <p className="mt-2 font-sans text-xs font-medium text-[#e9c46a]/80">
                        {loc.significance}
                      </p>
                      <p className="mt-2 font-sans text-[11px] leading-relaxed text-[#f5e6d3]/60">
                        {loc.story}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* 图例 */}
          <div className="mt-4 flex items-center gap-2 font-sans text-xs text-[#f5e6d3]/40">
            <MapPin className="h-3 w-3 text-[#c73e3a]" />
            <span>点击标记查看地点详情 · 虚线为人生足迹</span>
          </div>
        </div>
      </div>
    </section>
  );
}

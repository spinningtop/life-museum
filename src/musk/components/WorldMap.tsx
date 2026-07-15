import { MapContainer, TileLayer, Marker, Polyline, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import { locations } from '@/musk/data/locations';
import { useScrollReveal } from '@/musk/hooks/useScrollReveal';

// 火星红主色
const MARS_RED = '#e63946';

/**
 * 自定义脉冲标记图标
 * 复用 index.css 中的 .pulse-ring 动画，呈现火星红圆点 + 脉冲扩散效果
 */
const pulseIcon = L.divIcon({
  className: 'muskm-pulse-marker',
  html: `
    <span class="pulse-ring"></span>
    <span class="muskm-pulse-dot"></span>
  `,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -10],
});

/**
 * 全球足迹
 * Leaflet + CartoDB Dark Matter 真实地图 + 15 个脉冲圆点 + 迁徙虚线
 */
export default function WorldMap() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  // 迁徙路径坐标数组（按地点顺序连接）
  const pathPositions: [number, number][] = locations.map((loc) => [loc.lat, loc.lng]);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#e63946]">FOOTPRINTS</p>
          <h2 className="font-serif text-4xl font-bold text-[#f1faee] sm:text-5xl">全球足迹</h2>
          <p className="mt-4 font-sans text-sm text-[#f1faee]/50">
            从南非到火星 · 十五个改变命运的坐标
          </p>
        </div>

        {/* 地图容器 */}
        <div className="glass-card relative overflow-hidden p-4 sm:p-8">
          <div
            className="muskm-map-container relative w-full overflow-hidden rounded-2xl"
            style={{ height: '500px' }}
          >
            <MapContainer
              center={[20, 0]}
              zoom={2}
              scrollWheelZoom={false}
              zoomControl={false}
              className="h-full w-full"
              worldCopyJump
            >
              {/* 深色底图：CartoDB Dark Matter，与深空色系协调 */}
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; OpenStreetMap &copy; CARTO'
                subdomains={['b', 'c']}
                maxZoom={19}
              />

              {/* zoom 控件置于右下角 */}
              <ZoomControl position="bottomright" />

              {/* 迁徙路径：火星红虚线，透明度 0.4 */}
              <Polyline
                positions={pathPositions}
                pathOptions={{
                  color: MARS_RED,
                  opacity: 0.4,
                  weight: 1.5,
                  dashArray: '6 4',
                }}
              />

              {/* 15 个地点标记：脉冲圆点 + 弹窗 */}
              {locations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={pulseIcon}
                >
                  <Popup className="muskm-popup">
                    <div className="w-56 max-w-[85%]">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{loc.flag}</span>
                        <div>
                          <h4 className="font-serif text-base font-bold text-[#f1faee]">
                            {loc.name}
                          </h4>
                          <p className="font-sans text-xs text-[#e63946]">{loc.year}</p>
                        </div>
                      </div>
                      <p className="mt-2 font-sans text-xs font-medium text-[#a8dadc]/80">
                        {loc.significance}
                      </p>
                      <p className="mt-2 font-sans text-[11px] leading-relaxed text-[#f1faee]/60">
                        {loc.story}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* 图例 */}
          <div className="mt-4 flex items-center gap-2 font-sans text-xs text-[#f1faee]/40">
            <MapPin className="h-3 w-3 text-[#e63946]" />
            <span>点击标记查看地点详情 · 虚线为迁徙路径</span>
          </div>
        </div>
      </div>
    </section>
  );
}

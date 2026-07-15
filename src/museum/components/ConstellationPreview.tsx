import { useScrollReveal } from '@/museum/hooks/useScrollReveal';

// 四个星团数据：2×2 布局，每团代表一段人生
interface ConstellationNode {
  x: number;
  y: number;
  label: string;
}
interface Constellation {
  id: string;
  name: string;
  year: string;
  color: string;
  center: { x: number; y: number };
  nodes: ConstellationNode[];
}

const CLUSTERS: Constellation[] = [
  {
    id: 'musk',
    name: '马斯克',
    year: '1971',
    color: '#FF6B35',
    center: { x: 180, y: 130 },
    nodes: [
      { x: 130, y: 70, label: 'SpaceX' },
      { x: 90, y: 160, label: 'Tesla' },
      { x: 250, y: 90, label: '火星' },
      { x: 260, y: 180, label: 'PayPal' },
    ],
  },
  {
    id: 'sudongpo',
    name: '苏东坡',
    year: '1037',
    color: '#D4A574',
    center: { x: 620, y: 130 },
    nodes: [
      { x: 540, y: 80, label: '眉山' },
      { x: 690, y: 90, label: '黄州' },
      { x: 700, y: 180, label: '赤壁' },
      { x: 540, y: 190, label: '词' },
    ],
  },
  {
    id: 'jobs',
    name: '乔布斯',
    year: '1955',
    color: '#C0C0C0',
    center: { x: 180, y: 350 },
    nodes: [
      { x: 120, y: 300, label: '苹果' },
      { x: 90, y: 380, label: '皮克斯' },
      { x: 260, y: 320, label: 'iPhone' },
      { x: 250, y: 410, label: 'NeXT' },
    ],
  },
  {
    id: 'zeng',
    name: '曾国藩',
    year: '1811',
    color: '#D4AF37',
    center: { x: 620, y: 350 },
    nodes: [
      { x: 540, y: 300, label: '湘军' },
      { x: 700, y: 320, label: '天京' },
      { x: 690, y: 400, label: '洋务' },
      { x: 540, y: 410, label: '家书' },
    ],
  },
];

// 星团之间的连线（相邻四边 + 对角线）
const CROSS_LINES = [
  // 上横：马斯克 ↔ 苏东坡
  { from: CLUSTERS[0].center, to: CLUSTERS[1].center },
  // 左竖：马斯克 ↔ 乔布斯
  { from: CLUSTERS[0].center, to: CLUSTERS[2].center },
  // 右竖：苏东坡 ↔ 曾国藩
  { from: CLUSTERS[1].center, to: CLUSTERS[3].center },
  // 下横：乔布斯 ↔ 曾国藩
  { from: CLUSTERS[2].center, to: CLUSTERS[3].center },
  // 对角：马斯克 ↔ 曾国藩
  { from: CLUSTERS[0].center, to: CLUSTERS[3].center },
  // 对角：苏东坡 ↔ 乔布斯
  { from: CLUSTERS[1].center, to: CLUSTERS[2].center },
];

/**
 * 人物星图预览
 * SVG 简化版关系图：四个星团各代表一段人生，由跨越九百年的虚线相连
 */
export default function ConstellationPreview() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题区 */}
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#D4A24C] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
            CONSTELLATION
          </p>
          <h2 className="font-serif text-2xl font-bold text-[#F5F1E8] sm:text-3xl md:text-4xl lg:text-5xl">
            人物星图
          </h2>
          <p className="mt-3 font-sans text-xs text-[#F5F1E8]/50 sm:mt-4 sm:text-sm">
            在同一片星空下 · 四段相隔九百年的人生
          </p>
        </div>

        {/* 星图 */}
        <div className="glass-card relative overflow-hidden p-2 sm:p-4 lg:p-8">
          <svg
            viewBox="0 0 800 480"
            className="h-auto w-full"
            role="img"
            aria-label="人物星图预览：马斯克、苏东坡、乔布斯、曾国藩四段人生的星座关系"
          >
            {/* 背景细星点 */}
            {Array.from({ length: 40 }).map((_, i) => (
              <circle
                key={`bg-${i}`}
                cx={(i * 137) % 800}
                cy={(i * 53) % 480}
                r={(i % 3) * 0.4 + 0.4}
                fill="#F5F1E8"
                opacity={0.2}
              />
            ))}

            {/* 星团之间的虚线连线 */}
            {CROSS_LINES.map((line, i) => (
              <line
                key={`cross-${i}`}
                x1={line.from.x}
                y1={line.from.y}
                x2={line.to.x}
                y2={line.to.y}
                stroke="#D4A24C"
                strokeWidth={0.6}
                strokeDasharray="3 7"
                opacity={0.35}
              />
            ))}

            {/* 中心跨度标注 */}
            <text
              x={400}
              y={244}
              textAnchor="middle"
              fill="#D4A24C"
              opacity={0.8}
              style={{ fontSize: '14px', letterSpacing: '0.15em', fontWeight: 500 }}
            >
              跨越 934 年
            </text>

            {/* 各星团渲染 */}
            {CLUSTERS.map((cluster) => (
              <g key={cluster.id}>
                {/* 星团内连线 */}
                {cluster.nodes.map((n) => (
                  <line
                    key={`${cluster.id}-line-${n.label}`}
                    x1={cluster.center.x}
                    y1={cluster.center.y}
                    x2={n.x}
                    y2={n.y}
                    stroke={cluster.color}
                    strokeWidth={0.7}
                    opacity={0.35}
                  />
                ))}

                {/* 节点 */}
                {cluster.nodes.map((n) => (
                  <g key={`${cluster.id}-node-${n.label}`}>
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={3.5}
                      fill={cluster.color}
                      opacity={0.85}
                    />
                    <text
                      x={n.x}
                      y={n.y - 9}
                      textAnchor="middle"
                      fill="#F5F1E8"
                      opacity={0.65}
                      style={{ fontSize: '12px', fontWeight: 500 }}
                    >
                      {n.label}
                    </text>
                  </g>
                ))}

                {/* 中心星 */}
                <circle
                  cx={cluster.center.x}
                  cy={cluster.center.y}
                  r={7}
                  fill={cluster.color}
                />
                <circle
                  cx={cluster.center.x}
                  cy={cluster.center.y}
                  r={13}
                  fill="none"
                  stroke={cluster.color}
                  strokeWidth={1.2}
                  opacity={0.4}
                />
                <text
                  x={cluster.center.x}
                  y={cluster.center.y + 30}
                  textAnchor="middle"
                  fill={cluster.color}
                  style={{ fontSize: '15px', fontWeight: 700 }}
                >
                  {cluster.name} · {cluster.year}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

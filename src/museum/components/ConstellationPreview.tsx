import { useScrollReveal } from '@/museum/hooks/useScrollReveal';

// 左星团：马斯克（橙）
const MUSK_NODES = [
  { x: 150, y: 70, label: 'SpaceX' },
  { x: 90, y: 150, label: 'Tesla' },
  { x: 130, y: 250, label: '南非' },
  { x: 250, y: 110, label: '火星' },
  { x: 270, y: 230, label: 'PayPal' },
];
const MUSK_CENTER = { x: 190, y: 170 };

// 右星团：苏东坡（金）
const SU_NODES = [
  { x: 530, y: 80, label: '眉山' },
  { x: 660, y: 110, label: '黄州' },
  { x: 700, y: 200, label: '赤壁' },
  { x: 620, y: 270, label: '岭海' },
  { x: 520, y: 240, label: '词' },
];
const SU_CENTER = { x: 610, y: 170 };

/**
 * 人物星图预览
 * SVG 简化版关系图：两个星团各代表一段人生，由跨越九百年的虚线相连
 */
export default function ConstellationPreview() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题区 */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4A24C]">
            CONSTELLATION
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#F5F1E8] sm:text-5xl">
            人物星图
          </h2>
          <p className="mt-4 font-sans text-sm text-[#F5F1E8]/50">
            在同一片星空下 · 两段相隔九百年的人生
          </p>
        </div>

        {/* 星图 */}
        <div className="glass-card relative overflow-hidden p-4 sm:p-8">
          <svg
            viewBox="0 0 800 340"
            className="h-auto w-full"
            role="img"
            aria-label="人物星图预览：马斯克与苏东坡两段人生的星座关系"
          >
            {/* 背景细星点 */}
            {Array.from({ length: 30 }).map((_, i) => (
              <circle
                key={`bg-${i}`}
                cx={(i * 137) % 800}
                cy={(i * 53) % 340}
                r={(i % 3) * 0.4 + 0.4}
                fill="#F5F1E8"
                opacity={0.25}
              />
            ))}

            {/* 两星团之间的虚线连线 */}
            <line
              x1={MUSK_CENTER.x}
              y1={MUSK_CENTER.y}
              x2={SU_CENTER.x}
              y2={SU_CENTER.y}
              stroke="#D4A24C"
              strokeWidth={1}
              strokeDasharray="4 6"
              opacity={0.5}
            />
            {/* 跨度标注 */}
            <text
              x={(MUSK_CENTER.x + SU_CENTER.x) / 2}
              y={MUSK_CENTER.y - 14}
              textAnchor="middle"
              fill="#D4A24C"
              opacity={0.8}
              style={{ fontSize: '11px', letterSpacing: '0.1em' }}
            >
              跨越 934 年
            </text>

            {/* 马斯克星团连线 */}
            {MUSK_NODES.map((n) => (
              <line
                key={`m-line-${n.label}`}
                x1={MUSK_CENTER.x}
                y1={MUSK_CENTER.y}
                x2={n.x}
                y2={n.y}
                stroke="#FF6B35"
                strokeWidth={0.8}
                opacity={0.4}
              />
            ))}
            {/* 苏东坡星团连线 */}
            {SU_NODES.map((n) => (
              <line
                key={`s-line-${n.label}`}
                x1={SU_CENTER.x}
                y1={SU_CENTER.y}
                x2={n.x}
                y2={n.y}
                stroke="#D4A574"
                strokeWidth={0.8}
                opacity={0.4}
              />
            ))}

            {/* 马斯克节点 */}
            {MUSK_NODES.map((n) => (
              <g key={`m-node-${n.label}`}>
                <circle cx={n.x} cy={n.y} r={3} fill="#FF6B35" opacity={0.9} />
                <text
                  x={n.x}
                  y={n.y - 8}
                  textAnchor="middle"
                  fill="#F5F1E8"
                  opacity={0.6}
                  style={{ fontSize: '10px' }}
                >
                  {n.label}
                </text>
              </g>
            ))}
            {/* 苏东坡节点 */}
            {SU_NODES.map((n) => (
              <g key={`s-node-${n.label}`}>
                <circle cx={n.x} cy={n.y} r={3} fill="#D4A574" opacity={0.9} />
                <text
                  x={n.x}
                  y={n.y - 8}
                  textAnchor="middle"
                  fill="#F5F1E8"
                  opacity={0.6}
                  style={{ fontSize: '10px' }}
                >
                  {n.label}
                </text>
              </g>
            ))}

            {/* 中心星：马斯克 */}
            <circle cx={MUSK_CENTER.x} cy={MUSK_CENTER.y} r={6} fill="#FF6B35" />
            <circle
              cx={MUSK_CENTER.x}
              cy={MUSK_CENTER.y}
              r={11}
              fill="none"
              stroke="#FF6B35"
              strokeWidth={1}
              opacity={0.4}
            />
            <text
              x={MUSK_CENTER.x}
              y={MUSK_CENTER.y + 28}
              textAnchor="middle"
              fill="#FF6B35"
              style={{ fontSize: '13px', fontWeight: 700 }}
            >
              马斯克 · 1971
            </text>

            {/* 中心星：苏东坡 */}
            <circle cx={SU_CENTER.x} cy={SU_CENTER.y} r={6} fill="#D4A574" />
            <circle
              cx={SU_CENTER.x}
              cy={SU_CENTER.y}
              r={11}
              fill="none"
              stroke="#D4A574"
              strokeWidth={1}
              opacity={0.4}
            />
            <text
              x={SU_CENTER.x}
              y={SU_CENTER.y + 28}
              textAnchor="middle"
              fill="#D4A574"
              style={{ fontSize: '13px', fontWeight: 700 }}
            >
              苏东坡 · 1037
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

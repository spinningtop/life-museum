import { FileText, Cpu, Boxes, Infinity as InfinityIcon } from 'lucide-react';
import { useScrollReveal } from '@/museum/hooks/useScrollReveal';

// 四步流程：从 PDF 到博物馆
const PIPELINE = [
  {
    icon: FileText,
    step: '01',
    title: '投入一本书',
    desc: '一本人物传记 PDF，是这座工坊唯一的原料。',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'AI 解析为结构化数据',
    desc: '通读全书，按 10 个维度提取章节、时间、人物、地点、戏剧时刻与命运岔路口。',
  },
  {
    icon: Boxes,
    step: '03',
    title: '生成可漫游展厅',
    desc: '数据流入组件，自动生成时间轴、星图、地图、金句廊、岔路口——一座完整展厅。',
  },
  {
    icon: InfinityIcon,
    step: '04',
    title: '博物馆持续生长',
    desc: '一本接一本，同一个 Skill 可复用。馆藏不设上限，每一段人生都值得被走进。',
  },
];

// 十维数据模型
const DATA_DIMENSIONS = [
  { name: '章节', desc: '书的骨架' },
  { name: '时间轴', desc: '人生刻度' },
  { name: '金句', desc: '声音的回响' },
  { name: '人物星图', desc: '关系网络' },
  { name: '人生足迹', desc: '地理坐标' },
  { name: '戏剧时刻', desc: '命运临界点' },
  { name: '命运岔路口', desc: '反事实推演' },
  { name: '核心主题', desc: '精神底色' },
  { name: '成就版图', desc: '一生所造' },
  { name: '地图路径', desc: '可漫游的轨迹' },
];

/**
 * 传记工坊
 * 展示"把一本 PDF 变成一座可漫游的博物馆"的转化过程
 * 突出可复用 Skill 的技术亮点：博物馆因此持续生长
 */
export default function BiographyWorkshop() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题区 */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#D4A24C] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
            BIOGRAPHY WORKSHOP
          </p>
          <h2 className="font-serif text-2xl font-bold text-[#F5F1E8] sm:text-3xl md:text-4xl lg:text-5xl">
            传记工坊
          </h2>
          <p className="mt-3 font-sans text-xs text-[#F5F1E8]/50 sm:mt-4 sm:text-sm">
            把一本 PDF · 变成一座可漫游的博物馆
          </p>
        </div>

        {/* 四步流程 */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PIPELINE.map((stage, i) => (
            <div
              key={stage.step}
              className="reveal relative"
              style={{ transitionDelay: `${i * 120}ms`, opacity: 0, transform: 'translateY(30px)' }}
              ref={(el) => {
                if (el && isVisible) {
                  el.style.opacity = '1';
                  el.style.transform = 'translateY(0)';
                  el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                }
              }}
            >
              {/* 步骤间的连接箭头（桌面端） */}
              {i < PIPELINE.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                  <div className="h-px w-6 bg-gradient-to-r from-[#D4A24C]/50 to-transparent" />
                </div>
              )}
              <div className="glass-card group h-full p-5 transition-all duration-500 hover:translate-y-[-6px] sm:p-6">
                {/* 顶部微光扫过 */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                  <div
                    className="absolute -top-1/2 -left-full h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#D4A24C]/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]"
                  />
                </div>

                {/* 步骤号 + 图标 */}
                <div className="relative mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4A24C]/30 bg-[#D4A24C]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4A24C]/20 group-hover:shadow-[0_0_15px_rgba(212,162,76,0.3)] sm:h-11 sm:w-11">
                    <stage.icon className="h-4 w-4 text-[#D4A24C] transition-transform duration-300 group-hover:rotate-[-5deg] sm:h-5 sm:w-5" />
                  </div>
                  <span className="font-mono text-xs tracking-wider text-[#D4A24C]/60 transition-all duration-300 group-hover:text-[#D4A24C] group-hover:tracking-[0.2em]">
                    {stage.step}
                  </span>
                </div>
                {/* 标题 */}
                <h3 className="font-serif text-base font-bold text-[#F5F1E8] transition-all duration-300 group-hover:text-gold-gradient sm:text-lg">
                  {stage.title}
                </h3>
                {/* 描述 */}
                <p className="mt-2 font-sans text-xs leading-relaxed text-[#F5F1E8]/60 transition-colors duration-300 group-hover:text-[#F5F1E8]/80">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 十维数据模型 */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4A24C]/40 sm:w-12" />
            <span className="font-sans text-xs tracking-[0.2em] text-[#D4A24C]/70">
              十维数据模型
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4A24C]/40 sm:w-12" />
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
            {DATA_DIMENSIONS.map((dim, i) => (
              <div
                key={dim.name}
                className="glass-card group p-3 text-center transition-all duration-500 hover:translate-y-[-4px] hover:border-[#D4A24C]/40 sm:p-4"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p className="font-serif text-sm font-bold text-[#F5F1E8] transition-all duration-300 group-hover:text-gold-gradient">
                  {dim.name}
                </p>
                <p className="mt-1 font-sans text-[11px] tracking-wider text-[#F5F1E8]/45 transition-colors duration-300 group-hover:text-[#F5F1E8]/70 sm:text-xs">
                  {dim.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 底部强调：可复用 Skill */}
        <div className="mt-12 text-center sm:mt-16">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#D4A24C]/25 bg-[#D4A24C]/5 px-4 py-2 sm:px-5 sm:py-2.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4A24C]" />
            <span className="font-sans text-[11px] leading-snug tracking-wider text-[#F5F1E8]/70 sm:text-xs">
              可复用 Skill · 同一流程可解析任意人物传记 · 博物馆永不闭馆
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

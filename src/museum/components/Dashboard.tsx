import { BookOpen, Layers, Timer, Infinity as InfinityIcon } from 'lucide-react';
import { useScrollReveal } from '@/museum/hooks/useScrollReveal';
import { biographies } from '@/museum/data/biographies';

const STATS = [
  {
    icon: BookOpen,
    label: '馆藏传记',
    value: biographies.length,
    suffix: '本',
  },
  {
    icon: Layers,
    label: '十维解析',
    value: 10,
    suffix: '维',
  },
  {
    icon: Timer,
    label: '跨越时空',
    value: 934,
    suffix: '年',
  },
  {
    icon: InfinityIcon,
    label: '持续生长',
    value: '∞',
    suffix: '',
  },
];

/**
 * 数据仪表盘
 * 展示馆藏与内容的统计数字
 */
export default function Dashboard() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题区 */}
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#D4A24C] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
            DASHBOARD
          </p>
          <h2 className="font-serif text-2xl font-bold text-[#F5F1E8] sm:text-3xl md:text-4xl lg:text-5xl">
            馆藏一览
          </h2>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card group p-4 text-center transition-all duration-500 hover:translate-y-[-6px] sm:p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#D4A24C]/30 bg-[#D4A24C]/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,162,76,0.3)] sm:mb-3 sm:h-10 sm:w-10">
                <stat.icon className="h-3.5 w-3.5 text-[#D4A24C] transition-transform duration-300 group-hover:rotate-[-5deg] sm:h-4 sm:w-4" />
              </div>
              <div className="flex items-baseline justify-center gap-1 transition-transform duration-300 group-hover:scale-105">
                <span className="font-serif text-2xl font-bold text-gold-gradient sm:text-3xl">
                  {stat.value}
                </span>
                <span className="font-sans text-[11px] text-[#F5F1E8]/50 sm:text-xs">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-1 font-sans text-[11px] tracking-wider text-[#F5F1E8]/55 transition-colors duration-300 group-hover:text-[#F5F1E8]/80 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 鎏金分割线 */}
        <hr className="gold-divider mt-12 sm:mt-16" />
      </div>
    </section>
  );
}

import { BookOpen, GitBranch, Sparkles, Timer } from 'lucide-react';
import { useScrollReveal } from '@/museum/hooks/useScrollReveal';
import { biographies } from '@/museum/data/biographies';
import { starMoments } from '@/museum/data/starMoments';
import { forkMoments } from '@/museum/data/forkMoments';

const STATS = [
  {
    icon: BookOpen,
    label: '馆藏传记',
    value: biographies.length,
    suffix: '本',
  },
  {
    icon: Sparkles,
    label: '群星时刻',
    value: starMoments.length,
    suffix: '个',
  },
  {
    icon: GitBranch,
    label: '命运岔路口',
    value: forkMoments.length,
    suffix: '处',
  },
  {
    icon: Timer,
    label: '跨越时空',
    value: 934,
    suffix: '年',
  },
];

/**
 * 数据仪表盘
 * 展示馆藏与内容的统计数字
 */
export default function Dashboard() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题区 */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4A24C]">
            DASHBOARD
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#F5F1E8] sm:text-5xl">
            馆藏一览
          </h2>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card group p-6 text-center transition-all duration-500 hover:translate-y-[-3px]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4A24C]/30 bg-[#D4A24C]/10">
                <stat.icon className="h-4 w-4 text-[#D4A24C]" />
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-serif text-3xl font-bold text-gold-gradient">
                  {stat.value}
                </span>
                <span className="font-sans text-xs text-[#F5F1E8]/50">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-1 font-sans text-xs tracking-wider text-[#F5F1E8]/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 鎏金分割线 */}
        <hr className="gold-divider mt-16" />
      </div>
    </section>
  );
}

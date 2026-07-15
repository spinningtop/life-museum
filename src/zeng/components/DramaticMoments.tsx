import { MapPin } from 'lucide-react';
import { dramaticMoments } from '@/zeng/data/dramaticMoments';
import { useScrollReveal } from '@/zeng/hooks/useScrollReveal';
import type { DramaticMoment } from '@/zeng/data/dramaticMoments';

/**
 * 戏剧性时刻
 * 垂直时间线布局，关键事件卡片更大且有发光效果
 * 含 turningPoint 命运分量（茨威格式反事实推演）
 */
export default function DramaticMoments() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4AF37]">DRAMATIC</p>
          <h2 className="font-serif text-3xl font-bold text-[#F5E6CA] sm:text-4xl md:text-5xl">
            戏剧性时刻
          </h2>
          <p className="mt-3 font-sans text-sm text-[#F5E6CA]/50">
            群星闪耀的时刻 · 决定命运的临界点
          </p>
        </div>

        {/* 垂直时间线 */}
        <div className="relative">
          {/* 中轴线 */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8">
            {dramaticMoments.map((moment, idx) => (
              <MomentCard
                key={moment.id}
                moment={moment}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 单个时刻卡片
function MomentCard({ moment, index }: { moment: DramaticMoment; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  // 关键事件（更具戏剧性）
  const isKey = [3, 4, 5, 7, 8].includes(moment.id);
  // 桌面端左右交替
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} relative pl-12 sm:w-1/2 sm:pl-0 ${
        isLeft ? 'sm:pr-8' : 'sm:ml-auto sm:pl-8'
      }`}
    >
      {/* 时间线节点：移动端靠左，桌面端居中 */}
      <div
        className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full sm:left-1/2"
        style={{
          backgroundColor: isKey ? moment.color : '#0a0a1a',
          border: `2px solid ${moment.color}`,
          boxShadow: isKey ? `0 0 14px ${moment.color}` : 'none',
        }}
      >
        {isKey && (
          <span
            className="absolute h-7 w-7 rounded-full opacity-40 pulse-ring"
            style={{ backgroundColor: moment.color }}
          />
        )}
      </div>

      {/* 卡片 */}
      <div
        className={`glass-card group relative overflow-hidden p-5 text-left transition-all duration-500 hover:translate-y-[-2px] sm:p-6 ${
          isKey ? 'sm:p-8' : ''
        }`}
        style={{
          borderColor: isKey ? `${moment.color}50` : undefined,
          boxShadow: isKey ? `0 0 24px ${moment.color}30` : undefined,
        }}
      >
        {/* 顶部装饰光晕 */}
        <div
          className="absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
          style={{ backgroundColor: moment.color }}
        />

        {/* 日期 */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-md px-2.5 py-1 font-serif text-xs font-bold text-[#0a0a1a]"
            style={{ backgroundColor: moment.color }}
          >
            {moment.date}
          </span>
          <span className="font-sans text-xs text-[#F5E6CA]/40">第{moment.chapter}章</span>
        </div>

        {/* 标题 */}
        <h3
          className={`mt-3 font-serif font-bold text-[#F5E6CA] ${isKey ? 'text-2xl sm:text-3xl' : 'text-xl'}`}
        >
          {moment.title}
        </h3>

        {/* 地点 */}
        <p className="mt-2 flex items-center gap-1.5 font-sans text-xs text-[#F5E6CA]/50">
          <MapPin className="h-3 w-3 shrink-0" style={{ color: moment.color }} />
          {moment.location}
        </p>

        {/* 描述 */}
        <p className="mt-3 font-sans text-sm leading-relaxed text-[#F5E6CA]/80">
          {moment.description}
        </p>

        {/* 详细故事 */}
        <p className="mt-3 border-t border-white/10 pt-3 font-sans text-xs leading-relaxed text-[#F5E6CA]/55">
          {moment.detail}
        </p>

        {/* 命运分量（茨威格式决定性瞬间） */}
        <div className="mt-3 border-l-2 pl-3" style={{ borderColor: moment.color }}>
          <span className="font-sans text-[10px] tracking-wider text-[#D4AF37]/60">命运分量</span>
          <p className="mt-1 font-serif text-xs italic leading-relaxed text-[#F5E6CA]/70">
            &ldquo;{moment.turningPoint}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

import { MapPin } from 'lucide-react';
import { dramaticMoments } from '@/musk/data/dramaticMoments';
import { useScrollReveal } from '@/musk/hooks/useScrollReveal';
import type { DramaticMoment } from '@/musk/data/dramaticMoments';

/**
 * 戏剧性时刻
 * 垂直时间线布局，关键事件卡片更大且有发光效果
 */
export default function DramaticMoments() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#e63946] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">DRAMATIC</p>
          <h2 className="font-serif text-3xl font-bold text-[#f1faee] sm:text-4xl md:text-5xl">
            戏剧性时刻
          </h2>
          <p className="mt-3 font-sans text-xs text-[#f1faee]/50 sm:mt-4 sm:text-sm">
            群星闪耀的时刻 · 十三个决定命运的临界点
          </p>
        </div>

        {/* 垂直时间线 */}
        <div className="relative">
          {/* 中轴线 */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#e63946] via-[#e63946]/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

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
  // 关键事件（id 为 4,5,6,10,13 等更具戏剧性）
  const isKey = [4, 5, 6, 10, 13].includes(moment.id);
  // 桌面端左右交替
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} relative pl-10 sm:w-1/2 sm:pl-0 ${
        isLeft ? 'sm:pr-6 md:pr-8' : 'sm:ml-auto sm:pl-6 md:pl-8'
      }`}
    >
      {/* 时间线节点：移动端靠左，桌面端居中 */}
      <div
        className="absolute left-4 top-5 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full sm:left-1/2 sm:top-6 sm:h-4 sm:w-4"
        style={{
          backgroundColor: isKey ? moment.color : '#0a0a0f',
          border: `2px solid ${moment.color}`,
          boxShadow: isKey ? `0 0 14px ${moment.color}` : 'none',
        }}
      >
        {isKey && (
          <span
            className="absolute h-6 w-6 rounded-full opacity-40 pulse-ring sm:h-7 sm:w-7"
            style={{ backgroundColor: moment.color }}
          />
        )}
      </div>

      {/* 卡片 */}
      <div
        className={`glass-card group relative overflow-hidden p-4 text-left transition-all duration-500 hover:translate-y-[-2px] sm:p-6 ${
          isKey ? 'md:p-8' : ''
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
            className="rounded-md px-2 py-0.5 font-serif text-[11px] font-bold text-white sm:px-2.5 sm:py-1 sm:text-xs"
            style={{ backgroundColor: moment.color }}
          >
            {moment.date}
          </span>
          <span className="font-sans text-[10px] text-[#f1faee]/40 sm:text-xs">第{moment.chapter}章</span>
        </div>

        {/* 标题 */}
        <h3
          className={`mt-2 font-serif font-bold text-[#f1faee] sm:mt-3 ${isKey ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl'}`}
        >
          {moment.title}
        </h3>

        {/* 地点 */}
        <p className="mt-2 flex items-center gap-1.5 font-sans text-[10px] text-[#f1faee]/50 sm:text-xs">
          <MapPin className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" style={{ color: moment.color }} />
          {moment.location}
        </p>

        {/* 描述 */}
        <p className="mt-2 font-sans text-xs leading-relaxed text-[#f1faee]/80 sm:mt-3 sm:text-sm">
          {moment.description}
        </p>

        {/* 详细故事 */}
        <p className="mt-2 border-t border-white/10 pt-2 font-sans text-[11px] leading-relaxed text-[#f1faee]/55 sm:mt-3 sm:pt-3 sm:text-xs">
          {moment.detail}
        </p>

        {/* 命运分量（茨威格式决定性瞬间） */}
        <div className="mt-2 border-l-2 pl-2 sm:mt-3 sm:pl-3" style={{ borderColor: moment.color }}>
          <span className="font-sans text-[9px] tracking-wider text-[#e63946]/60 sm:text-[10px]">命运分量</span>
          <p className="mt-1 font-serif text-[11px] italic leading-relaxed text-[#f1faee]/70 sm:text-xs">
            &ldquo;{moment.turningPoint}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

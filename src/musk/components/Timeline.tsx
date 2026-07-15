import { useMemo } from 'react';
import { MapPin } from 'lucide-react';
import { timelineEvents } from '@/musk/data/timeline';
import { lifeStages } from '@/musk/data/chapters';
import { useScrollReveal } from '@/musk/hooks/useScrollReveal';
import type { TimelineEvent } from '@/musk/data/timeline';
import type { LifeStage } from '@/musk/data/chapters';

/**
 * 人生时间轴核心模块
 * 按 7 个阶段分组显示事件
 * 左侧时间标尺（sticky），右侧事件卡片
 */
export default function Timeline() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  // 按阶段分组
  const groupedEvents = useMemo(() => {
    return lifeStages.map((stage) => ({
      stage,
      events: timelineEvents.filter((e) => e.stage === stage.id),
    }));
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#e63946] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">TIMELINE</p>
          <h2 className="font-serif text-3xl font-bold text-[#f1faee] sm:text-4xl md:text-5xl">
            人生时间轴
          </h2>
          <p className="mt-3 font-sans text-xs text-[#f1faee]/50 sm:mt-4 sm:text-sm">
            从比勒陀利亚的少年到星舰时代 · 七个阶段 · 八十二个瞬间
          </p>
        </div>

        <div className="space-y-12">
          {groupedEvents.map(({ stage, events }) => (
            <StageSection key={stage.id} stage={stage} events={events} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单个阶段区块
function StageSection({ stage, events }: { stage: LifeStage; events: TimelineEvent[] }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05, rootMargin: '0px 0px -5% 0px' });

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} relative rounded-2xl border border-white/5 px-3 py-4 transition-colors duration-700 sm:px-6 sm:py-6 md:px-8`}
      style={{
        background: `linear-gradient(135deg, ${stage.color}10 0%, transparent 60%)`,
      }}
    >
      <div>
        {/* 阶段标题 */}
        <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-4 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full font-serif text-sm font-bold text-white sm:h-9 sm:w-9"
                style={{ backgroundColor: stage.color, boxShadow: `0 0 16px ${stage.color}80` }}
              >
                {stage.id}
              </span>
              <h3 className="font-serif text-xl font-bold sm:text-2xl md:text-3xl" style={{ color: stage.colorLight }}>
                {stage.title}
              </h3>
            </div>
            <p className="mt-2 font-sans text-xs text-[#f1faee]/50 sm:mt-3 sm:text-sm">{stage.description}</p>
          </div>
          <span className="font-serif text-sm font-medium text-[#f1faee]/40 sm:text-base md:text-lg">{stage.period}</span>
        </div>

        {/* 左侧时间标尺 + 右侧事件卡片 */}
        <div className="relative grid gap-3 pl-14 sm:gap-4 sm:pl-20 md:gap-5 md:pl-24">
          {/* 垂直时间线 */}
          <div
            className="absolute left-[18px] top-0 h-full w-px sm:left-[28px] md:left-[32px]"
            style={{ background: `linear-gradient(to bottom, ${stage.color}, transparent)` }}
          />

          {events.map((event) => (
            <EventCard key={event.id} event={event} color={stage.color} colorLight={stage.colorLight} />
          ))}
        </div>
      </div>
    </div>
  );
}

// 单个事件卡片
function EventCard({
  event,
  color,
  colorLight,
}: {
  event: TimelineEvent;
  color: string;
  colorLight: string;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
  const isHigh = event.significance === 'high';

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} relative`}
    >
      {/* 时间线节点 */}
      <div
        className="absolute -left-[38px] top-3 flex h-3.5 w-3.5 items-center justify-center rounded-full sm:-left-[52px] sm:top-4 sm:h-4 sm:w-4 md:-left-[64px]"
        style={{
          backgroundColor: isHigh ? color : '#1a1a2e',
          border: `2px solid ${colorLight}`,
          boxShadow: isHigh ? `0 0 12px ${color}` : 'none',
        }}
      />

      {/* 卡片 */}
      <div
        className="glass-card overflow-hidden p-3 transition-all duration-300 hover:translate-x-1 sm:p-4 md:p-5"
        style={{
          borderColor: isHigh ? `${color}60` : undefined,
          boxShadow: isHigh ? `0 0 18px ${color}25` : undefined,
        }}
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-3">
          <span className="font-serif text-xs font-bold sm:text-sm" style={{ color: colorLight }}>
            {event.date || event.year}
          </span>
          <span className="rounded bg-white/5 px-1.5 py-0.5 font-sans text-[10px] text-[#f1faee]/50 sm:px-2 sm:text-xs">
            第{event.chapter}章
          </span>
          {isHigh && (
            <span
              className="rounded px-1.5 py-0.5 font-sans text-[9px] font-semibold tracking-wider text-white sm:px-2 sm:text-[10px]"
              style={{ backgroundColor: color }}
            >
              KEY
            </span>
          )}
        </div>
        <p className="mt-2 font-sans text-xs leading-relaxed text-[#f1faee]/85 sm:text-sm">
          {event.event}
        </p>
        {event.location && (
          <p className="mt-2 flex items-center gap-1 font-sans text-[10px] text-[#f1faee]/40 sm:text-xs">
            <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" style={{ color: colorLight }} />
            {event.location}
          </p>
        )}
      </div>
    </div>
  );
}

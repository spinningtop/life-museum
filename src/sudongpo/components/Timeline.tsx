import { useMemo } from 'react';
import { MapPin } from 'lucide-react';
import { timelineEvents } from '@/sudongpo/data/timeline';
import { lifeStages } from '@/sudongpo/data/chapters';
import { useScrollReveal } from '@/sudongpo/hooks/useScrollReveal';
import type { TimelineEvent } from '@/sudongpo/data/timeline';
import type { LifeStage } from '@/sudongpo/data/chapters';

/**
 * 人生时间轴核心模块
 * 按 4 个阶段分组显示事件
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
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#c73e3a]">TIMELINE</p>
          <h2 className="font-serif text-4xl font-bold text-[#f5e6d3] sm:text-5xl">
            人生时间轴
          </h2>
          <p className="mt-4 font-sans text-sm text-[#f5e6d3]/50">
            从眉山少年到天涯词客 · 四个阶段 · 四十一个瞬间
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
      className={`reveal ${isVisible ? 'is-visible' : ''} relative rounded-2xl border border-white/5 px-4 py-6 transition-colors duration-700 sm:px-8`}
      style={{
        background: `linear-gradient(135deg, ${stage.color}10 0%, transparent 60%)`,
      }}
    >
      <div>
        {/* 阶段标题 */}
        <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full font-serif text-sm font-bold text-white"
                style={{ backgroundColor: stage.color, boxShadow: `0 0 16px ${stage.color}80` }}
              >
                {stage.id}
              </span>
              <h3 className="font-serif text-2xl font-bold sm:text-3xl" style={{ color: stage.colorLight }}>
                {stage.title}
              </h3>
            </div>
            <p className="mt-3 font-sans text-sm text-[#f5e6d3]/50">{stage.description}</p>
          </div>
          <span className="font-serif text-lg font-medium text-[#f5e6d3]/40">{stage.period}</span>
        </div>

        {/* 左侧时间线 + 右侧事件卡片 */}
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
        className="absolute -left-[38px] top-4 flex h-4 w-4 items-center justify-center rounded-full sm:-left-[52px] md:-left-[64px]"
        style={{
          backgroundColor: isHigh ? color : '#1a1a2e',
          border: `2px solid ${colorLight}`,
          boxShadow: isHigh ? `0 0 12px ${color}` : 'none',
        }}
      />

      {/* 卡片 */}
      <div
        className="glass-card overflow-hidden p-4 transition-all duration-300 hover:translate-x-1 sm:p-5"
        style={{
          borderColor: isHigh ? `${color}60` : undefined,
          boxShadow: isHigh ? `0 0 18px ${color}25` : undefined,
        }}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-serif text-sm font-bold" style={{ color: colorLight }}>
            {event.date || event.year}
          </span>
          <span className="rounded bg-white/5 px-2 py-0.5 font-sans text-xs text-[#f5e6d3]/50">
            第{event.chapter}章
          </span>
          {isHigh && (
            <span
              className="rounded px-2 py-0.5 font-sans text-[10px] font-semibold tracking-wider text-white"
              style={{ backgroundColor: color }}
            >
              KEY
            </span>
          )}
        </div>
        <p className="mt-2 font-sans text-sm leading-relaxed text-[#f5e6d3]/85">
          {event.event}
        </p>
        {event.location && (
          <p className="mt-2 flex items-center gap-1 font-sans text-xs text-[#f5e6d3]/40">
            <MapPin className="h-3 w-3" style={{ color: colorLight }} />
            {event.location}
          </p>
        )}
      </div>
    </div>
  );
}

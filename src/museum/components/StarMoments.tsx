import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';
import { starMoments } from '@/museum/data/starMoments';
import { useScrollReveal } from '@/museum/hooks/useScrollReveal';
import type { StarMoment } from '@/museum/data/starMoments';

/**
 * 群星闪耀精选时刻
 * 跨传记的决定性瞬间，点击进入对应传记
 */
export default function StarMoments() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题区 */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4A24C]">
            SHINING MOMENTS
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#F5F1E8] sm:text-5xl">
            群星闪耀
          </h2>
          <p className="mt-4 font-sans text-sm text-[#F5F1E8]/50">
            跨越时空的决定性瞬间 · 命运在此折返或跃迁
          </p>
        </div>

        {/* 时刻列表 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {starMoments.map((moment) => (
            <MomentCard key={moment.id} moment={moment} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单个时刻卡片
function MomentCard({ moment }: { moment: StarMoment }) {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
      <button
        type="button"
        onClick={() => navigate(moment.bioUrl)}
        className="glass-card group relative flex h-full w-full flex-col overflow-hidden p-6 text-left transition-all duration-500 hover:translate-y-[-3px]"
      >
        {/* 顶部：年份 + 星标 */}
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-2xl font-bold text-[#D4A24C]">
            {moment.year}
          </span>
          <Star className="h-4 w-4 text-[#D4A24C]/70 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* 标题 */}
        <h3 className="font-serif text-lg font-bold text-[#F5F1E8]">
          {moment.title}
        </h3>

        {/* 人物 */}
        <p className="mt-1 font-sans text-xs tracking-wider text-[#F5F1E8]/50">
          {moment.person}
        </p>

        {/* 描述 */}
        <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-[#F5F1E8]/70">
          {moment.description}
        </p>

        {/* 跳转提示 */}
        <div className="mt-4 flex items-center gap-1 font-sans text-xs text-[#F5F1E8]/45 transition-colors group-hover:text-[#D4A24C]">
          <span>走进这段人生</span>
          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </button>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { GitBranch, ArrowUpRight } from 'lucide-react';
import { forkMoments } from '@/museum/data/forkMoments';
import { useScrollReveal } from '@/museum/hooks/useScrollReveal';
import type { ForkMoment } from '@/museum/data/forkMoments';

/**
 * 命运岔路口精选
 * 跨传记的反事实推演，整卡以 Link 跳转至对应传记
 */
export default function ForkMoments() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题区 */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4A24C]">
            CROSSROADS
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#F5F1E8] sm:text-5xl">
            命运岔路口
          </h2>
          <p className="mt-4 font-sans text-sm text-[#F5F1E8]/50">
            历史不可假设 · 但想象让它更清晰
          </p>
        </div>

        {/* 岔路口卡片列表 */}
        <div className="space-y-5">
          {forkMoments.map((fork) => (
            <ForkCard key={fork.id} fork={fork} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单个岔路口卡片（整卡为 Link）
function ForkCard({ fork }: { fork: ForkMoment }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
      <Link
        to={fork.bioUrl}
        className="glass-card group relative block overflow-hidden p-6 transition-all duration-500 hover:translate-y-[-2px] sm:p-7"
      >
        {/* 顶部光晕 */}
        <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-[#8B7AB8] opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />

        {/* 顶部：标题 + 人物 */}
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <GitBranch className="mt-1 h-5 w-5 shrink-0 text-[#8B7AB8]" />
            <div>
              <h3 className="font-serif text-lg font-bold text-[#F5F1E8] sm:text-xl">
                {fork.title}
              </h3>
              <p className="mt-1 font-sans text-xs tracking-wider text-[#F5F1E8]/50">
                {fork.person}
              </p>
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-[#F5F1E8]/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D4A24C]" />
        </div>

        {/* 真实 / 平行历史 双栏 */}
        <div className="relative mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* 真实历史 */}
          <div className="border-l-2 border-[#D4A24C]/60 pl-4">
            <span className="font-sans text-[10px] tracking-[0.2em] text-[#D4A24C]">
              真实历史
            </span>
            <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#F5F1E8]/80">
              {fork.realHistory}
            </p>
          </div>

          {/* 平行历史 */}
          <div className="border-l-2 border-[#8B7AB8]/60 pl-4">
            <span className="font-sans text-[10px] tracking-[0.2em] text-[#8B7AB8]">
              平行历史
            </span>
            <p className="mt-1.5 font-sans text-sm italic leading-relaxed text-[#F5F1E8]/60">
              {fork.altHistory}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

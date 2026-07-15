import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { biographies } from '@/museum/data/biographies';
import { useScrollReveal } from '@/museum/hooks/useScrollReveal';
import type { Biography } from '@/museum/data/biographies';

/**
 * 馆藏卡片列表
 * 展示当前收录的人物传记，点击进入对应传记详情
 */
export default function Biographies() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题区 */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#D4A24C] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
            COLLECTION
          </p>
          <h2 className="font-serif text-2xl font-bold text-[#F5F1E8] sm:text-3xl md:text-4xl lg:text-5xl">
            馆藏传记
          </h2>
          <p className="mt-3 font-sans text-xs text-[#F5F1E8]/50 sm:mt-4 sm:text-sm">
            每一本传记，都是一座可走进的人生展厅
          </p>
        </div>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          {biographies.map((bio, index) => (
            <BiographyCard key={bio.id} bio={bio} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单本传记卡片
function BiographyCard({ bio, index }: { bio: Biography; index: number }) {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        type="button"
        onClick={() => navigate(bio.bioUrl)}
        className="glass-card group relative flex h-full w-full flex-col overflow-hidden p-6 text-left transition-all duration-500 hover:translate-y-[-6px] sm:p-8"
        style={{ borderColor: `${bio.coverColor}40` }}
      >
        {/* 顶部微光扫过效果 */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-1/2 -left-full h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]"
          />
        </div>

        {/* 顶部光晕 */}
        <div
          className="absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-15 blur-2xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-125 sm:-top-20 sm:-right-20 sm:h-40 sm:w-40"
          style={{ backgroundColor: bio.coverColor }}
        />

        {/* 底部边缘光晕 */}
        <div
          className="absolute -bottom-20 -left-10 h-32 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
          style={{ backgroundColor: bio.coverColor }}
        />

        {/* 封面色块 */}
        <div className="relative mb-5 flex items-center justify-between sm:mb-6">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
            style={{ backgroundColor: `${bio.coverColor}20`, border: `1px solid ${bio.coverColor}50` }}
          >
            <BookOpen className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[-5deg] sm:h-6 sm:w-6" style={{ color: bio.coverColor }} />
          </div>
          <span
            className="font-sans text-[11px] tracking-[0.15em] transition-all duration-300 group-hover:tracking-[0.25em] sm:text-xs sm:tracking-[0.2em]"
            style={{ color: bio.coverColor }}
          >
            {bio.tagline}
          </span>
        </div>

        {/* 传记名 */}
        <h3 className="font-serif text-xl font-bold text-[#F5F1E8] transition-all duration-300 group-hover:text-gold-gradient sm:text-2xl md:text-3xl">
          {bio.name}
        </h3>

        {/* 副标题 */}
        <p className="mt-2 font-serif text-sm text-[#F5F1E8]/70 transition-colors duration-300 group-hover:text-[#F5F1E8]/85 sm:text-base">
          {bio.subtitle}
        </p>

        {/* 年代 */}
        <p className="mt-3 font-mono text-[11px] tracking-wider text-[#F5F1E8]/45 transition-colors duration-300 group-hover:text-[#F5F1E8]/65 sm:mt-4 sm:text-xs">
          {bio.era}
        </p>

        {/* 进入提示 */}
        <div className="mt-5 flex items-center gap-1.5 font-sans text-xs text-[#F5F1E8]/55 transition-all duration-300 group-hover:text-[#D4A24C] group-hover:gap-2.5 sm:mt-6">
          <span>进入展厅</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-4 sm:w-4" />
        </div>
      </button>
    </div>
  );
}

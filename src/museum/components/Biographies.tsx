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
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题区 */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4A24C]">
            COLLECTION
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#F5F1E8] sm:text-5xl">
            馆藏传记
          </h2>
          <p className="mt-4 font-sans text-sm text-[#F5F1E8]/50">
            每一本传记，都是一座可走进的人生展厅
          </p>
        </div>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {biographies.map((bio) => (
            <BiographyCard key={bio.id} bio={bio} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单本传记卡片
function BiographyCard({ bio }: { bio: Biography }) {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
      <button
        type="button"
        onClick={() => navigate(bio.bioUrl)}
        className="glass-card group relative flex h-full w-full flex-col overflow-hidden p-8 text-left transition-all duration-500 hover:translate-y-[-4px]"
        style={{ borderColor: `${bio.coverColor}40` }}
      >
        {/* 顶部光晕 */}
        <div
          className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
          style={{ backgroundColor: bio.coverColor }}
        />

        {/* 封面色块 */}
        <div className="relative mb-6 flex items-center justify-between">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${bio.coverColor}20`, border: `1px solid ${bio.coverColor}50` }}
          >
            <BookOpen className="h-6 w-6" style={{ color: bio.coverColor }} />
          </div>
          <span
            className="font-sans text-xs tracking-[0.2em]"
            style={{ color: bio.coverColor }}
          >
            {bio.tagline}
          </span>
        </div>

        {/* 传记名 */}
        <h3 className="font-serif text-2xl font-bold text-[#F5F1E8] sm:text-3xl">
          {bio.name}
        </h3>

        {/* 副标题 */}
        <p className="mt-2 font-serif text-sm text-[#F5F1E8]/70 sm:text-base">
          {bio.subtitle}
        </p>

        {/* 年代 */}
        <p className="mt-4 font-mono text-xs tracking-wider text-[#F5F1E8]/45">
          {bio.era}
        </p>

        {/* 进入提示 */}
        <div className="mt-6 flex items-center gap-1.5 font-sans text-xs text-[#F5F1E8]/55 transition-colors group-hover:text-[#F5F1E8]/90">
          <span>进入展厅</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </button>
    </div>
  );
}

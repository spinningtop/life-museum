import { useState } from 'react';
import {
  Waves,
  Moon,
  Mountain,
  Umbrella,
  Heart,
  PenTool,
  Bird,
  Sparkles,
  Calendar,
  MapPin,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { works } from '@/sudongpo/data/works';
import { useScrollReveal } from '@/sudongpo/hooks/useScrollReveal';
import type { Work } from '@/sudongpo/data/works';

// 图标名称到组件的映射
const iconMap: Record<string, LucideIcon> = {
  waves: Waves,
  moon: Moon,
  mountain: Mountain,
  umbrella: Umbrella,
  heart: Heart,
  'pen-tool': PenTool,
  bird: Bird,
  sparkles: Sparkles,
};

/**
 * 传世佳作
 * 网格布局展示诗词书画作品卡片，hover 展开详情
 */
export default function Masterworks() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#c73e3a]">MASTERWORKS</p>
          <h2 className="font-serif text-4xl font-bold text-[#f5e6d3] sm:text-5xl">传世佳作</h2>
          <p className="mt-4 font-sans text-sm text-[#f5e6d3]/50">
            诗词书画五绝天下 · 十篇千古文章 · 一部宋代文学史诗
          </p>
        </div>

        {/* 作品网格 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单个作品卡片
function WorkCard({ work }: { work: Work }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[work.icon] ?? Sparkles;

  return (
    <div
      className="glass-card group relative h-full overflow-hidden p-6 transition-all duration-500 hover:translate-y-[-4px]"
      style={{ borderColor: `${work.color}30` }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* 顶部光晕 */}
      <div
        className="absolute -top-20 -right-20 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ backgroundColor: work.color }}
      />

      {/* 图标 */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${work.color}20`,
          boxShadow: `0 0 20px ${work.color}30`,
        }}
      >
        <Icon className="h-6 w-6" style={{ color: work.color }} />
      </div>

      {/* 作品名称 */}
      <h3 className="font-serif text-xl font-bold text-[#f5e6d3]">{work.name}</h3>
      <p className="mt-0.5 font-sans text-xs tracking-wide text-[#f5e6d3]/40">{work.type}</p>

      {/* 元信息 */}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs">
        <span className="flex items-center gap-1 text-[#f5e6d3]/60">
          <Calendar className="h-3 w-3" style={{ color: work.color }} />
          {work.year}
        </span>
        <span className="flex items-center gap-1 text-[#f5e6d3]/60">
          <MapPin className="h-3 w-3" style={{ color: work.color }} />
          {work.place}
        </span>
      </div>

      {/* 描述 */}
      <p className="mt-4 font-sans text-sm leading-relaxed text-[#f5e6d3]/70">
        {work.description}
      </p>

      {/* 名句节选 */}
      <p className="mt-3 font-serif text-sm italic leading-relaxed text-[#e9c46a]/70">
        「{work.excerpt}」
      </p>

      {/* 展开详情 */}
      <div
        className="grid transition-all duration-500"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="font-sans text-xs leading-relaxed text-[#f5e6d3]/60">
              {work.detail}
            </p>
          </div>
        </div>
      </div>

      {/* 展开提示 */}
      <div className="mt-4 flex items-center gap-1 font-sans text-xs" style={{ color: work.color }}>
        <span>{expanded ? '收起' : '详情'}</span>
        <ChevronDown
          className="h-3 w-3 transition-transform duration-300"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
        />
      </div>
    </div>
  );
}

import { useState } from 'react';
import {
  Sword,
  Ship,
  BookOpen,
  Scroll,
  Landmark,
  Users,
  PenTool,
  Award,
  Calendar,
  Tag,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { works } from '@/zeng/data/works';
import { useScrollReveal } from '@/zeng/hooks/useScrollReveal';
import type { Work } from '@/zeng/data/works';

// 分类名称到图标组件的映射（曾国藩功业：湘军/洋务/家书/理学/治术等）
const iconMap: Record<string, LucideIcon> = {
  '军事湘军': Sword,
  '湘军': Sword,
  '军事': Sword,
  '洋务自强': Ship,
  '洋务': Ship,
  '家书教育': BookOpen,
  '家书': BookOpen,
  '教育': BookOpen,
  '理学修身': Scroll,
  '理学': Scroll,
  '修身': Scroll,
  '治术政治': Landmark,
  '治术': Landmark,
  '政治': Landmark,
  '识人用人': Users,
  '用人': Users,
  '人才': Users,
  '文化著作': PenTool,
  '著作': PenTool,
  '文化': PenTool,
};

// significance 到颜色的映射（青金墨色系）
const significanceColor: Record<Work['significance'], string> = {
  high: '#D4AF37',
  medium: '#4A6FA5',
  low: '#6B8E9F',
};

/**
 * 功业殿
 * 网格布局展示曾国藩的功业成就，hover 展开详情
 */
export default function AchievementHall() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4AF37]">HALL</p>
          <h2 className="font-serif text-4xl font-bold text-[#F5E6CA] sm:text-5xl">功业殿</h2>
          <p className="mt-4 font-sans text-sm text-[#F5E6CA]/50">
            立德立功立言 · 从湘军到洋务的中兴版图
          </p>
        </div>

        {/* 功业网格 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {works.map((work) => (
            <AchievementCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单个功业卡片
function AchievementCard({ work }: { work: Work }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[work.category] ?? Award;
  const color = significanceColor[work.significance];

  return (
    <div
      className="glass-card group relative h-full overflow-hidden p-6 transition-all duration-500 hover:translate-y-[-4px]"
      style={{ borderColor: `${color}30` }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* 顶部光晕 */}
      <div
        className="absolute -top-20 -right-20 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ backgroundColor: color }}
      />

      {/* 图标 */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${color}20`,
          boxShadow: `0 0 20px ${color}30`,
        }}
      >
        <Icon className="h-6 w-6" style={{ color }} />
      </div>

      {/* 功业名称 */}
      <h3 className="font-serif text-xl font-bold text-[#F5E6CA]">{work.title}</h3>

      {/* 元信息 */}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs">
        <span className="flex items-center gap-1 text-[#F5E6CA]/60">
          <Calendar className="h-3 w-3" style={{ color }} />
          {work.year}
        </span>
        <span className="flex items-center gap-1 text-[#F5E6CA]/60">
          <Tag className="h-3 w-3" style={{ color }} />
          {work.category}
        </span>
        {work.significance === 'high' && (
          <span
            className="rounded px-1.5 py-0.5 font-sans text-[10px] font-semibold tracking-wider"
            style={{ color, backgroundColor: `${color}20` }}
          >
            里程碑
          </span>
        )}
      </div>

      {/* 描述 */}
      <p className="mt-4 font-sans text-sm leading-relaxed text-[#F5E6CA]/70">
        {work.description}
      </p>

      {/* 展开详情：展示 significance 标注 */}
      <div
        className="grid transition-all duration-500"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="font-sans text-xs leading-relaxed text-[#F5E6CA]/60">
              <span className="font-semibold" style={{ color }}>历史意义 · </span>
              {work.significance === 'high'
                ? '划时代里程碑，深刻改变晚清政局与近代中国走向。'
                : work.significance === 'medium'
                  ? '承前启后的关键节点，为中兴大业奠定根基。'
                  : '承前启后的关键节点，丰富曾国藩的功业版图。'}
            </p>
          </div>
        </div>
      </div>

      {/* 展开提示 */}
      <div className="mt-4 flex items-center gap-1 font-sans text-xs" style={{ color }}>
        <span>{expanded ? '收起' : '详情'}</span>
        <ChevronDown
          className="h-3 w-3 transition-transform duration-300"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
        />
      </div>
    </div>
  );
}

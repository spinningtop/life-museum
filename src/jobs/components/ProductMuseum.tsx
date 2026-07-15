import { useState } from 'react';
import {
  Cpu,
  Monitor,
  Film,
  Music,
  Smartphone,
  Tablet,
  Cloud,
  Store,
  Calendar,
  Tag,
  ChevronDown,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { works } from '@/jobs/data/works';
import { useScrollReveal } from '@/jobs/hooks/useScrollReveal';
import type { Work } from '@/jobs/data/works';

// 分类名称到图标组件的映射
const iconMap: Record<string, LucideIcon> = {
  '个人电脑': Monitor,
  '工作站': Cpu,
  '动画电影': Film,
  '音乐设备': Music,
  '智能手机': Smartphone,
  '平板电脑': Tablet,
  '云服务': Cloud,
  '数字服务': Store,
};

// significance 到颜色的映射（银色系）
const significanceColor: Record<Work['significance'], string> = {
  high: '#C0C0C0',
  medium: '#60A5FA',
  low: '#9CA3AF',
};

/**
 * 产品博物馆
 * 网格布局展示 12 款改变世界的产品，hover 展开详情
 */
export default function ProductMuseum() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#C0C0C0]">MUSEUM</p>
          <h2 className="font-serif text-4xl font-bold text-[#E5E7EB] sm:text-5xl">产品博物馆</h2>
          <p className="mt-4 font-sans text-sm text-[#E5E7EB]/50">
            十二款改变世界的产品 · 从车库主板到云端帝国
          </p>
        </div>

        {/* 产品网格 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {works.map((work) => (
            <ProductCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单个产品卡片
function ProductCard({ work }: { work: Work }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[work.category] ?? Sparkles;
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

      {/* 产品名称 */}
      <h3 className="font-serif text-xl font-bold text-[#E5E7EB]">{work.title}</h3>

      {/* 元信息 */}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs">
        <span className="flex items-center gap-1 text-[#E5E7EB]/60">
          <Calendar className="h-3 w-3" style={{ color }} />
          {work.year}
        </span>
        <span className="flex items-center gap-1 text-[#E5E7EB]/60">
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
      <p className="mt-4 font-sans text-sm leading-relaxed text-[#E5E7EB]/70">
        {work.description}
      </p>

      {/* 展开详情：展示 significance 标注 */}
      <div
        className="grid transition-all duration-500"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="font-sans text-xs leading-relaxed text-[#E5E7EB]/60">
              <span className="font-semibold" style={{ color }}>历史意义 · </span>
              {work.significance === 'high'
                ? '划时代里程碑，开启一个全新产业或时代。'
                : work.significance === 'medium'
                  ? '承前启后的关键节点，为后续革命奠定基础。'
                  : '承前启后的关键节点，丰富苹果产品矩阵。'}
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

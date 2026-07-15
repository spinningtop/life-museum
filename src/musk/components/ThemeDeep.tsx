import { useState } from 'react';
import {
  Ghost,
  Compass,
  Flame,
  Rocket,
  Atom,
  Zap,
  Cpu,
  RefreshCw,
  BookOpen,
  Crown,
  Layers,
  AlertTriangle,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { themes } from '@/musk/data/themes';
import { useScrollReveal } from '@/musk/hooks/useScrollReveal';
import type { Theme } from '@/musk/data/themes';

// 图标名称到组件的映射
const iconMap: Record<string, LucideIcon> = {
  ghost: Ghost,
  compass: Compass,
  flame: Flame,
  rocket: Rocket,
  atom: Atom,
  zap: Zap,
  cpu: Cpu,
  'refresh-cw': RefreshCw,
  'book-open': BookOpen,
  crown: Crown,
  layers: Layers,
  'alert-triangle': AlertTriangle,
};

/**
 * 核心主题
 * 12 个主题网格卡片，点击展开显示书中证据
 */
export default function ThemeDeep() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#e63946]">THEMES</p>
          <h2 className="font-serif text-4xl font-bold text-[#f1faee] sm:text-5xl">核心主题</h2>
          <p className="mt-4 font-sans text-sm text-[#f1faee]/50">
            十二条贯穿全书的精神脉络 · 理解马斯克的密码
          </p>
        </div>

        {/* 主题网格 */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单个主题卡片
function ThemeCard({ theme }: { theme: Theme }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[theme.icon] ?? Atom;

  return (
    <div
      className="glass-card group relative h-full overflow-hidden p-6 transition-all duration-500 hover:border-[#e63946]/30 hover:translate-y-[-2px]"
    >
      {/* 编号 */}
      <span className="absolute right-4 top-4 font-serif text-5xl font-black text-white/5">
        {String(theme.id).padStart(2, '0')}
      </span>

      {/* 图标 */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e63946]/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e63946]/20">
        <Icon className="h-6 w-6 text-[#e63946]" />
      </div>

      {/* 标题 */}
      <h3 className="font-serif text-lg font-bold text-[#f1faee]">{theme.title}</h3>

      {/* 描述 */}
      <p className="mt-3 font-sans text-sm leading-relaxed text-[#f1faee]/65">
        {theme.description}
      </p>

      {/* 展开证据 */}
      <div
        className="grid transition-all duration-500"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="mt-4 border-l-2 border-[#e63946]/50 pl-4">
            <p className="font-sans text-[10px] font-semibold tracking-wider text-[#e63946]/70">
              书中证据
            </p>
            <p className="mt-2 font-sans text-xs leading-relaxed text-[#f1faee]/60">
              {theme.evidence}
            </p>
          </div>
        </div>
      </div>

      {/* 展开/收起按钮 */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-4 flex items-center gap-1 font-sans text-xs text-[#e63946] transition-opacity hover:opacity-80"
      >
        <span>{expanded ? '收起' : '展开证据'}</span>
        <ChevronDown
          className="h-3 w-3 transition-transform duration-300"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
        />
      </button>
    </div>
  );
}

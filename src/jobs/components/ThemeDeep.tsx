import { useState } from 'react';
import {
  Sparkles,
  Wand2,
  Flower2,
  Cross,
  Heart,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { themes } from '@/jobs/data/themes';
import { useScrollReveal } from '@/jobs/hooks/useScrollReveal';
import type { Theme } from '@/jobs/data/themes';

// 主题按顺序映射到图标组件
const iconList: LucideIcon[] = [Sparkles, Wand2, Flower2, Cross, Heart];

/**
 * 主题深度
 * 5 个主题网格卡片，点击展开显示书中证据（多条引文）
 */
export default function ThemeDeep() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#C0C0C0] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">THEMES</p>
          <h2 className="font-serif text-3xl font-bold text-[#E5E7EB] sm:text-4xl md:text-5xl">主题深度</h2>
          <p className="mt-3 font-sans text-xs text-[#E5E7EB]/50 sm:mt-4 sm:text-sm">
            五条贯穿全书的精神脉络 · 理解乔布斯的密码
          </p>
        </div>

        {/* 主题网格 */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme, idx) => (
            <ThemeCard key={theme.id} theme={theme} iconIndex={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单个主题卡片
function ThemeCard({ theme, iconIndex }: { theme: Theme; iconIndex: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconList[iconIndex % iconList.length] ?? Sparkles;

  return (
    <div
      className="glass-card group relative h-full overflow-hidden p-4 transition-all duration-500 hover:border-[#C0C0C0]/30 hover:translate-y-[-2px] sm:p-5 md:p-6"
    >
      {/* 编号 */}
      <span className="absolute right-3 top-3 font-serif text-4xl font-black text-white/5 sm:right-4 sm:top-4 sm:text-5xl">
        {String(theme.id).padStart(2, '0')}
      </span>

      {/* 图标 */}
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C0C0C0]/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#C0C0C0]/20 sm:mb-4 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 text-[#C0C0C0] sm:h-6 sm:w-6" />
      </div>

      {/* 标题 */}
      <h3 className="font-serif text-base font-bold text-[#E5E7EB] sm:text-lg">{theme.title}</h3>

      {/* 概述 */}
      <p className="mt-2 font-sans text-xs leading-relaxed text-[#E5E7EB]/65 sm:mt-3 sm:text-sm">
        {theme.summary}
      </p>

      {/* 展开证据：多条引文 */}
      <div
        className="grid transition-all duration-500"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="mt-4 border-l-2 border-[#C0C0C0]/50 pl-4">
            <p className="font-sans text-[10px] font-semibold tracking-wider text-[#C0C0C0]/70">
              书中证据
            </p>
            <div className="mt-2 space-y-3">
              {theme.quotes.map((quote, i) => (
                <p key={i} className="font-serif text-xs italic leading-relaxed text-[#E5E7EB]/60">
                  &ldquo;{quote}&rdquo;
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 展开/收起按钮 */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-4 flex items-center gap-1 font-sans text-xs text-[#C0C0C0] transition-opacity hover:opacity-80"
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

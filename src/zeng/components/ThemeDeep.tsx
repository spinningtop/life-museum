import { useState } from 'react';
import {
  Scroll,
  Sword,
  Users,
  Scale,
  Heart,
  BookOpen,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { themes } from '@/zeng/data/themes';
import { useScrollReveal } from '@/zeng/hooks/useScrollReveal';
import type { Theme } from '@/zeng/data/themes';

// 主题按顺序映射到图标组件（古典沉稳风）
const iconList: LucideIcon[] = [Scroll, Sword, Users, Scale, Heart, BookOpen];

/**
 * 主题深度
 * 多个主题网格卡片，点击展开显示书中证据（多条引文）
 */
export default function ThemeDeep() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4AF37]">THEMES</p>
          <h2 className="font-serif text-3xl font-bold text-[#F5E6CA] sm:text-4xl md:text-5xl">主题深度</h2>
          <p className="mt-3 font-sans text-sm text-[#F5E6CA]/50">
            贯穿全书的精神脉络 · 理解曾国藩的密码
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
  const Icon = iconList[iconIndex % iconList.length] ?? Scroll;

  return (
    <div
      className="glass-card group relative h-full overflow-hidden p-6 transition-all duration-500 hover:border-[#D4AF37]/30 hover:translate-y-[-2px]"
    >
      {/* 编号 */}
      <span className="absolute right-4 top-4 font-serif text-5xl font-black text-white/5">
        {String(theme.id).padStart(2, '0')}
      </span>

      {/* 图标 */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#D4AF37]/20">
        <Icon className="h-6 w-6 text-[#D4AF37]" />
      </div>

      {/* 标题 */}
      <h3 className="font-serif text-lg font-bold text-[#F5E6CA]">{theme.title}</h3>

      {/* 概述 */}
      <p className="mt-3 font-sans text-sm leading-relaxed text-[#F5E6CA]/65">
        {theme.summary}
      </p>

      {/* 展开证据：多条引文 */}
      <div
        className="grid transition-all duration-500"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="mt-4 border-l-2 border-[#D4AF37]/50 pl-4">
            <p className="font-sans text-[10px] font-semibold tracking-wider text-[#D4AF37]/70">
              书中证据
            </p>
            <div className="mt-2 space-y-3">
              {theme.quotes.map((quote, i) => (
                <p key={i} className="font-serif text-xs italic leading-relaxed text-[#F5E6CA]/60">
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
        className="mt-4 flex items-center gap-1 font-sans text-xs text-[#D4AF37] transition-opacity hover:opacity-80"
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

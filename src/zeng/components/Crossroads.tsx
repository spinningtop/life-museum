import { useState } from 'react';
import { GitBranch, RotateCcw, Sparkles } from 'lucide-react';
import { crossroads } from '@/zeng/data/crossroads';
import { useScrollReveal } from '@/zeng/hooks/useScrollReveal';
import type { Crossroad } from '@/zeng/data/crossroads';

/**
 * 命运的岔路口
 * 反事实历史模块：每个岔路口可在"真实历史"与"平行历史"之间切换
 * 平行历史状态以紫色 #6C3483 光晕暗示平行宇宙的异样感
 */
export default function Crossroads() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题区 */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4AF37]">CROSSROADS</p>
          <h2 className="font-serif text-3xl font-bold text-[#F5E6CA] sm:text-4xl md:text-5xl">
            命运的岔路口
          </h2>
          <p className="mt-3 font-sans text-sm text-[#F5E6CA]/50">
            历史的分岔口 · 如果当时
          </p>
        </div>

        {/* 岔路口卡片列表 */}
        <div className="space-y-6">
          {crossroads.map((item, idx) => (
            <CrossroadCard key={item.id} crossroad={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单个岔路口卡片
function CrossroadCard({ crossroad, index }: { crossroad: Crossroad; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  // 当前是否处于"平行历史"视图
  const [isAlternate, setIsAlternate] = useState(false);

  // 平行历史状态下的强调色：紫色暗示平行宇宙
  const accentColor = isAlternate ? '#6C3483' : crossroad.color;

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
      <div
        className="glass-card group relative overflow-hidden p-6 transition-all duration-500 hover:translate-y-[-2px] sm:p-8"
        style={{
          borderColor: `${accentColor}50`,
          boxShadow: isAlternate ? `0 0 28px ${accentColor}30` : undefined,
        }}
      >
        {/* 顶部装饰光晕 */}
        <div
          className="absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
          style={{ backgroundColor: accentColor }}
        />

        {/* 左右分栏布局 */}
        <div className="relative flex flex-col gap-6 sm:flex-row">
          {/* 左侧：年份 + 时刻 */}
          <div className="sm:w-1/3 sm:shrink-0">
            <div className="flex items-baseline gap-2">
              <span
                className="font-serif text-4xl font-bold leading-none"
                style={{ color: accentColor }}
              >
                {crossroad.year}
              </span>
              <span className="font-sans text-xs text-[#F5E6CA]/40">
                岔路口 {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="mt-3 font-serif text-sm leading-relaxed text-[#F5E6CA]/75">
              {crossroad.moment}
            </p>
          </div>

          {/* 右侧：真实 / 平行历史 内容 */}
          <div className="flex-1 border-t border-white/10 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
            {/* 切换按钮 */}
            <button
              type="button"
              onClick={() => setIsAlternate((prev) => !prev)}
              className="mb-4 inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-sans text-xs tracking-wider transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderColor: `${accentColor}80`,
                color: isAlternate ? '#F5E6CA' : accentColor,
                backgroundColor: isAlternate ? `${accentColor}20` : 'transparent',
              }}
            >
              {isAlternate ? (
                <>
                  <RotateCcw className="h-3 w-3" />
                  回到真实历史
                </>
              ) : (
                <>
                  <GitBranch className="h-3 w-3" />
                  进入平行历史
                </>
              )}
            </button>

            {/* 内容区：两个视图通过 opacity 切换 */}
            <div className="relative min-h-[120px]">
              {/* 真实历史视图 */}
              <div
                className={`transition-all duration-500 ${
                  isAlternate
                    ? 'pointer-events-none absolute inset-0 translate-y-2 opacity-0'
                    : 'opacity-100'
                }`}
              >
                <span className="font-sans text-[10px] tracking-wider text-[#F5E6CA]/50">
                  真实历史
                </span>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#F5E6CA]/85">
                  {crossroad.reality}
                </p>
              </div>

              {/* 平行历史视图 */}
              <div
                className={`transition-all duration-500 ${
                  isAlternate
                    ? 'opacity-100'
                    : 'pointer-events-none absolute inset-0 -translate-y-2 opacity-0'
                }`}
              >
                {/* 岔路口假设 */}
                <div className="mb-3 flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" style={{ color: accentColor }} />
                  <span
                    className="font-sans text-[10px] tracking-wider"
                    style={{ color: accentColor }}
                  >
                    {crossroad.fork}
                  </span>
                </div>

                {/* 平行历史 */}
                <p className="font-sans text-xs italic leading-relaxed text-[#F5E6CA]/70">
                  {crossroad.alternate}
                </p>

                {/* 连锁影响 */}
                <div
                  className="mt-3 border-l-2 pl-3"
                  style={{ borderColor: accentColor }}
                >
                  <span className="font-sans text-[10px] tracking-wider text-[#6C3483]/80">
                    连锁影响
                  </span>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-[#F5E6CA]/65">
                    {crossroad.consequence}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

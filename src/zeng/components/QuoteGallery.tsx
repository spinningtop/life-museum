import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote as QuoteIcon } from 'lucide-react';
import { quotes } from '@/zeng/data/quotes';
import { useScrollReveal } from '@/zeng/hooks/useScrollReveal';

// 情绪到背景渐变的映射（青金墨色风）
const emotionBg: Record<string, string> = {
  reflective: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2a 100%)',
  passionate: 'linear-gradient(135deg, #1a1a14 0%, #2a2418 100%)',
  dark: 'linear-gradient(135deg, #08081a 0%, #141428 100%)',
  triumphant: 'linear-gradient(135deg, #1a160a 0%, #2a2418 100%)',
  philosophical: 'linear-gradient(135deg, #0a1422 0%, #16243a 100%)',
};

// 情绪到强调色的映射（青金墨色系）
const emotionAccent: Record<string, string> = {
  reflective: '#4A6FA5',
  passionate: '#D4AF37',
  dark: '#6B8E9F',
  triumphant: '#D4AF37',
  philosophical: '#F5E6CA',
};

// 默认情绪（未匹配时使用青金）
const DEFAULT_BG = 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2a 100%)';
const DEFAULT_ACCENT = '#D4AF37';

const AUTOPLAY_MS = 6000;

/**
 * 金句廊
 * 全宽大字引用展示，自动轮播 + 手动控制
 */
export default function QuoteGallery() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = quotes[index];
  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + quotes.length) % quotes.length),
    []
  );

  // 自动轮播：每次切换后重新计时，手动操作也会重置
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [paused, index]);

  const emotion = current.emotion ?? '';
  const accent = emotionAccent[emotion] ?? DEFAULT_ACCENT;
  const bg = emotionBg[emotion] ?? DEFAULT_BG;

  return (
    <section className="relative px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4AF37]">QUOTES</p>
          <h2 className="font-serif text-4xl font-bold text-[#F5E6CA] sm:text-5xl">金句廊</h2>
        </div>

        {/* 轮播容器 */}
        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* 背景层，随情绪变化 */}
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{ background: bg }}
          />

          {/* 内容层 */}
          <div className="relative px-5 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20">
            <QuoteIcon
              className="mx-auto mb-6 h-8 w-8 transition-colors duration-500 sm:mb-8 sm:h-10 sm:w-10"
              style={{ color: `${accent}80` }}
            />

            {/* 引用文字 */}
            <blockquote
              key={current.id}
              className="animate-fade-in-up mx-auto max-w-4xl text-center"
            >
              <p
                className="font-serif text-xl font-medium leading-relaxed transition-colors duration-500 sm:text-2xl md:text-3xl lg:text-4xl"
                style={{ color: '#F5E6CA' }}
              >
                {current.text}
              </p>
              <footer className="mt-6 flex flex-col items-center gap-2 sm:mt-8">
                <span
                  className="font-serif text-sm font-bold transition-colors duration-500 sm:text-base"
                  style={{ color: accent }}
                >
                  —— {current.speaker}
                </span>
                <span className="font-sans text-xs text-[#F5E6CA]/50">
                  {current.source} · {current.year}
                </span>
              </footer>
            </blockquote>

            {/* 左右箭头 */}
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-[#F5E6CA]/60 backdrop-blur transition-all hover:bg-white/10 hover:text-[#F5E6CA] sm:left-5 sm:h-11 sm:w-11"
              aria-label="上一条"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-[#F5E6CA]/60 backdrop-blur transition-all hover:bg-white/10 hover:text-[#F5E6CA] sm:right-5 sm:h-11 sm:w-11"
              aria-label="下一条"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* 进度指示 */}
          <div className="relative flex flex-wrap justify-center gap-1.5 px-8 pb-6">
            {quotes.map((q, i) => (
              <button
                key={q.id}
                type="button"
                onClick={() => setIndex(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 28 : 8,
                  backgroundColor: i === index ? accent : 'rgba(245,230,202,0.2)',
                }}
                aria-label={`第 ${i + 1} 条金句`}
              />
            ))}
          </div>
        </div>

        {/* 计数 */}
        <p className="mt-6 text-center font-sans text-xs text-[#F5E6CA]/40">
          {String(index + 1).padStart(2, '0')} / {String(quotes.length).padStart(2, '0')}
        </p>
      </div>
    </section>
  );
}

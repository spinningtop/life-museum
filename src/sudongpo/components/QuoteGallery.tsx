import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote as QuoteIcon } from 'lucide-react';
import { quotes } from '@/sudongpo/data/quotes';
import { useScrollReveal } from '@/sudongpo/hooks/useScrollReveal';
import type { Quote } from '@/sudongpo/data/quotes';

// 情绪到背景渐变的映射（宋韵深色系）
const emotionBg: Record<Quote['emotion'], string> = {
  reflective: 'linear-gradient(135deg, #1e1e32 0%, #1a1a2e 100%)',
  passionate: 'linear-gradient(135deg, #2a0a0e 0%, #4a1118 100%)',
  dark: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a1a 100%)',
  triumphant: 'linear-gradient(135deg, #2a1a05 0%, #4a3010 100%)',
  philosophical: 'linear-gradient(135deg, #0a1622 0%, #102030 100%)',
};

// 情绪到强调色的映射
const emotionAccent: Record<Quote['emotion'], string> = {
  reflective: '#D4A24C',
  passionate: '#c73e3a',
  dark: '#8E44AD',
  triumphant: '#e9c46a',
  philosophical: '#a8dadc',
};

const AUTOPLAY_MS = 6000;

/**
 * 金句长廊
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

  // 自动轮播
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [paused, index]);

  const accent = emotionAccent[current.emotion];

  return (
    <section className="relative px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#c73e3a]">QUOTES</p>
          <h2 className="font-serif text-4xl font-bold text-[#f5e6d3] sm:text-5xl">金句长廊</h2>
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
            style={{ background: emotionBg[current.emotion] }}
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
                style={{ color: '#f5e6d3' }}
              >
                {current.text}
              </p>
              <footer className="mt-6 flex flex-col items-center gap-2 sm:mt-8">
                <span
                  className="font-serif text-sm font-bold transition-colors duration-500 sm:text-base"
                  style={{ color: accent }}
                >
                  —— 《{current.source}》
                </span>
                <span className="font-sans text-xs text-[#f5e6d3]/50">
                  {current.year}年
                </span>
              </footer>
            </blockquote>

            {/* 左右箭头 */}
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-[#f5e6d3]/60 backdrop-blur transition-all hover:bg-white/10 hover:text-[#f5e6d3] sm:left-5 sm:h-11 sm:w-11"
              aria-label="上一条"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-[#f5e6d3]/60 backdrop-blur transition-all hover:bg-white/10 hover:text-[#f5e6d3] sm:right-5 sm:h-11 sm:w-11"
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
                  backgroundColor: i === index ? accent : 'rgba(245,230,211,0.2)',
                }}
                aria-label={`第 ${i + 1} 条金句`}
              />
            ))}
          </div>
        </div>

        {/* 计数 */}
        <p className="mt-6 text-center font-sans text-xs text-[#f5e6d3]/40">
          {String(index + 1).padStart(2, '0')} / {String(quotes.length).padStart(2, '0')}
        </p>
      </div>
    </section>
  );
}

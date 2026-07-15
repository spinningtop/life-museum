import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote as QuoteIcon } from 'lucide-react';
import { quotes } from '@/musk/data/quotes';
import { useScrollReveal } from '@/musk/hooks/useScrollReveal';
import type { Quote } from '@/musk/data/quotes';

// 情绪到背景渐变的映射
const emotionBg: Record<Quote['emotion'], string> = {
  reflective: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  passionate: 'linear-gradient(135deg, #2a0a0e 0%, #4a1118 100%)',
  dark: 'linear-gradient(135deg, #0d0d0d 0%, #1a0a1a 100%)',
  triumphant: 'linear-gradient(135deg, #2a1a05 0%, #4a3010 100%)',
  philosophical: 'linear-gradient(135deg, #0a1622 0%, #102030 100%)',
};

// 情绪到强调色的映射
const emotionAccent: Record<Quote['emotion'], string> = {
  reflective: '#4cc9f0',
  passionate: '#e63946',
  dark: '#8e44ad',
  triumphant: '#f1c40f',
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

  // 自动轮播：每次切换后重新计时，手动操作也会重置
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [paused, index]);

  const accent = emotionAccent[current.emotion];

  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#e63946] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">QUOTES</p>
          <h2 className="font-serif text-3xl font-bold text-[#f1faee] sm:text-4xl md:text-5xl">金句长廊</h2>
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
          <div className="relative px-5 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20">
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
                className="font-serif text-lg font-medium leading-relaxed transition-colors duration-500 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                style={{ color: '#f1faee' }}
              >
                {current.quote}
              </p>
              <footer className="mt-6 flex flex-col items-center gap-1 sm:mt-8 sm:gap-2">
                <span
                  className="font-serif text-sm font-bold transition-colors duration-500 sm:text-base"
                  style={{ color: accent }}
                >
                  —— {current.speaker}
                </span>
                <span className="font-sans text-[10px] text-[#f1faee]/50 sm:text-xs">
                  {current.context} · 第{current.chapter}章
                </span>
              </footer>
            </blockquote>

            {/* 左右箭头 */}
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-[#f1faee]/60 backdrop-blur transition-all hover:bg-white/10 hover:text-[#f1faee] sm:left-4 sm:h-11 sm:w-11 md:left-5"
              aria-label="上一条"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-[#f1faee]/60 backdrop-blur transition-all hover:bg-white/10 hover:text-[#f1faee] sm:right-4 sm:h-11 sm:w-11 md:right-5"
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
                  backgroundColor: i === index ? accent : 'rgba(241,250,238,0.2)',
                }}
                aria-label={`第 ${i + 1} 条金句`}
              />
            ))}
          </div>
        </div>

        {/* 计数 */}
        <p className="mt-6 text-center font-sans text-xs text-[#f1faee]/40">
          {String(index + 1).padStart(2, '0')} / {String(quotes.length).padStart(2, '0')}
        </p>
      </div>
    </section>
  );
}

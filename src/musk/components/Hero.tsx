import { ChevronDown } from 'lucide-react';
import { quotes } from '@/musk/data/quotes';

/**
 * 全屏沉浸式开场
 * 中心展示书名、副标题与 SNL 名言
 * 底部滚动提示箭头
 */
export default function Hero() {
  // 取 id=1 的金句作为题记
  const heroQuote = quotes.find((q) => q.id === 1) ?? quotes[0];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6">
      {/* 顶部小标签 */}
      <div className="animate-fade-in mb-6 flex items-center gap-2 opacity-0 sm:mb-8 sm:gap-3" style={{ animationDelay: '0.2s' }}>
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#e63946] sm:w-12" />
        <span className="font-sans text-xs tracking-[0.25em] text-[#e63946] sm:text-sm sm:tracking-[0.3em]">A BIOGRAPHY</span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#e63946] sm:w-12" />
      </div>

      {/* 书名 */}
      <h1
        className="animate-fade-in-up font-serif text-4xl font-black leading-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        style={{ animationDelay: '0.4s' }}
      >
        <span className="text-gradient-star">埃隆·马斯克传</span>
      </h1>

      {/* 副标题 */}
      <p
        className="animate-fade-in-up mt-4 font-serif text-base text-[#a8dadc]/80 opacity-0 sm:mt-6 sm:text-lg md:text-xl lg:text-2xl"
        style={{ animationDelay: '0.7s' }}
      >
        火星之火 · 冒险而审慎地生活
      </p>

      {/* 分隔线 */}
      <div
        className="animate-fade-in mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#e63946] to-transparent opacity-0 sm:mt-10 sm:w-32"
        style={{ animationDelay: '1s' }}
      />

      {/* SNL 名言 */}
      <blockquote
        className="animate-fade-in-up mt-8 max-w-2xl opacity-0 sm:mt-10 sm:max-w-3xl"
        style={{ animationDelay: '1.2s' }}
      >
        <p className="font-serif text-sm leading-relaxed text-[#f1faee]/70 sm:text-base md:text-lg lg:text-xl">
          「{heroQuote.quote}」
        </p>
        <footer className="mt-3 font-sans text-xs tracking-wider text-[#e63946]/80 sm:mt-4 sm:text-sm">
          —— {heroQuote.speaker} · {heroQuote.context}
        </footer>
      </blockquote>

      {/* 底部滚动提示 */}
      <div
        className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animationDelay: '1.8s' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-xs tracking-[0.2em] text-[#f1faee]/40">向下滚动</span>
          <ChevronDown className="animate-bounce-arrow h-6 w-6 text-[#e63946]" />
        </div>
      </div>
    </section>
  );
}

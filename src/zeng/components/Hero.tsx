import { ChevronDown } from 'lucide-react';
import { quotes } from '@/zeng/data/quotes';

/**
 * 全屏沉浸式开场
 * 中心展示书名、副标题与题记
 * 底部滚动提示箭头
 */
export default function Hero() {
  // 取 id=1 的金句作为题记
  const heroQuote = quotes.find((q) => q.id === 1) ?? quotes[0];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* 顶部小标签 */}
      <div className="animate-fade-in mb-6 flex items-center gap-2 opacity-0 sm:mb-8 sm:gap-3" style={{ animationDelay: '0.2s' }}>
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37] sm:w-12" />
        <span className="font-sans text-xs tracking-[0.2em] text-[#D4AF37] sm:text-sm sm:tracking-[0.3em]">A BIOGRAPHY</span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4AF37] sm:w-12" />
      </div>

      {/* 书名 */}
      <h1
        className="animate-fade-in-up font-serif text-4xl font-black leading-tight opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
        style={{ animationDelay: '0.4s' }}
      >
        <span
          style={{
            background: 'linear-gradient(135deg, #F5E6CA 0%, #D4AF37 50%, #4A6FA5 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}
        >
          曾国藩传
        </span>
      </h1>

      {/* 副标题 */}
      <p
        className="animate-fade-in-up mt-4 font-serif text-base text-[#F5E6CA]/80 opacity-0 sm:mt-6 sm:text-lg md:text-xl lg:text-2xl"
        style={{ animationDelay: '0.7s' }}
      >
        从农家子弟到中兴名臣
      </p>

      {/* 分隔线 */}
      <div
        className="animate-fade-in mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 sm:mt-10 sm:w-32"
        style={{ animationDelay: '1s' }}
      />

      {/* 题记金句 */}
      <blockquote
        className="animate-fade-in-up mt-8 max-w-3xl opacity-0 sm:mt-10"
        style={{ animationDelay: '1.2s' }}
      >
        <p className="font-serif text-sm leading-relaxed text-[#F5E6CA]/70 sm:text-base md:text-lg lg:text-xl">
          「{heroQuote.text}」
        </p>
        <footer className="mt-3 font-sans text-xs tracking-wider text-[#D4AF37]/80 sm:mt-4 sm:text-sm">
          —— {heroQuote.speaker} · {heroQuote.source}
        </footer>
      </blockquote>

      {/* 底部滚动提示 */}
      <div
        className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animationDelay: '1.8s' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-xs tracking-[0.2em] text-[#F5E6CA]/40">向下滚动</span>
          <ChevronDown className="animate-bounce-arrow h-6 w-6 text-[#D4AF37]" />
        </div>
      </div>
    </section>
  );
}

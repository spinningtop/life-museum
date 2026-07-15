import { Feather } from 'lucide-react';
import { quotes } from '@/sudongpo/data/quotes';
import { useScrollReveal } from '@/sudongpo/hooks/useScrollReveal';

/**
 * 尾声：一蓑烟雨任平生
 * 全屏深色沉浸式结语，展示全书最后的反思引文
 */
export default function Epilogue() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  // 取 id=4（也无风雨也无晴）作为总结，id=13（雪泥鸿爪）作为终极追问
  const summaryQuote = quotes.find((q) => q.id === 4);
  const finalQuestion = quotes.find((q) => q.id === 13);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* 底部朱砂光晕 */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(199,62,58,0.25) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} relative z-10 mx-auto max-w-4xl text-center`}>
        {/* 标签 */}
        <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#c73e3a]">EPILOGUE</p>

        {/* 标题 */}
        <h2 className="font-serif text-4xl font-bold text-[#f5e6d3] sm:text-5xl">
          尾声：一蓑烟雨任平生
        </h2>

        {/* 毛笔图标 */}
        <div className="my-10 flex justify-center">
          <Feather className="h-10 w-10 text-[#c73e3a] animate-pulse" />
        </div>

        {/* 总结引文 */}
        {summaryQuote && (
          <blockquote
            className="animate-fade-in-up mx-auto max-w-3xl opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="font-serif text-lg leading-loose text-[#f5e6d3]/85 sm:text-xl md:text-2xl">
              {summaryQuote.text}
            </p>
            <footer className="mt-4 font-sans text-sm text-[#c73e3a]/80">
              —— 《{summaryQuote.source}》 · {summaryQuote.year}年
            </footer>
          </blockquote>
        )}

        {/* 分隔 */}
        <div className="mx-auto my-12 h-px w-32 bg-gradient-to-r from-transparent via-[#c73e3a]/60 to-transparent" />

        {/* 终极追问 */}
        {finalQuestion && (
          <blockquote
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            <p className="font-serif text-2xl font-bold leading-relaxed text-gradient-ink sm:text-3xl md:text-4xl">
              {finalQuestion.text}
            </p>
            <footer className="mt-4 font-sans text-sm text-[#f5e6d3]/50">
              —— 《{finalQuestion.source}》 · {finalQuestion.year}年
            </footer>
          </blockquote>
        )}

        {/* 书籍信息 */}
        <div className="animate-fade-in mt-20 opacity-0" style={{ animationDelay: '1.4s' }}>
          <div className="mx-auto h-px w-16 bg-white/10" />
          <dl className="mt-6 space-y-1 font-sans text-xs text-[#f5e6d3]/40">
            <div>
              <dt className="inline">作者：</dt>
              <dd className="inline text-[#f5e6d3]/70">林语堂</dd>
            </div>
            <div>
              <dt className="inline">原著名：</dt>
              <dd className="inline text-[#f5e6d3]/70">The Gay Genius（快乐的天才）</dd>
            </div>
            <div>
              <dt className="inline">传主：</dt>
              <dd className="inline text-[#f5e6d3]/70">苏轼（1037—1101）</dd>
            </div>
          </dl>
          <p className="mt-8 font-serif text-sm text-[#f5e6d3]/30">
            —— 完 ——
          </p>
        </div>
      </div>
    </section>
  );
}

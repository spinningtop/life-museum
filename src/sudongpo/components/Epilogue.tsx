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
        <h2 className="font-serif text-3xl font-bold text-[#f5e6d3] sm:text-4xl md:text-5xl">
          尾声：一蓑烟雨任平生
        </h2>

        {/* 毛笔图标 */}
        <div className="my-8 flex justify-center sm:my-10">
          <Feather className="h-8 w-8 text-[#c73e3a] animate-pulse sm:h-10 sm:w-10" />
        </div>

        {/* 总结引文 */}
        {summaryQuote && (
          <blockquote
            className="animate-fade-in-up mx-auto max-w-3xl opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="font-serif text-base leading-loose text-[#f5e6d3]/85 sm:text-lg md:text-xl lg:text-2xl">
              {summaryQuote.text}
            </p>
            <footer className="mt-3 font-sans text-xs text-[#c73e3a]/80 sm:mt-4 sm:text-sm">
              —— 《{summaryQuote.source}》 · {summaryQuote.year}年
            </footer>
          </blockquote>
        )}

        {/* 分隔 */}
        <div className="mx-auto my-10 h-px w-24 bg-gradient-to-r from-transparent via-[#c73e3a]/60 to-transparent sm:my-12 sm:w-32" />

        {/* 终极追问 */}
        {finalQuestion && (
          <blockquote
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            <p className="font-serif text-xl font-bold leading-relaxed text-gradient-ink sm:text-2xl md:text-3xl lg:text-4xl">
              {finalQuestion.text}
            </p>
            <footer className="mt-3 font-sans text-xs text-[#f5e6d3]/50 sm:mt-4 sm:text-sm">
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

          {/* 版权声明 */}
          <div className="mx-auto mt-10 max-w-md rounded-lg border border-[#c73e3a]/20 bg-[#c73e3a]/5 px-5 py-4">
            <p className="font-sans text-xs leading-relaxed text-[#f5e6d3]/50">
              本页内容基于《苏东坡传》原书进行结构化整理与可视化展示，仅用于学习交流与阅读体验探索，
              不用于商业用途。原书版权归原作者及出版社所有。
            </p>
            <p className="mt-2 font-sans text-xs leading-relaxed text-[#c73e3a]/70">
              建议购买正版书籍，支持原作者与出版社，完整阅读原著更能感受苏东坡人生的豁达与诗意。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Flame } from 'lucide-react';
import { quotes } from '@/musk/data/quotes';
import { useScrollReveal } from '@/musk/hooks/useScrollReveal';

/**
 * 尾声：火焰导流槽
 * 全屏暗色沉浸式结语，展示全书最后的反思引文
 */
export default function Epilogue() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  // 取 id=26（作者总结）与 id=30（终极追问）
  const summaryQuote = quotes.find((q) => q.id === 26);
  const finalQuestion = quotes.find((q) => q.id === 30);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      {/* 底部火星红光晕 */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(230,57,70,0.25) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} relative z-10 mx-auto max-w-4xl text-center`}>
        {/* 标签 */}
        <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#e63946] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">EPILOGUE</p>

        {/* 标题 */}
        <h2 className="font-serif text-3xl font-bold text-[#f1faee] sm:text-4xl md:text-5xl">
          尾声：火焰导流槽
        </h2>

        {/* 火焰图标 */}
        <div className="my-8 flex justify-center sm:my-10">
          <Flame className="h-8 w-8 text-[#e63946] animate-pulse sm:h-10 sm:w-10" />
        </div>

        {/* 作者总结引文 */}
        {summaryQuote && (
          <blockquote
            className="animate-fade-in-up mx-auto max-w-3xl opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="font-serif text-base leading-loose text-[#f1faee]/85 sm:text-lg md:text-xl lg:text-2xl">
              {summaryQuote.quote}
            </p>
            <footer className="mt-3 font-sans text-xs text-[#e63946]/80 sm:mt-4 sm:text-sm">
              —— {summaryQuote.speaker}
            </footer>
          </blockquote>
        )}

        {/* 分隔 */}
        <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-[#e63946]/60 to-transparent sm:my-12 sm:w-32" />

        {/* 终极追问 */}
        {finalQuestion && (
          <blockquote
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            <p className="font-serif text-xl font-bold leading-relaxed text-gradient-mars sm:text-2xl md:text-3xl lg:text-4xl">
              {finalQuestion.quote}
            </p>
            <footer className="mt-3 font-sans text-xs text-[#f1faee]/50 sm:mt-4 sm:text-sm">
              —— {finalQuestion.speaker}
            </footer>
          </blockquote>
        )}

        {/* 书籍信息 */}
        <div className="animate-fade-in mt-16 opacity-0 sm:mt-20" style={{ animationDelay: '1.4s' }}>
          <div className="mx-auto h-px w-12 bg-white/10 sm:w-16" />
          <dl className="mt-4 space-y-1 font-sans text-[10px] text-[#f1faee]/40 sm:mt-6 sm:text-xs">
            <div>
              <dt className="inline">作者：</dt>
              <dd className="inline text-[#f1faee]/70">沃尔特·艾萨克森</dd>
            </div>
            <div>
              <dt className="inline">出版社：</dt>
              <dd className="inline text-[#f1faee]/70">中信出版集团</dd>
            </div>
            <div>
              <dt className="inline">出版时间：</dt>
              <dd className="inline text-[#f1faee]/70">2023年9月</dd>
            </div>
          </dl>
          <p className="mt-6 font-serif text-xs text-[#f1faee]/30 sm:mt-8 sm:text-sm">
            —— 完 ——
          </p>

          {/* 版权声明 */}
          <div className="mx-auto mt-8 max-w-md rounded-lg border border-[#e63946]/20 bg-[#e63946]/5 px-4 py-3 sm:mt-10 sm:px-5 sm:py-4">
            <p className="font-sans text-[10px] leading-relaxed text-[#f1faee]/50 sm:text-xs">
              本页内容基于《埃隆·马斯克传》原书进行结构化整理与可视化展示，仅用于学习交流与阅读体验探索，
              不用于商业用途。原书版权归原作者及出版社所有。
            </p>
            <p className="mt-2 font-sans text-[10px] leading-relaxed text-[#e63946]/70 sm:text-xs">
              建议购买正版书籍，支持原作者与出版社，完整阅读原著更能感受马斯克人生的细节与张力。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* 底部火星红光晕 */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(230,57,70,0.25) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} relative z-10 mx-auto max-w-4xl text-center`}>
        {/* 标签 */}
        <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#e63946]">EPILOGUE</p>

        {/* 标题 */}
        <h2 className="font-serif text-4xl font-bold text-[#f1faee] sm:text-5xl">
          尾声：火焰导流槽
        </h2>

        {/* 火焰图标 */}
        <div className="my-10 flex justify-center">
          <Flame className="h-10 w-10 text-[#e63946] animate-pulse" />
        </div>

        {/* 作者总结引文 */}
        {summaryQuote && (
          <blockquote
            className="animate-fade-in-up mx-auto max-w-3xl opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="font-serif text-lg leading-loose text-[#f1faee]/85 sm:text-xl md:text-2xl">
              {summaryQuote.quote}
            </p>
            <footer className="mt-4 font-sans text-sm text-[#e63946]/80">
              —— {summaryQuote.speaker}
            </footer>
          </blockquote>
        )}

        {/* 分隔 */}
        <div className="mx-auto my-12 h-px w-32 bg-gradient-to-r from-transparent via-[#e63946]/60 to-transparent" />

        {/* 终极追问 */}
        {finalQuestion && (
          <blockquote
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            <p className="font-serif text-2xl font-bold leading-relaxed text-gradient-mars sm:text-3xl md:text-4xl">
              {finalQuestion.quote}
            </p>
            <footer className="mt-4 font-sans text-sm text-[#f1faee]/50">
              —— {finalQuestion.speaker}
            </footer>
          </blockquote>
        )}

        {/* 书籍信息 */}
        <div className="animate-fade-in mt-20 opacity-0" style={{ animationDelay: '1.4s' }}>
          <div className="mx-auto h-px w-16 bg-white/10" />
          <dl className="mt-6 space-y-1 font-sans text-xs text-[#f1faee]/40">
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
          <p className="mt-8 font-serif text-sm text-[#f1faee]/30">
            —— 完 ——
          </p>

          {/* 版权声明 */}
          <div className="mx-auto mt-10 max-w-md rounded-lg border border-[#e63946]/20 bg-[#e63946]/5 px-5 py-4">
            <p className="font-sans text-xs leading-relaxed text-[#f1faee]/50">
              本页内容基于《埃隆·马斯克传》原书进行结构化整理与可视化展示，仅用于学习交流与阅读体验探索，
              不用于商业用途。原书版权归原作者及出版社所有。
            </p>
            <p className="mt-2 font-sans text-xs leading-relaxed text-[#e63946]/70">
              建议购买正版书籍，支持原作者与出版社，完整阅读原著更能感受马斯克人生的细节与张力。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

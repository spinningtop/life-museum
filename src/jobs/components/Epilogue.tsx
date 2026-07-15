import { Apple } from 'lucide-react';
import { quotes } from '@/jobs/data/quotes';
import { useScrollReveal } from '@/jobs/hooks/useScrollReveal';

/**
 * 尾声：苹果的遗产
 * 全屏暗色沉浸式结语，展示乔布斯最后的反思与终极追问
 */
export default function Epilogue() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  // 取 id=11（乔布斯遗产自述）与 id=12（临终前对死亡的沉思）
  const summaryQuote = quotes.find((q) => q.id === 11);
  const finalQuestion = quotes.find((q) => q.id === 12);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      {/* 底部银色光晕 */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(192,192,192,0.25) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} relative z-10 mx-auto max-w-4xl text-center`}>
        {/* 标签 */}
        <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#C0C0C0] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">EPILOGUE</p>

        {/* 标题 */}
        <h2 className="font-serif text-3xl font-bold text-[#E5E7EB] sm:text-4xl md:text-5xl">
          尾声：苹果的遗产
        </h2>

        {/* 苹果图标 */}
        <div className="my-8 flex justify-center sm:my-10">
          <Apple className="h-8 w-8 text-[#C0C0C0] animate-pulse sm:h-10 sm:w-10" />
        </div>

        {/* 乔布斯遗产自述 */}
        {summaryQuote && (
          <blockquote
            className="animate-fade-in-up mx-auto max-w-3xl opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="font-serif text-base leading-loose text-[#E5E7EB]/85 sm:text-lg md:text-xl lg:text-2xl">
              {summaryQuote.text}
            </p>
            <footer className="mt-3 font-sans text-xs text-[#C0C0C0]/80 sm:mt-4 sm:text-sm">
              —— {summaryQuote.speaker}
            </footer>
          </blockquote>
        )}

        {/* 分隔 */}
        <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-[#C0C0C0]/60 to-transparent sm:my-12 sm:w-32" />

        {/* 终极追问 */}
        {finalQuestion && (
          <blockquote
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            <p className="font-serif text-xl font-bold leading-relaxed text-gradient-silver sm:text-2xl md:text-3xl lg:text-4xl">
              {finalQuestion.text}
            </p>
            <footer className="mt-3 font-sans text-xs text-[#E5E7EB]/50 sm:mt-4 sm:text-sm">
              —— {finalQuestion.speaker}
            </footer>
          </blockquote>
        )}

        {/* 书籍信息 */}
        <div className="animate-fade-in mt-16 opacity-0 sm:mt-20" style={{ animationDelay: '1.4s' }}>
          <div className="mx-auto h-px w-12 bg-white/10 sm:w-16" />
          <dl className="mt-4 space-y-1 font-sans text-[10px] text-[#E5E7EB]/40 sm:mt-6 sm:text-xs">
            <div>
              <dt className="inline">作者：</dt>
              <dd className="inline text-[#E5E7EB]/70">沃尔特·艾萨克森</dd>
            </div>
            <div>
              <dt className="inline">出版社：</dt>
              <dd className="inline text-[#E5E7EB]/70">中信出版社</dd>
            </div>
            <div>
              <dt className="inline">出版时间：</dt>
              <dd className="inline text-[#E5E7EB]/70">2011年</dd>
            </div>
          </dl>
          <p className="mt-6 font-serif text-xs text-[#E5E7EB]/30 sm:mt-8 sm:text-sm">
            —— 完 ——
          </p>

          {/* 版权声明 */}
          <div className="mx-auto mt-8 max-w-md rounded-lg border border-[#C0C0C0]/20 bg-[#C0C0C0]/5 px-4 py-3 sm:mt-10 sm:px-5 sm:py-4">
            <p className="font-sans text-[10px] leading-relaxed text-[#E5E7EB]/50 sm:text-xs">
              本页内容基于《史蒂夫·乔布斯传》原书进行结构化整理与可视化展示，仅用于学习交流与阅读体验探索，不用于商业用途。原书版权归原作者及出版社所有。
            </p>
            <p className="mt-2 font-sans text-[10px] leading-relaxed text-[#C0C0C0]/70 sm:text-xs">
              建议购买正版书籍，支持原作者与出版社，完整阅读原著更能感受乔布斯人生的极致与张力。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Scroll } from 'lucide-react';
import { quotes } from '@/zeng/data/quotes';
import { useScrollReveal } from '@/zeng/hooks/useScrollReveal';

/**
 * 尾声：中兴名臣的遗产
 * 全屏暗色沉浸式结语，展示曾国藩最后的反思与终极追问
 */
export default function Epilogue() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  // 取末尾两条金句作为遗产自述与终极追问（兜底取首条）
  const summaryQuote = quotes[quotes.length - 1] ?? quotes[0];
  const finalQuestion = quotes[quotes.length - 2] ?? quotes[0];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* 底部青金光晕 */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(212,175,55,0.25) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} relative z-10 mx-auto max-w-4xl text-center`}>
        {/* 标签 */}
        <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4AF37]">EPILOGUE</p>

        {/* 标题 */}
        <h2 className="font-serif text-3xl font-bold text-[#F5E6CA] sm:text-4xl md:text-5xl">
          尾声：中兴名臣的遗产
        </h2>

        {/* 卷轴图标 */}
        <div className="my-8 flex justify-center sm:my-10">
          <Scroll className="h-8 w-8 text-[#D4AF37] animate-pulse sm:h-10 sm:w-10" />
        </div>

        {/* 曾国藩遗产自述 */}
        {summaryQuote && (
          <blockquote
            className="animate-fade-in-up mx-auto max-w-3xl opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="font-serif text-base leading-loose text-[#F5E6CA]/85 sm:text-lg md:text-xl lg:text-2xl">
              {summaryQuote.text}
            </p>
            <footer className="mt-3 font-sans text-xs text-[#D4AF37]/80 sm:mt-4 sm:text-sm">
              —— {summaryQuote.speaker}
            </footer>
          </blockquote>
        )}

        {/* 分隔 */}
        <div className="mx-auto my-10 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent sm:my-12 sm:w-32" />

        {/* 终极追问 */}
        {finalQuestion && (
          <blockquote
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            <p
              className="font-serif text-xl font-bold leading-relaxed sm:text-2xl md:text-3xl lg:text-4xl"
              style={{
                background: 'linear-gradient(135deg, #F5E6CA 0%, #D4AF37 50%, #4A6FA5 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              {finalQuestion.text}
            </p>
            <footer className="mt-3 font-sans text-xs text-[#F5E6CA]/50 sm:mt-4 sm:text-sm">
              —— {finalQuestion.speaker}
            </footer>
          </blockquote>
        )}

        {/* 书籍信息 */}
        <div className="animate-fade-in mt-20 opacity-0" style={{ animationDelay: '1.4s' }}>
          <div className="mx-auto h-px w-16 bg-white/10" />
          <dl className="mt-6 space-y-1 font-sans text-xs text-[#F5E6CA]/40">
            <div>
              <dt className="inline">作者：</dt>
              <dd className="inline text-[#F5E6CA]/70">张宏杰</dd>
            </div>
            <div>
              <dt className="inline">出版社：</dt>
              <dd className="inline text-[#F5E6CA]/70">民主与建设出版社</dd>
            </div>
          </dl>
          <p className="mt-8 font-serif text-sm text-[#F5E6CA]/30">
            —— 完 ——
          </p>

          {/* 版权声明 */}
          <div className="mx-auto mt-10 max-w-md rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-4">
            <p className="font-sans text-xs leading-relaxed text-[#F5E6CA]/50">
              本页内容基于《曾国藩传》原书进行结构化整理与可视化展示，仅用于学习交流与阅读体验探索，不用于商业用途。原书版权归原作者及出版社所有。
            </p>
            <p className="mt-2 font-sans text-xs leading-relaxed text-[#D4AF37]/70">
              建议购买正版书籍，支持原作者与出版社，完整阅读原著更能感受曾国藩人生的极致与张力。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

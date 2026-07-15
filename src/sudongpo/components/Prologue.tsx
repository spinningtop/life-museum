import { Quote as QuoteIcon } from 'lucide-react';
import { quotes } from '@/sudongpo/data/quotes';
import { useScrollReveal } from '@/sudongpo/hooks/useScrollReveal';

// 左侧叙事段落（导读模式：作者其人 → 传主其人 → 为何值得一读）
const narratives = [
  {
    title: '林语堂的跨文化视角',
    text: '林语堂是享誉世界的作家、学者，以英文向西方介绍中国文化的先行者。他用英文撰写《The Gay Genius》（快乐的天才），将苏东坡这一中国文化史上最富魅力的灵魂介绍给全世界。林语堂笔下的苏东坡不是冰冷的史料堆砌，而是一个有血有肉、会笑会怒、热爱美食与自然的鲜活之人。',
  },
  {
    title: '苏东坡的多重身份',
    text: '他是金榜题名的少年才子、是乌台狱中的待死之囚、是黄州东坡上的躬耕农夫、是赤壁月夜的泛舟诗人、是天涯海角的流放者、也是杭州西湖边的良吏。诗、词、文、书、画五绝天下——苏轼不仅是文学巨匠，更是一种人生态度的化身：在命运的惊涛骇浪中，始终保持灵魂的从容与丰盈。',
  },
  {
    title: '为何值得一读',
    text: '这不仅是一部传记，更是一部关于"如何在逆境中活出诗意"的人生教科书。林语堂没有把苏东坡写成完人，而是呈现了一个在党争夹缝中坚持独立、在贬谪绝境中依然旷达的真实灵魂。读完此书，你将理解：为何千年之后，苏东坡仍是中国人心中最亲切的文人——因为他教会我们，如何在"一蓑烟雨"中，过好"任平生"的一生。',
  },
];

/**
 * 序章：导读
 * 左右分栏：左侧导读文本，右侧名句卡片
 */
export default function Prologue() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  // 取三句代表性金句 id=4,9,13
  const prologueQuotes = quotes.filter((q) => [4, 9, 13].includes(q.id));

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#c73e3a]">GUIDE</p>
          <h2 className="font-serif text-4xl font-bold text-[#f5e6d3] sm:text-5xl">
            导读：苏东坡其人
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#c73e3a] to-transparent" />
        </div>

        {/* 左右分栏 */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* 左侧叙事 */}
          <div className="space-y-10">
            {narratives.map((item, idx) => (
              <div
                key={item.title}
                className="glass-card p-7 transition-all duration-700 hover:border-[#c73e3a]/30"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${idx * 200}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <h3 className="mb-3 flex items-center gap-2 font-serif text-xl font-semibold text-[#c73e3a]">
                  <span className="h-4 w-1 rounded-full bg-[#c73e3a]" />
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-loose text-[#f5e6d3]/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* 右侧引用卡片 */}
          <div className="space-y-6">
            {prologueQuotes.map((quote, idx) => (
              <figure
                key={quote.id}
                className="glass-card-strong group relative overflow-hidden p-7 transition-all duration-500 hover:glow-vermilion"
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                <QuoteIcon className="mb-3 h-6 w-6 text-[#c73e3a]/50 transition-colors group-hover:text-[#c73e3a]" />
                <blockquote className="font-serif text-base leading-relaxed text-[#f5e6d3]/90">
                  {quote.text}
                </blockquote>
                <figcaption className="mt-4 border-l-2 border-[#c73e3a]/40 pl-3 font-sans text-xs text-[#e9c46a]/60">
                  <span className="font-semibold text-[#c73e3a]">《{quote.source}》</span>
                  <span className="mx-2 text-[#f5e6d3]/30">·</span>
                  {quote.year}年
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

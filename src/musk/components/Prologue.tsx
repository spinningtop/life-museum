import { Quote as QuoteIcon } from 'lucide-react';
import { quotes } from '@/musk/data/quotes';
import { useScrollReveal } from '@/musk/hooks/useScrollReveal';

// 左侧叙事段落（导读模式：作者其人 → 传主其人 → 为何值得一读）
const narratives = [
  {
    title: '艾萨克森的贴身观察',
    text: '沃尔特·艾萨克森曾为乔布斯、富兰克林、达·芬奇作传。这一次，他用两年时间贴身跟踪马斯克：参加他的会议，走访他的工厂，旁听他的电话，跟随他乘坐私人飞机。艾萨克森看到了一个在"恶魔模式"与"灵感迸发"之间剧烈切换的天才——这不是一个经过修饰的偶像，而是一个带着创伤、偏执、戏剧性却真切改变世界的人。',
  },
  {
    title: '马斯克的多重身份',
    text: '他是Zip2的程序员、PayPal的革命者、SpaceX的火箭狂人、Tesla的电动先锋、Neuralink的脑机梦想家、Boring Company的地下挖掘者、Twitter/X的颠覆者。他把人类对未来的想象从一个产业推向另一个产业——从支付到太空，从能源到AI，从汽车到社交。埃隆·马斯克是这个时代最激进也最具争议的创新者，一个以一己之力推动多个产业跃迁的人。',
  },
  {
    title: '为何值得一读',
    text: '这不仅是一部商业巨头的传记，更是一部关于"冒险基因"与"恶魔模式"如何共存的心理学档案。艾萨克森没有把马斯克写成英雄，也没有把他写成恶人，而是呈现了一个完整的、矛盾的、有时令人不安的真实人物。读完此书，你将理解：一个懂得节制谨慎的马斯克，是否还能像自由不羁的马斯克一样成就斐然？',
  },
];

/**
 * 序章：导读
 * 左右分栏：左侧导读文本，右侧作者艾萨克森评论卡片
 */
export default function Prologue() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  // 取作者评论与题记金句 id=1,26,30
  const prologueQuotes = quotes.filter((q) => [1, 26, 30].includes(q.id));

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#e63946] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">GUIDE</p>
          <h2 className="font-serif text-3xl font-bold text-[#f1faee] sm:text-4xl md:text-5xl">
            导读：马斯克其人
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#e63946] to-transparent sm:mt-6 sm:w-24" />
        </div>

        {/* 左右分栏 */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* 左侧叙事 */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {narratives.map((item, idx) => (
              <div
                key={item.title}
                className="glass-card p-5 transition-all duration-700 hover:border-[#e63946]/30 sm:p-6 md:p-7"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${idx * 200}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <h3 className="mb-2 flex items-center gap-2 font-serif text-lg font-semibold text-[#e63946] sm:mb-3 sm:text-xl">
                  <span className="h-4 w-1 rounded-full bg-[#e63946]" />
                  {item.title}
                </h3>
                <p className="font-sans text-xs leading-loose text-[#f1faee]/70 sm:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* 右侧引用卡片 */}
          <div className="space-y-4 sm:space-y-6">
            {prologueQuotes.map((quote, idx) => (
              <figure
                key={quote.id}
                className="glass-card-strong group relative overflow-hidden p-5 transition-all duration-500 hover:glow-red sm:p-6 md:p-7"
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                <QuoteIcon className="mb-2 h-5 w-5 text-[#e63946]/50 transition-colors group-hover:text-[#e63946] sm:mb-3 sm:h-6 sm:w-6" />
                <blockquote className="font-serif text-sm leading-relaxed text-[#f1faee]/90 sm:text-base">
                  {quote.quote}
                </blockquote>
                <figcaption className="mt-3 border-l-2 border-[#e63946]/40 pl-3 font-sans text-[10px] text-[#a8dadc]/60 sm:mt-4 sm:text-xs">
                  <span className="font-semibold text-[#e63946]">{quote.speaker}</span>
                  <span className="mx-2 text-[#f1faee]/30">·</span>
                  {quote.context}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

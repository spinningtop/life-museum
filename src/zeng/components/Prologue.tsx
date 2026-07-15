import { Quote as QuoteIcon } from 'lucide-react';
import { quotes } from '@/zeng/data/quotes';
import { useScrollReveal } from '@/zeng/hooks/useScrollReveal';

// 左侧叙事段落（导读模式：作者其人 → 传主其人 → 为何值得一读）
const narratives = [
  {
    title: '张宏杰的史学之眼',
    text: '张宏杰以写历史人物见长，曾为朱元璋、乾隆、李鸿章等人作传。他擅长在浩繁史料中勾勒人物的立体轮廓，不溢美、不掩恶，把曾国藩从神坛与骂名之间还原成一个有血有肉的人。他笔下的曾国藩，既有理学家的克制，也有凡人的犹疑、暴躁与权衡，让读者看见一个"拙诚"之人是如何在乱世中一寸寸锤炼出来的。',
  },
  {
    title: '曾国藩的多重身份',
    text: '他是湖南湘乡的农家子弟，是七次科考才中秀才的钝根书生，是京城十年连升七级的翰林清流，是墨绖从戎、组建湘军的书生将军，是攻破天京、平定太平天国的中兴第一功臣，也是开启洋务自强、派遣幼童留美的推手，更是留下千余封家书、以"耕读传家"立训的父亲与长者。曾国藩的一生，是一部传统士人在三千年未有之变局中求存、求治、求道的缩影。',
  },
  {
    title: '为何值得一读',
    text: '这不仅是一部晚清名臣的传记，更是一部关于"拙"与"恒"如何胜过"巧"与"快"的修身之书。张宏杰没有把曾国藩写成天生的圣人，而是呈现了一个资质平庸、屡战屡败、几度欲自尽的人，如何靠着结硬寨、打呆仗，靠着日课不断、痛自刻责，最终成就立德立功立言的"三不朽"。读完此书，你将理解：一个普通人是怎样以极致的自律与韧性，在时代的洪流里逆流而上。',
  },
];

/**
 * 序章：导读
 * 左右分栏：左侧导读文本，右侧金句卡片
 */
export default function Prologue() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  // 取金句卡片（取首、中、末各一条，保证有内容）
  const prologueQuotes =
    quotes.length >= 3
      ? [quotes[0], quotes[Math.floor(quotes.length / 2)], quotes[quotes.length - 1]]
      : quotes.slice(0, 3);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#D4AF37]">GUIDE</p>
          <h2 className="font-serif text-3xl font-bold text-[#F5E6CA] sm:text-4xl md:text-5xl">
            导读：曾国藩其人
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent sm:mt-6" />
        </div>

        {/* 左右分栏 */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* 左侧叙事 */}
          <div className="space-y-6 sm:space-y-10">
            {narratives.map((item, idx) => (
              <div
                key={item.title}
                className="glass-card p-5 transition-all duration-700 hover:border-[#D4AF37]/30 sm:p-7"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${idx * 200}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <h3 className="mb-2 flex items-center gap-2 font-serif text-lg font-semibold text-[#D4AF37] sm:mb-3 sm:text-xl">
                  <span className="h-4 w-1 rounded-full bg-[#D4AF37]" />
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-loose text-[#F5E6CA]/70">
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
                className="glass-card-strong group relative overflow-hidden p-5 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.25),0_0_40px_rgba(212,175,55,0.1)] sm:p-7"
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                <QuoteIcon className="mb-2 h-5 w-5 text-[#D4AF37]/50 transition-colors group-hover:text-[#D4AF37] sm:mb-3 sm:h-6 sm:w-6" />
                <blockquote className="font-serif text-base leading-relaxed text-[#F5E6CA]/90">
                  {quote.text}
                </blockquote>
                <figcaption className="mt-3 border-l-2 border-[#D4AF37]/40 pl-3 font-sans text-xs text-[#4A6FA5]/80 sm:mt-4">
                  <span className="font-semibold text-[#D4AF37]">{quote.speaker}</span>
                  <span className="mx-2 text-[#F5E6CA]/30">·</span>
                  {quote.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

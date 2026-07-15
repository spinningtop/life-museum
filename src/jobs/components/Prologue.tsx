import { Quote as QuoteIcon } from 'lucide-react';
import { quotes } from '@/jobs/data/quotes';
import { useScrollReveal } from '@/jobs/hooks/useScrollReveal';

// 左侧叙事段落（导读模式：作者其人 → 传主其人 → 为何值得一读）
const narratives = [
  {
    title: '艾萨克森的贴身记录',
    text: '沃尔特·艾萨克森曾为富兰克林、爱因斯坦、达·芬奇作传。这一次，在乔布斯生命的最后两年里，他进行了四十多次面对面的访谈——走访苹果、皮克斯，旁听他的会议，与他的亲友、对手、同事深度对话。艾萨克森没有把乔布斯写成圣人，而是呈现了一个完整的、矛盾的、带着创伤与天才的真实人物。',
  },
  {
    title: '乔布斯的多重身份',
    text: '他是被领养的婴儿、是蓝盒子的制造者、是Apple与Mac的缔造者、是NeXT的孤勇者、是皮克斯的远见者、是iPod与iPhone的发明家。他把人类对数字体验的想象从一个产业推向另一个产业——从个人电脑到动画电影，从音乐到手机，从平板到云端。史蒂夫·乔布斯是这个时代最极致也最具争议的产品艺术家。',
  },
  {
    title: '为何值得一读',
    text: '这不仅是一部商业巨头的传记，更是一部关于"完美主义"与"现实扭曲力场"如何共存的心理学档案。艾萨克森没有把乔布斯写成英雄，也没有把他写成恶人，而是呈现了一个被遗弃又渴望被选择、偏执又极简、伤人又感人的真实人物。读完此书，你将理解：一个改变了六大产业的天才，其内心深处究竟是怎样的图景。',
  },
];

/**
 * 序章：导读
 * 左右分栏：左侧导读文本，右侧作者艾萨克森评论卡片
 */
export default function Prologue() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  // 取作者评论与题记金句 id=13,18,11
  const prologueQuotes = quotes.filter((q) => [13, 18, 11].includes(q.id));

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-2 font-sans text-xs tracking-[0.25em] text-[#C0C0C0] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">GUIDE</p>
          <h2 className="font-serif text-3xl font-bold text-[#E5E7EB] sm:text-4xl md:text-5xl">
            导读：乔布斯其人
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent sm:mt-6 sm:w-24" />
        </div>

        {/* 左右分栏 */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* 左侧叙事 */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {narratives.map((item, idx) => (
              <div
                key={item.title}
                className="glass-card p-5 transition-all duration-700 hover:border-[#C0C0C0]/30 sm:p-6 md:p-7"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${idx * 200}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <h3 className="mb-2 flex items-center gap-2 font-serif text-lg font-semibold text-[#C0C0C0] sm:mb-3 sm:text-xl">
                  <span className="h-4 w-1 rounded-full bg-[#C0C0C0]" />
                  {item.title}
                </h3>
                <p className="font-sans text-xs leading-loose text-[#E5E7EB]/70 sm:text-sm">
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
                className="glass-card-strong group relative overflow-hidden p-5 transition-all duration-500 hover:glow-silver sm:p-6 md:p-7"
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                <QuoteIcon className="mb-2 h-5 w-5 text-[#C0C0C0]/50 transition-colors group-hover:text-[#C0C0C0] sm:mb-3 sm:h-6 sm:w-6" />
                <blockquote className="font-serif text-sm leading-relaxed text-[#E5E7EB]/90 sm:text-base">
                  {quote.text}
                </blockquote>
                <figcaption className="mt-3 border-l-2 border-[#C0C0C0]/40 pl-3 font-sans text-[10px] text-[#60A5FA]/70 sm:mt-4 sm:text-xs">
                  <span className="font-semibold text-[#C0C0C0]">{quote.speaker}</span>
                  <span className="mx-2 text-[#E5E7EB]/30">·</span>
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

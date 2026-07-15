import { Compass, Map, Sparkles, Waypoints } from 'lucide-react';
import { useScrollReveal } from '@/museum/hooks/useScrollReveal';

const PRINCIPLES = [
  {
    icon: Compass,
    title: '可漫游',
    desc: '不再是一行行文字，而是可滚动、可点击、可驻足的展厅。你像走进一座博物馆那样走进一段人生。',
  },
  {
    icon: Map,
    title: '可定位',
    desc: '每一段经历都被钉在地图与时间轴上。地理与年代，是理解一个人最坚实的坐标。',
  },
  {
    icon: Waypoints,
    title: '可分叉',
    desc: '在每个命运的岔路口停下，推演"如果当时"。历史不可假设，但想象让它更清晰。',
  },
  {
    icon: Sparkles,
    title: '可对照',
    desc: '跨越九百年的两个人，在同一片星空下被并置。冒险家与文人，原来共享同一种孤独。',
  },
];

/**
 * 理念阐述区
 * 说明"把一本人物传记变成一座可漫游的博物馆"
 */
export default function Philosophy() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 鎏金分割线 */}
        <hr className="gold-divider mb-20" />

        {/* 主理陈述 */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 font-sans text-sm tracking-[0.3em] text-[#D4A24C]">
            PHILOSOPHY
          </p>
          <h2 className="font-serif text-3xl font-bold leading-relaxed text-[#F5F1E8] sm:text-4xl">
            把一本人物传记，
            <br />
            变成一座<span className="text-gold-gradient">可漫游的博物馆</span>。
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-[#F5F1E8]/60">
            我们相信，一个人的一生不该被压缩成一份年表或一段摘要。
            它有空间、有时间、有岔路、有回声。
            在这里，传记被拆解为可漫步的展厅——
            你可以沿着时间走，可以盯着地图看，也可以在某个"如果"前久久停留。
          </p>
        </div>

        {/* 四个理念卡片 */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="glass-card group p-6 text-center transition-all duration-500 hover:translate-y-[-3px]"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4A24C]/30 bg-[#D4A24C]/10">
                <p.icon className="h-5 w-5 text-[#D4A24C]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#F5F1E8]">
                {p.title}
              </h3>
              <p className="mt-2 font-sans text-xs leading-relaxed text-[#F5F1E8]/60">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

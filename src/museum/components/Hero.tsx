import { ChevronDown, Sparkles } from 'lucide-react';

// 装饰星点位置（相对百分比），使用全局 twinkle 关键帧
const STARS = [
  { top: '12%', left: '10%', size: 2, delay: '0s', duration: '3.2s' },
  { top: '18%', left: '82%', size: 1.5, delay: '0.6s', duration: '2.8s' },
  { top: '28%', left: '20%', size: 1, delay: '1.2s', duration: '4s' },
  { top: '32%', left: '70%', size: 2, delay: '0.3s', duration: '3.5s' },
  { top: '62%', left: '8%', size: 1.5, delay: '0.9s', duration: '3s' },
  { top: '70%', left: '88%', size: 1, delay: '1.5s', duration: '2.6s' },
  { top: '78%', left: '30%', size: 1.5, delay: '0.4s', duration: '3.8s' },
  { top: '85%', left: '65%', size: 2, delay: '1.1s', duration: '3.4s' },
];

/**
 * 平台首页 Hero 区
 * 深空背景 + 中心标题"人生博物馆"
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* 深空径向光晕 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 38%, rgba(80,96,160,0.28) 0%, rgba(212,162,76,0.06) 40%, rgba(11,15,26,0) 70%)',
        }}
      />

      {/* 闪烁星点 */}
      {STARS.map((s, i) => (
        <span
          key={i}
          className="pointer-events-none absolute rounded-full bg-[#F5F1E8]"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}

      {/* 顶部小标签 */}
      <div
        className="animate-fade-in mb-8 flex items-center gap-3 opacity-0"
        style={{ animationDelay: '0.2s' }}
      >
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4A24C]" />
        <span className="font-sans text-sm tracking-[0.3em] text-[#D4A24C]">
          A MUSEUM OF LIVES
        </span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4A24C]" />
      </div>

      {/* 主标题 */}
      <h1
        className="animate-fade-in-up font-serif text-6xl font-black leading-tight opacity-0 sm:text-7xl md:text-8xl"
        style={{ animationDelay: '0.4s' }}
      >
        <span className="text-gold-gradient">人生博物馆</span>
      </h1>

      {/* 英文副标题 */}
      <p
        className="animate-fade-in-up mt-6 font-serif text-lg tracking-[0.2em] text-[#F5F1E8]/70 opacity-0 sm:text-xl md:text-2xl"
        style={{ animationDelay: '0.7s' }}
      >
        Museum of Lives
      </p>

      {/* 分隔线 */}
      <div
        className="animate-fade-in mt-10 h-px w-32 bg-gradient-to-r from-transparent via-[#D4A24C] to-transparent opacity-0"
        style={{ animationDelay: '1s' }}
      />

      {/* 描述文字 */}
      <p
        className="animate-fade-in-up mt-10 max-w-2xl font-sans text-base leading-relaxed text-[#F5F1E8]/65 opacity-0 sm:text-lg"
        style={{ animationDelay: '1.2s' }}
      >
        把一本人物传记变成一座可漫游的博物馆。
        <br className="hidden sm:block" />
        在深空之下，每一颗星都是一个人生；每一段命运，都可被反复走进。
      </p>

      {/* 馆藏提示 */}
      <div
        className="animate-fade-in-up mt-8 flex items-center gap-2 opacity-0"
        style={{ animationDelay: '1.4s' }}
      >
        <Sparkles className="h-4 w-4 text-[#D4A24C]" />
        <span className="font-sans text-sm text-[#F5F1E8]/50">
          现已收录 2 段人生 · 跨越九百余年
        </span>
      </div>

      {/* 底部滚动提示 */}
      <div
        className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animationDelay: '1.8s' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-xs tracking-[0.2em] text-[#F5F1E8]/40">
            向下漫游
          </span>
          <ChevronDown className="animate-bounce-arrow h-6 w-6 text-[#D4A24C]" />
        </div>
      </div>
    </section>
  );
}

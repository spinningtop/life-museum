import { ChevronDown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { biographies } from '@/museum/data/biographies';

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
  const navigate = useNavigate();

  const handleRandomExplore = () => {
    const randomIndex = Math.floor(Math.random() * biographies.length);
    const randomBio = biographies[randomIndex];
    navigate(randomBio.bioUrl);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6">
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
        className="animate-fade-in mb-6 flex items-center gap-2 opacity-0 sm:mb-8 sm:gap-3"
        style={{ animationDelay: '0.2s' }}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4A24C] sm:w-12" />
        <span className="font-sans text-xs tracking-[0.2em] text-[#D4A24C] sm:text-sm sm:tracking-[0.3em]">
          A MUSEUM OF LIVES
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4A24C] sm:w-12" />
      </div>

      {/* 主标题 */}
      <h1
        className="animate-fade-in-up font-serif text-4xl font-black leading-tight opacity-0 sm:text-5xl md:text-7xl lg:text-8xl"
        style={{ animationDelay: '0.4s' }}
      >
        <span className="text-gold-gradient">人生博物馆</span>
      </h1>

      {/* 英文副标题 */}
      <p
        className="animate-fade-in-up mt-4 font-serif text-base tracking-[0.15em] text-[#F5F1E8]/70 opacity-0 sm:mt-6 sm:text-lg sm:tracking-[0.2em] md:text-2xl"
        style={{ animationDelay: '0.7s' }}
      >
        Museum of Lives
      </p>

      {/* 分隔线 */}
      <div
        className="animate-fade-in mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#D4A24C] to-transparent opacity-0 sm:mt-10 sm:w-32"
        style={{ animationDelay: '1s' }}
      />

      {/* 价值主张 */}
      <p
        className="animate-fade-in-up mt-4 font-serif text-base tracking-[0.2em] text-[#D4A24C]/80 opacity-0 sm:mt-6 sm:text-lg sm:tracking-[0.3em]"
        style={{ animationDelay: '1.1s' }}
      >
        不止于读
      </p>

      {/* 三维价值 */}
      <div
        className="animate-fade-in-up mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 opacity-0 sm:mt-6 sm:gap-x-6 sm:gap-y-2"
        style={{ animationDelay: '1.3s' }}
      >
        <span className="font-sans text-xs text-[#F5F1E8]/70 sm:text-sm">
          可触摸
        </span>
        <span className="text-[#D4A24C]/40">·</span>
        <span className="font-sans text-xs text-[#F5F1E8]/70 sm:text-sm">
          可分叉
        </span>
        <span className="text-[#D4A24C]/40">·</span>
        <span className="font-sans text-xs text-[#F5F1E8]/70 sm:text-sm">
          可对照
        </span>
      </div>

      {/* 描述文字 */}
      <p
        className="animate-fade-in-up mt-6 max-w-md font-sans text-xs leading-relaxed text-[#F5F1E8]/50 opacity-0 sm:mt-10 sm:max-w-2xl sm:text-sm md:text-base"
        style={{ animationDelay: '1.5s' }}
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
          现已收录 {biographies.length} 段人生 · 跨越九百余年
        </span>
      </div>

      {/* 按钮组 */}
      <div
        className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-4 opacity-0"
        style={{ animationDelay: '1.6s' }}
      >
        <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#D4A24C] to-[#F5D68A] px-8 py-3 font-sans text-sm font-medium tracking-[0.2em] text-[#0B0F1A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,162,76,0.4)]">
          <span className="relative z-10">开始探索</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </button>

        <button
          onClick={handleRandomExplore}
          className="group flex items-center gap-2 rounded-full border border-[#D4A24C]/60 bg-[#D4A24C]/10 px-6 py-3 font-sans text-sm font-medium tracking-[0.15em] text-[#D4A24C] backdrop-blur-sm transition-all duration-300 hover:bg-[#D4A24C]/25 hover:shadow-[0_0_20px_rgba(212,162,76,0.2)]"
        >
          随机探索
          <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </button>
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

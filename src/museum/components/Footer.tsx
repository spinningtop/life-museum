import { useScrollReveal } from '@/museum/hooks/useScrollReveal';

/**
 * 页脚
 */
export default function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <footer className="relative px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-8">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-5xl">
          {/* 馆名 */}
          <div className="mb-5 text-center sm:mb-6">
            <p className="font-serif text-lg font-bold text-gold-gradient sm:text-xl">
              人生博物馆
            </p>
            <p className="mt-1 font-sans text-[11px] tracking-[0.15em] text-[#F5F1E8]/40 sm:text-xs sm:tracking-[0.2em]">
              MUSEUM OF LIVES
            </p>
          </div>

          {/* 题记 */}
          <p className="mx-auto mb-6 max-w-xl text-center font-serif text-sm italic leading-relaxed text-[#F5F1E8]/45 sm:mb-8">
            「每一颗星都是一个人生，每一段命运都可被反复走进。」
          </p>

          {/* 分隔线 */}
          <hr className="gold-divider mb-5 sm:mb-6" />

          {/* 版权信息 */}
          <div className="flex flex-col items-center justify-between gap-2 text-center font-sans text-[11px] text-[#F5F1E8]/35 sm:gap-3 sm:text-xs sm:flex-row sm:text-left">
            <span>把一本人物传记变成一座可漫游的博物馆</span>
            <span>© {new Date().getFullYear()} Museum of Lives</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

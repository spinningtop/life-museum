import { useScrollReveal } from '@/museum/hooks/useScrollReveal';

/**
 * 页脚
 */
export default function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <footer className="relative px-6 pb-12 pt-8">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-5xl">
          {/* 馆名 */}
          <div className="mb-6 text-center">
            <p className="font-serif text-xl font-bold text-gold-gradient">
              人生博物馆
            </p>
            <p className="mt-1 font-sans text-xs tracking-[0.2em] text-[#F5F1E8]/40">
              MUSEUM OF LIVES
            </p>
          </div>

          {/* 题记 */}
          <p className="mx-auto mb-8 max-w-xl text-center font-serif text-sm italic leading-relaxed text-[#F5F1E8]/45">
            「每一颗星都是一个人生，每一段命运都可被反复走进。」
          </p>

          {/* 分隔线 */}
          <hr className="gold-divider mb-6" />

          {/* 版权信息 */}
          <div className="flex flex-col items-center justify-between gap-3 font-sans text-xs text-[#F5F1E8]/35 sm:flex-row">
            <span>把一本人物传记变成一座可漫游的博物馆</span>
            <span>© {new Date().getFullYear()} Museum of Lives</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

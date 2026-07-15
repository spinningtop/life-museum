import { useEffect, useState } from 'react';

/**
 * 顶部滚动进度条
 * 银色渐变，随页面滚动展示阅读进度
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(Math.min(Math.max(ratio, 0), 1));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-[3px] w-full">
      {/* 背景轨道 */}
      <div className="absolute inset-0 bg-white/5" />
      {/* 进度填充：银色渐变 */}
      <div
        className="h-full transition-[width] duration-100 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, #6b7280 0%, #C0C0C0 50%, #E5E7EB 100%)',
          boxShadow: '0 0 10px rgba(192, 192, 192, 0.6)',
        }}
      />
    </div>
  );
}

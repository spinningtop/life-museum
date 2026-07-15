import { useEffect, useRef, useState } from 'react';

/**
 * 滚动触发动画 Hook
 * 使用 Intersection Observer 监听元素是否进入视口
 * 兜底：IO 未触发时通过 scroll 事件检查元素位置，确保内容可见
 * @param options 观察选项
 * @returns ref 绑定到目标元素，isVisible 元素是否可见
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
  } = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -5% 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // 不支持 IntersectionObserver 时直接显示
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const markVisible = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      setIsVisible(true);
    };

    const checkVisibility = () => {
      if (triggeredRef.current) return;
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // 元素顶部进入视口 10% 即视为可见
      if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
        markVisible();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markVisible();
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    // 兜底：初始检查 + 滚动检查，防止 IO 延迟/失效导致空白
    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    // 延迟二次检查，处理布局完成后元素位置变化的情况
    const timers = [
      setTimeout(checkVisibility, 100),
      setTimeout(checkVisibility, 500),
      setTimeout(checkVisibility, 1000),
    ];

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      timers.forEach(clearTimeout);
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

import { useEffect, useRef } from 'react';

// 星星粒子定义
interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
  color: string;
}

const STAR_COUNT = 100;
// 星星颜色：白色为主，少量蓝、红点缀，模拟深空
const STAR_COLORS = ['#f1faee', '#f1faee', '#f1faee', '#a8dadc', '#4cc9f0', '#e63946'];

/**
 * 星空粒子背景
 * Canvas 全屏固定定位，100 个星星粒子缓慢移动并闪烁
 */
export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 初始化星星
    const stars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.4,
        baseOpacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // 深空背景渐变
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 1.2
      );
      gradient.addColorStop(0, '#12121f');
      gradient.addColorStop(1, '#0a0a0f');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 绘制星星
      for (const star of stars) {
        star.twinklePhase += star.twinkleSpeed;
        const opacity = star.baseOpacity * (0.5 + Math.sin(star.twinklePhase) * 0.5);

        // 缓慢移动
        star.x += star.vx;
        star.y += star.vy;
        // 边界循环
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        // 解析颜色并叠加透明度
        ctx.fillStyle = star.color;
        ctx.globalAlpha = opacity;
        ctx.fill();

        // 较大星星加光晕
        if (star.size > 1.3) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.globalAlpha = opacity * 0.15;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    // 窗口尺寸变化时重置画布
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}

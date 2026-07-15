import { useEffect, useRef } from 'react';

// 水墨粒子定义
interface InkParticle {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  driftSpeed: number;
  driftPhase: number;
  vx: number;
  vy: number;
  color: string;
  // 水墨晕染半径
  haloSize: number;
}

const PARTICLE_COUNT = 60;
// 水墨色系：墨黑为主，少量朱砂、赭石、宣纸白点缀
const INK_COLORS = ['#1a1a2e', '#2a2a3e', '#3a3a4e', '#c73e3a', '#D4A24C', '#f5e6d3'];

/**
 * 水墨粒子背景
 * Canvas 全屏固定定位，水墨色粒子缓慢漂浮晕染
 * z-index 必须为 z-0，否则会被背景遮挡不可见
 */
export default function InkSplash() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 初始化水墨粒子
    const particles: InkParticle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isDark = i < PARTICLE_COUNT * 0.7;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.8,
        baseOpacity: Math.random() * 0.35 + 0.1,
        driftSpeed: Math.random() * 0.008 + 0.002,
        driftPhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
        color: isDark
          ? INK_COLORS[Math.floor(Math.random() * 3)]
          : INK_COLORS[3 + Math.floor(Math.random() * 3)],
        haloSize: Math.random() * 4 + 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // 深色水墨背景渐变
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 1.1
      );
      gradient.addColorStop(0, '#1e1e32');
      gradient.addColorStop(1, '#12121f');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 绘制水墨粒子
      for (const p of particles) {
        p.driftPhase += p.driftSpeed;
        const opacity = p.baseOpacity * (0.5 + Math.sin(p.driftPhase) * 0.5);

        // 缓慢漂浮
        p.x += p.vx;
        p.y += p.vy;
        // 边界循环
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // 水墨晕染光晕（较大、柔和）
        const haloGradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * p.haloSize
        );
        haloGradient.addColorStop(0, p.color);
        haloGradient.addColorStop(1, 'rgba(26, 26, 46, 0)');
        ctx.fillStyle = haloGradient;
        ctx.globalAlpha = opacity * 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.haloSize, 0, Math.PI * 2);
        ctx.fill();

        // 粒子本体
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
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

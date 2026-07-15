import { useEffect, useRef } from 'react';

// 银色光点粒子定义
interface Particle {
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

const PARTICLE_COUNT = 100;
// 粒子颜色：银白色为主，少量苹果蓝点缀，模拟苹果发布会式的优雅极简感
const PARTICLE_COLORS = ['#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#C0C0C0', '#93C5FD'];

/**
 * 银色光点粒子背景
 * Canvas 全屏固定定位，100 个粒子缓慢移动并闪烁
 * z-0 确保可见，不被背景遮挡
 */
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 初始化粒子
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.4,
        baseOpacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.015 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
        // 速度较慢，模拟优雅极简感
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // 深空背景渐变（比 musk 更深）
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 1.2
      );
      gradient.addColorStop(0, '#141414');
      gradient.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 绘制粒子
      for (const particle of particles) {
        particle.twinklePhase += particle.twinkleSpeed;
        const opacity = particle.baseOpacity * (0.5 + Math.sin(particle.twinklePhase) * 0.5);

        // 缓慢移动
        particle.x += particle.vx;
        particle.y += particle.vy;
        // 边界循环
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = opacity;
        ctx.fill();

        // 较大粒子加光晕
        if (particle.size > 1.3) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2.5, 0, Math.PI * 2);
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

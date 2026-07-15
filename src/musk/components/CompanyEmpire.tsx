import { useState } from 'react';
import {
  Map as MapIcon,
  CreditCard,
  Rocket,
  Car,
  Sun,
  Brain,
  Shovel,
  Cpu,
  MessageCircle,
  Sparkles,
  Calendar,
  Briefcase,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { companies } from '@/musk/data/companies';
import { useScrollReveal } from '@/musk/hooks/useScrollReveal';
import type { Company } from '@/musk/data/companies';

// 图标名称到组件的映射
const iconMap: Record<string, LucideIcon> = {
  map: MapIcon,
  'credit-card': CreditCard,
  rocket: Rocket,
  car: Car,
  sun: Sun,
  brain: Brain,
  shovel: Shovel,
  cpu: Cpu,
  'message-circle': MessageCircle,
  sparkles: Sparkles,
};

/**
 * 商业帝国
 * 网格布局展示 10 家公司卡片，hover 展开详情
 */
export default function CompanyEmpire() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* 标题 */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm tracking-[0.3em] text-[#e63946]">EMPIRE</p>
          <h2 className="font-serif text-4xl font-bold text-[#f1faee] sm:text-5xl">商业帝国</h2>
          <p className="mt-4 font-sans text-sm text-[#f1faee]/50">
            十家公司 · 从互联网黄页到火星殖民 · 一部现代商业史诗
          </p>
        </div>

        {/* 公司网格 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 单个公司卡片
function CompanyCard({ company }: { company: Company }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[company.icon] ?? Sparkles;

  return (
    <div
      className="glass-card group relative h-full overflow-hidden p-6 transition-all duration-500 hover:translate-y-[-4px]"
      style={{ borderColor: `${company.color}30` }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* 顶部光晕 */}
      <div
        className="absolute -top-20 -right-20 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ backgroundColor: company.color }}
      />

      {/* 图标 */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${company.color}20`,
          boxShadow: `0 0 20px ${company.color}30`,
        }}
      >
        <Icon className="h-6 w-6" style={{ color: company.color }} />
      </div>

      {/* 公司名称 */}
      <h3 className="font-serif text-xl font-bold text-[#f1faee]">{company.name}</h3>
      <p className="mt-0.5 font-sans text-xs tracking-wide text-[#f1faee]/40">{company.nameEn}</p>

      {/* 元信息 */}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs">
        <span className="flex items-center gap-1 text-[#f1faee]/60">
          <Calendar className="h-3 w-3" style={{ color: company.color }} />
          {company.foundedYear}
        </span>
        <span className="flex items-center gap-1 text-[#f1faee]/60">
          <Briefcase className="h-3 w-3" style={{ color: company.color }} />
          {company.role}
        </span>
      </div>

      {/* 描述 */}
      <p className="mt-4 font-sans text-sm leading-relaxed text-[#f1faee]/70">
        {company.description}
      </p>

      {/* 展开详情 */}
      <div
        className="grid transition-all duration-500"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="font-sans text-xs leading-relaxed text-[#f1faee]/60">
              {company.detail}
            </p>
          </div>
        </div>
      </div>

      {/* 展开提示 */}
      <div className="mt-4 flex items-center gap-1 font-sans text-xs" style={{ color: company.color }}>
        <span>{expanded ? '收起' : '详情'}</span>
        <ChevronDown
          className="h-3 w-3 transition-transform duration-300"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
        />
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import StarField from '@/musk/components/StarField';
import ScrollProgress from '@/musk/components/ScrollProgress';
import Hero from '@/musk/components/Hero';
import Prologue from '@/musk/components/Prologue';
import Timeline from '@/musk/components/Timeline';
import CompanyEmpire from '@/musk/components/CompanyEmpire';
import WorldMap from '@/musk/components/WorldMap';
import PeopleMap from '@/musk/components/PeopleMap';
import QuoteGallery from '@/musk/components/QuoteGallery';
import DramaticMoments from '@/musk/components/DramaticMoments';
import Crossroads from '@/musk/components/Crossroads';
import ThemeDeep from '@/musk/components/ThemeDeep';
import Epilogue from '@/musk/components/Epilogue';

/**
 * 《埃隆·马斯克传》多媒体传记
 */
export default function MuskPage() {
  return (
    <div className="page-musk relative min-h-screen bg-[#0a0a0f] text-[#f1faee]">
      {/* 返回博物馆导航 */}
      <Link
        to="/"
        className="fixed left-6 top-6 z-50 flex items-center gap-2 rounded-full border border-[#f1faee]/15 bg-[#0a0a0f]/80 px-4 py-2 font-sans text-xs text-[#f1faee]/60 backdrop-blur-md transition-colors hover:border-[#e63946]/50 hover:text-[#e63946]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        返回博物馆
      </Link>

      <StarField />
      <ScrollProgress />

      <main className="relative z-10">
        <Hero />
        <Prologue />
        <Timeline />
        <CompanyEmpire />
        <WorldMap />
        <PeopleMap />
        <QuoteGallery />
        <DramaticMoments />
        <Crossroads />
        <ThemeDeep />
        <Epilogue />
      </main>
    </div>
  );
}

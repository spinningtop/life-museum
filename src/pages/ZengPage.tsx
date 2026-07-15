import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import InkWave from '@/zeng/components/InkWave';
import ScrollProgress from '@/zeng/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Hero from '@/zeng/components/Hero';
import Prologue from '@/zeng/components/Prologue';
import Timeline from '@/zeng/components/Timeline';
import AchievementHall from '@/zeng/components/AchievementHall';
import WorldMap from '@/zeng/components/WorldMap';
import PeopleMap from '@/zeng/components/PeopleMap';
import QuoteGallery from '@/zeng/components/QuoteGallery';
import DramaticMoments from '@/zeng/components/DramaticMoments';
import Crossroads from '@/zeng/components/Crossroads';
import ThemeDeep from '@/zeng/components/ThemeDeep';
import Epilogue from '@/zeng/components/Epilogue';

/**
 * 《曾国藩传》多媒体传记
 */
export default function ZengPage() {
  return (
    <div className="page-zeng relative min-h-screen bg-[#0a0a1a] text-[#F5E6CA]">
      {/* 返回博物馆导航 */}
      <Link
        to="/"
        className="fixed left-6 top-6 z-50 flex items-center gap-2 rounded-full border border-[#D4AF37]/15 bg-[#0a0a1a]/80 px-4 py-2 font-sans text-xs text-[#F5E6CA]/60 backdrop-blur-md transition-colors hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        返回博物馆
      </Link>

      <InkWave />
      <ScrollProgress />

      <main className="relative z-10">
        <Hero />
        <Prologue />
        <Timeline />
        <AchievementHall />
        <WorldMap />
        <PeopleMap />
        <QuoteGallery />
        <DramaticMoments />
        <Crossroads />
        <ThemeDeep />
        <Epilogue />
      </main>
      <BackToTop />
    </div>
  );
}

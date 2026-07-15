import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import InkSplash from '@/sudongpo/components/InkSplash';
import ScrollProgress from '@/sudongpo/components/ScrollProgress';
import Hero from '@/sudongpo/components/Hero';
import Prologue from '@/sudongpo/components/Prologue';
import Timeline from '@/sudongpo/components/Timeline';
import Masterworks from '@/sudongpo/components/Masterworks';
import WorldMap from '@/sudongpo/components/WorldMap';
import PeopleMap from '@/sudongpo/components/PeopleMap';
import QuoteGallery from '@/sudongpo/components/QuoteGallery';
import DramaticMoments from '@/sudongpo/components/DramaticMoments';
import Crossroads from '@/sudongpo/components/Crossroads';
import ThemeDeep from '@/sudongpo/components/ThemeDeep';
import Epilogue from '@/sudongpo/components/Epilogue';

/**
 * 《苏东坡传》多媒体传记
 */
export default function SudongpoPage() {
  return (
    <div className="page-sudongpo relative min-h-screen bg-[#1a1a2e] text-[#f5e6d3]">
      {/* 返回博物馆导航 */}
      <Link
        to="/"
        className="fixed left-6 top-6 z-50 flex items-center gap-2 rounded-full border border-[#f5e6d3]/15 bg-[#1a1a2e]/80 px-4 py-2 font-sans text-xs text-[#f5e6d3]/60 backdrop-blur-md transition-colors hover:border-[#c73e3a]/50 hover:text-[#c73e3a]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        返回博物馆
      </Link>

      <InkSplash />
      <ScrollProgress />

      <main className="relative z-10">
        <Hero />
        <Prologue />
        <Timeline />
        <Masterworks />
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

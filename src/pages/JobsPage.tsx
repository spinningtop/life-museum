import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ParticleField from '@/jobs/components/ParticleField';
import ScrollProgress from '@/jobs/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Hero from '@/jobs/components/Hero';
import Prologue from '@/jobs/components/Prologue';
import Timeline from '@/jobs/components/Timeline';
import ProductMuseum from '@/jobs/components/ProductMuseum';
import WorldMap from '@/jobs/components/WorldMap';
import PeopleMap from '@/jobs/components/PeopleMap';
import QuoteGallery from '@/jobs/components/QuoteGallery';
import DramaticMoments from '@/jobs/components/DramaticMoments';
import Crossroads from '@/jobs/components/Crossroads';
import ThemeDeep from '@/jobs/components/ThemeDeep';
import Epilogue from '@/jobs/components/Epilogue';

/**
 * 《史蒂夫·乔布斯传》多媒体传记
 */
export default function JobsPage() {
  return (
    <div className="page-jobs relative min-h-screen bg-[#0a0a0a] text-[#E5E7EB]">
      {/* 返回博物馆导航 */}
      <Link
        to="/"
        className="fixed left-6 top-6 z-50 flex items-center gap-2 rounded-full border border-[#E5E7EB]/15 bg-[#0a0a0a]/80 px-4 py-2 font-sans text-xs text-[#E5E7EB]/60 backdrop-blur-md transition-colors hover:border-[#C0C0C0]/50 hover:text-[#C0C0C0]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        返回博物馆
      </Link>

      <ParticleField />
      <ScrollProgress />

      <main className="relative z-10">
        <Hero />
        <Prologue />
        <Timeline />
        <ProductMuseum />
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

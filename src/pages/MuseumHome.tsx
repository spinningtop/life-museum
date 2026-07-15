import Hero from '@/museum/components/Hero';
import Biographies from '@/museum/components/Biographies';
import StarMoments from '@/museum/components/StarMoments';
import Philosophy from '@/museum/components/Philosophy';
import ForkMoments from '@/museum/components/ForkMoments';
import ConstellationPreview from '@/museum/components/ConstellationPreview';
import Dashboard from '@/museum/components/Dashboard';
import Footer from '@/museum/components/Footer';

/**
 * 人生博物馆 · 平台首页
 */
export default function MuseumHome() {
  return (
    <div className="page-museum min-h-screen bg-[#0B0F1A] text-[#F5F1E8]">
      <Hero />
      <Biographies />
      <StarMoments />
      <Philosophy />
      <ForkMoments />
      <ConstellationPreview />
      <Dashboard />
      <Footer />
    </div>
  );
}

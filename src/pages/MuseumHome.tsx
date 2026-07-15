import Hero from '@/museum/components/Hero';
import Philosophy from '@/museum/components/Philosophy';
import BiographyWorkshop from '@/museum/components/BiographyWorkshop';
import Dashboard from '@/museum/components/Dashboard';
import Biographies from '@/museum/components/Biographies';
import ConstellationPreview from '@/museum/components/ConstellationPreview';
import Footer from '@/museum/components/Footer';
import BackToTop from '@/components/BackToTop';

/**
 * 人生博物馆 · 平台首页
 * 叙事线：简介 → 理念 → 工艺 → 概览 → 馆藏 → 星图 → 收尾
 */
export default function MuseumHome() {
  return (
    <div className="page-museum min-h-screen bg-[#0B0F1A] text-[#F5F1E8]">
      <Hero />
      <Philosophy />
      <BiographyWorkshop />
      <Dashboard />
      <Biographies />
      <ConstellationPreview />
      <Footer />
      <BackToTop />
    </div>
  );
}

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MuseumHome from './pages/MuseumHome';
import MuskPage from './pages/MuskPage';
import SudongpoPage from './pages/SudongpoPage';

/**
 * 路由切换时滚动位置重置到顶部
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * 人生博物馆 · 多媒体传记平台
 * 统一路由：/ 博物馆首页，/musk 马斯克传，/sudongpo 苏东坡传
 */
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MuseumHome />} />
        <Route path="/musk" element={<MuskPage />} />
        <Route path="/sudongpo" element={<SudongpoPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

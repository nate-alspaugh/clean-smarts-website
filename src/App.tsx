import './App.css';
import { Routes, Route } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { HomePage } from './pages/HomePage';
import { HomeNoCardPage } from './pages/HomeNoCardPage';
import { PricingPage } from './pages/PricingPage';
import { GridOverlay } from './components/GridOverlay';
import { GridToggle } from './components/GridToggle';
import { SmoothScroll } from './components/SmoothScroll';
import { useGridOverlay } from './hooks/useGridOverlay';

function App() {
  const { visible, toggle } = useGridOverlay();

  return (
    <SmoothScroll>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home-no-card" element={<HomeNoCardPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      <GridOverlay visible={visible} />
      <GridToggle visible={visible} onToggle={toggle} />
    </SmoothScroll>
  );
}

export default App;

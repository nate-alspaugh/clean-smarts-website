import './App.css';
import { Routes, Route } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { HomePage } from './pages/HomePage';
import { HomeNoCardPage } from './pages/HomeNoCardPage';
import { PricingPage } from './pages/PricingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home-no-card" element={<HomeNoCardPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
}

export default App;

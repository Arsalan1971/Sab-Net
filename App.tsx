
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Whitepaper from './pages/Whitepaper';
import Roadmap from './pages/Roadmap';
import Tokenomics from './pages/Tokenomics';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-slate-900 text-slate-200 min-h-screen font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

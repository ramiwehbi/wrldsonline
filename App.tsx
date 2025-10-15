
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0a0a0a] text-green-500 bg-[linear-gradient(to_right,#16a34a12_1px,transparent_1px),linear-gradient(to_bottom,#16a34a12_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-black opacity-40 z-[-1]"></div>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;

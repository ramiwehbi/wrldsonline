
import React from 'react';
import GlitchText from '../components/GlitchText';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)] fade-in">
      <div className="text-center">
        <GlitchText text="wrlds.online" className="text-5xl md:text-8xl font-bold" />
        <p className="mt-4 text-green-400 text-lg md:text-xl tracking-wider glow opacity-80">
          [ sonic architects : digital frontiers ]
        </p>
      </div>
    </div>
  );
};

export default Home;

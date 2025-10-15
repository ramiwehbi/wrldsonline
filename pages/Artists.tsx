
import React from 'react';
import ArtistCard from '../components/ArtistCard';
import { artists } from '../constants';

const Artists: React.FC = () => {
  return (
    <div className="py-12 fade-in">
      <h2 className="text-4xl font-bold text-center mb-2 glow">[ ROSTER ]</h2>
      <p className="text-center text-green-400/80 mb-12">current active agents</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist, index) => (
          <div key={artist.id} style={{ animationDelay: `${index * 100}ms` }} className="fade-in">
            <ArtistCard artist={artist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;

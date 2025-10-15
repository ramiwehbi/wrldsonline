
import React from 'react';
import type { Artist } from '../constants';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="card-glow-border group">
        <div className="relative bg-black/50 backdrop-blur-sm p-4 border border-green-500/30 h-full transition-all duration-300 group-hover:border-green-400/80 group-hover:scale-[1.02]">
        <img
            src={artist.imageUrl}
            alt={artist.name}
            className="w-full h-48 object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <h3 className="text-2xl font-bold text-green-400 group-hover:glow transition-all duration-300">{artist.name}</h3>
        <p className="text-green-600 tracking-wider">{artist.genre}</p>
        </div>
    </div>
  );
};

export default ArtistCard;

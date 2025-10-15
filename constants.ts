
export interface Artist {
  id: number;
  name: string;
  genre: string;
  imageUrl: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: 'Gl!tch',
    genre: 'Cybernetic Breakbeat',
    imageUrl: 'https://picsum.photos/seed/glitch/500/500',
  },
  {
    id: 2,
    name: 'V0idrunner',
    genre: 'Dystopian Synthwave',
    imageUrl: 'https://picsum.photos/seed/v0idrunner/500/500',
  },
  {
    id: 3,
    name: '0xWRAITH',
    genre: 'Deconstructed Club',
    imageUrl: 'https://picsum.photos/seed/0xwraith/500/500',
  },
  {
    id: 4,
    name: 'Sub_Routine',
    genre: 'Algorithmic Glitch-Hop',
    imageUrl: 'https://picsum.photos/seed/subroutine/500/500',
  },
  {
    id: 5,
    name: 'Nul_Ctrl',
    genre: 'Industrial Dark Techno',
    imageUrl: 'https://picsum.photos/seed/nulctrl/500/500',
  },
  {
    id: 6,
    name: 'Datastream',
    genre: 'Ambient Code',
    imageUrl: 'https://picsum.photos/seed/datastream/500/500',
  },
];

export const contactLinks = [
    { name: 'Instagram', url: '#', handle: '@wrlds.online' },
    { name: 'Email', url: 'mailto:contact@wrlds.online', handle: 'contact@wrlds.online' },
    { name: 'Website', url: '#', handle: 'wrlds.online' },
    { name: 'Bandcamp', url: '#', handle: 'wrldsonline.bandcamp.com' },
];

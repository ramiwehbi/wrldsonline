
export interface Artist {
  id: number;
  name: string;
  genre: string;
  imageUrl: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: 'imar',
    genre: 'Alternative Rock',
    imageUrl: 'https://i1.sndcdn.com/avatars-GvKkL3XmHMzoutiK-8xrFXA-t500x500.jpg',
  },
  {
    id: 2,
    name: 'GOONWORTHY',
    genre: 'Various Genres',
    imageUrl: 'https://s.mxmcdn.net/images-storage/albums2/0/1/9/1/0/0/91001910_500_500.jpg',
  },
  {
    id: 3,
    name: 'vampyr',
    genre: 'Alternative Rock',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5ebfd138830485203fe2cd59cb6',
  },
  {
    id: 4,
    name: 'bludwalk',
    genre: 'Hyperpop',
    imageUrl: 'https://images.genius.com/eed6913be9a6b92dcde0ffd448ac7dd1.750x750x1.png',
  },
  {
    id: 5,
    name: 'snor',
    genre: 'Cloud Rap',
    imageUrl: 'https://lastfm.freetls.fastly.net/i/u/ar0/76cf391122b83b6314e8562738ba19ed.jpg',
  },
  {
    id: 6,
    name: 'cholorofilm!',
    genre: 'Scenecore',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b51e3adbd7240332d5904b5b',
  },
];

export const contactLinks = [
    { name: 'Instagram', url: 'https://instagram.com/wrldsonline', handle: '@wrldsonline ' },
    { name: 'Email', url: 'mailto:contact@wrlds.online', handle: 'contact@wrlds.online' },
    { name: 'Website', url: '#', handle: 'wrlds.online' },
    { name: 'Spotify', url: '#', handle: 'COMING SOON' },
];

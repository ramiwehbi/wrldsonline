
export interface Artist {
  id: number;
  name: string;
  genre: string;
  imageUrl: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: 'snor',
    genre: 'Cloud Rap',
    imageUrl: 'https://lastfm.freetls.fastly.net/i/u/ar0/76cf391122b83b6314e8562738ba19ed.jpg',
  },
  {
    id: 2,
    name: 'cholorofilm',
    genre: 'Scenecore',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b51e3adbd7240332d5904b5b',
  },
  {
    id: 3,
    name: 'Tommy Ragen',
    genre: 'Indie Folk',
    imageUrl: 'https://i.scdn.co/image/ab67616100005174be4c2ea665d4243fd2f1435c',
  },
  {
    id: 4,
    name: 'Zape$',
    genre: 'Alternative Rock',
    imageUrl: 'https://i.scdn.co/image/ab67616100005174e2a312c1c08a3cd126b862cd',
  },
  {
    id: 5,
    name: 'awake after dark',
    genre: 'Indie Rock',
    imageUrl: 'https://i.scdn.co/image/ab67616100005174b69490effe1495e8a64c4ce6',
  },
  {
    id: 6,
    name: 'coldwntr',
    genre: 'Grunge',
    imageUrl: 'https://i1.sndcdn.com/avatars-p5ETAIGVh6kNFw8X-pYiCCw-t240x240.jpg',
  },
];

export const contactLinks = [
    { name: 'Instagram', url: 'https://instagram.com/wrldsonline', handle: '@wrldsonline ' },
    { name: 'Email', url: 'mailto:contact@wrlds.online', handle: 'contact@wrlds.online' },
    { name: 'Website', url: '#', handle: 'wrlds.online' },
    { name: 'Spotify', url: '#', handle: 'COMING SOON' },
];

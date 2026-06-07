export const categories = [
  { id: 'games', label: 'Juegos', icon: '🎮', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'social', label: 'Social', icon: '💬', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'productivity', label: 'Productividad', icon: '📊', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'entertainment', label: 'Entretenimiento', icon: '🎬', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'music', label: 'Música', icon: '🎵', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'tools', label: 'Herramientas', icon: '🔧', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'education', label: 'Educación', icon: '📚', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'health', label: 'Salud', icon: '❤️', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'finance', label: 'Finanzas', icon: '💰', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'photography', label: 'Fotografía', icon: '📷', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
];

const AB_ICON = 'https://archive.org/download/angrybirds-logos_5/Classic/1.0-3.0.0.png';
const AB_COLOR = '#C62828';
const AB_BANNER = 'linear-gradient(135deg, #7F0000 0%, #C62828 50%, #EF5350 100%)';
const AB_DEV = 'Rovio Entertainment';

const abVersions = [
  { version: '1.0.0', size: '8 MB',  downloadUrl: '' },
  { version: '1.2.0', size: '9 MB',  downloadUrl: '' },
  { version: '1.2.1', size: '9 MB',  downloadUrl: '' },
  { version: '1.3.0', size: '10 MB', downloadUrl: '' },
  { version: '1.3.1', size: '10 MB', downloadUrl: '' },
  { version: '1.3.2', size: '10 MB', downloadUrl: '' },
  { version: '1.3.3', size: '11 MB', downloadUrl: '' },
  { version: '1.3.4', size: '11 MB', downloadUrl: '' },
  { version: '1.4.0', size: '12 MB', downloadUrl: '' },
  { version: '1.4.1', size: '12 MB', downloadUrl: '' },
  { version: '1.4.2', size: '13 MB', downloadUrl: '' },
  { version: '1.4.2', size: '13 MB', downloadUrl: '' },
  { version: '1.4.3', size: '13 MB', downloadUrl: '' },
  { version: '1.4.4', size: '14 MB', downloadUrl: '' },
  { version: '1.5.0', size: '15 MB', downloadUrl: '' },
  { version: '1.5.1', size: '15 MB', downloadUrl: '' },
  { version: '1.5.2', size: '16 MB', downloadUrl: '' },
  { version: '1.5.3', size: '16 MB', downloadUrl: '' },
  { version: '1.6.0', size: '17 MB', downloadUrl: '' },
  { version: '1.6.1', size: '17 MB', downloadUrl: '' },
  { version: '1.6.2', size: '18 MB', downloadUrl: '' },
  { version: '1.6.3', size: '18 MB', downloadUrl: '' },
  { version: '2.0.0', size: '20 MB', downloadUrl: '' },
  { version: '2.0.2', size: '20 MB', downloadUrl: '' },
  { version: '2.1.0', size: '21 MB', downloadUrl: '' },
  { version: '2.2.0', size: '22 MB', downloadUrl: '' },
  { version: '2.2.1', size: '22 MB', downloadUrl: '' },
  { version: '2.3.0', size: '23 MB', downloadUrl: '' },
  { version: '3.0.0', size: '25 MB', downloadUrl: '' },
];

// Angry Birds apps — one per version, IDs 1–29
const angryBirdsApps = abVersions.map((v, i) => ({
  id: i + 1,
  name: `Angry Birds (${v.version})`,
  category: 'games',
  icon: '?',
  iconUrl: AB_ICON,
  color: AB_COLOR,
  banner: AB_BANNER,
  rating: 0,
  reviews: 0,
  downloads: '0',
  price: 'Gratis',
  size: v.size,
  version: v.version,
  updated: '',
  developer: AB_DEV,
  description: '',
  screenshots: ['#C62828', '#C62828', '#C62828', '#C62828'],
  tags: [],
  permissions: [],
  downloadUrl: v.downloadUrl,
  oldVersions: [],
}));

// Angry Birds Seasons Free — id 30
const seasonsFree = {
  id: 30,
  name: 'Angry Birds Seasons Free',
  category: 'games',
  icon: '?',
  iconUrl: 'https://archive.org/download/angrybirds-logos_5/Logos/Angrybirds%20Seasons/Free/1.4.0.png',
  color: '#E65100',
  banner: 'linear-gradient(135deg, #BF360C, #E65100)',
  rating: 0,
  reviews: 0,
  downloads: '0',
  price: 'Gratis',
  size: '19 MB',
  version: '1.4.1',
  updated: '',
  developer: 'Rovio Entertainment',
  description: '',
  screenshots: ['#9E9E9E', '#9E9E9E', '#9E9E9E', '#9E9E9E'],
  tags: [],
  permissions: [],
  downloadUrl: 'https://archive.org/download/angry-birds-seasons-ios-ports-android/APPS/Free.zip/free%2FAngry%20Birds%20Seasons%20Free_1.4.1.apk',
  oldVersions: [
    { version: '1.1.1', size: '16 MB', url: '' },
    { version: '1.2.0', size: '17 MB', url: '' },
    { version: '1.3.0', size: '18 MB', url: '' },
  ],
};

// Empty placeholders — ids 31–40
const emptyApps = Array.from({ length: 10 }, (_, i) => ({
  id: 31 + i,
  name: '',
  category: 'games',
  icon: '?',
  color: '#9E9E9E',
  banner: 'linear-gradient(135deg, #757575, #9E9E9E)',
  rating: 0,
  reviews: 0,
  downloads: '0',
  price: 'Gratis',
  size: '0 MB',
  version: '1.0.0',
  updated: '',
  developer: '',
  description: '',
  screenshots: ['#9E9E9E', '#9E9E9E', '#9E9E9E', '#9E9E9E'],
  tags: [],
  permissions: [],
  downloadUrl: '',
  oldVersions: [],
}));

export const apps = [...angryBirdsApps, seasonsFree, ...emptyApps];

export const getFeaturedApps = () => apps.slice(0, 3);
export const getAppsByCategory = (catId) => apps;
export const getTopApps = () => apps;
export const getNewApps = () => apps.slice(0, 6);
export const getAppById = (id) => apps.find(a => a.id === Number(id));
export const searchApps = (query) => {
  const q = query.toLowerCase();
  return apps.filter(a => a.name.toLowerCase().includes(q) || a.developer.toLowerCase().includes(q));
};

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

const C = '#C62828';
const BN = 'linear-gradient(135deg, #7F0000 0%, #C62828 50%, #EF5350 100%)';
const D = 'Rovio Entertainment';
const SC = ['#C62828','#C62828','#C62828','#C62828'];

const I1    = 'https://archive.org/download/angrybirds-logos_5/Classic/1.0-3.0.0.png';
const I312  = 'https://archive.org/download/angrybirds-logos_5/Classic/3.1.0-3.1.2.png';
const I32   = 'https://archive.org/download/angrybirds-logos_5/Classic/3.2.0-6.0.1%20%26%206.1.5-8.0.3.png';
const I606  = 'https://archive.org/download/angrybirds-logos_5/Classic/6.0.6.png';
const I61   = 'https://archive.org/download/angrybirds-logos_5/Classic/6.1.0-6.1.2.png';
const IFree1 = 'https://archive.org/download/angrybirds-logos_5/Classic/Free%201.3.1-1.0.0.png';
const IFree2 = 'https://archive.org/download/angrybirds-logos_5/Classic/Free%201.5.0-1.5.1.png';
const IFree3 = 'https://archive.org/download/angrybirds-logos_5/Classic/Free%201.7.0-1.6.0.png';

const IHD1   = 'https://archive.org/download/angrybirds-logos_5/Logos/Angry%20Birds/HD/1.2.2-3.0.0.png';
const IHD312 = 'https://archive.org/download/angrybirds-logos_5/Logos/Angry%20Birds/HD/3.1.0-3.1.2.png';
const IHD32  = 'https://archive.org/download/angrybirds-logos_5/Logos/Angry%20Birds/HD/3.2.0-8.0.3.png';
const IHD61  = 'https://archive.org/download/angrybirds-logos_5/Logos/Angry%20Birds/HD/6.1.0-6.1.2.png';

const N = 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/';
const NE = 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal-Extra.zip/';
const F = 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Free/Free.zip/';

const mk = (id, ver, size, iconUrl, dl='', appName='') => {
  const base = appName || 'Angry Birds';
  const name = ver.includes('(') ? `${base} ${ver}` : `${base} (${ver})`;
  return {
    id, name, category: 'games',
    icon: '?', iconUrl, color: C, banner: BN,
    rating: 0, reviews: 0, downloads: '0', price: 'Gratis',
    size, version: ver, updated: '', developer: D, description: '',
    screenshots: SC, tags: [], permissions: [],
    downloadUrl: dl, oldVersions: [],
  };
};

export const apps = [
  // ===== ANGRY BIRDS (Normal) =====
  mk(1,  '1.0.0', '8 MB',  I1,   N+'Angry%20Birds%20iPhone%20%281.0.0%29.apk'),
  mk(2,  '1.2.0', '9 MB',  I1,   N+'Angry%20Birds%20iPhone%20%281.2.0%29-Android4.4.apk'),
  mk(3,  '1.2.1', '9 MB',  I1,   N+'Angry%20Birds%20iPhone%20%281.2.1%29-Android4.4.apk'),
  mk(4,  '1.3.0', '10 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.3.0%29-Android4.4.apk'),
  mk(5,  '1.3.1', '10 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.3.1%29-Android4.4.apk'),
  mk(6,  '1.3.2', '10 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.3.2%29-Android4.4.apk'),
  mk(7,  '1.3.3', '11 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.3.3%29-Android4.4.apk'),
  mk(8,  '1.3.4', '11 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.3.4%29-Android4.4.apk'),
  mk(9,  '1.4.0', '12 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.4.0%29-Android4.4.apk'),
  mk(10, '1.4.1', '12 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.4.1%29-Android4.4.apk'),
  mk(11, '1.4.2', '13 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.4.2%29-Android4.4.apk'),
  mk(12, '1.4.2', '13 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.4.2%29-Android4.4.apk'),
  mk(13, '1.4.3', '13 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.4.3%29-Android4.4.apk'),
  mk(14, '1.4.4', '14 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.4.4%29-Android4.4.apk'),
  mk(15, '1.5.0', '15 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.5.0%29.apk'),
  mk(16, '1.5.1', '15 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.5.1%29.apk'),
  mk(17, '1.5.2', '16 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.5.2%29.apk'),
  mk(18, '1.5.3', '16 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.5.3%29.apk'),
  mk(19, '1.6.0', '17 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.6.0%29.apk'),
  mk(20, '1.6.1', '17 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.6.1%29.apk'),
  mk(21, '1.6.2', '18 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.6.2%29.apk'),
  mk(22, '1.6.3', '18 MB', I1,   N+'Angry%20Birds%20iPhone%20%281.6.3%29.apk'),
  mk(23, '2.0.0', '20 MB', I1,   N+'Angry%20Birds%20iPhone%20%282.0.0%29.apk'),
  mk(24, '2.0.2', '20 MB', I1,   N+'Angry%20Birds%20iPhone%20%282.0.2%29.apk'),
  mk(25, '2.1.0', '21 MB', I1,   N+'Angry%20Birds%20iPhone%20%282.1.0%29.apk'),
  mk(26, '2.2.0', '22 MB', I1,   N+'Angry%20Birds%20iPhone%20%282.2.0%29.apk'),
  mk(27, '2.2.1', '22 MB', I1,   N+'Angry%20Birds%20iPhone%20%282.2.1%29.apk'),
  mk(28, '2.3.0', '23 MB', I1,   N+'Angry%20Birds%20iPhone%20%282.3.0%29.apk'),
  mk(29, '3.0.0', '25 MB', I1,   N+'Angry%20Birds%20iPhone%20%283.0.0%29.apk'),
  mk(30, '3.1.0', '26 MB', I312, N+'Angry%20Birds%20iPhone%20%283.1.0%29.apk'),
  mk(31, '3.1.2', '26 MB', I312, N+'Angry%20Birds%20iPhone%20%283.1.2%29.apk'),
  mk(32, '3.2.0', '27 MB', I32,  N+'Angry%20Birds%20iPhone%20%283.2.0%29.apk'),
  mk(33, '3.3.0', '28 MB', I32,  N+'Angry%20Birds%20iPhone%20%283.3.0%29.apk'),
  mk(34, '3.3.1', '28 MB', I32,  N+'Angry%20Birds%20iPhone%20%283.3.1%29.apk'),
  mk(35, '3.4.0', '29 MB', I32,  N+'Angry%20Birds%20iPhone%20%283.4.0%29.apk'),
  mk(36, '3.4.1', '29 MB', I32,  N+'Angry%20Birds%20iPhone%20%283.4.1%29.apk'),
  mk(37, '4.0.0', '32 MB', I32,  N+'Angry%20Birds%20iPhone%20%284.0.0%29.apk'),
  mk(38, '4.1.0', '33 MB', I32,  NE+'Angry%20Birds%204.1.0%20iPhone%20port.apk'),
  mk(39, '4.2.0', '34 MB', I32,  NE+'Angry%20Birds%204.2.0%20iPhone%20port.apk'),
  mk(40, '4.3.2', '35 MB', I32,  N+'Angry%20Birds%20iPhone%20%284.3.2%29.apk'),
  mk(41, '4.3.5', '35 MB', I32,  N+'Angry%20Birds%20iPhone%20%284.3.5%29.apk'),
  mk(42, '5.0.1', '38 MB', I32,  N+'Angry%20Birds%20iPhone%20%285.0.1%29.apk'),
  mk(43, '5.1.0', '39 MB', I32,  N+'Angry%20Birds%20iPhone%20%285.1.0%29.apk'),
  mk(44, '5.2.0', '40 MB', I32,  N+'Angry%20Birds%20iPhone%20%285.2.0%29.apk'),
  mk(45, '6.0.1', '43 MB', I32,  N+'Angry%20Birds%20iPhone%20%286.0.1%29.apk'),
  mk(46, '6.0.6', '44 MB', I606, N+'Angry%20Birds%20iPhone%20%286.0.6%29.apk'),
  mk(47, '6.1.0', '45 MB', I61,  N+'Angry%20Birds%20iPhone%20%286.1.0%29.apk'),
  mk(48, '6.1.1', '45 MB', I61,  N+'Angry%20Birds%20iPhone%20%286.1.1%29.apk'),
  mk(49, '6.1.2', '45 MB', I61,  N+'Angry%20Birds%20iPhone%20%286.1.2%29.apk'),
  mk(50, '6.1.5', '47 MB', I32,  N+'Angry%20Birds%20iPhone%20%286.1.5%29.apk'),
  mk(51, '6.2.0', '46 MB', I32,  N+'Angry%20Birds%20iPhone%20%286.2.0%29.apk'),
  mk(52, '6.2.1', '46 MB', I32,  N+'Angry%20Birds%20iPhone%20%286.2.1%29.apk'),
  mk(53, '7.0.0', '50 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.0.0%29.apk'),
  mk(54, '7.1.0', '51 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.1.0%29.apk'),
  mk(55, '7.2.0', '52 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.2.0%29.apk'),
  mk(56, '7.3.0', '53 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.3.0%29.apk'),
  mk(57, '7.4.0', '54 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.4.0%29.apk'),
  mk(58, '7.5.0', '55 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.5.0%29.apk'),
  mk(59, '7.6.1', '56 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.6.1%29.apk'),
  mk(60, '7.6.2', '56 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.6.2%29.apk'),
  mk(61, '7.7.0', '57 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.7.0%29.apk'),
  mk(62, '7.7.5', '57 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.7.5%29.apk'),
  mk(63, '7.7.7', '58 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.7.7%29.apk'),
  mk(64, '7.8.0', '58 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.8.0%29.apk'),
  mk(65, '7.8.6', '59 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.8.6%29.apk'),
  mk(66, '7.8.7', '59 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.8.7%29.apk'),
  mk(67, '7.9.1', '60 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.9.1%29.apk'),
  mk(68, '7.9.3', '60 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.9.3%29.apk'),
  mk(69, '7.9.6', '61 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.9.6%29.apk'),
  mk(70, '7.9.7', '61 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.9.7%29.apk'),
  mk(71, '7.9.8', '62 MB', I32,  N+'Angry%20Birds%20iPhone%20%287.9.8%29.apk'),
  mk(72, '8.0.0', '63 MB', I32,  N+'Angry%20Birds%20iPhone%20%288.0.0%29.apk'),
  mk(73, '8.0.1', '63 MB', I32,  N+'Angry%20Birds%20iPhone%20%288.0.1%29.apk'),
  mk(74, '8.0.3', '64 MB', I32,  N+'Angry%20Birds%20iPhone%20%288.0.3%29.apk'),

  // ===== ANGRY BIRDS FREE =====
  mk(75, '1.0.0', '8 MB',  IFree1, F+'Angry%20Birds%20Free%20%281.0.0%29.apk', 'Angry Birds Free'),
  mk(76, '1.1.0', '9 MB',  IFree1, F+'Angry%20Birds%20Free%20%281.1.0%29.apk', 'Angry Birds Free'),
  mk(77, '1.1.1', '9 MB',  IFree1, F+'Angry%20Birds%20Free%20%281.1.1%29.apk', 'Angry Birds Free'),
  mk(78, '1.2.0', '10 MB', IFree1, F+'Angry%20Birds%20Free%20%281.2.0%29.apk', 'Angry Birds Free'),
  mk(79, '1.2.1', '10 MB', IFree1, F+'Angry%20Birds%20Free%20%281.2.1%29.apk', 'Angry Birds Free'),
  mk(80, '1.3.0', '11 MB', IFree1, F+'Angry%20Birds%20Free%20%281.3.0%29.apk', 'Angry Birds Free'),
  mk(81, '1.3.1', '11 MB', IFree1, F+'Angry%20Birds%20Free%20%281.3.1%29.apk', 'Angry Birds Free'),
  mk(82, '1.5.0', '13 MB', IFree2, F+'Angry%20Birds%20Free%20%281.5.0%29.apk', 'Angry Birds Free'),
  mk(83, '1.5.1', '13 MB', IFree2, F+'Angry%20Birds%20Free%20%281.5.1%29.apk', 'Angry Birds Free'),
  mk(84, '1.6.0', '14 MB', IFree3, F+'Angry%20Birds%20Free%20%281.6.0%29.apk', 'Angry Birds Free'),
  mk(85, '1.7.0', '15 MB', IFree3, F+'Angry%20Birds%20Free%20%281.7.0%29.apk', 'Angry Birds Free'),

  // ===== ANGRY BIRDS HD =====
  mk(150, '1.2.2',         '9 MB',  IHD1,   '', 'Angry Birds HD'),
  mk(86,  '1.3.0',         '10 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.3.0%29-Android4.4.apk', 'Angry Birds HD'),
  mk(87,  '1.3.3',         '11 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.3.3%29-Android4.4.apk', 'Angry Birds HD'),
  mk(88,  '1.3.4',         '11 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.3.4%29-Android4.4.apk', 'Angry Birds HD'),
  mk(89,  '1.4.0',         '12 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.4.0%29-Android4.4.apk', 'Angry Birds HD'),
  mk(90,  '1.4.1',         '12 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.4.1%29-Android4.4.apk', 'Angry Birds HD'),
  mk(91,  '1.4.2',         '13 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.4.2%29-Android4.4.apk', 'Angry Birds HD'),
  mk(92,  '1.5.0',         '15 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.5.0%29.apk', 'Angry Birds HD'),
  mk(93,  '1.5.1',         '15 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.5.1%29.apk', 'Angry Birds HD'),
  mk(94,  '1.5.2',         '16 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.5.2%29.apk', 'Angry Birds HD'),
  mk(95,  '1.5.3',         '16 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.5.3%29.apk', 'Angry Birds HD'),
  mk(96,  '1.6.0',         '17 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.6.0%29.apk', 'Angry Birds HD'),
  mk(97,  '1.6.1',         '17 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.6.1%29.apk', 'Angry Birds HD'),
  mk(98,  '1.6.2',         '18 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.6.2%29.apk', 'Angry Birds HD'),
  mk(99,  '1.6.3',         '18 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%281.6.3%29.apk', 'Angry Birds HD'),
  mk(151, '1.7.0 (Sync)',  '17 MB', IHD1,   '', 'Angry Birds HD'),
  mk(100, '2.0.0',         '20 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%282.0.0%29.apk', 'Angry Birds HD'),
  mk(152, '2.0.0 (Island)','20 MB', IHD1,   '', 'Angry Birds HD'),
  mk(101, '2.0.2',         '20 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%282.0.2%29.apk', 'Angry Birds HD'),
  mk(102, '2.1.0',         '21 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%282.1.0%29.apk', 'Angry Birds HD'),
  mk(103, '2.2.0',         '22 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%282.2.0%29.apk', 'Angry Birds HD'),
  mk(104, '2.2.1',         '22 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%282.2.1%29.apk', 'Angry Birds HD'),
  mk(105, '2.3.0',         '23 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%282.3.0%29.apk', 'Angry Birds HD'),
  mk(106, '3.0.0',         '25 MB', IHD1,   N+'Angry%20Birds%20iPhone%20%283.0.0%29.apk', 'Angry Birds HD'),
  mk(107, '3.1.0',         '26 MB', IHD312, N+'Angry%20Birds%20iPhone%20%283.1.0%29.apk', 'Angry Birds HD'),
  mk(108, '3.1.2',         '26 MB', IHD312, N+'Angry%20Birds%20iPhone%20%283.1.2%29.apk', 'Angry Birds HD'),
  mk(109, '3.2.0',         '27 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%283.2.0%29.apk', 'Angry Birds HD'),
  mk(110, '3.3.0',         '28 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%283.3.0%29.apk', 'Angry Birds HD'),
  mk(111, '3.3.1',         '28 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%283.3.1%29.apk', 'Angry Birds HD'),
  mk(112, '3.4.0',         '29 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%283.4.0%29.apk', 'Angry Birds HD'),
  mk(113, '3.4.1',         '29 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%283.4.1%29.apk', 'Angry Birds HD'),
  mk(114, '4.0.0',         '32 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%284.0.0%29.apk', 'Angry Birds HD'),
  mk(115, '4.1.0',         '33 MB', IHD32,  NE+'Angry%20Birds%204.1.0%20iPhone%20port.apk', 'Angry Birds HD'),
  mk(116, '4.2.0',         '34 MB', IHD32,  NE+'Angry%20Birds%204.2.0%20iPhone%20port.apk', 'Angry Birds HD'),
  mk(117, '4.3.2',         '35 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%284.3.2%29.apk', 'Angry Birds HD'),
  mk(118, '5.0.1',         '38 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%285.0.1%29.apk', 'Angry Birds HD'),
  mk(119, '5.1.0',         '39 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%285.1.0%29.apk', 'Angry Birds HD'),
  mk(120, '5.2.0',         '40 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%285.2.0%29.apk', 'Angry Birds HD'),
  mk(121, '6.0.1',         '43 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%286.0.1%29.apk', 'Angry Birds HD'),
  mk(122, '6.1.0',         '45 MB', IHD61,  N+'Angry%20Birds%20iPhone%20%286.1.0%29.apk', 'Angry Birds HD'),
  mk(123, '6.1.1',         '45 MB', IHD61,  N+'Angry%20Birds%20iPhone%20%286.1.1%29.apk', 'Angry Birds HD'),
  mk(124, '6.1.2',         '45 MB', IHD61,  N+'Angry%20Birds%20iPhone%20%286.1.2%29.apk', 'Angry Birds HD'),
  mk(125, '6.1.5',         '47 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%286.1.5%29.apk', 'Angry Birds HD'),
  mk(126, '6.2.0',         '46 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%286.2.0%29.apk', 'Angry Birds HD'),
  mk(127, '6.2.1',         '46 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%286.2.1%29.apk', 'Angry Birds HD'),
  mk(128, '7.0.0',         '50 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.0.0%29.apk', 'Angry Birds HD'),
  mk(129, '7.1.0',         '51 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.1.0%29.apk', 'Angry Birds HD'),
  mk(130, '7.2.0',         '52 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.2.0%29.apk', 'Angry Birds HD'),
  mk(131, '7.3.0',         '53 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.3.0%29.apk', 'Angry Birds HD'),
  mk(132, '7.4.0',         '54 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.4.0%29.apk', 'Angry Birds HD'),
  mk(133, '7.5.0',         '55 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.5.0%29.apk', 'Angry Birds HD'),
  mk(134, '7.6.1',         '56 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.6.1%29.apk', 'Angry Birds HD'),
  mk(135, '7.6.2',         '56 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.6.2%29.apk', 'Angry Birds HD'),
  mk(136, '7.7.0',         '57 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.7.0%29.apk', 'Angry Birds HD'),
  mk(137, '7.7.5',         '57 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.7.5%29.apk', 'Angry Birds HD'),
  mk(138, '7.7.7',         '58 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.7.7%29.apk', 'Angry Birds HD'),
  mk(139, '7.8.0',         '58 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.8.0%29.apk', 'Angry Birds HD'),
  mk(140, '7.8.6',         '59 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.8.6%29.apk', 'Angry Birds HD'),
  mk(141, '7.8.7',         '59 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.8.7%29.apk', 'Angry Birds HD'),
  mk(142, '7.9.1',         '60 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.9.1%29.apk', 'Angry Birds HD'),
  mk(143, '7.9.3',         '60 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.9.3%29.apk', 'Angry Birds HD'),
  mk(144, '7.9.6',         '61 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.9.6%29.apk', 'Angry Birds HD'),
  mk(145, '7.9.7',         '61 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.9.7%29.apk', 'Angry Birds HD'),
  mk(146, '7.9.8',         '62 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%287.9.8%29.apk', 'Angry Birds HD'),
  mk(147, '8.0.0',         '63 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%288.0.0%29.apk', 'Angry Birds HD'),
  mk(148, '8.0.1',         '63 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%288.0.1%29.apk', 'Angry Birds HD'),
  mk(149, '8.0.3',         '64 MB', IHD32,  N+'Angry%20Birds%20iPhone%20%288.0.3%29.apk', 'Angry Birds HD'),
];

export const getFeaturedApps   = () => apps.slice(0, 3);
export const getAppsByCategory = () => apps;
export const getTopApps        = () => apps;
export const getNewApps        = () => apps.slice(0, 6);
export const getAppById        = (id) => apps.find(a => a.id === Number(id));
export const searchApps        = (query) => {
  const q = query.toLowerCase();
  return apps.filter(a => a.name.toLowerCase().includes(q) || a.developer.toLowerCase().includes(q));
};

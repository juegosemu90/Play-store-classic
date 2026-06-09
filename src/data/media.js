const BASE = 'https://archive.org/download/Banner-angrybirds-8/Classic/Normal/';

// Each entry: { banner, screenshots: [1,2,3] }
const G1   = { banner: BASE+'1.0.0-1.3.4/Banner.png',  screenshots: [BASE+'1.0.0-1.3.4/1.png',  BASE+'1.0.0-1.3.4/2.png',  BASE+'1.0.0-1.3.4/3.png']  };
const G2   = { banner: BASE+'1.4.0-1.5.0/Banner.png',  screenshots: [BASE+'1.4.0-1.5.0/1.png',  BASE+'1.4.0-1.5.0/2.png',  BASE+'1.4.0-1.5.0/3.png']  };
const G3   = { banner: BASE+'1.5.1-1.6.3/Banner.png',  screenshots: [BASE+'1.5.1-1.6.3/1.png',  BASE+'1.5.1-1.6.3/2.png',  BASE+'1.5.1-1.6.3/3.png']  };
const G4   = { banner: BASE+'2.0.0-8.0.3/Banner.png',  screenshots: [BASE+'2.0.0-8.0.3/1.png',  BASE+'2.0.0-8.0.3/2.png',  BASE+'2.0.0-8.0.3/3.png']  };
const G5   = { banner: BASE+'3.4.0-8.0.3/Banner.png',  screenshots: [BASE+'3.4.0-8.0.3/1.png',  BASE+'3.4.0-8.0.3/2.png',  BASE+'3.4.0-8.0.3/3.png']  };

// Map: version string → media group
export const AB_MEDIA = {
  // Group 1: 1.0.0 - 1.3.4
  '1.0.0': G1, '1.2.0': G1, '1.2.1': G1,
  '1.3.0': G1, '1.3.1': G1, '1.3.2': G1, '1.3.3': G1, '1.3.4': G1,

  // Group 2: 1.4.0 - 1.5.0
  '1.4.0': G2, '1.4.1': G2, '1.4.2': G2, '1.4.3': G2, '1.4.4': G2, '1.5.0': G2,

  // Group 3: 1.5.1 - 1.6.3
  '1.5.1': G3, '1.5.2': G3, '1.5.3': G3,
  '1.6.0': G3, '1.6.1': G3, '1.6.2': G3, '1.6.3': G3,

  // Group 4: 2.0.0 - 3.3.1
  '2.0.0': G4, '2.0.2': G4, '2.1.0': G4, '2.2.0': G4, '2.2.1': G4, '2.3.0': G4,
  '3.0.0': G4, '3.1.0': G4, '3.1.2': G4, '3.2.0': G4, '3.3.0': G4, '3.3.1': G4,

  // Group 5: 3.4.0 - 8.0.3
  '3.4.0': G5, '3.4.1': G5,
  '4.0.0': G5, '4.1.0': G5, '4.2.0': G5, '4.3.1': G5, '4.3.2': G5, '4.3.5': G5,
  '5.0.0': G5, '5.0.1': G5, '5.1.0': G5, '5.2.0': G5,
  '6.0.1': G5, '6.0.6': G5, '6.1.0': G5, '6.1.1': G5, '6.1.2': G5,
  '6.1.5': G5, '6.2.0': G5, '6.2.1': G5,
  '7.0.0': G5, '7.1.0': G5, '7.2.0': G5, '7.3.0': G5, '7.4.0': G5,
  '7.5.0': G5, '7.6.1': G5, '7.6.2': G5, '7.7.0': G5, '7.7.5': G5,
  '7.7.7': G5, '7.8.0': G5, '7.8.6': G5, '7.8.7': G5,
  '7.9.1': G5, '7.9.3': G5, '7.9.6': G5, '7.9.7': G5, '7.9.8': G5,
  '8.0.0': G5, '8.0.1': G5, '8.0.3': G5,
};

export function getMedia(version) {
  return AB_MEDIA[version] || null;
}

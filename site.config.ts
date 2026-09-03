export type ThemePalette = {
  primary: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
};

export type SiteTheme = {
  colors: {
    light: ThemePalette;
    dark: ThemePalette;
  };
  typography: {
    body: string;
    heading: string;
    mono: string;
    headingWeight: number;
  };
  shape: {
    radius: string;
    borderWidth: string;
    navbarShadow: string;
  };
  layout: {
    contentWidth: string;
  };
};

export const site = {
  title: 'Scooby-Doo',
  tagline: 'Mystery, snacks and terrible plans',
  description: 'A lightweight cartoon mystery game built with Regard.',
  author: 'AleaScript',
  defaultLocale: 'en',
  locales: {
    en: {htmlLang: 'en', label: 'English'},
    fr: {htmlLang: 'fr', label: 'Français'},
  },
  repository: {
    defaultFullName: 'aleascript/scooby-doo',
  },
  identity: {
    logo: null,
    favicon: null,
  },
  theme: {
    colors: {
      light: {
        primary: '#6c2ea1',
        background: '#fff8e7',
        surface: '#fff0c8',
        text: '#20213d',
        muted: '#665b73',
        border: '#7b3ca7',
      },
      dark: {
        primary: '#b8f13c',
        background: '#17112a',
        surface: '#25183d',
        text: '#fff7df',
        muted: '#d0c4e4',
        border: '#7856a0',
      },
    },
    typography: {
      body: 'Verdana, Geneva, Tahoma, sans-serif',
      heading: '"Trebuchet MS", "Arial Rounded MT Bold", Arial, sans-serif',
      mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
      headingWeight: 700,
    },
    shape: {
      radius: '1.1rem',
      borderWidth: '2px',
      navbarShadow: '0 4px 0 rgb(32 33 61 / 18%)',
    },
    layout: {
      contentWidth: '58rem',
    },
  } satisfies SiteTheme,
} as const;

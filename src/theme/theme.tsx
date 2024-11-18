import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    blue: {
      700: '#8fb2c1',
      600: '#daeaed',
      500: '#738f9b',
    },
    gray: {
      700: '#161616',
      600: '#202024',
      500: '#29292E',
      400: '#F5F6FA',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6',
      50: '#4f4f50',
      5: '#f1f1f1',
    },
    black: '#1f1e1e',
    white: '#FFFFFF',
    red: {
      500: '#F75A68',
    },
    primary: {
      500: '#0ea5e9',
    },
    green: {
      100: '#cfdfe8',
    },
  },
  fonts: {
    heading: 'VisbyCF-Bold',
    body: 'VisbyCF-Light',
    mono: 'VisbyCF-Medium',
  },
  fontSizes: {
    sxs: 6,
    mxs: 8,
    lxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
  fontConfig: {
    VisbyCF: {
      100: {
        normal: 'VisbyCF-Thin',
        italic: 'VisbyCF-ThinOblique',
      },
      200: {
        normal: 'VisbyCF-Light',
        italic: 'VisbyCF-LightOblique',
      },
      400: {
        normal: 'VisbyCF-Medium',
        italic: 'VisbyCF-MediumOblique',
      },
      600: {
        normal: 'VisbyCF-Bold',
        italic: 'VisbyCF-BoldOblique',
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: 'white',
        fontFamily: 'body',
      },
    },
    Heading: {
      baseStyle: {
        color: 'white',
        fontFamily: 'heading',
      },
    },
  },
});

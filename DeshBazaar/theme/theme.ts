import {NativeBaseProvider, extendTheme} from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Nunito: {
      100: {
        normal: 'Nunito-Light',
        italic: 'Nunito-LightItalic',
      },
      200: {
        normal: 'Nunito-Light',
        italic: 'Nunito-LightItalic',
      },
      300: {
        normal: 'Nunito-Light',
        italic: 'Nunito-LightItalic',
      },
      400: {
        normal: 'Nunito-Regular',
        italic: 'Nunito-Italic',
      },
      500: {
        normal: 'Nunito-Medium',
      },
      600: {
        normal: 'Nunito-Medium',
        italic: 'Nunito-MediumItalic',
      },

      700: {
        normal: 'Nunito-Bold',
      },
      800: {
        normal: 'Nunito-Bold',
        italic: 'Nunito-BoldItalic',
      },
      900: {
        normal: 'Nunito-Bold',
        italic: 'Nunito-BoldItalic',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
    mono: 'Nunito',
  },
});

export default theme;

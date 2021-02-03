import {DarkTheme as PaperDarkTheme, configureFonts} from 'react-native-paper';
import {DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import {fontConfig} from './fontConfig';

export const theme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  roundness: 4,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#f7b921',
    background: '#131B26',
    onBackground: '#b4b4b4',
    secondary: '#ee2844',
    tertiary: '#2fb3c',
    accent: '#0f2134',
  },
  fonts: configureFonts(fontConfig),
};

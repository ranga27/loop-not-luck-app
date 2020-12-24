import {DarkTheme as PaperDarkTheme, configureFonts} from 'react-native-paper';
import {DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import fontConfig from './fontConfig';

const theme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  roundness: 4,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#f7b921',
    accent: '#0f2134',
    background: '#131B26',
  },
  fonts: configureFonts(fontConfig),
};

export default theme;

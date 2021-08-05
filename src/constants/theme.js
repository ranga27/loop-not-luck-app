import {DefaultTheme as PaperTheme, configureFonts} from 'react-native-paper';
import {DefaultTheme as NavigationTheme} from '@react-navigation/native';
import {fontConfig} from './fontConfig';

export const theme = {
  ...PaperTheme,
  ...NavigationTheme,
  roundness: 4,
  colors: {
    ...PaperTheme.colors,
    ...NavigationTheme.colors,
    primary: 'rgb(0,0,0)',
    accent: '#0f2134',
    background: 'rgb(255,255,255)',
    surface: '#182230',
    text: 'rgb(0,0,0)',
    disabled: 'rgb(138, 154, 167)',
    onSurface: '#F0F1F4',
    onBackground: '#b4b4b4',
    secondary: '#ee2844',
  },
  fonts: configureFonts(fontConfig),
};

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
    primary: '#ffffff',
    background: '#ffffff',
    // surface: '#182230',
    // accent: '#0f2134',
    // error: '#0f2134',
    // text: '#000000',
    // onSurface: '#F0F1F4',
    disabled: '#8A9AA7',
    // placeholder: '#ffffff',
    // backdrop: '#ffffff',
    //    notification: string,
  },
  fonts: configureFonts(fontConfig),
};

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from './AuthProvider';
import {Routes} from './Routes';
import {theme} from '../constants';
/**
 * Wrap all providers here
 */

export const Providers = () => {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
};

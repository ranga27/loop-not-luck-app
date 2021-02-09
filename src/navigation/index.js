import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from '../utils';
import {Routes} from './Routes';
import {theme} from '../constants';
import {configureStore, persistor} from '../store/configureStore';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
/**
 * Wrap all providers here
 */

const store = configureStore();

export const Providers = () => {
  return (
    <PaperProvider theme={theme}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </ReduxProvider>
    </PaperProvider>
  );
};

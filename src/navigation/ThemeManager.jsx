import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';

export const ThemeManager = ({children}) => {
  return (
    <ThemeProvider theme={{fontFamily: 'ZonaPro-Regular'}}>
      {children}
    </ThemeProvider>
  );
};

import React from 'react';
import styled from 'styled-components/native';

const SafeAreaViewBase = styled.SafeAreaView`
  flex: 1;
`;

const DarkSafeAreaView = styled(SafeAreaViewBase)`
  background-color: #0f2134;
`;

const LightSafeAreaView = styled(SafeAreaViewBase)`
  background-color: #ffffff;
`;

export const SafeArea = ({type, children, ...rest}) => {
  switch (type) {
    case 'dark':
      return <DarkSafeAreaView {...rest}>{children}</DarkSafeAreaView>;
    case 'light':
      return <LightSafeAreaView {...rest}>{children}</LightSafeAreaView>;
    default:
      return <SafeAreaViewBase {...rest}>{children}</SafeAreaViewBase>;
  }
};

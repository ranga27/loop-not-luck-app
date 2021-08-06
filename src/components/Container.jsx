import React from 'react';
import styled from 'styled-components/native';

const ContainerBase = styled.View`
  flex: 1;
`;

const LandingTextBox = styled(ContainerBase)`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #ffffff;
  margin: 8px 0px;
`;

const LandingBodyTextBox = styled(ContainerBase)`
  margin: 8px 0px;
`;
export const Container = ({type, children, ...rest}) => {
  switch (type) {
    case 'landing-main':
      return <LandingTextBox {...rest}>{children}</LandingTextBox>;
    case 'landing-body':
      return <LandingBodyTextBox {...rest}>{children}</LandingBodyTextBox>;
    default:
      return <ContainerBase {...rest}>{children}</ContainerBase>;
  }
};

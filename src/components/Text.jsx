import React from 'react';
import styled from 'styled-components/native';

const TextBase = styled.Text`
  font-family: ZonaPro-Regular;
`;

const TitleText = styled(TextBase)`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.color || '#ffffff'};
  margin: 8px 0px;
  text-align: center;
  line-height: 36px;
`;

const BodyText = styled(TextBase)`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  text-align: auto;
  line-height: 24px;
`;

export const Text = ({type, children, color, ...rest}) => {
  switch (type) {
    case 'title':
      return (
        <TitleText color={color} {...rest}>
          {children}
        </TitleText>
      );
    case 'body':
      return <BodyText {...rest}>{children}</BodyText>;
    default:
      return <TextBase {...rest}>{children}</TextBase>;
  }
};

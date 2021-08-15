import React from 'react';
import styled from 'styled-components/native';

const TextBase = styled.Text`
  font-family: ZonaPro-Regular;
  color: red;
`;

const TitleText = styled(TextBase)`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.color || '#ee2844'};
  margin: 8px 0px;
  text-align: center;
  line-height: 36px;
`;

const BodyText = styled(TextBase)`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.color || '#ffff'};
  text-align: auto;
  line-height: 24px;
`;

const LabelText = styled(TextBase)`
  font-size: 16px;
  font-weight: 700;
  color: #ee2844;
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
      return (
        <BodyText color={color} {...rest}>
          {children}
        </BodyText>
      );
    case 'label':
      return <LabelText {...rest}>{children}</LabelText>;
    default:
      return <TextBase {...rest}>{children}</TextBase>;
  }
};

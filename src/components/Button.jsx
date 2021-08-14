import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {width} = Dimensions.get('screen');
import {useNavigation} from '@react-navigation/native';

//TODO: Implement global theme
//TODO: Implement pressed effect if using pressable
const ButtonContainer = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  margin: 8px 0px 20px;
  width: ${width * 0.8 + 'px'};
  min-height: 56px;
  padding: 0px 8px;
  border-radius: 36px;
  opacity: 1;
  background-color: ${(props) => props.bgColor || '#f7b921'};
`;
//TODO: Implement loading effect / spinner for Submit buttons
const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  font-family: ZonaPro-Regular;
  color: ${(props) => props.txtColor || '#ffffff'};
`;
export const Button = ({onPress, bgColor, title, txtColor, goTo, ...rest}) => {
  const navigation = useNavigation();
  return (
    <ButtonContainer
      onPress={goTo ? () => navigation.navigate(goTo) : onPress}
      bgColor={bgColor}
      {...rest}>
      <ButtonText txtColor={txtColor}>{title}</ButtonText>
    </ButtonContainer>
  );
};

import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('screen');

export const Image = styled.Image`
  align-self: center;
  width: ${width * 0.9 + 'px'};
  height: ${width * 0.9 + 'px'};
`;

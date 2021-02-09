import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Button as ButtonComponent} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

export const Button = ({title, modeValue, ...rest}) => {
  return (
    <ButtonComponent
      mode={modeValue}
      {...rest}
      style={styles.button}
      contentStyle={styles.buttonContainer}>
      {title}
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    borderRadius: 24,
    shadowOffset: {width: 0, height: 16},
    shadowRadius: 30,
    shadowOpacity: 0.2,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: width / 2,
    height: height / 15,
  },
});

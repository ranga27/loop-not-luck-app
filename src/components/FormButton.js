import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

export default function FormButton({title, modeValue, ...rest}) {
  return (
    <Button
      mode={modeValue}
      {...rest}
      style={styles.button}
      contentStyle={styles.buttonContainer}>
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    borderRadius: 24,
    shadowOffset: {width: 0, height: 16},
    shadowRadius: 30,
    shadowOpacity: 0.2,
  },
  buttonContainer: {
    width: width / 2,
    height: height / 15,
  },
});

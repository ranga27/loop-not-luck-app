import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

export const FormInput = ({labelName, ...rest}) => {
  return (
    <TextInput
      label={labelName}
      mode={'outlined'}
      style={styles.input}
      numberOfLines={1}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    width: width / 1.5,
    height: height / 15,
    borderRadius: 24,
  },
});

import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import {ErrorMessage} from './ErrorMessage';

const {width, height} = Dimensions.get('screen');

export const InputField = ({label, ...props}) => {
  return (
    <>
      <TextInput
        label={label}
        mode={'flat'}
        style={styles.input}
        numberOfLines={1}
        {...props}
      />
      <ErrorMessage errorValue={props.errorValue} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    width: width / 1.4,
    height: height / 18,
  },
  internal: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

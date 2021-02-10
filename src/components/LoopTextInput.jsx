import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TextInput, Text} from 'react-native-paper';
import {useField} from 'formik';

const {width, height} = Dimensions.get('screen');

export const LoopTextInput = ({label, ...props}) => {
  //const [field, meta] = useField(props);
  return (
    <TextInput
      label={label}
      mode={'outlined'}
      style={styles.input}
      numberOfLines={1}
      {...props}
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

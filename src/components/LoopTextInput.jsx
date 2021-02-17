import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TextInput, Text} from 'react-native-paper';
import {useField} from 'formik';

const {width, height} = Dimensions.get('screen');

export const LoopTextInput = ({label, ...props}) => {
  return (
    <TextInput
      label={label}
      mode={'flat'}
      style={styles.input}
      numberOfLines={1}
      {...props}
     // render={(props) => <InternalTextInput />}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    //flex: 1,
    margin: 10,
    width: width / 1.5,
    height: height / 15,
  },
  internal: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

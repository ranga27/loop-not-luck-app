import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Alert} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import useValueChange from '../../hooks/useValueChange';

export const School = ({navigation}) => {
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'education');

  const handleChange = (value) => {
    setSelection(value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        At the moment we are only able to supply opportunities to people who
        have finished education. We shall notify you when functionality is
        available.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    alignSelf: 'center',
  },
});

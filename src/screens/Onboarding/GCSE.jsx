import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import useValueChange from '../../hooks/useValueChange';

export const GCSE = ({navigation}) => {
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'C Grade');

  const handleChange = (value) => {
    setSelection(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Did you receive a C Grade or above in Maths and English GCSE?
        </Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => handleChange(value)}
          value={selection}>
          <RadioButton.Item label="Yes" value="Yes" />
          <RadioButton.Item label="No" value="No" />
        </RadioButton.Group>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    //flex: 1,
    //height: height / 3,
    //borderWidth: 2,
    //borderColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //flexGrow: 2,
  },
  radioContainer: {
    //flex: 1,
    //height: height / 4,
    paddingHorizontal: 50,
    paddingVertical: 10,
    //flexShrink: 2,
    //borderWidth: 2,
    //borderColor: 'white',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    paddingHorizontal: 30,
  },
});

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import useValueChange from '../../hooks/useValueChange';

export const FinishedSchool = ({navigation}) => {
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'finishedSchool');

  const handleChange = (value) => {
    setSelection(value);
    navigation.navigate('GCSE');
  };
  return (
    <View style={styles.container}>
      <RadioButton.Group
        onValueChange={(value) => handleChange(value)}
        value={selection}>
        <RadioButton.Item label="A-Levels" value="A-Levels" />
        <RadioButton.Item
          label="International Baccalaureate"
          value="International Baccalaureate"
        />
        <RadioButton.Item label="Scottish Highers" value="Scottish Highers" />
        <RadioButton.Item label="Other" value="Other" />
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  info: {
    textAlign: 'justify',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  ButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
});

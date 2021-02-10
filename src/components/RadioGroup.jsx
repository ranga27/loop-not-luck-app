import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {RadioButton} from 'react-native-paper';
import useValueChange from '../hooks/useValueChange';

export const RadioGroup = ({field, options, nextScreen, navigation}) => {
  //TODO: deal with navigation in calling screen & eliminate the use of 'nextScreen' & 'navigation'  variables;
  const [selection, setSelection] = useState('');
  useValueChange(selection, field);
  return (
    <View style={styles.container}>
      <RadioButton.Group
        onValueChange={(value) => {
          setSelection(value);
          navigation.navigate(nextScreen);
        }}
        value={selection}>
        {options.map((child, index) => (
          <RadioButton.Item key={index} label={child} value={child} />
        ))}
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    paddingHorizontal: 80,
  },
  info: {
    textAlign: 'justify',
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

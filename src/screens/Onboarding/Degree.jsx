import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {RadioButton, Text, IconButton} from 'react-native-paper';
import useValueChange from '../../hooks/useValueChange';
const {height, width} = Dimensions.get('screen');

export const Degree = ({navigation}) => {
  const [selection, setSelection] = useState('');

  useValueChange(selection, 'degree');

  const handleChange = (value) => {
    setSelection(value);
    navigation.navigate('Undergraduate');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>What Degree are you pursuing?</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => handleChange(value)}
          value={selection}>
          <RadioButton.Item label="Current Undergraduate" value="Current UG" />
          <RadioButton.Item label="Current Post Graduate" value="Current PG" />
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
    // flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

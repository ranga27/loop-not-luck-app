import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import useValueChange from '../../hooks/useValueChange';

export const Education = ({navigation}) => {
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'education');

  const handleChange = (value) => {
    setSelection(value);
    let route = 'Degree';
    switch (value) {
      case 'School':
        route = 'English';
        break;
      case 'FinishedSchool':
        route = 'FinishedSchool';
        break;
    }
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 24}}>What are you upto at the moment?</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => handleChange(value)}
          value={selection}>
          <RadioButton.Item label="School" value="School" />
          <RadioButton.Item label="Finished School" value="FinishedSchool" />
          <RadioButton.Item label="University" value="University" />
          <RadioButton.Item label="Graduated" value="Graduated" />
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
    //borderWidth: 2,
    //borderColor: 'white',
    justifyContent: 'flex-end',
    padding: 10,
    alignItems: 'center',
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
});

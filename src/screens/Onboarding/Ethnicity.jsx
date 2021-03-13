import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {RadioButton, Title} from 'react-native-paper';
import {ethnicityOptions} from '../../constants';
import useValueChange from '../../hooks/useValueChange';

export const Ethnicity = ({navigation}) => {
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'ethnicity');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title style={{fontSize: 24}}>What is your ethnic group?</Title>
      </View>
      <ScrollView style={styles.scrollView}>
        <RadioButton.Group
          onValueChange={(value) => {
            setSelection(value);
            navigation.navigate('Education');
          }}
          value={selection}>
          {ethnicityOptions.map((child, index) => (
            <RadioButton.Item
              key={index}
              label={child.label}
              value={child.value}
            />
          ))}
        </RadioButton.Group>
      </ScrollView>
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
    paddingTop: 100,
    //flexGrow: 2,
  },
  scrollView: {
    //flex: 1,
    padding: 20,
    //borderWidth: 2,
    //borderColor: 'white',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  ButtonLabel: {
    fontSize: 22,
  },
});

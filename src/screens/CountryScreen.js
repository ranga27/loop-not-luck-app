import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Text} from 'react-native-paper';
import {RadioGroup} from '../components/RadioGroup';
const countryOptions = ['Yes', 'No'];

export default function CountryScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Do you live in the United Kingdom?</Title>
      <Text style={styles.info}>
        If no, please let us know where in the 'other' section
      </Text>
      <RadioGroup
        options={countryOptions}
        nextScreen={'Step3'}
        navigation={navigation}
        field={'country'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

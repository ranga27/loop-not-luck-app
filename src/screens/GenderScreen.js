import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Text} from 'react-native-paper';
import genderOptions from '../constants/genderOptions';
import {RadioGroup} from '../components/RadioGroup';

export default function GenderScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Gender Identity</Title>
      <Text style={styles.info}>
        If your gender is not stated below, please feel free to include it in
        the 'other' section. As with all data in this application form, personal
        information will not be shared with third parties and will be
        anonymised.
      </Text>
      <RadioGroup
        options={genderOptions}
        nextScreen={'Step2'}
        navigation={navigation}
        field={'gender'}
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

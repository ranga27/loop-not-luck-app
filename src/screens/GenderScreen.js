import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Title, Text} from 'react-native-paper';

import FormButton from '../components/FormButton';
import genderOptions from '../constants/genderOptions';

export default function GenderScreen({navigation}) {
  const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Gender Identity</Title>
      <Text style={styles.info}>
        If your gender is not stated below, please feel free to include it in
        the 'other' section. As with all data in this application form, personal
        information will not be shared with third parties and will be
        anonymised.
      </Text>
      <RadioButton.Group
        onValueChange={(value) => setGender(value)}
        value={gender}>
        {genderOptions.map((option, index) => (
          <RadioButton.Item key={index} label={option} value={option} />
        ))}
      </RadioButton.Group>
      <FormButton
        title="Next"
        modeValue="contained"
        labelStyle={styles.ButtonLabel}
        onPress={() => navigation.navigate('Step2', {gender: gender})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
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

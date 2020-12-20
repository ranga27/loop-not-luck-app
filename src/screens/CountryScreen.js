import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Title, Text} from 'react-native-paper';

import FormButton from '../components/FormButton';

export default function CountryScreen({navigation, route}) {
  const [country, setCountry] = useState('');
  const {gender} = route.params;
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Do you live in the United Kingdom?</Title>
      <Text style={styles.info}>
        If no, please let us know where in the 'other' section
      </Text>
      <RadioButton.Group
        onValueChange={(value) => setCountry(value)}
        value={country}>
        <RadioButton.Item label="Yes" value="yes" />
        <RadioButton.Item label="Other" value="other" />
      </RadioButton.Group>
      <FormButton
        title="Next"
        modeValue="contained"
        labelStyle={styles.ButtonLabel}
        onPress={() =>
          navigation.navigate('Step3', {gender: gender, country: country})
        }
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

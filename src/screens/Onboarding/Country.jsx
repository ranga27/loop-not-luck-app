import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Text, RadioButton} from 'react-native-paper';
import {countryOptions} from '../../constants';
import useValueChange from '../../hooks/useValueChange';

export const Country = ({navigation}) => {
  const [selection, setSelection] = useState('');
  const [showCountries, setShowCountries] = useState(false);
  const [otherValue, setOtherValue] = useState(false);
  useValueChange(selection, 'country');
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Do you live in the United Kingdom?</Title>
      <Text style={styles.info}>If not, please let us know where.</Text>
      <RadioButton.Group
        onValueChange={(value) => {
          setSelection(value);
          showCountries(value != 'Citizen');
          if (value != 'Citizen') navigation.navigate('Ethnicity');
        }}
        value={selection}>
        {countryOptions.map((child, index) => (
          <RadioButton.Item
            key={index}
            label={child.label}
            value={child.value}
          />
        ))}
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

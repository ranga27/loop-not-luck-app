import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {RadioButton, Title} from 'react-native-paper';

import FormButton from '../components/FormButton';
import ethnicityOptions from '../constants/ethnicityOptions';

export default function EthnicityScreen({navigation, route}) {
  const [ethnicity, setEthnicity] = useState('');
  const {gender} = route.params;
  const {country} = route.params;

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>What is your ethnicity?</Title>
      <View style={{flex: 3, marginVertical: 20}}>
        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 20}}>
          <ScrollView style={styles.scrollView}>
            <RadioButton.Group
              onValueChange={(value) => setEthnicity(value)}
              value={ethnicity}>
              {ethnicityOptions.map((option, index) => (
                <RadioButton.Item key={index} label={option} value={option} />
              ))}
            </RadioButton.Group>
          </ScrollView>
        </View>
      </View>
      <FormButton
        title="Next"
        modeValue="contained"
        labelStyle={styles.ButtonLabel}
        onPress={() =>
          navigation.navigate('Step4', {
            gender: gender,
            country: country,
            ethnicity: ethnicity,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 100,
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    margin: 20,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  ButtonLabel: {
    fontSize: 22,
  },
});

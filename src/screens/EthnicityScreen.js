import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import ethnicityOptions from '../constants/ethnicityOptions';
import {RadioGroup} from '../components/RadioGroup';

export default function EthnicityScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>What is your ethnicity?</Title>
      <ScrollView style={styles.scrollView}>
        <RadioGroup
          options={ethnicityOptions}
          nextScreen={'Step4'}
          navigation={navigation}
          field={'ethnicity'}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginBottom: 30,
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

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Text} from 'react-native-paper';
import {RadioGroup} from '../components/RadioGroup';

const disabilityOptions = ['Yes', 'No'];
export const Disability = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>
        Do you consider yourself to have a disability?
      </Title>
      <Text style={styles.info}>
        This information will not be shared with potential employers without
        your consent.
      </Text>
      <RadioGroup
        options={disabilityOptions}
        nextScreen={'Profile'}
        navigation={navigation}
        field={'disability'}
      />
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
    paddingHorizontal: 50,
  },
  info: {
    textAlign: 'justify',
    padding: 20,
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

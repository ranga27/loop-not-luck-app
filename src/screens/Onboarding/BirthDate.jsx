import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import useValueChange from '../../hooks/useValueChange';
import {InputField} from '../../components';

export const BirthDate = ({navigation}) => {
  const [selection, setSelection] = useState('');
  const [birthDate, setBirthDate] = useState('');
  useValueChange(selection, 'birthDate');
  return (
    <View style={styles.container}>
      <Text style={styles.info}>What is your date of birth?</Text>
      <InputField
        label="dd/mm/yyyy"
        onChangeText={(value) => setBirthDate(value)}
      />
      <IconButton
        icon="chevron-right"
        size={30}
        style={styles.navButton}
        onPress={() => {
          setSelection(birthDate);
          navigation.navigate('Country');
        }}
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

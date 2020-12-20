import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Title, Text} from 'react-native-paper';

import FormButton from '../components/FormButton';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';

export default function DisabilityScreen({navigation, route}) {
  const [disability, setDisability] = useState('');
  const {gender} = route.params;
  const {country} = route.params;
  const {ethnicity} = route.params;
  const {user} = useContext(AuthContext);

  const handleButtonPress = async () => {
    const selectedOptions = {
      gender,
      country,
      ethnicity,
      disability,
    };
    await firestore().collection('users').doc(user.uid).update(selectedOptions);
  };
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>
        Do you consider yourself to have a disability?
      </Title>
      <Text style={styles.info}>
        This information will not be shared with potential employers without
        your consent.
      </Text>
      <RadioButton.Group
        onValueChange={(value) => setDisability(value)}
        value={disability}>
        <RadioButton.Item label="Yes" value="yes" />
        <RadioButton.Item label="No" value="no" />
      </RadioButton.Group>
      <FormButton
        title="Submit"
        modeValue="contained"
        labelStyle={styles.ButtonLabel}
        onPress={() => handleButtonPress()}
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

import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Loop Not Luck</Title>

      <FormButton
        title="Login"
        modeValue="contained"
        labelStyle={styles.ButtonLabel}
        onPress={() => navigation.navigate('Login')}
      />
      <FormButton
        title="Signup"
        modeValue="contained"
        labelStyle={styles.ButtonLabel}
        onPress={() => navigation.navigate('Signup')}
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  ButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
});

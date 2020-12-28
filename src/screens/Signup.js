import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, IconButton, Checkbox} from 'react-native-paper';
import {FormInput, FormButton} from '../components';
import {AuthContext} from '../navigation/AuthProvider';

export const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState(false);

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Register</Title>
      <FormInput
        labelName="First Name"
        value={firstName}
        autoCapitalize="none"
        onChangeText={(userFirstName) => setFirstName(userFirstName)}
      />
      <FormInput
        labelName="Last Name"
        value={lastName}
        autoCapitalize="none"
        onChangeText={(userLastName) => setLastName(userLastName)}
      />
      <FormInput
        labelName="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(userEmail) => setEmail(userEmail)}
      />

      <FormInput
        labelName="Phone Number"
        value={phone}
        autoCapitalize="none"
        onChangeText={(userPhone) => setPhone(userPhone)}
      />
      <FormInput
        labelName="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <Checkbox.Item label="T&C" status="checked" />

      <FormButton
        title="Signup"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
        onPress={() => register(email, password, firstName, lastName, phone)}
      />

      <IconButton
        icon="keyboard-backspace"
        size={30}
        style={styles.navButton}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

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
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
});

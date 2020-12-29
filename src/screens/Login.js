import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {TextInput, Button} from '../components';
import {AuthContext} from '../utils';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Existing Users</Title>
      <TextInput
        labelName="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <TextInput
        labelName="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <Button
        title="Login"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
        onPress={() => login(email, password)}
      />
      <Button
        title="New user? Join here"
        modeValue="text"
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.navigate('Signup')}
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
    fontSize: 15,
  },
});

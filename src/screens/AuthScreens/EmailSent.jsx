import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {Button} from '../../components';
import {theme} from '../../constants';
import {signOutFirebase} from '../../firebase/authService';

export const EmailSent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>
        Verification email sent, please check your email!
      </Title>
    </View>
  );
};
async function handleSignOut() {
  try {
    await signOutFirebase();
    navigation.navigate('Login');
  } catch (error) {
    console.error(error.message);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    color: theme.colors.primary,
    textAlign: 'center',
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
  ButtonLabel: {
    fontSize: 20,
  },
});

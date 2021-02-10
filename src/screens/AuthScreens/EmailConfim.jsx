import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title} from 'react-native-paper';
import {Button} from '../../components';
import {signOutFirebase} from '../../firebase/authService';
import {theme} from '../../constants';

export const EmailConfirm = ({navigation}) => {
  const handleSignOut = async () => {
    try {
      await signOutFirebase();
      navigation.navigate('Login');
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>
        Email verified! please login to continue
      </Title>
      <Button
        modeValue="contained"
        title="Login"
        labelStyle={styles.ButtonLabel}
        onPress={() => handleSignOut()}
      />
    </View>
  );
};

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

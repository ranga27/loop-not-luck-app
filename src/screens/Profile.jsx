import React from 'react';
import {theme} from '../constants';
import {StyleSheet, View} from 'react-native';
import {Button} from '../components';
import {signOutFirebase} from '../firebase/authService';
import crashlytics from '@react-native-firebase/crashlytics';

export const Profile = ({navigation}) => {
  const handleSignOut = async () => {
    try {
      await signOutFirebase();
    } catch (error) {
      console.log(error.message);
      crashlytics().recordError(error);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Button
          title="Profile"
          modeValue="contained"
          labelStyle={styles.ButtonLabel}
          onPress={() => navigation.navigate('Gender')}
        />
        <Button
          modeValue="contained"
          title="Logout"
          labelStyle={styles.ButtonLabel}
          onPress={() => handleSignOut()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: theme.fonts.regular.fontFamily,
  },
  ButtonLabel: {
    fontSize: 20,
  },
});

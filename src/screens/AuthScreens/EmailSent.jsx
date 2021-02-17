import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {Button} from '../../components';
import {theme} from '../../constants';
import {signOutFirebase} from '../../firebase/authService';
import auth from '@react-native-firebase/auth';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {URL, URLSearchParams} from 'react-native-url-polyfill';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const EmailSent = ({navigation}) => {
  const handleDynamicLink = async (link) => {
    // Check and handle if the link is a email login link
    const mode = getURLParam(link.url, 'mode');
    if (mode === 'verifyEmail') {
      try {
        //Extract verification code
        const oobCode = getURLParam(link.url, 'oobCode');
        await auth()
          .applyActionCode(oobCode)
          .then((resp) => {
            console.log('Email Address verified');
            auth()
              .currentUser.getIdToken(true)
              .then(() => {
                auth()
                  .currentUser.reload()
                  .then(() => {
                    if (auth().currentUser.emailVerified)
                      navigation.navigate('EmailConfirm');
                  });
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => {
            if (error.code == 'auth/invalid-action-code')
              console.log(
                'The code is expired, or has already been used. Please verify your email address again',
              );
          });
      } catch (e) {
        console.log(error);
      } finally {
      }
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    /* When the app is not running and is launched by a magic link the `onLink` method won't fire, we can handle the app being launched by a magic link like this */
    dynamicLinks()
      .getInitialLink()
      .then((link) => link && handleDynamicLink(link));
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>
        Verification email sent, please check your email!
      </Title>
    </View>
  );
};
const getURLParam = (urlString, param) => {
  const url = new URL(urlString);
  const params = new URLSearchParams(url.search);
  return params.get(param) || '';
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

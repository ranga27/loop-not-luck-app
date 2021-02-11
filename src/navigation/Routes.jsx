import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {theme} from '../constants';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {EmailVerifyNavigator} from './EmailVerifyNavigator';

/**
 * We check here if the user is logged in or not
 */
export const Routes = () => {
  const {authenticated, currentUser} = useSelector((state) => state.auth);

  // Show email sent message when user created, verification email sent but not verified
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="light-content" />
      {authenticated ? (
        currentUser.emailVerified ? (
          <AppNavigator />
        ) : (
          <EmailVerifyNavigator />
        )
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from '../constants';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {EmailVerifyNavigator} from './EmailVerifyNavigator';
import {ResetPasswordNavigator} from './ResetPasswordNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingNavigator} from './OnboardingNavigator';
const AuthStack = createStackNavigator();

/**
 * We check here the auth state of the user
 */
export const Routes = () => {
  const {authenticated, currentUser, resetPassword} = useSelector(
    (state) => state.auth,
  );

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="light-content" />
      <AuthStack.Navigator headerMode="none">
        {authenticated ? (
          currentUser.emailVerified ? (
            currentUser.profileComplete ? (
              <AuthStack.Screen name="App" component={AppNavigator} />
            ) : (
              <AuthStack.Screen
                name="Onboarding"
                component={OnboardingNavigator}
              />
            )
          ) : (
            <AuthStack.Screen
              name="EmailVerify"
              component={EmailVerifyNavigator}
            />
          )
        ) : resetPassword ? (
          <AuthStack.Screen
            name="ResetPassword"
            component={ResetPasswordNavigator}
          />
        ) : (
          <AuthStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

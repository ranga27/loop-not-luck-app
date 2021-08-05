import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from '../constants';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';
import {useSelector} from 'react-redux';
import {EmailVerifyNavigator} from './EmailVerifyNavigator';
import {ResetPasswordNavigator} from './ResetPasswordNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingNavigator} from './OnboardingNavigator';
import {Loading} from '../screens';

const AuthStack = createStackNavigator();

export const Routes = () => {
  const {authenticated, currentUser, resetPassword} = useSelector(
    (state) => state.auth,
  );
  const {currentUserProfile} = useSelector((state) => state.profile);

  return (
    <NavigationContainer theme={theme}>
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        {authenticated ? (
          currentUser.emailVerified ? (
            currentUserProfile ? (
              currentUserProfile.profileComplete ? (
                <AuthStack.Screen name="App" component={AppNavigator} />
              ) : (
                <AuthStack.Screen
                  name="OnboardingNav"
                  component={OnboardingNavigator}
                />
              )
            ) : (
              <AuthStack.Screen name="Loading" component={Loading} />
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

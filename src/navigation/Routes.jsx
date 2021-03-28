import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from '../constants';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {EmailVerifyNavigator} from './EmailVerifyNavigator';
import {ResetPasswordNavigator} from './ResetPasswordNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingNavigator} from './OnboardingNavigator';
import {loadCurrentUserProfile} from '../redux/profileActions';
import {Loading} from '../screens';

const AuthStack = createStackNavigator();

export const Routes = () => {
  const [isLoading, setLoading] = useState(false);
  const {authenticated, currentUser, resetPassword} = useSelector(
    (state) => state.auth,
  );
  const {currentUserProfile} = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  /*  const getUserProfile = () => dispatch(loadCurrentUserProfile());

   useEffect(() => {
    if (authenticated && !currentUserProfile) {
      getUserProfile();
    }
  }, []); */

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="light-content" />
      <AuthStack.Navigator headerMode="none">
        {authenticated ? (
          currentUser.emailVerified ? (
            currentUserProfile ? (
              currentUserProfile.profileComplete ? (
                <AuthStack.Screen name="App" component={AppNavigator} />
              ) : (
                <AuthStack.Screen
                  name="Onboarding"
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

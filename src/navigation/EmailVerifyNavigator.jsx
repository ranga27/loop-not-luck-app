import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup, Welcome} from '../screens';
import {ForgotPassword} from '../screens/AuthScreens/ForgotPassword';
import {useSelector} from 'react-redux';
import {EmailConfirm} from '../screens/AuthScreens/EmailConfim';
import {EmailSent} from '../screens/AuthScreens/EmailSent';

const Stack = createStackNavigator();

export const EmailVerifyNavigator = () => {
  const {currentUser} = useSelector((state) => state.auth);
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="EmailSent" component={EmailSent} />
      <Stack.Screen name="EmailConfirm" component={EmailConfirm} />
    </Stack.Navigator>
  );
};

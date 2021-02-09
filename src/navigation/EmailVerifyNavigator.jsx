import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup, Welcome} from '../screens';
import {ForgotPassword} from '../screens/AuthScreens/ForgotPassword';
import {useSelector} from 'react-redux';
import {EmailConfirm} from '../screens/AuthScreens/EmailConfim';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  const {currentUser} = useSelector((state) => state.auth);
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Email Sent" component={EmailConfirm} />
      <Stack.Screen name="Email Confirm" component={EmailConfirm} />
    </Stack.Navigator>
  );
};

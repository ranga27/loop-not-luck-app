import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup, Welcome} from '../screens';
import {ForgotPassword} from '../screens/AuthScreens/ForgotPassword';
import {useSelector} from 'react-redux';
import {EmailSent} from '../screens/AuthScreens/EmailSent';
import {EmailConfirm} from '../screens/AuthScreens/EmailConfim';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  const {currentUser} = useSelector((state) => state.auth);
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={ForgotPassword} />
      <Stack.Screen name="EmailSent" component={EmailSent} />
      <Stack.Screen name="EmailConfirm" component={EmailConfirm} />
    </Stack.Navigator>
  );
};

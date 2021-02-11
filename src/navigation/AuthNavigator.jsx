import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup, Welcome} from '../screens';
import {ForgotPassword} from '../screens/AuthScreens/ForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

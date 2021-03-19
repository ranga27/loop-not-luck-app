import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EmailConfirm} from '../screens/AuthScreens/EmailConfim';
import {EmailSent} from '../screens/AuthScreens/EmailSent';

const Stack = createStackNavigator();

export const EmailVerifyNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="EmailSent" component={EmailSent} />
      <Stack.Screen name="EmailConfirm" component={EmailConfirm} />
    </Stack.Navigator>
  );
};

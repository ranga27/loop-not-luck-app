import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ResetPasswordChange} from '../screens/AuthScreens/ResetPasswordChange';
import {ResetPasswordSent} from '../screens/AuthScreens/ResetPasswordSent';
import {ResetPasswordConfirm} from '../screens/AuthScreens/ResetPasswordConfirm';

const Stack = createStackNavigator();

export const ResetPasswordNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ResetPasswordSent" component={ResetPasswordSent} />
      <Stack.Screen
        name="ResetPasswordChange"
        component={ResetPasswordChange}
      />
      <Stack.Screen
        name="ResetPasswordConfirm"
        component={ResetPasswordConfirm}
      />
    </Stack.Navigator>
  );
};

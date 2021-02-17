import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {ResetPasswordChange} from '../screens/AuthScreens/ResetPasswordChange';
import {ResetPasswordSent} from '../screens/AuthScreens/ResetPasswordSent';
import {ResetPasswordConfirm} from '../screens/AuthScreens/ResetPasswordConfirm';

const Stack = createStackNavigator();

export const ResetPasswordNavigator = () => {
  const {currentUser} = useSelector((state) => state.auth);
  return (
    <Stack.Navigator headerMode="none">
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

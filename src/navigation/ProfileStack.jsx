import React from 'react';
import {theme} from '../constants/theme';
import {createStackNavigator} from '@react-navigation/stack';
import {CareerInterest, Profile} from '../screens';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerStyle: {
          backgroundColor: theme.colors.background,
          shadowColor: theme.colors.background,
        },
      }}>
      <Stack.Screen name="Career" component={CareerInterest} />
      <Stack.Screen name="Settings" component={Profile} />
    </Stack.Navigator>
  );
};

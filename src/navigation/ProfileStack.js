import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile, Country, Disability, Ethnicity, Gender} from '../screens';
/**
 * This will provide access to screens
 * only when the user is logged in
 */

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Country" component={Country} />
      <Stack.Screen name="Ethnicity" component={Ethnicity} />
      <Stack.Screen name="Disability" component={Disability} />
    </Stack.Navigator>
  );
};

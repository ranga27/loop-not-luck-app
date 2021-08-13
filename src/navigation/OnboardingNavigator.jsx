import React from 'react';
import {theme} from '../constants/theme';
import {createStackNavigator} from '@react-navigation/stack';
import {QuestionnaireLanding, Onboarding} from '../screens';

const Stack = createStackNavigator();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="QuestionnaireLanding"
        component={QuestionnaireLanding}
      />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

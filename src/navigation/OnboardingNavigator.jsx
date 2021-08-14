import React from 'react';
import {theme} from '../constants/theme';
import {createStackNavigator} from '@react-navigation/stack';
import {
  QuestionnaireLanding,
  Onboarding,
  StageTwoEnd,
  Reject,
} from '../screens';

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
      <Stack.Screen name="StageTwoEnd" component={StageTwoEnd} />
      <Stack.Screen name="Reject" component={Reject} />
    </Stack.Navigator>
  );
};

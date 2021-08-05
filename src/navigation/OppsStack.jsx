import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OppsDetails, MyLoop, OppsList, TestPage} from '../screens';
import {theme} from '../constants/theme';

const Stack = createStackNavigator();

export const OppsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyLoop"
        component={TestPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OppsList"
        component={OppsList}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.background,
            shadowColor: theme.colors.background,
          },
        }}
      />
      <Stack.Screen
        name="OppsDetails"
        component={OppsDetails}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.background,
            shadowColor: theme.colors.background,
          },
        }}
      />
    </Stack.Navigator>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Opps, OppsDetails, MyLoop} from '../screens';
import {theme} from '../constants/theme';

const Stack = createStackNavigator();

export const OppsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyLoop"
        component={MyLoop}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Opps"
        component={Opps}
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
        name="DetailScreen"
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

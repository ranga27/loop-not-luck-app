import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Opps, OppsDetails, MyLoop} from '../screens';
import {theme} from '../constants/theme';

const Stack = createSharedElementStackNavigator();

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
          headerTitle: false,
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
          headerTitle: false,
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

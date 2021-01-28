import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {createStackNavigator} from '@react-navigation/stack';
import {Opportunities, DetailScreen} from '../screens';

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};
export const OppsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Opportunities" headerMode="none">
      <Stack.Screen name="Opportunities" component={Opportunities} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={() => options}
      />
    </Stack.Navigator>
  );
};

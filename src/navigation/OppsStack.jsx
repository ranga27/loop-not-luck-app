import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
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
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Opportunities" component={Opportunities} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={() => options}
      />
    </Stack.Navigator>
  );
};

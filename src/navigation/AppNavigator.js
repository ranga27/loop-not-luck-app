import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Opportunities, Settings} from '../screens';
import {theme} from '../constants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Opportunities" component={Opportunities} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: theme.fonts.regular.fontFamily,
        },
        headerTintColor: theme.colors.primary,
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen
        name="Home"
        component={MainTabNavigator}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
};

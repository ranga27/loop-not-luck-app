import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {theme} from '../constants';
import {Saved, SavedDetails, Bookmarked} from '../screens';

const Tab = createMaterialTopTabNavigator();
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
export const BookmarkTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: theme.fonts.regular.fontFamily,
        },
        tabBarStyle: {paddingTop: 40},
      }}>
      <Tab.Screen name="Saved" component={SavedStackScreen} />
      <Tab.Screen name="Applied" component={Bookmarked} />
    </Tab.Navigator>
  );
};

const SavedStack = createStackNavigator();

function SavedStackScreen() {
  return (
    <SavedStack.Navigator screenOptions={{headerShown: false}}>
      <SavedStack.Screen name="SavedScreen" component={Saved} />
      <SavedStack.Screen name="SavedDetails" component={SavedDetails} />
    </SavedStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

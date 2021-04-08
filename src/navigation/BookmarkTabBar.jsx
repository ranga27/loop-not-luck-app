import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {theme} from '../constants';
import {Saved, SavedDetails, Applied, AppliedDetails} from '../screens';

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
      <Tab.Screen name="Applied" component={AppliedOppsStackScreen} />
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

const AppliedOppsStack = createStackNavigator();

function AppliedOppsStackScreen() {
  return (
    <AppliedOppsStack.Navigator screenOptions={{headerShown: false}}>
      <AppliedOppsStack.Screen name="AppliedScreen" component={Applied} />
      <AppliedOppsStack.Screen
        name="AppliedDetails"
        component={AppliedDetails}
      />
    </AppliedOppsStack.Navigator>
  );
}

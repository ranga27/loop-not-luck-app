import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../constants';
import {Saved, SavedDetailScreen, Bookmarked} from '../screens';

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
      <Tab.Screen name="Saved" component={Saved} />

      <Tab.Screen name="Applied" component={Bookmarked} />
      {/*       <Tab.Screen
        name="SavedDetailScreen"
        component={SavedDetailScreen}
        options={() => options}
      /> */}
    </Tab.Navigator>
  );
};

import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notifications, Saved} from '../screens';
import {ProfileStack} from './ProfileStack';
import {OppsStack} from './OppsStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../constants';
import {BookMarkStack} from './BookMarkStack';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
export const AppNavigator = () => {
  const {bookmarks} = useSelector((state) => state.books);
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          margin: 0,
          padding: 0,
          fontFamily: theme.fonts.regular.fontFamily,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          //replace using switch case
          if (route.name === 'My Loop') {
            iconName = focused ? 'radio-button-on' : 'radio-button-on-outline';
          } else if (route.name === 'Opportunities') {
            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Opportunities"
        component={BookMarkStack}
        options={{
          tabBarBadge: bookmarks.length,
        }}
      />
      <Tab.Screen name="My Loop" component={OppsStack} />
      <Tab.Screen name="Profile" component={ProfileStack}  />
    </Tab.Navigator>
  );
};

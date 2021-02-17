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
          if (route.name === 'Opportunities') {
            iconName = focused ? 'business' : 'business-outline';
          } else if (route.name === 'Saved') {
            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Opportunities" component={OppsStack} />
      <Tab.Screen
        name="Saved"
        component={BookMarkStack}
        options={{
          tabBarBadge: bookmarks.length,
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

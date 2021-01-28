import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Opportunities} from '../screens';
import {ProfileStack} from './ProfileStack';
import {OppsStack} from './OppsStack';

const Tab = createBottomTabNavigator();

const ProfileNavigator = () => {
  return <ProfileStack />;
};

const OppsNavigator = () => {
  return <OppsStack />;
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Opportunities" component={OppsNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

/*     <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        headerTitleStyle: styles.headerTitleStyle,
        headerTintColor: theme.colors.primary,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Home"
        component={AppTabNavigator}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen name="Gender" component={OnboardStack} />
    </Stack.Navigator> 
    
    
    
    const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: theme.fonts.regular.fontFamily,
  },
});
*/

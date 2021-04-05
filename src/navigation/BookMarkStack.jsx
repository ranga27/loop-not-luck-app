import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Saved, SavedDetailScreen, Bookmarked} from '../screens';

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
export const BookMarkStack = () => {
  return (
    <Stack.Navigator initialRouteName="Bookmarked" headerMode="none">
      <Stack.Screen name="Bookmarked" component={Bookmarked} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen
        name="SavedDetailScreen"
        component={SavedDetailScreen}
        options={() => options}
      />
    </Stack.Navigator>
  );
};

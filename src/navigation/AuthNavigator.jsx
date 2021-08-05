import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup, Landing} from '../screens';
import {ForgotPassword} from '../screens/AuthScreens/ForgotPassword';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  const {authRoute} = useSelector((state) => state.auth);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={authRoute}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

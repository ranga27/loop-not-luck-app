import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GenderScreen from '../screens/GenderScreen';
import CountryScreen from '../screens/CountryScreen';
import EthnicityScreen from '../screens/EthnicityScreen';
import DisabilityScreen from '../screens/DisabilityScreen';

/**
 * This will provide access to screens
 * only when the user is logged in
 */

const ModalStack = createStackNavigator();
const StepsStack = createStackNavigator();

export default function OnboardStack() {
  return (
    <StepsStack.Navigator headerMode="none">
      <StepsStack.Screen name="Home" component={HomeScreen} />
      <StepsStack.Screen name="Step1" component={GenderScreen} />
      <StepsStack.Screen name="Step2" component={CountryScreen} />
      <StepsStack.Screen name="Step3" component={EthnicityScreen} />
      <StepsStack.Screen name="Step4" component={DisabilityScreen} />
    </StepsStack.Navigator>
  );
}

import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthStack} from './AuthStack';
import {OnboardStack} from './OnboardStack';
import {AuthContext} from './AuthProvider';
import {Loading} from '../components';
import {theme} from '../constants';

/**
 * We check here if the user is logged in or not
 */

export const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    console.log(`Currently logged in user: ${user}`);
    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={theme}>
      {user ? <OnboardStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

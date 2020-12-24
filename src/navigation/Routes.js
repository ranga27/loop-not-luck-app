import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import OnboardStack from './OnboardStack';
import {AuthContext} from './AuthProvider';
import Loading from '../components/Loading';
import theme from '../constants/theme';

/**
 * We check here if the user is logged in or not
 */

export default function Routes() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

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
}

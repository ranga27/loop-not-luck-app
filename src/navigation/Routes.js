import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../utils';
import {Loading} from '../components';
import {theme} from '../constants';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';
import {StatusBar} from 'react-native';
import {verifyAuth} from '../redux/authActions';
import {useSelector} from 'react-redux';

/**
 * We check here if the user is logged in or not
 */

export const Routes = () => {
  const {authenticated, currentUser} = useSelector((state) => state.auth);

  /*   const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    console.log(`Currently logged in user: ${user}`);
    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  }; */

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="light-content" />
      {authenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

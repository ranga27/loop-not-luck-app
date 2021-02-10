import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {theme} from '../constants';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {URL, URLSearchParams} from 'react-native-url-polyfill';
import {EmailSent} from '../screens/AuthScreens/EmailSent';
import {EmailConfirm} from '../screens/AuthScreens/EmailConfim';
/**
 * We check here if the user is logged in or not
 */
export const Routes = () => {
  const {authenticated, currentUser} = useSelector((state) => state.auth);
  const [refreshed, setRefreshed] = useState(false);
  const handleDynamicLink = async (link) => {
    // Check and handle if the link is a email login link
    const mode = getURLParam(link.url, 'mode');
    if (mode === 'verifyEmail') {
      try {
        //Extract verification code
        const oobCode = getURLParam(link.url, 'oobCode');
        await auth()
          .applyActionCode(oobCode)
          .then((resp) => {
            // Email address has been verified.
            // TODO: Display a confirmation message to the user. Provide the user with a link back to home page.
            // TODO: If a continue URL is available, display a button which on click redirects the user back to the app via continueUrl with additional state determined from that URL's parameters.
            console.log('Code verified');
            auth()
              .currentUser.getIdToken(true)
              .then(() => {
                console.log('User refreshed');
                setRefreshed(true);
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => {
            // Code is invalid or expired. Ask the user to verify their email address again.
            if (error.code == 'auth/invalid-action-code')
              console.log(
                'The code is expired, or has already been used. Please verify your email address again',
              );
          });
        /* You can now navigate to your initial authenticated screen
            You can also parse the `link.url` and use the `continueurl` param to go to another screen
            The `continueurl` would be the `url` passed to the action code settings */
      } catch (e) {
        console.log(error);
        //setError(e);
      } finally {
        //setLoading(false);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    /* When the app is not running and is launched by a magic link the `onLink` method won't fire, we can handle the app being launched by a magic link like this */
    dynamicLinks()
      .getInitialLink()
      .then((link) => link && handleDynamicLink(link));
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  // Show email sent message when user created, verification email sent but not verified
  if (authenticated && !refreshed && !currentUser.emailVerified) {
    return <EmailSent />;
  } else if (refreshed) {
    return <EmailConfirm />;
  } else
    return (
      <NavigationContainer theme={theme}>
        <StatusBar barStyle="light-content" />
        {authenticated ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
};

const getURLParam = (urlString, param) => {
  const url = new URL(urlString);
  const params = new URLSearchParams(url.search);
  return params.get(param) || '';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    color: theme.colors.primary,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
  ButtonLabel: {
    fontSize: 20,
  },
});

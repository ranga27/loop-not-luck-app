import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notifications, Saved} from '../screens';
import {ProfileStack} from './ProfileStack';
import {OppsStack} from './OppsStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../constants';
import {BookMarkStack} from './BookMarkStack';
import {useSelector} from 'react-redux';
import {EmailConfirm} from '../screens/AuthScreens/EmailConfim';
import {Loading, Button} from '../components';
import auth from '@react-native-firebase/auth';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Title} from 'react-native-paper';
import {URL, URLSearchParams} from 'react-native-url-polyfill';
import {signOutFirebase} from '../firebase/firesbaseService';

const Tab = createBottomTabNavigator();
export const AppNavigator = () => {
  const {bookmarks} = useSelector((state) => state.books);
  const {authenticated, currentUser} = useSelector((state) => state.auth);
  const {loading} = useEmailLinkEffect();

  // Show an overlay with a loading indicator while the email link is processed
  console.log('Email Verified?: ' + currentUser.emailVerified);
  if (!currentUser.emailVerified) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Your email isn't verified yet</Text>
        <Button
          modeValue="contained"
          title="Logout"
          labelStyle={styles.ButtonLabel}
          onPress={() => handleSignOut()}
        />
      </View>
    );
  }
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

          // You can return any component that you like here!
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

const useEmailLinkEffect = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleDynamicLink = async (link) => {
      // Check and handle if the link is a email login link
      const mode = getURLParam(link.url, 'mode');
      console.log('Mode: ' + mode);
      if (mode === 'verifyEmail') {
        setLoading(true);

        try {
          // use the email we saved earlier
          const oobCode = getURLParam(link.url, 'oobCode');
          console.log('OobCode: ' + oobCode);

          await auth()
            .applyActionCode(oobCode)
            .then((resp) => {
              // Email address has been verified.
              // TODO: Display a confirmation message to the user.
              // You could also provide the user with a link back to the app.
              // TODO: If a continue URL is available, display a button which on
              // click redirects the user back to the app via continueUrl with
              // additional state determined from that URL's parameters.
            })
            .catch((error) => {
              // Code is invalid or expired. Ask the user to verify their email address
              // again.
            });

          /* You can now navigate to your initial authenticated screen
            You can also parse the `link.url` and use the `continueurl` param to go to another screen
            The `continueurl` would be the `url` passed to the action code settings */
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      }
    };

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

    /* When the app is not running and is launched by a magic link the `onLink`
        method won't fire, we can handle the app being launched by a magic link like this */
    dynamicLinks()
      .getInitialLink()
      .then((link) => link && handleDynamicLink(link));

    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  return {loading};
};

const getURLParam = (urlString, param) => {
  const url = new URL(urlString);
  const params = new URLSearchParams(url.search);

  return params.get(param) || '';
};

async function handleSignOut() {
  try {
    await signOutFirebase();
  } catch (error) {
    console.log(error.message);
  }
}
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

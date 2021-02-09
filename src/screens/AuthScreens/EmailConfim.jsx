import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Title} from 'react-native-paper';
import {Button} from '../../components';
import {useSelector} from 'react-redux';

export const EmailConfirm = ({navigation}) => {
  const {loading, error} = useEmailLinkEffect();
  // Show an overlay with a loading indicator while the email link is processed
  if (loading || error) {
    return (
      <View style={styles.container}>
        {Boolean(error) && <Text>{error.message}</Text>}
        {loading && <ActivityIndicator />}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>You are verified!</Title>

      <Button
        title="Check Opportunities"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const useEmailLinkEffect = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {authenticated, currentUser} = useSelector((state) => state.auth);
  useEffect(() => {
    const handleDynamicLink = async () => {
      // Check and handle if the link is a email login link
      if (currentUser.emailVerified) {
        setLoading(true);

        try {
          // use the email we saved earlier
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
        method won't fire, we can handle the app being launched by a magic link like this 
    dynamicLinks()
      .getInitialLink()
      .then((link) => link && handleDynamicLink(link));*/

    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  return {error, loading};
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
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
});

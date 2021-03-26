import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {theme} from '../../constants';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {URL, URLSearchParams} from 'react-native-url-polyfill';
import {Button} from '../../components';
import {useDispatch} from 'react-redux';
import {passwordReset, setAuthRoute} from '../../redux/authActions';
import crashlytics from '@react-native-firebase/crashlytics';

export const ResetPasswordSent = ({navigation}) => {
  const dispatch = useDispatch();

  const handleResend = async () => {
    try {
      dispatch(passwordReset());
      dispatch(setAuthRoute('Forgot'));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDynamicLink = async (link) => {
    // Check and handle if the link is a email login link
    const mode = getURLParam(link.url, 'mode');
    if (mode === 'resetPassword') {
      try {
        //Extract verification code
        const oobCode = getURLParam(link.url, 'oobCode');
        navigation.navigate('ResetPasswordChange', {oobCode: oobCode});
      } catch (e) {
        console.log(error);
        crashlytics().recordError(error);
      } finally {
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

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>
        Reset password email sent, please check your inbox! If you haven't
        recevied, request again
      </Title>
      <Button
        modeValue="contained"
        title="Resend"
        labelStyle={styles.ButtonLabel}
        onPress={() => handleResend()}
      />
    </View>
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
    textAlign: 'center',
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

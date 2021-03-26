import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title} from 'react-native-paper';
import {Button} from '../../components';
import {theme} from '../../constants';
import {useDispatch} from 'react-redux';
import {verifyEmail} from '../../redux/authActions';
import crashlytics from '@react-native-firebase/crashlytics';

export const EmailConfirm = ({navigation}) => {
  const dispatch = useDispatch();

  const handleVerifyEmail = () => {
    try {
      dispatch(verifyEmail());
    } catch (error) {
      console.error(error.message);
      crashlytics().recordError(error);
    }
  };
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Email verified! please continue</Title>
      <Button
        modeValue="contained"
        title="Home"
        labelStyle={styles.ButtonLabel}
        onPress={() => handleVerifyEmail()}
      />
    </View>
  );
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
    padding: 20,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  ButtonLabel: {
    fontSize: 20,
  },
});

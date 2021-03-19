import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title} from 'react-native-paper';
import {Button} from '../../components';
import {theme} from '../../constants';
import {useDispatch} from 'react-redux';
import {verifyEmail} from '../../redux/authActions';

export const EmailConfirm = ({navigation}) => {
  const dispatch = useDispatch();

  const handleVerifyEmail = () => {
    try {
      dispatch(verifyEmail());
    } catch (error) {
      console.error(error.message);
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
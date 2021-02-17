import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Title} from 'react-native-paper';
import {Button} from '../../components';
import {theme} from '../../constants';
import {useDispatch} from 'react-redux';
import {passwordReset, setAuthRoute} from '../../redux/authActions';
const {height, width} = Dimensions.get('screen');
import {saveData} from '../../utils/asyncStorage';

export const ResetPasswordConfirm = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      dispatch(passwordReset());
      dispatch(setAuthRoute('Login'));
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Password changed! please login</Title>
      <Button
        modeValue="contained"
        title="Login"
        labelStyle={styles.ButtonLabel}
        onPress={() => handleLogin()}
      />
    </View>
  );
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

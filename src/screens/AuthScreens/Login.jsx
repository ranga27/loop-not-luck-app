import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  InputField,
  Button,
  ErrorMessage,
  Image,
  SafeArea,
  ScrollView,
} from '../../components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import crashlytics from '@react-native-firebase/crashlytics';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {loadCurrentUserProfile} from '../../redux/profileActions';
import {signInWithEmail} from '../../firebase/authService';

const {height, width} = Dimensions.get('screen');

export const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const loadUserDetails = (user) => dispatch(loadCurrentUserProfile(user));

  const handleFormSubmit = async (values, actions) => {
    try {
      const result = await signInWithEmail(values);
      loadUserDetails(result.user);
      actions.setSubmitting(false);
    } catch (error) {
      let errorMessage = '';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Email address is not valid';
          break;
        case 'auth/user-disabled':
          errorMessage = 'User disabled';
          break;
        case 'auth/user-not-found':
          errorMessage = 'User with this email not found';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect passowrd';
          break;
        default:
          errorMessage = 'Login Error, contact us';
      }
      actions.setSubmitting(false);
      actions.setErrors({auth: errorMessage});
      crashlytics().recordError(error);
    }
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .label('Email')
      .email('Enter a valid email')
      .required('Please enter a registered email'),
    password: Yup.string()
      .label('Password')
      .required()
      .min(7, 'Password must have at least 8 characters '),
  });

  return (
    <SafeArea>
      <ScrollView>
        <Image source={require('../../assets/images/logo-white-no-loop.png')} />

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values, actions) => handleFormSubmit(values, actions)}
          validationSchema={loginSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
            isSubmitting,
          }) => (
            <>
              <InputField
                label="Email"
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <ErrorMessage errorValue={touched.email && errors.email} />

              <InputField
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <ErrorMessage errorValue={errors.auth} />
              <Button
                title="Login"
                modeValue="contained"
                labelStyle={styles.loginButtonLabel}
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              />
            </>
          )}
        </Formik>
        <Button
          title="Forgot password?"
          onPress={() => navigation.navigate('Forgot')}
          bgColor={'#2fb3bc'}
        />
        <Button
          title="Register new account"
          onPress={() => navigation.navigate('Signup')}
          bgColor={'#ee2844'}
        />
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  navButtonText: {
    fontSize: 12,
  },
});

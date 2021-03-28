import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {InputField, Button, ErrorMessage} from '../../components';
import {Formik} from 'formik';
import {signInWithEmail} from '../../firebase/authService';
import * as Yup from 'yup';
import crashlytics from '@react-native-firebase/crashlytics';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {loadCurrentUserProfile} from '../../redux/profileActions';

const {height, width} = Dimensions.get('screen');

export const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const loadUserDetails = (creds) => dispatch(loadCurrentUserProfile(creds));

  const handleFormSubmit = async (values, actions) => {
    try {
      loadUserDetails(values);
      actions.setSubmitting(false);
      //navigation.navigate('App');
    } catch (error) {
      actions.setErrors({auth: 'Problem with username or password'});
      actions.setSubmitting(false);
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
    <KeyboardAwareScrollView>
      <View style={styles.container}>
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
          modeValue="text"
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate('Forgot')}
        />
        <Button
          title="New user? Join here"
          modeValue="text"
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 3,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 15,
  },
});

import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Title} from 'react-native-paper';
import {TextInput, Button, ErrorMessage} from '../../components';
import {confirmPasswordReset} from '../../firebase/authService';
import {theme} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';

const {height, width} = Dimensions.get('screen');

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .label('Password')
    .required()
    .min(7, 'Password must have at least 8 characters '),
});

export const ResetPasswordChange = ({route, navigation}) => {
  const dispatch = useDispatch();

  const {oobCode} = route.params;
  const handleFormSubmit = async (values, actions) => {
    try {
      if (await confirmPasswordReset(oobCode, values.password))
        navigation.navigate('ResetPasswordConfirm'),
          actions.setSubmitting(false);
    } catch (error) {
      crashlytics().recordError(error);
      actions.setErrors({auth: error.message});
      actions.setSubmitting(false);
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Title style={styles.titleText}>Choose new Password</Title>
        <Formik
          initialValues={{password: ''}}
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
              <TextInput
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <ErrorMessage errorValue={errors.auth} />
              <Button
                title="Submit"
                modeValue="contained"
                labelStyle={styles.loginButtonLabel}
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              />
            </>
          )}
        </Formik>
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

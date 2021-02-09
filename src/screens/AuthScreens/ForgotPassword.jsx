import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TextInput, Button, ErrorMessage} from '../../components';
import {Formik} from 'formik';
import {signInWithEmail} from '../../firebase/firesbaseService';
import * as Yup from 'yup';
const {width, height} = Dimensions.get('screen');

export const ForgotPassword = ({navigation}) => {
  const handleFormSubmit = async (values, actions) => {
    try {
      await signInWithEmail(values);
      actions.setSubmitting(false);
    } catch (error) {
      actions.setErrors({auth: 'Problem with username or password'});
      actions.setSubmitting(false);
    }
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .label('Email')
      .email('Enter a valid email')
      .required('Please enter a registered email'),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: ''}}
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
              label="Email"
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <ErrorMessage errorValue={touched.email && errors.email} />

            <Button
              title="Reset Password"
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
  },
  loginButtonLabel: {
    fontSize: 16,
  },
  navButtonText: {
    fontSize: 15,
  },
});

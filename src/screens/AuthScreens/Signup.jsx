// TODO: replace formik with react-hook-form smart components
// TODO: use styled components
import {Formik} from 'formik';
import React from 'react';
import {
  InputField,
  Button,
  SafeArea,
  ErrorMessage,
  ScrollView,
  Text,
  Image,
} from '../../components';
import {signupSchema} from '../../constants/signupSchema';
import {registerInFirebase} from '../../firebase/authService';
import crashlytics from '@react-native-firebase/crashlytics';

export const Signup = ({navigation}) => {
  const handleFormSubmit = async (values, actions) => {
    try {
      actions.setSubmitting(false);
      await registerInFirebase(values);
      navigation.navigate('EmailSent');
    } catch (error) {
      //TODO: print user friendly error messages
      actions.setErrors({auth: error.message});
      actions.setSubmitting(false);
      crashlytics().recordError(error);
    }
  };

  return (
    <>
      <Image source={require('../../assets/images/logo-white.png')} />
      <Formik
        initialValues={{
          firstName: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}
        validationSchema={signupSchema}>
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
            <Text type="title" color="#000000">
              Fill in your details below to register for access
            </Text>
            <InputField
              label="First Name"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              errorValue={touched.firstName && errors.firstName}
            />
            <InputField
              label="Email"
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              errorValue={touched.email && errors.email}
            />
            <InputField
              label="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
              errorValue={touched.password && errors.password}
            />
            <ErrorMessage errorValue={errors.auth} />
            <Button
              title="Submit"
              onPress={handleSubmit}
              disabled={!isValid || isSubmitting}
              loading={isSubmitting}
              bgColor="#ffff"
              txtColor="#ee2844"
            />
          </>
        )}
      </Formik>
    </>
  );
};

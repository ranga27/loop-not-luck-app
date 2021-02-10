import {Formik} from 'formik';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, IconButton, Checkbox} from 'react-native-paper';
import {TextInput, Button, ErrorMessage} from '../../components';
import {registerInFirebase} from '../../firebase/authService';
import {signupSchema} from '../../constants/signupValidationSchema';

export const Signup = ({navigation}) => {
  const handleFormSubmit = async (values, actions) => {
    try {
      await registerInFirebase(values);
      actions.setSubmitting(false);
      navigation.navigate('EmailSent');
    } catch (error) {
      actions.setErrors({auth: error.message});
      actions.setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
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
            <Title style={styles.titleText}>Register</Title>
            <TextInput
              label="First Name"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />
            <ErrorMessage errorValue={touched.firstName && errors.firstName} />
            <TextInput
              label="Last Name"
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
            <ErrorMessage errorValue={touched.lastName && errors.lastName} />
            <TextInput
              label="Email"
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <ErrorMessage errorValue={touched.email && errors.email} />

            <TextInput
              label="Phone Number"
              autoCapitalize="none"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
            />
            <ErrorMessage
              errorValue={touched.phoneNumber && errors.phoneNumber}
            />
            <TextInput
              label="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />
            <ErrorMessage errorValue={touched.password && errors.password} />
            <Checkbox.Item label="T&C" status="checked" />
            <ErrorMessage errorValue={errors.auth} />

            <Button
              title="Signup"
              modeValue="contained"
              labelStyle={styles.loginButtonLabel}
              onPress={handleSubmit}
              disabled={!isValid || isSubmitting}
              loading={isSubmitting}
            />
          </>
        )}
      </Formik>
      <IconButton
        icon="keyboard-backspace"
        size={30}
        style={styles.navButton}
        onPress={() => navigation.goBack()}
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

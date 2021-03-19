import {Formik} from 'formik';
import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Alert} from 'react-native';
import {Title, IconButton} from 'react-native-paper';
import {InputField, Button, ErrorMessage, SingleSelect} from '../../components';
import {registerInFirebase} from '../../firebase/authService';
import {signupSchema} from '../../constants/signupValidationSchema';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {channels, societies} from '../../constants';

const {height, width} = Dimensions.get('screen');
export const Signup = ({navigation}) => {
  const [isSocietySelected, setSocietySelected] = useState(false);
  const [isRefereeSelected, setRefreeSelected] = useState(false);
  const [isOtherSelected, setOtherSelected] = useState(false);
  const handleFormSubmit = async (values, actions) => {
    try {
      actions.setSubmitting(false);
      await registerInFirebase(values);
      navigation.navigate('EmailSent');
    } catch (error) {
      actions.setErrors({auth: error.message});
      actions.setSubmitting(false);
    }
  };
  const handleSelectionChange = (value) => {
    setSocietySelected(value === 'Society');
    setRefreeSelected(false);
    setOtherSelected(value === 'Other');
    if (value === 'Word of Mouth') {
      Alert.alert(
        'Word of Mouth',
        "We'd like to thank them. Are you happy to share their name?",
        [
          {
            text: 'No',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => setRefreeSelected(value === 'Word of Mouth'),
          },
        ],
        {cancelable: false},
      );
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Formik
          initialValues={{
            firstName: '',
            email: '',
            phoneNumber: '',
            password: '',
            source: '',
            society: '',
            referee: '',
            other: '',
          }}
          onSubmit={(values, actions) => handleFormSubmit(values, actions)}
          validationSchema={signupSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            isValid,
            touched,
            isSubmitting,
          }) => (
            <>
              <Title style={styles.titleText}>Register</Title>
              <InputField
                label="First Name"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                errorValue={touched.firstName && errors.firstName}
              />
              <InputField
                label="Phone Number"
                autoCapitalize="none"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                errorValue={touched.phoneNumber && errors.phoneNumber}
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
              <SingleSelect
                label="Where did you hear about us?"
                data={channels}
                value={values.source}
                onChange={(value) => {
                  //handleChange not effective on setting value
                  setFieldValue('source', value);
                  handleSelectionChange(value);
                }}
                errorValue={touched.source && errors.source}
              />
              {isSocietySelected && (
                <SingleSelect
                  label="Select Society"
                  data={societies}
                  value={values.society}
                  onChange={handleChange('society')}
                />
              )}
              {isRefereeSelected && (
                <InputField
                  label="Please share their name"
                  onChangeText={handleChange('referee')}
                  onBlur={handleBlur('referee')}
                  value={values.referee}
                />
              )}
              {isOtherSelected && (
                <InputField
                  label="Please populate"
                  onChangeText={handleChange('other')}
                  onBlur={handleBlur('other')}
                  value={values.other}
                />
              )}
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
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 10,
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

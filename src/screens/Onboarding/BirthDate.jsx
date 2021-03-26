import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import useValueChange from '../../hooks/useValueChange';
import {InputField} from '../../components';
import {parse, isDate} from 'date-fns';
import crashlytics from '@react-native-firebase/crashlytics';

const today = new Date();
export const BirthDate = ({navigation}) => {
  const schema = Yup.object({
    dob: Yup.date()
      .label('Date of Birth')
      .required()
      .transform(parseDateString)
      .typeError('Invalid Date')
      .max(new Date('12/12/2011'), 'Invalid Date')
      .min(new Date('12/12/1930'), 'Invalid Date'),
  });
  const handleFormSubmit = (values, actions) => {
    try {
      setSelection(values.dob);
      navigation.navigate('Country');
    } catch (error) {
      actions.setErrors(error.message);
      actions.setSubmitting(false);
      crashlytics().recordError(error);
    }
  };
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'birthDate');
  function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue)
      ? originalValue
      : parse(originalValue, 'dd/MM/yyyy', new Date());
    return parsedDate;
  }
  return (
    <Formik
      initialValues={{dob: ''}}
      validateOnChange={false}
      validationSchema={schema}
      onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
      {({handleChange, handleSubmit, values, errors}) => (
        <View style={styles.container}>
          <Text style={styles.titleText}>What is your date of birth?</Text>
          <InputField
            label="dd/mm/yyyy"
            onChangeText={handleChange('dob')}
            value={values.dob}
            errorValue={errors.dob}
          />
          <IconButton
            icon="chevron-right"
            size={30}
            style={styles.navButton}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
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
  info: {
    textAlign: 'justify',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  ButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
});

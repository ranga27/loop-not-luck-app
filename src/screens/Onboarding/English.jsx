import {Formik} from 'formik';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {ErrorMessage, InputField} from '../../components';
import useValueChange from '../../hooks/useValueChange';
import * as Yup from 'yup';
import crashlytics from '@react-native-firebase/crashlytics';

export const English = ({navigation}) => {
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'english');

  const handleFormSubmit = (values, actions) => {
    try {
      setSelection(values.english);
      navigation.navigate('Maths');
    } catch (error) {
      actions.setErrors(error.message);
      actions.setSubmitting(false);
      crashlytics().recordError(error);
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>What did you get for English GCSE?</Text>
      </View>
      <Formik
        initialValues={{english: ''}}
        validateOnChange={false}
        validationSchema={Yup.object({
          english: Yup.number()
            .label('English grade')
            .required()
            .typeError('Invalid grade'),
        })}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={styles.inputContainer}>
            <InputField
              label="Please specify English grade"
              onChangeText={handleChange('english')}
              value={values.english}
            />
            <ErrorMessage errorValue={errors.english} />

            <IconButton
              icon="chevron-right"
              size={30}
              style={styles.navButton}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    //height: height / 3,
    //borderWidth: 2,
    //borderColor: 'white',
    justifyContent: 'flex-end',
    padding: 20,
    alignItems: 'center',
    //flexGrow: 2,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  inputContainer: {
    flex: 1,
    padding: 20,
    //width: width * 0.8,
    //height: 100,
    //borderWidth: 2,
    //borderColor: 'white',
    //justifyContent: 'flex-end',
    //marginBottom: 10,
    alignItems: 'center',
    //flexGrow: 1,
  },
  navButton: {
    // marginTop: 10,
  },
});

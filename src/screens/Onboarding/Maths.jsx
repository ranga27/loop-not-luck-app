import {Formik} from 'formik';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {ErrorMessage, InputField} from '../../components';
import useValueChange from '../../hooks/useValueChange';
import * as Yup from 'yup';
import crashlytics from '@react-native-firebase/crashlytics';
import {updateUserProfile} from '../../firebase/firestoreService';

export const Maths = ({navigation}) => {
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'maths');

  const handleFormSubmit = async (values, actions) => {
    try {
      setSelection(values.maths);
      await updateUserProfile();
      //navigation.navigate('Country');
    } catch (error) {
      actions.setErrors(error.message);
      actions.setSubmitting(false);
      crashlytics().recordError(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>What did you get for Maths GCSE?</Text>
      </View>
      <Formik
        initialValues={{maths: ''}}
        validateOnChange={false}
        validationSchema={Yup.object({
          maths: Yup.number()
            .label('Maths grade')
            .required()
            .typeError('Invalid grade'),
        })}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={styles.inputContainer}>
            <InputField
              label="Please specify Maths grade"
              onChangeText={handleChange('maths')}
              value={values.maths}
            />
            <ErrorMessage errorValue={errors.maths} />

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

import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {RadioButton, Text, IconButton} from 'react-native-paper';
import useValueChange from '../../hooks/useValueChange';
import {useSelector} from 'react-redux';
import {careerInterestsOptions} from '../../constants';
import {ErrorMessage, InputField} from '../../components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {updateUserProfile} from '../../firebase/firestoreService';
import crashlytics from '@react-native-firebase/crashlytics';

const {height, width} = Dimensions.get('screen');

export const CareerInterest = ({navigation}) => {
  const [selection, setSelection] = useState('');
  const [showOther, setShowOther] = useState(false);
  useValueChange(selection, 'careerInterests  ');
  const handleValueChange = async (value) => {
    setShowOther(value === 'Other');
    if (value != 'Other') {
      setSelection(value);
      await updateUserProfile();
    }
  };
  const handleFormSubmit = async (values, actions) => {
    try {
      setSelection(values.other);
      await updateUserProfile();
    } catch (error) {
      actions.setErrors(error.message);
      actions.setSubmitting(false);
      crashlytics().recordError(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 18}}>
          There are thousands of opportunities out there. To help us find the
          ones most relevant to you - select your area(s) of interest.
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.radioContainer}>
          <RadioButton.Group
            onValueChange={(value) => handleValueChange(value)}
            value={selection}>
            {careerInterestsOptions.map((child, index) => (
              <RadioButton.Item
                key={index}
                label={child.label}
                value={child.value}
              />
            ))}
          </RadioButton.Group>
        </View>
      </ScrollView>
      <Formik
        initialValues={{other: ''}}
        validateOnChange={false}
        validationSchema={Yup.object({
          other: Yup.string().label('Interest').required(),
        })}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={styles.inputContainer}>
            {showOther && (
              <>
                <InputField
                  label="Please specify Interest"
                  onChangeText={handleChange('other')}
                  value={values.other}
                />
                <ErrorMessage errorValue={errors.other} />

                <IconButton
                  icon="chevron-right"
                  size={30}
                  style={styles.navButton}
                  onPress={handleSubmit}
                />
              </>
            )}
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
    //width: width * 0.8,
    //height: 100,
    //borderWidth: 2,
    //borderColor: 'white',
    justifyContent: 'flex-end',
    padding: 20,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 30,
    //borderWidth: 2,
    //borderColor: 'white',
    //flexGrow: 2,
  },
  radioContainer: {
    //flex: 1,
    //height: height / 4,
    paddingHorizontal: 40,
    //flexShrink: 2,
    //borderWidth: 2,
    //borderColor: 'white',
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
});

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text, IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import useValueChange from '../../hooks/useValueChange';
import {ErrorMessage, InputField} from '../../components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import crashlytics from '@react-native-firebase/crashlytics';

export const Gender = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);
  const [selection, setSelection] = useState('');
  const [showOther, setShowOther] = useState(false);
  useValueChange(selection, 'gender');
  const handleFormSubmit = (values, actions) => {
    try {
      setSelection(values.gender);
      navigation.navigate('BirthDate');
    } catch (error) {
      actions.setErrors(error.message);
      actions.setSubmitting(false);
      crashlytics().recordError(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 24}}>
          {currentUserProfile.firstName}, what gender do you identify with?
        </Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => {
            setShowOther(value === 'Other');
            if (value != 'Other') {
              setSelection(value);
              navigation.navigate('BirthDate');
            }
          }}
          value={selection}></RadioButton.Group>
      </View>
      <Formik
        initialValues={{gender: ''}}
        validateOnChange={false}
        validationSchema={Yup.object({
          gender: Yup.string().label('Gender').required(),
        })}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={styles.inputContainer}>
            {showOther && (
              <>
                <InputField
                  label="Please specify"
                  onChangeText={handleChange('gender')}
                  value={values.gender}
                />
                <ErrorMessage errorValue={errors.gender} />

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
    marginBottom: 10,
    alignItems: 'center',
    //flexGrow: 1,
  },
  radioContainer: {
    //flex: 1,
    //width: width * 0.8,
    //height: 100,
    // borderWidth: 2,
    //borderColor: 'white',
    //justifyContent: 'flex-end',
    marginHorizontal: 50,
    //alignItems: 'center',
    //flexGrow: 4,
  },
  inputContainer: {
    flex: 1,
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
    marginTop: 10,
  },
});

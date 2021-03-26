import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Title, Text, RadioButton, IconButton} from 'react-native-paper';
import {ErrorMessage, SingleSelect} from '../../components';
import {countries, countryOptions} from '../../constants';
import useValueChange from '../../hooks/useValueChange';
import * as Yup from 'yup';
import {Formik} from 'formik';
import crashlytics from '@react-native-firebase/crashlytics';

const {height, width} = Dimensions.get('screen');

export const Country = ({navigation}) => {
  const [selection, setSelection] = useState('');
  const [showCountries, setShowCountries] = useState(false);
  const [country, setCountry] = useState('');
  useValueChange(selection, 'country');
  const handleFormSubmit = (values, actions) => {
    try {
      setSelection(values.country);
      navigation.navigate('Ethnicity');
    } catch (error) {
      actions.setErrors(error.message);
      actions.setSubmitting(false);
      crashlytics().recordError(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title style={styles.titleText}>
          Do you live in the United Kingdom?
        </Title>
        <Text style={styles.info}>If not, please let us know where.</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => {
            setShowCountries(value != 'Citizen');
            if (value === 'Citizen') {
              setSelection('UK');
              navigation.navigate('Ethnicity');
            }
          }}
          value={selection}>
          {countryOptions.map((child, index) => (
            <RadioButton.Item
              key={index}
              label={child.label}
              value={child.value}
              style={styles.radioItem}
              labelStyle={{letterSpacing: 0.5}}
            />
          ))}
        </RadioButton.Group>
      </View>
      {showCountries && (
        <Formik
          initialValues={{country: ''}}
          validateOnChange={false}
          validationSchema={Yup.object({
            country: Yup.string().label('Country').required(),
          })}
          onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
          {({handleChange, handleSubmit, values, errors}) => (
            <>
              <View style={styles.selectGroup}>
                <SingleSelect
                  label="I am a citizen of"
                  data={countries}
                  onChange={handleChange('country')}
                  value={values.country}
                  enableSearch
                />
              </View>
              <View style={styles.navButton}>
                <ErrorMessage errorValue={errors.country} />
                <IconButton
                  icon="chevron-right"
                  size={30}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    //flex: 1,
    height: height / 3,
    //borderWidth: 2,
    //borderColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //flexGrow: 2,
  },
  radioContainer: {
    //flex: 1,
    //height: height / 4,
    paddingHorizontal: 30,
    paddingVertical: 10,
    //flexShrink: 2,
    //borderWidth: 2,
    //borderColor: 'white',
  },
  selectGroup: {
    //flex: 1,
    height: height / 10,
    alignItems: 'center',
    //borderWidth: 2,
    //borderColor: 'white',
  },
  navButton: {
    //flex: 1,
    //height: height / 4,
    paddingTop: 10,
    alignItems: 'center',
    //flexGrow: 2,
    //borderWidth: 2,
    //borderColor: 'white',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    paddingHorizontal: 80,
  },
  info: {
    textAlign: 'justify',
    paddingVertical: 20,
  },
  radioItem: {justifyContent: 'center', margin: 5},
});

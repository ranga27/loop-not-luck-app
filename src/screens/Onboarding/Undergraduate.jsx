import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {SingleSelect, ErrorMessage} from '../../components';
import {societies} from '../../constants';
import useValueChange from '../../hooks/useValueChange';
import {useSelector} from 'react-redux';
import * as Yup from 'yup';
import {Formik} from 'formik';
const {height, width} = Dimensions.get('screen');

export const Undergraduate = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);

  const [selection, setSelection] = useState('');
  useValueChange(selection, 'ugUniversity');
  const handleFormSubmit = (values, actions) => {
    try {
      setSelection(values.ugUniversity);
      navigation.navigate('UGCourse');
    } catch (error) {
      actions.setErrors(error.message);
      actions.setSubmitting(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {currentUserProfile.degree === 'Current UG' ? (
          <Text style={{fontSize: 24}}>
            What undergraduate university are you attending?
          </Text>
        ) : (
          <Text style={{fontSize: 24}}>
            What undergraduate university have you attended?
          </Text>
        )}
      </View>
      <Formik
        initialValues={{ugUniversity: ''}}
        validateOnChange={false}
        validationSchema={Yup.object({
          ugUniversity: Yup.string().label('UG University').required(),
        })}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <View style={styles.select}>
              <SingleSelect
                label="Select your UG Univeristy"
                data={societies}
                value={values.ugUniversity}
                onChange={handleChange('ugUniversity')}
                enableSearch
              />
            </View>
            <View style={styles.navButton}>
              <ErrorMessage errorValue={errors.ugUniversity} />
              <IconButton
                icon="chevron-right"
                size={30}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    //width: width * 0.8,
    height: 100,
    //borderWidth: 2,
    //borderColor: 'white',
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'center',
    flexGrow: 4,
  },
  select: {
    flex: 1,
    //width: width * 0.8,
    //borderWidth: 2,
    //borderColor: 'white',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  navButton: {
    //flex: 1,
    //borderWidth: 2,
    //borderColor: 'white',
    flexGrow: 4,
    alignItems: 'center',
  },
});

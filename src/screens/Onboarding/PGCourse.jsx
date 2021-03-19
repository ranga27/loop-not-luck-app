import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {IconButton, RadioButton, Text} from 'react-native-paper';
import {ErrorMessage, SingleSelect} from '../../components';
import {societies} from '../../constants';
import useValueChange from '../../hooks/useValueChange';
import {useSelector} from 'react-redux';
import * as Yup from 'yup';
import {Formik} from 'formik';
const {height, width} = Dimensions.get('screen');
//TODO Merge this component with UGCourse.jsx
export const PGCourse = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'pgCourse');
  const handleFormSubmit = (values, actions) => {
    try {
      setSelection(values.ugCourse);
      navigation.navigate('PGGrade');
    } catch (error) {
      actions.setErrors(error.message);
      actions.setSubmitting(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 24}}>
          What course are you studying at {currentUserProfile.pgUniversity}?
        </Text>
      </View>
      <Formik
        initialValues={{pgCourse: ''}}
        validateOnChange={false}
        validationSchema={Yup.object({
          pgCourse: Yup.string().label('PG Course').required(),
        })}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <View style={styles.select}>
              <SingleSelect
                label="Select your PG Course"
                data={societies}
                value={values.pgCourse}
                onChange={handleChange('pgCourse')}
                enableSearch
              />
            </View>
            <View style={styles.navButton}>
              <ErrorMessage errorValue={errors.pgCourse} />
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
    //height: 100,
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

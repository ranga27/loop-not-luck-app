import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {IconButton, RadioButton, Text} from 'react-native-paper';
import {SingleSelect} from '../../components';
import {societies} from '../../constants';
import useValueChange from '../../hooks/useValueChange';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('screen');

export const UGGrade = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'ugGrade');
  const handleChange = (value) => {
    setSelection(value);
    navigation.navigate('GraduationYear');
  };
  if (currentUserProfile.degree === 'Current UG') {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{fontSize: 24}}>My predicated Grade is a</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton.Group
            onValueChange={(value) => handleChange(value)}
            value={selection}>
            <RadioButton.Item label="1" value="1" />
            <RadioButton.Item label="2:1" value="2:1" />
            <RadioButton.Item label="2:2" value="2:2" />
            <RadioButton.Item label="3rd" value="3rd" />
          </RadioButton.Group>
        </View>
      </View>
    );
  } else
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{fontSize: 24}}>
            What degree classification did you achieve?
          </Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton.Group
            onValueChange={(value) => handleChange(value)}
            value={selection}>
            <RadioButton.Item label="First-Class Honours (1st)" value="1" />
            <RadioButton.Item label="Upper Second-Class Honours" value="2:1" />
            <RadioButton.Item label="Lower Second-Class Honours" value="2:2" />
            <RadioButton.Item label="Third-Class Honours" value="3rd" />
          </RadioButton.Group>
        </View>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: height / 3,
    justifyContent: 'center',
    //  alignItems: 'center',
  },
  titleContainer: {
    //flex: 1,
    //width: width * 0.8,
    //height: 100,
    //borderWidth: 2,
    //borderColor: 'white',
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'center',
  },
  radioContainer: {
    //flex: 1,
    //height: height / 4,
    paddingHorizontal: 70,
    paddingVertical: 10,
    //flexShrink: 2,
    //borderWidth: 2,
    //borderColor: 'white',
  },
});

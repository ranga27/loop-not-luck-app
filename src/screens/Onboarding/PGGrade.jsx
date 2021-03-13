import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {IconButton, RadioButton, Text} from 'react-native-paper';
import {SingleSelect} from '../../components';
import {societies} from '../../constants';
import useValueChange from '../../hooks/useValueChange';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('screen');

export const PGGrade = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'pgGrade');
  const handleChange = (value) => {
    setSelection(value);
    navigation.navigate('PGGradYear');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 24}}>What grade do you expect to achieve?</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => handleChange(value)}
          value={selection}>
          <RadioButton.Item label="Distinction" value="Distinction" />
          <RadioButton.Item label="Merit" value="Merit" />
          <RadioButton.Item label="Pass" value="Pass" />
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

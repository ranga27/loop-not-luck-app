import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {IconButton, RadioButton, Text} from 'react-native-paper';
import useValueChange from '../../hooks/useValueChange';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('screen');

export const PGGradYear = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'pgGraduationYear');
  const handleChange = (value) => {
    setSelection(value);
    navigation.navigate('CareerInterest');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 24}}>My expected graduation year is</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => handleChange(value)}
          value={selection}>
          <RadioButton.Item label="2021" value="2021" />
          <RadioButton.Item label="2022" value="2022" />
          <RadioButton.Item label="2023" value="2023" />
          <RadioButton.Item label="2024" value="2024" />
          <RadioButton.Item label="2025" value="2025" />
          <RadioButton.Item label="2026" value="2026" />
          <RadioButton.Item label="2027" value="2027" />
          <RadioButton.Item label="2028" value="2028" />
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

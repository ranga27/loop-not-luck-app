import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {IconButton, RadioButton, Text} from 'react-native-paper';
import useValueChange from '../../hooks/useValueChange';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('screen');

export const CareerInterest = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'careerInterests  ');
  const handleChange = (value) => {
    setSelection(value);
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 24}}>
          There are thousands of opportunities out there. To help us find the
          ones most relevant to you - select your areas of interest.
        </Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => handleChange(value)}
          value={selection}>
          <RadioButton.Item label="Consultancy" value="Consultancy" />
          <RadioButton.Item label="HR" value="HR" />
          <RadioButton.Item
            label="Financial Services"
            value="Financial Services"
          />
          <RadioButton.Item
            label="Marketing & Sales"
            value="Marketing & Sales"
          />
          <RadioButton.Item label="Real Estate" value="Real Estate" />
          <RadioButton.Item
            label="Business Management"
            value="Business Management"
          />
          <RadioButton.Item
            label="Medicine and Pharmaceuticals"
            value="Medicine and Pharmaceuticals"
          />
          <RadioButton.Item label="Technology" value="Technology" />
          <RadioButton.Item label="Education" value="Education" />
          <RadioButton.Item label="Fashion" value="Fashion" />
          <RadioButton.Item label="Engineering" value="Engineering" />
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
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  radioContainer: {
    //flex: 1,
    //height: height / 4,
    paddingHorizontal: 70,
    paddingTop: 10,
    //flexShrink: 2,
    //borderWidth: 2,
    //borderColor: 'white',
  },
});

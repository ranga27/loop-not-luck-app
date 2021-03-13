import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {IconButton, RadioButton, Text} from 'react-native-paper';
import useValueChange from '../../hooks/useValueChange';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('screen');

export const PGDegree = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'pgDegree  ');
  const handleChange = (value) => {
    setSelection(value);
    navigation.navigate('Postgrad');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 24}}>
          What type of post graduate degree are you studying for?
        </Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => handleChange(value)}
          value={selection}>
          <RadioButton.Item label="MSc/MA" value="MSc/MA" />
          <RadioButton.Item label="PhD" value="PhD" />
          <RadioButton.Item label="MBA" value="MBA" />
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

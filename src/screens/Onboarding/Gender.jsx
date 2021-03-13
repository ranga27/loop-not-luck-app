import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text, IconButton} from 'react-native-paper';
import {genderOptions} from '../../constants/genderOptions';
import {useSelector} from 'react-redux';
import useValueChange from '../../hooks/useValueChange';
import {InputField} from '../../components';

export const Gender = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);
  const [selection, setSelection] = useState('');
  const [showOther, setShowOther] = useState(false);
  const [otherValue, setOtherValue] = useState(false);
  useValueChange(selection, 'gender');

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
          value={selection}>
          {genderOptions.map((child, index) => (
            <RadioButton.Item
              key={index}
              label={child.label}
              value={child.value}
            />
          ))}
        </RadioButton.Group>
      </View>
      <View style={styles.inputContainer}>
        {showOther && (
          <>
            <InputField
              label="Please specify"
              onChangeText={(value) => setOtherValue(value)}
            />
            <IconButton
              icon="chevron-right"
              size={30}
              style={styles.navButton}
              onPress={() => {
                setSelection(otherValue);
                navigation.navigate('BirthDate');
              }}
            />
          </>
        )}
      </View>
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

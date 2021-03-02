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
      <Text style={styles.info}>
        {currentUserProfile.firstName}, what gender do you identify with?
      </Text>
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
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  info: {
    textAlign: 'justify',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  ButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
});

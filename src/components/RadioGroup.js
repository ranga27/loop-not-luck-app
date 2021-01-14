import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import useValueChange from '../hooks/useValueChange';

export const RadioGroup = ({field, options, nextScreen, navigation}) => {
  //TODO: deal with navigation in calling screen & eliminate the use of 'nextScreen' & 'navigation'  variables;
  const [selection, setSelection] = useState('');
  useValueChange(selection, field);
  return (
    <>
      <RadioButton.Group
        onValueChange={(value) => {
          setSelection(value);
          navigation.navigate(nextScreen);
        }}
        value={selection}>
        {options.map((child, index) => (
          <RadioButton.Item key={index} label={child} value={child} />
        ))}
      </RadioButton.Group>
    </>
  );
};

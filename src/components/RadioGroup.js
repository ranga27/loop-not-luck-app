import React, {useState, useContext, useEffect, useRef} from 'react';
import {RadioButton} from 'react-native-paper';
import {AuthContext} from '../navigation/AuthProvider';
import {updateProfile} from '../utils/updateProfile';

const RadioGroup = ({field, options, nextScreen, navigation}) => {
  const [selection, setSelection] = useState('');
  const firstUpdate = useRef(true); // to avoid calling update at first render
  const {user} = useContext(AuthContext);
  const id = user.uid;
  //field to update
  const dataToUpdate = {[field]: selection};
  console.log(dataToUpdate);

  //trigger update only when value of selection is changed
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const handleValueChange = async () => {
      await updateProfile(dataToUpdate, id);
    };
    handleValueChange();
  }, [selection]);
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
export {RadioGroup};

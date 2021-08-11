import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, Dimensions} from 'react-native';
import {Title} from 'react-native-paper';
import {Dropdown as DD} from 'sharingan-rn-modal-dropdown';
import {Text} from '.';
import {theme} from '../constants/theme';
import {ErrorMessage} from './ErrorMessage';

const {width, height} = Dimensions.get('screen');

//TODO: style with styled components
//TODO: Implement onChange
export const Dropdown = ({label, control, data, name, error, ...rest}) => {
  return (
    <>
      <Text type="label">{label}</Text>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <DD
            removeLabel
            textInputPlaceholder="Select Option"
            data={data}
            onChange={(value) => onChange(value)}
            value={value}
            itemTextStyle={styles.itemTextStyle}
            textInputStyle={styles.textInputStyle}
            {...rest}
            mainContainerStyle={styles.mainContainerStyle}
            selectedItemTextStyle={styles.selectedItemTextStyle}
          />
        )}
        name={name}
      />
      <ErrorMessage errorValue={error} />
    </>
  );
};

const styles = StyleSheet.create({
  itemTextStyle: {
    fontFamily: theme.fonts.regular.fontFamily,
  },
  textInputStyle: {
    // height: 40,
    fontFamily: theme.fonts.regular.fontFamily,
  },
  selectedItemTextStyle: {
    color: '#ee2844',
  },
});

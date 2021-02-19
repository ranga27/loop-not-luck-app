import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Dropdown} from 'sharingan-rn-modal-dropdown';
import {theme} from '../constants/theme';

import {ErrorMessage} from './ErrorMessage';
const {width, height} = Dimensions.get('screen');

export const SingleSelect = ({label, ...props}) => {
  return (
    <>
      <Dropdown
        label={label}
        data={props.data}
        mode={'flat'}
        paperTheme={theme}
        mainContainerStyle={styles.dropdownContainer}
        itemTextStyle={styles.dropdownItemText}
        itemContainerStyle={styles.dropdownItemContainer}
        parentDDContainerStyle={styles.dropdownItemContainer}
        selectedItemTextStyle={styles.dropdownSelectedItemText}
        textInputStyle={styles.dropdownTextInput}
        primaryColor={theme.colors.primary}
        {...props}
      />
      <ErrorMessage errorValue={props.errorValue} />
    </>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    margin: 10,
    width: width / 1.4,
    backgroundColor: theme.colors.surface,
  },
  dropdownItemText: {
    fontFamily: theme.fonts.regular.fontFamily,
    color: 'white',
  },
  dropdownTextInput: {
    height: height / 18,
  },
  dropdownItemContainer: {
    backgroundColor: theme.colors.surface,
  },
  dropdownSelectedItemText: {
    color: theme.colors.primary,
  },
});

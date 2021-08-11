import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Title} from 'react-native-paper';
import {onChange} from 'react-native-reanimated';
import {Dropdown} from 'sharingan-rn-modal-dropdown';
import {theme} from '../constants/theme';
import {ErrorMessage} from './ErrorMessage';
const {width, height} = Dimensions.get('screen');
//TODO: style with styled components
//TODO: Implement onChange
export const SingleSelect = ({title, label, ...props}) => {
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>{title}</Title>
      <Dropdown
        label="Select option"
        data={props.data}
        paperTheme={theme}
        mainContainerStyle={styles.dropdownContainer}
        itemTextStyle={styles.dropdownItemText}
        itemContainerStyle={styles.dropdownItemContainer}
        parentDDContainerStyle={styles.dropdownItemContainer}
        selectedItemTextStyle={styles.dropdownSelectedItemText}
        textInputStyle={styles.dropdownTextInput}
        primaryColor={'black'}
        {...props}
        onChange={onChange}
      />
      <ErrorMessage errorValue={props.errorValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 4},
  dropdownContainer: {
    width: width * 0.9,
    backgroundColor: 'white',
  },
  dropdownItemText: {
    fontFamily: theme.fonts.regular.fontFamily,
    color: 'white',
  },
  dropdownTextInput: {
    height: height / 18,
  },
  dropdownItemContainer: {
    backgroundColor: 'white',
  },
  dropdownSelectedItemText: {
    color: 'black',
  },

  titleText: {
    color: 'rgb(238, 40, 68)',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 10,
  },
});

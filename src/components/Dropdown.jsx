import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Dropdown as DD} from 'sharingan-rn-modal-dropdown';
import {Text} from '.';
//TODO replace paper theme with global theme
import {theme} from '../constants/theme';
import {ErrorMessage} from './ErrorMessage';
import styled from 'styled-components/native';

const DropDownBase = styled(DD)`
  font-family: ZonaPro-Regular;
  }
`;

//TODO: style with styled components
export const Dropdown = ({label, control, data, name, error, ...rest}) => {
  return (
    <>
      <View style={{marginLeft: 10}}>
        <Text type="label">{label}</Text>
      </View>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <DropDownBase
            label=""
            removeLabel
            disableSelectionTick
            textInputPlaceholder="Select Option"
            data={data}
            onChange={(value) => onChange(value)}
            value={value}
            itemTextStyle={styles.itemTextStyle}
            selectedItemTextStyle={styles.selectedItemTextStyle}
            {...rest}
            paperTheme={theme}
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
  selectedItemTextStyle: {
    color: '#ee2844',
    fontFamily: theme.fonts.regular.fontFamily,
  },
});

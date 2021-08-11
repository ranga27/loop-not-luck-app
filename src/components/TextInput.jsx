import React from 'react';
import {Controller} from 'react-hook-form';
import styled from 'styled-components/native';

const TextInputBase = styled.TextInput`
  font-family: ZonaPro-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-bottom-width: 1px;
  border-color: 'rgb(138, 154, 167)';
  margin: 0px 0px 16px;
`;

export const TextInput = ({control, name, ...rest}) => {
  return (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInputBase
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
          {...rest}
        />
      )}
      name={name}
    />
  );
};

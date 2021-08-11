import React from 'react';
import {Controller} from 'react-hook-form';
import styled from 'styled-components/native';

const TextInputBase = styled.TextInput`
  font-family: ZonaPro-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  // line-height: 40px;
  border-bottom-width: 1px;
  border-color: 'rgb(138, 154, 167)';
  margin: 10px 0px 30px;
  padding-left: 10px;
  padding-bottom: 15px;
  
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

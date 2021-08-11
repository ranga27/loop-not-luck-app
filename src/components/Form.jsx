import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {Button, Dropdown, TextInput} from '.';
import {sexualityOptions} from '../constants';
export const Form = ({defaultValues, children, onSubmit}) => {
  const {handleSubmit, control} = useForm({defaultValues});

  return (
    <View>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    control,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}

      <Button
        title="Submit"
        txtColor="#ee2844"
        bgColor="white"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};


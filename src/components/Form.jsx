import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {Button, Dropdown, Image, Text, TextInput} from '.';
const KeysToComponentMap = {
  dropdown: Dropdown,
  input: TextInput,
  text: Text,
  image: Image,
};
export const Form = ({defaultValues, children, onSubmit}) => {
  const {handleSubmit, control} = useForm({defaultValues});
  return (
    <View>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.name
              ? React.createElement(KeysToComponentMap[child.component], {
                  ...{
                    ...child,
                    control,
                    key: child.name,
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

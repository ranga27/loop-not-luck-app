import React from 'react';
import {useForm} from 'react-hook-form';
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
    <>
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
    </>
  );
};

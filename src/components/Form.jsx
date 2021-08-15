import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, Dropdown, Image, Text, TextInput} from '.';
const KeysToComponentMap = {
  dropdown: Dropdown,
  input: TextInput,
  text: Text,
  image: Image,
};
export const Form = ({children, onSubmit}) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  console.log(errors);
  return (
    <>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.name
              ? React.createElement(KeysToComponentMap[child.component], {
                  ...{
                    ...child,
                    control,
                    errors,
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

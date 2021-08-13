import React from 'react';
import {
  Button,
  Image,
  Text,
  ScreenContainer,
  Dropdown,
  TextInput,
} from '../components';
const KeysToComponentMap = {
  dropdown: Dropdown,
  input: TextInput,
  text: Text,
  image: Image,
  button: Button,
  screen: ScreenContainer,
};

export const renderer = ({children}) => {
  Array.isArray(children)
    ? children.map((child) => {
        return child.name
          ? React.createElement(KeysToComponentMap[child.component], {
              ...{
                ...child,
                key: child.name,
              },
            })
          : child;
      })
    : children;
};

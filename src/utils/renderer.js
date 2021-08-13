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

export const renderer = (config) => {
  console.log(config.children);
  return React.createElement(
    KeysToComponentMap[config.component],
    {...config, key: config.name},
    config.children &&
      (typeof config.children === 'string'
        ? config.children
        : config.children.map((child) => renderer(child))),
  );
};

const render = (child) => {
  console.log(child);
  return React.createElement(KeysToComponentMap[child.component], null, null);
};

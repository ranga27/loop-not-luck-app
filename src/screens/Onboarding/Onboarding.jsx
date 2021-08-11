import React from 'react';
import {useForm} from 'react-hook-form';

import {
  Image,
  SafeArea,
  ScrollView,
  Text,
  Dropdown,
  Button,
  TextInput,
  Form,
} from '../../components';
import {Input} from '../../components/Form';
import {
  disabilityOptions,
  education,
  genderOptions,
  parentsOptions,
  schoolOptions,
  sexualityOptions,
} from '../../constants';

export const Onboarding = ({navigation}) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <SafeArea>
      <ScrollView>
        <Text type="title">Tell us a bit more about yourself.</Text>
        <Image source={require('../../assets/images/tell-us.png')}></Image>
        <Form onSubmit={onSubmit}>
          <Dropdown
            label="What is your current education level?"
            data={education}
            name="education"
          />
          <Dropdown
            label="What is your gender?"
            data={genderOptions}
            name="gender"
          />
          <Dropdown
            label="What is your sexuality?"
            data={sexualityOptions}
            name="sexuality"
          />
          <TextInput
            placeholder="If other, specify your sexuality"
            name="otherSex"
          />
          <Dropdown
            label="Did either of you parents attend university?"
            data={parentsOptions}
            name="parents"
          />
          <Dropdown
            label="Did you attend public or private school?"
            data={schoolOptions}
            name="school"
          />
          <TextInput
            placeholder="What post code did you grow up in?"
            name="postcode"
          />
          <Dropdown
            label="Do you consider yourself to have a disability? (please select one option only)"
            data={disabilityOptions}
            name="hasDisability"
          />
          <TextInput
            placeholder="If yes, specify what disability"
            name="disability"
          />
        </Form>
      </ScrollView>
    </SafeArea>
  );
};

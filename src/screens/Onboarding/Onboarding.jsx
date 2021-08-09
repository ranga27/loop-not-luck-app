import React from 'react';
import {
  Button,
  Image,
  InputField,
  SafeArea,
  ScrollView,
  SingleSelect,
  Text,
} from '../../components';
import {
  genderOptions,
  education,
  sexualityOptions,
  parentsOptions,
} from '../../constants';

export const Onboarding = ({navigation}) => {
  return (
    <SafeArea>
      <ScrollView>
        <Text type="title" color="#ee2844">
          Tell us a bit more about yourself.
        </Text>
        <Image source={require('../../assets/images/tell-us.png')}></Image>
        <SingleSelect
          title="What is your current education level?"
          data={education}
        />
        <SingleSelect title="What is your gender?" data={genderOptions} />
        <SingleSelect title="What is your sexuality?" data={sexualityOptions} />
        <SingleSelect
          title="Did either of you parents attend university?"
          data={parentsOptions}
        />
        <InputField label={'If other, specify your sexuality'} />
      </ScrollView>
    </SafeArea>
  );
};

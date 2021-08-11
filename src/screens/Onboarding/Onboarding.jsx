import React from 'react';
import {Image, SafeArea, ScrollView, Text, Form} from '../../components';
import {onboardingConfig} from '../../constants';
export const Onboarding = ({navigation}) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <SafeArea>
      <ScrollView>
        <Text type="title">Tell us a bit more about yourself.</Text>
        <Image source={require('../../assets/images/tell-us.png')}></Image>
        <Form onSubmit={onSubmit}>{onboardingConfig}</Form>
      </ScrollView>
    </SafeArea>
  );
};

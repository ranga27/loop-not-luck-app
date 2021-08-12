import React from 'react';
import {Image, SafeArea, ScrollView, Text, Form} from '../../components';
import {onboardingConfig} from '../../constants';
export const Onboarding = ({navigation}) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  //TODO: Render SafeArea & ScrollView at App level & move out from components
  return (
    <SafeArea>
      <ScrollView>
        <Form onSubmit={onSubmit}>{onboardingConfig}</Form>
      </ScrollView>
    </SafeArea>
  );
};

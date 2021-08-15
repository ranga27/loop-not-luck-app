import React from 'react';
import {Form, ScreenContainer} from '../../components';
import {onboardingConfig} from '../../constants';
export const Onboarding = ({navigation}) => {
  const onSubmit = (data) => {
    console.log(data);
    const {gender, sexuality, hasDisability, parents, school, ...rest} = data;
    const reject =
      (gender === 'Male' || gender === 'I prefer not to say') &&
      (sexuality === 'Heterosexual' || sexuality === 'I prefer not to say') &&
      hasDisability === 'No' &&
      (parents === 'Yes, both' || parents === 'I prefer not to say') &&
      school === 'Private School';
    reject ? navigation.navigate('Reject') : navigation.navigate('StageTwoEnd');
  };
  return (
    <ScreenContainer>
      <Form onSubmit={onSubmit}>{onboardingConfig}</Form>
    </ScreenContainer>
  );
};

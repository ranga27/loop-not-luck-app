import React from 'react';
import {Form, ScreenContainer} from '../../components';
import {onboardingConfig} from '../../constants';
export const Onboarding = ({navigation}) => {
  const onSubmit = (data) => {
    console.log(data);
    const reject =
      (data.gender === 'Male' || data.gender === 'I prefer not to say') &&
      (data.sexuality === 'Heterosexual' ||
        data.sexuality === 'I prefer not to say') &&
      data.hasDisability === 'No' &&
      (data.parents === 'Yes, both' ||
        data.parents === 'I prefer not to say') &&
      data.school === 'Private School';
    reject ? navigation.navigate('Reject') : navigation.navigate('StageTwoEnd');
  };
  return (
    <ScreenContainer>
      <Form onSubmit={onSubmit}>{onboardingConfig}</Form>
    </ScreenContainer>
  );
};

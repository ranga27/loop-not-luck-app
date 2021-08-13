import React from 'react';
import {Button, SafeArea, ScreenContainer, Text} from '../../components';
import {questionLandingConfig} from '../../constants';
import {renderer} from '../../utils';
export const QuestionnaireLanding = ({navigation}) => {
  return <>{renderer(questionLandingConfigZZ)}</>;
};

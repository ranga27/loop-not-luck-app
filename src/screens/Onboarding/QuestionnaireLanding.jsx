import React from 'react';
import {ScreenContainer, Text} from '../../components';
import {questionLandingConfig} from '../../constants';
import {renderer} from '../../utils';

export const QuestionnaireLanding = ({navigation}) => {
  return <>{questionLandingConfig.map((config) => renderer(config))}</>;
};

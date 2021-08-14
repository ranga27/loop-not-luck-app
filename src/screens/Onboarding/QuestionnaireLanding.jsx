import React from 'react';
import {questionLandingConfig} from '../../constants';
import {renderer} from '../../utils';

export const QuestionnaireLanding = () => {
  return <>{questionLandingConfig.map((config) => renderer(config))}</>;
};

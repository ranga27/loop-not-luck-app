import React from 'react';
import {stageTwoEndConfig} from '../../constants';
import {renderer} from '../../utils';

export const StageTwoEnd = () => {
  return <>{stageTwoEndConfig.map((config) => renderer(config))}</>;
};

import React from 'react';
import {OpportunityDetails} from '../components';

export const OppsDetails = ({route}) => {
  const {item} = route.params;
  return <OpportunityDetails item={item} />;
};

import React from 'react';
import {OpportunityDetails} from '../components';

export const AppliedDetails = ({route}) => {
  const {item} = route.params;
  return <OpportunityDetails item={item} />;
};

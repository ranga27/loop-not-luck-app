import React from 'react';
import {OpportunityDetails} from '../components';

export const SavedDetails = ({route}) => {
  const {item} = route.params;
  return <OpportunityDetails item={item} />;
};

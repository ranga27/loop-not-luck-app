import React from 'react';
import {useSelector} from 'react-redux';
import {OpportunityItem} from '../components';

export const OppsList = ({navigation}) => {
  const {opps} = useSelector((state) => state.opps);

  return (
    <OpportunityItem
      list={opps}
      navigation={navigation}
      nextScreen={'OppsDetails'}
    />
  );
};

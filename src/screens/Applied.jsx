import React from 'react';
import {useSelector} from 'react-redux';
import {OpportunityItem} from '../components';
import _ from 'lodash';

export const Applied = ({navigation}) => {
  const {applied} = useSelector((state) => state.favs);
  const {opps} = useSelector((state) => state.opps);
  const merged = _.merge(_.keyBy(applied, 'id'), _.keyBy(opps, 'key'));
  const list = _.filter(merged, 'time');
  return (
    <OpportunityItem
      list={list}
      navigation={navigation}
      nextScreen={'AppliedDetails'}
    />
  );
};

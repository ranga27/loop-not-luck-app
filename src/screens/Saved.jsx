import React from 'react';
import {useSelector} from 'react-redux';
import {OpportunityItem} from '../components';
import _ from 'lodash';

export const Saved = ({navigation}) => {
  const {saved} = useSelector((state) => state.favs);
  const {opps} = useSelector((state) => state.opps);
  const merged = _.merge(_.keyBy(saved, 'id'), _.keyBy(opps, 'key'));
  const list = _.filter(merged, 'time');
  return (
    <OpportunityItem
      isSubList
      list={saved}
      navigation={navigation}
      nextScreen={'SavedDetails'}
    />
  );
};

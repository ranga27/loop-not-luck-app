import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {theme} from '../constants';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.primary} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});

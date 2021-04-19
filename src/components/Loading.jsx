import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {theme} from '../constants';

export const Loading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator
        color={theme.colors.primary}
        size="large"
        animating={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

import React from 'react';
import {theme} from '../constants';

import {StyleSheet, View, Text} from 'react-native';

export const Opportunities = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opportunities Tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: theme.fonts.regular.fontFamily,
  },
});

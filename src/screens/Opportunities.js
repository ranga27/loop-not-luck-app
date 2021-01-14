import React from 'react';
import {theme} from '../constants';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {requests} from '../constants/mocks';

export const Opportunities = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opportunities Tab</Text>
      <ScrollView howsVerticalScrollIndicator={false}>
        {requests.map((request) => (
          <TouchableOpacity activeOpacity={0.8} key={`request-${request.id}`}>
            {renderRequest(request)}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginBottom: 30,
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

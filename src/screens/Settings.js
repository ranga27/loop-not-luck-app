import React, {useState, useEffect, useContext} from 'react';
import {theme} from '../constants';

import {StyleSheet, View, Text} from 'react-native';
import {Button} from '../components';
import {getUserData, AuthContext} from '../utils';

export const Settings = (props) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Tab</Text>
      <Button
        modeValue="contained"
        title="Logout"
        labelStyle={styles.ButtonLabel}
        onPress={() => logout()}
      />
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

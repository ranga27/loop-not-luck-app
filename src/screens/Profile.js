import React from 'react';
import {theme} from '../constants';
import {StyleSheet, View} from 'react-native';
import {Button} from '../components';

export const Profile = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Button
          title="Profile"
          modeValue="contained"
          labelStyle={styles.ButtonLabel}
          onPress={() => navigation.navigate('Gender')}
        />
      </View>
    </>
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
  ButtonLabel: {
    fontSize: 20,
  },
});

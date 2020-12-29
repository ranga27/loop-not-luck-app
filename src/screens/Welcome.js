import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Button} from '../components';

export const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/black.png')}
      />

      <Button
        title="Signup"
        modeValue="contained"
        labelStyle={styles.ButtonLabel}
        onPress={() => navigation.navigate('Signup')}
      />
      <Button
        title="Login"
        modeValue="outlined"
        labelStyle={styles.ButtonLabel}
        onPress={() => navigation.navigate('Login')}
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
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'auto',
  },
  ButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
  image: {
    width: 400,
    height: 400,
  },
});

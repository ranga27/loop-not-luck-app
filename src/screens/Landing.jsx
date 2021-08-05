import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {Button, SafeArea, ScrollView, Image} from '../components';
export const Landing = ({navigation}) => {
  return (
    <SafeArea type="dark">
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Image source={require('../assets/images/loopnotluck1.png')} />
        <Text style={styles.titleText}>We Represent the Underrepresented</Text>
        <View style={styles.textContainer}>
          <Text style={styles.bodyText}>
            You shouldn't have to 'know someone who knows someone' to find out
            about amazing career opportunities across the UK. Nobody wants to
            scroll through thousands of search results or leave it up to
            luck.Using Artificial Intelligence, we have automated the job hunt.
            Providing you with the perfect selection of opportunities to apply
            for and the chance to be headhunted for roles.
          </Text>
        </View>
        <Text style={styles.titleText}>Get in the Loop</Text>
        <Button
          title="Apply"
          modeValue="contained"
          labelStyle={styles.buttonLabel}
          onPress={() => navigation.navigate('Signup')}
        />
        <Button
          title="Login"
          modeValue="outlined"
          labelStyle={styles.buttonLabel}
          onPress={() => navigation.navigate('Login')}
        />
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 343,
    height: 343,
    marginBottom: 40,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  textContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    marginVertical: 8,
  },
  bodyText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'auto',
  },
  buttonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
});

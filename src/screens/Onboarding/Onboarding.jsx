import React from 'react';
import {theme} from '../../constants';
import {Title} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../components';
import {signOutFirebase} from '../../firebase/authService';
import {useSelector} from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';

export const Onboarding = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);

  const handleSignOut = async () => {
    try {
      await signOutFirebase();
    } catch (error) {
      console.log(error.message);
      crashlytics().recordError(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title style={styles.titleText}>
          {currentUserProfile.firstName}, so that our recommendations are as
          relevant as possible, we would like to get to know you better. It
          should take 4 mins to get you registered and in the Loop!
        </Title>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Start"
          modeValue="contained"
          labelStyle={styles.ButtonLabel}
          onPress={() => navigation.navigate('Gender')}
        />
        <Button
          modeValue="contained"
          title="Logout"
          labelStyle={styles.ButtonLabel}
          onPress={() => handleSignOut()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    //width: width * 0.8,
    //height: 100,
    //borderWidth: 2,
    //borderColor: 'white',
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'center',
    //flexGrow: 1,
  },
  titleText: {
    fontSize: 20,
    marginBottom: 10,
    padding: 20,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    //width: width * 0.8,
    //height: 100,
    //borderWidth: 2,
    //borderColor: 'white',
    //justifyContent: 'flex-end',
    //marginBottom: 10,
    alignItems: 'center',
    //flexGrow: 1,
  },
  ButtonLabel: {
    fontSize: 20,
  },
});

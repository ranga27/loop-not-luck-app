import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Loading, Button} from '../components';
import {Title, Text} from 'react-native-paper';
import {getUserData, AuthContext} from '../utils';
import {useSelector} from 'react-redux';
import {signOutFirebase} from '../firebase/firesbaseService';

/**
 * This is the landing screen after
 * user logs in successfully
 */

export const Notifications = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);

  const [loading, setLoading] = useState(true);
  /**
   * Fetch info from Firestore using the hook useEffect
   */

  async function handleSignOut() {
    try {
      await signOutFirebase();
    } catch (error) {
      console.log(error.message);
    }
  }
  // Display a loading screen while the Firebase data is loading
  /* if (!currentUserProfile) {
    return <Loading />;
  } */
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Title>Hello {}!</Title>
      <Text>Your Notifications will come here</Text>

      <Button
        title="Profile"
        modeValue="contained"
        labelStyle={styles.ButtonLabel}
        onPress={() => navigation.navigate('Profile')}
      />

      <Button
        modeValue="contained"
        title="Logout"
        labelStyle={styles.ButtonLabel}
        onPress={() => handleSignOut()}
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
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
  ButtonLabel: {
    fontSize: 20,
  },
});

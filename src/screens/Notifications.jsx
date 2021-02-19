import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Loading, Button} from '../components';
import {Title, Text} from 'react-native-paper';
import {getUserData, AuthContext} from '../utils';
import {useSelector} from 'react-redux';

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

  // Display a loading screen while the Firebase data is loading
  /* if (!currentUserProfile) {
    return <Loading />;
  } */
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Title>Hello {}!</Title>
      <Text>Your Notifications will come here</Text>
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

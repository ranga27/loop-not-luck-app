import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Loading, Button} from '../components';
import {Title, Text} from 'react-native-paper';
import {getUserData, AuthContext} from '../utils';

/**
 * This is the landing screen after
 * user logs in successfully
 */

export const Home = ({navigation}) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const {firstName, lastName} = info || {};
  const {user} = useContext(AuthContext);
  /**
   * Fetch info from Firestore using the hook useEffect
   */
  useEffect(() => {
    getUserData(user).then((userData) => {
      setInfo(userData);
      console.log('User: ' + userData.firstName);
      setLoading(false);
    });
  }, [user]);
  // Display a loading screen while the Firebase data is loading
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Title> {firstName + ' ' + lastName}</Title>
      <Text>You've logged in, now complete your profile</Text>

      <Button
        title="Profile"
        modeValue="contained"
        labelStyle={styles.ButtonLabel}
        onPress={() => navigation.navigate('Gender')}
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

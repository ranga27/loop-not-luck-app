import React, {useState, useEffect, useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';
import {View, StyleSheet, Alert} from 'react-native';
import {Loading, FormButton} from '../components';
import {Title, Text} from 'react-native-paper';

/**
 * This is the landing screen after
 * user logs in successfully
 */

export const Home = ({navigation}) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const {firstName, lastName} = info || {};
  const {user, logout} = useContext(AuthContext);
  /**
   * Fetch info from Firestore using the hook useEffect
   */
  useEffect(() => {
    const loadUser = async () => {
      console.log('User: ' + user.uid);
      const userDoc = await firestore().collection('users').doc(user.uid).get();
      if (!userDoc.exists) {
        Alert.alert('No user data found!');
      } else {
        const userData = userDoc.data();
        console.log('Data: ' + userData);
        setInfo(userData);
        setLoading(false);
      }
    };
    /**
     * unsubscribe listener
     */
    loadUser(); //function to undo our stuff from above when component unmounts
  }, [user.uid]);
  // Display a loading screen while the Firebase data is loading
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Title> {firstName + ' ' + lastName}</Title>
      <Text>You've logged in, now complete your profile</Text>

      <FormButton
        title="Profile"
        modeValue="contained"
        labelStyle={styles.ButtonLabel}
        onPress={() => navigation.navigate('Gender')}
      />
      <FormButton
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

import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const getUserData = async (user) => {
  const userDoc = await firestore().collection('users').doc(user.uid).get();
  if (!userDoc.exists) {
    Alert.alert('No user data found!');
  } else {
    const userData = userDoc.data();
    return userData;
  }
};

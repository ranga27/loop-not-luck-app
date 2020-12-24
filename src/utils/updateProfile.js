import firestore from '@react-native-firebase/firestore';

export const updateProfile = async (docUpdate, id) => {
  console.log(docUpdate);
  console.log(id);

  await firestore().collection('users').doc(id).update(docUpdate);
};

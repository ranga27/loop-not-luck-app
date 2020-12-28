import firestore from '@react-native-firebase/firestore';

export const updateProfile = async (dataToUpdate, id) => {
  console.log(dataToUpdate);
  console.log(id);

  await firestore().collection('users').doc(id).update(dataToUpdate);
};

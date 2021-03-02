import firestore from '@react-native-firebase/firestore';

export const updateProfile = async (dataToUpdate, id) => {
  try {
    await firestore()
      .collection('users')
      .doc(id)
      .update(dataToUpdate)
      .then(console.log('Firestore data updated!'));
  } catch (e) {
    console.log(e);
  }
};

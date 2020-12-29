import firestore from '@react-native-firebase/firestore';

export const updateProfile = async (dataToUpdate, id) => {
  try {
    await firestore()
      .collection('users')
      .doc(id)
      .update(dataToUpdate)
      .then(console.debug('Data updated!'));
  } catch (e) {
    console.log(e);
  }
};

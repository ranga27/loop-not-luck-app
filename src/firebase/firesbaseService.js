import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {setUserProfileData, updateUserProfile} from './firestoreService';

export function signInWithEmail(creds) {
  return auth().signInWithEmailAndPassword(creds.email, creds.password);
}

export function signOutFirebase() {
  return auth().signOut();
}

export async function registerInFirebase(newUser) {
  try {
    //remove then
    await auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((userCredential) => {
        setUserProfileData(userCredential.user);
        userCredential.user.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://loopnotluckuser.page.link/app',
          iOS: {
            bundleId: 'com.loopnotluck.app',
          },
        });
      })
      .then(() => updateUserProfile(newUser));

    /*  await result.user.updateProfile({
      displayName: creds.firstName,
    }); 
    return await setUserProfileData(result.user);*/
  } catch (error) {
    throw error;
  }
}

export async function socialLogin(selectedProvider) {
  let provider;
  if (selectedProvider === 'facebook') {
    provider = new auth.FacebookAuthProvider();
  }
  if (selectedProvider === 'google') {
    provider = new auth.GoogleAuthProvider();
  }
  try {
    const result = await auth().signInWithPopup(provider);
    console.log(result);
    if (result.additionalUserInfo.isNewUser) {
      await setUserProfileData(result.user);
    }
  } catch (error) {
    console.log(error.message);
  }
}

export function updateUserPassword(creds) {
  const user = auth().currentUser;
  return user.updatePassword(creds.newPassword1);
}

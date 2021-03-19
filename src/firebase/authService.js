import auth from '@react-native-firebase/auth';
import {setUserProfileData, updateUserProfile} from './firestoreService';

export function signInWithEmail(creds) {
  return auth().signInWithEmailAndPassword(creds.email, creds.password);
}

export function signOutFirebase() {
  return auth().signOut();
}

export async function sendEmailVerification() {
  await auth().currentUser.sendEmailVerification({
    handleCodeInApp: true,
    url: 'https://loopnotluckuser.page.link/app',
    iOS: {
      bundleId: 'com.loopnotluck.app',
    },
  });
}

export async function registerInFirebase(newUser) {
  try {
    const result = await auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password,
    );

    await result.user.sendEmailVerification({
      handleCodeInApp: true,
      url: 'https://loopnotluckuser.page.link/app',
      iOS: {
        bundleId: 'com.loopnotluck.app',
      },
    });

    //Create new user doc in the fireStore users collection
    return await setUserProfileData(result.user.uid, newUser);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    throw error;
  }
}

export async function sendPasswordResetEmail(user) {
  try {
    await auth().sendPasswordResetEmail(user.email, {
      handleCodeInApp: true,
      url: 'https://loopnotluckuser.page.link/app',
      iOS: {
        bundleId: 'com.loopnotluck.app',
      },
    });
    return true;
  } catch (error) {
    throw error;
  }
}

export async function confirmPasswordReset(code, password) {
  try {
    await auth().confirmPasswordReset(code, password);
    return true;
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
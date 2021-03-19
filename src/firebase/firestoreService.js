//import cuid from 'cuid';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const db = firestore();

export async function getOpportunitiesFromFirestore() {
  const opportunities = await db.collection('opportunities').get();
  return opportunities;
}

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) {
    return undefined;
  }
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}
export function listenToEventsFromFirestore() {
  return db.collection('events').orderBy('date');
}
export function listenToEventFromFirestore(eventId) {
  return db.collection('events').doc(eventId);
}

export function addEventToFirestore(event) {
  return db.collection('events').add({
    ...event,
    hostedBy: 'Diana',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
    attendees: firestore.FieldValue.arrayUnion({
      //kind of array.push
      //id: cuid(),
      displayName: 'Diana',
      photoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
    }),
  });
}

export function updateEventInFirestore(event) {
  return db.collection('events').doc(event.id).update(event);
}

export function deleteEventInFirestore(eventId) {
  return db.collection('events').doc(eventId).delete();
}

export function cancelEventToggle(event) {
  return db.collection('events').doc(event.id).update({
    isCancelled: !event.isCancelled,
  });
}

export function setUserProfileData(uid, user) {
  return db
    .collection('users')
    .doc(uid)
    .set({
      ...user,
      createdAt: firestore.FieldValue.serverTimestamp(),
      profileComplete: false,
    });
}

export function getUserProfile(userId) {
  return db.collection('users').doc(userId);
}

export async function updateUserProfile(profile) {
  const user = auth().currentUser;
  try {
    if (user.displayName !== profile.displayName) {
      await user.updateProfile({
        displayName: profile.displayName,
      });
    }
    return await db.collection('users').doc(user.uid).update(profile);
  } catch (error) {
    throw error;
  }
}

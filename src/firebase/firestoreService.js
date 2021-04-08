//import cuid from 'cuid';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';

const db = firestore();

export async function fetchOppsFromFirestore() {
  const opps = [];
  firestore()
    .collection('opportunities')
    .get()
    .then((querySnapshot) => {
      console.log('Total opps: ', querySnapshot.size);
      querySnapshot.forEach((documentSnapshot) => {
        opps.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
    });
  return opps;
}

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
export function addToSavedOpportunityList(uid, opps) {
  return db.collection('users').doc(uid).collection('saved').set(opps);
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

export async function updateUserProfile() {
  const user = auth().currentUser;
  try {
    return await db.collection('users').doc(user.uid).update({
      profileComplete: true,
      profileCompletedAt: firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    crashlytics().recordError(error);
    console.log(error);
  }
}

export function getUserProfileDocRef(userId) {
  return db.collection('users').doc(userId);
}

export async function getUserProfile(userId) {
  return await db.collection('users').doc(userId).get();
}

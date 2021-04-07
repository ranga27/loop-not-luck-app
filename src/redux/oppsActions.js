import {fetchOppsFromFirestore} from '../firebase/firestoreService';
import {FETCH_OPPS} from './oppsConstants';
//This is incorrect, move firestore calls out of actions
import firestore from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';

export function fetchOpps() {
  return async (dispatch) => {
    try {
      //TODO: move to firesStore.service
      firestore()
        .collection('opportunities')
        .get()
        .then((querySnapshot) => {
          const opps = [];
          querySnapshot.forEach((documentSnapshot) => {
            opps.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });
          dispatch({type: FETCH_OPPS, payload: opps});
        });
    } catch (error) {
      console.log(error);
      crashlytics().recordError(error);
    }
  };
}

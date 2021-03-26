import {fetchOppsFromFirestore} from '../firebase/firestoreService';
import {FETCH_OPPS} from './oppsConstants';
//This is incorrect, move firestore calls out of actions
import firestore from '@react-native-firebase/firestore';

export function fetchOpps() {
  return async (dispatch) => {
    try {
      firestore()
        .collection('opportunities')
        .get()
        .then((querySnapshot) => {
          const opps = [];
          querySnapshot.forEach((documentSnapshot) => {
            opps.push({
              //remove .opportunity when the data is fixed
              ...documentSnapshot.data().opportunity,
              key: documentSnapshot.id,
            });
          });
          dispatch({type: FETCH_OPPS, payload: opps});
        });
    } catch (error) {
      console.log(error);
    }
  };
}

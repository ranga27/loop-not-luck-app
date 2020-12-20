import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

/**
 * This provider is created
 * to access user in whole app
 * It allows the components to subscribe to context changes
 */

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null); // state variable

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password, firstName, lastName, phone) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then((authData) => {
                const authId = authData.user.uid;
                console.log(authId);
                firestore()
                  .collection('users')
                  .doc(authId)
                  .set({
                    email,
                    firstName,
                    lastName,
                    phone,
                  })
                  .then(() => {
                    console.log('User added!');
                  });
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

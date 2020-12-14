import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Title, List, Divider} from 'react-native-paper';
import {AuthContext} from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import firestore from '@react-native-firebase/firestore';

import Loading from '../components/Loading';

/**
 * This is the landing screen after
 * user logs in successfully
 */

export default function HomeScreen({navigation}) {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  const {user, logout} = useContext(AuthContext);

  /**
   * Fetch threads from Firestore using the hook useEffect
   */
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('THREADS')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            name: '',
            ...documentSnapshot.data(),
          };
        });

        setThreads(threads);

        if (loading) {
          setLoading(false);
        }
      });

    /**
     * When the component loads, to fetch the existing chat rooms,unsubscribe listener is decalred to the query.
     * This listener is going to subscribe to any updates. These updates can be new or existing chat rooms.
     * When the screen unmounts, it is important to unsubscribe from this listener.
     */
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item}) => (
          <List.Item
            title={item.name}
            description="Item description"
            titleNumberOfLines={1}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
            descriptionNumberOfLines={1}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});

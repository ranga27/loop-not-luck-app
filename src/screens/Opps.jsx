import React, {useState, useEffect} from 'react';
import {theme} from '../constants';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {data} from '../constants/data';
import {useSelector, useDispatch} from 'react-redux';
import {getBooks} from '../redux/booksActions';
import firestore from '@react-native-firebase/firestore';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.3;
const ITEM_HEIGHT = ITEM_WIDTH * 0.7;

export const Opps = ({navigation}) => {
  const [loading, setLoading] = useState(false); // Set loading to true on component mount
  const {opps} = useSelector((state) => state.opps);

  /*   useEffect(() => {
    const subscriber = firestore()
      .collection('opportunities')
      .onSnapshot((querySnapshot) => {
        const opps = [];
        querySnapshot.forEach((documentSnapshot) => {
          opps.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setOpps(opps);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []); */

  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: 12}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('DetailScreen', {item})}>
          <View style={{flexDirection: 'row', flex: 1}}></View>
        </TouchableOpacity>
      </View>
    );
  };
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <View style={{flex: 1, marginTop: 8}}>
          <FlatList
            data={opps}
            keyExtractor={(item, index) => String(index)}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {marginTop: 50, marginBottom: 20, paddingHorizontal: 20},
  headerText: {
    color: theme.colors.primary,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: theme.fonts.regular.fontFamily,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  logo: {
    borderRadius: 18,
    width: 120,
    height: 120,
    borderWidth: 3,
    borderColor: theme.colors.background,
  },
  detailsContainer: {left: 10},
  titleText: {
    color: theme.colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
    fontFamily: theme.fonts.regular.fontFamily,
  },
  descriptionText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
    fontFamily: theme.fonts.regular.fontFamily,
  },
});

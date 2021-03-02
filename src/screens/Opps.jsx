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
import {SharedElement} from 'react-navigation-shared-element';
import {data} from '../constants/data';
import {useSelector, useDispatch} from 'react-redux';
import {getBooks} from '../redux/booksActions';
import firestore from '@react-native-firebase/firestore';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.3;
const ITEM_HEIGHT = ITEM_WIDTH * 0.7;

export const Opps = ({navigation}) => {
  const [opps, setOpps] = useState([]); // Initial empty array of opps
  const [loading, setLoading] = useState(true); // Set loading to true on component mount

  const {books} = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const fetchBooks = () => dispatch(getBooks());

  useEffect(() => {
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
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: 12}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('DetailScreen', {item})}>
          <View style={{flexDirection: 'row', flex: 1}}>
            {/* Opps Logo */}
            <SharedElement id={`item.${item.id}.opportunity.logoUrl`}>
              <Image
                source={{uri: item.opportunity.logoUrl}}
                resizeMode="cover"
                style={styles.logo}
              />
            </SharedElement>
            {/* Opps Metadata */}
            <View style={{flex: 1, marginLeft: 12}}>
              {/* Opps Title */}
              <SharedElement id={`item.${item.id}.opportunity.title`}>
                <Text style={styles.titleText}>{item.opportunity.title}</Text>
              </SharedElement>
              {/* Meta info */}
              <SharedElement id={`item.${item.id}.opportunity.organisation`}>
                <Text style={styles.descriptionText}>
                  {item.opportunity.organisation}
                </Text>
              </SharedElement>
            </View>
          </View>
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
        <Text style={styles.headerText}>Your Opportunities</Text>
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
  logo: {borderRadius: 14, width: ITEM_WIDTH, height: ITEM_HEIGHT},
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

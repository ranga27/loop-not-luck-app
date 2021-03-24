import React, {useState, useEffect} from 'react';
import {theme} from '../constants';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {data} from '../constants/data';
import {useSelector, useDispatch} from 'react-redux';
import {getBooks} from '../redux/booksActions';
import firestore from '@react-native-firebase/firestore';
import {Title, Text, Card, Paragraph} from 'react-native-paper';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.3;
const ITEM_HEIGHT = ITEM_WIDTH * 0.7;

export const MyLoop = ({navigation}) => {
  const [opps, setOpps] = useState([]); // Initial empty array of opps
  const [loading, setLoading] = useState(true); // Set loading to true on component mount

  const {books} = useSelector((state) => state.opps);
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

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.topOpportunity}>
          <Title style={{color: theme.colors.primary}}>
            Your Top Opportunity
          </Title>
            <Card>
              <Card.Content>
                <Image
                  source={{
                    uri:
                      'https://media.glassdoor.com/sqll/1338681/babylon-health-squarelogo-1530105111288.png',
                  }}
                  resizeMode="contain"
                  style={styles.logo}
                />
                  <Text style={styles.text}>Babylon Summer Internship</Text>
                  <Text style={styles.text}>93% Match</Text>
              </Card.Content>
            </Card>
        </View>
        <View style={styles.topPicks}>
          <Title style={{color: theme.colors.primary}}>
            Other Top Picks for you
          </Title>
        </View>
        <View style={styles.otherOpps}>
          <Title style={{color: theme.colors.primary}}>
            Click here to explore the rest of LNL opportunities
          </Title>
        </View>
        <View style={styles.feedback}>
          <Title style={{color: theme.colors.primary}}>Feedback?</Title>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  topOpportunity: {
    flex: 1,
    //flexGrow: 4,
  },
  topPicks: {
    flex: 1,
  },
  otherOpps: {
    flex: 1,
  },
  feedback: {
    flex: 1,
  },
  logo: {borderRadius: 14, width: ITEM_WIDTH, height: ITEM_HEIGHT},
  text: {
    color: theme.colors.primary,
    fontSize: 18,
    lineHeight: 20,
  },
});

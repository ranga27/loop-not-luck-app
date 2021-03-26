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
  Pressable,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {data} from '../constants/data';
import {useSelector, useDispatch} from 'react-redux';
import {getBooks} from '../redux/booksActions';
import firestore from '@react-native-firebase/firestore';
import {Title, Text, List, Paragraph} from 'react-native-paper';
import {RETAIN_STATE} from '../redux/oppsConstants';
import {fetchOpps} from '../redux/oppsActions';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.3;
const ITEM_HEIGHT = ITEM_WIDTH * 0.7;

export const MyLoop = ({navigation}) => {
  const [oppts, setOpps] = useState([]); // Initial empty array of opps
  const [loading, setLoading] = useState(false); // Set loading to true on component mount

  const {books} = useSelector((state) => state.favs);
  const {opps, retainState} = useSelector((state) => state.opps);
  const dispatch = useDispatch();
  const getOpps = () => dispatch(fetchOpps());

  useEffect(() => {
    getOpps();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          <Title style={styles.cardTitleText}>Your Top Opportunity</Title>
          <TouchableOpacity>
            <View style={styles.card}>
              <Image
                source={{
                  uri:
                    'https://media.glassdoor.com/sqll/1338681/babylon-health-squarelogo-1530105111288.png',
                }}
                resizeMode="contain"
                style={styles.logo}
              />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>Babylon Summer Internship</Text>
                <Text style={styles.cardText}>93% Match</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.accordionContainer}>
          <List.Section>
            <List.Accordion
              title={'Other Top Picks for you'}
              titleStyle={styles.accordionTitleText}
              left={(props) => <List.Icon {...props} />}>
              {opps.map((child, index) => (
                <List.Item key={index} title={child.title} />
              ))}
            </List.Accordion>
          </List.Section>
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
    //alignItems: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  cardContainer: {
    flex: 1,
    //flexGrow: 4,
  },
  cardTitleText: {color: theme.colors.primary, paddingLeft: 10},
  card: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#242D3A',
    padding: 12,
    borderRadius: 18,
  },
  logo: {
    borderRadius: 18,
    width: 120,
    height: 120,
    borderWidth: 3,
    borderColor: '#242D3A',
  },
  cardTextContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  cardText: {
    color: theme.colors.primary,
    fontSize: 18,
    padding: 12,
    //borderWidth: 1,
    //borderColor: 'white',
  },
  accordionContainer: {
    flex: 1,
  },
  accordionTitleText: {
    color: theme.colors.primary,
    fontSize: 20,
  },
  text: {
    color: theme.colors.primary,
    fontSize: 18,
    lineHeight: 20,
  },

  otherOpps: {
    flex: 1,
  },
  feedback: {
    flex: 1,
  },
});

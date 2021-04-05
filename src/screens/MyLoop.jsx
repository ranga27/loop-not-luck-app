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
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Title, Text, List} from 'react-native-paper';
import {fetchOpps} from '../redux/oppsActions';
import {Loading} from '../components';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.3;
const ITEM_HEIGHT = ITEM_WIDTH * 0.7;

export const MyLoop = ({navigation}) => {
  const [isLoading, setLoading] = useState(true); // Set loading to true on component mount

  const {opps} = useSelector((state) => state.opps);
  const dispatch = useDispatch();
  const getOpps = () => dispatch(fetchOpps());

  useEffect(() => {
    getOpps();
    setLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
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
              {opps.map((item, index) => (
                <List.Item
                  key={index}
                  title={item.title}
                  onPress={() => navigation.navigate('DetailScreen', {item})}
                />
              ))}
            </List.Accordion>
          </List.Section>
        </View>
        <View style={styles.otherOpps}>
          <TouchableOpacity>
            <Title
              style={{color: theme.colors.primary, fontSize: 18}}
              onPress={() => navigation.navigate('Opps')}>
              Click here to explore the rest of LNL opportunities
            </Title>
          </TouchableOpacity>
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
  cardTitleText: {
    color: theme.colors.primary,
    paddingLeft: 10,
    alignSelf: 'center',
  },
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
    fontSize: 18,
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

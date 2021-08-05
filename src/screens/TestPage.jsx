import React, {useState, useEffect} from 'react';
import {genderOptions, theme, education, sexualityOptions} from '../constants';
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
import {Title, Text, List, Button} from 'react-native-paper';
import {fetchOpps} from '../redux/oppsActions';
import {InputField, Loading, SingleSelect} from '../components';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.3;
const ITEM_HEIGHT = ITEM_WIDTH * 0.7;

export const TestPage = ({navigation}) => {
  const [isLoading, setLoading] = useState(true); // Set loading to true on component mount

  const {opps} = useSelector((state) => state.opps);
  const dispatch = useDispatch();
  const getOpps = () => dispatch(fetchOpps());

  //This might fetch too often and block firestore
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
        <Title style={styles.titleText}>
          Tell us a bit more about yourself.
        </Title>
        <Image
          style={styles.image}
          source={require('../assets/images/tell-us.png')}></Image>
        <SingleSelect
          title="What is your current education level?"
          label="Select option"
          data={education}
        />
        <SingleSelect
          title="What is your gender?"
          label="Select option"
          data={genderOptions}
        />
        <SingleSelect
          title="What is your sexuality?"
          label="Select option"
          data={sexualityOptions}
        />
        <InputField label={'If other, specify your sexuality'} />
        <Button onPress={() => console.log('Pressed')}>
          <Text style={styles.titleText}>Submit</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    display: 'flex',
    paddingTop: StatusBar.currentHeight,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  scrollView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titleText: {
    color: 'rgb(238, 40, 68)',
    alignSelf: 'auto',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  image: {
    width: 343,
    height: 273,
  },
  button: {
    fontSize: 20,
    fontWeight: '700',
  },
});

import React from 'react';
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
  Button,
  Title,
  Paragraph,
} from 'react-native';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 0.7;

export const Bookmarked = ({navigation}) => {
  const {saved} = useSelector((state) => state.favs);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}></SafeAreaView>
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
  imageComponent: {borderRadius: 14, width: ITEM_WIDTH, height: ITEM_HEIGHT},
  detailsContainer: {left: 10},
  titleText: {
    color: theme.colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
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

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
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {data} from '../constants/data';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.3;
const ITEM_HEIGHT = ITEM_WIDTH * 0.7;

export const Opportunities = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Your Opportunities</Text>
      </View>
      {/* Scrollable content */}
      <View style={styles.scrollContainer}>
        <ScrollView
          indicatorStyle="white"
          contentContainerStyle={{alignItems: 'center'}}>
          {data.map((item) => (
            <View key={item.id}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{marginBottom: 14}}
                onPress={() => navigation.navigate('DetailScreen', {item})}>
                <SharedElement id={`item.${item.id}.image_url`}>
                  <Image
                    style={styles.imageComponent}
                    source={{uri: item.image_url}}
                    resizeMode="cover"
                  />
                </SharedElement>
                  <SharedElement id={`item.${item.id}.title`}>
                    <Text style={styles.titleText}>{item.title}</Text>
                  </SharedElement>
                  <SharedElement id={`item.${item.id}.description`}>
                    <Text style={styles.descriptionText}>
                      {item.description}
                    </Text>
                  </SharedElement>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
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

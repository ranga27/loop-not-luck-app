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
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 0.7;

export const Saved = ({navigation}) => {
  const {bookmarks} = useSelector((state) => state.favs);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Saved Opportunities</Text>
        </View>
        {/* Scrollable content */}
        {bookmarks.length === 0 ? (
          <Text style={styles.descriptionText}>
            Save an opportunity to this list from the opportunities tab.
          </Text>
        ) : (
          <View style={styles.scrollContainer}>
            {/* move to separate component */}
            <ScrollView
              indicatorStyle="white"
              contentContainerStyle={{alignItems: 'center'}}>
              {bookmarks.map((item, index) => (
                <View key={index}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{marginBottom: 14}}
                    onPress={() =>
                      navigation.navigate('SavedDetailScreen', {item})
                    }>
                    <SharedElement id={`item.${item.id}.logoUrl`}>
                      <Image
                        style={styles.imageComponent}
                        source={{uri: item.logoUrl}}
                        resizeMode="cover"
                      />
                    </SharedElement>
                    <View style={styles.detailsContainer}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column', paddingLeft: 6}}>
                          <SharedElement id={`item.${item.id}.title`}>
                            <Text style={styles.titleText}>
                              {item.title}
                            </Text>
                          </SharedElement>
                          <SharedElement
                            id={`item.${item.id}.organisation`}>
                            <Text style={styles.descriptionText}>
                              {item.organisation}
                            </Text>
                          </SharedElement>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
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

import React, {useRef} from 'react';
import {theme} from '../constants';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {SharedElement} from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';
import {useSelector, useDispatch} from 'react-redux';
import {removeBookmark} from '../redux/booksActions';

const {height} = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.5;

export const SavedDetailScreen = ({navigation, route}) => {
  const {item} = route.params;
  const buttonRef = useRef();
  const {bookmarks} = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const removeFromBookmarkList = (book) => dispatch(removeBookmark(book));

  const handleRemoveBookmark = (book) => {
    removeFromBookmarkList(book);
  };

  return (
    <View style={{flex: 1}}>
      <SharedElement id={`item.${item.id}.opportunity.logoUrl`}>
        <Image
          source={{uri: item.opportunity.logoUrl}}
          style={styles.image}
          resizeMode="cover"
        />
      </SharedElement>
      <Animatable.View
        ref={buttonRef}
        animation="fadeIn"
        duration={600}
        delay={300}
        style={[StyleSheet.absoluteFillObject]}>
        <IconButton
          icon="close"
          size={28}
          color={theme.colors.accent}
          style={styles.closeButton}
          onPress={() => {
            buttonRef.current.fadeOut(100).then(() => {
              navigation.goBack();
            });
          }}
        />
      </Animatable.View>
      <IconButton
        icon="bookmark"
        size={28}
        color={theme.colors.accent}
        style={styles.bookMarkButton}
        onPress={() => {
          handleRemoveBookmark(item);
          navigation.goBack();
        }}
      />
      <View
        style={{flexDirection: 'row', marginTop: 10, paddingHorizontal: 20}}>
        <View style={{flexDirection: 'column', paddingLeft: 6}}>
          <SharedElement id={`item.${item.id}.opportunity.title`}>
            <Text style={styles.titleText}>{item.opportunity.title}</Text>
          </SharedElement>
          <SharedElement id={`item.${item.id}.opportunity.organisation`}>
            <Text style={styles.descriptionText}>
              {item.opportunity.organisation}
            </Text>
          </SharedElement>
        </View>
      </View>
      <ScrollView
        indicatorStyle="white"
        style={{
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{paddingVertical: 20}}>
        <Text style={styles.detailsText}>{item.opportunity.description}</Text>
      </ScrollView>
    </View>
  );
};

SavedDetailScreen.sharedElements = (route) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.id}.opportunity.logoUrl`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.opportunity.title`,
      animation: 'fade',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.opportunity.organisation`,
      animation: 'fade',
      resize: 'clip',
    },
  ];
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: ITEM_HEIGHT,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 2,
  },
  bookMarkButton: {
    position: 'absolute',
    top: 360,
    right: 20,
    zIndex: 2,
  },
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
  detailsText: {
    fontSize: 18,
    color: theme.colors.onBackground,
    lineHeight: 24,
    marginBottom: 4,
  },
});

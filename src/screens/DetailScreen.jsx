import React, {useRef, useEffect} from 'react';
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
import {getBooks, addBookmark, removeBookmark} from '../redux/actions';

const {height} = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.5;

export const DetailScreen = ({navigation, route}) => {
  const {item} = route.params;
  const buttonRef = useRef();
  const {books, bookmarks} = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const fetchBooks = () => dispatch(getBooks());
  const addToBookmarkList = (book) => dispatch(addBookmark(book));
  const removeFromBookmarkList = (book) => dispatch(removeBookmark(book));

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddBookmark = (book) => {
    addToBookmarkList(book);
  };

  const handleRemoveBookmark = (book) => {
    removeFromBookmarkList(book);
  };

  //should this be moved to reducer
  const ifExists = (book) => {
    if (bookmarks.filter((item) => item.id === book.id).length > 0) {
      return true;
    }

    return false;
  };
  return (
    <View style={{flex: 1}}>
      <SharedElement id={`item.${item.id}.image_url`}>
        <Image
          source={{uri: item.image_url}}
          style={styles.image}
          resizeMode="cover"
        />
      </SharedElement>
      <Animatable.View
        ref={buttonRef}
        animation="fadeIn"
        duration={600}
        delay={300}
        style={[StyleSheet.absoluteFillObject]}></Animatable.View>
      <IconButton
        icon="close"
        size={28}
        color={theme.colors.accent}
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      />
      <IconButton
        icon={ifExists(item) ? 'bookmark' : 'bookmark-outline'}
        size={28}
        color={theme.colors.accent}
        style={styles.bookMarkButton}
        onPress={() =>
          ifExists(item) ? handleRemoveBookmark(item) : handleAddBookmark(item)
        }
      />
      <View
        style={{flexDirection: 'row', marginTop: 10, paddingHorizontal: 20}}>
        <View style={{flexDirection: 'column', paddingLeft: 6}}>
          <SharedElement id={`item.${item.id}.title`}>
            <Text style={styles.titleText}>{item.title}</Text>
          </SharedElement>
          <SharedElement id={`item.${item.id}.description`}>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </SharedElement>
        </View>
      </View>
      <ScrollView
        indicatorStyle="white"
        style={{
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{paddingVertical: 20}}>
        <Text style={styles.detailsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
};

DetailScreen.sharedElements = (route) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.id}.image_url`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.title`,
      animation: 'fade',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.description`,
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

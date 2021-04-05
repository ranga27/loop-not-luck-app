import React, {useRef, useEffect} from 'react';
import {theme} from '../constants';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Text, Button, FAB} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {getBooks, addBookmark, removeBookmark} from '../redux/booksActions';

const {height} = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.5;

export const OppsDetails = ({navigation, route}) => {
  const {item} = route.params;
  const buttonRef = useRef();
  const {books, bookmarks} = useSelector((state) => state.favs);
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

  function parseDateString(originalValue) {
    const parsedDate = isDate(originalValue)
      ? originalValue
      : parse(originalValue, 'dd/MM/yyyy', new Date());
    return parsedDate;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.oppsContainer}>
          <View style={styles.card}>
            <Image
              source={{uri: item.logoUrl}}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={styles.summaryContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.descriptionText}>{item.organisation}</Text>
              <Text style={styles.dateText}>
                Closing date: {item.deadline.toDate().toDateString()}
              </Text>
              <FAB
                style={styles.fab}
                animated
                small
                icon={ifExists(item) ? 'check' : 'plus'}
                label={ifExists(item) ? 'Saved' : 'Save'}
                onPress={() =>
                  ifExists(item)
                    ? handleRemoveBookmark(item)
                    : handleAddBookmark(item)
                }
              />
              <FAB
                style={styles.fab}
                animated
                small
                icon={'plus'}
                label={'Apply'}
                onPress={() => console.log('Applied')}
              />
            </View>
          </View>
          <Text style={styles.detailsText}>{item.positionType.label}</Text>
          <Text style={styles.detailsText}>{item.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  oppsContainer: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    flex: 1,
    padding: 12,
    //borderColor: 'white',
    //borderWidth: 1,
  },
  logo: {
    borderRadius: 18,
    width: 120,
    height: 120,
    borderWidth: 3,
    borderColor: theme.colors.background,
  },
  summaryContainer: {
    flex: 1,
    paddingLeft: 8,
    //borderColor: 'white',
    //borderWidth: 1,
  },
  titleText: {
    color: theme.colors.primary,
    fontSize: 20,
  },
  descriptionText: {
    color: theme.colors.primary,
    fontSize: 18,
  },
  dateText: {
    color: theme.colors.primary,
    fontSize: 14,
  },
  fab: {
    //position: 'absolute',
    width: 100,
    margin: 4,
    // right: 10,
    //bottom: 10,
  },
  detailsText: {
    fontSize: 18,
    //color: theme.colors.onBackground,
    lineHeight: 24,
    marginBottom: 4,
  },
});

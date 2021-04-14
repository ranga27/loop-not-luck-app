import React from 'react';
import {theme} from '../constants';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {Text, FAB} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {
  addToAppliedOpportunityList,
  addToSavedOpportunityList,
  removeFromSavedOpportunityList,
} from '../firebase/firestoreService';

export const OpportunityDetails = ({item}) => {
  const deadline = new Date(item.deadline.seconds * 1000).toDateString();
  const {saved, applied} = useSelector((state) => state.favs);
  const {currentUser} = useSelector((state) => state.auth);

  const handleAddSaved = (opps) => {
    addToSavedOpportunityList(currentUser.uid, opps);
  };

  const handleRemoveSaved = (opps) => {
    const [oppsToRemove] = saved.filter((item) => item.id === opps.key);
    removeFromSavedOpportunityList(currentUser.uid, oppsToRemove);
  };

  const ifExistsInSaved = (opps) => {
    if (saved.filter((item) => item.id === opps.key).length > 0) {
      return true;
    }
    return false;
  };

  const handleAddApplied = (opps) => {
    addToAppliedOpportunityList(currentUser.uid, opps);
  };

  const handleRemoveApplied = (opps) => {
    //do nothing, get rid of this method
  };

  // Reuse if exists in saved methods
  const ifExistsInApplied = (opps) => {
    if (applied.filter((item) => item.id === opps.key).length > 0) {
      return true;
    }
    return false;
  };

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
              <Text style={styles.dateText}>Closing date: {deadline}</Text>
              <FAB
                style={styles.fab}
                animated
                small
                icon={ifExistsInSaved(item) ? 'check' : 'plus'}
                label={ifExistsInSaved(item) ? 'Saved' : 'Save'}
                onPress={() =>
                  ifExistsInSaved(item)
                    ? handleRemoveSaved(item)
                    : handleAddSaved(item)
                }
              />
              <FAB
                style={styles.fab}
                animated
                small
                disabled={ifExistsInApplied(item)}
                icon={ifExistsInApplied(item) ? 'check' : 'plus'}
                label={ifExistsInApplied(item) ? 'Applied' : 'Apply'}
                onPress={() =>
                  ifExistsInApplied(item)
                    ? handleRemoveApplied(item)
                    : handleAddApplied(item)
                }
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
    width: 120,
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

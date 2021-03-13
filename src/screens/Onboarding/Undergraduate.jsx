import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {IconButton, RadioButton, Text} from 'react-native-paper';
import {SingleSelect} from '../../components';
import {societies} from '../../constants';
import useValueChange from '../../hooks/useValueChange';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('screen');

export const Undergraduate = ({navigation}) => {
  const {currentUserProfile} = useSelector((state) => state.profile);

  const [selection, setSelection] = useState('');
  useValueChange(selection, 'ugUniversity');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {currentUserProfile.degree === 'Current UG' ? (
          <Text style={{fontSize: 24}}>
            What undergraduate university are you attending?
          </Text>
        ) : (
          <Text style={{fontSize: 24}}>
            What undergraduate university have you attended?
          </Text>
        )}
      </View>
      <View style={styles.select}>
        <SingleSelect
          data={societies}
          value={selection}
          onChange={(value) => setSelection(value)}
          enableSearch
        />
      </View>
      <View style={styles.navButton}>
        <IconButton
          icon="chevron-right"
          size={30}
          onPress={() => navigation.navigate('UGCourse')}></IconButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    //width: width * 0.8,
    height: 100,
    //borderWidth: 2,
    //borderColor: 'white',
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'center',
    flexGrow: 4,
  },
  select: {
    flex: 1,
    //width: width * 0.8,
    //borderWidth: 2,
    //borderColor: 'white',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  navButton: {
    //flex: 1,
    //borderWidth: 2,
    //borderColor: 'white',
    flexGrow: 4,
  },
});

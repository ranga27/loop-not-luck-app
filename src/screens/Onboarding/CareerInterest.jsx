import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Text, Chip, Portal, Modal} from 'react-native-paper';
import {Button, InputField} from '../../components';
import {theme, careerInterestsOptions} from '../../constants';
import DragSortableView from './DragSortableView';
import useValueChange from '../../hooks/useValueChange';
import {updateUserProfile} from '../../firebase/firestoreService';

const {width} = Dimensions.get('window');

export const CareerInterest = () => {
  const [options, setOptions] = useState(careerInterestsOptions);
  const [isScrollEnabled, setScrollEnabled] = useState(true);
  const [isEnterEdit, setEnterEdit] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [userInterest, setUserInterest] = useState('');
  const [selection, setSelection] = useState('');
  useValueChange(selection, 'careerInterests');
  const hideModal = () => setModalVisible(false);
  const deleteOption = (item) => {
    setOptions(options.filter((option) => option.rank !== item.rank));
  };
  const renderItem = (item, index) => {
    return <Chip onClose={() => deleteOption(item)}>{item.value}</Chip>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} scrollEnabled={isScrollEnabled}>
        <View style={styles.titleContainer}>
          <Text style={styles.textStyle}>
            There are thousands of opportunities out there. To help us find the
            ones most relevant to you - drag & sort the options, based on your
            order of preference
          </Text>
        </View>
        <View style={styles.sortContainer}>
          <DragSortableView
            dataSource={options}
            parentWidth={width / 2}
            childrenWidth={width / 2}
            childrenHeight={30}
            marginChildrenTop={5}
            marginChildrenBottom={5}
            onDragStart={(startIndex, endIndex) => {
              if (!isEnterEdit) {
                setEnterEdit(true);
                setScrollEnabled(false);
              } else {
                setScrollEnabled(false);
              }
            }}
            onDragEnd={(item, index) => {
              setScrollEnabled(true);
            }}
            onDataChange={(data) => {
              // delete or add data to refresh
              setOptions(data);
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
          <View>
            <Button
              title="Add your own"
              modeValue="outlined"
              onPress={() => {
                setUserInterest('');
                setModalVisible(true);
              }}
            />
            <Button
              title="Submit"
              modeValue="contained"
              onPress={() => {
                const output = options.map((option) => ({
                  value: option.value,
                  rank: options.findIndex((item) => item === option),
                }));
                setSelection(output);
                updateUserProfile();
              }}
            />
            <Portal>
              <Modal
                visible={isModalVisible}
                onDismiss={hideModal}
                contentContainerStyle={styles.modalContainer}>
                <Text>Add your career interest</Text>
                <InputField
                  value={userInterest}
                  onChangeText={(text) => setUserInterest(text)}
                />
                <Button
                  title="Add"
                  modeValue="contained"
                  onPress={() => {
                    const newData = [...options]; //pointer problem
                    newData.push({
                      value: userInterest,
                      rank: options.length,
                    });
                    setOptions(newData);
                    hideModal();
                  }}
                />
              </Modal>
            </Portal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: StatusBar.currentHeight},
  scrollView: {
    marginHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  sortContainer: {
    marginLeft: 20,
  },
  textStyle: {
    fontSize: 18,
  },
  sortContainer: {
    marginLeft: 20,
  },
  modalContainer: {
    backgroundColor: theme.colors.background,
    padding: 20,
  },
});

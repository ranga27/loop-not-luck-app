import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Text, Chip, Portal, Modal} from 'react-native-paper';
import {Button, InputField} from '../../components';
import {theme, careerInterestsOptions} from '../../constants';
import DragSortableView from './DragSortableView';

const {width} = Dimensions.get('window');
const parentWidth = width - 18;
const childrenWidth = 76;
const childrenHeight = 76;
const marginChildrenTop = 7;
const marginChildrenBottom = 0;
const marginChildrenLeft = 0;
const marginChildrenRight = 7;

export const CareerInterest = () => {
  const [data, setData] = useState(careerInterestsOptions);
  const [isScrollEnabled, setScrollEnabled] = useState(true);
  const [isEnterEdit, setEnterEdit] = useState(true);
  const [visible, setVisible] = useState(false);
  const [text, setText] = React.useState('');

  const containerStyle = {
    backgroundColor: theme.colors.background,
    padding: 20,
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const renderItem = (item, index) => {
    if (isEnterEdit) {
      return (
        <View style={styles.item}>
          <View style={styles.item_children}>
            <Text style={styles.txt}>{item.label}</Text>
          </View>
          <Image
            style={styles.item_delete_icon}
            source={require('./clear.png')}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.item}>
          <View style={styles.item_children}>
            <Text style={styles.txt}>{item.label}</Text>
          </View>
        </View>
      );
    }
  };
  return (
    <ScrollView style={styles.mainContainer} scrollEnabled={isScrollEnabled}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 18}}>
          There are thousands of opportunities out there. To help us find the
          ones most relevant to you - drag & sort the options, based on priority
        </Text>
      </View>
      <View style={styles.sort}>
        <DragSortableView
          dataSource={data}
          parentWidth={parentWidth}
          childrenWidth={childrenWidth}
          childrenHeight={childrenHeight}
          marginChildrenTop={marginChildrenTop}
          marginChildrenBottom={marginChildrenBottom}
          marginChildrenLeft={marginChildrenLeft}
          marginChildrenRight={marginChildrenRight}
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
            if (data.length != data.length) {
              setData(data);
            }
          }}
          onClickItem={(data, item, index) => {
            // click delete
            if (isEnterEdit) {
              const newData = [...data];
              newData.splice(index, 1);
              setData(newData);
            }
          }}
          keyExtractor={(item, index) => index.toString()} // FlatList作用一样，优化
          renderItem={renderItem}
        />
        <View
          style={[
            {
              width: childrenWidth,
              height: childrenHeight,
              marginTop: marginChildrenTop,
              marginLeft: marginChildrenLeft,
              marginBottom: marginChildrenBottom,
              marginRight: marginChildrenRight,
              justifyContent: 'center',
              alignItems: 'center',
            },
            data.length % 4 !== 0
              ? {
                  position: 'absolute',
                  zIndex: 999,
                  top:
                    parseInt(data.length / 4) *
                    (childrenHeight + marginChildrenBottom + marginChildrenTop),
                  left:
                    parseInt(data.length % 4) *
                    (childrenWidth + marginChildrenLeft + marginChildrenRight),
                }
              : {},
          ]}>
          <TouchableOpacity
            style={styles.item_children}
            onPress={() => {
              setText('');
              showModal();
            }}>
            <Text style={{fontSize: 24, color: '#000'}}>+</Text>
          </TouchableOpacity>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}>
              <Text>Register new interests.</Text>
              <InputField value={text} onChangeText={(text) => setText(text)} />
              <Button
                title="Submit"
                modeValue="contained"
                onPress={() => {
                  const newData = [...data]; //pointer problem
                  newData.push({
                    label: text,
                    value: text,
                  });
                  setData(newData);
                  hideModal();
                  console.log(data);
                }}
              />
            </Modal>
          </Portal>
        </View>
      </View>
      <Button title="Submit"
                modeValue="contained"
                onPress={console.log(item,index)}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, paddingTop: 20},
  titleContainer: {
    //borderWidth: 1,
    //borderColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sort: {
    marginLeft: 20,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  receivingListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: 'white',
  },
  draxListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: 'white',
  },
  receivingZone: {
    borderRadius: 10,
    margin: 5,
    padding: 12,
    backgroundColor: theme.colors.secondary,
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 4,
  },
  draggableBox: {
    borderRadius: 10,
    marginTop: 5,
    marginRight: 5,
    padding: 12,
    backgroundColor: theme.colors.primary,
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: theme.colors.secondary,
    borderWidth: 4,
  },
  itemSeparator: {
    height: 15,
  },
  receivingZoneContainer: {
    padding: 5,
    height: 100,
  },
  textStyle: {
    fontSize: 18,
  },
  txt: {
    fontSize: 18,
    lineHeight: 24,
    padding: 5,
  },
  sort: {
    marginLeft: 20,
  },
  item: {
    width: childrenWidth,
    height: childrenHeight,
  },
  item_children: {
    width: childrenWidth - 8,
    height: childrenHeight - 8,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'white',
    marginTop: 8,
  },
  item_delete_icon: {
    width: 14,
    height: 14,
    position: 'absolute',
    right: 1,
    top: 1,
  },
  item_icon: {
    width: childrenWidth - 4 - 8,
    height: childrenHeight - 4 - 8,
    resizeMode: 'contain',
    position: 'absolute',
  },
});

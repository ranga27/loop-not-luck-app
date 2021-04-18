import * as React from 'react';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import {Text, Chip} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DraxProvider, DraxView, DraxList} from 'react-native-drax';
import {theme, careerInterestsOptions} from '../../constants';

export const CareerInterest = () => {
  const FirstReceivingItemList = [
    {
      label: 'Priority 1',
    },
    {
      label: 'Priority 2',
    },
    {
      label: 'Priority 3',
    },
  ];

  const [receivingItemList, setReceivedItemList] = React.useState(
    FirstReceivingItemList,
  );
  const [dragItemMiddleList, setDragItemListMiddle] = React.useState(
    careerInterestsOptions,
  );

  const DragUIComponent = ({item, index}) => {
    return (
      <DraxView
        style={styles.draggableBox}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={index}
        longPressDelay={150}
        key={index}>
        <Text style={styles.textStyle}>{item.label}</Text>
      </DraxView>
    );
  };

  const ReceivingZoneUIComponent = ({item, index}) => {
    return (
      <DraxView
        style={styles.receivingZone}
        receivingStyle={styles.receiving}
        renderContent={({viewState}) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
              <Text style={styles.textStyle}>{item.label}</Text>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          let selected_item = dragItemMiddleList[event.dragged.payload];
          console.log('onReceiveDragDrop::index', selected_item, index);
          console.log('onReceiveDragDrop :: payload', event.dragged.payload);
          let newReceivingItemList = [...receivingItemList];
          console.log(
            'onReceiveDragDrop :: newReceivingItemList',
            newReceivingItemList,
          );
          newReceivingItemList[index] = selected_item;
          setReceivedItemList(newReceivingItemList);
          let arr = dragItemMiddleList.filter((item) => item !== selected_item);
          console.log(arr);
          let newDragItemMiddleList = [...dragItemMiddleList];
          console.log(
            'onReceiveDragDrop :: newDragItemMiddleList 1',
            newDragItemMiddleList,
          );
          newDragItemMiddleList[event.dragged.payload] =
            receivingItemList[index];
          console.log(
            'onReceiveDragDrop :: newDragItemMiddleList 2',
            newDragItemMiddleList,
          );
          setDragItemListMiddle(arr);
        }}
      />
    );
  };

  const FlatListItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 18}}>
          There are thousands of opportunities out there. To help us find the
          ones most relevant to you - select your area(s) of interests, drag &
          drop onto the placeholders, based on priority
        </Text>
      </View>
      <DraxProvider>
        <View style={styles.listContainer}>
          <View style={styles.receivingListContainer}>
            {receivingItemList.map((item, index) =>
              ReceivingZoneUIComponent({item, index}),
            )}
          </View>
          <View style={styles.draxListContainer}>
            <DraxList
              data={dragItemMiddleList}
              renderItemContent={DragUIComponent}
              keyExtractor={(item, index) => index.toString()}
              numColumns={4}
              ItemSeparatorComponent={FlatListItemSeparator}
              scrollEnabled={true}
            />
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  titleContainer: {
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'flex-end',
    padding: 20,
    alignItems: 'center',
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
});

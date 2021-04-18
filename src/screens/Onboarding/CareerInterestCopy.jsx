import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
//import * as Haptics from 'expo-haptics';
import {Feather} from 'react-native-vector-icons';

import {createDndContext} from 'react-native-easy-dnd';

const {Provider, Droppable, Draggable} = createDndContext();

export const CareerInterest = () => {
  const droppableOpacity = React.useRef(new Animated.Value(0));
  const trashIconScale = React.useRef(new Animated.Value(1));
  const [items, setItems] = React.useState([1, 2, 3]);

  const animateValue = (ref, toValue) =>
    Animated.timing(ref.current, {
      toValue,
      duration: 300,
      useNativeDriver: true, // Add This line
    }).start();

  return (
    <Provider>
      <View style={styles.container}>
        <Draggable
          onDragStart={() => {
            console.log('Started draggging');
          }}
          onDragEnd={() => {
            console.log('Ended draggging');
          }}
          payload="my-draggable-item">
          {({viewProps}) => {
            return (
              <Animated.View
                {...viewProps}
                style={[
                  viewProps.style,
                  {width: 200, height: 200, backgroundColor: 'red'},
                ]}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Drag me</Text>
              </Animated.View>
            );
          }}
        </Draggable>

        <Droppable
          onEnter={() => {
            console.log('Draggable entered');
          }}
          onLeave={() => {
            console.log('Draggable left');
          }}
          onDrop={({payload}) => {
            console.log(
              'Draggable with the following payload was dropped',
              payload,
            );
          }}>
          {({active, viewProps}) => {
            return (
              <Animated.View
                {...viewProps}
                style={[
                  {
                    width: 300,
                    height: 200,
                    backgroundColor: active ? 'blue' : 'green',
                  },
                  viewProps.style,
                ]}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  Drop here
                </Text>
              </Animated.View>
            );
          }}
        </Droppable>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  droppableArea: {
    width: '100%',
    height: 120,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  droppableText: {color: 'white', fontWeight: '700'},
  trashIconWrapper: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  draggable: {
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ababab',
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
});

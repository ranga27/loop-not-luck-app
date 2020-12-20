import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddRoomScreen from '../screens/AddRoomScreen';
import {IconButton} from 'react-native-paper';

/**
 * This will provide access to screens
 * only when the user is logged in
 */

const ChatAppStack = createStackNavigator();
const ModalStack = createStackNavigator();

/**
 * All chat app related screens
 */
function Home() {
  return (
    <ChatAppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6646ee',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
        },
      }}>
      <ChatAppStack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <IconButton
              icon="message-plus"
              size={28}
              color="#ffffff"
              onPress={() => navigation.navigate('AddRoom')}
            />
          ),
        })}
      />
    </ChatAppStack.Navigator>
  );
}

export default function HomeStack() {
  return (
    <ModalStack.Navigator headerMode="none">
      <ModalStack.Screen name="Home" component={Home} />
      <ModalStack.Screen name="AddRoom" component={AddRoomScreen} />
    </ModalStack.Navigator>
  );
}

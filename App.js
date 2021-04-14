import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home.js';
import ABCScreen from './abc.js';
import NumberScreen from './123.js';
import NewPicScreen from './new-pic.js';
import PicturesScreen from './camera.js';
import PicsScreen from './existing-pics.js';
import EditScreen from './edit-pics.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ABC" component={ABCScreen} />
        <Stack.Screen name="123" component={NumberScreen} />
        <Stack.Screen name="Add Picture" component={NewPicScreen} />
        <Stack.Screen name="Pictures" component={PicturesScreen} />
        <Stack.Screen name="Existing Pictures" component={PicsScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
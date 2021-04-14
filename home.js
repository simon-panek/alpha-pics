//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking, TouchableOpacity, TextInput, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import Header from './Header';

export default function Home({ navigation }){

  const [cameraPermissions, setCameraPermissions] = useState(false);

  const getPermissions =  async () => {
    const statusCamera = await Permissions.getAsync(Permissions.CAMERA);
    console.log({statusCamera});
    if(statusCamera !== 'granted') {
      const statusTwoCamera= await Permissions.askAsync(Permissions.CAMERA);
      console.log('statusTwoName', {statusTwoCamera});
    
      if(statusTwoCamera.status === 'granted'){
        console.log('Permission granted');
        setCameraPermissions(true);
      } else {
        setCameraPermissions(false);
      }
    }
  }

  useEffect (() => {
    getPermissions();
  },[])

  if(cameraPermissions !== true){
    return <Text style={styles.text}>No camera permissions granted!</Text>
  }
  
  if(cameraPermissions === true){
    console.log('Permission rendering');
  }

  return (
    <View>
      <Header />
      <View style={styles.mainButtonOne}>
        <Text style={styles.text}>
          ABC
        </Text>
        <Button
        title="Go to ABC"
        onPress={() => navigation.navigate('ABC')}
      />
      </View>
      <View style={styles.mainButtonTwo}>
        <Text style={styles.text}>
          123
        </Text>
        <Button
        title="Go to 123"
        onPress={() => navigation.navigate('123')}
      />
      </View>
      <View style={styles.mainButtonThree}>
        <Text style={styles.text}>
          Pictures
        </Text>
        <Button
        title="Go to Pictures"
        onPress={() => navigation.navigate('Pictures')}
        />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ada5a5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    width: '100%'
  },
  text: {
    // marginTop: '15%',
    padding: '5%',
    fontWeight: 'bold',
    color: 'white', 
    textAlign: 'center',
    fontSize: 50
  }, 
  mainButtonOne: {
    borderWidth: 2,
    backgroundColor: '#8f4acf',
    color: 'white',
    fontWeight: 'bold',
    height: '20%',
    width: '90%',
    margin: '5%'
  },
  mainButtonTwo: {
    borderWidth: 2,
    backgroundColor: '#008a05',
    color: 'white',
    fontWeight: 'bold',
    height: '20%',
    width: '90%',
    margin: '5%'
  },
  mainButtonThree: {
    borderWidth: 2,
    backgroundColor: '#b03204',
    color: 'white',
    fontWeight: 'bold',
    height: '20%',
    width: '90%',
    margin: '5%'
  },
  cameraView: {
    alignSelf: 'center',
    width: '170%',
    height: '85%'
  },
  welcome: {
    fontSize: 18,
    margin: '5%'
  }, 
  listText: {
    textAlign: 'center',
    margin: '2.5%', 
    marginBottom: '10%'
  },
  totalNotes: {
    margin: '10%',
    marginTop: '20%',
    textAlign: 'center'
  },
  footer: {
    marginBottom: '15%'
  },
  descriptionStyle: {
    alignItems: 'center'
  }
});


//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking, TouchableOpacity, TextInput, Image } from 'react-native';
import Header from './Header';

export default function CameraChoice({ navigation }){


  return (
    <View>
      <Header />
      <View style={styles.mainButtonOne}>
        <Text style={styles.text}>
          New Pic Button Here
        </Text>
        <Button
        title="Go to New Picture"
        onPress={() => navigation.navigate('Add Picture')}
        />
      </View>
      <View style={styles.mainButtonTwo}>
        <Text style={styles.text}>
          Edit Existing Button Here
        </Text>
        <Button
        title="Edit Existing"
        onPress={() => navigation.navigate('Existing Pictures')}
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
    fontSize: 25
  }, 
  mainButtonOne: {
    borderWidth: 2,
    backgroundColor: '#8f4acf',
    color: 'white',
    fontWeight: 'bold',
    height: '25%',
    width: '90%',
    margin: '5%'
  },
  mainButtonTwo: {
    borderWidth: 2,
    backgroundColor: '#008a05',
    color: 'white',
    fontWeight: 'bold',
    height: '25%',
    width: '90%',
    margin: '5%'
  },
  mainButtonThree: {
    borderWidth: 2,
    backgroundColor: '#b03204',
    color: 'white',
    fontWeight: 'bold',
    height: '10%',
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
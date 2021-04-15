//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking, TouchableOpacity, TextInput, Image } from 'react-native';
import { Picker } from '@react-native-community/picker'
import Header from './Header';

export default function NumberGame(){

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <Header />
      <View style={styles.mainButtonOne}>
        <Text style={styles.text}>
          Random 123 pic here
        </Text>
      </View>
      <View style={styles.mainButtonTwo}>
      <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label='0' value='0' />
          <Picker.Item label='1' value='1' />
          <Picker.Item label='2' value='2' />
          <Picker.Item label='3' value='3' />
          <Picker.Item label='4' value='4' />
          <Picker.Item label='5' value='5' />
          <Picker.Item label='6' value='6' />
          <Picker.Item label='7' value='7' />
          <Picker.Item label='8' value='8' />
          <Picker.Item label='9' value='9' />
          <Picker.Item label='10' value='10' />
          <Picker.Item label='11' value='11' />
          <Picker.Item label='12' value='12' />
          <Picker.Item label='13' value='13' />
          <Picker.Item label='14' value='14' />
          <Picker.Item label='15' value='15' />
          <Picker.Item label='16' value='16' />
          <Picker.Item label='17' value='17' />
          <Picker.Item label='18' value='18' />
          <Picker.Item label='19' value='19' />
          <Picker.Item label='20' value='20' />
        </Picker>
      </View>
      <View style={styles.mainButtonThree}>
        <Text style={styles.text}>
          Go Button Here
        </Text>
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
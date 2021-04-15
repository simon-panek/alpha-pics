//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking, TouchableOpacity, TextInput, Image } from 'react-native';
import { Picker } from '@react-native-community/picker'
import Header from './Header';

export default function ExistingPics({ navigation }){

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <Header />
      <View style={styles.mainButtonOne}>
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
          <Picker.Item label='A' value='A' />
          <Picker.Item label='B' value='B' />
          <Picker.Item label='C' value='C' />
          <Picker.Item label='D' value='D' />
          <Picker.Item label='E' value='E' />
          <Picker.Item label='F' value='F' />
          <Picker.Item label='G' value='G' />
          <Picker.Item label='H' value='H' />
          <Picker.Item label='I' value='I' />
          <Picker.Item label='J' value='J' />
          <Picker.Item label='K' value='K' />
          <Picker.Item label='L' value='L' />
          <Picker.Item label='M' value='M' />
          <Picker.Item label='N' value='N' />
          <Picker.Item label='O' value='O' />
          <Picker.Item label='P' value='P' />
          <Picker.Item label='Q' value='Q' />
          <Picker.Item label='R' value='R' />
          <Picker.Item label='S' value='S' />
          <Picker.Item label='T' value='T' />
          <Picker.Item label='U' value='U' />
          <Picker.Item label='V' value='V' />
          <Picker.Item label='W' value='W' />
          <Picker.Item label='X' value='X' />
          <Picker.Item label='Y' value='Y' />
          <Picker.Item label='Z' value='Z' />
        </Picker>
      </View>
      <View style={styles.mainButtonTwo}>
        <Text style={styles.text}>
          Display all pics for a chosen letter / number here
        </Text>
        <Button
        title="Edit"
        onPress={() => navigation.navigate('Edit')}
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
    fontSize: 15
  }, 
  mainButtonOne: {
    borderWidth: 2,
    backgroundColor: '#8f4acf',
    color: 'white',
    fontWeight: 'bold',
    height: '15%',
    width: '90%',
    margin: '5%'
  },
  mainButtonTwo: {
    borderWidth: 2,
    backgroundColor: '#008a05',
    color: 'white',
    fontWeight: 'bold',
    height: '35%',
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
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking, TouchableOpacity, TextInput, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
  
  const navigation = useNavigation();

  return(
    <View>
        <Text style={styles.text}>
          Alpha-Pics
        </Text>
        <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d42f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    width: '100%',
    height: '15%',
    borderWidth: 1
  },
  text: {
    marginTop: '15%',
    padding: '5%',
    fontWeight: 'bold', 
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#2a07f0',
    borderWidth: 1
  }, 
});
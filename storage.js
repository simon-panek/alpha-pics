import { AsyncStorage } from "@react-native-community/async-storage";

export default function storage () {

  return (
    <View>
      <Button onPress={storeData()} title='Save Data' />
      <Button onPress={storeData()} title='Read Data' />
    </View>
  )
}

storeData = async () => {
  try {
    await AsyncStorage.setItem('setting', 'save test one');
    alert('saved');
  } catch (error) {
    console.log('Error saving data!!!');
  }
}
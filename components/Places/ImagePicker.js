import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {launchCameraAsync} from 'expo-image-picker'

const ImagePicker = () => {
     async function takeImageHandler(){
        const image=await launchCameraAsync({
            allowsEditing: true,
            quality:0.5,
            aspect:[16, 9]
        })
        console.log(image);
    }
  return (
    <View>
      <Text></Text>
      <Button title='Take Image' onPress={takeImageHandler}/>
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({})
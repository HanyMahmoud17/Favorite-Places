import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../../constants/colors'

const PlaceForm = () => {
    const [enteredTitle,setEnteredTitle]=useState('');
    function changeTitleHandler(enteredTitle){
        setEnteredTitle(enteredTitle);
    }
  return (
    <ScrollView style={styles.form}>
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle}/>
        </View>
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
  form:{
    flex:1,
    padding:24
  },
  label:{
    // fontSize:14,
    fontWeight:'bold',
    marginBottom:4,
    color:Colors.primary500,

  },
  input:{
    paddingHorizontal:4,
    paddingVertical:8,
    marginVertical:8,
    fontSize:16,
    borderBottomColor:Colors.primary700,
    backgroundColor:Colors.primary100,
    borderBottomWidth:2

  }
})
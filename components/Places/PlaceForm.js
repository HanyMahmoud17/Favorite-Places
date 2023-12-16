import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useCallback, useState } from "react";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage,setSelectedImage] = useState();
  const [pickedLocation,setPickedLocation] = useState();

  function changeTitleHandler(enteredTitle) {
    setEnteredTitle(enteredTitle);
  }
  function selectImageHandler(imageUri){
    setSelectedImage(imageUri)
  }
  // I use a hook of callback because i don't need the component of locationPicker to render for many time 
  const pickedLocationHandler=useCallback((location)=>{
    setPickedLocation(location)
  },[])


  function savePlaceHandler() {
    console.log(enteredTitle);
    console.log(selectedImage);
    console.log(pickedLocation);
  }
  
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onSelectedImage={selectImageHandler} />
      <LocationPicker onPickedLocation={pickedLocationHandler} />
      <Button onPress={savePlaceHandler}>Add a Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    // fontSize:14,
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    marginVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    backgroundColor: Colors.primary100,
    borderBottomWidth: 2,
  },
});

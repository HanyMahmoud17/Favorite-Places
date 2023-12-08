import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

const PlaceList = ({ places }) => {
  if (!places || places.length == 0) {
    return (
      <View style={styles.callBackContainer}>
        <Text style={styles.callBackText}>There is no places ,Add a place !</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceItem place={item} />}
      />
    </View>
  );
};

export default PlaceList;

const styles = StyleSheet.create({
    callBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  callBackText:{
    fontWeight: "bold",
    fontSize:18,
    color:Colors.primary200
  }
});

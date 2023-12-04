import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ places }) => {
  if (!places || places.length == 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>There is no places ,Add a place !</Text>
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
    fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  fallBackText:{
    fontWeight: "bold",
    fontSize:24
  }
});

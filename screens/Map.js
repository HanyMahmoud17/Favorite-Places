import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const Map = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();
  const region = {
    latitude: 31.046095,
    longitude: 31.364152,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({
      lat: lat,
      lng: lng,
    });
  }
  // i convert this to a call back function with use callBackHook to create this function in its using only this for perfomance
//   i do that because this function is use in a nother hook or useLayoutEffect 
  const saveSelectedLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location selected",
        "Press on the map to select a location"
      );
      return;
    }
    navigation.navigate("AddPlace", {
      selectLat: selectedLocation.lat,
      selectlng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <Ionicons
          name="save"
          size={24}
          color={tintColor}
          onPress={saveSelectedLocation}
        />
      ),
    });
  }, [navigation, saveSelectedLocation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Select YOUR Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

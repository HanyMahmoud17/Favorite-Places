import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView,{Marker} from "react-native-maps";

const Map = () => {
    const [selectedLocation,setSelectedLocation]=useState()
  const region = {
    latitude: 31.046095,
    longitude: 31.364152,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  function selectLocationHandler(event){
    const lat=event.nativeEvent.coordinate.latitude;
    const lng=event.nativeEvent.coordinate.longitude;
    setSelectedLocation({
        lat:lat,lng:lng
    })
}
  
  return <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
    {selectedLocation && <Marker
    title="Select YOUR Location"
    coordinate={{latitude:selectedLocation.lat,longitude:selectedLocation.lng}}
    />}
  </MapView>;
};


export default Map;

const styles = StyleSheet.create({
    map:{
        flex:1,
    }
});

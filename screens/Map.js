import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  const region = {
    latitude: 31.046095,
    longitude: 31.364152,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region}></MapView>;
};

export default Map;

const styles = StyleSheet.create({
    map:{
        flex:1,
    }
});

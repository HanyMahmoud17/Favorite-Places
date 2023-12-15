import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { getMapPreview } from "../../util/location";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";

const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState();
  const navigation = useNavigation();
  // this to render the screen of AddPlace again
  const isFocused = useIsFocused(); // this is return boolean

  // get data from params
  const route = useRoute();
  // console.log(route.params);

  // set data using useEffect to render the location if there is picked location
  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.selectLat,
        lng: route.params.selectlng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);
  // console.log(pickedLocation);
  // permission for get location
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant Location permissions to use this app."
      );
      return false;
    }

    return true;
  }
  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let LocationPreview = <Text>No Location Picked</Text>;
  if (pickedLocation) {
    LocationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    ); 
  }
  return (
    <View>
      <View style={styles.mapStyle}>{LocationPreview}</View>
      <View style={styles.actions}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: 200,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: Colors.primary100,
    marginTop:4
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

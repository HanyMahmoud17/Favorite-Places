import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";
import { PermissionStatus, getCurrentPositionAsync, useForegroundPermissions } from "expo-location";

const LocationPicker = () => {
    // permission for get location
    const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant Location permissions to use this app.'
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
    console.log(location);
  }
  function pickOnMapHandler() {}
  return (
    <View>
      <View style={styles.mapStyle}></View>
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
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

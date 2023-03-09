import * as Location from "expo-location";

import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import COLORS from "../constants/Colors";

const LocationSelector = (props) => {
  const [pickedLocation, setpickedLocation] = useState();

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la ubicacion para usar la aplicacion",
        [{ text: "ok" }]
      );
      return false;
    }
    return true;
  };
  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });
    setpickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    props.onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {pickedLocation ? (
          <Text>
            {pickedLocation.lat}, {pickedLocation.lng}
          </Text>
        ) : (
          <Text>Esperando ubicacion</Text>
        )}
      </View>
      <Button
        title="Obtener ubicacion"
        color={COLORS.PEACH_PUFF}
        onPress={handleGetLocation}
      ></Button>
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderColor: COLORS.BLUSH,
    borderWidth: 1,
  },
});

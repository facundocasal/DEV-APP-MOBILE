import { FlatList, StyleSheet, Text, View } from "react-native";

import PlaceItem from "../components/PlaceItem";
import React from "react";
import { useSelector } from "react-redux";

const PlaceDetailScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);
  const renderItem = ({ item }) => {
    <PlaceItem
      title={item.title}
      image={item.image}
      address="123 Street, city"
      onSelect={() => {
        navigation.navigate("Detalle");
      }}
    />;
  };
  return (
    <FlatList
      data={places}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlaceDetailScreen;

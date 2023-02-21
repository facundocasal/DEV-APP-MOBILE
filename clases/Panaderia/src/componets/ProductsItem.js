import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const ProductsItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelected(item)}
      style={styles.itemcontainer}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.img }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.wight} Gr.</Text>
        <Text>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsItem;

const styles = StyleSheet.create({
  itemcontainer: {
    width: "40%",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    height: "60%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    height: "40%",
  },
});

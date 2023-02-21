import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { colors } from "../constants/colors";

const CategoriesItem = ({ item, onSlected }) => {
  return (
    <View
      style={{ ...styles.containerItem, ...{ backgroundColor: item.color } }}
    >
      <TouchableOpacity style={styles.container} onPress={()=>onSlected(item)}>
        <View style={styles.textContainer}>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.img,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesItem;

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    width: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 15,
  },
  textContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagecontainer: {
    height: "100%",
    width: "40%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import CategoriesItem from "../componets/categoriesItem";
import React from "react";
import {categories} from "../data/categories"

const CategoriesScreens = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate("Products", {
      categoryId: item.id,
      title: item.title,
    });
  };
  // es con () por que buscamos que retorne un componente
  const renderCategories = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSlected={handleSelectedCategory} />
    </View>
  );
  return (
    <View style={styles.constainer}>
        <FlatList
          data={categories}
          renderItem={renderCategories}
          keyExtractor={(item) => item.id}
        />

      <Button
        title="Go to Products"
        onPress={() => {
          navigation.navigate("Products");
        }}
      />
    </View>
  );
};

export default CategoriesScreens;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesContainer: {
    padding: 10,
    height: 150,
  },
});

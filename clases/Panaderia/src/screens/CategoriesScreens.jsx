import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CategoriesItem from "../componets/CategoriesItem.js";
import React from "react";
import { selectedCategory } from "../store/actions/category.action.js";

const CategoriesScreens = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Products", {
      // esta linea ya no seria necesaria por que podemos acceder al id de la categoria por medio de redux 
      //categoryId: item.id,
      title: item.title,
      item: item,
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

import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {filteredProduct, selectedProduct}from "../store/actions/category.action"
import { useDispatch, useSelector } from "react-redux";

import ProductsItem from "../componets/ProductsItem";
import { products } from "../data/products";

const ProdutcsScreens = ({ navigation, route }) => {
  const categoryProducts = useSelector(state => state.products.filteredProduct)
  const category = useSelector(state => state.categories.selected)
  const dispatch = useDispatch()
  
  //Forma anterior de filtrar los productos sin redux
  
  // const newProducts = products.filter(
  //   product => product.category === route.params.categoryId
  // );

  const handleSelectedProducts = (item) => {
    //ejecutamos la acciont de selectedProduct cuando seleccionamos un producto 
    dispatch(selectedProduct(item.id))
    // se envia data para que se pueda utilizar en la nueva vista desde el objeto route
    navigation.navigate("Details", {
      name: item.name,
    });
  };
  const renderProductItem = ({ item }) => (
    <ProductsItem item={item} onSelected={handleSelectedProducts} />
  );
    // se va a ejecutar antes de que se renderice el elemento 
  useEffect(() => {
    dispatch(filteredProduct(category.id))
    
  }, []);

  return (
    <View style={styles.constainer}>
      <FlatList
        data={categoryProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        // numero de columnas
        numColumns={2}
      />
      <View style={styles.productsContainer}>
        <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate("Details");
          }}
        />
      </View>
    </View>
  );
};

export default ProdutcsScreens;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  productsContainer: {
    width: 150,
    height: 150,
  },
});

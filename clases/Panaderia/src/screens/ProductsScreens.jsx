import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import ProductsItem from "../componets/ProductsItem";
import { products } from "../data/products";

const ProdutcsScreens = ({ navigation, route }) => {
  const newProducts = products.filter((product)=> product.category === route.params.categoryId)
  
  const handleSelectedProducts = (item) => {
    // se envia data para que se pueda utilizar en la nueva vista desde el objeto route
    navigation.navigate("details" , {
      name : item.name
    })
  }
  const renderProductItem = ({ item }) => <ProductsItem item={item} onSelected={handleSelectedProducts}/>;
  
  useEffect(() => {
    //route es la data que recibimos del componente padre
    console.log(route.params);
    console.log(route);
  }, []);

  return (
    <View style={styles.constainer}>
      <FlatList
        data={newProducts}
        renderItem={renderProductItem}
        keyExtractor={() => (item) => item.id}
        // numero de columnas 
        numColumns={2}
      />
      <View style={styles.productsContainer}>
        <ProductsItem />
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
    justifyContent: "center",
    alignItems: "center",
  },
  productsContainer: {
    width: 150,
    height: 150,
  },
});

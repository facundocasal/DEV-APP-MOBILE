import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../store/actions/cart.action";

const DetailsScreens = ({ navigation, route }) => {
  const dispatch = useDispatch();

  
  const bread = useSelector((state) => state.products.selected);
  
  const handleAddItem = () =>{
    // pasamos bread por que va a tener los datos guardados en el estado del item 
    dispatch(addItem(bread))
  }
  useEffect(() => {
    console.log(route.params);
  }, []);

  return (
    <View style={styles.constainer}>
      <Text>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Button
        title="add to Cart"
        onPress={handleAddItem}
      />
    </View>
  );
};

export default DetailsScreens;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

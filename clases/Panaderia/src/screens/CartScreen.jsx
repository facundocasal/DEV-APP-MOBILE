import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { confirmCart, removeItem } from "../store/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";

import CartTem from "../componets/CartTem";
import React from "react";

// import { cart } from "../data/cart";


const CartScreen = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  
  const renderItemCart = ({ item }) => (
    <CartTem item={item} onDelete={handleDeleteItem} />
  );
  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total))
  };
  const handleDeleteItem = (id) => {
    dispatch(removeItem(id))
  };
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderItemCart}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleConfirmCart} style={styles.confirm}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>$ {total}-</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1 ,
    padding: 12,
    paddingBottom: 120
  },
  list : {
    flex : 1
  },
  footer: {
    padding: 12 , 
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm :{
    backgroundColor: "#ccc",
    padding : 10,
    borderRadius: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between"
  },
  total: {
    flexDirection: "row"
  },
  text :{
    fontSize: 18 ,
    padding: 8
  }
});

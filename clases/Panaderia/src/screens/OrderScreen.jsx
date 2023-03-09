import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { deleteOrders, getOrders } from "../store/actions/orders.action";
import { useDispatch, useSelector } from "react-redux";

import OrderItem from "../componets/OrderItem";

// import { orders } from '../data/orders'

const OrderScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const handleDeleteItem = (id) => {
    dispatch(deleteOrders(id));
  };
  const renderOrdersItem = ({ item }) => (
    <OrderItem item={item} onDelete={()=>handleDeleteItem(item.id)}/>
  );
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <FlatList
      data={orders}
      renderItem={renderOrdersItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react'

const CartTem = ({item , onDelete}) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.name}</Text>
      </View>
      <View style={styles.detail}>
        <View>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>Precio: $ {item.price}-</Text>
        </View>
        <TouchableOpacity onPress={()=>onDelete(item.id)}>
            <Ionicons name='trash' size={24} color="red"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartTem

const styles = StyleSheet.create({
    item:{
        flex: 1,
        padding: 8 ,
        borderBottomWidth : 1,
        backgroundColor : "#ccc"
    },
    header: {
        fontSize: 18
    },
    detail: {
        flex: 1,
        flexDirection : "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between"
    }
})
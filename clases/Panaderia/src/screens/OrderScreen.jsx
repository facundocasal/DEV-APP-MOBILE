import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import OrderItem from '../componets/OrderItem'
import React from 'react'
import { getOrders } from '../store/actions/orders.action'

// import { orders } from '../data/orders'

const OrderScreen = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders.list)
    const renderOrdersItem = ({item}) =>(
        <OrderItem item={item} onDelete={()=>console.log("delete")}/>
    )
    useEffect(() => {
      dispatch(getOrders())
    }, [])
    
    
  return (
    <FlatList 
        data={orders}
        renderItem={renderOrdersItem}
        keyExtractor={(item)=>item.id}/>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})
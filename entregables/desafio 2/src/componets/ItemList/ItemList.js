import { FlatList, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import RenderItems from './renderItems'

const ItemList = ({list, selectItem , openModal}) => {
  return (
    <View style={{ flex: 2 }}>
    <FlatList
      data={list}
      keyExtractor={item => item}
      renderItem={({item}) => <RenderItems item={item} EditItem={openModal} />}
    />
  </View>
  )
}

export default ItemList

const styles = StyleSheet.create({})
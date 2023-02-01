import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoriesScreens = ({ navigation }) => {
  return (
    <View style={styles.constainer}>
      <Text>categoriesScreens</Text>
      <Button title='Go to Products'  onPress={()=>{navigation.navigate("Products")}}/>
    </View>
  )
}

export default CategoriesScreens

const styles = StyleSheet.create({
  constainer :{
    flex: 1,
    justifyContent: "center",
    alignItems : "center"
  }
})
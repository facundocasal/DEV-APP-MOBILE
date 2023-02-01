import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ProdutcsScreens = ({ navigation }) => {
  return (
    <View style={styles.constainer}>
      <Text>produtcsScreens</Text>
      <Button title='Go to Details'  onPress={()=>{navigation.navigate("Details")}}/>
    </View>
  )
}

export default ProdutcsScreens

const styles = StyleSheet.create({
  constainer :{
    flex: 1,
    justifyContent: "center",
    alignItems : "center"
  }
})
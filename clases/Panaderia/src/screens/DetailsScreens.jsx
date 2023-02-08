import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const DetailsScreens = ({ navigation, route }) => {
  useEffect(()=>{
    console.log(route.params)
  }, [])
  return (
    <View style={styles.constainer}>
      <Text>detailsScreens</Text>
      <Button title='Go Back'  onPress={()=>{navigation.popToTop()}}/>
    </View>
  )
}

export default DetailsScreens

const styles = StyleSheet.create({
  constainer :{
    flex: 1,
    justifyContent: "center",
    alignItems : "center"
  }
})
import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const DetailsScreens = ({ navigation }) => {
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
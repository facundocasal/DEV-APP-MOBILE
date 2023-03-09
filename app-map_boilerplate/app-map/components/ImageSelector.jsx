import * as ImagePicker from "expo-image-picker"

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React , {useState} from 'react'

import COLORS from "../constants/Colors"

const ImageSelector = ({props}) => {
  const [pickedUri, setpickedUri] = useState()
  const verifyPermissions = async () =>{
    const {status} = await ImagePicker.requestCameraPermissionsAsync()
    if(status!== "granted" ) {
      Alert.alert(
        "Permisos insuficientes" ,
        "Necesita dar permisos de la camara para usar la aplicacion",
        [{text: "Ok"}]
      )
      return false
    }
    return true
  } 
  
  const handleTakeImage = async () =>{
    const isCameraOk = await verifyPermissions()
    console.log(isCameraOk)
    if(!isCameraOk) return
    // para lanzar la camara con opciones 
    const image = await ImagePicker.launchCameraAsync({
      // permite editar 
      allowsEditing: true,
      // aspecto 
      aspect: [16,9],
      // calidad 
      quality: 0.8
    }).catch((err)=>{
      console.log("soyyy error")
      console.log(err)})
    console.log(image)
    setpickedUri(image.assets[0].uri)
    props.onImage(image.assets[0].uri)
  }
  return (
    <View style={styles.container} >
      <View style={styles.preview}>
        {!pickedUri ? (<Text>No hay imagen seleccionada </Text>): (<Image  style={styles.image}  source={{uri: pickedUri}}/>)}
      </View>
      <Button title="Tomar foto" color={COLORS.LIGTH_PINK} onPress={handleTakeImage} />
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
  container: {
    marginBottom : 10 ,
  },
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderColor: COLORS.BLUSH,
    borderWidth: 1
  },
  image : {
    width: "100%",
    height: "100%"
  }
})
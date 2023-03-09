import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React , {useState}from 'react'

import Colors from '../constants/Colors'
import ImageSelector from '../components/ImageSelector'
import LocationSelector from '../components/LocationSelector'
import { addPlace } from '../store/places.actions'
import { useDispatch } from 'react-redux'

const NewPlaceScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const handleTitleChange = text => setTitle(text)
    const handleSave = () =>{
        dispatch(addPlace(title, image))
        navigation.navigate("Direcciones")
    }
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>
                    Titulo
                </Text>
                <TextInput style={styles.input} onChangeText={handleTitleChange}/>
                <ImageSelector onImage={setImage} />
                <LocationSelector onLocation={location => console.log(location)} />
                <Button onPress={handleSave} title='Guardar direccion' color={Colors.MAROON}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    label : {
        fontSize: 18 ,
        marginBottom : 16
    },
    input : {
        borderBottomColor: "#ccc",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4 
    }
})

export default NewPlaceScreen

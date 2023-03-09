import * as FileSystem from "expo-file-system"

export const ADD_PLACE = 'ADD_PLACE'


export const addPlace = (title , image) => {
    return { type: ADD_PLACE, payload: {title}}
    return async dispatch =>{
        const fileName = image.split("/").pop()
        const path = FileSystem.documentDirectory + fileName
        try {
            FileSystem.moveAsync({
                from: image,
                to: path
            })
        } catch (error) {
            console.log(error)
            throw error
        }
        dispatch({ type : ADD_PLACE , payload : { title , image : path}})
    }
}
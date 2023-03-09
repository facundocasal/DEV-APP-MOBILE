import { URL_AUTH_SINGUP } from "../../constants/dataBases";

export const SINGUP = "SINGUP"

export const signUp = (email, password) =>{
    return async dispatch =>{
        try {
            const response = await fetch(URL_AUTH_SINGUP , {
                method: "POST",
                headers: {
                    "content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            })
            const data = await response.json()
            console.log(data)
            dispatch({
                type: SINGUP,
                token: data.idToken,
                userId: data.localId
            })
        } catch (error) {
            console.log("soy error en singup")
            console.log(error)
        }
    }
}
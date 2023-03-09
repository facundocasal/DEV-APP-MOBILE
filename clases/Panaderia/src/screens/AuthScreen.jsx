import {
  Alert,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useReducer, useState } from "react";

import Input from "../componets/Input";
import { colors } from "../constants/colors";
import { signUp } from "../store/actions/auth.action";
import { useDispatch } from "react-redux";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const fomrReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    };
  }
  return state;
};
const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const [error, seterror] = useState(null);

  useEffect(() => {
    if (error) {
      Alert.alert("Ha ocurrido un error,", error, [
        {
          text: "Ok",
        },
      ]);
    }
  }, [error]);
  const [formState, dispatchFormState] = useReducer( fomrReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });
  const handleSingUp = () => {
    console.log(formState)
    // dispatch(signUp(email, password));
    if (formState.formIsValid) {
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      Alert.alert(
        "Formulario Invalido",
        "Inglese email y password Validos",
        error,
        [
          {
            text: "Ok",
          },
        ]
      );
    }
  };
  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
        console.log("oninputchange")
      console.log(inputIdentifier, inputValue, inputValidity);
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );
  return (
    <KeyboardAvoidingView behavior="height" style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
        <Input
          id="email"
          label="email"
          keyboardType="email-addres"
          requiered
          email
          autoCapitalize="none"
          errorText="Por favor ingresa un email valido."
          onInputChange={onInputChangeHandler}
          initialValid=" "
        />
        <Input
          id="password"
          label="password"
          requiered
          password
          secureTextEntry
          autoCapitalize="none"
          errorText="Por favor ingresa una contraseña valida."
          onInputChange={onInputChangeHandler}
          minLength={6}
          initialValid=" "
        />
        <Button title="Registrarme" onPress={handleSingUp}></Button>
        <View style={styles.prompt}>
          {/* <Text style={styles.promptMessage}>Ya tienes una cuenta ?</Text> */}

          <TouchableOpacity onPress={() => console.log("ingresar")}>
            <Text style={styles.promptButton}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 18,
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  prompt: {
    alignItems: "center",
  },
  promptMessage: {
    fontSize: 16,
    color: "#333",
  },
  promptButton: {
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.secondary,
    marginVertical: 20,
  },
});

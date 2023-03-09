import React, { useEffect, useReducer } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";
const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };

    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = ({
  onInputChange,
  initialValue,
  initialValid,
  requiered,
  email,
  max,
  minLength,
  label,
  errorText,
  ...props
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue ? initialValue : " ",
    isValid: false,
    touched: false,
  });
  useEffect(() => {
    if (inputState.touched) {
      onInputChange( label , inputState.value, inputState.isValid );
    }
  }, [inputState, onInputChange]);

  const TextChangeHandle = (text) => {
    // regex
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    // es requerido y si esta vacio
    if (requiered && text.trim().length === 0) isValid = false;
    // email existe y falle las pruebas del regex
    if (email && !emailRegex.test(text.toLowerCase())) isValid = false;
    // si no se pasa max  y el text es mayor a max
    if (max !== null && text.length > max) isValid = false;
    // si no se pasa el min y el texto es menor a min
    if (minLength !== null && text.length < minLength) isValid = false;

    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid: isValid,
    });
  };
  const onBlurHandle = () => {
    dispatch({
      type: INPUT_BLUR,
    });
  };

  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={TextChangeHandle}
        value={inputState.value}
        onBlur={onBlurHandle}
        {...props}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
  },
  label: {
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginTop: 6,
    marginBottom: 8,
  },
  error: {
    color: "#ff0000",
  },
});

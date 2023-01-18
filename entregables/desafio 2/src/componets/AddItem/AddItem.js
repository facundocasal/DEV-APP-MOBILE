import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";

const AddItem = ({textValue, onAddItem , onChange}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write your product"
        style={styles.addItemInput}
        onChangeText={onChange}
        value={textValue}
      />
      <Button color={"black"} onPress={onAddItem} title="add" />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },  
  addItemInput: {
    borderBottomColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    width: 200,
    padding: 10,
  },
});

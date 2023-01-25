import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";
import colors from "../../constants/colors";

const AddItem = ({textValue, onAdd , onChange , setPlaceholder , titleButton}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={setPlaceholder}
        style={styles.addItemInput}
        onChangeText={onChange}
        value={textValue}
      />
      <Button color={colors.third} onPress={onAdd} title={titleButton} />
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
    marginRight: 10,
    borderBottomColor: colors.third,
    borderWidth: 2,
    borderRadius: 20,
    width: 200,
    padding: 10,
    fontFamily: "unboundedRegular" 
  },
});

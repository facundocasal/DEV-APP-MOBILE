import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import colors from "../../constants/colors";

const RenderItems = ({ item, selectItem, EditItem, newStyles }) => {
  const [select , setSelect] = useState(false)
  const handleSelected = () =>{
    setSelect(!select)
  }  

  return (
    <View
      style={select? {... styles.itemsView ,backgroundColor: colors.third } : {... styles.itemsView , backgroundColor: "wheat"}}> 
      <Text style={newStyles}>{item}</Text>
      <Button title="edit" onPress={() => EditItem(item)}></Button>
      <Button title="select" onPress={handleSelected}></Button>
    </View>
  );
};

export default RenderItems;

const styles = StyleSheet.create({
  itemsView: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderWidth: 2,
  },
});

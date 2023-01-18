import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

import AddItem from "./src/componets/AddItem/AddItem";
import ItemList from "./src/componets/ItemList/ItemList";
import Modal from "./src/componets/Modal/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = (text) => {
    setTextItem(text.trim());
  };

  const handlePress = () => {
    if (textItem && !list.includes(textItem)) {
      setList((prevState) => [...prevState, textItem]);
      setTextItem("");
    }
  };
  const handleModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleDelete = (item) => {
    setList((prevState) => prevState.filter((element) => element !== item));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Shopping List</Text>
      <AddItem
        onChange={onHandleChangeItem}
        textValue={textItem}
        onAddItem={handlePress}
      />
      <ItemList list={list} openModal={handleModal} />
      <Modal
        isVisible={modalVisible}
        itemSelected={itemSelected}
        actionDeleteItem={() => handleDelete(itemSelected)}
        actionCloseModal={handleCloseModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 80,
  },
  title: {
    margin: 10,
  },
  btn: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
  },
});

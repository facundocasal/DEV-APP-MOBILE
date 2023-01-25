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
import AppLoading from "expo-app-loading";
import ItemList from "./src/componets/ItemList/ItemList";
import Modal from "./src/componets/Modal/Modal";
import Welcome from "./src/screens/Welcome";
import colors from "./src/constants/colors";
import { useFonts } from "expo-font";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [loading] = useFonts({
    unboundedRegular: require("./assets/fonts/Unbounded-Regular.ttf"),
    unboundedBold: require("./assets/fonts/Unbounded-Bold.ttf"),
  });

  if (!loading) return <AppLoading />;

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

  if (!userName) return <Welcome  setUserName={setUserName}/>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {userName}, Shopping List</Text>
      <AddItem
        onChange={onHandleChangeItem}
        textValue={textItem}
        onAdd={handlePress}
        setPlaceholder={"Write your product"}
        titleButton={"Add"}
      />
      <ItemList list={list} openModal={handleModal} newStyles={{fontFamily: "unboundedRegular"}} />
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
    backgroundColor: colors.bg
  },
  title: {
    margin: 10,
    fontFamily: "unboundedRegular",
    color:"wheat"
  },
  btn: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.bg,
  },
});

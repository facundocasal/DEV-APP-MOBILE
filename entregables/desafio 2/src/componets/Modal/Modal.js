import {
  Button,
  Modal as NewModal,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";

const Modal = ({ isVisible, actionDeleteItem, actionCloseModal , itemSelected }) => {
  return (
    <NewModal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.modalStyle}>
        <Text style={styles.modalText} >{itemSelected}</Text>
        <Button styles={styles.buttonsModal}
          title="delete"
          onPress={actionDeleteItem}
        ></Button>
        <Button
          styles={styles.buttonsModal}
          title="X"
          onPress={actionCloseModal}
        ></Button>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    backgroundColor: "rgba(10, 5, 20, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  modalView: {
    minWidth: "70%",
    minHeight: "40%",
    marginVertical: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  modalText:{
    fontSize: 30,
  },
  buttonsModal:{
    width: 20,
    paddingTop: 10,
    flexDirection: "row"
  }
});

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AddItem from "../componets/AddItem/AddItem";
import AppLoading from "expo-app-loading";
import colors from "../constants/colors";
import { useFonts } from "expo-font";

const Welcome = ({setUserName}) => {
  const [loading] = useFonts({
    unboundedRegular: require("../../assets/fonts/Unbounded-Regular.ttf"),
    unboundedBold: require("../../assets/fonts/Unbounded-Bold.ttf"),
  });
  const [name, setName] = useState("");
  if (!loading) return <AppLoading />;

  const handleSetNameUser = (text) => {
    setName(text.trim());
  };

  const createName = () => {
    setUserName(name)
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
        <AddItem
          textValue={name}
          onChange={handleSetNameUser}
          onAdd={createName}
          setPlaceholder={"enter your name"}
          titleButton={"next"}
        />
      </View>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginVertical: 10,
    textAlign: "center",
    color: colors.primary,
    fontSize: 20,
    fontFamily: "unboundedRegular",
  },
});

import { StyleSheet, Text, View } from "react-native";

import MainNavigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
// provider de redux
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
// store de redux
import store from "./src/store";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    unboundedRegular: require("./assets/fonts/Unbounded-Regular.ttf"),
  });

  if (!fontsLoaded) null;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}

import { StyleSheet, Text, View } from 'react-native';

import BottomTypeNavigation from "./navigation/BottomTypeNavigation"
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font"

export default function App() {
  
  const [fontsLoaded] = useFonts({
    unboundedRegular : require("./assets/fonts/Unbounded-Regular.ttf")
  })

  if(!fontsLoaded) null
  
  return (
    <NavigationContainer>
      <BottomTypeNavigation/>
    </NavigationContainer>
  );
}



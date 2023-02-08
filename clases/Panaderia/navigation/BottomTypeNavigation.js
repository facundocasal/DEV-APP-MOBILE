import CartNavigation from "./CartNavigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import ShopNavigator from "./ShopNavigator";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function BottomTypeNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        // para sacar los headers que viene por defecto
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="ShopTab" options={{}} component={ShopNavigator} />
      <Tab.Screen name="CartTab" component={CartNavigation} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    position: "absolute",
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    bottom: 25,
  },
});

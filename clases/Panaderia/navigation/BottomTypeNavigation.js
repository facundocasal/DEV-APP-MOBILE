import { StyleSheet, Text, View } from "react-native";

import CartNavigation from "./CartNavigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import OrdersNavigation from "./OrdersNavigation";
import ShopNavigator from "./ShopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default BottomTypeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        // para sacar los headers que viene por defecto
        headerShown: false,
        // para que no aparezca el nombre del screen
        tabBarShowLabel: false,
        // estilos para el tab
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ShopTab"
        options={
          // agregar icono al tab
          {
            tabBarIcon: () => (
              <View style={styles.icon}>
                {
                  // etiqueta de icono
                }
                <Ionicons name="home" size={20} color="black" />
                <Text>tienda</Text>
              </View>
            ),
          }
        }
        component={ShopNavigator}
      />
      <Tab.Screen
        name="CartTab"
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="cart" size={20} color="black" />
              <Text>Carrito</Text>
            </View>
          ),
        }}
        component={CartNavigation}
      />
      <Tab.Screen
        name="OrdersTab"
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="list" size={20} color="black" />
              <Text>Ordenes</Text>
            </View>
          ),
        }}
        component={OrdersNavigation}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    position: "absolute",
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 100,
    bottom: 25,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

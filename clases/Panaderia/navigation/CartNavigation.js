import CartScreen from "../src/screens/CartScreen";
import { colors } from "../src/constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default CartNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        // estilos del headers de la navegacion
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.bg },
        headerTintColor: colors.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Carrito",
        }}
      />
    </Stack.Navigator>
  );
};

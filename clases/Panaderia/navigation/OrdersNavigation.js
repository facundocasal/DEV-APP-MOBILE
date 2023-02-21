import OrderScreen from "../src/screens/OrderScreen";
import { colors } from "../src/constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default OrdersNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        // estilos del headers de la navegacion
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          title: "Ordenes",
        }}
      />
    </Stack.Navigator>
  );
};

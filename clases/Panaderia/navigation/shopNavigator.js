import CategoriesScreens from "../src/screens/CategoriesScreens";
import DetailsScreens from "../src/screens/DetailsScreens";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreens from "../src/screens/ProductsScreens";
import { colors } from "../src/constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
  return (
    
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          // estilos del headers de la navegacion
          headerShadowVisible : false,
          headerStyle: { backgroundColor: colors.bg },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreens}
          // customizar cada vista 
          options={{
            title: "Mi Panaderia",
            
          }}
        />
        <Stack.Screen name="Products" component={ProductsScreens} 
        // accedemos al route del screens , 
        options={({route})=>(
            {
                title: route.params.title
            }
            )} />
        <Stack.Screen name="Details" component={DetailsScreens}
                options={({route})=>(
            {
                title: route.params.name
            }
            )} />
      </Stack.Navigator>
    
  );
};

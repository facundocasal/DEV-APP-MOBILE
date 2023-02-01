import CategoriesScreens from "../src/screens/CategoriesScreens";
import DetailsScreens from "../src/screens/DetailsScreens";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreens from "../src/screens/ProductsScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default ShopNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories">
                <Stack.Screen name="Categories" component={CategoriesScreens}/>
                <Stack.Screen name="Products" component={ProductsScreens}/>
                <Stack.Screen name="Details" component={DetailsScreens}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
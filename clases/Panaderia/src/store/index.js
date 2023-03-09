import { applyMiddleware, combineReducers, createStore } from "redux"

import AuthReducer from "./reducers/auth.reducer"
import CartReducer from "./reducers/cart.reducer"
import CategoryReducer from "./reducers/category.reducer"
import OrderReducer from "./reducers/orders.reducer"
import ProductReducer from "./reducers/products.reducer"
import thunk from "redux-thunk"

const RootReducer = combineReducers({
    //los estados que tendremos en el store 
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))
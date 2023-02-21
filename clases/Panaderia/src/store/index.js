import {applyMiddleware, combineReducers, createStore} from "redux"

import CartReducer from "./reducers/cart.reducer"
import CategoryReducer from "./reducers/category.reducer"
import ProductReducer from "./reducers/products.reducer"
import thunk from "redux-thunk"

const RootReducer = combineReducers({
    //los estados que tendremos en el store 
    categories : CategoryReducer,
    products : ProductReducer,
    cart : CartReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))

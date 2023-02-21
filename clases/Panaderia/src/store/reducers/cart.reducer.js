import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from "../actions/cart.action";

const INITIAL_STATE = {
  items: [],
  total: 0,
};

const sumTotal = (list) =>
  list.map((item) => item.quantity * item.price).recuce((a, b) => a + b, 0);

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      const cleanCart = [...state.items].filter(
        (item) => item.id != action.itemId
      );
      return { ...state, items: cleanCart, total: sumTotal(cleanCart) };

    case ADD_ITEM:
      // vemos si se encuentra el item en los item dentro del carrito
      const indexItem = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      // si no lo encuentra lo modifica para agregar la cantidad y lo suma al array de carrito
      if (indexItem === -1) {
        const item = { ...action.item, quantity: 1 };
        const updateCart = [...state.items, item];
        console.log(updateCart);
        // retornamos el estado , los items modificados con el nuevo item , y actualizamos el total
        return { ...state, items: updateCart, total: sumTotal(updateCart) };
      }
      // si encuentra el item en el carrito modifica su cantidad y luego retornamos el estado , los items modificados con el nuevo item , y actualizamos el total
      const items = [...state.items].map((item) => {
        if (item.id === action.item.id) item.quantity++;
        return item;
      });

      return { ...state, items: items, total: sumTotal(items) };
    case CONFIRM_CART:
      return state;

    default:
      return state;
  }
  return state;
};

export default CartReducer;

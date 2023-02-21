import { URL_API } from "../../constants/dataBases";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_CART = "CONFIRM_CART";

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  itemId,
});

// payload es la lista que compramos
export const confirmCart = (payload, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items: { ...payload },
          total,
        }),
      });
      const result = await response.json();
      console.log(result);
      dispatch({
        type: CONFIRM_CART,
        consfirm: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

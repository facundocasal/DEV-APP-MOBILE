import { CATEGORIES } from "../../data/categories";
import { SELECTED_CATEGORY } from "../actions/category.action";

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      const indexCategory = state.categories.findIndex(
        cat => cat.id === action.categoryId
      );
      if (indexCategory === -1) return state
      return { ...state, selected: state.categories[indexCategory]};
      default :
        return state
  }
};

export default CategoryReducer;

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const newItem = action.payload;
      const product = state.cartItems.find((x) => x.id === newItem.id);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.id === product.id ? newItem : x
          ),
        };
      } else return { cartItems: [...state.cartItems, newItem] };
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };

    default:
      return state;
  }
}

export { cartReducer };

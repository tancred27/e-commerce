import cartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

/* Setting default values for the state */
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

/**
 * Reducer for actions related to cart and cart items
 * @param {object} state Contains initial state of a cart/cart-item
 * @param {object} action Contains action to be performed based on event
 */
const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default CartReducer;

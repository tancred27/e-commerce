import cartActionTypes from "./cart.types";

/* Generate an action to show the cart only when cart icon is clicked */
export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

/**
 * Generate an action with item as payload to add the item to cart
 * @param {object} item contains the details of the cart-item
 */
export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

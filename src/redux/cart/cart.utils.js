/**
 * A function to check if an item the user wants to add is new and add it
 * @param {array} cartItems Contains cart items of logged in user
 * @param {object} item The item which the user wants to add
 * @return {array} Returns a new array if the cart item is new
 */
export const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...item, quantity: 1 }];
};

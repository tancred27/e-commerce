/**
 * Setting payload of action object for setting currentUser
 * @param {object} user Contains the data of current logged in user
 */
export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  payload: user
});

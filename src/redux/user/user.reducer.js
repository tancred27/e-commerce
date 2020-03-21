import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

/**
 * Reducer for actions related to a user
 * @param {object} state Contains initial state of user
 * @param {object} action Contains action to be performed based on event
 */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;

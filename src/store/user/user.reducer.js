import { USER_ACTION_TYPES } from "./user.types";
  
  const INITIAL_STATE = {
    currentUser: null,
    adminUser: null
  };
  
  export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
        return { ...state, currentUser: payload };
      case USER_ACTION_TYPES.GET_ADMIN_USER:
          return { ...state, adminUser: payload }
      default:
        return state;
    }
  };

  
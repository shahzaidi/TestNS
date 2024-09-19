import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
   
  } from "../constants/userConstants";
  
  export const userRegisterReducer = (state = { message: {} }, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return {
          loading: true,
          ...state,
        };
  
      case REGISTER_USER_SUCCESS:
        return {
          loading: false,
          message: action.payload.user,
        };
  
      case REGISTER_USER_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
 
  
      default:
        return state;
    }
  };
  

  

  
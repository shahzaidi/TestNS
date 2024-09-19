import {
    GET_ALL_PRODUCT_FAIL,
    GET_ALL_PRODUCT_REQUEST,
    GET_ALL_PRODUCT_SUCCESS,
   
  } from "../constants/productConstants";
  
  export const getAllProductReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case GET_ALL_PRODUCT_REQUEST:
        return {
          loading: true,
          products: [],
        };
  
      case GET_ALL_PRODUCT_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
          productCount: action.payload.productCount,
          productCountWithApiFeatures: action.payload.productCountWithApiFeatures,
        };
  
      case GET_ALL_PRODUCT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  

  
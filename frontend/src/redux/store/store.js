// store/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import { getAllProductReducer } from "../reducers/productReducers";


const store = configureStore({
  reducer: {
    products: getAllProductReducer,
   },
});

export default store; // Add a name to the default export

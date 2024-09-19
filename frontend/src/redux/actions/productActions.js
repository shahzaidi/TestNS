import axios from "axios";
// import { useNavigate } from "react-router-dom";
import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
 
  
  
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
} from "../constants/productConstants";
import { toast } from "react-toastify";

export const getAllProducts =
  (
    keyword = "",
   
    currentPage = 1
  ) =>
  async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      dispatch({ type: GET_ALL_PRODUCT_REQUEST });
      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}`;
  

      const { data } = await axios.get(link, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: GET_ALL_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };






// Delete Product

export const deleteProductAction = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    let url = `/api/v1/product/${id}`;

    // console.log(rating, comment, token, productId, "tokenK");
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data?.message) {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
    }

    if (data?.success === true) {
      toast.success(data?.message, {
        position: "top-right",
        autoClose: 1000,
      });

    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    if (errorMessage) {
      dispatch({
        type: DELETE_PRODUCT_FAIL,
        payload: errorMessage,
      });
    }
    if (errorMessage) {
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 1000,
      });
    }
  }
};

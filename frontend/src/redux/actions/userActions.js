import axios from "axios";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,

} from "../constants/userConstants";
import { toast } from "react-toastify";

// Register User

export const registerUserAction =
  ({ ...options }, setLoginSignUpLoading) =>
  async (dispatch) => {
    try {
      setLoginSignUpLoading(true);
      dispatch({ type: REGISTER_USER_REQUEST });

      const { data } = await axios.post(`/api/v1/user/register`, {
        name: options.name,
        email: options.email,
        password: options.password,
      });

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
      localStorage.setItem("token", data?.token);
      if (data?.message) {
        // localStorage.setItem("token", data?.token);
        localStorage.setItem("user", JSON.stringify(data?.user));
        // localStorage.setItem("user", JSON.stringify(data?.user));
        setLoginSignUpLoading(false);
        toast.success(data?.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      setLoginSignUpLoading(true);
      const errorMessage = error.response?.data?.message || "An error occurred";
      dispatch({ type: REGISTER_USER_FAIL, payload: errorMessage });
      if (errorMessage) {
        setLoginSignUpLoading(false);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

// Login User

export const loginUserAction =
  ({ ...options }, setLoginSignUpLoading) =>
  async (dispatch) => {
    try {
      setLoginSignUpLoading(true);
      dispatch({ type: LOGIN_USER_REQUEST });

      const { data } = await axios.post(`/api/v1/user/login`, {
        email: options.email,
        password: options.password,
      });

      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });

      localStorage.setItem("token", data?.token);

      if (data?.message) {
        localStorage.setItem("user", JSON.stringify(data?.user));
        // setAuthUser(data?.user);
        setLoginSignUpLoading(false);
        toast.success(data?.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      setLoginSignUpLoading(true);
      const errorMessage = error.response?.data?.message || "An error occurred";
      dispatch({ type: LOGIN_USER_FAIL, payload: errorMessage });
      if (errorMessage) {
        setLoginSignUpLoading(false);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };




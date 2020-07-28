import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";
import axios from "axios";
import Cookie from "js-cookie";

const signIn = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password },
  });
  try {
    const res = await axios.post("/api/users/signin", { email, password });
    const data = res.data;
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: { email, password },
    });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: err.message,
    });
  }
};

const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { name, email, password },
  });
  try {
    const res = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    const data = res.data;
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: { name, email, password },
    });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: err.message,
    });
  }
};

export { signIn, register };

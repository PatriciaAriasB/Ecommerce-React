import axios from "axios";
import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import PropTypes from 'prop-types';

const token = localStorage.getItem("token") || "";

const initialState = {
  token: token,
  user: null,
  orders: []
};

const API_URL = "http://localhost:3001/users";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    try {
      const res = await axios.post(API_URL + "/login", user);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });

      if (res.data) {
        localStorage.setItem("token", res.data.token);
      }
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const getLoggedUserInfo = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(API_URL + "/userInfo", {
        headers: {
          Authorization: token,
        },
      });
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data
      });

      const ordersRes = await axios.get(API_URL + "/orders", {
        headers: {
          Authorization: token,
        },
      });
      dispatch({
        type: "GET_USER_ORDERS",
        payload: ordersRes.data
        
      });

    } catch (error) {
      console.error(error);
    }
  };

  const register = async (user) => {
    try {
      const res = await axios.post(API_URL + "/", user);
      dispatch({
        type: "REGISTER",
        payload: res.data,
      });

      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(API_URL + "/logout", {
        headers: {
          Authorization: token
        }
      });
      if (res.data) {
        localStorage.removeItem("token");
        dispatch({
          type: "LOGOUT"
        });
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        orders: state.orders, 
        login,
        getLoggedUserInfo,
        logout,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

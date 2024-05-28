import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AppReducer from './AppReducer';

const API_URL = 'http://localhost:3001/products';

const initialState = {
  products: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      dispatch({
        type: 'GET_PRODUCTS',
        payload: res.data,
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = async (product) => {
    try {
      const res = await axios.post('http://localhost:3001/products', product)
      dispatch({
        type: "ADD_PRODUCT",
        payload: res.data.product,
      });
    } catch (error) {
      console.error(error)
    }
  }


  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch({
        type: 'DELETE_PRODUCT',
        payload: id,
      });
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        getProducts,
        deleteProduct,
        addProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};



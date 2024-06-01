import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductReducer from './ProductReducer';

const API_URL = 'http://localhost:3001/products';

const cart = JSON.parse(localStorage.getItem("cart"))||[]
const initialState = {
  products: [],
  cart:cart
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

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
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        deleteProduct,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};



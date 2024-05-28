const products = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
        case "DELETE_PRODUCTS":
          return {
            ...state,
            products: state.products.filter((product) => product._id !== action.payload._id),
          };
          case "ADD_PRODUCT":
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
      default:
        return state;
    }
  };

        
    
      export default products;
    
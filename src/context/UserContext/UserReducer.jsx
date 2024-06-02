const users = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          token: action.payload.token,
        };
        
      case "GET_USER_INFO":
        return {
          ...state,
          user: action.payload,
        };
        
    case "GET_USER_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };

        case "REGISTER":
          return {
            ...state,
            user: action.payload,
          };
        
        case "LOGOUT":
          return {
            ...state,
            token:"",
            user: null
          };
      default:
        return state;
    }
  };
  export default users;
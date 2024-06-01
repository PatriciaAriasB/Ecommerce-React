import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Link } from "react-router-dom";
import { Button, Empty } from "antd";
import orderService from "../../services/OrderService";

const Cart = () => {
  const { cart , clearCart} = useContext(ProductContext);

  if (cart.length == 0) {
    return (
      <Empty description={<span>Carrito vacío </span>}>
        <Button type="primary">
          <Link to="/products">Comprar</Link>
        </Button>
      </Empty>
    );
  }
  return (
    <div>
      <button onClick={clearCart}>Vaciar carrito</button>
      <button onClick={()=> {
        orderService.createOrder(cart)
        clearCart()
        }}>Realizar pedido</button>

      {cart.map((product) => {
        return (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;


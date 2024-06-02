import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Link } from "react-router-dom";
import { Button, Empty } from "antd";
import orderService from "../../services/OrderService";
import './Cart.scss';

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleOrder = () => {
    orderService.createOrder(cart);
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      clearCart();
    }, 3000); 
  };

  if (cart.length === 0) {
    return (
      <Empty description={<span>Carrito vacío</span>}>
        <Button type="primary">
          <Link to="/products">Comprar</Link>
        </Button>
      </Empty>
    );
  }

  return (
    <div className="cart-container">
      {orderSuccess && <div className="order-success">Compra realizada con éxito</div>}
      <div className="cart-buttons">
        <button onClick={clearCart}>Vaciar carrito</button>
        <button onClick={handleOrder}>Realizar pedido</button>
      </div>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}€</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

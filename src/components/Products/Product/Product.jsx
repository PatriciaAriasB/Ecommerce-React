import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import './Product.scss';

import Image1 from '../../../assets/AirMax90.png';


const Product = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const productItems = products.map((product) => (
    <div className="product-card" key={product._id}>
      <div className="product-image">
        <img src={Image1} alt={product.name} />
      </div>
      <div className="product-details">
        <div className="product-title">{product.name}</div>
        <div className="product-price">{product.price}€</div>
        <div className="product-description">{product.description}</div>
      </div>
    </div>
  ));

  return <div className="products-container">{productItems}</div>;
};

export default Product;

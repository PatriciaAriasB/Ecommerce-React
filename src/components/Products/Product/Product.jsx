import { useContext, useEffect} from "react"
import { ProductContext } from "../../../context/ProductContext/ProductState";

const Product = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const productItems = products.map((product) => (
    <div className="product-card" key={product._id}>
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <div className="product-title">{product.name}</div>
        <div className="product-price">€{product.price}</div>
        <div className="product-description">{product.description}</div>
        {/* <button className="add-to-cart-btn" onClick={() => deleteProduct(product._id)}>Borrar</button> */}
      </div>
    </div>
  ));

  return <div className="products-container">{productItems}</div>;
};

export default Product;

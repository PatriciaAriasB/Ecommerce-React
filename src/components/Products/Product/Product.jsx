import { useContext, useEffect} from "react"
import { GlobalContext } from "../../../context/GlobalState"

const Product = () => {
  const {products, getProducts, deleteProduct} = useContext (GlobalContext);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const product = products.map((product) => {
    return (
      <div className="product" key={product._id}>
        <h1>{product.name}</h1>
        <button onClick={() => deleteProduct(product._id)}>Borrar</button>
      </div>
    );
  });
  return <>{product}</>;
};

export default Product;

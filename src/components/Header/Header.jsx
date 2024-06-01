import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
 import { ProductContext } from "../../context/ProductContext/ProductState";
import './Header.scss';
import 'bootstrap/scss/bootstrap.scss';
import { Badge } from "antd";

//TODO: Descomentar cuando haga el carrito.
 import {ShoppingCartOutlined} from "@ant-design/icons"

//TODO: hacer componente logout y lógica, debe dirigirte a productos

const Header = () => {
  const { token, logout } = useContext(UserContext);
 const { cart } = useContext(ProductContext)
  const navigate = useNavigate();

//  useEffect(() => {
//    localStorage.setItem("cart", JSON.stringify(cart))
//  }, [cart])

  return (
    <header>
  <nav className="navbar primary-navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src="src/assets/LOGO.png" alt="Logo" className="navbar-logo" />

      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
      <nav className="navbar2">
  <div className="container">
    <div id="navbarNav">
      <ul>
        <li>
          <Link to="/products">Productos</Link>
        </li>

        {token ? (
          <>
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Cerrar sesión
            </button>
            <li>
            </li>
          
            <li>
              <Link to="/cart"> Carrito <Badge count={cart.length} size="small"><ShoppingCartOutlined /></Badge> /</Link>
            </li> 
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
            <li>
              <Link to="/register">Registrarse</Link>
            </li>
          </>
        )}
           

      </ul>
    </div>
  </div>
</nav>

    </header>
  );
};


export default Header;


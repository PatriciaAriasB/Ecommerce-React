import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { ProductContext } from "../../context/ProductContext/ProductState";
import './Header.scss';
import 'bootstrap/scss/bootstrap.scss';

//TODO: Descomentar cuando haga el carrito.
// import {ShoppingCartOutlined} from "@ant-design/icons"
// import { Badge } from "antd";

//TODO: hacer componente logout y lógica, debe dirigirte a productos

const Header = () => {
  const { token, } = useContext(UserContext);
  const { cart } = useContext(ProductContext)
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <header>
      <nav className="navbar primary-navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">E-Commerce</a>
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
            <li>
              <button
                onClick={() => {
                  //logout();
                  navigate("/login");
                }}
              >
                Cerrar sesión
              </button>
            </li>
            {/* <li>
              <Link to="/Cart"> Carrito <Badge count={cart.length} size="small"><ShoppingCartOutlined /></Badge> /</Link>
            </li> */}
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


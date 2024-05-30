import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { ProductContext } from "../../context/ProductContext/ProductState";
import './Header.scss';
import 'bootstrap/scss/bootstrap.scss';

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
          <a className="navbar-brand" href="#">E-Commerce</a>
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
              <a href="/Products">Productos</a>
            </li>
            <li>
              <a href="/Login">Inciar sesión</a>
            </li>
            <li>
              <a href="/Profile">Perfil</a>
            </li>
            <li>
              <a href="/Cart">Carrito</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </header>
  );
};



export default Header;


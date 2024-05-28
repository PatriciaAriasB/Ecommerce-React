import './Header.scss';
import 'bootstrap/scss/bootstrap.scss';

const Header = () => {
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
                <li className="nav-item">
                  <a className="nav-link" href="/Login">Inicia sesión</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Register">Regístrate</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </nav>      
      <nav className="navbar secondary-navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-light" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/Products">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/Profile">Perfil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/Cart">Carrito</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    );
  };
  
  

export default Header;


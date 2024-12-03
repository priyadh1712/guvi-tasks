import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.productReducer.productData);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-4 px-lg-5 py-2">
            <a className="navbar-brand d-flex align-items-center" href="#!">
              <h1 className="d-inline m-0 text-primary fw-bold">ShopEase</h1>
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navItems"
              aria-controls="navItems"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navItems">
              <ul className="navbar-nav me-auto my-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <a className="nav-link text-light fw-semibold" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fw-semibold" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light fw-semibold"
                    id="ShopItems"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu bg-dark border-0">
                    <li>
                      <a className="dropdown-item text-warning" href="#">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg-light" />
                    </li>
                    <li>
                      <a className="dropdown-item text-warning" href="#">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-warning" href="#">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-2">
                <button className="btn btn-primary text-light fw-bold" type="submit">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    bounce
                    className="me-2"
                  />
                  Cart
                  <span className="badge bg-light text-dark ms-2 rounded-pill">
                    {cartData.length}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    // Created Navigation menu
    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <h1 className="fw-bold text-dark m-0" style={{ fontSize: "2.5rem" }}>
            CRUD
          </h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                style={({ isActive }) => ({
                  fontSize: "1.5rem",
                  marginRight: "20px",
                  color: isActive ? "#007bff" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  borderBottom: isActive ? "2px solid #007bff" : "none",
                  transition: "color 0.3s ease"
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ListPages"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                style={({ isActive }) => ({
                  fontSize: "1.5rem",
                  color: isActive ? "#007bff" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  borderBottom: isActive ? "2px solid #007bff" : "none",
                  transition: "color 0.3s ease"
                })}
              >
                Users Data
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

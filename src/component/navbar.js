import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../img/min.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#!">
              <div className="navbar-wrapper">
              <img src={logo} alt="logo" className="logo"/>
              <h2><b> 𝒦𝒾𝓉𝒶𝒷𝑒𝑒 𝒦𝑒𝑒𝒹𝒶</b> </h2>
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false" 
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
              <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                  </li>
                 
                  <li className="nav-item">
                    <NavLink className="nav-link" to= "/card.jsx">Card</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/testimonial">Testimonial</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                </ul>
                <div className="d-flex">
                  <button className="btn btn-style" type="submit" style={{backgroundColor:"orange"}} >Sign Up</button>
                  <button className="btn btn-style btn-style-border" type="submit">Log in</button>
                </div>
              </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
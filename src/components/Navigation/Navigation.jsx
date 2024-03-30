import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import Logo from "../../assets/Logo.svg";
import "./Navigation.css";

function Navigation() {
  const {
    state: { cart },
  } = useContext(DataContext);

  return (
    <header>
      <nav className="navbar">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="logo" width={120} />
          </NavLink>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="cart">
              Cart {cart.length > 0 && <span>{cart.length}</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;

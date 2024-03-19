import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Navigation() {
  const { cart } = useContext(CartContext);
  return (
    <header>
      <nav className="navbar">
        <div>
          <h2>Logo</h2>
          {/* <img src="" alt="" /> */}
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop/juices">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart {cart.length > 0 && <span>{cart.length}</span>}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;

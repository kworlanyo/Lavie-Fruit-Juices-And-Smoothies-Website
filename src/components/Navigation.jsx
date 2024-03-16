import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div>
        <h2>Logo</h2>
        {/* <img src="" alt="" /> */}
      </div>
      <ul>
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
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

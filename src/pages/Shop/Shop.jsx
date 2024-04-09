import { NavLink, Outlet } from "react-router-dom";
import "./Shop.css";

function Shop() {
  return (
    <div className="shop-section">
      <div className="wrapper">
        <h2>Products</h2>
        <div className="links">
          <NavLink to="juices">Juices</NavLink>
          <NavLink to="smoothies">Smoothies</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Shop;

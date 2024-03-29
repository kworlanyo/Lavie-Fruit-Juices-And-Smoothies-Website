import { NavLink, Outlet } from "react-router-dom";
import "./Shop.css";

function Shop() {
  // useMatch is a hook from react-router-dom
  // It is helping me to make the juices tab active anytime I click on the shop link in the navbar.
  // const juicesMatch = useMatch("/shop");

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

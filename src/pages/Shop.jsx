import { Link, Outlet } from "react-router-dom";

function Shop() {
  return (
    <div>
      <h2>Products</h2>
      <Link to="shop/juices">Juices</Link>
      <Link to="shop/smoothies">Smoothies</Link>
      <Outlet />
    </div>
  );
}

export default Shop;

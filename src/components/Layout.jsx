import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layout">
      <Navigation />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

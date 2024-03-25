import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Juices from "./components/Juices/Juices";
import Smoothies from "./components/Smoothies";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import DataContextProvider from "./contexts/DataContext";
import Checkout from "./components/Checkout/Checkout";
import { useEffect } from "react";

function App() {
  // This code helps to go to the top of a page anytime its route is clicked
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <DataContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<Shop />}>
            <Route path="shop/juices" element={<Juices />} />
            <Route path="shop/smoothies" element={<Smoothies />} />
            <Route path=":name" element={<ProductDetails />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </DataContextProvider>
  );
}

export default App;

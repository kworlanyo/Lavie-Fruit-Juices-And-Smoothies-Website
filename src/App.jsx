import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import PageNotFound from "./components/PageNotFound";
import Juices from "./components/Juices";
import Smoothies from "./components/Smoothies";
import ProductDetails from "./components/ProductDetails";
import DataContextProvider from "./contexts/DataContext";
import Checkout from "./components/Checkout";

function App() {
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

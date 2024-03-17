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
import { juices, smoothies, offer, testimonials } from "../data";
import CartContextProvider from "./contexts/CartContext";
// import { useState } from "react";

function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home juices={juices} offer={offer} testimonials={testimonials} />} />
          <Route element={<Shop />}>
            <Route path="shop/juices" element={<Juices juices={juices} />} />
            <Route path="shop/smoothies" element={<Smoothies smoothies={smoothies} />} />
            <Route path=":name" element={<ProductDetails juices={juices} smoothies={smoothies} />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </CartContextProvider>
  );
}

export default App;

import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Juices from "./components/Juices/Juices";
import Smoothies from "./components/Smoothies";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./components/Modal/Modal";
import { DataContext } from "./contexts/DataContext";

function App() {
  // This code helps to go to the top of a page anytime its route is clicked
  const { pathname } = useLocation();
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      {state.showModal && (
        <Modal
          content={state.modalContent}
          onClose={() => dispatch({ type: "HIDE-MODAL" })}
          type={state.modalType}
          onDelete={() =>
            dispatch({ type: "DELETE-ITEM", payload: state.confirmItemId })
          }
          onDeleteAll={() => dispatch({ type: "DELETE-ALL" })}
          onPlaceOrder={() => dispatch({ type: "PLACE-ORDER" })}
          onSubmitMessage={() => dispatch({ type: "SUBMIT-MESSAGE" })}
        />
      )}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />}>
            <Route index element={<Navigate replace to={"juices"} />} />
            <Route path="juices" element={<Juices />} />
            <Route path="juices/:name" element={<ProductDetails />} />
            <Route path="smoothies" element={<Smoothies />} />
            <Route path="smoothies/:name" element={<ProductDetails />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="cart">
            <Route index element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

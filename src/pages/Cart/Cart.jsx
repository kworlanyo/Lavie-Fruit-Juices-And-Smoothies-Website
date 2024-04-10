import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import "./Cart.css";
import cartImg from "../../assets/cart.gif";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useContext(DataContext);

  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="wrapper">
        {cart.length < 1 ? (
          <div className={cart.length < 1 && "empty-state"}>
            <img src={cartImg} alt="" width={300} />
            <h2>There are no items in your cart.</h2>
          </div>
        ) : (
          <>
            <div className="cart-container">
              <h2>Your Cart</h2>
              <div className="titles">
                <h3 className="product-title">Product</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
              <div>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="cart-summary">
              <button
                className="clear-cart"
                onClick={() => dispatch({ type: "OPEN-MODAL-DELETE-ALL" })}
              >
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="total">
                  <h3>Sub-total: </h3>
                  <h3>₵{total.toFixed(2)}</h3>
                </div>

                <Button
                  onClick={() => navigate("/cart/checkout")}
                  content="Checkout"
                  className="checkout-button"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

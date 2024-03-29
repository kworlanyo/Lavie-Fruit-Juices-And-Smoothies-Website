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
            <div>
              <h2>Your Cart</h2>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h2>Cart Total</h2>
              <h3>Total: ₵{total.toFixed(2)}</h3>
            </div>
            <Button
              onClick={() => dispatch({ type: "OPEN-MODAL-DELETE-ALL" })}
              content="Clear All"
            />
            <Button onClick={() => navigate("/checkout")} content="Checkout" />
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

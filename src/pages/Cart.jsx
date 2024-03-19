import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-page">
      <div className="wrapper">
        {cart.length < 1 ? (
          <h2 className={cart.length < 1 && "empty-state"}>There are no items in your cart. </h2>
        ) : (
          <div>
            <h2>Your Cart</h2>
            {/* <div className="cart-headers">
              <h3>Product</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Total</h3>
            </div> */}
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
        )}
      </div>
    </div>
  );
}

export default Cart;

import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        <h3>Product</h3>
        <div>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>
      </div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;

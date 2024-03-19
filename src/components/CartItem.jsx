import Counter from "./Counter";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { cart, setCart } = useContext(CartContext);

  function handleDelete(id) {
    if (confirm("Are you sure you want to delete this item?")) {
      setCart(cart.filter((item) => item.id !== id));
    }
  }

  return (
    <tr className="cart-item">
      <td className="product-image-and-name">
        <img src={item.image} alt="" width={200} />
        <h2>{item.name}</h2>
      </td>
      <td>₵{item.price}.00</td>
      <td>
        <Counter />
      </td>
      <td>100</td>
      <td>
        <button className="delete-button" onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CartItem;

import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { dispatch } = useContext(DataContext);

  return (
    <tr className="cart-item">
      <td className="product-image-and-name">
        <img src={item.image} alt="" width={200} />
        <h2>{item.name}</h2>
      </td>
      <td>₵{item.price}.00</td>
      <td>
        <div className="counter">
          <button
            onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
          >
            +
          </button>
        </div>
      </td>
      <td>₵{(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <button
          className="delete-button"
          onClick={() => dispatch({ type: "DELETE-ITEM", payload: item.id })}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CartItem;

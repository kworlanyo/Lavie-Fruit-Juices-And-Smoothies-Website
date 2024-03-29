import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./CartItem.css";

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { dispatch, juices, smoothies } = useContext(DataContext);

  const juice = juices.find((juice) => juice.id === item.id);
  const smoothie = smoothies.find((smoothie) => smoothie.id === item.id);

  return (
    <tr className="cart-item">
      <td className="product-image-and-name">
        <img
          className={
            juice?.image
              ? "juice-image"
              : smoothie?.image
              ? "smoothie-image"
              : ""
          }
          src={item.image}
          alt=""
          width={200}
        />
        <h3>{item.name}</h3>
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
      <td>
        <strong>₵{(item.price * item.quantity).toFixed(2)}</strong>
      </td>
      <td>
        {/* <button
          className="delete-button"
          onClick={() => dispatch({ type: "DELETE-ITEM", payload: item.id })}
        >
          Delete
        </button> */}
        <RiDeleteBin6Line
          className="delete-button"
          onClick={() =>
            dispatch({ type: "OPEN-MODAL-DELETE-ITEM", payload: item.id })
          }
        />
      </td>
    </tr>
  );
}

export default CartItem;

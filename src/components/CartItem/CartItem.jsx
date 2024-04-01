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
    <div className="cart-item">
      <div className="product-image-and-name">
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
          // width={200}
        />
        <div className="description">
          <h4>{item.name}</h4>
          <RiDeleteBin6Line
            className="delete-button"
            onClick={() =>
              dispatch({ type: "OPEN-MODAL-DELETE-ITEM", payload: item.id })
            }
          />
        </div>
      </div>
      <div className="item-price">₵{item.price}.00</div>
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
      <div className="total-price">
        <strong>₵{(item.price * item.quantity).toFixed(2)}</strong>
      </div>

      <div className="mobile-style">
        <div>
          <h4>Price</h4>
          <p>₵{item.price}.00</p>
        </div>
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
        <div className="total-price">
          <h4>Total</h4>
          <p>
            <strong>₵{(item.price * item.quantity).toFixed(2)}</strong>
          </p>
        </div>
      </div>
      {/* <td>
        <RiDeleteBin6Line
          className="delete-button"
          onClick={() =>
            dispatch({ type: "OPEN-MODAL-DELETE-ITEM", payload: item.id })
          }
        />
      </td> */}
    </div>
  );
}

export default CartItem;

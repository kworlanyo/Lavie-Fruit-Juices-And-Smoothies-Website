/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./CheckoutItems.css";

function CheckoutItems({ item }) {
  const { dispatch, juices, smoothies } = useContext(DataContext);

  const juice = juices.find((juice) => juice.id === item.id);
  const smoothie = smoothies.find((smoothie) => smoothie.id === item.id);
  return (
    <div className="checkout-items">
      <div className="image-container">
        <img
          src={item.image}
          alt=""
          className={
            juice?.image
              ? "juice-image"
              : smoothie?.image
              ? "smoothie-image"
              : ""
          }
        />
      </div>
      <div className="details">
        <p>Product: {item.name}</p>
        <p>Price: ₵{item.price}.00</p>
        <p>Quantity: {item.quantity}</p>
        <h3>Total: ₵{item.price * item.quantity}.00</h3>

        <RiDeleteBin6Line
          className="delete-button"
          onClick={() =>
            dispatch({
              type: "OPEN-MODAL-DELETE-ITEM",
              payload: item.id,
            })
          }
        />
      </div>
    </div>
  );
}

export default CheckoutItems;

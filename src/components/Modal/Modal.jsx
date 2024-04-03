/* eslint-disable react/prop-types */
import "./Modal.css";
import { IoMdCloseCircle } from "react-icons/io";
import success from "../../assets/success.gif";
import cart from "../../assets/cart.gif";
import warn from "../../assets/warn.gif";
import trash from "../../assets/trash.gif";
import { useNavigate } from "react-router-dom";

function Modal({
  onClose,
  content,
  type,
  onDelete,
  onDeleteAll,
  onPlaceOrder,
  onSubmitMessage,
}) {
  const navigate = useNavigate();
  const handleDelete = () => {
    if (type === "confirm-delete") {
      onDelete(); // Dispatch the delete action when the delete button is clicked
      onClose(); // Close the modal after the action is dispatched
    }

    if (type === "confirm-delete-all") {
      onDeleteAll(); // Dispatch the delete-all action when the delete button is clicked
      onClose();
    }
  };

  function handlePlaceOrder() {
    onPlaceOrder();
    navigate("/");
    onClose();
    localStorage.removeItem("products");
  }

  return (
    <div className="overlay" onClick={type !== "place-order" && onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <img
          src={
            type === "cart"
              ? cart
              : type === "place-order"
              ? success
              : type === "warn"
              ? warn
              : type === "confirm-delete"
              ? trash
              : type === "confirm-delete-all"
              ? trash
              : type === "contact-message"
              ? success
              : null
          }
          alt=""
          width={100}
        />

        <h3>{content}</h3>
        {type === "place-order" && (
          <button className="order" onClick={handlePlaceOrder}>
            Go home
          </button>
        )}
        {(type === "confirm-delete" || type === "confirm-delete-all") && (
          <div className="button-container">
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
            <button className="cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        )}
        {!(
          type === "confirm-delete" ||
          type === "confirm-delete-all" ||
          type === "place-order"
        ) && (
          <IoMdCloseCircle
            className="close-button"
            onClick={onClose || onSubmitMessage}
          />
        )}
      </div>
    </div>
  );
}

export default Modal;

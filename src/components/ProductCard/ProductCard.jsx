import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./ProductCard.css";
// import { Modal } from "react-responsive-modal";

/* eslint-disable react/prop-types */
function ProductCard({ juice, smoothie }) {
  const { dispatch } = useContext(DataContext);
  return (
    <div className="product-card">
      <Link
        to={
          juice?.name
            ? `/${juice.name}`
            : smoothie?.name
            ? `/${smoothie.name}`
            : ""
        }
      >
        <div className="image-container">
          <img src={juice?.image || smoothie?.image} alt="" />
        </div>
      </Link>
      <div className="details">
        <h3>{juice?.name || smoothie?.name}</h3>
        <p>Ingredients: {juice?.ingredients || smoothie?.ingredients}</p>
        <p>₵{juice?.price || smoothie?.price}.00</p>
      </div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD-TO-CART",
            payload: { juice: juice?.id, smoothie: smoothie?.id },
          })
        }
      >
        Add
      </button>
    </div>
  );
}

export default ProductCard;

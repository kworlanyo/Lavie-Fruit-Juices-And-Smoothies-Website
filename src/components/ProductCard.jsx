import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProductCard({ juice, smoothie, handleAddToCart }) {
  return (
    <div className="product-card">
      <Link to={juice?.name ? `/${juice.name}` : smoothie?.name ? `/${smoothie.name}` : ""}>
        <div className="image-container">
          <img src={juice?.image || smoothie?.image} alt="" />
        </div>
      </Link>
      <div className="details">
        <h3>{juice?.name || smoothie?.name}</h3>
        <p>Ingredients: {juice?.ingredients || smoothie?.ingredients}</p>
        <p>₵{juice?.price || smoothie?.price}.00</p>
      </div>
      <button onClick={() => handleAddToCart(juice ? juice.id : smoothie.id)}>Add</button>
    </div>
  );
}

export default ProductCard;

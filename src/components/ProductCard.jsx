import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProductCard({ juice, smoothie }) {
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
        {/* <p>{juice?.volume || smoothie?.volume}</p> */}
        <p>₵{juice?.price || smoothie?.price}.00</p>
      </div>
      <button>Add</button>
    </div>
  );
}

export default ProductCard;

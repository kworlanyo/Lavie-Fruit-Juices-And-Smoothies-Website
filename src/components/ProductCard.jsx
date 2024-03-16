import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProductCard({ juice, smoothie }) {
  return (
    <div>
      <Link to={juice?.name ? `/${juice.name}` : smoothie?.name ? `/${smoothie.name}` : ""}>
        <img src={juice?.image || smoothie?.image} alt="" />
      </Link>
      <h3>{juice?.name || smoothie?.name}</h3>
      <p>{juice?.ingredients || smoothie?.ingredients}</p>
      <p>{juice?.volume || smoothie?.volume}</p>
      <p>{juice?.price || smoothie?.price}</p>
      <button>Add</button>
    </div>
  );
}

export default ProductCard;

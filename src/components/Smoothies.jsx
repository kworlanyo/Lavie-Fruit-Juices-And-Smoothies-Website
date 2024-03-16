/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

function Smoothies({ smoothies }) {
  return (
    <div>
      {smoothies.map((smoothie) => (
        <ProductCard key={smoothie.id} smoothie={smoothie} />
      ))}
    </div>
  );
}

export default Smoothies;

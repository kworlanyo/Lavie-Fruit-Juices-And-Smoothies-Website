/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

function Juices({ juices }) {
  return (
    <div>
      {juices.map((juice) => (
        <ProductCard key={juice.id} juice={juice} />
      ))}
    </div>
  );
}

export default Juices;

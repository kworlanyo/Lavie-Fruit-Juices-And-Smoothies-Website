/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Juices({ juices }) {
  const { cart, setCart } = useContext(CartContext);

  function handleAddToCart(id) {
    const itemToAdd = juices.find((juice) => juice.id === id);

    if (!cart.includes(itemToAdd)) {
      setCart([...cart, itemToAdd]);
    } else {
      alert("Item has been added to cart already");
    }
  }

  return (
    <div className="juices-container">
      {juices.map((juice) => (
        <ProductCard key={juice.id} juice={juice} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default Juices;

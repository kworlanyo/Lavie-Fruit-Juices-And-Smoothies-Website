/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Smoothies({ smoothies }) {
  const { cart, setCart } = useContext(CartContext);

  function handleAddToCart(id) {
    const itemToAdd = smoothies.find((juice) => juice.id === id);

    if (!cart.includes(itemToAdd)) {
      setCart([...cart, itemToAdd]);
    } else {
      alert("Item has been added to cart already");
    }
  }

  return (
    <div className="smoothies-container">
      {smoothies.map((smoothie) => (
        <ProductCard key={smoothie.id} smoothie={smoothie} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default Smoothies;

/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard/ProductCard";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import "./Juices/Juices.css";

function Smoothies() {
  const { smoothies } = useContext(DataContext);

  return (
    <div className="smoothies-container">
      {smoothies.map((smoothie) => (
        <ProductCard key={smoothie.id} smoothie={smoothie} />
      ))}
    </div>
  );
}

export default Smoothies;

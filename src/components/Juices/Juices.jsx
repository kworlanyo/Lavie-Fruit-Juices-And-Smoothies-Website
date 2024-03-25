/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./Juices.css";

function Juices() {
  const { juices } = useContext(DataContext);

  return (
    <div className="juices-container">
      {juices.map((juice) => (
        <ProductCard key={juice.id} juice={juice} />
      ))}
    </div>
  );
}

export default Juices;

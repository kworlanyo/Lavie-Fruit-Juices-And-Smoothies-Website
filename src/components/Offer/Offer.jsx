/* eslint-disable react/prop-types */
import OfferItem from "../OfferItem/OfferItem";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import "./Offer.css";

function Offer() {
  const { offer } = useContext(DataContext);
  return (
    <div className="offers-container">
      {offer.map((offerItem) => (
        <OfferItem key={offerItem.header} offerItem={offerItem} />
      ))}
    </div>
  );
}

export default Offer;

/* eslint-disable react/prop-types */
import OfferItem from "../OfferItem/OfferItem";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import "./Offer.css";

function Offer() {
  const { offer } = useContext(DataContext);
  return (
    <div
      className="offers-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {offer.map((offerItem) => (
        <OfferItem key={offerItem.header} offerItem={offerItem} />
      ))}
    </div>
  );
}

export default Offer;

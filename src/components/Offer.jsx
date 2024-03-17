/* eslint-disable react/prop-types */
import OfferItem from "./OfferItem";

function Offer({ offer }) {
  return (
    <div className="offers-container">
      {offer.map((offerItem) => (
        <OfferItem key={offerItem.header} offerItem={offerItem} />
      ))}
    </div>
  );
}

export default Offer;

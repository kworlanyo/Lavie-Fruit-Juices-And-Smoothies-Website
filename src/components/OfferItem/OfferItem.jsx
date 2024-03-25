/* eslint-disable react/prop-types */
import "./OfferItem.css";

function OfferItem({ offerItem }) {
  return (
    <div className="offerItem-container">
      <img src={offerItem.image} alt="" />
      <h3>{offerItem.header}</h3>
      <p>{offerItem.text}</p>
    </div>
  );
}

export default OfferItem;

/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function ProductDetails() {
  const { name } = useParams();
  const { dispatch, juices, smoothies } = useContext(DataContext);

  const juiceToShowDetail = juices.find((juice) => juice.name === name);
  const smoothieToShowDetail = smoothies.find(
    (smoothie) => smoothie.name === name
  );

  return (
    <div>
      <div className="product-details-container">
        <img
          src={juiceToShowDetail?.image || smoothieToShowDetail?.image}
          alt=""
        />
        <div className="details">
          <h2>{juiceToShowDetail?.name || smoothieToShowDetail?.name}</h2>
          <p>
            {juiceToShowDetail?.description ||
              smoothieToShowDetail?.description}
          </p>
          <p>
            Ingredients:{" "}
            {juiceToShowDetail?.ingredients ||
              smoothieToShowDetail?.ingredients}
          </p>
          <div>
            <h3>
              ₵{juiceToShowDetail?.price || smoothieToShowDetail?.price}.00
            </h3>
            <p>{juiceToShowDetail?.volume || smoothieToShowDetail?.volume}</p>
          </div>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD-TO-CART",
                payload: {
                  juice: juiceToShowDetail?.id,
                  smoothie: smoothieToShowDetail?.id,
                },
              })
            }
            content="Add to Cart"
          />
        </div>
      </div>
      <div className="terms-and-conditions-container">
        <h2>Terms and Conditions of Order</h2>
        <ul>
          <li>
            Orders are processed and delivered 7 days from the order date.
            Please bear in mind that our juices and smoothies are hand made and
            we can only make a limited amount, so often we are fully booked well
            in advance. Therefore you can pre-order your juices and smoothies
            days or even weeks in advance.
          </li>
          <li>
            Once your order has been processed and delivered, Lavie Juices and
            Smoothies cannot offer a refund on the items bought.
          </li>
        </ul>
      </div>
      <div className="customers-viewed-container">
        <h2>Customers also viewed</h2>
        <div>
          <ProductCard juice={juices[5]} />
          <ProductCard smoothie={smoothies[2]} />
          <ProductCard smoothie={smoothies[0]} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

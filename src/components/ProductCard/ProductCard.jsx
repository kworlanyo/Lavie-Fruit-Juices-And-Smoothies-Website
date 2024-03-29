import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./ProductCard.css";
// import Modal from "../Modal/Modal";

/* eslint-disable react/prop-types */
function ProductCard({ juice, smoothie }) {
  const { dispatch } = useContext(DataContext);

  // const [showModal, setShowModal] = useState(false);
  // const [modalContent, setModalContent] = useState("");

  // const handleClick = () => {
  //   setModalContent("Hello, this is a modal!");
  //   setShowModal(true);
  //   state.showModal(true);
  // };

  return (
    <>
      <div className="product-card" data-aos="zoom-in" data-aos-duration="1000">
        <Link
          to={
            juice
              ? `/shop/juices/${juice.name}`
              : smoothie
              ? `/shop/smoothies/${smoothie.name}`
              : ""
          }
        >
          <div
            className={
              juice?.image ? "image-container" : "smoothie-image-container"
            }
          >
            <img src={juice?.image || smoothie?.image} alt="" />
          </div>
        </Link>
        <div className="details">
          <h3>{juice?.name || smoothie?.name}</h3>
          {/* <p>{juice?.ingredients || smoothie?.ingredients}</p> */}
          <p>₵{juice?.price || smoothie?.price}.00</p>
          <button
            onClick={() =>
              dispatch({
                type: "ADD-TO-CART",
                payload: { juice: juice?.id, smoothie: smoothie?.id },
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

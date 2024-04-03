/* eslint-disable react/prop-types */
import Button from "../../components/Button/Button";
import Offer from "../../components/Offer/Offer";
import ProductCard from "../../components/ProductCard/ProductCard";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { useContext, useEffect } from "react";
import "./Home.css";
import contactImage from "../../assets/contact-image.svg";

function Home() {
  const {
    state: { contactsInputs, showError },
    juices,
    dispatch,
  } = useContext(DataContext);
  const navigate = useNavigate();

  function handleChange(e) {
    dispatch({
      type: "CONTACTS-INPUTS-CHANGE",
      payload: { [e.target.name]: e.target.value },
    });
  }

  const inputsValues = Object.values(contactsInputs);
  function handleSubmitMessage(e) {
    e.preventDefault();

    if (inputsValues.includes("")) {
      dispatch({ type: "SHOW-ERROR" });
    } else {
      dispatch({ type: "OPEN-MODAL-CONTACT-US" });
      dispatch({ type: "SUBMIT-MESSAGE" });
    }
  }

  useEffect(() => {
    if (!inputsValues.includes("")) {
      dispatch({ type: "REMOVE-ERROR" });
    }
  });

  return (
    <div>
      <section className="hero-container">
        <h1 data-aos="zoom-out" data-aos-duration="2000">
          Enjoy quality juices and smoothies
        </h1>
        <p data-aos="zoom-out" data-aos-duration="2000">
          We offer 100% fresh and natural juices and smoothies specially made
          with your health and vitality in mind.
        </p>
        <Button
          data-aos="zoom-out"
          data-aos-duration="2000"
          onClick={() => navigate("shop/juices")}
          content="Shop Now"
        />
      </section>
      <section className="offer-section">
        <div className="wrapper">
          <h2>What We Offer</h2>
          <Offer />
        </div>
      </section>
      <section className="products-section">
        <div className="wrapper">
          <div className="products-header">
            <h2>Products</h2>
            <Link to="shop/juices">See all</Link>
          </div>
          <div className="home-products">
            <ProductCard juice={juices[0]} />
            <ProductCard juice={juices[1]} />
            <ProductCard juice={juices[3]} />
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="wrapper">
          <h2>What Clients Say About Us</h2>
          <Testimonials />
        </div>
      </section>
      <section className="contact-us-section">
        <div className="wrapper">
          <h2>Contact Us</h2>
          <div className="form-and-image-container">
            <form data-aos="fade-right" data-aos-duration="1000">
              <label>
                Name*
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={contactsInputs.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email Address*
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={contactsInputs.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Message*
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="Write your message here..."
                  value={contactsInputs.message}
                  onChange={handleChange}
                  required
                />
              </label>
              {showError && (
                <p style={{ color: "red" }}>
                  Please all inputs must filled before submitting the form!
                </p>
              )}
              <Button
                className="button"
                content="Submit"
                onClick={handleSubmitMessage}
              />
            </form>
            <div
              className="image-container"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src={contactImage} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

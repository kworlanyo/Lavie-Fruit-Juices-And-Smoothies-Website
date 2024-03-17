/* eslint-disable react/prop-types */
import Button from "../components/Button";
import Offer from "../components/Offer";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";
import { useNavigate } from "react-router-dom";

function Home({ juices, offer, testimonials }) {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero-container">
        <h1>Enjoy quality juices and smoothies</h1>
        <p>
          We offer 100% fresh and natural juices and smoothies specially made with your health and vitality in mind.
        </p>
        {/* <button>Shop Now</button> */}
        <Button onClick={() => navigate("shop/juices")} content="Shop Now" />
      </section>
      <section className="offer-section">
        <div className="wrapper">
          <h2>What We Offer</h2>
          <Offer offer={offer} />
        </div>
      </section>
      <section className="products-section">
        <div className="wrapper">
          <h2>Products</h2>
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
          <Testimonials testimonials={testimonials} />
        </div>
      </section>
      <section className="contact-us-section">
        <div className="wrapper">
          <h2>Contact Us</h2>
          <form>
            <label>
              Name
              <input type="text" name="name" placeholder="Enter your name" />
            </label>
            <label>
              Email Address
              <input type="email" name="email" placeholder="Enter your email address" />
            </label>
            <label>
              Message
              <textarea name="message" cols="30" rows="10" placeholder="Write your message here..." />
            </label>
            <Button content="Submit" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;

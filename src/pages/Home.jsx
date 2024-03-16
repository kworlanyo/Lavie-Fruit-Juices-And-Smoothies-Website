/* eslint-disable react/prop-types */
import Offer from "../components/Offer";
import ProductCard from "../components/ProductCard";
import TestimonialsCard from "../components/TestimonialsCard";
import { useNavigate } from "react-router-dom";

function Home({ juices }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hero-container">
        <h1>Enjoy quality juices and smoothies</h1>
        <p>
          We offer 100% fresh and natural juices and smoothies specially made with your health and vitality in mind.
          <button onClick={() => navigate("shop/juices")}>Shop Now</button>
        </p>
      </div>
      <div className="offer-section">
        <h2>What We Offer</h2>
        <Offer />
        <Offer />
        <Offer />
      </div>
      <div className="products-section">
        <h2>Products</h2>
        <ProductCard juice={juices[0]} />
        <ProductCard juice={juices[1]} />
        <ProductCard juice={juices[2]} />
      </div>
      <div className="testimonials-section">
        <h2>What Clients Say About Us</h2>
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
      <div className="contact-us-section">
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;

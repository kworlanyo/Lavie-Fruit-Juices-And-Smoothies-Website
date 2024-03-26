/* eslint-disable react/prop-types */
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import "./Testimonials.css";

function Testimonials() {
  const { testimonials } = useContext(DataContext);
  return (
    <div
      className="testimonials-container"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      {testimonials.map((testimonial) => (
        <TestimonialsCard
          key={testimonial.comments}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
}

export default Testimonials;

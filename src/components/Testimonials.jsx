/* eslint-disable react/prop-types */
import TestimonialsCard from "./TestimonialsCard";
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";

function Testimonials() {
  const { testimonials } = useContext(DataContext);
  return (
    <div className="testimonials-container">
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

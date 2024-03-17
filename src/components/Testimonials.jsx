/* eslint-disable react/prop-types */
import TestimonialsCard from "./TestimonialsCard";

function Testimonials({ testimonials }) {
  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial) => (
        <TestimonialsCard key={testimonial.comments} testimonial={testimonial} />
      ))}
    </div>
  );
}

export default Testimonials;

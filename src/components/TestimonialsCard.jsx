/* eslint-disable react/prop-types */
function TestimonialsCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="top">
        <img src={testimonial.image} alt="" />
        <div className="name-and-time">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.timePosted}</p>
        </div>
      </div>
      <p>{testimonial.comments}</p>
    </div>
  );
}

export default TestimonialsCard;

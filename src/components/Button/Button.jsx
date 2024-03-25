/* eslint-disable react/prop-types */
import "./Button.css";

function Button({ onClick, content }) {
  return (
    <button className="button" onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;

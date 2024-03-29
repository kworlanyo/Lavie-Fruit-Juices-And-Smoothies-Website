/* eslint-disable react/prop-types */
import "./Button.css";

function Button({ onClick, content, disabled }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}

export default Button;

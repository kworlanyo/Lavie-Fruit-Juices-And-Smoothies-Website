/* eslint-disable react/prop-types */
function Button({ onClick, content }) {
  return (
    <button className="button" onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;

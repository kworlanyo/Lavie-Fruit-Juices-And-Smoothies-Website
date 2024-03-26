/* eslint-disable react/prop-types */
function Modal({ onClose, content }) {
  return (
    <div className="overlay" onClick={() => onClose(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h3>{content}</h3>
        <button onClick={() => onClose(false)}>close</button>
      </div>
    </div>
  );
}

export default Modal;

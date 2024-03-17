import Counter from "./Counter";

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  return (
    <div>
      <div>
        <img src={item.image} alt="" />
        <h3>{item.name}</h3>
      </div>
      <div>
        <p>{item.price}</p>
        <Counter />
        <p></p>
      </div>
      <p>Delete</p>
    </div>
  );
}

export default CartItem;

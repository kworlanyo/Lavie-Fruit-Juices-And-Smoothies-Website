import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";
// import Button from "./Button";

function Checkout() {
  const {
    state: { cart, termsAgreed },
    dispatch,
  } = useContext(DataContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-section">
      <div className="wrapper">
        <div className="checkout-container">
          <div className="billing-address-container">
            <form>
              <h2>Billing Details</h2>
              <label>
                First Name
                <input type="text" name="firstName" />
              </label>
              <label>
                Last Name
                <input type="text" name="lastName" />
              </label>
              <label>
                Town/City
                <input type="text" name="town" />
              </label>
              <label>
                Address
                <input type="text" name="address" />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phoneNumber" />
              </label>
              <label>
                Email Address
                <input type="email" name="email" />
              </label>
              <h2>Choose Payment Method</h2>
              <div className="radio-button">
                <input type="radio" name="payment-method" id="payment1" />
                <label htmlFor="payment1">Bank Transfer</label>
              </div>
              <div>
                <h3>Please pay the money into our bank account</h3>
                <div>
                  <p>Lavie Juice & Smoothies</p>
                  <p>Stanbic Bank</p>
                  <p>0234 5674 8756 8734</p>
                  <p>Accra</p>
                </div>
              </div>
              <div className="radio-button">
                <input type="radio" name="payment-method" id="payment2" />
                <label htmlFor="payment2">Mobile Money</label>
              </div>
              <div>
                <h3>Please pay the money into our Mobile Money Account:</h3>
                <div>
                  <p>MTN Momo: 0242171872</p>
                </div>
              </div>
            </form>
          </div>
          <div className="your-items-container">
            <h2>Your Item(s)</h2>
            {cart.map((item) => {
              return (
                <div key={item.id} className="checkout-items">
                  <img src={item.image} alt="" width={200} />
                  <div className="details">
                    <p>Product: {item.name}</p>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <h3>Total: ₵{item.price * item.quantity}.00</h3>
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE-ITEM", payload: item.id })
                      }
                    >
                      Delete Item
                    </button>
                  </div>
                </div>
              );
            })}
            <h2 className="grand-total">Grand Total: ₵{total.toFixed(2)} </h2>
            <input
              type="checkbox"
              name="terms-and-conditions"
              id="terms-and-conditions"
              checked={termsAgreed}
              onChange={() => dispatch({ type: "ACTIVATE-ORDER" })}
            />
            <label htmlFor="terms-and-conditions">
              With your order, you agree to our terms and conditions of order.
            </label>
            <button disabled={!termsAgreed}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import "./Checkout.css";
import Button from "../Button/Button";
// import Button from "./Button";

function Checkout() {
  const {
    state: { cart, termsAgreed, checkoutInputs, allInputsFilled },
    dispatch,
  } = useContext(DataContext);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "payment-method") {
      dispatch({ type: "SELECT-PAYMENT-VALUE", payload: value });
      dispatch({ type: "ACTIVATE-ORDER-2" });
    } else {
      dispatch({
        type: "CHECKOUT-INPUTS-CHANGE",
        payload: { [name]: value },
      });
      dispatch({ type: "ACTIVATE-ORDER-2" });
    }
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-section">
      <div className="wrapper">
        <div className="checkout-container">
          <div className="billing-address-container">
            <form>
              <h2>Billing Details</h2>
              <label>
                First Name*
                <input
                  type="text"
                  name="firstName"
                  value={checkoutInputs.firstName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Last Name*
                <input
                  type="text"
                  name="lastName"
                  value={checkoutInputs.lastName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Town/City*
                <input
                  type="text"
                  name="town"
                  value={checkoutInputs.town}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Address*
                <input
                  type="text"
                  name="address"
                  value={checkoutInputs.address}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone Number*
                <input
                  type="tel"
                  name="phoneNumber"
                  value={checkoutInputs.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email Address*
                <input
                  type="email"
                  name="email"
                  value={checkoutInputs.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <h2>Choose Payment Method</h2>
              <div className="payment-methods-container">
                <div className="bank-transfer-container">
                  <div className="radio-button">
                    <input
                      type="radio"
                      name="payment-method"
                      id="payment1"
                      value="bank-transfer" // Add a unique value for this option
                      checked={checkoutInputs.paymentMethod === "bank-transfer"}
                      onChange={handleChange}
                    />
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
                </div>
                <div className="mobile-money-container">
                  <div className="radio-button">
                    <input
                      type="radio"
                      name="payment-method"
                      id="payment2"
                      value="mobile-money" // Add a unique value for this option
                      checked={checkoutInputs.paymentMethod === "mobile-money"}
                      onChange={handleChange}
                    />
                    <label htmlFor="payment2">Mobile Money</label>
                  </div>
                  <div>
                    <h3>Please pay the money into our Mobile Money Account:</h3>
                    <div>
                      <p>MTN Momo: 0242171872</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="your-items-container">
            {cart.length < 1 ? (
              <h3>No items to checkout</h3>
            ) : (
              <>
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
                <h2 className="grand-total">
                  Grand Total: ₵{total.toFixed(2)}{" "}
                </h2>
                <input
                  type="checkbox"
                  name="terms-and-conditions"
                  id="terms-and-conditions"
                  checked={termsAgreed}
                  onChange={() => dispatch({ type: "ACTIVATE-ORDER" })}
                />
                <label htmlFor="terms-and-conditions">
                  With your order, you agree to our terms and conditions of
                  order.
                </label>
                <Button
                  content="Place Order"
                  disabled={!termsAgreed || !allInputsFilled ? true : false}
                  onClick={() => dispatch({ type: "SUBMIT-ORDER" })}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

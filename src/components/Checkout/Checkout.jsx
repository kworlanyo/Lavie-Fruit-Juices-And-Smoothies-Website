import { DataContext } from "../../contexts/DataContext";
import { useContext, useEffect } from "react";
import "./Checkout.css";
import Button from "../Button/Button";
import CheckoutItems from "../CheckoutItems/CheckoutItems";

function Checkout() {
  const {
    state: { cart, termsAgreed, checkoutInputs, showErrorCheckout },
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

  const values = Object.values(checkoutInputs);
  function handleSubmit() {
    if (values.includes("") || termsAgreed === false) {
      dispatch({ type: "SHOW-ERROR-CHECKOUT" });
    } else {
      dispatch({ type: "OPEN-MODAL-PLACE-ORDER" });
    }
  }

  useEffect(() => {
    if (!values.includes("") && termsAgreed === true) {
      dispatch({ type: "REMOVE-ERROR-CHECKOUT" });
    }
  });

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-section">
      <div className="wrapper">
        <div className="checkout-container">
          <div className="billing-address-container">
            <form>
              <h3>Billing Details</h3>
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
              <div className="payment-methods-container">
                <h3>Choose Payment Method</h3>
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
                    <h4>Please pay the money into our bank account</h4>
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
                    <h4>Please pay the money into our Mobile Money Account:</h4>
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
                <h3>Your Item(s)</h3>
                {cart.map((item) => {
                  return <CheckoutItems key={item.id} item={item} />;
                })}
                <h3 className="grand-total">
                  Grand Total: ₵{total.toFixed(2)}{" "}
                </h3>
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
                {showErrorCheckout && (
                  <p style={{ color: "red", marginTop: "2rem" }}>
                    Kindly ensure all fields are filled in the billing details
                    and that you have accepted the terms and conditions before
                    proceeding to place your order. Thank you!
                  </p>
                )}
                <Button
                  content="Place Order"
                  // disabled={!termsAgreed || !allInputsFilled ? true : false}
                  onClick={handleSubmit}
                  className="button"
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

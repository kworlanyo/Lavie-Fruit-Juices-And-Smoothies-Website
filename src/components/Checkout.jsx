function Checkout() {
  return (
    <div>
      <div className="billing-address-container">
        <form>
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
        </form>
      </div>
    </div>
  );
}

export default Checkout;

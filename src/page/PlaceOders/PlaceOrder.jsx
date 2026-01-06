import React, { useState, useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const statesWithCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  Bihar: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
  Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Karnataka: ["Bengaluru", "Mysore", "Mangalore", "Hubli"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
};

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("India");
  const [phone, setPhone] = useState("");

  const deliveryFee = 2;
  const totalAmount = getTotalCartAmount() + deliveryFee;

  return (
    <form className="place-order">
      {/* Left Side - Delivery Information */}
      <div className="place-order-left">
        <b className="title">Delivery Information</b>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Address Inputs */}
        <input
          type="text"
          placeholder="House No. / Building Name"
          value={houseNo}
          onChange={(e) => setHouseNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Street Name / Area"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          placeholder="Landmark (Optional)"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
        />

        {/* State & City Dropdown */}
        <div className="multi-fields">
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">Select State</option>
            {Object.keys(statesWithCities).map((stateName, index) => (
              <option key={index} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={!state}
          >
            <option value="">Select City</option>
            {state &&
              statesWithCities[state].map((cityName, index) => (
                <option key={index} value={cityName}>
                  {cityName}
                </option>
              ))}
          </select>
        </div>

        {/* Zip Code & Country */}
        <div className="multi-fields">
          <input
            type="text"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <input type="text" placeholder="Country" value={country} readOnly />
        </div>

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* Right Side - Cart Summary */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{totalAmount}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

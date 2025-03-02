import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets"; // ✅ Ensure correct import
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      {/* ✅ Food Image */}
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
      </div>

      {/* ✅ Food Details */}
      <div className="food-item-info">
        <p className="food-item-name">{name}</p>
        <p className="food-item-price">₹{price}</p>
        <img
          className="food-item-rating"
          src={assets.rating_starts}
          alt="Rating Stars"
        />
      </div>

      {/* ✅ Swiggy-Style Add Button (Now Updates Global Cart) */}
      <div
        className={`add-to-cart-container ${cartItems[id] > 0 ? "active" : ""}`}
      >
        {cartItems[id] === undefined || cartItems[id] === 0 ? (
          <button className="add-btn" onClick={() => addToCart(id)}>
            Add
          </button>
        ) : (
          <div className="counter">
            <button className="counter-btn" onClick={() => removeFromCart(id)}>
              ➖
            </button>
            <span>{cartItems[id]}</span>
            <button className="counter-btn" onClick={() => addToCart(id)}>
              ➕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;

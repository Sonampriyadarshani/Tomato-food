import { createContext, useEffect, useState } from "react";
import { food_list as initialFoodList } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [food_list, setFoodList] = useState(initialFoodList);
  const [cartItems, setCartItems] = useState({});

  // ✅ Function to Add Item to Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Increase quantity
    }));
  };

  // ✅ Function to Remove Item from Cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] === 1) {
        const updatedCart = { ...prev };
        delete updatedCart[itemId]; // Remove item if count is 0
        return updatedCart;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

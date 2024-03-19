/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  console.log(cart);

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
}

export default CartContextProvider;

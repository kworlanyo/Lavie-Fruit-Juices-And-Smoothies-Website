/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { juices, smoothies, offer, testimonials } from "../../data";

export const DataContext = createContext(null);

const initialState = {
  // counter: 1,
  cart: JSON.parse(localStorage.getItem("products")) || [],
  termsAgreed: false,
  showModal: false,
};

function reducer(currentState, action) {
  switch (action.type) {
    case "ADD-TO-CART": {
      const juiceItem = juices.find((item) => item.id === action.payload.juice);
      const smoothieItem = smoothies.find(
        (item) => item.id === action.payload.smoothie
      );

      const itemToAdd = juiceItem || smoothieItem;

      const existingItem = currentState.cart.find(
        (item) => item.id === itemToAdd.id
      );

      if (!existingItem) {
        return {
          ...currentState,
          cart: [...currentState.cart, { ...itemToAdd, quantity: 1 }], // Add quantity field
        };
      } else {
        alert("Item is already in the cart");
        return currentState;
      }
    }

    case "DELETE-ITEM": {
      if (confirm("Are you sure you want to delete this item?")) {
        return {
          ...currentState,
          cart: currentState.cart.filter((item) => item.id !== action.payload),
        };
      } else {
        return currentState;
      }
    }

    case "DELETE-ALL": {
      if (confirm("Are you sure you want to delete all items from the cart?")) {
        return {
          ...currentState,
          cart: [],
        };
      } else {
        return currentState;
      }
    }

    case "INCREMENT": {
      const updatedCart = currentState.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        ...currentState,
        cart: updatedCart,
      };
    }

    case "DECREMENT": {
      const updatedCart = currentState.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      return {
        ...currentState,
        cart: updatedCart,
      };
    }

    case "ACTIVATE-ORDER": {
      return {
        ...currentState,
        termsAgreed: !currentState.termsAgreed,
      };
    }

    default: {
      return currentState;
    }
  }
}

function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <DataContext.Provider
      value={{ state, dispatch, offer, testimonials, juices, smoothies }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;

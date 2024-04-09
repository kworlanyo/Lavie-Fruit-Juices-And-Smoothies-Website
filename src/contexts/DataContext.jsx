/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { juices, smoothies, offer, testimonials } from "../../data";

export const DataContext = createContext(null);

const initialState = {
  cart: JSON.parse(localStorage.getItem("products")) || [],
  termsAgreed: false,
  showModal: false,
  modalContent: "",
  modalType: "",
  confirm: false,
  confirmItemId: "",
  checkoutInputs: {
    firstName: "",
    lastName: "",
    town: "",
    address: "",
    phoneNumber: "",
    email: "",
    paymentMethod: "",
  },
  allInputsFilled: false,
  contactsInputs: {
    name: "",
    email: "",
    message: "",
  },
  showError: false,
  showErrorCheckout: false,
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
          showModal: true,
          modalContent: `${itemToAdd?.name} has been added to the cart!`,
          modalType: "cart",
        };
      } else {
        return {
          ...currentState,
          showModal: true,
          modalContent: `${itemToAdd?.name} is already in cart!`,
          modalType: "warn",
        };
      }
    }

    case "DELETE-ITEM": {
      const itemToRemove = currentState.cart.find(
        (item) => item.id === action.payload
      );

      // Check if itemToRemove exists
      if (itemToRemove) {
        const updatedCart = currentState.cart.filter(
          (item) => item.id !== action.payload
        );

        if (updatedCart.length === 0) {
          // Reset checkout form and related state if no items are left in the cart
          return {
            ...currentState,
            cart: updatedCart,
            showModal: true,
            modalContent: `Are you sure you want to remove ${itemToRemove?.name} from the cart?`,
            modalType: "confirm-delete",
            termsAgreed: false,
            showErrorCheckout: false,
            checkoutInputs: {
              firstName: "",
              lastName: "",
              town: "",
              address: "",
              phoneNumber: "",
              email: "",
              paymentMethod: "",
            },
          };
        } else {
          // If there are still items in the cart, update the cart state
          return {
            ...currentState,
            cart: updatedCart,
            showModal: true,
            modalContent: `Are you sure you want to remove ${itemToRemove?.name} from the cart?`,
            modalType: "confirm-delete",
          };
        }
      } else {
        return currentState;
      }
    }

    case "DELETE-ALL": {
      return {
        ...currentState,
        cart: [], // Empty the cart when confirmed
        showModal: false,
        modalContent: "",
        modalType: "",
      };
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

    case "ACTIVATE-ORDER-2": {
      const values = Object.values(currentState.checkoutInputs);
      const allInputsFilled = values.every((value) => value !== "");
      return {
        ...currentState,
        allInputsFilled: allInputsFilled,
      };
    }

    case "CHECKOUT-INPUTS-CHANGE": {
      return {
        ...currentState,
        checkoutInputs: { ...currentState.checkoutInputs, ...action.payload },
      };
    }

    case "SELECT-PAYMENT-VALUE": {
      return {
        ...currentState,
        checkoutInputs: {
          ...currentState.checkoutInputs,
          paymentMethod: action.payload,
        },
      };
    }

    case "HIDE-MODAL": {
      return {
        ...currentState,
        showModal: false,
        modalContent: "",
      };
    }

    case "OPEN-MODAL-DELETE-ITEM": {
      const itemToRemove = currentState.cart.find(
        (item) => item.id === action.payload
      );

      // Check if itemToRemove exists
      if (itemToRemove) {
        return {
          ...currentState,
          showModal: true,
          modalContent: `Are you sure you want to remove ${itemToRemove?.name} from the cart?`,
          modalType: "confirm-delete",
          confirmItemId: action.payload, // Include item id as payload
        };
      } else {
        return currentState; // Return current state if item to remove is not found
      }
    }

    case "OPEN-MODAL-DELETE-ALL": {
      return {
        ...currentState,
        showModal: true,
        modalContent:
          "Are you sure you want to delete all items from the cart?",
        modalType: "confirm-delete-all",
      };
    }

    case "OPEN-MODAL-PLACE-ORDER": {
      return {
        ...currentState,
        showModal: true,
        modalContent:
          "Thank you for your order. We will contact you soon to confirm your order",
        modalType: "place-order",
        checkoutInputs: {
          firstName: "",
          lastName: "",
          town: "",
          address: "",
          phoneNumber: "",
          email: "",
          paymentMethod: "",
        },
        showErrorCheckout: false,
      };
    }

    case "PLACE-ORDER": {
      return initialState;
    }

    case "CONTACTS-INPUTS-CHANGE": {
      return {
        ...currentState,
        contactsInputs: {
          ...currentState.contactsInputs,
          ...action.payload,
        },
      };
    }

    case "OPEN-MODAL-CONTACT-US": {
      return {
        ...currentState,
        showModal: true,
        modalContent: "Thank you for your message! 🙏",
        modalType: "contact-message",
      };
    }

    case "SUBMIT-MESSAGE": {
      return {
        ...currentState,
        contactsInputs: {
          name: "",
          email: "",
          message: "",
        },
        showError: false,
      };
    }

    case "SHOW-ERROR": {
      return {
        ...currentState,
        showError: true,
      };
    }

    case "REMOVE-ERROR": {
      return {
        ...currentState,
        showError: false,
      };
    }

    case "SHOW-ERROR-CHECKOUT": {
      return {
        ...currentState,
        showErrorCheckout: true,
      };
    }

    case "REMOVE-ERROR-CHECKOUT": {
      return {
        ...currentState,
        showErrorCheckout: false,
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

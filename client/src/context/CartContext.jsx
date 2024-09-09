import { createContext, useContext, useReducer } from "react";

const initialState = {
  cart: [],
  isCartOpen: false,
  orderComplete: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/added": {
      const { item, amount } = action.payload;
      const newItem = { ...item, amount };

      // if item exist we get it and increase the amount
      const index = state.cart.findIndex((i) => i.id === item.id);

      if (index === -1) return { ...state, cart: [...state.cart, newItem] };

      state.cart[index].amount += amount;

      return { ...state };
    }
    case "cart/removed": {
      const { id, amount } = action.payload;

      const index = state.cart.findIndex((i) => i.id === id);

      state.cart[index].amount -= amount;

      if (state.cart[index].amount === 0)
        return { ...state, cart: state.cart.filter((it) => it.id !== id) };

      return { ...state };
    }
    case "cart/empty":
      return { ...state, cart: [] };
    case "cart/toggle":
      return { ...state, isCartOpen: !state.isCartOpen };
    case "cart/close":
      return { ...state, isCartOpen: false };
    case "cart/orderComplete":
      return { ...state, orderComplete: !state.orderComplete };
    default:
      throw new Error("Unknown Cart action");
  }
}

const context = createContext();

function CartProvider({ children }) {
  const [{ cart, isCartOpen, orderComplete }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleAdd(item, amount = 1) {
    dispatch({ type: "cart/added", payload: { item, amount } });
  }

  function handleRemove(id, amount = 1) {
    dispatch({ type: "cart/removed", payload: { id, amount } });
  }

  function handleCartToggle() {
    dispatch({ type: "cart/toggle" });
  }

  function handleCartClose() {
    dispatch({ type: "cart/close" });
  }

  function handleEmptyCart() {
    dispatch({ type: "cart/empty" });
  }

  function handleOrderComplete() {
    dispatch({ type: "cart/orderComplete" });
  }

  function getTotal() {
    return cart.reduce((acc, it) => acc + it.price * it.amount, 0);
  }

  function getCartAmount() {
    return cart.reduce((acc, it) => acc + it.amount, 0);
  }

  return (
    <context.Provider
      value={{
        cart,
        isCartOpen,
        orderComplete,
        handleAdd,
        handleRemove,
        handleEmptyCart,
        handleCartToggle,
        handleCartClose,
        handleOrderComplete,
        getTotal,
        getCartAmount,
      }}
    >
      {children}
    </context.Provider>
  );
}

function useCart() {
  return useContext(context);
}

export { CartProvider, useCart };

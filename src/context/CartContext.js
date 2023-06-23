import { createContext, useState } from "react";

// Create Context (Allows the components to access the context)
const CartContext = createContext();

// Provider (Allows the children to access the state)
const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

import { createContext, useEffect, useState } from "react";

// Create Context (Allows the components to access the context)
const CartContext = createContext();

// Provider (Allows the children to access the state)
const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmout] = useState(0);
  const [total, setTotal] = useState(0);

  // Cart amount
  useEffect(() => {
    const amount = cart.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);

    setItemsAmout(amount);
  }, [cart]);

  // Cart total
  useEffect(() => {
    const total = cart.reduce((acc, cur) => {
      return acc + cur.attributes.price * cur.amount;
    }, 0);

    setTotal(total);
  }, [cart]);

  // Add to cart
  const addToCart = (item, id) => {
    const itemId = parseInt(id);
    const newItem = { ...item, amount: 1 };

    // Check if items already exist in the cart
    const cartItem = cart.find((element) => {
      return element.id === itemId;
    });

    if (cartItem) {
      const newCart = cart.map((element) => {
        if (element.id === itemId) {
          return {
            ...element,
            amount: element.amount + 1,
          };
        } else {
          return element;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    // Open the cart sidebar
    setIsOpen(true);
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // Handle select quantity
  const handleSelect = (e, id) => {
    const value = parseInt(e.target.value);
    console.log(value);

    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: value,
          };
        } else {
          return item;
        }
      });

      setCart(newCart);
    }
  };

  // Handle input quantity
  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);

    // Find the item in the cart by id
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value)) {
            return {
              ...item,
              amount: 1,
            };
          } else {
            return {
              ...item,
              amount: value,
            };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    setIsOpen(true);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        total,
        removeFromCart,
        itemsAmount,
        handleInput,
        handleSelect,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

import React, { createContext, useContext, useState } from "react";

// Création du contexte pour le panier
const CartContext = createContext();

// Hook personnalisé pour utiliser le contexte du panier
export function useCart() {
  return useContext(CartContext);
}

// Fournisseur du contexte du panier
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

import { createContext, useContext, useState } from "react";

const CartContext = createContext();


export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);


  const addToCart = (food) => {

    setCartItems((prev) => {

      const existingItem = prev.find(
        (item) => item.id === food.id
      );


      if (existingItem) {

        return prev.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }


      return [
        ...prev,
        {
          ...food,
          quantity: 1,
        },
      ];

    });

  };


  const increaseQuantity = (id) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };


  const decreaseQuantity = (id) => {

    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  const removeFromCart = (id) => {

    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };


  // Clear cart after successful order
  const clearCart = () => {

    setCartItems([]);

  };


  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}


export function useCart() {

  return useContext(CartContext);

}
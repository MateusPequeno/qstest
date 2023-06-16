import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext(null);

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  const removeFromBasket = (item) => {
    setBasket((prevBasket) =>
      prevBasket.filter((basketItem) => basketItem !== item)
    );
  };
  return (
    <BasketContext.Provider
      value={{ basket, setBasket, addToBasket, removeFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}

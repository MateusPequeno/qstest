import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext(null);

export function BasketProvider({ children }) {
  const [data, setData] = useState(null);

  return (
    <BasketContext.Provider value={(data, setData)}>
      {children}
    </BasketContext.Provider>
  );
}

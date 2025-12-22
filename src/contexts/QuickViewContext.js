import { createContext, useContext, useState } from "react";

const quickViewContext = createContext();

export function QuickViewProvider({ children }) {
  let [id, setId] = useState(null);
  return (
    <quickViewContext.Provider
      value={{
        id,
        setId,
      }}
    >
      {children}
    </quickViewContext.Provider>
  );
}

export function useQuickView() {
  return useContext(quickViewContext);
}

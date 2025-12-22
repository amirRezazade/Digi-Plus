import { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export function CompareProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaxLength, setIsMaxLength] = useState(false);

  return (
    <CompareContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        isMaxLength,
        setIsMaxLength,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  return useContext(CompareContext);
}

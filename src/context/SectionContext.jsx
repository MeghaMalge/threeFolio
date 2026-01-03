import { createContext, useContext, useState } from "react";
import { SECTIONS } from "../constants/sections";

const SectionContext = createContext(null);

export function SectionProvider({ children }) {
  const [section, setSection] = useState(SECTIONS.HOME);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSection must be used inside SectionProvider");
  }
  return context;
}

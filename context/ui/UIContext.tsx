import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;

  // Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);

// Sellecione todo y Ctrl + P
// > user Snippets
// react (TypeScript React)

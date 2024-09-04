// src/context/NavbarContext.tsx
import React, { createContext, useContext, ReactNode } from "react";

interface NavbarContextType {
  color: string;
  setColor: (color: string) => void;
  logoColor: string;
  setLogoColor: (color: string) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [color, setColor] = React.useState<string>("text-gray-600");
  const [logoColor, setLogoColor] = React.useState<string>("text-black");

  return (
    <NavbarContext.Provider
      value={{ color, setColor, logoColor, setLogoColor }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }
  return context;
};

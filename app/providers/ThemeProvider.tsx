import { Dispatch } from "@reduxjs/toolkit";
import {
  createContext,
  PropsWithChildren,
  FC,
  useState,
  useContext,
  SetStateAction,
} from "react";
import { ThemeType, Theme, THEMES } from "./theme.model";

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: "light",
  theme: THEMES["light"],
} as ThemeContextProps);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

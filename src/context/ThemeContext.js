import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const Context = (props) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  const value = { isDark, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

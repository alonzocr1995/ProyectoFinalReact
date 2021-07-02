import React, { useCallback, useEffect, useState } from "react";
import storageManager from "../utils/localStorage";

interface IThemeContext {
  theme: "light" | "dark";
  handleTheme?: (theme: "light" | "dark") => void;
}

export const initialTheme = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },
  dark: {
    background: "#1a1a1a",
    color: "#ffffff",
  },
};

const ThemeContext = React.createContext({ theme: "dark" } as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const handleTheme = useCallback(
    (themeValue: "light" | "dark") => {
      setTheme(themeValue);
      storageManager.save("theme", themeValue);
    },
    [setTheme]
  );

  const handleLoadTheme = useCallback(() => {
    const storedThemes = storageManager.get("theme");
    setTheme(storedThemes);
  }, []);

  useEffect(() => {
    handleLoadTheme();
  }, [handleLoadTheme]);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

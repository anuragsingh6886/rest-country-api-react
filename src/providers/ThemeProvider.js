import { createContext, useEffect } from "react";

const ThemeChangeContext = createContext();

const ThemeChangeProvider = ({ children, theme, setTheme }) => {
  useEffect(() => {
    const theme_storage = localStorage.getItem("theme") || "LIGHT";
    setTheme(
      theme_storage === "LIGHT" || theme_storage === "DARK"
        ? theme_storage
        : "LIGHT"
    );
  }, [setTheme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = () => {
    setTheme((previousTheme) => (previousTheme === "DARK" ? "LIGHT" : "DARK"));
  };

  return (
    <ThemeChangeContext.Provider value={{ theme, handleChange }}>
      {children}
    </ThemeChangeContext.Provider>
  );
};

export { ThemeChangeProvider, ThemeChangeContext };

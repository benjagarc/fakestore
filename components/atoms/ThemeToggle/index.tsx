"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./index.module.scss";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button
      className={`btn btn-custom ${styles.toggleButton}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}
    </Button>
  );
};

export default ThemeToggle;

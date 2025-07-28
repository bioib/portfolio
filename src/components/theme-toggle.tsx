"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(`${theme == "light" ? "dark" : "light"}`);
  };
  return (
    <button onClick={toggleTheme} className="cursor-pointer p-1 border-2 rounded-md border-surface-0">
      {theme == "light" ? <Moon /> : <Sun />}
    </button>
  );
}

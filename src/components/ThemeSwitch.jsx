import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiMoon, HiSun } from 'react-icons/hi';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="focus:outline-none focus-visible:outline-none p-2 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-300"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <span role="img" aria-label="Light mode">
          <HiSun className="w-6 h-6" />
        </span>
      ) : (
        <span role="img" aria-label="Dark mode">
          <HiMoon className="w-6 h-6" />
        </span>
      )}
    </button>
  );
};

export default ThemeSwitch; 
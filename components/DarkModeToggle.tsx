import Flare from "@/hooks/Flare";
import { useState, useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedColorMode = localStorage.getItem("tailwind-dark-mode");

    if (storedColorMode === "dark" || (storedColorMode === null && prefersDarkMode)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggle = () => {
    const newColorMode = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("tailwind-dark-mode", newColorMode);

    if (newColorMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
  };

  return (
    <>
    <div className={` ${isDarkMode ? "dark" : ""}`}>
      <button
        className={`text-gray-600 ${isDarkMode ? "dark:text-gray-300" : ""}`}
        onClick={handleToggle}
      >
        {isDarkMode ? (
          <div className="flex flex-row items-center"><BiSun  />  <p className="text-sm ml-2">Light</p></div>
        ) : (
          <div className="flex flex-row items-center"><BiMoon  />  <p className="text-sm ml-2">Dark</p></div>
        )}
      </button>
    </div>
    </>
  );
};

export default DarkModeToggle;
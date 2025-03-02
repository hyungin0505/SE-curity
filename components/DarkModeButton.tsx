"use client";

import { useDarkMode } from "../contexts/DarkModeContext";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <button
      className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg border transition ${
        isDarkMode
          ? "bg-gray-200 text-black border-gray-600 hover:bg-gray-600 hover:text-white"
          : "bg-gray-700 text-white border-gray-300 hover:bg-gray-300 hover:text-black"
      } shadow-lg`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? "L" : "D"}
    </button>
  );
};

export default DarkModeButton;
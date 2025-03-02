"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // 기본값은 false
  const [isMounted, setIsMounted] = useState(false); // Hydration 오류 방지

  // ✅ 클라이언트에서 쿠키를 읽어 상태 업데이트
  useEffect(() => {
    const savedDarkMode = Cookies.get("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
    setIsMounted(true); // 마운트 완료 상태 변경
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    Cookies.set("darkMode", String(!isDarkMode), { expires: 365 });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {isMounted ? children : null} {/* 🚀 마운트되기 전에는 렌더링 방지 */}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
"use client";

import React, { useState } from "react";
import InputForm from "../components/InputForm";
import Loading from "../components/Loading";
import { useDarkMode } from "../contexts/DarkModeContext";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleAnalyze = async (name: string, email: string, number: string, organization: string) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, number, organization }),
      });

      const result = await response.json();

      sessionStorage.setItem(
        "input2analysis",
        JSON.stringify({
          name,
          email,
          number,
          organization,
          riskLevel: result.risk_level,
          securityRecommendations: result.security_recommendations,
          isDarkMode: isDarkMode,
        })
      );
        window.location.href = "/result";
    } catch (error) {
      console.error("Error during analysis:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} flex flex-col items-center justify-center px-4 py-8`}>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">SE-curity: 개인정보 노출 분석</h1>
        <p className="mt-2 text-lg">개인정보가 온라인에서 얼마나 안전한지 확인해보세요.</p>
      </header>
      {isLoading ? (
        <Loading />
      ) : (
        <InputForm setIsLoading={setIsLoading} onAnalyze={handleAnalyze} isDarkMode={isDarkMode} />
      )}
    </div>
  );
};

export default Home;
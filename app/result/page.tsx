"use client";

import { useEffect, useState } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const ResultPage = () => {
  const [resultData, setResultData] = useState<any>({});
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = sessionStorage.getItem("input2analysis");
      if (storedData) {
        setResultData(JSON.parse(storedData));
      }
    }
  }, []);

  const { name = "Unknown", email = "Unknown", number = "Unknown", organization = "Unknown", riskLevel = "N/A", securityRecommendations = [] } = resultData;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} flex flex-col items-center justify-center px-4`}>
      <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : ''}`}>분석 결과</h1>

      <div className={`w-full max-w-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md`}>
        <div className="mb-4">
          <p className={`text-sm ${isDarkMode ? 'text-gray-100' : ''} font-semibold`}>이름: {name}</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-100' : ''} font-semibold`}>이메일: {email}</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-100' : ''} font-semibold`}>전화번호: {number}</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-100' : ''} font-semibold`}>회사/학교명: {organization}</p>
        </div>

        <div className="mb-4">
          <p className={`font-semibold text-lg ${isDarkMode ? 'text-white' : ''}`}>위험도 평가</p>
          <p className={`text-xl font-semibold ${riskLevel === "높음" ? "text-red-600" : "text-green-600"}`}>
            {riskLevel}
          </p>
        </div>

        <div className="mb-4">
          <p className={`font-semibold text-lg ${isDarkMode ? 'text-white' : ''}`}>보안 조치 추천</p>
          <ul className="list-disc pl-5">
            {securityRecommendations.length > 0 ? (
              securityRecommendations.map((rec: string, index: number) => (
                <li key={index} className={`${isDarkMode ? 'text-gray-100' : ''} text-sm`}>{rec}</li>
              ))
            ) : (
              <li className={`text-sm text-gray-500 ${isDarkMode ? 'text-gray-100' : ''}`}>추천 사항이 없습니다.</li>
            )}
          </ul>
        </div>

        <button
          className="w-full py-2 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700"
          onClick={() => window.location.href = "/"} 
        >
          다시 분석하기
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
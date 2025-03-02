// app/loading.tsx
import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <p className="text-lg font-semibold">페이지 로딩 중...</p>
      <div className="mt-4 animate-spin border-4 border-t-4 border-blue-600 rounded-full w-12 h-12 mx-auto"></div>
    </div>
  );
};

export default LoadingPage;
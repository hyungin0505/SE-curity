// components/Loading.tsx
"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="text-center">
        <p className="text-white text-lg">정보 분석 중...</p>
        <div className="mt-4 animate-spin border-4 border-t-4 border-blue-600 rounded-full w-12 h-12 mx-auto"></div>
      </div>
    </div>
  );
};

export default Loading;
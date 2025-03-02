import React, { useState } from "react";

interface InputFormProps {
  setIsLoading: (loading: boolean) => void;
  onAnalyze: (name: string, email: string, number: string, organization: string) => void;
  isDarkMode: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ setIsLoading, onAnalyze, isDarkMode}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [number, setNumber] = useState("");
  // const [birthday, setBirthday] = useState("");
  const [organization, setOrganization] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return alert("이름과 이메일을 입력하세요.");
    onAnalyze(name, email, number, organization);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}
    >
      <div className="flex gap-4">
      {/* 이름 입력 */}
      <div className="mb-4 w-1/3">
        <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          이름
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="홍길동"
          className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-500 text-white' : ''}`}
        />
      </div>
      {/* 이메일 입력 */}
      <div className="mb-4 w-2/3">
        <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          이메일
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-500 text-white' : ''}`}
        />
      </div>
      </div>

      <div className="flex gap-4">
      {/* 전화번호 입력 */}
      <div className="mb-4 w-1/2">
        <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          전화번호 (선택)
        </label>
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="01012349876"
          className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-500 text-white' : ''}`}
        />
      </div>
      {/* 회사/학교명 입력 */}
      <div className="mb-4 w-1/2">
        <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          회사/학교명 (선택)
        </label>
        <input
          type="text"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="한국대학교"
          className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-500 text-white' : ''}`}
        />
      </div>

      {/* 생년월일 입력
      <div className="mb-4">
        <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          생년월일 (선택)
        </label>
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          placeholder="01012349876"
          className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-500 text-white' : ''}`}
        />
      </div> */}

      </div>

      {/* 제출 버튼 */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
          분석 시작
          </button>
    </form>
  );
};

export default InputForm;
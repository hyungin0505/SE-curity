/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // app 폴더 내의 모든 파일 포함
    "./components/**/*.{js,ts,jsx,tsx}", // components 폴더 내의 모든 파일 포함
  ],
  darkMode: 'class', // 다크 모드를 사용할 때 'class' 옵션을 사용
  theme: {
    extend: {},
  },
  plugins: [],
}
import { Metadata } from "next";
import { DarkModeProvider } from "../contexts/DarkModeContext";
import "../styles/globals.css";
import DarkModeButton from "../components/DarkModeButton";

export const metadata: Metadata = {
  title: "SE-curity",
  description: "개인정보 노출 분석 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <DarkModeProvider>
          {children}
          <DarkModeButton />
        </DarkModeProvider>
      </body>
    </html>
  );
}
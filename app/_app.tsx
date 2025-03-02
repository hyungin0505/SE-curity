// app/_app.tsx
import React from 'react';
import { DarkModeProvider } from '../contexts/DarkModeContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: { Component: React.ElementType, pageProps: any }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}
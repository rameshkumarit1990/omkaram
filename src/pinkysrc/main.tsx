
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LyricsProvider } from './components/LyricsProvider'

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <LyricsProvider>
      <App />
    </LyricsProvider>
  </React.StrictMode>
)
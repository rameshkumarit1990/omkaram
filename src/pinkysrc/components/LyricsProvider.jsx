import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// interface LyricsContextType {
//   lyrics: string[];
//   setLyrics: Dispatch<SetStateAction<string[]>>;
//   name: string;
//   setName: Dispatch<SetStateAction<string>>;
// }

const LyricsContext = createContext(undefined);

export const useLyrics = () => {
  const context = useContext(LyricsContext);
  if (!context) {
    throw new Error('useLyrics must be used within a LyricsProvider');
  }
  return context;
};

// interface LyricsProviderProps {
//   children: ReactNode;
// }

export const LyricsProvider = ({ children }) => {
  const [lyrics, setLyrics] = useState([]);
  const [name, setName] = useState('');

  return (
    <LyricsContext.Provider value={{ lyrics, setLyrics, name, setName }}>
      {children}
    </LyricsContext.Provider>
  );
};

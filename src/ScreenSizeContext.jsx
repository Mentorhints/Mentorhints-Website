import React, { createContext, useState, useEffect } from 'react';

export const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 850);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 850);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isDesktop }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

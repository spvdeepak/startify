import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState("/");

  let location = useLocation();
  useEffect(() => {
    setCurrentPath(location ? location.pathname : "/");
  }, [location]);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        currentPath,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

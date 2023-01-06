import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [movieID, setMovieID] = useState("");

  return (
    <AppContext.Provider
      value={{
        movieID,
        setMovieID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

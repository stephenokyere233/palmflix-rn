import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [movieID, setMovieID] = useState("");
  const [mediaType, setMediaType] = useState("movie");

  return (
    <AppContext.Provider
      value={{
        movieID,
        setMovieID,
        mediaType,
        setMediaType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

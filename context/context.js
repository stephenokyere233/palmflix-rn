import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

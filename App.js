import React from "react";
import { StatusBar } from "expo-status-bar";
import MainContainer from "./components/Navbar/MainNavigation";
import { AppProvider } from "./context/context";

const App = () => {
  return (
    <>
      <AppProvider>
        <MainContainer />
      </AppProvider>
      <StatusBar barStyle="light-content" />
    </>
  );
};

export default App;

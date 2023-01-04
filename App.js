import { StatusBar } from "expo-status-bar";
import React from "react";
import { withExpoSnack } from "nativewind";

import { SafeAreaView, Text, View } from "react-native";
import { styled } from "nativewind";
import MainNav from "./components/Navbar/MainNav";
import TitleBar from "./components/Navbar/TitleBar";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);

const App = () => {
  return (
    <StyledSafeAreaView className="flex flex-col flex-1">
      <TitleBar />
      <StyledView className="flex-1 items-center bg-red-500 justify-center">
        <StyledText className="text-slate-800">Try editing me! 🎉</StyledText>
        <StatusBar hidden={true} barStyle="light-content" />
      </StyledView>
      <MainNav />
    </StyledSafeAreaView>
  );
};

export default withExpoSnack(App);

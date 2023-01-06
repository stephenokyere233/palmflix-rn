import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
// import { useFonts } from "expo-font";

const TitleBar = () => {
  return (
    <View className="px-4 flex-row h-20 items-center bg-[#101029] justify-between">
      <Text className="uppercase tracking-widest font-bold text-4xl text-purple-700">
        PalmFlix
      </Text>
      <Feather name="moon" size={32} color="white" />
    </View>
  );
};
export default TitleBar;

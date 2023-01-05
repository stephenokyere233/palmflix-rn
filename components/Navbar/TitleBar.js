import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import tw from "twrnc";
import { useFonts } from "expo-font";

const TitleBar = () => {
  // const [loaded] = useFonts({
  //   Poppins: require("./assets/fonts/poppins.ttf"),
  // });
  // if (!loaded) {
  //   return null;
  // }
  // style={{fontFamily:'Poppins'}}
  return (
    <View
      style={tw`px-4 flex-row h-20 items-center bg-[#101029] justify-between`}
    >
      <Text
        style={tw`uppercase tracking-widest font-bold text-4xl text-purple-700`}
      >
        PalmFlix
      </Text>
      <Feather name="moon" size={32} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "800",
    // letterSpacing: "widest",
    textTransform: "uppercase",
    color: "#7B4DFF",
  },
});
export default TitleBar;

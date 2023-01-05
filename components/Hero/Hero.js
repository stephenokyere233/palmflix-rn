import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CardContainer from "../cardContainer/CardContainer";
import tw from "twrnc";


const Hero = () => {
  return (
    <View style={tw`flex flex-1 bg-[#222]`}>
      <CardContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    // borderColor: "#4299E1",
    alignItems: "center",
    backgroundColor: "#E53E3E",
    justifyContent: "center",
  },
});

export default Hero;

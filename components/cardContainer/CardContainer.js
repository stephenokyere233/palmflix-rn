import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import tw from "twrnc";

const CardContainer = () => {
  return (
    <View style={tw`flex flex-1 text-[#fff]`}>
      <Text style={tw`border p-2 font-bold text-center text-2xl text-white`}>
        Discover Movies
      </Text>
      <ScrollView>
        <View style={tw`text-white`}>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
          <Text>Card Container</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default CardContainer;

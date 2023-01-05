import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import tw from "twrnc";

const MainNav = ({navigation}) => {
  return (
    <View style={tw`bottom-0 h-20 bg-black flex-row items-center`}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Discover");
        }}
      >
        <Feather name="home" size={35} color="white" style={tw`mx-6`} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        <FontAwesome name="search" size={35} color="white" style={tw`mx-6`} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Trending");
        }}
      >
        <FontAwesome5 name="fire" size={35} color="white" style={tw`mx-6`} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TV Shows");
        }}
      >
        <Feather name="tv" size={35} color="white" style={tw`mx-6`} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Top Rated");
        }}
      >
        <MaterialIcons name="movie" size={35} color="white" style={tw`mx-6`} />
      </TouchableOpacity>
    </View>
  );
};


export default MainNav;

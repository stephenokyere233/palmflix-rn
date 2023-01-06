import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import tw from "twrnc";
import SearchHero from "../components/Hero/SearchHero";

const Search = ({ navigation }) => {
  const [value, setValue] = useState("");
  // const
  return (
    // <SafeAreaView>
      <View style={tw`flex flex-1 pt-14 bg-[#021D44]`}>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="What are you watching today?"
          className="border text-xl p-2 m-2 bg-white border-white"
        />
        <SearchHero query={value} navigation={navigation} />
      </View>
    // </SafeAreaView>
  );
};

export default Search;

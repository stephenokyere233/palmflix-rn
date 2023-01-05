import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import tw from "twrnc";
import SearchHero from "../components/Hero/SearchHero";

const Search = () => {
  const [value, setValue] = useState("");
  // const
  return (
    <View style={tw`flex flex-1 bg-[#021D44]`}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="What are you watching today?"
        className="border text-xl p-2 m-2 bg-white border-white"
      />
      <SearchHero query={value} />
    </View>
  );
};

export default Search;

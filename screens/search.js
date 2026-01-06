import React, { useState } from "react";
import { TextInput, View } from "react-native";
import SearchHero from "../components/Hero/SearchHero";

const Search = ({ navigation }) => {
  const [value, setValue] = useState("");
  return (
    <View className="flex flex-1 pt-14 bg-[#021D44]">
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="What are you watching today?"
        className="text-xl p-2 m-2 bg-white"
      />
      <SearchHero query={value} navigation={navigation} />
    </View>
  );
};

export default Search;

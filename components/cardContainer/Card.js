import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
import { img_path } from "../../constants/keys";

const Card = (props) => {
  return (
    // <View className="w-[150px] m-4">
      <Image
        source={{
          uri: `${img_path}${props.image}`,
          cache: "only-if-cached",
        }}
        className="w-[170px] border p-2 bg-gray-600  m-4 rounded-lg h-[250px] object-cover"
      />
    // </View>
  );
};

export default Card;

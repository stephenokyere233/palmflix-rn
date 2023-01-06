import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";
import { img_path } from "../../constants/keys";

const Card = (props) => {
  return (
    // <View className="w-[150px] m-4">
    <TouchableOpacity
      onPress={()=>{
        props.navigation.navigate('Movie Details')
      }}
    >
      <Image
        source={{
          uri: `${img_path}${props.image}`,
          cache: "only-if-cached",
        }}
        className="w-[170px] border p-2 bg-gray-600  m-4 rounded-lg h-[250px] object-cover"
      />
    </TouchableOpacity>
    // </View>
  );
};

export default Card;

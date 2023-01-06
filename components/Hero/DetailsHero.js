import React from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";
import { img_path } from "../../constants/keys";
import useGetMoviesData from "../../hooks/useGetMovieDetails";

const DetailsHero = ({
  image,
  rating,
  title,
  status,
  release,
  duration,
  desc,
  movieID,
}) => {
  const { movie, error } = useGetMoviesData(movieID);
//   console.log(movie);
  return (
    <ScrollView className="bg-[#021D44] flex-1">
      <View className=" h-[250px]">
        <Image
          source={{
            uri: `${img_path}${image}`,
            cache: "only-if-cached",
          }}
          className="w-full h-[250px]"
        />
        <View className="mx-4 w-[150px] bg-purple-600 p-2  rounded-lg absolute bottom-0 my-6">
          <Button title="Watch Trailer" color="blueviolet" />
        </View>
      </View>
      {/* title */}
      <View className="flex flex-row px-4 py-2">
        {/* <Text className="text-purple-500">Title:</Text> */}
        <Text className="text-white capitalize font-medium text-2xl">
          {title}
        </Text>
      </View>
      {/* ratings */}
      <View className="flex p-4 flex-row justify-between px-4 text-white">
        <View className="border-2 border-yellow-400 rounded-lg h-24 flex items-center justify-center w-32">
          <Text className="text-4xl text-yellow-400">{rating?.toFixed(1)}</Text>
        </View>
        <View className="w-40 h-28 flex justify-center text-xl gap-2 px-4 flex-1">
          <View className="flex flex-row gap-x-2">
            <Text className="text-purple-500">Status:</Text>
            <Text className="text-white">{status}</Text>
          </View>
          <View className="flex flex-row gap-x-2">
            <Text className="text-purple-500">Duration:</Text>
            <Text className="text-white">{duration}mins</Text>
          </View>
          <View className="flex flex-row gap-x-2">
            <Text className="text-purple-500">Release Date:</Text>
            <Text className="text-white">{release}</Text>
          </View>
        </View>
      </View>
      {/* descriptiom */}
      <View className=" flex-1">
        <Text className="text-xl text-white font-medium pb-6 px-4">{desc}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailsHero;

import React from "react";
import { View, Text, Image, Button,ScrollView } from "react-native";

const MovieDetails = () => {
  return (
    <ScrollView className="bg-[#021D44] flex-1">
      <View className=" h-[250px]">
        <Image
          source={{
            uri: `https://res.cloudinary.com/devsteveserver/image/upload/v1667340301/powrps_mooiwz.png`,
            cache: "only-if-cached",
          }}
          className="w-full h-[250px]"
        />
        <View className="mx-4 w-[150px] bg-purple-600 p-2  rounded-lg absolute bottom-0 my-6">
          <Button title="Watch Trailer" color="blueviolet" />
        </View>
      </View>
      {/* title */}
      {/* <View className="flex flex-row px-4 py-2">
        <Text className="text-purple-500">Title:</Text>
        <Text className="text-white capitalize">Top BOy</Text>
      </View> */}
      {/* ratings */}
      <View className="flex p-4 flex-row justify-between px-4 text-white">
        <View className="border-2 border-yellow-400 rounded-lg h-24 flex items-center justify-center w-32">
          <Text className="text-4xl text-yellow-400">0.0</Text>
        </View>
        <View className="w-40 h-28 flex justify-center text-xl gap-2 px-4 flex-1">
          <View className="flex flex-row gap-x-2">
            <Text className="text-purple-500">Status:</Text>
            <Text className="text-white">Status</Text>
          </View>
          <View className="flex flex-row gap-x-2">
            <Text className="text-purple-500">Duration:</Text>
            <Text className="text-white">Status</Text>
          </View>
          <View className="flex flex-row gap-x-2">
            <Text className="text-purple-500">Release Date:</Text>
            <Text className="text-white">Status</Text>
          </View>
        </View>
      </View>
      {/* descriptiom */}
      <View className=" flex-1">
        <Text className="text-xl text-white font-medium pb-6 px-4">
          This hook makes an API call to two endpoints using Axios, filters the
          results to remove undefined values, removes undefined keys from the
          objects in the results, and returns the filtered and cleaned results
          in a single object. The hook also handles errors and returns the error
          in case of a failure. You can use this hook in a functional component
          like this:
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;

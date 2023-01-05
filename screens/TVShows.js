import React from "react";
import { View, Text, FlatList } from "react-native";
import Card from "../components/cardContainer/Card";
import { tv_shows } from "../constants/keys";
import useGetData from "../hooks/useGetData";


const TVShows = () => {
  const {data,loading,error}=useGetData(tv_shows)
  return (
    <View className={`flex-1 flex items-center justify-center bg-[#021D44]`}>
      <View className={`w-full`}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={({ id }) => id}
          renderItem={(movie) => (
            <Card name={movie.item.title} image={movie.item.poster_path} />
          )}
        />
      </View>
    </View>
  );
};

export default TVShows;

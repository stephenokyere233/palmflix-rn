import React from "react";
import { View, Text, FlatList } from "react-native";
import Card from "../components/cardContainer/Card";
import { trending_movies } from "../constants/keys";
import useGetData from "../hooks/useGetData";

const Trending = () => {
  const { data, loading, error } = useGetData(trending_movies);

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

export default Trending;

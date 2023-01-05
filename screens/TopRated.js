import React, { useContext, useEffect } from "react";
import Card from "../components/cardContainer/Card";
import { View, Text, FlatList } from "react-native";
import { top_rated } from "../constants/keys";
import useGetData from "../hooks/useGetData";
const TopRated = () => {
  const { data, loading } = useGetData(top_rated);
  if (!data) return <Text>Loading...</Text>;

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

export default TopRated;

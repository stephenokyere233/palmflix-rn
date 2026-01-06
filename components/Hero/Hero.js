import React from "react";
import { FlatList, View } from "react-native";
import useGetData from "../../hooks/useGetData";
import Card from "../cardContainer/Card";

const Hero = ({ endpoint, navigation, mediaType = "movie" }) => {
  const { data, loading } = useGetData(endpoint);

  return (
    <View className="flex-1 bg-[#021D44]">
      <FlatList
        refreshing={loading}
        onRefresh={() => {}}
        data={data}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "center" }}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Card
            navigation={navigation}
            id={item.id}
            image={item.poster_path}
            mediaType={item.media_type || mediaType}
          />
        )}
      />
    </View>
  );
};

export default Hero;

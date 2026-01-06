import React from "react";
import { Button, FlatList, Image, Linking, ScrollView, Text, View } from "react-native";
import { img_path } from "../../constants/keys";

const DetailsHero = ({ movie }) => {
  const {
    backdrop_path,
    vote_average,
    title,
    name,
    status,
    release_date,
    runtime,
    overview,
    genres,
    videos,
    credits,
  } = movie;

  const displayTitle = title || name;
  const trailer =
    videos?.results?.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    ) || videos?.results?.[0];

  const openTrailer = () => {
    if (trailer?.key) {
      Linking.openURL(`https://www.youtube.com/watch?v=${trailer.key}`);
    }
  };

  return (
    <ScrollView className="bg-[#021D44] flex-1">
      {/* Hero Image */}
      <View className="h-[250px]">
        <Image
          source={{
            uri: `${img_path}${backdrop_path}`,
          }}
          className="w-full h-[250px]"
        />
        {trailer && (
          <View className="mx-4 w-[150px] bg-purple-600 p-2 rounded-lg absolute bottom-0 my-6">
            <Button title="Watch Trailer" color="white" onPress={openTrailer} />
          </View>
        )}
      </View>

      {/* Title */}
      <View className="flex flex-row px-4 py-2">
        <Text className="text-white capitalize font-medium text-2xl">{displayTitle}</Text>
      </View>

      {/* Genres */}
      {genres && genres.length > 0 && (
        <View className="flex flex-row flex-wrap px-4 gap-2 mb-2">
          {genres.map((genre) => (
            <View key={genre.id} className="bg-purple-600/30 px-3 py-1 rounded-full">
              <Text className="text-purple-300 text-sm">{genre.name}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Ratings & Info */}
      <View className="flex p-4 flex-row justify-between px-4 text-white">
        <View className="border-2 border-yellow-400 rounded-lg h-24 flex items-center justify-center w-32">
          <Text className="text-4xl text-yellow-400">{vote_average?.toFixed(1)}</Text>
        </View>
        <View className="w-40 h-28 flex justify-center text-xl gap-2 px-4 flex-1">
          <View className="flex flex-row gap-x-2">
            <Text className="text-purple-500">Status:</Text>
            <Text className="text-white">{status}</Text>
          </View>
          <View className="flex flex-row gap-x-2">
            <Text className="text-purple-500">Duration:</Text>
            <Text className="text-white">{runtime}mins</Text>
          </View>
          <View className="flex flex-row gap-x-2">
            <Text className="text-purple-500">Release Date:</Text>
            <Text className="text-white">{release_date}</Text>
          </View>
        </View>
      </View>

      {/* Description */}
      <View className="flex-1 px-4 pb-4">
        <Text className="text-xl text-white font-medium">{overview}</Text>
      </View>

      {/* Cast */}
      {credits?.cast && credits.cast.length > 0 && (
        <View className="px-4 pb-6">
          <Text className="text-purple-500 text-xl font-medium mb-3">Cast</Text>
          <FlatList
            data={credits.cast.slice(0, 10)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="mr-4 items-center w-20">
                <Image
                  source={{
                    uri: item.profile_path
                      ? `${img_path}${item.profile_path}`
                      : "https://via.placeholder.com/100x150?text=No+Image",
                  }}
                  className="w-16 h-16 rounded-full"
                />
                <Text className="text-white text-xs text-center mt-1" numberOfLines={2}>
                  {item.name}
                </Text>
                <Text className="text-gray-400 text-xs text-center" numberOfLines={1}>
                  {item.character}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default DetailsHero;

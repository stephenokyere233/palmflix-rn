import React, { useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import DetailsHero from "../components/Hero/DetailsHero";
import { AppContext } from "../context/context";
import useGetMoviesData from "../hooks/useGetMovieDetails";

const MovieDetails = () => {
  const { movieID, mediaType } = useContext(AppContext);
  const { movie, loading, error } = useGetMoviesData(movieID, mediaType);

  if (loading) {
    return (
      <View className="flex-1 bg-[#021D44] items-center justify-center">
        <ActivityIndicator size="large" color="#8B5CF6" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 bg-[#021D44] items-center justify-center">
        <Text className="text-white text-lg">Failed to load movie details</Text>
      </View>
    );
  }

  if (!movie) {
    return (
      <View className="flex-1 bg-[#021D44] items-center justify-center">
        <Text className="text-white text-lg">No movie found</Text>
      </View>
    );
  }

  return <DetailsHero movie={movie} />;
};

export default MovieDetails;

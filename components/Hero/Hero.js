import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, RefreshControl } from "react-native";
import Card from "../cardContainer/Card";
import LoadingSpinner from "../loader/loader";
import { discover_movies } from "../../constants/keys";
import { AppContext } from "../../context/context";
import useGetData from "../../hooks/useGetData";

const Hero = ({ endpoint }) => {
  const { data, loading } = useGetData(endpoint);
  // if (loading) return <LoadingSpinner />;

  return (
    <View className={`flex-1 flex items-center justify-center bg-[#021D44]`}>
      <View className={`w-full`}>
        <FlatList
        refreshing={loading?true:false}
        onRefresh={()=>{}}
          // refreshControl={<RefreshControl refreshing={true} />}
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={(movie) => (
            <Card
              name={movie.item.title}
              pressed={() => console.log(movie.item.id)}
              id={movie.item.id}
              image={movie.item.poster_path}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Hero;

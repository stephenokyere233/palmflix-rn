import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, RefreshControl } from "react-native";
import Card from "../cardContainer/Card";
import LoadingSpinner from "../loader/loader";
import { discover_movies } from "../../constants/keys";
import { AppContext } from "../../context/context";
import useSearch from "../../hooks/useSearch";

const SearchHero = ({ query }) => {
  const { data, loading } = useSearch(query);

  return (
    <View className={`w-full flex-1`}>
      <FlatList
        refreshing={loading ? true : false}
        onRefresh={() => {}}
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
    // </View>
  );
};

export default SearchHero;

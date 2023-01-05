import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "../components/cardContainer/Card";
import { discover_movies } from "../constants/keys";
import { AppContext } from "../context/context";
import useGetData from "../hooks/useGetData";

const Home = () => {
  const { data, loading } = useGetData(discover_movies);
  if (loading) return <Text>Loading...</Text>;

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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: "#021D44",
    borderColor: "white",
    borderWidth: 2,
    flexDirection: "row",
  },
  container: {
    // flex: 1,
    width: "100%",
    backgroundColor: "#021D44",
    overflow: "scroll",
    // borderWidth: 2,
    // borderColor: "white",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

export default Home;

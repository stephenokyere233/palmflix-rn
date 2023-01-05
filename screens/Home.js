import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  VirtualizedList,
} from "react-native";
import { useCallback } from "react";
import tw from "twrnc";
import Card from "../components/cardContainer/Card";
import { discover_movies } from "../constants/keys";

const Home = () => {
  const [data, setData] = useState([]);
  const getPopularMovies = useCallback(async () => {
    try {
      const response = await axios.get(discover_movies);
      console.log(response.data.results);
      setData(response.data.results);
    } catch (error) {
      console.error(error);
      return <Text>Not found</Text>;
    }
  }, []);
  //   const Card = (props) => {
  //     return (
  //       <View style={tw`border h-20`}>
  //         <Text style={tw`text-white capitalize text-xl`}>{props.name}</Text>
  //       </View>
  //     );
  //   };
  //   const renderItem = ({ movie }) => {
  //     <Card name={movie.item.title} />;
  //   };
  useEffect(() => {
    getPopularMovies();
  }, []);
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

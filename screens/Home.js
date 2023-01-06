import React from "react";
import Hero from "../components/Hero/Hero";
import { discover_movies } from "../constants/keys";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MovieDetails from "./MovieDetails";
const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <Hero endpoint={discover_movies} navigation={navigation} />
  );
};

export default Home;

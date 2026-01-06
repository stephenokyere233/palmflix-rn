import React from "react";
import Hero from "../components/Hero/Hero";
import { discover_movies } from "../constants/keys";

const Home = ({ navigation }) => {
  return <Hero endpoint={discover_movies} navigation={navigation} />;
};

export default Home;

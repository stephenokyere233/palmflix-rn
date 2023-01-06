import React from "react";
import Hero from "../components/Hero/Hero";
import { trending_movies } from "../constants/keys";

const Trending = ({navigation}) => {
  return <Hero endpoint={trending_movies} navigation={navigation}/>;
};

export default Trending;

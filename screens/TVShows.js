import React from "react";
import Hero from "../components/Hero/Hero";
import { tv_shows } from "../constants/keys";

const TVShows = ({navigation}) => {
  return <Hero endpoint={tv_shows} navigation={navigation} />;
};

export default TVShows;

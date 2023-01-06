import React from "react";
import Hero from "../components/Hero/Hero";
import { top_rated } from "../constants/keys";

const TopRated = ({ navigation }) => {
  return <Hero endpoint={top_rated} navigation={navigation} />;
};

export default TopRated;

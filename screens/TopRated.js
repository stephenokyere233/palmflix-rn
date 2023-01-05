import React from "react";
import Hero from "../components/Hero/Hero";
import { top_rated } from "../constants/keys";

const TopRated = () => {
  return <Hero endpoint={top_rated} />;
};

export default TopRated;

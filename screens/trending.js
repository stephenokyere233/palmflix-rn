import React from "react";
import Hero from "../components/Hero/Hero";
import { trending_movies } from "../constants/keys";

const Trending = () => {
  return <Hero endpoint={trending_movies} />;
};

export default Trending;

import React from "react";
import Hero from "../components/Hero/Hero";
import { discover_movies } from "../constants/keys";

const Home = () => {
  return <Hero endpoint={discover_movies} />;
};

export default Home;

import React from "react";
import Hero from "../components/Hero/Hero";
import { tv_shows } from "../constants/keys";

const TVShows = () => {
  return <Hero endpoint={tv_shows} />;
};

export default TVShows;

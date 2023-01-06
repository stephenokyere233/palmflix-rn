import React, { useContext } from "react";
import DetailsHero from "../components/Hero/DetailsHero";
import { AppContext } from "../context/context";
import useGetMoviesData from "../hooks/useGetMovieDetails";

const MovieDetails = () => {
  // const {movieID}=useContext(AppContext)
  const { movieID, setMovieID } = useContext(AppContext);
  const { movie, error } = useGetMoviesData(movieID);
  //   console.log(`movie details ${movieID}`);

  //   console.log(movie);
  return (
    <DetailsHero
      movieID={movieID}
      desc={movie.overview}
      duration={movie.runtime}
      image={movie.backdrop_path}
      rating={movie.vote_average}
      status={movie.status}
      release={movie.release_date}
      title={movie.title ? movie.title : movie.name}
    />
  );
};

export default MovieDetails;

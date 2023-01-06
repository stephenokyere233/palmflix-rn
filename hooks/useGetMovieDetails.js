import React from "react";
import { API_KEY, api_url } from "../constants/keys";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useGetMoviesData = (movieID) => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const movieDetails = `${api_url}/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
    const tvDetails = `${api_url}/tv/${movieID}?api_key=${API_KEY}&language=en-US`;

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(movieDetails);
        // const tvresponse = await axios.get(tvDetails);
      const results1 = response.data;
        // const results2 = tvresponse.data;
        // console.log(`movie ${results1}`);
    
      //   const filteredResults = [results1, results2]
      //     .flat()
      //     .filter((val) => val !== undefined)
      //     .map((result) => {
      //       return Object.fromEntries(
      //         Object.entries(result).filter(([key, value]) => value !== undefined)
      //       );
      //     });
      setMovie(response.data);
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { movie, error };
};

export default useGetMoviesData;
